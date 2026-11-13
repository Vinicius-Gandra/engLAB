/* tema escolhido antes da primeira pintura (o mesmo do resto do site) */
try { var t = localStorage.getItem('vg-theme'); if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t); } catch (e) { /* sem armazenamento */ }
