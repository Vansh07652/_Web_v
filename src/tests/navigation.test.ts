import { describe, expect, it } from "vitest";
import { normalizePath, segmentsFor } from "../lib/navigation";

describe("route utilities", () => {
  it("normalizes trailing slashes and queries", () => {
    expect(normalizePath("/subjects/biology-1/?tab=notes")).toBe("/subjects/biology-1");
  });

  it("decodes safe route segments", () => {
    expect(segmentsFor("/subjects/biology-1/notes/cell-structure")).toEqual([
      "subjects", "biology-1", "notes", "cell-structure",
    ]);
  });
});
