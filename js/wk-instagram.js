// Date reale din rapoartele KPI Tier 1 (S29–S40), pe săptămână.
window.WEEKLY_CONFIG = {
 "channel": "Instagram",
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
  "Ritmul nostru e aproape de al Regina Maria și al Life, dar la jumătate din al DENT ESTET. Media pe 12 săptămâni: 7,6 postări pe săptămână la noi, 6,9 la Regina Maria, 6,7 la Life și 15,2 la DENT ESTET. Vârful nostru a fost 12 în S38. În S41 am avut 8 postări, față de 17 la DENT ESTET.",
  "Pe rata de engagement (engagement mediu împărțit la urmăritori) suntem peste DENT ESTET în 11 din 12 săptămâni cu cifre (0,42–1,24% față de 0,21–1,12%), peste Regina Maria în 11 și peste Life în 11. Pe engagement mediu per postare, DENT ESTET ne depășește în 3 din 12 săptămâni (S30, S35, S40).",
  "Engagementul nostru mediu pe postare (like-uri + comentarii): cea mai slabă săptămână dintre cele 12 cu cifre e S40 (19,3), cea mai bună e S33 (54,2). În S40 a fost 19,3, iar în S41 26,2 (reelul de la TEDx: 61).",
  "Urmăritori, de la prima cifră (S28) la S41: DENT ESTET +1.283 (+16,7%), noi +328 (+7,7%). Life +4,8% și Regina Maria +1,5%, dar la acestea cifrele sunt rotunjite la 0,1K. Elidadent (+7,8%) și Dental Blue (+9,9%) pornesc de la baze foarte mici.",
  "Ce a adus vârfuri: colaborări cu persoane publice (Elidadent × Bianca Iotu: 396; DENT ESTET × Maia Morgenstern: 208; Regina Maria × influenceri: 171 în vechile rapoarte, 630 în S41), campanii cu reducere (DENT ESTET, Align Smile Wallet: 380) și momentele de echipă. La noi, cele mai bune trei postări săptămânale: Reel extindere Slobozia (129/15) (144, S32); Reel update Brăila, 21 aug (likes) (97, S34); Reel umor „întrebări nepotrivite”, 13 aug (84/4) (88, S33)."
 ],
 "notes": [
  "Rapoartele KPI Tier 1 compară contul nostru cu cei 5 concurenți principali (Tier 1). Săptămânile sunt cele din rapoarte (S29–S40, ISO).",
  "Raportul pentru S29 lipsește.",
  "Engagement = like-uri + comentarii (Instagram nu arată distribuirile); unde raportul dă doar like-uri, cifra e minimă („≥”). Urmăritorii apar doar în câteva rapoarte (se păstrează ultima cifră cunoscută).",
  "Leadurile sunt din Puls (Marketing · Social Ads, „Trend săptămânal”): leaduri primite din campaniile Facebook + Instagram la un loc, pe săptămâni ISO, inclusiv telefoanele care au mai sunat. Nu se pot separa pe canal, așa că aceeași cifră apare pe ambele pagini. Puls începe de la S30.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în raport.",
  "S36–S40 au fost recitite cu skill-ul actualizat. Engagementul din aceste săptămâni e mult sub cel din rapoartele vechi (de exemplu S38 la noi: 374 față de 699, S39: 224 față de 568), deci nu se compară direct cu S30–S35. Urmăritorii din S36–S40 sunt cei de la data rulării, nu de la sfârșitul săptămânilor.",
  "S41 (5–11 octombrie) vine din raportul rulat pe 12 octombrie. Regina Maria are în S41 un reel în colaborare cu 630 de interacțiuni; fără el media ei ar fi 17,0. Raportul nu are variația față de S40 (nu a măsurat acea săptămână), dar aici S40 există și e folosit pentru variație."
 ],
 "data": {
  "DrA": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "posts": "raport lipsă",
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S28",
     "leads": "Puls are cifre începând cu S30"
    },
    "followers": 4272,
    "top": {
     "title": "raport lipsă",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S30": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 4,
    "eng_sum": 118,
    "eng_n": 4,
    "followers": 4272,
    "top": {
     "title": "Reel pasta de dinți, 22 iul (51/6)",
     "value": 57,
     "q": "",
     "url": null
    },
    "topval": 57,
    "leads": 200
   },
   "S31": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri",
     "followers": "ultima cifră: S28",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 8,
    "eng_sum": 278,
    "eng_n": 7,
    "followers": 4272,
    "top": {
     "title": "Carusel masterclass Zucchelli (likes)",
     "value": 73,
     "q": "≥",
     "url": null
    },
    "topval": 73,
    "leads": 218
   },
   "S32": {
    "q": {
     "avgeng": "≥",
     "topval": ""
    },
    "note": {
     "avgeng": "doar like-uri",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 6,
    "eng_sum": 292,
    "eng_n": 6,
    "followers": 4359,
    "top": {
     "title": "Reel extindere Slobozia (129/15)",
     "value": 144,
     "q": "",
     "url": null
    },
    "topval": 144,
    "leads": 262
   },
   "S33": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S32",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 6,
    "eng_sum": 325,
    "eng_n": 6,
    "followers": 4359,
    "top": {
     "title": "Reel umor „întrebări nepotrivite”, 13 aug (84/4)",
     "value": 88,
     "q": "",
     "url": null
    },
    "topval": 88,
    "leads": 324
   },
   "S34": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri",
     "followers": "ultima cifră: S32",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 7,
    "eng_sum": 249,
    "eng_n": 6,
    "followers": 4359,
    "top": {
     "title": "Reel update Brăila, 21 aug (likes)",
     "value": 97,
     "q": "≥",
     "url": null
    },
    "topval": 97,
    "leads": 333
   },
   "S35": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 8,
    "eng_sum": 290,
    "eng_n": 8,
    "followers": 4441,
    "top": {
     "title": "Reel „Ghid chirurgical” (72/8)",
     "value": 80,
     "q": "≥",
     "url": null
    },
    "topval": 80,
    "leads": 310
   },
   "S36": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "leads": "Facebook + Instagram, împreună",
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 6,
    "followers": 4600,
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
     "followers": "≈",
     "avgeng": "≥"
    },
    "note": {
     "leads": "Facebook + Instagram, împreună",
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii",
     "avgeng": "11 din 12 postări au engagement citit"
    },
    "posts": 12,
    "eng_sum": 374,
    "eng_n": 11,
    "followers": 4600,
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
     "followers": "≈"
    },
    "note": {
     "leads": "Facebook + Instagram, împreună",
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 7,
    "eng_sum": 135,
    "eng_n": 7,
    "followers": 4585,
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
   }
  },
  "DE": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "posts": "raport lipsă",
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S28"
    },
    "followers": 7673,
    "top": {
     "title": "raport lipsă",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S30": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "posts": 7,
    "eng_sum": 599,
    "eng_n": 7,
    "followers": 7673,
    "top": {
     "title": "Before&After fondatoare Oana Taban (299/8)",
     "value": 307,
     "q": "",
     "url": null
    },
    "topval": 307
   },
   "S31": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri",
     "followers": "ultima cifră: S28"
    },
    "posts": 14,
    "eng_sum": 282,
    "eng_n": 14,
    "followers": 7673,
    "top": {
     "title": "Carusel The Amazing Smile (likes)",
     "value": 57,
     "q": "≥",
     "url": null
    },
    "topval": 57
   },
   "S32": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri"
    },
    "posts": 16,
    "eng_sum": 528,
    "eng_n": 16,
    "followers": 8143,
    "top": {
     "title": "DE4TEENS testimonial (likes)",
     "value": 71,
     "q": "≥",
     "url": null
    },
    "topval": 71
   },
   "S33": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S32"
    },
    "posts": 15,
    "eng_sum": 385,
    "eng_n": 15,
    "followers": 8143,
    "top": {
     "title": "Interviu People of DENT ESTET (52/7)",
     "value": 59,
     "q": "",
     "url": null
    },
    "topval": 59
   },
   "S34": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri",
     "followers": "ultima cifră: S32"
    },
    "posts": 10,
    "eng_sum": 271,
    "eng_n": 10,
    "followers": 8143,
    "top": {
     "title": "Postare Genesys Arad (likes)",
     "value": 109,
     "q": "≥",
     "url": null
    },
    "topval": 109
   },
   "S35": {
    "q": {
     "avgeng": "≥",
     "topval": ""
    },
    "note": {
     "avgeng": "doar like-uri"
    },
    "posts": 16,
    "eng_sum": 675,
    "eng_n": 16,
    "followers": 8393,
    "top": {
     "title": "raportul nu dă topul",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
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
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 19,
    "eng_sum": 543,
    "eng_n": 19,
    "followers": 8944,
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
   }
  },
  "RM": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "posts": "raport lipsă",
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S28"
    },
    "followers": 13400,
    "top": {
     "title": "raport lipsă",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S30": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "posts": 5,
    "eng_sum": 116,
    "eng_n": 5,
    "followers": 13400,
    "top": {
     "title": "Reel mit alignere",
     "value": 41,
     "q": "",
     "url": null
    },
    "topval": 41
   },
   "S31": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri",
     "followers": "ultima cifră: S28"
    },
    "posts": 7,
    "eng_sum": 210,
    "eng_n": 7,
    "followers": 13400,
    "top": {
     "title": "Colab influencer pe contul creatoarei (likes)",
     "value": 84,
     "q": "≥",
     "url": null
    },
    "topval": 84
   },
   "S32": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri"
    },
    "posts": 8,
    "eng_sum": 296,
    "eng_n": 8,
    "followers": 13500,
    "top": {
     "title": "Colab ana_maria_guran (likes)",
     "value": 171,
     "q": "≥",
     "url": null
    },
    "topval": 171
   },
   "S33": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S32"
    },
    "posts": 6,
    "eng_sum": 93,
    "eng_n": 6,
    "followers": 13500,
    "top": {
     "title": "Reel implantologie Iași (24/1)",
     "value": 25,
     "q": "",
     "url": null
    },
    "topval": 25
   },
   "S34": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri",
     "followers": "ultima cifră: S32"
    },
    "posts": 7,
    "eng_sum": 144,
    "eng_n": 7,
    "followers": 13500,
    "top": {
     "title": "Reel Academia (likes)",
     "value": 32,
     "q": "≥",
     "url": null
    },
    "topval": 32
   },
   "S35": {
    "q": {
     "avgeng": "≥",
     "topval": ""
    },
    "note": {
     "avgeng": "doar like-uri"
    },
    "posts": 6,
    "eng_sum": 128,
    "eng_n": 6,
    "followers": 13500,
    "top": {
     "title": "raportul nu dă topul",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
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
     "followers": "rotunjit în pagină · valoare de la data rulării",
     "avgeng": "8 din 9 postări au engagement citit"
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
   }
  },
  "Life": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "posts": "raport lipsă",
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S28"
    },
    "followers": 12600,
    "top": {
     "title": "raport lipsă",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S30": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "posts": 6,
    "eng_sum": 62,
    "eng_n": 6,
    "followers": 12600,
    "top": {
     "title": "Serie interviuri medici (21/4)",
     "value": 25,
     "q": "",
     "url": null
    },
    "topval": 25
   },
   "S31": {
    "q": {
     "topval": "≥"
    },
    "note": {
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S28"
    },
    "posts": 8,
    "followers": 12600,
    "top": {
     "title": "Din tabelul raportului (likes)",
     "value": 36,
     "q": "≥",
     "url": null
    },
    "topval": 36
   },
   "S32": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri"
    },
    "posts": 7,
    "eng_sum": 74,
    "eng_n": 7,
    "followers": 12800,
    "top": {
     "title": "Mențiune Gabriela Cristea (likes)",
     "value": 11,
     "q": "≥",
     "url": null
    },
    "topval": 11
   },
   "S33": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S32"
    },
    "posts": 7,
    "eng_sum": 39,
    "eng_n": 7,
    "followers": 12800,
    "top": {
     "title": "",
     "value": 9,
     "q": "",
     "url": null
    },
    "topval": 9
   },
   "S34": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri",
     "followers": "ultima cifră: S32"
    },
    "posts": 7,
    "eng_sum": 39,
    "eng_n": 7,
    "followers": 12800,
    "top": {
     "title": "Colab @bygabrielacristea (likes)",
     "value": 12,
     "q": "≥",
     "url": null
    },
    "topval": 12
   },
   "S35": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri"
    },
    "posts": 8,
    "eng_sum": 148,
    "eng_n": 8,
    "followers": 13000,
    "top": {
     "title": "Carusel „fren lingual” (likes)",
     "value": 76,
     "q": "≥",
     "url": null
    },
    "topval": 76
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
     "followers": "rotunjit în pagină · valoare de la data rulării"
    },
    "posts": 7,
    "followers": 13200,
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
   }
  },
  "Eli": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "posts": "raport lipsă",
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S28"
    },
    "followers": 474,
    "top": {
     "title": "raport lipsă",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S30": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "posts": 6,
    "eng_sum": 61,
    "eng_n": 6,
    "followers": 474,
    "top": {
     "title": "Promo finanțare BT (14/2)",
     "value": 16,
     "q": "",
     "url": null
    },
    "topval": 16
   },
   "S31": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri",
     "followers": "ultima cifră: S28"
    },
    "posts": 6,
    "eng_sum": 55,
    "eng_n": 6,
    "followers": 474,
    "top": {
     "title": "Reel examen radiologic kids (likes)",
     "value": 20,
     "q": "≥",
     "url": null
    },
    "topval": 20
   },
   "S32": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri"
    },
    "posts": 5,
    "eng_sum": 25,
    "eng_n": 5,
    "followers": 479,
    "top": {
     "title": "Raportat 1–15 like-uri / postare",
     "value": 15,
     "q": "≥",
     "url": null
    },
    "topval": 15
   },
   "S33": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S32"
    },
    "posts": 5,
    "eng_sum": 54,
    "eng_n": 5,
    "followers": 479,
    "top": {
     "title": "Dilemă canal vs extracție (10/3)",
     "value": 14,
     "q": "",
     "url": null
    },
    "topval": 14
   },
   "S34": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri",
     "followers": "ultima cifră: S32"
    },
    "posts": 4,
    "eng_sum": 26,
    "eng_n": 4,
    "followers": 479,
    "top": {
     "title": "Reel eMAG / feed (likes)",
     "value": 9,
     "q": "≥",
     "url": null
    },
    "topval": 9
   },
   "S35": {
    "q": {
     "avgeng": "≥",
     "topval": ""
    },
    "note": {
     "avgeng": "doar like-uri"
    },
    "posts": 5,
    "eng_sum": 48,
    "eng_n": 5,
    "followers": 488,
    "top": {
     "title": "raportul nu dă topul",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
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
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 7,
    "eng_sum": 60,
    "eng_n": 7,
    "followers": 507,
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
   }
  },
  "DB": {
   "S29": {
    "q": {
     "topval": ""
    },
    "note": {
     "posts": "raport lipsă",
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S28"
    },
    "followers": 373,
    "top": {
     "title": "raport lipsă",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S30": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S28"
    },
    "posts": 4,
    "eng_sum": 34,
    "eng_n": 4,
    "followers": 373,
    "top": {
     "title": "Retratament endodontic (10/3)",
     "value": 13,
     "q": "",
     "url": null
    },
    "topval": 13
   },
   "S31": {
    "q": {
     "topval": ""
    },
    "note": {
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S28"
    },
    "posts": 0,
    "followers": 373,
    "top": {
     "title": "fără postări",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S32": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri"
    },
    "posts": 4,
    "eng_sum": 166,
    "eng_n": 4,
    "followers": 381,
    "top": {
     "title": "Reel Zumba (likes)",
     "value": 102,
     "q": "≥",
     "url": null
    },
    "topval": 102
   },
   "S33": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S32"
    },
    "posts": 2,
    "eng_sum": 17,
    "eng_n": 2,
    "followers": 381,
    "top": {
     "title": "Reel „Zi de chirurgie”",
     "value": 15,
     "q": "",
     "url": null
    },
    "topval": 15
   },
   "S34": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri",
     "followers": "ultima cifră: S32"
    },
    "posts": 1,
    "eng_sum": 4,
    "eng_n": 1,
    "followers": 381,
    "top": {
     "title": "Singura postare (likes)",
     "value": 4,
     "q": "≥",
     "url": null
    },
    "topval": 4
   },
   "S35": {
    "q": {
     "topval": ""
    },
    "note": {
     "avgeng": "raportul nu dă engagement"
    },
    "posts": 0,
    "followers": 390,
    "top": {
     "title": "fără postări",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
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
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 1,
    "eng_sum": 3,
    "eng_n": 1,
    "followers": 405,
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
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 1,
    "eng_sum": 4,
    "eng_n": 1,
    "followers": 405,
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
   }
  }
 }
};
