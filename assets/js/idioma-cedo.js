/* Idioma (inglês por padrão): esconde a página até os textos serem trocados (evita ver o português piscar) */
(function () {
  try {
    if (localStorage.getItem('vg-lang') === 'pt' && document.documentElement.getAttribute('data-lang-fixo') !== 'en') return;   // inglês é o padrão; páginas só em inglês ignoram a escolha
    var h = document.documentElement; h.lang = 'en'; h.setAttribute('data-lang-pending', ''); h.style.visibility = 'hidden';   // vale também onde o CSP barra estilos embutidos
    var s = document.createElement('style'); s.textContent = 'html[data-lang-pending] body{visibility:hidden}'; document.head.appendChild(s);
    setTimeout(function () { h.removeAttribute('data-lang-pending'); h.style.visibility = ''; }, 2500);
  } catch (e) { /* sem armazenamento */ }
})();
