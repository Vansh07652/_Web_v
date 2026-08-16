---
title: "Interpreting Mass Spectra"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "12: Structure Determination: Mass Spectrometry and Infrared Spectroscopy"
topic_number: "2"
source: "organic-chemistry.md"
tags:
  - "interpreting-mass-spectra"
  - "science"
status: "complete"
---

# Interpreting Mass Spectra

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 12: Structure Determination: Mass Spectrometry and Infrared Spectroscopy](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

A mass spectrum is a puzzle with three kinds of clues. The **molecular ion** \(M^{+\bullet}\) tells you the molecular mass; the **isotope peaks** (M+1, M+2, and beyond) tell you how many carbons and whether chlorine, bromine, or sulfur is present; and the **fragment peaks** tell you what pieces broke off. Reading a spectrum is a systematic process: confirm the molecular ion, count the elements with the nitrogen rule and isotope ratios, compute the degrees of unsaturation, then match the fragment losses to structural features.

The rules of this game are surprisingly few. Even-electron species (cations with no unpaired electron) dominate fragmentation; neutral fragments are lost in small, recognizable units (15, 18, 28, 29, 31…); and the molecular ion must be an odd-electron radical cation. Once you can name what was lost, you can name what was there.

## Why This Matters

Interpreting a mass spectrum is how chemists confirm they made what they intended. If your reaction supposedly produced \(C_6H_{12}O\), the molecular ion should sit at \(m/z = 100\), not 86 — a mismatch means the reaction went somewhere unexpected. In forensic labs, matching a spectrum identifies drugs and poisons; in metabolomics, interpreting fragment patterns identifies thousands of compounds in a single blood sample. For coursework, spectrum interpretation is a guaranteed exam skill: given a spectrum and a molecular formula, you must defend a structure with the isotope ratios, the nitrogen rule, and the fragment losses.

## Core Concepts

### Step 1: Find the molecular ion

The molecular ion \(M^{+\bullet}\) is the peak at the **highest \(m/z\)** in a cluster — usually, though not always, the tallest peak of the highest cluster. Three checks confirm it:

- It must be an **odd-electron ion** (a radical cation). If a fragment were heavier than the molecule, that would be impossible.
- The **nitrogen rule**: a molecule with an *even* number of nitrogen atoms (including zero) has an even nominal molecular mass; a molecule with an *odd* number of nitrogens has an odd nominal mass. If the supposed molecular ion violates this, you have misidentified it — a common trap when the M⁺• peak is weak.
- The M+1 peak should be small (roughly 1.1% of M per carbon atom), and M+2 should be small unless Cl, Br, or S is present.

### Step 2: Count atoms with isotope ratios

The natural abundances of heavy isotopes create predictable satellite peaks:

- **\(^{13}\text{C}\) (1.1%):** each carbon contributes ~1.1% to the M+1 peak relative to M. So \(M+1/M \times 100 \approx 1.1 \times\) (number of carbons). Counting carbons this way works best for molecules with up to ~10 carbons.
- **\(^{37}\text{Cl}\) (24.2%):** one chlorine gives an M+2 peak about one-third the height of M (3:1 pattern).
- **\(^{81}\text{Br}\) (49.3%):** one bromine gives M and M+2 peaks of nearly equal height (1:1 pattern).
- **\(^{34}\text{S}\) (4.4%):** one sulfur adds ~4.4% to M+2.

For a compound containing *n* chlorines or bromines, the pattern is a binomial expansion: two chlorines give M : M+2 : M+4 in roughly 9 : 6 : 1.

### Step 3: Compute degrees of unsaturation

Given a formula \(C_aH_bN_cO_dX_e\) (X = halogen), the number of rings plus π bonds is:

\[ \text{DU} = a - \frac{b + e}{2} + \frac{c}{2} + 1 \]

Oxygen is ignored because it is divalent. A DU of 1 means one ring or one double bond; a DU of 4 with a formula that smells aromatic (e.g., \(C_6H_6\)) usually means a benzene ring. The DU must be a non-negative integer — if it is fractional or negative, the formula itself is wrong.

### Step 4: Read the fragment losses

Fragmentation of the radical cation produces an **even-electron cation** plus a **neutral fragment** (either a radical or a small stable molecule). Subtract the neutral fragment's mass from M to get the fragment ion's \(m/z\). Classic losses:

| Loss | Mass (Da) | What left |
|---|---|---|
| 15 | \(CH_3^\bullet\) | Methyl group |
| 18 | \(H_2O\) | Water (alcohols) |
| 28 | \(CO\) or \(C_2H_4\) | Carbon monoxide or ethylene |
| 29 | \(CHO^\bullet\) or \(C_2H_5^\bullet\) | Aldehyde H–C=O or ethyl group |
| 31 | \(CH_3O^\bullet\) or \(CH_2OH^\bullet\) | Methoxy or hydroxymethyl (alcohols/ethers) |
| 35/37 | \(Cl^\bullet\) | Chlorine atom |
| 79/81 | \(Br^\bullet\) | Bromine atom |
| 44 | \(CO_2\) | Carbon dioxide (carboxylic acids) |

A peak at M−18 immediately suggests an alcohol; M−35 with a 3:1 M:M+2 pattern says the molecule contains chlorine; a strong M−29 says ethyl or aldehyde. The most stable carbocation tends to win, so fragments cluster where a stable cation can form (e.g., \(m/z\) 43, 57, 71 for alkyl chains).

## ELI-10: Explain Like I'm 10

Imagine a toy castle made of blocks. The mass spectrum weighs the whole castle (that's the molecular ion) and then shows the weight of the biggest pile of blocks after it was smashed (the base peak). The tiny "extra weight" peaks tell you how many carbon blocks are in the castle, and the missing-block weights tell you which towers broke off. If the whole castle weighs an odd number of pounds, it must contain an odd number of "nitrogen blocks" — that's the nitrogen rule.

## High-Yield Points

- **Molecular ion = highest-m/z cluster; must be a radical cation; must obey the nitrogen rule.**
- **Nitrogen rule:** odd number of N atoms → odd nominal mass; even number (incl. 0) → even nominal mass.
- **M+1 ≈ 1.1% × (# carbons)** relative to M; used to estimate the carbon count.
- **Chlorine:** M : M+2 ≈ 3 : 1. **Bromine:** M : M+2 ≈ 1 : 1. Two halogens → binomial pattern (9:6:1 for two Cl).
- **Degrees of unsaturation:** \(\text{DU} = a - (b+e)/2 + c/2 + 1\) for \(C_aH_bN_cO_dX_e\); must be a non-negative integer.
- Fragment ions are **even-electron cations**; neutral losses are small molecules or radicals (15, 18, 28, 29, 31, 35, 44, 79…).
- The base peak is the most abundant fragment — usually the most stable cation, not the molecular ion.
- A weak or missing molecular ion is common for alcohols and branched alkanes; look for M−18 (alcohol) or M−15 (methyl loss).

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Molecular ion (\(M^{+\bullet}\)) | Intact molecule minus one electron; odd-electron radical cation | Gives the molecular mass and anchors the whole interpretation |
| Base peak | Most abundant ion, set to 100% | Usually the most stable fragment; not necessarily M⁺• |
| Nitrogen rule | Odd # of N → odd nominal mass; even # → even mass | Instantly checks whether a candidate molecular ion is plausible |
| M+1 peak | Peak one unit above M, mostly from \(^{13}\text{C}\) | Roughly 1.1% per carbon → carbon count |
| M+2 peak | Peak two units above M from \(^{37}\text{Cl}\), \(^{81}\text{Br}\), \(^{34}\text{S}\) | Fingerprints for Cl (3:1), Br (1:1), S (~4.4%) |
| Degrees of unsaturation (DU) | Number of rings + π bonds implied by the formula | Predicts double bonds/rings before any spectroscopy |
| Even-electron rule | Stable fragment ions have no unpaired electrons | Guides which fragment peaks are chemically sensible |
| Neutral loss | Mass difference between a fragment ion and its parent | Naming the loss (H₂O, CO, Cl•, CH₃•) reveals functional groups |
| Radical cation | Odd-electron positive ion (all molecular ions) | Only M⁺• is odd-electron; fragments are even-electron cations |
| Nominal mass | Molecular mass rounded to whole numbers | Used with the nitrogen rule for quick checks |

## Worked Examples

### Example 1: From spectrum to formula

A compound gives a molecular ion at \(m/z = 100\) (M), with M+1 = 6.6% of M and a tiny M+2. The mass is even, so the nitrogen rule says **zero or an even number of nitrogens** — try zero. Estimate carbons:

\[ \text{carbons} \approx \frac{M+1\ (\%)}{1.1} = \frac{6.6}{1.1} = 6 \]

**Formula first:** 6 carbons account for 72 Da, leaving \(100 - 72 = 28\) Da for the rest. Hydrogen + oxygen can fill that: \(C_6H_{12}O\) = 72 + 12 + 16 = 100 ✓.

**Verify with DU:**

\[ \text{DU} = 6 - \frac{12}{2} + \frac{0}{2} + 1 = 6 - 6 + 0 + 1 = 1 \]

One degree of unsaturation — one ring, one C=C, or one C=O. A strong M−18 peak (82) would confirm an alcohol, but M−18 is absent here; a peak at M−28 (72) would suggest CO loss from a ketone/aldehyde. The data point to a monounsaturated \(C_6H_{12}O\) — e.g., a ketone such as 3-hexanone — pending IR confirmation of the carbonyl.

### Example 2: The halogen fingerprint

A compound shows M at \(m/z = 122\) and an M+2 peak at 124 with **equal intensity** (~1:1). The even mass suggests no nitrogen. What is the formula?

**Interpret the isotope pattern:** 1:1 M:M+2 = one bromine atom (79 or 81 Da). Subtract Br from the nominal mass: \(122 - 79 = 43\). The remainder, 43 Da, must be \(C_3H_7\) (36 + 7 = 43). So the formula is \(C_3H_7Br\), bromopropane.

**Check the DU:**

\[ \text{DU} = 3 - \frac{7 + 1}{2} + 0 + 1 = 3 - 4 + 1 = 0 \]

Zero degrees of unsaturation — a saturated compound, consistent with bromopropane. The two isomers (1-bromopropane vs 2-bromopropane) would be distinguished by fragments: loss of \(CH_3^\bullet\) (M−15 = 107) is more favorable from the 2-isomer, giving a stronger m/z 107 peak.

### Example 3: Using M+1 to count carbons precisely

A molecule shows M at \(m/z = 86\) and M+1 at 5.7% of M. Estimate the carbon count.

**Formula first:** \( \text{carbons} \approx (M+1\%)/1.1 = 5.7/1.1 \approx 5.2 \).

**Interpret:** round to 5 carbons (predicted M+1 ≈ 5.5%; the small excess could come from a sulfur atom or measurement noise). With \(m/z = 86\): \(86 - 5(12) = 26\) Da remaining. The candidate formula \(C_5H_{10}O\) = 60 + 10 + 16 = 86 fits, with DU = \(5 - 10/2 + 1 = 1\) — one double bond or ring. The alternative \(C_6H_{14}\) (hexane, DU = 0) predicts M+1 ≈ 6.6%, higher than observed. **So M+1 points to \(C_5H_{10}O\)** — but it is an *estimate*: a high-resolution exact mass (86.0732 Da for C₅H₁₀O vs 86.1096 Da for C₆H₁₄) settles the question definitively. This example shows the limit of isotope ratios: they narrow the options, and exact mass picks the winner.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| M+1 from \(^{13}\text{C}\) | M+2 from \(^{37}\text{Cl}\)/\(^{81}\text{Br}\) | M+1 ≈ 1.1% per carbon (always present); M+2 large only with Cl, Br, or S |
| Nitrogen rule on nominal mass | Nitrogen rule on exact mass | The rule is about *nominal* (integer) masses; exact masses can be even or odd regardless |
| Odd number of nitrogens → even mass | Correct pairing | Odd N count → *odd* mass; even N count (incl. zero) → even mass |
| Base peak | Molecular ion | Base peak = most abundant (often a fragment); M⁺• = intact molecule at highest m/z |
| M−18 (water loss, alcohol) | M−17 (NH₃ loss, amine; or OH loss) | A difference of one mass unit — check for N by the nitrogen rule first |
| Degree of unsaturation = number of double bonds | Rings + double bonds | A ring counts as one DU; benzene counts as 4 (3 π + 1 ring) |
| DU for \(C_aH_bN_cO_dX_e\) ignoring O | Including O in the formula | Oxygen is divalent and drops out of the DU formula — do not add it in |

## Quick Review

1. A molecule has nominal mass 73. How many nitrogen atoms does it contain?
<details>
<summary>Answer</summary>
An odd nominal mass means an odd number of nitrogens (likely 1). With zero or two nitrogens the mass would be even.
</details>

2. A compound's M+1 peak is 6.6% of M. About how many carbons does it have?
<details>
<summary>Answer</summary>
6.6 / 1.1 = 6 carbons (each carbon contributes ~1.1% to M+1).
</details>

3. A spectrum shows M and M+2 in a 3:1 ratio. What element is present?
<details>
<summary>Answer</summary>
One chlorine atom: \(^{35}\text{Cl}\) (75.8%) vs \(^{37}\text{Cl}\) (24.2%) gives M : M+2 ≈ 3 : 1.
</details>

4. Compute the degrees of unsaturation for \(C_6H_6\).
<details>
<summary>Answer</summary>
DU = 6 − 6/2 + 0 + 1 = 4 — consistent with a benzene ring (3 double bonds + 1 ring).
</details>

5. Why is a fragment ion never a radical cation?
<details>
<summary>Answer</summary>
Fragmentation of the radical cation M⁺• splits it into an even-electron cation and a neutral fragment (radical or molecule); the charge stays on the even-electron species, which is more stable.
</details>

6. An alcohol often shows a strong M−18 peak. What was lost, and why?
<details>
<summary>Answer</summary>
Water (H₂O, 18 Da). Under electron impact, alcohols readily lose water — typically with a neighboring hydrogen — so the molecular ion is often weak and M−18 is diagnostic.
</details>

## Related Topics

- [Mass Spectrometry of Small Molecules: Magnetic-Sector Instruments](01-mass-spectrometry-of-small-molecules-magnetic-sector-instruments.md)
- [Mass Spectrometry of Some Common Functional Groups](03-mass-spectrometry-of-some-common-functional-groups.md)
- [Mass Spectrometry in Biological Chemistry: Time-of-Flight (TOF) Instruments](04-mass-spectrometry-in-biological-chemistry-time-of-flight-tof-instruments.md)
- [Spectroscopy and the Electromagnetic Spectrum](05-spectroscopy-and-the-electromagnetic-spectrum.md)
- [Interpreting Infrared Spectra](07-interpreting-infrared-spectra.md)
- [Chapter 12 README](../README.md)
