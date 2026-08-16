---
title: "Keto–Enol Tautomerism"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "22: Carbonyl Alpha-Substitution Reactions"
topic_number: "1"
source: "organic-chemistry.md"
tags:
  - "keto-enol-tautomerism"
  - "science"
status: "complete"
---

# Keto–Enol Tautomerism

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 22: Carbonyl Alpha-Substitution Reactions](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

Carbonyl compounds that carry a hydrogen on the α-carbon (next to the C=O) exist in equilibrium with a constitutional isomer called the **enol**: a compound with a C=C double bond and an –OH group. For acetone, CH3COCH3 ⇌ CH2=C(OH)CH3. The two forms are **tautomers** — real, interconvertible isomers differing in the position of a proton and a double bond — and the interconversion is **keto–enol tautomerism**.

For simple ketones the keto form is overwhelmingly favored: only about one molecule in 10⁵–10⁶ is the enol. But that trace of enol — and, under basic conditions, the enolate ion — makes the α-carbon nucleophilic, powering all of the α-substitution chemistry in this chapter and the carbonyl condensations of Chapter 23. Tautomerization is catalyzed by both acids and bases.

## Why This Matters

- **Reactivity switch.** The carbonyl carbon is electrophilic; after enol/enolate formation, the α-carbon becomes nucleophilic — the same molecule reacts at a new site.
- **Every α-substitution reaction starts here:** α-halogenation, α-alkylation, and aldol/Claisen condensations all begin with enol or enolate formation.
- **Biology depends on it.** Enolate intermediates drive glycolysis (enolase makes phosphoenolpyruvate), the citric acid cycle, and fatty-acid synthesis.
- **Exam relevance.** Distinguishing tautomers from resonance forms is a classic conceptual trap.

## Core Concepts

### Tautomers are not resonance forms

This distinction matters. **Resonance forms** differ only in electron placement — atoms and connectivity are identical, neither form exists alone, and the molecule is a hybrid. **Tautomers** are different constitutional isomers: atoms are rearranged (a proton moves), each form is a real molecule, and they sit in equilibrium. An enol is NOT a resonance form of a ketone — a double-headed arrow between them is a serious error.

### The keto–enol equilibrium

For acetone: CH3COCH3 (keto) ⇌ CH2=C(OH)CH3 (enol). The equilibrium constant:

\[
K_{eq} = \frac{[\text{enol}]}{[\text{keto}]}
\]

is roughly 10⁻⁵ to 10⁻⁶ for simple ketones — the enol content is about one part in 10⁵–10⁶. Several factors shift the equilibrium toward the enol:

- **Intramolecular hydrogen bonding + conjugation:** in β-dicarbonyls such as 2,4-pentanedione, the enol gains a six-membered hydrogen-bonded ring and extended conjugation, so the enol dominates (~80%).
- **Aromaticity:** phenols are enols (of cyclohexadienones) whose enol form gains aromatic stabilization — they are essentially 100% enol.

### Acid-catalyzed mechanism

Tautomerization in acid proceeds in two steps (described in words):

1. A proton adds to the carbonyl oxygen (a curved arrow from an oxygen lone pair to H⁺), forming an oxonium ion.
2. The α-C–H bond breaks: its electrons form the C=C bond and the proton leaves (to solvent/base), giving the enol.

The reverse is the same path in reverse: protonation of the enol's C=C carbon, then loss of the O–H proton. Acid works because protonating oxygen makes the α-hydrogens far more acidic.

### Base-catalyzed mechanism (via the enolate)

In base, the sequence is different:

1. The base removes the α-hydrogen (a curved arrow from the C–H bond to the base), generating the **enolate ion**, a resonance-stabilized carbanion with negative charge delocalized between the α-carbon and oxygen.
2. Protonation of the enolate oxygen by the solvent gives the enol.

The **enolate** is anionic (formed quantitatively by strong bases such as LDA) and is a powerful carbon nucleophile; the **enol** is neutral and weakly nucleophilic at carbon.

### Why the enol content matters

Even a tiny enol fraction matters because reactions consume the enol as it forms (Le Chatelier's principle). Acid-catalyzed halogenation of ketones proceeds through the enol, and the Hell–Volhard–Zelinsky reaction brominates the α-position of carboxylic acids via enol chemistry. Enzymes deliberately generate enolates to make the α-carbon nucleophilic for carbon–carbon bond formation.

## How It Works / Step-by-Step Process

Acid-catalyzed tautomerization of acetone, step by step:

1. H⁺ adds to the carbonyl oxygen (curved arrow from an O lone pair to H⁺), forming the oxonium ion.
2. The α-C–H bond electrons move to form the C=C bond; the α-proton departs to solvent.
3. The product is the enol CH2=C(OH)CH3, its O–H coming from the protonated carbonyl.
4. The reverse process (protonate the enol's C=C carbon, remove the O–H proton) regenerates the keto form.

Both acid and base catalyze the interconversion; the catalyst is regenerated.

## Worked Examples

### Example 1: What fraction of acetone is the enol?

Take Keq = [enol]/[keto] = 1.0 × 10⁻⁶, an illustrative value within the literature range. The percent enol is:

\[
\%\text{enol} = \frac{K_{eq}}{1 + K_{eq}} \times 100\%
\]

Substituting:

\[
\%\text{enol} = \frac{1.0 \times 10^{-6}}{1 + 1.0 \times 10^{-6}} \times 100\% \approx 1.0 \times 10^{-4}\%
\]

So roughly one molecule in a million is the enol — yet that trace species drives the α-substitution chemistry.

### Example 2: Free energy of tautomerization

The standard free-energy change is:

\[
\Delta G^\circ = -RT \ln K_{eq}
\]

with \(R = 8.314\ \text{J mol}^{-1}\text{K}^{-1}\) and \(T = 298\ \text{K}\). Substituting Keq = 1.0 × 10⁻⁶:

\[
\Delta G^\circ = -(8.314\ \text{J mol}^{-1}\text{K}^{-1})(298\ \text{K}) \ln(1.0 \times 10^{-6})
\]

Since ln(1.0 × 10⁻⁶) = −13.8:

\[
\Delta G^\circ = -(2.48 \times 10^{3}\ \text{J/mol})(-13.8) = +3.42 \times 10^{4}\ \text{J/mol} = +34.2\ \text{kJ/mol}
\]

The positive value means the keto form is favored by about 34 kJ/mol, consistent with the ~10⁻⁴% enol content.

### Example 3: Predicting the dominant tautomer

2,4-Pentanedione (CH3COCH2COCH3) exists mostly as its enol at equilibrium: the enol forms an intramolecular hydrogen bond (six-membered ring) and gains conjugation with the second C=O — two stabilizations unavailable to a simple ketone. Expect the enol to dominate, in sharp contrast to acetone.

## ELI-10: Explain Like I'm 10

> A keto molecule is like a person standing with both feet planted (C=O with an H nearby). Sometimes the person "tips over": the hydrogen hops to the oxygen and a double bond slides over — now they're the enol version, standing on one leg (C=C with an O–H). Most ketones strongly prefer both feet down, but some molecules, like β-diketones, actually like standing on one leg because the O–H can hold hands with a nearby oxygen — that's why they are mostly enol.

## High-Yield Points

- Tautomers are real constitutional isomers in equilibrium; resonance forms are electron-placement drawings of one molecule. Never use a resonance arrow between keto and enol.
- Keto ⇌ enol moves a proton and shifts a double bond; catalyzed by acid AND base.
- Simple ketones: enol content ~10⁻⁴–10⁻⁶ (one enol per ~10⁵–10⁶ keto molecules).
- β-Dicarbonyls (2,4-pentanedione): enol favored (~80%) via intramolecular H-bonding + conjugation; phenols are essentially 100% enol (aromaticity).
- Acid mechanism: protonate O, then remove α-H. Base mechanism: remove α-H → enolate, then protonate O.
- Enolate = anionic, strongly nucleophilic at carbon; enol = neutral, weakly nucleophilic.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| tautomer | One of two constitutional isomers that interconvert by proton movement and double-bond shift | The keto and enol forms are both real, isolable-in-principle species |
| enol | A compound with C=C–OH, the minor partner in most keto–enol equilibria | The nucleophilic carbon species that drives α-substitution |
| keto form | The carbonyl form (C=O with an α-H) | The strongly favored partner for simple aldehydes and ketones |
| enolate ion | The anion from removing the α-H, with charge delocalized on C and O | A powerful carbon nucleophile made quantitatively with strong bases |
| tautomerization | The acid- or base-catalyzed interconversion of keto and enol forms | The gateway reaction to all α-substitution chemistry |
| equilibrium constant (Keq) | Ratio [enol]/[keto] at equilibrium | Quantifies enol content and free-energy difference |

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Tautomer | Resonance form | Tautomers: real isomers, atoms move, equilibrium arrow (⇌). Resonance forms: same connectivity, electrons move, double-headed arrow (↔). |
| Enol | Enolate | Enol is neutral (C=C–OH); enolate is anionic (C⁻–C=O ⇌ C=C–O⁻), far more nucleophilic. |
| Enols as stable alcohols | Phenols | Simple enols are transient and minor; phenols are stable because the enol form is aromatic. |
| Tautomerization | Acid–base reaction | It is an isomerization; the enolate is the conjugate base of BOTH the keto and enol forms. |
| "Keto form is always favored" | β-Dicarbonyls and phenols | Intramolecular H-bonding, conjugation, and aromaticity can make the enol the major form. |

## Quick Review

1. What is the difference between a tautomer and a resonance form?
2. Write the keto and enol forms of acetone, and state which is favored and by roughly how much.
3. Describe the acid-catalyzed mechanism of keto–enol tautomerization in words.
4. Why is 2,4-pentanedione mostly enol at equilibrium?
5. If Keq = 1.0 × 10⁻⁶ for a ketone, what is the percent enol content?
6. What is the difference between an enol and an enolate, and which is the stronger carbon nucleophile?

<details>
<summary>Show answers</summary>

1. Tautomers are real constitutional isomers that interconvert by moving a proton and a double bond (equilibrium ⇌); resonance forms differ only in electron placement within the same connectivity and are not real, separate species (resonance ↔).
2. CH3COCH3 ⇌ CH2=C(OH)CH3; the keto form is favored (enol ≈ 10⁻⁴–10⁻⁶, ΔG° ≈ +34 kJ/mol).
3. Protonation of the carbonyl oxygen forms an oxonium ion; then the α-C–H bond electrons form the C=C bond as the α-proton leaves, giving the enol. The reverse path (protonate the enol C=C, remove the O–H proton) returns to the keto form.
4. The enol gains an intramolecular hydrogen bond (six-membered ring) and extra conjugation with the second carbonyl — stabilizations unavailable to a simple ketone.
5. %enol = Keq/(1 + Keq) × 100% ≈ 1.0 × 10⁻⁴%.
6. Enol is neutral (C=C–OH); enolate is anionic with charge on C and O. The enolate is the much stronger carbon nucleophile, formed quantitatively by strong bases such as LDA.
</details>

## Related Topics

- Previous: Start of chapter
- Next: [Reactivity of Enols: α-Substitution Reactions](02-reactivity-of-enols-substitution-reactions.md)
- Related: [Acidity of Alpha Hydrogen Atoms: Enolate Ion Formation](05-acidity-of-alpha-hydrogen-atoms-enolate-ion-formation.md)
- Related: [Alkylation of Enolate Ions](07-alkylation-of-enolate-ions.md)
- Related: [Carbonyl Condensation Reactions chapter overview](../../chapter-23-carbonyl-condensation-reactions/README.md)
- Related: [Carbonyl Alpha-Substitution Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Keq values are approximate literature ranges; R and T are standard values.
- Last updated: 2026-08-16
