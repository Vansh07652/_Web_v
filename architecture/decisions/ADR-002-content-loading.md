# ADR-002: Content loading

- Status: Accepted
- Date: 2026-08-10

## Context

Approved data is a read-only sibling export containing aggregate JSON, per-record content files, Markdown notes, schemas, and a manifest. UI code must not duplicate content or read unapproved directories. Static hosting has no server filesystem.

## Decision

Import the seven aggregate JSON files and approved note Markdown at build time through modules under `src/lib/content/`. The public `index.ts` is the integration boundary and exposes typed loads/selectors plus dynamic question/search support. Keep lightweight subject/lesson/note metadata in the initial chunk, emit one lazy chunk per note, and defer aggregate question and search datasets until the corresponding experience needs them. Resolve Markdown module keys with repository-relative approved `filePath` values. Validate the export independently before building, including manifest hashes and record/file relationships.

Missing optional display metadata receives a documented view-model fallback. Missing identity, status, relationship, answer, or file fields fails validation. Valid absent content returns an empty array and produces an empty state. Website scripts never mutate source.

## Alternatives considered

- Copy the export into `public/`: risks publishing schemas/provenance and creates stale duplicate source.
- Runtime `fetch` of loose JSON/Markdown: supports chunking but requires copying/hosting content paths and more public-path/security rules.
- Database/API: unnecessary operational dependency for approved static data.
- Import every per-question JSON file: duplicates the aggregate payload and slows builds.

## Consequences

The build is reproducible and deploys one static artifact with no runtime source dependency. Type-safe selectors keep components stable as content grows, while deferred chunks keep the initial experience small. Question/search chunks still contain the full approved aggregate datasets; when measurement requires it, replace them with generated subject-level chunks or a compact search index behind the same selector contract. Approved `content/` and `data/` must be present at the repository root during the build.
