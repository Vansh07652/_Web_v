# Search and discovery

How MedMosa finds a topic. Everything described here runs in the browser, over
an index the browser has already downloaded. No query is sent anywhere, there is
no search server, and there is no external search provider.

Sources: `src/lib/content/search-filters.ts` (ranking and filtering),
`src/lib/content/synonyms.ts` (query expansion).
Tests: `tests/unit/search-filters.test.ts`, `tests/unit/synonyms.test.ts`.

## The index

The curriculum index is `content-v2/client/search-index.json`: 1,409 entries,
one per topic, carrying `id`, the subject, unit and topic slugs and titles,
`aliases`, `availability` and `href`. It is loaded lazily through
`loadCurriculumSearchIndex()` and is the only index this work uses. Nothing new
is built and nothing extra is shipped.

## Ranking

`rankCurriculumEntries(entries, query, filters?, resolveDifficulty?)` returns
`{ entry, score, matchedOn }` for every entry the query reaches. Six tiers,
highest first:

| Score | Match | `matchedOn` |
| --- | --- | --- |
| 100 | the query is exactly the topic title | `title` |
| 80 | the topic title starts with the query | `title` |
| 60 | the topic title contains the query | `title` |
| 45 | the unit title contains the query | `unit` |
| 40 | the subject title contains the query | `subject` |
| 30 | one of the topic's aliases contains the query | `alias` |

A hit found only through a synonym expansion scores one tenth of the tier it
would otherwise have earned — 10, 8, 6, 4.5, 4, 3 — and is reported as
`synonym`. That places the entire synonym band below the lowest direct tier while
preserving the same ordering inside it. A guess about what somebody meant must
never outrank what they typed.

Before comparison, both sides are lowercased and every run of non-alphanumeric
characters becomes a single space. Casing, punctuation and slug hyphens
therefore stop mattering: the alias `cardiac-cycle-overview` and the query
`Cardiac Cycle Overview` are the same string.

**Ties break on topic title, then on id**, both compared byte-wise rather than
with `localeCompare`, whose result depends on the visitor's locale. The
comparator is total, so the order cannot shift between renders, between browsers
or between test runs. An empty query is not an error: every entry that passes the
filters comes back, scored zero, in that same title-then-id order.

**Nothing is truncated.** `rankCurriculumEntries` returns every match, and
`applyLocalFilters` returns every survivor. Paging belongs to the caller, which
is the only place that knows how much room it has.

## Synonyms

`expandQuery(query)` returns the query first, then one variant per expansion that
applies, deduplicated. Expansion is a substitution, so "heart attack risk
factors" produces "myocardial infarction risk factors" and the rest of the query
still counts. Terms are applied one at a time rather than combinatorially: a
query with two known terms produces two extra variants, not four.
`describeExpansion(query)` returns a line such as
`Also searching for myocardial infarction`, or `undefined` when nothing widened.

Matching is **case-insensitive and whole-word only**. The query is split into
word tokens and a term matches only as a complete contiguous run of them, so
`MI` fires on "mi" and on "MI symptoms" but never inside "microbiology" — and
`ph` never inside "phosphate" or "graph". Substring matching would make a list
containing two-letter abbreviations actively dangerous.

The list is small, hand-written and hand-checked. Nothing in it was generated
from a corpus or inferred by a model, because a plausible-looking wrong entry
quietly sends a student studying one thing to a topic about another, with no way
for them to tell it happened. Three rules govern it:

1. **Expansion only, never contraction.** Every entry maps a lay or abbreviated
   term onto the fuller medical term, so an expanded query is never a two-letter
   string.
2. **No ambiguous abbreviations.** "RR" is respiratory rate on a chart and
   relative risk in a statistics unit, and both are in this curriculum, so it is
   left out. The same reasoning excludes "IM", "DM", "CA" and "PT".
3. **No near-misses dressed as synonyms.** "Heartburn" is a symptom of reflux,
   not a synonym for it, so the entry is `gerd` instead. "Stroke" is excluded
   because "stroke volume" is a cardiac term in the same corpus.

All 39 entries:

| Term | Expands to |
| --- | --- |
| `heart attack` | myocardial infarction |
| `high blood pressure` | hypertension |
| `low blood pressure` | hypotension |
| `high blood sugar` | hyperglycemia |
| `low blood sugar` | hypoglycemia |
| `blood sugar` | blood glucose |
| `shortness of breath` | dyspnea |
| `kidney stone` | nephrolithiasis |
| `nosebleed` | epistaxis |
| `fever` | pyrexia |
| `mi` | myocardial infarction |
| `copd` | chronic obstructive pulmonary disease |
| `chf` | congestive heart failure |
| `cva` | cerebrovascular accident |
| `uti` | urinary tract infection |
| `gerd` | gastroesophageal reflux disease |
| `bp` | blood pressure |
| `hr` | heart rate |
| `iv` | intravenous |
| `ecg` | electrocardiogram |
| `ekg` | electrocardiogram |
| `bmi` | body mass index |
| `cbc` | complete blood count |
| `abg` | arterial blood gas |
| `bun` | blood urea nitrogen |
| `gfr` | glomerular filtration rate |
| `hdl` | high density lipoprotein |
| `ldl` | low density lipoprotein |
| `rbc` | red blood cell |
| `wbc` | white blood cell |
| `gi` | gastrointestinal |
| `cns` | central nervous system |
| `pns` | peripheral nervous system |
| `adh` | antidiuretic hormone |
| `atp` | adenosine triphosphate |
| `adp` | adenosine diphosphate |
| `dna` | deoxyribonucleic acid |
| `rna` | ribonucleic acid |
| `ph` | potential of hydrogen |

## Filters

All eight combine with **AND**. A filter set to `true` narrows; `false` and
`undefined` both mean "no constraint", because an unchecked checkbox asks for
everything rather than for the topics that lack the thing.

| Filter | Source | Chip from `describeFilters` |
| --- | --- | --- |
| `subjectSlug` | `entry.subjectSlug` | `Subject: <slug>` |
| `hasEli10` | `availability.eli10` | Has plain-language explanation |
| `hasCollegeNotes` | `availability.collegeNotes` | Has college-level notes |
| `hasQuestions` | `availability.exactQuestions > 0` | Has practice questions |
| `hasReferences` | `availability.references` | Has references |
| `difficulty` | the caller's resolver | Beginner / Intermediate / Advanced level |
| `weakTopicsOnly` | the caller's `weakTopicIds` | My weak topics |
| `reviewDueOnly` | the caller's `dueTopicIds` | Review due |

`describeFilters` emits chips only for active filters, in that fixed order, so
they do not reshuffle as filters are toggled. The subject chip carries the slug:
resolving it to a title would mean importing the catalogue, and a caller that
already has the title is expected to render that instead.

The first five are applied by `rankCurriculumEntries` from the entry alone.

### Difficulty

Difficulty is not in the search index; it lives in the generated topic-metadata
sidecar, which is a large JSON import. Rather than pull that in, the module takes
a resolver — `(topicId) => getTopicMetadata(topicId)?.difficulty` is the intended
implementation — and only the *type* is imported, which is erased at compile
time. The module therefore stays a leaf of the graph and stays testable with a
three-line stub. A difficulty filter with no resolver behind it returns nothing:
a filter with no evidence should exclude, not silently pass everything.

### "My weak topics" and "Review due" are local only

`applyLocalFilters(ranked, { weakTopicIds, dueTopicIds, filters })` applies those
two, and it applies nothing else. Both id sets are computed **by the caller from
the visitor's own browser-local progress** — typically from `buildWeakTopics` and
from the topics whose scheduled review date has arrived — and are handed in
already resolved.

This module does not import `src/lib/progress.ts`, does not read `localStorage`,
does not read a clock, and has no side effects. The study history stays where it
already lives, and a search helper does not become a second reader of it. An
empty set is meaningful rather than ignored: "only my weak topics" with nothing
weak yet correctly returns nothing.

## Privacy

Nothing typed into search leaves the device. There is no search endpoint, no
suggestion service, no analytics event carrying the query, and no logging. The
index is a static JSON file the browser downloads once; matching happens in the
tab. The progress-derived filters never send progress anywhere either — they are
two sets of ids, resolved in the browser, used in the browser.

## Known limitations

- Matching is phrase-based, not bag-of-words: a query whose words appear in the
  title out of order ("terminology anatomical") does not match. A token-subset
  tier would need a seventh `matchedOn` value.
- No typo tolerance. Fuzzy matching over medical vocabulary produces confident
  wrong answers, which is the failure mode this curriculum can least afford.
- The synonym list is English-only and deliberately small; adding to it is a
  review decision, not a data-collection exercise.
- Normalised entry text is memoised in a `WeakMap` keyed by the entry object —
  a cache and nothing more, holding nothing alive and changing no answer.
