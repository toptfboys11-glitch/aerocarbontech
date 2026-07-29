# Existing Site Audit

Audit date: 2026-07-28  
Protected production commit: `15105475156ed3cac707260da1bbe35dc4b3f149`

## Architecture

| Item | Finding |
|---|---|
| Framework | None. Hand-authored static HTML, inline CSS and vanilla JavaScript. |
| Package manager | None; no `package.json`. |
| Build command | None in the repository. Vercel Dashboard settings are the only known source of build configuration and must be checked by a human. |
| Output directory | Not declared in source control. The production project currently requires a Vercel Dashboard override compatible with root `index.html`; do not infer or change it automatically. |
| Homepage | `/index.html` at repository root. |
| Routing | One document with hash anchors: `#products`, `#factory`, `#applications`, `#markets`, `#contact`. No router, rewrite file or application server. |
| Production domain | `https://www.aerocarbontech.com/`, based on the sitemap and current footer URL. |
| Form | Web3Forms POST to `https://api.web3forms.com/submit`; JavaScript sets `replyto` from the Email field, submits with `fetch`, and handles success/error states. |
| Tracking | No Google Analytics, GTM, Search Console verification, Meta Pixel, Clarity or comparable tracking script detected. |

## Current Files and Public Routes

Tracked website files consist of the root homepage, root image assets, `szfrt-assets/`, and `public/` SEO/image assets. Existing public behavior depends on the Vercel output-directory setting.

Known routes:

- `/` — production homepage.
- `/#products`, `/#factory`, `/#applications`, `/#markets`, `/#contact` — homepage anchors.
- `/robots.txt` — intended production path, source file `public/robots.txt`.
- `/sitemap.xml` — intended production path, source file `public/sitemap.xml`.
- `/images/factory-workshop-hero.webp` and `/images/factory-workshop-detail.webp` — intended production paths if Vercel publishes `public/` at the domain root.

There are no existing path-based product, capability, application, resource, FAQ, about, case-study or contact pages.

## Current SEO

- Title: `Aero Carbon Tech | FRT Carbon Fiber Manufacturer for UAV, Automotive & Industrial OEMs`
- Description: `Aero Carbon Tech is the export-facing carbon fiber product site backed by FRTCARBON, supplying carbon fiber sheets, tubes, UAV frames, CNC parts and custom composite components for Middle East OEM buyers.`
- H1: `Carbon Fiber Products for OEM Buyers`
- Language: `en`
- Charset: UTF-8
- Viewport: `width=device-width, initial-scale=1.0`
- Canonical: none.
- Meta robots: none; default index/follow behavior.
- Open Graph / Twitter Card: none.
- JSON-LD: none.
- Favicon: none.
- hreflang: none.
- Sitemap: one URL, `https://www.aerocarbontech.com/`.
- robots.txt: allows all crawlers and references the production sitemap.

## Risks

1. **Dashboard-only deployment assumptions.** No build/output configuration is versioned. A wrong Vercel Output Directory can publish the wrong tree or break root assets.
2. **Production/Preview separation is procedural, not encoded.** Preview protection must be verified in Vercel before publishing draft routes.
3. **No canonical on the protected homepage.** This is a known technical gap, but changing homepage SEO requires separate approval.
4. **No analytics or Search Console verification detected.** Performance decisions cannot be tied to repository-visible conversion/search data.
5. **No path-based routing mechanism.** New pages must use physical directories with `index.html`, or the project must later adopt an approved routing/build architecture.
6. **Mixed source/public asset assumptions.** Homepage source references `public/images/...`, while production intent may map `public/` to `/`. New work must be tested through a Vercel Preview before merge.
7. **No custom 404 source file.** Unknown-route behavior is platform-dependent.
8. **The access key is present in static HTML.** This is normal for Web3Forms public keys, but anti-spam and domain restrictions should be managed in Web3Forms.

## Files Requiring Explicit Approval Before Modification

- `/index.html` — protected inquiry-producing homepage, including all copy, SEO, style, form and JavaScript.
- `/public/robots.txt` and `/public/sitemap.xml` — production crawl/indexation controls.
- Existing images referenced by `/index.html`.
- Any future `vercel.json`, build command, output-directory setting or environment-based header configuration.
- Web3Forms endpoint, access key, field names, required states and submission logic.

## Safe Phase 1 Compatibility Decision

The least invasive compatible implementation is physical static directories:

- `/resources/index.html`
- `/applications/index.html`
- `/capabilities/index.html`

They should remain `noindex, follow`, excluded from the production sitemap and absent from the protected homepage navigation until Preview QA and business approval are complete. This avoids touching the homepage and avoids creating thin supporting pages.
