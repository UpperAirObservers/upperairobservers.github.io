# Google SEO setup — Upper Air Observers

This package is prepared for **https://upperairobservers.github.io/** and includes separate crawlable English and Persian URLs.

## Implemented

- Unique English and Persian page titles and meta descriptions.
- Canonical URLs for every page.
- Separate Persian pages under `/fa/` so Google can index Persian content as its own URLs.
- Bidirectional `hreflang="en"` and `hreflang="fa"` annotations plus `x-default`.
- `robots.txt` and `sitemap.xml`.
- Organization, WebSite, WebPage and Breadcrumb JSON-LD structured data.
- Open Graph and social preview metadata.
- Stable 96×96 favicon reference for search results.
- Improved image performance: high-value PNG images also have optimized WebP versions, below-the-fold images use native lazy loading, and intrinsic dimensions are included to reduce layout shift.
- Search-friendly, crawlable language links instead of JavaScript-only language switching.

## After publishing to GitHub Pages

1. Open Google Search Console and add a **URL-prefix property** for `https://upperairobservers.github.io/`.
2. Verify ownership using the HTML tag or HTML-file method Google provides. The verification token is unique to your Google account, so it is not prefilled in this package.
3. Submit `https://upperairobservers.github.io/sitemap.xml` in **Sitemaps**.
4. Use **URL Inspection** to request indexing for the homepage and the main English/Persian product pages.
5. Test the live pages with Google's Rich Results Test and PageSpeed Insights.
6. Keep the LinkedIn company page linking back to `https://upperairobservers.github.io/` and keep the business name consistent as **Upper Air Observers / پایشگران جو بالا**.

## Language URLs

English:
- `https://upperairobservers.github.io/`
- `https://upperairobservers.github.io/digisonde.html`
- `https://upperairobservers.github.io/ground-station.html`
- `https://upperairobservers.github.io/digimon.html`

Persian:
- `https://upperairobservers.github.io/fa/`
- `https://upperairobservers.github.io/fa/digisonde.html`
- `https://upperairobservers.github.io/fa/ground-station.html`
- `https://upperairobservers.github.io/fa/digimon.html`

## Editing Persian text

For SEO, Persian content is now present directly in the HTML files under `/fa/`. Edit those files when refining the Persian copy. Do not rely on JavaScript to replace the language after page load, because the separate static URLs are what Google should index.
