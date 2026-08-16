import { useEffect, useId, useMemo, useRef, useState } from "react";
import { recordAnswer } from "../lib/progress";
import { createTopicPracticeSession, isSessionForTopicPool, type TopicPracticeSession } from "../lib/topic-practice";
import type { CurriculumQuestionV2 } from "../types";
import { InlineMarkup } from "./MarkdownDocument";

const storageKeyFor = (topicId: string) => `medmosa.topic-practice.v1:${encodeURIComponent(topicId)}`;

function readSession(topicId: string, questions: readonly CurriculumQuestionV2[]): TopicPracticeSession | undefined {
  try {
    const raw = window.sessionStorage.getItem(storageKeyFor(topicId));
    if (!raw) return undefined;
    const stored: unknown = JSON.parse(raw);
    return isSessionForTopicPool(stored, topicId, questions) ? stored : undefined;
  } catch {
    return undefined;
  }
}

function writeSession(session: TopicPracticeSession) {
  try { window.sessionStorage.setItem(storageKeyFor(session.topicId), JSON.stringify(session)); } catch { /* Storage is optional. */ }
}

export function TopicRandomQuestionPractice({
  questions,
  subjectSlug,
  subjectTitle,
  topicId,
  topicTitle,
  onBackToTopic,
}: {
  questions: CurriculumQuestionV2[];
  subjectSlug: string;
  subjectTitle: string;
  topicId: string;
  topicTitle: string;
  onBackToTopic: () => void;
}) {
  const [session, setSession] = useState<TopicPracticeSession>();
  const [selected, setSelected] = useState("");
  const feedbackRef = useRef<HTMLDivElement>(null);
  const headingId = useId();
  const poolKey = useMemo(() => questions.map((question) => question.id).sort().join("|"), [questions]);
  const byId = useMemo(() => new Map(questions.map((question) => [question.id, question])), [questions]);

  useEffect(() => {
    const restored = readSession(topicId, questions);
    setSession(restored ?? createTopicPracticeSession(topicId, questions));
  }, [poolKey, questions, topicId]);

  useEffect(() => { if (session) writeSession(session); }, [session]);

  const orderedQuestions = useMemo(
    () => session?.questionIds.flatMap((id) => {
      const question = byId.get(id);
      return question ? [question] : [];
    }) ?? [],
    [byId, session],
  );
  const question = session ? orderedQuestions[session.currentIndex] : undefined;
  const submittedAnswer = question && session?.answer?.questionId === question.id ? session.answer : undefined;
  const submitted = Boolean(submittedAnswer);

  useEffect(() => {
    setSelected(submittedAnswer?.optionId ?? "");
  }, [question?.id, submittedAnswer?.optionId]);

  if (!session || !question && session.currentIndex < orderedQuestions.length) {
    return <p className="notice" role="status">Preparing your question round…</p>;
  }

  const restart = () => {
    setSelected("");
    const next = createTopicPracticeSession(topicId, questions);
    writeSession(next);
    setSession(next);
  };

  if (session.currentIndex >= orderedQuestions.length) {
    const singleQuestion = orderedQuestions.length === 1;
    return (
      <section className="quiz quiz-complete" aria-labelledby={headingId}>
        <p className="eyebrow">Topic round complete</p>
        <h2 id={headingId}>You finished {topicTitle}</h2>
        <p className="quiz-score">{session.correctCount} of {orderedQuestions.length} correct</p>
        <p>{singleQuestion ? "This topic currently has one available practice question." : "You saw every available question once, without repeats."}</p>
        <div className="action-row topic-practice-complete-actions">
          <button type="button" className="button" onClick={restart}>Practice again</button>
          <button type="button" className="button button-secondary" onClick={onBackToTopic}>Back to topic</button>
        </div>
      </section>
    );
  }

  if (!question) return <p className="notice" role="alert">This practice round could not be restored. Start a new round from the topic.</p>;

  const correct = selected === question.correctAnswer;
  const correctOption = question.options.find((option) => option.id === question.correctAnswer);
  const distractorAnalysis = question.rationales.distractorAnalysis?.trim();
  const hasDistinctDistractorAnalysis = Boolean(distractorAnalysis && distractorAnalysis !== question.rationales.whyCorrect.trim());
  const calculation = question.computation as { expression?: unknown; expected_value?: unknown; tolerance?: unknown; unit?: unknown } | null | undefined;

  const submit = () => {
    if (!selected || submitted) return;
    setSession((current) => {
      if (!current || current.answer) return current;
      const next = {
        ...current,
        answer: { questionId: question.id, optionId: selected },
        correctCount: current.correctCount + (correct ? 1 : 0),
        updatedAt: Date.now(),
      };
      writeSession(next);
      return next;
    });
    recordAnswer(subjectSlug, correct);
    requestAnimationFrame(() => feedbackRef.current?.focus());
  };

  const next = () => {
    setSelected("");
    setSession((current) => {
      if (!current) return current;
      const updated = { ...current, currentIndex: current.currentIndex + 1, answer: undefined, updatedAt: Date.now() };
      writeSession(updated);
      return updated;
    });
  };

  return (
    <section className="quiz topic-random-practice" aria-labelledby={headingId}>
      <div className="quiz-progress">
        <div>
          <p>Question {session.currentIndex + 1} of {orderedQuestions.length}</p>
          <span className="source-chip">{subjectTitle} · {topicTitle}</span>
        </div>
        <progress value={session.currentIndex + 1} max={orderedQuestions.length} aria-label={`Question ${session.currentIndex + 1} of ${orderedQuestions.length}`}>
          {session.currentIndex + 1} of {orderedQuestions.length}
        </progress>
      </div>

      <form onSubmit={(event) => { event.preventDefault(); submit(); }}>
        <fieldset>
          <legend id={headingId}><InlineMarkup text={question.stem} /></legend>
          <div className="question-options">
            {question.options.map((option) => {
              const isCorrect = submitted && option.id === question.correctAnswer;
              const isIncorrectSelection = submitted && option.id === selected && !isCorrect;
              return (
                <label key={option.id} className={`question-option${isCorrect ? " is-correct" : ""}${isIncorrectSelection ? " is-incorrect" : ""}`}>
                  <input type="radio" name={`${headingId}-${question.id}`} value={option.id} checked={selected === option.id} disabled={submitted} onChange={() => setSelected(option.id)} />
                  <span className="option-letter" aria-hidden="true">{option.id}</span>
                  <span><InlineMarkup text={option.text} />{isCorrect && <strong className="option-status">Correct answer</strong>}{isIncorrectSelection && <strong className="option-status">Your answer</strong>}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
        {!submitted && <button className="button" type="submit" disabled={!selected}>Check answer</button>}
      </form>

      {submitted && (
        <div ref={feedbackRef} className={`question-feedback ${correct ? "correct" : "incorrect"}`} tabIndex={-1} role="status" aria-live="polite">
          <h2>{correct ? "Correct" : "Not quite"}</h2>
          {!correct && <p><strong>Correct answer:</strong> {correctOption ? <InlineMarkup text={correctOption.text} /> : question.correctAnswer}</p>}
          <div className="rationale-block"><h3>Why it is correct</h3><p>{question.rationales.whyCorrect ? <InlineMarkup text={question.rationales.whyCorrect} /> : "An explanation is not available for this question yet."}</p></div>
          {question.rationales.eli10 && <div className="rationale-block eli"><h3>In plain language</h3><p><InlineMarkup text={question.rationales.eli10} /></p></div>}
          {hasDistinctDistractorAnalysis && <div className="rationale-block"><h3>Why the other choices are wrong</h3><p><InlineMarkup text={distractorAnalysis!} /></p></div>}
          {calculation?.expression != null && <div className="calculation-block"><h3>The calculation</h3><p><code>{String(calculation.expression)}</code> = <strong>{String(calculation.expected_value ?? "")}{calculation.unit ? ` ${String(calculation.unit)}` : ""}</strong>{calculation.tolerance != null && <> <span>(tolerance ±{String(calculation.tolerance)})</span></>}</p></div>}
          {question.references.length > 0 && <details><summary>Where this question came from</summary><ul>{question.references.map((reference, index) => <li key={index}>{reference.url ? <a href={reference.url} rel="noreferrer noopener" target="_blank">{reference.text}</a> : reference.text}</li>)}</ul></details>}
          {question.citationReviewRequired && <p className="citation-flag"><strong>Citation not verified.</strong> Check this against your course materials before relying on it.</p>}
        </div>
      )}

      <div className="quiz-navigation">
        <button type="button" className="button button-secondary" onClick={onBackToTopic}>Back to topic</button>
        {submitted && <button type="button" className="button" onClick={next}>{session.currentIndex + 1 === orderedQuestions.length ? "Finish round" : "Next random question"}</button>}
      </div>
    </section>
  );
}
