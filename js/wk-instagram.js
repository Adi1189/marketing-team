// Date reale din rapoartele KPI Tier 1 (S27–S41), pe săptămână.
window.WEEKLY_CONFIG = {
 "channel": "Instagram",
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
   "hint": "postări în feed + Reels publicate în săptămână (fără Story-uri)",
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
   "hint": "câte like-uri + comentarii are în medie o postare",
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
   "hint": "câți urmăritori are contul (ultima cifră din rapoarte)",
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
  "Ritmul nostru e aproape de al Regina Maria și al Life, dar la jumătate din al DENT ESTET. Media pe 15 săptămâni: 7,3 postări pe săptămână la noi, 7,1 la Regina Maria, 6,3 la Life și 15,8 la DENT ESTET. Vârful nostru a fost 12 în S38. În S41 am avut 8 postări, față de 17 la DENT ESTET.",
  "Pe rata de engagement (engagement mediu împărțit la urmăritori) suntem peste DENT ESTET în 15 din 15 săptămâni cu cifre (0,42–1,43% față de 0,21–0,67%), peste Regina Maria în 14 și peste Life în 15. Pe engagement mediu per postare, DENT ESTET ne depășește în 3 din 15 săptămâni (S29, S35, S40).",
  "Engagementul nostru mediu pe postare (like-uri + comentarii): cea mai slabă săptămână dintre cele 15 cu cifre e S40 (19,3), cea mai bună e S33 (66,0). În S40 a fost 19,3, iar în S41 26,2.",
  "Urmăritori, de la prima cifră (S28) la S41: DENT ESTET +1.283 (+16,7%), noi +328 (+7,7%). Life +4,8% și Regina Maria +1,5%, dar la acestea cifrele sunt rotunjite la 0,1K. Elidadent (+7,8%) și Dental Blue (+9,9%) pornesc de la baze foarte mici.",
  "Cele mai mari vârfuri ale pieței: Regina Maria 630 (S41); Regina Maria 476 (S29); Elidadent 389 (S38). La noi, cele mai bune trei săptămâni după postarea de top: 151 (S32); 136 (S34); 95 (S33)."
 ],
 "notes": [
  "Rapoartele KPI Tier 1 compară contul nostru cu cei 5 concurenți principali (Tier 1). Săptămânile sunt cele din rapoarte (S27–S40, ISO).",
  "Engagement = like-uri + comentarii (Instagram nu arată distribuirile); unde raportul dă doar like-uri, cifra e minimă („≥”). Urmăritorii apar doar în câteva rapoarte (se păstrează ultima cifră cunoscută).",
  "Leadurile sunt din Puls (Marketing · Social Ads, „Trend săptămânal”): leaduri primite din campaniile Facebook + Instagram la un loc, pe săptămâni ISO, inclusiv telefoanele care au mai sunat. Nu se pot separa pe canal, așa că aceeași cifră apare pe ambele pagini. Puls începe de la S30.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în raport.",
  "S27–S41 au fost recitite cu skill-ul actualizat sau dintr-un bloc cu like-uri citite pe 12–14 octombrie. Engagementul acestor săptămâni e mult sub cel din rapoartele vechi (de exemplu S38 la noi: 374 față de 699, S39: 224 față de 568), deci nu se compară cu cifrele vechi.",
  "S41 (5–11 octombrie) vine din raportul rulat pe 12 octombrie. Regina Maria are în S41 un reel în colaborare cu 630 de interacțiuni; fără el media ei ar fi 17,0. Raportul nu are variația față de S40 (nu a măsurat acea săptămână), dar aici S40 există și e folosit pentru variație.",
  "Urmăritorii sunt cifrele din rapoartele săptămânale vechi, citite în acele săptămâni (rotunjite la mii la Facebook, exacte la Instagram pentru noi, DENT ESTET, Elidadent și Dental Blue); unde raportul vechi nu avea cifră, am păstrat citirea de la rulare, marcată „≈”. S41 e citirea de la rulare.",
  "Lunile se formează din săptămâni ISO întregi: iulie = S27–S31, august = S32–S35, septembrie = S36–S40, octombrie = S41–S44. S27 (29 iunie–5 iulie) intră în iulie, pentru că 5 din cele 7 zile ale ei sunt în iulie.",
  "Titlurile postărilor de top din iulie și august (S27–S35) sunt citite din descrierile postărilor, pe 15 octombrie; la colaborări apare contul partener, iar la Dental Blue unele sunt postări foto.",
  "S32–S35 (august) au inventar complet; blocul avea linkurile postărilor de top, iar titlurile le-am completat din descrieri. Like-urile au fost citite pe 12–13 octombrie, deci sunt mai mari decât ar fi fost la sfârșitul săptămânilor."
 ],
 "data": {
  "DrA": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28",
     "leads": "Puls are cifre începând cu S30"
    },
    "followers": 4272,
    "top": {
     "title": "⭐ Cum ar fi dacă review-urile s-ar putea negocia? 😅",
     "value": 71,
     "q": "",
     "url": "https://www.instagram.com/reel/Da-CA_GosAS/"
    },
    "topval": 71,
    "posts": 7,
    "eng_sum": 244,
    "eng_n": 7
   },
   "S30": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 5,
    "eng_sum": 258,
    "eng_n": 5,
    "followers": 4272,
    "top": {
     "title": "🦷 Tu după ce criteriu alegi pasta de dinți?",
     "value": 79,
     "q": "",
     "url": "https://www.instagram.com/reel/DbFmZlrDCHC/"
    },
    "topval": 79,
    "leads": 200
   },
   "S31": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 7,
    "eng_sum": 321,
    "eng_n": 7,
    "followers": 4272,
    "top": {
     "title": "🏆 Investim constant în pregătirea echipei noastre, iar pacienții sunt beneficiarii direcți ai fiecărui curs... (masterclass Zucchelli)",
     "value": 73,
     "q": "",
     "url": "https://www.instagram.com/p/DbVME3JnDx3/"
    },
    "topval": 73,
    "leads": 218
   },
   "S32": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 6,
    "eng_sum": 359,
    "eng_n": 6,
    "followers": 4359,
    "top": {
     "title": "🔥 Slobozia, suntem gata! (colaborare @dr.claudiafratila)",
     "value": 151,
     "q": "",
     "url": "https://www.instagram.com/reel/DbpdpKBD73U/"
    },
    "topval": 151,
    "leads": 262
   },
   "S33": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 5,
    "eng_sum": 330,
    "eng_n": 5,
    "followers": 4619,
    "top": {
     "title": "😂 Există întrebări care vin exact în momentul nepotrivit. (colaborare)",
     "value": 95,
     "q": "",
     "url": "https://www.instagram.com/reel/Db-JgWZjVs1/"
    },
    "topval": 95,
    "leads": 324
   },
   "S34": {
    "q": {
     "topval": "",
     "followers": "≈",
     "avgeng": "≥"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii",
     "leads": "Facebook + Instagram, împreună",
     "avgeng": "6 din 7 postări au engagement citit"
    },
    "posts": 7,
    "eng_sum": 311,
    "eng_n": 6,
    "followers": 4619,
    "top": {
     "title": "📍 Un nou oraș. O nouă comunitate. Aceleași standarde pe care le construim de aproape 10 ani. (colaborare)",
     "value": 136,
     "q": "",
     "url": "https://www.instagram.com/reel/DcTIBoGlQBX/"
    },
    "topval": 136,
    "leads": 333
   },
   "S35": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 8,
    "eng_sum": 372,
    "eng_n": 8,
    "followers": 4441,
    "top": {
     "title": "🦷 4 implanturi convenționale + 2 implanturi pterigoidiene. De ce această combinație?",
     "value": 87,
     "q": "",
     "url": "https://www.instagram.com/reel/Dcd3GhiAtZN/"
    },
    "topval": 87,
    "leads": 310
   },
   "S36": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 6,
    "followers": 4461,
    "top": {
     "title": "Fiecare zâmbet are o poveste, iar povestea mea a… (reel colaborativ @drvirginiaardeleanu)",
     "value": 61,
     "q": "",
     "url": "https://www.instagram.com/drvirginiaardeleanu/reel/DcwKYIaNMP-/"
    },
    "topval": 61,
    "leads": 346,
    "eng_sum": 156,
    "eng_n": 6
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 10,
    "followers": 4600,
    "top": {
     "title": "Când obiectivele sunt clare, mesajul ajunge repede… (reel)",
     "value": 62,
     "q": "",
     "url": "https://www.instagram.com/dr.ardeleanu/reel/DdD8KLbEbf7/"
    },
    "topval": 62,
    "leads": 312,
    "eng_sum": 279,
    "eng_n": 10
   },
   "S38": {
    "q": {
     "topval": "",
     "followers": "",
     "avgeng": "≥"
    },
    "note": {
     "leads": "Facebook + Instagram, împreună",
     "avgeng": "11 din 12 postări au engagement citit"
    },
    "posts": 12,
    "eng_sum": 374,
    "eng_n": 11,
    "followers": 4505,
    "top": {
     "title": "CARE Forum continuă, cu energie… (carusel)",
     "value": 65,
     "q": "",
     "url": "https://www.instagram.com/dr.ardeleanu/p/Ddd8WKCm-0Q/"
    },
    "topval": 65,
    "leads": 328
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 9,
    "eng_sum": 224,
    "eng_n": 9,
    "followers": 4585,
    "top": {
     "title": "Într-un context economic în continuă schimbare, leadershipul… (Forbes CEE Forum)",
     "value": 52,
     "q": "",
     "url": "https://www.instagram.com/dr.ardeleanu/p/DdqV-npCqAZ/"
    },
    "topval": 52,
    "leads": 284
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 7,
    "eng_sum": 135,
    "eng_n": 7,
    "followers": 4559,
    "top": {
     "title": "Când pacientul uită pentru o secundă de ce a venit la dentist (reel)",
     "value": 38,
     "q": "",
     "url": "https://www.instagram.com/dr.ardeleanu/reel/Dd_CdZkjDd9/"
    },
    "topval": 38,
    "leads": 380
   },
   "S41": {
    "q": {
     "followers": "",
     "topval": ""
    },
    "note": {
     "leads": "Puls avea S41 doar parțial la ultima citire"
    },
    "leads": null,
    "posts": 8,
    "eng_sum": 210,
    "eng_n": 8,
    "followers": 4600,
    "top": {
     "title": "„Nu există scurtături către succes.” — TEDx Tudor Vianu",
     "value": 61,
     "q": "",
     "url": "https://www.instagram.com/reel/DeKC2_mEVrO/"
    },
    "topval": 61
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S28 (nu există raport pentru această săptămână)"
    },
    "followers": 4272,
    "top": {
     "title": "În implantologie, performanța nu se măsoară doar prin complexitatea cazurilor pe care le rezolvi. 🦷 (colaborare @straumannro)",
     "value": 91,
     "q": "",
     "url": "https://www.instagram.com/reel/DaSOG7Yiy21/"
    },
    "topval": 91,
    "posts": 7,
    "eng_sum": 367,
    "eng_n": 7
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "followers": 4272,
    "top": {
     "title": "💙 Împreună pentru comunitate | Update caz umanitar (colaborare)",
     "value": 75,
     "q": "",
     "url": "https://www.instagram.com/reel/Damz_37lAT7/"
    },
    "topval": 75,
    "posts": 5,
    "eng_sum": 265,
    "eng_n": 5
   }
  },
  "DE": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "followers": 7673,
    "top": {
     "title": "Performanța se construiește prin atenție la fiecare detaliu.",
     "value": 175,
     "q": "",
     "url": "https://www.instagram.com/reel/DauOQ5QCJpf/"
    },
    "topval": 175,
    "posts": 11,
    "eng_sum": 500,
    "eng_n": 11
   },
   "S30": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "posts": 12,
    "eng_sum": 552,
    "eng_n": 12,
    "followers": 7673,
    "top": {
     "title": "Uneori, încrederea începe cu un zâmbet.",
     "value": 194,
     "q": "",
     "url": "https://www.instagram.com/reel/DbKjDRwjY59/"
    },
    "topval": 194
   },
   "S31": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "posts": 17,
    "eng_sum": 607,
    "eng_n": 17,
    "followers": 7673,
    "top": {
     "title": "Prelungim durata de viață a implantului dentar pentru ca tu să te bucuri de un zâmbet complet. 💙",
     "value": 112,
     "q": "",
     "url": "https://www.instagram.com/reel/DbTWE_gFZAV/"
    },
    "topval": 112
   },
   "S32": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 18,
    "eng_sum": 979,
    "eng_n": 18,
    "followers": 8143,
    "top": {
     "title": "Sângerarea la periaj reprezintă primul semnal că tartrul și bacteriile au început deja să afecteze gingia. (colaborare @medlife_romania)",
     "value": 256,
     "q": "",
     "url": "https://www.instagram.com/reel/DbsBaqvCP3x/"
    },
    "topval": 256
   },
   "S33": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 17,
    "eng_sum": 775,
    "eng_n": 17,
    "followers": 8969,
    "top": {
     "title": "Inflamația cronică din boala parodontală poate ajunge, prin sânge, să afecteze și sistemul cardiovascular. (colaborare @medlife_romania)",
     "value": 228,
     "q": "",
     "url": "https://www.instagram.com/reel/Db7eFijAWUB/"
    },
    "topval": 228
   },
   "S34": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 16,
    "eng_sum": 705,
    "eng_n": 16,
    "followers": 8969,
    "top": {
     "title": "Parodontoză ținută sub control = parodontolog + igienă zilnică. (colaborare @medlife_romania)",
     "value": 251,
     "q": "",
     "url": "https://www.instagram.com/reel/DcNfrrxAbAt/"
    },
    "topval": 251
   },
   "S35": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 15,
    "eng_sum": 834,
    "eng_n": 15,
    "followers": 8393,
    "top": {
     "title": "🩵 Fațete sau coroane dentare? Cum știi ce ți se potrivește?",
     "value": 151,
     "q": "",
     "url": "https://www.instagram.com/reel/DcgYPVkDT2n/"
    },
    "topval": 151
   },
   "S36": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 17,
    "followers": 8955,
    "top": {
     "title": "Chirurgie avansată. Practică reală. Expertiză… (colaborare @dentestet.arad)",
     "value": 55,
     "q": "",
     "url": "https://www.instagram.com/dentestet.arad/p/Dc0fbpYjXzG/"
    },
    "topval": 55,
    "eng_sum": 432,
    "eng_n": 17
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 18,
    "followers": 8955,
    "top": {
     "title": "Un zâmbet «perfect» poate ascunde o problemă pe care… (reel)",
     "value": 66,
     "q": "",
     "url": "https://www.instagram.com/dent.estet/reel/DdGQFukDKC6/"
    },
    "topval": 66,
    "eng_sum": 435,
    "eng_n": 18
   },
   "S38": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 18,
    "eng_sum": 339,
    "eng_n": 18,
    "followers": 8955,
    "top": {
     "title": "La DENT ESTET 4 Teens, fiecare caz ne amintește că… (carusel)",
     "value": 42,
     "q": "",
     "url": "https://www.instagram.com/dent.estet/p/DdYKs-GjdlS/"
    },
    "topval": 42
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 16,
    "eng_sum": 391,
    "eng_n": 16,
    "followers": 8944,
    "top": {
     "title": "Ai auzit de tomografia computerizată dentară (CBCT)… (reel)",
     "value": 82,
     "q": "",
     "url": "https://www.instagram.com/dent.estet/reel/DdnubhTgURe/"
    },
    "topval": 82
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 19,
    "eng_sum": 543,
    "eng_n": 19,
    "followers": 8895,
    "top": {
     "title": "De mai bine de 5 ani, facem Ploieștiul să zâmbească (carusel)",
     "value": 81,
     "q": "",
     "url": "https://www.instagram.com/dent.estet/p/DeBQjZekann/"
    },
    "topval": 81
   },
   "S41": {
    "q": {
     "followers": "",
     "topval": "",
     "avgeng": "≥"
    },
    "note": {
     "avgeng": "16 din 17 postări au engagement citit"
    },
    "posts": 17,
    "eng_sum": 416,
    "eng_n": 16,
    "followers": 8956,
    "top": {
     "title": "Behind the scenes cu Dr. Adeli…",
     "value": 141,
     "q": "",
     "url": "https://www.instagram.com/reel/DeKJTlkjRgp/"
    },
    "topval": 141
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S28 (nu există raport pentru această săptămână)"
    },
    "followers": 7673,
    "top": {
     "title": "Ce se întâmplă cu dintele tău după un tratament de canal?",
     "value": 134,
     "q": "",
     "url": "https://www.instagram.com/reel/DaPUuw1E6Bi/"
    },
    "topval": 134,
    "posts": 14,
    "eng_sum": 530,
    "eng_n": 14
   },
   "S28": {
    "q": {
     "topval": "",
     "avgeng": "≥",
     "followers": ""
    },
    "note": {
     "avgeng": "11 din 12 postări au engagement citit"
    },
    "followers": 7673,
    "top": {
     "title": "Un tratament necesar nu ar trebui amânat din motive financiare.",
     "value": 45,
     "q": "",
     "url": "https://www.instagram.com/reel/DakWraUAYKk/"
    },
    "topval": 45,
    "posts": 12,
    "eng_sum": 301,
    "eng_n": 11
   }
  },
  "RM": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "followers": 13400,
    "top": {
     "title": "🦷✨ Un zâmbet sănătos începe cu o vizită la medicul potrivit!",
     "value": 476,
     "q": "",
     "url": "https://www.instagram.com/reel/Da-PMgtI65Z/"
    },
    "topval": 476,
    "posts": 9,
    "eng_sum": 889,
    "eng_n": 9
   },
   "S30": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "posts": 6,
    "eng_sum": 375,
    "eng_n": 6,
    "followers": 13400,
    "top": {
     "title": "„De ce se pierde un implant dentar?” Este una dintre cele mai frecvente întrebări pe care le primim.",
     "value": 218,
     "q": "",
     "url": "https://www.instagram.com/reel/DbJYC5mOUzM/"
    },
    "topval": 218
   },
   "S31": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "posts": 7,
    "eng_sum": 233,
    "eng_n": 7,
    "followers": 13400,
    "top": {
     "title": "Ne programăm revizia la mașină fără să stăm pe gânduri... (reel colaborativ @mihaelabrazdes)",
     "value": 100,
     "q": "",
     "url": "https://www.instagram.com/reel/DbSPocMIdPM/"
    },
    "topval": 100
   },
   "S32": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "rotunjit în pagină"
    },
    "posts": 7,
    "eng_sum": 306,
    "eng_n": 7,
    "followers": 13500,
    "top": {
     "title": "Hey! Azi vă iau cu mine într-o aventură. La DENTIST! 😂🔥 (colaborare @ana_maria_guran)",
     "value": 175,
     "q": "",
     "url": "https://www.instagram.com/reel/Dbm9eJmoZZQ/"
    },
    "topval": 175
   },
   "S33": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "rotunjit în pagină · valoare de la data rulării"
    },
    "posts": 6,
    "eng_sum": 110,
    "eng_n": 6,
    "followers": 13600,
    "top": {
     "title": "Sângerarea gingiilor nu ar trebui ignorată, mai ales atunci când apare constant ⬇️",
     "value": 28,
     "q": "",
     "url": "https://www.instagram.com/reel/DcGr7L1oY9L/"
    },
    "topval": 28
   },
   "S34": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "rotunjit în pagină · valoare de la data rulării"
    },
    "posts": 7,
    "eng_sum": 256,
    "eng_n": 7,
    "followers": 13600,
    "top": {
     "title": "La Academia Spațială, nu ne așteptăm ca cei mici să vină deja curajoși, cuminți sau fără emoții. Îi lăsăm să fie ei înșiși.",
     "value": 95,
     "q": "",
     "url": "https://www.instagram.com/reel/DcWZvAPouk4/"
    },
    "topval": 95
   },
   "S35": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "rotunjit în pagină"
    },
    "posts": 6,
    "eng_sum": 304,
    "eng_n": 6,
    "followers": 13500,
    "top": {
     "title": "Copilul tău fuge de dentist? 🏃 Nu ești singurul părinte în situația asta. (colaborare @iulia.burca)",
     "value": 155,
     "q": "",
     "url": "https://www.instagram.com/reel/DcofbMVIoDX/"
    },
    "topval": 155
   },
   "S36": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "rotunjit în pagină · valoare de la data rulării"
    },
    "posts": 5,
    "followers": 13600,
    "top": {
     "title": "Ce impact are menopauza asupra sănătății cavității… (reel colaborativ @dr.cezaraelena)",
     "value": 70,
     "q": "",
     "url": "https://www.instagram.com/dr.cezaraelena/reel/Dc3J6m5SKKr/"
    },
    "topval": 70,
    "eng_sum": 173,
    "eng_n": 5
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "rotunjit în pagină · valoare de la data rulării"
    },
    "posts": 7,
    "followers": 13600,
    "top": {
     "title": "Ani de zile, pacientul nostru nu a mai putut mânca… (reel)",
     "value": 41,
     "q": "",
     "url": "https://www.instagram.com/reginamariadentalclinics/reel/DdG9ydboOt7/"
    },
    "topval": 41,
    "eng_sum": 165,
    "eng_n": 7
   },
   "S38": {
    "q": {
     "topval": "",
     "followers": "≈",
     "avgeng": "≥"
    },
    "note": {
     "followers": "rotunjit în pagină · valoare de la data rulării",
     "avgeng": "7 din 8 postări au engagement citit"
    },
    "posts": 8,
    "eng_sum": 228,
    "eng_n": 7,
    "followers": 13600,
    "top": {
     "title": "O conversație despre sănătatea gingiilor… (postare colaborativă @drdianapopescu)",
     "value": 81,
     "q": "",
     "url": "https://www.instagram.com/drdianapopescu/p/DdUHfKktpdF/"
    },
    "topval": 81
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": "≈",
     "avgeng": "≥"
    },
    "note": {
     "followers": "rotunjit în pagină · valoare de la data rulării",
     "avgeng": "5 din 6 postări au engagement citit"
    },
    "posts": 6,
    "eng_sum": 186,
    "eng_n": 5,
    "followers": 13600,
    "top": {
     "title": "Lucrăm la versiunea V2 a campaniei. Mulțumim pentru feedback",
     "value": 112,
     "q": "",
     "url": "https://www.instagram.com/reginamariadentalclinics/p/DdtpJ8xIa_e/"
    },
    "topval": 112
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": "≈",
     "avgeng": "≥"
    },
    "note": {
     "avgeng": "8 din 9 postări au engagement citit",
     "followers": "rotunjit în pagină"
    },
    "posts": 9,
    "eng_sum": 249,
    "eng_n": 8,
    "followers": 13600,
    "top": {
     "title": "De Ziua Mondială a Zâmbetului… (reel)",
     "value": 82,
     "q": "",
     "url": "https://www.instagram.com/reginamariadentalclinics/reel/Dd_LCpaOT-w/"
    },
    "topval": 82
   },
   "S41": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit în pagină"
    },
    "posts": 9,
    "eng_sum": 766,
    "eng_n": 9,
    "followers": 13600,
    "top": {
     "title": "„Cât de multe lucruri știm…” — colaborare cu influencer (albuandreeanicoleta)",
     "value": 630,
     "q": "",
     "url": "https://www.instagram.com/reel/DeQnpcGIpL5/"
    },
    "topval": 630
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S28 (nu există raport pentru această săptămână)"
    },
    "followers": 13400,
    "top": {
     "title": "Îmi place să am grijă de mine, iar asta nu înseamnă doar skincare sau makeup... (colaborare @izabela.tiu)",
     "value": 273,
     "q": "",
     "url": "https://www.instagram.com/reel/DaUkD2wsGtE/"
    },
    "topval": 273,
    "posts": 8,
    "eng_sum": 422,
    "eng_n": 8
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {},
    "followers": 13400,
    "top": {
     "title": "Dr. Laura Apostol crede că educația este primul pas către un tratament reușit... (colaborare @vorbeste_lumea_oficial)",
     "value": 49,
     "q": "",
     "url": "https://www.instagram.com/p/Daiain0CCl_/"
    },
    "topval": 49,
    "posts": 7,
    "eng_sum": 174,
    "eng_n": 7
   }
  },
  "Life": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "followers": 12600,
    "top": {
     "title": "„Nu vreau dinți falși.” Este una dintre cele mai frecvente temeri pe care le auzim de la pacienți.",
     "value": 23,
     "q": "",
     "url": "https://www.instagram.com/reel/Da1_b2eihTX/"
    },
    "topval": 23,
    "posts": 7,
    "eng_sum": 60,
    "eng_n": 7
   },
   "S30": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "posts": 6,
    "eng_sum": 78,
    "eng_n": 6,
    "followers": 12600,
    "top": {
     "title": "Dr. Cristina Obreja îi invită pe medicii Life Dental Spa să răspundă unor întrebări mai puțin obișnuite...",
     "value": 28,
     "q": "",
     "url": "https://www.instagram.com/reel/DbKmiFuijBg/"
    },
    "topval": 28
   },
   "S31": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "posts": 7,
    "followers": 12600,
    "top": {
     "title": "🎂 Astăzi este despre recunoștință. O celebrăm pe Dr. Cristina Obreja, co-fondatoarea Life Dental Spa.",
     "value": 65,
     "q": "",
     "url": "https://www.instagram.com/p/Dbc-gvJldWz/"
    },
    "topval": 65,
    "eng_sum": 132,
    "eng_n": 7
   },
   "S32": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "rotunjit în pagină"
    },
    "posts": 7,
    "eng_sum": 98,
    "eng_n": 7,
    "followers": 12800,
    "top": {
     "title": "Dinții nu sunt doar structuri dure care ne ajută să mestecăm. Ei sunt țesuturi vii, conectate la sistemul nervos prin nervul trigemen...",
     "value": 44,
     "q": "",
     "url": "https://www.instagram.com/p/Dbpi5XVjAeX/"
    },
    "topval": 44
   },
   "S33": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "rotunjit în pagină · valoare de la data rulării"
    },
    "posts": 7,
    "eng_sum": 51,
    "eng_n": 7,
    "followers": 13200,
    "top": {
     "title": "Știai că tratamentul cariilor poate fi realizat și cu ajutorul laserului dentar?",
     "value": 11,
     "q": "",
     "url": "https://www.instagram.com/reel/DcFwZvkiHBT/"
    },
    "topval": 11
   },
   "S34": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "rotunjit în pagină · valoare de la data rulării"
    },
    "posts": 7,
    "eng_sum": 58,
    "eng_n": 7,
    "followers": 13200,
    "top": {
     "title": "🤍 De peste 5 ani, @bygabrielacristea alege Life Dental Spa pentru zâmbetul ei și al întregii familii. (colaborare)",
     "value": 17,
     "q": "",
     "url": "https://www.instagram.com/reel/DcSu8_HtPCz/"
    },
    "topval": 17
   },
   "S35": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "rotunjit în pagină"
    },
    "posts": 8,
    "eng_sum": 166,
    "eng_n": 8,
    "followers": 13000,
    "top": {
     "title": "Știai că un fren lingual scurt poate influența mai mult decât vorbirea? 👅 (colaborare @dramandahsohl)",
     "value": 82,
     "q": "",
     "url": "https://www.instagram.com/p/DcdNKC8MTtE/"
    },
    "topval": 82
   },
   "S36": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "rotunjit în pagină · valoare de la data rulării"
    },
    "posts": 7,
    "followers": 13200,
    "top": {
     "title": "Carii ascunse, fisuri dentare, retracții gingivale… (reel)",
     "value": 11,
     "q": "",
     "url": "https://www.instagram.com/lifedentalspa/reel/DcxmD8xAX1O/"
    },
    "topval": 11,
    "eng_sum": 35,
    "eng_n": 7
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "rotunjit în pagină · valoare de la data rulării"
    },
    "posts": 7,
    "followers": 13200,
    "top": {
     "title": "Cât mai amâni vizita la medicul stomatolog? (reel)",
     "value": 6,
     "q": "",
     "url": "https://www.instagram.com/lifedentalspa/reel/DdDi4UTDVkx/"
    },
    "topval": 6,
    "eng_sum": 27,
    "eng_n": 7
   },
   "S38": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "rotunjit în pagină · valoare de la data rulării"
    },
    "posts": 5,
    "eng_sum": 32,
    "eng_n": 5,
    "followers": 13200,
    "top": {
     "title": "Știai că o carie poate evolua fără să doară? (reel)",
     "value": 13,
     "q": "",
     "url": "https://www.instagram.com/lifedentalspa/reel/DdaySr7FJnq/"
    },
    "topval": 13
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "rotunjit în pagină · valoare de la data rulării"
    },
    "posts": 6,
    "eng_sum": 27,
    "eng_n": 6,
    "followers": 13200,
    "top": {
     "title": "Crezi că fațetele dentare înseamnă un zâmbet artificial? (reel)",
     "value": 12,
     "q": "",
     "url": "https://www.instagram.com/lifedentalspa/reel/DdvX768DAf3/"
    },
    "topval": 12
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "rotunjit în pagină"
    },
    "posts": 7,
    "followers": 13100,
    "top": {
     "title": "Guvernele se schimbă. Scuzele pentru dentist rămân surprinzător de stabile.",
     "value": 9,
     "q": "",
     "url": "https://www.instagram.com/lifedentalspa/p/Dd9TQ_lClJ-/"
    },
    "topval": 9,
    "eng_sum": 30,
    "eng_n": 7
   },
   "S41": {
    "q": {
     "followers": "≈",
     "topval": ""
    },
    "note": {
     "followers": "rotunjit în pagină"
    },
    "posts": 5,
    "eng_sum": 21,
    "eng_n": 5,
    "followers": 13200,
    "top": {
     "title": "Ce înseamnă să faci stomatologie altfel?",
     "value": 10,
     "q": "",
     "url": "https://www.instagram.com/reel/DeTb9aFjCaL/"
    },
    "topval": 10
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S28 (nu există raport pentru această săptămână)"
    },
    "followers": 12600,
    "top": {
     "title": "Majoritatea oamenilor cred că apariția cariilor este cauzată doar de zahăr, lipsa periajului dentar...",
     "value": 38,
     "q": "",
     "url": "https://www.instagram.com/p/DaPUqwDmqxd/"
    },
    "topval": 38,
    "posts": 5,
    "eng_sum": 68,
    "eng_n": 5
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {},
    "followers": 12600,
    "top": {
     "title": "🦷 Schimbă-ți zâmbetul, schimbă-ți viața - la Life Dental Spa!",
     "value": 12,
     "q": "",
     "url": "https://www.instagram.com/p/DapDdnaDU1t/"
    },
    "topval": 12,
    "posts": 4,
    "eng_sum": 26,
    "eng_n": 4
   }
  },
  "Eli": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "followers": 474,
    "top": {
     "title": "🎉 La mulți ani, Dr. Ruxandra Niculescu, Medic Specialist Parodontologie!",
     "value": 11,
     "q": "",
     "url": "https://www.instagram.com/p/Dazf6aBEzge/"
    },
    "topval": 11,
    "posts": 4,
    "eng_sum": 29,
    "eng_n": 4
   },
   "S30": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "posts": 6,
    "eng_sum": 63,
    "eng_n": 6,
    "followers": 474,
    "top": {
     "title": "Răspunsul ei ne-a luat complet prin surprindere. 🤣 Stai până la final...",
     "value": 15,
     "q": "",
     "url": "https://www.instagram.com/reel/DbLh56UEWlS/"
    },
    "topval": 15
   },
   "S31": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "posts": 5,
    "eng_sum": 59,
    "eng_n": 5,
    "followers": 474,
    "top": {
     "title": "🦷 Importanța examenului radiologic",
     "value": 22,
     "q": "",
     "url": "https://www.instagram.com/reel/DbajCJ8Eu2t/"
    },
    "topval": 22
   },
   "S32": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 5,
    "eng_sum": 31,
    "eng_n": 5,
    "followers": 479,
    "top": {
     "title": "💰 Cum poți economisi bani la dentist? 🦷",
     "value": 15,
     "q": "",
     "url": "https://www.instagram.com/reel/DbnacDUjOEV/"
    },
    "topval": 15
   },
   "S33": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 6,
    "eng_sum": 58,
    "eng_n": 6,
    "followers": 512,
    "top": {
     "title": "🎉 La mulți ani, Ana Maria Badea, Asistent Medical!",
     "value": 12,
     "q": "",
     "url": "https://www.instagram.com/p/Db7lECfjY7O/"
    },
    "topval": 12
   },
   "S34": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 5,
    "eng_sum": 65,
    "eng_n": 5,
    "followers": 512,
    "top": {
     "title": "🎒 Avem o campanie activă alături de eMAG!",
     "value": 30,
     "q": "",
     "url": "https://www.instagram.com/reel/DcOK-cZARjK/"
    },
    "topval": 30
   },
   "S35": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 5,
    "eng_sum": 53,
    "eng_n": 5,
    "followers": 488,
    "top": {
     "title": "Când asistenta îți spune să lași problemele afară și tu o iei prea literal. 😂🦷",
     "value": 14,
     "q": "",
     "url": "https://www.instagram.com/reel/DcaxZnMCU4F/"
    },
    "topval": 14
   },
   "S36": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 5,
    "followers": 511,
    "top": {
     "title": "Cum se citește o radiografie dentară și ce caut… (reel)",
     "value": 13,
     "q": "",
     "url": "https://www.instagram.com/clinicaelidadent/reel/Dc3gnd_icNn/"
    },
    "topval": 13,
    "eng_sum": 50,
    "eng_n": 5
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 5,
    "followers": 511,
    "top": {
     "title": "La finalul zilei când întrebi sacul de gunoi… (reel)",
     "value": 55,
     "q": "",
     "url": "https://www.instagram.com/clinicaelidadent/reel/DdB0nPfCJoE/"
    },
    "topval": 55,
    "eng_sum": 91,
    "eng_n": 5
   },
   "S38": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 5,
    "eng_sum": 435,
    "eng_n": 5,
    "followers": 511,
    "top": {
     "title": "Toată lumea are aceeași curiozitate: «Bianca de la Insula Iubirii…» (reel)",
     "value": 389,
     "q": "",
     "url": "https://www.instagram.com/clinicaelidadent/reel/DdWzQTQNh9y/"
    },
    "topval": 389
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 6,
    "eng_sum": 91,
    "eng_n": 6,
    "followers": 507,
    "top": {
     "title": "Când filmezi cu Bianca de la Insula Iubirii… (reel)",
     "value": 42,
     "q": "",
     "url": "https://www.instagram.com/clinicaelidadent/reel/DdlnwRojEiH/"
    },
    "topval": 42
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 7,
    "eng_sum": 60,
    "eng_n": 7,
    "followers": 506,
    "top": {
     "title": "Te-a durut un dinte, iar apoi durerea a dispărut? (reel)",
     "value": 16,
     "q": "",
     "url": "https://www.instagram.com/clinicaelidadent/reel/DeCQ2k4kUx_/"
    },
    "topval": 16
   },
   "S41": {
    "q": {
     "followers": "",
     "topval": ""
    },
    "note": {},
    "posts": 7,
    "eng_sum": 98,
    "eng_n": 7,
    "followers": 511,
    "top": {
     "title": "Din Târgoviște, direct la Budapesta",
     "value": 22,
     "q": "",
     "url": "https://www.instagram.com/p/DePDFYxDQAy/"
    },
    "topval": 22
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S28 (nu există raport pentru această săptămână)"
    },
    "followers": 474,
    "top": {
     "title": "Stomatologia înseamnă uneori răbdare, încredere în medic și o colaborare continuă între pacient și echipa medicală.",
     "value": 37,
     "q": "",
     "url": "https://www.instagram.com/p/DaPpeKIjdSt/"
    },
    "topval": 37,
    "posts": 6,
    "eng_sum": 94,
    "eng_n": 6
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "followers": 474,
    "top": {
     "title": "Cu sau fără anestezie pentru Alex Stamate?",
     "value": 85,
     "q": "",
     "url": "https://www.instagram.com/reel/DanFB0Hoz9j/"
    },
    "topval": 85,
    "posts": 6,
    "eng_sum": 109,
    "eng_n": 6
   }
  },
  "DB": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "followers": 373,
    "top": {
     "title": "🦷 Poți avea un chist mare la rădăcina dintelui... și să nu simți absolut nimic.",
     "value": 9,
     "q": "",
     "url": "https://www.instagram.com/reel/Da5isV6lI_u/"
    },
    "topval": 9,
    "posts": 3,
    "eng_sum": 14,
    "eng_n": 3
   },
   "S30": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "posts": 4,
    "eng_sum": 40,
    "eng_n": 4,
    "followers": 373,
    "top": {
     "title": "🦷 De multe ori, pacienții vin pentru estetică. Și descoperă că adevărata problemă era funcțională.",
     "value": 13,
     "q": "",
     "url": "https://www.instagram.com/reel/DbLxwV8APSI/"
    },
    "topval": 13
   },
   "S31": {
    "q": {
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "posts": 3,
    "followers": 373,
    "top": {
     "title": "🦷 Unii pacienți observă ceva ciudat după tratamentul ortodontic.",
     "value": 7,
     "q": "",
     "url": "https://www.instagram.com/reel/Dbd9YCGlNaO/"
    },
    "topval": 7,
    "eng_sum": 13,
    "eng_n": 3
   },
   "S32": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 4,
    "eng_sum": 252,
    "eng_n": 4,
    "followers": 381,
    "top": {
     "title": "🎶 „Drumurile noastre poate se vor întâlni vreodată...” (reel în colaborare cu @andreiosanuzumba)",
     "value": 150,
     "q": "",
     "url": "https://www.instagram.com/reel/Dbx3oeLtI74/"
    },
    "topval": 150
   },
   "S33": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 2,
    "eng_sum": 20,
    "eng_n": 2,
    "followers": 414,
    "top": {
     "title": "Zi de chirurgie 😷🦷🤩 (Dental Blue București)",
     "value": 17,
     "q": "",
     "url": "https://www.instagram.com/reel/DcBx16osPt6/"
    },
    "topval": 17
   },
   "S34": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 1,
    "eng_sum": 7,
    "eng_n": 1,
    "followers": 414,
    "top": {
     "title": "Reel fără descriere",
     "value": 7,
     "q": "",
     "url": "https://www.instagram.com/reel/DcUFvQUAtYF/"
    },
    "topval": 7
   },
   "S35": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {
     "posts": "nicio postare în săptămână"
    },
    "posts": 0,
    "followers": 390,
    "top": {
     "title": "fără postări",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "eng_sum": null,
    "eng_n": 0
   },
   "S36": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii",
     "posts": "nicio postare în săptămână"
    },
    "posts": 0,
    "followers": 409,
    "top": {
     "title": "fără postări",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "eng_sum": null,
    "eng_n": 0
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii",
     "posts": "nicio postare în săptămână"
    },
    "posts": 0,
    "followers": 409,
    "top": {
     "title": "fără postări",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "eng_sum": null,
    "eng_n": 0
   },
   "S38": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 1,
    "eng_sum": 1,
    "eng_n": 1,
    "followers": 409,
    "top": {
     "title": "Îți lipsesc 5 sau mai mulți dinți? (reel)",
     "value": 1,
     "q": "",
     "url": "https://www.instagram.com/dental_blue_international/reel/DdbKf0cAk4p/"
    },
    "topval": 1
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 1,
    "eng_sum": 3,
    "eng_n": 1,
    "followers": 394,
    "top": {
     "title": "Dental Blue Slobozia reunited",
     "value": 3,
     "q": "",
     "url": "https://www.instagram.com/dental_blue_international/p/Ddj8fZUD9eF/"
    },
    "topval": 3
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 1,
    "eng_sum": 4,
    "eng_n": 1,
    "followers": 399,
    "top": {
     "title": "Working Dentist Day",
     "value": 4,
     "q": "",
     "url": "https://www.instagram.com/dental_blue_international/p/Dd1zcIclY38/"
    },
    "topval": 4
   },
   "S41": {
    "q": {
     "followers": "",
     "topval": ""
    },
    "note": {
     "posts": "nicio postare în săptămână"
    },
    "posts": 0,
    "eng_sum": null,
    "eng_n": 0,
    "followers": 410,
    "top": {
     "title": "fără postări",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S28 (nu există raport pentru această săptămână)"
    },
    "followers": 373,
    "top": {
     "title": "Reel în colaborare cu @andreiosanuzumba (fără text în descriere)",
     "value": 109,
     "q": "",
     "url": "https://www.instagram.com/reel/DabM1uwsw7-/"
    },
    "topval": 109,
    "posts": 5,
    "eng_sum": 192,
    "eng_n": 5
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "followers": 373,
    "top": {
     "title": "Totul pe grabă, doar 2 ore de tratament, apoi trebuie să plece din Ro...",
     "value": 26,
     "q": "",
     "url": "https://www.instagram.com/p/DaoI-GYjPK8/"
    },
    "topval": 26,
    "posts": 3,
    "eng_sum": 35,
    "eng_n": 3
   }
  }
 }
};
