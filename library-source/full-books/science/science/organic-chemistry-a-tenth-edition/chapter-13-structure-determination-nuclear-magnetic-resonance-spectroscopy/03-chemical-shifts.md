---
title: "Chemical Shifts"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy"
topic_number: "3"
source: "organic-chemistry.md"
tags:
  - "chemical-shifts"
  - "science"
status: "complete"
---

# Chemical Shifts

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

A chemical shift is the position of an NMR absorption along the spectrum — a fingerprint of the electronic environment around the nucleus. In the spectrometer's magnetic field, the electrons around each nucleus circulate and generate a small induced field of their own. In most molecules that induced field opposes the applied field at the nucleus, so the nucleus experiences a slightly weaker effective field than \(B_0\). This is **shielding**: a shielded nucleus needs a slightly higher applied frequency to reach resonance, so its absorption appears "upfield" at a smaller chemical shift. Nearby electronegative atoms pull electron density away, **deshield** the nucleus, and move its absorption "downfield" to a larger shift.

Because every chemically distinct set of protons (and every distinct carbon) sits in a different electron cloud, each gives a peak at its own characteristic shift. Shifts are reported in parts per million (ppm) relative to **tetramethylsilane**, \((CH_3)_4Si\), assigned \(\delta = 0\). The ppm scale makes shifts independent of field strength: a proton at \(\delta = 3.5\) appears 1050 Hz from TMS on a 300 MHz instrument but 1750 Hz at 500 MHz — yet its chemical shift is 3.5 ppm in both.

## Why This Matters

- The chemical shift is the first structural information from any NMR spectrum: what kind of proton or carbon you are looking at (alkane, alkene, aromatic, aldehyde, and so on).
- With integration (how many H) and splitting (which H are neighbors), shifts let chemists assemble an unknown molecule's structure without other data.
- Pharmacists and QC chemists compare measured shifts with literature values to confirm a drug candidate is the intended compound, not an isomer or impurity.
- For exams, shift prediction is a guaranteed question type: given a structure, assign \(\delta\) values; given shifts, propose a structure.

## Core Concepts

### The reference standard: TMS

Tetramethylsilane, \((CH_3)_4Si\), is the universal zero of the shift scale (\(\delta = 0\)): its 12 protons are all equivalent (one sharp line), silicon is less electronegative than carbon so the methyl protons are more shielded than almost any other organic proton (far upfield edge of the scale), and it is inert, non-toxic, and volatile (bp 27 °C) — easy to add a drop and evaporate away. It never overlaps the region where most organic protons absorb.

### Shielding, deshielding, and the effective field

The electron cloud around a nucleus circulates in the applied field and produces an induced field \(\sigma B_0\) (shielding constant \(\sigma\)) opposing \(B_0\) at the nucleus:

\[ B_{\text{eff}} = B_0(1 - \sigma) \]

A more shielded nucleus (larger \(\sigma\)) experiences a smaller effective field and must be irradiated at a slightly higher frequency to satisfy \(\nu = \gamma B_{\text{eff}}/2\pi\) — it absorbs **upfield** (lower \(\delta\)). An electronegative substituent (O, N, Cl, Br, F) withdraws electron density through the \(\sigma\) bonds, lowers \(\sigma\), deshields the nucleus, and moves absorption **downfield** (higher \(\delta\)). The effect falls off with distance: chlorine on the same carbon deshields strongly, but two or three bonds away, much less.

### The ppm scale and field independence

The chemical shift is the frequency offset from the reference divided by the spectrometer frequency:

\[ \delta\ (\mathrm{ppm}) = \frac{\nu_{\text{sample}} - \nu_{\text{ref}}}{\nu_{\text{spectrometer}}} \times 10^6 \]

Dividing by the spectrometer frequency removes the field dependence, so the same proton has the same \(\delta\) on any instrument. What changes with field is the *Hz* separation: 1 ppm equals 300 Hz at 300 MHz but 500 Hz at 500 MHz (Worked Example 1). This is also why a multiplet spanning 7 Hz (a typical coupling constant) looks "tighter" in ppm as field increases — an idea that returns in the spin–spin splitting topic.

### What controls the magnitude of a shift

Four factors dominate (detailed in the next topic):

- **Electronegativity of nearby atoms** — inductive withdrawal deshields (e.g., \(CH_3\!-\!Cl\) protons \(\delta \approx 3.0\) vs. alkane \(CH_3\) \(\delta \approx 0.9\)).
- **Hybridization** — \(sp^2\)-bound protons (alkene \(\delta \approx 5\), aromatic \(\delta \approx 7\)) are more deshielded than \(sp^3\) protons because the more electronegative \(sp^2\) carbon holds less electron density on the hydrogen.
- **Magnetic anisotropy** — circulating \(\pi\) electrons create direction-dependent induced fields; aromatic ring currents strongly deshield protons on the ring edge (\(\delta\) 6.5–8.5).
- **Hydrogen bonding** — OH and NH protons are deshielded by H-bonding, so their shifts vary with concentration, temperature, and solvent (alcohol OH commonly \(\delta\) 0.5–5; carboxylic acid OH 10–12).

## ELI-10: Explain Like I'm 10

> Imagine each proton is a tiny compass needle floating in a crowd of electrons. The electrons act like a little shield that blocks part of the big magnet's pull, so a well-shielded proton "feels" a weaker magnet and needs a stronger nudge to flip. Protons near greedy atoms like oxygen or chlorine lose their electron shield, feel more of the magnet, and flip at a different spot on the spectrum. That spot — the chemical shift — is like the proton's home address, telling you what kind of neighborhood (functional group) it lives in.

## High-Yield Points

- Chemical shift \(\delta\) = position of an absorption relative to TMS (\(\delta = 0\)), reported in ppm.
- \(\delta = \frac{\nu_{\text{sample}} - \nu_{\text{ref}}}{\nu_{\text{spectrometer}}} \times 10^6\) — field-independent because the offset is normalized by the spectrometer frequency.
- Shielding (electron density) → upfield, smaller \(\delta\); deshielding (electronegative neighbors) → downfield, larger \(\delta\).
- \(B_{\text{eff}} = B_0(1 - \sigma)\); resonance requires \(\nu = \frac{\gamma B_{\text{eff}}}{2\pi}\).
- TMS: 12 equivalent, highly shielded protons; inert and volatile — the universal reference.
- 1 ppm = 300 Hz at 300 MHz and 500 Hz at 500 MHz: Hz offsets scale with field; ppm does not.
- Four main shift controllers: electronegativity, hybridization, \(\pi\)-system anisotropy, hydrogen bonding.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Chemical shift (\(\delta\)) | Position of an NMR absorption relative to TMS, in ppm | The primary structural readout of a spectrum |
| Shielding | Reduction of the effective field at a nucleus by its electrons | Shielded nuclei absorb upfield (smaller \(\delta\)) |
| Deshielding | Loss of electron density at a nucleus from electron-withdrawing groups | Deshielded nuclei absorb downfield (larger \(\delta\)) — the basis of shift trends |
| TMS | Tetramethylsilane, \((CH_3)_4Si\), the NMR reference at \(\delta = 0\) | Universal, inert, volatile standard every spectrum is measured against |
| Effective field (\(B_{\text{eff}}\)) | The actual field a nucleus experiences: \(B_0(1 - \sigma)\) | Sets the exact resonance frequency of each distinct nucleus |
| Upfield / downfield | Smaller \(\delta\) (shielded) / larger \(\delta\) (deshielded) | Standard vocabulary for where peaks sit and how they move |
| Magnetic anisotropy | Direction-dependent shielding from circulating \(\pi\) electrons | Explains aromatic (6.5–8.5), alkenyl, and alkynyl shifts beyond simple electronegativity |

## Worked Examples

### Example 1: Converting Hz to ppm, and ppm back to Hz at a different field

A proton absorbs 1050 Hz downfield of TMS on a 300 MHz instrument. (a) What is its chemical shift in ppm? (b) How many Hz downfield of TMS will it appear on a 500 MHz instrument?

**Part (a) — Write the defining formula:**

\[ \delta\ (\mathrm{ppm}) = \frac{\nu_{\text{sample}} - \nu_{\text{ref}}}{\nu_{\text{spectrometer}}} \times 10^6 \]

**Substitute** (\(300\ \mathrm{MHz} = 300 \times 10^6\ \mathrm{Hz}\)):

\[ \delta = \frac{1050\ \mathrm{Hz}}{300 \times 10^6\ \mathrm{Hz}} \times 10^6 = 3.50\ \mathrm{ppm} \]

**Part (b) — Rearrange to solve for the Hz offset:**

\[ \nu_{\text{sample}} - \nu_{\text{ref}} = \delta \times \nu_{\text{spectrometer}} \]

\[ \nu_{\text{sample}} - \nu_{\text{ref}} = 3.50 \times 500\ \mathrm{MHz} = 1750\ \mathrm{Hz} \]

**Interpretation:** the shift stayed 3.50 ppm, but the Hz offset grew from 1050 to 1750 Hz — in proportion to the field. Dimensional check: \(\mathrm{ppm} \times \mathrm{MHz} = 10^{-6} \times 10^6\ \mathrm{Hz} = \mathrm{Hz}\). ✓

### Example 2: Assigning shifts by shielding arguments

Rank the methyl protons of \(CH_4\), \(CH_3\!-\!Cl\), and \(CH_3\!-\!O\!-\!CH_3\) in order of expected chemical shift, and explain with shielding.

**Step 1 — State the trend.** Electronegativity of the atom attached to the methyl carbon: O (3.4) > Cl (3.2) > H (2.2). More electronegative substituent → more electron density withdrawn from the C–H bonds → more deshielding → larger \(\delta\).

**Step 2 — Apply it:** \(CH_3\!-\!O\!-\!CH_3\) (largest, \(\delta \approx 3.3\)) > \(CH_3\!-\!Cl\) (\(\delta \approx 3.0\)) > \(CH_4\) (smallest, \(\delta \approx 0.2\)).

**Step 3 — Sanity check:** methane absorbs near \(\delta\) 0.23, chloromethane near 3.05, dimethyl ether near 3.3 — matching the prediction.

### Example 3: How close are two peaks — Hz separation at a given field

Two signals sit at \(\delta\) 2.1 and \(\delta\) 3.6. How far apart (in Hz) are they on a 400 MHz instrument? Would the same peaks be easier to resolve at 600 MHz?

**Formula first:**

\[ \Delta\nu\ (\mathrm{Hz}) = \Delta\delta\ (\mathrm{ppm}) \times \nu_{\text{spectrometer}}\ (\mathrm{MHz}) \]

**Substitute:**

\[ \Delta\nu = (3.6 - 2.1) \times 400 = 1.5 \times 400 = 600\ \mathrm{Hz} \]

**Compare fields:** at 600 MHz, \(\Delta\nu = 1.5 \times 600 = 900\ \mathrm{Hz}\). The peaks stay 1.5 ppm apart, but the Hz gap — actual resolution — grows with field, which is why chemists pay for stronger magnets.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Chemical shift (ppm) | Frequency offset (Hz) | Shift is normalized by spectrometer frequency and field-independent; Hz offset scales with field |
| Upfield | Downfield | Upfield = smaller \(\delta\) = more shielded; downfield = larger \(\delta\) = more deshielded |
| Larger \(\delta\) = more shielded | Larger \(\delta\) = less shielded | Larger \(\delta\) means LESS shielding — a common exam trap |
| Shielding by electrons | Deshielding by electronegative atoms | Electron density shields (upfield); withdrawal by O, N, halogens deshields (downfield) |
| TMS reference peak | Solvent residual peak | TMS is added at \(\delta = 0\); residual \(CHCl_3\) in deuterated chloroform appears near \(\delta\) 7.26 |
| Chemical shift of a nucleus | Its coupling constant | Shift = position (ppm), from the electron environment; coupling = multiplet spacing (Hz), from neighbor spins |

## Quick Review

1. Define chemical shift and explain why the ppm scale is independent of spectrometer field strength.
2. Why is TMS assigned \(\delta = 0\), and what properties make it a good reference?
3. A signal is 780 Hz downfield of TMS on a 300 MHz instrument. What is its \(\delta\) in ppm, and where (in Hz) would it appear on a 600 MHz instrument?
4. Rank the expected shifts of the methyl protons in \(CH_3\!-\!CH_3\), \(CH_3\!-\!NH_2\), and \(CH_3\!-\!F\), and justify with shielding.
5. A proton at \(\delta\) 9.8 is typical of which functional group, and why is it so deshielded?
6. Two peaks are 0.35 ppm apart. How many Hz separate them at 500 MHz?

<details>
<summary>Show answers</summary>

1. \(\delta\ (\mathrm{ppm}) = \frac{\nu_{\text{sample}} - \nu_{\text{ref}}}{\nu_{\text{spectrometer}}} \times 10^6\). Dividing the Hz offset by the spectrometer frequency cancels the field dependence.
2. TMS has 12 equivalent, highly shielded protons (Si is less electronegative than C), giving one sharp line at the upfield edge of the scale; it is inert, non-toxic, and volatile (bp 27 °C).
3. \(\delta = \frac{780}{300} = 2.60\ \mathrm{ppm}\); at 600 MHz the same proton appears at \(2.60 \times 600 = 1560\ \mathrm{Hz}\) downfield.
4. \(CH_3\!-\!F\) (largest, \(\approx 4.3\)) > \(CH_3\!-\!NH_2\) (\(\approx 2.3\)) > \(CH_3\!-\!CH_3\) (\(\approx 0.9\)): F withdraws electron density most strongly, deshielding the methyl protons most.
5. Aldehyde protons (R–CHO) absorb near \(\delta\) 9–10: the carbonyl's electronegative oxygen plus \(\pi\)-system anisotropy deshield the proton strongly.
6. \(\Delta\nu = 0.35 \times 500 = 175\ \mathrm{Hz}\).

</details>

## Related Topics

- Previous: [The Nature of NMR Absorptions](02-the-nature-of-nmr-absorptions.md)
- Next: [Chemical Shifts in 1H NMR Spectroscopy](04-chemical-shifts-in-1h-nmr-spectroscopy.md)
- Related: [Chemical Shifts in 1H NMR Spectroscopy](04-chemical-shifts-in-1h-nmr-spectroscopy.md) — practical shift ranges and prediction for protons
- Related: [1H NMR Spectroscopy and Proton Equivalence](07-1h-nmr-spectroscopy-and-proton-equivalence.md) — why equivalent protons share one signal
- Related: [Uses of 1H NMR Spectroscopy](09-uses-of-1h-nmr-spectroscopy.md) — shifts in action for structure determination
- Related: [Structure Determination: Nuclear Magnetic Resonance Spectroscopy chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
