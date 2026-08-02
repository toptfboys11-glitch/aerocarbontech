# SEO Content Expansion V2 — Phase 1 Implementation Report

## A. Summary

Implemented six indexable routes: a Products hub, combined Carbon Fiber Sheet & Plate product page, Carbon Fiber Rod product page, Robotics application page, GPS/RTK Equipment application page, and Buyer FAQ. Existing Applications, Capabilities and Resources hubs were connected to the new routes. The homepage received restrained navigation, internal-link and positioning changes without changing its URL, title, H1, conversion form, WhatsApp number, email, factory proof or Middle East section.

Deliberately not implemented:

- UAE case study: no verified product, quantity, process, payment, shipment, testing or outcome facts and no case assets exist in the repository.
- Azerbaijan case study: the same evidence gap applies.
- Middle East market page: current verified regional value is already expressed on the homepage; a separate page would currently be repetitive.
- Separate Sheet and Plate pages: combined to avoid near-duplicate intent and keyword cannibalization.
- Country pages and additional product/capability routes: outside Phase 1 or unsupported by distinct facts.

## B. SEO preservation report

- Preserved routes: `/`, `/applications/`, `/capabilities/`, `/resources/`.
- Redirects: none.
- Homepage title and H1: unchanged.
- Homepage description: unchanged.
- Homepage wording changed only in the hero and B2B purchasing introduction to broaden “Middle East-only” positioning while retaining Middle East support.
- Old hero: “Aero Carbon Tech supplies carbon fiber sheets, tubes, UAV frames, CNC-machined parts and custom composite products for Middle East OEM buyers.”
- New hero: “Aero Carbon Tech supplies carbon fiber sheets, tubes, rods, CNC-machined parts and custom composite components for global OEM and industrial buyers, with responsive support for projects across the Middle East and international markets.”
- Risk: medium-low because the existing keyword set and Middle East relevance remain, while the audience scope expands.
- Sitemap: expanded from 4 to 10 completed routes; root and `public/` copies remain identical.
- Robots: unchanged.
- Analytics/Search Console: no tracking or verification marker was removed or edited.
- RFQ integration: Web3Forms action, access key field, reply-to behavior, bot check and submit script remain present.

## C. URL matrix

| URL | Type | Primary intent | Status | Title / H1 | Canonical | Indexable | Sitemap |
|---|---|---|---|---|---|---|---|
| `/` | Home | Aero Carbon Tech / OEM manufacturer | Preserved, lightly enhanced | Existing title / `Carbon Fiber Products for OEM Buyers` | Existing strategy preserved (none) | Yes | Yes |
| `/applications/` | Hub | carbon fiber applications | Preserved, linked | Existing unique metadata / H1 | Self | Yes | Yes |
| `/capabilities/` | Hub | carbon fiber machining capabilities | Preserved, linked | Existing unique metadata / H1 | Self | Yes | Yes |
| `/resources/` | Hub | carbon fiber selection resources | Preserved, linked | Existing unique metadata / H1 | Self | Yes | Yes |
| `/products/` | Hub | OEM carbon fiber products | New | `OEM Carbon Fiber Products Manufacturer` / `Carbon Fiber Products for OEM and Industrial Buyers` | Self | Yes | Yes |
| `/products/carbon-fiber-sheet-plate/` | Product | custom carbon fiber sheet manufacturer | New | `Custom Carbon Fiber Sheet & Plate Manufacturer` / same intent | Self | Yes | Yes |
| `/products/carbon-fiber-rod/` | Product | custom carbon fiber rod manufacturer | New | `Custom Carbon Fiber Rod Manufacturer for OEM Projects` / same intent | Self | Yes | Yes |
| `/applications/robotics/` | Application | carbon fiber sheet for robotics | New | `Carbon Fiber Sheets & Components for Robotics` / same intent | Self | Yes | Yes |
| `/applications/gps-rtk-equipment/` | Application | carbon fiber rod for GPS/RTK equipment | New | `Carbon Fiber Rods for GPS & RTK Surveying Equipment` / same intent | Self | Yes | Yes |
| `/resources/faq/` | FAQ | carbon fiber buyer FAQ | New | `Carbon Fiber Product, Customization & RFQ FAQ` / same intent | Self | Yes | Yes |

All new routes contain one unique title, description, H1 and self-referencing canonical. Product pages use BreadcrumbList only; no Product schema was added because price, availability and other product fields are not verified. The FAQ uses FAQPage for a subset of visibly rendered answers.

## D. Changed files

Created: six route `index.html` files listed above, `docs/IMAGE-REQUIREMENTS.md`, and this report.

Modified:

- `index.html`: conservative navigation, two positioning sentences, application links and footer links.
- `applications/index.html`: full navigation and priority application links.
- `capabilities/index.html`: full navigation and contextual product/FAQ links.
- `resources/index.html`: full navigation and FAQ/product links.
- `phase1-pages.css`: reusable image, hero, fact-list, FAQ and footer styles; responsive hero behavior.
- `sitemap.xml` and `public/sitemap.xml`: six completed URLs added.
- `scripts/validate-site.mjs`: route inventory, sitemap inventory, nested CTA handling and protected post-change homepage hash.

## E. Content verification list

Verified from production/repository content:

- Product families: sheets, plates/panels, tubes, rods, CNC parts and custom composite components.
- Existing CNC, cutting, molding, grinding and spraying process statements.
- Existing V-Trust report context, 81/100 audit score, 35 CNC units and nine QC staff (retained on homepage only).
- Existing email, WhatsApp number, RFQ integration and export/shipping-option wording.
- Existing Middle East, UAE and GCC inquiry positioning.

Requires user confirmation and therefore omitted from factual public specifications:

- Exact sheet/plate sizes and thicknesses; grades; 3K/12K availability; woven/UD and layup options.
- Tolerances, maximum CNC dimensions, exact rod/tube dimensions.
- MOQ, sample price, lead time, shipping time and trade terms.
- Any claim beyond the existing audited factory data.
- Every UAE and Azerbaijan case detail and evidence item.

No `TBD`, `XX mm`, fabricated numeric range or invented customer outcome is published.

## F. Image report

Reused repository assets: `carbon-sheet-1.png`, `twill-sheet.jpg`, `carbon-tube.png`, `cnc-part-1.jpg`, and `forged-sheet.png`. New uses declare width/height and below-fold images use lazy loading. Missing real rod, application and case-study assets are documented in `docs/IMAGE-REQUIREMENTS.md`. No competitor or unlicensed image was added.

## G. QA results

- `node scripts/validate-site.mjs`: PASS for 10 routes.
- Local internal links: PASS via repository validator.
- Unique title, H1 and description: PASS.
- Canonicals and indexability: PASS for all published SEO pages.
- Root/public sitemap equality and URL inventory: PASS.
- Robots declaration: PASS and unchanged.
- RFQ behavior markers: PASS.
- JSON-LD: valid JSON syntax in static source; FAQ content matches visible answers.
- Responsive CSS and browser checks: tested at 360, 390, 768, 1024 and 1440px. No horizontal document overflow was detected; navigation, H1s and quotation CTAs remained visible. Grids collapse at 800px and CTA buttons stack at 480px. Vercel Preview review is still required because local static serving cannot reproduce deployment settings.
- External form submission was not performed to avoid generating a live inquiry; integration code was preserved and checked structurally.

## H. Preview instructions

Local preview from repository root:

```sh
python3 -m http.server 8000
```

Review `/`, `/products/`, both product pages, `/applications/`, both application pages, `/capabilities/`, `/resources/` and `/resources/faq/` at `http://localhost:8000`. Push this feature branch only after review, allow Vercel to create a Preview deployment, verify the commit SHA and protection, run the repository preview checklist, and do not attach the production domain or promote the deployment without approval.

## I. SEO risk assessment

- New distinct product/application/FAQ routes: low risk.
- Combined Sheet & Plate architecture: low risk; reduces duplication.
- Hub internal links and sitemap expansion: low risk.
- Homepage navigation destination changes: low risk; crawlable pages replace in-page destinations while existing sections remain.
- Homepage audience broadening: medium-low risk; title, H1, core products, factory proof, Middle East section and conversion paths remain.
- Publishing unverified case/market pages: high risk and deliberately avoided.

## J. Rollback

No commit, merge or deployment is part of this implementation. Before committing, review or discard only this branch’s working-tree changes. After a future branch commit, revert that commit through normal Git history or close the PR without merging. If merged later, use a normal revert commit/PR; do not rewrite `main` and do not use Vercel redeploy as a substitute for source control.

## K. Official-asset content enhancement

The Sheet/Plate and Rod pages now include official product imagery, product-form organization, material/surface decision guidance, customization inputs, manufacturing workflow, quality planning and buyer questions. Robotics and GPS/RTK now connect application requirements to verified product forms, manufacturing review and customer-controlled validation without customer claims. The FAQ contains 25 visible buyer questions and 25 matching FAQPage entities.

The homepage change is limited to replacing one factory-gallery image with the reviewed official factory exterior and declaring intrinsic dimensions/lazy loading. Homepage URL, title, H1, description, regional positioning, form and conversion links remain unchanged. Asset provenance and usage boundaries are recorded in `docs/reports/official-asset-mapping.md`.
