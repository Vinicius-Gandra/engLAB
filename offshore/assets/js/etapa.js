/* Laboratório offshore · carrega os dados da etapa pelo servidor de cálculo. */
(function () {
  'use strict';
  var corpo = document.body, chave = corpo && corpo.dataset.etapa;
  if (!chave) return;
  var main = document.getElementById('main') || document.getElementById('workspace');
  if (main) main.setAttribute('aria-busy', 'true');
  var local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  var BASE = (local ? 'http://' + location.hostname + ':8787' : (window.ENGENHA_API || '')).replace(/\/$/, '');
  var s = null;
  try { s = JSON.parse(localStorage.getItem('engenha-offshore-sessao')); } catch (e) { s = null; }
  var h = { 'Content-Type': 'application/json', 'X-Engenha-Pagina': location.pathname };
  if (s && s.sessao) h.Authorization = 'Bearer ' + s.sessao;
  var todos = function (sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); };
  fetch(BASE + '/v1/offshore/pagina', { method: 'POST', credentials: 'include', headers: h, body: JSON.stringify({ pagina: chave }) })
    .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error((j && j.erro) || 'O servidor não respondeu. Tente de novo em instantes.'); return j; }); })
    .then(function () { throw new Error('O servidor não respondeu. Tente de novo em instantes.'); })
    .catch(function (e) {
      var texto = e instanceof TypeError ? 'Sem conexão com o servidor. Verifique a internet e tente de novo.' : e.message;
      todos('[data-ef-msg]', function (el) { el.textContent = texto; el.hidden = false; el.classList.add('ef-erro'); });
      todos('[data-ef-ocupado]', function (el) { el.hidden = true; });
      if (main) main.setAttribute('aria-busy', 'false');
    });
})();
