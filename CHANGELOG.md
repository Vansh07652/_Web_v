# Changelog

## 5.2.0 — 2026-08-15

- Removed the five book-derived courses at the owner's request: Sleep Medicine Library, RPSGT Exam Preparation, ELI Explains: Anatomy & Physiology, ELI Explains: Biology and NCLEX Foundations. The importer keeps its configuration but is switched off, so nothing republishes them by accident.
- Put the NCLEX notice back to a true statement: no NCLEX-oriented content is published here.
- Kept the RPSGT 500-question bank, which lives in **Sleep Technology** as practice questions rather than as book chapters — 566 questions there.
- Catalogue: back to 33 courses and 1,409 topics, with 24,400 unique questions.

## 5.1.0 — 2026-08-15

- Published **NCLEX Foundations**: the five client-need areas as 50 chapters — each section's questions, its answer key, and the plain-language explanation of why the right answer is right.
- Rewrote the NCLEX content notice. It said no clinical or NCLEX material was approved and that all of it was excluded pending qualified review; that is no longer true, and a notice that contradicts the site is worse than none. It now says where the material is, that the site's author wrote it from open educational nursing sources, and that it is not official NCLEX content.
- Catalogue: 37 → 38 courses, 1,670 → 1,720 topics.

## 5.0.0 — 2026-08-15

- Added the RPSGT 500-question bank to **Sleep Technology**: 494 of 500 questions with their worked answers and ELI-10 explanations, taking that course from 72 questions to 566. Six blocks that did not yield four clean options were dropped rather than published half-formed. All are flagged for citation review, because the answer key cites an exam domain — a blueprint reference, not a source.
- Published the book manuscripts as four reading courses, one unit per book and one topic per chapter: **Sleep Medicine Library** (58 chapters), **RPSGT Exam Preparation** (87), **ELI Explains: Anatomy & Physiology** (37) and **ELI Explains: Biology** (79) — 261 chapters in all, each one a topic.
- Only the book text is published. Each manuscript also carries an `originals/` tree of production scaffolding — series bible, outlines, image prompts, KDP metadata, upload checklists — and 139 of those files were skipped, along with 45 copyright and author pages and 53 chapters under 250 words. An earlier pass published the scaffolding by mistake; those 204 topics were removed.
- Catalogue: 33 → 37 courses, 1,409 → 1,670 topics, 1,047 → 1,308 topics with teaching notes, 23,906 → 24,400 unique questions.

## 4.9.0 — 2026-08-15

- Published **Clinical Mnemonics**: 29 memory devices taken apart into what each letter stands for, the physiology underneath it, the safety caveat, and the same thing in plain language — across Emergency & Trauma, Cardiology & ECG, Pharmacology & Electrolytes, Obstetrics & Paediatrics, Anatomy & Musculoskeletal, Internal Medicine & Infection, and Psychiatry.
- Held back the two the source library marks **HISTORICAL** — MONA and LEAN/NAVEL. The library keeps them to record what teaching has moved on from; publishing them on a study site would teach the exact thing they are filed under as outdated. The seven marked *current with caveats* are published with that status stated on the page rather than blended in.
- Did not publish the library's 168 practice questions: their stored form has a stem and a lettered answer but no option list, so importing them would mean reconstructing clinical answer choices.
- Catalogue: 32 → 33 courses, 1,380 → 1,409 topics.

## 4.8.0 — 2026-08-14

- Published the **MCAT One-Page Topic Study Library** as a new course, *MCAT Foundations*: 124 topics across nine units — Biology 26, Biochemistry 13, General Chemistry 12, Organic Chemistry 12, Physics 13, Psychology 12, Sociology 12, CARS 10, and Research Methods, Statistics & Scientific Reasoning 14. Every topic carries college-level teaching sections, a plain-language ELI-10 explanation, common traps, quick recall, and its own source list with titles, organisations and licences. It had been sitting in `Vansh07652/MCAT_STUDY_LIBRARY` unpublished.
- Kept it as one course rather than merging its pages into Biology, Chemistry and Physics: merging would put a second, differently-scoped account of the same topics beside the existing ones with nothing to tell a student which they were reading.
- Catalogue: 31 → 32 courses, 1,256 → 1,380 topics, 894 → 1,018 topics with teaching notes, 1,021 → 1,145 with a plain-language explanation, 1,227 → 1,351 with sources.

## 4.7.0 — 2026-08-14

- Published the Nursing Dosage Calculations master study guide into **Nursing Math & Dosage Foundations**, which had ten ELI-10 topics and no college-level teaching notes at all. Eight new topics: fundamentals and conversions, calculation methods, oral and parenteral dosages, reconstitution, IV therapy and flow rates, weight-based and paediatric dosing, critical care and titration, and the rapid-review reference sheets. Catalogue: 1,248 → 1,256 topics, 886 → 894 with teaching notes.
- Re-derived the bank's answer key before publishing any of it: 330 machine-checkable arithmetic steps across 500 worked answers, all verified, plus 22 clock-arithmetic steps recognised and exempted. The one genuine error found — Q156 read three 0.2 mL graduations below the 4 mL line as 3.6 mL when its own setup line gives 3.4 mL — is corrected at source. The importer withholds the worked example of any answer whose steps do not reconcile, so an answer that disagrees with itself cannot reach a topic page.
- Did **not** publish the bank's 500 questions as practice questions. They are free-response calculation items and the practice engine is multiple choice; generating distractors for medication doses would be authoring clinical content rather than importing it. The worked answers appear as worked examples on the matching topic instead.

## 4.6.0 — 2026-08-14

- Renamed the product from MedMosaic to **MedMosa**, matching the domain: header and footer wordmarks, page titles, Open Graph and Twitter cards, the web app manifest, the structured data, and the package name.
- Adopted the primary tagline *Every prerequisite, connected.* on the dashboard and in every page title, and the mission line *Open learning for the health-care path ahead.* in the home hero, the footer and the "How it works" header.
- Added the trust note — what the material is developed from, and that MedMosa is not a medical provider and does not give personal medical advice — to the footer and to "How it works". Both render one shared component, so the two can never drift apart.
- Migrated the saved-progress key to `medmosa.progress.v1`, keeping `medmosaic.progress.v1` and `study-compass.progress.v1` readable so nobody's streak or totals reset. The migration test now runs against both old keys.
- Rebuilt the favicon and social card for the new name, and fixed two faults in the generator: the card's two headline lines were typed out as literals rather than taken from the tagline constant, and its course/topic/question chips were hardcoded at 30 / 1,074 / 9,401 — a year out of date on every shared link. Both now come from the tagline and the built catalogue (31 / 1,248 / 23,906).

## 4.5.0 — 2026-08-14

- Moved the site from `studycorehub.com` to `medmosa.org`: `public/CNAME`, `SITE_ORIGIN`, `CANONICAL_ORIGIN`, the OAuth callback fallback origin, the canonical/Open Graph/Twitter/JSON-LD URLs in `index.html`, and the sitemap line in `public/robots.txt`.
- Regenerated the sitemap and every static route entry point against the new origin.
- Documented the registrar DNS records and the Pages custom-domain setting in `DEPLOYMENT.md`, and corrected the deployment table to name `ELI_Nur_Web` rather than the repository this package was first released from.
- Left the dated release, deployment and smoke-test records naming `studycorehub.com` unchanged: they record what was true at the time.
- Rewrote the control characters embedded in the `safeReturnPath` regular expression as escapes, so `src/lib/auth/config.ts` is no longer treated as a binary file by diff and search tools. The pattern is unchanged.

## 4.4.0 — 2026-08-11

- Restored 120 final audited Chemistry questions: 60 in Chemistry 1, 48 in Chemistry 2, and 12 in Organic Chemistry 1.
- Added 10 validated question-only lessons and rebuilt all seven runtime indexes to 121 lessons, 111 notes, 1,032 questions, and 2,064 tags.
- Preserved all source stems, choices, answer keys, detailed rationales, and ELI-10 explanations; recorded logical source paths and SHA-256 hashes.
- Fixed the index and GitHub Pages route generators to support lessons that have questions but no note.
- Confirmed supplied Genetics and Microbiology approved files already match the repository byte-for-byte and excluded their separate needs-review files.
- Recorded Organic Chemistry 2 as unrecoverable from available sources and retained the qualified-review gate for NCLEX clinical material.
- Merged PR #9 after both checks passed, deployed merge commit `84bd6eb6`, and passed the 376-route production audit through both custom-domain hostnames.

## 4.3.0 — 2026-08-11

- Reconciled the Phase 5 approved source snapshot, repository content files, and all seven runtime indexes for every subject.
- Confirmed all 111 approved lessons/notes and 912 approved questions are present byte-for-byte; no educational content required restoration or modification.
- Added expected, current, runtime, discrepancy, source-of-truth, root-cause, and restoration audit artifacts in JSON, CSV, and Markdown.
- Added a deterministic seven-index rebuild command and completeness validator.
- Removed hardcoded subject-page and search presentation caps that hid already-indexed lessons, results, and tags.
- Expanded the browser audit with exact per-subject lesson/count checks, all-tag coverage, and an uncapped 182-result search assertion.
- Merged PR #5 after both CI runs passed, deployed it with GitHub Pages, and passed the 355-route production audit through both custom-domain hostnames.
- Merged PR #6 to record live evidence and PR #7 to synchronize Phase 6 release, deployment, smoke-test, validation, status, and manifest records with the verified production application state.

## 4.2.0 — 2026-08-10

- Added and validated the GitHub Pages `CNAME` artifact for `studycorehub.com`.
- Changed the Pages production build from the repository subpath to the custom-domain root.
- Merged custom-domain pull request #3 after both CI checks passed, preserving its branch and repository history.
- Configured `studycorehub.com` as the GitHub Pages primary domain and verified the secure `www.studycorehub.com` redirect.
- Enabled HTTPS enforcement after GitHub approved a certificate covering both hostnames.
- Passed the complete 355-route browser, interaction, asset, responsive, accessibility, deep-link, and 404 audit through both domains.

## 4.1.0 — 2026-08-10

- Verified pull request #2 at its actual head, converted it from draft, and merged it into `main` after all checks passed.
- Enabled GitHub Pages with GitHub Actions and added the least-privilege production deployment workflow.
- Fixed the GitHub Pages repository base path for JavaScript, CSS, and content assets.
- Generated static entry points for every canonical route so production deep links return successfully.
- Completed the live 355-route browser, interaction, asset, responsive, accessibility, and 404 audit.
- Marked Phase 6 and the default GitHub Pages deployment complete; no custom domain was configured.

## 4.0.0 — 2026-08-10

- Flattened the completed Phase 5 release candidate so the website project is directly at `_UPLOAD_GITHUB/`, the required repository root.
- Added least-privilege GitHub Actions CI for locked installation, dependency audit, full validation, production build, and browser checks.
- Added Phase 6 deployment, release, smoke-test, status, and rollback documentation without recording secret values.
- Published the approved release on a safe branch while preserving the existing remote default-branch history.
- Recorded hosting and live verification as pending because no provider, project, production domain, or deployment credentials are configured.

## 3.0.0 — 2026-08-10

- Completed Phase 5 GitHub release preparation without committing, pushing, merging, deploying, or publishing.
- Added separate unit, integration, and accessibility test commands plus release inventory, manifest, and release-cleanliness validation commands.
- Generated JSON and CSV inventories for all 1,023 approved note/question files with repository-relative paths and SHA-256 hashes.
- Expanded the release manifest with file type, subject, content type, and generated/source status; documented stable manifest exclusions.
- Expanded README and content-authoring documentation with the exact clean-install, validation, indexing, and future GitHub preparation workflow.
- Updated Node/npm engine requirements and repository ignore rules.
- Removed local dependency output, production build output, `.DS_Store`, and two duplicate legacy documentation copies from the release candidate after validation.
- Re-ran the clean install, dependency audit, type check, lint, tests, content/route/link/asset/security checks, production build, browser/axe audit, preview smoke test, and final release validation.
- Approved educational notes, questions, answers, explanations, sources, subject mappings, and meaning were not changed.

## 2.1.0 — 2026-08-10

- Completed the Phase 4 build, route, content, notes, questions, search, responsive, accessibility, security, performance, and regression audit.
- Added a production browser/axe audit covering 356 routes and deep links, five viewport widths, quiz/search/mobile/keyboard flows, and request/console errors.
- Fixed direct nested-route loading by adding a static root base with a GitHub Pages project-path override.
- Fixed tag filtering by matching canonical tag IDs without capitalization sensitivity.
- Fixed quiz Previous behavior and prevented repeat submissions from double-counting the score.
- Corrected Markdown heading shifting, added safe inline formula rendering, and blocked unsafe Markdown URL schemes.
- Fixed teal-on-soft-teal WCAG contrast violations.
- Removed 17 exact duplicate generated chunks and added hash-based duplicate build-asset validation.
- Expanded secret-pattern coverage and added Playwright Core/axe development audit dependencies.
- Added 14 Phase 4 audit reports, `PHASE_4_STATUS.md`, and updated release validation documentation.
- Educational notes, questions, answers, explanations, sources, and subject mappings were not changed.

## 2.0.0 — 2026-08-10

- Consolidated the entire self-contained Phase 3 website and approved content package under `_UPLOAD_GITHUB/Phase 3/`.
- Implemented the complete Study Compass React, TypeScript, and Vite website at the repository root.
- Integrated all 11 canonical subjects, 111 lessons, 111 approved Markdown notes, and 912 approved questions through one typed data layer.
- Added responsive Home, Subjects, lesson, note, question, search, download, help, error, and 404 experiences.
- Added accessible question grading, correct/incorrect feedback, answer explanations, progress, completion scoring, previous/next controls, and restart.
- Expanded safe Markdown rendering for ordered lists and fenced code blocks found in approved notes.
- Added subject, content type, lesson, difficulty, and tag search filters, including subject/lesson display-name matching.
- Added strict type checking, project linting, unit/integration/accessibility tests, route/link/asset/build validation, and secret scanning.
- Fixed root-relative content import paths and eliminated the duplicate Phase 2 application entry point after integration.
- Updated architecture, operating instructions, manifest, validation report, and Phase 3 status documentation.

## 1.0.0 — 2026-08-10

- Inventoried 3757 initial files with paths, sizes, dates, types, subjects, readability, and SHA-256 hashes.
- Copied and hash-verified all originals under `raw/original-files/`, then moved the initial trees intact under `raw/original-locations/`.
- Normalized 111 approved Markdown notes.
- Converted approved lesson quiz banks into 912 validated per-question JSON files.
- Excluded clinical, NCLEX, course-ambiguous, duplicate, temporary, build, raw, and human-review material.
- Generated schemas, indexes, documentation, validation report, and SHA-256 manifest.
- No scientific claim, clinical recommendation, answer key, citation, or copyright status was silently changed.
