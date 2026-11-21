/* Laboratório offshore · etapas para quem tem acesso.
   Sem sessão neste navegador, a página vai direto ao login e volta para cá depois de entrar.
   Com acesso, a página espera o conteúdo (que vem do servidor) antes de aparecer. */
(function () {
  'use strict';
  var eu = document.currentScript, publica = !!(eu && eu.hasAttribute('data-publico'));
  var s = null;
  try { s = JSON.parse(localStorage.getItem('engenha-offshore-sessao')); } catch (e) { s = null; }
  var valida = !!(s && s.usuario && s.expira * 1000 > Date.now());
  var labs = valida ? (Array.isArray(s.usuario.labs) ? s.usuario.labs : ['offshore']) : [];
  if (valida && (s.usuario.papel === 'admin' || labs.indexOf('offshore') >= 0)) { document.documentElement.setAttribute('data-carregando', ''); return; }
  if (publica || valida) return;
  var pagina = location.pathname.split('/').pop() || 'index.html';
  document.documentElement.style.visibility = 'hidden';
  location.replace('conta.html?volta=' + encodeURIComponent(pagina));
})();
