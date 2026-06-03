# wordpress-skills — landing page

A lightweight, bilingual (English / 日本語) single-page landing site for
[wordpress-skills](https://github.com/hideokamoto/wordpress-skills), built with
[Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/).

This is the **"梅" (minimal) tier** of the site plan: one LP per language, no
documentation framework. When the project grows to several skills (≈10+ pages of
docs), this same Astro project can adopt [Starlight](https://starlight.astro.build/)
at `/docs/**` without a migration ("竹" tier).

## Structure

```text
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

## Deploy — Cloudflare Workers, mounted under a path of the parent site

This LP ships as its **own** static-assets Worker, mounted under a path prefix of
the parent site (`hidetaka.dev`, a Next.js-on-Workers app) **without changing the
parent**. Cloudflare matches the route at the edge: only
`hidetaka.dev/work/wordpress-skills` and everything beneath it reach this Worker;
every other path keeps flowing to the parent. (Routes win over a Custom Domain on
the same hostname, so the parent's domain config is untouched.) Run both from the
repo root:

```bash
pnpm run deploy        # = pnpm run build && wrangler deploy
```

Three pieces make the path mount work, and they must stay in sync:

1. **`base` in `astro.config.mjs`** (`/work/wordpress-skills`) — prefixes every
   generated link, asset, canonical/`hreflang` and OG URL.
2. **`outDir`** (`./dist/work/wordpress-skills`) — Astro does *not* nest output
   under `base`, but Cloudflare's asset handler does not strip a prefix, so we
   nest the output to match. A request for `/work/wordpress-skills/_astro/x.css`
   then maps onto `site/dist/work/wordpress-skills/_astro/x.css`.
3. **`routes` in `../wrangler.jsonc`** — two patterns, the bare prefix and the
   wildcard subtree (`…/work/wordpress-skills` and `…/work/wordpress-skills/*`).

To move the LP to a different path, change `base` + `outDir` + the two route
patterns together, then rebuild.

### Validate without deploying

```bash
pnpm run build
npx wrangler deploy --dry-run   # checks config + routes, uploads nothing
```

> **Subdomain instead?** Drop `base`/`outDir`, set `outDir` back to `./dist`, and
> swap the path `routes` for a Custom Domain (e.g. `skills.hidetaka.dev`).
