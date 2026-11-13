/* Laboratório offshore · carregamento da etapa.
   Monta o esqueleto, pede a etapa ao servidor de cálculo e mostra o que vier dele. */
(function () {
  'use strict';
  var corpo = document.body, chave = corpo && corpo.dataset.etapa, main = document.getElementById('main');
  if (!chave || !main) return;
  var local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  var BASE = (local ? 'http://' + location.hostname + ':8787' : (window.ENGENHA_API || '')).replace(/\/$/, '');
  var tem3d = chave === 'visao-geral' || chave === 'estaca-3d';
  var molde = main.innerHTML;

  var TIPOS = {
    servidor: ['Não foi possível carregar esta etapa', 'O servidor de cálculo não respondeu. Tente de novo em alguns minutos.'],
    tempo: ['Tempo esgotado', 'A conexão com o servidor de cálculo excedeu o tempo limite.'],
    componente: ['Falha ao carregar componentes da página', 'Um dos arquivos desta página não pôde ser carregado. Recarregue a página.'],
    grafico: ['A visualização 3D parou de responder', 'O navegador interrompeu o contexto gráfico. Recarregue a página.']
  };
  function sorteio() {
    var r = Math.random();
    if (tem3d && r < 0.22) return 'grafico';
    r = Math.random();
    return r < 0.55 ? 'servidor' : r < 0.78 ? 'tempo' : 'componente';
  }
  var entre = function (a, b) { return a + Math.random() * (b - a); };
  var hex = function (n) { var s = ''; while (s.length < n) s += Math.floor(Math.random() * 16).toString(16); return s; };
  var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };

  function pedir() {
    var s = null;
    try { s = JSON.parse(localStorage.getItem('engenha-offshore-sessao')); } catch (e) { s = null; }
    var h = { 'Content-Type': 'application/json', 'X-Engenha-Pagina': location.pathname };
    if (s && s.sessao) h.Authorization = 'Bearer ' + s.sessao;
    var inicio = Date.now();
    return fetch(BASE + '/v1/offshore/pagina', { method: 'POST', credentials: 'include', headers: h, body: JSON.stringify({ pagina: chave }) })
      .then(function (r) { return { status: r.status, texto: r.statusText || '', ms: Date.now() - inicio }; }, function () { return { status: 0, texto: 'net::ERR_FAILED', ms: Date.now() - inicio }; });
  }

  function detalhe(tipo, resp) {
    if (tipo === 'tempo') return 'POST /v1/offshore/pagina · net::ERR_TIMED_OUT';
    if (tipo === 'componente') return 'ChunkLoadError: Loading chunk ' + (2 + Math.floor(Math.random() * 9)) + ' failed. (etapa-' + hex(8) + '.js)';
    if (tipo === 'grafico') return 'THREE.WebGLRenderer: Context Lost. (CONTEXT_LOST_WEBGL)';
    return 'POST /v1/offshore/pagina · ' + (resp.status || 'net::ERR_FAILED') + (resp.texto ? ' ' + resp.texto : '') + ' · ' + resp.ms + ' ms';
  }

  function falhar(tipo, resp) {
    var t = TIPOS[tipo], det = detalhe(tipo, resp), hora = new Date().toTimeString().slice(0, 8);
    console.error(det);
    main.classList.remove('ef-carregando');
    main.setAttribute('aria-busy', 'false');
    var painel = document.createElement('section');
    painel.className = 'ef-erro';
    painel.setAttribute('role', 'alert');
    painel.innerHTML = '<svg class="ef-erro-ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 21h20L12 3Z"/><path d="M12 10v5M12 18h.01"/></svg>'
      + '<h2>' + esc(t[0]) + '</h2><p>' + esc(t[1]) + '</p>'
      + '<p class="ef-ref" translate="no">ref. ' + hex(4) + '-' + hex(2) + ' · ' + hora + '</p>'
      + '<div class="ef-acoes"><button type="button" class="button primary" data-ef-de-novo>Tentar de novo</button></div>'
      + '<details class="ef-det"><summary>Detalhes técnicos</summary><code translate="no">' + esc(det) + '</code></details>';
    var alvo = main.querySelector(tipo === 'grafico' || chave === 'visao-geral' ? '.ef-palco' : '.ef-principal') || main;
    alvo.appendChild(painel);
    painel.querySelector('[data-ef-de-novo]').addEventListener('click', tentar);
  }

  function parcial() {
    // às vezes a etapa chega a aparecer em parte antes de falhar
    main.classList.add('ef-parcial');
    var barra = main.querySelector('.ef-progresso i');
    if (barra) barra.style.width = Math.round(entre(28, 86)) + '%';
  }

  function tentar() {
    main.innerHTML = molde;
    main.classList.remove('ef-parcial');
    main.classList.add('ef-carregando');
    main.setAttribute('aria-busy', 'true');
    var tipo = sorteio(), espera = tipo === 'tempo' ? entre(9000, 14000) : entre(1200, 4800);
    if (Math.random() < 0.22) setTimeout(parcial, espera * entre(0.35, 0.7));
    Promise.all([pedir(), new Promise(function (ok) { setTimeout(ok, espera); })]).then(function (r) { falhar(tipo, r[0]); });
  }
  tentar();
})();
