/* Laboratório offshore · "Só nesta aba"
   Por padrão as etapas 01 a 04 dividem o mesmo projeto no navegador (modelo, solo, lâmina, olhal…):
   trocar numa aba muda em todas. Com "Só nesta aba" ligado, esta aba passa a usar uma cópia própria do
   projeto: o que mudar e calcular aqui fica só aqui, e os dados que vinham do lançamento (solo, olhal, tração,
   lâmina) passam a ser editados na própria aba. Carregado no <head>, antes de qualquer leitura. */
(function () {
  'use strict';
  var CHAVE = 'offshore-project-v8';
  var aba = (location.pathname.match(/\/(0[1-4])-[\w-]+\.html$/) || [])[1];
  if (!aba) return;
  var MARCA = 'offshore-aba-local:' + aba, COPIA = CHAVE + '@' + aba;
  var P = Storage.prototype, ler = P.getItem, gravar = P.setItem, tirar = P.removeItem;
  var ls = null;
  try { ls = window.localStorage; } catch (e) { return; }
  var ativo = false;
  try { ativo = ler.call(ls, MARCA) === '1'; } catch (e) { /* sem armazenamento */ }
  // a catenária tinha uma caixa própria ("Usar os dados do lançamento"); quem a desligou passa a ter a aba
  // separada, com os valores que estavam na página (solo, olhal, tração e lâmina)
  try {
    var velho = ler.call(ls, 'catenaria-vinculo');
    if (velho !== null) {
      if (aba === '02' && velho === 'off' && !ativo) {
        var proj = {}; try { proj = JSON.parse(ler.call(ls, CHAVE) || '{}') || {}; } catch (e) { proj = {}; }
        var caso = {}; try { caso = JSON.parse(ler.call(ls, 'catenaria-lab-case-v1') || '{}') || {}; } catch (e) { caso = {}; }
        var DE = { water: 'targetHeight', embed: 'depth', lineTension: 'tension0', su0: 'su0', suGradient: 'gradient' };
        for (var k in DE) { var v = Number(String(caso[DE[k]] == null ? '' : caso[DE[k]]).replace(',', '.')); if (caso[DE[k]] !== '' && caso[DE[k]] != null && isFinite(v)) proj[k] = v; }
        gravar.call(ls, COPIA, JSON.stringify(proj)); gravar.call(ls, MARCA, '1'); ativo = true;
      }
      tirar.call(ls, 'catenaria-vinculo');
    }
  } catch (e) { /* sem armazenamento */ }

  window.ProjetoLocal = {
    aba: aba,
    ativo: ativo,
    // separa a aba: começa de uma cópia do projeto comum
    ligar: function () {
      try {
        var comum = ler.call(ls, CHAVE);
        if (comum != null) gravar.call(ls, COPIA, comum); else tirar.call(ls, COPIA);
        gravar.call(ls, MARCA, '1');
      } catch (e) { return; }
      location.reload();
    },
    // volta ao projeto comum (a cópia desta aba é descartada)
    desligar: function () {
      try { tirar.call(ls, MARCA); tirar.call(ls, COPIA); } catch (e) { return; }
      location.reload();
    }
  };
  if (!ativo) return;
  var trocar = function (alvo, k) { return alvo === ls && k === CHAVE ? COPIA : k; };
  P.getItem = function (k) { return ler.call(this, trocar(this, k)); };
  P.setItem = function (k, v) { return gravar.call(this, trocar(this, k), v); };
  P.removeItem = function (k) { return tirar.call(this, trocar(this, k)); };
  document.documentElement.setAttribute('data-aba-local', '');
})();
