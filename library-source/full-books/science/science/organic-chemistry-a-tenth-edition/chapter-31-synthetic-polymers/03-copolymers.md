---
title: "Copolymers"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "31: Synthetic Polymers"
topic_number: "3"
source: "organic-chemistry.md"
tags:
  - "copolymers"
  - "science"
status: "complete"
---

# Copolymers

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 31: Synthetic Polymers](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

A **copolymer** is a polymer made from two or more different monomers. Whereas a homopolymer such as polyethylene contains only –CH₂–CH₂– repeat units, a copolymer such as **styrene–butadiene rubber (SBR)** contains both styrene units (–CH₂–CH(C₆H₅)–) and butadiene units (–CH₂–CH=CH–CH₂–) in the same chain. Copolymerization is the polymer chemist's most powerful trick for tuning properties: combining monomers blends their strengths, much as alloying metals does.

Copolymers come in four sequence patterns. In a **random copolymer** the two monomers appear in no particular order (AABABBBA...). In an **alternating copolymer** they strictly alternate (ABABAB...). A **block copolymer** has long runs of one monomer followed by long runs of the other (AAAA–BBBB–AAAA). A **graft copolymer** has a backbone of one monomer with side chains of the other attached along it. The sequence is not random chance: it is determined by **reactivity ratios**, which quantify how much each growing chain end prefers its own monomer over the other. Controlling sequence controls the final material's crystallinity, elasticity, toughness, and glass-transition temperature — which is why SBR (random), ABS plastic (graft-like), and thermoplastic elastomers (block) are such different materials.

## Why This Matters

- **Tuning real materials.** SBR is the rubber in most car tires; ABS (acrylonitrile–butadiene–styrene) is the tough plastic in LEGO bricks and appliance housings; nitrile rubber (butadiene + acrylonitrile) resists oil and fuels; block copolymers such as styrene–butadiene–styrene (SBS) are thermoplastic elastomers that behave like rubber but can be melted and recycled.
- **Reactivity ratios explain what you get.** Whether two monomers randomize or alternate is not a choice but a consequence of the growing chain end's selectivity. Understanding \(r_1\) and \(r_2\) lets you predict the sequence from monomer structure.
- **Exam relevance.** Expect problems that (a) identify the copolymer type from a sequence drawing, (b) interpret reactivity ratios, and (c) connect sequence to a physical property.

## Core Concepts

### The four sequence architectures

- **Random:** A and B distributed irregularly (AABABBBA...). Properties are roughly an average of the homopolymers. Most radical copolymerizations give random copolymers.
- **Alternating:** strict ABABAB... regularity. Formed when the two monomers strongly prefer to cross-react (each chain end adds the *other* monomer). Alternation maximizes regularity and can give crystalline or highly regular materials (e.g., alternating styrene–maleic anhydride copolymers).
- **Block:** long homogeneous runs (AAAA...BBBB...AAAA...). Made by living polymerization (Topic 1): polymerize monomer A to completion, then add monomer B, which all the still-active chain ends add to. Block copolymers can phase-separate into rubbery and glassy domains, giving **thermoplastic elastomers** — rubbery at use temperature yet melt-processable.
- **Graft:** backbone of A with B side chains attached at points along it (like a bottle brush). Made by polymerizing B from initiator sites on a preformed A backbone, or by attaching preformed B chains. Grafting modifies surface and impact properties (e.g., rubber-toughened plastics).

### Reactivity ratios: the language of sequence control

Define \(k_{11}\) as the rate constant for chain end A adding monomer A, \(k_{12}\) for chain end A adding monomer B, and analogously \(k_{22}\) and \(k_{21}\) for chain end B. The **reactivity ratios** are:

\[
r_1 = \frac{k_{11}}{k_{12}}, \qquad r_2 = \frac{k_{22}}{k_{21}}
\]

Each \(r\) compares a chain end's preference for its own monomer over the other. The interpretation:

- \(r_1 \gg 1\): chain end A strongly prefers A → long A runs (blocky tendency).
- \(r_1 \approx 0\): chain end A strongly prefers B → alternating tendency.
- \(r_1 \times r_2 \approx 1\): random copolymer.
- \(r_1 \times r_2 \approx 0\): alternating copolymer (both ends prefer the other monomer).

### Why reactivity ratios exist: stability logic

A chain end adds whichever monomer gives the more stable new radical. Electron-rich monomers (styrene, butadiene) give stabilized benzylic or allylic radicals; electron-poor monomers (maleic anhydride, acrylonitrile) give less stable radicals but are themselves more reactive toward electron-rich radicals (polar effects). This is why the electron-rich/electron-poor pair styrene + maleic anhydride alternates: the styryl radical prefers the anhydride, and the anhydride radical prefers styrene, so \(r_1 r_2 \approx 0\).

### The copolymer equation (qualitative use)

The instantaneous copolymer composition depends on the monomer feed ratio and the reactivity ratios through the **copolymer equation**. For study purposes, the key qualitative consequences matter more than the algebra: (1) the faster-reacting monomer is consumed first, so the feed composition drifts as the reaction proceeds; (2) azeotropic compositions (feed = copolymer composition) exist when \(r_1 = r_2 = 1\); (3) block copolymers require living conditions, not radical conditions, because radical termination ends chains before a second block can form.

### From sequence to properties

Alternating and block structures pack more regularly and can crystallize; random sequences inhibit crystallization and give amorphous, often rubbery materials. Block copolymers phase-separate on the nanometer scale: hard glassy domains (polystyrene) reinforce soft rubbery domains (polybutadiene), which is why SBS feels like rubber but melts like plastic.

## ELI-10: Explain Like I'm 10

A copolymer is like a bracelet strung with two colors of beads. You can string them randomly (random), strictly alternating red-blue-red-blue (alternating), in big color blocks (block), or put blue beads on a red string like a bottle brush (graft). Which pattern you get depends on how much each bead type "likes" to sit next to the other — the reactivity ratios.

## High-Yield Points

- Copolymer = polymer from ≥2 monomers; four architectures: **random, alternating, block, graft**.
- Reactivity ratios: \(r_1 = k_{11}/k_{12}\), \(r_2 = k_{22}/k_{21}\). \(r \gg 1\) → prefers own monomer; \(r \approx 0\) → prefers the other.
- \(r_1 r_2 \approx 1\) → random; \(r_1 r_2 \approx 0\) → alternating.
- Alternation is favored by **electron-rich + electron-poor** monomer pairs (styrene + maleic anhydride).
- **Block copolymers require living polymerization** (no termination); radical termination makes blocks impossible.
- **Graft copolymers** = backbone of A with B side chains; used to toughen plastics (e.g., rubber-modified polystyrene, ABS).
- Real products: SBR (tires, random), ABS (tough plastic), SBS (thermoplastic elastomer, block), nitrile rubber (oil-resistant).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Copolymer | Polymer chain containing two or more monomer types | The main route to property-tuned commercial plastics and rubbers |
| Random copolymer | Monomers arranged irregularly (AABABBBA...) | Typical radical product; properties average the homopolymers |
| Alternating copolymer | Strict ABABAB sequence | Requires \(r_1 r_2 \approx 0\); gives regular, often crystalline materials |
| Block copolymer | Long runs of each monomer (AAAA–BBBB) | Made by living polymerization; basis of thermoplastic elastomers |
| Graft copolymer | Backbone of A with B side chains | Toughens plastics; used in impact-resistant materials |
| Reactivity ratio \(r\) | Rate of adding own monomer vs the other (\(k_{ii}/k_{ij}\)) | Predicts whether the copolymer is random, alternating, or blocky |
| Thermoplastic elastomer | Rubber-like material that melts and can be reprocessed | Block copolymers (SBS) combine rubber elasticity with plastic processability |

## Worked Examples

### Example 1: Interpreting reactivity ratios

**Problem.** For the copolymerization of styrene (monomer 1) with methyl methacrylate (monomer 2), the reactivity ratios are \(r_1 = 0.52\) and \(r_2 = 0.46\). What type of copolymer forms, and what does each ratio mean?

**Step 1 — Interpret each ratio.** \(r_1 = 0.52\) means the styryl radical adds methyl methacrylate almost twice as fast as styrene; \(r_2 = 0.46\) means the methacrylate radical also slightly prefers styrene.

**Step 2 — Take the product.** \(r_1 r_2 = 0.52 \times 0.46 \approx 0.24\).

**Step 3 — Classify.** The product is well below 1 but not near 0, so the copolymer is **random with a slight alternating tendency** — both ends cross-react preferentially, but each still adds its own monomer often enough to randomize the sequence.

**Answer.** A random copolymer with a mild alternation tendency (\(r_1 r_2 \approx 0.24\)).

### Example 2: Predicting alternation from structure

**Problem.** Predict the copolymerization behavior of styrene (electron-rich) with maleic anhydride (electron-poor), and justify with stability logic.

**Step 1 — Identify the radicals.** The styryl radical is benzylic (stabilized); the maleic anhydride radical is less stabilized but electrophilic.

**Step 2 — Apply cross-preference.** The stabilized styryl radical adds the electron-poor anhydride readily (polar attraction); the anhydride radical adds styrene readily. Each chain end strongly prefers the *other* monomer.

**Step 3 — Conclude.** \(r_1 \approx 0\) and \(r_2 \approx 0\), so \(r_1 r_2 \approx 0\): an **alternating copolymer**.

**Answer.** Styrene and maleic anhydride form a strictly alternating copolymer, the textbook example of alternation driven by complementary electronic character.

### Example 3: Choosing a method for a block copolymer

**Problem.** A chemist wants a styrene–butadiene–styrene (SBS) triblock copolymer. Explain why ordinary radical polymerization cannot make it and which method can.

**Step 1 — Identify the obstacle.** Radical chain growth terminates by combination/disproportionation; once a chain terminates, it cannot add a second block.

**Step 2 — Choose the method.** **Anionic living polymerization** (Topic 1): polymerize styrene to completion, then add butadiene, then styrene again. All chains remain active between additions, so each chain grows A–B–A.

**Step 3 — Property payoff.** The polystyrene end-blocks glassy domains; the polybutadiene middle is rubbery → thermoplastic elastomer.

**Answer.** Radical polymerization terminates chains and cannot build blocks; living anionic polymerization (sequential monomer addition) produces the SBS triblock, a thermoplastic elastomer.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Random copolymer | Alternating copolymer | Random: irregular sequence (r₁r₂ ≈ 1); alternating: strict ABAB (r₁r₂ ≈ 0) |
| Block copolymer | Graft copolymer | Block: long runs in the main chain (AAAA–BBBB); graft: B side chains attached to an A backbone |
| Reactivity ratio \(r_1\) | Copolymer composition | \(r_1\) is a property of chain end 1 (rate ratio); composition is the outcome in the polymer |
| Copolymer | Homopolymer | Copolymer has ≥2 monomers; homopolymer one. Blending two homopolymers is *not* the same as copolymerizing them |
| Thermoplastic elastomer | Thermoset rubber | SBS melts and reprocesses (thermoplastic); vulcanized rubber is cross-linked and cannot be remelted |

## Quick Review

1. Name the four copolymer architectures and sketch (in words) the sequence of each.
2. What do \(r_1 = k_{11}/k_{12}\) and \(r_2 = k_{22}/k_{21}\) measure, and what does \(r_1 r_2 \approx 0\) predict?
3. Why does the styrene–maleic anhydride pair alternate?
4. Why must block copolymers be made by living polymerization?
5. SBR is a random styrene–butadiene rubber used in tires. What property consequence follows from its randomness?
6. What is a thermoplastic elastomer, and which copolymer architecture produces one?

<details>
<summary>Show answers</summary>

1. Random (AABABBBA...), alternating (ABABAB...), block (AAAA–BBBB–AAAA...), graft (A backbone with B side chains).
2. \(r_1\) = rate constant for chain end 1 adding monomer 1 vs monomer 2; \(r_2\) analogous for chain end 2. \(r_1 r_2 \approx 0\) predicts an alternating copolymer (each end strongly prefers the other monomer).
3. The styryl radical is stabilized and electrophilic-attracted to the electron-poor anhydride; the anhydride radical prefers the electron-rich styrene — both ends cross-react, so the sequence alternates.
4. Block copolymers need chains that stay alive between monomer additions; radical chains terminate (combine/disproportionate) before a second monomer can be added.
5. Random sequences cannot pack into crystals, so SBR is amorphous and rubbery — ideal for tires, where elasticity is wanted.
6. A rubbery material that melts and reprocesses; made from block copolymers such as SBS, where glassy polystyrene blocks reinforce rubbery polybutadiene segments.

</details>

## Related Topics

- Previous: [Stereochemistry of Polymerization: Ziegler–Natta Catalysts](02-stereochemistry-of-polymerization-ziegler-natta-catalysts.md)
- Next: [Step-Growth Polymers](04-step-growth-polymers.md)
- Related: [Chain-Growth Polymers](01-chain-growth-polymers.md) (radical and living mechanisms), [Polymer Structure and Physical Properties](07-polymer-structure-and-physical-properties.md) (how sequence affects crystallinity and transitions)
- Chapter overview: [Chapter 31: Synthetic Polymers](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure. The reactivity-ratio definitions, the r₁r₂ classification (≈1 random, ≈0 alternating), the styrene–maleic anhydride alternation, and the living-polymerization requirement for block copolymers are standard textbook polymer chemistry. The styrene/methyl methacrylate reactivity ratios (0.52, 0.46) are literature values for typical free-radical conditions and vary with temperature and medium; treat as illustrative.
- Lab safety note: none specific — monomers are volatile and often toxic (styrene, acrylonitrile); handle with ventilation and PPE per institutional rules (general principles only).
- Last updated: 2026-08-16
