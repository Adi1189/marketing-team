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
  "Ritmul nostru e aproape de al Regina Maria și al Life, dar la jumătate din al DENT ESTET. Media pe 11 săptămâni: 7,4 postări pe săptămână la noi, 7,0 la Regina Maria, 7,1 la Life și 14,5 la DENT ESTET. Vârful nostru a fost 13 în S38. În S40 am coborât la 6, în timp ce DENT ESTET a urcat la 19.",
  "Pe rata de engagement stăm bine. Suntem peste DENT ESTET în 8 din 9 săptămâni cu cifre (0,46–1,39% față de 0,25–1,08%) și peste Regina Maria și Life în toate. Pe engagement mediu per postare, DENT ESTET ne depășește în 4 din 9 săptămâni (S30, S35, S39, S40). În S30 și S39 pe un vârf (307 și 380).",
  "S40 e cea mai slabă săptămână a noastră dintre cele 9 cu cifre. Media a căzut la 21,0 pe postare, de la 63,1 în S39. S39 a fost trasă de două urări de ziua medicilor (257 din 568). Fără ele media e 44,4, deci S40 rămâne sub jumătate din acel nivel.",
  "Urmăritori: DENT ESTET a crescut cu 1.222 (+15,9%) din S28 până în S40, noi cu 287 (+6,7%). Life a crescut cu +4,0% și Regina Maria cu +1,5%, dar la acestea cifrele sunt rotunjite la 0,1K. Elidadent (+6,8%) și Dental Blue (+7,0%) cresc procentual la fel ca noi, de la baze foarte mici.",
  "Ce a adus vârfuri: colaborări cu persoane publice (Elidadent × Bianca Iotu: 396; DENT ESTET × Maia Morgenstern: 208; Regina Maria × influenceri: 171), campanii cu reducere (DENT ESTET, Align Smile Wallet: 380) și momentele de echipă. La noi: urarea Dr. Arina Lupu (150), reelul despre extinderea Slobozia (144) și postarea CARE Forum (136)."
 ],
 "notes": [
  "Rapoartele KPI Tier 1 compară contul nostru cu cei 5 concurenți principali (Tier 1). Săptămânile sunt cele din rapoarte (S29–S40, ISO).",
  "Raportul pentru S29 lipsește. În S36 și S37 rapoartele dau doar numărul aproximativ de postări, fără engagement.",
  "Engagement = like-uri + comentarii (Instagram nu arată distribuirile); unde raportul dă doar like-uri, cifra e minimă („≥”). Urmăritorii apar doar în câteva rapoarte (se păstrează ultima cifră cunoscută).",
  "Leadurile sunt din Puls (Marketing · Social Ads, „Trend săptămânal”): leaduri primite din campaniile Facebook + Instagram la un loc, pe săptămâni ISO, inclusiv telefoanele care au mai sunat. Nu se pot separa pe canal, așa că aceeași cifră apare pe ambele pagini. Puls începe de la S30.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în raport."
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
     "posts": "≈",
     "topval": "≥"
    },
    "note": {
     "avgeng": "raportul nu dă engagement",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 6,
    "followers": 4461,
    "top": {
     "title": "Doar o parte din postări au cifre (58/4)",
     "value": 62,
     "q": "≥",
     "url": null
    },
    "topval": 62,
    "leads": 346
   },
   "S37": {
    "q": {
     "posts": "≈",
     "topval": "≥"
    },
    "note": {
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S36",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 8,
    "followers": 4461,
    "top": {
     "title": "O singură postare cu cifre",
     "value": 13,
     "q": "≥",
     "url": null
    },
    "topval": 13,
    "leads": 312
   },
   "S38": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 13,
    "eng_sum": 699,
    "eng_n": 13,
    "followers": 4505,
    "top": {
     "title": "Postare CARE Forum, 20 sept (130/6)",
     "value": 136,
     "q": "",
     "url": null
    },
    "topval": 136,
    "leads": 328
   },
   "S39": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S38",
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 9,
    "eng_sum": 568,
    "eng_n": 9,
    "followers": 4505,
    "top": {
     "title": "Urare Dr. Arina Lupu (92/58)",
     "value": 150,
     "q": "",
     "url": null
    },
    "topval": 150,
    "leads": 284
   },
   "S40": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "leads": "Facebook + Instagram, împreună"
    },
    "posts": 6,
    "eng_sum": 126,
    "eng_n": 6,
    "followers": 4559,
    "top": {
     "title": "Reel umor, 2 oct (36/1)",
     "value": 37,
     "q": "",
     "url": null
    },
    "topval": 37,
    "leads": 380
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
     "topval": "≥"
    },
    "note": {
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S35"
    },
    "posts": 19,
    "followers": 8393,
    "top": {
     "title": "Doar o parte din postări au cifre (65/1)",
     "value": 66,
     "q": "≥",
     "url": null
    },
    "topval": 66
   },
   "S37": {
    "q": {
     "posts": "≈",
     "topval": ""
    },
    "note": {
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S35"
    },
    "posts": 10,
    "followers": 8393,
    "top": {
     "title": "raportul nu dă cifre",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S38": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 19,
    "eng_sum": 701,
    "eng_n": 19,
    "followers": 8393,
    "top": {
     "title": "Carusel „Nu am os pentru implant?”",
     "value": 136,
     "q": "",
     "url": null
    },
    "topval": 136
   },
   "S39": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 14,
    "eng_sum": 1169,
    "eng_n": 14,
    "followers": 8393,
    "top": {
     "title": "Campania Align Smile Wallet (379/1)",
     "value": 380,
     "q": "",
     "url": null
    },
    "topval": 380
   },
   "S40": {
    "q": {
     "avgeng": "≥",
     "topval": ""
    },
    "note": {
     "avgeng": "doar like-uri"
    },
    "posts": 19,
    "eng_sum": 399,
    "eng_n": 14,
    "followers": 8895,
    "top": {
     "title": "Anunț LIVE ProTV (73/1)",
     "value": 74,
     "q": "",
     "url": null
    },
    "topval": 74
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
     "topval": ""
    },
    "note": {
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S35"
    },
    "posts": 6,
    "followers": 13500,
    "top": {
     "title": "raportul nu dă cifre",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S37": {
    "q": {
     "topval": ""
    },
    "note": {
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S35"
    },
    "posts": 7,
    "followers": 13500,
    "top": {
     "title": "raportul nu dă cifre",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S38": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 9,
    "eng_sum": 317,
    "eng_n": 9,
    "followers": 13500,
    "top": {
     "title": "Colab @drdianapopescu, gingii",
     "value": 78,
     "q": "",
     "url": null
    },
    "topval": 78
   },
   "S39": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 7,
    "eng_sum": 221,
    "eng_n": 7,
    "followers": 13500,
    "top": {
     "title": "Notă „Lucrăm la V2 a campaniei” (99/2)",
     "value": 101,
     "q": "",
     "url": null
    },
    "topval": 101
   },
   "S40": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri"
    },
    "posts": 9,
    "eng_sum": 234,
    "eng_n": 8,
    "followers": 13600,
    "top": {
     "title": "Reel Ziua Zâmbetului (71/6); un reel cu like-uri ascunse",
     "value": 77,
     "q": "≥",
     "url": null
    },
    "topval": 77
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
     "posts": "≈",
     "topval": ""
    },
    "note": {
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S35"
    },
    "posts": 9,
    "followers": 13000,
    "top": {
     "title": "raportul nu dă cifre",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S37": {
    "q": {
     "topval": ""
    },
    "note": {
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S35"
    },
    "posts": 8,
    "followers": 13000,
    "top": {
     "title": "raportul nu dă cifre",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S38": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 5,
    "eng_sum": 24,
    "eng_n": 5,
    "followers": 13000,
    "top": {
     "title": "Reel carii fără durere",
     "value": 11,
     "q": "",
     "url": null
    },
    "topval": 11
   },
   "S39": {
    "q": {
     "avgeng": "≥",
     "topval": "≥"
    },
    "note": {
     "avgeng": "doar like-uri",
     "followers": "ultima cifră: S35"
    },
    "posts": 6,
    "eng_sum": 16,
    "eng_n": 5,
    "followers": 13000,
    "top": {
     "title": "O postare fără cifre în raport",
     "value": 7,
     "q": "≥",
     "url": null
    },
    "topval": 7
   },
   "S40": {
    "q": {
     "topval": ""
    },
    "note": {
     "avgeng": "raportul nu dă engagement"
    },
    "posts": 7,
    "followers": 13100,
    "top": {
     "title": "Carusel „Guvernele se schimbă”",
     "value": 8,
     "q": "",
     "url": null
    },
    "topval": 8
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
     "topval": ""
    },
    "note": {
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S35"
    },
    "posts": 5,
    "followers": 488,
    "top": {
     "title": "raportul nu dă cifre",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S37": {
    "q": {
     "topval": ""
    },
    "note": {
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S35"
    },
    "posts": 5,
    "followers": 488,
    "top": {
     "title": "raportul nu dă cifre",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S38": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 5,
    "eng_sum": 435,
    "eng_n": 5,
    "followers": 488,
    "top": {
     "title": "Colab Bianca Iotu (Insula Iubirii), 394/2",
     "value": 396,
     "q": "",
     "url": null
    },
    "topval": 396
   },
   "S39": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 6,
    "eng_sum": 88,
    "eng_n": 6,
    "followers": 488,
    "top": {
     "title": "Colab Insula Iubirii (38/2)",
     "value": 40,
     "q": "",
     "url": null
    },
    "topval": 40
   },
   "S40": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {},
    "posts": 7,
    "eng_sum": 58,
    "eng_n": 7,
    "followers": 506,
    "top": {
     "title": "Reel „Te-a durut un dinte…”",
     "value": 15,
     "q": "",
     "url": null
    },
    "topval": 15
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
     "topval": ""
    },
    "note": {
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S35"
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
   "S37": {
    "q": {
     "topval": ""
    },
    "note": {
     "avgeng": "raportul nu dă engagement",
     "followers": "ultima cifră: S35"
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
   "S38": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {
     "followers": "ultima cifră: S35"
    },
    "posts": 1,
    "eng_sum": 15,
    "eng_n": 1,
    "followers": 390,
    "top": {
     "title": "Promo implant Slobozia",
     "value": 15,
     "q": "",
     "url": null
    },
    "topval": 15
   },
   "S39": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {},
    "posts": 1,
    "eng_sum": 52,
    "eng_n": 1,
    "followers": 394,
    "top": {
     "title": "„Dental Blue Slobozia reunited” (45/7)",
     "value": 52,
     "q": "",
     "url": null
    },
    "topval": 52
   },
   "S40": {
    "q": {
     "avgeng": "",
     "topval": ""
    },
    "note": {},
    "posts": 1,
    "eng_sum": 4,
    "eng_n": 1,
    "followers": 399,
    "top": {
     "title": "„Working Dentist Day”",
     "value": 4,
     "q": "",
     "url": null
    },
    "topval": 4
   }
  }
 }
};
