// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Update `site` to your production URL (e.g. a Cloudflare Pages domain)
// so canonical/hreflang/OG URLs resolve correctly.
export default defineConfig({
  site: 'https://wordpress-skills.pages.dev',
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
