/* Laboratório offshore · etapa: dados do caso, cálculo no servidor e estado da página. */
(function () {
  'use strict';
  var corpo = document.body, chave = corpo && corpo.dataset.etapa;
  if (!chave) return;
  var main = document.getElementById('main') || document.getElementById('workspace') || corpo;
  var local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  var BASE = (local ? 'http://' + location.hostname + ':8787' : (window.ENGENHA_API || '')).replace(/\/$/, '');
  var ROTA = { 'visao-geral': 'resumo', lancamento: 'lancamento', catenaria: 'catenaria', 'capacidade-axial': 'capacidade', 'carga-lateral': 'lateral', 'estaca-3d': 'offshore/arquivo' }[chave];
  var CASO = { lancamento: 'offshore-project-v8', catenaria: 'catenaria-lab-case-v1', 'capacidade-axial': 'capacidade-axial-caso-v1', 'carga-lateral': 'offshore-project-v8', 'visao-geral': 'offshore-project-v8' }[chave];
  var todos = function (sel, raiz) { return Array.prototype.slice.call((raiz || document).querySelectorAll(sel)); };
  var ler = function (k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } };

  /* ---------- campos do caso ---------- */
  var campos = todos('input[name], select[name]').filter(function (el) { return el.type !== 'file'; });
  var numero = function (t) { var n = Number(String(t).replace(/\./g, '').replace(',', '.')); return isFinite(n) ? n : Number(String(t).replace(',', '.')); };
  var texto = function (n) { return String(n).replace('.', ','); };
  function caso() {
    var o = {};
    campos.forEach(function (el) {
      if (el.type === 'checkbox') o[el.name] = el.checked;
      else if (el.tagName === 'SELECT') o[el.name] = el.value;
      else if (el.value !== '') o[el.name] = numero(el.value);
    });
    return o;
  }
  var salvo = CASO && ler(CASO);
  if (salvo && typeof salvo === 'object') {
    campos.forEach(function (el) {
      if (!Object.prototype.hasOwnProperty.call(salvo, el.name)) return;
      var v = salvo[el.name];
      if (el.type === 'checkbox') el.checked = !!v;
      else if (el.tagName === 'SELECT') { if (todos('option', el).some(function (o) { return o.value === v; })) el.value = v; }
      else if (typeof v === 'number' && isFinite(v)) el.value = texto(v);
    });
  }
  function guardar() {
    if (!CASO) return;
    try { localStorage.setItem(CASO, JSON.stringify(Object.assign(ler(CASO) || {}, caso()))); } catch (e) { /* sem armazenamento */ }
  }

  /* ---------- cálculo ---------- */
  var botoes = todos('#calculate, #run-lateral');
  var ocupado = todos('[data-ef-ocupado]'), vagas = todos('[data-ef-msg]');
  var pedido = 0;
  function corpoDoPedido() {
    if (chave === 'estaca-3d') return { pagina: chave, nome: 't-120.stl' };
    if (chave === 'visao-geral' || chave === 'lancamento') return { projeto: caso() };
    return { entrada: caso() };
  }
  function calcular() {
    var este = ++pedido;
    var s = ler('engenha-offshore-sessao'), h = { 'Content-Type': 'application/json', 'X-Engenha-Pagina': location.pathname };
    if (s && s.sessao) h.Authorization = 'Bearer ' + s.sessao;
    main.setAttribute('aria-busy', 'true');
    botoes.forEach(function (b) { b.disabled = true; });
    ocupado.forEach(function (el) { el.hidden = false; });
    vagas.forEach(function (el) { if (el.hasAttribute('role') && el.getAttribute('role') === 'alert') el.hidden = true; });
    return fetch(BASE + '/v1/' + ROTA, { method: 'POST', credentials: 'include', headers: h, body: JSON.stringify(corpoDoPedido()) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error((j && j.erro) || 'O servidor não respondeu. Tente de novo em instantes.'); return j; }); })
      .then(function () { throw new Error('O servidor não respondeu. Tente de novo em instantes.'); })
      .catch(function (e) {
        if (este !== pedido) return;
        var t = e instanceof TypeError ? 'Sem conexão com o servidor. Verifique a internet e tente de novo.' : e.message;
        vagas.forEach(function (el) { el.textContent = t; el.hidden = false; el.classList.add('ef-erro'); });
      })
      .then(function () {
        if (este !== pedido) return;
        main.setAttribute('aria-busy', 'false');
        botoes.forEach(function (b) { b.disabled = false; });
        ocupado.forEach(function (el) { el.hidden = true; });
      });
  }
  var espera = null;
  function mudou() { guardar(); clearTimeout(espera); espera = setTimeout(calcular, 650); }
  campos.forEach(function (el) { el.addEventListener(el.type === 'checkbox' || el.tagName === 'SELECT' ? 'change' : 'input', mudou); });
  botoes.forEach(function (b) { b.addEventListener('click', function (ev) { ev.preventDefault(); clearTimeout(espera); calcular(); }); });
  todos('form').forEach(function (f) { f.addEventListener('submit', function (ev) { ev.preventDefault(); clearTimeout(espera); calcular(); }); });
  var restaurar = document.getElementById('reset');
  if (restaurar) restaurar.addEventListener('click', function (ev) {
    ev.preventDefault();
    campos.forEach(function (el) {
      if (el.type === 'checkbox') el.checked = el.defaultChecked;
      else if (el.tagName === 'SELECT') { var d = todos('option', el).filter(function (o) { return o.defaultSelected; })[0]; if (d) el.value = d.value; }
      else el.value = el.defaultValue;
    });
    try { localStorage.removeItem(CASO); } catch (e) { /* sem armazenamento */ }
    clearTimeout(espera); calcular();
  });

  /* ---------- abas e alternâncias da página ---------- */
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('button');
    if (!b || !main.contains(b) || b.disabled) return;
    var pai = b.parentElement, irmaos = pai ? Array.prototype.filter.call(pai.children, function (x) { return x.tagName === 'BUTTON'; }) : [];
    if (b.getAttribute('role') === 'tab') {
      irmaos.forEach(function (x) { if (x.getAttribute('role') === 'tab') x.setAttribute('aria-selected', x === b ? 'true' : 'false'); });
    } else if (b.hasAttribute('aria-pressed')) {
      var grupo = irmaos.filter(function (x) { return x.hasAttribute('aria-pressed'); });
      var exclusivo = pai.getAttribute('role') === 'group' && !pai.classList.contains('v3-layers') && grupo.length > 1;
      if (exclusivo) grupo.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      else b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    } else if (irmaos.some(function (x) { return x.classList.contains('active'); })) {
      irmaos.forEach(function (x) { x.classList.toggle('active', x === b); });
    }
  });

  calcular();
})();
