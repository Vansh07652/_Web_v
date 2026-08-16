---
title: "Spectroscopy of Amines"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "24: Amines and Heterocycles"
topic_number: "10"
source: "organic-chemistry.md"
tags:
  - "spectroscopy-of-amines"
  - "science"
status: "complete"
---

# Spectroscopy of Amines

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 24: Amines and Heterocycles](../README.md)  
> **Topic:** 10  
> **Source structure:** OpenStax public textbook outline

## Overview

Spectroscopy is how chemists learn a molecule's structure without breaking it apart. For amines, four techniques work together, and each answers a different question:

- **Infrared (IR) spectroscopy:** *"is there an N–H bond, and how many?"* The number of N–H stretching bands reveals whether the amine is primary, secondary, or tertiary.
- **¹H NMR spectroscopy:** *"where are the hydrogens?"* The N–H proton is a broad, exchangeable signal; α-protons appear downfield of ordinary alkanes.
- **¹³C NMR spectroscopy:** *"what is the carbon skeleton?"* Carbons attached to nitrogen appear at 30–60 ppm.
- **Mass spectrometry (MS):** *"what is the molecular mass and formula?"* The **odd-nitrogen rule** flags nitrogen, and **α-cleavage** gives a diagnostic fragment ion.

The classic exam task — "given a formula and spectra, deduce the structure" — is these four questions asked in order.

## Why This Matters

Most pharmaceutical drugs are amines; spectroscopy confirms that the right amine was made, detects impurities, and identifies unknowns in forensics and metabolomics. In industry, a new drug candidate's structure is verified with exactly these techniques; in research, unknown natural products are solved the same way. IR alone can tell a chemist whether a reaction "worked" (the N–H bands appear or disappear), and the odd-nitrogen rule instantly tests a formula for nitrogen. These are everyday, transferable skills — and a reliable source of exam problems.

## Core Concepts

### Infrared: count the N–H bands

The N–H stretch appears around 3300–3500 cm⁻¹, and its multiplicity reports the amine class:

- **Primary amine** (\(\text{RNH}_2\)): **two** bands near 3350 and 3280 cm⁻¹ (asymmetric and symmetric stretches).
- **Secondary amine** (\(\text{R}_2\text{NH}\)): **one** band near 3300 cm⁻¹.
- **Tertiary amine** (\(\text{R}_3\text{N}\)): **no** N–H stretch at all.

Supporting signals: the N–H bend near 1580–1650 cm⁻¹ and the C–N stretch near 1020–1250 cm⁻¹. Do not confuse N–H with O–H: O–H is very broad and intense (hydrogen bonding); N–H is narrower, and only amines show the two-vs-one band pattern.

### ¹H NMR: the exchangeable N–H and the α-protons

Three features identify an amine:

- **The N–H proton:** a broad singlet whose chemical shift wanders from ~0.5 to 5 ppm depending on concentration, solvent, and temperature. It is **exchangeable**: shaking the sample with D₂O replaces N–H with N–D, and the signal disappears — a positive test for an N–H (or O–H) proton.
- **Protons on α-carbons** (adjacent to nitrogen) are deshielded: \(\text{N–CH}_3\) ≈ 2.2–2.3 ppm, \(\text{N–CH}_2\) ≈ 2.4–2.6, \(\text{N–CH}\) ≈ 2.6–3.1. These are the most reliable landmarks.
- **Coupling to N–H is often absent:** fast exchange means N–H usually neither splits nor is split — an ethyl group on nitrogen still looks like a clean triplet + quartet.

### ¹³C NMR: carbons next to nitrogen

Nitrogen deshields attached carbons by ~20–40 ppm relative to alkanes: \(\text{N–CH}_3\) ≈ 30 ppm, \(\text{N–CH}_2\) ≈ 44, \(\text{N–CH}\) ≈ 50. A carbon at 40–60 ppm with no attached oxygen strongly suggests C–N.

### Mass spectrometry: the odd-nitrogen rule and α-cleavage

Two rules do most of the work:

- **Odd-nitrogen rule:** a molecule with an *odd* number of nitrogen atoms has an *odd* nominal (integer) molecular mass. Nitrogen's most abundant isotope has nominal mass 14 but forms three bonds, so each nitrogen flips the mass's parity.
- **α-Cleavage:** the bond between the α-carbon and nitrogen breaks, giving a resonance-stabilized **iminium ion**. For a primary amine the fragment is \(\text{CH}_2=\text{NH}_2^+\), **m/z 30**, often the base peak; each carbon added to the chain shifts the fragment by 14 (e.g., \(\text{CH}_3\text{CH}=\text{NH}_2^+\) at m/z 44).

Together with the molecular ion, these fragments let you reconstruct the alkyl groups on the nitrogen.

## ELI-10: Explain Like I'm 10

> Think of spectroscopy as giving a molecule a fingerprint test. IR counts how many "arms" (N–H bonds) the nitrogen is holding — two arms means primary, one means secondary, none means tertiary. NMR reads the molecule's "name tag," showing where its hydrogen and carbon atoms sit. Mass spectrometry weighs the molecule and snaps it in half to show what pieces it was built from — an odd weight means a nitrogen is hiding inside.

## High-Yield Points

- IR: primary = **two** N–H bands (~3350, ~3280 cm⁻¹); secondary = **one** (~3300); tertiary = **none**.
- ¹H NMR: N–H is broad, 0.5–5 ppm, disappears on D₂O shake; α-protons at 2.2–3.1 ppm are the landmarks.
- ¹³C NMR: N–CH₃ ≈ 30, N–CH₂ ≈ 44, N–CH ≈ 50 ppm.
- MS: odd nominal molecular mass ⇔ odd number of nitrogens; α-cleavage gives \(\text{CH}_2=\text{NH}_2^+\) at m/z 30 (primary amines).
- Degrees of unsaturation: \(\text{DOU} = (2\text{C} + 2 + \text{N} - \text{H} - \text{X})/2\) — nitrogen adds one to the numerator.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| IR stretch | A bond vibration absorbing infrared light at a characteristic frequency | N–H stretch multiplicity identifies the amine class (1°, 2°, 3°) |
| α-proton | A hydrogen on the carbon directly attached to nitrogen | Appears at 2.2–3.1 ppm, the main ¹H NMR landmark for amines |
| odd-nitrogen rule | Odd number of N ⇒ odd nominal molecular mass | Instantly tests whether nitrogen is present |
| α-cleavage | Fragmentation of the C–N bond next to the nitrogen | Produces the diagnostic iminium ion, m/z 30 for primary amines |
| iminium ion | A C=N⁺ fragment such as \(\text{CH}_2=\text{NH}_2^+\) | Resonance-stabilized; often the base peak in amine mass spectra |

## How It Works / Step-by-Step Process

To solve an unknown amine structure:

1. **Get the formula.** Compute DOU: \((2\text{C} + 2 + \text{N} - \text{H} - \text{X})/2\). Zero means a saturated, acyclic amine.
2. **Apply the odd-nitrogen rule** to confirm the nitrogen count; record the molecular ion mass from MS.
3. **Read the IR:** two N–H bands = primary, one = secondary, none = tertiary.
4. **Read the ¹H NMR:** find α-protons (2.2–3.1 ppm), count them by integration, and check whether an N–H signal disappears on D₂O shake.
5. **Check MS fragments:** m/z 30 (or 44, 58…) sizes the alkyl groups lost from nitrogen.

## Worked Examples

### Example 1: Degrees of unsaturation and the odd-nitrogen rule for C₃H₉N

Compute DOU:

\[
\text{DOU} = \frac{2\text{C} + 2 + \text{N} - \text{H} - \text{X}}{2} = \frac{2(3) + 2 + 1 - 9 - 0}{2} = \frac{0}{2} = 0
\]

The molecule is saturated and acyclic — it must be a propylamine isomer. Nominal mass:

\[
M = 3(12) + 9(1) + 1(14) = 59
\]

Odd, as the rule requires for one nitrogen. IR shows two N–H bands (primary); ¹H NMR has a triplet at 0.9 ppm (3H), a sextet at 1.5 ppm (2H), a triplet at 2.6 ppm (2H, N–CH₂), and a broad 2H signal that vanishes with D₂O (NH₂). Structure: propan-1-amine; α-cleavage gives \(\text{CH}_2=\text{NH}_2^+\) at m/z 30.

### Example 2: IR and MS distinguish three isomers of C₄H₁₁N

The isomers butan-1-amine, diethylamine, and N,N-dimethylethanamine share the formula \(\text{C}_4\text{H}_{11}\text{N}\). IR decides: primary shows **two** N–H stretches, secondary **one**, tertiary **none**. MS agrees: α-cleavage gives m/z 30 for the primary amine, m/z 44 (loss of ethyl) for the secondary, and m/z 58 (loss of methyl) for the tertiary.

### Example 3: Exact mass of a drug-like amine

Ethylamine, \(\text{C}_2\text{H}_7\text{N}\), with exact atomic masses C = 12.000, H = 1.00783, N = 14.00307:

\[
M = 2(12.000) + 7(1.00783) + 1(14.00307) = 24.000 + 7.0548 + 14.0031 = 45.058
\]

Nominal mass is 45 (odd). Exact mass distinguishes \(\text{C}_2\text{H}_7\text{N}\) (45.058) from \(\text{CHO}_2\) (45.000) — same nominal mass, different formula, resolved only by exact measurement.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| N–H stretch | O–H stretch | Both near 3300 cm⁻¹, but O–H is very broad and intense; N–H is narrower, and primary amines show *two* bands |
| "The N–H proton always splits neighbors" | Ordinary coupling | Fast exchange usually kills N–H coupling — expect broad singlets and clean α-protons |
| "Tertiary amines show an N–H band" | 1°/2° amine spectra | Tertiary amines have no N–H bond and no N–H stretch |
| ¹³C shift of N–C vs O–C | Both deshielded carbons | O–CH₃ ≈ 50 and O–CH₂ ≈ 60 ppm sit *further* downfield than N–CH₃ (≈ 30) and N–CH₂ (≈ 44) |
| m/z 30 vs m/z 44 fragments | Any primary amine | m/z 30 (\(\text{CH}_2=\text{NH}_2^+\)) comes from any primary amine; m/z 44 implies an ethyl substituent |

## Quick Review

1. How many N–H IR bands do primary, secondary, and tertiary amines each show?
2. What happens to the N–H proton signal when a sample is shaken with D₂O, and why?
3. Apply the odd-nitrogen rule to C₅H₁₁N: is the nominal mass odd or even, and what does that imply?
4. What fragment ion appears at m/z 30 for a primary amine, and how is it formed?
5. Compute the DOU for C₄H₁₁N and interpret the result.

<details>
<summary>Show answers</summary>

1. Primary: two bands (~3350 and ~3280 cm⁻¹); secondary: one (~3300 cm⁻¹); tertiary: none.
2. The N–H proton exchanges with deuterium from D₂O, becoming N–D; the ¹H signal disappears, confirming an exchangeable N–H (or O–H) proton.
3. Nominal mass = 5(12) + 11(1) + 14 = 85, odd — consistent with exactly one nitrogen.
4. The iminium ion \(\text{CH}_2=\text{NH}_2^+\) (m/z 30), formed by α-cleavage: the C–N bond breaks and the charge is stabilized by resonance on nitrogen.
5. DOU = [2(4) + 2 + 1 − 11]/2 = 0: saturated and acyclic — an open-chain amine.

</details>

## Related Topics

- Previous: [Heterocyclic Amines](09-heterocyclic-amines.md)
- Next: End of chapter
- Related: [Reactions of Amines](07-reactions-of-amines.md)
- Related: [Structure Determination: Mass Spectrometry and Infrared Spectroscopy](../../chapter-12-structure-determination-mass-spectrometry-and-infrared-spectroscopy/README.md)
- Related: [Structure Determination: Nuclear Magnetic Resonance Spectroscopy](../../chapter-13-structure-determination-nuclear-magnetic-resonance-spectroscopy/README.md)
- Related: [Amines and Heterocycles chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- IR frequencies (N–H 3300–3500 cm⁻¹, N–H bend 1580–1650 cm⁻¹, C–N 1020–1250 cm⁻¹), NMR shifts (N–CH₃ ≈ 30 ppm ¹³C, α-protons 2.2–3.1 ppm ¹H), and exact atomic masses (¹H 1.00783, ¹²C 12.000, ¹⁴N 14.00307) are standard literature values.
- General laboratory principles only; no specific experimental procedures are given.
- Last updated: 2026-08-16
