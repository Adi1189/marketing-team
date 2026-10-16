// Pagina Recenzii: grafice și tabele suplimentare (SVG, fără biblioteci). Rulează după report.js și se redesenează odată cu el.
var X = window.REVIEWS_EXTRA, RMONTHS = Object.keys(DATA).sort();
var CL = X.clinics;                                   // [{id,name}]
var MS3 = ['Ian','Feb','Mar','Apr','Mai','Iun','Iul','Aug','Sep','Oct','Noi','Dec'];
function rv(m) { return DATA[m] || { total: 0 }; }
function cv(cid, m) { var r = CFG.compare.data[cid] && CFG.compare.data[cid][m]; return r ? r.total : 0; }
function fn(v) { return (v == null ? '–' : Math.round(v).toLocaleString('ro-RO')); }
function f2r(v) { return v.toFixed(2).replace('.', ','); }
function yearTotal(y, upTo) { var t = 0; RMONTHS.forEach(function (k) { if (+k.slice(0, 4) === y && +k.slice(5) <= (upTo || 12)) t += rv(k).total; }); return t; }
function lbl(k) { return MS3[+k.slice(5) - 1] + ' ' + k.slice(2, 4); }

function barsSvg(labels, vals, opts) {
  var n = labels.length, step = opts.step || 36, W = Math.max(n * step, 320), H = opts.h || 260, top = 30, bot = 44, plotH = H - top - bot;
  var max = Math.max.apply(null, vals.concat(opts.line || [0])) * 1.12 || 1;
  function y(v) { return top + plotH - v / max * plotH; }
  var s = '<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" role="img">';
  [0.33, 0.66, 1].forEach(function (f) { var yy = top + plotH * (1 - f); s += '<line x1="8" x2="' + (W - 8) + '" y1="' + yy + '" y2="' + yy + '" stroke="#f3dfbf"/>'; });
  labels.forEach(function (l, i) {
    var cx = (i + 0.5) * step, v = vals[i], bw = Math.min(opts.bw || 22, step * 0.62), hi = i === opts.hi;
    s += '<rect x="' + (cx - bw / 2) + '" y="' + y(v) + '" width="' + bw + '" height="' + Math.max(top + plotH - y(v), v > 0 ? 1 : 0) + '" rx="3" fill="' + (hi ? '#7b1c16' : (opts.dim && opts.dim[i] ? '#d9b7a8' : '#a05048')) + '"' + (opts.proj && opts.proj[i] ? ' fill-opacity=".35" stroke="#7b1c16" stroke-dasharray="4 3"' : '') + '/>';
    if (v > 0 && (opts.every ? i % opts.every === 0 : true) || hi) s += '<text x="' + cx + '" y="' + (y(v) - 6) + '" text-anchor="middle" font-size="11" font-weight="' + (hi ? 800 : 600) + '" fill="#5a1a14">' + fn(v) + '</text>';
    if (!opts.skipLabel || opts.skipLabel(i)) s += '<text x="' + cx + '" y="' + (H - 18) + '" text-anchor="middle" font-size="' + (opts.fs || 10.5) + '" fill="#8a7a6c">' + l + '</text>';
  });
  if (opts.line) {
    var d = '', pts = opts.line.map(function (v, i) { return v == null ? null : [(i + 0.5) * step, y(v)]; });
    pts.forEach(function (p, i) { if (p) d += (d && pts[i - 1] ? 'L' : 'M') + p[0] + ',' + p[1]; });
    s += '<path d="' + d + '" fill="none" stroke="#c9a227" stroke-width="2.6" stroke-linejoin="round"/>';
  }
  return s + '</svg>';
}
function wrap(title, hint, svg, note) {
  return '<h3 class="panel__title">' + title + '</h3>' + (hint ? '<p class="note" style="margin-top:0">' + hint + '</p>' : '') + '<div class="chartcard" style="padding:12px;overflow-x:auto">' + svg + '</div>' + (note ? '<p class="note">' + note + '</p>' : '');
}

function trendPanel() {
  var sel = key(state.year, state.month);
  var f0 = RMONTHS.indexOf('2024-01'), MS = RMONTHS.slice(f0);
  var all = RMONTHS.map(function (k) { return rv(k).total; }), ma = all.map(function (v, i) { return i < 2 ? null : (all[i] + all[i - 1] + all[i - 2]) / 3; }).slice(f0);
  var labels = MS.map(lbl), vals = MS.map(function (k) { return rv(k).total; });
  var svg = barsSvg(labels, vals, { hi: MS.indexOf(sel), line: ma, step: 44, bw: 26, every: 1, skipLabel: function (i) { return true; } });
  var recent = RMONTHS.slice(-12);
  // nota medie lunară, doar din 2024 (înainte, o singură recenzie schimbă totul)
  var from = RMONTHS.indexOf('2024-01'), lab2 = RMONTHS.slice(from).map(lbl), avgs = RMONTHS.slice(from).map(function (k) { var r = rv(k); return r.total ? r.stars / r.total : null; });
  var s2 = lineSvg(lab2, avgs, RMONTHS.slice(from).map(function (k) { return rv(k).total; }), RMONTHS.indexOf(sel) - from);
  return wrap('Evoluția pe luni · recenzii noi, toate clinicile (din ianuarie 2024)', 'Barele arată câte recenzii noi au apărut în fiecare lună; linia aurie e media pe 3 luni, ca să se vadă tendința. Luna aleasă sus e închisă la culoare.', svg,
              'Martie 2024 (243) vine dintr-o campanie de colectare, nu din ritmul obișnuit. Mai devreme au fost iunie 2023 (610) și noiembrie 2023 (276): le vezi în panoul „Pe ani”.') +
         wrap('Nota medie pe luni (din ianuarie 2024)', 'Nota medie a recenziilor noi din fiecare lună. Axa începe de la 4,25, ca să se vadă diferențele mici; aproape toate lunile sunt peste 4,8.', s2, null);
}
function lineSvg(labels, vals, counts, hi) {
  var n = labels.length, step = 38, W = n * step, H = 230, top = 28, bot = 44, plotH = H - top - bot, lo = 4.25, hiV = 5.0;
  function y(v) { return top + plotH - (Math.max(lo, v) - lo) / (hiV - lo) * plotH; }
  var s = '<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '">';
  [4.25, 4.5, 4.75, 5.0].forEach(function (v) { var yy = y(v); s += '<line x1="8" x2="' + (W - 8) + '" y1="' + yy + '" y2="' + yy + '" stroke="#f3dfbf"/><text x="4" y="' + (yy - 3) + '" font-size="10" fill="#8a7a6c">' + f2r(v) + '</text>'; });
  var d = ''; vals.forEach(function (v, i) { if (v != null) d += (d && vals[i - 1] != null ? 'L' : 'M') + ((i + 0.5) * step) + ',' + y(v); });
  s += '<path d="' + d + '" fill="none" stroke="#a8841e" stroke-width="2.6" stroke-linejoin="round"/>';
  vals.forEach(function (v, i) {
    if (v == null) return; var cx = (i + 0.5) * step, h = i === hi;
    s += '<circle cx="' + cx + '" cy="' + y(v) + '" r="' + (h ? 6 : 3.5) + '" fill="' + (h ? '#7b1c16' : '#7b1c16') + '"/>';
    if (h || i === n - 1) s += '<text x="' + cx + '" y="' + (y(v) - 10) + '" text-anchor="middle" font-size="11" font-weight="800" fill="#5a1a14">' + f2r(v) + '</text>';
    if (i % 2 === 0 || i === n - 1) s += '<text x="' + cx + '" y="' + (H - 18) + '" text-anchor="middle" font-size="10.5" fill="#8a7a6c">' + labels[i] + '</text>';
  });
  return s + '</svg>';
}

function heatPanel() {
  var y = state.year, ms = [1,2,3,4,5,6,7,8,9,10,11,12].filter(function (m) { return DATA[key(y, m)]; });
  var max = 1; CL.forEach(function (c) { ms.forEach(function (m) { max = Math.max(max, cv(c.id, key(y, m))); }); });
  var head = '<tr><th class="left">Clinică</th>' + ms.map(function (m) { return '<th>' + MS3[m - 1] + '</th>'; }).join('') + '<th>Total ' + y + '</th></tr>';
  var rows = CL.map(function (c) {
    var tot = 0, tds = ms.map(function (m) {
      var v = cv(c.id, key(y, m)); tot += v; var a = v ? 0.12 + 0.78 * Math.sqrt(v / max) : 0;
      return '<td class="num" style="background:rgba(123,28,22,' + a.toFixed(2) + ');color:' + (a > 0.5 ? '#fff' : '#3a2a22') + '">' + (v || '<span class="muted">–</span>') + '</td>';
    }).join('');
    return '<tr><td class="left">' + esc(c.name) + '</td>' + tds + '<td class="num"><strong>' + fn(tot) + '</strong></td></tr>';
  }).join('');
  var tr = '<tr class="row--tot"><td class="left"><strong>Total rețea</strong></td>' + ms.map(function (m) { return '<td class="num"><strong>' + rv(key(y, m)).total + '</strong></td>'; }).join('') + '<td class="num"><strong>' + fn(yearTotal(y)) + '</strong></td></tr>';
  return '<h3 class="panel__title">Pe clinici, lună de lună · ' + y + '</h3><p class="note" style="margin-top:0">Câte recenzii noi a primit fiecare clinică în fiecare lună; cu cât culoarea e mai intensă, cu atât luna a fost mai bună pentru clinica respectivă. Anul se schimbă din chipurile de sus.</p><div class="table-wrap"><table class="kpi cmp"><thead>' + head + '</thead><tbody>' + rows + tr + '</tbody></table></div>';
}

function yearsPanel() {
  var yrs = [2022, 2023, 2024, 2025, 2026], cur = 2026, last = +RMONTHS[RMONTHS.length - 1].slice(5);
  var tot = yrs.map(function (y) { return y === cur ? yearTotal(y) : yearTotal(y); });
  var proj = Math.round(yearTotal(cur) / last * 12);
  var labels = yrs.map(function (y) { return y === cur ? y + ' (ian–' + MS3[last - 1].toLowerCase() + ')' : String(y); }).concat(['2026 la ritmul actual']);
  var vals = tot.concat([proj]);
  var svg = barsSvg(labels, vals, { step: 110, bw: 54, h: 250, fs: 12, proj: [false, false, false, false, false, true], every: 1 });
  var yoy = function (y) { var a = yearTotal(y), b = yearTotal(y - 1); return b ? (a / b - 1) * 100 : null; };
  var samePeriod = yearTotal(cur - 1, last);
  var head = '<tr><th class="left">Clinică</th>' + yrs.map(function (y) { return '<th>' + y + '</th>'; }).join('') + '<th title="ian–sep ' + cur + ' față de ian–sep ' + (cur - 1) + '">Ian–' + MS3[last - 1].toLowerCase() + ' ' + cur + ' vs ' + (cur - 1) + '</th></tr>';
  function ct(cid, y, upTo) { var t = 0; RMONTHS.forEach(function (k) { if (+k.slice(0, 4) === y && +k.slice(5) <= (upTo || 12)) t += cv(cid, k); }); return t; }
  var rows = CL.map(function (c) {
    var a = ct(c.id, cur, last), b = ct(c.id, cur - 1, last), d = b ? (a / b - 1) * 100 : null;
    var cls = d == null ? '' : d > 0 ? 'delta--up' : d < 0 ? 'delta--down' : '';
    return '<tr><td class="left">' + esc(c.name) + '</td>' + yrs.map(function (y) { var v = ct(c.id, y); return '<td class="num">' + (v ? fn(v) : '<span class="muted">–</span>') + '</td>'; }).join('') +
      '<td class="num"><span class="' + cls + '">' + (d == null ? (a ? 'nou' : '–') : (d > 0 ? '+' : '') + d.toFixed(0).replace('-', '−') + '%') + '</span> <span class="cell__note">' + fn(a) + ' vs ' + fn(b) + '</span></td></tr>';
  }).join('');
  var rowTot = '<tr class="row--tot"><td class="left"><strong>Total rețea</strong></td>' + yrs.map(function (y) { return '<td class="num"><strong>' + fn(yearTotal(y)) + '</strong></td>'; }).join('') +
    '<td class="num"><strong>' + (samePeriod ? '+' + ((yearTotal(cur) / samePeriod - 1) * 100).toFixed(1).replace('.', ',') + '%' : '–') + '</strong> <span class="cell__note">' + fn(yearTotal(cur)) + ' vs ' + fn(samePeriod) + '</span></td></tr>';
  return wrap('Pe ani · recenzii noi', 'Bara hașurată e o proiecție: dacă ritmul din primele ' + last + ' luni ale lui ' + cur + ' se menține tot anul. Nu e un rezultat, ci o estimare simplă.', svg,
              'Ultima coloană compară același interval din ani diferiți (ian–' + MS3[last - 1].toLowerCase() + ' ' + cur + ' față de ian–' + MS3[last - 1].toLowerCase() + ' ' + (cur - 1) + '), ca să nu comparăm 9 luni cu 12.') +
         '<div class="table-wrap" style="margin-top:14px"><table class="kpi cmp"><thead>' + head + '</thead><tbody>' + rows + rowTot + '</tbody></table></div>';
}

function profilePanel() {
  var rows = CL.map(function (c) {
    var p = X.profile[c.id], api = 0; RMONTHS.forEach(function (k) { api += cv(c.id, k); });
    var gap = p.total - api;
    return '<tr><td class="left">' + esc(c.name) + '</td><td class="num"><strong>' + f2r(p.rating).replace(/0$/, '0') + '</strong></td><td class="num">' + fn(p.total) + '</td><td class="num">' + fn(api) + '</td><td class="num">' + (gap > 0 ? '+' + gap : gap) + '</td></tr>';
  }).join('');
  var tp = 0, ta = 0; CL.forEach(function (c) { tp += X.profile[c.id].total; RMONTHS.forEach(function (k) { ta += cv(c.id, k); }); });
  return '<h3 class="panel__title">Profilul Google acum</h3><p class="note" style="margin-top:0">Nota și numărul total de recenzii afișate pe profilul fiecărei clinici (toți anii la un loc), la data raportului: ' + X.generated + '. Coloana „în raport” cuprinde doar recenziile din ianuarie 2022 – septembrie 2026.</p>' +
    '<div class="table-wrap"><table class="kpi cmp"><thead><tr><th class="left">Clinică</th><th>Nota pe profil</th><th>Recenzii pe profil</th><th>Recenzii în raport</th><th>Diferență</th></tr></thead><tbody>' + rows +
    '<tr class="row--tot"><td class="left"><strong>Total rețea</strong></td><td class="num">–</td><td class="num"><strong>' + fn(tp) + '</strong></td><td class="num"><strong>' + fn(ta) + '</strong></td><td class="num"><strong>+' + (tp - ta) + '</strong></td></tr></tbody></table></div>' +
    '<p class="note">Diferența vine în mare parte din recenziile de dinainte de ianuarie 2022 (65, după raportul anual: Giurgiu 23, Oltenița 37, Dorobanți 5) și din cele noi din octombrie, până pe 16. Octombrie nu e în raport, deci nu știm cât din diferență rămâne neexplicat. Notele de pe profil sunt rotunjite la o zecimală de Google.</p>';
}

function renderRev() {
  document.getElementById('rev-trend').innerHTML = trendPanel();
  document.getElementById('rev-heat').innerHTML = heatPanel();
  document.getElementById('rev-years').innerHTML = yearsPanel();
  document.getElementById('rev-profile').innerHTML = profilePanel();
  document.querySelectorAll('#rev-trend .chartcard').forEach(function (c) { c.scrollLeft = c.scrollWidth; });
}
var _renderBaseRev = render;
render = function () { _renderBaseRev(); renderRev(); };
renderRev();
