// Grafice pe canal (Facebook, Instagram, TikTok, YouTube), din datele săptămânale. Se redesenează odată cu pagina lunară.
(function () {
  var W = window.WEEKLY_CONFIG; if (!W) return;
  var WEEKS = W.weeks, BR = W.cmp.brands, D = W.data;
  var ENG = (CFG.channel === 'Facebook' || CFG.channel === 'Instagram');
  var FK = CFG.channel === 'YouTube' ? 'subs' : 'followers';   // câmpul cu urmăritori/abonați, pentru clasament
  var COL = { DrA: '#7b1c16', DE: '#1f6f8b', RM: '#c9a227', Life: '#4f8a3c', Eli: '#8a5aa8', DB: '#e07b39' };
  var on = { DrA: true, DE: true, RM: true, Life: true, Eli: false, DB: false };
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

  // ---- 1. linie pe luni
  function monthlyVal(b, k) {
    var d = CFG.compare && CFG.compare.data && CFG.compare.data[b] && CFG.compare.data[b][k]; if (!d) return null;
    if (ENG) return (d.eng_sum != null && d.eng_n) ? d.eng_sum / d.eng_n : null;
    return d.views != null ? d.views : null;
  }
  function monthKeys() {
    var s = {}; BR.forEach(function (b) { var d = (CFG.compare.data || {})[b.id] || {}; Object.keys(d).forEach(function (k) { if (/^\d{4}-\d{2}$/.test(k)) s[k] = 1; }); });
    return Object.keys(s).sort();
  }
  function selMonths() {
    var out = []; if (state.mode === 'ytd') { for (var i = 1; i <= state.month; i++) out.push(state.year + '-' + String(i).padStart(2, '0')); } else out.push(state.year + '-' + String(state.month).padStart(2, '0'));
    return out;
  }
  function linePanel() {
    var ids = BR.filter(function (b) { return on[b.id]; }).map(function (b) { return b.id; }), keys = monthKeys(), sel = selMonths();
    var n = keys.length, step = Math.max(150, 900 / n), Wd = Math.round(n * step + 20), H = 290, top = 30, bot = 40, plotH = H - top - bot;
    var all = []; ids.forEach(function (b) { keys.forEach(function (k) { var v = monthlyVal(b, k); if (v != null) all.push(v); }); });
    var med = median(all), cap = Math.max.apply(null, all.filter(function (v) { return v <= 6 * med; }).concat([1])), max = cap * 1.18;
    function y(v) { return top + plotH - Math.min(v, max) / max * plotH; }
    function x(i) { return 14 + (i + 0.5) * step; }
    var s = '<svg width="100%" style="max-height:' + (H * 1.4) + 'px" viewBox="0 0 ' + Wd + ' ' + H + '">';
    keys.forEach(function (k, i) { if (sel.indexOf(k) > -1) s += '<rect x="' + (x(i) - step / 2) + '" y="' + (top - 8) + '" width="' + step + '" height="' + (plotH + 8) + '" fill="#f6e9cf" opacity=".6"/>'; });
    [0.25, 0.5, 0.75, 1].forEach(function (f) { var yy = top + plotH * (1 - f * (cap / max)); s += '<line x1="8" x2="' + (Wd - 8) + '" y1="' + yy + '" y2="' + yy + '" stroke="#f3dfbf"/><text x="12" y="' + (yy - 3) + '" font-size="11" fill="#6B645E">' + fnum(cap * f, cap < 10 ? 1 : 0) + '</text>'; });
    keys.forEach(function (k, i) { s += '<text x="' + x(i) + '" y="' + (H - 14) + '" text-anchor="middle" font-size="12" fill="#6B645E">' + MONTHS[+k.slice(5) - 1] + ' ' + k.slice(0, 4) + '</text>'; });
    ids.slice().reverse().forEach(function (b) {
      var d = '', prev = false;
      keys.forEach(function (k, i) { var v = monthlyVal(b, k); if (v == null) { prev = false; return; } d += (prev ? 'L' : 'M') + x(i) + ',' + y(v); prev = true; });
      s += '<path d="' + d + '" fill="none" stroke="' + COL[b] + '" stroke-width="' + (b === 'DrA' ? 3.6 : 2.2) + '" stroke-linejoin="round" stroke-linecap="round"/>';
      keys.forEach(function (k, i) {
        var v = monthlyVal(b, k); if (v == null) return; var over = v > max;
        s += '<circle cx="' + x(i) + '" cy="' + y(v) + '" r="' + (b === 'DrA' ? 4.5 : 3.5) + '" fill="' + COL[b] + '"><title>' + esc(BR.filter(function (q) { return q.id === b; })[0].name) + ' · ' + MONTHS[+k.slice(5) - 1] + ': ' + fnum(v, ENG ? 1 : 0) + '</title></circle>';
        if (over) s += '<text x="' + x(i) + '" y="' + (top - 12) + '" text-anchor="middle" font-size="11" font-weight="800" fill="' + COL[b] + '">▲ ' + fnum(v, 0) + '</text>';
      });
    });
    return s + '</svg>';
  }
  function linePanelHtml() {
    var title = ENG ? 'Evoluția pe luni · engagement mediu pe postare' : 'Evoluția pe luni · vizualizări pe lună';
    var hint = ENG ? 'Engagement = reacții + comentarii' + (CFG.channel === 'Facebook' ? ' + distribuiri' : '') + ', împărțit la numărul de postări din lună. Linia groasă suntem noi; apasă pe un nume ca să adaugi sau să scoți un cont. Luna aleasă sus e pe fond auriu.'
                   : 'Câte vizualizări au adunat toate videoclipurile unui cont într-o lună. Linia groasă suntem noi; apasă pe un nume ca să adaugi sau să scoți un cont. Luna aleasă sus e pe fond auriu.';
    var note = ENG ? '' : 'Un singur video viral poate ridica o lună întreagă; când trece de grafic, valoarea apare sus, cu ▲.';
    return '<h3 class="panel__title">' + title + '</h3><p class="note" style="margin-top:0">' + hint + '</p>' + legend(on, 'on') + card(linePanel()) + (note ? '<p class="note">' + note + '</p>' : '');
  }

  // ---- 2. clasament
  function rankHtml() {
    var pw = periodWeeks(), label = state.mode === 'ytd' ? 'ian–' + SHORT[state.month - 1].toLowerCase() + ' ' + state.year : MONTHS[state.month - 1] + ' ' + state.year;
    var title = (ENG ? 'Clasament pe rata de engagement' : 'Clasament · vizualizări medii pe video, ca % din urmăritori') + ' · ' + label;
    var hint = ENG ? 'Engagementul mediu pe postare împărțit la numărul de urmăritori. Așa putem compara un cont mic cu unul mare: arată cine își implică mai bine publicul, indiferent cât de mare e pagina.'
                   : 'Câte vizualizări are în medie un video, ca procent din urmăritorii contului. Arată cât de bine ajunge un video la publicul propriu, indiferent cât de mare e contul.';
    if (!pw.length) return '<h3 class="panel__title">' + title + '</h3><p class="note">Nu există date săptămânale pentru perioada aleasă (avem săptămânile S27–S44, din iulie până în octombrie 2026).</p>';
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
           '<text x="' + (left + bw + 62) + '" y="' + (yy + 18) + '" font-size="11" fill="#6B645E">(' + fnum(it.fol) + (CFG.channel === 'YouTube' ? ' abonați' : ' urmăritori') + ')</text>';
    });
    s += '</svg>';
    var notes = [];
    if (excl.length) notes.push('Am lăsat deoparte săptămânile cu un video viral, care ar fi răsturnat clasamentul: ' + excl.join(', ') + '.');
    if (hasMin) notes.push('Perioada include cifre minime („≥”), citite fără cont autentificat.');
    if (CFG.channel === 'Facebook') notes.push('La Facebook urmăritorii sunt rotunjiți la mii, deci rata e aproximativă.');
    return '<h3 class="panel__title">' + title + '</h3><p class="note" style="margin-top:0">' + hint + '</p>' + card(s) + (notes.length ? '<p class="note">' + notes.join(' ') + '</p>' : '');
  }


  function ensure() {
    var anchor = document.getElementById('cmp-panel'); if (!anchor || document.getElementById('sc-line')) return;
    ['sc-line', 'sc-rank'].slice().reverse().forEach(function (id) {
      var d = document.createElement('div'); d.className = 'panel'; d.id = id; anchor.parentNode.insertBefore(d, anchor.nextSibling);
    });
  }
  function bindLegends() {
    document.querySelectorAll('.legend').forEach(function (lg) {
      var map = on;
      lg.querySelectorAll('.lg').forEach(function (b) { b.onclick = function () { map[b.getAttribute('data-b')] = !map[b.getAttribute('data-b')]; renderSocial(); }; });
    });
  }
  function renderSocial() {
    ensure();
    document.getElementById('sc-line').innerHTML = linePanelHtml();
    document.getElementById('sc-rank').innerHTML = rankHtml();
    bindLegends();
  }
  var _base = window.render;
  window.render = function () { _base(); renderSocial(); };
  renderSocial();
})();
