/* EngenhaLab · service worker
   O que está publicado no GitHub (porta, login, laboratório offshore, arquivos comuns) sai direto da
   rede de distribuição. O resto do site vem do servidor de cálculo (rota site/arquivo), que confere a
   sessão quando o site está fechado. */
'use strict';
const API = /^(localhost|127\.0\.0\.1)$/.test(self.location.hostname) ? 'http://' + self.location.hostname + ':8787' : 'https://engenhalab-calculo.engenhalab.workers.dev';
const CACHE = 'engenha-porta', CHAVE = '/__porta/sessao';
// arquivos publicados no GitHub (lista gerada por scripts/montar_porta.py): saem direto da rede de distribuição
const PUBLICOS = new Set(/*publicos*/["/404.html", "/assets/css/analytics.css", "/assets/css/compartilhar.css", "/assets/css/dica-tela-cheia.css", "/assets/css/idioma-botao.css", "/assets/css/rodape.css", "/assets/js/analytics-config.js", "/assets/js/analytics.js", "/assets/js/anti-quadro.js", "/assets/js/compartilhar.js", "/assets/js/dica-tela-cheia.js", "/assets/js/endereco.js", "/assets/js/idioma-cedo.js", "/assets/js/idioma.js", "/assets/js/inicio-topo.js", "/assets/js/rodape.js", "/assets/js/termos.js", "/offshore/01-lancamento.html", "/offshore/02-catenaria.html", "/offshore/03-capacidade-axial.html", "/offshore/04-carga-lateral.html", "/offshore/05-estaca-3d.html", "/offshore/acelerometro-dc.html", "/offshore/admin.html", "/offshore/ajuda-instalacao.html", "/offshore/assets/css/admin.css", "/offshore/assets/css/ajuda.css", "/offshore/assets/css/campo3d.css", "/offshore/assets/css/chat.css", "/offshore/assets/css/conta-entrar.css", "/offshore/assets/css/conta-pagina.css", "/offshore/assets/css/conta.css", "/offshore/assets/css/dicas.css", "/offshore/assets/css/lancamento-movel.css", "/offshore/assets/css/lancamento.css", "/offshore/assets/css/offshore.css", "/offshore/assets/css/painel-lancamento.css", "/offshore/assets/css/visao-geral.css", "/offshore/assets/js/admin.js", "/offshore/assets/js/ajuda-dados.js", "/offshore/assets/js/ajuda.js", "/offshore/assets/js/calc.js", "/offshore/assets/js/campo3d.js", "/offshore/assets/js/casos-lancamento.js", "/offshore/assets/js/catenaria-vista3d.js", "/offshore/assets/js/chat.js", "/offshore/assets/js/config.js", "/offshore/assets/js/conta.js", "/offshore/assets/js/core.js", "/offshore/assets/js/dicas.js", "/offshore/assets/js/documento.js", "/offshore/assets/js/migracao-projeto.js", "/offshore/assets/js/modelos-estacas.js", "/offshore/assets/js/movel.js", "/offshore/assets/js/paginas/lancamento.js", "/offshore/assets/js/paginas/offshore.js", "/offshore/assets/js/painel-lancamento.js", "/offshore/assets/js/portao.js", "/offshore/assets/js/protegido.js", "/offshore/assets/js/relatorio-acesso.js", "/offshore/assets/js/sessao.js", "/offshore/assets/js/tema-inicio.js", "/offshore/assets/js/tema.js", "/offshore/assets/js/torpedo.js", "/offshore/assets/js/vendor/qrcode.js", "/offshore/assets/js/vitrine-labs.js", "/offshore/assets/modelos/T-120/estaca.glb", "/offshore/assets/modelos/T-120/miniatura.png", "/offshore/assets/modelos/T-24/estaca.glb", "/offshore/assets/modelos/T-24/miniatura.png", "/offshore/assets/modelos/T-35/estaca.glb", "/offshore/assets/modelos/T-35/miniatura.png", "/offshore/conta.html", "/offshore/documento.html", "/offshore/ensaio-escala.html", "/offshore/index.html", "/porta.css", "/porta.html", "/porta.js", "/robots.txt", "/sw.js"]/*fim*/);
const publico = p => PUBLICOS.has(p) || PUBLICOS.has(p.endsWith('/') ? p + 'index.html' : p);

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

async function sessao() {
  try { const r = await (await caches.open(CACHE)).match(CHAVE); const s = r ? await r.json() : null; return s && s.t ? s : null; } catch (_) { return null; }
}
async function esquecer() { try { await caches.delete(CACHE); } catch (_) { /* nada guardado */ } }
const absoluto = c => new URL(c, self.location.origin).href;
function aviso(en, pt, status) {
  const html = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>EngenhaLab</title><link rel="stylesheet" href="/porta.css?v=20261120-1"></head>'
    + '<body><main class="porta"><p class="porta-marca">VG<b>.</b> <span>EngenhaLab</span></p><p class="porta-msg">' + en + '</p><p class="porta-msg" lang="pt-BR">' + pt + '</p><p class="porta-msg"><a href="/">EngenhaLab</a></p></main></body></html>';
  return new Response(html, { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
}
async function porta() {
  try { const r = await fetch('/porta.html', { cache: 'no-store' }); if (r.ok) return new Response(r.body, { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } }); } catch (_) { /* sem rede */ }
  return aviso('No connection. Try again shortly.', 'Sem conexão. Tente de novo em instantes.', 503);
}

async function servir(req, u) {
  const nav = req.mode === 'navigate';
  const s = await sessao();
  let caminho;
  try { caminho = decodeURIComponent(u.pathname); } catch (_) { return nav ? aviso('Page not found.', 'Página não encontrada.', 404) : new Response('', { status: 404 }); }
  if (caminho.endsWith('/')) caminho += 'index.html';
  let r;
  try {
    // sem sessão, pede sem ela: o servidor decide (site aberto entrega; fechado responde 401 e vai para o login)
    r = await fetch(API + '/v1/site/arquivo?c=' + encodeURIComponent(caminho.slice(1)), { headers: s ? { Authorization: 'Bearer ' + s.t } : {}, credentials: 'omit', cache: 'no-store', mode: 'cors' });
  } catch (_) {
    return nav ? aviso('The server did not respond. Try again shortly.', 'O servidor não respondeu. Tente de novo em instantes.', 503) : Response.error();
  }
  if (r.status === 401) {
    const volta = encodeURIComponent(u.pathname + u.search);
    if (!s) return nav ? Response.redirect(absoluto('/offshore/conta.html?volta=' + volta), 302) : new Response('', { status: 401 });
    await esquecer();
    return nav ? Response.redirect(absoluto('/porta.html?sair=1&volta=' + volta), 302) : new Response('', { status: 401 });
  }
  if (r.status === 404 && nav && !/\.[a-z0-9]+$/i.test(caminho)) return Response.redirect(absoluto(u.pathname + '/' + u.search), 302);
  if (!r.ok) return nav ? aviso('Page not found.', 'Página não encontrada.', r.status === 404 ? 404 : 503) : new Response('', { status: r.status });
  return new Response(r.body, { status: 200, headers: { 'Content-Type': r.headers.get('Content-Type') || 'application/octet-stream', 'Cache-Control': 'no-store' } });
}

self.addEventListener('fetch', e => {
  const req = e.request, u = new URL(req.url);
  if (u.origin !== self.location.origin || req.method !== 'GET' || publico(u.pathname)) return;
  e.respondWith(servir(req, u));
});
