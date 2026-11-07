/* Tema Snoopy = tema default seluruh website Inside TKJ 4.
   Pilihan tema disimpan di localStorage ('inside-tkj4-palette-v2'). Kalau belum pernah memilih -> snoopy. */
(function () {
  var PK = 'inside-tkj4-palette-v2', p = 'snoopy';
  try { p = localStorage.getItem(PK) || 'snoopy'; } catch (e) {}
  if (p === 'ig') p = 'snoopy';
  document.documentElement.setAttribute('data-palette', p);
  var pg = (location.pathname.split('/').pop() || 'index').replace(/\.html$/, '') || 'index';
  document.documentElement.setAttribute('data-page', pg);
  if (p === 'snoopy') {
    try { document.addEventListener('DOMContentLoaded', function () { document.body.classList.remove('theme-dark'); }); } catch (e) {}
    document.addEventListener('DOMContentLoaded', function () { var m = document.querySelector('meta[name=theme-color]'); if (m) m.setAttribute('content', '#fff6c9'); });
  }
})();
