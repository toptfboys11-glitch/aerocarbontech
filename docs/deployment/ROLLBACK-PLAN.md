# Production Rollback Plan

## Identify the Last Known Good Version

1. Record the failing production URL, deployment ID, branch and commit.
2. In GitHub, identify the last approved merge to `main`.
3. In Vercel, identify the last deployment that passed homepage, form, SEO and asset checks.
4. Confirm the Git commit behind that deployment; do not select a deployment by time alone.

Current known protected baseline when this document was created: `15105475156ed3cac707260da1bbe35dc4b3f149`.

## Preferred Git-Based Rollback

Revert the merge or offending commit through normal Git history. Do not rewrite `main`.

```bash
git checkout main
git pull --ff-only origin main
git revert <offending-merge-or-commit-sha>
git push origin main
```

For a Pull Request merge, use GitHub's Revert action where appropriate, review the generated revert PR, and merge it only after approval.

## Vercel Deployment History

- Open Project → Deployments.
- Filter to Production and inspect commit SHAs.
- Compare build logs, source branch, output directory and domains.
- A manual promotion/redeploy requires explicit owner approval and must not replace the Git revert.

## Verification After Rollback

- Homepage, robots.txt and sitemap.xml return expected status codes.
- Homepage title, description, H1, images and CTAs match the known-good commit.
- Web3Forms code and contact links remain present.
- Product, factory, application and market anchors work.
- Static assets return 200.
- Production domain points to the rollback deployment.
- Search-engine directives do not contain accidental `noindex`.

## Emergency Warnings

- Do not delete files manually from output directories.
- Do not edit generated deployment files.
- Do not force-push or reset remote `main`.
- Do not change DNS or the Vercel Production Branch as a quick fix.
- Document the incident and root cause before resuming feature work.
