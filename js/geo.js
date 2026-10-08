// Pagina GEO: panouri suplimentare (pe oraș, aceeași întrebare în 3 măsurători, recenzii vs competiție, constatări).
// Rulează după report.js și se redesenează odată cu el.

function posCell(v) {
  if (v === 'n/m') return '<span class="muted">n/m</span>';
  if (v == null) return '<span class="muted">—</span>';
  if (v === 'jos') return '<span class="pos--low">jos</span>';
  return '<span class="' + (v === 1 ? 'pos--top' : '') + '">' + v + '</span>';
}
function cnt(a) { return a[0] + '/' + a[1] + ' · ' + a[2] + '× #1'; }

function citiesPanel(rec, isYtd) {
  var title = 'Apariție pe oraș · ' + MONTHS[state.month - 1] + ' ' + state.year;
  if (isYtd) return '<h3 class="panel__title">' + title + '</h3><p class="note">Tabelul pe orașe se vede doar la Month (alege „Month” sus, în dreapta).</p>';
  if (!rec || !rec.geotable) return '<h3 class="panel__title">' + title + '</h3><p class="note">Nu există măsurătoare GEO pentru luna selectată.</p>';
  title += ' · măsurătoarea din ' + rec.measured;
  var rows = rec.geotable.rows.map(function (r) {
    var tot = [r.cg[0] + r.g[0], r.cg[1] + r.g[1], r.cg[2] + r.g[2]];
    return '<tr><td class="left">' + esc(r.n) + '</td><td class="num">' + cnt(r.cg) + '</td><td class="num">' + cnt(r.g) +
           '</td><td class="num"><strong>' + cnt(tot) + '</strong></td><td class="num">' + (r.reviews == null ? '<span class="muted">—</span>' : r.reviews.toLocaleString('ro-RO')) + '</td></tr>';
  }).join('');
  return '<h3 class="panel__title">' + title + '</h3><div class="table-wrap"><table class="kpi cmp"><thead><tr><th>Oraș</th>' +
    '<th>ChatGPT<span class="th__hint">apariții / întrebări · de câte ori primii</span></th><th>Google AI Mode<span class="th__hint">apariții / întrebări · de câte ori primii</span></th>' +
    '<th>Total<span class="th__hint">ambele motoare</span></th><th>Recenzii Google<span class="th__hint">totalul clinicii la acea dată</span></th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
    '<p class="note">„#1” = poziția 1 în răspuns. Orașele măsurate diferă: 4 pe 31 iulie și 8 septembrie, 6 pe 5 octombrie (Călărași și Oltenița au intrat atunci).</p>';
}


function questionsPanel(rec, isYtd) {
  var title = 'Rezultate pe întrebare, clinică și motor AI · ' + MONTHS[state.month - 1] + ' ' + state.year;
  if (isYtd) return '<h3 class="panel__title">' + title + '</h3><p class="note">Tabelul pe întrebări se vede doar la Month (alege „Month” sus, în dreapta).</p>';
  if (!rec || !rec.qtable) return '<h3 class="panel__title">' + title + '</h3><p class="note">Nu există măsurătoare GEO pentru luna selectată.</p>';
  var Q = rec.qtable;
  var head1 = '<tr><th rowspan="2" class="left">Întrebare</th>' + Q.cities.map(function (c) { return '<th colspan="2" class="grp">' + esc(c.n) + '</th>'; }).join('') + '</tr>';
  var head2 = '<tr>' + Q.cities.map(function () { return '<th class="subh">ChatGPT</th><th class="subh">Google</th>'; }).join('') + '</tr>';
  var rows = Q.questions.map(function (q, i) {
    return '<tr><td class="left">' + esc(q) + '</td>' + Q.cities.map(function (c) {
      return '<td class="num">' + posCell(c.cg[i]) + '</td><td class="num">' + posCell(c.g[i]) + '</td>';
    }).join('') + '</tr>';
  }).join('');
  var total = '<tr class="row--tot"><td class="left"><strong>Apariții</strong><span class="cell__note">din ' + Q.questions.length + ' întrebări</span></td>' + Q.cities.map(function (c) {
    var a = c.cg.filter(function (x) { return x != null; }).length, b = c.g.filter(function (x) { return x != null; }).length;
    return '<td class="num"><strong>' + a + '/' + Q.questions.length + '</strong></td><td class="num"><strong>' + b + '/' + Q.questions.length + '</strong></td>';
  }).join('') + '</tr>';
  return '<h3 class="panel__title">' + title + ' · măsurătoarea din ' + rec.measured + '</h3><div class="table-wrap"><table class="kpi cmp qtable"><thead>' + head1 + head2 + '</thead><tbody>' + rows + total + '</tbody></table></div>' +
    '<p class="note">Cifra = poziția în răspuns (1 = primul, în verde). „jos” = apărem, dar spre finalul listei. „—” = nu apărem. Întrebările diferă între măsurători: 7 întrebări pe 31 iulie și 8 septembrie, 5 întrebări noi pe 5 octombrie.</p>';
}

function trendPanel() {
  var T = CFG.trend;
  var rows = T.map(function (r) {
    return '<tr><td class="left">' + esc(r.n) + '</td>' + r.cg.map(function (v) { return '<td class="num">' + posCell(v) + '</td>'; }).join('') +
           r.g.map(function (v) { return '<td class="num">' + posCell(v) + '</td>'; }).join('') + '</tr>';
  }).join('');
  return '<h3 class="panel__title">Aceeași întrebare în 3 măsurători · „Recomandă-mi un dentist bun în [oraș]”</h3><div class="table-wrap"><table class="kpi cmp"><thead>' +
    '<tr><th rowspan="2">Oraș</th><th colspan="3" class="grp">ChatGPT</th><th colspan="3" class="grp">Google AI Mode</th></tr>' +
    '<tr><th>31 iul</th><th>8 sep</th><th>5 oct</th><th>31 iul</th><th>8 sep</th><th>5 oct</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
    '<p class="note">Cifra = poziția în lista din răspuns (1 = primul). „jos” = apărem, dar spre finalul listei. „—” = nu apărem. „n/m” = oraș nemăsurat în acea rulare.</p>';
}

function comparePanel() {
  var rows = CFG.localCompare.map(function (r) {
    return '<tr><td class="left">' + esc(r.n) + '</td><td class="left">' + esc(r.status) + '</td><td class="num"><strong>' + r.ours + '</strong></td><td class="num">' + r.top + '<span class="cell__note">' + esc(r.topName) + '</span>' +
           '</td><td class="num">' + r.rating + '</td><td class="num">' + r.cg + '</td><td class="num">' + r.g + '</td></tr>';
  }).join('');
  return '<h3 class="panel__title">Recenzii față de competiția locală · 5 octombrie</h3><div class="table-wrap"><table class="kpi cmp"><thead><tr><th>Oraș</th><th>Statut</th>' +
    '<th>Recenziile noastre<span class="th__hint">pe Google</span></th><th>Cel mai mare concurent<span class="th__hint">recenzii · numele clinicii</span></th><th>Rating<span class="th__hint">al nostru</span></th>' +
    '<th>ChatGPT<span class="th__hint">apariții din 5 · de câte ori primii</span></th><th>Google AI Mode<span class="th__hint">apariții din 5 · de câte ori primii</span></th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
    '<p class="note">Ratingul e la fel de bun peste tot (4,9–5,0); diferă volumul de recenzii față de cel mai puternic concurent local. Cifrele concurenților sunt din ce a afișat ChatGPT (~ = aproximativ). Pozițiile Google sunt orientative.</p>';
}

function takePanel() {
  return '<h3 class="panel__title">Constatări din rapoartele GEO</h3><ul class="notes notes--take">' +
    CFG.take.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>';
}

function renderGeo() {
  var isYtd = state.mode === 'ytd';
  var rec = DATA[key(state.year, state.month)];
  document.getElementById('geo-cities').innerHTML = citiesPanel(rec, isYtd);
  document.getElementById('geo-questions').innerHTML = questionsPanel(rec, isYtd);
  document.getElementById('geo-trend').innerHTML = trendPanel();
  document.getElementById('geo-compare').innerHTML = comparePanel();
  document.getElementById('geo-take').innerHTML = takePanel();
}

var _renderBaseGeo = render;
render = function () { _renderBaseGeo(); renderGeo(); };
renderGeo();
