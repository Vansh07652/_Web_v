---
title: "How Does the Brain Process Acoustic Information?"
subject: "Science"
book: "Introduction to Behavioral Neuroscience"
chapter: "7: Hearing and Balance"
topic_number: "3"
source: "introduction-behavioral-neuroscience.md"
tags:
  - "how-does-the-brain-process-acoustic-information"
  - "science"
status: "complete"
---

# How Does the Brain Process Acoustic Information?

> **Book:** [Introduction to Behavioral Neuroscience](../../README.md)  
> **Chapter:** [Chapter 7: Hearing and Balance](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Once sound reaches the auditory nerve, the brain's work begins: it must extract the information that matters — **pitch** (frequency), **loudness** (intensity), **timing**, and **location** — and turn raw signals into perceptions like a melody, a voice, or a warning. The auditory system uses two complementary coding strategies. A **place code** preserves frequency information through tonotopic maps from cochlea to cortex. A **temporal code** uses the precise timing of action potentials, especially for low frequencies and for comparing the two ears. The brainstem computes location from tiny interaural differences, and the auditory cortex organizes the results into "what" and "where" processing streams. This topic explains each of those computations and how they work together.

## Why This Matters

- **Sound localization is life-relevant:** knowing whether a siren is to your left or right, or which student is speaking across a room, depends on brainstem circuits that compare the two ears — not on the ears alone.
- **Cochlear implants must mimic the codes:** implant electrode placement recreates a place code, which is why implant users can understand speech even though timing cues are imperfectly preserved.
- **Speech perception depends on both codes:** consonant distinctions rely on rapid temporal changes; pitch and melody carry prosody and emotion.
- **Hearing loss is not just "quieter":** damage that disrupts temporal coding makes speech hard to follow in noise even when tones are still audible — a common complaint of people with sensorineural loss.

## Core Concepts

### Pitch: the place code and the temporal code

Pitch is carried two ways. **Place coding**: because the basilar membrane is tonotopic, a given frequency activates hair cells at a specific location, and that location is preserved at every relay — neurons in A1 are tuned to the same frequencies as the cochlear region they connect to. **Temporal (phase) coding**: auditory nerve fibers also fire in phase with the stimulus waveform; for low frequencies (roughly below a few thousand Hz), the pattern of firing times itself signals the pitch. This redundancy is why pitch perception survives some damage: if place information is degraded, timing can still carry the message.

### Loudness: rate and recruitment

Loudness is coded mainly by **firing rate** and **population recruitment**. A louder sound bends hair cells more, causing each auditory nerve fiber to fire faster, and it recruits additional fibers (including fibers with higher thresholds). More fibers firing more often is read by the brain as "louder." This explains why loudness grows with sound intensity in a roughly logarithmic way and why damage that kills fibers (as in noise-induced hearing loss) raises the threshold for hearing soft sounds.

### Timing: the temporal code and the cocktail party

Precise timing matters in two ways. First, the **temporal code** for low-frequency pitch (above). Second, **interaural time differences (ITD)** — a sound from the left reaches the left ear a fraction of a millisecond before the right ear. Neurons in the **medial superior olive** act as coincidence detectors: they fire most when the two ears' inputs arrive together, and each neuron is tuned to a specific delay. This lets the brain compute azimuth (left–right position) from sub-millisecond differences.

### Location: ITDs, ILDs, and the superior olive

Two physical cues give the brain location information. **Interaural time differences (ITD)** dominate for low frequencies (the waveform's phase can be compared). **Interaural level differences (ILD)** dominate for high frequencies: the head casts an "acoustic shadow," so the far ear receives a quieter sound. The **medial superior olive** computes ITDs; the **lateral superior olive** computes ILDs. Beyond left–right location, the pinna's direction-dependent filtering helps the brain judge whether a sound is above or below and in front or behind — cues that are hard to recreate in headphones.

### From brainstem to cortex: what and where

After the inferior colliculus integrates the binaural cues, the **medial geniculate nucleus** (thalamus) relays to **primary auditory cortex (A1)** in the superior temporal lobe. A1 keeps a tonotopic map and responds to complex features like frequency sweeps and harmonic patterns. Surrounding belt and parabelt regions feed two processing streams: a **ventral ("what") stream** toward the anterior temporal lobe, specialized for identifying sounds (speech, music, objects), and a **dorsal ("where") stream** toward parietal cortex, specialized for location and sound-guided actions. This what/where organization parallels the visual system and is a major theme of cortical processing.

## ELI-10: Explain Like I'm 10

> Your brain is like a detective at a desk with two phones — one from each ear. If the left phone rings a tiny bit before the right one, the sound came from the left. If it rings much louder on the left, same answer. High sounds tell your brain "where" by how loud each ear hears them; low sounds tell it "where" by which phone rings first. And pitch is like a piano laid out along the ear — each key's position tells your brain which note it is, and the ringing pattern can also tell it.

## High-Yield Points

- Pitch uses a place code (tonotopy) plus a temporal code (phase-locked firing) for low frequencies.
- Loudness is coded by firing rate and number of active fibers (recruitment), not by bigger action potentials.
- ITDs (time differences between ears) are computed in the medial superior olive and dominate for low frequencies.
- ILDs (level differences, from the head's acoustic shadow) are computed in the lateral superior olive and dominate for high frequencies.
- The pinna adds elevation/front–back cues via direction-dependent filtering.
- A1 preserves tonotopy; belt/parabelt cortex feeds ventral "what" and dorsal "where" streams.
- Both coding strategies — place and temporal — work together; losing one degrades but does not destroy hearing.
- Speech-in-noise difficulty after hearing loss often reflects temporal-coding damage, not just loudness loss.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Place code | Frequency encoded by which neurons/positions are active | The core of tonotopic frequency analysis |
| Temporal code | Frequency or timing encoded by when neurons fire | Carries low-frequency pitch and interaural timing |
| Phase locking | Firing in time with the stimulus waveform | Basis of the temporal code for pitch |
| Interaural time difference (ITD) | Tiny difference in arrival time between the ears | Main localization cue for low-frequency sounds |
| Interaural level difference (ILD) | Loudness difference between the ears from the head's shadow | Main localization cue for high-frequency sounds |
| Medial superior olive | Brainstem nucleus that detects ITDs | First true binaural comparator |
| Lateral superior olive | Brainstem nucleus that compares sound levels | Computes ILDs for high frequencies |
| Recruitment | More auditory fibers recruited as sound gets louder | Mechanism behind loudness coding |
| Ventral stream ("what") | Cortical pathway for identifying sounds | Speech/music/object recognition |
| Dorsal stream ("where") | Cortical pathway for sound location and action | Spatial hearing and sound-guided behavior |

## Worked Example: Finding a friend's voice at a party

**Scenario:** At a noisy party, someone calls your name from your right side.

**Cue 1 — ITD (low-frequency content):** The voice contains low-frequency energy; it reaches your right ear ~0.3 ms before your left ear. Medial superior olive neurons tuned to that delay fire strongly, signaling "right."

**Cue 2 — ILD (high-frequency content):** The voice's high frequencies are slightly louder in your right ear because your head shadows the left ear. Lateral superior olive neurons compare the levels and agree: right.

**Cue 3 — Pitch and voice identity:** The sound's frequency content activates a tonotopic pattern in A1, and the ventral stream matches the harmonic structure to a familiar voice — your friend.

**Cue 4 — Segregation:** The dorsal stream uses location to group the voice's sounds together and separate them from other talkers at different locations — the "cocktail party effect."

**Takeaway:** One sound is processed in parallel: brainstem circuits locate it, cortical streams identify it, and location itself helps separate it from competing sounds. None of this happens in a single "hearing center"; it is distributed computation.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Place code | Temporal code | Place = which neurons fire (position on tonotopic map); temporal = when they fire (phase/timing) |
| ITD | ILD | ITD = time difference, best for low frequencies; ILD = level difference, best for high frequencies |
| Medial superior olive | Lateral superior olive | Medial detects timing (ITD); lateral detects level (ILD) |
| Loudness | Pitch | Loudness = intensity (rate + recruitment); pitch = frequency (place + temporal code) |
| Auditory "what" stream | Visual "what" stream | Same organizational principle, different modality and cortical targets (temporal vs occipital) |
| Hearing loss = quieter world | Hearing loss = degraded coding | Many losses disrupt timing/place coding, hurting speech-in-noise perception beyond simple volume loss |
| The ear localizes sound | The brain localizes sound | Ears deliver cues; brainstem and cortex compute location from them |

## Quick Review

1. Name the two codes for pitch and state which one matters most for low frequencies.
2. How does the medial superior olive compute sound location, and why does that work best for low frequencies?
3. Why is an ILD small or absent for low-frequency sounds?
4. If a lesion destroyed the ventral auditory stream but spared the dorsal stream, what would the person likely be able to do and not do?
5. Why can someone with sensorineural hearing loss complain "I can hear you, but I can't understand you" in a noisy room?

<details>
<summary>Show answers</summary>

1. Place code (tonotopy) and temporal code (phase locking). The temporal code matters most for low frequencies, where fibers can fire in phase with each cycle.
2. Medial superior olive neurons act as coincidence detectors: each neuron fires best when inputs from the two ears arrive with a specific delay. A sound arriving first at the left ear and ~0.3 ms later at the right ear activates neurons tuned to that ITD — signaling "left." It works best for low frequencies because their long wavelengths/cycles can be compared by phase across the two ears.
3. Low-frequency sounds have wavelengths much larger than the head, so the head barely shadows them — both ears receive nearly equal levels. Level differences require wavelength comparable to or smaller than head size.
4. The person could likely locate sounds (dorsal/"where" stream intact) but would struggle to identify what the sounds are — recognizing speech, music, or specific objects (ventral/"what" stream damaged).
5. Understanding speech in noise relies on precise temporal and place coding to resolve rapid consonant changes and segregate the voice from background. Sensorineural loss often damages hair cells and nerve fibers, degrading those codes even when loudness thresholds are only mildly elevated.

</details>

## Related Topics

- Previous: [How Does Acoustic Information Enter the Brain?](02-how-does-acoustic-information-enter-the-brain.md)
- Next: [Balance: A Sense of Where You Are](04-balance-a-sense-of-where-you-are.md)
- Related: [Acoustic Cues and Signals](01-acoustic-cues-and-signals.md), [Hearing and Balance chapter overview](../README.md)

## Source Notes

- Book: Introduction to Behavioral Neuroscience
- Local outline source: `introduction-behavioral-neuroscience.md`
- Official source URL: https://openstax.org/details/books/introduction-behavioral-neuroscience/
- Content type: Original educational study guide based on OpenStax outline structure.
- Reference values (ITD/ILD magnitude, frequency ranges for each cue) are commonly-taught approximations; verify against current primary sources before formal citation.
- Last updated: 2026-08-16
