---
title: "Radioactive Decay"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "20: Nuclear Chemistry"
topic_number: "3"
source: "chemistry-atoms-first-2e.md"
tags:
  - "radioactive-decay"
  - "science"
status: "complete"
---

# Radioactive Decay

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 20: Nuclear Chemistry](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

**Radioactive decay** is the spontaneous transformation of an unstable nucleus. When a nucleus has too many neutrons relative to protons, too few, or simply too much internal energy, it reorganizes toward a more stable arrangement and the excess escapes as radiation — an alpha particle, a beta particle, a positron, or a gamma ray. No chemical trigger is needed; each unstable nuclide decays on its own schedule.

Although we cannot predict which individual atom decays next, a large collection decays with clockwork statistical regularity. The fraction remaining after a given time depends only on the isotope's **half-life** — the time for half of any sample to decay — and the mathematics is identical to first-order chemical kinetics. The same exponential equations that describe drug clearance from the body also describe carbon-14 leaving a dead organism.

## Why This Matters

Decay is the engine behind nearly every application in this chapter. A physician choosing a tracer isotope weighs half-life against imaging time; an archaeologist dates a bone by its remaining carbon-14; a regulator sets exposure limits based on how much and how fast radiation is emitted. On exams, decay problems test two connected skills: writing balanced nuclear equations and applying the exponential decay equations. Half-life arithmetic and unit conversions (becquerels and curies) pay off immediately in the topics that follow.

## Core Concepts

### Why some nuclei decay and others do not

Stable nuclei occupy a region of the neutron-versus-proton chart called the **belt of stability**. Light stable nuclei hold roughly equal numbers of protons and neutrons; heavier stable nuclei need extra neutrons to spread out proton repulsion, so their neutron-to-proton ratio rises above 1. A nucleus above the belt (too many neutrons) tends to undergo beta decay; one below it (too few neutrons) tends to undergo positron emission or electron capture; a very heavy nucleus may shed an alpha particle. Every element with more than 83 protons has only radioactive isotopes, and many lighter elements do too — carbon-14 is the classic example.

### The decay modes and what they change

- **Alpha decay**: a helium-4 nucleus, \(\ce{^{4}_{2}He}\), leaves the parent. The mass number drops by 4 and the atomic number by 2, moving the element two places left on the periodic table. Alpha particles are short-range — a sheet of paper or a few centimeters of air stops them — but they deposit intense energy along their path, which is why alpha emitters are hazardous when inhaled or ingested.
- **Beta-minus decay**: a neutron becomes a proton and emits an electron (the beta particle) plus an antineutrino. The atomic number rises by 1 and the mass number is unchanged. Beta particles penetrate farther than alpha but are stopped by a few millimeters of aluminum.
- **Positron emission and electron capture**: a proton becomes a neutron by emitting a positron, \(\ce{^{0}_{+1}e}\), or by capturing an inner-shell electron. Both lower \(Z\) by 1 with \(A\) unchanged.
- **Gamma emission**: an excited nucleus releases a high-energy photon, \(\ce{^{0}_{0}\gamma}\), changing neither \(A\) nor \(Z\). Gamma rays penetrate deeply and require dense shielding such as lead or concrete.

### Decay series

A decay often produces a daughter that is itself radioactive, so heavy nuclides travel stepwise down a **decay series** until a stable nucleus forms: uranium-238 decays through 14 steps (including the gas radon-222) to stable lead-206; uranium-235 ends at lead-207; thorium-232 at lead-208.

### Half-life and first-order kinetics

Radioactive decay is **first order**: the decay rate at any instant is proportional to the number of radioactive nuclei present. If \(N_0\) nuclei are present at time zero, the number remaining after time \(t\) is

\[
N_t = N_0 e^{-kt}
\]

where \(k\) is the **decay constant** (units of inverse time). Taking the natural logarithm gives the linear form used in calculations:

\[
\ln\left(\frac{N_t}{N_0}\right) = -kt
\]

The **half-life**, \(t_{1/2}\), is the time for half the nuclei to decay, and it relates to the decay constant by

\[
t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{k}
\]

Because half-life is constant, the fraction remaining after \(n\) half-lives is simply

\[
\frac{N_t}{N_0} = \left(\frac{1}{2}\right)^n
\]

After one half-life, half remains; after two, one quarter; after three, one eighth.

### Activity and its units

The **activity** of a sample is its decay rate, \(A = kN\), which decays exponentially just like \(N\):

\[
A_t = A_0 e^{-kt}
\]

The SI unit of activity is the **becquerel** (Bq), equal to one decay per second. The older **curie** (Ci) unit is still common in medicine, with the exact definition

\[
1\ \text{Ci} = 3.7 \times 10^{10}\ \text{Bq}
\]

Medical doses are usually stated in millicuries (mCi) or megabecquerels (MBq), with \(1\ \text{mCi} = 37\ \text{MBq}\).

## ELI-10: Explain Like I'm 10

> Radioactive atoms are like a jar full of bouncy balls, each with a hidden timer. We never know which ball pops next, but after one "half-life" about half have popped, after two half-lives only a quarter are left, and so on — the pattern is the same no matter how many balls you start with. Each popped ball is a new, smaller thing (a new element!), and the pop itself is the radiation.

## High-Yield Points

- Decay modes: alpha (\(A\) down 4, \(Z\) down 2); beta-minus (\(Z\) up 1, \(A\) unchanged); positron/electron capture (\(Z\) down 1, \(A\) unchanged); gamma (no change).
- First-order math: \(N_t = N_0 e^{-kt}\) and \(\ln(N_t/N_0) = -kt\).
- Half-life: \(t_{1/2} = 0.693/k\); after \(n\) half-lives the fraction remaining is \(1/2^n\).
- Activity \(A = kN\) is measured in Bq (decays/s) or Ci, with \(1\ \text{Ci} = 3.7 \times 10^{10}\ \text{Bq}\).
- Heavy nuclides decay in series (U-238 → ... → Pb-206, 14 steps).
- Alpha particles are short-range but intensely ionizing; gamma rays penetrate deeply.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| radioactive decay | Spontaneous emission of particles or photons from an unstable nucleus | The process behind dating, medicine, and nuclear power |
| half-life | Time for half of any sample of an isotope to decay | Predicts how long activity persists in samples, patients, and waste |
| decay constant \(k\) | First-order rate constant; \(k = 0.693/t_{1/2}\) | Connects half-life to the exponential decay equation |
| belt of stability | Region of the N-vs-Z chart where nuclei are stable | Predicts the decay mode an unstable nuclide will use |
| activity | Decay rate, \(A = kN\) | The measurable quantity reported in Bq or Ci |
| becquerel | One decay per second | The SI unit of activity |
| curie | \(3.7 \times 10^{10}\) decays per second | Traditional activity unit still used in medicine |
| decay series | Chain of decays from a heavy nuclide to a stable end product | Explains why uranium ore contains lead and radon |

## How It Works / Step-by-Step Process

1. Identify the nuclide's \(A\) and \(Z\), and locate it relative to the belt of stability.
2. Choose the decay mode: too heavy → alpha; too many neutrons → beta-minus; too few neutrons → positron emission or electron capture.
3. Write the balanced decay equation.
4. For time problems, write the exponential formula, substitute \(k\) (from \(t_{1/2}\) if needed), and solve for the unknown.
5. Sanity-check with the half-life shortcut: compare \(n = t/t_{1/2}\) with the result.

## Examples

### Example 1: Decay constant and remaining fraction for iodine-131

Iodine-131 has a half-life of 8.02 days. Find its decay constant using the formula before substituting:

\[
k = \frac{0.693}{t_{1/2}} = \frac{0.693}{8.02\ \text{days}} = 0.0864\ \text{days}^{-1}
\]

Find the fraction remaining after 24.06 days (three half-lives) using the linear form:

\[
\ln\left(\frac{N_t}{N_0}\right) = -kt = -(0.0864\ \text{days}^{-1})(24.06\ \text{days}) = -2.08
\]

Exponentiate both sides:

\[
\frac{N_t}{N_0} = e^{-2.08} = 0.125
\]

Exactly 12.5% remains. Sanity check: \(24.06/8.02 = 3\) half-lives, and \((1/2)^3 = 0.125\) — the exponential result matches the half-life shortcut.

### Example 2: Activity decay with unit conversion

A hospital prepares a 10 mCi dose of iodine-131. What activity remains after 32.08 days, in megabecquerels? First, \(32.08/8.02 = 4\) half-lives, so apply the shortcut:

\[
A_t = A_0\left(\frac{1}{2}\right)^n = 10\ \text{mCi}\left(\frac{1}{2}\right)^4 = 10\ \text{mCi} \times 0.0625 = 0.625\ \text{mCi}
\]

Convert to megabecquerels by dimensional analysis, using \(1\ \text{mCi} = 37\ \text{MBq}\):

\[
0.625\ \text{mCi} \times \frac{37\ \text{MBq}}{1\ \text{mCi}} = 23\ \text{MBq}
\]

After four half-lives the dose has fallen to about 23 MBq — a reminder that activity, not mass, changes with decay.

### Example 3: Carbon-14 dating a bone fragment

Living organisms maintain a roughly constant carbon-14 activity of about 15.3 decays per minute per gram of carbon; a bone fragment shows 3.82. The half-life of carbon-14 is 5730 years. Find the decay constant first:

\[
k = \frac{0.693}{t_{1/2}} = \frac{0.693}{5730\ \text{yr}} = 1.21 \times 10^{-4}\ \text{yr}^{-1}
\]

The activity ratio is \(3.82/15.3 = 0.250 = (1/2)^2\), so exactly two half-lives have elapsed:

\[
t = 2 \times 5730\ \text{yr} = 11,460\ \text{yr}
\]

The bone is roughly 11,500 years old. As a check, \(\ln(0.250) = -(1.21 \times 10^{-4}\ \text{yr}^{-1})t\) gives \(t = 11,460\ \text{yr}\) — the same answer within rounding.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Beta particle | Electron from the electron cloud | Beta particles are created inside the nucleus when a neutron converts to a proton |
| Half-life | Time until the sample is harmless | After one half-life exactly half remains; safety depends on type, energy, and dose, not just time |
| Positron | Proton or ordinary electron | A positron is an antielectron (charge +1); it annihilates on contact with an electron |
| Activity | Radioactive mass | Activity is a decay rate (Bq or Ci); the number of nuclei falls as activity falls, but the element's identity changes too |
| First-order decay | Zero-order or second-order decay | In first-order decay the rate is proportional to the number of nuclei present; half-life is constant, not dose-dependent |
| Alpha particle range | Alpha particle hazard | Alpha stops in paper or skin but is intensely damaging if an emitter is inhaled or ingested |

## Quick Review

1. Write the balanced equation for the alpha decay of thorium-230, \(\ce{^{230}_{90}Th}\).
2. A sample's activity falls from 1200 Bq to 150 Bq in 18 days. What is the half-life?
3. Why does beta-minus decay raise the atomic number by 1 while leaving the mass number unchanged?
4. Convert 0.25 mCi to becquerels.
5. Why is carbon-14 dating impractical for samples older than about 50,000 years?
6. What happens when a positron meets an electron, and why does it matter for PET imaging?

<details>
<summary>Show answers</summary>

1. \(\ce{^{230}_{90}Th -> ^{226}_{88}Ra + ^{4}_{2}He}\). Check: \(230 = 226 + 4\) and \(90 = 88 + 2\).
2. \(150/1200 = 0.125 = (1/2)^3\), so 18 days is three half-lives: \(t_{1/2} = 6\) days.
3. A neutron (charge 0) becomes a proton (charge +1) plus an electron (charge −1); the nucleon count \(A\) is unchanged while \(Z\) rises by 1.
4. \(0.25\ \text{mCi} \times (10^{-3}\ \text{Ci/mCi}) \times (3.7 \times 10^{10}\ \text{Bq/Ci}) = 9.25 \times 10^6\ \text{Bq}\) (about 9.3 MBq).
5. After about 50,000 years (roughly 8–9 half-lives), less than about 0.4% of the original carbon-14 remains, so measurement uncertainty swamps the signal.
6. The positron annihilates with an electron, converting both masses into two gamma photons traveling in opposite directions; PET scanners detect the paired photons to locate the tracer.

</details>

## Related Topics

- Previous: [Nuclear Equations](02-nuclear-equations.md)
- Next: [Transmutation and Nuclear Energy](04-transmutation-and-nuclear-energy.md)
- Related: [Nuclear Chemistry chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: carbon-14 half-life 5730 yr; iodine-131 half-life 8.02 days; modern carbon activity ≈15.3 decays/min/g; \(1\ \text{Ci} = 3.7 \times 10^{10}\ \text{Bq}\) (standard published values; activity figure is an approximate textbook value used for ratio calculations).
- Last updated: 2026-08-16
