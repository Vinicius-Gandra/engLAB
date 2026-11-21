/* Abas das etapas: deixa a etapa atual à vista quando a barra rola de lado. */
(function () { const a = document.querySelector('.s-areas [aria-current="page"]'), bar = a && a.parentElement; if (bar && bar.scrollWidth > bar.clientWidth) bar.scrollLeft = Math.max(0, a.offsetLeft - 8); })();
