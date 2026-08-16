---
title: "Spectroscopy of Carboxylic Acid Derivatives"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "21: Carboxylic Acid Derivatives: Nucleophilic Acyl Substitution Reactions"
topic_number: "10"
source: "organic-chemistry.md"
tags:
  - "spectroscopy-of-carboxylic-acid-derivatives"
  - "science"
status: "complete"
---

# Spectroscopy of Carboxylic Acid Derivatives

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 21: Carboxylic Acid Derivatives: Nucleophilic Acyl Substitution Reactions](../README.md)  
> **Topic:** 10  
> **Source structure:** OpenStax public textbook outline

## Overview

Spectroscopy is how chemists identify carboxylic acid derivatives — and, just as important, how they tell the derivatives apart. Infrared (IR) spectroscopy is the workhorse: the carbonyl (C=O) stretching band appears in a characteristic window for each derivative, its position set by how strongly the attached heteroatom donates electrons into the π system. Nuclear magnetic resonance (NMR) details the alkyl groups and N–H/O–H protons; mass spectrometry (MS) gives the molecular mass and fragments.

The central idea of this topic: the more resonance donation the carbonyl receives from its neighbor (N > O > S > Cl), the weaker the C=O bond and the lower its stretching frequency. Amides absorb near 1650–1690 cm⁻¹, esters near 1735–1750 cm⁻¹, and acid chlorides near 1800 cm⁻¹. Learn the pattern, not just the numbers, and you can assign any unknown.

## Why This Matters

- **Structure determination** is a core skill in research, pharmaceutical quality control, forensics, and natural-product chemistry — unknowns are solved by combining IR, NMR, and MS.
- **Isomer discrimination.** Acid derivatives with the same molecular formula (esters vs. acids vs. amides) are distinguished quickly by IR.
- **Exam relevance.** "Given the IR/NMR/MS data, identify the compound" problems are standard on organic chemistry exams.

## Core Concepts

### IR: the C=O stretching frequency as a fingerprint

Typical carbonyl stretching frequencies (cm⁻¹):

| Derivative | C=O stretch (cm⁻¹) | Notes |
|---|---|---|
| acid chloride | ~1795–1815 | Cl withdraws electrons, raising the frequency |
| anhydride | ~1810–1820 and ~1750–1760 | two bands (symmetric and antisymmetric) |
| ester | ~1735–1750 | lactones higher (ring strain) |
| carboxylic acid | ~1710–1720 | plus a very broad O–H band, 2500–3300 cm⁻¹ |
| thioester | ~1690–1710 | less resonance stabilization than an O-ester |
| amide | ~1650–1690 | amide I band; lowest of the common derivatives |

Trend: more resonance donation from the heteroatom lowers the C=O frequency. Nitrogen's lone pair donates most strongly, so amides absorb lowest; chlorine withdraws rather than donates, so acid chlorides absorb highest. Ring strain (β-lactams, lactones) raises the frequency.

### IR: N–H and O–H bands

- **Primary amides** (RCONH2) show TWO N–H stretching bands near 3300–3500 cm⁻¹ (symmetric and antisymmetric N–H stretches); **secondary amides** show one.
- **Carboxylic acids** show a very broad O–H band (2500–3300 cm⁻¹) from hydrogen bonding, overlapping the C–H region — a strong clue for an acid.

### ¹H NMR

- **Methyl esters:** OCH3 singlet near 3.6–3.8 ppm.
- **Amides:** N–CH3 singlet near 2.8–3.0 ppm; N–H protons appear 5–8 ppm as broad, exchangeable signals that vanish when D2O is added.
- **α-Hydrogens** next to the carbonyl appear 2.0–2.5 ppm; carboxylic acid O–H appears 10–12 ppm (broad).

### ¹³C NMR

Carbonyl carbons resonate from about 165 to 215 ppm, but the ranges overlap heavily: amides ~165–175, esters ~165–175, acids ~170–185, acid chlorides ~165–170, anhydrides ~165–170, thioesters ~190–200, and ketones/aldehydes ~195–215. Because of this overlap, ¹³C alone rarely identifies the derivative — pair it with IR.

### Mass spectrometry

- The molecular ion (M⁺) gives the molar mass; the nitrogen rule (an odd nominal mass implies an odd number of N) flags amides.
- **McLafferty rearrangement:** esters and amides with a γ-hydrogen on the alkyl chain rearrange to a characteristic fragment — e.g., methyl butanoate (M⁺ 102) gives a strong peak at m/z 74.

### A structure-elucidation workflow

1. Compute the degrees of unsaturation from the formula.
2. Use IR to identify the functional group (and any N–H/O–H).
3. Use ¹H NMR integrations and splitting to map the alkyl groups.
4. Count unique carbons in ¹³C NMR (watch for symmetry).
5. Confirm with MS (M⁺ and fragments), then assemble the structure.

## How It Works / Step-by-Step Process

Identifying an unknown acid derivative:

1. Record the IR spectrum; note the C=O frequency and any N–H or O–H bands.
2. Compare the C=O position against the derivative table to propose a class (amide ~1660, ester ~1740, acid ~1715 + broad O–H, etc.).
3. Check ¹H NMR for the signature signals (OCH3 ~3.7, NCH3 ~2.9, N–H 5–8 broad).
4. Use the molecular formula and MS to confirm the carbon count and functional group.
5. Assemble and verify the candidate structure against ALL data.

## Worked Examples

### Example 1: Converting a wavenumber to a wavelength

An ester's C=O stretch appears at \(\tilde{\nu} = 1735\ \text{cm}^{-1}\). Wavelength and wavenumber are related by:

\[
\lambda = \frac{1}{\tilde{\nu}}
\]

Substituting:

\[
\lambda = \frac{1}{1735\ \text{cm}^{-1}} = 5.76 \times 10^{-4}\ \text{cm}
\]

Convert to micrometers (1 cm = 10⁴ μm):

\[
\lambda = 5.76 \times 10^{-4}\ \text{cm} \times \frac{10^4\ \mu\text{m}}{1\ \text{cm}} = 5.76\ \mu\text{m}
\]

An amide C=O at 1665 cm⁻¹ gives λ = 1/1665 cm⁻¹ = 6.01 μm — a longer wavelength, consistent with the weaker amide carbonyl.

### Example 2: Identifying an unknown ester

An unknown has formula C5H10O2, a strong IR band at 1740 cm⁻¹, ¹H NMR signals at 0.94 (t, 3H), 1.65 (m, 2H), 2.28 (t, 2H), and 3.67 (s, 3H), and MS: M⁺ = 102 with a strong peak at m/z 74.

Step 1 — degrees of unsaturation:

\[
\text{DBE} = C - \frac{H}{2} + \frac{N}{2} + 1 = 5 - \frac{10}{2} + 0 + 1 = 1
\]

One degree of unsaturation fits a single carbonyl, no ring or alkene.

Step 2 — IR 1740 cm⁻¹ with no broad O–H and no N–H bands: an ester, not an acid or amide.

Step 3 — ¹H NMR: the 3H singlet at 3.67 ppm is the classic OCH3 of a methyl ester; triplet 0.94 (3H), multiplet 1.65 (2H), and triplet 2.28 (2H) describe a CH3CH2CH2– chain (the 2.28 triplet is the CH2 next to C=O).

Step 4 — MS: M⁺ = 102 matches C5H10O2; the m/z 74 peak is the McLafferty fragment, which requires a γ-hydrogen — present on the butyl chain.

Answer: methyl butanoate, CH3CH2CH2COOCH3.

## ELI-10: Explain Like I'm 10

> Spectrometers are like detectives' tools. IR tells you what kind of clip holds the molecule together — each clip has its own "voice": amide clips sing low (near 1660), ester clips mid (near 1740), acid-chloride clips high (near 1800). NMR counts the different neighborhoods of hydrogen atoms, and the mass spectrometer weighs the molecule and its broken pieces. Together they name a molecule without seeing it.

## High-Yield Points

- C=O IR (cm⁻¹, typical): acid chloride ~1800 > anhydride ~1820/1760 > ester ~1740 > acid ~1715 > thioester ~1700 > amide ~1660.
- Two C=O bands = anhydride; two N–H bands = primary amide; very broad O–H (2500–3300) = carboxylic acid.
- ¹H NMR: OCH3 ~3.6–3.8 (esters); NCH3 ~2.8–3.0 (amides); N–H 5–8 ppm broad, D2O-exchangeable; acid O–H 10–12 ppm.
- ¹³C carbonyls overlap heavily (165–215 ppm) — use IR, not ¹³C alone, to assign the derivative.
- McLafferty rearrangement requires a γ-hydrogen (n-propyl or longer chain).

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| wavenumber (cm⁻¹) | Frequency unit for IR light, proportional to energy | The standard scale for IR spectra; C=O positions are quoted in cm⁻¹ |
| C=O stretching band | IR absorption from the carbonyl bond vibration | Its position identifies the derivative class |
| amide I band | The strong C=O stretch of amides (~1650–1690 cm⁻¹) | Lowest common derivative C=O, from strong N resonance |
| McLafferty rearrangement | MS fragmentation of carbonyl compounds with a γ-H | Produces diagnostic fragment ions (e.g., m/z 74 for methyl butanoate) |
| degrees of unsaturation (DBE) | Number of rings plus π bonds from the formula | Filters structural possibilities before spectroscopy |
| D2O exchange | Adding heavy water removes N–H/O–H NMR signals | Confirms exchangeable protons (amides, acids) |
| nitrogen rule | Odd nominal molecular mass implies odd number of N | Flags amides/nitriles in MS interpretation |

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| "C=O is always near 1700 cm⁻¹" | Derivative-dependent positions | The C=O range spans ~1650–1820 cm⁻¹; amides and acid chlorides differ by ~150 cm⁻¹. |
| Amide C=O lower than ketone | A weak or absent carbonyl | The amide C=O is strong; it is simply lower in frequency because of N resonance donation. |
| One N–H band | Two N–H bands | Primary amides show two (symmetric/antisymmetric); secondary amides show one. |
| ¹³C carbonyl shift alone | IR data | ¹³C carbonyl ranges overlap heavily; IR is the reliable derivative discriminator. |
| McLafferty fragment in any ester | Only with a γ-H | Methyl propanoate (no γ-H) gives no McLafferty peak; methyl butanoate (γ-H present) does. |

## Quick Review

1. Order acid chloride, ester, amide, and acid by decreasing C=O stretching frequency.
2. Why does the amide C=O absorb at lower frequency than the ester C=O?
3. What IR features distinguish a carboxylic acid from a primary amide?
4. Compute the degrees of unsaturation for C5H10O2.
5. What structural requirement must a methyl ester meet to show a McLafferty rearrangement in its mass spectrum?

<details>
<summary>Show answers</summary>

1. Acid chloride (~1800) > ester (~1740) > acid (~1715) > amide (~1660). (Anhydrides show two bands, ~1820 and ~1760.)
2. The nitrogen lone pair donates into the carbonyl π system more effectively than the ester oxygen's lone pair, weakening the C=O bond and lowering its stretching frequency.
3. The acid shows a very broad O–H band (2500–3300 cm⁻¹); the primary amide shows two N–H bands (~3300–3500 cm⁻¹) and no broad O–H.
4. DBE = 5 − 10/2 + 0 + 1 = 1 — one carbonyl, no ring or alkene.
5. A γ-hydrogen on the alkyl chain (e.g., an n-propyl or longer group), which migrates in the rearrangement; methyl butanoate shows m/z 74, methyl propanoate does not.
</details>

## Related Topics

- Previous: [Polyamides and Polyesters: Step-Growth Polymers](09-polyamides-and-polyesters-step-growth-polymers.md)
- Next: End of chapter
- Related: [Spectroscopy of Carboxylic Acids and Nitriles](../../chapter-20-carboxylic-acids-and-nitriles/08-spectroscopy-of-carboxylic-acids-and-nitriles.md)
- Related: [Structure Determination: Nuclear Magnetic Resonance Spectroscopy chapter overview](../../chapter-13-structure-determination-nuclear-magnetic-resonance-spectroscopy/README.md)
- Related: [Carboxylic Acid Derivatives: Nucleophilic Acyl Substitution Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- IR frequencies, NMR shifts, and the DBE formula are standard textbook ranges.
- Last updated: 2026-08-16
