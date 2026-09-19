# GLB-0686 marketing site context

- Service: Sähköturvallisuus S1–S3
- Service ID: GLB-0686
- Android package / iOS bundle: `app.mcyj.examprep.glb0686`
- Scope: currently released app marketing site for GitHub Pages
- Primary audiences: Finnish- and Swedish-speaking electrical-safety examination candidates
- Locales: Finnish primary, Swedish and English support
- Design direction: dark electrical control cabinet with copper conductors and safety-yellow labels
- Typography: preserve words with global `word-break: keep-all`
- Store badges: App Store and Google Play controls use identical 194 × 75 frames
- Public Store identity: Google Play package above; App Store ID `6813341421`
- Official sources: Tukes electrical-safety examination, qualification-scope, and shop pages; current Finlex Electrical Safety Act
- Source app worktree is read-only; website work is isolated in this repository.

## Verification log

- 2026-09-20: Confirmed current public availability in both Stores and verified no local or remote web-repository collision before initialization.
- 2026-09-20: Revalidated current Tukes facts: S1/S2/S3 scopes, three-hour eTentti duration, 75% passing threshold, Finnish or Swedish exam language, EUR 120 per attempt, and the one-week waiting period after the second failed attempt from 3 November 2025; also checked the current Finlex Electrical Safety Act.
- 2026-09-20: Built 34 indexable routes and 36 HTML files across Finnish and Swedish; automated checks passed for exact Store identities, current official facts, Technical SEO, global `keep-all`, and matching 194 × 75 marketplace controls.
- 2026-09-20: Local HTTP QA passed all 34 sitemap routes, eight representative assets, both Store identities, locale switching and a missing-route 404 response.
- 2026-09-20: Created public repository `MCYJ/sahkoturvallisuus-s1-s3-web`; initial GitHub Pages workflow run `35459413340` completed successfully.
- 2026-09-20: Production QA passed all 34 routes and eight assets at `https://mcyj.github.io/sahkoturvallisuus-s1-s3-web/`, exact App Store ID `6813341421`, Android package `app.mcyj.examprep.glb0686`, Finnish/Swedish switching, base-path URLs, official-source links, global `keep-all`, equal badge frames and a real 404 response. Lighthouse CLI was unavailable, so no score is claimed.
