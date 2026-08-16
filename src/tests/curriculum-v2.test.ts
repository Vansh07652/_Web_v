import { describe, expect, it } from "vitest";
import {
  loadCurriculumQuestions,
  loadCurriculumSubject,
  loadCurriculumTopic,
} from "../lib/content/curriculum-v2";

// Anatomy & Physiology I is the eagerly-bundled entry course, so it is worth
// asserting its full content shape separately from the generic catalog tests.
describe("Anatomy & Physiology I content depth", () => {
  it("loads the registry-backed canonical hierarchy", async () => {
    const subject = await loadCurriculumSubject("anatomy-physiology-1");
    expect(subject?.schemaVersion).toBe("2.0.0");
    expect(subject?.units).toHaveLength(8);
    expect(subject?.units.flatMap((unit) => unit.topics)).toHaveLength(54);
    expect(subject?.statistics.completeTeachingTopicCount).toBe(54);
  });

  it("loads every rich content layer for a canonical topic", async () => {
    const topic = await loadCurriculumTopic("anatomy-physiology-1", "introduction-to-the-human-body", "homeostasis");
    expect(topic?.sections.collegeNotes.length).toBeGreaterThan(100);
    expect(topic?.sections.eli10.length).toBeGreaterThan(100);
    expect(topic?.sections.highYield.length).toBeGreaterThan(100);
    expect(topic?.sections.quickReview.length).toBeGreaterThan(100);
    expect(topic?.sections.references.length).toBeGreaterThan(0);
  });

  it("preserves rich question rationales", async () => {
    const bank = await loadCurriculumQuestions("anatomy-physiology-1");
    expect(bank?.questions).toHaveLength(553);
    expect(bank?.questions.every((question) => question.rationales.whyCorrect && question.rationales.eli10)).toBe(true);
    expect(bank?.questions.filter((question) => question.sourceCollection === "prenursing-native-app-bank")).toHaveLength(300);
  });

  it("every question's recorded correct answer resolves to a real option", async () => {
    // Regression guard for the defect where feedback could only show the raw
    // option id because no matching option text existed to render.
    const bank = await loadCurriculumQuestions("anatomy-physiology-1");
    const unresolved = (bank?.questions ?? []).filter(
      (question) => !question.options.some((option) => option.id === question.correctAnswer),
    );
    expect(unresolved).toEqual([]);
  });

  it("rejects noncanonical route coordinates", async () => {
    expect(await loadCurriculumTopic("anatomy-physiology-1", "not-a-unit", "homeostasis")).toBeUndefined();
    expect(await loadCurriculumTopic("anatomy-physiology-1", "introduction-to-the-human-body", "not-a-topic")).toBeUndefined();
  });
});
