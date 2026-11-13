// EngenhaLab · Estúdio de metalurgia: forno de micro-ondas, equações vivas, lentes, sistema e solver
import { Forno, MAT, REACOES, CINETICA, MAGNETISMO, T_WUSTITA, ETAPAS, PADRAO } from './forno.js?v=20261111-1';

const $ = s => document.querySelector(s), $$ = s => Array.from(document.querySelectorAll(s));
const raiz = document.documentElement;
const claro = () => raiz.getAttribute('data-theme') === 'light';
let CORES = {};
const css = v => CORES[v] || (CORES[v] = getComputedStyle(raiz).getPropertyValue(v).trim());
const fmt = (x, c = 2) => Number.isFinite(x) ? (Math.abs(x) < .5 * 10 ** -c ? 0 : x).toLocaleString('pt-BR', { minimumFractionDigits: c, maximumFractionDigits: c }) : '—';
const sig = (x, s = 3) => { if (!Number.isFinite(x) || x === 0) return '0'; const c = Math.max(0, s - 1 - Math.floor(Math.log10(Math.abs(x)))); return fmt(x, Math.min(c, 6)); };
const int = x => Number.isFinite(x) ? Math.round(x).toLocaleString('pt-BR') : '—';
const pct = (x, c = 0) => fmt(x * 100, c) + ' %';
const C = T => T - 273.15;
const cl = (v, a, b) => Math.max(a, Math.min(b, v));
function pt(el, t) { if (el && el._pt !== t) { el._pt = t; el.textContent = t; } }

// ---- o lote ----
const NX = 90, NY = 50;
const EXP = {
  seca: { umidade: 0, secagem: true, reacao: false },
  umida: { secagem: true, reacao: false },
  reduz: { secagem: true, reacao: true },
};
const st = {
  exp: 'reduz', umidade: PADRAO.umidade,
  par: { pot: PADRAO.pot, retorno: PADRAO.retorno, duracao: PADRAO.duracao, h: PADRAO.h, captura: PADRAO.captura, arraste: PADRAO.arraste, Fo: PADRAO.Fo },
  campo: 'T', ov: { ondas: true, iso: false, fluxo: false, frentes: false, malha: false },
  eq: 'bc', chip: null, termo: null, dom: false, lente: 'celula', rl: 'guia', guia: 1, ferr: 'sonda',
  sonda: { i: 18, j: 25 }, vel: 30, rodando: false, det: false, feitas: {}, nivel: 'forno',
};
function parametros() {
  const e = EXP[st.exp];
  return { ...st.par, umidade: st.exp === 'seca' ? 0 : st.umidade, secagem: e.secagem, reacao: e.reacao };
}
let F = new Forno(parametros(), NX, NY);
const K = () => st.sonda.i + NX * st.sonda.j;

// ---- paletas ----
const hex = h => { h = h.replace('#', ''); if (h.length === 3) h = h.split('').map(c => c + c).join(''); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; };
const mistura = (a, b, t) => { const A = hex(a), B = hex(b); return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, '0')).join(''); };
function rampa(paradas) {
  const lut = new Uint8ClampedArray(256 * 4);
  for (let i = 0; i < 256; i++) {
    const x = i / 255; let k = 0; while (k < paradas.length - 2 && x > paradas[k + 1][0]) k++;
    const [x0, c0] = paradas[k], [x1, c1] = paradas[k + 1], a = cl((x - x0) / (x1 - x0 || 1), 0, 1), A = hex(c0), B = hex(c1);
    for (let j = 0; j < 3; j++) lut[i * 4 + j] = A[j] + (B[j] - A[j]) * a;
    lut[i * 4 + 3] = 255;
  }
  lut.id = ++rampa.n; return lut;
}
rampa.n = 0;
let PAL = {}, LUTT = {};
function montarPaletas() {
  const l = claro(); LUTT = {};
  PAL = {
    T: rampa(l ? [[0, '#f6f5ef'], [.2, '#f7dcb3'], [.45, '#ec8a4f'], [.72, '#b5362b'], [1, '#4a0f22']]
               : [[0, '#07111b'], [.18, '#2a1838'], [.4, '#7a2b45'], [.65, '#e0603a'], [.86, '#ffb867'], [1, '#fff3d6']]),
    q: rampa(l ? [[0, '#f6f6f2'], [.35, '#f6d7a7'], [.7, '#e08a2c'], [1, '#7a3b05']]
               : [[0, '#07111b'], [.3, '#3b2a12'], [.65, '#d98a2b'], [1, '#fff0c2']]),
    agua: rampa(l ? [[0, '#f6f6f2'], [.4, '#bcd6f2'], [.75, '#4a86c8'], [1, '#173f7a']]
                  : [[0, '#07111b'], [.35, '#133052'], [.7, '#3d7fd0'], [1, '#d6ecff']]),
    met: rampa(l ? [[0, '#f6f6f2'], [.4, '#d5dde1'], [.75, '#7d8d97'], [1, '#26323a']]
                 : [[0, '#07111b'], [.35, '#28343c'], [.7, '#8fa2ad'], [1, '#f4f8fa']]),
    dp: rampa(l ? [[0, '#5a1f63'], [.3, '#b34f8a'], [.6, '#f1b38c'], [1, '#f6f6f2']]
                : [[0, '#fff0e0'], [.3, '#e59b75'], [.65, '#7d2e6c'], [1, '#07111b']]),
    div: rampa(l ? [[0, '#0b4f57'], [.22, '#2c9aa0'], [.42, '#bfe2de'], [.5, '#f7f7f2'], [.58, '#f2d0b2'], [.78, '#d4733a'], [1, '#6e2a0c']]
                 : [[0, '#a6efe8'], [.2, '#3fb3bd'], [.4, '#123a4c'], [.5, '#08121c'], [.6, '#4a2718'], [.8, '#e98a46'], [1, '#ffe0b8']]),
  };
}
function lutTermo(cor) {
  const k = cor + claro(); if (LUTT[k]) return LUTT[k];
  const f = claro() ? '#f6f6f2' : '#07111b';
  return LUTT[k] = rampa(claro() ? [[0, f], [.3, mistura(f, cor, .25)], [.75, cor], [1, mistura(cor, '#000000', .35)]]
                                 : [[0, f], [.3, mistura(f, cor, .35)], [.8, cor], [1, mistura(cor, '#ffffff', .65)]]);
}
montarPaletas();

// ---- grandezas por célula ----
const cap = () => F.ms * MAT.cp;                       // J/K por célula
const porVol = Q => Q / (F.V * Math.max(F.ultimo ? F.ultimo.dt : F.dt, 1e-9)) / 1e6;   // J no passo → W/cm³
const fracFe = (k, f) => f[k] / F.nFe0;
const umid0 = () => F.ms * F.p.umidade;
// as parcelas da energia, em W/cm³, medidas no último passo aceito
const ENERGIA = {
  cond: k => porVol(F.cond[k]),
  mo: k => F.q[k] / 1e6,
  ev: k => -porVol(F.evap[k] * MAT.L),
  reac: k => F.qr[k] / 1e6,
  perda: k => -porVol(F.perda[k]),
};
ENERGIA.acc = k => ENERGIA.cond(k) + ENERGIA.mo(k) + ENERGIA.ev(k) + ENERGIA.reac(k) + ENERGIA.perda(k);
const PB = {};
const betaParte = (k, p) => { if (!F.p.acopla) return p === 'mat' ? MAT.betaFixo : 0; F.partesBeta(k, F.T[k], PB); return PB[p]; };
// taxas de redução em % do ferro da célula por minuto
const taxa = (k, r) => {
  const T = F.T[k], baixa = T < T_WUSTITA;
  if (r === 'r2') return 0;
  return (r === 'r1' ? F.r1[k] : r === 'r2x' ? F.r2[k] : F.r3[k]) / F.nFe0 * 6000;
};

// ---- campos do palco ----
const CAMPOS = {
  T: { nome: 'Temperatura', un: '°C', pal: 'T', v: k => C(F.T[k]), faixa: () => { let mx = -Infinity; for (let k = 0; k < F.n; k++) mx = Math.max(mx, F.T[k]); return [25, Math.max(150, Math.ceil(C(mx) / 50) * 50)]; } },
  q: { nome: 'Potência absorvida', un: 'W/cm³', pal: 'q', v: k => F.q[k] / 1e6, faixa: () => { let mx = 0; for (let k = 0; k < F.n; k++) mx = Math.max(mx, F.q[k]); return [0, Math.max(1, Math.ceil(mx / 1e6 * 2) / 2)]; } },
  agua: { nome: 'Água na célula', un: '% da inicial', pal: 'agua', v: k => umid0() ? F.w[k] / umid0() * 100 : 0, faixa: () => [0, 100] },
  fases: { nome: 'Fase do ferro', un: '', pal: null, v: k => fracFe(k, F.f) * 100, faixa: () => [0, 100] },
  met: { nome: 'Ferro metálico', un: '% do ferro', pal: 'met', v: k => fracFe(k, F.f) * 100, faixa: () => [0, 100] },
  dp: { nome: 'Profundidade de penetração', un: 'mm', pal: 'dp', v: k => 1000 / F.beta[k], faixa: () => [0, 300] },
};

// ---- as parcelas: o que cada uma é, onde age e como se mede na sonda ----
const TERMO = {
  // fronteiras
  entrada: { tipo: 'bc', rot: 'Face esquerda · micro-ondas', cor: '--c-mo', f: () => '<i>P</i>(0) = <i>P</i><sub>inc</sub>', n: 'Entrada das micro-ondas', x: 'A onda entra pela face esquerda com a potência do magnetron que chega à amostra. A potência é dividida igualmente entre as linhas do corte.' },
  parede: { tipo: 'bc', rot: 'Face direita · cavidade', cor: '--c-ev', f: () => '<i>P</i><sub>volta</sub> = <i>ρ</i><sub>c</sub><i>P</i><sub>sai</sub>', n: 'Parede da cavidade', x: 'O que atravessa a amostra encontra a parede metálica da cavidade. Uma fração volta e atravessa a amostra da direita para a esquerda; o resto se perde na cavidade.' },
  faces: { tipo: 'bc', rot: 'Quatro bordas · convecção + radiação', cor: '--c-perda', f: () => '<i>q</i>″ = <i>h</i>Δ<i>T</i> + <i>εσ</i>Δ<i>T</i><sup>4</sup>', n: 'Perdas nas bordas', x: 'Nas quatro bordas do corte, a amostra perde calor para o ar a 25 °C por convecção e por radiação. A radiação cresce com T⁴ e domina acima de cerca de 400 °C.' },
  plano: { tipo: 'bc', rot: 'Frente e trás · isoladas', cor: '--c-acc', f: () => '∂<i>T</i>/∂<i>z</i> = 0', n: 'Faces fora do plano', x: 'O corte representa o meio da amostra. As faces da frente e de trás, a 25 mm, não trocam calor neste modelo, e por isso o problema fica em duas dimensões.' },
  gas: { tipo: 'bc', rot: 'Atmosfera · CO em excesso', cor: '--c-reac', f: () => '<i>p</i><sub>CO</sub> ≫ <i>p</i><sub>CO₂</sub>', n: 'Atmosfera redutora', x: 'O CO chega a todas as células e o CO₂ formado sai sem resistência. Por isso a redução depende só da temperatura e do óxido que ainda resta, não do transporte de gás.' },
  // energia
  acc: { tipo: 'esc', eq: 'energia', rot: 'acúmulo', curto: 'acúmulo', cor: '--c-acc', f: () => '<i>ρc</i><sub>p</sub>∂<i>T</i>/∂<i>t</i>', n: 'Acúmulo', un: 'W/cm³', v: ENERGIA.acc, ref: 4, x: 'Quanto de energia fica na célula e aquece o material. É a soma de todas as outras parcelas: onde ela é positiva, a temperatura sobe.' },
  cond: { tipo: 'esc', eq: 'energia', rot: 'condução', curto: 'condução', cor: '--c-cond', f: () => '∇·(<i>k</i>∇<i>T</i>)', n: 'Condução', un: 'W/cm³', v: ENERGIA.cond, ref: 2, exige: 'conducao', x: 'Calor que vem das células vizinhas mais quentes. Com k = 0,65 W/(m·K), o resíduo é mau condutor: a condução só nivela diferenças de poucos milímetros durante o lote.' },
  mo: { tipo: 'esc', eq: 'energia', rot: 'micro-ondas', curto: 'micro-ondas', cor: '--c-mo', f: () => '<i>q</i><sub>mo</sub>', n: 'Micro-ondas', un: 'W/cm³', v: ENERGIA.mo, ref: 6, exige: 'micro', x: 'Energia que a onda deposita dentro da célula. É a única entrada de energia do lote, e não chega igual a todas as células: depende de quanto a onda já perdeu no caminho.' },
  ev: { tipo: 'esc', eq: 'energia', rot: 'evaporação', curto: 'evaporação', cor: '--c-ev', f: () => '−<i>ṁ</i><sub>ev</sub><i>L</i>', n: 'Evaporação', un: 'W/cm³', v: ENERGIA.ev, ref: 6, exige: 'secagem', x: 'Energia que sai como calor latente da água. Enquanto a célula tem água, toda a energia acima de 100 °C vai para cá e a temperatura fica parada.' },
  reac: { tipo: 'esc', eq: 'energia', rot: 'reação', curto: 'reação', cor: '--c-reac', f: () => 'Σ(−Δ<i>H</i><sub>i</sub>)<i>r</i><sub>i</sub>', n: 'Calor de reação', un: 'W/cm³', v: ENERGIA.reac, ref: 2, exige: 'reacao', x: 'Calor liberado ou absorvido pela redução. A primeira e a última etapa liberam calor; a passagem de magnetita a wüstita absorve.' },
  perda: { tipo: 'esc', eq: 'energia', rot: 'perdas nas faces', curto: 'perdas', cor: '--c-perda', f: () => '−<i>q</i>″<i>A</i>/<i>V</i>', n: 'Perdas nas faces', un: 'W/cm³', v: ENERGIA.perda, ref: 2, exige: 'perdas', x: 'Só existe nas células da borda: é a convecção e a radiação pela face externa, escritas por unidade de volume da célula.' },
  // micro-ondas
  b_mat: { tipo: 'mo', eq: 'micro', rot: 'matriz e hematita', curto: 'matriz', cor: '--c-perda', f: () => '<i>β</i><sub>0</sub>e<sup>(<i>T</i>−<i>T</i><sub>0</sub>)/<i>T</i><sub>c</sub></sup>', n: 'Absorção da matriz', un: '1/m', v: k => betaParte(k, 'mat'), ref: 10, x: 'O sólido seco absorve pouco a frio: a onda atravessaria 30 cm antes de perder 63 % da potência. A absorção cresce com a temperatura, e é daí que nasce a fuga térmica.' },
  b_agua: { tipo: 'mo', eq: 'micro', rot: 'água', curto: 'água', cor: '--c-ev', f: () => '<i>K</i><sub>w</sub><i>w</i>', n: 'Absorção da água', un: '1/m', v: k => betaParte(k, 'agua'), ref: 25, x: 'A água é o melhor absorvedor da amostra. Com 8 % de umidade, ela sozinha absorveria a onda em cerca de 5 cm. Quando seca, a amostra fica quase transparente.' },
  b_mag: { tipo: 'mo', eq: 'micro', rot: 'magnetita', curto: 'magnetita', cor: '--c-reac', f: () => '<i>K</i><sub>m</sub><i>y</i><sub>m</sub>', n: 'Absorção da magnetita', un: '1/m', v: k => betaParte(k, 'mag'), ref: 10, x: 'A magnetita formada absorve micro-ondas muito melhor que a hematita. Onde a redução começa, a célula passa a aquecer mais depressa.' },
  b_wus: { tipo: 'mo', eq: 'micro', rot: 'wüstita', curto: 'wüstita', cor: '--c-acc', f: () => '<i>K</i><sub>w</sub>′<i>y</i><sub>w</sub>', n: 'Absorção da wüstita', un: '1/m', v: k => betaParte(k, 'wus'), ref: 6, x: 'A wüstita, que só existe acima de 570 °C, também absorve mais que a hematita.' },
  b_fe: { tipo: 'mo', eq: 'micro', rot: 'ferro', curto: 'ferro', cor: '--c-cond', f: () => '<i>K</i><sub>Fe</sub><i>y</i><sub>Fe</sub>', n: 'Absorção do ferro', un: '1/m', v: k => betaParte(k, 'fe'), ref: 4, x: 'Partículas de ferro metálico espalhadas na matriz dissipam a onda por correntes induzidas.' },
  // água
  w: { tipo: 'esc', eq: 'agua', rot: 'água na célula', curto: 'água', cor: '--c-ev', f: () => '∂<i>w</i>/∂<i>t</i>', n: 'Variação da água', un: 'kg/(m³·s)', v: k => -F.evap[k] / F.V / Math.max(F.ultimo ? F.ultimo.dt : F.dt, 1e-9), ref: 3, x: 'Quanto de água a célula perde por segundo. Só é diferente de zero na frente de secagem.' },
  mev: { tipo: 'esc', eq: 'agua', rot: 'evaporação', curto: 'evaporação', cor: '--c-mo', f: () => '−<i>ṁ</i><sub>ev</sub>', n: 'Taxa de evaporação', un: 'kg/(m³·s)', v: k => -F.evap[k] / F.V / Math.max(F.ultimo ? F.ultimo.dt : F.dt, 1e-9), ref: 3, exige: 'secagem', x: 'A célula só evapora quando tem água e a energia recebida passaria a temperatura de 100 °C. A evaporação é a energia excedente dividida pelo calor latente.' },
  // redução
  r1: { tipo: 'esc', eq: 'reducao', rot: 'hematita → magnetita', curto: 'Fe₂O₃ → Fe₃O₄', cor: '--c-reac', f: () => '<i>r</i><sub>1</sub> = <i>k</i><sub>1</sub>(<i>T</i>)<i>n</i><sub>h</sub>', n: 'Primeira etapa', un: '%/min', v: k => taxa(k, 'r1'), ref: 20, exige: 'reacao', x: '3Fe₂O₃ + CO → 2Fe₃O₄ + CO₂. A etapa mais fácil: começa por volta de 300 °C e libera calor. Ela sozinha já deixa o ferro atraível por ímã.' },
  r2x: { tipo: 'esc', eq: 'reducao', rot: 'magnetita → wüstita ou ferro', curto: 'Fe₃O₄ → FeO', cor: '--c-acc', f: () => '<i>r</i><sub>2</sub> = <i>k</i><sub>2</sub>(<i>T</i>)<i>n</i><sub>m</sub>', n: 'Segunda etapa', un: '%/min', v: k => taxa(k, 'r2x'), ref: 10, exige: 'reacao', x: 'Acima de 570 °C, Fe₃O₄ + CO → 3FeO + CO₂, que absorve calor. Abaixo de 570 °C a wüstita não é estável e a magnetita vai direto a ferro: Fe₃O₄ + 4CO → 3Fe + 4CO₂.' },
  r3: { tipo: 'esc', eq: 'reducao', rot: 'wüstita → ferro', curto: 'FeO → Fe', cor: '--c-cond', f: () => '<i>r</i><sub>3</sub> = <i>k</i><sub>3</sub>(<i>T</i>)<i>n</i><sub>w</sub>', n: 'Terceira etapa', un: '%/min', v: k => taxa(k, 'r3'), ref: 10, exige: 'reacao', x: 'FeO + CO → Fe + CO₂. A etapa mais lenta, com a maior energia de ativação: o ferro metálico só aparece onde a amostra passa de uns 800 °C.' },
  // separação
  s_fe: { tipo: 'sep', fase: 'f', rot: 'ferro metálico', cor: '--f-fe', f: () => '<i>c</i>·<i>m</i><sub>Fe</sub>', n: 'Ferro metálico capturado', x: 'O ferro metálico é ferromagnético: o separador captura a fração escolhida.' },
  s_m: { tipo: 'sep', fase: 'm', rot: 'magnetita', cor: '--f-m', f: () => '<i>c</i>·<i>m</i><sub>Fe₃O₄</sub>', n: 'Magnetita capturada', x: 'A magnetita é ferrimagnética e vai ao concentrado como o ferro. Por isso uma redução parcial, que só forma magnetita, já recupera boa parte do ferro.' },
  s_w: { tipo: 'sep', fase: 'w', rot: 'wüstita', cor: '--f-w', f: () => '¼<i>c</i>·<i>m</i><sub>FeO</sub>', n: 'Wüstita capturada', x: 'A wüstita é fracamente magnética; o separador leva um quarto da fração do ferro.' },
  s_h: { tipo: 'sep', fase: 'h', rot: 'hematita', cor: '--f-h', f: () => '0,08<i>c</i>·<i>m</i><sub>Fe₂O₃</sub>', n: 'Hematita capturada', x: 'A hematita quase não responde ao ímã: o que não foi reduzido fica no rejeito.' },
  s_mat: { tipo: 'sep', fase: 'mat', rot: 'matriz arrastada', cor: '--f-mat', f: () => '<i>e</i>·<i>m</i><sub>matriz</sub>', n: 'Matriz arrastada', x: 'Partículas da matriz presas ao material magnético. Elas não trazem ferro e diluem o teor do concentrado.' },
};
const ETAPA_INFO = {
  fluxos: { n: 'Fluxos nas faces', curto: 'fluxos', cor: '--c-cond', f: '<i>kA</i>Δ<i>T</i>/Δ<i>x</i>' },
  micro: { n: 'Micro-ondas linha a linha', curto: 'micro-ondas', cor: '--c-mo', f: '<i>P</i>e<sup>−<i>β</i>Δ<i>x</i></sup>' },
  energia: { n: 'Energia e secagem', curto: 'energia', cor: '--c-acc', f: 'Σ<i>Q</i>/(<i>mc</i><sub>p</sub>)' },
  reacao: { n: 'Redução', curto: 'redução', cor: '--c-reac', f: '<i>n</i>e<sup>−<i>k</i>Δ<i>t</i></sup>' },
  inventario: { n: 'Inventário e balanços', curto: 'inventário', cor: '--c-sep', f: 'Σ<i>m</i>, Σ<i>E</i>' },
};
const EQ = {
  bc: { nome: 'Fronteiras', x: 'As equações valem dentro da amostra; nas bordas, cada uma recebe uma condição. Clique numa condição para ver a borda no palco.', modelo: () => '{entrada}{parede}{faces}{plano}{gas}' },
  energia: { nome: 'Energia', dom: ['cond', 'mo', 'ev', 'reac'], x: 'O que se acumula em cada célula é o que chega por condução, mais o que a onda deposita, menos o que sai como vapor, mais o calor da reação. Os números são medidos na sonda, em W/cm³; a miniatura mostra onde cada parcela age.', modelo: () => '{acc}<span>=</span>{cond}<span>+</span>{mo}{ev}<span>+</span>{reac}<span>+</span>{perda}' },
  micro: { nome: 'Micro-ondas', exige: 'micro', dom: ['b_mat', 'b_agua', 'b_mag', 'b_wus', 'b_fe'], x: 'A cada célula, a onda perde a fração β·Δx da potência que traz; essa perda é o calor depositado. β soma o que cada componente absorve, em 1/m, medido na sonda. A penetração é 1/β.', modelo: () => '<span>d<i>P</i>/d<i>x</i> = −<i>βP</i> ,  <i>β</i> =</span>{b_mat}<span>+</span>{b_agua}<span>+</span>{b_mag}<span>+</span>{b_wus}<span>+</span>{b_fe}' },
  agua: { nome: 'Água', exige: 'secagem', x: 'A água só sai quando a célula chega a 100 °C. A partir daí, a energia que passaria desse ponto vira vapor, e a célula fica parada em 100 °C até secar.', modelo: () => '{w}<span>=</span>{mev}<span>,  <i>ṁ</i><sub>ev</sub> = max(0, <i>Q</i> − <i>mc</i><sub>p</sub>(100 °C − <i>T</i>))/<i>L</i></span>' },
  reducao: { nome: 'Redução', exige: 'reacao', dom: ['r1', 'r2x', 'r3'], x: 'O ferro perde oxigênio em três etapas, cada uma com velocidade k = A·e^(−E/RT) proporcional ao óxido que ainda resta. As taxas são medidas na sonda, em % do ferro da célula por minuto.', modelo: () => '<span>Fe₂O₃</span>{r1}<span>Fe₃O₄</span>{r2x}<span>FeO</span>{r3}<span>Fe</span>' },
  separacao: { nome: 'Separação', x: 'O separador magnético atua sobre o lote inteiro no estado atual. Cada cartão mostra quantos gramas de cada fase iriam para o concentrado; a miniatura mostra onde essa fase está.', modelo: () => '<span><i>m</i><sub>c</sub> =</span>{s_fe}<span>+</span>{s_m}<span>+</span>{s_w}<span>+</span>{s_h}<span>+</span>{s_mat}' },
  num: { nome: 'Numérico', x: 'Um passo de tempo são cinco contas, sempre nesta ordem. O tempo de cada uma é medido no seu navegador. Clique numa etapa para abrir um passo.', modelo: () => '{n_fluxos}<span>→</span>{n_micro}<span>→</span>{n_energia}<span>→</span>{n_reacao}<span>→</span>{n_inventario}' },
};
for (const e of ETAPAS) TERMO['n_' + e] = { tipo: 'num', et: e, rot: ETAPA_INFO[e].curto, cor: ETAPA_INFO[e].cor, f: () => ETAPA_INFO[e].f, n: ETAPA_INFO[e].n, x: '' };
const MODELO_DE_EQ = { micro: 'micro', agua: 'secagem', reducao: 'reacao' };
const disponivel = eq => !EQ[eq].exige || F.p[EQ[eq].exige];
const corDe = t => css(TERMO[t].cor);

// ---- vista (zoom) ----
const VTODO = { x0: 0, y0: 0, x1: NX, y1: NY }, VFACE = { x0: 0, y0: 10, x1: 54, y1: 40 };
const vista = { ...VTODO }; let alvo = { ...VTODO }, animZoom = 0;
function irPara(v) { alvo = { ...v }; animZoom = performance.now(); pedirDesenho(); }
function zoomEm(f, cx, cy) {
  const w0 = alvo.x1 - alvo.x0, h0 = alvo.y1 - alvo.y0, w = cl(w0 * f, 18, NX), h = w * NY / NX;
  if (cx == null) { cx = (alvo.x0 + alvo.x1) / 2; cy = (alvo.y0 + alvo.y1) / 2; }
  const ax = (cx - alvo.x0) / w0, ay = (cy - alvo.y0) / h0, x0 = cl(cx - ax * w, 0, NX - w), y0 = cl(cy - ay * h, 0, NY - h);
  irPara({ x0, y0, x1: x0 + w, y1: y0 + h });
}
function passoZoom() {
  if (!animZoom) return;
  const t = Math.min(1, (performance.now() - animZoom) / 380);
  for (const k of ['x0', 'y0', 'x1', 'y1']) vista[k] += (alvo[k] - vista[k]) * (t >= 1 ? 1 : .3);
  if (t >= 1) { Object.assign(vista, alvo); animZoom = 0; }
}

// ---- geometria da tela ----
let DPR = 1;
const tela = { el: $('#tela'), campo: $('#campo'), glifos: $('#glifos'), R: { x: 0, y: 0, w: 1, h: 1 }, W: 1, H: 1, estreita: false };
const sx = x => tela.R.x + (x - vista.x0) / (vista.x1 - vista.x0) * tela.R.w;
const sy = y => tela.R.y + (vista.y1 - y) / (vista.y1 - vista.y0) * tela.R.h;
const escala = () => tela.R.w / (vista.x1 - vista.x0);
function medir() {
  const r = tela.el.getBoundingClientRect(); if (!r.width || !r.height) return;
  const W = Math.round(r.width * DPR), H = Math.round(r.height * DPR);
  for (const cv of [tela.campo, tela.glifos]) if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; }
  tela.W = W; tela.H = H; tela.estreita = r.width < 720;
  const m = tela.estreita ? [30, 22, 26, 18] : [84, 54, 84, 30];   // esquerda, topo, direita, base
  const aw = W - (m[0] + m[2]) * DPR, ah = H - (m[1] + m[3]) * DPR, w = Math.max(10, Math.min(aw, ah * NX / NY)), h = w * NY / NX;
  tela.R = { x: Math.round(m[0] * DPR + (aw - w) / 2), y: Math.round(m[1] * DPR + (ah - h) / 2), w: Math.round(w), h: Math.round(h) };
}

// ---- o campo como imagem ----
const off = document.createElement('canvas'); off.width = NX; off.height = NY;
const octx = off.getContext('2d'), img = octx.createImageData(NX, NY);
const VAL = new Float32Array(NX * NY);
function descritor() {
  if (st.det) return descEtapa();
  const T = st.termo && TERMO[st.termo];
  if (st.dom && EQ[st.eq].dom) return { tipo: 'dom', nome: 'Parcela de maior módulo em cada ponto', tmin: '', tmax: '' };
  if (T && (T.tipo === 'esc' || T.tipo === 'mo')) {
    for (let k = 0; k < F.n; k++) VAL[k] = T.v(k);
    const sim = T.tipo === 'esc' && T.eq === 'energia';
    let mx = 1e-12; for (let k = 0; k < F.n; k++) mx = Math.max(mx, Math.abs(VAL[k]));
    const ref = Math.max(T.ref * .05, mx);
    return sim ? { tipo: 'div', lut: PAL.div, a: -ref, b: ref, nome: `${T.n} [${T.un}]`, tmin: '−' + sig(ref, 2), tmax: '+' + sig(ref, 2), un: T.un }
               : { tipo: 'esc', lut: lutTermo(corDe(st.termo)), a: 0, b: ref, nome: `${T.n} [${T.un}]`, tmin: '0', tmax: sig(ref, 2), un: T.un };
  }
  if (T && T.tipo === 'sep') return { tipo: 'fase', fase: T.fase, nome: T.n, tmin: '', tmax: '' };
  const c = CAMPOS[st.campo];
  if (st.campo === 'fases') return { tipo: 'fases', nome: 'Fase dominante do ferro', tmin: '', tmax: '' };
  for (let k = 0; k < F.n; k++) VAL[k] = c.v(k);
  const [a, b] = c.faixa(), casas = b - a >= 20 ? 0 : 1;
  return { tipo: 'esc', lut: PAL[c.pal], a, b, nome: `${c.nome} [${c.un}]`, tmin: fmt(a, casas), tmax: fmt(b, casas), un: c.un };
}
const corFase = () => ({ h: hex(css('--f-h')), m: hex(css('--f-m')), w: hex(css('--f-w')), f: hex(css('--f-fe')), mat: hex(css('--f-mat')) });
function pintarCampo(V, soImagem) {
  const px = img.data;
  const pinta = (k, r, g, b) => { const i = k % NX, j = (k / NX) | 0, o = (i + NX * (NY - 1 - j)) * 4; px[o] = r; px[o + 1] = g; px[o + 2] = b; px[o + 3] = 255; };
  if (V.tipo === 'fases' || V.tipo === 'fase') {
    const cf = corFase(), fundo = hex(claro() ? '#f6f6f2' : '#07111b');
    for (let k = 0; k < F.n; k++) {
      const fr = { h: F.h[k] / F.nFe0, m: F.m[k] / F.nFe0, w: F.wu[k] / F.nFe0, f: F.f[k] / F.nFe0 };
      if (V.tipo === 'fases') { let r = 0, g = 0, b = 0; for (const q of ['h', 'm', 'w', 'f']) { r += cf[q][0] * fr[q]; g += cf[q][1] * fr[q]; b += cf[q][2] * fr[q]; } pinta(k, r, g, b); }
      else { const t = V.fase === 'mat' ? .35 : fr[V.fase], c = cf[V.fase]; pinta(k, fundo[0] + (c[0] - fundo[0]) * t, fundo[1] + (c[1] - fundo[1]) * t, fundo[2] + (c[2] - fundo[2]) * t); }
    }
  } else if (V.tipo === 'dom') {
    const ts = EQ[st.eq].dom.filter(t => !TERMO[t].exige || F.p[TERMO[t].exige]), cs = ts.map(t => hex(corDe(t))), fundo = hex(claro() ? '#f6f6f2' : '#07111b');
    const vals = ts.map(t => { const a = new Float32Array(F.n); for (let k = 0; k < F.n; k++) a[k] = Math.abs(TERMO[t].v(k)); return a; });
    DOM.parte = {}; ts.forEach(t => (DOM.parte[t] = 0)); DOM.lista = ts;
    let mx = 1e-12; for (const a of vals) for (let k = 0; k < F.n; k++) mx = Math.max(mx, a[k]);
    for (let k = 0; k < F.n; k++) {
      let b = 0, s = 0; for (let q = 0; q < ts.length; q++) { s += vals[q][k]; if (vals[q][k] > vals[b][k]) b = q; }
      const v = vals[b][k], t = s > mx * 1e-4 ? .25 + .75 * Math.sqrt(v / mx) : 0;
      if (t) DOM.parte[ts[b]] += 1 / F.n;
      pinta(k, fundo[0] + (cs[b][0] - fundo[0]) * t, fundo[1] + (cs[b][1] - fundo[1]) * t, fundo[2] + (cs[b][2] - fundo[2]) * t);
    }
  } else {
    const lut = V.lut;
    for (let k = 0; k < F.n; k++) { const t = V.tipo === 'div' ? .5 + .5 * Math.sign(VAL[k]) * Math.sqrt(Math.min(1, Math.abs(VAL[k]) / V.b)) : cl((VAL[k] - V.a) / (V.b - V.a), 0, 1), c = (t * 255 | 0) * 4; pinta(k, lut[c], lut[c + 1], lut[c + 2]); }
  }
  octx.putImageData(img, 0, 0);
  if (soImagem) return;
  const ctx = tela.campo.getContext('2d'), R = tela.R;
  ctx.fillStyle = css('--palco'); ctx.fillRect(0, 0, tela.W, tela.H);
  ctx.imageSmoothingEnabled = !st.ov.malha; ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(off, vista.x0, NY - vista.y1, vista.x1 - vista.x0, vista.y1 - vista.y0, R.x, R.y, R.w, R.h);
}
const DOM = { parte: {}, lista: [] };

// ---- desenho sobre o campo ----
function seta(ctx, x, y, dx, dy, cor, lw, cab) {
  const L = Math.hypot(dx, dy); if (L < .5) return;
  const ux = dx / L, uy = dy / L, hx = x + dx, hy = y + dy, c = Math.min(cab, L * .55);
  ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(hx - ux * c * .6, hy - uy * c * .6); ctx.strokeStyle = cor; ctx.lineWidth = lw; ctx.lineCap = 'round'; ctx.stroke();
  ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(hx - ux * c - uy * c * .5, hy - uy * c + ux * c * .5); ctx.lineTo(hx - ux * c + uy * c * .5, hy - uy * c - ux * c * .5); ctx.closePath(); ctx.fillStyle = cor; ctx.fill();
}
const fonte = (peso, tam, fam) => `${peso} ${tam * DPR}px ${css(fam || '--mono') || 'monospace'}`;
function escreve(ctx, t, x, y, cor, al, tam, peso, fam) { ctx.font = fonte(peso || 600, tam || 10, fam); ctx.fillStyle = cor; ctx.textAlign = al || 'left'; ctx.textBaseline = 'middle'; ctx.fillText(t, x, y); return ctx.measureText(t).width; }
function etiqueta(ctx, t, x, y, cor) {
  ctx.font = fonte(600, 10.5); ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const w = ctx.measureText(t).width + 10 * DPR; ctx.fillStyle = 'rgba(4,10,18,.8)'; ctx.fillRect(x - w / 2, y - 9 * DPR, w, 18 * DPR); ctx.fillStyle = cor; ctx.fillText(t, x, y);
}
// potência da onda em cada célula, para frente e para trás, refeita a partir de β
const PF = new Float32Array(NX * NY), PB2 = new Float32Array(NX * NY);
function potenciaNasCelulas() {
  const Pl = (F.p.micro ? F.p.pot : 0) / NY, dx = F.dx;
  for (let j = 0; j < NY; j++) {
    let P = Pl; for (let i = 0; i < NX; i++) { const k = i + NX * j; PF[k] = P; P *= Math.exp(-F.beta[k] * dx); }
    let B = F.p.retorno * P; for (let i = NX - 1; i >= 0; i--) { const k = i + NX * j; PB2[k] = B; B *= Math.exp(-F.beta[k] * dx); }
  }
}
let fase = 0;
function ondas(ctx) {
  if (!F.p.micro) return;
  potenciaNasCelulas();
  const Pl = F.p.pot / NY, linhas = tela.estreita ? 5 : 7, e = escala(), lam = 12.2 / 2;   // λ na amostra ≈ 12 cm / √ε'; aqui só ilustrativo
  ctx.save(); ctx.lineCap = 'round';
  for (let n = 0; n < linhas; n++) {
    const j = Math.round((n + .5) / linhas * NY - .5);
    for (const [arr, sentido, cor, alfa] of [[PF, 1, css('--c-mo'), .95], [PB2, -1, css('--c-ev'), .7]]) {
      ctx.beginPath(); let ini = true;
      for (let x = vista.x0; x <= vista.x1; x += .25) {
        const i = cl(Math.floor(x), 0, NX - 1), P = arr[i + NX * j] / Pl, A = Math.sqrt(Math.max(P, 0)) * .42;
        if (A < .01) { ini = true; continue; }
        const y = j + .5 + A * Math.sin((x / lam - sentido * fase) * Math.PI * 2);
        if (ini) { ctx.moveTo(sx(x), sy(y)); ini = false; } else ctx.lineTo(sx(x), sy(y));
      }
      ctx.globalAlpha = alfa; ctx.strokeStyle = cor; ctx.lineWidth = Math.max(1, e * .16); ctx.stroke();
    }
  }
  ctx.restore();
}
function interp(f, x, y) {
  let fx = x - .5, fy = y - .5; fx = cl(fx, 0, NX - 1.001); fy = cl(fy, 0, NY - 1.001);
  const i = fx | 0, j = fy | 0, a = fx - i, b = fy - j, k = i + NX * j;
  return (f[k] * (1 - a) + f[k + 1] * a) * (1 - b) + (f[k + NX] * (1 - a) + f[k + NX + 1] * a) * b;
}
function isolinhas(ctx, f, niveis, cor, lw) {
  const s = 2, nx = NX * s, ny = NY * s, g = new Float32Array(nx * ny);
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) g[i + nx * j] = interp(f, (i + .5) / s, (j + .5) / s);
  ctx.beginPath();
  for (const L of niveis) for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const k = i + nx * j, v0 = g[k], v1 = g[k + 1], v2 = g[k + nx + 1], v3 = g[k + nx], c = (v0 > L) | (v1 > L) << 1 | (v2 > L) << 2 | (v3 > L) << 3;
    if (c === 0 || c === 15) continue;
    const p = [], x = (i + .5) / s, y = (j + .5) / s, h = 1 / s;
    if ((v0 > L) !== (v1 > L)) p.push(x + h * (L - v0) / (v1 - v0), y);
    if ((v1 > L) !== (v2 > L)) p.push(x + h, y + h * (L - v1) / (v2 - v1));
    if ((v3 > L) !== (v2 > L)) p.push(x + h * (L - v3) / (v2 - v3), y + h);
    if ((v0 > L) !== (v3 > L)) p.push(x, y + h * (L - v0) / (v3 - v0));
    for (let q = 0; q + 3 < p.length; q += 4) { ctx.moveTo(sx(p[q]), sy(p[q + 1])); ctx.lineTo(sx(p[q + 2]), sy(p[q + 3])); }
  }
  ctx.strokeStyle = cor; ctx.lineWidth = lw * DPR; ctx.stroke();
}
const TC = new Float32Array(NX * NY), WF = new Float32Array(NX * NY), MF = new Float32Array(NX * NY);
function fluxoCalor(ctx) {
  const passo = Math.max(3, Math.round(26 * DPR / escala())), sombra = 'rgba(4,10,18,.7)', cor = claro() ? '#14232c' : '#ffffff';
  let mx = 1e-9; const vs = [];
  for (let j = Math.floor(passo / 2); j < NY; j += passo) for (let i = Math.floor(passo / 2); i < NX; i += passo) {
    const k = i + NX * j, gx = (F.T[Math.min(k + 1, k - i + NX - 1)] - F.T[Math.max(k - 1, k - i)]) / 2, gy = (F.T[j < NY - 1 ? k + NX : k] - F.T[j > 0 ? k - NX : k]) / 2;
    const m = Math.hypot(gx, gy); mx = Math.max(mx, m); vs.push([i + .5, j + .5, -gx, -gy, m]);
  }
  const L = passo * escala() * .85;
  for (const [x, y, gx, gy, m] of vs) {
    if (m < mx * .03 || x < vista.x0 || x > vista.x1 || y < vista.y0 || y > vista.y1) continue;
    const l = L * Math.sqrt(m / mx), ux = gx / m * l, uy = -gy / m * l;
    seta(ctx, sx(x) - ux / 2, sy(y) - uy / 2, ux, uy, sombra, 3.4 * DPR, 6 * DPR); seta(ctx, sx(x) - ux / 2, sy(y) - uy / 2, ux, uy, cor, 1.5 * DPR, 5 * DPR);
  }
}
function sondaGlifo(ctx) {
  const x = sx(st.sonda.i + .5), y = sy(st.sonda.j + .5), r = Math.max(7 * DPR, escala() * .7);
  if (st.ferr === 'perfil' || st.lente === 'perfil') {
    ctx.save(); ctx.setLineDash([6 * DPR, 4 * DPR]); ctx.strokeStyle = 'rgba(255,255,255,.85)'; ctx.lineWidth = 1.4 * DPR;
    ctx.beginPath(); ctx.moveTo(tela.R.x, y); ctx.lineTo(tela.R.x + tela.R.w, y); ctx.stroke(); ctx.restore();
  }
  ctx.lineWidth = 3.5 * DPR; ctx.strokeStyle = 'rgba(4,10,18,.7)'; ctx.strokeRect(x - r, y - r, 2 * r, 2 * r);
  ctx.lineWidth = 1.8 * DPR; ctx.strokeStyle = '#ffffff'; ctx.strokeRect(x - r, y - r, 2 * r, 2 * r);
  ctx.beginPath(); ctx.moveTo(x - r - 6 * DPR, y); ctx.lineTo(x - r, y); ctx.moveTo(x + r, y); ctx.lineTo(x + r + 6 * DPR, y); ctx.moveTo(x, y - r - 6 * DPR); ctx.lineTo(x, y - r); ctx.moveTo(x, y + r); ctx.lineTo(x, y + r + 6 * DPR); ctx.stroke();
}
function malha(ctx) {
  const e = escala(); if (e < 5 * DPR) return;
  ctx.beginPath();
  for (let i = Math.ceil(vista.x0); i <= vista.x1; i++) { ctx.moveTo(sx(i), tela.R.y); ctx.lineTo(sx(i), tela.R.y + tela.R.h); }
  for (let j = Math.ceil(vista.y0); j <= vista.y1; j++) { ctx.moveTo(tela.R.x, sy(j)); ctx.lineTo(tela.R.x + tela.R.w, sy(j)); }
  ctx.strokeStyle = claro() ? 'rgba(20,35,44,.18)' : 'rgba(255,255,255,.14)'; ctx.lineWidth = DPR; ctx.stroke();
}
// bordas do domínio e anotações nas margens
function margens(ctx) {
  const R = tela.R, foco = st.eq === 'bc' ? st.chip : null, al = k => !foco || foco === k ? 1 : .25, mu = css('--muted'), d = DPR;
  ctx.save();
  // bordas
  ctx.globalAlpha = al('faces'); ctx.setLineDash([8 * d, 5 * d]); ctx.strokeStyle = css('--c-perda'); ctx.lineWidth = 2 * d;
  ctx.strokeRect(sx(0), sy(NY), sx(NX) - sx(0), sy(0) - sy(NY)); ctx.setLineDash([]);
  ctx.globalAlpha = al('entrada'); ctx.fillStyle = css('--c-mo'); ctx.fillRect(sx(0) - 1.5 * d, sy(NY), 3 * d, sy(0) - sy(NY));
  ctx.globalAlpha = al('parede'); ctx.fillStyle = css('--c-ev'); ctx.fillRect(sx(NX) - 1.5 * d, sy(NY), 3 * d, sy(0) - sy(NY));
  ctx.globalAlpha = 1;
  if (tela.estreita) { ctx.restore(); return; }
  const girado = (x, t1, cor, t2) => { ctx.save(); ctx.translate(x, R.y + R.h / 2); ctx.rotate(-Math.PI / 2); escreve(ctx, t1, 0, -7 * d, cor, 'center', 9.5, 700); escreve(ctx, t2, 0, 7 * d, mu, 'center', 9.5, 500); ctx.restore(); };
  const P = F.P, Pinc = F.p.micro ? F.p.pot : 0;
  if (vista.x0 < .5) {
    ctx.globalAlpha = al('entrada'); const cor = css('--c-mo');
    for (let n = 0; n < 6; n++) { const y = R.y + R.h * (n + .5) / 6; seta(ctx, R.x - 40 * d, y, 30 * d, 0, cor, 2.4 * d, 7 * d); if (P.volta > 1) seta(ctx, R.x - 8 * d, y + 7 * d, -Math.max(4, 30 * P.volta / Math.max(Pinc, 1)) * d, 0, css('--c-ev'), 1.4 * d, 5 * d); }
    girado(R.x - 62 * d, 'Micro-ondas · entrada', cor, Pinc ? `${int(Pinc)} W incidentes` : 'desligadas');
  }
  if (vista.x1 > NX - .5) {
    ctx.globalAlpha = al('parede'); const cor = css('--c-ev');
    girado(R.x + R.w + 62 * d, 'Parede da cavidade', cor, `devolve ${int(F.p.retorno * 100)} %`);
    if (Pinc) for (let n = 0; n < 6; n++) { const y = R.y + R.h * (n + .5) / 6, f = P.trans / Pinc; seta(ctx, R.x + R.w + 8 * d, y, Math.max(3, 34 * f) * d, 0, css('--c-mo'), 1.6 * d, 5 * d); }
  }
  if (vista.y1 > NY - .5) {
    ctx.globalAlpha = al('faces') === 1 || al('gas') === 1 ? 1 : .3; const y = R.y - 11 * d;
    let x = R.x; x += escreve(ctx, 'Bordas · convecção + radiação', x, y, css('--c-perda'), 'left', 9.5, 700) + 10 * d;
    escreve(ctx, F.p.perdas ? `${int(ENERGIA_TOTAL.perdaW)} W para o ar a 25 °C` : 'perdas desligadas', x, y, mu, 'left', 9.5, 500);
    escreve(ctx, F.p.reacao ? 'Atmosfera · CO em excesso' : 'Atmosfera · inerte', R.x + R.w, y, css('--c-reac'), 'right', 9.5, 700);
  }
  // régua em mm
  ctx.globalAlpha = 1; ctx.strokeStyle = css('--line2'); ctx.lineWidth = d; ctx.beginPath();
  const e = escala(); let passo = 10; while (passo * e < 60 * d) passo *= 2;
  for (let x = Math.ceil(vista.x0 / passo) * passo; x <= vista.x1 + 1e-6; x += passo) { const px = sx(x); ctx.moveTo(px, R.y + R.h + 3 * d); ctx.lineTo(px, R.y + R.h + 8 * d); escreve(ctx, int(x * 2), px, R.y + R.h + 15 * d, css('--soft'), 'center', 9, 500); }
  ctx.stroke(); escreve(ctx, 'mm', R.x + R.w + 10 * d, R.y + R.h + 15 * d, css('--soft'), 'left', 9, 500);
  ctx.restore();
}
const ENERGIA_TOTAL = { perdaW: 0 };

// ---- laço de desenho ----
let pedido = false, VA = null;
function pedirDesenho() { if (!pedido) { pedido = true; requestAnimationFrame(desenhar); } }
function desenhar(agora) {
  pedido = false;
  avancar(agora);
  passoZoom();
  const V = VA = descritor();
  if (st.nivel === 'forno' || st.nivel === 'forno-amostra' || st.nivel === 'separador') { cenaInteira(V); return; }
  pintarCampo(V);
  const ctx = tela.glifos.getContext('2d'), R = tela.R;
  ctx.clearRect(0, 0, tela.W, tela.H);
  ctx.save(); ctx.beginPath(); ctx.rect(R.x, R.y, R.w, R.h); ctx.clip();
  if (st.ov.malha) malha(ctx);
  if (st.ov.iso) { for (let k = 0; k < F.n; k++) TC[k] = C(F.T[k]); const [, b] = CAMPOS.T.faixa(), p = b > 600 ? 100 : 50, nv = []; for (let v = p; v < b; v += p) nv.push(v); isolinhas(ctx, TC, nv, claro() ? 'rgba(20,35,44,.45)' : 'rgba(255,255,255,.5)', 1); }
  if (st.ov.frentes) {
    if (umid0() > 0) { for (let k = 0; k < F.n; k++) WF[k] = F.w[k] / umid0(); isolinhas(ctx, WF, [.5], css('--c-ev'), 2.2); }
    for (let k = 0; k < F.n; k++) MF[k] = F.f[k] / F.nFe0; isolinhas(ctx, MF, [.5], css('--f-fe'), 2.2);
    for (let k = 0; k < F.n; k++) MF[k] = (F.m[k] + F.wu[k] + F.f[k]) / F.nFe0; isolinhas(ctx, MF, [.5], css('--c-reac'), 2.2);
  }
  if (st.ov.fluxo && F.p.conducao) fluxoCalor(ctx);
  if (st.ov.ondas && !st.det) ondas(ctx);
  sondaGlifo(ctx);
  ctx.restore();
  if (st.nivel === 'celula') celulaGlifo(ctx);
  margens(ctx);
  barra(V);
  if (st.rodando) fase += .02;
  if (st.rodando || animZoom || (st.ov.ondas && F.p.micro && !st.det && !document.hidden)) pedirDesenho();
}

// ---- barra de cores ----
let barraChave = '';
function barra(V) {
  const chave = [V.tipo, V.nome, V.tmin, V.tmax, V.lut && V.lut.id, V.fase, claro(), DOM.lista.join()].join('|'); if (chave === barraChave) return; barraChave = chave;
  const cv = $('#barra'), ctx = cv.getContext('2d'), w = cv.width, h = cv.height;
  ctx.clearRect(0, 0, w, h);
  if (V.tipo === 'fases') { const q = ['--f-h', '--f-m', '--f-w', '--f-fe']; q.forEach((c, i) => { ctx.fillStyle = css(c); ctx.fillRect(i * w / 4, 0, w / 4 + 1, h); }); pt($('#barra-min'), 'Fe₂O₃'); pt($('#barra-max'), 'Fe'); }
  else if (V.tipo === 'dom') { const n = DOM.lista.length || 1; DOM.lista.forEach((t, i) => { ctx.fillStyle = corDe(t); ctx.fillRect(i * w / n, 0, w / n + 1, h); }); pt($('#barra-min'), ''); pt($('#barra-max'), ''); }
  else if (V.tipo === 'fase') { const g = ctx.createLinearGradient(0, 0, w, 0); g.addColorStop(0, claro() ? '#f6f6f2' : '#07111b'); g.addColorStop(1, css(TERMO[st.termo].cor)); ctx.fillStyle = g; ctx.fillRect(0, 0, w, h); pt($('#barra-min'), '0 %'); pt($('#barra-max'), '100 %'); }
  else { for (let i = 0; i < w; i++) { const c = Math.floor(i / (w - 1) * 255) * 4; ctx.fillStyle = `rgb(${V.lut[c]},${V.lut[c + 1]},${V.lut[c + 2]})`; ctx.fillRect(i, 0, 1, h); } pt($('#barra-min'), V.tmin); pt($('#barra-max'), V.tmax); }
  pt($('#barra-nome'), V.nome);
}

// ---- cenas: forno em corte, amostra, célula e separador ----
// nível: 'forno' (equipamento), 'amostra' (campo calculado), 'celula' (balanço local), 'separador' (produto)
const cam = { t0: 0, de: 0, para: 0, dur: 620, depois: null };
const facil = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
function camE() {
  if (!cam.t0) return cam.para;
  const t = Math.min(1, (performance.now() - cam.t0) / cam.dur), e = cam.de + (cam.para - cam.de) * facil(t);
  if (t >= 1) { cam.t0 = 0; const f = cam.depois; cam.depois = null; if (f) f(); }
  return e;
}
const emTransicao = () => !!cam.t0;

// pontos e polígonos
function poli(ctx, p, fill, stroke, lw) {
  ctx.beginPath(); ctx.moveTo(p[0], p[1]); for (let i = 2; i < p.length; i += 2) ctx.lineTo(p[i], p[i + 1]); ctx.closePath();
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw || DPR; ctx.stroke(); }
}
const rgb = (c, a = 1) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;
const mixc = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
// cor de incandescência aproximada (°C)
function brasa(Tc) {
  const t = cl((Tc - 480) / 700, 0, 1);
  return { a: t, c: mixc([120, 18, 6], [255, 196, 90], t) };
}

// geometria do forno no espaço da tela (px do canvas)
let LF = null, LFchave = '';
function layoutForno() {
  const chave = [tela.W, tela.H, tela.estreita].join(); if (chave === LFchave && LF) return LF; LFchave = chave;
  const W = tela.W, H = tela.H, d = DPR, e = tela.estreita;
  const topo = (e ? 10 : 44) * d, base = (e ? 8 : 30) * d, lado = (e ? 6 : 18) * d;
  const ox = .40, oy = -.24;
  // proporções em unidades da largura da amostra (sw)
  const ar = NY / NX, k = { guia: .58, cav: 1.48, ti: .12, Dc: .62, porta: .42, cano: .16 };
  const Do = k.Dc + 2 * k.ti * .7;
  const fw = k.guia + k.cav + 2 * k.ti + Do * ox + k.porta;
  const Ch = 1.82 * ar, fh = k.cano + Do * -oy + Ch + 2 * k.ti + .13;
  const sw = Math.max(40, Math.min((W - 2 * lado) / fw, (H - topo - base) / fh)), sh = sw * ar;
  const ti = k.ti * sw, Cw = k.cav * sw, CH = Ch * sw, Dc = k.Dc * sw, DO = Do * sw;
  const Ox = Math.round((W - fw * sw) / 2 + k.guia * sw), Oy = Math.round(topo + (H - topo - base - fh * sw) / 2 + k.cano * sw + DO * -oy);
  const Ow = Cw + 2 * ti, Oh = CH + 2 * ti, Cx = Ox + ti, Cy = Oy + ti;
  const piso = Cy + CH, bTopo = piso - .085 * sw;           // bandeja: pés até o piso
  const S = { x: Math.round(Cx + (Cw - sw) / 2 + .03 * sw), y: Math.round(bTopo - sh), w: Math.round(sw), h: Math.round(sh) };
  const Ds = 25 / 180 * sw / 2;                               // metade de trás da amostra, além do plano de corte
  const gy = S.y + sh / 2, gh = .5 * sh;
  LF = { sw, sh, ti, Cw, CH, Dc, DO, Ox, Oy, Ow, Oh, Cx, Cy, piso, bTopo, S, Ds, ox, oy, gy, gh,
    mag: { x: Ox - .60 * sw, y: gy - .48 * sh, w: .24 * sw, h: .96 * sh },
    gin: { x: Cx + .16 * sw, y0: Oy + Oh + .10 * sw },
    gout: { x: Cx + Cw - .2 * sw, y1: Oy - .14 * sw, x1: Ox + Ow + DO * ox * .55 },
  };
  return LF;
}
const dentroS = (x, y) => { const L = layoutForno(), S = L.S; return x >= S.x - 6 * DPR && x <= S.x + S.w + 6 * DPR && y >= S.y - 10 * DPR && y <= L.piso; };

// o que cada equação destaca no forno
const FOCO_EQ = { bc: 'tudo', energia: 'paredes', micro: 'micro', agua: 'agua', reducao: 'gas', separacao: 'amostra', num: '' };
const CAMPO_EQ = { energia: 'T', micro: 'q', agua: 'agua', reducao: 'fases', separacao: 'fases' };

// cor média da superfície da amostra (aparência do material, não o campo calculado)
function corMaterial(k) {
  const cf = corFase(), n = F.nFe0;
  const fr = { h: F.h[k] / n, m: F.m[k] / n, w: F.wu[k] / n, f: F.f[k] / n };
  let c = [0, 0, 0]; for (const q of ['h', 'm', 'w', 'f']) c = [c[0] + cf[q][0] * fr[q], c[1] + cf[q][1] * fr[q], c[2] + cf[q][2] * fr[q]];
  c = mixc(c, cf.mat, .35);
  const u = umid0() > 0 ? F.w[k] / umid0() : 0; c = mixc(c, [c[0] * .55, c[1] * .55, c[2] * .55], .6 * u);
  const b = brasa(C(F.T[k])); return mixc(c, b.c, b.a * .85);
}

let vapor = [];
function desenharForno(ctx, V) {
  const L = layoutForno(), d = DPR, S = L.S, cl0 = claro(), mu = css('--muted'), so = css('--soft');
  const foco = FOCO_EQ[st.eq] || '', al = g => !foco || foco === 'tudo' || foco === g ? 1 : .32;
  const aco = hex(cl0 ? '#9aa6b0' : '#56636e'), acoE = hex(cl0 ? '#c3ccd3' : '#3d4954'), iso = hex(cl0 ? '#e3d8c3' : '#4a4235');
  const cav = hex(cl0 ? '#d4dbe0' : '#17222c'), cavF = hex(cl0 ? '#bfc8cf' : '#101a23');
  const pp = (x, y, D) => [x + D * L.ox, y + D * L.oy];
  const Tm = C(R.Tm), gl = brasa(Tm);

  // carcaça: faces de cima e da direita, além do corte
  const [ax, ay] = pp(L.Ox, L.Oy, L.DO), [bx, by] = pp(L.Ox + L.Ow, L.Oy, L.DO), [cx2, cy2] = pp(L.Ox + L.Ow, L.Oy + L.Oh, L.DO);
  ctx.globalAlpha = al('paredes') * .9 + .1;
  poli(ctx, [L.Ox, L.Oy, ax, ay, bx, by, L.Ox + L.Ow, L.Oy], rgb(mixc(acoE, [255, 255, 255], cl0 ? .25 : .08)), rgb(aco), d);
  poli(ctx, [L.Ox + L.Ow, L.Oy, bx, by, cx2, cy2, L.Ox + L.Ow, L.Oy + L.Oh], rgb(mixc(acoE, [0, 0, 0], .18)), rgb(aco), d);
  ctx.globalAlpha = 1;

  // cavidade: paredes internas em perspectiva
  const c0 = [L.Cx, L.Cy], c1 = [L.Cx + L.Cw, L.Cy], c2 = [L.Cx + L.Cw, L.piso], c3 = [L.Cx, L.piso];
  const b0 = pp(...c0, L.Dc), b1 = pp(...c1, L.Dc), b2 = pp(...c2, L.Dc), b3 = pp(...c3, L.Dc);
  ctx.save(); ctx.beginPath(); ctx.rect(L.Cx, L.Cy, L.Cw, L.CH); ctx.clip();
  poli(ctx, [...c0, ...b0, ...b1, ...c1], rgb(mixc(cav, [255, 255, 255], cl0 ? .1 : .04)));      // teto
  poli(ctx, [...c3, ...b3, ...b2, ...c2], rgb(mixc(cav, [255, 255, 255], cl0 ? .22 : .08)));      // piso
  poli(ctx, [...c0, ...b0, ...b3, ...c3], rgb(mixc(cav, [0, 0, 0], .08)));                        // esquerda
  poli(ctx, [...c1, ...b1, ...b2, ...c2], rgb(mixc(cav, [0, 0, 0], .12)));                        // direita
  poli(ctx, [...b0, ...b1, ...b2, ...b3], rgb(cavF));                                             // fundo
  // brilho da amostra quente na cavidade
  if (gl.a > .02) { const g = ctx.createRadialGradient(S.x + S.w / 2, S.y + S.h / 2, S.h * .2, S.x + S.w / 2, S.y + S.h / 2, L.Cw * .75); g.addColorStop(0, rgb(gl.c, .38 * gl.a)); g.addColorStop(1, rgb(gl.c, 0)); ctx.fillStyle = g; ctx.fillRect(L.Cx, L.Cy, L.Cw, L.CH); }
  // boca do guia de onda na parede esquerda
  ctx.globalAlpha = al('micro');
  const g0 = [L.Cx, L.gy - L.gh / 2], g1 = [L.Cx, L.gy + L.gh / 2], gb0 = pp(...g0, L.Dc * .62), gb1 = pp(...g1, L.Dc * .62), ga0 = pp(...g0, L.Dc * .38), ga1 = pp(...g1, L.Dc * .38);
  poli(ctx, [...ga0, ...gb0, ...gb1, ...ga1], rgb(mixc(hex(css('--c-mo')), cav, .55)), css('--c-mo'), 1.2 * d);
  ctx.restore();

  // bandeja (pés, fundo e bordas) e amostra
  const tray = { x0: S.x - .07 * L.sw, x1: S.x + S.w + .07 * L.sw, y: L.bTopo, e: .028 * L.sw, b: .05 * L.sw };
  const trayC = hex(cl0 ? '#b9a58b' : '#6c5d4b');
  ctx.globalAlpha = 1;   // a amostra carrega o resultado: nunca esmaece
  for (const x of [tray.x0 + .06 * L.sw, tray.x1 - .06 * L.sw]) { ctx.fillStyle = rgb(mixc(trayC, [0, 0, 0], .25)); ctx.fillRect(x - .012 * L.sw, tray.y + tray.e, .024 * L.sw, L.piso - tray.y - tray.e); }
  // parte de trás da bandeja
  const tb0 = pp(tray.x0, tray.y, L.Ds * 1.6), tb1 = pp(tray.x1, tray.y, L.Ds * 1.6);
  poli(ctx, [tray.x0, tray.y, ...tb0, ...tb1, tray.x1, tray.y], rgb(mixc(trayC, [255, 255, 255], .12)));
  const tbe = pp(tray.x1, tray.y + tray.e, L.Ds * 1.6);
  poli(ctx, [tray.x1, tray.y, ...tb1, ...tbe, tray.x1, tray.y + tray.e], rgb(mixc(trayC, [0, 0, 0], .2)));
  // topo e lateral da amostra: aparência do material
  const topo = [], lat = [];
  for (let i = 0; i < NX; i += 3) topo.push(corMaterial(i + NX * (NY - 1)));
  for (let j = NY - 1; j >= 0; j -= 3) lat.push(corMaterial(NX - 1 + NX * j));
  const sT0 = pp(S.x, S.y, L.Ds), sT1 = pp(S.x + S.w, S.y, L.Ds), sB1 = pp(S.x + S.w, S.y + S.h, L.Ds);
  let gr = ctx.createLinearGradient(S.x, 0, S.x + S.w, 0); topo.forEach((c, n) => gr.addColorStop(n / (topo.length - 1), rgb(mixc(c, [255, 255, 255], .12))));
  poli(ctx, [S.x, S.y, ...sT0, ...sT1, S.x + S.w, S.y], gr);
  gr = ctx.createLinearGradient(0, S.y, 0, S.y + S.h); lat.forEach((c, n) => gr.addColorStop(n / (lat.length - 1), rgb(mixc(c, [0, 0, 0], .2))));
  poli(ctx, [S.x + S.w, S.y, ...sT1, ...sB1, S.x + S.w, S.y + S.h], gr);
  // corte: o campo calculado
  ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
  // antes do primeiro passo o campo é uniforme: o corte mostra o material como ele foi carregado
  if (F.t <= 0 && !st.termo && !st.dom) { const px = img.data; for (let k = 0; k < F.n; k++) { const c = corMaterial(k), o = ((k % NX) + NX * (NY - 1 - ((k / NX) | 0))) * 4; px[o] = c[0]; px[o + 1] = c[1]; px[o + 2] = c[2]; px[o + 3] = 255; } octx.putImageData(img, 0, 0); }
  ctx.drawImage(off, 0, 0, NX, NY, S.x, S.y, S.w, S.h);
  ctx.strokeStyle = cl0 ? 'rgba(20,35,44,.5)' : 'rgba(255,255,255,.55)'; ctx.lineWidth = d; ctx.strokeRect(S.x + .5, S.y + .5, S.w - 1, S.h - 1);
  // frente da bandeja (cortada)
  poli(ctx, [tray.x0, tray.y - tray.b, tray.x0 + tray.e, tray.y - tray.b, tray.x0 + tray.e, tray.y, tray.x1 - tray.e, tray.y, tray.x1 - tray.e, tray.y - tray.b, tray.x1, tray.y - tray.b, tray.x1, tray.y + tray.e, tray.x0, tray.y + tray.e], rgb(trayC), rgb(mixc(trayC, [0, 0, 0], .35)), d);
  ctx.globalAlpha = 1;

  // paredes cortadas: aço por fora e por dentro, isolamento entre
  ctx.save();
  ctx.beginPath(); ctx.rect(L.Ox, L.Oy, L.Ow, L.Oh); ctx.rect(L.Cx, L.Cy, L.Cw, L.CH); ctx.fillStyle = rgb(iso); ctx.fill('evenodd');
  ctx.clip('evenodd');
  ctx.globalAlpha = al('paredes') * .55 + .1; ctx.strokeStyle = rgb(mixc(iso, cl0 ? [120, 100, 70] : [150, 130, 100], .45)); ctx.lineWidth = d;
  ctx.beginPath(); const p = 7 * d; for (let x = L.Ox - L.Oh; x < L.Ox + L.Ow; x += p) { ctx.moveTo(x, L.Oy + L.Oh); ctx.lineTo(x + L.Oh, L.Oy); } ctx.stroke();
  ctx.restore();
  ctx.globalAlpha = al('paredes') * .7 + .3;
  ctx.lineWidth = 3 * d; ctx.strokeStyle = rgb(aco); ctx.strokeRect(L.Ox, L.Oy, L.Ow, L.Oh);
  ctx.lineWidth = 2 * d; ctx.strokeStyle = rgb(mixc(aco, [255, 255, 255], .15)); ctx.strokeRect(L.Cx, L.Cy, L.Cw, L.CH);
  ctx.globalAlpha = 1;

  // guia de onda e magnetron (fora, à esquerda)
  ctx.globalAlpha = al('micro');
  const mo = css('--c-mo'), moC = hex(mo), M = L.mag;
  const gx0 = M.x + M.w, gy0 = L.gy - L.gh / 2;
  poli(ctx, [gx0, gy0, ...pp(gx0, gy0, L.gh * .45), ...pp(L.Cx, gy0, L.gh * .45), L.Cx, gy0], rgb(mixc(aco, [255, 255, 255], .2)));
  ctx.fillStyle = rgb(mixc(aco, cav, .35)); ctx.fillRect(gx0, gy0, L.Cx - gx0, L.gh);
  ctx.strokeStyle = foco === 'micro' ? mo : rgb(aco); ctx.lineWidth = (foco === 'micro' ? 2 : 1.2) * d; ctx.strokeRect(gx0, gy0, L.Cx - gx0, L.gh);
  ctx.fillStyle = rgb(mixc(aco, [0, 0, 0], .1)); ctx.fillRect(L.Ox - 3 * d, gy0 - 4 * d, 6 * d, L.gh + 8 * d);      // flange
  poli(ctx, [M.x, M.y, ...pp(M.x, M.y, M.w * .6), ...pp(M.x + M.w, M.y, M.w * .6), M.x + M.w, M.y], rgb(mixc(aco, [255, 255, 255], .25)));
  ctx.fillStyle = rgb(aco); ctx.fillRect(M.x, M.y, M.w, M.h);
  ctx.strokeStyle = rgb(mixc(aco, [0, 0, 0], .3)); ctx.lineWidth = d; ctx.beginPath();
  for (let n = 1; n < 7; n++) { const y = M.y + M.h * n / 7; ctx.moveTo(M.x + 3 * d, y); ctx.lineTo(M.x + M.w - 3 * d, y); } ctx.stroke();
  ctx.globalAlpha = 1;

  // ondas: do magnetron até a amostra; o que atravessa volta da parede
  const Pinc = F.p.micro ? F.p.pot : 0;
  if (Pinc > 0) {
    ctx.save(); ctx.globalAlpha = al('micro'); ctx.lineCap = 'round';
    const lam = .16 * L.sw, fasePx = (fase * 1.6 % 1) * lam, amp = L.gh * .32;
    ctx.beginPath(); ctx.rect(gx0, gy0, S.x - gx0, L.gh); ctx.clip();
    for (let x = gx0 + fasePx - lam; x < S.x; x += lam) { const a = amp * (x < L.Cx ? 1 : .9); ctx.beginPath(); ctx.arc(x - a * 1.4, L.gy, a * 1.6, -.6, .6); ctx.strokeStyle = mo; ctx.lineWidth = 2 * d; ctx.stroke(); }
    ctx.restore();
    const ret = F.P.trans * F.p.retorno / Pinc;
    if (ret > .02) {
      ctx.save(); ctx.globalAlpha = al('micro') * cl(ret * 2.2, .25, .9); ctx.beginPath(); ctx.rect(S.x + S.w, L.gy - L.gh / 2, L.Cx + L.Cw - S.x - S.w, L.gh); ctx.clip();
      for (let x = L.Cx + L.Cw + (fasePx - lam); x > S.x + S.w; x -= lam) { const a = amp * .8; ctx.beginPath(); ctx.arc(x + a * 1.4, L.gy, a * 1.6, Math.PI - .6, Math.PI + .6); ctx.strokeStyle = css('--c-ev'); ctx.lineWidth = 1.5 * d; ctx.stroke(); }
      ctx.restore();
    }
  }

  // gás: entrada de CO pelo piso à esquerda, saída pelo teto à direita
  const reac = F.p.reacao, gas = css('--c-reac'), r = .028 * L.sw, gi = L.gin, go = L.gout;
  ctx.globalAlpha = al('gas');
  ctx.fillStyle = rgb(mixc(aco, [255, 255, 255], .1)); ctx.fillRect(gi.x - r, L.piso - 2 * d, 2 * r, gi.y0 - L.piso + 2 * d);
  ctx.strokeStyle = foco === 'gas' ? gas : rgb(mixc(aco, [0, 0, 0], .25)); ctx.lineWidth = (foco === 'gas' ? 2 : 1) * d; ctx.strokeRect(gi.x - r, L.piso, 2 * r, gi.y0 - L.piso);
  ctx.fillStyle = rgb(mixc(aco, [255, 255, 255], .1)); ctx.fillRect(go.x - r, go.y1, 2 * r, L.Cy - go.y1 + 2 * d); ctx.fillRect(go.x - r, go.y1 - r, go.x1 - go.x + r, 2 * r);
  ctx.strokeRect(go.x - r, go.y1 + r, 2 * r, L.Cy - go.y1 - r); ctx.beginPath(); ctx.moveTo(go.x - r, go.y1 + r); ctx.lineTo(go.x - r, go.y1 - r); ctx.lineTo(go.x1, go.y1 - r); ctx.moveTo(go.x + r, go.y1 + r); ctx.lineTo(go.x1, go.y1 + r); ctx.stroke();
  if (st.rodando || F.t > 0) {
    const u = (fase * 2.4) % 1;
    if (reac) for (let n = 0; n < 3; n++) { const y = gi.y0 - ((u + n / 3) % 1) * (gi.y0 - L.piso + .05 * L.sw); seta(ctx, gi.x, y, 0, -9 * d, gas, 1.6 * d, 5 * d); }
    seta(ctx, go.x1 - 16 * d, go.y1, 14 * d, 0, gas, 1.8 * d, 6 * d);
  }
  ctx.globalAlpha = 1;

  // vapor: sai da amostra enquanto ela seca, sobe e deixa o forno pela saída
  const ev = ativo.seca;
  if (ev > 0 && (st.rodando || vapor.length)) {
    if (st.rodando && Math.random() < cl(ev / 3, .2, .95)) vapor.push({ x: S.x + Math.random() * S.w, y: S.y - 2 * d, v: .6 + Math.random() * .5, r: 2.5 + Math.random() * 3.5 });
  }
  if (vapor.length) {
    ctx.save(); ctx.globalAlpha = al('agua'); ctx.beginPath(); ctx.rect(L.Cx, L.Cy, L.Cw, L.CH); ctx.rect(go.x - r, go.y1 - r, go.x1 - go.x + r, L.Cy - go.y1 + r); ctx.clip();
    const evc = cl0 ? 'rgba(90,110,125,' : 'rgba(225,236,245,';
    vapor = vapor.filter(b => b.y > go.y1 - r && b.x < go.x1);
    for (const b of vapor) {
      if (st.rodando) { if (b.y > L.Cy + 6 * d) { b.y -= b.v * d * 1.6; b.x += (go.x - b.x) * .012; } else { b.x += (go.x - b.x) * .2; b.y -= b.v * d * 1.6; if (b.y < go.y1 + r) { b.y = go.y1; b.x += 3 * d; } } }
      const rr = b.r * d * (1 + (S.y - b.y) / (S.y - L.Cy + 1) * .8), gv = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, rr); gv.addColorStop(0, evc + '.42)'); gv.addColorStop(1, evc + '0)');
      ctx.globalAlpha = al('agua'); ctx.fillStyle = gv; ctx.beginPath(); ctx.arc(b.x, b.y, rr, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
    if (!st.rodando && !ev) vapor = [];
  }

  // perdas pelas paredes
  if (foco === 'paredes' && F.p.perdas && ENERGIA_TOTAL.perdaW > 1) {
    const pc = css('--c-perda'), n = 5;
    for (let q = 0; q < n; q++) { const y = L.Oy + L.Oh * (q + .5) / n; seta(ctx, L.Ox + L.Ow + 4 * d, y, 16 * d, 0, pc, 1.6 * d, 5 * d); }
    for (let q = 0; q < 4; q++) { const x = L.Ox + L.Ow * (q + .5) / 4; seta(ctx, x, L.Oy + L.Oh + 4 * d, 0, 12 * d, pc, 1.6 * d, 5 * d); }
  }

  // porta aberta, articulada na aresta direita
  ctx.globalAlpha = al('paredes') * .6 + .4;
  const px0 = L.Ox + L.Ow + 2 * d, dw = .36 * L.sw, dd = .07 * L.sw;
  poli(ctx, [px0, L.Oy, px0 + dw, L.Oy + dd, px0 + dw, L.Oy + L.Oh + dd * 1.6, px0, L.Oy + L.Oh], rgb(mixc(acoE, [255, 255, 255], cl0 ? .3 : .1)), rgb(aco), 1.5 * d);
  const jw = [px0 + dw * .18, L.Oy + L.Oh * .2 + dd * .18, px0 + dw * .82, L.Oy + L.Oh * .2 + dd * .82, px0 + dw * .82, L.Oy + L.Oh * .78 + dd * 1.3, px0 + dw * .18, L.Oy + L.Oh * .78 + dd * .5];
  poli(ctx, jw, rgb(mixc(cav, [0, 0, 0], .1)), rgb(aco), d);
  ctx.save(); poli(ctx, jw); ctx.clip(); ctx.strokeStyle = rgb(mixc(aco, cav, .4)); ctx.lineWidth = .8 * d; ctx.beginPath();
  for (let x = px0; x < px0 + dw; x += 3.5 * d) { ctx.moveTo(x, L.Oy); ctx.lineTo(x, L.Oy + L.Oh + dd * 2); } ctx.stroke(); ctx.restore();
  ctx.globalAlpha = 1;

  if (tela.estreita) return;
  // rótulos com linha de chamada
  const rot = (t, sub, x, y, tx, ty, cor, grupo, al2) => {
    ctx.globalAlpha = al(grupo);
    ctx.strokeStyle = so; ctx.lineWidth = d; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(tx, ty); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, 2 * d, 0, Math.PI * 2); ctx.fillStyle = so; ctx.fill();
    const a = al2 || (tx < x ? 'right' : 'left'), dx = a === 'right' ? -4 * d : a === 'left' ? 4 * d : 0;
    escreve(ctx, t, tx + dx, ty - (sub ? 6 * d : 0), cor || css('--text'), a, 10, 700, '--sans');
    if (sub) escreve(ctx, sub, tx + dx, ty + 7 * d, mu, a, 9.5, 500);
    ctx.globalAlpha = 1;
  };
  rot('Magnetron', '', M.x + M.w / 2, M.y, M.x + M.w / 2, M.y - 16 * d, null, 'micro', 'center');
  rot('Micro-ondas', Pinc ? `${int(Pinc)} W` : 'desligadas', (gx0 + L.Ox) / 2 + 6 * d, gy0 + L.gh, (gx0 + L.Ox) / 2 + 6 * d, gy0 + L.gh + 24 * d, mo, 'micro', 'center');
  rot(reac ? 'Entrada de CO' : 'Entrada de gás inerte', reac ? 'atmosfera redutora' : '', gi.x - r, gi.y0 - 6 * d, gi.x - r - 18 * d, gi.y0 - 6 * d, gas, 'gas', 'right');
  const removida = Math.max(0, R.evap) * 1000;
  rot('Saída de gases', reac ? `vapor e CO₂ · ${int(removida)} g de água removidos` : `vapor · ${int(removida)} g de água removidos`, go.x1 - 6 * d, go.y1, go.x1 + 8 * d, go.y1 - 2 * d, css('--c-ev'), ev > 0 ? 'agua' : 'gas', 'left');
  rot('Carcaça de aço', '', L.Ox + 2 * d, L.Oy + L.Oh - 8 * d, L.Ox - 16 * d, L.Oy + L.Oh - 8 * d, null, 'paredes', 'right');
  rot('Isolamento', F.p.perdas ? `perdas ${int(ENERGIA_TOTAL.perdaW)} W` : 'perdas desligadas', L.Ox + L.ti * .5, L.Oy + L.Oh * .12, L.Ox - 16 * d, L.Oy + L.Oh * .12, null, 'paredes', 'right');
  rot('Cavidade', '', L.Cx + L.Cw - 10 * d, L.Cy + 10 * d, L.Cx + L.Cw - 26 * d, L.Cy + 20 * d, so, 'tudo', 'right');
  rot('Porta', '', px0 + dw * .8, L.Oy + L.Oh * .5 + dd, px0 + dw + 14 * d, L.Oy + L.Oh * .5 + dd, null, 'paredes', 'left');
  rot('Bandeja', '', tray.x1 - 4 * d, tray.y + tray.e / 2, tray.x1 + 26 * d, tray.y + 18 * d, null, 'amostra', 'left');
  // a amostra: o que é e como entrar
  ctx.globalAlpha = 1;
  const um = R.aguaFr * F.p.umidade * 100;
  const sub = F.t > 0 ? `${int(Tm)} °C · água ${pct(R.aguaFr)} da inicial` : `${int(Tm)} °C · umidade ${fmt(um, 0)} %`;
  escreve(ctx, 'Amostra · 180 × 100 mm', S.x, S.y - 30 * d, css('--text'), 'left', 10.5, 700, '--sans');
  escreve(ctx, sub, S.x, S.y - 16 * d, mu, 'left', 9.5, 500);
  if (!emTransicao()) etiqueta(ctx, 'Clique na amostra para aproximar', S.x + S.w / 2 + .1 * L.sw, L.gin.y0 + 12 * d, '#ffffff');
}

// ---- separador magnético: produto estimado para o estado atual do lote ----
let graos = [];
function desenharSeparador(ctx) {
  const W = tela.W, H = tela.H, d = DPR, cl0 = claro(), mu = css('--muted'), tx = css('--text'), e = tela.estreita;
  const aco = hex(cl0 ? '#9aa6b0' : '#56636e');
  ctx.fillStyle = css('--palco'); ctx.fillRect(0, 0, W, H);
  const topo = (e ? 46 : 74) * d, base = (e ? 44 : 52) * d;
  const u = Math.max(20, Math.min((W - 40 * d) / 6.4, (H - topo - base) / 2.65));
  const cx = W / 2;
  const dr = { x: cx - .1 * u, y: topo + .78 * u, r: .7 * u };
  // composição do concentrado e do rejeito
  const g = sepGramas(), conc = R.conc * 1000, tot = R.solido * 1000, rej = Math.max(0, tot - conc);
  const cf = corFase(), corC = (() => { let c = [0, 0, 0], s = 0; for (const q of ['f', 'm', 'w', 'h', 'mat']) { const w = g[q]; s += w; c = [c[0] + cf[q][0] * w, c[1] + cf[q][1] * w, c[2] + cf[q][2] * w]; } return s > 0 ? c.map(v => v / s) : cf.mat; })();
  let corR = [0, 0, 0]; { let s = 0; for (let k = 0; k < F.n; k += 7) { const c = corMaterial(k); corR = [corR[0] + c[0], corR[1] + c[1], corR[2] + c[2]]; s++; } corR = mixc(corR.map(v => v / s), cf.mat, .45); }
  // alimentação: silo e calha até o topo do tambor
  const sx0 = dr.x - 2.6 * u, sy0 = topo + .05 * u, sw0 = .95 * u, sh0 = .55 * u;
  poli(ctx, [sx0, sy0, sx0 + sw0, sy0, sx0 + sw0 * .62, sy0 + sh0, sx0 + sw0 * .38, sy0 + sh0], rgb(mixc(aco, [255, 255, 255], cl0 ? .45 : .08)), rgb(aco), 1.5 * d);
  ctx.fillStyle = rgb(corR); ctx.fillRect(sx0 + 4 * d, sy0 + 4 * d, sw0 - 8 * d, sh0 * .28);
  const c0 = [sx0 + sw0 / 2, sy0 + sh0], c1 = [dr.x - dr.r * .45, dr.y - dr.r * .93];
  ctx.strokeStyle = rgb(aco); ctx.lineWidth = 3 * d; ctx.beginPath(); ctx.moveTo(c0[0], c0[1] + 6 * d); ctx.lineTo(c1[0], c1[1]); ctx.stroke();
  if (!e) { escreve(ctx, 'Lote tratado', sx0 + sw0 / 2, sy0 + sh0 + 18 * d, tx, 'center', 10.5, 700, '--sans'); escreve(ctx, `${int(tot)} g`, sx0 + sw0 / 2, sy0 + sh0 + 32 * d, mu, 'center', 9.5, 500); }
  // tambor com o setor de ímãs fixo; a casca gira
  ctx.beginPath(); ctx.arc(dr.x, dr.y, dr.r, 0, Math.PI * 2); ctx.fillStyle = rgb(mixc(aco, [255, 255, 255], cl0 ? .4 : .06)); ctx.fill(); ctx.strokeStyle = rgb(aco); ctx.lineWidth = 2 * d; ctx.stroke();
  const a0 = -Math.PI * .6, a1 = Math.PI * .6;
  ctx.beginPath(); ctx.moveTo(dr.x, dr.y); ctx.arc(dr.x, dr.y, dr.r * .8, a0, a1); ctx.closePath(); ctx.fillStyle = cl0 ? 'rgba(190,60,50,.2)' : 'rgba(230,90,80,.22)'; ctx.fill();
  for (let n = 0; n < 5; n++) { const a = a0 + (a1 - a0) * (n + .5) / 5; escreve(ctx, n % 2 ? 'S' : 'N', dr.x + Math.cos(a) * dr.r * .6, dr.y + Math.sin(a) * dr.r * .6, cl0 ? '#9b3027' : '#ff9d8f', 'center', 8.5, 700); }
  const giro = (fase * 1.2) % (Math.PI * 2); ctx.strokeStyle = rgb(mixc(aco, [0, 0, 0], .25)); ctx.lineWidth = d;
  for (let n = 0; n < 10; n++) { const a = giro + n * Math.PI / 5; ctx.beginPath(); ctx.moveTo(dr.x + Math.cos(a) * dr.r * .9, dr.y + Math.sin(a) * dr.r * .9); ctx.lineTo(dr.x + Math.cos(a) * dr.r, dr.y + Math.sin(a) * dr.r); ctx.stroke(); }
  ctx.beginPath(); ctx.arc(dr.x, dr.y, 4 * d, 0, Math.PI * 2); ctx.fillStyle = rgb(aco); ctx.fill();
  if (!e) { escreve(ctx, 'Tambor magnético', dr.x - dr.r - 10 * d, dr.y + dr.r * .55, tx, 'right', 10, 700, '--sans'); escreve(ctx, `captura ${pct(F.p.captura)}`, dr.x - dr.r - 10 * d, dr.y + dr.r * .55 + 13 * d, mu, 'right', 9.5, 500); }
  // recipientes: concentrado sob o tambor, rejeito à frente
  const bw = 1.35 * u, bh = .8 * u, by = dr.y + dr.r + .35 * u;
  const bC = { x: dr.x - bw * .45, y: by }, bR = { x: dr.x + dr.r + 1.0 * u, y: by };
  const balde = (b, cor, fr, t1, l1, l2, l3) => {
    ctx.fillStyle = rgb(mixc(aco, [255, 255, 255], cl0 ? .55 : .03)); ctx.fillRect(b.x, b.y, bw, bh);
    const h = bh * cl(fr, 0, 1) * .9; ctx.fillStyle = rgb(cor); ctx.fillRect(b.x + 3 * d, b.y + bh - h - 3 * d, bw - 6 * d, h);
    ctx.strokeStyle = rgb(aco); ctx.lineWidth = 2 * d; ctx.beginPath(); ctx.moveTo(b.x, b.y); ctx.lineTo(b.x, b.y + bh); ctx.lineTo(b.x + bw, b.y + bh); ctx.lineTo(b.x + bw, b.y); ctx.stroke();
    const xl = b.x + bw / 2;
    escreve(ctx, `${t1} · ${l1}`, xl, b.y + bh + 14 * d, tx, 'center', 11, 700, '--sans');
    escreve(ctx, l2, xl, b.y + bh + 29 * d, mu, 'center', 9.5, 500);
    if (l3) escreve(ctx, l3, xl, b.y + bh + 42 * d, mu, 'center', 9.5, 500);
  };
  const feRej = Math.max(0, R.feTotal - R.feConc) * 1000;
  balde(bC, corC, conc / Math.max(tot, 1e-9), 'Concentrado', `${int(conc)} g`, `teor de Fe ${pct(R.teor)}`, `recupera ${pct(R.rec)} do ferro`);
  balde(bR, corR, rej / Math.max(tot, 1e-9), 'Rejeito', `${int(rej)} g`, `teor de Fe ${pct(rej > 0 ? feRej / rej : 0)}`, '');
  // grãos: os magnéticos seguem o tambor e caem no concentrado; o resto é lançado ao rejeito
  const fMag = tot > 0 ? cl(conc / tot, 0, 1) : 0, rr = dr.r + 3 * d;
  if (graos.length < 80 && Math.random() < .85) graos.push({ u: 0, mag: Math.random() < fMag, j: Math.random() });
  const aT = Math.atan2(c1[1] - dr.y, c1[0] - dr.x), aR = Math.PI * .62;
  const pos = q => {
    if (q.u < .3) { const s = q.u / .3; return [c0[0] + (c1[0] - c0[0]) * s, c0[1] + 4 * d + (c1[1] - c0[1] - 4 * d) * s - 3 * d]; }
    const s = (q.u - .3) / .7;
    if (q.mag) {
      if (s < .55) { const ang = aT + (aR - aT) * s / .55; return [dr.x + Math.cos(ang) * rr, dr.y + Math.sin(ang) * rr]; }
      const x0 = dr.x + Math.cos(aR) * rr, y0 = dr.y + Math.sin(aR) * rr, w = (s - .55) / .45, xf = bC.x + bw * (.2 + .6 * q.j), yf = bC.y + bh * .55;
      return [x0 + (xf - x0) * w, y0 + (yf - y0) * w * w];
    }
    const x0 = dr.x + Math.cos(-Math.PI * .35) * rr, y0 = dr.y + Math.sin(-Math.PI * .35) * rr, xf = bR.x + bw * (.15 + .7 * q.j), yf = bR.y + bh * .55;
    if (s < .15) { const ang = aT + (-Math.PI * .35 - aT) * s / .15; return [dr.x + Math.cos(ang) * rr, dr.y + Math.sin(ang) * rr]; }
    const w = (s - .15) / .85; return [x0 + (xf - x0) * w, y0 - .35 * u * Math.sin(Math.PI * Math.min(w, .5)) + (yf - y0) * w * w];
  };
  for (const q of graos) { q.u += .0065; const [x, y] = pos(q); ctx.beginPath(); ctx.arc(x, y, 2.3 * d, 0, Math.PI * 2); ctx.fillStyle = rgb(q.mag ? corC : corR); ctx.fill(); }
  graos = graos.filter(q => q.u < 1);
  // o que este resultado significa
  const tit = 'Separação estimada para este lote', sub = e ? `estimativa em t = ${int(F.t)} s` : F.parou ? `com o estado do forno ao fim do tratamento, t = ${int(F.t)} s` : `o lote ainda está no forno: estimativa com o estado em t = ${int(F.t)} s`;
  const x0 = (e ? 10 : 16) * d, y0 = e ? 10 * d : H - 40 * d;
  escreve(ctx, tit, x0, y0 + 6 * d, css('--orange'), 'left', 12, 700, '--sans');
  escreve(ctx, sub, x0, y0 + 22 * d, mu, 'left', 10, 500);
}

// ---- fenômenos ativos agora e etapa do tratamento ----
const ativo = { aquece: 0, seca: 0, reduz: 0 };
function medirAtivos() {
  const h = F.hist, n = h.length;
  ativo.aquece = ativo.seca = ativo.reduz = 0;
  if (n < 2 || F.t <= 0 || F.parou) return;
  const a = h[n - 1], b = h[Math.max(0, n - 4)], dt = a.t - b.t; if (dt <= 0) return;
  const dT = (a.Tm - b.Tm) / dt, dA = -(a.agua - b.agua) / dt * F.agua0 * F.n * 1000 * 60, dR = (-(a.h - b.h)) / dt * 100 * 60;
  if (F.p.micro && dT > .02) ativo.aquece = dT;
  if (dA > .05) ativo.seca = dA;
  if (dR > .05) ativo.reduz = dR;
}
const PROC = ['carregada', 'aquece', 'reduz', 'fim', 'separa'];
function etapaProcesso() {
  if (F.parou) return 3;
  if (F.t <= 0) return 0;
  return R.fr.m + R.fr.w + R.fr.f > .01 ? 2 : 1;
}
function trilhaProcesso() {
  medirAtivos();
  const k = etapaProcesso(), sep = st.nivel === 'separador', atual = sep ? 4 : k;
  $$('#proc [data-proc]').forEach((b, i) => {
    b.dataset.estado = i === atual ? 'agora' : i < k || (i === k && F.parou) ? 'feito' : i === k ? 'atual' : '';
    if (i === atual) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
  });
  const at = { aquece: ativo.aquece ? `+${fmt(ativo.aquece, 1)} °C/s` : '', seca: ativo.seca ? `${int(Math.max(0, R.evap) * 1000)} g` : '', reduz: ativo.reduz ? `Fe ${pct(R.met)}` : '' };
  for (const q in at) { const el = $(`#ativos [data-at="${q}"]`); el.dataset.on = at[q] ? '1' : ''; pt(el.querySelector('i'), at[q]); }
}

// ---- mudar de nível ----
function irNivel(n, opt = {}) {
  const de = st.nivel;
  if (n === de && !opt.forcar) return;
  if (st.det && n !== 'amostra' && n !== 'celula') fecharPasso();
  const dentro = v => v === 'amostra' || v === 'celula';
  if (de === 'forno' && dentro(n)) {
    Object.assign(vista, VTODO); alvo = { ...VTODO };
    cam.de = 0; cam.para = 1; cam.t0 = performance.now(); cam.depois = () => { st.nivel = 'amostra'; ajustarNivel(); if (n === 'celula') irCelula(); };
    st.nivel = 'forno-amostra';
  } else if (dentro(de) && n === 'forno') {
    Object.assign(vista, VTODO); alvo = { ...VTODO }; animZoom = 0;
    st.nivel = 'forno-amostra'; cam.de = 1; cam.para = 0; cam.t0 = performance.now(); cam.depois = () => { st.nivel = 'forno'; ajustarNivel(); };
  } else if (n === 'celula') { st.nivel = 'celula'; irCelula(); }
  else if (n === 'amostra') { st.nivel = 'amostra'; irPara(VTODO); }
  else { st.nivel = n; graos = []; }
  ajustarNivel(); pedirDesenho();
}
function irCelula() {
  st.nivel = 'celula'; visto.celula = true;
  const w = 18, h = w * NY / NX, cx = st.sonda.i + .5, cy = st.sonda.j + .5;
  const x0 = cl(cx - w / 2, 0, NX - w), y0 = cl(cy - h / 2, 0, NY - h);
  irPara({ x0, y0, x1: x0 + w, y1: y0 + h });
  if (st.lente !== 'celula') st.lente = 'celula';
  ajustarNivel(); sincronizar();
}
function ajustarNivel() {
  const n = st.nivel === 'forno-amostra' ? (cam.para ? 'amostra' : 'forno') : st.nivel;
  $('#palco').dataset.nivel = n;
  $$('#niveis [data-nivel]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.nivel === n)));
  trilhaProcesso();
}

// desenho das cenas que ocupam o palco inteiro
function cenaInteira(V) {
  const c = tela.campo.getContext('2d'), g = tela.glifos.getContext('2d');
  g.clearRect(0, 0, tela.W, tela.H);
  if (st.nivel === 'separador') {
    desenharSeparador(c); barra(V); fase += .02;
    if (!document.hidden) pedirDesenho();
    return;
  }
  pintarCampo(V, true);
  c.setTransform(1, 0, 0, 1, 0, 0); c.fillStyle = css('--palco'); c.fillRect(0, 0, tela.W, tela.H);
  const e = camE(), L = layoutForno(), S = L.S, Rr = tela.R, sF = Rr.w / S.w;
  const s = Math.pow(sF, e), w = sF === 1 ? e : (s - 1) / (sF - 1);
  const X = S.x + (Rr.x - S.x) * w, Y = S.y + (Rr.y - S.y) * w;
  c.save(); c.setTransform(s, 0, 0, s, X - s * S.x, Y - s * S.y);
  desenharForno(c, V);
  c.restore();
  barra(V);
  if (st.rodando) fase += .02;
  if (st.rodando || emTransicao() || vapor.length) pedirDesenho();
}
// no nível célula: a célula da sonda e o calor que atravessa cada face
function celulaGlifo(ctx) {
  const i = st.sonda.i, j = st.sonda.j, k = K(), e = escala(), d = DPR;
  const x0 = sx(i), x1 = sx(i + 1), y0 = sy(j + 1), y1 = sy(j);
  ctx.save(); ctx.lineWidth = 2.5 * d; ctx.strokeStyle = css('--orange'); ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);
  if (F.p.conducao && e > 14 * d) {
    const kc = F.p.conducao ? MAT.k * F.dy * MAT.prof / F.dx : 0, T = F.T, cor = css('--c-cond');
    const viz = [[i - 1, j, -1, 0], [i + 1, j, 1, 0], [i, j - 1, 0, -1], [i, j + 1, 0, 1]];
    let mx = 1e-9; const q = viz.map(([a, b]) => a < 0 || b < 0 || a >= NX || b >= NY ? 0 : kc * (T[a + NX * b] - T[k])); for (const v of q) mx = Math.max(mx, Math.abs(v));
    viz.forEach(([a, b, dx, dy], n) => {
      const v = q[n]; if (Math.abs(v) < mx * .05) return;
      const cx = (x0 + x1) / 2 + dx * (x1 - x0) * .5, cy = (y0 + y1) / 2 - dy * (y1 - y0) * .5, L = Math.min(e * .9, 30 * d) * Math.sqrt(Math.abs(v) / mx), sgn = v > 0 ? -1 : 1;
      seta(ctx, cx - sgn * dx * L * .5, cy + sgn * dy * L * .5, sgn * dx * L, -sgn * dy * L, cor, 2 * d, 7 * d);
    });
  }
  ctx.restore();
}

// ---- o ensaio no tempo ----
const TM = { fluxos: 0, micro: 0, energia: 0, reacao: 0, inventario: 0, tot: 0 };
let acum = 0, antes = 0;
function umPasso() {
  if (F.parou) return false;
  let tot = 0;
  do {
    const t0 = performance.now(), nome = F.etapa(), ms = performance.now() - t0;
    TM[nome] += (ms - TM[nome]) * .1; tot += ms;
  } while (F.rascunho);
  TM.tot += (tot - TM.tot) * .1;
  return true;
}
function avancar(agora) {
  const dtr = antes ? Math.min(.1, (agora - antes) / 1000) : 0; antes = agora;
  if (!st.rodando || st.det) return;
  acum += dtr * st.vel;
  let n = 0;
  while (acum >= F.dt && n < 60) { if (!umPasso()) break; acum -= F.dt; n++; }
  if (n) aoPasso();
  if (F.parou) parar();
}
function parar() {
  st.rodando = false; acum = 0; $('#play').setAttribute('aria-pressed', 'false');
  $('#bancada').dataset.parou = F.parou || '';
  if (F.parou === 'fim') mudou('fim'); else if (F.parou === 'fusao') mudou('fusao'); else if (F.parou === 'instavel') mudou('instavel');
  painel(true);
}
let R = F.resumo();
function aoPasso() {
  R = F.resumo();
  ENERGIA_TOTAL.perdaW = F.ultimo.perdaTot / F.ultimo.dt;
  eventos(); painel(false);
}

// ---- avisos: o que acabou de acontecer no lote ----
const TXT = {
  inicio: () => 'A amostra começa úmida e a 25 °C. A onda entra pela esquerda e a água, que absorve bem, segura a energia perto da face de entrada.',
  seca: () => 'A amostra começa seca. Sem água, quase toda a onda atravessa a amostra a frio: só uma parte é absorvida, e o resto volta da parede da cavidade.',
  patamar: () => 'As primeiras células chegaram a 100 °C. Enquanto tiverem água, a energia vira vapor e a temperatura fica parada: veja o campo Água.',
  metadeAgua: () => `Metade da água já saiu. A frente de secagem avança a partir da face de entrada, e a amostra absorve ${pct(F.P.abs / Math.max(F.P.inc, 1))} da potência incidente.`,
  secou: () => 'A amostra secou. Daqui em diante, toda a energia aquece o sólido, e a absorção passa a depender da temperatura e das fases do ferro.',
  fuga: () => `A célula mais quente está ${int(C(R.Tx) - C(R.Tm))} °C acima da média. Quanto mais quente, mais ela absorve, e mais aquece: é a fuga térmica.`,
  magnetita: () => 'Apareceu magnetita. A primeira etapa da redução começou nas células mais quentes, e a magnetita absorve a onda melhor que a hematita.',
  wustita: () => 'Uma região passou de 570 °C. Ali a magnetita passa a virar wüstita, uma etapa que absorve calor, antes de virar ferro.',
  ferro: () => 'Já há ferro metálico. A última etapa é a mais lenta e só anda onde a amostra está muito quente.',
  fim: () => `Fim do lote em ${int(F.t)} s. ${F.p.reacao ? `${pct(R.met)} do ferro virou metal e o separador recuperaria ${pct(R.rec)} do ferro, com teor de ${pct(R.teor)}.` : `Temperatura média de ${int(C(R.Tm))} °C, com ${pct(1 - R.aguaFr)} da água removida.`} Compare as experiências na aba Ensaio.`,
  fusao: () => `Uma célula chegou a 1.200 °C em ${int(F.t)} s e o ensaio parou: a fusão está fora deste modelo de leito sólido. Reduza a potência ou desligue a absorção dependente do estado.`,
  instavel: () => 'O passo de tempo ficou grande demais para a condução explícita e a temperatura oscilou sem controle. Volte o número de Fourier para menos de 0,25 e reinicie.',
  micro: () => F.p.micro ? 'As micro-ondas voltaram a entrar na amostra.' : 'Sem micro-ondas, nada entra: a amostra só perde calor pelas bordas e a condução nivela as temperaturas.',
  acopla: () => F.p.acopla ? 'A absorção volta a depender da água, da temperatura e das fases. Pontos quentes absorvem mais e se destacam.' : 'Absorção fixa: a penetração passa a ser 180 mm em todas as células, como num envelope prescrito. Não há fuga térmica e a amostra aquece de modo mais uniforme.',
  secagem: () => F.p.secagem ? 'A água volta a evaporar ao chegar a 100 °C.' : 'Sem secagem, a água não sai: ela continua absorvendo a onda e a temperatura passa de 100 °C sem patamar. Fisicamente a água ferveria.',
  reacao: () => F.p.reacao ? 'A atmosfera volta a ter CO: a hematita pode perder oxigênio.' : 'Sem CO, a hematita não reduz: o ferro continua ligado ao oxigênio e quase não responde ao ímã.',
  conducao: () => F.p.conducao ? 'A condução volta a nivelar a temperatura entre células vizinhas.' : 'Sem condução, cada célula guarda o que recebe: o campo fica marcado pelas linhas da onda.',
  perdas: () => F.p.perdas ? 'As bordas voltam a perder calor por convecção e radiação.' : 'Bordas isoladas: toda a energia absorvida fica na amostra.',
};
let timerAviso = 0;
function mudou(chave, titulo) {
  const T = { inicio: 'Início do lote', seca: 'Amostra seca', patamar: 'Patamar de 100 °C', metadeAgua: 'Secagem', secou: 'Amostra seca', fuga: 'Fuga térmica', magnetita: 'Redução · etapa 1', wustita: 'Redução · 570 °C', ferro: 'Redução · ferro metálico', fim: 'Fim do lote', fusao: 'Ensaio interrompido', instavel: 'Passo instável' };
  const el = $('#aviso-t'), box = $('#aviso'); el.textContent = '';
  const b = document.createElement('b'); b.textContent = titulo || T[chave] || ''; el.append(b, ' ', TXT[chave]());
  box.hidden = true; void box.offsetWidth; box.hidden = false;
  clearTimeout(timerAviso); timerAviso = setTimeout(() => { box.hidden = true; }, chave === 'fim' || chave === 'fusao' || chave === 'instavel' ? 30000 : 11000);
}
$('#aviso-x').addEventListener('click', () => { $('#aviso').hidden = true; clearTimeout(timerAviso); });
let ev = {};
function eventos() {
  const s = (k, c) => { if (!ev[k] && c) { ev[k] = true; mudou(k); } };
  s('patamar', R.agua < F.agua0 * .999 && F.agua0 > 0);
  s('metadeAgua', F.agua0 > 0 && R.aguaFr < .5);
  s('secou', F.agua0 > 0 && R.aguaFr < .01);
  s('magnetita', R.fr.m > .01);
  s('wustita', R.fr.w > .002);
  s('ferro', R.fr.f > .01);
  s('fuga', C(R.Tx) - C(R.Tm) > 300 && R.aguaFr < .05);
}

// ---- números de cima do palco e da trilha ----
function painel(tudo) {
  pt($('#k-tm'), int(C(R.Tm)) + ' °C'); pt($('#k-tx'), int(C(R.Tx)) + ' °C');
  pt($('#k-abs'), F.P.inc ? pct(F.P.abs / F.P.inc) : '—'); pt($('#k-agua'), F.agua0 ? pct(R.aguaFr) : '—');
  pt($('#k-met'), pct(R.met)); pt($('#k-rec'), pct(R.rec));
  pt($('#tempo'), `${int(F.t)} / ${int(F.p.duracao)} s`);
  trilhaProcesso();
  $('#prog').style.width = cl(F.t / F.p.duracao * 100, 0, 100).toFixed(1) + '%';
  vivoDeck(tudo); lente();
  conferirTarefas();
  if (st.rl === 'solver') solverPainel();
  if (st.rl === 'ensaio') produto();
}

// ---- console da equação ----
const DIAL = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1.5 6h9M7 2.5 10.5 6 7 9.5"/></svg>';
let cartoes = [], tVivo = 0;
const MW = 128, MH = 52, mimg = new ImageData(MW, MH);
function definirEq(eq) {
  if (st.eq !== eq) { st.eq = eq; st.chip = null; st.termo = null; st.dom = false; }
  montarDeck();
}
function visiveis(h) { let n = 0, dentro = false; for (const c of h) { if (c === '<') dentro = true; else if (c === '>') dentro = false; else if (!dentro) n++; } return n; }
function montarDeck() {
  const E = EQ[st.eq], box = $('#eqf-f');
  box.innerHTML = E.modelo().replace(/<span>/g, '<span translate="no">').replace(/\{(\w+)\}/g, (_, t) => {
    const T = TERMO[t], off = T.exige && !F.p[T.exige], bc = T.tipo === 'bc', ff = T.f();
    const f = `<span class="tb-f${visiveis(ff) > 11 ? ' tb-fl' : ''}" translate="no">${ff}</span>`, n = `<span class="tb-n">${T.rot}</span>`;
    const mini = T.tipo !== 'num' ? `<canvas class="tb-m" width="${MW * (bc ? 2 : 1)}" height="${MH * (bc ? 2 : 1)}" aria-hidden="true"></canvas>` : '';
    return `<button type="button" class="tb${bc ? ' tb-bc' : ''}${off ? ' tb-off' : ''}${mini ? '' : ' tb-sem'}" data-term="${t}" aria-pressed="${st.chip === t}" title="${T.n}">${bc ? n + f : f + n}<span class="tb-v"><b></b></span><span class="tb-b"><i></i></span>${mini}</button>`;
  });
  cartoes = $$('#eqf-f .tb');
  for (const b of cartoes) {
    b.style.setProperty('--tc', `var(${TERMO[b.dataset.term].cor})`); b._mini = b.querySelector('.tb-m');
    b.addEventListener('click', () => escolherTermo(b.dataset.term));
    if (b._mini && TERMO[b.dataset.term].tipo === 'bc') miniBC(b._mini, b.dataset.term);
  }
  $$('#eq-tabs [data-eq]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.eq === st.eq)));
  textoDeck(); tVivo = 0; vivoDeck(true);
}
function textoDeck() {
  const el = $('#eqf-txt'); el.textContent = ''; el._pt = null;
  const T = st.chip && TERMO[st.chip];
  if (!T || T.tipo === 'num') el.textContent = st.dom ? 'Cada ponto recebe a cor da parcela de maior módulo ali. Quanto mais viva a cor, maior a parcela. As porcentagens são a fração da amostra em que cada uma domina.' : EQ[st.eq].x;
  else { const b = document.createElement('b'); b.textContent = T.n + '. '; el.append(b, T.x); }
  for (const b of cartoes) b.setAttribute('aria-pressed', String(b.dataset.term === st.chip));
  let leg = $('#dom-leg');
  if (!st.dom || !EQ[st.eq].dom) { if (leg) leg.hidden = true; return; }
  if (!leg) { leg = document.createElement('div'); leg.className = 'dom-leg'; leg.id = 'dom-leg'; $('#eqf-f').after(leg); }
  leg.hidden = false; leg.textContent = '';
  for (const t of EQ[st.eq].dom.filter(q => !TERMO[q].exige || F.p[TERMO[q].exige])) {
    const s = document.createElement('span'), i = document.createElement('i'), n = document.createElement('span'), v = document.createElement('b');
    i.style.setProperty('--tc', `var(${TERMO[t].cor})`); n.textContent = TERMO[t].rot; v.dataset.dom = t; s.append(i, n, v); leg.append(s);
  }
}
function escolherTermo(t) {
  const T = TERMO[t]; visto.termos.add(t);
  if (T.tipo === 'num') { st.chip = t; textoDeck(); abrirRail('solver'); abrirPasso(); return; }
  if (T.exige && !F.p[T.exige]) { modelo(T.exige, true); return; }
  if (st.det) fecharPasso();
  if (st.chip === t) { st.chip = null; st.termo = null; textoDeck(); sincronizar(); return; }
  st.chip = t; st.dom = false;
  st.termo = T.tipo === 'bc' ? null : t;
  textoDeck(); sincronizar();
}
function vivo(a, b, c) {
  const el = $('#eqf-vivo');
  if (el.childNodes.length !== 3) { el.textContent = ''; el.append(document.createElement('span'), document.createElement('b'), document.createElement('span')); }
  pt(el.childNodes[0], a || ''); pt(el.childNodes[1], b || ''); pt(el.childNodes[2], c || '');
}
// miniaturas: cada cartão mostra, na amostra inteira, onde a parcela age
let miniVez = 0;
function miniatura(b) {
  const t = b.dataset.term, T = TERMO[t], px = mimg.data, off = T.exige && !F.p[T.exige], fundo = hex(claro() ? '#f6f6f2' : '#07111b');
  let f, lut, div = false;
  if (T.tipo === 'sep') {
    const c = hex(corFase()[T.fase] ? css(T.cor) : css('--f-mat'));
    f = k => T.fase === 'mat' ? .4 : (T.fase === 'h' ? F.h[k] : T.fase === 'm' ? F.m[k] : T.fase === 'w' ? F.wu[k] : F.f[k]) / F.nFe0;
    for (let j = 0; j < MH; j++) for (let i = 0; i < MW; i++) { const k = Math.min(NX - 1, (i * NX / MW) | 0) + NX * Math.min(NY - 1, (j * NY / MH) | 0), o = (i + MW * (MH - 1 - j)) * 4, a = f(k); px[o] = fundo[0] + (c[0] - fundo[0]) * a; px[o + 1] = fundo[1] + (c[1] - fundo[1]) * a; px[o + 2] = fundo[2] + (c[2] - fundo[2]) * a; px[o + 3] = 255; }
    b._mini.getContext('2d').putImageData(mimg, 0, 0); return;
  }
  div = T.eq === 'energia'; lut = div ? PAL.div : lutTermo(corDe(t));
  let mx = 1e-12; for (let k = 0; k < F.n; k++) mx = Math.max(mx, Math.abs(T.v(k)));
  const ref = Math.max(mx, T.ref * .05);
  for (let j = 0; j < MH; j++) for (let i = 0; i < MW; i++) {
    const k = Math.min(NX - 1, (i * NX / MW) | 0) + NX * Math.min(NY - 1, (j * NY / MH) | 0), o = (i + MW * (MH - 1 - j)) * 4;
    const v = off ? 0 : T.v(k), x = div ? .5 + .5 * Math.sign(v) * Math.sqrt(Math.min(1, Math.abs(v) / ref)) : Math.sqrt(Math.min(1, Math.max(0, v) / ref)), c = (x * 255 | 0) * 4;
    px[o] = lut[c]; px[o + 1] = lut[c + 1]; px[o + 2] = lut[c + 2]; px[o + 3] = 255;
  }
  b._mini.getContext('2d').putImageData(mimg, 0, 0);
}
function miniBC(cv, t) {
  const ctx = cv.getContext('2d'), w = MW, h = MH, x0 = 10, y0 = 8, x1 = w - 10, y1 = h - 8, cor = corDe(t);
  ctx.setTransform(cv.width / MW, 0, 0, cv.height / MH, 0, 0); ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = css('--palco'); ctx.fillRect(0, 0, w, h); ctx.fillStyle = css('--f-h'); ctx.globalAlpha = .55; ctx.fillRect(x0, y0, x1 - x0, y1 - y0); ctx.globalAlpha = 1;
  ctx.strokeStyle = cor; ctx.fillStyle = cor; ctx.lineWidth = 3; ctx.beginPath();
  if (t === 'entrada') { ctx.moveTo(x0, y0); ctx.lineTo(x0, y1); ctx.stroke(); for (const f of [.25, .5, .75]) seta(ctx, x0 - 9, y0 + (y1 - y0) * f, 8, 0, cor, 1.5, 4); }
  else if (t === 'parede') { ctx.moveTo(x1 + 4, y0 - 4); ctx.lineTo(x1 + 4, y1 + 4); ctx.stroke(); for (const f of [.3, .7]) seta(ctx, x1 + 2, y0 + (y1 - y0) * f, -12, 0, cor, 1.5, 4); }
  else if (t === 'faces') { ctx.setLineDash([4, 3]); ctx.strokeRect(x0, y0, x1 - x0, y1 - y0); ctx.setLineDash([]); for (const [x, y, dx, dy] of [[w / 2, y0, 0, -6], [w / 2, y1, 0, 6], [x0 + 20, y0, 0, -6]]) seta(ctx, x, y, dx, dy, cor, 1.4, 3.5); }
  else if (t === 'plano') { ctx.lineWidth = 1.5; ctx.strokeRect(x0 + 8, y0 + 5, x1 - x0 - 16, y1 - y0 - 10); ctx.beginPath(); ctx.moveTo(x0 + 8, y0 + 5); ctx.lineTo(x0, y0); ctx.moveTo(x1 - 8, y0 + 5); ctx.lineTo(x1, y0); ctx.moveTo(x0 + 8, y1 - 5); ctx.lineTo(x0, y1); ctx.moveTo(x1 - 8, y1 - 5); ctx.lineTo(x1, y1); ctx.stroke(); }
  else { for (let n = 0; n < 14; n++) { ctx.beginPath(); ctx.arc(x0 + 6 + (n * 37 % (x1 - x0 - 12)), y0 + 5 + (n * 23 % (y1 - y0 - 10)), 1.8, 0, Math.PI * 2); ctx.fill(); } }
}
const valorTermo = (t, k) => { const T = TERMO[t]; return T.v ? T.v(k) : 0; };
function vivoDeck(forcar) {
  const agora = performance.now(), lento = forcar || agora - tVivo > 250; if (!lento) return; tVivo = agora;
  const k = K(), eq = st.eq, vals = []; let mx = 1e-12, soma = 0, maior = null;
  const cs = cartoes.filter(b => b._mini && TERMO[b.dataset.term].tipo !== 'bc');
  if (forcar) cs.forEach(miniatura); else if (cs.length) { miniatura(cs[miniVez++ % cs.length]); miniatura(cs[miniVez++ % cs.length]); }
  for (const b of cartoes) {
    const t = b.dataset.term, T = TERMO[t], off = T.exige && !F.p[T.exige]; let m = 0, txt = '';
    if (off) txt = 'desligado';
    else if (T.tipo === 'esc' || T.tipo === 'mo') { const v = valorTermo(t, k); m = Math.abs(v); txt = sig(v, 2); }
    else if (T.tipo === 'num') { m = TM[T.et]; txt = fmt(TM[T.et], 2) + ' ms'; }
    else if (T.tipo === 'sep') { const g = sepGramas()[T.fase]; m = g; txt = int(g * 1000) + ' g'; }
    else if (t === 'entrada') txt = F.p.micro ? `${int(F.p.pot)} W` : 'desligada';
    else if (t === 'parede') txt = `devolve ${int(F.p.retorno * 100)} %`;
    else if (t === 'faces') txt = F.p.perdas ? `${int(ENERGIA_TOTAL.perdaW)} W perdidos` : 'isoladas';
    else if (t === 'plano') txt = 'isoladas';
    else if (t === 'gas') txt = F.p.reacao ? 'CO disponível' : 'sem CO';
    if (T.tipo !== 'bc' && T.tipo !== 'num' && m > mx) mx = m;
    if (T.tipo !== 'bc' && T.tipo !== 'num' && t !== 'acc') { soma += m; if (!maior || m > maior.m) maior = { t, m, txt }; }
    vals.push({ b, m, txt });
  }
  const ref = eq === 'num' ? Math.max(TM.tot, 1e-9) : mx;
  for (const v of vals) { v.b.querySelector('.tb-b i').style.width = (cl(v.m / ref, 0, 1) * 100).toFixed(1) + '%'; pt(v.b.querySelector('.tb-v b'), v.txt); }
  if (st.dom) for (const el of $$('#dom-leg [data-dom]')) pt(el, pct(DOM.parte[el.dataset.dom] || 0));
  const un = { energia: 'W/cm³', micro: '1/m', reducao: '%/min' }[eq];
  if (eq === 'bc') vivo(F.p.micro ? `Entram ${int(F.P.inc)} W pela face esquerda: a amostra absorve ${int(F.P.abs)} W, ${int(F.P.trans)} W se perdem na cavidade e ${int(F.P.volta)} W voltam pela face de entrada. As bordas perdem ${int(ENERGIA_TOTAL.perdaW)} W.` : 'Micro-ondas desligadas: nenhuma energia entra na amostra.');
  else if ((eq === 'energia' || eq === 'reducao') && maior) vivo('Na sonda, a maior parcela é ', TERMO[maior.t].rot, `: ${maior.txt} ${un}, ${pct(maior.m / Math.max(soma, 1e-12))} da soma dos módulos.`);
  else if (eq === 'micro') { const b = F.beta[k]; vivo(`Na sonda, β = ${sig(b, 2)} 1/m: a onda perde 63 % da potência em ${int(1000 / b)} mm. Maior parcela: `, maior ? TERMO[maior.t].rot : '', '.'); }
  else if (eq === 'agua') vivo(F.w[k] > 0 ? `A célula da sonda ainda tem ${pct(F.w[k] / Math.max(umid0(), 1e-12))} da água inicial e está a ${fmt(C(F.T[k]), 1)} °C.` : `A célula da sonda já secou e está a ${int(C(F.T[k]))} °C.`);
  else if (eq === 'separacao') vivo(`Concentrado de ${int(R.conc * 1000)} g com ${int(R.feConc * 1000)} g de ferro: recuperação de ${pct(R.rec)} e teor de ${pct(R.teor)}.`);
  else if (eq === 'num') vivo(`O último passo levou ${fmt(TM.tot, 2)} ms para ${int(F.n)} células.`);
  else vivo('');
}
function sepGramas() {
  const c = F.p.captura, g = { f: 0, m: 0, w: 0, h: 0, mat: F.p.arraste * F.matriz * F.n };
  for (let k = 0; k < F.n; k++) { g.f += F.f[k]; g.m += F.m[k]; g.w += F.wu[k]; g.h += F.h[k]; }
  const MM = MAT.M;
  return { f: c * MAGNETISMO.f * g.f * MM.f, m: c * MAGNETISMO.m * g.m * MM.m, w: c * MAGNETISMO.w * g.w * MM.w, h: c * MAGNETISMO.h * g.h * MM.h, mat: g.mat };
}

// ---- lentes ----
const TI = () => css('--text'), MU = () => css('--muted'), SO = () => css('--soft');
const tituloLente = t => pt($('#lente-t'), t), notaLente = t => pt($('#lente-n'), t);
function lente() {
  const cv = $('#lente-c'), ctx = cv.getContext('2d'), w = cv.width, h = cv.height, s = DPR;
  ctx.clearRect(0, 0, w, h); if (w < 60 || h < 60) return;
  ctx.setLineDash([]); ctx.globalAlpha = 1; ctx.lineJoin = 'round';
  if (st.lente === 'perfil') return lentePerfil(ctx, w, h, s);
  if (st.lente === 'energia') return lenteEnergia(ctx, w, h, s);
  if (st.lente === 'fases') return lenteFases(ctx, w, h, s);
  return lenteCelula(ctx, w, h, s);
}
// volume de controle da sonda: o que entra por cada face e o que é gerado dentro, em watts
function lenteCelula(ctx, w, h, s) {
  const k = K(), i = st.sonda.i, j = st.sonda.j, dt = F.ultimo ? F.ultimo.dt : F.dt;
  tituloLente(`Célula ${i + 1} × ${j + 1} · balanço de energia em W`);
  const g = (a, b, A, L) => MAT.k * A / L * (F.T[b] - F.T[a]);   // W que entram em a vindos de b
  const Ax = F.dy * MAT.prof, Ay = F.dx * MAT.prof;
  const faces = {
    oeste: i > 0 ? g(k, k - 1, Ax, F.dx) : null, leste: i < NX - 1 ? g(k, k + 1, Ax, F.dx) : null,
    sul: j > 0 ? g(k, k - NX, Ay, F.dy) : null, norte: j < NY - 1 ? g(k, k + NX, Ay, F.dy) : null,
  };
  if (!F.p.conducao) for (const q in faces) if (faces[q] != null) faces[q] = 0;
  const perda = F.perda[k] / dt, mo = F.q[k] * F.V, evp = F.evap[k] * MAT.L / dt, re = F.qr[k] * F.V;
  const acc = (faces.oeste || 0) + (faces.leste || 0) + (faces.sul || 0) + (faces.norte || 0) + mo - evp + re - perda;
  const ti = TI(), mu = MU(), wa = w * .44, a = Math.min(h * .26, wa * .24), cx = wa / 2, cy = h * .52;
  ctx.fillStyle = claro() ? 'rgba(20,35,44,.05)' : 'rgba(255,255,255,.05)'; ctx.fillRect(cx - a, cy - a, 2 * a, 2 * a);
  ctx.strokeStyle = ti; ctx.lineWidth = 1.5 * s; ctx.strokeRect(cx - a, cy - a, 2 * a, 2 * a);
  const mx = Math.max(1e-6, ...Object.values(faces).map(v => Math.abs(v || 0)), perda), Lm = a * .8, W = v => Math.abs(v) < 5e-4 ? '0' : sig(v, 2);
  const face = (v, px, py, nx, ny) => {
    const ext = v == null, val = ext ? -perda : v, entra = val > 0, L = Math.max(4 * s, Math.abs(val) / mx * Lm), cor = css(ext ? '--c-perda' : '--c-cond');
    const x0 = entra ? px + nx * L : px, y0 = entra ? py + ny * L : py;
    seta(ctx, x0, y0, (entra ? -1 : 1) * nx * L, (entra ? -1 : 1) * ny * L, cor, 2.4 * s, 7 * s);
    escreve(ctx, (val > 0 ? '+' : '') + W(val), px + nx * (L + 4 * s), py + ny * (L + 9 * s) - (nx ? 11 * s : 0), cor, nx < 0 ? 'right' : nx > 0 ? 'left' : 'center', 9);
  };
  face(faces.oeste, cx - a, cy, -1, 0); face(faces.leste, cx + a, cy, 1, 0); face(faces.sul, cx, cy + a, 0, 1); face(faces.norte, cx, cy - a, 0, -1);
  escreve(ctx, `${int(C(F.T[k]))} °C`, cx, cy, ti, 'center', 11, 700);
  const linhas = [['condução', (faces.oeste || 0) + (faces.leste || 0) + (faces.sul || 0) + (faces.norte || 0), '--c-cond'], ['micro-ondas', mo, '--c-mo'], ['evaporação', -evp, '--c-ev'], ['reação', re, '--c-reac'], ['perdas', -perda, '--c-perda'], ['acúmulo', acc, '--c-acc']];
  const x0 = wa + 8 * s, x1 = w - 8 * s, xm = (x0 + x1) / 2, Lb = (x1 - x0) / 2, hb = (h - 10 * s) / linhas.length, mb = Math.max(1e-6, ...linhas.map(l => Math.abs(l[1])));
  ctx.strokeStyle = ti; ctx.globalAlpha = .25; ctx.lineWidth = s; ctx.beginPath(); ctx.moveTo(xm, 6 * s); ctx.lineTo(xm, h - 4 * s); ctx.stroke(); ctx.globalAlpha = 1;
  linhas.forEach(([n, v, cor], q) => {
    const y = 6 * s + hb * q, L = v / mb * Lb;
    if (q === linhas.length - 1) { ctx.strokeStyle = ti; ctx.globalAlpha = .3; ctx.beginPath(); ctx.moveTo(x0, y - 1 * s); ctx.lineTo(x1, y - 1 * s); ctx.stroke(); ctx.globalAlpha = 1; }
    escreve(ctx, n, x0, y + 7 * s, mu, 'left', 9); escreve(ctx, W(v) + ' W', x1, y + 7 * s, ti, 'right', 9);
    ctx.fillStyle = css(cor); ctx.fillRect(Math.min(xm, xm + L), y + 14 * s, Math.max(1.5 * s, Math.abs(L)), Math.min(8 * s, hb - 18 * s));
  });
  const dTdt = acc / cap();
  notaLente(F.t === 0 ? 'Inicie o ensaio: a lente mostra, em watts, o que entra por cada face da célula da sonda e o que é gerado dentro dela.'
    : F.evap[k] > 0 ? `A célula ainda tem água: ${sig(evp, 2)} W viram vapor e a temperatura fica em 100 °C. Clique em outra célula do palco para mover a sonda.`
    : `A célula ganha ${sig(acc, 2)} W e aquece ${fmt(dTdt, 2)} °C/s. ${Math.abs(mo) > Math.abs(acc) * .6 ? 'Quase tudo vem da onda; a condução só redistribui.' : 'A condução e as perdas pesam tanto quanto a onda aqui.'}`);
}
// perfil ao longo da linha da sonda: temperatura, potência, água e fases
function lentePerfil(ctx, w, h, s) {
  const j = st.sonda.j; tituloLente(`Perfil na altura de ${int(j * 2 + 1)} mm`);
  const L = 34 * s, Rr = 34 * s, T = 10 * s, B = 34 * s, hf = 12 * s, X = i => L + (i + .5) / NX * (w - L - Rr), ti = TI(), mu = MU();
  let Tmx = 100, qmx = 1e-9; for (let i = 0; i < NX; i++) { const k = i + NX * j; Tmx = Math.max(Tmx, C(F.T[k])); qmx = Math.max(qmx, F.q[k]); }
  Tmx = Math.ceil(Tmx / 100) * 100;
  const Y = v => T + (1 - v) * (h - T - B - hf - 4 * s);
  ctx.lineWidth = s;
  for (let v = 0; v <= Tmx; v += Tmx / 4) { ctx.strokeStyle = ti; ctx.globalAlpha = .14; ctx.beginPath(); ctx.moveTo(L, Y(v / Tmx)); ctx.lineTo(w - Rr, Y(v / Tmx)); ctx.stroke(); ctx.globalAlpha = 1; escreve(ctx, int(v), L - 5 * s, Y(v / Tmx), SO(), 'right', 8.5); }
  escreve(ctx, sig(qmx / 1e6, 2), w - Rr + 5 * s, Y(1), css('--c-mo'), 'left', 8.5); escreve(ctx, '0', w - Rr + 5 * s, Y(0), css('--c-mo'), 'left', 8.5);
  // potência (área)
  ctx.beginPath(); ctx.moveTo(X(0), Y(0)); for (let i = 0; i < NX; i++) ctx.lineTo(X(i), Y(F.q[i + NX * j] / qmx)); ctx.lineTo(X(NX - 1), Y(0)); ctx.closePath();
  ctx.fillStyle = css('--c-mo'); ctx.globalAlpha = .25; ctx.fill(); ctx.globalAlpha = 1;
  // água (tracejada)
  if (umid0() > 0) { ctx.beginPath(); for (let i = 0; i < NX; i++) { const y = Y(F.w[i + NX * j] / umid0()); i ? ctx.lineTo(X(i), y) : ctx.moveTo(X(i), y); } ctx.setLineDash([4 * s, 3 * s]); ctx.strokeStyle = css('--c-ev'); ctx.lineWidth = 1.6 * s; ctx.stroke(); ctx.setLineDash([]); }
  // temperatura
  ctx.beginPath(); for (let i = 0; i < NX; i++) { const y = Y(C(F.T[i + NX * j]) / Tmx); i ? ctx.lineTo(X(i), y) : ctx.moveTo(X(i), y); } ctx.strokeStyle = css('--c-reac'); ctx.lineWidth = 2.2 * s; ctx.stroke();
  ctx.strokeStyle = ti; ctx.globalAlpha = .5; ctx.beginPath(); ctx.moveTo(X(st.sonda.i), T); ctx.lineTo(X(st.sonda.i), h - B); ctx.stroke(); ctx.globalAlpha = 1;
  // faixa das fases
  const yf = h - B - hf, cf = corFase();
  for (let i = 0; i < NX; i++) { const k = i + NX * j, x0 = L + i / NX * (w - L - Rr), x1 = L + (i + 1) / NX * (w - L - Rr); let y = yf; for (const [q, a] of [['h', F.h], ['m', F.m], ['w', F.wu], ['f', F.f]]) { const hh = a[k] / F.nFe0 * hf; ctx.fillStyle = `rgb(${cf[q].join(',')})`; ctx.fillRect(x0, y, x1 - x0 + .5, hh); y += hh; } }
  for (let x = 0; x <= 180; x += 45) escreve(ctx, int(x), L + x / 180 * (w - L - Rr), h - B + 9 * s, SO(), 'center', 8.5);
  let x = L; const yl = h - 10 * s;
  for (const [t, cor, tr] of [['temperatura °C', '--c-reac', 0], ['potência W/cm³', '--c-mo', 0], ['água', '--c-ev', 1], ['fases', '--f-m', 0]]) { ctx.strokeStyle = css(cor); ctx.lineWidth = 2 * s; ctx.setLineDash(tr ? [3 * s, 2 * s] : []); ctx.beginPath(); ctx.moveTo(x, yl); ctx.lineTo(x + 10 * s, yl); ctx.stroke(); ctx.setLineDash([]); x += 13 * s; x += escreve(ctx, t, x, yl, mu, 'left', 8.5) + 9 * s; }
  let iq = 0; for (let i = 0; i < NX; i++) if (F.q[i + NX * j] > F.q[iq + NX * j]) iq = i;
  notaLente(F.t === 0 ? 'Ao longo da linha da sonda, da face de entrada (0 mm) à parede da cavidade (180 mm). Clique no palco para escolher a altura.'
    : `A potência é máxima a ${int(iq * 2 + 1)} mm da face de entrada. A temperatura acompanha a potência, porque a condução não consegue nivelar a amostra durante o lote.`);
}
// para onde foi a energia do lote
function lenteEnergia(ctx, w, h, s) {
  tituloLente('Energia do lote · kJ');
  const E = R.E, inc = E.inc, abs = E.abs, nao = inc - abs, ti = TI(), mu = MU();
  const linhas = [
    ['incidente', [[inc, '--c-mo']]],
    ['absorvida', [[abs, '--c-mo'], [nao, '--line2']]],
    ['destino', [[R.sens, '--c-acc'], [E.lat, '--c-ev'], [E.perda, '--c-perda']]],
    ['reação', [[Math.abs(E.reac), '--c-reac']]],
  ];
  const tot = Math.max(1, inc, R.sens + E.lat + E.perda), x0 = 70 * s, x1 = w - 10 * s, hb = Math.min(22 * s, (h - 74 * s) / 4), gap = (h - 64 * s - 4 * hb) / 3;
  linhas.forEach(([n, partes], q) => {
    const y = 10 * s + q * (hb + gap); let x = x0;
    escreve(ctx, n, x0 - 7 * s, y + hb / 2, mu, 'right', 9.5);
    for (const [v, cor] of partes) { const L = Math.max(0, v) / tot * (x1 - x0); ctx.fillStyle = css(cor); ctx.fillRect(x, y, L, hb); if (L > 46 * s) escreve(ctx, int(v / 1000), x + L / 2, y + hb / 2, claro() ? '#ffffff' : '#08121c', 'center', 9, 700); x += L; }
  });
  let x = 8 * s, yl = h - 40 * s;
  for (const [t, cor] of [['aquece o sólido', '--c-acc'], ['evapora a água', '--c-ev'], ['perdida nas bordas', '--c-perda'], ['não absorvida', '--line2']]) { ctx.font = fonte(600, 8.5); const tw = ctx.measureText(t).width + 23 * s; if (x + tw > w - 4 * s) { x = 8 * s; yl += 13 * s; } ctx.fillStyle = css(cor); ctx.fillRect(x, yl - 4 * s, 9 * s, 9 * s); escreve(ctx, t, x + 13 * s, yl, mu, 'left', 8.5); x += tw; }
  escreve(ctx, `fechamento: ${sig(R.erroE, 2)} J`, w - 6 * s, 10 * s + 3 * (hb + gap) + hb / 2, SO(), 'right', 8.5);
  notaLente(inc === 0 ? 'Inicie o ensaio para ver para onde vai a energia que entra.' : `Da energia incidente, ${pct(abs / inc)} foi absorvida. Dela, ${pct(R.sens / Math.max(abs, 1))} aqueceu o sólido, ${pct(E.lat / Math.max(abs, 1))} evaporou água e ${pct(E.perda / Math.max(abs, 1))} saiu pelas bordas. A reação ${E.reac >= 0 ? 'somou' : 'consumiu'} ${int(Math.abs(E.reac) / 1000)} kJ.`);
}
// fases do ferro ao longo do lote
function lenteFases(ctx, w, h, s) {
  tituloLente('Fases do ferro ao longo do lote');
  const H = F.hist, L = 34 * s, Rr = 10 * s, T = 8 * s, B = 34 * s, tmax = Math.max(F.p.duracao, 1), X = t => L + t / tmax * (w - L - Rr), Y = v => T + (1 - v) * (h - T - B), cf = corFase(), mu = MU();
  if (H.length > 1) for (let n = 1; n < H.length; n++) {
    const a = H[n - 1], b = H[n]; let ya = 0, yb = 0;
    for (const q of ['f', 'w', 'm', 'h']) { ctx.fillStyle = `rgb(${cf[q].join(',')})`; ctx.beginPath(); ctx.moveTo(X(a.t), Y(ya)); ctx.lineTo(X(b.t), Y(yb)); ctx.lineTo(X(b.t), Y(yb + b[q])); ctx.lineTo(X(a.t), Y(ya + a[q])); ctx.closePath(); ctx.fill(); ya += a[q]; yb += b[q]; }
  }
  ctx.beginPath(); H.forEach((p, n) => n ? ctx.lineTo(X(p.t), Y(p.rec)) : ctx.moveTo(X(p.t), Y(p.rec))); ctx.strokeStyle = css('--c-sep'); ctx.lineWidth = 2.2 * s; ctx.stroke();
  for (const v of [0, .5, 1]) escreve(ctx, int(v * 100) + ' %', L - 5 * s, Y(v), SO(), 'right', 8.5);
  escreve(ctx, '0 s', L, h - B + 9 * s, SO(), 'left', 8.5); escreve(ctx, int(tmax) + ' s', w - Rr, h - B + 9 * s, SO(), 'right', 8.5);
  let x = L; const yl = h - 10 * s;
  for (const [t, q] of [['Fe₂O₃', 'h'], ['Fe₃O₄', 'm'], ['FeO', 'w'], ['Fe', 'f']]) { ctx.fillStyle = `rgb(${cf[q].join(',')})`; ctx.fillRect(x, yl - 4 * s, 9 * s, 9 * s); x += 12 * s; x += escreve(ctx, t, x, yl, mu, 'left', 8.5) + 10 * s; }
  ctx.fillStyle = css('--c-sep'); ctx.fillRect(x, yl - 1, 12 * s, 2.5 * s); x += 15 * s; escreve(ctx, 'recuperação', x, yl, mu, 'left', 8.5);
  notaLente(!F.p.reacao ? 'Sem CO a hematita não reduz: a faixa fica toda vermelha e a recuperação magnética fica perto de 7 %.' : `Agora: ${pct(R.fr.h)} hematita, ${pct(R.fr.m)} magnetita, ${pct(R.fr.w)} wüstita e ${pct(R.fr.f)} ferro. A recuperação sobe com a magnetita, antes mesmo de existir ferro metálico.`);
}

// ---- guia: oito etapas, cada uma com o que fazer e o que observar ----
const visto = { termos: new Set(), sondas: 0, amostra: false, celula: false, perfil: false, acoplaOff: false, Fo: false, etapas: 0, exps: new Set() };
const GUIA = [
  { eq: 'bc', campo: 'T', tit: 'A amostra e suas fronteiras',
    sobre: 'Uma amostra de resíduo úmido na bandeja de um forno de micro-ondas. A onda entra pela lateral esquerda, o que atravessa a amostra volta da parede da direita, o gás entra pelo piso e sai pelo teto. O cálculo é feito no corte da amostra: tudo o que acontece dentro dele é consequência dessas fronteiras.',
    tarefas: [['Clique em cada condição no console da equação e veja a borda correspondente acender no palco.', () => ['entrada', 'parede', 'faces', 'plano', 'gas'].filter(t => visto.termos.has(t)).length >= 3],
      ['Inicie o ensaio com o botão ▶ e acompanhe a temperatura subir a partir da face de entrada.', () => F.t > 20],
      ['Clique na amostra dentro do forno para aproximar e, depois, numa célula para abrir o balanço dela.', () => visto.celula]],
    obj: 'Dizer ao modelo por onde a energia entra e por onde sai.', porT: 'Por que importa', por: 'As equações valem dentro da amostra. Sem condições nas bordas, elas não têm solução única. Aqui a energia só entra pela onda e só sai pelas bordas e pelo vapor.',
    semT: 'O que é hipótese', sem: 'A onda é tratada como um feixe que entra por uma face e volta da parede oposta. Numa cavidade real, os modos ressonantes distribuem a potência de forma mais complexa.',
    ent: 'Um problema bem posto, com um balanço de energia que fecha: tudo o que entra pela onda aparece como calor sensível, vapor, perda nas bordas ou calor de reação.',
    fl: 'No laboratório: a potência incidente e a refletida são medidas com acoplador direcional; a absorvida é a diferença.' },
  { eq: 'micro', campo: 'q', tit: 'Micro-ondas: onde a energia entra',
    sobre: 'A onda perde potência à medida que atravessa a amostra, e o que ela perde vira calor naquela célula. O coeficiente β diz quanto se perde por milímetro, e depende do que há na célula.',
    tarefas: [['Clique em cada parcela de β e compare: a água domina enquanto a amostra está úmida.', () => ['b_mat', 'b_agua'].every(t => visto.termos.has(t))],
      ['Mude o campo para Penetração e veja onde a onda chega mais longe.', () => st.campo === 'dp'],
      ['Use a ferramenta Perfil para ver a potência caindo ao longo da linha.', () => visto.perfil]],
    obj: 'Calcular quanto de potência cada célula absorve.', porT: 'Por que está aqui', por: 'É a única fonte de energia do lote. Diferente de um forno comum, que aquece de fora para dentro, a micro-onda deposita energia dentro do volume, e onde ela é depositada decide onde a amostra aquece primeiro.',
    semT: 'Sem ela', sem: 'Nada entra na amostra. Ela só perde calor pelas bordas e a condução nivela as temperaturas.',
    ent: 'O mapa de potência absorvida, em W/cm³, e a fração da potência incidente que a amostra aproveita.',
    fl: 'No laboratório: a permissividade complexa ε′ − jε″ é medida em função da temperatura; daí sai β = 2α.' },
  { eq: 'energia', campo: 'T', tit: 'Calor: condução e perdas',
    sobre: 'Cada célula soma o que recebe da onda e das vizinhas e desconta o que perde. O resíduo conduz mal o calor, e por isso as diferenças de temperatura criadas pela onda duram o lote inteiro.',
    tarefas: [['Clique em condução e em micro-ondas e compare onde cada uma age.', () => ['cond', 'mo'].every(t => visto.termos.has(t))],
      ['Ligue a sobreposição Fluxo de calor e veja o calor indo do quente para o frio.', () => st.ov.fluxo],
      ['Abra a lente Célula: a soma do que entra pelas faces e do que é gerado dentro dá o acúmulo.', () => st.lente === 'celula' && visto.sondas > 0]],
    obj: 'Calcular a temperatura em cada célula a cada passo.', porT: 'Por que está sempre ativa', por: 'A temperatura é o que liga tudo: ela decide quando a água evapora, quanto a matriz absorve e quão rápido a hematita reduz. Por isso a energia não pode ser desligada.',
    semT: 'Se a condução for desligada', sem: 'Cada célula guarda só o que recebe da onda. O campo fica marcado pelas linhas de potência e os pontos quentes ficam ainda mais quentes.',
    ent: 'O campo de temperatura, a perda pelas bordas e o fechamento do balanço de energia do lote.',
    fl: 'No laboratório: termopares e câmera térmica medem a superfície; dentro do leito, sensores de fibra óptica, que não interferem com a onda.' },
  { eq: 'agua', campo: 'agua', tit: 'Secagem: o patamar de 100 °C',
    sobre: 'Enquanto uma célula tem água, ela não passa de 100 °C: a energia que chega vira vapor. A água também é o melhor absorvedor da amostra, então secar muda onde a onda deposita energia.',
    tarefas: [['Inicie o ensaio e acompanhe a frente de secagem no campo Água.', () => F.agua0 > 0 && R.aguaFr < .7],
      ['Ligue a sobreposição Frentes: a linha azul marca onde metade da água já saiu.', () => st.ov.frentes],
      ['Na aba Ensaio, compare a amostra seca com a úmida.', () => visto.exps.has('seca') && visto.exps.has('umida')]],
    obj: 'Tirar a água da amostra e contar a energia que isso custa.', porT: 'Por que está aqui', por: 'Com 8 % de umidade, evaporar a água do lote custa cerca de 146 kJ, perto de um terço da energia que entra em 300 s.',
    semT: 'Sem ela', sem: 'A água fica e continua absorvendo a onda; a temperatura passa de 100 °C sem patamar. Na realidade a água ferveria, e por isso este caso serve só para isolar o efeito.',
    ent: 'A massa de vapor que sai, o calor latente gasto e o momento em que cada região fica seca.',
    fl: 'No laboratório: a perda de massa do lote numa balança, ou a umidade do gás de saída.' },
  { eq: 'micro', campo: 'T', tit: 'Fuga térmica',
    sobre: 'A matriz absorve mais quando aquece. Uma região um pouco mais quente absorve mais, aquece mais e absorve ainda mais. Isso concentra a energia e cria pontos quentes que o forno comum não tem.',
    tarefas: [['Inicie o ensaio e compare a temperatura máxima com a média no alto do palco.', () => C(R.Tx) - C(R.Tm) > 250],
      ['Na aba Sistema, desligue Absorção depende do estado e reinicie: a amostra aquece de modo mais uniforme.', () => visto.acoplaOff],
      ['Ligue Isotermas para ver o ponto quente se formando.', () => st.ov.iso]],
    obj: 'Mostrar como a absorção que depende da temperatura muda o aquecimento.', porT: 'Por que está aqui', por: 'É o efeito que mais diferencia o aquecimento por micro-ondas: é ele que aquece rápido, e também o que pode fundir um ponto enquanto o resto da amostra está frio.',
    semT: 'Com absorção fixa', sem: 'A penetração fica em 180 mm em todas as células, como num envelope prescrito. A amostra aquece de modo mais uniforme e não há ponto quente que dispare.',
    ent: 'A diferença entre a temperatura máxima e a média, e o tempo até o primeiro ponto chegar a 1.200 °C.',
    fl: 'No laboratório: pulsar a potência ou girar a amostra são formas de controlar a fuga térmica.' },
  { eq: 'reducao', campo: 'fases', tit: 'Redução em etapas',
    sobre: 'Com CO, a hematita perde oxigênio aos poucos: vira magnetita, depois wüstita e por fim ferro. Cada etapa tem sua própria velocidade, e a última é a mais lenta.',
    tarefas: [['Inicie o ensaio e acompanhe no campo Fases do ferro: vermelho é hematita, escuro é magnetita, cinza é wüstita e claro é ferro.', () => R.fr.m > .1],
      ['Clique em cada etapa da reação e compare onde cada uma age.', () => ['r1', 'r2x', 'r3'].filter(t => visto.termos.has(t)).length >= 2],
      ['Abra a lente Fases para ver a composição do lote ao longo do tempo.', () => st.lente === 'fases']],
    obj: 'Acompanhar em que forma está o ferro em cada célula.', porT: 'Por que em etapas', por: 'Cada óxido tem uma energia de ativação diferente. A primeira etapa anda a 300 °C; a última precisa de mais de 800 °C. Abaixo de 570 °C a wüstita não é estável e a magnetita vai direto a ferro.',
    semT: 'Sem CO', sem: 'O ferro continua ligado ao oxigênio como hematita, que quase não responde ao ímã.',
    ent: 'A fração de cada fase em cada célula, o CO consumido, o CO₂ formado e o calor de cada etapa.',
    fl: 'No laboratório: difração de raios X identifica as fases; a perda de massa em termobalança mede o oxigênio removido.' },
  { eq: 'separacao', campo: 'fases', tit: 'Separação magnética',
    sobre: 'Depois do lote, um ímã separa o que é magnético. Magnetita e ferro vão para o concentrado; a hematita fica. Por isso converter a hematita em magnetita já recupera boa parte do ferro.',
    tarefas: [['Clique em magnetita e em ferro metálico: veja quanto cada um leva ao concentrado.', () => ['s_m', 's_fe'].every(t => visto.termos.has(t))],
      ['Na aba Ensaio, aumente o arraste de matriz e veja o teor cair.', () => F.p.arraste > .1],
      ['Compare as três experiências na tabela da aba Ensaio.', () => visto.exps.size >= 2 || st.rl === 'ensaio']],
    obj: 'Estimar quanto do ferro iria ao concentrado e com que teor.', porT: 'Por que está aqui', por: 'Converter não basta: o ferro precisa ser separado do resto. A recuperação diz quanto do ferro foi capturado; o teor diz quanto do concentrado é ferro.',
    semT: 'O que é hipótese', sem: 'Os fatores de captura e arraste se aplicam a cada fase como um todo. Na prática, dependem do tamanho das partículas, da liberação dos minerais e do campo do separador.',
    ent: 'A massa do concentrado, o ferro recuperado e o teor.',
    fl: 'No laboratório: tubo de Davis ou separador de tambor, com análise química do concentrado e do rejeito.' },
  { eq: 'num', campo: 'T', tit: 'Solução numérica',
    sobre: 'Cada passo de tempo faz cinco contas, sempre na mesma ordem. O passo é explícito: a temperatura nova sai direto da antiga, e por isso o passo não pode ser grande demais.',
    tarefas: [['Na aba Solver, abra um passo e avance etapa por etapa.', () => visto.etapas >= 4],
      ['Suba o número de Fourier acima de 0,25 e reinicie: a temperatura oscila sem controle.', () => visto.Fo],
      ['Confira o fechamento dos balanços de energia e de massa.', () => st.rl === 'solver']],
    obj: 'Transformar as equações em contas que o computador repete a cada passo de tempo, em cada célula.', porT: 'Por que nesta ordem', por: 'A condução usa a temperatura do passo anterior; a onda usa a absorção do estado atual; a energia junta tudo e a secagem decide quanto vira vapor; só então a redução usa a temperatura nova.',
    semT: 'Onde está o limite', sem: 'Com Fo = αΔt/Δx² acima de 1/4, um padrão xadrez de temperatura cresce a cada passo em vez de sumir. A cinética não tem esse limite, porque é integrada de forma exata.',
    ent: 'O lote inteiro, passo a passo, com o fechamento de energia e de massa conferido em cada um.',
    fl: 'Um método implícito, como Crank–Nicolson, permitiria passos maiores ao custo de resolver um sistema linear por passo.' },
];
function abrirGuia(n, aplicar) {
  const g = GUIA[n - 1]; st.guia = n;
  if (aplicar) { if (st.det) fecharPasso(); st.campo = g.campo; definirEq(g.eq); sincronizar(); }
  pt($('#guia-k'), `Etapa ${String(n).padStart(2, '0')} de 08`); pt($('#guia-t'), g.tit); pt($('#guia-sobre'), g.sobre);
  const ul = $('#tarefas'); if (ul.dataset.n !== String(n)) { ul.dataset.n = n; ul.textContent = ''; for (const [t] of g.tarefas) { const li = document.createElement('li'); li.textContent = t; ul.append(li); } }
  pt($('#g-obj'), g.obj); pt($('#g-por-t'), g.porT); pt($('#g-por'), g.por); pt($('#g-sem-t'), g.semT); pt($('#g-sem'), g.sem); pt($('#g-ent'), g.ent); pt($('#guia-fl'), g.fl);
  $('#guia-ant').disabled = n === 1; $('#guia-prox').hidden = n === 8; $('#tr-ant').disabled = n === 1; $('#tr-prox').disabled = n === 8;
  for (const b of $$('#trilha [data-passo]')) { b.setAttribute('aria-pressed', String(+b.dataset.passo === n)); if (+b.dataset.passo === n) b.classList.add('visto'); }
  conferirTarefas(true);
}
let tTar = 0;
function conferirTarefas(ja) {
  const agora = performance.now(); if (!ja && agora - tTar < 300) return; tTar = agora;
  const g = GUIA[st.guia - 1], lis = $('#tarefas').children;
  g.tarefas.forEach(([, ok], i) => { const ch = st.guia + '-' + i; if (!st.feitas[ch] && ok()) st.feitas[ch] = true; if (lis[i]) lis[i].classList.toggle('feito', !!st.feitas[ch]); });
}
$$('#trilha [data-passo]').forEach(b => b.addEventListener('click', () => { abrirGuia(+b.dataset.passo, true); abrirRail('guia'); }));
for (const [id, dn] of [['#guia-ant', -1], ['#tr-ant', -1], ['#guia-prox', 1], ['#tr-prox', 1]]) $(id).addEventListener('click', () => { const n = st.guia + dn; if (n >= 1 && n <= 8) { abrirGuia(n, true); abrirRail('guia'); $('#rl-guia').scrollTop = 0; } });
function abrirRail(k) {
  st.rl = k; $$('[data-rl]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.rl === k)));
  for (const p of ['guia', 'ensaio', 'sistema', 'solver']) $('#rl-' + p).hidden = p !== k;
  if (k === 'solver') { ajustar(); solverPainel(); }
  if (k === 'ensaio') { produto(); comparar(); }
  if (k === 'sistema') sistema();
}
$$('[data-rl]').forEach(b => b.addEventListener('click', () => abrirRail(b.dataset.rl)));

// ---- ensaio: experiências, parâmetros e comparação ----
const CMP = {}; let cmpChave = '', cmpTimer = 0;
function comparar() {
  const base = { ...st.par, umidade: st.umidade }, chave = JSON.stringify([base, F.p.micro, F.p.acopla, F.p.conducao, F.p.perdas]);
  if (chave === cmpChave) { mostrarCmp(); return; }
  cmpChave = chave; for (const k in CMP) delete CMP[k];
  for (const td of $$('#cmp td')) { td.textContent = '…'; td.classList.add('calc'); }
  clearTimeout(cmpTimer);
  const fila = ['seca', 'umida', 'reduz'].map(e => ({ e, f: new Forno({ ...base, umidade: e === 'seca' ? 0 : st.umidade, ...EXP[e], micro: F.p.micro, acopla: F.p.acopla, conducao: F.p.conducao, perdas: F.p.perdas }, NX, NY) }));
  const rodar = () => {
    if (chave !== cmpChave) return;
    const t0 = performance.now();
    for (const q of fila) while (!q.f.parou && performance.now() - t0 < 12) q.f.passo();
    for (const q of fila) if (q.f.parou && !CMP[q.e]) { CMP[q.e] = { ...q.f.resumo(), parou: q.f.parou, t: q.f.t }; mostrarCmp(); }
    if (fila.some(q => !q.f.parou)) cmpTimer = setTimeout(rodar, 16);
  };
  rodar();
}
function mostrarCmp() {
  for (const e of ['seca', 'umida', 'reduz']) {
    const r = CMP[e]; if (!r) continue;
    const v = { Tm: int(C(r.Tm)) + ' °C', Tx: (r.parou === 'fusao' ? '≥ ' : '') + int(C(r.Tx)) + ' °C', ev: r.evap > 0 ? int(r.evap * 1000) + ' g' : '0 g', met: pct(r.met), rec: pct(r.rec), teor: pct(r.teor) };
    for (const c in v) { const td = $(`[data-c="${e}-${c}"]`); td.textContent = v[c]; td.classList.remove('calc'); td.classList.toggle('atual', e === st.exp); }
  }
  const a = CMP.seca, b = CMP.umida, c = CMP.reduz;
  pt($('#cmp-n'), a && b && c ? `A água custou ${int(C(a.Tm) - C(b.Tm))} °C na temperatura média. A redução com CO levou a recuperação de ${pct(b.rec)} para ${pct(c.rec)}${c.parou === 'fusao' ? `, mas o lote parou em ${int(c.t)} s porque uma célula chegou a 1.200 °C` : ''}.` : 'Calculando as três experiências com os parâmetros atuais…');
}
function escolherExp(e) {
  st.exp = e; visto.exps.add(e);
  $$('[data-exp]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.exp === e)));
  reiniciar(); mostrarCmp();
}
$$('[data-exp]').forEach(b => b.addEventListener('click', () => escolherExp(b.dataset.exp)));
const PARS = [
  ['p-pot', 'pot', v => v, v => `${int(v)} W`], ['p-ret', 'retorno', v => v / 100, v => `${int(v * 100)} %`], ['p-dur', 'duracao', v => v, v => `${int(v)} s`],
  ['p-h', 'h', v => v, v => `${int(v)} W/(m²·K)`], ['p-cap', 'captura', v => v / 100, v => pct(v)], ['p-arr', 'arraste', v => v / 100, v => pct(v)],
];
for (const [id, k, conv, txt] of PARS) {
  const el = $('#' + id);
  el.addEventListener('input', () => { st.par[k] = conv(+el.value); F.configurar({ [k]: st.par[k] }); pt($('#' + id + '-v'), txt(st.par[k])); R = F.resumo(); painel(true); if (st.rl === 'ensaio') comparar(); });
}
$('#p-um').addEventListener('input', e => { st.umidade = +e.target.value / 100; pt($('#p-um-v'), pct(st.umidade)); });
$('#p-um').addEventListener('change', () => { reiniciar(); comparar(); });
$('#restaurar').addEventListener('click', () => {
  Object.assign(st.par, { pot: PADRAO.pot, retorno: PADRAO.retorno, duracao: PADRAO.duracao, h: PADRAO.h, captura: PADRAO.captura, arraste: PADRAO.arraste, Fo: PADRAO.Fo }); st.umidade = PADRAO.umidade;
  for (const m of ['micro', 'acopla', 'secagem', 'reacao', 'conducao', 'perdas']) F.p[m] = true;
  escolherExp('reduz'); rotulosPar(); comparar();
});
function rotulosPar() {
  for (const [id, k, , txt] of PARS) { const el = $('#' + id); el.value = k === 'retorno' || k === 'captura' || k === 'arraste' ? Math.round(st.par[k] * 100) : st.par[k]; pt($('#' + id + '-v'), txt(st.par[k])); }
  $('#p-um').value = Math.round(st.umidade * 100); pt($('#p-um-v'), pct(st.umidade));
  $('#p-fo').value = Math.round(st.par.Fo * 100); pt($('#p-fo-v'), fmt(st.par.Fo, 2)); pt($('#p-fo-s'), `Δt = ${fmt(F.dt, 2)} s · limite em Fo = 0,25 (Δt = ${fmt(.25 * F.dx * F.dx / F.alfa, 2)} s)`);
}
function produto() {
  const g = sepGramas(), tot = g.f + g.m + g.w + g.h + g.mat, box = $('#prod');
  const cores = { f: '--f-fe', m: '--f-m', w: '--f-w', h: '--f-h', mat: '--f-mat' }, nomes = { f: 'ferro', m: 'magnetita', w: 'wüstita', h: 'hematita', mat: 'matriz' };
  if (!box.firstChild) box.innerHTML = '<div class="prod-k"><div><span>Concentrado</span><b id="pr-c" translate="no"></b></div><div><span>Teor de ferro</span><b id="pr-t" translate="no"></b></div><div><span>Ferro recuperado</span><b id="pr-f" translate="no"></b></div><div><span>Recuperação</span><b id="pr-r" translate="no"></b></div></div><div class="prod-b" id="pr-b"></div><div class="prod-l" id="pr-l"></div>';
  pt($('#pr-c'), int(R.conc * 1000) + ' g'); pt($('#pr-t'), pct(R.teor)); pt($('#pr-f'), int(R.feConc * 1000) + ' g'); pt($('#pr-r'), pct(R.rec));
  const b = $('#pr-b'), l = $('#pr-l');
  if (b.children.length !== 5) { b.textContent = ''; l.textContent = ''; for (const q in cores) { const i = document.createElement('i'); i.style.background = `var(${cores[q]})`; b.append(i); const s = document.createElement('span'), c = document.createElement('i'), t = document.createElement('span'); c.style.background = `var(${cores[q]})`; t.textContent = nomes[q]; s.append(c, t); l.append(s); } }
  Object.keys(cores).forEach((q, n) => { b.children[n].style.width = (tot > 0 ? g[q] / tot * 100 : 0).toFixed(1) + '%'; });
}

// ---- sistema: equações, incógnitas e acoplamento ----
const SVGNS = 'http://www.w3.org/2000/svg';
const NOS = { T: [160, 100, '<tspan font-style="italic">T</tspan>', 'temperatura', 0, 28], B: [56, 44, '<tspan font-style="italic">β</tspan>', 'absorção', 0, -25], P: [56, 160, '<tspan font-style="italic">q</tspan>', 'potência', 0, 28], W: [268, 44, '<tspan font-style="italic">w</tspan>', 'água', 0, -25], X: [268, 160, '<tspan font-style="italic">n</tspan>', 'fases', 0, 28] };
const ARESTAS = [
  { id: 'BP', de: 'B', para: 'P', c: -12, rot: 'Lambert', cor: '--c-mo', on: p => p.micro, eq: 'micro', x: 'A potência depositada em cada célula depende de β em todas as células que a onda atravessou antes.' },
  { id: 'PT', de: 'P', para: 'T', c: -10, rot: 'q', mat: true, cor: '--c-mo', on: p => p.micro, eq: 'energia', termo: 'mo', x: 'A potência absorvida é a fonte da equação da energia.' },
  { id: 'TB', de: 'T', para: 'B', c: -10, rot: 'fuga térmica', cor: '--c-perda', on: p => p.micro && p.acopla, eq: 'micro', termo: 'b_mat', x: 'A matriz absorve mais quando aquece. Esta seta fecha o laço T → β → q → T: é a fuga térmica.' },
  { id: 'TW', de: 'T', para: 'W', c: -10, rot: 'evaporação', cor: '--c-ev', on: p => p.secagem, eq: 'agua', termo: 'mev', x: 'A água só evapora quando a célula chega a 100 °C.' },
  { id: 'WT', de: 'W', para: 'T', c: -10, rot: 'calor latente', cor: '--c-ev', on: p => p.secagem, eq: 'energia', termo: 'ev', x: 'A evaporação tira energia da célula e segura a temperatura em 100 °C.' },
  { id: 'WB', de: 'W', para: 'B', c: 14, rot: 'água absorve', cor: '--c-ev', on: p => p.micro && p.acopla, eq: 'micro', termo: 'b_agua', x: 'A água é o melhor absorvedor: secar muda onde a onda deposita energia.' },
  { id: 'TX', de: 'T', para: 'X', c: -10, rot: 'Arrhenius', cor: '--c-reac', on: p => p.reacao, eq: 'reducao', termo: 'r1', x: 'A velocidade de cada etapa da redução cresce exponencialmente com a temperatura.' },
  { id: 'XT', de: 'X', para: 'T', c: -10, rot: 'calor de reação', cor: '--c-reac', on: p => p.reacao, eq: 'energia', termo: 'reac', x: 'A redução libera ou absorve calor, conforme a etapa.' },
  { id: 'XB', de: 'X', para: 'B', c: -14, rot: 'magnetita absorve', cor: '--c-reac', on: p => p.micro && p.acopla && p.reacao, eq: 'micro', termo: 'b_mag', x: 'A magnetita formada absorve a onda melhor que a hematita: a redução também alimenta o aquecimento.' },
];
let arestaSel = null;
function montarGrafo() {
  const svg = $('#grafo'), novo = (tag, at, pai) => { const e = document.createElementNS(SVGNS, tag); for (const k in at) e.setAttribute(k, at[k]); (pai || svg).append(e); return e; };
  for (const a of ARESTAS) {
    const A = NOS[a.de], B = NOS[a.para], dx = B[0] - A[0], dy = B[1] - A[1], L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L, cx = (A[0] + B[0]) / 2 + nx * a.c * 2, cy = (A[1] + B[1]) / 2 + ny * a.c * 2;
    const un = (x, y) => { const m = Math.hypot(x, y) || 1; return [x / m, y / m]; }, d0 = un(cx - A[0], cy - A[1]), d1 = un(cx - B[0], cy - B[1]);
    const S = [A[0] + d0[0] * 18, A[1] + d0[1] * 18], E = [B[0] + d1[0] * 23, B[1] + d1[1] * 23], P = [B[0] + d1[0] * 17, B[1] + d1[1] * 17], t = un(E[0] - P[0], E[1] - P[1]);
    const g = novo('g', { class: 'ag', 'data-a': a.id, tabindex: '0', role: 'button' }); g.style.setProperty('--ac', `var(${a.cor})`);
    const cam = `M${S[0].toFixed(1)} ${S[1].toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${E[0].toFixed(1)} ${E[1].toFixed(1)}`;
    novo('path', { class: 'ar', d: cam }, g); novo('path', { class: 'ar-hit', d: cam }, g);
    novo('path', { class: 'seta', d: `M${P[0].toFixed(1)} ${P[1].toFixed(1)} L${(E[0] + t[1] * 4).toFixed(1)} ${(E[1] - t[0] * 4).toFixed(1)} L${(E[0] - t[1] * 4).toFixed(1)} ${(E[1] + t[0] * 4).toFixed(1)}Z` }, g);
    const qx = .25 * S[0] + .5 * cx + .25 * E[0] + nx * Math.sign(a.c) * 9, qy = .25 * S[1] + .5 * cy + .25 * E[1] + ny * Math.sign(a.c) * 9 + 3;
    const tx = novo('text', { class: 'ar-t', x: qx.toFixed(1), y: qy.toFixed(1) }, g); if (a.mat) tx.setAttribute('translate', 'no'); tx.textContent = a.rot;
    const sel = () => { arestaSel = arestaSel === a.id ? null : a.id; if (arestaSel && a.on(F.p)) { definirEq(a.eq); if (a.termo && st.chip !== a.termo) escolherTermo(a.termo); } sistema(); sincronizar(); };
    g.addEventListener('click', sel); g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); sel(); } });
  }
  for (const k in NOS) {
    const n = NOS[k], g = novo('g', { class: 'no', 'data-no': k });
    novo('circle', { cx: n[0], cy: n[1], r: 16 }, g);
    const t = novo('text', { x: n[0], y: n[1], translate: 'no' }, g); t.innerHTML = n[2];
    const r = novo('text', { class: 'no-r', x: n[0] + n[4], y: n[1] + n[5] }, g); r.textContent = n[3];
  }
}
function sistema() {
  const p = F.p, on = { T: true, B: p.micro, P: p.micro, W: p.secagem && F.agua0 > 0, X: p.reacao };
  for (const g of $$('#grafo .no')) { g.classList.toggle('off', !on[g.dataset.no]); g.classList.toggle('on', !!on[g.dataset.no]); }
  for (const g of $$('#grafo .ag')) { const a = ARESTAS.find(q => q.id === g.dataset.a), lig = a.on(p); for (const e of g.children) { e.classList.toggle('off', !lig); if (e.classList.contains('ar')) e.classList.toggle('sel', arestaSel === a.id); } }
  const vis = { energia: true, conducao: true, perdas: true, micro: true, acopla: p.micro, agua: true, reducao: true, separacao: true };
  for (const r of $$('.eqr')) { const k = r.dataset.row, ativo = { micro: p.micro, acopla: p.micro && p.acopla, agua: p.secagem, reducao: p.reacao, conducao: p.conducao, perdas: p.perdas }[k]; r.classList.toggle('fora', ativo === false || !vis[k]); r.classList.toggle('eqr-sel', k === st.eq); }
  const inc = 1 + (p.secagem ? 1 : 0) + (p.reacao ? 3 : 0), eqs = inc, cel = F.n, conta = $('#sis-conta'), chave = eqs + '|' + inc;
  if (conta._k !== chave) { conta._k = chave; conta.textContent = ''; const b1 = document.createElement('b'), b2 = document.createElement('b'); b1.textContent = eqs; b2.textContent = inc; conta.append(b1, ' equações de evolução · ', b2, ' incógnitas por célula'); }
  pt($('#sis-tam'), `${int(cel)} células × ${inc} incógnitas = ${int(cel * inc)} valores por passo, mais a potência da onda, calculada linha a linha`);
  const a = arestaSel && ARESTAS.find(q => q.id === arestaSel);
  const nota = $('#sis-nota'); if (!nota.firstChild || nota.childNodes.length !== 2) { nota.textContent = ''; nota.append(document.createElement('span'), document.createElement('b')); }
  pt(nota.lastChild, a && !a.on(p) ? ' Esta ligação está desligada agora.' : '');
  pt(nota.firstChild, a ? a.x
    : p.micro && p.acopla ? 'Há laços fechados: T → β → q → T é a fuga térmica, e T → n → β leva a redução de volta ao aquecimento. Clique numa seta para ver a parcela no palco.'
    : 'Com absorção fixa, a temperatura não altera a onda: o acoplamento fica num só sentido, da onda para a temperatura. Clique numa seta para ver a parcela no palco.');
}

// ---- solver ----
function solverPainel() {
  const ol = $('#pipe');
  if (!ol.children.length) for (const e of ETAPAS) {
    const I = ETAPA_INFO[e], li = document.createElement('li'); li.dataset.et = e; li.style.setProperty('--tc', `var(${I.cor})`); li.className = 'abre'; li.tabIndex = 0; li.setAttribute('role', 'button');
    li.innerHTML = `<span class="pipe-n"><b>${I.n}</b><small translate="no">${I.f}</small></span><span class="pipe-t"><span></span><i></i></span>`;
    li.addEventListener('click', () => abrirPasso()); li.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); abrirPasso(); } });
    ol.append(li);
  }
  for (const li of ol.children) { const ms = TM[li.dataset.et]; pt(li.querySelector('.pipe-t span'), fmt(ms, 2) + ' ms'); li.style.setProperty('--w', (cl(ms / Math.max(TM.tot, 1e-9), 0, 1) * 100).toFixed(0) + '%'); li.classList.toggle('atual', !!(st.det && F.rascunho && ETAPAS[F.rascunho.etapa - 1] === li.dataset.et)); }
  pt($('#sv-res'), `Δt = ${fmt(F.dt, 2)} s · ${int(F.n)} células de 2 mm · passo ${int(F.passos)} · ${fmt(TM.tot, 2)} ms por passo`);
  const Fo = F.p.Fo; pt($('#sv-fo'), Fo > .25 ? `Com Fo = ${fmt(Fo, 2)}, acima de 0,25, cada célula recebe das vizinhas mais calor do que a diferença de temperatura permite. Um erro em xadrez cresce a cada passo.` : `Com Fo = ${fmt(Fo, 2)}, cada passo leva no máximo ${pct(4 * Fo)} da diferença de temperatura entre células vizinhas. O erro em xadrez é amortecido e o passo é estável.`);
  const a = $('#audit'), E = R.E, lin = [['Energia absorvida', int(E.abs / 1000) + ' kJ'], ['Calor sensível', int(R.sens / 1000) + ' kJ'], ['Calor latente', int(E.lat / 1000) + ' kJ'], ['Perdas nas bordas', int(E.perda / 1000) + ' kJ'], ['Calor de reação', int(E.reac / 1000) + ' kJ'], ['Fechamento de energia', sig(R.erroE, 2) + ' J', 1], ['Fechamento de massa', sig(R.erroM * 1e6, 2) + ' mg', 1]];
  if (a.children.length !== lin.length) { a.textContent = ''; for (const [n, , ok] of lin) { const d = document.createElement('div'), t = document.createElement('dt'), v = document.createElement('dd'); t.textContent = n; v.setAttribute('translate', 'no'); if (ok) d.className = 'ok'; d.append(t, v); a.append(d); } }
  lin.forEach(([, v], i) => pt(a.children[i].lastChild, v));
  rotulosPar(); grafico();
}
function grafico() {
  const cv = $('#grafico'), ctx = cv.getContext('2d'), w = cv.width, h = cv.height, s = DPR, H = F.hist;
  ctx.clearRect(0, 0, w, h); if (w < 60 || H.length < 2) return;
  let Tx = 200; for (const p of H) Tx = Math.max(Tx, C(p.Tx)); Tx = Math.ceil(Tx / 200) * 200;
  const L = 36 * s, Rr = 34 * s, T = 20 * s, B = 20 * s, tmax = Math.max(F.p.duracao, H[H.length - 1].t), X = t => L + t / tmax * (w - L - Rr), Y = v => T + (1 - v) * (h - T - B);
  for (let v = 0; v <= Tx; v += Tx / 4) { ctx.strokeStyle = css('--line'); ctx.lineWidth = s; ctx.beginPath(); ctx.moveTo(L, Y(v / Tx)); ctx.lineTo(w - Rr, Y(v / Tx)); ctx.stroke(); escreve(ctx, int(v), L - 5 * s, Y(v / Tx), SO(), 'right', 8.5); }
  escreve(ctx, '100 %', w - Rr + 4 * s, Y(1), css('--c-mo'), 'left', 8.5); escreve(ctx, '0', w - Rr + 4 * s, Y(0), css('--c-mo'), 'left', 8.5);
  for (const [q, cor, f] of [['Pabs', '--c-mo', p => p.Pinc ? p.Pabs / p.Pinc : 0], ['Tx', '--c-reac', p => C(p.Tx) / Tx], ['Tm', '--c-acc', p => C(p.Tm) / Tx]]) {
    ctx.beginPath(); H.forEach((p, n) => n ? ctx.lineTo(X(p.t), Y(f(p))) : ctx.moveTo(X(p.t), Y(f(p)))); ctx.strokeStyle = css(cor); ctx.lineWidth = (q === 'Pabs' ? 1.4 : 2) * s; ctx.setLineDash(q === 'Pabs' ? [4 * s, 3 * s] : []); ctx.stroke(); ctx.setLineDash([]);
  }
  let x = L; for (const [t, cor] of [['T média °C', '--c-acc'], ['T máxima °C', '--c-reac'], ['absorvida', '--c-mo']]) { ctx.fillStyle = css(cor); ctx.fillRect(x, 8 * s, 10 * s, 3 * s); x += 13 * s; x += escreve(ctx, t, x, 10 * s, MU(), 'left', 8.5) + 12 * s; }
}
const ETAPA_TXT = {
  fluxos: () => `Primeiro, o calor que atravessa cada face entre células, com a temperatura do passo anterior. Cada face é visitada uma vez e o calor entra numa célula e sai da outra com sinais opostos. As bordas perdem ${sig(F.rascunho.perdaTot / F.rascunho.dt, 3)} W para o ar. O palco mostra quanto cada célula vai ganhar ou perder pela condução, em °C.`,
  micro: () => `Depois, a onda é seguida linha a linha: em cada célula, perde a fração 1 − e^(−βΔx) da potência que traz. Das ${int(F.rascunho.P.inc)} W incidentes, a amostra absorve ${int(F.rascunho.P.abs)} W neste passo. O palco mostra a potência absorvida.`,
  energia: () => `Com tudo somado, cada célula muda de temperatura. Onde há água e a temperatura passaria de 100 °C, o excesso vira vapor: ${sig(F.rascunho.latTot / F.rascunho.dt, 3)} W foram para a evaporação neste passo. O palco mostra a variação de temperatura do passo.`,
  reacao: () => F.p.reacao ? `Com a temperatura nova, cada etapa da redução avança n ← n·e^(−kΔt), que nunca deixa a fração passar de 0 ou 1. O calor da reação, ${sig(F.rascunho.reacTot / F.rascunho.dt, 3)} W neste passo, entra na temperatura. O palco mostra a variação causada pela reação.` : 'A redução está desligada: nesta etapa nada muda.',
  inventario: () => `O passo é aceito. O tempo avança ${fmt(F.ultimo.dt, 2)} s e os balanços do lote são conferidos: energia fecha em ${sig(R.erroE, 2)} J e massa em ${sig(R.erroM * 1e6, 2)} mg.`,
};
function abrirPasso() {
  if (F.parou) { mudou(F.parou); return; }
  st.rodando = false; $('#play').setAttribute('aria-pressed', 'false');
  if (!st.det) { st.det = true; $('#sv-passo').hidden = false; $('#sv-abrir').hidden = true; abrirRail('solver'); }
  proximaEtapa();
}
let detVista = null;
function proximaEtapa() {
  if (F.parou && !F.rascunho) { mudou(F.parou); return; }
  const nome = F.etapa(); visto.etapas++;
  detVista = nome;
  if (!F.rascunho) aoPasso();
  const i = ETAPAS.indexOf(nome);
  pt($('#sv-k'), `Etapa ${i + 1} de 5 · ${ETAPA_INFO[nome].n}`);
  pt($('#sv-info'), ETAPA_TXT[nome]());
  pt($('#etapa-tag'), ETAPA_INFO[nome].n); $('#etapa-tag').hidden = false;
  pt($('#sv-prox'), F.rascunho ? 'Próxima etapa →' : 'Abrir o próximo passo →');
  solverPainel(); pedirDesenho();
}
function fecharPasso() {
  if (!st.det) return;
  while (F.rascunho) F.etapa();
  aoPasso();
  st.det = false; detVista = null; $('#sv-passo').hidden = true; $('#sv-abrir').hidden = false; $('#etapa-tag').hidden = true; pedirDesenho(); solverPainel();
}
function descEtapa() {
  const d = F.rascunho || F.ultimo, nome = detVista, c = cap();
  let tit = '', un = '°C';
  if (nome === 'fluxos') { for (let k = 0; k < F.n; k++) VAL[k] = (d.cond[k] - d.perda[k]) / c; tit = 'Variação de temperatura pela condução e pelas bordas'; }
  else if (nome === 'micro') { for (let k = 0; k < F.n; k++) VAL[k] = d.q[k] / 1e6; un = 'W/cm³'; tit = 'Potência absorvida neste passo'; let mx = 1e-9; for (let k = 0; k < F.n; k++) mx = Math.max(mx, VAL[k]); return { tipo: 'esc', lut: PAL.q, a: 0, b: mx, nome: `${tit} [${un}]`, tmin: '0', tmax: sig(mx, 2) }; }
  else if (nome === 'energia') { for (let k = 0; k < F.n; k++) VAL[k] = d.Tfotos.energia[k] - F.T[k]; tit = 'Variação de temperatura no passo'; }
  else if (nome === 'reacao') { const base = d.Tfotos.energia || d.T; for (let k = 0; k < F.n; k++) VAL[k] = (d.Tfotos.reacao ? d.Tfotos.reacao[k] : d.T[k]) - base[k]; tit = 'Variação de temperatura pela reação'; }
  else { for (let k = 0; k < F.n; k++) VAL[k] = C(F.T[k]); const [a, b] = CAMPOS.T.faixa(); return { tipo: 'esc', lut: PAL.T, a, b, nome: 'Temperatura depois do passo [°C]', tmin: int(a), tmax: int(b) }; }
  let mx = 1e-9; for (let k = 0; k < F.n; k++) mx = Math.max(mx, Math.abs(VAL[k]));
  return { tipo: 'div', lut: PAL.div, a: -mx, b: mx, nome: `${tit} [${un}]`, tmin: '−' + sig(mx, 2), tmax: '+' + sig(mx, 2) };
}
$('#sv-abrir').addEventListener('click', abrirPasso);
$('#sv-prox').addEventListener('click', proximaEtapa);
$('#sv-sair').addEventListener('click', fecharPasso);
$('#p-fo').addEventListener('input', e => { st.par.Fo = +e.target.value / 100; F.configurar({ Fo: st.par.Fo }); if (st.par.Fo > .25) visto.Fo = true; solverPainel(); });
$('#baixar').addEventListener('click', () => {
  const linhas = ['t_s,T_media_C,T_max_C,P_absorvida_W,P_incidente_W,agua_restante,hematita,magnetita,wustita,ferro,recuperacao'];
  for (const p of F.hist) linhas.push([p.t, C(p.Tm), C(p.Tx), p.Pabs, p.Pinc, p.agua, p.h, p.m, p.w, p.f, p.rec].map(v => +v.toFixed(5)).join(','));
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([linhas.join('\n')], { type: 'text/csv' })); a.download = 'engenhalab-forno-metalurgia.csv'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
});

// ---- controles ----
function sincronizar() {
  for (const el of $$('input[data-m]')) el.checked = !!F.p[el.dataset.m];
  const livre = !st.termo && !st.dom && !st.det;
  $$('.campos [data-campo]').forEach(b => b.setAttribute('aria-selected', String(livre && b.dataset.campo === st.campo)));
  $$('[data-ov]').forEach(b => b.setAttribute('aria-pressed', String(!!st.ov[b.dataset.ov])));
  $$('.ferr [data-ferr]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.ferr === st.ferr)));
  $('#palco').dataset.ferr = st.ferr;
  $$('#eq-tabs [data-eq]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.eq === st.eq)));
  const bt = $('#dom-bt'); bt.disabled = !EQ[st.eq].dom; bt.setAttribute('aria-pressed', String(st.dom));
  $$('[data-lente]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.lente === st.lente)));
  for (const b of cartoes) b.setAttribute('aria-pressed', String(b.dataset.term === st.chip));
  if (st.rl === 'sistema') sistema();
  barraChave = ''; pedirDesenho(); vivoDeck(true); lente(); conferirTarefas(true);
}
function modelo(k, v) {
  if (st.det) fecharPasso();
  F.p[k] = v;
  if (k === 'acopla' && !v) visto.acoplaOff = true;
  F.atenuacao();
  const eq = { micro: 'micro', secagem: 'agua', reacao: 'reducao', acopla: 'micro', conducao: 'energia', perdas: 'energia' }[k];
  if (v && EQ[eq]) definirEq(eq); else montarDeck();
  mudou(k, (v ? '+ ' : '− ') + { micro: 'Micro-ondas', acopla: 'Absorção dependente do estado', secagem: 'Secagem', reacao: 'Redução', conducao: 'Condução', perdas: 'Perdas nas bordas' }[k]);
  sincronizar(); if (st.rl === 'ensaio') comparar();
}
function reiniciar() {
  if (st.det) { st.det = false; detVista = null; $('#sv-passo').hidden = true; $('#sv-abrir').hidden = false; $('#etapa-tag').hidden = true; }
  const manter = { micro: F.p.micro, acopla: F.p.acopla, conducao: F.p.conducao, perdas: F.p.perdas };
  F = new Forno({ ...parametros(), ...manter }, NX, NY);
  for (const k in TM) TM[k] = 0;
  ev = {}; acum = 0; st.rodando = false; vapor = []; $('#play').setAttribute('aria-pressed', 'false'); $('#bancada').dataset.parou = '';
  R = F.resumo(); ENERGIA_TOTAL.perdaW = 0;
  rotulosPar(); montarDeck(); painel(true); sincronizar();
  mudou(F.agua0 > 0 ? 'inicio' : 'seca', 'Lote pronto');
}
for (const el of $$('input[data-m]')) el.addEventListener('change', e => modelo(el.dataset.m, e.target.checked));
$$('#eq-tabs [data-eq]').forEach(b => b.addEventListener('click', () => {
  const eq = b.dataset.eq;
  if (!disponivel(eq)) { modelo(MODELO_DE_EQ[eq], true); return; }
  arestaSel = null; definirEq(eq); if (CAMPO_EQ[eq]) st.campo = CAMPO_EQ[eq]; sincronizar();
}));
$$('.eqr-b').forEach(b => b.addEventListener('click', () => {
  const k = b.parentElement.dataset.row, eq = { energia: 'energia', conducao: 'energia', perdas: 'energia', micro: 'micro', acopla: 'micro', agua: 'agua', reducao: 'reducao', separacao: 'separacao' }[k];
  const termo = { conducao: 'cond', perdas: 'perda', acopla: 'b_mat' }[k];
  if (!disponivel(eq)) { modelo(MODELO_DE_EQ[eq], true); return; }
  definirEq(eq); if (termo) escolherTermo(termo); sincronizar();
}));
$('#dom-bt').addEventListener('click', () => { if (!EQ[st.eq].dom) return; st.dom = !st.dom; if (st.dom) { st.termo = null; st.chip = null; if (st.det) fecharPasso(); } textoDeck(); sincronizar(); });
$$('[data-lente]').forEach(b => b.addEventListener('click', () => { st.lente = b.dataset.lente; sincronizar(); }));
$$('.campos [data-campo]').forEach(b => b.addEventListener('click', () => { st.campo = b.dataset.campo; st.termo = null; st.dom = false; if (st.det) fecharPasso(); if (st.chip && TERMO[st.chip].tipo !== 'bc') st.chip = null; textoDeck(); sincronizar(); }));
$$('[data-ov]').forEach(b => b.addEventListener('click', () => { st.ov[b.dataset.ov] = !st.ov[b.dataset.ov]; sincronizar(); }));
$$('.ferr [data-ferr]').forEach(b => b.addEventListener('click', () => { st.ferr = b.dataset.ferr; if (st.ferr === 'perfil') { st.lente = 'perfil'; visto.perfil = true; } sincronizar(); }));
$('#play').addEventListener('click', e => {
  if (st.det) fecharPasso();
  if (F.parou) reiniciar();
  st.rodando = !st.rodando; e.currentTarget.setAttribute('aria-pressed', String(st.rodando)); antes = 0;
  if (st.rodando) { $('#aviso').hidden = true; pedirDesenho(); }
});
$('#passo1').addEventListener('click', () => { if (st.det) fecharPasso(); st.rodando = false; $('#play').setAttribute('aria-pressed', 'false'); if (umPasso()) aoPasso(); if (F.parou) parar(); pedirDesenho(); });
$$('[data-vel]').forEach(b => b.addEventListener('click', () => { st.vel = +b.dataset.vel; $$('[data-vel]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); }));
$('#reiniciar').addEventListener('click', reiniciar);
$('#zm-tudo').addEventListener('click', () => { st.nivel = 'amostra'; ajustarNivel(); irPara(VTODO); }); $('#zm-face').addEventListener('click', () => irPara(VFACE));
$('#zm-menos').addEventListener('click', () => zoomEm(1.4)); $('#zm-mais').addEventListener('click', () => zoomEm(.7));
$('#tela-cheia').addEventListener('click', () => { const el = $('#bancada'); if (document.fullscreenElement) document.exitFullscreen(); else if (el.requestFullscreen) el.requestFullscreen().catch(() => { /* recusado */ }); });
document.addEventListener('fullscreenchange', () => ajustar());
$('#theme-toggle')?.addEventListener('click', () => {
  const t = claro() ? 'dark' : 'light'; raiz.setAttribute('data-theme', t);
  try { localStorage.setItem('vg-theme', t); } catch (e) { /* sem armazenamento */ }
  CORES = {}; montarPaletas(); montarDeck(); barraChave = ''; pedirDesenho(); lente(); grafico();
});

// ---- ponteiro: sonda, perfil e leitura ----
function noGrid(e) {
  const r = tela.el.getBoundingClientRect(), R0 = tela.R, px = e.clientX - r.left, py = e.clientY - r.top, fx = (px * DPR - R0.x) / R0.w, fy = (py * DPR - R0.y) / R0.h;
  return { x: vista.x0 + fx * (vista.x1 - vista.x0), y: vista.y1 - fy * (vista.y1 - vista.y0), px, py, dentro: fx >= 0 && fx <= 1 && fy >= 0 && fy <= 1 };
}
let arrastando = false;
const porSonda = p => { const i = cl(Math.floor(p.x), 0, NX - 1), j = cl(Math.floor(p.y), 0, NY - 1); if (i !== st.sonda.i || j !== st.sonda.j) { st.sonda = { i, j }; visto.sondas++; vivoDeck(true); lente(); pedirDesenho(); } };
let clique = null;
const naCena = e => { const r = tela.el.getBoundingClientRect(); return { x: (e.clientX - r.left) * DPR, y: (e.clientY - r.top) * DPR }; };
tela.el.addEventListener('pointerdown', e => {
  if (e.button > 0) return;
  if (st.nivel === 'forno') { const c = naCena(e); if (dentroS(c.x, c.y)) { visto.amostra = true; irNivel('amostra'); } return; }
  if (st.nivel !== 'amostra' && st.nivel !== 'celula') return;
  const p = noGrid(e); if (!p.dentro) return; tela.el.setPointerCapture(e.pointerId); arrastando = true; clique = { x: e.clientX, y: e.clientY, mov: false }; porSonda(p);
});
tela.el.addEventListener('pointermove', e => {
  if (st.nivel === 'forno') { const c = naCena(e); tela.el.style.cursor = dentroS(c.x, c.y) ? 'zoom-in' : ''; $('#leitura').hidden = true; return; }
  if (st.nivel !== 'amostra' && st.nivel !== 'celula') { tela.el.style.cursor = ''; $('#leitura').hidden = true; return; }
  tela.el.style.cursor = '';
  const p = noGrid(e);
  if (clique && Math.hypot(e.clientX - clique.x, e.clientY - clique.y) > 5) clique.mov = true;
  if (arrastando) { porSonda(p); $('#leitura').hidden = true; return; }
  const el = $('#leitura'); if (e.pointerType !== 'mouse' || !p.dentro || !VA || VA.tipo === 'dom' || VA.tipo === 'fases' || VA.tipo === 'fase') { el.hidden = true; return; }
  const k = cl(Math.floor(p.x), 0, NX - 1) + NX * cl(Math.floor(p.y), 0, NY - 1);
  pt(el, `${sig(VAL[k], 3)} ${VA.un || ''}`); el.hidden = false; el.style.left = p.px + 'px'; el.style.top = p.py + 'px';
});
const solta = e => { arrastando = false; if (e && e.type === 'pointerup' && clique && !clique.mov) irCelula(); clique = null; };
tela.el.addEventListener('pointerup', solta); tela.el.addEventListener('pointercancel', solta);
tela.el.addEventListener('pointerleave', () => { $('#leitura').hidden = true; });
tela.el.addEventListener('wheel', e => { if (!e.ctrlKey && !e.metaKey) return; if (st.nivel !== 'amostra' && st.nivel !== 'celula') return; e.preventDefault(); const p = noGrid(e); zoomEm(e.deltaY > 0 ? 1.25 : .8, cl(p.x, 0, NX), cl(p.y, 0, NY)); }, { passive: false });
tela.el.addEventListener('keydown', e => {
  const d = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] }[e.key]; if (!d) return;
  e.preventDefault(); porSonda({ x: st.sonda.i + d[0] + .5, y: st.sonda.j + d[1] + .5 });
});
tela.el.tabIndex = 0;

// ---- tamanho dos canvas ----
function ajustar() {
  DPR = Math.min(2, devicePixelRatio || 1);
  medir();
  for (const id of ['lente-c', 'grafico']) { const cv = document.getElementById(id), r = cv.getBoundingClientRect(); if (!r.width) continue; const w = Math.round(r.width * DPR), h = Math.round(r.height * DPR); if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; } }
  barraChave = ''; pedirDesenho(); lente(); grafico();
}
if ('ResizeObserver' in window) { const ro = new ResizeObserver(() => ajustar()); for (const s of ['#tela', '#lente-c', '#rail']) ro.observe($(s)); }
addEventListener('resize', ajustar);
document.addEventListener('visibilitychange', () => { antes = 0; if (!document.hidden) pedirDesenho(); });

$$('#niveis [data-nivel]').forEach(b => b.addEventListener('click', () => { const n = b.dataset.nivel; if (n === 'celula') { if (st.nivel === 'forno') irNivel('celula'); else irCelula(); } else irNivel(n); }));
$$('#proc [data-proc]').forEach(b => b.addEventListener('click', () => irNivel(b.dataset.proc === 'separa' ? 'separador' : 'forno')));

// ---- início ----
montarGrafo(); rotulosPar();
abrirGuia(1, false); montarDeck(); sincronizar(); ajustar(); painel(true); ajustarNivel();
mudou('inicio', 'Lote pronto');
