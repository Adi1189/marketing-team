// Date reale din rapoartele KPI Tier 1 (S27–S44), grupate pe luni.
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
  "Leadurile sunt din Puls (Monthly brief → Pacienți): leaduri primite din campaniile Facebook + Instagram, la un loc (aceeași cifră pe ambele pagini, pentru că nu se pot separa pe canal). La iulie, variația (−9%) e cea din Puls.",
  "Octombrie (S41–S44, 5 octombrie – 1 noiembrie) e calculat din cele patru săptămâni și e complet.",
  "Titlurile postărilor de top din iulie și august sunt citite din descrierile postărilor, pe 15 octombrie (la colaborări apare contul partener); linkurile sunt complete. Like-urile din iulie–august au fost citite pe 12–14 octombrie.",
  "Urmăritorii pe fiecare lună sunt cifra din ultima săptămână a lunii (iulie: S31, august: S35, septembrie: S40, octombrie: S44), din rapoartele săptămânale vechi; unde lipsea, e citirea de la rulare. Rotunjirile („≈”) vin din pagină."
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
    "leads": "Facebook + Instagram, împreună"
   },
   "followers": 4272,
   "vs": {
    "leads": -9
   },
   "topPosts": {
    "DrA": {
     "title": "În implantologie, performanța nu se măsoară doar prin complexitatea cazurilor pe care le rezolvi. 🦷 (colaborare @straumannro)",
     "value": 91,
     "q": "",
     "week": "S27",
     "range": "29 iun–5 iul",
     "url": "https://www.instagram.com/reel/DaSOG7Yiy21/"
    },
    "DE": {
     "title": "Uneori, încrederea începe cu un zâmbet.",
     "value": 194,
     "q": "",
     "week": "S30",
     "range": "20–26 iul",
     "url": "https://www.instagram.com/reel/DbKjDRwjY59/"
    },
    "RM": {
     "title": "🦷✨ Un zâmbet sănătos începe cu o vizită la medicul potrivit!",
     "value": 476,
     "q": "",
     "week": "S29",
     "range": "13–19 iul",
     "url": "https://www.instagram.com/reel/Da-PMgtI65Z/"
    },
    "Life": {
     "title": "🎂 Astăzi este despre recunoștință. O celebrăm pe Dr. Cristina Obreja, co-fondatoarea Life Dental Spa.",
     "value": 65,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": "https://www.instagram.com/p/Dbc-gvJldWz/"
    },
    "Eli": {
     "title": "Cu sau fără anestezie pentru Alex Stamate?",
     "value": 85,
     "q": "",
     "week": "S28",
     "range": "6–12 iul",
     "url": "https://www.instagram.com/reel/DanFB0Hoz9j/"
    },
    "DB": {
     "title": "Reel în colaborare cu @andreiosanuzumba (fără text în descriere)",
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
    "leads": "Facebook + Instagram, împreună"
   },
   "followers": 4441,
   "topPosts": {
    "DrA": {
     "title": "🔥 Slobozia, suntem gata! (colaborare @dr.claudiafratila)",
     "value": 151,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": "https://www.instagram.com/reel/DbpdpKBD73U/"
    },
    "DE": {
     "title": "Sângerarea la periaj reprezintă primul semnal că tartrul și bacteriile au început deja să afecteze gingia. (colaborare @medlife_romania)",
     "value": 256,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": "https://www.instagram.com/reel/DbsBaqvCP3x/"
    },
    "RM": {
     "title": "Hey! Azi vă iau cu mine într-o aventură. La DENTIST! 😂🔥 (colaborare @ana_maria_guran)",
     "value": 175,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": "https://www.instagram.com/reel/Dbm9eJmoZZQ/"
    },
    "Life": {
     "title": "Știai că un fren lingual scurt poate influența mai mult decât vorbirea? 👅 (colaborare @dramandahsohl)",
     "value": 82,
     "q": "",
     "week": "S35",
     "range": "24–30 aug",
     "url": "https://www.instagram.com/p/DcdNKC8MTtE/"
    },
    "Eli": {
     "title": "🎒 Avem o campanie activă alături de eMAG!",
     "value": 30,
     "q": "",
     "week": "S34",
     "range": "17–23 aug",
     "url": "https://www.instagram.com/reel/DcOK-cZARjK/"
    },
    "DB": {
     "title": "🎶 „Drumurile noastre poate se vor întâlni vreodată...” (reel în colaborare cu @andreiosanuzumba)",
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
    "leads": "Facebook + Instagram, împreună"
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
   "posts": 34,
   "eng_sum": 895,
   "eng_n": 34,
   "leads": null,
   "q": {
    "posts": "",
    "avgeng": "",
    "followers": ""
   },
   "note": {
    "followers": "la S44",
    "leads": "Puls: nu avem încă cifra pentru octombrie"
   },
   "followers": 4693,
   "topPosts": {
    "DrA": {
     "title": "BRĂILA, SUNTEM GATA! 🤍",
     "value": 88,
     "q": "",
     "week": "S43",
     "range": "19–25 oct",
     "url": "https://www.instagram.com/reel/Deq4KxfHGJE/"
    },
    "DE": {
     "title": "Behind the scenes cu Dr. Adeli…",
     "value": 141,
     "q": "",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.instagram.com/reel/DeKJTlkjRgp/"
    },
    "RM": {
     "title": "„Cât de multe lucruri știm…” — colaborare cu influencer (albuandreeanicoleta)",
     "value": 630,
     "q": "",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.instagram.com/reel/DeQnpcGIpL5/"
    },
    "Life": {
     "title": "Respirația neplăcută nu are întotdeauna o cauză dentară. Plot twist: sursa poate fi la nivelul amigdalelor.",
     "value": 75,
     "q": "",
     "week": "S43",
     "range": "19–25 oct",
     "url": "https://www.instagram.com/reel/De1Cl_8G-vp/"
    },
    "Eli": {
     "title": "Reel: Halloween vs. nuntă, cu hashtag-uri de brand",
     "value": 27,
     "q": "",
     "week": "S44",
     "range": "26 oct–1 nov",
     "url": "https://www.instagram.com/clinicaelidadent/reel/DfKBBXMDgC8/"
    },
    "DB": {
     "title": "Reel Cine a spus că aparatele ortodontice sunt doar pentru copii?",
     "value": 3,
     "q": "",
     "week": "S42",
     "range": "12–18 oct",
     "url": "https://www.instagram.com/dental_blue_international/reel/DebuObst3-s/"
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
   "Iulie–octombrie (S27–S44) au inventar complet de postări și engagement citit în toate săptămânile.",
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
     "posts": 34,
     "eng_sum": 895,
     "eng_n": 34,
     "followers": 4693,
     "topval": 88,
     "q": {
      "followers": "",
      "topval": ""
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
     "posts": 75,
     "eng_sum": 1251,
     "eng_n": 73,
     "followers": 9246,
     "topval": 141,
     "q": {
      "followers": "",
      "avgeng": "≥",
      "topval": ""
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
     "posts": 23,
     "eng_sum": 1176,
     "eng_n": 23,
     "followers": 13700,
     "topval": 630,
     "q": {
      "followers": "≈",
      "topval": ""
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
     "posts": 27,
     "eng_sum": 273,
     "eng_n": 27,
     "followers": 13300,
     "topval": 75,
     "q": {
      "followers": "≈",
      "topval": ""
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
     "posts": 28,
     "eng_sum": 302,
     "eng_n": 27,
     "followers": 515,
     "topval": 27,
     "q": {
      "followers": "",
      "avgeng": "≥",
      "topval": ""
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
     "posts": 3,
     "eng_sum": 7,
     "eng_n": 3,
     "followers": 435,
     "topval": 3,
     "q": {
      "followers": "",
      "avgeng": "≥",
      "topval": ""
     }
    }
   }
  }
 }
};
