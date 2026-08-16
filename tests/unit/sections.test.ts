import { describe, expect, it } from "vitest";
import {
  OVERLAP_PROBE_LENGTH,
  markdownSection,
  normalizeForOverlap,
  sectionUnlessDuplicated,
} from "../../src/lib/content/sections";

const longBody = (seed: string): string => {
  let text = seed;
  while (text.length < OVERLAP_PROBE_LENGTH * 2) text += ` ${seed}`;
  return text;
};

describe("normalizeForOverlap", () => {
  it("strips markdown punctuation and collapses whitespace", () => {
    expect(normalizeForOverlap("## **Bold**   heading\n\n- item")).toBe("bold heading item");
  });

  it("is total: empty input gives an empty string", () => {
    expect(normalizeForOverlap("")).toBe("");
    expect(normalizeForOverlap("   \n\t ")).toBe("");
  });

  it("makes two reformatted copies of the same passage compare equal", () => {
    const a = "# Surface area\n\nThe **ratio** governs exchange.";
    const b = "Surface area\n\nThe ratio governs   exchange.";
    expect(normalizeForOverlap(a)).toBe(normalizeForOverlap(b));
  });
});

describe("markdownSection", () => {
  it("renders a heading above the body", () => {
    expect(markdownSection("Key terms", "Cell theory.")).toBe("# Key terms\n\nCell theory.");
  });

  it("renders nothing when there is no body", () => {
    expect(markdownSection("Key terms")).toBe("");
    expect(markdownSection("Key terms", "")).toBe("");
  });
});

describe("sectionUnlessDuplicated", () => {
  it("drops a section the college note already contains", () => {
    const body = longBody("The surface-area-to-volume ratio is the central mechanistic driver.");
    const college = normalizeForOverlap(`Some preamble. ${body} Some tail.`);
    expect(sectionUnlessDuplicated("How it works", body, college)).toBe("");
  });

  it("keeps a section the college note does not contain", () => {
    const body = longBody("Compartmentalization separates incompatible chemistries.");
    const college = normalizeForOverlap(longBody("An entirely unrelated passage about cell walls."));
    expect(sectionUnlessDuplicated("How it works", body, college)).toBe(markdownSection("How it works", body));
  });

  it("matches across differing markdown formatting", () => {
    const body = longBody("The **ratio** governs exchange with the environment.");
    const plain = longBody("The ratio governs exchange with the environment.");
    expect(sectionUnlessDuplicated("How it works", body, normalizeForOverlap(plain))).toBe("");
  });

  it("never drops a section shorter than the probe length", () => {
    const short = "Cell theory.";
    expect(short.length).toBeLessThan(OVERLAP_PROBE_LENGTH);
    // Even though the college note plainly contains it.
    const college = normalizeForOverlap(`A note that mentions ${short} in passing.`);
    expect(sectionUnlessDuplicated("Key terms", short, college)).toBe(markdownSection("Key terms", short));
  });

  it("keeps everything when there is no college note to compare against", () => {
    const body = longBody("Anything at all.");
    expect(sectionUnlessDuplicated("How it works", body, "")).toBe(markdownSection("How it works", body));
  });

  it("still renders nothing for an empty body", () => {
    expect(sectionUnlessDuplicated("How it works", "", "anything")).toBe("");
    expect(sectionUnlessDuplicated("How it works", undefined, "anything")).toBe("");
  });

  it("does not mutate its inputs", () => {
    const body = longBody("A passage.");
    const college = normalizeForOverlap(body);
    const bodyCopy = body;
    const collegeCopy = college;
    sectionUnlessDuplicated("How it works", body, college);
    expect(body).toBe(bodyCopy);
    expect(college).toBe(collegeCopy);
  });
});
