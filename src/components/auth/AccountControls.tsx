import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../lib/auth/context";

/**
 * Header account control, the post-sign-in toast, and the contextual
 * save-progress prompt.
 *
 * All three render nothing at all until Supabase is configured, so an
 * unconfigured checkout looks and behaves exactly as it does today.
 */

function AvatarInitial({ label }: { label: string }) {
  return <span className="account-avatar" aria-hidden="true">{label.slice(0, 1).toUpperCase()}</span>;
}

export function AccountControls() {
  const { configured, status, session, openSheet, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!configured || status === "loading") return null;

  if (status === "signed-out") {
    return (
      <button type="button" className="account-signin" onClick={() => openSheet()}>
        Sign in
      </button>
    );
  }

  const label = session?.user.name || session?.user.email || "Account";
  return (
    <div className="account-wrap" ref={wrapRef}>
      <button
        type="button"
        className="account-trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
      >
        <AvatarInitial label={label} />
        <span className="account-label">{label}</span>
      </button>
      {open && (
        <div className="account-menu" role="menu">
          <p className="account-menu-email">{session?.user.email}</p>
          {/* Only routes that actually exist are offered. */}
          <a className="account-menu-item" role="menuitem" href="/">Your dashboard</a>
          <button
            type="button"
            className="account-menu-item account-menu-item--danger"
            role="menuitem"
            onClick={async () => { setOpen(false); await signOut(); }}
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}

/** Confirms a sign-in, and says so explicitly when progress was carried over. */
export function AuthToast() {
  const { configured, status, migrated } = useAuth();
  const [visible, setVisible] = useState(false);
  const announced = useRef(false);

  useEffect(() => {
    if (status !== "signed-in" || announced.current) return;
    announced.current = true;
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  if (!configured || !visible) return null;
  return (
    <div className="auth-toast" role="status" aria-live="polite">
      {migrated ? "You're signed in — your progress is now saved to your account." : "You're signed in."}
    </div>
  );
}

/**
 * The contextual nudge. Shown after real work, never before, and "Not now"
 * silences it for a fortnight rather than until the next page view — a prompt
 * that returns immediately is the thing people actually resent.
 */
const DISMISS_KEY = "medmosa.auth.prompt-dismissed.v1";
const DISMISS_DAYS = 14;

export function SaveProgressPrompt({ reason }: { reason: string }) {
  const { configured, status, openSheet } = useAuth();
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      const until = Number(globalThis.localStorage?.getItem(DISMISS_KEY) ?? 0);
      setDismissed(Number.isFinite(until) && until > Date.now());
    } catch { setDismissed(false); }
  }, []);

  if (!configured || status !== "signed-out" || dismissed) return null;

  return (
    <aside className="save-prompt" aria-label="Save your progress">
      <div>
        <p className="save-prompt-title">Want to save this progress?</p>
        <p className="save-prompt-text">{reason}</p>
      </div>
      <div className="save-prompt-actions">
        <button type="button" className="button button--primary" onClick={() => openSheet(reason)}>
          Create free account
        </button>
        <button
          type="button"
          className="button"
          onClick={() => {
            try {
              globalThis.localStorage?.setItem(DISMISS_KEY, String(Date.now() + DISMISS_DAYS * 86_400_000));
            } catch { /* nothing to do */ }
            setDismissed(true);
          }}
        >
          Not now
        </button>
      </div>
    </aside>
  );
}
