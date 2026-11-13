"""Bloqueia arquivos privados e verificadores conhecidos no site público.

Inspeciona os arquivos rastreados pelo Git, inclusive os que já estiverem
rastreados apesar do .gitignore. Nunca imprime o conteúdo de uma ocorrência.
"""

import argparse
from pathlib import Path, PurePosixPath
import re
import subprocess
import sys


PRIVATE_DIRS = {"servidor-calculo", ".wrangler", "node_modules", ".git"}
PRIVATE_NAMES = {"segredo.js", "motor-me.js", "wrangler.toml", "wrangler.json", "wrangler.jsonc"}
PRIVATE_SUFFIXES = {".pem", ".key", ".p12", ".pfx", ".bak", ".orig", ".old"}
PATTERNS = (
    ("verificador antigo de credenciais", re.compile(
        r"\b(?:const|let|var)\s+SELO\s*=\s*['\"][0-9a-f]{1024,}['\"]", re.I)),
    ("bloco hexadecimal extenso a revisar", re.compile(r"(['\"])[0-9a-f]{4096,}\1", re.I)),
    ("chave de assinatura exportada", re.compile(
        r"\bexport\s+const\s+CHAVE\s*=\s*['\"][0-9a-f]{64,}['\"]", re.I)),
    ("chave privada", re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----")),
)


def inspect_file(path, data):
    """Retorna descrições seguras, sem incluir o segredo identificado."""
    p = PurePosixPath(path)
    issues = []
    if any(part in PRIVATE_DIRS for part in p.parts):
        issues.append("diretório privado ou de desenvolvimento")
    env_file = p.name in {".env", ".dev.vars"} or p.name.startswith((".env.", ".dev.vars."))
    if env_file and p.name != ".env.example":
        issues.append("arquivo de variáveis de ambiente")
    if p.name in PRIVATE_NAMES or p.suffix.lower() in PRIVATE_SUFFIXES or p.name.endswith("~"):
        issues.append("arquivo privado ou cópia de segurança")
    try:
        text = data.decode("utf-8")
    except UnicodeDecodeError:
        return issues
    for description, pattern in PATTERNS:
        if pattern.search(text):
            issues.append(description)
    return issues


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[2])
    args = parser.parse_args()
    root = args.root.resolve()
    try:
        files = subprocess.check_output(["git", "ls-files", "-z"], cwd=root).split(b"\0")
    except (OSError, subprocess.CalledProcessError):
        print("Não foi possível obter os arquivos rastreados pelo Git.", file=sys.stderr)
        return 2
    found = []
    checked = 0
    for raw in files:
        if not raw:
            continue
        name = raw.decode("utf-8", errors="surrogateescape")
        path = root / name
        if path.is_symlink():
            found.append((name, ["link simbólico não permitido na publicação"]))
            continue
        if not path.is_file():
            continue
        checked += 1
        issues = inspect_file(name, path.read_bytes())
        if issues:
            found.append((name, issues))
    for name, issues in found:
        print(f"BLOQUEADO: {name!r}: {', '.join(issues)}")
    if found:
        print("Publicação recusada. Remova o material privado e revise o histórico se ele já foi enviado.")
        return 1
    print(f"Publicação verificada: {checked} arquivos rastreados, sem ocorrências das regras específicas.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
