/**
 * The legal furniture's words and destinations, in one place.
 *
 * Two surfaces render this block: the site footer in `components/ui.tsx` and
 * `SiteLegalFooter` in `components/LegalNotice.tsx`. Both used to reach for the
 * other's module, which made `ui -> LegalNotice -> ui` a cycle — harmless while
 * every export is a hoisted function declaration, but the kind of thing that
 * breaks silently the first time a bundler reorders the graph or someone turns
 * one of those functions into a `const`.
 *
 * Keeping the strings here, with no imports of its own, removes the cycle and
 * keeps the promise the footer already makes in `ui.tsx`: a disclaimer that says
 * two different things in two places is worse than one that says nothing.
 */

/** Ownership line. Shown wherever the legal block is rendered. */
export const LEGAL_COPYRIGHT_LINE = "© 2026 MedMosa · Created by Vansh Tiwari";

/**
 * What the material is made of. Deliberately does not claim that every source
 * is openly licensed: of the 132 records in the source registry, only two carry
 * an explicit licence. This wording is what the evidence supports.
 */
export const LEGAL_SOURCE_LINE =
  "Compiled from, and citing, openly accessible scholarly and public-health sources. Source material remains the property of its rights holders.";

/**
 * One address for corrections, rights notices, privacy questions, accessibility
 * reports and error reports. Four addresses would be four things to keep alive,
 * and a policy that points at a dead address is worse than one that points at a
 * busy one.
 *
 * `pages/LegalPages.tsx` and `pages/PolicyPages.tsx` both import this, so the
 * address is written once and changing it changes every page that shows it.
 */
export const LEGAL_CONTACT_ADDRESS = "vanshassistant@gmail.com";
export const LEGAL_CONTACT_HREF = `mailto:${LEGAL_CONTACT_ADDRESS}`;

/**
 * The four primary policy documents, in the order they are shown.
 *
 * These are the ones that belong in the footer strip. The seven pages in
 * `POLICY_LINKS` are deliberately kept out of it: eleven links wrap to three
 * lines on a phone and turn a legal footer into a sitemap, which is how people
 * stop reading footers. Four is a row.
 */
export const LEGAL_LINKS: ReadonlyArray<readonly [string, string]> = [
  ["Terms of Use", "/terms"],
  ["Privacy", "/privacy"],
  ["Licensing and attribution", "/licensing"],
  ["Accessibility", "/accessibility"],
];

/**
 * The supporting policy pages, rendered by `pages/PolicyPages.tsx`.
 *
 * Shown as their own group — an "About this content" column in the footer, an
 * index on each policy page, or both — rather than appended to `LEGAL_LINKS`.
 * The order is the reading order: how content is made, then how it is sourced,
 * then the safety statement, then how to reach a person, then what changed.
 */
export const POLICY_LINKS: ReadonlyArray<readonly [string, string]> = [
  ["Content review process", "/content-review"],
  ["Editorial policy", "/editorial-policy"],
  ["Source and citation policy", "/source-citation-policy"],
  ["Medical disclaimer", "/medical-disclaimer"],
  ["Contact", "/contact"],
  ["Report an error", "/report-error"],
  ["Changelog", "/changelog"],
];
