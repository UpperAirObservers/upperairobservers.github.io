# Upper Air Observers — GitHub Pages site

Production-oriented bilingual static website for **Upper Air Observers / پایشگران جو بالا**.

## Publish at https://upperairobservers.github.io/

The GitHub organization must own a repository named exactly:

`upperairobservers.github.io`

Upload the **contents** of this folder to the repository root. In GitHub:

1. Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: **main**
4. Folder: **/(root)**
5. Save

## Files

- `index.html` — page structure/content
- `styles.css` — responsive design + RTL
- `script.js` — English/Farsi switching
- `assets/images/` — optimized versions of supplied UAO photographs/screenshots
- `assets/docs/` — supplied DigiSonde catalogue PDFs
- `.nojekyll` — disables Jekyll processing

## Persian font

The Persian version intentionally keeps the font stack from the first site version:

`Tahoma, "Segoe UI", Arial, sans-serif`

No external font download is required.


## Persian font
The Persian interface uses **Vazirmatn** loaded from Google Fonts. When the font cannot be downloaded (for example while offline), the browser falls back to Tahoma, Segoe UI, then Arial. No font files are included in the repository.
