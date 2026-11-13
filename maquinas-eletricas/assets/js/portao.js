/* Laboratório de máquinas elétricas só para quem entrou na conta.
   Carregado no <head>, logo depois do sessao.js: sem sessão, a página vai
   direto para a tela de entrada, que traz a pessoa de volta a esta página
   depois do login. O servidor também recusa os cálculos sem conta. */
(function () {
  'use strict';
  var S = window.Sessao;
  if (S && S.sessao && S.sessao()) return;
  // esconde a página enquanto o navegador troca de endereço
  document.documentElement.classList.add('me-portao');
  var pagina = location.pathname.split('/').pop() || 'index.html';
  var volta = encodeURIComponent('../maquinas-eletricas/' + pagina).replace(/%2F/g, '/');
  location.replace('../offshore/conta.html?volta=' + volta);
})();
