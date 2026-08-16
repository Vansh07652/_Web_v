import { describe, expect, it } from "vitest";
import {
  getLessonBySlug,
  getLessonsBySubject,
  getNoteByLesson,
  getNotesBySubject,
  getSubjectBySlug,
  loadLessons,
  loadNotes,
  getApprovedQuestionCount,
  loadSubjects,
  loadQuestionData,
  validateContentSource,
} from "../../src/lib/content";

describe("centralized content data layer", () => {
  it("loads all approved source records", () => {
    expect(loadSubjects()).toHaveLength(11);
    expect(loadLessons()).toHaveLength(121);
    expect(loadNotes()).toHaveLength(111);
    expect(loadSubjects().every((subject) => subject.status === "approved")).toBe(true);
  });

  it("resolves valid relationships and rejects invalid slugs", () => {
    const lesson = getLessonsBySubject("biology-1")[0];
    expect(getSubjectBySlug("biology-1")?.name).toBe("Biology 1");
    expect(getLessonBySlug("biology-1", lesson.slug)?.id).toBe(lesson.id);
    expect(getNoteByLesson("biology-1", lesson.slug)?.lesson).toBe(lesson.slug);
    expect(getSubjectBySlug("not-a-subject")).toBeUndefined();
    expect(getLessonBySlug("biology-1", "not-a-lesson")).toBeUndefined();
  });

  it("handles intentionally empty subjects", () => {
    expect(getLessonsBySubject("nclex-review")).toEqual([]);
    expect(getNotesBySubject("organic-chemistry-1")).toEqual([]);
  });

  it("keeps the derived question count equal to the real per-subject counts", async () => {
    // getApprovedQuestionCount() derives its value so the 1.8 MB question file
    // stays lazily loaded. This guards against the two drifting apart.
    const { getQuestionsBySubject } = await loadQuestionData();
    for (const subject of loadSubjects()) {
      expect([subject.slug, getApprovedQuestionCount(subject.slug)])
        .toEqual([subject.slug, getQuestionsBySubject(subject.slug).length]);
    }
  });

  it("validates every indexed note source", () => {
    const result = validateContentSource();
    expect(result.valid).toBe(true);
    expect(result.issues).toEqual([]);
  });
});
