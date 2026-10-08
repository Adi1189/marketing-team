// Date reale din Puls (Monthly brief → Pacienți) pentru iul–sep 2026 + numărătoare recenzii (septembrie).
window.REPORT_CONFIG = {
 "channel": "Sumar",
 "demo": false,
 "pillText": "Date reale · iul–sep 2026",
 "kpis": [
  {
   "key": "leads",
   "label": "Leaduri primite Facebook + Instagram",
   "hint": "lead-urile primite în lună din campaniile Meta, inclusiv telefoanele care au mai sunat",
   "type": "num",
   "additive": true
  },
  {
   "key": "newleads",
   "label": "Leaduri noi (unice) Facebook + Instagram",
   "hint": "telefoane la prima apariție, fără cele care au mai sunat; pe ele se calculează conversia",
   "type": "num",
   "additive": true
  },
  {
   "key": "convrate",
   "decimals": 0,
   "label": "Rata de conversie leaduri → pacienți",
   "hint": "din 100 de leaduri noi (unice), câți au fost programați, în procente",
   "type": "pct",
   "additive": false
  },
  {
   "key": "newrate",
   "label": "Rata de pacienți noi",
   "hint": "din 100 de pacienți care au venit în lună, câți sunt noi (prima vizită), în procente",
   "type": "pct",
   "additive": false,
   "decimals": 0
  },
  {
   "key": "p0",
   "label": "Pacienți noi înregistrați (P0)",
   "hint": "pacienți înregistrați în sistem în lună, suma tuturor clinicilor",
   "type": "num",
   "additive": true
  },
  {
   "key": "reviews",
   "label": "Recenzii Google",
   "hint": "recenzii Google noi primite în lună, la toate clinicile",
   "type": "num",
   "additive": true
  }
 ],
 "top": null,
 "notes": [
  "Date reale din Puls pentru iulie, august și septembrie 2026 (Monthly brief → Pacienți și Marketing · Social Ads); recenziile Google sunt numărătoarea ta (total rețea, pe toate cele trei luni).",
  "Leaduri primite = toate lead-urile din campaniile Facebook și Instagram din lună, inclusiv telefoanele care au mai sunat. Leaduri noi (unice) = telefoane la prima apariție în istoric. Diferența dintre ele e procentul de leaduri dublate.",
  "Conversia = leaduri noi programate ÷ leaduri noi. Rata de pacienți noi = din pacienții unici ai lunii, ce procent sunt la prima vizită (restul sunt recurenți).",
  "P0 = pacienți noi înregistrați în sistem în lună, suma tuturor clinicilor. La iulie, variațiile față de luna anterioară (−9% la leaduri primite și la leaduri noi, +9% la P0, +54% la recenzii față de iunie: 118) sunt cele din Puls și din numărătoarea ta, pentru că iunie nu e în pagină.",
  "Sursa leadurilor pe clinici e tabelul „FB_adds_campaigns” (canal Facebook + Instagram), cu cifre care pot diferi cu câteva procente de raportul Tableau. Suma clinicilor e puțin peste totalul rețelei, fiindcă același telefon poate apărea la mai multe clinici.",
  "Defalcarea recenziilor pe clinici urmează. Brăila nu e în lista de clinici pentru recenzii."
 ],
 "data": {
  "2026-07": {
   "leads": 1264,
   "convrate": 53,
   "p0": 1656,
   "reviews": 182,
   "q": {},
   "note": {
    "leads": "medie 21 luni (iul 25–iul 26): 1.126",
    "convrate": "leaduri noi programate ÷ leaduri noi · medie: 43%",
    "newrate": "din 3.737 pacienți unici · 56% recurenți",
    "p0": "+49% față de iul 2025 · medie 12 luni: 1.316",
    "reviews": "defalcarea pe clinici urmează",
    "newleads": "33,9% din leadurile primite sunt telefoane deja văzute"
   },
   "newrate": 44,
   "vs": {
    "leads": -9,
    "p0": 9,
    "newleads": -9,
    "reviews": 54.2
   },
   "p0table": {
    "clusters": [
     {
      "id": "c1",
      "name": "Cluster 1 · Zona de Sud",
      "rows": [
       {
        "n": "Oltenița",
        "p0": 184,
        "mom": 10,
        "yoy": 8,
        "ytd": -3
       },
       {
        "n": "Giurgiu",
        "p0": 238,
        "mom": 49,
        "yoy": 16,
        "ytd": -9
       },
       {
        "n": "Slobozia",
        "p0": 191,
        "mom": 8,
        "yoy": -13,
        "ytd": -14
       },
       {
        "n": "Călărași",
        "p0": 322,
        "mom": 19,
        "yoy": 14,
        "ytd": -5
       },
       {
        "n": "Brăila",
        "p0": null,
        "mom": null,
        "yoy": null,
        "ytd": null
       }
      ],
      "total": {
       "p0": 234,
       "mom": 21,
       "yoy": 6,
       "ytd": -8,
       "avg12": 187,
       "avg12d": 25
      },
      "sum": {
       "p0": 935,
       "mom": 21,
       "yoy": 6,
       "ytd": -8,
       "avg12": 748,
       "avg12d": 25
      }
     },
     {
      "id": "c2",
      "name": "Cluster 2 · Buc + Centru",
      "rows": [
       {
        "n": "Dorobanți",
        "p0": 100,
        "mom": -3,
        "yoy": -27,
        "ytd": 4
       },
       {
        "n": "Cotroceni",
        "p0": 71,
        "mom": 3,
        "yoy": -22,
        "ytd": -17
       },
       {
        "n": "Târgoviște",
        "p0": 218,
        "mom": -1,
        "yoy": null,
        "ytd": null
       },
       {
        "n": "Focșani",
        "p0": 332,
        "mom": -4,
        "yoy": null,
        "ytd": null
       }
      ],
      "total": {
       "p0": 180,
       "mom": -3,
       "yoy": 137,
       "ytd": 84,
       "avg12": 162,
       "avg12d": 11
      },
      "sum": {
       "p0": 721,
       "mom": -2,
       "yoy": 215,
       "ytd": 236,
       "avg12": 568,
       "avg12d": 27
      }
     }
    ],
    "network": {
     "avg": {
      "p0": 207,
      "mom": 10,
      "yoy": 31,
      "avg12": 175,
      "avg12d": 18
     },
     "sum": {
      "p0": 1656,
      "mom": 9,
      "yoy": 49,
      "avg12": 1316,
      "avg12d": 26
     }
    }
   },
   "newleads": 836,
   "leadtable": {
    "clusters": [
     {
      "id": "c1",
      "name": "Cluster 1 · Zona de Sud",
      "rows": [
       {
        "n": "Oltenița",
        "leads": 62,
        "conv": 35
       },
       {
        "n": "Giurgiu",
        "leads": 123,
        "conv": 52
       },
       {
        "n": "Slobozia",
        "leads": 83,
        "conv": 58
       },
       {
        "n": "Călărași",
        "leads": 130,
        "conv": 56
       },
       {
        "n": "Brăila",
        "leads": null,
        "conv": null
       }
      ]
     },
     {
      "id": "c2",
      "name": "Cluster 2 · Buc + Centru",
      "rows": [
       {
        "n": "Dorobanți",
        "leads": 111,
        "conv": 60
       },
       {
        "n": "Cotroceni",
        "leads": 0,
        "conv": null
       },
       {
        "n": "Târgoviște",
        "leads": 154,
        "conv": 50
       },
       {
        "n": "Focșani",
        "leads": 179,
        "conv": 51
       }
      ]
     }
    ],
    "network": {
     "leads": 836,
     "conv": 53
    }
   },
   "reviews_by": {
    "total": 182,
    "clusters": [
     {
      "id": "c1",
      "name": "Cluster 1 · Zona de Sud",
      "rows": [
       {
        "n": "Oltenița",
        "v": null
       },
       {
        "n": "Giurgiu",
        "v": null
       },
       {
        "n": "Slobozia",
        "v": null
       },
       {
        "n": "Călărași",
        "v": null
       }
      ]
     },
     {
      "id": "c2",
      "name": "Cluster 2 · Buc + Centru",
      "rows": [
       {
        "n": "Dorobanți",
        "v": null
       },
       {
        "n": "Cotroceni",
        "v": null
       },
       {
        "n": "Târgoviște",
        "v": null
       },
       {
        "n": "Focșani",
        "v": null
       }
      ]
     }
    ]
   }
  },
  "2026-08": {
   "leads": 1366,
   "convrate": 54,
   "p0": 1611,
   "reviews": 195,
   "q": {},
   "note": {
    "leads": "medie 21 luni (iul 25–iul 26): 1.126",
    "convrate": "leaduri noi programate ÷ leaduri noi · medie: 43%",
    "newrate": "din 3.467 pacienți unici · 54% recurenți",
    "p0": "+30% față de aug 2025 · medie 12 luni: 1.347",
    "reviews": "defalcarea pe clinici urmează",
    "newleads": "39,1% din leadurile primite sunt telefoane deja văzute"
   },
   "newrate": 46,
   "p0table": {
    "clusters": [
     {
      "id": "c1",
      "name": "Cluster 1 · Zona de Sud",
      "rows": [
       {
        "n": "Oltenița",
        "p0": 177,
        "mom": -4,
        "yoy": 5,
        "ytd": -2
       },
       {
        "n": "Giurgiu",
        "p0": 239,
        "mom": 0,
        "yoy": 1,
        "ytd": -7
       },
       {
        "n": "Slobozia",
        "p0": 204,
        "mom": 7,
        "yoy": 21,
        "ytd": -10
       },
       {
        "n": "Călărași",
        "p0": 242,
        "mom": -25,
        "yoy": -7,
        "ytd": -5
       },
       {
        "n": "Brăila",
        "p0": null,
        "mom": null,
        "yoy": null,
        "ytd": null
       }
      ],
      "total": {
       "p0": 216,
       "mom": -8,
       "yoy": 3,
       "ytd": -6,
       "avg12": 188,
       "avg12d": 15
      },
      "sum": {
       "p0": 862,
       "mom": -8,
       "yoy": 3,
       "ytd": -6,
       "avg12": 750,
       "avg12d": 15
      }
     },
     {
      "id": "c2",
      "name": "Cluster 2 · Buc + Centru",
      "rows": [
       {
        "n": "Dorobanți",
        "p0": 93,
        "mom": -7,
        "yoy": 37,
        "ytd": 7
       },
       {
        "n": "Cotroceni",
        "p0": 103,
        "mom": 45,
        "yoy": 84,
        "ytd": -9
       },
       {
        "n": "Târgoviște",
        "p0": 218,
        "mom": 0,
        "yoy": -23,
        "ytd": 439
       },
       {
        "n": "Focșani",
        "p0": 335,
        "mom": 1,
        "yoy": null,
        "ytd": null
       }
      ],
      "total": {
       "p0": 187,
       "mom": 4,
       "yoy": 38,
       "ytd": 75,
       "avg12": 166,
       "avg12d": 13
      },
      "sum": {
       "p0": 749,
       "mom": 4,
       "yoy": 84,
       "ytd": 200,
       "avg12": 597,
       "avg12d": 25
      }
     }
    ],
    "network": {
     "avg": {
      "p0": 201,
      "mom": -3,
      "yoy": 13,
      "avg12": 177,
      "avg12d": 14
     },
     "sum": {
      "p0": 1611,
      "mom": -3,
      "yoy": 30,
      "avg12": 1347,
      "avg12d": 20
     }
    }
   },
   "newleads": 832,
   "leadtable": {
    "clusters": [
     {
      "id": "c1",
      "name": "Cluster 1 · Zona de Sud",
      "rows": [
       {
        "n": "Oltenița",
        "leads": 72,
        "conv": 35
       },
       {
        "n": "Giurgiu",
        "leads": 146,
        "conv": 66
       },
       {
        "n": "Slobozia",
        "leads": 68,
        "conv": 56
       },
       {
        "n": "Călărași",
        "leads": 130,
        "conv": 28
       },
       {
        "n": "Brăila",
        "leads": null,
        "conv": null
       }
      ]
     },
     {
      "id": "c2",
      "name": "Cluster 2 · Buc + Centru",
      "rows": [
       {
        "n": "Dorobanți",
        "leads": 118,
        "conv": 66
       },
       {
        "n": "Cotroceni",
        "leads": 0,
        "conv": null
       },
       {
        "n": "Târgoviște",
        "leads": 145,
        "conv": 61
       },
       {
        "n": "Focșani",
        "leads": 162,
        "conv": 54
       }
      ]
     }
    ],
    "network": {
     "leads": 832,
     "conv": 54
    }
   },
   "reviews_by": {
    "total": 195,
    "clusters": [
     {
      "id": "c1",
      "name": "Cluster 1 · Zona de Sud",
      "rows": [
       {
        "n": "Oltenița",
        "v": null
       },
       {
        "n": "Giurgiu",
        "v": null
       },
       {
        "n": "Slobozia",
        "v": null
       },
       {
        "n": "Călărași",
        "v": null
       }
      ]
     },
     {
      "id": "c2",
      "name": "Cluster 2 · Buc + Centru",
      "rows": [
       {
        "n": "Dorobanți",
        "v": null
       },
       {
        "n": "Cotroceni",
        "v": null
       },
       {
        "n": "Târgoviște",
        "v": null
       },
       {
        "n": "Focșani",
        "v": null
       }
      ]
     }
    ]
   }
  },
  "2026-09": {
   "leads": 1311,
   "convrate": 50,
   "p0": 1427,
   "reviews": 250,
   "q": {},
   "note": {
    "leads": "medie 21 luni (iul 25–iul 26): 1.126",
    "convrate": "leaduri noi programate ÷ leaduri noi · medie: 43%",
    "newrate": "din 3.779 pacienți unici · 62% recurenți",
    "p0": "+20% față de sep 2025 · medie 12 luni: 1.367",
    "reviews": "defalcarea pe clinici urmează",
    "newleads": "36,9% din leadurile primite sunt telefoane deja văzute"
   },
   "p0table": {
    "clusters": [
     {
      "id": "c1",
      "name": "Cluster 1 · Zona de Sud",
      "rows": [
       {
        "n": "Oltenița",
        "p0": 159,
        "mom": -10,
        "yoy": 19,
        "ytd": 0
       },
       {
        "n": "Giurgiu",
        "p0": 198,
        "mom": -17,
        "yoy": 8,
        "ytd": -6
       },
       {
        "n": "Slobozia",
        "p0": 167,
        "mom": -18,
        "yoy": -3,
        "ytd": -9
       },
       {
        "n": "Călărași",
        "p0": 223,
        "mom": -8,
        "yoy": -4,
        "ytd": -5
       },
       {
        "n": "Brăila",
        "p0": null,
        "mom": null,
        "yoy": null,
        "ytd": null
       }
      ],
      "total": {
       "p0": 187,
       "mom": -13,
       "yoy": 3,
       "ytd": -5,
       "avg12": 188,
       "avg12d": -1
      },
      "sum": {
       "p0": 747,
       "mom": -13,
       "yoy": 3,
       "ytd": -5,
       "avg12": 752,
       "avg12d": -1
      }
     },
     {
      "id": "c2",
      "name": "Cluster 2 · Buc + Centru",
      "rows": [
       {
        "n": "Dorobanți",
        "p0": 86,
        "mom": -8,
        "yoy": -39,
        "ytd": 0
       },
       {
        "n": "Cotroceni",
        "p0": 72,
        "mom": -30,
        "yoy": -42,
        "ytd": -14
       },
       {
        "n": "Târgoviște",
        "p0": 224,
        "mom": 3,
        "yoy": 11,
        "ytd": 261
       },
       {
        "n": "Focșani",
        "p0": 298,
        "mom": -11,
        "yoy": null,
        "ytd": null
       }
      ],
      "total": {
       "p0": 170,
       "mom": -9,
       "yoy": 9,
       "ytd": 64,
       "avg12": 167,
       "avg12d": 2
      },
      "sum": {
       "p0": 680,
       "mom": -9,
       "yoy": 46,
       "ytd": 167,
       "avg12": 615,
       "avg12d": 11
      }
     }
    ],
    "network": {
     "avg": {
      "p0": 178,
      "mom": -11,
      "yoy": 5,
      "avg12": 178,
      "avg12d": 0
     },
     "sum": {
      "p0": 1427,
      "mom": -11,
      "yoy": 20,
      "avg12": 1367,
      "avg12d": 4
     }
    }
   },
   "reviews_by": {
    "total": 250,
    "clusters": [
     {
      "id": "c1",
      "name": "Cluster 1 · Zona de Sud",
      "rows": [
       {
        "n": "Oltenița",
        "v": null
       },
       {
        "n": "Giurgiu",
        "v": null
       },
       {
        "n": "Slobozia",
        "v": null
       },
       {
        "n": "Călărași",
        "v": null
       }
      ]
     },
     {
      "id": "c2",
      "name": "Cluster 2 · Buc + Centru",
      "rows": [
       {
        "n": "Dorobanți",
        "v": null
       },
       {
        "n": "Cotroceni",
        "v": null
       },
       {
        "n": "Târgoviște",
        "v": null
       },
       {
        "n": "Focșani",
        "v": null
       }
      ]
     }
    ]
   },
   "newrate": 38,
   "newleads": 827,
   "leadtable": {
    "clusters": [
     {
      "id": "c1",
      "name": "Cluster 1 · Zona de Sud",
      "rows": [
       {
        "n": "Oltenița",
        "leads": 59,
        "conv": 37
       },
       {
        "n": "Giurgiu",
        "leads": 106,
        "conv": 52
       },
       {
        "n": "Slobozia",
        "leads": 85,
        "conv": 52
       },
       {
        "n": "Călărași",
        "leads": 111,
        "conv": 44
       },
       {
        "n": "Brăila",
        "leads": null,
        "conv": null
       }
      ]
     },
     {
      "id": "c2",
      "name": "Cluster 2 · Buc + Centru",
      "rows": [
       {
        "n": "Dorobanți",
        "leads": 109,
        "conv": 56
       },
       {
        "n": "Cotroceni",
        "leads": 0,
        "conv": null
       },
       {
        "n": "Târgoviște",
        "leads": 165,
        "conv": 47
       },
       {
        "n": "Focșani",
        "leads": 198,
        "conv": 54
       }
      ]
     }
    ],
    "network": {
     "leads": 827,
     "conv": 50
    }
   }
  }
 }
};
