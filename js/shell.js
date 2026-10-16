// Pagina Acquisition Marketing: antet + perioadă + meniu. Conținutul fiecărui tab e pagina existentă, încărcată în iframe (mod embed).
(function () {
  var SHORT = ['Ian','Feb','Mar','Apr','Mai','Iun','Iul','Aug','Sep','Oct','Nov','Dec'];
  var MONTHS = ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'];
  var YEAR = 2026;
  var TITLE = document.body.getAttribute('data-title') || 'Acquisition Marketing';
  var TABS = [
    { id: 'sumar',      label: 'Sumar',      month: 'lunare-sumar.html',      week: null },
    { id: 'facebook',   label: 'Facebook',   month: 'lunare-facebook.html',   week: 'saptamanale-facebook.html' },
    { id: 'instagram',  label: 'Instagram',  month: 'lunare-instagram.html',  week: 'saptamanale-instagram.html' },
    { id: 'tiktok',     label: 'TikTok',     month: 'lunare-tiktok.html',     week: 'saptamanale-tiktok.html' },
    { id: 'youtube',    label: 'YouTube',    month: 'lunare-youtube.html',    week: 'saptamanale-youtube.html' },
    { id: 'newsletter', label: 'Newsletter', month: 'lunare-newsletter.html', week: null },
    { id: 'seo',        label: 'SEO',        month: 'lunare-seo.html',        week: null },
    { id: 'geo',        label: 'GEO',        month: 'lunare-geo.html',        week: null },
    { id: 'recenzii',   label: 'Recenzii',   month: 'lunare-recenzii.html',   week: null }
  ];

  // Pornim mereu pe Month. Luna aleasă se vede în toate modurile; la Week apare în plus rândul cu săptămânile lunii.
  var state = { tab: 'sumar', month: 9, year: YEAR, mode: 'month', week: null };
  var keysOf = {};       // tab -> toate lunile cu date (AAAA-LL)
  var avail = {};        // tab -> luni cu date, în anul ales
  var weeksInfo = null;  // lista de săptămâni, din pagina săptămânală încărcată
  var loaded = { tab: null, kind: null };
  var wantLatest = false;   // la intrarea în Week deschidem cea mai recentă săptămână

  var el = {
    title: document.getElementById('shell-title'), actual: document.getElementById('shell-actual'),
    toggle: document.querySelectorAll('.toggle__btn'), period: document.getElementById('shell-period'),
    weeks: document.getElementById('shell-weeks'), tabs: document.getElementById('shell-tabs'),
    frame: document.getElementById('shell-frame'), notice: document.getElementById('shell-notice')
  };

  function monthsOf(tab, y) { return (keysOf[tab] || []).filter(function (k) { return +k.slice(0, 4) === y; }).map(function (k) { return +k.slice(5); }); }
  function yearsOf(tab) {
    var ys = {}; (keysOf[tab] || []).forEach(function (k) { ys[k.slice(0, 4)] = true; });
    var l = Object.keys(ys).map(Number).sort(); return l.length ? l : [state.year];
  }
  function tabObj() { return TABS.filter(function (t) { return t.id === state.tab; })[0]; }
  function mk(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

  // săptămânile (indici în weeksInfo) care aparțin lunii alese
  function monthWeeks() {
    if (!weeksInfo) return [];
    var name = MONTHS[state.month - 1], out = [];
    weeksInfo.forEach(function (w, i) { if (w.month === name) out.push(i); });
    return out;
  }
  // ce afișăm acum: 'month' | 'week' | 'notice'
  function view() {
    if (state.mode !== 'week') return 'month';
    if (!tabObj().week) return 'notice';
    if (weeksInfo && monthWeeks().length === 0) return 'notice';
    return 'week';
  }
  function noticeText() {
    if (!tabObj().week) return 'Raportul săptămânal există doar pentru Facebook, Instagram, TikTok și YouTube. Alege unul dintre ele sau treci pe Month.';
    return 'Nu există rapoarte săptămânale pentru ' + MONTHS[state.month - 1] + ' ' + state.year + '. Avem săptămânile S27–S41 (iulie–octombrie).';
  }

  // ----- hash: #t=facebook&m=9
  function readHash() {
    var h = new URLSearchParams(location.hash.replace(/^#/, ''));
    var t = h.get('t'); if (t && TABS.some(function (x) { return x.id === t; })) state.tab = t;
    var m = parseInt(h.get('m'), 10); if (m >= 1 && m <= 12) state.month = m;
    var y = parseInt(h.get('y'), 10); if (y >= 2017 && y <= 2100) state.year = y;
  }
  function writeHash() {
    var q = 't=' + state.tab + '&m=' + state.month + (state.year !== YEAR ? '&y=' + state.year : '');
    try { history.replaceState(null, '', '#' + q); } catch (e) { location.hash = q; }
  }

  // dacă luna aleasă nu are date în tab-ul curent, sărim la ultima lună cu date
  function snapMonth() {
    var ms = monthsOf(state.tab, state.year); avail[state.tab] = ms;
    if (state.mode !== 'week' && ms && ms.length && ms.indexOf(state.month) === -1) { state.month = Math.max.apply(null, ms); return true; }
    return false;
  }

  // Week pornește de la cea mai recentă săptămână (și luna ei)
  function goLatestWeek() {
    if (!weeksInfo || !weeksInfo.length) return false;
    var last = weeksInfo.length - 1, mi = MONTHS.indexOf(weeksInfo[last].month);
    state.week = last; if (mi > -1) state.month = mi + 1;
    return true;
  }

  // la Week: dacă luna aleasă n-are săptămâni, trecem pe ultima lună care are
  function snapWeekMonth() {
    if (state.mode !== 'week' || !weeksInfo || !tabObj().week || monthWeeks().length) return;
    var last = weeksInfo[weeksInfo.length - 1];
    var mi = MONTHS.indexOf(last.month);
    if (mi > -1) state.month = mi + 1;
  }

  // ----- iframe
  function post(msg) { if (el.frame.contentWindow) el.frame.contentWindow.postMessage(msg, '*'); }
  function sendPeriod() { post({ type: 'period', year: state.year, month: state.month, mode: state.mode === 'ytd' ? 'ytd' : 'month' }); }
  function sendWeek() { if (state.week != null) post({ type: 'week', idx: state.week }); }
  function wantedKind() { return state.mode === 'week' && tabObj().week ? 'week' : 'month'; }
  function loadFrame() {
    var t = tabObj(), kind = wantedKind();
    if (loaded.tab === state.tab && loaded.kind === kind) return;
    loaded = { tab: state.tab, kind: kind };
    el.frame.src = kind === 'week'
      ? t.week + '?embed=1' + (state.week != null ? '&w=' + state.week : '')
      : t.month + '?embed=1&y=' + state.year + '&m=' + state.month + '&mode=' + (state.mode === 'ytd' ? 'ytd' : 'month');
  }

  function centerActive(container, sel) {
    var a = container.querySelector(sel);
    if (!a || container.scrollWidth <= container.clientWidth) return;
    container.scrollLeft = Math.max(0, a.offsetLeft - container.clientWidth / 2 + a.offsetWidth / 2);
  }

  // ----- randare
  function render() {
    var v = view();
    var wk = v === 'week' && weeksInfo && state.week != null ? weeksInfo[state.week] : null;
    el.title.textContent = (v === 'week' ? (wk ? wk.id : 'Săptămânal') : SHORT[state.month - 1] + ' ' + state.year) + ' ' + TITLE + ' – Dr. Ardeleanu';
    el.actual.textContent = 'Actual ' + (v === 'week' ? (wk ? wk.id : '') : SHORT[state.month - 1].toUpperCase() + ' ' + state.year);
    document.title = TITLE + ' · Marketing Team';

    el.toggle.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-mode') === state.mode)); });

    // perioadă: an + luni (mereu); la Week, dedesubt, săptămânile lunii
    el.period.innerHTML = '';
    el.period.appendChild(mk('span', 'period__label', 'Perioadă'));
    var yw = mk('div', 'period__years');
    (state.mode === 'week' ? [state.year] : yearsOf(state.tab)).forEach(function (y) {
      var yb = mk('button', 'chip chip--year' + (y === state.year ? ' is-active' : ''), String(y)); yb.type = 'button';
      yb.addEventListener('click', function () { if (y === state.year) return; state.year = y; snapMonth(); sendPeriod(); render(); writeHash(); });
      yw.appendChild(yb);
    });
    el.period.appendChild(yw); el.period.appendChild(mk('span', 'period__sep'));
    var mw = mk('div', 'period__months'); var av = monthsOf(state.tab, state.year);
    MONTHS.forEach(function (name, i) {
      var m = i + 1;
      var b = mk('button', 'chip chip--month' + (m === state.month ? ' is-active' : '') + (state.mode !== 'week' && av && av.indexOf(m) === -1 ? ' is-empty' : ''), name + ' ' + state.year);
      b.type = 'button';
      b.addEventListener('click', function () { chooseMonth(m); });
      mw.appendChild(b);
    });
    el.period.appendChild(mw);

    el.weeks.innerHTML = '';
    var mwIdx = monthWeeks();
    if (state.mode === 'week' && tabObj().week && mwIdx.length) {
      el.weeks.hidden = false;
      el.weeks.appendChild(mk('span', 'period__label', 'Săptămâna'));
      var wrap = mk('div', 'period__weeks');
      mwIdx.forEach(function (i) {
        var w = weeksInfo[i];
        var b = mk('button', 'chip chip--month' + (i === state.week ? ' is-active' : ''), w.id + ' · ' + w.range);
        b.type = 'button';
        b.addEventListener('click', function () { state.week = i; render(); sendWeek(); });
        wrap.appendChild(b);
      });
      el.weeks.appendChild(wrap);
    } else { el.weeks.hidden = true; }

    // meniu
    el.tabs.innerHTML = '';
    TABS.forEach(function (t) {
      var b = mk('button', 'tab' + (t.id === state.tab ? ' is-active' : ''), t.label); b.type = 'button';
      b.addEventListener('click', function () { state.tab = t.id; loadFrame(); render(); writeHash(); });
      el.tabs.appendChild(b);
    });
    centerActive(el.period, '.chip--month.is-active');
    centerActive(el.tabs, '.tab.is-active');

    // conținut / mesaj
    if (v === 'notice') { el.notice.textContent = noticeText(); el.notice.hidden = false; el.frame.hidden = true; }
    else { el.notice.hidden = true; el.frame.hidden = false; }
  }

  function chooseMonth(m) {
    state.month = m;
    if (state.mode === 'week') {
      var mw = monthWeeks();
      if (mw.length && mw.indexOf(state.week) === -1) state.week = mw[mw.length - 1];
      sendWeek();
    } else { sendPeriod(); }
    render(); writeHash();
  }

  el.toggle.forEach(function (b) {
    b.addEventListener('click', function () {
      var m = b.getAttribute('data-mode');
      if (m === state.mode) return;
      var before = wantedKind();
      state.mode = m;
      // Week pornește din orice tab: dacă tab-ul nu are raport săptămânal, mergem pe Facebook
      if (m === 'week' && !tabObj().week) state.tab = 'facebook';
      if (m === 'week') state.year = YEAR;           // rapoartele săptămânale există doar pentru 2026
      if (m === 'week' && !(state.mode === m && before === 'week')) { wantLatest = !goLatestWeek(); }
      if (m === 'week' && weeksInfo) {
        snapWeekMonth();
        var mw = monthWeeks();
        if (mw.length && mw.indexOf(state.week) === -1) state.week = mw[mw.length - 1];
      }
      if (wantedKind() !== before || loaded.tab !== state.tab) loadFrame(); else if (m !== 'week') { snapMonth(); sendPeriod(); } else sendWeek();
      render(); writeHash();
    });
  });

  window.addEventListener('message', function (e) {
    if (e.source !== el.frame.contentWindow) return;
    var d = e.data || {};
    if (d.type === 'height') { el.frame.style.height = Math.max(d.value, 320) + 'px'; return; }
    if (d.type === 'ready' && d.kind === 'month') {
      keysOf[state.tab] = d.months || [];
      var ys = yearsOf(state.tab), moved = false;
      if (ys.indexOf(state.year) === -1) { state.year = Math.max.apply(null, ys); moved = true; }
      if (snapMonth() || moved) { sendPeriod(); writeHash(); }
      render();
    }
    if (d.type === 'ready' && d.kind === 'week') {
      weeksInfo = d.weeks;
      if (wantLatest) { goLatestWeek(); wantLatest = false; writeHash(); }
      snapWeekMonth(); writeHash();
      var mw = monthWeeks();
      if (mw.length && mw.indexOf(state.week) === -1) state.week = mw[mw.length - 1];
      if (mw.length) sendWeek();
      render();
    }
  });

  readHash();
  render();
  loadFrame();
  writeHash();
})();
