# Performance audit

Result: PASS with non-blocking chunk-size warning

The GitHub Pages artifact is about 7.5 MB across the static shell, route entry points, and 111 lazy note chunks. The initial application bundle remains about 331 kB raw / 85 kB gzip. Questions and Search are deferred bundles of about 1.58 MB and 1.51 MB raw respectively after adding the 120 Chemistry questions and their search records.

Vite emits a non-blocking warning for deferred chunks above 1.4 MB. They do not block the initial route, and the full browser audit passes. There are no runtime APIs, source maps, broken assets, or duplicate generated chunks.
