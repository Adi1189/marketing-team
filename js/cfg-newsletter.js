// Date reale din tabelul de newsletter (iun–oct 2026).
window.REPORT_CONFIG = {
 "channel": "Newsletter",
 "demo": false,
 "pillText": "Date reale · iun–oct 2026",
 "kpis": [
  {
   "key": "subscribers",
   "label": "Număr total de abonați",
   "hint": "persoane din lista de newsletter, la momentul trimiterii",
   "type": "num",
   "additive": "last"
  },
  {
   "key": "opens",
   "label": "Deschideri unice",
   "hint": "câte persoane diferite au deschis emailul (o persoană se numără o singură dată)",
   "type": "num",
   "additive": true
  },
  {
   "key": "clicks",
   "label": "Click-uri unice",
   "hint": "câte persoane diferite au apăsat un link din email",
   "type": "num",
   "additive": true
  },
  {
   "key": "leads",
   "label": "Lead-uri (cod reducere)",
   "hint": "lead-uri atribuite newsletterului prin codul de reducere al campaniei",
   "type": "num",
   "additive": true
  }
 ],
 "top": null,
 "notes": [
  "Date reale din tabelul tău de newsletter, câte o trimitere pe lună: iunie COPIL, iulie ALBIRE, august EXTRACTIE, septembrie SCOALA, octombrie ALBIRE (același cod ca în iulie).",
  "Număr total de abonați = lista la momentul trimiterii. În iunie lista a crescut de la 11.136 la 21.900 (+10.764), de aceea variația iunie față de mai e foarte mare.",
  "Sub deschideri și click-uri apare procentul din emailurile livrate, iar sub lead-uri campania și procentul din click-uri; sunt cele din tabelul tău.",
  "Variațiile de la iunie sunt față de rândul de mai din tabel; la lead-uri mai nu are cifră, deci apare „–”.",
  "Lead-urile sunt cele din coloana „Lead-uri (cod reducere)” din tabelul tău: 16 în octombrie. Lead-urile programate (14 în octombrie, 87,5% din lead-uri) nu intră în acest KPI."
 ],
 "data": {
  "2026-06": {
   "subscribers": 21900,
   "opens": 2966,
   "clicks": 119,
   "leads": 12,
   "q": {},
   "note": {
    "opens": "14,7% din emailurile livrate",
    "clicks": "0,6% din emailurile livrate",
    "leads": "campania COPIL · 10,1% din click-uri",
    "subscribers": "față de 11.136 în mai: +10.764"
   },
   "vs": {
    "subscribers": 96.7,
    "opens": 53.0,
    "clicks": -63.8
   }
  },
  "2026-07": {
   "subscribers": 23668,
   "opens": 4614,
   "clicks": 407,
   "leads": 17,
   "q": {},
   "note": {
    "opens": "20,2% din emailurile livrate",
    "clicks": "1,8% din emailurile livrate",
    "leads": "campania ALBIRE · 4,2% din click-uri"
   }
  },
  "2026-08": {
   "subscribers": 23316,
   "opens": 5865,
   "clicks": 369,
   "leads": 6,
   "q": {},
   "note": {
    "opens": "25,8% din emailurile livrate",
    "clicks": "1,6% din emailurile livrate",
    "leads": "campania EXTRACTIE · 1,6% din click-uri"
   }
  },
  "2026-09": {
   "subscribers": 23211,
   "opens": 4970,
   "clicks": 243,
   "leads": 4,
   "q": {},
   "note": {
    "opens": "21,9% din emailurile livrate",
    "clicks": "1,1% din emailurile livrate",
    "leads": "campania SCOALA · 1,6% din click-uri"
   }
  },
  "2026-10": {
   "subscribers": 23098,
   "opens": 4428,
   "clicks": 232,
   "leads": 16,
   "q": {},
   "note": {
    "opens": "19,7% din emailurile livrate",
    "clicks": "1,0% din emailurile livrate",
    "leads": "campania ALBIRE · 6,9% din click-uri",
    "subscribers": "față de 23.211 în septembrie: −113"
   }
  }
 }
};
