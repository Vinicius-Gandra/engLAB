/* EngenhaLab · porta de entrada
   O site publicado tem só esta porta e a tela de login. As páginas vêm do servidor de cálculo,
   pedidas pelo service worker (sw.js) com a sessão de quem entrou. Aqui a sessão do login é
   entregue ao service worker; sem sessão, vai para o login e volta para a página pedida. */
(function () {
  'use strict';
  var pt = false;
  try { pt = localStorage.getItem('vg-lang') === 'pt'; } catch (e) { /* sem armazenamento */ }
  if (pt) document.documentElement.lang = 'pt-BR';
  var msg = document.getElementById('porta-msg');
  function dizer(en, ptTexto) { if (msg) msg.textContent = pt ? ptTexto : en; }

  var K_SESSAO = 'engenha-offshore-sessao', CACHE = 'engenha-porta', CHAVE = '/__porta/sessao';
  var q = new URLSearchParams(location.search);
  var aqui = location.pathname;
  var volta = q.get('volta');
  if (!volta || !/^\/(?![\/\\])[\w\-./]*(\?[\w\-.=&%]*)?$/.test(volta)) volta = aqui === '/porta.html' || aqui === '/404.html' ? '/' : aqui + location.search;

  function sessao() {
    try { var s = JSON.parse(localStorage.getItem(K_SESSAO)); return s && s.usuario && s.sessao && s.expira * 1000 > Date.now() ? s : null; } catch (e) { return null; }
  }
  function entrar() { location.replace('/offshore/conta.html?volta=' + encodeURIComponent(volta)); }

  // o servidor recusou a sessão: esquece e volta ao login
  if (q.get('sair') === '1') {
    try { localStorage.removeItem(K_SESSAO); } catch (e) { /* sem armazenamento */ }
    if (window.caches) caches.delete(CACHE).then(entrar, entrar); else entrar();
    return;
  }
  if (!('serviceWorker' in navigator) || !window.caches || !window.isSecureContext) {
    dizer('This browser cannot open the site. Use an up-to-date browser.', 'Este navegador não abre o site. Use um navegador atualizado.');
    return;
  }
  var s = sessao();
  if (!s) { entrar(); return; }
  dizer('Opening…', 'Abrindo…');
  caches.open(CACHE)
    .then(function (c) { return c.put(CHAVE, new Response(JSON.stringify({ t: s.sessao, expira: s.expira }), { headers: { 'Content-Type': 'application/json' } })); })
    .then(function () { return navigator.serviceWorker.register('/sw.js', { scope: '/' }); })
    .then(function () { return navigator.serviceWorker.ready; })
    .then(function () { location.replace(volta); })
    .catch(function () { dizer('The site could not be opened. Reload the page.', 'Não foi possível abrir o site. Recarregue a página.'); });
})();
