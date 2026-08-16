import { useEffect, useId, useRef, useState } from "react";
import { AuthError, isValidEmail, messageFor, sendEmailCode, startOAuth, verifyEmailCode } from "../../lib/auth/client";
import { enabledProviders } from "../../lib/auth/config";
import { useAuth } from "../../lib/auth/context";

/**
 * The sign-in sheet.
 *
 * Mobile is the primary case, so this is a bottom sheet on phones and a
 * centred panel from 40rem up — not a desktop modal squeezed onto a small
 * screen. Everything tappable is at least 44px, the primary action sits low
 * where a thumb reaches, and the sheet scrolls internally so the on-screen
 * keyboard can never bury the button you need next.
 *
 * The first screen deliberately does not ask "sign in or sign up?". Every
 * provider here, email included, resolves that on its own, so asking would be
 * a question the product already knows the answer to.
 */

const RESEND_COOLDOWN_SECONDS = 45;

function GoogleMark() {
  // Google's four-colour mark, required by their branding guidelines and drawn
  // rather than fetched so the sheet stays free of third-party requests.
  return (
    <svg className="auth-provider-mark" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
      <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62Z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18Z" />
      <path fill="#FBBC05" d="M3.97 10.72a5.4 5.4 0 0 1 0-3.44V4.95H.96a9 9 0 0 0 0 8.1l3.01-2.33Z" />
      <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.9 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58Z" />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg className="auth-provider-mark" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12.3 9.6c0-1.9 1.5-2.8 1.6-2.9-.9-1.3-2.2-1.4-2.7-1.5-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.5-.7-1.3 0-2.4.7-3.1 1.9-1.3 2.3-.3 5.6.9 7.4.6.9 1.4 1.9 2.4 1.9.9 0 1.3-.6 2.4-.6 1.1 0 1.4.6 2.4.6 1 0 1.7-.9 2.3-1.8.7-1 1-2 1-2.1 0 0-1.9-.7-1.9-2.9ZM10.6 3.6c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.1 1.8-.5 2.3-1.2Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function AuthSheet() {
  const { sheetOpen, closeSheet, sheetReason, onSignedIn, configured } = useAuth();
  const [step, setStep] = useState<"choose" | "code">("choose");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState<"" | "google" | "apple" | "email" | "verify">("");
  const [error, setError] = useState("");
  const [cooldown, setCooldown] = useState(0);
  const titleId = useId();
  const emailId = useId();
  const codeId = useId();
  const errorId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const codeRef = useRef<HTMLInputElement>(null);
  const restoreFocusTo = useRef<Element | null>(null);
  const providers = enabledProviders();

  useEffect(() => {
    if (!sheetOpen) return;
    restoreFocusTo.current = document.activeElement;
    setStep("choose");
    setError("");
    setCode("");
    setBusy("");
    // Focus the close control rather than the email field: focusing an input
    // opens the keyboard immediately on iOS and hides most of the sheet.
    requestAnimationFrame(() => closeRef.current?.focus());
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      (restoreFocusTo.current as HTMLElement | null)?.focus?.();
    };
  }, [sheetOpen]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((value) => value - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  useEffect(() => {
    if (step === "code") requestAnimationFrame(() => codeRef.current?.focus());
  }, [step]);

  if (!configured || !sheetOpen) return null;

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") { closeSheet(); return; }
    if (event.key !== "Tab") return;
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
    );
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  const fail = (thrown: unknown) => {
    setError(thrown instanceof AuthError ? thrown.message : messageFor("unknown"));
    setBusy("");
  };

  const oauth = (provider: "google" | "apple") => {
    setError("");
    setBusy(provider);
    try {
      startOAuth(provider, `${globalThis.location.pathname}${globalThis.location.search}`);
    } catch (thrown) { fail(thrown); }
  };

  const submitEmail = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    if (!isValidEmail(email)) { setError(messageFor("invalid_email")); return; }
    setBusy("email");
    try {
      await sendEmailCode(email);
      setStep("code");
      setCooldown(RESEND_COOLDOWN_SECONDS);
    } catch (thrown) { fail(thrown); } finally { setBusy(""); }
  };

  const submitCode = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setBusy("verify");
    try {
      const session = await verifyEmailCode(email, code);
      await onSignedIn(session);
    } catch (thrown) { fail(thrown); }
  };

  const resend = async () => {
    if (cooldown > 0) return;
    setError("");
    try {
      await sendEmailCode(email);
      setCooldown(RESEND_COOLDOWN_SECONDS);
    } catch (thrown) { fail(thrown); }
  };

  return (
    <div className="auth-scrim" onPointerDown={(event) => { if (event.target === event.currentTarget) closeSheet(); }}>
      <div
        className="auth-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={dialogRef}
        onKeyDown={onKeyDown}
      >
        <div className="auth-grabber" aria-hidden="true" />
        <button ref={closeRef} type="button" className="auth-close" onClick={closeSheet} aria-label="Close sign-in">
          <CloseIcon />
        </button>

        {step === "choose" ? (
          <>
            <h2 id={titleId} className="auth-title">Save your study progress</h2>
            <p className="auth-lede">
              {sheetReason || "Keep your streak, topics read and question results across every device you study on."}
            </p>

            <div className="auth-providers">
              {providers.includes("google") && (
                <button type="button" className="auth-provider" onClick={() => oauth("google")} disabled={busy !== ""}>
                  <GoogleMark />
                  <span>{busy === "google" ? "Opening Google…" : "Continue with Google"}</span>
                </button>
              )}
              {providers.includes("apple") && (
                <button type="button" className="auth-provider auth-provider--apple" onClick={() => oauth("apple")} disabled={busy !== ""}>
                  <AppleMark />
                  <span>{busy === "apple" ? "Opening Apple…" : "Continue with Apple"}</span>
                </button>
              )}
            </div>

            {providers.length > 0 && <p className="auth-divider"><span>or continue with email</span></p>}

            <form className="auth-form" onSubmit={submitEmail} noValidate>
              <label className="auth-label" htmlFor={emailId}>Email address</label>
              <input
                id={emailId}
                className="auth-input"
                type="email"
                inputMode="email"
                autoComplete="email"
                autoCapitalize="none"
                spellCheck={false}
                enterKeyHint="go"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-describedby={error ? errorId : undefined}
                aria-invalid={error ? true : undefined}
                required
              />
              {error && <p id={errorId} className="auth-error" role="alert">{error}</p>}
              <button type="submit" className="auth-primary" disabled={busy !== ""}>
                {busy === "email" ? "Sending code…" : "Continue with email"}
              </button>
            </form>

            <p className="auth-foot">Free to use. No credit card required. You can keep studying without an account.</p>
          </>
        ) : (
          <>
            <h2 id={titleId} className="auth-title">Check your inbox</h2>
            <p className="auth-lede">
              We sent a six-digit code to <strong>{email}</strong>. It expires in about an hour.
            </p>

            <form className="auth-form" onSubmit={submitCode} noValidate>
              <label className="auth-label" htmlFor={codeId}>Six-digit code</label>
              <input
                ref={codeRef}
                id={codeId}
                className="auth-input auth-input--code"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="[0-9]*"
                maxLength={6}
                enterKeyHint="go"
                placeholder="123456"
                value={code}
                onChange={(event) => {
                  const digits = event.target.value.replace(/\D/g, "").slice(0, 6);
                  setCode(digits);
                  setError("");
                }}
                aria-describedby={error ? errorId : undefined}
                aria-invalid={error ? true : undefined}
                required
              />
              {error && <p id={errorId} className="auth-error" role="alert">{error}</p>}
              <button type="submit" className="auth-primary" disabled={busy === "verify" || code.length < 6}>
                {busy === "verify" ? "Checking…" : "Sign in"}
              </button>
            </form>

            <div className="auth-secondary-row">
              <button type="button" className="auth-linklike" onClick={() => { setStep("choose"); setError(""); }}>
                Use a different email
              </button>
              <button type="button" className="auth-linklike" onClick={resend} disabled={cooldown > 0}>
                {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend code"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
