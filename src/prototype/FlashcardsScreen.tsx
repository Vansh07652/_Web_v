/**
 * MedAtlas prototype — Screen 4: Flashcards.
 * Distraction-free review: the card is the star. Flip, response actions and
 * deck progress are all local state. Front-end demo only.
 */

import { useState } from "react";
import type { Navigate } from "../lib/navigation";
import { demoFlashcards } from "./data";
import { ListenButton, ProgressBar, type ProtoVariant } from "./components";
import { CheckIcon, ChevronDownIcon, CrossIcon, RotateIcon, TimerIcon } from "./icons";

const RESPONSES = [
  { id: "again", label: "Again", hint: "<1 min" },
  { id: "hard", label: "Hard", hint: "8 min" },
  { id: "good", label: "Good", hint: "1 day" },
  { id: "easy", label: "Easy", hint: "4 days" },
] as const;

export function FlashcardsScreen(_props: { variant: ProtoVariant; navigate: Navigate }) {
  const [position, setPosition] = useState<number>(demoFlashcards.startPosition);
  const [flipped, setFlipped] = useState(false);
  const [lastResponse, setLastResponse] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const card = demoFlashcards.cards[(position - demoFlashcards.startPosition) % demoFlashcards.cards.length];
  const progress = Math.round((position / demoFlashcards.deckSize) * 100);

  const respond = (id: string) => {
    setLastResponse(id);
    setFlipped(false);
    setPosition((current) => (current < demoFlashcards.deckSize ? current + 1 : current));
  };

  return (
    <div className="ma-page ma-flashcards">
      <div className="ma-flash-top">
        <nav className="ma-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>Flashcards</li>
            <li aria-current="page">Anatomy &amp; Physiology</li>
          </ol>
        </nav>
        <div className="ma-flash-deck">
          <h1>{demoFlashcards.deck}</h1>
          <p className="ma-flash-desc">{demoFlashcards.description}</p>
          <div className="ma-flash-progress">
            <span>Card {position} of {demoFlashcards.deckSize}</span>
            <ProgressBar value={progress} label="Deck progress" slim />
          </div>
        </div>
      </div>

      <div className="ma-flash-grid">
        <div className="ma-flash-stage">
          <div className="ma-flip-frame">
            <button
              type="button"
              className={flipped ? "ma-flip is-flipped" : "ma-flip"}
              aria-pressed={flipped}
              onClick={() => setFlipped(!flipped)}
            >
              <span className="ma-flip-inner">
                <span className="ma-flip-face is-front">
                  <span className="ma-flash-category">{card.category}</span>
                  <span className="ma-flash-question">{card.front}</span>
                  <span className="ma-flash-hint">
                    <RotateIcon />
                    Tap to reveal answer
                  </span>
                </span>
                <span className="ma-flip-face is-back">
                  <span className="ma-flash-category">Answer</span>
                  <span className="ma-flash-answer">{card.back}</span>
                  <span className="ma-flash-hint">
                    <RotateIcon />
                    Tap to see question
                  </span>
                </span>
              </span>
            </button>
          </div>

          <div className="ma-flash-listen">
            <ListenButton label="Listen to card" />
            <span className="ma-rationale-speed">0.9x</span>
          </div>

          <div className="ma-flash-responses" role="group" aria-label="How well did you know this card?">
            {RESPONSES.map((response) => (
              <button
                key={response.id}
                type="button"
                className={`ma-response is-${response.id}${lastResponse === response.id ? " is-last" : ""}`}
                onClick={() => respond(response.id)}
              >
                <span className="ma-response-icon" aria-hidden="true">
                  {response.id === "again" ? <CrossIcon /> : response.id === "hard" ? <TimerIcon /> : <CheckIcon />}
                </span>
                <span className="ma-response-label">{response.label}</span>
                <span className="ma-response-hint">{response.hint}</span>
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="ma-flash-drawer-toggle"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <span>Deck progress</span>
          <ChevronDownIcon className={drawerOpen ? "ma-rot is-open" : "ma-rot"} />
        </button>

        <aside className={drawerOpen ? "ma-flash-side is-open" : "ma-flash-side"} aria-label="Deck progress">
          <section className="ma-card ma-tools-block">
            <h2 className="ma-tools-title">Deck progress</h2>
            <dl className="ma-flash-stats">
              <div>
                <dt>Studied today</dt>
                <dd>{demoFlashcards.studiedToday}</dd>
              </div>
              <div>
                <dt>Due today</dt>
                <dd>{demoFlashcards.dueToday}</dd>
              </div>
            </dl>
          </section>
          <section className="ma-card ma-tools-block">
            <h2 className="ma-tools-title">Card lists</h2>
            <ul className="ma-flash-lists">
              {demoFlashcards.lists.map((list) => (
                <li key={list.id}>
                  <button type="button" className="ma-flash-list-btn">
                    <span>{list.label}</span>
                    <span className="ma-flash-list-count">{list.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
