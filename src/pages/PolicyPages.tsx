/**
 * The supporting policy pages: how content is made, where it comes from, what
 * it is not, how to reach a person, and what changed.
 *
 * These sit beside the four documents in `LegalPages.tsx` and share their
 * furniture and their rule: every factual statement is checkable against
 * something in this repository — the generated catalog, the source registry, the
 * coverage report, the import scripts, the change log — and nothing is claimed
 * that the repository cannot evidence.
 *
 * Two things this file will not do, because they would be false:
 *
 *   - describe any page as clinically or medically reviewed. Nothing here has
 *     had a credentialed clinical review, and the review-process and disclaimer
 *     pages say so in as many words;
 *   - print a review date. The repository records import and generation dates.
 *     Dressing an import date as a clinician's sign-off would be the single most
 *     misleading thing this site could do.
 *
 * Brand and disclaimer copy comes from `content/brand.ts`. Where the brand voice
 * and the evidence differ on sourcing, these pages use the evidence
 * (`SOURCING_ACCURACY_NOTE`); see that module's header for why both exist.
 */
import type { ReactNode } from "react";
import {
  APPROVED_SOURCE_CATEGORIES,
  CONTENT_SOURCE_STATEMENT,
  EXTENDED_DISCLAIMER,
  PREFERRED_SOURCES,
  SAFETY_DISCLAIMER,
  SOURCING_ACCURACY_NOTE,
} from "../content/brand";
import { Link, PageHeader } from "../components/ui";
import { LEGAL_CONTACT_ADDRESS, LEGAL_CONTACT_HREF, LEGAL_LINKS, POLICY_LINKS } from "../lib/legal";
import type { Navigate } from "../lib/navigation";

/** One date for the whole set; these pages are written and revised together. */
const LAST_UPDATED = "August 15, 2026";

/** Where the numbers on these pages come from, named so they can be checked. */
const REGISTRY_PATH = "content-v2/indexes/source-registry.json";
const CATALOG_PATH = "content-v2/catalog.json";
const COVERAGE_PATH = "_audit/coverage-report.md";

/** A correction email that arrives with its subject already filled in. */
const ERROR_REPORT_HREF = `${LEGAL_CONTACT_HREF}?subject=${encodeURIComponent("MedMosa content correction")}`;

const ContactAddress = () => <a href={LEGAL_CONTACT_HREF}>{LEGAL_CONTACT_ADDRESS}</a>;

const LastUpdated = () => (
  <dl className="legal-meta">
    <div>
      <dt>Last updated</dt>
      <dd>{LAST_UPDATED}</dd>
    </div>
  </dl>
);

/**
 * A titled section whose heading is also its accessible name, so the heading
 * outline and the landmark names cannot drift apart as these pages are edited.
 */
const PolicySection = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section className="legal-section" aria-labelledby={`${id}-title`}>
    <h2 id={`${id}-title`}>{title}</h2>
    {children}
  </section>
);

const Callout = ({ title, children, strong = false }: { title: string; children: ReactNode; strong?: boolean }) => (
  <div className={strong ? "legal-callout legal-callout-strong" : "legal-callout"} role="note">
    <p className="legal-callout-title">{title}</p>
    {children}
  </div>
);

/**
 * The index of everything else in this set, minus the page you are on, plus the
 * four primary legal documents. Every policy page ends with it, so no page is a
 * dead end and none of them has to maintain its own list of siblings.
 */
const PolicyIndex = ({ current, navigate }: { current: string; navigate: Navigate }) => (
  <nav className="legal-related" aria-labelledby="policy-index-title">
    <h2 id="policy-index-title">Other policies</h2>
    <ul>
      {POLICY_LINKS.filter(([, href]) => href !== current).map(([label, href]) => (
        <li key={href}><Link href={href} navigate={navigate}>{label}</Link></li>
      ))}
      {LEGAL_LINKS.map(([label, href]) => (
        <li key={href}><Link href={href} navigate={navigate}>{label}</Link></li>
      ))}
    </ul>
  </nav>
);

/** The closing note. Same promise the four legal documents make. */
const PolicyReviewNote = () => (
  <footer className="legal-review-note">
    <p>
      This page describes how MedMosa actually works today, not how it is meant to work one day. Where a step is not
      done, it says so rather than describing the intention. If you find a statement here that the repository does not
      support, write to <ContactAddress /> and it will be corrected.
    </p>
  </footer>
);

/* -------------------------------------------------------------------------
   Content review process
   ------------------------------------------------------------------------- */

export const ContentReviewProcessPage = ({ navigate }: { navigate: Navigate }) => (
  <article className="legal-page">
    <PageHeader
      eyebrow="About this content"
      title="Content review process"
      description="Every step this material passes through before it reaches you — and the one step it does not."
    />
    <LastUpdated />

    <PolicySection id="review-headline" title="1. The short version">
      <Callout title="No page on MedMosa has had a credentialed clinical review." strong>
        <p>
          Content here is imported from open study-note libraries and open educational resources, checked by machine
          against a schema, and published with its provenance recorded. No licensed clinician has read it, corrected it
          or signed it off. Nothing on this site is medically reviewed, and MedMosa never describes it that way.
        </p>
      </Callout>
      <p>{SOURCING_ACCURACY_NOTE}</p>
    </PolicySection>

    <PolicySection id="review-steps" title="2. What actually happens to a topic">
      <h3>Step 1 — Import, without rewriting</h3>
      <p>
        Material is imported from openly published study-note libraries and open educational resources. The import
        copies each section across as written: a heading line is removed and the surrounding blank lines are trimmed,
        and that is the whole of the transformation. Tables, lists and emphasis survive intact. Nothing is
        paraphrased, summarized or generated to fill a gap, so what you read is the source text, not a machine’s
        impression of it.
      </p>
      <p>
        The largest single import brought in 446 topic notes from 15 libraries: nine existing courses had their topic
        set replaced and six new courses were created.
      </p>

      <h3>Step 2 — Provenance is recorded, per topic</h3>
      <p>
        Every topic records the collection it came from and every reference host it cites, in a generated,
        machine-readable registry at <code>{REGISTRY_PATH}</code>. The registry holds 132 records — 36 source
        collections and 96 distinct reference hosts. A license is recorded against a source only when that exact
        license string appears in repository text for that same source; it is never inferred from a hostname or a
        publisher’s usual terms. Two records carry one.
      </p>

      <h3>Step 3 — Automated checks</h3>
      <p>
        Before anything ships, generated gates run over the corpus: schema and catalog validation, a question-quality
        check, route and link checks, a structured-data gate, a secret scan and a lint pass. These catch a malformed
        bundle, a broken route or a question missing its rationale. They cannot catch a claim that is simply wrong,
        and they are not represented as doing so.
      </p>

      <h3>Step 4 — A status, and publication</h3>
      <p>
        Each topic carries a content status. Of 1,317 topics in the library, 1,307 are <em>source-grounded</em> —
        grounded in the sources listed for them and complete enough to study — and 10 are held back for medical
        review. There are no drafts. The status schema also contains a <em>medically-reviewed</em> value; it is used
        by exactly zero topics, and the generator will not emit it.
      </p>
    </PolicySection>

    <PolicySection id="review-held" title="3. What is held back">
      <p>
        The 10 held topics are the whole of the Pharmacology Foundations course. Their source bundles are marked as
        requiring citation review, so they are withheld from study rather than published with a warning. Holding a
        medication course is the conservative call, and it is the one this project made.
      </p>
    </PolicySection>

    <PolicySection id="review-flags" title="4. Questions flagged for citation review">
      <p>
        The library holds 24,400 distinct practice questions, placed 25,000 times across courses. 5,463 of those
        placements — 4,863 distinct questions — are flagged in the source data as requiring citation review, which
        means an automated check could not find a structured citation for the question.
      </p>
      <p>
        Those questions are <strong>labeled, not hidden</strong>. A flag says the citation could not be verified; it
        does not say the question is wrong, and removing the question would remove practice material on the strength
        of a missing footnote. Each course’s figure is on its coverage card, and the total is in{" "}
        <code>{COVERAGE_PATH}</code>.
      </p>
    </PolicySection>

    <PolicySection id="review-dates" title="5. About dates">
      <p>
        The repository records two kinds of date: when material was imported, and when a generated index was last
        built. It does not record a date on which a person reviewed a topic, because no such review has happened.
      </p>
      <p>
        So no page here says “reviewed on” any date. Reusing an import date as a review date would be the easiest
        lie on this site to tell and the hardest for you to catch, and the metadata generator omits the field
        entirely rather than leave the temptation lying around.
      </p>
    </PolicySection>

    <PolicySection id="review-change" title="6. What would change this">
      <p>
        A credentialed clinical review is a real step with a real cost: a licensed practitioner reading a topic,
        recording what they checked, and putting a name and a date to it. If that ever happens, the reviewer, the
        date and the scope will be recorded per topic and shown on the page — and this section will say so. Until
        then, the honest answer is the one at the top of this page.
      </p>
    </PolicySection>

    <PolicyIndex current="/content-review" navigate={navigate} />
    <PolicyReviewNote />
  </article>
);

/* -------------------------------------------------------------------------
   Editorial policy
   ------------------------------------------------------------------------- */

export const EditorialPolicyPage = ({ navigate }: { navigate: Navigate }) => (
  <article className="legal-page">
    <PageHeader
      eyebrow="About this content"
      title="Editorial policy"
      description="The rules this project writes by, including the ones that make the site look less finished than it could."
    />
    <LastUpdated />

    <PolicySection id="editorial-principle" title="1. The governing rule">
      <p>
        <strong>Nothing is invented to fill a gap.</strong> Where material, a citation, a date or a label does not
        exist, the site says it does not exist. A missing reference list is shown as missing; a course with no
        question bank says so on its card; a metadata field with no evidence behind it is omitted rather than
        estimated.
      </p>
      <p>
        The cost is visible: coverage is uneven and several courses are obviously incomplete. The benefit is that
        nothing you read here is padding, and a gap you can see is a gap you can work around.
      </p>
    </PolicySection>

    <PolicySection id="editorial-import" title="2. Imported, not rewritten">
      <p>
        Teaching material is imported from its source and published as written. The import removes a section’s own
        heading and trims blank lines; it does not paraphrase, condense, correct or generate. Two consequences worth
        knowing about:
      </p>
      <ul>
        <li>
          The voice varies between courses, because the libraries were written by different people. That is honest
          about what this is — a compilation — rather than a house style painted over the top of other people’s work.
        </li>
        <li>
          An error in a source is an error on the site until someone reports it. Nothing here is a second opinion on
          the material it imports. See <Link href="/report-error" navigate={navigate}>Report an error</Link>.
        </li>
      </ul>
    </PolicySection>

    <PolicySection id="editorial-structure" title="3. Two registers, both from the source">
      <p>
        Most topics carry a college-level explanation and a plain-language (ELI-10) version. Both come from the
        source note’s own sections. The plain-language version is not a machine rewrite of the college-level one; where
        a source carried no plain-language section, the topic does not get one.
      </p>
      <p>
        Of 1,317 topics, 1,023 carry full college-level notes and 1,309 carry a plain-language explanation. Those
        numbers are counted from the content itself and are published per course in the coverage report.
      </p>
    </PolicySection>

    <PolicySection id="editorial-omissions" title="4. What is deliberately left out">
      <p>
        Six metadata fields that a study site would normally show are omitted, each for a recorded reason:
      </p>
      <ul>
        <li>
          <strong>Prerequisites.</strong> No topic-to-topic ordering exists anywhere in the corpus, so any
          prerequisite chain would be invented.
        </li>
        <li>
          <strong>Exam alignment.</strong> No topic, question or catalog record names an exam blueprint, competency
          code or test-plan section. MedMosa therefore claims alignment to none.
        </li>
        <li>
          <strong>Structured learning objectives.</strong> They exist as prose on the topic and are served that way.
          Splitting them into discrete objectives would mean rewriting source text.
        </li>
        <li>
          <strong>Topic tags.</strong> Questions carry tags; topics do not. Propagating question tags upward would
          attribute claims to a topic that its own text does not make.
        </li>
        <li>
          <strong>Last reviewed.</strong> There is no review to date. See{" "}
          <Link href="/content-review" navigate={navigate}>Content review process</Link>.
        </li>
        <li>
          <strong>Difficulty, below the evidence threshold.</strong> Difficulty is derived only where enough
          difficulty-bearing questions map to the topic; elsewhere it is omitted rather than guessed.
        </li>
      </ul>
    </PolicySection>

    <PolicySection id="editorial-related" title="5. Links between topics">
      <p>
        “Related topics” are computed from questions that map to more than one topic — a real, checkable relationship
        in the data. They are not generated from title similarity.
      </p>
      <p>
        The imported notes carry a “Related Topics” section of their own, but on every one of those 446 notes it holds
        only previous/next pointers and relative links to other files in the source repository. Those paths do not
        resolve to routes on this site, so they were not published as links; the section survives in the stored source
        snapshot rather than being shown as a set of broken links.
      </p>
    </PolicySection>

    <PolicySection id="editorial-never" title="6. What this site will not do">
      <ul>
        <li>Describe a page as medically or clinically reviewed. Nothing here has been.</li>
        <li>Print a review date derived from an import date.</li>
        <li>Claim alignment to an exam blueprint, or predict a score.</li>
        <li>Invent a citation, or attach a plausible-looking source to material that did not cite one.</li>
        <li>Record a license that is not written down for that exact source.</li>
        <li>Generate teaching text and present it as sourced material.</li>
      </ul>
    </PolicySection>

    <PolicySection id="editorial-corrections" title="7. Corrections">
      <p>
        A correction changes the content files the site is generated from, and the generated indexes are rebuilt with
        it, so a fix cannot land on one page and miss another. Substantive changes are described on the{" "}
        <Link href="/changelog" navigate={navigate}>changelog</Link>.
      </p>
    </PolicySection>

    <PolicyIndex current="/editorial-policy" navigate={navigate} />
    <PolicyReviewNote />
  </article>
);

/* -------------------------------------------------------------------------
   Source and citation policy
   ------------------------------------------------------------------------- */

export const SourceCitationPolicyPage = ({ navigate }: { navigate: Navigate }) => (
  <article className="legal-page">
    <PageHeader
      eyebrow="About this content"
      title="Source and citation policy"
      description="Which sources this project draws on, how citations are recorded, and how much of the library actually carries one."
    />
    <LastUpdated />

    <PolicySection id="sources-statement" title="1. The statement">
      <p>{CONTENT_SOURCE_STATEMENT}</p>
      <Callout title="Said precisely">
        <p>{SOURCING_ACCURACY_NOTE}</p>
      </Callout>
    </PolicySection>

    <PolicySection id="sources-categories" title="2. Approved source categories">
      <p>Material is drawn from these kinds of source, and no others:</p>
      <ul>
        {APPROVED_SOURCE_CATEGORIES.map((category) => <li key={category}>{category}</li>)}
      </ul>
    </PolicySection>

    <PolicySection id="sources-preferred" title="3. Preferred sources">
      <p>
        Where a choice exists, these are reached for first. Naming a source here means it is preferred when a citation
        is being chosen. It does not mean every one of them is currently cited, and none of them endorses MedMosa or
        has any connection to it.
      </p>
      <ul>
        {PREFERRED_SOURCES.map((source) => <li key={source}>{source}</li>)}
      </ul>
    </PolicySection>

    <PolicySection id="sources-registry" title="4. What the registry records">
      <p>
        Provenance lives in a generated file at <code>{REGISTRY_PATH}</code>, rebuilt from the content rather than
        maintained by hand. It holds 132 records: 36 source collections and 96 distinct reference hosts. Each record
        carries an identifier, a title taken verbatim from repository text, and — where the evidence exists — a
        provider, a URL and an import date. Every record states the evidence behind it, including where a license is
        absent.
      </p>
      <p>
        <strong>Exactly 2 of the 132 records carry an explicit license</strong>, both Creative Commons Attribution 4.0
        International: <code>openstax.org</code> and <code>opentextbc.ca</code>, for <em>Anatomy and Physiology 2e</em>.
        Everything else has no license recorded, which is a statement of evidence rather than an oversight — a license
        is written down only where that exact string appears in repository text for that same source, never inferred
        from a hostname, a domain or an organization’s usual terms. The full attribution statement and the notice and
        takedown route are on{" "}
        <Link href="/licensing" navigate={navigate}>Licensing and attribution</Link>.
      </p>
    </PolicySection>

    <PolicySection id="sources-coverage" title="5. How much of the library carries a citation">
      <p>
        This is the number most study sites do not publish, so here it is plainly. Counted from{" "}
        <code>{CATALOG_PATH}</code>:
      </p>
      <ul>
        <li>
          <strong>825 of 1,317 topics</strong> carry a reference list. <strong>492 do not</strong>, and 17 of the 39
          courses have no topic-level references at all.
        </li>
        <li>
          Most of that gap is the 446 imported study notes: none of those source notes carries a sources section, so
          every one of those topics reports “no references” rather than borrowing a bibliography from a neighboring
          topic.
        </li>
        <li>
          A topic with no reference list is not hidden. It says it has none, and its course coverage card counts it.
        </li>
      </ul>
    </PolicySection>

    <PolicySection id="sources-questions" title="6. Citations on practice questions">
      <p>
        Of 25,000 question placements across the library — 24,400 distinct questions — 5,463 placements, covering
        4,863 distinct questions, are flagged as requiring citation review. The flag means an automated check could
        not find a structured citation for that question. It does not mean the question is wrong.
      </p>
      <p>
        Flagged questions are shown and labeled during practice rather than withheld, and every course states how
        many of its questions carry the flag.
      </p>
    </PolicySection>

    <PolicySection id="sources-report" title="7. If a citation is wrong or missing">
      <p>
        Missing and misattributed citations are the most useful thing anyone reports here, because they are precise
        and they are fixable. Write to <ContactAddress />, or see{" "}
        <Link href="/report-error" navigate={navigate}>Report an error</Link> for what to include.
      </p>
    </PolicySection>

    <PolicyIndex current="/source-citation-policy" navigate={navigate} />
    <PolicyReviewNote />
  </article>
);

/* -------------------------------------------------------------------------
   Medical disclaimer
   ------------------------------------------------------------------------- */

export const MedicalDisclaimerPage = ({ navigate }: { navigate: Navigate }) => (
  <article className="legal-page">
    <PageHeader
      eyebrow="About this content"
      title="Medical disclaimer"
      description="What this material is for, what it must never be used for, and what has not been checked."
    />
    <LastUpdated />

    <PolicySection id="disclaimer-statement" title="1. The disclaimer">
      <Callout title="MedMosa is study material. It is not medical advice." strong>
        <p>{SAFETY_DISCLAIMER}</p>
      </Callout>
    </PolicySection>

    <PolicySection id="disclaimer-emergency" title="2. In an emergency">
      <p>
        <strong>Stop reading and get help.</strong> If you or anyone else may be having a medical emergency, call your
        local emergency number or go to the nearest emergency department. Never delay seeking professional help
        because of something you read here.
      </p>
    </PolicySection>

    <PolicySection id="disclaimer-review" title="3. Nothing here is clinically reviewed">
      <p>
        No content on MedMosa has had a credentialed clinical review. No licensed practitioner has read, corrected or
        signed off any page, and no page carries a reviewer’s name or a review date, because there is none to carry.
      </p>
      <p>
        Material is imported from open educational sources with its provenance recorded, and it is reviewed against
        those sources — not against a clinician’s judgment. The full account is on{" "}
        <Link href="/content-review" navigate={navigate}>Content review process</Link>.
      </p>
    </PolicySection>

    <PolicySection id="disclaimer-currency" title="4. Guidance changes">
      <Callout title="Check current standards">
        <p>{EXTENDED_DISCLAIMER}</p>
      </Callout>
      <p>
        This matters most on medication, dosage, procedure, emergency-response and patient-care material, where a
        reference range or a protocol that was current when a source was written may since have been superseded.
        Anything on this site that touches those subjects is the version its source recorded, not the version your
        institution uses today.
      </p>
    </PolicySection>

    <PolicySection id="disclaimer-scope" title="5. Scope of practice is not ours to define">
      <p>
        What you personally may delegate, accept, document or perform is set by the rules where you practice, by your
        employer and by your program — not by this site, and not by the source note a topic came from. Treat
        everything here as a general study model and verify against your own board, regulator, program and employer
        before acting on any of it.
      </p>
    </PolicySection>

    <PolicySection id="disclaimer-exams" title="6. Not exam content">
      <p>
        MedMosa is not affiliated with, endorsed by or sponsored by any testing organization, school, certifying body
        or licensing board. Practice here is practice with the underlying subject matter: it does not simulate any
        exam, predict a score, or indicate that you are ready to sit one. The full statement is in the{" "}
        <Link href="/terms" navigate={navigate}>Terms of Use</Link>.
      </p>
    </PolicySection>

    <PolicyIndex current="/medical-disclaimer" navigate={navigate} />
    <PolicyReviewNote />
  </article>
);

/* -------------------------------------------------------------------------
   Contact
   ------------------------------------------------------------------------- */

export const ContactPage = ({ navigate }: { navigate: Navigate }) => (
  <article className="legal-page">
    <PageHeader
      eyebrow="About this content"
      title="Contact"
      description="One address, read by one person, for corrections, rights notices, privacy questions and accessibility reports."
    />
    <LastUpdated />

    <PolicySection id="contact-address" title="1. How to reach us">
      <p className="legal-contact-address"><ContactAddress /></p>
      <p>
        That is the whole of it: no form, no phone number, no ticket queue and no chat widget. MedMosa is published as
        static files with no server of its own, so a contact form here would have nothing to post to. One address that
        works beats four that do not.
      </p>
    </PolicySection>

    <PolicySection id="contact-what" title="2. What this address handles">
      <ul>
        <li>
          <strong>Content corrections</strong> — an error, a stale guideline, a missing or misattributed citation, a
          broken link. See <Link href="/report-error" navigate={navigate}>Report an error</Link> for what to include.
        </li>
        <li>
          <strong>Rights notices and takedown requests</strong> — use the subject line “Rights notice” and follow the
          procedure on <Link href="/licensing" navigate={navigate}>Licensing and attribution</Link>.
        </li>
        <li>
          <strong>Accessibility barriers</strong> — use the subject line “Accessibility”. See the{" "}
          <Link href="/accessibility" navigate={navigate}>Accessibility Statement</Link>.
        </li>
        <li>
          <strong>Privacy questions</strong> — though the{" "}
          <Link href="/privacy" navigate={navigate}>Privacy Policy</Link> answers most of them, because nothing is
          collected.
        </li>
        <li>
          <strong>Reuse requests</strong> — if you want to use a substantial part of this site somewhere else, ask.
          The answer is often yes.
        </li>
      </ul>
    </PolicySection>

    <PolicySection id="contact-not" title="3. What this address cannot do">
      <Callout title="No clinical or academic advice" strong>
        <p>
          Questions about a patient, a symptom, a medication, a treatment decision or anything else clinical cannot be
          answered here, and should not be sent here. MedMosa is not a healthcare provider, and nobody reading this
          address is acting as one. In an emergency, call your local emergency number.
        </p>
      </Callout>
      <p>
        Nor is it a tutoring service, a grading appeal, an admissions adviser, or a route to official exam content.
        Course-specific questions belong with your instructor, who knows what your program actually requires.
      </p>
    </PolicySection>

    <PolicySection id="contact-expect" title="4. What to expect">
      <ul>
        <li>Messages are acknowledged within <strong>5 business days</strong>.</li>
        <li>
          A clear content correction is usually made before it is discussed. A barrier that blocks access to study
          material is treated as the most serious class of defect on this site, ahead of new content.
        </li>
        <li>
          This is a free project maintained by one person. Nothing is ignored, but nothing is instant either, and no
          service level is promised beyond the acknowledgment above.
        </li>
      </ul>
    </PolicySection>

    <PolicyIndex current="/contact" navigate={navigate} />
    <PolicyReviewNote />
  </article>
);

/* -------------------------------------------------------------------------
   Report an error
   ------------------------------------------------------------------------- */

export const ReportErrorPage = ({ navigate }: { navigate: Navigate }) => (
  <article className="legal-page">
    <PageHeader
      eyebrow="About this content"
      title="Report an error"
      description="Found something wrong? Here is exactly how to tell us, and what to put in the message."
    />
    <LastUpdated />

    <PolicySection id="report-how" title="1. Send an email">
      <p>
        <a className="button" href={ERROR_REPORT_HREF}>Email a correction</a>
      </p>
      <p>
        That link opens a message to <ContactAddress /> with the subject line already filled in. If your device does
        not open mail from a link, write to the same address by hand.
      </p>
      <Callout title="There is no form on this page, on purpose">
        <p>
          MedMosa is published as static files with no server and no form handler behind it. A form here would look
          like it worked, thank you politely, and drop your report on the floor — which is worse than no form at all.
          The email link goes to an address a person reads.
        </p>
      </Callout>
    </PolicySection>

    <PolicySection id="report-include" title="2. What to include">
      <p>
        A one-line report is far better than none. But the more of this you can give, the faster it is fixed:
      </p>
      <ol>
        <li>
          <strong>The page.</strong> Paste the address from your browser, or name the course and topic.
        </li>
        <li>
          <strong>The exact text.</strong> Copy the sentence, the question or the answer option as it appears. This
          matters most — a topic can run to thousands of words, and the quoted line finds it immediately.
        </li>
        <li>
          <strong>What is wrong.</strong> Factually incorrect, out of date, contradicts another page, wrong answer
          key, broken link, missing citation, unreadable formatting.
        </li>
        <li>
          <strong>What it should say</strong>, if you know — and a source, if you have one. A link to a current
          guideline or a textbook page turns a report into a fix.
        </li>
        <li>
          <strong>Your browser and device</strong>, but only for a display, layout or read-aloud problem.
        </li>
      </ol>
    </PolicySection>

    <PolicySection id="report-known" title="3. Things already known">
      <p>
        Some gaps are already counted, and reporting them again is not needed — though a specific instance always is:
      </p>
      <ul>
        <li>
          <strong>Questions flagged for citation review.</strong> 5,463 of 25,000 question placements are flagged
          because an automated check could not find a structured citation. They are labeled during practice rather
          than hidden. A flagged question that is actually <em>wrong</em> is very much worth reporting.
        </li>
        <li>
          <strong>Topics with no reference list.</strong> 492 of 1,317 topics carry none, because their source notes
          carried none. See <Link href="/source-citation-policy" navigate={navigate}>Source and citation policy</Link>.
        </li>
        <li>
          <strong>Courses with no question bank, or no college-level notes.</strong> Coverage is uneven and each
          course card states what it has.
        </li>
        <li>
          <strong>Nothing is clinically reviewed.</strong> That is a known, stated limitation rather than a defect —
          see <Link href="/content-review" navigate={navigate}>Content review process</Link>.
        </li>
      </ul>
    </PolicySection>

    <PolicySection id="report-next" title="4. What happens next">
      <ul>
        <li>Your report is acknowledged within <strong>5 business days</strong>.</li>
        <li>
          A clear factual error is corrected in the content files the site is generated from, so the fix reaches every
          page that shares the material rather than the one you happened to be reading.
        </li>
        <li>
          Where a report is not clear-cut, you get a written answer explaining the position rather than silence.
        </li>
        <li>
          Substantive changes are summarized on the <Link href="/changelog" navigate={navigate}>changelog</Link>.
        </li>
      </ul>
      <p>
        A safety-relevant error — anything that could lead a learner to a harmful conclusion about a medication, a
        dosage or a procedure — jumps the queue.
      </p>
    </PolicySection>

    <PolicyIndex current="/report-error" navigate={navigate} />
    <PolicyReviewNote />
  </article>
);

/* -------------------------------------------------------------------------
   Changelog
   ------------------------------------------------------------------------- */

interface ChangelogEntry {
  readonly date: string;
  readonly title: string;
  readonly body: string;
}

/**
 * Summarised for a public audience from the repository's own change log at
 * `_audit/implementation-change-log.md`, newest first. Every entry corresponds
 * to a row in that log, except the study-note import, which is evidenced by the
 * six new courses in `content-v2/catalog.json`, the dated import batch in the
 * importer, and the regenerated coverage report. Nothing here is invented, and
 * no entry is dated other than as the repository dates it.
 */
const CHANGELOG_ENTRIES: readonly ChangelogEntry[] = [
  {
    date: "15 August 2026",
    title: "446 study notes imported across 15 libraries",
    body:
      "Nine existing courses had their topic set replaced and six new ones were created: CNA Exam Preparation, Fundamentals of Nursing Practice, General Ecology, Human Physiology I, Human Physiology II and Introduction to Psychology. The notes are published as written. None of those source notes carries a sources section, so every one of those topics reports that it has no references rather than borrowing one. Existing practice questions were re-pointed at the new topics only where the match was unambiguous; the rest stayed reachable through course-wide practice instead of being dropped.",
  },
  {
    date: "15 August 2026",
    title: "New pages wired up, and a much smaller metadata payload",
    body:
      "Content coverage, the review queue, study paths and the four legal documents became real routes, so a direct link to one now lands on the page instead of the 404 shell. Two module import cycles were removed, and the topic metadata file was re-encoded 88% smaller — a real difference on a phone — with the decoded output proven byte-identical for every topic.",
  },
  {
    date: "15 August 2026",
    title: "Search-engine markup narrowed on purpose",
    body:
      "Structured data is now limited to the site, breadcrumb and list types. Course, quiz, question and medical types were deliberately declined: they assert things about credentials, alignment and review that this library cannot evidence. A stale search action was removed from the page shell because the search page never read it.",
  },
  {
    date: "15 August 2026",
    title: "Legal layer published",
    body:
      "Terms of use, privacy policy, licensing and attribution, and an accessibility statement, plus the study-use notice that appears on every topic page. The licensing wording deliberately stops short of calling every source openly licensed, because only two records in the source registry carry an explicit license.",
  },
  {
    date: "15 August 2026",
    title: "Read-aloud, and better search",
    body:
      "Read-aloud uses the speech engine already built into your browser: no network call, no cloud voice, no autoplay, and nothing stored except the playback speed you choose. Search gained a 39-entry medical synonym map matched on whole words, plus deterministic ranking and filtering across the whole curriculum index.",
  },
  {
    date: "15 August 2026",
    title: "Study paths and a local planner",
    body:
      "Five paths — pre-health foundations, healthcare foundations, allied health, pathophysiology and MCAT foundations — with membership computed from the catalog rather than hand-listed, and a planner that works from your target date, days per week and minutes per day. Each path publishes its own limitations, including that the MCAT path is built from the course of that name and not from the MCAT blueprint, which this project does not have.",
  },
  {
    date: "15 August 2026",
    title: "Calculation questions are graded properly",
    body:
      "The 310 questions that ask for a computed value are now checked against the value and tolerance recorded with the question, across a reviewed table of 30 units. Two unit symbols were left out because they collide when letter case is ignored, which would have marked correct answers wrong.",
  },
  {
    date: "15 August 2026",
    title: "Practice and review",
    body:
      "Per-topic mastery tracking and a spaced-repetition review queue on a 1, 3, 7, 14, 30 and 60-day ladder, plus a weak-topic list and a review summary. All of it is computed in your browser from your own stored progress. Nothing is uploaded and no account is required.",
  },
  {
    date: "15 August 2026",
    title: "Topic pages rebuilt",
    body:
      "Every topic now opens on its college-level explanation with the plain-language version one tab away, and carries topic facts, the source records behind it, related topics and a read-aloud control. Prerequisite chains and exam-relevance labels were considered and not built, because the content holds no topic ordering and names no exam blueprint — either would have had to be invented.",
  },
  {
    date: "15 August 2026",
    title: "Content coverage and provenance published",
    body:
      "A generated source registry recording where each topic's material came from, a per-topic metadata sidecar, and a per-course coverage report showing how much of each course has notes, plain-language explanations, references and questions — and how many of its questions are flagged for citation review. Six metadata fields were left out rather than guessed, each with a recorded reason.",
  },
];

export const ChangelogPage = ({ navigate }: { navigate: Navigate }) => (
  <article className="legal-page">
    <PageHeader
      eyebrow="About this content"
      title="Changelog"
      description="What has actually changed on this site, newest first."
    />
    <LastUpdated />

    <PolicySection id="changelog-scope" title="1. What this list is">
      <p>
        A plain summary of the changes recorded in this project’s own change log. It covers what a learner would
        notice: pages, study tools, content and the statements the site makes about itself. It is not a commit
        history, and it does not list every internal refactor.
      </p>
      <p>
        Every entry below carries the date the repository records for it. This version of the site was built in a
        single stretch of work, so those dates are all the same day; they are shown per entry anyway rather than
        rounded into a vague “recently”.
      </p>
    </PolicySection>

    <PolicySection id="changelog-entries" title="2. Changes">
      <ul className="legal-changelog">
        {CHANGELOG_ENTRIES.map((entry) => (
          <li key={entry.title}>
            <p className="legal-changelog-date">{entry.date}</p>
            <p className="legal-changelog-title">{entry.title}</p>
            <p>{entry.body}</p>
          </li>
        ))}
      </ul>
    </PolicySection>

    <PolicySection id="changelog-unchanged" title="3. What has not changed">
      <p>
        No content on this site has had a credentialed clinical review, and no release above added one. If that ever
        changes it will be the headline entry on this page, and{" "}
        <Link href="/content-review" navigate={navigate}>Content review process</Link> will say so first.
      </p>
    </PolicySection>

    <PolicyIndex current="/changelog" navigate={navigate} />
    <PolicyReviewNote />
  </article>
);
