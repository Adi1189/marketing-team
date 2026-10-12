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
  "DENT ESTET ne depășește la urmăritori: 8.610 față de 6.799 la noi. De la prima cifră (S29), ei au crescut cu 2.759 (+47,2%), noi cu 88 (+1,3%). Life are 7.028, Regina Maria 5.561, Elidadent 1.913, Dental Blue 886.",
  "Ritmul nostru e variabil. Videouri pe săptămână (S29–S40): 2 → 3 → 6 → 2 → 5 → 5 → 4 → 4 → 5 → 2 → 5 → 7. Media e 4,2, față de 6,0 la DENT ESTET, 5,5 la Life, 2,9 la Regina Maria și 2,4 la Elidadent. Cea mai bună săptămână a noastră e S40 (7 videouri). S41 nu intră aici: a fost citită fără login, deci cifrele sunt minime.",
  "Vizualizări totale pe săptămână (S36–S40): noi 4.401 → 5.130 → 1.732 → 4.701 → 6.266; DENT ESTET 7.298 → 2.138 → 2.746 → 2.073 → 3.688. Suntem peste DENT ESTET în 3 din 5 săptămâni, peste Regina Maria în 4, peste Life în 3 și peste Elidadent în 4. În S41 (≥, fără login) avem 2.217, față de 2.929 la DENT ESTET și 3.161 la Regina Maria.",
  "Media pe videoclip (S36–S40): noi 866–1100 vizualizări, DENT ESTET 305–738, Regina Maria 212–1370. În S41 (≥) media noastră e 739, a Elidadent 1051, a Regina Maria 790, a DENT ESTET 293.",
  "Două vârfuri izolate nu sunt tendință: Elidadent în S38 (20.800, ≈, cu Bianca Iotu) și Life în S36 (11.200, ≈, cu Gabriela Cristea). Cel mai bun video al nostru din S36–S41 are 1.776 de vizualizări (S36); în S41, videoclipul de la TEDx are 962."
 ],
 "notes": [
  "Rapoartele KPI Tier 1 compară contul nostru cu cei 5 concurenți principali (Tier 1). Săptămânile sunt cele din rapoarte (S29–S40, ISO).",
  "Vizualizările totale pe cont există din S36 (citite pe 12 octombrie). Pentru S29–S35, rapoartele vechi dau doar vizualizările celui mai vizionat video, deci acolo „Total vizualizări” și media apar cu „–”.",
  "Dental Blue nu a postat nimic în S36–S40 și a postat doar 3 videoclipuri în celelalte săptămâni; Dental Safari nu are cont TikTok.",
  "Leadurile din Puls sunt doar pentru Facebook + Instagram; pentru acest canal nu avem o sursă de leaduri.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în raport.",
  "Urmăritorii din S36–S40 sunt cei de la data rulării (nu de la sfârșitul săptămânilor), de aceea apar cu „≈”; pentru S29–S35 sunt cifrele din rapoartele vechi, iar în S34 păstrez ultima cifră cunoscută.",
  "S41 (5–11 octombrie) a fost citită pe 12 octombrie fără cont TikTok autentificat: unele postări sunt ascunse vizitatorilor nelogați, deci numărul de postări și totalul de vizualizări sunt valori minime („≥”) la toate conturile și nu se compară direct cu S36–S40. Urmăritorii sunt afișați exact."
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
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 4,
    "top": {
     "title": "Lucrează mai inteligent, nu mai mult! „Din experiență, pentru practică.”",
     "value": 1776,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7681621165898468610"
    },
    "topval": 1776,
    "followers": 6799,
    "views": 4401
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 5,
    "top": {
     "title": "Când obiectivele sunt clare, mesajul ajunge repede la toată echipa. 😂 Noi glumim, dar de programări ne ocupăm",
     "value": 1372,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7683466345090010390"
    },
    "topval": 1372,
    "followers": 6799,
    "views": 5130
   },
   "S38": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 2,
    "top": {
     "title": "Unele lucruri te lovesc când te aștepți mai puțin. 😅 Inflația, de exemplu. Sau… o cutie. Din fericire, avem ș…",
     "value": 1219,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7686422485625048342"
    },
    "topval": 1219,
    "followers": 6799,
    "views": 1732
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 5,
    "top": {
     "title": "„Sunt mulțumită cu dinții mei!” 🤍 Mihaela a venit la noi în urma recomandărilor primite de la prieteni, iar l…",
     "value": 1464,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7688294775279095062"
    },
    "topval": 1464,
    "followers": 6799,
    "views": 4701
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 7,
    "top": {
     "title": "Hei, Leo! 😎 Când auzi că îți poți vedea viitorul zâmbet înainte să începi tratamentul, parcă vrei și o dovadă…",
     "value": 1432,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7690948766622371094"
    },
    "topval": 1432,
    "followers": 6799,
    "views": 6266
   },
   "S41": {
    "q": {
     "posts": "≥",
     "views": "≥",
     "topval": ""
    },
    "note": {
     "posts": "citit fără login: unele postări pot fi ascunse",
     "views": "citit fără login: valoare minimă"
    },
    "posts": 3,
    "views": 2217,
    "followers": 6799,
    "top": {
     "title": "„Nu există scurtături către succes.” La TEDx Tudor Vianu, Dr. Virginia Ardeleanu…",
     "value": 962,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7693569974773812502"
    },
    "topval": 962
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
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 11,
    "top": {
     "title": "Sensibilitatea la rece înseamnă automat o carie? (Dr. Daria Dăngeanu)",
     "value": 911,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7681602284584717590"
    },
    "topval": 911,
    "followers": 8610,
    "views": 7298
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 7,
    "top": {
     "title": "Dr. Daria Dăngeanu explică de ce aciditatea băuturilor poate conta la fel de mult ca zahărul",
     "value": 338,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7683881377095421186"
    },
    "topval": 338,
    "followers": 8610,
    "views": 2138
   },
   "S38": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 8,
    "top": {
     "title": "„Aici sunt înțeleasă, sunt ascultată.” - Maia Morgenstern Când ne încredințăm sănătatea unui medic, avem nevoi…",
     "value": 522,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7686784651930930455"
    },
    "topval": 522,
    "followers": 8610,
    "views": 2746
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
    "top": {
     "title": "Ai auzit de tomografia computerizată dentară (CBCT) și vrei să afli ce rol poate avea în tratamentele de canal…",
     "value": 404,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7688338113097256214"
    },
    "topval": 404,
    "followers": 8610,
    "views": 2073
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 5,
    "top": {
     "title": "În tratamentul bolii parodontale, există zone în care instrumentele clasice ajung mai greu. Laserul poate acți…",
     "value": 874,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7692016899873443094"
    },
    "topval": 874,
    "followers": 8610,
    "views": 3688
   },
   "S41": {
    "q": {
     "posts": "≥",
     "views": "≥",
     "topval": ""
    },
    "note": {
     "posts": "citit fără login: unele postări pot fi ascunse",
     "views": "citit fără login: valoare minimă"
    },
    "posts": 10,
    "views": 2929,
    "followers": 8610,
    "top": {
     "title": "Așa arată o zi din viața noastră la DENT ESTET",
     "value": 476,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7693158476939283734"
    },
    "topval": 476
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
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 2,
    "top": {
     "title": "Alignerele nu produc recesie gingivală. Diagnosticul greșit, da.",
     "value": 1025,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7680625441664765206"
    },
    "topval": 1025,
    "followers": 5561,
    "views": 1925
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 2,
    "top": {
     "title": "Ani de zile, pacientul nostru nu a mai putut mânca normal. Nici zâmbi cu adevărat. Toți dinții erau tociți",
     "value": 1666,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7683889889632374038"
    },
    "topval": 1666,
    "followers": 5561,
    "views": 2739
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
    "top": {
     "title": "Un implant nu înseamnă doar înlocuirea unui dinte, ci reconstruirea unei părți din zâmbetul tău astfel încât r…",
     "value": 1695,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7686142160327986454"
    },
    "topval": 1695,
    "followers": 5561,
    "views": 4435
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 1,
    "top": {
     "title": "Un dinte lipsă nu lasă doar un loc liber. Lasă loc pentru schimbări. Când un dinte este pierdut, întregul sist…",
     "value": 212,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7689489224923417878"
    },
    "topval": 212,
    "followers": 5561,
    "views": 212
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 3,
    "top": {
     "title": "De Ziua Mondială a Zâmbetului, îți urăm să ai cât mai multe motive să zâmbești alături de cei dragi 🤝 Tu bucu…",
     "value": 1067,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7692013929706442006"
    },
    "topval": 1067,
    "followers": 5561,
    "views": 1948
   },
   "S41": {
    "q": {
     "posts": "≥",
     "views": "≥",
     "topval": ""
    },
    "note": {
     "posts": "citit fără login: unele postări pot fi ascunse",
     "views": "citit fără login: valoare minimă"
    },
    "posts": 4,
    "views": 3161,
    "followers": 5561,
    "top": {
     "title": "Nu tratăm un dinte. Tratăm felul în care funcționează întreg…",
     "value": 1165,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7694303661874515222"
    },
    "topval": 1165
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
     "topval": "≈",
     "followers": "≈",
     "views": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii",
     "views": "aproximativ (cifre rotunjite în pagină)"
    },
    "posts": 5,
    "top": {
     "title": "La o lună de la cimentarea fațetelor dentare, Gabriela Cristea a revenit la Life Dental Spa",
     "value": 11200,
     "q": "≈",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7681260961214319904"
    },
    "topval": 11200,
    "followers": 7028,
    "views": 14434
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
    "top": {
     "title": "Carii ascunse, fisuri dentare, retracții gingivale sau sângerări? Unele probleme nu provoacă simptome în st…",
     "value": 969,
     "q": "",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7684178086404934944"
    },
    "topval": 969,
    "followers": 7028,
    "views": 3627
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
    "top": {
     "title": "Te speli corect pe dinți de două ori pe zi și, totuși, observi depuneri de tartru? Acest lucru se poate întâmp…",
     "value": 893,
     "q": "",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7686009034268331297"
    },
    "topval": 893,
    "followers": 7028,
    "views": 3276
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 3,
    "top": {
     "title": "Frica de dentist se poate forma încă din copilărie, mai ales atunci când primele experiențe stomatologice sunt…",
     "value": 967,
     "q": "",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7688293518036503840"
    },
    "topval": 967,
    "followers": 7028,
    "views": 1941
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 5,
    "top": {
     "title": "Ți-e teamă de dentist? Poate te îngrijorează ideea de durere sau ai avut în trecut o experiență neplăcută, iar…",
     "value": 899,
     "q": "",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7690897542409702689"
    },
    "topval": 899,
    "followers": 7028,
    "views": 3127
   },
   "S41": {
    "q": {
     "posts": "≥",
     "views": "≥",
     "topval": ""
    },
    "note": {
     "posts": "citit fără login: unele postări pot fi ascunse",
     "views": "citit fără login: valoare minimă"
    },
    "posts": 3,
    "views": 1722,
    "followers": 7028,
    "top": {
     "title": "Ai nevoie de o soluție fixă pentru înlocuirea mai multor dinți…",
     "value": 1046,
     "q": "",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7693786316923817248"
    },
    "topval": 1046
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
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 4,
    "top": {
     "title": "Vouă vi se întâmplă? #elidadent #instrumentar #targoviste",
     "value": 1194,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7680251875307916566"
    },
    "topval": 1194,
    "followers": 1913,
    "views": 3246
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 1,
    "top": {
     "title": "Când asistenta îți spune să lași problemele afară și tu o iei prea literal. 😂🦷 #elidadent #asistent",
     "value": 581,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7683945493105216790"
    },
    "topval": 581,
    "followers": 1913,
    "views": 581
   },
   "S38": {
    "q": {
     "topval": "≈",
     "followers": "≈",
     "views": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii",
     "views": "aproximativ (cifre rotunjite în pagină)"
    },
    "posts": 6,
    "top": {
     "title": "Toată lumea are aceeași curiozitate: “Bianca și-a făcut albire dentară?” 👀🦷 Am avut-o pe Bianca în vizită la…",
     "value": 20800,
     "q": "≈",
     "url": "https://www.tiktok.com/@elidadent/video/7686182757097164054"
    },
    "topval": 20800,
    "followers": 1913,
    "views": 25930
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 2,
    "top": {
     "title": "Când filmezi cu Bianca de la Insula Iubirii, e clar că nu ai cum să te plictisești. 😂🎬 Am filmat, am râs și…",
     "value": 1289,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7688038687363419414"
    },
    "topval": 1289,
    "followers": 1913,
    "views": 1724
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 3,
    "top": {
     "title": "Totul despre lucrarea provizorie 🦷 Ce rol are, cât timp se poartă și de ce este atât de importantă? Vezi ce s…",
     "value": 866,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7691766950967495958"
    },
    "topval": 866,
    "followers": 1913,
    "views": 1998
   },
   "S41": {
    "q": {
     "posts": "≥",
     "views": "≥",
     "topval": ""
    },
    "note": {
     "posts": "citit fără login: unele postări pot fi ascunse",
     "views": "citit fără login: valoare minimă"
    },
    "posts": 2,
    "views": 2102,
    "followers": 1913,
    "top": {
     "title": "Amâni vizita la stomatolog din cauza costurilor? La Elidadent…",
     "value": 1196,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7693232300917673238"
    },
    "topval": 1196
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
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 886,
    "views": 0
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 886,
    "views": 0
   },
   "S38": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 886,
    "views": 0
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 886,
    "views": 0
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 886,
    "views": 0
   },
   "S41": {
    "q": {
     "posts": "≥",
     "views": "≥",
     "topval": ""
    },
    "note": {
     "posts": "citit fără login: unele postări pot fi ascunse",
     "views": "citit fără login: valoare minimă"
    },
    "posts": 0,
    "views": 0,
    "followers": 886,
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
