// Date reale din rapoartele KPI Tier 1 (12 săptămâni, S29–S40), grupate pe luni cum apar în rapoarte.
// Iulie = S29–S31 · August = S32–S35 · Septembrie = S36–S40.
window.REPORT_CONFIG = {
 "channel": "TikTok",
 "demo": false,
 "kpis": [
  {
   "key": "posts",
   "label": "Număr de postări",
   "hint": "câte videoclipuri au fost publicate în perioada aleasă",
   "type": "num",
   "additive": true
  },
  {
   "key": "views",
   "label": "Total vizualizări",
   "hint": "de câte ori au fost văzute videoclipurile în perioada măsurată",
   "type": "num",
   "additive": true
  },
  {
   "key": "avgviews",
   "label": "Număr mediu de vizualizări",
   "hint": "vizualizări împărțite la numărul de postări (media pe postare)",
   "type": "num",
   "additive": true,
   "ratio": [
    "views",
    "posts"
   ]
  },
  {
   "key": "followers",
   "label": "Număr de urmăritori",
   "hint": "câți urmăritori are contul, la ultimul raport din perioadă",
   "type": "num",
   "additive": "last"
  },
  {
   "key": "leads",
   "label": "Număr de leaduri",
   "hint": "contacte noi (persoane interesate de servicii) venite din acest canal",
   "type": "num",
   "additive": true
  }
 ],
 "top": {
  "title": "Top postarea lunii · Dr. Ardeleanu vs concurența",
  "titleYtd": "Top postarea perioadei · Dr. Ardeleanu vs concurența",
  "mode": "brands",
  "metricLabel": "Vizualizări",
  "showMonth": true
 },
 "notes": [
  "Perioadele sunt grupate ca în rapoartele KPI: iulie = S29–S31, august = S32–S35, septembrie = S36–S40.",
  "Numărul de videouri vine din paginile de profil TikTok și e complet pentru toate cele 12 săptămâni.",
  "Rapoartele nu dau vizualizările totale, ci doar vizualizările celui mai vizionat video din fiecare săptămână. De aceea „Total vizualizări” și media lipsesc.",
  "Pentru top postare: la iulie știm titlul (1.625 de vizualizări); la august și septembrie raportul dă doar cifra, fără titlu.",
  "Leadurile din Puls sunt doar pentru Facebook + Instagram; pentru acest canal nu avem o sursă de leaduri.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în rapoarte.",
  "Top postarea lunii = cea mai bună dintre topurile săptămânale ale lunii (rapoartele dau câte un top pe săptămână). „≥” apare când o săptămână din lună nu are cifre sau cifra e doar un eșantion. Linkurile postărilor nu sunt în rapoarte.",
  "Urmăritorii sunt cifre exacte din profil; pentru fiecare lună e ultima cifră din raport."
 ],
 "data": {
  "2026-07": {
   "posts": 11,
   "views": null,
   "leads": null,
   "q": {},
   "note": {
    "posts": "3 din 3 săpt.",
    "views": "raportul dă doar vizionările celui mai vizionat video",
    "avgviews": "nu se poate calcula fără total",
    "leads": "Puls are leaduri doar pentru Facebook + Instagram",
    "followers": "la S31, cifră exactă"
   },
   "topPosts": {
    "DrA": {
     "title": "Comedie / sketch recenzii, 19 iul (1.625 views)",
     "value": 1625,
     "q": "",
     "week": "S29",
     "range": "13–19 iul",
     "url": null
    },
    "DE": {
     "title": "titlu neprecizat în raport",
     "value": 1048,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    },
    "RM": {
     "title": "titlu neprecizat în raport",
     "value": 2642,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    },
    "Life": {
     "title": "titlu neprecizat în raport",
     "value": 4871,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    },
    "Eli": {
     "title": "titlu neprecizat în raport",
     "value": 866,
     "q": "≥",
     "week": "S30",
     "range": "20–26 iul",
     "url": null
    },
    "DB": {
     "title": "titlu neprecizat în raport",
     "value": 159,
     "q": "≥",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": null
    }
   },
   "followers": 6746
  },
  "2026-08": {
   "posts": 16,
   "views": null,
   "leads": null,
   "q": {},
   "note": {
    "posts": "4 din 4 săpt.",
    "views": "raportul dă doar vizionările celui mai vizionat video",
    "avgviews": "nu se poate calcula fără total",
    "leads": "Puls are leaduri doar pentru Facebook + Instagram",
    "followers": "la S35, cifră exactă"
   },
   "topPosts": {
    "DrA": {
     "title": "titlu neprecizat în raport",
     "value": 1324,
     "q": "",
     "week": "S35",
     "range": "24–30 aug",
     "url": null
    },
    "DE": {
     "title": "titlu neprecizat în raport",
     "value": 1008,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": null
    },
    "RM": {
     "title": "titlu neprecizat în raport",
     "value": 1242,
     "q": "",
     "week": "S34",
     "range": "17–23 aug",
     "url": null
    },
    "Life": {
     "title": "titlu neprecizat în raport",
     "value": 37500,
     "q": "",
     "week": "S35",
     "range": "24–30 aug",
     "url": null
    },
    "Eli": {
     "title": "titlu neprecizat în raport",
     "value": 10500,
     "q": "",
     "week": "S33",
     "range": "10–16 aug",
     "url": null
    },
    "DB": {
     "title": "titlu neprecizat în raport",
     "value": 217,
     "q": "≥",
     "week": "S33",
     "range": "10–16 aug",
     "url": null
    }
   },
   "followers": 6779
  },
  "2026-09": {
   "posts": 23,
   "views": null,
   "leads": null,
   "q": {},
   "note": {
    "posts": "5 din 5 săpt.",
    "views": "raportul dă doar vizionările celui mai vizionat video",
    "avgviews": "nu se poate calcula fără total",
    "leads": "Puls are leaduri doar pentru Facebook + Instagram",
    "followers": "la S40, cifră exactă"
   },
   "topPosts": {
    "DrA": {
     "title": "titlu neprecizat în raport",
     "value": 1688,
     "q": "",
     "week": "S38",
     "range": "14–20 sep",
     "url": null
    },
    "DE": {
     "title": "titlu neprecizat în raport",
     "value": 865,
     "q": "",
     "week": "S36",
     "range": "31 aug–6 sep",
     "url": null
    },
    "RM": {
     "title": "titlu neprecizat în raport",
     "value": 1433,
     "q": "",
     "week": "S37",
     "range": "7–13 sep",
     "url": null
    },
    "Life": {
     "title": "titlu neprecizat în raport",
     "value": 10900,
     "q": "",
     "week": "S36",
     "range": "31 aug–6 sep",
     "url": null
    },
    "Eli": {
     "title": "titlu neprecizat în raport",
     "value": 14600,
     "q": "",
     "week": "S38",
     "range": "14–20 sep",
     "url": null
    },
    "DB": {
     "title": "",
     "value": null,
     "q": "",
     "week": null,
     "range": null,
     "url": null
    }
   },
   "followers": 6800
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
    "hint": "videoclipuri publicate (din paginile de profil)",
    "type": "num",
    "additive": true
   },
   {
    "key": "views",
    "label": "Total vizualizări",
    "hint": "vizualizările videoclipurilor publicate în perioadă",
    "type": "num",
    "additive": true
   },
   {
    "key": "avgviews",
    "label": "Medie vizualizări / video",
    "hint": "vizualizări împărțite la numărul de videoclipuri",
    "type": "num",
    "additive": true,
    "ratio": [
     "views",
     "posts"
    ]
   },
   {
    "key": "followers",
    "label": "Urmăritori",
    "hint": "urmăritorii contului, la ultimul raport din lună",
    "type": "num",
    "additive": "last"
   },
   {
    "key": "topval",
    "label": "Top video (vizualizări)",
    "hint": "cel mai vizionat video din perioadă",
    "type": "num",
    "additive": "max"
   }
  ],
  "notes": [
   "Dental Blue a postat doar 3 videoclipuri în 12 săptămâni. Dental Safari nu are cont TikTok, deci nu e în comparație.",
   "„≥” la top înseamnă că raportul dă doar un minim (de exemplu „903+”).",
   "Life Dental Spa (10.900) și Elidadent (14.600) au câte un videoclip viral izolat în septembrie; sunt vârfuri, nu tendință.",
   "Rapoartele TikTok nu dau vizualizările totale pe cont, doar vizualizările celui mai vizionat video din fiecare săptămână; de aceea „Total vizualizări” și media rămân cu „–”, ca să avem aceleași coloane ca la YouTube.",
   "Urmăritorii sunt cifre exacte din profil, de la ultimul raport din lună."
  ],
  "data": {
   "DrA": {
    "2026-07": {
     "q": {
      "topval": ""
     },
     "posts": 11,
     "topval": 1625,
     "followers": 6746
    },
    "2026-08": {
     "q": {
      "topval": ""
     },
     "posts": 16,
     "topval": 1324,
     "followers": 6779
    },
    "2026-09": {
     "q": {
      "topval": ""
     },
     "posts": 23,
     "topval": 1688,
     "followers": 6800
    }
   },
   "DE": {
    "2026-07": {
     "q": {
      "topval": ""
     },
     "posts": 13,
     "topval": 1048,
     "followers": 6156
    },
    "2026-08": {
     "q": {
      "topval": ""
     },
     "posts": 22,
     "topval": 1008,
     "followers": 7990
    },
    "2026-09": {
     "q": {
      "topval": ""
     },
     "posts": 43,
     "topval": 865,
     "followers": 8511
    }
   },
   "RM": {
    "2026-07": {
     "q": {
      "topval": ""
     },
     "posts": 8,
     "topval": 2642,
     "followers": 5511
    },
    "2026-08": {
     "q": {
      "topval": ""
     },
     "posts": 14,
     "topval": 1242,
     "followers": 5528
    },
    "2026-09": {
     "q": {
      "topval": ""
     },
     "posts": 13,
     "topval": 1433,
     "followers": 5560
    }
   },
   "Life": {
    "2026-07": {
     "q": {
      "topval": ""
     },
     "posts": 20,
     "topval": 4871,
     "followers": 6874
    },
    "2026-08": {
     "q": {
      "topval": ""
     },
     "posts": 23,
     "topval": 37500,
     "followers": 6974
    },
    "2026-09": {
     "q": {
      "topval": ""
     },
     "posts": 25,
     "topval": 10900,
     "followers": 7023
    }
   },
   "Eli": {
    "2026-07": {
     "q": {
      "topval": ""
     },
     "posts": 5,
     "topval": 866,
     "followers": 1896
    },
    "2026-08": {
     "q": {
      "topval": ""
     },
     "posts": 8,
     "topval": 10500,
     "followers": 1897
    },
    "2026-09": {
     "q": {
      "topval": ""
     },
     "posts": 18,
     "topval": 14600,
     "followers": 1913
    }
   },
   "DB": {
    "2026-07": {
     "q": {
      "topval": ""
     },
     "posts": 1,
     "topval": 159,
     "followers": 885
    },
    "2026-08": {
     "q": {
      "topval": ""
     },
     "posts": 2,
     "topval": 217,
     "followers": 884
    },
    "2026-09": {
     "q": {},
     "posts": 0,
     "followers": 886
    }
   }
  }
 }
};
