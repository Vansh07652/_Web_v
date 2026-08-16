---
title: "Chemical Shifts in 1H NMR Spectroscopy"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy"
topic_number: "4"
source: "organic-chemistry.md"
tags:
  - "chemical-shifts-in-1h-nmr-spectroscopy"
  - "science"
status: "complete"
---

# Chemical Shifts in 1H NMR Spectroscopy

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 13: Structure Determination: Nuclear Magnetic Resonance Spectroscopy](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

This topic turns chemical shift into a practical skill: given a structure, predict where its protons absorb; given a spectrum, identify the protons. Proton shifts span roughly \(\delta\) 0–12, each functional-group environment having a characteristic neighborhood. The engine behind every prediction is the electron-withdrawal hierarchy: electronegative atoms (F, O, N, Cl, Br) deshield nearby protons by pulling electron density through \(\sigma\) bonds, moving them downfield. Superimposed on that inductive effect are **hybridization** (protons on \(sp^2\) carbons absorb far downfield of \(sp^3\)) and **magnetic anisotropy** (circulating \(\pi\) electrons deshield protons at the edges of double bonds, carbonyls, and aromatic rings, while shielding along certain axes — why alkynyl protons absorb anomalously upfield).

Two practical details round out the picture. **Exchangeable protons** (OH, NH, COOH) give broad, concentration-dependent signals that shift with solvent and temperature, identified by the "D₂O shake": their signals vanish when deuterium oxide is added. And because shift ranges sometimes overlap (alkene vs. aromatic protons), confident assignment combines shifts with integration and splitting from the following topics.

## Why This Matters

- Shift prediction is the most heavily tested NMR skill: exam problems give a formula and a list of signals and ask you to identify the structure.
- Medicinal chemists use 1H NMR shifts to confirm a drug candidate contains the expected functional groups and no unexpected impurities.
- In process chemistry, a reaction is judged complete by watching a diagnostic proton signal (e.g., aldehyde H near \(\delta\) 9.8) appear or disappear.
- Knowing which protons are exchangeable (OH, NH) prevents mis-assigning broad, variable signals — a classic student error.

## Core Concepts

### The electronegativity (inductive) effect

The most important single trend: the more electronegative the atom attached to a carbon, the more deshielded that carbon's protons. Methyl compounds illustrate the scale:

| Compound | Attached atom (electronegativity) | \(CH_3\) shift (approx.) |
|---|---|---|
| \(CH_3\!-\!I\) | I (2.7) | \(\delta\) 2.2 |
| \(CH_3\!-\!Br\) | Br (3.0) | \(\delta\) 2.7 |
| \(CH_3\!-\!Cl\) | Cl (3.2) | \(\delta\) 3.0 |
| \(CH_3\!-\!O\!-\!CH_3\) | O (3.4) | \(\delta\) 3.3 |
| \(CH_3\!-\!F\) | F (4.0) | \(\delta\) 4.3 |
| \(CH_4\) | H (2.2) | \(\delta\) 0.2 |

The inductive effect is transmitted through the \(\sigma\)-bond skeleton, weakening with distance: in 1-chloropropane, \(CH_3\!-\!CH_2\!-\!CH_2\!-\!Cl\), the \(CH_2\!-\!Cl\) protons absorb near \(\delta\) 3.5, the middle \(CH_2\) near 1.8, and the distant \(CH_3\) near 1.0.

### Hybridization effects

Protons on \(sp^2\) carbons are more deshielded than those on \(sp^3\) because the \(sp^2\) carbon holds more s-character (is "more electronegative") and draws electron density away from the C–H bond. Approximate ranges:

- \(sp^3\) C–H (alkanes): \(\delta\) 0.9–1.7 (methyl ~0.9, methylene ~1.2–1.4, methine ~1.5)
- Allylic \(CH\) (next to C=C): 1.7–2.0; benzylic (next to a ring): 2.2–2.5
- Carbonyl-adjacent \(CH\) (e.g., \(CH_3\!-\!C(=O)\!-\)): 2.1–2.5
- \(sp^2\) C–H: alkene 4.5–6.5; aromatic 6.5–8.5
- Aldehyde C–H: 9–10; carboxylic acid O–H: 10–12

### Magnetic anisotropy and the aromatic ring current

Circulating \(\pi\) electrons create an induced field whose direction depends on position — shielding in some regions, deshielding in others. Two headline cases:

- **Aromatic ring current.** In benzene, the six \(\pi\) electrons circulate around the ring in the applied field. Protons on the ring's edge (in the deshielding zone) absorb at \(\delta\) 6.5–8.5, far downfield of any simple alkene — with no electronegative atom present. The ring current also shields anything above or below the ring plane.
- **Alkynes.** The C≡C \(\pi\) system produces a shielding cone along the bond axis. The acetylenic proton sits in that cone, so \(RC\!\equiv\!CH\) protons absorb anomalously upfield at \(\delta\) 1.8–3.1, despite the \(sp\) carbon — a famous exception to electronegativity reasoning.

### Exchangeable protons and the D₂O test

Protons on O and N — alcohols, phenols, carboxylic acids, amines, amides — exchange rapidly with water and each other. Consequences: (1) their signals are broad; (2) their shifts vary with concentration, temperature, and solvent (ethanol OH \(\delta\) 1–5); (3) hydrogen bonding deshields them, so concentrated solutions shift downfield. Adding \(D_2O\) replaces O–H with O–D; deuterium absorbs elsewhere, so the OH/NH signal disappears — the standard test for an exchangeable proton.

## ELI-10: Explain Like I'm 10

> Think of proton shifts as a city map: methyl protons live in the quiet suburbs around \(\delta\) 1, alkene protons downtown around \(\delta\) 5, aromatic protons in the ring district around \(\delta\) 7, aldehyde protons in the far outskirts near \(\delta\) 10. Greedy atoms like oxygen, nitrogen, and chlorine push nearby protons closer to downtown (larger shifts), and the closer the greedy atom, the bigger the push. Special zones — like benzene's "ring current" — act like a spotlight pushing ring-edge protons far downtown even without a greedy atom.

## High-Yield Points

- Deshielding hierarchy: F > O > N > Cl > Br > I > H — more electronegative neighbor = larger \(\delta\).
- Inductive effect falls off with distance: α-protons shift most, β-protons less, γ-protons barely.
- Hybridization: \(sp^3\) C–H \(\delta\) 0.9–1.7 < alkene C–H \(\delta\) 4.5–6.5 < aromatic C–H \(\delta\) 6.5–8.5 < aldehyde H \(\delta\) 9–10.
- Alkynyl C–H is the exception: \(\delta\) 1.8–3.1 (shielding cone along the C≡C axis), not downfield.
- Aromatic ring current deshields ring-edge protons (6.5–8.5) and shields those above/below the plane.
- OH, NH, COOH protons: broad, variable, concentration-dependent; they vanish on D₂O shake.
- Benzylic \(CH\)/\(CH_3\) (2.2–2.5) and allylic (1.7–2.0) sit between alkane and alkene/arene ranges — useful anchors.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Inductive effect | Electron withdrawal (or donation) through \(\sigma\) bonds by electronegative atoms | Sets the primary trend: electronegative neighbors deshield nearby protons |
| Deshielding | Loss of electron density at a nucleus, shifting absorption downfield | Explains why O–CH3, N–CH3, and C–Cl protons absorb at \(\delta\) 3–4 instead of ~1 |
| Hybridization effect | Greater electron-withdrawing power of \(sp^2\) (vs. \(sp^3\)) carbon | Pushes alkene (4.5–6.5) and aromatic (6.5–8.5) protons far downfield |
| Ring current | Circulation of \(\pi\) electrons around an aromatic ring in the applied field | Why benzene protons absorb near \(\delta\) 7.3 — deshielded by the ring's induced field |
| Magnetic anisotropy | Direction-dependent shielding/deshielding from oriented \(\pi\) electrons | Explains aromatic deshielding and the anomalously upfield alkynyl proton |
| Exchangeable proton | An O–H or N–H proton that swaps rapidly with water or deuterium oxide | Identified by the D₂O test; gives broad, variable signals that must not be mis-assigned |
| Allylic / benzylic | Protons on a carbon adjacent to a C=C (allylic) or an aromatic ring (benzylic) | Diagnostic anchors at \(\delta\) 1.7–2.0 and 2.2–2.5 |

## Worked Examples

### Example 1: Predicting the 1H NMR shifts of ethyl acetate

Ethyl acetate, \(CH_3\!-\!C(=O)\!-\!O\!-\!CH_2\!-\!CH_3\), shows three proton signals. Predict each shift and justify it.

**Step 1 — Identify the three environments.** (1) Acetate methyl \(CH_3\!-\!C(=O)\), (2) \(O\!-\!CH_2\) methylene, (3) terminal \(CH_3\).

**Step 2 — Apply the trends.**
- \(CH_3\!-\!C(=O)\): carbonyl-adjacent methyl, \(\delta \approx 2.0\) (standard ketone/ester methyl value, mildly deshielded by the C=O).
- \(O\!-\!CH_2\!-\!CH_3\): the methylene is bonded to oxygen, the most electronegative atom present — strong inductive deshielding, \(\delta \approx 4.1\).
- \(CH_3\!-\!CH_2\!-\!O\): the terminal methyl feels the oxygen's effect through two bonds, so it is only mildly deshielded, \(\delta \approx 1.2\).

**Step 3 — Rank and sanity check.** Order: O–CH2 (4.1) > CH3–C=O (2.0) > CH3–CH2 (1.2), matching the known spectrum and the rules that α-protons to oxygen sit near 3.5–4.2, carbonyl-adjacent methyls near 2.0–2.1, alkyl methyls near 0.9–1.3.

### Example 2: Distinguishing isomers by shift pattern — 1-chloropropane vs. 2-chloropropane

Both \(C_3H_7Cl\) isomers give three signals, but with different shifts and integrations.

**1-Chloropropane** (\(CH_3\!-\!CH_2\!-\!CH_2\!-\!Cl\), chlorine terminal): \(CH_2\!-\!Cl\) \(\delta \approx 3.5\) (α to Cl); middle \(CH_2\) \(\delta \approx 1.8\) (β to Cl — one carbon away, mild deshielding); \(CH_3\) \(\delta \approx 1.0\) (γ to Cl — barely affected).

**2-Chloropropane** (\((CH_3)_2CH\!-\!Cl\), chlorine central): \(CH\!-\!Cl\) \(\delta \approx 4.1\) (α to Cl; methine slightly more deshielded than a methylene); two equivalent \(CH_3\) groups \(\delta \approx 1.5\) (each β to Cl).

**Interpretation:** the isomers differ in the *number of signals at high shift* — 1-chloropropane has one α signal (3.5) plus two upfield (1.8, 1.0); 2-chloropropane has one α (4.1) and one 6-proton methyl (1.5). Integration (3:2:2 vs. 6:1) confirms — a preview of proton counting.

### Example 3: Using the D₂O test and shift ranges to identify an OH

A compound \(C_2H_6O\) shows a triplet near \(\delta\) 1.2, a quartet near \(\delta\) 3.7, and a broad singlet near \(\delta\) 2.6 that disappears when \(D_2O\) is added. Identify it.

**Reasoning:** the D₂O-vanishing signal is an exchangeable O–H. The quartet at 3.7 is an O–CH2 (α to oxygen, \(\delta\) 3.3–3.8 range) and the triplet at 1.2 is the attached CH3 (split by the CH2). Together: \(CH_3\!-\!CH_2\!-\!OH\) — ethanol. The OH shift (2.6) is variable and concentration-dependent, which is exactly why it must be confirmed by exchange, not by its position alone.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Alkene protons (\(\delta\) 4.5–6.5) | Aromatic protons (\(\delta\) 6.5–8.5) | Aromatics are pushed further downfield by the ring current; integration and coupling sort out overlaps |
| Alkynyl C–H "deshielded by sp carbon" | Alkynyl C–H absorbing downfield | It absorbs UPfield (\(\delta\) 1.8–3.1): the anisotropy shielding cone overrides the sp effect |
| O–CH3 vs. N–CH3 shifts | Both near \(\delta\) 3 | O–CH3 ~3.3–3.8; N–CH3 ~2.2–2.9 — oxygen is more electronegative, so O–CH3 is further downfield |
| OH signal position | A fixed, reliable value | OH/NH shifts vary with concentration, temperature, and solvent; confirm with D₂O, not the shift table |
| Benzylic protons being aromatic | Benzylic protons absorbing like ring protons | Benzylic C–H on the attached CH2/CH3 absorb upfield (\(\delta\) 2.2–2.5); only ring C–H are at 6.5–8.5 |

## Quick Review

1. Rank the expected shifts: \(CH_3\!-\!F\), \(CH_3\!-\!I\), \(CH_3\!-\!CH_3\), \(CH_3\!-\!Cl\). Justify briefly.
2. Why do aromatic protons absorb near \(\delta\) 7 when no electronegative atom is attached to the ring?
3. Predict the 1H NMR signals (shift + rough integration) of propanal, \(CH_3\!-\!CH_2\!-\!CHO\).
4. A broad signal at \(\delta\) 3.9 disappears when \(D_2O\) is added. What kind of proton is it, and why does it disappear?
5. Which absorbs further downfield: an alkene C–H or an alkyne C–H? Why is this counterintuitive?
6. In 1-chloropropane, why do the \(CH_2\!-\!Cl\) protons (\(\delta\) 3.5) absorb so far downfield of the \(CH_3\) protons (\(\delta\) 1.0)?

<details>
<summary>Show answers</summary>

1. \(CH_3\!-\!F\) (~4.3) > \(CH_3\!-\!Cl\) (~3.0) > \(CH_3\!-\!I\) (~2.2) > \(CH_3\!-\!CH_3\) (~0.9) — deshielding increases with substituent electronegativity.
2. The aromatic ring current: the six \(\pi\) electrons circulate in the applied field, generating an induced field that deshields the ring-edge protons, moving them to \(\delta\) 6.5–8.5.
3. \(CH_3\) triplet \(\delta \approx 1.1\) (3H); \(CH_2\) quartet-like \(\delta \approx 2.4\)–2.5 (2H, α to C=O); aldehyde \(CHO\) \(\delta \approx 9.8\) (1H).
4. An exchangeable O–H (or N–H) proton. D₂O replaces O–H with O–D; the deuterium signal appears elsewhere, so the original OH signal disappears.
5. The alkene C–H absorbs further downfield (\(\delta\) 4.5–6.5 vs. 1.8–3.1). The alkynyl proton is shielded by the anisotropy cone along the C≡C axis, overriding the sp-carbon electronegativity.
6. Chlorine is on the same carbon as the CH2 (α position): strong inductive withdrawal deshields those protons. The CH3 is two bonds further away (γ position), so it barely feels the effect.

</details>

## Related Topics

- Previous: [Chemical Shifts](03-chemical-shifts.md)
- Next: [Integration of 1H NMR Absorptions: Proton Counting](05-integration-of-1h-nmr-absorptions-proton-counting.md)
- Related: [Integration of 1H NMR Absorptions: Proton Counting](05-integration-of-1h-nmr-absorptions-proton-counting.md) — how many protons each signal represents
- Related: [Spin–Spin Splitting in 1H NMR Spectra](06-spin-spin-splitting-in-1h-nmr-spectra.md) — multiplicities refine shift-based assignments
- Related: [1H NMR Spectroscopy and Proton Equivalence](07-1h-nmr-spectroscopy-and-proton-equivalence.md) — which protons share a signal (and a shift)
- Related: [Uses of 1H NMR Spectroscopy](09-uses-of-1h-nmr-spectroscopy.md) — shifts as structural evidence in practice
- Related: [Structure Determination: Nuclear Magnetic Resonance Spectroscopy chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
