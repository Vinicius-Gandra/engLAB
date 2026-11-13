/* EngenhaLab · Fluidos & CFD · estúdio: palco, equação viva, lentes, sistema e solver */
(function () {
  'use strict';
  const $ = s => document.querySelector(s), $$ = s => Array.from(document.querySelectorAll(s));

  // ---- tema ----
  const raiz = document.documentElement;
  const claro = () => raiz.getAttribute('data-theme') === 'light';
  let CORES = {};
  const css = v => CORES[v] || (CORES[v] = getComputedStyle(raiz).getPropertyValue(v).trim());
  $('#theme-toggle')?.addEventListener('click', () => {
    const t = claro() ? 'dark' : 'light';
    raiz.setAttribute('data-theme', t);
    try { localStorage.setItem('vg-theme', t); } catch (e) { /* sem armazenamento */ }
    CORES = {}; dispatchEvent(new Event('vg-theme')); montarPaletas(); limparRastros(); pedirDesenho(true); graficos();
  });

  // ---- caso físico: ar a 25 °C, cilindro de 20 mm, malha de 256 × 96 com 16 células no diâmetro ----
  const NX = 256, NY = 96, N = NX * NY, NU1 = NX + 1, DC = 16, XC = 4.5 * DC, YC = NY / 2, RC = DC / 2;
  const NU = 1.562e-5, D = 0.02, H = D / DC, T0 = 298.15, G = 9.81, RHO = 1.184, DT = 0.6;
  const st = {
    m: { continuidade: true, energia: false, empuxo: false, especie: false, les: false },
    Re: 150, dT: 20, campo: 'vel', termo: null, chip: null, eq: 'bc', guia: 'contornos', passo: 1,
    ov: { vetores: true, linhas: false, contornos: false, particulas: false, malha: false, parede: false },
    bc: { entrada: 'const', paredes: 'sim' },
    ferr: 'sonda', paleta: 'lab', vel: 2, rodando: true, comparar: false, dom: false,
    sonda: { x: 200, y: 48 }, vc: { x0: 54, y0: 32, x1: 100, y1: 64 }, forca: null, lente: 'ponto', rl: 'guia',
    det: null, detEt: 0, detIt: 0, detPart: 'frio', feitas: {},
  };
  const U = () => st.Re * NU / D;
  const Ri = () => G * (st.dT / T0) * D / (U() * U());
  const aG = () => U() * U() / H;            // aceleração da malha → m/s²
  const fmt = (x, c = 2) => Number.isFinite(x) ? (Math.abs(x) < .5 * 10 ** -c ? 0 : x).toLocaleString('pt-BR', { minimumFractionDigits: c, maximumFractionDigits: c }) : '—';
  const sig = (x, s = 3) => { if (!Number.isFinite(x) || x === 0) return '0'; const c = Math.max(0, s - 1 - Math.floor(Math.log10(Math.abs(x)))); return fmt(x, Math.min(c, 6)); };
  const int = x => Math.round(x).toLocaleString('pt-BR');
  const cl = (v, a, b) => Math.max(a, Math.min(b, v));

  // máscara do cilindro (igual à do solver)
  const SOL = new Uint8Array(N), SOLK = [];
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) { const dx = i + .5 - XC, dy = j + .5 - YC; if (dx * dx + dy * dy <= RC * RC) { SOL[i + NX * j] = 1; SOLK.push(i + NX * j); } }
  const NFLU = N - SOLK.length;

  // ---- workers ----
  let inicial = null;
  const caso = { A: null, B: null };
  function novoWorker(nome) {
    const w = new Worker('assets/solver.js?v=20261111-1');
    const c = { w, nome, dado: null, novo: false, esperando: false, id: 0, part: null };
    w.onmessage = e => {
      const m = e.data; if (!m || m.tipo !== 'quadro') return;
      c.esperando = false; c.dado = m; c.novo = true;
      if (nome === 'A') { if (m.det) abrirDetalhe(m.det); aoQuadro(m); }
      pedirDesenho(); ciclo(c);
    };
    w.postMessage({ tipo: 'criar' });
    if (inicial) w.postMessage({ tipo: 'estado', estado: inicial.slice(0) });
    return c;
  }
  function config(c) {
    const m = c.nome === 'A' ? st.m : { continuidade: true, energia: false, empuxo: false, especie: false, les: false };
    c.w.postMessage({ tipo: 'config', m, Re: st.Re, Ri: Ri(), bc: st.bc, diag: c.nome === 'A' && st.rl === 'solver' });
  }
  function ciclo(c) {
    if (!c || !st.rodando || c.esperando || document.hidden || st.det) return;
    c.esperando = true; c.w.postMessage({ tipo: 'passos', n: st.vel, ms: st.comparar ? 22 : 30, id: ++c.id });
  }
  const cicloTodos = () => { ciclo(caso.A); ciclo(caso.B); };
  document.addEventListener('visibilitychange', cicloTodos);
  function umPasso() {
    const c = caso.A; if (!c || c.esperando) return;
    c.esperando = true; c.w.postMessage({ tipo: 'passos', n: 1, ms: 60, id: ++c.id });
  }

  // ---- paletas ----
  const hex = h => { h = h.replace('#', ''); if (h.length === 3) h = h.split('').map(c => c + c).join(''); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; };
  const mistura = (a, b, t) => { const A = hex(a), B = hex(b); return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, '0')).join(''); };
  function rampa(paradas) {
    const lut = new Uint8ClampedArray(256 * 4);
    for (let i = 0; i < 256; i++) {
      const x = i / 255; let k = 0; while (k < paradas.length - 2 && x > paradas[k + 1][0]) k++;
      const [x0, c0] = paradas[k], [x1, c1] = paradas[k + 1], a = Math.min(1, Math.max(0, (x - x0) / (x1 - x0 || 1))), A = hex(c0), B = hex(c1);
      for (let j = 0; j < 3; j++) lut[i * 4 + j] = A[j] + (B[j] - A[j]) * a;
      lut[i * 4 + 3] = 255;
    }
    lut.id = ++rampa.n; return lut;
  }
  rampa.n = 0;
  let PAL = {}, LUTT = {};
  function montarPaletas() {
    const l = claro();
    LUTT = {};
    PAL = {
      div: rampa(l ? [[0, '#0b4f57'], [.22, '#2c9aa0'], [.42, '#bfe2de'], [.5, '#f7f7f2'], [.58, '#f2d0b2'], [.78, '#d4733a'], [1, '#6e2a0c']]
                   : [[0, '#a6efe8'], [.2, '#3fb3bd'], [.4, '#123a4c'], [.5, '#08121c'], [.6, '#4a2718'], [.8, '#e98a46'], [1, '#ffe0b8']]),
      vel: rampa(l ? [[0, '#f4f6f1'], [.3, '#b9dbe0'], [.6, '#3d8fb0'], [.85, '#1d4f86'], [1, '#13234f']]
                   : [[0, '#06101a'], [.3, '#0f2f4a'], [.6, '#17647e'], [.85, '#4fb0ad'], [1, '#d8f6ef']]),
      temp: rampa(l ? [[0, '#f6f5ef'], [.25, '#f7dcb3'], [.55, '#ec8a4f'], [.8, '#b5362b'], [1, '#4a0f22']]
                    : [[0, '#07111b'], [.22, '#2a1838'], [.45, '#7a2b45'], [.7, '#e0603a'], [.88, '#ffb867'], [1, '#fff3d6']]),
      esp: rampa(l ? [[0, '#f6f6f2'], [.35, '#d9cdf6'], [.7, '#8b6be0'], [1, '#3b1c8c']]
                   : [[0, '#07111b'], [.3, '#2b2154'], [.65, '#8a6ef0'], [1, '#f1e8ff']]),
      nut: rampa(l ? [[0, '#f6f6f2'], [.4, '#bfe3c8'], [.75, '#3c9a64'], [1, '#0d4a2c']]
                   : [[0, '#07111b'], [.35, '#163f33'], [.7, '#4cc38a'], [1, '#e9ffb0']]),
      arco: rampa([[0, '#0000c8'], [.15, '#0040ff'], [.35, '#00e0ff'], [.5, '#00ff60'], [.65, '#d8ff00'], [.82, '#ffa000'], [1, '#e00000']]),
    };
  }
  function lutTermo(cor) {
    const k = cor + claro(); if (LUTT[k]) return LUTT[k];
    const f = claro() ? '#f6f6f2' : '#07111b';
    return LUTT[k] = rampa(claro() ? [[0, f], [.3, mistura(f, cor, .25)], [.75, cor], [1, mistura(cor, '#000000', .35)]]
                                   : [[0, f], [.3, mistura(f, cor, .35)], [.8, cor], [1, mistura(cor, '#ffffff', .65)]]);
  }
  montarPaletas();

  // ---- campos físicos ----
  const CAMPOS = {
    vort: { nome: 'Vorticidade', un: '1/s', pal: 'div' },
    vel: { nome: 'Velocidade', un: 'm/s', pal: 'vel' },
    cp: { nome: 'Coeficiente de pressão', un: 'Cp', pal: 'div' },
    temp: { nome: 'Temperatura', un: '°C', pal: 'temp', exige: 'energia' },
    esp: { nome: 'Fração do traçador', un: 'Y', pal: 'esp', exige: 'especie' },
    nut: { nome: 'Viscosidade turbulenta', un: 'νt/ν', pal: 'nut', exige: 'les' },
  };
  function faixa(campo, d) {
    const u = U(), esc = u / H;
    if (campo === 'vort') return [-.32 * esc, .32 * esc];
    if (campo === 'vel') return [0, 1.65 * u];
    if (campo === 'cp') return [-2, 1.2];
    if (campo === 'temp') return [25, 25 + .5 * st.dT];
    if (campo === 'esp') return [0, 1];
    let mx = 1; if (d) { const nu = DC / st.Re; for (let k = 0; k < N; k += 3) mx = Math.max(mx, d.nut[k] / nu); }
    return [0, Math.ceil(mx * .8)];
  }

  // ---- diferenças finitas com o cilindro respeitado ----
  function gx(f, k) { const i = k % NX, l = i > 0 && !SOL[k - 1] ? k - 1 : k, r = i < NX - 1 && !SOL[k + 1] ? k + 1 : k; return r === l ? 0 : (f[r] - f[l]) / (r - l); }
  function gy(f, k) { const j = (k / NX) | 0, s = j > 0 && !SOL[k - NX] ? k - NX : k, n = j < NY - 1 && !SOL[k + NX] ? k + NX : k; return n === s ? 0 : (f[n] - f[s]) * NX / (n - s); }
  function lp(f, k, parede) {
    const i = k % NX, j = (k / NX) | 0, c = f[k]; let a = 0;
    const nb = kk => { if (SOL[kk]) { if (parede === 'u') a -= 2 * c; else if (parede !== null) a += 2 * (parede - c); } else a += f[kk] - c; };
    if (i > 0) nb(k - 1); if (i < NX - 1) nb(k + 1); if (j > 0) nb(k - NX); if (j < NY - 1) nb(k + NX);
    return a;
  }
  function medias(d) {
    if (d.UA) return;
    d.UA = new Float32Array(N); d.VA = new Float32Array(N); d.TA = new Float32Array(N); d.CA = new Float32Array(N);
    for (let k = 0; k < N; k++) { d.UA[k] = .5 * (d.uc[k] + d.up[k]); d.VA[k] = .5 * (d.vc[k] + d.vp[k]); d.TA[k] = .5 * (d.T[k] + d.Tp[k]); d.CA[k] = .5 * (d.C[k] + d.Cp[k]); }
  }
  const forcaAtiva = () => st.forca && performance.now() - st.forca.t < 260 ? st.forca : null;

  // parcelas vetoriais do momento, por unidade de massa, em unidades da malha
  function vetor(t, d, k, o) {
    medias(d); let x = 0, y = 0;
    if (!SOL[k]) switch (t) {
      case 'dudt': x = (d.uc[k] - d.up[k]) / d.dt; y = (d.vc[k] - d.vp[k]) / d.dt; break;
      case 'conv': x = d.UA[k] * gx(d.UA, k) + d.VA[k] * gy(d.UA, k); y = d.UA[k] * gx(d.VA, k) + d.VA[k] * gy(d.VA, k); break;
      case 'pres': x = -gx(d.p, k); y = -gy(d.p, k); break;
      case 'visc': { const nu = DC / st.Re + (st.m.les ? d.nut[k] : 0); x = nu * lp(d.UA, k, 'u'); y = nu * lp(d.VA, k, 'u'); break; }
      case 'visct': { const nu = st.m.les ? d.nut[k] : 0; x = nu * lp(d.UA, k, 'u'); y = nu * lp(d.VA, k, 'u'); break; }
      case 'emp': if (st.m.empuxo && st.m.energia) y = Ri() / DC * d.TA[k]; break;
      case 'F': { const f = forcaAtiva(); if (f) { const dx = k % NX + .5 - f.x, dy = ((k / NX) | 0) + .5 - f.y, e = Math.exp(-(dx * dx + dy * dy) / (f.r * f.r)); x = f.fx * e; y = f.fy * e; } break; }
    }
    o[0] = x; o[1] = y; return o;
  }
  // parcelas escalares: contribuição para ∂T/∂t, ∂Y/∂t ou divergência
  function escalar(t, d, k) {
    if (SOL[k]) return 0; medias(d);
    switch (t) {
      case 'div': { const i = k % NX, j = (k / NX) | 0; return d.uf[i + 1 + NU1 * j] - d.uf[i + NU1 * j] + d.vf[k + NX] - d.vf[k]; }
      case 'dTdt': return (d.T[k] - d.Tp[k]) / d.dt;
      case 'convT': return -(d.UA[k] * gx(d.TA, k) + d.VA[k] * gy(d.TA, k));
      case 'condT': return (DC / st.Re / .71 + (st.m.les ? d.nut[k] / .85 : 0)) * lp(d.TA, k, 1);
      case 'dYdt': return (d.C[k] - d.Cp[k]) / d.dt;
      case 'convY': return -(d.UA[k] * gx(d.CA, k) + d.VA[k] * gy(d.CA, k));
      case 'difY': return (DC / st.Re / 100 + (st.m.les ? d.nut[k] / .7 : 0)) * lp(d.CA, k, null);
    }
    return 0;
  }

  // ---- parcelas de cada equação ----
  const fr = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`;
  const BCX = {
    entrada: 'A velocidade é imposta: o ar entra uniforme, a 25 °C e, com espécies, com os filetes de traçador. Com velocidade e altura dadas, a vazão de massa fica definida antes do cálculo: ṁ = ρ·U·H. É aqui que o Reynolds é controlado. No modo pulsante, U oscila 30 % em torno da média.',
    saida: 'A pressão é fixada em 0 Pa (manométrica) e as demais grandezas saem com gradiente nulo. A vazão que sai não é imposta: é o que a continuidade exige. Por isso acompanha a entrada a cada instante, mesmo com a entrada pulsante.',
    sim: 'Simetria: nada atravessa a borda e não há atrito, então o ar desliza ao longo dela. Representa um corte no meio de um escoamento maior.',
    parede: 'Parede sem escorregamento: a velocidade é zero na borda e uma camada limite cresce ao longo dela, como num canal. O ar no meio acelera para manter a mesma vazão.',
    cilindro: 'Parede sem escorregamento: u = v = 0 na superfície. Com energia, temperatura fixa em 25 °C mais a diferença escolhida. É dessa condição que nascem a camada limite, a vorticidade e o calor que entra no ar.',
  };
  const TERMO = {
    entrada: { eq: 'bc', tipo: 'bc', cor: '--c-ent', n: 'Entrada', rot: 'Entrada · velocity-inlet', f: () => '<i>u</i> = <i>U</i>(<i>t</i>), <i>v</i> = 0', get x() { return BCX.entrada; } },
    saida: { eq: 'bc', tipo: 'bc', cor: '--c-sai', n: 'Saída', rot: 'Saída · pressure-outlet', f: () => '<i>p</i> = 0, ∂<b>u</b>/∂<i>n</i> = 0', get x() { return BCX.saida; } },
    lados: { eq: 'bc', tipo: 'bc', cor: '--c-sim', n: 'Topo e fundo', get rot() { return st.bc.paredes === 'parede' ? 'Topo e fundo · wall' : 'Topo e fundo · symmetry'; }, f: () => st.bc.paredes === 'parede' ? '<b>u</b> = 0' : '<i>v</i> = 0, ∂<i>u</i>/∂<i>n</i> = 0', get x() { return BCX[st.bc.paredes]; } },
    cilindro: { eq: 'bc', tipo: 'bc', cor: '--c-esc', n: 'Cilindro', rot: 'Cilindro · wall', f: () => st.m.energia ? '<b>u</b> = 0, <i>T</i> = <i>T</i><sub>w</sub>' : '<b>u</b> = 0', zoom: true, get x() { return BCX.cilindro; } },
    dudt: { eq: 'mom', tipo: 'vet', cor: '--c-dudt', n: 'Aceleração local', rot: 'aceleração local', curto: '∂u/∂t', f: () => '∂<b>u</b>/∂<i>t</i>', sonda: [132, 46], zoom: false, marca: ['esteira'],
      x: 'Quanto a velocidade muda num ponto fixo a cada instante. Fora da esteira é quase zero. Na esteira, as setas invertem de sentido a cada meio período, quando passa um vórtice.' },
    conv: { eq: 'mom', tipo: 'vet', cor: '--c-conv', n: 'Convecção', rot: 'convecção', curto: 'u·∇u', f: () => '<b>u</b>·∇<b>u</b>', sonda: [70, 60], zoom: true, marca: ['lado'],
      x: 'A mudança de velocidade que a partícula sente por mudar de lugar. É grande onde o ar é desviado pelo cilindro. Somada a ∂u/∂t, forma a aceleração da partícula de fluido.' },
    pres: { eq: 'mom', tipo: 'vet', cor: '--c-pres', n: 'Força de pressão', rot: 'pressão', curto: '−∇p', pre: '', f: () => '−∇<i>p</i>', sonda: [61.5, 48], zoom: true, marca: ['estag'],
      x: 'Aponta da pressão alta para a baixa. Na frente do cilindro freia o ar; nos lados o empurra para contornar o obstáculo. Age em todo o domínio, não só junto à parede.' },
    visc: { eq: 'mom', tipo: 'vet', cor: '--c-visc', n: 'Força viscosa', rot: 'atrito viscoso', curto: 'viscosa', f: () => st.m.les ? '∇·[(<i>μ</i> + <i>μ</i><sub>t</sub>)∇<b>u</b>]' : '∇·(<i>μ</i>∇<b>u</b>)', sonda: [74, 57], zoom: true, marca: ['camada'],
      x: 'Só pesa onde a velocidade muda bruscamente: na camada limite colada à parede e nas camadas que se soltam do cilindro. Fora delas as setas somem, e o ar se comporta quase como um fluido sem viscosidade.' },
    emp: { eq: 'mom', tipo: 'vet', cor: '--c-emp', n: 'Empuxo', rot: 'empuxo', curto: 'empuxo', f: () => '<i>ρ</i><sub>0</sub><i>β</i>(<i>T</i> − <i>T</i><sub>∞</sub>)<b>g</b>', sonda: [112, 54], zoom: false, marca: ['pluma'], exige: 'empuxo',
      x: 'Força para cima onde o ar está mais quente que a corrente, isto é, na esteira térmica. É ela que desvia a esteira para cima.', xoff: 'Força para cima onde o ar está quente. Clique de novo nesta parcela para ligar a gravidade e o empuxo.' },
    F: { eq: 'mom', tipo: 'vet', cor: '--c-F', n: 'Força externa', rot: 'força aplicada', curto: 'F', f: () => '<b>F</b>', zoom: false, ferr: 'forca',
      x: 'Uma força de volume aplicada por você. Arraste sobre o escoamento: a força entra nesta parcela e a pressão e a viscosidade respondem a ela. A sonda acompanha o ponto empurrado.' },
    div: { eq: 'massa', tipo: 'esc', ref: .05, cor: '--c-pres', n: 'Divergência', rot: 'saldo de massa', un: '% da vazão da célula', esc: 100, f: () => '∇·<b>u</b>', sonda: [61.5, 48], zoom: false,
      x: 'Quanto sai a mais do que entra em cada célula, em porcentagem do fluxo que a atravessa. Com a continuidade ligada, fica em zero no domínio inteiro. Desligue e o desequilíbrio aparece na frente do cilindro.' },
    dTdt: { eq: 'energia', tipo: 'esc', ref: .1, n: 'Variação local', rot: 'variação local', curto: '∂T/∂t', cor: '--c-dudt', un: '°C/s', f: () => '∂<i>T</i>/∂<i>t</i>', sonda: [120, 48], zoom: false, marca: ['esteira'],
      x: 'Quanto a temperatura muda num ponto fixo. Laranja: o ponto esquenta; verde-azulado: esfria. Na esteira, alterna com a passagem dos bolsões quentes.' },
    convT: { eq: 'energia', tipo: 'esc', ref: .1, n: 'Convecção de calor', rot: 'convecção', curto: 'convecção', cor: '--c-conv', un: '°C/s', f: () => '<b>u</b>·∇<i>T</i>', sonda: [92, 50], zoom: false, marca: ['esteira'],
      x: 'Calor trazido pelo escoamento: aquece onde chega ar quente e resfria onde chega ar frio. Mostrado com o sinal com que contribui para ∂T/∂t.' },
    condT: { eq: 'energia', tipo: 'esc', ref: .1, n: 'Condução', rot: 'condução', curto: 'condução', cor: '--c-visc', un: '°C/s', f: () => st.m.les ? '∇·[(<i>k</i> + <i>k</i><sub>t</sub>)∇<i>T</i>]' : '∇·(<i>k</i>∇<i>T</i>)', sonda: [72, 57], zoom: true, marca: ['parede'],
      x: 'Calor que passa por diferença de temperatura. É intenso numa camada fina junto à parede, por onde o calor sai do cilindro, e fraco no resto do domínio.' },
    dYdt: { eq: 'especie', tipo: 'esc', ref: .3, n: 'Variação local', rot: 'variação local', curto: '∂Y/∂t', cor: '--c-dudt', un: '1/s', f: () => '∂<i>Y</i>/∂<i>t</i>', sonda: [120, 50], zoom: false,
      x: 'Onde a fração de traçador aumenta (laranja) ou diminui (verde-azulado) com o tempo.' },
    convY: { eq: 'especie', tipo: 'esc', ref: .3, n: 'Convecção', rot: 'convecção', curto: 'convecção', cor: '--c-conv', un: '1/s', f: () => '<b>u</b>·∇<i>Y</i>', sonda: [100, 52], zoom: false,
      x: 'O traçador levado pelo escoamento. É a parcela dominante: com Sc = 100, como fumaça, a difusão quase não age.' },
    difY: { eq: 'especie', tipo: 'esc', ref: .3, n: 'Difusão', rot: 'difusão', curto: 'difusão', cor: '--c-visc', un: '1/s', f: () => '∇·(<i>ρD</i>∇<i>Y</i>)', sonda: [100, 52], zoom: false,
      x: 'Mistura molecular. Na mesma escala das outras parcelas quase não aparece: só nas bordas finas dos filetes, onde a fração muda bruscamente.' },
    fonteY: { eq: 'especie', tipo: 'campo', campo: 'esp', cor: '--c-F', n: 'Fonte', rot: 'fonte', f: () => '<i>S</i>', ferr: 'fumaca',
      x: 'Fumaça adicionada por você. Clique e arraste sobre a simulação: cada ponto vira uma fonte de traçador, que o escoamento leva embora.' },
    nut: { eq: 'les', tipo: 'campo', campo: 'nut', cor: '--c-visc', n: 'Viscosidade turbulenta', rot: 'viscosidade turbulenta', f: () => '<i>ρ</i>(<i>C</i><sub>s</sub><i>Δ</i>)<sup>2</sup>|<i>S̄</i>|', sonda: [88, 54], zoom: false, marca: ['soltura'],
      x: 'Cresce onde a deformação |S̄| é forte: nas camadas que se soltam e dentro dos vórtices. No escoamento livre fica perto de zero.' },
    visct: { eq: 'les', tipo: 'vet', cor: '--c-visc', n: 'Força turbulenta', rot: 'força turbulenta', curto: 'turbulenta', f: () => '∇·(<i>μ</i><sub>t</sub>∇<b>u</b>)', sonda: [88, 54], zoom: false,
      x: 'A parte da força viscosa que vem de μt. Amortece as escalas menores que a malha; os vórtices grandes continuam calculados diretamente.' },
    // solução numérica: cada parcela é uma etapa do passo de tempo
    n_adv: { eq: 'num', tipo: 'num', et: 'adv', cor: '--c-conv', n: 'Advecção', rot: 'advecção', f: () => '−(<b>u</b>·∇)<b>u</b>',
      x: 'A velocidade é transportada por ela mesma. O solver segue cada ponto para trás no tempo, lê a velocidade de onde o ar veio e corrige o erro do trajeto. É a parcela não linear, e a mais cara depois da pressão.' },
    n_emp: { eq: 'num', tipo: 'num', et: 'emp', cor: '--c-emp', n: 'Empuxo', rot: 'empuxo', exige: 'empuxo', f: () => '<b>b</b>',
      x: 'Com a temperatura já atualizada, o empuxo é somado à velocidade vertical de cada face, proporcional a T − T∞.' },
    n_dif: { eq: 'num', tipo: 'num', et: 'dif', cor: '--c-visc', n: 'Difusão viscosa', rot: 'difusão', f: () => '<i>ν</i>∇²<b>u</b>',
      x: 'Cada célula troca quantidade de movimento com as quatro vizinhas. Depois desta etapa a velocidade provisória u* já tem inércia e atrito, mas ainda não conserva massa.' },
    n_pres: { eq: 'num', tipo: 'num', et: 'pres', cor: '--c-pres', n: 'Equação da pressão', rot: 'sistema linear', f: () => '∇²<i>p</i> = ' + fr('<i>ρ</i>', 'Δ<i>t</i>') + '∇·<b>u</b>*',
      x: 'A continuidade vira uma equação para a pressão: uma linha por célula, ligando-a às quatro vizinhas. O lado direito é o saldo de massa que sobrou em u*. Resolvida por iterações, partindo da pressão do passo anterior.' },
    n_cor: { eq: 'num', tipo: 'num', et: 'cor', cor: '--c-pres', n: 'Correção', rot: 'correção', f: () => '<b>u</b><sup>n+1</sup> = <b>u</b>* − ' + fr('Δ<i>t</i>', '<i>ρ</i>') + '∇<i>p</i>',
      x: 'O gradiente da pressão é subtraído de u*. É a parcela −∇p do momento, aplicada por último, e é ela que zera o saldo de massa de cada célula.' },
  };
  const EQ = {
    bc: { n: 'Condições de contorno', modelo: () => '{entrada}{saida}{lados}{cilindro}', un: '',
      x: 'As equações valem dentro do domínio; nas bordas, cada uma recebe uma condição. Clique numa condição para destacar a borda correspondente.' },
    mom: { n: 'Quantidade de movimento', modelo: () => '<span><i>ρ</i> (</span>{dudt}<span>+</span>{conv}<span>) =</span>{pres}<span>+</span>{visc}<span>−</span>{emp}<span>+</span>{F}', un: 'm/s²', dom: ['dudt', 'conv', 'pres', 'visc', 'emp'],
      x: 'À direita, as forças por unidade de volume; à esquerda, a massa vezes a aceleração da partícula de fluido. Os números de cada parcela são medidos na sonda, em m/s²; a miniatura mostra onde ela age no domínio. Clique numa parcela para vê-la no palco.' },
    massa: { n: 'Continuidade', modelo: () => '{div}<span>= 0</span>', un: '%',
      x: 'Uma condição, não uma evolução no tempo: o que entra em cada célula tem de sair. Use o volume de controle para conferir o balanço em qualquer região.' },
    energia: { n: 'Energia', modelo: () => '<span><i>ρc</i><sub>p</sub> (</span>{dTdt}<span>+</span>{convT}<span>) =</span>{condT}', un: '°C/s', dom: ['dTdt', 'convT', 'condT'],
      x: 'A temperatura de um ponto muda pelo calor trazido pelo escoamento e pelo calor conduzido. Os números de cada parcela são medidos na sonda, em °C/s; a miniatura mostra onde ela age no domínio.' },
    especie: { n: 'Transporte de espécies', modelo: () => '<span><i>ρ</i> (</span>{dYdt}<span>+</span>{convY}<span>) =</span>{difY}<span>+</span>{fonteY}', un: '1/s', dom: ['dYdt', 'convY', 'difY'],
      x: 'Mesma forma da energia: a fração de traçador é levada pelo escoamento e se espalha por difusão. A fonte é a fumaça que você solta. Os números são medidos na sonda, em 1/s.' },
    les: { n: 'Turbulência', modelo: () => '<span><i>μ</i><sub>t</sub> =</span>{nut}<span>→</span>{visct}', un: '',
      x: 'O modelo calcula μt a partir da deformação do escoamento e a soma à viscosidade do ar.' },
    num: { n: 'Solução numérica', un: 'ms',
      modelo: () => '<span class="eq-linha"><span class="eq-rot">1 · previsão</span><span><b>u</b>* = <b>u</b><sup>n</sup> + Δ<i>t</i> [</span>{n_adv}<span>+</span>{n_dif}<span>+</span>{n_emp}<span>]</span></span><span class="eq-linha"><span class="eq-rot">2 · pressão</span>{n_pres}<span class="eq-rot">3 · correção</span>{n_cor}</span>',
      x: 'As equações não são resolvidas de uma vez. Cada passo de tempo calcula uma velocidade provisória só com inércia e atrito, resolve a pressão que falta para conservar a massa e corrige a velocidade. Clique numa etapa para abrir um passo e ver o campo depois dela.' },
  };
  const EQ_DE_MODELO = { continuidade: 'massa', energia: 'energia', empuxo: 'mom', especie: 'especie', les: 'les' };
  const MODELO_DE_EQ = { massa: 'continuidade', energia: 'energia', especie: 'especie', les: 'les' };
  const disponivel = eq => eq === 'bc' || eq === 'mom' || eq === 'massa' || eq === 'num' || (eq === 'energia' && st.m.energia) || (eq === 'especie' && st.m.especie) || (eq === 'les' && st.m.les);
  const corDe = termo => css(TERMO[termo].cor) || '#ffffff';
  // unidade da malha → unidade física de cada parcela escalar
  function conversao(t) {
    const T = TERMO[t]; if (T.esc) return T.esc;
    if (T.eq === 'energia') return st.dT * U() / H;
    return U() / H;
  }
  const gPorM = q => q * RHO * H * U() * 1000;        // fluxo da malha → g/s por metro de profundidade
  const vazao = q => q * NY * RHO * H * U() * 1000;   // velocidade média na seção → g/s por metro
  const periodoPuls = () => 160 * H / U();

  // ---- mapa de dominância: em cada célula, a cor da parcela de maior módulo ----
  const DOM = { rgba: new Uint8Array(N * 4), parte: {}, lista: [] };
  const REFV = .06;   // mesma escala para todas as parcelas do momento (unidades da malha)
  function dominancia(d) {
    const lista = (EQ[st.eq].dom || EQ.mom.dom).filter(t => !TERMO[t].exige || st.m[TERMO[t].exige]);
    const vet = TERMO[lista[0]].tipo === 'vet', cores = lista.map(t => hex(corDe(t))), fundo = hex(claro() ? '#f6f6f2' : '#07111b');
    const cont = new Float64Array(lista.length), o = [0, 0], px = DOM.rgba, ref = vet ? REFV : TERMO[lista[0]].ref; let soma = 0;
    for (let k = 0; k < N; k++) {
      let mi = 0, mm = 0;
      if (!SOL[k]) for (let q = 0; q < lista.length; q++) { let m; if (vet) { vetor(lista[q], d, k, o); m = Math.hypot(o[0], o[1]); } else m = Math.abs(escalar(lista[q], d, k)); if (m > mm) { mm = m; mi = q; } }
      const b = Math.sqrt(Math.min(1, mm / ref)), c = cores[mi], p = k * 4;
      px[p] = fundo[0] + (c[0] - fundo[0]) * b; px[p + 1] = fundo[1] + (c[1] - fundo[1]) * b; px[p + 2] = fundo[2] + (c[2] - fundo[2]) * b; px[p + 3] = 255;
      if (mm > ref * .02) { cont[mi] += 1; soma += 1; }
    }
    DOM.lista = lista; DOM.parte = {}; lista.forEach((t, q) => { DOM.parte[t] = soma ? cont[q] / soma : 0; });
  }

  // ---- vista (zoom) ----
  const VTODO = { x0: 0, y0: 0, x1: NX, y1: NY }, VCIL = { x0: 30, y0: 24, x1: 158, y1: 72 };
  const vista = { ...VTODO }; let alvo = { ...VTODO }, animZoom = 0;
  function irPara(v) { alvo = { ...v }; animZoom = performance.now(); pedirDesenho(true); }
  function zoomEm(f, cx, cy) {
    const w0 = alvo.x1 - alvo.x0, h0 = alvo.y1 - alvo.y0, w = cl(w0 * f, 32, NX), h = w * NY / NX;
    if (cx == null) { cx = (alvo.x0 + alvo.x1) / 2; cy = (alvo.y0 + alvo.y1) / 2; }
    const ax = (cx - alvo.x0) / w0, ay = (cy - alvo.y0) / h0, x0 = cl(cx - ax * w, 0, NX - w), y0 = cl(cy - ay * h, 0, NY - h);
    irPara({ x0, y0, x1: x0 + w, y1: y0 + h });
  }
  const ampliado = () => vista.x1 - vista.x0 < NX - .5;
  const zoom = z => irPara(z ? VCIL : VTODO);
  function passoZoom() {
    if (!animZoom) return false;
    const t = Math.min(1, (performance.now() - animZoom) / 420);
    for (const k of ['x0', 'y0', 'x1', 'y1']) vista[k] += (alvo[k] - vista[k]) * (t >= 1 ? 1 : .28);
    if (t >= 1) { Object.assign(vista, alvo); animZoom = 0; }
    limparRastros(); return true;
  }

  // ---- telas: cada uma tem o campo (WebGL ou 2D), as partículas e os glifos ----
  let DPR = 1, TL = null;   // TL: tela em desenho
  const sx = x => TL.R.x + (x - vista.x0) / (vista.x1 - vista.x0) * TL.R.w;
  const sy = y => TL.R.y + (vista.y1 - y) / (vista.y1 - vista.y0) * TL.R.h;
  const escala = () => TL.R.w / (vista.x1 - vista.x0);   // pixels por célula

  const VS = '#version 300 es\nin vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  const FS = `#version 300 es
precision highp float;
uniform sampler2D uF, uLut, uCor;
uniform vec2 uRes; uniform vec4 uRect, uVista, uTinta; uniform vec3 uFaixa, uFundo; uniform float uIso, uModo, uMalha;
out vec4 o;
const ivec2 TAM = ivec2(${NX}, ${NY});
float tex(ivec2 q){ return texelFetch(uF, clamp(q, ivec2(0), TAM - 1), 0).r; }
vec4 cub(float t){ float a = t*t, b = a*t; return vec4(-.5*b + a - .5*t, 1.5*b - 2.5*a + 1., -1.5*b + 2.*a + .5*t, .5*b - .5*a); }
float amostra(vec2 g){
  vec2 s = g - .5, f = fract(s); ivec2 b = ivec2(floor(s)); vec4 wx = cub(f.x), wy = cub(f.y); float v = 0.;
  for (int j = 0; j < 4; j++){ float l = 0.; for (int i = 0; i < 4; i++) l += wx[i]*tex(b + ivec2(i - 1, j - 1)); v += wy[j]*l; }
  return v;
}
void main(){
  vec2 px = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y), q = (px - uRect.xy)/uRect.zw;
  if (q.x < 0. || q.x > 1. || q.y < 0. || q.y > 1.) { o = vec4(uFundo, 1.); return; }
  vec2 g = vec2(mix(uVista.x, uVista.z, q.x), mix(uVista.w, uVista.y, q.y));
  vec3 c;
  if (uModo > .5) c = texture(uCor, g/vec2(TAM)).rgb;
  else {
    float v = amostra(g), t;
    if (uFaixa.z < .5) t = (v - uFaixa.x)/(uFaixa.y - uFaixa.x);
    else if (uFaixa.z < 1.5) t = sqrt(max(v, 0.)/uFaixa.y);
    else { float s = clamp(v/uFaixa.y, -1., 1.); t = .5 + .5*sign(s)*sqrt(abs(s)); }
    t = clamp(t, 0., 1.);
    c = texture(uLut, vec2((t*255. + .5)/256., .5)).rgb;
    if (uIso > 0.) { float n = t*uIso, d = abs(fract(n - .5) - .5)/max(fwidth(n), 1e-6); c = mix(c, uTinta.rgb, (1. - smoothstep(.5, 1.5, d))*step(.015, t)*step(t, .985)*uTinta.a); }
  }
  if (uMalha > 0.) { vec2 f = abs(fract(g - .5) - .5)/max(fwidth(g), vec2(1e-6)); c = mix(c, uTinta.rgb, (1. - smoothstep(.4, 1.2, min(f.x, f.y)))*uMalha); }
  o = vec4(c, 1.);
}`;
  function criarGL(cv) {
    let gl = null;
    try { gl = cv.getContext('webgl2', { antialias: false, alpha: false, depth: false, stencil: false, powerPreference: 'high-performance' }); } catch (e) { gl = null; }
    if (!gl) return null;
    const sh = (tipo, src) => { const s = gl.createShader(tipo); gl.shaderSource(s, src); gl.compileShader(s); return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null; };
    const v = sh(gl.VERTEX_SHADER, VS), f = sh(gl.FRAGMENT_SHADER, FS); if (!v || !f) return null;
    const pr = gl.createProgram(); gl.attachShader(pr, v); gl.attachShader(pr, f); gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return null;
    gl.useProgram(pr);
    const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const un = {}; for (const k of ['uF', 'uLut', 'uCor', 'uRes', 'uRect', 'uVista', 'uTinta', 'uFaixa', 'uFundo', 'uIso', 'uModo', 'uMalha']) un[k] = gl.getUniformLocation(pr, k);
    const tex = (unidade, filtro) => { const t = gl.createTexture(); gl.activeTexture(gl.TEXTURE0 + unidade); gl.bindTexture(gl.TEXTURE_2D, t); for (const [p, val] of [[gl.TEXTURE_MIN_FILTER, filtro], [gl.TEXTURE_MAG_FILTER, filtro], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, p, val); return t; };
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    const tF = tex(0, gl.NEAREST); gl.texImage2D(gl.TEXTURE_2D, 0, gl.R32F, NX, NY, 0, gl.RED, gl.FLOAT, null);
    const tL = tex(1, gl.LINEAR); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 256, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    const tC = tex(2, gl.LINEAR); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, NX, NY, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.uniform1i(un.uF, 0); gl.uniform1i(un.uLut, 1); gl.uniform1i(un.uCor, 2);
    let lutId = -1;
    return {
      pintar(tela, V, w) {
        if (gl.isContextLost()) return;
        const R = tela.R, fundo = hex(css('--palco') || '#060d16'), tinta = claro() && st.paleta !== 'arco' ? [.08, .14, .17] : [1, 1, 1];
        gl.viewport(0, 0, tela.W, tela.H);
        gl.uniform2f(un.uRes, tela.W, tela.H); gl.uniform4f(un.uRect, R.x, R.y, R.w, R.h); gl.uniform4f(un.uVista, vista.x0, vista.y0, vista.x1, vista.y1);
        gl.uniform3f(un.uFundo, fundo[0] / 255, fundo[1] / 255, fundo[2] / 255);
        gl.uniform1f(un.uMalha, st.ov.malha ? cl((escala() - 2.5) / 8, 0, 1) * .2 : 0);
        if (V.tipo === 'dom') {
          gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, tC); gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, NX, NY, gl.RGBA, gl.UNSIGNED_BYTE, DOM.rgba);
          gl.uniform1f(un.uModo, 1); gl.uniform4f(un.uTinta, tinta[0], tinta[1], tinta[2], 0);
        } else {
          gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tF); gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, NX, NY, gl.RED, gl.FLOAT, w);
          if (V.lut.id !== lutId) { gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, tL); gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, 256, 1, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(V.lut.buffer)); lutId = V.lut.id; }
          gl.uniform1f(un.uModo, 0); gl.uniform3f(un.uFaixa, V.a, V.b, V.curva || 0); gl.uniform1f(un.uIso, V.iso || 0); gl.uniform4f(un.uTinta, tinta[0], tinta[1], tinta[2], .34);
        }
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      },
    };
  }
  function novaTela(suf) {
    const b = suf === 'a' ? '' : '-b', t = { el: $('#tela-' + suf), campo: $('#campo' + b), part: $('#part' + b), glifos: $('#glifos' + b), principal: suf === 'a', R: { x: 0, y: 0, w: 1, h: 1 }, W: 1, H: 1, gl: null, estreita: false };
    t.gl = criarGL(t.campo);
    t.campo.addEventListener('webglcontextlost', e => { e.preventDefault(); });
    t.campo.addEventListener('webglcontextrestored', () => { t.gl = criarGL(t.campo); pedirDesenho(true); });
    return t;
  }
  const telaA = novaTela('a'); let telaB = null;
  TL = telaA;

  // ---- o que está no palco: valores em W e um descritor de como pintar ----
  const off = document.createElement('canvas'); off.width = NX; off.height = NY;
  const octx = off.getContext('2d'), img = octx.createImageData(NX, NY);
  const W = new Float32Array(N), WG = new Float32Array(N), W2 = new Float32Array(N), TX = new Float32Array(N), TY = new Float32Array(N), tmp = [0, 0];
  function valoresFisicos(campo, d, w) {
    const u = U();
    if (campo === 'vort') {
      const esc = u / H;
      for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
        const k = i + NX * j, ie = i < NX - 1 ? k + 1 : k, iw = i > 0 ? k - 1 : k, jn = j < NY - 1 ? k + NX : k, js = j > 0 ? k - NX : k;
        w[k] = ((d.vc[ie] - d.vc[iw]) / (ie - iw || 1) - (d.uc[jn] - d.uc[js]) / ((jn - js) / NX || 1)) * esc;
      }
    } else if (campo === 'vel') for (let k = 0; k < N; k++) w[k] = Math.hypot(d.uc[k], d.vc[k]) * u;
    else if (campo === 'cp') { let r = 0; for (let j = 0; j < NY; j++) r += d.p[2 + NX * j]; r /= NY; for (let k = 0; k < N; k++) w[k] = SOL[k] ? 0 : 2 * (d.p[k] - r); }
    else if (campo === 'temp') for (let k = 0; k < N; k++) w[k] = 25 + d.T[k] * st.dT;
    else if (campo === 'esp') for (let k = 0; k < N; k++) w[k] = d.C[k];
    else { const nu = DC / st.Re; for (let k = 0; k < N; k++) w[k] = d.nut[k] / nu; }
  }
  const tintaSeta = () => claro() && st.paleta !== 'arco' ? '#14232c' : '#ffffff';
  function descFisico(campo, d, w, setas) {
    valoresFisicos(campo, d, w);
    const def = CAMPOS[campo], [a, b] = faixa(campo, d), casas = Math.abs(b - a) >= 20 ? 0 : Math.abs(b - a) >= 2 ? 1 : 2;
    return { tipo: 'fisico', lut: PAL[st.paleta === 'arco' ? 'arco' : def.pal], a, b, curva: campo === 'nut' ? 1 : 0, iso: st.ov.contornos ? 14 : 0, nome: `${def.nome} [${def.un}]`, tmin: fmt(a, casas), tmax: fmt(b, casas),
      setas: setas ? { fu: d.uc, fv: d.vc, ref: 1.5, cor: tintaSeta(), raiz: false } : null, conv: 1, un: def.un, vel: d };
  }
  function descrever(d) {
    if (st.det) return descreverEtapa(d);
    const T = st.termo && TERMO[st.termo];
    if (st.dom && EQ[st.eq].dom) { dominancia(d); return { tipo: 'dom', nome: 'Parcela de maior módulo em cada ponto', tmin: '', tmax: '', setas: null, vel: d }; }
    if (T && T.tipo === 'vet') {
      for (let k = 0; k < N; k++) { vetor(st.termo, d, k, tmp); TX[k] = tmp[0]; TY[k] = tmp[1]; W[k] = Math.hypot(tmp[0], tmp[1]); }
      const cor = corDe(st.termo);
      return { tipo: 'vet', lut: lutTermo(cor), a: 0, b: REFV, curva: 1, nome: `${T.n} [m/s²]`, tmin: '0', tmax: sig(REFV * aG(), 2), setas: { fu: TX, fv: TY, ref: REFV, cor, raiz: true }, conv: aG(), un: 'm/s²', vel: d };
    }
    if (T && T.tipo === 'esc') {
      for (let k = 0; k < N; k++) W[k] = escalar(st.termo, d, k);
      const c = conversao(st.termo) * T.ref;
      return { tipo: 'esc', lut: PAL.div, a: -T.ref, b: T.ref, curva: 2, nome: `${T.n} [${T.un}]`, tmin: '−' + sig(c, 2), tmax: '+' + sig(c, 2), setas: null, conv: conversao(st.termo), un: T.un, vel: d };
    }
    return descFisico(st.campo, d, W, st.ov.vetores);
  }
  const mapa = (V, v) => { let t; if (!V.curva) t = (v - V.a) / (V.b - V.a); else if (V.curva === 1) t = Math.sqrt(Math.max(0, v) / V.b); else { const s = cl(v / V.b, -1, 1); t = .5 + .5 * Math.sign(s) * Math.sqrt(Math.abs(s)); } return t < 0 ? 0 : t > 1 ? 1 : t; };
  // valores do fluido estendidos para dentro do cilindro, para a interpolação não borrar a parede
  function estender(w, o) {
    o.set(w);
    for (const k of SOLK) { let s = 0, n = 0; for (const dk of [-1, 1, -NX, NX, -NX - 1, -NX + 1, NX - 1, NX + 1]) if (!SOL[k + dk]) { s += w[k + dk]; n++; } o[k] = n ? s / n : NaN; }
    for (let v = 0; v < 3; v++) for (const k of SOLK) if (o[k] !== o[k]) { let s = 0, n = 0; for (const dk of [-1, 1, -NX, NX]) { const x = o[k + dk]; if (x === x) { s += x; n++; } } if (n) o[k] = s / n; }
    for (const k of SOLK) if (o[k] !== o[k]) o[k] = 0;
  }
  function pintar(tela, V, w) {
    if (tela.gl) { if (V.tipo !== 'dom') estender(w, WG); tela.gl.pintar(tela, V, WG); return; }
    const ctx = tela.campo.getContext('2d'), px = img.data, R = tela.R;
    if (V.tipo === 'dom') for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) { const k = (i + NX * j) * 4, o = (i + NX * (NY - 1 - j)) * 4; px[o] = DOM.rgba[k]; px[o + 1] = DOM.rgba[k + 1]; px[o + 2] = DOM.rgba[k + 2]; px[o + 3] = 255; }
    else { const lut = V.lut; for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) { const o = (i + NX * (NY - 1 - j)) * 4, c = (mapa(V, w[i + NX * j]) * 255 | 0) * 4; px[o] = lut[c]; px[o + 1] = lut[c + 1]; px[o + 2] = lut[c + 2]; px[o + 3] = 255; } }
    octx.putImageData(img, 0, 0);
    ctx.fillStyle = css('--palco') || '#060d16'; ctx.fillRect(0, 0, tela.W, tela.H);
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(off, vista.x0, NY - vista.y1, vista.x1 - vista.x0, vista.y1 - vista.y0, R.x, R.y, R.w, R.h);
  }

  // ---- glifos ----
  function amostra(f, x, y) {
    let fx = x - .5, fy = y - .5; fx = fx < 0 ? 0 : fx > NX - 1.001 ? NX - 1.001 : fx; fy = fy < 0 ? 0 : fy > NY - 1.001 ? NY - 1.001 : fy;
    const i = fx | 0, j = fy | 0, a = fx - i, b = fy - j, k = i + NX * j;
    return (f[k] * (1 - a) + f[k + 1] * a) * (1 - b) + (f[k + NX] * (1 - a) + f[k + NX + 1] * a) * b;
  }
  const celulaEm = (x, y) => cl(Math.floor(x), 0, NX - 1) + NX * cl(Math.floor(y), 0, NY - 1);
  function seta(ctx, x, y, dx, dy, cor, lw, cabeca) {
    const L = Math.hypot(dx, dy); if (L < .5) return;
    const ux = dx / L, uy = dy / L, hx = x + dx, hy = y + dy, c = Math.min(cabeca, L * .55);
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(hx - ux * c * .6, hy - uy * c * .6);
    ctx.strokeStyle = cor; ctx.lineWidth = lw; ctx.lineCap = 'round'; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(hx - ux * c - uy * c * .5, hy - uy * c + ux * c * .5); ctx.lineTo(hx - ux * c + uy * c * .5, hy - uy * c - ux * c * .5); ctx.closePath();
    ctx.fillStyle = cor; ctx.fill();
  }
  const SOMBRA = () => claro() ? 'rgba(255,255,255,.75)' : 'rgba(4,10,18,.75)';
  function campoDeSetas(ctx, dpr, s) {
    const R = TL.R, sp = 26 * dpr, sombra = SOMBRA(), nx = Math.max(2, Math.round(R.w / sp)), ny = Math.max(2, Math.round(R.h / sp)), px0 = R.w / nx, py0 = R.h / ny;
    for (let b = 0; b < ny; b++) for (let a = 0; a < nx; a++) {
      const px = R.x + (a + .5) * px0, py = R.y + (b + .5) * py0;
      const gxp = vista.x0 + (px - R.x) / R.w * (vista.x1 - vista.x0), gyp = vista.y1 - (py - R.y) / R.h * (vista.y1 - vista.y0);
      const dx = gxp - XC, dy = gyp - YC; if (dx * dx + dy * dy < (RC + .6) ** 2) continue;
      const vx = amostra(s.fu, gxp, gyp), vy = amostra(s.fv, gxp, gyp), m = Math.hypot(vx, vy);
      if (m < s.ref * .025) continue;
      const L = sp * .92 * Math.min(1, s.raiz ? Math.sqrt(m / s.ref) : m / s.ref), ex = vx / m * L, ey = -vy / m * L;
      seta(ctx, px - ex / 2, py - ey / 2, ex, ey, sombra, 3.4 * dpr, 6 * dpr);
      seta(ctx, px - ex / 2, py - ey / 2, ex, ey, s.cor, 1.5 * dpr, 5 * dpr);
    }
  }
  // linhas de corrente do instante: tangentes à velocidade em todos os pontos
  function linhasCorrente(ctx, d, dpr) {
    const tr = (x, y, s) => {
      ctx.moveTo(sx(x), sy(y));
      for (let n = 0; n < 460; n++) {
        const u1 = amostra(d.uc, x, y), v1 = amostra(d.vc, x, y), m1 = Math.hypot(u1, v1); if (m1 < 2e-3) break;
        const xm = x + .6 * s * u1 / m1, ym = y + .6 * s * v1 / m1, u2 = amostra(d.uc, xm, ym), v2 = amostra(d.vc, xm, ym), m2 = Math.hypot(u2, v2); if (m2 < 2e-3) break;
        x += 1.2 * s * u2 / m2; y += 1.2 * s * v2 / m2;
        const dx = x - XC, dy = y - YC; if (x < .2 || x > NX - .2 || y < .2 || y > NY - .2 || dx * dx + dy * dy < (RC + .2) ** 2) break;
        ctx.lineTo(sx(x), sy(y));
      }
    };
    ctx.beginPath();
    for (let n = 0; n < 20; n++) tr(.6, NY * (n + .5) / 20, 1);
    for (const [x, y] of [[XC + RC + 3, YC + 2.5], [XC + RC + 3, YC - 2.5], [XC + RC + 9, YC + 5], [XC + RC + 9, YC - 5], [XC + RC + 22, YC + 3], [XC + RC + 22, YC - 3]]) { tr(x, y, 1); tr(x, y, -1); }
    ctx.strokeStyle = claro() && st.paleta !== 'arco' ? 'rgba(20,35,44,.6)' : 'rgba(255,255,255,.62)'; ctx.lineWidth = 1.15 * dpr; ctx.lineJoin = 'round'; ctx.stroke();
  }
  function contornos2D(ctx, dpr, f, a, b, n) {
    const i0 = Math.max(0, Math.floor(vista.x0) - 1), i1 = Math.min(NX - 2, Math.ceil(vista.x1)), j0 = Math.max(0, Math.floor(vista.y0) - 1), j1 = Math.min(NY - 2, Math.ceil(vista.y1)), pts = [];
    ctx.beginPath();
    for (let l = 1; l < n; l++) {
      const L = a + (b - a) * l / n; if (a < 0 && b > 0 && Math.abs(L) < (b - a) * .03) continue;
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
        const k = i + NX * j; if (SOL[k] || SOL[k + 1] || SOL[k + NX] || SOL[k + NX + 1]) continue;
        const v0 = f[k], v1 = f[k + 1], v2 = f[k + NX + 1], v3 = f[k + NX];
        const c = (v0 > L) | (v1 > L) << 1 | (v2 > L) << 2 | (v3 > L) << 3; if (c === 0 || c === 15) continue;
        pts.length = 0; const x = i + .5, y = j + .5;
        if ((v0 > L) !== (v1 > L)) pts.push(x + (L - v0) / (v1 - v0), y);
        if ((v1 > L) !== (v2 > L)) pts.push(x + 1, y + (L - v1) / (v2 - v1));
        if ((v3 > L) !== (v2 > L)) pts.push(x + (L - v3) / (v2 - v3), y + 1);
        if ((v0 > L) !== (v3 > L)) pts.push(x, y + (L - v0) / (v3 - v0));
        for (let q = 0; q + 3 < pts.length; q += 4) { ctx.moveTo(sx(pts[q]), sy(pts[q + 1])); ctx.lineTo(sx(pts[q + 2]), sy(pts[q + 3])); }
      }
    }
    ctx.strokeStyle = claro() ? 'rgba(20,35,44,.32)' : 'rgba(255,255,255,.3)'; ctx.lineWidth = dpr; ctx.stroke();
  }
  function cilindro(ctx, quente) {
    const cx = sx(XC), cy = sy(YC), r = RC * escala();
    ctx.save();
    if (quente) { ctx.shadowColor = 'rgba(255,120,60,.85)'; ctx.shadowBlur = r * .9; }
    const g = ctx.createRadialGradient(cx - r * .35, cy - r * .35, r * .1, cx, cy, r);
    if (quente) { g.addColorStop(0, '#ffe2b8'); g.addColorStop(.6, '#ff8a4c'); g.addColorStop(1, '#b23a1c'); }
    else { g.addColorStop(0, '#f2f6f7'); g.addColorStop(.65, '#a9bcc4'); g.addColorStop(1, '#5b6f79'); }
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill();
    ctx.restore(); ctx.lineWidth = Math.max(1, DPR); ctx.strokeStyle = 'rgba(0,0,0,.45)'; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
  }
  function sondaGlifo(ctx, dpr) {
    const x = sx(st.sonda.x), y = sy(st.sonda.y), r = 9 * dpr;
    ctx.lineWidth = 3.5 * dpr; ctx.strokeStyle = 'rgba(4,10,18,.7)';
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
    ctx.lineWidth = 1.8 * dpr; ctx.strokeStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.moveTo(x - r - 6 * dpr, y); ctx.lineTo(x - r + 3 * dpr, y); ctx.moveTo(x + r - 3 * dpr, y); ctx.lineTo(x + r + 6 * dpr, y);
    ctx.moveTo(x, y - r - 6 * dpr); ctx.lineTo(x, y - r + 3 * dpr); ctx.moveTo(x, y + r - 3 * dpr); ctx.lineTo(x, y + r + 6 * dpr); ctx.stroke();
  }
  const fonte = (peso, tam, dpr, familia) => `${peso} ${tam * dpr}px ${css(familia || '--mono') || 'monospace'}`;
  function etiqueta(ctx, t, x, y, cor, dpr, alinhar) {
    ctx.font = fonte(600, 10.5, dpr); ctx.textAlign = alinhar || 'center'; ctx.textBaseline = 'middle';
    const tw = ctx.measureText(t).width + 10 * dpr, x0 = alinhar === 'left' ? x - 5 * dpr : alinhar === 'right' ? x - tw + 5 * dpr : x - tw / 2;
    ctx.fillStyle = 'rgba(4,10,18,.78)'; ctx.fillRect(x0, y - 9 * dpr, tw, 18 * dpr);
    ctx.fillStyle = cor; ctx.fillText(t, x, y);
  }

  // ---- volume de controle ----
  function vcCelulas() {
    const v = st.vc, ia = Math.max(0, Math.round(Math.min(v.x0, v.x1))), ib = Math.min(NX, Math.round(Math.max(v.x0, v.x1))),
      ja = Math.max(0, Math.round(Math.min(v.y0, v.y1))), jb = Math.min(NY, Math.round(Math.max(v.y0, v.y1)));
    return { ia, ib: Math.max(ib, ia + 2), ja, jb: Math.max(jb, ja + 2) };
  }
  function vcFluxos(d) {
    const { ia, ib, ja, jb } = vcCelulas(); let w = 0, e = 0, s = 0, n = 0;
    for (let j = ja; j < jb; j++) { w += d.uf[ia + NU1 * j]; e += d.uf[Math.min(ib, NX) + NU1 * j]; }
    for (let i = ia; i < ib; i++) { s += d.vf[i + NX * ja]; n += d.vf[i + NX * Math.min(jb, NY)]; }
    const lados = { oeste: -w, leste: e, sul: -s, norte: n };   // positivo = sai
    let ent = 0, sai = 0; for (const k in lados) { if (lados[k] > 0) sai += lados[k]; else ent -= lados[k]; }
    return { ia, ib, ja, jb, lados, ent, sai, saldo: sai - ent };
  }
  function vcGlifo(ctx, dpr, d) {
    const f = vcFluxos(d), x0 = sx(f.ia), x1 = sx(f.ib), y0 = sy(f.jb), y1 = sy(f.ja);
    ctx.save();
    ctx.fillStyle = claro() ? 'rgba(255,255,255,.12)' : 'rgba(255,255,255,.06)'; ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
    ctx.setLineDash([6 * dpr, 4 * dpr]); ctx.lineWidth = 1.6 * dpr; ctx.strokeStyle = '#ffffff'; ctx.strokeRect(x0, y0, x1 - x0, y1 - y0); ctx.setLineDash([]);
    ctx.fillStyle = '#ffffff'; ctx.fillRect(x1 - 4 * dpr, y1 - 4 * dpr, 8 * dpr, 8 * dpr);
    const mx = Math.max(1e-6, ...Object.values(f.lados).map(Math.abs)), Lm = 34 * dpr;
    const pos = { oeste: [x0, (y0 + y1) / 2, -1, 0], leste: [x1, (y0 + y1) / 2, 1, 0], sul: [(x0 + x1) / 2, y1, 0, 1], norte: [(x0 + x1) / 2, y0, 0, -1] };
    for (const k in pos) {
      const q = f.lados[k], [px, py, nx, ny] = pos[k], L = Math.max(6 * dpr, Math.abs(q) / mx * Lm), sai = q > 0, cor = sai ? '#ffb46b' : '#7fe0d8';
      const ax = sai ? px : px + nx * L, ay = sai ? py : py + ny * L, dx = (sai ? 1 : -1) * nx * L, dy = (sai ? 1 : -1) * ny * L;
      seta(ctx, ax, ay, dx, dy, 'rgba(4,10,18,.7)', 4.5 * dpr, 9 * dpr); seta(ctx, ax, ay, dx, dy, cor, 2.4 * dpr, 8 * dpr);
      etiqueta(ctx, sig(Math.abs(gPorM(q)), 2), px + nx * (L + 26 * dpr), py + ny * (L + 12 * dpr), cor, dpr);
    }
    ctx.restore();
  }

  // ---- cargas na parede: pressão, atrito e calor em volta do cilindro ----
  const PAR = { n: 72, cp: new Float32Array(72), cf: new Float32Array(72), nu: new Float32Array(72), de: null };
  function cargasParede(d) {
    if (PAR.de === d) return PAR; PAR.de = d;
    let r0 = 0; for (let j = 0; j < NY; j++) r0 += d.p[2 + NX * j]; r0 /= NY;
    const nu = DC / st.Re, bruto = { cp: [], cf: [], nu: [] };
    for (let a = 0; a < PAR.n; a++) {
      const th = a / PAR.n * 2 * Math.PI, c = Math.cos(th), s = Math.sin(th);
      // θ = 0 no ponto de estagnação (lado da entrada), crescendo no sentido horário visto na tela
      const k1 = celulaEm(XC - c * (RC + 1.2), YC + s * (RC + 1.2)), k2 = celulaEm(XC - c * (RC + 1.6), YC + s * (RC + 1.6));
      const dist = Math.max(.5, Math.hypot(k2 % NX + .5 - XC, ((k2 / NX) | 0) + .5 - YC) - RC);
      bruto.cp.push(2 * (d.p[k1] - r0));
      bruto.cf.push(2 * nu * (d.uc[k2] * s + d.vc[k2] * c) / dist);     // velocidade tangente (no sentido de θ) sobre a distância à parede
      bruto.nu.push(DC * (1 - d.T[k2]) / dist);
    }
    for (const q of ['cp', 'cf', 'nu']) for (let a = 0; a < PAR.n; a++) { const b = bruto[q], n = PAR.n; PAR[q][a] = .25 * b[(a + n - 1) % n] + .5 * b[a] + .25 * b[(a + 1) % n]; }
    return PAR;
  }
  function paredeGlifo(ctx, d, dpr) {
    const P = cargasParede(d), e = escala(), cx = sx(XC), cy = sy(YC), r = (RC + .4) * e, k = 5.5 * e;
    ctx.save(); ctx.lineJoin = 'round';
    // contorno polar de |Cp| e setas: para dentro onde a pressão empurra a parede, para fora onde há sucção
    ctx.beginPath();
    for (let a = 0; a <= P.n; a++) { const th = a / P.n * 2 * Math.PI, L = r + Math.abs(P.cp[a % P.n]) * k, x = cx - Math.cos(th) * L, y = cy - Math.sin(th) * L; a ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
    ctx.fillStyle = claro() ? 'rgba(20,35,44,.06)' : 'rgba(255,255,255,.06)'; ctx.fill();
    ctx.strokeStyle = claro() ? 'rgba(20,35,44,.4)' : 'rgba(255,255,255,.4)'; ctx.lineWidth = dpr; ctx.stroke();
    for (let a = 0; a < P.n; a += 2) {
      const th = a / P.n * 2 * Math.PI, c = -Math.cos(th), s = -Math.sin(th), v = P.cp[a], L = Math.abs(v) * k; if (L < 2 * dpr) continue;
      if (v > 0) seta(ctx, cx + c * (r + L), cy + s * (r + L), -c * L, -s * L, css('--c-pres'), 1.8 * dpr, 6 * dpr);
      else seta(ctx, cx + c * r, cy + s * r, c * L, s * L, css('--c-sim'), 1.8 * dpr, 6 * dpr);
    }
    ctx.restore();
  }

  // ---- bordas do domínio e anotações nas margens ----
  function bordas(ctx, d, dpr) {
    const foco = st.eq === 'bc' ? st.chip : null, al = k => !foco || foco === k ? 1 : .25;
    const X0 = sx(0), X1 = sx(NX), Yt = sy(NY), Yb = sy(0);
    ctx.save();
    ctx.globalAlpha = al('entrada'); ctx.fillStyle = css('--c-ent'); ctx.fillRect(X0, Yt, 3 * dpr, Yb - Yt);
    ctx.globalAlpha = al('saida'); ctx.fillStyle = css('--c-sai'); ctx.fillRect(X1 - 3 * dpr, Yt, 3 * dpr, Yb - Yt);
    ctx.globalAlpha = al('lados');
    for (const y of [Yt + 1.5 * dpr, Yb - 1.5 * dpr]) {
      ctx.beginPath(); ctx.moveTo(X0, y); ctx.lineTo(X1, y);
      if (st.bc.paredes === 'parede') {
        ctx.strokeStyle = claro() ? '#4b5f6c' : '#c9d6dd'; ctx.lineWidth = 3.5 * dpr; ctx.setLineDash([]); ctx.stroke();
        ctx.beginPath(); const s2 = y < (Yt + Yb) / 2 ? 1 : -1;
        for (let x = X0; x < X1; x += 9 * dpr) { ctx.moveTo(x, y); ctx.lineTo(x - 4 * dpr, y + s2 * 5 * dpr); }
        ctx.lineWidth = 1.2 * dpr; ctx.stroke();
      } else { ctx.strokeStyle = css('--c-sim'); ctx.lineWidth = 2 * dpr; ctx.setLineDash([10 * dpr, 6 * dpr]); ctx.stroke(); ctx.setLineDash([]); }
    }
    if (foco === 'cilindro' || st.eq === 'bc') {
      ctx.globalAlpha = al('cilindro'); ctx.strokeStyle = st.m.energia ? '#ff9a6a' : (claro() ? '#14232c' : '#ffffff'); ctx.lineWidth = 2.5 * dpr;
      ctx.beginPath(); ctx.arc(sx(XC), sy(YC), (RC + .35) * escala(), 0, Math.PI * 2); ctx.stroke();
      ctx.globalAlpha = 1; etiqueta(ctx, st.m.energia ? `u = 0 · ${25 + st.dT} °C` : 'u = 0', sx(XC), sy(YC - RC) + 16 * dpr, '#e6eef2', dpr);
    }
    ctx.restore();
  }
  function margens(ctx, tela, d, dpr) {
    if (tela.estreita || !tela.principal) return;
    const R = tela.R, foco = st.eq === 'bc' ? st.chip : null, al = k => !foco || foco === k ? 1 : .3, tinta = css('--muted'), ym = R.y + R.h / 2;
    const girado = (x, t1, cor, t2) => { ctx.save(); ctx.translate(x, ym); ctx.rotate(-Math.PI / 2); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = fonte(700, 9.5, dpr); ctx.fillStyle = cor; ctx.fillText(t1, 0, -7 * dpr); ctx.font = fonte(500, 9.5, dpr); ctx.fillStyle = tinta; ctx.fillText(t2, 0, 7 * dpr); ctx.restore(); };
    ctx.save();
    if (vista.x0 < .5) {   // entrada: velocidade imposta
      const ue = (d.mon && d.mon.qin) || 1, cor = css('--c-ent'); ctx.globalAlpha = al('entrada');
      for (let n = 0; n < 7; n++) { const y = R.y + R.h * (n + .5) / 7; seta(ctx, R.x - 7 * dpr - ue * 24 * dpr, y, ue * 24 * dpr, 0, cor, 2.2 * dpr, 6.5 * dpr); }
      girado(R.x - 50 * dpr, 'Entrada · velocity-inlet', cor, st.bc.entrada === 'puls' ? `U = ${fmt(U() * ue, 3)} m/s · pulsante` : `U = ${fmt(U(), 3)} m/s`);
    }
    if (vista.x1 > NX - .5) {   // saída: pressão fixa; as setas mostram a velocidade com que o ar sai
      const cor = css('--c-sai'); ctx.globalAlpha = al('saida');
      for (let n = 0; n < 7; n++) { const yg = vista.y1 - (n + .5) / 7 * (vista.y1 - vista.y0), uo = Math.max(0, amostra(d.uc, NX - .6, yg)); seta(ctx, R.x + R.w + 7 * dpr, R.y + R.h * (n + .5) / 7, uo * 24 * dpr, 0, cor, 2.2 * dpr, 6.5 * dpr); }
      girado(R.x + R.w + 50 * dpr, 'Saída · pressure-outlet', cor, 'p = 0 Pa');
    }
    if (vista.y1 > NY - .5) {
      ctx.globalAlpha = al('lados'); ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; const par = st.bc.paredes === 'parede', y = R.y - 15 * dpr, x = R.x + R.w / 2;
      const t1 = par ? 'Topo e fundo · wall' : 'Topo e fundo · symmetry', t2 = par ? 'u = 0 na borda' : 'sem fluxo e sem atrito';
      ctx.font = fonte(700, 9.5, dpr); const w1 = ctx.measureText(t1).width; ctx.font = fonte(500, 9.5, dpr); const w2 = ctx.measureText(t2).width, g = 10 * dpr, x0 = x - (w1 + g + w2) / 2;
      ctx.textAlign = 'left'; ctx.font = fonte(700, 9.5, dpr); ctx.fillStyle = par ? tinta : css('--c-sim'); ctx.fillText(t1, x0, y); ctx.font = fonte(500, 9.5, dpr); ctx.fillStyle = tinta; ctx.fillText(t2, x0 + w1 + g, y);
    }
    // régua em milímetros
    ctx.globalAlpha = 1; ctx.strokeStyle = css('--line2'); ctx.fillStyle = css('--soft'); ctx.lineWidth = dpr; ctx.font = fonte(500, 9, dpr); ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    const e = R.w / (vista.x1 - vista.x0); let passo = 8; while (passo * e < 70 * dpr) passo *= 2;
    ctx.beginPath();
    for (let x = Math.ceil(vista.x0 / passo) * passo; x <= vista.x1 + 1e-6; x += passo) { const px = R.x + (x - vista.x0) * e; ctx.moveTo(px, R.y + R.h + 3 * dpr); ctx.lineTo(px, R.y + R.h + 8 * dpr); ctx.fillText(int(x * H * 1000), px, R.y + R.h + 11 * dpr); }
    ctx.stroke(); ctx.textAlign = 'left'; ctx.fillText('mm', R.x + R.w + 8 * dpr, R.y + R.h + 11 * dpr);
    ctx.restore();
  }
  function minimapa(ctx, dpr) {
    const R = TL.R, w = 96 * dpr, h = w * NY / NX, x = R.x + R.w - w - 8 * dpr, y = R.y + R.h - h - 8 * dpr;
    ctx.save(); ctx.fillStyle = 'rgba(4,10,18,.72)'; ctx.fillRect(x, y, w, h); ctx.strokeStyle = 'rgba(255,255,255,.5)'; ctx.lineWidth = dpr; ctx.strokeRect(x, y, w, h);
    ctx.fillStyle = '#c9d6dd'; ctx.beginPath(); ctx.arc(x + XC / NX * w, y + h / 2, RC / NX * w, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = css('--orange'); ctx.lineWidth = 1.5 * dpr; ctx.strokeRect(x + vista.x0 / NX * w, y + (NY - vista.y1) / NY * h, (vista.x1 - vista.x0) / NX * w, (vista.y1 - vista.y0) / NY * h);
    ctx.restore();
  }

  // ---- partículas ----
  const NP = 520;
  function novasParticulas() {
    const p = { x: new Float32Array(NP), y: new Float32Array(NP), x0: new Float32Array(NP), y0: new Float32Array(NP), age: new Float32Array(NP) };
    for (let i = 0; i < NP; i++) { p.x[i] = Math.random() * NX; p.y[i] = 1 + Math.random() * (NY - 2); p.age[i] = Math.random() * 400; }
    return p;
  }
  function moverParticulas(c, d) {
    if (!c.part) c.part = novasParticulas();
    const p = c.part, h = DT * Math.max(1, d.feitos);
    for (let i = 0; i < NP; i++) {
      let x = p.x[i], y = p.y[i]; p.x0[i] = x; p.y0[i] = y;
      const u1 = amostra(d.uc, x, y), v1 = amostra(d.vc, x, y), xm = x + .5 * h * u1, ym = y + .5 * h * v1;
      x += h * amostra(d.uc, xm, ym); y += h * amostra(d.vc, xm, ym); p.age[i] += h;
      const dx = x - XC, dy = y - YC;
      if (x > NX - .5 || x < 0 || y < .2 || y > NY - .2 || dx * dx + dy * dy < RC * RC || p.age[i] > 520 || (Math.abs(u1) + Math.abs(v1) < 1e-3 && p.age[i] > 40)) {
        x = vista.x0 + Math.random() * 3; y = 1 + Math.random() * (NY - 2); p.age[i] = 0; p.x0[i] = x; p.y0[i] = y;
      }
      p.x[i] = x; p.y[i] = y;
    }
  }
  function limparRastros() { for (const t of [telaA, telaB]) if (t) t.part.getContext('2d').clearRect(0, 0, t.W, t.H); }
  function pintarParticulas(tela, c) {
    const ctx = tela.part.getContext('2d'), R = tela.R;
    ctx.globalCompositeOperation = 'destination-out'; ctx.fillStyle = 'rgba(0,0,0,.12)'; ctx.fillRect(0, 0, tela.W, tela.H);
    ctx.globalCompositeOperation = 'source-over';
    if (!st.ov.particulas || !c.part) { ctx.clearRect(0, 0, tela.W, tela.H); return; }
    const p = c.part; ctx.save(); ctx.beginPath(); ctx.rect(R.x, R.y, R.w, R.h); ctx.clip();
    ctx.strokeStyle = claro() && st.paleta !== 'arco' ? 'rgba(20,35,44,.45)' : 'rgba(255,255,255,.5)';
    ctx.lineWidth = 1.1 * DPR; ctx.lineCap = 'round'; ctx.beginPath();
    for (let i = 0; i < NP; i++) { if (p.age[i] < 1) continue; ctx.moveTo(sx(p.x0[i]), sy(p.y0[i])); ctx.lineTo(sx(p.x[i]) + .01, sy(p.y[i])); }
    ctx.stroke(); ctx.restore();
  }

  // ---- elemento de fluido: um quadrado de ar acompanhado pelo escoamento ----
  let elem = null;
  function soltarElemento(x, y) {
    const L = 4, pts = [], lado = 6;
    for (let s = 0; s < 4; s++) for (let q = 0; q < lado; q++) { const t = q / lado * 2 * L - L; pts.push(s === 0 ? [x + t, y - L] : s === 1 ? [x + L, y + t] : s === 2 ? [x - t, y + L] : [x - L, y - t]); }
    elem = { pts, area0: (2 * L) ** 2, per0: 8 * L, rastro: [[x, y]], hist: [], t: 0, rot: 0, fim: false };
  }
  const areaDe = pts => { let a = 0; for (let i = 0; i < pts.length; i++) { const p = pts[i], q = pts[(i + 1) % pts.length]; a += p[0] * q[1] - q[0] * p[1]; } return Math.abs(a) / 2; };
  const centroDe = pts => { let x = 0, y = 0; for (const p of pts) { x += p[0]; y += p[1]; } return [x / pts.length, y / pts.length]; };
  function moverElemento(d) {
    if (!elem || elem.fim) return;
    const h = DT * Math.max(1, d.feitos);
    for (const p of elem.pts) { const u1 = amostra(d.uc, p[0], p[1]), v1 = amostra(d.vc, p[0], p[1]), xm = p[0] + .5 * h * u1, ym = p[1] + .5 * h * v1; p[0] += h * amostra(d.uc, xm, ym); p[1] += h * amostra(d.vc, xm, ym); }
    const [cx, cy] = centroDe(elem.pts); elem.t += h; elem.rastro.push([cx, cy]); if (elem.rastro.length > 400) elem.rastro.shift();
    let per = 0; for (let i = 0; i < elem.pts.length; i++) { const p = elem.pts[i], q = elem.pts[(i + 1) % elem.pts.length]; per += Math.hypot(p[0] - q[0], p[1] - q[1]); }
    const k = celulaEm(cx, cy), a = [0, 0], f = [0, 0], o = [0, 0];
    for (const t of ['dudt', 'conv']) { vetor(t, d, k, o); a[0] += o[0]; a[1] += o[1]; }
    const partes = {}; for (const t of ['pres', 'visc', 'emp']) { vetor(t, d, k, o); f[0] += o[0]; f[1] += o[1]; partes[t] = Math.hypot(o[0], o[1]); }
    const jn = k + NX < N ? k + NX : k, js = k - NX >= 0 ? k - NX : k, vort = (d.vc[Math.min(k + 1, N - 1)] - d.vc[Math.max(k - 1, 0)]) / 2 - (d.uc[jn] - d.uc[js]) / 2;
    elem.rot += .5 * vort * h;
    elem.a = a; elem.f = f; elem.area = areaDe(elem.pts) / elem.area0; elem.estica = per / elem.per0;
    elem.hist.push({ t: elem.t, a: Math.hypot(a[0], a[1]), f: Math.hypot(f[0], f[1]), pres: partes.pres, visc: partes.visc }); if (elem.hist.length > 260) elem.hist.shift();
    if (cx > NX - 3 || cx < 1 || cy < 1 || cy > NY - 1 || elem.estica > 9) elem.fim = true;
  }
  function elemGlifo(ctx, dpr) {
    if (!elem) return;
    ctx.save(); ctx.lineJoin = 'round';
    ctx.beginPath(); elem.rastro.forEach((p, i) => i ? ctx.lineTo(sx(p[0]), sy(p[1])) : ctx.moveTo(sx(p[0]), sy(p[1])));
    ctx.setLineDash([3 * dpr, 4 * dpr]); ctx.strokeStyle = 'rgba(255,255,255,.7)'; ctx.lineWidth = 1.2 * dpr; ctx.stroke(); ctx.setLineDash([]);
    ctx.beginPath(); elem.pts.forEach((p, i) => i ? ctx.lineTo(sx(p[0]), sy(p[1])) : ctx.moveTo(sx(p[0]), sy(p[1]))); ctx.closePath();
    ctx.globalAlpha = elem.fim ? .35 : 1; ctx.fillStyle = 'rgba(255,255,255,.2)'; ctx.fill(); ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 1.8 * dpr; ctx.stroke();
    if (elem.a && !elem.fim) {
      const [cx, cy] = centroDe(elem.pts), X = sx(cx), Y = sy(cy), k = 46 * dpr / REFV, lim = 70 * dpr;
      const v = (q, cor, lw) => { let dx = q[0] * k, dy = -q[1] * k; const L = Math.hypot(dx, dy); if (L > lim) { dx *= lim / L; dy *= lim / L; } seta(ctx, X, Y, dx, dy, 'rgba(4,10,18,.7)', (lw + 2) * dpr, 9 * dpr); seta(ctx, X, Y, dx, dy, cor, lw * dpr, 8 * dpr); };
      v(elem.f, css('--c-pres'), 3.4); v(elem.a, css('--c-dudt'), 1.8);
    }
    ctx.restore();
  }

  // ---- tamanho dos canvas ----
  function medir(tela) {
    const r = tela.el.getBoundingClientRect(); if (!r.width || !r.height) return;
    const Wp = Math.round(r.width * DPR), Hp = Math.round(r.height * DPR);
    for (const cv of [tela.campo, tela.part, tela.glifos]) if (cv.width !== Wp || cv.height !== Hp) { cv.width = Wp; cv.height = Hp; }
    tela.W = Wp; tela.H = Hp; tela.estreita = r.width < 720 || st.comparar;
    const m = st.comparar ? [8, 8, 8, 8] : tela.estreita ? [6, 6, 6, 6] : [66, 34, 66, 30];   // esquerda, topo, direita, base
    const aw = Wp - (m[0] + m[2]) * DPR, ah = Hp - (m[1] + m[3]) * DPR, w = Math.max(10, Math.min(aw, ah * NX / NY)), h = w * NY / NX;
    tela.R = { x: Math.round(m[0] * DPR + (aw - w) / 2), y: Math.round(m[1] * DPR + (ah - h) / 2), w: Math.round(w), h: Math.round(h) };
  }
  function ajustar() {
    DPR = Math.min(2, devicePixelRatio || 1);
    medir(telaA); if (telaB) medir(telaB);
    for (const id of ['grafico', 'lente-c', 'res-c']) {
      const cv = document.getElementById(id), r = cv.getBoundingClientRect(); if (!r.width) continue;
      const w = Math.round(r.width * DPR), h = Math.round(r.height * DPR);
      if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
    }
    pedirDesenho(true); graficos();
  }
  if ('ResizeObserver' in window) { const ro = new ResizeObserver(ajustar); for (const s of ['#palco', '#tela-a', '#lente-c', '#rail']) ro.observe($(s)); }
  addEventListener('resize', ajustar);

  // ---- laço de desenho ----
  let pedido = false, forcar = false, VA = null, quadros = 0;
  function pedirDesenho(f) { if (f) forcar = true; if (pedido) return; pedido = true; requestAnimationFrame(desenhar); }
  function glifos(tela, d, V) {
    const ctx = tela.glifos.getContext('2d'), R = tela.R, dpr = DPR;
    ctx.clearRect(0, 0, tela.W, tela.H);
    ctx.save(); ctx.beginPath(); ctx.rect(R.x, R.y, R.w, R.h); ctx.clip();
    if (!tela.gl && V.iso) contornos2D(ctx, dpr, W, V.a, V.b, 14);
    if (st.ov.linhas) linhasCorrente(ctx, V.vel || d, dpr);
    if (V.setas) campoDeSetas(ctx, dpr, V.setas);
    cilindro(ctx, st.m.energia);
    if (st.ov.parede) paredeGlifo(ctx, d, dpr);
    bordas(ctx, d, dpr);
    elemGlifo(ctx, dpr);
    if (st.ferr === 'vc') vcGlifo(ctx, dpr, d); else sondaGlifo(ctx, dpr);
    const f = forcaAtiva();
    if (f) { const L = 60 * dpr, m = Math.hypot(f.fx, f.fy) || 1; seta(ctx, sx(f.x), sy(f.y), f.fx / m * L, -f.fy / m * L, css('--c-F'), 3 * dpr, 10 * dpr); }
    if (ampliado()) minimapa(ctx, dpr);
    ctx.restore();
    margens(ctx, tela, d, dpr);
  }
  function desenhar() {
    pedido = false;
    const anim = passoZoom(), A = caso.A;
    if (A && A.dado && (A.novo || forcar || anim)) {
      const d = A.dado; TL = telaA;
      const V = VA = descrever(d);
      pintar(telaA, V, W);
      if (A.novo && st.rodando && !st.det) { moverParticulas(A, d); moverElemento(d); }
      pintarParticulas(telaA, A);
      glifos(telaA, d, V);
      marcas();
      if (A.novo || forcar) { quadros++; vivoDeck(d); lente(d); conferirTarefas(); }
      A.novo = false;
    }
    const B = caso.B;
    if (B && telaB && B.dado && (B.novo || forcar || anim)) {
      const d = B.dado, campo = CAMPOS[st.campo].exige ? 'vort' : st.campo; TL = telaB;
      $('#tag-b').textContent = campo === st.campo ? 'Caso base · massa e momento' : 'Caso base · vorticidade';
      const V = descFisico(campo, d, W2, false); pintar(telaB, V, W2);
      if (B.novo && st.rodando) moverParticulas(B, d);
      pintarParticulas(telaB, B);
      const ctx = telaB.glifos.getContext('2d'), R = telaB.R; ctx.clearRect(0, 0, telaB.W, telaB.H);
      ctx.save(); ctx.beginPath(); ctx.rect(R.x, R.y, R.w, R.h); ctx.clip(); cilindro(ctx, false); ctx.restore();
      B.novo = false; TL = telaA;
    }
    forcar = false;
    if (VA) barra(VA);
    if (animZoom) pedirDesenho(true);
  }

  // ---- barra de cores ----
  let barraChave = '';
  function barra(V) {
    const chave = [V.tipo, V.nome, V.tmin, V.tmax, V.lut && V.lut.id, st.eq, claro()].join('|'); if (chave === barraChave) return; barraChave = chave;
    const cv = $('#barra'), ctx = cv.getContext('2d');
    if (V.tipo === 'dom') { const n = DOM.lista.length || 1; DOM.lista.forEach((t, i) => { ctx.fillStyle = corDe(t); ctx.fillRect(i * cv.width / n, 0, cv.width / n + 1, cv.height); }); }
    else for (let i = 0; i < cv.width; i++) { const c = Math.floor(i / (cv.width - 1) * 255) * 4; ctx.fillStyle = `rgb(${V.lut[c]},${V.lut[c + 1]},${V.lut[c + 2]})`; ctx.fillRect(i, 0, 1, cv.height); }
    $('#barra-min').textContent = V.tmin; $('#barra-max').textContent = V.tmax; $('#barra-nome').textContent = V.nome;
  }

  // ---- marcadores ----
  const MARCA = {
    estag: { x: 62.5, y: 48, t: 'ar freado: pressão alta', b: 1 },
    lado: { x: 72, y: 58.5, t: 'ar desviado e acelerado' },
    camada: { x: 79, y: 39.5, t: 'camada limite', b: 1 },
    soltura: { x: 92, y: 55, t: 'camada que se solta' },
    esteira: { x: 150, y: 48, t: 'vórtices passando' },
    parede: { x: 63, y: 44, t: 'calor sai da parede', b: 1 },
    pluma: { x: 140, y: 64, t: 'ar quente sobe' },
  };
  let chaveMarcas = '';
  function marcas() {
    const T = st.chip && TERMO[st.chip], R = telaA.R, chave = [st.chip, st.ferr, st.termo, !!st.det, vista.x0.toFixed(1), vista.y0.toFixed(1), vista.x1.toFixed(1), R.x, R.y, R.w].join('|');
    if (chave === chaveMarcas) return; chaveMarcas = chave;
    const box = $('#anot'); box.textContent = '';
    if (!T || !T.marca || st.ferr !== 'sonda' || !st.termo || st.det) return;
    for (const k of T.marca) {
      const p = MARCA[k]; if (p.x < vista.x0 || p.x > vista.x1 || p.y < vista.y0 || p.y > vista.y1) continue;
      const fx = (p.x - vista.x0) / (vista.x1 - vista.x0), el = document.createElement('span');
      el.className = 'mk' + (fx > .62 ? ' mk-esq' : '') + (p.b ? ' mk-baixo' : '');
      el.style.left = (R.x + fx * R.w) / DPR + 'px'; el.style.top = (R.y + (vista.y1 - p.y) / (vista.y1 - vista.y0) * R.h) / DPR + 'px';
      const l = document.createElement('span'); l.className = 'mk-l'; l.textContent = p.t; el.append(l); box.append(el);
    }
  }

  // ---- utilidades de texto: o texto é sempre escrito em português; o motor de idioma traduz ----
  function pt(el, t) { if (el && el._pt !== t) { el._pt = t; el.textContent = t; } }
  const TI = () => css('--text'), MU = () => css('--muted'), SO = () => css('--soft');
  function escreve(ctx, t, x, y, cor, al, tam, peso) { ctx.font = fonte(peso || 600, tam || 10, DPR); ctx.fillStyle = cor; ctx.textAlign = al || 'left'; ctx.fillText(t, x, y); return ctx.measureText(t).width; }
  function celulaSonda() {
    let i = cl(Math.floor(st.sonda.x), 1, NX - 2), j = cl(Math.floor(st.sonda.y), 1, NY - 2);
    if (SOL[i + NX * j]) { const dx = i + .5 - XC, dy = j + .5 - YC, m = Math.hypot(dx, dy) || 1; i = Math.floor(XC + dx / m * (RC + 1)); j = Math.floor(YC + dy / m * (RC + 1)); }
    return i + NX * j;
  }

  // ---- console da equação: cada parcela é um cartão medido na sonda ----
  const DIAL = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1.5 6h9M7 2.5 10.5 6 7 9.5"/></svg>';
  let cartoes = [], tVivo = 0;
  // quantos caracteres da fórmula aparecem na tela (as marcas de formatação não contam)
  function visiveis(h) { let n = 0, dentro = false; for (const c of h) { if (c === '<') dentro = true; else if (c === '>') dentro = false; else if (!dentro) n++; } return n; }
  // miniaturas: cada cartão mostra, no domínio inteiro, onde a parcela age
  const MW = 128, MH = 48, mimg = new ImageData(MW, MH); let miniVez = 0;
  function miniatura(b, d) {
    const t = b.dataset.term, T = TERMO[t], px = mimg.data, o = [0, 0], off = T.exige && !st.m[T.exige], sol = hex(claro() ? '#93a5ae' : '#8fa3ad'); let lut, f;
    if (T.tipo === 'vet') { lut = lutTermo(corDe(t)); f = k => { vetor(t, d, k, o); return Math.sqrt(Math.min(1, Math.hypot(o[0], o[1]) / REFV)); }; }
    else if (T.tipo === 'esc') { lut = PAL.div; f = k => { const s = cl(escalar(t, d, k) / T.ref, -1, 1); return .5 + .5 * Math.sign(s) * Math.sqrt(Math.abs(s)); }; }
    else { lut = PAL.nut; const nu = DC / st.Re, mx = faixa('nut', d)[1]; f = k => Math.sqrt(Math.min(1, d.nut[k] / nu / mx)); }
    const zero = T.tipo === 'esc' ? 127 * 4 : 0;
    for (let j = 0; j < MH; j++) for (let i = 0; i < MW; i++) {
      const k = i * 2 + NX * (j * 2), q = (i + MW * (MH - 1 - j)) * 4;
      if (SOL[k]) { px[q] = sol[0]; px[q + 1] = sol[1]; px[q + 2] = sol[2]; }
      else { const c = off ? zero : (f(k) * 255 | 0) * 4; px[q] = lut[c]; px[q + 1] = lut[c + 1]; px[q + 2] = lut[c + 2]; }
      px[q + 3] = 255;
    }
    b._mini.getContext('2d').putImageData(mimg, 0, 0);
  }
  function miniaturas(d, todas) {
    const cs = cartoes.filter(b => b._mini && TERMO[b.dataset.term].tipo !== 'bc'); if (!cs.length) return;
    if (todas) for (const b of cs) miniatura(b, d); else miniatura(cs[miniVez++ % cs.length], d);
  }
  function miniBC(cv, t) {   // o domínio em miniatura, com a borda da condição destacada
    const ctx = cv.getContext('2d'), w = MW, h = MH, cor = corDe(t), x0 = 8, y0 = 6, x1 = w - 8, y1 = h - 6, cx = x0 + XC / NX * (x1 - x0), cy = (y0 + y1) / 2, r = RC / NX * (x1 - x0);
    ctx.setTransform(cv.width / MW, 0, 0, cv.height / MH, 0, 0); ctx.clearRect(0, 0, w, h); ctx.fillStyle = css('--palco'); ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = css('--line2'); ctx.lineWidth = 1; ctx.strokeRect(x0 + .5, y0 + .5, x1 - x0 - 1, y1 - y0 - 1);
    ctx.fillStyle = css('--soft'); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = cor; ctx.fillStyle = cor; ctx.lineWidth = 3; ctx.beginPath();
    if (t === 'entrada') { ctx.moveTo(x0, y0); ctx.lineTo(x0, y1); }
    else if (t === 'saida') { ctx.moveTo(x1, y0); ctx.lineTo(x1, y1); }
    else if (t === 'lados') { ctx.moveTo(x0, y0); ctx.lineTo(x1, y0); ctx.moveTo(x0, y1); ctx.lineTo(x1, y1); }
    else ctx.arc(cx, cy, r + 1.5, 0, Math.PI * 2);
    ctx.stroke();
    if (t === 'entrada' || t === 'saida') for (const f of [.25, .5, .75]) { const y = y0 + (y1 - y0) * f, x = t === 'entrada' ? x0 + 4 : x1 - 20; seta(ctx, x, y, 15, 0, cor, 1.5, 5); }
  }
  function definirEq(eq) {
    if (!disponivel(eq)) eq = 'mom';
    if (st.eq !== eq) { st.eq = eq; st.chip = null; st.termo = null; st.dom = false; if (eq !== 'num' && st.det) fecharPasso(); }
    montarDeck();
  }
  function montarDeck() {
    const E = EQ[st.eq], box = $('#eqf-f');
    box.innerHTML = E.modelo().replace(/<span>/g, '<span translate="no">').replace(/\{(\w+)\}/g, (_, t) => {
      const T = TERMO[t], off = T.exige && !st.m[T.exige], bc = T.tipo === 'bc';
      const ff = T.f(), f = `<span class="tb-f${visiveis(ff) > 9 ? ' tb-fl' : ''}" translate="no">${ff}</span>`, n = `<span class="tb-n">${T.rot}</span>`;
      const mini = (bc || T.tipo === 'esc' || t === 'nut' || (T.tipo === 'vet' && !T.ferr)) ? `<canvas class="tb-m" width="${bc ? MW * 2 : MW}" height="${bc ? MH * 2 : MH}" aria-hidden="true"></canvas>` : '';
      return `<button type="button" class="tb${bc ? ' tb-bc' : ''}${off ? ' tb-off' : ''}${mini ? '' : ' tb-sem'}" data-term="${t}" aria-pressed="${st.chip === t}" title="${T.n}">${bc ? n + f : f + n}<span class="tb-v">${T.tipo === 'vet' ? DIAL : ''}<b></b></span><span class="tb-b"><i></i></span>${mini}</button>`;
    });
    cartoes = $$('#eqf-f .tb');
    for (const b of cartoes) { b.style.setProperty('--tc', `var(${TERMO[b.dataset.term].cor})`); b._mini = b.querySelector('.tb-m'); b.addEventListener('click', () => escolherTermo(b.dataset.term)); if (b._mini && TERMO[b.dataset.term].tipo === 'bc') miniBC(b._mini, b.dataset.term); }
    $$('#eq-tabs [data-eq]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.eq === st.eq)));
    const bt = $('#dom-bt'); bt.disabled = !E.dom; if (!E.dom) st.dom = false; bt.setAttribute('aria-pressed', String(st.dom));
    textoDeck(); tVivo = 0;
  }
  function textoDeck() {
    const el = $('#eqf-txt'); el.textContent = ''; el._pt = null;
    const T = st.chip && TERMO[st.chip];
    if (!T) { el.textContent = st.dom ? 'Cada ponto recebe a cor da parcela de maior módulo ali. Quanto mais viva a cor, maior a parcela. As porcentagens são a fração da área em que cada uma domina.' : EQ[st.eq].x; }
    else { const b = document.createElement('b'); b.textContent = T.n + '. '; el.append(b, (T.exige && !st.m[T.exige] && T.xoff) ? T.xoff : T.x); }
    for (const b of cartoes) b.setAttribute('aria-pressed', String(b.dataset.term === st.chip));
    let leg = $('#dom-leg');
    if (!st.dom) { if (leg) leg.hidden = true; return; }
    if (!leg) { leg = document.createElement('div'); leg.className = 'dom-leg'; leg.id = 'dom-leg'; $('#eqf-f').after(leg); }
    leg.hidden = false; leg.textContent = '';
    for (const t of (EQ[st.eq].dom || []).filter(q => !TERMO[q].exige || st.m[TERMO[q].exige])) {
      const s = document.createElement('span'), i = document.createElement('i'), n = document.createElement('span'), v = document.createElement('b');
      i.style.setProperty('--tc', `var(${TERMO[t].cor})`); n.textContent = TERMO[t].rot; v.dataset.dom = t; s.append(i, n, v); leg.append(s);
    }
  }
  function escolherTermo(t) {
    const T = TERMO[t]; visto.termos.add(t);
    if (T.tipo === 'num') { st.chip = t; textoDeck(); abrirPasso(T.et); return; }
    if (T.exige && !st.m[T.exige]) { modelo(T.exige, true); return; }
    if (st.det) fecharPasso();
    if (st.chip === t && !T.ferr) { st.chip = null; st.termo = null; textoDeck(); sincronizar(); return; }
    st.chip = t; st.dom = false;
    if (T.ferr) { ferramenta(T.ferr); st.chip = t; textoDeck(); return; }
    if (T.tipo === 'bc') st.termo = null;
    else if (T.tipo === 'campo') { st.termo = null; st.campo = T.campo; }
    else st.termo = t;
    if (st.ferr !== 'sonda' && T.tipo !== 'bc') st.ferr = 'sonda';
    if (T.sonda) st.sonda = { x: T.sonda[0], y: T.sonda[1] };
    if (T.zoom !== undefined) irPara(T.zoom ? VCIL : VTODO);
    textoDeck(); sincronizar();
  }
  function vivo(a, b, c) {
    const el = $('#eqf-vivo');
    if (el.childNodes.length !== 3) { el.textContent = ''; el.append(document.createElement('span'), document.createElement('b'), document.createElement('span')); }
    pt(el.childNodes[0], a || ''); pt(el.childNodes[1], b || ''); pt(el.childNodes[2], c || '');
  }
  const TM = { les: 0, adv: 0, esc: 0, dif: 0, pres: 0, tot: 0 };
  function vivoDeck(d) {
    const agora = performance.now(), lento = agora - tVivo > 240; if (lento) tVivo = agora;
    miniaturas(d, forcar);
    const k = celulaSonda(), eq = st.eq, o = [0, 0], vals = []; let mx = 1e-12, soma = 0, maior = null;
    for (const b of cartoes) {
      const t = b.dataset.term, T = TERMO[t], off = T.exige && !st.m[T.exige]; let m = 0, txt = '', ang = null;
      if (off) txt = 'desligado';
      else if (T.tipo === 'vet') { vetor(t, d, k, o); m = Math.hypot(o[0], o[1]); ang = Math.atan2(-o[1], o[0]); txt = sig(m * aG(), 2); }
      else if (T.tipo === 'esc') { const v = escalar(t, d, k) * conversao(t); m = Math.abs(v); txt = t === 'div' ? fmt(v, 2) + ' %' : sig(v, 2); }
      else if (T.tipo === 'campo') { if (t === 'nut') { m = d.nut[k] / (DC / st.Re); txt = fmt(m, 2) + ' × ν'; } else txt = 'arraste no palco'; }
      else if (T.tipo === 'num') { const ms = TM[T.et]; if (ms != null) { m = ms; txt = T.et === 'pres' ? `${int(d.iter || 24)} iterações · ${fmt(ms, 1)} ms` : fmt(ms, 1) + ' ms'; } }
      else if (t === 'entrada') txt = `U = ${fmt(U() * (d.mon.qin || 1), 3)} m/s`;
      else if (t === 'saida') txt = `${sig(vazao(d.mon.q), 3)} g/s·m`;
      else if (t === 'lados') txt = st.bc.paredes === 'parede' ? 'com atrito' : 'sem atrito';
      else if (t === 'cilindro') txt = d.passo > 30 ? `Cd = ${fmt(d.mon.Cd, 2)}` : '';
      if (m > mx) mx = m; soma += m; if (!maior || m > maior.m) maior = { t, m, txt };
      vals.push({ b, m, txt, ang });
    }
    const ref = eq === 'num' ? Math.max(TM.tot, 1e-9) : mx;
    for (const v of vals) {
      const bar = v.b.querySelector('.tb-b i'), sv = v.b.querySelector('.tb-v svg');
      bar.style.width = (cl(v.m / ref, 0, 1) * 100).toFixed(1) + '%';
      if (sv && v.ang != null) sv.style.transform = `rotate(${(v.ang * 180 / Math.PI).toFixed(0)}deg)`;
      if (lento) pt(v.b.querySelector('.tb-v b'), v.txt);
    }
    if (st.dom && lento) for (const el of $$('#dom-leg [data-dom]')) pt(el, fmt((DOM.parte[el.dataset.dom] || 0) * 100, 0) + ' %');
    if (!lento) return;
    if (eq === 'bc') vivo(st.m.continuidade ? `Entram ${sig(vazao(d.mon.qin || 1), 3)} g/s por metro de profundidade e saem ${sig(vazao(d.mon.q), 3)} g/s: a saída acompanha a entrada.` : `Entram ${sig(vazao(d.mon.qin || 1), 3)} g/s por metro de profundidade e saem ${sig(vazao(d.mon.q), 3)} g/s: sem a continuidade, a massa não se conserva.`);
    else if (eq === 'mom' || eq === 'energia' || eq === 'especie') vivo('Na sonda, a maior parcela é ', TERMO[maior.t].rot, `: ${maior.txt} ${EQ[eq].un}, ${fmt(maior.m / Math.max(soma, 1e-12) * 100, 0)} % da soma dos módulos.`);
    else if (eq === 'massa') vivo(`Saldo de massa na célula da sonda: ${fmt(escalar('div', d, k) * 100, 2)} % do fluxo que a atravessa. Média no domínio: ${fmt(d.mon.div * 100, 3)} %.`);
    else if (eq === 'les') vivo(`Na sonda, a viscosidade turbulenta vale ${fmt(d.nut[k] / (DC / st.Re), 2)} vezes a do ar. Máximo no domínio: ${fmt(d.mon.nutMax / (DC / st.Re), 1)} vezes.`);
    else vivo(`O último passo levou ${fmt(TM.tot, 1)} ms: ${fmt(TM.pres / Math.max(TM.tot, 1e-9) * 100, 0)} % na pressão e ${fmt(TM.adv / Math.max(TM.tot, 1e-9) * 100, 0)} % na advecção.`);
  }

  // ---- lentes: o mesmo ponto visto de quatro jeitos ----
  const tituloLente = t => pt($('#lente-t'), t), notaLente = t => pt($('#lente-n'), t);
  function lente(d) {
    const cv = $('#lente-c'), ctx = cv.getContext('2d'), w = cv.width, h = cv.height, s = DPR;
    ctx.clearRect(0, 0, w, h); if (w < 60 || h < 60) return;
    ctx.textBaseline = 'middle'; ctx.lineJoin = 'round'; ctx.lineCap = 'butt'; ctx.setLineDash([]); ctx.globalAlpha = 1;
    const k = celulaSonda();
    if (st.lente === 'celula') return lenteCelula(d, k, ctx, w, h, s);
    if (st.lente === 'parede') return lenteParede(d, ctx, w, h, s);
    if (st.lente === 'elem') return lenteElem(d, ctx, w, h, s);
    if (st.ferr === 'vc') return lenteVC(d, ctx, w, h, s);
    if (st.eq === 'bc') return lenteBC(d, ctx, w, h, s);
    if (st.eq === 'mom') return lenteMom(d, k, ctx, w, h, s);
    if (st.eq === 'massa') return lenteMassa(d, k, ctx, w, h, s);
    if (st.eq === 'energia' || st.eq === 'especie') return lenteBarras(d, k, ctx, w, h, s, st.eq);
    if (st.eq === 'les') return lenteLes(d, k, ctx, w, h, s);
    return lenteNum(d, ctx, w, h, s);
  }
  // polígono de forças: as forças, uma depois da outra, chegam ao mesmo ponto que as duas parcelas da aceleração
  function lenteMom(d, k, ctx, w, h, s) {
    tituloLente('Forças na sonda · m/s²');
    const ag = aG(), dir = [], esq = [];
    for (const t of ['pres', 'visc', 'emp', 'F']) { const v = vetor(t, d, k, [0, 0]); if (t === 'pres' || t === 'visc' || Math.hypot(v[0], v[1]) > 1e-7) dir.push({ t, v }); }
    for (const t of ['dudt', 'conv']) esq.push({ t, v: vetor(t, d, k, [0, 0]) });
    const somar = l => l.reduce((a, q) => [a[0] + q.v[0], a[1] + q.v[1]], [0, 0]), R = somar(dir), L = somar(esq), pts = [[0, 0]];
    for (const l of [dir, esq]) { let p = [0, 0]; for (const q of l) { p = [p[0] + q.v[0], p[1] + q.v[1]]; pts.push(p); } }
    let xa = Infinity, xb = -Infinity, ya = Infinity, yb = -Infinity; for (const [x, y] of pts) { xa = Math.min(xa, x); xb = Math.max(xb, x); ya = Math.min(ya, y); yb = Math.max(yb, y); }
    const hd = h - 36 * s, m = 14 * s, esc = Math.min((w - 2 * m) / Math.max(xb - xa, 1e-6), (hd - 2 * m) / Math.max(yb - ya, 1e-6));
    const ox = m + ((w - 2 * m) - (xb - xa) * esc) / 2 - xa * esc, oy = hd - m - ((hd - 2 * m) - (yb - ya) * esc) / 2 + ya * esc, P = v => [ox + v[0] * esc, oy - v[1] * esc], O = P([0, 0]), PR = P(R);
    ctx.setLineDash([4 * s, 3 * s]); ctx.strokeStyle = TI(); ctx.globalAlpha = .45; ctx.lineWidth = 1.2 * s; ctx.beginPath(); ctx.moveTo(O[0], O[1]); ctx.lineTo(PR[0], PR[1]); ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = 1;
    for (const l of [dir, esq]) { let a = [0, 0]; for (const q of l) { const b = [a[0] + q.v[0], a[1] + q.v[1]], A = P(a), B = P(b); seta(ctx, A[0], A[1], B[0] - A[0], B[1] - A[1], corDe(q.t), (st.chip === q.t ? 3.8 : 2.4) * s, 8 * s); a = b; } }
    ctx.fillStyle = TI(); ctx.beginPath(); ctx.arc(O[0], O[1], 3 * s, 0, Math.PI * 2); ctx.fill();
    let y = hd + 8 * s;
    const linha = (rot, l) => {
      escreve(ctx, rot, 8 * s, y, SO(), 'left', 9.5); let x = 58 * s;
      for (const q of l) { ctx.fillStyle = corDe(q.t); ctx.fillRect(x, y - 3.5 * s, 7 * s, 7 * s); x += 10 * s; x += escreve(ctx, TERMO[q.t].curto, x, y, corDe(q.t), 'left', 9.5) + 4 * s; x += escreve(ctx, sig(Math.hypot(q.v[0], q.v[1]) * ag, 2), x, y, TI(), 'left', 9.5) + 9 * s; }
      y += 14 * s;
    };
    linha('forças', dir); linha('acel.', esq);
    const mR = Math.hypot(R[0], R[1]), mL = Math.hypot(L[0], L[1]), dif = Math.hypot(R[0] - L[0], R[1] - L[1]) / Math.max(mR, mL, 1e-9) * 100;
    notaLente(`A soma das forças (${sig(mR * ag, 2)} m/s²) e a aceleração da partícula (${sig(mL * ag, 2)} m/s²) chegam ao mesmo ponto, com ${fmt(dif, 0)} % de diferença.`);
  }
  function facesDaCelula(d, k, ctx, cx, cy, a, s, emMS) {
    const i = k % NX, j = (k / NX) | 0, fw = d.uf[i + NU1 * j], fe = d.uf[i + 1 + NU1 * j], fs = d.vf[k], fn = d.vf[k + NX];
    ctx.fillStyle = claro() ? 'rgba(20,35,44,.05)' : 'rgba(255,255,255,.05)'; ctx.fillRect(cx - a, cy - a, 2 * a, 2 * a);
    ctx.strokeStyle = TI(); ctx.lineWidth = 1.5 * s; ctx.strokeRect(cx - a, cy - a, 2 * a, 2 * a);
    const mx = Math.max(1e-6, Math.abs(fw), Math.abs(fe), Math.abs(fs), Math.abs(fn)), Lm = a * .95;
    const face = (q, px, py, nx, ny, sentido) => {   // sentido: +1 se q > 0 entra pela face
      const entra = q * sentido > 0, L = Math.max(5 * s, Math.abs(q) / mx * Lm), cor = entra ? css('--teal') : css('--orange');
      const dx = nx ? Math.sign(q) * L : 0, dy = ny ? -Math.sign(q) * L : 0;
      seta(ctx, px - dx / 2, py - dy / 2, dx, dy, cor, 2.6 * s, 8 * s);
      if (!emMS) escreve(ctx, fmt(Math.abs(q) * 100, 1) + ' %', px + nx * 28 * s, py + ny * 15 * s, cor, 'center', 9.5);
      else if (nx) escreve(ctx, fmt(Math.abs(q) * U(), 3), px + nx * 14 * s, py - 14 * s, cor, 'center', 9.5);
      else escreve(ctx, fmt(Math.abs(q) * U(), 3), px + 9 * s, py + ny * 9 * s, cor, 'left', 9.5);
    };
    face(fw, cx - a, cy, -1, 0, 1); face(fe, cx + a, cy, 1, 0, -1); face(fs, cx, cy + a, 0, 1, 1); face(fn, cx, cy - a, 0, -1, -1);
    return fe - fw + fn - fs;
  }
  function lenteMassa(d, k, ctx, w, h, s) {
    tituloLente('Massa na célula da sonda');
    const cx = w / 2, cy = h / 2, a = Math.min(w, h) * .22, saldo = facesDaCelula(d, k, ctx, cx, cy, a, s, false), ruim = Math.abs(saldo) > .005;
    escreve(ctx, 'saldo', cx, cy - 7 * s, ruim ? css('--red') : SO(), 'center', 9.5); escreve(ctx, fmt(saldo * 100, 1) + ' %', cx, cy + 7 * s, ruim ? css('--red') : TI(), 'center', 11, 700);
    notaLente(st.m.continuidade ? `Vazão em cada face, em % de U·Δx. Saldo (sai − entra): ${fmt(saldo * 100, 2)} %. A pressão foi ajustada para zerar o saldo.` : `Vazão em cada face, em % de U·Δx. Saldo (sai − entra): ${fmt(saldo * 100, 2)} %. Sem continuidade, nada força o saldo a zero.`);
  }
  function lenteBarras(d, k, ctx, w, h, s, eq) {
    const en = eq === 'energia', ts = en ? ['convT', 'condT', 'dTdt'] : ['convY', 'difY', 'dYdt'], c = conversao(ts[0]), ti = TI();
    tituloLente(en ? 'Calor na sonda · °C/s' : 'Traçador na sonda · 1/s');
    const v = ts.map(t => escalar(t, d, k) * c), soma = v[0] + v[1];
    const linhas = [[TERMO[ts[0]].curto, v[0], corDe(ts[0])], [TERMO[ts[1]].curto, v[1], corDe(ts[1])], ['soma', soma, ti], [TERMO[ts[2]].curto, v[2], corDe(ts[2])]];
    const mx = Math.max(1e-9, ...linhas.map(l => Math.abs(l[1]))), xr = 84 * s, xv = w - 58 * s, x0 = xr + (xv - xr) / 2, Lm = (xv - xr) / 2 - 4 * s, hb = Math.min(16 * s, h / 7), gap = (h - 4 * hb) / 5;
    ctx.strokeStyle = ti; ctx.globalAlpha = .35; ctx.lineWidth = s; ctx.beginPath(); ctx.moveTo(x0, gap * .5); ctx.lineTo(x0, h - gap * .5); ctx.stroke(); ctx.globalAlpha = 1;
    linhas.forEach(([n, val, cor], i) => {
      const y = gap + i * (hb + gap) + (i === 3 ? gap * .35 : 0), L = val / mx * Lm;
      ctx.fillStyle = cor; ctx.globalAlpha = n === 'soma' ? .4 : .92; ctx.fillRect(Math.min(x0, x0 + L), y, Math.abs(L), hb); ctx.globalAlpha = 1;
      escreve(ctx, n, xr - 6 * s, y + hb / 2, MU(), 'right', 9.5); escreve(ctx, sig(val, 2), w - 6 * s, y + hb / 2, ti, 'right', 9.5);
      if (i === 2) { ctx.strokeStyle = ti; ctx.globalAlpha = .3; ctx.beginPath(); ctx.moveTo(8 * s, y + hb + gap * .68); ctx.lineTo(w - 6 * s, y + hb + gap * .68); ctx.stroke(); ctx.globalAlpha = 1; }
    });
    notaLente(en ? `Convecção ${sig(v[0], 2)} e condução ${sig(v[1], 2)} °C/s somam ${sig(soma, 2)} °C/s; a variação local no ponto é ${sig(v[2], 2)} °C/s.` : `Convecção ${sig(v[0], 2)} e difusão ${sig(v[1], 2)} somam ${sig(soma, 2)}; a variação local no ponto é ${sig(v[2], 2)}, tudo por segundo.`);
  }
  function lenteLes(d, k, ctx, w, h, s) {
    tituloLente('Viscosidade na sonda');
    const nu = DC / st.Re, r = d.nut[k] / nu, mx = Math.max(1, r) * 1.15, x0 = 112 * s, Lm = w - x0 - 50 * s;
    [['do ar (ν)', 1, MU()], ['turbulenta (νt)', r, css('--c-visc')]].forEach(([n, v, cor], i) => {
      const y = h * (.32 + i * .34); ctx.fillStyle = cor; ctx.fillRect(x0, y - 10 * s, Math.max(1, v / mx * Lm), 20 * s);
      escreve(ctx, n, x0 - 7 * s, y, MU(), 'right', 9.5); escreve(ctx, fmt(v, 2), x0 + v / mx * Lm + 6 * s, y, TI(), 'left', 10);
    });
    notaLente(st.m.les ? `Aqui a viscosidade turbulenta vale ${fmt(r, 2)} vezes a do ar. Ela se soma à do ar no momento, na energia e nas espécies.` : 'Com a turbulência desligada, só a viscosidade do ar atua.');
  }
  function lenteBC(d, ctx, w, h, s) {
    tituloLente('Vazão de massa · g/s por metro');
    const H0 = hist.slice(-260), ti = TI(); if (H0.length < 2) return;
    let lo = Infinity, hi = -Infinity; for (const p of H0) { lo = Math.min(lo, p.qi, p.qo); hi = Math.max(hi, p.qi, p.qo); }
    const med = (lo + hi) / 2, pad = Math.max((hi - lo) * .15, med * .04); lo = Math.min(lo - pad, med * .78); hi = Math.max(hi + pad, med * 1.22);
    const L = 40 * s, R = 8 * s, T = 10 * s, B = 24 * s, t0 = H0[0].t, t1 = H0[H0.length - 1].t;
    const X = t => L + (t - t0) / Math.max(1e-9, t1 - t0) * (w - L - R), Y = v => T + (hi - v) / (hi - lo) * (h - T - B);
    ctx.lineWidth = s;
    for (const v of [med * .8, med, med * 1.2]) { ctx.strokeStyle = ti; ctx.globalAlpha = .18; ctx.beginPath(); ctx.moveTo(L, Y(v)); ctx.lineTo(w - R, Y(v)); ctx.stroke(); ctx.globalAlpha = 1; escreve(ctx, sig(v, 3), L - 5 * s, Y(v), SO(), 'right', 9); }
    for (const [q, cor, lw, tr] of [['qi', css('--c-ent'), 4.5, []], ['qo', css('--c-sai'), 2, [5, 4]]]) {
      ctx.beginPath(); ctx.strokeStyle = cor; ctx.lineWidth = lw * s; ctx.setLineDash(tr.map(x => x * s));
      H0.forEach((p, i) => { const x = X(p.t), y = Y(p[q]); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.stroke();
    }
    ctx.setLineDash([]); let x = L;
    ctx.fillStyle = css('--c-ent'); ctx.fillRect(x, h - 12 * s, 10 * s, 4 * s); x += 14 * s; x += escreve(ctx, 'entrada (imposta)', x, h - 10 * s, MU(), 'left', 9.5) + 14 * s;
    ctx.fillStyle = css('--c-sai'); ctx.fillRect(x, h - 12 * s, 10 * s, 4 * s); escreve(ctx, 'saída (resultado)', x + 14 * s, h - 10 * s, MU(), 'left', 9.5);
    const u = H0[H0.length - 1];
    notaLente(st.bc.entrada === 'puls' ? `Entram ${sig(u.qi, 3)} e saem ${sig(u.qo, 3)} g/s por metro. A entrada oscila e a saída acompanha no mesmo instante: o ar é incompressível e não tem onde acumular massa.`
      : `Entram ${sig(u.qi, 3)} e saem ${sig(u.qo, 3)} g/s por metro de profundidade. A vazão é imposta na entrada e a saída fica igual a ela.`);
  }
  function lenteVC(d, ctx, w, h, s) {
    tituloLente('Volume de controle · g/s por metro');
    const f = vcFluxos(d), mx = Math.max(f.ent, f.sai, 1e-9), x0 = 64 * s, Lm = w - x0 - 70 * s;
    [['entra', f.ent, css('--teal')], ['sai', f.sai, css('--orange')]].forEach(([n, v, cor], i) => {
      const y = h * (.24 + i * .27), L = v / mx * Lm; ctx.fillStyle = cor; ctx.fillRect(x0, y - 11 * s, L, 22 * s);
      escreve(ctx, n, x0 - 7 * s, y, MU(), 'right', 10); escreve(ctx, sig(gPorM(v), 3), x0 + L + 6 * s, y, TI(), 'left', 10);
    });
    const pc = f.saldo / mx * 100, ruim = Math.abs(pc) > 1, xm = w / 2;
    const wl = escreve(ctx, 'saldo', xm - 4 * s, h * .82, ruim ? css('--red') : MU(), 'right', 11); escreve(ctx, fmt(pc, 1) + ' %', xm + 4 * s, h * .82, ruim ? css('--red') : TI(), 'left', 12, 700); void wl;
    notaLente(st.m.continuidade ? 'Vazão de massa pelas quatro faces do volume. Com a continuidade, o que entra sai, em qualquer região.' : 'Vazão de massa pelas quatro faces do volume. Sem a continuidade, o volume ganha ou perde massa.');
  }
  function etapasDoPasso() {
    const m = st.m, l = [];
    if (m.les) l.push({ id: 'les', n: 'Viscosidade turbulenta', curto: 'turbulência', f: '<i>μ</i><sub>t</sub> = <i>ρ</i>(<i>C</i><sub>s</sub><i>Δ</i>)<sup>2</sup>|<i>S̄</i>|', cor: '--c-visc' });
    l.push({ id: 'adv', n: 'Advecção da velocidade', curto: 'advecção', f: '<b>u</b> ← <b>u</b> − Δ<i>t</i> (<b>u</b>·∇)<b>u</b>', cor: '--c-conv', abre: true });
    if (m.energia || m.especie) l.push({ id: 'esc', n: m.energia && m.especie ? 'Transporte de T e Y' : m.energia ? 'Transporte de T' : 'Transporte de Y', curto: 'escalares', f: m.energia ? '<i>T</i> ← convecção + condução' : '<i>Y</i> ← convecção + difusão', cor: '--c-dudt', abre: true });
    if (m.energia && m.empuxo) l.push({ id: 'emp', n: 'Empuxo', curto: 'empuxo', f: '<i>v</i> ← <i>v</i> + Δ<i>t</i> <i>βg</i>(<i>T</i> − <i>T</i><sub>∞</sub>)', cor: '--c-emp', abre: true });
    l.push({ id: 'dif', n: 'Difusão viscosa', curto: 'difusão', f: '<b>u</b>* ← <b>u</b> + Δ<i>t</i> <i>ν</i>∇²<b>u</b>', cor: '--c-visc', abre: true });
    if (m.continuidade) l.push({ id: 'pres', n: 'Equação da pressão', curto: 'pressão', f: '∇²<i>p</i> = (<i>ρ</i>/Δ<i>t</i>) ∇·<b>u</b>*', cor: '--c-pres', abre: true }, { id: 'cor', n: 'Correção da velocidade', curto: 'correção', f: '<b>u</b> ← <b>u</b>* − (Δ<i>t</i>/<i>ρ</i>) ∇<i>p</i>', cor: '--c-pres', abre: true });
    return l;
  }
  function lenteNum(d, ctx, w, h, s) {
    tituloLente('Tempo de cálculo por etapa · ms');
    const l = etapasDoPasso().filter(e => TM[e.id] != null), mx = Math.max(1e-6, ...l.map(e => TM[e.id])), x0 = 86 * s, Lm = w - x0 - 52 * s, hb = Math.min(18 * s, (h - 12 * s) / l.length - 6 * s), gap = (h - l.length * hb) / (l.length + 1);
    l.forEach((e, i) => {
      const y = gap + i * (hb + gap), v = TM[e.id], L = Math.max(1, v / mx * Lm);
      ctx.fillStyle = css(e.cor); ctx.fillRect(x0, y, L, hb);
      escreve(ctx, e.curto, x0 - 7 * s, y + hb / 2, MU(), 'right', 9.5); escreve(ctx, fmt(v, 2), x0 + L + 6 * s, y + hb / 2, TI(), 'left', 9.5);
    });
    notaLente(st.m.continuidade ? `A pressão consome ${fmt(TM.pres / Math.max(TM.tot, 1e-9) * 100, 0)} % do passo: são ${int(d.iter || 24)} varreduras sobre ${int(NFLU)} células. As outras etapas são contas diretas, uma passada pela malha.` : 'Sem a continuidade não há equação de pressão a resolver: o passo fica barato e errado.');
  }
  // a célula da sonda na malha deslocada: velocidades nas faces, pressão no centro e o que a correção de pressão fez
  function lenteCelula(d, k, ctx, w, h, s) {
    tituloLente('Célula da sonda · velocidade nas faces em m/s');
    const ti = TI(), mu = MU(), a = Math.min(h * .27, w * .115), cx = a + 40 * s, cy = h * .5;
    const depois = facesDaCelula(d, k, ctx, cx, cy, a, s, true) * 100, corr = st.m.continuidade ? -d.dt * lp(d.p, k, null) * 100 : 0, antes = depois - corr;
    ctx.fillStyle = css('--c-pres'); ctx.beginPath(); ctx.arc(cx, cy, 3 * s, 0, Math.PI * 2); ctx.fill();
    escreve(ctx, 'p', cx, cy - 10 * s, css('--c-pres'), 'center', 10, 700); escreve(ctx, sig(d.p[k] * RHO * U() * U() * 1000, 2) + ' mPa', cx, cy + 12 * s, css('--c-pres'), 'center', 8.5);
    const x0 = cx + a + 54 * s, x1 = w - 8 * s, xm = (x0 + x1) / 2, Lm = (x1 - x0) / 2, mx = Math.max(Math.abs(antes), Math.abs(corr), Math.abs(depois), .05), hl = (h - 26 * s) / 3;
    escreve(ctx, 'saldo de massa da célula', x0, 10 * s, SO(), 'left', 9, 700);
    ctx.strokeStyle = ti; ctx.globalAlpha = .28; ctx.lineWidth = s; ctx.beginPath(); ctx.moveTo(xm, 24 * s); ctx.lineTo(xm, h - 4 * s); ctx.stroke(); ctx.globalAlpha = 1;
    [['antes da correção', antes, css('--c-visc')], ['correção de pressão', corr, css('--c-pres')], ['depois', depois, Math.abs(depois) > .5 ? css('--red') : ti]].forEach(([n, v, cor], i) => {
      const y = 26 * s + i * hl + 8 * s, L = v / mx * Lm; escreve(ctx, n, x0, y, mu, 'left', 9.5); escreve(ctx, fmt(v, 2) + ' %', x1, y, ti, 'right', 9.5);
      ctx.fillStyle = cor; ctx.fillRect(Math.min(xm, xm + L), y + 10 * s, Math.max(1.5 * s, Math.abs(L)), Math.min(11 * s, hl - 24 * s));
    });
    notaLente(st.m.continuidade ? `Antes da correção sobravam ${fmt(antes, 2)} % do fluxo nesta célula. O gradiente de pressão tirou a diferença pelas quatro faces e deixou ${fmt(depois, 2)} %.` : `Sem a equação da pressão não há correção: o saldo de ${fmt(depois, 2)} % fica na célula.`);
  }
  // o que o ar faz na superfície: pressão em volta do cilindro, comparada com o escoamento sem atrito
  function lenteParede(d, ctx, w, h, s) {
    tituloLente('Superfície do cilindro · Cp(θ)');
    const P = cargasParede(d), n = P.n, ti = TI(), mu = MU(), L = 30 * s, x1 = w * .64, T = 9 * s, B = 34 * s, lo = -3.2, hi = 1.4;
    const X = th => L + th / 180 * (x1 - L), Y = v => T + (hi - cl(v, lo, hi)) / (hi - lo) * (h - T - B);
    ctx.lineWidth = s;
    for (const v of [1, 0, -1, -2, -3]) { ctx.strokeStyle = ti; ctx.globalAlpha = v === 0 ? .4 : .14; ctx.beginPath(); ctx.moveTo(L, Y(v)); ctx.lineTo(x1, Y(v)); ctx.stroke(); ctx.globalAlpha = 1; escreve(ctx, fmt(v, 0), L - 5 * s, Y(v), SO(), 'right', 9); }
    for (const th of [0, 90, 180]) escreve(ctx, th + '°', X(th), h - B + 8 * s, SO(), th === 0 ? 'left' : th === 180 ? 'right' : 'center', 9);
    ctx.setLineDash([4 * s, 3 * s]); ctx.strokeStyle = mu; ctx.lineWidth = 1.2 * s; ctx.beginPath();
    for (let th = 0; th <= 180; th += 3) { const v = 1 - 4 * Math.sin(th * Math.PI / 180) ** 2; th ? ctx.lineTo(X(th), Y(v)) : ctx.moveTo(X(th), Y(v)); } ctx.stroke(); ctx.setLineDash([]);
    for (const [cor, de] of [[css('--c-pres'), a => a], [css('--c-dudt'), a => (n - a) % n]]) { ctx.strokeStyle = cor; ctx.lineWidth = 2 * s; ctx.beginPath(); for (let a = 0; a <= n / 2; a++) { const x = X(a / n * 360), y = Y(P.cp[de(a)]); a ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke(); }
    let x = L; const yl = h - 7 * s;
    for (const [t, cor, tr] of [['em cima', css('--c-pres'), 0], ['embaixo', css('--c-dudt'), 0], ['sem atrito', mu, 1]]) {
      ctx.strokeStyle = cor; ctx.lineWidth = 2 * s; ctx.setLineDash(tr ? [3 * s, 2 * s] : []); ctx.beginPath(); ctx.moveTo(x, yl); ctx.lineTo(x + 11 * s, yl); ctx.stroke(); ctx.setLineDash([]); x += 14 * s; x += escreve(ctx, t, x, yl, mu, 'left', 9) + 9 * s;
    }
    // arrasto: pressão e atrito
    const xa = x1 + 16 * s, wa = w - xa - 8 * s, cdp = Math.max(0, d.mon.CdP), cdv = Math.max(0, d.mon.CdV), tot = Math.max(cdp + cdv, 1e-9);
    escreve(ctx, 'arrasto', xa, 12 * s, SO(), 'left', 9, 700);
    [['pressão', cdp, css('--c-pres')], ['atrito', cdv, css('--c-visc')]].forEach(([t, v, cor], i) => {
      const y = (32 + i * 30) * s; ctx.fillStyle = cor; ctx.fillRect(xa, y + 8 * s, Math.max(1.5 * s, v / tot * wa), 7 * s);
      escreve(ctx, t, xa, y, mu, 'left', 9.5); escreve(ctx, fmt(v, 2), xa + wa, y, ti, 'right', 9.5);
    });
    if (st.m.energia) {   // Nusselt local: média das duas faces
      const y0 = 100 * s, y1 = h - 12 * s; let mxN = 1; for (let a = 0; a < n; a++) mxN = Math.max(mxN, P.nu[a]);
      escreve(ctx, 'Nu local', xa, y0 - 8 * s, SO(), 'left', 9, 700); escreve(ctx, fmt(P.nu[0], 1), xa + wa, y0 - 8 * s, css('--c-emp'), 'right', 9);
      ctx.strokeStyle = css('--c-emp'); ctx.lineWidth = 1.8 * s; ctx.beginPath();
      for (let a = 0; a <= n / 2; a++) { const v = .5 * (P.nu[a] + P.nu[(n - a) % n]), xx = xa + a / (n / 2) * wa, yy = y1 - Math.max(0, v) / mxN * (y1 - y0 - 4 * s); a ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy); } ctx.stroke();
    }
    notaLente(`A pressão responde por ${fmt(cdp / tot * 100, 0)} % do arrasto e o atrito por ${fmt(cdv / tot * 100, 0)} %. Atrás do cilindro Cp fica em ${fmt(P.cp[n / 2], 2)} em vez de voltar a 1: é a esteira.`);
  }
  // o elemento de fluido: a aceleração dele contra a soma das forças, ao longo do caminho
  function lenteElem(d, ctx, w, h, s) {
    tituloLente('Elemento de fluido · m/s²');
    const ti = TI(), mu = MU();
    if (!elem || elem.hist.length < 2) {
      escreve(ctx, 'Escolha Elemento de fluido', w / 2, h / 2 - 8 * s, mu, 'center', 10.5); escreve(ctx, 'e clique no escoamento', w / 2, h / 2 + 8 * s, mu, 'center', 10.5);
      notaLente('Um quadrado de ar é solto e levado pela corrente. A lente compara a aceleração dele com a soma das forças que agem sobre ele.'); return;
    }
    const H0 = elem.hist, ag = aG(), L = 36 * s, R = 92 * s, T = 10 * s, B = 22 * s, t0 = H0[0].t, t1 = Math.max(H0[H0.length - 1].t, t0 + 30); let hi = 1e-9; for (const p of H0) hi = Math.max(hi, p.a, p.f); hi *= 1.12;
    const X = t => L + (t - t0) / (t1 - t0) * (w - L - R), Y = v => T + (hi - v) / hi * (h - T - B);
    ctx.lineWidth = s; for (const f of [0, .5, 1]) { ctx.strokeStyle = ti; ctx.globalAlpha = .16; ctx.beginPath(); ctx.moveTo(L, Y(hi * f / 1.12)); ctx.lineTo(w - R, Y(hi * f / 1.12)); ctx.stroke(); ctx.globalAlpha = 1; escreve(ctx, sig(hi * f / 1.12 * ag, 2), L - 5 * s, Y(hi * f / 1.12), SO(), 'right', 9); }
    for (const [q, cor, lw] of [['f', css('--c-pres'), 4], ['a', css('--c-dudt'), 1.8]]) { ctx.beginPath(); ctx.strokeStyle = cor; ctx.lineWidth = lw * s; H0.forEach((p, i) => { const x = X(p.t), y = Y(p[q]); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.stroke(); }
    let x = L; const yl = h - 8 * s;
    for (const [t, cor] of [['soma das forças', css('--c-pres')], ['aceleração', css('--c-dudt')]]) { ctx.fillStyle = cor; ctx.fillRect(x, yl - 2 * s, 10 * s, 4 * s); x += 14 * s; x += escreve(ctx, t, x, yl, mu, 'left', 9) + 10 * s; }
    const xr = w - R + 14 * s;
    [['área', fmt(elem.area * 100, 1) + ' %'], ['perímetro', '× ' + fmt(elem.estica, 2)], ['giro', int(elem.rot * 180 / Math.PI) + '°']].forEach(([n, v], i) => { const y = (20 + i * 34) * s; escreve(ctx, n, xr, y, SO(), 'left', 9, 700); escreve(ctx, v, xr, y + 13 * s, ti, 'left', 10.5); });
    notaLente(elem.fim ? `O elemento saiu do domínio com ${fmt(elem.area * 100, 1)} % da área inicial. Clique no escoamento para soltar outro.` : `A área segue em ${fmt(elem.area * 100, 1)} % da inicial: a massa se conserva enquanto o elemento se deforma. A aceleração dele acompanha a soma das forças.`);
  }

  // ---- avisos sobre o palco: o que mudou no escoamento ----
  function regime() {
    const Re = st.Re;
    if (Re < 47) return `Em Re = ${Re} a esteira é estável: duas bolhas de recirculação ficam presas atrás do cilindro e a sustentação fica em zero.`;
    if (Re <= 190) return `Em Re = ${Re} as camadas cisalhantes se enrolam e se soltam alternadamente dos dois lados: é a esteira de von Kármán. A sustentação oscila na frequência do desprendimento.`;
    return 'Acima de Re ≈ 190 a esteira real passa a ter estrutura tridimensional. Em 2D a bancada ainda mostra a esteira organizada; o modelo de turbulência passa a representar o efeito das escalas que a malha não resolve.';
  }
  const TXT = {
    base: () => regime(),
    massaOff: () => 'Sem a continuidade não existe equação para a pressão. Nada desvia o fluido: ele para na frente do cilindro, a vazão na saída cai e a massa deixa de se conservar.',
    massaOn: () => 'A pressão volta a ser calculada para que cada célula tenha o mesmo fluxo de entrada e de saída. O fluido contorna o cilindro e a vazão na saída volta a ser igual à da entrada.',
    energia: () => `A temperatura entra no sistema. O cilindro, ${st.dT} K acima do ar, aquece a camada vizinha, e os vórtices levam o calor para jusante. Sem empuxo a velocidade não muda: a energia só é transportada pelo escoamento.`,
    energiaOff: () => 'A temperatura sai do sistema. O campo de velocidade continua o mesmo, porque sem empuxo ele não dependia de T.',
    empuxo: () => Ri() > .3 ? `O ar aquecido fica mais leve e sobe. Com Ri = ${fmt(Ri(), 2)}, o empuxo desvia a esteira para cima e pode suprimir o desprendimento de vórtices. Agora a temperatura altera o momento: as duas equações estão acopladas.` : `O ar aquecido fica mais leve e sobe. Com Ri = ${fmt(Ri(), 2)}, o empuxo desvia a esteira para cima. Agora a temperatura altera o momento: as duas equações estão acopladas.`,
    empuxoOff: () => 'Sem gravidade, a temperatura volta a ser só transportada. A esteira retoma a simetria em relação ao eixo do cilindro.',
    especie: () => 'Um traçador entra em nove filetes, como fumaça em túnel de vento. Ele não altera o escoamento: mostra para onde o fluido vai e como se mistura na esteira.',
    especieOff: () => 'O traçador sai do sistema. O escoamento não muda, porque o traçador nunca o alterava.',
    les: () => `A viscosidade turbulenta representa os turbilhões menores que uma célula. Em Re = ${st.Re} ela chega a ${caso.A && caso.A.dado ? fmt(caso.A.dado.mon.nutMax / (DC / st.Re), 1) : '0'} vezes a viscosidade do ar nas camadas cisalhantes e é praticamente zero no escoamento livre.`,
    lesOff: () => 'Sem modelo de turbulência, só a viscosidade molecular atua. Em Reynolds alto, as escalas menores que a malha deixam de ser amortecidas.',
    bcIntro: () => 'O escoamento é definido pelas bordas: velocidade imposta na entrada, pressão fixa na saída, simetria no topo e no fundo e parede no cilindro.',
    bcPuls: () => `A velocidade de entrada passa a oscilar 30 % em torno da média, com período de ${fmt(periodoPuls(), 1)} s. A vazão que entra varia, e a que sai acompanha no mesmo instante: o ar é incompressível, então não há onde acumular massa.`,
    bcConst: () => 'A velocidade de entrada volta a ser constante: a vazão de massa é fixa, ṁ = ρ·U·H.',
    bcParede: () => 'Topo e fundo viram paredes: a velocidade ali passa a ser zero e camadas limite crescem ao longo delas. O ar no centro acelera para manter a mesma vazão.',
    bcSim: () => 'Topo e fundo voltam a ser simetria: o ar desliza ao longo das bordas, sem atrito.',
    num: () => 'O passo de tempo foi aberto. O palco mostra o campo depois de cada etapa; as setas são o que a etapa mudou na velocidade.',
  };
  let timerAviso = 0;
  function mudou(chave, titulo) {
    const el = $('#aviso-t'), box = $('#aviso'); el.textContent = '';
    const b = document.createElement('b'); b.textContent = titulo; el.append(b, ' ', TXT[chave]());
    box.hidden = true; void box.offsetWidth; box.hidden = false;
    clearTimeout(timerAviso); timerAviso = setTimeout(() => { box.hidden = true; }, 12000);
  }
  $('#aviso-x').addEventListener('click', () => { $('#aviso').hidden = true; clearTimeout(timerAviso); });

  // ---- sistema resolvido agora ----
  const SVGNS = 'http://www.w3.org/2000/svg';
  const NOS = { p: [44, 74, '<tspan font-style="italic">p</tspan>', 'pressão', 0, -25], u: [150, 74, '<tspan font-weight="700" font-style="normal">u</tspan>', 'velocidade', -6, -25], T: [276, 34, '<tspan font-style="italic">T</tspan>', 'temperatura', -4, -24], Y: [276, 112, '<tspan font-style="italic">Y</tspan>', 'traçador', 0, 27], N: [150, 150, 'μ<tspan font-size="9" dy="4">t</tspan>', 'turbulência', 52, 1] };
  const ARESTAS = [
    { id: 'pu', de: 'p', para: 'u', c: -15, rot: '−∇p', mat: true, cor: '--c-pres', on: m => m.continuidade, eq: 'mom', termo: 'pres', x: 'A pressão age no momento pelo gradiente: empurra o ar da pressão alta para a baixa.' },
    { id: 'up', de: 'u', para: 'p', c: -15, rot: '∇·u = 0', mat: true, cor: '--c-pres', on: m => m.continuidade, eq: 'massa', termo: 'div', x: 'A continuidade não contém a pressão, mas é ela que a determina: p é o campo que zera o saldo de massa da velocidade.' },
    { id: 'uT', de: 'u', para: 'T', c: -9, rot: 'convecção', cor: '--c-conv', on: m => m.energia, eq: 'energia', termo: 'convT', x: 'A velocidade leva o calor de uma célula para outra. Sem empuxo, a temperatura não devolve nada à velocidade.' },
    { id: 'Tu', de: 'T', para: 'u', c: -9, rot: 'empuxo', cor: '--c-emp', on: m => m.energia && m.empuxo, eq: 'mom', termo: 'emp', x: 'Com a gravidade, o ar quente é empurrado para cima: a temperatura passa a alterar a velocidade e o acoplamento fica nos dois sentidos.' },
    { id: 'uY', de: 'u', para: 'Y', c: 9, rot: 'convecção', cor: '--c-conv', on: m => m.especie, eq: 'especie', termo: 'convY', x: 'O traçador é levado pelo escoamento e não o altera: acoplamento num só sentido.' },
    { id: 'uN', de: 'u', para: 'N', c: 11, rot: '|S̄|', mat: true, cor: '--c-visc', on: m => m.les, eq: 'les', termo: 'nut', x: 'A viscosidade turbulenta é calculada a partir da deformação do campo de velocidade.' },
    { id: 'Nu', de: 'N', para: 'u', c: 11, rot: 'μt', mat: true, cor: '--c-visc', on: m => m.les, eq: 'les', termo: 'visct', x: 'A viscosidade turbulenta se soma à do ar no momento, na energia e nas espécies, e amortece as escalas menores que a malha.' },
  ];
  let arestaSel = null;
  function montarGrafo() {
    const svg = $('#grafo'), novo = (tag, at, pai) => { const e = document.createElementNS(SVGNS, tag); for (const k in at) e.setAttribute(k, at[k]); (pai || svg).append(e); return e; };
    for (const a of ARESTAS) {
      const A = NOS[a.de], B = NOS[a.para], dx = B[0] - A[0], dy = B[1] - A[1], L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L, cx = (A[0] + B[0]) / 2 + nx * a.c * 2, cy = (A[1] + B[1]) / 2 + ny * a.c * 2;
      const un = (x, y) => { const m = Math.hypot(x, y) || 1; return [x / m, y / m]; }, d0 = un(cx - A[0], cy - A[1]), d1 = un(cx - B[0], cy - B[1]);
      const S = [A[0] + d0[0] * 18, A[1] + d0[1] * 18], E = [B[0] + d1[0] * 23, B[1] + d1[1] * 23], P = [B[0] + d1[0] * 17, B[1] + d1[1] * 17], t = un(E[0] - P[0], E[1] - P[1]);
      const g = novo('g', { class: 'ag', 'data-a': a.id, tabindex: '0', role: 'button' }); g.style.setProperty('--ac', `var(${a.cor})`);
      const caminho = `M${S[0].toFixed(1)} ${S[1].toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${E[0].toFixed(1)} ${E[1].toFixed(1)}`;
      novo('path', { class: 'ar', d: caminho }, g); novo('path', { class: 'ar-hit', d: caminho }, g);
      novo('path', { class: 'seta', d: `M${P[0].toFixed(1)} ${P[1].toFixed(1)} L${(E[0] + t[1] * 4).toFixed(1)} ${(E[1] - t[0] * 4).toFixed(1)} L${(E[0] - t[1] * 4).toFixed(1)} ${(E[1] + t[0] * 4).toFixed(1)}Z` }, g);
      const qx = .25 * S[0] + .5 * cx + .25 * E[0] + nx * Math.sign(a.c) * 9, qy = .25 * S[1] + .5 * cy + .25 * E[1] + ny * Math.sign(a.c) * 9 + 3;
      const tx = novo('text', { class: 'ar-t', x: qx.toFixed(1), y: qy.toFixed(1) }, g); if (a.mat) tx.setAttribute('translate', 'no'); tx.textContent = a.rot;
      const sel = () => { arestaSel = arestaSel === a.id ? null : a.id; if (arestaSel && a.on(st.m)) { definirEq(a.eq); if (st.chip !== a.termo) escolherTermo(a.termo); else sincronizar(); } else sincronizar(); };
      g.addEventListener('click', sel); g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); sel(); } });
    }
    for (const k in NOS) {
      const n = NOS[k], g = novo('g', { class: 'no', 'data-no': k });
      novo('circle', { cx: n[0], cy: n[1], r: 16 }, g);
      const t = novo('text', { x: n[0], y: n[1], translate: 'no' }, g); t.innerHTML = n[2];
      const r = novo('text', { class: 'no-r', x: n[0] + n[4], y: n[1] + n[5] }, g); r.textContent = n[3];
    }
  }
  function grafo() {
    const m = st.m, on = { p: m.continuidade, u: true, T: m.energia, Y: m.especie, N: m.les };
    for (const g of $$('#grafo .no')) { g.classList.toggle('off', !on[g.dataset.no]); g.classList.toggle('on', !!on[g.dataset.no]); }
    for (const g of $$('#grafo .ag')) {
      const a = ARESTAS.find(q => q.id === g.dataset.a), lig = a.on(m), sel = arestaSel === a.id || (lig && st.chip === a.termo && st.eq === a.eq);
      for (const e of g.children) { e.classList.toggle('off', !lig); if (e.classList.contains('ar')) e.classList.toggle('sel', sel); }
    }
  }
  function sistema() {
    const S = $('#sistema'), m = st.m;
    S.classList.toggle('les', m.les); S.classList.toggle('empuxo', m.empuxo);
    const vis = { bc: true, massa: true, mom: true, emp: m.empuxo, energia: m.energia, especie: m.especie, les: m.les };
    for (const r of $$('.eqr')) {
      const k = r.dataset.row, antes = !r.classList.contains('fora');
      r.classList.toggle('fora', !vis[k]); r.classList.toggle('eqr-sel', k === st.eq || (k === 'emp' && st.chip === 'emp'));
      if (vis[k] && !antes) { r.classList.remove('novo'); void r.offsetWidth; r.classList.add('novo'); }
    }
    $('.eqr[data-row="massa"]').classList.toggle('off', !m.continuidade);
    const inc = 3 + m.energia + m.especie + m.les, eq = (m.continuidade ? 1 : 0) + 2 + m.energia + m.especie + m.les, conta = $('#sis-conta'), chave = eq + '|' + inc;
    if (conta._k !== chave) { conta._k = chave; conta.textContent = ''; const b1 = document.createElement('b'), b2 = document.createElement('b'); b1.textContent = eq; b2.textContent = inc; conta.append(b1, ' equações · ', b2, ' incógnitas'); }
    pt($('#sis-tam'), `${int(NFLU)} células de fluido × ${inc} incógnitas = ${int(NFLU * inc)} valores calculados a cada passo de tempo`);
    const nota = $('#sis-nota'), a = arestaSel && ARESTAS.find(q => q.id === arestaSel);
    nota.classList.toggle('erro', !m.continuidade && !a);
    if (!nota.firstChild) nota.append(document.createElement('span'), document.createElement('b'));
    pt(nota.lastChild, a && !a.on(m) ? ' Desligada agora.' : '');
    pt(nota.firstChild, a ? a.x
      : !m.continuidade ? 'Sistema aberto: a pressão ficou sem equação. O resultado deixa de ter sentido físico.'
      : m.empuxo ? 'Acoplamento nos dois sentidos: u transporta T e T acelera u pelo empuxo. Clique numa seta para ver a parcela no palco.'
      : m.les ? 'μt depende do gradiente de u e altera o transporte de u, T e Y. Clique numa seta para ver a parcela no palco.'
      : m.energia || m.especie ? 'Acoplamento num só sentido: u transporta T e Y, mas eles não alteram u. Clique numa seta para ver a parcela no palco.'
      : 'Três equações para u, v e p. A pressão não tem equação própria: ela é o campo que faz a continuidade valer. Clique numa seta para ver a parcela no palco.');
    grafo();
  }

  // ---- guia: oito etapas, cada uma com o que fazer e o que observar ----
  const visto = { termos: new Set(), sonda: 0, vc: 0, fumaca: false, contOff: false, lesOff: false, dT: false, cor: false, its: 0, partes: new Set() };
  function zerarVisto() { visto.termos.clear(); visto.partes.clear(); visto.sonda = 0; visto.vc = 0; visto.its = 0; visto.fumaca = visto.contOff = visto.lesOff = visto.dT = visto.cor = false; }
  const viu = (...ts) => ts.filter(t => visto.termos.has(t)).length;
  const BASE = { continuidade: true, energia: false, empuxo: false, especie: false, les: false };
  const GUIA = {
    contornos: {
      n: 1, eq: 'bc', tit: 'Domínio e condições de contorno',
      estado: { m: { ...BASE }, Re: 150 }, vis: { campo: 'vel', termo: null, ov: { vetores: true }, zoom: false, ferr: 'sonda', sonda: [200, 48] },
      sobre: 'Um túnel de 320 × 120 mm com um cilindro de 20 mm. O ar entra pela esquerda com velocidade imposta, contorna o cilindro e sai pela direita, onde a pressão é fixa. Tudo o que acontece no meio é consequência dessas quatro bordas.',
      tarefas: [
        ['Clique em cada condição no console da equação e veja a borda correspondente acender no palco.', () => viu('entrada', 'saida', 'lados', 'cilindro') >= 3],
        ['Na aba Sistema, troque a entrada para pulsante: a lente Balanço mostra a saída acompanhando a entrada no mesmo instante.', () => st.bc.entrada === 'puls'],
        ['Troque topo e fundo para parede e veja as camadas limite crescerem nas bordas.', () => st.bc.paredes === 'parede'],
      ],
      obj: 'Dizer ao solver o que acontece nas bordas do domínio: o que entra, por onde sai e como as paredes agem.',
      porT: 'Por que é necessário',
      por: 'As equações valem dentro do domínio. Sem condições nas bordas, elas têm infinitas soluções. Cada borda recebe uma condição para cada equação resolvida: velocidade ou pressão para o escoamento, temperatura ou fluxo de calor para a energia, fração para as espécies.',
      semT: 'A vazão é imposta?',
      sem: 'Aqui, sim: velocidade e altura da entrada são dadas, então ṁ = ρ·U·H é conhecido antes do cálculo, constante ou pulsante. A saída tem pressão fixa e deixa passar o que chega. Outra escolha comum é o contrário: pressão na entrada e na saída, e a vazão vira resultado do cálculo. O Fluent também permite impor a vazão diretamente, com mass-flow-inlet.',
      ent: 'Um problema bem posto. As condições definem o número de Reynolds, a temperatura da parede e o que se mede no fim: arrasto, calor trocado e vazão.',
      fl: 'No Fluent: Setup › Boundary Conditions. Tipos usados aqui: velocity-inlet, pressure-outlet, symmetry e wall. Para a entrada pulsante, use uma expressão dependente do tempo em Velocity Magnitude.',
    },
    momento: {
      n: 2, eq: 'mom', tit: 'Quantidade de movimento',
      estado: { m: { ...BASE }, Re: 150 }, vis: { campo: 'vel', termo: null, ov: { vetores: true }, zoom: true, ferr: 'sonda', sonda: [86, 54] },
      sobre: 'É a segunda lei de Newton para cada pedaço de ar. À frente do cilindro a pressão sobe e freia o ar; nos lados ela o acelera; junto à parede o atrito o segura e forma a camada limite que, ao se soltar, vira a esteira de vórtices.',
      tarefas: [
        ['Clique em cada parcela da equação: cada uma vira um campo de setas, todas na mesma escala.', () => viu('dudt', 'conv', 'pres', 'visc') >= 3],
        ['Arraste a sonda pela esteira. Na lente Balanço, as forças somam a aceleração da partícula: é a equação fechando no ponto.', () => visto.sonda > 40],
        ['Ligue Quem domina para ver em que região cada parcela é a maior.', () => st.dom],
        ['Com a ferramenta Elemento de fluido, solte um pedaço de ar à frente do cilindro e acompanhe as forças sobre ele.', () => !!elem && elem.t > 25],
      ],
      obj: 'Calcular a velocidade do fluido em cada célula: massa vezes aceleração igual à soma das forças de pressão, de atrito viscoso e de volume.',
      porT: 'Por que está sempre ativa',
      por: 'A velocidade é o que define um escoamento. Todas as outras equações dependem dela pela convecção, que leva calor, espécies e turbulência de uma célula para outra. Sem ela não há escoamento a calcular. Por isso o Fluent resolve o momento em todo caso de escoamento e não há opção para desligá-lo em Models.',
      semT: 'Quando ela pode parar',
      sem: 'Depois que o escoamento convergiu, o Fluent permite congelar a velocidade em Solution Controls › Equations, desmarcando Flow, e resolver só energia ou espécies sobre esse campo. A equação continua lá; só deixa de ser recalculada.',
      ent: 'Os campos de velocidade e, junto com a continuidade, de pressão. Deles saem o arrasto e a sustentação do cilindro e a frequência de desprendimento dos vórtices (Strouhal).',
      fl: 'No Fluent: sempre resolvida. A viscosidade μ vem de Materials, e o termo ρg só entra com General › Gravity.',
    },
    continuidade: {
      n: 3, eq: 'massa', tit: 'Continuidade',
      estado: { m: { ...BASE }, Re: 150 }, vis: { campo: 'vel', termo: null, ov: { vetores: true }, zoom: false, ferr: 'vc', vc: [52, 30, 100, 66] },
      sobre: 'O ar não se comprime nem some: o que entra numa célula sai dela. É essa exigência que faz o ar desviar do cilindro antes de tocá-lo, e é dela que o solver tira a pressão.',
      tarefas: [
        ['Arraste o volume de controle por qualquer região: o que entra sai, e o saldo fica em zero.', () => visto.vc > 30],
        ['Desligue a continuidade no interruptor da aba e veja o ar parar na frente do cilindro e o saldo deixar de fechar.', () => visto.contOff],
        ['Religue e abra a lente Célula: a correção de pressão zera o saldo de cada célula.', () => visto.contOff && st.m.continuidade && st.lente === 'celula'],
      ],
      obj: 'Conservar a massa: em cada célula, o que entra é igual ao que sai.',
      porT: 'Por que está aqui',
      por: 'O momento tem três incógnitas (u, v e p) e só duas equações, uma por direção. A continuidade fecha o sistema. Ela não contém a pressão, mas é ela que a determina: o solver corrige p até que todas as células fiquem em equilíbrio de massa. Esse é o acoplamento pressão–velocidade.',
      semT: 'Sem ela',
      sem: 'Sem equação para a pressão, nada desvia o ar: ele para na frente do cilindro, a vazão na saída cai e a massa some do domínio.',
      ent: 'A pressão em todo o domínio, e com ela o coeficiente de pressão e a parcela de pressão do arrasto. O monitor de vazão saída/entrada confere se ela está sendo cumprida.',
      fl: 'No Fluent: sempre resolvida. O método de acoplamento fica em Solution › Methods: SIMPLE, SIMPLEC, PISO ou Coupled.',
    },
    energia: {
      n: 4, eq: 'energia', tit: 'Energia',
      estado: { m: { ...BASE, energia: true }, Re: 150 }, vis: { campo: 'temp', termo: null, ov: { contornos: true }, zoom: true, ferr: 'sonda', sonda: [92, 51] },
      sobre: 'O cilindro está mais quente que o ar. O calor sai da parede por condução numa camada fina e é levado pelos vórtices para a esteira.',
      tarefas: [
        ['Clique em condução: ela só existe numa camada fina junto à parede, por onde o calor sai do cilindro.', () => visto.termos.has('condT')],
        ['Clique em convecção: ela leva esse calor para a esteira.', () => visto.termos.has('convT')],
        ['Abra a lente Parede: o Nusselt local é maior na frente do cilindro, onde a camada de ar quente é mais fina.', () => st.lente === 'parede'],
      ],
      obj: 'Calcular a temperatura e a troca de calor entre o cilindro e o ar.',
      porT: 'Por que está aqui',
      por: 'Sem esta equação o solver nem sabe que existe temperatura. Ela é necessária sempre que há troca de calor, propriedades que variam com T, empuxo ou escoamento compressível.',
      semT: 'O que muda no escoamento',
      sem: 'Nada, por enquanto. Com propriedades constantes e sem gravidade, a temperatura é só transportada pela velocidade e não age sobre ela. Esse acoplamento de um sentido permite, no Fluent, convergir o escoamento primeiro e a energia depois.',
      ent: 'O campo de temperatura, o fluxo de calor na parede e o número de Nusselt, que mede a troca de calor.',
      fl: 'No Fluent: Models › Energy. A temperatura da parede entra em Boundary Conditions › cylinder › Thermal.',
    },
    empuxo: {
      n: 5, eq: 'mom', tit: 'Gravidade e empuxo',
      estado: { m: { ...BASE, energia: true, empuxo: true }, Re: 150 }, vis: { campo: 'temp', termo: 'emp', ov: { particulas: true }, zoom: false, ferr: 'sonda', sonda: [112, 54] },
      sobre: 'O ar aquecido pelo cilindro fica mais leve. Com a gravidade ligada, ele sobe e arrasta a esteira para cima: a temperatura passa a mexer na velocidade.',
      tarefas: [
        ['As setas vermelhas são o empuxo: só existem onde o ar está quente. Clique em Temperatura para ver a esteira subir.', () => st.campo === 'temp' && !st.termo],
        ['Na aba Sistema, aumente a diferença de temperatura e acompanhe o número de Richardson.', () => visto.dT],
        ['Ainda em Sistema, veja a seta T → u no grafo: o acoplamento agora tem dois sentidos.', () => st.rl === 'sistema'],
      ],
      obj: 'Representar a força que faz o ar quente, mais leve, subir.',
      porT: 'Por que está aqui',
      por: 'A densidade do ar cai quando ele esquenta. A aproximação de Boussinesq mantém a densidade constante em todas as equações e só a deixa variar no peso, por esta parcela. Ela exige a energia, para conhecer T, e a gravidade ligada.',
      semT: 'O que muda no escoamento',
      sem: 'Agora a temperatura altera a velocidade: as equações ficam acopladas nos dois sentidos. O número de Richardson mostra quanto o empuxo pesa frente à inércia. Com Ri perto de 1, a esteira se inclina para cima e o desprendimento de vórtices pode parar.',
      ent: 'Um escoamento diferente: esteira inclinada, sustentação média negativa no cilindro e, com Ri alto, Strouhal zero.',
      fl: 'No Fluent: General › Gravity e Materials › Density › boussinesq, com o coeficiente de expansão térmica β e a Operating Temperature.',
    },
    especie: {
      n: 6, eq: 'especie', tit: 'Transporte de espécies',
      estado: { m: { ...BASE, especie: true }, Re: 150 }, vis: { campo: 'esp', termo: null, ov: {}, zoom: false, ferr: 'fumaca', sonda: [110, 52] },
      sobre: 'Nove filetes de traçador entram com o ar, como fumaça num túnel de vento. Eles mostram para onde cada porção de ar vai e como a esteira mistura.',
      tarefas: [
        ['Clique e arraste sobre o escoamento para soltar fumaça: ela entra como fonte na equação e segue os vórtices.', () => visto.fumaca],
        ['Clique em difusão: na mesma escala das outras parcelas, ela quase não aparece.', () => visto.termos.has('difY')],
        ['Ligue Quem domina e confira: a convecção manda em quase todo o domínio.', () => st.dom],
      ],
      obj: 'Transportar a fração de uma substância misturada ao ar.',
      porT: 'Por que está aqui',
      por: 'Aqui ela leva um traçador passivo para mostrar trajetórias e mistura. Na prática, a mesma equação calcula dispersão de gases, umidade, combustão e reações, uma equação para cada espécie.',
      semT: 'O que muda no escoamento',
      sem: 'Nada. O traçador não altera densidade nem viscosidade. Se a espécie mudasse as propriedades da mistura, ou reagisse liberando calor, o acoplamento voltaria a ser nos dois sentidos.',
      ent: 'A fração de cada espécie em cada célula e a mistura na saída.',
      fl: 'No Fluent: Models › Species › Species Transport, ou um escalar definido pelo usuário (UDS) para um traçador simples.',
    },
    les: {
      n: 7, eq: 'les', tit: 'Turbulência',
      estado: { m: { ...BASE, les: true }, Re: 1200 }, vis: { campo: 'nut', termo: null, ov: {}, zoom: false, ferr: 'sonda', sonda: [88, 54] },
      sobre: 'Com Re = 1.200 aparecem turbilhões menores que uma célula. O modelo devolve o efeito deles como uma viscosidade extra, só onde o escoamento se deforma.',
      tarefas: [
        ['Desligue e religue a turbulência no interruptor da aba, com Re = 1.200, e compare o campo.', () => visto.lesOff && st.m.les],
        ['Mova a sonda para as camadas que se soltam do cilindro: é ali que a viscosidade turbulenta cresce.', () => visto.sonda > 30],
        ['Na aba Sistema, ligue Comparar com o caso base para ver os dois escoamentos lado a lado.', () => st.comparar],
      ],
      obj: 'Representar o efeito dos turbilhões menores que uma célula da malha.',
      porT: 'Por que está aqui',
      por: 'Nesta etapa o Reynolds sobe para 1.200 e aparecem movimentos menores do que a malha consegue ver, mas que continuam dissipando energia. O modelo devolve esse efeito como uma viscosidade extra, μt, somada à do ar no momento, na energia e nas espécies.',
      semT: 'Sem ela',
      sem: 'Em Reynolds alto, a energia que deveria se dissipar nas escalas pequenas se acumula na malha e o resultado perde confiabilidade. Em Reynolds baixo, μt fica perto de zero e o modelo quase não age.',
      ent: 'O campo de viscosidade turbulenta e, por ele, a difusão turbulenta de momento, calor e espécies.',
      fl: 'No Fluent: Models › Viscous. Em 2D, use SST k–ω, que modela todos os turbilhões; LES, que resolve os grandes e modela os pequenos, só existe em 3D.',
    },
    num: {
      n: 8, eq: 'num', tit: 'Solução numérica',
      estado: { m: { ...BASE }, Re: 150 }, vis: { campo: 'vel', termo: null, ov: { vetores: true, malha: true }, zoom: true, ferr: 'sonda', sonda: [86, 54] },
      sobre: 'Nenhuma dessas equações é resolvida de uma vez. A cada passo de tempo o solver prevê a velocidade só com inércia e atrito, calcula a pressão que falta para conservar a massa e corrige. É o mesmo roteiro de um solver segregado.',
      tarefas: [
        ['Na aba Solver, clique em Abrir um passo: a simulação para e o palco mostra o campo depois de cada etapa.', () => !!st.det],
        ['Avance até a correção e veja o saldo de massa cair a quase zero.', () => visto.cor],
        ['Na etapa da pressão, arraste as iterações partindo do zero e depois do passo anterior.', () => visto.its > 2 && visto.partes.size > 1],
        ['Abra a lente Célula para ver a mesma conta numa única célula da malha.', () => st.lente === 'celula'],
      ],
      obj: 'Transformar as equações diferenciais em contas que o computador repete a cada passo de tempo, em cada célula.',
      porT: 'Por que em etapas',
      por: 'Momento e continuidade estão presos um ao outro pela pressão, que não tem equação própria. Separar o passo em previsão, pressão e correção troca um sistema acoplado e não linear por contas diretas e um único sistema linear para a pressão.',
      semT: 'Onde está o custo',
      sem: 'No sistema da pressão: uma equação por célula, resolvida a cada passo por iterações. Por isso o solver parte da pressão do passo anterior, que já está quase certa. Advecção e difusão são contas diretas, uma passada pela malha.',
      ent: 'Os campos de velocidade e pressão no instante seguinte, com o saldo de massa de cada célula perto de zero. Repetido milhares de vezes, vira a esteira que aparece no palco.',
      fl: 'No Fluent: Solution › Methods define o acoplamento pressão–velocidade e a discretização; Solution › Controls, os fatores de relaxação. Os resíduos de cada iteração aparecem em Monitors › Residual.',
    },
  };
  const ORDEM = ['contornos', 'momento', 'continuidade', 'energia', 'empuxo', 'especie', 'les', 'num'];
  const OV0 = { vetores: false, linhas: false, contornos: false, particulas: false, malha: false, parede: false };
  const vistos = new Set([1]);
  function abrirGuia(k, aplicar) {
    const g = GUIA[k]; if (!g) return; st.guia = k;
    if (aplicar) {
      zerarVisto(); st.feitas = {}; if (st.det) fecharPasso();
      st.passo = g.n; vistos.add(g.n); Object.assign(st.m, g.estado.m);
      if (st.Re !== g.estado.Re) hist.length = 0; st.Re = g.estado.Re;
      if (k === 'empuxo') st.dT = Math.max(st.dT, 20);
      const v = g.vis; st.campo = v.campo; Object.assign(st.ov, OV0, v.ov); limparRastros();
      st.eq = g.eq; st.ferr = v.ferr; st.chip = v.termo || (v.ferr === 'fumaca' ? 'fonteY' : null); st.termo = v.termo; st.dom = false; st.lente = 'ponto'; arestaSel = null;
      if (v.sonda) st.sonda = { x: v.sonda[0], y: v.sonda[1] };
      if (v.vc) st.vc = { x0: v.vc[0], y0: v.vc[1], x1: v.vc[2], y1: v.vc[3] };
      irPara(v.zoom ? VCIL : VTODO); montarDeck(); sincronizar();
    }
    pt($('#guia-k'), `Etapa ${String(g.n).padStart(2, '0')} de 08`);
    pt($('#guia-t'), g.tit); pt($('#guia-sobre'), g.sobre);
    const ul = $('#tarefas');
    if (ul.dataset.k !== k) { ul.dataset.k = k; ul.textContent = ''; for (const [t] of g.tarefas) { const li = document.createElement('li'); li.textContent = t; ul.append(li); } }
    pt($('#g-obj'), g.obj); pt($('#g-por-t'), g.porT); pt($('#g-por'), g.por); pt($('#g-sem-t'), g.semT); pt($('#g-sem'), g.sem); pt($('#g-ent'), g.ent); pt($('#guia-fl'), g.fl);
    $('#guia-ant').disabled = g.n === 1; $('#guia-prox').hidden = g.n === ORDEM.length; $('#tr-ant').disabled = g.n === 1; $('#tr-prox').disabled = g.n === ORDEM.length;
    for (const b of $$('#trilha [data-passo]')) { b.setAttribute('aria-pressed', String(+b.dataset.passo === g.n)); b.classList.toggle('visto', vistos.has(+b.dataset.passo)); }
    tTar = 0; conferirTarefas();
  }
  let tTar = 0;
  function conferirTarefas() {
    const agora = performance.now(); if (agora - tTar < 300) return; tTar = agora;
    const g = GUIA[st.guia], lis = $('#tarefas').children;
    g.tarefas.forEach(([, ok], i) => { const ch = st.guia + i; if (!st.feitas[ch] && ok()) st.feitas[ch] = true; if (lis[i]) lis[i].classList.toggle('feito', !!st.feitas[ch]); });
  }
  function irPasso(n) {
    const k = ORDEM[n - 1]; abrirGuia(k, true); abrirRail('guia');
    const ch = { contornos: 'bcIntro', momento: 'base', continuidade: 'massaOn', energia: 'energia', empuxo: 'empuxo', especie: 'especie', les: 'les', num: null }[k];
    if (ch) mudou(ch, k === 'contornos' ? 'Condições de contorno' : k === 'momento' ? 'Escoamento base' : k === 'continuidade' ? 'Continuidade ligada' : '+ ' + GUIA[k].tit); else $('#aviso').hidden = true;
    if (k === 'les') setTimeout(() => { if (st.m.les && st.guia === 'les') mudou('les', '+ Turbulência'); }, 1500);
    $('#rl-guia').scrollTop = 0;
  }
  const GUIA_DE_EQ = eq => ({ bc: 'contornos', massa: 'continuidade', mom: st.m.empuxo ? 'empuxo' : 'momento', energia: 'energia', especie: 'especie', les: 'les', num: 'num' }[eq]);
  $$('#trilha [data-passo]').forEach(b => b.addEventListener('click', () => irPasso(+b.dataset.passo)));
  for (const [id, dn] of [['#guia-ant', -1], ['#tr-ant', -1], ['#guia-prox', 1], ['#tr-prox', 1]]) $(id).addEventListener('click', () => { const n = GUIA[st.guia].n + dn; if (n >= 1 && n <= ORDEM.length) irPasso(n); });
  function abrirRail(k) {
    st.rl = k;
    $$('[data-rl]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.rl === k)));
    for (const p of ['guia', 'sistema', 'solver']) $('#rl-' + p).hidden = p !== k;
    if (caso.A) config(caso.A);
    if (k === 'solver') { ajustar(); montarPipe(); tempos(); if (!conv && !pedindoDet && caso.A && caso.A.dado) pedirDetalhe('medir'); graficos(); }
  }
  $$('[data-rl]').forEach(b => b.addEventListener('click', () => abrirRail(b.dataset.rl)));

  // ---- solver: a ordem real das contas de um passo de tempo ----
  function montarPipe() {
    const ol = $('#pipe'), l = etapasDoPasso(), chave = l.map(e => e.id + e.n).join('|');
    if (ol.dataset.k !== chave) {
      ol.dataset.k = chave; ol.textContent = '';
      for (const e of l) {
        const li = document.createElement('li'); li.dataset.et = e.id; li.style.setProperty('--tc', `var(${e.cor})`);
        li.innerHTML = `<span class="pipe-n"><b>${e.n}</b><small translate="no">${e.f}</small></span><span class="pipe-t"><span></span><i></i></span>`;
        if (e.abre) { li.classList.add('abre'); li.tabIndex = 0; li.setAttribute('role', 'button'); li.addEventListener('click', () => abrirPasso(e.id)); li.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); abrirPasso(e.id); } }); }
        ol.append(li);
      }
    }
    const id = st.det ? st.det.lista[st.detEt] : null, atual = id === 'div' ? 'pres' : id;
    for (const li of ol.children) li.classList.toggle('atual', li.dataset.et === atual);
  }
  function tempos() {
    const d = caso.A && caso.A.dado;
    for (const li of $('#pipe').children) { const ms = TM[li.dataset.et]; if (ms == null) continue; pt(li.querySelector('.pipe-t span'), fmt(ms, 2) + ' ms'); li.style.setProperty('--w', (cl(ms / Math.max(TM.tot, 1e-9), 0, 1) * 100).toFixed(0) + '%'); }
    if (d) {
      pt($('#sv-res'), `Δt = ${sig(DT * H / U() * 1000, 3)} ms · ${int(NFLU)} células · passo ${int(d.passo)} · ${fmt(TM.tot, 1)} ms de cálculo por passo`);
      pt($('#sv-sis'), st.m.continuidade ? `Uma equação por célula de fluido: ${int(NFLU)} equações lineares, cada uma ligando a pressão da célula às quatro vizinhas. A matriz não muda de um passo para o outro; só o lado direito, que é o saldo de massa de u*. O solver faz ${int(d.iter || 24)} varreduras por passo.` : 'Com a continuidade desligada, o sistema da pressão não é montado nem resolvido.');
    }
  }
  let pedindoDet = null, conv = null;
  function pedirDetalhe(alvo) {
    const c = caso.A; if (!c || !c.dado || pedindoDet) return;
    pedindoDet = alvo;
    if (alvo !== 'medir') { const b = $('#sv-abrir'); pt(b, 'Calculando o passo…'); b.disabled = true; }
    if (c.esperando) return;   // o pedido sai quando o quadro em andamento chegar
    c.esperando = true; c.w.postMessage({ tipo: 'detalhe', id: ++c.id });
  }
  function abrirPasso(et) {
    if (st.det) { const i = st.det.lista.indexOf(et); if (i >= 0) { st.detEt = i; etapaAtual(); } return; }
    if (pedindoDet === 'medir') { pedindoDet = et || true; return; }
    pedirDetalhe(et || true);
  }
  function abrirDetalhe(det) {
    const alvo = pedindoDet, b = $('#sv-abrir'); pedindoDet = null; conv = det;
    pt(b, 'Abrir um passo, etapa por etapa'); b.disabled = false; notaConv();
    if (!alvo || alvo === 'medir') { graficos(); return; }
    const lista = []; det.por = {};
    for (const e of det.etapas) { det.por[e.id] = e; if (e.id === 'cor') { if (det.cont) lista.push('pres', 'cor'); } else { lista.push(e.id); if (e.id === 'dif') lista.push('div'); } }
    const mxAbs = a => { let m = 0; for (let k = 0; k < a.length; k++) { const v = Math.abs(a[k]); if (v > m) m = v; } return m; };
    det.mx0 = mxAbs(det.por.dif.div); det.mx1 = mxAbs(det.por.cor.div);
    det.lista = lista; st.det = det; st.detEt = Math.max(0, lista.indexOf(alvo === true ? 'ini' : alvo)); st.detIt = 0; st.detPart = 'frio';
    st.eq = 'num'; st.dom = false; st.termo = null; montarDeck();
    $('#sv-passo').hidden = false; b.hidden = true; $('#play').setAttribute('aria-pressed', 'false');
    abrirRail('solver'); etapaAtual(); mudou('num', 'Passo aberto');
  }
  function fecharPasso() {
    if (!st.det) return; st.det = null;
    $('#sv-passo').hidden = true; $('#sv-abrir').hidden = false; $('#etapa-tag').hidden = true; $('#play').setAttribute('aria-pressed', String(st.rodando));
    if (st.chip && TERMO[st.chip].tipo === 'num') { st.chip = null; textoDeck(); }
    montarPipe(); pedirDesenho(true); graficos(); cicloTodos();
  }
  const fotosAtuais = () => st.detPart === 'frio' && st.det.frio ? st.det.frio.fotos : st.det.fotosP;
  const ET = {
    ini: { tag: 'início do passo · velocidade do passo anterior', termo: null, x: () => `Ponto de partida: a velocidade e a pressão do passo anterior. O solver vai avançar Δt = ${sig(DT * H / U() * 1000, 3)} ms; nesse tempo, o ar da entrada percorre pouco mais de meia célula.` },
    adv: { tag: 'depois da advecção · o que ela mudou', termo: 'n_adv', x: () => 'As setas mostram o que a advecção mudou na velocidade neste passo. Ela age onde o ar muda de direção ou de rapidez: em volta do cilindro e nos vórtices da esteira. No escoamento uniforme, não faz nada.' },
    esc: { tag: 'depois do transporte dos escalares', termo: null, x: () => 'Temperatura e traçador são levados pelo campo de velocidade e depois difundidos. Eles são atualizados antes do empuxo, que precisa da temperatura nova.' },
    emp: { tag: 'depois do empuxo · o que ele mudou', termo: 'n_emp', x: () => 'O empuxo soma velocidade para cima onde o ar está mais quente que a corrente. As setas mostram essa mudança: ela só existe na esteira térmica.' },
    dif: { tag: 'depois da difusão · o que ela mudou', termo: 'n_dif', x: () => 'As setas mostram o que o atrito viscoso mudou. Ele só age onde há cisalhamento: junto à parede do cilindro e nas camadas que se soltam dele.' },
    div: { tag: 'velocidade provisória u* · saldo de massa', termo: 'n_pres', x: det => det.cont ? `Esta é a velocidade provisória u*: já tem inércia e atrito, mas não conserva massa. Junto ao cilindro o saldo chega a ${fmt(det.mx0 * 100, 1)} % do fluxo da célula; longe dele é quase zero. Laranja: sai mais do que entra; verde-azulado: entra mais do que sai.` : `Sem a continuidade o passo termina aqui. O saldo, que chega a ${fmt(det.mx0 * 100, 1)} % do fluxo da célula, fica no campo e se acumula a cada passo.` },
    pres: { tag: 'resolvendo a pressão', termo: 'n_pres', x: () => { const f = fotosAtuais()[st.detIt]; return st.detPart === 'frio' ? `Com ${int(f.it)} iterações partindo do zero, a força de pressão ainda erra ${fmt(f.err * 100, 1)} %. Cada varredura acerta cada célula com as quatro vizinhas, então a informação anda poucas células por vez: o campo nasce junto ao cilindro e demora a chegar ao domínio todo.` : `Com ${int(f.it)} iterações partindo da pressão do passo anterior, a força de pressão erra ${fmt(f.err * 100, 1)} %. Como a pressão muda pouco de um passo para o outro, o ponto de partida já está quase certo.`; } },
    cor: { tag: 'depois da correção · −∇p aplicado', termo: 'n_cor', x: det => `O gradiente da pressão é subtraído de u*. O maior saldo de massa numa célula caiu de ${fmt(det.mx0 * 100, 1)} % para ${fmt(det.mx1 * 100, 2)} %. As setas são a mudança feita pela pressão: a mesma parcela −∇p da equação do momento.` },
  };
  function etapaAtual() {
    const det = st.det; if (!det) return; const id = det.lista[st.detEt], E = ET[id];
    pt($('#sv-k'), `Etapa ${st.detEt + 1} de ${det.lista.length}`); pt($('#sv-info'), E.x(det));
    const tag = $('#etapa-tag'); tag.hidden = false; pt(tag, E.tag);
    $('#sv-it-box').hidden = id !== 'pres';
    if (id === 'pres') {
      const F = fotosAtuais(), sl = $('#sv-it'); sl.max = F.length - 1; st.detIt = cl(st.detIt, 0, F.length - 1); sl.value = st.detIt; pt($('#sv-it-v'), int(F[st.detIt].it));
      $$('[data-part]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.part === st.detPart)));
    }
    if (id === 'cor') visto.cor = true;
    $('#sv-ant').disabled = st.detEt === 0; $('#sv-prox').disabled = st.detEt === det.lista.length - 1;
    st.chip = E.termo; textoDeck(); montarPipe(); pedirDesenho(true); graficos();
  }
  $('#sv-abrir').addEventListener('click', () => abrirPasso(null));
  $('#sv-ant').addEventListener('click', () => { if (st.det && st.detEt > 0) { st.detEt--; etapaAtual(); } });
  $('#sv-prox').addEventListener('click', () => { if (st.det && st.detEt < st.det.lista.length - 1) { st.detEt++; etapaAtual(); } });
  $('#sv-sair').addEventListener('click', fecharPasso);
  $('#sv-it').addEventListener('input', e => { st.detIt = +e.target.value; visto.its++; etapaAtual(); });
  $$('[data-part]').forEach(b => b.addEventListener('click', () => { st.detPart = b.dataset.part; visto.partes.add(st.detPart); st.detIt = Math.min(st.detIt, fotosAtuais().length - 1); etapaAtual(); }));
  // o palco durante o passo aberto: o campo depois da etapa e, em setas, o que ela mudou
  function descreverEtapa(d) {
    const det = st.det, id = det.lista[st.detEt], P = det.por, ag = aG(), i0 = det.etapas.indexOf(P[id === 'pres' || id === 'div' ? 'dif' : id]);
    const delta = (A, B, cor, nome) => {
      for (let k = 0; k < N; k++) { const x = SOL[k] ? 0 : (B.uc[k] - A.uc[k]) / DT, y = SOL[k] ? 0 : (B.vc[k] - A.vc[k]) / DT; TX[k] = x; TY[k] = y; W[k] = Math.hypot(x, y); }
      const c = css(cor);
      return { tipo: 'vet', lut: lutTermo(c), a: 0, b: REFV, curva: 1, nome, tmin: '0', tmax: sig(REFV * ag, 2), setas: { fu: TX, fv: TY, ref: REFV, cor: c, raiz: true }, conv: ag, un: 'm/s²', vel: B };
    };
    if (id === 'ini') { const V = descFisico('vel', P.ini, W, true); V.nome = 'Velocidade no início do passo [m/s]'; return V; }
    if (id === 'adv') return delta(P.ini, P.adv, '--c-conv', 'Mudança de velocidade pela advecção [m/s²]');
    if (id === 'esc') return descFisico(st.m.energia ? 'temp' : 'esp', P.esc, W, false);
    if (id === 'emp') return delta(det.etapas[i0 - 1], P.emp, '--c-emp', 'Mudança de velocidade pelo empuxo [m/s²]');
    if (id === 'dif') return delta(det.etapas[i0 - 1], P.dif, '--c-visc', 'Mudança de velocidade pela difusão viscosa [m/s²]');
    if (id === 'cor') return delta(P.dif, P.cor, '--c-pres', 'Mudança de velocidade pela pressão [m/s²]');
    if (id === 'div') { W.set(P.dif.div); return { tipo: 'esc', lut: PAL.div, a: -.05, b: .05, curva: 2, nome: 'Saldo de massa da velocidade provisória [% do fluxo da célula]', tmin: '−5', tmax: '+5', setas: null, conv: 100, un: '%', vel: P.dif }; }
    const f = fotosAtuais()[st.detIt], p = f.p; let r = 0; for (let j = 0; j < NY; j++) r += p[2 + NX * j]; r /= NY;
    for (let k = 0; k < N; k++) W[k] = SOL[k] ? 0 : 2 * (p[k] - r) / DT;
    return { tipo: 'fisico', lut: PAL[st.paleta === 'arco' ? 'arco' : 'div'], a: -2, b: 1.2, curva: 0, iso: 14, nome: `Coeficiente de pressão depois de ${int(f.it)} iterações [Cp]`, tmin: '−2,0', tmax: '1,2', setas: null, conv: 1, un: 'Cp', vel: P.dif };
  }

  // ---- gráficos do solver ----
  function interp(F, it) {   // erro numa iteração qualquer, interpolado em escala logarítmica
    for (let i = 1; i < F.length; i++) if (F[i].it >= it) { const a = F[i - 1], b = F[i], t = (Math.log(it + 1) - Math.log(a.it + 1)) / (Math.log(b.it + 1) - Math.log(a.it + 1)); return Math.exp(Math.log(a.err) + t * (Math.log(b.err) - Math.log(a.err))); }
    return F[F.length - 1].err;
  }
  function notaConv() {
    const el = $('#res-n'); if (!conv || !conv.frio) { pt(el, 'Ligue a continuidade para medir como a pressão converge.'); return; }
    const F = conv.frio.fotos, M = conv.fotosP, n = conv.iter, e1 = interp(F, n) * 100, e2 = M[M.length - 1].err * 100; let n1 = 0;
    for (let i = 1; i < F.length; i++) if (F[i].err < .01) { const a = F[i - 1], b = F[i], t = (Math.log(a.err) - Math.log(.01)) / (Math.log(a.err) - Math.log(b.err)); n1 = Math.round(Math.exp(Math.log(a.it + 1) + t * (Math.log(b.it + 1) - Math.log(a.it + 1))) / 10) * 10; break; }
    pt(el, n1 ? `Partindo do zero, ${int(n)} iterações ainda deixam ${fmt(e1, 0)} % de erro na força de pressão; seriam precisas cerca de ${int(n1)} para chegar a 1 %. Partindo da pressão do passo anterior, as mesmas ${int(n)} deixam ${fmt(e2, 1)} %.`
      : `Partindo do zero, ${int(n)} iterações ainda deixam ${fmt(e1, 0)} % de erro na força de pressão, e nem 600 chegam a 1 %. Partindo da pressão do passo anterior, as mesmas ${int(n)} deixam ${fmt(e2, 1)} %.`);
  }
  function grafConv() {
    const cv = $('#res-c'), ctx = cv.getContext('2d'), w = cv.width, h = cv.height, s = DPR;
    ctx.clearRect(0, 0, w, h); if (w < 60) return; ctx.textBaseline = 'middle'; ctx.setLineDash([]);
    if (!conv || !conv.frio) { escreve(ctx, pedindoDet ? 'Medindo a convergência…' : 'Sem equação de pressão', w / 2, h / 2, MU(), 'center', 10.5); return; }
    const L = 44 * s, R = 10 * s, T = 20 * s, B = 22 * s, xm = Math.log10(601), X = it => L + Math.log10(it + 1) / xm * (w - L - R), Y = e => T + (0 - Math.log10(cl(e, .002, 1))) / 2.7 * (h - T - B), ti = TI();
    ctx.lineWidth = s;
    for (const e of [1, .1, .01]) { ctx.strokeStyle = ti; ctx.globalAlpha = .16; ctx.beginPath(); ctx.moveTo(L, Y(e)); ctx.lineTo(w - R, Y(e)); ctx.stroke(); ctx.globalAlpha = 1; escreve(ctx, int(e * 100) + ' %', L - 5 * s, Y(e), SO(), 'right', 9); }
    for (const it of [1, 10, 100, 600]) escreve(ctx, int(it), X(it), h - 9 * s, SO(), 'center', 9);
    escreve(ctx, 'iterações', w - R, h - 9 * s - 12 * s, SO(), 'right', 8.5);
    const xi = X(conv.iter); ctx.strokeStyle = ti; ctx.globalAlpha = .5; ctx.setLineDash([3 * s, 3 * s]); ctx.beginPath(); ctx.moveTo(xi, T); ctx.lineTo(xi, h - B); ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = 1;
    escreve(ctx, `${int(conv.iter)} por passo`, xi + 4 * s, T + 5 * s, MU(), 'left', 8.5);
    for (const [F, cor] of [[conv.frio.fotos, css('--orange')], [conv.fotosP, css('--teal')]]) {
      ctx.strokeStyle = cor; ctx.fillStyle = cor; ctx.lineWidth = 2 * s; ctx.beginPath(); F.forEach((f, i) => { const x = X(f.it), y = Y(f.err); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.stroke();
      for (const f of F) { ctx.beginPath(); ctx.arc(X(f.it), Y(f.err), 2.2 * s, 0, Math.PI * 2); ctx.fill(); }
    }
    if (st.det && st.det.lista[st.detEt] === 'pres') { const f = fotosAtuais()[st.detIt]; ctx.strokeStyle = ti; ctx.lineWidth = 2 * s; ctx.beginPath(); ctx.arc(X(f.it), Y(f.err), 6 * s, 0, Math.PI * 2); ctx.stroke(); }
    let x = L;
    for (const [t, cor] of [['do zero', css('--orange')], ['do passo anterior', css('--teal')]]) { ctx.fillStyle = cor; ctx.fillRect(x, 8 * s, 10 * s, 4 * s); x += 14 * s; x += escreve(ctx, t, x, 10 * s, MU(), 'left', 9) + 12 * s; }
  }
  const hist = []; let tFis = 0, stAtual = 0, nQuadro = 0;
  function grafico() {
    const cv = $('#grafico'), ctx = cv.getContext('2d'), w = cv.width, h = cv.height, s = DPR;
    ctx.clearRect(0, 0, w, h); if (hist.length < 2 || w < 60) return;
    let lo = Infinity, hi = -Infinity; for (const p of hist) { lo = Math.min(lo, p.cl, p.cd); hi = Math.max(hi, p.cl, p.cd); }
    const pad = Math.max(.1, (hi - lo) * .12); lo -= pad; hi += pad;
    const L = 36 * s, R = 8 * s, T = 20 * s, B = 20 * s, t0 = hist[0].t, t1 = hist[hist.length - 1].t, X = t => L + (t - t0) / Math.max(1e-9, t1 - t0) * (w - L - R), Y = v => T + (hi - v) / (hi - lo) * (h - T - B);
    ctx.textBaseline = 'middle'; ctx.lineWidth = s;
    const passo = Math.pow(10, Math.floor(Math.log10((hi - lo) / 2))), p2 = (hi - lo) / passo > 8 ? passo * 2 : passo;
    for (let v = Math.ceil(lo / p2) * p2; v <= hi; v += p2) { const y = Y(v); ctx.strokeStyle = css('--line'); ctx.beginPath(); ctx.moveTo(L, y); ctx.lineTo(w - R, y); ctx.stroke(); escreve(ctx, fmt(v, p2 < 1 ? 1 : 0), L - 5 * s, y, SO(), 'right', 9); }
    escreve(ctx, fmt(t0, 1) + ' s', L, h - 9 * s, SO(), 'left', 9); escreve(ctx, fmt(t1, 1) + ' s', w - R, h - 9 * s, SO(), 'right', 9);
    for (const [k, cor] of [['cd', css('--teal')], ['cl', css('--orange')]]) { ctx.beginPath(); ctx.lineWidth = 1.8 * s; ctx.strokeStyle = cor; ctx.lineJoin = 'round'; hist.forEach((p, i) => { const x = X(p.t), y = Y(p[k]); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.stroke(); }
    escreve(ctx, 'Cl', L, 10 * s, css('--orange'), 'left', 10.5); escreve(ctx, 'Cd', L + 28 * s, 10 * s, css('--teal'), 'left', 10.5);
  }
  function graficos() { if (st.rl !== 'solver') return; grafConv(); grafico(); }

  // ---- monitores ----
  function aoQuadro(m) {
    if (pedindoDet && !m.det) { const c = caso.A; c.esperando = true; c.w.postMessage({ tipo: 'detalhe', id: ++c.id }); }
    tFis += m.feitos * DT * H / U();
    hist.push({ t: tFis, cl: m.mon.Cl, cd: m.mon.Cd, qi: vazao(m.mon.qin || 1), qo: vazao(m.mon.q) }); if (hist.length > 700) hist.shift();
    if (m.tm && !m.det) { const f = TM.tot ? .12 : 1; for (const k in TM) TM[k] += ((m.tm[k] || 0) - TM[k]) * f; }
    stAtual = m.mon.St; nQuadro++;
    if (nQuadro % 3 === 0 || m.det || !st.rodando) {
      pt($('#tempo'), fmt(tFis, 2) + ' s');
      pt($('#mo-cd'), m.passo > 30 ? fmt(m.mon.Cd, 2) : '—'); pt($('#mo-cl'), m.passo > 30 ? fmt(m.mon.Cl, 2) : '—');
      pt($('#mo-st'), m.mon.St > 0 ? fmt(m.mon.St, 3) : m.passo > 300 ? '0' : '—'); pt($('#mo-nu'), st.m.energia && m.passo > 30 ? fmt(m.mon.Nu, 1) : '—');
      const q = m.mon.q / (m.mon.qin || 1) * 100, el = $('#mo-massa'); pt(el, fmt(q, 1) + ' %'); el.parentElement.classList.toggle('alerta', Math.abs(q - 100) > 1.5);
      graficos();
    }
    if (nQuadro % 8 === 0 && st.rl === 'solver') tempos();
    if (nQuadro % 30 === 0) valoresFluent();
  }

  // ---- leitura sob o cursor ----
  function leitura(p) {
    const el = $('#leitura'), V = VA, dx = p.x - XC, dy = p.y - YC;
    if (!V || !p.dentro || V.tipo === 'dom' || dx * dx + dy * dy < RC * RC) { el.hidden = true; return; }
    pt(el, `${sig(amostra(W, p.x, p.y) * (V.conv || 1), 3)} ${V.un || ''}`); el.hidden = false; el.style.left = p.px + 'px'; el.style.top = p.py + 'px';
  }

  // ---- ferramentas e ponteiro ----
  const telaEl = $('#tela-a');
  let arrasto = null, timerFonte = 0;
  function noGrid(e) {
    const r = telaEl.getBoundingClientRect(), R = telaA.R, px = e.clientX - r.left, py = e.clientY - r.top, fx = (px * DPR - R.x) / R.w, fy = (py * DPR - R.y) / R.h;
    return { x: vista.x0 + fx * (vista.x1 - vista.x0), y: vista.y1 - fy * (vista.y1 - vista.y0), px, py, esc: (vista.x1 - vista.x0) / (R.w / DPR), dentro: fx >= 0 && fx <= 1 && fy >= 0 && fy <= 1 };
  }
  const enviarFonte = (x, y) => { caso.A && caso.A.w.postMessage({ tipo: 'fonte', x, y }); };
  const porSonda = p => { const x = cl(p.x, 1, NX - 1), y = cl(p.y, 1, NY - 1); visto.sonda += Math.hypot(x - st.sonda.x, y - st.sonda.y); st.sonda = { x, y }; };
  telaEl.addEventListener('pointerdown', e => {
    if (e.button > 0) return;
    const p = noGrid(e); telaEl.setPointerCapture(e.pointerId);
    if (st.ferr === 'sonda') { porSonda(p); arrasto = { tipo: 'sonda' }; }
    else if (st.ferr === 'vc') {
      const v = st.vc, xa = Math.min(v.x0, v.x1), xb = Math.max(v.x0, v.x1), ya = Math.min(v.y0, v.y1), yb = Math.max(v.y0, v.y1), tol = 10 * p.esc;
      if (Math.abs(p.x - xb) < tol && Math.abs(p.y - ya) < tol) arrasto = { tipo: 'canto' };
      else if (p.x > xa && p.x < xb && p.y > ya && p.y < yb) arrasto = { tipo: 'mover', dx: p.x - xa, dy: p.y - ya, w: xb - xa, h: yb - ya };
      else { st.vc = { x0: cl(p.x, 0, NX), y0: cl(p.y, 0, NY), x1: cl(p.x + 4, 0, NX), y1: cl(p.y - 4, 0, NY) }; arrasto = { tipo: 'novo' }; }
    } else if (st.ferr === 'elem') {
      let x = cl(p.x, 6, NX - 8), y = cl(p.y, 6, NY - 6); const dx = x - XC, dy = y - YC, m = Math.hypot(dx, dy) || 1;
      if (m < RC + 7) { x = XC + dx / m * (RC + 7); y = YC + dy / m * (RC + 7); }
      soltarElemento(x, y); st.lente = 'elem'; if (st.det) fecharPasso(); sincronizar();
    } else if (st.ferr === 'forca') { arrasto = { tipo: 'forca', x: p.x, y: p.y }; porSonda(p); }
    else if (st.ferr === 'fumaca') {
      if (!st.m.especie) { modelo('especie', true); st.ferr = 'fumaca'; }
      visto.fumaca = true; arrasto = { tipo: 'fumaca', x: p.x, y: p.y }; enviarFonte(p.x, p.y); porSonda(p);
      clearInterval(timerFonte); timerFonte = setInterval(() => arrasto && arrasto.tipo === 'fumaca' && enviarFonte(arrasto.x, arrasto.y), 70);
    }
    pedirDesenho(true);
  });
  telaEl.addEventListener('pointermove', e => {
    const p = noGrid(e);
    if (!arrasto) { if (e.pointerType === 'mouse') leitura(p); return; }
    $('#leitura').hidden = true;
    if (arrasto.tipo === 'sonda') porSonda(p);
    else if (arrasto.tipo === 'canto' || arrasto.tipo === 'novo') { st.vc.x1 = cl(p.x, 0, NX); st.vc.y1 = cl(p.y, 0, NY); visto.vc += 1; }
    else if (arrasto.tipo === 'mover') { const x0 = cl(p.x - arrasto.dx, 0, NX - arrasto.w), y0 = cl(p.y - arrasto.dy, 0, NY - arrasto.h); visto.vc += Math.hypot(x0 - st.vc.x0, y0 - st.vc.y0); st.vc = { x0, y0, x1: x0 + arrasto.w, y1: y0 + arrasto.h }; }
    else if (arrasto.tipo === 'forca') {
      const fx = cl((p.x - arrasto.x) * .03, -.2, .2), fy = cl((p.y - arrasto.y) * .03, -.2, .2);
      if (Math.hypot(fx, fy) > .002) { st.forca = { x: p.x, y: p.y, fx, fy, r: 3, t: performance.now() }; porSonda(p); caso.A && caso.A.w.postMessage({ tipo: 'forca', x: p.x, y: p.y, fx, fy, r: 3 }); }
      arrasto.x = p.x; arrasto.y = p.y;
    } else if (arrasto.tipo === 'fumaca') { arrasto.x = p.x; arrasto.y = p.y; enviarFonte(p.x, p.y); porSonda(p); }
    pedirDesenho(true);
  });
  const soltar = () => {
    if (arrasto && arrasto.tipo === 'forca') caso.A && caso.A.w.postMessage({ tipo: 'forca', fim: true });
    if (arrasto && (arrasto.tipo === 'canto' || arrasto.tipo === 'novo')) { const v = st.vc; st.vc = { x0: Math.min(v.x0, v.x1), y0: Math.min(v.y0, v.y1), x1: Math.max(v.x0, v.x1), y1: Math.max(v.y0, v.y1) }; }
    arrasto = null; clearInterval(timerFonte); pedirDesenho(true);
  };
  telaEl.addEventListener('pointerup', soltar); telaEl.addEventListener('pointercancel', soltar);
  telaEl.addEventListener('pointerleave', () => { $('#leitura').hidden = true; });
  telaEl.addEventListener('wheel', e => { if (!e.ctrlKey && !e.metaKey) return; e.preventDefault(); const p = noGrid(e); zoomEm(e.deltaY > 0 ? 1.25 : .8, cl(p.x, 0, NX), cl(p.y, 0, NY)); }, { passive: false });
  $('#zm-tudo').addEventListener('click', () => irPara(VTODO)); $('#zm-cil').addEventListener('click', () => irPara(VCIL));
  $('#zm-menos').addEventListener('click', () => zoomEm(1.4)); $('#zm-mais').addEventListener('click', () => zoomEm(.7));
  $('#tela-cheia').addEventListener('click', () => { const el = $('#bancada'); if (document.fullscreenElement) document.exitFullscreen(); else if (el.requestFullscreen) el.requestFullscreen().catch(() => { /* recusado pelo navegador */ }); });
  document.addEventListener('fullscreenchange', ajustar);

  function ferramenta(f) {
    st.ferr = f;
    if (f === 'forca') { definirEq('mom'); st.chip = 'F'; st.termo = null; textoDeck(); }
    if (f === 'fumaca') { if (!st.m.especie) { modelo('especie', true); st.ferr = f; } definirEq('especie'); st.chip = 'fonteY'; st.termo = null; st.campo = 'esp'; textoDeck(); }
    if (f === 'vc') { if (st.eq !== 'massa') definirEq('massa'); st.lente = 'ponto'; }
    if (f === 'elem') { if (st.eq !== 'mom') definirEq('mom'); st.lente = 'elem'; }
    sincronizar();
  }
  $$('.ferr [data-ferr]').forEach(b => b.addEventListener('click', () => ferramenta(b.dataset.ferr)));

  // ---- estado e controles ----
  const reS = $('#re');
  const reDe = s => 20 * Math.pow(100, s / 1000), deRe = Re => Math.round(1000 * Math.log(Re / 20) / Math.log(100));
  const redondo = r => r < 100 ? Math.round(r) : r < 1000 ? Math.round(r / 5) * 5 : Math.round(r / 10) * 10;
  function rotulos() {
    pt($('#re-v'), int(st.Re)); pt($('#re-u'), `U = ${fmt(U(), 3)} m/s`); pt($('#dT-v'), `${st.dT} K`);
    pt($('#n-re'), int(st.Re)); pt($('#n-ri'), fmt(Ri(), 2)); pt($('#n-ri-t'), st.m.empuxo ? 'empuxo ÷ inércia' : 'empuxo ÷ inércia · desligado');
  }
  function sincronizar() {
    for (const el of $$('input[data-m]')) el.checked = !!st.m[el.dataset.m];
    for (const b of $$('.campos [data-campo]')) { const ex = CAMPOS[b.dataset.campo].exige; b.disabled = !!ex && !st.m[ex]; }
    if (CAMPOS[st.campo].exige && !st.m[CAMPOS[st.campo].exige]) st.campo = 'vel';
    if (st.termo && TERMO[st.termo].eq !== st.eq) st.termo = null;
    if (!disponivel(st.eq)) definirEq('mom');
    const livre = !st.termo && !st.dom && !st.det;
    $$('.campos [data-campo]').forEach(b => b.setAttribute('aria-selected', String(livre && b.dataset.campo === st.campo)));
    $$('[data-ov]').forEach(b => b.setAttribute('aria-pressed', String(!!st.ov[b.dataset.ov])));
    $$('.ferr [data-ferr]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.ferr === st.ferr)));
    $('#palco').dataset.ferr = st.ferr;
    $$('#eq-tabs [data-eq]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.eq === st.eq)));
    const bt = $('#dom-bt'); bt.disabled = !EQ[st.eq].dom; bt.setAttribute('aria-pressed', String(st.dom));
    $$('[data-lente]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.lente === st.lente)));
    reS.value = deRe(st.Re); $('#dT').value = st.dT;
    $$('[data-bc-entrada]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.bcEntrada === st.bc.entrada)));
    $$('[data-bc-paredes]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.bcParedes === st.bc.paredes)));
    pt($('#bc-lados-t'), st.bc.paredes === 'parede' ? 'wall' : 'symmetry');
    pt($('#bc-cil'), st.m.energia ? `u = 0 · ${25 + st.dT} °C` : 'sem escorregamento');
    pt($('#bc-vazao'), st.bc.entrada === 'puls' ? `ṁ = ${sig(vazao(1), 3)} g/s por metro de profundidade, em média, imposta na entrada` : `ṁ = ${sig(vazao(1), 3)} g/s por metro de profundidade, imposta na entrada`);
    rotulos(); sistema(); valoresFluent(); montarPipe();
    for (const b of cartoes) b.setAttribute('aria-pressed', String(b.dataset.term === st.chip));
    if (caso.A) config(caso.A); if (caso.B) config(caso.B);
    pedirDesenho(true);
  }
  function modelo(k, v) {
    if (st.det) fecharPasso();
    st.m[k] = v;
    if (k === 'empuxo' && v) st.m.energia = true;
    if (k === 'energia' && !v) st.m.empuxo = false;
    if (k === 'continuidade' && !v) visto.contOff = true;
    if (k === 'les' && !v) visto.lesOff = true;
    st.termo = null; st.chip = null; st.dom = false; arestaSel = null;
    if (v) {
      if (k === 'energia' || k === 'empuxo') st.campo = 'temp';
      if (k === 'especie') { st.campo = 'esp'; st.ov.particulas = false; }
      if (k === 'les') st.campo = 'nut';
      definirEq(EQ_DE_MODELO[k]); if (st.guia !== k) abrirGuia(k, false);
      if (k === 'empuxo') { st.chip = 'emp'; st.termo = 'emp'; textoDeck(); }
    } else {
      definirEq(k === 'continuidade' ? 'massa' : 'mom');
      if (k === 'continuidade') { st.chip = 'div'; st.termo = 'div'; textoDeck(); irPara(VTODO); }
    }
    sincronizar();
    const tit = { continuidade: 'Continuidade', energia: 'Energia', empuxo: 'Gravidade e empuxo', especie: 'Espécies', les: 'Turbulência' }[k];
    mudou(k === 'continuidade' ? (v ? 'massaOn' : 'massaOff') : v ? k : k + 'Off', (v ? '+ ' : '− ') + tit);
    if (k === 'les' && v) setTimeout(() => { if (st.m.les) mudou('les', '+ Turbulência'); }, 1500);
  }
  function contorno(k, v) {
    if (st.bc[k] === v) return; st.bc[k] = v; if (st.det) fecharPasso();
    definirEq('bc'); st.chip = k === 'entrada' ? 'entrada' : 'lados'; st.termo = null; visto.termos.add(st.chip); irPara(VTODO);
    if (st.guia !== 'contornos') abrirGuia('contornos', false);
    textoDeck(); sincronizar();
    mudou(k === 'entrada' ? (v === 'puls' ? 'bcPuls' : 'bcConst') : (v === 'parede' ? 'bcParede' : 'bcSim'), k === 'entrada' ? (v === 'puls' ? 'Entrada pulsante' : 'Entrada constante') : (v === 'parede' ? 'Topo e fundo · parede' : 'Topo e fundo · simetria'));
  }
  for (const el of $$('input[data-m]')) el.addEventListener('change', e => modelo(el.dataset.m, e.target.checked));
  $$('#eq-tabs [data-eq]').forEach(b => b.addEventListener('click', () => {
    const eq = b.dataset.eq;
    if (!disponivel(eq)) { modelo(MODELO_DE_EQ[eq], true); return; }
    arestaSel = null; definirEq(eq); const g = GUIA_DE_EQ(eq); if (g !== st.guia) abrirGuia(g, false);
    sincronizar();
  }));
  $$('.eqr-b').forEach(b => b.addEventListener('click', () => {
    const k = b.parentElement.dataset.row;
    if (k === 'emp') { if (!st.m.empuxo) { modelo('empuxo', true); return; } definirEq('mom'); if (st.chip !== 'emp') escolherTermo('emp'); return; }
    if (!disponivel(k)) { modelo(MODELO_DE_EQ[k], true); return; }
    arestaSel = null; definirEq(k); sincronizar();
  }));
  $('#dom-bt').addEventListener('click', () => { st.dom = !st.dom; if (st.dom) { st.termo = null; st.chip = null; if (st.det) fecharPasso(); } textoDeck(); sincronizar(); });
  $$('[data-lente]').forEach(b => b.addEventListener('click', () => { st.lente = b.dataset.lente; if (st.lente === 'parede') st.ov.parede = true; sincronizar(); }));
  $$('.campos [data-campo]').forEach(b => b.addEventListener('click', () => {
    if (b.disabled) return; st.campo = b.dataset.campo; st.termo = null; st.dom = false; if (st.det) fecharPasso();
    if (st.chip && TERMO[st.chip].tipo !== 'bc') st.chip = null; textoDeck(); sincronizar();
  }));
  $$('[data-ov]').forEach(b => b.addEventListener('click', () => { const k = b.dataset.ov; st.ov[k] = !st.ov[k]; if (k === 'particulas') limparRastros(); sincronizar(); }));
  reS.addEventListener('input', () => { st.Re = redondo(reDe(+reS.value)); rotulos(); valoresFluent(); });
  reS.addEventListener('change', () => { hist.length = 0; conv = null; if (st.det) fecharPasso(); if (caso.A) config(caso.A); if (caso.B) config(caso.B); mudou('base', `Re = ${int(st.Re)}`); });
  $('#dT').addEventListener('input', e => { st.dT = +e.target.value; visto.dT = true; rotulos(); valoresFluent(); pt($('#bc-cil'), st.m.energia ? `u = 0 · ${25 + st.dT} °C` : 'sem escorregamento'); if (caso.A) config(caso.A); pedirDesenho(true); });
  $('#play').addEventListener('click', e => { if (st.det) { st.rodando = true; fecharPasso(); } else st.rodando = !st.rodando; e.currentTarget.setAttribute('aria-pressed', String(st.rodando)); cicloTodos(); });
  $('#passo1').addEventListener('click', () => { if (st.det) fecharPasso(); st.rodando = false; $('#play').setAttribute('aria-pressed', 'false'); umPasso(); });
  $$('[data-vel]').forEach(b => b.addEventListener('click', () => { st.vel = +b.dataset.vel; $$('[data-vel]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); }));
  $('#reiniciar').addEventListener('click', () => {
    if (st.det) fecharPasso();
    for (const c of [caso.A, caso.B]) if (c) { c.w.postMessage({ tipo: 'reiniciar' }); config(c); c.part = null; }
    hist.length = 0; tFis = 0; elem = null; conv = null; limparRastros(); mudou('base', 'Reinício'); cicloTodos();
  });
  $$('[data-bc-entrada]').forEach(b => b.addEventListener('click', () => contorno('entrada', b.dataset.bcEntrada)));
  $$('[data-bc-paredes]').forEach(b => b.addEventListener('click', () => contorno('paredes', b.dataset.bcParedes)));
  $('#paleta').addEventListener('change', e => { st.paleta = e.target.value; pedirDesenho(true); });
  $('#comparar').addEventListener('change', e => {
    st.comparar = e.target.checked; $('#tela-b').hidden = !st.comparar; $('#tag-a').hidden = !st.comparar;
    if (st.comparar) { if (!telaB) telaB = novaTela('b'); if (!caso.B) { caso.B = novoWorker('B'); config(caso.B); ciclo(caso.B); } }
    else if (caso.B) { caso.B.w.terminate(); caso.B = null; }
    ajustar();
  });

  // ---- valores para o Fluent ----
  function valoresFluent() {
    if (!$('#fv-u')) return;
    const u = U(), stv = stAtual > 0 ? stAtual : .2, per = D / (stv * u), dt = per / 60;
    pt($('#fv-u'), st.bc.entrada === 'puls' ? `${sig(u, 3)} m/s (média)` : `${sig(u, 3)} m/s`);
    pt($('#fv-ent'), st.bc.entrada === 'puls' ? `velocity-inlet · U(t) = U[1 + 0,3 sen(2πt/T)], T = ${sig(periodoPuls(), 2)} s` : 'velocity-inlet · constante');
    pt($('#fv-lados'), st.bc.paredes === 'parede' ? 'wall · no slip' : 'symmetry');
    pt($('#fv-re'), int(st.Re));
    pt($('#fv-tw'), st.m.energia ? `${fmt(T0 + st.dT, 2)} K` : 'sem energia');
    pt($('#fv-rho'), st.m.empuxo ? 'boussinesq · 1,184 kg/m³' : 'constante · 1,184 kg/m³');
    pt($('#fv-g'), st.m.empuxo ? 'y = −9,81 m/s²' : 'desligada');
    pt($('#fv-visc'), st.m.les ? 'SST k–ω (2D) ou LES (3D)' : st.Re > 200 ? 'SST k–ω' : 'Laminar');
    pt($('#fv-per'), `${sig(per, 3)} s`); pt($('#fv-dt'), `${sig(dt, 2)} s`);
    pt($('#fv-tot'), `${sig(per * 15, 3)} s · ${int(15 * 60)} passos`);
    pt($('#fv-nota'), st.m.empuxo ? `Operating Density = 1,184 kg/m³ e β = ${fmt(1 / T0, 6)} 1/K em Materials. Ri = ${fmt(Ri(), 2)}.`
      : st.m.especie ? 'Para o traçador, use Species Transport com duas espécies ou um escalar definido pelo usuário (UDS), com valor 1 nas faixas da entrada.'
      : 'Passo de tempo com 60 passos por período de desprendimento e 20 iterações por passo.');
  }

  // ---- volume de controle da seção 02 ----
  let selL = null;
  function camadas() {
    for (const el of $$('.vc-l')) el.classList.toggle('on', !selL || el.dataset.l === selL);
    for (const el of $$('#geral .t')) el.classList.toggle('on', el.dataset.l === selL);
    for (const el of $$('.termos div')) el.classList.toggle('on', el.dataset.l === selL);
  }
  $$('#geral .t').forEach(b => {
    b.addEventListener('click', () => { selL = selL === b.dataset.l ? null : b.dataset.l; camadas(); });
    b.addEventListener('mouseenter', () => { if (!selL) for (const el of $$('.vc-l')) el.classList.toggle('on', el.dataset.l === b.dataset.l); });
    b.addEventListener('mouseleave', camadas);
  });
  const PHI = [
    { phi: '1', gam: '0', src: 'S', sub: 'm', t: 'Com φ = 1 não há difusão, e a equação vira a conservação de massa. A fonte só existe quando massa é injetada ou retirada, como na evaporação.' },
    { phi: '<b>u</b>', gam: 'μ', src: 'S', sub: 'u', t: 'Com φ = u, Γ é a viscosidade e a fonte reúne o gradiente de pressão e as forças de volume. É a equação do momento, uma para cada direção.' },
    { phi: '<i>h</i>', gam: 'k/c<sub>p</sub>', src: 'S', sub: 'h', t: 'Com φ = h (entalpia), Γ é a condutividade dividida pelo calor específico, e a fonte inclui calor gerado e trabalho da pressão. É a equação da energia.' },
    { phi: '<i>Y</i><sub>i</sub>', gam: 'ρD', src: 'R', sub: 'i', t: 'Com φ = Yi, Γ é o coeficiente de difusão de massa e a fonte é a taxa de reação. Uma equação por espécie, menos uma.' },
    { phi: '<i>k</i>', gam: 'μ+μ<sub>t</sub>/σ', src: 'G−Y', sub: 'k', t: 'Com φ = k ou ω, a fonte é produção menos dissipação de turbulência. São as duas equações do modelo SST k–ω.' },
  ];
  function phi(i) {
    const p = PHI[i]; if (!$('#phi-res')) return;
    $$('#geral .phi').forEach(el => { el.innerHTML = el.tagName === 'SUB' ? p.sub : p.phi; });
    $$('#geral .gam').forEach(el => { el.innerHTML = p.gam; });
    $$('#geral .src').forEach(el => { el.innerHTML = p.src; });
    $('#phi-res').textContent = p.t;
    $$('#phi-bt button').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.phi === i)));
  }
  $$('#phi-bt button').forEach(b => b.addEventListener('click', () => phi(+b.dataset.phi)));
  phi(0); camadas();

  // ---- início ----
  addEventListener('vg-theme', () => { barraChave = ''; chaveMarcas = ''; montarDeck(); });
  montarGrafo(); reS.value = deRe(st.Re);
  montarDeck(); abrirGuia('contornos', false); sincronizar(); mudou('bcIntro', 'Condições de contorno');
  fetch('assets/inicial.bin?v=20261109-1').then(r => r.ok ? r.arrayBuffer() : null).catch(() => null).then(buf => {
    inicial = buf;
    caso.A = novoWorker('A'); config(caso.A); ajustar(); ciclo(caso.A);
  });
})();
