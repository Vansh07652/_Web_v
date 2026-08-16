# archive/legacy-src

Source files that are no longer part of the build, kept rather than deleted so
nothing is lost.

| File | Was | Superseded by |
|---|---|---|
| `SearchPage-v1.tsx` | `src/pages/SearchPage 2.tsx` — an earlier copy of the search page that predated canonical-topic search. It was never imported. The space in the original filename also broke several command-line tools. | `src/pages/SearchPage.tsx` |
| `CurriculumPilot.tsx` | `src/pages/CurriculumPilot.tsx` — the Anatomy & Physiology I pilot explorer, written before the registry covered all 28 courses. It was never imported. | `src/pages/CurriculumExplorer.tsx` |

Neither file contains any unique study content: every string in them also
appears in the module that replaced it. They are excluded from `tsconfig.app.json`
so they do not affect typechecking or the build.
