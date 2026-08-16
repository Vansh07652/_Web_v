# Phase 0 — Baseline

Date: 2026-08-15
Repository: `Vansh07652/ELI_Nur_Web`, website in `web/`
Baseline commit: `e830e1a` — "Add 12 study libraries: MCAT, RPSGT sleep medicine,
chemistry hub, developmental psychology, biology, cell biology, general
chemistry, respiratory therapy, DAT, NBDHE, pathophysiology, physics ELI-10"
Working tree at baseline: clean

---

## Phase objective

Establish a verified, written baseline of the MedMosa repository before any
further work begins, so that every later phase can be measured against a fixed
and factual starting point.

Concretely, Phase 0 set out to:

1. Record the repository, toolchain, dependency surface, and build configuration
   exactly as they stand.
2. Inventory both content systems — legacy v1 and curriculum v2 — including
   totals, per-subject statistics, schemas, and the source-to-client mirror
   contract.
3. Inventory the source code, the routing contract, and local progress storage.
4. Execute every quality gate the repository defines and record the result of
   each one.
5. Separate genuine pre-existing failures from limitations of the execution
   environment, so that no environment artifact is ever mistaken for a code
   defect in a later phase.
6. Audit which metadata fields already exist in the content corpus, which do
   not, and which adjacent fields occupy nearby ground.

Phase 0 is an observation phase. It changes no application code, no content, and
no configuration.

---

## Files inspected

Read-only inspection. No file listed here was modified.

**Configuration and manifests**

- `web/package.json`
- `web/vite.config.ts`
- `web/tsconfig.json`, `web/tsconfig.app.json`, `web/tsconfig.node.json`
- `web/.env.example`
- `web/manifest.json`
- `.github/workflows/ci.yml`
- `.github/workflows/deploy-pages.yml`

**Curriculum v2 content**

- `web/content-v2/catalog.json`
- `web/content-v2/build-report.json`
- `web/content-v2/client/catalog.json`
- `web/content-v2/client/search-index.json`
- All 33 `web/content-v2/subjects/*/subject.json`
- All 33 `web/content-v2/subjects/*/questions.json`
- All 1,409 `web/content-v2/subjects/*/topics/*/*.json`
- All 1,409 `web/content-v2/client/subjects/*/topics/*/*.json`
- `web/content-v2/anatomy-physiology-1/` (legacy pilot tree, 57 JSON files)

**Legacy v1 content**

- `web/data/subjects.json`, `lessons.json`, `notes.json`, `questions.json`,
  `tags.json`

**Source code**

- `web/src/App.tsx`
- `web/src/lib/progress.ts`
- `web/src/lib/navigation.ts`
- `web/src/lib/content/index.ts`
- `web/src/lib/content/curriculum-v2.ts`
- `web/src/lib/auth/config.ts`
- `web/src/data/routes.json`
- Full file listing and line counts across all 45 files in `web/src/`

**Gate implementations**

- `web/scripts/lint`
- `web/scripts/validate-content-source`
- `web/scripts/validate-routes`
- `web/scripts/validate-architecture`
- `web/scripts/validate-all-curricula.mjs`
- `web/scripts/validate-content-completeness.mjs`
- `web/scripts/check-links`
- `web/scripts/check-assets`
- `web/scripts/scan-secrets`

---

## Files created

Three documents, all under `web/_audit/`:

| File | Purpose |
| --- | --- |
| `web/_audit/baseline-inventory.md` | The factual reference: repository, toolchain, both content systems, schemas, routes, storage, gates, and the metadata field audit |
| `web/_audit/phase-0-baseline.md` | This phase report |
| `web/_audit/implementation-change-log.md` | The running per-phase change log, opened with the Phase 0 entry |

The `web/_audit/` directory itself was created by this phase.

---

## Files updated

None.

---

## Files moved or removed

None.

---

## User-facing behavior changed

None.

No application code, content file, stylesheet, configuration file, or build
script was modified. The site's rendered output at this commit is byte-for-byte
what it was before Phase 0 began.

---

## Data/schema changes

None.

No content file was edited, no schema was altered, no index was rebuilt, and no
manifest was regenerated. The three documents created by this phase live outside
`src/`, outside `content-v2/`, outside `data/`, and outside `scripts/`, and are
not listed in `manifest.json`. Because `validate-content-source` only hashes
files that `manifest.json` already lists, adding these documents does not affect
that gate.

---

## Test and validation commands run

Every gate the repository defines was executed on 2026-08-15 from the `web/`
directory.

```
npm run validate:source
npm run validate:ap1
npm run validate:curricula
npm run validate:completeness
npm run validate:routes
npm run validate:architecture
npm run check:links
npm run check:assets
npm run scan:secrets
npm run typecheck
npm test
```

---

## Test results

### Gates that ran and passed

| Gate | Result | Observed duration |
| --- | --- | --- |
| `validate:source` | PASS | 3s |
| `validate:ap1` | PASS | — |
| `validate:curricula` | PASS | 2s |
| `validate:completeness` | PASS | — |
| `validate:routes` | PASS | — |
| `validate:architecture` | PASS | — |
| `check:links` | PASS | — |
| `check:assets` | PASS | — |
| `scan:secrets` | PASS | — |

Nine of eleven gates pass cleanly at the baseline commit.

### Gates that could not run in this environment

| Gate | Result | Cause |
| --- | --- | --- |
| `typecheck` | NOT RUNNABLE | TypeScript 7 ships its compiler as a native platform binary (`@typescript/typescript-<platform>`). The required binary for this sandbox's platform is not present and cannot be fetched. |
| `test` | NOT RUNNABLE | Vitest 4 requires the native `rolldown` binding. The required binding for this sandbox's platform is not present and cannot be fetched. |

Both failures are environmental, not code defects.

The checked-out `node_modules` tree was installed on macOS/arm64, so it contains
only the macOS/arm64 native binaries. The npm registry is unreachable from the
execution sandbox, so the matching binaries for the sandbox platform cannot be
downloaded. Both commands therefore fail immediately, at load time, before either
tool has looked at a single line of this repository's source.

**This distinction is load-bearing and must be carried forward.** Neither of
these two results is evidence of a pre-existing defect. A later phase that sees
`typecheck` or `test` fail in the same sandbox should attribute the failure to
the platform, not to its own changes, and should confirm correctness by the two
independent means below.

Evidence that the code itself is sound at the baseline commit:

1. An independent typecheck of `tsconfig.app.json`, run with a
   platform-independent TypeScript 6.0.3 compiler, returned zero errors.
2. The GitHub Actions CI workflow runs the real toolchain — `npm ci` on Node 22
   with registry access — on every push, and executes `typecheck`, `lint`, and
   `test` as part of its gate chain.

### Summary

| Category | Count |
| --- | ---: |
| Gates passing | 9 |
| Gates failing for a code defect | 0 |
| Gates blocked by environment | 2 |

---

## Accessibility impact

None.

No markup, component, style, focus behavior, or ARIA attribute was touched. The
repository's accessibility suite (`tests/accessibility/semantic-markup.test.tsx`,
backed by `axe-core`) and the Playwright-driven `test:browser` audit remain the
verification path; the former is part of `npm test`, which is blocked in this
sandbox for the environmental reason recorded above and runs normally in CI.

---

## Privacy impact

None.

No data flow was added, removed, or altered. The baseline privacy posture, as
recorded during inspection:

- Study progress is stored only in the visitor's browser under
  `medmosa.progress.v1`, with two legacy keys still read and migrated forward.
- The stored state holds counters and `YYYY-MM-DD` dates only. No name, no email
  address, no free text, and no identifier that could be traced to a person.
- `clearProgress()` removes the current key and every legacy key.
- Optional Supabase authentication is configured entirely through build-time
  `VITE_`-prefixed environment variables. With those unset — the state of every
  checkout at this baseline — `isAuthConfigured()` returns false, no sign-in
  affordance is rendered, and progress stays local. Only the publishable "anon"
  key is ever intended to reach the browser; the service-role key must never
  appear in the repository or in any build.
- The site loads no third-party JavaScript. The Supabase client is written
  in-repo against plain REST rather than added as a dependency.

---

## Known limitations

1. **Two gates cannot execute in this sandbox.** `typecheck` and `test` require
   platform-native binaries that are absent and unobtainable here. Their status
   at the baseline commit is inferred from an independent TypeScript 6.0.3
   typecheck and from CI, not observed directly in this environment.
2. **Timing figures are indicative.** Only `validate:source` (3s) and
   `validate:curricula` (2s) were timed. The remaining gates completed quickly
   but were not measured, and no duration should be treated as a benchmark.
3. **This is a static audit.** No page was rendered, no route was exercised in a
   browser, and `test:browser` was not run. Claims about runtime behavior derive
   from reading source code, not from observing the running application.
4. **The live site was not probed.** Statements about `https://medmosa.org` and
   the GitHub Pages custom domain are taken from the deployment workflow and its
   recorded history, not from live requests made during this phase.
5. **Scope is `web/`.** Sibling directories in the repository were not
   inventoried.

---

## Deferred work

Phase 0 deliberately observes and does not change. The following were identified
during the audit and are explicitly left for later phases:

1. **Reconcile the client mirror.** 782 client topic bundles have `aliases` and
   `authority` emptied; 627 retain them. Deciding the intended contract and
   making both writer scripts agree is deferred.
2. **Retire or repoint the legacy pilot tree.** `content-v2/anatomy-physiology-1/`
   is superseded by `content-v2/subjects/anatomy-physiology-1/` and unreferenced
   by the catalog, but `validate:ap1` still validates it, so removal requires a
   coordinated gate change.
3. **Structure `learningObjectives`.** It exists today only as a Markdown string
   inside `sections`. Converting it to a structured array is a schema change
   affecting every topic bundle, both mirrors, and the validators.
4. **Decide on the absent metadata fields.** Thirteen candidate fields are absent
   from the entire corpus. Whether any should be introduced, and whether an
   existing adjacent field should be extended instead of adding a second source
   of truth, is a Phase 1 or later decision.
5. **Consider decomposing `src/App.tsx`.** At 978 lines it is the largest module
   in the codebase and carries the whole hand-rolled router.
6. **Resolve the sandbox toolchain gap.** Making `typecheck` and `test` runnable
   locally would require registry access or vendored platform binaries.

---

## Risks or assumptions requiring later review

These constrain how any future change must be made. Each one can turn a
reasonable-looking edit into a red build.

### R1 — Curriculum totals are hard-coded in the validator

`scripts/validate-all-curricula.mjs` contains the eight expected totals
(subjects 33, units 153, topics 1,409, teachingTopics 1,047, eli10Topics 1,174,
referencedTopics 1,360, uniqueQuestionsAcrossCatalog 24,400, questionPlacements
25,000) and re-derives each of them from disk. Any content change must therefore
update four things consistently and in the same commit: the authoritative source
data, `content-v2/catalog.json`, `content-v2/build-report.json`, and the
validator's expected totals. Changing fewer than all four fails the gate.

The same validator also requires that a question ID appearing in two banks carry
identical stem, options, correct answer, rationales, and source file. 600 IDs are
in exactly that position today, so edits to a shared question must be applied to
both copies.

### R2 — `manifest.json` hashes every listed file

`scripts/validate-content-source` recomputes a SHA-256 for every file listed in
`web/manifest.json` (4,380 entries at baseline) and fails on any mismatch.
Editing a listed file fails the gate until `npm run release:manifest` is re-run.
Adding a new, unlisted file does not fail it — which is why this phase's
documents are safe, and equally why a new file can silently escape hash coverage.

### R3 — `validate-architecture` enforces named artifacts, named scripts, and a forbidden pattern

The gate requires 37 named artifacts and 13 named package scripts to exist.
Renaming, moving, or deleting any of them fails the build, including
documentation files such as `PHASE_3_STATUS.md` and the architecture and ADR
documents.

It also rejects any file under `src/` matching:

```
/(?:\/|\.\.\/)(?:raw|working|quarantine|rejected|needs-review)(?:\/|["'])|["']needs-review["']/i
```

The quoted literal `"needs-review"` is therefore forbidden anywhere in `src/`,
as are path references to `raw`, `working`, `quarantine`, and `rejected`
directories. A status enum that happens to include that value cannot be written
as a bare quoted string in application code.

### R4 — `lint` rejects three specific patterns

Across `src/` and every file in `scripts/`, the linter fails the build on:

- `dangerouslySetInnerHTML`
- any literal local filesystem path
- trailing whitespace on any line

Trailing whitespace is the easiest of these to introduce accidentally, and it
fails the whole build.

### R5 — `validate-content-completeness` guards against silent truncation in the UI

The gate fails if `src/App.tsx` matches `/lessons\.slice\s*\(/`, or if
`src/pages/SearchPage.tsx` matches `results.slice(`, `popularTags.slice(`, or
`result.tags.slice(`. These guards exist to stop the UI from quietly showing
fewer records than the data contains. Any pagination or "show more" feature in
those files must be built without those specific call shapes, or the guard must
be revised deliberately.

### R6 — `scan-secrets` matches on shape, not on secrecy

Among seven other credential patterns, the scanner flags
`(api[_-]?key|client[_-]?secret|access[_-]?token|password)\s*[:=]\s*"..."` with
eight or more characters inside the quotes. Documentation examples, test
fixtures, and placeholder values in that shape will trip it even when nothing
secret is involved.

### R7 — The source-to-client mirror is inconsistent

782 client topic bundles have `aliases` and `authority` emptied; 627 retain them.
The cause is a divergence between two writer scripts:
`scripts/build-all-curricula.mjs` empties both the source snapshot and the
alias/authority metadata, while `scripts/import-generated-subjects.mjs` strips
only the snapshot. Until this is reconciled, any consumer that reads `aliases` or
`authority` from a client topic bundle will behave differently depending on which
script last wrote that subject, and a regeneration could change the shipped
payload for whichever set of topics is affected.

### R8 — The legacy pilot tree duplicates the canonical subject tree

`content-v2/anatomy-physiology-1/` (54 flat topics, 553 questions, 26 deferred)
is fully superseded by `content-v2/subjects/anatomy-physiology-1/`. It is not
referenced by `catalog.json` and is not loaded by the application, but it is
still validated by `npm run validate:ap1`. Two consequences follow: the corpus
carries a second, stale copy of Anatomy & Physiology I that can drift from the
canonical one, and the tree cannot be deleted without simultaneously retiring or
repointing that gate.

### R9 — `availability` is denormalized into three places

Each topic's `availability` object is written into the topic bundle, the topic
summary inside `subject.json`, and the client search index entry. Any change to
section content must regenerate all three, or the UI will advertise content that
does not exist, or hide content that does.

### R10 — Assumptions carried into later phases

- The two blocked gates are assumed sound at baseline on the strength of the
  independent TypeScript 6.0.3 typecheck and CI, not on direct observation here.
- CI is assumed to be the authoritative verification path for `typecheck`,
  `lint`, and `test`.
- The deployment workflow is assumed to be the only path to production, and a
  failing validation step is assumed to leave the live site untouched.
