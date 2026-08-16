import { useId, useLayoutEffect, useRef, useState } from "react";
import type { Question } from "../types";
import { allowsMultipleAnswers, answerLabel, expectedAnswers, gradeQuestion, isChoiceQuestion } from "../lib/quiz";
import { InlineMarkup } from "./MarkdownDocument";

export function QuestionPractice({ questions }: { questions: Question[] }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [writtenAnswer, setWrittenAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [attempts, setAttempts] = useState<Record<number, { selected: string[]; writtenAnswer: string; correct: boolean }>>({});
  const [complete, setComplete] = useState(false);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const headingId = useId();
  const question = questions[index];

  useLayoutEffect(() => {
    const attempt = attempts[index];
    setSelected(attempt?.selected ?? []);
    setWrittenAnswer(attempt?.writtenAnswer ?? "");
    setSubmitted(Boolean(attempt));
  }, [index, questions]);

  if (!question) return null;
  const choiceQuestion = isChoiceQuestion(question);
  const multiple = allowsMultipleAnswers(question);
  const responses = choiceQuestion ? selected : [writtenAnswer];
  const correct = gradeQuestion(question, responses);
  const hasAnswer = choiceQuestion ? selected.length > 0 : writtenAnswer.trim().length > 0;
  const expected = expectedAnswers(question);
  const correctCount = Object.values(attempts).filter((attempt) => attempt.correct).length;

  const toggleOption = (optionId: string) => {
    if (!multiple) setSelected([optionId]);
    else setSelected((current) => current.includes(optionId) ? current.filter((id) => id !== optionId) : [...current, optionId]);
  };

  const submit = () => {
    if (!hasAnswer || submitted) return;
    setSubmitted(true);
    setAttempts((current) => current[index] ? current : {
      ...current,
      [index]: { selected: [...selected], writtenAnswer, correct },
    });
    requestAnimationFrame(() => feedbackRef.current?.focus());
  };

  const next = () => {
    if (index === questions.length - 1) setComplete(true);
    else setIndex((value) => value + 1);
  };

  const restart = () => {
    setIndex(0);
    setSelected([]);
    setWrittenAnswer("");
    setSubmitted(false);
    setAttempts({});
    setComplete(false);
  };

  if (complete) {
    return (
      <section className="quiz quiz-complete" aria-labelledby={headingId}>
        <p className="eyebrow">Practice complete</p>
        <h2 id={headingId}>You finished this question set</h2>
        <p className="quiz-score">{correctCount} of {questions.length} correct</p>
        <p>Go back over anything you missed, then run it again when you are ready.</p>
        <div className="action-row" style={{ justifyContent: "center" }}>
          <button type="button" className="button" onClick={restart}>Restart practice</button>
        </div>
      </section>
    );
  }

  return (
    <section className="quiz" aria-labelledby={headingId}>
      <div className="quiz-progress">
        <p>Question {index + 1} of {questions.length}</p>
        <progress value={index + 1} max={questions.length} aria-label={`Question ${index + 1} of ${questions.length}`}>{index + 1} of {questions.length}</progress>
      </div>
      <form onSubmit={(event) => { event.preventDefault(); submit(); }}>
        <fieldset>
          <legend id={headingId}><InlineMarkup text={question.question} /></legend>
          {multiple && <p className="question-instruction">Select all answers that apply.</p>}
          {choiceQuestion ? (
            <div className="question-options">
              {question.options.map((option) => {
                const isCorrect = submitted && expected.includes(option.id.toLocaleLowerCase());
                const isIncorrectSelection = submitted && selected.includes(option.id) && !isCorrect;
                return (
                  <label key={option.id} className={`question-option${isCorrect ? " is-correct" : ""}${isIncorrectSelection ? " is-incorrect" : ""}`}>
                    <input type={multiple ? "checkbox" : "radio"} name={`${headingId}-${question.id}`} value={option.id} checked={selected.includes(option.id)} disabled={submitted} onChange={() => toggleOption(option.id)} />
                    <span className="option-letter" aria-hidden="true">{option.id.toUpperCase()}</span>
                    <span><InlineMarkup text={option.text} />{isCorrect && <strong className="option-status">Correct answer</strong>}{isIncorrectSelection && <strong className="option-status">Your answer</strong>}</span>
                  </label>
                );
              })}
            </div>
          ) : (
            <label className="written-answer"><span>Your answer</span><input value={writtenAnswer} disabled={submitted} onChange={(event) => setWrittenAnswer(event.target.value)} autoComplete="off" /></label>
          )}
        </fieldset>
        {!submitted && <button className="button" type="submit" disabled={!hasAnswer}>Check answer</button>}
      </form>
      {submitted && (
        <div ref={feedbackRef} className={`question-feedback ${correct ? "correct" : "incorrect"}`} tabIndex={-1} role="status" aria-live="polite">
          <h2>{correct ? "Correct" : "Not quite"}</h2>
          {!correct && <p><strong>Correct answer:</strong> <InlineMarkup text={answerLabel(question)} /></p>}
          <p><strong>Explanation:</strong> <InlineMarkup text={question.explanation} /></p>
        </div>
      )}
      <div className="quiz-navigation">
        <button type="button" className="button button-secondary" disabled={index === 0} onClick={() => setIndex((value) => Math.max(0, value - 1))}>Previous</button>
        {submitted && <button type="button" className="button" onClick={next}>{index === questions.length - 1 ? "Finish practice" : "Next question"}</button>}
      </div>
    </section>
  );
}
