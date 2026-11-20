/* Laboratório offshore · idioma da página (português ou inglês)
   A página é escrita em português; em inglês, os textos são trocados pelo dicionário assim que
   aparecem (inclusive os montados pelos scripts) e os números passam para o formato 1,234.5. */
(function () {
  'use strict';
  var CHAVE = 'vg-lang';
  // inglês é o idioma padrão; o português vale só para quem escolher no seletor
  var lang = 'en';
  try { lang = localStorage.getItem(CHAVE) === 'pt' ? 'pt' : 'en'; } catch (e) { /* sem armazenamento */ }
  // páginas escritas só em inglês: o seletor some e só os textos montados pelos scripts comuns são trocados
  var FIXO = document.documentElement.getAttribute('data-lang-fixo') === 'en';
  if (FIXO) lang = 'en';
  var DIC = {"em # × #":"in # × #","Ancoragem":"Mooring","Estaca torpedo":"Torpedo pile","fecha":"closes","Painel":"Panel","capacidade":"bearing capacity","corpo":"body","Parâmetros":"Parameters","Verificação":"Verification","Contato":"Contact","Administração":"Administration","Editar perfil":"Edit profile","Painel do administrador":"Administrator panel","Sair da conta":"Sign out","Empresa não informada":"Company not provided","Projetos":"Projects","salvos no servidor":"saved on the server","Memoriais":"Calculation reports","emitidos com número":"issued with a number","Sessões":"Sessions","abertas agora":"open now","Segundo fator":"Second factor","Ativo":"Active","aplicativo autenticador":"authenticator app","Perfil":"Profile","Identidade e assinatura":"Identity and signature","Estudos salvos":"Saved studies","Documentos emitidos":"Issued documents","Segurança":"Security","Acesso e dispositivos":"Access and devices","Foto ou ícone":"Photo or icon","Aparece no topo do laboratório, nesta conta e nos relatórios.":"Shown at the top of the lab, on this account and in the reports.","Seu avatar ·":"Your avatar ·","suas iniciais":"your initials","Enviar foto":"Upload photo","Usar iniciais":"Use initials","JPG, PNG ou WebP. Recortada em quadrado; serve também o logotipo da sua empresa.":"JPG, PNG or WebP. Cropped to a square; your company logo also works.","Ícones do setor":"Industry icons","Plataforma":"Platform","Navio":"Ship","Capacete":"Hard hat","Âncora":"Anchor","Sonda":"Drill rig","Duto":"Pipeline","Ondas":"Waves","Hélice":"Propeller","Válvula":"Valve","Boia":"Buoy","Engrenagem":"Gear","Dados nos relatórios":"Data in the reports","Nome e empresa que assinam os memoriais e os PDFs.":"Name and company that sign the calculation reports and PDFs.","Nome completo":"Full name","obrigatório":"required","Empresa":"Company","opcional":"optional","definido pelo administrador":"set by the administrator","Prévia no relatório":"Report preview","Responsável técnico":"Responsible engineer","Acesso por convite · verificação em duas etapas":"Access by invitation · two-step verification","Voltar ao laboratório offshore":"Back to the offshore lab","Alterar foto ou ícone":"Change photo or icon","Seções da conta":"Account sections","Ícones":"Icons","Ex.: nome da sua empresa":"E.g.: your company name","Conta | Laboratórios EngenhaLab":"Account | EngenhaLab Labs","Acesso dos profissionais ao laboratório offshore.":"Professional access to the offshore lab.","Laboratórios EngenhaLab":"EngenhaLab Labs","Nome":"Name","Papel":"Role","Profissional":"Professional","Administrador":"Administrator","ativo":"active","você":"you","Mostrar senha":"Show password","Esqueceu a senha?":"Forgot your password?","Senha":"Password","O servidor não respondeu. Tente de novo em instantes.":"The server did not respond. Try again in a moment.","Salvo às":"Saved at","Nome do projeto":"Project name","Convite indisponível":"Invitation unavailable","Ir para o login":"Go to sign in","Mínimo de # caracteres. Uma frase longa é mais segura e fácil de lembrar.":"At least # characters. A long passphrase is safer and easier to remember.","As senhas não coincidem.":"The passwords do not match.","Verificação em duas etapas":"Two-step verification","Leia o código com o Google Authenticator, Microsoft Authenticator ou #Password.":"Scan the code with Google Authenticator, Microsoft Authenticator or #Password.","Não consegue ler? Digite a chave":"Can't scan it? Enter the key","Peça ao administrador um novo link de acesso. Por segurança, a senha não é redefinida por e-mail.":"Ask the administrator for a new access link. For security, the password is not reset by email.","Digite um e-mail válido.":"Enter a valid email.","Confirme que é você":"Confirm it is you","Digite o código de # dígitos do aplicativo autenticador.":"Enter the #-digit code from the authenticator app.","Apagar os dados do estudo deste navegador?":"Delete the study data from this browser?","Os parâmetros que você usou nas páginas do laboratório ficam guardados neste navegador e apareceriam para quem abrir o site depois, neste mesmo perfil. Os projetos e memoriais salvos no servidor não são afetados.":"The parameters you used on the lab pages are kept in this browser and would show up for whoever opens the site later on this same profile. Projects and calculation reports saved on the server are not affected.","Escolha um arquivo de imagem.":"Choose an image file.","Imagem muito grande. Use uma de até # MB.":"Image too large. Use one up to # MB.","Não consegui abrir esta imagem. Tente JPG ou PNG.":"Could not open this image. Try JPG or PNG.","Não consegui reduzir a imagem. Tente outra.":"Could not shrink the image. Try another one.","Não confirmado":"Not confirmed","Abrir o laboratório":"Open the lab","Você saiu da sua conta. Os parâmetros do estudo continuam neste navegador.":"You signed out. The study parameters remain in this browser.","Você saiu da sua conta. Os parâmetros do estudo foram apagados deste navegador.":"You signed out. The study parameters were deleted from this browser.","Acesso ativado. Confira seu nome e escolha uma foto ou ícone: eles assinam os memoriais e relatórios.":"Access activated. Check your name and choose a photo or icon: they sign the calculation reports.","Ajuste os parâmetros no laboratório e use “Novo projeto com estes dados” na barra do topo, ou crie aqui com o que está neste navegador.":"Adjust the parameters in the lab and use “New project with these data” in the top bar, or create one here with what is in this browser.","Abra um projeto no laboratório e use “Emitir memorial” na barra do topo.":"Open a project in the lab and use “Issue calculation report” in the top bar.","Para trocar a senha ou o aplicativo autenticador, peça ao administrador um novo link de acesso.":"To change the password or the authenticator app, ask the administrator for a new access link.","Entrou em":"Signed in on","ativo às":"active at","sua foto":"your photo","Perfil salvo. Os próximos memoriais e relatórios já saem com estes dados.":"Profile saved. The next calculation reports will carry these data.","Criado com os dados que estão neste navegador.":"Created with the data in this browser.","Os memoriais já emitidos continuam no histórico.":"Calculation reports already issued remain in the history.","Sair dos outros dispositivos?":"Sign out of the other devices?","Você continua conectado só neste navegador.":"You stay signed in only on this browser.","Sair dos outros":"Sign out of the others","m cada":"m each","a partir de":"from","Início":"Home","Estacas":"Piles","Campo":"Field","Modelo":"Model","Plataforma de engenharia":"Engineering platform","Bem-vindo de volta":"Welcome back","Entre para acessar seus laboratórios.":"Sign in to access your labs.","Entradas e tentativas ficam registradas no histórico de auditoria, com data e IP.":"Sign-ins and attempts are recorded in the audit history, with date and IP.","Acesso somente por convite.":"Invitation-only access.","Solicitar acesso":"Request access","Caps Lock está ativado":"Caps Lock is on","Ocultar senha":"Hide password","Alternar tema claro/escuro":"Toggle light/dark theme","Verificar":"Verify","Código":"Code","E-mail":"Email","Digite a senha.":"Enter your password.","Nova senha":"New password","Confirmar senha":"Confirm password","Defina uma nova senha para sua conta.":"Set a new password for your account.","Crie sua senha para ativar o acesso.":"Create your password to activate access.","Mínimo de 12 caracteres. Uma frase longa é mais segura e fácil de lembrar.":"At least 12 characters. A long phrase is safer and easier to remember.","Continuar":"Continue","Etapa 1 de 2":"Step 1 of 2","Etapa 2 de 2":"Step 2 of 2","Leia o código com o Google Authenticator, Microsoft Authenticator ou 1Password.":"Scan the code with Google Authenticator, Microsoft Authenticator or 1Password.","Código de 6 dígitos":"6-digit code","Ativar acesso":"Activate access","Código QR para o aplicativo autenticador":"QR code for the authenticator app","← Usar outra conta":"← Use another account","Digite o código de 6 dígitos do aplicativo autenticador.":"Enter the 6-digit code from the authenticator app.","Entrar":"Sign in","Fluidos":"Fluids","Entrada":"Inlet","Etapa # de #":"Step # of #","administrador":"administrator","Sinais":"Signals","agora":"right now","Todos":"All","até":"until","Você":"You","Mostrar":"Show","pontos":"points","Entrou":"Signed in","por":"by","não informada":"not provided","todos":"all","nenhum":"none","depois":"after","em cima":"upper side","entra":"in","sai":"out","u = # na borda":"u = # at the boundary","pressão":"pressure","Metalurgia":"Metallurgy","devolve # %":"returns # %","Etapa":"Step","Dados":"Data","# laboratórios":"# labs","Com login":"Sign-in required","Ainda não tem acesso?":"Don't have access yet?","Preencha um formulário curto e receba o convite por e-mail.":"Fill in a short form and get your invitation by email.","Conte quem você é e quais laboratórios quer usar. O pedido vai para o administrador, que libera o acesso e envia o convite para o seu e-mail.":"Tell us who you are and which labs you want to use. The request goes to the administrator, who grants access and sends the invitation to your email.","Pedido de acesso":"Access request","WhatsApp (opcional)":"WhatsApp (optional)","Empresa (opcional)":"Company (optional)","Laboratórios de interesse":"Labs of interest","Estacas torpedo e ancoragem":"Torpedo piles and mooring","Como pretende usar (opcional)":"How you plan to use it (optional)","Concordo que estes dados sejam usados só para analisar o pedido.":"I agree that this data is used only to review the request.","Enviar pedido":"Send request","Já tem acesso?":"Already have access?","Informe o seu nome.":"Enter your name.","Escolha pelo menos um laboratório.":"Choose at least one lab.","Confirme que concorda com o uso dos dados para analisar o pedido.":"Confirm that you agree to the use of the data to review the request.","Não foi possível enviar agora. Tente de novo em instantes.":"Couldn't send right now. Try again in a moment.","Pedido enviado":"Request sent","Assim que o acesso for liberado, o convite chega em":"As soon as access is granted, the invitation will arrive at","Análise":"Review","O administrador confere o pedido.":"The administrator checks the request.","Convite":"Invitation","Você recebe um link de uso único para criar a senha.":"You get a single-use link to create your password.","Acesso":"Access","Com o aplicativo autenticador, você entra nos laboratórios liberados.":"With the authenticator app, you sign in to the labs you were given.","Voltar ao login":"Back to sign-in","Se enviar outro pedido com o mesmo e-mail, o anterior é atualizado.":"If you send another request with the same email, the previous one is updated.","Novo":"New","Idioma":"Language","Enviar e-mail":"Send an e-mail","Fluidos e CFD":"Fluids and CFD","polos":"poles","Carregando…":"Loading…","Tente de novo em instantes.":"Try again in a moment.","O servidor não respondeu.":"The server did not respond.","Cancelar":"Cancel","Capacidade axial":"Axial capacity","Carga lateral":"Lateral load","Catenária":"Catenary","EngenhaLab — todos os laboratórios":"EngenhaLab — all labs","Entrar com o seu acesso":"Sign in with your account","Etapas do laboratório offshore":"Offshore lab steps","Laboratório offshore":"Offshore lab","Laboratórios":"Labs","Lançamento":"Launch","Lançamento e cravação":"Launch and embedment","Minha conta":"My account","Parâmetros completos liberados":"Full parameters unlocked","Preferências de estatísticas":"Statistics preferences","Privacidade":"Privacy","Projeto":"Project","Projeto salvo no servidor":"Project saved on the server","Pular para o conteúdo":"Skip to content","Salvar alterações":"Save changes","Salvar como projeto":"Save as project","Sem projeto (só neste navegador)":"No project (this browser only)","Ver":"View","Visão geral":"Overview","boia":"buoy","parada":"rest","todos os laboratórios":"all labs","água":"water","＋ Novo projeto com estes dados…":"＋ New project with these data…","Sem conexão com o servidor. Verifique a internet e tente de novo.":"No connection to the server. Check your internet and try again.","Sua sessão terminou. Entre de novo.":"Your session has ended. Please sign in again.","Salvo":"Saved","Salvando…":"Saving…","Parâmetro":"Parameter","Modelos":"Models","# etapas":"# steps","Aberto":"Open","Ancoragem de FPSO com estacas torpedo: lançamento, cravação, catenária e capacidade.":"FPSO mooring with torpedo piles: launch, embedment, catenary and capacity.","Análise estrutural por elementos finitos, vasos de pressão e verificação de componentes.":"Finite element structural analysis, pressure vessels and component checks.","Automação & CAD":"Automation & CAD","Em preparação":"In preparation","Escoamentos, turbomáquinas e troca térmica por simulação fluidodinâmica.":"Flows, turbomachinery and heat transfer by computational fluid dynamics.","Estruturas & FEM":"Structures & FEM","Fluidos & CFD":"Fluids & CFD","Geradores e motores síncronos":"Synchronous generators and motors","Geradores e motores síncronos: rotor, eixo, mancal e trocador ar–água.":"Synchronous generators and motors: rotor, shaft, bearing and air–water heat exchanger.","Laboratórios de":"Interactive","engenharia.":"engineering labs.","Modelos parametrizados, rotinas em Python e geração de desenhos e documentos técnicos.":"Parametric models, Python routines and generation of drawings and technical documents.","Máquinas elétricas":"Electrical machines","Offshore & ancoragem":"Offshore & mooring","Sobre o autor":"About the author","trocador ar–água":"air–water heat exchanger","O EngenhaLab está fechado no momento. Seu acesso volta quando o site for reaberto.":"EngenhaLab is closed right now. Your access returns when the site reopens.","Entre com a sua conta.":"Sign in with your account."}, REGRAS = [[new RegExp("^(\\d{1,2}) de (janeiro|fevereiro|mar\u00e7o|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro) de (\\d{4})$"),"DATA"],[new RegExp("^Sua conta: (.+)$"),"Your account: $1"],[new RegExp("^Bem-vindo, (.+)$"),"Welcome, $1"],[new RegExp("^Crava\u00e7\u00e3o: valor inv\u00e1lido em (.+)\\.$"),"Embedment: invalid value in $1."],[new RegExp("^Geometria fora da faixa f\u00edsica: confira (.+)\\.$"),"Geometry outside the physical range: check $1."],[new RegExp("^Par\u00e2metro da linha fora da faixa: confira (.+)\\.$"),"Line parameter out of range: check $1."]];

  function trocar(novo) {
    try { localStorage.setItem(CHAVE, novo); } catch (e) { /* sem armazenamento */ }
    location.reload();
  }

  /* ---------- botão de idioma: moeda com a bandeira que gira para o outro lado ---------- */
  var BR = '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><rect width="24" height="24" fill="#009c3b"/><path d="M12 3.5 22 12 12 20.5 2 12z" fill="#ffdf00"/><circle cx="12" cy="12" r="4.6" fill="#002776"/><path d="M7.5 11.2q4.5-1.2 9 1.6" stroke="#fff" stroke-width="1" fill="none"/></svg>';
  var US = '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><rect width="24" height="24" fill="#fff"/><path d="M12 0v24" stroke="#b22234" stroke-width="24" stroke-dasharray="1.846"/><rect width="11" height="12.9" fill="#3c3b6e"/><g fill="#fff"><circle cx="2.5" cy="2.5" r=".7"/><circle cx="6" cy="2.5" r=".7"/><circle cx="9" cy="2.5" r=".7"/><circle cx="4.2" cy="5.5" r=".7"/><circle cx="7.6" cy="5.5" r=".7"/><circle cx="2.5" cy="8.5" r=".7"/><circle cx="6" cy="8.5" r=".7"/><circle cx="9" cy="8.5" r=".7"/><circle cx="4.2" cy="11.2" r=".7"/><circle cx="7.6" cy="11.2" r=".7"/></g></svg>';
  // estilo em arquivo: as páginas com política de conteúdo restrita não aceitam <style> embutido
  var AQUI = (document.currentScript && document.currentScript.src) || '/assets/js/idioma.js';
  // o botão só aparece depois que o estilo dele carregou; sem isso, num recarregamento
  // sem cache, as bandeiras aparecem por um instante no tamanho natural do desenho
  var estiloPronto = false, esperando = [];
  function liberar() { estiloPronto = true; esperando.forEach(function (bt) { bt.style.removeProperty('visibility'); }); esperando = []; }
  function estilo() {
    var ja = document.getElementById('lg-estilo');
    if (ja) { if (ja.sheet) liberar(); else { ja.addEventListener('load', liberar); ja.addEventListener('error', liberar); setTimeout(liberar, 4000); } return; }
    var l = document.createElement('link'); l.id = 'lg-estilo'; l.rel = 'stylesheet';
    l.addEventListener('load', liberar); l.addEventListener('error', liberar);
    l.href = new URL('../css/idioma-botao.css?v=20261108-2', AQUI).href; (document.head || document.documentElement).appendChild(l);
    setTimeout(liberar, 4000);
  }
  var girando = false;
  function girar(bt) {
    if (girando) return; girando = true;
    var novo = lang === 'en' ? 'pt' : 'en';
    bt.style.setProperty('--f', novo === 'en' ? 1 : 0); bt.setAttribute('aria-checked', String(novo === 'en')); bt.classList.toggle('spun');
    var calmo = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    setTimeout(function () { trocar(novo); }, calmo ? 0 : 620);
  }
  function botao() {
    estilo();
    var en = lang === 'en', bt = document.createElement('button');
    bt.type = 'button'; bt.className = 'lg'; bt.setAttribute('role', 'switch'); bt.setAttribute('aria-checked', String(en));
    bt.setAttribute('aria-label', en ? 'Language: English. Switch to Portuguese' : 'Idioma: português. Mudar para inglês'); bt.setAttribute('translate', 'no');
    bt.style.setProperty('--f', en ? 1 : 0);
    if (!estiloPronto) { bt.style.visibility = 'hidden'; esperando.push(bt); }
    bt.innerHTML = '<span class="lg-coin"><span class="lg-face">' + BR + '</span><span class="lg-face lg-back">' + US + '</span></span>'
      + '<span class="lg-slot" aria-hidden="true"><span class="lg-reel"><span>PT<i>·</i>BR</span><span>EN<i>·</i>US</span></span></span>'
      + '<span class="lg-sep" aria-hidden="true"></span>'
      + '<svg class="lg-swap" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M7 4 3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7"/></svg>'
      + '<span class="lg-tip" aria-hidden="true"><span class="lg-tip-t">' + (en ? 'Mudar para português' : 'Switch to English') + '</span><kbd>Alt</kbd><kbd>L</kbd></span>';
    bt.addEventListener('click', function () { girar(bt); });
    bt.addEventListener('mousemove', function (e) { var r = bt.getBoundingClientRect(); bt.style.setProperty('--ry', ((e.clientX - r.left) / r.width - .5) * 30 + 'deg'); bt.style.setProperty('--rx', -((e.clientY - r.top) / r.height - .5) * 30 + 'deg'); });
    bt.addEventListener('mouseleave', function () { bt.style.setProperty('--rx', '0deg'); bt.style.setProperty('--ry', '0deg'); });
    return bt;
  }
  var atalho = false;
  function ligarAtalho() {
    if (atalho) return; atalho = true;
    addEventListener('keydown', function (e) { if (e.altKey && e.code === 'KeyL' && !e.ctrlKey && !e.metaKey) { var b = document.querySelector('.lg'); if (b) { e.preventDefault(); girar(b); } } });
  }

  /* ---------- lugar do botão: ao lado da foto da conta (laboratórios) ou no topo da página inicial ---------- */
  function seletor() {
    if (FIXO) return;
    var topo = document.getElementById('top-lang');
    if (topo) { var rot = topo.closest('label') || topo; var b0 = botao(); b0.classList.add('lg-topo'); rot.replaceWith(b0); ligarAtalho(); return; }
    var lugar = document.querySelector('.s-actions') || document.querySelector('.ac-dir'); if (!lugar) return;
    var caixa = lugar.querySelector('.lg');
    if (!caixa) { caixa = botao(); ligarAtalho(); }
    var conta = lugar.querySelector('.s-conta'), menu = lugar.querySelector('.c-menu-caixa');
    if (conta) { if (conta.nextSibling !== caixa) conta.after(caixa); }
    else if (menu) { if (menu.previousSibling !== caixa) menu.before(caixa); }
    else if (caixa.parentNode !== lugar) lugar.prepend(caixa);
  }
  // a barra pode ser montada (ou refeita) depois pelos scripts da página, como na conta
  function vigiarSeletor() {
    seletor(); var pend = false;
    new MutationObserver(function () { if (pend) return; pend = true; requestAnimationFrame(function () { pend = false; seletor(); }); }).observe(document.body, { childList: true, subtree: true });
  }

  // textos que chegam depois (etapas entregues pelo servidor): em português não há o que trocar
  window.Idioma = { lang: lang, trocar: trocar, acrescentar: function () {} };
  if (lang !== 'en') { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', vigiarSeletor); else vigiarSeletor(); return; }

  /* ---------- tradução ---------- */
  var NUM = /[−-]?\d[\d.]*(?:,\d+)?/g;
  function numero(n) {
    if (/^[−-]?\d{1,3}(?:\.\d{3})+(?:,\d+)?$/.test(n)) return n.replace(/\./g, '\u0001').replace(',', '.').replace(/\u0001/g, ',');
    return n.indexOf(',') >= 0 ? n.replace(',', '.') : n;
  }
  function soNumeros(s) { return s.replace(NUM, numero); }
  var MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
    MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function data(s, re) { var m = re.exec(s); return MONTHS[MESES.indexOf(m[2])] + ' ' + Number(m[1]) + ', ' + m[3]; }
  var cache = new Map();
  function traduzir(s) {
    if (!s || !/[A-Za-zÀ-ú0-9]/.test(s)) return s;
    if (cache.has(s)) return cache.get(s);
    var m = /^(\s*)([\s\S]*?)(\s*)$/.exec(s), ini = m[1], meio = m[2].replace(/\s+/g, ' '), fim = m[3], out = null;
    if (Object.prototype.hasOwnProperty.call(DIC, meio)) out = DIC[meio];
    if (out === null) {
      var nums = [], chave = meio.replace(NUM, function (x) { nums.push(x); return '#'; });
      if (nums.length && Object.prototype.hasOwnProperty.call(DIC, chave)) {
        var i = 0, conv = nums.map(numero), modelo = DIC[chave];
        out = /\{\d\}/.test(modelo) ? modelo.replace(/\{(\d)\}/g, function (_, k) { return conv[k - 1] || ''; }) : modelo.replace(/#/g, function () { return conv[i++] || ''; });
      }
    }
    if (out === null) for (var r = 0; r < REGRAS.length; r++) { var re = REGRAS[r][0]; if (re.test(meio)) { out = REGRAS[r][1] === 'DATA' ? data(meio, re) : meio.replace(re, REGRAS[r][1]); break; } }
    if (out === null) out = soNumeros(meio);
    out = ini + out + fim;
    if (cache.size > 5000) cache.clear();
    cache.set(s, out); return out;
  }

  var feito = new WeakMap(), ATTR = ['title', 'aria-label', 'placeholder', 'alt'];
  function texto(n) {
    var pe = n.parentNode; if (!pe || pe.nodeName === 'SCRIPT' || pe.nodeName === 'STYLE' || pe.nodeName === 'TEXTAREA') return;
    if (pe.closest && pe.closest('[translate="no"]')) return;
    if (feito.get(n) === n.nodeValue) return;
    var t = traduzir(n.nodeValue); if (t !== n.nodeValue) n.nodeValue = t;
    feito.set(n, n.nodeValue);
  }
  var feitoA = new WeakMap();
  function atributos(el) {
    if (el.closest('[translate="no"]')) return;
    var mem = feitoA.get(el); if (!mem) { mem = {}; feitoA.set(el, mem); }
    for (var i = 0; i < ATTR.length; i++) {
      var a = ATTR[i], v = el.getAttribute(a); if (!v || mem[a] === v) continue;
      var t = traduzir(v); if (t !== v) el.setAttribute(a, t); mem[a] = t;
    }
    if (el.tagName === 'INPUT' && el.inputMode === 'decimal' && el.value) { var nv = numeroCampo(el.value); if (nv !== el.value) definir.call(el, nv); }
  }
  function percorrer(raiz) {
    if (raiz.nodeType === 3) { texto(raiz); return; }
    if (raiz.nodeType !== 1 && raiz.nodeType !== 9 && raiz.nodeType !== 11) return;
    if (raiz.nodeType === 1) atributos(raiz);
    var w = document.createTreeWalker(raiz, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) { if (n.nodeType === 3) texto(n); else atributos(n); }
  }

  /* campos numéricos: o cálculo aceita vírgula ou ponto; em inglês o valor aparece com ponto */
  function numeroCampo(v) { return /^\s*[−-]?\d[\d.]*,\d+\s*$|^\s*[−-]?\d{1,3}(?:\.\d{3})+(?:,\d+)?\s*$/.test(v) ? numero(v.trim()) : v; }
  var desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value'), definir = desc.set;
  Object.defineProperty(HTMLInputElement.prototype, 'value', {
    configurable: true, enumerable: desc.enumerable, get: desc.get,
    set: function (v) { definir.call(this, this.inputMode === 'decimal' && typeof v === 'string' ? numeroCampo(v) : v); }
  });

  // textos desenhados em canvas (rótulos das vistas 3D e dos gráficos): traduz na hora de desenhar e de medir
  [window.CanvasRenderingContext2D, window.OffscreenCanvasRenderingContext2D].forEach(function (K) {
    if (!K) return;
    ['fillText', 'strokeText', 'measureText'].forEach(function (k) { var f = K.prototype[k]; if (!f) return;
      K.prototype[k] = function (t) { if (typeof t === 'string') { var a = Array.prototype.slice.call(arguments); a[0] = traduzir(t); return f.apply(this, a); } return f.apply(this, arguments); }; });
  });
  window.Idioma.t = traduzir;
  window.Idioma.acrescentar = function (d) {
    if (!d || typeof d !== 'object') return;
    for (var k in d) if (Object.prototype.hasOwnProperty.call(d, k)) DIC[k] = d[k];
    cache.clear();
    if (document.body) percorrer(document.body);
  };
  // o relatório é montado e impresso na mesma volta: traduz antes de abrir a impressão
  var imprimir = window.print;
  window.print = function () { percorrer(document.body); return imprimir.apply(window, arguments); };
  document.documentElement.lang = 'en';
  function iniciar() {
    percorrer(document.documentElement);
    if (document.title) document.title = traduzir(document.title);
    var meta = document.querySelector('meta[name="description"]'); if (meta && meta.content) meta.content = traduzir(meta.content);
    new MutationObserver(function (lista) {
      for (var i = 0; i < lista.length; i++) {
        var m = lista[i];
        if (m.type === 'characterData') texto(m.target);
        else if (m.type === 'attributes') atributos(m.target);
        else for (var j = 0; j < m.addedNodes.length; j++) percorrer(m.addedNodes[j]);
      }
    }).observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTR });
    document.documentElement.removeAttribute('data-lang-pending');
    document.documentElement.style.visibility = '';
    vigiarSeletor();
  }
  if (document.body) iniciar(); else document.addEventListener('DOMContentLoaded', iniciar);
  // os scripts da página ainda vão montar o conteúdo: confere de novo depois que tudo carregar
  addEventListener('load', function () { percorrer(document.body); });
})();
