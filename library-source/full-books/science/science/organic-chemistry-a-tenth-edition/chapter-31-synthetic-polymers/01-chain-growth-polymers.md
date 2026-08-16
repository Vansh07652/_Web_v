---
title: "Chain-Growth Polymers"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "31: Synthetic Polymers"
topic_number: "1"
source: "organic-chemistry.md"
tags:
  - "chain-growth-polymers"
  - "science"
status: "complete"
---

# Chain-Growth Polymers

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 31: Synthetic Polymers](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

A **polymer** is a large molecule built from repeating units called **monomers**. In **chain-growth polymerization**, the polymer chain grows by adding one monomer at a time to a reactive center — a radical, cation, or anion — at the chain's end. The classic example is the free-radical polymerization of ethylene (CH₂=CH₂) to polyethylene: an initiator generates a radical, the radical adds to an alkene double bond, and the newly formed radical at the other end of the monomer repeats the process thousands of times.

The defining kinetic feature of chain growth is that **monomer is consumed throughout the reaction while high-molecular-weight polymer appears almost immediately**. A reaction mixture at any moment contains unreacted monomer and fully grown chains, but almost nothing in between — the "growing" species are too short-lived to accumulate. This contrasts sharply with step-growth polymerization (Topic 4), where chains grow slowly and steadily and molecular weight builds up only at the very end. Chain-growth chemistry produces the everyday plastics polyethylene, polypropylene, polystyrene, poly(vinyl chloride) (PVC), and poly(methyl methacrylate) (PMMA, "acrylic"), which together account for the bulk of the world's plastic production.

## Why This Matters

- **The plastics economy.** Polyethylene alone is the most produced synthetic polymer on Earth, used in packaging, bottles, and films. Understanding how it forms explains why it has the properties it does — and why recycling must separate polymer types.
- **Mechanism predicts properties.** The radical mechanism produces branched, less crystalline chains with modest strength; the metal-catalyzed routes of Topic 2 produce linear, stereoregular chains with far better mechanical properties. Mechanism is destiny in polymer science.
- **Kinetics and safety in industry.** Chain-growth reactions are highly exothermic and can run away; industrial reactors manage heat and inhibitor addition carefully. Understanding initiation, propagation, and termination is the basis for controlling these processes.
- **Exam staples.** Expect questions on the three steps (initiation, propagation, termination), the structure of the repeat unit, degree of polymerization calculations, and head-to-tail versus head-to-head addition.

## Core Concepts

### The three steps of radical chain growth

1. **Initiation.** An initiator — typically benzoyl peroxide or AIBN — decomposes to form radicals. In the case of benzoyl peroxide, the O–O bond breaks homolytically, and the resulting radicals add to monomer to start chains. (Inhibitors such as hydroquinone are added to commercial monomers to scavenge radicals and prevent premature polymerization during storage.)
2. **Propagation.** The radical at the chain end adds to the next monomer's double bond, transferring the radical to the new terminus:

\[
R{-}CH_2CH_2^\bullet + CH_2{=}CH_2 \rightarrow R{-}CH_2CH_2CH_2CH_2^\bullet
\]

Each addition regenerates a radical, so one initiating radical can add thousands of monomers.
3. **Termination.** Two chain-end radicals combine (**combination**) or exchange a hydrogen atom (**disproportionation**), destroying the reactive centers and ending chain growth. Because termination is bimolecular, the chain length depends on the radical concentration: more radicals → shorter chains.

### Regiochemistry: head-to-tail is favored

In substituted alkenes such as propene, the radical adds so that the new radical is the more stable, more substituted one (the same logic as Markovnikov addition). For propene, the growing chain ends in –CH₂–CH(CH₃)– with the radical on the substituted carbon, giving **head-to-tail** enchainment of the repeat unit –CH₂–CH(CH₃)–. Head-to-head placements (radical on the unsubstituted carbon) are rare because they produce a less stable primary radical.

### Degree of polymerization and molecular weight

The **degree of polymerization (DP)** is the average number of monomer units per chain, and the number-average molecular weight is:

\[
\overline{M}_n = DP \times M_{\text{monomer}}
\]

where \(M_{\text{monomer}}\) is the molar mass of one repeat unit (28.05 g/mol for ethylene). Real samples are mixtures of chains of different lengths, so molecular weight is always an average; the **polydispersity index (PDI)**, \(\overline{M}_w / \overline{M}_n\), measures the breadth of the distribution. Radical polymerization typically gives PDI ≈ 2, reflecting the statistical termination process.

### Branches and their consequences

A growing radical can occasionally abstract a hydrogen from a methylene of its own chain (backbiting), creating a branch. Branches disrupt chain packing, so free-radical polyethylene (LDPE, low-density polyethylene) is less crystalline, softer, and lower-melting than the linear, catalyst-made HDPE (high-density polyethylene). This is the chemical origin of the difference between a flexible grocery bag (LDPE) and a rigid milk jug (HDPE).

### Cationic and anionic chain growth

Chain growth is not limited to radicals. **Cationic polymerization** (acid-catalyzed) works for electron-rich monomers such as isobutylene (tertiary carbocation formation); **anionic polymerization** works for electron-poor monomers such as styrene and butadiene, and in the absence of terminating impurities it can be a **living polymerization** — chains remain active, so block copolymers can be made by adding a second monomer (a preview of Topic 3). Ziegler–Natta and metallocene catalysis (Topic 2) are also chain-growth processes, distinguished by their stereocontrol.

## ELI-10: Explain Like I'm 10

Chain-growth polymerization is like a train building itself: an engine (the initiator) starts the train, and each new passenger (monomer) hops on at the back, making the train one car longer. The train grows very fast to its full length, and then the process stops — you never see half-built trains for long.

## High-Yield Points

- **Chain growth:** one monomer at a time adds to a reactive chain end; high-MW polymer appears early; monomer is consumed throughout.
- Three steps: **initiation** (initiator → radicals), **propagation** (radical + monomer → new radical), **termination** (combination or disproportionation).
- **Head-to-tail** enchainment is favored because it gives the more stable (more substituted) radical at the chain end.
- \(\overline{M}_n = DP \times M_{\text{monomer}}\); DP is the average number of repeat units per chain. Radical polymers have broad distributions (PDI ≈ 2).
- **Branches** (from backbiting) lower crystallinity, density, and melting point: LDPE vs HDPE.
- Cationic chain growth needs electron-rich monomers; anionic chain growth can be **living** (no termination), enabling block copolymers.
- Radical polymerizations are exothermic; commercial monomers are shipped with inhibitors to prevent runaway polymerization.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Monomer | Small molecule (e.g., CH₂=CH₂) that repeats in the polymer | The building block whose structure sets the polymer's properties |
| Chain-growth polymerization | Polymerization by sequential addition of monomer to a reactive chain end | The mechanism behind polyethylene, polystyrene, PVC, PMMA |
| Initiation | Generation of the first reactive species (radical, cation, or anion) | Controls how many chains start and thus their average length |
| Propagation | Repeated addition of monomer to the chain-end reactive center | The step that builds the chain, thousands of additions per chain |
| Termination | Destruction of reactive centers (combination or disproportionation) | Sets chain length; bimolecular, so radical concentration matters |
| Degree of polymerization (DP) | Average number of repeat units per chain | Directly sets molecular weight: \(\overline{M}_n = DP \times M_{\text{monomer}}\) |
| Head-to-tail | Monomer adds so the substituted carbon carries the radical | The dominant regiochemistry; gives regular repeat units |
| Living polymerization | Chain growth with no termination | Allows block copolymers and narrow molecular-weight distributions |

## Worked Examples

### Example 1: Degree of polymerization from molecular weight

**Problem.** A polyethylene sample has \(\overline{M}_n = 140{,}000\) g/mol. What is its average DP?

**Step 1 — State the formula.** \(\overline{M}_n = DP \times M_{\text{monomer}}\), where \(M_{\text{monomer}} = 28.05\) g/mol for the –CH₂–CH₂– repeat unit.

**Step 2 — Rearrange and substitute.**

\[
DP = \frac{\overline{M}_n}{M_{\text{monomer}}} = \frac{140{,}000\ \text{g/mol}}{28.05\ \text{g/mol}} \approx 4{,}990
\]

**Answer.** About 5,000 repeat units per chain on average. The units cancel (g/mol ÷ g/mol), confirming the setup.

### Example 2: How many monomers does one radical add?

**Problem.** In a controlled experiment, 1.0 × 10⁻⁵ mol of initiator-derived radicals produce 5.6 g of polystyrene (styrene, C₈H₈, M = 104.15 g/mol). Assuming one polymer chain per radical, find the average DP.

**Step 1 — Convert mass of polymer to moles of monomer units.**

\[
n(\text{styrene units}) = \frac{5.6\ \text{g}}{104.15\ \text{g/mol}} = 5.38 \times 10^{-2}\ \text{mol}
\]

**Step 2 — Divide by moles of chains.**

\[
DP = \frac{5.38 \times 10^{-2}\ \text{mol units}}{1.0 \times 10^{-5}\ \text{mol chains}} = 5.4 \times 10^{3}
\]

**Answer.** Each chain contains about 5,400 styrene units on average — one initiating radical propagates through thousands of monomers before termination.

### Example 3: Predicting structure from mechanism

**Problem.** Propene is polymerized by a radical initiator. Predict the repeat unit and explain why head-to-head enchainment is rare.

**Step 1 — Apply regiochemistry.** The radical adds so the new radical is on the more substituted carbon: the chain ends –CH₂–CH(CH₃)–, and the repeat unit is –CH₂–CH(CH₃)–.

**Step 2 — Explain the preference.** Head-to-head addition would place the radical on an unsubstituted –CH₂– carbon (a primary radical), which is much less stable than the secondary radical of head-to-tail addition.

**Answer.** Polypropylene with head-to-tail repeat units –CH₂–CH(CH₃)–; head-to-head placements are rare because they would require forming an unstable primary radical.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Chain-growth polymerization | Step-growth polymerization | Chain growth: monomer adds to a reactive end, high MW appears early; step growth: any two species can react, MW builds slowly (Topic 4) |
| Combination | Disproportionation | Combination joins two radicals into one chain; disproportionation transfers a hydrogen and gives two chains, one with a terminal double bond |
| DP | Molecular weight | DP = number of repeat units; Mₙ = DP × M(monomer). They differ by the monomer's molar mass |
| LDPE | HDPE | Both polyethylene; LDPE is branched (radical process, softer), HDPE is linear (catalyst process, stiffer) |
| Propagation rate | Initiation rate | Fast propagation builds long chains; fast initiation makes many short chains. Radical concentration links the two |

## Quick Review

1. List the three steps of radical chain-growth polymerization and what happens in each.
2. Why does high-molecular-weight polymer appear early in chain growth, unlike step growth?
3. A polystyrene sample has DP = 2,000. What is \(\overline{M}_n\) (styrene repeat unit = 104.15 g/mol)?
4. Why is head-to-tail enchainment favored in propene polymerization?
5. What are the two modes of termination, and how do their products differ?
6. Why is LDPE softer and lower-melting than HDPE?

<details>
<summary>Show answers</summary>

1. Initiation (initiator decomposes to radicals, which add to monomer), propagation (radical adds monomer after monomer, regenerating the radical), termination (two radicals combine or disproportionate).
2. Because every chain grows from a reactive end that adds monomer extremely quickly; once started, a chain reaches full length almost immediately, so the mixture contains only monomer and finished chains.
3. \(\overline{M}_n = DP \times M_{\text{monomer}} = 2{,}000 \times 104.15\) g/mol = 208,300 g/mol.
4. Head-to-tail addition puts the radical on the more substituted carbon (secondary rather than primary), which is more stable — the same stability logic as Markovnikov addition.
5. Combination joins two chain radicals into one longer chain; disproportionation transfers a hydrogen between them, giving two chains, one ending in a C=C double bond.
6. LDPE is made by radical polymerization and contains branches from backbiting; branches prevent chains from packing into crystals, lowering density, stiffness, and melting point. HDPE, made with catalysts, is linear and semicrystalline.

</details>

## Related Topics

- Next: [Stereochemistry of Polymerization: Ziegler–Natta Catalysts](02-stereochemistry-of-polymerization-ziegler-natta-catalysts.md)
- Related: [Copolymers](03-copolymers.md), [Step-Growth Polymers](04-step-growth-polymers.md) (the contrasting mechanism), [Olefin Metathesis Polymerization](05-olefin-metathesis-polymerization.md) (a metal-catalyzed chain-growth route), [Polymer Structure and Physical Properties](07-polymer-structure-and-physical-properties.md)
- Chapter overview: [Chapter 31: Synthetic Polymers](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure. Molar masses (ethylene 28.05, styrene 104.15 g/mol) are standard atomic-weight values; the three-step radical mechanism, head-to-tail regiochemistry, LDPE/HDPE distinction, and the PDI ≈ 2 behavior of radical polymers are standard textbook polymer chemistry. No experimental data were fabricated.
- Lab safety note: radical polymerizations are exothermic and can accelerate dangerously (Trommsdorff effect); monomers such as styrene and methyl methacrylate are volatile, flammable, and shipped with inhibitors. Any laboratory work requires proper ventilation, heat control, and PPE per institutional rules — general principles only, not procedures.
- Last updated: 2026-08-16
