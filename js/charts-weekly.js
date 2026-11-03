// Grafice pe săptămâni (Facebook, Instagram, TikTok, YouTube), pentru paginile săptămânale: linie pe săptămâni + tabel colorat săptămână × cont.
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
  function periodWeeks() { return [WEEKS[state.idx]]; }   // săptămâna aleasă
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
    var hint = ENG ? 'Engagement = reacții + comentarii' + (CFG.channel === 'Facebook' ? ' + distribuiri' : '') + ', împărțit la numărul de postări. Linia groasă suntem noi; apasă pe un nume ca să adaugi sau să scoți un cont. Săptămâna aleasă sus e pe fond auriu.'
                    : 'Câte vizualizări au adunat toate videoclipurile unui cont într-o săptămână. Linia groasă suntem noi; apasă pe un nume ca să adaugi sau să scoți un cont. Săptămâna aleasă sus e pe fond auriu.';
    var note = ENG ? '' : 'Un singur video viral poate ridica o săptămână întreagă; când trece de grafic, valoarea apare sus, cu ▲.';
    return '<h3 class="panel__title">' + title + '</h3><p class="note" style="margin-top:0">' + hint + '</p>' + legend(on, 'on') + card(linePanel()) + (note ? '<p class="note">' + note + '</p>' : '');
  }


  // ---- 3. tabel colorat săptămână × cont
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


  function bindLegends() {
    document.querySelectorAll('.legend').forEach(function (lg) {
      var map = on;
      lg.querySelectorAll('.lg').forEach(function (b) { b.onclick = function () { map[b.getAttribute('data-b')] = !map[b.getAttribute('data-b')]; renderSocial(); }; });
    });
  }
  function renderSocial() {
    document.getElementById('sc-line').innerHTML = linePanelHtml();
    document.getElementById('sc-heat').innerHTML = heatHtml();
    bindLegends();
  }
  var _base = window.render;
  window.render = function () { _base(); renderSocial(); };
  renderSocial();
})();
