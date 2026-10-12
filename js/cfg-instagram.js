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
  "Septembrie (S36–S40) are inventar complet de postări, cu engagement citit în toate cele 5 săptămâni; unde unele like-uri sunt ascunse, cifra e marcată „≥”.",
  "Urmăritorii vin doar din câteva rapoarte (S28, S32, S35, S36, S38, S40); pentru fiecare lună e ultima cifră disponibilă.",
  "Leadurile sunt din Puls (Monthly brief → Pacienți): leaduri primite din campaniile Facebook + Instagram, la un loc (aceeași cifră pe ambele pagini, pentru că nu se pot separa pe canal). Între paranteze „noi (unice)” = telefoane la prima apariție. La iulie, variația (−9%) e cea din Puls.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în rapoarte.",
  "Top postarea lunii = cea mai bună dintre topurile săptămânale ale lunii (rapoartele dau câte un top pe săptămână). „≥” apare când o săptămână din lună nu are cifre sau cifra e doar un eșantion. Linkurile postărilor nu sunt în rapoarte.",
  "Septembrie e citit cu skill-ul actualizat și nu se compară direct cu iulie–august, care vin din rapoartele vechi: engagementul nou e mult mai mic (de exemplu S38–S39 la noi: 374 și 224, față de 699 și 568 în rapoartele vechi).",
  "Octombrie e în curs: are doar S41 (5–11 octombrie), deci cifrele sunt minime („≥”) și nu se compară cu septembrie."
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
   "posts": 44,
   "eng_sum": 1168,
   "eng_n": 43,
   "leads": 1311,
   "q": {
    "posts": "",
    "avgeng": "≥",
    "followers": "≈"
   },
   "note": {
    "posts": "5 din 5 săpt. (S36–S40)",
    "avgeng": "5 din 5 săpt.",
    "followers": "valoare de la data rulării",
    "leads": "Facebook + Instagram, împreună · noi (unice): 827"
   },
   "followers": 4585,
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
   "Septembrie (S36–S40) are inventar complet de postări și engagement citit în toate cele 5 săptămâni.",
   "Urmăritorii apar doar în câteva rapoarte, iar unele conturi au cifre rotunjite. Elidadent și Dental Blue au conturi mici: nu se compară direct cu noi.",
   "Life Dental Spa are cifre de engagement foarte mici: 27 la 6 postări în S39 și 30 la 7 în S40."
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
      "posts": "",
      "avgeng": "≥",
      "followers": "≈",
      "topval": ""
     },
     "posts": 44,
     "eng_sum": 1168,
     "eng_n": 43,
     "followers": 4585,
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
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 88,
     "eng_sum": 2140,
     "eng_n": 88,
     "followers": 8944,
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
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 32,
     "eng_sum": 151,
     "eng_n": 32,
     "followers": 13200,
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
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 28,
     "eng_sum": 727,
     "eng_n": 28,
     "followers": 507,
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
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 3,
     "eng_sum": 8,
     "eng_n": 3,
     "followers": 405,
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
