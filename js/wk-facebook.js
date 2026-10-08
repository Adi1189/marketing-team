// Date reale din rapoartele KPI Tier 1 (S29–S40), pe săptămână.
window.WEEKLY_CONFIG = {
 "channel": "Facebook",
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
   "hint": "câte postări au fost publicate în săptămână",
   "type": "num",
   "additive": true
  },
  {
   "key": "eng_sum",
   "label": "Engagement total",
   "hint": "",
   "type": "num",
   "additive": true,
   "hidden": true
  },
  {
   "key": "eng_n",
   "label": "Postări numărate",
   "hint": "",
   "type": "num",
   "additive": true,
   "hidden": true
  },
  {
   "key": "avgeng",
   "label": "Engagement mediu / postare",
   "hint": "câte interacțiuni (reacții, comentarii, distribuiri) are în medie o postare",
   "type": "num1",
   "additive": true,
   "ratio": [
    "eng_sum",
    "eng_n"
   ]
  },
  {
   "key": "followers",
   "label": "Număr de urmăritori",
   "hint": "câți urmăritori are pagina (rotunjit la mii în rapoarte)",
   "type": "num",
   "additive": true
  },
  {
   "key": "leads",
   "label": "Număr de leaduri",
   "hint": "leaduri primite din campaniile Meta; Facebook + Instagram împreună, nu se pot separa pe canal",
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
    "hint": "câte postări au fost publicate",
    "type": "num",
    "additive": true
   },
   {
    "key": "eng_sum",
    "label": "",
    "hint": "",
    "type": "num",
    "additive": true,
    "hidden": true
   },
   {
    "key": "eng_n",
    "label": "",
    "hint": "",
    "type": "num",
    "additive": true,
    "hidden": true
   },
   {
    "key": "avgeng",
    "label": "Engagement mediu / postare",
    "hint": "interacțiuni pe postare",
    "type": "num1",
    "additive": true,
    "ratio": [
     "eng_sum",
     "eng_n"
    ]
   },
   {
    "key": "followers",
    "label": "Urmăritori",
    "hint": "urmăritorii contului, rotunjiți în rapoarte",
    "type": "num",
    "additive": true
   },
   {
    "key": "topval",
    "label": "Top postare (engagement)",
    "hint": "cea mai bună postare din săptămână",
    "type": "num",
    "additive": true
   }
  ]
 },
 "topLabel": "Engagement",
 "take": [
  "Doar ultimele 3 din cele 12 săptămâni au inventar complet de postări. Până pe 14 septembrie, rapoartele conțin un eșantion din feed (1–4 postări pe pagină), fără total săptămânal. Frecvența, engagementul mediu și rata de engagement le calculez deci doar pentru S38–S40.",
  "Ritmul nostru scade, al lui DENT ESTET crește. Noi: 13 → 10 → 8 postări pe săptămână. DENT ESTET: minim 14 → 16 → 18.",
  "Engagementul mediu a căzut în S40: 34,3 → 42,3 → 13,6 reacții, comentarii și distribuiri pe postare. S39 a fost umflată de două urări de ziua medicilor (222 din 423); fără ele, media S39 e 25,1.",
  "Pe urmăritor stăm bine față de paginile mari. Rata noastră (engagement mediu împărțit la urmăritori): 0,20% și 0,25% în S38–S39, față de 0,04% și 0,09% la DENT ESTET și sub 0,02% la Regina Maria și Life. În S40 diferența față de DENT ESTET dispare (0,08% vs 0,09%). Elidadent și Dental Blue au rate mari doar pentru că pornesc de la pagini mici (4,7K și 6,3K): nu sunt comparabile direct cu noi."
 ],
 "notes": [
  "Rapoartele KPI Tier 1 compară contul nostru cu cei 5 concurenți principali (Tier 1). Săptămânile sunt cele din rapoarte (S29–S40, ISO).",
  "Engagement = reacții + comentarii + distribuiri. Doar S38–S40 au inventar complet de postări; în rest, rapoartele conțin doar un eșantion din feed (postările și engagementul mediu apar cu „–”). La top, în săptămânile fără inventar complet cifra e cea mai bună postare din eșantion (minimă).",
  "Urmăritorii sunt rotunjiți la mii și lipsesc în S36–S39 (păstrez ultima cifră cunoscută).",
  "Leadurile sunt din Puls (Marketing · Social Ads, „Trend săptămânal”): leaduri primite din campaniile Facebook + Instagram la un loc, pe săptămâni ISO, inclusiv telefoanele care au mai sunat. Nu se pot separa pe canal, așa că aceeași cifră apare pe ambele pagini. Puls începe de la S30.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în raport."
 ],
 "data": {
  "DrA": {
   "S29": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "leads": "Puls are cifre începând cu S30"
    },
    "followers": 17000,
    "top": {
     "title": "",
     "value": 11,
     "q": "≥",
     "url": null
    },
    "topval": 11
   },
   "S30": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "leads": "Facebook + Instagram, împreună"
    },
    "followers": 17000,
    "top": {
     "title": "",
     "value": 20,
     "q": "≥",
     "url": null
    },
    "topval": 20,
    "leads": 200
   },
   "S31": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "leads": "Facebook + Instagram, împreună"
    },
    "followers": 17000,
    "top": {
     "title": "",
     "value": 52,
     "q": "≥",
     "url": null
    },
    "topval": 52,
    "leads": 218
   },
   "S32": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "leads": "Facebook + Instagram, împreună"
    },
    "followers": 17000,
    "top": {
     "title": "",
     "value": 24,
     "q": "≥",
     "url": null
    },
    "topval": 24,
    "leads": 262
   },
   "S33": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "leads": "Facebook + Instagram, împreună"
    },
    "followers": 17000,
    "top": {
     "title": "",
     "value": 56,
     "q": "≥",
     "url": null
    },
    "topval": 56,
    "leads": 324
   },
   "S34": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "leads": "Facebook + Instagram, împreună"
    },
    "followers": 17000,
    "top": {
     "title": "Postare nouă oraș, 21 aug (49/11/3); ~13–15 postări în săptămână",
     "value": 63,
     "q": "≥",
     "url": null
    },
    "topval": 63,
    "leads": 333
   },
   "S35": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "leads": "Facebook + Instagram, împreună"
    },
    "followers": 17000,
    "top": {
     "title": "Urare Dr. Irina Udrescu (31/16)",
     "value": 47,
     "q": "≥",
     "url": null
    },
    "topval": 47,
    "leads": 310
   },
   "S36": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "followers": "ultima cifră: S35",
     "leads": "Facebook + Instagram, împreună"
    },
    "followers": 17000,
    "top": {
     "title": "Cifre neextrase",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "leads": 346
   },
   "S37": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "followers": "ultima cifră: S35",
     "leads": "Facebook + Instagram, împreună"
    },
    "followers": 17000,
    "top": {
     "title": "O singură postare vizibilă",
     "value": 9,
     "q": "≥",
     "url": null
    },
    "topval": 9,
    "leads": 312
   },
   "S38": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 13,
    "eng_sum": 446,
    "eng_n": 13,
    "followers": 17000,
    "top": {
     "title": "Album CARE Forum, 20 sept (69/6/5)",
     "value": 80,
     "q": "",
     "url": null
    },
    "topval": 80,
    "leads": 328
   },
   "S39": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 10,
    "eng_sum": 423,
    "eng_n": 10,
    "followers": 17000,
    "top": {
     "title": "Urare Dr. Arina Lupu, 26 sept (72/59/2)",
     "value": 133,
     "q": "",
     "url": null
    },
    "topval": 133,
    "leads": 284
   },
   "S40": {
    "q": {
     "avgeng": "≥",
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "avgeng": "comentarii necapturate",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 8,
    "eng_sum": 109,
    "eng_n": 8,
    "followers": 17000,
    "top": {
     "title": "Video „Hei, Leo!”, 30 sept (36/–/3)",
     "value": 39,
     "q": "",
     "url": null
    },
    "topval": 39,
    "leads": 380
   }
  },
  "DE": {
   "S29": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 45000,
    "top": {
     "title": "cifre neextrase",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S30": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 45000,
    "top": {
     "title": "",
     "value": 2,
     "q": "≥",
     "url": null
    },
    "topval": 2
   },
   "S31": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 45000,
    "top": {
     "title": "",
     "value": 22,
     "q": "≥",
     "url": null
    },
    "topval": 22
   },
   "S32": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 46000,
    "top": {
     "title": "",
     "value": 15,
     "q": "≥",
     "url": null
    },
    "topval": 15
   },
   "S33": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 46000,
    "top": {
     "title": "",
     "value": 45,
     "q": "≥",
     "url": null
    },
    "topval": 45
   },
   "S34": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 46000,
    "top": {
     "title": "Raportat ca 5–10 / postare",
     "value": 10,
     "q": "≥",
     "url": null
    },
    "topval": 10
   },
   "S35": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 46000,
    "top": {
     "title": "cifre neextrase",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S36": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "followers": "ultima cifră: S35"
    },
    "followers": 46000,
    "top": {
     "title": "Doar distribuiri",
     "value": 2,
     "q": "≥",
     "url": null
    },
    "topval": 2
   },
   "S37": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "followers": "ultima cifră: S35"
    },
    "followers": 46000,
    "top": {
     "title": "cifre neextrase",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S38": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 14,
    "eng_sum": 218,
    "eng_n": 14,
    "followers": 46000,
    "top": {
     "title": "„Când putem atașa o restaurare fixă după implant?”, 18 sept",
     "value": 35,
     "q": "",
     "url": null
    },
    "topval": 35
   },
   "S39": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 16,
    "eng_sum": 681,
    "eng_n": 16,
    "followers": 46000,
    "top": {
     "title": "Reel emoțional de pacient „Sunt un om fragil…”, 22 sept (198/13/14)",
     "value": 225,
     "q": "",
     "url": null
    },
    "topval": 225
   },
   "S40": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {},
    "posts": 18,
    "eng_sum": 743,
    "eng_n": 18,
    "followers": 46000,
    "top": {
     "title": "Video „Cum apar pungile parodontale?”, 29 sept (125/1/7)",
     "value": 133,
     "q": "",
     "url": null
    },
    "topval": 133
   }
  },
  "RM": {
   "S29": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 84000,
    "top": {
     "title": "",
     "value": 10,
     "q": "≥",
     "url": null
    },
    "topval": 10
   },
   "S30": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 84000,
    "top": {
     "title": "cifre neextrase",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S31": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 84000,
    "top": {
     "title": "",
     "value": 23,
     "q": "≥",
     "url": null
    },
    "topval": 23
   },
   "S32": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 84000,
    "top": {
     "title": "",
     "value": 23,
     "q": "≥",
     "url": null
    },
    "topval": 23
   },
   "S33": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 84000,
    "top": {
     "title": "Zi de chirurgie, cel mai viral post al pieței",
     "value": 332,
     "q": "≥",
     "url": null
    },
    "topval": 332
   },
   "S34": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 84000,
    "top": {
     "title": "Feed neîncărcat",
     "value": 12,
     "q": "≥",
     "url": null
    },
    "topval": 12
   },
   "S35": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 84000,
    "top": {
     "title": "cifre neextrase",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S36": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "followers": "ultima cifră: S35"
    },
    "followers": 84000,
    "top": {
     "title": "Doar distribuiri",
     "value": 9,
     "q": "≥",
     "url": null
    },
    "topval": 9
   },
   "S37": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "followers": "ultima cifră: S35"
    },
    "followers": 84000,
    "top": {
     "title": "O singură postare vizibilă",
     "value": 2,
     "q": "≥",
     "url": null
    },
    "topval": 2
   },
   "S38": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 7,
    "eng_sum": 63,
    "eng_n": 7,
    "followers": 84000,
    "top": {
     "title": "Video „Teamwork” și echipa de chirurgie (14 la egalitate)",
     "value": 14,
     "q": "",
     "url": null
    },
    "topval": 14
   },
   "S39": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 9,
    "eng_sum": 105,
    "eng_n": 9,
    "followers": 84000,
    "top": {
     "title": "Două postări la egalitate (16)",
     "value": 16,
     "q": "",
     "url": null
    },
    "topval": 16
   },
   "S40": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {},
    "posts": 11,
    "eng_sum": 145,
    "eng_n": 11,
    "followers": 84000,
    "top": {
     "title": "Ziua Mondială a Zâmbetului, 2 oct (40/2/3)",
     "value": 45,
     "q": "",
     "url": null
    },
    "topval": 45
   }
  },
  "Life": {
   "S29": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 81000,
    "top": {
     "title": "",
     "value": 7,
     "q": "≥",
     "url": null
    },
    "topval": 7
   },
   "S30": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 81000,
    "top": {
     "title": "cifre neextrase",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S31": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 81000,
    "top": {
     "title": "",
     "value": 56,
     "q": "≥",
     "url": null
    },
    "topval": 56
   },
   "S32": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 81000,
    "top": {
     "title": "",
     "value": 10,
     "q": "≥",
     "url": null
    },
    "topval": 10
   },
   "S33": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 82000,
    "top": {
     "title": "",
     "value": 51,
     "q": "≥",
     "url": null
    },
    "topval": 51
   },
   "S34": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 82000,
    "top": {
     "title": "",
     "value": 2,
     "q": "≥",
     "url": null
    },
    "topval": 2
   },
   "S35": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 82000,
    "top": {
     "title": "cifre neextrase",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S36": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "followers": "ultima cifră: S35"
    },
    "followers": 82000,
    "top": {
     "title": "Cifre neextrase",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S37": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "followers": "ultima cifră: S35"
    },
    "followers": 82000,
    "top": {
     "title": "cifre neextrase",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S38": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 6,
    "eng_sum": 43,
    "eng_n": 6,
    "followers": 82000,
    "top": {
     "title": "Trei postări la egalitate (9)",
     "value": 9,
     "q": "",
     "url": null
    },
    "topval": 9
   },
   "S39": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 7,
    "eng_sum": 110,
    "eng_n": 7,
    "followers": 82000,
    "top": {
     "title": "Video despre igienizare, 22 sept (58/0/1)",
     "value": 59,
     "q": "",
     "url": null
    },
    "topval": 59
   },
   "S40": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 7,
    "eng_sum": 642,
    "eng_n": 7,
    "followers": 82000,
    "top": {
     "title": "Carusel newsjacking politic, 2 oct (555/7/26)",
     "value": 588,
     "q": "",
     "url": null
    },
    "topval": 588
   }
  },
  "Eli": {
   "S29": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 4600,
    "top": {
     "title": "",
     "value": 27,
     "q": "≥",
     "url": null
    },
    "topval": 27
   },
   "S30": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 4600,
    "top": {
     "title": "cifre neextrase",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S31": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 4600,
    "top": {
     "title": "",
     "value": 11,
     "q": "≥",
     "url": null
    },
    "topval": 11
   },
   "S32": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 4600,
    "top": {
     "title": "",
     "value": 20,
     "q": "≥",
     "url": null
    },
    "topval": 20
   },
   "S33": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 4600,
    "top": {
     "title": "",
     "value": 55,
     "q": "≥",
     "url": null
    },
    "topval": 55
   },
   "S34": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 4600,
    "top": {
     "title": "",
     "value": 11,
     "q": "≥",
     "url": null
    },
    "topval": 11
   },
   "S35": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 4600,
    "top": {
     "title": "cifre neextrase",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S36": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "followers": "ultima cifră: S35"
    },
    "followers": 4600,
    "top": {
     "title": "Doar distribuiri",
     "value": 2,
     "q": "≥",
     "url": null
    },
    "topval": 2
   },
   "S37": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "followers": "ultima cifră: S35"
    },
    "followers": 4600,
    "top": {
     "title": "O singură postare vizibilă",
     "value": 8,
     "q": "≥",
     "url": null
    },
    "topval": 8
   },
   "S38": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 6,
    "eng_sum": 133,
    "eng_n": 6,
    "followers": 4600,
    "top": {
     "title": "Tie-in cu „Insula Iubirii” despre albire, 16 sept (29/0/13)",
     "value": 42,
     "q": "",
     "url": null
    },
    "topval": 42
   },
   "S39": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 6,
    "eng_sum": 180,
    "eng_n": 6,
    "followers": 4600,
    "top": {
     "title": "Urare Dr. Ștefa, 24 sept (31/26/0)",
     "value": 57,
     "q": "",
     "url": null
    },
    "topval": 57
   },
   "S40": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {},
    "posts": 9,
    "eng_sum": 146,
    "eng_n": 9,
    "followers": 4700,
    "top": {
     "title": "„Dinți fixi în 24 de ore?”, 30 sept (21/2/10)",
     "value": 33,
     "q": "",
     "url": null
    },
    "topval": 33
   }
  },
  "DB": {
   "S29": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 6200,
    "top": {
     "title": "",
     "value": 4,
     "q": "≥",
     "url": null
    },
    "topval": 4
   },
   "S30": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 6200,
    "top": {
     "title": "",
     "value": 15,
     "q": "≥",
     "url": null
    },
    "topval": 15
   },
   "S31": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 6200,
    "top": {
     "title": "",
     "value": 28,
     "q": "≥",
     "url": null
    },
    "topval": 28
   },
   "S32": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 6200,
    "top": {
     "title": "",
     "value": 23,
     "q": "≥",
     "url": null
    },
    "topval": 23
   },
   "S33": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 6200,
    "top": {
     "title": "",
     "value": 40,
     "q": "≥",
     "url": null
    },
    "topval": 40
   },
   "S34": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 6200,
    "top": {
     "title": "",
     "value": 13,
     "q": "≥",
     "url": null
    },
    "topval": 13
   },
   "S35": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed"
    },
    "followers": 6300,
    "top": {
     "title": "Doar distribuiri",
     "value": 14,
     "q": "≥",
     "url": null
    },
    "topval": 14
   },
   "S36": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "followers": "ultima cifră: S35"
    },
    "followers": 6300,
    "top": {
     "title": "Doar distribuiri",
     "value": 7,
     "q": "≥",
     "url": null
    },
    "topval": 7
   },
   "S37": {
    "q": {
     "followers": "≈",
     "topval": "≥"
    },
    "note": {
     "posts": "doar eșantion din feed",
     "avgeng": "doar eșantion din feed",
     "followers": "ultima cifră: S35"
    },
    "followers": 6300,
    "top": {
     "title": "",
     "value": 22,
     "q": "≥",
     "url": null
    },
    "topval": 22
   },
   "S38": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 1,
    "eng_sum": 43,
    "eng_n": 1,
    "followers": 6300,
    "top": {
     "title": "„Îți lipsesc 5 sau mai mulți dinți?”, 19 sept (14/0/29)",
     "value": 43,
     "q": "",
     "url": null
    },
    "topval": 43
   },
   "S39": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 1,
    "eng_sum": 54,
    "eng_n": 1,
    "followers": 6300,
    "top": {
     "title": "„Dental Blue Slobozia reunited”, 22 sept (43/7/4)",
     "value": 54,
     "q": "",
     "url": null
    },
    "topval": 54
   },
   "S40": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {},
    "posts": 3,
    "eng_sum": 34,
    "eng_n": 3,
    "followers": 6300,
    "top": {
     "title": "Working Dentist Day Tel Aviv, 29 sept (15/2/3)",
     "value": 20,
     "q": "",
     "url": null
    },
    "topval": 20
   }
  }
 }
};
