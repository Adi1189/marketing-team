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
  "Pentru iulie, august și septembrie (S29–S40) avem vizualizările totale ale fiecărui cont, citite pe 12–14 octombrie.",
  "Pentru top postare: la iulie, august și septembrie avem linkul fiecărui cont; titlul lipsește din blocurile de iulie și august.",
  "Leadurile din Puls sunt doar pentru Facebook + Instagram; pentru acest canal nu avem o sursă de leaduri.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în rapoarte.",
  "Top postarea lunii = cea mai bună dintre topurile săptămânale ale lunii (rapoartele dau câte un top pe săptămână). „≥” apare când o săptămână din lună nu are cifre sau cifra e doar un eșantion. Linkurile postărilor nu sunt în rapoarte.",
  "Octombrie e în curs: are doar S41 (5–11 octombrie), deci cifrele sunt minime („≥”) și nu se compară cu septembrie.",
  "Pentru august, blocul nu are titlurile videoclipurilor de top: în „Top postarea lunii” titlul apare „fără descriere în raport”, iar linkurile funcționează. La Dental Blue, două linkuri sunt postări foto.",
  "Urmăritorii pe TikTok sunt cifrele exacte din rapoartele săptămânale vechi, citite în acele săptămâni; pentru fiecare lună e cifra din ultima ei săptămână (iulie: S31, august: S35, septembrie: S40)."
 ],
 "data": {
  "2026-07": {
   "posts": 11,
   "views": 13589,
   "leads": null,
   "q": {
    "followers": ""
   },
   "note": {
    "posts": "3 din 3 săpt. (S29–S31)",
    "views": "vizionări citite pe 14 oct",
    "leads": "Puls are leaduri doar pentru Facebook + Instagram",
    "followers": "la S31"
   },
   "topPosts": {
    "DrA": {
     "title": "",
     "value": 2529,
     "q": "",
     "week": "S29",
     "range": "13–19 iul",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7664153989541498114"
    },
    "DE": {
     "title": "",
     "value": 1152,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7667174077785902338"
    },
    "RM": {
     "title": "",
     "value": 3421,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7667218784473632022"
    },
    "Life": {
     "title": "",
     "value": 8061,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7669377215842340129"
    },
    "Eli": {
     "title": "",
     "value": 997,
     "q": "",
     "week": "S30",
     "range": "20–26 iul",
     "url": "https://www.tiktok.com/@elidadent/video/7665774779302972694"
    },
    "DB": {
     "title": "",
     "value": 1070,
     "q": "",
     "week": "S30",
     "range": "20–26 iul",
     "url": "https://www.tiktok.com/@dentalbluechain/photo/7666729531251658005"
    }
   },
   "followers": 6746
  },
  "2026-08": {
   "posts": 16,
   "views": 17388,
   "leads": null,
   "q": {
    "views": "",
    "followers": ""
   },
   "note": {
    "posts": "4 din 4 săpt. (S32–S35)",
    "views": "vizionări citite pe 14 oct",
    "leads": "Puls are leaduri doar pentru Facebook + Instagram",
    "followers": "la S35"
   },
   "topPosts": {
    "DrA": {
     "title": "",
     "value": 1814,
     "q": "",
     "week": "S33",
     "range": "10–16 aug",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7673407421376761110"
    },
    "DE": {
     "title": "",
     "value": 1099,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7671336994064108822"
    },
    "RM": {
     "title": "",
     "value": 1664,
     "q": "",
     "week": "S35",
     "range": "24–30 aug",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7679510942287285526"
    },
    "Life": {
     "title": "",
     "value": 60400,
     "q": "≈",
     "week": "S35",
     "range": "24–30 aug",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7679017688722705697"
    },
    "Eli": {
     "title": "",
     "value": 15700,
     "q": "≈",
     "week": "S33",
     "range": "10–16 aug",
     "url": "https://www.tiktok.com/@elidadent/video/7673926290721852694"
    },
    "DB": {
     "title": "",
     "value": 1052,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": "https://www.tiktok.com/@dentalbluechain/photo/7670631193733352712"
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
    "followers": ""
   },
   "note": {
    "posts": "5 din 5 săpt.",
    "views": "vizionări citite pe 12 oct",
    "leads": "Puls are leaduri doar pentru Facebook + Instagram",
    "followers": "la S40"
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
   "followers": 6800
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
   "Vârfuri izolate (≈), nu tendință: Life 60.400 în august (S35) și 18.500 (S32), Elidadent 15.700 (S33) și 20.800 în septembrie (S38), Life 11.200 în septembrie (S36).",
   "Iulie, august și septembrie (S29–S40) au vizualizările totale ale fiecărui cont, citite pe 12–14 octombrie (cu „≈” unde pagina rotunjește)."
  ],
  "data": {
   "DrA": {
    "2026-07": {
     "q": {
      "topval": "",
      "followers": "",
      "views": ""
     },
     "posts": 11,
     "topval": 2529,
     "followers": 6746,
     "views": 13589
    },
    "2026-08": {
     "q": {
      "views": "",
      "followers": "",
      "topval": ""
     },
     "posts": 16,
     "topval": 1814,
     "followers": 6779,
     "views": 17388
    },
    "2026-09": {
     "q": {
      "views": "",
      "followers": "",
      "topval": ""
     },
     "posts": 23,
     "topval": 1776,
     "followers": 6800,
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
      "topval": "",
      "followers": "",
      "views": ""
     },
     "posts": 18,
     "topval": 1152,
     "followers": 6156,
     "views": 11378
    },
    "2026-08": {
     "q": {
      "views": "",
      "followers": "",
      "topval": ""
     },
     "posts": 22,
     "topval": 1099,
     "followers": 7990,
     "views": 12351
    },
    "2026-09": {
     "q": {
      "views": "",
      "followers": "",
      "topval": ""
     },
     "posts": 37,
     "topval": 911,
     "followers": 8511,
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
      "topval": "",
      "followers": "",
      "views": ""
     },
     "posts": 8,
     "topval": 3421,
     "followers": 5511,
     "views": 16706
    },
    "2026-08": {
     "q": {
      "views": "",
      "followers": "",
      "topval": ""
     },
     "posts": 14,
     "topval": 1664,
     "followers": 5528,
     "views": 14327
    },
    "2026-09": {
     "q": {
      "views": "",
      "followers": "",
      "topval": ""
     },
     "posts": 13,
     "topval": 1695,
     "followers": 5560,
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
      "topval": "",
      "followers": "",
      "views": ""
     },
     "posts": 19,
     "topval": 8061,
     "followers": 6874,
     "views": 24070
    },
    "2026-08": {
     "q": {
      "views": "≈",
      "followers": "",
      "topval": "≈"
     },
     "posts": 23,
     "topval": 60400,
     "followers": 6974,
     "views": 107320
    },
    "2026-09": {
     "q": {
      "views": "≈",
      "followers": "",
      "topval": "≈"
     },
     "posts": 23,
     "topval": 11200,
     "followers": 7023,
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
      "topval": "",
      "followers": "",
      "views": ""
     },
     "posts": 5,
     "topval": 997,
     "followers": 1896,
     "views": 3455
    },
    "2026-08": {
     "q": {
      "views": "≈",
      "followers": "",
      "topval": "≈"
     },
     "posts": 8,
     "topval": 15700,
     "followers": 1897,
     "views": 22226
    },
    "2026-09": {
     "q": {
      "views": "≈",
      "followers": "",
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
      "topval": "",
      "followers": "",
      "views": ""
     },
     "posts": 3,
     "topval": 1070,
     "followers": 885,
     "views": 1354
    },
    "2026-08": {
     "q": {
      "views": "",
      "followers": "",
      "topval": ""
     },
     "posts": 5,
     "topval": 1052,
     "followers": 884,
     "views": 3175
    },
    "2026-09": {
     "q": {
      "views": "",
      "followers": "",
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
