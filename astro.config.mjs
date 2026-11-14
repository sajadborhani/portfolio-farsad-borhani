// @ts-check
import { defineConfig } from 'astro/config';

// For GitHub Pages: set SITE to https://<user>.github.io and BASE to /<repo>/ .
// The deploy workflow in .github/workflows/deploy.yml sets both automatically
// from the repository owner/name, so no hardcoding is needed.
const site = process.env.SITE ?? 'https://example.github.io';
const base = process.env.BASE ?? '/portfolio-farsad-borhani/';

export default defineConfig({
  site,
  base,
});
