// Rapoarte lunare Facebook – perioadă (an + lună), mod Month / YTD, tabel de KPI-uri

var MONTHS = ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'];
var SHORT  = ['Ian','Feb','Mar','Apr','Mai','Iun','Iul','Aug','Sep','Oct','Nov','Dec'];

// type: 'num' = număr, 'pct' = procent (variația se arată în puncte procentuale)
// additive: false = nu se poate aduna pe mai multe luni (nu apare la YTD)
var KPIS = [
  { key: 'posts',        label: 'Postări publicate',  hint: 'câte postări au fost publicate în perioada aleasă',                   type: 'num', additive: true },
  { key: 'reach',        label: 'Reach (acoperire)',  hint: 'persoane unice care au văzut cel puțin o postare',         type: 'num', additive: false },
  { key: 'impressions',  label: 'Impresii',           hint: 'de câte ori au fost afișate postările (include repetări)', type: 'num', additive: true },
  { key: 'interactions', label: 'Interacțiuni',       hint: 'reacții, comentarii, distribuiri și click-uri la un loc',  type: 'num', additive: true },
  { key: 'engagement',   label: 'Rata de engagement', hint: 'interacțiuni împărțite la reach, în procente',             type: 'pct', additive: false },
  { key: 'clicks',       label: 'Click-uri pe link',  hint: 'câte persoane au apăsat un link din postări',              type: 'num', additive: true },
  { key: 'newfollowers', label: 'Urmăritori noi',     hint: 'persoane care au dat Follow paginii în perioadă',          type: 'num', additive: true },
  { key: 'followers',    label: 'Total urmăritori',   hint: 'numărul de urmăritori la sfârșitul perioadei',             type: 'num', additive: 'last' }
];

var DATA = window.FB_DATA || {};
var keys = Object.keys(DATA).sort();
var latest = keys[keys.length - 1];

var state = { year: +latest.slice(0, 4), month: +latest.slice(5), mode: 'month' };

function key(y, m) { return y + '-' + String(m).padStart(2, '0'); }
function fmtNum(v) { return v == null ? '–' : v.toLocaleString('ro-RO'); }
function fmtPct(v) { return v == null ? '–' : v.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '%'; }
function fmt(k, v) { return k.type === 'pct' ? fmtPct(v) : fmtNum(v); }

function delta(k, cur, prev) {
  if (cur == null || prev == null) return { text: '–', cls: '' };
  var d, text;
  if (k.type === 'pct') {
    d = cur - prev;
    text = (d > 0 ? '+' : '') + d.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' pp';
  } else {
    if (prev === 0) return { text: '–', cls: '' };
    d = (cur - prev) / prev * 100;
    text = (d > 0 ? '+' : '') + d.toLocaleString('ro-RO', { maximumFractionDigits: 1 }) + '%';
  }
  return { text: text, cls: d > 0 ? 'delta--up' : d < 0 ? 'delta--down' : '' };
}

// YTD: 1 ianuarie → luna aleasă. null dacă lipsește vreo lună.
function ytd(y, m) {
  var out = {}, i, j, row;
  for (i = 1; i <= m; i++) if (!DATA[key(y, i)]) return null;
  KPIS.forEach(function (k) {
    if (k.additive === true) {
      out[k.key] = 0;
      for (j = 1; j <= m; j++) out[k.key] += DATA[key(y, j)][k.key];
    } else if (k.additive === 'last') {
      out[k.key] = DATA[key(y, m)][k.key];
    } else {
      out[k.key] = null;
    }
  });
  return out;
}

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
      // trecem pe ultima lună cu date din anul ales (dacă luna curentă nu există)
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

function renderTable() {
  var y = state.year, m = state.month, isYtd = state.mode === 'ytd';
  var cur, prev, curLabel, prevLabel;

  if (isYtd) {
    cur = ytd(y, m); prev = ytd(y - 1, m);
    var span = m === 1 ? SHORT[0] : SHORT[0] + '–' + SHORT[m - 1];
    curLabel = span + ' ' + y; prevLabel = span + ' ' + (y - 1);
  } else {
    var py = m === 1 ? y - 1 : y, pm = m === 1 ? 12 : m - 1;
    cur = DATA[key(y, m)]; prev = DATA[key(py, pm)];
    curLabel = MONTHS[m - 1] + ' ' + y; prevLabel = MONTHS[pm - 1] + ' ' + py;
  }

  document.getElementById('kpi-head').innerHTML =
    '<th>KPI</th><th>' + curLabel + '</th><th>' + prevLabel + '</th><th>Variație</th>';

  document.getElementById('kpi-body').innerHTML = KPIS.map(function (k) {
    var c = cur ? cur[k.key] : null, p = prev ? prev[k.key] : null, d = delta(k, c, p);
    return '<tr><td class="kpi__name">' + k.label + '<span class="kpi__hint">' + k.hint + '</span></td>' +
           '<td class="num"><strong>' + fmt(k, c) + '</strong></td>' +
           '<td class="num">' + fmt(k, p) + '</td>' +
           '<td class="num ' + d.cls + '">' + d.text + '</td></tr>';
  }).join('');

  document.getElementById('kpi-empty').hidden = !!cur;
  document.getElementById('kpi-ytd-note').hidden = !isYtd;
}

function render() {
  document.getElementById('rep-title').textContent =
    SHORT[state.month - 1] + ' ' + state.year + ' Facebook Reporting – Dr. Ardeleanu';

  document.querySelectorAll('.toggle__btn').forEach(function (b) {
    b.setAttribute('aria-pressed', String(b.dataset.mode === state.mode));
  });

  // pastila „Actual” arată exact luna selectată
  document.getElementById('actual').textContent =
    'Actual ' + SHORT[state.month - 1] + ' ' + state.year;

  renderPeriod();
  renderTable();
}

document.querySelectorAll('.toggle__btn').forEach(function (b) {
  b.addEventListener('click', function () { state.mode = b.dataset.mode; render(); });
});

render();
