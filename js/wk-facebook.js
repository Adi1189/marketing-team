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
  "Doar ultimele 5 din cele 12 săptămâni (S36–S40, adică septembrie) au inventar complet de postări. Până în S35, rapoartele conțin un eșantion din feed (1–4 postări pe pagină), fără total săptămânal, deci frecvența, engagementul mediu și rata de engagement se pot calcula doar pentru S36–S40.",
  "Postări pe săptămână (S36–S40): noi 5 → 10 → 13 → 10 → 8; DENT ESTET 19 → 17 → 18 → 17 → 18. Am urcat până la 13 în S38 și scădem de atunci, în timp ce DENT ESTET se ține între 17 și 19 postări.",
  "Engagementul nostru mediu pe postare (reacții, comentarii, distribuiri), S36–S40: 17,8 → 18,3 → 37,8 → 43,7 → 13,9. Vârful e în S39, unde cea mai bună postare (urarea pentru Dr. Arina Lupu) are 140 din 437; fără ea, media S39 e 33,0. În S40 scade la 13,9.",
  "Pe urmăritor stăm bine față de paginile mari. Rata noastră (engagement mediu împărțit la urmăritori) a fost 0,21% → 0,24% → 0,08% în S38–S40, față de 0,06% → 0,09% → 0,09% la DENT ESTET și 0,01% → 0,03% → 0,03% la Regina Maria. Life Dental Spa are 0,07% → 0,03% → 0,13%, cu vârf în S40 din cauza caruselului politic. Elidadent și Dental Blue au rate mari doar pentru că pornesc de la pagini mici (4,7K și 6,3K): nu sunt comparabile direct cu noi."
 ],
 "notes": [
  "Rapoartele KPI Tier 1 compară contul nostru cu cei 5 concurenți principali (Tier 1). Săptămânile sunt cele din rapoarte (S29–S40, ISO).",
  "Engagement = reacții + comentarii + distribuiri. Doar S36–S40 au inventar complet de postări; în rest, rapoartele conțin doar un eșantion din feed (postările și engagementul mediu apar cu „–”). La top, în săptămânile fără inventar complet cifra e cea mai bună postare din eșantion (minimă).",
  "Urmăritorii: S38–S40 sunt rotunjiți la mii, din pagină. La S36–S37 am valorile exacte, dar sunt cele de la data rulării (9 octombrie), nu de la sfârșitul acelor săptămâni, deci apar cu „≈”. Pentru S29–S35 se păstrează ultima cifră cunoscută.",
  "Leadurile sunt din Puls (Marketing · Social Ads, „Trend săptămânal”): leaduri primite din campaniile Facebook + Instagram la un loc, pe săptămâni ISO, inclusiv telefoanele care au mai sunat. Nu se pot separa pe canal, așa că aceeași cifră apare pe ambele pagini. Puls începe de la S30.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în raport.",
  "S36–S40 au fost recitite cu skill-ul actualizat (9 octombrie): inventar complet, cu reacții, comentarii și distribuiri citite pentru toate conturile. Unele cifre ies mai mari decât în raportul vechi, de exemplu Regina Maria: 145 → 284 în S40 și 105 → 246 în S39, deci aceste săptămâni nu sunt comparabile direct cu S29–S35 la acel cont."
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
     "followers": "valoare de la data rulării (9 oct), nu de la sfârșitul săptămânii",
     "leads": "Facebook + Instagram, împreună"
    },
    "followers": 18076,
    "top": {
     "title": "Lucrează mai inteligent, nu mai mult! Din experiență, pentru practică",
     "value": 24,
     "q": "",
     "url": "https://www.facebook.com/reel/1010310481996433"
    },
    "topval": 24,
    "leads": 346,
    "posts": 5,
    "eng_sum": 89,
    "eng_n": 5
   },
   "S37": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "valoare de la data rulării (9 oct), nu de la sfârșitul săptămânii",
     "leads": "Facebook + Instagram, împreună"
    },
    "followers": 18076,
    "top": {
     "title": "Ce înseamnă să fii acolo unde se conturează viitorul stomatologiei? (Cowellmedi Global)",
     "value": 44,
     "q": "",
     "url": "https://www.facebook.com/Dr.Ardeleanu/posts/pfbid02tGL6Zg5AvufurgpvdNh5T87KMsHw74UQz5KVSLoo3W7juWa14Sad8PvwLpS2DpJDl"
    },
    "topval": 44,
    "leads": 312,
    "posts": 10,
    "eng_sum": 183,
    "eng_n": 10
   },
   "S38": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 13,
    "eng_sum": 491,
    "eng_n": 13,
    "followers": 18000,
    "top": {
     "title": "Reel CARE Forum - O zi care ne-a coplesit",
     "value": 99,
     "q": "",
     "url": "https://www.facebook.com/reel/1977691476253538"
    },
    "topval": 99,
    "leads": 328
   },
   "S39": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 10,
    "eng_sum": 437,
    "eng_n": 10,
    "followers": 18000,
    "top": {
     "title": "La mulți ani, Dr. Arina Lupu!",
     "value": 140,
     "q": "",
     "url": "https://www.facebook.com/Dr.Ardeleanu/posts/pfbid0g5xfVGz9WDfkGET9BLtdB3RYVQaey9eMbyyMEsxrFPh3XzKGrwQ9Q8bhpRyFiL5wl"
    },
    "topval": 140,
    "leads": 284
   },
   "S40": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "leads": "Facebook + Instagram, împreună",
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 8,
    "eng_sum": 111,
    "eng_n": 8,
    "followers": 18000,
    "top": {
     "title": "Hei, Leo! (reel)",
     "value": 39,
     "q": "",
     "url": "https://www.facebook.com/reel/1403360371311746"
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
     "topval": ""
    },
    "note": {
     "followers": "valoare de la data rulării (9 oct), nu de la sfârșitul săptămânii"
    },
    "followers": 46411,
    "top": {
     "title": "Chirurgie avansată. Practică reală. Expertiză internațională (ILAPEO, Brazilia)",
     "value": 209,
     "q": "",
     "url": "https://www.facebook.com/dentestet.ro/posts/pfbid02ci35GU6JaeW3Mm1XBFuFZUNjPr6inSpSDZXkAFQK9onNc3zZmn7mgG2LLQdAWtF4l"
    },
    "topval": 209,
    "posts": 19,
    "eng_sum": 795,
    "eng_n": 19
   },
   "S37": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "valoare de la data rulării (9 oct), nu de la sfârșitul săptămânii"
    },
    "followers": 46411,
    "top": {
     "title": "Un rezultat armonios pornește de la un plan de tratament…",
     "value": 159,
     "q": "",
     "url": "https://www.facebook.com/dentestet.ro/posts/pfbid037g1rx7BPgvViLHbdezDyVBrrLmon939ipJ6nPf3NZE1YanmxUfag4Rt9wu4MXNSnl"
    },
    "topval": 159,
    "posts": 17,
    "eng_sum": 616,
    "eng_n": 17
   },
   "S38": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 18,
    "eng_sum": 528,
    "eng_n": 18,
    "followers": 46000,
    "top": {
     "title": "Nu am os pentru implant: mai pot avea dinți ficși?",
     "value": 139,
     "q": "",
     "url": "https://www.facebook.com/dentestet.ro/posts/pfbid0JoEL4gK7X3e9Z83BaDkxwknh7fDSw2daZZJnr872bjiJjkFgDkvsCP9NMiE6C9pgl"
    },
    "topval": 139
   },
   "S39": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 17,
    "eng_sum": 734,
    "eng_n": 17,
    "followers": 46000,
    "top": {
     "title": "Sunt un om fragil… – Maia Morgenstern (reel)",
     "value": 227,
     "q": "",
     "url": "https://www.facebook.com/reel/1104230865426730"
    },
    "topval": 227
   },
   "S40": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 18,
    "eng_sum": 776,
    "eng_n": 18,
    "followers": 46000,
    "top": {
     "title": "Cum apar pungile parodontale? (reel)",
     "value": 133,
     "q": "",
     "url": "https://www.facebook.com/reel/1457569959855673"
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
     "topval": ""
    },
    "note": {
     "followers": "valoare de la data rulării (9 oct), nu de la sfârșitul săptămânii"
    },
    "followers": 84673,
    "top": {
     "title": "Septembrie vine cu o nouă serie de deplasări ale echipei Regina Maria Dental Clinics",
     "value": 552,
     "q": "",
     "url": "https://www.facebook.com/ReginaMariaDentalClinics/posts/pfbid0edefxpL8ofJFvA4Dcbhxf65sDc8tttArFJwfMfnGTK3wYDrdx3yc5u49KYFEYQeLl"
    },
    "topval": 552,
    "posts": 6,
    "eng_sum": 665,
    "eng_n": 6
   },
   "S37": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "valoare de la data rulării (9 oct), nu de la sfârșitul săptămânii"
    },
    "followers": 84673,
    "top": {
     "title": "Ai primit un plan de tratament, dar încă nu ești sigur că este alegerea potrivită?",
     "value": 652,
     "q": "",
     "url": "https://www.facebook.com/ReginaMariaDentalClinics/posts/pfbid0NxuueRBTqi38RgmSRQwCuuAPy67UMsAyShBUBcurNQC27j7vm7pu24tQWgHUuA8yl"
    },
    "topval": 652,
    "posts": 9,
    "eng_sum": 766,
    "eng_n": 9
   },
   "S38": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 10,
    "eng_sum": 106,
    "eng_n": 10,
    "followers": 84000,
    "top": {
     "title": "În spatele fiecărui zâmbet bine îngrijit stă o echipă",
     "value": 18,
     "q": "",
     "url": "https://www.facebook.com/reel/1825327052168041"
    },
    "topval": 18
   },
   "S39": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 9,
    "eng_sum": 246,
    "eng_n": 9,
    "followers": 84000,
    "top": {
     "title": "Un dinte lipsă nu lasă doar un loc liber (reel)",
     "value": 77,
     "q": "",
     "url": "https://www.facebook.com/reel/2459137167916255"
    },
    "topval": 77
   },
   "S40": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 11,
    "eng_sum": 284,
    "eng_n": 11,
    "followers": 84000,
    "top": {
     "title": "Prima vizită la dentist nu ar trebui să înceapă cu o durere (reel)",
     "value": 67,
     "q": "",
     "url": "https://www.facebook.com/reel/2520203885136694"
    },
    "topval": 67
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
     "followers": "valoare de la data rulării (9 oct), nu de la sfârșitul săptămânii"
    },
    "followers": 83574,
    "top": {
     "title": "La o lună de la cimentarea fațetelor dentare, Gabriela Cristea a revenit la Life Dental Spa",
     "value": 36,
     "q": "",
     "url": "https://www.facebook.com/reel/1090513876861032"
    },
    "topval": 36,
    "posts": 7,
    "eng_sum": 102,
    "eng_n": 7
   },
   "S37": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "valoare de la data rulării (9 oct), nu de la sfârșitul săptămânii"
    },
    "followers": 83574,
    "top": {
     "title": "Te speli corect pe dinți de două ori pe zi și observi depuneri de tartru?",
     "value": 18,
     "q": "",
     "url": "https://www.facebook.com/reel/1377804094554317/"
    },
    "topval": 18,
    "posts": 5,
    "eng_sum": 57,
    "eng_n": 5
   },
   "S38": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 7,
    "eng_sum": 420,
    "eng_n": 7,
    "followers": 83000,
    "top": {
     "title": "Ai nevoie de o soluție fixă pentru înlocuirea mai multor dinți",
     "value": 186,
     "q": "",
     "url": "https://www.facebook.com/reel/1941471803186701"
    },
    "topval": 186
   },
   "S39": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 7,
    "eng_sum": 190,
    "eng_n": 7,
    "followers": 83000,
    "top": {
     "title": "Chiar și după un periaj corect… (reel)",
     "value": 109,
     "q": "",
     "url": "https://www.facebook.com/reel/2669120970210104"
    },
    "topval": 109
   },
   "S40": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 7,
    "eng_sum": 772,
    "eng_n": 7,
    "followers": 83000,
    "top": {
     "title": "Guvernele se schimbă. Scuzele pentru dentist rămân stabile",
     "value": 711,
     "q": "",
     "url": "https://www.facebook.com/LifeDentalSpa/posts/pfbid02QGvRB1wLiUgzyG1bYDiwXtUuXqagV6cJ5c8vvboHazkZ7knWH6Co6Z77WkcY9UKvl"
    },
    "topval": 711
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
     "topval": ""
    },
    "note": {
     "followers": "valoare de la data rulării (9 oct), nu de la sfârșitul săptămânii"
    },
    "followers": 4748,
    "top": {
     "title": "Ce credeți că este? Am primit ceva misterios de la Banca Transilvania",
     "value": 55,
     "q": "",
     "url": "https://www.facebook.com/reel/1774771820213649"
    },
    "topval": 55,
    "posts": 5,
    "eng_sum": 131,
    "eng_n": 5
   },
   "S37": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "valoare de la data rulării (9 oct), nu de la sfârșitul săptămânii"
    },
    "followers": 4748,
    "top": {
     "title": "Diga este o parte importantă din tratamentul stomatologic (reel)",
     "value": 31,
     "q": "",
     "url": "https://www.facebook.com/reel/4384492855150089/"
    },
    "topval": 31,
    "posts": 6,
    "eng_sum": 95,
    "eng_n": 6
   },
   "S38": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 6,
    "eng_sum": 212,
    "eng_n": 6,
    "followers": 4700,
    "top": {
     "title": "Ce înseamnă o adiție de os",
     "value": 100,
     "q": "",
     "url": "https://www.facebook.com/reel/1096653936252782"
    },
    "topval": 100
   },
   "S39": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 6,
    "eng_sum": 202,
    "eng_n": 6,
    "followers": 4700,
    "top": {
     "title": "La mulți ani, Dr. Stefanos Zografos!",
     "value": 58,
     "q": "",
     "url": null
    },
    "topval": 58
   },
   "S40": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 9,
    "eng_sum": 159,
    "eng_n": 9,
    "followers": 4700,
    "top": {
     "title": "Dinți fici în 24 de ore? (reel)",
     "value": 34,
     "q": "",
     "url": "https://www.facebook.com/reel/1377236204230433"
    },
    "topval": 34
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
     "topval": ""
    },
    "note": {
     "followers": "valoare de la data rulării (9 oct), nu de la sfârșitul săptămânii"
    },
    "followers": 6343,
    "top": {
     "title": "Dental Blue Constanța vs. Dental Blue Fetești?",
     "value": 71,
     "q": "",
     "url": null
    },
    "topval": 71,
    "posts": 2,
    "eng_sum": 84,
    "eng_n": 2
   },
   "S37": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "valoare de la data rulării (9 oct), nu de la sfârșitul săptămânii"
    },
    "followers": 6343,
    "top": {
     "title": "Astăzi avem zi de pedodonție la DentalBlue Slobozia",
     "value": 23,
     "q": "",
     "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid06FEeHhFT1ZGBgDhDLKavmwxb5DyGmCYwyk8qZxTTmFdn2yGipsQrxNk3K6ZC1nDpl&id=100057645392894"
    },
    "topval": 23,
    "posts": 2,
    "eng_sum": 43,
    "eng_n": 2
   },
   "S38": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 1,
    "eng_sum": 42,
    "eng_n": 1,
    "followers": 6300,
    "top": {
     "title": "Iți lipsesc 5 sau mai mulți dinți?",
     "value": 42,
     "q": "",
     "url": "https://www.facebook.com/reel/27891349050545140"
    },
    "topval": 42
   },
   "S39": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 1,
    "eng_sum": 57,
    "eng_n": 1,
    "followers": 6300,
    "top": {
     "title": "Dental Blue Slobozia reunited",
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
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 3,
    "eng_sum": 39,
    "eng_n": 3,
    "followers": 6300,
    "top": {
     "title": "Working Dentist Day",
     "value": 20,
     "q": "",
     "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02oeshWaNDBzAfdKHVo4oTpBFjRt2GqFtnPS14vkZ3javLjSAvZ4KViq4ZjoWqoNZBl&id=100057645392894"
    },
    "topval": 20
   }
  }
 }
};
