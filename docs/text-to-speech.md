# Text to speech

MedMosa can read a lesson aloud. It does that with `window.speechSynthesis`, the
speech engine already built into the browser, and with nothing else. There is no
text-to-speech service, no API key, no audio file to fetch and no third-party
script.

Source: `src/lib/speech.ts`. Tests: `tests/unit/speech.test.ts`.

## The guarantee

**No external service, ever.** Handing a string to `speechSynthesis` asks the
browser to say it. MedMosa opens no socket to make that happen, sends no request
carrying lesson text, and loads nothing from another origin. Reading a lesson
aloud is, from the network's point of view, indistinguishable from scrolling it.

The honest boundary: some platforms synthesise entirely on the device, and some
ship a voice that the operating system fetched at some point. Which voices exist
on a machine is the platform's business and outside this application's reach.
What MedMosa guarantees is what MedMosa controls — it makes no network call of
its own for speech, it never selects a cloud voice, and it records nothing about
what was read or that anything was read at all.

**No autoplay.** Speech starts only when `speak()` is called, and `speak()` is
only ever called from an explicit press. Nothing starts on page load, nothing
starts on a timer, and "was speaking" is not persisted, so a reload never
resumes audio. Audio that begins on its own is hostile in a library, in a
lecture, and to anyone already using a screen reader.

**Almost nothing is stored.** One number — the playback rate — under
`medmosa.speech-rate.v1`. No history of which lessons were read, no position, no
voice identity, no timestamps.

## The API

```ts
type SpeechRate = 0.8 | 1 | 1.2 | 1.5;
type SpeechStatus = "unsupported" | "idle" | "speaking" | "paused";
interface SpeechSection { id: string; label: string; text: string; }

isSpeechSupported(): boolean
readStoredRate(): SpeechRate
storeRate(rate: SpeechRate): void
createSpeechController(): SpeechController
plainTextFromMarkdown(markdown: string): string
```

A controller exposes `status`, `currentSectionId`, and the methods `speak`,
`pause`, `resume`, `stop`, `setRate` and `subscribe`. `subscribe` returns its own
unsubscribe function and notifies on every change to `status` or
`currentSectionId`, which is exactly the shape `useSyncExternalStore` wants. The
selected rate is not on the controller; a UI reads it back with
`readStoredRate()`.

## Reading one section at a time

`speak()` takes a list of semantic sections and reads them in order, one
utterance per section, exposing `currentSectionId` so the page can highlight the
paragraph being spoken. Passing `startAtId` starts partway down the list, which
is what a "read from here" control uses; an unknown id starts from the top
rather than refusing to play.

Splitting by section rather than queueing the whole lesson as one string keeps
the highlight accurate, keeps `stop()` responsive, and avoids the
utterance-length limits some engines impose. Sections whose text is empty once
the markup is stripped are skipped rather than spoken as silence.

## Graceful fallback

`isSpeechSupported()` is false-safe: it reads `globalThis`, not `window`, so it
is safe during a server render or in a test, and it is wrapped in a `try` because
a hardened browser profile can define the property as a throwing getter. It
requires both halves of the API — the synthesiser and the utterance constructor
— before it reports support.

When support is missing the controller reports `"unsupported"` and every method
is a no-op. The UI is expected to hide the play control in that state rather than
offer a button that does nothing.

When support is present but the engine misbehaves, nothing propagates. Every
call into `speechSynthesis` is guarded, and the controller's own state is only
updated when the engine actually did what was asked — if `pause()` throws, the
status stays `"speaking"` rather than claiming a pause that did not happen. If
the engine reports an error on an utterance, playback stops cleanly instead of
marching through the remaining sections raising the same error on each.

`stop()` cancels, drops the utterance and its handlers, and is safe to call
repeatedly and after unmount. With nothing playing it does nothing at all, so a
cleanup function cannot cancel audio some other part of the page started. Late
`end` events from cancelled utterances — which real engines do deliver — are
ignored, because every callback carries the run number it was created under.

## The rate preference

Four rates: 0.8, 1, 1.2 and 1.5. The preference is written to `localStorage`
under `medmosa.speech-rate.v1` and read back with the same suspicion the progress
store applies to its own data:

- Storage may be missing, blocked by policy, or throw on access. Every path is
  guarded and falls back to normal speed.
- The stored value is user-editable by definition. Anything unparseable reads as
  `1`; anything numeric is snapped to the nearest legal rate, with ties going to
  the slower one. `9` becomes `1.5`, `0` becomes `0.8`, `1.3` becomes `1.2`,
  `fast` becomes `1`.

`setRate` persists immediately and applies from the next section onwards. The Web
Speech API cannot change the rate of an utterance already in flight, and
restarting the current section would replay audio the listener just heard. A UI
that wants the change to take effect immediately can `stop()` and then
`speak(sections, currentSectionId)`.

## `plainTextFromMarkdown`

Lesson prose is markdown, and markdown read aloud is unbearable. This function
prepares a section for the engine. It is pure and total: no state, no I/O, never
throws, and `""` for empty or non-string input.

| Markup | Result |
| --- | --- |
| Fenced blocks (``` or ~~~) | dropped whole, fence and contents |
| Inline backticks | removed, the term kept |
| `#` … `######`, closing `##` | removed |
| `**bold**`, `*italic*`, `***both***`, `~~strike~~`, `__b__`, `_i_` | markers removed, words kept |
| `[text](url)`, `[text][ref]` | link text kept, target dropped |
| `![alt](url)` | alt text kept |
| `<https://…>` autolinks, `[1]: url` definitions | dropped |
| `-`, `*`, `+`, `1.`, `1)`, `[ ]`, `[x]` | list markers removed at any nesting depth |
| Table pipes, `\| --- \|` divider rows | pipes become spaces, dividers dropped |
| `>` blockquotes, `---` rules | removed |
| `$formula$` | delimiters removed, as the renderer does |
| Whitespace | collapsed to single spaces |

Two deliberate choices. Fenced blocks are dropped rather than read, because
"backtick backtick backtick python" followed by code spoken character by
character is worse than silence. Underscores inside a word are left alone, so
`sodium_potassium_pump` survives.

It adds no punctuation of its own: sentence pacing comes from the prose as
written.

## Known limitations

- Voice selection is left to the platform default. Choosing a voice would mean
  enumerating `getVoices()`, which is asynchronous, inconsistent across
  browsers, and a fingerprinting surface.
- Chrome stops long utterances after roughly fifteen seconds unless a keep-alive
  timer pings the engine. No timer is used here; per-section utterances are
  usually short enough, and a background timer that outlives the page is a worse
  bug than a truncated paragraph.
- No word-level highlighting. `boundary` events are unevenly supported, and
  section-level highlighting is honest everywhere.
- Bare URLs written as plain text are still read out. Only bracketed autolinks
  are removed.
- The rate applies to the next section, not the current one. See above.
