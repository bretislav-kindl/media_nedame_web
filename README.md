# Média nedáme! – web medianedame.cz

Web studentské iniciativy Média nedáme! (StRada FF UK). Postavený v [Astro](https://astro.build), Netlify ho po každé změně ve větvi `main` sám sestaví a zveřejní.

## Kde co je

| Co chci změnit | Soubor |
| --- | --- |
| **Jakýkoli text na webu** | `src/data/obsah.ts` |
| Nadcházející akce | `src/data/obsah.ts`, část `AKCE` |
| Fotky | složka `public/img/` (+ název souboru v `obsah.ts`) |
| Tiskové zprávy a dokumenty | `public/tiskove-zpravy/`, `public/dokumenty/` (+ seznam `DOKUMENTY` v `obsah.ts`) |
| Čísla v grafech | `src/components/Graf.astro` |
| Barvy, písmo, rozvržení | `src/styles/global.css` |
| Animace a rozbalování | `src/scripts/main.js` |
| Pořadí sekcí | `src/pages/index.astro` |

Jednotlivé sekce jsou v `src/components/` (Uvod, ONas, Akce, Zapojit, CoSeStalo, Argumenty, Data, Pozadujeme, Otazky, Kontakt, Paticka).

## Akce se řídí datem samy

- Odpočet („Za 5 dní“, „Zítra v 16:36“, „Dnes v 16:36“) se počítá v prohlížeči návštěvníka.
- Den po akci se karta sama skryje a akce se objeví v časové ose se štítkem Naše akce.
- Když žádná akce nezbývá, zobrazí se text `AKCE_ZADNA` s odkazem na Instagram.
- Novou akci přidáte zkopírováním bloku `{ … }` v `AKCE` a úpravou data, času a údajů.

## Spuštění na vlastním počítači (nepovinné)

```
npm install
npm run dev      # náhled na http://localhost:4321
npm run build    # sestavení do složky dist/
```

## Záloha původního webu

Původní verze webu je uložená ve větvi `archiv/puvodni-web`. Staré odkazy na PDF přesměrovává `netlify.toml`.
