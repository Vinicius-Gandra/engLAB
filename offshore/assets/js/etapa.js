/* Laboratório offshore · carrega a etapa pelo servidor de cálculo. */
(function () {
  'use strict';
  var corpo = document.body, chave = corpo && corpo.dataset.etapa, msg = document.getElementById('ef-msg');
  if (!chave || !msg) return;
  var local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  var BASE = (local ? 'http://' + location.hostname + ':8787' : (window.ENGENHA_API || '')).replace(/\/$/, '');
  var s = null;
  try { s = JSON.parse(localStorage.getItem('engenha-offshore-sessao')); } catch (e) { s = null; }
  var h = { 'Content-Type': 'application/json', 'X-Engenha-Pagina': location.pathname };
  if (s && s.sessao) h.Authorization = 'Bearer ' + s.sessao;
  fetch(BASE + '/v1/offshore/pagina', { method: 'POST', credentials: 'include', headers: h, body: JSON.stringify({ pagina: chave }) })
    .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error((j && j.erro) || 'O servidor não respondeu. Tente de novo em instantes.'); return j; }); })
    .then(function () { throw new Error('O servidor não respondeu. Tente de novo em instantes.'); })
    .catch(function (e) {
      msg.textContent = e instanceof TypeError ? 'Sem conexão com o servidor. Verifique a internet e tente de novo.' : e.message;
      msg.classList.add('ef-erro');
      document.getElementById('main').setAttribute('aria-busy', 'false');
    });
})();
