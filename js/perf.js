// Performance Marketing Budget – reprodus din Puls (snapshot). Datele: js/data-perf.js
(function () {
  var P = window.PERF;
  var MS = ['Ian','Feb','Mar','Apr','Mai','Iun','Iul','Aug','Sep','Oct','Noi','Dec'];
  var ML = ['ianuarie','februarie','martie','aprilie','mai','iunie','iulie','august','septembrie','octombrie','noiembrie','decembrie'];
  var ORD = { 3: 'a treia', 4: 'a patra', 5: 'a cincea', 6: 'a șasea', 7: 'a șaptea' };
  var state = { view: 'global', period: 12 };
  var NAME = {}; P.views.forEach(function (v) { NAME[v.id] = v.name; });
  var ALLKEYS = Object.keys(P.data.global).sort();

  function $(id) { return document.getElementById(id); }
  function mk(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function num(v) { return v == null ? '—' : Number(v).toLocaleString('ro-RO'); }
  function dec(v) { return v == null ? '—' : Number(v.toFixed(1)).toLocaleString('ro-RO'); }
  function pct(a, b) { if (!b) return null; var p = Math.round((a - b) / b * 100); return (p > 0 ? '+' : '') + p + '%'; }
  function mlabel(k) { return MS[+k.slice(5) - 1] + ' ' + k.slice(2, 4); }
  function mlong(k) { return ML[+k.slice(5) - 1] + ' ' + k.slice(0, 4); }
  function prevKey(k) { var y = +k.slice(0, 4), m = +k.slice(5); m--; if (m === 0) { m = 12; y--; } return y + '-' + String(m).padStart(2, '0'); }
  function yearAgo(k) { return (+k.slice(0, 4) - 1) + k.slice(4); }

  function window_() { var n = state.period === 'all' ? ALLKEYS.length : state.period; return ALLKEYS.slice(-n); }
  function row(view, k) { var r = (P.data[view] || {})[k]; return r ? { b: r[0], l: r[1], p: r[2] } : { b: null, l: null, p: null }; }
  function cpl(r) { return r.b != null && r.l > 0 ? r.b / r.l : null; }
  function cpp(r) { return r.b != null && r.p > 0 ? r.b / r.p : null; }

  // ----- filtre
  function renderFilters() {
    var v = $('perf-views'); v.innerHTML = '';
    v.appendChild(mk('span', 'period__label', 'Vedere'));
    P.views.forEach(function (x) {
      var b = mk('button', 'chip chip--month' + (x.id === state.view ? ' is-active' : ''), x.name); b.type = 'button';
      b.addEventListener('click', function () { state.view = x.id; if (x.id !== 'global') state.period = 12; render(); });
      v.appendChild(b);
    });
    var p = $('perf-period'); p.innerHTML = '';
    p.appendChild(mk('span', 'period__label', 'Perioadă'));
    [[12, '12 luni'], [24, '24 luni'], ['all', 'Tot istoricul']].forEach(function (x) {
      var b = mk('button', 'chip chip--month' + (x[0] === state.period ? ' is-active' : ''), x[1]); b.type = 'button';
      if (state.view !== 'global' && x[0] !== 12) { b.disabled = true; b.title = 'Disponibil doar pentru Global (celelalte vederi au ultimele 12 luni)'; }
      b.addEventListener('click', function () { state.period = x[0]; render(); });
      p.appendChild(b);
    });
  }

  // ----- sumar executiv
  function summary() {
    var keys = window_(), view = state.view, last = null, i;
    for (i = keys.length - 1; i >= 0; i--) if (row(view, keys[i]).b != null) { last = keys[i]; break; }
    var html = '<h2 class="summary__title">Sumar executiv</h2>';
    if (!last) return html + '<p>Nu există încă bugete pe lunile încheiate din perioada aleasă.</p>';
    var r = row(view, last), pk = prevKey(last), pr = row(view, pk), yk = yearAgo(last);
    var subject = view === 'global' ? 'întregii rețele' : view === 'c1' ? 'Clusterului 1' : view === 'c2' ? 'Clusterului 2' : 'clinicii ' + NAME[view];
    var s1 = 'În <b>' + mlong(last) + '</b>, bugetul ' + subject + ' a fost <b>' + num(r.b) + ' lei</b>';
    if (pr.b != null) s1 += ' — ' + pct(r.b, pr.b) + ' față de ' + mlong(pk);
    if (keys.indexOf(yk) > -1 && row(view, yk).b != null) s1 += ', ' + pct(r.b, row(view, yk).b) + ' față de ' + mlong(yk);
    html += '<p>' + s1 + '.</p>';
    if (r.l > 0) {
      var s2 = 'Au rezultat <b>' + num(r.l) + ' lead-uri</b> → cost/lead <b>' + dec(cpl(r)) + ' lei</b>';
      if (cpl(pr) != null) s2 += ' (' + pct(cpl(r), cpl(pr)) + ' vs luna precedentă)';
      s2 += ' și <b>' + num(r.p) + ' programări</b> → cost/programare <b>' + dec(cpp(r)) + ' lei</b>.';
      html += '<p>' + s2 + '</p>';
    } else {
      html += '<p>Fără lead-uri fb/ig înregistrate în ' + mlong(last) + ' pe acest filtru.</p>';
    }
    var kids = P.children[view];
    if (kids) {
      var rows = kids.map(function (c) { var q = row(c, last); return { id: c, b: q.b, l: q.l, cpl: cpl(q) }; })
                     .filter(function (q) { return q.b > 0 && q.l > 0; });
      if (rows.length) {
        var best = rows.reduce(function (a, b) { return b.cpl < a.cpl ? b : a; });
        var worst = rows.reduce(function (a, b) { return b.cpl > a.cpl ? b : a; });
        var big = rows.reduce(function (a, b) { return b.b > a.b ? b : a; });
        var tot = rows.reduce(function (s, q) { return s + q.b; }, 0);
        html += '<p>Cel mai eficient cost/lead: <b class="good">' + esc(NAME[best.id]) + '</b> (' + dec(best.cpl) + ' lei); cel mai scump: <b class="bad">' + esc(NAME[worst.id]) +
                '</b> (' + dec(worst.cpl) + ' lei). Cel mai mare buget: <b>' + esc(NAME[big.id]) + '</b> (' + Math.round(big.b / tot * 100) + '% din total).</p>';
      }
    }
    // costul pe lead crește de cel puțin 3 luni la rând
    var li = keys.indexOf(last), k = 0, j = li;
    while (j > 0) {
      var a = cpl(row(view, keys[j])), b = cpl(row(view, keys[j - 1]));
      if (a != null && b != null && a > b) { k++; j--; } else break;
    }
    if (k >= 3) {
      var start = cpl(row(view, keys[li - k])), end = cpl(row(view, last));
      html += '<p>Costul pe lead <b class="bad">crește ' + (ORD[k] || 'a ' + k + '-a') + ' lună la rând</b> (' + dec(start) + ' → ' + dec(end) + ' lei).</p>';
    }
    return html;
  }

  // ----- grafice (SVG)
  function chart(el, keys, vals, kind) {
    el.innerHTML = '';
    var have = vals.filter(function (v) { return v != null; });
    if (!have.length) { el.appendChild(mk('div', 'empty', 'Fără date în perioada aleasă.')); return; }
    var n = keys.length, avail = Math.max(el.clientWidth - 32, 320);
    var step = n <= 12 ? Math.max(avail / n, 46) : Math.max(avail / n, 54), W = step * n, H = 300, top = 38, bot = 46, plotH = H - top - bot;
    var every = n <= 12 ? 2 : 3, small = n > 12;
    var max = Math.max.apply(null, have), min = Math.min.apply(null, have);
    var lo = kind === 'bar' ? 0 : Math.max(0, min - (max - min) * 0.25), hi = kind === 'bar' ? max * 1.12 : max + (max - min) * 0.3 + 0.0001;
    function y(v) { return top + plotH - (v - lo) / (hi - lo) * plotH; }
    var s = '<svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" role="img">';
    [0.33, 0.66, 1].forEach(function (f) { var yy = top + plotH * (1 - f); s += '<line x1="12" x2="' + (W - 12) + '" y1="' + yy + '" y2="' + yy + '" stroke="#f3dfbf" stroke-width="1"/>'; });
    var pts = [];
    keys.forEach(function (k, i) {
      var cx = (i + 0.5) * step, v = vals[i];
      s += '<text x="' + cx + '" y="' + (H - 16) + '" text-anchor="middle" font-size="' + (small ? 10.5 : 13) + '" fill="#8a7a6c">' + mlabel(k) + '</text>';
      if (v == null) { pts.push(null); return; }
      if (kind === 'bar') {
        var bw = Math.min(52, step * 0.56), yy = y(v);
        s += '<rect x="' + (cx - bw / 2) + '" y="' + yy + '" width="' + bw + '" height="' + (top + plotH - yy) + '" rx="4" fill="#8b3a33"/>';
        if (i % every === 0) s += '<text x="' + cx + '" y="' + (yy - 8) + '" text-anchor="middle" font-size="' + (small ? 10 : 13) + '" font-weight="700" fill="#5a1a14">' + num(Math.round(v)) + '</text>';
      } else {
        pts.push([cx, y(v), v, i]);
      }
    });
    if (kind === 'line') {
      var seg = [], d = '';
      pts.forEach(function (p) { if (p) seg.push(p); else { if (seg.length > 1) d += 'M' + seg.map(function (q) { return q[0] + ',' + q[1]; }).join('L'); seg = []; } });
      if (seg.length > 1) d += 'M' + seg.map(function (q) { return q[0] + ',' + q[1]; }).join('L');
      s += '<path d="' + d + '" fill="none" stroke="#a8841e" stroke-width="3" stroke-linejoin="round"/>';
      pts.forEach(function (p) {
        if (!p) return;
        s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (small ? 3.5 : 5) + '" fill="#7b1c16"/>';
        if (p[3] % every === 0) s += '<text x="' + p[0] + '" y="' + (p[1] - 12) + '" text-anchor="middle" font-size="' + (small ? 10 : 13) + '" font-weight="700" fill="#5a1a14">' + dec(p[2]) + '</text>';
      });
    }
    el.innerHTML = s + '</svg>';
  }

  // ----- tabel
  function table() {
    var keys = window_().slice().reverse();
    var h = '<div class="table-wrap"><table class="kpi"><thead><tr><th class="left">Luna</th><th>Buget (lei)</th><th>Lead-uri</th><th>Programări</th><th>Cost/lead</th><th>Cost/programare</th></tr></thead><tbody>';
    keys.forEach(function (k) {
      var r = row(state.view, k);
      function c(v, f) { return v == null ? '<td class="num dash">—</td>' : '<td class="num">' + f(v) + '</td>'; }
      h += '<tr><td class="left">' + mlabel(k) + '</td>' + c(r.b, num) + c(r.l, num) + c(r.p, num) + c(cpl(r), dec) + c(cpp(r), dec) + '</tr>';
    });
    return h + '</tbody></table></div>';
  }

  function render() {
    renderFilters();
    $('perf-summary').innerHTML = summary();
    var keys = window_();
    var rows = keys.map(function (k) { return row(state.view, k); });
    chart($('ch-budget'), keys, rows.map(function (r) { return r.b; }), 'bar');
    chart($('ch-cpl'), keys, rows.map(cpl), 'line');
    chart($('ch-cpp'), keys, rows.map(cpp), 'line');
    $('perf-table').innerHTML = table();
  }

  $('perf-updated').textContent = 'Actualizat ' + P.updated;
  var rz; window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(render, 150); });
  render();
})();
