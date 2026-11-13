/* Acesso ao laboratório offshore.
   Sem login, tudo funciona como antes. Com login (convite do administrador, senha e segundo fator):
   - os cálculos vão com a sessão e o servidor libera todos os parâmetros de entrada;
   - o caso de estudo fica salvo no servidor, num projeto do próprio usuário;
   - o memorial é emitido pelo servidor a partir do projeto salvo.
   O servidor confere a sessão em cada pedido; esta página só mostra o que ele permitir.
   No domínio próprio, a sessão fica num cookie HttpOnly que o JavaScript não lê; aqui fica só o nome e o prazo, para a tela. */
(function () {
  'use strict';
  const AQUI = (document.currentScript && document.currentScript.src) || '';
  const local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  // em teste local, o mesmo nome de máquina da página: o cookie da sessão é do mesmo site
  const BASE = (local ? 'http://' + location.hostname + ':8787' : (window.ENGENHA_API || '')).replace(/\/$/, '');
  const K_SESSAO = 'engenha-offshore-sessao', K_PROJ = 'engenha-offshore-projeto', K_DONO = 'engenha-offshore-dono';
  const CHAVES = ['offshore-project-v8', 'catenaria-lab-case-v1', 'capacidade-axial-caso-v1', 'offshore-casos-v1'];
  const ler = (k, padrao) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? padrao : v; } catch (_) { return padrao; } };
  const gravar = (k, v) => { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (_) { /* sem armazenamento */ } };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ------------------------------------------- dados do estudo guardados neste navegador */
  // parâmetros e casos das páginas do laboratório; tema e escolha de estatísticas ficam
  const ESTUDO = /^(offshore-|catenaria-|capacidade-|lancamento-|carga-lateral|engenha-offshore-projeto$)/;
  function apagarEstudo() {
    try {
      for (const k of Object.keys(localStorage)) if (ESTUDO.test(k)) localStorage.removeItem(k);
      localStorage.removeItem(K_DONO);
      for (const k of Object.keys(sessionStorage)) if (/^engenha-/.test(k)) sessionStorage.removeItem(k);
    } catch (_) { /* sem armazenamento */ }
  }
  const temEstudo = () => { try { return Object.keys(localStorage).some(k => ESTUDO.test(k)); } catch (_) { return false; } };
  // os dados ficam marcados com a conta que os usou; outra conta não herda o que sobrou
  function adotar(u) {
    if (!u || !u.id) return;
    const dono = ler(K_DONO, null);
    if (dono && dono !== u.id) apagarEstudo();
    gravar(K_DONO, u.id);
  }

  /* ------------------------------------------------------------ sessão */
  const sessao = () => { const s = ler(K_SESSAO, null); return s && s.usuario && s.expira * 1000 > Date.now() ? s : null; };
  // modo anterior (endereço workers.dev): o servidor ainda devolve o token e ele vai no cabeçalho
  const cabecalho = (s, h) => { if (s && s.sessao) h.Authorization = 'Bearer ' + s.sessao; return h; };
  // ao sair: apaga os dados do estudo deste navegador, a menos que a pessoa escolha mantê-los.
  // sessão encerrada pelo servidor ou vencida: apaga sempre (quem está na frente da tela pode ser outra pessoa)
  function sair(local, { manter = false } = {}) {
    const s = sessao();
    gravar(K_SESSAO, null); gravar(K_PROJ, null);
    const tinha = temEstudo();
    if (!manter) apagarEstudo();
    if (s && !local) fetch(BASE + '/v1/conta/sair', { method: 'POST', credentials: 'include', headers: cabecalho(s, { 'Content-Type': 'application/json' }), body: '{}' }).catch(() => {});
    document.dispatchEvent(new CustomEvent('engenha-sessao'));
    // a página guarda o estudo em memória e voltaria a gravá-lo: recarrega limpa
    if (!manter && tinha && local && document.body && document.body.dataset.page !== 'acesso') location.reload();
  }
  // sessão que venceu com a página fechada: o estudo da conta não fica para o próximo
  (function () { const bruta = ler(K_SESSAO, null); if (bruta && !sessao()) { gravar(K_SESSAO, null); gravar(K_PROJ, null); if (ler(K_DONO, null)) apagarEstudo(); } })();
  // pedido ao servidor; a sessão vai no cookie (ou no cabeçalho, no modo anterior). 401 com sessão = sessão encerrada
  async function pedir(rota, corpo, { auth = true } = {}) {
    const s = auth ? sessao() : null, h = { 'Content-Type': s ? 'application/json' : 'text/plain;charset=UTF-8' };
    cabecalho(s, h);
    let r;
    try { r = await fetch(BASE + '/v1/' + rota, { method: 'POST', credentials: 'include', headers: h, body: JSON.stringify(corpo || {}) }); }
    catch (_) { throw new Error('Sem conexão com o servidor. Verifique a internet e tente de novo.'); }
    let j = null; try { j = await r.json(); } catch (_) { /* resposta vazia */ }
    if (r.status === 401 && s) { sair(true); const e = new Error((j && j.erro) || 'Sua sessão terminou. Entre de novo.'); e.sessao = false; throw e; }
    if (!r.ok) { const e = new Error((j && j.erro) || 'O servidor não respondeu. Tente de novo em instantes.'); e.status = r.status; if (j && j.campo) e.field = j.campo; throw e; }
    return j;
  }
  // cálculos: com sessão, parâmetros liberados; se a sessão caiu, refaz sem login
  const calc = rota => async corpo => { try { return await pedir(rota, corpo); } catch (e) { if (e.sessao === false) return pedir(rota, corpo, { auth: false }); throw e; } };
  window.Calc = Object.fromEntries(['lancamento', 'secao', 'resumo', 'catenaria', 'capacidade', 'lateral', 'py'].map(k => [k, calc(k)]));

  /* --------------------------------------------- avatar: foto, ícone do setor ou iniciais */
  const ICONES = {
    plataforma: ['Plataforma', `<path class="av-sombra" d="M17 41h30l5 15H12z"/>
      <path class="av-metal" d="M18 37h6l-4 18h-6zm22 0h6l4 18h-6z"/>
      <path class="av-cor" d="M12 30h40v10H12z"/><path d="M12 35h40M18 30v-8h13v8M21 25h2m4 0h1M18 40l26 15M46 40 20 55"/>
      <path class="av-metal" d="m36 8-8 22h17z"/><path d="M36 8v22M33 17h7M30 24h13M11 30v-4m42 4v-4"/>
      <path class="av-agua" d="M7 55q6-4 12 0t12 0 12 0 14 0"/>`],
    torpedo: ['Estaca torpedo', `<path class="av-sombra" d="m26 31-11 11 2 9 12-7m9-13 11 11-2 9-12-7"/>
      <path class="av-cor" d="M26 14h12v31l-6 12-6-12z"/><path class="av-metal" d="M26 14h6v38l-6-7z"/>
      <path d="M26 23h12M26 41h12M32 7v7M28 7h8M23 19v16m18-16v16"/>
      <path class="av-detalhe" d="M29 28h6m-6 5h6"/>`],
    navio: ['Navio', `<path class="av-metal" d="M19 23h22l7 14H16z"/><path class="av-cor" d="M25 15h12v9H25z"/>
      <path d="M31 8v7m0-4h9M21 28h3m5 0h3m5 0h3"/>
      <path class="av-cor" d="m8 35 23 5 25-5-8 15H18z"/><path class="av-sombra" d="m31 40 25-5-8 15H31z"/>
      <path d="M31 40v8M13 39l11 3"/><path class="av-agua" d="M7 53q6-4 12 0t12 0 12 0 14 0"/>`],
    capacete: ['Capacete', `<path class="av-sombra" d="M15 45h34v6H15z"/>
      <path class="av-cor" d="M12 40c0-14 8-24 20-24s20 10 20 24z"/>
      <path class="av-metal" d="M28 13h8v25h-8z"/><path d="M21 23c-3 4-4 8-4 13m26-13c3 4 4 8 4 13"/>
      <path class="av-cor" d="M8 39h48v7H8z"/><path d="M11 46h42M32 19v13"/>`],
    ancora: ['Âncora', `<circle class="av-metal" cx="32" cy="14" r="6"/><circle class="av-sombra" cx="32" cy="14" r="2.5" stroke="none"/>
      <path class="av-metal" d="M29 20h6v28c6-1 11-5 13-10l-5 1 7-10 6 11-4-1c-2 10-10 16-20 19-10-3-18-9-20-19l-4 1 6-11 7 10-5-1c2 5 7 9 13 10z"/>
      <path class="av-cor" d="M20 25h24v5H20z"/><path class="av-detalhe" d="M32 23v26"/>`],
    sonda: ['Sonda', `<path class="av-sombra" d="M14 51h36v6H14z"/><path class="av-cor" d="m29 9-13 42h7l9-33 9 33h7L35 9z"/>
      <path d="M28 20h8M25 30h14M22 40h20M28 21l11 9-17 10 19 10M36 21l-11 9 17 10-19 10M32 7v43"/>
      <path class="av-metal" d="M11 50h42v6H11z"/><path d="M8 56h48"/>`],
    duto: ['Duto', `<path class="av-sombra" d="M8 18h20c9 0 14 6 14 14v3c0 4 2 6 6 6h9v12h-9c-12 0-18-7-18-18v-3H8z"/>
      <path class="av-metal" d="M8 14h20c9 0 14 6 14 14v3c0 4 2 6 6 6h9v12h-9c-12 0-18-7-18-18v-3H8z"/>
      <path class="av-cor" d="M12 10h7v22h-7zm35 23h7v20h-7z"/><path class="av-detalhe" d="M23 19h5c6 0 9 4 9 9v4M17 15v2m0 8v2m33 11v2m0 8v2"/>`],
    onda: ['Ondas', `<path class="av-sombra" d="M7 42c9 0 11-5 17-17 7-14 22-13 27-4-11-4-18 7-12 14 4 5 10 6 18 5v14H7z"/>
      <path class="av-cor" d="M7 39c9 0 11-5 17-17 7-14 22-13 27-4-11-4-18 7-12 14 4 5 10 6 18 5v13H7z"/>
      <path class="av-metal" d="M24 22c7-14 22-13 27-4-10-4-17 5-13 12-8-7-3-14 2-15-6-1-11 2-16 7z" stroke="none"/>
      <path class="av-agua" d="M8 47q6-4 12 0t12 0 12 0 12 0M12 54q5-3 10 0t10 0 10 0 10 0"/>`],
    helice: ['Hélice', `<path class="av-cor" d="M29 30C17 18 24 6 35 8c8 2 9 14-2 22z"/>
      <path class="av-metal" d="M34 30c16-5 23 7 17 16-5 7-16 1-18-12z"/>
      <path class="av-cor" d="M31 35c-4 16-19 17-24 7-4-8 7-15 20-11z"/>
      <path class="av-detalhe" d="M31 25c-5-6-5-11-1-13M39 33c8 0 11 4 10 7M26 37c-4 6-9 8-12 5"/>
      <circle class="av-sombra" cx="32" cy="32" r="7"/><circle class="av-metal" cx="32" cy="32" r="4"/>`],
    valvula: ['Válvula', `<path class="av-sombra" d="M9 34h46v14H9z"/>
      <path class="av-metal" d="m14 31 18 8-18 9zm36 0-18 8 18 9z"/>
      <path class="av-cor" d="M8 29h6v21H8zm42 0h6v21h-6zM29 23h6v16h-6z"/>
      <ellipse class="av-cor" cx="32" cy="17" rx="15" ry="6"/><path d="M17 17h30m-15-6v12"/>
      <path class="av-detalhe" d="M10 34v3m0 7v2m43-12v3m0 7v2"/>`],
    boia: ['Boia', `<path class="av-cor" d="m25 29-5 20h24l-5-20z"/><path class="av-metal" d="m23 37-2 7h22l-2-7z"/>
      <path class="av-metal" d="M27 22h10l2 7H25z"/><path class="av-cor" d="M28 16h8v6h-8z"/>
      <path d="M32 9v7m-4-7h8M17 49h30"/><path class="av-detalhe" d="m22 12-3-3m23 3 3-3"/>
      <path class="av-agua" d="M7 54q6-4 12 0t12 0 12 0 14 0"/>`],
    engrenagem: ['Engrenagem', `<path class="av-metal" d="m27 8 10 0 1 7 5 3 7-3 5 9-6 5v6l6 5-5 9-7-3-5 3-1 7H27l-1-7-5-3-7 3-5-9 6-5v-6l-6-5 5-9 7 3 5-3z"/>
      <circle class="av-cor" cx="32" cy="32" r="14"/><circle class="av-sombra" cx="32" cy="32" r="7"/>
      <path class="av-detalhe" d="M22 32a10 10 0 0 1 10-10m10 10a10 10 0 0 1-10 10"/>`]
  };
  const iniciais = nome => String(nome || '?').trim().split(/\s+/).filter(Boolean).map(p => p[0]).slice(0, 2).join('').toUpperCase() || '?';
  function iconeSvg(id) {
    const i = ICONES[id];
    return i ? `<svg class="av-arte" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${i[1]}</svg>` : '';
  }
  function avatar(u, cls) {
    u = u || {}; const a = String(u.avatar || ''), c = 'av' + (cls ? ' ' + cls : '');
    if (/^data:image\/(png|jpeg|webp);base64,/.test(a)) return `<span class="${c} av-foto"><img src="${esc(a)}" alt=""></span>`;
    if (a.startsWith('icone:') && ICONES[a.slice(6)]) { const id = a.slice(6); return `<span class="${c} av-ic av-${id}">${iconeSvg(id)}</span>`; }
    return `<span class="${c} av-ini">${esc(iniciais(u.nome || u.email))}</span>`;
  }

  /* --------------------------------------------- responsável técnico nos relatórios impressos */
  function blocoResponsavel() {
    const s = sessao(); document.querySelectorAll('.rp-resp').forEach(e => e.remove()); if (!s) return;
    const u = s.usuario, html = `${avatar(u, 'av-rp')}<div><span>Responsável técnico</span><b>${esc(u.nome)}</b><small>${esc([u.empresa, u.email].filter(Boolean).join(' · '))}</small></div>`;
    const alvos = document.querySelectorAll('.rp-title');
    if (alvos.length) alvos.forEach(t => { const d = document.createElement('div'); d.className = 'rp-resp'; d.innerHTML = html; t.after(d); });
    else { const m = document.querySelector('main'); if (m) { const d = document.createElement('div'); d.className = 'rp-resp rp-resp-pagina'; d.innerHTML = html; m.prepend(d); } }
  }
  window.addEventListener('beforeprint', blocoResponsavel);

  /* ------------------------------------------------- histórico de uso (só com sessão) */
  // relatórios impressos e arquivos exportados em qualquer página ficam no histórico da conta.
  // a página pode descrever o relatório em window.EngenhaRelatorio = { titulo, ref, arquivo, versao } antes de imprimir.
  function registrarUso(tipo, d) {
    const s = sessao(); if (!s || !BASE) return;
    const corpo = JSON.stringify({ tipo, pagina: location.pathname.slice(0, 120), ...d });
    try { fetch(BASE + '/v1/conta/registrar', { method: 'POST', credentials: 'include', keepalive: true, headers: cabecalho(s, { 'Content-Type': 'application/json' }), body: corpo }).catch(() => {}); } catch (_) { /* sem rede */ }
  }
  const visivel = e => !!(e && (e.offsetWidth || e.offsetHeight || e.getClientRects().length));
  function tituloRelatorio() {
    const cands = [...document.querySelectorAll('[id*="relatorio"]:not([hidden]) h1, .rp-title h1, .rp-title, main h1, h1')];
    const h = cands.find(visivel) || cands[0];
    return ((h && h.textContent) || document.title.split('|')[0] || '').replace(/\s+/g, ' ').trim();
  }
  let ultimaImpressao = 0;
  window.addEventListener('beforeprint', () => {
    const n = Date.now(); if (n - ultimaImpressao < 3000) return; ultimaImpressao = n;
    const info = window.EngenhaRelatorio || {}; window.EngenhaRelatorio = null;
    registrarUso('relatorio', { titulo: info.titulo || tituloRelatorio(), ref: info.ref || '', arquivo: info.arquivo || '', versao: info.versao || '' });
  });
  // exportações: links com download, clicados pela pessoa ou pelo código da página
  const exportado = a => { if (a && a.hasAttribute && a.hasAttribute('download')) registrarUso('exportacao', { arquivo: a.getAttribute('download') || (a.href || '').split('/').pop().slice(0, 120), titulo: document.title.split('|')[0].trim() }); };
  document.addEventListener('click', e => { const a = e.target && e.target.closest ? e.target.closest('a[download]') : null; if (a) exportado(a); }, true);
  const clicar = HTMLAnchorElement.prototype.click;
  HTMLAnchorElement.prototype.click = function () { if (!this.isConnected) exportado(this); return clicar.apply(this, arguments); };
  // sinais de uso: toques e teclas reais contra eventos gerados por script, e navegador automatizado.
  // Vão junto de cada cálculo; o servidor usa só para avisar o administrador de cópia automatizada.
  const toques = { c: 0, s: 0 };
  for (const t of ['pointerdown', 'keydown', 'input']) document.addEventListener(t, e => { if (e.isTrusted) toques.c++; else if (t !== 'input' || (e.target && /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName))) toques.s++; }, true);
  const sinais = () => 'w' + (navigator.webdriver ? 1 : 0) + 'c' + Math.min(9999, toques.c) + 's' + Math.min(9999, toques.s) + 'h' + (/Headless/i.test(navigator.userAgent) ? 1 : 0);
  // texto copiado: só a quantidade de caracteres vai para o histórico, nunca o conteúdo
  document.addEventListener('copy', () => { try { const n = String(window.getSelection ? window.getSelection() : '').length; if (n >= 200) registrarUso('copia', { caracteres: n }); } catch (_) { /* sem seleção */ } }, true);
  // cálculos: o servidor anota a página de origem no histórico de quem entrou
  if (BASE && window.fetch) {
    const buscar = window.fetch;
    let semSinais = false;
    window.fetch = function (url, op) {
      const original = op;
      try {
        if (typeof url === 'string' && url.startsWith(BASE + '/v1/') && !/\/v1\/conta\//.test(url)) {
          op = { ...(op || {}) }; const h = new Headers(op.headers || {}); if (sessao()) h.set('X-Engenha-Pagina', location.pathname.slice(0, 118)); if (!semSinais) h.set('X-Engenha-Sinais', sinais()); op.headers = h;
        }
      } catch (_) { /* segue sem o cabeçalho */ }
      if (op === original || semSinais) return buscar.call(this, url, op);
      // servidor ainda sem o cabeçalho de sinais liberado: repete o pedido sem ele
      return buscar.call(this, url, op).catch(err => {
        semSinais = true;
        try { const h = new Headers(op.headers); h.delete('X-Engenha-Sinais'); return buscar.call(window, url, { ...op, headers: h }); } catch (_) { throw err; }
      });
    };
  }
  // laboratórios liberados para a conta (o administrador usa todos); sessões antigas sem a lista valem para o offshore
  const temLab = lab => { const s = sessao(); if (!s) return false; const u = s.usuario; return u.papel === 'admin' || (Array.isArray(u.labs) ? u.labs : ['offshore']).includes(lab); };
  window.Sessao = { temLab, pedir, sessao, sair, BASE, guardar: s => { if (s && s.usuario) adotar(s.usuario); gravar(K_SESSAO, s); document.dispatchEvent(new CustomEvent('engenha-sessao')); }, projetoAtivo: () => ler(K_PROJ, null), definirProjeto: p => gravar(K_PROJ, p), dadosLocais, aplicarDados, apagarEstudo, temEstudo, CHAVES, avatar, ICONES, iconeSvg, iniciais };

  /* ------------------------------------------------- projeto no servidor */
  function dadosLocais() { const o = {}; for (const k of CHAVES) { const v = ler(k, null); if (v && typeof v === 'object') o[k] = v; } return o; }
  function aplicarDados(d) { for (const k of CHAVES) { if (d && d[k]) gravar(k, d[k]); else gravar(k, null); } }
  const pagina = document.body && document.body.dataset.page !== 'acesso';
  // confere a sessão em segundo plano (pode ter sido encerrada ou ter mudado de permissão pelo administrador)
  if (pagina && sessao()) pedir('conta/eu').then(r => { const s = sessao(); if (r && r.usuario && s) { gravar(K_SESSAO, { ...s, usuario: { ...s.usuario, ...r.usuario } }); document.dispatchEvent(new CustomEvent('engenha-sessao')); } }).catch(() => {});
  // mensagens com o administrador: só para quem entrou, fora das páginas de documento impresso
  if (pagina && AQUI && !/documento\.html|relatorio/.test(location.pathname)) {
    const carregarChat = () => {
      if (!sessao() || document.querySelector('script[data-chat]')) return;
      const base = AQUI.replace(/sessao\.js.*$/, '');
      const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = base.replace(/js\/$/, 'css/') + 'chat.css?v=20261107-2'; document.head.append(l);
      const sc = document.createElement('script'); sc.src = base + 'chat.js?v=20261110-1'; sc.dataset.chat = '1'; document.head.append(sc);
    };
    carregarChat(); document.addEventListener('engenha-sessao', carregarChat);
  }
  // o resto (projeto salvo, barra e cabeçalho) é das páginas do laboratório offshore
  if (!pagina || !/\/offshore\//.test(location.pathname)) return;

  let ultimo = JSON.stringify(dadosLocais()), espera = 0, salvando = false, barra = null;
  async function salvar() {
    const p = ler(K_PROJ, null), s = sessao(); if (!p || !s || salvando || !temLab('offshore')) return;
    const atual = JSON.stringify(dadosLocais()); if (atual === ultimo) return;
    salvando = true; estado('Salvando…');
    try { const r = await pedir('projetos/salvar', { id: p.id, dados: JSON.parse(atual) }); ultimo = atual; gravar(K_PROJ, { ...p, versao: r.versao }); estado('Salvo às ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })); }
    catch (e) { estado(e.message, true); }
    finally { salvando = false; }
  }
  setInterval(() => { if (!ler(K_PROJ, null) || !sessao()) return; if (JSON.stringify(dadosLocais()) !== ultimo) { clearTimeout(espera); espera = setTimeout(salvar, 1200); } }, 1500);
  addEventListener('pagehide', () => { const p = ler(K_PROJ, null), s = sessao(), atual = JSON.stringify(dadosLocais()); if (p && s && atual !== ultimo) fetch(BASE + '/v1/projetos/salvar', { method: 'POST', keepalive: true, credentials: 'include', headers: cabecalho(s, { 'Content-Type': 'application/json' }), body: JSON.stringify({ id: p.id, dados: JSON.parse(atual) }) }).catch(() => {}); });

  // ao abrir a página: se o projeto mudou em outro lugar (e aqui não há mudança pendente), traz a versão salva
  async function conferirVersao() {
    const p = ler(K_PROJ, null); if (!p || !sessao() || !temLab('offshore')) return;
    try {
      const r = await pedir('projetos/abrir', { id: p.id });
      if (r.versao > (p.versao || 0)) {
        const marca = 'engenha-recarga-' + r.id + '-' + r.versao;
        gravar(K_PROJ, { id: r.id, nome: r.nome, versao: r.versao });
        if (!sessionStorage.getItem(marca)) { sessionStorage.setItem(marca, '1'); aplicarDados(r.dados); location.reload(); return; }
      }
      ultimo = JSON.stringify(dadosLocais());
    } catch (e) { if (e.status === 404) { gravar(K_PROJ, null); montarBarra(); } }
  }

  /* --------------------------------------------- cabeçalho e barra */
  const volta = encodeURIComponent(location.pathname.split('/').pop() || 'index.html').replace(/%2F/g, '/');
  function botaoConta() {
    const lugar = document.querySelector('.s-actions'); if (!lugar) return;
    let b = lugar.querySelector('.s-conta'); if (!b) { b = document.createElement('a'); b.className = 's-act s-conta'; lugar.prepend(b); }
    const s = sessao();
    if (s) { b.href = 'conta.html'; b.innerHTML = `${avatar(s.usuario, 's-av')}${esc(s.usuario.nome.split(' ')[0])}`; b.title = 'Sua conta: ' + s.usuario.email; }
    else { b.href = 'conta.html?volta=' + volta; b.textContent = 'Entrar'; b.title = 'Entrar com o seu acesso'; }
  }
  function estado(txt, erro) { const e = barra && barra.querySelector('.sb-estado'); if (e) { e.textContent = txt; e.classList.toggle('erro', !!erro); } }
  async function montarBarra() {
    const s = sessao();
    if (!s || !temLab('offshore')) { if (barra) { barra.remove(); barra = null; } return; }
    if (!barra) { barra = document.createElement('div'); barra.className = 's-projeto'; barra.setAttribute('role', 'region'); barra.setAttribute('aria-label', 'Projeto salvo no servidor'); (document.querySelector('.s-areas') || document.querySelector('header')).after(barra); }
    const p = ler(K_PROJ, null);
    barra.innerHTML = `<span class="sb-rot">Projeto</span><select class="sb-sel" aria-label="Projeto"><option value="">${p ? esc(p.nome) : 'Sem projeto (só neste navegador)'}</option></select>
      <span class="sb-estado">${p ? 'Salvo no servidor' : 'Parâmetros completos liberados'}</span>
      <span class="sb-acoes">${p ? '<button type="button" data-a="memorial">Emitir memorial</button>' : '<button type="button" data-a="novo">Salvar como projeto</button>'}<a href="conta.html">Minha conta</a></span>`;
    const sel = barra.querySelector('.sb-sel');
    try {
      const { projetos } = await pedir('projetos/listar');
      sel.innerHTML = (p ? '' : '<option value="">Sem projeto (só neste navegador)</option>') + projetos.map(x => `<option value="${esc(x.id)}"${p && p.id === x.id ? ' selected' : ''}>${esc(x.nome)}</option>`).join('') + '<option value="+">＋ Novo projeto com estes dados…</option>';
    } catch (e) { estado(e.message, true); }
    sel.addEventListener('change', async () => {
      const v = sel.value;
      if (v === '+') return novo();
      if (!v) return;
      try { const r = await pedir('projetos/abrir', { id: v }); gravar(K_PROJ, { id: r.id, nome: r.nome, versao: r.versao }); aplicarDados(r.dados); location.reload(); } catch (e) { estado(e.message, true); }
    });
    barra.querySelector('[data-a="novo"]')?.addEventListener('click', novo);
    barra.querySelector('[data-a="memorial"]')?.addEventListener('click', memorial);
  }
  async function novo() {
    const nome = (prompt('Nome do projeto:', 'Estudo ' + new Date().toLocaleDateString('pt-BR')) || '').trim();
    if (!nome) { montarBarra(); return; }
    try { const r = await pedir('projetos/criar', { nome, dados: dadosLocais() }); gravar(K_PROJ, { id: r.id, nome: r.nome, versao: r.versao }); ultimo = JSON.stringify(dadosLocais()); montarBarra(); } catch (e) { estado(e.message, true); }
  }
  async function memorial() {
    const p = ler(K_PROJ, null); if (!p) return;
    await salvar();
    const janela = window.open('', '_blank');
    try { const r = await pedir('documentos/emitir', { projeto_id: p.id }); const url = 'documento.html#id=' + r.id; if (janela) janela.location = url; else location.href = url; }
    catch (e) { if (janela) janela.close(); estado(e.message, true); }
  }

  // mantém a aba atual à vista quando a barra rola (celular)
  function abaAtual() {
    const nav = document.querySelector('.s-areas');
    const atual = nav && nav.querySelector('[aria-current="page"]');
    if (atual && nav.scrollWidth > nav.clientWidth) nav.scrollLeft = Math.max(0, atual.offsetLeft - (nav.clientWidth - atual.offsetWidth) / 2);
  }
  function atualizar() { botaoConta(); montarBarra(); abaAtual(); }
  document.addEventListener('engenha-sessao', atualizar);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => { atualizar(); conferirVersao(); }); else { atualizar(); conferirVersao(); }
})();
