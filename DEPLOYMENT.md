# Deployment

## Production configuration

| Setting | Value |
| --- | --- |
| Repository owner | `Vansh07652` |
| Repository name | `ELI_Nur_Web` |
| Repository URL | `https://github.com/Vansh07652/ELI_Nur_Web` |
| Default/production branch | `main` |
| Package manager | npm with `package-lock.json` |
| Pages build command | `npm run build:pages` |
| Output directory | `dist/` |
| Hosting provider | GitHub Pages |
| Deployment project | GitHub Pages site for `Vansh07652/ELI_Nur_Web` |
| Pages source | GitHub Actions |
| Deployment workflow | `.github/workflows/deploy-pages.yml` |
| Primary production URL | `https://medmosa.org/` |
| WWW alias | `https://www.medmosa.org/` |
| Custom-domain file | `public/CNAME` |
| Required frontend environment variables | None |
| Learning-data API runtime | Cloudflare Worker (`medmosa-source-api`) |
| Learning-data API custom domain | `https://api.medmosa.org` |
| Worker configuration | `wrangler.jsonc` |
| Worker workflow | `.github/workflows/deploy-source-worker.yml` |

The primary application remains a static React/Vite site on GitHub Pages. The optional learning-data tools call a separate Cloudflare Worker on `api.medmosa.org`; no database or paid storage service is introduced. The Pages build uses the custom-domain root as its asset base, creates static entry points for every canonical route, preserves `public/CNAME` in the artifact, and retains `404.html` as the fallback for invalid client-side routes.

The Worker deploy workflow verifies every relevant change. It deploys after a `main` push only when the repository secret `CLOUDFLARE_API_TOKEN` exists; without it the job reports a successful verification and an explicit deployment skip. Cloudflare dashboard secrets, including `OPENALEX_API_KEY` and optional `NCBI_API_KEY`, are preserved by `wrangler deploy --keep-vars`.

## Custom domain

`public/CNAME` is the source of truth for the domain and is copied into the build artifact; `SITE_ORIGIN` in `scripts/site-routes.mjs` and `CANONICAL_ORIGIN` in `src/lib/navigation.ts` must name the same host, because they generate the sitemap and the canonical/Open Graph URLs. Changing the domain means changing all three, plus the absolute URLs in `index.html` and the sitemap line in `public/robots.txt`.

Two settings live outside this repository and have to be changed by hand:

1. **DNS at the registrar.** For an apex domain, four `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153` (and the matching `AAAA` records if IPv6 is wanted), plus a `CNAME` record for `www` pointing at `vansh07652.github.io`. A provider that supports `ALIAS`/`ANAME` at the apex can point that at `vansh07652.github.io` instead.
2. **Settings → Pages → Custom domain** on the repository, set to the same host as `public/CNAME`, then *Enforce HTTPS* once the certificate is issued.

Until both are done the site keeps serving from the previous domain and from `vansh07652.github.io/ELI_Nur_Web/`.

## Validate a release

Use Node.js 20.19 or newer and npm 10 or newer:

```bash
npm ci
npm audit --audit-level=high
npm run validate
npm run build:pages
npm run build:worker
LIVE_BASE_URL=https://medmosa.org npm run test:browser
LIVE_BASE_URL=https://www.medmosa.org npm run test:browser
npm run release:manifest
npm run validate:release
```

Before committing, confirm that `node_modules/`, `dist/`, local environment files, operating-system metadata, logs, and caches are absent or ignored.

## Deploy future updates

1. Create a reviewed branch from `main` and make the complete change at the repository root.
2. Run the validation sequence above, omitting the live-site command until after deployment.
3. Push the branch and require the `CI` workflow to pass.
4. Merge through the normal pull-request process. A push to `main` automatically starts `Deploy GitHub Pages` and verifies the source Worker. The Worker deploy step runs when `CLOUDFLARE_API_TOKEN` is configured.
5. Wait for the Pages jobs and Worker verification/deployment job, then run the live browser audit and the API smoke checks in `docs/free-data-integrations.md`.
6. Record the deployment and smoke-test outcome in the Phase 6 reports.

The Pages workflow uses least-privilege `contents: read`, `pages: write`, and `id-token: write` permissions and GitHub's Pages concurrency control.

## Rollback

Keep prior commits and deployments. Create a branch that reverts the faulty change, validate it, and merge the revert normally. GitHub Pages will deploy the resulting `main` commit. Do not force-push or rewrite history.

## Security notes

- Store any future credentials in GitHub Actions secrets, never in the repository.
- Preserve least-privilege workflow permissions.
- Run the dependency audit and secret scan before every release.
- Preserve `public/CNAME` and configure any domain change only after ownership and DNS access are verified.
