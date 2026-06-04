// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Served as a separate Cloudflare Worker mounted under a path prefix of the
// parent site (hidetaka.dev, Next.js on Workers). `site` + `base` make every
// generated link, asset, canonical/hreflang and OG URL resolve under that
// prefix; `outDir` (below) nests the build output to match, so the parent
// stays untouched. See ./README.md ("Deploy") for the Worker + Route wiring.
export default defineConfig({
  site: 'https://hidetaka.dev',
  base: '/work/wordpress-skills',
  // Astro does NOT nest its build output under `base` — pages land at the root
  // of `outDir`, but every asset URL is prefixed with `base`. Cloudflare's
  // static-assets handler does not strip a prefix, so we nest `outDir` to match
  // the prefix: a request for `/work/wordpress-skills/_astro/x.css` then maps to
  // `dist/work/wordpress-skills/_astro/x.css`. Keep this in sync with `base`.
  outDir: './dist/work/wordpress-skills',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
