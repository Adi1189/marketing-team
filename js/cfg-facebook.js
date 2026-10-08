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
  "Doar S38–S40 au inventar complet de postări. Până pe 14 septembrie, rapoartele conțin doar un eșantion din feed, deci numărul de postări și engagementul mediu apar doar pentru septembrie, din 3 din cele 5 săptămâni.",
  "Engagement = reacții + comentarii + distribuiri. În S40 comentariile nu au fost capturate, deci valoarea e minimă.",
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
   "posts": 31,
   "eng_sum": 978,
   "eng_n": 31,
   "followers": 17000,
   "leads": 1311,
   "q": {
    "posts": "≥",
    "avgeng": "≥",
    "followers": "≈"
   },
   "note": {
    "posts": "3 din 5 săpt. (S38, S39, S40)",
    "avgeng": "3 din 5 săpt.; S40 fără comentarii",
    "followers": "rotunjit la mii · la S40",
    "leads": "Facebook + Instagram, împreună · noi (unice): 827"
   },
   "topPosts": {
    "DrA": {
     "title": "Urare Dr. Arina Lupu, 26 sept (72/59/2)",
     "value": 133,
     "q": "≥",
     "week": "S39",
     "range": "21–27 sep",
     "url": null
    },
    "DE": {
     "title": "Reel emoțional de pacient „Sunt un om fragil…”, 22 sept (198/13/14)",
     "value": 225,
     "q": "≥",
     "week": "S39",
     "range": "21–27 sep",
     "url": null
    },
    "RM": {
     "title": "Ziua Mondială a Zâmbetului, 2 oct (40/2/3)",
     "value": 45,
     "q": "",
     "week": "S40",
     "range": "28 sep–4 oct",
     "url": null
    },
    "Life": {
     "title": "Carusel newsjacking politic, 2 oct (555/7/26)",
     "value": 588,
     "q": "≥",
     "week": "S40",
     "range": "28 sep–4 oct",
     "url": null
    },
    "Eli": {
     "title": "Urare Dr. Ștefa, 24 sept (31/26/0)",
     "value": 57,
     "q": "",
     "week": "S39",
     "range": "21–27 sep",
     "url": null
    },
    "DB": {
     "title": "„Dental Blue Slobozia reunited”, 22 sept (43/7/4)",
     "value": 54,
     "q": "",
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
   "Doar S38–S40 au inventar complet de postări pentru toate paginile, deci postările și engagementul mediu apar doar pentru septembrie.",
   "Elidadent și Dental Blue pornesc de la pagini mici (4,7K și 6,3K urmăritori): cifrele lor nu se compară direct cu ale noastre.",
   "Life Dental Spa are în S40 un carusel cu 555 de reacții (newsjacking politic), care urcă mult engagementul lor mediu.",
   "Life Dental Spa nu are urmăritorii în rapoartele din septembrie; am păstrat ultima cifră (S35)."
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
      "posts": "≥",
      "avgeng": "≥",
      "followers": "≈",
      "topval": ""
     },
     "posts": 31,
     "eng_sum": 978,
     "eng_n": 31,
     "followers": 17000,
     "topval": 133
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
      "posts": "≥",
      "avgeng": "≥",
      "followers": "≈",
      "topval": ""
     },
     "posts": 48,
     "eng_sum": 1642,
     "eng_n": 48,
     "followers": 46000,
     "topval": 225
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
      "posts": "≥",
      "avgeng": "≥",
      "followers": "≈",
      "topval": ""
     },
     "posts": 27,
     "eng_sum": 313,
     "eng_n": 27,
     "followers": 84000,
     "topval": 45
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
      "posts": "≥",
      "avgeng": "≥",
      "topval": "",
      "followers": "≈"
     },
     "posts": 20,
     "eng_sum": 795,
     "eng_n": 20,
     "topval": 588,
     "followers": 82000,
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
      "posts": "≥",
      "avgeng": "≥",
      "followers": "≈",
      "topval": ""
     },
     "posts": 21,
     "eng_sum": 459,
     "eng_n": 21,
     "followers": 4700,
     "topval": 57
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
      "posts": "≥",
      "avgeng": "≥",
      "followers": "≈",
      "topval": ""
     },
     "posts": 5,
     "eng_sum": 131,
     "eng_n": 5,
     "followers": 6300,
     "topval": 54
    }
   }
  }
 }
};
