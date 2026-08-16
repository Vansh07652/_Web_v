# Deployment plan

## Artifact

Study Compass builds to `dist/` as a static client application with no backend, database, authentication, environment variables, or runtime secrets. Vite emits hashed assets and the build script copies `index.html` to `404.html` for GitHub Pages-compatible direct-route recovery.

## Release procedure

1. Install locked dependencies with `npm ci`.
2. Run `npm run validate` from the repository root.
3. Review `validation-report.md`, `PHASE_3_STATUS.md`, and `manifest.json`.
4. Upload only the generated `dist/` directory to a static host, or configure GitHub Pages through the repository's normal reviewed workflow.
5. Configure the host to return `index.html` for application paths when it supports rewrites.

## Post-deployment checks

Verify Home, a populated subject, a note, a question set, Search, an empty subject, `/404`, and a random invalid URL. Confirm keyboard focus, mobile reflow, explanations, static assets, canonical metadata, and the absence of source filesystem paths. Run a browser accessibility audit as a Phase 4 release check.

No deployment, upload, push, or publication is part of Phase 3.
