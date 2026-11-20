/* Vitrine dos laboratórios na tela de entrada: as mesmas figuras animadas da página inicial,
   uma de cada vez. Cada figura é montada numa caixa e devolve a função que a para.
   Sem estilo embutido no HTML (a página de conta tem política de conteúdo restrita): os estilos
   das figuras vêm como data-st e são aplicados pelo CSSOM. */
(function () {
  'use strict';
  const NS = 'http://www.w3.org/2000/svg';
  const el = (tag, attrs, parent) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); parent.appendChild(e); return e; };
  const f1 = x => Math.round(x * 10) / 10;
  const pt = (r, a) => [f1(r * Math.cos(a)), f1(r * Math.sin(a))];
  const calmo = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cssDe = box => n => getComputedStyle(box).getPropertyValue(n).trim();
  const claro = () => document.documentElement.getAttribute('data-theme') === 'light';
  function colocar(box, html) {
    box.innerHTML = html.replace(/ style="/g, ' data-st="');
    box.querySelectorAll('[data-st]').forEach(e => { e.style.cssText = e.getAttribute('data-st'); e.removeAttribute('data-st'); });
    return box.firstElementChild;
  }
  // laço de animação; com movimento reduzido desenha um quadro só
  function laco(draw, t0 = 0) {
    let raf = 0, ini = 0;
    const passo = ts => { if (!ini) ini = ts; draw((ts - ini) / 1000 + t0); raf = requestAnimationFrame(passo); };
    draw(t0); if (!calmo()) raf = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(raf);
  }

  /* máquinas elétricas: síncrona de 4 polos, 48 ranhuras, campo girante */
  function rotor(box) {
    const svg = colocar(box, '<svg viewBox="-240 -240 480 480"><g data-s></g><g data-r></g><path class="m-centre" d="M-232 0H232M0 -232V232"/></svg>');
    const gS = svg.querySelector('[data-s]'), gR = svg.querySelector('[data-r]');
    const RO = 214, RI = 132, SLOTS = 48, RS = 126, RH = 70, P = 4, cu = [];
    el('path', { class: 'm-core', 'fill-rule': 'evenodd', d: `M${RO} 0A${RO} ${RO} 0 1 1 ${-RO} 0A${RO} ${RO} 0 1 1 ${RO} 0ZM${RI} 0A${RI} ${RI} 0 1 0 ${-RI} 0A${RI} ${RI} 0 1 0 ${RI} 0Z` }, gS);
    for (let i = 0; i < SLOTS; i++) {
      const g = el('g', { transform: `rotate(${(360 / SLOTS) * i})` }, gS);
      el('path', { class: 'm-slot', d: `M${RI - 1} -2.2H${RI + 5}V-4.4H${RI + 33}V4.4H${RI + 5}V2.2H${RI - 1}Z` }, g);
      cu.push([el('rect', { class: 'm-cu', x: RI + 7, y: -3.4, width: 12, height: 6.8, rx: 1 }, g), (2 * Math.PI / SLOTS) * i]);
      cu.push([el('rect', { class: 'm-cu', x: RI + 20.5, y: -3.4, width: 11.5, height: 6.8, rx: 1 }, g), (2 * Math.PI / SLOTS) * i]);
    }
    const tau = 2 * Math.PI / P, hb = 0.17 * tau * 90, ct = 0.13 * tau * 90, as = 0.36 * tau;
    const [sx, sy] = pt(RS, -as), [ix, iy] = pt(RS - 8, -as);
    el('circle', { class: 'm-hub', r: RH }, gR);
    for (let k = 0; k < P; k++) {
      const g = el('g', { transform: `rotate(${(360 / P) * k})` }, gR);
      el('path', { class: 'm-coil', d: `M74 ${f1(hb)}H100V${f1(hb + ct)}H74ZM74 ${f1(-hb)}H100V${f1(-hb - ct)}H74Z` }, g);
      el('path', { class: 'm-pole', d: `M64 ${f1(-hb)}H110L${ix} ${iy}L${sx} ${sy}A${RS} ${RS} 0 0 1 ${sx} ${-sy}L${ix} ${-iy}L110 ${f1(hb)}H64Z` }, g);
      for (let j = 0; j < 5; j++) { const [dx, dy] = pt(RS - 7, -as * 0.78 + 2 * as * 0.78 * j / 4); el('circle', { class: 'm-damper', cx: dx, cy: dy, r: 2.6 }, g); }
    }
    el('circle', { class: 'm-shaft', r: 34 }, gR);
    el('rect', { class: 'm-key', x: -5, y: -34, width: 10, height: 8 }, gR);
    return laco(t => {
      const a = (t * 36) % 360, r = a * Math.PI / 180;
      gR.setAttribute('transform', `rotate(${a.toFixed(2)})`);
      for (const [e, th] of cu) e.style.opacity = (0.32 + 0.68 * Math.abs(Math.cos(2 * (th - r)))).toFixed(2);
    });
  }

  /* offshore: FPSO com arfagem e jogo, ondas e linhas acompanhando a torre */
  function fpso(box) {
    const svg = colocar(box, "<svg viewBox=\"0 0 320 200\"><defs><clipPath id=\"fpso-clip\"><rect width=\"320\" height=\"200\"/></clipPath></defs><g clip-path=\"url(#fpso-clip)\"><path class=\"fg-hatch\" d=\"M0 182H320M10 182l-8 10M24 182l-8 10M38 182l-8 10M52 182l-8 10M66 182l-8 10M80 182l-8 10M94 182l-8 10M108 182l-8 10M122 182l-8 10M136 182l-8 10M150 182l-8 10M164 182l-8 10M178 182l-8 10M192 182l-8 10M206 182l-8 10M220 182l-8 10M234 182l-8 10M248 182l-8 10M262 182l-8 10M276 182l-8 10M290 182l-8 10M304 182l-8 10M318 182l-8 10\"/><g id=\"fpso-lines\"><path class=\"fg-acc\" id=\"fpso-moor\"/><path class=\"fg-flow\" id=\"fpso-riser\" style=\"stroke-width:1.8\"/></g><path class=\"fg-acc-fill\" d=\"M14 182l6-7 6 7ZM44 182l6-7 6 7ZM294 182l6-7 6 7Z\"/><g id=\"fpso-ship\" transform=\"translate(120 78)\"><path class=\"fg-solid\" d=\"M-100 -14H90L110 -20L102 12H-92Q-102 12 -102 2Z\"/><path class=\"fg-line\" d=\"M-100 -2H104\"/><rect class=\"fg-solid\" x=\"-66\" y=\"-23\" width=\"22\" height=\"9\" rx=\"1\"/><rect class=\"fg-solid\" x=\"-40\" y=\"-26\" width=\"20\" height=\"12\" rx=\"1\"/><rect class=\"fg-solid\" x=\"-16\" y=\"-22\" width=\"22\" height=\"8\" rx=\"1\"/><rect class=\"fg-solid\" x=\"10\" y=\"-25\" width=\"20\" height=\"11\" rx=\"1\"/><rect class=\"fg-solid\" x=\"34\" y=\"-21\" width=\"18\" height=\"7\" rx=\"1\"/><rect class=\"fg-solid\" x=\"-98\" y=\"-36\" width=\"20\" height=\"22\" rx=\"1\"/><path class=\"fg-line\" d=\"M-102 -38H-74M-94 -30h12M-94 -24h12\"/><path class=\"fg-line\" d=\"M86 -14L100 -50M93 -32h7\"/><path class=\"fg-acc-fill\" d=\"M100 -50q-4 -6 0 -12q4 6 0 12Z\"/><circle class=\"fg-acc\" cx=\"70\" cy=\"-6\" r=\"5\"/><path class=\"fg-acc\" d=\"M70 -1V12\"/></g><rect x=\"0\" y=\"78\" width=\"320\" height=\"104\" style=\"fill:var(--teal-wash)\"/><g id=\"fpso-waves\"><path class=\"fg-water\" d=\"M-40 0q10 -4 20 0t20 0q10 -4 20 0t20 0q10 -4 20 0t20 0q10 -4 20 0t20 0q10 -4 20 0t20 0q10 -4 20 0t20 0q10 -4 20 0t20 0q10 -4 20 0t20 0q10 -4 20 0t20 0q10 -4 20 0t20 0\" transform=\"translate(0 78)\"/></g></g></svg>");
    const ship = svg.querySelector('#fpso-ship'), moor = svg.querySelector('#fpso-moor'), riser = svg.querySelector('#fpso-riser'), waves = svg.querySelector('#fpso-waves');
    return laco(t => {
      const ang = 1.6 * Math.sin(t * 0.7), heave = 2.2 * Math.sin(t * 0.55 + 1), r = ang * Math.PI / 180;
      ship.setAttribute('transform', `translate(120 ${(78 + heave).toFixed(2)}) rotate(${ang.toFixed(2)})`);
      const fx = 120 + 70 * Math.cos(r) - 12 * Math.sin(r), fy = 78 + heave + 70 * Math.sin(r) + 12 * Math.cos(r), F = `${fx.toFixed(1)} ${fy.toFixed(1)}`;
      moor.setAttribute('d', `M20 182H72Q${(fx - 42).toFixed(1)} 180 ${F}M50 182H100Q${(fx - 26).toFixed(1)} 180 ${F}M300 182H262Q${(fx + 22).toFixed(1)} 180 ${F}`);
      riser.setAttribute('d', `M${F}C${(fx + 6).toFixed(1)} ${(fy + 42).toFixed(1)} 226 102 238 124S250 182 270 182H284`);
      waves.setAttribute('transform', `translate(${(-(t * 10) % 40).toFixed(2)} 0)`);
    });
  }

  /* metalurgia: forno basculado vazando e lingoteiras em fluxo contínuo */
  function metalurgia(box) {
    const svg = colocar(box, "<svg viewBox=\"0 0 320 200\"><defs><clipPath id=\"met-clip\"><rect width=\"320\" height=\"200\"/></clipPath></defs><g clip-path=\"url(#met-clip)\"><path class=\"fg-hatch\" d=\"M0 184H320M12 184l-8 10M26 184l-8 10M40 184l-8 10M54 184l-8 10M68 184l-8 10M82 184l-8 10M96 184l-8 10M110 184l-8 10M124 184l-8 10M138 184l-8 10M152 184l-8 10M166 184l-8 10M180 184l-8 10M194 184l-8 10M208 184l-8 10M222 184l-8 10M236 184l-8 10M250 184l-8 10M264 184l-8 10M278 184l-8 10M292 184l-8 10M306 184l-8 10\"/><path class=\"fg-line\" d=\"M0 181H320\"/><path class=\"fg-solid\" d=\"M121 182L126 50H136L141 182Z\"/><rect class=\"fg-solid\" x=\"-10\" y=\"164\" width=\"340\" height=\"8\" rx=\"1\"/><g id=\"met-car\"><circle class=\"fg-solid\" cx=\"8\" cy=\"176\" r=\"4.5\"/><circle class=\"fg-solid\" cx=\"56\" cy=\"176\" r=\"4.5\"/><circle class=\"fg-solid\" cx=\"104\" cy=\"176\" r=\"4.5\"/><circle class=\"fg-solid\" cx=\"152\" cy=\"176\" r=\"4.5\"/><circle class=\"fg-solid\" cx=\"200\" cy=\"176\" r=\"4.5\"/><circle class=\"fg-solid\" cx=\"248\" cy=\"176\" r=\"4.5\"/><circle class=\"fg-solid\" cx=\"296\" cy=\"176\" r=\"4.5\"/><circle class=\"fg-solid\" cx=\"344\" cy=\"176\" r=\"4.5\"/></g><g id=\"met-molds\"><g class=\"met-mold\"><path class=\"fg-solid\" d=\"M-11 0H11L13 44H-13Z\"/><path style=\"fill:var(--bg)\" class=\"fg-line\" d=\"M-7 2H7L8 42H-8Z\"/><path class=\"fg-acc-fill met-fill\" d=\"M0 0Z\"/></g><g class=\"met-mold\"><path class=\"fg-solid\" d=\"M-11 0H11L13 44H-13Z\"/><path style=\"fill:var(--bg)\" class=\"fg-line\" d=\"M-7 2H7L8 42H-8Z\"/><path class=\"fg-acc-fill met-fill\" d=\"M0 0Z\"/></g><g class=\"met-mold\"><path class=\"fg-solid\" d=\"M-11 0H11L13 44H-13Z\"/><path style=\"fill:var(--bg)\" class=\"fg-line\" d=\"M-7 2H7L8 42H-8Z\"/><path class=\"fg-acc-fill met-fill\" d=\"M0 0Z\"/></g><g class=\"met-mold\"><path class=\"fg-solid\" d=\"M-11 0H11L13 44H-13Z\"/><path style=\"fill:var(--bg)\" class=\"fg-line\" d=\"M-7 2H7L8 42H-8Z\"/><path class=\"fg-acc-fill met-fill\" d=\"M0 0Z\"/></g><g class=\"met-mold\"><path class=\"fg-solid\" d=\"M-11 0H11L13 44H-13Z\"/><path style=\"fill:var(--bg)\" class=\"fg-line\" d=\"M-7 2H7L8 42H-8Z\"/><path class=\"fg-acc-fill met-fill\" d=\"M0 0Z\"/></g><g class=\"met-mold\"><path class=\"fg-solid\" d=\"M-11 0H11L13 44H-13Z\"/><path style=\"fill:var(--bg)\" class=\"fg-line\" d=\"M-7 2H7L8 42H-8Z\"/><path class=\"fg-acc-fill met-fill\" d=\"M0 0Z\"/></g><g class=\"met-mold\"><path class=\"fg-solid\" d=\"M-11 0H11L13 44H-13Z\"/><path style=\"fill:var(--bg)\" class=\"fg-line\" d=\"M-7 2H7L8 42H-8Z\"/><path class=\"fg-acc-fill met-fill\" d=\"M0 0Z\"/></g><g class=\"met-mold\"><path class=\"fg-solid\" d=\"M-11 0H11L13 44H-13Z\"/><path style=\"fill:var(--bg)\" class=\"fg-line\" d=\"M-7 2H7L8 42H-8Z\"/><path class=\"fg-acc-fill met-fill\" d=\"M0 0Z\"/></g><g class=\"met-mold\"><path class=\"fg-solid\" d=\"M-11 0H11L13 44H-13Z\"/><path style=\"fill:var(--bg)\" class=\"fg-line\" d=\"M-7 2H7L8 42H-8Z\"/><path class=\"fg-acc-fill met-fill\" d=\"M0 0Z\"/></g><g class=\"met-mold\"><path class=\"fg-solid\" d=\"M-11 0H11L13 44H-13Z\"/><path style=\"fill:var(--bg)\" class=\"fg-line\" d=\"M-7 2H7L8 42H-8Z\"/><path class=\"fg-acc-fill met-fill\" d=\"M0 0Z\"/></g><g class=\"met-mold\"><path class=\"fg-solid\" d=\"M-11 0H11L13 44H-13Z\"/><path style=\"fill:var(--bg)\" class=\"fg-line\" d=\"M-7 2H7L8 42H-8Z\"/><path class=\"fg-acc-fill met-fill\" d=\"M0 0Z\"/></g></g><path id=\"met-cyl\" class=\"fg-line\" style=\"stroke-width:3\"/><path id=\"met-stream\" class=\"fg-acc\" style=\"stroke-width:3.4;stroke-dasharray:6 4\"/><g id=\"met-sparks\" class=\"fg-acc-fill\"><circle cx=\"0\" cy=\"0\" r=\"1.4\"/><circle cx=\"0\" cy=\"0\" r=\"1.4\"/><circle cx=\"0\" cy=\"0\" r=\"1.4\"/></g><g id=\"met-furnace\" transform=\"translate(131 48)\"><path class=\"fg-solid\" d=\"M-66 -8H-2L5 -14L3 -3L-4 56Q-35 62 -64 56Z\"/><path class=\"fg-line\" style=\"fill:none\" d=\"M-58 -4V50Q-35 55 -12 50V-4\"/><path class=\"fg-acc-fill\" d=\"M-57 0H-12L-12 7H-57Z\"/><path style=\"stroke:var(--copper);stroke-width:2.6\" d=\"M-67 10h4M-6 10h4\"/><path style=\"stroke:var(--copper);stroke-width:2.6\" d=\"M-67 17h4M-6 17h4\"/><path style=\"stroke:var(--copper);stroke-width:2.6\" d=\"M-67 24h4M-6 24h4\"/><path style=\"stroke:var(--copper);stroke-width:2.6\" d=\"M-67 31h4M-6 31h4\"/><path style=\"stroke:var(--copper);stroke-width:2.6\" d=\"M-67 38h4M-6 38h4\"/><path style=\"stroke:var(--copper);stroke-width:2.6\" d=\"M-67 45h4M-6 45h4\"/><path style=\"stroke:var(--copper);stroke-width:2.6\" d=\"M-67 52h4M-6 52h4\"/></g><circle class=\"fg-solid\" cx=\"131\" cy=\"48\" r=\"4.5\"/></g></svg>");
    const furnace = svg.querySelector('#met-furnace'), molds = [...svg.querySelectorAll('.met-mold')], car = svg.querySelector('#met-car');
    const stream = svg.querySelector('#met-stream'), cyl = svg.querySelector('#met-cyl'), sparks = [...svg.querySelectorAll('#met-sparks circle')];
    const X0 = 152, GAP = 34, V = 8;
    const fillPath = level => { if (level <= 0) return 'M0 0Z'; const y = 42 - 40 * level, hw = 7 + (y - 2) / 40; return `M${(-hw).toFixed(2)} ${y.toFixed(2)}H${hw.toFixed(2)}L8 42H-8Z`; };
    stream.setAttribute('d', `M136 46Q${X0 - 2} 54 ${X0} 122`);
    return laco(t => {
      const ang = 50 + 1.5 * Math.sin(t * 1.3), r = ang * Math.PI / 180;
      furnace.setAttribute('transform', `translate(131 48) rotate(${ang.toFixed(2)})`);
      const px = 131 - 58 * Math.cos(r) - 56 * Math.sin(r), py = 48 - 58 * Math.sin(r) + 56 * Math.cos(r);
      cyl.setAttribute('d', `M78 182L${px.toFixed(1)} ${py.toFixed(1)}`);
      stream.style.strokeDashoffset = (-t * 40).toFixed(1);
      const shift = (t * V) % GAP;
      car.setAttribute('transform', `translate(${(-((t * V) % 48)).toFixed(2)} 0)`);
      molds.forEach((m, i) => { const x = X0 + (i - 5) * GAP - shift; m.setAttribute('transform', `translate(${x.toFixed(2)} 120)`); m.querySelector('.met-fill').setAttribute('d', fillPath(Math.max(0, Math.min(1, (X0 + 9 - x) / 18)))); });
      sparks.forEach((s, i) => { const k = (t * 1.8 + i / 3) % 1; s.setAttribute('cx', (X0 + (i - 1) * 8 * k).toFixed(1)); s.setAttribute('cy', (120 - 10 * k + 8 * k * k).toFixed(1)); s.style.opacity = (1 - k).toFixed(2); });
    }, 2);
  }

  /* automação e CAD: flange desenhado, furado, cotado e carimbado (animação em CSS) */
  function cad(box) { colocar(box, "<svg viewBox=\"0 0 320 200\"><g class=\"cad\"><path class=\"fg-centre cad-fade\" style=\"--d:0s\" d=\"M86 110H234M160 40V180\"/><circle class=\"fg-centre cad-fade\" style=\"--d:.3s\" cx=\"160\" cy=\"110\" r=\"42\"/><circle class=\"fg-solid cad-fill\" cx=\"160\" cy=\"110\" r=\"60\"/><circle class=\"fg-line cad-draw\" style=\"--d:.5s;--len:2.2s\" pathLength=\"1\" cx=\"160\" cy=\"110\" r=\"60\" transform=\"rotate(-90 160 110)\"/><circle class=\"fg-line cad-draw\" style=\"--d:2.4s;--len:.8s\" pathLength=\"1\" cx=\"160\" cy=\"110\" r=\"17\" transform=\"rotate(-90 160 110)\"/><circle class=\"fg-line cad-hole\" style=\"--i:0;transform-origin:196.4px 131px\" cx=\"196.4\" cy=\"131\" r=\"6\"/><circle class=\"fg-line cad-hole\" style=\"--i:1;transform-origin:160px 152px\" cx=\"160\" cy=\"152\" r=\"6\"/><circle class=\"fg-line cad-hole\" style=\"--i:2;transform-origin:123.6px 131px\" cx=\"123.6\" cy=\"131\" r=\"6\"/><circle class=\"fg-line cad-hole\" style=\"--i:3;transform-origin:123.6px 89px\" cx=\"123.6\" cy=\"89\" r=\"6\"/><circle class=\"fg-line cad-hole\" style=\"--i:4;transform-origin:160px 68px\" cx=\"160\" cy=\"68\" r=\"6\"/><circle class=\"fg-line cad-hole\" style=\"--i:5;transform-origin:196.4px 89px\" cx=\"196.4\" cy=\"89\" r=\"6\"/><g class=\"cad-pen\" style=\"transform-origin:160px 110px\"><circle class=\"fg-acc-fill\" cx=\"160\" cy=\"50\" r=\"3\"/><path class=\"fg-acc\" style=\"stroke-width:1\" d=\"M160 41v-12M151 35h18\" /></g><g class=\"cad-dim\" style=\"--dd:0s\"><path class=\"fg-dim\" d=\"M100 104V24M220 104V24M100 30H220\"/><path class=\"fg-acc-fill\" d=\"M100 30l8-3.5v7ZM220 30l-8-3.5v7Z\"/><text class=\"fg-txt acc mid\" x=\"160\" y=\"22\" id=\"cad-od\">Ø120</text></g><g class=\"cad-dim\" style=\"--dd:.4s\"><path class=\"fg-dim\" d=\"M200.4 85L242 58H272\"/><text class=\"fg-txt\" x=\"244\" y=\"53\">6× Ø12</text></g><g class=\"cad-dim\" style=\"--dd:.8s\"><path class=\"fg-dim\" d=\"M145 118L78 162H50\"/><text class=\"fg-txt\" x=\"50\" y=\"157\">Ø34</text></g><g class=\"cad-stamp\"><rect x=\"236\" y=\"166\" width=\"76\" height=\"24\" rx=\"2\" class=\"fg-dim\"/><path class=\"fg-dim\" d=\"M236 176H312M280 166V190\"/><text class=\"fg-txt\" x=\"240\" y=\"174\" style=\"font-size:7px\">FLANGE</text><text class=\"fg-txt\" x=\"240\" y=\"186\" style=\"font-size:7px\">A3 · 1:2</text><text class=\"fg-txt acc\" x=\"284\" y=\"186\" style=\"font-size:7px\">REV B</text></g></g></svg>"); return () => {}; }

  // tela de canvas que acompanha o tamanho da caixa
  function tela(box) {
    const cv = document.createElement('canvas'); box.innerHTML = ''; box.appendChild(cv);
    const t = { cv, W: 0, H: 0, dpr: 1 };
    t.fit = () => { const r = cv.getBoundingClientRect(); t.dpr = Math.min(2, devicePixelRatio || 1); t.W = cv.width = Math.max(1, Math.round(r.width * t.dpr)); t.H = cv.height = Math.max(1, Math.round(r.height * t.dpr)); };
    t.fit(); return t;
  }

  /* estruturas: viga caixão em hexaedros vibrando no 1º modo, cor = tensão */
  function fem(box) {
    const T = tela(box), g = T.cv.getContext('2d'), cssv = cssDe(box);
    const NXe = 18, NYe = 4, NZe = 3, LEN = 10, HT = 1.6, WD = 1.1;
    const STOPS = [[43, 76, 201], [33, 163, 217], [60, 196, 138], [232, 213, 59], [232, 87, 46]];
    const cmap = v => { v = Math.max(0, Math.min(1, v)) * (STOPS.length - 1); const i = Math.min(STOPS.length - 2, v | 0), f = v - i, a = STOPS[i], b = STOPS[i + 1]; return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f]; };
    const faces = [], q = (a, b, c, d, n, sx, sy) => faces.push({ v: [a, b, c, d], n, sx, sy });
    for (let i = 0; i < NXe; i++) for (let k = 0; k < NZe; k++) { q([i, NYe, k], [i + 1, NYe, k], [i + 1, NYe, k + 1], [i, NYe, k + 1], [0, 1, 0], i + .5, NYe); q([i, 0, k], [i + 1, 0, k], [i + 1, 0, k + 1], [i, 0, k + 1], [0, -1, 0], i + .5, 0); }
    for (let i = 0; i < NXe; i++) for (let j = 0; j < NYe; j++) { q([i, j, NZe], [i + 1, j, NZe], [i + 1, j + 1, NZe], [i, j + 1, NZe], [0, 0, 1], i + .5, j + .5); q([i, j, 0], [i + 1, j, 0], [i + 1, j + 1, 0], [i, j + 1, 0], [0, 0, -1], i + .5, j + .5); }
    for (let j = 0; j < NYe; j++) for (let k = 0; k < NZe; k++) q([NXe, j, k], [NXe, j + 1, k], [NXe, j + 1, k + 1], [NXe, j, k + 1], [1, 0, 0], NXe, j + .5);
    const pintar = t => {
      const { W, H, dpr } = T; if (!W) return;
      const amp = 1.05 * Math.sin(t * 1.4);
      const phi = x => { const k = x / LEN; return k * k * (3 - k) / 2; }, slope = x => { const k = x / LEN; return 3 * k * (2 - k) / (2 * LEN); };
      const node = ([i, j, k], d) => { const x = LEN * i / NXe, y = HT * (j / NYe - 0.5), z = WD * (k / NZe - 0.5), th = Math.atan(d * slope(x)); return [x - y * Math.sin(th), d * phi(x) + y * Math.cos(th), z]; };
      const yaw = -0.16, pitch = 0.14, cy_ = Math.cos(yaw), sy_ = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
      const view = ([x, y, z]) => { x -= LEN / 2; const X = x * cy_ + z * sy_, Z = -x * sy_ + z * cy_; return [X, y * cp - Z * sp, y * sp + Z * cp]; };
      const S = Math.min(W / 12, H / 5.8), CX = W * 0.47, CY = H * 0.52;
      const proj = ([X, Y, Z]) => { const k = 1 / (1 - Z * 0.035); return [CX + X * S * k, CY - Y * S * k, Z]; };
      const ink3 = cssv('--text-3'), lz = claro();
      g.clearRect(0, 0, W, H);
      g.save(); g.strokeStyle = ink3; g.lineWidth = dpr;
      const w0 = proj(view([0, -1.6, -1])), w1 = proj(view([0, 1.6, -1])), w2 = proj(view([0, 1.6, 1])), w3 = proj(view([0, -1.6, 1]));
      g.fillStyle = lz ? 'rgba(20,35,44,.06)' : 'rgba(237,242,242,.05)'; g.beginPath(); g.moveTo(w0[0], w0[1]); g.lineTo(w1[0], w1[1]); g.lineTo(w2[0], w2[1]); g.lineTo(w3[0], w3[1]); g.closePath(); g.fill(); g.stroke();
      for (let k = 0; k <= 8; k++) { const a = proj(view([0, -1.6 + 3.2 * k / 8, -1])), b = proj(view([-0.35, -1.6 + 3.2 * k / 8 - 0.35, -1])); g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke(); }
      g.restore();
      g.save(); g.setLineDash([4 * dpr, 4 * dpr]); g.strokeStyle = ink3; g.lineWidth = dpr; g.beginPath();
      for (const c of [[0, 0, 0], [0, NYe, 0], [0, NYe, NZe], [0, 0, NZe]]) { const a = proj(view(node(c, 0))), b = proj(view(node([NXe, c[1], c[2]], 0))); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); }
      g.stroke(); g.restore();
      const L3 = [0.35, 0.8, 0.5], ln = Math.hypot(...L3), Ld = L3.map(v => v / ln), list = [];
      for (const f of faces) {
        const P = f.v.map(c => view(node(c, amp)));
        const e1 = [P[1][0] - P[0][0], P[1][1] - P[0][1], P[1][2] - P[0][2]], e2 = [P[3][0] - P[0][0], P[3][1] - P[0][1], P[3][2] - P[0][2]];
        let nx = e1[1] * e2[2] - e1[2] * e2[1], ny = e1[2] * e2[0] - e1[0] * e2[2], nz = e1[0] * e2[1] - e1[1] * e2[0];
        const nl = Math.hypot(nx, ny, nz) || 1; nx /= nl; ny /= nl; nz /= nl;
        const nv = view(f.n.map((v, i) => v + [LEN / 2, 0, 0][i])), n0 = view([LEN / 2, 0, 0]), want = [nv[0] - n0[0], nv[1] - n0[1], nv[2] - n0[2]];
        if (nx * want[0] + ny * want[1] + nz * want[2] < 0) { nx = -nx; ny = -ny; nz = -nz; }
        if (nz < -0.02) continue;
        const xm = LEN * f.sx / NXe, yr = Math.abs(f.sy / NYe - 0.5) * 2, sig = Math.pow((1 - xm / LEN) * (0.2 + 0.8 * yr) * Math.abs(amp) / 0.9, 0.7) * 1.1;
        const sh = 0.55 + 0.45 * Math.max(0, nx * Ld[0] + ny * Ld[1] + nz * Ld[2]);
        list.push({ P: P.map(proj), z: (P[0][2] + P[1][2] + P[2][2] + P[3][2]) / 4, c: cmap(sig).map(v => Math.round(v * sh)) });
      }
      list.sort((a, b) => a.z - b.z);
      g.lineJoin = 'round'; g.lineWidth = 0.7 * dpr; g.strokeStyle = lz ? 'rgba(10,20,30,.45)' : 'rgba(5,10,18,.55)';
      for (const f of list) { g.beginPath(); g.moveTo(f.P[0][0], f.P[0][1]); for (let i = 1; i < 4; i++) g.lineTo(f.P[i][0], f.P[i][1]); g.closePath(); g.fillStyle = `rgb(${f.c})`; g.fill(); g.stroke(); }
      const tip = proj(view(node([NXe, NYe, NZe / 2], amp))), acc = cssv('--accent');
      g.strokeStyle = acc; g.fillStyle = acc; g.lineWidth = 2 * dpr; g.beginPath(); g.moveTo(tip[0], tip[1] - 34 * dpr); g.lineTo(tip[0], tip[1] - 6 * dpr); g.stroke();
      g.beginPath(); g.moveTo(tip[0] - 5 * dpr, tip[1] - 11 * dpr); g.lineTo(tip[0], tip[1] - 2 * dpr); g.lineTo(tip[0] + 5 * dpr, tip[1] - 11 * dpr); g.fill();
      g.font = `600 ${11 * dpr}px "JetBrains Mono", ui-monospace, monospace`; g.fillText('F', tip[0] + 7 * dpr, tip[1] - 26 * dpr);
      const bw = 70 * dpr, bx = W - bw - 10 * dpr, by = H - 14 * dpr, gr = g.createLinearGradient(bx, 0, bx + bw, 0);
      STOPS.forEach((c, i) => gr.addColorStop(i / (STOPS.length - 1), `rgb(${c})`));
      g.fillStyle = gr; g.fillRect(bx, by, bw, 5 * dpr); g.fillStyle = cssv('--text-2'); g.font = `600 ${9 * dpr}px "JetBrains Mono", ui-monospace, monospace`;
      g.textAlign = 'right'; g.fillText('σ von Mises', bx - 6 * dpr, by + 6 * dpr); g.fillText(`${NXe * NYe * NZe} hexa · mode 1`, W - 10 * dpr, 16 * dpr); g.textAlign = 'left';
    };
    let ultimo = 0.9; const parar = laco(t => { ultimo = t; pintar(t); }, 0.9);
    const ro = 'ResizeObserver' in window ? new ResizeObserver(() => { T.fit(); pintar(ultimo); }) : null; if (ro) ro.observe(T.cv);
    return () => { parar(); if (ro) ro.disconnect(); };
  }

  /* fluidos: Lattice Boltzmann (D2Q9) em torno de um cilindro; a esteira de von Kármán aparece sozinha */
  function makeLBM(NX, NY, opt = {}) {
    const N = NX * NY, u0 = opt.u0 ?? 0.1, nu = opt.nu ?? 0.015, om = 1 / (3 * nu + 0.5);
    const A = () => new Float32Array(N);
    const n0 = A(), nE = A(), nW = A(), nN = A(), nS = A(), nNE = A(), nSE = A(), nNW = A(), nSW = A();
    const rho = A(), ux = A(), uy = A(), curl = A(), bar = new Uint8Array(N);
    const cx = opt.cx ?? NX * 0.2, cy = opt.cy ?? NY / 2 - 0.5, R = opt.r ?? NY * 0.085;
    for (let y = 0; y < NY; y++) for (let x = 0; x < NX; x++) if ((x - cx) ** 2 + (y - cy) ** 2 <= R * R) bar[y * NX + x] = 1;
    const f9 = 4 / 9, f1_ = 1 / 9, f36 = 1 / 36;
    function eq(i, r, vx, vy) {
      const vx3 = 3 * vx, vy3 = 3 * vy, vx2 = vx * vx, vy2 = vy * vy, vxy2 = 2 * vx * vy, v2 = vx2 + vy2, v215 = 1.5 * v2;
      n0[i] = f9 * r * (1 - v215);
      nE[i] = f1_ * r * (1 + vx3 + 4.5 * vx2 - v215); nW[i] = f1_ * r * (1 - vx3 + 4.5 * vx2 - v215);
      nN[i] = f1_ * r * (1 + vy3 + 4.5 * vy2 - v215); nS[i] = f1_ * r * (1 - vy3 + 4.5 * vy2 - v215);
      nNE[i] = f36 * r * (1 + vx3 + vy3 + 4.5 * (v2 + vxy2) - v215); nSE[i] = f36 * r * (1 + vx3 - vy3 + 4.5 * (v2 - vxy2) - v215);
      nNW[i] = f36 * r * (1 - vx3 + vy3 + 4.5 * (v2 - vxy2) - v215); nSW[i] = f36 * r * (1 - vx3 - vy3 + 4.5 * (v2 + vxy2) - v215);
      rho[i] = r; ux[i] = vx; uy[i] = vy;
    }
    for (let y = 0; y < NY; y++) for (let x = 0; x < NX; x++) eq(y * NX + x, 1, u0, (opt.seed ?? 0.06) * Math.exp(-((x - cx - 3 * R) ** 2 + (y - cy) ** 2) / (2 * R * R)));
    function collide() {
      for (let y = 1; y < NY - 1; y++) for (let x = 1; x < NX - 1; x++) {
        const i = x + y * NX, r = n0[i] + nN[i] + nS[i] + nE[i] + nW[i] + nNW[i] + nNE[i] + nSW[i] + nSE[i];
        rho[i] = r;
        const vx = (nE[i] + nNE[i] + nSE[i] - nW[i] - nNW[i] - nSW[i]) / r, vy = (nN[i] + nNE[i] + nNW[i] - nS[i] - nSE[i] - nSW[i]) / r;
        ux[i] = vx; uy[i] = vy;
        const r9 = f9 * r, r1 = f1_ * r, r36 = f36 * r, vx3 = 3 * vx, vy3 = 3 * vy, vx2 = vx * vx, vy2 = vy * vy, vxy2 = 2 * vx * vy, v2 = vx2 + vy2, v215 = 1.5 * v2;
        n0[i] += om * (r9 * (1 - v215) - n0[i]);
        nE[i] += om * (r1 * (1 + vx3 + 4.5 * vx2 - v215) - nE[i]); nW[i] += om * (r1 * (1 - vx3 + 4.5 * vx2 - v215) - nW[i]);
        nN[i] += om * (r1 * (1 + vy3 + 4.5 * vy2 - v215) - nN[i]); nS[i] += om * (r1 * (1 - vy3 + 4.5 * vy2 - v215) - nS[i]);
        nNE[i] += om * (r36 * (1 + vx3 + vy3 + 4.5 * (v2 + vxy2) - v215) - nNE[i]); nSE[i] += om * (r36 * (1 + vx3 - vy3 + 4.5 * (v2 - vxy2) - v215) - nSE[i]);
        nNW[i] += om * (r36 * (1 - vx3 + vy3 + 4.5 * (v2 - vxy2) - v215) - nNW[i]); nSW[i] += om * (r36 * (1 - vx3 - vy3 + 4.5 * (v2 + vxy2) - v215) - nSW[i]);
      }
      for (let y = 1; y < NY - 2; y++) { nW[NX - 1 + y * NX] = nW[NX - 2 + y * NX]; nNW[NX - 1 + y * NX] = nNW[NX - 2 + y * NX]; nSW[NX - 1 + y * NX] = nSW[NX - 2 + y * NX]; }
    }
    function stream() {
      for (let y = NY - 2; y > 0; y--) for (let x = 1; x < NX - 1; x++) { const i = x + y * NX; nN[i] = nN[i - NX]; nNW[i] = nNW[i + 1 - NX]; }
      for (let y = NY - 2; y > 0; y--) for (let x = NX - 2; x > 0; x--) { const i = x + y * NX; nE[i] = nE[i - 1]; nNE[i] = nNE[i - 1 - NX]; }
      for (let y = 1; y < NY - 1; y++) for (let x = NX - 2; x > 0; x--) { const i = x + y * NX; nS[i] = nS[i + NX]; nSE[i] = nSE[i - 1 + NX]; }
      for (let y = 1; y < NY - 1; y++) for (let x = 1; x < NX - 1; x++) { const i = x + y * NX; nW[i] = nW[i + 1]; nSW[i] = nSW[i + 1 + NX]; }
      for (let y = 1; y < NY - 1; y++) for (let x = 1; x < NX - 1; x++) {
        const i = x + y * NX; if (!bar[i]) continue;
        nE[i + 1] = nW[i]; nW[i - 1] = nE[i]; nN[i + NX] = nS[i]; nS[i - NX] = nN[i];
        nNE[i + NX + 1] = nSW[i]; nNW[i + NX - 1] = nSE[i]; nSE[i - NX + 1] = nNW[i]; nSW[i - NX - 1] = nNE[i];
      }
    }
    function bounds() { for (let x = 0; x < NX; x++) { eq(x, 1, u0, 0); eq(x + (NY - 1) * NX, 1, u0, 0); } for (let y = 1; y < NY - 1; y++) { eq(y * NX, 1, u0, 0); eq(NX - 1 + y * NX, 1, u0, 0); } }
    function step() { bounds(); collide(); stream(); }
    function vorticity() { for (let y = 1; y < NY - 1; y++) for (let x = 1; x < NX - 1; x++) { const i = y * NX + x; curl[i] = bar[i] ? 0 : (uy[i + 1] - uy[i - 1]) - (ux[i + NX] - ux[i - NX]); } return curl; }
    return { NX, NY, N, step, vorticity, ux, uy, rho, bar, cx, cy, R, u0, Re: u0 * 2 * R / nu };
  }
  function cfd(box) {
    const T = tela(box), cv = T.cv, cssv = cssDe(box);
    const NX = 180, NY = 100, sim = makeLBM(NX, NY, { nu: 0.012, seed: 0.1, cx: 36 }), SC = 0.035;
    const ctx = cv.getContext('2d'), off = document.createElement('canvas'); off.width = NX; off.height = NY;
    const octx = off.getContext('2d'), img = octx.createImageData(NX, NY), px = img.data;
    const probe = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
    const rgb = c => { probe.clearRect(0, 0, 1, 1); probe.fillStyle = '#000'; probe.fillStyle = c; probe.fillRect(0, 0, 1, 1); return [...probe.getImageData(0, 0, 1, 1).data.slice(0, 3)]; };
    let C = null;
    const paleta = () => { C = { bg: rgb(cssv('--fig-bg')), pos: rgb(cssv('--accent')), ink: cssv('--text'), ink2: cssv('--text-2'), ink3: cssv('--text-3'), solid: cssv('--surface-3'), acc: cssv('--accent'), light: claro() }; C.neg2 = C.light ? [40, 104, 190] : [96, 150, 240]; };
    paleta();
    const P = [], NP = 165, HL = 22, RAKE = 13, rnd = Math.random;
    const spawn = (p, anywhere) => { p.x = anywhere ? 2 + rnd() * (NX - 4) : 1 + rnd() * 1.5; p.y = anywhere ? 2 + rnd() * (NY - 4) : 3 + (NY - 6) * ((rnd() * RAKE | 0) + 0.5) / RAKE + (rnd() - 0.5) * 1.2; p.hx = new Float32Array(HL).fill(p.x); p.hy = new Float32Array(HL).fill(p.y); p.h = 0; p.n = 0; };
    for (let k = 0; k < NP; k++) { const p = {}; spawn(p, true); P.push(p); }
    const vel = (x, y) => { const i0 = Math.max(0, Math.min(NX - 2, x | 0)), j0 = Math.max(0, Math.min(NY - 2, y | 0)), fx = x - i0, fy = y - j0, i = j0 * NX + i0;
      const b = a => a[i] * (1 - fx) * (1 - fy) + a[i + 1] * fx * (1 - fy) + a[i + NX] * (1 - fx) * fy + a[i + NX + 1] * fx * fy; return [b(sim.ux), b(sim.uy)]; };
    const inside = (x, y) => (x - sim.cx) ** 2 + (y - sim.cy) ** 2 < (sim.R + 0.6) ** 2;
    let S = 1, ox = 0, oy = 0;
    const ajustar = () => { T.fit(); S = Math.max(T.W / NX, T.H / NY); ox = (T.W - NX * S) / 2; oy = (T.H - NY * S) / 2; };
    ajustar();
    function pintar() {
      const w = sim.vorticity(), { bg, pos, neg2 } = C, u0 = sim.u0;
      for (let i = 0; i < NX * NY; i++) {
        const k = i * 4;
        if (sim.bar[i]) { px[k] = bg[0]; px[k + 1] = bg[1]; px[k + 2] = bg[2]; px[k + 3] = 255; continue; }
        const sp = Math.hypot(sim.ux[i], sim.uy[i]) / u0, sh = (1 - Math.min(1.4, sp)) * (C.light ? -14 : 14);
        const r = bg[0] - sh, g = bg[1] - sh, b = bg[2] - sh;
        const v = Math.max(-1, Math.min(1, w[i] / SC)), a = Math.pow(Math.abs(v), 0.75) * 0.92, c = v > 0 ? pos : neg2;
        px[k] = r + (c[0] - r) * a; px[k + 1] = g + (c[1] - g) * a; px[k + 2] = b + (c[2] - b) * a; px[k + 3] = 255;
      }
      octx.putImageData(img, 0, 0); ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(off, 0, 0, NX, NY, ox, oy, NX * S, NY * S);
    }
    function desenhar(move, steps) {
      const { W, H, dpr } = T; pintar();
      const X = x => ox + x * S, Y = y => oy + y * S;
      if (move) for (const p of P) {
        for (let sub = 0; sub < 2; sub++) { const [u, v] = vel(p.x, p.y); p.x += u * steps / 2; p.y += v * steps / 2; }
        if (p.x > NX - 2 || p.y < 1 || p.y > NY - 2 || inside(p.x, p.y)) { spawn(p, false); continue; }
        p.h = (p.h + 1) % HL; p.hx[p.h] = p.x; p.hy[p.h] = p.y; p.n = Math.min(HL - 1, p.n + 1);
      }
      ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = C.ink;
      const B = 4, base = C.light ? 0.62 : 0.78;
      for (let bk = 0; bk < B; bk++) {
        const a0 = Math.floor(bk * (HL - 1) / B), a1 = Math.floor((bk + 1) * (HL - 1) / B);
        ctx.globalAlpha = base * (bk + 1) / B; ctx.lineWidth = (0.7 + 0.7 * (bk + 1) / B) * dpr; ctx.beginPath();
        for (const p of P) { const lo = HL - 1 - Math.min(p.n, HL - 1); if (a1 <= lo) continue; for (let a = Math.max(a0, lo); a < a1; a++) { const i0 = (p.h + 1 + a) % HL, i1 = (p.h + 2 + a) % HL; ctx.moveTo(X(p.hx[i0]), Y(p.hy[i0])); ctx.lineTo(X(p.hx[i1]), Y(p.hy[i1])); } }
        ctx.stroke();
      }
      ctx.globalAlpha = base; ctx.fillStyle = C.ink; ctx.beginPath();
      for (const p of P) { ctx.moveTo(X(p.x) + 1.3 * dpr, Y(p.y)); ctx.arc(X(p.x), Y(p.y), 1.3 * dpr, 0, 2 * Math.PI); }
      ctx.fill(); ctx.globalAlpha = 1;
      ctx.beginPath(); ctx.arc(X(sim.cx), Y(sim.cy), sim.R * S, 0, 2 * Math.PI); ctx.fillStyle = C.solid; ctx.fill(); ctx.lineWidth = 1.5 * dpr; ctx.strokeStyle = C.ink2; ctx.stroke();
      const ax = 8 * dpr; ctx.strokeStyle = C.acc; ctx.fillStyle = C.acc; ctx.lineWidth = 1.8 * dpr;
      for (const fy of [0.18, 0.34, 0.66, 0.82]) { const y = H * fy; ctx.beginPath(); ctx.moveTo(ax, y); ctx.lineTo(ax + 16 * dpr, y); ctx.moveTo(ax + 11 * dpr, y - 4 * dpr); ctx.lineTo(ax + 16 * dpr, y); ctx.lineTo(ax + 11 * dpr, y + 4 * dpr); ctx.stroke(); }
      ctx.font = `600 ${10 * dpr}px "JetBrains Mono", ui-monospace, monospace`; ctx.fillStyle = C.ink2; ctx.textAlign = 'right';
      ctx.fillText(`von Kármán · Re ≈ ${Math.round(sim.Re)}`, W - 10 * dpr, 16 * dpr); ctx.textAlign = 'left';
    }
    let warm = 0, raf = 0, steps = 5, vivo = true, ultimo = false;
    const WARM = calmo() ? 1700 : 650;
    const quadro = () => { const t = performance.now(); for (let k = 0; k < steps; k++) sim.step(); const dt = performance.now() - t; if (dt > 14 && steps > 2) steps--; else if (dt < 7 && steps < 6) steps++; desenhar(true, steps); raf = requestAnimationFrame(quadro); };
    const aquecer = () => { if (!vivo) return; const t = performance.now(); while (warm < WARM && performance.now() - t < 12) { sim.step(); warm++; } desenhar(warm > WARM - 90, 1); if (warm < WARM) setTimeout(aquecer, 0); else if (!calmo()) raf = requestAnimationFrame(quadro); };
    aquecer();
    const ro = 'ResizeObserver' in window ? new ResizeObserver(() => { ajustar(); desenhar(false, 0); }) : null; if (ro) ro.observe(cv);
    const mo = new MutationObserver(() => { paleta(); desenhar(false, 0); }); mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => { vivo = false; cancelAnimationFrame(raf); if (ro) ro.disconnect(); mo.disconnect(); };
  }

  const LABS = [
    { id: 'maquinas', c: ['Máquinas', 'Machines'], n: '01', aberto: true, t: 'Máquinas elétricas', d: 'Geradores e motores síncronos: rotor, eixo, mancal e trocador ar–água.', fig: rotor },
    { id: 'offshore', c: ['Offshore', 'Offshore'], n: '02', aberto: true, t: 'Offshore & ancoragem', d: 'Ancoragem de FPSO com estacas torpedo: lançamento, cravação, catenária e capacidade.', fig: fpso },
    { id: 'estruturas', c: ['Estruturas', 'Structures'], n: '03', aberto: false, t: 'Estruturas & FEM', d: 'Análise estrutural por elementos finitos, vasos de pressão e verificação de componentes.', fig: fem },
    { id: 'fluidos', c: ['Fluidos', 'Fluids'], n: '04', aberto: false, t: 'Fluidos & CFD', d: 'Escoamentos, turbomáquinas e troca térmica por simulação fluidodinâmica.', fig: cfd },
    { id: 'cad', c: ['CAD', 'CAD'], n: '06', aberto: false, t: 'Automação & CAD', d: 'Modelos parametrizados, rotinas em Python e geração de desenhos e documentos técnicos.', fig: cad }
  ];
  window.VitrineLabs = { LABS, montar: (box, i) => LABS[i].fig(box) };
})();
