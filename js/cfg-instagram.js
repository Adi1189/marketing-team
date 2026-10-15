// Date reale din rapoartele KPI Tier 1 (S27–S41), grupate pe luni.
// Iulie = S27–S31 · August = S32–S35 · Septembrie = S36–S40 · Octombrie = S41–S44.
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
  "Lunile se formează din săptămâni ISO întregi: iulie = S27–S31 (5 săptămâni), august = S32–S35 (4), septembrie = S36–S40 (5), octombrie = S41–S44 (4). O săptămână intră în luna în care cad cele mai multe zile ale ei; excepție, S40 (28 sep–4 oct), pe care o păstrăm în septembrie, ca în rapoartele tale.",
  "Engagement = like-uri + comentarii (Instagram nu arată distribuirile). În S31, S32, S34 și S35 raportul dă doar like-uri, de aceea cifrele din iulie și august sunt minime („≥”).",
  "Iulie, august și septembrie (S27–S40) au inventar complet de postări și engagement citit în toate săptămânile; unde unele like-uri sunt ascunse, cifra e marcată „≥”.",
  "Urmăritorii vin doar din câteva rapoarte (S28, S32, S35, S36, S38, S40); pentru fiecare lună e ultima cifră disponibilă.",
  "Leadurile sunt din Puls (Monthly brief → Pacienți): leaduri primite din campaniile Facebook + Instagram, la un loc (aceeași cifră pe ambele pagini, pentru că nu se pot separa pe canal). Între paranteze „noi (unice)” = telefoane la prima apariție. La iulie, variația (−9%) e cea din Puls.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în rapoarte.",
  "Top postarea lunii = cea mai bună dintre topurile săptămânale ale lunii (rapoartele dau câte un top pe săptămână). „≥” apare când o săptămână din lună nu are cifre sau cifra e doar un eșantion. Linkurile postărilor nu sunt în rapoarte.",
  "Octombrie e în curs: are doar S41 (5–11 octombrie), deci cifrele sunt minime („≥”) și nu se compară cu septembrie.",
  "Pentru iulie și august, blocul nu are titlurile postărilor de top, deci în „Top postarea lunii” titlul apare „fără descriere în raport”; linkurile sunt complete. Like-urile din iulie–august au fost citite pe 12–14 octombrie.",
  "Urmăritorii pe fiecare lună sunt cifra din ultima săptămână a lunii (iulie: S31, august: S35, septembrie: S40), din rapoartele săptămânale vechi; unde lipsea, e citirea de la rulare. Rotunjirile („≈”) vin din pagină.",
  "Toate cele trei luni (iulie–septembrie) sunt citite cu metoda nouă, cu like-urile citite pe 12–14 octombrie; engagementul e mult sub cel din rapoartele vechi (de exemplu S38–S39 la noi: 374 și 224, față de 699 și 568), deci nu se compară cu cifrele vechi."
 ],
 "data": {
  "2026-07": {
   "posts": 31,
   "eng_sum": 1455,
   "eng_n": 31,
   "leads": 1264,
   "q": {
    "followers": ""
   },
   "note": {
    "posts": "5 din 5 săpt. (S27–S31)",
    "avgeng": "5 din 5 săpt.",
    "followers": "la S31",
    "leads": "Facebook + Instagram, împreună · noi (unice): 836"
   },
   "followers": 4272,
   "vs": {
    "leads": -9
   },
   "topPosts": {
    "DrA": {
     "title": "",
     "value": 91,
     "q": "",
     "week": "S27",
     "range": "29 iun–5 iul",
     "url": "https://www.instagram.com/reel/DaSOG7Yiy21/"
    },
    "DE": {
     "title": "",
     "value": 194,
     "q": "",
     "week": "S30",
     "range": "20–26 iul",
     "url": "https://www.instagram.com/reel/DbKjDRwjY59/"
    },
    "RM": {
     "title": "",
     "value": 476,
     "q": "",
     "week": "S29",
     "range": "13–19 iul",
     "url": "https://www.instagram.com/reel/Da-PMgtI65Z/"
    },
    "Life": {
     "title": "",
     "value": 65,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": "https://www.instagram.com/p/Dbc-gvJldWz/"
    },
    "Eli": {
     "title": "",
     "value": 85,
     "q": "",
     "week": "S28",
     "range": "6–12 iul",
     "url": "https://www.instagram.com/reel/DanFB0Hoz9j/"
    },
    "DB": {
     "title": "",
     "value": 109,
     "q": "",
     "week": "S27",
     "range": "29 iun–5 iul",
     "url": "https://www.instagram.com/reel/DabM1uwsw7-/"
    }
   }
  },
  "2026-08": {
   "posts": 26,
   "eng_sum": 1372,
   "eng_n": 25,
   "leads": 1366,
   "q": {
    "posts": "",
    "avgeng": "≥",
    "followers": ""
   },
   "note": {
    "posts": "4 din 4 săpt. (S32–S35)",
    "avgeng": "4 din 4 săpt.",
    "followers": "la S35",
    "leads": "Facebook + Instagram, împreună · noi (unice): 832"
   },
   "followers": 4441,
   "topPosts": {
    "DrA": {
     "title": "",
     "value": 151,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": "https://www.instagram.com/reel/DbpdpKBD73U/"
    },
    "DE": {
     "title": "",
     "value": 256,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": "https://www.instagram.com/reel/DbsBaqvCP3x/"
    },
    "RM": {
     "title": "",
     "value": 175,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": "https://www.instagram.com/reel/Dbm9eJmoZZQ/"
    },
    "Life": {
     "title": "",
     "value": 82,
     "q": "",
     "week": "S35",
     "range": "24–30 aug",
     "url": "https://www.instagram.com/p/DcdNKC8MTtE/"
    },
    "Eli": {
     "title": "",
     "value": 30,
     "q": "",
     "week": "S34",
     "range": "17–23 aug",
     "url": "https://www.instagram.com/reel/DcOK-cZARjK/"
    },
    "DB": {
     "title": "",
     "value": 150,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": "https://www.instagram.com/reel/Dbx3oeLtI74/"
    }
   }
  },
  "2026-09": {
   "posts": 44,
   "eng_sum": 1168,
   "eng_n": 43,
   "leads": 1311,
   "q": {
    "posts": "",
    "avgeng": "≥",
    "followers": ""
   },
   "note": {
    "posts": "5 din 5 săpt. (S36–S40)",
    "avgeng": "5 din 5 săpt.",
    "followers": "la S40",
    "leads": "Facebook + Instagram, împreună · noi (unice): 827"
   },
   "followers": 4559,
   "topPosts": {
    "DrA": {
     "title": "CARE Forum continuă, cu energie… (carusel)",
     "value": 65,
     "q": "",
     "week": "S38",
     "range": "14–20 sep",
     "url": "https://www.instagram.com/dr.ardeleanu/p/Ddd8WKCm-0Q/"
    },
    "DE": {
     "title": "Ai auzit de tomografia computerizată dentară (CBCT)… (reel)",
     "value": 82,
     "q": "",
     "week": "S39",
     "range": "21–27 sep",
     "url": "https://www.instagram.com/dent.estet/reel/DdnubhTgURe/"
    },
    "RM": {
     "title": "Lucrăm la versiunea V2 a campaniei. Mulțumim pentru feedback",
     "value": 112,
     "q": "",
     "week": "S39",
     "range": "21–27 sep",
     "url": "https://www.instagram.com/reginamariadentalclinics/p/DdtpJ8xIa_e/"
    },
    "Life": {
     "title": "Știai că o carie poate evolua fără să doară? (reel)",
     "value": 13,
     "q": "",
     "week": "S38",
     "range": "14–20 sep",
     "url": "https://www.instagram.com/lifedentalspa/reel/DdaySr7FJnq/"
    },
    "Eli": {
     "title": "Toată lumea are aceeași curiozitate: «Bianca de la Insula Iubirii…» (reel)",
     "value": 389,
     "q": "",
     "week": "S38",
     "range": "14–20 sep",
     "url": "https://www.instagram.com/clinicaelidadent/reel/DdWzQTQNh9y/"
    },
    "DB": {
     "title": "Working Dentist Day",
     "value": 4,
     "q": "",
     "week": "S40",
     "range": "28 sep–4 oct",
     "url": "https://www.instagram.com/dental_blue_international/p/Dd1zcIclY38/"
    }
   }
  },
  "2026-10": {
   "posts": 8,
   "eng_sum": 210,
   "eng_n": 8,
   "leads": null,
   "q": {
    "posts": "≥",
    "avgeng": "",
    "followers": ""
   },
   "note": {
    "posts": "luna în curs: doar S41 (5–11 oct)",
    "avgeng": "doar S41",
    "followers": "la S41",
    "leads": "luna în curs"
   },
   "followers": 4600,
   "nocmp": true,
   "topPosts": {
    "DrA": {
     "title": "„Nu există scurtături către succes.” — TEDx Tudor Vianu",
     "value": 61,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.instagram.com/reel/DeKC2_mEVrO/"
    },
    "DE": {
     "title": "Behind the scenes cu Dr. Adeli…",
     "value": 141,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.instagram.com/reel/DeKJTlkjRgp/"
    },
    "RM": {
     "title": "„Cât de multe lucruri știm…” — colaborare cu influencer (albuandreeanicoleta)",
     "value": 630,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.instagram.com/reel/DeQnpcGIpL5/"
    },
    "Life": {
     "title": "Ce înseamnă să faci stomatologie altfel?",
     "value": 10,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.instagram.com/reel/DeTb9aFjCaL/"
    },
    "Eli": {
     "title": "Din Târgoviște, direct la Budapesta",
     "value": 22,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.instagram.com/p/DePDFYxDQAy/"
    },
    "DB": {
     "title": "",
     "value": null,
     "q": "",
     "week": null,
     "range": null,
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
   "Iulie, august și septembrie (S27–S40) au inventar complet de postări și engagement citit în toate săptămânile.",
   "Urmăritorii apar doar în câteva rapoarte, iar unele conturi au cifre rotunjite. Elidadent și Dental Blue au conturi mici: nu se compară direct cu noi.",
   "Life Dental Spa are cifre de engagement foarte mici: 27 la 6 postări în S39 și 30 la 7 în S40."
  ],
  "data": {
   "DrA": {
    "2026-07": {
     "q": {
      "avgeng": "",
      "topval": "",
      "followers": ""
     },
     "posts": 31,
     "eng_sum": 1455,
     "eng_n": 31,
     "followers": 4272,
     "topval": 91
    },
    "2026-08": {
     "q": {
      "posts": "",
      "avgeng": "≥",
      "followers": "",
      "topval": ""
     },
     "posts": 26,
     "eng_sum": 1372,
     "eng_n": 25,
     "followers": 4441,
     "topval": 151
    },
    "2026-09": {
     "q": {
      "posts": "",
      "avgeng": "≥",
      "followers": "",
      "topval": ""
     },
     "posts": 44,
     "eng_sum": 1168,
     "eng_n": 43,
     "followers": 4559,
     "topval": 65
    },
    "2026-10": {
     "posts": 8,
     "eng_sum": 210,
     "eng_n": 8,
     "followers": 4600,
     "topval": 61,
     "q": {
      "posts": "≥",
      "avgeng": "",
      "followers": "",
      "topval": "≥"
     }
    }
   },
   "DE": {
    "2026-07": {
     "q": {
      "avgeng": "≥",
      "topval": "",
      "followers": ""
     },
     "posts": 66,
     "eng_sum": 2490,
     "eng_n": 65,
     "followers": 7673,
     "topval": 194
    },
    "2026-08": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "",
      "topval": ""
     },
     "posts": 66,
     "eng_sum": 3293,
     "eng_n": 66,
     "followers": 8393,
     "topval": 256
    },
    "2026-09": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "",
      "topval": ""
     },
     "posts": 88,
     "eng_sum": 2140,
     "eng_n": 88,
     "followers": 8895,
     "topval": 82
    },
    "2026-10": {
     "posts": 17,
     "eng_sum": 416,
     "eng_n": 16,
     "followers": 8956,
     "topval": 141,
     "q": {
      "posts": "≥",
      "avgeng": "≥",
      "followers": "",
      "topval": "≥"
     }
    }
   },
   "RM": {
    "2026-07": {
     "q": {
      "avgeng": "",
      "topval": "",
      "followers": ""
     },
     "posts": 37,
     "eng_sum": 2093,
     "eng_n": 37,
     "followers": 13400,
     "topval": 476
    },
    "2026-08": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 26,
     "eng_sum": 976,
     "eng_n": 26,
     "followers": 13500,
     "topval": 175
    },
    "2026-09": {
     "q": {
      "posts": "",
      "avgeng": "≥",
      "followers": "≈",
      "topval": ""
     },
     "posts": 35,
     "eng_sum": 1001,
     "eng_n": 32,
     "followers": 13600,
     "topval": 112
    },
    "2026-10": {
     "posts": 9,
     "eng_sum": 766,
     "eng_n": 9,
     "followers": 13600,
     "topval": 630,
     "q": {
      "posts": "≥",
      "avgeng": "",
      "followers": "≈",
      "topval": "≥"
     }
    }
   },
   "Life": {
    "2026-07": {
     "q": {
      "avgeng": "",
      "topval": "",
      "followers": ""
     },
     "posts": 29,
     "eng_sum": 364,
     "eng_n": 29,
     "followers": 12600,
     "topval": 65
    },
    "2026-08": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 29,
     "eng_sum": 373,
     "eng_n": 29,
     "followers": 13000,
     "topval": 82
    },
    "2026-09": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 32,
     "eng_sum": 151,
     "eng_n": 32,
     "followers": 13100,
     "topval": 13
    },
    "2026-10": {
     "posts": 5,
     "eng_sum": 21,
     "eng_n": 5,
     "followers": 13200,
     "topval": 10,
     "q": {
      "posts": "≥",
      "avgeng": "",
      "followers": "≈",
      "topval": "≥"
     }
    }
   },
   "Eli": {
    "2026-07": {
     "q": {
      "avgeng": "",
      "topval": "",
      "followers": ""
     },
     "posts": 27,
     "eng_sum": 354,
     "eng_n": 27,
     "followers": 474,
     "topval": 85
    },
    "2026-08": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "",
      "topval": ""
     },
     "posts": 21,
     "eng_sum": 207,
     "eng_n": 21,
     "followers": 488,
     "topval": 30
    },
    "2026-09": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "",
      "topval": ""
     },
     "posts": 28,
     "eng_sum": 727,
     "eng_n": 28,
     "followers": 506,
     "topval": 389
    },
    "2026-10": {
     "posts": 7,
     "eng_sum": 98,
     "eng_n": 7,
     "followers": 511,
     "topval": 22,
     "q": {
      "posts": "≥",
      "avgeng": "",
      "followers": "",
      "topval": "≥"
     }
    }
   },
   "DB": {
    "2026-07": {
     "q": {
      "avgeng": "",
      "topval": "",
      "followers": ""
     },
     "posts": 18,
     "eng_sum": 294,
     "eng_n": 18,
     "followers": 373,
     "topval": 109
    },
    "2026-08": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "",
      "topval": ""
     },
     "posts": 7,
     "eng_sum": 279,
     "eng_n": 7,
     "followers": 390,
     "topval": 150
    },
    "2026-09": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "",
      "topval": ""
     },
     "posts": 3,
     "eng_sum": 8,
     "eng_n": 3,
     "followers": 399,
     "topval": 4
    },
    "2026-10": {
     "posts": 0,
     "eng_sum": null,
     "eng_n": 0,
     "followers": 410,
     "topval": null,
     "q": {
      "posts": "≥",
      "avgeng": "",
      "followers": "",
      "topval": ""
     }
    }
   }
  }
 }
};
