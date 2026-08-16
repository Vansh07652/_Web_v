---
title: "Describing a Reaction: Intermediates"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "6: An Overview of Organic Reactions"
topic_number: "10"
source: "organic-chemistry.md"
tags:
  - "describing-a-reaction-intermediates"
  - "science"
status: "complete"
---

# Describing a Reaction: Intermediates

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 6: An Overview of Organic Reactions](../README.md)  
> **Topic:** 10  
> **Source structure:** OpenStax public textbook outline

## Overview

An **intermediate** is a species formed in one elementary step of a mechanism and consumed in the next. On an energy diagram it sits in a valley — a local energy minimum — between two transition states, giving it a real, if sometimes microscopic, lifetime. That is the crucial distinction from a transition state, an energy maximum lasting only a single bond vibration.

Most organic reactions pass through intermediates far more reactive than the reactants themselves: **carbocations**, **carbanions**, **radicals**, and **carbenes**. Understanding what these species look like, how stable they are, and why they form explains a great deal of reactivity — why HBr adds to an alkene through a carbocation, why radicals drive polymerization, and why some intermediates rearrange before reacting. This topic defines intermediates, surveys the common classes, and shows how chemists detect them.

## Why This Matters

Intermediates are where the "action" of a mechanism happens, so most mechanistic evidence is really evidence about intermediates. A rate law that is second-order in one reagent tells you which species meet in the slow step; a rearranged product tells you a carbocation shifted a hydrogen or alkyl group before being trapped; a racemic product from a chiral reactant tells you a planar intermediate erased the stereochemistry. In industry the same logic matters: carbocations drive acid-catalyzed rearrangements that upgrade hydrocarbons to gasoline, and radicals are the chain carriers in polymerization and in biological damage by reactive oxygen species.

## Core Concepts

### What makes a species an intermediate

Three tests identify an intermediate:

- It is **formed in one elementary step and consumed in the next** — never appearing in the overall balanced equation.
- It sits at a **local energy minimum**: both the step that forms it and the step that consumes it are downhill.
- It has a **finite lifetime**, however short — long enough to be a real molecule or ion with a defined structure.

A transition state, by contrast, is a maximum: the atoms are "halfway" between two structures, and the geometry is not a stable molecule. Intermediates can sometimes be observed spectroscopically or trapped with a reactive reagent; transition states never can. As a rule of thumb, intermediates live at least long enough for bond rotation or collision (picoseconds to seconds); a transition state lasts about \(10^{-13}\ \text{s}\) — one vibration.

### Carbocations: electron-poor, planar, and rearranging

A **carbocation** is a carbon bearing only six valence electrons and a formal positive charge, such as the tert-butyl cation \((\text{CH}_3)_3\text{C}^+\). Its carbon is \(sp^2\)-hybridized and trigonal planar, with an empty \(p\) orbital perpendicular to the plane. Stability follows the order:

\[
3^\circ > 2^\circ > 1^\circ > \text{methyl}
\]

Tertiary carbocations are most stable because alkyl groups release electron density by **hyperconjugation** (overlap of a neighboring C–H or C–C \(\sigma\) bond with the empty \(p\) orbital) and by induction. Carbocations react immediately with any electron-rich species — a \(\pi\) bond, a lone pair, a solvent molecule — and frequently **rearrange** by shifting a hydrogen or alkyl group to become more stable. Their planar shape allows attack from either face.

### Carbanions: electron-rich, pyramidal

A **carbanion** is a carbon bearing a lone pair and a formal negative charge, as in methyllithium \((\text{CH}_3\text{Li})\) or the enolate of a ketone. The carbon is \(sp^3\)-hybridized and roughly tetrahedral, with the lone pair occupying one vertex. Stability is the *reverse* of carbocations:

\[
\text{methyl} > 1^\circ > 2^\circ > 3^\circ
\]

Alkyl groups destabilize the negative charge by pushing electron density onto it (induction), so less-substituted carbanions are more stable. Carbanions are strong bases and nucleophiles — key players in carbon–carbon bond-forming reactions.

### Radicals: neutral, unpaired, and chain-carrying

A **radical** (free radical) is a neutral species with one unpaired electron, such as the methyl radical \(\text{CH}_3^{\bullet}\). The carbon is \(sp^2\)-hybridized and planar, with the unpaired electron in a \(p\) orbital. Radical stability follows the carbocation order — \(3^\circ > 2^\circ > 1^\circ > \text{methyl}\) — but radicals are uncharged, so they are neither acids nor bases. They are the chain carriers in halogenation, combustion, and polymerization.

### Carbenes: divalent carbon

A **carbene** is a neutral, divalent carbon with only two bonds and two nonbonding electrons, as in methylene \(\text{:CH}_2\). Carbenes exist in two electronic states — singlet (electrons paired) and triplet (electrons unpaired) — and are highly reactive, inserting into C–H bonds and adding to \(\pi\) bonds. They appear in reactions such as the Simmons–Smith cyclopropanation.

### Detecting and proving intermediates

Because intermediates are short-lived, chemists rely on indirect evidence:

- **Kinetics:** the rate law identifies which species meet in the slow step, implying which intermediate forms next.
- **Trapping:** a reagent that reacts selectively with the proposed intermediate intercepts it and changes the product.
- **Rearrangement products:** a hydride or alkyl shift before capture proves a carbocation existed long enough to rearrange.
- **Low-temperature spectroscopy:** stable intermediates (e.g., the tert-butyl cation in superacid media at \(-60\ ^{\circ}\text{C}\)) have been observed by NMR.
- **Stereochemistry:** racemization at a stereocenter points to a planar intermediate.

## ELI-10: Explain Like I'm 10

> A reaction is like a relay race. The intermediate is the runner who receives the baton from the first runner and passes it to the third — she exists for a moment and then is gone. The transition state is not a runner at all but the exact instant the baton changes hands.

## High-Yield Points

- An intermediate is **formed in one step and consumed in the next**; it sits in an energy valley with a finite lifetime.
- A transition state is an energy **maximum** with essentially zero lifetime — never confuse the two.
- Carbocation stability: \(3^\circ > 2^\circ > 1^\circ > \text{methyl}\) (hyperconjugation, induction); \(sp^2\), planar, empty \(p\) orbital.
- Carbanion stability is reversed: methyl \(> 1^\circ > 2^\circ > 3^\circ\); \(sp^3\), lone pair, basic, nucleophilic.
- Radicals are neutral, unpaired-electron species; stability order matches carbocations.
- Carbocations rearrange (hydride/alkyl shift) to more stable isomers; planar geometry erases stereochemistry.
- Evidence: rate laws, trapping, rearranged products, low-temperature NMR, stereochemical outcomes.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| intermediate | Species formed in one step, consumed in the next; sits in an energy valley | The reactive species that carries the mechanism forward |
| carbocation | Carbon with 6 valence electrons and a positive charge; \(sp^2\), planar | Key electrophile in additions and rearrangements |
| carbanion | Carbon with a lone pair and a negative charge; \(sp^3\), pyramidal | Strong base and nucleophile; key to C–C bond formation |
| radical | Neutral species with one unpaired electron | Chain carrier in halogenation, combustion, polymerization |
| carbene | Neutral divalent carbon with two nonbonding electrons | Inserts into C–H bonds; adds to \(\pi\) bonds |
| hyperconjugation | Stabilization by \(\sigma\)-bond overlap with an adjacent empty \(p\) orbital | Explains carbocation and radical stability |
| rearrangement | Migration of H or alkyl group to an adjacent electron-poor atom | Produces the more stable intermediate, often the major product |

## Worked Examples

### Example 1: Finding the intermediate in HBr addition to propene

Propene \((\text{CH}_3\text{CH=CH}_2)\) reacts with HBr in two elementary steps:

Step 1 — the \(\pi\) electrons of the C=C bond attack the hydrogen of HBr, forming a new C–H bond and breaking the H–Br bond; the bond's electrons move to bromine, giving \(\text{Br}^-\). The product is the secondary carbocation \(\text{CH}_3\text{CH}^+\text{CH}_3\).

Step 2 — bromide ion donates its lone pair to the carbocation's empty \(p\) orbital, forming the C–Br bond and giving 2-bromopropane.

The carbocation is the **intermediate**: formed in step 1, consumed in step 2, absent from the overall equation. As a local minimum it sits in the valley between the two transition states. (This is the Markovnikov outcome — the more stable carbocation forms — detailed in Chapter 7.)

### Example 2: Predicting a rearrangement

In the addition of HBr to 3-methyl-1-butene, protonation puts the positive charge on C-2, giving a secondary carbocation:

\[
(\text{CH}_3)_2\text{CH}-\text{CH}^+\text{CH}_3
\]

This cation sits next to a tertiary carbon bearing a hydrogen. A **1,2-hydride shift** moves that hydrogen (with its electron pair) to the cationic carbon, giving the more stable tertiary carbocation:

\[
(\text{CH}_3)_2\text{C}^+-\text{CH}_2\text{CH}_3
\]

Bromide captures the tertiary cation to give 2-bromo-2-methylbutane as the major product — not the product expected from simple Markovnikov addition. The rearranged product is experimental evidence that a carbocation shifted a hydride before being trapped.

### Example 3: Why a planar intermediate erases stereochemistry

If a reaction at a tetrahedral carbon goes through a carbocation, the planar intermediate's empty \(p\) orbital can be attacked from either face. A chiral starting material therefore gives a **racemic mixture** when the cationic center is the stereocenter. Observing racemization is classic evidence for a carbocation intermediate; a direct backside attack (no intermediate) would instead invert stereochemistry cleanly.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Intermediate | Transition state | Intermediate = energy **minimum**, finite lifetime; transition state = energy **maximum**, \(10^{-13}\ \text{s}\) |
| Carbocation stability order | Carbanion stability order | Carbocations: \(3^\circ > 2^\circ > 1^\circ >\) methyl; carbanions: exactly reversed |
| Carbocation geometry | Tetrahedral carbon | Carbocations are planar \(sp^2\) with an empty \(p\) orbital; carbanions are pyramidal \(sp^3\) |
| Radical | Ion | Radicals are neutral with one unpaired electron; ions carry full charges |
| "Intermediates appear in the equation" | Intermediates cancel out | They never appear in the overall balanced equation — they form and are consumed within it |
| Every species on the diagram | Intermediates only | Peaks are transition states; valleys are intermediates |

## Quick Review

1. State the three tests that identify a reaction intermediate.
2. Why is a transition state not an intermediate?
3. Rank by stability: \((\text{CH}_3)_3\text{C}^+\), \(\text{CH}_3\text{CH}_2^+\), \((\text{CH}_3)_2\text{CH}^+\), \(\text{CH}_3^+\). Explain.
4. In the addition of HBr to propene, which species is the intermediate, and how do you know?
5. What observations suggest a reaction passes through a carbocation intermediate?

<details>
<summary>Show answers</summary>

1. (a) Formed in one elementary step, consumed in the next; (b) sits at a local energy minimum between two transition states; (c) has a finite lifetime as a real species.
2. A transition state is an energy maximum — a fleeting geometry with bonds partially broken and formed — lasting about one bond vibration (\(10^{-13}\ \text{s}\)). It cannot be trapped, so it is not a molecule or intermediate.
3. Tertiary \((\text{CH}_3)_3\text{C}^+\) > secondary \((\text{CH}_3)_2\text{CH}^+\) > primary \(\text{CH}_3\text{CH}_2^+\) > methyl \(\text{CH}_3^+\). More alkyl groups mean more hyperconjugation and inductive donation.
4. The secondary carbocation \(\text{CH}_3\text{CH}^+\text{CH}_3\): it forms when the alkene \(\pi\) bond protonates and is consumed when bromide attacks — absent from the overall equation and sitting between the two transition states.
5. A rate law consistent with a stepwise mechanism, trapping of the cation by a nucleophile, rearranged products (hydride or alkyl shifts), racemization at a stereocenter, and — for stable cations — direct NMR observation at low temperature in superacid media.

</details>

## Related Topics

- Previous: [Describing a Reaction: Energy Diagrams and Transition States](09-describing-a-reaction-energy-diagrams-and-transition-states.md)
- Next: [A Comparison Between Biological Reactions and Laboratory Reactions](11-a-comparison-between-biological-reactions-and-laboratory-reactions.md)
- Related: [An Example of a Polar Reaction: Addition of HBr to Ethylene](04-an-example-of-a-polar-reaction-addition-of-hbr-to-ethylene.md)
- Related: [Radical Reactions](06-radical-reactions.md)
- Related: [An Overview of Organic Reactions chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
