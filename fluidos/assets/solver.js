/* EngenhaLab · Fluidos & CFD
   Escoamento 2D incompressível ao redor de um cilindro, em volumes finitos numa malha deslocada.
   Passo fracionado: advecção → empuxo → difusão → projeção da pressão (continuidade).
   Unidades da malha: diâmetro D = 16 células, velocidade de entrada U = 1. */
'use strict';

function criarCaso(op) {
  const NX = op.nx || 256, NY = op.ny || 96, D = op.d || 16;
  const XC = op.xc || 4.5 * D, YC = NY / 2, R = D / 2;
  const NU1 = NX + 1, NV1 = NY + 1;
  const n = NX * NY;
  const u = new Float32Array(NU1 * NY), v = new Float32Array(NX * NV1);
  const u2 = new Float32Array(u.length), v2 = new Float32Array(v.length);
  const uMin = new Float32Array(u.length), uMax = new Float32Array(u.length), vMin = new Float32Array(v.length), vMax = new Float32Array(v.length);
  const T = new Float32Array(n), C = new Float32Array(n), T2 = new Float32Array(n), C2 = new Float32Array(n);
  const sMin = new Float32Array(n), sMax = new Float32Array(n), cMin = new Float32Array(n), cMax = new Float32Array(n);
  const P = new Float32Array(n), DIV = new Float32Array(n), NUT = new Float32Array(n);
  const bxF = new Float32Array(n), byF = new Float32Array(n), bxB = new Float32Array(n), byB = new Float32Array(n);
  const solid = new Uint8Array(n), uFix = new Uint8Array(u.length), vFix = new Uint8Array(v.length);
  const vizSolido = []; // células de fluido vizinhas do cilindro, com a face em contato
  const rake = new Float32Array(NY);

  // cilindro: célula sólida se o centro está dentro do círculo
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
    const dx = i + .5 - XC, dy = j + .5 - YC;
    if (dx * dx + dy * dy <= R * R) solid[i + NX * j] = 1;
  }
  for (let j = 0; j < NY; j++) for (let i = 0; i <= NX; i++) {
    const a = i > 0 && solid[i - 1 + NX * j], b = i < NX && solid[i + NX * j];
    if (a || b) uFix[i + NU1 * j] = 1;
  }
  for (let j = 0; j <= NY; j++) for (let i = 0; i < NX; i++) {
    const a = j > 0 && solid[i + NX * (j - 1)], b = j < NY && solid[i + NX * j];
    if (a || b) vFix[i + NX * j] = 1;
  }
  for (let j = 1; j < NY - 1; j++) for (let i = 1; i < NX - 1; i++) {
    const k = i + NX * j; if (solid[k]) continue;
    if (solid[k - 1]) vizSolido.push(k, 0); // sólido a oeste
    if (solid[k + 1]) vizSolido.push(k, 1); // a leste
    if (solid[k - NX]) vizSolido.push(k, 2); // ao sul
    if (solid[k + NX]) vizSolido.push(k, 3); // ao norte
  }
  // filetes de fumaça na entrada: 9 faixas igualmente espaçadas
  for (let f = 0; f < 9; f++) { const y = NY * (f + 1) / 10; for (let j = 0; j < NY; j++) if (Math.abs(j + .5 - y) < 1.25) rake[j] = 1; }

  const S = {
    NX, NY, D, XC, YC, R, u, v, T, C, P, NUT, solid,
    t: 0, passo: 0,
    m: { energia: false, empuxo: false, especie: false, les: false, continuidade: true },
    Re: 150, Ri: 1, Pr: 0.71, Sc: 100, dt: 0.6, iter: 24, omega: 1.9, cs: 0.17, diag: false, res: null, tm: { adv: 0, esc: 0, dif: 0, pres: 0, les: 0, tot: 0 }, forca: null, fonte: null, bc: { entrada: 'const', paredes: 'sim' }, aPuls: 0.3, tPuls: 160, ueAnt: 1,
    mon: { Cd: 0, Cl: 0, St: 0, Nu: 0, div: 0, div0: 0, nutMax: 0, q: 1, qin: 1, CdP: 0, CdV: 0 }, cruz: [], clAnt: 0, clMed: 0, pico: 0,
  };

  function reiniciar() {
    for (let j = 0; j < NY; j++) for (let i = 0; i <= NX; i++) { const k = i + NU1 * j; u[k] = uFix[k] ? 0 : 1; }
    v.fill(0); P.fill(0); T.fill(0); C.fill(0); NUT.fill(0);
    for (let k = 0; k < n; k++) if (solid[k]) T[k] = 1;
    S.t = 0; S.passo = 0; S.ueAnt = 1; S.cruz = []; S.clAnt = 0; S.clMed = 0; S.pico = 0; S.mon = { Cd: 0, Cl: 0, St: 0, Nu: 0, div: 0, div0: 0, nutMax: 0, q: 1, qin: 1, CdP: 0, CdV: 0 };
  }

  // ---- interpolação bilinear com coordenadas limitadas ao domínio ----
  function amostraU(f, x, y) {
    let fx = x, fy = y - .5;
    if (fx < 0) fx = 0; else if (fx > NX - 1e-4) fx = NX - 1e-4;
    if (fy < 0) fy = 0; else if (fy > NY - 1.0001) fy = NY - 1.0001;
    const i = fx | 0, j = fy | 0, a = fx - i, b = fy - j, k = i + NU1 * j;
    return (f[k] * (1 - a) + f[k + 1] * a) * (1 - b) + (f[k + NU1] * (1 - a) + f[k + NU1 + 1] * a) * b;
  }
  function amostraV(f, x, y) {
    let fx = x - .5, fy = y;
    if (fx < 0) fx = 0; else if (fx > NX - 1.0001) fx = NX - 1.0001;
    if (fy < 0) fy = 0; else if (fy > NY - 1e-4) fy = NY - 1e-4;
    const i = fx | 0, j = fy | 0, a = fx - i, b = fy - j, k = i + NX * j;
    return (f[k] * (1 - a) + f[k + 1] * a) * (1 - b) + (f[k + NX] * (1 - a) + f[k + NX + 1] * a) * b;
  }
  // amostra de escalar no centro; guarda mínimo e máximo do estêncil para o limitador
  let lo = 0, hi = 0;
  function amostraC(f, x, y, lim) {
    let fx = x - .5, fy = y - .5;
    if (fx < 0) fx = 0; else if (fx > NX - 1.0001) fx = NX - 1.0001;
    if (fy < 0) fy = 0; else if (fy > NY - 1.0001) fy = NY - 1.0001;
    const i = fx | 0, j = fy | 0, a = fx - i, b = fy - j, k = i + NX * j;
    const f00 = f[k], f10 = f[k + 1], f01 = f[k + NX], f11 = f[k + NX + 1];
    if (lim) { lo = Math.min(f00, f10, f01, f11); hi = Math.max(f00, f10, f01, f11); }
    return (f00 * (1 - a) + f10 * a) * (1 - b) + (f01 * (1 - a) + f11 * a) * b;
  }
  function amostraUlim(f, x, y) {
    let fx = x, fy = y - .5;
    if (fx < 0) fx = 0; else if (fx > NX - 1e-4) fx = NX - 1e-4;
    if (fy < 0) fy = 0; else if (fy > NY - 1.0001) fy = NY - 1.0001;
    const i = fx | 0, j = fy | 0, a = fx - i, b = fy - j, k = i + NU1 * j;
    const f00 = f[k], f10 = f[k + 1], f01 = f[k + NU1], f11 = f[k + NU1 + 1];
    lo = Math.min(f00, f10, f01, f11); hi = Math.max(f00, f10, f01, f11);
    return (f00 * (1 - a) + f10 * a) * (1 - b) + (f01 * (1 - a) + f11 * a) * b;
  }
  function amostraVlim(f, x, y) {
    let fx = x - .5, fy = y;
    if (fx < 0) fx = 0; else if (fx > NX - 1.0001) fx = NX - 1.0001;
    if (fy < 0) fy = 0; else if (fy > NY - 1e-4) fy = NY - 1e-4;
    const i = fx | 0, j = fy | 0, a = fx - i, b = fy - j, k = i + NX * j;
    const f00 = f[k], f10 = f[k + 1], f01 = f[k + NX], f11 = f[k + NX + 1];
    lo = Math.min(f00, f10, f01, f11); hi = Math.max(f00, f10, f01, f11);
    return (f00 * (1 - a) + f10 * a) * (1 - b) + (f01 * (1 - a) + f11 * a) * b;
  }
  // traço da característica com ponto médio (RK2)
  let tx = 0, ty = 0;
  function tracar(x, y, h) {
    const ua = amostraU(u, x, y), va = amostraV(v, x, y);
    const xm = x - .5 * h * ua, ym = y - .5 * h * va;
    tx = x - h * amostraU(u, xm, ym); ty = y - h * amostraV(v, xm, ym);
  }

  // ---- 1. advecção (termo convectivo ∇·(ρuφ)) por MacCormack limitado ----
  function adveccaoVelocidade(dt) {
    for (let j = 0; j < NY; j++) for (let i = 0; i <= NX; i++) {
      const k = i + NU1 * j; if (uFix[k]) { u2[k] = 0; continue; }
      tracar(i, j + .5, dt); u2[k] = amostraUlim(u, tx, ty); uMin[k] = lo; uMax[k] = hi;
    }
    for (let j = 0; j <= NY; j++) for (let i = 0; i < NX; i++) {
      const k = i + NX * j; if (vFix[k]) { v2[k] = 0; continue; }
      tracar(i + .5, j, dt); v2[k] = amostraVlim(v, tx, ty); vMin[k] = lo; vMax[k] = hi;
    }
    // correção: volta com a velocidade e mede o erro do passo de ida
    for (let j = 0; j < NY; j++) for (let i = 0; i <= NX; i++) {
      const k = i + NU1 * j; if (uFix[k]) continue;
      tracar(i, j + .5, -dt); let q = u2[k] + .5 * (u[k] - amostraU(u2, tx, ty));
      if (q < uMin[k]) q = uMin[k]; else if (q > uMax[k]) q = uMax[k]; uMin[k] = q;
    }
    for (let j = 0; j <= NY; j++) for (let i = 0; i < NX; i++) {
      const k = i + NX * j; if (vFix[k]) continue;
      tracar(i + .5, j, -dt); let q = v2[k] + .5 * (v[k] - amostraV(v2, tx, ty));
      if (q < vMin[k]) q = vMin[k]; else if (q > vMax[k]) q = vMax[k]; vMin[k] = q;
    }
    for (let k = 0; k < u.length; k++) u[k] = uFix[k] ? 0 : uMin[k];
    for (let k = 0; k < v.length; k++) v[k] = vFix[k] ? 0 : vMin[k];
  }
  function tracosCentro(dt) {
    for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
      const k = i + NX * j;
      tracar(i + .5, j + .5, dt); bxB[k] = tx; byB[k] = ty;
      tracar(i + .5, j + .5, -dt); bxF[k] = tx; byF[k] = ty;
    }
  }
  function adveccaoEscalar(f, f2, mn, mx) {
    for (let k = 0; k < n; k++) { if (solid[k]) { f2[k] = f[k]; continue; } f2[k] = amostraC(f, bxB[k], byB[k], true); mn[k] = lo; mx[k] = hi; }
    for (let k = 0; k < n; k++) {
      if (solid[k]) continue;
      let q = f2[k] + .5 * (f[k] - amostraC(f2, bxF[k], byF[k], false));
      if (q < mn[k]) q = mn[k]; else if (q > mx[k]) q = mx[k]; f[k] = q;
    }
  }

  // ---- viscosidade turbulenta de Smagorinsky: νt = (Cs Δ)² |S| ----
  function smagorinsky() {
    const c2 = S.cs * S.cs; let mx = 0;
    for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
      const k = i + NX * j; if (solid[k] || i === 0 || j === 0 || i === NX - 1 || j === NY - 1) { NUT[k] = 0; continue; }
      const iu = i + NU1 * j, iv = i + NX * j;
      const dudx = u[iu + 1] - u[iu], dvdy = v[iv + NX] - v[iv];
      const dudy = .25 * ((u[iu + NU1] + u[iu + NU1 + 1]) - (u[iu - NU1] + u[iu - NU1 + 1]));
      const dvdx = .25 * ((v[iv + 1] + v[iv + NX + 1]) - (v[iv - 1] + v[iv + NX - 1]));
      const sxy = .5 * (dudy + dvdx);
      const s = Math.sqrt(2 * (dudx * dudx + dvdy * dvdy + 2 * sxy * sxy));
      const q = c2 * s; NUT[k] = q; if (q > mx) mx = q;
    }
    S.mon.nutMax = mx;
  }

  // ---- 2. difusão viscosa ∇·[(ν+νt)∇u], explícita com subpassos ----
  function nuFace(k1, k2) { return S.m.les ? .5 * (NUT[k1] + NUT[k2]) : 0; }
  function difusaoVelocidade(dt) {
    const nu = S.D / S.Re, nutMx = S.m.les ? S.mon.nutMax : 0;
    const sub = Math.max(1, Math.ceil((nu + nutMx) * dt / .2)), h = dt / sub, parede = S.bc.paredes === 'parede';
    for (let s = 0; s < sub; s++) {
      for (let j = 0; j < NY; j++) for (let i = 1; i < NX; i++) {
        const k = i + NU1 * j; if (uFix[k]) { u2[k] = 0; continue; }
        const c = u[k], kc = i - 1 + NX * j; // células à esquerda (kc) e à direita (kc+1)
        const nl = nu + (S.m.les ? NUT[kc] : 0), nr = nu + (S.m.les ? NUT[kc + 1] : 0);
        let a = nr * (u[k + 1] - c) + nl * (u[k - 1] - c);
        if (j > 0) a += (nu + (S.m.les ? .25 * (NUT[kc] + NUT[kc + 1] + NUT[kc - NX] + NUT[kc + 1 - NX]) : 0)) * (u[k - NU1] - c);
        else if (parede) a -= 2 * nu * c;   // parede: u = 0 na face, fantasma −u
        if (j < NY - 1) a += (nu + (S.m.les ? .25 * (NUT[kc] + NUT[kc + 1] + NUT[kc + NX] + NUT[kc + 1 + NX]) : 0)) * (u[k + NU1] - c);
        else if (parede) a -= 2 * nu * c;
        u2[k] = c + h * a;
      }
      for (let j = 0; j < NY; j++) { const k = NU1 * j; u2[k] = u[k]; u2[k + NX] = u[k + NX]; }
      for (let k = 0; k < u.length; k++) u[k] = u2[k];
      for (let j = 1; j < NY; j++) for (let i = 0; i < NX; i++) {
        const k = i + NX * j; if (vFix[k]) { v2[k] = 0; continue; }
        const c = v[k], kb = i + NX * (j - 1), kt = i + NX * j;
        const nb = nu + (S.m.les ? NUT[kb] : 0), nt = nu + (S.m.les ? NUT[kt] : 0);
        let a = nt * (v[k + NX] - c) + nb * (v[k - NX] - c);
        if (i > 0) a += (nu + nuFace(kb - 1, kt - 1) * .5 + nuFace(kb, kt) * .5) * (v[k - 1] - c);
        if (i < NX - 1) a += (nu + nuFace(kb + 1, kt + 1) * .5 + nuFace(kb, kt) * .5) * (v[k + 1] - c);
        v2[k] = c + h * a;
      }
      for (let i = 0; i < NX; i++) { v2[i] = 0; v2[i + NX * NY] = 0; }
      for (let k = 0; k < v.length; k++) v[k] = v2[k];
    }
  }
  // difusão de escalar com parede em Dirichlet (val) ou Neumann (val < 0)
  function difusaoEscalar(f, f2, dif, prt, val, dt) {
    const mx = dif + (S.m.les ? S.mon.nutMax / prt : 0);
    const sub = Math.max(1, Math.ceil(mx * dt / .2)), h = dt / sub;
    for (let s = 0; s < sub; s++) {
      for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
        const k = i + NX * j; if (solid[k]) { f2[k] = f[k]; continue; }
        const c = f[k], g = dif + (S.m.les ? NUT[k] / prt : 0); let a = 0;
        const viz = (kk) => { if (solid[kk]) { if (val >= 0) a += 2 * (val - c); } else a += f[kk] - c; };
        if (i > 0) viz(k - 1);
        if (i < NX - 1) viz(k + 1);
        if (j > 0) viz(k - NX);
        if (j < NY - 1) viz(k + NX);
        f2[k] = c + h * g * a;
      }
      f.set(f2);
    }
  }

  // ---- 3. projeção: resolve ∇²φ = ∇·u* e corrige u = u* − ∇φ (φ = p·Δt) ----
  // desequilíbrio de massa que ainda sobraria se a correção fosse feita com a pressão atual
  function residuo(campo) {
    let soma = 0, nf = 0;
    for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
      const k = i + NX * j; if (solid[k]) { if (campo) campo[k] = 0; continue; }
      let sv = 0, nv = 0;
      if (i > 0 && !solid[k - 1]) { sv += P[k - 1]; nv++; }
      if (i < NX - 1) { if (!solid[k + 1]) { sv += P[k + 1]; nv++; } } else { nv += 2; }
      if (j > 0 && !solid[k - NX]) { sv += P[k - NX]; nv++; }
      if (j < NY - 1 && !solid[k + NX]) { sv += P[k + NX]; nv++; }
      const r = DIV[k] - (sv - nv * P[k]); if (campo) campo[k] = r; soma += Math.abs(r); nf++;
    }
    return soma / Math.max(1, nf);
  }
  // uma iteração de sobre-relaxação em xadrez: cada célula é ajustada pelas quatro vizinhas
  function varrer(w) {
    for (let cor = 0; cor < 2; cor++) for (let j = 0; j < NY; j++) {
      for (let i = (j + cor) & 1; i < NX; i += 2) {
        const k = i + NX * j; if (solid[k]) continue;
        let sv = 0, nv = 0;
        if (i > 0 && !solid[k - 1]) { sv += P[k - 1]; nv++; }
        if (i < NX - 1) { if (!solid[k + 1]) { sv += P[k + 1]; nv++; } } else { nv += 2; } // saída: φ = 0 na face
        if (j > 0 && !solid[k - NX]) { sv += P[k - NX]; nv++; }
        if (j < NY - 1 && !solid[k + NX]) { sv += P[k + NX]; nv++; }
        if (!nv) continue;
        P[k] += w * ((sv - DIV[k]) / nv - P[k]);
      }
    }
  }
  function projetar(dt, foto) {
    let soma = 0, s0 = 0, nf = 0;
    for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
      const k = i + NX * j; if (solid[k]) { DIV[k] = 0; continue; }
      const d = u[i + 1 + NU1 * j] - u[i + NU1 * j] + v[k + NX] - v[k]; DIV[k] = d; s0 += Math.abs(d); nf++;
    }
    S.mon.div0 = s0 / Math.max(1, nf);
    const w = S.omega, medir = S.diag || !!foto;
    if (medir) { S.res = new Float32Array(S.iter + 1); S.res[0] = residuo(null); }
    if (foto) foto(0);
    for (let it = 0; it < S.iter; it++) {
      varrer(w);
      if (medir) S.res[it + 1] = residuo(null);
      if (foto) foto(it + 1);
    }
    for (let j = 0; j < NY; j++) {
      for (let i = 1; i < NX; i++) { const k = i + NU1 * j; if (!uFix[k]) u[k] -= P[i + NX * j] - P[i - 1 + NX * j]; }
      const ko = NX + NU1 * j; u[ko] -= -2 * P[NX - 1 + NX * j];
    }
    for (let j = 1; j < NY; j++) for (let i = 0; i < NX; i++) { const k = i + NX * j; if (!vFix[k]) v[k] -= P[k] - P[k - NX]; }
    for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
      const k = i + NX * j; if (solid[k]) continue;
      soma += Math.abs(u[i + 1 + NU1 * j] - u[i + NU1 * j] + v[k + NX] - v[k]);
    }
    S.mon.div = soma / n;
  }
  function divergencia() {
    let soma = 0;
    for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
      const k = i + NX * j; if (solid[k]) continue;
      soma += Math.abs(u[i + 1 + NU1 * j] - u[i + NU1 * j] + v[k + NX] - v[k]);
    }
    S.mon.div = soma / n;
  }

  // velocidade imposta na entrada: constante ou pulsante em torno da média
  const entrada = () => S.bc.entrada === 'puls' ? 1 + S.aPuls * Math.sin(2 * Math.PI * S.t / S.tPuls) : 1;
  function contornos() {
    const ue = entrada();
    for (let j = 0; j < NY; j++) { u[NU1 * j] = ue; u[NX + NU1 * j] = u[NX - 1 + NU1 * j]; }
    for (let i = 0; i < NX; i++) { v[i] = 0; v[i + NX * NY] = 0; }
    for (let j = 0; j < NY; j++) { T[NX * j] = 0; C[NX * j] = S.m.especie ? rake[j] : 0; }
  }

  // ---- forças no cilindro, Strouhal e Nusselt ----
  function monitores(dt) {
    const nu = S.D / S.Re; let fx = 0, fy = 0, q = 0, fxp = 0;
    for (let a = 0; a < vizSolido.length; a += 2) {
      const k = vizSolido[a], lado = vizSolido[a + 1], i = k % NX, j = (k / NX) | 0;
      const p = P[k] / dt, uc = .5 * (u[i + NU1 * j] + u[i + 1 + NU1 * j]), vc = .5 * (v[k] + v[k + NX]);
      const g = nu + (S.m.les ? NUT[k] : 0);
      if (lado === 0) { fx -= p; fxp -= p; fy += g * vc / .5; }
      else if (lado === 1) { fx += p; fxp += p; fy += g * vc / .5; }
      else if (lado === 2) { fy -= p; fx += g * uc / .5; }
      else { fy += p; fx += g * uc / .5; }
      q += 2 * (1 - T[k]);
    }
    let qo = 0, qi = 0; for (let j = 0; j < NY; j++) { qo += u[NX + NU1 * j]; qi += u[NU1 * j]; } S.mon.q = qo / NY; S.mon.qin = qi / NY;
    const ref = .5 * S.D, Cd = fx / ref, Cl = fy / ref, f = .02;
    S.mon.Cd = S.passo < 5 ? Cd : S.mon.Cd + f * (Cd - S.mon.Cd);
    const CdP = fxp / ref, CdV = (fx - fxp) / ref;
    S.mon.CdP = S.passo < 5 ? CdP : S.mon.CdP + f * (CdP - S.mon.CdP); S.mon.CdV = S.passo < 5 ? CdV : S.mon.CdV + f * (CdV - S.mon.CdV);
    S.mon.Cl = Cl; S.mon.Nu = S.m.energia ? q / Math.PI : 0;
    // Strouhal pelas passagens ascendentes de Cl pela média; oscilação abaixo de 0,02 não conta
    S.clMed = S.passo < 5 ? Cl : S.clMed + .004 * (Cl - S.clMed);
    const x = Cl - S.clMed; if (Math.abs(x) > S.pico) S.pico = Math.abs(x);
    if (S.clAnt < 0 && x >= 0 && S.t > 30) {
      if (S.pico > .02) { S.cruz.push(S.t); if (S.cruz.length > 6) S.cruz.shift(); } else S.cruz = [];
      S.pico = 0;
    }
    S.clAnt = x;
    const ult = S.cruz[S.cruz.length - 1];
    if (S.cruz.length >= 3 && S.t - ult < 3 * (ult - S.cruz[S.cruz.length - 2])) { const c = S.cruz, per = (ult - c[0]) / (c.length - 1); S.mon.St = per > 0 ? S.D / per : 0; }
    else S.mon.St = 0;
  }

  const agora = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());
  // um passo de tempo; com `cap`, guarda uma foto do campo depois de cada etapa
  function passo(cap) {
    const dt = S.dt, tm = S.tm, t0 = agora(); let ta = t0;
    const marca = k => { const t = agora(); tm[k] = t - ta; ta = t; };
    // variação da vazão de entrada: num escoamento incompressível ela chega ao canal inteiro no mesmo instante
    const ue = entrada(), dU = ue - S.ueAnt; S.ueAnt = ue;
    if (dU) for (let j = 0; j < NY; j++) for (let i = 1; i <= NX; i++) { const k = i + NU1 * j; if (!uFix[k]) u[k] += dU; }
    contornos();
    if (cap) cap('ini');
    if (S.m.les) smagorinsky(); else S.mon.nutMax = 0;
    marca('les');
    const precisa = S.m.energia || S.m.especie;
    if (precisa) tracosCentro(dt);
    adveccaoVelocidade(dt);
    marca('adv');
    if (cap) cap('adv');
    if (S.m.energia) {
      adveccaoEscalar(T, T2, sMin, sMax);
      difusaoEscalar(T, T2, S.D / S.Re / S.Pr, .85, 1, dt);
      for (let k = 0; k < n; k++) if (solid[k]) T[k] = 1;
    }
    if (S.m.especie) { adveccaoEscalar(C, C2, cMin, cMax); difusaoEscalar(C, C2, S.D / S.Re / S.Sc, .7, -1, dt); }
    marca('esc');
    if (cap && precisa) cap('esc');
    // empuxo de Boussinesq: −ρ₀β(T − T∞)g, gravidade para baixo
    if (S.m.energia && S.m.empuxo) {
      const a = S.Ri / S.D * dt;
      for (let j = 1; j < NY; j++) for (let i = 0; i < NX; i++) { const k = i + NX * j; if (!vFix[k]) v[k] += a * .5 * (T[k] + T[k - NX]); }
      if (cap) cap('emp');
    }
    // força externa aplicada pelo usuário (termo F do momento)
    const F = S.forca;
    if (F && S.passo < F.ate) {
      const r2 = F.r * F.r, lim = 9 * r2;
      for (let j = 0; j < NY; j++) for (let i = 0; i <= NX; i++) {
        const k = i + NU1 * j; if (uFix[k]) continue; const dx = i - F.x, dy = j + .5 - F.y, q = dx * dx + dy * dy;
        if (q < lim) u[k] += dt * F.fx * Math.exp(-q / r2);
      }
      for (let j = 1; j < NY; j++) for (let i = 0; i < NX; i++) {
        const k = i + NX * j; if (vFix[k]) continue; const dx = i + .5 - F.x, dy = j - F.y, q = dx * dx + dy * dy;
        if (q < lim) v[k] += dt * F.fy * Math.exp(-q / r2);
      }
    }
    const Fo = S.fonte;
    if (Fo && S.m.especie && S.passo < Fo.ate) {
      for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
        const k = i + NX * j; if (solid[k]) continue; const dx = i + .5 - Fo.x, dy = j + .5 - Fo.y;
        if (dx * dx + dy * dy < 4.8) C[k] = 1;
      }
    }
    ta = agora();
    difusaoVelocidade(dt);
    // perturbação inicial pequena para quebrar a simetria
    if (S.passo < 60) { const i0 = Math.round(S.XC + S.R + 3); for (let j = Math.round(S.YC) - 3; j < S.YC + 3; j++) v[i0 + NX * j] += .02; }
    contornos();
    marca('dif');
    if (cap) cap('dif');
    if (S.m.continuidade) projetar(dt, cap ? it => cap('pres', it) : null);
    else { for (let k = 0; k < n; k++) P[k] *= 0; divergencia(); S.mon.div0 = S.mon.div; S.res = null; }
    marca('pres');
    if (cap) cap('cor');
    S.t += dt; S.passo++;
    monitores(dt);
    tm.tot = agora() - t0;
  }

  // passo detalhado: devolve o campo no centro das células depois de cada etapa e a pressão ao longo das iterações
  function passoDetalhado() {
    const etapas = [], fotosP = [], quais = new Set([0, 1, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 60, 80, S.iter]);
    const foto = id => { const uc = new Float32Array(n), vc = new Float32Array(n); centro(uc, vc); return { id, uc, vc }; };
    passo((id, it) => {
      if (id === 'pres') { if (quais.has(it)) { const r = new Float32Array(n); residuo(r); fotosP.push({ it, p: P.slice(), r }); } return; }
      const e = foto(id);
      if (id === 'dif') { const d = new Float32Array(n); for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) { const k = i + NX * j; d[k] = solid[k] ? 0 : u[i + 1 + NU1 * j] - u[i + NU1 * j] + v[k + NX] - v[k]; } e.div = d; }
      if (id === 'cor') { const d = new Float32Array(n); for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) { const k = i + NX * j; d[k] = solid[k] ? 0 : u[i + 1 + NU1 * j] - u[i + NU1 * j] + v[k + NX] - v[k]; } e.div = d; }
      if (id === 'esc' || id === 'ini') { e.T = T.slice(); e.C = C.slice(); }
      etapas.push(e);
    });
    // a mesma equação de pressão resolvida até o fim (referência) e do zero, para ver o campo se formar
    let frio = null;
    if (S.m.continuidade) {
      const Pq = P.slice();
      for (let it = 0; it < 3000; it++) varrer(1.985);
      const ref = P.slice(); let nr = 1e-30;
      const gradErro = A => {   // erro do gradiente (a força de pressão) em relação à referência
        let e = 0;
        for (let j = 0; j < NY; j++) for (let i = 1; i < NX; i++) { const k = i + NX * j; if (solid[k] || solid[k - 1]) continue; const d = (A[k] - A[k - 1]) - (ref[k] - ref[k - 1]); e += d * d; }
        for (let j = 1; j < NY; j++) for (let i = 0; i < NX; i++) { const k = i + NX * j; if (solid[k] || solid[k - NX]) continue; const d = (A[k] - A[k - NX]) - (ref[k] - ref[k - NX]); e += d * d; }
        return Math.sqrt(e / nr);
      };
      { const z = new Float32Array(n); nr = 1; const t = gradErro(z); nr = t * t; }
      const fotos = [], marcos = new Set([1, 2, 4, 8, 16, 32, 64, 128, 256, 600]);
      const tira = it => { const r = new Float32Array(n); residuo(r); fotos.push({ it, p: P.slice(), r, err: gradErro(P) }); };
      P.fill(0); tira(0);
      for (let it = 1; it <= 600; it++) { varrer(S.omega); if (marcos.has(it)) tira(it); }
      for (const f of fotosP) f.err = gradErro(f.p);
      P.set(Pq); frio = { fotos, ref };
    }
    let fluido = 0; for (let k = 0; k < n; k++) if (!solid[k]) fluido++;
    return { etapas, fotosP, frio, res: S.res ? S.res.slice() : null, div0: S.mon.div0, div: S.mon.div, iter: S.iter, cont: S.m.continuidade, fluido };
  }

  // campos no centro das células para desenho
  function centro(uc, vc) {
    for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
      const k = i + NX * j;
      uc[k] = .5 * (u[i + NU1 * j] + u[i + 1 + NU1 * j]); vc[k] = .5 * (v[k] + v[k + NX]);
    }
  }

  S.reiniciar = reiniciar; S.passo1 = () => passo(null); S.detalhe = passoDetalhado; S.centro = centro; S.uF = u; S.vF = v;
  reiniciar();
  return S;
}

// estado salvo (Int16): u, v, φ, com escala no cabeçalho
function carregar(S, buf) {
  const h = new Float32Array(buf, 0, 4), q = new Int16Array(buf, 16);
  const nu = S.u.length, nv = S.v.length, np = S.P.length;
  if (q.length < nu + nv + np) return;
  for (let k = 0; k < nu; k++) S.u[k] = q[k] / h[0];
  for (let k = 0; k < nv; k++) S.v[k] = q[nu + k] / h[0];
  for (let k = 0; k < np; k++) S.P[k] = q[nu + nv + k] / h[1];
  S.t = h[2];
}
function salvar(S) {
  const nu = S.u.length, nv = S.v.length, np = S.P.length;
  let pm = 1e-9; for (const x of S.P) pm = Math.max(pm, Math.abs(x));
  const buf = new ArrayBuffer(16 + 2 * (nu + nv + np)), h = new Float32Array(buf, 0, 4), q = new Int16Array(buf, 16);
  h[0] = 12000; h[1] = 32000 / pm; h[2] = S.t;
  for (let k = 0; k < nu; k++) q[k] = Math.round(S.u[k] * h[0]);
  for (let k = 0; k < nv; k++) q[nu + k] = Math.round(S.v[k] * h[0]);
  for (let k = 0; k < np; k++) q[nu + nv + k] = Math.round(S.P[k] * h[1]);
  return buf;
}

// ---- interface do worker ----
if (typeof self !== 'undefined' && typeof self.postMessage === 'function' && typeof window === 'undefined') {
  let S = null;
  const MODELOS = ['energia', 'empuxo', 'especie', 'les', 'continuidade'];
  const num = (x, a, b, d) => { const v = Number(x); return Number.isFinite(v) ? Math.min(b, Math.max(a, v)) : d; };
  self.onmessage = e => {
    // só aceita mensagens da própria página que criou o worker
    if (e.origin && e.origin !== self.location.origin) return;
    const m = e.data; if (!m || typeof m !== 'object') return;
    if (m.tipo === 'criar') { S = criarCaso({}); return; }
    if (!S) return;
    if (m.tipo === 'config') {
      if (m.m && typeof m.m === 'object') for (const k of MODELOS) if (typeof m.m[k] === 'boolean') S.m[k] = m.m[k];
      if (m.Re != null) S.Re = num(m.Re, 10, 5000, S.Re);
      if (m.Ri != null) S.Ri = num(m.Ri, 0, 50, S.Ri);
      if (m.iter != null) S.iter = Math.round(num(m.iter, 1, 80, S.iter));
      if (typeof m.diag === 'boolean') S.diag = m.diag;
      if (m.bc && typeof m.bc === 'object') {
        if (m.bc.entrada === 'const' || m.bc.entrada === 'puls') S.bc.entrada = m.bc.entrada;
        if (m.bc.paredes === 'sim' || m.bc.paredes === 'parede') S.bc.paredes = m.bc.paredes;
      }
      if (!S.m.energia) { S.T.fill(0); for (let k = 0; k < S.T.length; k++) if (S.solid[k]) S.T[k] = 1; }
      if (!S.m.especie) S.C.fill(0);
      if (!S.m.les) S.NUT.fill(0);
      return;
    }
    if (m.tipo === 'reiniciar') { S.reiniciar(); return; }
    if (m.tipo === 'forca') {
      S.forca = m.fim ? null : { x: num(m.x, 0, S.NX, 0), y: num(m.y, 0, S.NY, 0), fx: num(m.fx, -.2, .2, 0), fy: num(m.fy, -.2, .2, 0), r: num(m.r, 1, 10, 3), ate: S.passo + 8 };
      return;
    }
    if (m.tipo === 'fonte') { S.fonte = m.fim ? null : { x: num(m.x, 0, S.NX, 0), y: num(m.y, 0, S.NY, 0), ate: S.passo + 6 }; return; }
    if (m.tipo === 'estado') { if (m.estado instanceof ArrayBuffer) carregar(S, m.estado); return; }
    if (m.tipo === 'detalhe') {
      const N = S.NX * S.NY, up = new Float32Array(N), vp = new Float32Array(N); S.centro(up, vp);
      const Tp = S.T.slice(), Cp = S.C.slice(), t0 = performance.now(), det = S.detalhe();
      const uc = new Float32Array(N), vc = new Float32Array(N); S.centro(uc, vc);
      const p = new Float32Array(N); for (let i = 0; i < N; i++) p[i] = S.P[i] / S.dt;
      self.postMessage({ tipo: 'quadro', id: num(m.id, 0, 1e12, 0), feitos: 1, ms: performance.now() - t0, t: S.t, passo: S.passo, mon: { ...S.mon }, tm: { ...S.tm }, res: det.res, iter: S.iter, dt: S.dt,
        uc, vc, p, T: S.T.slice(), C: S.C.slice(), nut: S.NUT.slice(), up, vp, Tp, Cp, uf: S.uF.slice(), vf: S.vF.slice(), det });
      return;
    }
    if (m.tipo === 'passos') {
      const t0 = performance.now(); let k = 0;
      const n = num(m.n, 1, 8, 1), lim = num(m.ms, 5, 60, 30);
      const N = S.NX * S.NY, up = new Float32Array(N), vp = new Float32Array(N);
      let Tp = null, Cp = null;
      for (; k < n; k++) {
        S.centro(up, vp); Tp = S.T.slice(); Cp = S.C.slice();
        S.passo1(); if (performance.now() - t0 > lim) { k++; break; }
      }
      const uc = new Float32Array(N), vc = new Float32Array(N);
      S.centro(uc, vc);
      const uf = S.uF.slice(), vf = S.vF.slice();
      const p = new Float32Array(N); for (let i = 0; i < N; i++) p[i] = S.P[i] / S.dt;
      const T = S.T.slice(), C = S.C.slice(), nut = S.NUT.slice();
      self.postMessage({ tipo: 'quadro', id: num(m.id, 0, 1e12, 0), feitos: k, ms: performance.now() - t0, t: S.t, passo: S.passo, mon: { ...S.mon }, tm: { ...S.tm }, res: S.res ? S.res.slice() : null, iter: S.iter, dt: S.dt, uc, vc, p, T, C, nut, up, vp, Tp, Cp, uf, vf },
        [uc.buffer, vc.buffer, p.buffer, T.buffer, C.buffer, nut.buffer, up.buffer, vp.buffer, Tp.buffer, Cp.buffer, uf.buffer, vf.buffer]);
    }
  };
} else if (typeof module !== 'undefined') {
  module.exports = { criarCaso, salvar, carregar };
}
