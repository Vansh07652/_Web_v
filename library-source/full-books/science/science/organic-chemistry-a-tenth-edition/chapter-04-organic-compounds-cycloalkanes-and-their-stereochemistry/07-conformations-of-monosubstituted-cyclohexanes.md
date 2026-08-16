---
title: "Conformations of Monosubstituted Cyclohexanes"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "4: Organic Compounds: Cycloalkanes and Their Stereochemistry"
topic_number: "7"
source: "organic-chemistry.md"
tags:
  - "conformations-of-monosubstituted-cyclohexanes"
  - "science"
status: "complete"
---

# Conformations of Monosubstituted Cyclohexanes

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 4: Organic Compounds: Cycloalkanes and Their Stereochemistry](../README.md)  
> **Topic:** 7  
> **Source structure:** OpenStax public textbook outline


## Overview

Add one substituent to cyclohexane and the two chair conformations are no longer equal. In one chair the substituent is axial; in the other it is equatorial. The axial chair is destabilized because the substituent crowds the axial hydrogens two carbons away — the **1,3-diaxial interaction** — while the equatorial chair feels no such crowding. The equilibrium therefore favors the equatorial chair, and how strongly it does so is measured by the substituent's **A-value** (the free-energy cost of axial placement). Methylcyclohexane, for example, sits about 95% in the equatorial chair at room temperature, while a bulky group such as tert-butyl is essentially locked equatorial. This topic develops the steric reasoning, the equilibrium math, and the A-value scale that chemists use to predict which conformation dominates.

## Why This Matters

Predicting the favored conformation of a substituted ring is a routine step in synthesis planning, spectroscopy, and drug design. An axial methyl can block a reaction site or force a neighboring group into an unfavorable arrangement; a tert-butyl "conformational lock" is used deliberately to hold other substituents in place for study or for receptor binding. In NMR, the difference between axial and equatorial substituents changes chemical shifts and coupling, so conformational preference is read directly from spectra. The same 1,3-diaxial logic extends to fused-ring systems (steroids, decalin) in the final topic of this chapter, making the A-value concept one of the most transferable ideas in organic chemistry.

## Core Concepts

### The 1,3-diaxial interaction

In the chair, an axial substituent at C1 points straight up, parallel to the axial bonds at C3 and C5 on the same face. The substituent and those two hydrogens are only about 0.25 nm apart — much closer than their van der Waals contact distance — so they repel. This steric penalty, called the 1,3-diaxial interaction, is the entire reason axial is bad. An equatorial substituent at C1 slants outward into open space and touches nothing, so the equatorial chair carries no such penalty.

### A-values: a free-energy ruler

The **A-value** of a substituent is the standard free-energy change for moving it from equatorial to axial, \(\Delta G^\circ = G_{\text{ax}} - G_{\text{eq}}\), a positive number in kJ/mol (or kcal/mol). It is measured by equilibrating the two chairs and reading the population ratio. Methyl has \(A \approx 7.3\ \mathrm{kJ/mol}\ (1.74\ \mathrm{kcal/mol})\); ethyl is similar; isopropyl is larger (\(A \approx 9.0\ \mathrm{kJ/mol}\)); and tert-butyl is very large (\(A \approx 21\ \mathrm{kJ/mol}\)). The trend tracks size: the bigger the group, the more it collides with the 1,3-diaxial hydrogens, the larger the A-value.

### The two-chair equilibrium

The ring flip is fast, so the two chairs sit in a dynamic equilibrium governed by the A-value. The equilibrium constant relates the two chair populations:

\[ K = \frac{[\text{equatorial}]}{[\text{axial}]} = e^{-\Delta G^\circ / RT} \]

where \(\Delta G^\circ\) (in kJ/mol) is the free-energy change for axial → equatorial, \(R = 8.314\ \mathrm{J\,mol^{-1}\,K^{-1}}\), and \(T\) is the temperature in kelvin. The percent equatorial is then \(100\% \times K/(1+K)\). Because \(\Delta G^\circ = -A\), a larger A-value means a larger \(K\) and a more lopsided equilibrium.

### The conformational lock

For very bulky groups the equilibrium is so one-sided that the substituent behaves as if frozen equatorial. tert-Butylcyclohexane is >99.9% equatorial at room temperature, so a tert-butyl group is used as a **conformational lock**: attach it at C1 and every other substituent is held in a fixed axial or equatorial position long enough to study or exploit. This trick underpins countless mechanistic and medicinal studies of substituted cyclohexanes.

## ELI-10: Explain Like I'm 10

> Imagine a round table with six chairs. If a big guest sits in the one chair that points straight up, their elbows bump the two guests sitting one chair away on the same side. But if they sit in the sideways-pointing chair, nobody gets bumped. The molecule does the same thing: it spends most of its time in the shape where the big group points sideways, and the bigger the group, the more it avoids pointing straight up.

## High-Yield Points

- Axial substituents pay two 1,3-diaxial interactions (each roughly half the A-value); equatorial substituents pay none.
- A-value = \(\Delta G^\circ\) for equatorial → axial; methyl ≈ 7.3 kJ/mol, isopropyl ≈ 9.0 kJ/mol, tert-butyl ≈ 21 kJ/mol (commonly taught reference values).
- \(K = [\text{eq}]/[\text{ax}] = e^{-\Delta G^\circ/RT}\) with \(\Delta G^\circ = -A\); methylcyclohexane gives \(K \approx 19\), i.e. ~95% equatorial at 25 °C.
- Bigger substituent → bigger A-value → more one-sided equilibrium.
- tert-Butyl acts as a conformational lock (>99.9% equatorial).
- On ring flip, the substituent simply moves from axial to equatorial; the flip itself is unchanged.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| 1,3-Diaxial interaction | Steric repulsion between an axial substituent and the axial hydrogens two carbons away | The root cause of equatorial preference |
| A-value | Free-energy cost of placing a substituent axial instead of equatorial (kJ/mol or kcal/mol) | The quantitative ruler for predicting chair populations |
| Equatorial preference | The tendency of substituents to occupy the less crowded equatorial position | Governs conformation, reactivity, and spectroscopy of substituted rings |
| Conformational lock | Using a very bulky group (tert-butyl) to hold a ring in one chair | Lets chemists study single conformations |
| Equilibrium constant (\(K\)) | Population ratio of equatorial to axial chairs | Converts an energy difference into a measurable percentage |
| van der Waals contact | Closest comfortable approach of two nonbonded atoms | Crowding beyond this distance costs energy — the origin of steric strain |
| Steric strain | Energy cost of atoms forced closer than their contact distance | Sets the scale of 1,3-diaxial penalties |

## Example

### Example 1: Methylcyclohexane — computing the equatorial population

Methylcyclohexane has \(A \approx 7.3\ \mathrm{kJ/mol}\), so \(\Delta G^\circ = G_{\text{eq}} - G_{\text{ax}} = -7.3\ \mathrm{kJ/mol}\). First write the formula, then substitute. At \(T = 298\ \mathrm{K}\) (25 °C), convert \(R\) to kJ: \(R = 8.314\ \mathrm{J\,mol^{-1}\,K^{-1}} \times \frac{1\ \mathrm{kJ}}{1000\ \mathrm{J}} = 0.008314\ \mathrm{kJ\,mol^{-1}\,K^{-1}}\). Then:

\[ K = e^{-\Delta G^\circ / RT} = e^{-(-7.3)/(0.008314 \times 298)} = e^{7.3/2.48} = e^{2.94} \approx 19 \]

Check the units: \(\mathrm{kJ\,mol^{-1}} \div (\mathrm{kJ\,mol^{-1}\,K^{-1}} \times \mathrm{K}) = 1\), so the exponent is unitless. Percent equatorial:

\[ \%\text{eq} = \frac{K}{1+K} \times 100\% = \frac{19}{20} \times 100\% = 95\% \]

So at room temperature, methylcyclohexane spends about 95% of its time in the equatorial chair — the commonly taught value.

### Example 2: tert-Butylcyclohexane — the lock in action

tert-Butyl has \(A \approx 21\ \mathrm{kJ/mol}\), roughly three times methyl's penalty. Repeat the calculation with \(\Delta G^\circ = -21\ \mathrm{kJ/mol}\) at 298 K:

\[ K = e^{21/2.48} = e^{8.47} \approx 4800 \]

and the percent equatorial is \(4800/4801 \times 100\% \approx 99.98\%\). In practical terms the ring is locked: any other substituent placed on the ring stays put in its own axial or equatorial position, which is exactly why synthetic chemists bolt a tert-butyl group onto a ring when they need a single, predictable conformation.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Equatorial preference | Substituent "rotation" | The preference is a population bias between two chair shapes, not rotation of the substituent |
| A-value | Total strain of the molecule | A-value measures only the axial-vs-equatorial free-energy difference of one substituent |
| Two 1,3-diaxial interactions | Two adjacent (1,2) repulsions | The interactions are with hydrogens two carbons away, one on each side — not with the neighbor |
| \(K > 1\) meaning | "Reaction happens faster" | \(K\) is a population ratio at equilibrium, not a rate |
| Conformational lock | Covalent bond to the ring | The lock is a steric bias, not a new bond; the flip is still possible, just vanishingly rare |
| Bigger group always locked | Any substituent ≥ tert-butyl | Even large groups have measurable A-values; only very bulky ones approach 100% equatorial |

## Quick Review

1. What steric interaction makes the axial chair of a monosubstituted cyclohexane less stable?
2. Define the A-value of a substituent.
3. Write the equilibrium constant expression linking the two chair conformations, and state the sign of \(\Delta G^\circ\) for axial → equatorial.
4. About what fraction of methylcyclohexane is equatorial at 25 °C?
5. Why does tert-butylcyclohexane behave as a conformational lock?
6. If a substituent has \(A = 2.5\ \mathrm{kJ/mol}\), will it be mostly axial or mostly equatorial at room temperature?

<details>
<summary>Show answers</summary>

1. The 1,3-diaxial interaction: the axial substituent crowds the axial hydrogens two carbons away on the same face of the chair.
2. The standard free-energy change for moving the substituent from equatorial to axial, \(\Delta G^\circ = G_{\text{ax}} - G_{\text{eq}}\) (a positive number).
3. \(K = [\text{eq}]/[\text{ax}] = e^{-\Delta G^\circ / RT}\); \(\Delta G^\circ\) is negative (equatorial is lower in energy).
4. About 95% equatorial: \(A \approx 7.3\ \mathrm{kJ/mol}\) gives \(K \approx 19\) at 298 K.
5. Its very large A-value (~21 kJ/mol) pushes the equilibrium to >99.9% equatorial, so the ring cannot effectively flip.
6. Mostly equatorial, but weakly: \(K = e^{2.5/2.48} \approx 2.7\), about 73% equatorial.

</details>

## Related Topics

- Previous: [Axial and Equatorial Bonds in Cyclohexane](06-axial-and-equatorial-bonds-in-cyclohexane.md)
- Next: [Conformations of Disubstituted Cyclohexanes](08-conformations-of-disubstituted-cyclohexanes.md)
- Related: [Organic Compounds: Cycloalkanes and Their Stereochemistry chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-15
- Science note: A-values (methyl 7.3, isopropyl 9.0, tert-butyl 21 kJ/mol) and derived population percentages are commonly taught textbook reference values; verify against current sources.
