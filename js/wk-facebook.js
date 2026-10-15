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
  "Toate cele 13 săptămâni (S29–S41) au inventar complet de postări, cu reacții, comentarii și distribuiri citite pentru toate conturile, deci frecvența, engagementul mediu și rata de engagement se pot calcula pentru tot intervalul.",
  "Postări pe săptămână (S29–S41): noi 7 → 6 → 6 → 7 → 6 → 7 → 8 → 5 → 10 → 13 → 10 → 8 → 9; DENT ESTET 10 → 12 → 17 → 16 → 16 → 16 → 14 → 19 → 17 → 18 → 17 → 18 → 15. Media: 7,8 la noi, 15,8 la DENT ESTET, 8,9 la Regina Maria, 6,8 la Life. Cel mai mare ritm al nostru: 13 postări (S38).",
  "Engagementul nostru mediu pe postare (reacții, comentarii, distribuiri), S29–S41: 12,3 → 13,7 → 21,5 → 38,3 → 29,2 → 28,0 → 26,1 → 17,8 → 18,3 → 37,8 → 43,7 → 13,9 → 27,6. Vârful e în S39 (43,7, postarea de top: 140 din 437). În S40 avem 13,9, iar în S41 27,6.",
  "Pe urmăritor, rata noastră (engagement mediu împărțit la urmăritori) a fost 0,24% → 0,08% → 0,15% în S39–S41, față de 0,09% → 0,09% → 0,07% la DENT ESTET și 0,03% → 0,03% → 0,02% la Regina Maria. Elidadent (1,30% în S41) și Dental Blue pornesc de la pagini mici (4,7K și 6,3K), deci nu sunt comparabile direct cu noi."
 ],
 "notes": [
  "Rapoartele KPI Tier 1 compară contul nostru cu cei 5 concurenți principali (Tier 1). Săptămânile sunt cele din rapoarte (S29–S40, ISO).",
  "Engagement = reacții + comentarii + distribuiri. Toate săptămânile S29–S41 au inventar complet de postări, citit în octombrie cu skill-ul actualizat.",
  "Leadurile sunt din Puls (Marketing · Social Ads, „Trend săptămânal”): leaduri primite din campaniile Facebook + Instagram la un loc, pe săptămâni ISO, inclusiv telefoanele care au mai sunat. Nu se pot separa pe canal, așa că aceeași cifră apare pe ambele pagini. Puls începe de la S30.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în raport.",
  "S36–S40 au fost recitite cu skill-ul actualizat: inventar complet, cu reacții, comentarii și distribuiri citite pentru toate conturile. Unele cifre ies mai mari decât în raportul vechi, de exemplu Regina Maria: 145 → 284 în S40 și 105 → 246 în S39, deci aceste săptămâni nu sunt comparabile direct cu S29–S35 la acel cont.",
  "S41 (5–11 octombrie) vine din raportul rulat pe 12 octombrie. Acel raport compară cu un S40 „calculat din feed” (11 postări, 32,7), care nu se potrivește cu citirea completă a S40 de aici (8 postări, 13,9) și pare să includă și postări din S39 (140 și 89). Am păstrat citirea completă a S40; merită verificat dacă S40 are 8 sau 11 postări.",
  "S32–S35 (august) au fost recitite cu inventar complet; raportul dă doar valoarea postării de top, fără titlu și fără link, deci acolo titlul apare „neprecizat”, iar linkul „–”.",
  "Urmăritorii sunt cifrele din rapoartele săptămânale vechi, citite în acele săptămâni (rotunjite la mii la Facebook, exacte la Instagram pentru noi, DENT ESTET, Elidadent și Dental Blue); unde raportul vechi nu avea cifră, am păstrat citirea de la rulare, marcată „≈”. S41 e citirea de la rulare.",
  "S29–S31 (iulie) au fost recitite cu inventar complet, la fel ca august; blocul nu are titluri și linkuri, deci titlul apare „neprecizat”, iar linkul „–”. Blocul include și S27–S28 (iunie), pe care nu le-am încărcat în site. Urmăritorii din iulie rămân cifrele din rapoartele vechi, citite în acele săptămâni."
 ],
 "data": {
  "DrA": {
   "S29": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "leads": "Puls are cifre începând cu S30",
     "followers": "rotunjit la mii"
    },
    "followers": 17000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 17,
     "q": "",
     "url": null
    },
    "topval": 17,
    "posts": 7,
    "eng_sum": 86,
    "eng_n": 7
   },
   "S30": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "leads": "Facebook + Instagram, împreună",
     "followers": "rotunjit la mii"
    },
    "followers": 17000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 23,
     "q": "",
     "url": null
    },
    "topval": 23,
    "leads": 200,
    "posts": 6,
    "eng_sum": 82,
    "eng_n": 6
   },
   "S31": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "leads": "Facebook + Instagram, împreună",
     "followers": "rotunjit la mii"
    },
    "followers": 17000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 46,
     "q": "",
     "url": null
    },
    "topval": 46,
    "leads": 218,
    "posts": 6,
    "eng_sum": 129,
    "eng_n": 6
   },
   "S32": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "leads": "Facebook + Instagram, împreună",
     "followers": "rotunjit la mii"
    },
    "followers": 17000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 119,
     "q": "",
     "url": null
    },
    "topval": 119,
    "leads": 262,
    "posts": 7,
    "eng_sum": 268,
    "eng_n": 7
   },
   "S33": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "leads": "Facebook + Instagram, împreună",
     "followers": "rotunjit la mii"
    },
    "followers": 17000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 58,
     "q": "",
     "url": null
    },
    "topval": 58,
    "leads": 324,
    "posts": 6,
    "eng_sum": 175,
    "eng_n": 6
   },
   "S34": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "leads": "Facebook + Instagram, împreună",
     "followers": "rotunjit la mii"
    },
    "followers": 17000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 87,
     "q": "",
     "url": null
    },
    "topval": 87,
    "leads": 333,
    "posts": 7,
    "eng_sum": 196,
    "eng_n": 7
   },
   "S35": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "leads": "Facebook + Instagram, împreună",
     "followers": "rotunjit la mii"
    },
    "followers": 17000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 49,
     "q": "",
     "url": null
    },
    "topval": 49,
    "leads": 310,
    "posts": 8,
    "eng_sum": 209,
    "eng_n": 8
   },
   "S36": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii",
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
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii",
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
     "followers": "rotunjit la mii"
    },
    "posts": 8,
    "eng_sum": 111,
    "eng_n": 8,
    "followers": 17000,
    "top": {
     "title": "Hei, Leo! (reel)",
     "value": 39,
     "q": "",
     "url": "https://www.facebook.com/reel/1403360371311746"
    },
    "topval": 39,
    "leads": 380
   },
   "S41": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "leads": "Puls avea S41 doar parțial la ultima citire",
     "followers": "rotunjit la mii, din pagină"
    },
    "leads": null,
    "posts": 9,
    "eng_sum": 248,
    "eng_n": 9,
    "followers": 18000,
    "top": {
     "title": "„Nu există scurtături către succes.” (reel)",
     "value": 53,
     "q": "",
     "url": "https://www.facebook.com/reel/4392264901085415/"
    },
    "topval": 53
   }
  },
  "DE": {
   "S29": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 45000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 119,
     "q": "",
     "url": null
    },
    "topval": 119,
    "posts": 10,
    "eng_sum": 299,
    "eng_n": 10
   },
   "S30": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 45000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 31,
     "q": "",
     "url": null
    },
    "topval": 31,
    "posts": 12,
    "eng_sum": 246,
    "eng_n": 12
   },
   "S31": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 45000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 312,
     "q": "",
     "url": null
    },
    "topval": 312,
    "posts": 17,
    "eng_sum": 628,
    "eng_n": 17
   },
   "S32": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 46000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 94,
     "q": "",
     "url": null
    },
    "topval": 94,
    "posts": 16,
    "eng_sum": 414,
    "eng_n": 16
   },
   "S33": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 46000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 347,
     "q": "",
     "url": null
    },
    "topval": 347,
    "posts": 16,
    "eng_sum": 701,
    "eng_n": 16
   },
   "S34": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 46000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 243,
     "q": "",
     "url": null
    },
    "topval": 243,
    "posts": 16,
    "eng_sum": 559,
    "eng_n": 16
   },
   "S35": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 46000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 40,
     "q": "",
     "url": null
    },
    "topval": 40,
    "posts": 14,
    "eng_sum": 255,
    "eng_n": 14
   },
   "S36": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
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
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
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
     "followers": "rotunjit la mii"
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
   },
   "S41": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 15,
    "eng_sum": 465,
    "eng_n": 15,
    "followers": 46000,
    "top": {
     "title": "Ai pierdut un singur dinte? Implant unidentar… (reel)",
     "value": 114,
     "q": "",
     "url": "https://www.facebook.com/reel/4586622198283571/"
    },
    "topval": 114
   }
  },
  "RM": {
   "S29": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 84000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 493,
     "q": "",
     "url": null
    },
    "topval": 493,
    "posts": 10,
    "eng_sum": 1008,
    "eng_n": 10
   },
   "S30": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 84000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 237,
     "q": "",
     "url": null
    },
    "topval": 237,
    "posts": 8,
    "eng_sum": 672,
    "eng_n": 8
   },
   "S31": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 84000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 48,
     "q": "",
     "url": null
    },
    "topval": 48,
    "posts": 11,
    "eng_sum": 220,
    "eng_n": 11
   },
   "S32": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 84000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 330,
     "q": "",
     "url": null
    },
    "topval": 330,
    "posts": 6,
    "eng_sum": 563,
    "eng_n": 6
   },
   "S33": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 84000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 345,
     "q": "",
     "url": null
    },
    "topval": 345,
    "posts": 8,
    "eng_sum": 578,
    "eng_n": 8
   },
   "S34": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 84000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 172,
     "q": "",
     "url": null
    },
    "topval": 172,
    "posts": 9,
    "eng_sum": 398,
    "eng_n": 9
   },
   "S35": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 84000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 164,
     "q": "",
     "url": null
    },
    "topval": 164,
    "posts": 9,
    "eng_sum": 544,
    "eng_n": 9
   },
   "S36": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
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
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
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
     "followers": "rotunjit la mii"
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
   },
   "S41": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 10,
    "eng_sum": 134,
    "eng_n": 10,
    "followers": 84000,
    "top": {
     "title": "„Nu există rețete universale…” — Hot Takes, pentru copii (reel)",
     "value": 27,
     "q": "",
     "url": "https://www.facebook.com/reel/2621948774911864/"
    },
    "topval": 27
   }
  },
  "Life": {
   "S29": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 81000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 32,
     "q": "",
     "url": null
    },
    "topval": 32,
    "posts": 7,
    "eng_sum": 150,
    "eng_n": 7
   },
   "S30": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 81000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 47,
     "q": "",
     "url": null
    },
    "topval": 47,
    "posts": 6,
    "eng_sum": 194,
    "eng_n": 6
   },
   "S31": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 81000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 60,
     "q": "",
     "url": null
    },
    "topval": 60,
    "posts": 7,
    "eng_sum": 198,
    "eng_n": 7
   },
   "S32": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 81000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 52,
     "q": "",
     "url": null
    },
    "topval": 52,
    "posts": 7,
    "eng_sum": 206,
    "eng_n": 7
   },
   "S33": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 82000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 44,
     "q": "",
     "url": null
    },
    "topval": 44,
    "posts": 7,
    "eng_sum": 183,
    "eng_n": 7
   },
   "S34": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 82000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 42,
     "q": "",
     "url": null
    },
    "topval": 42,
    "posts": 7,
    "eng_sum": 175,
    "eng_n": 7
   },
   "S35": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 82000,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 34,
     "q": "",
     "url": null
    },
    "topval": 34,
    "posts": 7,
    "eng_sum": 127,
    "eng_n": 7
   },
   "S36": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
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
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
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
   },
   "S41": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 7,
    "eng_sum": 66,
    "eng_n": 7,
    "followers": 83000,
    "top": {
     "title": "Ce înseamnă să faci stomatologie altfel? (reel) — egalitate 13 cu o postare din 5 oct (9/0/4)",
     "value": 13,
     "q": "",
     "url": "https://www.facebook.com/reel/1113287494741624/"
    },
    "topval": 13
   }
  },
  "Eli": {
   "S29": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 4600,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 48,
     "q": "",
     "url": null
    },
    "topval": 48,
    "posts": 4,
    "eng_sum": 139,
    "eng_n": 4
   },
   "S30": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 4600,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 33,
     "q": "",
     "url": null
    },
    "topval": 33,
    "posts": 6,
    "eng_sum": 125,
    "eng_n": 6
   },
   "S31": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 4600,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 14,
     "q": "",
     "url": null
    },
    "topval": 14,
    "posts": 4,
    "eng_sum": 41,
    "eng_n": 4
   },
   "S32": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 4600,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 28,
     "q": "",
     "url": null
    },
    "topval": 28,
    "posts": 5,
    "eng_sum": 86,
    "eng_n": 5
   },
   "S33": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 4600,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 47,
     "q": "",
     "url": null
    },
    "topval": 47,
    "posts": 5,
    "eng_sum": 99,
    "eng_n": 5
   },
   "S34": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 4600,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 96,
     "q": "",
     "url": null
    },
    "topval": 96,
    "posts": 4,
    "eng_sum": 177,
    "eng_n": 4
   },
   "S35": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 4600,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 37,
     "q": "",
     "url": null
    },
    "topval": 37,
    "posts": 5,
    "eng_sum": 117,
    "eng_n": 5
   },
   "S36": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
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
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
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
     "followers": "rotunjit la mii"
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
   },
   "S41": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 8,
    "eng_sum": 487,
    "eng_n": 8,
    "followers": 4700,
    "top": {
     "title": "Din Târgoviște, direct la Budapesta — stand expo (postare în colaborare cu Next Story)",
     "value": 162,
     "q": "",
     "url": "https://www.facebook.com/nextstory.romania/posts/pfbid02uaZUwK5N8M4sAnw4SxJg82Kp4zHT81Ar5RspCRV1iVEmjLCDRNHo3KLQTwBFTVgFl"
    },
    "topval": 162
   }
  },
  "DB": {
   "S29": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 6200,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 15,
     "q": "",
     "url": null
    },
    "topval": 15,
    "posts": 3,
    "eng_sum": 29,
    "eng_n": 3
   },
   "S30": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 6200,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 24,
     "q": "",
     "url": null
    },
    "topval": 24,
    "posts": 8,
    "eng_sum": 93,
    "eng_n": 8
   },
   "S31": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 6200,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 23,
     "q": "",
     "url": null
    },
    "topval": 23,
    "posts": 6,
    "eng_sum": 66,
    "eng_n": 6
   },
   "S32": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 6200,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 40,
     "q": "",
     "url": null
    },
    "topval": 40,
    "posts": 7,
    "eng_sum": 164,
    "eng_n": 7
   },
   "S33": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 6200,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 33,
     "q": "",
     "url": null
    },
    "topval": 33,
    "posts": 8,
    "eng_sum": 204,
    "eng_n": 8
   },
   "S34": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 6200,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 35,
     "q": "",
     "url": null
    },
    "topval": 35,
    "posts": 4,
    "eng_sum": 109,
    "eng_n": 4
   },
   "S35": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii"
    },
    "followers": 6300,
    "top": {
     "title": "titlu neprecizat în raport",
     "value": 27,
     "q": "",
     "url": null
    },
    "topval": 27,
    "posts": 3,
    "eng_sum": 57,
    "eng_n": 3
   },
   "S36": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
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
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
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
     "followers": "rotunjit la mii"
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
   },
   "S41": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit la mii, din pagină"
    },
    "posts": 5,
    "eng_sum": 109,
    "eng_n": 5,
    "followers": 6300,
    "top": {
     "title": "La mulți ani, as. Miha! (foto, echipă Slobozia)",
     "value": 37,
     "q": "",
     "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0Jh1QRJVToQTWVefQe3dtJwHMzRGhWKWMLin7dhnekDVrPJbQTvLSwBt3iSfW3vEjl&id=100057645392894"
    },
    "topval": 37
   }
  }
 }
};
