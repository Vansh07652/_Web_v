import { describe, expect, it } from "vitest";
import { createTopicPracticeSession, isSessionForTopicPool, questionsForTopic, shuffledQuestionIds } from "../lib/topic-practice";
import type { CurriculumQuestionV2 } from "../types";

const question = (id: string, topicIds: string[], overrides: Partial<CurriculumQuestionV2> = {}): CurriculumQuestionV2 => ({
  id,
  sourceCollection: "test-bank",
  sourceTopicId: "test-topic",
  mappedCanonicalTopicIds: topicIds,
  mappingScope: "exact",
  stem: `Question ${id}?`,
  options: [{ id: "A", text: "Correct" }, { id: "B", text: "Incorrect" }],
  correctAnswer: "A",
  rationales: { whyCorrect: "Because.", eli10: "A simple reason." },
  difficulty: "foundational",
  tags: [],
  references: [],
  citationReviewRequired: false,
  provenance: {},
  sourceSnapshotMarkdown: "",
  ...overrides,
});

describe("topic random practice", () => {
  const topicA = "topic:biology:cells";
  const topicB = "topic:biology:genetics";
  const pool = [question("a-1", [topicA]), question("a-2", [topicA]), question("b-1", [topicB]), question("invalid", [topicA], { correctAnswer: "Z" })];

  it("selects only valid questions mapped to the requested stable topic id", () => {
    expect(questionsForTopic(pool, topicA).map((item) => item.id)).toEqual(["a-1", "a-2"]);
    expect(questionsForTopic(pool, topicB).map((item) => item.id)).toEqual(["b-1"]);
    expect(questionsForTopic(pool, "topic:missing")).toEqual([]);
  });

  it("creates a non-mutating shuffled order with no repeated question ids", () => {
    const eligible = questionsForTopic(pool, topicA);
    const original = eligible.map((item) => item.id);
    const shuffled = shuffledQuestionIds(eligible, () => 0);
    expect(shuffled).toEqual(["a-2", "a-1"]);
    expect(new Set(shuffled).size).toBe(eligible.length);
    expect(eligible.map((item) => item.id)).toEqual(original);
  });

  it("supports zero- and one-question pools without introducing another topic", () => {
    expect(createTopicPracticeSession("topic:none", []).questionIds).toEqual([]);
    expect(createTopicPracticeSession(topicB, questionsForTopic(pool, topicB)).questionIds).toEqual(["b-1"]);
  });

  it("accepts only a persisted session for the same complete topic pool", () => {
    const eligible = questionsForTopic(pool, topicA);
    const session = createTopicPracticeSession(topicA, eligible);
    expect(isSessionForTopicPool(session, topicA, eligible)).toBe(true);
    expect(isSessionForTopicPool({ ...session, topicId: topicB }, topicA, eligible)).toBe(false);
    expect(isSessionForTopicPool({ ...session, questionIds: ["b-1", "a-1"] }, topicA, eligible)).toBe(false);
    expect(isSessionForTopicPool({ ...session, currentIndex: 3 }, topicA, eligible)).toBe(false);
  });
});
