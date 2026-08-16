# Route map

The route registry in `src/data/routes.json` is the interface-owned source of truth. Subject and lesson parameters are validated against approved data. All paths are canonical, lowercase, hyphenated, and free of file extensions.

## Route-to-content mapping

| # | Pattern | Parameters | Required data / selector | Empty or invalid behavior | Breadcrumb tail |
| ---: | --- | --- | --- | --- | --- |
| 1 | `/` | none | subjects plus derived counts | catalog still renders | Home |
| 2 | `/subjects` | none | `loadSubjects` | show canonical zero-count cards | Subjects |
| 3 | `/subjects/:subjectSlug` | canonical subject slug | `getSubjectBySlug`, subject aggregates | unknown slug → 404; zero content → empty state | subject name |
| 4 | `/subjects/:subjectSlug/lessons` | subject | `getLessonsBySubject` | unknown subject → 404; zero lessons → empty | Lessons |
| 5 | `/subjects/:subjectSlug/lessons/:lessonSlug` | subject and subject-scoped lesson | `getLessonBySlug`, related note/questions | invalid relation → 404; zero related content → empty | lesson title |
| 6 | `/subjects/:subjectSlug/notes` | subject | `getNotesBySubject` | unknown subject → 404; zero notes → empty | Notes |
| 7 | `/subjects/:subjectSlug/notes/:lessonSlug` | subject and lesson | `getNoteByLesson`, `getNoteSource` | absent record → 404; missing indexed file → error | note title |
| 8 | `/subjects/:subjectSlug/questions` | subject | `getQuestionsBySubject` grouped by lesson | unknown subject → 404; zero questions → empty | Questions |
| 9 | `/subjects/:subjectSlug/questions/:lessonSlug` | subject and lesson | `getQuestionsByLesson` | invalid lesson → 404; zero questions → empty | lesson title |
| 10 | `/notes` | none | subjects and note counts | zero counts labeled per subject | Notes |
| 11 | `/questions` | none | subjects and question counts | zero counts labeled per subject | Questions |
| 12 | `/search` | query/filter UI state | `searchContent` and filter metadata | untouched → prompt; no match → no-results | Search |
| 13 | `/downloads` | none | future approved asset index | no assets → labeled empty state | Downloads |
| 14 | `/about` | none | interface help text | always available | About and help |
| 15 | `/error` | optional future error code | none | plain-language recovery actions | Error |
| 16 | `/404` | none | none | recovery actions | Page not found |

Any unmatched path renders the same not-found component as `/404` without rewriting the URL.

## Parameter and link rules

- `:subjectSlug` must exactly match `subjects.json[].slug` with `status: approved`.
- `:lessonSlug` must match a `lessons.json` record whose `subject` equals the current subject.
- Subject routes are never generated from display names.
- Note routes use `note.lesson`; question results use the related lesson set.
- URL builders in `src/lib/navigation.ts` percent-safe route values and prevent components from hand-assembling alternatives.
- Query/filter state is local to the Search page and can move to URL parameters later without changing path patterns.

## Titles, descriptions, and canonical behavior

Title pattern: `{Page or content title} | Study Compass`. Route changes update the document title, description, and canonical URL; lesson and note routes use their approved content title.

Production hosting must serve `index.html` for known client paths. The build copies it to `404.html` for GitHub Pages-compatible fallback. A custom domain should add a normal SPA rewrite and canonical URL. Invalid parameter routes must not be indexed as valid content.
