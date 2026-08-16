/**
 * MedAtlas prototype — Screen 3: Practice question + rationale.
 * Renders the answered-incorrectly state from the spec: C selected ("Your
 * answer"), B marked "Correct answer". State is icon + text + border + color
 * together, never color alone. Front-end demo only.
 */

import { Link } from "../components/ui";
import type { Navigate } from "../lib/navigation";
import { demoQuestion } from "./data";
import {
  ListenButton,
  Pill,
  ProgressBar,
  protoHref,
  StudyCallout,
  type ProtoVariant,
} from "./components";
import {
  ArrowRightIcon,
  BookmarkIcon,
  BookOpenIcon,
  CardsIcon,
  CheckCircleIcon,
  CrossIcon,
  FlameIcon,
  TargetIcon,
  TrendUpIcon,
} from "./icons";

function choiceState(id: string): "correct" | "incorrect" | "idle" {
  if (id === demoQuestion.correct) return "correct";
  if (id === demoQuestion.selected) return "incorrect";
  return "idle";
}

export function PracticeScreen({ variant, navigate }: { variant: ProtoVariant; navigate: Navigate }) {
  return (
    <div className="ma-page ma-practice">
      <div className="ma-practice-top">
        <nav className="ma-breadcrumb" aria-label="Breadcrumb">
          <ol>
            {demoQuestion.breadcrumb.map((crumb, index) => (
              <li key={crumb} aria-current={index === demoQuestion.breadcrumb.length - 1 ? "page" : undefined}>{crumb}</li>
            ))}
          </ol>
        </nav>
        <div className="ma-practice-position">
          <span>{demoQuestion.position}</span>
          <ProgressBar value={demoQuestion.progress} label="Session progress" slim />
        </div>
      </div>

      <div className="ma-practice-grid">
        <div className="ma-practice-main">
          <section className="ma-card ma-question" aria-labelledby="ma-question-stem">
            <Pill tone="accent">{demoQuestion.topic}</Pill>
            <h1 id="ma-question-stem" className="ma-question-stem">{demoQuestion.stem}</h1>
            <ul className="ma-choices">
              {demoQuestion.choices.map((choice) => {
                const state = choiceState(choice.id);
                return (
                  <li key={choice.id}>
                    <div className={`ma-choice is-${state}`}>
                      <span className="ma-choice-letter" aria-hidden="true">{choice.id}</span>
                      <span className="ma-choice-text">{choice.text}</span>
                      {state === "correct" && (
                        <span className="ma-choice-flag is-correct">
                          <CheckCircleIcon />
                          Correct answer
                        </span>
                      )}
                      {state === "incorrect" && (
                        <span className="ma-choice-flag is-incorrect">
                          <CrossIcon />
                          Your answer
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="ma-card ma-rationale" aria-labelledby="ma-rationale-title">
            <div className="ma-rationale-head">
              <h2 id="ma-rationale-title">Review the rationale</h2>
              <div className="ma-rationale-listen">
                <ListenButton label="Listen to rationale" />
                <span className="ma-rationale-speed">0.9x</span>
              </div>
            </div>
            <p className="ma-rationale-text">{demoQuestion.rationale}</p>
            <h3 className="ma-rationale-sub">Why the other choices are incorrect</h3>
            <ul className="ma-why-list">
              {demoQuestion.whyOthers.map((item) => (
                <li key={item.id}>
                  <span className="ma-why-letter" aria-hidden="true">{item.id}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <StudyCallout kind="takeaway">{demoQuestion.keyTakeaway}</StudyCallout>
          </section>

          <div className="ma-practice-actions">
            <button type="button" className="ma-btn ma-btn-quiet">
              <BookmarkIcon />
              Save to review
            </button>
            <Link href={protoHref(variant, "lesson")} navigate={navigate} className="ma-btn ma-btn-secondary">
              <BookOpenIcon />
              View related lesson
            </Link>
            <button type="button" className="ma-btn ma-btn-primary">
              Next question
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <aside className="ma-practice-side" aria-label="Session stats">
          <section className="ma-card ma-session">
            <h2 className="ma-tools-title">This session</h2>
            <ul className="ma-session-list">
              <li>
                <FlameIcon />
                <span className="ma-session-value">{demoQuestion.session.streak}</span>
                <span className="ma-session-label">Current streak</span>
              </li>
              <li>
                <TrendUpIcon />
                <span className="ma-session-value">{demoQuestion.session.accuracy}</span>
                <span className="ma-session-label">Accuracy</span>
              </li>
              <li>
                <TargetIcon />
                <span className="ma-session-value">{demoQuestion.session.weakTopic}</span>
                <span className="ma-session-label">Weak topic</span>
              </li>
            </ul>
          </section>
          <section className="ma-card ma-tools-block">
            <h2 className="ma-tools-title">Keep going</h2>
            <div className="ma-tools-actions">
              <button type="button" className="ma-btn ma-btn-quiet">Practice later</button>
              <Link href={protoHref(variant, "flashcards")} navigate={navigate} className="ma-btn ma-btn-secondary">
                <CardsIcon />
                Review flashcards
              </Link>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
