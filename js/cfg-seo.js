// DATE DEMONSTRATIVE – valori de test, nu cifre reale. Doar iul–sep 2026.
window.REPORT_CONFIG = {
 "channel": "SEO",
 "kpis": [
  {
   "key": "sessions",
   "label": "Sesiuni organice",
   "hint": "vizite pe site venite din căutările Google (nu din reclame)",
   "type": "num",
   "additive": true
  },
  {
   "key": "clicks",
   "label": "Click-uri din Google",
   "hint": "de câte ori au apăsat oamenii pe site-ul nostru în rezultate",
   "type": "num",
   "additive": true
  },
  {
   "key": "impressions",
   "label": "Afișări în Google",
   "hint": "de câte ori a apărut site-ul în rezultatele căutărilor",
   "type": "num",
   "additive": true
  },
  {
   "key": "ctr",
   "label": "CTR",
   "hint": "din 100 de afișări, câte au dus la click, în procente",
   "type": "pct",
   "additive": false
  },
  {
   "key": "position",
   "label": "Poziția medie în Google",
   "hint": "locul mediu în rezultate (mai mic = mai bine)",
   "type": "dec",
   "additive": false,
   "invert": true
  },
  {
   "key": "top10",
   "label": "Cuvinte cheie în top 10",
   "hint": "câte căutări ne aduc pe prima pagină Google",
   "type": "num",
   "additive": "last"
  },
  {
   "key": "indexed",
   "label": "Pagini indexate",
   "hint": "câte pagini ale site-ului sunt cunoscute de Google",
   "type": "num",
   "additive": "last"
  }
 ],
 "data": {
  "2026-07": {
   "sessions": 9184,
   "clicks": 7863,
   "impressions": 326934,
   "ctr": 2.41,
   "position": 13.3,
   "top10": 77,
   "indexed": 510
  },
  "2026-08": {
   "sessions": 8847,
   "clicks": 7736,
   "impressions": 314952,
   "ctr": 2.46,
   "position": 15.0,
   "top10": 77,
   "indexed": 519
  },
  "2026-09": {
   "sessions": 8391,
   "clicks": 7217,
   "impressions": 303399,
   "ctr": 2.38,
   "position": 14.0,
   "top10": 74,
   "indexed": 527
  }
 },
 "demo": true,
 "notes": []
};
