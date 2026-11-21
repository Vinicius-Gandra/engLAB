/* Dica de tela cheia, mostrada uma vez ao entrar num estúdio.
   Uso: <script defer src="/assets/js/dica-tela-cheia.js" data-botao="#tela-cheia"></script>
   data-botao é o botão de tela cheia da página: a dica aponta para ele,
   e "Abrir em tela cheia" o aciona. data-esconder (opcional) lista avisos
   da página que ficam ocultos enquanto a dica está aberta. Fecha com Esc, com "Agora não" ou
   quando a página entra em tela cheia, e não volta a aparecer. */
(function () {
  'use strict';
  var eu = document.currentScript, AQUI = (eu && eu.src) || '/assets/js/dica-tela-cheia.js';
  var SELETOR = (eu && eu.dataset.botao) || '#tela-cheia', ESCONDER = (eu && eu.dataset.esconder) || '', CHAVE = 'engenhalab.dica-tela-cheia.v1';

  function vista() { try { return localStorage.getItem(CHAVE) === '1'; } catch (e) { return false; } }
  function marcar() { try { localStorage.setItem(CHAVE, '1'); } catch (e) { /* sem armazenamento */ } }
  function ingles() {
    if (window.Idioma && window.Idioma.lang) return window.Idioma.lang === 'en';
    return /^en/i.test(document.documentElement.lang || '');
  }

  function iniciar() {
    if (vista()) return;
    var alvo = document.querySelector(SELETOR);
    if (!alvo) return;
    var l = document.createElement('link'); l.rel = 'stylesheet';
    l.href = new URL('../css/dica-tela-cheia.css?v=20261111-1', AQUI).href;
    // a dica só é montada depois que o estilo dela carregou
    l.addEventListener('load', montar); l.addEventListener('error', function () { /* sem estilo, sem dica */ });
    document.head.appendChild(l);
  }

  function montar() {
    var alvo = document.querySelector(SELETOR);
    if (!alvo || vista()) return;

    var en = ingles();
    var podeTelaCheia = !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);
    var estreita = matchMedia('(max-width: 760px)').matches;
    var retrato = matchMedia('(orientation: portrait)').matches;
    var titulo = en ? 'Get the most out of the studio' : 'Aproveite melhor o estúdio';
    var texto;
    if (estreita && retrato) texto = podeTelaCheia
      ? (en ? 'Turn your phone sideways and open the studio in full screen: the stage and the equations get much more room.' : 'Gire o celular e abra o estúdio em tela cheia: o palco e as equações ganham muito mais espaço.')
      : (en ? 'Turn your phone sideways: the stage and the equations get much more room.' : 'Gire o celular: o palco e as equações ganham muito mais espaço.');
    else texto = en ? 'Open the studio in full screen: the stage, the equations and the side panel fill the whole display. Press Esc to leave.' : 'Abra o estúdio em tela cheia: o palco, as equações e o painel lateral ocupam a tela inteira. Para sair, aperte Esc.';

    var caixa = document.createElement('div');
    caixa.className = 'dtc'; caixa.setAttribute('role', 'dialog'); caixa.setAttribute('aria-labelledby', 'dtc-t'); caixa.setAttribute('translate', 'no');
    caixa.innerHTML =
      '<span class="dtc-seta" aria-hidden="true"></span>' +
      '<div class="dtc-fig" aria-hidden="true"><svg viewBox="0 0 48 32" width="56" height="37"><rect class="dtc-tela" x="1" y="1" width="46" height="30" rx="4"/><rect class="dtc-jan" x="14" y="9" width="20" height="14" rx="2"/><path class="dtc-cant" d="M4 10V4h6M38 4h6v6M44 22v6h-6M10 28H4v-6"/></svg></div>' +
      '<div class="dtc-c"><strong id="dtc-t"></strong><p></p>' +
      '<div class="dtc-bts">' + (podeTelaCheia ? '<button type="button" class="dtc-sim"></button>' : '') + '<button type="button" class="dtc-nao"></button></div></div>';
    caixa.querySelector('strong').textContent = titulo;
    caixa.querySelector('p').textContent = texto;
    var sim = caixa.querySelector('.dtc-sim'), nao = caixa.querySelector('.dtc-nao');
    if (sim) sim.textContent = en ? 'Open in full screen' : 'Abrir em tela cheia';
    nao.textContent = podeTelaCheia ? (en ? 'Not now' : 'Agora não') : (en ? 'Got it' : 'Entendi');
    document.body.appendChild(caixa);
    var ocultos = ESCONDER ? [].slice.call(document.querySelectorAll(ESCONDER)) : [];
    ocultos.forEach(function (el) { el.classList.add('dtc-oculto'); });
    alvo.classList.add('dtc-pulso');

    function posicionar() {
      var r = alvo.getBoundingClientRect();
      if (!r.width) { caixa.hidden = true; return; }
      caixa.hidden = false;
      var w = caixa.offsetWidth, x = Math.max(12, Math.min(innerWidth - w - 12, r.left + r.width / 2 - 28));
      caixa.style.left = (x + scrollX) + 'px';
      caixa.style.top = (r.bottom + scrollY + 12) + 'px';
      caixa.style.setProperty('--seta', (r.left + r.width / 2 - x) + 'px');
    }
    function fechar() {
      marcar(); ocultos.forEach(function (el) { el.classList.remove('dtc-oculto'); }); alvo.classList.remove('dtc-pulso'); caixa.remove(); if (ro) ro.disconnect();
      removeEventListener('resize', posicionar); removeEventListener('keydown', tecla);
      document.removeEventListener('fullscreenchange', fechar);
    }
    function tecla(e) { if (e.key === 'Escape') fechar(); }
    if (sim) sim.addEventListener('click', function () { fechar(); alvo.click(); });
    nao.addEventListener('click', fechar);
    alvo.addEventListener('click', fechar, { once: true });
    addEventListener('resize', posicionar); addEventListener('keydown', tecla);
    document.addEventListener('fullscreenchange', fechar);
    var ro = 'ResizeObserver' in window ? new ResizeObserver(posicionar) : null; if (ro) ro.observe(document.body);
    posicionar();
    requestAnimationFrame(function () { caixa.classList.add('dtc-on'); });
  }

  if (document.readyState === 'complete') setTimeout(iniciar, 600);
  else addEventListener('load', function () { setTimeout(iniciar, 600); });
})();
