// Date reale din rapoartele KPI Tier 1 (12 săptămâni, S29–S40), grupate pe luni cum apar în rapoarte.
// Iulie = S29–S31 · August = S32–S35 · Septembrie = S36–S40.
window.REPORT_CONFIG = {
 "channel": "Instagram",
 "demo": false,
 "kpis": [
  {
   "key": "posts",
   "label": "Număr de postări",
   "hint": "postări în feed + Reels publicate în perioadă (Story-urile nu sunt numărate)",
   "type": "num",
   "additive": true
  },
  {
   "key": "eng_sum",
   "label": "Engagement total",
   "hint": "like-uri + comentarii",
   "type": "num",
   "additive": true,
   "hidden": true
  },
  {
   "key": "eng_n",
   "label": "Postări cu engagement numărat",
   "hint": "postările pentru care raportul are cifre",
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
   "hint": "câți urmăritori are contul, după ultimul raport din perioadă",
   "type": "num",
   "additive": "last"
  },
  {
   "key": "leads",
   "label": "Număr de leaduri",
   "hint": "leaduri primite din campaniile Meta; Facebook + Instagram împreună, nu se pot separa pe canal",
   "type": "num",
   "additive": true
  }
 ],
 "top": {
  "title": "Top postarea lunii · Dr. Ardeleanu vs concurența",
  "titleYtd": "Top postarea perioadei · Dr. Ardeleanu vs concurența",
  "mode": "brands",
  "metricLabel": "Engagement",
  "showMonth": true
 },
 "notes": [
  "Perioadele sunt grupate ca în rapoartele KPI: iulie = S29–S31, august = S32–S35, septembrie = S36–S40.",
  "Raportul pentru S29 (13–19 iulie) lipsește, deci iulie are doar S30 și S31.",
  "Engagement = like-uri + comentarii (Instagram nu arată distribuirile). În S31, S32, S34 și S35 raportul dă doar like-uri, de aceea cifrele din iulie și august sunt minime („≥”).",
  "S36 și S37: rapoartele dau doar numărul aproximativ de postări (≈), fără engagement, deci septembrie are engagement din 3 din 5 săptămâni.",
  "Urmăritorii vin doar din câteva rapoarte (S28, S32, S35, S36, S38, S40); pentru fiecare lună e ultima cifră disponibilă.",
  "Leadurile sunt din Puls (Monthly brief → Pacienți): leaduri primite din campaniile Facebook + Instagram, la un loc (aceeași cifră pe ambele pagini, pentru că nu se pot separa pe canal). Între paranteze „noi (unice)” = telefoane la prima apariție. La iulie, variația (−9%) e cea din Puls.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în rapoarte.",
  "Top postarea lunii = cea mai bună dintre topurile săptămânale ale lunii (rapoartele dau câte un top pe săptămână). „≥” apare când o săptămână din lună nu are cifre sau cifra e doar un eșantion. Linkurile postărilor nu sunt în rapoarte."
 ],
 "data": {
  "2026-07": {
   "posts": 12,
   "eng_sum": 396,
   "eng_n": 11,
   "leads": 1264,
   "q": {
    "posts": "≥",
    "avgeng": "≥"
   },
   "note": {
    "posts": "2 din 3 săpt. (lipsește S29)",
    "avgeng": "2 din 3 săpt.; unele săpt. doar like-uri",
    "followers": "la S28 (6–12 iul)",
    "leads": "Facebook + Instagram, împreună · noi (unice): 836"
   },
   "followers": 4272,
   "vs": {
    "leads": -9
   },
   "topPosts": {
    "DrA": {
     "title": "Carusel masterclass Zucchelli (likes)",
     "value": 73,
     "q": "≥",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    },
    "DE": {
     "title": "Before&After fondatoare Oana Taban (299/8)",
     "value": 307,
     "q": "≥",
     "week": "S30",
     "range": "20–26 iul",
     "url": null
    },
    "RM": {
     "title": "Colab influencer pe contul creatoarei (likes)",
     "value": 84,
     "q": "≥",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    },
    "Life": {
     "title": "Din tabelul raportului (likes)",
     "value": 36,
     "q": "≥",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    },
    "Eli": {
     "title": "Reel examen radiologic kids (likes)",
     "value": 20,
     "q": "≥",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    },
    "DB": {
     "title": "Retratament endodontic (10/3)",
     "value": 13,
     "q": "≥",
     "week": "S30",
     "range": "20–26 iul",
     "url": null
    }
   }
  },
  "2026-08": {
   "posts": 27,
   "eng_sum": 1156,
   "eng_n": 26,
   "leads": 1366,
   "q": {
    "avgeng": "≥"
   },
   "note": {
    "posts": "4 din 4 săpt.",
    "avgeng": "4 din 4 săpt.; unele săpt. doar like-uri",
    "followers": "la S35 (24–30 aug)",
    "leads": "Facebook + Instagram, împreună · noi (unice): 832"
   },
   "followers": 4441,
   "topPosts": {
    "DrA": {
     "title": "Reel extindere Slobozia (129/15)",
     "value": 144,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": null
    },
    "DE": {
     "title": "Postare Genesys Arad (likes)",
     "value": 109,
     "q": "≥",
     "week": "S34",
     "range": "17–23 aug",
     "url": null
    },
    "RM": {
     "title": "Colab ana_maria_guran (likes)",
     "value": 171,
     "q": "≥",
     "week": "S32",
     "range": "3–9 aug",
     "url": null
    },
    "Life": {
     "title": "Carusel „fren lingual” (likes)",
     "value": 76,
     "q": "≥",
     "week": "S35",
     "range": "24–30 aug",
     "url": null
    },
    "Eli": {
     "title": "Raportat 1–15 like-uri / postare",
     "value": 15,
     "q": "≥",
     "week": "S32",
     "range": "3–9 aug",
     "url": null
    },
    "DB": {
     "title": "Reel Zumba (likes)",
     "value": 102,
     "q": "≥",
     "week": "S32",
     "range": "3–9 aug",
     "url": null
    }
   }
  },
  "2026-09": {
   "posts": 42,
   "eng_sum": 1393,
   "eng_n": 28,
   "leads": 1311,
   "q": {
    "posts": "≈",
    "avgeng": ""
   },
   "note": {
    "posts": "5 din 5 săpt.; S36, S37 aproximativ",
    "avgeng": "3 din 5 săpt.",
    "followers": "la S40 (28 sep–4 oct)",
    "leads": "Facebook + Instagram, împreună · noi (unice): 827"
   },
   "followers": 4559,
   "topPosts": {
    "DrA": {
     "title": "Urare Dr. Arina Lupu (92/58)",
     "value": 150,
     "q": "",
     "week": "S39",
     "range": "21–27 sep",
     "url": null
    },
    "DE": {
     "title": "Campania Align Smile Wallet (379/1)",
     "value": 380,
     "q": "≥",
     "week": "S39",
     "range": "21–27 sep",
     "url": null
    },
    "RM": {
     "title": "Notă „Lucrăm la V2 a campaniei” (99/2)",
     "value": 101,
     "q": "≥",
     "week": "S39",
     "range": "21–27 sep",
     "url": null
    },
    "Life": {
     "title": "Reel carii fără durere",
     "value": 11,
     "q": "≥",
     "week": "S38",
     "range": "14–20 sep",
     "url": null
    },
    "Eli": {
     "title": "Colab Bianca Iotu (Insula Iubirii), 394/2",
     "value": 396,
     "q": "≥",
     "week": "S38",
     "range": "14–20 sep",
     "url": null
    },
    "DB": {
     "title": "„Dental Blue Slobozia reunited” (45/7)",
     "value": 52,
     "q": "≥",
     "week": "S39",
     "range": "21–27 sep",
     "url": null
    }
   }
  }
 },
 "compare": {
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
    "hint": "postări în feed + Reels (fără Story-uri)",
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
    "hint": "like-uri + comentarii pe postare",
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
    "hint": "ultima cifră din rapoartele lunii",
    "type": "num",
    "additive": "last"
   },
   {
    "key": "topval",
    "label": "Top postare (engagement)",
    "hint": "cea mai bună postare din perioadă",
    "type": "num",
    "additive": "max"
   }
  ],
  "notes": [
   "Engagement = like-uri + comentarii (Instagram nu arată distribuirile). Unde raportul dă doar like-uri, cifra e minimă („≥”).",
   "În S36 și S37 rapoartele dau doar numărul aproximativ de postări, fără engagement; S29 lipsește.",
   "Urmăritorii apar doar în câteva rapoarte, iar unele conturi au cifre rotunjite. Elidadent și Dental Blue au conturi mici: nu se compară direct cu noi.",
   "Life Dental Spa are cifre de engagement foarte mici sau incomplete în S39–S40 (în S40 raportul nu are cifre exacte)."
  ],
  "data": {
   "DrA": {
    "2026-07": {
     "q": {
      "posts": "≥",
      "avgeng": "≥",
      "topval": "≥"
     },
     "posts": 12,
     "eng_sum": 396,
     "eng_n": 11,
     "followers": 4272,
     "topval": 73
    },
    "2026-08": {
     "q": {
      "avgeng": "≥",
      "topval": ""
     },
     "posts": 27,
     "eng_sum": 1156,
     "eng_n": 26,
     "followers": 4441,
     "topval": 144
    },
    "2026-09": {
     "q": {
      "posts": "≈",
      "avgeng": "",
      "topval": ""
     },
     "posts": 42,
     "eng_sum": 1393,
     "eng_n": 28,
     "followers": 4559,
     "topval": 150
    }
   },
   "DE": {
    "2026-07": {
     "q": {
      "posts": "≥",
      "avgeng": "≥",
      "topval": ""
     },
     "posts": 21,
     "eng_sum": 881,
     "eng_n": 21,
     "followers": 7673,
     "topval": 307
    },
    "2026-08": {
     "q": {
      "avgeng": "≥",
      "topval": "≥"
     },
     "posts": 57,
     "eng_sum": 1859,
     "eng_n": 57,
     "followers": 8393,
     "topval": 109
    },
    "2026-09": {
     "q": {
      "posts": "≈",
      "avgeng": "≥",
      "topval": ""
     },
     "posts": 81,
     "eng_sum": 2269,
     "eng_n": 47,
     "followers": 8895,
     "topval": 380
    }
   },
   "RM": {
    "2026-07": {
     "q": {
      "posts": "≥",
      "avgeng": "≥",
      "topval": "≥"
     },
     "posts": 12,
     "eng_sum": 326,
     "eng_n": 12,
     "followers": 13400,
     "topval": 84
    },
    "2026-08": {
     "q": {
      "avgeng": "≥",
      "topval": "≥"
     },
     "posts": 27,
     "eng_sum": 661,
     "eng_n": 27,
     "followers": 13500,
     "topval": 171
    },
    "2026-09": {
     "q": {
      "avgeng": "≥",
      "topval": ""
     },
     "posts": 38,
     "eng_sum": 772,
     "eng_n": 24,
     "followers": 13600,
     "topval": 101
    }
   },
   "Life": {
    "2026-07": {
     "q": {
      "posts": "≥",
      "avgeng": "",
      "topval": "≥"
     },
     "posts": 14,
     "eng_sum": 62,
     "eng_n": 6,
     "followers": 12600,
     "topval": 36
    },
    "2026-08": {
     "q": {
      "avgeng": "≥",
      "topval": "≥"
     },
     "posts": 29,
     "eng_sum": 300,
     "eng_n": 29,
     "followers": 13000,
     "topval": 76
    },
    "2026-09": {
     "q": {
      "posts": "≈",
      "avgeng": "≥",
      "topval": ""
     },
     "posts": 35,
     "eng_sum": 40,
     "eng_n": 10,
     "followers": 13100,
     "topval": 11
    }
   },
   "Eli": {
    "2026-07": {
     "q": {
      "posts": "≥",
      "avgeng": "≥",
      "topval": "≥"
     },
     "posts": 12,
     "eng_sum": 116,
     "eng_n": 12,
     "followers": 474,
     "topval": 20
    },
    "2026-08": {
     "q": {
      "avgeng": "≥",
      "topval": "≥"
     },
     "posts": 19,
     "eng_sum": 153,
     "eng_n": 19,
     "followers": 488,
     "topval": 15
    },
    "2026-09": {
     "q": {
      "avgeng": "",
      "topval": ""
     },
     "posts": 28,
     "eng_sum": 581,
     "eng_n": 18,
     "followers": 506,
     "topval": 396
    }
   },
   "DB": {
    "2026-07": {
     "q": {
      "posts": "≥",
      "avgeng": "",
      "topval": ""
     },
     "posts": 4,
     "eng_sum": 34,
     "eng_n": 4,
     "followers": 373,
     "topval": 13
    },
    "2026-08": {
     "q": {
      "avgeng": "≥",
      "topval": "≥"
     },
     "posts": 7,
     "eng_sum": 187,
     "eng_n": 7,
     "followers": 390,
     "topval": 102
    },
    "2026-09": {
     "q": {
      "avgeng": "",
      "topval": ""
     },
     "posts": 3,
     "eng_sum": 71,
     "eng_n": 3,
     "followers": 399,
     "topval": 52
    }
   }
  }
 }
};
