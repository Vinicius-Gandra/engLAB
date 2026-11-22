#!/usr/bin/env python3
"""Monta as páginas do laboratório offshore a partir de fonte/offshore/.

O que é igual em todas as páginas (cabeçalho do documento, barra do topo, abas das etapas, rodapé)
fica num lugar só: molde.html, cabecalho.html e abas.json. Cada página em fonte/offshore/paginas/
traz só o que é dela: um bloco de dados no começo e o conteúdo.

Os endereços de arquivos do próprio site recebem ?v=<impressão do conteúdo>: o navegador guarda o
arquivo e só baixa de novo quando ele muda.

Uso: python3 scripts/montar_offshore.py            monta as páginas
     python3 scripts/montar_offshore.py --verificar confere se as páginas publicadas estão em dia
"""
import hashlib, html, json, re, sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[1]
FONTE = RAIZ / 'fonte' / 'offshore'
SAIDA = RAIZ / 'offshore'
TEXTOS = {
    'pt': {'t_marca': 'EngenhaLab — todos os laboratórios', 't_voltar': 'Voltar a todos os laboratórios', 't_labs': 'Laboratórios',
           't_acoes': 'Ações', 't_tema': 'Alternar tema claro/escuro', 't_abas': 'Etapas do laboratório offshore'},
    'en': {'t_marca': 'EngenhaLab — all labs', 't_voltar': 'Back to all labs', 't_labs': 'Labs',
           't_acoes': 'Actions', 't_tema': 'Toggle light/dark theme', 't_abas': 'Offshore lab steps'},
}
ICONE = ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%2309131f'/%3E"
         "%3Cpath d='M8 50h48' stroke='%238195a2' stroke-width='3'/%3E%3Cpath d='M10 50C22 50 30 46 36 34S46 14 54 12' fill='none' stroke='%23f5ad69' stroke-width='5' stroke-linecap='round'/%3E%3C/svg%3E")
_impressoes = {}


def impressao(endereco):
    """Endereço local com ?v= do conteúdo; endereços externos ficam como estão."""
    if re.match(r'^(https?:|data:|//)', endereco):
        return endereco
    caminho = endereco.split('?')[0].split('#')[0]
    arquivo = (RAIZ / caminho.lstrip('/')) if caminho.startswith('/') else (SAIDA / caminho)
    if not arquivo.is_file():
        raise SystemExit(f'Arquivo citado não existe: {endereco}')
    if arquivo not in _impressoes:
        _impressoes[arquivo] = hashlib.sha256(arquivo.read_bytes()).hexdigest()[:10]
    return f'{caminho}?v={_impressoes[arquivo]}'


def versionar(texto):
    """Põe ?v= em todo src/href local e na lista de scripts da versão pública."""
    texto = re.sub(r'(\s(?:src|href)=")([^"]+)(")', lambda m: m.group(1) + (impressao(m.group(2)) if re.search(r'\.(js|css|png|jpg|webp|svg|glb|json)(\?|$)', m.group(2)) else m.group(2)) + m.group(3), texto)
    def lista(m):
        itens = json.loads(m.group(2))
        return m.group(1) + json.dumps([impressao(x) for x in itens], ensure_ascii=False) + m.group(3)
    return re.sub(r'(<script type="application/json" id="scripts-publicos">)(.*?)(</script>)', lista, texto, flags=re.S)


def ler(pagina):
    bruto = pagina.read_text(encoding='utf-8')
    m = re.match(r'<!--(.*?)-->\n', bruto, re.S)
    if not m:
        raise SystemExit(f'{pagina.name}: falta o bloco de dados no começo')
    return json.loads(m.group(1)), bruto[m.end():].rstrip('\n')


def montar(pagina):
    d, conteudo = ler(pagina)
    lingua = 'en' if d.get('lang', 'pt-BR').startswith('en') else 'pt'
    t = TEXTOS[lingua]
    molde = (FONTE / 'molde.html').read_text(encoding='utf-8')
    portao = ''
    if d.get('portao'):
        portao = '  <script src="assets/js/portao.js"%s></script>\n' % (' data-publico' if d['portao'] == 'publico' else '')
    cedo = ''.join(f'  <script src="{c}"></script>\n' for c in d.get('cedo', []))
    meta = ''
    if d.get('referrer'): meta += '  <meta name="referrer" content="no-referrer">\n'
    if d.get('robots'): meta += '  <meta name="robots" content="noindex, nofollow">\n'
    estilos = ''
    for i, c in enumerate(d['css_comum'][:1] + d['css'] + d['css_comum'][1:]):
        estilos += f'  <link rel="stylesheet" href="{c}">\n'
    analytics = ''
    if d.get('analytics'):
        analytics = '  <script defer src="/assets/js/analytics-config.js"></script>\n  <script defer src="/assets/js/analytics.js"></script>\n'
    importmap = f'  {d["importmap"]}\n' if d.get('importmap') else ''
    pular = f'  <a class="skip" href="{d["pular"][0]}">{d["pular"][1]}</a>\n' if d.get('pular') else ''
    cab = ''
    if d.get('cabecalho'):
        cab = (FONTE / 'cabecalho.html').read_text(encoding='utf-8').format(sobre=d['cabecalho']['sobre'], titulo=d['cabecalho']['titulo'], **t)
    abas = ''
    if d.get('aba') is not None:
        itens = ''
        for a in json.loads((FONTE / 'abas.json').read_text(encoding='utf-8')):
            atual = ' aria-current="page"' if a['href'] == d['aba'] else ''
            itens += f'<a class="s-area" data-flow-link href="{a["href"]}"{atual}><span class="s-area-number">{a["n"]}</span> {a[lingua]}</a>'
        abas = f'  <nav class="s-areas" aria-label="{t["t_abas"]}">{itens}</nav>\n'
    scripts = ''.join(f'  {s}\n' for s in d.get('scripts', []))
    corpo = (' ' + d['body']) if d.get('body') else ''
    saida = molde.format(lang=d.get('lang', 'pt-BR'), portao=portao, cedo=cedo, meta_extra=meta, descricao=d['descricao'], titulo=d['titulo'],
                         icone=d.get('icone') or ICONE, estilos=estilos, analytics=analytics, importmap=importmap, body=corpo,
                         pular=pular, cabecalho=cab, abas=abas, conteudo=conteudo, scripts=scripts)
    return versionar(saida)


def main():
    verificar = '--verificar' in sys.argv
    diferentes = []
    for pagina in sorted((FONTE / 'paginas').glob('*.html')):
        nova = montar(pagina)
        destino = SAIDA / pagina.name
        if verificar:
            atual = destino.read_text(encoding='utf-8') if destino.exists() else ''
            # a política de conteúdo é posta depois (scripts/security/csp.py)
            atual = re.sub(r'\s*<meta http-equiv="Content-Security-Policy" content="[^"]*">', '', atual)
            if atual != nova:
                diferentes.append(pagina.name)
        else:
            destino.write_text(nova, encoding='utf-8')
    if verificar and diferentes:
        print('Páginas do offshore fora de dia (rode scripts/montar_offshore.py):', ', '.join(diferentes))
        return 1
    print('Páginas do offshore ' + ('em dia.' if verificar else 'montadas.'))
    return 0


if __name__ == '__main__':
    sys.exit(main())
