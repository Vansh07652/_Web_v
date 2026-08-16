/**
 * Structured data (schema.org JSON-LD).
 *
 * Everything this module emits is derived from something the site can prove:
 * its own name, its own URLs, and the breadcrumb trail already rendered on the
 * page. Nothing here describes the teaching material itself.
 *
 * ## What is deliberately NOT emitted, and why
 *
 * schema.org has types that look attractive on an education site. MedMosa
 * emits none of them, on purpose:
 *
 * - `Course` and `CourseInstance` carry provider, enrolment and credential
 *   semantics. MedMosa enrols nobody, awards nothing, and has no instructor of
 *   record. A course node would assert a relationship that does not exist.
 * - `Quiz` and `Question` (with an accepted-answer property) advertise
 *   assessment. What this library holds is study material with written
 *   rationales, not a graded or calibrated assessment — and marking answers up
 *   as data invites a search result to lift the answer away from the
 *   explanation that makes it worth anything.
 * - `EducationalOccupationalCredential`, and any exam-alignment claim built on
 *   it, would say this material is mapped to a published exam blueprint. No
 *   blueprint exists anywhere in this repository and no such mapping has been
 *   done. See `docs/study-paths.md`, which declines the same claim.
 * - The medical vocabulary (medical entities, conditions, medical web pages,
 *   drugs) implies clinical authorship and clinical review. There is no
 *   credentialed clinical reviewer behind this content.
 * - Review and aggregate-rating markup would fabricate ratings nobody left.
 *
 * A structured-data claim the project cannot back is a manual-action risk, and
 * more to the point it is simply untrue. So the allowed set is exactly
 * `WebSite`, `BreadcrumbList` and its `ListItem` entries.
 *
 * `scripts/validate-structured-data.mjs` enforces that list statically, so the
 * boundary survives the next person who edits this file.
 */

export interface BreadcrumbCrumb {
  name: string;
  path: string;
}

const SCHEMA_CONTEXT = "https://schema.org";
const SITE_NAME = "MedMosa";

/** Marks the elements this module owns, so it can clear its own work. */
const SCHEMA_ELEMENT_ATTRIBUTE = "data-medmosa-schema";

/**
 * Routes that never get a breadcrumb. The error shells describe no real place
 * in the site, and the prototype and the auth callback are not indexed
 * content, so a trail pointing at them would be noise at best.
 */
const CRUMBLESS_ROOTS = new Set(["404", "error", "prototype", "auth"]);

const segmentsOf = (path: string): string[] =>
  path.split(/[?#]/)[0].split("/").filter(Boolean);

const titleCase = (slug: string): string =>
  slug
    .split(/[-_]/)
    .filter(Boolean)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");

const absoluteUrl = (origin: string, path: string): string => {
  const base = origin.replace(/\/+$/, "");
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix}`;
};

const homeCrumb = (): BreadcrumbCrumb => ({ name: "Home", path: "/" });

/**
 * The site-level node: a name and a URL, and nothing else.
 *
 * There is deliberately no search action here. `src/pages/SearchPage.tsx`
 * keeps its query in component state and never reads the query string, so
 * `/search?q=` is not a working endpoint. Publishing a sitelinks search box
 * would point crawlers — and anyone who used it — at an empty search form.
 * If the search page is ever taught to read the parameter, the action belongs
 * here and nowhere else.
 */
export const buildWebSiteSchema = (origin: string): Record<string, unknown> => ({
  "@context": SCHEMA_CONTEXT,
  "@type": "WebSite",
  name: SITE_NAME,
  url: absoluteUrl(origin, "/"),
});

/**
 * A breadcrumb trail, or nothing. A single crumb is just the homepage
 * pointing at itself, which is not a trail, so it produces no markup.
 */
export const buildBreadcrumbSchema = (
  origin: string,
  crumbs: BreadcrumbCrumb[],
): Record<string, unknown> | undefined => {
  if (crumbs.length < 2) return undefined;
  return {
    "@context": SCHEMA_CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(origin, crumb.path),
    })),
  };
};

/**
 * Crumbs for an app path, mirroring the trail the page renders: Home, then one
 * crumb per path segment.
 *
 * `resolveTitle` is given each segment and its index so the caller can supply
 * a real curriculum, course or study-path title. Anything it does not resolve
 * falls back to a readable title-cased slug.
 */
export const crumbsForPath = (
  path: string,
  resolveTitle?: (segment: string, index: number) => string | undefined,
): BreadcrumbCrumb[] => {
  const segments = segmentsOf(path);
  if (!segments.length || CRUMBLESS_ROOTS.has(segments[0])) return [homeCrumb()];

  const crumbs = [homeCrumb()];
  let href = "";
  segments.forEach((segment, index) => {
    href += `/${segment}`;
    crumbs.push({ name: resolveTitle?.(segment, index) ?? titleCase(segment), path: href });
  });
  return crumbs;
};

/**
 * Writes one JSON-LD element per schema into the document head, after removing
 * the ones written last time. Route changes therefore replace the markup
 * rather than stacking a second copy on top of it.
 *
 * Passing an empty array clears everything this module wrote, which is what
 * the router's effect cleanup does.
 */
export const applyStructuredData = (schemas: Array<Record<string, unknown> | undefined>): void => {
  if (typeof document === "undefined" || !document.head) return;

  for (const existing of Array.from(document.head.querySelectorAll(`script[${SCHEMA_ELEMENT_ATTRIBUTE}]`))) {
    existing.remove();
  }

  for (const schema of schemas) {
    if (!schema) continue;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute(SCHEMA_ELEMENT_ATTRIBUTE, String(schema["@type"] ?? "schema"));
    // Assigned as text, never as markup: JSON-LD is data, and the browser is
    // never given the chance to parse it as anything else.
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
};
