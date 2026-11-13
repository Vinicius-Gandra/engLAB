/* Página de acesso: aceitar convite (senha + aplicativo autenticador), entrar e "Minha conta". */
(function () {
  'use strict';
  const S = window.Sessao, app = document.getElementById('app');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const primeiro = nome => String(nome || '').trim().split(/\s+/)[0] || '';
  // volta só para páginas dos laboratórios do site (offshore ou máquinas elétricas)
  const voltaParam = new URLSearchParams(location.search).get('volta');
  const volta = voltaParam && /^(\.\.\/maquinas-eletricas\/)?[\w-]+\.html$/.test(voltaParam) ? voltaParam : null;
  // laboratórios do login compartilhado: onde cada um começa
  const LABS = { offshore: ['Laboratório offshore', '01-lancamento.html'], maquinas: ['Máquinas elétricas', '../maquinas-eletricas/'] };
  const labsDe = u => (u && Array.isArray(u.labs) ? u.labs : ['offshore']).filter(l => LABS[l]);
  // o token do convite fica só na memória da página
  let convite = null; { const m = location.hash.match(/convite=([\w-]{30,80})/); if (m) { convite = m[1]; try { history.replaceState(null, '', location.pathname + location.search); } catch (_) { /* sem histórico */ } } }

  const svg = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
  const IC = {
    email: svg('M3 6h18v12H3zM3 7l9 6 9-6'),
    senha: svg('M6 11h12v10H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 15v2.5'),
    codigo: svg('M12 2.5 4.5 5.5v6c0 4.6 3.1 8.6 7.5 10 4.4-1.4 7.5-5.4 7.5-10v-6zM9 12l2 2 4-4'),
    pessoa: svg('M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 21a7.5 7.5 0 0 1 15 0'),
    empresa: svg('M4 21V6l8-3 8 3v15M4 21h16M9 21v-5h6v5M8 9h1M15 9h1M8 13h1M15 13h1'),
    pasta: svg('M3 6.5h6l2 2.2h10V19H3z'),
    doc: svg('M6 2.5h8l5 5V21.5H6zM14 2.5V7.5h5M9 12.5h7M9 16h7'),
    camera: svg('M4 8h3l2-3h6l2 3h3v11H4zM12 16.5a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z'),
    sair: svg('M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10'),
    admin: svg('M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2.5 21a6.5 6.5 0 0 1 13 0M18 8v6M15 11h6'),
    lab: svg('M9 3h6M10 3v6l-5.5 9.5A1.6 1.6 0 0 0 5.9 21h12.2a1.6 1.6 0 0 0 1.4-2.5L14 9V3'),
    tela: svg('M3 4.5h18v11H3zM8.5 20h7M12 15.5V20'),
    celular: svg('M7.5 2h9v20h-9zM11 18.5h2'),
    seta: svg('M9 5l7 7-7 7'),
    silhueta: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M50 22c-11 0-18 8.5-18 20 0 8.5 3.8 16 8.5 19.6v5.6C27 70 16 77 14 100h72c-2-23-13-30-26.5-32.8v-5.6C64.2 58 68 50.5 68 42c0-11.5-7-20-18-20z"/></svg>'
  };

  /* ------------------------------------------------------------- utilidades */
  function tela(html, foco) { pararEntrada(); document.body.className = 'v-pagina'; window.onhashchange = null; app.innerHTML = html; if (app.querySelector('.ve')) ligarEntrada(); app.querySelectorAll('[data-pedir]').forEach(b => b.addEventListener('click', () => telaPedir())); const f = app.querySelector(foco || 'input:not([type=hidden]):not([hidden])'); if (f) f.focus(); }
  function aviso(msg, tipo) { const e = app.querySelector('[data-msg]'); if (!e) return; e.className = e.dataset.msg + ' ' + (tipo || 'erro'); e.textContent = msg; e.hidden = !msg; }
  // campo inválido: borda vermelha e um tremor curto
  function marcar(c) { c.classList.remove('invalido'); void c.offsetWidth; c.classList.add('invalido'); }
  function enviar(form, fn) {
    form.addEventListener('submit', async ev => {
      ev.preventDefault(); const b = form.querySelector('button[type="submit"]'); if (b) { b.disabled = true; b.classList.add('carregando'); } aviso('');
      try { await fn(new FormData(form)); }
      catch (e) { aviso(e.message); const ss = form.querySelectorAll('input[data-senha]'), i = ss.length ? ss[ss.length - 1] : form.querySelector('input:not([type=hidden]):not([hidden]):not([type=file])'); if (i) { const c = i.closest('.v-campo'); if (c) marcar(c); i.focus(); } }
      finally { if (b && b.isConnected) { b.disabled = false; b.classList.remove('carregando'); } }
    });
    form.addEventListener('input', ev => { const c = ev.target.closest && ev.target.closest('.v-campo'); if (c) c.classList.remove('invalido'); });
  }
  // campo com rótulo que sobe ao digitar; senha com botão de mostrar e aviso de Caps Lock
  let nCampo = 0;
  const OLHO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><path class="ve-risco" d="M4 4l16 16"/></svg>';
  const campo = (nome, icone, rotulo, extra) => {
    const id = 've-c' + (++nCampo), senha = /data-senha/.test(extra || '');
    return `<div class="v-campo ve-campo"><input id="${id}" name="${nome}" placeholder=" " ${extra || ''}><label for="${id}">${rotulo}</label>${senha ? `<button type="button" class="ve-ico ve-olho" data-olho aria-label="Mostrar senha" aria-pressed="false">${OLHO}</button>` : `<span class="ve-ico">${IC[icone]}</span>`}</div>${senha ? '<p class="ve-caps" data-caps hidden><span aria-hidden="true">⇪</span> Caps Lock está ativado</p>' : ''}`;
  };
  function ligarMostrar() {
    app.querySelectorAll('[data-olho]').forEach(b => b.addEventListener('click', () => {
      const i = b.parentNode.querySelector('input'), ver = i.type === 'password';
      i.type = ver ? 'text' : 'password'; b.setAttribute('aria-pressed', String(ver)); b.setAttribute('aria-label', ver ? 'Ocultar senha' : 'Mostrar senha'); b.classList.toggle('on', ver); i.focus();
    }));
    app.querySelectorAll('input[data-senha]').forEach(i => {
      const caps = i.closest('.v-campo').nextElementSibling;
      const ver = e => { if (caps && caps.hasAttribute('data-caps') && e.getModifierState) caps.hidden = !e.getModifierState('CapsLock'); };
      i.addEventListener('keyup', ver); i.addEventListener('keydown', ver); i.addEventListener('blur', () => { if (caps && caps.hasAttribute('data-caps')) caps.hidden = true; });
    });
  }
  const botao = rotulo => `<button class="ve-sub" type="submit"><span class="ve-sub-t">${rotulo}</span><span class="ve-sp" aria-hidden="true"></span></button>`;
  const CADEADO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 11h12v10H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3"/></svg>';
  const TEMA = '<svg class="ve-sol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg><svg class="ve-lua" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/></svg>';
  // tela de entrada: painel da plataforma à esquerda, cartão à direita
  const cartao = (topo, corpo) => `<div class="ve">
    <aside class="ve-hero">
      <canvas class="ve-rede" aria-hidden="true"></canvas>
      <a class="ve-marca" href="../"><span class="ve-logo" aria-hidden="true">EL</span>EngenhaLab <b>Labs</b></a>
      <div class="ve-meio">
        <p class="ve-olhado">Plataforma de engenharia</p>
        <p class="ve-h">Laboratórios de <em>engenharia.</em></p>
        <div class="ve-vit" data-vit>
          <div class="ve-vit-card">
            <div class="ve-vit-top"><span class="ve-vit-n" data-vn></span><span class="ve-st" data-vs></span></div>
            <div class="ve-vit-fig" data-vf aria-hidden="true"></div>
            <div class="ve-vit-txt"><b data-vt></b><p data-vd></p></div>
          </div>
          <div class="ve-vit-abas" role="tablist" aria-label="Laboratórios" data-va></div>
        </div>
      </div>
      <div class="ve-term" data-term translate="no" aria-hidden="true"><div class="ve-term-h"><b></b><b></b><b></b></div></div>
    </aside>
    <section class="ve-auth">
      <div class="ve-topo s-actions"><button type="button" class="ve-tema" data-tema-entrada aria-label="Alternar tema claro/escuro" title="Alternar tema claro/escuro">${TEMA}</button></div>
      <div class="ve-centro"><div class="ve-card">${topo}<p class="v-msg" data-msg="v-msg" hidden></p>${corpo}
        <div class="ve-sec">${CADEADO}<span>Entradas e tentativas ficam registradas no histórico de auditoria, com data e IP.</span></div></div></div>
      <footer class="ve-rodape" data-rodape><span>Acesso somente por convite.</span> <button type="button" class="ve-link" data-pedir>Solicitar acesso</button></footer>
    </section>
  </div>`;
  const titulo = (t, sub, extra) => `${extra || ''}<h1 class="ve-tit">${t}</h1>${sub ? `<p class="ve-subt">${sub}</p>` : ''}`;

  /* ------------------------------------------------- animações do painel de entrada */
  let paradas = [];
  function pararEntrada() { paradas.forEach(f => f()); paradas = []; }
  function ligarEntrada() {
    const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches, en = !(window.Idioma && window.Idioma.lang === 'pt');
    const tb = app.querySelector('[data-tema-entrada]');
    if (tb) tb.addEventListener('click', () => { const r = document.documentElement, t = r.dataset.theme === 'light' ? 'dark' : 'light'; r.dataset.theme = t; try { localStorage.setItem('vg-theme', t); } catch (_) { /* sem armazenamento */ } });
    // vitrine: uma figura animada por laboratório, trocando sozinha (para quando o mouse está em cima)
    const vit = app.querySelector('[data-vit]'), V = window.VitrineLabs;
    if (vit && V) {
      const abas = vit.querySelector('[data-va]'), fig = vit.querySelector('[data-vf]'), DUR = 7000;
      abas.innerHTML = V.LABS.map((l, k) => `<button type="button" role="tab" data-k="${k}" aria-selected="false" aria-label="${esc(l.t)}"><span class="ve-aba-n">${l.n}</span><span class="ve-aba-t" translate="no">${esc(l.c[en ? 1 : 0])}</span><i><u></u></i></button>`).join('');
      let atual = -1, parar = null, ini = 0, pausa = false, falta = DUR, raf = 0, troca = 0;
      const mostrar = k => {
        if (k === atual) return; atual = k; const l = V.LABS[k];
        vit.dataset.lab = l.id;
        abas.querySelectorAll('button').forEach((b, j) => { b.setAttribute('aria-selected', String(j === k)); b.classList.toggle('feito', j < k); });
        vit.classList.add('saindo'); clearTimeout(troca);
        troca = setTimeout(() => {
          if (parar) parar(); parar = null;
          vit.querySelector('[data-vn]').textContent = l.n;
          const st = vit.querySelector('[data-vs]'); st.textContent = l.aberto ? 'Aberto' : 'Em preparação'; st.classList.toggle('aberto', l.aberto);
          vit.querySelector('[data-vt]').textContent = l.t; vit.querySelector('[data-vd]').textContent = l.d;
          try { parar = V.montar(fig, k); } catch (e) { fig.innerHTML = ''; }
          vit.classList.remove('saindo');
        }, calmo ? 0 : 220);
        ini = performance.now(); falta = DUR;
      };
      const barra = () => {
        const b = abas.querySelector('[aria-selected="true"] u');
        if (!pausa) { const p = Math.min(1, 1 - (falta - (performance.now() - ini)) / DUR); if (b) b.style.transform = `scaleX(${p.toFixed(3)})`; if (p >= 1) mostrar((atual + 1) % V.LABS.length); }
        raf = requestAnimationFrame(barra);
      };
      abas.addEventListener('click', e => { const b = e.target.closest('[data-k]'); if (b) mostrar(+b.dataset.k); });
      vit.addEventListener('mouseenter', () => { pausa = true; falta -= performance.now() - ini; vit.classList.add('pausa'); });
      vit.addEventListener('mouseleave', () => { pausa = false; ini = performance.now(); vit.classList.remove('pausa'); });
      mostrar(0);
      if (!calmo) raf = requestAnimationFrame(barra);
      paradas.push(() => { cancelAnimationFrame(raf); clearTimeout(troca); if (parar) parar(); });
    }
    // registro da plataforma: só o que de fato acontece no acesso
    const term = app.querySelector('[data-term]');
    if (term) {
      const https = location.protocol === 'https:';
      const L = en ? [
        `<em>[auth]</em> password + authenticator code <s>2 steps</s>`,
        `<em>[tls]</em> ${https ? 'HTTPS connection <s>ok</s>' : 'local connection (HTTP)'}`,
        `<em>[sess]</em> HttpOnly cookie · SameSite=Strict <s>ok</s>`,
        `<em>[guard]</em> 5 failed attempts → 15 min lockout <s>on</s>`,
        `<em>[audit]</em> sign-in, calculations and reports → history <s>on</s>`,
        `<em>[labs]</em> offshore · electrical machines`
      ] : [
        `<em>[auth]</em> senha + código do aplicativo <s>2 etapas</s>`,
        `<em>[tls]</em> ${https ? 'conexão HTTPS <s>ok</s>' : 'conexão local (HTTP)'}`,
        `<em>[sess]</em> cookie HttpOnly · SameSite=Strict <s>ok</s>`,
        `<em>[guard]</em> 5 tentativas erradas → bloqueio de 15 min <s>ativo</s>`,
        `<em>[audit]</em> entradas, cálculos e relatórios → histórico <s>ativo</s>`,
        `<em>[labs]</em> offshore · máquinas elétricas`
      ];
      let li = 0;
      const linha = () => { const p = document.createElement('p'); const h = new Date().toTimeString().slice(0, 8); p.innerHTML = `<span class="ve-hora">${h}</span> ${L[li++ % L.length]}`; term.appendChild(p); while (term.children.length > 6) term.children[1].remove(); };
      if (calmo) for (let k = 0; k < 5; k++) linha(); else { linha(); const iv = setInterval(linha, 1500); paradas.push(() => clearInterval(iv)); }
    }
    // rede de pontos atrás do texto
    const cv = app.querySelector('.ve-rede');
    if (cv && !calmo && getComputedStyle(cv.parentNode).display !== 'none') {
      const cx = cv.getContext('2d'); let P = [], M = { x: -999, y: -999 }, raf = 0, W = 0, H = 0;
      const cor = () => getComputedStyle(cv).getPropertyValue('--ve-ponto').trim() || '245,173,105';
      let rgb = cor();
      const medir = () => { const r = cv.getBoundingClientRect(), d = devicePixelRatio || 1; W = r.width; H = r.height; cv.width = W * d; cv.height = H * d; cx.setTransform(d, 0, 0, d, 0, 0);
        P = Array.from({ length: Math.min(70, W * H / 12000 | 0) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3, h: Math.random() < .12 })); rgb = cor(); };
      const mover = e => { const r = cv.getBoundingClientRect(); M = { x: e.clientX - r.left, y: e.clientY - r.top }; };
      const desenhar = () => {
        cx.clearRect(0, 0, W, H);
        for (const p of P) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1; const dx = M.x - p.x, dy = M.y - p.y; if (Math.hypot(dx, dy) < 140) { p.x += dx * .004; p.y += dy * .004; } }
        for (let a = 0; a < P.length; a++) for (let b = a + 1; b < P.length; b++) { const d = Math.hypot(P[a].x - P[b].x, P[a].y - P[b].y); if (d < 130) { cx.strokeStyle = `rgba(${rgb},${(1 - d / 130) * .2})`; cx.beginPath(); cx.moveTo(P[a].x, P[a].y); cx.lineTo(P[b].x, P[b].y); cx.stroke(); } }
        for (const p of P) { cx.fillStyle = p.h ? `rgb(${rgb})` : 'rgba(125,138,156,.6)'; cx.beginPath(); cx.arc(p.x, p.y, p.h ? 2.6 : 1.4, 0, 7); cx.fill();
          if (p.h) { cx.strokeStyle = `rgba(${rgb},.28)`; cx.beginPath(); cx.arc(p.x, p.y, 7 + Math.sin(Date.now() / 400) * 2, 0, 7); cx.stroke(); } }
        raf = requestAnimationFrame(desenhar);
      };
      medir(); desenhar(); addEventListener('resize', medir); cv.parentNode.addEventListener('mousemove', mover);
      const obs = new MutationObserver(() => { rgb = cor(); }); obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
      paradas.push(() => { cancelAnimationFrame(raf); removeEventListener('resize', medir); obs.disconnect(); });
    }
    // brilho que segue o mouse na borda do cartão
    const card = app.querySelector('.ve-card');
    if (card) card.addEventListener('mousemove', e => { const r = card.getBoundingClientRect(); card.style.setProperty('--mx', e.clientX - r.left + 'px'); card.style.setProperty('--my', e.clientY - r.top + 'px'); });
  }
  function entrou(s, primeiraVez) {
    S.guardar({ sessao: s.sessao, expira: s.expira, usuario: s.usuario });
    if (volta && !primeiraVez) location.href = volta;
    else { history.replaceState(null, '', location.pathname + (primeiraVez ? '#perfil' : '')); minhaConta(primeiraVez); }
  }

  /* ------------------------------------------------------------- convite */
  async function fluxoConvite() {
    let info;
    try { info = await S.pedir('conta/convite', { token: convite }, { auth: false }); }
    catch (e) { tela(cartao(titulo('Convite indisponível', esc(e.message)), '<a class="ve-sub ve-sub-link" href="conta.html"><span class="ve-sub-t">Ir para o login</span></a>')); return; }
    const redefinir = info.tipo === 'redefinir';
    tela(cartao(titulo(redefinir ? 'Nova senha' : `Bem-vindo, ${esc(primeiro(info.nome))}`, `${redefinir ? 'Defina uma nova senha para sua conta.' : 'Crie sua senha para ativar o acesso.'}<br><span class="ve-email">${esc(info.email)}</span>`, `<div class="ve-quem">${S.avatar({ nome: info.nome }, 've-av')}<span class="ve-passo">Etapa 1 de 2</span></div>`),
      `<form novalidate><input type="email" name="email" value="${esc(info.email)}" autocomplete="username" hidden>
        ${campo('senha', 'senha', 'Nova senha', 'type="password" data-senha autocomplete="new-password" minlength="12" maxlength="128" required')}
        ${campo('senha2', 'senha', 'Confirmar senha', 'type="password" data-senha autocomplete="new-password" maxlength="128" required')}
        <p class="ve-dica">Mínimo de 12 caracteres. Uma frase longa é mais segura e fácil de lembrar.</p>
        ${botao('Continuar')}</form>`));
    ligarMostrar();
    enviar(app.querySelector('form'), async fd => {
      if (fd.get('senha') !== fd.get('senha2')) throw new Error('As senhas não coincidem.');
      const r = await S.pedir('conta/definir-senha', { token: convite, senha: fd.get('senha') }, { auth: false });
      etapaCodigo(r);
    });
  }
  function qrSvg(texto) { const q = window.qrcode(0, 'M'); q.addData(texto); q.make(); return q.createSvgTag({ cellSize: 4, margin: 2, scalable: true }); }
  function etapaCodigo(r) {
    tela(cartao(titulo('Verificação em duas etapas', 'Leia o código com o Google Authenticator, Microsoft Authenticator ou 1Password.', '<div class="ve-quem"><span></span><span class="ve-passo">Etapa 2 de 2</span></div>'),
      `<div class="ve-qr" role="img" aria-label="Código QR para o aplicativo autenticador">${qrSvg(r.otpauth)}</div>
        <details class="ve-chave"><summary>Não consegue ler? Digite a chave</summary><code>${esc(r.segredo.replace(/(.{4})/g, '$1 ').trim())}</code></details>
        <form novalidate>${campo('codigo', 'codigo', 'Código de 6 dígitos', 'class="ve-num" inputmode="numeric" autocomplete="one-time-code" maxlength="6" pattern="[0-9]{6}" required')}
        ${botao('Ativar acesso')}</form>`), 'input[name=codigo]');
    enviar(app.querySelector('form'), async fd => { const s = await S.pedir('conta/ativar', { token: convite, codigo: fd.get('codigo') }, { auth: false }); convite = null; entrou(s, true); });
  }

  /* ------------------------------------------------------------- entrar */
  function telaEntrar(msg, emailPre) {
    tela(cartao(titulo('Bem-vindo de volta', 'Entre para acessar seus laboratórios.'),
      `<form novalidate>${campo('email', 'email', 'E-mail', `type="email" autocomplete="username" required maxlength="160" value="${esc(emailPre || '')}"`)}
        ${campo('senha', 'senha', 'Senha', 'type="password" data-senha autocomplete="current-password" required maxlength="128"')}
        <div class="ve-linha"><span></span><button type="button" class="ve-link" data-esqueci>Esqueceu a senha?</button></div>
        ${botao('Entrar')}</form>
        <div class="ve-ou"><span>Ainda não tem acesso?</span></div>
        <button type="button" class="ve-pedir" data-pedir><span class="ve-pedir-ic" aria-hidden="true">${IC.pessoa}</span><span class="ve-pedir-t"><b>Solicitar acesso</b><small>Preencha um formulário curto e receba o convite por e-mail.</small></span><span class="ve-pedir-seta" aria-hidden="true">${IC.seta}</span></button>`), emailPre ? 'input[name=senha]' : null);
    if (msg) aviso(msg, 'ok');
    ligarMostrar();
    app.querySelector('[data-esqueci]').addEventListener('click', () => aviso('Peça ao administrador um novo link de acesso. Por segurança, a senha não é redefinida por e-mail.', 'info'));
    enviar(app.querySelector('form'), async fd => {
      const email = String(fd.get('email') || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Digite um e-mail válido.');
      if (!fd.get('senha')) { const c = app.querySelector('input[name=senha]').closest('.v-campo'); marcar(c); app.querySelector('input[name=senha]').focus(); aviso('Digite a senha.'); return; }
      const r = await S.pedir('conta/entrar', { email, senha: fd.get('senha') }, { auth: false });
      telaDoisFatores(email, r.desafio);
    });
  }
  function telaDoisFatores(email, desafio) {
    tela(cartao(titulo('Confirme que é você', `Digite o código de 6 dígitos do aplicativo autenticador.<br><span class="ve-email">${esc(email)}</span>`, `<div class="ve-quem"><span class="ve-av-ic">${IC.celular}</span><span class="ve-passo">Etapa 2 de 2</span></div>`),
      `<form novalidate>${campo('codigo', 'codigo', 'Código', 'class="ve-num" inputmode="numeric" autocomplete="one-time-code" maxlength="6" required')}
        <div class="ve-linha"><button type="button" class="ve-link" data-voltar>← Usar outra conta</button><span></span></div>
        ${botao('Verificar')}</form>`), 'input[name=codigo]');
    app.querySelector('[data-voltar]').addEventListener('click', () => telaEntrar('', email));
    enviar(app.querySelector('form'), async fd => entrou(await S.pedir('conta/codigo', { desafio, codigo: fd.get('codigo') }, { auth: false })));
  }


  /* ------------------------------------------------------- pedido de acesso */
  // troca de tela com transição suave quando o navegador permite (View Transitions)
  function transicao(fn) {
    const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (document.startViewTransition && !calmo) document.startViewTransition(fn); else fn();
  }
  const MARCA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';
  const RASCUNHO = 'engenha-pedido-rascunho';
  function telaPedir() {
    const t0 = performance.now();
    let salvo = {}; try { salvo = JSON.parse(sessionStorage.getItem(RASCUNHO) || '{}') || {}; } catch (_) { salvo = {}; }
    const labs0 = Array.isArray(salvo.labs) ? salvo.labs : volta ? [/maquinas/.test(volta) ? 'maquinas' : 'offshore'] : [];
    const val = k => salvo[k] ? ` value="${esc(salvo[k])}"` : '';
    const chip = (k, t, d) => `<label class="ve-chip"><input type="checkbox" name="labs" value="${k}"${labs0.includes(k) ? ' checked' : ''}><span class="ve-chip-c"><b>${t}</b><small>${d}</small></span><span class="ve-chip-v" aria-hidden="true">${MARCA}</span></label>`;
    transicao(() => {
      tela(cartao(titulo('Solicitar acesso', 'Conte quem você é e quais laboratórios quer usar. O pedido vai para o administrador, que libera o acesso e envia o convite para o seu e-mail.', `<div class="ve-quem"><span class="ve-av-ic">${IC.pessoa}</span><span class="ve-passo">Pedido de acesso</span></div>`),
        `<form novalidate class="ve-pedido">
          ${campo('nome', 'pessoa', 'Nome completo', `autocomplete="name" required minlength="2" maxlength="80"${val('nome')}`)}
          ${campo('email', 'email', 'E-mail', `type="email" autocomplete="email" required maxlength="160"${val('email')}`)}
          <div class="ve-par">${campo('telefone', 'celular', 'WhatsApp (opcional)', `type="tel" autocomplete="tel" inputmode="tel" maxlength="40"${val('telefone')}`)}${campo('empresa', 'empresa', 'Empresa (opcional)', `autocomplete="organization" maxlength="120"${val('empresa')}`)}</div>
          <fieldset class="ve-labs"><legend>Laboratórios de interesse</legend><div class="ve-chips">${chip('offshore', 'Offshore', 'Estacas torpedo e ancoragem')}${chip('maquinas', 'Máquinas elétricas', 'Geradores e motores síncronos')}</div></fieldset>
          <div class="v-campo ve-campo ve-area"><textarea id="ve-motivo" name="motivo" placeholder=" " maxlength="600" rows="3">${esc(salvo.motivo || '')}</textarea><label for="ve-motivo">Como pretende usar (opcional)</label><span class="ve-cont" translate="no" aria-hidden="true">0/600</span></div>
          <div class="ve-mel" aria-hidden="true"><label>Site <input name="site" tabindex="-1" autocomplete="off"></label></div>
          <label class="ve-aceite"><input type="checkbox" name="consentimento"><span class="ve-aceite-c" aria-hidden="true">${MARCA}</span><span>Concordo que estes dados sejam usados só para analisar o pedido. <a href="../privacidade.html" target="_blank" rel="noopener">Privacidade</a></span></label>
          ${botao('Enviar pedido')}
        </form>`), 'input[name=nome]');
      const rod = app.querySelector('[data-rodape]');
      if (rod) rod.innerHTML = '<span>Já tem acesso?</span> <button type="button" class="ve-link" data-voltar-login>Entrar</button>';
      ligar();
    });
    function ligar() {
      const f = app.querySelector('form.ve-pedido'), area = f.motivo, cont = f.querySelector('.ve-cont');
      const contar = () => { cont.textContent = `${area.value.length}/600`; cont.classList.toggle('perto', area.value.length > 540); };
      contar(); area.addEventListener('input', contar);
      // rascunho só nesta aba: quem volta ao login e retorna não perde o que escreveu
      const guardar = () => { const fd = new FormData(f); try { sessionStorage.setItem(RASCUNHO, JSON.stringify({ nome: fd.get('nome'), email: fd.get('email'), telefone: fd.get('telefone'), empresa: fd.get('empresa'), motivo: fd.get('motivo'), labs: fd.getAll('labs') })); } catch (_) { /* sem armazenamento */ } };
      f.addEventListener('input', e => { guardar(); const c = e.target.closest && e.target.closest('.v-campo, .ve-labs, .ve-aceite'); if (c) c.classList.remove('invalido'); });
      app.querySelector('[data-voltar-login]').addEventListener('click', () => transicao(() => telaEntrar('', String(new FormData(f).get('email') || '').trim())));
      const erro = (el, msg) => { const c = el.closest('.v-campo, .ve-labs, .ve-aceite') || el; marcar(c); (el.focus ? el : c).focus(); aviso(msg); };
      f.addEventListener('submit', async ev => {
        ev.preventDefault(); aviso('');
        const fd = new FormData(f), nome = String(fd.get('nome') || '').trim(), email = String(fd.get('email') || '').trim(), labs = fd.getAll('labs');
        if (nome.length < 2) return erro(f.nome, 'Informe o seu nome.');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return erro(f.email, 'Digite um e-mail válido.');
        if (!labs.length) return erro(f.querySelector('input[name=labs]'), 'Escolha pelo menos um laboratório.');
        if (!f.consentimento.checked) return erro(f.consentimento, 'Confirme que concorda com o uso dos dados para analisar o pedido.');
        const b = f.querySelector('button[type=submit]'); b.disabled = true; b.classList.add('carregando');
        try {
          await S.pedir('conta/pedir-acesso', { nome, email, telefone: String(fd.get('telefone') || '').trim(), empresa: String(fd.get('empresa') || '').trim(), motivo: String(fd.get('motivo') || '').trim(), labs, consentimento: true, site: String(fd.get('site') || ''), t: Math.round(performance.now() - t0), idioma: window.Idioma && window.Idioma.lang === 'en' ? 'en' : 'pt' }, { auth: false });
          try { sessionStorage.removeItem(RASCUNHO); } catch (_) { /* sem armazenamento */ }
          transicao(() => telaPedidoEnviado(email));
        } catch (e) { aviso(e.message || 'Não foi possível enviar agora. Tente de novo em instantes.'); }
        finally { if (b.isConnected) { b.disabled = false; b.classList.remove('carregando'); } }
      });
    }
  }
  function telaPedidoEnviado(email) {
    tela(cartao(titulo('Pedido enviado', `Assim que o acesso for liberado, o convite chega em <span class="ve-email">${esc(email)}</span>`, `<div class="ve-feito" aria-hidden="true">${MARCA}</div>`),
      `<ol class="ve-proximos">
        <li><b>Análise</b><span>O administrador confere o pedido.</span></li>
        <li><b>Convite</b><span>Você recebe um link de uso único para criar a senha.</span></li>
        <li><b>Acesso</b><span>Com o aplicativo autenticador, você entra nos laboratórios liberados.</span></li>
      </ol>
      <button type="button" class="ve-sub" data-voltar-login><span class="ve-sub-t">Voltar ao login</span></button>`));
    const rod = app.querySelector('[data-rodape]'); if (rod) rod.innerHTML = '<span>Se enviar outro pedido com o mesmo e-mail, o anterior é atualizado.</span>';
    app.querySelector('[data-voltar-login]').addEventListener('click', () => transicao(() => telaEntrar('', email)));
  }

  /* ------------------------------------------------------------- diálogo */
  function dialogo({ titulo, texto, valor, confirmar, perigo }) {
    return new Promise(resolve => {
      const d = document.createElement('dialog'); d.className = 'c-dialogo';
      d.innerHTML = `<form method="dialog"><span class="eyebrow">Confirmação</span><h2>${esc(titulo)}</h2>${texto ? `<p>${esc(texto)}</p>` : ''}${valor != null ? `<label class="c-dial-campo">Nome<input name="valor" maxlength="80" value="${esc(valor)}"></label>` : ''}
        <div class="c-dial-botoes"><button class="button ghost" value="nao" type="submit">Cancelar</button><button class="button primary${perigo ? ' c-perigo' : ''}" value="sim" type="submit">${esc(confirmar || 'OK')}</button></div></form>`;
      document.body.appendChild(d);
      d.addEventListener('close', () => { const ok = d.returnValue === 'sim', i = d.querySelector('input'); const v = i ? i.value.trim() : true; d.remove(); resolve(ok ? v : null); });
      d.showModal(); const i = d.querySelector('input'); if (i) { i.focus(); i.select(); }
    });
  }

  // sair: escolha clara sobre os parâmetros do estudo que ficaram neste navegador
  function escolherSaida() {
    return new Promise(resolve => {
      const d = document.createElement('dialog'); d.className = 'c-dialogo';
      d.innerHTML = `<form method="dialog"><span class="eyebrow">Sair da conta</span><h2>Apagar os dados do estudo deste navegador?</h2>
        <p>Os parâmetros que você usou nas páginas do laboratório ficam guardados neste navegador e apareceriam para quem abrir o site depois, neste mesmo perfil. Os projetos e memoriais salvos no servidor não são afetados.</p>
        <div class="c-dial-botoes c-dial-sair"><button class="button ghost" value="cancelar" type="submit">Cancelar</button><button class="button ghost" value="manter" type="submit">Sair e manter</button><button class="button primary" value="apagar" type="submit" autofocus>Sair e apagar</button></div></form>`;
      document.body.appendChild(d);
      d.addEventListener('close', () => { const v = d.returnValue; d.remove(); resolve(v === 'apagar' || v === 'manter' ? v : null); });
      d.showModal();
    });
  }

  /* ------------------------------------------------------------- foto: recorte quadrado de 160 px */
  async function reduzirImagem(arquivo) {
    if (!/^image\//.test(arquivo.type)) throw new Error('Escolha um arquivo de imagem.');
    if (arquivo.size > 15e6) throw new Error('Imagem muito grande. Use uma de até 15 MB.');
    let bmp; try { bmp = await createImageBitmap(arquivo); } catch (_) { throw new Error('Não consegui abrir esta imagem. Tente JPG ou PNG.'); }
    const lado = Math.min(bmp.width, bmp.height), c = document.createElement('canvas'); c.width = c.height = 160;
    const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, 160, 160);
    g.drawImage(bmp, (bmp.width - lado) / 2, (bmp.height - lado) / 2, lado, lado, 0, 0, 160, 160);
    for (const q of [0.86, 0.75, 0.6, 0.45]) {
      let url = c.toDataURL('image/webp', q); if (!url.startsWith('data:image/webp')) url = c.toDataURL('image/jpeg', q);
      if (url.length <= 58000) return url;
    }
    throw new Error('Não consegui reduzir a imagem. Tente outra.');
  }

  /* ------------------------------------------------------------- minha conta (painel no padrão do laboratório) */
  const SECOES = [['perfil', 'Perfil', 'Identidade e assinatura'], ['projetos', 'Projetos', 'Estudos salvos'], ['memoriais', 'Memoriais', 'Documentos emitidos'], ['seguranca', 'Segurança', 'Acesso e dispositivos']];
  const ETAPAS = [['./', '00', 'Visão geral'], ['01-lancamento.html', '01', 'Lançamento e cravação'], ['02-catenaria.html', '02', 'Catenária'], ['03-capacidade-axial.html', '03', 'Capacidade axial'], ['04-carga-lateral.html', '04', 'Carga lateral'], ['05-estaca-3d.html', '05', 'Torpedo 3D']];
  const cache = {};
  function aparelho(ua) {
    ua = String(ua || '');
    const nav = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /Firefox\//.test(ua) ? 'Firefox' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : 'Navegador';
    const so = /iPhone/.test(ua) ? 'iPhone' : /iPad/.test(ua) ? 'iPad' : /Android/.test(ua) ? 'Android' : /Mac OS X|Macintosh/.test(ua) ? 'macOS' : /Windows/.test(ua) ? 'Windows' : /Linux/.test(ua) ? 'Linux' : '';
    return { nome: so ? `${nav} no ${so}` : nav, movel: /iPhone|Android|iPad|Mobile/.test(ua) };
  }
  let SECS = SECOES;
  const secaoAtual = () => { const h = location.hash.replace('#', ''); return SECS.some(s => s[0] === h) ? h : 'perfil'; };
  const qtd = (n, um, varios) => `${n} ${n === 1 ? um : varios}`;
  const dataCurta = t => t ? new Date(t * 1000).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).replace('.', '') : '—';
  const hora = t => t ? new Date(t * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '';

  // estado do segundo fator como o servidor informa; sem resposta, não afirma nada
  const estadoFator = (u, sim, nao) => u.segundo_fator === true ? `<strong class="c-ok">${sim}</strong>` : u.segundo_fator === false ? `<strong class="c-ruim">${nao}</strong>` : '<strong class="c-indef">Não confirmado</strong>';

  async function minhaConta(primeiraVez) {
    pararEntrada();
    const s = S.sessao(); if (!s) return telaEntrar();
    let u = s.usuario; const admin = u.papel === 'admin';
    try { const r = await S.pedir('conta/eu'); u = r.usuario; S.guardar({ ...S.sessao(), usuario: u }); } catch (e) { if (e.sessao === false) { S.sair(); return telaEntrar(e.message); } }
    // projetos e memoriais são do offshore; a conta mostra os laboratórios liberados para ela
    const labs = labsDe(u), temOff = labs.includes('offshore');
    SECS = temOff ? SECOES : SECOES.filter(x => x[0] !== 'projetos' && x[0] !== 'memoriais');
    document.body.className = 'c-pagina';
    app.innerHTML = `<a class="skip" href="#conteudo">Pular para o conteúdo</a>
      <header class="s-appbar">
        <a class="s-brand" href="../" aria-label="EngenhaLab — todos os laboratórios">VG<b>.</b></a>
        <a class="s-back" href="./" title="Voltar ao laboratório offshore"><span aria-hidden="true">←</span><span class="s-back-label">Offshore</span></a>
        <span class="s-header-divider" aria-hidden="true"></span>
        <div class="s-appbar-title"><span class="overline">Laboratório offshore</span><strong>Minha conta</strong></div>
        <div class="s-actions">
          ${labs.map((l, i) => `<a class="s-act${i ? '' : ' s-act-primary'}" href="${LABS[l][1]}">${IC.lab}<span class="c-txt">${labs.length > 1 ? LABS[l][0] : 'Abrir o laboratório'}</span></a>`).join('')}
          ${admin ? `<a class="s-act" href="admin.html">${IC.admin}<span class="c-txt">Administração</span></a>` : ''}
          <button type="button" class="s-act s-act-icon" data-tema title="Alternar tema claro/escuro" aria-label="Alternar tema claro/escuro"><span class="s-theme-sun" aria-hidden="true">☼</span><span class="s-theme-moon" aria-hidden="true">☾</span></button>
          <div class="c-menu-caixa"><button type="button" class="s-act c-conta-btn" data-menu aria-haspopup="true" aria-expanded="false"><span data-av-topo>${S.avatar(u, 'c-av-s')}</span><span class="c-txt" data-primeiro>${esc(primeiro(u.nome))}</span></button>
            <div class="c-menu" hidden><span data-av-menu>${S.avatar(u, 'c-av-m')}</span><b data-nome-menu>${esc(u.nome)}</b><small>${esc(u.email)}</small>
              <a href="#perfil" data-fechar>Editar perfil</a>${admin ? '<a href="admin.html">Painel do administrador</a>' : ''}<button type="button" data-sair>Sair da conta</button></div></div>
        </div>
      </header>
      ${temOff ? `<nav class="s-areas" aria-label="Etapas do laboratório offshore">${ETAPAS.map(([h, n, t]) => `<a class="s-area" href="${h}"><span class="s-area-number">${n}</span> ${t}</a>`).join('')}</nav>` : ''}
      <main class="container c-conta" id="conteudo">
        <section class="page-head c-head">
          <div><span class="eyebrow">Minha conta · ${admin ? 'administrador · todos os laboratórios' : 'profissional convidado'}</span><h1 data-nome>${esc(u.nome)}</h1>
            <p><span data-empresa>${esc(u.empresa || 'Empresa não informada')}</span> · ${esc(u.email)}</p>
            <div class="head-links"><a href="#perfil">Editar perfil</a>${temOff ? '<a href="#projetos">Projetos</a>' : ''}${labs.map(l => `<a href="${LABS[l][1]}">${LABS[l][0]} ↗</a>`).join('')}</div>
            ${labs.length ? '' : '<p class="c-sem-lab">Sua conta ainda não tem laboratório liberado. Fale com o administrador.</p>'}</div>
          <button type="button" class="c-head-av" data-ir aria-label="Alterar foto ou ícone"><span data-av-head>${S.avatar(u, 'c-av-xl')}</span><span class="c-cam">${IC.camera}</span></button>
        </section>
        <div class="stats c-stats">
          ${temOff ? `<div class="stat"><span>Projetos</span><strong data-n="projetos">—</strong><small>salvos no servidor</small></div>
          <div class="stat"><span>Memoriais</span><strong data-n="documentos">—</strong><small>emitidos com número</small></div>` : `<div class="stat"><span>Laboratórios</span><strong>${labs.length}</strong><small>${esc(labs.map(l => LABS[l][0]).join(' · ') || 'nenhum liberado')}</small></div>`}
          <div class="stat"><span>Sessões</span><strong data-n="sessoes">—</strong><small>abertas agora</small></div>
          <div class="stat"><span>Segundo fator</span>${estadoFator(u, 'Ativo', 'Inativo')}<small>aplicativo autenticador</small></div>
        </div>
        <div class="c-corpo">
          <nav class="c-nav" aria-label="Seções da conta">${SECS.map(([id, rot, sub], i) => `<a href="#${id}" data-sec="${id}"><b>0${i + 1}</b><span>${rot}<small>${sub}</small></span></a>`).join('')}</nav>
          <div class="c-conteudo"><p class="c-msg" data-msg="c-msg" hidden></p><div data-conteudo></div></div>
        </div>
        <footer class="section-footer"><span>EngenhaLab · ${esc(labs.map(l => LABS[l][0]).join(' · ') || 'Minha conta')}</span><span>Acesso por convite · verificação em duas etapas</span></footer>
      </main>`;

    // tema, menu e sair
    app.querySelector('[data-tema]').addEventListener('click', () => { const r = document.documentElement, t = r.dataset.theme === 'light' ? 'dark' : 'light'; r.dataset.theme = t; try { localStorage.setItem('vg-theme', t); } catch (_) { /* sem armazenamento */ } });
    const bMenu = app.querySelector('[data-menu]'), menu = app.querySelector('.c-menu');
    const fecharMenu = () => { menu.hidden = true; bMenu.setAttribute('aria-expanded', 'false'); };
    bMenu.addEventListener('click', ev => { ev.stopPropagation(); menu.hidden = !menu.hidden; bMenu.setAttribute('aria-expanded', String(!menu.hidden)); });
    document.addEventListener('click', ev => { if (!menu.hidden && !menu.contains(ev.target)) fecharMenu(); });
    document.addEventListener('keydown', ev => { if (ev.key === 'Escape') fecharMenu(); });
    menu.querySelector('[data-fechar]').addEventListener('click', fecharMenu);
    menu.querySelector('[data-sair]').addEventListener('click', async () => {
      fecharMenu();
      let manter = false;
      if (S.temEstudo()) { const r = await escolherSaida(); if (!r) return; manter = r === 'manter'; }
      S.sair(false, { manter }); history.replaceState(null, '', location.pathname);
      telaEntrar(manter ? 'Você saiu da sua conta. Os parâmetros do estudo continuam neste navegador.' : 'Você saiu da sua conta. Os parâmetros do estudo foram apagados deste navegador.');
    });
    app.querySelector('[data-ir]').addEventListener('click', () => { if (secaoAtual() === 'perfil') { const b = app.querySelector('[data-arquivo]'); if (b) b.click(); } else location.hash = 'perfil'; });

    const titulo = (n, eyebrow, h2, p, extra) => `<div class="panel-title"><div><span class="eyebrow">${n} / ${eyebrow}</span><h2>${h2}</h2>${p ? `<p>${p}</p>` : ''}</div>${extra || ''}</div>`;
    const falha = qual => cache['erro_' + qual] ? `<p class="c-vazio">${esc(cache['erro_' + qual])}</p>` : '';
    window.onhashchange = () => { if (app.querySelector('.c-conta')) mostrar(true); };
    mostrar();
    if (primeiraVez) aviso('Acesso ativado. Confira seu nome e escolha uma foto ou ícone: eles assinam os memoriais e relatórios.', 'ok');
    await Promise.all(temOff ? [carregar('projetos'), carregar('documentos'), carregar('sessoes')] : [carregar('sessoes')]);
    numeros(); if (secaoAtual() !== 'perfil') mostrar();

    function numeros() { ['projetos', 'documentos', 'sessoes'].forEach(k => { const e = app.querySelector(`[data-n="${k}"]`); if (e) e.textContent = cache[k] ? cache[k].length : '—'; }); }
    function mostrar(rolar) {
      const sec = secaoAtual();
      app.querySelectorAll('[data-sec]').forEach(a => a.setAttribute('aria-current', a.dataset.sec === sec ? 'page' : 'false'));
      const alvo = app.querySelector('[data-conteudo]');
      alvo.innerHTML = sec === 'projetos' ? projetos() : sec === 'memoriais' ? memoriais() : sec === 'seguranca' ? seguranca() : perfil();
      ligar(sec, alvo);
      if (rolar) { const c = app.querySelector('.c-corpo'); if (c && c.getBoundingClientRect().top < 0) c.scrollIntoView({ block: 'start' }); }
    }
    async function carregar(qual) {
      const rota = { projetos: 'projetos/listar', documentos: 'documentos/listar', sessoes: 'conta/sessoes' }[qual];
      try { cache[qual] = (await S.pedir(rota))[qual]; cache['erro_' + qual] = null; }
      catch (e) { if (e.sessao === false) { S.sair(); telaEntrar(e.message); throw e; } cache[qual] = []; cache['erro_' + qual] = e.message; }
    }
    function atualizarCabecalho() {
      app.querySelector('[data-av-head]').innerHTML = S.avatar(u, 'c-av-xl');
      app.querySelector('[data-av-topo]').innerHTML = S.avatar(u, 'c-av-s');
      app.querySelector('[data-av-menu]').innerHTML = S.avatar(u, 'c-av-m');
      app.querySelector('[data-nome]').textContent = u.nome;
      app.querySelector('[data-nome-menu]').textContent = u.nome;
      app.querySelector('[data-primeiro]').textContent = primeiro(u.nome);
      app.querySelector('[data-empresa]').textContent = u.empresa || 'Empresa não informada';
    }

    function perfil() {
      const atual = u.avatar || '';
      return `<form class="c-grade" novalidate data-perfil>
        <section class="panel">${titulo('01', 'Identidade', 'Foto ou ícone', 'Aparece no topo do laboratório, nesta conta e nos relatórios.')}
          <div class="c-escolha"><div class="c-previa" data-previa>${S.avatar({ ...u, avatar: atual }, 'c-av-l')}</div>
            <div class="c-escolha-acoes"><span class="c-escolha-rot">Seu avatar · <strong data-avatar-nome></strong></span><label class="button">${IC.camera}<span>Enviar foto</span><input type="file" accept="image/*" data-arquivo hidden></label>
              <button type="button" class="button ghost" data-iniciais>Usar iniciais</button>
              <small>JPG, PNG ou WebP. Recortada em quadrado; serve também o logotipo da sua empresa.</small></div></div>
          <span class="c-rot">Ícones do setor</span>
          <div class="c-icones" role="radiogroup" aria-label="Ícones">${Object.entries(S.ICONES).map(([id, [rot]]) => `<button type="button" role="radio" class="c-icone" data-icone="${id}" aria-checked="${atual === 'icone:' + id}" tabindex="${atual === 'icone:' + id || (!atual.startsWith('icone:') && id === Object.keys(S.ICONES)[0]) ? 0 : -1}">${S.avatar({ avatar: 'icone:' + id }, 'c-av-i')}<span>${esc(rot)}</span></button>`).join('')}</div>
        </section>
        <section class="panel">${titulo('02', 'Responsável técnico', 'Dados nos relatórios', 'Nome e empresa que assinam os memoriais e os PDFs.')}
          <div class="form-grid">
            <label class="full">Nome completo <small>obrigatório</small><input name="nome" required maxlength="80" value="${esc(u.nome)}" autocomplete="name"></label>
            <label class="full">Empresa <small>opcional</small><input name="empresa" maxlength="80" value="${esc(u.empresa || '')}" autocomplete="organization" placeholder="Ex.: nome da sua empresa"></label>
            <label class="full">E-mail <small>definido pelo administrador</small><input value="${esc(u.email)}" readonly tabindex="-1"></label>
          </div>
          <span class="c-rot">Prévia no relatório</span>
          <div class="c-assinatura" data-assinatura></div>
          <div class="action-row"><button class="button primary" type="submit">Salvar alterações</button></div>
        </section></form>`;
    }
    function projetos() {
      const lista = cache.projetos, atual = S.projetoAtivo();
      const corpo = !lista ? '<p class="c-vazio">Carregando…</p>' : lista.length
        ? `<div class="table-wrap c-tabela"><table><thead><tr><th>Projeto</th><th>Versão</th><th>Alterado</th><th></th></tr></thead><tbody>${lista.map(p => `<tr>
            <td><b>${esc(p.nome)}</b>${atual && atual.id === p.id ? '<span class="c-selo">aberto neste navegador</span>' : ''}</td><td>v${esc(p.versao)}</td><td>${dataCurta(p.atualizado_em)} <small>${hora(p.atualizado_em)}</small></td>
            <td><div class="c-acoes"><button class="button primary" data-abrir="${esc(p.id)}">Abrir</button><button class="button ghost" data-ren="${esc(p.id)}" data-nome="${esc(p.nome)}">Renomear</button><button class="button ghost c-vermelho" data-exc="${esc(p.id)}" data-nome="${esc(p.nome)}">Excluir</button></div></td></tr>`).join('')}</tbody></table></div>`
        : `<div class="c-vazio-g">${IC.pasta}<b>Nenhum projeto ainda</b><p>Ajuste os parâmetros no laboratório e use “Novo projeto com estes dados” na barra do topo, ou crie aqui com o que está neste navegador.</p></div>`;
      return `<section class="panel">${titulo('02', 'Projetos', 'Seus estudos', 'Salvos no servidor e vinculados à sua conta. Só você tem acesso.', lista ? '<button type="button" class="button primary" data-novo>+ Novo projeto</button>' : '')}${falha('projetos')}${corpo}</section>`;
    }
    function memoriais() {
      const lista = cache.documentos;
      const corpo = !lista ? '<p class="c-vazio">Carregando…</p>' : lista.length
        ? `<div class="c-docs">${lista.map(d => `<a class="c-doc" href="documento.html#id=${esc(d.id)}" target="_blank" rel="noopener"><span class="c-doc-ic">${IC.doc}</span><span class="c-doc-num">${esc(d.numero)}</span><b>${esc(d.projeto)}</b><small>${dataCurta(d.emitido_em)} · ${hora(d.emitido_em)}</small><span class="c-doc-abrir">Abrir ↗</span></a>`).join('')}</div>`
        : `<div class="c-vazio-g">${IC.doc}<b>Nenhum memorial emitido</b><p>Abra um projeto no laboratório e use “Emitir memorial” na barra do topo.</p></div>`;
      return `<section class="panel">${titulo('03', 'Memoriais', 'Documentos emitidos', 'Calculados pelo servidor, com número e código de verificação.')}${falha('documentos')}${corpo}</section>`;
    }
    function seguranca() {
      const lista = cache.sessoes;
      return `<div class="c-grade">
        <section class="panel">${titulo('04', 'Acesso', 'Como você entra')}
          <div class="kv"><div><span>E-mail</span><strong>${esc(u.email)}</strong></div><div><span>Senha</span>${u.senha_definida === true ? '<strong>Definida</strong>' : u.senha_definida === false ? '<strong class="c-ruim">Não definida</strong>' : '<strong class="c-indef">Não confirmado</strong>'}</div><div><span>Verificação em duas etapas</span>${estadoFator(u, 'Ativa', 'Inativa')}</div><div><span>Papel</span><strong>${admin ? 'Administrador' : 'Profissional'}</strong></div></div>
          <p class="c-nota">Para trocar a senha ou o aplicativo autenticador, peça ao administrador um novo link de acesso.</p></section>
        <section class="panel">${titulo('04', 'Dispositivos', 'Onde sua conta está aberta', '', lista && lista.length > 1 ? '<button type="button" class="button" data-outras>Sair dos outros</button>' : '')}${falha('sessoes')}
          ${lista ? `<div class="c-disp">${lista.map(x => { const a = aparelho(x.agente); return `<div><span class="c-disp-ic">${a.movel ? IC.celular : IC.tela}</span><span><b>${esc(a.nome)}</b>${x.atual ? '<span class="c-selo">este dispositivo</span>' : ''}<small>Entrou em ${dataCurta(x.criada_em)} · ativo às ${hora(x.ultima_atividade)}</small></span></div>`; }).join('')}</div>` : '<p class="c-vazio">Carregando…</p>'}</section></div>`;
    }

    function ligar(sec, alvo) {
      const recarregar = async qual => { await carregar(qual); numeros(); mostrar(); };
      if (sec === 'perfil') {
        const f = alvo.querySelector('[data-perfil]'); let escolha = u.avatar || '';
        const assinatura = () => {
          const fd = new FormData(f), nome = String(fd.get('nome') || '').trim() || u.nome, emp = String(fd.get('empresa') || '').trim();
          alvo.querySelector('[data-assinatura]').innerHTML = `${S.avatar({ nome, avatar: escolha }, 'c-av-a')}<div><span>Responsável técnico</span><b>${esc(nome)}</b><small>${esc([emp, u.email].filter(Boolean).join(' · '))}</small></div>`;
          alvo.querySelector('[data-previa]').innerHTML = S.avatar({ nome, avatar: escolha }, 'c-av-l');
          const icone = escolha.startsWith('icone:') && S.ICONES[escolha.slice(6)];
          alvo.querySelector('[data-avatar-nome]').textContent = icone ? icone[0] : escolha ? 'sua foto' : 'suas iniciais';
          [...alvo.querySelectorAll('[data-icone]')].forEach((b, i) => {
            const selecionado = escolha === 'icone:' + b.dataset.icone;
            b.setAttribute('aria-checked', String(selecionado));
            b.tabIndex = selecionado || (!icone && i === 0) ? 0 : -1;
          });
        };
        assinatura(); f.addEventListener('input', assinatura);
        const botoes = [...alvo.querySelectorAll('[data-icone]')];
        botoes.forEach((b, i) => {
          b.addEventListener('click', () => { escolha = 'icone:' + b.dataset.icone; assinatura(); });
          b.addEventListener('keydown', ev => {
            const passo = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[ev.key];
            if (!passo && ev.key !== 'Home' && ev.key !== 'End') return;
            ev.preventDefault();
            const n = ev.key === 'Home' ? 0 : ev.key === 'End' ? botoes.length - 1 : (i + passo + botoes.length) % botoes.length;
            botoes[n].click(); botoes[n].focus();
          });
        });
        alvo.querySelector('[data-iniciais]').addEventListener('click', () => { escolha = ''; assinatura(); });
        alvo.querySelector('[data-arquivo]').addEventListener('change', async ev => {
          const arq = ev.target.files && ev.target.files[0]; ev.target.value = ''; if (!arq) return;
          try { escolha = await reduzirImagem(arq); assinatura(); aviso(''); } catch (e) { aviso(e.message); }
        });
        enviar(f, async fd => {
          const r = await S.pedir('conta/perfil', { nome: String(fd.get('nome') || '').trim(), empresa: String(fd.get('empresa') || '').trim(), avatar: escolha });
          u = r.usuario; S.guardar({ ...S.sessao(), usuario: u }); atualizarCabecalho(); assinatura();
          aviso('Perfil salvo. Os próximos memoriais e relatórios já saem com estes dados.', 'ok');
        });
      }
      if (sec === 'projetos' && cache.projetos) {
        alvo.querySelector('[data-novo]').addEventListener('click', async () => {
          const nome = await dialogo({ titulo: 'Novo projeto', texto: 'Criado com os dados que estão neste navegador.', valor: 'Estudo ' + new Date().toLocaleDateString('pt-BR'), confirmar: 'Criar' });
          if (!nome) return;
          try { const r = await S.pedir('projetos/criar', { nome, dados: S.dadosLocais() }); S.definirProjeto({ id: r.id, nome: r.nome, versao: r.versao }); recarregar('projetos'); } catch (e) { aviso(e.message); }
        });
        alvo.querySelectorAll('[data-abrir]').forEach(b => b.addEventListener('click', async () => { try { const r = await S.pedir('projetos/abrir', { id: b.dataset.abrir }); S.aplicarDados(r.dados); S.definirProjeto({ id: r.id, nome: r.nome, versao: r.versao }); location.href = volta || '01-lancamento.html'; } catch (e) { aviso(e.message); } }));
        alvo.querySelectorAll('[data-ren]').forEach(b => b.addEventListener('click', async () => {
          const nome = await dialogo({ titulo: 'Renomear projeto', valor: b.dataset.nome, confirmar: 'Salvar' }); if (!nome || nome === b.dataset.nome) return;
          try { await S.pedir('projetos/renomear', { id: b.dataset.ren, nome }); const a = S.projetoAtivo(); if (a && a.id === b.dataset.ren) S.definirProjeto({ ...a, nome }); recarregar('projetos'); } catch (e) { aviso(e.message); }
        }));
        alvo.querySelectorAll('[data-exc]').forEach(b => b.addEventListener('click', async () => {
          const ok = await dialogo({ titulo: `Excluir “${b.dataset.nome}”?`, texto: 'Os memoriais já emitidos continuam no histórico.', confirmar: 'Excluir', perigo: true }); if (!ok) return;
          try { await S.pedir('projetos/excluir', { id: b.dataset.exc }); const a = S.projetoAtivo(); if (a && a.id === b.dataset.exc) S.definirProjeto(null); recarregar('projetos'); } catch (e) { aviso(e.message); }
        }));
      }
      if (sec === 'seguranca') {
        const b = alvo.querySelector('[data-outras]');
        if (b) b.addEventListener('click', async () => {
          const ok = await dialogo({ titulo: 'Sair dos outros dispositivos?', texto: 'Você continua conectado só neste navegador.', confirmar: 'Sair dos outros' }); if (!ok) return;
          try { const r = await S.pedir('conta/encerrar-outras'); await recarregar('sessoes'); aviso(`${qtd(r.encerradas, 'sessão encerrada', 'sessões encerradas')}.`, 'ok'); } catch (e) { aviso(e.message); }
        });
      }
    }
  }

  if (convite) fluxoConvite(); else if (S.sessao()) minhaConta(); else if (/^#pedir/.test(location.hash)) telaPedir(); else telaEntrar();
})();
