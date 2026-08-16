---
title: "Kinetic versus Thermodynamic Control of Reactions"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "14: Conjugated Compounds and Ultraviolet Spectroscopy"
topic_number: "3"
source: "organic-chemistry.md"
tags:
  - "kinetic-versus-thermodynamic-control-of-reactions"
  - "science"
status: "complete"
---

# Kinetic versus Thermodynamic Control of Reactions

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 14: Conjugated Compounds and Ultraviolet Spectroscopy](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Some reactions can give two (or more) different products from the same starting material, and the product you isolate depends on *when* you stop the reaction and *how* you run it. When the product mixture is set by how **fast** each product forms, the reaction is under **kinetic control** and the major product is the one formed through the **lowest-energy transition state** — the fastest pathway. When the mixture is set by how **stable** each product is, the reaction is under **thermodynamic control** and the major product is the one with the **lowest energy**. The classic demonstration is HBr addition to 1,3-butadiene: at low temperature the 1,2-addition product dominates (kinetic control); at higher temperature, where the addition becomes reversible and the mixture can equilibrate, the 1,4-addition product — with its more substituted, more stable double bond — dominates (thermodynamic control). This topic explains the two regimes, how to tell them apart, and how temperature steers a reaction toward either product.

## Why This Matters

- **It explains why the same reaction can give different products.** Run a reaction cold and you may isolate the fast product; run it warm and you may isolate the stable one. Temperature-dependent product changes stop looking like chaos and become a dial you can turn.
- **It is central to synthesis planning.** Need the 1,2-product? Keep it cold and quench early. Need the 1,4-product? Warm the mixture and allow equilibration. This strategy recurs throughout synthesis.
- **It generalizes far beyond dienes.** The same reasoning governs enolate alkylation (kinetic vs. thermodynamic enolates), Diels–Alder endo/exo selectivity, and HX addition to alkenes where elimination competes.
- **It clarifies the meaning of "stability."** The most stable product does not always form — *rate*, not just stability, decides what you collect, and reversibility is the switch between regimes.

## Core Concepts

### The energy profile: two products, two barriers, two wells

For HBr + 1,3-butadiene, both products form from the same allylic carbocation intermediate (topic 14.2). The second step — nucleophilic attack — passes through two different transition states:

- **1,2-addition** passes through a **lower** activation barrier: the bromide attacks the nearer cationic carbon, a geometrically easy approach.
- **1,4-addition** passes through a **higher** barrier, but its product (1-bromo-2-butene) has an internal, disubstituted double bond and sits in a **deeper** energy well than the 1,2-product (3-bromo-1-butene, terminal double bond).

So the same diagram contains a "fast product" (low barrier, higher energy) and a "stable product" (higher barrier, lower energy). Which you isolate is decided by temperature and reversibility.

### Kinetic control: the fastest product wins

Under kinetic control the product ratio is set by the relative rates of the competing pathways — the Arrhenius view:

\[
k = A e^{-E_a/RT}
\]

where \(k\) is the rate constant, \(A\) the frequency factor, \(E_a\) the activation energy, \(R\) the gas constant, and \(T\) the temperature in kelvin. The pathway with the smaller \(E_a\) always has the larger \(k\), so the lower-barrier 1,2-product forms faster. Kinetic control dominates when the temperature is **low**, the reaction is **irreversible**, and the reaction is **stopped early** (before slow equilibration can occur).

### Thermodynamic control: the most stable product wins

Under thermodynamic control the ratio is set by product *stabilities* — the equilibrium view:

\[
\Delta G^\circ = -RT \ln K
\]

where \(\Delta G^\circ\) is the free-energy difference between products and \(K\) the equilibrium constant for their interconversion. The more stable product (more negative \(\Delta G^\circ\)) is favored at equilibrium. Thermodynamic control dominates when the temperature is **high enough** to surmount the reverse barriers, the reaction is **reversible**, and sufficient **time** allows equilibration. For butadiene + HBr, the 1,4-product wins at equilibrium because its more substituted double bond makes it more stable — the same Zaitsev logic used for alkene stability.

### The temperature experiment that reveals both regimes

| Conditions | Major product | Control regime |
|---|---|---|
| −80 °C (low T) | 1,2-adduct (3-bromo-1-butene) | Kinetic |
| 40 °C (high T) | 1,4-adduct (1-bromo-2-butene) | Thermodynamic |

At −80 °C the lower barrier dominates completely and the addition is effectively irreversible, so the fast 1,2-product accumulates. At 40 °C the system has enough energy to pass the reverse barrier; HBr adds and eliminates repeatedly, and the mixture equilibrates toward the more stable 1,4-product. Same intermediate, same reagents, two different answers — temperature is the switch.

### How to identify the control regime

Ask three questions:

1. **Is the reaction reversible?** If products can re-form starting material (HX addition, enolate formation, some cycloadditions), thermodynamic control is possible.
2. **What does temperature do to the product ratio?** If cold gives one product and warm gives another, you are watching kinetic → thermodynamic crossover.
3. **Which product is more substituted / more conjugated / more stable?** That one is the thermodynamic product; the one formed through the lower barrier — often the less stable one — is the kinetic product.

## ELI-10: Explain Like I'm 10

> Imagine two slides leading to two sandboxes. One slide is short and fast (the 1,2-product) — everyone slides down it first. The other is tall and scary at the top, but the sandbox at the bottom is much nicer (the 1,4-product). If it's freezing cold and you only have a minute, everyone uses the short slide. But on a warm day with all afternoon, some kids climb back up the short slide, walk over, and go down the tall one to reach the nicer sandbox — and in the end most kids play in the nice sandbox. Cold and quick: the fast slide wins. Warm and patient: the nice sandbox wins.

## High-Yield Points

- Kinetic control: product ratio set by **relative rates** (lower \(E_a\) → faster → major at low T, irreversible conditions).
- Thermodynamic control: ratio set by **relative stabilities** (more stable product → major at high T, reversible/equilibrated).
- HBr + 1,3-butadiene: −80 °C → 1,2-adduct major; 40 °C → 1,4-adduct major.
- The 1,4-product has the more substituted (more stable) double bond — the thermodynamic product.
- The 1,2-product forms through the lower-energy transition state — the kinetic product.
- Both products share the same allylic carbocation intermediate; reversibility lets them interconvert.
- Rate: \(k = Ae^{-E_a/RT}\); equilibrium: \(\Delta G^\circ = -RT\ln K\).
- Rule of thumb: low T + early quench → kinetic product; high T + time + reversibility → thermodynamic product.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| kinetic control | Product distribution set by reaction *rates*; the fastest-forming product dominates | Gives the 1,2-product from butadiene at low temperature |
| thermodynamic control | Product distribution set by product *stabilities*; the most stable product dominates | Gives the 1,4-product from butadiene at higher temperature |
| activation energy (\(E_a\)) | Energy barrier between reactants and the transition state | The lower-barrier pathway is faster and wins under kinetic control |
| transition state | The highest-energy configuration along a reaction coordinate | Its height decides rate; it resembles the nearby product (Hammond postulate) |
| reversibility | Ability of products to revert to reactants and re-form through the intermediate | The condition that makes thermodynamic control accessible |
| equilibrium constant (\(K\)) | \(K = e^{-\Delta G^\circ/RT}\); how strongly the more stable product is favored | Sets the final ratio under thermodynamic control |
| Zaitsev (Saytzeff) rule | Addition/elimination favors the more substituted alkene | Explains why the internal alkene (1,4-product) is the stable, thermodynamic product |
| Hammond postulate | The transition state resembles the nearest stable species in energy | Explains why the 1,4 transition state is high but leads to the deep well |

## How It Works / Step-by-Step Process

1. Draw the mechanism; identify all products and any common intermediates.
2. Rank the products by stability (substitution, conjugation, sterics). The most stable is the thermodynamic product.
3. Rank the pathways by activation energy (transition-state analysis, Hammond postulate). The lowest barrier is the kinetic product.
4. Ask whether the reaction is reversible under the planned conditions (temperature, catalyst, solvent).
5. If irreversible or low T: expect the kinetic product; quench early to preserve it.
6. If reversible and high T: expect the thermodynamic product; allow time for equilibration.
7. Verify: vary the temperature and watch the product ratio change — a crossover is the signature of kinetic vs. thermodynamic control.

## Worked Examples

### Example 1: Quantifying the kinetic rate advantage

**Formula first.** The relative rates of the two product-forming pathways follow from Arrhenius; taking the ratio cancels the frequency factor:

\[
\frac{k_{1,2}}{k_{1,4}} = \frac{A e^{-E_{a,1,2}/RT}}{A e^{-E_{a,1,4}/RT}} = e^{(E_{a,1,4} - E_{a,1,2})/RT}
\]

**Substitution.** Suppose the 1,4-addition barrier is 8 kJ/mol higher (\(E_{a,1,4} - E_{a,1,2} = 8{,}000\ \text{J/mol}\)) and the reaction runs at 253 K (−20 °C), with \(R = 8.314\ \text{J mol}^{-1}\text{K}^{-1}\):

\[
\frac{k_{1,2}}{k_{1,4}} = e^{8{,}000/(8.314 \times 253)} = e^{3.80} \approx 45
\]

**Interpretation.** At −20 °C the 1,2-product forms ~45× faster — strong kinetic preference. Unit check: J/mol divided by (J mol⁻¹ K⁻¹ × K) leaves a dimensionless exponent, as required.

**Temperature dependence.** Repeat at 313 K (40 °C):

\[
\frac{k_{1,2}}{k_{1,4}} = e^{8{,}000/(8.314 \times 313)} = e^{3.07} \approx 22
\]

The rate advantage halves — warmer conditions narrow the kinetic gap. Even more importantly, at 40 °C the reaction is reversible, so the mixture no longer reflects rates at all: it drifts to the equilibrium ratio favoring the more stable 1,4-product. "Cold for kinetic, warm for thermodynamic" is a rule, not a guess.

### Example 2: Computing the equilibrium product ratio

**Formula first.** Under thermodynamic control the product ratio is the equilibrium constant for interconversion:

\[
K = e^{-\Delta G^\circ / RT}
\]

**Substitution.** Suppose the 1,4-product is 6 kJ/mol more stable, so \(\Delta G^\circ\) for 1,4 → 1,2 is +6 kJ/mol (1,4 favored), and the mixture equilibrates at 313 K:

\[
K = e^{-(6{,}000\ \text{J/mol})/(8.314\ \text{J mol}^{-1}\text{K}^{-1} \times 313\ \text{K})} = e^{-2.31} \approx 0.099
\]

**Interpretation.** \(K = [1,2]/[1,4] \approx 0.10\), so the 1,4-product is favored about 10:1 at equilibrium — the thermodynamic product dominates. Percent composition: \(100\% \times 1/(1 + 0.099) \approx 91\%\) 1,4-product. Compare with Example 1: even though the 1,2-product *forms* faster at any temperature, at equilibrium it is the *minority*. Rate controls what forms first; stability controls what remains.

### Example 3: Choosing conditions to isolate a specific product

**Scenario.** A synthesis of 1-bromo-2-butene from 1,3-butadiene requires the 1,4-adduct; the 1,2-adduct is wasted byproduct.

**Strategy.** The 1,2-product is the kinetic product, so avoid kinetic conditions: do **not** run at −80 °C, do **not** quench immediately, do **not** trap the first-formed product irreversibly. Instead: run the HBr addition at elevated temperature (e.g., 40 °C), allow equilibration through the reversible HBr addition/elimination cycle, and isolate the 1,4-adduct as the major product (~80%).

**Reasoning check.** This is Examples 1–2 applied backward: the temperature that *minimizes* the kinetic ratio is the temperature that *enables* equilibrium. If the target were the 1,2-adduct, the opposite recipe applies — low temperature and early quench. Understanding the control regime is the difference between a 20% and an 80% yield of the desired isomer.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| "The most stable product always forms" | Only under thermodynamic control (reversible, high T, equilibration) | Under kinetic control the *fastest*-forming (often less stable) product dominates |
| "Kinetic product = the product with lower energy" | Kinetic product = the product from the lower *activation barrier* | Barrier height (rate) and product depth (stability) are different quantities |
| "Thermodynamic control always needs higher temperature" | High temperature helps *only if* the reaction is reversible; irreversible reactions stay kinetic at any temperature | Temperature enables reversibility; it does not by itself switch regimes |
| "1,2-addition is always the kinetic product for every diene" | True for butadiene + HX; for other dienes the faster pathway depends on substitution | Analyze the actual energy profile rather than memorizing labels |
| "The product ratio is fixed by the mechanism" | The mechanism sets the *pathways*; conditions (T, time, reversibility) set the *ratio* | Same mechanism, different temperatures → different major products |
| "Equilibrium favors the product formed first" | Equilibrium favors the more stable product regardless of order of formation | The first-formed (kinetic) product can be the minority at equilibrium |

## Quick Review

1. Distinguish kinetic control from thermodynamic control in one sentence each.
2. For HBr + 1,3-butadiene, which product is kinetic and which is thermodynamic, and why?
3. Why does low temperature favor the kinetic product?
4. Write the Arrhenius equation and explain what \(E_a\) and \(T\) do to the rate.
5. If the 1,4-product is 6 kJ/mol more stable and the mixture equilibrates at 298 K, what is \([1,2]/[1,4]\)?
6. A reaction gives product A cold and product B warm. What does that tell you?

<details>
<summary>Show answers</summary>

1. Kinetic control: the fastest-forming product (lowest \(E_a\)) dominates; thermodynamic control: the most stable product dominates after equilibration.
2. The 1,2-adduct is kinetic (lower transition-state barrier); the 1,4-adduct is thermodynamic (more substituted, more stable internal double bond).
3. At low temperature the exponential \(e^{-E_a/RT}\) strongly suppresses the higher-barrier pathway, so the lower-barrier (kinetic) pathway dominates; the reaction is also effectively irreversible, so no equilibration occurs.
4. \(k = Ae^{-E_a/RT}\): rate grows as \(E_a\) shrinks and as \(T\) rises; temperature enters exponentially, so small barrier differences matter most at low T.
5. \(K = [1,2]/[1,4] = e^{-6000/(8.314 \times 298)} = e^{-2.42} \approx 0.089\) — the 1,4-product is favored ~11:1.
6. Kinetic vs. thermodynamic crossover: A forms fastest (kinetic control at low T); B is more stable and wins once reversibility/equilibration is possible (thermodynamic control at high T).

</details>

## Related Topics

- Previous: [Electrophilic Additions to Conjugated Dienes: Allylic Carbocations](02-electrophilic-additions-to-conjugated-dienes-allylic-carbocations.md)
- Next: [The Diels–Alder Cycloaddition Reaction](04-the-diels-alder-cycloaddition-reaction.md)
- Related: [Stability of Conjugated Dienes: Molecular Orbital Theory](01-stability-of-conjugated-dienes-molecular-orbital-theory.md)
- Related: [Conjugated Compounds and Ultraviolet Spectroscopy chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Temperature-dependent 1,2/1,4 product ratios for HBr + 1,3-butadiene (1,2 major at −80 °C; 1,4 major at 40 °C; ~80/20 in each regime) are standard textbook results (McMurry, Organic Chemistry). Worked-example barrier and stability differences (8 kJ/mol, 6 kJ/mol) are pedagogical illustrations, not measured constants; the Arrhenius and equilibrium equations are standard.
- Last updated: 2026-08-16
