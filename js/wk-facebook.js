// Date reale din rapoartele KPI Tier 1 (S27–S41), pe săptămână.
window.WEEKLY_CONFIG = {
 "channel": "Facebook",
 "weeks": [
  {
   "id": "S27",
   "range": "29 iun–5 iul",
   "month": "Iulie"
  },
  {
   "id": "S28",
   "range": "6–12 iul",
   "month": "Iulie"
  },
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
  "Toate cele 15 săptămâni (S27–S41) au inventar complet de postări, cu reacții, comentarii și distribuiri citite pentru toate conturile, deci frecvența, engagementul mediu și rata de engagement se pot calcula pentru tot intervalul.",
  "Postări pe săptămână (S27–S41): noi 8 → 8 → 7 → 6 → 6 → 7 → 6 → 7 → 8 → 5 → 10 → 13 → 10 → 8 → 9; DENT ESTET 14 → 10 → 10 → 12 → 17 → 16 → 16 → 16 → 14 → 19 → 17 → 18 → 17 → 18 → 15. Media: 7,9 la noi, 15,3 la DENT ESTET, 9,1 la Regina Maria, 6,7 la Life. Cel mai mare ritm al nostru: 13 postări (S38).",
  "Engagementul nostru mediu pe postare (reacții, comentarii, distribuiri), S27–S41: 24,4 → 13,0 → 16,4 → 17,3 → 25,0 → 38,4 → 29,2 → 28,1 → 26,1 → 17,8 → 18,3 → 37,8 → 43,7 → 13,9 → 27,6. Vârful e în S39 (43,7, postarea de top: 140 din 437). În S40 avem 13,9, iar în S41 27,6.",
  "Pe urmăritor, rata noastră (engagement mediu împărțit la urmăritori) a fost 0,24% → 0,08% → 0,15% în S39–S41, față de 0,09% → 0,09% → 0,07% la DENT ESTET și 0,03% → 0,03% → 0,02% la Regina Maria. Elidadent (1,30% în S41) și Dental Blue pornesc de la pagini mici (4,7K și 6,3K), deci nu sunt comparabile direct cu noi."
 ],
 "notes": [
  "Rapoartele KPI Tier 1 compară contul nostru cu cei 5 concurenți principali (Tier 1). Săptămânile sunt cele din rapoarte (S27–S40, ISO).",
  "Engagement = reacții + comentarii + distribuiri. Toate săptămânile S27–S41 au inventar complet de postări, citit în octombrie cu skill-ul actualizat.",
  "Leadurile sunt din Puls (Marketing · Social Ads, „Trend săptămânal”): leaduri primite din campaniile Facebook + Instagram la un loc, pe săptămâni ISO, inclusiv telefoanele care au mai sunat. Nu se pot separa pe canal, așa că aceeași cifră apare pe ambele pagini. Puls începe de la S30.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în raport.",
  "S36–S40 au fost recitite cu skill-ul actualizat: inventar complet, cu reacții, comentarii și distribuiri citite pentru toate conturile. Unele cifre ies mai mari decât în raportul vechi, de exemplu Regina Maria: 145 → 284 în S40 și 105 → 246 în S39, deci aceste săptămâni nu sunt comparabile direct cu S29–S35 la acel cont.",
  "S41 (5–11 octombrie) vine din raportul rulat pe 12 octombrie. Acel raport compară cu un S40 „calculat din feed” (11 postări, 32,7), care nu se potrivește cu citirea completă a S40 de aici (8 postări, 13,9) și pare să includă și postări din S39 (140 și 89). Am păstrat citirea completă a S40; merită verificat dacă S40 are 8 sau 11 postări.",
  "Urmăritorii sunt cifrele din rapoartele săptămânale vechi, citite în acele săptămâni (rotunjite la mii la Facebook, exacte la Instagram pentru noi, DENT ESTET, Elidadent și Dental Blue); unde raportul vechi nu avea cifră, am păstrat citirea de la rulare, marcată „≈”. S41 e citirea de la rulare.",
  "Lunile se formează din săptămâni ISO întregi: iulie = S27–S31, august = S32–S35, septembrie = S36–S40, octombrie = S41–S44. S27 (29 iunie–5 iulie) intră în iulie, pentru că 5 din cele 7 zile ale ei sunt în iulie.",
  "Iulie și august (S27–S35) au fost recitite cu titluri și linkuri la postările de top, pe 15 octombrie. Cifrele sunt mai mari decât în citirea veche (de exemplu Dental Blue S27: 1.017 → 1.227, Elidadent S31: 41 → 117), pentru că noua citire e mai completă sau mai târzie. Urmăritorii rămân cifrele din rapoartele vechi, citite în acele săptămâni."
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
     "title": "Te întorci acasă vara aceasta?",
     "value": 22,
     "q": "",
     "url": "https://www.facebook.com/Dr.Ardeleanu/posts/pfbid02iUSYtvD1xnaErwvcSeNznf2bkvJARhcHW9CfQcE4a4HsV8VC3aTGfN57b6JvY3a7l"
    },
    "topval": 22,
    "posts": 7,
    "eng_sum": 115,
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
     "title": "Doi medici pot avea aceeași pregătire, aceeași experiență și…",
     "value": 26,
     "q": "",
     "url": "https://www.facebook.com/reel/4243797905930293"
    },
    "topval": 26,
    "leads": 200,
    "posts": 6,
    "eng_sum": 104,
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
     "title": "Investim constant în pregătirea echipei noastre (masterclass Zucchelli)",
     "value": 51,
     "q": "",
     "url": "https://www.facebook.com/Dr.Ardeleanu/posts/pfbid02cNVRnqUMH1HN8NqsmJrkgwZz3kFwsy5iza6pLCGcK4yzAbWWuShKLPKNFNM91vnnl"
    },
    "topval": 51,
    "leads": 218,
    "posts": 6,
    "eng_sum": 150,
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
     "title": "Slobozia, suntem gata! Clinica noastră es…",
     "value": 120,
     "q": "",
     "url": "https://www.facebook.com/reel/2116789552205727"
    },
    "topval": 120,
    "leads": 262,
    "posts": 7,
    "eng_sum": 269,
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
     "title": "Poți fi mamă, antreprenor și femeia care își ur…",
     "value": 58,
     "q": "",
     "url": "https://www.facebook.com/reel/2047934745851867"
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
     "title": "Un nou oraș. O nouă comunitate. Aceleași standarde pe care le construim de aproape 10 ani",
     "value": 88,
     "q": "",
     "url": "https://www.facebook.com/reel/1413661114192887"
    },
    "topval": 88,
    "leads": 333,
    "posts": 7,
    "eng_sum": 197,
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
     "title": "La mulți ani, doamna Dr. Irina Udrescu!",
     "value": 49,
     "q": "",
     "url": "https://www.facebook.com/Dr.Ardeleanu/posts/pfbid0Qwb156mdM2dEoLVuuz8MSt8ijpy1eCGqqFwF47Dub8ZS7ahhPTdcirxdLJ4CGdFkl"
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
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "followers": 17000,
    "top": {
     "title": "În ultimii ani, pacienții s-au schimbat.",
     "value": 43,
     "q": "",
     "url": "https://www.facebook.com/reel/27697530209880658"
    },
    "topval": 43,
    "posts": 8,
    "eng_sum": 195,
    "eng_n": 8
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "followers": 17000,
    "top": {
     "title": "O transformare care vorbește de la sine.",
     "value": 22,
     "q": "",
     "url": "https://www.facebook.com/Dr.Ardeleanu/posts/pfbid0u6H5zz4JUKxQL7sWfbnPvbJFgZUkXUoc3uNNNVMJZQAvxqveY4s9uxR8SvbrYiZ4l"
    },
    "topval": 22,
    "posts": 8,
    "eng_sum": 104,
    "eng_n": 8
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
     "title": "Uneori, un dinte este prea afectat pentru a mai putea fi restaurat…",
     "value": 139,
     "q": "",
     "url": "https://www.facebook.com/reel/1381808847199906"
    },
    "topval": 139,
    "posts": 10,
    "eng_sum": 330,
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
     "title": "Proteză mobilă sau dinți ficși pe implanturi?",
     "value": 50,
     "q": "",
     "url": "https://www.facebook.com/reel/1727896971787187"
    },
    "topval": 50,
    "posts": 12,
    "eng_sum": 282,
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
     "title": "The Amazing Smile Collection | Before & After P…",
     "value": 352,
     "q": "",
     "url": "https://www.facebook.com/dentestet.ro/posts/pfbid02bbiSGyfrVBkYUwVUT9U6nbdGGgYXDm7kP6br2DJNvAitnPesNoUcUBNtFnLUUx99l"
    },
    "topval": 352,
    "posts": 17,
    "eng_sum": 703,
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
     "title": "Sângerarea la periaj reprezintă primul semnal că tartrul și bacteriile au început deja…",
     "value": 97,
     "q": "",
     "url": "https://www.facebook.com/reel/1385290723532845"
    },
    "topval": 97,
    "posts": 16,
    "eng_sum": 419,
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
     "title": "Gingiile inflamate nu sunt doar o problemă a dinților.",
     "value": 358,
     "q": "",
     "url": "https://www.facebook.com/reel/931947872550133"
    },
    "topval": 358,
    "posts": 16,
    "eng_sum": 764,
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
     "title": "Schimbările care se văd pot începe cu ceva ... aproape invizibil.",
     "value": 245,
     "q": "",
     "url": "https://www.facebook.com/dentestet.ro/posts/pfbid0CN4dwH97qbQt3yrzqDBApS9yCrCqEcdeVAMBgiZNtK1yVBLZtZvMpAmtBgdaw9Yrl"
    },
    "topval": 245,
    "posts": 16,
    "eng_sum": 646,
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
     "title": "La DENT ESTET Craiova, tratamentele de estetică pornesc de la o analiză atentă a dinților",
     "value": 66,
     "q": "",
     "url": "https://www.facebook.com/reel/2157094378559619"
    },
    "topval": 66,
    "posts": 14,
    "eng_sum": 325,
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
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "followers": 45000,
    "top": {
     "title": "Ce se întâmplă cu dintele tău după un tratament de canal?",
     "value": 47,
     "q": "",
     "url": "https://www.facebook.com/reel/2846896632336984"
    },
    "topval": 47,
    "posts": 14,
    "eng_sum": 383,
    "eng_n": 14
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "followers": 45000,
    "top": {
     "title": "În estetica dentară modernă, naturalețea este cel mai frumos rezultat…",
     "value": 48,
     "q": "",
     "url": "https://www.facebook.com/reel/4180702915566964"
    },
    "topval": 48,
    "posts": 10,
    "eng_sum": 287,
    "eng_n": 10
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
     "title": "Nu este vorba doar despre dinți. Este despre cum t…",
     "value": 513,
     "q": "",
     "url": "https://www.facebook.com/ReginaMariaDentalClinics/posts/pfbid02HqY4HDFoBFuFGv7FitbK6fE6nbqD61ioaP9S7MgYT4mcZq1fXDq9kBPzWudq63Gwl"
    },
    "topval": 513,
    "posts": 10,
    "eng_sum": 1064,
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
     "title": "Implantul nu se câștigă în ziua operației. Se câșt…",
     "value": 253,
     "q": "",
     "url": "https://www.facebook.com/reel/1541591254098511"
    },
    "topval": 253,
    "posts": 8,
    "eng_sum": 741,
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
     "title": "Astăzi am sărbătorit-o pe colega noastră, Dr. Bian…",
     "value": 49,
     "q": "",
     "url": "https://www.facebook.com/ReginaMariaDentalClinics/posts/pfbid0bnransZ2cQkBX6Tt5QMVF9XNJeWKSyg5SejjvvK5JFxb6wFGQHs2QVLfr7aTTu6Al"
    },
    "topval": 49,
    "posts": 11,
    "eng_sum": 232,
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
     "title": "Într-o zi de chirurgie nu este vorba doar despre intervenții. Este despre oameni…",
     "value": 332,
     "q": "",
     "url": "https://www.facebook.com/ReginaMariaDentalClinics/posts/pfbid0ipY8Efcp4CVh4vdT1zATktVseJz9w5z1RLXEqB5Lo2LdhXpd94wRccPuYJEDb616l"
    },
    "topval": 332,
    "posts": 6,
    "eng_sum": 569,
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
     "title": "Sângerarea gingiilor nu ar trebui ignorată, mai ales atunci când apare constant…",
     "value": 355,
     "q": "",
     "url": "https://www.facebook.com/reel/1365257195234621"
    },
    "topval": 355,
    "posts": 8,
    "eng_sum": 587,
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
     "title": "Când alegi medicul stomatolog al copilului, alegi și felul în care va privi vizi…",
     "value": 174,
     "q": "",
     "url": "https://www.facebook.com/ReginaMariaDentalClinics/posts/pfbid021BTsReWYf9LeudiSBE7zJ4sGCCkhuzFDsqtjoQTYF5b8WtJHAPP5aKDPZByp44s1l"
    },
    "topval": 174,
    "posts": 9,
    "eng_sum": 402,
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
     "title": "Boala parodontală poate evolua mult timp fără semne evidente, de aceea consultul…",
     "value": 166,
     "q": "",
     "url": "https://www.facebook.com/reel/1809265790065082"
    },
    "topval": 166,
    "posts": 9,
    "eng_sum": 547,
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
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "followers": 84000,
    "top": {
     "title": "„De ce nu ați făcut tot tratamentul de la început?”…",
     "value": 484,
     "q": "",
     "url": "https://www.facebook.com/ReginaMariaDentalClinics/posts/pfbid0vpYzrm2yTisVp2MoFQ2eMUgtu4mUnSD5dbTxtMUWDBsamzQBPCzmyMFXRcGvuo5l"
    },
    "topval": 484,
    "posts": 11,
    "eng_sum": 1040,
    "eng_n": 11
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "followers": 84000,
    "top": {
     "title": "La Regina Maria Dental Clinics Victoriei, fiecare …",
     "value": 640,
     "q": "",
     "url": "https://www.facebook.com/ReginaMariaDentalClinics/posts/pfbid035uUEYSxipo9nvk2ovRQytXh2aw5XgFfm6zNciMsreo72gLaL9BWu5BwX3WJBjCupl"
    },
    "topval": 640,
    "posts": 10,
    "eng_sum": 873,
    "eng_n": 10
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
     "title": "Ți-e mai frică de injecția cu anestezic decât de …",
     "value": 34,
     "q": "",
     "url": "https://www.facebook.com/reel/3275576072625069"
    },
    "topval": 34,
    "posts": 7,
    "eng_sum": 165,
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
     "title": "Crezi că parodontoza se tratează cu un simplu det…",
     "value": 50,
     "q": "",
     "url": "https://www.facebook.com/reel/1388252406545793"
    },
    "topval": 50,
    "posts": 6,
    "eng_sum": 208,
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
     "title": "Astăzi este despre recunoștință.",
     "value": 63,
     "q": "",
     "url": "https://www.facebook.com/LifeDentalSpa/posts/pfbid02nUBhCykmxts44Lks15Hge1XbaMjQhJe8skc3BtLQS7XTPkEBwEA1nisGa29iWffFl"
    },
    "topval": 63,
    "posts": 7,
    "eng_sum": 211,
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
     "title": "Întâlnire cu Gabriela Cristea și Tavi Clonda la Life Dental Spa!",
     "value": 53,
     "q": "",
     "url": "https://www.facebook.com/reel/1554270816180397"
    },
    "topval": 53,
    "posts": 7,
    "eng_sum": 207,
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
     "title": "De ce aleg unii pacienți tratamentul cariilor cu laser?",
     "value": 44,
     "q": "",
     "url": "https://www.facebook.com/reel/1071368542238118"
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
     "title": "De peste 5 ani, Gabriela Cristea alege Life Dental Spa pentru zâmbetul ei și al…",
     "value": 42,
     "q": "",
     "url": "https://www.facebook.com/reel/1644926493868819"
    },
    "topval": 42,
    "posts": 7,
    "eng_sum": 176,
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
     "title": "Gabriela Cristea și Tavi Clonda, împreună cu întreaga familie, aleg Life Dental…",
     "value": 34,
     "q": "",
     "url": "https://www.facebook.com/reel/1056477637112556"
    },
    "topval": 34,
    "posts": 7,
    "eng_sum": 129,
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
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "followers": 81000,
    "top": {
     "title": "Ai pierdut un dinte și crezi că nu este o problemă…?",
     "value": 20,
     "q": "",
     "url": "https://www.facebook.com/reel/1652428586057588"
    },
    "topval": 20,
    "posts": 6,
    "eng_sum": 85,
    "eng_n": 6
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "followers": 81000,
    "top": {
     "title": "Aflați în video cum contracarăm efectele unei rad…",
     "value": 42,
     "q": "",
     "url": "https://www.facebook.com/reel/2211830632926265"
    },
    "topval": 42,
    "posts": 6,
    "eng_sum": 128,
    "eng_n": 6
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
     "title": "FALS. Faptul că nu te doare după inserarea unui im…",
     "value": 60,
     "q": "",
     "url": "https://www.facebook.com/reel/2501256023650599"
    },
    "topval": 60,
    "posts": 4,
    "eng_sum": 171,
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
     "title": "Cea mai fierbinte veste a verii pentru pacienții …",
     "value": 49,
     "q": "",
     "url": "https://www.facebook.com/reel/997778533299922"
    },
    "topval": 49,
    "posts": 6,
    "eng_sum": 175,
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
     "title": "„Aveți garanție la lucrările dentare?” Este una d…",
     "value": 56,
     "q": "",
     "url": "https://www.facebook.com/reel/1391160696291107"
    },
    "topval": 56,
    "posts": 5,
    "eng_sum": 117,
    "eng_n": 5
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
     "title": "Cum poți economisi bani la dentist?",
     "value": 27,
     "q": "",
     "url": "https://www.facebook.com/reel/1589219872588440"
    },
    "topval": 27,
    "posts": 5,
    "eng_sum": 85,
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
     "title": "La mulți ani, Ana Maria Badea, Asistent Medical!",
     "value": 48,
     "q": "",
     "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid025nUxPAqWXENMt264P73N7CM8v5s7WxsKMB4zggU5wSK9UurCZSzV8Yu7WdKAdWJ2l&id=100038889943740"
    },
    "topval": 48,
    "posts": 5,
    "eng_sum": 100,
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
     "title": "Avem o campanie activă alături de eMAG!",
     "value": 96,
     "q": "",
     "url": "https://www.facebook.com/reel/1035209452632681"
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
     "title": "La Elidadent avem o campanie activă alături de eMAG și Banca Transilvania!",
     "value": 37,
     "q": "",
     "url": "https://www.facebook.com/reel/1783997632847929"
    },
    "topval": 37,
    "posts": 5,
    "eng_sum": 119,
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
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "followers": 4600,
    "top": {
     "title": "Cunoaște echipa din spatele fiecărui zâmbet!",
     "value": 76,
     "q": "",
     "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02ZGBiDU3YP4JdeaMnHLTKr1syk4aQ4SbTpMeCaMAY5RWQYgmZ5LcUnLcdEc487Ussl&id=100038889943740"
    },
    "topval": 76,
    "posts": 5,
    "eng_sum": 142,
    "eng_n": 5
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "followers": 4600,
    "top": {
     "title": "Postare fără text (doar media)",
     "value": 38,
     "q": "",
     "url": "https://www.facebook.com/permalink.php?story_fbid=1869753577664289&id=100038889943740"
    },
    "topval": 38,
    "posts": 8,
    "eng_sum": 143,
    "eng_n": 8
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
     "title": "Afacerile și relațiile importante se con…",
     "value": 52,
     "q": "",
     "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02bZkRPL5umzeZBqk2GDnRwEzCuJjwywfa7RFMgfUxFQjUNSh7abAsPrdsb3kbUX7Ul&id=100057645392894"
    },
    "topval": 52,
    "posts": 3,
    "eng_sum": 95,
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
     "title": "Asa sunt zilele noastre vara asta, pline de si D…",
     "value": 42,
     "q": "",
     "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02bwGEN28QpkFGa2hNCsgJXeyPpgLJ7s6SJVtoKdkNE7KuULvqti7BgEfNbQbCK148l&id=100057645392894"
    },
    "topval": 42,
    "posts": 8,
    "eng_sum": 226,
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
     "title": "Zi de pedodontie Dental Blue Slobozia …",
     "value": 26,
     "q": "",
     "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0fH7UJygY7SEnxBx84QwUVGv6j17fxXPBiskwjh7vNePyBUyabzDUBhzHB1dj2aQ7l&id=100057645392894"
    },
    "topval": 26,
    "posts": 6,
    "eng_sum": 125,
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
     "title": "Sa dansam putin de dimineata si sa Zambim cu DentalBlue!",
     "value": 40,
     "q": "",
     "url": "https://www.facebook.com/reel/1590538972691705"
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
     "title": "Concediul începe cu un zâmbet fără griji!",
     "value": 33,
     "q": "",
     "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02SHtaWReyPyC5NWdozUQbShakdwMsvKxmhUsvqzJXA7rt18Uyy1UgJ96LErtdm2rRl&id=100057645392894"
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
     "title": "Dental Blue Ialomița 16 ani de experiență în estetică dentară și implantologie",
     "value": 35,
     "q": "",
     "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02dLjZNSoPE8m86JeaFyH22bNKJ82Qg31SALcDbJHaWUzPRwJtyp31Gr9DKKZkxsGwl&id=100057645392894"
    },
    "topval": 35,
    "posts": 4,
    "eng_sum": 108,
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
     "title": "Zi de pedodontie!",
     "value": 27,
     "q": "",
     "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02iZ8wnsJRizgvN42dWABkR81rQNqJennawUGRZabmz3FrmAaSXki4wuJmcYbr9KAtl&id=100057645392894"
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
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "followers": 6200,
    "top": {
     "title": "Salutare, Slobozia! Andrei Osanu vine astăzi la Fr…",
     "value": 855,
     "q": "",
     "url": "https://www.facebook.com/reel/1791279998976626"
    },
    "topval": 855,
    "posts": 10,
    "eng_sum": 1227,
    "eng_n": 10
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "followers": 6200,
    "top": {
     "title": "La mulți ani Dr. Mihnea!",
     "value": 57,
     "q": "",
     "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02qGFbrW9DpjCowuGLm2w9HMqZh7MMy2JiKktFu16XPSfmucmWwiNy8C7G8ZfpciTAl&id=100057645392894"
    },
    "topval": 57,
    "posts": 6,
    "eng_sum": 183,
    "eng_n": 6
   }
  }
 }
};
