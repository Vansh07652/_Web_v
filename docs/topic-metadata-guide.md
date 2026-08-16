# Topic metadata guide

`content-v2/indexes/topic-metadata.json` is a generated sidecar: one entry per topic id, joined to the corpus at runtime. It is produced by `scripts/build-topic-metadata.mjs`, checked by `scripts/validate-metadata.mjs`, and read through `src/lib/content/metadata.ts`.

It never edits `content-v2/subjects/` or `content-v2/client/`, so the mirror-equivalence and hard-coded totals gates in `scripts/validate-all-curricula.mjs` keep passing untouched.

## Entry shape

This is what `getTopicMetadata(topicId)` returns. It is the contract; the bytes on disk are an interning of it, described under [On-disk format](#on-disk-format) below.

```jsonc
{
  "programs": ["pre-nursing", "nursing", "premed", "healthcare"],
  "estimatedStudyMinutes": 24,
  "sectionCharacterCount": 10490,
  "exactQuestionCount": 12,
  "citationReviewQuestionCount": 0,
  "contentStatus": "source-grounded",
  "sourceIds": ["collection:prenursing_notes", "reference-host:medlineplus.gov"],
  "publish": true,
  "difficulty": "intermediate",        // optional
  "relatedTopics": ["topic:..."]       // optional
}
```

1409 entries, one per catalog topic. `generatedOn` is copied from `content-v2/catalog.json`, so the file regenerates byte-identically; the validator compares bytes.

## Field derivations

### `programs`

A fixed **subject-category** mapping, applied to every topic in that category:

| Category | Programmes |
| --- | --- |
| `pre-health-core` | pre-nursing, nursing, premed, healthcare |
| `healthcare-foundations` | pre-nursing, nursing, healthcare |
| `pathophysiology` | nursing, healthcare |
| `allied-health` | healthcare |

This is a statement about the course, not about the topic. It does not mean a premed student needs every topic in a pre-health-core course, and it is not a recommendation.

### `estimatedStudyMinutes`

```
round(sectionCharacterCount / 900 + exactQuestionCount)   clamped to [2, 90]
```

900 characters per minute is a reading-rate assumption chosen for this build. One minute is allowed per mapped question. **It is a rough planning aid, not a measured or authoritative figure**, and it should be presented to learners as an estimate. 126 topics sit at the lower clamp and 148 at the upper clamp, so the extremes are compressed by design.

### `sectionCharacterCount`

Summed length of every non-empty string in the topic's own `sections` object. `sections.references` is an array of citations rather than prose and is excluded.

### `exactQuestionCount` and `citationReviewQuestionCount`

`exactQuestionCount` counts questions whose `mappedCanonicalTopicIds` contains this topic id. This equals the bundle's own `availability.exactQuestions` for all 1409 topics, and `scripts/validate-metadata.mjs` asserts the equality rather than assuming it. `citationReviewQuestionCount` is how many of those same questions set `citationReviewRequired === true`.

### `difficulty`

Emitted only when **at least five** questions with `mappingScope: "exact"` map to the topic and carry a difficulty of `foundational`, `intermediate` or `advanced`. The modal value wins; ties break in the order foundational, intermediate, advanced. Mapping: `foundational` → `beginner`, `intermediate` → `intermediate`, `advanced` → `advanced`.

Questions with `difficulty: "unknown"` or with no `difficulty` field carry no signal and are excluded. Difficulty is never guessed from a topic's title, subject or position in a unit.

**352 of 1409 topics carry a difficulty** (11 `beginner`, 341 `intermediate`). The other 1057 have no entry. That is the honest result: `exact`-scope questions always map to exactly one topic, and most topics do not have five such questions.

### `contentStatus` and `publish`

| Topic `status` | `contentStatus` | Count | `publish` |
| --- | --- | ---: | --- |
| `final` | `source-grounded` | 1364 | `true` |
| `final_requires_citation_review` | `needs-medical-review` | 10 | `false` |
| `available` | `draft` | 35 | `false` |

`medically-reviewed` is **never emitted**. Nothing in this repository evidences a credentialed clinical review, so claiming one would be a fabrication. The validator fails the build if any entry claims it. See `docs/content-statuses.md`.

`publish` is true only for `source-grounded`. The brief phrased it as "true when `contentStatus !== "draft"`" while also requiring the validator to reject publishing a `needs-medical-review` topic; the stricter rule wins.

Because it is a pure function of `contentStatus`, `publish` is **not stored**. The generator asserts the rule holds for every topic before it drops the field, and `src/lib/content/metadata.ts` re-derives it on read, so callers still see it. A stored copy of a derived flag can only ever drift from the status printed beside it, and this is the flag that decides whether a learner is shown material held for medical review.

### `sourceIds`

The `collection:<value>` id from the topic's own `provenance.sourceCollection`, plus a `reference-host:<hostname>` id for each distinct host in `sections.references`. Sorted and de-duplicated. Every id resolves to a record in `content-v2/indexes/source-registry.json`.

### `relatedTopics`

Two topics are related when **one question's `mappedCanonicalTopicIds` array lists both ids**. Emitted as the up-to-6 most frequently co-mapped ids, sorted by co-occurrence count then id, excluding the topic itself. Omitted when there are no co-mappings.

This is the only topic-to-topic edge evidenced anywhere in the corpus. In practice it comes entirely from the 447 `broad-source-topic` questions: `exact` questions map to one topic, and `subject-wide-overlay` questions map to none. **64 of 1409 topics get the field.** The other 1345 have no evidence of a relationship with anything, and no relationship is invented for them.

## Fields deliberately omitted

Each is listed with its reason in the generated file's own `notes` array, so the omissions travel with the data.

| Field | Why it is absent |
| --- | --- |
| `prerequisites` | No topic-to-topic ordering edge exists anywhere in the corpus. A prerequisite chain would be invented, and a wrong one sends a learner into material they are not ready for. |
| `examAlignment` | No topic, question or catalog record names an exam blueprint, competency code or test plan section. |
| `learningObjectives` (structured array) | `sections.learningObjectives` exists as free prose and is served from there. Splitting it into discrete objectives means rewriting source text, which the import contract forbids. |
| `tags` | Questions carry tags; topics have no tag vocabulary. Propagating question tags upward would attribute claims to topics their own source text does not make. |
| `lastReviewed` | The corpus records import and verification dates for *source material*, not a review of the published topic by a person. Reusing an import date as a review date would misrepresent it. |

`scripts/validate-metadata.mjs` fails if any of these keys appears on an entry, so a future change cannot quietly reintroduce them.

## On-disk format

The sidecar is imported statically by `src/lib/content/metadata.ts`, so every byte of it lands in the first-paint bundle on a phone. Pretty-printed with a full string on every field of every entry it was **842,493 bytes**; interned it is **100,992** (88% smaller, 39,215 → 28,756 gzipped). Nothing was dropped except `publish`, which is derived.

The file keeps a readable header — `schemaVersion`, `generatedOn`, `generatedBy`, an `encoding` block, `notes` and `derivationRules` — and interns the bulk:

```jsonc
{
  "schemaVersion": "2.0.0",           // 1.0.0 was the pretty-printed layout
  "generatedOn": "2026-08-15",
  "generatedBy": "scripts/build-topic-metadata.mjs",
  "encoding": { "...": "how to read the rest of this file, in prose" },
  "notes": ["..."],
  "derivationRules": ["..."],
  "tables": {
    "sources": ["collection:biology_notes", "..."],          // every source id, once
    "programs": [["healthcare"], "..."],                     // every distinct combination, once
    "contentStatus": ["source-grounded", "..."],             // every legal value, in a fixed order
    "difficulty": ["beginner", "intermediate", "advanced"]
  },
  "topics": [
    ["anatomy-physiology-1", [["introduction-to-the-human-body", [
      ["anatomical-terminology", 3, 24, 10490, 12, 0, 0, [14, 40, 48], -1, [1, 3, 2, 5, 4]]
    ]]]]
  ]
}
```

- **Topic ids** are not stored whole. `topics` nests subject slug, then unit slug, then entries; the id is `topic:` + subject + `:` + unit + `:` + `entry[0]`. The 33 subject and 153 unit slugs are written once each instead of 1409 times each.
- **Entries are positional**, in the order given under [Entry shape](#entry-shape) minus `publish`: `[slug, programs, estimatedStudyMinutes, sectionCharacterCount, exactQuestionCount, citationReviewQuestionCount, contentStatus, sourceIds, difficulty, relatedTopics]`. The last two are dropped from the right when absent, and `difficulty` is `-1` when it alone is absent.
- **`programs`, `contentStatus`, `difficulty`** are indices into the matching table. The two enum tables list every *legal* value rather than only the emitted ones, so a stored code cannot change meaning when the content does.
- **`sourceIds`** are indices into `tables.sources`. **`relatedTopics`** are topic ordinals — position in the flattened walk of `topics`, counting from 0.
- The header is pretty-printed and the payload is emitted one line per subject, so a regeneration diff still localises to the courses that moved.

The interning is lossless and mechanical. `scripts/validate-metadata.mjs` decodes the file and runs every content rule against the decoded entries, checks each integer code points inside its table, and then re-encodes what it decoded and compares bytes — so a lossy round trip fails the build, not just a stale one.

`scripts/build-topic-metadata.mjs` carries `encodeTopicMetadata` and `decodeTopicMetadata`; `src/lib/content/metadata.ts` carries the same decode in TypeScript, because a Node script cannot import it. **Change the two together.**

## Reading it from the app

```ts
import { getTopicMetadata, getTopicSources, describeContentStatus } from "@/lib/content/metadata";

const metadata = getTopicMetadata(topicId);
if (metadata?.publish) {
  render(metadata.estimatedStudyMinutes, describeContentStatus(metadata.contentStatus));
}
```

`src/lib/content/metadata.ts` is pure and dependency-free: two JSON imports, one decoder, one lookup map, no I/O and no framework. The decode runs once, on the first call that needs it, and every call after that reads the same objects; nothing is decoded if nothing asks. Callers get their own arrays, so mutating a returned `programs` or `sourceIds` cannot corrupt another topic.

Optional fields are optional in the TypeScript interface too, so a missing `difficulty` is a compile-time concern rather than a runtime surprise. UI that shows `estimatedStudyMinutes` should label it as an estimate.

## Rebuilding

```
node scripts/build-source-registry.mjs   # first: sourceIds must resolve
node scripts/build-topic-metadata.mjs
node scripts/validate-metadata.mjs
node scripts/build-coverage-report.mjs
```
