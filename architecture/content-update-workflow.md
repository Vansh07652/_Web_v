# Content update workflow

This workflow changes the content pipeline/export, not website components. Never edit an already published `_UPLOAD_GITHUB/` export in place. Prepare content in the authorized content workflow, review it, generate a fresh export, then validate the website against that export.

## Before starting

Use canonical subject and lesson slugs. Do not include clinical, nursing, dosage, pharmacology, patient-safety, copyrighted, ambiguous, or unreviewed material until the required qualified review approves it. Follow `_UPLOAD_GITHUB/CONTENT_GUIDE.md` and the JSON schemas. Keep a recoverable copy of the last ready export.

## Add a note

1. Create a lowercase hyphenated Markdown filename under the intended subject’s `content/<subject>/notes/` in the authorized source workflow.
2. Add every required front-matter field listed in `data-contract.md`; set subject/lesson to canonical slugs.
3. Use one H1, ordered headings, descriptive links, and alt text for meaningful images.
4. Complete content review. Only reviewed material may receive `status: approved`, `reviewStatus: audited`, and `humanVerificationRequired: false`.
5. Add/update the record in notes, content, and search indexes through the export generator—not by manual duplication.

## Add a question

1. Create one JSON object per question with a globally unique lowercase question ID.
2. Set canonical subject/lesson, supported `questionType`, nonempty prompt, at least two `{id,text}` options, answer matching an option ID, explanation, difficulty, tags, source, and review fields.
3. Have the answer and explanation reviewed. Do not infer or silently repair an ambiguous answer.
4. Regenerate questions, content, and search indexes and the per-question content file.

## Add a lesson

1. Confirm the subject exists in `subjects.json`.
2. Choose a subject-unique lowercase slug and stable ID.
3. Assign the intended integer `lessonNumber`; check ordering and collisions.
4. Add the approved lesson record. A lesson may exist without note/questions, but its empty state must be intentional.

## Add an asset

1. Confirm ownership/license and review requirements.
2. Put an approved image in `assets/images`, diagram in `assets/diagrams`, or file in `assets/downloads`.
3. Use a lowercase descriptive filename, reasonable size, correct format, and safe relative references.
4. Supply alt text for meaningful images; use empty alt only when decorative. Give downloads a visible title, purpose, format, and size.
5. Regenerate asset references/index (when introduced), link checks, missing-asset checks, and manifest.

## Add a subject

Only do this as an intentional product/schema change. Add the exact ID/slug/name to the subject source, every subject enum schema, navigation/SEO validation assumptions, and test coverage. Do not rename or alias an existing route casually. Record the contract migration and confirm historic links.

## Generate and validate

1. Run the Phase 1 content validators: JSON, front matter, questions, duplicates, links, assets, secrets, paths, indexes, and schemas.
2. Regenerate `content-index.json`, `search-index.json`, aggregate data files, provenance, validation report, and `manifest.json`.
3. Confirm the new package reports `UPLOAD_GITHUB_READY` and contains only approved/audited items with `humanVerificationRequired: false`.
4. Replace the website’s sibling export as one complete, reviewed package; never combine old and new indexes/files.
5. From the repository root, run `npm run validate`.
6. Preview a changed subject, note, question explanation, search result, mobile view, and direct URL.
7. Record the manifest hash and validation result for the release candidate.

If validation fails, keep the failed export out of deployment, document the exact record/path, fix it in the content workflow, and regenerate. Website code must not patch the content.
