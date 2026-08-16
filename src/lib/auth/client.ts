/**
 * A minimal typed client for Supabase Auth (GoTrue) and PostgREST.
 *
 * Only the calls this product needs, spoken over `fetch`:
 *   POST /auth/v1/otp     — send a one-time code to an email address
 *   POST /auth/v1/verify  — exchange that code for a session
 *   GET  /auth/v1/authorize — provider redirect for Google / Apple
 *   POST /auth/v1/token   — refresh an expiring session
 *   POST /auth/v1/logout  — end the session
 *
 * SESSION STORAGE, HONESTLY
 *
 * The brief asks for HTTP-only cookies. A static site has no server to set
 * one, so that is not available here and pretending otherwise would be worse
 * than saying so. What this does instead is the accepted practice for
 * browser-only apps, and what `@supabase/supabase-js` itself does:
 *
 *   - the access token is short-lived (one hour by default) and kept in memory
 *   - only the refresh token is persisted, so a closed tab can resume
 *   - refresh happens ahead of expiry, and a rejected refresh clears the
 *     session rather than retrying against a revoked token
 *
 * A cross-site scripting flaw could still reach the refresh token. The site
 * ships no third-party JavaScript and renders no untrusted markup, which is
 * what keeps that risk small: `scripts/lint` fails the build if any component
 * starts injecting raw HTML.
 */
import { SUPABASE_ANON_KEY, authEndpoint, callbackUrl, isAuthConfigured, restEndpoint, safeReturnPath, type OAuthProvider } from "./config";

const REFRESH_KEY = "medmosa.auth.refresh_token.v1";
/** Refresh this far before expiry, so a request never races the clock. */
const REFRESH_MARGIN_SECONDS = 120;

export interface AuthUser {
  id: string;
  email: string | null;
  name: string | null;
}

export interface Session {
  accessToken: string;
  expiresAt: number;
  user: AuthUser;
}

export type AuthErrorCode =
  | "not_configured"
  | "invalid_email"
  | "rate_limited"
  | "invalid_code"
  | "expired_code"
  | "network"
  | "provider"
  | "unknown";

export class AuthError extends Error {
  code: AuthErrorCode;
  constructor(code: AuthErrorCode, message: string) {
    super(message);
    this.name = "AuthError";
    this.code = code;
  }
}

/** Deliberately non-committal: never reveals whether an address has an account. */
const MESSAGES: Record<AuthErrorCode, string> = {
  not_configured: "Sign-in is not available yet.",
  invalid_email: "That does not look like an email address.",
  rate_limited: "Too many attempts. Wait a minute and try again.",
  invalid_code: "That code is not right. Check it and try again.",
  expired_code: "That code has expired. Send a new one.",
  network: "Could not reach the server. Check your connection and try again.",
  provider: "That sign-in could not be completed. Try again, or use email.",
  unknown: "Something went wrong. Try again.",
};

export const messageFor = (code: AuthErrorCode): string => MESSAGES[code] ?? MESSAGES.unknown;

/** RFC-shaped enough to catch typos without rejecting valid addresses. */
export const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/.test(value.trim()) && value.trim().length <= 254;

let memorySession: Session | null = null;
let refreshTimer: ReturnType<typeof setTimeout> | undefined;
const listeners = new Set<(session: Session | null) => void>();

const storage = (): Storage | null => {
  try { return globalThis.localStorage ?? null; } catch { return null; }
};
const readRefreshToken = (): string | null => {
  try { return storage()?.getItem(REFRESH_KEY) ?? null; } catch { return null; }
};
const writeRefreshToken = (token: string | null): void => {
  try {
    const store = storage();
    if (!store) return;
    if (token) store.setItem(REFRESH_KEY, token);
    else store.removeItem(REFRESH_KEY);
  } catch { /* private mode: the session simply will not survive a reload */ }
};

const notify = (): void => { for (const listener of listeners) listener(memorySession); };

export function onAuthChange(listener: (session: Session | null) => void): () => void {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

export const currentSession = (): Session | null =>
  memorySession && memorySession.expiresAt > Date.now() / 1000 ? memorySession : memorySession;

const headers = (accessToken?: string): HeadersInit => ({
  "Content-Type": "application/json",
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${accessToken ?? SUPABASE_ANON_KEY}`,
});

async function post<T>(url: string, body: unknown, accessToken?: string): Promise<T> {
  let response: Response;
  try {
    response = await fetch(url, { method: "POST", headers: headers(accessToken), body: JSON.stringify(body) });
  } catch {
    throw new AuthError("network", MESSAGES.network);
  }
  if (response.ok) return (response.status === 204 ? undefined : await response.json()) as T;

  const payload = await response.json().catch(() => ({})) as { error_code?: string; msg?: string; error_description?: string };
  const detail = `${payload.error_code ?? ""} ${payload.msg ?? payload.error_description ?? ""}`.toLowerCase();
  if (response.status === 429) throw new AuthError("rate_limited", MESSAGES.rate_limited);
  if (detail.includes("expired")) throw new AuthError("expired_code", MESSAGES.expired_code);
  if (response.status === 403 || detail.includes("invalid") || detail.includes("token")) {
    throw new AuthError("invalid_code", MESSAGES.invalid_code);
  }
  throw new AuthError("unknown", MESSAGES.unknown);
}

interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  user?: { id: string; email?: string | null; user_metadata?: { full_name?: string; name?: string } };
}

function adopt(token: TokenResponse): Session {
  const session: Session = {
    accessToken: token.access_token,
    expiresAt: Math.floor(Date.now() / 1000) + (token.expires_in ?? 3600),
    user: {
      id: token.user?.id ?? "",
      email: token.user?.email ?? null,
      name: token.user?.user_metadata?.full_name ?? token.user?.user_metadata?.name ?? null,
    },
  };
  memorySession = session;
  writeRefreshToken(token.refresh_token);
  scheduleRefresh(session);
  notify();
  return session;
}

function scheduleRefresh(session: Session): void {
  if (refreshTimer) clearTimeout(refreshTimer);
  const seconds = Math.max(session.expiresAt - Math.floor(Date.now() / 1000) - REFRESH_MARGIN_SECONDS, 30);
  refreshTimer = setTimeout(() => { void refreshSession(); }, seconds * 1000);
}

/** Restores a session from the stored refresh token. Safe to call repeatedly. */
export async function refreshSession(): Promise<Session | null> {
  if (!isAuthConfigured()) return null;
  const token = readRefreshToken();
  if (!token) return null;
  try {
    const response = await post<TokenResponse>(`${authEndpoint("/token")}?grant_type=refresh_token`, { refresh_token: token });
    return adopt(response);
  } catch (error) {
    // A refresh token that the server rejects is dead; holding on to it would
    // retry forever. Network trouble is different — keep it and try later.
    if (error instanceof AuthError && error.code === "network") return null;
    await signOut();
    return null;
  }
}

/** Sends a one-time code to an email address. */
export async function sendEmailCode(email: string): Promise<void> {
  if (!isAuthConfigured()) throw new AuthError("not_configured", MESSAGES.not_configured);
  const address = email.trim().toLowerCase();
  if (!isValidEmail(address)) throw new AuthError("invalid_email", MESSAGES.invalid_email);
  // `should_create_user` stays true so the same field serves sign-up and
  // sign-in; the caller never has to ask which one this is, and the response
  // is identical either way, so it cannot be used to probe for accounts.
  await post(authEndpoint("/otp"), { email: address, create_user: true });
}

/** Exchanges an emailed code for a session. */
export async function verifyEmailCode(email: string, code: string): Promise<Session> {
  if (!isAuthConfigured()) throw new AuthError("not_configured", MESSAGES.not_configured);
  const token = code.replace(/\D/g, "");
  if (token.length < 6) throw new AuthError("invalid_code", MESSAGES.invalid_code);
  const response = await post<TokenResponse>(authEndpoint("/verify"), {
    type: "email",
    email: email.trim().toLowerCase(),
    token,
  });
  return adopt(response);
}

/** Full-page redirect to a provider. Popups are blocked too often on mobile. */
export function startOAuth(provider: OAuthProvider, returnPath: string): void {
  if (!isAuthConfigured()) throw new AuthError("not_configured", MESSAGES.not_configured);
  const url = new URL(authEndpoint("/authorize"));
  url.searchParams.set("provider", provider);
  url.searchParams.set("redirect_to", callbackUrl(returnPath));
  globalThis.location.assign(url.toString());
}

/**
 * Completes a provider redirect. Supabase returns the session in the URL
 * fragment, which never reaches a server or a referrer header. The fragment is
 * cleared immediately so tokens do not sit in the address bar or in history.
 */
export async function completeOAuthRedirect(): Promise<{ session: Session | null; next: string }> {
  const hash = globalThis.location?.hash ?? "";
  const search = new URLSearchParams(globalThis.location?.search ?? "");
  const next = safeReturnPath(search.get("next"));
  if (!hash.includes("access_token")) return { session: null, next };

  const fragment = new URLSearchParams(hash.slice(1));
  const accessToken = fragment.get("access_token");
  const refreshToken = fragment.get("refresh_token");
  globalThis.history?.replaceState(null, "", `${globalThis.location.pathname}${globalThis.location.search}`);
  if (!accessToken || !refreshToken) return { session: null, next };

  writeRefreshToken(refreshToken);
  const session = await refreshSession();
  return { session, next };
}

export async function signOut(): Promise<void> {
  const session = memorySession;
  memorySession = null;
  writeRefreshToken(null);
  if (refreshTimer) clearTimeout(refreshTimer);
  notify();
  if (session && isAuthConfigured()) {
    // Best effort: the local session is already gone either way.
    await post(authEndpoint("/logout"), {}, session.accessToken).catch(() => undefined);
  }
}

/** Authenticated PostgREST request. Row Level Security does the authorising. */
export async function restRequest<T>(path: string, init: RequestInit & { accessToken: string }): Promise<T> {
  const { accessToken, ...rest } = init;
  const response = await fetch(restEndpoint(path), {
    ...rest,
    headers: { ...headers(accessToken), Prefer: "resolution=merge-duplicates,return=representation", ...(rest.headers ?? {}) },
  });
  if (!response.ok) throw new AuthError(response.status === 429 ? "rate_limited" : "unknown", MESSAGES.unknown);
  const text = await response.text();
  return (text ? JSON.parse(text) : null) as T;
}
