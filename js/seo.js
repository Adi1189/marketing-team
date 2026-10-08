// Pagina SEO: aceeași structură ca pagina GEO; datele urmează.
var CLINICS = ['Oltenița', 'Giurgiu', 'Slobozia', 'Călărași', 'Brăila', 'Dorobanți', 'Cotroceni', 'Târgoviște', 'Focșani'];
var PEND = '<span class="muted">urmează</span>';

function seoMonth() { return MONTHS[state.month - 1] + ' ' + state.year; }
function th(label, hint) { return '<th>' + label + (hint ? '<span class="th__hint">' + hint + '</span>' : '') + '</th>'; }

function qPanel() {
  var kws = ['Dentist [oraș]', 'Clinica dentara [oraș]', 'Stomatologie [oraș]', 'Dentist copii [oraș]'];
  var head = '<tr><th class="left">Cuvânt cheie</th>' + CLINICS.map(function (c) { return '<th class="grp">' + esc(c) + '</th>'; }).join('') + '</tr>';
  var rows = kws.map(function (k) { return '<tr><td class="left">' + k + '</td>' + CLINICS.map(function () { return '<td class="num">' + PEND + '</td>'; }).join('') + '</tr>'; }).join('');
  return '<h3 class="panel__title">Rezultate pe cuvânt cheie și clinică · ' + seoMonth() + '</h3><div class="table-wrap"><table class="kpi cmp qtable"><thead>' + head + '</thead><tbody>' + rows + '</tbody></table></div>' +
    '<p class="note">Poziția în Google pentru fiecare căutare, pe clinică (1 = primul rezultat). Datele urmează.</p>';
}
function citiesPanel() {
  var rows = CLINICS.map(function (c) {
    return '<tr><td class="left">' + esc(c) + '</td>' + [0, 1, 2, 3, 4].map(function () { return '<td class="num">' + PEND + '</td>'; }).join('') + '</tr>';
  }).join('');
  return '<h3 class="panel__title">Poziții pe clinică · ' + seoMonth() + '</h3><div class="table-wrap"><table class="kpi cmp"><thead><tr><th>Clinică</th>' +
    th('Poziție „dentist [oraș]”', 'locul în Google') + th('Afișări', 'de câte ori a apărut') + th('Clicuri pe pagina clinicii', 'din Google') + th('Poziția paginii clinicii', 'locul în Google') + th('Map Pack', 'apare printre primele 3 de pe hartă') +
    '</tr></thead><tbody>' + rows + '</tbody></table></div>';
}
function generalPanel() {
  return '<h3 class="panel__title">Cuvinte generale, fără oraș · ' + seoMonth() + '</h3><div class="table-wrap"><table class="kpi cmp"><thead><tr><th>Cuvânt cheie</th>' +
    th('Poziție', 'locul în Google') + th('Afișări', 'de câte ori a apărut') + '</tr></thead><tbody><tr><td class="left">' + PEND + '</td><td class="num">' + PEND + '</td><td class="num">' + PEND + '</td></tr></tbody></table></div>';
}
function trendPanel() {
  var rows = CLINICS.map(function (c) { return '<tr><td class="left">' + esc(c) + '</td>' + [0, 1, 2].map(function () { return '<td class="num">' + PEND + '</td>'; }).join('') + '</tr>'; }).join('');
  return '<h3 class="panel__title">Aceeași căutare în mai multe măsurători · „dentist [oraș]”</h3><div class="table-wrap"><table class="kpi cmp"><thead><tr><th>Clinică</th><th>Măsurătoarea 1</th><th>Măsurătoarea 2</th><th>Măsurătoarea 3</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
    '<p class="note">Poziția în Google, aceeași căutare, la fiecare măsurătoare (1 = primul rezultat). Datele măsurătorilor urmează.</p>';
}
function takePanel() {
  return '<h3 class="panel__title">Constatări din rapoartele SEO</h3><p class="note">Constatările urmează.</p>';
}

function renderSeo() {
  document.getElementById('seo-q').innerHTML = qPanel();
  document.getElementById('seo-cities').innerHTML = citiesPanel();
  document.getElementById('seo-general').innerHTML = generalPanel();
  document.getElementById('seo-trend').innerHTML = trendPanel();
  document.getElementById('seo-take').innerHTML = takePanel();
}
var _renderBaseSeo = render;
render = function () { _renderBaseSeo(); renderSeo(); };
renderSeo();
