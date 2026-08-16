/**
 * Composing a topic's reading from its section fields.
 *
 * Several importers wrote a one-page topic into `collegeNotes` *and* split the
 * same prose across the individual section fields. Printing the sections in
 * source order then shows those passages twice, under two headings, with
 * identical bodies. It affects 742 of the 1,409 topics — Cell Biology, MCAT
 * Foundations and both General Chemistry courses worst of all — and it has been
 * visible on the live site for as long as those courses have been published.
 *
 * The corpus is deliberately not edited to fix it. `content-v2` is validated for
 * source-to-client equivalence and against exact totals, and this is a
 * presentation fault rather than a content one: the text itself is correct, it
 * is simply being rendered twice. So the composition drops any section whose
 * text the college note already carries.
 */

/**
 * Strips markdown punctuation and collapses whitespace, so two copies of the
 * same passage compare equal even when one has been reformatted. Lowercased for
 * the same reason.
 */
export const normalizeForOverlap = (value: string): string =>
  value.replace(/[#*_`>|[\]-]/g, " ").replace(/\s+/g, " ").trim().toLowerCase();

/**
 * How much of a section has to already appear in the college note before the
 * section is treated as a duplicate. Long enough that two genuinely different
 * passages will not collide; short enough to catch a copy whose tail was edited.
 */
export const OVERLAP_PROBE_LENGTH = 120;

/** A heading and its body, or an empty string when there is no body. */
export const markdownSection = (title: string, content = ""): string =>
  (content ? `# ${title}\n\n${content}` : "");

/**
 * `markdownSection`, unless `withinNormalized` already contains the body.
 *
 * Sections shorter than the probe length are always kept: a one-line section is
 * cheap to show twice and expensive to lose, and a short string is much more
 * likely to appear inside longer prose by coincidence.
 */
export const sectionUnlessDuplicated = (title: string, content = "", withinNormalized = ""): string => {
  if (!content) return "";
  const normalized = normalizeForOverlap(content);
  if (
    withinNormalized
    && normalized.length >= OVERLAP_PROBE_LENGTH
    && withinNormalized.includes(normalized.slice(0, OVERLAP_PROBE_LENGTH))
  ) {
    return "";
  }
  return markdownSection(title, content);
};
