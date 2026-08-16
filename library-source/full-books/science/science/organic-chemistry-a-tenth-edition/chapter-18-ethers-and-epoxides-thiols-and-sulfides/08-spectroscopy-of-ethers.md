---
title: "Spectroscopy of Ethers"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "18: Ethers and Epoxides; Thiols and Sulfides"
topic_number: "8"
source: "organic-chemistry.md"
tags:
  - "spectroscopy-of-ethers"
  - "science"
status: "complete"
---

# Spectroscopy of Ethers

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 18: Ethers and Epoxides; Thiols and Sulfides](../README.md)  
> **Topic:** 8  
> **Source structure:** OpenStax public textbook outline

## Overview

Ethers are the quiet functional group of spectroscopy: strong infrared signals in a busy fingerprint region, ordinary-looking NMR peaks. The key to identifying an ether is a **pattern of absences and shifts** more than a single "ether peak". In the infrared, every ether shows a strong C–O stretch near 1050–1150 cm⁻¹ (aryl alkyl ethers near 1240–1260 cm⁻¹), but the decisive evidence is the *absence* of a broad O–H stretch. In \( ^1\mathrm{H} \) NMR, protons on carbons attached to oxygen appear at about 3.2–4.0 ppm, and the oxygen-bearing carbons appear at roughly 55–75 ppm in \( ^{13}\mathrm{C} \) NMR — well downfield of ordinary alkyl carbons. This topic builds the interpretive workflow: IR to rule out alcohols, NMR shifts and integration to locate the O–C bonds, mass spectrometry's α-cleavage fragments to confirm the structure.

## Why This Matters

Spectroscopy is how chemists identify the products of every reaction in this book. After any reaction meant to make an ether, the first question is "did I make it?" IR answers in minutes (new C–O, no O–H); NMR confirms quantitatively. Ethers are ubiquitous in polymers (PEG), anesthetics (fluorinated ethers like sevoflurane), and solvents (THF, dioxane), so recognizing their signature is a day-one skill. On exams, the most tested contrast is **ether vs. alcohol**, and the answer usually hangs on the O–H region of the IR spectrum.

## Core Concepts

### Infrared spectroscopy: the C–O stretch and the missing O–H

The C–O bond stretches strongly because its dipole changes dramatically during vibration. Aliphatic ethers absorb near 1050–1150 cm⁻¹ (diethyl ether ≈ 1120 cm⁻¹); aryl alkyl ethers such as anisole (`C6H5OCH3`) shift to ≈ 1240–1260 cm⁻¹ (partial double-bond character in the aryl C–O bond). Two companion observations close it:

- **No broad O–H band** at 3200–3600 cm⁻¹: this separates an ether from an isomeric alcohol — ethanol and dimethyl ether share the formula \( \mathrm{C_2H_6O} \), but only ethanol shows the broad O–H stretch.
- **C–H stretches** at 2850–3000 cm⁻¹ plus C–O confirm a saturated oxygen compound with no O–H and no C=O (nothing near 1700 cm⁻¹).

Epoxides are the exception: ring strain changes the C–O vibrations, adding bands near 1250 and 850–950 cm⁻¹.

### \( ^1\mathrm{H} \) NMR: protons next to oxygen

Oxygen deshields nearby protons: O–CH\(_3\) appears at about 3.2–3.4 ppm (methyl *tert*-butyl ether: 3.2 ppm singlet), O–CH\(_2\) at 3.4–3.7 ppm (diethyl ether: 3.4 ppm quartet), and O–CH at 3.5–4.0 ppm. Diethyl ether's full spectrum is a teaching classic: a 6H triplet near 1.2 ppm and a 4H quartet near 3.4 ppm. Epoxide ring protons are the oddity: they appear *upfield* at 2.5–3.0 ppm because ring strain leaves the C–H bonds with less s-character, counteracting oxygen's deshielding. The absence of an exchangeable O–H proton (variable 0.5–5 ppm, gone after a D\(_2\)O shake) again distinguishes ethers from alcohols.

### \( ^{13}\mathrm{C} \) NMR: the oxygen-bearing carbon

The carbon directly bonded to oxygen shifts downfield ~40 ppm versus an alkane: O–CH\(_3\) near 55–60 ppm (anisole: 55), O–CH\(_2\) near 60–75 ppm (diethyl ether: 66, THF: 68), epoxide carbons near 45–60 ppm. DEPT-135 confirms proton counts: O–CH\(_2\) appears negative while O–CH and O–CH\(_3\) stay positive — a quick hydrogen count on the oxygen-bearing carbon.

### Mass spectrometry: α-cleavage next to oxygen

The radical cation fragments by breaking the C–C bond **α to oxygen**, because the resulting cation is stabilized by oxygen's lone pairs — an **oxonium ion**. Methyl ethers give \( \mathrm{CH_3OCH_2^+} \) at \( m/z = 45 \); diethyl ether (M⁺ = 74) loses a methyl radical to give \( \mathrm{CH_3CH_2O{=}CH_2^+} \) at \( m/z = 59 \). 

### Interpretive workflow

1. **Formula first.** Compute the degrees of unsaturation: \( \mathrm{DBE} = (2C + 2 + N - H - X)/2 \). A saturated acyclic ether gives DBE = 0.
2. **IR.** Find C–O (1050–1150 cm⁻¹); confirm no O–H (3200–3600 cm⁻¹), no C=O (~1700 cm⁻¹).
3. **\( ^1\mathrm{H} \) NMR.** Find signals at 3.2–4.0 ppm; use integration and splitting to count O–CH\(_n\) groups.
4. **\( ^{13}\mathrm{C} \) NMR.** Confirm carbons at 55–75 ppm.
5. **MS.** Check for the α-cleavage oxonium fragment.

## ELI-10: Explain Like I'm 10

Ethers are like quiet students — you notice them by what they don't do. They never "shout" an O–H band in the infrared, so a missing broad signal tells you they're not alcohols. Their voice is a C–O stretch near 1100 cm⁻¹, and protons next to oxygen speak at 3–4 ppm in NMR. Put the clues together and you can name the molecule without seeing it.

## High-Yield Points

- Ether IR signature: strong C–O stretch 1050–1150 cm⁻¹ (aryl alkyl ≈ 1240–1260 cm⁻¹); key negative evidence: **no broad O–H band** at 3200–3600 cm⁻¹.
- \( ^1\mathrm{H} \) NMR: O–CH\(_3\) ≈ 3.2–3.4 ppm; O–CH\(_2\) ≈ 3.4–3.7 ppm; O–CH ≈ 3.5–4.0 ppm; epoxide protons anomalously upfield (≈ 2.5–3.0 ppm).
- \( ^{13}\mathrm{C} \) NMR: O–C carbons ≈ 55–75 ppm (anisole OCH\(_3\) = 55; diethyl ether CH\(_2\) = 66).
- MS: α-cleavage gives oxonium ions — \( m/z \) 45 (\( \mathrm{CH_3OCH_2^+} \)) for methyl ethers.
- Isomer test: ethanol vs dimethyl ether differ by IR (O–H band) and by NMR (OH proton, lost on D\(_2\)O shake, vs two singlets).
- Saturated ethers give DBE = 0.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| C–O stretch | An IR absorption near 1050–1150 cm⁻¹ from the vibrating C–O bond | The main positive IR evidence for an ether |
| O–H stretch | A broad IR absorption at 3200–3600 cm⁻¹ from an alcohol/phenol O–H | Its *absence* is the decisive ether-vs-alcohol test |
| Deshielding | Oxygen pulls electron density from nearby protons, moving their NMR signals downfield | Explains why O–CH\(_n\) protons sit at 3.2–4.0 ppm |
| Oxonium ion | A positively charged oxygen cation, e.g., \( \mathrm{CH_3OCH_2^+} \) | The stable fragment from α-cleavage in mass spectrometry |
| α-Cleavage | Fragmentation of the C–C bond adjacent to the oxygen-bearing carbon | The dominant MS pathway for ethers, giving diagnostic \( m/z \) values |
| DEPT-135 | A \( ^{13}\mathrm{C} \) NMR experiment distinguishing CH, CH\(_2\), CH\(_3\) carbons | Quickly tells how many hydrogens sit on the oxygen-bearing carbon |

## Worked Examples

### Example 1: Two isomers, one formula — ethanol vs dimethyl ether

**Problem.** A compound has the formula \( \mathrm{C_2H_6O} \). Its IR shows a strong band at 1120 cm⁻¹ and *no* broad band at 3200–3600 cm⁻¹. Its \( ^1\mathrm{H} \) NMR shows only two singlets: 3H at 3.2 ppm and 9H at 1.2 ppm. Identify it.

**Step 1 — formula.** Degrees of unsaturation:

\[ \mathrm{DBE} = \frac{2(2) + 2 - 6}{2} = 0 \]

No rings or π bonds — consistent with an ether or an alcohol.

**Step 2 — IR.** A C–O stretch at 1120 cm⁻¹ with **no O–H band** rules out ethanol — an ether.

**Step 3 — NMR.** 3H at 3.2 ppm = one O–CH\(_3\); 9H at 1.2 ppm = three equivalent CH\(_3\) groups on a quaternary carbon. The structure is methyl *tert*-butyl ether, \( \mathrm{CH_3OC(CH_3)_3} \).

### Example 2: Assigning a full spectrum — diethyl ether

**Problem.** A colorless liquid, \( \mathrm{C_4H_{10}O} \), shows IR bands at 2970, 2870, and 1120 cm⁻¹ (none at 3200–3600 or 1650–1750 cm⁻¹). \( ^1\mathrm{H} \) NMR: 1.2 ppm (t, 6H), 3.4 ppm (q, 4H). \( ^{13}\mathrm{C} \) NMR: 15 and 66 ppm.

**Step 1 — DBE.**

\[ \mathrm{DBE} = \frac{2(4) + 2 - 10}{2} = 0 \]

**Step 2 — IR.** C–O at 1120 cm⁻¹, no O–H, no C=O → saturated ether.

**Step 3 — NMR.** A 6H triplet + 4H quartet is the classic ethyl-on-oxygen pattern: two equivalent CH\(_3\) groups coupled to two equivalent CH\(_2\) groups. The \( ^{13}\mathrm{C} \) signal at 66 ppm is the O–CH\(_2\) carbon; 15 ppm is CH\(_3\). Structure: diethyl ether, \( \mathrm{CH_3CH_2OCH_2CH_3} \).

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Ether (no O–H) | Alcohol (has O–H) | IR: broad 3200–3600 cm⁻¹ band only for the alcohol; NMR: exchangeable OH proton vanishes on D\(_2\)O shake |
| C–O stretch ≈ 1100 cm⁻¹ | C=O stretch ≈ 1700 cm⁻¹ | Carbonyls absorb much higher (double bond, stronger force constant); "C–O" and "C=O" are not interchangeable exam answers |
| O–CH\(_2\) protons at 3.4 ppm | CH\(_2\) next to a halogen at 3.4 ppm | Same shift region — use the full data set (MS, integration, \( ^{13}\mathrm{C} \)), not one peak |
| Epoxide ring protons (2.5–3.0 ppm) | "Ether protons always ≥ 3.2 ppm" | Ring strain shifts epoxide protons upfield — an exception to memorize |
| α-cleavage fragment \( m/z \) 45 | Molecular ion of a small molecule | \( m/z \) 45 is a *fragment*, not necessarily the parent peak |

## Quick Review

1. Two bottles are labeled only \( \mathrm{C_2H_6O} \): one ethanol, one dimethyl ether. Which single IR observation tells them apart?
2. Where do O–CH\(_3\) protons appear in \( ^1\mathrm{H} \) NMR, and why are they downfield of ordinary CH\(_3\) protons?
3. Diethyl ether's \( ^1\mathrm{H} \) NMR shows a triplet at 1.2 ppm and a quartet at 3.4 ppm. What do the splitting patterns tell you about the molecule?
4. What fragment at what \( m/z \) is diagnostic for methyl ethers, and why is it stable?
5. A compound's \( ^{13}\mathrm{C} \) NMR shows carbons at 66 and 15 ppm. Which is attached to oxygen, and why?

<details>
<summary>Show answers</summary>

1. The O–H stretch: ethanol shows a broad absorption at 3200–3600 cm⁻¹; dimethyl ether none. (Both show C–O near 1100 cm⁻¹.)
2. About 3.2–3.4 ppm. Oxygen is electronegative, deshielding the protons and moving their resonance downfield relative to alkyl protons (≈ 0.9–1.5 ppm).
3. The 6H triplet and 4H quartet show two equivalent CH\(_3\) groups coupled to two equivalent CH\(_2\) groups — the ethyl–O–ethyl pattern.
4. \( \mathrm{CH_3OCH_2^+} \) at \( m/z = 45 \). Oxygen's lone pairs delocalize the positive charge (oxonium ion), so α-cleavage is favored.
5. The 66 ppm carbon. Oxygen deshields the directly bonded carbon ~40 ppm relative to an alkane CH\(_2\); 15 ppm is an ordinary CH\(_3\).

</details>

## Related Topics

- Previous: [Thiols and Sulfides](07-thiols-and-sulfides.md)
- Next: End of chapter
- Related: [Ethers and Epoxides; Thiols and Sulfides chapter overview](../README.md)
- Cross-chapter: [Ch. 12: MS and IR](../../chapter-12-structure-determination-mass-spectrometry-and-infrared-spectroscopy/README.md), [Ch. 13: NMR](../../chapter-13-structure-determination-nuclear-magnetic-resonance-spectroscopy/README.md), [Ch. 19: Spectroscopy of Aldehydes and Ketones](../../chapter-19-aldehydes-and-ketones-nucleophilic-addition-reactions/14-spectroscopy-of-aldehydes-and-ketones.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-15
