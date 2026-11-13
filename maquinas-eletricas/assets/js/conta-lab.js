/* Conta no laboratório de máquinas elétricas: o mesmo login e o mesmo botão do laboratório offshore.
   A conta é compartilhada; o administrador decide quais laboratórios cada profissional usa. */
(function () {
  'use strict';
  const S = window.Sessao; if (!S) return;
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const LUGARES = '.t-actions, .s-actions, .appbar-actions, .toolbar-actions, .report-actions';
  const volta = encodeURIComponent('../maquinas-eletricas/' + (location.pathname.split('/').pop() || 'index.html')).replace(/%2F/g, '/');
  function botao() {
    const lugar = document.querySelector(LUGARES); if (!lugar) return;
    let b = lugar.querySelector('.el-conta');
    if (!b) {
      // mesmo estilo dos botões vizinhos do cabeçalho de cada página
      const modelo = lugar.querySelector('a:not(.el-conta), button');
      b = document.createElement('a');
      b.className = String(modelo ? modelo.className : '').split(/\s+/).filter(c => c && !/primary|icon|theme|^t-act-icon$/.test(c)).join(' ') + ' el-conta';
      lugar.prepend(b);
    }
    const s = S.sessao();
    if (s) {
      const u = s.usuario, sem = !S.temLab('maquinas');
      b.href = '../offshore/conta.html';
      b.innerHTML = `${S.avatar(u, 'el-av')}<span class="el-conta-t">${esc(String(u.nome || '').trim().split(/\s+/)[0])}</span>${sem ? '<span class="el-sem" aria-hidden="true">!</span>' : ''}`;
      b.title = 'Sua conta: ' + u.email + (sem ? ' · sem acesso a este laboratório' : '');
    } else {
      b.href = '../offshore/conta.html?volta=' + volta;
      b.innerHTML = '<span class="el-conta-t">Entrar</span>';
      b.title = 'Entrar com a sua conta';
    }
  }
  document.addEventListener('engenha-sessao', botao);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', botao); else botao();
  // a permissão pode mudar no painel do administrador: atualiza o que a página sabe da conta
  if (S.sessao()) S.pedir('conta/eu').then(r => { const s = S.sessao(); if (r && r.usuario && s) S.guardar({ ...s, usuario: { ...s.usuario, ...r.usuario } }); }).catch(() => {});
})();
