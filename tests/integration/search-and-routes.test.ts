import { describe, expect, it } from "vitest";
import { loadQuestionData, loadSearchSupport } from "../../src/lib/content";
import { normalizePath, noteHref, questionsHref, segmentsFor, subjectHref } from "../../src/lib/navigation";

describe("search, filters, and route integration", () => {
  it("searches topic text and filters by subject and content type", async () => {
    const { searchContent } = await loadSearchSupport();
    const results = searchContent({ query: "atomic number", subject: "biology-1", contentType: "question" });
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((result) => result.subject === "biology-1" && result.contentType === "question")).toBe(true);
    expect(results.every((result) => result.href.startsWith("/subjects/biology-1/questions/"))).toBe(true);
  });

  it("supports empty and no-result searches", async () => {
    const { searchContent } = await loadSearchSupport();
    expect(searchContent({ query: "a-phrase-that-cannot-exist-983274" })).toEqual([]);
    expect(searchContent({ subject: "nclex-review" })).toEqual([]);
  });

  it("matches tag filters using canonical tag IDs regardless of display capitalization", async () => {
    const { searchContent } = await loadSearchSupport();
    const results = searchContent({ tag: "chemistry" });
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((result) => result.tags.some((tag) => tag.toLocaleLowerCase() === "chemistry"))).toBe(true);
  });

  it("loads questions by subject and lesson", async () => {
    const questions = await loadQuestionData();
    const subjectQuestions = questions.getQuestionsBySubject("biology-1");
    expect(subjectQuestions.length).toBeGreaterThan(0);
    expect(questions.getQuestionsByLesson("biology-1", subjectQuestions[0].lesson).length).toBeGreaterThan(0);
    expect(questions.getQuestionsByLesson("biology-1", "invalid")).toEqual([]);
  });

  it("normalizes public paths and builds canonical routes", () => {
    expect(normalizePath("/subjects/biology-1/?x=1")).toBe("/subjects/biology-1");
    expect(segmentsFor("/subjects/biology-1/notes/cells")).toEqual(["subjects", "biology-1", "notes", "cells"]);
    expect(subjectHref("biology-1")).toBe("/subjects/biology-1");
    expect(noteHref("biology-1", "cells")).toBe("/subjects/biology-1/notes/cells");
    expect(questionsHref("biology-1", "cells")).toBe("/subjects/biology-1/questions/cells");
  });
});
