import { describe, expect, it } from "vitest";
import {
  getSubjectBySlug,
  loadQuestionData,
  loadSearchSupport,
  loadSubjects,
  validateContentSource,
} from "../lib/content";

describe("approved content integration", () => {
  it("loads the canonical subject registry", () => {
    const subjects = loadSubjects();
    expect(subjects).toHaveLength(11);
    expect(new Set(subjects.map((subject) => subject.slug)).size).toBe(subjects.length);
  });

  it("returns undefined for an invalid subject slug", () => {
    expect(getSubjectBySlug("not-a-subject")).toBeUndefined();
  });

  it("resolves indexed content and questions", async () => {
    const [search, questions] = await Promise.all([loadSearchSupport(), loadQuestionData()]);
    expect(search.loadContentIndex()).toHaveLength(1143);
    expect(questions.getQuestionsByLesson("chemistry-1", "atomic-structure-and-the-periodic-table")).toHaveLength(12);
    expect(questions.getQuestionsByLesson("biology-1", "chemistry-of-life")).toHaveLength(12);
  });

  it("searches by approved metadata and filters", async () => {
    const { searchContent } = await loadSearchSupport();
    const results = searchContent({ query: "chemistry", subject: "biology-1" });
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((result) => result.subject === "biology-1")).toBe(true);
  });

  it("finds no client-side integration errors", () => {
    expect(validateContentSource().valid).toBe(true);
  });
});
