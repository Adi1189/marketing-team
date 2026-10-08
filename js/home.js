// Pagina de start: „Partajare document” – trimite linkul paginii (cel de mobil, dacă ești pe telefon).
(function () {
  var toast = document.createElement('div'); toast.className = 'toast'; document.body.appendChild(toast);
  function say(t) { toast.textContent = t; toast.classList.add('is-on'); setTimeout(function () { toast.classList.remove('is-on'); }, 2200); }
  var base = location.href.replace(/[#?].*$/, '').replace(/[^/]*$/, '');
  var mobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  document.querySelectorAll('[data-share]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var url = base + (mobile ? btn.getAttribute('data-mobile') : btn.getAttribute('data-desktop'));
      var title = btn.getAttribute('data-title');
      if (navigator.share) { navigator.share({ title: title, url: url }).catch(function () {}); return; }
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(url).then(function () { say('Link copiat: ' + title); }, function () { window.prompt('Copiază linkul:', url); });
      } else { window.prompt('Copiază linkul:', url); }
    });
  });
})();
