import type { ReactNode } from "react";

export function SourceStatus({ kind, children, onRetry }: { kind: "loading" | "empty" | "error"; children: ReactNode; onRetry?: () => void }) {
  return (
    <div className={`source-status source-status--${kind}`} role={kind === "error" ? "alert" : "status"} aria-live="polite">
      {kind === "loading" && <span className="source-spinner" aria-hidden="true" />}
      <p>{children}</p>
      {kind === "error" && onRetry && <button type="button" className="button button-secondary" onClick={onRetry}>Try again</button>}
    </div>
  );
}
