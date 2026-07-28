# Internal Linking Map

## Global Navigation

Phase 1 does not alter the protected homepage navigation. After landing pages are approved and indexable, add one minimal `Resources` entry first. Do not expose unfinished sections. A later approved navigation may include Products, Capabilities, Applications, Resources and Request Quote without removing current anchors until replacement routes are proven.

## Breadcrumbs

- Landing: `Home → Resources`.
- Product: `Home → Products → Page`.
- Capability: `Home → Capabilities → Page`.
- Application: `Home → Applications → Page`.
- Resource: `Home → Resources → Cluster → Guide`.
- Case study: `Home → Case Studies → Study`.

Every breadcrumb item except the current page is a link. BreadcrumbList schema is added only on completed pages.

## Pillar and Spoke Rules

- Every spoke links to its parent pillar near the introduction or breadcrumb.
- Every pillar links to its approved spokes through descriptive cards.
- Avoid orphan pages and generic “click here” anchors.
- Do not link to routes that do not exist.
- Related-content modules show 2–4 contextually relevant pages, not an exhaustive sitewide list.

## Required Flows

```text
Resource guide → Relevant product → Relevant capability → Request quote
Application page → Relevant product → Relevant technical guide → Request quote
Capability page → Relevant product → Relevant application → Request quote
Product page → Thickness guide → CNC capability → Application page → Request quote
```

## Cluster Relationships

| Source cluster | Required contextual targets |
|---|---|
| Sheet selection | Carbon Fiber Sheets, thickness/size/weave guides, relevant application, RFQ |
| CNC/design | Custom Carbon Fiber Parts, CNC capability, sheet pillar, application, RFQ |
| UAV/drone | Sheets, CNC parts, CNC capability, thickness/DFM guide, RFQ |
| Robotics | Sheets/plates, custom parts, CNC capability, design guide, RFQ |
| Procurement | Product pillar, quality inspection, packaging/export, RFQ |
| Comparisons | Selection guide, relevant product, application, RFQ where appropriate |
| Regional | Procurement hub, packaging/shipping, relevant applications, RFQ |

## Conversion Links

Use the production homepage RFQ anchor `/\#contact` until a separately approved request-quote route exists. CTAs should describe the next step: `Send Your Drawing`, `Request a Sheet Quote`, `Discuss CNC Feasibility`, or `Request Factory Documents` only where the destination supports the promise.

## Footer

After approval, footer links may expose completed/indexable pillars only. Drafts, noindex placeholders and regional experiments are excluded. Do not remove existing product/application/contact links without a migration plan.

## Quality Controls

- No page links to every other page.
- Use one primary topic per page.
- Anchor text varies naturally but identifies the target.
- Links must help the buyer complete selection, validation or RFQ.
- Quarterly crawl checks identify orphan, broken and over-linked pages.
