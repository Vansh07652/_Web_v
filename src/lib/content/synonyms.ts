/**
 * A small, hand-curated map of medical synonyms and abbreviations, used to
 * widen a search query before it is matched against the curriculum index.
 *
 * WHY IT IS SHORT, AND WHY IT IS HAND-WRITTEN
 *
 * Every entry here was chosen and checked by hand. Nothing was generated from a
 * corpus, mined from the content, or inferred by a model. A medical synonym
 * list is a place where a plausible-looking wrong entry does real harm: it
 * quietly sends a student studying one thing to a topic about another, and the
 * student has no way to tell it happened. So the bar for inclusion is that the
 * pair is standard, unambiguous in a health-science curriculum, and would be
 * recognised by any instructor.
 *
 * Three rules keep it honest:
 *
 *  1. Expansion only, never contraction. Every entry maps a shorter or
 *     lay term onto the fuller medical term — "heart attack" to "myocardial
 *     infarction", never the reverse. That guarantees an expanded query is
 *     never a two-letter string, which would match far too much.
 *  2. No ambiguous abbreviations. "RR" is respiratory rate on a chart and
 *     relative risk in a statistics unit; both are in this curriculum, so it is
 *     left out. The same reasoning excludes "IM", "DM" and "CA".
 *  3. No near-misses dressed as synonyms. "Heartburn" is a symptom of reflux,
 *     not a synonym for it, so the entry is the abbreviation "GERD" instead.
 *     "Stroke" is excluded because "stroke volume" is a cardiac term in the
 *     same corpus.
 *
 * MATCHING
 *
 * Matching is case-insensitive and works on whole words only. The query is
 * split into word tokens and a term matches only as a complete run of tokens,
 * so "MI" fires on "mi" and on "MI symptoms" but never inside "microbiology".
 * Substring matching would make an abbreviation list actively dangerous, and
 * this list contains several two-letter entries.
 *
 * Nothing here touches the network, storage or the DOM. The whole module is a
 * constant and two pure functions.
 */

export interface SynonymEntry {
  term: string;
  expandsTo: string[];
}

/**
 * Terms are lowercase; expansions are the form a topic title or alias is
 * likely to use. Grouped by kind for review, and the order is stable because
 * `expandQuery` walks the list in order.
 */
export const SYNONYMS: readonly SynonymEntry[] = [
  // Lay phrasing a student is likely to type before they know the term.
  { term: "heart attack", expandsTo: ["myocardial infarction"] },
  { term: "high blood pressure", expandsTo: ["hypertension"] },
  { term: "low blood pressure", expandsTo: ["hypotension"] },
  { term: "high blood sugar", expandsTo: ["hyperglycemia"] },
  { term: "low blood sugar", expandsTo: ["hypoglycemia"] },
  { term: "blood sugar", expandsTo: ["blood glucose"] },
  { term: "shortness of breath", expandsTo: ["dyspnea"] },
  { term: "kidney stone", expandsTo: ["nephrolithiasis"] },
  { term: "nosebleed", expandsTo: ["epistaxis"] },
  { term: "fever", expandsTo: ["pyrexia"] },

  // Clinical abbreviations that appear in charting and in question stems.
  { term: "mi", expandsTo: ["myocardial infarction"] },
  { term: "copd", expandsTo: ["chronic obstructive pulmonary disease"] },
  { term: "chf", expandsTo: ["congestive heart failure"] },
  { term: "cva", expandsTo: ["cerebrovascular accident"] },
  { term: "uti", expandsTo: ["urinary tract infection"] },
  { term: "gerd", expandsTo: ["gastroesophageal reflux disease"] },
  { term: "bp", expandsTo: ["blood pressure"] },
  { term: "hr", expandsTo: ["heart rate"] },
  { term: "iv", expandsTo: ["intravenous"] },
  { term: "ecg", expandsTo: ["electrocardiogram"] },
  { term: "ekg", expandsTo: ["electrocardiogram"] },
  { term: "bmi", expandsTo: ["body mass index"] },

  // Laboratory and diagnostic abbreviations.
  { term: "cbc", expandsTo: ["complete blood count"] },
  { term: "abg", expandsTo: ["arterial blood gas"] },
  { term: "bun", expandsTo: ["blood urea nitrogen"] },
  { term: "gfr", expandsTo: ["glomerular filtration rate"] },
  { term: "hdl", expandsTo: ["high density lipoprotein"] },
  { term: "ldl", expandsTo: ["low density lipoprotein"] },

  // Anatomy, physiology and biochemistry.
  { term: "rbc", expandsTo: ["red blood cell"] },
  { term: "wbc", expandsTo: ["white blood cell"] },
  { term: "gi", expandsTo: ["gastrointestinal"] },
  { term: "cns", expandsTo: ["central nervous system"] },
  { term: "pns", expandsTo: ["peripheral nervous system"] },
  { term: "adh", expandsTo: ["antidiuretic hormone"] },
  { term: "atp", expandsTo: ["adenosine triphosphate"] },
  { term: "adp", expandsTo: ["adenosine diphosphate"] },
  { term: "dna", expandsTo: ["deoxyribonucleic acid"] },
  { term: "rna", expandsTo: ["ribonucleic acid"] },
  { term: "ph", expandsTo: ["potential of hydrogen"] },
];

/** The same word split the rest of search uses, so both agree on "a word". */
const tokenize = (value: string): string[] =>
  value.toLocaleLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean);

/**
 * Every index in `tokens` where `termTokens` appears as a complete, contiguous
 * run. Whole-word by construction: a token either equals the term's token or it
 * does not, so "microbiology" can never be a hit for "mi".
 */
const matchPositions = (tokens: readonly string[], termTokens: readonly string[]): number[] => {
  const positions: number[] = [];
  if (!termTokens.length || termTokens.length > tokens.length) return positions;
  for (let index = 0; index <= tokens.length - termTokens.length; index += 1) {
    if (termTokens.every((token, offset) => tokens[index + offset] === token)) positions.push(index);
  }
  return positions;
};

/** Rebuilds the query with every occurrence of the term replaced. */
const substitute = (
  tokens: readonly string[],
  positions: readonly number[],
  termLength: number,
  replacement: readonly string[],
): string => {
  const starts = new Set(positions);
  const result: string[] = [];
  let index = 0;
  while (index < tokens.length) {
    if (starts.has(index)) {
      result.push(...replacement);
      index += termLength;
      continue;
    }
    result.push(tokens[index]);
    index += 1;
  }
  return result.join(" ");
};

/**
 * The query, followed by one variant per expansion that applies, deduplicated.
 *
 * The original always comes first, and the caller is expected to rank its hits
 * above the expanded ones — an expansion is a guess about intent, and it should
 * never outrank what somebody actually typed.
 *
 * Expansion is a substitution, not a replacement of the whole query: "heart
 * attack risk" produces "myocardial infarction risk", so the rest of the query
 * still counts. Terms are applied one at a time rather than combinatorially, so
 * a query with two known terms produces two extra variants, not four.
 *
 * Returns an empty array for an empty query: there is nothing to search for.
 */
export const expandQuery = (query: string): string[] => {
  const original = typeof query === "string" ? query.trim() : "";
  if (!original) return [];
  const tokens = tokenize(original);
  const variants = [original];
  const seen = new Set([original.toLocaleLowerCase()]);
  if (!tokens.length) return variants;
  for (const entry of SYNONYMS) {
    const termTokens = tokenize(entry.term);
    const positions = matchPositions(tokens, termTokens);
    if (!positions.length) continue;
    for (const expansion of entry.expandsTo) {
      const replacement = tokenize(expansion);
      if (!replacement.length) continue;
      const variant = substitute(tokens, positions, termTokens.length, replacement);
      const key = variant.toLocaleLowerCase();
      if (!variant || seen.has(key)) continue;
      seen.add(key);
      variants.push(variant);
    }
  }
  return variants;
};

/**
 * A short line for the UI when a query was widened, so the extra results are
 * never unexplained. `undefined` when nothing matched, which is most queries.
 */
export const describeExpansion = (query: string): string | undefined => {
  const tokens = tokenize(typeof query === "string" ? query : "");
  if (!tokens.length) return undefined;
  const expansions: string[] = [];
  const seen = new Set<string>();
  for (const entry of SYNONYMS) {
    if (!matchPositions(tokens, tokenize(entry.term)).length) continue;
    for (const expansion of entry.expandsTo) {
      if (seen.has(expansion)) continue;
      seen.add(expansion);
      expansions.push(expansion);
    }
  }
  if (!expansions.length) return undefined;
  return `Also searching for ${expansions.join(", ")}`;
};
