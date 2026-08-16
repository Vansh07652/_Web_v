#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const library = path.join(root, "book-library");
const manifest = JSON.parse(fs.readFileSync(path.join(library, "manifest.json"), "utf8"));
const fail = (message) => { console.error(`FULL_BOOKS_INVALID: ${message}`); process.exitCode = 1; };
const seenRoutes = new Set();
const publicRoutes = new Set();
const availableRoutes = new Set();
let discoveredPublished = 0;
let discoveredInProgress = 0;
for (const book of manifest.books.filter((item) => item.status === "published")) {
  publicRoutes.add(`/books/${book.slug}`);
  for (const chapter of book.chapters ?? []) for (const topic of chapter.topics ?? []) publicRoutes.add(`/books/${book.slug}/${chapter.slug}/${topic.slug}`);
}
for (const book of manifest.books.filter((item) => item.status !== "excluded")) {
  availableRoutes.add(`/books/${book.slug}`);
  for (const chapter of book.chapters ?? []) for (const topic of chapter.topics ?? []) availableRoutes.add(`/books/${book.slug}/${chapter.slug}/${topic.slug}`);
}
for (const book of manifest.books) {
  if (!book.slug || !book.title || !book.status || !book.source?.provenance) fail(`book ${book.slug || "<missing>"} is missing required metadata`);
  let discovered = 0;
  for (const chapter of book.chapters ?? []) for (const topic of chapter.topics ?? []) {
    const route = `/books/${book.slug}/${chapter.slug}/${topic.slug}`;
    if (seenRoutes.has(route)) fail(`duplicate route ${route}`);
    seenRoutes.add(route);
    const bundle = path.join(library, "topics", book.slug, chapter.slug, `${topic.slug}.json`);
    if (book.status === "excluded") {
      if (fs.existsSync(bundle)) fail(`excluded book ${book.slug} has public bundle ${route}`);
      continue;
    }
    if (!fs.existsSync(bundle)) { fail(`missing topic bundle ${route}`); continue; }
    const content = JSON.parse(fs.readFileSync(bundle, "utf8"));
    if (!content.title || !content.provenance?.sourceFile || !content.book?.status) fail(`topic ${route} has missing title, source, or status`);
    if (/\]\((?:\.\.\/|\.\/|\/)[^)]+\.md\)/.test(content.markdown)) fail(`topic ${route} retains an unresolved internal Markdown link`);
    for (const linkedRoute of content.markdown.matchAll(/\]\((\/books\/[^)#]+)(?:#[^)]+)?\)/g)) {
      if (!availableRoutes.has(linkedRoute[1])) fail(`topic ${route} links to a missing book/topic route ${linkedRoute[1]}`);
      if (book.status === "published" && !publicRoutes.has(linkedRoute[1])) fail(`published topic ${route} links to non-public route ${linkedRoute[1]}`);
    }
    discovered += 1;
  }
  if (book.status !== "excluded" && discovered !== book.topicCount) fail(`${book.slug} declares ${book.topicCount} topics but has ${discovered}`);
  if (book.status === "published") discoveredPublished += discovered;
  if (book.status === "in_progress") discoveredInProgress += discovered;
}
const publishedBooks = manifest.books.filter((book) => book.status === "published").length;
const excluded = manifest.books.filter((book) => book.status === "excluded").length;
if (publishedBooks !== 15 || discoveredPublished !== 2183) fail(`expected 15 published books / 2183 topics, found ${publishedBooks} / ${discoveredPublished}`);
if (discoveredInProgress !== 85) fail(`expected 85 in-progress behavioral-neuroscience topics, found ${discoveredInProgress}`);
console.log(`Full_Books validation passed: ${publishedBooks} published books, ${discoveredPublished} published topics, ${excluded} excluded books, ${discoveredInProgress} in-progress topics.`);
