// Pagini săptămânale (Tier 1). Configurația vine din js/wk-<canal>.js în window.WEEKLY_CONFIG:
//   { channel, weeks:[{id,range,month}], kpis, cmp:{brands,kpis}, topLabel, take:[...], notes:[...],
//     data: { brandId: { "S40": { <kpi>:..., q:{}, note:{}, top:{title,value,q} } } } }
// Același mod de a marca cifrele ca la lunare: q = "≥" (minim) / "≈" (aproximativ), note = explicație mică.

var CFG = window.WEEKLY_CONFIG;
var WEEKS = CFG.weeks;
var US = CFG.cmp.brands.filter(function (b) { return b.us; })[0].id;
var state = { idx: WEEKS.length - 1 };

var EMBED = /[?&]embed=1/.test(location.search) && window.parent !== window;
if (EMBED) {
  var qpw = new URLSearchParams(location.search);
  var wi = parseInt(qpw.get('w'), 10);
  if (!isNaN(wi) && wi >= 0 && wi < WEEKS.length) state.idx = wi;
}

function nf(v, d) { return v.toLocaleString('ro-RO', { minimumFractionDigits: d, maximumFractionDigits: d }); }
function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function fmt(k, v) {
  if (v == null) return '–';
  if (k.type === 'pct') return nf(v, 2) + '%';
  if (k.type === 'dec' || k.type === 'num1') return nf(v, 1);
  return v.toLocaleString('ro-RO');
}
function applyRatios(o, KP) {
  KP.forEach(function (k) {
    if (!k.ratio) return;
    var n = o[k.ratio[0]], d = o[k.ratio[1]];
    var v = (n == null || !d) ? null : n / d;
    o[k.key] = (v != null && k.type === 'num') ? Math.round(v) : v;
  });
}
function rowOf(brand, week, KP) {
  var r = (CFG.data[brand] || {})[week];
  if (!r) return null;
  var out = {};
  Object.keys(r).forEach(function (f) { out[f] = r[f]; });
  out.q = out.q || {}; out.note = out.note || {};
  applyRatios(out, KP);
  return out;
}
function delta(k, cur, prev, qc, qp) {
  if (cur == null || prev == null) return { text: '–', cls: '' };
  if ((qc || '').indexOf('≥') > -1 || (qp || '').indexOf('≥') > -1) return { text: '–', cls: '' };
  if (prev === 0) return { text: '–', cls: '' };
  var d = (cur - prev) / prev * 100;
  return { text: (d > 0 ? '+' : '') + d.toLocaleString('ro-RO', { maximumFractionDigits: 1 }) + '%', cls: d > 0 ? 'delta--up' : d < 0 ? 'delta--down' : '' };
}
function cellHtml(k, row, withNote) {
  var v = row ? row[k.key] : null;
  var q = row && row.q ? (row.q[k.key] || '') : '';
  var n = withNote && row && row.note ? (row.note[k.key] || '') : '';
  var main = v == null ? '–' : (q ? '<span class="q">' + q + '</span>' : '') + fmt(k, v);
  return main + (n ? '<span class="cell__note">' + esc(n) + '</span>' : '');
}
function el(tag, cls, text) {
  var e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

function renderPeriod() {
  var wrap = document.getElementById('chips-weeks');
  wrap.innerHTML = '';
  var lastMonth = null, group = null;
  WEEKS.forEach(function (w, i) {
    if (w.month !== lastMonth) {
      if (lastMonth !== null) wrap.appendChild(el('span', 'period__sep'));
      wrap.appendChild(el('span', 'period__label', w.month));
      group = el('div', 'period__months');
      wrap.appendChild(group);
      lastMonth = w.month;
    }
    var b = el('button', 'chip chip--month' + (i === state.idx ? ' is-active' : ''), w.id + ' · ' + w.range);
    b.type = 'button';
    b.addEventListener('click', function () { state.idx = i; render(); });
    group.appendChild(b);
  });
}

function renderKpis() {
  var w = WEEKS[state.idx], p = WEEKS[state.idx - 1];
  var KP = CFG.kpis;
  var cur = rowOf(US, w.id, KP), prev = p ? rowOf(US, p.id, KP) : null;
  document.getElementById('kpi-head').innerHTML =
    '<th>KPI</th><th>' + w.id + ' · ' + w.range + '</th><th>' + (p ? p.id + ' · ' + p.range : '–') + '</th><th>Variație</th>';
  document.getElementById('kpi-body').innerHTML = KP.filter(function (k) { return !k.hidden; }).map(function (k) {
    var c = cur ? cur[k.key] : null, pv = prev ? prev[k.key] : null;
    var d = delta(k, c, pv, cur && cur.q ? cur.q[k.key] : '', prev && prev.q ? prev.q[k.key] : '');
    return '<tr><td class="kpi__name">' + k.label + '<span class="kpi__hint">' + k.hint + '</span></td>' +
           '<td class="num"><strong>' + cellHtml(k, cur, true) + '</strong></td>' +
           '<td class="num">' + cellHtml(k, prev, false) + '</td>' +
           '<td class="num ' + d.cls + '">' + d.text + '</td></tr>';
  }).join('');
}

function renderCompare() {
  var w = WEEKS[state.idx], C = CFG.cmp;
  document.getElementById('cmp-title').textContent = 'Comparație cu concurenții Tier 1 · ' + w.id + ' (' + w.range + ')';
  var cols = C.kpis.filter(function (k) { return !k.hidden; });
  document.getElementById('cmp-head').innerHTML = '<th>Cont</th>' + cols.map(function (k) {
    return '<th title="' + esc(k.hint || '') + '">' + k.label + '</th>';
  }).join('');
  document.getElementById('cmp-body').innerHTML = C.brands.map(function (b) {
    var row = rowOf(b.id, w.id, C.kpis);
    var tds = cols.map(function (k) {
      var v = row ? row[k.key] : null;
      var q = row && row.q ? (row.q[k.key] || '') : '';
      var n = row && row.note ? (row.note[k.key] || '') : '';
      var txt = v == null ? '–' : (q ? '<span class="q">' + q + '</span>' : '') + fmt(k, v);
      return '<td class="num"' + (n ? ' title="' + esc(n) + '"' : '') + '>' + txt + '</td>';
    }).join('');
    return '<tr class="' + (b.us ? 'row--us' : '') + '"><td class="left">' + esc(b.name) + '</td>' + tds + '</tr>';
  }).join('');
}

function renderTop() {
  var w = WEEKS[state.idx], C = CFG.cmp;
  document.getElementById('top-title').textContent = 'Top postarea săptămânii · Dr. Ardeleanu vs concurența · ' + w.id + ' (' + w.range + ')';
  document.getElementById('top-head').innerHTML =
    '<th>Cont</th><th class="left">Postare</th><th class="left">Săptămâna</th><th>' + CFG.topLabel + '</th><th>Link</th>';
  var missing = false;
  document.getElementById('top-body').innerHTML = C.brands.map(function (b) {
    var r = (CFG.data[b.id] || {})[w.id];
    var t = r && r.top ? r.top : null;
    var val = !t || t.value == null ? '–' : (t.q ? '<span class="q">' + t.q + '</span>' : '') + t.value.toLocaleString('ro-RO');
    var title = t && t.title ? esc(t.title) : '<span class="muted">fără descriere în raport</span>';
    var link = t && t.url ? '<a class="postlink" href="' + esc(t.url) + '" target="_blank" rel="noopener">Deschide ↗</a>' : '<span class="muted">–</span>';
    if (!(t && t.url)) missing = true;
    return '<tr class="' + (b.us ? 'row--us' : '') + '"><td class="left">' + esc(b.name) + '</td><td class="left">' + title +
           '</td><td class="left"><strong>' + esc(w.id) + '</strong><span class="kpi__hint">' + esc(w.range) + '</span></td><td class="num"><strong>' + val + '</strong></td><td class="num">' + link + '</td></tr>';
  }).join('');
  var note = document.getElementById('top-note');
  note.textContent = 'Linkurile postărilor nu sunt în rapoartele KPI, deci apar cu „–” până le adăugăm.';
  note.hidden = !missing;
}

function renderTexts() {
  document.getElementById('take-list').innerHTML = CFG.take.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
  document.getElementById('notes-list').innerHTML = CFG.notes.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
}

function render() {
  var w = WEEKS[state.idx];
  document.getElementById('rep-title').textContent = w.id + ' ' + CFG.channel + ' Weekly – Dr. Ardeleanu';
  document.getElementById('actual').textContent = 'Actual ' + w.id;
  document.getElementById('week-sub').textContent = 'Săptămâna ' + w.id + ' · ' + w.range;
  renderPeriod(); renderKpis(); renderCompare(); renderTop();
}

renderTexts();
render();

if (EMBED) {
  var reportHeightW = function () {
    parent.postMessage({ type: 'height', value: Math.ceil(document.body.getBoundingClientRect().height) }, '*');
  };
  window.addEventListener('message', function (e) {
    if (e.source !== parent) return;
    var d = e.data || {};
    if (d.type === 'week' && d.idx >= 0 && d.idx < WEEKS.length) { state.idx = d.idx; render(); reportHeightW(); }
  });
  window.addEventListener('load', function () {
    parent.postMessage({ type: 'ready', kind: 'week', weeks: WEEKS, channel: CFG.channel }, '*');
    reportHeightW();
  });
  if (window.ResizeObserver) new ResizeObserver(reportHeightW).observe(document.body);
}
