---
title: "Acoustic Cues and Signals"
subject: "Science"
book: "Introduction to Behavioral Neuroscience"
chapter: "7: Hearing and Balance"
topic_number: "1"
source: "introduction-behavioral-neuroscience.md"
tags:
  - "acoustic-cues-and-signals"
  - "science"
status: "complete"
---

# Acoustic Cues and Signals

> **Book:** [Introduction to Behavioral Neuroscience](../../README.md)  
> **Chapter:** [Chapter 7: Hearing and Balance](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

Hearing begins with physics: a sound is a **pressure wave** — a pattern of compressions and rarefactions of air molecules. The auditory system's first job is to turn those waves into information: *what* is making the sound (pitch, loudness, timbre) and *where* it comes from (its location in space). This topic covers the **acoustic cues** the ear and brain use to reconstruct the auditory scene.

The auditory system solves two problems with two cue sets. **Non-spatial cues** (frequency, intensity, spectral shape, timing) encode a sound's identity and quality. **Spatial cues** — differences between the two ears (interaural time and level differences) and filtering by the outer ear — encode where it originated. Everything later in this chapter builds on these foundations.

## Why This Matters

- **Localization is survival.** Knowing whether a sound comes from the left or right, near or far, is how you find a crying infant or turn toward a speaker at a party.
- **It explains everyday hearing phenomena.** Why you turn your head to hear better, why front/back is hard to judge, why voices sound different in echoey rooms — all trace to these cues.
- **Clinical relevance.** Hearing loss is often described in terms of the cues it destroys: inner-hair-cell damage blurs frequency (pitch) cues; unilateral loss destroys interaural cues and with them localization. Knowing the cues predicts the symptoms.
- **Engineering and medicine.** Cochlear implants, hearing aids, and virtual-reality audio work by delivering (or recreating) acoustic cues — which is why they work, and what they cannot yet do.
- **Comparative biology.** Owls, bats, and dolphins use the same physical cues, sometimes in exaggerated forms — natural experiments in how brains solve localization.

## Core Concepts

### Sound as a physical signal: the non-spatial cues

A sound wave is characterized by:

- **Frequency (Hz):** pressure cycles per second. **Pitch** is its perceptual correlate. The commonly taught human audible range is about **20 Hz to 20 kHz**, narrowing with age.
- **Amplitude (dB SPL):** the size of the pressure variation; **loudness** is its perceptual correlate. The dB scale is logarithmic, so one scale spans faint to painful sounds.
- **Spectral composition (timbre):** natural sounds are mixtures of a fundamental frequency and harmonics. **Timbre** — telling a violin from a flute playing the same note — comes from the harmonic pattern and the attack/decay envelope.
- **Temporal structure:** onsets, offsets, and amplitude modulations (speech syllables, music rhythm) carry information over time.

These cues are *non-spatial*: they tell the brain *what* the sound is, not *where*. Frequency is encoded by place along the cochlea (tonotopy) and by firing timing; intensity by firing rates and active-fiber count — topics taken up next.

### Spatial cue 1: interaural time differences (ITD)

A sound from the left reaches the left ear slightly before the right. This **interaural time difference (ITD)** is the primary cue for localizing low-frequency sounds (roughly below 1.5–2 kHz). The classic Jeffress model proposes **coincidence detection**: brainstem neurons (medial superior olive) receive input from both ears with different conduction delays; a neuron fires best when the two inputs arrive simultaneously, which happens for only one ITD — one location. ITDs are largest for sounds directly to one side (commonly cited at a few hundred microseconds for a human head) and zero directly in front.

### Spatial cue 2: interaural level differences (ILD)

The head casts an **acoustic shadow**: a sound from the left is slightly louder at the left ear because the head attenuates the wave reaching the right. This **interaural level difference (ILD)** is the primary cue for high-frequency sounds (roughly above 1.5–3 kHz), whose short wavelengths make the shadow effective. ILD-sensitive neurons sit in the lateral superior olive. The cues are complementary — the classic **duplex theory** holds that low frequencies use ITDs and high frequencies use ILDs, with both available in the middle range.

### Spatial cue 3: the pinna and spectral cues — resolving ambiguity

ITD and ILD leave an ambiguity: many locations produce the *same* interaural difference (a "cone of confusion" — points equidistant from the two ears), so front vs. back and up vs. down cannot be resolved by interaural cues alone. The solution comes from the **pinna**: its ridges and folds filter sound direction-dependently, boosting and notching specific frequencies (measured as the **head-related transfer function, HRTF**). The brain learns these monaural spectral cues and uses them to tell front from back and high from low — which is why cupping your hand behind your ear or turning your head sharpens localization.

### The precedence effect and echo suppression

In the real world, every sound arrives with reflections (echoes) from walls and floors, yet you localize the *first-arriving* direct wave and largely ignore the echoes. This is the **precedence effect** (law of the first wavefront): the auditory system uses the first ~1 ms of sound for localization and suppresses later, similar reflections — why you can locate a speaker in a reverberant room, and why stereo sounds "correct" amid reflections.

### Beyond humans: echolocation and spatial hearing in other species

- **Bats** emit high-frequency calls (often 20–100+ kHz, above human hearing) and localize by reading the echoes — echo delay gives distance, Doppler shifts reveal prey motion. Active sensing with acoustic cues.
- **Barn owls** are the classic ITD case: they localize prey in darkness using ITDs for azimuth and ILDs for elevation, with a dedicated auditory space map in the external nucleus of the inferior colliculus — one of the best-understood examples of a map built from computed coordinates.

## ELI-10: Explain Like I'm 10

When a friend calls your name, the sound is a wave of pushing air. Your brain figures out *what* the sound is by counting how fast the air wiggles (pitch), how hard it pushes (loudness), and what extra wiggle-patterns it has (timbre). It figures out *where* the sound is by comparing the two ears: one ear hears it a tiny bit earlier and a tiny bit louder, and your ear's shape adds a special "filter" that tells front from back. Your brain is a detective using these clues to find where the sound lives.

## High-Yield Points

- Sound = pressure wave; **frequency → pitch**, **amplitude (dB) → loudness**, **spectral pattern → timbre**, plus temporal structure.
- Commonly taught human audible range: ~**20 Hz – 20 kHz** (declines with age; individual variation).
- **ITD** (interaural time difference): dominant cue for **low-frequency** localization; classic Jeffress coincidence-detection model; computed in the medial superior olive.
- **ILD** (interaural level difference): dominant cue for **high-frequency** localization; head-shadow effect; computed in the lateral superior olive.
- **Duplex theory:** low frequencies → ITD, high frequencies → ILD, both in the middle range.
- **Cone of confusion:** locations equidistant from both ears are ambiguous for interaural cues — resolved by **pinna spectral cues (HRTF)** and head movements.
- **Precedence effect:** the first-arriving sound dominates localization; echoes are suppressed — why you can localize in reverberant rooms.
- Clinical hook: **unilateral hearing loss destroys ITD/ILD** → poor localization; high-frequency loss blurs timbre and ILD cues.
- Comparative hook: **bats** echolocate (echo delay → distance, Doppler → motion); **barn owls** map ITD (azimuth) and ILD (elevation) into a space map.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Frequency | Number of pressure cycles per second (Hz) | Encodes pitch; mapped along the cochlea (tonotopy) |
| Amplitude / dB SPL | Size of the pressure wave, on a logarithmic scale | Encodes loudness; dynamic range from threshold to pain |
| Timbre | The perceptual quality distinguishing sounds of the same pitch/loudness | Carries identity information (voice, instrument, speech sounds) |
| Interaural time difference (ITD) | The tiny delay between the ears for off-center sounds | Primary azimuth cue for low frequencies |
| Interaural level difference (ILD) | The loudness difference between the ears from head shadowing | Primary azimuth cue for high frequencies |
| Duplex theory | Low frequencies localize by ITD, high frequencies by ILD | The classic two-cue account of azimuth localization |
| Cone of confusion | The cone of locations with identical interaural cues | Explains front/back and up/down ambiguity |
| Head-related transfer function (HRTF) | The direction-dependent filtering of sound by the pinna and head | The monaural spectral cue that resolves cone-of-confusion ambiguity |
| Precedence effect | Localizing by the first-arriving sound and suppressing echoes | Enables localization in reverberant environments |
| Echolocation | Active sensing by emitting sounds and reading their echoes | How bats and dolphins navigate and hunt in darkness |

## Example: Finding the source at a crowded party

You are at a party, and a friend calls your name from somewhere to your left. In the first fraction of a millisecond, three computations happen in parallel:

1. **ITD:** the sound reaches your left ear a few hundred microseconds before your right. Coincidence detectors in the medial superior olive convert that delay into a leftward estimate.
2. **ILD:** high-frequency speech energy is shadowed by your head, so the right ear hears it quieter — the lateral superior olive registers the level difference, confirming "left."
3. **Pinna cues:** spectral filtering tells you the voice is at ear height and slightly in front, not behind — resolving the ambiguity ITD/ILD alone cannot.

Now add the room: the voice bounces off the wall and arrives a few milliseconds later, but the precedence effect ensures you localize the *direct* wave, not the echo. Meanwhile the harmonic and temporal structure lets you recognize *whose* name it is. One sound, many cues, solved in parallel — the acoustic-cue toolkit the auditory system runs every moment.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Frequency and pitch | Each other | Frequency is the physical wave property (Hz); pitch is the perceived quality it produces — they usually track, but context can alter pitch perception |
| Amplitude and loudness | Each other | Amplitude is physical (dB SPL); loudness is perceptual — the same dB can sound louder at some frequencies than others |
| ITD and ILD being both cues for everything | Their frequency specialization | ITD dominates low frequencies, ILD dominates high frequencies (duplex theory); both are available in the midrange |
| The pinna amplifying sound | The pinna filtering sound | The pinna's main role is direction-dependent spectral filtering (HRTF) that resolves front/back and elevation — not loudness |
| Echoes confusing the auditory system | Echoes being suppressed | The precedence effect suppresses later reflections so the direct sound wins localization |
| A "cone of confusion" being a perceptual failure | It being an anatomical ambiguity | It is an inherent ambiguity in interaural cues, resolved by spectral cues and head movement |
| Bats hearing "ultrasound" the way humans hear | Bats using echoes for active sensing | Bats emit and analyze echoes (delay, Doppler) to build a spatial picture — not just "very high hearing" |
| Hearing loss always being "volume" loss | Hearing loss often being cue loss | Many losses are frequency-specific or unilateral, destroying timbre or localization cues while volume seems fine |

## Quick Review

1. Name the four physical properties of a sound wave and the perceptual quality each maps to.
2. Why are ITDs used for low frequencies and ILDs for high frequencies?
3. What is the cone of confusion, and how does the brain resolve it?
4. What is the precedence effect, and why does it matter in real rooms?
5. A person with normal hearing in one ear and no hearing in the other cannot tell where sounds come from. Explain why.
6. How do barn owls and bats demonstrate the same acoustic-cue principles used by humans?

<details>
<summary>Show answers</summary>

1. Frequency → pitch; amplitude (dB) → loudness; spectral composition (harmonics) → timbre; temporal structure (onsets, modulation) → rhythm, syllable identity, and event timing.
2. Low-frequency waves are long relative to the head, so they bend around it and reach both ears at nearly equal levels — but the arrival *time* difference is still measurable, so ITD works. High-frequency waves are short, so the head casts an effective acoustic shadow — the *level* difference is large, so ILD works.
3. The cone of confusion is the set of locations equidistant from the two ears that produce identical ITDs and ILDs, making front/back and up/down ambiguous. The brain resolves it using monaural pinna spectral cues (HRTF), learned from experience, plus small head movements that change the cues.
4. The precedence effect is the dominance of the first-arriving sound for localization, with later reflections suppressed. It matters because real rooms are full of echoes; without suppression, every reflected sound would compete and localization would be unreliable.
5. ITD and ILD both require comparing the two ears. With one deaf ear, no comparison signal exists, so azimuth localization is largely lost — loudness, pinna cues, and head movements can approximate location, but the left/right image collapses toward the hearing side.
6. Both use the same physical cues in exaggerated form: barn owls compute ITD for azimuth and ILD for elevation, building an explicit map of auditory space; bats read echo delay (distance) and Doppler shift (motion) — an active version of using sound timing and frequency cues.

</details>

## Related Topics

- Previous: [Chapter 6: Vision](../chapter-06-vision/README.md) — last topic: [Unsolved Questions in Visual Perception](../chapter-06-vision/06-unsolved-questions-in-visual-perception.md)
- Next: [How Does Acoustic Information Enter the Brain?](02-how-does-acoustic-information-enter-the-brain.md)
- Related: [Hearing and Balance chapter overview](../README.md)

## Source Notes

- Book: Introduction to Behavioral Neuroscience
- Local outline source: `introduction-behavioral-neuroscience.md`
- Official source URL: https://openstax.org/details/books/introduction-behavioral-neuroscience
- Content type: Original educational study guide based on OpenStax outline structure. Sound physics, localization cues (duplex theory, precedence effect), and comparative examples (barn owl, bat) reflect standard introductory neuroscience teaching; quantitative values (audible range, ITD magnitudes, cue crossover frequencies) are commonly taught reference values to verify against current texts.
- Last updated: 2026-08-16
