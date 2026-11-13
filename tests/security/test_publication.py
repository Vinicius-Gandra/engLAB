"""Casos de regressão de publicação, sem credenciais ou verificadores reais."""

import importlib.util
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest


ROOT = Path(__file__).resolve().parents[2]
SCRIPT = ROOT / "scripts/security/check_publication.py"
spec = importlib.util.spec_from_file_location("publication", SCRIPT)
publication = importlib.util.module_from_spec(spec)
spec.loader.exec_module(publication)


class PublicationTests(unittest.TestCase):
    def test_public_frontend_is_allowed(self):
        self.assertEqual([], publication.inspect_file("maquinas-eletricas/assets/js/config.js", b"window.ENGENHA_API='https://api.example.test';"))
        self.assertEqual([], publication.inspect_file("Acesso.html", b'const CHAVE = "estado-da-interface";'))

    def test_private_server_and_backups_are_blocked(self):
        for name in ["servidor-calculo/src/index.js", "offshore/.env", "segredo.js", "certificado.pem", "Acesso.html.bak"]:
            with self.subTest(name=name):
                self.assertTrue(publication.inspect_file(name, b"test"))

    def test_legacy_verifier_and_signing_key_are_blocked(self):
        for data in [b'const SELO = "' + b"a" * 2048 + b'";', b'export const CHAVE = "' + b"b" * 64 + b'";']:
            with self.subTest(size=len(data)):
                self.assertTrue(publication.inspect_file("Acesso.html", data))

    def test_binary_public_asset_is_allowed(self):
        self.assertEqual([], publication.inspect_file("assets/imagem.png", b"\x89PNG\xff\x00"))

    def test_tracked_secret_is_blocked_even_when_gitignored_and_is_not_logged(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            subprocess.run(["git", "init", "-q"], cwd=root, check=True)
            (root / ".gitignore").write_text(".env\n")
            (root / "index.html").write_text("<h1>Site público</h1>")
            subprocess.run(["git", "add", ".gitignore", "index.html"], cwd=root, check=True)
            result = subprocess.run([sys.executable, str(SCRIPT), "--root", directory], capture_output=True, text=True)
            self.assertEqual(0, result.returncode, result.stdout)
            (root / ".env").write_text("EXAMPLE_SECRET=fixture-never-print-this")
            subprocess.run(["git", "add", "-f", ".env"], cwd=root, check=True)
            result = subprocess.run([sys.executable, str(SCRIPT), "--root", directory], capture_output=True, text=True)
            self.assertEqual(1, result.returncode)
            self.assertIn(".env", result.stdout)
            self.assertNotIn("fixture-never-print-this", result.stdout + result.stderr)


if __name__ == "__main__":
    unittest.main()
