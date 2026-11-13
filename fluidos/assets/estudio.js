/* EngenhaLab · Fluidos & CFD · carrega o caso do estúdio pelo servidor de cálculo. */
(function () {
  'use strict';
  var $ = function (s) { return document.querySelector(s); };
  var raiz = document.documentElement;

  var tema = $('#theme-toggle');
  if (tema) tema.addEventListener('click', function () {
    var t = raiz.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    raiz.setAttribute('data-theme', t);
    try { localStorage.setItem('vg-theme', t); } catch (e) { /* sem armazenamento */ }
  });

  var bancada = $('#bancada'), aviso = $('#aviso'), texto = $('#aviso-t'), fechar = $('#aviso-x');
  if (!bancada || !aviso || !texto) return;
  if (fechar) fechar.addEventListener('click', function () { aviso.hidden = true; });

  var controles = Array.prototype.slice.call(bancada.querySelectorAll('button, input, select')).filter(function (el) { return el !== fechar; });
  controles.forEach(function (el) { el.disabled = true; });
  bancada.setAttribute('aria-busy', 'true');
  texto.textContent = 'Carregando…';
  aviso.hidden = false;

  var local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  var BASE = local ? 'http://' + location.hostname + ':8787' : 'https://engenhalab-calculo.engenhalab.workers.dev';
  fetch(BASE + '/v1/fluidos/caso', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Engenha-Pagina': location.pathname }, body: JSON.stringify({ caso: 'cilindro' }) })
    .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error((j && j.erro) || 'O servidor não respondeu. Tente de novo em instantes.'); return j; }); })
    .then(function () { throw new Error('O servidor não respondeu. Tente de novo em instantes.'); })
    .catch(function (e) {
      texto.textContent = e instanceof TypeError ? 'Sem conexão com o servidor. Verifique a internet e tente de novo.' : e.message;
      aviso.classList.add('aviso-erro');
      aviso.hidden = false;
      bancada.setAttribute('aria-busy', 'false');
    });
})();
