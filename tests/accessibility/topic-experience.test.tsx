/**
 * The learning-experience surfaces, checked for the two things that matter
 * most about them: that the interactive parts carry real ARIA semantics, and
 * that no course or topic is described as more complete than its data supports.
 *
 * Rendered with `renderToStaticMarkup`, so these assertions are about the
 * markup React produces, not about a browser. That is deliberate: it is the
 * first render — before any script has run — that a screen reader, a crawler
 * and a reader on a slow connection all see.
 */
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { ExplanationTabs } from "../../src/components/ExplanationTabs";
import { ListenControls } from "../../src/components/ListenControls";
import { CourseCoverageSummary } from "../../src/components/CourseTransparency";
import { ConnectedLearning } from "../../src/components/TopicDetails";
import type { CurriculumTopicV2 } from "../../src/types";

const navigate = () => undefined;

const topic = (overrides: Partial<CurriculumTopicV2["sections"]> = {}): CurriculumTopicV2 => ({
  schemaVersion: "2.0.0",
  id: "topic:test-course:test-unit:test-topic",
  slug: "test-topic",
  title: "Test topic",
  subject: { id: "subject:test-course", slug: "test-course", title: "Test course" },
  unit: { id: "unit:test-unit", slug: "test-unit", title: "Test unit", order: 1 },
  order: 1,
  status: "final",
  sections: {
    overview: "An overview.",
    whyItMatters: "",
    learningObjectives: "",
    keyTerms: "",
    collegeNotes: "",
    howItWorks: "",
    comparisons: "",
    highYield: "",
    commonConfusions: "",
    memoryAids: "",
    eli10: "",
    quickReview: "",
    workedExamples: "",
    references: [],
    ...overrides,
  },
  aliases: [],
  authority: {},
  provenance: { sourceCollection: "test_collection", sourceFile: "content/test.md" },
  sourceSnapshotMarkdown: "",
});

const practiceFirstStatistics = {
  unitCount: 6,
  topicCount: 174,
  teachingTopicCount: 0,
  eli10TopicCount: 174,
  highYieldTopicCount: 0,
  referencedTopicCount: 174,
  exactOrMappedQuestionCount: 14505,
  subjectWideQuestionCount: 0,
  uniqueQuestionCount: 14505,
  citationReviewRequiredCount: 0,
};

describe("explanation switcher", () => {
  it("is a real tablist with roving tabindex when both explanations exist", () => {
    const html = renderToStaticMarkup(<ExplanationTabs college="# College\n\nText." plain="# Plain\n\nText." />);
    expect(html).toContain('role="tablist"');
    expect(html).toContain('role="tabpanel"');
    expect((html.match(/role="tab"/g) ?? []).length).toBe(3);
    // Exactly one tab is in the tab order; the rest are reached with the arrow keys.
    expect((html.match(/tabindex="0"/g) ?? []).length).toBe(1);
    expect((html.match(/aria-selected="true"/g) ?? []).length).toBe(1);
    expect(html).toContain('aria-controls=');
    expect(html).toContain('aria-labelledby=');
  });

  it("renders a single explanation with no tablist at all", () => {
    const collegeOnly = renderToStaticMarkup(<ExplanationTabs college="# College\n\nText." plain="" />);
    expect(collegeOnly).not.toContain('role="tablist"');
    expect(collegeOnly).not.toContain('role="tab"');
    expect(collegeOnly).toContain("College");

    const plainOnly = renderToStaticMarkup(<ExplanationTabs college="" plain="# Plain\n\nText." />);
    expect(plainOnly).not.toContain('role="tablist"');
    // …and does not promise a college-level version that does not exist.
    expect(plainOnly).toContain("No separate college-level note has been written for it yet.");
  });
});

describe("listen controls", () => {
  it("degrade to a static note where the browser has no speech engine", () => {
    const html = renderToStaticMarkup(
      <ListenControls sections={[{ id: "overview", label: "Overview", text: "Spoken text." }]} />,
    );
    // No speech engine in this environment, so no control is offered.
    expect(html).not.toContain("<button");
    expect(html).toContain('role="note"');
    expect(html).toContain("can still be read normally");
  });

  it("renders nothing at all when there is nothing to read", () => {
    expect(renderToStaticMarkup(<ListenControls sections={[]} />)).toBe("");
  });
});

describe("course transparency", () => {
  it("never shows a bare zero ratio for a course with no college notes", () => {
    const html = renderToStaticMarkup(
      <CourseCoverageSummary statistics={practiceFirstStatistics} status="final" navigate={navigate} />,
    );
    expect(html).not.toContain("0 of 174");
    expect(html).toContain("practice-first");
    expect(html).toContain("standalone college notes are still being written");
    // The real figures are still stated.
    expect(html).toContain("174 of 174");
    expect(html).toContain("14,505");
  });

  it("surfaces the catalog's own partial status", () => {
    const html = renderToStaticMarkup(
      <CourseCoverageSummary
        statistics={{
          unitCount: 9,
          topicCount: 77,
          teachingTopicCount: 77,
          eli10TopicCount: 24,
          highYieldTopicCount: 76,
          referencedTopicCount: 76,
          exactOrMappedQuestionCount: 0,
          subjectWideQuestionCount: 0,
          uniqueQuestionCount: 0,
          citationReviewRequiredCount: 0,
        }}
        status="partial"
        navigate={navigate}
      />,
    );
    expect(html).toContain("Partial course");
    expect(html).toContain("None in this course yet");
    expect(html).not.toContain("0 of");
  });
});

describe("connected learning", () => {
  it("renders nothing when the topic has no evidenced neighbours", () => {
    expect(renderToStaticMarkup(<ConnectedLearning topics={[]} navigate={navigate} />)).toBe("");
  });

  it("is a plain list of links, and says what the connection means", () => {
    const html = renderToStaticMarkup(
      <ConnectedLearning
        topics={[{ id: "topic:a:b:c", title: "Homeostasis", unitTitle: "Introduction", href: "/learn/a/b/c" }]}
        navigate={navigate}
      />,
    );
    expect(html).toContain("<ul");
    expect(html).toContain("Homeostasis");
    // The note has to say what the shared-question link does and does not mean,
    // because a bare "Continue with" list reads as a study order.
    expect(html).toContain("share practice questions");
    expect(html).toContain("not a study order");
    expect(html).toContain("prerequisite");
    // No prerequisite chain and no exam alignment exist in the corpus, so
    // neither may appear as a section of its own.
    expect(html).not.toContain("Prerequisite");
    expect(html).not.toContain("exam");
  });
});
