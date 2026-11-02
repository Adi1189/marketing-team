// Date reale din rapoartele KPI Tier 1 (S27–S44), grupate pe luni.
// Iulie = S27–S31 · August = S32–S35 · Septembrie = S36–S40 · Octombrie = S41–S44.
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
  "Numărul de videouri vine din paginile de profil TikTok și e complet pentru toate cele 18 săptămâni (S27–S44).",
  "Pentru iulie, august și septembrie (S27–S40) avem vizualizările totale ale fiecărui cont, citite pe 12–14 octombrie.",
  "Pentru top postare: la iulie, august și septembrie avem titlul și linkul fiecărui cont (titlurile din iulie–august sunt citite din descrierile videoclipurilor).",
  "Leadurile din Puls sunt doar pentru Facebook + Instagram; pentru acest canal nu avem o sursă de leaduri.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în rapoarte.",
  "Octombrie (S41–S44, 5 octombrie – 1 noiembrie) e calculat din cele patru săptămâni și e complet. Atenție: S41 a fost citită fără cont autentificat, deci TikTok poate fi puțin subestimat în octombrie.",
  "Urmăritorii pe TikTok sunt cifrele exacte din rapoartele săptămânale vechi, citite în acele săptămâni; pentru fiecare lună e cifra din ultima ei săptămână (iulie: S31, august: S35, septembrie: S40, octombrie: S44)."
 ],
 "data": {
  "2026-07": {
   "posts": 19,
   "views": 24965,
   "leads": null,
   "q": {
    "followers": ""
   },
   "note": {
    "posts": "5 din 5 săpt. (S27–S31)",
    "views": "vizionări citite pe 14 oct",
    "leads": "Puls are leaduri doar pentru Facebook + Instagram",
    "followers": "la S31"
   },
   "topPosts": {
    "DrA": {
     "title": "⭐ „Ce îmi oferiți ca să șterg review-ul?” Negocierea a început... și a degenerat rapid. 😂",
     "value": 2529,
     "q": "",
     "week": "S29",
     "range": "13–19 iul",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7664153989541498114"
    },
    "DE": {
     "title": "🩵 Ce se întâmplă cu dintele tău după un tratament de canal? Atunci când nervul este îndepărtat, spațiul din interiorul rădăcinii trebuie perfect sigilat...",
     "value": 6214,
     "q": "",
     "week": "S27",
     "range": "29 iun–5 iul",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7657090334668721430"
    },
    "RM": {
     "title": "„Alignerele lasă triunghiuri negre între dinți.” Ai auzit afirmația asta?",
     "value": 3421,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7667218784473632022"
    },
    "Life": {
     "title": "🔴 Proteza dentară se mișcă atunci când mănânci sau vorbești? ❌",
     "value": 8061,
     "q": "",
     "week": "S31",
     "range": "27 iul–2 aug",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7669377215842340129"
    },
    "Eli": {
     "title": "Alex Stamate, am rămas fără anestezie fix când ai venit. 🤭",
     "value": 2023,
     "q": "",
     "week": "S28",
     "range": "6–12 iul",
     "url": "https://www.tiktok.com/@elidadent/video/7660531282253712662"
    },
    "DB": {
     "title": "🎉 Freeland 2026 🦷 Dental Blue Team 👯 Andrei Osanu Zumba, pacientul și colaboratorul nostru",
     "value": 2679,
     "q": "",
     "week": "S27",
     "range": "29 iun–5 iul",
     "url": "https://www.tiktok.com/@dentalbluechain/video/7659146519467134216"
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
     "title": "😂 Există întrebări care vin exact în momentul nepotrivit. Mai ales la dentist. Cu gura deschisă.",
     "value": 1814,
     "q": "",
     "week": "S33",
     "range": "10–16 aug",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7673407421376761110"
    },
    "DE": {
     "title": "Un implant dentar în zona estetică trebuie să se integreze firesc în zâmbet. Dr. Adelin Radu explică la B1.ro de ce...",
     "value": 1099,
     "q": "",
     "week": "S32",
     "range": "3–9 aug",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7671336994064108822"
    },
    "RM": {
     "title": "Copilul tău fuge de dentist? 🏃 Nu ești singurul părinte în situația asta. Sfatul Dr. Iuliei Burcă, medic specialist pedodont.",
     "value": 1664,
     "q": "",
     "week": "S35",
     "range": "24–30 aug",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7679510942287285526"
    },
    "Life": {
     "title": "Gabriela Cristea și Tavi Clonda, împreună cu întreaga familie, aleg Life Dental Spa.",
     "value": 60400,
     "q": "≈",
     "week": "S35",
     "range": "24–30 aug",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7679017688722705697"
    },
    "Eli": {
     "title": "🦷 Importanța examenului radiologic: caz real al unui pacient de 13 ani, venit pentru o urgență stomatologică.",
     "value": 15700,
     "q": "≈",
     "week": "S33",
     "range": "10–16 aug",
     "url": "https://www.tiktok.com/@elidadent/video/7673926290721852694"
    },
    "DB": {
     "title": "Pacient cu boală parodontală avansată: extracția tuturor dinților compromiși, 12 implanturi dentare și lucrare provizorie fixă în aceeași etapă (postare foto)",
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
   "posts": 20,
   "views": 16380,
   "leads": null,
   "q": {
    "posts": "",
    "views": "",
    "followers": ""
   },
   "note": {
    "followers": "la S44",
    "leads": "Puls: nu avem încă cifra pentru octombrie",
    "posts": "S41 citită fără login",
    "views": "S41 citită fără login"
   },
   "followers": 6807,
   "topPosts": {
    "DrA": {
     "title": "Ce este de făcut…",
     "value": 1425,
     "q": "",
     "week": "S42",
     "range": "12–18 oct",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7696065418598927638"
    },
    "DE": {
     "title": "Pierderea unui dinte poate avea consecințe asupra masticației și sănătății orale",
     "value": 727,
     "q": "",
     "week": "S44",
     "range": "26 oct–1 nov",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7702408145188031766"
    },
    "RM": {
     "title": "Când cineva drag evită anumite alimente și nu mai zâmbește la fel de liber…",
     "value": 1635,
     "q": "",
     "week": "S44",
     "range": "26 oct–1 nov",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7701775246151503126"
    },
    "Life": {
     "title": "POV: urmează un plan de tratament complex și răspunsul tău este „N-am niciun pic de emoții.”",
     "value": 4390,
     "q": "",
     "week": "S44",
     "range": "26 oct–1 nov",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7700922006753037601"
    },
    "Eli": {
     "title": "Ce faci când pacientul întârzie și Halloween-ul bate la ușă? 🎃",
     "value": 4526,
     "q": "",
     "week": "S44",
     "range": "26 oct–1 nov",
     "url": "https://www.tiktok.com/@elidadent/video/7702534316575755542"
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
   "Dental Blue a postat doar 10 videoclipuri în 18 săptămâni (S27–S44). Dental Safari nu are cont TikTok, deci nu e în comparație.",
   "„≥” la top înseamnă că raportul dă doar un minim (de exemplu „903+”).",
   "Vârfuri izolate (≈), nu tendință: Life 60.400 în august (S35) și 18.500 (S32), Elidadent 15.700 (S33) și 20.800 în septembrie (S38), Life 11.200 în septembrie (S36).",
   "Iulie, august și septembrie (S27–S40) au vizualizările totale ale fiecărui cont, citite pe 12–14 octombrie (cu „≈” unde pagina rotunjește)."
  ],
  "data": {
   "DrA": {
    "2026-07": {
     "q": {
      "topval": "",
      "followers": ""
     },
     "posts": 19,
     "topval": 2529,
     "followers": 6746,
     "views": 24965
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
     "posts": 20,
     "views": 16380,
     "followers": 6807,
     "topval": 1425,
     "q": {
      "followers": "",
      "topval": ""
     }
    }
   },
   "DE": {
    "2026-07": {
     "q": {
      "topval": "",
      "followers": ""
     },
     "posts": 30,
     "topval": 6214,
     "followers": 6156,
     "views": 24687
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
     "posts": 41,
     "views": 14079,
     "followers": 9373,
     "topval": 727,
     "q": {
      "followers": "",
      "topval": ""
     }
    }
   },
   "RM": {
    "2026-07": {
     "q": {
      "topval": "",
      "followers": ""
     },
     "posts": 9,
     "topval": 3421,
     "followers": 5511,
     "views": 17822
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
     "posts": 10,
     "views": 9085,
     "followers": 5573,
     "topval": 1635,
     "q": {
      "followers": "",
      "topval": ""
     }
    }
   },
   "Life": {
    "2026-07": {
     "q": {
      "topval": "",
      "followers": ""
     },
     "posts": 27,
     "topval": 8061,
     "followers": 6874,
     "views": 27837
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
     "posts": 15,
     "views": 10115,
     "followers": 7038,
     "topval": 4390,
     "q": {
      "followers": "",
      "topval": ""
     }
    }
   },
   "Eli": {
    "2026-07": {
     "q": {
      "topval": "",
      "followers": ""
     },
     "posts": 12,
     "topval": 2023,
     "followers": 1896,
     "views": 12178
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
     "posts": 12,
     "views": 14252,
     "followers": 1928,
     "topval": 4526,
     "q": {
      "followers": "",
      "topval": ""
     }
    }
   },
   "DB": {
    "2026-07": {
     "q": {
      "topval": "",
      "followers": ""
     },
     "posts": 5,
     "topval": 2679,
     "followers": 885,
     "views": 4710
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
     "followers": 885,
     "topval": null,
     "q": {
      "followers": "",
      "topval": ""
     }
    }
   }
  }
 }
};
