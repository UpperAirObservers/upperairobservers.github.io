# uaobservers.ir SEO deployment checklist

This package is configured with **https://uaobservers.ir/** as the canonical domain.

## After deployment

1. Confirm these URLs load successfully over HTTPS:
   - https://uaobservers.ir/
   - https://uaobservers.ir/fa/
   - https://uaobservers.ir/sitemap.xml
   - https://uaobservers.ir/robots.txt
2. Keep the existing **301 redirects from digisonde.ir to the matching uaobservers.ir paths** active.
3. In Google Search Console, add/verify `uaobservers.ir` (Domain property is preferred if you can add the Google TXT record in Cloudflare).
4. Submit `https://uaobservers.ir/sitemap.xml`.
5. Request indexing for the home page plus the DigiSonde pages in English and Persian first.
6. If you have a verified Search Console property for `digisonde.ir`, use **Settings → Change of Address** to tell Google about the move to `uaobservers.ir`.
7. Update the website field on LinkedIn to `https://uaobservers.ir/`.
8. Keep redirects in place for at least one year; keeping them indefinitely is better.

## Contact information

The site now displays the company telephone as `021-56276333` in English and `۰۲۱-۵۶۲۷۶۳۳۳` in Persian. Both use the international callable URI `tel:+982156276333`. Structured data uses `+98-21-5627-6333`.
