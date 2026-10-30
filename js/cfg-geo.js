// Date reale GEO din rapoartele de vizibilitate AI: 31 iulie, 8 septembrie, 5 octombrie (Run 1) și 30 octombrie (Run 2) 2026.
window.REPORT_CONFIG = {
 "channel": "GEO",
 "demo": false,
 "pillText": "Date GEO · 4 măsurători · octombrie cu 2 rulări",
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
  "Patru măsurători GEO: 31 iulie (7 întrebări, 4 orașe), 8 septembrie (aceleași 7 întrebări), 5 octombrie (Run 1: 5 întrebări noi, 6 orașe) și 30 octombrie (Run 2: aceleași 5 întrebări ca Run 1, 6 orașe). Pagina arată luna octombrie, cu două rulări; alegi rularea din butoanele de deasupra tabelelor (implicit cea mai recentă). Evoluția pe aceeași întrebare, în cele patru măsurători, e în tabelul „Aceeași întrebare în 4 măsurători”.",
  "Fiecare întrebare a fost rulată o singură dată pe motor. Răspunsurile AI pot varia de la o rulare la alta, deci diferențe mici (o apariție) nu sunt neapărat o tendință. Pozițiile Google AI Mode sunt orientative, pentru că Google grupează răspunsul pe categorii.",
  "Share of voice față de concurenți nu se poate calcula: rapoartele nu numără aparițiile concurenților, doar îi listează cu recenzii.",
  "„jos” = apărem, dar spre finalul listei. „n/m” = oraș nemăsurat în acea rulare (Călărași și Oltenița au intrat abia pe 5 octombrie). La YTD cifrele apar cu „–”: sunt măsurători punctuale, nu se adună.",
  "Ratingul și recenziile clinicilor noastre sunt din panoul Google; cele ale concurenților, din ce a afișat ChatGPT (cifre aproximative marcate cu ~).",
  "Run 2 (30 octombrie): Google AI Mode a rulat dintr-un cont Google conectat (personalizat: un cont de clinică are, probabil, un istoric bogat de căutări pe brandul nostru, deci rezultatul poate arăta mai bine decât ce vede un pacient nou), iar ChatGPT fără cont, câte o conversație nouă pe întrebare. Nu știm în ce condiții a rulat Run 1 (5 octombrie), deci Run 2 se compară cu prudență cu el, mai ales la Google."
 ],
 "take": [
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
  "2026-10": {
   "queries": 60,
   "appearances": 57,
   "rate": 95,
   "pos1": 38,
   "chatgpt": 93,
   "googleai": 97,
   "q": {},
   "note": {
    "queries": "5 întrebări · 6 orașe · Google AI Mode cu cont conectat",
    "rate": "57 din 60 · Google cu cont (personalizat), ChatGPT fără cont"
   },
   "measured": "30 octombrie",
   "label": "Run 2 · 30 octombrie · Google cu cont",
   "nocmp": true,
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
      "reviews": 953
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
      ],
      "reviews": 688
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
      ],
      "reviews": 870
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
      "reviews": 1142
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
      ],
      "reviews": 502
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
      ],
      "reviews": 226
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
   "localCompare": [
    {
     "n": "Călărași",
     "status": "matur",
     "ours": "953",
     "top": "96",
     "rating": "4,9",
     "cg": "5/5 · 5× #1",
     "g": "5/5 · 5× #1",
     "topName": "Smile Boutique"
    },
    {
     "n": "Oltenița",
     "status": "matur",
     "ours": "688",
     "top": "262",
     "rating": "4,9",
     "cg": "5/5 · 5× #1",
     "g": "5/5 · 4× #1",
     "topName": "Dental Filip (Dr. Filip Maria)"
    },
    {
     "n": "Slobozia",
     "status": "matur",
     "ours": "~870",
     "top": "197",
     "rating": "5,0",
     "cg": "4/5 · 4× #1",
     "g": "5/5 · 4× #1",
     "topName": "AS Dental"
    },
    {
     "n": "Giurgiu",
     "status": "matur",
     "ours": "1.142",
     "top": "1.305",
     "rating": "4,9",
     "cg": "5/5 · 1× #1",
     "g": "5/5 · 2× #1",
     "topName": "Cabinet dentar Hus Lavinia"
    },
    {
     "n": "Târgoviște",
     "status": "nou",
     "ours": "502",
     "top": "541",
     "rating": "4,9",
     "cg": "4/5 · 1× #1",
     "g": "5/5 · 0× #1",
     "topName": "Ideal Dental Clinic"
    },
    {
     "n": "Focșani",
     "status": "nou",
     "ours": "226",
     "top": "352",
     "rating": "4,9",
     "cg": "5/5 · 5× #1",
     "g": "4/5 · 2× #1",
     "topName": "Sonydent"
    }
   ],
   "take": [
    "GEO, 30 octombrie (Run 2): apărem în 57 din 60 de răspunsuri (95%): Google AI Mode în 29 din 30 și ChatGPT în 28 din 30. Suntem primii numiți în 38 (17 pe Google, 21 pe ChatGPT). Google a rulat cu cont conectat (personalizat), deci cifrele Google sunt un plafon, nu ce vede un pacient nou; ChatGPT a rulat fără cont, deci e mai aproape de un pacient nou.",
    "Pe ChatGPT suntem primii în Călărași, Oltenița și Focșani la toate cele 5 întrebări, iar în Slobozia la 4 din 5. Cele mai multe locuri 2 și 3 sunt în Giurgiu și Târgoviște, unde concurenți cu recenzii apropiate ne precedă.",
    "Întrebarea „stomatologie [oraș]” e punctul slab pe ChatGPT: lipsim la Slobozia și Târgoviște, singurele două cazuri în care nu apărem pe acest motor. La Giurgiu, Hus Lavinia (1.305 recenzii, față de 1.142 la noi) ne precede pe ChatGPT la toate întrebările generale.",
    "Focșani: ChatGPT ne pune primii la toate cele 5 întrebări, deși Sonydent (352) și Doctor de Zâmbete (294) au mai multe recenzii decât noi (226). Google (cu cont) ne pune jos: lipsim la „dentist bun” și apărem pe la poziția 6 și 4 la întrebările generale.",
    "Directoarele contează, iar fiecare motor are ale lui. Google citează med.ro, Medici-Stomatologi.ro, MedAtlas, DentistOnline, Sfatul Medicului, ROmedic și yably.ro; ChatGPT citează DentalMap, Șoimii Stomatologiei, Cylex, Med.Ro, medici-stomatologi.ro și ROmedic. La copii contează concurența specializată: la Târgoviște ne trece Elidadent for Kids pe ambele motoare.",
    "Observațiile vin dintr-o singură rulare, cu condiții diferite pe cele două motoare, deci sunt ipoteze de verificat. București și Brăila lipsesc din această rulare. Recenziile din tabel sunt cele afișate de ChatGPT (din listările Google), nu verificate separat în Google Maps."
   ]
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
 ],
 "trendSummary": [
  {
   "date": "31 iulie",
   "queries": 56,
   "appearances": 36,
   "pos1": 21,
   "set": "7 întrebări · 4 orașe"
  },
  {
   "date": "8 septembrie",
   "queries": 56,
   "appearances": 41,
   "pos1": 22,
   "set": "aceleași 7 întrebări · 4 orașe"
  },
  {
   "date": "5 octombrie",
   "queries": 60,
   "appearances": 52,
   "pos1": 35,
   "set": "5 întrebări noi · 6 orașe",
   "newSet": true
  },
  {
   "date": "30 octombrie",
   "queries": 60,
   "appearances": 57,
   "pos1": 38,
   "set": "Run 2 · aceleași 5 întrebări · Google cu cont",
   "condChange": true
  }
 ],
 "runs": {
  "run1": {
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
   ],
   "take": [
    "GEO, 5 octombrie: apărem în 52 din 60 de răspunsuri (87%) pe 6 orașe, dintre care 35 pe poziția 1. Setul de întrebări e diferit, deci cifra nu se compară cu septembrie. Cele mai slabe: Târgoviște (nicio poziție 1 din 10) și Focșani pe Google (1 apariție din 5).",
    "GEO, aceeași întrebare în 3 măsurători („Recomandă-mi un dentist bun”): Focșani pe ChatGPT: absent → 2 → 1. Târgoviște pe ChatGPT: absent → 3 → 2, dar pe Google a ieșit din listă în octombrie. Slobozia e pe 1 la toate, pe ambele motoare. Giurgiu pe ChatGPT: 1 → 1 → 2.",
    "Recenziile, raportate la competiția locală, prezic vizibilitatea AI. Unde le depășim clar pe ale celui mai mare concurent (Călărași, Oltenița, Slobozia) apărem pe poziția 1 aproape peste tot. La Giurgiu, unde suntem la paritate, alternăm pe 1 și 2. La Târgoviște și Focșani, sub liderul local, apărem mai rar sau mai jos.",
    "Orașele unde apărem mai rar sunt clinicile deschise în 2026 (Târgoviște, Focșani). Ritmul e bun: Târgoviște a urcat de la 322 la 446 de recenzii din iulie, iar Focșani de la 154 la 240. La Focșani, pe ChatGPT (unde suntem listați pe DentalMap) apărem deja pe poziția 1, dar pe Google, unde concurenții au mai multe recenzii, încă nu.",
    "Două pârghii de creștere pentru clinicile noi: recenziile Google (volumul semnalului) și listările pe directoarele pe care le citește AI-ul (DentalMap, RecenziiClienti.ro, Medici-Stomatologi, MedAtlas, Firma de Aur, Șoimii Stomatologiei, Med.Ro)."
   ],
   "label": "Run 1 · 5 octombrie"
  },
  "run2": {
   "queries": 60,
   "appearances": 57,
   "rate": 95,
   "pos1": 38,
   "chatgpt": 93,
   "googleai": 97,
   "q": {},
   "note": {
    "queries": "5 întrebări · 6 orașe · Google AI Mode cu cont conectat",
    "rate": "57 din 60 · Google cu cont (personalizat), ChatGPT fără cont"
   },
   "measured": "30 octombrie",
   "label": "Run 2 · 30 octombrie · Google cu cont",
   "nocmp": true,
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
      "reviews": 953
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
      ],
      "reviews": 688
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
      ],
      "reviews": 870
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
      "reviews": 1142
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
      ],
      "reviews": 502
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
      ],
      "reviews": 226
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
   "localCompare": [
    {
     "n": "Călărași",
     "status": "matur",
     "ours": "953",
     "top": "96",
     "rating": "4,9",
     "cg": "5/5 · 5× #1",
     "g": "5/5 · 5× #1",
     "topName": "Smile Boutique"
    },
    {
     "n": "Oltenița",
     "status": "matur",
     "ours": "688",
     "top": "262",
     "rating": "4,9",
     "cg": "5/5 · 5× #1",
     "g": "5/5 · 4× #1",
     "topName": "Dental Filip (Dr. Filip Maria)"
    },
    {
     "n": "Slobozia",
     "status": "matur",
     "ours": "~870",
     "top": "197",
     "rating": "5,0",
     "cg": "4/5 · 4× #1",
     "g": "5/5 · 4× #1",
     "topName": "AS Dental"
    },
    {
     "n": "Giurgiu",
     "status": "matur",
     "ours": "1.142",
     "top": "1.305",
     "rating": "4,9",
     "cg": "5/5 · 1× #1",
     "g": "5/5 · 2× #1",
     "topName": "Cabinet dentar Hus Lavinia"
    },
    {
     "n": "Târgoviște",
     "status": "nou",
     "ours": "502",
     "top": "541",
     "rating": "4,9",
     "cg": "4/5 · 1× #1",
     "g": "5/5 · 0× #1",
     "topName": "Ideal Dental Clinic"
    },
    {
     "n": "Focșani",
     "status": "nou",
     "ours": "226",
     "top": "352",
     "rating": "4,9",
     "cg": "5/5 · 5× #1",
     "g": "4/5 · 2× #1",
     "topName": "Sonydent"
    }
   ],
   "take": [
    "GEO, 30 octombrie (Run 2): apărem în 57 din 60 de răspunsuri (95%): Google AI Mode în 29 din 30 și ChatGPT în 28 din 30. Suntem primii numiți în 38 (17 pe Google, 21 pe ChatGPT). Google a rulat cu cont conectat (personalizat), deci cifrele Google sunt un plafon, nu ce vede un pacient nou; ChatGPT a rulat fără cont, deci e mai aproape de un pacient nou.",
    "Pe ChatGPT suntem primii în Călărași, Oltenița și Focșani la toate cele 5 întrebări, iar în Slobozia la 4 din 5. Cele mai multe locuri 2 și 3 sunt în Giurgiu și Târgoviște, unde concurenți cu recenzii apropiate ne precedă.",
    "Întrebarea „stomatologie [oraș]” e punctul slab pe ChatGPT: lipsim la Slobozia și Târgoviște, singurele două cazuri în care nu apărem pe acest motor. La Giurgiu, Hus Lavinia (1.305 recenzii, față de 1.142 la noi) ne precede pe ChatGPT la toate întrebările generale.",
    "Focșani: ChatGPT ne pune primii la toate cele 5 întrebări, deși Sonydent (352) și Doctor de Zâmbete (294) au mai multe recenzii decât noi (226). Google (cu cont) ne pune jos: lipsim la „dentist bun” și apărem pe la poziția 6 și 4 la întrebările generale.",
    "Directoarele contează, iar fiecare motor are ale lui. Google citează med.ro, Medici-Stomatologi.ro, MedAtlas, DentistOnline, Sfatul Medicului, ROmedic și yably.ro; ChatGPT citează DentalMap, Șoimii Stomatologiei, Cylex, Med.Ro, medici-stomatologi.ro și ROmedic. La copii contează concurența specializată: la Târgoviște ne trece Elidadent for Kids pe ambele motoare.",
    "Observațiile vin dintr-o singură rulare, cu condiții diferite pe cele două motoare, deci sunt ipoteze de verificat. București și Brăila lipsesc din această rulare. Recenziile din tabel sunt cele afișate de ChatGPT (din listările Google), nu verificate separat în Google Maps."
   ]
  }
 },
 "trendDates": [
  "31 iul",
  "8 sep",
  "5 oct",
  "30 oct"
 ]
};
