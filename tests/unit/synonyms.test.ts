import { describe, expect, it } from "vitest";
import { SYNONYMS, describeExpansion, expandQuery } from "../../src/lib/content/synonyms";

describe("synonym list", () => {
  it("stays small enough to have been reviewed by hand", () => {
    expect(SYNONYMS.length).toBeGreaterThanOrEqual(25);
    expect(SYNONYMS.length).toBeLessThanOrEqual(40);
  });

  it("uses lowercase, unique terms", () => {
    const terms = SYNONYMS.map((entry) => entry.term);
    for (const term of terms) {
      expect(term).toBe(term.toLocaleLowerCase());
      expect(term.trim()).toBe(term);
      expect(term.length).toBeGreaterThan(0);
    }
    expect(new Set(terms).size).toBe(terms.length);
  });

  it("only ever expands onto full terms, never onto another abbreviation", () => {
    const terms = new Set(SYNONYMS.map((entry) => entry.term));
    for (const entry of SYNONYMS) {
      expect(entry.expandsTo.length).toBeGreaterThan(0);
      for (const expansion of entry.expandsTo) {
        expect(expansion).toBe(expansion.toLocaleLowerCase());
        // Anything under three characters is an abbreviation, and an
        // abbreviation used as a search variant matches far too much.
        expect(expansion.length).toBeGreaterThanOrEqual(3);
        expect(expansion).not.toBe(entry.term);
        // An expansion that is itself a term would mean the list needs
        // chaining to be correct, which it deliberately does not do.
        expect(terms.has(expansion)).toBe(false);
      }
    }
  });

  it("carries the seed pairs the curriculum needs", () => {
    const found = (term: string): string[] => SYNONYMS.find((entry) => entry.term === term)?.expandsTo ?? [];
    expect(found("heart attack")).toContain("myocardial infarction");
    expect(found("high blood pressure")).toContain("hypertension");
    expect(found("low blood pressure")).toContain("hypotension");
    expect(found("copd")).toContain("chronic obstructive pulmonary disease");
    expect(found("cbc")).toContain("complete blood count");
    expect(found("abg")).toContain("arterial blood gas");
    expect(found("mi")).toContain("myocardial infarction");
    expect(found("bp")).toContain("blood pressure");
    expect(found("hr")).toContain("heart rate");
    expect(found("rbc")).toContain("red blood cell");
    expect(found("wbc")).toContain("white blood cell");
    expect(found("gi")).toContain("gastrointestinal");
    expect(found("cns")).toContain("central nervous system");
    expect(found("atp")).toContain("adenosine triphosphate");
    expect(found("dna")).toContain("deoxyribonucleic acid");
    expect(found("rna")).toContain("ribonucleic acid");
    expect(found("ph")).toContain("potential of hydrogen");
  });

  it("leaves out the abbreviations that are ambiguous in this curriculum", () => {
    const terms = SYNONYMS.map((entry) => entry.term);
    for (const ambiguous of ["rr", "im", "dm", "ca", "stroke", "pt"]) {
      expect(terms).not.toContain(ambiguous);
    }
  });
});

describe("expandQuery", () => {
  it("returns the query first, exactly as it was typed", () => {
    expect(expandQuery("COPD")[0]).toBe("COPD");
    expect(expandQuery("  Heart Attack  ")[0]).toBe("Heart Attack");
    expect(expandQuery("krebs cycle")).toEqual(["krebs cycle"]);
  });

  it("matches whole words only, so MI never fires inside microbiology", () => {
    expect(expandQuery("microbiology")).toEqual(["microbiology"]);
    expect(expandQuery("mitochondria")).toEqual(["mitochondria"]);
    expect(expandQuery("microbiology lab")).toEqual(["microbiology lab"]);
  });

  it("matches whole words only for every other short abbreviation", () => {
    expect(expandQuery("phosphate")).toEqual(["phosphate"]);
    expect(expandQuery("graph paper")).toEqual(["graph paper"]);
    expect(expandQuery("digital imaging")).toEqual(["digital imaging"]);
    expect(expandQuery("chronic pain")).toEqual(["chronic pain"]);
    expect(expandQuery("ivory")).toEqual(["ivory"]);
    expect(expandQuery("cnsomething")).toEqual(["cnsomething"]);
  });

  it("is case-insensitive", () => {
    expect(expandQuery("MI")).toEqual(["MI", "myocardial infarction"]);
    expect(expandQuery("mi")).toEqual(["mi", "myocardial infarction"]);
    expect(expandQuery("Mi")).toEqual(["Mi", "myocardial infarction"]);
    expect(expandQuery("COPD")).toEqual(["COPD", "chronic obstructive pulmonary disease"]);
    expect(expandQuery("pH")).toEqual(["pH", "potential of hydrogen"]);
    expect(expandQuery("Heart Attack")).toEqual(["Heart Attack", "myocardial infarction"]);
  });

  it("expands a multi-word lay term", () => {
    expect(expandQuery("heart attack")).toEqual(["heart attack", "myocardial infarction"]);
    expect(expandQuery("high blood pressure")).toEqual(["high blood pressure", "hypertension"]);
    expect(expandQuery("shortness of breath")).toEqual(["shortness of breath", "dyspnea"]);
  });

  it("substitutes in place, keeping the rest of the query", () => {
    expect(expandQuery("heart attack risk factors")).toEqual([
      "heart attack risk factors",
      "myocardial infarction risk factors",
    ]);
    expect(expandQuery("normal bp range")).toEqual(["normal bp range", "normal blood pressure range"]);
  });

  it("replaces every occurrence of a term, not just the first", () => {
    expect(expandQuery("mi versus mi")).toEqual(["mi versus mi", "myocardial infarction versus myocardial infarction"]);
  });

  it("produces one variant per matching term, not a combination of them", () => {
    expect(expandQuery("cbc and abg")).toEqual([
      "cbc and abg",
      "complete blood count and abg",
      "cbc and arterial blood gas",
    ]);
  });

  it("handles a query that matches an overlapping pair of terms", () => {
    expect(expandQuery("high blood sugar")).toEqual([
      "high blood sugar",
      "hyperglycemia",
      "high blood glucose",
    ]);
  });

  it("never returns a duplicate", () => {
    const variants = expandQuery("ecg and ekg and cbc");
    expect(new Set(variants).size).toBe(variants.length);
    expect(variants).toContain("electrocardiogram and ekg and cbc");
    expect(variants).toContain("ecg and electrocardiogram and cbc");
  });

  it("returns nothing for an empty query", () => {
    expect(expandQuery("")).toEqual([]);
    expect(expandQuery("   ")).toEqual([]);
    expect(expandQuery("\n\t")).toEqual([]);
  });

  it("never throws on input that is not a string", () => {
    const hostile = expandQuery as unknown as (value: unknown) => string[];
    expect(hostile(undefined)).toEqual([]);
    expect(hostile(null)).toEqual([]);
    expect(hostile(7)).toEqual([]);
    expect(hostile({})).toEqual([]);
  });

  it("returns the query alone when it is only punctuation", () => {
    expect(expandQuery("---")).toEqual(["---"]);
  });

  it("does not mutate the curated list", () => {
    const before = JSON.stringify(SYNONYMS);
    expandQuery("heart attack and cbc and mi");
    expandQuery("");
    expect(JSON.stringify(SYNONYMS)).toBe(before);
  });

  it("is deterministic", () => {
    expect(expandQuery("cbc and abg")).toEqual(expandQuery("cbc and abg"));
  });
});

describe("describeExpansion", () => {
  it("explains a widened query", () => {
    expect(describeExpansion("heart attack")).toBe("Also searching for myocardial infarction");
    expect(describeExpansion("COPD")).toBe("Also searching for chronic obstructive pulmonary disease");
  });

  it("lists every expansion once, in list order", () => {
    expect(describeExpansion("cbc and abg")).toBe("Also searching for complete blood count, arterial blood gas");
    expect(describeExpansion("ecg ekg")).toBe("Also searching for electrocardiogram");
  });

  it("is undefined when nothing was widened", () => {
    expect(describeExpansion("krebs cycle")).toBeUndefined();
    expect(describeExpansion("microbiology")).toBeUndefined();
    expect(describeExpansion("")).toBeUndefined();
    expect(describeExpansion("   ")).toBeUndefined();
  });

  it("never throws on input that is not a string", () => {
    const hostile = describeExpansion as unknown as (value: unknown) => string | undefined;
    expect(hostile(undefined)).toBeUndefined();
    expect(hostile(null)).toBeUndefined();
    expect(hostile(12)).toBeUndefined();
  });
});
