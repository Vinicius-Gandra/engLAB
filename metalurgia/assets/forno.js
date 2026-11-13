// Estúdio de metalurgia · modelo do forno de micro-ondas
// Volumes finitos 2D (corte da amostra), unidades SI. Explícito no tempo.
// Etapas de um passo: fluxos nas faces → micro-ondas (Lambert) → energia e secagem → redução → inventário.

const A = { Fe: 0.055845, O: 0.015999, C: 0.012011 };
const M = {
  h: (2 * A.Fe + 3 * A.O) / 2,   // Fe2O3, por mol de Fe
  m: (3 * A.Fe + 4 * A.O) / 3,   // Fe3O4, por mol de Fe
  w: A.Fe + A.O,                 // FeO
  f: A.Fe,                       // Fe
  CO: A.C + A.O,
  CO2: A.C + 2 * A.O,
};
// entalpias de formação a 298 K [J/mol]
const HF = { Fe2O3: -824.2e3, Fe3O4: -1118.4e3, FeO: -272.0e3, CO: -110.5e3, CO2: -393.5e3 };
// reações por mol de Fe convertido: entalpia [J] e CO consumido [mol]
export const REACOES = Object.freeze({
  r1: { de: 'h', para: 'm', co: 1 / 6, dH: (2 * HF.Fe3O4 + HF.CO2 - 3 * HF.Fe2O3 - HF.CO) / 6 },   // 3Fe2O3 + CO → 2Fe3O4 + CO2
  r2: { de: 'm', para: 'w', co: 1 / 3, dH: (3 * HF.FeO + HF.CO2 - HF.Fe3O4 - HF.CO) / 3 },         // Fe3O4 + CO → 3FeO + CO2   (T ≥ 570 °C)
  r2b: { de: 'm', para: 'f', co: 4 / 3, dH: (4 * HF.CO2 - HF.Fe3O4 - 4 * HF.CO) / 3 },             // Fe3O4 + 4CO → 3Fe + 4CO2  (T < 570 °C)
  r3: { de: 'w', para: 'f', co: 1, dH: HF.CO2 - HF.FeO - HF.CO },                                   // FeO + CO → Fe + CO2
});
export const T_WUSTITA = 843.15;

export const MAT = Object.freeze({
  largura: 0.18, altura: 0.1, prof: 0.025,
  rho: 1800, cp: 850, k: 0.65, emiss: 0.7, sigma: 5.670374419e-8,
  Tamb: 298.15, L: 2.257e6, Tev: 373.15, R: 8.314462618,
  fHem: 0.4, M, Tmax: 1473.15,
  // absorção de micro-ondas: coeficiente de atenuação da potência β = 2α [1/m]
  beta0: 3.3, Tc: 500, betaMatMax: 8,    // matriz + hematita: cresce com T (fuga térmica)
  Kagua: 250,                            // por kg de água / kg de sólido
  Kmag: 30, Kwus: 20, Kfe: 15,            // por fração mássica da fase no sólido
  betaFixo: 1 / 0.18,                    // absorção fixa: penetração de 180 mm
});
// cinética: k = A·exp(−E/RT), primeira ordem na fase que reage, CO em excesso
export const CINETICA = Object.freeze({
  r1: { A: 60, E: 45e3 },
  r2: { A: 880, E: 80e3 },
  r2b: { A: 300, E: 80e3 },
  r3: { A: 750, E: 90e3 },
});
// captura no separador magnético, relativa à captura do ferro metálico
export const MAGNETISMO = Object.freeze({ f: 1, m: 1, w: 0.25, h: 0.08 });

export const PADRAO = Object.freeze({
  pot: 1800, retorno: 0.8, h: 12, umidade: 0.08, captura: 0.9, arraste: 0.05, duracao: 300, Fo: 0.1,
  conducao: true, micro: true, acopla: true, secagem: true, reacao: true, perdas: true,
});
export const ETAPAS = ['fluxos', 'micro', 'energia', 'reacao', 'inventario'];

export class Forno {
  constructor(par = {}, nx = 90, ny = 50) {
    this.nx = nx; this.ny = ny; this.n = nx * ny;
    this.dx = MAT.largura / nx; this.dy = MAT.altura / ny; this.V = this.dx * this.dy * MAT.prof;
    this.ms = MAT.rho * this.V;                        // sólido seco inicial por célula
    this.nFe0 = this.ms * MAT.fHem / M.h;              // mol de Fe por célula
    this.matriz = this.ms * (1 - MAT.fHem);
    this.p = { ...PADRAO, ...par };
    const N = this.n, F = () => new Float64Array(N);
    Object.assign(this, { T: F(), w: F(), h: F(), m: F(), wu: F(), f: F(), q: F(), beta: F(), cond: F(), perda: F(), evap: F(), qr: F(), r1: F(), r2: F(), r3: F() });
    this.reiniciar();
  }

  get alfa() { return MAT.k / (MAT.rho * MAT.cp); }
  get dt() { return this.p.Fo * Math.min(this.dx, this.dy) ** 2 / this.alfa; }

  reiniciar() {
    this.T.fill(MAT.Tamb); this.w.fill(this.ms * this.p.umidade);
    this.h.fill(this.nFe0); this.m.fill(0); this.wu.fill(0); this.f.fill(0);
    for (const a of [this.q, this.cond, this.perda, this.evap, this.qr, this.r1, this.r2, this.r3]) a.fill(0);
    this.agua0 = this.ms * this.p.umidade * this.n;
    this.t = 0; this.passos = 0;
    this.E = { abs: 0, inc: 0, perda: 0, reac: 0, lat: 0 };   // energias acumuladas [J]
    this.G = { co: 0, co2: 0 };                               // gás acumulado [kg]
    this.P = { inc: 0, abs: 0, trans: 0, volta: 0 };          // potências do último passo [W]
    this.hist = [];
    this.parou = null; this.rascunho = null;
    this.atenuacao();
    this.registrar();
  }

  configurar(mud) {
    const umid = 'umidade' in mud && mud.umidade !== this.p.umidade;
    Object.assign(this.p, mud);
    if (umid) this.reiniciar(); else this.atenuacao();
  }

  // massa de sólido seco na célula (matriz + óxidos + ferro)
  solido(k) { return this.matriz + this.h[k] * M.h + this.m[k] * M.m + this.wu[k] * M.w + this.f[k] * M.f; }

  // β = 2α de cada parcela, em 1/m
  partesBeta(k, T = this.T[k], out = {}) {
    const s = this.solido(k);
    out.mat = Math.min(MAT.betaMatMax, MAT.beta0 * Math.exp((T - MAT.Tamb) / MAT.Tc));
    out.agua = MAT.Kagua * this.w[k] / this.ms;
    out.mag = MAT.Kmag * this.m[k] * M.m / s;
    out.wus = MAT.Kwus * this.wu[k] * M.w / s;
    out.fe = MAT.Kfe * this.f[k] * M.f / s;
    return out;
  }
  atenuacao(T = this.T) {
    const o = {};
    for (let k = 0; k < this.n; k++) {
      if (!this.p.acopla) { this.beta[k] = MAT.betaFixo; continue; }
      this.partesBeta(k, T[k], o);
      this.beta[k] = o.mat + o.agua + o.mag + o.wus + o.fe;
    }
  }

  // Lambert por linha: a onda entra pela esquerda, parte volta da parede da direita
  microondas(q) {
    const { nx, ny, dx, V } = this, inc = this.p.micro ? this.p.pot : 0, Pl = inc / ny;
    let abs = 0, trans = 0, volta = 0;
    q.fill(0);
    if (!inc) return { inc: 0, abs: 0, trans: 0, volta: 0 };
    for (let j = 0; j < ny; j++) {
      let P = Pl;
      for (let i = 0; i < nx; i++) { const k = i + nx * j, a = P * -Math.expm1(-this.beta[k] * dx); q[k] += a / V; P -= a; }
      trans += P;
      let B = this.p.retorno * P;
      for (let i = nx - 1; i >= 0; i--) { const k = i + nx * j, a = B * -Math.expm1(-this.beta[k] * dx); q[k] += a / V; B -= a; }
      volta += B;
    }
    for (let k = 0; k < this.n; k++) abs += q[k] * V;
    return { inc, abs, trans: trans * (1 - this.p.retorno), volta };
  }

  taxa(nome, T) { const c = CINETICA[nome]; return c.A * Math.exp(-c.E / (MAT.R * T)); }

  iniciar() {
    if (this.rascunho) return this.rascunho;
    const N = this.n;
    this.rascunho = { etapa: 0, dt: this.dt, T: this.T.slice(), w: this.w.slice(), h: this.h.slice(), m: this.m.slice(), wu: this.wu.slice(), f: this.f.slice(),
      cond: new Float64Array(N), perda: new Float64Array(N), q: new Float64Array(N), evap: new Float64Array(N), qr: new Float64Array(N),
      r1: new Float64Array(N), r2: new Float64Array(N), r3: new Float64Array(N), Tfotos: {}, P: null, perdaTot: 0, reacTot: 0, latTot: 0, co: 0, co2: 0 };
    return this.rascunho;
  }

  // executa a próxima etapa do passo; devolve o nome dela
  etapa() {
    const d = this.iniciar(), nome = ETAPAS[d.etapa], { nx, ny, dx, dy, V, dt } = this, cap = this.ms * MAT.cp, p = this.p;
    if (nome === 'fluxos') {
      const gx = MAT.k * dy * MAT.prof / dx, gy = MAT.k * dx * MAT.prof / dy;
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
        const k = i + nx * j, T = this.T[k];
        if (p.conducao && i + 1 < nx) { const Q = gx * (this.T[k + 1] - T) * dt; d.cond[k] += Q; d.cond[k + 1] -= Q; }
        if (p.conducao && j + 1 < ny) { const Q = gy * (this.T[k + nx] - T) * dt; d.cond[k] += Q; d.cond[k + nx] -= Q; }
        if (p.perdas) {
          const area = ((i === 0) + (i === nx - 1)) * dy * MAT.prof + ((j === 0) + (j === ny - 1)) * dx * MAT.prof;
          if (area) { const Q = area * (p.h * (T - MAT.Tamb) + MAT.emiss * MAT.sigma * (T ** 4 - MAT.Tamb ** 4)) * dt; d.perda[k] = Q; d.perdaTot += Q; }
        }
      }
    } else if (nome === 'micro') {
      this.atenuacao();
      d.P = this.microondas(d.q);
    } else if (nome === 'energia') {
      for (let k = 0; k < this.n; k++) {
        let Q = d.cond[k] + d.q[k] * V * dt - d.perda[k];
        if (p.secagem && d.w[k] > 0) {
          const sobra = cap * (this.T[k] - MAT.Tev) + Q;   // energia acima de 100 °C
          if (sobra > 0) { const ev = Math.min(d.w[k], sobra / MAT.L); d.w[k] -= ev; d.evap[k] = ev; Q -= ev * MAT.L; d.latTot += ev * MAT.L; }
        }
        d.T[k] = this.T[k] + Q / cap;
      }
      d.Tfotos.energia = d.T.slice();
    } else if (nome === 'reacao') {
      if (p.reacao) for (let k = 0; k < this.n; k++) {
        const T = d.T[k];
        let x1 = d.h[k] * -Math.expm1(-this.taxa('r1', T) * dt);
        d.h[k] -= x1; d.m[k] += x1;
        const baixa = T < T_WUSTITA, R2 = baixa ? REACOES.r2b : REACOES.r2;
        const x2 = d.m[k] * -Math.expm1(-this.taxa(baixa ? 'r2b' : 'r2', T) * dt);
        d.m[k] -= x2; if (baixa) d.f[k] += x2; else d.wu[k] += x2;
        const x3 = d.wu[k] * -Math.expm1(-this.taxa('r3', T) * dt);
        d.wu[k] -= x3; d.f[k] += x3;
        const calor = -(x1 * REACOES.r1.dH + x2 * R2.dH + x3 * REACOES.r3.dH);
        const co = x1 * REACOES.r1.co + x2 * R2.co + x3 * REACOES.r3.co;
        d.co += co * M.CO; d.co2 += co * M.CO2;
        d.T[k] += calor / cap; d.qr[k] = calor / (V * dt); d.reacTot += calor;
        d.r1[k] = x1 / dt; d.r2[k] = x2 / dt; d.r3[k] = x3 / dt;
      }
      d.Tfotos.reacao = d.T.slice();
    } else {
      // inventário: o passo é aceito
      for (const c of ['T', 'w', 'h', 'm', 'wu', 'f', 'cond', 'perda', 'q', 'evap', 'qr', 'r1', 'r2', 'r3']) this[c] = d[c];
      this.t += dt; this.passos++;
      this.E.abs += d.P.abs * dt; this.E.inc += d.P.inc * dt; this.E.perda += d.perdaTot; this.E.reac += d.reacTot; this.E.lat += d.latTot;
      this.G.co += d.co; this.G.co2 += d.co2; this.P = d.P;
      this.ultimo = d; this.rascunho = null;
      let mx = -Infinity; for (let k = 0; k < this.n; k++) if (!(this.T[k] < mx)) mx = this.T[k];
      if (!(mx < 1e4)) this.parou = 'instavel';
      else if (mx >= MAT.Tmax) this.parou = 'fusao';
      else if (this.t >= p.duracao - 1e-9) this.parou = 'fim';
      this.registrar();
      return nome;
    }
    d.etapa++;
    return nome;
  }

  passo() { if (this.parou) return false; do this.etapa(); while (this.rascunho); return true; }

  registrar() {
    const r = this.resumo();
    this.hist.push({ t: this.t, Tm: r.Tm, Tx: r.Tx, Pabs: this.P.abs, Pinc: this.P.inc, agua: r.aguaFr, h: r.fr.h, m: r.fr.m, w: r.fr.w, f: r.fr.f, rec: r.rec });
  }

  // inventários, separação magnética e auditorias de massa e energia
  resumo() {
    const n = this.n; let Tm = 0, Tx = -Infinity, Tn = Infinity, agua = 0, sens = 0, H = 0, Mm = 0, W = 0, Fe = 0, sol = 0;
    for (let k = 0; k < n; k++) {
      const T = this.T[k]; Tm += T; if (T > Tx) Tx = T; if (T < Tn) Tn = T;
      agua += this.w[k]; sens += this.ms * MAT.cp * (T - MAT.Tamb);
      H += this.h[k]; Mm += this.m[k]; W += this.wu[k]; Fe += this.f[k]; sol += this.solido(k);
    }
    const nFe = this.nFe0 * n, fr = { h: H / nFe, m: Mm / nFe, w: W / nFe, f: Fe / nFe };
    const c = this.p.captura, mag = MAGNETISMO;
    const conc = { h: c * mag.h * H, m: c * mag.m * Mm, w: c * mag.w * W, f: c * mag.f * Fe };
    const feConc = (conc.h + conc.m + conc.w + conc.f) * A.Fe;
    const matrizConc = this.p.arraste * this.matriz * n;
    const massaConc = conc.h * M.h + conc.m * M.m + conc.w * M.w + conc.f * M.f + matrizConc;
    const solido0 = this.ms * n, evap = this.agua0 - agua;
    return {
      Tm: Tm / n, Tx, Tn, agua, aguaFr: this.agua0 ? agua / this.agua0 : 0, evap, fr, nFe,
      feTotal: nFe * A.Fe, feMetal: Fe * A.Fe, met: Fe / nFe,
      conc: massaConc, feConc, rec: feConc / (nFe * A.Fe), teor: massaConc > 0 ? feConc / massaConc : 0,
      rejeito: sol - massaConc, solido: sol, oxigenio: solido0 - sol,
      sens, E: { ...this.E },
      erroE: sens + this.E.lat + this.E.perda - this.E.abs - this.E.reac,
      erroM: solido0 + this.agua0 + this.G.co - sol - agua - evap - this.G.co2,
    };
  }
}
