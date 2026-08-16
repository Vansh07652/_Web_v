/**
 * Small, reusable legal furniture.
 *
 * Three components, deliberately plain. `StudyUseNotice` is the one-line
 * educational-use notice that sits next to content; `ExtendedClinicalNotice` is
 * the extra caution for material about medications, procedures, emergencies or
 * patient care; `SiteLegalFooter` is the copyright, source and policy-link block
 * that composes into the existing footer. None owns any layout of its own beyond
 * what `legal.css` gives it, so all three drop into any surface without fighting
 * the page around them.
 *
 * Both notices take their wording from `content/brand.ts`, which is the single
 * home for this site's disclaimer copy.
 */
import { EXTENDED_DISCLAIMER, STUDY_USE_NOTICE_BODY, STUDY_USE_NOTICE_LEAD } from "../content/brand";
import type { Navigate } from "../lib/navigation";
import { LEGAL_COPYRIGHT_LINE, LEGAL_LINKS, LEGAL_SOURCE_LINE } from "../lib/legal";
import { Link } from "./ui";

/**
 * The educational-use notice. Always visible, never a modal, never a warning
 * banner: it states what the material is so nobody has to guess, and then gets
 * out of the way. `role="note"` so assistive technology announces it as an
 * aside rather than as an alert.
 *
 * Rendered on every topic page. The two strings moved to `content/brand.ts`
 * unchanged, so the text this renders is exactly the text it has always
 * rendered — including the single space between the lead and the body.
 */
export function StudyUseNotice() {
  return (
    <p className="legal-note" role="note">
      <strong>{STUDY_USE_NOTICE_LEAD}</strong> {STUDY_USE_NOTICE_BODY}
    </p>
  );
}

/**
 * The extra caution for material covering medications, procedures, emergencies
 * or patient care: guidance moves, and a learner reading a note written months
 * ago has no way to tell from the page that it has.
 *
 * Announced as a note rather than an alert, for the same reason as above — it is
 * standing context, not an interruption. Deliberately not wired into any page
 * here; the pages that need it opt in.
 */
export const ExtendedClinicalNotice = () => (
  <p className="legal-note legal-note-clinical" role="note">
    <strong>Check current guidance.</strong> {EXTENDED_DISCLAIMER}
  </p>
);

/**
 * Copyright, a one-line statement of what the material is made of, and the four
 * policy links. Kept to three elements so it can be dropped into the existing
 * site footer without disturbing its grid.
 */
export function SiteLegalFooter({ navigate }: { navigate: Navigate }) {
  return (
    <div className="legal-footer">
      <p className="legal-footer-copyright">© 2026 MedMosa · Created by Vansh Tiwari</p>
      <p className="legal-footer-sources">
        Compiled from, and citing, openly accessible scholarly and public-health sources. Source material remains the
        property of its rights holders.
      </p>
      <nav className="legal-footer-nav" aria-label="Legal and policies">
        <ul>
          {LEGAL_LINKS.map(([label, href]) => (
            <li key={href}><Link href={href} navigate={navigate}>{label}</Link></li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
