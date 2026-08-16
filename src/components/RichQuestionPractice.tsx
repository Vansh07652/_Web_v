import { useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { recordAnswer } from "../lib/progress";
import type { CurriculumQuestionV2 } from "../types";
import { InlineMarkup } from "./MarkdownDocument";

type SourceFilter = "all" | string;

const sourceLabels: Record<string, string> = {
  "ap1-study-pack": "A&P I study pack",
  "ap2-study-pack": "A&P II study pack",
  "prenursing-native-app-bank": "Pre-nursing app bank",
  "expansion-question-bank": "Expansion question bank",
  "genetics-study-hub": "Genetics study hub",
};

const sourceLabel = (source: string) =>
  sourceLabels[source] ?? source.split("-").map((word) => `${word[0]?.toUpperCase() ?? ""}${word.slice(1)}`).join(" ");

export function RichQuestionPractice({ questions, subjectSlug }: { questions: CurriculumQuestionV2[]; subjectSlug?: string }) {
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>("all");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [complete, setComplete] = useState(false);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const headingId = useId();

  const filtered = useMemo(
    () => (sourceFilter === "all" ? questions : questions.filter((question) => question.sourceCollection === sourceFilter)),
    [questions, sourceFilter],
  );
  const sources = useMemo(() => [...new Set(questions.map((question) => question.sourceCollection))], [questions]);
  const question = filtered[index];

  useLayoutEffect(() => {
    if (sourceFilter !== "all" && !questions.some((item) => item.sourceCollection === sourceFilter)) setSourceFilter("all");
    setIndex(0);
    setSelected("");
    setSubmitted(false);
    setCorrectCount(0);
    setComplete(false);
  }, [sourceFilter, questions]);

  if (!questions.length) return <p className="notice">No practice questions are matched to this topic yet.</p>;

  const resetQuestion = (nextIndex: number) => {
    setIndex(nextIndex);
    setSelected("");
    setSubmitted(false);
  };

  const restart = () => {
    setCorrectCount(0);
    setComplete(false);
    resetQuestion(0);
  };

  if (complete) {
    return (
      <section className="quiz quiz-complete" aria-labelledby={headingId}>
        <p className="eyebrow">Practice complete</p>
        <h2 id={headingId}>You finished this set</h2>
        <p className="quiz-score">{correctCount} of {filtered.length} correct</p>
        <p>Go back over anything you missed, then run it again when you are ready.</p>
        <div className="action-row" style={{ justifyContent: "center" }}>
          <button type="button" className="button" onClick={restart}>Restart practice</button>
        </div>
      </section>
    );
  }

  if (!question) return null;

  const correct = selected === question.correctAnswer;
  const correctOption = question.options.find((option) => option.id === question.correctAnswer);
  const distractorAnalysis = question.rationales.distractorAnalysis?.trim();
  const hasDistinctDistractorAnalysis = Boolean(distractorAnalysis && distractorAnalysis !== question.rationales.whyCorrect.trim());
  const calculation = question.computation as { expression?: unknown; expected_value?: unknown; tolerance?: unknown; unit?: unknown } | null | undefined;

  const submit = () => {
    if (!selected || submitted) return;
    setSubmitted(true);
    if (correct) setCorrectCount((count) => count + 1);
    // Recorded in this browser only; see lib/progress.ts.
    if (subjectSlug) recordAnswer(subjectSlug, correct);
    requestAnimationFrame(() => feedbackRef.current?.focus());
  };

  const next = () => {
    if (index === filtered.length - 1) setComplete(true);
    else resetQuestion(index + 1);
  };

  return (
    <div className="rich-practice">
      {sources.length > 1 && (
        <div className="practice-filter">
          <label htmlFor={`${headingId}-source`}>Question source</label>
          <select
            id={`${headingId}-source`}
            value={sourceFilter}
            onChange={(event) => setSourceFilter(event.target.value as SourceFilter)}
          >
            <option value="all">All sources ({questions.length})</option>
            {sources.map((source) => (
              <option key={source} value={source}>
                {sourceLabel(source)} ({questions.filter((item) => item.sourceCollection === source).length})
              </option>
            ))}
          </select>
        </div>
      )}

      <section className="quiz" aria-labelledby={headingId}>
        <div className="quiz-progress">
          <div>
            <p>Question {index + 1} of {filtered.length}</p>
            <span className="source-chip">{sourceLabel(question.sourceCollection)}</span>
          </div>
          <progress value={index + 1} max={filtered.length} aria-label={`Question ${index + 1} of ${filtered.length}`}>
            {index + 1} of {filtered.length}
          </progress>
        </div>

        {question.mappingScope === "broad-source-topic" && (
          <p className="mapping-note">This question comes from a broader source topic that was matched to this one.</p>
        )}
        {question.mappingScope === "subject-wide-overlay" && (
          <p className="mapping-note">This question is matched to the course but not yet to a specific topic.</p>
        )}

        <form onSubmit={(event) => { event.preventDefault(); submit(); }}>
          <fieldset>
            <legend id={headingId}><InlineMarkup text={question.stem} /></legend>
            <div className="question-options">
              {question.options.map((option) => {
                const isCorrect = submitted && option.id === question.correctAnswer;
                const isIncorrectSelection = submitted && option.id === selected && !isCorrect;
                return (
                  <label key={option.id} className={`question-option${isCorrect ? " is-correct" : ""}${isIncorrectSelection ? " is-incorrect" : ""}`}>
                    <input
                      type="radio"
                      name={`${headingId}-${question.id}`}
                      value={option.id}
                      checked={selected === option.id}
                      disabled={submitted}
                      onChange={() => setSelected(option.id)}
                    />
                    <span className="option-letter" aria-hidden="true">{option.id}</span>
                    <span>
                      <InlineMarkup text={option.text} />
                      {isCorrect && <strong className="option-status">Correct answer</strong>}
                      {isIncorrectSelection && <strong className="option-status">Your answer</strong>}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          {!submitted && <button className="button" type="submit" disabled={!selected}>Check answer</button>}
        </form>

        {submitted && (
          <div
            ref={feedbackRef}
            className={`question-feedback ${correct ? "correct" : "incorrect"}`}
            tabIndex={-1}
            role="status"
            aria-live="polite"
          >
            <h2>{correct ? "Correct" : "Not quite"}</h2>
            {!correct && (
              <p>
                <strong>Correct answer:</strong>{" "}
                {correctOption ? <InlineMarkup text={correctOption.text} /> : question.correctAnswer}
              </p>
            )}
            <div className="rationale-block">
              <h3>Why it's correct</h3>
              <p><InlineMarkup text={question.rationales.whyCorrect} /></p>
            </div>
            <div className="rationale-block eli">
              <h3>In plain language</h3>
              <p><InlineMarkup text={question.rationales.eli10} /></p>
            </div>
            {hasDistinctDistractorAnalysis && (
              <div className="rationale-block">
                <h3>Why the other choices are wrong</h3>
                <p><InlineMarkup text={distractorAnalysis!} /></p>
              </div>
            )}
            {calculation?.expression != null && (
              <div className="calculation-block">
                <h3>The calculation</h3>
                <p>
                  <code>{String(calculation.expression)}</code> ={" "}
                  <strong>{String(calculation.expected_value ?? "")}{calculation.unit ? ` ${String(calculation.unit)}` : ""}</strong>
                  {calculation.tolerance != null && <> <span>(tolerance ±{String(calculation.tolerance)})</span></>}
                </p>
              </div>
            )}
            {question.references.length > 0 && (
              <details>
                <summary>Where this question came from</summary>
                <ul>
                  {question.references.map((reference, referenceIndex) => (
                    <li key={referenceIndex}>
                      {reference.url
                        ? <a href={reference.url} rel="noreferrer noopener" target="_blank">{reference.text}</a>
                        : reference.text}
                    </li>
                  ))}
                </ul>
              </details>
            )}
            {question.citationReviewRequired && (
              <p className="citation-flag">
                <strong>Citation not verified.</strong> The source bank did not include a structured
                citation for this question. Check it against your course materials before relying on it.
              </p>
            )}
          </div>
        )}

        <div className="quiz-navigation">
          <button type="button" className="button button-secondary" disabled={index === 0} onClick={() => resetQuestion(Math.max(0, index - 1))}>
            Previous
          </button>
          {submitted && (
            <button type="button" className="button" onClick={next}>
              {index === filtered.length - 1 ? "Finish practice" : "Next question"}
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
