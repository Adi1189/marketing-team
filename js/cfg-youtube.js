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
  "Iulie, august și septembrie (S29–S40) au fost recitite cu skill-ul actualizat, cu vizualizările citite pe 12–15 octombrie.",
  "Octombrie e în curs: are doar S41 (5–11 octombrie), deci cifrele sunt minime („≥”) și nu se compară cu septembrie.",
  "Abonații pe fiecare lună sunt cifra din ultima săptămână a lunii (iulie: S31, august: S35, septembrie: S40), din rapoartele săptămânale vechi; unde lipsea, e citirea de la rulare. Rotunjirile („≈”) vin din pagină.",
  "În iulie, DENT ESTET are 476.760 de vizualizări, din care 407.134 la un singur video viral (publicat pe 27 iulie, S31): cifra nu se compară cu luna august (4.179), iar variația apare ca o scădere de 99%, care nu e reală."
 ],
 "data": {
  "2026-07": {
   "posts": 13,
   "views": 7998,
   "leads": null,
   "q": {
    "subs": ""
   },
   "note": {
    "posts": "3 din 3 săpt. (S29–S31)",
    "views": "vizionări citite pe 15 oct",
    "leads": "Puls are leaduri doar pentru Facebook + Instagram",
    "subs": "la S31"
   },
   "topPosts": {
    "DrA": {
     "title": "Fatetarii directe din compozit in cabinet?",
     "value": 1747,
     "q": "",
     "week": "S30",
     "range": "20–26 iul",
     "url": "https://www.youtube.com/watch?v=csWwdWMIlqA"
    },
    "DE": {
     "title": "Începe tratamnetul ortodontic cu - ALIGN SMIL…",
     "value": 407134,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": "https://www.youtube.com/watch?v=XUvOZmKAuJw"
    },
    "RM": {
     "title": "Un copil uită repede cum arăta un instrument…",
     "value": 1023,
     "q": "",
     "week": "S30",
     "range": "20–26 iul",
     "url": "https://www.youtube.com/watch?v=hg3JZCcTbhE"
    },
    "Life": {
     "title": "Respirația urât mirositoare revine imediat…",
     "value": 1507,
     "q": "",
     "week": "S30",
     "range": "20–26 iul",
     "url": "https://www.youtube.com/watch?v=hY7nn2kdgQs"
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
   "views": 4182,
   "leads": null,
   "q": {
    "subs": ""
   },
   "note": {
    "posts": "4 din 4 săpt. (S32–S35)",
    "views": "vizionări citite pe 14 oct",
    "leads": "Puls are leaduri doar pentru Facebook + Instagram",
    "subs": "la S35"
   },
   "topPosts": {
    "DrA": {
     "title": "😂 Există întrebări care vin exact în momentul nepotrivit.",
     "value": 1292,
     "q": "",
     "week": "S33",
     "range": "10–16 aug",
     "url": "https://www.youtube.com/watch?v=y8W7rYfrEoE"
    },
    "DE": {
     "title": "Sângerarea gingiilor la detartraj…",
     "value": 973,
     "q": "",
     "week": "S34",
     "range": "17–23 aug",
     "url": "https://www.youtube.com/watch?v=78ydhsVMQEw"
    },
    "RM": {
     "title": "Echipa Națională de Rugby a României…",
     "value": 17390,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": "https://www.youtube.com/watch?v=X5YzwzWY8Ww"
    },
    "Life": {
     "title": "Gabriela Cristea și Tavi Clonda, împreună…",
     "value": 1979,
     "q": "",
     "week": "S35",
     "range": "24–30 aug",
     "url": "https://www.youtube.com/watch?v=qTxG6MCPNPM"
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
   "views": 9275,
   "leads": null,
   "q": {
    "subs": ""
   },
   "note": {
    "posts": "5 din 5 săpt.",
    "views": "vizionări citite pe 12 oct",
    "leads": "Puls are leaduri doar pentru Facebook + Instagram",
    "subs": "la S40"
   },
   "topPosts": {
    "DrA": {
     "title": "Hei, Leo! Vrei să vezi zâmbetul înainte de tratament? (Short)",
     "value": 1278,
     "q": "",
     "week": "S40",
     "range": "28 sep–4 oct",
     "url": "https://www.youtube.com/shorts/M3kE3pea1ls"
    },
    "DE": {
     "title": "Implant dentar – Case review (Short)",
     "value": 307,
     "q": "",
     "week": "S36",
     "range": "31 aug–6 sep",
     "url": "https://www.youtube.com/shorts/FH0s1gHhY8g"
    },
    "RM": {
     "title": "Implantul dentar: cum obții un rezultat natural (Short)",
     "value": 1529,
     "q": "",
     "week": "S38",
     "range": "14–20 sep",
     "url": "https://www.youtube.com/shorts/3BRGDQIUXS0"
    },
    "Life": {
     "title": "Te speli pe dinți de două ori pe zi și tot îți… (Short)",
     "value": 814,
     "q": "",
     "week": "S40",
     "range": "28 sep–4 oct",
     "url": "https://www.youtube.com/shorts/fPKXTFf7eUo"
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
  },
  "2026-10": {
   "posts": 7,
   "views": 1803,
   "leads": null,
   "q": {
    "posts": "≥",
    "views": "≥",
    "subs": ""
   },
   "note": {
    "posts": "luna în curs: doar S41 (5–11 oct)",
    "views": "doar S41 · citit pe 12 oct",
    "leads": "luna în curs",
    "subs": "la S41"
   },
   "subs": 934,
   "nocmp": true,
   "topPosts": {
    "DrA": {
     "title": "Un zâmbet recâștigat. O stare care se vede",
     "value": 1387,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.youtube.com/shorts/ztt5VfAJPHY"
    },
    "DE": {
     "title": "Maia Morgenstern despre încredere și medicina dentară",
     "value": 7901,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.youtube.com/shorts/x5la6ODBHLY"
    },
    "RM": {
     "title": "Aceste obiceiuri îți pot distruge dinții",
     "value": 1216,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.youtube.com/shorts/sVG6FiwoOS4"
    },
    "Life": {
     "title": "Prima vizită a copilului la dentist",
     "value": 718,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.youtube.com/shorts/ZU_f-LI_lSI"
    },
    "Eli": {
     "title": "",
     "value": null,
     "q": "",
     "week": null,
     "range": null,
     "url": null
    }
   }
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
   "Vizualizările sunt cele din ziua raportului: videoclipurile recente au mai puține vizualizări decât cele vechi."
  ],
  "data": {
   "DrA": {
    "2026-07": {
     "q": {
      "topval": "",
      "subs": ""
     },
     "posts": 13,
     "views": 7998,
     "topval": 1747,
     "subs": 923
    },
    "2026-08": {
     "q": {
      "subs": "",
      "topval": ""
     },
     "posts": 16,
     "views": 4182,
     "topval": 1292,
     "subs": 925
    },
    "2026-09": {
     "q": {
      "subs": "",
      "topval": ""
     },
     "posts": 33,
     "views": 9275,
     "topval": 1278,
     "subs": 932
    },
    "2026-10": {
     "posts": 7,
     "views": 1803,
     "subs": 934,
     "topval": 1387,
     "q": {
      "posts": "≥",
      "views": "≥",
      "subs": "",
      "topval": "≥"
     }
    }
   },
   "DE": {
    "2026-07": {
     "q": {
      "topval": "",
      "subs": "≈"
     },
     "posts": 22,
     "views": 476760,
     "topval": 407134,
     "subs": 1330
    },
    "2026-08": {
     "q": {
      "subs": "≈",
      "topval": ""
     },
     "posts": 21,
     "views": 4179,
     "topval": 973,
     "subs": 1340
    },
    "2026-09": {
     "q": {
      "subs": "≈",
      "topval": ""
     },
     "posts": 46,
     "views": 3892,
     "topval": 307,
     "subs": 1350
    },
    "2026-10": {
     "posts": 14,
     "views": 9815,
     "subs": 1350,
     "topval": 7901,
     "q": {
      "posts": "≥",
      "views": "≥",
      "subs": "≈",
      "topval": "≥"
     }
    }
   },
   "RM": {
    "2026-07": {
     "q": {
      "topval": "",
      "subs": "≈"
     },
     "posts": 9,
     "views": 3138,
     "topval": 1023,
     "subs": 9320
    },
    "2026-08": {
     "q": {
      "subs": "≈",
      "topval": ""
     },
     "posts": 18,
     "views": 39751,
     "topval": 17390,
     "subs": 9330
    },
    "2026-09": {
     "q": {
      "subs": "≈",
      "topval": ""
     },
     "posts": 17,
     "views": 8002,
     "topval": 1529,
     "subs": 9330
    },
    "2026-10": {
     "posts": 7,
     "views": 3816,
     "subs": 9330,
     "topval": 1216,
     "q": {
      "posts": "≥",
      "views": "≥",
      "subs": "≈",
      "topval": "≥"
     }
    }
   },
   "Life": {
    "2026-07": {
     "q": {
      "topval": "",
      "subs": "≈"
     },
     "posts": 19,
     "views": 7055,
     "topval": 1507,
     "subs": 1990
    },
    "2026-08": {
     "q": {
      "subs": "≈",
      "topval": ""
     },
     "posts": 22,
     "views": 11082,
     "topval": 1979,
     "subs": 2000
    },
    "2026-09": {
     "q": {
      "subs": "≈",
      "topval": ""
     },
     "posts": 21,
     "views": 5391,
     "topval": 814,
     "subs": 2000
    },
    "2026-10": {
     "posts": 4,
     "views": 1675,
     "subs": 2000,
     "topval": 718,
     "q": {
      "posts": "≥",
      "views": "≥",
      "subs": "≈",
      "topval": "≥"
     }
    }
   },
   "Eli": {
    "2026-07": {
     "q": {
      "subs": "≈",
      "topval": ""
     },
     "posts": 0,
     "views": 0,
     "subs": 1,
     "topval": null
    },
    "2026-08": {
     "q": {
      "subs": "≈",
      "topval": ""
     },
     "posts": 0,
     "views": 0,
     "subs": 1,
     "topval": null
    },
    "2026-09": {
     "q": {
      "subs": "≈",
      "topval": ""
     },
     "posts": 0,
     "views": 0,
     "subs": 1,
     "topval": null
    },
    "2026-10": {
     "posts": 0,
     "views": 0,
     "subs": null,
     "topval": null,
     "q": {
      "posts": "≥",
      "views": "≥",
      "subs": "",
      "topval": ""
     }
    }
   }
  }
 }
};
