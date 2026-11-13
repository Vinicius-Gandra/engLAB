/* Painel do administrador: resumo, usuários e convites, alertas de uso, sessões abertas e histórico.
   Tudo é conferido no servidor (sessão de administrador com segundo fator); esta página só exibe. */
(function () {
  'use strict';
  const S = window.Sessao, app = document.getElementById('app');
  const EN = !!(window.Idioma && window.Idioma.lang === 'en');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const LOC = EN ? 'en-US' : 'pt-BR';

  /* ---------- datas: hoje, ontem ou a data, no idioma da página (sem passar pelo tradutor) ---------- */
  const dia = t => { const d = new Date(t * 1000); d.setHours(0, 0, 0, 0); return d.getTime(); };
  const hoje = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); };
  const hhmm = t => new Date(t * 1000).toLocaleTimeString(LOC, { hour: '2-digit', minute: '2-digit' });
  function quando(t) {
    if (!t) return '<span class="adm-nada">—</span>';
    const d = dia(t), h = hoje(), txt = d === h ? (EN ? 'Today, ' : 'Hoje, ') + hhmm(t) : d === h - 864e5 ? (EN ? 'Yesterday, ' : 'Ontem, ') + hhmm(t)
      : new Date(t * 1000).toLocaleString(LOC, { day: '2-digit', month: 'short', year: d < h - 300 * 864e5 ? 'numeric' : undefined, hour: '2-digit', minute: '2-digit' });
    return `<time translate="no" datetime="${new Date(t * 1000).toISOString()}" title="${esc(new Date(t * 1000).toLocaleString(LOC))}">${esc(txt)}</time>`;
  }
  function tituloDia(t) {
    const d = dia(t), h = hoje();
    return d === h ? (EN ? 'Today' : 'Hoje') : d === h - 864e5 ? (EN ? 'Yesterday' : 'Ontem') : new Date(t * 1000).toLocaleDateString(LOC, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }
  const num = n => `<b class="adm-num" translate="no">${Number(n || 0).toLocaleString(LOC)}</b>`;

  /* ---------- ícones ---------- */
  const svg = p => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${p}</svg>`;
  const IC = {
    mais: svg('<path d="M12 5v14M5 12h14"/>'),
    balao: svg('<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.1A8 8 0 1 1 20 12z"/><path d="M8.5 11h7M8.5 14h4"/>'),
    predio: svg('<path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 9h4a1 1 0 0 1 1 1v11M3 21h18M8 8h3M8 12h3M8 16h3"/>'),
    chave: svg('<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M17 6l3 3M15 8l2 2"/>'),
    pasta: svg('<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>'),
    pessoas: svg('<circle cx="9" cy="8" r="3.2"/><path d="M3 19c.6-3.2 3-5 6-5s5.4 1.8 6 5"/><path d="M16 4.8a3 3 0 0 1 0 6M18 14.2c1.6.7 2.7 2.4 3 4.8"/>'),
    envelope: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>'),
    tela: svg('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'),
    alerta: svg('<path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4M12 17h.01"/>'),
    relogio: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    busca: svg('<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.3-4.3"/>'),
    pontos: svg('<circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/>'),
    copiar: svg('<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>'),
    ok: svg('<path d="m5 12 5 5 9-10"/>'),
    x: svg('<path d="M6 6l12 12M18 6 6 18"/>'),
    escudo: svg('<path d="M12 3 4 6v6c0 4.5 3.4 8.2 8 9 4.6-.8 8-4.5 8-9V6l-8-3z"/><path d="m9 12 2 2 4-4"/>'),
    vazio: svg('<path d="M12 3 4 6v6c0 4.5 3.4 8.2 8 9 4.6-.8 8-4.5 8-9V6l-8-3z"/><path d="m9 12 2 2 4-4"/>'),
  };

  /* ---------- rótulos ---------- */
  const LABS = [['offshore', 'Offshore'], ['maquinas', 'Máquinas elétricas']];
  const ACOES = { acesso_solicitado: 'Pediu acesso', pedido_convidado: 'Pedido convidado', pedido_arquivado: 'Pedido arquivado', pedido_novo: 'Pedido reaberto', laboratorios_alterados: 'Laboratórios alterados', login: 'Entrou', logout: 'Saiu', login_recusado: 'Login recusado', conta_ativada: 'Conta ativada', acesso_redefinido: 'Acesso redefinido', convite_criado: 'Convite criado', convite_admin_terminal: 'Convite (Terminal)', redefinicao_criada: 'Link de redefinição', convite_cancelado: 'Convite cancelado', usuario_bloqueado: 'Bloqueado', usuario_desbloqueado: 'Desbloqueado', sessoes_encerradas: 'Sessões encerradas', projeto_criado: 'Projeto criado', projeto_alterado: 'Projeto alterado', projeto_renomeado: 'Projeto renomeado', projeto_excluido: 'Projeto excluído', documento_emitido: 'Memorial emitido', documento_baixado: 'Memorial aberto', calculo_executado: 'Cálculo executado', relatorio_emitido: 'Relatório emitido', arquivo_exportado: 'Arquivo exportado', chat_aberto: 'Chat aberto', chat_encerrado: 'Chat encerrado', perfil_alterado: 'Perfil alterado', texto_copiado: 'Texto copiado', uso_suspeito: 'Uso suspeito', controle_total_liberado: 'Controle total liberado', controle_total_retirado: 'Controle total retirado' };
  const GRUPO = a => /^(login|logout|conta_ativada|acesso_redefinido|sessoes_encerradas)$/.test(a) ? 'acesso'
    : /^(uso_suspeito|login_recusado|usuario_bloqueado)$/.test(a) ? 'risco'
    : /^projeto_/.test(a) ? 'projeto' : /^(documento_|relatorio_|arquivo_)/.test(a) ? 'documento'
    : /^(calculo_|texto_)/.test(a) ? 'calculo' : 'conta';
  const FERRAMENTAS = { lancamento: 'Lançamento', secao: 'Lançamento · seção', resumo: 'Lançamento · resumo', catenaria: 'Catenária', capacidade: 'Capacidade axial', lateral: 'Carga lateral', py: 'Carga lateral · curvas p-y', garrafa: 'Acelerômetro DC', pagina: 'Etapa aberta', escala: 'Ensaio em escala', escalaLote: 'Ensaio em escala · sensibilidade', maquinas: 'Máquinas elétricas', paginas: 'Páginas (texto e relatórios)' };
  const NIVEL = { alto: 'Alto', medio: 'Atenção' };
  const iniciais = n => String(n || '?').trim().split(/\s+/).filter(Boolean).slice(0, 2).map(p => p[0].toUpperCase()).join('') || '?';
  const cor = s => { let h = 0; for (const c of String(s)) h = (h * 31 + c.charCodeAt(0)) >>> 0; return 'av-' + (h % 6); };
  // foto ou ícone escolhido pela pessoa no perfil; sem nada, as iniciais
  const avatar = (u, grande) => u && u.avatar && S.avatar ? S.avatar(u, 'adm-foto' + (grande ? ' adm-foto-g' : '')) : `<span class="adm-av ${cor(u.email || u.nome)}${grande ? ' adm-foto-g' : ''}" aria-hidden="true" translate="no">${esc(iniciais(u.nome))}</span>`;
  function aparelho(ua) {
    ua = String(ua || ''); if (!ua) return EN ? 'Unknown device' : 'Aparelho desconhecido';
    const nav = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /Firefox\//.test(ua) ? 'Firefox' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : 'Navegador';
    const so = /iPhone|iPad/.test(ua) ? 'iOS' : /Android/.test(ua) ? 'Android' : /Mac OS X|Macintosh/.test(ua) ? 'macOS' : /Windows/.test(ua) ? 'Windows' : /Linux/.test(ua) ? 'Linux' : '';
    return so ? nav + ' · ' + so : nav;
  }

  /* ---------- sessão ---------- */
  const s = S.sessao();
  if (!s) { location.href = 'conta.html?volta=admin.html'; return; }
  if (s.usuario.papel !== 'admin') { app.innerHTML = '<section class="ac-cartao"><h1>Acesso restrito</h1><p>Este painel é só do administrador.</p><a class="ac-btn sec" href="conta.html">Minha conta</a></section>'; return; }
  const pedir = async (rota, corpo) => { try { return await S.pedir(rota, corpo); } catch (e) { if (e.sessao === false) location.href = 'conta.html?volta=admin.html'; throw e; } };
  // mensagens: o mesmo chat das outras páginas, aberto aqui direto na conversa com a pessoa
  if (!document.querySelector('script[data-chat]')) {
    const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = 'assets/css/chat.css?v=20261107-2'; document.head.append(l);
    const sc = document.createElement('script'); sc.src = 'assets/js/chat.js?v=20261110-1'; sc.dataset.chat = '1'; document.head.append(sc);
  }
  async function conversar(u) {
    for (let i = 0; i < 50 && !window.EngenhaChat; i++) await new Promise(r => setTimeout(r, 100));
    if (!window.EngenhaChat) { avisar('O chat ainda não carregou. Tente de novo.', false); return; }
    if (dlg.open) dlg.close();
    try { await window.EngenhaChat.conversarCom(u.id); u.conversa = true; } catch (e) { avisar(e.message, false); }
  }

  /* ---------- estrutura ---------- */
  const ABAS = [['usuarios', 'Usuários', IC.pessoas], ['pedidos', 'Pedidos de acesso', IC.envelope], ['alertas', 'Alertas', IC.alerta], ['sessoes', 'Sessões', IC.tela], ['historico', 'Histórico', IC.relogio]];
  let aba = 'usuarios', usuarios = [], abertos = 0, pedidosAbertos = 0, filtro = 'todos', busca = '';
  app.classList.add('adm');
  app.innerHTML = `<header class="adm-cab">
      <div><span class="adm-olho">Administração</span><h1>Painel dos laboratórios</h1><p>Contas, acessos e sinais de uso indevido em um só lugar.</p></div>
      <button type="button" class="adm-btn prim" data-convidar>${IC.mais}<span>Convidar profissional</span></button>
    </header>
    <section class="adm-kpis" data-kpis aria-label="Resumo"></section>
    <nav class="adm-abas" role="tablist" aria-label="Seções do painel">${ABAS.map(([k, t, i]) => `<button type="button" role="tab" data-aba="${k}" aria-selected="${k === aba}">${i}<span>${t}</span><b class="adm-cont" data-cont="${k}" translate="no" hidden></b></button>`).join('')}</nav>
    <div id="painel" class="adm-painel"></div>
    <div class="adm-toasts" data-toasts aria-live="polite"></div>
    <dialog class="adm-dlg" data-dlg></dialog>`;
  const painel = app.querySelector('#painel'), dlg = app.querySelector('[data-dlg]');
  app.querySelectorAll('[data-aba]').forEach(b => b.addEventListener('click', () => irPara(b.dataset.aba)));
  app.querySelector('[data-convidar]').addEventListener('click', convidar);
  function irPara(k, extra) {
    aba = k; app.querySelectorAll('[data-aba]').forEach(x => x.setAttribute('aria-selected', String(x.dataset.aba === k)));
    if (k === 'usuarios') abaUsuarios(); else if (k === 'pedidos') abaPedidos(); else if (k === 'alertas') abaAlertas(); else if (k === 'sessoes') abaSessoes(); else abaHistorico(extra);
  }

  /* ---------- avisos e confirmações ---------- */
  function avisar(msg, ok = true) {
    const box = app.querySelector('[data-toasts]'), t = document.createElement('div');
    t.className = 'adm-toast ' + (ok ? 'ok' : 'erro'); t.setAttribute('role', ok ? 'status' : 'alert');
    t.innerHTML = `${ok ? IC.ok : IC.alerta}<span></span><button type="button" aria-label="Fechar">${IC.x}</button>`;
    t.querySelector('span').textContent = msg; box.append(t);
    const fechar = () => { t.classList.add('sai'); setTimeout(() => t.remove(), 250); };
    t.querySelector('button').addEventListener('click', fechar); setTimeout(fechar, ok ? 4200 : 8000);
  }
  function abrirDialogo(html) { dlg.innerHTML = html; if (!dlg.open) dlg.showModal(); return dlg; }
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  function confirmar({ titulo, texto, ok, perigo }) {
    return new Promise(res => {
      abrirDialogo(`<form method="dialog" class="adm-dlg-corpo"><h2>${esc(titulo)}</h2><p>${esc(texto)}</p>
        <div class="adm-dlg-acoes"><button class="adm-btn sec" value="nao">Cancelar</button><button class="adm-btn ${perigo ? 'perigo' : 'prim'}" value="sim">${esc(ok)}</button></div></form>`);
      dlg.addEventListener('close', () => res(dlg.returnValue === 'sim'), { once: true });
      dlg.querySelector('[value="sim"]').focus();
    });
  }

  /* ---------- resumo ---------- */
  async function resumo() {
    try { ({ usuarios } = await pedir('admin/usuarios')); } catch (e) { avisar(e.message, false); }
    try { ({ abertos } = await pedir('admin/alertas', { contar: true })); } catch (_) { /* sem contagem */ }
    try { pedidosAbertos = (await pedir('admin/pedidos', { contar: true })).abertos; } catch (_) { /* sem contagem */ }
    const ativos = usuarios.filter(u => u.status === 'ativo').length, pend = usuarios.filter(u => u.status === 'pendente').length, sess = usuarios.reduce((t, u) => t + (u.sessoes || 0), 0);
    const kpi = (k, i, n, t, sub, cls = '') => `<button type="button" class="adm-kpi ${cls}" data-ir="${k}"><span class="adm-kpi-ic">${i}</span><span class="adm-kpi-n" translate="no">${n}</span><span class="adm-kpi-t">${t}</span><small>${sub}</small></button>`;
    app.querySelector('[data-kpis]').innerHTML =
      kpi('usuarios', IC.pessoas, ativos, 'Profissionais ativos', `<span translate="no">${usuarios.length}</span> <span>contas no total</span>`) +
      kpi('usuarios', IC.envelope, pend, 'Convites pendentes', pend ? 'aguardando o primeiro acesso' : 'nenhum aguardando', pend ? 'aviso' : '') +
      kpi('sessoes', IC.tela, sess, 'Sessões abertas', 'agora') +
      kpi('alertas', IC.alerta, abertos, 'Alertas abertos', abertos ? 'para revisar' : 'tudo em ordem', abertos ? 'perigo' : 'calmo');
    app.querySelectorAll('[data-ir]').forEach(b => b.addEventListener('click', () => { if (b.dataset.ir === 'usuarios' && b.classList.contains('aviso')) filtro = 'convites'; irPara(b.dataset.ir); }));
    const cont = (k, n, perigo) => { const c = app.querySelector(`[data-cont="${k}"]`); c.hidden = !n; c.textContent = n; c.classList.toggle('perigo', !!perigo); };
    cont('usuarios', usuarios.length); cont('pedidos', pedidosAbertos); cont('alertas', abertos, true); cont('sessoes', sess);
    const cp = app.querySelector('[data-cont="pedidos"]'); if (cp) cp.classList.toggle('novo', pedidosAbertos > 0);
  }

  /* ---------- convite ---------- */
  const linkConvite = r => `${location.origin}${location.pathname.replace(/admin\.html$/, 'conta.html')}#convite=${r.token}`;
  function mostrarLink(r, quem) {
    const url = linkConvite(r);
    abrirDialogo(`<div class="adm-dlg-corpo"><span class="adm-dlg-ic ok">${IC.envelope}</span><h2>Link pronto</h2>
      <p>Envie só para <b></b> por um canal seu (WhatsApp, e-mail). O link é de uso único.</p>
      <div class="adm-link"><code translate="no"></code><button type="button" class="adm-btn prim" data-copiar>${IC.copiar}<span>Copiar</span></button></div>
      <p class="adm-dlg-nota">Vale até ${quando(r.expira)}.</p>
      <div class="adm-dlg-acoes"><button type="button" class="adm-btn sec" data-fechar>Fechar</button></div></div>`);
    dlg.querySelector('b').textContent = quem; dlg.querySelector('code').textContent = url;
    dlg.querySelector('[data-fechar]').addEventListener('click', () => dlg.close());
    dlg.querySelector('[data-copiar]').addEventListener('click', e => navigator.clipboard.writeText(url).then(() => { e.currentTarget.querySelector('span').textContent = 'Copiado'; avisar('Link copiado.'); }, () => avisar('Copie o link manualmente.', false)));
  }
  function convidar(pre, depois) {
    pre = pre && pre.email ? pre : null;
    abrirDialogo(`<form class="adm-dlg-corpo" novalidate><span class="adm-dlg-ic">${IC.mais}</span><h2>Convidar profissional</h2>
      <p>A pessoa recebe um link de uso único para criar a senha e o segundo fator.</p>
      <label class="adm-campo">Nome<input name="nome" required maxlength="80" autocomplete="off"></label>
      <label class="adm-campo">E-mail<input name="email" type="email" required maxlength="160" autocomplete="off"></label>
      <fieldset class="adm-campo adm-papel"><legend>Papel</legend>
        <label class="adm-opcao"><input type="radio" name="papel" value="usuario" checked><span><b>Profissional</b><small>usa os laboratórios marcados abaixo</small></span></label>
        <label class="adm-opcao"><input type="radio" name="papel" value="admin"><span><b>Administrador</b><small>todos os laboratórios e este painel</small></span></label></fieldset>
      <fieldset class="adm-campo" data-labs><legend>Laboratórios</legend><div class="adm-chips">${LABS.map(([k, t]) => `<label class="adm-chip"><input type="checkbox" name="labs" value="${k}"${(pre ? pre.labs.includes(k) : k === 'offshore') ? ' checked' : ''}><span>${t}</span></label>`).join('')}</div></fieldset>
      <p class="adm-dlg-erro" hidden></p>
      <div class="adm-dlg-acoes"><button type="button" class="adm-btn sec" data-fechar>Cancelar</button><button class="adm-btn prim" type="submit">Gerar convite</button></div></form>`);
    const f = dlg.querySelector('form'), labs = f.querySelector('[data-labs]');
    f.querySelector('[data-fechar]').addEventListener('click', () => dlg.close());
    f.querySelectorAll('[name="papel"]').forEach(r => r.addEventListener('change', () => labs.querySelectorAll('input').forEach(i => { i.disabled = f.papel.value === 'admin'; if (i.disabled) i.checked = true; })));
    if (pre) { f.nome.value = pre.nome || ''; f.email.value = pre.email; }
    f.nome.focus();
    f.addEventListener('submit', async ev => {
      ev.preventDefault(); const fd = new FormData(f), erro = f.querySelector('.adm-dlg-erro'), b = f.querySelector('[type="submit"]');
      b.disabled = true;
      try { const r = await pedir('admin/convidar', { nome: fd.get('nome'), email: fd.get('email'), papel: fd.get('papel'), labs: [...labs.querySelectorAll('input:checked')].map(i => i.value) }); mostrarLink(r, fd.get('nome')); if (depois) await depois(r); await resumo(); if (aba === 'usuarios') desenharUsuarios(); }
      catch (e) { erro.hidden = false; erro.textContent = e.message; b.disabled = false; }
    });
  }

  /* ---------- perfil: o que a pessoa preencheu e como ela usa os laboratórios ---------- */
  function perfil(u) {
    if (!u) return;
    const eu = u.id === s.usuario.id, admin = u.papel === 'admin', fala = !eu && !admin && u.status === 'ativo';
    const linha = (ic, rot, val) => `<div class="adm-pf-linha">${ic}<span class="adm-rot">${rot}</span><div>${val}</div></div>`;
    abrirDialogo(`<div class="adm-dlg-corpo adm-pf">
      <button type="button" class="adm-pf-x" data-fechar aria-label="Fechar">${IC.x}</button>
      <div class="adm-pf-topo">${avatar(u, true)}<div><h2 translate="no" data-pf-nome></h2><a class="adm-email" translate="no" data-pf-email></a><div class="adm-tags">${situacao(u)}${admin ? '<span class="adm-tag">Administrador</span>' : ''}${u.confianca && !admin ? `<span class="adm-tag total">${IC.escudo}<span>Controle total</span></span>` : ''}</div></div></div>
      <div class="adm-pf-dados">
        ${linha(IC.predio, 'Empresa', u.empresa ? '<span translate="no" data-pf-empresa></span>' : '<span class="adm-nada">não informada</span>')}
        ${linha(IC.pessoas, 'Foto do perfil', u.avatar ? (u.avatar.startsWith('icone:') ? '<span>ícone escolhido</span>' : '<span>foto enviada</span>') : '<span class="adm-nada">nenhuma; aparecem as iniciais</span>')}
        ${linha(IC.chave, 'Segundo fator', u.segundo_fator ? '<span class="adm-ok">ativo</span>' : '<span class="adm-nada">ainda não configurado</span>')}
        ${linha(IC.tela, 'Laboratórios', admin ? '<span>todos</span>' : (u.labs || []).length ? (u.labs || []).map(l => `<span class="adm-chip fixo"><span>${esc((LABS.find(x => x[0] === l) || [l, l])[1])}</span></span>`).join(' ') : '<span class="adm-nada">nenhum</span>')}
      </div>
      <div class="adm-pf-nums">
        <div><span class="adm-pf-n" translate="no">${u.projetos || 0}</span><span>projetos salvos</span></div>
        <div><span class="adm-pf-n" translate="no">${u.documentos || 0}</span><span>memoriais emitidos</span></div>
        <div><span class="adm-pf-n" translate="no">${u.sessoes || 0}</span><span>sessões abertas</span></div>
        <div class="${u.alertas ? 'perigo' : ''}"><span class="adm-pf-n" translate="no">${u.alertas || 0}</span><span>alertas abertos</span></div>
      </div>
      <div class="adm-pf-datas">
        <div><span class="adm-rot">Conta criada</span>${quando(u.criado_em)}</div>
        <div><span class="adm-rot">Último acesso</span>${quando(u.ultimo_acesso)}</div>
        <div><span class="adm-rot">Último cálculo</span>${quando(u.ultimo_calculo)}</div>
      </div>
      <div class="adm-dlg-acoes">${fala ? `<button type="button" class="adm-btn prim" data-pf="msg">${IC.balao}<span>${u.conversa ? 'Abrir conversa' : 'Enviar mensagem'}</span></button>` : ''}
        <button type="button" class="adm-btn sec" data-pf="email">${IC.copiar}<span>Copiar e-mail</span></button>
        <button type="button" class="adm-btn sec" data-pf="hist">${IC.relogio}<span>Histórico</span></button></div>
    </div>`);
    dlg.querySelector('[data-pf-nome]').textContent = u.nome;
    const em = dlg.querySelector('[data-pf-email]'); em.textContent = u.email; em.href = 'mailto:' + encodeURIComponent(u.email).replace(/%40/g, '@');
    const emp = dlg.querySelector('[data-pf-empresa]'); if (emp) emp.textContent = u.empresa;
    dlg.querySelector('[data-fechar]').addEventListener('click', () => dlg.close());
    dlg.querySelectorAll('[data-pf]').forEach(b => b.addEventListener('click', () => {
      const a = b.dataset.pf;
      if (a === 'msg') conversar(u);
      else if (a === 'email') navigator.clipboard.writeText(u.email).then(() => avisar('E-mail copiado.'), () => avisar('Copie o e-mail manualmente.', false));
      else { dlg.close(); irPara('historico', u.id); }
    }));
  }

  /* ---------- usuários ---------- */
  const FILTROS = [['todos', 'Todos', () => true], ['ativos', 'Ativos', u => u.status === 'ativo'], ['convites', 'Convites', u => u.status === 'pendente'], ['bloqueados', 'Bloqueados', u => u.status === 'bloqueado'], ['alertas', 'Com alerta', u => u.alertas > 0], ['total', 'Controle total', u => u.confianca || u.papel === 'admin']];
  async function abaUsuarios() {
    painel.innerHTML = `<div class="adm-barra"><label class="adm-busca">${IC.busca}<input type="search" placeholder="Buscar por nome ou e-mail" aria-label="Buscar por nome ou e-mail" data-busca></label>
      <div class="adm-filtros" role="group" aria-label="Filtrar" data-filtros></div></div><ul class="adm-lista" data-lista><li class="adm-vazio">Carregando…</li></ul>`;
    const bx = painel.querySelector('[data-busca]'); bx.value = busca;
    bx.addEventListener('input', () => { busca = bx.value; desenharUsuarios(); });
    if (!usuarios.length) await resumo();
    desenharUsuarios();
  }
  function situacao(u) {
    const agora = Date.now() / 1000;
    const st = u.status === 'pendente' ? (u.convite_ate ? ['pendente', 'Convite enviado'] : ['vencido', 'Convite vencido']) : u.status === 'bloqueado' ? ['bloqueado', 'Bloqueado'] : ['ativo', 'Ativo'];
    const sub = u.travado_ate > agora ? '<small class="adm-risco">travado por tentativas erradas</small>' : u.status === 'pendente' && u.convite_ate ? `<small>até ${quando(u.convite_ate)}</small>` : u.convite_ate ? `<small>redefinição até ${quando(u.convite_ate)}</small>` : '';
    return `<span class="adm-st ${st[0]}">${st[1]}</span>${sub}`;
  }
  function desenharUsuarios() {
    const alvo = painel.querySelector('[data-lista]'), fx = painel.querySelector('[data-filtros]'); if (!alvo) return;
    fx.innerHTML = FILTROS.map(([k, t, f]) => { const n = usuarios.filter(f).length; return k !== 'todos' && !n && filtro !== k ? '' : `<button type="button" class="adm-filtro" aria-pressed="${filtro === k}" data-f="${k}"><span>${t}</span><b translate="no">${n}</b></button>`; }).join('');
    fx.querySelectorAll('[data-f]').forEach(b => b.addEventListener('click', () => { filtro = b.dataset.f; desenharUsuarios(); }));
    const q = busca.trim().toLowerCase(), fn = (FILTROS.find(x => x[0] === filtro) || FILTROS[0])[2];
    const lista = usuarios.filter(fn).filter(u => !q || (u.nome + ' ' + u.email).toLowerCase().includes(q));
    if (!lista.length) { alvo.innerHTML = `<li class="adm-vazio">${usuarios.length ? 'Ninguém com este filtro.' : 'Nenhuma conta ainda. Use “Convidar profissional”.'}</li>`; return; }
    alvo.innerHTML = lista.map(u => {
      const eu = u.id === s.usuario.id, admin = u.papel === 'admin';
      const tags = [admin ? '<span class="adm-tag">Administrador</span>' : '', u.confianca && !admin ? `<span class="adm-tag total">${IC.escudo}<span>Controle total</span></span>` : '', eu ? '<span class="adm-tag">Você</span>' : ''].join('');
      const labs = admin ? `<div class="adm-chips">${LABS.map(([, t]) => `<span class="adm-chip fixo"><span>${t}</span></span>`).join('')}</div>`
        : `<div class="adm-chips" data-labs="${esc(u.id)}">${LABS.map(([k, t]) => `<label class="adm-chip"><input type="checkbox" value="${k}"${(u.labs || []).includes(k) ? ' checked' : ''}><span>${t}</span></label>`).join('')}</div>`;
      const total = admin ? '<span class="adm-hint">Administrador: sem vigilância</span>'
        : `<label class="adm-switch"><input type="checkbox" role="switch" data-total="${esc(u.id)}"${u.confianca ? ' checked' : ''}><span class="adm-trilho" aria-hidden="true"></span><span class="adm-switch-t">Controle total</span></label><span class="adm-hint">${u.confianca ? 'sem vigilância e sem limite de pedidos' : 'uso vigiado'}</span>`;
      const menu = eu ? [] : u.status === 'pendente'
        ? [['redefinir', 'Gerar novo link'], ['cancelar', 'Cancelar convite', 'perigo']]
        : [['encerrar', 'Encerrar sessões', u.sessoes ? '' : 'off'], ['redefinir', 'Redefinir senha e segundo fator'], u.status === 'ativo' ? ['bloquear', 'Bloquear acesso', 'perigo'] : ['desbloquear', 'Desbloquear acesso']];
      const fala = !eu && !admin && u.status === 'ativo';
      menu.unshift(['perfil', 'Ver perfil']);
      if (fala) menu.unshift(['msg', 'Enviar mensagem']);
      menu.push(['hist', 'Ver histórico']);
      const principal = u.status === 'pendente' && !eu ? `<button type="button" class="adm-btn sec peq" data-a="redefinir" data-id="${esc(u.id)}">${IC.envelope}<span>Novo link</span></button>`
        : u.alertas ? `<button type="button" class="adm-btn perigo peq" data-a="alertas" data-id="${esc(u.id)}">${IC.alerta}<span translate="no">${u.alertas}</span><span>${u.alertas > 1 ? 'alertas' : 'alerta'}</span></button>` : '';
      return `<li class="adm-user ${u.status}">
        <div class="adm-quem"><button type="button" class="adm-perfil-btn" data-perfil="${esc(u.id)}" aria-label="Ver perfil">${avatar(u)}</button><div><button type="button" class="adm-nome" data-perfil="${esc(u.id)}" translate="no"></button><span class="adm-email" translate="no"></span>${u.empresa ? '<span class="adm-empresa" translate="no"></span>' : ''}<div class="adm-tags">${tags}</div></div></div>
        <div class="adm-celula"><span class="adm-rot">Situação</span>${situacao(u)}</div>
        <div class="adm-celula"><span class="adm-rot">Laboratórios</span>${labs}</div>
        <div class="adm-celula"><span class="adm-rot">Vigilância</span>${total}</div>
        <div class="adm-celula"><span class="adm-rot">Último acesso</span>${quando(u.ultimo_acesso)}<small>${num(u.sessoes)} <span>${u.sessoes === 1 ? 'sessão aberta' : 'sessões abertas'}</span></small></div>
        <div class="adm-acoes">${principal}${fala ? `<button type="button" class="adm-btn sec peq ic${u.conversa ? ' adm-com-conversa' : ''}" data-a="msg" data-id="${esc(u.id)}" aria-label="Enviar mensagem" title="Enviar mensagem">${IC.balao}</button>` : ''}<details class="adm-menu"><summary class="adm-btn sec peq ic" aria-label="Mais ações">${IC.pontos}</summary><div class="adm-menu-lista" role="menu">${menu.map(([a, t, c]) => `<button type="button" role="menuitem" class="${c || ''}" data-a="${a}" data-id="${esc(u.id)}"${c === 'off' ? ' disabled' : ''}>${t}</button>`).join('')}</div></details></div>
      </li>`;
    }).join('');
    // nomes e e-mails entram como texto (nunca como HTML)
    alvo.querySelectorAll('.adm-user').forEach((li, i) => { li.querySelector('.adm-nome').textContent = lista[i].nome; li.querySelector('.adm-email').textContent = lista[i].email; const em = li.querySelector('.adm-empresa'); if (em) em.textContent = lista[i].empresa; });
    alvo.querySelectorAll('[data-perfil]').forEach(b => b.addEventListener('click', () => perfil(usuarios.find(u => u.id === b.dataset.perfil))));
    alvo.querySelectorAll('[data-a]').forEach(b => b.addEventListener('click', () => { const d = b.closest('details'); if (d) d.open = false; acao(b.dataset.a, usuarios.find(u => u.id === b.dataset.id)); }));
    alvo.querySelectorAll('[data-total]').forEach(i => i.addEventListener('change', () => controleTotal(usuarios.find(x => x.id === i.dataset.total), i.checked, i)));
    // marcar ou desmarcar um laboratório vale na hora (o servidor confere a permissão a cada pedido)
    alvo.querySelectorAll('[data-labs] input').forEach(i => i.addEventListener('change', async () => {
      const box = i.closest('[data-labs]'), u = usuarios.find(x => x.id === box.dataset.labs), labs = [...box.querySelectorAll('input:checked')].map(x => x.value);
      box.querySelectorAll('input').forEach(x => { x.disabled = true; });
      try { const r = await pedir('admin/laboratorios', { usuario_id: u.id, labs }); u.labs = r.labs; avisar(`${u.nome}: ${r.labs.length ? r.labs.map(l => LABS.find(x => x[0] === l)[1]).join(' e ') : 'nenhum laboratório'}.`); }
      catch (e) { avisar(e.message, false); i.checked = !i.checked; }
      finally { box.querySelectorAll('input').forEach(x => { x.disabled = false; }); }
    }));
  }
  document.addEventListener('click', e => { app.querySelectorAll('details.adm-menu[open]').forEach(d => { if (!d.contains(e.target)) d.open = false; }); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') app.querySelectorAll('details.adm-menu[open]').forEach(d => { d.open = false; }); });

  async function acao(a, u) {
    if (!u) return;
    try {
      if (a === 'bloquear') { if (!await confirmar({ titulo: `Bloquear ${u.nome}?`, texto: 'As sessões abertas são encerradas na hora e a pessoa não consegue entrar até ser desbloqueada.', ok: 'Bloquear', perigo: true })) return; await pedir('admin/bloquear', { usuario_id: u.id, bloquear: true }); avisar(u.nome + ' bloqueado.'); }
      else if (a === 'desbloquear') { await pedir('admin/bloquear', { usuario_id: u.id, bloquear: false }); avisar(u.nome + ' desbloqueado.'); }
      else if (a === 'encerrar') { const r = await pedir('admin/encerrar', { usuario_id: u.id }); avisar(`${r.encerradas} sessão(ões) de ${u.nome} encerrada(s).`); }
      else if (a === 'cancelar') { if (!await confirmar({ titulo: 'Cancelar o convite?', texto: `O link enviado para ${u.nome} deixa de funcionar.`, ok: 'Cancelar convite', perigo: true })) return; await pedir('admin/cancelar-convite', { usuario_id: u.id }); avisar('Convite cancelado.'); }
      else if (a === 'redefinir') {
        if (u.status !== 'pendente' && !await confirmar({ titulo: `Redefinir o acesso de ${u.nome}?`, texto: 'Você recebe um link para a pessoa criar nova senha e novo segundo fator. Ao usar o link, as sessões dela são encerradas.', ok: 'Gerar link' })) return;
        const r = await pedir('admin/redefinir', { usuario_id: u.id }); await resumo(); if (aba === 'usuarios') desenharUsuarios(); mostrarLink(r, u.nome); return;
      }
      else if (a === 'alertas') return irPara('alertas');
      else if (a === 'msg') return conversar(u);
      else if (a === 'perfil') return perfil(u);
      else if (a === 'hist') return irPara('historico', u.id);
      await resumo(); if (aba === 'usuarios') desenharUsuarios(); else irPara(aba);
    } catch (e) { avisar(e.message, false); }
  }
  // controle total: a conta usa as ferramentas sem vigilância e sem limite de pedidos
  async function controleTotal(u, total, caixa) {
    if (!u) return;
    if (total && !await confirmar({ titulo: `Liberar controle total para ${u.nome}?`, texto: 'As ferramentas deixam de procurar sinais de cópia nos pedidos dessa conta e o limite de pedidos por minuto deixa de valer. Os alertas abertos dela são marcados como vistos.', ok: 'Liberar' })) { if (caixa) caixa.checked = false; return; }
    try { const r = await pedir('admin/confianca', { usuario_id: u.id, total }); u.confianca = r.confianca; avisar(`${u.nome}: ${r.confianca ? 'controle total liberado' : 'volta a ser vigiado'}.`); await resumo(); irPara(aba); }
    catch (e) { avisar(e.message, false); if (caixa) caixa.checked = !total; }
  }


  /* ---------- pedidos de acesso (feitos na tela de login) ---------- */
  let pedidosTodos = false;
  const SIT_PEDIDO = { novo: ['pendente', 'Novo'], convidado: ['ativo', 'Convidado'], arquivado: ['vencido', 'Arquivado'] };
  const zap = t => { let d = String(t || '').replace(/\D/g, ''); if (d.length === 10 || d.length === 11) d = '55' + d; return d.length >= 10 ? 'https://wa.me/' + d : null; };
  async function abaPedidos() {
    painel.innerHTML = `<div class="adm-barra"><p class="adm-intro">Quem pediu acesso na tela de login. Confira os dados, gere o convite e envie o link pelo e-mail ou WhatsApp da pessoa.</p>
      <div class="adm-filtros" role="group" aria-label="Mostrar"><button type="button" class="adm-filtro" data-v="0" aria-pressed="${!pedidosTodos}"><span>Novos</span></button><button type="button" class="adm-filtro" data-v="1" aria-pressed="${pedidosTodos}"><span>Todos</span></button></div></div>
      <div class="adm-pedidos" data-lista><p class="adm-vazio">Carregando…</p></div>`;
    painel.querySelectorAll('[data-v]').forEach(b => b.addEventListener('click', () => { pedidosTodos = b.dataset.v === '1'; abaPedidos(); }));
    const alvo = painel.querySelector('[data-lista]');
    try {
      const r = await pedir('admin/pedidos', { todos: pedidosTodos }), lista = r.pedidos;
      if (r.abertos !== pedidosAbertos) await resumo();
      if (!lista.length) { alvo.innerHTML = `<div class="adm-limpo">${IC.envelope}<b>${pedidosTodos ? 'Nenhum pedido recebido' : 'Nenhum pedido novo'}</b><span>Os pedidos feitos em “Solicitar acesso”, na tela de login, aparecem aqui.</span></div>`; return; }
      alvo.innerHTML = lista.map((x, i) => {
        const [cls, rot] = SIT_PEDIDO[x.status] || SIT_PEDIDO.novo, w = zap(x.telefone);
        return `<article class="adm-pedido st-${esc(x.status)}">
          <header>${avatar({ nome: x.nome, email: x.email })}
            <div class="adm-pedido-quem"><b translate="no" data-n="${i}"></b><a class="adm-email" translate="no" data-e="${i}"></a></div>
            <div class="adm-pedido-sit"><span class="adm-st ${cls}">${rot}</span><small>${quando(x.atualizado_em)}</small></div></header>
          <dl class="adm-pedido-dados">
            ${x.telefone ? `<div><dt>WhatsApp</dt><dd translate="no" data-t="${i}"></dd></div>` : ''}
            ${x.empresa ? `<div><dt>Empresa</dt><dd translate="no" data-c="${i}"></dd></div>` : ''}
            <div><dt>Laboratórios</dt><dd class="adm-tags">${x.labs.map(l => `<span class="adm-tag">${esc((LABS.find(([k]) => k === l) || [l, l])[1])}</span>`).join('')}</dd></div>
            ${x.idioma === 'en' ? '<div><dt>Idioma</dt><dd>Inglês</dd></div>' : ''}
          </dl>
          ${x.motivo ? `<blockquote class="adm-pedido-motivo" translate="no" data-m="${i}"></blockquote>` : ''}
          ${x.conta ? `<p class="adm-hint">${IC.pessoas}<span>${x.conta === 'pendente' ? 'Este e-mail já tem um convite em aberto.' : 'Este e-mail já tem conta.'}</span></p>` : ''}
          <footer>
            ${x.status !== 'convidado' && x.conta !== 'ativo' && x.conta !== 'bloqueado' ? `<button type="button" class="adm-btn prim peq" data-convite="${i}">${IC.mais}<span>Gerar convite</span></button>` : ''}
            ${x.conta && x.usuario_id ? `<button type="button" class="adm-btn sec peq" data-perfil="${i}">${IC.pessoas}<span>Ver conta</span></button>` : ''}
            <a class="adm-btn sec peq" data-mail="${i}">${IC.envelope}<span>E-mail</span></a>
            ${w ? `<a class="adm-btn sec peq" href="${esc(w)}" target="_blank" rel="noopener noreferrer">${IC.balao}<span>WhatsApp</span></a>` : ''}
            <button type="button" class="adm-btn sec peq" data-copiar="${i}">${IC.copiar}<span>Copiar contato</span></button>
            ${x.status === 'novo' ? `<button type="button" class="adm-btn sec peq" data-arquivar="${i}">Arquivar</button>` : `<button type="button" class="adm-btn sec peq" data-reabrir="${i}">Voltar para novos</button>`}
            ${x.tratado_em ? `<span class="adm-hint">${quando(x.tratado_em)}${x.tratado_por ? ` · <span translate="no">${esc(x.tratado_por)}</span>` : ''}</span>` : ''}
          </footer></article>`;
      }).join('');
      // dados digitados pela pessoa entram como texto, nunca como HTML
      lista.forEach((x, i) => {
        const q = s => alvo.querySelector(s);
        q(`[data-n="${i}"]`).textContent = x.nome; const e = q(`[data-e="${i}"]`); e.textContent = x.email; e.href = 'mailto:' + encodeURI(x.email);
        if (x.telefone) q(`[data-t="${i}"]`).textContent = x.telefone; if (x.empresa) q(`[data-c="${i}"]`).textContent = x.empresa; if (x.motivo) q(`[data-m="${i}"]`).textContent = x.motivo;
        const m = q(`[data-mail="${i}"]`); m.href = `mailto:${encodeURI(x.email)}?subject=${encodeURIComponent('Acesso aos laboratórios EngenhaLab')}`;
      });
      const tratar = async (x, status, msg) => { try { await pedir('admin/pedido-tratar', { id: x.id, status }); if (msg) avisar(msg); await resumo(); abaPedidos(); } catch (e) { avisar(e.message, false); } };
      alvo.querySelectorAll('[data-convite]').forEach(b => b.addEventListener('click', () => { const x = lista[+b.dataset.convite]; convidar({ nome: x.nome, email: x.email, labs: x.labs }, () => tratar(x, 'convidado')); }));
      alvo.querySelectorAll('[data-arquivar]').forEach(b => b.addEventListener('click', () => tratar(lista[+b.dataset.arquivar], 'arquivado', 'Pedido arquivado.')));
      alvo.querySelectorAll('[data-reabrir]').forEach(b => b.addEventListener('click', () => tratar(lista[+b.dataset.reabrir], 'novo', 'Pedido de volta aos novos.')));
      alvo.querySelectorAll('[data-perfil]').forEach(b => b.addEventListener('click', () => perfil(usuarios.find(u => u.id === lista[+b.dataset.perfil].usuario_id))));
      alvo.querySelectorAll('[data-copiar]').forEach(b => b.addEventListener('click', () => {
        const x = lista[+b.dataset.copiar], t = [x.nome, x.email, x.telefone, x.empresa].filter(Boolean).join('\n');
        navigator.clipboard.writeText(t).then(() => avisar('Contato copiado.'), () => avisar('Não foi possível copiar.', false));
      }));
    } catch (e) { alvo.innerHTML = `<p class="adm-vazio">${esc(e.message)}</p>`; }
  }

  /* ---------- alertas ---------- */
  let verTodos = false;
  async function abaAlertas() {
    painel.innerHTML = `<div class="adm-barra"><p class="adm-intro">Sinais de que alguém pode estar reproduzindo os métodos com automação. Nada é bloqueado sozinho; você decide o que fazer.</p>
      <div class="adm-filtros" role="group" aria-label="Mostrar"><button type="button" class="adm-filtro" data-v="0" aria-pressed="${!verTodos}"><span>Abertos</span></button><button type="button" class="adm-filtro" data-v="1" aria-pressed="${verTodos}"><span>Todos</span></button></div></div>
      <div class="adm-alertas" data-lista><p class="adm-vazio">Carregando…</p></div>`;
    painel.querySelectorAll('[data-v]').forEach(b => b.addEventListener('click', () => { verTodos = b.dataset.v === '1'; abaAlertas(); }));
    const alvo = painel.querySelector('[data-lista]');
    try {
      const r = await pedir('admin/alertas', { todos: verTodos }), alertas = r.alertas;
      if (r.abertos !== abertos) await resumo();
      if (!alertas.length) { alvo.innerHTML = `<div class="adm-limpo">${IC.vazio}<b>${verTodos ? 'Nenhum alerta registrado' : 'Nenhum alerta aberto'}</b><span>Quando o uso de alguém parecer automatizado, ele aparece aqui.</span></div>`; return; }
      alvo.innerHTML = alertas.map((x, i) => `<article class="adm-alerta nivel-${esc(x.nivel)}${x.visto_em ? ' visto' : ''}">
        <header>${x.usuario_id ? avatar({ ...x, avatar: (usuarios.find(u => u.id === x.usuario_id) || {}).avatar || '' }) : `<span class="adm-av anon" aria-hidden="true">${IC.tela}</span>`}
          <div class="adm-alerta-quem"><b data-n="${i}"></b><span class="adm-email" translate="no" data-e="${i}"></span></div>
          <div class="adm-alerta-nivel"><span class="adm-st ${x.nivel === 'alto' ? 'bloqueado' : 'pendente'}">${NIVEL[x.nivel] || x.nivel}</span><progress max="100" value="${Number(x.pontos) || 0}" aria-label="Pontos"></progress><small><span translate="no">${x.pontos}</span> <span>pontos</span></small></div></header>
        <div class="adm-alerta-meta"><span>${esc(FERRAMENTAS[x.ferramenta] || x.ferramenta)}</span><span>${num(x.pedidos)} <span>${x.pedidos === 1 ? 'pedido observado' : 'pedidos observados'}</span></span><span><span>primeiro sinal</span> ${quando(x.criado_em)}</span>${x.ultima_em !== x.criado_em ? `<span><span>último</span> ${quando(x.ultima_em)}</span>` : ''}</div>
        <ul class="adm-sinais">${x.motivos.map(m => `<li><b class="adm-peso" translate="no">+${Number(m.p) || 0}</b><span>${esc(m.t)}</span></li>`).join('')}</ul>
        <footer>${x.visto_em ? `<span class="adm-hint">${IC.ok}<span>visto</span> ${quando(x.visto_em)}${x.visto_por ? ` · <span translate="no">${esc(x.visto_por)}</span>` : ''}</span>` : `<button type="button" class="adm-btn prim peq" data-visto="${esc(x.id)}">${IC.ok}<span>Marcar como visto</span></button>`}
          ${x.usuario_id ? `${x.confianca ? `<span class="adm-tag total">${IC.escudo}<span>Controle total</span></span>` : `<button type="button" class="adm-btn sec peq" data-t="${i}">${IC.escudo}<span>Liberar controle total</span></button>`}
          <button type="button" class="adm-btn sec peq" data-h="${esc(x.usuario_id)}">${IC.relogio}<span>Histórico</span></button>
          ${x.status === 'ativo' ? `<button type="button" class="adm-btn perigo peq" data-b="${i}">Bloquear</button>` : ''}` : ''}</footer>
      </article>`).join('');
      alertas.forEach((x, i) => { alvo.querySelector(`[data-n="${i}"]`).textContent = x.usuario_id ? x.nome || '—' : 'Visitante sem login'; alvo.querySelector(`[data-e="${i}"]`).textContent = x.usuario_id ? [x.email, x.ip].filter(Boolean).join(' · ') : x.ip || ''; });
      alvo.querySelectorAll('[data-visto]').forEach(b => b.addEventListener('click', async () => { try { await pedir('admin/alerta-visto', { id: b.dataset.visto }); avisar('Alerta marcado como visto.'); await resumo(); abaAlertas(); } catch (e) { avisar(e.message, false); } }));
      alvo.querySelectorAll('[data-t]').forEach(b => b.addEventListener('click', () => { const x = alertas[+b.dataset.t]; controleTotal({ id: x.usuario_id, nome: x.nome }, true); }));
      alvo.querySelectorAll('[data-h]').forEach(b => b.addEventListener('click', () => irPara('historico', b.dataset.h)));
      alvo.querySelectorAll('[data-b]').forEach(b => b.addEventListener('click', () => { const x = alertas[+b.dataset.b]; acao('bloquear', { id: x.usuario_id, nome: x.nome }); }));
    } catch (e) { alvo.innerHTML = `<p class="adm-vazio">${esc(e.message)}</p>`; }
  }

  /* ---------- sessões ---------- */
  async function abaSessoes() {
    painel.innerHTML = '<div class="adm-barra"><p class="adm-intro">Quem está com o acesso aberto agora. Encerrar uma sessão obriga a pessoa a entrar de novo naquele aparelho.</p></div><ul class="adm-lista" data-lista><li class="adm-vazio">Carregando…</li></ul>';
    const alvo = painel.querySelector('[data-lista]');
    try {
      const { sessoes } = await pedir('admin/sessoes', {});
      if (!sessoes.length) { alvo.innerHTML = '<li class="adm-vazio">Nenhuma sessão aberta.</li>'; return; }
      const comFoto = x => ({ ...x, avatar: (usuarios.find(u => u.id === x.usuario_id) || {}).avatar || '' });
      alvo.innerHTML = sessoes.map((x, i) => `<li class="adm-user adm-sessao">
        <div class="adm-quem">${avatar(comFoto(x))}<div><b data-n="${i}"></b><span class="adm-email" translate="no" data-e="${i}"></span>${x.atual ? '<div class="adm-tags"><span class="adm-tag">Esta sessão</span></div>' : ''}</div></div>
        <div class="adm-celula"><span class="adm-rot">Aparelho</span><span translate="no">${esc(aparelho(x.agente))}</span><small translate="no">${esc(x.ip || '')}</small></div>
        <div class="adm-celula"><span class="adm-rot">Entrou</span>${quando(x.criada_em)}</div>
        <div class="adm-celula"><span class="adm-rot">Última atividade</span>${quando(x.ultima_atividade)}</div>
        <div class="adm-acoes">${x.atual ? '' : `<button type="button" class="adm-btn perigo peq" data-s="${esc(x.id)}">Encerrar</button>`}</div></li>`).join('');
      sessoes.forEach((x, i) => { alvo.querySelector(`[data-n="${i}"]`).textContent = x.nome; alvo.querySelector(`[data-e="${i}"]`).textContent = x.email; });
      alvo.querySelectorAll('[data-s]').forEach(b => b.addEventListener('click', async () => { try { await pedir('admin/encerrar', { sessao_id: b.dataset.s }); avisar('Sessão encerrada.'); await resumo(); abaSessoes(); } catch (e) { avisar(e.message, false); } }));
    } catch (e) { alvo.innerHTML = `<li class="adm-vazio">${esc(e.message)}</li>`; }
  }

  /* ---------- histórico ---------- */
  async function abaHistorico(uid) {
    if (!usuarios.length) await resumo();
    painel.innerHTML = `<div class="adm-barra"><div class="adm-selects">
        <label class="adm-select"><span>Profissional</span><select data-f="u"><option value="">Todos</option>${usuarios.map(u => `<option translate="no" value="${esc(u.id)}"${u.id === uid ? ' selected' : ''}>${esc(u.nome)} · ${esc(u.email)}</option>`).join('')}</select></label>
        <label class="adm-select"><span>Tipo</span><select data-f="a"><option value="">Todos</option>${Object.entries(ACOES).map(([k, v]) => `<option value="${k}">${esc(v)}</option>`).join('')}</select></label></div></div>
      <div class="adm-linha-tempo" data-lista></div><div class="adm-mais"><button type="button" class="adm-btn sec" data-mais hidden>Carregar mais</button></div>`;
    let antes = null, ultimoDia = null;
    const alvo = painel.querySelector('[data-lista]'), mais = painel.querySelector('[data-mais]');
    async function carregar(reset) {
      if (reset) { antes = null; ultimoDia = null; alvo.innerHTML = '<p class="adm-vazio">Carregando…</p>'; }
      try {
        const { registros } = await pedir('admin/historico', { usuario_id: painel.querySelector('[data-f="u"]').value || undefined, acao: painel.querySelector('[data-f="a"]').value || undefined, antes: antes || undefined, limite: 100 });
        if (reset) alvo.innerHTML = '';
        if (!registros.length && !antes) { alvo.innerHTML = '<p class="adm-vazio">Nada registrado com este filtro.</p>'; mais.hidden = true; return; }
        for (const r of registros) {
          const d = dia(r.em);
          if (d !== ultimoDia) { alvo.insertAdjacentHTML('beforeend', `<h3 class="adm-dia" translate="no">${esc(tituloDia(r.em))}</h3><ol></ol>`); ultimoDia = d; }
          const det = detalhe(r.detalhes);
          alvo.lastElementChild.insertAdjacentHTML('beforeend', `<li class="adm-ev g-${GRUPO(r.acao)}"><span class="adm-ev-hora" translate="no">${esc(hhmm(r.em))}</span><span class="adm-ev-ponto" aria-hidden="true"></span>
            <div class="adm-ev-corpo"><b>${esc(ACOES[r.acao] || r.acao)}</b>${r.usuario ? ` <span class="adm-ev-quem" translate="no">${esc(r.usuario)}</span>` : ''}${r.ator && r.ator !== r.usuario ? ` <small>por <span translate="no">${esc(r.ator)}</span></small>` : ''}
            ${det ? `<p>${esc(det)}</p>` : ''}${r.ip ? `<small class="adm-ev-ip" translate="no">${esc(r.ip)}</small>` : ''}</div></li>`);
        }
        antes = registros.length ? registros[registros.length - 1].id : antes; mais.hidden = registros.length < 100;
      } catch (e) { avisar(e.message, false); }
    }
    painel.querySelectorAll('[data-f]').forEach(sel => sel.addEventListener('change', () => carregar(true)));
    mais.addEventListener('click', () => carregar(false));
    carregar(true);
  }
  const detalhe = d => !d ? '' : d.motivos && d.nivel ? `${NIVEL[d.nivel] || d.nivel} · ${d.pontos} pontos · ` + d.motivos.join(' ')
    : d.caracteres ? `${Number(d.caracteres).toLocaleString('pt-BR')} caracteres · ${d.pagina || ''}`
    : d.ferramenta ? [FERRAMENTAS[d.ferramenta] || d.ferramenta, d.pagina, (d.execucoes || 1) + (d.execucoes > 1 ? ' execuções' : ' execução'), d.execucoes > 1 ? 'última às ' + hhmm(d.ultima) : ''].filter(Boolean).join(' · ')
    : d.titulo !== undefined && d.pagina !== undefined ? [d.titulo, d.ref, d.versao, d.arquivo, d.pagina].filter(Boolean).join(' · ')
    : d.mudancas ? `v${d.versao}: ` + d.mudancas.join('; ') : Object.entries(d).map(([k, v]) => `${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`).join(' · ');

  resumo().then(() => irPara(aba));
})();
