# THAI AGROZYME Front End — Draft 4

Standalone static front end prepared for a **new GitHub repository / GitHub Pages** deployment.

## What is included
- `index.html`
- `404.html`
- `.nojekyll`
- `assets/css/styles-draft4.css`
- `assets/js/app-draft4.js`
- `assets/fonts/` with the DB Adman X WOFF2 files
- `assets/images/` containing the Agrozyme Thailand logo, desktop/mobile hero images, six solution images, sustainability image, and all 18 product package images

## Draft 4 design changes
- softer organic layout and section transitions
- editorial hero with clearer desktop hierarchy
- redesigned mobile hero and CTA buttons
- floating solution bridge beneath the hero
- improved visual rhythm and organic cards
- sticky product family navigation
- redesigned product cards and mobile product browsing
- mobile bottom action dock
- exact local DB Adman X font loading from `assets/fonts/`
- responsive product modal / bottom sheet

## GitHub Pages
1. Create a new repository.
2. Upload **the contents of this folder** to the repository root (do not upload the enclosing folder itself).
3. Commit to `main`.
4. Open **Settings → Pages**.
5. Deploy from branch `main`, folder `/ (root)`.

No build step is required.


## Draft 4 mobile repair
- Compact single-row mobile header
- Safe Thai headline sizing and controlled line breaks
- No emoji arrows; all directional icons are CSS-drawn
- Five product-category tabs visible at once (no horizontal category scroll)
- Mobile products use a snap carousel instead of 18 stacked rows
- Shorter solution cards and sustainability section
- Two-column problem finder
- Removed fixed bottom dock to prevent content obstruction
