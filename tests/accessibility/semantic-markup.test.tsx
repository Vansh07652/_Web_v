import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { SiteHeader, Breadcrumbs, EmptyState } from "../../src/components/ui";
import { QuestionPractice } from "../../src/components/QuestionPractice";
import type { Question } from "../../src/types";
import { LearnLandingPage } from "../../src/pages/LearnLanding";

const navigate = () => undefined;
const question: Question = {
  id: "keyboard-test", subject: "biology-1", lesson: "cells", contentType: "question", questionType: "multiple-choice",
  question: "Which answer?", options: [{ id: "a", text: "First" }, { id: "b", text: "Second" }], correctAnswer: "a",
  explanation: "First is correct.", difficulty: "easy", tags: [], source: "test", originalFile: "test", status: "approved",
  reviewStatus: "audited", humanVerificationRequired: false, filePath: "test",
};

describe("accessible semantic markup", () => {
  it("labels primary and breadcrumb navigation", () => {
    const html = renderToStaticMarkup(<><SiteHeader navigate={navigate} currentPath="/subjects" /><Breadcrumbs navigate={navigate} items={[{ label: "Home", href: "/" }, { label: "Subjects" }]} /></>);
    expect(html).toContain('aria-label="Primary"');
    expect(html).toContain('aria-label="Breadcrumb"');
    expect(html).toContain('aria-current="page"');
    expect(html).toContain('aria-expanded="false"');
  });

  it("uses a fieldset, legend, native radio control, and progress element for questions", () => {
    const html = renderToStaticMarkup(<QuestionPractice questions={[question]} />);
    expect(html).toContain("<fieldset>");
    expect(html).toContain("<legend");
    expect(html).toContain('type="radio"');
    expect(html).toContain("<progress");
    expect(html).toContain('type="submit"');
  });

  it("gives empty states a uniquely named section", () => {
    const html = renderToStaticMarkup(<><EmptyState title="Nothing here">Try another subject.</EmptyState><EmptyState title="Also nothing">Try again.</EmptyState></>);
    const ids = [...html.matchAll(/aria-labelledby="([^"]+)"/g)].map((match) => match[1]);
    expect(ids).toHaveLength(2);
    // Two empty states on one page must not collide on the same DOM id.
    expect(new Set(ids).size).toBe(2);
    for (const id of ids) expect(html).toContain(`id="${id}"`);
  });

  it("uses native progress, accordion, and navigation semantics on the landing page", () => {
    const html = renderToStaticMarkup(<LearnLandingPage navigate={navigate} />);
    expect(html).toContain("<progress");
    expect(html).toContain("<details>");
    expect(html).toContain("<summary>");
    expect(html).toContain('aria-label="Sources, policies and corrections"');
    expect(html).toContain("Start Learning Free");
    expect(html).toContain("Try a Sample Quiz");
    expect(html).not.toContain("Live product sample");
  });

});
