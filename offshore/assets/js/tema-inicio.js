/* Tema claro/escuro antes de desenhar a página (versão sem script embutido, para páginas com CSP). */
try { var t = localStorage.getItem('vg-theme'); if (t !== 'light' && t !== 'dark') t = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', t); } catch (e) { /* tema padrão */ }
