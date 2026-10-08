// Date reale din rapoartele KPI Tier 1 (12 săptămâni, S29–S40), grupate pe luni cum apar în rapoarte.
// Iulie = S29–S31 · August = S32–S35 · Septembrie = S36–S40.
window.REPORT_CONFIG = {
 "channel": "YouTube",
 "demo": false,
 "kpis": [
  {
   "key": "posts",
   "label": "Număr de postări",
   "hint": "videoclipuri (Shorts + long-form) publicate în perioada aleasă",
   "type": "num",
   "additive": true
  },
  {
   "key": "views",
   "label": "Total vizualizări",
   "hint": "de câte ori au fost văzute videoclipurile publicate în perioadă",
   "type": "num",
   "additive": true
  },
  {
   "key": "avgviews",
   "label": "Număr mediu de vizualizări",
   "hint": "vizualizări împărțite la numărul de videoclipuri (media pe videoclip)",
   "type": "num",
   "additive": true,
   "ratio": [
    "views",
    "posts"
   ]
  },
  {
   "key": "subs",
   "label": "Număr de abonați",
   "hint": "câți abonați are canalul, la ultimul raport din perioadă",
   "type": "num",
   "additive": "last"
  },
  {
   "key": "leads",
   "label": "Număr de leaduri",
   "hint": "contacte noi (persoane interesate de servicii) venite din acest canal",
   "type": "num",
   "additive": true
  }
 ],
 "top": {
  "title": "Top postarea lunii · Dr. Ardeleanu vs concurența",
  "titleYtd": "Top postarea perioadei · Dr. Ardeleanu vs concurența",
  "mode": "brands",
  "metricLabel": "Vizualizări",
  "showMonth": true
 },
 "notes": [
  "Perioadele sunt grupate ca în rapoartele KPI: iulie = S29–S31, august = S32–S35, septembrie = S36–S40.",
  "Vizualizările sunt cele din ziua raportului, pentru videoclipurile publicate în acea săptămână. Un video recent are mai puține vizualizări decât unul vechi, deci ultimele zile din fiecare săptămână sunt dezavantajate.",
  "Community posts nu sunt numărate.",
  "Cifrele sunt exacte pentru canalul nostru, în toate cele 12 săptămâni.",
  "Leadurile din Puls sunt doar pentru Facebook + Instagram; pentru acest canal nu avem o sursă de leaduri.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în rapoarte.",
  "Top postarea lunii = cea mai bună dintre topurile săptămânale ale lunii (rapoartele dau câte un top pe săptămână). „≥” apare când o săptămână din lună nu are cifre sau cifra e doar un eșantion. Linkurile postărilor nu sunt în rapoarte.",
  "Abonații vin din rapoarte: exacți pentru noi, rotunjiți la 10 la concurenți. Pentru fiecare lună e ultima cifră din raport."
 ],
 "data": {
  "2026-07": {
   "posts": 13,
   "views": 7669,
   "leads": null,
   "q": {
    "subs": ""
   },
   "note": {
    "posts": "3 din 3 săpt.",
    "views": "vizionări din ziua raportului",
    "leads": "Puls are leaduri doar pentru Facebook + Instagram",
    "subs": "la S31, cifră exactă"
   },
   "topPosts": {
    "DrA": {
     "title": "Short fațetări directe din compozit",
     "value": 1717,
     "q": "",
     "week": "S30",
     "range": "20–26 iul",
     "url": null
    },
    "DE": {
     "title": "Short albire personalizată",
     "value": 269,
     "q": "≥",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    },
    "RM": {
     "title": "Short „îți pui copilul în pericol”",
     "value": 360,
     "q": "≥",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    },
    "Life": {
     "title": "Short „Nu vreau dinți falși”",
     "value": 862,
     "q": "≥",
     "week": "S29",
     "range": "13–19 iul",
     "url": null
    },
    "Eli": {
     "title": "",
     "value": null,
     "q": "",
     "week": null,
     "range": null,
     "url": null
    }
   },
   "subs": 923
  },
  "2026-08": {
   "posts": 16,
   "views": 3804,
   "leads": null,
   "q": {
    "subs": ""
   },
   "note": {
    "posts": "4 din 4 săpt.",
    "views": "vizionări din ziua raportului",
    "leads": "Puls are leaduri doar pentru Facebook + Instagram",
    "subs": "la S35, cifră exactă"
   },
   "topPosts": {
    "DrA": {
     "title": "Short umor „întrebări nepotrivite”",
     "value": 1279,
     "q": "",
     "week": "S33",
     "range": "10–16 aug",
     "url": null
    },
    "DE": {
     "title": "Short sângerarea gingiilor",
     "value": 969,
     "q": "",
     "week": "S34",
     "range": "17–23 aug",
     "url": null
    },
    "RM": {
     "title": "Short sângerarea gingiilor",
     "value": 1372,
     "q": "",
     "week": "S34",
     "range": "17–23 aug",
     "url": null
    },
    "Life": {
     "title": "Short „Ți-e teamă de dentist…”",
     "value": 1861,
     "q": "",
     "week": "S33",
     "range": "10–16 aug",
     "url": null
    },
    "Eli": {
     "title": "",
     "value": null,
     "q": "",
     "week": null,
     "range": null,
     "url": null
    }
   },
   "subs": 925
  },
  "2026-09": {
   "posts": 33,
   "views": 9027,
   "leads": null,
   "q": {
    "subs": ""
   },
   "note": {
    "posts": "5 din 5 săpt.",
    "views": "vizionări din ziua raportului",
    "leads": "Puls are leaduri doar pentru Facebook + Instagram",
    "subs": "la S40, cifră exactă"
   },
   "topPosts": {
    "DrA": {
     "title": "Short „Hei, Leo!” (previzualizarea zâmbetului)",
     "value": 1273,
     "q": "",
     "week": "S40",
     "range": "28 sep–4 oct",
     "url": null
    },
    "DE": {
     "title": "Short implant case review",
     "value": 306,
     "q": "",
     "week": "S36",
     "range": "31 aug–6 sep",
     "url": null
    },
    "RM": {
     "title": "Short „Implantul dentar…”",
     "value": 1517,
     "q": "",
     "week": "S38",
     "range": "14–20 sep",
     "url": null
    },
    "Life": {
     "title": "Short „Te speli pe dinți…”",
     "value": 810,
     "q": "",
     "week": "S40",
     "range": "28 sep–4 oct",
     "url": null
    },
    "Eli": {
     "title": "",
     "value": null,
     "q": "",
     "week": null,
     "range": null,
     "url": null
    }
   },
   "subs": 932
  }
 },
 "compare": {
  "brands": [
   {
    "id": "DrA",
    "name": "Dr. Ardeleanu",
    "us": true
   },
   {
    "id": "DE",
    "name": "DENT ESTET"
   },
   {
    "id": "RM",
    "name": "Regina Maria Dental"
   },
   {
    "id": "Life",
    "name": "Life Dental Spa"
   },
   {
    "id": "Eli",
    "name": "Elidadent"
   }
  ],
  "kpis": [
   {
    "key": "posts",
    "label": "Postări",
    "hint": "videoclipuri (Shorts + long-form) publicate",
    "type": "num",
    "additive": true
   },
   {
    "key": "views",
    "label": "Total vizualizări",
    "hint": "vizualizările videoclipurilor publicate în perioadă, din ziua raportului",
    "type": "num",
    "additive": true
   },
   {
    "key": "avgviews",
    "label": "Medie vizualizări / video",
    "hint": "vizualizări împărțite la numărul de videoclipuri",
    "type": "num",
    "additive": true,
    "ratio": [
     "views",
     "posts"
    ]
   },
   {
    "key": "subs",
    "label": "Abonați",
    "hint": "abonații canalului, la ultimul raport din lună (rotunjiți la 10 la concurenți)",
    "type": "num",
    "additive": "last"
   },
   {
    "key": "topval",
    "label": "Top video (vizualizări)",
    "hint": "cel mai vizionat video din perioadă",
    "type": "num",
    "additive": "max"
   }
  ],
  "notes": [
   "Dental Blue nu are canal YouTube. Elidadent are un canal abandonat (0 videoclipuri în toate cele 12 săptămâni).",
   "În S30 raportul nu are date pe Shorts pentru DENT ESTET și Regina Maria, deci iulie e minim pentru ei („≥”).",
   "Vizualizările sunt cele din ziua raportului: videoclipurile recente au mai puține vizualizări decât cele vechi.",
   "Abonații sunt exacți pentru canalul nostru și rotunjiți la 10 pentru DENT ESTET, Regina Maria și Life („≈”); sunt cei de la ultimul raport din lună."
  ],
  "data": {
   "DrA": {
    "2026-07": {
     "q": {
      "topval": "",
      "subs": ""
     },
     "posts": 13,
     "views": 7669,
     "topval": 1717,
     "subs": 923
    },
    "2026-08": {
     "q": {
      "topval": "",
      "subs": ""
     },
     "posts": 16,
     "views": 3804,
     "topval": 1279,
     "subs": 925
    },
    "2026-09": {
     "q": {
      "topval": "",
      "subs": ""
     },
     "posts": 33,
     "views": 9027,
     "topval": 1273,
     "subs": 932
    }
   },
   "DE": {
    "2026-07": {
     "q": {
      "posts": "≥",
      "views": "≥",
      "avgviews": "≥",
      "topval": "≥",
      "subs": "≈"
     },
     "posts": 14,
     "views": 900,
     "topval": 269,
     "subs": 1330
    },
    "2026-08": {
     "q": {
      "topval": "",
      "subs": "≈"
     },
     "posts": 20,
     "views": 4032,
     "topval": 969,
     "subs": 1340
    },
    "2026-09": {
     "q": {
      "topval": "",
      "subs": "≈"
     },
     "posts": 40,
     "views": 2871,
     "topval": 306,
     "subs": 1350
    }
   },
   "RM": {
    "2026-07": {
     "q": {
      "posts": "≥",
      "views": "≥",
      "avgviews": "≥",
      "topval": "≥",
      "subs": "≈"
     },
     "posts": 4,
     "views": 950,
     "topval": 360,
     "subs": 9320
    },
    "2026-08": {
     "q": {
      "topval": "",
      "subs": "≈"
     },
     "posts": 18,
     "views": 8078,
     "topval": 1372,
     "subs": 9330
    },
    "2026-09": {
     "q": {
      "topval": "",
      "subs": "≈"
     },
     "posts": 16,
     "views": 7372,
     "topval": 1517,
     "subs": 9330
    }
   },
   "Life": {
    "2026-07": {
     "q": {
      "posts": "≈",
      "topval": "",
      "subs": "≈"
     },
     "posts": 13,
     "views": 3395,
     "topval": 862,
     "subs": 1990
    },
    "2026-08": {
     "q": {
      "topval": "",
      "subs": "≈"
     },
     "posts": 22,
     "views": 8666,
     "topval": 1861,
     "subs": 2000
    },
    "2026-09": {
     "q": {
      "topval": "",
      "subs": "≈"
     },
     "posts": 21,
     "views": 5229,
     "topval": 810,
     "subs": 2000
    }
   },
   "Eli": {
    "2026-07": {
     "q": {
      "subs": "≈"
     },
     "posts": 0,
     "views": 0,
     "subs": 1
    },
    "2026-08": {
     "q": {
      "subs": "≈"
     },
     "posts": 0,
     "views": 0,
     "subs": 1
    },
    "2026-09": {
     "q": {
      "subs": "≈"
     },
     "posts": 0,
     "views": 0,
     "subs": 1
    }
   }
  }
 }
};
