# Staged book question banks

1,180 questions extracted from the Kindle manuscripts, in the site's
question schema, **not published**.

| Bank | Questions |
|---|---:|
| `nclex-01-safe-and-effective-care-environment` | 200 |
| `nclex-02-pharmacology-and-basic-care` | 200 |
| `nclex-03-risk-and-adaptation` | 49 |
| `nclex-04-health-and-heart` | 200 |
| `nclex-05-clinical-judgment-and-ngn` | 31 |
| `rpsgt-500-questions` | 500 |
| **Total** | **1,180** |

## Why these are staged and not live

Every one of these books is live on Amazon KDP. Publishing its full text free
on the web undercuts the paid edition, and **breaches KDP Select exclusivity
where a title is enrolled** — that is a contract term, not a preference.

Nothing here is loaded by the site. `content-v2` does not reference this
directory, and the Vite globs that build the client bundle do not match it.

## To publish a bank

1. Check that specific title's KDP Select enrolment in KDP → Bookshelf →
   Promote and Advertise. If it is enrolled, either wait out the term or
   un-enrol before continuing.
2. Decide what to publish. Safe options in increasing order of exposure:
   questions only (this data), questions plus rationales, or the full chapters.
3. Move the bank into a subject under `content-v2/subjects/` and run
   `node scripts/import-question-banks.mjs` to rebuild the catalogue,
   then `node scripts/update-manifest`.

## Format note

`rpsgt-500-questions` carries three rationale fields the site has no home for
yet — `clueInTheQuestion`, `examTrap` and `memoryAnchor`. They are preserved
in the staged JSON. Rendering them would need a small addition to
`RichQuestionPractice`; they are the most memorable part of that book's format.
