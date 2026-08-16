import subjectsJson from "../../../data/subjects.json";
import lessonsJson from "../../../data/lessons.json";
import notesJson from "../../../data/notes.json";
import type {
  Lesson,
  Note,
  Subject,
  ValidationResult,
} from "../../types";

const subjects = subjectsJson as Subject[];
const lessons = lessonsJson as Lesson[];
const notes = notesJson as Note[];

const noteModules = import.meta.glob(
  "../../../content/*/notes/*.md",
  { query: "?raw", import: "default" },
) as Record<string, () => Promise<string>>;

const noteModuleByPath = new Map<string, () => Promise<string>>();
for (const [modulePath, load] of Object.entries(noteModules)) {
  const contentPosition = modulePath.indexOf("content/");
  if (contentPosition >= 0) noteModuleByPath.set(modulePath.slice(contentPosition), load);
}

export const loadSubjects = (): readonly Subject[] => subjects;
export const loadLessons = (): readonly Lesson[] => lessons;
export const loadNotes = (): readonly Note[] => notes;

export const getSubjectBySlug = (slug: string): Subject | undefined =>
  subjects.find((subject) => subject.slug === slug && subject.status === "approved");

export const getLessonBySlug = (subjectSlug: string, lessonSlug: string): Lesson | undefined =>
  lessons.find((lesson) => lesson.subject === subjectSlug && lesson.slug === lessonSlug);

export const getLessonsBySubject = (subjectSlug: string): Lesson[] =>
  lessons
    .filter((lesson) => lesson.subject === subjectSlug)
    .sort((a, b) => a.lessonNumber - b.lessonNumber);

export const getNotesBySubject = (subjectSlug: string): Note[] =>
  notes.filter((note) => note.subject === subjectSlug);

export const getNoteByLesson = (subjectSlug: string, lessonSlug: string): Note | undefined =>
  notes.find((note) => note.subject === subjectSlug && note.lesson === lessonSlug);

/**
 * Derived rather than counted, so the 1.8 MB question file stays behind a
 * dynamic import instead of loading on first paint. `tests/unit/data-layer`
 * asserts this stays equal to the real per-subject counts.
 */
export const getApprovedQuestionCount = (subjectSlug: string): number => {
  const subject = getSubjectBySlug(subjectSlug);
  if (!subject) return 0;
  return Math.max(0, (subject.approvedContentCount ?? 0) - getNotesBySubject(subjectSlug).length);
};

export const getNoteSource = async (filePath: string): Promise<string | undefined> =>
  noteModuleByPath.get(filePath)?.();

export const loadQuestionData = async () => import("./questions");
export const loadSearchSupport = async () => import("./search");

export const stripFrontMatter = (source: string): string => {
  if (!source.startsWith("---")) return source;
  const end = source.indexOf("\n---", 3);
  return end >= 0 ? source.slice(end + 4).trim() : source;
};

export const validateContentSource = (): ValidationResult => {
  const issues: ValidationResult["issues"] = [];
  const subjectSlugs = new Set(subjects.map((subject) => subject.slug));
  for (const record of [...lessons, ...notes]) {
    if (!subjectSlugs.has(record.subject)) {
      issues.push({
        code: "UNKNOWN_SUBJECT",
        message: `${record.id} references unknown subject ${record.subject}`,
        severity: "error",
      });
    }
  }
  for (const note of notes) {
    if (!noteModuleByPath.has(note.filePath)) {
      issues.push({
        code: "MISSING_NOTE_SOURCE",
        message: `${note.id} has no loadable Markdown source`,
        path: note.filePath,
        severity: "error",
      });
    }
  }
  return {
    valid: issues.every((issue) => issue.severity !== "error"),
    checkedAt: new Date().toISOString(),
    filesChecked: notes.length + lessons.length + subjects.length,
    issues,
  };
};
