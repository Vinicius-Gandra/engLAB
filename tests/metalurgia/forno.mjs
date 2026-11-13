import assert from "node:assert/strict";
import { test } from "node:test";
import { Forno, MAT, REACOES, T_WUSTITA } from "../../metalurgia/assets/forno.js";

const perto = (a, b, tol = 1e-8) => assert.ok(Math.abs(a - b) <= tol, `${a} ≠ ${b}`);
const ate = (f, t) => { while (f.t < t - 1e-9 && f.passo()); };

test("a potência incidente se divide entre absorvida, transmitida e devolvida pela face de entrada", () => {
  for (const par of [{}, { retorno: 0 }, { retorno: 1 }, { acopla: false }, { umidade: 0 }]) {
    const f = new Forno(par);
    ate(f, 60);
    const P = f.P;
    perto(P.abs + P.trans + P.volta, P.inc, 1e-9);
    assert.ok(P.abs > 0 && P.abs <= P.inc);
  }
});

test("a energia e a massa fecham em combinações de modelos", () => {
  const nomes = ["conducao", "secagem", "reacao", "perdas", "acopla"];
  for (let m = 0; m < 32; m += 3) {
    const par = {};
    nomes.forEach((n, i) => (par[n] = !!(m & (1 << i))));
    const f = new Forno({ ...par, duracao: 120 });
    ate(f, 120);
    const r = f.resumo();
    perto(r.erroE / Math.max(1, r.E.abs), 0, 1e-12);
    perto(r.erroM, 0, 1e-12);
  }
});

test("a condução entre faces conserva calor e não cria extremos", () => {
  const f = new Forno({ micro: false, perdas: false, secagem: false, reacao: false });
  f.T[f.n >> 1] = 900;
  const soma = f.T.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 60; i++) f.passo();
  perto(f.T.reduce((a, b) => a + b, 0), soma, 1e-7);
  assert.ok(Math.max(...f.T) <= 900 && Math.min(...f.T) >= MAT.Tamb - 1e-9);
});

test("a água segura a célula em 100 °C até evaporar", () => {
  const f = new Forno({ reacao: false });
  for (let i = 0; i < 150; i++) {
    f.passo();
    for (let k = 0; k < f.n; k++) if (f.w[k] > 1e-12) assert.ok(f.T[k] <= MAT.Tev + 1e-7);
  }
  assert.ok(f.resumo().evap > 0);
});

test("as entalpias seguem a lei de Hess pelos dois caminhos", () => {
  const alto = REACOES.r1.dH + REACOES.r2.dH + REACOES.r3.dH;
  const baixo = REACOES.r1.dH + REACOES.r2b.dH;
  perto(alto, baixo, 1e-6);
  perto(alto * 2, 3 * -393.5e3 + 824.2e3 + 3 * 110.5e3, 1e-6); // Fe2O3 + 3CO → 2Fe + 3CO2
  perto(REACOES.r1.co + REACOES.r2.co + REACOES.r3.co, 1.5);
  perto(REACOES.r1.co + REACOES.r2b.co, 1.5);
});

test("abaixo de 570 °C não se forma wüstita; acima, sim", () => {
  for (const [T, comWus] of [[T_WUSTITA - 60, false], [T_WUSTITA + 160, true]]) {
    const f = new Forno({ micro: false, perdas: false, secagem: false, conducao: false, umidade: 0 });
    f.T.fill(T);
    for (let i = 0; i < 80; i++) f.passo();
    const r = f.resumo();
    for (let k = 0; k < f.n; k++) perto(f.h[k] + f.m[k] + f.wu[k] + f.f[k], f.nFe0, 1e-15);
    assert.equal(r.fr.w > 1e-6, comWus);
    assert.ok(r.fr.f > 0);
    perto(f.G.co2 - f.G.co, r.oxigenio, 1e-13);
  }
});

test("as cinco etapas, uma a uma, reproduzem o passo completo", () => {
  const a = new Forno(), b = new Forno();
  for (let i = 0; i < 150; i++) { a.passo(); b.passo(); }
  a.passo();
  for (let i = 0; i < 4; i++) { b.etapa(); assert.ok(b.rascunho); }
  b.etapa();
  assert.equal(b.rascunho, null);
  assert.deepEqual(a.T, b.T);
  assert.deepEqual(a.f, b.f);
  assert.deepEqual(a.w, b.w);
});

test("o passo explícito amortece um padrão xadrez abaixo de Fo = 1/4 e o amplifica acima", () => {
  for (const [Fo, cresce] of [[0.2, false], [0.3, true]]) {
    const f = new Forno({ Fo, micro: false, perdas: false, secagem: false, reacao: false });
    for (let k = 0; k < f.n; k++) f.T[k] = 500 + (((k % f.nx) + ((k / f.nx) | 0)) % 2 ? 1 : -1);
    for (let i = 0; i < 20; i++) f.passo();
    const amp = Math.max(...f.T) - Math.min(...f.T);
    assert.equal(amp > 2, cresce);
  }
});

test("a separação magnética nunca recupera mais do que a captura permite", () => {
  const f = new Forno();
  ate(f, 300);
  for (const captura of [0, 0.5, 1])
    for (const arraste of [0, 0.1]) {
      f.configurar({ captura, arraste });
      const r = f.resumo();
      assert.ok(r.rec <= captura + 1e-12);
      assert.ok(r.conc >= 0 && r.rejeito >= 0);
      perto(r.conc + r.rejeito, r.solido, 1e-12);
    }
});

test("as três experiências separam secagem, redução e separação no mesmo lote", () => {
  const roda = (par) => { const f = new Forno(par); ate(f, 300); return f.resumo(); };
  const seca = roda({ umidade: 0, reacao: false }), umida = roda({ reacao: false }), reduz = roda({});
  assert.equal(seca.evap, 0);
  assert.ok(umida.evap > 0.06);
  assert.ok(umida.Tm < seca.Tm);
  assert.equal(umida.fr.m, 0);
  assert.ok(reduz.rec > umida.rec + 0.2);
  assert.ok(reduz.fr.m + reduz.fr.f > 0.3);
});
