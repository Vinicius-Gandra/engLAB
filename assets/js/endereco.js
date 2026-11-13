/* Endereço limpo em todas as páginas.
   - /pasta/index.html aparece como /pasta/ (mesma página, endereço mais curto),
     inclusive nos links montados depois pelos scripts das páginas.
   - Links para seções da própria página (#contexto, #bancada…) rolam até a
     seção sem acrescentar a âncora ao endereço. Páginas que navegam pela
     âncora (onhashchange) ficam como estão. */
(function () {
  'use strict';
  try {
    var p = location.pathname;
    if (/\/index\.html$/.test(p)) history.replaceState(history.state, '', p.replace(/index\.html$/, '') + location.search + location.hash);
  } catch (e) { /* sem histórico */ }

  // links montados por scripts que ainda apontam para .../index.html
  function limpar(a) {
    if (a && a.origin === location.origin && /\/index\.html$/.test(a.pathname)) a.pathname = a.pathname.replace(/index\.html$/, '');
  }
  document.addEventListener('pointerdown', function (e) { limpar(e.target && e.target.closest ? e.target.closest('a[href]') : null); }, true);
  document.addEventListener('focusin', function (e) { if (e.target && e.target.tagName === 'A') limpar(e.target); }, true);

  document.addEventListener('click', function (e) {
    limpar(e.target && e.target.closest ? e.target.closest('a[href]') : null);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (window.onhashchange) return;
    var a = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a || a.target) return;
    var id = a.getAttribute('href').slice(1); if (!id) return;
    var alvo; try { alvo = document.getElementById(decodeURIComponent(id)); } catch (er) { return; }
    if (!alvo) return;
    e.preventDefault();
    var calmo = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    alvo.scrollIntoView({ behavior: calmo ? 'auto' : 'smooth', block: 'start' });
    if (!alvo.matches('a,button,input,select,textarea,[tabindex]')) alvo.setAttribute('tabindex', '-1');
    try { alvo.focus({ preventScroll: true }); } catch (er) { /* foco opcional */ }
  });
})();
