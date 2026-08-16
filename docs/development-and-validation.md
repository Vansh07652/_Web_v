# Development and validation

The practical guide to working on MedMosa: how to run it, how to test it, what
every validator checks, how to regenerate the generated files safely, and how
the site gets built and deployed.

Every command below is run from the `web/` directory, which is the project root
as far as `package.json`, the TypeScript configs, the validators and every
internal documentation link are concerned. Run npm commands from inside it, and
do not move files around within it — `npm run check:links` and
`npm run validate:source` will fail if you do.

---

## 1. The one rule that catches everyone

**After editing any tracked file, run `npm run release:manifest`.**

```bash
npm run release:manifest
```

`manifest.json` records a SHA-256 hash for every file in the release except
itself and the ignored output directories. `npm run validate:source` recomputes
each hash and fails with `MANIFEST_HASH: <path>` on any file whose contents no
longer match. So a perfectly correct code change fails the build until the
manifest is regenerated.

The failure looks like this:

```text
CONTENT SOURCE: FAIL
Errors: 6; warnings: 0
- MANIFEST_HASH: README.md
- MANIFEST_HASH: _audit/implementation-change-log.md
- MANIFEST_HASH: src/components/LegalNotice.tsx
- MANIFEST_HASH: src/components/ui.tsx
- MANIFEST_HASH: src/lib/progress.ts
- MANIFEST_HASH: src/lib/review/scheduler.ts
```

That is not a content problem, a hash collision or a corrupted file. It is six
files edited after the manifest was last written — and note that two of them are
Markdown. Documentation is a tracked file like any other. Regenerate and re-run:

```bash
npm run release:manifest
npm run validate:source
```

Two follow-on notes:

- **Regenerate it last.** Anything that writes a file — the release inventory,
  the coverage report, a documentation edit, a formatter — invalidates the
  manifest again. The release procedure in `README.md` deliberately runs
  `release:manifest` both before and after `npm run validate`.
- **Do not run a local preview or audit build first.** `scripts/update-manifest`
  excludes `dist/`, `.preview/`, `.audit/`, `.vite/`, `.cache/` and the other
  ignored output directories precisely because folding local-only files into the
  manifest makes CI fail on files that are not in the repository.

---

## 2. Local development

```bash
npm ci          # install exactly what the lockfile says
npm run dev     # Vite dev server
```

Node `^20.19.0 || >=22.12.0` and npm `>=10` are required. The lockfile is
authoritative; use `npm ci`, not `npm install`, unless you are deliberately
changing a dependency.

Environment variables are optional. Copy `.env.example` to `.env.local` if you
want the Supabase-backed account features; with them unset the site runs exactly
as it does without accounts — every course, topic and question works, progress
is stored locally, and no sign-in UI renders at all. Nothing secret belongs in
that file: a static site has no server to keep a secret on, so anything the
build can see, a visitor can read.

Preview a production build locally:

```bash
npm run build
npm run preview
```

---

## 3. Tests

```bash
npm test                    # every Vitest suite
npm run test:unit           # tests/unit and src/tests
npm run test:integration    # tests/integration
npm run test:accessibility  # tests/accessibility
```

The suites, and what each is for:

| Suite | Covers |
| --- | --- |
| `tests/unit/quiz.test.ts` | Multiple-choice and multiple-select grading. |
| `tests/unit/calculation.test.ts` | Numeric-entry grading, unit conversion, and the refusals. |
| `tests/unit/mastery.test.ts` | Mastery status from local answer history. |
| `tests/unit/review-scheduler.test.ts` | The interval ladder, the review queue, weak topics. |
| `tests/unit/study-paths.test.ts` | Path membership derived from the catalog. |
| `tests/unit/planner.test.ts` | Plan generation, input clamping, storage round-trips. |
| `tests/unit/content-metadata.test.ts` | Decoding the interned metadata sidecar. |
| `tests/unit/speech.test.ts` | The speech controller, and markdown-to-prose. |
| `tests/unit/synonyms.test.ts` | Whole-word synonym matching. |
| `tests/unit/search-filters.test.ts` | Deterministic ranking and filtering. |
| `tests/unit/structured-data.test.ts` | Schema builders and DOM teardown. |
| `tests/unit/data-layer.test.ts` | The v1 content data layer. |
| `src/tests/*.test.ts` | Navigation, progress, and the two curriculum loaders. |
| `tests/integration/search-and-routes.test.ts` | Search plus route resolution together. |
| `tests/accessibility/*.test.tsx` | Semantic markup, and the topic experience. |

Some suites cannot run outside Vite. `src/tests/content.test.ts`,
`src/tests/curriculum-v2.test.ts`, `src/tests/curriculum-all.test.ts`,
`tests/unit/data-layer.test.ts` and `tests/integration/search-and-routes.test.ts`
all reach modules that use Vite's `import.meta.glob`, which is a build-time
transform with no Node equivalent. Run them through `npm test`, never by
invoking Node on the file directly.

If `vitest` will not start at all and the error mentions `rolldown-binding`, the
installed `node_modules` was built for a different platform. Delete it and run
`npm ci` again on the machine you are actually on.

---

## 4. The validators, one at a time

Fourteen gates, in the order the `validate` chain runs them.

| Command | What it checks | Typical output |
| --- | --- | --- |
| `npm run validate:source` | v1 approved content: required data files and schemas, unique ids, approved statuses, audited review statuses, no orphan notes or questions, no absolute local paths anywhere in the tree, no secret patterns, and every manifest hash. | `Subjects: 11; lessons: 121; notes: 111; questions: 1032` |
| `npm run validate:ap1` | The Anatomy and Physiology I pilot curriculum in isolation. | `8 units; 54 topics; 553 published questions` |
| `npm run validate:curricula` | The whole v2 corpus against hard-coded totals, plus mirror equivalence between `subjects/` and `client/`. | `33 subjects; 153 units; 1409 topics` |
| `npm run validate:metadata` | Re-derives `topic-metadata.json` from the corpus and compares byte for byte; every topic id resolves, every question count matches the bundle's own `availability`, every enum code is legal, every `sourceId` resolves. | `1409 topic entries of 1409 catalog topics; 1364 publishable` |
| `npm run validate:source-registry` | Re-derives `source-registry.json` the same way; every collection and reference host in the corpus has a record, and no licence was invented. | `136 source records (24 collections; 112 reference hosts)` |
| `npm run validate:question-quality` | Every multiple-choice question is answerable; every numeric question is gradable; the unit table in `src/lib/quiz/calculation.ts` and the copy inside the validator have not drifted apart. | `25000 questions in 33 courses; 310 carry a computation object` |
| `npm run validate:study-paths` | The three places a study path is declared still agree. | `Study paths declared: 5; mirrored for static generation: 5` |
| `npm run validate:completeness` | v1 content counts match the expected release inventory. | `11 subjects; 121 lessons; 111 notes; 1032 questions` |
| `npm run validate:routes` | `src/data/routes.json` against the canonical subject slugs. | `Route patterns: 30; canonical subjects: 11` |
| `npm run validate:architecture` | Required artifacts exist and the source layering rules hold. | `Required artifacts: 37; source files scanned: 67` |
| `npm run check:links` | Every note and lesson route resolves. | `Checked 111 note routes and 121 lesson routes.` |
| `npm run check:assets` | Every approved local asset reference resolves. | `Checked 0 approved local asset references.` |
| `npm run scan:secrets` | Private keys, provider tokens and API keys, by pattern. | `Possible secrets: 0` |
| `npm run lint` | `npm run typecheck` followed by the project lint rules. | `LINT: PASS` |

One more is not yet wired into an npm script:

```bash
node scripts/validate-structured-data.mjs
```

It fails the build if `src/lib/structured-data.ts` ever emits a refused schema
type — `Course`, `Quiz`, `Question`, credential or medical types — and if
`index.html` loses its crawler-facing tags. Its most valuable check is the last
one: the canonical and `og:url` tags must still match the exact regexes
`scripts/create-github-pages-fallback.mjs` uses to rewrite them. Reformat either
tag, even just by dropping the space before the closing slash, and the rewrite
silently stops matching, so every static route entry point would ship the
homepage as its canonical URL.

Run everything at once, including the build and the browser audit:

```bash
npm run validate
```

---

## 5. The browser audit

```bash
npm run build
npm run test:browser
```

`scripts/browser-audit.mjs` starts a static server on the built `dist/`, drives
Chromium through `playwright-core`, walks the real routes, checks the responsive
layout, and runs axe-core against each page. It needs two things the other gates
do not: a production build to serve, and a Chromium binary Playwright can find.
It is the last step of `npm run validate` for that reason.

---

## 6. Regenerating the sidecars

Two generated files live under `content-v2/indexes/`. They are **sidecars**:
they sit beside the corpus, are joined to it at runtime by topic id, and never
edit, override or shadow anything under `content-v2/subjects/` or
`content-v2/client/`.

```bash
npm run build:source-registry   # content-v2/indexes/source-registry.json
npm run build:topic-metadata    # content-v2/indexes/topic-metadata.json
npm run build:coverage-report   # _audit/coverage-report.json and .md
```

Order matters: build the source registry first, because the topic metadata
references its ids and `validate:metadata` checks that every one of them
resolves. Then regenerate the coverage report, which reads both.

```bash
npm run build:source-registry
npm run build:topic-metadata
npm run build:coverage-report
npm run validate:source-registry
npm run validate:metadata
npm run release:manifest
```

Things to know before you touch them:

- **Never hand-edit either file.** Both validators re-derive the whole file from
  the corpus and compare it byte for byte, so a hand edit fails the gate rather
  than surviving quietly. Change the generator instead.
- **Both regenerate deterministically.** Topic order follows the catalog, then
  unit order, then topic order; every list inside an entry is sorted
  deterministically; and `generatedOn` is copied from `content-v2/catalog.json`
  rather than read from the clock. Running a generator twice produces identical
  bytes.
- **`topic-metadata.json` is interned, not pretty-printed.** It is imported
  statically by `src/lib/content/metadata.ts`, so every byte of it lands in the
  first-paint bundle. Pretty-printed it was 842,493 bytes; interned it is
  100,992. The `encoding` block inside the file is the contract for reading it,
  and `scripts/validate-metadata.mjs` proves the decoded output is unchanged.
  If you add a field, add it to the encoder, the decoder and that block
  together.
- **`_audit/coverage-report.md` is generated.** Do not edit it by hand; edit
  `scripts/build-coverage-report.mjs`.

---

## 7. Changing the curriculum totals safely

`scripts/validate-all-curricula.mjs` hard-codes a snapshot of the published
catalog:

```js
const expectedTotals = {
  subjects: 33,
  units: 153,
  topics: 1409,
  teachingTopics: 1047,
  eli10Topics: 1174,
  referencedTopics: 1360,
  uniqueQuestionsAcrossCatalog: 24400,
  questionPlacements: 25000,
};
```

These are hard-coded deliberately, so that content silently disappearing fails
the build instead of quietly shrinking the site. The validator asserts each
number **three** times: against `content-v2/catalog.json`, against
`content-v2/build-report.json`, and against what it computes by walking every
bundle itself.

**The three must move together.** If an import or an intentional edit changes a
total, then:

1. Run the importer or the builder that changed the corpus. It rewrites
   `content-v2/catalog.json` and `content-v2/build-report.json`.
2. Run `npm run validate:curricula`. It will fail, and the failure message names
   each key with the expected and the found value:
   `Catalog topics: expected 1409, found 1412`.
3. Edit `expectedTotals` in `scripts/validate-all-curricula.mjs` to the new
   numbers — but only after you have satisfied yourself that the change is the
   one you intended. A total that dropped is a content loss until proven
   otherwise.
4. Re-run `npm run validate:curricula`. It should now pass, having agreed with
   both files and with its own walk of the corpus.
5. Regenerate the sidecars (section 6), because the topic set changed.
6. Run `npm run release:manifest`.

Never update `expectedTotals` alone to make a red build green. The whole point
of the triple assertion is that a number cannot be changed in one place.

---

## 8. Static route generation

`scripts/site-routes.mjs` is the single source of truth for the site's route
list. Two consumers read it:

- `scripts/create-github-pages-fallback.mjs` copies `dist/index.html` to
  `dist/404.html` for the SPA fallback, and with `--routes` writes one
  `index.html` per route into a matching directory, rewriting the canonical and
  `og:url` tags to that route's URL. Without that rewrite, every entry point
  would advertise the homepage as its canonical URL to any crawler that does not
  execute JavaScript.
- `scripts/generate-sitemap.mjs` writes `dist/sitemap.xml` from the same list,
  so the sitemap cannot drift from what is deployed.

`collectRoutes()` builds the set from the static route names, then from
`data/subjects.json`, `data/lessons.json`, `data/notes.json` and
`data/questions.json`, then from `content-v2/catalog.json` and every subject
bundle it points at.

**Adding a new top-level route takes three edits, and a fourth if it is a study
path.**

1. `src/data/routes.json` — the declarative route contract. `validate:routes`
   reads it.
2. `src/App.tsx` — the actual render branch, plus a `PAGE_METADATA` entry so the
   page has a title and description.
3. `scripts/site-routes.mjs` — add the route name to the `routes` set in
   `collectRoutes()`, or it will have no static entry point and no sitemap line,
   and a direct hit on its URL will land on the 404 shell.
4. For a study path only: add the slug to `STUDY_PATH_SLUGS` in the same file.
   That array is a hand-maintained mirror of `STUDY_PATHS` in
   `src/lib/paths/study-paths.ts`, which cannot be imported by a plain-ESM
   generator because it derives its courses from the catalog at load.
   `npm run validate:study-paths` fails the build if the mirror, the TypeScript
   module and `routes.json` ever disagree.

Also consider `scripts/generate-sitemap.mjs`, which assigns a priority per route
pattern. A route with no matching rule gets the default.

---

## 9. Building for GitHub Pages, and deploying

```bash
npm run build          # relative base, for any static host
npm run build:pages    # GitHub Pages build with per-route entry points
```

The two differ in three ways:

| | `build` | `build:pages` |
| --- | --- | --- |
| Vite `base` | `./` (relative) | `/` (root absolute) |
| Route entry points | no | yes, one directory per route |
| SPA `404.html` fallback | yes | yes |

Both run `npm run typecheck` first, then Vite, then the fallback generator, then
`scripts/generate-sitemap.mjs`, then `scripts/validate-build`. That last step
checks that `dist/index.html` and `dist/404.html` exist, that the built `CNAME`
matches `public/CNAME`, that the deep-route `<base>` fallback survived the
build, and that every local `src`/`href` in the built HTML resolves.

`index.html` also carries a small inline script that rewrites the `<base>` href
when the host ends in `.github.io`, so the same build works both on the custom
domain and on a project page.

### Deployment

Two workflows, both configured to run inside `web/`:

- **`.github/workflows/ci.yml`** runs on every push and pull request:
  `npm ci`, `npm audit --audit-level=high`, then typecheck, lint, `npm test`,
  `validate:source`, `validate:routes`, `validate:architecture`, `check:links`,
  `check:assets`, `scan:secrets` and `npm run build`.
- **`.github/workflows/deploy-pages.yml`** runs on push to `main` when anything
  under `web/` changes, and on manual dispatch. It runs its own validation step
  first — typecheck, `npm test`, `validate:source`, `validate:routes`,
  `check:links`, `check:assets`, `scan:secrets` — then `npm run build:pages`,
  then uploads `dist/` as the Pages artifact. **The deploy job runs only if the
  build job succeeds**, so a failing gate leaves the live site exactly as it is.

The live site is `https://medmosa.org/`. See `DEPLOYMENT.md` for the
authoritative deployment state and operating procedure.

**Known gap: the newer validators are not in either workflow.**
`validate:metadata`, `validate:source-registry`, `validate:question-quality`,
`validate:study-paths` and `node scripts/validate-structured-data.mjs` are
registered in `package.json` and pass locally, but neither workflow invokes
them. Until they are added, run them by hand before pushing, or add them to the
`Run repository validation` step in `ci.yml`.

---

## 10. Before you push

```bash
npm run validate          # everything, including build and browser audit
npm run release:manifest  # last, because validate may have written files
```

If you are short of time, the minimum that catches most breakage:

```bash
npm run lint
npm test
npm run validate:source
npm run validate:routes
npm run release:manifest
```

And if you touched anything under `content-v2/`, add:

```bash
npm run validate:curricula
npm run validate:metadata
npm run validate:source-registry
npm run validate:question-quality
```
