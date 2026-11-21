/* Casos salvos do lançamento: guarda o caso inteiro (modelo, lançamento, solo e parâmetros avançados).
   Um caso só muda quando a pessoa clica em Salvar alterações; testes no painel não alteram o que está salvo.
   Só aparecem para quem entrou com login; com projeto aberto, vão junto com o projeto para o servidor. */
(function () {
  'use strict';
  const CHAVE = 'offshore-casos-v1', MAX = 30;
  const raiz = document.getElementById('lx-casos'), form = document.getElementById('lx-form');
  if (!raiz || !form || !window.Lab) return;
  const L = window.Lab;
  const $ = s => raiz.querySelector(s);
  const trig = $('#lx-caso-trig'), lista = $('#lx-caso-lista'), nomeAtual = $('#lx-caso-nome-atual'), resumo = $('#lx-caso-resumo');
  const st = $('#lx-caso-st'), onde = $('#lx-caso-onde');
  const bSalvar = $('[data-a="salvar"]'), bDesc = $('[data-a="descartar"]'), bExc = $('[data-a="excluir"]');
  const caixaNome = $('#lx-caso-nome'), inNome = $('#lx-caso-nome input'), bOk = $('[data-a="ok"]'), bCancel = $('[data-a="cancelar"]');

  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const fmt = v => String(v).replace('.', ',');
  const ler = () => { try { const d = JSON.parse(localStorage.getItem(CHAVE)); if (d && Array.isArray(d.lista)) return d; } catch (_) {} return { atual: '', lista: [] }; };
  const gravar = d => { try { localStorage.setItem(CHAVE, JSON.stringify(d)); } catch (_) {} };
  const campos = () => [...form.querySelectorAll('input[name]:not([type=range])')].map(i => i.name);
  const modelo = () => Number((window.__lanc && window.__lanc.model) || (L.project && L.project.model)) || 120;
  const logado = () => !!(window.Sessao && window.Sessao.sessao && window.Sessao.sessao());
  const nomeModelo = m => (L.MODELS[m] && L.MODELS[m].name) || 'T-' + m;

  function atual() {
    const o = { model: modelo() };
    for (const k of campos()) { const v = L.num(form.elements.namedItem(k).value); o[k] = Number.isFinite(v) ? v : null; }
    return o;
  }
  const igual = (a, b) => {
    if (!a || !b || Number(a.model) !== Number(b.model)) return false;
    for (const k of campos()) {
      const x = a[k], y = b[k];
      if (y == null) continue; // campo que não existia quando o caso foi salvo
      if (x == null || y == null || Math.abs(x - y) > 1e-9 * Math.max(1, Math.abs(x), Math.abs(y))) return false;
    }
    return true;
  };
  const casoAtual = d => d.lista.find(c => c.id === d.atual) || null;
  const novoId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const quando = t => new Date(t).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
  const descreve = c => `${nomeModelo(c.model)} · soltura ${fmt(c.release)} m · Su ${fmt(c.su0)} + ${fmt(c.suGradient)}·z kPa`;
  const limpo = c => Object.fromEntries(Object.entries(c).filter(([, v]) => v != null));

  /* ------------------------------------------------ estado e lista */
  function mostrar() {
    raiz.hidden = !logado();
    if (raiz.hidden) { fechar(); fecharNome(); return; }
    const d = ler(), c = casoAtual(d), sujo = !!c && !igual(atual(), c);
    raiz.classList.toggle('sujo', sujo);
    nomeAtual.textContent = c ? c.nome : (d.lista.length ? 'Escolher ou cadastrar caso' : 'Cadastrar caso');
    resumo.textContent = c ? descreve(c) : (d.lista.length ? d.lista.length + (d.lista.length > 1 ? ' casos salvos' : ' caso salvo') : 'Nenhum caso salvo ainda');
    if (!c) { st.textContent = ''; st.className = 'lx-caso-st'; }
    else if (sujo) { st.textContent = 'Alterado, não salvo'; st.className = 'lx-caso-st alterado'; }
    else { st.textContent = 'Salvo ' + quando(c.salvo); st.className = 'lx-caso-st ok'; }
    bSalvar.hidden = !sujo; bDesc.hidden = !sujo; bExc.hidden = !c;
    const p = window.Sessao && window.Sessao.sessao && window.Sessao.sessao() && window.Sessao.projetoAtivo && window.Sessao.projetoAtivo();
    onde.textContent = p ? 'Guardados no projeto ' + p.nome : 'Só neste navegador. Abra um projeto para guardar no servidor.';
    if (!lista.hidden) montarLista();
  }

  function montarLista() {
    const d = ler();
    lista.innerHTML = d.lista.map(c => `<li role="option" data-id="${esc(c.id)}" aria-selected="${c.id === d.atual}"><b>${esc(c.nome)}</b><small>${esc(descreve(c))}</small><i>${esc(quando(c.salvo))}</i></li>`).join('') +
      `<li role="option" class="novo" data-novo="1" aria-selected="false"><b>＋ Cadastrar novo caso</b><small>Com os dados que estão no painel agora</small></li>`;
  }
  const itens = () => [...lista.querySelectorAll('li[role=option]')];
  function abrir() {
    montarLista(); lista.hidden = false; trig.setAttribute('aria-expanded', 'true');
    const sel = lista.querySelector('[aria-selected="true"]') || itens()[0]; focar(sel);
  }
  function fechar() { lista.hidden = true; trig.setAttribute('aria-expanded', 'false'); }
  function focar(li) { itens().forEach(x => x.classList.toggle('foco', x === li)); if (li) li.scrollIntoView({ block: 'nearest' }); }
  function escolher(li) {
    if (!li) return;
    fechar();
    if (li.dataset.novo) { pedirNome(); return; }
    const d = ler(), c = d.lista.find(x => x.id === li.dataset.id);
    if (!c) return;
    d.atual = c.id; gravar(d); fecharNome(); aplicar(c); setTimeout(mostrar, 0);
  }

  /* ------------------------------------------------ aplicar, cadastrar, salvar, excluir */
  function aplicar(c) {
    if (Number(c.model) !== modelo()) {
      const b = document.querySelector('#lx-lineup [data-model="' + Number(c.model) + '"]');
      if (b) b.click();
    }
    const nomes = campos().filter(k => c[k] != null);
    for (const k of nomes) form.elements.namedItem(k).value = fmt(c[k]);
    for (const k of nomes) form.elements.namedItem(k).dispatchEvent(new Event('input', { bubbles: true }));
  }
  function pedirNome() {
    const a = atual();
    caixaNome.hidden = false; inNome.value = `${nomeModelo(a.model)} · Su ${fmt(a.su0)} + ${fmt(a.suGradient)}·z`;
    inNome.focus(); inNome.select();
  }
  function fecharNome() { caixaNome.hidden = true; }
  function cadastrar() {
    const nome = inNome.value.trim().slice(0, 60);
    if (!nome) { inNome.focus(); return; }
    const d = ler();
    if (d.lista.length >= MAX) { st.textContent = `Limite de ${MAX} casos. Exclua algum antes.`; st.className = 'lx-caso-st alterado'; return; }
    const c = limpo({ id: novoId(), nome, salvo: Date.now(), ...atual() });
    d.lista.unshift(c); d.atual = c.id; gravar(d); fecharNome(); mostrar();
  }
  function salvar() {
    const d = ler(), i = d.lista.findIndex(c => c.id === d.atual);
    if (i < 0) return;
    d.lista[i] = limpo({ id: d.lista[i].id, nome: d.lista[i].nome, salvo: Date.now(), ...atual() });
    gravar(d); mostrar();
  }
  let armado = 0;
  function desarmar() { clearTimeout(armado); armado = 0; bExc.textContent = 'Excluir caso'; bExc.classList.remove('perigo'); }
  function excluir() {
    if (!armado) { bExc.textContent = 'Confirmar exclusão'; bExc.classList.add('perigo'); armado = setTimeout(desarmar, 3500); return; }
    desarmar();
    const d = ler(); d.lista = d.lista.filter(c => c.id !== d.atual); d.atual = ''; gravar(d); mostrar();
  }

  /* ------------------------------------------------ eventos */
  trig.addEventListener('click', () => (lista.hidden ? abrir() : fechar()));
  trig.addEventListener('keydown', e => { if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && lista.hidden) { e.preventDefault(); abrir(); } else if (!lista.hidden) navegar(e); });
  lista.addEventListener('click', e => escolher(e.target.closest('li[role=option]')));
  lista.addEventListener('mousemove', e => { const li = e.target.closest('li[role=option]'); if (li) focar(li); });
  function navegar(e) {
    const it = itens(), i = it.findIndex(x => x.classList.contains('foco'));
    if (e.key === 'ArrowDown') { e.preventDefault(); focar(it[Math.min(it.length - 1, i + 1)]); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); focar(it[Math.max(0, i - 1)]); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); escolher(it[i]); }
    else if (e.key === 'Escape' || e.key === 'Tab') fechar();
  }
  document.addEventListener('click', e => { if (!lista.hidden && !e.target.closest('#lx-caso-trig, #lx-caso-lista')) fechar(); });
  bSalvar.addEventListener('click', salvar);
  bDesc.addEventListener('click', () => { const c = casoAtual(ler()); if (c) { aplicar(c); setTimeout(mostrar, 0); } });
  bExc.addEventListener('click', excluir);
  bOk.addEventListener('click', cadastrar);
  bCancel.addEventListener('click', fecharNome);
  inNome.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); cadastrar(); } else if (e.key === 'Escape') fecharNome(); });

  // campos desta caixa não disparam o recálculo do painel
  raiz.addEventListener('input', e => e.stopPropagation());
  raiz.addEventListener('change', e => e.stopPropagation());
  raiz.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target === inNome) e.stopPropagation(); });

  // qualquer mudança no painel, troca de modelo ou restauração atualiza o estado
  let t = 0;
  const depois = () => { clearTimeout(t); t = setTimeout(mostrar, 80); };
  form.addEventListener('input', depois);
  document.addEventListener('click', e => { if (e.target.closest('#lx-lineup [data-model], #lx-restore')) depois(); });
  document.addEventListener('engenha-sessao', depois);
  addEventListener('storage', e => { if (e.key === CHAVE) mostrar(); });

  // ao abrir a página, o caso aberto volta inteiro (os campos de água só ficam guardados no caso)
  const c0 = logado() ? casoAtual(ler()) : null;
  if (c0) {
    const p = L.project || {};
    const base = ['release', 'water', 'su0', 'suGradient', 'nc', 'alphaT', 'st', 'rhoSoil', 'cdSoil', 'finT', 'ncFin', 'beta', 'rateRef'];
    const mesmaBase = Number(c0.model) === Number(p.model) && base.every(k => c0[k] == null || Math.abs(Number(p[k]) - c0[k]) < 1e-9);
    if (mesmaBase && !igual(atual(), c0)) aplicar(c0);
  }
  mostrar();
})();
