/* Laboratório offshore · conteúdo das etapas.
   A página publicada traz só as abas; o conteúdo, os scripts e os arquivos da etapa vêm do servidor,
   que confere a sessão e o laboratório liberado na conta. As etapas marcadas com data-amostra abrem
   para visitantes em modo amostra (cálculos só com os dados básicos); as outras pedem login. */
(function () {
  'use strict';
  var corpo = document.body, chave = corpo && corpo.dataset.protegido;
  if (!chave) return;
  var raiz = document.documentElement, publica = corpo.hasAttribute('data-publico'), amostra = corpo.hasAttribute('data-amostra');
  var local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  var BASE = (local ? 'http://' + location.hostname + ':8787' : (window.ENGENHA_API || '')).replace(/\/$/, '');
  var SESSAO_JS = 'assets/js/sessao.js?v=20261112-1', TEMA_JS = 'assets/js/tema.js';
  var ingles = function () { return !!(window.Idioma && window.Idioma.lang === 'en'); };
  var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };

  function sessao() {
    var s = null;
    try { s = JSON.parse(localStorage.getItem('engenha-offshore-sessao')); } catch (e) { s = null; }
    return s && s.usuario && s.expira * 1000 > Date.now() ? s : null;
  }
  function temAcesso(s) {
    if (!s) return false;
    var labs = Array.isArray(s.usuario.labs) ? s.usuario.labs : ['offshore'];
    return s.usuario.papel === 'admin' || labs.indexOf('offshore') >= 0;
  }
  function pedir(rota, dados) {
    var s = sessao(), h = { 'Content-Type': 'application/json', 'X-Engenha-Pagina': location.pathname };
    if (s && s.sessao) h.Authorization = 'Bearer ' + s.sessao;
    return fetch(BASE + '/v1/' + rota, { method: 'POST', credentials: 'include', headers: h, body: JSON.stringify(dados || {}) })
      .then(function (r) {
        return r.json().catch(function () { return null; }).then(function (j) {
          if (!r.ok) { var e = new Error((j && j.erro) || 'O servidor não respondeu.'); e.status = r.status; throw e; }
          return j;
        });
      });
  }
  function irLogin() {
    raiz.style.visibility = 'hidden';
    location.replace('conta.html?volta=' + encodeURIComponent(location.pathname.split('/').pop() || 'index.html'));
  }

  /* ---------- scripts da etapa, um depois do outro, na ordem da página (os restritos vêm do servidor) ---------- */
  var feitos = {};
  Array.prototype.forEach.call(document.scripts, function (s) { if (s.src) feitos[new URL(s.src, location.href).pathname] = true; });
  function um(it) {
    return new Promise(function (ok, falhou) {
      var el = document.createElement('script');
      if (it.src) {
        var caminho = new URL(it.src, location.href).pathname;
        if (feitos[caminho]) return ok();
        feitos[caminho] = true; el.src = it.src;
      } else if (it.url) {
        el.src = BASE + it.url; // endereço assinado pelo servidor, válido por poucos minutos
      } else return ok();
      if (it.modulo) el.type = 'module';
      el.async = false;
      el.onload = function () { ok(); };
      el.onerror = function () { falhou(new Error('Não foi possível carregar a etapa.')); };
      document.body.appendChild(el);
    });
  }
  function rodar(lista) { return (lista || []).reduce(function (p, it) { return p.then(function () { return um(it); }); }, Promise.resolve()); }

  /* ---------- arquivos da etapa (modelos, registros de exemplo): pedidos um a um ao servidor ---------- */
  var arquivos = {};
  function bytes(nome) {
    if (!arquivos[nome]) arquivos[nome] = pedir('offshore/arquivo', { pagina: chave, nome: nome }).then(function (r) {
      var bin = atob(r.dados), u = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
      return u.buffer;
    });
    arquivos[nome].catch(function () { delete arquivos[nome]; });
    return arquivos[nome];
  }
  window.EngenhaArquivo = {
    carregar: function (nome, Leitor, ok, progresso, erro) {
      bytes(nome).then(function (b) { ok(new Leitor().parse(b)); }, function (e) { if (erro) erro(e); });
    },
    resposta: function (nome) {
      return bytes(nome).then(function (b) {
        return { ok: true, text: function () { return Promise.resolve(new TextDecoder().decode(b)); }, arrayBuffer: function () { return Promise.resolve(b); } };
      }, function () { return { ok: false }; });
    }
  };

  /* ---------- montagem ---------- */
  function trecho(html) { var t = document.createElement('template'); t.innerHTML = html; return t.content; }
  function aplicar(b) {
    if (b.traducoes && window.Idioma && window.Idioma.acrescentar) window.Idioma.acrescentar(b.traducoes);
    if (b.estilos && b.estilos.length) {
      b.estilos.forEach(function (css) { var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st); });
    }
    if (b.cabecalho) { var h = document.querySelector('header.s-appbar'); if (h) h.replaceWith(trecho(b.cabecalho)); }
    var alvo = b.substitui === 'main' ? document.getElementById('main') : document.getElementById('protegido');
    if (alvo) alvo.replaceWith(trecho(b.html));
    var pular = document.querySelector('a.skip');
    if (pular && b.pular) pular.setAttribute('href', b.pular);
  }
  function aviso(titulo, texto, link) {
    var alvo = document.getElementById('protegido');
    raiz.removeAttribute('data-carregando');
    if (!alvo) return;
    alvo.removeAttribute('aria-busy');
    alvo.innerHTML = '<section class="protegido-painel"><h1>' + esc(titulo) + '</h1><p>' + esc(texto) + '</p>' + (link ? '<a class="button primary" href="' + esc(link[0]) + '">' + esc(link[1]) + '</a>' : '') + '</section>';
  }
  function semAcesso() {
    aviso('Esta etapa não está liberada para a sua conta', 'Fale com o administrador para liberar o laboratório offshore.', ['conta.html', 'Minha conta']);
    rodar([{ src: SESSAO_JS }, { src: TEMA_JS }]).catch(function () { /* só o botão da conta */ });
  }
  function versaoPublica() {
    raiz.removeAttribute('data-carregando');
    var lista = []; try { lista = JSON.parse(document.getElementById('scripts-publicos').textContent); } catch (e) { lista = []; }
    return rodar(lista.map(function (src) { return { src: src }; }));
  }

  /* ---------- vitrine: sem o laboratório liberado, a etapa abre em modo amostra (o servidor só usa os dados básicos) ---------- */
  function faixaAmostra() {
    if (document.querySelector('.amostra-aviso')) return;
    var pagina = location.pathname.split('/').pop() || 'index.html';
    var f = document.createElement('p');
    f.className = 'amostra-aviso'; f.setAttribute('role', 'note');
    f.innerHTML = '<strong>Amostra</strong> <span>Resultados principais com dados básicos de estaca e solo.</span> '
      + '<a href="conta.html?volta=' + encodeURIComponent(pagina) + '">Entre com sua conta</a> <span>para ver as curvas completas, os parâmetros avançados e os relatórios.</span>';
    var abas = document.querySelector('nav.s-areas');
    if (abas) abas.insertAdjacentElement('afterend', f); else corpo.insertBefore(f, corpo.firstChild);
  }

  var s = sessao();
  if (!temAcesso(s)) {
    if (publica) { versaoPublica(); return; }
    if (!amostra) {
      if (!s) { irLogin(); return; }
      semAcesso(); return;
    }
  }
  pedir('offshore/pagina', { pagina: chave, idioma: ingles() ? 'en' : 'pt' }).then(function (b) {
    aplicar(b);
    if (b.amostra) faixaAmostra();
    raiz.removeAttribute('data-carregando');
    return rodar(b.scripts);
  }).catch(function (e) {
    if (e.status === 401) {
      try { localStorage.removeItem('engenha-offshore-sessao'); } catch (_) { /* sem armazenamento */ }
      if (publica) versaoPublica(); else if (amostra && s) location.reload(); else irLogin();
      return;
    }
    if (e.status === 403) { if (publica) versaoPublica(); else semAcesso(); return; }
    if (publica) { versaoPublica(); return; }
    aviso('Não foi possível abrir esta etapa', e.message || 'Tente de novo em instantes.', [location.pathname.split('/').pop(), 'Tentar de novo']);
  });
})();
