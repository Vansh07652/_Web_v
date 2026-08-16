# Phase 5 release validation report

## Missing-subject restoration release — 2026-08-11

- Pull request: `https://github.com/Vansh07652/NUR_WEB/pull/9` — checks PASS, merged normally
- Source branch: `agent/add-missing-approved-subject-content` — preserved
- Merge/application commit: `84bd6eb6acfbb6a408675cd3592e0f3788f8b1b3`
- Local validation: PASS — 22 tests, 376 browser routes/deep links, five viewports, release validation, and 0 known dependency vulnerabilities
- Main CI: `31460289046` — PASS
- GitHub Pages workflow: `31460288986` — PASS
- Deployment: `5844678587` — PASS
- Production apex and `www`: PASS — complete browser audit on both
- Content: 121 lessons, 111 notes, 1,032 questions, 1,143 inventory records, and 2,064 tags
- Safety: no force push, history rewrite, branch deletion, DNS change, secret publication, or unrelated overwrite

Organic Chemistry 2 remains unrecoverable from available exact sources. NCLEX Review remains outside the release approval boundary pending qualified current clinical review.

## Original Phase 6 publication verification

Verified: 2026-08-11 00:25 America/New_York

- Phase 5 gate: PASS — `READY_TO_PUSH_TO_GITHUB: YES`
- Local clean install, audit, typecheck, lint, 22 tests, content/route/link/asset/security validation, production build, and browser smoke test: PASS
- GitHub repository: `Vansh07652/NUR_WEB`
- Release branch: `agent/publish-study-website` (preserved)
- Reported source release commit: `1748f918a0d6e49de6795ad8d8202782f15382eb`
- Verified pull-request head: `f50cf3e1bd206a03c96b0ac2769aea51da6dfbe2`
- Pull-request merge commit: `c27b53a2854ee653a0f519a2ce6275312784ee5c`
- Custom-domain pull request: `https://github.com/Vansh07652/NUR_WEB/pull/3` — merged
- Content-completeness pull request: `https://github.com/Vansh07652/NUR_WEB/pull/5` — merged as `0c2cd78e1550f5a1ed2bf81fc62c26fdd0abd72f`
- Final-evidence pull request: `https://github.com/Vansh07652/NUR_WEB/pull/6` — merged as `063c4fd6abfa097c561717cf7592283941e1e092`
- Record-reconciliation pull request: `https://github.com/Vansh07652/NUR_WEB/pull/7` — source commit `98fdca752f4e7676f47306ca2da1ba663dec4190`
- Verified deployed application commit: `0c2cd78e1550f5a1ed2bf81fc62c26fdd0abd72f` (last application-changing commit)
- Remote repository-root tree: PASS
- GitHub Actions CI: PASS — run `31458411308`
- Pull request: `https://github.com/Vansh07652/NUR_WEB/pull/2` — merged
- GitHub Pages deployment: PASS — run `31458411343`, deployment `5844352191`
- Production URL: `https://studycorehub.com/`
- WWW alias: `https://www.studycorehub.com/`
- Live-site verification: PASS — 355 routes/deep links and five viewports through each hostname

The original source release commit was reconciled with the actual PR head before merge. The approved content source, repository, and runtime indexes were subsequently reconciled with zero missing or unrecoverable approved items. No force push, history rewrite, branch deletion, custom-domain guess, or secret publication occurred.

Evidence-only commits after PR #5 do not alter the audited application bundle. The report uses the last application-changing commit plus an evidence-record source commit because a document cannot contain the hash of the later merge commit that will contain that document.

Generated: 2026-08-10T20:42:43-04:00

Source directory: `_UPLOAD_GITHUB/Phase 5/` (the completed Phase 5 release directory)

Final decision: `PHASE_5_COMPLETE` — `READY_TO_PUSH_TO_GITHUB: YES`

No Git repository was initialized or changed. Nothing was committed, pushed, merged, uploaded, deployed, or published.

## Release environment

| Item | Value |
| --- | --- |
| Phase 4 gate | `PHASE_4_COMPLETE` |
| Package manager | npm 11.17.0 (`package-lock.json`, lockfile v3) |
| Runtime used | Node.js 24.19.0 |
| Supported runtime | Node.js 20.19+ or 22.12+; npm 10+ |
| Frontend | React 19.2.8, TypeScript 7.0.2, Vite 8.2.1 |

## Commands executed

```text
npm ci
npm audit --audit-level=high
npm run typecheck
npm run lint
npm run test:unit
npm run test:integration
npm run test:accessibility
npm test
npm run validate:source
npm run validate:routes
npm run validate:architecture
npm run check:links
npm run check:assets
npm run scan:secrets
npm run release:inventory
npm run release:manifest
npm run build
npm run test:browser
npm run validate
node scripts/validate-release.mjs
```

The browser audit starts the production Vite preview on an ephemeral loopback port and performs the preview smoke test, route/deep-link checks, functional flows, responsive checks, and axe audit.

## Results

| Check | Result |
| --- | --- |
| Clean dependency installation | PASS — 56 packages installed from lockfile |
| Dependency security audit | PASS — 0 known vulnerabilities |
| Type check | PASS |
| Lint | PASS |
| Unit/source-layer tests | PASS — 14/14 across 4 files |
| Integration tests | PASS — 5/5 |
| Semantic accessibility tests | PASS — 3/3 |
| Complete automated tests | PASS — 22/22 across 6 files |
| Content validation | PASS — 11 subjects, 111 lessons, 111 notes, 912 questions |
| Content inventory | PASS — 1,023/1,023 approved note/question files included and SHA-256 hashed |
| Route and deep-link validation | PASS — 16 patterns; 356 browser routes/deep links |
| Link validation | PASS — 111 note routes and 111 lesson routes |
| Asset validation | PASS — 0 broken references |
| Search and filters | PASS — keyword, tag, clear, and no-result flows |
| Notes, questions, answers, and explanations | PASS |
| Downloads | PASS — intentional empty state; no approved downloads exist |
| Responsive/browser validation | PASS — 320, 375, 768, 1024, and 1440 px |
| Accessibility | PASS — semantic tests, keyboard/mobile flows, and axe WCAG audit with 0 violations |
| Security validation | PASS — safe Markdown URL handling and no unsafe release configuration findings |
| Secret/local-path scan | PASS — 0 findings |
| Production build | PASS — Vite build and GitHub Pages SPA fallback validated |
| Preview smoke test | PASS — no console, page, request, route, or asset errors |
| Repository cleanliness | PASS — dependencies, build output, caches, OS metadata, and local environment files excluded |
| README commands and release documentation | PASS |
| Manifest | PASS — 1,140 entries plus self-excluded `manifest.json`; hashes and metadata verified |

## Release counts

- Subjects: 11
- Lessons: 111
- Approved notes: 111
- Approved questions: 912
- Approved content files: 1,023
- Total release files: 1,141, including the self-excluded manifest
- Files omitted from approved content: 0
- Temporary/prohibited artifacts removed: 5 (`node_modules/`, `dist/`, `.DS_Store`, and two duplicate legacy documentation copies)

## Warnings

1. No approved downloadable asset files exist, so Downloads uses an explicit empty state.
2. Organic Chemistry 1, Organic Chemistry 2, General Chemistry 1, General Chemistry 2, and NCLEX Review have no approved study records and intentionally use subject-specific empty states.
3. npm reports the optional macOS `fsevents` install script as pending explicit allow-list review. Installation, build, tests, and `npm audit` pass without approving it.

Warnings: 3. Blockers: 0.

## Final release decision

All required build, test, content, route, link, asset, accessibility, security, secret, preview, documentation, cleanliness, inventory, and manifest checks pass. The release candidate is self-contained and ready for a future GitHub push. Phase 5 did not perform that push.
