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
  "Ritmul nostru e peste al Regina Maria, apropiat de al Life și sub al DENT ESTET. Media pe săptămânile cu număr exact: 5,3 videouri la noi, 7,9 la DENT ESTET, 5,1 la Life și 3,9 la Regina Maria. S39 e cea mai bună săptămână a noastră (11 Shorts), urmată de S40 și S37, cu câte 8. În S41 am avut 7 Shorts, față de 14 la DENT ESTET.",
  "Performanța noastră e foarte inegală. Vizionările per video sunt între 140 și 694 în 10 săptămâni, dar sub 60 în S32 (31), S35 (48), S36 (18). Vizionările sunt citite la data rulării, deci săptămânile recente au avut mai puțin timp să acumuleze.",
  "Pe vizionări per video suntem peste DENT ESTET în 7 din 13 săptămâni, peste Life în 7 din 13, dar sub Regina Maria în 8 din 12. DENT ESTET publică mult (2–14 videouri pe săptămână în săptămânile cu număr exact), cu 46–701 vizionări pe video (Fără S31, unde totalul lor e dominat de un singur video viral). Cele mai mari vârfuri: DENT ESTET 407.134 (S31); Regina Maria 17.390 (S32); DENT ESTET 7.901 (S41).",
  "S41: 7 Shorts, 1.803 vizionări (S40: 8 Shorts, 3.973), cel mai bun video 1.387. Abonații noștri: 934, față de 1.350 la DENT ESTET și 9.330 la Regina Maria.",
  "Dentalist nu e în comparație, dar domină YouTube. Canalul personal al Dr. Alexandra Mircea are 345K abonați și a avut un Short cu 171.029 de vizionări (S31), o săptămână cu 133.472 (S37) și un video cu 341.000 (S39)."
 ],
 "notes": [
  "Rapoartele KPI Tier 1 compară contul nostru cu cei 5 concurenți principali (Tier 1). Săptămânile sunt cele din rapoarte (S29–S40, ISO).",
  "Vizualizările sunt cele din ziua raportului: un video recent are mai puține vizualizări decât unul vechi. În S30 raportul nu are date pe Shorts pentru DENT ESTET și Regina Maria.",
  "Dental Blue nu are canal YouTube; Elidadent are un canal abandonat (0 videoclipuri). Community posts nu sunt numărate.",
  "Leadurile din Puls sunt doar pentru Facebook + Instagram; pentru acest canal nu avem o sursă de leaduri.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în raport.",
  "S29–S41 au fost recitite cu skill-ul actualizat sau din blocuri citite pe 12–15 octombrie, deci vizualizările lor sunt comparabile între ele; au avut însă timp diferit să acumuleze (săptămânile recente mai puțin).",
  "S41 (5–11 octombrie) a fost citită pe 12 octombrie, fără cheia API (din paginile publice YouTube); abonații Elidadent nu au putut fi citiți. Vizualizările din S41 au avut mai puțin timp să acumuleze decât cele din S36–S40.",
  "S32–S35 (august): linkurile din bloc sunt videoclipuri obișnuite (nu Shorts) și nu au duratele. La Dr. Ardeleanu, S32 și S35 au vizionări foarte mici (62 și 194) la 2 și 4 videoclipuri.",
  "Abonații sunt cifrele din rapoartele săptămânale vechi, citite în acele săptămâni (rotunjite la mii la Facebook, exacte la Instagram pentru noi, DENT ESTET, Elidadent și Dental Blue); unde raportul vechi nu avea cifră, am păstrat citirea de la rulare, marcată „≈”. S41 e citirea de la rulare.",
  "S29–S31 (iulie) vin dintr-un bloc citit pe 15 octombrie. În S31, DENT ESTET are 474.613 de vizualizări, din care 407.134 la un singur video viral („Începe tratamentul ortodontic cu ALIGN SMILE…”, publicat pe 27 iulie): cifra nu e comparabilă cu săptămânile obișnuite. Blocul include și S27–S28 (iunie), pe care nu le-am încărcat în site. Abonații din iulie rămân cifrele din rapoartele vechi."
 ],
 "data": {
  "DrA": {
   "S29": {
    "q": {
     "subs": "",
     "topval": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 2,
    "views": 1388,
    "top": {
     "title": "Pacientul care a vrut să negocieze un review…",
     "value": 1243,
     "q": "",
     "url": "https://www.youtube.com/watch?v=u2vfkQdsrqI"
    },
    "topval": 1243,
    "subs": 918
   },
   "S30": {
    "q": {
     "subs": "",
     "topval": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 4,
    "views": 2051,
    "top": {
     "title": "Fatetarii directe din compozit in cabinet?",
     "value": 1747,
     "q": "",
     "url": "https://www.youtube.com/watch?v=csWwdWMIlqA"
    },
    "topval": 1747,
    "subs": 921
   },
   "S31": {
    "q": {
     "subs": "",
     "topval": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 7,
    "views": 4559,
    "top": {
     "title": "În spatele fiecărui before & after se află mu…",
     "value": 1548,
     "q": "",
     "url": "https://www.youtube.com/watch?v=1qJEKrR6WqU"
    },
    "topval": 1548,
    "subs": 923
   },
   "S32": {
    "q": {
     "subs": "",
     "topval": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 2,
    "views": 62,
    "top": {
     "title": "Dr. Ardeleanu Slobozia - 7 cabinete moderne…",
     "value": 37,
     "q": "",
     "url": "https://www.youtube.com/watch?v=owCmTzQsfyo"
    },
    "topval": 37,
    "subs": 921
   },
   "S33": {
    "q": {
     "subs": "",
     "topval": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 4,
    "views": 2121,
    "top": {
     "title": "😂 Există întrebări care vin exact în momentul nepotrivit.",
     "value": 1292,
     "q": "",
     "url": "https://www.youtube.com/watch?v=y8W7rYfrEoE"
    },
    "topval": 1292,
    "subs": 922
   },
   "S34": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "subs": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 6,
    "views": 1805,
    "top": {
     "title": "Ți-e frică de dentist? Hai să schimbăm povestea!",
     "value": 499,
     "q": "",
     "url": "https://www.youtube.com/watch?v=cEBogzKKAHE"
    },
    "topval": 499,
    "subs": 934
   },
   "S35": {
    "q": {
     "subs": "",
     "topval": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 4,
    "views": 194,
    "top": {
     "title": "„Nu prea zâmbeam în ultima vreme. Acum, excelent!”",
     "value": 90,
     "q": "",
     "url": "https://www.youtube.com/watch?v=FTEi9mYX3kU"
    },
    "topval": 90,
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
     "subs": "",
     "topval": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
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
    "subs": 931
   },
   "S40": {
    "q": {
     "subs": "",
     "topval": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
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
    "subs": 932
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
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API"
    },
    "posts": 2,
    "views": 92,
    "top": {
     "title": "Când este necesară o coroană dentară?",
     "value": 79,
     "q": "",
     "url": "https://www.youtube.com/watch?v=hFGxWYZbz14"
    },
    "topval": 79,
    "subs": 1330
   },
   "S30": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "ultima cifră: S29"
    },
    "posts": 13,
    "top": {
     "title": "Este adevărat că în timpul sarcinii bebelușul…",
     "value": 679,
     "q": "",
     "url": "https://www.youtube.com/watch?v=IMVsE2pVigA"
    },
    "topval": 679,
    "subs": 1330,
    "views": 2055
   },
   "S31": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API",
     "views": "dominat de un singur video viral (407.134, ~86% din total)"
    },
    "posts": 7,
    "views": 474613,
    "top": {
     "title": "Începe tratamnetul ortodontic cu - ALIGN SMIL…",
     "value": 407134,
     "q": "",
     "url": "https://www.youtube.com/watch?v=XUvOZmKAuJw"
    },
    "topval": 407134,
    "subs": 1330
   },
   "S32": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API"
    },
    "posts": 2,
    "views": 122,
    "top": {
     "title": "Știai că tratamentul cariilor poate fi realizat și cu laserul dentar…",
     "value": 89,
     "q": "",
     "url": "https://www.youtube.com/watch?v=8H7mMG2TyeQ"
    },
    "topval": 89,
    "subs": 1330
   },
   "S33": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API"
    },
    "posts": 8,
    "views": 872,
    "top": {
     "title": "Ce este implantul cu încărcare imediată?",
     "value": 237,
     "q": "",
     "url": "https://www.youtube.com/watch?v=mIaLVxXSHoo"
    },
    "topval": 237,
    "subs": 1330
   },
   "S34": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 9,
    "views": 2793,
    "top": {
     "title": "Sângerarea gingiilor la detartraj…",
     "value": 973,
     "q": "",
     "url": "https://www.youtube.com/watch?v=78ydhsVMQEw"
    },
    "topval": 973,
    "subs": 1350
   },
   "S35": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API"
    },
    "posts": 2,
    "views": 392,
    "top": {
     "title": "Ai făcut un tratament de canal? Când este…",
     "value": 337,
     "q": "",
     "url": "https://www.youtube.com/watch?v=B767aks-z54"
    },
    "topval": 337,
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
     "subs": "rotunjit de API"
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
    "subs": 1340
   },
   "S40": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API"
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
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API"
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
    "subs": 9320
   },
   "S30": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "ultima cifră: S29"
    },
    "posts": 6,
    "top": {
     "title": "Un copil uită repede cum arăta un instrument…",
     "value": 1023,
     "q": "",
     "url": "https://www.youtube.com/watch?v=hg3JZCcTbhE"
    },
    "topval": 1023,
    "subs": 9320,
    "views": 1967
   },
   "S31": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API"
    },
    "posts": 3,
    "views": 1171,
    "top": {
     "title": "Îți pui copilul în pericol dacă îl pupi pe gu…",
     "value": 527,
     "q": "",
     "url": "https://www.youtube.com/watch?v=p89hy4BWaFc"
    },
    "topval": 527,
    "subs": 9320
   },
   "S32": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API"
    },
    "posts": 3,
    "views": 31550,
    "top": {
     "title": "Echipa Națională de Rugby a României…",
     "value": 17390,
     "q": "",
     "url": "https://www.youtube.com/watch?v=X5YzwzWY8Ww"
    },
    "topval": 17390,
    "subs": 9320
   },
   "S33": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API"
    },
    "posts": 6,
    "views": 1846,
    "top": {
     "title": "Kids’ Dentist starter pack",
     "value": 913,
     "q": "",
     "url": "https://www.youtube.com/watch?v=1_cuOKlFSUE"
    },
    "topval": 913,
    "subs": 9320
   },
   "S34": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 4,
    "views": 3915,
    "top": {
     "title": "Sângerarea gingiilor nu trebuie ignorată",
     "value": 1388,
     "q": "",
     "url": "https://www.youtube.com/watch?v=2em9NIgnktU"
    },
    "topval": 1388,
    "subs": 9330
   },
   "S35": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API"
    },
    "posts": 5,
    "views": 2440,
    "top": {
     "title": "Stomatologia pediatrică",
     "value": 1394,
     "q": "",
     "url": "https://www.youtube.com/watch?v=LH63x7yM-3A"
    },
    "topval": 1394,
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
     "subs": "rotunjit de API"
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
     "subs": "rotunjit de API"
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
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API"
    },
    "posts": 7,
    "views": 2581,
    "top": {
     "title": "„Nu vreau dinți falși.” Este una dintre cele…",
     "value": 881,
     "q": "",
     "url": "https://www.youtube.com/watch?v=9dST1ap5fs0"
    },
    "topval": 881,
    "subs": 1990
   },
   "S30": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "ultima cifră: S29"
    },
    "posts": 7,
    "views": 3505,
    "top": {
     "title": "Respirația urât mirositoare revine imediat…",
     "value": 1507,
     "q": "",
     "url": "https://www.youtube.com/watch?v=hY7nn2kdgQs"
    },
    "topval": 1507,
    "subs": 1990
   },
   "S31": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API"
    },
    "posts": 5,
    "views": 969,
    "top": {
     "title": "Îți dorești un aparat dentar invizibil, da…",
     "value": 349,
     "q": "",
     "url": "https://www.youtube.com/watch?v=LdYCDjnJcRc"
    },
    "topval": 349,
    "subs": 1990
   },
   "S32": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API"
    },
    "posts": 7,
    "views": 1689,
    "top": {
     "title": "Întâlnire cu Gabriela Cristea și Tavi Clonda…",
     "value": 430,
     "q": "",
     "url": "https://www.youtube.com/watch?v=R_Et8XL1OEE"
    },
    "topval": 430,
    "subs": 2000
   },
   "S33": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API"
    },
    "posts": 5,
    "views": 2339,
    "top": {
     "title": "Ți-e teamă de dentist și amâni tratamentul…",
     "value": 1869,
     "q": "",
     "url": "https://www.youtube.com/watch?v=2DpTQtd2_Hs"
    },
    "topval": 1869,
    "subs": 2000
   },
   "S34": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API · valoare de la data rulării"
    },
    "posts": 5,
    "views": 2029,
    "top": {
     "title": "De peste 5 ani, Gabriela Cristea alege…",
     "value": 1273,
     "q": "",
     "url": "https://www.youtube.com/watch?v=4YMvR5DtXsI"
    },
    "topval": 1273,
    "subs": 2000
   },
   "S35": {
    "q": {
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API"
    },
    "posts": 5,
    "views": 5025,
    "top": {
     "title": "Gabriela Cristea și Tavi Clonda, împreună…",
     "value": 1979,
     "q": "",
     "url": "https://www.youtube.com/watch?v=qTxG6MCPNPM"
    },
    "topval": 1979,
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
     "subs": "rotunjit de API"
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
     "subs": "rotunjit de API"
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
     "subs": "≈",
     "topval": ""
    },
    "note": {
     "subs": "rotunjit de API"
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
   "S30": {
    "q": {
     "subs": "≈",
     "topval": ""
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
     "subs": "≈",
     "topval": ""
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
   "S33": {
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
   "S34": {
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
   "S35": {
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
     "subs": "rotunjit de API"
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
