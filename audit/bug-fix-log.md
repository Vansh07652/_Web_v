# Phase 4 bug-fix log

Eight defects were found and fixed.

| # | Defect | Fix | Regression evidence |
| ---: | --- | --- | --- |
| 1 | Direct nested production routes loaded relative assets from the nested path. | Added a static root base plus GitHub project override and build assertion. | 356 deep-link checks; zero request errors. |
| 2 | Tag option display capitalization did not match lowercase indexed tags. | Use canonical tag IDs and normalized comparison. | Search unit/integration test and browser filter flow. |
| 3 | Quiz Previous cleared submissions and allowed score double-counting. | Persist one immutable attempt per question and restore it. | Browser correct/incorrect/Previous flow. |
| 4 | Source H4 headings were not shifted beneath the interface H1. | Renderer now maps H4 to H5. | Semantic/axe note audit. |
| 5 | Markdown accepted arbitrary URL schemes. | Added explicit safe link/image scheme validation. | Lint/security review. |
| 6 | Inline formulas displayed raw `$` delimiters. | Added safe inline formula rendering and wrapping. | Representative Physics note rendering. |
| 7 | Teal text missed contrast on soft-teal surfaces. | Darkened the teal token to `#0d6b6a`. | axe reports zero violations. |
| 8 | Seventeen byte-identical generated chunks remained in `dist/assets`. | Removed duplicates and added hash-based duplicate validation. | Final build validation. |

Approved educational content changed: no.
