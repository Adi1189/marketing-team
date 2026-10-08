// Pagina Sumar: panouri suplimentare (P0 pe clinici, recenzii pe clinici).
// Rulează după report.js și se redesenează odată cu el (perioadă / Month–YTD).

function pctChip(v) {
  if (v == null) return '<span class="muted">—</span>';
  var up = v >= 0;
  return '<span class="' + (up ? 'delta--up' : 'delta--down') + '">' + (v < 0 ? '▼' : '▲') + Math.abs(v).toLocaleString('ro-RO') + '%</span>';
}
function numOr(v) { return v == null ? '—' : v.toLocaleString('ro-RO'); }
function avg12(o) {
  return '<span class="cell__note">medie 12 luni: ' + o.avg12.toLocaleString('ro-RO') + ' (' + pctChip(o.avg12d) + ')</span>';
}
function th(label, hint) { return '<th>' + label + (hint ? '<span class="th__hint">' + hint + '</span>' : '') + '</th>'; }

function p0Panel(rec, isYtd) {
  var title = 'Pacienți noi înregistrați (P0) pe clinici · ' + MONTHS[state.month - 1] + ' ' + state.year;
  if (isYtd) return '<h3 class="panel__title">' + title + '</h3><p class="note">Tabelul pe clinici se vede doar la Month (alege „Month” sus, în dreapta).</p>';
  if (!rec || !rec.p0table) return '<h3 class="panel__title">' + title + '</h3><p class="note">Nu există date pentru luna selectată (urmează).</p>';
  var T = rec.p0table;
  var head = '<thead><tr><th>Clinică</th>' + th('P0', 'pacienți noi în lună') + th('MoM', 'față de luna trecută') +
             th('YoY', 'față de aceeași lună, anul trecut') + th('YTD YoY', 'ian–' + SHORT[state.month - 1].toLowerCase() + ' față de anul trecut') + '</tr></thead>';
  var blocks = T.clusters.map(function (c) {
    var rows = c.rows.map(function (r) {
      return '<tr><td class="left">' + esc(r.n) + '</td><td class="num"><strong>' + numOr(r.p0) + '</strong></td><td class="num">' + pctChip(r.mom) +
             '</td><td class="num">' + pctChip(r.yoy) + '</td><td class="num">' + pctChip(r.ytd) + '</td></tr>';
    }).join('');
    function tot(label, hint, o) {
      return '<tr class="row--tot"><td class="left"><strong>' + label + '</strong><span class="cell__note">' + hint + '</span></td><td class="num"><strong>' + numOr(o.p0) + '</strong>' + avg12(o) +
             '</td><td class="num">' + pctChip(o.mom) + '</td><td class="num">' + pctChip(o.yoy) + '</td><td class="num">' + pctChip(o.ytd) + '</td></tr>';
    }
    return '<div class="cluster"><div class="cluster__head cluster__head--' + c.id + '">' + esc(c.name) + '</div>' +
           '<table class="kpi mini">' + head + '<tbody>' + rows + tot('Total', 'media clinicilor', c.total) + tot('Sumă', 'totalul clinicilor', c.sum) + '</tbody></table></div>';
  }).join('');
  var n = T.network;
  function nrow(label, hint, o, withYoy) {
    return '<div class="net__row"><div><strong>' + label + '</strong><span class="cell__note">' + hint + '</span></div>' +
           '<div class="net__val"><strong>' + o.p0.toLocaleString('ro-RO') + '</strong> ' + pctChip(o.mom) + ' MoM ' + pctChip(o.yoy) + ' YoY</div>' +
           '<div class="net__avg">medie 12 luni: <strong>' + o.avg12.toLocaleString('ro-RO') + '</strong> (' + pctChip(o.avg12d) + ' față de medie)</div></div>';
  }
  var net = '<div class="net">' + nrow('Total rețea (medie / clinică)', 'media clinicilor, nu suma', n.avg) + nrow('Sumă rețea (P0)', 'totalul real al tuturor clinicilor', n.sum) + '</div>';
  var foot = '<p class="note">P0 = pacienți noi înregistrați în sistem în lună, pe clinică. „Total” = media clinicilor, „Sumă” = totalul lor real. MoM = față de luna anterioară. YoY = față de aceeași lună din anul trecut. YTD YoY = aceleași luni (ianuarie până la luna aleasă) în ambii ani. „Medie 12 luni” arată dacă luna e peste sau sub trend. Clinicile fără date în anul precedent nu au YoY.</p>';
  return '<h3 class="panel__title">' + title + '</h3><div class="clusters">' + blocks + '</div>' + net + foot;
}

function reviewsPanel(rec, isYtd) {
  var title = 'Recenzii Google pe clinici · ' + MONTHS[state.month - 1] + ' ' + state.year;
  if (isYtd) return '<h3 class="panel__title">' + title + '</h3><p class="note">Tabelul pe clinici se vede doar la Month (alege „Month” sus, în dreapta).</p>';
  if (!rec || !rec.reviews_by) return '<h3 class="panel__title">' + title + '</h3><p class="note">Nu există date pentru luna selectată (urmează).</p>';
  var R = rec.reviews_by;
  var blocks = R.clusters.map(function (c) {
    var rows = c.rows.map(function (r) {
      return '<tr><td class="left">' + esc(r.n) + '</td><td class="num">' + (r.v == null ? '<span class="muted">urmează</span>' : '<strong>' + r.v.toLocaleString('ro-RO') + '</strong>') + '</td></tr>';
    }).join('');
    return '<div class="cluster"><div class="cluster__head cluster__head--' + c.id + '">' + esc(c.name) + '</div>' +
           '<table class="kpi mini"><thead><tr><th>Clinică</th>' + th('Recenzii noi', 'în lună') + '</tr></thead><tbody>' + rows + '</tbody></table></div>';
  }).join('');
  var tot = '<div class="net"><div class="net__row"><div><strong>Total recenzii Google (rețea)</strong><span class="cell__note">toate clinicile, luna aleasă</span></div>' +
            '<div class="net__val"><strong>' + R.total.toLocaleString('ro-RO') + '</strong></div><div></div></div></div>';
  return '<h3 class="panel__title">' + title + '</h3><div class="clusters">' + blocks + '</div>' + tot +
         '<p class="note">Defalcarea pe clinici urmează. Brăila nu e în lista de clinici pentru recenzii.</p>';
}


function leadsPanel(rec, isYtd) {
  var title = 'Leaduri noi și conversie pe clinici · ' + MONTHS[state.month - 1] + ' ' + state.year;
  if (isYtd) return '<h3 class="panel__title">' + title + '</h3><p class="note">Tabelul pe clinici se vede doar la Month (alege „Month” sus, în dreapta).</p>';
  if (!rec || !rec.leadtable) return '<h3 class="panel__title">' + title + '</h3><p class="note">Nu există date pentru luna selectată (urmează).</p>';
  var T = rec.leadtable;
  var head = '<thead><tr><th>Clinică</th>' + th('Leaduri noi', 'telefoane la prima apariție') + th('Conversie', 'programate ÷ noi') + '</tr></thead>';
  var blocks = T.clusters.map(function (c) {
    var rows = c.rows.map(function (r) {
      var l = r.leads == null ? '—' : r.leads.toLocaleString('ro-RO');
      var cv = r.conv == null ? '<span class="muted">—</span>' : r.conv + '%';
      return '<tr><td class="left">' + esc(r.n) + '</td><td class="num"><strong>' + l + '</strong></td><td class="num">' + cv + '</td></tr>';
    }).join('');
    return '<div class="cluster"><div class="cluster__head cluster__head--' + c.id + '">' + esc(c.name) + '</div>' +
           '<table class="kpi mini">' + head + '<tbody>' + rows + '</tbody></table></div>';
  }).join('');
  var n = T.network;
  var net = '<div class="net"><div class="net__row"><div><strong>Total rețea</strong><span class="cell__note">leaduri noi (unice), Facebook + Instagram</span></div>' +
            '<div class="net__val"><strong>' + n.leads.toLocaleString('ro-RO') + '</strong> · conversie <strong>' + n.conv + '%</strong></div><div></div></div></div>';
  return '<h3 class="panel__title">' + title + '</h3><div class="clusters">' + blocks + '</div>' + net +
         '<p class="note">Leaduri noi = telefoane la prima apariție în istoric. Conversie = leaduri noi programate ÷ leaduri noi. Cotroceni nu are leaduri în sursă (0 în toate lunile), iar Brăila nu are încă. Suma clinicilor e puțin peste totalul rețelei, pentru că același telefon poate apărea la mai multe clinici.</p>';
}

function renderExtra() {
  var isYtd = state.mode === 'ytd';
  var rec = DATA[key(state.year, state.month)];
  document.getElementById('sumar-leads').innerHTML = leadsPanel(rec, isYtd);
  document.getElementById('sumar-p0').innerHTML = p0Panel(rec, isYtd);
  document.getElementById('sumar-reviews').innerHTML = reviewsPanel(rec, isYtd);
}

var _renderBase = render;
render = function () { _renderBase(); renderExtra(); };
renderExtra();
