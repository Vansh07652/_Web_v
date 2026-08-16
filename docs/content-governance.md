# Content governance

How MedMosa decides what learners see, who may change it, and what the product is allowed to claim about its own material.

## The one claim we do not make

**No content in this repository has a documented credentialed clinical review.** No topic, question, catalog record or provenance block names a reviewing clinician, a review date or a review process. Every surface — the metadata sidecar, the validators, the status copy, the coverage report — is built so that this claim cannot be made accidentally. `medically-reviewed` exists as a type so the product can represent that state later; nothing emits it today, and `scripts/validate-metadata.mjs` fails the build if anything does.

## The layers

| Layer | Path | Owner | Editable by hand |
| --- | --- | ---: | --- |
| Source corpus | `content-v2/subjects/` | Import pipeline | No |
| Client mirror | `content-v2/client/` | Import pipeline | No |
| Catalog | `content-v2/catalog.json` | Import pipeline | No |
| Metadata sidecar | `content-v2/indexes/` | Phase 1 generators | No |
| Runtime accessor | `src/lib/content/metadata.ts` | Application code | Yes |
| Documentation | `docs/` | Humans | Yes |

### Why the sidecar is a sidecar

`scripts/validate-all-curricula.mjs` hard-codes the published totals (33 subjects, 153 units, 1409 topics, 1047 teaching topics, 1174 ELI-10 topics, 1360 referenced topics, 24400 unique questions, 25000 question placements) and re-derives them from disk, and it asserts that `content-v2/client/` mirrors `content-v2/subjects/` exactly. Adding a field to a topic bundle would break both gates.

So Phase 1 adds **nothing** to the corpus. `content-v2/indexes/topic-metadata.json` is keyed by topic id and joined at runtime. The corpus stays the single source of truth; the sidecar is a derived view that can be deleted and rebuilt at any time.

## Generators and gates

```
node scripts/build-source-registry.mjs    -> content-v2/indexes/source-registry.json
node scripts/build-topic-metadata.mjs     -> content-v2/indexes/topic-metadata.json
node scripts/build-coverage-report.mjs    -> _audit/coverage-report.{json,md}

node scripts/validate-source-registry.mjs
node scripts/validate-metadata.mjs
```

Both validators re-derive their artefact in memory and compare bytes with the file on disk. A hand-edit to either generated file fails immediately, which is the mechanism that keeps "generated" honest.

`content-v2/indexes/topic-metadata.json` is stored **interned**: the strings that repeat across its 1409 entries — source ids, programme combinations, the two enums, and the subject and unit halves of every topic id — are held once in tables and cited by integer, because the file is bundled into the first paint and 842 KB of pretty-printed JSON on a phone contradicted the rest of the product's loading strategy. It is now 101 KB. The header a person reads (`schemaVersion`, `generatedOn`, `generatedBy`, `encoding`, `notes`, `derivationRules`) stays pretty-printed, and the file's own `encoding` block explains how to read the rest by hand. `scripts/validate-metadata.mjs` decodes before it checks anything, so every governance rule below still runs against the entries a consumer sees, and it re-encodes what it decoded to prove the interning lost nothing. `docs/topic-metadata-guide.md` has the layout.

`scripts/curriculum-corpus.mjs` is the shared, read-only reader. It uses only `node:` builtins. There are no new npm dependencies anywhere in this phase.

## The rule that governs every derived field

> Every derived value must come from evidence already in the repository. If evidence is absent, the field is absent.

This is not a style preference. Fabricated metadata on a medical-education product is the worst available outcome: a made-up prerequisite chain sends a learner into material they are not ready for, a made-up exam alignment tells them they are prepared for a test they are not, and a made-up review status tells them a clinician checked something nobody checked.

Consequences, all of them intentional:

- 1057 of 1409 topics carry no `difficulty`, because fewer than five difficulty-bearing questions map to them exactly.
- 1345 of 1409 topics carry no `relatedTopics`, because no question co-maps them with anything.
- No topic carries `prerequisites`, `examAlignment`, structured `learningObjectives`, `tags` or `lastReviewed`. See `docs/topic-metadata-guide.md` for the evidence that is missing in each case.
- 134 of 136 source records carry no `license`. See `docs/source-and-license-policy.md`.

An empty field is a correct answer. It says "the repository does not know", which is true.

## Publication

A topic is published when its `contentStatus` is `source-grounded`. Drafts (35 topics) are incomplete. Topics held for medical review (10 topics) are withheld deliberately.

The Phase 1 brief described `publish` as "true when `contentStatus !== "draft"`" while also requiring the validator to reject any entry that is published while `needs-medical-review`. Those two rules disagree for the 10 held topics. The stricter rule wins: `publish` is true only for `source-grounded`. A safety gate that is easy to trip is worth more than one that reads well.

`publish` is not stored in the sidecar. It is a pure function of `contentStatus`, so the generator asserts the rule for every topic and the reader re-derives it; there is no second copy that could drift from the status printed beside it, and no hand-edit that could publish a held topic without also changing its status.

## Changing content

1. Change the importer, not the output. Everything under `content-v2/` is generated.
2. Rebuild the corpus, then rebuild the sidecar (`build-source-registry.mjs` before `build-topic-metadata.mjs`, because metadata `sourceIds` must resolve against the registry).
3. Rebuild `_audit/coverage-report.*`.
4. Run `node scripts/validate-all-curricula.mjs`, `node scripts/validate-source-registry.mjs`, `node scripts/validate-metadata.mjs`, `node scripts/lint`, `node scripts/validate-architecture`, `node scripts/scan-secrets`.
5. If a hard-coded total in `validate-all-curricula.mjs` moved, say why in the changelog. That gate exists to make content disappearing loud.

## Adding a new derived field

Before adding one, answer in writing:

- Which file and field in the repository is the evidence?
- Is the derivation deterministic and reproducible from that evidence alone?
- What happens to topics where the evidence is missing? (The answer must be "the field is absent", never "a default".)
- Which validator check makes a wrong value fail the build?

If any answer is uncomfortable, the field does not belong in the sidecar. Put it in the importer, where it can be traced to a source file.
