// =====================================================================
//  OBSAH WEBU MÉDIA NEDÁME!
//  Veškeré texty webu jsou tady. Při úpravě textu stačí změnit tento
//  soubor, vzhled a animace se postarají o zbytek.
//  Texty pište do uvozovek "…". Pokud v textu potřebujete uvozovky,
//  použijte české „…“.
// =====================================================================

export const INSTAGRAM_URL = "https://www.instagram.com/media.nedame/";
export const PETICE_URL = "https://podporpodpisem.cz";

// Horní menu: odkaz na sekci (#id) a popisek
export const MENU = [
  {
    "href": "#o-nas",
    "text": "O nás"
  },
  {
    "href": "#akce",
    "text": "Akce"
  },
  {
    "href": "#zapojit-se",
    "text": "Zapojit se"
  },
  {
    "href": "#co-se-stalo",
    "text": "Co se stalo"
  },
  {
    "href": "#argumenty",
    "text": "Argumenty"
  },
  {
    "href": "#data",
    "text": "Data"
  },
  {
    "href": "#pozadujeme",
    "text": "Požadujeme"
  },
  {
    "href": "#otazky",
    "text": "Otázky"
  },
  {
    "href": "#kontakt",
    "text": "Kontakt"
  }
];

// Úvodní obrazovka. „status“ = rámeček Kde je zákon teď (aktualizujte, když se zákon pohne)
export const UVOD = {
  "kicker": "Studentská iniciativa za veřejnoprávní média · StRada FF UK",
  "title_1": "Média",
  "title_2": "nedáme!",
  "lead": "Vláda chce zrušit poplatky a platit Českou televizi a Český rozhlas ze státního rozpočtu. O jejich penězích by pak každý rok rozhodovali politici, které mají média kontrolovat. Média nedáme!",
  "status": "Zákon prošel prvním čtením. Výbor pro média a kulturu jednání přerušil do 10. prosince, druhé čtení se čeká v lednu.",
  "call": "Budeme rádi za šíření. Mluvte o návrhu zákona ve škole, s pedagogy i doma. Veřejnoprávní média potřebují naši podporu, a to právě teď! Jen díky tomu budou moci dále vykonávat svou službu pro nás, ne pro politiky!",
  "buttons": [
    {
      "href": "#akce",
      "text": "Nadcházející akce"
    },
    {
      "href": "#argumenty",
      "text": "Proč je návrh špatně"
    },
    {
      "href": "#kontakt",
      "text": "Pro novináře"
    }
  ],
  "foto": {
    "soubor": "hero-3-11-vaclavak-noc.jpg",
    "popis": "Večerní shromáždění Veřejnoprávně na Václavském náměstí 3. listopadu 2026",
    "autor": "Foto: Ivo Mühlbach"
  }
};

export const O_NAS = {
  "citat": "Jsme studentská iniciativa, ale přidat se může každý, komu na nezávislých médiích záleží.",
  "odstavce": [
    "Média nedáme! je studentská iniciativa z Filozofické fakulty Univerzity Karlovy. Stojí za ní Studentská rada FF UK (StRada), studentský spolek bez napojení na jakoukoli politickou stranu.",
    "Hájíme nezávislost České televize a Českého rozhlasu a jejich stabilní financování. Veřejnoprávní média slouží nám všem: zprávami z regionů, vysíláním pro děti, sportem, kulturou i informacemi v krizích.",
    "V dubnu jsme svolali celostátní walkout, ke kterému se přidalo přes 220 škol. V červnu jsme s iniciativou Stojíme za kulturou! uspořádali happening Vládo, wake up!. V listopadu jsme podpořili celodenní stávku zaměstnanců ČT a ČRo organizovanou iniciativou Veřejnoprávně."
  ]
};

// ---------------------------------------------------------------------
//  NADCHÁZEJÍCÍ AKCE – vše se řídí datem
//  • iso: datum akce ve tvaru RRRR-MM-DD, time: čas začátku (odpočet)
//  • Den po akci web kartu sám skryje a zapíše akci do časové osy
//    (text z „timeline“, se štítkem Naše akce).
//  • Když žádná akce nezbývá, ukáže se text AKCE_ZADNA.
//  • V řádcích lze místo textu napsat "@program" – zobrazí se věta
//    „Brzy bude zveřejněn na našich sociálních sítích.“ s odkazem.
//  • Novou akci přidáte zkopírováním celého bloku { … } a úpravou údajů.
//    Starou akci můžete po čase smazat; do časové osy ji pak dopište
//    ručně do CASOVA_OSA (a fotku s popisem do MINULE_AKCE).
// ---------------------------------------------------------------------
export const AKCE = [
  {
    "iso": "2026-11-10",
    "time": "16:36",
    "big": "10. 11.",
    "title": "Protestní shromáždění",
    "date": "úterý 10. listopadu 2026",
    "rows": [
      {
        "label": "Čas",
        "value": "16:36"
      },
      {
        "label": "Místo",
        "value": "Náměstí Republiky, Nové Město, 110 00 Praha 1"
      },
      {
        "label": "Program",
        "value": "@program"
      }
    ],
    "timeline": "Protestní shromáždění na náměstí Republiky."
  }
];

export const AKCE_ZADNA = "Právě chystáme další kroky. Novinky sledujte na našem Instagramu @media.nedame.";

export const ZAPOJIT = {
  "title": "Jak se zapojit",
  "lead": "Pojďme vyjádřit svou podporu veřejnoprávním médiím napříč republikou!",
  "lead2": "Zapojit se mohou všichni studující na kterékoliv škole.",
  "cta_title": "Jste organizátor?",
  "cta_text": "Vyplňte náš formulář a registrujte svou školu! Po vyplnění obdržíte instrukce k organizaci a další materiály.",
  "button": "Registrovat školu",
  "url": "https://forms.gle/urTuptJZqu5x4UYu5"
};

// Stav zákona. stav: "done" = hotovo, "now" = právě teď, "next" = čeká
export const ZAKON = {
  "uvod": "Zákon zatím schválený není. Prošel prvním čtením a čeká ho výbor, druhé a třetí čtení, Senát a prezident. Na naší podpoře stále záleží, a to víc, než kdy dřív.",
  "kroky": [
    {
      "nazev": "Vláda schválila",
      "detail": "15. 6. 2026",
      "stav": "done"
    },
    {
      "nazev": "1. čtení",
      "detail": "24. 10. 2026",
      "stav": "done"
    },
    {
      "nazev": "Výbor pro média",
      "detail": "přerušen do 10. 12.",
      "stav": "now"
    },
    {
      "nazev": "2. čtení",
      "detail": "leden 2027 (ČTK)",
      "stav": "next"
    },
    {
      "nazev": "3. čtení",
      "detail": "termín neznámý",
      "stav": "next"
    },
    {
      "nazev": "Senát",
      "detail": "lhůta 30 dní",
      "stav": "next"
    },
    {
      "nazev": "Prezident",
      "detail": "lhůta 15 dní",
      "stav": "next"
    }
  ],
  "poznamka": "Nesouhlas Senátu i veto prezidenta může Sněmovna přehlasovat 101 hlasy.",
  "zdroj": "Zdroj: usnesení vlády č. 378/2026 z 15. 6. 2026; Poslanecká sněmovna, sněmovní tisk 231, historie a hlasování; ČTK, 29. 10. a 31. 10. 2026; Echo24, 25. 10. 2026."
};

// Časová osa od nejnovější. nase: true = štítek Naše akce. Prvních 6 je vidět hned, zbytek po rozbalení.
export const CASOVA_OSA = [
  {
    "datum": "3. 11. 2026",
    "text": "Stávka zaměstnanců ČT a ČRo. Na její podporu pochodovalo Prahou odhadem 5 000 studujících.",
    "nase": false
  },
  {
    "datum": "31. 10. 2026",
    "text": "Premiér oznámil, že druhé čtení přijde v lednu. Ministerstvo financí má navrhnout dobrovolné placení poplatku.",
    "nase": false
  },
  {
    "datum": "29. 10. 2026",
    "text": "Výbor pro média a kulturu přerušil jednání do 10. prosince. Do konce listopadu se chystá veřejné slyšení.",
    "nase": false
  },
  {
    "datum": "27. 10. 2026",
    "text": "Na vysokých školách proběhla veřejná protestní shromáždění na podporu veřejnoprávních médií.",
    "nase": true
  },
  {
    "datum": "25. 10. 2026",
    "text": "Tisíce lidí protestovaly na Staroměstském náměstí, v Brně přibližně 4 000 lidí.",
    "nase": false
  },
  {
    "datum": "24. 10. 2026",
    "text": "První čtení skončilo ve 4:36 ráno po bezprecedentním nočním jednání. Zaměstnanci ČT a ČRo poté vyhlásili stávku na 3. listopadu.",
    "nase": false
  },
  {
    "datum": "23. 10. 2026",
    "text": "Koalice prosadila projednání zákona jako prvního bodu schůze (83 pro, 59 proti) a jednání v noci a v sobotu.",
    "nase": false
  },
  {
    "datum": "17. 9. 2026",
    "text": "Koalice odložila projednávání až po volbách. V návrhu rozpočtu na rok 2027 peníze pro ČT a ČRo nejsou.",
    "nase": false
  },
  {
    "datum": "29. 7. 2026",
    "text": "Senát označil změnu za „nežádoucí, nekoncepční a odporující platným pravidlům EU“.",
    "nase": false
  },
  {
    "datum": "15. 6. 2026",
    "text": "Vláda návrh schválila. happening Vládo, wake up!",
    "nase": true
  },
  {
    "datum": "22. 4. 2026",
    "text": "celostátní walkout, přes 220 škol a odhadem 20 000 studujících.",
    "nase": true
  },
  {
    "datum": "14. 4. 2026",
    "text": "Ministerstvo kultury předložilo vládě návrh nového zákona o médiích veřejné služby. Ruší koncesionářské poplatky a nahrazuje je přímým příspěvkem ze státního rozpočtu.",
    "nase": false
  }
];

// Dokumenty ke stažení (soubory leží ve složce public/)
export const DOKUMENTY = [
  {
    "nazev": "Tisková zpráva Studenti za média, 3. 11. 2026",
    "soubor": "/tiskove-zpravy/2026-11-03-studenti-za-media.pdf"
  },
  {
    "nazev": "Tisková zpráva k happeningu Vládo, wake up!, 11. 6. 2026",
    "soubor": "/tiskove-zpravy/2026-06-11-vlado-wake-up.pdf"
  },
  {
    "nazev": "Tisková zpráva k walkoutu, 22. 4. 2026",
    "soubor": "/tiskove-zpravy/2026-04-22-walkout.pdf"
  },
  {
    "nazev": "Prohlášení Média nedáme!",
    "soubor": "/dokumenty/prohlaseni-media-nedame.pdf"
  }
];

// Naše minulé akce (fotky ve složce public/img)
export const MINULE_AKCE = [
  {
    "title": "Pochod na podporu stávky ČT a ČRo",
    "date": "3. listopadu 2026",
    "img": "akce-3-11-projev.jpg",
    "credit": "Foto: Michael Jurčík",
    "text": "Na náměstí Jana Palacha se sešlo 5 000 studujících Filozofické, Právnické, Matematicko-fyzikální a 2. lékařské fakulty UK, UMPRUM a AVU. Průvod prošel Valentinskou, Husovou, Na Pernštýně a Národní a na dolní části Václavského náměstí se připojil ke shromáždění zaměstnanců ČT a ČRo. Zástupci studentů promluvili na akci iniciativy Veřejnoprávně a požadovali stažení návrhu a otevření odborné diskuse.",
    "odkazy": [
      {
        "text": "Tisková zpráva Studenti za média (3. 11. 2026)",
        "soubor": "/tiskove-zpravy/2026-11-03-studenti-za-media.pdf"
      }
    ]
  },
  {
    "title": "Shromáždění na vysokých školách",
    "date": "27. října 2026",
    "img": "akce-27-10-pedf.jpg",
    "credit": "Foto: Adéla Žeromská",
    "text": "Na vysokých školách proběhla veřejná protestní shromáždění na podporu veřejnoprávních médií. Studující se sešli například na Albertově, na Fakultě humanitních studií, na Fakultě sociálních věd v Hollaru i v Jinonicích, na Matematicko-fyzikální a Pedagogické fakultě nebo na VŠCHT a ČVUT.",
    "odkazy": []
  },
  {
    "title": "Vládo, wake up!",
    "date": "15. června 2026",
    "img": "akce-15-6-transparent.jpg",
    "credit": "Foto: Média nedáme",
    "text": "S iniciativou Stojíme za kulturou! jsme se sešli na Letné a přivítali studentský pochod z Olomouce do Prahy. Pak jsme se přesunuli před Strakovu akademii. V 11:59, za minutu dvanáct, jsme spustili budíky s výzvou, aby se vláda probrala. Tentýž den vláda návrh schválila.",
    "odkazy": [
      {
        "text": "Tisková zpráva (11. 6. 2026)",
        "soubor": "/tiskove-zpravy/2026-06-11-vlado-wake-up.pdf"
      }
    ]
  },
  {
    "title": "Walkout za média",
    "date": "22. dubna 2026",
    "img": "akce-22-4-ministerstvo.jpg",
    "credit": "Foto: Eliška Nosková",
    "text": "V 11:59 odešli studující po celé republice z výuky. Přidalo se přes 220 škol ze všech krajů a odhadem 20 000 studujících, od velkých měst po Skuteč nebo Valašské Klobouky. V Praze jsme po shromáždění na náměstí Jana Palacha pochodovali k Ministerstvu kultury. Zveřejnili jsme společné studentské prohlášení.",
    "odkazy": [
      {
        "text": "Tisková zpráva (22. 4. 2026)",
        "soubor": "/tiskove-zpravy/2026-04-22-walkout.pdf"
      },
      {
        "text": "Prohlášení",
        "soubor": "/dokumenty/prohlaseni-media-nedame.pdf"
      }
    ]
  }
];

// Fotky přes celou šířku mezi sekcemi
export const MEZIHRY = {
  "walkout": {
    "img": "akce-22-4-rudolfinum.jpg",
    "popis": "Walkout za média, Náměstí Jana Palacha 22. dubna 2026",
    "autor": "Foto: Eliška Nosková"
  },
  "skoly": {
    "img": "akce-27-10-transparenty.jpg",
    "popis": "Protestní shromáždění na vysokých školách, 27. října 2026",
    "autor": "Foto: Ivan Mládek"
  },
  "vlajka": {
    "img": "akce-27-10-vlajka.jpg",
    "popis": "Shromáždění na vysokých školách, 27. října 2026",
    "autor": "Foto: Ivan Mládek"
  }
};

// Argumenty. graf: "budget" | "split" | "ria" (grafy jsou v src/components/Graf.astro)
export const ARGUMENTY = [
  {
    "title": "Přijdeme o to, co máme rádi",
    "short": "Méně peněz znamená méně pohádek, sportu a zpráv z regionů, ne úspornější úřad.",
    "text": "Česká televize má dostat 5,74 miliardy korun místo letos vybraných 6,73 miliardy, Český rozhlas 2,07 miliardy místo 2,48 miliardy. Dohromady je to škrt asi 1,4 miliardy, zhruba 15 %. Nedopadne nejdřív na zprávy, ale na sport, pohádky a Déčko, původní českou tvorbu, regionální vysílání a rozhlasové stanice. Práci může ztratit 450 až 700 lidí.",
    "sources": "Zdroje: vládní návrh zákona, § 10a; rozpočty ČT a ČRo na rok 2026; ČTK, 17. 9. 2026 (odhad 450–700 propuštěných); vyjádření generálního ředitele ČRo, 15. 6. 2026; Výroční zpráva o hospodaření ČT 2024; Novinky.cz, 26. 8. 2026.",
    "graf": "budget",
    "zdrojGrafu": "Zdroj grafu: vládní návrh zákona, § 10a; rozpočty ČT a ČRo na rok 2026."
  },
  {
    "title": "Zaplatíme to stejně, jen dráž",
    "short": "Složenka zmizí, účet zůstane. Jen ho zaplatíme z daní a na dluh.",
    "text": "Domácnost dnes platí 205 korun měsíčně. Po změně zaplatíme média z daní, hlavně z DPH, a to i ti, kdo jsou dnes od poplatku osvobození. Ze slibované úspory 1,4 miliardy je jen asi čtvrt miliardy skutečně ušetřený výběr poplatků, zbytek je škrt. Pokud si stát peníze půjčí, zaplatí za pět let 42 až 44 miliard, zatímco média dostanou 39 miliard.",
    "sources": "Zdroje: zákon č. 348/2005 Sb.; důvodová zpráva a RIA k sněmovnímu tisku 231 (úspora 2 460 Kč, náklady výběru 223–250 mil. Kč); Seznam Zprávy, 31. 8. 2026 (schodek a obsluha dluhu); Připomínky České televize k návrhu zákona (úrokové sazby 2,7–4,65 %); Deník N, 31. 8. a 2. 10. 2026. Pětiletý účet je výpočet argumentáře při financování výhradně dluhem: 7,8 mld. Kč ročně × 5 let = 39 mld. Kč plus úroky.",
    "graf": "split",
    "zdrojGrafu": "Zdroj grafu: RIA k sněmovnímu tisku 231 (náklady výběru 223–250 mil. Kč)."
  },
  {
    "title": "Kdo platí, ten rozhoduje",
    "short": "Dnes o penězích rozhodujeme my všichni. Po změně každý rok ten, kdo je zrovna u moci.",
    "text": "Dnes je poplatek daný zákonem a jde přímo médiím. Po změně bude výši peněz moci změnit prostá většina ve Sněmovně. Média, která mají kontrolovat politiky, budou čekat, kolik jim politici dají. Na Slovensku nová vláda dva měsíce po volbách snížila zákonem zaručené peníze pro veřejnoprávní médium z 0,17 na 0,12 % HDP.",
    "sources": "Zdroje: zákon č. 348/2005 Sb.; vládní návrh zákona, § 10a; SITA, 4. 12. 2023 (Slovensko, snížení z 0,17 % na 0,12 % HDP)."
  },
  {
    "title": "Takhle se zákony nedělají",
    "short": "Vláda neví kdy, odkud ani kolik.",
    "text": "Zákon pořád uvádí účinnost od 1. ledna 2027, i když ministr kultury mluví o červenci 2027 nebo lednu 2028. Peníze pro ČT a ČRo nejsou v návrhu rozpočtu na rok 2027. K původnímu návrhu přišlo 143 zásadních připomínek od 30 institucí. První čtení skončilo v sobotu ve 4:36 ráno.",
    "sources": "Zdroje: vládní návrh zákona (účinnost, § 10a); Deník N, 31. 8. a 2. 10. 2026; Seznam Zprávy, 19. 8. 2026; přehled připomínek z meziresortního řízení k návrhu zákona (143 zásadních připomínek od 30 institucí); Poslanecká sněmovna, sněmovní tisk 231, historie a hlasování."
  },
  {
    "title": "Vláda si sama spočítala, že poplatky jsou lepší",
    "short": "Vládě vyšlo, že poplatky jsou lepší. Přesto je ruší.",
    "text": "Vlastní analýza dopadů (RIA) dala úpravě poplatků 3,40 bodu z 5 a jejich zrušení 3,30. Za nezávislost médií vyšly poplatky 4 : 2, za dopad na státní rozpočet 5 : 1. Zrušení RIA označila za „nejrizikovější volbu“. Vláda ho vybrala, protože ho slibuje programové prohlášení.",
    "sources": "Zdroje: Závěrečná zpráva RIA k vládnímu návrhu zákona (sněmovní tisk 231), kap. 3.3 (tabulka 7) a kap. 4 (tabulka 8); důvodová zpráva k návrhu. Dokumenty jsou na odok.gov.cz.",
    "graf": "ria",
    "zdrojGrafu": "Zdroj grafu: Závěrečná zpráva RIA k sněmovnímu tisku 231, kap. 3.3 a 4 (tabulky 7 a 8)."
  },
  {
    "title": "Škody už běží",
    "short": "Zákon ještě neplatí, a my už přicházíme o pořady.",
    "text": "ČT má krizový rozpočet na rok 2027 o 350 milionů nižší. Do roku 2030 odejde asi 350 lidí a v roce 2027 se ČT nezúčastní Eurovize. Rozhlasu ministerstvo zahraničí letos sebralo čtvrtinu peněz na vysílání do zahraničí a na příští rok s nimi nepočítá.",
    "sources": "Zdroje: Česká televize, návrh rozpočtu na rok 2027 (26. 8. 2026); ČT24, 16. 9. 2026; MediaGuru, 6. 10. 2026; Médiář, 2. 9. 2026."
  },
  {
    "title": "Evropa varuje",
    "short": "Země, které vláda dává za vzor, mají pojistky. Náš návrh je nemá.",
    "text": "Evropský akt o svobodě médií (EMFA) platí v Česku od srpna 2025. Požaduje, aby veřejnoprávní média měla „přiměřené, udržitelné a předvídatelné“ financování. Na rozpor upozornila Legislativní rada vlády a obavy vyjádřila i Evropská komise. Kde financování z rozpočtu funguje, má víceletý rámec, nezávislou komisi nebo zvláštní daň. Český návrh nemá nic z toho.",
    "sources": "Zdroje: Nařízení EU 2024/1083 (EMFA), čl. 5 odst. 3; stanovisko předsedy Legislativní rady vlády čj. 449/26; Evropská komise, Zpráva o právním státu 2026 (Deník.cz, 17. 7. 2026); Urbániková a kol., Jak financovat média veřejné služby, FSS MU a FSV UK, 4/2026; důvodová zpráva k sněmovnímu tisku 231."
  }
];

export const KLICOVA_DATA = [
  {
    "hodnota": "−1,4 mld. Kč",
    "vyznam": "O tolik méně mají ČT a ČRo dostat oproti letos, asi −15 %.",
    "zdroj": "vládní návrh zákona, § 10a; rozpočty ČT a ČRo na rok 2026"
  },
  {
    "hodnota": "450–700",
    "vyznam": "Tolik lidí může přijít o práci, z toho 150–200 v rozhlase.",
    "zdroj": "ČTK, 17. 9. 2026; vyjádření generálního ředitele ČRo, 15. 6. 2026"
  },
  {
    "hodnota": "205 Kč",
    "vyznam": "Tolik dnes měsíčně platí domácnost. Po změně zaplatíme média z daní a na dluh.",
    "zdroj": "zákon č. 348/2005 Sb."
  },
  {
    "hodnota": "3,40 : 3,30",
    "vyznam": "Úprava poplatků vyšla ve vládní analýze lépe než jejich zrušení.",
    "zdroj": "Závěrečná zpráva RIA k sněmovnímu tisku 231, kap. 4, tabulka 8"
  },
  {
    "hodnota": "10 %",
    "vyznam": "Valorizace se spustí až po 10% inflaci a přidá jen 10 %.",
    "zdroj": "vládní návrh zákona, § 10a; stanovisko předsedy LRV čj. 449/26"
  },
  {
    "hodnota": "350 mil. Kč",
    "vyznam": "Tolik ČT škrtá už v rozpočtu na rok 2027.",
    "zdroj": "Česká televize, návrh rozpočtu na rok 2027 (26. 8. 2026)"
  },
  {
    "hodnota": "59 % a 58 %",
    "vyznam": "Tolik lidí věří zpravodajství ČT a ČRo, nejvíc ze všech značek.",
    "zdroj": "Reuters Institute, Digital News Report 2026 (MediaGuru, 16. 6. 2026)"
  },
  {
    "hodnota": "143",
    "vyznam": "Zásadních připomínek od 30 institucí k původnímu návrhu.",
    "zdroj": "přehled připomínek z meziresortního řízení k návrhu zákona"
  }
];

export const POZADUJEME = [
  {
    "nadpis": "Stáhnout návrh a zachovat poplatky.",
    "text": "Poplatek drží peníze pro média mimo státní rozpočet. Pokud je potřeba ho změnit, ať se upraví, ne zruší. Tak vyšla i vlastní analýza vlády."
  },
  {
    "nadpis": "Nejdřív debata, pak zákon.",
    "text": "Otevřít odbornou diskusi o tom, co mají veřejnoprávní média dělat, kolik to stojí a jak je chránit. S odborníky, vedením ČT a ČRo, odbory i veřejností."
  },
  {
    "nadpis": "Žádná změna bez pojistek.",
    "text": "Zachovaná výše peněz, plná automatická valorizace, víceletý rámec a ochrana proti změně prostou většinou."
  },
  {
    "nadpis": "Zastavit útoky",
    "text": "na zaměstnance veřejnoprávních médií, kulturní sektor a lidi, kteří pokojně vyjadřují nesouhlas."
  }
];

export const PETICE = {
  "nadpis": "Podpořte petici Podpoř podpisem",
  "text": "Petici za nezávislá veřejnoprávní média organizuje spolek Díky, že můžem.",
  "tlacitko": "Podepsat petici"
};

export const OTAZKY = [
  {
    "otazka": "Zrušení poplatku lidem přece uleví, ne?",
    "odpoved": "Domácnost ušetří 2 460 korun ročně, ale stejnou službu zaplatí z daní, hlavně z DPH. Tu platí i lidé, kteří jsou dnes od poplatku osvobození. Stát má rekordní schodek, takže si peníze nejspíš půjčí a zaplatí úroky, které se za několik let nahromadí."
  },
  {
    "otazka": "Mění se přece jen způsob financování.",
    "odpoved": "Mění se to nejdůležitější: kdo rozhoduje o penězích. Dnes je poplatek daný zákonem a jde přímo médiím. Po změně bude výši určovat sněmovní většina."
  },
  {
    "otazka": "Proč mám platit, když ČT nesleduju?",
    "odpoved": "Veřejnoprávní média slouží všem: zprávy z regionů, informace při povodních, vysílání pro děti, rozhlas v autě. A platit budete i po změně, jen z daní."
  },
  {
    "otazka": "Ať média šetří, jsou předražená.",
    "odpoved": "ČT už škrtá 350 milionů a propouští. Z poplatku 135 korun šlo v roce 2024 na výrobu pořadů 96 korun a na výběr poplatku 3 koruny. Navržený škrt je 15 % rozpočtu a dopadne na pořady."
  },
  {
    "otazka": "Valorizace to vyřeší.",
    "odpoved": "Příspěvek se zvýší až po 10 % inflace a jen o 10 %. Legislativní rada vlády upozornila, že to povede k postupnému poklesu skutečné hodnoty peněz. A celé pravidlo jde změnit jedním hlasováním."
  },
  {
    "otazka": "Jinde v Evropě to mají taky.",
    "odpoved": "Země, kde financování z rozpočtu funguje, mají pojistky: víceletý rámec, zvláštní daň nebo nezávislou komisi. Portugalsko od financování z rozpočtu dokonce odešlo, protože státní platby chodily pozdě a podle politické vůle."
  },
  {
    "otazka": "Jde jen o účetní operaci.",
    "odpoved": "Neplatí. Návrh dává ČT a ČRo dohromady 7,8 miliardy korun, zhruba o 15 % méně než letos, a o výši peněz by rozhodovala sněmovní většina. Ze slibované úspory 1,4 miliardy je jen čtvrt miliardy ušetřený výběr poplatků, zbytek je škrt. A kdyby šlo o formalitu, Sněmovna by kvůli ní nejednala v noci a v sobotu."
  },
  {
    "otazka": "Bez zrušení poplatků nemůže hospodaření kontrolovat NKÚ.",
    "odpoved": "Kontrola Nejvyšším kontrolním úřadem se řeší samostatným návrhem (sněmovní tisk 217). Se zrušením poplatků nesouvisí."
  },
  {
    "otazka": "Kdo stojí za iniciativou Média nedáme!?",
    "odpoved": "Iniciativa vznikla z vůle studentů Filozofické fakulty UK, kterým není lhostejná budoucnost a nezávislost veřejnoprávních médií. Stojí za ní studentský spolek Studentská rada (StRada), který nemá napojení na žádnou politickou stranu."
  },
  {
    "otazka": "Je studentská stávka vůbec legální?",
    "odpoved": "Ano. V pracovněprávním smyslu o stávku nejde, je to legální výkon svobody projevu a shromažďovacího práva, které má každý (čl. 17 a 19 Listiny). Pokojné shromáždění se úřadu zpravidla jen oznamuje, nepovoluje. Slovo stávka je zavedené symbolické označení studentského protestu. Absenci ve výuce posuzuje studijní řád dané školy, proto doporučujeme domluvit se předem s vedením."
  }
];

export const KONTAKTY = [
  {
    "role": "Obecný kontakt",
    "jmeno": "Média nedáme!",
    "telefon": null,
    "email": "medianedame@gmail.com"
  },
  {
    "role": "Tiskový mluvčí",
    "jmeno": "Tomáš Stráník",
    "telefon": "+420 702 139 960",
    "email": "stranikt@ff.cuni.cz"
  },
  {
    "role": "Tisková koordinátorka",
    "jmeno": "Karla Ismayilzada",
    "telefon": "+420 720 134 294",
    "email": "karla.ismayilzada@gmail.com"
  }
];
