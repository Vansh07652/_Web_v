---
title: "Calculating the Degree of Unsaturation"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "7: Alkenes: Structure and Reactivity"
topic_number: "2"
source: "organic-chemistry.md"
tags:
  - "calculating-the-degree-of-unsaturation"
  - "science"
status: "complete"
---

# Calculating the Degree of Unsaturation

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 7: Alkenes: Structure and Reactivity](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

Given only a molecular formula, how much can you know before drawing anything? The **degree of unsaturation** (also called the index of hydrogen deficiency, IHD) is the first piece of structural information a chemist extracts from a formula: the total number of **rings plus \(\pi\) bonds**. A single number instantly separates a saturated alkane from an alkene and flags a benzene ring (IHD 4) long before any spectroscopy.

The calculation is bookkeeping built on one reference point — the saturated, acyclic alkane \(\text{C}_n\text{H}_{2n+2}\). Every ring or \(\pi\) bond removes two hydrogens from that reference, so the IHD is half the "missing" hydrogen count. This topic develops the formula, explains the special handling of halogens, nitrogen, and oxygen, and shows how the result is used with IR and NMR data to propose structures.

## Why This Matters

IHD is the standard first step of every structure-determination problem and a routine exam question. When mass spectrometry gives the molecular formula of an unknown, your first calculation is the IHD, because it immediately narrows the possibilities: IHD 0 means no rings and no \(\pi\) bonds; IHD 4 with six carbons strongly suggests an aromatic ring; IHD 2 might be a diene, an enyne, a ring plus an alkene, or an alkyne. It also matters in real analytical chemistry — drug impurity identification, flavor chemistry, and metabolomics all begin with formula-level reasoning. The halogen and nitrogen corrections are classic trap points, which is exactly why this topic deserves careful study.

## Core Concepts

### The reference: a saturated acyclic alkane

For a hydrocarbon, the saturated, acyclic reference is \(\text{C}_n\text{H}_{2n+2}\): methane (CH4), ethane (C2H6), and octane (C8H18) all fit. The formula follows from tetravalent carbon: in a chain of n carbons, the two ends each carry three hydrogens and the \(n-2\) interior carbons carry two, giving \(2 \times 3 + (n-2) \times 2 = 2n + 2\) hydrogens.

### What removes hydrogens: rings and \(\pi\) bonds

Forming a ring joins two chain ends, removing two hydrogens (the ends no longer need terminal C–H bonds). Forming a double bond also removes two hydrogens (two carbons each give up one H to share the extra bond pair). A triple bond removes four hydrogens — it counts as two units of unsaturation. Each ring or \(\pi\) bond therefore represents one "degree of unsaturation":

\[ \text{Degree of unsaturation} = \frac{1}{2}(2n_\text{C} + 2 - n_\text{H}) \quad \text{(hydrocarbons only)} \]

For example, ethene \(\text{C}_2\text{H}_4\): \((2 \times 2 + 2 - 4)/2 = 1\), matching its one double bond. Cyclohexane \(\text{C}_6\text{H}_{12}\): \((12 + 2 - 12)/2 = 1\), matching its one ring.

### Handling halogens, oxygen, and nitrogen

Real molecules contain heteroatoms, and each needs a rule:

- **Halogens (F, Cl, Br, I)** are monovalent and occupy the same "slot" as hydrogen — count each halogen as a hydrogen: add \(n_\text{X}\) to \(n_\text{H}\).
- **Oxygen (and sulfur)** are divalent and insert into the skeleton without changing the hydrogen count — ignore them.
- **Nitrogen** is trivalent: compared with the carbon-only reference, each nitrogen adds one hydrogen to the count — add \(n_\text{N}\).

The complete formula is:

\[ \text{IHD} = \frac{2n_\text{C} + 2 + n_\text{N} - n_\text{H} - n_\text{X}}{2} \]

where \(n_\text{X}\) is the total number of halogen atoms. Check with methylamine, \(\text{CH}_3\text{NH}_2\): \((2 + 2 + 1 - 5)/2 = 0\) — correct, a saturated acyclic amine.

### Reading the result

The IHD counts rings and \(\pi\) bonds together; it does not tell you which. An IHD of 1 could be one ring or one double bond; an IHD of 2 could be two double bonds, one triple bond, a ring plus a double bond, or two rings. Combine the IHD with other evidence: IR shows which functional groups are present (Topic 12.6), NMR shows connectivity, and IHD 4 in a six-carbon molecule usually means an aromatic ring (3 \(\pi\) bonds + 1 ring). The IHD must be a non-negative integer; a fractional or negative result means the formula (or the heteroatom bookkeeping) is wrong.

### The nitrogen rule tie-in

The IHD formula also explains the classic mass-spectrometry fact that an odd molecular mass indicates an odd number of nitrogens. With no nitrogen, a saturated acyclic molecule has an even hydrogen count (\(2n + 2\)), so C, H, O, and halogens sum to an even nominal mass. Each nitrogen adds one hydrogen (and contributes an even mass of 14), flipping the parity — which is why a chemist seeing an odd molecular ion immediately suspects nitrogen. Same parity logic, same bookkeeping.

## ELI-10: Explain Like I'm 10

Imagine a line of kids holding hands. A "saturated" line has every kid holding two neighbors' hands, with the two end kids each holding one hand out. If two kids at the ends join hands to make a circle, or two neighbors hold both hands with each other, two free hands disappear. The degree of unsaturation counts how many times free hands disappeared — one point for every circle or double-hold.

## High-Yield Points

- IHD = number of rings + number of \(\pi\) bonds in a molecule.
- Formula: \(\text{IHD} = (2n_\text{C} + 2 + n_\text{N} - n_\text{H} - n_\text{X})/2\).
- Halogens count as hydrogens; oxygen and sulfur are ignored; each nitrogen adds 1.
- A triple bond counts as 2 units (one \(\sigma\) + two \(\pi\), removing 4 H).
- Benzene \(\text{C}_6\text{H}_6\): IHD = 4 (3 \(\pi\) bonds + 1 ring) — the classic aromatic fingerprint.
- IHD = 0 means saturated, acyclic: all single bonds, no rings.
- IHD must be a non-negative integer; fractional results indicate an error.
- Use IHD together with IR/NMR to decide between ring vs. \(\pi\) bond possibilities.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| degree of unsaturation (IHD) | The number of rings plus \(\pi\) bonds implied by a molecular formula. | The first structural filter applied to any formula. |
| saturated compound | A molecule with only single bonds and no rings (alkanes). | The reference state: \(\text{C}_n\text{H}_{2n+2}\). |
| \(\pi\) bond | A bond formed by sideways overlap of p orbitals; part of double and triple bonds. | Each \(\pi\) bond removes two hydrogens and adds 1 to the IHD. |
| ring | A closed loop of atoms in a molecule. | A ring removes two hydrogens, same as a double bond. |
| nitrogen rule | A molecule with an odd nominal mass contains an odd number of nitrogens. | Parity bookkeeping used in mass spectrometry. |
| molecular formula | The exact atom count of a molecule, e.g., \(\text{C}_4\text{H}_8\). | The input to the IHD calculation. |

## Worked Examples

**Example 1 — Butene isomers.** The formula \(\text{C}_4\text{H}_8\) describes several compounds. Calculate the IHD, then list what structures are possible. Write the formula, substitute:

\[ \text{IHD} = \frac{2(4) + 2 - 8}{2} = \frac{10 - 8}{2} = 1 \]

An IHD of 1 means either one ring (cyclobutane, methylcyclopropane) or one double bond (1-butene, 2-butene, 2-methylpropene). The formula alone cannot choose among them — confirming that IHD narrows, but does not identify.

**Example 2 — A molecule with nitrogen and halogen.** Calculate the IHD of \(\text{C}_3\text{H}_6\text{ClN}\) (the formula of 1-chloro-2-propanamine). Apply the full formula with \(n_\text{N} = 1\) and \(n_\text{X} = 1\):

\[ \text{IHD} = \frac{2(3) + 2 + 1 - 6 - 1}{2} = \frac{6 + 2 + 1 - 7}{2} = \frac{2}{2} = 1 \]

The molecule has one degree of unsaturation — a double bond or a ring — consistent with, for example, the allylic chloride CH2=CH–CH(Cl)–NH2 (IHD 1, from the double bond).

**Example 3 — The aromatic fingerprint.** Calculate the IHD of benzene, \(\text{C}_6\text{H}_6\):

\[ \text{IHD} = \frac{2(6) + 2 - 6}{2} = \frac{14 - 6}{2} = 4 \]

Four degrees of unsaturation = three \(\pi\) bonds plus one ring. Whenever a formula like \(\text{C}_n\text{H}_{2n-6}\) (IHD 4) appears with six or more carbons, an aromatic ring is the leading hypothesis.

**Example 4 — Checking with dimensional logic.** A student reports the formula \(\text{C}_5\text{H}_{11}\) and computes IHD = (10 + 2 − 11)/2 = 0.5. Explain the error. *Answer:* The count of hydrogens is wrong — a neutral molecule of five carbons with one double bond would be \(\text{C}_5\text{H}_{10}\) (IHD 1) and a saturated one \(\text{C}_5\text{H}_{12}\) (IHD 0). \(\text{C}_5\text{H}_{11}\) has an odd hydrogen count, impossible for a neutral hydrocarbon, and the fractional IHD flags the mistake. (An odd H count is only possible with an odd number of nitrogens, which would change the formula.)

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Halogens in the formula | ignored heteroatoms | Halogens are monovalent and count as hydrogens (subtract them); oxygen and sulfur are ignored. |
| Nitrogen contribution | hydrogen contribution | Each nitrogen adds 1 to the numerator; forgetting this makes nitrogen compounds come out one unit too low. |
| IHD = 1 meaning | a double bond specifically | IHD 1 is one ring OR one double bond; additional data decide. |
| Triple bond IHD | double bond IHD | A triple bond is 2 units of unsaturation (removes 4 H). |
| Degree of unsaturation | number of rings | IHD counts rings and \(\pi\) bonds together, not rings alone. |
| Fractional IHD | valid result | IHD must be a non-negative integer; a fraction signals an incorrect formula. |

## Quick Review

1. Write the general IHD formula and define each term.
2. Calculate the IHD of \(\text{C}_4\text{H}_6\) and list two structural interpretations.
3. Why are halogen atoms counted as hydrogens in the formula?
4. What is the IHD of \(\text{C}_7\text{H}_8\) (toluene), and what does it suggest?
5. A compound has the formula \(\text{C}_5\text{H}_9\text{NO}\). Calculate the IHD.
6. Why must a neutral hydrocarbon have an even number of hydrogens?

<details>
<summary>Answers</summary>

1. \(\text{IHD} = (2n_\text{C} + 2 + n_\text{N} - n_\text{H} - n_\text{X})/2\), where \(n_\text{C}\), \(n_\text{N}\), \(n_\text{H}\), \(n_\text{X}\) are the counts of carbons, nitrogens, hydrogens, and halogens.
2. \(\text{IHD} = (8 + 2 - 6)/2 = 2\). Interpretations: one triple bond (e.g., 1-butyne), two double bonds (1,3-butadiene), or a ring plus a double bond (e.g., methylenecyclopropane).
3. Because halogens are monovalent like hydrogen: replacing an H with a halogen does not change the hydrogen count of the reference, so each halogen is "returned" to the count as if it were H.
4. \(\text{IHD} = (14 + 2 - 8)/2 = 4\) — consistent with an aromatic ring (3 \(\pi\) + 1 ring), as in toluene.
5. \(\text{IHD} = (10 + 2 + 1 - 9)/2 = 4/2 = 2\). Two units: e.g., a ring plus a carbonyl, or two \(\pi\) bonds.
6. The saturated acyclic reference \(\text{C}_n\text{H}_{2n+2}\) has an even hydrogen count, and every ring or \(\pi\) bond removes hydrogens two at a time, so parity is preserved.

</details>

## Related Topics

- [Chapter 7 README](../README.md)
- [1. Industrial Preparation and Use of Alkenes](01-industrial-preparation-and-use-of-alkenes.md)
- [3. Naming Alkenes](03-naming-alkenes.md)
- [6. Stability of Alkenes](06-stability-of-alkenes.md)
- [Chapter 12, Topic 2: Interpreting Mass Spectra](../chapter-12-structure-determination-mass-spectrometry-and-infrared-spectroscopy/02-interpreting-mass-spectra.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: none beyond standard atomic-weight-based reasoning; the IHD formula itself is a universally used convention in current organic chemistry texts.
- Last updated: 2026-08-16
