# Curriculum content v2

`content-v2/` is the lossless, registry-backed curriculum layer. It runs beside the original validated export in `content/` and `data/` so the richer model can be proven before the remaining subjects migrate.

## A&P I pilot

The Anatomy & Physiology I pilot contains:

- 8 canonical units and 54 canonical topics from the Master Curriculum Registry.
- 54 complete teaching bundles with college-level notes, ELI-10, high-yield connections, quick review, and references stored separately.
- 553 unique A&P I questions: 253 from the cited A&P study pack and 300 from the native pre-nursing app bank.
- Separate `whyCorrect` and `eli10` rationales for every question.
- 26 endocrine and blood questions preserved in `deferred[]` for Anatomy & Physiology II rather than misclassified under A&P I.
- Portable provenance paths and an unchanged source snapshot on every teaching topic and question.

The native app bank does not contain authoritative citation arrays. Its 300 questions therefore retain `citationReviewRequired: true`; the UI displays that status after submission.

## Authoritative files

- `curriculum/anatomy-physiology-1.registry.json` — A&P I snapshot from the Master Curriculum Registry.
- `curriculum/anatomy-physiology-1.crosswalk.json` — explicit mapping of 22 study-pack and 10 app-bank source topics.
- `content-v2/anatomy-physiology-1/subject.json` — website-ready hierarchy and statistics.
- `content-v2/anatomy-physiology-1/topics/*.json` — 54 rich teaching bundles.
- `content-v2/anatomy-physiology-1/questions.json` — published A&P I questions plus preserved A&P II deferrals.
- `content-v2/anatomy-physiology-1/build-report.json` — deterministic import report.

## Rebuild and validate

From `web/`:

```sh
npm run build:ap1
npm run validate:ap1
```

The checked-in registry snapshot makes normal rebuilds portable. To intentionally refresh it from a newer Master Curriculum Registry:

```sh
node scripts/build-ap1-pilot.mjs --registry /path/to/master-curriculum-registry.json
```

The importer reads the source collections from their stable paths relative to the `GITHUB_VM` root. It does not rewrite source content.
