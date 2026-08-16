---
title: "The Discovery of Nucleophilic Substitution Reactions"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "11: Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations"
topic_number: "1"
source: "organic-chemistry.md"
tags:
  - "the-discovery-of-nucleophilic-substitution-reactions"
  - "science"
status: "complete"
---

# The Discovery of Nucleophilic Substitution Reactions

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 11: Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

A **nucleophilic substitution reaction** is one in which a nucleophile (an electron-rich species) replaces a leaving group attached to carbon:

\\[
\mathrm{Nu^- + R{-}X \longrightarrow R{-}Nu + X^-}
\\]

Chemists knew by the late 1800s that alkyl halides react with hydroxide, water, ammonia, and other reagents to swap the halogen for a new group. What took decades to figure out was *how* the swap happens. The story of that discovery is a model of modern mechanistic thinking: a puzzling observation (Walden's 1896 inversion cycle), a systematic kinetic study (Hughes and Ingold, 1930s), and finally the **SN1/SN2** framework, which explains not only the products but also their stereochemistry and speed. This topic tells that story and introduces the vocabulary (nucleophile, electrophile, leaving group, rate law) that the rest of Chapter 11 uses constantly.

## Why This Matters

Mechanism is the difference between memorizing reactions and predicting them. The discovery of substitution mechanisms showed that a single experimental measurement — how the reaction rate depends on reactant concentrations — can reveal the intimate choreography of bond breaking and bond making. That lesson carries through the whole course: rate laws, stereochemical outcomes (inversion vs. racemization), and substituent effects let you diagnose SN1 vs. SN2 for any substrate. In practice, this matters for drug synthesis (alkyl halides and sulfonates are alkylating agents in medicinal chemistry), for biochemistry (methyl transfer by S-adenosylmethionine is a biological SN2 reaction, Topic 6), and for every exam question that asks "which mechanism, and what stereochemistry?"

## Core Concepts

### What was known before the mechanism

By the end of the 19th century, chemists had plenty of observations with no unifying explanation: ethyl bromide with potassium hydroxide in ethanol gave ethanol; ammonia converted alkyl halides to amines; silver salts sped up some of these reactions. The reactions clearly displaced the halogen, but nothing explained why some substrates reacted quickly and others slowly, or why some products came out with inverted geometry. The tools to answer these questions — careful kinetics and stereochemical analysis — did not exist until the early 20th century.

### The Walden inversion (1896)

Paul Walden discovered that substitution could **invert configuration**. Starting from (−)-malic acid (a chiral dihydroxy acid), he converted the –OH at the stereocenter into a chloride using PCl₅, then hydrolyzed the chloride back to an alcohol with moist silver oxide. The product was (+)-malic acid — the opposite enantiomer. Repeating the two-step cycle gave (−)-malic acid again. The only consistent explanation: each substitution at the stereocenter occurs **with inversion**, so two substitutions in a row return you to the original enantiomer. Walden's cycle proved that a substitution reaction could flip the handedness of a molecule, long before anyone could draw an arrow-pushing mechanism.

### Kinetics and the Hughes–Ingold classification

In the 1930s, Edward Hughes and Christopher Ingold at University College London measured how the rates of alkyl halide substitutions depend on concentration. Two limiting behaviors emerged:

- **Second-order (bimolecular) kinetics:** rate = k[RX][Nu]. Doubling both concentrations quadruples the rate. The nucleophile is involved in the rate-determining step, which must be a single concerted event. This became the **SN2** reaction (substitution, nucleophilic, bimolecular).
- **First-order (unimolecular) kinetics:** rate = k[RX]. The rate does not change when the nucleophile concentration is changed. The slow step is dissociation of the C–X bond to form a carbocation, which the nucleophile captures afterward. This became the **SN1** reaction (substitution, nucleophilic, unimolecular).

The terms "nucleophile" and "electrophile" come from this era: Ingold coined them for electron-rich (nucleus-loving) and electron-poor (electron-loving) reagents, building on G. N. Lewis's electron-pair theory. The kinetic classification turned observations into a predictive theory — a landmark of physical organic chemistry.

### The two mechanisms, side by side

**SN2** is one step: the nucleophile attacks the carbon from the back side (opposite the leaving group) while the C–X bond breaks. The result is a single transition state, no intermediate, and **inversion of configuration** at carbon (the "backside attack" geometry is why Walden saw inversion).

**SN1** is two steps: first the C–X bond breaks to give a planar **carbocation** (this is slow and rate-determining); then the nucleophile attacks the carbocation from either face, so the product is usually **racemic** (a mixture of enantiomers). The rate depends only on [RX] because the nucleophile appears only after the slow step.

Neither mechanism happens alone — most substitutions sit on a spectrum between the two — but the limiting cases explain nearly everything: reactivity orders (SN2 loves primary carbons and strong nucleophiles; SN1 loves tertiary carbons and polar protic solvents), stereochemistry, and the solvent and leaving-group effects quantified in the next topics.

## ELI-10: Explain Like I'm 10

> Imagine a bench where a kid (the nucleophile) wants to sit down next to a friend (the leaving group) who is hogging the seat. In the SN2 way, the kid pushes in from behind and the friend gets bumped out — all in one smooth move, and the kid now faces the opposite way. In the SN1 way, the friend gets up and walks away first (slow step), leaving an empty seat that any kid can then grab from either side. Watching how fast each step happens — the kinetics — tells scientists which way it went.

## High-Yield Points

- Substitution: Nu⁻ + R–X → R–Nu + X⁻; a nucleophile displaces a leaving group.
- Walden inversion (1896): substitution at a stereocenter can invert configuration — shown by cycling (−)- and (+)-malic acid.
- Hughes and Ingold (1930s): kinetics distinguish SN2 (rate = k[RX][Nu], bimolecular, one step) from SN1 (rate = k[RX], unimolecular, carbocation intermediate).
- SN2: backside attack → inversion of configuration; favored at primary carbons with strong nucleophiles.
- SN1: two steps via a planar carbocation → racemization; favored at tertiary carbons in polar protic solvents.
- The terms nucleophile/electrophile come from Ingold's work building on Lewis electron-pair theory.
- Rate laws reveal mechanism — a core skill for the rest of Chapter 11.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| nucleophile | An electron-rich species that donates a pair of electrons to form a new bond. | The attacking reagent in every substitution; "nucleus-loving." |
| electrophile | An electron-poor species that accepts an electron pair. | The carbon bearing the leaving group is the electrophilic site. |
| leaving group | The group that departs with the bonding electron pair. | Good leaving groups (weak bases like Br⁻, I⁻) make substitution fast. |
| SN2 | Substitution, nucleophilic, bimolecular: one concerted step with backside attack. | Gives inversion of configuration; rate = k[RX][Nu]. |
| SN1 | Substitution, nucleophilic, unimolecular: two steps via a carbocation. | Gives racemization; rate = k[RX]. |
| rate law | An equation relating reaction rate to reactant concentrations. | The experimental fingerprint that identifies the mechanism. |
| Walden inversion | The observation that substitution can invert a stereocenter. | First stereochemical clue that substitutions have a defined geometry. |
| carbocation | A positively charged, six-electron carbon intermediate. | The key intermediate of SN1 (and E1) reactions; its stability sets reactivity. |

## How It Works / Step-by-Step Process

1. Write the substitution: identify the nucleophile (electron-rich) and the electrophilic carbon bearing the leaving group.
2. Measure or consider the kinetics: does the rate depend on the nucleophile concentration?
   - Yes (second order) → SN2: backside attack, inversion, one step.
   - No (first order) → SN1: carbocation first, then capture, racemization.
3. Check the substrate: primary carbons favor SN2; tertiary favor SN1; secondary is intermediate.
4. Predict stereochemistry: inversion for SN2; racemic product for SN1.
5. Confirm with experiment (rate law, stereochemistry, substituent effects) — the same evidence loop that uncovered the mechanisms.

## Example: Two Worked Analyses

### Example 1: Using the rate law to identify a mechanism

Suppose kinetic experiments on an alkyl halide (RX) with a nucleophile (Nu⁻) give: doubling [RX] at constant [Nu] doubles the rate; doubling both concentrations quadruples it.

The rate law that fits these observations is second order overall:

\\[
\mathrm{rate = k[RX][Nu]}
\\]

Because the nucleophile appears in the rate law, it participates in the rate-determining step — the hallmark of the **SN2** mechanism. If changing [Nu] had left the rate unchanged, the rate law would be rate = k[RX], the signature of **SN1**.

### Example 2: Computing an initial rate (illustrative values)

For a model SN2 reaction of bromomethane with hydroxide, assume an illustrative rate constant \\(k = 2.0 \times 10^{-3}\ \mathrm{M^{-1}s^{-1}}\\), with [CH3Br] = 0.10 M and [OH⁻] = 0.050 M. The rate law is:

\\[
\mathrm{rate = k[CH_3Br][OH^-]}
\\]

Substitute the values:

\\[
\mathrm{rate = (2.0 \times 10^{-3}\ M^{-1}s^{-1})(0.10\ M)(0.050\ M) = 1.0 \times 10^{-5}\ M\,s^{-1}}
\\]

The units check out by dimensional analysis: M⁻¹ s⁻¹ × M × M = M s⁻¹, the correct unit for a rate of concentration change per second. (The rate constant is illustrative; real values depend on solvent, temperature, and substrate.)

### Example 3: Reconstructing the Walden cycle

Walden's 1896 result, in modern terms: (−)-malic acid → (with PCl₅) (−)-chlorosuccinic acid → (with Ag₂O and water) (+)-malic acid → (with PCl₅) (+)-chlorosuccinic acid → (with Ag₂O and water) (−)-malic acid. Each chloride-for-hydroxyl swap at the stereocenter happened with inversion, and the two-step cycle flipped the enantiomer — the first strong evidence that substitution has a defined geometry, later explained as the backside attack of SN2.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| SN1 | SN2 | SN1 is two steps via a carbocation (rate = k[RX], racemization); SN2 is one concerted step (rate = k[RX][Nu], inversion). |
| "First-order kinetics" | "One-step mechanism" | First order means one molecule in the rate-determining step — SN1 still has a second step (nucleophile capture). |
| Nucleophile | Electrophile | Nucleophile is electron-rich and attacks (e.g., OH⁻, I⁻); electrophile is electron-poor and is attacked (e.g., the C–X carbon). |
| SN2 rate independent of... nothing | SN1 rate independent of [Nu] | Only SN1 is independent of nucleophile concentration, because capture happens after the slow step. |
| Inversion of configuration | Racemization | Inversion gives a single enantiomer (SN2); racemization gives both enantiomers (SN1). |
| Walden "inversion" being a mechanism | Being an observation | Walden demonstrated inversion experimentally in 1896; the SN2 mechanism that explains it came decades later. |

## Quick Review

1. Write the general equation for a nucleophilic substitution and identify the nucleophile and leaving group.
2. What did Walden's 1896 experiment demonstrate about substitution reactions?
3. How does the rate law distinguish SN1 from SN2?
4. Why does an SN2 reaction invert configuration while an SN1 reaction gives a racemic product?
5. In a reaction with rate = k[RX][Nu], what happens to the rate if [RX] is tripled and [Nu] is held constant? What if both are doubled?
6. Why does changing the nucleophile concentration have no effect on the rate of an SN1 reaction?

<details>
<summary>Show answers</summary>

1. Nu⁻ + R–X → R–Nu + X⁻. The nucleophile (Nu⁻) is the attacking electron-rich species; X⁻ (or the group X) is the leaving group.
2. That substitution at a stereocenter can occur with inversion of configuration — his two-step cycle interconverted (−)- and (+)-malic acid.
3. SN1: rate = k[RX] (first order; independent of [Nu]). SN2: rate = k[RX][Nu] (second order; depends on both).
4. SN2 attacks from the back side opposite the leaving group, so the configuration inverts like an umbrella flipping inside out. SN1 forms a planar carbocation that the nucleophile can attack from either face, giving both enantiomers (racemization).
5. Tripling [RX] triples the rate (rate is first order in RX). Doubling both doubles the rate twice: 2 × 2 = 4 times the original rate.
6. Because the slow, rate-determining step is only the C–X bond breaking to form the carbocation; the nucleophile attacks in the fast second step, after the rate has already been set.

</details>

## Related Topics

- Previous: Start of chapter
- Next: [The SN2 Reaction](02-the-sn2-reaction.md)
- Related: [Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
