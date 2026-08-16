# Curriculum v2 architecture

## Decision

The Master Curriculum Registry owns canonical subjects, units, topics, IDs, slugs, aliases, and per-field authority. Teaching corpora and question banks remain authoring sources. The website consumes generated bundles and never becomes the source of truth.

## Content flow

```text
Master Curriculum Registry
  + canonical teaching corpus
  + practice source crosswalks
  + question-bank overlays
            |
            v
  build-all-curricula.mjs
            |
            +-- catalog.json
            +-- subjects/{subject}/subject.json
            +-- subjects/{subject}/topics/{unit}/{topic}.json
            +-- subjects/{subject}/questions.json
            +-- client/ (audit snapshots removed from browser payloads)
            +-- build-report.json
            |
            v
  /learn/{subject}/{unit}/{topic}
```

## Why v2 is separate from the legacy export

The legacy `Question.explanation` field collapses distinct source layers. V2 retains:

- canonical mappings, including broad versus exact mapping scope;
- college-level teaching notes;
- ELI-10 teaching explanations;
- high-yield and quick-review material;
- `whyCorrect`, ELI-10, and available distractor discussion for questions;
- references and citation-review status;
- source collection, file, record number, and unchanged source snapshots.

The parallel path preserves the existing 11-subject approved export while the richer registry-backed catalog is adopted. The Master Curriculum is linked from the home page and primary navigation, and all canonical deep links are emitted in GitHub Pages builds.

## Loading strategy

The compact 28-subject catalog is loaded with the application shell. Each of the 782 topic bundles is code-split and fetched only when opened. Subject question banks and the 782-topic search index are lazy-loaded only when a learner selects Practice or starts a registry search.

Authoritative generated bundles preserve unchanged source snapshots for auditability. Separate client bundles retain the complete learning fields, rationales, references, and provenance but remove audit-only source snapshots and registry aliases from runtime payloads. `validate-all-curricula.mjs` verifies that the two representations remain content- and route-equivalent.

## Crosswalk policy

- The Master Curriculum Registry is authoritative for all 28 subjects, 123 units, 782 topics, IDs, slugs, and aliases.
- Field-level authority records identify the canonical teaching and question source for each topic.
- The A&P study packs, genetics bank, expansion bank, and native app banks are retained without collapsing `whyCorrect` and ELI-10 rationales.
- Broad source topics keep all applicable canonical topic IDs and are labeled as broad mappings in the UI.
- Banks that cannot yet be reviewed safely at topic level remain explicit subject-wide overlays rather than receiving guessed mappings.
- Endocrine and blood material from the nominal A&P I source is published under A&P II according to its reviewed crosswalk.
- Missing citation arrays are represented as missing data plus a review flag, never silently treated as cited.

## Current generated coverage

- 28 subjects, 123 units, and 782 canonical topics.
- 662 topics with standalone college-level teaching notes.
- 779 topics with ELI-10 content.
- 753 topics with standalone source/reference lists.
- 5,412 globally unique questions and 6,012 subject placements.
- 120 question-led foundation topics whose standalone college-note gap remains explicit.
