# Content statuses

The five values of `TopicContentStatus`, what each one is allowed to claim, and which of them the repository can currently evidence.

```ts
export type TopicContentStatus =
  | "source-grounded"
  | "medically-reviewed"
  | "needs-medical-review"
  | "draft"
  | "archived";
```

Defined in `src/lib/content/metadata.ts`. Derived per topic by `scripts/build-topic-metadata.mjs`. Enforced by `scripts/validate-metadata.mjs`.

## Current distribution

| Status | Topics | `publish` | Derived from topic `status` |
| --- | ---: | --- | --- |
| `source-grounded` | 1364 | `true` | `final` |
| `needs-medical-review` | 10 | `false` | `final_requires_citation_review` |
| `draft` | 35 | `false` | `available` |
| `medically-reviewed` | 0 | — | *nothing* |
| `archived` | 0 | — | *nothing* |

1409 topics total.

## What each status means

### `source-grounded` — 1364 topics

The material is grounded in the cited sources listed on the topic, and its sections are complete enough to study.

It says nothing about accuracy, currency or clinical safety, and **it explicitly does not mean a clinician has read it**. The user-facing copy is:

> Grounded in the cited sources listed on this topic. It has not had a credentialed clinical review.

The second sentence is not optional. It is the honest limit of what the repository can support, and removing it would turn a factual status into an implied endorsement.

### `medically-reviewed` — 0 topics

A credentialed clinician has reviewed the material.

**Nothing in this repository evidences this for any topic.** No topic, question, catalog record or provenance block names a reviewing clinician, a review date, a credential or a review process. The status exists in the type so the product can represent this state when a real review process produces real records — it does not exist so that a plausible-looking value can be back-filled.

The generator never emits it. `scripts/validate-metadata.mjs` fails the build if any entry carries it. The unit test in `tests/unit/content-metadata.test.ts` asserts the count is zero. Three independent gates, because this is the single claim most damaging to get wrong.

Its user-facing copy says so directly:

> Checked by a credentialed clinician. No content in this library currently carries this status.

### `needs-medical-review` — 10 topics

Flagged for review and deliberately withheld from study. Derived from the topic status `final_requires_citation_review`, which the importers set when a topic's citations could not be resolved to authoritative sources. All 10 are in Pharmacology Foundations.

> Held back from study because its citations are still being checked. Do not rely on it yet.

`publish` is `false`. The validator rejects any entry that is published while carrying this status.

Note the naming: the string is `needs-medical-review` throughout, in the data, the type and the copy. `scripts/validate-architecture` rejects the literal `"needs-review"` anywhere under `src/`, and the shorter name would also understate what the flag means.

### `draft` — 35 topics

Incomplete. Sections are missing, so the topic is not published for study. Derived from the topic status `available` — material exists, but not enough of it. 25 topics in Organic Chemistry I and 10 in Organic Chemistry II.

> Incomplete. Sections are still missing, so it is not published for study.

### `archived` — 0 topics

Withdrawn from the library, kept only for reference. Nothing derives it today; no topic in the corpus is marked withdrawn. It exists so that removing a topic later does not require deleting its record.

> Withdrawn from the library and kept only for reference.

## Publication rule

```
publish === (contentStatus === "source-grounded")
```

Only `source-grounded` publishes. Drafts and review-flagged topics are both withheld.

The Phase 1 brief described `publish` as "true when `contentStatus !== "draft"`" while also requiring the validator to reject any entry published while `needs-medical-review`. Those disagree for the 10 held topics. The stricter reading wins: a topic flagged for medical review is not published, and the validator enforces it, so the rule cannot drift back.

## Rules for status copy

`describeContentStatus()` returns short, user-facing text. When changing it:

1. **Never imply clinical approval for material that has none.** No "verified", "approved", "doctor-checked" or equivalent on any status other than `medically-reviewed`. The unit test greps for these.
2. **State the limitation, not just the capability.** `source-grounded` names what is missing (a credentialed review) as well as what is present (cited sources).
3. **Keep it under 160 characters.** It sits in a badge or tooltip. The unit test enforces the ceiling.
4. **Address the learner, not the pipeline.** "Do not rely on it yet" is useful; "citationReviewRequired is true" is not.
5. **Do not soften `needs-medical-review`.** It is the one status whose entire job is to stop somebody studying from it.

## Adding a status

A new status needs, before it is added: a field in the repository that evidences it, a deterministic rule in `scripts/build-topic-metadata.mjs`, a check in `scripts/validate-metadata.mjs`, an entry in `contentStatusCopy`, and a decision on whether it publishes. A status with no evidence behind it is a claim waiting to be made by accident.
