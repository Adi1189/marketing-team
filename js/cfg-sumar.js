// Date reale din Puls (Monthly brief → Pacienți) pentru iul–oct 2026.
window.REPORT_CONFIG = {
 "channel": "Sumar",
 "demo": false,
 "pillText": "Date reale · iul–oct 2026",
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
  }
 ],
 "top": null,
 "notes": [
  "Date reale din Puls pentru iulie–octombrie 2026 (Monthly brief → Pacienți; pentru iulie–septembrie și Marketing · Social Ads).",
  "Leaduri primite = toate lead-urile din campaniile Facebook și Instagram din lună, inclusiv telefoanele care au mai sunat. Leaduri noi (unice) = telefoane la prima apariție în istoric. Diferența dintre ele e procentul de leaduri dublate.",
  "Conversia = leaduri noi programate ÷ leaduri noi. Rata de pacienți noi = din pacienții unici ai lunii, ce procent sunt la prima vizită (restul sunt recurenți).",
  "P0 = pacienți noi înregistrați în sistem în lună, suma tuturor clinicilor. La iulie, variațiile față de luna anterioară (−9% la leaduri primite și la leaduri noi, +9% la P0) sunt cele din Puls, pentru că iunie nu e în pagină.",
  "Sursa leadurilor pe clinici e tabelul „FB_adds_campaigns” (canal Facebook + Instagram), cu cifre care pot diferi cu câteva procente de raportul Tableau. Suma clinicilor e puțin peste totalul rețelei, fiindcă același telefon poate apărea la mai multe clinici.",
  "Octombrie: leadurile noi (unice) și leadurile pe clinici nu apar în pagina Puls folosită, deci lipsesc. Brăila nu e în lista de clinici pentru leaduri."
 ],
 "data": {
  "2026-07": {
   "leads": 1264,
   "convrate": 53,
   "p0": 1656,
   "q": {},
   "note": {
    "leads": "medie 21 luni (iul 25–iul 26): 1.126",
    "convrate": "leaduri noi programate ÷ leaduri noi · medie: 43%",
    "newrate": "din 3.737 pacienți unici · 56% recurenți",
    "p0": "+49% față de iul 2025 · medie 12 luni: 1.316",
    "newleads": "33,9% din leadurile primite sunt telefoane deja văzute"
   },
   "newrate": 44,
   "vs": {
    "leads": -9,
    "p0": 9,
    "newleads": -9
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
   }
  },
  "2026-08": {
   "leads": 1366,
   "convrate": 54,
   "p0": 1611,
   "q": {},
   "note": {
    "leads": "medie 21 luni (iul 25–iul 26): 1.126",
    "convrate": "leaduri noi programate ÷ leaduri noi · medie: 43%",
    "newrate": "din 3.467 pacienți unici · 54% recurenți",
    "p0": "+30% față de aug 2025 · medie 12 luni: 1.347",
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
   }
  },
  "2026-09": {
   "leads": 1311,
   "convrate": 50,
   "p0": 1422,
   "q": {},
   "note": {
    "leads": "medie 21 luni (iul 25–iul 26): 1.126",
    "convrate": "leaduri noi programate ÷ leaduri noi · medie: 43%",
    "newrate": "din 3.779 pacienți unici · 62% recurenți",
    "p0": "+20% față de sep 2025 · medie 12 luni: 1.366",
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
        "p0": 69,
        "mom": -33,
        "yoy": -44,
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
        "p0": 296,
        "mom": -11,
        "yoy": null,
        "ytd": null
       }
      ],
      "total": {
       "p0": 169,
       "mom": -10,
       "yoy": 8,
       "ytd": 64,
       "avg12": 167,
       "avg12d": 1
      },
      "sum": {
       "p0": 675,
       "mom": -10,
       "yoy": 45,
       "ytd": 167,
       "avg12": 614,
       "avg12d": 10
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
      "p0": 1422,
      "mom": -12,
      "yoy": 20,
      "avg12": 1366,
      "avg12d": 4
     }
    }
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
  },
  "2026-10": {
   "leads": 1855,
   "newleads": null,
   "convrate": 49,
   "newrate": 44,
   "p0": 1694,
   "q": {},
   "note": {
    "leads": "medie 22 luni: 1.159",
    "convrate": "leaduri noi programate ÷ leaduri noi · medie: 43%",
    "newrate": "din 3.818 pacienți unici · 56% recurenți",
    "p0": "+14% față de oct 2025 · medie 12 luni: 1.383"
   },
   "p0table": {
    "clusters": [
     {
      "id": "c1",
      "name": "Cluster 1 · Zona de Sud",
      "rows": [
       {
        "n": "Oltenița",
        "p0": 153,
        "mom": -4,
        "yoy": -19,
        "ytd": -2
       },
       {
        "n": "Giurgiu",
        "p0": 172,
        "mom": -13,
        "yoy": -2,
        "ytd": -5
       },
       {
        "n": "Slobozia",
        "p0": 182,
        "mom": 9,
        "yoy": 1,
        "ytd": -8
       },
       {
        "n": "Călărași",
        "p0": 209,
        "mom": -6,
        "yoy": -18,
        "ytd": -6
       },
       {
        "n": "Brăila",
        "p0": 289,
        "mom": null,
        "yoy": null,
        "ytd": null
       }
      ],
      "total": {
       "p0": 201,
       "mom": 7,
       "yoy": 1,
       "ytd": -5,
       "avg12": 188,
       "avg12d": 7
      },
      "sum": {
       "p0": 1005,
       "mom": 35,
       "yoy": 26,
       "ytd": -2,
       "avg12": 769,
       "avg12d": 31
      }
     },
     {
      "id": "c2",
      "name": "Cluster 2 · Buc + Centru",
      "rows": [
       {
        "n": "Dorobanți",
        "p0": 56,
        "mom": -35,
        "yoy": -77,
        "ytd": -18
       },
       {
        "n": "Cotroceni",
        "p0": 74,
        "mom": 7,
        "yoy": -57,
        "ytd": -21
       },
       {
        "n": "Târgoviște",
        "p0": 251,
        "mom": 12,
        "yoy": -6,
        "ytd": 166
       },
       {
        "n": "Focșani",
        "p0": 308,
        "mom": 4,
        "yoy": null,
        "ytd": null
       }
      ],
      "total": {
       "p0": 172,
       "mom": 2,
       "yoy": -25,
       "ytd": 46,
       "avg12": 162,
       "avg12d": 6
      },
      "sum": {
       "p0": 689,
       "mom": 2,
       "yoy": 0,
       "ytd": 128,
       "avg12": 614,
       "avg12d": 12
      }
     }
    ],
    "network": {
     "avg": {
      "p0": 188,
      "mom": 6,
      "yoy": -11,
      "avg12": 176,
      "avg12d": 7
     },
     "sum": {
      "p0": 1694,
      "mom": 19,
      "yoy": 14,
      "avg12": 1383,
      "avg12d": 22
     }
    }
   }
  }
 }
};
