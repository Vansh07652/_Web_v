# Legal, licensing and privacy notices

Maintainer note for the four policy pages. It records what each page claims,
which claims are backed by something in this repository, which are policy
statements that a lawyer should look at before MedMosa is relied on
commercially, and what has to change when the content or the storage changes.

The rule these pages are written to: **never claim more than the repository can
evidence.** If the evidence stops, the page says so.

## Files

| File | Holds |
| --- | --- |
| `src/pages/LegalPages.tsx` | `TermsPage`, `PrivacyPage`, `LicensingPage`, `AccessibilityStatementPage` |
| `src/components/LegalNotice.tsx` | `StudyUseNotice` (inline educational-use note), `SiteLegalFooter` (copyright, source line, policy links) |
| `src/styles/legal.css` | All presentation. Every selector is prefixed `legal-` and scoped under `.legal-page`, `.legal-footer` or `.legal-note`. |

Routes (`/terms`, `/privacy`, `/licensing`, `/accessibility`) and the stylesheet
import are wired outside these files.

Shared constants live at the top of `LegalPages.tsx`: `LAST_UPDATED`,
`DOCUMENT_VERSION`, `CONTACT_ADDRESS`, `REGISTRY_PATH`, `CC_BY_URL`. Change the
date and version there and all four documents move together.

## Claim map

### Evidence-backed claims

Every figure and mechanism below can be re-derived from the repository. If a
number in the table stops matching, the page is wrong and has to be edited.

| Claim | Where it appears | Evidence |
| --- | --- | --- |
| 136 source records: 24 collection, 112 reference-host | Licensing §3 | `content-v2/indexes/source-registry.json` — count `sources[]` by `id` prefix |
| Exactly two records carry a recorded licence, both CC BY 4.0 (`openstax.org`, `opentextbc.ca`) | Licensing §4 | Same file — the only records with a `license` field |
| The other 134 records have no licence recorded | Licensing §4 | Same file — absence of `license`, and each record's `notes` says so explicitly |
| A licence is recorded only when the string appears literally in repository text, never inferred | Licensing §4 | `derivationRules` in the registry; `scripts/build-source-registry.mjs`; `scripts/validate-source-registry.mjs` |
| Cited hosts are dominated by open-access and public-sector scholarship (OpenStax, LibreTexts, CDC, MedlinePlus and other NIH properties, NASA, NIST, IUPAC, university course pages, ANA code of ethics, AHA CPR guidance) | Licensing §3 | The `provider` values in the registry's reference-host records |
| 24,400 unique questions, 25,000 placements | Terms §4 | `content-v2/catalog.json` → `totals.uniqueQuestionsAcrossCatalog`, `totals.questionPlacements` |
| 5,463 placements flagged for citation review | Terms §4 | Count of `citationReviewRequired === true` across `content-v2/client/subjects/*/questions.json` (`questions` + `subjectWideQuestions`). 4,863 distinct question ids. |
| Nothing evidences a credentialed clinical review; no page is described as medically reviewed | Terms §4 | Absence — no review field, sign-off record or reviewer identity exists anywhere in the corpus |
| Three localStorage keys, and what each holds | Privacy §2 | `src/lib/progress.ts` (`medmosa.progress.v1`), `src/lib/paths/planner.ts` (`medmosa.plan.v1`), `src/lib/speech.ts` (`medmosa.speech-rate.v1`) |
| Two legacy progress keys are still read and migrated | Privacy §2 | `LEGACY_STORAGE_KEYS` in `src/lib/progress.ts` |
| Storage refusal downgrades to memory for the session | Privacy §2 | The guarded accessors in `src/lib/progress.ts` |
| No name, email, free text, device id or sub-day timestamp is stored | Privacy §2 | The `ProgressState`, `PlanInput` and rate types; day keys are `YYYY-MM-DD` |
| Account sync is dormant unless configured, and renders no control when unconfigured | Privacy §4 | `isAuthConfigured()` in `src/lib/auth/config.ts`; `src/components/auth/AccountControls.tsx` |
| What a sync would upload, including the first-upload caveat | Privacy §4 | `syncOnSignIn` and `mergeProgress` in `src/lib/auth/sync.ts`; `replaceProgress` in `src/lib/progress.ts` |
| Read-aloud is browser `speechSynthesis`, makes no network call, stores only the rate | Privacy §5 | `src/lib/speech.ts` |
| Search runs in the browser against a shipped index | Privacy §6 | `src/lib/content/search.ts`; `content-v2/client/search-index.json` |
| No third-party scripts, fonts or stylesheets | Privacy §3, Accessibility §2 | `index.html` references only same-origin assets; the only `fetch` calls in `src/` are the dormant Supabase client |
| An in-app reset control exists | Privacy §8 | "Reset my progress" in `src/components/StudyDashboard.tsx`, calling `clearProgress()` |
| 44px primary touch targets, visible focus, reduced motion, increased contrast | Accessibility §2 | `src/styles/main.css` — `min-height: 2.75rem` on `.button`/`.menu-button`, `:focus-visible` outline, `prefers-reduced-motion`, `prefers-contrast` |
| Skip link, focus moves to top of page on navigation | Accessibility §2 | `.skip-link` in `src/styles/main.css`; the focus call in `src/App.tsx` |

### Deliberately not claimed

These are the temptations the pages refuse, and they should stay refused.

- **"All content is open source."** Two source families out of 136 records carry
  a licence. Saying the corpus is open would be false.
- **"Medically reviewed" / "clinically verified" / "reviewed by nurses."**
  Nothing evidences a credentialed review. This one is the most likely to be
  reintroduced by well-meaning marketing copy. It must not be.
- **"Aligned to the NCLEX / TEAS / HESI / MCAT blueprint."** No blueprint
  mapping exists in the corpus, and the exam names are trademarks used only to
  describe subject matter.
- **"GDPR compliant" / "CCPA certified."** The privacy page says those rights
  are satisfied *by design* — nothing is collected — and states plainly that no
  regulator has assessed the site and no third party has audited the claim.
- **"WCAG 2.2 AA conformant."** The accessibility page states AA as the
  *target*, labels itself a self-assessment, and lists the gaps.
- **Author or rights-holder names per source.** The registry omits
  `authorOrOrganization` everywhere because the corpus records collection slugs
  and reference text, not verified rights holders. The pages do not invent them.
- **Licence guesses from a domain.** `.gov` is not a licence. Public-sector
  works are frequently but not universally free of restriction, and the registry
  refuses to infer.

### Policy statements, not facts

These are commitments the site owner is making. They are not derived from the
repository, and they are the parts most worth a lawyer's eye.

- The notice-and-takedown timings (acknowledge in 5 business days; correct or
  remove a clear claim within 10 business days of acknowledgment; leave a
  contested item up unless safety is involved).
- The accessibility response commitment (acknowledge in 5 business days;
  barriers ranked above new content).
- The limitation of liability and the indemnity in Terms §8.
- The acceptable-use restrictions in Terms §7.
- The undertaking in Privacy §4 to update the page *before* enabling account
  sync in any deployment.
- `CONTACT_ADDRESS`. **This address must be live and monitored before the pages
  are published.** It is the only contact route in all four documents, and a
  takedown procedure that points at a dead mailbox is worse than none.

## What a lawyer should review before commercial reliance

Each page closes with a note saying this. Concretely, before MedMosa is sold,
licensed, bundled into a paid product, or made the basis of a contractual
promise:

1. **Limitation of liability and indemnity** (Terms §8). Enforceability varies
   by jurisdiction, and a paid product loses some of the latitude a free one has.
   There is currently no governing-law or venue clause; a commercial version
   needs one, and needs it to be consistent with the consumer law where users are.
2. **The medical disclaimer** (Terms §2). It is comprehensive as a statement, but
   whether it is *sufficient* where the material touches dosage calculation and
   scope of practice is a question for counsel, particularly if MedMosa is ever
   marketed to practicing clinicians rather than students.
3. **The licensing position** (Licensing §4). The claim that unlicensed sources
   are used by citation rather than reproduction is a legal characterisation of
   an editorial practice. A rights review of the adapted material — especially
   anything imported with `importedWithoutRewriting === true` — should confirm it
   before money changes hands.
4. **CC BY 4.0 attribution adequacy** (Licensing §4). The attribution statement
   names the work, the licensor, the licence, links to it, and states that
   changes were made. Confirm it satisfies §3(a) of the licence for the specific
   way the material is used, and confirm no implied endorsement.
5. **Trademark references** (Terms §6, Licensing §5). Nominative use of exam
   names is standard, but a commercial product attracts more scrutiny than a free
   one, and the disclaimers should be checked against each mark owner's published
   guidelines.
6. **Children's privacy** (Privacy §7). The COPPA position rests on collecting
   nothing. If a deployment ever enables accounts, that analysis has to be redone
   before launch, not after.
7. **Data protection** (Privacy §9). If account sync is ever enabled, the site
   becomes a controller of personal data and needs a real legal basis, a
   retention position, a processor agreement with Supabase, and — depending on
   audience — a representative in the EU or UK.

## Updating the notices

`LAST_UPDATED` and `DOCUMENT_VERSION` change together in `LegalPages.tsx`. Bump
the version for any change of substance; a typo fix does not need one.

### When content changes

Re-run the content pipeline, then re-check the four figures in the claim map:

```
node scripts/rebuild-content-indexes.mjs
node scripts/build-source-registry.mjs
node scripts/validate-source-registry.mjs
```

Then verify against the regenerated files:

- record counts and licensed-record count in `content-v2/indexes/source-registry.json`
- `totals.uniqueQuestionsAcrossCatalog` and `totals.questionPlacements` in `content-v2/catalog.json`
- the `citationReviewRequired` count across `content-v2/client/subjects/*/questions.json`

If any of these move, edit Terms §4 and Licensing §3–4 in the same commit. A
policy page carrying a stale number is a worse failure than one carrying an
uncomfortable one.

**If a new source arrives with a licence recorded**, add it to the named list in
Licensing §4 and extend the attribution statement. The attribution block is
written for the CC BY 4.0 case; a different licence family needs its own
paragraph rather than being folded into that one.

### When storage changes

Any new `localStorage` key, any change to what an existing key holds, and any
change to what leaves the device requires an edit to Privacy §2 or §4 **in the
same commit as the code change.** The privacy page is written to be verifiable
line by line against the implementation; that property is only worth having if
it is maintained.

Enabling account sync in a deployment is the single largest change these pages
can face. Privacy §4 promises the page is updated first. Honour that, and revisit
items 6 and 7 of the lawyer list above.

### When accessibility changes

Accessibility §2 lists what is implemented and §3 lists what is not. Moving an
item from §3 to §2 needs evidence — a code change plus a check with real
assistive technology, not an intention. Adding to §3 is always allowed and never
needs permission; an honest gap list is the point of the page.

### Gates

These files must keep passing:

```
node scripts/lint
node scripts/validate-architecture
node scripts/scan-secrets
tsc --noEmit -p tsconfig.app.json
```
