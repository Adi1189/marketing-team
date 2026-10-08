// Date reale GEO din rapoartele de vizibilitate AI: 31 iulie, 8 septembrie, 5 octombrie 2026.
window.REPORT_CONFIG = {
 "channel": "GEO",
 "demo": false,
 "pillText": "Date reale · GEO iul–oct 2026",
 "kpis": [
  {
   "key": "queries",
   "label": "Răspunsuri testate",
   "hint": "câte răspunsuri ChatGPT și Google AI Mode am verificat (întrebări × 2 motoare × orașe)",
   "type": "num",
   "additive": false
  },
  {
   "key": "appearances",
   "label": "Apariții în răspunsuri",
   "hint": "în câte răspunsuri am fost numiți de AI",
   "type": "num",
   "additive": false
  },
  {
   "key": "rate",
   "label": "Rata de apariție",
   "hint": "din 100 de răspunsuri testate, în câte apărem, în procente",
   "type": "pct",
   "additive": false,
   "decimals": 0
  },
  {
   "key": "pos1",
   "label": "Apariții pe poziția 1",
   "hint": "în câte răspunsuri suntem primii din listă",
   "type": "num",
   "additive": false
  },
  {
   "key": "chatgpt",
   "label": "Rata de apariție în ChatGPT",
   "hint": "la fel, doar pentru ChatGPT",
   "type": "pct",
   "additive": false,
   "decimals": 0
  },
  {
   "key": "googleai",
   "label": "Rata de apariție în Google AI Mode",
   "hint": "la fel, doar pentru Google AI Mode",
   "type": "pct",
   "additive": false,
   "decimals": 0
  }
 ],
 "top": null,
 "notes": [
  "Rata de apariție = apariții ÷ răspunsuri testate (întrebări × 2 motoare AI × orașe). Un răspuns poate să nu ne numească deloc („—”) sau să ne pună pe o poziție din listă (1 = primul).",
  "Trei măsurători: 31 iulie (7 întrebări, 4 orașe), 8 septembrie (aceleași 7 întrebări și 4 orașe) și 5 octombrie (5 întrebări noi, 6 orașe). Nu există măsurătoare în august, așa că variația din septembrie e față de 31 iulie. Octombrie nu se compară direct cu celelalte.",
  "Fiecare întrebare a fost rulată o singură dată pe motor. Răspunsurile AI pot varia de la o rulare la alta, deci diferențe mici (o apariție) nu sunt neapărat o tendință. Pozițiile Google AI Mode sunt orientative, pentru că Google grupează răspunsul pe categorii.",
  "Share of voice față de concurenți nu se poate calcula: rapoartele nu numără aparițiile concurenților, doar îi listează cu recenzii.",
  "„jos” = apărem, dar spre finalul listei. „n/m” = oraș nemăsurat în acea rulare (Călărași și Oltenița au intrat abia pe 5 octombrie). La YTD cifrele apar cu „–”: sunt măsurători punctuale, nu se adună.",
  "Ratingul și recenziile clinicilor noastre sunt din panoul Google; cele ale concurenților, din ce a afișat ChatGPT (cifre aproximative marcate cu ~)."
 ],
 "take": [
  "GEO: rata de apariție în AI a crescut de la 64% la 73% între 31 iulie și 8 septembrie. E vorba de 36 → 41 apariții din 56 de răspunsuri (4 orașe, aceleași 7 întrebări). Creșterea vine de la Focșani (4 → 8 din 14) și Târgoviște (5 → 7 din 14). Slobozia rămâne la 13 din 14. Giurgiu coboară de la 14 la 13 apariții, iar pozițiile 1 scad de la 12 la 8.",
  "GEO, 5 octombrie: apărem în 52 din 60 de răspunsuri (87%) pe 6 orașe, dintre care 35 pe poziția 1. Setul de întrebări e diferit, deci cifra nu se compară cu septembrie. Cele mai slabe: Târgoviște (nicio poziție 1 din 10) și Focșani pe Google (1 apariție din 5).",
  "GEO, aceeași întrebare în 3 măsurători („Recomandă-mi un dentist bun”): Focșani pe ChatGPT: absent → 2 → 1. Târgoviște pe ChatGPT: absent → 3 → 2, dar pe Google a ieșit din listă în octombrie. Slobozia e pe 1 la toate, pe ambele motoare. Giurgiu pe ChatGPT: 1 → 1 → 2.",
  "Recenziile, raportate la competiția locală, prezic vizibilitatea AI. Unde le depășim clar pe ale celui mai mare concurent (Călărași, Oltenița, Slobozia) apărem pe poziția 1 aproape peste tot. La Giurgiu, unde suntem la paritate, alternăm pe 1 și 2. La Târgoviște și Focșani, sub liderul local, apărem mai rar sau mai jos.",
  "Orașele unde apărem mai rar sunt clinicile deschise în 2026 (Târgoviște, Focșani). Ritmul e bun: Târgoviște a urcat de la 322 la 446 de recenzii din iulie, iar Focșani de la 154 la 240. La Focșani, pe ChatGPT (unde suntem listați pe DentalMap) apărem deja pe poziția 1, dar pe Google, unde concurenții au mai multe recenzii, încă nu.",
  "Două pârghii de creștere pentru clinicile noi: recenziile Google (volumul semnalului) și listările pe directoarele pe care le citește AI-ul (DentalMap, RecenziiClienti.ro, Medici-Stomatologi, MedAtlas, Firma de Aur, Șoimii Stomatologiei, Med.Ro)."
 ],
 "trend": [
  {
   "n": "Călărași",
   "cg": [
    "n/m",
    "n/m",
    1
   ],
   "g": [
    "n/m",
    "n/m",
    1
   ]
  },
  {
   "n": "Oltenița",
   "cg": [
    "n/m",
    "n/m",
    1
   ],
   "g": [
    "n/m",
    "n/m",
    1
   ]
  },
  {
   "n": "Slobozia",
   "cg": [
    1,
    1,
    1
   ],
   "g": [
    1,
    1,
    1
   ]
  },
  {
   "n": "Giurgiu",
   "cg": [
    1,
    1,
    2
   ],
   "g": [
    2,
    2,
    1
   ]
  },
  {
   "n": "Târgoviște",
   "cg": [
    null,
    3,
    2
   ],
   "g": [
    "jos",
    "jos",
    null
   ]
  },
  {
   "n": "Focșani",
   "cg": [
    null,
    2,
    1
   ],
   "g": [
    null,
    1,
    null
   ]
  }
 ],
 "data": {
  "2026-07": {
   "queries": 56,
   "appearances": 36,
   "rate": 64,
   "pos1": 21,
   "chatgpt": 54,
   "googleai": 75,
   "q": {},
   "note": {
    "queries": "măsurătoarea din 31 iulie",
    "rate": "36 din 56 răspunsuri"
   },
   "measured": "31 iulie",
   "geotable": {
    "rows": [
     {
      "n": "Focșani",
      "cg": [
       1,
       7,
       0
      ],
      "g": [
       3,
       7,
       0
      ],
      "reviews": 154
     },
     {
      "n": "Târgoviște",
      "cg": [
       1,
       7,
       0
      ],
      "g": [
       4,
       7,
       0
      ],
      "reviews": 322
     },
     {
      "n": "Slobozia",
      "cg": [
       6,
       7,
       3
      ],
      "g": [
       7,
       7,
       6
      ],
      "reviews": 808
     },
     {
      "n": "Giurgiu",
      "cg": [
       7,
       7,
       7
      ],
      "g": [
       7,
       7,
       5
      ],
      "reviews": 1091
     }
    ]
   },
   "qtable": {
    "questions": [
     "Dentist bun (generic)",
     "Cea mai bună clinică",
     "Implant",
     "Ortodonție",
     "Fațete",
     "Copii",
     "Urgență"
    ],
    "cities": [
     {
      "n": "Focșani",
      "cg": [
       null,
       4,
       null,
       null,
       null,
       null,
       null
      ],
      "g": [
       null,
       null,
       3,
       null,
       4,
       2,
       null
      ]
     },
     {
      "n": "Târgoviște",
      "cg": [
       null,
       null,
       null,
       null,
       null,
       null,
       2
      ],
      "g": [
       "jos",
       "jos",
       null,
       null,
       null,
       4,
       3
      ]
     },
     {
      "n": "Slobozia",
      "cg": [
       1,
       1,
       1,
       2,
       3,
       null,
       4
      ],
      "g": [
       1,
       1,
       1,
       1,
       1,
       1,
       2
      ]
     },
     {
      "n": "Giurgiu",
      "cg": [
       1,
       1,
       1,
       1,
       1,
       1,
       1
      ],
      "g": [
       2,
       1,
       1,
       1,
       1,
       1,
       2
      ]
     }
    ]
   }
  },
  "2026-09": {
   "queries": 56,
   "appearances": 41,
   "rate": 73,
   "pos1": 22,
   "chatgpt": 61,
   "googleai": 86,
   "q": {},
   "note": {
    "queries": "măsurătoarea din 8 septembrie; aceleași 7 întrebări ca pe 31 iulie",
    "rate": "41 din 56 · față de 31 iulie: 64% (36 din 56)"
   },
   "measured": "8 septembrie",
   "geotable": {
    "rows": [
     {
      "n": "Focșani",
      "cg": [
       3,
       7,
       2
      ],
      "g": [
       5,
       7,
       3
      ],
      "reviews": 188
     },
     {
      "n": "Târgoviște",
      "cg": [
       2,
       7,
       0
      ],
      "g": [
       5,
       7,
       0
      ],
      "reviews": 380
     },
     {
      "n": "Slobozia",
      "cg": [
       6,
       7,
       4
      ],
      "g": [
       7,
       7,
       5
      ],
      "reviews": 838
     },
     {
      "n": "Giurgiu",
      "cg": [
       6,
       7,
       4
      ],
      "g": [
       7,
       7,
       4
      ],
      "reviews": 1123
     }
    ]
   },
   "vs": {
    "appearances": 13.9,
    "rate": 9,
    "pos1": 4.8,
    "chatgpt": 7,
    "googleai": 11
   },
   "qtable": {
    "questions": [
     "Dentist bun (generic)",
     "Cea mai bună clinică",
     "Implant",
     "Ortodonție",
     "Fațete",
     "Copii",
     "Urgență"
    ],
    "cities": [
     {
      "n": "Focșani",
      "cg": [
       2,
       1,
       null,
       null,
       1,
       null,
       null
      ],
      "g": [
       1,
       1,
       1,
       null,
       null,
       4,
       2
      ]
     },
     {
      "n": "Târgoviște",
      "cg": [
       3,
       6,
       null,
       null,
       null,
       null,
       null
      ],
      "g": [
       "jos",
       4,
       null,
       3,
       3,
       6,
       null
      ]
     },
     {
      "n": "Slobozia",
      "cg": [
       1,
       1,
       5,
       1,
       1,
       2,
       null
      ],
      "g": [
       1,
       1,
       1,
       1,
       3,
       1,
       2
      ]
     },
     {
      "n": "Giurgiu",
      "cg": [
       1,
       2,
       2,
       1,
       1,
       1,
       null
      ],
      "g": [
       2,
       2,
       1,
       2,
       1,
       1,
       1
      ]
     }
    ]
   }
  },
  "2026-10": {
   "queries": 60,
   "appearances": 52,
   "rate": 87,
   "pos1": 35,
   "chatgpt": 90,
   "googleai": 83,
   "q": {},
   "note": {
    "queries": "5 întrebări noi, 6 orașe",
    "rate": "52 din 60 · set nou, nu se compară cu septembrie"
   },
   "measured": "5 octombrie",
   "geotable": {
    "rows": [
     {
      "n": "Călărași",
      "cg": [
       5,
       5,
       5
      ],
      "g": [
       5,
       5,
       5
      ],
      "reviews": 943
     },
     {
      "n": "Oltenița",
      "cg": [
       5,
       5,
       5
      ],
      "g": [
       5,
       5,
       5
      ],
      "reviews": 687
     },
     {
      "n": "Slobozia",
      "cg": [
       5,
       5,
       4
      ],
      "g": [
       5,
       5,
       5
      ],
      "reviews": 853
     },
     {
      "n": "Giurgiu",
      "cg": [
       5,
       5,
       1
      ],
      "g": [
       5,
       5,
       2
      ],
      "reviews": 1150
     },
     {
      "n": "Târgoviște",
      "cg": [
       3,
       5,
       0
      ],
      "g": [
       4,
       5,
       0
      ],
      "reviews": 446
     },
     {
      "n": "Focșani",
      "cg": [
       4,
       5,
       3
      ],
      "g": [
       1,
       5,
       0
      ],
      "reviews": 240
     }
    ]
   },
   "nocmp": true,
   "qtable": {
    "questions": [
     "Recomandă-mi un dentist bun",
     "Clinică dentară",
     "Stomatologie",
     "Recomandă-mi stomatolog",
     "Dentist pentru copii"
    ],
    "cities": [
     {
      "n": "Călărași",
      "cg": [
       1,
       1,
       1,
       1,
       1
      ],
      "g": [
       1,
       1,
       1,
       1,
       1
      ]
     },
     {
      "n": "Oltenița",
      "cg": [
       1,
       1,
       1,
       1,
       1
      ],
      "g": [
       1,
       1,
       1,
       1,
       1
      ]
     },
     {
      "n": "Slobozia",
      "cg": [
       1,
       1,
       1,
       1,
       2
      ],
      "g": [
       1,
       1,
       1,
       1,
       1
      ]
     },
     {
      "n": "Giurgiu",
      "cg": [
       2,
       2,
       2,
       2,
       1
      ],
      "g": [
       1,
       1,
       2,
       2,
       2
      ]
     },
     {
      "n": "Târgoviște",
      "cg": [
       2,
       4,
       null,
       2,
       null
      ],
      "g": [
       null,
       2,
       4,
       2,
       6
      ]
     },
     {
      "n": "Focșani",
      "cg": [
       1,
       1,
       null,
       1,
       4
      ],
      "g": [
       null,
       null,
       4,
       null,
       null
      ]
     }
    ]
   }
  }
 },
 "localCompare": [
  {
   "n": "Călărași",
   "status": "matur",
   "ours": "943",
   "top": "~96",
   "rating": "4,9",
   "cg": "5/5 · 5× #1",
   "g": "5/5 · 5× #1",
   "topName": "Smile Boutique"
  },
  {
   "n": "Oltenița",
   "status": "matur",
   "ours": "687",
   "top": "262",
   "rating": "4,9",
   "cg": "5/5 · 5× #1",
   "g": "5/5 · 5× #1",
   "topName": "CMI Dr. Filip Maria"
  },
  {
   "n": "Slobozia",
   "status": "matur",
   "ours": "853",
   "top": "193",
   "rating": "5,0",
   "cg": "5/5 · 4× #1",
   "g": "5/5 · 5× #1",
   "topName": "AS Dental by Dr. Silviu Alexandroaie"
  },
  {
   "n": "Giurgiu",
   "status": "matur",
   "ours": "1.150",
   "top": "~1.300",
   "rating": "4,9",
   "cg": "5/5 · 1× #1",
   "g": "5/5 · 2× #1",
   "topName": "Cabinet dentar Hus Lavinia"
  },
  {
   "n": "Târgoviște",
   "status": "nou",
   "ours": "446",
   "top": "538",
   "rating": "4,9",
   "cg": "3/5 · 0× #1",
   "g": "4/5 · 0× #1",
   "topName": "Ideal Dental Clinic"
  },
  {
   "n": "Focșani",
   "status": "nou",
   "ours": "240",
   "top": "~352",
   "rating": "4,9",
   "cg": "4/5 · 3× #1",
   "g": "1/5 · 0× #1",
   "topName": "Sonydent"
  }
 ]
};
