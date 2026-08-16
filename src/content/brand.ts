/**
 * Brand copy, in one place.
 *
 * WHO READS THIS MODULE
 *
 * The site footer, the About page and the Learn (curriculum) pages all take
 * their mission, positioning, call-to-action and disclaimer wording from the
 * constants below, so the same sentence never appears in three files in three
 * slightly different shapes. Nothing here imports anything, so any surface can
 * read it without pulling in a component graph.
 *
 * A sentence that says two different things in two places is worse than one
 * that says nothing: if a string below needs to change, change it here and
 * every surface changes with it.
 *
 * THE TWO SOURCING SENTENCES, AND WHY BOTH EXIST
 *
 * The brand copy originally described the material as "verified open-source
 * educational information". Neither half of that was supportable here, so both
 * halves were corrected rather than caveated: `content-v2/indexes/
 * source-registry.json` holds 132 records and exactly 2 of them carry an
 * explicit licence (both CC BY 4.0), which makes the library openly
 * *accessible* rather than open-source; and nothing in the corpus has a
 * documented credentialed clinical review, which rules out "verified". The
 * strings now say "openly available", which is true, reads the same, and costs
 * the copy nothing.
 *
 * The site's standing rule still holds: the word "verified" is used only where
 * a documented review step actually happened; everywhere else the material is
 * "reviewed against publicly available sources" with "references provided".
 *
 * So the split is deliberate:
 *
 *   - Brand voice, for headlines, the hero and marketing surfaces:
 *     `BRAND_MISSION_SHORT`, `BRAND_MISSION_LONG`, `BRAND_DESCRIPTION`,
 *     `BRAND_POSITIONING`, `TRUST_LINE`.
 *   - Evidence, for anywhere the site makes a factual claim about its own
 *     sourcing — the sourcing section, the policy pages, per-content source
 *     statements: `SOURCING_ACCURACY_NOTE`, alongside
 *     `CONTENT_SOURCE_STATEMENT`.
 *
 * Do not use a brand-voice string to answer a factual question about where the
 * content came from, and do not soften `SOURCING_ACCURACY_NOTE` to match the
 * brand voice. The next person to read this file should know that both exist on
 * purpose.
 */

/* -------------------------------------------------------------------------
   Mission and description
   ------------------------------------------------------------------------- */

/** One-sentence mission. Hero, footer and social description. */
export const BRAND_MISSION_SHORT =
  "MedMosa empowers future healthcare professionals with free, clear, adaptive, and accessible learning tools—transforming complex medical knowledge into confidence, competence, and better patient care.";

/** The mission in full, for the About page. Brand voice; see the header note. */
export const BRAND_MISSION_LONG =
  "MedMosa believes that high-quality healthcare education should be accessible to everyone. Our mission is to remove barriers to learning by providing free study tools, openly available educational information, and practical resources that help aspiring healthcare professionals succeed.";

/** What MedMosa is, as one paragraph. Kept unbroken so it can be used as a meta description. */
export const BRAND_DESCRIPTION =
  "MedMosa is a free medical learning platform created to make healthcare education clearer, more accessible, and more effective. We help aspiring healthcare professionals transform complex topics into lasting understanding through structured study tools, practice-based learning, clear explanations, and accessible educational resources. No subscription is required. No registration is required. Learners can begin studying immediately. MedMosa uses openly available educational information and trusted public resources to create learning experiences that support stronger understanding, better retention, and greater exam confidence. Our goal is to give every learner a clearer, more equitable path toward becoming a capable, confident healthcare professional.";

/** The positioning line: what this is and what it costs, in two sentences. */
export const BRAND_POSITIONING =
  "Free medical learning, made clear. Study healthcare topics with clear explanations, focused practice, and accessible resources—no registration or subscription required.";

/* -------------------------------------------------------------------------
   Calls to action
   ------------------------------------------------------------------------- */

/** A labelled destination. `href` is an in-app path, not an absolute URL. */
export interface BrandCta {
  readonly label: string;
  readonly href: string;
}

/**
 * The primary "start here" target.
 *
 * Checked against the catalog rather than assumed: `anatomy-physiology-1` is the
 * first course in `content-v2/catalog.json`, and it is the strongest starting
 * point in the library — 54 topics, every one of them carrying college-level
 * notes, a plain-language explanation and references, plus 553 practice
 * questions. It is also the only course family with an explicitly licensed
 * source. `/learn/:subjectSlug` is a real route in `src/data/routes.json`.
 */
export const PRIMARY_CTA: BrandCta = { label: "Start Learning Free", href: "/learn/anatomy-physiology-1" };

/**
 * The secondary "try it first" target. `/learn/:subjectSlug/practice` is a real
 * route, and this course's bank holds 553 questions, so the page is never empty.
 */
export const SECONDARY_CTA: BrandCta = { label: "Try a Sample Quiz", href: "/learn/anatomy-physiology-1/practice" };

/* -------------------------------------------------------------------------
   Trust, safety and sourcing
   ------------------------------------------------------------------------- */

/** The three-part promise shown under the calls to action. Brand voice. */
export const TRUST_LINE =
  "No registration required. No subscription required. Built on transparent, openly available educational information.";

/**
 * The evidence-backed version of the sourcing claim, for every factual context.
 *
 * This is the sentence to use in the sourcing section, on the policy pages and
 * in per-content source statements. It says only what the repository can show:
 * material is reviewed against the sources it was built from, references are
 * provided where the source carried them, and no clinician has signed anything
 * off.
 */
export const SOURCING_ACCURACY_NOTE =
  "MedMosa's material is reviewed against publicly available sources, with references provided wherever the source recorded them. It has not had a credentialed clinical review, and no page on this site is presented as clinically verified.";

/** The standing safety line. Shown wherever content could be mistaken for guidance. */
export const SAFETY_DISCLAIMER =
  "MedMosa provides educational resources for learning and exam preparation. Content is not medical advice and should not be used for diagnosis, treatment decisions, clinical decision-making, or emergency guidance. Always follow the direction of qualified instructors, licensed healthcare professionals, and your institution's approved clinical policies.";

/**
 * The additional caution for medication, procedure, emergency and patient-care
 * material. Rendered by `ExtendedClinicalNotice` in `components/LegalNotice.tsx`.
 */
export const EXTENDED_DISCLAIMER =
  "Medical knowledge, guidelines, and institutional policies can change. Learners should verify current standards with qualified instructors, licensed professionals, official clinical guidelines, and their educational institution.";

/** The per-content provenance line. Sits beside a topic's own reference list. */
export const CONTENT_SOURCE_STATEMENT =
  "This educational resource was developed using publicly available references from trusted health, academic, and professional organizations.";

/**
 * The kinds of source this project will draw on. A category list, not a claim
 * that every record in the registry is licensed for reuse — see
 * `SOURCING_ACCURACY_NOTE` and the licensing page for what is actually recorded.
 */
export const APPROVED_SOURCE_CATEGORIES: readonly string[] = [
  "Government health agencies",
  "Public health organizations",
  "Peer-reviewed open-access research",
  "Academic institutions",
  "Professional healthcare organizations",
  "Open educational resources",
  "Publicly available clinical and patient-safety guidelines",
];

/**
 * The named sources this project reaches for first. Naming a source here means
 * it is preferred when a citation is being chosen; it does not assert that
 * every one of them is currently cited, nor that any of them endorses MedMosa.
 */
export const PREFERRED_SOURCES: readonly string[] = [
  "CDC",
  "NIH",
  "MedlinePlus",
  "National Library of Medicine",
  "WHO",
  "OpenStax",
  "AHRQ",
  "NCBI",
  "Accredited nursing and healthcare professional organizations",
  "Accredited academic institutions",
];

/* -------------------------------------------------------------------------
   Study-use notice
   ------------------------------------------------------------------------- */

/**
 * The two halves of the inline study-use notice, moved here so the notice has
 * one home like everything else on this page. Both strings are byte-identical
 * to the wording `StudyUseNotice` has always rendered: this module became the
 * source of the text without changing a character of it.
 */
export const STUDY_USE_NOTICE_LEAD = "Study material.";
export const STUDY_USE_NOTICE_BODY =
  "MedMosa is written for students and is not medical advice — never use it to diagnose or treat anyone, and check anything high-stakes against your own course materials.";
