/* Laboratório offshore · T-24, T-35 e T-120 pelos modelos 3D atuais
   Massa, volume, comprimento, ponta, olhal, área frontal e perfil das aletas medidos no modelo.
   Carregado antes de core.js: troca esses três modelos na lista assim que ela existir. */
(function () {
  'use strict';
  var NOVOS = {"24":{"name":"T-24","mass":24047.1,"volume":4.3525,"diameter":0.762,"length":13.5503,"coneLength":1.5503,"eye":-1.275,"fins":4,"fallArea":0.4704,"deq":1.052,"finProfile":[[4.5503,0.095],[4.6003,0.145],[10.5003,0.145],[10.5503,0.095],[10.5503,0]]},"35":{"name":"T-35","mass":35077.8,"volume":4.2643,"diameter":0.762,"length":13.3503,"coneLength":1.3503,"eye":0.306,"fins":4,"fallArea":0.5678,"deq":2.262,"finProfile":[[3.6653,0.3],[11.6233,0.75],[12.9223,0]]},"120":{"name":"T-120","mass":119759.5,"volume":16.288,"diameter":1.219,"length":23.103,"coneLength":2.453,"eye":0.541,"fins":4,"fallArea":1.4933,"deq":3.659,"finProfile":[[7.703,0.405],[9.116,1.22],[22.083,1.22],[22.2422,1.2096],[22.3988,1.1784],[22.5499,1.1271],[22.693,1.0566],[22.8257,0.9679],[22.9457,0.8627],[23.0509,0.7427],[23.1396,0.61],[23.2101,0.4669],[23.2614,0.3158],[23.2926,0.1592],[23.303,0]]}};
  var EXTRA = {"24":{"massa_t":24.047,"cg_ponta":5.172,"cv_ponta":6.001,"comprimento_total":13.55,"tubo":12.0,"peso_submerso_kN":192.07,"lastro_pct":70.53,"area_molhada":38.074,"olhal_ponta":12.275,"pasta":"assets/modelos/T-24/"},"35":{"massa_t":35.078,"cg_ponta":5.543,"cv_ponta":5.829,"comprimento_total":13.826,"tubo":12.0,"peso_submerso_kN":301.13,"lastro_pct":58.27,"area_molhada":70.169,"olhal_ponta":13.656,"pasta":"assets/modelos/T-35/"},"120":{"massa_t":119.76,"cg_ponta":10.496,"cv_ponta":10.216,"comprimento_total":23.895,"tubo":20.65,"peso_submerso_kN":1010.72,"lastro_pct":45.44,"area_molhada":239.185,"olhal_ponta":23.644,"pasta":"assets/modelos/T-120/"}};
  var CD_120 = 1.5318;   // Cd·A da queda calibrado em campo, sobre a área frontal com as aletas
  function aplicar(L) {
    if (!L || !L.MODELS) return;
    Object.keys(NOVOS).forEach(function (k) {
      var m = L.MODELS[k] || {};
      delete m.tipAngle; delete m.lateralArea; delete m.lateralAreaExata;
      Object.assign(m, JSON.parse(JSON.stringify(NOVOS[k])), { geometry: 'modelo 3D' });
      if (k === '120') m.fallPar = Object.assign({ cdTop: 0, ca: 0.6 }, m.fallPar || {}, { cdBottom: CD_120 });
      L.MODELS[k] = m;
    });
    // T-98: fica como está (catálogo), mas entra na lista para a fileira de modelos ser a mesma em todas as etapas
    if (!L.MODELS[98]) L.MODELS[98] = { name: 'T-98', eye: 0, mass: 98000, volume: 11.1, diameter: 1.067, length: 17, coneLength: 2.1, fins: 4, finProfile: [[5.6, 0.15], [7, 0.9], [15.3, 0.9], [16.7, 0.15]], fallArea: 1.182, fallPar: { cdBottom: 1.87, cdTop: 0, ca: 0.6 }, geometry: 'arquivo local' };
  }
  window.EstacasNovas = { MODELOS: NOVOS, EXTRA: EXTRA, aplicar: aplicar };
  if (window.Lab) { aplicar(window.Lab); return; }
  Object.defineProperty(window, 'Lab', {
    configurable: true,
    get: function () { return undefined; },
    set: function (v) { Object.defineProperty(window, 'Lab', { value: v, writable: true, configurable: true, enumerable: true }); aplicar(v); }
  });
})();
