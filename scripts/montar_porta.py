#!/usr/bin/env python3
"""Lista no service worker (sw.js) os arquivos publicados no GitHub.

Esses saem direto da rede de distribuição; qualquer outro endereço do site é pedido ao servidor.
Uso: python3 scripts/montar_porta.py [--verificar]
"""
import json, re, subprocess, sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[1]
FORA = ('.github/', 'scripts/', 'tests/', 'fonte/', '.gitignore', '.nojekyll', 'CNAME', 'SECURITY.md')


def lista():
    arquivos = subprocess.run(['git', 'ls-files', '--cached', '--others', '--exclude-standard'], cwd=RAIZ, capture_output=True, text=True, check=True).stdout.split('\n')
    # index.html da raiz é a porta (cópia de porta.html): o início do site vem do servidor
    return sorted('/' + a for a in arquivos if a and a != 'index.html' and not a.startswith(FORA) and (RAIZ / a).exists())


def main():
    sw = RAIZ / 'sw.js'
    texto = sw.read_text(encoding='utf-8')
    novo = re.sub(r'/\*publicos\*/.*?/\*fim\*/', '/*publicos*/' + json.dumps(lista(), ensure_ascii=False) + '/*fim*/', texto, flags=re.S)
    if '--verificar' in sys.argv:
        if novo != texto:
            print('sw.js fora de dia (rode scripts/montar_porta.py).')
            return 1
        print('Lista do service worker em dia.')
        return 0
    sw.write_text(novo, encoding='utf-8')
    print('Lista do service worker atualizada.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
