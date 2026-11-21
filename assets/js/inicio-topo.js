/* EngenhaLab · barra de menus da página inicial: menu dos laboratórios, menu do celular, conta e idioma */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var menu = $('menu'), bt = $('menu-bt'), labsBt = $('menu-labs-bt'), labs = $('menu-labs');
  var celular = matchMedia('(max-width: 859px)');

  /* ---- Laboratórios ▾ ---- */
  function abrirLabs(sim) {
    labsBt.setAttribute('aria-expanded', String(sim));
    labs.hidden = celular.matches ? false : !sim;
  }
  labsBt.addEventListener('click', function (e) { e.stopPropagation(); if (!celular.matches) abrirLabs(labs.hidden); });
  document.addEventListener('click', function (e) { if (!celular.matches && !labs.hidden && !labs.contains(e.target)) abrirLabs(false); });
  // no computador, abre ao passar o mouse e fecha ao sair
  var tempo = 0, item = labsBt.parentNode;
  item.addEventListener('mouseenter', function () { if (celular.matches || !matchMedia('(hover: hover)').matches) return; clearTimeout(tempo); abrirLabs(true); });
  item.addEventListener('mouseleave', function () { if (celular.matches || !matchMedia('(hover: hover)').matches) return; tempo = setTimeout(function () { abrirLabs(false); }, 160); });

  /* ---- menu do celular ---- */
  function abrirMenu(sim) {
    bt.setAttribute('aria-expanded', String(sim));
    bt.setAttribute('aria-label', sim ? 'Fechar menu' : 'Abrir menu');
    menu.classList.toggle('aberto', sim);
    document.documentElement.style.overflow = sim ? 'hidden' : '';
  }
  bt.addEventListener('click', function () { abrirMenu(!menu.classList.contains('aberto')); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) abrirMenu(false); });
  // no celular a lista dos laboratórios fica sempre aberta dentro do menu
  function ajustar() { abrirMenu(false); labs.hidden = !celular.matches; labsBt.setAttribute('aria-expanded', String(celular.matches)); }
  celular.addEventListener('change', ajustar); ajustar();
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (menu.classList.contains('aberto')) { abrirMenu(false); bt.focus(); }
    else if (!labs.hidden && !celular.matches) { abrirLabs(false); labsBt.focus(); }
  });

  /* ---- conta (mesmo login dos laboratórios) ---- */
  (function () {
    var a = $('top-conta'); if (!a) return;
    var s = null; try { s = JSON.parse(localStorage.getItem('engenha-offshore-sessao') || 'null'); } catch (e) { /* sem armazenamento */ }
    if (!s || !s.usuario || !(s.expira * 1000 > Date.now())) return;
    var u = s.usuario, nome = String(u.nome || u.email || '').trim(), primeiro = nome.split(/\s+/)[0] || '';
    var ini = nome.split(/\s+/).filter(Boolean).map(function (p) { return p[0]; }).slice(0, 2).join('').toUpperCase() || '?';
    var av = document.createElement('span'); av.className = 'top-av';
    if (/^data:image\/(png|jpeg|webp);base64,/.test(String(u.avatar || ''))) { var img = document.createElement('img'); img.src = u.avatar; img.alt = ''; av.appendChild(img); } else av.textContent = ini;
    var t = document.createElement('span'); t.className = 'top-conta-t'; t.textContent = primeiro;
    a.textContent = ''; a.appendChild(av); a.appendChild(t);
    a.href = 'offshore/conta.html'; a.title = 'Sua conta: ' + (u.email || ''); a.classList.add('logado');
  })();

  /* ---- idioma ---- */
  var sel = $('top-lang');
  if (sel) {
    var atual = 'pt'; try { atual = localStorage.getItem('vg-lang') === 'en' ? 'en' : 'pt'; } catch (e) { /* sem armazenamento */ }
    sel.value = atual;
    sel.addEventListener('change', function () {
      if (window.Idioma && window.Idioma.trocar) return window.Idioma.trocar(sel.value);
      try { localStorage.setItem('vg-lang', sel.value); } catch (e) { /* sem armazenamento */ }
      location.reload();
    });
  }
})();
