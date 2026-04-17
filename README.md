# Média nedáme – Web

Info landing page pro iniciativu **Média nedáme** – českou iniciativu za svobodu a nezávislost médií.

Stránka je inspirovaná konceptem [stojimezakulturou.cz](https://stojimezakulturou.cz/) – jednoduché, přehledné info stránky s výzvou k akci.

## Technologie

- **[Astro.js](https://astro.build/)** – statický generátor stránek
- **Netlify** – nasazení a hosting
- Čisté CSS (bez frameworků)
- Vanilla TypeScript pro interaktivitu

## Struktura projektu

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro       # Navigace
│   │   ├── Hero.astro         # Úvodní sekce
│   │   ├── About.astro        # O iniciativě
│   │   ├── Reasons.astro      # Proč je to důležité
│   │   ├── Actions.astro      # Co dělat
│   │   ├── Signatories.astro  # Signatáři a citáty
│   │   ├── SignPetition.astro # Formulář pro podpis
│   │   ├── FAQ.astro          # Časté dotazy
│   │   └── Footer.astro       # Patička
│   ├── layouts/
│   │   └── Layout.astro       # Základní layout (HTML head, globální CSS)
│   └── pages/
│       └── index.astro        # Hlavní stránka
├── astro.config.mjs
├── netlify.toml
└── package.json
```

## Vývoj

```bash
# Instalace závislostí
npm install

# Spustit vývojový server
npm run dev

# Sestavit pro produkci
npm run build

# Náhled produkční verze
npm run preview
```

## Nasazení na Netlify

Projekt je nakonfigurován pro automatické nasazení na Netlify:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 20

Propojte repozitář s Netlify a nasazení proběhne automaticky při každém push do hlavní větve.

## Sekce stránky

1. **Hero** – Výrazný nadpis, podtitulek, statistiky a CTA tlačítka
2. **O iniciativě** – Popis iniciativy, hodnoty, citát
3. **Proč?** – 6 klíčových hrozeb pro svobodná média
4. **Co děláme** – 3 způsoby, jak se zapojit
5. **Signatáři** – Citáty podporovatelů
6. **Podpis výzvy** – Formulář pro přidání podpisu
7. **FAQ** – Časté dotazy s akordeon rozhraním
8. **Patička** – Navigace, sociální sítě, právní info

## Přizpůsobení

Před spuštěním je potřeba upravit:

- **Texty a obsah** – upravit v příslušných `.astro` komponentách
- **Barvy** – CSS proměnné v `src/layouts/Layout.astro` (`:root`)
- **Formulář** – napojit `SignPetition.astro` na skutečný endpoint (Netlify Forms, Formspree, vlastní API)
- **Sociální sítě** – aktualizovat URL v `Footer.astro`
- **Statistiky** – aktualizovat čísla v `Hero.astro`
