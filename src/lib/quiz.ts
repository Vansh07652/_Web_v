import type { Question } from "../types";

export const expectedAnswers = (question: Question): string[] =>
  (Array.isArray(question.correctAnswer) ? question.correctAnswer : question.correctAnswer.split(","))
    .map((answer) => answer.trim().toLocaleLowerCase())
    .filter(Boolean)
    .sort();

export const isChoiceQuestion = (question: Question): boolean =>
  question.options.length > 0 && !["short-answer", "fill-in-the-blank", "calculation"].includes(question.questionType);

export const allowsMultipleAnswers = (question: Question): boolean =>
  question.questionType === "multiple-select" || expectedAnswers(question).length > 1;

export const gradeQuestion = (question: Question, responses: readonly string[]): boolean => {
  const actual = [...new Set(responses.map((answer) => answer.trim().toLocaleLowerCase()).filter(Boolean))].sort();
  const expected = expectedAnswers(question);
  return actual.length === expected.length && actual.every((answer, index) => answer === expected[index]);
};

export const answerLabel = (question: Question): string => {
  const expected = expectedAnswers(question);
  return expected.map((id) => question.options.find((option) => option.id.toLocaleLowerCase() === id)?.text ?? id).join("; ");
};
