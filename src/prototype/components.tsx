/**
 * MedAtlas prototype — shared presentational components.
 *
 * Front-end demo only: no network, no persistence, no audio. All interactivity
 * is local React state. Components are scoped under `.ma-root` and styled by
 * `src/styles/prototype.css`; three art-direction variants are token scopes
 * selected with `data-ma-theme`.
 */

import { useState, type ReactNode } from "react";
import { Link } from "../components/ui";
import type { Navigate } from "../lib/navigation";
import {
  AlertTriangleIcon,
  BellIcon,
  BoltIcon,
  CardsIcon,
  CalendarIcon,
  CheckIcon,
  FlameIcon,
  LightbulbIcon,
  MedAtlasMark,
  PauseIcon,
  PlayIcon,
  SearchIcon,
  SpeakerIcon,
  StethoscopeIcon,
  StopIcon,
  TrendUpIcon,
} from "./icons";

/* -------------------------------------------------------------------------
   Variants and routing helpers
   ------------------------------------------------------------------------- */

export type ProtoVariant = "classic" | "modern" | "editorial";
export type ProtoScreen = "dashboard" | "lesson" | "practice" | "flashcards";

export const PROTO_VARIANTS: ReadonlyArray<{ id: ProtoVariant; name: string; tagline: string }> = [
  { id: "classic", name: "Atlas Classic", tagline: "Scholarly warmth — warm paper, navy and teal, serif display type" },
  { id: "modern", name: "Clinic Modern", tagline: "Crisp and airy — cool surfaces, rounded cards, soft depth" },
  { id: "editorial", name: "Editorial Ink", tagline: "Print-inspired — ivory, hairline rules, ink and amber" },
];

export const PROTO_SCREENS: ReadonlyArray<{ id: ProtoScreen; name: string }> = [
  { id: "dashboard", name: "Dashboard" },
  { id: "lesson", name: "Lesson Reader" },
  { id: "practice", name: "Practice" },
  { id: "flashcards", name: "Flashcards" },
];

export const isProtoVariant = (value: string): value is ProtoVariant =>
  value === "classic" || value === "modern" || value === "editorial";

export const isProtoScreen = (value: string): value is ProtoScreen =>
  value === "dashboard" || value === "lesson" || value === "practice" || value === "flashcards";

export const protoHref = (variant: ProtoVariant, screen: ProtoScreen): string =>
  `/prototype/${variant}/${screen}`;

/* -------------------------------------------------------------------------
   Shell: comparison toolbar + MedAtlas chrome
   ------------------------------------------------------------------------- */

interface ShellProps {
  variant: ProtoVariant;
  screen: ProtoScreen;
  navigate: Navigate;
  children: ReactNode;
}

/** Slim persistent bar for flipping between art directions and screens. */
function CompareBar({ variant, screen, navigate }: { variant: ProtoVariant; screen: ProtoScreen; navigate: Navigate }) {
  return (
    <div className="ma-compare" role="region" aria-label="Prototype comparison controls">
      <Link href="/prototype" navigate={navigate} className="ma-compare-home">
        MedAtlas prototype
      </Link>
      <div className="ma-compare-group" role="group" aria-label="Design variant">
        {PROTO_VARIANTS.map((item) => (
          <Link
            key={item.id}
            href={protoHref(item.id, screen)}
            navigate={navigate}
            className={item.id === variant ? "ma-compare-chip is-active" : "ma-compare-chip"}
            aria-current={item.id === variant ? "page" : undefined}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="ma-compare-group" role="group" aria-label="Screen">
        {PROTO_SCREENS.map((item) => (
          <Link
            key={item.id}
            href={protoHref(variant, item.id)}
            navigate={navigate}
            className={item.id === screen ? "ma-compare-chip is-active" : "ma-compare-chip"}
            aria-current={item.id === screen ? "page" : undefined}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <span className="ma-compare-note">Demo content only</span>
    </div>
  );
}

export function StudyHeader({ variant, screen, navigate }: { variant: ProtoVariant; screen: ProtoScreen; navigate: Navigate }) {
  const items: ReadonlyArray<{ label: string; screen: ProtoScreen | null }> = [
    { label: "Dashboard", screen: "dashboard" },
    { label: "Learn", screen: "lesson" },
    { label: "Practice", screen: "practice" },
    { label: "Flashcards", screen: "flashcards" },
    { label: "Planner", screen: null },
  ];
  return (
    <header className="ma-header">
      <div className="ma-header-inner">
        <Link href={protoHref(variant, "dashboard")} navigate={navigate} className="ma-brand">
          <MedAtlasMark />
          <span className="ma-brand-name">MedAtlas</span>
        </Link>
        <nav className="ma-nav" aria-label="MedAtlas demo navigation">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.screen ? protoHref(variant, item.screen) : "/prototype"}
              navigate={navigate}
              className={item.screen === screen ? "ma-nav-link is-active" : "ma-nav-link"}
              aria-current={item.screen === screen ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ma-header-tools">
          <button type="button" className="ma-icon-btn" aria-label="Search (demo)">
            <SearchIcon />
          </button>
          <button type="button" className="ma-icon-btn ma-bell" aria-label="Notifications, 2 unread (demo)">
            <BellIcon />
            <span className="ma-bell-dot" aria-hidden="true" />
          </button>
          <button type="button" className="ma-avatar" aria-label="Account: Jordan Lee (demo)">
            <span className="ma-avatar-badge" aria-hidden="true">JL</span>
            <span className="ma-avatar-name">Jordan Lee</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export function PrototypeShell({ variant, screen, navigate, children }: ShellProps) {
  return (
    <div className="ma-root" data-ma-theme={variant} data-ma-screen={screen}>
      <CompareBar variant={variant} screen={screen} navigate={navigate} />
      <StudyHeader variant={variant} screen={screen} navigate={navigate} />
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------
   Study callouts — icon + label + text, never color alone
   ------------------------------------------------------------------------- */

export type CalloutKind = "high-yield" | "clinical" | "exam-trap" | "takeaway";

const CALLOUT_META: Record<CalloutKind, { label: string; icon: () => ReactNode }> = {
  "high-yield": { label: "High yield", icon: () => <BoltIcon /> },
  clinical: { label: "Clinical connection", icon: () => <StethoscopeIcon /> },
  "exam-trap": { label: "Exam trap", icon: () => <AlertTriangleIcon /> },
  takeaway: { label: "Key takeaway", icon: () => <LightbulbIcon /> },
};

export function StudyCallout({ kind, children }: { kind: CalloutKind; children: ReactNode }) {
  const meta = CALLOUT_META[kind];
  return (
    <aside className={`ma-callout ma-callout-${kind}`}>
      <p className="ma-callout-label">
        <span className="ma-callout-icon" aria-hidden="true">{meta.icon()}</span>
        {meta.label}
      </p>
      <div className="ma-callout-body">{children}</div>
    </aside>
  );
}

/* -------------------------------------------------------------------------
   Read Aloud — visual state machine only (no audio, no speech synthesis)
   ------------------------------------------------------------------------- */

export type ReadAloudStatus = "ready" | "reading" | "paused" | "stopped";

export interface ReadAloudDemo {
  status: ReadAloudStatus;
  speed: string;
  listen: () => void;
  pause: () => void;
  stop: () => void;
  setSpeed: (speed: string) => void;
}

export const READ_ALOUD_SPEEDS: readonly string[] = ["0.75x", "0.9x", "1x", "1.25x", "1.5x"];

export function useReadAloudDemo(initialSpeed = "0.9x"): ReadAloudDemo {
  const [status, setStatus] = useState<ReadAloudStatus>("ready");
  const [speed, setSpeed] = useState(initialSpeed);
  return {
    status,
    speed,
    listen: () => setStatus("reading"),
    pause: () => setStatus((current) => (current === "reading" ? "paused" : "reading")),
    stop: () => setStatus("stopped"),
    setSpeed,
  };
}

const READ_ALOUD_STATUS_TEXT: Record<ReadAloudStatus, (title: string) => string> = {
  ready: (title) => `Ready to read ${title}`,
  reading: (title) => `Reading ${title}`,
  paused: () => "Paused",
  stopped: () => "Stopped",
};

interface ReadAloudProps {
  player: ReadAloudDemo;
  title: string;
  compact?: boolean;
  label?: string;
}

export function ReadAloudPlayerDemo({ player, title, compact, label = "Read aloud" }: ReadAloudProps) {
  const { status, speed } = player;
  const playing = status === "reading";
  return (
    <section className={compact ? "ma-player is-compact" : "ma-player"} aria-label={`${label} (visual demo, no audio plays)`}>
      <div className="ma-player-main">
        <span className={playing ? "ma-player-glyph is-playing" : "ma-player-glyph"} aria-hidden="true">
          {playing ? (
            <span className="ma-eq" aria-hidden="true"><span /><span /><span /></span>
          ) : (
            <SpeakerIcon />
          )}
        </span>
        <div className="ma-player-copy">
          <p className="ma-player-title">{label}</p>
          <p className="ma-player-status" role="status">{READ_ALOUD_STATUS_TEXT[status](title)}</p>
        </div>
        <div className="ma-player-actions">
          {status === "reading" || status === "paused" ? (
            <>
              <button type="button" className="ma-btn ma-btn-quiet ma-player-btn" onClick={player.pause}>
                {status === "paused" ? <PlayIcon /> : <PauseIcon />}
                {status === "paused" ? "Resume" : "Pause"}
              </button>
              <button type="button" className="ma-btn ma-btn-quiet ma-player-btn" onClick={player.stop}>
                <StopIcon />
                Stop
              </button>
            </>
          ) : (
            <button type="button" className="ma-btn ma-player-btn" onClick={player.listen}>
              <PlayIcon />
              Listen
            </button>
          )}
        </div>
      </div>
      <div className="ma-player-foot">
        <div className="ma-speed" role="group" aria-label="Reading speed">
          {READ_ALOUD_SPEEDS.map((value) => (
            <button
              key={value}
              type="button"
              className={value === speed ? "ma-speed-btn is-active" : "ma-speed-btn"}
              aria-pressed={value === speed}
              onClick={() => player.setSpeed(value)}
            >
              {value}
            </button>
          ))}
        </div>
        <p className="ma-player-note">Free browser audio · visual demo only</p>
      </div>
    </section>
  );
}

/** Small inline "listen" affordance for section headings and cards. */
export function ListenButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button type="button" className="ma-listen" onClick={onClick}>
      <SpeakerIcon />
      <span>{label}</span>
    </button>
  );
}

/* -------------------------------------------------------------------------
   Progress + stats
   ------------------------------------------------------------------------- */

export function ProgressBar({ value, label, slim }: { value: number; label: string; slim?: boolean }) {
  return (
    <div
      className={slim ? "ma-progress is-slim" : "ma-progress"}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <span className="ma-progress-fill" style={{ width: `${value}%` }} />
    </div>
  );
}

const METRIC_ICONS: Record<string, () => ReactNode> = {
  cards: () => <CardsIcon />,
  accuracy: () => <TrendUpIcon />,
  streak: () => <FlameIcon />,
  countdown: () => <CalendarIcon />,
};

export function ProgressStatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  const render = METRIC_ICONS[icon] ?? (() => <CardsIcon />);
  return (
    <div className="ma-stat">
      <span className="ma-stat-icon" aria-hidden="true">{render()}</span>
      <p className="ma-stat-value">{value}</p>
      <p className="ma-stat-label">{label}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------
   Small shared pieces
   ------------------------------------------------------------------------- */

export function Pill({ children, tone }: { children: ReactNode; tone?: "accent" | "neutral" }) {
  return <span className={tone === "accent" ? "ma-pill is-accent" : "ma-pill"}>{children}</span>;
}

export function DoneCheck({ done }: { done: boolean }) {
  return (
    <span className={done ? "ma-donecheck is-done" : "ma-donecheck"} aria-hidden="true">
      {done ? <CheckIcon /> : null}
    </span>
  );
}
