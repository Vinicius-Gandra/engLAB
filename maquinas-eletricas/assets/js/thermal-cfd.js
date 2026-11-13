/* Escoamento do ar na vista "Na máquina": simulação Lattice Boltzmann (D2Q9) na geometria do corte.
   Ventiladores no eixo empurram o ar; os polos do rotor bombeiam para fora; dutos do núcleo, cabeças
   das bobinas e polos aquecem; o feixe do trocador freia e esfria. A temperatura é levada pelo ar
   e calibrada para que o ar que chega ao feixe esteja na temperatura quente e o que sai, na fria.
   As duas metades são calculadas: embaixo não há trocador e o ar entra e sai por fora do plano. O cálculo roda num worker quando possível. */
(function () {
  'use strict';
  const H = 2.5;

  /* ================================================================ núcleo (sem dependências: roda no worker) */
  // baixo = metade de baixo da carcaça: sem trocador; o ar frio chega e o quente sai por fora do plano do corte
  // baixo === 'bb': corte B–B, plano perpendicular ao eixo no duto radial do meio do núcleo
  function nucleo(H, baixo) {
    const BBm = baixo === 'bb';
    const X0 = BBm ? 870 : 104, Y0 = BBm ? 50 : baixo ? 194 : 48, XC = BBm ? 1130 : 698, YC = BBm ? 460 : 330;
    const NX = Math.ceil((XC - X0) / H), NY = Math.ceil((YC - Y0) / H), N = NX * NY;
    const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
    const segDist = (px, py, ax, ay, bx, by) => { const dx = bx - ax, dy = by - ay, t = clamp(((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy || 1), 0, 1); return Math.hypot(px - ax - t * dx, py - ay - t * dy); };
    const lpk = (264 - 36) / 7, DUCTS = []; for (let k = 1; k < 7; k++) DUCTS.push(268 + k * lpk + (k - 1) * 6 + 3);
    const noDuto = x => DUCTS.some(d => Math.abs(x - d) < 3.8);
    const APOIOS = [268 + lpk / 2 + (lpk + 6), 268 + lpk / 2 + 5 * (lpk + 6)];
    const F32 = () => new Float32Array(N);
    const bar = new Uint8Array(N), borda = new Uint8Array(N), poroso = new Uint8Array(N), frio = new Uint8Array(N), pres = new Uint8Array(N), canal = new Uint8Array(N);
    const rx = new Float32Array(N), ry = new Float32Array(N);
    const drag = F32(), fx = F32(), fy = F32(), q = F32(), alvoX = F32(), alvoY = F32(), puxa = F32();
    let viz = null, entrada = null;
    const K = { vDuto: 0.04, dpEnt: BBm ? 0.03 : 0, tFonte: BBm ? 0.12 : 0, dCanal: 0, bombaBB: 0.1, giro: 0.03, vent: 0.075, bomba: 0.08, dCab: 0.05, dPolo: 0.06, dFeixe: 0.07, dDesvio: 0.4, dCoroa: 0.08, dCabE: 1, distrib: 1, nu: 0.012, kc: 0.012, S1: 650, S2: 460, dtT: 18, radial: 0.4 };

    /* ---------- corte B–B: rotor laminado (mesmo contorno do desenho), bobinas, ranhuras e vigas I no duto */
    const dentro = (pol, x, y) => { let c = false; for (let i = 0, j = pol.length - 1; i < pol.length; j = i++) { const [xi, yi] = pol[i], [xj, yj] = pol[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; };
    const ROT = BBm ? (() => {
      const cx = 1000, yc = 330, PO = 4, R0 = 75, yr = 40, yu = 64, hb = 14, rp = 56, c0 = R0 - rp, dph = 2, bE = 8, PI = Math.PI;
      const bpe = 0.68 * 2 * PI * R0 / PO, psi = Math.min(bpe / (2 * rp), PI / 2 * 0.98), xe = rp * Math.sin(psi), ye = c0 + rp * Math.cos(psi);
      const yb = Math.min(yu, ye - Math.max(2.5, 0.12 * (R0 - yu))), rf = Math.min(0.05 * 2 * hb, 5, (yu - yr) * 0.1), ch = Math.min(3, 0.3 * (ye - yb));
      const xc1 = hb + 1.5, xc2 = xc1 + bE, yc1 = yr + dph, yc2 = yc1 + Math.min(19, yu - yr - 2 * dph - 1);
      const rCap = Math.min(yr / Math.cos(PI / PO), Math.max(Math.hypot(yr, xc2 + 3), yr + 0.3 * (yu - yr))), xk = Math.sqrt(Math.max(0, rCap * rCap - yr * yr));
      const Rp = [[hb, yr], [hb, yu - rf]];
      for (let k = 1; k <= 4; k++) { const a = PI - k * PI / 8; Rp.push([hb + rf + rf * Math.cos(a), yu - rf + rf * Math.sin(a)]); }
      if (yb < yu - 0.05) Rp.push([Math.max(hb + rf + 1, Math.min(xe - 2, xc2 + 4)), yu]);
      Rp.push([xe - ch, yb], [xe, yb + ch], [xe, ye]);
      const arco = []; for (let k = 1; k < 24; k++) { const t = psi - 2 * psi * k / 24; arco.push([rp * Math.sin(t), c0 + rp * Math.cos(t)]); }
      const polo = Rp.concat(arco, Rp.slice().reverse().map(([x, y]) => [-x, y]));
      const PMap = i => { const a = PI / 2 + 2 * PI * i / PO, ca = Math.cos(a), sa = Math.sin(a); return (x, y) => [cx + x * sa + y * ca, yc - (-x * ca + y * sa)]; };
      const pol = [], bob = [];
      for (let i = 0; i < PO; i++) {
        const f = PMap(i); pol.push(f(xk, yr)); for (const q of polo) pol.push(f(q[0], q[1])); pol.push(f(-xk, yr));
        const a0 = PI / 2 + 2 * PI * i / PO + Math.atan2(xk, yr), a1 = PI / 2 + 2 * PI * (i + 1) / PO - Math.atan2(xk, yr);
        for (let j = 1; j < 10; j++) { const a = a0 + (a1 - a0) * j / 10; pol.push([cx + rCap * Math.cos(a), yc - rCap * Math.sin(a)]); }
        for (const sg of [1, -1]) bob.push([f(sg * hb, yr), f(sg * (xc2 + 1), yr), f(sg * (xc2 + 1), yu), f(sg * hb, yu)]);
      }
      return { pol, bob };
    })() : null;
    function celulaBB(k, x, y, cat) {
      const PI = Math.PI, dx = x - 1000, dy = 330 - y, r = Math.hypot(dx, dy), a = Math.atan2(dy, dx), ca = dx / (r || 1), sa = dy / (r || 1);
      const off = (ang, p) => { const o = ((ang % p) + p) % p; return Math.min(o, p - o); };
      let s = 0;
      if (x < 878 || x > 1122 || y > 453 || y < 58) s = 1;
      if (r < 12) s = 1;
      if (!s && r < 76 && (dentro(ROT.pol, x, y) || ROT.bob.some(b => dentro(b, x, y)))) s = 1;
      const pr = 2 * PI / 48;
      // duto entre as vigas I: meio poroso direcional (os canais só deixam o ar andar no sentido do raio);
      // as bobinas e as vigas são estreitas demais para a malha e aparecem no desenho por cima
      // a resistência dos canais domina e iguala a vazão em toda a volta: cada canal impõe a mesma velocidade radial
      if (!s && r >= 79.5 && r <= 111.5) { drag[k] = K.dCanal; canal[k] = 1; rx[k] = ca; ry[k] = sa; poroso[k] = 1; alvoX[k] = ca * K.vDuto; alvoY[k] = sa * K.vDuto; puxa[k] = 0.35; }
      if (!s && r >= 112 && r <= 116 && off(a - PI / 12, PI / 6) * r < 2.2) s = 1;  // barras do dorso
      if (!s && r < 77) {
        // entre os polos: o rotor bombeia para fora e arrasta o ar no sentido da rotação
        // média no tempo (o rotor gira): o ar chega das pontas pelo entreferro e entre os polos com pressão maior
        // que a da saída e sai por todos os dutos; o rotor só arrasta o ar no sentido da rotação
        const vt = K.giro * Math.min(1, r / 75);
        alvoX[k] = -sa * vt; alvoY[k] = ca * vt; puxa[k] = 0.03;
        if (r < 74) cat[2][k] = 1;
        pres[k] = 1;   // o ar chega de fora do plano (das pontas) por todo o furo do estator: entreferro e espaço entre os polos
      }
      if (!s && r >= 77 && r <= 112) cat[0][k] = 1;                                 // duto: ferro e cobre do estator
      if (!s && y >= 118 && y <= 146) { drag[k] = K.dFeixe; poroso[k] = 1; frio[k] = 1; }   // feixe
      if (!s && y >= 60 && y <= 100) pres[k] = 2;                                   // acima do feixe: segue para as pontas (sai do plano)
      return s;
    }
    /* ---------- geometria em células: sólido, meio poroso, forças, fontes de calor */
    function geometria(fans) {
      bar.fill(0); poroso.fill(0); frio.fill(0); pres.fill(0); canal.fill(0); drag.fill(0); fx.fill(0); fy.fill(0); q.fill(0); alvoX.fill(0); alvoY.fill(0); puxa.fill(0);
      const cat = [F32(), F32(), F32(), F32()];   // dutos, cabeças, polos, ventiladores
      for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
        const k = j * NX + i, x = X0 + (i + 0.5) * H, y = Y0 + (j + 0.5) * H, r = YC - y;
        if (BBm) {
          let sb = celulaBB(k, x, y, cat);
          if (i === 0 || j === 0 || i === NX - 1 || j === NY - 1) sb = 1;
          if (sb) { drag[k] = 0; poroso[k] = 0; frio[k] = 0; pres[k] = 0; alvoX[k] = alvoY[k] = puxa[k] = 0; for (const c of cat) c[k] = 0; }
          bar[k] = sb; continue;
        }
        const esq = x <= 400, xl = esq ? x : 800 - x, dir = esq ? 1 : -1, temVent = fans >= 2 || esq;
        let s = 0;
        const capo = !baixo && x > 106 && x < 694 && y > 52 && y < 200, carc = x > 122 && x < 678 && y >= 198 && y < YC + H;
        if (!capo && !carc) s = 1;
        if (Math.abs(y - 200) < 2.6 && (baixo || !((x > 128 && x < 166) || (x > 262 && x < 538) || (x > 634 && x < 672)))) s = 1;   // topo da carcaça e aberturas (embaixo, fechada)
        if (xl >= 172 && xl <= 196 && y >= 108 && y <= 156) s = 1;                    // cabeçotes de água
        if (xl >= 169.5 && xl <= 175.5 && y >= 154 && y <= 200) s = 1;                // divisórias
        if (y > 200) {
          if (r < 13) s = 1;                                                           // eixo
          // defletor: anel guia em volta das pontas das pás (com bocal de entrada) e chapa até a carcaça
          if (segDist(xl, r, 214, 61, 214, 130) < 2.3 || segDist(xl, r, 201, 61, 214, 61) < 1.7 || segDist(xl, r, 196, 67, 201, 61) < 1.7) s = 1;
          if (xl >= 266 && r >= 77 && r <= 112 && !noDuto(x)) s = 1;                 // pacotes do núcleo
          if (xl >= 292 && r >= 13 && r <= 38 && !(r > 20.5 && r < 29.5)
            && !(r >= 29.5 && (Math.abs(xl - 325) < 4 || Math.abs(xl - 343) < 4))) s = 1;   // coroa: duto axial e furos radiais
          if (!s && xl >= 292 && r > 20.5 && r < 29.5 && K.dCoroa) { drag[k] = K.dCoroa; }   // duto axial da coroa: curva de 90° na entrada e atrito
          const z = 268 - xl, lift = 10 * clamp((z - 12) / 30, 0, 1);
          if (!s && z >= 0 && z <= 50 && r >= 76 + lift && r <= 95 + lift) { drag[k] = K.dCab; poroso[k] = 1; cat[1][k] = 1; }   // cabeças: o ar passa entre as bobinas
          if (!s && xl >= 276 && r > 38 && r <= 75) { drag[k] = K.dPolo; poroso[k] = 1; cat[2][k] = 1; alvoY[k] = K.bomba; puxa[k] = 0.14; }   // entre os polos: o rotor bombeia para fora
          if (!s && xl >= 266 && r >= 77 && r <= 112) cat[0][k] = 1;
          // anéis de apoio do núcleo na carcaça (chapas radiais furadas): só freiam o ar no sentido do eixo
          if (!s && r > 113 && r < 129.5 && APOIOS.some(xp => Math.abs(x - xp) < 1.8)) { drag[k] = 0.35; poroso[k] = 1; }
          if (!s && !poroso[k] && xl >= 242 && xl < 266 && r >= 100) { drag[k] = K.dDesvio; poroso[k] = 2; }   // por cima das cabeças: escoras e dedos de pressão                  // dutos do núcleo
          if (!s && temVent && xl >= 201 && xl <= 212 && r >= 13 && r <= 59) { alvoX[k] = K.vent * dir; alvoY[k] = 0; puxa[k] = 0.5; cat[3][k] = 1; }   // ventiladores: impõem a vazão, sem refluxo
          if (!s && temVent && xl > 212 && xl <= 226 && r >= 30 && r <= 74) { alvoX[k] = K.vent * 0.55 * dir; alvoY[k] = K.vent * K.radial * clamp((r - 30) / 30, 0.2, 1); puxa[k] = 0.12; }   // saída do ventilador: joga o ar para fora, sobre as cabeças
        }
        if (!s && x >= 196 && x <= 604 && y >= 118 && y <= 146) { drag[k] = K.dFeixe; poroso[k] = 1; frio[k] = 1; }   // feixe do trocador
        if (i === 0 || j === 0 || i === NX - 1 || j === NY - 1) s = 1;
        // embaixo: ar frio entrando no plano junto às câmaras dos ventiladores, ar quente saindo do plano sobre o núcleo
        if (!s && baixo) {
          if (K.distrib) {
            // distribuído: o frio chega pela periferia da câmara de entrada; o quente sai por todo o dorso do núcleo
            if ((esq || fans >= 2) && xl >= 124 && xl <= 210 && r >= 104 && r <= 127) pres[k] = 1;
            if (x >= 270 && x <= 530 && r >= 114 && r <= 127) pres[k] = 2;
          } else {
            if (Math.hypot(x - 146, r - 112) < 7 || (fans >= 2 && Math.hypot(x - 654, r - 112) < 7)) pres[k] = 1;
            if (Math.hypot(x - 330, r - 121) < 7 || Math.hypot(x - 470, r - 121) < 7) pres[k] = 2;
          }
        }
        if (s) { drag[k] = 0; poroso[k] = 0; frio[k] = 0; pres[k] = 0; fx[k] = fy[k] = alvoX[k] = alvoY[k] = puxa[k] = 0; for (const c of cat) c[k] = 0; }
        bar[k] = s;
      }
      // calor: 55 % nos dutos (ferro e cobre do estator), 20 % nas cabeças, 20 % no rotor, 5 % nos ventiladores
      const pesos = BBm ? [0.7, 0, 0.3, 0] : [0.55, 0.2, 0.2, 0.05];
      cat.forEach((c, n) => { let s = 0; for (let k = 0; k < N; k++) s += c[k]; if (s) for (let k = 0; k < N; k++) q[k] += c[k] * pesos[n] / s; });
      // sólidos na fronteira com o ar: recebem a média do ar ao lado (parede sem fluxo de calor)
      const lista = [];
      borda.fill(0);
      for (let j = 1; j < NY - 1; j++) for (let i = 1; i < NX - 1; i++) {
        const k = j * NX + i; if (!bar[k]) continue;
        const vs = [k + 1, k - 1, k + NX, k - NX, k + NX + 1, k + NX - 1, k - NX + 1, k - NX - 1].filter(n => !bar[n]);
        if (vs.length) { borda[k] = 1; lista.push(k, vs.length, ...vs); }
      }
      viz = Int32Array.from(lista);
      // ar que chega ao feixe (linha logo abaixo dele): referência da temperatura quente
      const e = [], je = Math.floor((149 - Y0) / H);
      for (let i = 0; i < NX; i++) { const x = X0 + (i + 0.5) * H; if (x > 198 && x < 602 && !bar[je * NX + i]) e.push(je * NX + i); }
      entrada = Int32Array.from(e);
    }

    /* ---------- LBM */
    let n0, nE, nW, nN, nS, nNE, nSE, nNW, nSW, ux, uy, T, T2, passos = 0, fase = 0, ganho = 0.02, sref = 0.05, influxo = 0, nInf = 0;
    let omg = 1, tau = 1;
    const f9 = 4 / 9, f1 = 1 / 9, f36 = 1 / 36, UMAX = 0.17;
    function iniciar(fans) {
      omg = 1 / (3 * K.nu + 0.5); tau = 1 / omg;
      geometria(fans);
      [n0, nE, nW, nN, nS, nNE, nSE, nNW, nSW, ux, uy, T, T2] = Array.from({ length: 13 }, F32);
      n0.fill(f9); nE.fill(f1); nW.fill(f1); nN.fill(f1); nS.fill(f1); nNE.fill(f36); nSE.fill(f36); nNW.fill(f36); nSW.fill(f36);
      passos = 0; fase = 0; ganho = 0.02; influxo = 0; nInf = 0;
    }
    function collide() {
      nInf++;
      for (let y = 1; y < NY - 1; y++) for (let x = 1, i = y * NX + 1; x < NX - 1; x++, i++) {
        if (bar[i]) continue;
        let r = n0[i] + nN[i] + nS[i] + nE[i] + nW[i] + nNW[i] + nNE[i] + nSW[i] + nSE[i];
        let vx = (nE[i] + nNE[i] + nSE[i] - nW[i] - nNW[i] - nSW[i]) / r, vy = (nN[i] + nNE[i] + nNW[i] - nS[i] - nSE[i] - nSW[i]) / r;
        const d = drag[i]; if (d) { vx *= 1 - d; vy *= 1 - d; }
        if (canal[i]) { const vr = vx * rx[i] + vy * ry[i]; vx = vr * rx[i]; vy = vr * ry[i]; }
        const pu = puxa[i]; if (pu) { vx += (alvoX[i] - vx) * pu; if (alvoY[i] > vy || pu > 0.3) vy += (alvoY[i] - vy) * pu; }
        vx = vx > UMAX ? UMAX : vx < -UMAX ? -UMAX : vx; vy = vy > UMAX ? UMAX : vy < -UMAX ? -UMAX : vy;
        ux[i] = vx; uy[i] = vy;
        // entrada e saída fora do plano: densidade fixa (a massa que entra é a vazão)
        let om = omg; const pr = pres[i];
        if (pr) { const r1 = pr === 1 ? 1 + K.dpEnt : 1; if (pr === 1) influxo += r1 - r; r = r1; om = 1; }
        const r9 = f9 * r, r1 = f1 * r, r36 = f36 * r, vx3 = 3 * vx, vy3 = 3 * vy, vx2 = vx * vx, vy2 = vy * vy, vxy2 = 2 * vx * vy, v2 = vx2 + vy2, v215 = 1.5 * v2;
        n0[i] += om * (r9 * (1 - v215) - n0[i]);
        nE[i] += om * (r1 * (1 + vx3 + 4.5 * vx2 - v215) - nE[i]); nW[i] += om * (r1 * (1 - vx3 + 4.5 * vx2 - v215) - nW[i]);
        nN[i] += om * (r1 * (1 + vy3 + 4.5 * vy2 - v215) - nN[i]); nS[i] += om * (r1 * (1 - vy3 + 4.5 * vy2 - v215) - nS[i]);
        nNE[i] += om * (r36 * (1 + vx3 + vy3 + 4.5 * (v2 + vxy2) - v215) - nNE[i]); nSE[i] += om * (r36 * (1 + vx3 - vy3 + 4.5 * (v2 - vxy2) - v215) - nSE[i]);
        nNW[i] += om * (r36 * (1 - vx3 + vy3 + 4.5 * (v2 - vxy2) - v215) - nNW[i]); nSW[i] += om * (r36 * (1 - vx3 - vy3 + 4.5 * (v2 + vxy2) - v215) - nSW[i]);
      }
    }
    // "N" aponta para cima no desenho (j menor)
    function stream() {
      for (let y = 1; y < NY - 1; y++) for (let x = 1; x < NX - 1; x++) { const i = x + y * NX; nN[i] = nN[i + NX]; nNW[i] = nNW[i + 1 + NX]; }
      for (let y = 1; y < NY - 1; y++) for (let x = NX - 2; x > 0; x--) { const i = x + y * NX; nE[i] = nE[i - 1]; nNE[i] = nNE[i - 1 + NX]; }
      for (let y = NY - 2; y > 0; y--) for (let x = NX - 2; x > 0; x--) { const i = x + y * NX; nS[i] = nS[i - NX]; nSE[i] = nSE[i - 1 - NX]; }
      for (let y = NY - 2; y > 0; y--) for (let x = 1; x < NX - 1; x++) { const i = x + y * NX; nW[i] = nW[i + 1]; nSW[i] = nSW[i + 1 - NX]; }
      for (let y = 1; y < NY - 1; y++) for (let x = 1; x < NX - 1; x++) {
        const i = x + y * NX; if (!bar[i]) continue;
        nE[i + 1] = nW[i]; nW[i - 1] = nE[i]; nN[i - NX] = nS[i]; nS[i + NX] = nN[i];
        nNE[i - NX + 1] = nSW[i]; nNW[i - NX - 1] = nSE[i]; nSE[i + NX + 1] = nNW[i]; nSW[i + NX - 1] = nNE[i];
        n0[i] = f9; nE[i] = nW[i] = nN[i] = nS[i] = f1; nNE[i] = nSE[i] = nNW[i] = nSW[i] = f36;
      }
    }

    /* ---------- temperatura: transporte semilagrangiano (RK2), fontes, resfriamento no feixe */
    const bil = (a, x, y) => {
      x = clamp(x, 0, NX - 1.001); y = clamp(y, 0, NY - 1.001);
      const i0 = x | 0, j0 = y | 0, fx_ = x - i0, fy_ = y - j0, i = j0 * NX + i0;
      return (a[i] * (1 - fx_) + a[i + 1] * fx_) * (1 - fy_) + (a[i + NX] * (1 - fx_) + a[i + NX + 1] * fx_) * fy_;
    };
    function paredes(a) { for (let p = 0; p < viz.length;) { const k = viz[p], n = viz[p + 1]; let s = 0; for (let m = 0; m < n; m++) s += a[viz[p + 2 + m]]; a[k] = s / n; p += 2 + n; } }
    function calor(dt) {
      // balanço de energia: calor gerado = vazão que atravessa o feixe × (quente − frio), com quente − frio = 1
      // (embaixo: vazão = massa que entra pelas entradas fora do plano)
      if (baixo) { if (nInf) { ganho = Math.max(0, influxo / nInf); influxo = 0; nInf = 0; } }
      else { let vaz = 0; for (const k of entrada) if (uy[k] > 0) vaz += uy[k]; ganho = vaz; }
      paredes(T);
      const cf = Math.exp(-K.kc * dt);
      for (let y = 1; y < NY - 1; y++) for (let x = 1, i = y * NX + 1; x < NX - 1; x++, i++) {
        if (bar[i]) { T2[i] = T[i]; continue; }
        if (pres[i] === 1) { T2[i] = K.tFonte; continue; }
        // coordenada j cresce para baixo; uy > 0 é para cima
        const xm = x - ux[i] * dt * 0.5, ym = y + uy[i] * dt * 0.5;
        let t = bil(T, x - bil(ux, xm, ym) * dt, y + bil(uy, xm, ym) * dt) + ganho * q[i] * dt;
        if (frio[i]) t *= cf;
        T2[i] = t < 0 ? 0 : t > 3 ? 3 : t;
      }
      // difusão leve, só entre células de ar
      for (let y = 1; y < NY - 1; y++) for (let x = 1, i = y * NX + 1; x < NX - 1; x++, i++) {
        if (bar[i]) { T[i] = T2[i]; continue; }
        let s = 0, n = 0;
        if (!bar[i + 1]) { s += T2[i + 1]; n++; } if (!bar[i - 1]) { s += T2[i - 1]; n++; }
        if (!bar[i + NX]) { s += T2[i + NX]; n++; } if (!bar[i - NX]) { s += T2[i - NX]; n++; }
        T[i] = n ? T2[i] * 0.84 + 0.16 * s / n : T2[i];
      }
      paredes(T);
    }
    function tSaida() { let a = 0, n = 0; for (let k = 0; k < N; k++) if (pres[k] === 2) { a += T[k]; n++; } return n ? a / n : 0; }
    function tEntrada() { let a = 0, b = 0; for (const k of entrada) { const v = uy[k] > 0 ? uy[k] : 0; a += T[k] * v; b += v; } return b ? a / b : 0; }
    function velRef() {   // velocidade típica (percentil 92) no ar livre, para escalar setas e traços
      const h = new Uint32Array(200); let n = 0;
      for (let k = 0; k < N; k++) if (!bar[k] && !poroso[k]) { const s = Math.hypot(ux[k], uy[k]); h[Math.min(199, s / 0.001 | 0)]++; n++; }
      let c = 0, m = 0; for (; m < 200; m++) { c += h[m]; if (c >= 0.92 * n) break; }
      sref = sref * 0.7 + 0.3 * Math.max(0.01, (m + 0.5) * 0.001);
    }
    // aquecimento: o escoamento se forma; depois a temperatura converge com passos grandes
    function aquecer() {
      if (fase === 0) { collide(); stream(); if (++passos % 4 === 0) calor(4); if (passos >= K.S1) { fase = 1; passos = 0; } }
      else if (fase === 1) { calor(K.dtT); if (++passos >= K.S2) { fase = 2; sref = 0.05; for (let k = 0; k < 6; k++) velRef(); } }
    }
    function passo(n) { for (let k = 0; k < n; k++) { collide(); stream(); } calor(n); velRef(); }
    return {
      H, NX, NY, N, X0, Y0, YC, K, tEntrada, tSaida, bar, borda, poroso, pres, geometria, iniciar, aquecer, passo,
      pronto: () => fase === 2,
      campo: () => ({ ux: ux.slice(), uy: uy.slice(), T: T.slice(), sref })
    };
  }

  // as duas metades juntas: cima (com o trocador) e baixo (carcaça fechada)
  function dupla(nucleo, H) {
    const a = nucleo(H, false), b = nucleo(H, true), e = nucleo(2, 'bb');
    return {
      iniciar(f) { a.iniciar(f); b.iniciar(f); e.iniciar(f); },
      aquecer() { if (!a.pronto()) a.aquecer(); if (!b.pronto()) b.aquecer(); if (!e.pronto()) e.aquecer(); },
      pronto: () => a.pronto() && b.pronto() && e.pronto(),
      passo(n) { a.passo(n); b.passo(n); e.passo(n); },
      campo() { const c = a.campo(), d = b.campo(), f = e.campo(); return { ux: c.ux, uy: c.uy, T: c.T, ux2: d.ux, uy2: d.uy, T2: d.T, ux3: f.ux, uy3: f.uy, T3: f.T, sref: c.sref, sref3: f.sref }; }
    };
  }

  /* ================================================================ worker */
  function trabalhador(dupla, nucleo, H) {
    let sim = null, gen = 0;
    const enviar = (g, extra) => { const c = sim.campo(); self.postMessage(Object.assign({ g }, c, extra), [c.ux.buffer, c.uy.buffer, c.T.buffer, c.ux2.buffer, c.uy2.buffer, c.T2.buffer, c.ux3.buffer, c.uy3.buffer, c.T3.buffer]); };
    self.onmessage = e => {
      // só aceita mensagens da própria página que criou o worker, no formato esperado
      if (e.origin && e.origin !== self.location.origin) return;
      const m = e.data;
      if (!m || typeof m !== 'object' || typeof m.g !== 'number') return;
      if (m.tipo === 'iniciar') {
        gen = m.g; sim = dupla(nucleo, H); sim.iniciar(m.fans === 1 ? 1 : 2);
        const g = gen, fatia = () => {
          if (g !== gen) return;
          const t = performance.now(); while (!sim.pronto() && performance.now() - t < 50) sim.aquecer();
          if (sim.pronto()) enviar(g, { ms: 0 }); else setTimeout(fatia, 0);
        };
        fatia();
      } else if (m.tipo === 'passo' && sim && m.g === gen && sim.pronto()) {
        const t = performance.now(); sim.passo(Math.max(1, Math.min(8, m.n | 0))); enviar(gen, { ms: performance.now() - t });
      }
    };
  }
  // motor: worker se possível; senão, a mesma simulação no thread principal
  function motor(aoCampo) {
    let w = null, local = null, gen = 0, fansW = 2;
    const emLocal = fans => {
      local = dupla(nucleo, H); local.iniciar(fans);
      const g = gen, fatia = () => {
        if (g !== gen) return;
        const t = performance.now(); while (!local.pronto() && performance.now() - t < 10) local.aquecer();
        if (local.pronto()) aoCampo(Object.assign({ g, ms: 0 }, local.campo())); else setTimeout(fatia, 0);
      };
      setTimeout(fatia, 0);
    };
    try {
      const url = URL.createObjectURL(new Blob([`(${trabalhador})(${dupla}, ${nucleo}, ${H});`], { type: 'text/javascript' }));
      w = new Worker(url);
      w.onmessage = e => { if (e.target === w && e.data && e.data.g === gen) aoCampo(e.data); };
      w.onerror = () => { w = null; gen++; emLocal(fansW); };
    } catch (_) { w = null; }
    return {
      iniciar(fans) { gen++; fansW = fans; if (w) w.postMessage({ tipo: 'iniciar', fans, g: gen }); else emLocal(fans); },
      pedir(n) {
        if (w) { w.postMessage({ tipo: 'passo', n, g: gen }); return; }
        if (!local || !local.pronto()) return;
        const t = performance.now(); local.passo(n);
        const g = gen, ms = performance.now() - t; setTimeout(() => aoCampo(Object.assign({ g, ms }, local.campo())), 0);
      }
    };
  }

  /* ================================================================ desenho na tela */
  // escala dos resultados de CFD (arco-íris), em faixas com isolinhas entre elas
  // paletas de cores (nomes em inglês, como nas ferramentas de CFD); uma escolha para cada campo
  const PALETAS = {
    rainbow: { nome: 'Rainbow', s: [[0,[24,60,220]],[0.25,[20,200,235]],[0.5,[40,210,90]],[0.75,[250,220,40]],[1,[228,40,32]]] },
    turbo: { nome: 'Turbo', s: [[0.0,[48,18,59]],[0.125,[70,107,227]],[0.25,[40,188,235]],[0.375,[50,242,152]],[0.5,[164,252,60]],[0.625,[238,207,58]],[0.75,[251,126,33]],[0.875,[208,47,5]],[1.0,[122,4,3]]] },
    blueyellowred: { nome: 'Blue–Yellow–Red', s: [[0.0,[49,54,149]],[0.125,[81,131,187]],[0.25,[144,195,221]],[0.375,[212,237,244]],[0.5,[255,254,190]],[0.625,[254,210,131]],[0.75,[248,140,81]],[0.875,[221,61,45]],[1.0,[165,0,38]]] },
    coolwarm: { nome: 'Coolwarm', s: [[0.0,[59,76,192]],[0.125,[98,130,234]],[0.25,[141,176,254]],[0.375,[185,208,249]],[0.5,[221,220,220]],[0.625,[245,196,172]],[0.75,[244,152,122]],[0.875,[221,95,75]],[1.0,[180,4,38]]] },
    spectral: { nome: 'Spectral', s: [[0.0,[94,79,162]],[0.125,[63,151,183]],[0.25,[137,208,164]],[0.375,[216,239,155]],[0.5,[255,254,190]],[0.625,[254,210,127]],[0.75,[248,140,81]],[0.875,[220,72,76]],[1.0,[158,1,66]]] },
    viridis: { nome: 'Viridis', s: [[0.0,[68,1,84]],[0.125,[71,45,123]],[0.25,[59,82,139]],[0.375,[44,114,142]],[0.5,[33,145,140]],[0.625,[40,174,128]],[0.75,[94,201,98]],[0.875,[173,220,48]],[1.0,[253,231,37]]] },
    inferno: { nome: 'Inferno', s: [[0.0,[0,0,4]],[0.125,[33,12,74]],[0.25,[87,16,110]],[0.375,[138,34,106]],[0.5,[188,55,84]],[0.625,[228,90,49]],[0.75,[249,142,9]],[0.875,[249,203,53]],[1.0,[252,255,164]]] },
    cividis: { nome: 'Cividis', s: [[0.0,[0,34,78]],[0.125,[26,56,111]],[0.25,[67,78,108]],[0.375,[97,101,111]],[0.5,[125,124,120]],[0.625,[155,148,118]],[0.75,[188,174,108]],[0.875,[222,201,88]],[1.0,[254,232,56]]] }
  };
  const PAL_PADRAO = { T: 'turbo', V: 'viridis' };
  let pal = { ...PAL_PADRAO };
  try { const g = JSON.parse(localStorage.getItem('engenhalab.termica.paletas') || '{}'); for (const m of ['T', 'V']) if (PALETAS[g[m]]) pal[m] = g[m]; } catch (_) { /* sem armazenamento */ }
  let STOPS = PALETAS[pal.T].s;
  const NB = 20, FI = 2;   // faixas do contorno e ampliação da imagem do campo
  let modo = 'T', contaImg = 0, pausado = false;
  try { pausado = localStorage.getItem('engenhalab.termica.pausa') === '1'; } catch (_) { /* sem armazenamento */ }
  // simulação ligada (escoamento por cima do desenho) ou desligada (só o desenho, para ver as peças)
  let ligado = true;
  try { ligado = localStorage.getItem('engenhalab.termica.simulacao') !== '0'; } catch (_) { /* sem armazenamento */ }
  const mostrar = () => { for (const el of [alvo, extra && extra.caixa]) if (el) el.classList.toggle('hx-cfd-on', ligado && temCampo); };
  const corT = h => { h = Math.max(0, Math.min(1, h)); let i = 0; while (i < STOPS.length - 2 && h > STOPS[i + 1][0]) i++; const [h0, c0] = STOPS[i], [h1, c1] = STOPS[i + 1], t = (h - h0) / (h1 - h0); return c0.map((c, k) => c + (c1[k] - c) * t); };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const temaClaro = () => { const t = document.documentElement.dataset.theme; return t ? t === 'light' : matchMedia('(prefers-color-scheme: light)').matches; };
  const HL = 18;
  // camada = uma metade: geometria, imagem da temperatura, partículas e malha de setas
  const camadas = [
    { G: nucleo(H, false), baixo: false, np: 330 },
    { G: nucleo(H, true), baixo: true, np: 170 },
    { G: nucleo(2, 'bb'), baixo: false, bb: true, np: 280 }
  ];
  for (const L of camadas) Object.assign(L, { P: [], livres: [], entradas: [], setas: [], ux: null, uy: null, T: null, off: null, octx: null, img: null });
  let eng = null, fansAtual = 0, temCampo = false, novo = false, esperando = false, nPassos = 4, sref = 0.05;
  let cv = null, ctx = null, svg = null, alvo = null, raf = 0, vis = false, io = null, ro = null;
  let W = 0, Hh = 0, dpr = 1, M = null, lut = null, lutTema = null, ultimo = 0;
  // telas: a da página e, quando aberta, a do desenho ampliado (só uma é pintada por vez)
  const principal = { cv: null, ctx: null, svg: null, zoom: false, W: 0, Hh: 0, dpr: 1, M: null };
  let extra = null;

  function prepararGeometria(fans) {
    for (const L of camadas) {
      const G = L.G, NX = G.NX; G.geometria(fans);
      L.livres.length = 0; L.entradas.length = 0; L.setas.length = 0;
      for (let k = 0; k < G.N; k++) { if (!G.bar[k] && !G.poroso[k] && !G.pres[k]) L.livres.push(k); if (G.pres[k] === 1) L.entradas.push(k); }
      // malha de setas a cada ~15 unidades, em linhas alternadas, só no ar visível
      const y0 = L.baixo ? 205 : G.Y0 + 9, xi = G.X0 + 7, xf = G.X0 + G.NX * G.H - 6, Hg = G.H;
      for (let y = y0, lin = 0; y < G.YC - 6; y += 13, lin++) for (let x = xi + (lin % 2) * 7.5; x < xf; x += 15) {
        const i = Math.floor((x - G.X0) / Hg), j = Math.floor((y - G.Y0) / Hg), k = j * NX + i;
        if (j >= 0 && j < G.NY && !G.bar[k] && (!G.poroso[k] || G.bb) && !G.pres[k]) L.setas.push((x - G.X0) / Hg, (y - G.Y0) / Hg);
      }
      while (L.P.length < L.np) L.P.push({ hx: new Float32Array(HL), hy: new Float32Array(HL), s: 0 });
      for (const p of L.P) nascer(L, p, true);
    }
  }
  const livre = (G, x, y) => { const i = x | 0, j = y | 0; if (i < 1 || j < 1 || i >= G.NX - 1 || j >= G.NY - 1) return false; const k = j * G.NX + i; return !G.bar[k] && G.pres[k] !== 2; };
  // embaixo, parte das partículas nasce onde o ar frio entra no plano
  function nascer(L, p, qualquer) {
    const G = L.G, daEntrada = !qualquer && L.entradas.length && Math.random() < 0.35;
    const lista = daEntrada ? L.entradas : L.livres, k = lista[(Math.random() * lista.length) | 0];
    p.x = k % G.NX + Math.random(); p.y = (k / G.NX | 0) + Math.random(); p.hx.fill(p.x); p.hy.fill(p.y); p.h = 0; p.n = 0; p.s = 0; p.vida = 60 + Math.random() * 140;
  }
  // campo nas coordenadas de célula (centro da célula em +0.5)
  const amostra = (G, a, x, y) => {
    const NX = G.NX;
    x = Math.max(0, Math.min(NX - 1.001, x - 0.5)); y = Math.max(0, Math.min(G.NY - 1.001, y - 0.5));
    const i0 = x | 0, j0 = y | 0, fx = x - i0, fy = y - j0, i = j0 * NX + i0;
    return (a[i] * (1 - fx) + a[i + 1] * fx) * (1 - fy) + (a[i + NX] * (1 - fx) + a[i + NX + 1] * fx) * fy;
  };
  function cor(nome, padrao) {
    const s = document.createElement('span'); s.style.color = `var(${nome})`; s.style.display = 'none'; (alvo || document.body).append(s);
    const m = getComputedStyle(s).color.match(/\d+(\.\d+)?/g); s.remove();
    return m ? m.slice(0, 3).map(Number) : padrao;
  }
  function prepararCores() {
    const claro = temaClaro(), chave = claro ? 'l' : 'd';
    if (lut && lutTema === chave) return;
    const bg = cor('--surface-2', claro ? [244, 246, 248] : [22, 30, 40]), a = claro ? 0.9 : 0.92;
    // cor de cada faixa e a mesma cor escurecida para a isolinha
    lut = new Uint8Array(NB * 6);
    for (let n = 0; n < NB; n++) { const c = corT((n + 0.5) / NB); for (let m = 0; m < 3; m++) { const v = bg[m] + (c[m] - bg[m]) * a; lut[n * 6 + m] = Math.round(v); lut[n * 6 + 3 + m] = Math.round(v * 0.62); } }
    lutTema = chave;
  }
  function medir(t = principal) {
    const c = t.cv, s = t.svg; if (!c || !s || !s.isConnected) return;
    const dp = Math.min(2, devicePixelRatio || 1);
    let box, m;
    if (t.zoom) {
      // ampliado: a tela cobre a área toda; o desenho anda e escala por cima dela
      box = t.caixa.getBoundingClientRect();
      const r = s.getBoundingClientRect(), vb = s.viewBox.baseVal;
      if (!vb || !vb.width) return;
      m = { a: r.width / vb.width, d: r.height / vb.height, e: r.left - vb.x * r.width / vb.width, f: r.top - vb.y * r.height / vb.height };
    } else {
      box = s.getBoundingClientRect();
      c.style.left = s.offsetLeft + 'px'; c.style.top = s.offsetTop + 'px';
      m = s.getScreenCTM(); if (!m) return;
    }
    c.style.width = box.width + 'px'; c.style.height = box.height + 'px';
    t.dpr = dp; t.W = Math.max(1, Math.round(box.width * dp)); t.Hh = Math.max(1, Math.round(box.height * dp));
    if (c.width !== t.W || c.height !== t.Hh) { c.width = t.W; c.height = t.Hh; }
    t.M = { a: m.a * dp, d: m.d * dp, e: (m.e - box.left) * dp, f: (m.f - box.top) * dp };
  }
  // coordenadas do desenho → tela (a metade de baixo é calculada "de cabeça para cima" e virada no eixo)
  const tx = x => M.a * x + M.e, ty = y => M.d * y + M.f;
  // contorno em faixas: o campo (temperatura ou |u|) interpolado numa grade FI vezes mais fina, cada pixel
  // na sua faixa, e a fronteira entre faixas escurecida (isolinha), como nos contornos de resultados de CFD
  function imagem(L) {
    const G = L.G, NX = G.NX, NY = G.NY, W2 = NX * FI, H2 = NY * FI, px = L.img.data;
    let S = L.T, esc = 1;
    if (modo === 'V') {
      if (!L.vel || L.vel.length !== G.N) L.vel = new Float32Array(G.N);
      for (let k = 0; k < G.N; k++) L.vel[k] = G.bar[k] ? 0 : Math.hypot(L.ux[k], L.uy[k]);
      S = L.vel; esc = 1 / ((L.sref || sref) * 1.9);
    }
    if (!L.fx || L.fx.length !== W2 * H2) L.fx = new Int8Array(W2 * H2);
    const fx = L.fx;
    for (let j = 0; j < H2; j++) {
      const gy = (j + 0.5) / FI - 0.5, j0 = Math.max(0, Math.min(NY - 2, Math.floor(gy))), ty_ = Math.max(0, Math.min(1, gy - j0)), jc = Math.min(NY - 1, (j + 0.5) / FI | 0);
      for (let i = 0; i < W2; i++) {
        const gx = (i + 0.5) / FI - 0.5, i0 = Math.max(0, Math.min(NX - 2, Math.floor(gx))), tx_ = Math.max(0, Math.min(1, gx - i0)), kc = jc * NX + Math.min(NX - 1, (i + 0.5) / FI | 0);
        if (G.bar[kc] && !G.borda[kc]) { fx[j * W2 + i] = -1; continue; }
        const k = j0 * NX + i0, v = ((S[k] * (1 - tx_) + S[k + 1] * tx_) * (1 - ty_) + (S[k + NX] * (1 - tx_) + S[k + NX + 1] * tx_) * ty_) * esc;
        fx[j * W2 + i] = Math.max(0, Math.min(NB - 1, v * NB | 0));
      }
    }
    for (let p = 0, o = 0; p < W2 * H2; p++, o += 4) {
      const b = fx[p]; if (b < 0) { px[o + 3] = 0; continue; }
      const i = p % W2, dir = i < W2 - 1 ? fx[p + 1] : b, bai = p + W2 < W2 * H2 ? fx[p + W2] : b;
      const n = b * 6 + ((dir >= 0 && dir !== b) || (bai >= 0 && bai !== b) ? 3 : 0);
      px[o] = lut[n]; px[o + 1] = lut[n + 1]; px[o + 2] = lut[n + 2]; px[o + 3] = 255;
    }
    L.octx.putImageData(L.img, 0, 0);
  }
  const grupos = [[], [], [], []];
  function camada(L, dtq, claro, tinta) {
    const G = L.G, X0 = G.X0, Y0 = G.Y0, ux = L.ux, uy = L.uy;
    const Hg = G.H, sx = gx => tx(X0 + gx * Hg), sy = gy => ty(Y0 + gy * Hg), sr = L.sref || sref;
    ctx.save();
    if (L.baixo) {
      // espelho no eixo, recortado ao interior da carcaça
      const yE = ty(G.YC); ctx.translate(0, 2 * yE); ctx.scale(1, -1);
      ctx.beginPath(); ctx.rect(tx(120), ty(199), tx(680) - tx(120), yE - ty(199)); ctx.clip();
    }
    ctx.drawImage(L.off, sx(0), sy(0), sx(G.NX) - sx(0), sy(G.NY) - sy(0));
    // setas: comprimento e opacidade pela velocidade local
    const cab = 2.1 * M.a;
    for (const g of grupos) g.length = 0;
    for (let s = 0; s < L.setas.length; s += 2) {
      const gx = L.setas[s], gy = L.setas[s + 1], u = amostra(G, ux, gx, gy), v = -amostra(G, uy, gx, gy), sp = Math.hypot(u, v), f = sp / sr;
      if (f < 0.07) continue;
      const Lr = (2.2 + 9.5 * Math.pow(Math.min(f, 1.5), 0.8)) * M.a, cx = sx(gx), cy = sy(gy), ex = u / sp, ey = v / sp;
      grupos[f < 0.3 ? 0 : f < 0.6 ? 1 : f < 1 ? 2 : 3].push(cx - ex * Lr / 2, cy - ey * Lr / 2, cx + ex * Lr / 2, cy + ey * Lr / 2, ex, ey);
    }
    grupos.forEach((g, n) => {
      if (!g.length) return;
      ctx.strokeStyle = `rgba(${tinta},${[0.3, 0.48, 0.66, 0.85][n] * (claro ? 0.85 : 1)})`; ctx.lineWidth = (0.8 + 0.3 * n) * dpr; ctx.beginPath();
      for (let p = 0; p < g.length; p += 6) {
        const ax = g[p], ay = g[p + 1], bx = g[p + 2], by = g[p + 3], ex = g[p + 4], ey = g[p + 5];
        ctx.moveTo(ax, ay); ctx.lineTo(bx, by);
        ctx.moveTo(bx - ex * cab - ey * cab * 0.6, by - ey * cab + ex * cab * 0.6); ctx.lineTo(bx, by); ctx.lineTo(bx - ex * cab + ey * cab * 0.6, by - ey * cab - ex * cab * 0.6);
      }
      ctx.stroke();
    });
    // partículas: andam com o ar; o rastro fica longo e forte onde o ar é rápido
    const kv = 1.7 / sr * (Hg === H ? 1 : H / Hg) * dtq;
    if (dtq > 0) for (const p of L.P) {
      const u = amostra(G, ux, p.x, p.y), v = -amostra(G, uy, p.x, p.y);
      p.x += u * kv; p.y += v * kv; p.s = Math.hypot(u, v) / sr;
      if (--p.vida < 0 || !livre(G, p.x, p.y)) { nascer(L, p); continue; }
      p.h = (p.h + 1) % HL; p.hx[p.h] = p.x; p.hy[p.h] = p.y; if (p.n < HL - 1) p.n++;
    }
    for (let b = 0; b < 4; b++) for (let velho = 1; velho >= 0; velho--) {
      const al = [0.1, 0.24, 0.42, 0.62][b] * (velho ? 0.4 : 1) * (claro ? 0.85 : 1);
      ctx.strokeStyle = `rgba(${tinta},${al})`; ctx.lineWidth = (0.7 + 0.3 * b) * dpr; ctx.beginPath();
      for (const p of L.P) {
        const f = p.s, bb = f < 0.25 ? 0 : f < 0.55 ? 1 : f < 0.95 ? 2 : 3; if (bb !== b || p.n < 1) continue;
        const meio = p.n >> 1, a0 = velho ? 0 : meio, a1 = velho ? meio : p.n;
        for (let a = a0; a < a1; a++) {
          const i0 = (p.h - p.n + a + HL) % HL, i1 = (i0 + 1) % HL;
          ctx.moveTo(sx(p.hx[i0]), sy(p.hy[i0])); ctx.lineTo(sx(p.hx[i1]), sy(p.hy[i1]));
        }
      }
      ctx.stroke();
    }
    ctx.restore();
  }
  function pintar(dtq) {
    const t = extra || principal;
    if (extra) medir(extra);
    if (!t.M || !temCampo) return;
    ctx = t.ctx; M = t.M; dpr = t.dpr; W = t.W; Hh = t.Hh;
    prepararCores();
    if (novo || lutTema !== (temaClaro() ? 'l' : 'd')) { for (const L of camadas) imagem(L); novo = false; }
    const claro = temaClaro(), tinta = '8,12,20';
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, W, Hh);
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high'; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    for (const L of camadas) camada(L, dtq, claro, tinta);
  }

  function aoCampo(c) {
    const [A, B, E] = camadas;
    A.ux = c.ux; A.uy = c.uy; A.T = c.T; B.ux = c.ux2; B.uy = c.uy2; B.T = c.T2; E.ux = c.ux3; E.uy = c.uy3; E.T = c.T3;
    sref = c.sref || sref; A.sref = B.sref = sref; E.sref = c.sref3 || E.sref || sref;
    // o campo muda devagar: a imagem do contorno é refeita a cada 8 quadros do cálculo
    if (contaImg++ % 8 === 0) novo = true;
    temCampo = true; esperando = false;
    if (c.ms > 0) { if (c.ms > 14 && nPassos > 2) nPassos--; else if (c.ms < 7 && nPassos < 8) nPassos++; }
    if (alvo && ligado && !alvo.classList.contains('hx-cfd-on')) { alvo.classList.add('hx-cfd-on'); seguir(); }
    else if (!raf) pintar(0);
  }
  function quadro(t) {
    raf = requestAnimationFrame(quadro);
    if (!esperando && temCampo) { esperando = true; eng.pedir(nPassos); }
    const dtq = ultimo ? Math.min(2.5, (t - ultimo) / 16.7) : 1; ultimo = t;
    pintar(dtq);
  }
  function seguir() {
    cancelAnimationFrame(raf); raf = 0; ultimo = 0;
    if (!cv || !temCampo) return;
    mostrar();
    if (!ligado) return;
    medir();
    for (const el of [alvo, extra && extra.caixa]) if (el) el.classList.toggle('hx-pausado', pausado);
    if ((vis || extra) && !pausado && !reduce.matches && !document.hidden) { esperando = false; raf = requestAnimationFrame(quadro); } else pintar(0);
  }
  // barra acima do desenho: campo mostrado, pausa e a escala de cores com o título e os valores
  let Tc = null, Th = null;
  const barras = new Set();
  const num = v => Number.isFinite(v) ? v.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : '—';
  function criarBarra(zoom) {
    const b = document.createElement('div');
    b.className = 'hx-cfd-barra' + (zoom ? ' hx-cfd-barra-z' : '');
    const opcoes = Object.entries(PALETAS).map(([k, v]) => `<option value="${k}">${v.nome}</option>`).join('');
    b.innerHTML = `<div class="hx-cfd-ctl"><button type="button" class="hx-sim" data-acao="sim"><span class="hx-sim-i" aria-hidden="true"></span><span class="hx-sim-t">Simulação</span></button><span class="hx-cfd-rot">Campo</span><div class="hx-seg" role="group" aria-label="Campo mostrado no escoamento">`
      + `<button type="button" data-modo="T">Temperatura</button><button type="button" data-modo="V">Velocidade</button></div>`
      + `<button type="button" class="hx-play" data-acao="pausa"><span class="hx-play-i" aria-hidden="true"></span><span class="hx-play-t"></span></button>`
      + `<label class="hx-pal"><span class="hx-cfd-rot">Colors</span><select aria-label="Paleta de cores do campo">${opcoes}</select></label></div>`
      + `<div class="hx-cfd-esc"><span class="hx-esc-tit"></span><div class="hx-esc-faixas" aria-hidden="true"></div><div class="hx-esc-ticks"></div></div>`;
    b.querySelector('select').addEventListener('change', e => definirPaleta(e.target.value));
    escutarModo(b); barras.add(b); atualizarBarras();
    return b;
  }
  function atualizarBarras() {
    const ticks = modo === 'V' ? ['0', '0,25', '0,5', '0,75', '1'] : [0, 0.25, 0.5, 0.75, 1].map(f => Tc == null ? '—' : num(Tc + (Th - Tc) * f));
    const tit = modo === 'V' ? 'Velocidade do ar · relativa à máxima' : 'Temperatura do ar · °C';
    for (const b of barras) {
      const sm = b.querySelector('.hx-sim'); sm.setAttribute('aria-pressed', String(ligado)); sm.classList.toggle('is-off', !ligado);
      sm.setAttribute('aria-label', ligado ? 'Desligar a simulação do ar e ver só o desenho' : 'Ligar a simulação do ar sobre o desenho');
      sm.title = ligado ? 'Simulação ligada · clique para ver só o desenho' : 'Simulação desligada · clique para ligar';
      b.classList.toggle('hx-sim-off', !ligado);
      b.querySelectorAll('[data-modo]').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.modo === modo)));
      const p = b.querySelector('.hx-play'); p.classList.toggle('hx-parado', pausado); p.setAttribute('aria-pressed', String(pausado));
      p.querySelector('.hx-play-t').textContent = pausado ? 'Animar' : 'Pausar';
      p.setAttribute('aria-label', pausado ? 'Retomar o movimento do ar' : 'Pausar o movimento do ar');
      b.querySelector('.hx-esc-tit').textContent = tit;
      b.querySelector('select').value = pal[modo];
      let faixas = ''; for (let n = 0; n < NB; n++) faixas += `<i style="background:rgb(${corT((n + 0.5) / NB).map(Math.round).join(',')})"></i>`;
      b.querySelector('.hx-esc-faixas').innerHTML = faixas;
      b.querySelector('.hx-esc-ticks').innerHTML = ticks.map((t, k) => `<span style="left:${k * 25}%">${t}</span>`).join('');
    }
  }
  let barraZoom = null;
  // temperatura ou velocidade (data-modo) e pausa (data-acao): valem para a vista e para o ampliado
  function definirPaleta(id) {
    if (!PALETAS[id]) return;
    pal[modo] = id; STOPS = PALETAS[id].s; lut = null; novo = true;
    try { localStorage.setItem('engenhalab.termica.paletas', JSON.stringify(pal)); } catch (_) { /* sem armazenamento */ }
    atualizarBarras(); if (!raf) pintar(0);
  }
  function definirModo(m) {
    if (m !== 'T' && m !== 'V') return;
    modo = m; STOPS = PALETAS[pal[m]].s; lut = null; novo = true; atualizarBarras();
    for (const el of [alvo, extra && extra.caixa]) if (el) el.classList.toggle('hx-modo-v', m === 'V');
    if (!raf) pintar(0);
  }
  function escutarModo(el) {
    if (el.dataset.cfdModo) return; el.dataset.cfdModo = '1';
    const f = e => {
      const sm = e.target.closest && e.target.closest('[data-acao="sim"]');
      if (sm) { e.stopPropagation(); ligado = !ligado; try { localStorage.setItem('engenhalab.termica.simulacao', ligado ? '1' : '0'); } catch (_) { /* sem armazenamento */ } atualizarBarras(); mostrar(); if (ligado) seguir(); else { cancelAnimationFrame(raf); raf = 0; } return; }
      const p = e.target.closest && e.target.closest('[data-acao="pausa"]');
      if (p) { e.stopPropagation(); pausado = !pausado; try { localStorage.setItem('engenhalab.termica.pausa', pausado ? '1' : '0'); } catch (_) { /* sem armazenamento */ } atualizarBarras(); seguir(); return; }
      const b = e.target.closest && e.target.closest('[data-modo]'); if (!b) return; e.stopPropagation(); definirModo(b.getAttribute('data-modo'));
    };
    el.addEventListener('click', f, true);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') f(e); }, true);
  }
  /** coloca a simulação sob o desenho da vista "Na máquina" */
  function anexar(sc, s, opt = {}) {
    if (!sc || !s || typeof Float32Array === 'undefined') return;
    const fans = opt.fans >= 2 ? 2 : 1;
    if (!cv) {
      cv = document.createElement('canvas'); cv.className = 'hx-cfd'; cv.setAttribute('aria-hidden', 'true'); ctx = cv.getContext('2d');
      principal.cv = cv; principal.ctx = ctx;
      for (const L of camadas) { L.off = document.createElement('canvas'); L.off.width = L.G.NX * FI; L.off.height = L.G.NY * FI; L.octx = L.off.getContext('2d'); L.img = L.octx.createImageData(L.G.NX * FI, L.G.NY * FI); }
      io = 'IntersectionObserver' in window ? new IntersectionObserver(es => { vis = es[0].isIntersecting; seguir(); }) : null;
      document.addEventListener('visibilitychange', seguir);
      reduce.addEventListener?.('change', seguir);
      new MutationObserver(() => { if (!raf) pintar(0); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
      addEventListener('resize', () => { medir(); if (!raf) pintar(0); }, { passive: true });
    }
    if (!eng) eng = motor(aoCampo);
    if (fans !== fansAtual) { fansAtual = fans; temCampo = false; esperando = false; prepararGeometria(fans); eng.iniciar(fans); }
    alvo = sc; svg = s; principal.svg = s;
    if (Number.isFinite(opt.Tc) && Number.isFinite(opt.Th)) { Tc = opt.Tc; Th = opt.Th; }
    for (const b of barras) if (!b.isConnected && b !== barraZoom) barras.delete(b);
    if (sc.parentNode && !(sc.previousElementSibling && sc.previousElementSibling.classList.contains('hx-cfd-barra'))) sc.parentNode.insertBefore(criarBarra(false), sc);
    // etapas do circuito do ar (os números 1 a 6 do desenho)
    if (sc.parentNode && !(sc.nextElementSibling && sc.nextElementSibling.classList.contains('hx-etapas'))) {
      const ol = document.createElement('ol'); ol.className = 'hx-etapas'; ol.setAttribute('aria-label', 'Circuito do ar');
      ol.innerHTML = ['ar frio sai do trocador', 'desce até o ventilador', 'ventilador → cabeças, entreferro e rotor', 'dutos radiais: aquece no ferro e no cobre', 'sobe quente ao trocador', 'feixe: a água leva o calor'].map(t => `<li>${t}</li>`).join('');
      sc.after(ol);
    }
    atualizarBarras();
    escutarModo(sc); sc.classList.toggle('hx-modo-v', modo === 'V');
    alvo.prepend(cv);
    if (temCampo && ligado) alvo.classList.add('hx-cfd-on');
    if ('ResizeObserver' in window) { ro && ro.disconnect(); ro = new ResizeObserver(() => { medir(); if (!raf) pintar(0); }); ro.observe(s); }
    if (io) { io.disconnect(); io.observe(alvo); } else vis = true;
    requestAnimationFrame(() => { medir(); seguir(); });
  }
  /** desenho ampliado: o mesmo escoamento numa tela sob o desenho clonado; devolve a função que solta */
  function ampliar(area, s) {
    if (!cv || !area || !s) return () => {};
    const c = document.createElement('canvas'); c.className = 'hx-cfd hz-cfd'; c.setAttribute('aria-hidden', 'true');
    area.prepend(c); area.classList.toggle('hx-cfd-on', ligado);
    escutarModo(area); area.classList.toggle('hx-modo-v', modo === 'V');
    barraZoom = criarBarra(true); (area.parentNode || area).appendChild(barraZoom);
    extra = { cv: c, ctx: c.getContext('2d'), svg: s, caixa: area, zoom: true, W: 0, Hh: 0, dpr: 1, M: null };
    // com movimento reduzido não há laço: redesenha ao arrastar ou ampliar
    const redesenhar = () => { if (!raf) requestAnimationFrame(() => pintar(0)); };
    for (const ev of ['pointermove', 'wheel', 'click']) area.addEventListener(ev, redesenhar, { passive: true });
    requestAnimationFrame(seguir);
    const bz = barraZoom;
    return () => { if (extra && extra.cv === c) { extra = null; c.remove(); bz.remove(); barras.delete(bz); if (barraZoom === bz) barraZoom = null; seguir(); } };
  }
  window.VGThermalCFD = { anexar, ampliar, _nucleo: nucleo, _dupla: dupla };
})();
