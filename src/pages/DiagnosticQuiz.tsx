import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Breadcrumbs, Link, PageHeader } from "../components/ui";
import {
  DIAGNOSTIC_QUESTIONS,
  clearDiagnostic,
  readDiagnostic,
  saveDiagnostic,
  scoreDiagnostic,
  type DiagnosticAnswer,
  type DiagnosticResult,
} from "../lib/paths/diagnostic";
import { getStudyPath, studyPathHref } from "../lib/paths/study-paths";
import type { Navigate } from "../lib/navigation";

/**
 * The starting-point questionnaire.
 *
 * Five questions about what someone is studying for, one at a time, each a
 * radio group with a real legend and visible labels. Nothing here is a test:
 * there is no right answer, no score out of five, and no claim about what
 * anybody knows. The page says so above the first question, the result repeats
 * it, and `lib/paths/diagnostic.ts` carries the reasoning in full.
 *
 * Everything runs in this browser. The answers are stored as option ids under
 * one local key so a returning visitor sees their suggestion again; no account,
 * no network, no free text and nothing that identifies anyone.
 */

const formatCount = (value: number): string => value.toLocaleString();

const plural = (value: number, singular: string, many?: string): string =>
  value === 1 ? singular : many ?? `${singular}s`;

/** Matches the paths page, so the same path reads the same on both. */
const formatMinutes = (minutes: number): string => {
  if (!Number.isFinite(minutes) || minutes <= 0) return "Not estimated";
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (!hours) return `${rest} min`;
  if (!rest) return `${formatCount(hours)} hr`;
  return `${formatCount(hours)} hr ${rest} min`;
};

/** One path, with the counts the catalog gives it. Shared by the winner and the near-misses. */
const PathSummary = ({ pathSlug, navigate, headingLevel }: { pathSlug: string; navigate: Navigate; headingLevel: "h3" | "h4" }) => {
  const path = useMemo(() => getStudyPath(pathSlug), [pathSlug]);
  if (!path) return null;
  // Written out rather than built from the prop, so the heading order stays
  // visible to anyone reading this file.
  const link = <Link href={studyPathHref(path.slug)} navigate={navigate}>{path.title}</Link>;
  return (
    <article className="diagnostic-path">
      {headingLevel === "h3"
        ? <h3 className="diagnostic-path-title">{link}</h3>
        : <h4 className="diagnostic-path-title">{link}</h4>}
      <p className="diagnostic-path-goal">{path.goal}</p>
      <dl className="path-stats">
        <div><dt>{plural(path.courses.length, "Course")}</dt><dd>{formatCount(path.courses.length)}</dd></div>
        <div><dt>Topics</dt><dd>{formatCount(path.topicCount)}</dd></div>
        <div><dt>Practice questions</dt><dd>{formatCount(path.questionCount)}</dd></div>
        <div><dt>Estimated study time</dt><dd>{formatMinutes(path.estimatedMinutes)}</dd></div>
      </dl>
    </article>
  );
};

export const DiagnosticQuizPage = ({ navigate }: { navigate: Navigate }) => {
  // Read once, on mount, so a saved suggestion is on screen before anything is
  // clicked and the page never blinks through an empty state first.
  const [restored] = useState(() => {
    const saved = readDiagnostic();
    return { answers: saved, result: scoreDiagnostic(saved) };
  });
  const [answers, setAnswers] = useState<DiagnosticAnswer[]>(restored.answers);
  const [result, setResult] = useState<DiagnosticResult | undefined>(restored.result);
  const [index, setIndex] = useState(0);
  const [asking, setAsking] = useState(!restored.result);
  const [message, setMessage] = useState(restored.result
    ? "Your saved answers were restored from this browser."
    : "");
  /** Set when something should take focus after the next render. */
  const [pendingFocus, setPendingFocus] = useState<"question" | "outcome" | null>(null);

  const questionRef = useRef<HTMLFieldSetElement>(null);
  const outcomeRef = useRef<HTMLDivElement>(null);
  const groupName = useId();
  const aboutId = useId();
  const outcomeId = useId();
  const answersId = useId();
  const progressId = useId();
  const limitsId = useId();

  useEffect(() => {
    if (!pendingFocus) return;
    if (pendingFocus === "question") questionRef.current?.focus();
    else outcomeRef.current?.focus();
    setPendingFocus(null);
  }, [pendingFocus]);

  const total = DIAGNOSTIC_QUESTIONS.length;
  const question = DIAGNOSTIC_QUESTIONS[index];
  const chosenOptionId = answers.find((answer) => answer.questionId === question.id)?.optionId;
  const isLast = index === total - 1;

  const choose = (optionId: string): void => {
    setAnswers((current) => [
      ...current.filter((answer) => answer.questionId !== question.id),
      { questionId: question.id, optionId },
    ]);
    if (result) {
      // Whatever is on screen was worked out from the answers as they were, so
      // it stops being true the moment one of them changes. It comes back when
      // the questions are finished again.
      setResult(undefined);
      setMessage("Answer changed. Finish the questions to see an updated suggestion.");
      return;
    }
    setMessage("");
  };

  const goBack = (): void => {
    if (index === 0) return;
    setIndex(index - 1);
    setMessage("");
    setPendingFocus("question");
  };

  const goForward = (): void => {
    if (!chosenOptionId) {
      // Nothing is disabled: the control stays reachable and says what it
      // needs, rather than going grey and explaining nothing.
      setMessage("Choose one of the options to continue.");
      setPendingFocus("question");
      return;
    }
    if (!isLast) {
      setIndex(index + 1);
      setMessage("");
      setPendingFocus("question");
      return;
    }
    const scored = scoreDiagnostic(answers);
    saveDiagnostic(answers);
    setResult(scored);
    // Nothing scored means nothing to show, so the questions stay up rather
    // than being replaced by an empty result.
    setAsking(!scored);
    setMessage(scored
      ? "Your suggested starting point is ready below."
      : "Those answers did not point anywhere in particular. Try them again, or browse every path instead.");
    setPendingFocus("outcome");
  };

  const startOver = (): void => {
    clearDiagnostic();
    setAnswers([]);
    setResult(undefined);
    setIndex(0);
    setAsking(true);
    setMessage("Your answers were cleared from this browser.");
    setPendingFocus("question");
  };

  const reopen = (): void => {
    setAsking(true);
    setIndex(0);
    setMessage("");
    setPendingFocus("question");
  };

  const answered = DIAGNOSTIC_QUESTIONS
    .map((entry) => ({
      question: entry,
      option: entry.options.find((option) => option.id === answers.find((answer) => answer.questionId === entry.id)?.optionId),
    }))
    .filter((entry) => entry.option);

  return (
    <div className="study-tools diagnostic-page">
      <Breadcrumbs
        navigate={navigate}
        items={[{ label: "Home", href: "/" }, { label: "Study paths", href: "/paths" }, { label: "Find a starting point" }]}
      />
      <PageHeader
        eyebrow="Study paths"
        title="Find a starting point"
        description="Five questions about what you are studying for. They suggest which grouping of courses to open first — nothing more."
      />

      <section className="study-panel" aria-labelledby={aboutId}>
        <h2 id={aboutId}>Before you start</h2>
        <p>
          <strong>This is a starting-point suggestion, not an assessment of ability or readiness.</strong> It is a short
          questionnaire about your interests and your plans, not a test: there are no right answers, nothing is marked,
          and five questions could not measure what anybody knows.
        </p>
        <p>
          No registration and no account. Nothing you choose is sent anywhere — the answers stay in this browser, and
          only the ids of the options you pick are stored, so no name, no email and no free text is kept. A "Start over"
          control removes them whenever there is something to remove.
        </p>
        <p>
          Every path this suggests lists its own limitations in full on its own page. MedMosa is not affiliated with,
          endorsed by or accredited by any testing organization, licensing body or school, and no path is aligned to any
          exam blueprint.
        </p>
      </section>

      {asking && (
        <section className="study-filters diagnostic-form" aria-labelledby={progressId}>
          <h2 id={progressId} className="diagnostic-progress">Question {index + 1} of {total}</h2>
          <p className="study-hint">
            {answered.length === total
              ? `All ${formatCount(total)} answered. You can change any of them before finishing.`
              : `${formatCount(answered.length)} of ${formatCount(total)} answered so far.`}
          </p>

          <fieldset className="study-fieldset diagnostic-question" ref={questionRef} tabIndex={-1}>
            <legend>{question.prompt}</legend>
            {question.hint && <p className="study-hint">{question.hint}</p>}
            <div className="study-choice-grid diagnostic-choices">
              {question.options.map((option) => (
                <label className="study-choice" key={option.id}>
                  <input
                    type="radio"
                    name={`${groupName}-${question.id}`}
                    value={option.id}
                    checked={chosenOptionId === option.id}
                    onChange={() => choose(option.id)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="study-actions">
            {index > 0 && (
              <button type="button" className="button button-secondary" onClick={goBack}>
                Previous question
              </button>
            )}
            <button type="button" className="button" onClick={goForward}>
              {isLast ? "See my suggestion" : "Next question"}
            </button>
            {answers.length > 0 && (
              <button type="button" className="button button-secondary" onClick={startOver}>
                Start over
              </button>
            )}
          </div>
        </section>
      )}

      <p className="study-live" aria-live="polite">{message}</p>

      <section className="study-results diagnostic-outcome-panel" aria-labelledby={outcomeId}>
        <h2 id={outcomeId}>Your suggested starting point</h2>
        {/* Mounted from first paint so a suggestion is announced when it
            arrives rather than discovered later. */}
        <div className="diagnostic-outcome" aria-live="polite" tabIndex={-1} ref={outcomeRef}>
          {result ? (
            <>
              <p className="diagnostic-rationale">{result.rationale}</p>
              <PathSummary pathSlug={result.recommendedPathSlug} navigate={navigate} headingLevel="h3" />
              <p className="diagnostic-open">
                <Link href={studyPathHref(result.recommendedPathSlug)} navigate={navigate} className="button">
                  Open this path
                </Link>
              </p>
              {result.runnersUp.length > 0 && (
                <div className="diagnostic-runners">
                  <h3>Also close</h3>
                  <p className="study-hint">
                    These scored next on the same answers. A suggestion is a starting point, not a ranking of what suits
                    you.
                  </p>
                  {result.runnersUp.map((slug) => (
                    <PathSummary key={slug} pathSlug={slug} navigate={navigate} headingLevel="h4" />
                  ))}
                </div>
              )}
              <div className="study-actions">
                <button type="button" className="button button-secondary" onClick={reopen}>
                  Change your answers
                </button>
                <button type="button" className="button button-secondary" onClick={startOver}>
                  Start over
                </button>
              </div>
            </>
          ) : (
            <p className="study-hint">
              Answer the {formatCount(total)} questions above and a suggestion appears here. You can also{" "}
              <Link href="/paths" navigate={navigate}>browse every path</Link> without answering anything.
            </p>
          )}
        </div>
      </section>

      {answered.length > 0 && (
        <section className="study-panel diagnostic-answers" aria-labelledby={answersId}>
          <h2 id={answersId}>What you chose</h2>
          <p>These are the only things stored, and they are stored in this browser alone.</p>
          <dl className="diagnostic-answer-list">
            {answered.map((entry) => (
              <div key={entry.question.id}>
                <dt>{entry.question.prompt}</dt>
                <dd>{entry.option?.label}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className="study-panel study-limitations" aria-labelledby={limitsId}>
        <h2 id={limitsId}>What this cannot tell you</h2>
        <ul>
          <li>
            It cannot tell you what you know. No answer here is marked, and nothing you choose is compared with anyone
            else.
          </li>
          <li>
            It cannot tell you whether you are ready for an exam. This library contains no exam blueprint, so no
            grouping of its courses can be checked against one.
          </li>
          <li>
            It suggests one of the groupings this library already publishes. Every course is listed in the course
            catalog whether or not a path names it, so nothing is hidden behind this page.
          </li>
        </ul>
      </section>
    </div>
  );
};
