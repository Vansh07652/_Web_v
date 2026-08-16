# Held question banks

Extracted into the site's question schema and **not published**. Nothing in this
directory is referenced by `content-v2`, and no Vite glob matches it.

| Bank | Questions staged | Intended destination |
|---|---:|---|
| `nursing-assistant-cna.json` | 2,500 | a new Nursing Assistant (CNA) course |
| `surgical-technology.json` | 2,396 | a new Surgical Technology course |
| `physics-study-hub-physics-1.json` | 192 | Physics I, which has no questions |
| `physics-study-hub-physics-2.json` | 192 | Physics II, which has no questions |
| **Total** | **5,280** | |

A further **1,224** CNA and surgical-technology questions were dropped entirely
rather than staged, because their stems open with the generator's own scaffold —
`"In case prompt 043 for Healthcare Team, Scope, and Delegation, which statement…"`.
That text refers to nothing a student can see, so those are broken questions
rather than weak ones. They are listed in `../generated-subject-import.json`.

## Why these are held

These banks were assembled by filling sentence frames, not written. Measured on
the raw sources before any import:

| Source | Stems containing their own topic title | Distinct 4-word openers | Distinct option sets | ELI-10 from one frame |
|---|---:|---|---:|---:|
| `cna-question-bank` | **100%** | 75 of 3,125 | **37%** | **100%** |
| `surgical-technology-question-bank` | **100%** | 113 of 2,995 | **37%** | **100%** |
| `physics-study-hub` | 50% | 199 of 384 | — | **100%** |
| `biology-study-hub` *(published)* | 3% | 324 of 336 | — | 0% |

Three findings, any one of which is disqualifying on its own:

1. **37% distinct option sets.** Roughly two in every three questions repeat
   another question's answers verbatim. The bank duplicates itself about
   threefold.
2. **Every stem interpolates its topic title.** 625 CNA questions open with the
   same four words; 3,125 questions share 75 openers.
3. **Every ELI-10 is one recycled simile** — `"Think of X like a safety rule in
   a classroom"` for all 3,125 CNA questions, `"Think of X like an important
   rule in a team project"` for all 2,995 surgical-technology ones, and one
   labelled-map frame for all 384 physics ones. ELI-10 is the site's whole
   promise; a student who answers two questions in a row would see it.

The underlying structure is sound — four options, a per-option rationale,
citations, a real correct answer — so this is a content-generation problem, not
a schema one.

## To publish a bank

1. Regenerate its `eli_10` field per question. This is the blocking one.
2. Rewrite the stems that carry the topic title as scaffolding, and de-duplicate
   the option sets down to the ~37% that are actually distinct.
3. Re-run `node scripts/import-generated-subjects.mjs`, moving the bank from
   `HELD_BANKS` into the published path, then `node scripts/update-manifest`.

The importer's quality gate stays in place either way: it drops any stem
carrying generator scaffold and refuses to build a topic-page ELI-10 section out
of templated text.
