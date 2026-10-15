// Date reale din rapoartele KPI Tier 1 (12 săptămâni, S29–S40), grupate pe luni cum apar în rapoarte.
// Iulie = S29–S31 · August = S32–S35 · Septembrie = S36–S40.
window.REPORT_CONFIG = {
 "channel": "Facebook",
 "demo": false,
 "kpis": [
  {
   "key": "posts",
   "label": "Număr de postări",
   "hint": "câte postări au fost publicate în perioada aleasă",
   "type": "num",
   "additive": true
  },
  {
   "key": "eng_sum",
   "label": "Interacțiuni",
   "hint": "reacții, comentarii și distribuiri la un loc",
   "type": "num",
   "additive": true,
   "hidden": true
  },
  {
   "key": "eng_n",
   "label": "Postări cu interacțiuni numărate",
   "hint": "postările pentru care raportul are cifre",
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
   "hint": "câți urmăritori are pagina la sfârșitul perioadei",
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
  "Iulie, august și septembrie (S29–S40) au inventar complet de postări, cu reacții, comentarii și distribuiri citite pentru toate conturile.",
  "Engagement = reacții + comentarii + distribuiri.",
  "Urmăritorii sunt rotunjiți la mii în rapoarte (≈17.000), așa că o creștere lunară nu se poate vedea.",
  "Leadurile sunt din Puls (Monthly brief → Pacienți): leaduri primite din campaniile Facebook + Instagram, la un loc (aceeași cifră pe ambele pagini, pentru că nu se pot separa pe canal). Între paranteze „noi (unice)” = telefoane la prima apariție. La iulie, variația (−9%) e cea din Puls.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în rapoarte.",
  "Top postarea lunii = cea mai bună dintre topurile săptămânale ale lunii (rapoartele dau câte un top pe săptămână). „≥” apare când o săptămână din lună nu are cifre sau cifra e doar un eșantion. Linkurile postărilor nu sunt în rapoarte.",
  "Octombrie e în curs: are doar S41 (5–11 octombrie), deci cifrele sunt minime („≥”) și nu se compară cu septembrie.",
  "Pentru iulie și august, raportul dă doar valoarea postării de top (fără titlu și link), deci în „Top postarea lunii” titlul apare „fără descriere în raport” și linkul „–”.",
  "Urmăritorii pe fiecare lună sunt cifra din ultima săptămână a lunii (iulie: S31, august: S35, septembrie: S40), din rapoartele săptămânale vechi; unde lipsea, e citirea de la rulare. Rotunjirile („≈”) vin din pagină."
 ],
 "data": {
  "2026-07": {
   "posts": 19,
   "eng_sum": 297,
   "eng_n": 19,
   "followers": 17000,
   "leads": 1264,
   "q": {
    "followers": "≈"
   },
   "note": {
    "posts": "3 din 3 săpt. (S29–S31)",
    "avgeng": "3 din 3 săpt.",
    "followers": "la S31 · rotunjit",
    "leads": "Facebook + Instagram, împreună · noi (unice): 836"
   },
   "vs": {
    "leads": -9
   },
   "topPosts": {
    "DrA": {
     "title": "",
     "value": 46,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    },
    "DE": {
     "title": "",
     "value": 312,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    },
    "RM": {
     "title": "",
     "value": 493,
     "q": "",
     "week": "S29",
     "range": "13–19 iul",
     "url": null
    },
    "Life": {
     "title": "",
     "value": 60,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    },
    "Eli": {
     "title": "",
     "value": 48,
     "q": "",
     "week": "S29",
     "range": "13–19 iul",
     "url": null
    },
    "DB": {
     "title": "",
     "value": 24,
     "q": "",
     "week": "S30",
     "range": "20–26 iul",
     "url": null
    }
   }
  },
  "2026-08": {
   "posts": 28,
   "eng_sum": 848,
   "eng_n": 28,
   "followers": 17000,
   "leads": 1366,
   "q": {
    "followers": "≈"
   },
   "note": {
    "posts": "4 din 4 săpt. (S32–S35)",
    "avgeng": "4 din 4 săpt.",
    "followers": "la S35 · rotunjit",
    "leads": "Facebook + Instagram, împreună · noi (unice): 832"
   },
   "topPosts": {
    "DrA": {
     "title": "",
     "value": 119,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": null
    },
    "DE": {
     "title": "",
     "value": 347,
     "q": "",
     "week": "S33",
     "range": "10–16 aug",
     "url": null
    },
    "RM": {
     "title": "",
     "value": 345,
     "q": "",
     "week": "S33",
     "range": "10–16 aug",
     "url": null
    },
    "Life": {
     "title": "",
     "value": 52,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": null
    },
    "Eli": {
     "title": "",
     "value": 96,
     "q": "",
     "week": "S34",
     "range": "17–23 aug",
     "url": null
    },
    "DB": {
     "title": "",
     "value": 40,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": null
    }
   }
  },
  "2026-09": {
   "posts": 46,
   "eng_sum": 1311,
   "eng_n": 46,
   "followers": 17000,
   "leads": 1311,
   "q": {
    "followers": "≈"
   },
   "note": {
    "posts": "5 din 5 săpt. (S36–S40)",
    "avgeng": "5 din 5 săpt.",
    "followers": "la S40 · rotunjit",
    "leads": "Facebook + Instagram, împreună · noi (unice): 827"
   },
   "topPosts": {
    "DrA": {
     "title": "La mulți ani, Dr. Arina Lupu!",
     "value": 140,
     "q": "",
     "week": "S39",
     "range": "21–27 sep",
     "url": "https://www.facebook.com/Dr.Ardeleanu/posts/pfbid0g5xfVGz9WDfkGET9BLtdB3RYVQaey9eMbyyMEsxrFPh3XzKGrwQ9Q8bhpRyFiL5wl"
    },
    "DE": {
     "title": "Sunt un om fragil… – Maia Morgenstern (reel)",
     "value": 227,
     "q": "",
     "week": "S39",
     "range": "21–27 sep",
     "url": "https://www.facebook.com/reel/1104230865426730"
    },
    "RM": {
     "title": "Ai primit un plan de tratament, dar încă nu ești sigur că este alegerea potrivită?",
     "value": 652,
     "q": "",
     "week": "S37",
     "range": "7–13 sep",
     "url": "https://www.facebook.com/ReginaMariaDentalClinics/posts/pfbid0NxuueRBTqi38RgmSRQwCuuAPy67UMsAyShBUBcurNQC27j7vm7pu24tQWgHUuA8yl"
    },
    "Life": {
     "title": "Guvernele se schimbă. Scuzele pentru dentist rămân stabile",
     "value": 711,
     "q": "",
     "week": "S40",
     "range": "28 sep–4 oct",
     "url": "https://www.facebook.com/LifeDentalSpa/posts/pfbid02QGvRB1wLiUgzyG1bYDiwXtUuXqagV6cJ5c8vvboHazkZ7knWH6Co6Z77WkcY9UKvl"
    },
    "Eli": {
     "title": "Ce înseamnă o adiție de os",
     "value": 100,
     "q": "",
     "week": "S38",
     "range": "14–20 sep",
     "url": "https://www.facebook.com/reel/1096653936252782"
    },
    "DB": {
     "title": "Dental Blue Constanța vs. Dental Blue Fetești?",
     "value": 71,
     "q": "",
     "week": "S36",
     "range": "31 aug–6 sep",
     "url": null
    }
   }
  },
  "2026-10": {
   "posts": 9,
   "eng_sum": 248,
   "eng_n": 9,
   "followers": 18000,
   "leads": null,
   "q": {
    "posts": "≥",
    "avgeng": "",
    "followers": "≈"
   },
   "note": {
    "posts": "luna în curs: doar S41 (5–11 oct)",
    "avgeng": "doar S41",
    "followers": "la S41 · rotunjit",
    "leads": "luna în curs"
   },
   "nocmp": true,
   "topPosts": {
    "DrA": {
     "title": "„Nu există scurtături către succes.” (reel)",
     "value": 53,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.facebook.com/reel/4392264901085415/"
    },
    "DE": {
     "title": "Ai pierdut un singur dinte? Implant unidentar… (reel)",
     "value": 114,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.facebook.com/reel/4586622198283571/"
    },
    "RM": {
     "title": "„Nu există rețete universale…” — Hot Takes, pentru copii (reel)",
     "value": 27,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.facebook.com/reel/2621948774911864/"
    },
    "Life": {
     "title": "Ce înseamnă să faci stomatologie altfel? (reel) — egalitate 13 cu o postare din 5 oct (9/0/4)",
     "value": 13,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.facebook.com/reel/1113287494741624/"
    },
    "Eli": {
     "title": "Din Târgoviște, direct la Budapesta — stand expo (postare în colaborare cu Next Story)",
     "value": 162,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.facebook.com/nextstory.romania/posts/pfbid02uaZUwK5N8M4sAnw4SxJg82Kp4zHT81Ar5RspCRV1iVEmjLCDRNHo3KLQTwBFTVgFl"
    },
    "DB": {
     "title": "La mulți ani, as. Miha! (foto, echipă Slobozia)",
     "value": 37,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0Jh1QRJVToQTWVefQe3dtJwHMzRGhWKWMLin7dhnekDVrPJbQTvLSwBt3iSfW3vEjl&id=100057645392894"
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
    "hint": "câte postări au fost publicate",
    "type": "num",
    "additive": true
   },
   {
    "key": "eng_sum",
    "label": "Interacțiuni",
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
    "hint": "interacțiuni (reacții + comentarii + distribuiri) pe postare",
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
    "hint": "urmăritorii paginii, rotunjiți la mii în rapoarte",
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
   "Iulie, august și septembrie (S29–S40) au inventar complet de postări pe toate paginile, deci postările și engagementul mediu apar pentru toate cele trei luni.",
   "Elidadent și Dental Blue pornesc de la pagini mici (4,7K și 6,3K urmăritori): cifrele lor nu se compară direct cu ale noastre.",
   "Life Dental Spa are în S40 un carusel politic (newsjacking) cu 711 interacțiuni, care urcă mult engagementul lor mediu.",
   "Life Dental Spa are urmăritorii exacți (rotunjiți la mii) din S40: 83.000."
  ],
  "data": {
   "DrA": {
    "2026-07": {
     "q": {
      "followers": "≈",
      "topval": "",
      "posts": "",
      "avgeng": ""
     },
     "followers": 17000,
     "topval": 46,
     "posts": 19,
     "eng_sum": 297,
     "eng_n": 19
    },
    "2026-08": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "followers": 17000,
     "topval": 119,
     "posts": 28,
     "eng_sum": 848,
     "eng_n": 28
    },
    "2026-09": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 46,
     "eng_sum": 1311,
     "eng_n": 46,
     "followers": 17000,
     "topval": 140
    },
    "2026-10": {
     "posts": 9,
     "eng_sum": 248,
     "eng_n": 9,
     "followers": 18000,
     "topval": 53,
     "q": {
      "posts": "≥",
      "avgeng": "",
      "followers": "≈",
      "topval": "≥"
     }
    }
   },
   "DE": {
    "2026-07": {
     "q": {
      "followers": "≈",
      "topval": "",
      "posts": "",
      "avgeng": ""
     },
     "followers": 45000,
     "topval": 312,
     "posts": 39,
     "eng_sum": 1173,
     "eng_n": 39
    },
    "2026-08": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "followers": 46000,
     "topval": 347,
     "posts": 62,
     "eng_sum": 1929,
     "eng_n": 62
    },
    "2026-09": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 89,
     "eng_sum": 3449,
     "eng_n": 89,
     "followers": 46000,
     "topval": 227
    },
    "2026-10": {
     "posts": 15,
     "eng_sum": 465,
     "eng_n": 15,
     "followers": 46000,
     "topval": 114,
     "q": {
      "posts": "≥",
      "avgeng": "",
      "followers": "≈",
      "topval": "≥"
     }
    }
   },
   "RM": {
    "2026-07": {
     "q": {
      "followers": "≈",
      "topval": "",
      "posts": "",
      "avgeng": ""
     },
     "followers": 84000,
     "topval": 493,
     "posts": 29,
     "eng_sum": 1900,
     "eng_n": 29
    },
    "2026-08": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "followers": 84000,
     "topval": 345,
     "posts": 32,
     "eng_sum": 2083,
     "eng_n": 32
    },
    "2026-09": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 45,
     "eng_sum": 2067,
     "eng_n": 45,
     "followers": 84000,
     "topval": 652
    },
    "2026-10": {
     "posts": 10,
     "eng_sum": 134,
     "eng_n": 10,
     "followers": 84000,
     "topval": 27,
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
      "followers": "≈",
      "topval": "",
      "posts": "",
      "avgeng": ""
     },
     "followers": 81000,
     "topval": 60,
     "posts": 20,
     "eng_sum": 542,
     "eng_n": 20
    },
    "2026-08": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "followers": 82000,
     "topval": 52,
     "posts": 28,
     "eng_sum": 691,
     "eng_n": 28
    },
    "2026-09": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 33,
     "eng_sum": 1541,
     "eng_n": 33,
     "topval": 711,
     "followers": 83000,
     "note": {
      "followers": "ultima cifră din rapoarte (S35)"
     }
    },
    "2026-10": {
     "posts": 7,
     "eng_sum": 66,
     "eng_n": 7,
     "followers": 83000,
     "topval": 13,
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
      "followers": "≈",
      "topval": "",
      "posts": "",
      "avgeng": ""
     },
     "followers": 4600,
     "topval": 48,
     "posts": 14,
     "eng_sum": 305,
     "eng_n": 14
    },
    "2026-08": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "followers": 4600,
     "topval": 96,
     "posts": 19,
     "eng_sum": 479,
     "eng_n": 19
    },
    "2026-09": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 32,
     "eng_sum": 799,
     "eng_n": 32,
     "followers": 4700,
     "topval": 100
    },
    "2026-10": {
     "posts": 8,
     "eng_sum": 487,
     "eng_n": 8,
     "followers": 4700,
     "topval": 162,
     "q": {
      "posts": "≥",
      "avgeng": "",
      "followers": "≈",
      "topval": "≥"
     }
    }
   },
   "DB": {
    "2026-07": {
     "q": {
      "followers": "≈",
      "topval": "",
      "posts": "",
      "avgeng": ""
     },
     "followers": 6200,
     "topval": 24,
     "posts": 17,
     "eng_sum": 188,
     "eng_n": 17
    },
    "2026-08": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "followers": 6300,
     "topval": 40,
     "posts": 22,
     "eng_sum": 534,
     "eng_n": 22
    },
    "2026-09": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 9,
     "eng_sum": 265,
     "eng_n": 9,
     "followers": 6300,
     "topval": 71
    },
    "2026-10": {
     "posts": 5,
     "eng_sum": 109,
     "eng_n": 5,
     "followers": 6300,
     "topval": 37,
     "q": {
      "posts": "≥",
      "avgeng": "",
      "followers": "≈",
      "topval": "≥"
     }
    }
   }
  }
 }
};
