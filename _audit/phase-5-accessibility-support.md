# Phase 5 — Numeric calculation questions

**Scope of this report: the numeric-entry (calculation) question work only.**
Phase 5 also covers accessibility support, which is delivered by a parallel
agent and reported separately. Nothing in this report describes screen-reader,
keyboard, contrast or speech work; the only accessibility content here is the
accessibility of the grading messages this phase writes.

No page, route or component is delivered here. `src/lib/quiz.ts` — the existing
multiple-choice grader — is not imported, referenced or changed.

## Phase objective

Make the corpus's `computation` objects gradable, safely, without authoring a
single calculation.

Concretely:

1. `src/lib/quiz/calculation.ts` — parse a `computation`, normalise a unit,
   convert within a dimension only, and grade a typed answer.
2. `scripts/validate-question-quality.mjs` — a validator in the house style that
   reports on the corpus and fails only on genuine defects, and that passes
   against the corpus as it stands.
3. `tests/unit/calculation.test.ts` covering exact matches, tolerances,
   conversions, refusals, malformed specs and floating point.

## Files inspected

- `content-v2/subjects/*/questions.json` — all 33 question banks, all 25,000
  placements, read exhaustively before any code was written. Every distinct
  `computation.unit`, `computation.tolerance` and `computation.expected_value`
  was enumerated. Not modified.
- `scripts/curriculum-corpus.mjs` — the shared, side-effect-free corpus reader
  the new validator uses, so it walks the corpus exactly as the other validators
  do. Not modified.
- `src/lib/quiz.ts` — read to confirm the new module duplicates none of it and
  can stay entirely separate. Not modified.
- `scripts/validate-metadata.mjs`, `scripts/validate-source-registry.mjs`,
  `scripts/validate-all-curricula.mjs`, `scripts/lint` — house style for a
  validator and the constraints on it.
- `content-v2/catalog.json` — placement totals used to check the corpus counts.

## Files created

- `src/lib/quiz/calculation.ts` — `CalculationSpec`, `CalculationAnswer`,
  `CalculationResult`, `parseCalculationSpec`, `normalizeUnit`, `convertValue`,
  `gradeCalculation`, `acceptedUnitsFor`, plus `CALCULATION_UNITS`.
- `scripts/validate-question-quality.mjs` — the question quality validator.
- `tests/unit/calculation.test.ts` — 56 tests.
- `_audit/phase-5-accessibility-support.md` — this report.

## Files updated

None. No existing file in the repository was modified by this phase.

In particular `package.json`, `src/lib/quiz.ts`, `src/App.tsx`,
`src/data/routes.json`, `manifest.json`, `content-v2/subjects/` and
`content-v2/client/` are unchanged.

## Files moved or removed

None.

## User-facing behavior changed

Nothing yet. Multiple-choice grading is untouched and behaves exactly as before.
What the new module makes possible is a numeric-entry question type for the 310
placements that carry a usable `computation`, with a unit field where the corpus
records a real unit and number-only entry where it does not.

## Data/schema changes

None. No content file, index or schema was written to. The validator reads only.

### The evidence, corrected

The phase brief states that "23,927 of 25,000 question placements carry a
`computation` object". That figure counts the **presence of the key**, not the
presence of an object:

| | Placements |
| --- | --- |
| `computation` key absent | 1,073 |
| `computation: null` | 23,617 |
| `computation` is an object | **310** |
| total | 25,000 |

`23,617 + 310 = 23,927`. So the numeric-entry bank is **310 questions**, not
23,927, and `null` is simply how the corpus writes "this is not a calculation
question". Every one of the 310 objects has a finite `expected_value`, so all
310 are gradable. This correction is written into the module header, into the
validator header, and into the validator's counts line, so nobody reads the
larger number as the size of the bank.

Tolerance across those 310: 192 `null`, 118 a finite non-negative number. The
values used are 0, 0.0001, 0.001, 0.005, 0.01, 0.02, 0.05, 0.1, 0.5, 1, 2, 1e20,
1e21 and 2e21 — the last three belong to Avogadro-scale answers and are
proportionate, not absurd.

## The unit table, and what the corpus actually contains

`computation.unit` in this corpus is **not a controlled vocabulary**. It is a
free-text label for the answer. Across the 310 objects it takes **175 distinct
values**, most appearing once, and many of them whole phrases —
`"mL of 0.05 mol/L base needed to neutralize 25 mL of 0.1 mol/L monoprotic
acid"`, `"proportion of shared variance (r squared)"`,
`"GRADE certainty rating (4 = high, 3 = moderate, 2 = low, 1 = very low)"`.

So the reviewed table covers only the strings that are genuinely measurement
units, on two rules: the symbol occurs in the corpus, and every conversion
inside a dimension is an exact defined ratio.

### The 30 reviewed units

| Dimension | Canonical units | Conversion |
| --- | --- | --- |
| mass | `g`, `mg`, `mcg`, `kg`, `lb` | SI prefixes; 1 lb = 0.45359237 kg exactly |
| volume | `mL`, `L` | 1 L = 1000 mL |
| amount-concentration | `mol/L`, `mmol/L` | 1 mol/L = 1000 mmol/L |
| mass-concentration | `g/L`, `mg/mL` | 1 g/L = 1 mg/mL |
| percent | `percent` | none |
| ph | `pH` | none |
| milliequivalent-concentration | `mEq/L` | none |
| osmolarity | `osmol/L` | none |
| molar-mass | `g/mol` | none |
| amount | `mol` | none |
| atomic-mass | `amu` | none |
| pressure | `mmHg` | none |
| infusion-rate | `mL/hr` | none |
| weight-based-infusion-rate | `mL/kg/hr` | none |
| drop-rate | `gtt/min` | none |
| beat-rate | `beats/min` | none |
| parts-per-million | `ppm` | none |
| time | `hr` | none |
| temperature | `degrees C` | none |
| tablet-count | `tablets` | none |
| dose-unit-count | `units` | none |
| cup-count | `cups` | none |
| score-point | `points` | none |

Aliases cover case, spelt-out names and common plurals: `milliliters`,
`millilitres`, `grams`, `micrograms`, `pounds`, `gtts/min`, `drops/min`, `bpm`,
`°c`, `celsius`, `µg`, `ug`, and a trailing-`s` fallback for spellings like
`mLs`.

`L` is the one admitted entry that no question uses as a spec unit. It is there
so a learner who answers `0.5 L` to an mL question is converted rather than
rejected. Flagged in the module header.

### Corpus coverage of the table

Of the 310 objects: **128** carry a unit in the reviewed table, **179** carry a
free-text answer label, **3** carry an empty string. Distribution of the 128:

`mL` 29, `percent` 13, `g` 10, `pH` 9, `lb` 8, `mg` 6, `kg` 6, `gtt/min` 6,
`tablets` 5, `points` 5, `units` 4, `mL/hr` 3, `g/mol` 2, `mEq/L` 2, `osmol/L`
2, `cups` 2, `mcg` 2, `hr` 2, `mmHg` 2, and one each of `degrees C`, `mol`,
`amu`, `g/L`, `ppm`, `mmol/L`, `mol/L`, `mg/mL`, `mL/kg/hr`, `beats/min`.

### Two units deliberately excluded

The corpus uses `M` for molarity (three general-chemistry questions, e.g. "0.5
mol of glucose in a total volume of 2 L") and `m` for metres (one nursing-maths
scale-drawing question, "2 cm represents 15 m"). Unit matching folds case, which
would make those two the same string, and accepting metres for a molarity answer
is exactly the silent mis-grade this module exists to prevent. Adding a
case-sensitive exception for two units would be a rule nothing in the corpus
supports, so both are treated as free-text labels instead and the number alone is
graded. `mol/L` and `mmol/L`, which are unambiguous, are in the table.

### Conversions that are refused

`convertValue` returns `undefined` across dimensions, always. In particular
`mEq/L → mmol/L` needs a valence and `osmol/L → mol/L` needs a particle count;
both are chemical judgements, so both are refused. Temperature is a
single-member dimension because Celsius-to-Fahrenheit is an offset, not a ratio.

## How a unit is treated when grading

| Spec unit | Behaviour |
| --- | --- |
| absent or empty | the number alone is graded |
| in the reviewed table | a unit is required; a sibling unit is converted; a unit from another dimension or outside the table is refused |
| a free-text answer label | the number alone is graded; an answer that supplies a *different* unit is refused rather than quietly ignored |

The last row is the one judgement call in the module. Demanding an exact string
match against a sentence would be absurd, and treating a 30-word label as an
unknown unit would make 179 of the 310 questions ungradeable. Refusing a
mismatched unit keeps the "never a silent pass" rule intact without either.

## Validator

`node scripts/validate-question-quality.mjs`, house style, exits non-zero on
error. It fails on:

- a `computation` that is present but is an array or a non-object;
- `expected_value` absent or not a finite number;
- `expression` present but not a non-empty string;
- `tolerance` present, not `null`, and not a non-negative finite number;
- `unit` present but not a string;
- `unit` in neither the reviewed measurement table nor the reviewed answer-label
  snapshot;
- a question with fewer than two options and no `computation` — unanswerable;
- a multiple-choice question whose `correctAnswer` does not resolve to one of
  its own option ids.

`computation: null` and an empty-string unit are counted, never failed: both are
ordinary corpus values, not defects.

Two design points worth recording. First, the validator does not keep its own
copy of the unit table — it **parses the table out of
`src/lib/quiz/calculation.ts`**, so the grader and the validator cannot disagree
about what a unit is, and a reformat that defeats the parse empties the list and
fails loudly (verified by mangling the source and observing FAIL, then
restoring). Second, `REVIEWED_ANSWER_LABELS` is a verbatim snapshot of the 139
distinct free-text labels present at review time. It passes today by
construction; its value is forward-looking — the first unreviewed label anyone
adds fails the build until someone decides which tier it belongs in.

Current output:

```
QUESTION QUALITY: PASS
25000 questions in 33 courses; 310 carry a computation object and 310 are
calculation-capable, against 23617 placements whose computation is null; 118
state a tolerance, 192 leave it null; units: 128 measurement, 179 reviewed
answer label, 3 empty, 0 absent, 175 distinct strings against 30 reviewed units
and 139 reviewed labels
```

The validator is **not** wired into `package.json`, which is reserved this
phase. It must be run explicitly, or added to the `validate` script later.

## Comparison and floating point

With no tolerance, the comparison is exact to within
`Number.EPSILON * 8 * max(1, |value|, |expected|)`. Eight units in the last
place absorbs the error of a few arithmetic steps — enough for `0.1 + 0.2` to
equal `0.3`, and for `0.1 * 3` — while remaining roughly fourteen orders of
magnitude too small to accept a wrong answer. Tested at both ends: `0.3000001`
against `0.3` and `100.00001` against `100` are both marked incorrect.

With a tolerance, the allowance is `tolerance + that same slack`. A tolerance of
`0` therefore behaves as an exact match, which is what it means. A negative or
non-finite tolerance is treated as absent.

Answer parsing accepts an optional sign, digits with an optional decimal point,
and scientific notation (needed for the Avogadro-scale answers). It rejects
commas with a message naming the problem, because a comma may be a decimal
separator or a thousands separator and guessing wrong would mis-grade.

## Test and validation commands run

```
node /path/to/typescript/bin/tsc --noEmit -p tsconfig.app.json
node scripts/lint
node scripts/validate-question-quality.mjs
node scripts/validate-architecture
node scripts/validate-all-curricula.mjs
/root/localtest/run.sh tests/unit/calculation.test.ts
/root/localtest/run.sh tests/unit/quiz.test.ts
```

`npm test` (vitest) cannot run in this sandbox; the local shim maps `vitest` onto
`node:test` and was used instead.

## Test results

| Suite | Tests | Pass | Fail |
| --- | --- | --- | --- |
| `tests/unit/calculation.test.ts` | 56 | 56 | 0 |
| `tests/unit/quiz.test.ts` (existing, unchanged) | 3 | 3 | 0 |

`scripts/validate-question-quality.mjs`: PASS. Typecheck: pass.
`scripts/lint`: PASS. `validate-architecture`: PASS.
`validate-all-curricula.mjs`: PASS.

The suite covers exact matches; matches inside an explicit tolerance; values
just outside it; conversion in both directions for mass and volume; the exact
pound definition; refused cross-dimension conversions including `mEq/L →
mmol/L`; a missing unit where one is required; an unknown unit; a unit from
another dimension; non-numeric input; empty input; malformed `computation`
objects of every shape including `null`; `0.1 + 0.2` and `0.1 * 3`; message
length and the absence of clinical vocabulary; and that grading mutates neither
argument. It also runs the whole `nursing-math-dosage` bank end to end: all 100
recorded expected values grade correct when typed back, and all 20 `null`
computations parse to `undefined`.

## Accessibility impact

No markup is produced. The accessible part of this phase is the messages, which
were written to be read aloud as well as seen:

- every message is a complete sentence ending in a full stop, under 120
  characters, asserted by a test;
- every failure message says what to do, not just that something is wrong —
  "Include a unit. This question is answered in mL or L.", "Use a decimal point,
  like 12.5, rather than a comma.", "Enter digits only, like 12.5. Put any unit
  in the unit field.";
- status is carried in `CalculationResult.status`, separate from the message, so
  a UI can choose its own live-region politeness and never has to parse text;
- `acceptedUnitsFor` gives the UI the exact list of units to offer, so a unit
  control can be a real select rather than free text.

Screen-reader, keyboard and contrast work for the practice screens is the
parallel agent's, and is not covered here.

## Privacy impact

None. The module is pure: no storage, no clock, no network, no import that could
reach any of them. An answer is graded in memory and the result returned; it is
never persisted by this module. The validator reads the repository and writes
nothing.

## Known limitations

- **310 gradable questions, not 23,927.** The numeric-entry type applies to
  1.2% of placements. Everything else stays multiple choice.
- **179 of the 310 carry a free-text label rather than a unit**, so for those
  the learner is asked for a number only and no unit checking happens.
- **`M` (molar) and `m` (metres) are ungraded as units** for the reasons above,
  affecting four questions.
- **`expression` is never evaluated.** It is carried through as a string for
  display. Evaluating corpus-supplied arithmetic would be executing untrusted
  input, and it would add nothing: `expected_value` is already the answer.
- **No working, no solution steps, no rationale for the number.** The corpus
  does not contain them for calculations and none was written.
- **A comma is always rejected**, including where a learner's locale uses it as
  the decimal separator. The message names the fix. Guessing would mis-grade.
- **`value` must be digits only.** `"45 mL"` and `"45%"` are rejected; the UI is
  expected to give the unit its own control.
- **`REVIEWED_ANSWER_LABELS` passes by construction today.** It is a drift
  detector for future content, not evidence that the current labels were each
  individually judged sensible.
- **The tolerance in the corpus is taken at face value.** Where an author chose
  `0.1` on a percentage, this module accepts `±0.1`; it has no opinion about
  whether that is the right band.

## Deferred work

- Wiring `validate-question-quality` into the `validate` script in
  `package.json` (reserved this phase).
- The numeric-entry UI itself: input, unit control, live region, and recording
  the result through `recordAnswer`.
- A `questionType` on the corpus that says "this is numeric entry" rather than
  inferring it from the presence of a computation object.
- Deciding, per free-text label, whether it should become a reviewed unit. 139
  labels are currently snapshotted unexamined-as-units.
- Accepting a locale decimal comma behind an explicit locale signal.

## Risks or assumptions requiring later review

- **The pound conversion is the only non-SI ratio in the table.** It is exact by
  definition (1 lb = 0.45359237 kg), but it is the one place a unit conversion
  could be argued about, and it is used on 8 questions.
- **The trailing-`s` plural fallback is a heuristic.** No collision exists in the
  current table; adding a unit whose singular is another unit's plural would
  create one. Worth re-checking whenever a unit is added.
- **The validator parses TypeScript with a regular expression.** It is guarded —
  fewer than ten units parsed is an immediate failure — but it is coupled to the
  literal formatting of one array in `src/lib/quiz/calculation.ts`.
- **The 8-ulp epsilon is a judgement call.** It was chosen to pass `0.1 + 0.2`
  and to fail anything a learner could plausibly type wrong; it has not been
  stress-tested against a long chain of conversions, because the module never
  performs more than one.
- **All 310 computations were assumed correct.** Nothing here verifies that
  `expected_value` actually equals `expression`; that would be evaluating
  untrusted arithmetic, and disagreeing with the corpus is a content decision,
  not a grading one.
