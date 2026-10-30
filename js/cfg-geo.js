// Date GEO din rapoartele de vizibilitate AI: câte o măsurătoare pe lună (31 iulie, 31 august, 30 septembrie, 30 octombrie 2026).
window.REPORT_CONFIG = {
 "channel": "GEO",
 "demo": false,
 "pillText": "Date GEO · câte o măsurătoare pe lună · iulie–octombrie",
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
  "O măsurătoare GEO pe lună, la sfârșitul lunii: 31 iulie, 31 august, 30 septembrie și 30 octombrie. Iulie și august au aceleași 7 întrebări și aceleași 4 orașe, deci se compară direct. Septembrie și octombrie au aceleași 5 întrebări și 6 orașe, deci se compară direct. Între august și septembrie se schimbă setul de întrebări și orașele (au intrat Călărași și Oltenița), deci acel salt nu se compară. Evoluția pe aceeași întrebare, în cele patru luni, e în tabelul „Aceeași întrebare în 4 măsurători”.",
  "Fiecare întrebare a fost rulată o singură dată pe motor. Răspunsurile AI pot varia de la o rulare la alta, deci diferențe mici (o apariție) nu sunt neapărat o tendință. Pozițiile Google AI Mode sunt orientative, pentru că Google grupează răspunsul pe categorii.",
  "În octombrie, Google AI Mode a rulat dintr-un cont Google conectat (personalizat: un cont de clinică are, probabil, un istoric bogat de căutări pe brandul nostru, deci rezultatul poate arăta mai bine decât ce vede un pacient nou), iar ChatGPT fără cont, câte o conversație nouă pe întrebare. Pentru lunile anterioare raportul nu spune în ce condiții au rulat, deci creșterea pe Google din octombrie se citește cu prudență; ChatGPT e comparația curată.",
  "Share of voice față de concurenți nu se poate calcula: rapoartele nu numără aparițiile concurenților.",
  "„jos” = apărem, dar spre finalul listei. „prezent” = apărem doar într-un grup secundar al răspunsului. „n/m” = oraș nemăsurat în acea lună (Călărași și Oltenița au intrat din septembrie). La YTD cifrele apar cu „–”: sunt măsurători punctuale, nu se adună.",
  "Recenziile Google ale clinicilor nu mai sunt în tabelele GEO; sunt în tab-ul „Recenzii”."
 ],
 "trend": [
  {
   "n": "Călărași",
   "cg": [
    "n/m",
    "n/m",
    1,
    1
   ],
   "g": [
    "n/m",
    "n/m",
    1,
    1
   ]
  },
  {
   "n": "Oltenița",
   "cg": [
    "n/m",
    "n/m",
    1,
    1
   ],
   "g": [
    "n/m",
    "n/m",
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
    1
   ],
   "g": [
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
    2,
    2
   ],
   "g": [
    2,
    2,
    1,
    3
   ]
  },
  {
   "n": "Târgoviște",
   "cg": [
    null,
    3,
    2,
    4
   ],
   "g": [
    "jos",
    "jos",
    null,
    3
   ]
  },
  {
   "n": "Focșani",
   "cg": [
    null,
    2,
    1,
    1
   ],
   "g": [
    null,
    1,
    null,
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
    "queries": "7 întrebări · 4 orașe",
    "rate": "36 din 56"
   },
   "measured": "31 iulie",
   "geotable": {
    "rows": [
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
      ]
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
      ]
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
      ]
     },
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
      ]
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
     }
    ]
   },
   "take": [
    "GEO, 31 iulie: apărem în 36 din 56 de răspunsuri (64%) pe 4 orașe, dintre care 21 pe poziția 1. Google AI Mode ne numește în 75% din răspunsuri (21 din 28), ChatGPT în 54% (15 din 28).",
    "Giurgiu și Slobozia sunt cele mai solide: 14 din 14 răspunsuri la Giurgiu și 13 din 14 la Slobozia. Târgoviște (5 din 14) și Focșani (4 din 14) apar rar, mai ales pe ChatGPT, unde au câte o singură apariție din 7 întrebări.",
    "Prima măsurătoare: nu are încă o lună de comparat. Următoarea (august) folosește aceleași 7 întrebări și aceleași 4 orașe."
   ]
  },
  "2026-08": {
   "queries": 56,
   "appearances": 41,
   "rate": 73,
   "pos1": 22,
   "chatgpt": 61,
   "googleai": 86,
   "q": {},
   "note": {
    "queries": "aceleași 7 întrebări · 4 orașe",
    "rate": "41 din 56 · se compară cu iulie"
   },
   "measured": "31 august",
   "geotable": {
    "rows": [
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
      ]
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
      ]
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
      ]
     },
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
      ]
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
     }
    ]
   },
   "take": [
    "GEO, 31 august: apărem în 41 din 56 de răspunsuri (73%), față de 36 (64%) în iulie, cu aceleași 7 întrebări și 4 orașe. Pe poziția 1 am fost în 22 de răspunsuri, față de 21. Google AI Mode: 24 din 28 (iulie: 21), ChatGPT: 17 din 28 (iulie: 15).",
    "Cea mai mare creștere e la Focșani, de la 4 la 8 apariții din 14, și la Târgoviște, de la 5 la 7. Slobozia rămâne la 13 din 14, iar Giurgiu coboară ușor, de la 14 la 13.",
    "Aceeași întrebare, „Recomandă-mi un dentist bun”: Focșani pe ChatGPT e absent în iulie și pe poziția 2 în august; Târgoviște pe ChatGPT trece de la absent la poziția 3."
   ]
  },
  "2026-09": {
   "queries": 60,
   "appearances": 52,
   "rate": 87,
   "pos1": 35,
   "chatgpt": 90,
   "googleai": 83,
   "q": {},
   "note": {
    "queries": "5 întrebări noi · 6 orașe",
    "rate": "52 din 60 · set nou, nu se compară cu august"
   },
   "measured": "30 septembrie",
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
     }
    ]
   },
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
   },
   "take": [
    "GEO, 30 septembrie: apărem în 52 din 60 de răspunsuri (87%) pe 6 orașe, dintre care 35 pe poziția 1. Setul de întrebări e nou (5 întrebări, 6 orașe), deci cifra nu se compară cu august. Cele mai slabe: Târgoviște (nicio poziție 1 din 10) și Focșani pe Google (1 apariție din 5).",
    "Aceeași întrebare, „Recomandă-mi un dentist bun”, în iulie, august și septembrie: Focșani pe ChatGPT: absent → 2 → 1. Târgoviște pe ChatGPT: absent → 3 → 2, dar pe Google a ieșit din listă în septembrie. Slobozia e pe 1 la toate, pe ambele motoare. Giurgiu pe ChatGPT: 1 → 1 → 2.",
    "Orașele unde apărem mai rar sunt clinicile deschise în 2026 (Târgoviște, Focșani). La Focșani, pe ChatGPT apărem deja pe poziția 1, dar pe Google încă nu."
   ],
   "nocmp": true
  },
  "2026-10": {
   "queries": 60,
   "appearances": 57,
   "rate": 95,
   "pos1": 38,
   "chatgpt": 93,
   "googleai": 97,
   "q": {},
   "note": {
    "queries": "aceleași 5 întrebări · 6 orașe",
    "rate": "57 din 60 · se compară cu septembrie; Google cu cont (personalizat)"
   },
   "measured": "30 octombrie",
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
      ]
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
       4
      ]
     },
     {
      "n": "Slobozia",
      "cg": [
       4,
       5,
       4
      ],
      "g": [
       5,
       5,
       4
      ]
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
      ]
     },
     {
      "n": "Târgoviște",
      "cg": [
       4,
       5,
       1
      ],
      "g": [
       5,
       5,
       0
      ]
     },
     {
      "n": "Focșani",
      "cg": [
       5,
       5,
       5
      ],
      "g": [
       4,
       5,
       2
      ]
     }
    ]
   },
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
       3,
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
       null,
       1,
       1
      ],
      "g": [
       2,
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
       3,
       3,
       2,
       1,
       1
      ]
     },
     {
      "n": "Târgoviște",
      "cg": [
       4,
       3,
       null,
       1,
       3
      ],
      "g": [
       3,
       5,
       3,
       "prezent",
       2
      ]
     },
     {
      "n": "Focșani",
      "cg": [
       1,
       1,
       1,
       1,
       1
      ],
      "g": [
       null,
       "prezent",
       4,
       1,
       1
      ]
     }
    ]
   },
   "take": [
    "GEO, 30 octombrie: apărem în 57 din 60 de răspunsuri (95%), față de 52 (87%) în septembrie, cu aceleași 5 întrebări și 6 orașe: Google AI Mode în 29 din 30 (septembrie: 25), ChatGPT în 28 din 30 (septembrie: 27). Suntem primii numiți în 38, față de 35. Atenție: în octombrie Google a rulat cu cont conectat (personalizat), deci creșterea pe Google e în parte efectul contului; ChatGPT, fără cont, e comparația curată (90% → 93%).",
    "Pe ChatGPT suntem primii în Călărași, Oltenița și Focșani la toate cele 5 întrebări, iar în Slobozia la 4 din 5. Cele mai multe locuri 2 și 3 sunt în Giurgiu și Târgoviște, unde concurenți cu recenzii apropiate ne precedă.",
    "Întrebarea „stomatologie [oraș]” e punctul slab pe ChatGPT: lipsim la Slobozia și Târgoviște, singurele două cazuri în care nu apărem pe acest motor. La Giurgiu, Hus Lavinia ne precede pe ChatGPT la toate întrebările generale.",
    "Focșani: ChatGPT ne pune primii la toate cele 5 întrebări, iar Google (cu cont) ne pune mai jos: lipsim la „dentist bun” și apărem pe la poziția 6 și 4 la întrebările generale.",
    "Directoarele contează, iar fiecare motor are ale lui. Google citează med.ro, Medici-Stomatologi.ro, MedAtlas, DentistOnline, Sfatul Medicului, ROmedic și yably.ro; ChatGPT citează DentalMap, Șoimii Stomatologiei, Cylex, Med.Ro, medici-stomatologi.ro și ROmedic. La copii contează concurența specializată: la Târgoviște ne trece Elidadent for Kids pe ambele motoare.",
    "Observațiile vin dintr-o singură rulare pe lună, cu condiții diferite pe cele două motoare în octombrie, deci sunt ipoteze de verificat. București și Brăila lipsesc din măsurători."
   ]
  }
 },
 "trendSummary": [
  {
   "date": "iulie",
   "queries": 56,
   "appearances": 36,
   "pos1": 21,
   "set": "31 iulie · 7 întrebări · 4 orașe"
  },
  {
   "date": "august",
   "queries": 56,
   "appearances": 41,
   "pos1": 22,
   "set": "31 august · aceleași 7 întrebări"
  },
  {
   "date": "septembrie",
   "queries": 60,
   "appearances": 52,
   "pos1": 35,
   "set": "30 sept. · 5 întrebări noi · 6 orașe",
   "newSet": true
  },
  {
   "date": "octombrie",
   "queries": 60,
   "appearances": 57,
   "pos1": 38,
   "set": "30 oct. · aceleași 5 întrebări · Google cu cont",
   "condChange": true
  }
 ],
 "trendDates": [
  [
   "iul",
   "31 iul"
  ],
  [
   "aug",
   "31 aug"
  ],
  [
   "sep",
   "30 sep"
  ],
  [
   "oct",
   "30 oct"
  ]
 ],
 "take": [
  "GEO, 30 octombrie: apărem în 57 din 60 de răspunsuri (95%), față de 52 (87%) în septembrie, cu aceleași 5 întrebări și 6 orașe: Google AI Mode în 29 din 30 (septembrie: 25), ChatGPT în 28 din 30 (septembrie: 27). Suntem primii numiți în 38, față de 35. Atenție: în octombrie Google a rulat cu cont conectat (personalizat), deci creșterea pe Google e în parte efectul contului; ChatGPT, fără cont, e comparația curată (90% → 93%).",
  "Pe ChatGPT suntem primii în Călărași, Oltenița și Focșani la toate cele 5 întrebări, iar în Slobozia la 4 din 5. Cele mai multe locuri 2 și 3 sunt în Giurgiu și Târgoviște, unde concurenți cu recenzii apropiate ne precedă.",
  "Întrebarea „stomatologie [oraș]” e punctul slab pe ChatGPT: lipsim la Slobozia și Târgoviște, singurele două cazuri în care nu apărem pe acest motor. La Giurgiu, Hus Lavinia ne precede pe ChatGPT la toate întrebările generale.",
  "Focșani: ChatGPT ne pune primii la toate cele 5 întrebări, iar Google (cu cont) ne pune mai jos: lipsim la „dentist bun” și apărem pe la poziția 6 și 4 la întrebările generale.",
  "Directoarele contează, iar fiecare motor are ale lui. Google citează med.ro, Medici-Stomatologi.ro, MedAtlas, DentistOnline, Sfatul Medicului, ROmedic și yably.ro; ChatGPT citează DentalMap, Șoimii Stomatologiei, Cylex, Med.Ro, medici-stomatologi.ro și ROmedic. La copii contează concurența specializată: la Târgoviște ne trece Elidadent for Kids pe ambele motoare.",
  "Observațiile vin dintr-o singură rulare pe lună, cu condiții diferite pe cele două motoare în octombrie, deci sunt ipoteze de verificat. București și Brăila lipsesc din măsurători."
 ]
};
