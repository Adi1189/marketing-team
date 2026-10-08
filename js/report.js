// Motor comun pentru paginile de rapoarte lunare.
// Fiecare pagină își încarcă înainte configurația (js/cfg-<canal>.js) în window.REPORT_CONFIG:
//   { channel, demo, kpis, top, notes, data: {"AAAA-LL": {...}},
//     compare: { brands: [{id,name,us}], kpis, notes, data: { id: {"AAAA-LL": {...}} } } }
//
// KPI: { key, label, hint, type, additive, invert, hidden, ratio }
//   type: 'num' = număr | 'num1' = număr cu o zecimală | 'pct' = procent | 'dec' = zecimală, variație absolută
//   additive: true = se adună pe lună | 'max' = cea mai mare valoare din perioadă | 'last' = ultima valoare din perioadă | false = nu se adună (apare "–" la YTD)
//   invert: true = mai mic e mai bine | hidden: true = doar pentru calcule | ratio: ['a','b'] = a / b
// Rând de date (o lună): valorile KPI +
//   q: { kpi: '≥' | '≈' }    calitatea cifrei (minimă / aproximativă)
//   note: { kpi: 'text' }    explicație mică sub cifră (acoperire, sursă)
//   weekly: [...] | top: {...}  pentru panoul „Top postare”
// "YTD" = de la începutul măsurătorilor (prima lună din date) până la luna aleasă.

var CFG = window.REPORT_CONFIG;
var KPIS = CFG.kpis, DATA = CFG.data;

var MONTHS = ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'];
var SHORT  = ['Ian','Feb','Mar','Apr','Mai','Iun','Iul','Aug','Sep','Oct','Nov','Dec'];

var keys = Object.keys(DATA).sort();
var latest = keys[keys.length - 1];
var state = { year: +latest.slice(0, 4), month: +latest.slice(5), mode: 'month' };

// Mod „embed”: pagina e încărcată în noul meniu; perioada vine din URL și din mesaje.
var EMBED = /[?&]embed=1/.test(location.search) && window.parent !== window;
if (EMBED) {
  var qp = new URLSearchParams(location.search);
  if (qp.get('y')) state.year = +qp.get('y');
  if (qp.get('m')) state.month = +qp.get('m');
  if (qp.get('mode')) state.mode = qp.get('mode') === 'ytd' ? 'ytd' : 'month';
}

function key(y, m) { return y + '-' + String(m).padStart(2, '0'); }
function nf(v, d) { return v.toLocaleString('ro-RO', { minimumFractionDigits: d, maximumFractionDigits: d }); }
function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function fmt(k, v) {
  if (v == null) return '–';
  if (k.type === 'pct') return nf(v, k.decimals != null ? k.decimals : 2) + '%';
  if (k.type === 'dec' || k.type === 'num1') return nf(v, 1);
  return v.toLocaleString('ro-RO');
}

function delta(k, cur, prev, qc, qp) {
  if (cur == null || prev == null) return { text: '–', cls: '' };
  if ((qc || '').indexOf('≥') > -1 || (qp || '').indexOf('≥') > -1) return { text: '–', cls: '' };   // cifre minime: nu comparăm
  var d, text;
  if (k.type === 'pct') {
    d = cur - prev; text = (d > 0 ? '+' : '') + nf(d, k.decimals != null ? k.decimals : 2) + '%';
  } else if (k.type === 'dec') {
    d = cur - prev; text = (d > 0 ? '+' : '') + nf(d, 1);
  } else {
    if (prev === 0) return { text: '–', cls: '' };
    d = (cur - prev) / prev * 100;
    text = (d > 0 ? '+' : '') + d.toLocaleString('ro-RO', { maximumFractionDigits: 1 }) + '%';
  }
  var good = k.invert ? d < 0 : d > 0, bad = k.invert ? d > 0 : d < 0;
  return { text: text, cls: good ? 'delta--up' : bad ? 'delta--down' : '' };
}

function applyRatios(o, KP) {
  KP = KP || KPIS;
  KP.forEach(function (k) {
    if (!k.ratio) return;
    var n = o[k.ratio[0]], d = o[k.ratio[1]];
    var v = (n == null || !d) ? null : n / d;
    o[k.key] = (v != null && k.type === 'num') ? Math.round(v) : v;
  });
}

function rowFrom(D, KP, y, m) {
  var r = D[key(y, m)];
  if (!r) return null;
  var out = {};
  Object.keys(r).forEach(function (f) { out[f] = r[f]; });
  out.q = out.q || {}; out.note = out.note || {};
  applyRatios(out, KP);
  return out;
}
function rowFor(y, m) { return rowFrom(DATA, KPIS, y, m); }

// De la prima lună din date a anului până la luna m. null dacă anul nu are date.
function ytdFrom(D, KP, y, m) {
  var months = [], i;
  for (i = 1; i <= m; i++) if (D[key(y, i)]) months.push(i);
  if (!months.length) return null;
  var out = { q: {}, note: {} };
  KP.forEach(function (k) {
    if (k.ratio) return;
    var vals = months.map(function (mm) { return D[key(y, mm)][k.key]; });
    var qs = months.map(function (mm) { return (D[key(y, mm)].q || {})[k.key] || ''; });
    var have = vals.filter(function (v) { return v != null; });
    if (k.additive === 'max') {
      var bi = -1;
      vals.forEach(function (v, ix) { if (v != null && (bi < 0 || v > vals[bi])) bi = ix; });
      out[k.key] = bi >= 0 ? vals[bi] : null;
      if (bi >= 0) out.q[k.key] = qs[bi];
    } else if (k.additive === true) {
      out[k.key] = have.length ? have.reduce(function (a, b) { return a + b; }, 0) : null;
      var partial = have.length < vals.length || qs.some(function (q) { return q.indexOf('≥') > -1; });
      var approx = qs.some(function (q) { return q.indexOf('≈') > -1; });
      if (out[k.key] != null) out.q[k.key] = partial ? '≥' : approx ? '≈' : '';
      if (out[k.key] != null && partial) out.note[k.key] = 'date incomplete în unele luni';
    } else if (k.additive === 'last') {
      var idx = vals.length - 1;
      while (idx >= 0 && vals[idx] == null) idx--;
      out[k.key] = idx >= 0 ? vals[idx] : null;
      if (idx >= 0) out.q[k.key] = qs[idx];
    } else {
      out[k.key] = null;
    }
  });
  // KPI-uri raport: partial dacă oricare lună e parțială
  KP.forEach(function (k) {
    if (!k.ratio) return;
    var qs = months.map(function (mm) { return (D[key(y, mm)].q || {})[k.key] || ''; });
    var miss = months.some(function (mm) { return D[key(y, mm)][k.ratio[0]] == null; });
    out.q[k.key] = (miss || qs.some(function (q) { return q.indexOf('≥') > -1; })) ? '≥' : '';
    if (out.q[k.key]) out.note[k.key] = 'date incomplete în unele luni';
  });
  applyRatios(out, KP);
  return out;
}
function ytd(y, m) { return ytdFrom(DATA, KPIS, y, m); }

function el(tag, cls, text) {
  var e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

function renderPeriod() {
  var years = {};
  keys.forEach(function (k) { years[k.slice(0, 4)] = true; });

  var yWrap = document.getElementById('chips-years');
  yWrap.innerHTML = '';
  Object.keys(years).sort().forEach(function (y) {
    var b = el('button', 'chip chip--year' + (+y === state.year ? ' is-active' : ''), y);
    b.type = 'button';
    b.addEventListener('click', function () {
      state.year = +y;
      var ms = keys.filter(function (k) { return k.slice(0, 4) === y; }).map(function (k) { return +k.slice(5); });
      if (ms.indexOf(state.month) === -1) state.month = ms[ms.length - 1];
      render();
    });
    yWrap.appendChild(b);
  });

  var mWrap = document.getElementById('chips-months');
  mWrap.innerHTML = '';
  keys.filter(function (k) { return +k.slice(0, 4) === state.year; }).forEach(function (k) {
    var m = +k.slice(5);
    var b = el('button', 'chip chip--month' + (m === state.month ? ' is-active' : ''), MONTHS[m - 1] + ' ' + state.year);
    b.type = 'button';
    b.addEventListener('click', function () { state.month = m; render(); });
    mWrap.appendChild(b);
  });
}

function cellHtml(k, row, withNote) {
  var v = row ? row[k.key] : null;
  var q = row && row.q ? (row.q[k.key] || '') : '';
  var n = withNote && row && row.note ? (row.note[k.key] || '') : '';
  if (v == null && row && row.pending) return '<span class="muted">urmează</span>';
  var main = v == null ? '–' : (q ? '<span class="q">' + q + '</span>' : '') + fmt(k, v);
  return main + (n ? '<span class="cell__note">' + esc(n) + '</span>' : '');
}

function firstMonthOfYear(y) {
  var ms = keys.filter(function (k) { return +k.slice(0, 4) === y; }).map(function (k) { return +k.slice(5); });
  return ms.length ? ms[0] : 1;
}

function renderTable() {
  var y = state.year, m = state.month, isYtd = state.mode === 'ytd';
  var cur, prev, curLabel, prevLabel;

  if (isYtd) {
    cur = ytd(y, m); prev = ytd(y - 1, m);
    var s = firstMonthOfYear(y);
    var span = m === s ? SHORT[m - 1] : SHORT[s - 1] + '–' + SHORT[m - 1];
    curLabel = span + ' ' + y; prevLabel = span + ' ' + (y - 1);
  } else {
    var py = m === 1 ? y - 1 : y, pm = m === 1 ? 12 : m - 1;
    cur = rowFor(y, m); prev = rowFor(py, pm);
    curLabel = MONTHS[m - 1] + ' ' + y; prevLabel = MONTHS[pm - 1] + ' ' + py;
  }

  document.getElementById('kpi-head').innerHTML =
    '<th>KPI</th><th>' + curLabel + '</th><th>' + prevLabel + '</th><th>Variație</th>';

  document.getElementById('kpi-body').innerHTML = KPIS.filter(function (k) { return !k.hidden; }).map(function (k) {
    var c = cur ? cur[k.key] : null, p = prev ? prev[k.key] : null;
    var d = delta(k, c, p, cur && cur.q ? cur.q[k.key] : '', prev && prev.q ? prev.q[k.key] : '');
    if (!isYtd && d.text === '–' && cur && cur.vs && cur.vs[k.key] != null) {
      var vv = cur.vs[k.key];
      d = { text: (vv > 0 ? '+' : '') + vv.toLocaleString('ro-RO') + '%', cls: vv > 0 ? 'delta--up' : vv < 0 ? 'delta--down' : '' };
    }
    if (!isYtd && cur && cur.nocmp) d = { text: '–', cls: '' };   // set de întrebări diferit: nu comparăm
    return '<tr><td class="kpi__name">' + k.label + '<span class="kpi__hint">' + k.hint + '</span></td>' +
           '<td class="num"><strong>' + cellHtml(k, cur, true) + '</strong></td>' +
           '<td class="num">' + cellHtml(k, prev, false) + '</td>' +
           '<td class="num ' + d.cls + '">' + d.text + '</td></tr>';
  }).join('');

  var general = 'YTD = de la începutul măsurătorilor (' + MONTHS[firstMonthOfYear(state.year) - 1].toLowerCase() + ') până la luna aleasă. Variația se compară cu luna anterioară (Month) sau cu aceeași perioadă din anul trecut (YTD); unde nu avem date, apare „–”.';
  if (KPIS.some(function (k) { return k.type === 'pct'; })) {
    general += ' La KPI-urile exprimate în procente, variația e diferența dintre cele două procente (de la 54% la 50% e −4%).';
  }
  document.getElementById('kpi-general-note').textContent = general;

  var hasNonAdd = KPIS.some(function (k) { return !k.hidden && !k.ratio && k.additive === false; });
  document.getElementById('kpi-empty').hidden = !!cur;
  document.getElementById('kpi-ytd-note').hidden = !(isYtd && hasNonAdd);
}

function renderTop() {
  var panel = document.getElementById('top-panel');
  var T = CFG.top;
  if (!T) { panel.hidden = true; return; }
  panel.hidden = false;

  var y = state.year, m = state.month, isYtd = state.mode === 'ytd';
  var head = document.getElementById('top-head'), body = document.getElementById('top-body');
  var note = document.getElementById('top-note');
  var s = firstMonthOfYear(y);
  var span = m === s ? SHORT[m - 1] : SHORT[s - 1] + '–' + SHORT[m - 1];
  document.getElementById('top-title').textContent =
    T.title + ' · ' + (isYtd && T.mode === 'single' ? span + ' ' + y : MONTHS[m - 1] + ' ' + y);

  head.innerHTML = ''; body.innerHTML = ''; note.hidden = true;

  if (T.mode === 'brands') {
    document.getElementById('top-title').textContent =
      (isYtd ? T.titleYtd : T.title) + ' · ' + (isYtd ? span + ' ' + y : MONTHS[m - 1] + ' ' + y);
    head.innerHTML = '<th>Cont</th><th class="left">Postare</th><th class="left">' + (T.showMonth ? 'Luna' : 'Săptămâna') + '</th><th>' + T.metricLabel + '</th><th>Link</th>';
    var anyMissing = false;
    body.innerHTML = CFG.compare.brands.map(function (b) {
      var best = null, bestMonth = m, i;
      for (i = (isYtd ? s : m); i <= m; i++) {
        var r = DATA[key(y, i)];
        var tp = r && r.topPosts ? r.topPosts[b.id] : null;
        if (tp && tp.value != null && (!best || tp.value > best.value)) { best = tp; bestMonth = i; }
      }
      var val = !best ? '–' : (best.q ? '<span class="q">' + best.q + '</span>' : '') + best.value.toLocaleString('ro-RO');
      var title = !best ? '' : (best.title ? esc(best.title) : '<span class="muted">fără descriere în raport</span>');
      var wk = !best ? '–' : (T.showMonth ? '<strong>' + MONTHS[bestMonth - 1] + ' ' + y + '</strong>' : '<strong>' + esc(best.week) + '</strong><span class="kpi__hint">' + esc(best.range) + '</span>');
      var link = best && best.url ? '<a class="postlink" href="' + esc(best.url) + '" target="_blank" rel="noopener">Deschide ↗</a>' : '<span class="muted">–</span>';
      if (!(best && best.url)) anyMissing = true;
      return '<tr class="' + (b.us ? 'row--us' : '') + '"><td class="left">' + esc(b.name) + '</td><td class="left">' + title +
             '</td><td class="left">' + wk + '</td><td class="num"><strong>' + val + '</strong></td><td class="num">' + link + '</td></tr>';
    }).join('');
    note.textContent = 'Linkurile postărilor nu sunt în rapoartele KPI, deci apar cu „–” până le adăugăm.';
    note.hidden = !anyMissing;
    return;
  }

  if (T.mode === 'weekly') {
    if (isYtd) {
      note.textContent = 'Top-ul pe săptămâni se vede doar la Month (alege „Month” sus, în dreapta).';
      note.hidden = false;
      return;
    }
    var rec = DATA[key(y, m)];
    var rows = rec && rec.weekly ? rec.weekly : [];
    head.innerHTML = '<th>Săptămâna</th><th class="left">Postare</th><th>' + T.metricLabel + '</th>';
    body.innerHTML = rows.map(function (w) {
      var val = w.value == null ? '–' : (w.q ? '<span class="q">' + w.q + '</span>' : '') + w.value.toLocaleString('ro-RO');
      return '<tr><td class="left"><strong>' + esc(w.week) + '</strong><span class="kpi__hint">' + esc(w.range) + '</span></td>' +
             '<td class="left">' + (w.title ? esc(w.title) : '<span class="muted">fără descriere în raport</span>') + '</td>' +
             '<td class="num"><strong>' + val + '</strong></td></tr>';
    }).join('');
    note.textContent = 'Nu există date pentru luna selectată.';
    note.hidden = rows.length > 0;
  } else {
    var best = null, i;
    for (i = (isYtd ? s : m); i <= m; i++) {
      var r = DATA[key(y, i)];
      if (r && r.top && (!best || r.top.value > best.value)) best = r.top;
    }
    head.innerHTML = '<th>Postare</th><th class="left">Publicată</th><th>' + T.metricLabel + '</th>';
    if (best) {
      body.innerHTML = '<tr><td>' + esc(best.title) + '</td><td class="left">' + esc(best.date) + '</td>' +
        '<td class="num"><strong>' + best.value.toLocaleString('ro-RO') + '</strong></td></tr>';
    } else {
      note.textContent = 'Nu există date pentru perioada selectată.';
      note.hidden = false;
    }
  }
}

function renderCompare() {
  var panel = document.getElementById('cmp-panel');
  var C = CFG.compare;
  if (!C) { panel.hidden = true; return; }
  panel.hidden = false;

  var y = state.year, m = state.month, isYtd = state.mode === 'ytd';
  var s0 = firstMonthOfYear(y);
  var span = m === s0 ? SHORT[m - 1] : SHORT[s0 - 1] + '–' + SHORT[m - 1];
  document.getElementById('cmp-title').textContent =
    'Comparație cu concurenții · ' + (isYtd ? span + ' ' + y : MONTHS[m - 1] + ' ' + y);

  var cols = C.kpis.filter(function (k) { return !k.hidden; });
  document.getElementById('cmp-head').innerHTML = '<th>Cont</th>' + cols.map(function (k) {
    return '<th title="' + esc(k.hint || '') + '">' + k.label + '</th>';
  }).join('');

  document.getElementById('cmp-body').innerHTML = C.brands.map(function (b) {
    var D = C.data[b.id] || {};
    var row = isYtd ? ytdFrom(D, C.kpis, y, m) : rowFrom(D, C.kpis, y, m);
    var tds = cols.map(function (k) {
      var v = row ? row[k.key] : null;
      var q = row && row.q ? (row.q[k.key] || '') : '';
      var n = row && row.note ? (row.note[k.key] || '') : '';
      var txt = v == null ? '–' : (q ? '<span class="q">' + q + '</span>' : '') + fmt(k, v);
      return '<td class="num"' + (n ? ' title="' + esc(n) + '"' : '') + '>' + txt + '</td>';
    }).join('');
    return '<tr class="' + (b.us ? 'row--us' : '') + '"><td class="left">' + esc(b.name) + '</td>' + tds + '</tr>';
  }).join('');

  var nl = document.getElementById('cmp-notes');
  nl.innerHTML = (C.notes || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
}

function renderMeta() {
  var pill = document.getElementById('demo-pill');
  pill.textContent = CFG.demo ? 'Date demonstrative' : (CFG.pillText || 'Date reale · iul–sep 2026');
  pill.classList.toggle('pill--real', !CFG.demo);

  var panel = document.getElementById('notes-panel');
  var list = document.getElementById('notes-list');
  if (!CFG.notes || !CFG.notes.length) { panel.hidden = true; return; }
  list.innerHTML = CFG.notes.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
  panel.hidden = false;
}

function render() {
  document.getElementById('rep-title').textContent =
    SHORT[state.month - 1] + ' ' + state.year + ' ' + CFG.channel + ' Reporting – Dr. Ardeleanu';
  document.getElementById('actual').textContent = 'Actual ' + SHORT[state.month - 1] + ' ' + state.year;

  document.querySelectorAll('.toggle__btn').forEach(function (b) {
    b.setAttribute('aria-pressed', String(b.dataset.mode === state.mode));
  });

  renderPeriod();
  renderTable();
  renderCompare();
  renderTop();
}

document.querySelectorAll('.toggle__btn').forEach(function (b) {
  b.addEventListener('click', function () { state.mode = b.dataset.mode; render(); });
});

renderMeta();
render();

if (EMBED) {
  var reportHeight = function () {
    parent.postMessage({ type: 'height', value: Math.ceil(document.body.getBoundingClientRect().height) }, '*');
  };
  window.addEventListener('message', function (e) {
    if (e.source !== parent) return;
    var d = e.data || {};
    if (d.type === 'period') {
      state.year = d.year; state.month = d.month; state.mode = d.mode === 'ytd' ? 'ytd' : 'month';
      render(); reportHeight();
    }
  });
  window.addEventListener('load', function () {
    parent.postMessage({ type: 'ready', kind: 'month', months: keys, channel: CFG.channel }, '*');
    reportHeight();
  });
  if (window.ResizeObserver) new ResizeObserver(reportHeight).observe(document.body);
}
