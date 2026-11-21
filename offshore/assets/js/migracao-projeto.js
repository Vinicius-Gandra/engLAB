/* Atualiza uma vez os coeficientes de cravação guardados no navegador para os padrões atuais de cada modelo. */
(function () {
  'use strict';
  var CHAVE = 'offshore-project-v8', MARCA = 'offshore-cravacao-rev', REV = '2';
  var PADRAO = { 24: { nc: 9, alphaT: 0.515, cdSoil: 2.4 }, 35: { nc: 9, alphaT: 0.515, cdSoil: 2.4 }, 66: { nc: 7, alphaT: 0.176, cdSoil: 2.4 }, 120: { nc: 12, alphaT: 0.3287, cdSoil: 0.23 } };
  try {
    if (localStorage.getItem(MARCA) === REV) return;
    var p = JSON.parse(localStorage.getItem(CHAVE) || 'null');
    if (p && typeof p === 'object') {
      var d = PADRAO[p.model] || PADRAO[120];
      for (var k in d) p[k] = d[k];
      localStorage.setItem(CHAVE, JSON.stringify(p));
    }
    localStorage.setItem(MARCA, REV);
  } catch (e) { /* sem armazenamento */ }
})();

/* Troca, uma vez, os valores de exemplo antigos guardados no navegador pelos atuais (só os que continuam iguais ao exemplo antigo). */
(function () {
  'use strict';
  var MARCA = 'offshore-exemplo-rev', REV = '3';
  var TROCAS = {
    'catenaria-lab-case-v1': { su0: [1.241, 2], gradient: [1.9938, 1.6], se: [2.95, 2], et: [11.3, 10], nc: [11.42, 9], diameter: [0.12, 0.105], wChain: [2.471, 1.87], depth: [17.1, 20], theta0Deg: [33, 30], muSeabed: [0.7, 0.8], target: [2000, 2400], targetLength: [2100, 2950], tension0: [4944.24, 4500], targetHeight: [1487, 1980], wPoly: [0.0057, 0.006], eaChain: [118247, 110000], eaPoly: [31594, 30000], chain1: [250, 300], poly1: [1075, 1400], chain2: [10, 15], poly2: [1075, 1500] },
    'offshore-project-v8': { lineTension: [15000, 12000], lnTheta0: [33, 30], lnDiameter: [0.12, 0.105], lnWeight: [2.471, 1.87], lnEt: [11.3, 10], lnNc: [11.42, 9], chainMass: [10, 12] },
    'capacidade-axial-caso-v1': { fluidDensity: [1036.9, 1025], compressionLoad: [2200, 2500], tensionLoad: [1400, 1600] }
  };
  try {
    if (localStorage.getItem(MARCA) === REV) return;
    for (var chave in TROCAS) {
      var c = JSON.parse(localStorage.getItem(chave) || 'null');
      if (!c || typeof c !== 'object') continue;
      var t = TROCAS[chave];
      for (var k in t) if (c[k] === t[k][0]) c[k] = t[k][1];
      if (chave === 'offshore-project-v8' && c.lineTension === 4944.24) c.lineTension = 4500;
      localStorage.setItem(chave, JSON.stringify(c));
    }
    localStorage.setItem(MARCA, REV);
  } catch (e) { /* sem armazenamento */ }
})();
