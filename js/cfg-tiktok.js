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
  "Pentru septembrie (S36–S40) avem vizualizările totale ale fiecărui cont, citite pe 12 octombrie. Pentru iulie–august, rapoartele vechi dau doar vizualizările celui mai vizionat video, deci acolo „Total vizualizări” și media rămân cu „–”.",
  "Pentru top postare: la septembrie avem titlul și linkul pentru fiecare cont; la iulie–august titlul e cunoscut doar când raportul vechi îl dă.",
  "Leadurile din Puls sunt doar pentru Facebook + Instagram; pentru acest canal nu avem o sursă de leaduri.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în rapoarte.",
  "Top postarea lunii = cea mai bună dintre topurile săptămânale ale lunii (rapoartele dau câte un top pe săptămână). „≥” apare când o săptămână din lună nu are cifre sau cifra e doar un eșantion. Linkurile postărilor nu sunt în rapoarte.",
  "Urmăritorii din septembrie sunt cei de la data rulării (nu de la sfârșitul săptămânilor), de aceea au „≈”. Pentru iulie–august e ultima cifră din rapoartele vechi.",
  "Octombrie e în curs: are doar S41 (5–11 octombrie), deci cifrele sunt minime („≥”) și nu se compară cu septembrie."
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
   "views": 22230,
   "leads": null,
   "q": {
    "views": "",
    "followers": "≈"
   },
   "note": {
    "posts": "5 din 5 săpt.",
    "views": "vizionări citite pe 12 oct",
    "leads": "Puls are leaduri doar pentru Facebook + Instagram",
    "followers": "valoare de la data rulării"
   },
   "topPosts": {
    "DrA": {
     "title": "Lucrează mai inteligent, nu mai mult! „Din experiență, pentru practică.”",
     "value": 1776,
     "q": "",
     "week": "S36",
     "range": "31 aug–6 sep",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7681621165898468610"
    },
    "DE": {
     "title": "Sensibilitatea la rece înseamnă automat o carie? (Dr. Daria Dăngeanu)",
     "value": 911,
     "q": "",
     "week": "S36",
     "range": "31 aug–6 sep",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7681602284584717590"
    },
    "RM": {
     "title": "Un implant nu înseamnă doar înlocuirea unui dinte, ci reconstruirea unei părți din zâmbetul tău astfel încât r…",
     "value": 1695,
     "q": "",
     "week": "S38",
     "range": "14–20 sep",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7686142160327986454"
    },
    "Life": {
     "title": "La o lună de la cimentarea fațetelor dentare, Gabriela Cristea a revenit la Life Dental Spa",
     "value": 11200,
     "q": "≈",
     "week": "S36",
     "range": "31 aug–6 sep",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7681260961214319904"
    },
    "Eli": {
     "title": "Toată lumea are aceeași curiozitate: “Bianca și-a făcut albire dentară?” 👀🦷 Am avut-o pe Bianca în vizită la…",
     "value": 20800,
     "q": "≈",
     "week": "S38",
     "range": "14–20 sep",
     "url": "https://www.tiktok.com/@elidadent/video/7686182757097164054"
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
   "followers": 6799
  },
  "2026-10": {
   "posts": 3,
   "views": 2217,
   "leads": null,
   "q": {
    "posts": "≥",
    "views": "≥",
    "followers": ""
   },
   "note": {
    "posts": "luna în curs: doar S41 (5–11 oct)",
    "views": "doar S41 · citit fără login",
    "leads": "luna în curs",
    "followers": "la S41"
   },
   "followers": 6799,
   "nocmp": true,
   "topPosts": {
    "DrA": {
     "title": "„Nu există scurtături către succes.” La TEDx Tudor Vianu, Dr. Virginia Ardeleanu…",
     "value": 962,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7693569974773812502"
    },
    "DE": {
     "title": "Așa arată o zi din viața noastră la DENT ESTET",
     "value": 476,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7693158476939283734"
    },
    "RM": {
     "title": "Nu tratăm un dinte. Tratăm felul în care funcționează întreg…",
     "value": 1165,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7694303661874515222"
    },
    "Life": {
     "title": "Ai nevoie de o soluție fixă pentru înlocuirea mai multor dinți…",
     "value": 1046,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7693786316923817248"
    },
    "Eli": {
     "title": "Amâni vizita la stomatolog din cauza costurilor? La Elidadent…",
     "value": 1196,
     "q": "≥",
     "week": "S41",
     "range": "5–11 oct",
     "url": "https://www.tiktok.com/@elidadent/video/7693232300917673238"
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
   "Life Dental Spa (11.200, ≈) și Elidadent (20.800, ≈) au câte un videoclip viral izolat în septembrie; sunt vârfuri, nu tendință.",
   "Septembrie (S36–S40) are vizualizările totale ale fiecărui cont, citite pe 12 octombrie (cu „≈” unde pagina rotunjește). Iulie–august, din rapoartele vechi, nu le au.",
   "Urmăritorii din septembrie sunt cei de la data rulării, cu „≈”."
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
      "views": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 23,
     "topval": 1776,
     "followers": 6799,
     "views": 22230
    },
    "2026-10": {
     "posts": 3,
     "views": 2217,
     "followers": 6799,
     "topval": 962,
     "q": {
      "posts": "≥",
      "views": "≥",
      "followers": "",
      "topval": "≥"
     }
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
      "views": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 37,
     "topval": 911,
     "followers": 8610,
     "views": 17943
    },
    "2026-10": {
     "posts": 10,
     "views": 2929,
     "followers": 8610,
     "topval": 476,
     "q": {
      "posts": "≥",
      "views": "≥",
      "followers": "",
      "topval": "≥"
     }
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
      "views": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 13,
     "topval": 1695,
     "followers": 5561,
     "views": 11259
    },
    "2026-10": {
     "posts": 4,
     "views": 3161,
     "followers": 5561,
     "topval": 1165,
     "q": {
      "posts": "≥",
      "views": "≥",
      "followers": "",
      "topval": "≥"
     }
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
      "views": "≈",
      "followers": "≈",
      "topval": "≈"
     },
     "posts": 23,
     "topval": 11200,
     "followers": 7028,
     "views": 26405
    },
    "2026-10": {
     "posts": 3,
     "views": 1722,
     "followers": 7028,
     "topval": 1046,
     "q": {
      "posts": "≥",
      "views": "≥",
      "followers": "",
      "topval": "≥"
     }
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
      "views": "≈",
      "followers": "≈",
      "topval": "≈"
     },
     "posts": 16,
     "topval": 20800,
     "followers": 1913,
     "views": 33479
    },
    "2026-10": {
     "posts": 2,
     "views": 2102,
     "followers": 1913,
     "topval": 1196,
     "q": {
      "posts": "≥",
      "views": "≥",
      "followers": "",
      "topval": "≥"
     }
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
     "q": {
      "views": "",
      "followers": "≈",
      "topval": ""
     },
     "posts": 0,
     "followers": 886,
     "views": 0,
     "topval": null
    },
    "2026-10": {
     "posts": 0,
     "views": 0,
     "followers": 886,
     "topval": null,
     "q": {
      "posts": "≥",
      "views": "≥",
      "followers": "",
      "topval": ""
     }
    }
   }
  }
 }
};
