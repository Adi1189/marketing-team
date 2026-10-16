// Date reale din rapoartele KPI Tier 1 (S27–S41), grupate pe luni.
// Iulie = S27–S31 · August = S32–S35 · Septembrie = S36–S40 · Octombrie = S41–S44.
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
  "Iulie, august și septembrie (S27–S40) au inventar complet de postări, cu reacții, comentarii și distribuiri citite pentru toate conturile.",
  "Engagement = reacții + comentarii + distribuiri.",
  "Urmăritorii sunt rotunjiți la mii în rapoarte (≈17.000), așa că o creștere lunară nu se poate vedea.",
  "Leadurile sunt din Puls (Monthly brief → Pacienți): leaduri primite din campaniile Facebook + Instagram, la un loc (aceeași cifră pe ambele pagini, pentru că nu se pot separa pe canal). Între paranteze „noi (unice)” = telefoane la prima apariție. La iulie, variația (−9%) e cea din Puls.",
  "Octombrie e în curs: are doar S41 (5–11 octombrie), deci cifrele sunt minime („≥”) și nu se compară cu septembrie.",
  "Urmăritorii pe fiecare lună sunt cifra din ultima săptămână a lunii (iulie: S31, august: S35, septembrie: S40), din rapoartele săptămânale vechi; unde lipsea, e citirea de la rulare. Rotunjirile („≈”) vin din pagină."
 ],
 "data": {
  "2026-07": {
   "posts": 35,
   "eng_sum": 668,
   "eng_n": 35,
   "followers": 17000,
   "leads": 1264,
   "q": {
    "followers": "≈"
   },
   "note": {
    "posts": "5 din 5 săpt. (S27–S31)",
    "avgeng": "5 din 5 săpt.",
    "followers": "la S31 · rotunjit",
    "leads": "Facebook + Instagram, împreună · noi (unice): 836"
   },
   "vs": {
    "leads": -9
   },
   "topPosts": {
    "DrA": {
     "title": "Investim constant în pregătirea echipei noastre (masterclass Zucchelli)",
     "value": 51,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": "https://www.facebook.com/Dr.Ardeleanu/posts/pfbid02cNVRnqUMH1HN8NqsmJrkgwZz3kFwsy5iza6pLCGcK4yzAbWWuShKLPKNFNM91vnnl"
    },
    "DE": {
     "title": "The Amazing Smile Collection | Before & After P…",
     "value": 352,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": "https://www.facebook.com/dentestet.ro/posts/pfbid02bbiSGyfrVBkYUwVUT9U6nbdGGgYXDm7kP6br2DJNvAitnPesNoUcUBNtFnLUUx99l"
    },
    "RM": {
     "title": "La Regina Maria Dental Clinics Victoriei, fiecare …",
     "value": 640,
     "q": "",
     "week": "S28",
     "range": "6–12 iul",
     "url": "https://www.facebook.com/ReginaMariaDentalClinics/posts/pfbid035uUEYSxipo9nvk2ovRQytXh2aw5XgFfm6zNciMsreo72gLaL9BWu5BwX3WJBjCupl"
    },
    "Life": {
     "title": "Astăzi este despre recunoștință.",
     "value": 63,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": "https://www.facebook.com/LifeDentalSpa/posts/pfbid02nUBhCykmxts44Lks15Hge1XbaMjQhJe8skc3BtLQS7XTPkEBwEA1nisGa29iWffFl"
    },
    "Eli": {
     "title": "Cunoaște echipa din spatele fiecărui zâmbet!",
     "value": 76,
     "q": "",
     "week": "S27",
     "range": "29 iun–5 iul",
     "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02ZGBiDU3YP4JdeaMnHLTKr1syk4aQ4SbTpMeCaMAY5RWQYgmZ5LcUnLcdEc487Ussl&id=100038889943740"
    },
    "DB": {
     "title": "Salutare, Slobozia! Andrei Osanu vine astăzi la Fr…",
     "value": 855,
     "q": "",
     "week": "S27",
     "range": "29 iun–5 iul",
     "url": "https://www.facebook.com/reel/1791279998976626"
    }
   }
  },
  "2026-08": {
   "posts": 28,
   "eng_sum": 850,
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
     "title": "Slobozia, suntem gata! Clinica noastră es…",
     "value": 120,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": "https://www.facebook.com/reel/2116789552205727"
    },
    "DE": {
     "title": "Gingiile inflamate nu sunt doar o problemă a dinților.",
     "value": 358,
     "q": "",
     "week": "S33",
     "range": "10–16 aug",
     "url": "https://www.facebook.com/reel/931947872550133"
    },
    "RM": {
     "title": "Sângerarea gingiilor nu ar trebui ignorată, mai ales atunci când apare constant…",
     "value": 355,
     "q": "",
     "week": "S33",
     "range": "10–16 aug",
     "url": "https://www.facebook.com/reel/1365257195234621"
    },
    "Life": {
     "title": "Întâlnire cu Gabriela Cristea și Tavi Clonda la Life Dental Spa!",
     "value": 53,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": "https://www.facebook.com/reel/1554270816180397"
    },
    "Eli": {
     "title": "Avem o campanie activă alături de eMAG!",
     "value": 96,
     "q": "",
     "week": "S34",
     "range": "17–23 aug",
     "url": "https://www.facebook.com/reel/1035209452632681"
    },
    "DB": {
     "title": "Sa dansam putin de dimineata si sa Zambim cu DentalBlue!",
     "value": 40,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": "https://www.facebook.com/reel/1590538972691705"
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
   "Iulie, august și septembrie (S27–S40) au inventar complet de postări pe toate paginile, deci postările și engagementul mediu apar pentru toate cele trei luni.",
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
      "avgeng": ""
     },
     "followers": 17000,
     "topval": 51,
     "posts": 35,
     "eng_sum": 668,
     "eng_n": 35
    },
    "2026-08": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "followers": 17000,
     "topval": 120,
     "posts": 28,
     "eng_sum": 850,
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
      "avgeng": ""
     },
     "followers": 45000,
     "topval": 352,
     "posts": 63,
     "eng_sum": 1985,
     "eng_n": 63
    },
    "2026-08": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "followers": 46000,
     "topval": 358,
     "posts": 62,
     "eng_sum": 2154,
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
      "avgeng": ""
     },
     "followers": 84000,
     "topval": 640,
     "posts": 50,
     "eng_sum": 3950,
     "eng_n": 50
    },
    "2026-08": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "followers": 84000,
     "topval": 355,
     "posts": 32,
     "eng_sum": 2105,
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
      "avgeng": ""
     },
     "followers": 81000,
     "topval": 63,
     "posts": 32,
     "eng_sum": 797,
     "eng_n": 32
    },
    "2026-08": {
     "q": {
      "posts": "",
      "avgeng": "",
      "followers": "≈",
      "topval": ""
     },
     "followers": 82000,
     "topval": 53,
     "posts": 28,
     "eng_sum": 695,
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
      "avgeng": ""
     },
     "followers": 4600,
     "topval": 76,
     "posts": 28,
     "eng_sum": 748,
     "eng_n": 28
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
     "eng_sum": 481,
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
      "avgeng": ""
     },
     "followers": 6200,
     "topval": 855,
     "posts": 33,
     "eng_sum": 1856,
     "eng_n": 33
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
     "eng_sum": 533,
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
