# tools/

Browser-based audit harness used for the audit / redesign pass documented in
`../AUDIT_REPORT.md`. Everything here runs on packages the project already
depends on (`playwright-core`, `axe-core`) — nothing new is installed.

Output is written to `tools/../.audit/` (gitignored).

## Everyday use

Serve a build and audit it:

```bash
node tools/serve.mjs . 4173 &          # static server with SPA fallback
node tools/audit.mjs                   # console errors, axe, overflow, screenshots
node tools/crawl.mjs                   # follow every in-app link, find dead routes
node tools/interactions.mjs            # menu, tablist, quiz, filter, back/forward
node tools/contrast.mjs                # WCAG contrast for the design tokens
kill %1
```

`serve.mjs` serves whichever directory you point it at, so you can audit either
the Vite dev server (`BASE=http://localhost:5173 node tools/audit.mjs`) or a
built `dist/`.

| Script | What it does | Useful env vars |
|---|---|---|
| `serve.mjs` | Static file server with a single-page-app fallback, mirroring GitHub Pages | *(args: `<root> <port>`)* |
| `audit.mjs` | Loads each route at 375 / 768 / 1440 px, records console errors, failed requests, axe-core violations and horizontal overflow, and writes screenshots | `BASE`, `ROUTES` (JSON), `SHOTS`, `SHOT_VIEWPORTS` |
| `crawl.mjs` | Breadth-first crawl of in-app links; reports routes that render the not-found view and any runtime error | `BASE`, `MAX` |
| `interactions.mjs` | Behavioural assertions the static audit cannot cover: disclosure menu, tablist keyboard support, quiz feedback text, course filter, back/forward focus and scroll | `BASE` |
| `contrast.mjs` | WCAG 2.1 contrast ratio for every token pair in the design system; exits non-zero on a failure | *(arg: JSON array of `[label, fg, bg, min]`)* |

## Environment-specific

`jsxc.mjs` and `devbuild.mjs` exist only because the audit ran in an
environment with **no package-registry access** and a `node_modules` built for a
different platform, so `vite`, `tsc` and `vitest` (all native binaries) could
not execute there. Together they compile the TSX app to browser-native ES
modules — resolving `import.meta.glob`, `?raw`, `?url` and JSON imports at
compile time — purely so the site could be run and audited.

**They are not a build system and are not part of any npm script.** The real
build is Vite:

```bash
npm run dev          # development
npm run build:pages  # production build for GitHub Pages
```

Keep them only if you ever need to inspect the app somewhere the toolchain
cannot install; otherwise deleting these two files changes nothing.
