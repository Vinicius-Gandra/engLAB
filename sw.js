/* EngenhaLab · service worker
   Toda página e arquivo do site, exceto a porta e a tela de login, vem do servidor de cálculo
   (rota site/arquivo), que confere a sessão antes de entregar. Nada é guardado em cache. */
'use strict';
const API = /^(localhost|127\.0\.0\.1)$/.test(self.location.hostname) ? 'http://' + self.location.hostname + ':8787' : 'https://engenhalab-calculo.engenhalab.workers.dev';
const CACHE = 'engenha-porta', CHAVE = '/__porta/sessao';
const PUBLICOS = new Set(['/porta.html', '/porta.js', '/porta.css', '/sw.js', '/404.html', '/robots.txt', '/offshore/conta.html']);
const publico = p => PUBLICOS.has(p) || p.startsWith('/entrar/');

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
  if (!s) return nav ? porta() : new Response('', { status: 401 });
  let caminho;
  try { caminho = decodeURIComponent(u.pathname); } catch (_) { return nav ? aviso('Page not found.', 'Página não encontrada.', 404) : new Response('', { status: 404 }); }
  if (caminho.endsWith('/')) caminho += 'index.html';
  let r;
  try {
    r = await fetch(API + '/v1/site/arquivo?c=' + encodeURIComponent(caminho.slice(1)), { headers: { Authorization: 'Bearer ' + s.t }, credentials: 'omit', cache: 'no-store', mode: 'cors' });
  } catch (_) {
    return nav ? aviso('The server did not respond. Try again shortly.', 'O servidor não respondeu. Tente de novo em instantes.', 503) : Response.error();
  }
  if (r.status === 401) {
    await esquecer();
    return nav ? Response.redirect(absoluto('/porta.html?sair=1&volta=' + encodeURIComponent(u.pathname + u.search)), 302) : new Response('', { status: 401 });
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
