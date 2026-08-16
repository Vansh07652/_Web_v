# Review algorithm

How MedMosa decides what to practice again and when. Everything described here
runs in the browser, from data the browser already holds; there is no server
involved and no model to train.

Source: `src/lib/review/scheduler.ts` (scheduling and queues),
`src/lib/review/mastery.ts` (status), `src/lib/progress.ts` (storage and
validation).

## The interval ladder

```
REVIEW_INTERVALS = [1, 3, 7, 14, 30, 60]   // whole days, ascending
```

A fixed ladder, not SM-2 and not FSRS. The reasons:

- It needs no per-item ease factor and no grading scale beyond right/wrong,
  which is all a multiple-choice practice question produces.
- It needs no tuning data, and we have none. A fitted algorithm with unfitted
  parameters is just a fixed ladder with extra steps and less honesty.
- Every step is a round number, so the schedule is predictable to the learner.

The steps roughly double, which is the property that matters for spacing. The
exact values are a judgement call. The ladder stops at 60 days: beyond about two
months an item is better re-learned than nudged.

The middle of the ladder is index 2, that is 7 days. It is derived
(`Math.floor((length - 1) / 2)`), so changing the ladder moves the cap with it.

## Scheduling one question

`scheduleQuestion(previous, wasCorrect, today)` returns a complete
`QuestionAttemptRecord`. It is pure: no clock, no storage. `today` is always
passed in as a `YYYY-MM-DD` key.

1. `attempts` increments. `misses` increments on a wrong answer and is capped at
   `attempts`, so a tampered record cannot claim more misses than tries.
2. **Wrong answers come back tomorrow.** The interval resets to the first rung
   (1 day) regardless of what it had reached.
3. **Right answers climb exactly one rung.** The current rung is the highest
   ladder value less than or equal to the stored interval, so a hand-edited
   interval of 5 rounds down to the 3-day rung and moves to 7. An item with no
   stored interval starts below the ladder and lands on rung 0, that is 1 day.
4. **An item with any recorded miss is capped at the middle rung (7 days).** A
   question that has been forgotten once gets a medium interval rather than the
   longest one, and keeps that cap permanently. A clean item can reach 60 days;
   a recovered one settles at 7.
5. `nextReviewAt = shiftDays(today, interval)`, `lastAnsweredAt = today`,
   `lastResult` records the answer.

Worked example — six correct answers, then a miss, then four more correct:

```
interval:  1 -> 3 -> 7 -> 14 -> 30 -> 60      (clean run, one rung each)
miss:      1                                   (reset, misses = 1)
recovery:  3 -> 7 -> 7 -> 7                    (one rung, then held at the cap)
```

## Scheduling one topic

`scheduleTopic(previous, wasCorrect, today)` returns `{ nextReviewAt, streak }`.

A topic is a bag of questions rather than a single item, so it has no interval of
its own; the ladder is indexed by `streak`, the run of consecutive correct
answers on that topic. Streak 1 gives 1 day, streak 2 gives 3 days, and so on to
the top of the ladder. A wrong answer sets the streak to 0 and schedules the
topic for tomorrow.

## The review queue

`buildReviewQueue(state, today, limit?)` returns every question whose
`nextReviewAt` is on or before `today`, as
`{ questionId, dueOn, misses, overdueDays }`.

Ordering, in strict priority:

1. `misses` descending — repeatedly forgotten items come first.
2. `overdueDays` descending — among equals, the longest-waiting first.
3. `questionId` ascending — the tie-break that makes the queue reproducible.

The third key matters as much as the first two: without it, two items with the
same history would swap places between runs and the "next question" would depend
on object insertion order. Comparison is byte-wise (`<` / `>`), not
`localeCompare`, which varies by locale and would make the order depend on the
visitor's language settings.

`overdueDays` is computed at UTC midnight, so a daylight-saving change cannot
turn a 7-day gap into 6.96 and round it down. Days themselves are local: "today"
means the visitor's today.

An unparseable `today` returns an empty queue rather than a guess. `limit`, when
given, truncates after sorting; omitted, the whole due set comes back.

## Weak topics

`buildWeakTopics(state, today, limit?)` returns `TopicMastery` values for topics
that are either

- practiced at least once and not yet `confident`, or
- carrying a `nextReviewAt` that has fallen due.

Sorted by `masteryPercent` ascending, then `questionsAttempted` descending (more
evidence first among equally weak topics), then `topicId` ascending.

A topic that was only ever opened, never practiced, is not "weak" — there is no
accuracy to be weak about, so it is left out.

## Mastery status

`computeMastery(topicId, record)` derives, in this order:

| Status       | Rule                                                   |
| ------------ | ------------------------------------------------------ |
| `new`        | nothing opened and nothing attempted                   |
| `learning`   | opened, or fewer than 5 attempts                       |
| `confident`  | at least 10 attempts **and** accuracy at least 80%     |
| `practicing` | everything else (5+ attempts, not yet confident)       |

`masteryPercent` is the rounded accuracy, clamped to 0..100, and 0 when nothing
has been attempted. `questionsCorrect` is clamped to `questionsAttempted` first,
so an impossible record cannot produce 4000%.

"Confident" describes practice accuracy on this site. It is not a claim about
clinical competence and not a prediction of an exam result, and
`masteryStatusDescription` says exactly that in the copy the UI shows.

## Time estimate

```
estimatedMinutes = questionsDue ? max(1, ceil(questionsDue * 45 / 60)) : 0
```

Forty-five seconds per due question is a stated assumption, not a measurement:
enough to read a stem, answer, and glance at the explanation. Rounded up, with a
floor of one minute whenever anything is due, and exactly 0 when nothing is.

## Storage limits

Per-question scheduling is the only part of the progress store that grows with
use rather than with the calendar, so it is the only part that could approach the
roughly 5MB `localStorage` quota.

- At most **5,000 question records**. Past that, the records with the oldest
  `lastAnsweredAt` are evicted first, ties broken on the id so eviction is
  deterministic. 5,000 records is a few hundred kilobytes and far more than
  anyone will answer.
- At most **5,000 topic mastery records**, same rule, keyed on `lastStudiedAt`.
  The curriculum makes this one hard to reach.

The cap is applied both when reading a stored payload and when writing one, so a
file edited by hand cannot get past it either.

## Validation

Everything read back is untrusted — it is the visitor's own file. Counters are
clamped to 0..1,000,000 and intervals to 0..400 days; dates must match
`^\d{4}-\d{2}-\d{2}$` or they are dropped; a question record missing either date
is dropped whole, because it cannot be scheduled; a record with zero attempts is
dropped, because it records nothing. An unrecognised `lastResult` is read as
`incorrect` — guessing "correct" would let an edited store inflate its own
accuracy, and guessing wrong in the safe direction only costs one extra review.
