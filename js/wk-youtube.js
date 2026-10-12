// Date reale din rapoartele KPI Tier 1 (S29–S40), pe săptămână.
window.WEEKLY_CONFIG = {
 "channel": "YouTube",
 "weeks": [
  {
   "id": "S29",
   "range": "13–19 iul",
   "month": "Iulie"
  },
  {
   "id": "S30",
   "range": "20–26 iul",
   "month": "Iulie"
  },
  {
   "id": "S31",
   "range": "27 iul–2 aug",
   "month": "Iulie"
  },
  {
   "id": "S32",
   "range": "3–9 aug",
   "month": "August"
  },
  {
   "id": "S33",
   "range": "10–16 aug",
   "month": "August"
  },
  {
   "id": "S34",
   "range": "17–23 aug",
   "month": "August"
  },
  {
   "id": "S35",
   "range": "24–30 aug",
   "month": "August"
  },
  {
   "id": "S36",
   "range": "31 aug–6 sep",
   "month": "Septembrie"
  },
  {
   "id": "S37",
   "range": "7–13 sep",
   "month": "Septembrie"
  },
  {
   "id": "S38",
   "range": "14–20 sep",
   "month": "Septembrie"
  },
  {
   "id": "S39",
   "range": "21–27 sep",
   "month": "Septembrie"
  },
  {
   "id": "S40",
   "range": "28 sep–4 oct",
   "month": "Septembrie"
  },
  {
   "id": "S41",
   "range": "5–11 oct",
   "month": "Octombrie"
  }
 ],
 "kpis": [
  {
   "key": "posts",
   "label": "Număr de postări",
   "hint": "videoclipuri (Shorts + long-form) publicate în săptămână",
   "type": "num",
   "additive": true
  },
  {
   "key": "views",
   "label": "Total vizualizări",
   "hint": "vizualizările videoclipurilor publicate în săptămână, din ziua raportului",
   "type": "num",
   "additive": true
  },
  {
   "key": "avgviews",
   "label": "Număr mediu de vizualizări",
   "hint": "vizualizări împărțite la numărul de postări (media pe postare)",
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
   "hint": "câți abonați are canalul, la ultimul raport",
   "type": "num",
   "additive": "last"
  },
  {
   "key": "leads",
   "label": "Număr de leaduri",
   "hint": "contacte noi venite din acest canal",
   "type": "num",
   "additive": true
  }
 ],
 "cmp": {
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
    "hint": "câte postări au fost publicate",
    "type": "num",
    "additive": true
   },
   {
    "key": "views",
    "label": "Total vizualizări",
    "hint": "vizualizările videoclipurilor publicate în săptămână",
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
    "hint": "abonații canalului, la ultimul raport (rotunjiți la 10 la concurenți)",
    "type": "num",
    "additive": "last"
   },
   {
    "key": "topval",
    "label": "Top video (vizualizări)",
    "hint": "cel mai vizionat video din săptămână",
    "type": "num",
    "additive": true
   }
  ]
 },
 "topLabel": "Vizualizări",
 "take": [
  "Ritmul nostru e peste al Life și al Regina Maria, sub al DENT ESTET. Media pe săptămânile cu număr exact: 5,3 videouri la noi, 7,4 la DENT ESTET, 4,6 la Life și 3,8 la Regina Maria. S39 e cea mai bună săptămână a noastră (11 Shorts), urmată de S40 și S37, cu câte 8. În S41 am avut 7 Shorts, față de 14 la DENT ESTET.",
  "Performanța noastră e foarte inegală. Vizionările per video sunt între 140 și 668 în 10 săptămâni, dar sub 60 în S32 (9), S35 (36), S36 (18). Vizionările sunt citite la data rulării, deci săptămânile recente au avut mai puțin timp să acumuleze.",
  "Pe vizionări per video suntem peste DENT ESTET în 7 din 12 săptămâni, peste Life în 7 din 12, dar sub Regina Maria în 8 din 11. DENT ESTET publică mult (2–14 videouri pe săptămână în săptămânile cu număr exact), cu 38–701 vizionări pe video; în S41, un singur Short (Maia Morgenstern) are 7.901 din cele 9.815 ale lor.",
  "S41: 7 Shorts, 1.803 vizionări (S40: 8 Shorts, 3.973), cel mai bun video 1.387 („Un zâmbet recâștigat”). Abonații noștri: 934, față de 1.350 la DENT ESTET și 9.330 la Regina Maria.",
  "Dentalist nu e în comparație, dar domină YouTube. Canalul personal al Dr. Alexandra Mircea are 345K abonați și a avut un Short cu 171.029 de vizionări (S31), o săptămână cu 133.472 (S37) și un video cu 341.000 (S39)."
 ],
 "notes": [
  "Rapoartele KPI Tier 1 compară contul nostru cu cei 5 concurenți principali (Tier 1). Săptămânile sunt cele din rapoarte (S29–S40, ISO).",
  "Vizualizările sunt cele din ziua raportului: un video recent are mai puține vizualizări decât unul vechi. În S30 raportul nu are date pe Shorts pentru DENT ESTET și Regina Maria.",
  "Dental Blue nu are canal YouTube; Elidadent are un canal abandonat (0 videoclipuri). Community posts nu sunt numărate.",
  "Leadurile din Puls sunt doar pentru Facebook + Instagram; pentru acest canal nu avem o sursă de leaduri.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în raport.",
  "Abonații sunt cei de la data rulării, nu de la sfârșitul săptămânilor: exacți pentru noi, rotunjiți de API la concurenți („≈”). Pentru S29–S35 păstrez ultima cifră cunoscută din rapoarte.",
  "S36–S40 au fost recitite cu skill-ul actualizat, cu vizualizările citite la data rulării (12 octombrie). Săptămânile S29–S35 vin din rapoartele vechi, citite mai devreme, deci vizualizările lor nu se compară direct cu cele de acum.",
  "S41 (5–11 octombrie) a fost citită pe 12 octombrie, fără cheia API (din paginile publice YouTube); abonații Elidadent nu au putut fi citiți. Vizualizările din S41 au avut mai puțin timp să acumuleze decât cele din S36–S40."
 ],
 "data": {
  "DrA": {
   "S29": {
    "q": {
     "subs": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 2,
    "views": 1336,
    "top": {
     "title": "Short umor „review de 1 stea”",
     "value": 1207,
     "q": "",
     "url": null
    },
    "topval": 1207,
    "subs": 918
   },
   "S30": {
    "q": {
     "subs": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 4,
    "views": 1929,
    "top": {
     "title": "Short fațetări directe din compozit",
     "value": 1717,
     "q": "",
     "url": null
    },
    "topval": 1717,
    "subs": 921
   },
   "S31": {
    "q": {
     "subs": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 7,
    "views": 4404,
    "top": {
     "title": "Short before & after",
     "value": 1536,
     "q": "",
     "url": null
    },
    "topval": 1536,
    "subs": 923
   },
   "S32": {
    "q": {
     "subs": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 2,
    "views": 18,
    "top": {
     "title": "Short periuța de dinți",
     "value": 14,
     "q": "",
     "url": null
    },
    "topval": 14,
    "subs": 921
   },
   "S33": {
    "q": {
     "subs": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 4,
    "views": 2076,
    "top": {
     "title": "Short umor „întrebări nepotrivite”",
     "value": 1279,
     "q": "",
     "url": null
    },
    "topval": 1279,
    "subs": 922
   },
   "S34": {
    "q": {
     "subs": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "subs": "ultima cifră: S33"
    },
    "posts": 6,
    "views": 1564,
    "top": {
     "title": "Short „Ți-e frică de dentist?”",
     "value": 479,
     "q": "",
     "url": null
    },
    "topval": 479,
    "subs": 922
   },
   "S35": {
    "q": {
     "subs": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 4,
    "views": 146,
    "top": {
     "title": "Short testimonial doamna Rodica/Dorina",
     "value": 75,
     "q": "",
     "url": null
    },
    "topval": 75,
    "subs": 925
   },
   "S36": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "subs": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 2,
    "views": 35,
    "top": {
     "title": "Lucrează mai inteligent, nu mai mult! Din experiență… (Short)",
     "value": 19,
     "q": "",
     "url": "https://www.youtube.com/shorts/qe4hj53yWKk"
    },
    "topval": 19,
    "subs": 934
   },
   "S37": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "subs": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 8,
    "views": 1546,
    "top": {
     "title": "Te speli zilnic pe dinți, dar tot apar carii… (Short)",
     "value": 721,
     "q": "",
     "url": "https://www.youtube.com/shorts/eHlv75lKQAU"
    },
    "topval": 721,
    "subs": 934
   },
   "S38": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "subs": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 4,
    "views": 2180,
    "top": {
     "title": "El n-a văzut o venind (Short)",
     "value": 1103,
     "q": "",
     "url": "https://www.youtube.com/shorts/Nb6m75rpInM"
    },
    "topval": 1103,
    "subs": 934
   },
   "S39": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "subs": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 11,
    "views": 1541,
    "top": {
     "title": "Mă simt foarte bine, deja zic că sunt ai mei! (Short)",
     "value": 440,
     "q": "",
     "url": "https://www.youtube.com/shorts/MQSSu4Oky0E"
    },
    "topval": 440,
    "subs": 934
   },
   "S40": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "subs": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 8,
    "views": 3973,
    "top": {
     "title": "Hei, Leo! Vrei să vezi zâmbetul înainte de tratament? (Short)",
     "value": 1278,
     "q": "",
     "url": "https://www.youtube.com/shorts/M3kE3pea1ls"
    },
    "topval": 1278,
    "subs": 934
   },
   "S41": {
    "q": {
     "subs": "",
     "topval": ""
    },
    "note": {},
    "posts": 7,
    "views": 1803,
    "subs": 934,
    "top": {
     "title": "Un zâmbet recâștigat. O stare care se vede",
     "value": 1387,
     "q": "",
     "url": "https://www.youtube.com/shorts/ztt5VfAJPHY"
    },
    "topval": 1387
   }
  },
  "DE": {
   "S29": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 2,
    "views": 76,
    "top": {
     "title": "fără titlu în raport",
     "value": 72,
     "q": "",
     "url": null
    },
    "topval": 72,
    "subs": 1330
   },
   "S30": {
    "q": {
     "posts": "≥",
     "views": "≥",
     "avgviews": "≥",
     "subs": "≈"
    },
    "note": {
     "views": "raportul nu are date",
     "subs": "ultima cifră: S29"
    },
    "posts": 5,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "subs": 1330
   },
   "S31": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 7,
    "views": 824,
    "top": {
     "title": "Short albire personalizată",
     "value": 269,
     "q": "",
     "url": null
    },
    "topval": 269,
    "subs": 1330
   },
   "S32": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 2,
    "views": 91,
    "top": {
     "title": "fără titlu în raport",
     "value": 79,
     "q": "",
     "url": null
    },
    "topval": 79,
    "subs": 1330
   },
   "S33": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 8,
    "views": 785,
    "top": {
     "title": "Short implant încărcare imediată",
     "value": 231,
     "q": "",
     "url": null
    },
    "topval": 231,
    "subs": 1330
   },
   "S34": {
    "q": {
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S33"
    },
    "posts": 8,
    "views": 2780,
    "top": {
     "title": "Short sângerarea gingiilor",
     "value": 969,
     "q": "",
     "url": null
    },
    "topval": 969,
    "subs": 1330
   },
   "S35": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 2,
    "views": 376,
    "top": {
     "title": "Short tratament de canal",
     "value": 333,
     "q": "",
     "url": null
    },
    "topval": 333,
    "subs": 1340
   },
   "S36": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 10,
    "views": 815,
    "top": {
     "title": "Implant dentar – Case review (Short)",
     "value": 307,
     "q": "",
     "url": "https://www.youtube.com/shorts/FH0s1gHhY8g"
    },
    "topval": 307,
    "subs": 1350
   },
   "S37": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 10,
    "views": 949,
    "top": {
     "title": "Gingivita este reversibilă. Ce se întâmplă dacă nu… (Short)",
     "value": 294,
     "q": "",
     "url": "https://www.youtube.com/shorts/1HwNuwWspYE"
    },
    "topval": 294,
    "subs": 1350
   },
   "S38": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 8,
    "views": 431,
    "top": {
     "title": "Legătura dintre boala parodontală și infarct sau AVC (Short)",
     "value": 124,
     "q": "",
     "url": "https://www.youtube.com/shorts/5Q_iizTyj08"
    },
    "topval": 124,
    "subs": 1350
   },
   "S39": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 10,
    "views": 904,
    "top": {
     "title": "Ce rol are inteligența artificială în ortodonție? (Short)",
     "value": 177,
     "q": "",
     "url": "https://www.youtube.com/shorts/sGBUXWZZdwc"
    },
    "topval": 177,
    "subs": 1350
   },
   "S40": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 8,
    "views": 793,
    "top": {
     "title": "DENT ESTET Brașov: pașii după inserarea implanturilor (Short)",
     "value": 216,
     "q": "",
     "url": "https://www.youtube.com/shorts/3hjSjSiDBuk"
    },
    "topval": 216,
    "subs": 1350
   },
   "S41": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de YouTube"
    },
    "posts": 14,
    "views": 9815,
    "subs": 1350,
    "top": {
     "title": "Maia Morgenstern despre încredere și medicina dentară",
     "value": 7901,
     "q": "",
     "url": "https://www.youtube.com/shorts/x5la6ODBHLY"
    },
    "topval": 7901
   }
  },
  "RM": {
   "S29": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 0,
    "views": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "subs": 9320
   },
   "S30": {
    "q": {
     "posts": "≥",
     "views": "≥",
     "avgviews": "≥",
     "subs": "≈"
    },
    "note": {
     "views": "raportul nu are date",
     "subs": "ultima cifră: S29"
    },
    "posts": 1,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "subs": 9320
   },
   "S31": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 3,
    "views": 950,
    "top": {
     "title": "Short „îți pui copilul în pericol”",
     "value": 360,
     "q": "",
     "url": null
    },
    "topval": 360,
    "subs": 9320
   },
   "S32": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 3,
    "views": 460,
    "top": {
     "title": "Short Dr. Leahu (frica de intervenții)",
     "value": 419,
     "q": "",
     "url": null
    },
    "topval": 419,
    "subs": 9320
   },
   "S33": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 6,
    "views": 1516,
    "top": {
     "title": "Short „Kids' Dentist starter pack”",
     "value": 722,
     "q": "",
     "url": null
    },
    "topval": 722,
    "subs": 9320
   },
   "S34": {
    "q": {
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S33"
    },
    "posts": 4,
    "views": 3851,
    "top": {
     "title": "Short sângerarea gingiilor",
     "value": 1372,
     "q": "",
     "url": null
    },
    "topval": 1372,
    "subs": 9320
   },
   "S35": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 5,
    "views": 2251,
    "top": {
     "title": "Short pediatrie",
     "value": 1350,
     "q": "",
     "url": null
    },
    "topval": 1350,
    "subs": 9330
   },
   "S36": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 3,
    "views": 1462,
    "top": {
     "title": "Copilul tău fuge de dentist? Nu ești singurul… (Short)",
     "value": 984,
     "q": "",
     "url": "https://www.youtube.com/shorts/F5rL5qyBTSs"
    },
    "topval": 984,
    "subs": 9330
   },
   "S37": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 2,
    "views": 1447,
    "top": {
     "title": "Cum știi dacă ai gingivită sau boală parodontală (Short)",
     "value": 1187,
     "q": "",
     "url": "https://www.youtube.com/shorts/MzOJIfRt0wA"
    },
    "topval": 1187,
    "subs": 9330
   },
   "S38": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 5,
    "views": 3166,
    "top": {
     "title": "Implantul dentar: cum obții un rezultat natural (Short)",
     "value": 1529,
     "q": "",
     "url": "https://www.youtube.com/shorts/3BRGDQIUXS0"
    },
    "topval": 1529,
    "subs": 9330
   },
   "S39": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 4,
    "views": 1228,
    "top": {
     "title": "Fast&Fixed: cum îți poți recăpăta zâmbetul (Short)",
     "value": 405,
     "q": "",
     "url": "https://www.youtube.com/shorts/2Xk1OVcvfKk"
    },
    "topval": 405,
    "subs": 9330
   },
   "S40": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 3,
    "views": 699,
    "top": {
     "title": "Ziua Mondială a Zâmbetului la noi în clinică (Short)",
     "value": 501,
     "q": "",
     "url": "https://www.youtube.com/shorts/2mhAxxqRKPE"
    },
    "topval": 501,
    "subs": 9330
   },
   "S41": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de YouTube"
    },
    "posts": 7,
    "views": 3816,
    "subs": 9330,
    "top": {
     "title": "Aceste obiceiuri îți pot distruge dinții",
     "value": 1216,
     "q": "",
     "url": "https://www.youtube.com/shorts/sVG6FiwoOS4"
    },
    "topval": 1216
   }
  },
  "Life": {
   "S29": {
    "q": {
     "posts": "≈",
     "subs": "≈"
    },
    "note": {},
    "posts": 8,
    "views": 2520,
    "top": {
     "title": "Short „Nu vreau dinți falși”",
     "value": 862,
     "q": "",
     "url": null
    },
    "topval": 862,
    "subs": 1990
   },
   "S30": {
    "q": {
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S29"
    },
    "posts": 0,
    "views": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "subs": 1990
   },
   "S31": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 5,
    "views": 875,
    "top": {
     "title": "Short aparat invizibil + finanțare",
     "value": 333,
     "q": "",
     "url": null
    },
    "topval": 333,
    "subs": 1990
   },
   "S32": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 7,
    "views": 1302,
    "top": {
     "title": "Short „Îți sângerează gingiile…”",
     "value": 370,
     "q": "",
     "url": null
    },
    "topval": 370,
    "subs": 2000
   },
   "S33": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 5,
    "views": 2298,
    "top": {
     "title": "Short „Ți-e teamă de dentist…”",
     "value": 1861,
     "q": "",
     "url": null
    },
    "topval": 1861,
    "subs": 2000
   },
   "S34": {
    "q": {
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S33"
    },
    "posts": 5,
    "views": 754,
    "top": {
     "title": "Short mediu de lucru sănătos (212)",
     "value": 212,
     "q": "",
     "url": null
    },
    "topval": 212,
    "subs": 2000
   },
   "S35": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 5,
    "views": 4312,
    "top": {
     "title": "Long-form Gabriela Cristea & Tavi Clonda",
     "value": 1300,
     "q": "",
     "url": null
    },
    "topval": 1300,
    "subs": 2000
   },
   "S36": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 4,
    "views": 1295,
    "top": {
     "title": "Gabriela Cristea a revenit la Life Dental Spa pentru… (video)",
     "value": 798,
     "q": "",
     "url": "https://www.youtube.com/watch?v=yAvCBRu4jiY"
    },
    "topval": 798,
    "subs": 2000
   },
   "S37": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 3,
    "views": 371,
    "top": {
     "title": "Încrederea se construiește în timp (Short)",
     "value": 170,
     "q": "",
     "url": "https://www.youtube.com/shorts/QC824AIf4bw"
    },
    "topval": 170,
    "subs": 2000
   },
   "S38": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 4,
    "views": 401,
    "top": {
     "title": "Ți s-a spus că un dinte trebuie scos? Nu te grăbi… (Short)",
     "value": 170,
     "q": "",
     "url": "https://www.youtube.com/shorts/Dl3xoo7-Ea8"
    },
    "topval": 170,
    "subs": 2000
   },
   "S39": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 5,
    "views": 491,
    "top": {
     "title": "Te speli corect pe dinți de două ori pe zi și, totuși… (Short)",
     "value": 148,
     "q": "",
     "url": "https://www.youtube.com/shorts/rtfT9WPR_i8"
    },
    "topval": 148,
    "subs": 2000
   },
   "S40": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 5,
    "views": 2833,
    "top": {
     "title": "Te speli pe dinți de două ori pe zi și tot îți… (Short)",
     "value": 814,
     "q": "",
     "url": "https://www.youtube.com/shorts/fPKXTFf7eUo"
    },
    "topval": 814,
    "subs": 2000
   },
   "S41": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de YouTube"
    },
    "posts": 4,
    "views": 1675,
    "subs": 2000,
    "top": {
     "title": "Prima vizită a copilului la dentist",
     "value": 718,
     "q": "",
     "url": "https://www.youtube.com/shorts/ZU_f-LI_lSI"
    },
    "topval": 718
   }
  },
  "Eli": {
   "S29": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 0,
    "views": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "subs": 1
   },
   "S30": {
    "q": {
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S29"
    },
    "posts": 0,
    "views": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "subs": 1
   },
   "S31": {
    "q": {
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S29"
    },
    "posts": 0,
    "views": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "subs": 1
   },
   "S32": {
    "q": {
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S29"
    },
    "posts": 0,
    "views": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "subs": 1
   },
   "S33": {
    "q": {
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S29"
    },
    "posts": 0,
    "views": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "subs": 1
   },
   "S34": {
    "q": {
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S29"
    },
    "posts": 0,
    "views": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "subs": 1
   },
   "S35": {
    "q": {
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S29"
    },
    "posts": 0,
    "views": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "subs": 1
   },
   "S36": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 0,
    "views": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "subs": 1
   },
   "S37": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 0,
    "views": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "subs": 1
   },
   "S38": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 0,
    "views": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "subs": 1
   },
   "S39": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 0,
    "views": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "subs": 1
   },
   "S40": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 0,
    "views": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "subs": 1
   },
   "S41": {
    "q": {
     "subs": "",
     "topval": ""
    },
    "note": {
     "subs": "nu a putut fi citit"
    },
    "posts": 0,
    "views": 0,
    "subs": null,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   }
  }
 }
};
