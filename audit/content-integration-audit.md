# Content integration audit

Result: PASS

- `subjects.json`: 11 canonical approved records.
- `lessons.json`: 121 approved subject-scoped lessons, including 10 validated question-only lessons.
- `notes.json`: 111 approved/audited notes; every indexed Markdown file exists and builds as a lazy chunk.
- `questions.json`: 1,032 approved/audited questions with valid lessons, options, answers, and explanations.
- `content-index.json`: 1,143 records, exactly notes plus questions.
- `search-index.json`: 1,143 joined records.
- `tags.json`: 2,064 unique searchable tags.

All schemas, relationships, relative paths, manifest hashes, approval states, and source files pass validation. Question-only lessons expose lesson and quiz routes without a fake note route. There are no approved downloadable subject assets; Downloads retains its explicit empty state.
