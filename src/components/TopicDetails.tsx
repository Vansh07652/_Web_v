/**
 * The three blocks that frame a topic: what it costs to study, what it connects
 * to, and where it came from.
 *
 * Every value here is read from the topic bundle or from the generated metadata
 * sidecar, and a field that is absent from the data is absent from the page. No
 * placeholder, no "Unknown", no estimate dressed up as a fact. Two of the
 * fields exist for a minority of topics — difficulty for about a quarter of
 * them, related topics for 64 — so most pages show fewer rows than this file
 * can render, which is the intended outcome.
 *
 * Deliberately not rendered anywhere in this file:
 *
 *   - **Prerequisites.** The corpus holds no topic-to-topic ordering edge of
 *     any kind. A prerequisite list would have to be invented, and an invented
 *     study order in a medical-education product is a safety problem, not a
 *     cosmetic one.
 *   - **Exam relevance.** No topic, question or catalog record names an exam
 *     blueprint, competency code or test-plan section, so no page may imply one.
 *   - **"Also appears in".** The only topic-to-topic edge that exists comes from
 *     questions that map to more than one topic, and not one of the 25,000
 *     questions maps across courses. A cross-course section would therefore be
 *     empty on all 1,409 topics, or filled by guessing.
 */
import { useId, useState, type ReactNode } from "react";
import { Link } from "./ui";
import type { TopicDifficulty, TopicMetadata } from "../lib/content/metadata";
import type { Navigate } from "../lib/navigation";
import { recordTopicView } from "../lib/progress";

const DIFFICULTY_LABELS: Record<TopicDifficulty, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const plural = (count: number, word: string): string => (count === 1 ? word : `${word}s`);

/** "About 24 minutes", "About 1 hour 30 minutes". The corpus range is 2 to 90. */
const describeMinutes = (minutes: number): string => {
  if (minutes < 60) return `About ${minutes} ${plural(minutes, "minute")}`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  const hourPart = `${hours} ${plural(hours, "hour")}`;
  return rest ? `About ${hourPart} ${rest} ${plural(rest, "minute")}` : `About ${hourPart}`;
};

function Fact({ term, children, note }: { term: string; children: ReactNode; note?: string }) {
  return (
    <div className="topic-fact">
      <dt>{term}</dt>
      <dd>
        {children}
        {note && <span className="topic-fact-note">{note}</span>}
      </dd>
    </div>
  );
}

export interface TopicFactsProps {
  subjectSlug: string;
  topicId: string;
  /** Absent only if the sidecar has no entry for this topic. */
  metadata?: TopicMetadata;
  /** Questions mapped to this topic, from the bundle's own availability block. */
  questionCount: number;
  /** Moves the reader into the explanation. Absent when there is nothing to open. */
  onStartLearning?: () => void;
  /** Absent when the topic has no questions of its own. */
  onPractice?: () => void;
}

/**
 * The header facts and the four actions.
 *
 * "Save for review" writes through `recordTopicView`, which counts the topic as
 * opened in this browser's local store and nowhere else. The confirmation says
 * so, and says what saving does *not* do: opening a topic does not schedule it
 * for review — answering its questions is what does that. A confirmation that
 * implied otherwise would be a small lie that costs somebody a revision plan.
 */
export function TopicFacts({ subjectSlug, topicId, metadata, questionCount, onStartLearning, onPractice }: TopicFactsProps) {
  const [message, setMessage] = useState("");

  const save = () => {
    recordTopicView(subjectSlug, topicId);
    setMessage("Saved. This topic is marked as studied in this browser only — nothing was sent anywhere. Answering its practice questions is what schedules it for review.");
  };

  // With no sidecar entry and no questions there is no fact to state, and an
  // empty list is worse than none.
  const hasFacts = Boolean(metadata) || questionCount > 0;

  return (
    <div className="topic-summary">
      {hasFacts && (
        <dl className="topic-facts" aria-label="About this topic">
          {metadata && (
            <Fact term="Estimated time" note="A rough planning figure from the length of this topic and the questions mapped to it.">
              {describeMinutes(metadata.estimatedStudyMinutes)}
            </Fact>
          )}
          {metadata?.difficulty && (
            <Fact term="Level" note="Taken from the difficulty recorded on this topic's own practice questions.">
              {DIFFICULTY_LABELS[metadata.difficulty]}
            </Fact>
          )}
          {questionCount > 0 && (
            <Fact term="Practice questions">
              {questionCount.toLocaleString("en-US")} matched to this topic
            </Fact>
          )}
        </dl>
      )}

      <div className="topic-actions">
        {onStartLearning && <button type="button" className="button" onClick={onStartLearning}>Start learning</button>}
        {onPractice && (
          <button type="button" className="button button-secondary" onClick={onPractice}>
            Practise {questionCount.toLocaleString("en-US")} {plural(questionCount, "question")}
          </button>
        )}
        <button type="button" className="button button-secondary" onClick={save}>Save for review</button>
      </div>

      <p className="topic-save-status" role="status" aria-live="polite">{message}</p>
    </div>
  );
}

export interface RelatedTopicLink {
  id: string;
  title: string;
  unitTitle: string;
  href: string;
}

/**
 * "Continue with". A plain list of links, no diagram: a graph drawn in SVG is
 * unreadable with a screen reader and unusable at 320 px, and it would not say
 * anything the list does not.
 *
 * The whole section is omitted when the topic has no co-mapped neighbours,
 * which is the case for all but 64 of the 1,409 topics.
 */
export function ConnectedLearning({ topics, navigate }: { topics: RelatedTopicLink[]; navigate: Navigate }) {
  const headingId = useId();
  if (!topics.length) return null;
  return (
    <section className="connected" aria-labelledby={headingId}>
      <p className="eyebrow">Connected learning</p>
      <h2 id={headingId}>Continue with</h2>
      <ul className="connected-list">
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link href={topic.href} navigate={navigate}>{topic.title}</Link>
            <span>{topic.unitTitle}</span>
          </li>
        ))}
      </ul>
      <p className="connected-note">
        These topics share practice questions with this one. That shared question is the only connection the source
        material evidences — it is not a study order, and neither topic is a prerequisite for the other.
      </p>
    </section>
  );
}

