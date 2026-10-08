// Date reale din rapoartele KPI Tier 1 (S29–S40), pe săptămână.
window.WEEKLY_CONFIG = {
 "channel": "TikTok",
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
   "hint": "câte videoclipuri au fost publicate în săptămână",
   "type": "num",
   "additive": true
  },
  {
   "key": "views",
   "label": "Total vizualizări",
   "hint": "de câte ori au fost văzute videoclipurile în săptămână",
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
   "key": "followers",
   "label": "Număr de urmăritori",
   "hint": "câți urmăritori are contul, la ultimul raport",
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
   },
   {
    "id": "DB",
    "name": "Dental Blue"
   }
  ],
  "kpis": [
   {
    "key": "posts",
    "label": "Postări",
    "hint": "câte videoclipuri au fost publicate",
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
    "key": "followers",
    "label": "Urmăritori",
    "hint": "urmăritorii contului, la ultimul raport",
    "type": "num",
    "additive": "last"
   },
   {
    "key": "topval",
    "label": "Top video (vizualizări)",
    "hint": "cel mai vizionat video din săptămână",
    "type": "num",
    "additive": "max"
   }
  ]
 },
 "topLabel": "Vizualizări",
 "take": [
  "DENT ESTET ne-a depășit la urmăritori. În S29 aveam 6.711 față de 5.851 la ei. În S40 avem 6.800 față de 8.511. Ei au crescut cu 2.660 (+45,5%) în 12 săptămâni, noi cu 89 (+1,3%). Depășirea a venit între S32 și S33.",
  "Ritmul nostru e variabil, dar S40 e cel mai bun. Videouri pe săptămână: 2, 3, 6, 2, 5, 5, 4, 6, 2, 3, 5, 7. Media e 4,2, față de 6,5 la DENT ESTET și 5,7 la Life. Life a coborât la 3 și 4 în ultimele două săptămâni.",
  "Pe rata de engagement stăm mai bine decât DENT ESTET, dar sub Regina Maria. Rata noastră e 0,13–0,36% în cele 7 săptămâni cu cifre, față de 0,03–0,12% la DENT ESTET. Regina Maria e peste noi în 5 din 7 săptămâni.",
  "Ce a adus engagement la competitori: colaborări cu persoane publice (Life × Gabriela Cristea: 160 și 643; Elidadent × Insula Iubirii: 49) și mituri demontate cu audio din bibliotecă la Regina Maria (41). Cele mai bune ale noastre: 38 (umor despre recenzii Google), 37 (sketch despre recenzii) și 34 (previzualizarea zâmbetului)."
 ],
 "notes": [
  "Rapoartele KPI Tier 1 compară contul nostru cu cei 5 concurenți principali (Tier 1). Săptămânile sunt cele din rapoarte (S29–S40, ISO).",
  "Rapoartele nu dau vizualizările totale, doar vizualizările celui mai vizionat video din fiecare săptămână; de aceea „Total vizualizări” și media lipsesc, iar titlul postării de top e cunoscut doar când raportul îl dă.",
  "Dental Blue a postat doar 3 videoclipuri în 12 săptămâni; Dental Safari nu are cont TikTok.",
  "Leadurile din Puls sunt doar pentru Facebook + Instagram; pentru acest canal nu avem o sursă de leaduri.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în raport.",
  "Urmăritorii sunt cifre exacte din profil; în S34 raportul nu îi are, așa că păstrez ultima cifră cunoscută. „Total vizualizări” și media rămân cu „–” (rapoartele dau doar topul), ca să avem aceleași coloane ca la YouTube."
 ],
 "data": {
  "DrA": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 2,
    "top": {
     "title": "Comedie / sketch recenzii, 19 iul (1.625 views)",
     "value": 1625,
     "q": "",
     "url": null
    },
    "topval": 1625,
    "followers": 6711
   },
   "S30": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 3,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 961,
     "q": "",
     "url": null
    },
    "topval": 961,
    "followers": 6732
   },
   "S31": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 6,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1142,
     "q": "",
     "url": null
    },
    "topval": 1142,
    "followers": 6746
   },
   "S32": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 2,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1071,
     "q": "",
     "url": null
    },
    "topval": 1071,
    "followers": 6749
   },
   "S33": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 5,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1237,
     "q": "",
     "url": null
    },
    "topval": 1237,
    "followers": 6751
   },
   "S34": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "followers": "ultima cifră: S33"
    },
    "posts": 5,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 964,
     "q": "",
     "url": null
    },
    "topval": 964,
    "followers": 6751
   },
   "S35": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 4,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1324,
     "q": "",
     "url": null
    },
    "topval": 1324,
    "followers": 6779
   },
   "S36": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 6,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1271,
     "q": "",
     "url": null
    },
    "topval": 1271,
    "followers": 6793
   },
   "S37": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 2,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1187,
     "q": "",
     "url": null
    },
    "topval": 1187,
    "followers": 6793
   },
   "S38": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 3,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1688,
     "q": "",
     "url": null
    },
    "topval": 1688,
    "followers": 6799
   },
   "S39": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 5,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1303,
     "q": "",
     "url": null
    },
    "topval": 1303,
    "followers": 6800
   },
   "S40": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 7,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1323,
     "q": "",
     "url": null
    },
    "topval": 1323,
    "followers": 6800
   }
  },
  "DE": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 1,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 313,
     "q": "",
     "url": null
    },
    "topval": 313,
    "followers": 5851
   },
   "S30": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 5,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 863,
     "q": "",
     "url": null
    },
    "topval": 863,
    "followers": 6057
   },
   "S31": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 7,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1048,
     "q": "",
     "url": null
    },
    "topval": 1048,
    "followers": 6156
   },
   "S32": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 5,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1008,
     "q": "",
     "url": null
    },
    "topval": 1008,
    "followers": 6628
   },
   "S33": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 6,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 938,
     "q": "",
     "url": null
    },
    "topval": 938,
    "followers": 7183
   },
   "S34": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "followers": "ultima cifră: S33"
    },
    "posts": 7,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 632,
     "q": "",
     "url": null
    },
    "topval": 632,
    "followers": 7183
   },
   "S35": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 4,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 875,
     "q": "",
     "url": null
    },
    "topval": 875,
    "followers": 7990
   },
   "S36": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 10,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 865,
     "q": "",
     "url": null
    },
    "topval": 865,
    "followers": 8054
   },
   "S37": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 11,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 841,
     "q": "",
     "url": null
    },
    "topval": 841,
    "followers": 8185
   },
   "S38": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 7,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 333,
     "q": "",
     "url": null
    },
    "topval": 333,
    "followers": 8308
   },
   "S39": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 10,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 465,
     "q": "",
     "url": null
    },
    "topval": 465,
    "followers": 8403
   },
   "S40": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 5,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 854,
     "q": "",
     "url": null
    },
    "topval": 854,
    "followers": 8511
   }
  },
  "RM": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 1,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 955,
     "q": "",
     "url": null
    },
    "topval": 955,
    "followers": 5492
   },
   "S30": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 4,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 2510,
     "q": "",
     "url": null
    },
    "topval": 2510,
    "followers": 5503
   },
   "S31": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 3,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 2642,
     "q": "",
     "url": null
    },
    "topval": 2642,
    "followers": 5511
   },
   "S32": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 2,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 901,
     "q": "",
     "url": null
    },
    "topval": 901,
    "followers": 5517
   },
   "S33": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 5,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1079,
     "q": "",
     "url": null
    },
    "topval": 1079,
    "followers": 5522
   },
   "S34": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "followers": "ultima cifră: S33"
    },
    "posts": 3,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1242,
     "q": "",
     "url": null
    },
    "topval": 1242,
    "followers": 5522
   },
   "S35": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 4,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1208,
     "q": "",
     "url": null
    },
    "topval": 1208,
    "followers": 5528
   },
   "S36": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "followers": "ultima cifră: S35"
    },
    "posts": 3,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1386,
     "q": "",
     "url": null
    },
    "topval": 1386,
    "followers": 5528
   },
   "S37": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "followers": "ultima cifră: S35"
    },
    "posts": 2,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1433,
     "q": "",
     "url": null
    },
    "topval": 1433,
    "followers": 5528
   },
   "S38": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 4,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1414,
     "q": "",
     "url": null
    },
    "topval": 1414,
    "followers": 5553
   },
   "S39": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 2,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1288,
     "q": "",
     "url": null
    },
    "topval": 1288,
    "followers": 5555
   },
   "S40": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 2,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 994,
     "q": "",
     "url": null
    },
    "topval": 994,
    "followers": 5560
   }
  },
  "Life": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 7,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 507,
     "q": "",
     "url": null
    },
    "topval": 507,
    "followers": 6863
   },
   "S30": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 7,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 4124,
     "q": "",
     "url": null
    },
    "topval": 4124,
    "followers": 6868
   },
   "S31": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 6,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 4871,
     "q": "",
     "url": null
    },
    "topval": 4871,
    "followers": 6874
   },
   "S32": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 7,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 12800,
     "q": "",
     "url": null
    },
    "topval": 12800,
    "followers": 6893
   },
   "S33": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 6,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1097,
     "q": "",
     "url": null
    },
    "topval": 1097,
    "followers": 6895
   },
   "S34": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "followers": "ultima cifră: S33"
    },
    "posts": 5,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 7534,
     "q": "",
     "url": null
    },
    "topval": 7534,
    "followers": 6895
   },
   "S35": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 5,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 37500,
     "q": "",
     "url": null
    },
    "topval": 37500,
    "followers": 6974
   },
   "S36": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "followers": "ultima cifră: S35"
    },
    "posts": 6,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 10900,
     "q": "",
     "url": null
    },
    "topval": 10900,
    "followers": 6974
   },
   "S37": {
    "q": {
     "topval": "≥"
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "followers": "ultima cifră: S35"
    },
    "posts": 7,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 903,
     "q": "≥",
     "url": null
    },
    "topval": 903,
    "followers": 6974
   },
   "S38": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 5,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 836,
     "q": "",
     "url": null
    },
    "topval": 836,
    "followers": 7024
   },
   "S39": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 3,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 924,
     "q": "",
     "url": null
    },
    "topval": 924,
    "followers": 7021
   },
   "S40": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 4,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 871,
     "q": "",
     "url": null
    },
    "topval": 871,
    "followers": 7023
   }
  },
  "Eli": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 2,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 546,
     "q": "",
     "url": null
    },
    "topval": 546,
    "followers": 1898
   },
   "S30": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 3,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 866,
     "q": "",
     "url": null
    },
    "topval": 866,
    "followers": 1897
   },
   "S31": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 0,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 1896
   },
   "S32": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 1,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 975,
     "q": "",
     "url": null
    },
    "topval": 975,
    "followers": 1897
   },
   "S33": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 3,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 10500,
     "q": "",
     "url": null
    },
    "topval": 10500,
    "followers": 1900
   },
   "S34": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "followers": "ultima cifră: S33"
    },
    "posts": 2,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1369,
     "q": "",
     "url": null
    },
    "topval": 1369,
    "followers": 1900
   },
   "S35": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 2,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 456,
     "q": "",
     "url": null
    },
    "topval": 456,
    "followers": 1897
   },
   "S36": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "followers": "ultima cifră: S35"
    },
    "posts": 6,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1053,
     "q": "",
     "url": null
    },
    "topval": 1053,
    "followers": 1897
   },
   "S37": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "followers": "ultima cifră: S35"
    },
    "posts": 2,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 445,
     "q": "",
     "url": null
    },
    "topval": 445,
    "followers": 1897
   },
   "S38": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 6,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 14600,
     "q": "",
     "url": null
    },
    "topval": 14600,
    "followers": 1912
   },
   "S39": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 1,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 1212,
     "q": "",
     "url": null
    },
    "topval": 1212,
    "followers": 1912
   },
   "S40": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 3,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 826,
     "q": "",
     "url": null
    },
    "topval": 826,
    "followers": 1913
   }
  },
  "DB": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 0,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 882
   },
   "S30": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 0,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 883
   },
   "S31": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 1,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 159,
     "q": "",
     "url": null
    },
    "topval": 159,
    "followers": 885
   },
   "S32": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 0,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 883
   },
   "S33": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 2,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 217,
     "q": "",
     "url": null
    },
    "topval": 217,
    "followers": 883
   },
   "S34": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "followers": "ultima cifră: S33"
    },
    "posts": 0,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 883
   },
   "S35": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 0,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 884
   },
   "S36": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 0,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 885
   },
   "S37": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "followers": "ultima cifră: S36"
    },
    "posts": 0,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 885
   },
   "S38": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula",
     "followers": "ultima cifră: S36"
    },
    "posts": 0,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 885
   },
   "S39": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 0,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 886
   },
   "S40": {
    "q": {
     "topval": ""
    },
    "note": {
     "views": "raportul dă doar topul",
     "avgviews": "nu se poate calcula"
    },
    "posts": 0,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 886
   }
  }
 }
};
