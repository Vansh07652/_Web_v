/**
 * Read-aloud controls for a topic page.
 *
 * The whole of the speech behaviour lives in `lib/speech.ts`; this file is the
 * surface for it and holds no audio logic of its own. What it is responsible
 * for is the three things a read-aloud control gets wrong most often:
 *
 *   - **Nothing plays by itself.** `speak()` is called from a press and from
 *     nowhere else. There is no effect that starts playback, no "resume where
 *     you left off", and the only thing persisted is the speed.
 *   - **Playback stops when the page goes.** The cleanup calls `stop()`, and
 *     because the effect also depends on the id of what is being read, moving
 *     from one topic to the next stops the previous one even when React reuses
 *     this component rather than unmounting it.
 *   - **Focus is never taken.** The section being read is announced in a polite
 *     live region; nothing is scrolled to, and no control is focused while
 *     audio is playing. A control that grabs focus mid-sentence is unusable
 *     with a screen reader, which is exactly the audience most likely to press
 *     Listen.
 *
 * Unavailable controls are marked `aria-disabled` rather than `disabled`, so
 * they keep their place in the tab order. A `disabled` button that had focus
 * when a lesson finished reading would drop focus to the document body — the
 * user would press Tab and find themselves back at the top of the page.
 */
import { useCallback, useEffect, useId, useState, useSyncExternalStore } from "react";
import {
  createSpeechController,
  isSpeechSupported,
  readStoredRate,
  SPEECH_RATES,
  type SpeechRate,
  type SpeechSection,
  type SpeechStatus,
} from "../lib/speech";

export interface ListenControlsProps {
  /** Readable sections, in reading order. Empty sections are dropped by the controller. */
  sections: SpeechSection[];
  /** Completes "Read … aloud" — the group's accessible name. */
  label?: string;
  /**
   * Identifies what is being read. When it changes, playback of the previous
   * thing stops, which is what makes this safe on a route change that reuses
   * the component instead of unmounting it.
   */
  sourceId?: string;
}

export function ListenControls({ sections, label = "this topic", sourceId }: ListenControlsProps) {
  // Lazy initialiser: one controller per mounted control, created once.
  const [controller] = useState(createSpeechController);
  const [rate, setRate] = useState<SpeechRate>(readStoredRate);
  const groupId = useId();
  const rateGroupName = useId();

  // Stable across renders, which is what useSyncExternalStore needs to avoid
  // resubscribing on every commit.
  const subscribe = useCallback((onStoreChange: () => void) => controller.subscribe(onStoreChange), [controller]);
  const status = useSyncExternalStore<SpeechStatus>(subscribe, () => controller.status, () => "unsupported");
  const currentSectionId = useSyncExternalStore<string | undefined>(
    subscribe,
    () => controller.currentSectionId,
    () => undefined,
  );

  // Stops on unmount and whenever the topic changes. `stop()` is a no-op when
  // nothing is playing, so this never silences audio it did not start.
  useEffect(() => () => controller.stop(), [controller, sourceId]);

  const playing = status === "speaking" || status === "paused";

  const onListen = () => controller.speak(sections);
  const onPauseOrResume = () => {
    if (status === "speaking") controller.pause();
    else if (status === "paused") controller.resume();
  };
  const onStop = () => {
    if (playing) controller.stop();
  };
  const onRate = (next: SpeechRate) => {
    controller.setRate(next);
    setRate(next);
  };

  if (!sections.length) return null;

  if (!isSpeechSupported()) {
    return (
      <p className="listen-unsupported" role="note">
        Read-aloud needs a speech voice from your browser or operating system, and this browser does not offer one.
        Everything on this page can still be read normally.
      </p>
    );
  }

  const activeSection = sections.find((section) => section.id === currentSectionId);
  const statusText = status === "speaking"
    ? activeSection ? `Reading: ${activeSection.label}.` : "Reading."
    : status === "paused"
      ? activeSection ? `Paused during: ${activeSection.label}.` : "Paused."
      : "Not reading.";

  return (
    <div className="listen-controls" role="group" aria-labelledby={groupId}>
      <p className="listen-label" id={groupId}>Read {label} aloud</p>

      <div className="listen-buttons">
        <button type="button" className="button button-secondary listen-button" onClick={onListen}>
          {playing ? "Start again" : "Listen"}
        </button>
        <button
          type="button"
          className="button button-secondary listen-button"
          aria-disabled={playing ? undefined : true}
          onClick={onPauseOrResume}
        >
          {status === "paused" ? "Resume" : "Pause"}
        </button>
        <button
          type="button"
          className="button button-secondary listen-button"
          aria-disabled={playing ? undefined : true}
          onClick={onStop}
        >
          Stop
        </button>
      </div>

      <fieldset className="listen-speed">
        <legend>Reading speed</legend>
        <div className="listen-speed-options">
          {SPEECH_RATES.map((value) => (
            <label className="listen-speed-option" key={value}>
              <input
                type="radio"
                name={rateGroupName}
                value={value}
                checked={rate === value}
                onChange={() => onRate(value)}
              />
              <span>{value}x</span>
            </label>
          ))}
        </div>
      </fieldset>

      <p className="listen-status" role="status" aria-live="polite">
        {status === "speaking" && <span className="listen-indicator" aria-hidden="true" />}
        {statusText}
      </p>
      {playing && (
        <p className="listen-hint">A new speed starts at the next section, so nothing you are hearing is repeated.</p>
      )}
    </div>
  );
}
