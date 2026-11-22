/* Laboratório offshore · coluna lateral das etapas 02 a 04 (mesmo formato da 01)
   - Cartão do modelo: escolha do torpedo com as miniaturas e a ficha (massa, comprimento, diâmetro, aletas).
     Trocar o modelo grava no projeto, recalcula a profundidade do olhal pelo servidor e recarrega a etapa.
   - Parâmetros em Essencial / Avançado: o essencial mostra só o que mais pesa no resultado.
   - Em todas as etapas (01 a 04): aviso de que o modelo vale para todas as abas e a opção "Só nesta aba"
     (projeto-local.js). */
(function () {
  'use strict';
  var PROJETO = 'offshore-project-v8', MODO = 'offshore-coluna-modo';
  var pagina = (location.pathname.match(/\d+-([\w-]+)\.html$/) || [])[1] || '';
  // campos que ficam no modo Avançado, por etapa (os demais aparecem nos dois modos)
  var AVANCADOS = {
    'catenaria': ['se', 'et', 'en', 'nc', 'ncDepth', 'diameter', 'wChain', 'arrival', 'seabedLength', 'muSeabed', 'wPoly', 'eaChain', 'eaPoly', 'chain1', 'poly1', 'chain2', 'poly2', 'stretch'],
    'capacidade-axial': ['innerDiameter', 'finThickness', 'coneLength', 'nc', 'ncTop', 'ncFin', 'alphaMode', 'alphaFixed', 'steelDensity', 'fluidDensity', 'submergedVolume', '#segment-inputs'],
    'carga-lateral': ['thickness', 'E', 'gamma', 'epsilon50']
  };
  // T-98: dados do catálogo; T-24, T-35 e T-120 vêm dos modelos 3D e T-43 e T-66 dos modelos reconstruídos (modelos-estacas.js)
  var BASE = {
    24: { name: 'T-24', mass: 24175.5, diameter: 0.762, length: 13.5503, coneLength: 1.5503, eye: -1.275, fins: 4 },
    35: { name: 'T-35', mass: 34896.0, diameter: 0.762, length: 13.3503, coneLength: 1.3503, eye: 0.306, fins: 4 },
    43: { name: 'T-43', mass: 42990.4, diameter: 0.762, length: 13.3503, coneLength: 1.3503, eye: 0.306, fins: 4, finProfile: [[3.9223, 0.45], [12.9223, 0.45]] },
    66: { name: 'T-66', mass: 66718.2, diameter: 1.067, length: 14.37, coneLength: 2.15, eye: 0.28, fins: 4, finProfile: [[5.04, 0], [5.94, 0.9], [12.3, 0.9], [13.86, 0]] },
    98: { name: 'T-98', mass: 98000, diameter: 1.067, length: 17, coneLength: 2.1, fins: 4, finProfile: [[5.6, 0.15], [7.0, 0.9], [15.3, 0.9], [16.7, 0.15], [16.75, 0]] },
    120: { name: 'T-120', mass: 119759.5, diameter: 1.219, length: 23.103, coneLength: 2.453, eye: 0.541, fins: 4 }
  };
  var IDS = [24, 35, 43, 66, 98, 120], VITRINE = [24, 35, 120];
  var novos = window.EstacasNovas && window.EstacasNovas.MODELOS;
  if (novos) Object.keys(novos).forEach(function (k) { BASE[k] = Object.assign({}, BASE[k], novos[k]); });

  function ler(k) { try { var v = JSON.parse(localStorage.getItem(k) || 'null'); return v && typeof v === 'object' ? v : null; } catch (e) { return null; } }
  function gravar(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sem armazenamento */ } }
  function fmt(n, d) { return Number(n).toLocaleString('pt-BR', { minimumFractionDigits: d, maximumFractionDigits: d }); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function comAcesso() {
    try {
      var s = JSON.parse(localStorage.getItem('engenha-offshore-sessao'));
      if (!s || !s.usuario || !(s.expira * 1000 > Date.now())) return false;
      var labs = Array.isArray(s.usuario.labs) ? s.usuario.labs : ['offshore'];
      return s.usuario.papel === 'admin' || labs.indexOf('offshore') >= 0;
    } catch (e) { return false; }
  }

  /* ---------- miniatura do torpedo (em pé, ponta para baixo) ---------- */
  var MAIOR = Math.max.apply(null, IDS.map(function (id) { return BASE[id].length + 0.7 * BASE[id].diameter; }));
  function arte(id) {
    var M = BASE[id], H = 104, k = (H - 8) / MAIOR, cx = 30, R = M.diameter / 2, kx = 2.3;
    var X = function (r) { return Math.round((cx + r * k * kx) * 10) / 10; }, Y = function (s) { return Math.round((H - 3 - s * k) * 10) / 10; };
    var L = M.length - (id === 120 || id === 35 ? 0.6 : 0), c = M.coneLength || 1.5, g = 'cl' + id, out = '';
    out += '<defs><linearGradient id="' + g + 's" x1="0" x2="1"><stop offset="0" stop-color="var(--pa-dark)"/><stop offset=".32" stop-color="var(--pa-hi)"/><stop offset=".55" stop-color="var(--pa-mid)"/><stop offset="1" stop-color="var(--pa-dark)"/></linearGradient>'
      + '<linearGradient id="' + g + 'f" x1="0" x2="1"><stop offset="0" stop-color="var(--pa-fin-d)"/><stop offset=".5" stop-color="var(--pa-fin)"/><stop offset="1" stop-color="var(--pa-fin-d)"/></linearGradient></defs>';
    var perfil = M.finProfile;
    if (M.fins && perfil && perfil.length) {
      for (var lado = -1; lado <= 1; lado += 2) {
        var d = 'M' + X(lado * R) + ' ' + Y(perfil[0][0]);
        perfil.forEach(function (p) { d += 'L' + X(lado * (R + p[1])) + ' ' + Y(p[0]); });
        d += 'L' + X(lado * R) + ' ' + Y(perfil[perfil.length - 1][0]) + 'Z';
        out += '<path d="' + d + '" fill="url(#' + g + 'f)" stroke="var(--pa-fin-d)" stroke-width=".5" stroke-linejoin="round"/>';
      }
    }
    out += '<path d="M' + X(-R) + ' ' + Y(c) + 'V' + Y(L) + 'H' + X(R) + 'V' + Y(c) + 'L' + cx + ' ' + Y(0) + 'Z" fill="url(#' + g + 's)" stroke="var(--pa-line)" stroke-width=".55" stroke-linejoin="round"/>';
    // olhal no topo
    var t = Y(L), o = Math.max(2.2, R * 0.55 * k * kx);
    out += '<path d="M' + (cx - o) + ' ' + t + 'V' + (t - o * 0.8) + 'Q' + cx + ' ' + (t - o * 2.1) + ' ' + (cx + o) + ' ' + (t - o * 0.8) + 'V' + t + 'Z" fill="url(#' + g + 's)" stroke="var(--pa-line)" stroke-width=".5"/>'
      + '<circle cx="' + cx + '" cy="' + (t - o * 0.95) + '" r="' + Math.max(0.8, o * 0.35) + '" fill="var(--pa-hole)"/>';
    return '<svg viewBox="0 0 60 ' + H + '" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + out + '</svg>';
  }

  /* ---------- cartão do modelo ---------- */
  function atual() { var p = ler(PROJETO) || {}; return IDS.indexOf(Number(p.model)) >= 0 ? Number(p.model) : 120; }
  function montarModelo(caixa) {
    var m = atual(), M = BASE[m], livre = comAcesso(), i = IDS.indexOf(m);
    caixa.innerHTML = '<div class="lx-card-h"><span class="eyebrow">Modelo</span><span class="lx-model-name">' + esc(M.name) + '</span></div>'
      + '<div class="lx-lineup" role="radiogroup" aria-label="Modelo de torpedo">' + IDS.map(function (id) {
        var B = BASE[id], bloqueado = !livre && VITRINE.indexOf(id) < 0;
        return '<button type="button" role="radio" data-model="' + id + '" aria-checked="' + (id === m) + '"' + (bloqueado ? ' disabled title="Entre com a sua conta para usar o ' + esc(B.name) + '"' : '') + '>'
          + '<span class="lx-art">' + arte(id) + '</span><b>' + esc(B.name) + '</b><small>' + fmt(B.mass / 1000, 0) + ' t</small></button>';
      }).join('') + '</div>'
      + '<div class="lx-model-specs" style="--caret:' + ((i + 0.5) / IDS.length * 100) + '%"><div class="lx-spec-h"><span>Ficha do modelo</span><b>' + esc(M.name) + '</b></div><dl>'
      + [['Massa', fmt(M.mass / 1000, 0), 't'], ['Compr.', fmt(M.length + (M.eye || 0), 2), 'm'], ['Diâmetro', fmt(M.diameter, 2), 'm'], ['Aletas', M.fins ? String(M.fins) : '—', '']]
        .map(function (r) { return '<div><dt>' + r[0] + '</dt><dd>' + r[1] + (r[2] ? '<small>' + r[2] + '</small>' : '') + '</dd></div>'; }).join('')
      + '</dl></div><p class="coluna-aviso" role="status" hidden></p>';
    vinculo(caixa);
    caixa.querySelector('.lx-lineup').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-model]');
      if (b && !b.disabled) trocar(Number(b.dataset.model), caixa);
    });
  }
  // troca o modelo do projeto: o olhal muda de profundidade, então o lançamento é refeito no servidor
  function trocar(m, caixa) {
    if (m === atual()) return;
    var aviso = caixa.querySelector('.coluna-aviso'), p = ler(PROJETO) || {};
    caixa.setAttribute('aria-busy', 'true');
    caixa.querySelectorAll('.lx-lineup button').forEach(function (b) { b.setAttribute('aria-checked', String(Number(b.dataset.model) === m)); });
    aviso.hidden = false; aviso.textContent = 'Recalculando o lançamento com o ' + BASE[m].name + '…';
    var proj = {};
    Object.keys(p).forEach(function (k) { if (k !== 'geo' && k !== 'body' && typeof p[k] !== 'object') proj[k] = p[k]; });
    proj.model = m;
    var outros = IDS.filter(function (id) { return id !== m; });
    var pedido = window.Calc && window.Calc.lancamento ? window.Calc.lancamento({ projeto: proj, dz: 0.02, excluir: outros }) : Promise.reject(new Error('Cálculo indisponível.'));
    Promise.resolve(pedido).then(function (r) {
      var olhal = r && r.cravacao && r.cravacao.tr ? Math.round(r.cravacao.tr.topDepth * 10) / 10 : null;
      p.model = m;
      if (olhal != null && isFinite(olhal)) p.embed = olhal;
      gravar(PROJETO, p);
      location.reload();
    }, function (e) {
      caixa.removeAttribute('aria-busy');
      montarModelo(caixa);
      var a = caixa.querySelector('.coluna-aviso');
      a.hidden = false; a.classList.add('erro');
      a.textContent = (e && e.message) || 'Não foi possível trocar o modelo agora.';
    });
  }

  /* ---------- vínculo entre as abas ---------- */
  // o modelo e os dados do projeto valem para todas as abas; "Só nesta aba" separa esta aba das outras
  function vinculo(card) {
    var PL = window.ProjetoLocal;
    if (!card || !PL || card.querySelector('.coluna-vinculo')) return;
    var local = PL.ativo, d = document.createElement('div');
    d.className = 'coluna-vinculo' + (local ? ' local' : '');
    d.innerHTML = '<p>' + (local
      ? (PL.aba === '01' ? 'Esta aba está separada: o modelo e os cálculos daqui não mudam as outras abas.' : 'Esta aba está separada: o modelo e os dados que vinham do lançamento são editados aqui e não mudam as outras abas.')
      : 'O modelo e os dados do projeto valem para todas as abas: trocar aqui muda em todas.') + '</p>'
      + '<label><input type="checkbox"' + (local ? ' checked' : '') + '><span>Só nesta aba<small>'
      + (local ? 'Desmarque para voltar aos dados comuns (as mudanças desta aba são descartadas).' : (PL.aba === '01' ? 'O modelo e os cálculos ficam presos a esta aba.' : 'O modelo e os dados que vêm do lançamento passam a ser editados aqui, sem mudar as outras abas.'))
      + '</small></span></label>';
    d.querySelector('input').addEventListener('change', function (e) { if (e.target.checked) PL.ligar(); else PL.desligar(); });
    card.appendChild(d);
  }
  function vincularQuandoExistir() {
    var c = document.querySelector('.lx-card-modelo');
    if (c && (c.id !== 'coluna-modelo' || c.querySelector('.lx-lineup'))) return vinculo(c);
    var o = new MutationObserver(function () {
      var c2 = document.querySelector('.lx-card-modelo');
      if (c2 && (c2.id !== 'coluna-modelo' || c2.querySelector('.lx-lineup'))) { o.disconnect(); vinculo(c2); }
    });
    o.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(function () { o.disconnect(); }, 20000);
  }

  /* ---------- Essencial / Avançado ---------- */
  function ligarModo(card) {
    var lista = AVANCADOS[pagina] || [];
    lista.forEach(function (n) {
      var el = n.charAt(0) === '#' ? card.querySelector(n) : card.querySelector('[name="' + n + '"]');
      if (!el) return;
      var alvo = n.charAt(0) === '#' ? el.closest('details') || el : el.closest('label') || el;
      alvo.setAttribute('data-avancado', '');
    });
    // grupo sem nenhum campo essencial fica só no avançado
    card.querySelectorAll('details.input-group').forEach(function (g) {
      var campos = g.querySelectorAll('.fields > label, .segment-inputs');
      if (campos.length && Array.prototype.every.call(campos, function (c) { return c.hasAttribute('data-avancado') || c.closest('[data-avancado]'); })) g.setAttribute('data-avancado', '');
    });
    var botoes = card.querySelectorAll('.lx-modo [data-modo]');
    function aplicar(modo) {
      card.dataset.modo = modo;
      botoes.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.modo === modo)); });
      try { localStorage.setItem(MODO, modo); } catch (e) { /* sem armazenamento */ }
    }
    botoes.forEach(function (b) { b.addEventListener('click', function () { aplicar(b.dataset.modo); }); });
    var salvo = null;
    try { salvo = localStorage.getItem(MODO); } catch (e) { /* sem armazenamento */ }
    aplicar(salvo === 'avancado' ? 'avancado' : 'essencial');
  }

  /* ---------- etapa 01: mesma vitrine das etapas 02 a 04 ----------
     A 01 desenha a própria fileira de modelos (lancamento.js) e a refaz a cada troca. Aqui as miniaturas
     passam a ser as mesmas das outras etapas, entram os modelos que faltam e, sem acesso, os que não
     estão na vitrine ficam desligados. O clique continua com a 01 (ela ignora botões desligados). */
  function botaoModelo(id, m, livre) {
    var B = BASE[id], bloqueado = !livre && VITRINE.indexOf(id) < 0, b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'radio'); b.dataset.model = id; b.setAttribute('aria-checked', String(id === m));
    if (bloqueado) { b.disabled = true; b.title = 'Entre com a sua conta para usar o ' + B.name; }
    b.innerHTML = '<span class="lx-art"></span><b>' + esc(B.name) + '</b><small>' + fmt(B.mass / 1000, 0) + ' t</small>';
    return b;
  }
  function ajustarFileira(fila) {
    var livre = comAcesso(), marcado = fila.querySelector('[aria-checked="true"]'), m = marcado ? Number(marcado.dataset.model) : atual();
    IDS.forEach(function (id, i) {
      var b = fila.querySelector('button[data-model="' + id + '"]');
      if (!b) {
        b = botaoModelo(id, m, livre);
        var depois = null;
        for (var j = i + 1; j < IDS.length && !depois; j++) depois = fila.querySelector('button[data-model="' + IDS[j] + '"]');
        fila.insertBefore(b, depois);
      } else if (!livre && VITRINE.indexOf(id) < 0 && id !== m) {
        b.disabled = true; b.title = 'Entre com a sua conta para usar o ' + BASE[id].name;
      }
      var s = b.querySelector('.em-breve, .lx-soon'); if (s) s.remove();
      var a = b.querySelector('.lx-art'); if (a) a.innerHTML = arte(id);
      b.dataset.colunaArte = '1';
    });
    var ficha = document.getElementById('lx-model-specs'), i = IDS.indexOf(m);
    if (ficha && i >= 0) ficha.style.setProperty('--caret', ((i + 0.5) / IDS.length * 100) + '%');
  }
  function fileiraDaEtapa01() {
    var fila = document.getElementById('lx-lineup');
    if (!fila) return;
    var o = new MutationObserver(function () {
      if (!fila.querySelector('button[data-model]:not([data-coluna-arte])')) return;
      o.disconnect(); ajustarFileira(fila); o.observe(fila, { childList: true });
    });
    if (fila.querySelector('button[data-model]')) ajustarFileira(fila);
    o.observe(fila, { childList: true });
    document.addEventListener('engenha-sessao', function () { fila.querySelectorAll('button').forEach(function (b) { delete b.dataset.colunaArte; }); o.disconnect(); ajustarFileira(fila); o.observe(fila, { childList: true }); });
  }

  function iniciar() {
    var caixa = document.getElementById('coluna-modelo');
    if (caixa) montarModelo(caixa); else vincularQuandoExistir();
    if (pagina === 'lancamento') fileiraDaEtapa01();
    var card = document.querySelector('.lx-params[data-coluna]');
    if (card) ligarModo(card);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();
  document.addEventListener('engenha-sessao', function () { var c = document.getElementById('coluna-modelo'); if (c && !c.hasAttribute('aria-busy')) montarModelo(c); });
})();
