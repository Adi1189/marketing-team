// Pagina SEO (Google Search): măsurătoarea din 30 octombrie 2026, 6 orașe × 4 căutări.
var SEO = CFG.seo;
function seoMonth() { return MONTHS[state.month - 1] + ' ' + state.year; }
function hasSeo() { return state.year === 2026 && state.month === 10 && state.mode !== 'ytd'; }
function noSeo(title) { return '<h3 class="panel__title">' + title + '</h3><p class="note">Nu există măsurătoare SEO pentru perioada aleasă. Avem o singură măsurătoare, din 30 octombrie 2026 (alege Month, octombrie).</p>'; }

// culoarea celulei după poziție: 1 = cel mai închis; 2–4 = bună; 5–10 = pe prima pagină; „lista” = auriu; — = nu apărem
function sStyle(v) {
  if (v == null) return 'background:#f1eae0;';
  if (v === 'lista') return 'background:rgba(201,162,39,.38);';
  if (v === 1) return 'background:rgba(123,28,22,.92);color:#fff;font-weight:800;';
  if (v === 2) return 'background:rgba(123,28,22,.58);color:#fff;font-weight:700;';
  if (v <= 4) return 'background:rgba(123,28,22,.34);';
  return 'background:rgba(123,28,22,.14);';
}
function sCell(v) { return '<td class="num" style="' + sStyle(v) + '">' + (v == null ? '<span class="muted">—</span>' : v === 'lista' ? 'lista' : v) + '</td>'; }
function legendRow() {
  return '<div class="legend" style="margin-top:10px"><span class="lg" style="cursor:default;background:rgba(123,28,22,.92);color:#fff">1 · primii</span><span class="lg" style="cursor:default;background:rgba(123,28,22,.58);color:#fff">2</span><span class="lg" style="cursor:default;background:rgba(123,28,22,.34)">3–4</span><span class="lg" style="cursor:default;background:rgba(123,28,22,.14)">5–10 · prima pagină</span><span class="lg" style="cursor:default;background:rgba(201,162,39,.38)">lista · doar în lista extinsă</span><span class="lg" style="cursor:default;background:#f1eae0">— nu apărem</span></div>';
}
function posTable(kind) {
  var map = kind === 'map', head = '<tr><th class="left">Oraș</th>' + SEO.queries.map(function (q, i) { return '<th>' + (i + 1) + ' · ' + esc(q.replace(' [oraș]', '')) + '</th>'; }).join('') + '<th>' + (map ? 'În cutie' : 'Pe prima pagină') + '</th><th>Primul loc</th></tr>';
  var tIn = 0, tFirst = 0, rows = SEO.cities.map(function (c) {
    var vals = c.searches.map(function (s) { return map ? s.map : s.web; });
    var inn = vals.filter(function (v) { return typeof v === 'number' && (map ? v <= 3 : v <= 10); }).length, first = vals.filter(function (v) { return v === 1; }).length; tIn += inn; tFirst += first;
    var badge = ' <span class="cell__note">' + esc(c.status) + '</span>';
    return '<tr><td class="left">' + esc(c.n) + badge + '</td>' + vals.map(sCell).join('') + '<td class="num"><strong>' + inn + ' / 4</strong></td><td class="num"><strong>' + first + ' / 4</strong></td></tr>';
  }).join('');
  var n = SEO.cities.length * 4;
  return '<div class="table-wrap"><table class="kpi cmp qtable"><thead>' + head + '</thead><tbody>' + rows + '<tr class="row--tot"><td class="left"><strong>Total rețea</strong></td><td colspan="4"></td><td class="num"><strong>' + tIn + ' / ' + n + '</strong></td><td class="num"><strong>' + tFirst + ' / ' + n + '</strong></td></tr></tbody></table></div>';
}
function mapPanel() {
  var t = 'Cutia cu hartă (Map Pack) · poziția noastră pe oraș și căutare';
  if (!hasSeo()) return noSeo(t);
  return '<h3 class="panel__title">' + t + '</h3><p class="note" style="margin-top:0">Cutia cu 3 clinici și o hartă, care apare sus când cineva caută o clinică local; contează mult pe telefon. Cifra = locul nostru în cutie (1 = prima clinică). Cu cât numărul e mai mic, cu atât suntem mai sus.</p>' + posTable('map') + legendRow();
}
function webPanel() {
  var t = 'Rezultate web · poziția noastră pe oraș și căutare';
  if (!hasSeo()) return noSeo(t);
  return '<h3 class="panel__title">' + t + '</h3><p class="note" style="margin-top:0">Lista obișnuită de linkuri albastre, de sub cutie. Poziția 1 = primul link; prima pagină are cam 10 rezultate. Pagina clinicii noastre e de obicei cea care apare.</p>' + posTable('web') + legendRow();
}
function cityDetailPanel() {
  var t = 'Rezultate pe oraș · cine e în cutie lângă noi';
  if (!hasSeo()) return noSeo(t);
  var det = SEO.cities.map(function (c) {
    var rows = c.searches.map(function (s) {
      return '<tr><td class="left">' + esc(s.q) + '</td><td class="num" style="' + sStyle(s.map) + '">' + (s.map === 'lista' ? 'lista extinsă' : 'poz. ' + s.map) + '</td><td class="left cell--wrap">' + esc(s.pack) + '</td><td class="num" style="' + sStyle(s.web) + '">poz. ' + s.web + '</td><td class="left cell--wrap">' + esc(s.top3) + '</td></tr>';
    }).join('');
    var inBox = c.searches.filter(function (s) { return typeof s.map === 'number' && s.map <= 3; }).length, mf = c.searches.filter(function (s) { return s.map === 1; }).length, wf = c.searches.filter(function (s) { return s.web === 1; }).length;
    return '<details class="cdet"><summary><strong>' + esc(c.n) + '</strong> <span class="cell__note">' + esc(c.status) + '</span> · în cutie ' + inBox + '/4 (primii: ' + mf + ') · pe web primii ' + wf + '/4</summary>' +
      '<div class="table-wrap"><table class="kpi cmp"><thead><tr><th class="left">Căutare</th><th>Map Pack: poziția noastră</th><th class="left">Clinicile din cutie (recenzii)</th><th>Web: poziția noastră</th><th class="left">Primele 3 rezultate web</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<p class="note">Între paranteze: numărul de recenzii Google Maps, așa cum apare în cutie. „Noi” = clinica Dr. Ardeleanu din oraș.' + (c.extra ? ' ' + esc(c.extra) : '') + '</p><p class="note"><strong>' + esc(c.verdict) + '</strong></p></details>';
  }).join('');
  return '<h3 class="panel__title">' + t + '</h3><p class="note" style="margin-top:0">Apasă pe un oraș ca să vezi, pentru fiecare căutare, cine mai e în cutia cu hartă, ce recenzii au și care sunt primele rezultate pe web.</p>' + det;
}
function takePanel() {
  if (!hasSeo()) return '';
  return '<h3 class="panel__title">Constatări din raportul SEO · ' + SEO.measured + '</h3><ol class="take">' + SEO.take.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol><p class="note">Observațiile vin dintr-o singură măsurătoare, deci sunt ipoteze de verificat, nu concluzii definitive.</p>';
}
function renderSeo() {
  document.getElementById('seo-q').innerHTML = mapPanel();
  document.getElementById('seo-cities').innerHTML = webPanel();
  document.getElementById('seo-trend').innerHTML = cityDetailPanel();
  document.getElementById('seo-take').innerHTML = takePanel();
}
var _renderBaseSeo = render;
render = function () { _renderBaseSeo(); renderSeo(); };
renderSeo();
