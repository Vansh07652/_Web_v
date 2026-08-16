export type Navigate = (path: string) => void;

/** Production origin, used for canonical and Open Graph URLs. */
export const CANONICAL_ORIGIN = "https://medmosa.org";

export const deploymentBasePath = (): string => {
  if (typeof document === "undefined") return "";
  const base = new URL(document.baseURI).pathname.replace(/\/$/, "");
  return base === "/" ? "" : base;
};

/**
 * The origin to build absolute URLs from. Social and search crawlers reject
 * relative Open Graph images, so previews always need a real origin; local and
 * preview builds use their own so links stay clickable during development.
 */
export const siteOrigin = (): string => {
  if (typeof window === "undefined") return CANONICAL_ORIGIN;
  const { origin, hostname } = window.location;
  if (hostname === "localhost" || hostname === "127.0.0.1" || hostname.endsWith(".github.io")) return origin;
  return origin || CANONICAL_ORIGIN;
};

export const normalizePath = (path: string): string => {
  const withoutQuery = path.split(/[?#]/)[0] || "/";
  if (withoutQuery === "/") return "/";
  return withoutQuery.replace(/\/+$/, "") || "/";
};

export const segmentsFor = (path: string): string[] =>
  normalizePath(path).split("/").filter(Boolean).map(decodeURIComponent);

export const appPathFromLocation = (pathname: string): string => {
  const base = deploymentBasePath();
  return normalizePath(base && pathname.startsWith(`${base}/`) ? pathname.slice(base.length) : pathname);
};

export const publicHref = (appPath: string): string => `${deploymentBasePath()}${normalizePath(appPath)}` || "/";

export const subjectHref = (subjectSlug: string): string => `/subjects/${subjectSlug}`;
export const lessonHref = (subjectSlug: string, lessonSlug: string): string =>
  `/subjects/${subjectSlug}/lessons/${lessonSlug}`;
export const noteHref = (subjectSlug: string, lessonSlug: string): string =>
  `/subjects/${subjectSlug}/notes/${lessonSlug}`;
export const questionsHref = (subjectSlug: string, lessonSlug?: string): string =>
  lessonSlug
    ? `/subjects/${subjectSlug}/questions/${lessonSlug}`
    : `/subjects/${subjectSlug}/questions`;
