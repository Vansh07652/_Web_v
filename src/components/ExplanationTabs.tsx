/**
 * The dual-explanation switcher: the same topic at college level, in plain
 * language, or both at once.
 *
 * Two rules govern what this renders.
 *
 * **Only what exists.** The switcher appears when the topic genuinely has both
 * a college-level explanation and a plain-language one. With only one of them
 * the single explanation is rendered on its own, with no tablist, no empty tab
 * and no "coming soon" — a tab that opens onto nothing is worse than no tab.
 *
 * **Compare is a layout, not a script.** Side-by-side happens when the viewport
 * is wide enough for two readable columns, which is a question CSS answers on
 * its own. There is no resize listener and no measured breakpoint in
 * JavaScript, so the two columns become two stacked cards on a narrow screen
 * even before this component has hydrated.
 *
 * The tablist follows the ARIA authoring practice: roving tabindex, so only the
 * selected tab is a tab stop; Left/Right wrap; Home and End jump to the ends;
 * and selection follows focus, which matches the study-mode tabs already on the
 * page.
 */
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { MarkdownDocument } from "./MarkdownDocument";

type ExplanationMode = "college" | "plain" | "compare";

const MODE_LABELS: Record<ExplanationMode, string> = {
  college: "College level",
  plain: "Plain language",
  compare: "Compare both",
};

export interface ExplanationTabsProps {
  /** College-level markdown. Empty when the topic has no college-level note. */
  college: string;
  /** Plain-language markdown. Empty when the topic has no plain-language version. */
  plain: string;
}

function PlainIntro({ hasCollege }: { hasCollege: boolean }) {
  return (
    <div className="mode-intro">
      <p className="eyebrow">Explain it like I'm 10</p>
      <h2>{hasCollege ? "Get the simple version first" : "The plain-language version"}</h2>
      <p>
        {hasCollege
          ? "Build the mental model here, then go back to the full college-level explanation."
          : "This topic is explained in plain language only. No separate college-level note has been written for it yet."}
      </p>
    </div>
  );
}

export function ExplanationTabs({ college, plain }: ExplanationTabsProps) {
  const hasCollege = Boolean(college.trim());
  const hasPlain = Boolean(plain.trim());
  const modes: ExplanationMode[] = hasCollege && hasPlain ? ["college", "plain", "compare"] : [];
  const [mode, setMode] = useState<ExplanationMode>("college");
  const baseId = useId();
  const tabRefs = useRef<Partial<Record<ExplanationMode, HTMLButtonElement | null>>>({});

  const collegeLabelId = `${baseId}-compare-college`;
  const plainLabelId = `${baseId}-compare-plain`;

  // One explanation, or none: render it as it is. No tablist is offered for a
  // choice the reader does not have.
  if (!modes.length) {
    if (hasCollege) return <MarkdownDocument source={college} />;
    if (hasPlain) {
      return (
        <>
          <PlainIntro hasCollege={false} />
          <MarkdownDocument source={plain} />
        </>
      );
    }
    return null;
  }

  const select = (next: ExplanationMode, moveFocus = false) => {
    setMode(next);
    if (moveFocus) tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const offset = event.key === "ArrowRight" ? 1
      : event.key === "ArrowLeft" ? -1
        : event.key === "Home" ? -index
          : event.key === "End" ? modes.length - 1 - index
            : 0;
    if (!offset) return;
    event.preventDefault();
    select(modes[(index + offset + modes.length) % modes.length], true);
  };

  return (
    <div className="explain">
      <div className="explain-tabs" role="tablist" aria-label="Explanation level">
        {modes.map((value, index) => (
          <button
            key={value}
            ref={(element) => { tabRefs.current[value] = element; }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${value}`}
            aria-selected={mode === value}
            aria-controls={`${baseId}-panel`}
            tabIndex={mode === value ? 0 : -1}
            onKeyDown={(event) => onKeyDown(event, index)}
            onClick={() => select(value)}
          >
            {MODE_LABELS[value]}
          </button>
        ))}
      </div>

      <div
        className="explain-panel"
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${mode}`}
        tabIndex={-1}
      >
        {mode === "college" && <MarkdownDocument source={college} />}

        {mode === "plain" && (
          <>
            <PlainIntro hasCollege />
            <MarkdownDocument source={plain} />
            <p className="explain-bridge">
              Got it?{" "}
              <button type="button" className="text-button" onClick={() => select("college", true)}>
                Read the college-level explanation
              </button>
            </p>
          </>
        )}

        {mode === "compare" && (
          <div className="compare-grid">
            <section className="compare-column" aria-labelledby={collegeLabelId}>
              <p className="compare-label" id={collegeLabelId}>College level</p>
              <MarkdownDocument source={college} />
            </section>
            <section className="compare-column" aria-labelledby={plainLabelId}>
              <p className="compare-label" id={plainLabelId}>Plain language</p>
              <MarkdownDocument source={plain} />
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
