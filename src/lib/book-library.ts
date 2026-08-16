import manifestJson from "../../book-library/manifest.json";

export type BookTopic = { slug: string; title: string; order: number };
export type BookChapter = { slug: string; title: string; order: number; topics: BookTopic[] };
export type LibraryBook = {
  slug: string; title: string; subjectArea: "Nursing" | "Science"; order: number;
  status: "published" | "in_progress" | "excluded"; topicCount: number;
  source: { repositoryPath: string; provenance: string; license: string | null };
  chapters: BookChapter[];
};
export type LibraryTopic = {
  id: string; slug: string; title: string; order: number;
  book: Pick<LibraryBook, "slug" | "title" | "subjectArea" | "status">;
  chapter: Pick<BookChapter, "slug" | "title" | "order">;
  aliases: string[]; markdown: string;
  provenance: { sourceFile: string; sourceUrl: string | null; license: string | null };
};

const manifest = manifestJson as { books: LibraryBook[] };
const topicModules = import.meta.glob("../../book-library/topics/*/*/*.json", { import: "default" }) as Record<string, () => Promise<LibraryTopic>>;

export const libraryBooks = () => manifest.books.filter((book) => book.status === "published");
export const libraryBook = (slug: string) => libraryBooks().find((book) => book.slug === slug);
export const bookTopicSummary = (bookSlug: string, chapterSlug: string, topicSlug: string) => {
  const book = libraryBook(bookSlug);
  const chapter = book?.chapters.find((item) => item.slug === chapterSlug);
  const topic = chapter?.topics.find((item) => item.slug === topicSlug);
  return book && chapter && topic ? { book, chapter, topic } : undefined;
};
export const libraryTotals = () => {
  const books = libraryBooks();
  return { books: books.length, topics: books.reduce((total, book) => total + book.topicCount, 0) };
};
export const bookHref = (book: string) => `/books/${book}`;
export const bookTopicHref = (book: string, chapter: string, topic: string) => `${bookHref(book)}/${chapter}/${topic}`;
export const loadBookTopic = (book: string, chapter: string, topic: string) =>
  topicModules[`../../book-library/topics/${book}/${chapter}/${topic}.json`]?.();
export const bookSearchIndex = () => libraryBooks().flatMap((book) => book.chapters.flatMap((chapter) => chapter.topics.map((topic) => ({
  id: `book:${book.slug}:${chapter.slug}:${topic.slug}`, title: topic.title, aliases: [topic.slug],
  book, chapter, href: bookTopicHref(book.slug, chapter.slug, topic.slug),
}))));
