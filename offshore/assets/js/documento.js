/* Memorial emitido pelo servidor: só o dono do projeto consegue abrir. */
(function () {
  'use strict';
  const S = window.Sessao, app = document.getElementById('app');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const m = location.hash.match(/id=([0-9a-f-]{36})/);
  if (!S.sessao()) { location.href = 'conta.html'; return; }
  if (!m) { app.innerHTML = '<p>Documento não informado.</p>'; return; }
  S.pedir('documentos/obter', { id: m[1] }).then(d => {
    const c = d.conteudo, quando = new Date(c.emitido_em * 1000).toLocaleString('pt-BR');
    document.title = `${c.numero} · Memorial`;
    app.innerHTML = `<div class="doc-acoes"><button type="button" class="ac-btn" data-imp>Imprimir ou salvar em PDF</button></div>
      <header class="doc-cab"><div><span class="ac-olho">EngenhaLab · Laboratório offshore</span><h1>${esc(c.tipo)}</h1><p>Projeto: <b>${esc(c.projeto)}</b> (versão ${esc(c.versao)})</p></div>
      <div class="doc-num">${esc(c.numero)}<p class="doc-meta">${esc(quando)}<br>Responsável técnico<br><b>${esc(c.emitido_por.nome)}</b>${c.emitido_por.empresa ? '<br>' + esc(c.emitido_por.empresa) : ''}<br>${esc(c.emitido_por.email)}</p></div></header>
      ${c.secoes.map(s => `<h2>${esc(s.titulo)}</h2><table><tbody>${s.itens.map(([r, v, u]) => `<tr><td>${esc(r)}</td><td>${esc(v)}</td><td>${esc(u)}</td></tr>`).join('')}</tbody></table>`).join('')}
      <p class="doc-rod">Documento ${esc(c.numero)} emitido pelo servidor do EngenhaLab a partir do projeto salvo. Código de verificação: ${esc(d.hash)}</p>`;
    app.querySelector('[data-imp]').addEventListener('click', () => print());
  }).catch(e => { app.innerHTML = `<section class="ac-cartao"><h1>Documento indisponível</h1><p>${esc(e.message)}</p><a class="ac-btn sec" href="conta.html">Minha conta</a></section>`; });
})();
