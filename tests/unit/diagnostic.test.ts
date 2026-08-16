import { beforeEach, describe, expect, it } from "vitest";
import {
  DIAGNOSTIC_QUESTIONS,
  DIAGNOSTIC_STORAGE_KEY,
  clearDiagnostic,
  readDiagnostic,
  saveDiagnostic,
  scoreDiagnostic,
  type DiagnosticAnswer,
} from "../../src/lib/paths/diagnostic";
import { STUDY_PATHS, getStudyPath, isStudyPathSlug } from "../../src/lib/paths/study-paths";

/** Minimal localStorage stand-in; the unit tests run in a node environment. */
class MemoryStorage implements Storage {
  private map = new Map<string, string>();
  get length() { return this.map.size; }
  clear() { this.map.clear(); }
  getItem(key: string) { return this.map.get(key) ?? null; }
  key(index: number) { return [...this.map.keys()][index] ?? null; }
  removeItem(key: string) { this.map.delete(key); }
  setItem(key: string, value: string) { this.map.set(key, value); }
}

const useMemoryStorage = (): void => {
  Object.defineProperty(globalThis, "localStorage", { value: new MemoryStorage(), configurable: true, writable: true });
};

/** Picks one option per question by id, in the order the questions are published. */
const answersFor = (optionIds: string[]): DiagnosticAnswer[] =>
  optionIds.map((optionId, index) => ({ questionId: DIAGNOSTIC_QUESTIONS[index].id, optionId }));

/** A complete, ordinary set of answers: someone heading into nursing. */
const NURSING_ANSWERS = answersFor(["nursing", "clinical-skills", "starting-programme", "none", "two-to-five-hours"]);
/**
 * Answers that end in a genuine tie — an allied-health student with an entrance
 * exam next and no science behind them scores "exam-preparation" and
 * "healthcare-foundations" level. The documented rule is that published order
 * decides, and exam-preparation is published first.
 */
const TIED_ANSWERS = answersFor(["allied-health", "nothing-yet", "entrance-exam", "none", "under-two-hours"]);

const publishedIndex = (slug: string): number => STUDY_PATHS.findIndex((path) => path.slug === slug);

beforeEach(() => {
  useMemoryStorage();
  clearDiagnostic();
});

describe("diagnostic questions", () => {
  it("asks five questions, answerable in a couple of minutes", () => {
    expect(DIAGNOSTIC_QUESTIONS.length).toBe(5);
    const options = DIAGNOSTIC_QUESTIONS.reduce((total, question) => total + question.options.length, 0);
    expect(options).toBeLessThanOrEqual(25);
    for (const question of DIAGNOSTIC_QUESTIONS) {
      expect(question.prompt.length).toBeGreaterThan(0);
      expect(question.options.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("gives every question and every option a unique id", () => {
    const questionIds = DIAGNOSTIC_QUESTIONS.map((question) => question.id);
    expect(new Set(questionIds).size).toBe(questionIds.length);
    for (const question of DIAGNOSTIC_QUESTIONS) {
      const optionIds = question.options.map((option) => option.id);
      expect(new Set(optionIds).size).toBe(optionIds.length);
      for (const id of optionIds) expect(id.length).toBeGreaterThan(0);
    }
  });

  it("points every option at study paths that really exist", () => {
    for (const question of DIAGNOSTIC_QUESTIONS) {
      for (const option of question.options) {
        expect(option.label.length).toBeGreaterThan(0);
        expect(option.pathSlugs.length).toBeGreaterThan(0);
        expect(new Set(option.pathSlugs).size).toBe(option.pathSlugs.length);
        for (const slug of option.pathSlugs) {
          expect(isStudyPathSlug(slug)).toBe(true);
          expect(getStudyPath(slug)).toBeDefined();
        }
      }
    }
  });

  it("reaches every published path from at least one option", () => {
    const reachable = new Set(DIAGNOSTIC_QUESTIONS.flatMap((question) => question.options.flatMap((option) => option.pathSlugs)));
    for (const path of STUDY_PATHS) expect(reachable.has(path.slug)).toBe(true);
  });

  it("asks for nothing personal", () => {
    // A questionnaire that stays in the browser must still not collect
    // anything worth protecting in the first place.
    const forbidden = [
      /\bname\b/i, /\be-?mail\b/i, /\baddress\b/i, /\bphone\b/i, /\bage\b/i,
      /\bbirth\b/i, /\bbirthday\b/i, /\bgender\b/i, /\bethnicity\b/i, /\brace\b/i,
      /\bpostcode\b/i, /\bzip\b/i, /\bstudent id\b/i, /\bschool\b/i, /\bemployer\b/i,
      /\bdiagnosis\b/i, /\bmedical history\b/i, /\bincome\b/i, /\bpassword\b/i,
    ];
    const text = DIAGNOSTIC_QUESTIONS
      .flatMap((question) => [question.prompt, ...question.options.map((option) => option.label)])
      .join(" ");
    for (const pattern of forbidden) expect(pattern.test(text)).toBe(false);
  });
});

describe("scoring", () => {
  it("returns undefined when nothing was answered", () => {
    expect(scoreDiagnostic([])).toBeUndefined();
  });

  it("returns undefined when nothing answered is recognisable", () => {
    expect(scoreDiagnostic([{ questionId: "not-a-question", optionId: "not-an-option" }])).toBeUndefined();
    expect(scoreDiagnostic([{ questionId: DIAGNOSTIC_QUESTIONS[0].id, optionId: "not-an-option" }])).toBeUndefined();
  });

  it("gives the identical result for the identical answers", () => {
    const first = scoreDiagnostic(NURSING_ANSWERS);
    const second = scoreDiagnostic(NURSING_ANSWERS);
    expect(first).toBeDefined();
    expect(first).toEqual(second);
    // A fresh array of the same values, in case anything ever memoised on it.
    expect(first).toEqual(scoreDiagnostic(NURSING_ANSWERS.map((answer) => ({ ...answer }))));
  });

  it("does not depend on the order the answers arrive in", () => {
    const shuffled = [...NURSING_ANSWERS].reverse();
    expect(scoreDiagnostic(shuffled)).toEqual(scoreDiagnostic(NURSING_ANSWERS));
  });

  it("recommends the path the answers actually point at", () => {
    const result = scoreDiagnostic(NURSING_ANSWERS);
    expect(result?.recommendedPathSlug).toBe("nursing-foundations");
    expect(getStudyPath(result?.recommendedPathSlug ?? "")).toBeDefined();
  });

  it("scores one point per option that names a path", () => {
    const single = scoreDiagnostic([{ questionId: "hardest", optionId: "chemistry" }]);
    expect(single?.scores).toEqual([{ pathSlug: "chemistry-foundations", score: 1 }]);
    expect(single?.recommendedPathSlug).toBe("chemistry-foundations");
    expect(single?.runnersUp).toEqual([]);
  });

  it("orders the scores highest first and never repeats a path", () => {
    const result = scoreDiagnostic(NURSING_ANSWERS);
    const scores = result?.scores ?? [];
    expect(scores.length).toBeGreaterThan(1);
    for (let index = 1; index < scores.length; index += 1) {
      expect(scores[index - 1].score).toBeGreaterThanOrEqual(scores[index].score);
    }
    expect(new Set(scores.map((entry) => entry.pathSlug)).size).toBe(scores.length);
    for (const entry of scores) expect(entry.score).toBeGreaterThan(0);
  });

  it("breaks a tie on published path order, every time", () => {
    const result = scoreDiagnostic(TIED_ANSWERS);
    const [first, second] = result?.scores ?? [];
    expect(first?.score).toBe(second?.score);
    expect(publishedIndex(first.pathSlug)).toBeLessThan(publishedIndex(second.pathSlug));
    expect(result?.recommendedPathSlug).toBe("exam-preparation");
    // Same answers, opposite order in: the same winner.
    expect(scoreDiagnostic([...TIED_ANSWERS].reverse())?.recommendedPathSlug).toBe("exam-preparation");
  });

  it("keeps every equal-scoring run in published order", () => {
    // The general form of the rule above, checked across the whole list.
    const scores = scoreDiagnostic(TIED_ANSWERS)?.scores ?? [];
    for (let index = 1; index < scores.length; index += 1) {
      if (scores[index - 1].score !== scores[index].score) continue;
      expect(publishedIndex(scores[index - 1].pathSlug)).toBeLessThan(publishedIndex(scores[index].pathSlug));
    }
  });

  it("lists at most two runners-up, and never the recommendation itself", () => {
    const result = scoreDiagnostic(NURSING_ANSWERS);
    expect(result?.runnersUp.length).toBeLessThanOrEqual(2);
    expect(result?.runnersUp).not.toContain(result?.recommendedPathSlug);
    for (const slug of result?.runnersUp ?? []) expect(getStudyPath(slug)).toBeDefined();
    expect(result?.runnersUp).toEqual((result?.scores ?? []).slice(1, 3).map((entry) => entry.pathSlug));
  });

  it("explains the suggestion with the answers that produced it", () => {
    const result = scoreDiagnostic(NURSING_ANSWERS);
    expect(result?.rationale).toContain("Nursing foundations");
    expect(result?.rationale).toContain("Nursing or practical nursing");
    expect(result?.rationale).toContain("Clinical skills, patient safety and dosage maths");
    // One sentence, so exactly one full stop at the end of it.
    expect(result?.rationale.endsWith(".")).toBe(true);
  });

  it("says so plainly when every answer pointed the same way", () => {
    const result = scoreDiagnostic([{ questionId: "hardest", optionId: "psychology" }]);
    expect(result?.rationale).toContain("every answer you gave points to it");
    expect(result?.rationale).toContain("Psychology and human development");
  });

  it("ignores an unknown option instead of throwing", () => {
    const withNoise: DiagnosticAnswer[] = [
      { questionId: "hardest", optionId: "not-an-option" },
      { questionId: "hardest", optionId: "chemistry" },
      { questionId: "not-a-question", optionId: "chemistry" },
    ];
    expect(() => scoreDiagnostic(withNoise)).not.toThrow();
    expect(scoreDiagnostic(withNoise)).toEqual(scoreDiagnostic([{ questionId: "hardest", optionId: "chemistry" }]));
  });

  it("takes the first recognisable answer to a question and drops the rest", () => {
    const twice: DiagnosticAnswer[] = [
      { questionId: "hardest", optionId: "chemistry" },
      { questionId: "hardest", optionId: "anatomy" },
    ];
    expect(scoreDiagnostic(twice)?.recommendedPathSlug).toBe("chemistry-foundations");
  });

  it("survives malformed answers without throwing", () => {
    const rubbish = [null, 42, "chemistry", [], { questionId: 1, optionId: 2 }, {}] as unknown as DiagnosticAnswer[];
    expect(() => scoreDiagnostic(rubbish)).not.toThrow();
    expect(scoreDiagnostic(rubbish)).toBeUndefined();
    expect(() => scoreDiagnostic(undefined as unknown as DiagnosticAnswer[])).not.toThrow();
    expect(scoreDiagnostic(undefined as unknown as DiagnosticAnswer[])).toBeUndefined();
  });
});

describe("diagnostic storage", () => {
  it("uses the versioned key the page documents", () => {
    expect(DIAGNOSTIC_STORAGE_KEY).toBe("medmosa.diagnostic.v1");
  });

  it("stores and restores the answers", () => {
    saveDiagnostic(NURSING_ANSWERS);
    expect(readDiagnostic()).toEqual(NURSING_ANSWERS);
    expect(scoreDiagnostic(readDiagnostic())).toEqual(scoreDiagnostic(NURSING_ANSWERS));
  });

  it("starts empty and clears on request", () => {
    expect(readDiagnostic()).toEqual([]);
    saveDiagnostic(NURSING_ANSWERS);
    clearDiagnostic();
    expect(readDiagnostic()).toEqual([]);
    expect(globalThis.localStorage.getItem(DIAGNOSTIC_STORAGE_KEY)).toBeNull();
  });

  it("writes nothing but question ids and option ids", () => {
    const smuggled = [
      { questionId: "hardest", optionId: "chemistry", note: "my name is not for storing", email: "someone@example.com" },
    ] as unknown as DiagnosticAnswer[];
    saveDiagnostic(smuggled);
    const raw = globalThis.localStorage.getItem(DIAGNOSTIC_STORAGE_KEY) ?? "";
    expect(raw).toContain("chemistry");
    expect(raw).not.toContain("someone@example.com");
    expect(raw).not.toContain("my name is not for storing");
    const parsed = JSON.parse(raw) as DiagnosticAnswer[];
    for (const entry of parsed) expect(Object.keys(entry).sort()).toEqual(["optionId", "questionId"]);
  });

  it("drops answers it no longer recognises when reading them back", () => {
    globalThis.localStorage.setItem(DIAGNOSTIC_STORAGE_KEY, JSON.stringify([
      { questionId: "hardest", optionId: "chemistry" },
      { questionId: "hardest", optionId: "anatomy" },
      { questionId: "retired-question", optionId: "retired-option" },
      { questionId: "time", optionId: "not-an-option" },
    ]));
    expect(readDiagnostic()).toEqual([{ questionId: "hardest", optionId: "chemistry" }]);
  });

  it("survives a corrupt stored value without throwing", () => {
    globalThis.localStorage.setItem(DIAGNOSTIC_STORAGE_KEY, "{not json");
    expect(() => readDiagnostic()).not.toThrow();
    expect(readDiagnostic()).toEqual([]);

    globalThis.localStorage.setItem(DIAGNOSTIC_STORAGE_KEY, JSON.stringify({ answers: "all of them" }));
    expect(readDiagnostic()).toEqual([]);

    globalThis.localStorage.setItem(DIAGNOSTIC_STORAGE_KEY, JSON.stringify([null, 7, "nursing", { questionId: "hardest" }]));
    expect(readDiagnostic()).toEqual([]);
    expect(scoreDiagnostic(readDiagnostic())).toBeUndefined();
  });

  it("keeps working when the browser refuses to persist, and recovers after", () => {
    Object.defineProperty(globalThis, "localStorage", {
      value: {
        getItem: () => null,
        setItem() { throw new Error("QuotaExceededError"); },
        removeItem() {},
        clear() {},
        key: () => null,
        length: 0,
      },
      configurable: true,
      writable: true,
    });
    expect(() => saveDiagnostic(NURSING_ANSWERS)).not.toThrow();
    // The visit still works: the answers are held in memory for this page.
    expect(readDiagnostic()).toEqual(NURSING_ANSWERS);
    expect(() => clearDiagnostic()).not.toThrow();

    // A working store appearing again must be picked up rather than ignored.
    useMemoryStorage();
    clearDiagnostic();
    saveDiagnostic(NURSING_ANSWERS);
    expect(readDiagnostic()).toEqual(NURSING_ANSWERS);
  });

  it("is safe when reading localStorage itself throws", () => {
    Object.defineProperty(globalThis, "localStorage", {
      get() { throw new Error("blocked by policy"); },
      configurable: true,
    });
    expect(() => readDiagnostic()).not.toThrow();
    expect(readDiagnostic()).toEqual([]);
    expect(() => saveDiagnostic(NURSING_ANSWERS)).not.toThrow();
    expect(() => clearDiagnostic()).not.toThrow();
  });

  it("hands back a copy, so a caller cannot edit what is stored", () => {
    saveDiagnostic(NURSING_ANSWERS);
    const first = readDiagnostic();
    first.push({ questionId: "hardest", optionId: "anatomy" });
    first[0].optionId = "tampered";
    expect(readDiagnostic()).toEqual(NURSING_ANSWERS);
  });
});
