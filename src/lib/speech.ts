/**
 * Read-aloud for lesson prose, built on `window.speechSynthesis` and nothing
 * else.
 *
 * PRIVACY
 *
 * `speechSynthesis` is a browser API. Handing it a string asks the browser to
 * say it; MedMosa opens no socket, sends no request and loads no third-party
 * script to make that happen. So lesson text never leaves the device by any
 * route this code controls, and neither does the fact that anybody pressed
 * play — there is no analytics call here either.
 *
 * The honest version of the guarantee: some platforms synthesise entirely
 * on-device, and some ship a voice that is served or was downloaded by the
 * operating system. Which voices exist, and where they came from, is the
 * platform's business and outside this application's reach. What MedMosa can
 * guarantee — and does — is that it makes no network call of its own for
 * speech, chooses no cloud voice, and stores nothing about what was read. The
 * only thing persisted anywhere is the playback rate, one number, under
 * `RATE_STORAGE_KEY`.
 *
 * NO AUTOPLAY
 *
 * Nothing here speaks unless `speak()` is called, and `speak()` is only ever
 * called from an explicit user action. There is no "read on open" path, no
 * timer that starts playback and no persistence of "was speaking", which is
 * deliberate: audio that begins on its own is hostile in a library, in a
 * lecture, and to anyone using a screen reader.
 *
 * PROGRESSIVE ENHANCEMENT
 *
 * Where the API is missing — an older browser, a hardened profile, a server
 * render, a test — `isSpeechSupported()` returns false, the controller reports
 * `"unsupported"` and every method is a safe no-op. The UI is expected to hide
 * its play button in that state rather than offer a control that does nothing.
 * The controller also assumes the engine itself can fail: every call into
 * `speechSynthesis` is guarded, because a throwing speech engine must not take
 * the page down with it.
 *
 * ONE SECTION AT A TIME
 *
 * The controller reads a list of semantic sections in order, one utterance per
 * section, and exposes `currentSectionId` so the page can highlight what is
 * being spoken. Splitting by section — rather than queueing the whole lesson as
 * one string — keeps the highlight accurate, keeps `stop()` responsive, and
 * sidesteps the utterance-length limits some engines impose.
 */

export type SpeechRate = 0.8 | 1 | 1.2 | 1.5;
export type SpeechStatus = "unsupported" | "idle" | "speaking" | "paused";

/** One readable chunk of a lesson. `label` is for the UI, never spoken. */
export interface SpeechSection {
  id: string;
  label: string;
  text: string;
}

export interface SpeechController {
  readonly status: SpeechStatus;
  readonly currentSectionId: string | undefined;
  speak: (sections: SpeechSection[], startAtId?: string) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  setRate: (rate: SpeechRate) => void;
  subscribe: (listener: () => void) => () => void;
}

/** Ascending. Four steps is enough choice without becoming a settings panel. */
export const SPEECH_RATES: readonly SpeechRate[] = [0.8, 1, 1.2, 1.5];
export const RATE_STORAGE_KEY = "medmosa.speech-rate.v1";

const DEFAULT_RATE: SpeechRate = 1;

interface SpeechGlobals {
  speechSynthesis?: SpeechSynthesis;
  SpeechSynthesisUtterance?: new (text: string) => SpeechSynthesisUtterance;
}

/**
 * `globalThis` rather than `window`, so this file is safe to import in a server
 * render or a test runner where `window` does not exist at all. In a browser
 * the two are the same object.
 */
const speechGlobals = (): SpeechGlobals => globalThis as unknown as SpeechGlobals;

/**
 * True only when both halves of the API are present and usable. Never throws:
 * a hardened profile can define these as throwing getters.
 */
export const isSpeechSupported = (): boolean => {
  try {
    const scope = speechGlobals();
    const synthesis = scope.speechSynthesis;
    return Boolean(synthesis)
      && typeof synthesis?.speak === "function"
      && typeof synthesis?.cancel === "function"
      && typeof scope.SpeechSynthesisUtterance === "function";
  } catch {
    return false;
  }
};

const isSpeechRate = (value: unknown): value is SpeechRate =>
  typeof value === "number" && (SPEECH_RATES as readonly number[]).includes(value);

/**
 * Snaps any number onto the nearest legal rate. Ties fall to the slower one,
 * and anything unusable falls back to normal speed, so a hand-edited or
 * corrupted preference can never produce an unplayable utterance.
 */
const clampRate = (value: number): SpeechRate => {
  if (!Number.isFinite(value)) return DEFAULT_RATE;
  let closest: SpeechRate = SPEECH_RATES[0];
  let distance = Math.abs(value - closest);
  for (const candidate of SPEECH_RATES) {
    const next = Math.abs(value - candidate);
    if (next < distance) {
      closest = candidate;
      distance = next;
    }
  }
  return closest;
};

/**
 * The same posture as the progress store: storage can be missing, can be
 * blocked by policy, and can throw on the property access itself. Every path
 * degrades to "no preference" instead of failing.
 */
const storage = (): Storage | null => {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
};

/** Never throws. Anything unreadable, illegal or corrupt reads as normal speed. */
export const readStoredRate = (): SpeechRate => {
  const store = storage();
  if (!store) return DEFAULT_RATE;
  try {
    const raw = store.getItem(RATE_STORAGE_KEY);
    if (typeof raw !== "string" || !raw.trim()) return DEFAULT_RATE;
    const numeric = Number(raw);
    if (!Number.isFinite(numeric)) return DEFAULT_RATE;
    return clampRate(numeric);
  } catch {
    return DEFAULT_RATE;
  }
};

/**
 * The only thing this module persists. One number, no identifier, no history of
 * what was read.
 */
export const storeRate = (rate: SpeechRate): void => {
  const safe = isSpeechRate(rate) ? rate : clampRate(Number(rate));
  const store = storage();
  if (!store) return;
  try {
    store.setItem(RATE_STORAGE_KEY, String(safe));
  } catch {
    // Private mode, a full quota, or storage disabled mid-session. The rate
    // still applies for this visit; only the preference is lost.
  }
};

const FENCE = /^(?:```|~~~)/;
/** `| --- | :-: |` and friends: structure, with nothing to say. */
const isTableDivider = (line: string): boolean =>
  /^[\s|:-]+$/.test(line) && line.includes("|") && line.includes("-");
const isThematicBreak = (line: string): boolean => /^(?:-{3,}|\*{3,}|_{3,})$/.test(line);
/** A reference definition such as `[1]: https://example.org`. */
const isLinkDefinition = (line: string): boolean => /^\[[^\]]*\]:\s*\S+/.test(line);

const stripInline = (line: string): string => line
  // Images before links: the image form is the link form with a `!` in front.
  // The alt text is kept, because that is the part written to be read.
  .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
  .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
  // Reference-style links, `[text][ref]`.
  .replace(/\[([^\]]*)\]\[[^\]]*\]/g, "$1")
  // Autolinks are dropped whole: a spoken URL is a string of letters, not a
  // sentence.
  .replace(/<[a-z][a-z0-9+.-]*:[^>\s]*>/gi, " ")
  // Every backtick, which covers `code`, ``code with a tick`` and a stray one.
  .replace(/`/g, "")
  // Heading markers, opening and the optional closing run.
  .replace(/^#{1,6}\s+/, "")
  .replace(/\s+#+$/, "")
  // Blockquote markers, however deeply nested.
  .replace(/^(?:>\s*)+/, "")
  // List bullets and numbers, then a task-list box if one follows.
  .replace(/^[-*+]\s+/, "")
  .replace(/^\d+[.)]\s+/, "")
  .replace(/^\[[ xX]\]\s+/, "")
  // Table pipes become spaces so cells do not run together.
  .replace(/\|/g, " ")
  // Emphasis, longest marker first so `***x***` does not leave a stray `*`.
  .replace(/\*\*\*([^*]+)\*\*\*/g, "$1")
  .replace(/\*\*([^*]+)\*\*/g, "$1")
  .replace(/\*([^*]+)\*/g, "$1")
  .replace(/~~([^~]+)~~/g, "$1")
  // Underscore emphasis only when the marker is not inside a word, so
  // `sodium_potassium_pump` survives intact.
  .replace(/(^|[^\p{L}\p{N}])__([^_]+)__(?=[^\p{L}\p{N}]|$)/gu, "$1$2")
  .replace(/(^|[^\p{L}\p{N}])_([^_]+)_(?=[^\p{L}\p{N}]|$)/gu, "$1$2")
  // Inline formulas, matching how MarkdownDocument renders them, so what is
  // spoken and what is shown agree.
  .replace(/\$(?!\s)([^$\n]+)\$/g, "$1");

/**
 * Turns a section's markdown into a plain sentence stream for the speech
 * engine.
 *
 * Pure and total: it holds no state, reads nothing, and returns `""` rather
 * than throwing for empty, non-string or malformed input.
 *
 * What it removes, and why:
 *
 *   - Fenced blocks, whole. "Backtick backtick backtick python" is noise, and
 *     code read aloud character by character is worse than silence.
 *   - Inline backticks, keeping the content — inline code is usually a term
 *     like `pH` that belongs in the sentence.
 *   - Heading, blockquote, bullet and numbering markers, table pipes, table
 *     divider rows and horizontal rules.
 *   - Emphasis markers, keeping the emphasised words.
 *   - Link and image syntax, keeping the link text and the alt text.
 *
 * Everything left is joined with single spaces. It deliberately adds no
 * punctuation of its own: sentence pacing comes from the prose as written.
 */
export const plainTextFromMarkdown = (markdown: string): string => {
  if (typeof markdown !== "string" || !markdown) return "";
  try {
    const spoken: string[] = [];
    let insideFence = false;
    for (const rawLine of markdown.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (FENCE.test(line)) {
        insideFence = !insideFence;
        continue;
      }
      if (insideFence || !line) continue;
      if (isThematicBreak(line) || isTableDivider(line) || isLinkDefinition(line)) continue;
      const text = stripInline(line).trim();
      if (text) spoken.push(text);
    }
    return spoken.join(" ").replace(/\s+/g, " ").trim();
  } catch {
    // Unreachable with the patterns above, and still worth having: this
    // function is called on content nobody has hand-checked, and a lesson that
    // cannot be spoken must never be a lesson that cannot be read.
    return "";
  }
};

/**
 * Creates an independent controller. One per page is the intended use; several
 * can coexist, but they share one engine, so starting one stops the others'
 * audio while their state still says otherwise. The UI keeps a single instance.
 *
 * Support is decided once, at creation, so the reported status cannot flicker
 * mid-session.
 */
export const createSpeechController = (): SpeechController => {
  const supported = isSpeechSupported();
  const listeners = new Set<() => void>();
  let status: SpeechStatus = supported ? "idle" : "unsupported";
  let currentSectionId: string | undefined;
  let queue: SpeechSection[] = [];
  let position = 0;
  let rate: SpeechRate = readStoredRate();
  /**
   * Bumped whenever a run ends or is replaced. Every utterance callback carries
   * the value it was created under and does nothing if it no longer matches,
   * which is what makes a late `onend` from a cancelled utterance harmless —
   * engines do deliver those, sometimes well after `cancel()`.
   */
  let run = 0;
  let active: SpeechSynthesisUtterance | undefined;

  const notify = (): void => {
    // A copy, so a listener that unsubscribes itself cannot disturb the walk.
    for (const listener of [...listeners]) {
      try {
        listener();
      } catch {
        // One broken subscriber must not stop the others being told.
      }
    }
  };

  const setState = (next: SpeechStatus, sectionId: string | undefined): void => {
    if (status === next && currentSectionId === sectionId) return;
    status = next;
    currentSectionId = sectionId;
    notify();
  };

  const synthesis = (): SpeechSynthesis | undefined => {
    if (!supported) return undefined;
    try {
      return speechGlobals().speechSynthesis;
    } catch {
      return undefined;
    }
  };

  /** Drops the handlers as well as the reference: engines have leaked both. */
  const release = (): void => {
    if (!active) return;
    active.onend = null;
    active.onerror = null;
    active = undefined;
  };

  const reset = (): void => {
    run += 1;
    queue = [];
    position = 0;
    release();
  };

  const cancel = (): void => {
    const engine = synthesis();
    if (!engine) return;
    try {
      engine.cancel();
    } catch {
      // A failing engine is still a stopped engine as far as this page is
      // concerned.
    }
  };

  const finish = (): void => {
    reset();
    setState("idle", undefined);
  };

  const speakCurrent = (): void => {
    const engine = synthesis();
    const section = queue[position];
    const Utterance = speechGlobals().SpeechSynthesisUtterance;
    if (!engine || !section || typeof Utterance !== "function") {
      finish();
      return;
    }
    const ticket = run;
    let utterance: SpeechSynthesisUtterance;
    try {
      utterance = new Utterance(section.text);
      utterance.rate = rate;
      utterance.onend = () => {
        if (ticket === run) advance();
      };
      utterance.onerror = () => {
        // Stopping beats marching through the remaining sections raising the
        // same error on each one.
        if (ticket === run) {
          cancel();
          finish();
        }
      };
    } catch {
      finish();
      return;
    }
    active = utterance;
    // Announced before the engine is asked to speak, so a listener always sees
    // the section highlighted for the audio it is about to hear.
    setState("speaking", section.id);
    try {
      engine.speak(utterance);
    } catch {
      finish();
    }
  };

  const advance = (): void => {
    position += 1;
    if (position >= queue.length) {
      finish();
      return;
    }
    speakCurrent();
  };

  const speak = (sections: SpeechSection[], startAtId?: string): void => {
    if (!supported) return;
    // Replaces whatever was in flight rather than queueing behind it.
    reset();
    cancel();
    queue = (Array.isArray(sections) ? sections : [])
      .map((section) => ({
        id: typeof section?.id === "string" ? section.id : "",
        label: typeof section?.label === "string" ? section.label : "",
        // Applied here as well as by the caller: the function is idempotent on
        // text that is already plain, and it means no caller can accidentally
        // have markup read out.
        text: plainTextFromMarkdown(section?.text ?? ""),
      }))
      // A section with no id cannot be highlighted and a section with no words
      // has nothing to say; both are dropped rather than spoken as silence.
      .filter((section) => Boolean(section.id) && Boolean(section.text));
    if (!queue.length) {
      finish();
      return;
    }
    const requested = startAtId === undefined ? 0 : queue.findIndex((section) => section.id === startAtId);
    // An unknown id starts from the top rather than refusing to play.
    position = requested >= 0 ? requested : 0;
    speakCurrent();
  };

  const pause = (): void => {
    if (status !== "speaking") return;
    const engine = synthesis();
    if (!engine) return;
    try {
      engine.pause();
    } catch {
      // The engine did not pause, so the state must not claim it did.
      return;
    }
    setState("paused", currentSectionId);
  };

  const resume = (): void => {
    if (status !== "paused") return;
    const engine = synthesis();
    if (!engine) return;
    try {
      engine.resume();
    } catch {
      return;
    }
    setState("speaking", currentSectionId);
  };

  /**
   * Safe to call repeatedly, and safe to call from a cleanup function after the
   * component has gone: with nothing playing it does nothing at all, so it
   * never cancels audio started by something else.
   */
  const stop = (): void => {
    if (!supported) return;
    if (status === "idle" && !queue.length && !active) return;
    reset();
    cancel();
    setState("idle", undefined);
  };

  /**
   * Persisted immediately and applied from the next section onwards. The Web
   * Speech API cannot change the rate of an utterance already in flight, and
   * restarting the current section would replay audio the listener has just
   * heard; a UI that wants the change to take effect now can `stop()` and
   * `speak(sections, currentSectionId)`.
   */
  const setRate = (next: SpeechRate): void => {
    const safe = isSpeechRate(next) ? next : clampRate(Number(next));
    storeRate(safe);
    rate = safe;
  };

  const subscribe = (listener: () => void): (() => void) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  return {
    get status() {
      return status;
    },
    get currentSectionId() {
      return currentSectionId;
    },
    speak,
    pause,
    resume,
    stop,
    setRate,
    subscribe,
  };
};
