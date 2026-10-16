// Grafice pe canal (Facebook, Instagram, TikTok, YouTube), din datele săptămânale. Se redesenează odată cu pagina lunară.
(function () {
  var W = window.WEEKLY_CONFIG; if (!W) return;
  var WEEKS = W.weeks, BR = W.cmp.brands, D = W.data;
  var ENG = (CFG.channel === 'Facebook' || CFG.channel === 'Instagram');
  var FK = CFG.channel === 'YouTube' ? 'subs' : 'followers';
  var COL = { DrA: '#7b1c16', DE: '#1f6f8b', RM: '#c9a227', Life: '#4f8a3c', Eli: '#8a5aa8', DB: '#e07b39' };
  var on = { DrA: true, DE: true, RM: true, Life: true, Eli: false, DB: false };
  var onF = { DrA: true, DE: true, RM: true, Life: true, Eli: true, DB: true };
  function fnum(v, d) { return v == null ? '–' : v.toLocaleString('ro-RO', { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
  function row(b, w) { return (D[b] && D[b][w]) || null; }
  // metrica săptămânală: engagement mediu pe postare (FB, IG) sau vizualizări pe săptămână (TikTok, YouTube)
  function weekly(b, w) {
    var r = row(b, w); if (!r) return null;
    if (ENG) return (r.eng_sum != null && r.eng_n) ? r.eng_sum / r.eng_n : null;
    return (r.views != null && r.posts) ? r.views : null;
  }
  function perUnit(b, w) {   // engagement / postare sau vizualizări / video
    var r = row(b, w); if (!r) return null;
    if (ENG) return (r.eng_sum != null && r.eng_n) ? r.eng_sum / r.eng_n : null;
    return (r.views != null && r.posts) ? r.views / r.posts : null;
  }
  function periodWeeks() {
    if (state.year !== 2026) return [];
    var names = [];
    if (state.mode === 'ytd') for (var i = 1; i <= state.month; i++) names.push(MONTHS[i - 1]); else names.push(MONTHS[state.month - 1]);
    return WEEKS.filter(function (w) { return names.indexOf(w.month) > -1; });
  }
  function median(a) { var s = a.slice().sort(function (x, y) { return x - y; }); return s.length ? s[Math.floor(s.length / 2)] : 0; }
  function legend(map, id) {
    return '<div class="legend" data-lg="' + id + '">' + BR.map(function (b) {
      return '<button type="button" class="lg' + (map[b.id] ? '' : ' is-off') + '" data-b="' + b.id + '"><i style="background:' + COL[b.id] + '"></i>' + esc(b.name) + '</button>';
    }).join('') + '</div>';
  }
  function card(svg) { return '<div class="chartcard" style="padding:12px;overflow-x:auto">' + svg + '</div>'; }

  // ---- 1. linie pe săptămâni
  function linePanel() {
    var ids = BR.filter(function (b) { return on[b.id]; }).map(function (b) { return b.id; });
    var step = 62, n = WEEKS.length, Wd = n * step + 20, H = 290, top = 30, bot = 46, plotH = H - top - bot;
    var all = []; ids.forEach(function (b) { WEEKS.forEach(function (w) { var v = weekly(b, w.id); if (v != null) all.push(v); }); });
    var med = median(all), cap = Math.max.apply(null, all.filter(function (v) { return v <= 6 * med; }).concat([1])), max = cap * 1.18;
    function y(v) { return top + plotH - Math.min(v, max) / max * plotH; }
    function x(i) { return 14 + (i + 0.5) * step; }
    var pw = periodWeeks().map(function (w) { return w.id; });
    var s = '<svg width="' + Wd + '" height="' + H + '" viewBox="0 0 ' + Wd + ' ' + H + '">';
    WEEKS.forEach(function (w, i) { if (pw.indexOf(w.id) > -1) s += '<rect x="' + (x(i) - step / 2) + '" y="' + (top - 8) + '" width="' + step + '" height="' + (plotH + 8) + '" fill="#f6e9cf" opacity=".6"/>'; });
    [0.25, 0.5, 0.75, 1].forEach(function (f) { var yy = top + plotH * (1 - f * (cap / max)); s += '<line x1="8" x2="' + (Wd - 8) + '" y1="' + yy + '" y2="' + yy + '" stroke="#f3dfbf"/><text x="12" y="' + (yy - 3) + '" font-size="10" fill="#8a7a6c">' + fnum(cap * f, cap < 10 ? 1 : 0) + '</text>'; });
    WEEKS.forEach(function (w, i) { s += '<text x="' + x(i) + '" y="' + (H - 24) + '" text-anchor="middle" font-size="11" fill="#8a7a6c">' + w.id + '</text><text x="' + x(i) + '" y="' + (H - 10) + '" text-anchor="middle" font-size="9" fill="#b3a595">' + w.range.split('–')[0].replace(' iun', ' iun').replace(' iul', ' iul') + '</text>'; });
    ids.slice().reverse().forEach(function (b) {
      var d = '', prev = false;
      WEEKS.forEach(function (w, i) { var v = weekly(b, w.id); if (v == null) { prev = false; return; } d += (prev ? 'L' : 'M') + x(i) + ',' + y(v); prev = true; });
      s += '<path d="' + d + '" fill="none" stroke="' + COL[b] + '" stroke-width="' + (b === 'DrA' ? 3.6 : 2.2) + '" stroke-linejoin="round" stroke-linecap="round"/>';
      WEEKS.forEach(function (w, i) {
        var v = weekly(b, w.id); if (v == null) return; var over = v > max;
        s += '<circle cx="' + x(i) + '" cy="' + y(v) + '" r="' + (b === 'DrA' ? 4 : 3) + '" fill="' + COL[b] + '"><title>' + esc(BR.filter(function (q) { return q.id === b; })[0].name) + ' · ' + w.id + ': ' + fnum(v, ENG ? 1 : 0) + '</title></circle>';
        if (over) s += '<text x="' + x(i) + '" y="' + (top - 12) + '" text-anchor="middle" font-size="10" font-weight="800" fill="' + COL[b] + '">▲ ' + fnum(v, 0) + '</text>';
      });
    });
    return s + '</svg>';
  }
  function linePanelHtml() {
    var title = ENG ? 'Evoluția pe săptămâni · engagement mediu pe postare' : 'Evoluția pe săptămâni · vizualizări pe săptămână';
    var hint = ENG ? 'Engagement = reacții + comentarii' + (CFG.channel === 'Facebook' ? ' + distribuiri' : '') + ', împărțit la numărul de postări. Linia groasă suntem noi; apasă pe un nume ca să adaugi sau să scoți un cont. Săptămânile lunii alese sus sunt pe fond auriu.'
                    : 'Câte vizualizări au adunat toate videoclipurile unui cont într-o săptămână. Linia groasă suntem noi; apasă pe un nume ca să adaugi sau să scoți un cont. Săptămânile lunii alese sus sunt pe fond auriu.';
    var note = ENG ? '' : 'Un singur video viral poate ridica o săptămână întreagă; când trece de grafic, valoarea apare sus, cu ▲.';
    return '<h3 class="panel__title">' + title + '</h3><p class="note" style="margin-top:0">' + hint + '</p>' + legend(on, 'on') + card(linePanel()) + (note ? '<p class="note">' + note + '</p>' : '');
  }

  // ---- 2. clasament
  function rankHtml() {
    var pw = periodWeeks(), label = state.mode === 'ytd' ? 'ian–' + SHORT[state.month - 1].toLowerCase() + ' ' + state.year : MONTHS[state.month - 1] + ' ' + state.year;
    var title = (ENG ? 'Clasament pe rata de engagement' : 'Clasament · vizualizări medii pe video, ca % din urmăritori') + ' · ' + label;
    var hint = ENG ? 'Engagementul mediu pe postare împărțit la numărul de urmăritori. Așa putem compara un cont mic cu unul mare: arată cine își implică mai bine publicul, indiferent cât de mare e pagina.'
                   : 'Câte vizualizări are în medie un video, ca procent din urmăritorii contului. Arată cât de bine ajunge un video la publicul propriu, indiferent cât de mare e contul.';
    if (!pw.length) return '<h3 class="panel__title">' + title + '</h3><p class="note">Nu există date săptămânale pentru perioada aleasă (avem săptămânile S27–S41, din iulie până în octombrie 2026).</p>';
    var items = [], excl = [], hasMin = false;
    BR.forEach(function (b) {
      var meds = WEEKS.map(function (w) { return perUnit(b.id, w.id); }).filter(function (v) { return v != null; }), md = median(meds);
      var num = 0, den = 0, folEnd = null;
      pw.forEach(function (w) {
        var r = row(b.id, w.id), v = perUnit(b.id, w.id); if (!r || v == null) return;
        if (!ENG && md && v > 10 * md) { excl.push(b.name + ' ' + w.id); return; }
        if (r.q && (r.q.posts === '≥' || r.q.views === '≥')) hasMin = true;
        if (ENG) { num += r.eng_sum; den += r.eng_n; } else { num += r.views; den += r.posts; }
        if (r[FK] != null) folEnd = r[FK];
      });
      if (den && folEnd && folEnd > 10) items.push({ b: b, rate: (num / den) / folEnd * 100, avg: num / den, fol: folEnd });
    });
    items.sort(function (a, c) { return c.rate - a.rate; });
    var max = Math.max.apply(null, items.map(function (i) { return i.rate; }).concat([0.01])), W2 = 920, rowH = 40, H = items.length * rowH + 10, left = 150;
    var s = '<svg width="' + W2 + '" height="' + H + '" viewBox="0 0 ' + W2 + ' ' + H + '">';
    items.forEach(function (it, i) {
      var yy = i * rowH + 6, bw = (W2 - left - 230) * it.rate / max;
      s += '<text x="0" y="' + (yy + 20) + '" font-size="13" font-weight="' + (it.b.us ? 800 : 600) + '" fill="' + (it.b.us ? '#7b1c16' : '#3a2a22') + '">' + esc(it.b.name) + '</text>' +
           '<rect x="' + left + '" y="' + yy + '" width="' + Math.max(bw, 2) + '" height="26" rx="5" fill="' + COL[it.b.id] + '" opacity="' + (it.b.us ? 1 : 0.8) + '"/>' +
           '<text x="' + (left + bw + 8) + '" y="' + (yy + 18) + '" font-size="13" font-weight="800" fill="#3a2a22">' + fnum(it.rate, ENG ? 2 : 1) + '%</text>' +
           '<text x="' + (left + bw + 62) + '" y="' + (yy + 18) + '" font-size="11" fill="#8a7a6c">(' + fnum(it.fol) + (CFG.channel === 'YouTube' ? ' abonați' : ' urmăritori') + ')</text>';
    });
    s += '</svg>';
    var notes = [];
    if (excl.length) notes.push('Am lăsat deoparte săptămânile cu un video viral, care ar fi răsturnat clasamentul: ' + excl.join(', ') + '.');
    if (hasMin) notes.push('Perioada include cifre minime („≥”), citite fără cont autentificat.');
    if (CFG.channel === 'Facebook') notes.push('La Facebook urmăritorii sunt rotunjiți la mii, deci rata e aproximativă.');
    return '<h3 class="panel__title">' + title + '</h3><p class="note" style="margin-top:0">' + hint + '</p>' + card(s) + (notes.length ? '<p class="note">' + notes.join(' ') + '</p>' : '');
  }

  // ---- 3. creșterea urmăritorilor față de S29
  function followHtml() {
    var base = 'S29', ws = WEEKS.filter(function (w) { return +w.id.slice(1) >= 29; });
    function val(b, w) {
      var r = row(b, w.id); if (!r || r[FK] == null) return null;
      var n = (r.note && r.note[FK]) || ''; if (w.id !== 'S41' && (n.indexOf('data rulării') > -1 || n.indexOf('preluat') > -1)) return null;   // citiri de la rulare: nu sunt din săptămâna respectivă
      return r[FK];
    }
    var ids = BR.filter(function (b) { return onF[b.id]; }).map(function (b) { return b.id; });
    var ser = {}, lo = 0, hi = 0;
    BR.forEach(function (b) {
      var b0 = val(b.id, ws[0]); if (!b0 || b0 < 10) return;
      ser[b.id] = ws.map(function (w) { var v = val(b.id, w); return v == null ? null : (v / b0 - 1) * 100; });
      if (onF[b.id]) ser[b.id].forEach(function (v) { if (v != null) { lo = Math.min(lo, v); hi = Math.max(hi, v); } });
    });
    var step = 62, n = ws.length, Wd = n * step + 90, H = 270, top = 24, bot = 36, plotH = H - top - bot, span = (hi - lo) || 1; hi += span * 0.12; lo -= span * 0.05;
    function y(v) { return top + plotH - (v - lo) / (hi - lo) * plotH; }
    function x(i) { return 14 + (i + 0.5) * step; }
    var s = '<svg width="' + Wd + '" height="' + H + '" viewBox="0 0 ' + Wd + ' ' + H + '">';
    [0, 0.25, 0.5, 0.75, 1].forEach(function (f) { var v = lo + (hi - lo) * f, yy = y(v); s += '<line x1="8" x2="' + (Wd - 80) + '" y1="' + yy + '" y2="' + yy + '" stroke="#f3dfbf"/><text x="12" y="' + (yy - 3) + '" font-size="10" fill="#8a7a6c">' + fnum(v, Math.abs(hi - lo) < 4 ? 1 : 0) + '%</text>'; });
    var yz = y(0); s += '<line x1="8" x2="' + (Wd - 80) + '" y1="' + yz + '" y2="' + yz + '" stroke="#bfa98a" stroke-dasharray="3 3"/>';
    ws.forEach(function (w, i) { s += '<text x="' + x(i) + '" y="' + (H - 12) + '" text-anchor="middle" font-size="11" fill="#8a7a6c">' + w.id + '</text>'; });
    var ends = [];
    ids.filter(function (b) { return ser[b]; }).slice().reverse().forEach(function (b) {
      var d = '', prev = false, lastI = -1, lastV = null;
      ser[b].forEach(function (v, i) { if (v == null) { return; } d += (prev ? 'L' : 'M') + x(i) + ',' + y(v); prev = true; lastI = i; lastV = v; });
      if (lastV != null) ends.push({ b: b, i: lastI, v: lastV, y: y(lastV) });
      s += '<path d="' + d + '" fill="none" stroke="' + COL[b] + '" stroke-width="' + (b === 'DrA' ? 3.6 : 2.2) + '" stroke-linejoin="round" stroke-linecap="round"/>';
      ser[b].forEach(function (v, i) { if (v != null) s += '<circle cx="' + x(i) + '" cy="' + y(v) + '" r="' + (b === 'DrA' ? 3.8 : 2.8) + '" fill="' + COL[b] + '"/>'; });
    });
    ends.sort(function (a, c) { return a.y - c.y; });
    for (var k = 1; k < ends.length; k++) if (ends[k].y - ends[k - 1].y < 14) ends[k].y = ends[k - 1].y + 14;
    ends.forEach(function (e) { s += '<text x="' + (x(e.i) + 10) + '" y="' + (e.y + 4) + '" font-size="12" font-weight="800" fill="' + COL[e.b] + '">' + (e.v > 0 ? '+' : '') + fnum(e.v, 1) + '%</text>'; });
    s += '</svg>';
    var note = 'Punctul de plecare e S29 (iulie). Folosim doar citirile făcute în săptămâna respectivă; unde raportul nu avea cifra, punctul lipsește, iar linia unește punctele vecine.' +
      (CFG.channel === 'Facebook' ? ' Facebook arată urmăritorii rotunjiți la mii, deci micile salturi sunt rotunjiri, nu creștere reală.' : '') +
      (CFG.channel === 'Instagram' ? ' La Instagram, S29–S31 păstrează cifra din S28, deci creșterea din iulie e subestimată.' : '') +
      ' Un cont mic pare să crească repede în procente, chiar dacă adaugă puțini oameni.';
    return '<h3 class="panel__title">Creșterea ' + (CFG.channel === 'YouTube' ? 'abonaților' : 'urmăritorilor') + ' față de S29</h3><p class="note" style="margin-top:0">Cu cât a crescut fiecare cont, în procente, de la începutul lui iulie. Linia groasă suntem noi.</p>' + legend(onF, 'onF') + card(s) + '<p class="note">' + note + '</p>';
  }

  // ---- 4. tabel colorat săptămână × cont
  function heatHtml() {
    var title = ENG ? 'Engagement mediu pe postare, săptămână de săptămână' : 'Vizualizări medii pe video, săptămână de săptămână';
    var pw = periodWeeks().map(function (w) { return w.id; });
    var head = '<tr><th class="left">Cont</th>' + WEEKS.map(function (w) { return '<th title="' + w.range + '"' + (pw.indexOf(w.id) > -1 ? ' style="background:#f6e9cf;color:#5a1a14"' : '') + '>' + w.id + '</th>'; }).join('') + '</tr>';
    var rows = BR.map(function (b) {
      var vals = WEEKS.map(function (w) { return perUnit(b.id, w.id); }), srt = vals.filter(function (v) { return v != null; }).sort(function (a, c) { return a - c; });
      var tds = WEEKS.map(function (w, i) {
        var v = vals[i], r = row(b.id, w.id); if (v == null) return '<td class="num"><span class="muted">–</span></td>';
        var rk = srt.length > 1 ? srt.indexOf(v) / (srt.length - 1) : 0.5, a = 0.08 + 0.8 * rk, min = r.q && (r.q.posts === '≥' || r.q.views === '≥');
        var txt = ENG ? fnum(v, v < 10 ? 1 : 0) : fnum(v, 0);
        return '<td class="num" style="background:rgba(123,28,22,' + a.toFixed(2) + ');color:' + (a > 0.5 ? '#fff' : '#3a2a22') + '" title="' + esc(b.name) + ' · ' + w.id + '">' + (min ? '≥' : '') + txt + '</td>';
      }).join('');
      return '<tr class="' + (b.us ? 'row--us' : '') + '"><td class="left">' + esc(b.name) + '</td>' + tds + '</tr>';
    }).join('');
    return '<h3 class="panel__title">' + title + '</h3><p class="note" style="margin-top:0">Fiecare celulă e o săptămână. Culoarea se compară în cadrul fiecărui cont: cu cât e mai închisă, cu atât săptămâna a fost mai bună pentru contul respectiv (nu se compară un cont cu altul). Săptămânile lunii alese sus au antetul auriu.</p>' +
      '<div class="table-wrap"><table class="kpi cmp"><thead>' + head + '</thead><tbody>' + rows + '</tbody></table></div>' +
      '<p class="note">Culoarea arată locul săptămânii în propriul rând (cea mai bună = cea mai închisă), nu mărimea cifrei, așa că' + (ENG ? ' o postare cu mulți fani nu strică restul rândului.' : ' un video viral nu strică restul rândului.') + ' „≥” = cifră minimă, citită fără cont autentificat.</p>';
  }

  function ensure() {
    var anchor = document.getElementById('cmp-panel'); if (!anchor || document.getElementById('sc-line')) return;
    ['sc-line', 'sc-rank', 'sc-follow', 'sc-heat'].slice().reverse().forEach(function (id) {
      var d = document.createElement('div'); d.className = 'panel'; d.id = id; anchor.parentNode.insertBefore(d, anchor.nextSibling);
    });
  }
  function bindLegends() {
    document.querySelectorAll('.legend').forEach(function (lg) {
      var map = lg.getAttribute('data-lg') === 'on' ? on : onF;
      lg.querySelectorAll('.lg').forEach(function (b) { b.onclick = function () { map[b.getAttribute('data-b')] = !map[b.getAttribute('data-b')]; renderSocial(); }; });
    });
  }
  function renderSocial() {
    ensure();
    document.getElementById('sc-line').innerHTML = linePanelHtml();
    document.getElementById('sc-rank').innerHTML = rankHtml();
    document.getElementById('sc-follow').innerHTML = followHtml();
    document.getElementById('sc-heat').innerHTML = heatHtml();
    bindLegends();
  }
  var _base = window.render;
  window.render = function () { _base(); renderSocial(); };
  renderSocial();
})();
