# Component map

Props use types from `src/types`; all navigation props accept public URLs and a shared `navigate` function. The reusable behaviors below are implemented directly or composed within focused page components.

| Component | Purpose and required data/props | States | Accessibility and use |
| --- | --- | --- | --- |
| SiteLayout | Wrap header, main, footer; `children`, current path | normal | landmark order; focusable main; every page |
| SiteHeader | Brand and persistent navigation | desktop, mobile open/closed, current | semantic header/nav; expanded state; every page |
| SiteNavigation | Six top-level links | current, hover/focus | `aria-current`; desktop header |
| MobileNavigation | Same links in compact layout | collapsed/expanded | labeled button, `aria-controls`; small screens |
| Footer | Site identity and help link | normal | semantic footer; every page |
| Breadcrumbs | Hierarchical recovery; crumb array | linked/current | ordered list, labeled nav; interior pages |
| PageHeader | Eyebrow, H1, description, optional actions | with/without actions | one page H1; all main pages |
| SubjectHeader | Subject heading plus content counts/actions | available/empty | descriptive count text; subject page composition |
| SubjectGrid | Responsive canonical subject collection | populated | logical DOM order; Home/Subjects |
| SubjectCard | Subject metadata and three counts | available/zero counts | descriptive link and visible values |
| LessonList | Ordered subject lessons | populated/empty | semantic grouping; subject/lesson index |
| LessonCard | Lesson number/title and availability | note, questions, both | action links name destination |
| NoteCard | Note title/lesson link | available | note label plus text; note indexes |
| MarkdownDocument | Safe raw Markdown body | headings, lists, quote, table | no HTML injection; heading structure; table region |
| QuestionCard | Current question prompt container | unanswered/answered | fieldset and legend; practice page |
| QuestionOption | One structured option | default, selected, correct, incorrect | native radio; text status beyond color |
| QuestionFeedback | Outcome and explanation | correct/incorrect | focus target, `role=status`, polite live region |
| QuizProgress | Current/total state | first/middle/last | text plus native progress element |
| SearchBar | Labeled keyword input | empty/entered | native search field; Search |
| SearchFilters | Subject/type/lesson/difficulty/tag controls | enabled/disabled/reset | explicit labels; dependent lesson disabled |
| SearchResultCard | Public result metadata and link | note/question | visible content-type/subject labels |
| TagBadge | Compact tag text | normal | text content; never sole interaction cue |
| DownloadCard | Future approved asset metadata/action | available/unavailable | filename purpose, size/type, descriptive link |
| EmptyState | Explain valid zero content and recovery | with/without action | heading and plain-language message |
| ErrorState | Explain load/integration failure | recoverable | alert role and safe actions |
| LoadingState | Announce future deferred loads | active | `role=status`; animation honors reduced motion |

## Composition

```text
SiteLayout
├── SiteHeader → SiteNavigation / MobileNavigation
├── Page
│   ├── Breadcrumbs + PageHeader / SubjectHeader
│   ├── SubjectGrid → SubjectCard
│   ├── LessonList → LessonCard
│   ├── NoteCard / MarkdownDocument / DownloadCard
│   ├── QuestionCard → QuizProgress + QuestionOption + QuestionFeedback
│   ├── SearchBar + SearchFilters → SearchResultCard → TagBadge
│   └── EmptyState / ErrorState / LoadingState
└── Footer
```

Phase 3 implements these reusable behaviors directly; smaller named rows such as `QuestionOption` and `SearchFilters` are intentionally composed inside their owning focused component where extraction would add indirection without reuse. Duplicate one-off variants should not be introduced.
