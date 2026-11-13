"""Política de segurança de conteúdo (CSP) de cada página publicada.

Gera a meta Content-Security-Policy de cada HTML com os hashes dos scripts
embutidos da própria página, para que só eles e os arquivos do site rodem.
O cabeçalho da hospedagem acrescenta frame-ancestors, que a meta não aceita.

Uso:
  python3 scripts/security/csp.py              atualiza as páginas
  python3 scripts/security/csp.py --verificar  falha se alguma página estiver desatualizada
"""

import argparse
import base64
import hashlib
from pathlib import Path
import re
import sys

RAIZ = Path(__file__).resolve().parents[2]
IGNORAR = {"node_modules", ".git", "tests", "servidor-calculo"}
META = re.compile(r'[ \t]*<meta http-equiv="Content-Security-Policy"[^>]*>\n?', re.I)
SCRIPT = re.compile(r"<script(?![^>]*\bsrc\s*=)([^>]*)>(.*?)</script>", re.S | re.I)
HANDLER = re.compile(r"<[a-z][^>]*\son[a-z]+\s*=", re.I)

SERVIDOR = ("https://api.engenhalab.com.br", "https://engenhalab-calculo.engenhalab.workers.dev",
            "http://localhost:8787", "http://127.0.0.1:8787")
ANALYTICS_SCRIPT = ("https://www.googletagmanager.com",)
# páginas de conta: sem estilos embutidos, como já eram
ESTILO_ESTRITO = {"offshore/conta.html", "offshore/documento.html", "offshore/admin.html"}
ANALYTICS_CONEXAO = ("https://*.google-analytics.com", "https://*.analytics.google.com", "https://*.googletagmanager.com")


def paginas():
    for p in sorted(RAIZ.rglob("*.html")):
        if not any(parte in IGNORAR for parte in p.relative_to(RAIZ).parts):
            yield p


def hashes(html):
    out = []
    for attrs, corpo in SCRIPT.findall(html):
        tipo = re.search(r'type\s*=\s*"([^"]+)"', attrs)
        if tipo and tipo.group(1).lower() in ("application/ld+json", "application/json", "text/plain"):
            continue  # dados, não executam
        h = base64.b64encode(hashlib.sha256(corpo.encode("utf-8")).digest()).decode()
        out.append(f"'sha256-{h}'")
    return sorted(set(out))


def politica(html, rel=""):
    analytics = "/assets/js/analytics.js" in html
    script = ["'self'", *hashes(html)]
    if "cdn.jsdelivr.net" in html:
        script.append("https://cdn.jsdelivr.net")
    if analytics:
        script.extend(ANALYTICS_SCRIPT)
    conexao = ["'self'", *SERVIDOR, *(ANALYTICS_CONEXAO if analytics else ())]
    imagem = ["'self'", "data:", "blob:", *(("https://*.google-analytics.com", "https://*.googletagmanager.com") if analytics else ())]
    partes = [
        "default-src 'self'",
        "script-src " + " ".join(script),
        "style-src 'self' https://fonts.googleapis.com" if rel in ESTILO_ESTRITO else "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' data: https://fonts.gstatic.com",
        "img-src " + " ".join(imagem),
        "connect-src " + " ".join(conexao),
        "worker-src 'self' blob:",
        "object-src 'none'",
        "base-uri 'none'",
        "form-action 'self'",
    ]
    return "; ".join(partes)


def aplicar(html, rel=""):
    sem = META.sub("", html)
    meta = f'  <meta http-equiv="Content-Security-Policy" content="{politica(sem, rel)}">\n'
    m = re.search(r"<head[^>]*>\n?", sem, re.I)
    if not m:
        return sem
    return sem[:m.end()] + meta + sem[m.end():]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--verificar", action="store_true")
    a = ap.parse_args()
    problemas = []
    for p in paginas():
        html = p.read_text(encoding="utf-8")
        rel = p.relative_to(RAIZ).as_posix()
        if HANDLER.search(re.sub(r"<script.*?</script>", "", html, flags=re.S | re.I)):
            problemas.append(f"{rel}: atributo de evento embutido (on...=) não roda com a política; use addEventListener")
        novo = aplicar(html, rel)
        if novo != html:
            if a.verificar:
                problemas.append(f"{rel}: política desatualizada; rode python3 scripts/security/csp.py")
            else:
                p.write_text(novo, encoding="utf-8")
                print("atualizada:", rel)
    for x in problemas:
        print(x, file=sys.stderr)
    if problemas:
        sys.exit(1)
    if a.verificar:
        print("Políticas de conteúdo em dia.")


if __name__ == "__main__":
    main()
