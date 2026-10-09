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
  "Septembrie (S36–S40) are inventar complet de postări, cu reacții, comentarii și distribuiri citite pentru toate conturile (5 din 5 săptămâni). Până în S35, rapoartele conțin doar un eșantion din feed, deci iulie și august nu au număr de postări și engagement mediu.",
  "Engagement = reacții + comentarii + distribuiri.",
  "Urmăritorii sunt rotunjiți la mii în rapoarte (≈17.000), așa că o creștere lunară nu se poate vedea.",
  "Leadurile sunt din Puls (Monthly brief → Pacienți): leaduri primite din campaniile Facebook + Instagram, la un loc (aceeași cifră pe ambele pagini, pentru că nu se pot separa pe canal). Între paranteze „noi (unice)” = telefoane la prima apariție. La iulie, variația (−9%) e cea din Puls.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în rapoarte.",
  "Top postarea lunii = cea mai bună dintre topurile săptămânale ale lunii (rapoartele dau câte un top pe săptămână). „≥” apare când o săptămână din lună nu are cifre sau cifra e doar un eșantion. Linkurile postărilor nu sunt în rapoarte."
 ],
 "data": {
  "2026-07": {
   "posts": null,
   "eng_sum": null,
   "eng_n": null,
   "followers": 17000,
   "leads": 1264,
   "q": {
    "followers": "≈"
   },
   "note": {
    "posts": "raportul nu are inventar complet",
    "avgeng": "raportul nu are inventar complet",
    "followers": "rotunjit la mii · la S31",
    "leads": "Facebook + Instagram, împreună · noi (unice): 836"
   },
   "vs": {
    "leads": -9
   },
   "topPosts": {
    "DrA": {
     "title": "",
     "value": 52,
     "q": "≥",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    },
    "DE": {
     "title": "",
     "value": 22,
     "q": "≥",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    },
    "RM": {
     "title": "",
     "value": 23,
     "q": "≥",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    },
    "Life": {
     "title": "",
     "value": 56,
     "q": "≥",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    },
    "Eli": {
     "title": "",
     "value": 27,
     "q": "≥",
     "week": "S29",
     "range": "13–19 iul",
     "url": null
    },
    "DB": {
     "title": "",
     "value": 28,
     "q": "≥",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    }
   }
  },
  "2026-08": {
   "posts": null,
   "eng_sum": null,
   "eng_n": null,
   "followers": 17000,
   "leads": 1366,
   "q": {
    "followers": "≈"
   },
   "note": {
    "posts": "raportul nu are inventar complet",
    "avgeng": "raportul nu are inventar complet",
    "followers": "rotunjit la mii · la S35",
    "leads": "Facebook + Instagram, împreună · noi (unice): 832"
   },
   "topPosts": {
    "DrA": {
     "title": "Postare nouă oraș, 21 aug (49/11/3); ~13–15 postări în săptămână",
     "value": 63,
     "q": "≥",
     "week": "S34",
     "range": "17–23 aug",
     "url": null
    },
    "DE": {
     "title": "",
     "value": 45,
     "q": "≥",
     "week": "S33",
     "range": "10–16 aug",
     "url": null
    },
    "RM": {
     "title": "Zi de chirurgie, cel mai viral post al pieței",
     "value": 332,
     "q": "≥",
     "week": "S33",
     "range": "10–16 aug",
     "url": null
    },
    "Life": {
     "title": "",
     "value": 51,
     "q": "≥",
     "week": "S33",
     "range": "10–16 aug",
     "url": null
    },
    "Eli": {
     "title": "",
     "value": 55,
     "q": "≥",
     "week": "S33",
     "range": "10–16 aug",
     "url": null
    },
    "DB": {
     "title": "",
     "value": 40,
     "q": "≥",
     "week": "S33",
     "range": "10–16 aug",
     "url": null
    }
   }
  },
  "2026-09": {
   "posts": 46,
   "eng_sum": 1311,
   "eng_n": 46,
   "followers": 18000,
   "leads": 1311,
   "q": {
    "followers": "≈"
   },
   "note": {
    "posts": "5 din 5 săpt. (S36–S40)",
    "avgeng": "5 din 5 săpt.",
    "followers": "rotunjit la mii · la S40",
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
   "Septembrie (S36–S40) are inventar complet de postări pe toate paginile; iulie și august nu, deci postările și engagementul mediu apar doar pentru septembrie.",
   "Elidadent și Dental Blue pornesc de la pagini mici (4,7K și 6,3K urmăritori): cifrele lor nu se compară direct cu ale noastre.",
   "Life Dental Spa are în S40 un carusel politic (newsjacking) cu 711 interacțiuni, care urcă mult engagementul lor mediu.",
   "Life Dental Spa are urmăritorii exacți (rotunjiți la mii) din S40: 83.000."
  ],
  "data": {
   "DrA": {
    "2026-07": {
     "q": {
      "followers": "≈",
      "topval": "≥"
     },
     "followers": 17000,
     "topval": 52
    },
    "2026-08": {
     "q": {
      "followers": "≈",
      "topval": "≥"
     },
     "followers": 17000,
     "topval": 63
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
     "followers": 18000,
     "topval": 140
    }
   },
   "DE": {
    "2026-07": {
     "q": {
      "followers": "≈",
      "topval": "≥"
     },
     "followers": 45000,
     "topval": 22
    },
    "2026-08": {
     "q": {
      "followers": "≈",
      "topval": "≥"
     },
     "followers": 46000,
     "topval": 45
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
    }
   },
   "RM": {
    "2026-07": {
     "q": {
      "followers": "≈",
      "topval": "≥"
     },
     "followers": 84000,
     "topval": 23
    },
    "2026-08": {
     "q": {
      "followers": "≈",
      "topval": "≥"
     },
     "followers": 84000,
     "topval": 332
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
    }
   },
   "Life": {
    "2026-07": {
     "q": {
      "followers": "≈",
      "topval": "≥"
     },
     "followers": 81000,
     "topval": 56
    },
    "2026-08": {
     "q": {
      "followers": "≈",
      "topval": "≥"
     },
     "followers": 82000,
     "topval": 51
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
    }
   },
   "Eli": {
    "2026-07": {
     "q": {
      "followers": "≈",
      "topval": "≥"
     },
     "followers": 4600,
     "topval": 27
    },
    "2026-08": {
     "q": {
      "followers": "≈",
      "topval": "≥"
     },
     "followers": 4600,
     "topval": 55
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
    }
   },
   "DB": {
    "2026-07": {
     "q": {
      "followers": "≈",
      "topval": "≥"
     },
     "followers": 6200,
     "topval": 28
    },
    "2026-08": {
     "q": {
      "followers": "≈",
      "topval": "≥"
     },
     "followers": 6300,
     "topval": 40
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
    }
   }
  }
 }
};
