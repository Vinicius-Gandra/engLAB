/* A coleta só inicia após uma escolha explícita do visitante. */
(function () {
  'use strict';
  var config = window.ENGENHALAB_ANALYTICS || {};
  var id = config.measurementId || '';
  var pages = config.pages || {};
  // /offshore/ e /offshore/index.html são a mesma página
  function normal(value) { return /\/$/.test(value) && value !== '/' ? value + 'index.html' : value; }
  var path = normal(location.pathname);
  if (!Object.hasOwn(pages, path) || window.top !== window.self) return;
  var storageKey = 'engenhalab.analytics-choice.v1';
  var maxAge = 180 * 86400000;
  var started = false;
  var banner;
  var sessionChoice = null;
  function choice() {
    if (sessionChoice) return sessionChoice;
    try {
      var saved = JSON.parse(localStorage.getItem(storageKey));
      return saved && Date.now() - saved.at >= 0 && Date.now() - saved.at < maxAge &&
        ['granted', 'denied'].includes(saved.value) ? saved.value : null;
    } catch (_) { return null; }
  }
  function tag() { window.dataLayer.push(arguments); }
  function referrer() {
    try {
      var url = new URL(document.referrer);
      return url.origin === location.origin && Object.hasOwn(pages, normal(url.pathname)) ?
        url.origin + normal(url.pathname) : url.origin + '/';
    } catch (_) { return ''; }
  }
  function start() {
    if (started || !['engenhalab.com.br', 'www.engenhalab.com.br'].includes(location.hostname) ||
        !/^G-[A-Z0-9]{7,}$/.test(id) || choice() !== 'granted') return;
    started = true;
    window['ga-disable-' + id] = false;
    window.dataLayer = window.dataLayer || [];
    tag('consent', 'default', {
      analytics_storage: 'granted', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    });
    tag('js', new Date());
    tag('set', { page_location: location.origin + path, page_referrer: referrer(), page_title: pages[path] });
    tag('config', id, {
      send_page_view: false, allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: maxAge / 1000, cookie_flags: 'SameSite=Lax;Secure'
    });
    tag('event', 'page_view', { page_location: location.origin + path, page_referrer: referrer(), page_title: pages[path] });
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    script.referrerPolicy = 'origin';
    document.head.appendChild(script);
  }
  function clearCookies() {
    var domains = [null, location.hostname, '.' + location.hostname];
    if (location.hostname.endsWith('.engenhalab.com.br')) domains.push('.engenhalab.com.br');
    var segments = location.pathname.split('/');
    var paths = ['/'];
    for (var i = 1; i < segments.length; i++) paths.push(segments.slice(0, i).join('/') || '/');
    document.cookie.split(';').forEach(function (item) {
      var name = item.trim().split('=')[0];
      if (!/^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name)) return;
      domains.forEach(function (domain) {
        paths.forEach(function (cookiePath) {
          document.cookie = name + '=; Max-Age=0; Path=' + cookiePath + '; SameSite=Lax; Secure' + (domain ? '; Domain=' + domain : '');
        });
      });
    });
  }
  function save(value) {
    sessionChoice = value;
    try { localStorage.setItem(storageKey, JSON.stringify({ value: value, at: Date.now() })); } catch (_) { /* A escolha continua válida nesta página. */ }
    if (value === 'granted') {
      if (started) {
        window['ga-disable-' + id] = false;
        tag('consent', 'update', { analytics_storage: 'granted' });
      } else start();
    } else {
      window['ga-disable-' + id] = true;
      if (started) tag('consent', 'update', { analytics_storage: 'denied' });
      clearCookies();
    }
    if (banner) banner.hidden = true;
  }
  function button(text, action) {
    var el = document.createElement('button');
    el.type = 'button'; el.textContent = text; el.addEventListener('click', action); return el;
  }
  function node(tag, className, text) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
  }
  var STATUS = { granted: 'Escolha atual: estatísticas permitidas.', denied: 'Escolha atual: estatísticas recusadas.' };
  function showDetails(open) {
    var more = banner.querySelector('.el-consent-more');
    var details = banner.querySelector('.el-consent-details');
    details.hidden = !open;
    more.setAttribute('aria-expanded', open ? 'true' : 'false');
    var status = banner.querySelector('.el-consent-status');
    var current = choice();
    status.textContent = current ? STATUS[current] : '';
    status.hidden = !current;
  }
  function openPreferences() {
    if (!banner) return;
    banner.hidden = false;
    showDetails(true);
    banner.querySelector('h2').focus();
  }
  function row(list, term, text) {
    list.appendChild(node('dt', '', term));
    list.appendChild(node('dd', '', text));
  }
  function details() {
    var box = node('div', 'el-consent-details');
    box.id = 'el-consent-details';
    box.appendChild(node('h3', '', 'Sempre ativo'));
    box.appendChild(node('p', '', 'Tema, idioma, parâmetros dos estudos e o registro desta escolha ficam no seu navegador. A sessão de login e os controles de segurança do laboratório offshore têm finalidade própria. Nada disso depende desta escolha nem vai para as estatísticas.'));
    box.appendChild(node('h3', '', 'Opcional: estatísticas de navegação'));
    var list = node('dl');
    row(list, 'O que é medido', 'Páginas públicas visitadas, origem da visita, dispositivo, navegador, localização aproximada e tempo com a página em foco.');
    row(list, 'O que fica de fora', 'Valores das calculadoras, formulários, senhas, documentos, páginas de acesso e relatórios. Recursos de publicidade ficam desativados.');
    row(list, 'Quem recebe', 'O Google, que opera o Google Analytics, e o administrador da conta do EngenhaLab.');
    row(list, 'Por quanto tempo', 'Os cookies do Analytics e esta escolha valem por até 180 dias neste navegador.');
    box.appendChild(list);
    box.appendChild(node('h3', '', 'Mudar de ideia'));
    box.appendChild(node('p', '', 'Use “Preferências de estatísticas” no rodapé de qualquer página. Ao recusar depois de permitir, a medição para e os cookies do Analytics deste domínio são removidos. Dados já enviados não são apagados automaticamente.'));
    var status = node('p', 'el-consent-status'); status.setAttribute('aria-live', 'polite'); box.appendChild(status);
    var privacy = node('a', '', 'Política de privacidade'); privacy.href = '/privacidade.html#estatisticas';
    var link = node('p'); link.appendChild(privacy); box.appendChild(link);
    return box;
  }
  function init() {
    if (!/^G-[A-Z0-9]{7,}$/.test(id)) return;
    var style = document.createElement('link'); style.rel = 'stylesheet'; style.href = '/assets/css/analytics.css?v=20261110-2'; document.head.appendChild(style);
    banner = node('section', 'el-consent');
    banner.setAttribute('aria-labelledby', 'el-consent-title');
    var head = node('div', 'el-consent-head');
    var icon = node('span', 'el-consent-icon'); icon.setAttribute('aria-hidden', 'true');
    for (var i = 0; i < 3; i++) icon.appendChild(node('i'));
    head.appendChild(icon);
    var title = node('h2', '', 'Estatísticas de uso'); title.id = 'el-consent-title'; title.tabIndex = -1;
    head.appendChild(title);
    head.appendChild(node('span', 'el-consent-tag', 'Opcional'));
    banner.appendChild(head);
    banner.appendChild(node('p', 'el-consent-text', 'Com sua permissão, o Google Analytics usa cookies para medir quais laboratórios são visitados e quanto tempo ficam em uso. Isso ajuda a decidir quais ferramentas melhorar primeiro. Os dados que você digita nas calculadoras ficam fora dessas estatísticas.'));
    var actions = node('div', 'el-consent-actions');
    var deny = button('Recusar', function () { save('denied'); }); deny.className = 'el-consent-deny';
    var allow = button('Permitir estatísticas', function () { save('granted'); }); allow.className = 'el-consent-allow';
    actions.appendChild(deny); actions.appendChild(allow);
    banner.appendChild(actions);
    var more = button('Como medimos e como mudar sua escolha', function () {
      showDetails(more.getAttribute('aria-expanded') !== 'true');
    });
    more.className = 'el-consent-more';
    more.setAttribute('aria-controls', 'el-consent-details');
    banner.appendChild(more);
    banner.appendChild(details());
    showDetails(false);
    banner.hidden = choice() !== null; document.body.appendChild(banner);
    // o rodapé comum traz o link "Preferências de estatísticas"; sem ele, um botão discreto fica no canto
    document.addEventListener('click', function (event) {
      var target = event.target && event.target.closest ? event.target.closest('[data-el-pref]') : null;
      if (!target) return;
      event.preventDefault(); openPreferences();
    });
    window.addEventListener('load', function () {
      if (document.querySelector('[data-el-pref]')) return;
      var settings = button('Preferências de estatísticas', openPreferences);
      settings.className = 'el-privacy-settings el-privacy-floating';
      document.body.appendChild(settings);
    }, { once: true });
    window.EngenhaAnalytics = Object.freeze({ openPreferences: openPreferences });
    start();
  }
  window.addEventListener('storage', function (event) {
    if (event.key !== storageKey) return;
    sessionChoice = null;
    if (choice() !== 'granted') { window['ga-disable-' + id] = true; clearCookies(); }
    else if (started) { window['ga-disable-' + id] = false; tag('consent', 'update', { analytics_storage: 'granted' }); }
    else start();
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
}());
