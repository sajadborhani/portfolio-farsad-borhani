# Farsad Borhani — Portfolio

Static, single-page portfolio for **Farsad Borhani (فرساد برهانی)**, Iranian painter and graphic
designer. Design language borrowed from the «بی‌افق / HORIZONLESS» catalog: warm paper background,
steel-blue condensed display type, black Persian overprint, checkerboard rules.

- **Stack:** Astro 7 (SSG, zero client JS except the gallery lightbox)
- **Content:** Persian (RTL) primary, English notes alongside
- **Deploy:** GitHub Pages via GitHub Actions

## Commands

```sh
npm install
npm run dev      # local dev server
npm run build    # static build → dist/
npm run preview  # serve dist/ at http://localhost:4321/portfolio-farsad-borhani/
npm run check    # astro check (types)
```

## Structure

```
src/
  assets/            hero artwork, portrait, optimized work images (works/01–19, u01–u20)
  components/        WorksGallery.astro (masonry grid + lightbox)
  data/works.ts      all works: number, medium, dimensions, year, alt text
  layouts/Base.astro fonts, header, footer, meta
  pages/index.astro  hero, bio, statement, works, contact
  styles/global.css  design tokens + layout
public/favicon.svg
```

## Editing content

- **Works:** `src/data/works.ts`. `documentedWorks` are the 19 catalogued «بی‌افق» pieces;
  `otherWorks` are the untitled studio pieces. Medium/dimensions/year are transcribed as printed
  (work ۰۲ keeps the catalog's spelling «ارولیک روی بوم»). No prices are published.
- **Bio / statement / contact:** `src/pages/index.astro`.
- **Colors and type:** CSS variables at the top of `src/styles/global.css`.

## Deploy to GitHub Pages

1. Create a repository on GitHub and push this project (`main` branch).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. `.github/workflows/deploy.yml` builds and publishes automatically and sets
   `SITE`/`BASE` from the repo owner/name:
   - project page → `https://<owner>.github.io/<repo>/`
   - `<owner>.github.io` repo → domain root
4. For a custom domain, add it under **Settings → Pages** and set `SITE` in `astro.config.mjs`
   (or as a workflow env var) to that domain.

Local builds default to `SITE=https://example.github.io` and `BASE=/portfolio-farsad-borhani/`.

## Notes

- Gallery images are eager-loaded with `decoding="async"`. Switching to `loading="lazy"` produced
  blank cards in headless-browser screenshots — verify in a real browser before changing.
- Astro generates 480/900/1400 px WebP variants. The lightbox reuses the card's `currentSrc`
  (≤ 1400 px); a 2000 px lightbox-only variant is possible but not implemented.
- Read `AGENTS.md` before working with images: never inline full-size screenshots or PDFs.
