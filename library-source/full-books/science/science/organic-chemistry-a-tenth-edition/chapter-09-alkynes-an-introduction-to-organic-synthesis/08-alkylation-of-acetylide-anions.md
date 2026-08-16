---
title: "Alkylation of Acetylide Anions"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "9: Alkynes: An Introduction to Organic Synthesis"
topic_number: "8"
source: "organic-chemistry.md"
tags:
  - "alkylation-of-acetylide-anions"
  - "science"
status: "complete"
---

# Alkylation of Acetylide Anions

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 9: Alkynes: An Introduction to Organic Synthesis](../README.md)  
> **Topic:** 8  
> **Source structure:** OpenStax public textbook outline

## Overview

Alkylation of acetylide anions is the payoff reaction of alkyne chemistry: it builds a new carbon–carbon bond by letting the acetylide ion, \(\mathrm{R{-}C{\equiv}C^-}\), attack an alkyl halide. The general reaction is an \(\mathrm{S_N2}\) substitution:

\[
\mathrm{R{-}C{\equiv}C^-Na^+ + R'{-}X \rightarrow R{-}C{\equiv}C{-}R' + NaX}
\]

The acetylide acts as a nucleophile, attacking the carbon that carries the halogen and displacing the halide ion. The product is an **internal alkyne** with a longer carbon chain — the carbon skeleton has been extended by the alkyl group \(\mathrm{R'}\). This reaction works cleanly only with methyl and primary alkyl halides; secondary and tertiary halides mostly give elimination instead. Because the acetylide is both a strong base and a good nucleophile, that substitution–elimination balance is the central practical question.

## Why This Matters

Carbon–carbon bond formation is the heart of organic synthesis — it is how chemists assemble small building blocks into large, complex molecules. Acetylide alkylation is one of the first truly general C–C bond-forming reactions students learn, and it demonstrates the whole toolkit of synthesis logic: deprotonate to make a nucleophile, react it with an electrophile, and extend the chain. The reaction is used to make longer-chain alkynes that are precursors to natural products, pharmaceuticals, and materials. It also introduces two ideas that recur throughout organic chemistry: the \(\mathrm{S_N2}\) mechanism (backside attack, inversion, steric sensitivity) and the competition between substitution and elimination. Mastering it builds a template for nucleophilic-carbon thinking that carries into Grignard, enolate, and organolithium chemistry.

## Core Concepts

### The S_N2 mechanism

Alkylation of an acetylide proceeds by the bimolecular substitution (\(\mathrm{S_N2}\)) mechanism. The acetylide carbon's lone pair attacks the electrophilic carbon of the alkyl halide from the back side, opposite the leaving group, in one concerted step:

\[
\mathrm{R{-}C{\equiv}C^- + R'{-}X \rightarrow [R{-}C{\equiv}C{\cdots}R'{\cdots}X]^\ddagger \rightarrow R{-}C{\equiv}C{-}R' + X^-}
\]

Because the nucleophile must reach the back side of the carbon bearing the halogen, the reaction is very sensitive to steric hindrance. Methyl halides (\(\mathrm{CH_3X}\)) and primary halides (\(\mathrm{R'CH_2X}\)) react readily; secondary halides are slow and give mostly elimination; tertiary halides give essentially only elimination. The leaving group is typically bromide or iodide (better leaving groups), and the reaction is usually run in liquid ammonia or an ether solvent that keeps the sodium acetylide soluble.

### Substitution versus elimination

The acetylide ion is a strong base as well as a good nucleophile, so it can also pull a proton from the alkyl halide's \(\beta\)-carbon, triggering E2 elimination:

\[
\mathrm{R{-}C{\equiv}C^- + CH_3CH_2{-}X \xrightarrow{E2} R{-}C{\equiv}CH + CH_2{=}CH_2 + X^-}
\]

The competition between \(\mathrm{S_N2}\) and E2 depends mostly on the structure of the alkyl halide: methyl and primary halides favor substitution; secondary halides give mixtures; tertiary halides give pure elimination. This is why acetylide alkylation is effectively limited to methyl and primary alkyl halides. It is a constraint worth memorizing: "acetylide + primary halide = internal alkyne; acetylide + tertiary halide = alkene plus recovered terminal alkyne."

### Synthesis strategy: building bigger alkynes

Alkylation lets you construct any internal alkyne from acetylene or a simple terminal alkyne in a stepwise fashion:

1. Deprotonate a terminal alkyne with \(\mathrm{NaNH_2}\) to make the acetylide (previous topic).
2. Add a primary alkyl halide or methyl halide to alkylate it.

Each alkylation adds one alkyl group. Starting from acetylene, \(\mathrm{HC{\equiv}CH}\), two successive alkylations with different halides give an unsymmetrical internal alkyne — for example, acetylene + ethyl bromide gives 1-butyne, and deprotonation followed by methyl iodide gives 2-pentyne. This "build in pieces" logic is the essence of retrosynthetic thinking: to make a target alkyne, ask which two fragments (an acetylide and an alkyl halide) could be joined.

### What cannot be alkylated

Aryl halides and vinyl halides do not undergo \(\mathrm{S_N2}\) reactions — the back-side attack needed is blocked by the \(\pi\) system, and the C–X bond has partial double-bond character. So acetylides cannot be alkylated with bromobenzene or bromoethene-type halides. If the target has an aromatic ring, the ring must be introduced by a different route (e.g., coupling reactions covered in later chapters). Recognizing which halides are "alkylatable" is a common exam discriminator.

## ELI-10: Explain Like I'm 10

Imagine the acetylide ion is a person holding a strong magnet (the negative charge). An alkyl halide is a toy with a handle (the halogen). The magnet-person grabs the toy by the handle from behind, and the handle pops off — now the toy is stuck to the magnet. The molecule just got longer by the size of the toy. But if the toy is too big and clunky (a tertiary halide), the magnet-person can't get behind it to grab the handle, so instead they just knock the toy over (elimination) and nothing gets attached.

## High-Yield Points

- **Reaction:** \(\mathrm{R{-}C{\equiv}C^- + R'{-}X \rightarrow R{-}C{\equiv}C{-}R' + X^-}\) — an \(\mathrm{S_N2}\) that makes a C–C bond.
- **Scope:** works with **methyl and primary alkyl halides** (bromides/iodides best); fails with secondary/tertiary (elimination) and aryl/vinyl halides (no \(\mathrm{S_N2}\)).
- **Mechanism vocabulary:** backside attack, concerted, inversion of configuration at the reacting carbon.
- **Competition:** acetylide is a strong base, so E2 elimination competes; more hindered halides favor elimination.
- **Synthesis pattern:** deprotonate (NaNH₂) → alkylate; repeat to add more carbons; acetylene can be alkylated twice to build unsymmetrical internal alkynes.
- **Product class:** internal alkynes — valuable building blocks for later hydrogenation, hydration, and cleavage chemistry.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Alkylation | Adding an alkyl group to a molecule | Extends the carbon skeleton — the point of this reaction |
| Acetylide anion | \(\mathrm{R{-}C{\equiv}C^-}\), a carbon nucleophile from a terminal alkyne | The nucleophile that attacks the alkyl halide |
| S_N2 | Bimolecular substitution: one-step backside attack with inversion | The mechanism; explains why steric hindrance kills the reaction |
| E2 elimination | Base pulls a \(\beta\)-proton while the halide leaves | The competing reaction that ruins alkylation of hindered halides |
| Primary alkyl halide | \(\mathrm{RCH_2X}\) — halogen on a carbon bonded to one carbon | Ideal substrate for acetylide alkylation |
| Leaving group | The group (usually \(\mathrm{X^-}\)) displaced in substitution | Better leaving groups (I⁻, Br⁻) make alkylation faster |
| Retrosynthesis | Planning a molecule backward into simpler pieces | Acetylide + alkyl halide is the classic disconnection for alkynes |

## Example: Planning and Quantifying an Alkylation

**Worked example 1 (synthesis plan).** How would you make 2-pentyne, \(\mathrm{CH_3C{\equiv}CCH_2CH_3}\), from acetylene and simple halides? Step 1: deprotonate acetylene with \(\mathrm{NaNH_2}\) and alkylate with ethyl bromide to give 1-butyne:

\[
\mathrm{HC{\equiv}CH \xrightarrow{1)\ NaNH_2 \quad 2)\ CH_3CH_2Br} CH_3CH_2C{\equiv}CH}
\]

Step 2: deprotonate the 1-butyne with \(\mathrm{NaNH_2}\) and alkylate with methyl iodide:

\[
\mathrm{CH_3CH_2C{\equiv}CH \xrightarrow{1)\ NaNH_2 \quad 2)\ CH_3I} CH_3CH_2C{\equiv}CCH_3}
\]

The two alkylations add the ethyl group first and the methyl group second, giving the unsymmetrical internal alkyne 2-pentyne.

**Worked example 2 (predicting failure).** Would acetylide alkylation with 2-bromo-2-methylpropane (tertiary butyl bromide) work? No. The tertiary halide cannot undergo \(\mathrm{S_N2}\) (the back side is blocked), and the acetylide's basicity dominates: it abstracts a \(\beta\)-proton and forms 2-methylpropene (isobutylene) by E2. The acetylide is simply converted back to the terminal alkyne.

**Worked example 3 (stoichiometry with dimensional analysis).** How many grams of 2-heptyne, \(\mathrm{CH_3C{\equiv}C(CH_2)_3CH_3}\), can be made in theory from 10.0 g of 1-hexyne, \(\mathrm{CH_3(CH_2)_3C{\equiv}CH}\), by deprotonation and alkylation with methyl iodide? The reaction is 1:1 in moles:

\[
n(\mathrm{1\text{-}hexyne}) = \frac{10.0\ \mathrm{g}}{82.15\ \mathrm{g/mol}} = 0.122\ \mathrm{mol}
\]

One mole of 2-heptyne forms per mole of 1-hexyne:

\[
m(\mathrm{2\text{-}heptyne}) = 0.122\ \mathrm{mol} \times 96.17\ \mathrm{g/mol} = 11.7\ \mathrm{g}
\]

The theoretical yield is **11.7 g of 2-heptyne** (the chain grew by one carbon — from \(\mathrm{C_6}\) to \(\mathrm{C_7}\) — and the molar mass increased accordingly).

## Common Confusions

| Do Not Confuse | With | The Difference |
|---|---|---|
| Alkylation (S_N2) | Elimination (E2) | S_N2 attacks the halogen-bearing carbon (works for 1° halides); E2 removes a \(\beta\)-H (dominates for 3° halides) |
| Acetylide as nucleophile | Acetylide as base | Same ion, two behaviors; the alkyl halide's structure decides which one wins |
| Primary halide reactivity | Tertiary halide reactivity | S_N2 loves 1° (open back side); 3° halides only eliminate |
| Internal alkyne product | Terminal alkyne starting material | After alkylation the acidic H is gone; the product is an internal alkyne that can no longer be deprotonated the same way |
| Alkyl halides | Aryl/vinyl halides | Alkyl halides undergo S_N2; aryl/vinyl halides cannot (blocked back side, partial double-bond character) |

## Quick Review

1. What general reaction type is the alkylation of an acetylide anion with an alkyl halide?
2. Why do tertiary alkyl halides fail to give alkylation products with acetylides?
3. What two steps convert 1-butyne into 2-hexyne? (Name the reagents.)
4. What are the two products when an acetylide reacts with a secondary alkyl halide under forcing conditions?
5. Why can acetylene be alkylated twice, while an internal alkyne cannot be alkylated at all?
6. What is the molar ratio of alkyne to alkyl halide in the alkylation step?

<details>
<summary>Show answers</summary>

1. An \(\mathrm{S_N2}\) (bimolecular nucleophilic substitution): the acetylide attacks the carbon bearing the halogen from the back side, displacing the halide in one step.
2. The back side of a tertiary carbon is completely blocked by the three alkyl groups, so the S_N2 attack cannot happen; the acetylide instead acts as a base and removes a \(\beta\)-proton (E2), giving an alkene.
3. (1) Deprotonate with \(\mathrm{NaNH_2}\) to form the acetylide; (2) alkylate with ethyl bromide (\(\mathrm{CH_3CH_2Br}\)) to add the two-carbon group, giving 2-hexyne.
4. A mixture of the elimination product (an alkene) and the regenerated terminal alkyne — substitution is slow for secondary halides and elimination competes heavily.
5. Acetylene has two terminal hydrogens, so after one alkylation it becomes a terminal alkyne that can be deprotonated and alkylated again. An internal alkyne has no acidic hydrogens left, so there is nothing to deprotonate.
6. **1:1** — one mole of acetylide reacts with one mole of alkyl halide; the sodium halide (\(\mathrm{NaX}\)) is the by-product.

</details>

## Related Topics

- Previous: [Alkyne Acidity: Formation of Acetylide Anions](07-alkyne-acidity-formation-of-acetylide-anions.md)
- Next: [An Introduction to Organic Synthesis](09-an-introduction-to-organic-synthesis.md)
- Related: [Hydration of Alkynes](04-hydration-of-alkynes.md)
- Related: [Reduction of Alkynes](05-reduction-of-alkynes.md)
- Related: [Alkynes: An Introduction to Organic Synthesis chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
