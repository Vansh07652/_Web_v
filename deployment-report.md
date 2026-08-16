# Phase 6 deployment report

## Missing-subject restoration deployment — 2026-08-11 01:09 EDT

| Item | Result |
| --- | --- |
| Pull request | `#9` — merged normally; branch preserved |
| Restored application commit | `84bd6eb6acfbb6a408675cd3592e0f3788f8b1b3` |
| Main CI | `31460289046` — PASS |
| Pages workflow | `31460288986` — PASS |
| Pages deployment | `5844678587` — PASS |
| Content totals | 11 subjects; 121 lessons; 111 notes; 1,032 questions; 2,064 tags |
| Apex production audit | PASS — 376 routes/deep links and five viewports |
| WWW production audit | PASS — 376 routes/deep links and five viewports |
| Pages configuration | GitHub Actions; `studycorehub.com`; HTTPS enforced |
| Remaining content boundaries | Organic Chemistry 2 unrecoverable; NCLEX qualified clinical review required |

The deployment restored 120 final audited Chemistry questions without changing their stems, choices, answer keys, rationales, or ELI-10 explanations. It also corrected the build/index assumption that every lesson must have a note. No Cloudflare record, branch history, or unrelated work was modified.

## Original Phase 6 launch

| Item | Result |
| --- | --- |
| Release timestamp | 2026-08-11 00:25 EDT |
| Source directory | `_UPLOAD_GITHUB/` |
| GitHub repository | `Vansh07652/NUR_WEB` |
| Pull requests | `#2` release, `#3` custom domain, `#5` completeness fix, `#6` live evidence, and `#7` record reconciliation — merged |
| Branch | `main` (all source branches preserved) |
| Reconciled release commit | `f50cf3e1bd206a03c96b0ac2769aea51da6dfbe2` |
| Release commit message | `docs: clarify verified CI head` |
| Deployment provider | GitHub Pages |
| Pages source | GitHub Actions |
| Custom-domain PR head | `f6e276ae43fe25748b1525c766b899ccad1d1947` |
| Verified application commit | `0c2cd78e1550f5a1ed2bf81fc62c26fdd0abd72f` (last application-changing commit) |
| Evidence record source | `98fdca752f4e7676f47306ca2da1ba663dec4190` (PR #7 head) |
| Verified deployment ID | `5844352191` |
| Verified workflow run | `31458411343` |
| Primary production URL | `https://studycorehub.com/` |
| WWW alias | `https://www.studycorehub.com/` → primary domain |
| Build status | PASS |
| CI status | PASS — run `31458411308` |
| Deployment status | COMPLETE |
| Smoke-test status | PASS on both hostnames |
| Route/deep-link status | PASS — 355 live routes/deep links per hostname, including 350 canonical static entries |
| Asset status | PASS — root-based custom-domain assets return successfully |
| Security status | PASS — certificate approved for apex and `www`, HTTPS enforced, dependency audit passed, 0 secrets detected |
| Remaining warnings | 1 non-blocking GitHub Actions Node.js runtime annotation |
| Remaining blockers | 0 |

## Release reconciliation

The locally reported release commit `1748f918a0d6e49de6795ad8d8202782f15382eb` is an ancestor of the actual pull-request head, not the final PR head. Pull request #2 was verified at head `f50cf3e1bd206a03c96b0ac2769aea51da6dfbe2`, with all required checks passing. The draft was converted to ready for review and merged into `main` with merge commit `c27b53a2854ee653a0f519a2ce6275312784ee5c`. No branch was deleted, no history was rewritten, and no force-push occurred.

GitHub Pages was then configured for GitHub Actions. The initial Pages deployment exposed a repository-base asset issue; it was fixed in `c4c1abb9b084fc0d1763f2460ac33d45435e8226`. Direct-route HTTP behavior was fixed by generating canonical static entry points in `06044f0124048f81ebe9f9af9f798274b469c038`.

For the custom-domain launch, pull request #3 added `public/CNAME`, moved Pages assets to the domain root, and added CNAME artifact validation. Its checks passed and it was merged normally as `2be830725bba62cf6b485f60c57c417b71a2bb32`. GitHub accepted `studycorehub.com`, approved one certificate covering `studycorehub.com` and `www.studycorehub.com`, and enabled HTTPS enforcement. Deployment `5843142286` passed, followed by clean 355-route browser audits through both hostnames.

The content-completeness reconciliation then compared the approved Phase 5 snapshot, repository files, and runtime indexes. Pull request #5 removed three UI truncation defects, rebuilt all seven indexes, and confirmed that all 111 approved lessons/notes and 912 approved questions were already present without educational changes. Pull requests #6 and #7 changed only evidence documentation. The application-changing merge `0c2cd78e1550f5a1ed2bf81fc62c26fdd0abd72f` passed the complete live audit; CI run `31458411308`, Pages run `31458411343`, and deployment `5844352191` subsequently rebuilt the identical application code while publishing the completion evidence.

Commit hashes recorded inside a commit cannot identify the later merge commit that contains them. For that reason, this report deliberately records the last application-changing commit and the evidence-record source commit instead of using a self-invalidating “final main commit” label.

The only GitHub Actions annotation is GitHub's non-blocking notice that several official action versions target Node.js 20 and are currently forced to Node.js 24 by the runner. It does not affect the successful build or deployment. No Cloudflare DNS record was modified during this launch.
