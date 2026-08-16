---
title: "Reduction of Alkynes"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "9: Alkynes: An Introduction to Organic Synthesis"
topic_number: "5"
source: "organic-chemistry.md"
tags:
  - "reduction-of-alkynes"
  - "science"
status: "complete"
---

# Reduction of Alkynes

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 9: Alkynes: An Introduction to Organic Synthesis](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

Reduction of an alkyne means adding hydrogen across the triple bond, but how much hydrogen you add — and which alkene isomer you get — depends entirely on the reagent you choose. An alkyne has two \( \pi \) bonds, so it can be reduced in stages:

- **Complete reduction** with \(\mathrm{H_2}\) over a metal catalyst (Pd, Pt, or Ni) adds two equivalents of hydrogen and gives an **alkane**.
- **Lindlar hydrogenation** (hydrogen gas over a "poisoned" palladium catalyst) stops after adding one equivalent and gives a **cis-alkene** — both hydrogens add to the same face of the triple bond.
- **Dissolving-metal reduction** with sodium or lithium in liquid ammonia adds the two hydrogens from opposite faces and gives a **trans-alkene**.

The practical message: alkynes are the only hydrocarbon family from which you can prepare both geometric isomers of an alkene selectively. That stereochemical control is why alkynes appear so often in synthesis problems and in the preparation of natural products.

## Why This Matters

Stereochemistry is chemistry in three dimensions, and reduction of alkynes is a textbook demonstration of how reaction conditions — not just starting materials — control the shape of a product. Cis- and trans-alkenes have very different physical properties and biological activities: fatty acids in your body are cis-unsaturated, margarine-style hardened fats contain trans isomers, and insect pheromones often signal with a specific alkene geometry. Being able to build either isomer deliberately is a core skill in organic synthesis, pharmaceutical process chemistry, and the study of lipid biochemistry. On exams, "reduce this alkyne" is a favorite question precisely because the reagent choice (Lindlar vs. Na/NH₃ vs. H₂/Pd) completely changes the answer.

## Core Concepts

### Complete reduction to an alkane

With excess \(\mathrm{H_2}\) and a metal catalyst such as palladium on carbon, both \( \pi \) bonds are hydrogenated and the alkyne becomes the fully saturated alkane:

\[
\mathrm{R{-}C{\equiv}C{-}R' + 2\,H_2 \xrightarrow{Pd/C} R{-}CH_2{-}CH_2{-}R'}
\]

The reaction is exothermic, and the catalyst adsorbs hydrogen and the alkyne onto its surface, so both hydrogens add to the same face (syn addition). Because the intermediate alkene is also adsorbed and hydrogenated rapidly, the alkene is not isolated — the alkane is the only product. This method is used when the goal is simply to remove the triple bond completely.

### Lindlar hydrogenation: syn addition to a cis-alkene

The Lindlar catalyst is palladium deposited on calcium carbonate and "poisoned" with a lead compound and quinoline. The poison slows the catalyst enough that hydrogenation stops after the first equivalent of \(\mathrm{H_2}\), leaving the alkene:

\[
\mathrm{R{-}C{\equiv}C{-}R' + H_2 \xrightarrow{Lindlar\ catalyst} cis\text{-}R{-}CH{=}CH{-}R'}
\]

Hydrogen adds to the alkyne's two carbons from the same side of the triple bond (syn addition), and the substituents on the resulting double bond therefore end up on the same side — the **cis** isomer. For example, 2-butyne gives cis-2-butene. Lindlar hydrogenation is the standard way to prepare a cis-alkene from an alkyne.

### Dissolving-metal reduction: anti addition to a trans-alkene

Treating the alkyne with sodium or lithium metal in liquid ammonia (a "dissolving-metal" reduction) delivers electrons one at a time. The mechanism goes through a radical anion, then a vinylic radical, then a vinylic anion — each intermediate is protonated by the ammonia solvent. The key stereochemical result is **anti addition**: the two hydrogens end up on opposite faces of the double bond, giving the **trans** alkene:

\[
\mathrm{R{-}C{\equiv}C{-}R' + 2\,Na + 2\,NH_3 \xrightarrow{liquid\ NH_3} trans\text{-}R{-}CH{=}CH{-}R' + 2\,NaNH_2
\]

The trans isomer is favored because the intermediate anions prefer the conformation with the bulky substituents as far apart as possible. For example, 2-butyne gives trans-2-butene. Note that dissolving-metal reduction also stops at the alkene — it does not reduce the double bond further, because alkenes are not reduced by Na/NH₃ under these conditions.

### Choosing the reagent: a decision map

- Want an **alkane**? Use \(\mathrm{H_2}\) + Pd/C (or Pt, Ni) with excess hydrogen.
- Want a **cis-alkene**? Use \(\mathrm{H_2}\) + Lindlar catalyst.
- Want a **trans-alkene**? Use Na (or Li) in liquid \(\mathrm{NH_3}\).

The same starting alkyne can give two different alkene isomers, which makes alkyne reduction a powerful, predictable tool for stereoselective synthesis. Terminal alkynes (e.g., 1-butyne, \(\mathrm{CH_3CH_2C{\equiv}CH}\)) give 1-alkenes with either reagent — there is no cis/trans distinction at a terminal carbon, so Lindlar and Na/NH₃ give the same 1-alkene.

## ELI-10: Explain Like I'm 10

A triple bond is like two ropes twisted tightly together. If you pull them apart gently with a special tool (Lindlar), the two ends stay on the same side — that's the cis shape, like your hands meeting in front of you. If you instead use a different tool (sodium in liquid ammonia), the ends flip to opposite sides — that's the trans shape, like your hands spread wide apart. And if you just keep pulling until the ropes are completely loose, you get a plain single bond (an alkane). Same rope, three different results — the tool you pick decides the shape.

## High-Yield Points

- **Three reagents, three products:** \(\mathrm{H_2/Pd}\) → alkane; Lindlar → cis-alkene; Na/NH₃ → trans-alkene.
- **Lindlar = syn addition** (both H's to the same face) → cis.
- **Na/NH₃ = anti addition** (H's to opposite faces) → trans, via radical-anion intermediates.
- **Both partial reductions stop at the alkene** — they do not make the alkane.
- **Terminal alkynes** give 1-alkenes regardless of which partial-reduction reagent is used (no cis/trans isomers possible at a terminal carbon).
- **Hydrogen stoichiometry:** 1 mol alkyne needs 2 mol \(\mathrm{H_2}\) for complete reduction, 1 mol \(\mathrm{H_2}\) for partial reduction.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Reduction | Addition of hydrogen (or gain of electrons) to a molecule | Central transformation of this topic; alkyne → alkene or alkane |
| Hydrogenation | Reaction of a compound with \(\mathrm{H_2}\), usually over a catalyst | The specific form of reduction used for alkynes and alkenes |
| Lindlar catalyst | Poisoned Pd/CaCO₃ that stops at the alkene | The standard reagent for cis-alkenes from alkynes |
| Syn addition | Both new atoms add to the same face of the multiple bond | Lindlar hydrogenation is syn → cis product |
| Anti addition | New atoms add to opposite faces | Dissolving-metal reduction is anti → trans product |
| Dissolving-metal reduction | Na or Li in liquid NH₃ that transfers electrons one at a time | The standard route to trans-alkenes from alkynes |
| Radical anion | Species with an unpaired electron and a negative charge | Key intermediate in the Na/NH₃ mechanism |

## Example: Choosing the Reduction

**Worked example 1 (reagent → product).** Starting from 3-hexyne, \(\mathrm{CH_3CH_2C{\equiv}CCH_2CH_3}\):

- \(\mathrm{H_2}\) + Lindlar → **cis-3-hexene** (\(\mathrm{CH_3CH_2CH{=}CHCH_2CH_3}\), both ethyl groups on the same side).
- Na in liquid \(\mathrm{NH_3}\) → **trans-3-hexene** (ethyl groups on opposite sides).
- Excess \(\mathrm{H_2}\) + Pd/C → **hexane**, \(\mathrm{CH_3CH_2CH_2CH_2CH_2CH_3}\).

**Worked example 2 (stoichiometry with dimensional analysis).** How many liters of \(\mathrm{H_2}\) gas (at STP) are needed to completely reduce 10.0 g of 2-butyne, \(\mathrm{CH_3C{\equiv}CCH_3}\), to butane? Write the conversion chain first, then substitute numbers:

\[
n(\mathrm{2\text{-}butyne}) = \frac{10.0\ \mathrm{g}}{54.09\ \mathrm{g/mol}} = 0.185\ \mathrm{mol}
\]

Complete reduction needs 2 mol \(\mathrm{H_2}\) per mol alkyne:

\[
n(\mathrm{H_2}) = 0.185\ \mathrm{mol} \times \frac{2\ \mathrm{mol\ H_2}}{1\ \mathrm{mol\ alkyne}} = 0.370\ \mathrm{mol}
\]

At STP, 1 mol of gas occupies 22.4 L:

\[
V(\mathrm{H_2}) = 0.370\ \mathrm{mol} \times 22.4\ \mathrm{L/mol} = 8.29\ \mathrm{L}
\]

So **8.29 L of H₂ gas at STP** is required.

**Worked example 3 (synthesis planning).** A chemist needs cis-2-pentene. Starting from 2-pentyne, \(\mathrm{CH_3C{\equiv}CCH_2CH_3}\), the answer is a single step: hydrogenate with \(\mathrm{H_2}\) over the Lindlar catalyst to give cis-2-pentene. If trans-2-pentene were needed instead, the same alkyne would be treated with Na in liquid NH₃. The alkyne is the "universal alkene precursor" because both isomers are accessible from it.

## Common Confusions

| Do Not Confuse | With | The Difference |
|---|---|---|
| Lindlar catalyst | \(\mathrm{H_2/Pd}\) | Lindlar is poisoned and stops at the alkene (cis); plain Pd/C goes all the way to the alkane |
| Na/NH₃ | Lindlar | Na/NH₃ adds H's to opposite faces (trans); Lindlar adds them to the same face (cis) |
| Syn addition | Anti addition | Same face vs. opposite faces of the multiple bond |
| "Reduction" | "Hydrogenation" | Hydrogenation is reduction by \(\mathrm{H_2}\); reduction can also happen via electrons (Na/NH₃) with no \(\mathrm{H_2}\) gas |
| Cis vs. trans for terminal alkynes | Cis vs. trans for internal alkynes | Terminal alkynes (RC≡CH) give 1-alkenes with no geometric isomers; only internal alkynes show cis/trans product differences |

## Quick Review

1. What product results from treating 2-butyne with \(\mathrm{H_2}\) and Lindlar catalyst?
2. What product results from treating 2-butyne with Na in liquid NH₃?
3. How many moles of \(\mathrm{H_2}\) are consumed when 1 mol of an alkyne is completely reduced to an alkane?
4. Why does Lindlar hydrogenation stop at the alkene instead of continuing to the alkane?
5. A student claims Na/NH₃ reduction adds two hydrogens to the same face of the triple bond. Is that correct?
6. What single reagent converts 1-hexyne into hexane?

<details>
<summary>Show answers</summary>

1. **cis-2-butene** — Lindlar hydrogenation is syn addition and stops at the alkene.
2. **trans-2-butene** — dissolving-metal reduction is anti addition, giving the more stable trans isomer.
3. **2 mol H₂** — one equivalent for each of the two \( \pi \) bonds of the triple bond.
4. The catalyst is "poisoned" with lead and quinoline, which slows hydrogenation so much that the alkene (which would need a second addition) is essentially unreactive under these conditions; the reaction stops after one equivalent.
5. No. Na/NH₃ reduction adds hydrogens to **opposite faces** (anti addition), giving the trans alkene. Same-face addition is Lindlar's job.
6. Excess \(\mathrm{H_2}\) over Pd/C (or Pt or Ni) — complete hydrogenation to hexane, \(\mathrm{CH_3(CH_2)_4CH_3}\).

</details>

## Related Topics

- Previous: [Hydration of Alkynes](04-hydration-of-alkynes.md)
- Next: [Oxidative Cleavage of Alkynes](06-oxidative-cleavage-of-alkynes.md)
- Related: [Reactions of Alkynes: Addition of HX and X2](03-reactions-of-alkynes-addition-of-hx-and-x2.md)
- Related: [Alkynes: An Introduction to Organic Synthesis chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
