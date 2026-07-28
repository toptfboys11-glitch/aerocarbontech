# Git and Vercel Preview Workflow

## Branch Policy

- `main` is the production branch.
- `feature/*` branches are development and Vercel Preview branches.
- Recommended first branch: `feature/seo-master-architecture`.
- `develop` is optional for future integration. Do not create it unless the team formally adopts it.

Never develop directly on `main`. Never force-push `main`, delete the production branch, change the Vercel Production Branch without approval, or use Redeploy as a substitute for source control.

## Safe Sequence

1. Confirm working tree status.
2. Create the feature branch from the current production baseline.
3. Make changes only on the feature branch.
4. Run local validation.
5. Commit locally.
6. Push the feature branch to GitHub.
7. Allow Vercel to generate a Preview Deployment.
8. Review the Preview URL.
9. Review Vercel build logs.
10. Test all routes and forms.
11. Run SEO checks.
12. Open a Pull Request.
13. Merge only after approval.
14. Confirm the production deployment.
15. Roll back immediately if production verification fails.

## Example Commands — Human Operator Only

These commands are examples. Verify and preserve unrelated local files before running them.

```bash
git status
git fetch origin
git checkout main
git pull --ff-only origin main
git checkout -b feature/seo-master-architecture
```

After review and local validation:

```bash
git add .
git commit -m "Plan SEO master architecture and preview workflow"
git push -u origin feature/seo-master-architecture
```

For this repository, prefer an explicit file list instead of `git add .` when unrelated untracked files such as `.DS_Store` or private notes exist.

## Vercel Dashboard Checklist

- [ ] Correct GitHub repository is connected.
- [ ] Production Branch is exactly `main`.
- [ ] Non-main branches create Preview Deployments.
- [ ] Production domain is attached only to Production.
- [ ] Preview URL uses a Vercel Preview domain, not the production custom domain.
- [ ] Deployment Protection / Vercel Authentication is enabled for Preview if available.
- [ ] Build command is blank unless an approved build system is introduced.
- [ ] Output Directory matches the static source layout and is confirmed by a successful Preview.
- [ ] Preview response is protected from indexing.
- [ ] Production environment is not receiving Preview-only headers.

Do not attach the production custom domain to a Preview branch. Do not promote a Preview Deployment to Production without explicit approval.

## Review Gates

A successful build is not sufficient. Before merge, manually verify the Preview URL, build logs, all routes, unknown-route behavior, metadata, canonical values, noindex behavior, relative assets, responsive layouts, form code and the protected homepage hash.
