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
  "Ritmul nostru e peste al Life și al Regina Maria, sub al DENT ESTET. Media pe săptămânile cu număr exact: 5,2 videouri la noi, 6,3 la DENT ESTET, 4,4 la Life și 3,4 la Regina Maria. S39 e cea mai bună săptămână a noastră (11 Shorts), urmată de S37 și S40, cu câte 8.",
  "Performanța noastră e foarte inegală. Vizionările per video sunt 480–670 în S29, S30, S31, S33, S38 și S40, dar doar 9 în S32, 37 în S35 și 7 în S36. În S39 sunt 133: dintre cele 11 Shorts, 4 au sub 20 de vizionări, iar 6 au fost postate în doar două zile (22 și 24 sept).",
  "Pe vizionări per video suntem peste DENT ESTET în 7 din 11 săptămâni și peste Life în 7 din 11, dar sub Regina Maria în 7 din 10. DENT ESTET publică mult (8–10 videouri pe săptămână în 6 din cele 11 săptămâni cu număr exact), cu 40–350 de vizionări pe video.",
  "S40 are cele mai bune rezultate ale noastre din ultimele săptămâni: 8 Shorts, 3.912 vizionări, cel mai bun video la 1.273 („Hei, Leo!”, previzualizarea zâmbetului). Like-uri per vizionare în S40: 0,8% la noi, 2,2% la DENT ESTET, 1,1% la Life, 0,6% la Regina Maria.",
  "Dentalist nu e în comparație, dar domină YouTube. Canalul personal al Dr. Alexandra Mircea are 345K abonați și a avut un Short cu 171.029 de vizionări (S31), o săptămână cu 133.472 (S37) și un video cu 341.000 (S39)."
 ],
 "notes": [
  "Rapoartele KPI Tier 1 compară contul nostru cu cei 5 concurenți principali (Tier 1). Săptămânile sunt cele din rapoarte (S29–S40, ISO).",
  "Vizualizările sunt cele din ziua raportului: un video recent are mai puține vizualizări decât unul vechi. În S30 raportul nu are date pe Shorts pentru DENT ESTET și Regina Maria.",
  "Dental Blue nu are canal YouTube; Elidadent are un canal abandonat (0 videoclipuri). Community posts nu sunt numărate.",
  "Leadurile din Puls sunt doar pentru Facebook + Instagram; pentru acest canal nu avem o sursă de leaduri.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în raport.",
  "Abonații sunt exacți pentru canalul nostru și rotunjiți la 10 pentru DENT ESTET, Regina Maria și Life („≈”); rapoartele îi dau doar în unele săptămâni, iar în rest păstrez ultima cifră cunoscută."
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
     "subs": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "subs": "ultima cifră: S35"
    },
    "posts": 2,
    "views": 13,
    "top": {
     "title": "Short promo CARE Forum",
     "value": 12,
     "q": "",
     "url": null
    },
    "topval": 12,
    "subs": 925
   },
   "S37": {
    "q": {
     "subs": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "subs": "ultima cifră: S35"
    },
    "posts": 8,
    "views": 1481,
    "top": {
     "title": "Short „Te speli zilnic pe dinți…”",
     "value": 713,
     "q": "",
     "url": null
    },
    "topval": 713,
    "subs": 925
   },
   "S38": {
    "q": {
     "subs": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "subs": "ultima cifră: S35"
    },
    "posts": 4,
    "views": 2154,
    "top": {
     "title": "Short „El n-a văzut-o venind”",
     "value": 1096,
     "q": "",
     "url": null
    },
    "topval": 1096,
    "subs": 925
   },
   "S39": {
    "q": {
     "subs": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 11,
    "views": 1467,
    "top": {
     "title": "Short testimonial „Mă simt foarte bine…”",
     "value": 433,
     "q": "",
     "url": null
    },
    "topval": 433,
    "subs": 931
   },
   "S40": {
    "q": {
     "subs": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 8,
    "views": 3912,
    "top": {
     "title": "Short „Hei, Leo!” (previzualizarea zâmbetului)",
     "value": 1273,
     "q": "",
     "url": null
    },
    "topval": 1273,
    "subs": 932
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
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S35"
    },
    "posts": 10,
    "views": 719,
    "top": {
     "title": "Short implant case review",
     "value": 306,
     "q": "",
     "url": null
    },
    "topval": 306,
    "subs": 1340
   },
   "S37": {
    "q": {
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S35"
    },
    "posts": 10,
    "views": 872,
    "top": {
     "title": "Short gingivita reversibilă",
     "value": 287,
     "q": "",
     "url": null
    },
    "topval": 287,
    "subs": 1340
   },
   "S38": {
    "q": {
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S35"
    },
    "posts": 9,
    "views": 379,
    "top": {
     "title": "Short boală parodontală și infarct",
     "value": 117,
     "q": "",
     "url": null
    },
    "topval": 117,
    "subs": 1340
   },
   "S39": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 3,
    "views": 145,
    "top": {
     "title": "Short fațete, coroane, implanturi pe termen lung",
     "value": 83,
     "q": "",
     "url": null
    },
    "topval": 83,
    "subs": 1340
   },
   "S40": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 8,
    "views": 756,
    "top": {
     "title": "Short All-on-4 Brașov",
     "value": 210,
     "q": "",
     "url": null
    },
    "topval": 210,
    "subs": 1350
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
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S35"
    },
    "posts": 3,
    "views": 1405,
    "top": {
     "title": "Short „Copilul tău fuge de dentist?”",
     "value": 972,
     "q": "",
     "url": null
    },
    "topval": 972,
    "subs": 9330
   },
   "S37": {
    "q": {
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S35"
    },
    "posts": 2,
    "views": 1400,
    "top": {
     "title": "Short gingivită vs boală parodontală",
     "value": 1176,
     "q": "",
     "url": null
    },
    "topval": 1176,
    "subs": 9330
   },
   "S38": {
    "q": {
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S35"
    },
    "posts": 4,
    "views": 2760,
    "top": {
     "title": "Short „Implantul dentar…”",
     "value": 1517,
     "q": "",
     "url": null
    },
    "topval": 1517,
    "subs": 9330
   },
   "S39": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 4,
    "views": 1155,
    "top": {
     "title": "Short Fast&Fixed",
     "value": 401,
     "q": "",
     "url": null
    },
    "topval": 401,
    "subs": 9330
   },
   "S40": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 3,
    "views": 652,
    "top": {
     "title": "Short Ziua Zâmbetului",
     "value": 473,
     "q": "",
     "url": null
    },
    "topval": 473,
    "subs": 9330
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
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S35"
    },
    "posts": 4,
    "views": 1245,
    "top": {
     "title": "Long-form Gabriela Cristea",
     "value": 774,
     "q": "",
     "url": null
    },
    "topval": 774,
    "subs": 2000
   },
   "S37": {
    "q": {
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S35"
    },
    "posts": 3,
    "views": 352,
    "top": {
     "title": "Short încrederea",
     "value": 166,
     "q": "",
     "url": null
    },
    "topval": 166,
    "subs": 2000
   },
   "S38": {
    "q": {
     "subs": "≈"
    },
    "note": {
     "subs": "ultima cifră: S35"
    },
    "posts": 4,
    "views": 358,
    "top": {
     "title": "Short „Ți s-a spus că un dinte trebuie scos?”",
     "value": 160,
     "q": "",
     "url": null
    },
    "topval": 160,
    "subs": 2000
   },
   "S39": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 5,
    "views": 451,
    "top": {
     "title": "Short „Te speli corect pe dinți…”",
     "value": 135,
     "q": "",
     "url": null
    },
    "topval": 135,
    "subs": 2000
   },
   "S40": {
    "q": {
     "subs": "≈"
    },
    "note": {},
    "posts": 5,
    "views": 2823,
    "top": {
     "title": "Short „Te speli pe dinți…”",
     "value": 810,
     "q": "",
     "url": null
    },
    "topval": 810,
    "subs": 2000
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
   "S37": {
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
   "S38": {
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
   "S39": {
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
   "S40": {
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
   }
  }
 }
};
