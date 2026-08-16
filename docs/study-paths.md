# Study paths

What a MedMosa study path is, where each one comes from, and what it does not
claim. Everything here runs in the browser from data already in the repository;
there is no server, no account and no network call.

Source: `src/lib/paths/study-paths.ts` (the paths and their numbers),
`src/lib/paths/planner.ts` (turning a path into a schedule),
`content-v2/catalog.json` and `content-v2/indexes/topic-metadata.json` (all the
evidence).

## What a path is

A grouping of courses already in this library, and nothing else. It is built
from three things the catalog genuinely records:

- `category` — one of `pre-health-core`, `healthcare-foundations`,
  `allied-health`, `pathophysiology`;
- `status` — the course's own build status, shown per course;
- `statistics` — the course's own topic and question counts.

## What a path is not

There is **no exam blueprint anywhere in this repository**, and no prerequisite
graph. The only topic-to-topic edge the corpus evidences is the co-mapping list
in the metadata sidecar, and that records only that one question happened to
touch two topics — not that one must be studied before the other.

So MedMosa publishes no `/paths/teas`, `/paths/hesi`, `/paths/nclex` or
`/paths/mcat` exam path. Publishing one would mean inventing a syllabus and
implying an alignment nobody has checked.

The one course-shaped exception is `mcat-foundations`. A course titled "MCAT
Foundations" really exists in the catalog, so a path is built around **that
course's own units and topics**. Its first limitation line says so in as many
words.

## The five paths

| Slug | Courses | Topics | Questions | Estimated minutes | With notes | With ELI-10 | With questions |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `pre-health-foundations` | 18 | 990 | 5,149 | 13,927 | 16 | 18 | 11 |
| `healthcare-foundations` | 11 | 137 | 1,680 | 2,277 | 2 | 11 | 10 |
| `allied-health` | 3 | 242 | 17,871 | 18,797 | 0 | 3 | 3 |
| `pathophysiology` | 1 | 40 | 300 | 365 | 1 | 1 | 1 |
| `mcat-foundations` | 1 | 124 | 0 | 2,715 | 1 | 1 | 0 |

Every number in that table is computed at run time from the catalog. Nothing is
hard-coded; the table is a snapshot for readers, and the tests recompute it.

### `pre-health-foundations` — Pre-health core science

Derivation: every course the catalog files under `pre-health-core`, in catalog
order.

`anatomy-physiology-1`, `anatomy-physiology-2`, `microbiology`,
`developmental-psychology`, `biochemistry`, `biology-1`, `biology-2`,
`cell-biology`, `general-chemistry-1`, `general-chemistry-2`,
`organic-chemistry-1`, `organic-chemistry-2`, `physics-1`, `physics-2`,
`genetics`, `nutrition`, `evidence-based-practice-basic-statistics`,
`mcat-foundations`.

Stated limitation beyond the shared set: MCAT Foundations sits in this category,
so it appears both here and in its own path.

### `healthcare-foundations` — Healthcare foundations

Derivation: every course the catalog files under `healthcare-foundations`, in
catalog order.

`medical-terminology`, `nursing-math-dosage`, `english-language-skills`,
`clinical-judgment`, `health-assessment`, `patient-safety`,
`healthcare-communication`, `healthcare-ethics-professionalism`,
`population-public-health`, `pharmacology-foundations`, `clinical-mnemonics`.

Nine of these eleven courses carry the status
`final_question_bank_no_college_notes`, which is why only two of them show
college-style teaching notes.

### `allied-health` — Allied health programmes

Derivation: every course the catalog files under `allied-health`, in catalog
order.

`respiratory-therapy`, `sleep-technology`, `medical-office-assistant`.

None of the three carries college-style notes; all three carry large question
banks, and `medical-office-assistant` alone accounts for 14,505 of the path's
17,871 question placements.

### `pathophysiology` — Pathophysiology

Derivation: the catalog's `pathophysiology` category, which currently contains a
single course. Stated limitation beyond the shared set: the path and the course
cover exactly the same material.

### `mcat-foundations` — MCAT Foundations course

Derivation: the membership of the one course in this library titled "MCAT
Foundations". Built from that course's own units and topics, **not** from the
MCAT exam blueprint, which this repository does not contain.

Stated limitation beyond the shared set: the course carries no practice
questions, so nothing in this path can be practised as a quiz.

## The limitations every path carries

`StudyPath.limitations` is a `string[]` and is rendered in the UI. Every path
carries a derivation line first, then these six:

1. MedMosa is not affiliated with, endorsed by or accredited by any testing
   organisation, licensing body or school, and claims no alignment to any exam
   blueprint.
2. A path is a grouping of courses already in this library. It is not a
   syllabus, an exam blueprint or a prerequisite sequence — this repository
   contains none of those.
3. Course order follows `content-v2/catalog.json`. It is a stable order, not a
   recommended teaching order.
4. Topic and question counts are each course's own catalog statistics. A
   question mapped into two courses is counted in both, so a path total counts
   placements rather than distinct questions.
5. Estimated time is a rough planning aid derived from topic prose length plus
   exact-mapped question counts. It excludes subject-wide question banks, and it
   is neither a measurement nor a promise.
6. Courses differ in what they contain: some have no college-style notes, some
   have no practice questions. The coverage figures on this path say how many.

## How the numbers are derived

`topicCount` — sum of each course's `statistics.topicCount`.

`questionCount` — sum of each course's `statistics.uniqueQuestionCount`. That
figure is unique *within* a course; summed across the whole catalog it comes to
the 25,000 question **placements**, not the 24,400 distinct questions, because a
question mapped into two courses is counted in both. Limitation 4 says so.

`estimatedMinutes` — sum of `estimatedStudyMinutes` over every topic in the
path's courses, read from `content-v2/indexes/topic-metadata.json`. That
per-topic figure is documented there as

```
round(sectionCharacterCount / 900 + exactQuestionCount)   clamped to [2, 90]
```

— a 900-characters-per-minute reading assumption plus one minute per
exact-mapped question. Two consequences:

- **subject-wide question banks are excluded**, because they attach to no topic.
  `allied-health` and `pathophysiology` are affected most.
- it is a planning aid, not a measurement and not a promise.

Topics are attributed to a course by the subject slug embedded in the topic id
(`topic:<subjectSlug>:<unitSlug>:<topicSlug>`), which is how all 1,409 topics in
the corpus are named.

`coverage` — three counts over the same statistics:
`coursesWithCollegeNotes` is courses with `teachingTopicCount > 0`,
`coursesWithEli10` is courses with `eli10TopicCount > 0`, and
`coursesWithQuestions` is courses with `uniqueQuestionCount > 0`.

## Planning a path

`generatePlan(input, today, state?)` in `src/lib/paths/planner.ts` turns a path
into dated sessions. It is pure: `today` is passed in as a `YYYY-MM-DD` key,
nothing reads a clock, and the same inputs always produce byte-identical output.

**Inputs — six values, and only six.** `pathSlug`, `targetDate`, `daysPerWeek`
(1–7), `minutesPerDay` (10–240), an optional list of focus course slugs, and an
optional `confidence` of `low`, `medium` or `high`. No name, no email, no free
text, no health information — and none is possible, because the only strings
that survive the guard are slugs the catalog already publishes and a date
matching `YYYY-MM-DD`.

**Which days become sessions.** Within each rolling seven-day block from
`today`, day `d` is a study day when `(d * daysPerWeek) % 7 < daysPerWeek`. That
is a Bresenham distribution: exactly `daysPerWeek` days per block, spread as
evenly as seven allows, always including the first day.

**Which course each session gets.** Courses are ordered as follows, and sessions
then rotate through that order so no course is exhausted before the next is
started:

1. focus courses, in the order they were given;
2. courses where local practice accuracy is weak (from `buildWeakTopics`);
3. courses not started at all;
4. everything else — each group in path order, with the course's index in the
   path as the final tie-break.

Without a progress state, groups 2 and 3 do not apply and the rotation simply
follows path order.

**Review time.** Every Nth session revisits the course of the session before it
rather than opening new material:

| `confidence` | Review session |
| --- | --- |
| `low` | every 3rd |
| `medium` (and the default) | every 4th |
| `high` | every 5th |

Lower stated confidence buys more revision; that is the only thing the
confidence value is used for. The first session is never a review.

**Topic target.** `round(minutesPerDay / (courseEstimatedMinutes /
courseTopicCount))`, at least 1 and never more topics than the course has.
Review sessions use the same figure: nothing here measures whether revisiting is
faster, so nothing here assumes it.

**Horizon.** `today` through `targetDate` inclusive, capped at 400 days. A
target that is missing, unreadable or not after `today` falls back to 14 days
and warns.

## Warnings

`StudyPlan.warnings` is honest rather than reassuring. It reports:

- a target date that is missing, unreadable, or not after today;
- a horizon truncated at 400 days;
- a focus course that is not in the path (reported and ignored, never thrown);
- a scheduled course with no practice questions in this library;
- booked time that falls short of the estimate for the courses scheduled;
- a path slug that is not published, or a `today` that cannot be read — both of
  which produce an empty but well-formed plan rather than an exception.

No warning and no summary promises exam readiness. `PLAN_DISCLAIMER` carries the
standing line for the UI: *"This is a schedule you asked for, not an assessment.
It cannot tell you whether you are ready for an exam, and MedMosa claims no
alignment to any exam blueprint."*

## Storage

Key `medmosa.plan.v1` in `localStorage`, holding the six preference values and
nothing else. `savePlanInput` sanitises before writing, so an object carrying
extra fields stores only the six. `readPlanInput` re-validates on the way out:
an unknown path slug returns `undefined`, a bad date becomes an empty string,
`daysPerWeek` and `minutesPerDay` are clamped, focus slugs are dropped unless
the path publishes them, and an unrecognised `confidence` is dropped.

Storage may be blocked, may throw on read, or may throw on write; all three are
handled, with an in-memory fallback for the session and no exception in any
case. Nothing here is ever sent anywhere.

## Tests

`tests/unit/study-paths.test.ts` — 22 tests: every path resolves, every course
slug exists in the catalog, totals equal the sum of their courses' statistics,
coverage counts match, the estimate matches a recomputation from the sidecar,
the disclaimer is present on every path, and the returned detail is a fresh copy
each call.

`tests/unit/planner.test.ts` — 44 tests: determinism, the weekly rhythm at both
clamps, review cadence at all three confidence bands, prioritisation from a
progress state, every warning, and the full storage matrix including blocked,
throwing and refusing-to-write browsers.
