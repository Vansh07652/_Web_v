import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { collectRoutes, SITE_ORIGIN } from "./site-routes.mjs";

const websiteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(websiteDir, "dist/index.html");
const fallbackPath = path.join(websiteDir, "dist/404.html");
if (!fs.existsSync(indexPath)) throw new Error("Build output index.html is missing");
fs.copyFileSync(indexPath, fallbackPath);
console.log("Created dist/404.html SPA fallback for static hosts.");

const titleCase = (slug) => slug.split("-").filter(Boolean).map((word) => `${word[0]?.toUpperCase() ?? ""}${word.slice(1)}`).join(" ");
const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(websiteDir, relativePath), "utf8"));

const PAGE_METADATA = {
  subjects: ["Classic library", "The original subject-by-subject library of approved lessons, notes and practice questions."],
  notes: ["Notes", "Read approved study notes, organised by subject and lesson."],
  questions: ["Practice", "Practise thousands of questions with worked answer explanations and plain-language rationales."],
  search: ["Search", "Search every topic, note and practice question. Search runs locally in your browser."],
  resources: ["Learning resources", "Optional educational lookups from trusted public sources, with original-source links and clear attribution."],
  downloads: ["Downloads", "Downloadable study files, when they are available."],
  about: ["How this works", "How MedMosa organises its material, what is reviewed, and how to study with it."],
  coverage: ["Content coverage", "What each MedMosa course contains today, course by course."],
  review: ["Review", "Revisit missed questions and topics you are still practising, stored locally on this device."],
  paths: ["Study paths", "Grouped course routes through the curriculum, with honest coverage figures and a study plan you can build locally."],
  dashboard: ["Your study dashboard", "Your streak, study minutes and per-course progress, stored in this browser."],
  diagnostic: ["Find your starting point", "Answer five short questions and get a suggested study path. Nothing is sent anywhere."],
  accessibility: ["Accessibility statement", "MedMosa's accessibility target, what is implemented today, and known limitations."],
  privacy: ["Privacy policy", "What MedMosa stores, where it is stored, and why nothing leaves your device."],
  terms: ["Terms of use", "The terms that apply to MedMosa, including the educational-use scope and medical disclaimer."],
  licensing: ["Content licensing and attribution", "Where MedMosa material comes from, how it is licensed and attributed."],
  "content-review": ["Content review process", "How MedMosa material is imported, checked, labelled, and reviewed."],
  "editorial-policy": ["Editorial policy", "How MedMosa decides what to publish and how it describes coverage."],
  "source-citation-policy": ["Source and citation policy", "Which sources MedMosa draws on and how they are recorded."],
  "medical-disclaimer": ["Medical disclaimer", "MedMosa is educational material, not medical advice."],
  contact: ["Contact", "How to contact MedMosa about corrections, rights, privacy, or accessibility."],
  "report-error": ["Report an error", "How to report a mistake in MedMosa study material."],
  changelog: ["Changelog", "A dated record of what has changed on MedMosa."],
  error: ["Error", "Something went wrong loading this page."],
  "auth/callback": ["Signing in", "Completing your MedMosa sign-in."],
};

function routeMetadata(route) {
  const segments = route.split("/");
  if (PAGE_METADATA[route]) return { title: PAGE_METADATA[route][0], description: PAGE_METADATA[route][1] };
  if (route === "books") return { title: "Books", description: "Open educational nursing and science books, organised into searchable topics." };
  if (route === "learn") return { title: "Learn", description: "Free learning tools, practice resources, and clear explanations for aspiring healthcare professionals." };

  if (segments[0] === "learn") {
    const catalog = readJson("content-v2/catalog.json");
    const subject = catalog.subjects.find((item) => item.slug === segments[1]);
    if (!subject) return { title: "Page not found", description: "This page is not part of the curriculum." };
    if (segments[2] === "practice") return { title: `Practice · ${subject.title}`, description: `Practise ${subject.statistics.uniqueQuestionCount} ${subject.title} questions with full answer rationales.` };
    if (!segments[2]) return { title: subject.title, description: `${subject.title}: ${subject.statistics.topicCount} topics and ${subject.statistics.uniqueQuestionCount} practice questions, in study order.` };
    const detail = readJson(`content-v2/subjects/${subject.slug}/subject.json`);
    const unit = detail.units.find((item) => item.slug === segments[2]);
    const topic = unit?.topics.find((item) => item.slug === segments[3]);
    if (segments[3] && topic) return { title: topic.title, description: `${topic.title} — college-level notes, a plain-language explanation, and practice questions.` };
    if (unit) return { title: unit.title, description: `${unit.title} — ${unit.topics.length} topics in ${subject.title}.` };
    return { title: "Page not found", description: "This page is not part of the curriculum." };
  }

  if (segments[0] === "books") {
    const manifest = readJson("book-library/manifest.json");
    const book = manifest.books.find((item) => item.slug === segments[1] && item.status === "published");
    if (!book) return { title: "Page not found", description: "This book is not part of the public library." };
    const chapter = book.chapters.find((item) => item.slug === segments[2]);
    const topic = chapter?.topics.find((item) => item.slug === segments[3]);
    if (segments[3] && topic) return { title: topic.title, description: `${topic.title} — a source-grounded topic from ${book.title}.` };
    return { title: book.title, description: `${book.topicCount} topics from this ${book.subjectArea.toLowerCase()} book.` };
  }

  if (segments[0] === "subjects") {
    const subject = readJson("data/subjects.json").find((item) => item.slug === segments[1]);
    if (!subject) return { title: "Page not found", description: "This page is not part of the library." };
    if (!segments[2]) return { title: subject.name, description: `${subject.name} lessons, notes, and practice questions.` };
    const lesson = segments[3] && readJson("data/lessons.json").find((item) => item.subject === subject.slug && item.slug === segments[3]);
    if (lesson) return { title: lesson.title, description: `${lesson.title} — ${subject.name} lesson ${lesson.lessonNumber}.` };
    return { title: `${titleCase(segments[2])} · ${subject.name}`, description: `${titleCase(segments[2])} for ${subject.name}.` };
  }

  if (segments[0] === "paths" && segments[1]) return { title: titleCase(segments[1]), description: "A guided MedMosa study path for pre-health learners." };
  return { title: "Page not found", description: "This page could not be found." };
}

if (process.argv.includes("--routes")) {
  const template = fs.readFileSync(indexPath, "utf8");
  const routes = collectRoutes(websiteDir);

  // Each route entry point is a copy of index.html. Rewrite canonical and all
  // crawler-facing metadata, because many social/SEO crawlers do not run the
  // client-side metadata effect after loading the document.
  const withRouteMetadata = (route) => {
    const url = `${SITE_ORIGIN}/${route}`;
    const metadata = routeMetadata(route);
    const title = `${metadata.title} | MedMosa`;
    const description = escapeHtml(metadata.description);
    return template
      .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`)
      .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`)
      .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
      .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
      .replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, `<meta property="og:description" content="${description}" />`)
      .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
      .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeHtml(title)}" />`)
      .replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${description}" />`);
  };

  for (const route of routes) {
    const routeDirectory = path.join(websiteDir, "dist", ...route.split("/"));
    fs.mkdirSync(routeDirectory, { recursive: true });
    fs.writeFileSync(path.join(routeDirectory, "index.html"), withRouteMetadata(route));
  }
  console.log(`Created ${routes.length} GitHub Pages route entry points with per-route metadata.`);
}
