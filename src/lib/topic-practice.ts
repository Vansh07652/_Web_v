import type { CurriculumQuestionV2 } from "../types";

export interface TopicPracticeAnswer {
  questionId: string;
  optionId: string;
}

export interface TopicPracticeSession {
  version: 1;
  topicId: string;
  questionIds: string[];
  currentIndex: number;
  correctCount: number;
  answer?: TopicPracticeAnswer;
  updatedAt: number;
}

/** Excludes incomplete records rather than risking a broken practice screen. */
export const isUsableTopicQuestion = (question: CurriculumQuestionV2): boolean =>
  Boolean(
    question.id.trim()
    && question.stem.trim()
    && question.options.length >= 2
    && question.options.some((option) => option.id === question.correctAnswer && option.text.trim()),
  );

/** Stable topic ids are the only eligibility check; display labels are never used. */
export const questionsForTopic = (questions: readonly CurriculumQuestionV2[], topicId: string): CurriculumQuestionV2[] =>
  questions.filter((question) => isUsableTopicQuestion(question) && question.mappedCanonicalTopicIds.includes(topicId));

/** Returns a new Fisher–Yates order and never mutates the question data. */
export const shuffledQuestionIds = (questions: readonly CurriculumQuestionV2[], random: () => number = Math.random): string[] => {
  const ids = questions.map((question) => question.id);
  for (let index = ids.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [ids[index], ids[swapIndex]] = [ids[swapIndex], ids[index]];
  }
  return ids;
};

export const createTopicPracticeSession = (topicId: string, questions: readonly CurriculumQuestionV2[]): TopicPracticeSession => ({
  version: 1,
  topicId,
  questionIds: shuffledQuestionIds(questions),
  currentIndex: 0,
  correctCount: 0,
  updatedAt: Date.now(),
});

/** Rejects edited/stale session storage rather than letting it select another topic's question. */
export const isSessionForTopicPool = (
  value: unknown,
  topicId: string,
  questions: readonly CurriculumQuestionV2[],
): value is TopicPracticeSession => {
  if (!value || typeof value !== "object") return false;
  const session = value as Partial<TopicPracticeSession>;
  const ids = new Set(questions.map((question) => question.id));
  if (session.version !== 1 || session.topicId !== topicId || !Array.isArray(session.questionIds)) return false;
  if (session.questionIds.length !== ids.size || new Set(session.questionIds).size !== ids.size) return false;
  if (!session.questionIds.every((id) => typeof id === "string" && ids.has(id))) return false;
  if (!Number.isInteger(session.currentIndex) || session.currentIndex! < 0 || session.currentIndex! > ids.size) return false;
  if (!Number.isInteger(session.correctCount) || session.correctCount! < 0 || session.correctCount! > ids.size) return false;
  if (session.answer && (!ids.has(session.answer.questionId) || typeof session.answer.optionId !== "string")) return false;
  return true;
};
