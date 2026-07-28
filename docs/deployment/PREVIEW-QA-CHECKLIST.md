# Preview QA Checklist

## Deployment

- [ ] Preview build is READY.
- [ ] Correct Git branch.
- [ ] Correct commit SHA.
- [ ] No build errors.
- [ ] No unexpected warnings.
- [ ] Homepage returns 200.
- [ ] `/resources/`, `/applications/`, `/capabilities/` return 200.
- [ ] Unknown URL returns the expected 404.
- [ ] Production custom domain is not attached to the Preview.
- [ ] Preview is protected by Vercel Authentication/Deployment Protection where available.

## Visual

- [ ] Desktop checked.
- [ ] Tablet checked.
- [ ] Mobile checked.
- [ ] Header checked.
- [ ] Footer checked.
- [ ] Navigation checked.
- [ ] Images checked.
- [ ] CTA buttons checked.
- [ ] Forms checked without submitting real data unless explicitly authorized.
- [ ] No horizontal overflow or clipped headings.

## SEO

- [ ] Unique title.
- [ ] Unique description.
- [ ] Exactly one H1.
- [ ] Self-referencing production canonical.
- [ ] Preview/draft robots meta is `noindex, follow`.
- [ ] Structured data is valid or intentionally absent.
- [ ] Breadcrumbs are visible and linked.
- [ ] Internal links resolve.
- [ ] Sitemap excludes noindex pages.
- [ ] robots.txt remains valid.
- [ ] No Preview URL appears in canonical or metadata.
- [ ] No draft URL appears in sitemap.

## Regression

- [ ] Homepage copy unchanged.
- [ ] Homepage title, description and H1 unchanged.
- [ ] Homepage CTA labels unchanged.
- [ ] Homepage layout and images unchanged.
- [ ] Existing URLs still work.
- [ ] Existing Web3Forms code still works.
- [ ] Tracking code remains unchanged (currently none detected).
- [ ] Production domain remains `https://www.aerocarbontech.com/`.
- [ ] `index.html` hash matches the recorded baseline unless a separate approval exists.

## Approval

- [ ] Business owner approval.
- [ ] SEO approval.
- [ ] Technical approval.
- [ ] Explicit merge permission.
