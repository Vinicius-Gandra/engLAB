/* EngenhaLab · rodapé comum a todas as páginas
   Identificação do autor, laboratórios, contato por e-mail, termos de uso, privacidade e idioma.
   O idioma segue a escolha do site (inglês por padrão; português para quem escolher). */
(function () {
  'use strict';
  if (document.querySelector('.eg-rodape')) return;
  var pt = false;
  try { pt = localStorage.getItem('vg-lang') === 'pt'; } catch (e) { /* sem armazenamento */ }
  // página só em inglês: rodapé em inglês e sem o seletor de idioma
  var fixo = document.documentElement.getAttribute('data-lang-fixo') === 'en';
  if (fixo) pt = false;
  var EMAIL = 'viniciusgandra2016@gmail.com', ANO = new Date().getFullYear();
  var T = pt ? {
    tag: 'Laboratórios interativos de engenharia',
    autor: 'por Vinicius Marques Gandra · Engenheiro Mecânico',
    labs: 'Laboratórios', off: 'Offshore e ancoragem', maq: 'Máquinas elétricas', flu: 'Fluidos e CFD', met: 'Metalurgia',
    site: 'EngenhaLab', inicio: 'Início', sobre: 'Sobre o autor', acesso: 'Acesso profissional',
    legal: 'Legal', termos: 'Termos de uso e propriedade intelectual', priv: 'Privacidade', pref: 'Preferências de estatísticas',
    contato: 'Contato', contatoTxt: 'Dúvidas, correções, parcerias ou pedidos sobre o conteúdo.',
    escrever: 'Enviar e-mail', assunto: 'EngenhaLab · contato',
    direitos: 'Todos os direitos reservados.',
    aviso: 'Conteúdo educacional elaborado a partir de dados públicos. Os resultados são estimativas e não substituem o projeto nem a responsabilidade técnica de profissional habilitado.',
    idioma: 'Idioma', topo: 'Voltar ao topo', nav: 'Rodapé do site'
  } : {
    tag: 'Interactive engineering labs',
    autor: 'by Vinicius Marques Gandra · Mechanical Engineer',
    labs: 'Labs', off: 'Offshore and mooring', maq: 'Electrical machines', flu: 'Fluids and CFD', met: 'Metallurgy',
    site: 'EngenhaLab', inicio: 'Home', sobre: 'About the author', acesso: 'Professional access',
    legal: 'Legal', termos: 'Terms of use and intellectual property', priv: 'Privacy', pref: 'Statistics preferences',
    contato: 'Contact', contatoTxt: 'Questions, corrections, partnerships or requests about the content.',
    escrever: 'Send an e-mail', assunto: 'EngenhaLab · contact',
    direitos: 'All rights reserved.',
    aviso: 'Educational content built from public data. Results are estimates and do not replace the design work or the technical responsibility of a licensed engineer.',
    idioma: 'Language', topo: 'Back to top', nav: 'Site footer'
  };
  var a = function (h, t, extra) { return '<a href="' + h + '"' + (extra || '') + '>' + t + '</a>'; };
  var mail = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(T.assunto);
  var f = document.createElement('footer');
  f.className = 'eg-rodape'; f.setAttribute('aria-label', T.nav);
  f.innerHTML =
    '<div class="eg-r-in">' +
      '<div class="eg-r-marca">' +
        '<a class="eg-r-logo" href="/"><i>VG<b>.</b></i><span>EngenhaLab</span></a>' +
        '<p class="eg-r-tag">' + T.tag + '</p>' +
        '<p class="eg-r-autor">' + T.autor + '</p>' +
      '</div>' +
      '<nav class="eg-r-col" aria-label="' + T.labs + '"><h2>' + T.labs + '</h2>' +
        a('/offshore/', T.off) + a('/maquinas-eletricas/', T.maq) + a('/fluidos/', T.flu) + '</nav>' +
      '<nav class="eg-r-col" aria-label="' + T.site + '"><h2>' + T.site + '</h2>' +
        a('/', T.inicio) + a('/sobre.html', T.sobre) + a('/offshore/conta.html', T.acesso) + '</nav>' +
      '<nav class="eg-r-col" aria-label="' + T.legal + '"><h2>' + T.legal + '</h2>' +
        a('/termos.html', T.termos) + a('/privacidade.html', T.priv) + a('/privacidade.html#estatisticas', T.pref, ' data-el-pref') + '</nav>' +
      '<div class="eg-r-contato"><h2>' + T.contato + '</h2><p>' + T.contatoTxt + '</p>' +
        '<a class="eg-r-mail" href="' + mail + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v12H3z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m3 7 9 6 9-6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>' + T.escrever + '</a>' +
        '<span class="eg-r-end">' + EMAIL + '</span></div>' +
    '</div>' +
    '<div class="eg-r-base">' +
      '<p class="eg-r-aviso">' + T.aviso + '</p>' +
      '<div class="eg-r-linha"><span>© ' + ANO + ' Vinicius Marques Gandra. ' + T.direitos + '</span>' +
        (fixo ? '' : '<span class="eg-r-lang" role="group" aria-label="' + T.idioma + '">' +
          '<button type="button" data-l="en"' + (pt ? '' : ' aria-pressed="true"') + '>English</button>' +
          '<button type="button" data-l="pt"' + (pt ? ' aria-pressed="true"' : '') + '>Português</button></span>') +
        '<a class="eg-r-topo" href="#">' + T.topo + ' ↑</a></div>' +
    '</div>';
  f.addEventListener('click', function (e) {
    var b = e.target.closest('[data-l]');
    if (b) { try { localStorage.setItem('vg-lang', b.getAttribute('data-l')); } catch (_) {} location.reload(); return; }
    if (e.target.closest('.eg-r-topo')) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  });
  function por() { (document.body || document.documentElement).appendChild(f); }
  if (document.body) por(); else document.addEventListener('DOMContentLoaded', por);
})();
