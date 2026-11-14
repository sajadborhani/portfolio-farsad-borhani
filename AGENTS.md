# Project instructions — Farsad Borhani portfolio

## Image handling (critical — see below)

This project's earlier session crashed with:
`provider.invalid-request: Upstream request failed: [airlock_error] inlined media exceeds the 56623104 byte total limit`

Rules to never hit it again:

- **Never read, cat, or attach full-size images, PDF pages, or full-page screenshots inline.**
- Before viewing any image, downscale/crop to ≤ 1100 px and ≤ ~200 KB:
  `sips -s format jpeg -s formatOptions 55 -Z 1100 in.png --out out.jpg`
- Verify visually with one small crop at a time — never a 5200–7600 px full-page capture.
- Prefer measuring with tools (`sips -g pixelWidth -g pixelHeight`, `du -sh`, `find -size`) over looking.
- Never inline `Safari.pdf` or other PDFs; extract text/crops via shell (`pdftotext`, PyMuPDF) instead.
- Do not re-import screenshot/media history from the crashed session `ses_e2bd06354ffeB7SZMY7arIRAFh`.

## Site notes

- Astro 7 SSG single page. Build: `npm run build`. Preview from `dist/` with base `/farsad-portfolio/`.
- Gallery images: eager loading + `decoding="async"` — switching to `loading="lazy"` caused blank
  cards in headless Firefox screenshots. Do not flip without checking in a real browser.
- Source paintings are 1500–2000 px; lightbox shows the card `currentSrc` (≤ 1400w).
