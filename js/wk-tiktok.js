// Date reale din rapoartele KPI Tier 1 (S27–S41), pe săptămână.
window.WEEKLY_CONFIG = {
 "channel": "TikTok",
 "weeks": [
  {
   "id": "S27",
   "range": "29 iun–5 iul",
   "month": "Iulie"
  },
  {
   "id": "S28",
   "range": "6–12 iul",
   "month": "Iulie"
  },
  {
   "id": "S29",
   "range": "13–19 iul",
   "month": "Iulie"
  },
  {
   "id": "S30",
   "range": "20–26 iul",
   "month": "Iulie"
  },
  {
   "id": "S31",
   "range": "27 iul–2 aug",
   "month": "Iulie"
  },
  {
   "id": "S32",
   "range": "3–9 aug",
   "month": "August"
  },
  {
   "id": "S33",
   "range": "10–16 aug",
   "month": "August"
  },
  {
   "id": "S34",
   "range": "17–23 aug",
   "month": "August"
  },
  {
   "id": "S35",
   "range": "24–30 aug",
   "month": "August"
  },
  {
   "id": "S36",
   "range": "31 aug–6 sep",
   "month": "Septembrie"
  },
  {
   "id": "S37",
   "range": "7–13 sep",
   "month": "Septembrie"
  },
  {
   "id": "S38",
   "range": "14–20 sep",
   "month": "Septembrie"
  },
  {
   "id": "S39",
   "range": "21–27 sep",
   "month": "Septembrie"
  },
  {
   "id": "S40",
   "range": "28 sep–4 oct",
   "month": "Septembrie"
  },
  {
   "id": "S41",
   "range": "5–11 oct",
   "month": "Octombrie"
  }
 ],
 "kpis": [
  {
   "key": "posts",
   "label": "Număr de postări",
   "hint": "câte videoclipuri au fost publicate în săptămână",
   "type": "num",
   "additive": true
  },
  {
   "key": "views",
   "label": "Total vizualizări",
   "hint": "de câte ori au fost văzute videoclipurile în săptămână",
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
   "hint": "câți urmăritori are contul, la ultimul raport",
   "type": "num",
   "additive": "last"
  },
  {
   "key": "leads",
   "label": "Număr de leaduri",
   "hint": "contacte noi venite din acest canal",
   "type": "num",
   "additive": true
  }
 ],
 "cmp": {
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
    "hint": "câte videoclipuri au fost publicate",
    "type": "num",
    "additive": true
   },
   {
    "key": "views",
    "label": "Total vizualizări",
    "hint": "vizualizările videoclipurilor publicate în săptămână",
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
    "hint": "urmăritorii contului, la ultimul raport",
    "type": "num",
    "additive": "last"
   },
   {
    "key": "topval",
    "label": "Top video (vizualizări)",
    "hint": "cel mai vizionat video din săptămână",
    "type": "num",
    "additive": "max"
   }
  ]
 },
 "topLabel": "Vizualizări",
 "take": [
  "DENT ESTET ne depășește la urmăritori: 8.610 față de 6.799 la noi. De la prima cifră (S29), ei au crescut cu 2.759 (+47,2%), noi cu 88 (+1,3%). Life are 7.028, Regina Maria 5.561, Elidadent 1.913, Dental Blue 886.",
  "Ritmul nostru e variabil. Videouri pe săptămână (S27–S40): 4 → 4 → 2 → 3 → 6 → 2 → 5 → 5 → 4 → 4 → 5 → 2 → 5 → 7. Media e 4,1, față de 6,4 la DENT ESTET, 5,2 la Life, 2,6 la Regina Maria și 2,6 la Elidadent. Cea mai bună săptămână a noastră e S40 (7 videouri). S41 nu intră aici: a fost citită fără login, deci cifrele sunt minime.",
  "Vizualizări totale pe săptămână (S27–S40): suntem peste DENT ESTET în 8 din 14 săptămâni, peste Regina Maria în 10, peste Life în 7 și peste Elidadent în 12. În ultimele 9 săptămâni: noi 2.396 → 5.803 → 4.497 → 4.692 → 4.401 → 5.130 → 1.732 → 4.701 → 6.266; DENT ESTET 3.411 → 4.084 → 2.844 → 2.012 → 7.298 → 2.138 → 2.746 → 2.073 → 3.688. Cea mai bună săptămână a noastră e S31 (6.567). În S41 (≥, fără login) avem 2.217, față de 2.929 la DENT ESTET și 3.161 la Regina Maria.",
  "Media pe videoclip (S27–S40): noi 866–1828 vizualizări, DENT ESTET 305–1887, Regina Maria 212–2398. În S41 (≥) media noastră e 739, a Elidadent 1051, a Regina Maria 790, a DENT ESTET 293.",
  "Vârfurile izolate nu sunt tendință: Life 60.400 în S35, Elidadent 20.800 în S38, Life 18.500 în S32, Elidadent 15.700 în S33, Life 11.200 în S36. Cel mai bun video al nostru din S27–S41 are 2.529 de vizualizări (S29)."
 ],
 "notes": [
  "Rapoartele KPI Tier 1 compară contul nostru cu cei 5 concurenți principali (Tier 1). Săptămânile sunt cele din rapoarte (S27–S40, ISO).",
  "Dental Blue nu a postat nimic în S36–S40 și a postat doar 3 videoclipuri în celelalte săptămâni; Dental Safari nu are cont TikTok.",
  "Leadurile din Puls sunt doar pentru Facebook + Instagram; pentru acest canal nu avem o sursă de leaduri.",
  "„≥” = cifră minimă (raportul nu a avut toate datele), „≈” = aproximare, „–” = lipsă în raport.",
  "S41 (5–11 octombrie) a fost citită pe 12 octombrie fără cont TikTok autentificat: unele postări sunt ascunse vizitatorilor nelogați, deci numărul de postări și totalul de vizualizări sunt valori minime („≥”) la toate conturile și nu se compară direct cu S36–S40. Urmăritorii sunt afișați exact.",
  "Vizualizările totale pe cont există din S27 (iulie, citite pe 14 octombrie; august–septembrie pe 12–14 octombrie).",
  "Urmăritorii pe TikTok sunt cifrele exacte din rapoartele săptămânale vechi, citite în acele săptămâni (S27–S40); doar S34 lipsea din rapoarte și are citirea de la rulare. S41 e citirea de la rulare.",
  "Lunile se formează din săptămâni ISO întregi: iulie = S27–S31, august = S32–S35, septembrie = S36–S40, octombrie = S41–S44. S27 (29 iunie–5 iulie) intră în iulie, pentru că 5 din cele 7 zile ale ei sunt în iulie.",
  "Titlurile postărilor de top din iulie și august (S27–S35) sunt citite din descrierile postărilor, pe 15 octombrie; la colaborări apare contul partener, iar la Dental Blue unele sunt postări foto.",
  "S32–S35 (august) au inventar complet; blocul avea linkurile postărilor de top, iar titlurile le-am completat din descrieri. Vârfurile de peste 10.000 de vizualizări sunt rotunjite de TikTok (≈), iar urmăritorii sunt cifrele din rapoartele vechi."
 ],
 "data": {
  "DrA": {
   "S29": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 2,
    "top": {
     "title": "⭐ „Ce îmi oferiți ca să șterg review-ul?” Negocierea a început... și a degenerat rapid. 😂",
     "value": 2529,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7664153989541498114"
    },
    "topval": 2529,
    "followers": 6711,
    "views": 3657
   },
   "S30": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 3,
    "top": {
     "title": "🦷 „Nu i-am spus ce îmi doresc. I-am spus câți bani am.” Replica care spune totul.",
     "value": 1228,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7665714402473086230"
    },
    "topval": 1228,
    "followers": 6732,
    "views": 3365
   },
   "S31": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 6,
    "top": {
     "title": "✨ Work in progress... iar rezultatul începe deja să vorbească de la sine.",
     "value": 1442,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7667933531191938326"
    },
    "topval": 1442,
    "followers": 6746,
    "views": 6567
   },
   "S32": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 2,
    "top": {
     "title": "🪥 Crezi că o periuță mai dură îți curăță dinții mai bine? S-ar putea să faci una dintre cele mai frecvente greșeli! 😯",
     "value": 1374,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7670786498236566806"
    },
    "topval": 1374,
    "followers": 6749,
    "views": 2396
   },
   "S33": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 5,
    "top": {
     "title": "😂 Există întrebări care vin exact în momentul nepotrivit. Mai ales la dentist. Cu gura deschisă.",
     "value": 1814,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7673407421376761110"
    },
    "topval": 1814,
    "followers": 6751,
    "views": 5803
   },
   "S34": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram",
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 5,
    "top": {
     "title": "Ce se întâmplă dacă rămâne acolo? Ai măsele de minte care te deranjează sau stau strâmb? 🦷",
     "value": 1110,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7675320098764360983"
    },
    "topval": 1110,
    "followers": 6800,
    "views": 4497
   },
   "S35": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 4,
    "top": {
     "title": "🦷 De ce ai avea nevoie de implanturi pterigoidiene? Planul de tratament a inclus 6 implanturi: 4 convenționale și 2 pterigoidiene.",
     "value": 1742,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7677980517555293462"
    },
    "topval": 1742,
    "followers": 6779,
    "views": 4692
   },
   "S36": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 4,
    "top": {
     "title": "Lucrează mai inteligent, nu mai mult! „Din experiență, pentru practică.”",
     "value": 1776,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7681621165898468610"
    },
    "topval": 1776,
    "followers": 6793,
    "views": 4401
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 5,
    "top": {
     "title": "Când obiectivele sunt clare, mesajul ajunge repede la toată echipa. 😂 Noi glumim, dar de programări ne ocupăm",
     "value": 1372,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7683466345090010390"
    },
    "topval": 1372,
    "followers": 6793,
    "views": 5130
   },
   "S38": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 2,
    "top": {
     "title": "Unele lucruri te lovesc când te aștepți mai puțin. 😅 Inflația, de exemplu. Sau… o cutie. Din fericire, avem ș…",
     "value": 1219,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7686422485625048342"
    },
    "topval": 1219,
    "followers": 6799,
    "views": 1732
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 5,
    "top": {
     "title": "„Sunt mulțumită cu dinții mei!” 🤍 Mihaela a venit la noi în urma recomandărilor primite de la prieteni, iar l…",
     "value": 1464,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7688294775279095062"
    },
    "topval": 1464,
    "followers": 6800,
    "views": 4701
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {
     "leads": "Puls are leaduri doar pentru Facebook + Instagram"
    },
    "posts": 7,
    "top": {
     "title": "Hei, Leo! 😎 Când auzi că îți poți vedea viitorul zâmbet înainte să începi tratamentul, parcă vrei și o dovadă…",
     "value": 1432,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7690948766622371094"
    },
    "topval": 1432,
    "followers": 6800,
    "views": 6266
   },
   "S41": {
    "q": {
     "posts": "≥",
     "views": "≥",
     "topval": ""
    },
    "note": {
     "posts": "citit fără login: unele postări pot fi ascunse",
     "views": "citit fără login: valoare minimă"
    },
    "posts": 3,
    "views": 2217,
    "followers": 6799,
    "top": {
     "title": "„Nu există scurtături către succes.” La TEDx Tudor Vianu, Dr. Virginia Ardeleanu…",
     "value": 962,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7693569974773812502"
    },
    "topval": 962
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "posts": 4,
    "top": {
     "title": "📍 Slatina, venim! 🎉 Clinica Dr. Ardeleanu cu numărul 10 intră oficial în povestea noastră.",
     "value": 2316,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7657151403344792854"
    },
    "topval": 2316,
    "followers": 6711,
    "views": 5637
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "posts": 4,
    "top": {
     "title": "Parteneriat Clinicile Dr. Ardeleanu & Straumann: încredere în stomatologie",
     "value": 1663,
     "q": "",
     "url": "https://www.tiktok.com/@dr.ardeleanu/video/7660495103508679958"
    },
    "topval": 1663,
    "followers": 6711,
    "views": 5739
   }
  },
  "DE": {
   "S29": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 4,
    "top": {
     "title": "Tehnologia nu înlocuiește medicul. Îl ajută să ia decizii mai precise.",
     "value": 1005,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7660101925244898582"
    },
    "topval": 1005,
    "followers": 5851,
    "views": 3310
   },
   "S30": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 6,
    "top": {
     "title": "Implant cu încărcare imediată. Dar ce înseamnă, de fapt? Dr. Alexandru Georgescu explică, în emisiunea Sănătate cu stil...",
     "value": 942,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7664988147104763158"
    },
    "topval": 942,
    "followers": 6057,
    "views": 4070
   },
   "S31": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 8,
    "top": {
     "title": "Ai un implant dentar? Salvează acest videoclip. 📌",
     "value": 1152,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7667174077785902338"
    },
    "topval": 1152,
    "followers": 6156,
    "views": 3998
   },
   "S32": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 5,
    "top": {
     "title": "Un implant dentar în zona estetică trebuie să se integreze firesc în zâmbet. Dr. Adelin Radu explică la B1.ro de ce...",
     "value": 1099,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7671336994064108822"
    },
    "topval": 1099,
    "followers": 6628,
    "views": 3411
   },
   "S33": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 6,
    "top": {
     "title": "Dinții de lapte se schimbă, dar rolul lor este extrem de important.",
     "value": 998,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7673525738145975574"
    },
    "topval": 998,
    "followers": 7183,
    "views": 4084
   },
   "S34": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 7,
    "top": {
     "title": "Contează ora la care este programată o intervenție chirurgicală?",
     "value": 689,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7675637856538266902"
    },
    "topval": 689,
    "followers": 8635,
    "views": 2844
   },
   "S35": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 4,
    "top": {
     "title": "Teama de intervenție apare, de multe ori, din întrebările despre ce urmează după.",
     "value": 902,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7677849742365281558"
    },
    "topval": 902,
    "followers": 7990,
    "views": 2012
   },
   "S36": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 11,
    "top": {
     "title": "Sensibilitatea la rece înseamnă automat o carie? (Dr. Daria Dăngeanu)",
     "value": 911,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7681602284584717590"
    },
    "topval": 911,
    "followers": 8054,
    "views": 7298
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 7,
    "top": {
     "title": "Dr. Daria Dăngeanu explică de ce aciditatea băuturilor poate conta la fel de mult ca zahărul",
     "value": 338,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7683881377095421186"
    },
    "topval": 338,
    "followers": 8185,
    "views": 2138
   },
   "S38": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 8,
    "top": {
     "title": "„Aici sunt înțeleasă, sunt ascultată.” - Maia Morgenstern Când ne încredințăm sănătatea unui medic, avem nevoi…",
     "value": 522,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7686784651930930455"
    },
    "topval": 522,
    "followers": 8308,
    "views": 2746
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 6,
    "top": {
     "title": "Ai auzit de tomografia computerizată dentară (CBCT) și vrei să afli ce rol poate avea în tratamentele de canal…",
     "value": 404,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7688338113097256214"
    },
    "topval": 404,
    "followers": 8403,
    "views": 2073
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 5,
    "top": {
     "title": "În tratamentul bolii parodontale, există zone în care instrumentele clasice ajung mai greu. Laserul poate acți…",
     "value": 874,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7692016899873443094"
    },
    "topval": 874,
    "followers": 8511,
    "views": 3688
   },
   "S41": {
    "q": {
     "posts": "≥",
     "views": "≥",
     "topval": ""
    },
    "note": {
     "posts": "citit fără login: unele postări pot fi ascunse",
     "views": "citit fără login: valoare minimă"
    },
    "posts": 10,
    "views": 2929,
    "followers": 8610,
    "top": {
     "title": "Așa arată o zi din viața noastră la DENT ESTET",
     "value": 476,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7693158476939283734"
    },
    "topval": 476
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "posts": 4,
    "top": {
     "title": "🩵 Ce se întâmplă cu dintele tău după un tratament de canal? Atunci când nervul este îndepărtat, spațiul din interiorul rădăcinii trebuie perfect sigilat...",
     "value": 6214,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7657090334668721430"
    },
    "topval": 6214,
    "followers": 5851,
    "views": 7549
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "posts": 8,
    "top": {
     "title": "Crezi că aparatul dentar este doar pentru copii și adolescenți? ✨ Dr. Marius Ion explică de ce tratamentele ortodontice pot fi realizate și la vârsta adultă...",
     "value": 1033,
     "q": "",
     "url": "https://www.tiktok.com/@dentestetclinic/video/7660102397414346006"
    },
    "topval": 1033,
    "followers": 5851,
    "views": 5760
   }
  },
  "RM": {
   "S29": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 1,
    "top": {
     "title": "Realitatea fumatului și a zâmbetului tău: ce poți face acum?",
     "value": 1070,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7662693662677028118"
    },
    "topval": 1070,
    "followers": 5492,
    "views": 1070
   },
   "S30": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 4,
    "top": {
     "title": "Cum îți dai seama că un implant dentar are nevoie de evaluare? 🤔",
     "value": 2908,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7665788228313615638"
    },
    "topval": 2908,
    "followers": 5503,
    "views": 8441
   },
   "S31": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 3,
    "top": {
     "title": "„Alignerele lasă triunghiuri negre între dinți.” Ai auzit afirmația asta?",
     "value": 3421,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7667218784473632022"
    },
    "topval": 3421,
    "followers": 5511,
    "views": 7195
   },
   "S32": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 2,
    "top": {
     "title": "Sporturile de contact îți testează limitele. Dantura nu ar trebui să fie una dintre ele 🏉🦷",
     "value": 958,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7670581287626853654"
    },
    "topval": 958,
    "followers": 5517,
    "views": 1639
   },
   "S33": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 5,
    "top": {
     "title": "Când a ajuns la noi, pacienta noastră avea multe emoții și o singură dorință: să poată zâmbi din nou fără să-i fie rușine.",
     "value": 1201,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7673896507929595158"
    },
    "topval": 1201,
    "followers": 5522,
    "views": 3446
   },
   "S34": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 3,
    "top": {
     "title": "Dușul bucal va avea mereu un loc special în inima stomatologilor. De ce? 👀",
     "value": 1428,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7675445197618072854"
    },
    "topval": 1428,
    "followers": 5560,
    "views": 3619
   },
   "S35": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 4,
    "top": {
     "title": "Copilul tău fuge de dentist? 🏃 Nu ești singurul părinte în situația asta. Sfatul Dr. Iuliei Burcă, medic specialist pedodont.",
     "value": 1664,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7679510942287285526"
    },
    "topval": 1664,
    "followers": 5528,
    "views": 5623
   },
   "S36": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 2,
    "top": {
     "title": "Alignerele nu produc recesie gingivală. Diagnosticul greșit, da.",
     "value": 1025,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7680625441664765206"
    },
    "topval": 1025,
    "followers": 5561,
    "views": 1925
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 2,
    "top": {
     "title": "Ani de zile, pacientul nostru nu a mai putut mânca normal. Nici zâmbi cu adevărat. Toți dinții erau tociți",
     "value": 1666,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7683889889632374038"
    },
    "topval": 1666,
    "followers": 5561,
    "views": 2739
   },
   "S38": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 5,
    "top": {
     "title": "Un implant nu înseamnă doar înlocuirea unui dinte, ci reconstruirea unei părți din zâmbetul tău astfel încât r…",
     "value": 1695,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7686142160327986454"
    },
    "topval": 1695,
    "followers": 5553,
    "views": 4435
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 1,
    "top": {
     "title": "Un dinte lipsă nu lasă doar un loc liber. Lasă loc pentru schimbări. Când un dinte este pierdut, întregul sist…",
     "value": 212,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7689489224923417878"
    },
    "topval": 212,
    "followers": 5555,
    "views": 212
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 3,
    "top": {
     "title": "De Ziua Mondială a Zâmbetului, îți urăm să ai cât mai multe motive să zâmbești alături de cei dragi 🤝 Tu bucu…",
     "value": 1067,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7692013929706442006"
    },
    "topval": 1067,
    "followers": 5560,
    "views": 1948
   },
   "S41": {
    "q": {
     "posts": "≥",
     "views": "≥",
     "topval": ""
    },
    "note": {
     "posts": "citit fără login: unele postări pot fi ascunse",
     "views": "citit fără login: valoare minimă"
    },
    "posts": 4,
    "views": 3161,
    "followers": 5561,
    "top": {
     "title": "Nu tratăm un dinte. Tratăm felul în care funcționează întreg…",
     "value": 1165,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7694303661874515222"
    },
    "topval": 1165
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "posts": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 5492,
    "views": 0
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "posts": 1,
    "top": {
     "title": "Emilia Popescu a hotărât să renunțe la fumat în timpul consultației cu Dr. Leahu?! 🤔",
     "value": 1116,
     "q": "",
     "url": "https://www.tiktok.com/@reginamariadentalclinics/video/7659494761916796162"
    },
    "topval": 1116,
    "followers": 5492,
    "views": 1116
   }
  },
  "Life": {
   "S29": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 7,
    "top": {
     "title": "🔴 Ți-e mai frică de injecția cu anestezic decât de tratamentul în sine?",
     "value": 670,
     "q": "",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7663728454688328993"
    },
    "topval": 670,
    "followers": 6863,
    "views": 3173
   },
   "S30": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 6,
    "top": {
     "title": "🔴 Ți s-a recomandat o coroană dentară și nu știi ce material să alegi?",
     "value": 4434,
     "q": "",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7665228250133581088"
    },
    "topval": 4434,
    "followers": 6868,
    "views": 10036
   },
   "S31": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 6,
    "top": {
     "title": "🔴 Proteza dentară se mișcă atunci când mănânci sau vorbești? ❌",
     "value": 8061,
     "q": "",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7669377215842340129"
    },
    "topval": 8061,
    "followers": 6874,
    "views": 10861
   },
   "S32": {
    "q": {
     "topval": "≈",
     "followers": "",
     "views": "≈"
    },
    "note": {
     "views": "aproximativ (cifre rotunjite în pagină)"
    },
    "posts": 7,
    "top": {
     "title": "Întâlnire cu Gabriela Cristea și Tavi Clonda la Life Dental Spa! Gabriela a revenit pentru controlul fațetelor dentare...",
     "value": 18500,
     "q": "≈",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7670800356628090134"
    },
    "topval": 18500,
    "followers": 6893,
    "views": 22680
   },
   "S33": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 6,
    "top": {
     "title": "🔴 Ai pierdut un dinte și crezi că nu este o problemă atât de mare?",
     "value": 1197,
     "q": "",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7674161378537508129"
    },
    "topval": 1197,
    "followers": 6895,
    "views": 5131
   },
   "S34": {
    "q": {
     "topval": "≈",
     "followers": "≈",
     "views": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii",
     "views": "aproximativ (cifre rotunjite în pagină)"
    },
    "posts": 5,
    "top": {
     "title": "🤍 De peste 5 ani, Gabriela Cristea alege Life Dental Spa pentru zâmbetul ei și al întregii familii.",
     "value": 10000,
     "q": "≈",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7676414963572935968"
    },
    "topval": 10000,
    "followers": 7027,
    "views": 15618
   },
   "S35": {
    "q": {
     "topval": "≈",
     "followers": "",
     "views": "≈"
    },
    "note": {
     "views": "aproximativ (cifre rotunjite în pagină)"
    },
    "posts": 5,
    "top": {
     "title": "Gabriela Cristea și Tavi Clonda, împreună cu întreaga familie, aleg Life Dental Spa.",
     "value": 60400,
     "q": "≈",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7679017688722705697"
    },
    "topval": 60400,
    "followers": 6974,
    "views": 63891
   },
   "S36": {
    "q": {
     "topval": "≈",
     "followers": "≈",
     "views": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii",
     "views": "aproximativ (cifre rotunjite în pagină)"
    },
    "posts": 5,
    "top": {
     "title": "La o lună de la cimentarea fațetelor dentare, Gabriela Cristea a revenit la Life Dental Spa",
     "value": 11200,
     "q": "≈",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7681260961214319904"
    },
    "topval": 11200,
    "followers": 7028,
    "views": 14434
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 5,
    "top": {
     "title": "Carii ascunse, fisuri dentare, retracții gingivale sau sângerări? Unele probleme nu provoacă simptome în st…",
     "value": 969,
     "q": "",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7684178086404934944"
    },
    "topval": 969,
    "followers": 7028,
    "views": 3627
   },
   "S38": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 5,
    "top": {
     "title": "Te speli corect pe dinți de două ori pe zi și, totuși, observi depuneri de tartru? Acest lucru se poate întâmp…",
     "value": 893,
     "q": "",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7686009034268331297"
    },
    "topval": 893,
    "followers": 7024,
    "views": 3276
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 3,
    "top": {
     "title": "Frica de dentist se poate forma încă din copilărie, mai ales atunci când primele experiențe stomatologice sunt…",
     "value": 967,
     "q": "",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7688293518036503840"
    },
    "topval": 967,
    "followers": 7021,
    "views": 1941
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 5,
    "top": {
     "title": "Ți-e teamă de dentist? Poate te îngrijorează ideea de durere sau ai avut în trecut o experiență neplăcută, iar…",
     "value": 899,
     "q": "",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7690897542409702689"
    },
    "topval": 899,
    "followers": 7023,
    "views": 3127
   },
   "S41": {
    "q": {
     "posts": "≥",
     "views": "≥",
     "topval": ""
    },
    "note": {
     "posts": "citit fără login: unele postări pot fi ascunse",
     "views": "citit fără login: valoare minimă"
    },
    "posts": 3,
    "views": 1722,
    "followers": 7028,
    "top": {
     "title": "Ai nevoie de o soluție fixă pentru înlocuirea mai multor dinți…",
     "value": 1046,
     "q": "",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7693786316923817248"
    },
    "topval": 1046
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "posts": 5,
    "top": {
     "title": "🗓️ Programează-te la Life Dental Spa și vei experimenta tratamente stomatologice minim invazive și eficiente!",
     "value": 692,
     "q": "",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7658589985574096160"
    },
    "topval": 692,
    "followers": 6863,
    "views": 2226
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "posts": 3,
    "top": {
     "title": "😬 Îți este teamă de freză și tot amâni tratamentul cariilor? 🦷",
     "value": 875,
     "q": "",
     "url": "https://www.tiktok.com/@lifedentalspa/video/7659275466620063008"
    },
    "topval": 875,
    "followers": 6863,
    "views": 1541
   }
  },
  "Eli": {
   "S29": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 2,
    "top": {
     "title": "Ca răspuns pentru @Cici",
     "value": 678,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7662824916709936406"
    },
    "topval": 678,
    "followers": 1898,
    "views": 1265
   },
   "S30": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 3,
    "top": {
     "title": "🔥 Cea mai fierbinte veste a verii pentru pacienții Elidadent! Până la finalul lunii septembrie îți poți începe tratamentul dentar și îl poți plăti în rate...",
     "value": 997,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7665774779302972694"
    },
    "topval": 997,
    "followers": 1897,
    "views": 2190
   },
   "S31": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 1896,
    "views": 0
   },
   "S32": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 1,
    "top": {
     "title": "🦷 2 semne că ai putea avea nevoie de un tratament de canal.",
     "value": 1093,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7669847444326206742"
    },
    "topval": 1093,
    "followers": 1897,
    "views": 1093
   },
   "S33": {
    "q": {
     "topval": "≈",
     "followers": "",
     "views": "≈"
    },
    "note": {
     "views": "aproximativ (cifre rotunjite în pagină)"
    },
    "posts": 3,
    "top": {
     "title": "🦷 Importanța examenului radiologic: caz real al unui pacient de 13 ani, venit pentru o urgență stomatologică.",
     "value": 15700,
     "q": "≈",
     "url": "https://www.tiktok.com/@elidadent/video/7673926290721852694"
    },
    "topval": 15700,
    "followers": 1900,
    "views": 16742
   },
   "S34": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 2,
    "top": {
     "title": "O zi ca oricare alta la Elidadent 😅",
     "value": 1952,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7676481520583888150"
    },
    "topval": 1952,
    "followers": 1913,
    "views": 3413
   },
   "S35": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 2,
    "top": {
     "title": "Nimeni nu îți spune partea asta despre durere: uneori, cel mai greu este să alegi între salvarea dintelui și extracție.",
     "value": 551,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7678401667196275990"
    },
    "topval": 551,
    "followers": 1897,
    "views": 978
   },
   "S36": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 4,
    "top": {
     "title": "Vouă vi se întâmplă? #elidadent #instrumentar #targoviste",
     "value": 1194,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7680251875307916566"
    },
    "topval": 1194,
    "followers": 1913,
    "views": 3246
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 1,
    "top": {
     "title": "Când asistenta îți spune să lași problemele afară și tu o iei prea literal. 😂🦷 #elidadent #asistent",
     "value": 581,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7683945493105216790"
    },
    "topval": 581,
    "followers": 1913,
    "views": 581
   },
   "S38": {
    "q": {
     "topval": "≈",
     "followers": "",
     "views": "≈"
    },
    "note": {
     "views": "aproximativ (cifre rotunjite în pagină)"
    },
    "posts": 6,
    "top": {
     "title": "Toată lumea are aceeași curiozitate: “Bianca și-a făcut albire dentară?” 👀🦷 Am avut-o pe Bianca în vizită la…",
     "value": 20800,
     "q": "≈",
     "url": "https://www.tiktok.com/@elidadent/video/7686182757097164054"
    },
    "topval": 20800,
    "followers": 1912,
    "views": 25930
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 2,
    "top": {
     "title": "Când filmezi cu Bianca de la Insula Iubirii, e clar că nu ai cum să te plictisești. 😂🎬 Am filmat, am râs și…",
     "value": 1289,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7688038687363419414"
    },
    "topval": 1289,
    "followers": 1912,
    "views": 1724
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 3,
    "top": {
     "title": "Totul despre lucrarea provizorie 🦷 Ce rol are, cât timp se poartă și de ce este atât de importantă? Vezi ce s…",
     "value": 866,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7691766950967495958"
    },
    "topval": 866,
    "followers": 1913,
    "views": 1998
   },
   "S41": {
    "q": {
     "posts": "≥",
     "views": "≥",
     "topval": ""
    },
    "note": {
     "posts": "citit fără login: unele postări pot fi ascunse",
     "views": "citit fără login: valoare minimă"
    },
    "posts": 2,
    "views": 2102,
    "followers": 1913,
    "top": {
     "title": "Amâni vizita la stomatolog din cauza costurilor? La Elidadent…",
     "value": 1196,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7693232300917673238"
    },
    "topval": 1196
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "posts": 3,
    "top": {
     "title": "🦷 Ai un dinte lipsă și nu știi care este cea mai potrivită soluție pentru tine? Dr. Ștefanos Zografos ne explică...",
     "value": 1814,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7657983161975966998"
    },
    "topval": 1814,
    "followers": 1898,
    "views": 3875
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "posts": 4,
    "top": {
     "title": "Alex Stamate, am rămas fără anestezie fix când ai venit. 🤭",
     "value": 2023,
     "q": "",
     "url": "https://www.tiktok.com/@elidadent/video/7660531282253712662"
    },
    "topval": 2023,
    "followers": 1898,
    "views": 4848
   }
  },
  "DB": {
   "S29": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 1,
    "top": {
     "title": "🦷 Reabilitare orală complexă pe implanturi, cu lucrări provizorii fixe în aceeași etapă de tratament. (postare foto)",
     "value": 70,
     "q": "",
     "url": "https://www.tiktok.com/@dentalbluechain/photo/7662125418270493960"
    },
    "topval": 70,
    "followers": 882,
    "views": 70
   },
   "S30": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 1,
    "top": {
     "title": "💫 Fiecare zâmbet spune o poveste. ✨ Astăzi vă prezentăm transformarea unei paciente... (postare foto)",
     "value": 1070,
     "q": "",
     "url": "https://www.tiktok.com/@dentalbluechain/photo/7666729531251658005"
    },
    "topval": 1070,
    "followers": 883,
    "views": 1070
   },
   "S31": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 1,
    "top": {
     "title": "Videoclip fără descriere (sunet original)",
     "value": 214,
     "q": "",
     "url": "https://www.tiktok.com/@dentalbluechain/video/7668604868386475272"
    },
    "topval": 214,
    "followers": 885,
    "views": 214
   },
   "S32": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 2,
    "top": {
     "title": "Pacient cu boală parodontală avansată: extracția tuturor dinților compromiși, 12 implanturi dentare și lucrare provizorie fixă în aceeași etapă (postare foto)",
     "value": 1052,
     "q": "",
     "url": "https://www.tiktok.com/@dentalbluechain/photo/7670631193733352712"
    },
    "topval": 1052,
    "followers": 883,
    "views": 1901
   },
   "S33": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 3,
    "top": {
     "title": "Un nou zâmbet în doar 48 de ore. ✨ De la o situație dentară complexă la lucrări provizorii fixe pe implanturi (postare foto)",
     "value": 944,
     "q": "",
     "url": "https://www.tiktok.com/@dentalbluechain/photo/7672664000974294290"
    },
    "topval": 944,
    "followers": 883,
    "views": 1274
   },
   "S34": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 886,
    "views": 0
   },
   "S35": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 884,
    "views": 0
   },
   "S36": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 885,
    "views": 0
   },
   "S37": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 886,
    "views": 0
   },
   "S38": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "valoare de la data rulării, nu de la sfârșitul săptămânii"
    },
    "posts": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 886,
    "views": 0
   },
   "S39": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 886,
    "views": 0
   },
   "S40": {
    "q": {
     "topval": "",
     "followers": ""
    },
    "note": {},
    "posts": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 886,
    "views": 0
   },
   "S41": {
    "q": {
     "posts": "≥",
     "views": "≥",
     "topval": ""
    },
    "note": {
     "posts": "citit fără login: unele postări pot fi ascunse",
     "views": "citit fără login: valoare minimă"
    },
    "posts": 0,
    "views": 0,
    "followers": 886,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null
   },
   "S27": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "posts": 2,
    "top": {
     "title": "🎉 Freeland 2026 🦷 Dental Blue Team 👯 Andrei Osanu Zumba, pacientul și colaboratorul nostru",
     "value": 2679,
     "q": "",
     "url": "https://www.tiktok.com/@dentalbluechain/video/7659146519467134216"
    },
    "topval": 2679,
    "followers": 882,
    "views": 3356
   },
   "S28": {
    "q": {
     "topval": "",
     "followers": "≈"
    },
    "note": {
     "followers": "preluat din S29 (nu există raport pentru această săptămână)"
    },
    "posts": 0,
    "top": {
     "title": "fără videoclipuri",
     "value": null,
     "q": "",
     "url": null
    },
    "topval": null,
    "followers": 882,
    "views": 0
   }
  }
 }
};
