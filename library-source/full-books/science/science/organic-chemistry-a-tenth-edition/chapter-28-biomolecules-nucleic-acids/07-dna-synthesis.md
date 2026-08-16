---
title: "DNA Synthesis"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "28: Biomolecules: Nucleic Acids"
topic_number: "7"
source: "organic-chemistry.md"
tags:
  - "dna-synthesis"
  - "science"
status: "complete"
---

# DNA Synthesis

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 28: Biomolecules: Nucleic Acids](../README.md)  
> **Topic:** 7  
> **Source structure:** OpenStax public textbook outline

## Overview

**DNA synthesis** — as opposed to DNA replication — means building DNA molecules chemically, in a machine, with no template and no enzyme. The method used in every DNA synthesizer is the **solid‑phase phosphoramidite method**, developed by Marvin Caruthers and co‑workers in the early 1980s. A short DNA chain (an **oligonucleotide**) is assembled one nucleotide at a time on a bead of controlled‑pore glass, with the chain growing from its 3′ end toward its 5′ end — the opposite direction from every polymerase. Each cycle adds one nucleotide through four steps: deprotection of the 5′‑OH, coupling of a phosphoramidite building block, capping of unreacted chains, and oxidation to convert the new linkage into a stable phosphate.

Because the process is stepwise and chemical, it can be automated and scaled: a modern synthesizer can make a 20‑mer primer in under an hour, and longer assemblies (gene synthesis) are built by stitching many oligonucleotides together. This topic covers the protecting‑group chemistry, the cycle of reactions, and the yield arithmetic that every primer order is really about.

## Why This Matters

Synthetic DNA is the workhorse reagent of modern biology and medicine. The primers used in PCR and DNA sequencing are made by chemical synthesis — every PCR you run depends on it. Researchers synthesize entire genes from scratch to study protein function, to engineer bacteria that make insulin or biofuels, and to build the DNA templates for mRNA vaccines. Chemically synthesized oligonucleotides are also drugs: **antisense oligonucleotides** (such as nusinersen for spinal muscular atrophy) and **siRNA therapeutics** bind mRNA and block harmful proteins, and synthetic guide RNAs enable CRISPR gene editing. DNA is even being explored as an ultra‑dense data‑storage medium — a technology built entirely on writing arbitrary sequences, which is exactly what chemical synthesis does.

## Core Concepts

### Why chemical synthesis builds 3′→5′

Enzymes extend DNA at the 3′ end (5′→3′ synthesis) because they need a free 3′‑OH to attack the incoming triphosphate. Chemical synthesis has no enzyme to enforce that direction, so it uses a different trick: the chain is anchored at its 3′ end to a solid support, and each new nucleotide is added at the 5′ end. The growing chain's 5′‑OH attacks the incoming building block's phosphorus. The 3′→5′ direction also makes purification simple — at the end, the product is cleaved from the bead and failures are washed away.

### The phosphoramidite building block

The key reagent is a **nucleoside phosphoramidite**: a nucleoside whose 5′‑OH carries a dimethoxytrityl (DMTr) protecting group, whose exocyclic amine (on A, G, or C) carries a base‑labile protecting group (benzoyl, isobutyryl, or acetyl), and whose 3′‑OH is attached to a P(III) phosphoramidite unit bearing a 2‑cyanoethyl group and two diisopropylamine groups. In words: a protected nucleotide activated for coupling. The DMTr group is the traffic light — acid removes it (revealing the orange DMTr cation, used to monitor coupling), but base does not touch it, while the other protecting groups are removed by base at the end.

### The four‑step coupling cycle

Each nucleotide is added in four reactions:

1. **Detritylation:** dilute acid removes the DMTr from the 5′‑OH of the growing chain (the orange color of the freed DMTr cation lets the instrument measure how much chain is available).
2. **Coupling:** the phosphoramidite (activated by tetrazole) reacts with the free 5′‑OH, forming a phosphite triester — a P(III) connection.
3. **Capping:** acetic anhydride acetylates any 5′‑OH that failed to couple, permanently blocking those failure sequences.
4. **Oxidation:** iodine in water oxidizes the P(III) phosphite triester to a P(V) phosphate triester — the stable backbone linkage.

The cycle repeats for the next nucleotide. After the final nucleotide, concentrated ammonia cleaves the product from the solid support and removes the cyanoethyl and exocyclic‑amine protecting groups, yielding the single‑stranded oligonucleotide.

### Yield arithmetic: why every step must be near‑perfect

Because failures are capped and left behind, the fraction of full‑length product after \(n\) couplings is the product of the per‑step coupling efficiencies:

\[
\text{overall yield} = E^{n-1}
\]

where \(E\) is the fraction of chains that couple at each step and \(n\) is the length. At 99% efficiency, a 20‑mer gives \((0.99)^{19} \approx 0.83\), or 83% full‑length product; at 98%, a 60‑mer gives only \((0.98)^{59} \approx 0.30\). The rest is a mixture of (n−1), (n−2), and shorter failure sequences — which is why long synthetic DNA is purified by gel electrophoresis or HPLC, and why very long genes are assembled from shorter, clean pieces.

## ELI-10: Explain Like I'm 10

> Building DNA in a machine is like building a beaded necklace one bead at a time while the necklace is tied to a table, adding each new bead at the top. After each bead you check that it attached, glue down any bead that didn't attach so it can't cause trouble later, and harden the string so it doesn't fall apart. At the end you untie the necklace and wash it off. The machine repeats "add, check, glue, harden" for every bead in the exact order you want.

## High-Yield Points

- Chemical DNA synthesis needs no template and no enzyme; it builds oligonucleotides 3′→5′ on a solid support — the opposite direction of polymerases.
- The building block is a phosphoramidite: 5′‑OH protected with DMTr (acid‑labile), exocyclic amines protected with base‑labile groups, 3′ end activated as a P(III) phosphoramidite.
- Cycle per nucleotide: detritylation → coupling (tetrazole‑activated) → capping (acetylate failures) → oxidation (P(III) → P(V) phosphate).
- Capping is what keeps failure sequences out of the product: blocked chains never grow again.
- Overall yield = \(E^{n-1}\): 99% per step gives ~83% for a 20‑mer but only ~37% for a 100‑mer; 98% per step gives ~30% for a 60‑mer.
- Final deprotection (ammonia) removes cyanoethyl and amine protecting groups and cleaves the product from the support.
- Synthetic oligonucleotides are used as PCR/sequencing primers, gene‑synthesis building blocks, antisense/siRNA drugs, and CRISPR guide strands.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| oligonucleotide | Short synthetic DNA (typically 15–100 nucleotides) | The product of chemical synthesis; primers and probes are oligonucleotides |
| phosphoramidite | Protected, activated nucleotide building block for synthesis | The reagent added in every coupling step |
| solid‑phase synthesis | Building the chain on a solid bead, washing away reagents | Enables automation and easy purification |
| DMTr (dimethoxytrityl) | Acid‑labile protecting group on the 5′‑OH | Its removal controls each cycle; its orange color monitors coupling |
| detritylation | Removing the DMTr group with acid | Frees the 5′‑OH for the next coupling |
| coupling | Forming the new phosphite linkage between 5′‑OH and phosphoramidite | The bond‑forming step of the cycle |
| capping | Acetylating unreacted 5′‑OH groups | Blocks failure sequences so they cannot keep growing |
| oxidation | Converting P(III) phosphite to P(V) phosphate | Stabilizes the backbone linkage |

## How It Works / Step-by-Step Process

1. Anchor the first (3′‑most) nucleoside to controlled‑pore glass beads and load the beads into the synthesizer column.
2. Detritylate: wash with acid to expose the 5′‑OH; the instrument monitors the orange DMTr color to check the amount of available chain.
3. Couple: deliver the next phosphoramidite plus tetrazole activator; the 5′‑OH attacks the activated phosphorus, forming a phosphite triester.
4. Cap: treat with acetic anhydride so any chain that missed the coupling is acetylated and permanently inactivated.
5. Oxidize: treat with iodine/water to convert the phosphite triester to the stable phosphate triester.
6. Repeat steps 2–5 for each nucleotide until the full sequence is assembled (adding 5′→3′ along the chain, which is anchored at 3′).
7. Treat with ammonia: cleave the product from the beads and remove the cyanoethyl and amine protecting groups; purify by gel electrophoresis or HPLC.

## Worked Examples

### Example 1: Coupling efficiency and full‑length yield

A synthesizer advertises 99.5% stepwise coupling. The fraction of full‑length product for a 30‑mer is

\[
\text{yield} = E^{n-1} = (0.995)^{29}
\]

Computing: \(\ln(0.995) = -0.00501\), so \(\ln(\text{yield}) = 29 \times (-0.00501) = -0.145\), and

\[
\text{yield} = e^{-0.145} \approx 0.865
\]

So about 86% of the material is the desired 30‑mer — quite good. Contrast a 60‑mer made at 98% per step:

\[
\text{yield} = (0.98)^{59} \approx 0.30
\]

Only about 30% full length, with 70% as failure sequences of every shorter length. This is why long oligonucleotides are much harder to make than short primers, and why stepwise efficiency is the most important quality metric of a synthesizer.

### Example 2: Reagent amounts at synthesis scale

A 1.0 μmol‑scale synthesis of a 20‑mer uses 10 equivalents of phosphoramidite per coupling (a large excess drives coupling to completion). The total phosphoramidite needed is

\[
20\ \text{couplings} \times 10\ \mu\text{mol/coupling} = 200\ \mu\text{mol}
\]

A typical deoxyribonucleoside phosphoramidite has a molar mass near 700 g/mol, so the total mass is

\[
200 \times 10^{-6}\ \text{mol} \times 700\ \frac{\text{g}}{\text{mol}} = 0.14\ \text{g} = 140\ \text{mg}
\]

If the four phosphoramidites are used in roughly equal amounts (about 50 μmol, or ~35 mg, each), a few hundred milligrams of reagents produce a complete primer — a vivid illustration of how little material a synthesis consumes.

### Example 3: How many primer molecules come out?

A 0.10 μmol synthesis of a 20‑mer primer, after purification, delivers on the order of 0.10 μmol of full‑length product. The number of molecules is

\[
0.10 \times 10^{-6}\ \text{mol} \times 6.022 \times 10^{23}\ \text{mol}^{-1} \approx 6.0 \times 10^{16}\ \text{molecules}
\]

A typical PCR uses about \(10^{12}\) primer molecules per reaction, so one small synthesis supplies enough primer for tens of thousands of PCR reactions — one reason synthetic primers are so inexpensive per reaction.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| DNA synthesis (chemical) | DNA replication (enzymatic) | Chemical synthesis has no template and builds 3′→5′; replication copies a template 5′→3′ using polymerases |
| 3′→5′ chemical growth | 5′→3′ enzymatic growth | The synthesizer adds to the 5′ end of the anchored chain; enzymes add to the 3′ end |
| Phosphoramidite | dNTP | Phosphoramidite is a protected P(III) building block for chemical coupling; dNTP is the natural substrate of polymerases |
| Detritylation removes the 5′‑OH | Detritylation removes the base | Acid removes only the DMTr on the 5′‑OH; bases are protected with base‑labile groups removed at the end |
| Capping extends failed chains | Capping blocks failed chains | Capping acetylates unreacted 5′‑OH so failures cannot grow and contaminate the product |
| Yield = \(E^n\) | Yield = \(E^{n-1}\) | A chain of \(n\) nucleotides needs \(n-1\) coupling steps after the first anchored nucleotide |

## Quick Review

1. In which direction does chemical DNA synthesis build the chain, and why?
2. List the four steps of one coupling cycle, in order.
3. What is the purpose of the capping step?
4. A 40‑mer is synthesized at 99% stepwise efficiency. What fraction of full‑length product do you expect?
5. Why can't the same phosphoramidite chemistry be used to make RNA as easily as DNA? (Think about the 2′‑OH.)
6. Name three applications of synthetic oligonucleotides.

<details>
<summary>Show answers</summary>

1. 3′→5′ (each nucleotide is added at the 5′ end), because the chain is anchored to the solid support through its 3′ end and no enzyme directs the direction.
2. Detritylation (acid removes DMTr) → coupling (tetrazole‑activated phosphoramidite reacts with the free 5′‑OH) → capping (acetylate unreacted 5′‑OH) → oxidation (P(III) phosphite → P(V) phosphate).
3. To permanently block any chains that failed to couple, so they cannot grow in later cycles and contaminate the final product with (n−1), (n−2), … failures.
4. \((0.99)^{39} \approx 0.68\) — about 68% full length (39 couplings for a 40‑mer).
5. The ribose 2′‑OH would participate in unwanted side reactions and needs its own orthogonal protecting group, making RNA synthesis substantially more demanding; DNA's 2′‑H needs no protection.
6. PCR primers, sequencing primers, gene‑synthesis building blocks, antisense/siRNA drugs, CRISPR guide strands (any three).
</details>

## Related Topics

- Previous: [DNA Sequencing](06-dna-sequencing.md)
- Next: [The Polymerase Chain Reaction](08-the-polymerase-chain-reaction.md)
- Related: [Replication of DNA](03-replication-of-dna.md)
- Related: [Nucleotides and Nucleic Acids](01-nucleotides-and-nucleic-acids.md)
- Related: [Biomolecules: Nucleic Acids chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: typical deoxyribonucleoside phosphoramidite molar mass ≈ 700 g/mol (range ~650–850); Avogadro constant 6.022 × 10²³ mol⁻¹; coupling efficiency values are typical commercial specifications (99–99.5%), 2026-08.
- Last updated: 2026-08-16
