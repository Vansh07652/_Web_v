import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { completeOAuthRedirect, currentSession, onAuthChange, refreshSession, signOut as endSession, type Session } from "./client";
import { isAuthConfigured, safeReturnPath } from "./config";
import { syncOnSignIn } from "./sync";

/**
 * Auth state for the app.
 *
 * `configured` is the switch everything else hangs off. Until a Supabase
 * project exists, it is false and the app renders no sign-in affordance at
 * all — the site works exactly as it does today rather than showing a button
 * that cannot do anything.
 */
export interface AuthState {
  configured: boolean;
  /** Undefined while the stored session is still being restored. */
  session: Session | null | undefined;
  status: "loading" | "signed-in" | "signed-out";
  /** Set briefly after a sign-in that carried local progress into the account. */
  migrated: boolean;
  openSheet: (reason?: string) => void;
  closeSheet: () => void;
  sheetOpen: boolean;
  sheetReason: string;
  signOut: () => Promise<void>;
  onSignedIn: (session: Session) => Promise<void>;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const configured = isAuthConfigured();
  const [session, setSession] = useState<Session | null | undefined>(configured ? undefined : null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sheetReason, setSheetReason] = useState("");
  const [migrated, setMigrated] = useState(false);
  const syncing = useRef(false);

  const runSync = useCallback(async (active: Session) => {
    // Guarded so a refresh firing mid-sync cannot start a second merge; the
    // merge is idempotent, but two in flight would still write twice.
    if (syncing.current) return;
    syncing.current = true;
    try {
      const result = await syncOnSignIn(active);
      if (result.migrated) {
        setMigrated(true);
        setTimeout(() => setMigrated(false), 6000);
      }
    } catch {
      // A failed sync must never block signing in. The local store is intact
      // and the next successful sync will carry it up.
    } finally {
      syncing.current = false;
    }
  }, []);

  useEffect(() => {
    if (!configured) return;
    let active = true;

    void (async () => {
      // A provider redirect lands with tokens in the fragment; handle that
      // before falling back to a stored refresh token.
      const fromRedirect = globalThis.location?.pathname === "/auth/callback"
        ? await completeOAuthRedirect()
        : { session: null, next: "/" };
      const restored = fromRedirect.session ?? (await refreshSession());
      if (!active) return;
      setSession(restored);
      if (restored) {
        await runSync(restored);
        if (globalThis.location?.pathname === "/auth/callback") {
          globalThis.history.replaceState(null, "", safeReturnPath(fromRedirect.next));
          globalThis.dispatchEvent(new PopStateEvent("popstate"));
        }
      }
    })();

    const unsubscribe = onAuthChange((next) => { if (active) setSession(next); });
    return () => { active = false; unsubscribe(); };
  }, [configured, runSync]);

  const value = useMemo<AuthState>(() => ({
    configured,
    session,
    status: session === undefined ? "loading" : session ? "signed-in" : "signed-out",
    migrated,
    sheetOpen,
    sheetReason,
    openSheet: (reason = "") => { setSheetReason(reason); setSheetOpen(true); },
    closeSheet: () => setSheetOpen(false),
    signOut: async () => { await endSession(); setSession(null); },
    onSignedIn: async (next) => {
      setSession(next);
      setSheetOpen(false);
      await runSync(next);
    },
  }), [configured, session, migrated, sheetOpen, sheetReason, runSync]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthState {
  const value = useContext(AuthContext);
  if (!value) {
    // Rendering outside the provider is a programming error, but it must not
    // take the page down — study content does not depend on auth.
    return {
      configured: false, session: null, status: "signed-out", migrated: false,
      sheetOpen: false, sheetReason: "", openSheet: () => {}, closeSheet: () => {},
      signOut: async () => {}, onSignedIn: async () => {},
    };
  }
  return value;
}

export { currentSession };
