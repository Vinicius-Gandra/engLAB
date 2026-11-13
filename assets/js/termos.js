/* Termos de uso: mostra a versão no idioma escolhido no site (inglês por padrão) */
(function () {
  var pt = false; try { pt = localStorage.getItem('vg-lang') === 'pt'; } catch (e) { /* sem armazenamento */ }
  function mostrar(l) {
    document.querySelectorAll('main[data-versao]').forEach(function (m) { m.hidden = m.getAttribute('data-versao') !== l; });
    document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en';
    document.title = l === 'pt' ? 'Termos de uso e propriedade intelectual · EngenhaLab' : 'Terms of use and intellectual property · EngenhaLab';
  }
  mostrar(pt ? 'pt' : 'en');
  document.addEventListener('click', function (e) {
    var a = e.target.closest('.lang [data-l]'); if (!a) return; e.preventDefault();
    try { localStorage.setItem('vg-lang', a.getAttribute('data-l')); } catch (_) {} location.reload();
  });
})();
