# wordpress-skills — landing page

A lightweight, bilingual (English / 日本語) single-page landing site for
[wordpress-skills](https://github.com/hideokamoto/wordpress-skills), built with
[Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/).

This is the **"梅" (minimal) tier** of the site plan: one LP per language, no
documentation framework. When the project grows to several skills (≈10+ pages of
docs), this same Astro project can adopt [Starlight](https://starlight.astro.build/)
at `/docs/**` without a migration ("竹" tier).

## Structure

```
site/
├── src/
│   ├── components/Landing.astro   # the whole page, driven by `lang`
│   ├── i18n/content.ts            # all copy for en + ja (single source of truth)
│   ├── pages/index.astro          # English  → /
│   └── pages/ja/index.astro       # Japanese → /ja/
├── public/favicon.svg
└── astro.config.mjs               # i18n: en (default) + ja
```

To edit copy, change `src/i18n/content.ts` only — keep `en` and `ja` in sync.

## Develop

```bash
cd site
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # static output in ./dist
npm run preview  # preview the production build
```

## Deploy — Cloudflare Pages (recommended)

The output is fully static, so no adapter is needed.

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `site`

Then update `site` in `astro.config.mjs` to your production URL so canonical and
`hreflang` tags resolve correctly.

> GitHub Pages also works (set `base`/`site` accordingly), but Cloudflare Pages
> gives a free CDN, preview deployments, and room to add Workers later.
