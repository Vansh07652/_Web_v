// Single source of truth for the site's static route list, shared by the
// GitHub Pages route-entry-point generator and the sitemap generator.
import fs from "node:fs";
import path from "node:path";

export const SITE_ORIGIN = "https://medmosa.org";

/**
 * Study-path slugs, mirrored from `STUDY_PATHS` in
 * `src/lib/paths/study-paths.ts`. The page list lives in TypeScript because it
 * derives each path's courses from the catalog at load, and this generator is
 * plain ESM that cannot import it. `scripts/validate-study-paths.mjs` fails the
 * build if the two lists ever drift apart, so this stays a mirror rather than a
 * second source of truth.
 */
export const STUDY_PATH_SLUGS = [
  "anatomy-and-physiology",
  "chemistry-foundations",
  "behavioral-and-developmental-sciences",
  "nursing-foundations",
  "clinical-reasoning",
  "exam-preparation",
  "pre-health-foundations",
  "healthcare-foundations",
  "allied-health",
];

export function collectRoutes(websiteDir) {
  const read = (relativePath) => JSON.parse(fs.readFileSync(path.join(websiteDir, relativePath), "utf8"));

  const subjects = read("data/subjects.json");
  const lessons = read("data/lessons.json");
  const notes = read("data/notes.json");
  const questions = read("data/questions.json");
  const curriculumCatalog = read("content-v2/catalog.json");
  const bookLibrary = read("book-library/manifest.json");

  const routes = new Set([
    "subjects", "notes", "questions", "search", "resources", "downloads", "about", "404", "error", "auth/callback", "books",
    "coverage", "review", "paths", "terms", "privacy", "licensing", "accessibility",
    "dashboard", "diagnostic", "content-review", "editorial-policy", "source-citation-policy",
    "medical-disclaimer", "contact", "report-error", "changelog",
  ]);
  for (const slug of STUDY_PATH_SLUGS) routes.add(`paths/${slug}`);

  for (const subject of subjects) {
    routes.add(`subjects/${subject.slug}`);
    routes.add(`subjects/${subject.slug}/lessons`);
    routes.add(`subjects/${subject.slug}/notes`);
    routes.add(`subjects/${subject.slug}/questions`);
  }
  for (const lesson of lessons) {
    routes.add(`subjects/${lesson.subject}/lessons/${lesson.slug}`);
    if (notes.some((note) => note.subject === lesson.subject && note.lesson === lesson.slug)) {
      routes.add(`subjects/${lesson.subject}/notes/${lesson.slug}`);
    }
    if (questions.some((question) => question.subject === lesson.subject && question.lesson === lesson.slug)) {
      routes.add(`subjects/${lesson.subject}/questions/${lesson.slug}`);
    }
  }

  routes.add("learn");
  for (const curriculumSubject of curriculumCatalog.subjects) {
    const subject = read(path.join("content-v2/subjects", curriculumSubject.slug, "subject.json"));
    routes.add(`learn/${subject.subject.slug}`);
    routes.add(`learn/${subject.subject.slug}/practice`);
    for (const unit of subject.units) {
      routes.add(`learn/${subject.subject.slug}/${unit.slug}`);
      for (const topic of unit.topics) routes.add(`learn/${subject.subject.slug}/${unit.slug}/${topic.slug}`);
    }
  }
  for (const book of bookLibrary.books.filter((item) => item.status === "published")) {
    routes.add(`books/${book.slug}`);
    for (const chapter of book.chapters) for (const topic of chapter.topics) routes.add(`books/${book.slug}/${chapter.slug}/${topic.slug}`);
  }

  return [...routes];
}
