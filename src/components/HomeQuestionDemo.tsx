import { useEffect, useId, useRef, useState } from "react";
import { loadCurriculumQuestions } from "../lib/content/curriculum-v2";
import type { CurriculumQuestionV2 } from "../types";
import { InlineMarkup } from "./MarkdownDocument";

/**
 * A deliberately isolated, canonical-data-powered sample. It never records an
 * attempt, so a visitor can explore the learning model without changing their
 * real study history.
 */
export function HomeQuestionDemo() {
  const [question, setQuestion] = useState<CurriculumQuestionV2>();
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const headingId = useId();

  useEffect(() => {
    let active = true;
    void loadCurriculumQuestions("anatomy-physiology-1")?.then((bank) => {
      const candidate = bank.questions.find((item) => !item.citationReviewRequired) ?? bank.questions[0];
      if (active) setQuestion(candidate);
    });
    return () => { active = false; };
  }, []);

  if (!question) return <div className="home-demo-loading" aria-live="polite">Preparing a real practice question…</div>;

  const correct = selected === question.correctAnswer;
  const correctOption = question.options.find((option) => option.id === question.correctAnswer);
  const submit = () => {
    if (!selected || submitted) return;
    setSubmitted(true);
    requestAnimationFrame(() => feedbackRef.current?.focus());
  };

  return (
    <section className="home-question-demo" aria-labelledby={headingId}>
      <div className="home-demo-topline"><span>Live practice sample</span><span>Nothing is saved</span></div>
      <form onSubmit={(event) => { event.preventDefault(); submit(); }}>
        <fieldset>
          <legend id={headingId}><InlineMarkup text={question.stem} /></legend>
          <div className="home-demo-options">
            {question.options.map((option) => {
              const isCorrect = submitted && option.id === question.correctAnswer;
              const isIncorrect = submitted && selected === option.id && !isCorrect;
              return <label key={option.id} className={`home-demo-option${isCorrect ? " is-correct" : ""}${isIncorrect ? " is-incorrect" : ""}`}>
                <input type="radio" name={headingId} value={option.id} checked={selected === option.id} disabled={submitted} onChange={() => setSelected(option.id)} />
                <span className="home-demo-letter" aria-hidden="true">{option.id}</span>
                <span><InlineMarkup text={option.text} />{isCorrect && <strong>Correct answer</strong>}{isIncorrect && <strong>Your answer</strong>}</span>
              </label>;
            })}
          </div>
          {!submitted && <button className="button" type="submit" disabled={!selected}>Check answer <span aria-hidden="true">→</span></button>}
        </fieldset>
      </form>
      {submitted && <div ref={feedbackRef} className={`home-demo-feedback ${correct ? "is-correct" : "is-incorrect"}`} tabIndex={-1} role="status" aria-live="polite">
        <p className="learn-eyebrow">{correct ? "Correct" : "Not quite"}</p>
        {!correct && <p><strong>Correct answer:</strong> {correctOption?.text ?? question.correctAnswer}</p>}
        <div><h3>Why</h3><p><InlineMarkup text={question.rationales.whyCorrect} /></p></div>
        <div><h3>In plain language</h3><p><InlineMarkup text={question.rationales.eli10} /></p></div>
        {question.references.length > 0 && <details><summary>Source / provenance</summary><ul>{question.references.map((reference, index) => <li key={index}>{reference.url ? <a href={reference.url} rel="noreferrer noopener" target="_blank">{reference.text}</a> : reference.text}</li>)}</ul></details>}
      </div>}
    </section>
  );
}
