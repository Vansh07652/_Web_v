/**
 * The legal, privacy, licensing and accessibility layer.
 *
 * Four documents, one file, because they share their furniture and they have to
 * agree with each other. Every factual statement below is checkable against
 * something in this repository — the source registry, the catalog totals, the
 * progress store, the speech controller — and nothing is claimed that the
 * repository cannot evidence. Where the evidence stops, the text says so
 * instead of rounding up. See `docs/legal-and-licensing.md` for the claim map.
 */
import type { ReactNode } from "react";
import { Link, PageHeader } from "../components/ui";
import type { Navigate } from "../lib/navigation";
import { LEGAL_CONTACT_ADDRESS, LEGAL_CONTACT_HREF } from "../lib/legal";

/** One date and one version line for all four documents; they ship together. */
const LAST_UPDATED = "August 15, 2026";
const DOCUMENT_VERSION = "1.0";

/**
 * One contact route for corrections, rights notices, privacy questions and
 * accessibility reports. The address itself lives in `lib/legal.ts` so the
 * policy pages and this file cannot drift apart: four addresses are four things
 * to keep alive, and a policy that points at a dead address is worse than one
 * that points at a busy one.
 */
const CONTACT_ADDRESS = LEGAL_CONTACT_ADDRESS;
const CONTACT_HREF = LEGAL_CONTACT_HREF;

/** The generated registry every licensing claim on this site is drawn from. */
const REGISTRY_PATH = "content-v2/indexes/source-registry.json";

const CC_BY_URL = "https://creativecommons.org/licenses/by/4.0/";

const ContactAddress = () => <a href={CONTACT_HREF}>{CONTACT_ADDRESS}</a>;

const DocumentMeta = ({ version = DOCUMENT_VERSION }: { version?: string }) => (
  <dl className="legal-meta">
    <div>
      <dt>Last updated</dt>
      <dd>{LAST_UPDATED}</dd>
    </div>
    <div>
      <dt>Version</dt>
      <dd>{version}</dd>
    </div>
  </dl>
);

/**
 * A titled section whose heading is also its accessible name. Pairing the two
 * here rather than at each call site is what keeps `aria-labelledby` from
 * drifting off its heading as the documents are edited.
 */
const LegalSection = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
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
 * The closing note. Every one of these documents is written by the person who
 * built the site, not by a lawyer, and saying so is part of being accurate.
 */
const LegalReviewNote = () => (
  <footer className="legal-review-note">
    <p>
      This document is a good-faith, plain-English description of how MedMosa actually works. It is written to be
      accurate rather than defensive, and it is not legal advice. Before MedMosa is relied on commercially — sold,
      licensed, bundled into a paid product, or used as the basis of a contractual promise — a licensed attorney in the
      relevant jurisdiction should review it and adapt it.
    </p>
  </footer>
);

/* -------------------------------------------------------------------------
   Terms of Use
   ------------------------------------------------------------------------- */

export function TermsPage({ navigate }: { navigate: Navigate }) {
  return (
    <article className="legal-page">
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        description="What MedMosa is, what it is not, and the terms you accept by using it."
      />
      <DocumentMeta />

      <LegalSection id="terms-acceptance" title="1. Acceptance">
        <p>
          MedMosa is a free educational website published at <code>https://medmosa.org</code> by Vansh Tiwari (“the site
          owner”). By reading, searching, practicing on or otherwise using this site, you accept these terms. If you do
          not accept them, please do not use the site.
        </p>
        <p>
          These terms apply to everyone who uses MedMosa. No account is required to use it, so acceptance is by use
          rather than by signature.
        </p>
      </LegalSection>

      <LegalSection id="terms-medical" title="2. Medical disclaimer — read this first">
        <Callout title="MedMosa is study material. It is not medical advice." strong>
          <p>
            Nothing on this site is a medical opinion, a diagnosis, a treatment plan, a dosing instruction, or a clinical
            recommendation for any person.
          </p>
        </Callout>
        <ul>
          <li>
            It is written for students learning health science. It is not written for patients, and it is not written
            for practitioners making decisions at the bedside.
          </li>
          <li>
            It is not a substitute for professional clinical judgment, for your institution’s protocols, or for the
            instruction and supervision of a qualified educator or clinician.
          </li>
          <li>
            It must never be used to diagnose, assess, treat, medicate or manage any person, including yourself.
          </li>
          <li>
            Dosage, calculation, procedure and protocol material is here so you can practice the arithmetic and the
            reasoning an exam asks for. It is not a clinical reference and must not be used to make a real dosing or
            treatment decision.
          </li>
          <li>
            <strong>In an emergency, stop reading and get help.</strong> If you or anyone else may be having a medical
            emergency, call your local emergency number or go to the nearest emergency department. Never delay seeking
            professional help because of something you read here.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="terms-relationship" title="3. No professional relationship">
        <p>
          Using MedMosa creates no professional relationship of any kind between you and the site owner — no
          clinician-patient relationship, no therapeutic relationship, no advisory relationship, and no formal
          instructor-student relationship. Nobody at MedMosa is supervising your study, assessing your competence,
          confirming your readiness, or accepting responsibility for your academic or clinical decisions.
        </p>
      </LegalSection>

      <LegalSection id="terms-accuracy" title="4. Accuracy, currency and review status">
        <p>
          MedMosa is provided “as is”, with no warranty of accuracy, completeness, currency or fitness for any purpose,
          express or implied. Two points are stated openly here rather than buried.
        </p>

        <h3>No credentialed clinical review</h3>
        <p>
          Nothing in this project evidences a review by a credentialed clinician. No page on MedMosa is medically
          reviewed, and MedMosa does not describe any page that way. Explanations are compiled and edited from the
          sources cited on each topic; they have not been signed off by a licensed practitioner.
        </p>

        <h3>Citation review flags</h3>
        <p>
          The curriculum holds 24,400 unique practice questions, placed 25,000 times across topics. 5,463 of those
          placements are flagged in the source data as requiring citation review. That flag means an automated check
          could not verify a structured citation for the question. It does not by itself mean the question is wrong, but
          it does mean the question has not been traced back to a verified reference.
        </p>

        <h3>Health science moves</h3>
        <p>
          A guideline, a reference range or a recommended protocol that was current when a source was written may since
          have been superseded. Check anything that matters against your current course materials, your
          institution’s protocols, and the primary source. Where you find something stale or wrong, please tell us —
          see <Link href="/licensing" navigate={navigate}>Licensing and attribution</Link> for the correction route.
        </p>
      </LegalSection>

      <LegalSection id="terms-jurisdiction" title="5. Jurisdiction, scope of practice and certification">
        <p>
          Material touching law, regulation, delegation, scope of practice, licensure, documentation and certification
          varies by country, state or province, employer, setting and role — and it changes.
        </p>
        <p>
          Nothing here tells you what you personally are permitted to do. What a nursing assistant, medical assistant,
          paramedic, nurse, technician or student may delegate, accept, document or perform is set by the rules that
          apply where you practice and by your employer’s policies. Certification requirements, testing rules and
          renewal cycles are set by the certifying body, not by this site. Treat MedMosa’s version as a general
          study model, and verify against your own board, regulator, program and employer before acting on any of it.
        </p>
      </LegalSection>

      <LegalSection id="terms-exams" title="6. Exam names and trademarks">
        <p>
          MedMosa refers to standardized exams by name — including TEAS, HESI, NCLEX and MCAT — only to describe the
          subject matter students study for. Those names are the trademarks of their respective owners: TEAS of
          Assessment Technologies Institute, LLC; HESI of Elsevier; NCLEX of the National Council of State Boards of
          Nursing, Inc.; and MCAT of the Association of American Medical Colleges.
        </p>
        <Callout title="No affiliation, endorsement or sponsorship">
          <p>
            MedMosa is not affiliated with, endorsed by, sponsored by or approved by any testing organization, test
            publisher, school, certifying body or licensing board.
          </p>
        </Callout>
        <p>
          MedMosa claims no alignment to any official test blueprint, content outline or scoring model. Practice here is
          practice with the underlying subject matter. It does not simulate any exam, it does not predict a score, and it
          does not indicate that you are ready to sit one.
        </p>
      </LegalSection>

      <LegalSection id="terms-use" title="7. Acceptable use">
        <p>
          You are welcome to read, search, study, print pages for your own use, and link to anything here. Teachers are
          welcome to point a class at it. What follows is not permitted.
        </p>
        <ul>
          <li>
            Automated scraping, crawling or bulk downloading of the site or its content files, beyond ordinary search
            engine indexing.
          </li>
          <li>
            Bulk redistribution of the content, whether or not you charge for it, where doing so would breach the terms
            of an upstream source. Most of the source material is not MedMosa’s to relicense — see{" "}
            <Link href="/licensing" navigate={navigate}>Licensing and attribution</Link>.
          </li>
          <li>Stripping attribution, source citations or these notices from material you reuse.</li>
          <li>
            Presenting MedMosa’s material as clinical guidance, as official exam content, or as your own original
            work.
          </li>
          <li>Anything that interferes with the operation of the site or with other people’s use of it.</li>
        </ul>
      </LegalSection>

      <LegalSection id="terms-liability" title="8. Limitation of liability and indemnity">
        <p>
          MedMosa is free. It is offered in good faith, with no revenue attached to it and no promise that it is correct.
          What that means in practice, said plainly:
        </p>
        <ul>
          <li>
            To the fullest extent the law allows, the site owner is not liable for any loss that follows from using this
            site or relying on anything in it — including exam results, grades, admissions or employment outcomes, or
            harm to any person.
          </li>
          <li>
            Some jurisdictions do not allow certain exclusions of liability. Nothing here attempts to exclude liability
            for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be
            excluded. Where an exclusion is not permitted, the site owner’s liability is limited to the smallest
            amount the law allows.
          </li>
          <li>
            If your own use of MedMosa causes a claim against the site owner — for example because you republished source
            material in breach of these terms or of an upstream license — you agree to cover the reasonable costs of
            dealing with that claim.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="terms-changes" title="9. Changes to these terms">
        <p>
          These terms will change as the site changes. The “Last updated” date and the version number at the top of this
          page change with them, and a material change is described on this page rather than made silently. Continuing to
          use MedMosa after a change means you accept the revised terms.
        </p>
      </LegalSection>

      <LegalSection id="terms-contact" title="10. Contact and corrections">
        <p>
          Corrections are welcome and are the fastest way to make this material better. If you find an error, a stale
          guideline, an unattributed source or a broken citation, write to <ContactAddress /> and say which page it is on.
        </p>
        <p>
          Rights holders should use the notice and takedown procedure on the{" "}
          <Link href="/licensing" navigate={navigate}>Licensing and attribution</Link> page. Privacy questions are
          answered in the <Link href="/privacy" navigate={navigate}>Privacy Policy</Link>, and accessibility barriers
          should be reported through the{" "}
          <Link href="/accessibility" navigate={navigate}>Accessibility Statement</Link>.
        </p>
      </LegalSection>

      <LegalReviewNote />
    </article>
  );
}

/* -------------------------------------------------------------------------
   Privacy Policy
   ------------------------------------------------------------------------- */

export function PrivacyPage({ navigate }: { navigate: Navigate }) {
  return (
    <article className="legal-page">
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="What MedMosa stores, where it stores it, and why there is nothing on a server to ask for."
      />
      <DocumentMeta />

      <LegalSection id="privacy-summary" title="1. The short version">
        <ul>
          <li>No cookies, no analytics, no advertising, no trackers, and no third-party scripts, fonts or stylesheets.</li>
          <li>Your study progress is stored in your own browser, under three named keys, and is not sent anywhere.</li>
          <li>The whole site works without an account, and there is no account to make.</li>
          <li>Because nothing is collected, there is nothing on a server for you to export, correct or have erased.</li>
        </ul>
      </LegalSection>

      <LegalSection id="privacy-storage" title="2. What is stored in your browser">
        <p>
          MedMosa writes to your browser’s <code>localStorage</code>. Nothing is written to a cookie, and nothing is
          transmitted off your device. Three keys exist.
        </p>
        <dl className="legal-keys">
          <div>
            <dt><code>medmosa.progress.v1</code></dt>
            <dd>
              Your study progress. Per calendar day: minutes studied, questions answered, answers correct. Per topic: the
              day you first opened it, plus mastery counters (times opened, attempts, correct, current streak). Per
              course: topics viewed, questions answered, answers correct. Per question: attempts, misses, the last
              result, and the interval used to schedule it for review.
            </dd>
          </div>
          <div>
            <dt><code>medmosa.plan.v1</code></dt>
            <dd>
              The study plan settings you entered: which study path, your target date, days per week, minutes per day,
              any focus courses you picked, and an optional confidence setting.
            </dd>
          </div>
          <div>
            <dt><code>medmosa.speech-rate.v1</code></dt>
            <dd>One number: the playback speed you chose for read-aloud.</dd>
          </div>
        </dl>
        <p>
          Two older progress keys, <code>medmosaic.progress.v1</code> and <code>study-compass.progress.v1</code>, are
          still read and migrated to the current key on the next write, so renaming a key at a rebrand does not silently
          erase anyone’s streak.
        </p>
        <p>
          None of these hold your name, your email address, free text you typed, an answer in your own words, a device
          identifier, an IP address, or a timestamp finer than a calendar day. Dates are day keys in your own time zone,
          so “today” means your today.
        </p>
        <p>
          If your browser refuses storage — private browsing modes often do — MedMosa keeps the same counters in memory
          for the session and then forgets them. Nothing breaks, and nothing is written.
        </p>
      </LegalSection>

      <LegalSection id="privacy-none" title="3. What MedMosa does not do">
        <ul>
          <li>
            <strong>No cookies.</strong> The site sets none, for any purpose, so there is no consent banner to click
            through.
          </li>
          <li><strong>No analytics or telemetry.</strong> No page-view counting, no session recording, no heatmaps.</li>
          <li><strong>No advertising.</strong> No ad network, no ad identifiers, no retargeting.</li>
          <li><strong>No trackers, pixels or social widgets.</strong></li>
          <li>
            <strong>No third-party scripts, fonts or stylesheets.</strong> Pages load only files served from MedMosa
            itself, and text is set in fonts already installed on your device.
          </li>
          <li>
            <strong>No selling or sharing.</strong> There is no personal information to sell, share, rent or disclose,
            and none is.
          </li>
        </ul>
        <p>
          MedMosa is published as static files with no application server of its own, so there is no MedMosa profile,
          account record or study history held on a server. Your hosting provider and your network will keep the ordinary
          web server and connection logs they keep for every website; that is outside MedMosa’s control, and MedMosa
          does not read, receive or use them.
        </p>
      </LegalSection>

      <LegalSection id="privacy-accounts" title="4. Accounts, and the optional sync that is switched off">
        <p>
          You do not need an account. There is no registration wall, no email capture and no newsletter.
        </p>
        <p>
          The code does contain an optional account sync, built on Supabase, for people who would want progress on two
          devices. <strong>It is dormant.</strong> Unless a build is configured with Supabase credentials, the app treats
          authentication as unconfigured, renders no sign-in control at all, and makes no request to it. No sign-in
          option is shown that cannot work.
        </p>
        <p>If a deployment ever enabled it, and you chose to sign in, then — and only then:</p>
        <ul>
          <li>Your identity would come from the sign-in provider you chose. MedMosa would hold no password of its own.</li>
          <li>
            What would be uploaded is the study progress object described above, stored as one row keyed to your account
            identifier and protected by row-level security, so only your own signed-in session could read it. The first
            upload from a browser that already holds local progress carries that stored object as it stands, including
            the mastery and review-scheduling counters kept alongside it.
          </li>
          <li>
            Records merged between two devices are reduced to day counters, topics opened and per-course totals.
          </li>
          <li>Signing in would be your choice, and declining would leave the entire site usable.</li>
        </ul>
        <p>This page will be updated before any deployment that enables it goes live.</p>
      </LegalSection>

      <LegalSection id="privacy-speech" title="5. Read-aloud">
        <p>
          The read-aloud control uses <code>speechSynthesis</code>, the speech engine already built into your browser.
          MedMosa opens no connection and loads no third-party script to make it work, so lesson text is not sent to any
          service by MedMosa, and nothing records that you pressed play. Nothing ever starts speaking on its own.
        </p>
        <p>
          The honest caveat: some operating systems synthesize speech entirely on the device, and some use a platform
          voice that the operating system itself fetched or downloaded. Which voices exist, and how your platform
          produces them, is your operating system’s business and outside this site’s reach. What MedMosa
          controls — and does — is making no network call of its own for speech, choosing no cloud voice, and storing
          nothing about what was read apart from the playback speed.
        </p>
      </LegalSection>

      <LegalSection id="privacy-search" title="6. Search">
        <p>
          Search runs entirely in your browser, against an index that ships with the site. Your search terms are not
          sent anywhere, are not logged, and are not stored.
        </p>
      </LegalSection>

      <LegalSection id="privacy-children" title="7. Children’s privacy">
        <p>
          MedMosa is built for college-level and pre-health students and is not directed at children under 13. It
          collects no personal information from anyone of any age, so there is no personal information about a child for
          MedMosa to hold, sell, share or disclose.
        </p>
        <p>
          Progress kept in a browser stays on that device and can be cleared at any time by the person using it, or by a
          parent or guardian, using the controls in the next section.
        </p>
      </LegalSection>

      <LegalSection id="privacy-control" title="8. Your control">
        <p>The stored data is yours, on your device, and you can remove it in four ways.</p>
        <ul>
          <li>
            <strong>Reset from inside the site.</strong> The study dashboard carries a “Reset my progress” control that
            deletes the stored progress entry, including the older keys.
          </li>
          <li>
            <strong>Clear site data in your browser.</strong> Clearing site data or storage for this site in your browser
            settings removes every key listed above.
          </li>
          <li>
            <strong>Use a private window.</strong> Nothing survives once you close it.
          </li>
          <li>
            <strong>Block storage entirely.</strong> The site still works; it simply forgets between sessions.
          </li>
        </ul>
        <p>
          You can also read the stored values yourself in your browser’s developer tools. There is nothing in them
          that you did not create by studying.
        </p>
      </LegalSection>

      <LegalSection id="privacy-rights" title="9. Data protection rights">
        <p>
          Regimes such as the GDPR in the European Union and the United Kingdom, and the CCPA and CPRA in California,
          give people rights over personal information a business holds: access, correction, deletion, portability, and
          the right to opt out of sale or sharing.
        </p>
        <p>
          <strong>MedMosa satisfies these by design rather than by request.</strong> It collects no personal information,
          holds no user records, builds no profiles, and sells or shares nothing — so there is no file to access, correct,
          port or delete, and nothing to opt out of. The deletion control that matters is the one in your own browser,
          described above, and it is immediate and complete.
        </p>
        <p>
          Said honestly: that is a description of how the site is built, not a claim of formal certification. No regulator
          has assessed MedMosa, no third party has audited these statements, and no compliance seal is claimed. If you
          think something here is inaccurate, write to <ContactAddress /> and it will be corrected.
        </p>
      </LegalSection>

      <LegalSection id="privacy-changes" title="10. Changes and contact">
        <p>
          If MedMosa ever stores something new, sends something somewhere, or enables the optional account sync, this
          page changes first and the “Last updated” date changes with it. A change that affects what leaves your device
          will be described in plain terms, not folded silently into an unrelated edit.
        </p>
        <p>
          Questions about anything on this page: <ContactAddress />. See also the{" "}
          <Link href="/terms" navigate={navigate}>Terms of Use</Link>.
        </p>
      </LegalSection>

      <LegalReviewNote />
    </article>
  );
}

/* -------------------------------------------------------------------------
   Content Licensing and Attribution
   ------------------------------------------------------------------------- */

export function LicensingPage({ navigate }: { navigate: Navigate }) {
  return (
    <article className="legal-page">
      <PageHeader
        eyebrow="Legal"
        title="Content Licensing and Attribution"
        description="Who owns what on this site, what the source registry actually records, and how to ask for a correction or a takedown."
      />
      <DocumentMeta />

      <LegalSection id="licensing-own" title="1. MedMosa’s own work">
        <p>
          MedMosa’s editorial layer — the curriculum structure, the way topics are sequenced and explained, the
          plain-language rewrites, the question wording MedMosa authored or edited, the site design and all of the code
          that presents them — is:
        </p>
        <p className="legal-copyright">© 2026 Vansh Tiwari. All rights reserved.</p>
        <p>
          You are welcome to read it, study from it, print it for your own use and link to any page. You may not
          republish it in bulk, sell it, or present it as your own. If you want to use a substantial part of it for
          something else, write to <ContactAddress /> and ask — the answer is often yes.
        </p>
      </LegalSection>

      <LegalSection id="licensing-sources" title="2. Source material is not MedMosa’s to relicense">
        <p>
          The teaching material is compiled from, and cites, openly accessible scholarly and public-health sources. That
          is not the same as saying the content is open source, and MedMosa does not claim that.
        </p>
        <p>
          Third-party source material remains the property of its rights holders. MedMosa uses it in four ways:
        </p>
        <ul>
          <li><strong>Citation</strong> — a link and a reference to the source, which is by far the most common case.</li>
          <li><strong>Summary</strong> — restating an idea in MedMosa’s own words.</li>
          <li><strong>Adaptation</strong> — reworking openly licensed material into this site’s structure.</li>
          <li><strong>Reference</strong> — pointing you to where to read the original in full.</li>
        </ul>
        <p>
          Most references are links and citations rather than reproductions. Where material has been adapted rather than
          cited, the license that permits it is named in the next section.
        </p>
      </LegalSection>

      <LegalSection id="licensing-registry" title="3. The source registry">
        <p>
          This project maintains a machine-readable source registry at <code>{REGISTRY_PATH}</code>. It is generated by a
          script rather than written by hand, and it is the evidence behind every claim on this page.
        </p>
        <p>It holds 132 records:</p>
        <ul>
          <li><strong>36 collection records</strong> — one for each distinct import collection the material was attributed to.</li>
          <li>
            <strong>96 reference-host records</strong> — one for each distinct host cited anywhere across the topic and
            question references.
          </li>
        </ul>
        <p>
          Each record carries an identifier, a title taken verbatim from repository text, and — where the evidence exists
          — a provider, a URL, a recorded license and an import date. Every record carries a note stating the evidence
          behind it, including where a license is absent.
        </p>
        <p>
          The cited hosts are dominated by open-access and public-sector scholarship: OpenStax, LibreTexts (biology,
          chemistry, medicine and physics), the CDC, MedlinePlus and other National Institutes of Health properties,
          NASA, NIST, IUPAC, university course pages, and professional-body guidance such as the ANA code of ethics and
          AHA CPR guidance.
        </p>
      </LegalSection>

      <LegalSection id="licensing-position" title="4. The licensing position, stated precisely">
        <h3>The two families with a recorded license</h3>
        <p>
          Exactly two records in the registry carry an explicit license string recorded in this repository. Both are the
          Creative Commons Attribution 4.0 International License (CC BY 4.0):
        </p>
        <ul>
          <li><code>openstax.org</code> — OpenStax, <em>Anatomy and Physiology 2e</em>.</li>
          <li><code>opentextbc.ca</code> — BCcampus, <em>Anatomy and Physiology 2e</em>.</li>
        </ul>
        <Callout title="Attribution statement">
          <p>
            Material on MedMosa is adapted in part from OpenStax, <em>Anatomy and Physiology 2e</em> (openstax.org) and
            from BCcampus, <em>Anatomy and Physiology 2e</em> (opentextbc.ca), licensed under the{" "}
            <a href={CC_BY_URL}>Creative Commons Attribution 4.0 International License</a>. Changes were made: the
            material was restructured into MedMosa’s curriculum, condensed, and in places rewritten in plain
            language. MedMosa is not endorsed by OpenStax or by BCcampus.
          </p>
        </Callout>

        <h3>Every other source</h3>
        <p>
          The remaining 130 records have no license recorded. That is a deliberate statement of evidence, not an
          oversight. The registry records a license only when that exact string appears in repository text for that same
          source; a license is never inferred from a hostname, a top-level domain, a publisher name or an
          organization’s usual terms. Guessing would produce a tidier page and a false one.
        </p>
        <p>
          Where no license is recorded, MedMosa’s position is that the material is referenced by citation rather
          than reproduced, and that copyright remains with the rights holder. The repository records the citation and the
          provenance in place of a license. If you hold rights in something and believe it has gone further than that,
          the procedure below exists for exactly that case.
        </p>
      </LegalSection>

      <LegalSection id="licensing-trademarks" title="5. Trademarks">
        <p>
          MedMosa is the name of this site. Product, organization and exam names used here — including TEAS, HESI, NCLEX
          and MCAT — are the trademarks of their respective owners and are used only to identify the subject matter
          students study. Their use implies no affiliation with, endorsement by or sponsorship from those owners. See
          the <Link href="/terms" navigate={navigate}>Terms of Use</Link> for the full statement.
        </p>
      </LegalSection>

      <LegalSection id="licensing-takedown" title="6. Notice and takedown">
        <p>
          If you hold rights in material that appears on MedMosa and believe it has been used beyond what your license or
          the law allows, you do not need a lawyer to get it dealt with. Write to <ContactAddress /> with the subject line
          “Rights notice”.
        </p>
        <p>Please include:</p>
        <ol>
          <li>the page address or topic on MedMosa;</li>
          <li>the specific material at issue, quoted or described precisely enough to find;</li>
          <li>who you are and what right you hold; and</li>
          <li>
            what you would like done — attribution corrected, an extract shortened, a passage rewritten, or the material
            removed.
          </li>
        </ol>
        <Callout title="What happens next">
          <ul>
            <li>Your notice is acknowledged within <strong>5 business days</strong>.</li>
            <li>
              Where the claim is clear, the material is corrected or removed first and discussed second — normally within{" "}
              <strong>10 business days</strong> of that acknowledgment. Free study material is not worth a dispute.
            </li>
            <li>
              Where the claim is not clear, you receive a written explanation of the position and the material stays up
              while it is discussed — unless the claim raises a safety issue, in which case it comes down while it is
              discussed.
            </li>
            <li>
              The outcome and its date are recorded against the source in the repository, so the same question does not
              have to be settled twice.
            </li>
          </ul>
        </Callout>
        <p>
          The same address handles corrections that are not rights claims: a missing citation, a misattributed figure, a
          source that has moved, or an explanation that has gone out of date.
        </p>
      </LegalSection>

      <LegalReviewNote />
    </article>
  );
}

/* -------------------------------------------------------------------------
   Accessibility Statement
   ------------------------------------------------------------------------- */

export function AccessibilityStatementPage({ navigate }: { navigate: Navigate }) {
  return (
    <article className="legal-page">
      <PageHeader
        eyebrow="Legal"
        title="Accessibility Statement"
        description="What MedMosa targets, what is actually built, what is not done yet, and how to report a barrier."
      />
      <DocumentMeta />

      <LegalSection id="a11y-target" title="1. Our target">
        <p>
          MedMosa aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA.
        </p>
        <p>
          This statement is a self-assessment. No third party has audited this site, and no formal conformance claim is
          made. Where something falls short, it is listed in section 3 rather than left for you to discover.
        </p>
      </LegalSection>

      <LegalSection id="a11y-implemented" title="2. What is implemented">
        <ul>
          <li>
            <strong>Keyboard operation.</strong> Every page, control and practice question can be reached and used with a
            keyboard alone. A “Skip to main content” link is the first stop on every page, and navigating moves focus to
            the top of the new page.
          </li>
          <li>
            <strong>Visible focus.</strong> Focus is drawn with a three-pixel outline and an offset, in a color that
            holds up against every background it appears on.
          </li>
          <li>
            <strong>Semantic headings.</strong> One <code>h1</code> per page with headings in order beneath it, so a
            screen reader’s heading list works as a table of contents.
          </li>
          <li>
            <strong>Real landmarks.</strong> Header, navigation, main and footer are marked up as landmarks, and each
            major section is named by its own heading.
          </li>
          <li>
            <strong>Labeled controls.</strong> Form controls, buttons and navigation regions carry accessible names, the
            menu button reports its expanded state, and decorative icons are hidden from assistive technology.
          </li>
          <li>
            <strong>Touch targets.</strong> Primary buttons and controls are at least 44 pixels tall, which is the
            minimum comfortable target for a fingertip.
          </li>
          <li>
            <strong>Reduced motion.</strong> When your system asks for reduced motion, animation, transitions and smooth
            scrolling are switched off rather than merely shortened.
          </li>
          <li>
            <strong>Increased contrast.</strong> When your system asks for more contrast, the lowest-contrast text and
            border colors darken.
          </li>
          <li>
            <strong>No color-only status.</strong> Correct and incorrect answers, the current page and status badges are
            marked by text, an icon or a border as well as by color.
          </li>
          <li>
            <strong>Browser-native text to speech.</strong> Read-aloud uses the speech engine already in your browser,
            with a speed control. It never starts on its own, and where the engine is missing the control is hidden
            rather than shown broken.
          </li>
          <li>
            <strong>No third-party scripts.</strong> Nothing loads from another origin, so no external widget can inject
            an inaccessible control, move your focus, or override your settings.
          </li>
          <li>
            <strong>Reflow.</strong> The layout works from 320 pixels wide, text reflows instead of scrolling sideways,
            and type is sized in relative units that respect your browser’s text size.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="a11y-limitations" title="3. Known limitations">
        <p>These are the gaps we know about. Listing them is not the same as accepting them.</p>
        <ul>
          <li>
            No independent audit has been carried out, and no formal WCAG 2.2 AA evaluation report exists. Everything
            above is self-assessed.
          </li>
          <li>
            Testing has not covered every screen reader, browser and operating system combination. Behavior in less
            common pairings may differ from what is described.
          </li>
          <li>
            Formulas, equations and calculations are presented as styled text rather than as marked-up mathematics, so a
            screen reader reads them as ordinary prose.
          </li>
          <li>
            The material is long-form and dense in places. Read-aloud and the plain-language explanation help, but they
            do not make a long topic short.
          </li>
          <li>
            Source references point to third-party sites. MedMosa does not control the accessibility of anything it
            links to.
          </li>
          <li>
            Read-aloud depends on the voices your browser and operating system provide, and their quality varies by
            platform.
          </li>
        </ul>
        <p>
          None of these is a reason to stay quiet about a barrier. The list exists so you know what is already known, not
          to close the subject.
        </p>
      </LegalSection>

      <LegalSection id="a11y-feedback" title="4. Feedback and how to reach us">
        <p>
          If any part of MedMosa is difficult or impossible to use, write to <ContactAddress /> with the subject line
          “Accessibility”. It helps to include the page, what you were trying to do, and which browser, operating system
          and assistive technology you use — but a one-line message is far better than none.
        </p>
        <ul>
          <li>Reports are acknowledged within <strong>5 business days</strong>.</li>
          <li>
            A barrier that blocks access to study material is treated as the most serious class of defect on this site,
            ahead of new content.
          </li>
          <li>
            If you need something here in a different format, ask. It will be provided wherever that is reasonably
            possible.
          </li>
        </ul>
        <p>
          Related: the <Link href="/privacy" navigate={navigate}>Privacy Policy</Link> explains why no third-party script
          ever loads on this site, which is part of why the interface behaves predictably with assistive technology.
        </p>
      </LegalSection>

      <LegalReviewNote />
    </article>
  );
}
