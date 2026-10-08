// Marketing Team

// Buton principal care deschide / închide sub-opțiunile (pagina de start)
document.querySelectorAll('[data-toggle]').forEach(function (btn) {
  var target = document.getElementById(btn.dataset.toggle);
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    target.classList.toggle('is-open', !open);
  });
});

// Pagina Lunare: un singur panou deschis o dată (Sumar / Social Media)
var tabs = document.querySelectorAll('[data-panel]');
tabs.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var willOpen = btn.getAttribute('aria-expanded') !== 'true';
    tabs.forEach(function (t) {
      t.setAttribute('aria-expanded', 'false');
      document.getElementById(t.dataset.panel).classList.remove('is-open');
    });
    if (willOpen) {
      btn.setAttribute('aria-expanded', 'true');
      document.getElementById(btn.dataset.panel).classList.add('is-open');
    }
  });
});

// Butoanele de canal (data-channel) sunt deocamdată fără destinație;
// aici le legăm de rapoarte când stabilim unde duc.
