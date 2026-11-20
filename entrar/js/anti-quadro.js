/* Proteção contra enquadramento (clickjacking): as páginas do EngenhaLab não abrem dentro de outro site.
   Os cabeçalhos X-Frame-Options e frame-ancestors, quando o domínio passa pela Cloudflare, fazem o mesmo no servidor;
   esta verificação cobre a hospedagem estática, que não envia cabeçalhos. */
(function () {
  if (window.self === window.top) return;
  var raiz = document.documentElement;
  raiz.style.setProperty('display', 'none', 'important');
  try { window.top.location.replace(window.self.location.href); } catch (e) { /* o site de fora bloqueou a navegação: a página continua oculta */ }
})();
