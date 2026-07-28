# Indexation Plan

## Status Rules

| Content condition | Indexation | Sitemap |
|---|---|---|
| Original, complete, verified, commercially useful | `index, follow` | Include after QA |
| Empty template | `noindex, follow` | Exclude |
| Thin placeholder | `noindex, follow` | Exclude |
| Unverified capability/product | `noindex, follow` or do not publish | Exclude |
| Fabricated/duplicate page | Do not create | Exclude |
| Missing required proof/assets | `noindex, follow` until complete | Exclude |
| Editorial draft | `noindex, follow` | Exclude |
| Approved canonical production page | `index, follow` | Include |

Do not rely on robots.txt to control indexing. Search engines must be able to crawl a draft URL to see its page-level `noindex`. Never block a noindex draft path in robots.txt as the only control.

## Preview Protection

Preferred control: Vercel Deployment Protection / Vercel Authentication for all Preview deployments.

Additional defense, where supported and separately approved: return `X-Robots-Tag: noindex, nofollow` on Preview responses. The implementation must be environment-specific, default to no production behavior change, and be tested on both Preview and Production. Do not add an untested global header or accidentally noindex production.

All Phase 1 landing foundations created in this task use `<meta name="robots" content="noindex, follow">` and production-domain self-canonicals. They remain excluded from sitemap until a later review removes noindex.

## Sitemap Workflow

1. Content and business verification complete.
2. Unique metadata, canonical, H1, links and proof pass QA.
3. Remove page-level noindex in the reviewed change.
4. Add canonical production URL to the single authoritative sitemap.
5. Validate there are no drafts, Preview hosts or duplicates.
6. Deploy through Preview → PR → approved merge.
7. Confirm production 200 and sitemap accessibility.

## Removal and Consolidation

If a page becomes duplicate or low value, first assess consolidation into its pillar. Use a reviewed redirect only when a replacement exists. Do not leave both pages indexable or remove a converting URL without traffic/conversion evidence.

## Monitoring

After Search Console is configured, review quarterly: indexed/not-indexed states, selected canonical, sitemap processing, query/page overlap, crawl errors and pages producing qualified inquiries.
