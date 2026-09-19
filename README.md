# Sähköturvallisuus S1–S3 marketing site

Static Finnish and Swedish marketing and study site for the released `app.mcyj.examprep.glb0686` mobile app.

## Local build

```bash
npm test
python3 -m http.server 4173 --directory dist
```

Open `http://localhost:4173/fi/` when serving at the domain root. GitHub Pages publishes the same output under `/sahkoturvallisuus-s1-s3-web/`.

## Structure

- `content/articles.mjs`: ten localized study guides per locale
- `scripts/build.mjs`: dependency-free static generator
- `scripts/check.mjs`: route, identity, source, SEO and asset checks
- `assets/`: exact app icon, current Store screenshots and official marketplace badges
- `.github/workflows/deploy-pages.yml`: GitHub Pages build and deployment

## Content maintenance

Update official exam facts from Tukes and Finlex, then update `checkedAt`, localized copy and guide sections together. Run `npm test` before pushing. Add a locale only when the official exam audience justifies fully localized navigation, metadata, guides, FAQ and policies.

Production: `https://mcyj.github.io/sahkoturvallisuus-s1-s3-web/fi/`
