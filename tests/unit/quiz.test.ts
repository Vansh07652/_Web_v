import { describe, expect, it } from "vitest";
import type { Question } from "../../src/types";
import { allowsMultipleAnswers, answerLabel, gradeQuestion } from "../../src/lib/quiz";

const question: Question = {
  id: "test-question", subject: "biology-1", lesson: "test", contentType: "question",
  questionType: "multiple-choice", question: "Test?", options: [{ id: "a", text: "Alpha" }, { id: "b", text: "Beta" }],
  correctAnswer: "a", explanation: "Because.", difficulty: "easy", tags: [], source: "test", originalFile: "test",
  status: "approved", reviewStatus: "audited", humanVerificationRequired: false, filePath: "test",
};

describe("question grading", () => {
  it("grades correct and incorrect single answers", () => {
    expect(gradeQuestion(question, ["a"])).toBe(true);
    expect(gradeQuestion(question, ["b"])).toBe(false);
    expect(answerLabel(question)).toBe("Alpha");
  });

  it("requires the complete multiple-select set", () => {
    const multiple = { ...question, questionType: "multiple-select" as const, correctAnswer: ["a", "b"] };
    expect(allowsMultipleAnswers(multiple)).toBe(true);
    expect(gradeQuestion(multiple, ["b", "a"])).toBe(true);
    expect(gradeQuestion(multiple, ["a"])).toBe(false);
  });

  it("normalizes reliable written answers", () => {
    const written = { ...question, questionType: "short-answer" as const, options: [], correctAnswer: "Mitosis" };
    expect(gradeQuestion(written, [" mitosis "])).toBe(true);
  });
});
