#!/usr/bin/env node
/**
 * Builds the public, static Full_Books library from the vendored source tree.
 *
 * `book-library/manifest.json` is the canonical public-content manifest. It is
 * deliberately generated from the source manifests so a change in the source
 * tree cannot silently alter topic ordering or displayed totals.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(webRoot, "library-source", "full-books");
const outputRoot = path.join(webRoot, "book-library");
const manifestRoot = path.join(sourceRoot, "manifests");

const books = [
  ["nursing", "clinical-nursing-skills", "clinical-skills", "Clinical Skills", "published"],
  ["nursing", "fundamentals-of-nursing", "fundamentals", "Fundamentals of Nursing", "published"],
  ["nursing", "maternal-newborn-nursing", "maternal-newborn", "Maternal-Newborn Nursing", "published"],
  ["nursing", "medical-surgical-nursing", "med-surg", "Medical-Surgical Nursing", "published"],
  ["nursing", "nutrition-for-nurses", "nutrition", "Nutrition for Nurses", "published"],
  ["nursing", "pharmacology-for-nurses", "pharmacology", "Pharmacology for Nurses", "published"],
  ["nursing", "population-health-for-nurses", "population-health", "Population Health for Nurses", "published"],
  ["nursing", "psychiatric-mental-health-nursing", "psych-mental-health", "Psychiatric-Mental Health Nursing", "published"],
  ["science", "anatomy-and-physiology-2e", "anatomy", "Anatomy and Physiology 2e", "published"],
  ["science", "astronomy-2e", "astronomy", "Astronomy 2e", "published"],
  ["science", "biology-for-ap-courses", "biology-for-ap", "Biology for AP Courses", "published"],
  ["science", "concepts-of-biology", "concepts-of-biology", "Concepts of Biology", "published"],
  ["science", "chemistry-2e", "chemistry-2e", "Chemistry 2e", "published"],
  ["science", "chemistry-atoms-first-2e", "chemistry-atoms-first", "Chemistry: Atoms First 2e", "published"],
  ["science", "organic-chemistry-a-tenth-edition", "organic-chemistry", "Organic Chemistry", "published"],
  ["science", "introduction-to-behavioral-neuroscience", "introduction-to-behavioral-neuroscience", "Introduction to Behavioral Neuroscience", "in_progress"],
  ["science", "biology-2e", "biology-2e", "Biology 2e", "excluded"],
  ["science", "microbiology", "microbiology", "Microbiology", "excluded"],
  ["science", "college-physics-2e", "college-physics-2e", "College Physics 2e", "excluded"],
  ["science", "college-physics-for-ap-courses-2e", "college-physics-for-ap-courses", "College Physics for AP Courses 2e", "excluded"],
  ["science", "physics", "physics", "Physics", "excluded"],
  ["science", "university-physics-volume-1", "university-physics-volume-1", "University Physics Volume 1", "excluded"],
  ["science", "university-physics-volume-2", "university-physics-volume-2", "University Physics Volume 2", "excluded"],
  ["science", "university-physics-volume-3", "university-physics-volume-3", "University Physics Volume 3", "excluded"],
];

const readJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const writeJson = (file, value) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
};
const clean = (value = "") => String(value).replace(/\r\n/g, "\n").trim();
const titleFromSlug = (slug) => slug.replace(/^\d+-/, "").replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
const parseFrontMatter = (markdown) => {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n?/);
  const fields = Object.fromEntries((match?.[1] ?? "").split("\n").flatMap((line) => {
    const item = line.match(/^([\w_]+):\s*["']?(.*?)["']?\s*$/);
    return item ? [[item[1], item[2]]] : [];
  }));
  return { fields, body: clean(markdown.slice(match?.[0].length ?? 0)) };
};
const markdownHeading = (file, fallback) => {
  if (!fs.existsSync(file)) return fallback;
  const heading = fs.readFileSync(file, "utf8").match(/^#\s+(.+)\s*$/m)?.[1]?.trim();
  return heading || fallback;
};

const records = [];
const routeForSource = new Map();
for (const [area, sourceBook, slug, title, status] of books) {
  const sourceManifest = readJson(path.join(manifestRoot, `${area}--${sourceBook}.json`));
  const bookRoot = path.join(sourceRoot, sourceManifest.book_dir);
  const chapters = sourceManifest.chapters.map((chapter, chapterIndex) => ({
    slug: chapter.chapter,
    title: markdownHeading(path.join(bookRoot, chapter.chapter, "README.md"), titleFromSlug(chapter.chapter)),
    order: chapterIndex + 1,
    topics: chapter.topics.map((file, topicIndex) => {
      const sourceFile = path.join(bookRoot, chapter.chapter, file);
      const { fields } = parseFrontMatter(fs.readFileSync(sourceFile, "utf8"));
      const topicSlug = file.replace(/\.md$/, "");
      const route = `/books/${slug}/${chapter.chapter}/${topicSlug}`;
      routeForSource.set(path.normalize(sourceFile), route);
      return { slug: topicSlug, title: fields.title || titleFromSlug(topicSlug), order: topicIndex + 1, sourceFile };
    }),
  }));
  records.push({ area, sourceBook, slug, title, status, sourceManifest, bookRoot, chapters });
}

const toPublicMarkdown = (markdown, sourceFile, fallbackBookHref) => {
  const { body } = parseFrontMatter(markdown);
  return body.replace(/^#\s+.+\n+/, "").replace(/\]\(([^)]+)\)/g, (whole, href) => {
    if (/^(https?:|mailto:|#)/i.test(href)) return whole;
    const target = path.normalize(path.resolve(path.dirname(sourceFile), href.split("#")[0]));
    const route = routeForSource.get(target);
    return route ? `](${route})` : /\.md$/i.test(href.split("#")[0]) ? `](${fallbackBookHref})` : whole;
  });
};

const publicBooks = records.filter((book) => book.status === "published");
const manifest = {
  schemaVersion: "1.0.0",
  source: {
    repository: "https://github.com/vanshassistant-ux/Full_Books",
    vendoredPath: "library-source/full-books",
    generatedBy: "scripts/build-full-books-library.mjs",
  },
  statuses: ["published", "in_progress", "excluded"],
  books: records.map((book, index) => ({
    slug: book.slug,
    title: book.title,
    subjectArea: book.area === "nursing" ? "Nursing" : "Science",
    order: index + 1,
    status: book.status,
    topicCount: book.sourceManifest.topic_count,
    source: { repositoryPath: book.sourceManifest.book_dir, provenance: "Original educational study guides based on the documented source outline.", license: null },
    chapters: book.chapters.map(({ slug, title, order, topics }) => ({ slug, title, order, topics: topics.map(({ slug: topicSlug, title: topicTitle, order: topicOrder }) => ({ slug: topicSlug, title: topicTitle, order: topicOrder })) })),
  })),
};
writeJson(path.join(outputRoot, "manifest.json"), manifest);

for (const book of records) {
  const bookOutput = { ...manifest.books.find((item) => item.slug === book.slug) };
  writeJson(path.join(outputRoot, "books", `${book.slug}.json`), bookOutput);
  if (book.status === "excluded") continue;
  for (const chapter of book.chapters) {
    for (const topic of chapter.topics) {
      const source = fs.readFileSync(topic.sourceFile, "utf8");
      const { fields } = parseFrontMatter(source);
      const markdown = toPublicMarkdown(source, topic.sourceFile, `/books/${book.slug}`);
      const sourceUrl = markdown.match(/Official source URL:\s*(https?:\/\/\S+)/i)?.[1] ?? null;
      writeJson(path.join(outputRoot, "topics", book.slug, chapter.slug, `${topic.slug}.json`), {
        id: `book:${book.slug}:${chapter.slug}:${topic.slug}`,
        slug: topic.slug,
        title: topic.title,
        book: { slug: book.slug, title: book.title, subjectArea: book.area === "nursing" ? "Nursing" : "Science", status: book.status },
        chapter: { slug: chapter.slug, title: chapter.title, order: chapter.order },
        order: topic.order,
        aliases: [topic.slug, ...(fields.tags ? [fields.tags] : [])].filter(Boolean),
        markdown,
        provenance: { sourceFile: path.relative(webRoot, topic.sourceFile), sourceUrl, license: null },
      });
    }
  }
}

const totals = {
  declaredBooks: records.length,
  publishedBooks: publicBooks.length,
  inProgressBooks: records.filter((book) => book.status === "in_progress").length,
  excludedBooks: records.filter((book) => book.status === "excluded").length,
  publishedTopics: publicBooks.reduce((sum, book) => sum + book.sourceManifest.topic_count, 0),
  inProgressTopics: records.filter((book) => book.status === "in_progress").reduce((sum, book) => sum + book.sourceManifest.topic_count, 0),
};
writeJson(path.join(outputRoot, "build-report.json"), { ...totals, valid: true });
console.log(`Built Full_Books library: ${totals.publishedBooks} published books / ${totals.publishedTopics} topics; ${totals.inProgressBooks} in progress; ${totals.excludedBooks} excluded.`);
