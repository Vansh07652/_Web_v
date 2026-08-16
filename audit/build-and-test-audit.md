# Build and test audit

Result: PASS

| Check | Result |
| --- | --- |
| Locked dependency installation / audit | PASS — 0 known vulnerabilities |
| Approved source validation | PASS — 11 subjects, 121 lessons, 111 notes, 1,032 questions |
| Completeness manifests | PASS — expected/current/runtime exact |
| Route registry | PASS — 16 patterns |
| Architecture, links, assets | PASS |
| Secret scan | PASS — 0 findings |
| TypeScript and lint | PASS |
| Vitest unit/integration/semantic a11y | PASS — 22/22 |
| GitHub Pages production build | PASS — 370 generated route entry points |
| Browser routes, flows, responsive, axe | PASS — 376 routes/deep links |

Vite's deferred Search and Questions bundles exceed the advisory 1.4 MB chunk threshold after the restoration. The initial bundle remains small, and this non-blocking performance warning is documented separately.
