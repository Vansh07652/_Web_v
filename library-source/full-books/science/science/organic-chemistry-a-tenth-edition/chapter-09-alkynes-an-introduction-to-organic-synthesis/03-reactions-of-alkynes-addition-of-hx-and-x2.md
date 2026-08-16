---
title: "Reactions of Alkynes: Addition of HX and X2"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "9: Alkynes: An Introduction to Organic Synthesis"
topic_number: "3"
source: "organic-chemistry.md"
tags:
  - "reactions-of-alkynes-addition-of-hx-and-x2"
  - "science"
status: "complete"
---

# Reactions of Alkynes: Addition of HX and X2

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 9: Alkynes: An Introduction to Organic Synthesis](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Alkynes, like alkenes, undergo **electrophilic addition** across their \(\pi\) bonds — but a triple bond is *two* \(\pi\) bonds, so the addition can happen **once or twice**. This topic covers the two simplest addition families: hydrogen halides (\(\ce{HX}\): \(\ce{HCl}\), \(\ce{HBr}\), \(\ce{HI}\)) and halogens (\(\ce{X2}\): \(\ce{Br2}\), \(\ce{Cl2}\)).

The master pattern is "**alkene addition, then vinyl addition**":

1. The first addition converts the alkyne into an alkene (a **vinyl halide** — halogen on a double-bond carbon).
2. A second addition then converts that alkene into a saturated compound.

The regiochemistry in every step follows **Markovnikov's rule**, and the stereochemistry of halogen addition follows the **anti** (opposite-face) pattern you know from alkene bromination.

Two outcomes deserve special attention because they are classic exam traps:

- **\(\ce{HX}\) adds twice to give a *geminal* dihalide** (\(\ce{R-CX2-R'}\)) — both halogens end up on the *same* carbon, not on adjacent carbons. Students routinely predict the vicinal product and lose the point.
- **\(\ce{X2}\) adds once to give an \((E)\)-dihaloalkene** — the two halogens add *anti* to each other, so they sit on opposite faces of the double bond, forcing the \(E\) geometry. A second addition of \(\ce{X2}\) gives the tetrahaloalkane.

Controlling how much reagent you add (1 equivalent vs. excess) controls how far the reaction goes — the same molecule can stop at the vinyl halide or run all the way to the saturated dihalide.

## Why This Matters

- **You can't build alkynes' chemistry without knowing their additions.** These reactions appear in every synthesis problem in this chapter and later ones. If you don't know that "\(\ce{HBr}\) (2 equiv)" means geminal dibromide, you will misdraw the product of half the reactions you meet.
- **The Markovnikov + anti pattern is a thinking skill.** Once you see that alkyne additions are just alkene additions run twice, you can predict new reactions you've never seen. This topic is the practice ground for that reasoning.
- **Vinyl halides are synthetic building blocks.** The mono-addition products (\(\ce{R-CX=CH2}\) and \((E)\)-\(\ce{R-CX=CHX}\)) are useful intermediates in cross-coupling and polymer chemistry — the very reactions that put halogens on \(sp^2\) carbons where substitution is impossible.
- **Exam frequency is extremely high.** "What product forms when 1 equiv/2 equiv of \(\ce{HBr}\) reacts with propyne?" is a canonical question. This topic gives you the framework to answer it cold.
- **Industrial relevance:** vinyl chloride (\(\ce{CH2=CHCl}\), from \(\ce{HCl}\) + acetylene) is the monomer for PVC; halogenated alkynes and vinyl halides appear throughout materials and pharmaceutical chemistry.

## Core Concepts

### Addition 1: alkyne → vinyl halide

The triple bond acts like a concentrated version of an alkene: it donates \(\pi\)-electron density to an electrophile. For \(\ce{HX}\), the proton adds first, forming a **vinylic carbocation**, which is then trapped by the halide:

\[
\ce{R-C#CH + HX -> R-CX=CH2}
\]

**Markovnikov's rule applies:** the proton goes to the alkyne carbon that already has more hydrogens, and the halogen goes to the more substituted carbon. For a terminal alkyne \(\ce{R-C#CH}\), the product is the **more substituted vinyl halide**, \(\ce{R-CX=CH2}\).

For \(\ce{X2}\) (e.g., \(\ce{Br2}\)), addition goes through a **halonium-ion-like intermediate** and delivers the two halogens to **opposite faces** (anti addition). For a symmetric alkyne like 2-butyne:

\[
\ce{CH3-C#C-CH3 + Br2 -> (E)-CH3-CBr=CHBr-CH3}
\]

The anti addition means the two \(\ce{Br}\) atoms are on opposite sides of the double bond → **\(E\) geometry**. For terminal alkynes, the halogen ends up on the more substituted carbon first, again following Markovnikov.

### Addition 2: vinyl halide → saturated product (or tetrahalide)

The vinyl halide from step 1 is still an alkene, so it reacts again:

- **\(\ce{HX}\) (excess):** Markovnikov addition to the vinyl halide puts the *second* halogen on the carbon that already carries the first halogen — because that carbon is the more substituted one. Both halogens end up on the same carbon:

\[
\ce{R-CX=CH2 + HX -> R-CX2-CH3}
\]

This is the **geminal dihalide** — the trap to remember. (It's also exactly how you make geminal dihalides from alkynes, which Topic 2's preparation section uses in reverse.)

- **\(\ce{X2}\) (excess):** anti addition to the \((E)\)-dihaloalkene gives the **tetrahaloalkane**:

\[
\ce{CH3-CBr=CHBr-CH3 + Br2 -> CH3-CBr2-CHBr2-CH3}
\]

### Why HX gives geminal, not vicinal, dihalides

Both additions obey Markovnikov. The first halogen lands on the more substituted carbon; the second addition to the vinyl halide also places the new halogen on the more substituted carbon — which is now the same carbon bearing the first halogen. The result is **both halogens on one carbon** (\(\ce{R-CX2-R'}\)), the geminal arrangement. Vicinal dihalides (halogens on adjacent carbons) are the product of *alkene* halogenation, not of alkyne \(\ce{HX}\) addition — a distinction examiners love.

### Stoichiometry is the control knob

- **1 equiv \(\ce{HX}\)** (or \(\ce{X2}\)) → mono-addition product (vinyl halide / dihaloalkene).
- **Excess \(\ce{HX}\)** (2 equiv) → geminal dihalide.
- **Excess \(\ce{X2}\)** (2 equiv) → tetrahaloalkane.

In practice, excess reagent drives the second addition; using exactly 1 equivalent requires careful control (and the mono-addition product is often contaminated), but the *conceptual* point is exact: the equivalents determine the product.

## ELI-10: Explain Like I'm 10

A triple bond is like a rope made of three strands. A pair of scissors (one molecule of \(\ce{HBr}\)) snips one strand, and the rope becomes a double bond with a little flag (the halogen) on it. Snip again with another pair of scissors, and the rope becomes a single bond with two flags. Here's the sneaky part: the scissors always cut so both flags land on the same side — same carbon for \(\ce{HBr}\), but for \(\ce{Br2}\) the two flags land on opposite sides, so the double bond is twisted into the "E" shape. Count the scissors (equivalents) and you know how many strands get cut.

## High-Yield Points

- **Alkyne = two \(\pi\) bonds = up to two additions.** 1 equiv → alkene-type product; excess → saturated product.
- **\(\ce{HX}\) additions are Markovnikov** at every step; **2 equiv \(\ce{HX}\) gives a geminal dihalide** \(\ce{R-CX2-R'}\) — never predict vicinal.
- **\(\ce{X2}\) additions are anti**; 1 equiv \(\ce{Br2}\) gives the **(\(E\))-dihaloalkene**, excess gives the tetrahaloalkane.
- Terminal alkynes: first \(\ce{HX}\) lands the halogen on the more substituted (internal) carbon — \(\ce{R-C#CH + HBr -> R-CBr=CH2}\).
- The vinyl halide intermediate is still an alkene — it reacts again; that's the whole game.
- Markovnikov + anti + stoichiometry predict *every* product in this topic; no memorization of individual examples needed.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Vinyl halide | A halide on an \(sp^2\) (alkene) carbon, \(\ce{R-CX=CH2}\). | The mono-addition product; still reactive toward a second addition. |
| Geminal dihalide | Two halogens on the same carbon, \(\ce{R-CX2-R'}\). | The product of 2 equiv \(\ce{HX}\) on an alkyne; the classic exam trap. |
| Vicinal dihalide | Two halogens on adjacent carbons. | The product of alkene + \(\ce{X2}\), NOT of alkyne + \(\ce{HX}\). |
| Markovnikov's rule | The electrophile's \(\ce{H}\) adds to the carbon with more hydrogens; the other group goes to the more substituted carbon. | Dictates regiochemistry in every \(\ce{HX}\) addition here. |
| Anti addition | The two added groups come from opposite faces of the \(\pi\) bond. | Explains the \((E)\) geometry of dihaloalkenes and the stereochemistry of \(\ce{X2}\) additions. |
| Tetrahaloalkane | A saturated alkane bearing four halogens. | The product of excess \(\ce{X2}\) on an alkyne. |
| \((E)\) isomer | The higher-priority groups on opposite sides of a double bond. | The specific geometry forced by anti addition of \(\ce{X2}\). |

## Worked Examples

### Example 1: Propyne + HBr, 1 equiv then excess (the canonical problem)

**Setup:** Predict the product when propyne, \(\ce{CH3-C#CH}\), reacts with (a) 1 equiv \(\ce{HBr}\) and (b) excess \(\ce{HBr}\).

**(a) 1 equiv — mono-addition:** The proton adds to the terminal carbon (more hydrogens — Markovnikov), giving a vinylic carbocation at the internal carbon; \(\ce{Br^-}\) attacks there:

\[
\ce{CH3-C#CH + HBr -> CH3-CBr=CH2}
\]

Product: **2-bromopropene** (the more substituted vinyl bromide).

**(b) excess — second addition:** The vinyl halide \(\ce{CH3-CBr=CH2}\) is still an alkene. \(\ce{HBr}\) adds Markovnikov again: \(\ce{H}\) to the \(\ce{CH2}\) carbon, \(\ce{Br}\) to the carbon already bearing \(\ce{Br}\) (more substituted):

\[
\ce{CH3-CBr=CH2 + HBr -> CH3-CBr2-CH3}
\]

Product: **2,2-dibromopropane** — a **geminal** dibromide, both bromines on C2.

**Answer:** (a) 2-bromopropene; (b) 2,2-dibromopropane. The second halogen lands on the same carbon as the first — geminal, not vicinal.

### Example 2: 2-butyne + Br2 (stereochemistry in words)

**Setup:** Predict the product of 2-butyne, \(\ce{CH3-C#C-CH3}\), with 1 equiv \(\ce{Br2}\), then with excess \(\ce{Br2}\), describing the geometry.

**(1 equiv):** \(\ce{Br2}\) adds anti across one \(\pi\) bond. The two \(\ce{Br}\) atoms end up on opposite faces of the resulting double bond, so the two \(\ce{CH3}\) groups are on opposite sides too — the **\((E)\)-isomer**:

\[
\ce{CH3-C#C-CH3 + Br2 -> (E)-CH3-CBr=CHBr-CH3}
\]

Product: **(\(E\))-2,3-dibromo-2-butene** (the \(E\) geometry is the signature of anti addition).

**(excess):** The remaining double bond adds \(\ce{Br2}\) (again anti) to give the saturated tetrahalide:

\[
\ce{(E)-CH3-CBr=CHBr-CH3 + Br2 -> CH3-CBr2-CHBr2-CH3}
\]

Product: **2,2,3,3-tetrabromobutane**.

**Answer:** 1 equiv → \((E)\)-2,3-dibromo-2-butene; excess → 2,2,3,3-tetrabromobutane. The \(E\) geometry comes straight from anti addition.

### Example 3: Stoichiometry planning (dimensional analysis)

**Setup:** A synthesis calls for converting 0.25 mol of 1-hexyne, \(\ce{CH3(CH2)3-C#CH}\), to the geminal dibromide with excess \(\ce{HBr}\). How many moles of \(\ce{HBr}\) must be delivered to satisfy the 1:2 alkyne:HBr stoichiometry?

**Formula first** (each alkyne consumes 2 mol \(\ce{HBr}\) — one per addition):

\[
n(\ce{HBr}) = n(\text{alkyne}) \times \frac{2\ \text{mol } \ce{HBr}}{1\ \text{mol alkyne}}
\]

**Substitute:**

\[
n(\ce{HBr}) = 0.25\ \text{mol} \times \frac{2}{1} = 0.50\ \text{mol}
\]

**Answer:** 0.50 mol \(\ce{HBr}\) minimum (units check: mol alkyne × mol \(\ce{HBr}\)/mol alkyne → mol \(\ce{HBr}\)). "Excess" in the lab means delivering more than this, but 2 equivalents is the stoichiometric requirement.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Alkyne + 2 HX | Alkene + X2 | Alkyne + 2 \(\ce{HX}\) → **geminal** dihalide; alkene + \(\ce{X2}\) → vicinal dihalide. Different starting materials, different products. |
| Markovnikov product of first addition | Markovnikov product of second addition | Both add \(\ce{H}\) to the H-richer carbon; in the second addition that means the new \(\ce{X}\) lands on the already-halogenated carbon. |
| 1 equiv vs. excess | "Same product either way" | 1 equiv stops at the vinyl halide/dihaloalkene; excess runs to geminal dihalide/tetrahalide. Equivalents change the answer. |
| \((E)\)-dihaloalkene | \((Z)\)-dihaloalkene | Anti addition forces the two \(\ce{X}\)'s to opposite faces → \(E\). Predict \(E\), never \(Z\), for \(\ce{X2}\) addition to alkynes. |
| Vinyl halide reactivity | Alkyl halide reactivity | Vinyl halides resist substitution but undergo addition/elimination; that's why a second addition (not substitution) follows. |
| Regiochemistry (Markovnikov) | Stereochemistry (anti) | Markovnikov: *which carbon* gets \(\ce{X}\). Anti: *which face*. Both apply simultaneously to \(\ce{X2}\) reactions. |

## Quick Review

1. What is the product of propyne + 1 equiv \(\ce{HBr}\)? Of propyne + excess \(\ce{HBr}\)?
2. Why does \(\ce{HBr}\) addition give a geminal dihalide rather than a vicinal one?
3. 1 equiv \(\ce{Br2}\) on 2-butyne gives which product, and what geometry?
4. What is the product of excess \(\ce{Br2}\) on 2-butyne?
5. How many moles of \(\ce{Cl2}\) are needed to fully convert 0.10 mol of acetylene, \(\ce{HC#CH}\), to the tetrachloride?
6. A student predicts 1,2-dibromobutane from 1-butyne + excess \(\ce{HBr}\). What did they get wrong?

<details>
<summary>Show answers</summary>

1. 2-bromopropene (\(\ce{CH3-CBr=CH2}\)); then 2,2-dibromopropane (\(\ce{CH3-CBr2-CH3}\), geminal).
2. Both additions follow Markovnikov. The first halogen goes to the more substituted carbon; in the second addition the more substituted carbon is the one already bearing the first halogen — so both halogens collect on the same carbon.
3. \((E)\)-2,3-dibromo-2-butene — anti addition puts the two \(\ce{Br}\) atoms on opposite faces, giving \(E\) geometry.
4. 2,2,3,3-tetrabromobutane, \(\ce{CH3-CBr2-CHBr2-CH3}\).
5. Stoichiometry is 2 mol \(\ce{Cl2}\) per mol alkyne (one per \(\pi\) bond): \(0.10 \times 2 = 0.20\) mol \(\ce{Cl2}\).
6. They predicted the alkene-type (vicinal) product. Excess \(\ce{HBr}\) on an alkyne gives the **geminal** dibromide: 2,2-dibromobutane, \(\ce{CH3CH2-CBr2-CH3}\). Vicinal dibromides come from \(\ce{Br2}\) + alkene, not \(\ce{HBr}\) + alkyne.

</details>

## Related Topics

- Previous: [Preparation of Alkynes: Elimination Reactions of Dihalides](02-preparation-of-alkynes-elimination-reactions-of-dihalides.md)
- Next: [Hydration of Alkynes](04-hydration-of-alkynes.md)
- Related: [Halogenation of Alkenes: Addition of X2](../chapter-08-alkenes-reactions-and-synthesis/02-halogenation-of-alkenes-addition-of-x2.md)
- Related: [Alkynes: An Introduction to Organic Synthesis chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure. All product predictions follow standard Markovnikov/anti-addition rules; no experimental procedures or safety data are included.
- Last updated: 2026-08-16
