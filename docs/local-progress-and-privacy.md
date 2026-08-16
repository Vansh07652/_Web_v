# Local progress and privacy

MedMosa keeps study progress in the visitor's own browser. There is no account
requirement, no server call, and no analytics attached to any of it. This
document lists exactly what is stored, where, and what it would reveal if
someone read it.

Source: `src/lib/progress.ts`.

## Where it lives

One `localStorage` entry, under the key `medmosa.progress.v1`.

Two older keys are still read, and migrated to the current one on the next
write: `medmosaic.progress.v1` and `study-compass.progress.v1`. Renaming a
storage key at a rebrand silently resets every visitor's streak, so the old
names stay supported rather than being dropped.

## What is stored

The whole payload is counters, ids and dates. No name, no email, no free text,
no answers typed by the visitor, no device identifier, no timestamps finer than
a calendar day.

| Field      | Keyed by            | Holds                                                     |
| ---------- | ------------------- | --------------------------------------------------------- |
| `days`     | `YYYY-MM-DD`        | minutes studied, questions answered, answers correct        |
| `topics`   | topic id            | the day the topic was first opened                          |
| `courses`  | subject slug        | topics viewed, questions answered, answers correct          |
| `mastery`  | topic id            | times opened, attempts, correct, streak, three day keys     |
| `questions`| question id         | attempts, misses, last result, two day keys, interval       |

`mastery` and `questions` are the review state added in the practice and review
work. They are optional on the type and always present on write: a payload
written by an older build simply has neither, and loads as two empty maps.

Dates are day keys in the visitor's own timezone, so "today" means their today.
Nothing records a time of day, which is deliberate — a per-minute log of when
somebody studies is a behavioural profile, and a daily counter is not.

## What is not stored

- No identity of any kind. Nothing here distinguishes one visitor from another.
- No question text, no chosen answers, no notes. Only whether an attempt on a
  question id was right or wrong, and how many times.
- No IP address, no user agent, no referrer. The store never sees them.
- No third-party storage. No cookies are set by this code.

## Network

None of this leaves the browser.

The progress store makes no network calls. The review state in particular is
deliberately excluded from the optional account sync: `replaceProgress` treats
an incoming state that omits `mastery` and `questions` as "leave the local ones
alone", which is exactly what a sign-in merge produces, so the review schedule
stays on the device it was built on even for a signed-in visitor.

The optional sign-in feature is a separate subsystem (`src/lib/auth/`). Without
it the site is fully usable and progress is fully local; it is not required to
read a topic, answer a question, or build a review schedule.

## Limits and clamping

The stored file is user-editable by definition, so everything read back is
validated and clamped before it reaches the UI:

- days kept: 400 (oldest pruned first)
- minutes per day: 0..1440
- any counter: 0..1,000,000
- review interval: 0..400 days
- question records: 5,000, oldest `lastAnsweredAt` evicted first
- topic mastery records: 5,000, oldest `lastStudiedAt` evicted first
- day keys must match `^\d{4}-\d{2}-\d{2}$`; a bad optional date is dropped, a
  record missing a date it needs is dropped whole
- `correct` is never allowed to exceed `questions`, at every level

`readProgress()` never throws. Malformed JSON, a hostile payload, an entry that
is a string where an object belongs — all of it degrades to an empty state or a
sanitised one, never to an exception on a page the visitor is trying to read.

## When storage is unavailable

Safari's private mode throws on `setItem`; some browsers block storage entirely
on `file://` or third-party contexts. Every access is guarded, and a failure
falls back to an in-memory store for the rest of the session, so the page keeps
working and the current visit still shows live numbers.

The write probe is cached against the storage object it ran on rather than
latched in a permanent boolean, so one transient failure — a momentarily full
quota — does not disable persistence for the rest of the page's life.

## Deleting it

Two controls, both local and both immediate:

- `clearProgress()` deletes the current key and every legacy key, and drops the
  in-memory copy. Everything is gone.
- `clearReviewHistory()` clears only `mastery` and `questions`. Days, topics and
  course totals survive, so restarting revision does not also cost the streak.
  It is safe to call when storage is unavailable.

Clearing browser site data by hand has exactly the same effect: there is no
copy anywhere else to restore from, which is the trade-off of keeping it local.

## Consequences the visitor should expect

- Progress is per-browser and per-device. A different browser is a different
  history, and there is no way for us to merge them without an account.
- Clearing site data, or a private window closing, loses it.
- Nobody can recover it, including us, because nobody else has it.
