import tagsJson from "../../../data/tags.json";
import contentIndexJson from "../../../data/content-index.json";
import searchIndexJson from "../../../data/search-index.json";
import questionsJson from "../../../data/questions.json";
import subjectsJson from "../../../data/subjects.json";
import lessonsJson from "../../../data/lessons.json";
import type { ContentIndexItem, Lesson, Question, SearchFilters, SearchResult, Subject, Tag } from "../../types";

interface SearchIndexRecord {
  id: string;
  subject: string;
  contentType: "note" | "question" | "flashcard";
  title: string;
  text: string;
  filePath: string;
  tags: string[];
}

const tags = tagsJson as Tag[];
const contentIndex = contentIndexJson as ContentIndexItem[];
const searchIndex = searchIndexJson as SearchIndexRecord[];
const questions = questionsJson as Question[];
const subjects = subjectsJson as Subject[];
const lessons = lessonsJson as Lesson[];
const contentByKey = new Map(contentIndex.map((item) => [`${item.contentType}:${item.id}`, item]));
const questionById = new Map(questions.map((item) => [item.id, item]));
const normalized = (value: string): string => value.toLocaleLowerCase().trim();
const queryTokens = (value: string): string[] => normalized(value).split(/[^\p{L}\p{N}]+/u).filter(Boolean);

export const loadTags = (): readonly Tag[] => tags;
export const loadContentIndex = (): readonly ContentIndexItem[] => contentIndex;

export const searchContent = (filters: SearchFilters = {}): SearchResult[] => {
  const tokens = queryTokens(filters.query ?? "");
  return searchIndex.map((record): SearchResult | undefined => {
    const indexed = contentByKey.get(`${record.contentType}:${record.id}`);
    const question = record.contentType === "question" ? questionById.get(record.id) : undefined;
    const lesson = indexed?.lesson ?? question?.lesson;
    const subjectName = subjects.find((item) => item.slug === record.subject)?.name;
    const lessonTitle = lessons.find((item) => item.subject === record.subject && item.slug === lesson)?.title;
    const searchable = normalized([record.title, record.text, record.subject, subjectName, lesson, lessonTitle, ...record.tags].filter(Boolean).join(" "));
    if (tokens.some((token) => !searchable.includes(token))) return undefined;
    if (filters.subject && filters.subject !== record.subject) return undefined;
    if (filters.contentType && filters.contentType !== "all" && filters.contentType !== record.contentType) return undefined;
    if (filters.lesson && filters.lesson !== lesson) return undefined;
    if (filters.difficulty && filters.difficulty !== "all" && filters.difficulty !== question?.difficulty) return undefined;
    if (filters.tag && filters.tag !== "all" && !record.tags.some((tag) => normalized(tag) === normalized(filters.tag!))) return undefined;
    return {
      id: record.id,
      title: record.title,
      excerpt: record.text.length > 180 ? `${record.text.slice(0, 177)}…` : record.text,
      subject: record.subject,
      contentType: record.contentType,
      lesson,
      difficulty: question?.difficulty,
      tags: record.tags,
      href: record.contentType === "note" ? `/subjects/${record.subject}/notes/${lesson ?? ""}` : `/subjects/${record.subject}/questions/${lesson ?? ""}`,
    };
  }).filter((result): result is SearchResult => Boolean(result));
};
