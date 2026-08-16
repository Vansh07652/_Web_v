# Information architecture

## Navigation model

The persistent navigation contains Home, Subjects, Notes, Questions, Search, and Help. Downloads is discoverable from content or the route catalog once assets exist; it is not promoted while empty. Desktop and mobile expose the same items in the same order. Mobile collapses the list behind a labeled Menu button and never hides information behind hover.

Breadcrumbs show hierarchy on every interior page. Subject pages provide the strongest return point. Previous/next links appear on sequential notes, while question practice retains its lesson context.

## Page inventory

| Page | Purpose | Loads | Primary actions | Next destinations | Mobile behavior |
| --- | --- | --- | --- | --- | --- |
| Home | Start studying immediately | subjects plus counts | choose subject, notes, questions, search | subject or content indexes | one-column hero and cards |
| Subject index | Scan all canonical courses | subjects, aggregate counts | open a subject | subject detail | single-column cards on small screens |
| Subject detail | Understand available material | one subject, its lessons/notes/questions | open notes, questions, or lesson | lesson/content pages | counts remain visible; actions wrap |
| Lesson index | Browse ordered course lessons | subject lessons and availability | read or practice | lesson/note/questions | stacked lesson rows |
| Lesson detail | Choose a study mode | lesson, related note/questions | read note or practice | note or quiz | mode cards stack |
| Notes index | Enter notes by subject | subjects and note counts | open subject notes | subject note index | stacked catalog rows |
| Subject notes | Browse available notes | subject, lessons, notes | open note | note detail | one-column cards |
| Note detail | Read approved material | note metadata and Markdown | read, practice, previous/next | questions or adjacent note | responsive type and scrollable tables |
| Questions index | Enter practice by subject | subjects and question counts | open subject questions | subject question index | stacked catalog rows |
| Subject questions | Choose a question set | lessons and question counts | start practice | practice page | stacked rows with large buttons |
| Practice | Answer with feedback | lesson questions | select, check, next, previous, restart | same set or subject | full-width options and controls |
| Search results | Find specific material | search index joined to metadata | filter and open result | note or question set | filters become one column |
| Downloads | List approved offline assets | asset index when introduced | download | file or subject | labeled empty state today |
| About/help | Explain use and content status | interface copy only | return to study | subjects/search | narrow reading column |
| Not found | Recover from invalid path | no content | subjects or search | safe top-level page | centered actions wrap |
| Error | Recover from integration failure | error context only | subjects or home | safe top-level page | centered plain-language alert |
| Empty state | Explain valid absence | relevant zero-count metadata | choose another path | subject/index | same meaning and actions |

## Hierarchy

```text
Home
├── Subjects
│   └── Subject
│       ├── Lessons → Lesson
│       ├── Notes → Note
│       └── Questions → Practice set
├── Notes → Subject notes → Note
├── Questions → Subject questions → Practice set
├── Search → matching note or practice set
├── Downloads
└── About / Help
```

Content types remain distinct through labels, borders, and words. Notes use a blue role; questions use an amber role. Neither distinction relies only on color.

## Simplicity constraints

- No dashboard, sign-in, hidden workspace, or setup flow.
- No more than two primary actions in a page header.
- Zero approved content yields a clear empty state while preserving the canonical course listing.
- A question search result links to its lesson practice set because the question experience maintains lesson context.
- Raw paths, internal IDs, provenance pointers, review tools, and schema details are never primary UI.
- Search starts empty with instructions rather than displaying 1,143 undifferentiated results.
