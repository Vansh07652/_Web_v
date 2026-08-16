/**
 * Supabase configuration, read from build-time environment variables.
 *
 * WHY A HAND-WRITTEN CLIENT AND NOT `@supabase/supabase-js`
 *
 * No package registry is reachable from either build environment, so adding a
 * dependency would leave `package-lock.json` unresolvable and break `npm ci` in
 * CI. Supabase's auth (GoTrue) and data (PostgREST) surfaces are both plain
 * REST over HTTPS, so the client in `client.ts` speaks to them with `fetch` and
 * adds nothing to the dependency tree — which also keeps this site's "loads no
 * third-party JavaScript" property intact.
 *
 * WHAT IS AND IS NOT SECRET
 *
 * `VITE_SUPABASE_ANON_KEY` is a publishable key. It is designed to ship to
 * browsers, and it grants nothing on its own: every table is protected by Row
 * Level Security policies, so a request can only ever read or write rows whose
 * `user_id` matches the verified JWT presented with it. The service-role key,
 * which does bypass RLS, must never appear in this repository or in any build.
 *
 * WHEN NOT CONFIGURED
 *
 * With no environment variables set — which is the state of every checkout
 * until a Supabase project exists — `isAuthConfigured` is false and the app
 * behaves exactly as it does today: fully usable, progress stored locally, and
 * no sign-in affordances rendered at all. Nothing shows a button that cannot
 * work.
 */

const readEnv = (key: string): string => {
  const value = (import.meta.env as Record<string, string | undefined>)[key];
  return typeof value === "string" ? value.trim() : "";
};

export const SUPABASE_URL = readEnv("VITE_SUPABASE_URL").replace(/\/+$/, "");
export const SUPABASE_ANON_KEY = readEnv("VITE_SUPABASE_ANON_KEY");

/** Auth is only offered when a project is actually reachable. */
export const isAuthConfigured = (): boolean =>
  /^https:\/\/[\w.-]+\.supabase\.(co|in)$/.test(SUPABASE_URL) && SUPABASE_ANON_KEY.length > 20;

/**
 * Apple is gated separately: it needs the Apple Developer Program, a Services
 * ID and a signing key. The button appears only once the provider is enabled
 * in the Supabase dashboard and this flag is set, so nobody is ever shown a
 * sign-in option that cannot complete.
 */
export const isAppleEnabled = (): boolean => isAuthConfigured() && readEnv("VITE_AUTH_APPLE_ENABLED") === "true";

export type OAuthProvider = "google" | "apple";

export const enabledProviders = (): OAuthProvider[] => {
  if (!isAuthConfigured()) return [];
  return isAppleEnabled() ? ["google", "apple"] : ["google"];
};

export const authEndpoint = (path: string): string => `${SUPABASE_URL}/auth/v1${path}`;
export const restEndpoint = (path: string): string => `${SUPABASE_URL}/rest/v1${path}`;

/**
 * Where a provider sends the browser back to. Only same-origin paths are ever
 * produced, and the intended destination travels as a path in a query
 * parameter that `safeReturnPath` re-validates on the way back — an absolute
 * URL supplied by anyone else can never become a redirect target.
 */
export function callbackUrl(returnPath: string): string {
  const url = new URL("/auth/callback", globalThis.location?.origin ?? "https://medmosa.org");
  url.searchParams.set("next", safeReturnPath(returnPath));
  return url.toString();
}

/** Accepts only a same-origin absolute path. Anything else becomes "/". */
export function safeReturnPath(candidate: string | null | undefined): string {
  if (typeof candidate !== "string" || !candidate) return "/";
  // Reject protocol-relative ("//evil.com"), absolute URLs, and control characters.
  if (!candidate.startsWith("/") || candidate.startsWith("//") || /[\x00-\x1f]/.test(candidate)) return "/";
  return candidate;
}
