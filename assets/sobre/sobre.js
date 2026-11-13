/* Sobre o autor: tema, menu e seção atual. */
(function () {
  'use strict';
  const $ = s => document.querySelector(s), $$ = s => Array.from(document.querySelectorAll(s));
  const raiz = document.documentElement;

  /* ---------- tema ---------- */
  const claro = () => raiz.getAttribute('data-theme') === 'light' || (!raiz.hasAttribute('data-theme') && matchMedia('(prefers-color-scheme: light)').matches);
  const botaoTema = $('#theme-toggle');
  if (botaoTema) botaoTema.addEventListener('click', () => {
    const t = claro() ? 'dark' : 'light'; raiz.setAttribute('data-theme', t);
    try { localStorage.setItem('vg-theme', t); } catch (e) { /* sem armazenamento */ }
  });

  /* ---------- menu no celular ---------- */
  const menu = $('#menu'), botaoMenu = $('#menu-botao');
  const fecharMenu = () => { menu.classList.remove('aberto'); botaoMenu.setAttribute('aria-expanded', 'false'); };
  botaoMenu.addEventListener('click', () => { const abrir = !menu.classList.contains('aberto'); menu.classList.toggle('aberto', abrir); botaoMenu.setAttribute('aria-expanded', String(abrir)); });
  menu.addEventListener('click', e => { if (e.target.closest('a')) fecharMenu(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('aberto')) { fecharMenu(); botaoMenu.focus(); } });

  /* ---------- topo e seção atual ---------- */
  const topo = $('.topo');
  const rolar = () => topo.classList.toggle('rolou', scrollY > 8);
  addEventListener('scroll', rolar, { passive: true }); rolar();
  const links = $$('#menu a[href^="#"]');
  if ('IntersectionObserver' in window) {
    const vis = new Map();
    const obs = new IntersectionObserver(es => {
      for (const e of es) vis.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
      let melhor = null, r = 0; for (const [id, v] of vis) if (v > r) { r = v; melhor = id; }
      links.forEach(a => { if (a.getAttribute('href') === '#' + melhor) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0, .01, .5, 1] });
    for (const a of links) { const s = document.getElementById(a.getAttribute('href').slice(1)); if (s) obs.observe(s); }
  }
})();
