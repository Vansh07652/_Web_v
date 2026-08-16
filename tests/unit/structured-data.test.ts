import { describe, expect, it } from "vitest";
import {
  applyStructuredData,
  buildBreadcrumbSchema,
  buildWebSiteSchema,
  crumbsForPath,
  type BreadcrumbCrumb,
} from "../../src/lib/structured-data";

const ORIGIN = "https://medmosa.org";

/** Only WebSite, BreadcrumbList and its ListItem entries may ever be emitted. */
const ALLOWED_TYPES = new Set(["WebSite", "BreadcrumbList", "ListItem"]);

const collectTypes = (value: unknown, found = new Set<string>()): Set<string> => {
  if (Array.isArray(value)) {
    for (const item of value) collectTypes(item, found);
    return found;
  }
  if (value && typeof value === "object") {
    for (const [key, nested] of Object.entries(value as Record<string, unknown>)) {
      if (key === "@type" && typeof nested === "string") found.add(nested);
      else collectTypes(nested, found);
    }
  }
  return found;
};

const listItems = (schema: Record<string, unknown> | undefined): Record<string, unknown>[] =>
  (schema?.itemListElement ?? []) as Record<string, unknown>[];

const names = (crumbs: BreadcrumbCrumb[]) => crumbs.map((crumb) => crumb.name);
const paths = (crumbs: BreadcrumbCrumb[]) => crumbs.map((crumb) => crumb.path);

describe("buildWebSiteSchema", () => {
  it("describes the site and nothing else", () => {
    const schema = buildWebSiteSchema(ORIGIN);
    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("WebSite");
    expect(schema.name).toBe("MedMosa");
    expect(schema.url).toBe("https://medmosa.org/");
  });

  it("claims no search endpoint, because the search page ignores the query string", () => {
    const schema = buildWebSiteSchema(ORIGIN);
    expect(schema.potentialAction).toBeUndefined();
    expect(Object.keys(schema).sort()).toEqual(["@context", "@type", "name", "url"]);
  });

  it("keeps the homepage URL well formed whatever shape the origin arrives in", () => {
    expect(buildWebSiteSchema("https://medmosa.org/").url).toBe("https://medmosa.org/");
    // A project page deploys under a base path, and the schema has to follow it.
    expect(buildWebSiteSchema("https://example.github.io/medmosa").url).toBe("https://example.github.io/medmosa/");
  });
});

describe("buildBreadcrumbSchema", () => {
  it("emits nothing below two crumbs", () => {
    expect(buildBreadcrumbSchema(ORIGIN, [])).toBeUndefined();
    expect(buildBreadcrumbSchema(ORIGIN, [{ name: "Home", path: "/" }])).toBeUndefined();
    expect(buildBreadcrumbSchema(ORIGIN, crumbsForPath("/"))).toBeUndefined();
  });

  it("emits a BreadcrumbList once there is a real trail", () => {
    const schema = buildBreadcrumbSchema(ORIGIN, crumbsForPath("/paths/mcat-foundations"));
    expect(schema).toBeDefined();
    expect(schema?.["@context"]).toBe("https://schema.org");
    expect(schema?.["@type"]).toBe("BreadcrumbList");
    expect(listItems(schema)).toHaveLength(3);
  });

  it("numbers positions from one, contiguously", () => {
    const schema = buildBreadcrumbSchema(ORIGIN, crumbsForPath("/learn/biology-1/cell-structure/plasma-membrane"));
    const items = listItems(schema);
    expect(items).toHaveLength(5);
    expect(items.map((item) => item.position)).toEqual([1, 2, 3, 4, 5]);
    for (const item of items) expect(item["@type"]).toBe("ListItem");
  });

  it("gives every item an absolute URL", () => {
    const schema = buildBreadcrumbSchema(ORIGIN, crumbsForPath("/learn/biology-1/cell-structure"));
    expect(listItems(schema).map((item) => item.item)).toEqual([
      "https://medmosa.org/",
      "https://medmosa.org/learn",
      "https://medmosa.org/learn/biology-1",
      "https://medmosa.org/learn/biology-1/cell-structure",
    ]);
  });

  it("does not double the slash when the origin already ends in one", () => {
    const schema = buildBreadcrumbSchema("https://medmosa.org/", crumbsForPath("/coverage"));
    expect(listItems(schema).map((item) => item.item)).toEqual([
      "https://medmosa.org/",
      "https://medmosa.org/coverage",
    ]);
  });

  it("carries the crumb names through unchanged", () => {
    const crumbs: BreadcrumbCrumb[] = [
      { name: "Home", path: "/" },
      { name: "All courses", path: "/learn" },
      { name: "Anatomy & Physiology 1", path: "/learn/anatomy-physiology-1" },
    ];
    expect(listItems(buildBreadcrumbSchema(ORIGIN, crumbs)).map((item) => item.name)).toEqual([
      "Home",
      "All courses",
      "Anatomy & Physiology 1",
    ]);
  });
});

describe("crumbsForPath", () => {
  it("gives the site root a single Home crumb, which is not a trail", () => {
    expect(crumbsForPath("/")).toEqual([{ name: "Home", path: "/" }]);
    expect(crumbsForPath("")).toEqual([{ name: "Home", path: "/" }]);
    expect(buildBreadcrumbSchema(ORIGIN, crumbsForPath("/"))).toBeUndefined();
  });

  it("walks a course path", () => {
    const crumbs = crumbsForPath("/learn/general-chemistry-1");
    expect(names(crumbs)).toEqual(["Home", "Learn", "General Chemistry 1"]);
    expect(paths(crumbs)).toEqual(["/", "/learn", "/learn/general-chemistry-1"]);
  });

  it("walks a topic path down to the topic", () => {
    const crumbs = crumbsForPath("/learn/anatomy-physiology-1/tissue-level/epithelial-tissue");
    expect(names(crumbs)).toEqual(["Home", "Learn", "Anatomy Physiology 1", "Tissue Level", "Epithelial Tissue"]);
    expect(paths(crumbs)).toEqual([
      "/",
      "/learn",
      "/learn/anatomy-physiology-1",
      "/learn/anatomy-physiology-1/tissue-level",
      "/learn/anatomy-physiology-1/tissue-level/epithelial-tissue",
    ]);
  });

  it("walks a study path", () => {
    const crumbs = crumbsForPath("/paths/pre-health-foundations");
    expect(names(crumbs)).toEqual(["Home", "Paths", "Pre Health Foundations"]);
    expect(paths(crumbs)).toEqual(["/", "/paths", "/paths/pre-health-foundations"]);
  });

  it("walks the classic library", () => {
    const crumbs = crumbsForPath("/subjects/biology/notes/cell-theory");
    expect(names(crumbs)).toEqual(["Home", "Subjects", "Biology", "Notes", "Cell Theory"]);
  });

  it("prefers a resolved title and falls back to the slug", () => {
    const crumbs = crumbsForPath("/learn/biology-1/cell-structure", (segment, index) => {
      if (index === 0) return "All courses";
      if (segment === "biology-1") return "Biology 1: Molecules to Cells";
      return undefined;
    });
    expect(names(crumbs)).toEqual(["Home", "All courses", "Biology 1: Molecules to Cells", "Cell Structure"]);
  });

  it("ignores a resolver that returns nothing at all", () => {
    expect(names(crumbsForPath("/coverage", () => undefined))).toEqual(["Home", "Coverage"]);
  });

  it("refuses a trail for routes that describe no real place", () => {
    for (const path of ["/404", "/error", "/prototype/workspace", "/auth/callback"]) {
      expect(crumbsForPath(path)).toEqual([{ name: "Home", path: "/" }]);
      expect(buildBreadcrumbSchema(ORIGIN, crumbsForPath(path))).toBeUndefined();
    }
  });

  it("drops a query string or fragment before building the trail", () => {
    expect(paths(crumbsForPath("/search?q=mitosis"))).toEqual(["/", "/search"]);
    expect(paths(crumbsForPath("/coverage#totals"))).toEqual(["/", "/coverage"]);
  });
});

describe("the schema types this module is allowed to produce", () => {
  it("never produces a type outside the allowed set", () => {
    const routes = [
      "/",
      "/learn",
      "/learn/biology-1",
      "/learn/biology-1/cell-structure",
      "/learn/biology-1/cell-structure/plasma-membrane",
      "/learn/biology-1/practice",
      "/paths",
      "/paths/mcat-foundations",
      "/subjects/biology",
      "/subjects/biology/questions/cell-theory",
      "/coverage",
      "/review",
      "/terms",
      "/privacy",
      "/licensing",
      "/accessibility",
      "/404",
    ];
    const produced = new Set<string>();
    for (const route of routes) {
      collectTypes(buildWebSiteSchema(ORIGIN), produced);
      collectTypes(buildBreadcrumbSchema(ORIGIN, crumbsForPath(route)), produced);
    }
    expect([...produced].sort()).toEqual(["BreadcrumbList", "ListItem", "WebSite"]);
    for (const type of produced) expect(ALLOWED_TYPES).toContain(type);
  });

  it("produces none of the types this project cannot back", () => {
    const produced = collectTypes([
      buildWebSiteSchema(ORIGIN),
      buildBreadcrumbSchema(ORIGIN, crumbsForPath("/learn/biology-1/cell-structure/plasma-membrane")),
    ]);
    for (const refused of [
      "Course",
      "CourseInstance",
      "Quiz",
      "Question",
      "EducationalOccupationalCredential",
      "LearningResource",
      "MedicalEntity",
      "MedicalWebPage",
      "Review",
      "AggregateRating",
    ]) {
      expect(produced.has(refused)).toBe(false);
    }
  });

  it("serialises to JSON without losing anything", () => {
    const schema = buildBreadcrumbSchema(ORIGIN, crumbsForPath("/paths/allied-health"));
    expect(JSON.parse(JSON.stringify(schema))).toEqual(schema);
  });
});

describe("applyStructuredData", () => {
  it("is safe where there is no document to write into", () => {
    expect(() => applyStructuredData([
      buildWebSiteSchema(ORIGIN),
      buildBreadcrumbSchema(ORIGIN, crumbsForPath("/learn/biology-1")),
    ])).not.toThrow();
  });

  it("tolerates an empty list and undefined entries", () => {
    expect(() => applyStructuredData([])).not.toThrow();
    expect(() => applyStructuredData([undefined, buildBreadcrumbSchema(ORIGIN, crumbsForPath("/"))])).not.toThrow();
  });
});
