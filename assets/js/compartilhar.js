/* Botão "Compartilhar no WhatsApp" na barra superior.
   Para usar numa página: carregar este arquivo (o estilo vem junto).
   Lugar do botão, nesta ordem: um elemento com [data-compartilhar],
   a barra dos laboratórios (.s-actions), o topo da página inicial
   (.top-actions) ou a barra da conta (.ac-dir).
   O link leva só o endereço da página, sem parâmetros nem âncora. */
(function () {
  'use strict';
  var AQUI = (document.currentScript && document.currentScript.src) || '/assets/js/compartilhar.js';

  // o botão fica invisível até o estilo dele carregar, para não piscar sem forma
  var pronto = false, esperando = [];
  function liberar() { pronto = true; esperando.forEach(function (a) { a.style.removeProperty('visibility'); }); esperando = []; }
  function estilo() {
    if (document.getElementById('wa-estilo')) return;
    var l = document.createElement('link');
    l.id = 'wa-estilo'; l.rel = 'stylesheet';
    l.addEventListener('load', liberar); l.addEventListener('error', liberar);
    l.href = new URL('../css/compartilhar.css?v=20261111-1', AQUI).href;
    (document.head || document.documentElement).appendChild(l);
    setTimeout(liberar, 4000);
  }

  function ingles() {
    if (window.Idioma && window.Idioma.lang) return window.Idioma.lang === 'en';
    return /^en/i.test(document.documentElement.lang || '');
  }

  function endereco() {
    var c = document.querySelector('link[rel="canonical"]');
    if (c && c.href) return c.href;
    return location.origin + location.pathname.replace(/index\.html$/, '');
  }

  function texto() {
    var t = (document.title || 'EngenhaLab').replace(/\s+/g, ' ').trim();
    return t + '\n' + endereco();
  }

  var ICONE = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 2.6a9.4 9.4 0 0 0-8.1 14.1L2.6 21.4l4.8-1.3A9.4 9.4 0 1 0 12 2.6Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8.6 7.6c.2-.4.5-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.2 0 .5-.1.6l-.6.7c-.1.2-.1.4 0 .5.4.8 1 1.5 1.7 2.1.5.4 1.1.8 1.7 1 .2.1.4 0 .5-.1l.7-.9c.1-.2.4-.2.6-.1l1.8.9c.2.1.4.3.3.5 0 .5-.2 1-.5 1.3-.5.5-1.2.8-1.9.7-1.1-.1-2.4-.6-3.6-1.5a9.3 9.3 0 0 1-2.8-3.4c-.4-.9-.5-1.9-.1-2.7.2-.4.4-.6.6-.9Z" fill="currentColor"/></svg>';

  function botao() {
    estilo();
    var en = ingles(), a = document.createElement('a');
    a.className = 'wa-share';
    if (!pronto) { a.style.visibility = 'hidden'; esperando.push(a); }
    a.target = '_blank'; a.rel = 'noopener noreferrer';
    a.setAttribute('translate', 'no');
    a.setAttribute('aria-label', en ? 'Share on WhatsApp' : 'Compartilhar no WhatsApp');
    a.title = en ? 'Share on WhatsApp' : 'Compartilhar no WhatsApp';
    a.innerHTML = ICONE + '<span class="wa-share-t">' + (en ? 'Share' : 'Compartilhar') + '</span>';
    a.href = 'https://wa.me/?text=' + encodeURIComponent(texto());
    // o título pode ser traduzido depois do carregamento: o link é refeito no clique
    a.addEventListener('click', function () { a.href = 'https://wa.me/?text=' + encodeURIComponent(texto()); });
    return a;
  }

  function colocar() {
    if (document.querySelector('.wa-share')) return true;
    var marcado = document.querySelector('[data-compartilhar]');
    if (marcado) { marcado.replaceWith(botao()); return true; }
    var lugar = document.querySelector('.s-actions') || document.querySelector('.top-actions') || document.querySelector('.ac-dir');
    if (!lugar) return false;
    var tema = lugar.querySelector('#theme-toggle, #theme, .theme, .menu-bt');
    var b = botao();
    if (tema) tema.before(b); else lugar.append(b);
    return true;
  }

  function iniciar() {
    if (colocar()) return;
    // a barra pode ser montada depois pelos scripts da página
    var obs = new MutationObserver(function () { if (colocar()) obs.disconnect(); });
    obs.observe(document.body, { childList: true, subtree: true });
    setTimeout(function () { obs.disconnect(); }, 10000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
