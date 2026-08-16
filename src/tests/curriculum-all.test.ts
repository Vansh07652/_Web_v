import { describe, expect, it } from "vitest";
import {
  getCurriculumSubjectSummary,
  loadCurriculumCatalog,
  loadCurriculumQuestions,
  loadCurriculumSubject,
  loadCurriculumTopic,
} from "../lib/content/curriculum-v2";

describe("Master Curriculum Registry", () => {
  it("publishes the complete canonical catalog", () => {
    const catalog = loadCurriculumCatalog();
    expect(catalog.totals).toMatchObject({
      subjects: 39,
      units: 201,
      topics: 1317,
      teachingTopics: 1023,
      eli10Topics: 1309,
      referencedTopics: 825,
      uniqueQuestionsAcrossCatalog: 24400,
      questionPlacements: 25000,
    });
    expect(new Set(catalog.subjects.map((subject) => subject.slug)).size).toBe(39);
    expect(new Set(catalog.subjects.map((subject) => subject.category))).toEqual(new Set(["pre-health-core", "healthcare-foundations", "pathophysiology", "allied-health"]));
  });

  it("loads every generated subject and its route coordinates", async () => {
    const catalog = loadCurriculumCatalog();
    for (const summary of catalog.subjects) {
      const subject = await loadCurriculumSubject(summary.slug);
      expect(subject?.subject.id).toBe(summary.id);
      expect(subject?.units).toHaveLength(summary.statistics.unitCount);
      expect(subject?.units.flatMap((unit) => unit.topics)).toHaveLength(summary.statistics.topicCount);
      const firstUnit = subject?.units[0];
      const firstTopic = firstUnit?.topics[0];
      expect(firstUnit).toBeDefined();
      expect(firstTopic).toBeDefined();
      expect((await loadCurriculumTopic(summary.slug, firstUnit!.slug, firstTopic!.slug))?.id).toBe(firstTopic!.id);
    }
  });

  it("preserves question-led foundations and subject-wide overlays honestly", async () => {
    const medicalTerminology = await loadCurriculumSubject("medical-terminology");
    const medicalQuestions = await loadCurriculumQuestions("medical-terminology");
    expect(medicalTerminology?.statistics.teachingTopicCount).toBe(0);
    expect(medicalQuestions?.questions).toHaveLength(120);
    expect(medicalQuestions?.subjectWideQuestions).toHaveLength(300);
    expect(medicalQuestions?.questions.every((question) => question.rationales.whyCorrect && question.rationales.eli10)).toBe(true);

    const anatomyTwoQuestions = await loadCurriculumQuestions("anatomy-physiology-2");
    expect(anatomyTwoQuestions?.questions).toHaveLength(26);
    expect(anatomyTwoQuestions?.subjectWideQuestions).toHaveLength(621);
    expect(anatomyTwoQuestions?.subjectWideQuestions?.every((question) => question.mappingScope === "subject-wide-overlay" && question.mappedCanonicalTopicIds.length === 0)).toBe(true);
  });

  it("retains teaching content, ELI-10, references, and known source gaps", async () => {
    const physics = await loadCurriculumTopic("physics-1", "course-topics", "kinematics");
    expect(physics?.sections.collegeNotes.length).toBeGreaterThan(100);
    expect(physics?.sections.eli10.length).toBeGreaterThan(50);
    expect(physics?.sections.references.length).toBeGreaterThan(0);
    // Organic Chemistry I used to be the example of a partial ELI-10 gap: 24
    // plain-language explanations across 77 topics. The Need_Review import
    // replaced its notes with a set that carries one for every topic, so the
    // gap is genuinely closed and asserting it would now be asserting a lie.
    const organic = getCurriculumSubjectSummary("organic-chemistry-1")!.statistics;
    expect(organic.eli10TopicCount).toBe(organic.topicCount);

    // The point of this check is that a real gap is never papered over, so it
    // moves to a course that still has one. Nursing Math & Dosage is a question
    // bank with plain-language explanations on only some of its topics.
    const dosage = getCurriculumSubjectSummary("nursing-math-dosage")!.statistics;
    expect(dosage.eli10TopicCount).toBeLessThan(dosage.topicCount);

    // The imported notes carry no citations at all, and the catalog says so
    // rather than implying coverage the corpus does not have.
    expect(organic.referencedTopicCount).toBe(0);
  });

  it("rejects unknown curriculum coordinates", async () => {
    expect(getCurriculumSubjectSummary("not-a-subject")).toBeUndefined();
    expect(await loadCurriculumSubject("not-a-subject")).toBeUndefined();
    expect(await loadCurriculumTopic("physics-1", "course-topics", "not-a-topic")).toBeUndefined();
  });
});
