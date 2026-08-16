---
title: "DNA Sequencing"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "28: Biomolecules: Nucleic Acids"
topic_number: "6"
source: "organic-chemistry.md"
tags:
  - "dna-sequencing"
  - "science"
status: "complete"
---

# DNA Sequencing

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 28: Biomolecules: Nucleic Acids](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

**DNA sequencing** is the determination of the exact order of nucleotides (A, G, C, T) in a DNA molecule. The classic method, developed by Frederick Sanger in 1977, exploits a simple piece of chemistry: a DNA polymerase will faithfully copy a template until it is handed a nucleotide that cannot be extended — a **dideoxynucleotide (ddNTP)** that lacks the 3′‑OH needed for the next phosphodiester bond. Because the polymerase stops at that point, a reaction containing a small amount of one ddNTP produces a ladder of fragments ending at every position where that base occurs. Separating the fragments by size reveals the sequence directly.

Modern sequencing retains Sanger's logic in automated form (four fluorescent colors, one capillary tube) and has spawned massively parallel "next‑generation" methods that sequence millions of fragments at once. The chemistry you learn here — primer extension, base pairing, and chain termination — underlies all of them.

## Why This Matters

Sequencing is the technology behind the genomic era. It identified the mutations behind cystic fibrosis and BRCA‑linked breast cancer; it powers forensics, paternity testing, and infectious‑disease diagnosis; it allowed the Human Genome Project to read all ~3.1 billion base pairs of human DNA; and it is how researchers track viral variants. For a chemist, sequencing is also a beautiful application of reaction design: a deliberately introduced chain‑terminating reagent converts a polymerization into an information‑reading device. Understanding Sanger sequencing makes PCR, DNA synthesis, and the whole field of genomics much easier to grasp.

## Core Concepts

### Dideoxynucleotides: the chain terminators

A normal deoxynucleoside triphosphate (dNTP) has a 3′‑OH, so the polymerase can attach the next nucleotide to it. A **dideoxynucleoside triphosphate (ddNTP)** is identical except that it lacks hydroxyl groups at both the 2′ and 3′ positions (2′,3′‑dideoxy). Once a ddNTP is incorporated, there is no 3′‑OH for the next attack, so synthesis stops dead. In structural terms, ddATP is a 2′,3′‑dideoxyribose sugar: positions 2′ and 3′ carry H instead of OH, with the adenine base at C1′ and the triphosphate chain at C5′. The molecule looks almost exactly like dATP — which is why the polymerase happily inserts it — but it is a dead end.

### The sequencing reaction: a ladder of nested fragments

A Sanger reaction contains a template, a short primer, DNA polymerase, the four dNTPs, and a small fraction of one labeled ddNTP (say ddATP*). The primer anneals and the polymerase extends it. At each template position calling for A, the enzyme either incorporates dATP (extension continues) or ddATP* (chain stops, and the fragment is labeled). Because ddATP* is present at a low ratio, termination happens at only some A positions, and the mixture contains every possible fragment ending at a different A. Four parallel reactions, one per ddNTP, produce four ladders.

### Reading the sequence by size

The fragments differ in length by single nucleotides, so they are separated by electrophoresis (traditionally four lanes of a polyacrylamide gel; today one capillary with four fluorescent colors). Short fragments migrate fastest, so the gel is read from the bottom up, and the order of bands directly spells the sequence of the newly synthesized strand in the 5′→3′ direction. A band of length 1 tells you the first base incorporated after the primer; the next band the second, and so on. With fluorescent dyes, a single lane suffices: the color of each band identifies which ddNTP ended that fragment. Modern instruments read 500–1,000 bases per reaction with >99% accuracy per base.

### Limits and the leap to next‑generation sequencing

Sanger sequencing reads one template at a time, which made whole genomes slow and expensive. Next‑generation sequencing (NGS) reverses the scale: millions of short fragments are attached to a surface, amplified into clusters, and sequenced in parallel by watching fluorescent nucleotides incorporated one at a time (sequencing‑by‑synthesis). Readouts are short (100–300 bases) but massively parallel, so a human genome can now be sequenced in days at a cost that has fallen from billions of dollars to a few hundred dollars or less.

## ELI-10: Explain Like I'm 10

> Imagine copying a long sentence with a machine that stops writing the moment it meets a red pencil mark. If you add a few red pencils among thousands of normal ones, you get one copy that stops at the first mark, another that stops at the second, and so on — a stack of copies of every possible length. If each letter's red pencil is a different color, lining the copies up by size tells you the whole sentence letter by letter. DNA sequencing does exactly that with special "stop" nucleotides.

## High-Yield Points

- ddNTPs are 2′,3′‑dideoxy — no 3′‑OH — so incorporation terminates the chain; this is the basis of Sanger sequencing.
- A Sanger reaction = template + primer + DNA polymerase + 4 dNTPs + a small fraction of one labeled ddNTP; four reactions (one per ddNTP) generate four fragment ladders.
- Fragments are separated by size; the sequence read is the newly synthesized strand, 5′→3′, read from shortest to longest.
- Every band in the ladder corresponds to a position of that base in the template — one fragment per occurrence.
- The ddNTP:dNTP ratio is tuned so termination occurs occasionally; ~1 termination per molecule gives a complete ladder.
- Read lengths are ~500–1,000 bases per Sanger reaction; NGS sequences millions of short fragments in parallel.
- Sequencing requires a primer (it is a polymerase extension reaction) — unlike transcription, it cannot start a chain de novo.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| dideoxynucleotide (ddNTP) | Nucleotide missing the 2′ and 3′ hydroxyls | The chain terminator that makes sequencing possible |
| chain termination | Halting DNA synthesis because no 3′‑OH is available | Generates fragments of every length ending at a known base |
| primer | Short DNA piece that anneals to the template and provides the starting 3′‑OH | Sets the start point of sequencing (and of PCR) |
| template | The DNA strand being copied | Its sequence is what the readout reveals, in complementary form |
| electrophoresis | Separation of DNA fragments by size in a gel or capillary | Turns fragment lengths into a readable ladder |
| read | The determined nucleotide sequence of one reaction | The unit of sequencing data; ~500–1,000 bases for Sanger |
| next‑generation sequencing (NGS) | Massively parallel short‑read sequencing | Made whole genomes fast and cheap |

## How It Works / Step-by-Step Process

1. Denature the double‑stranded DNA to single strands and anneal a labeled primer just upstream of the region to be sequenced.
2. Split the sample into four reactions; add polymerase, all four dNTPs, and a small amount of a different ddNTP to each (ddATP*, ddCTP*, ddGTP*, ddTTP*).
3. Let extension run: polymerase copies the template until it inserts the ddNTP, then stops; each tube contains a nested set of fragments ending at every occurrence of that base.
4. Separate the fragments by size (gel lanes or capillary with four fluorescent colors) and detect bands from shortest to longest.
5. Read the sequence 5′→3′ of the synthesized strand: the shortest band identifies the first base after the primer, and each successive band the next.
6. For a genome, assemble millions of reads by overlapping sequence (shotgun assembly).

## Worked Examples

### Example 1: Reading a sequence from fragment lengths

A Sanger reaction on a short template gives these fragment lengths (in nucleotides, measured from the primer's 5′ end) for each terminating ddNTP:

| Terminating ddNTP | Fragment lengths observed |
|---|---|
| ddG | 1, 5, 10 |
| ddA | 2, 6, 9 |
| ddT | 3, 7 |
| ddC | 4, 8 |

Position 1 is the first base incorporated after the primer, position 2 the second, and so on. Because a fragment of length \(n\) ends at position \(n\), the base at each position is the ddNTP that produced that length:

| Position | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Base | G | A | T | C | G | A | T | C | A | G |

The sequence of the newly synthesized strand, read 5′→3′, is therefore

\[
\text{5′–G A T C G A T C A G–3′}
\]

and the template strand (complementary, read 3′→5′) is 3′–CTAGCTAGTC–5′. Key point: the readout is the strand the polymerase made, not the template it read.

### Example 2: Tuning the ddNTP ratio — how many fragments do you get?

A template region to be sequenced is 400 nucleotides long and contains 100 adenine positions. The ddATP:dATP ratio is set at 1:100, meaning each A incorporation has a 1% chance of using ddATP and terminating. The expected number of A‑terminations per molecule is

\[
E = (\text{number of A positions}) \times (\text{fraction of ddATP}) = 100 \times 0.01 = 1.0
\]

So each extended molecule terminates, on average, once — some at the first A, some at the second, and so on — and together the population produces every A‑ended fragment needed to read all 100 A positions. If the ratio were 1:1, almost every molecule would terminate at the first A and the ladder would be useless. The same logic applies to all four bases.

### Example 3: How many reads does a genome need?

A Sanger instrument reads about 700 bases per reaction. The human genome is roughly \(3.1 \times 10^9\) base pairs. To cover it once (1× coverage):

\[
\frac{3.1 \times 10^9\ \text{bp}}{700\ \text{bp/read}} \approx 4.4 \times 10^6\ \text{reads}
\]

For the 10× coverage typically wanted for reliable assembly, that is about \(4.4 \times 10^7\) reads — a good feel for why the original Human Genome Project took years, and why massively parallel NGS changed everything.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| ddNTP | dNTP | ddNTP lacks both 2′‑OH and 3′‑OH (chain terminator); dNTP has a 3′‑OH (extension continues) |
| The sequence read | The template sequence | The readout is the newly synthesized strand, 5′→3′, complementary to the template |
| Reading the gel top‑down | Reading bottom‑up | Short fragments migrate fastest, so the sequence is read from the bottom (shortest) to the top (longest) |
| Sequencing | PCR | Sequencing is a single extension producing a ladder of fragments; PCR repeatedly copies a region to amplify it |
| Sequencing | DNA synthesis (chemical) | Sequencing reads a template using a polymerase; chemical DNA synthesis builds DNA without any template |
| "Sequencing can start without a primer" | "Polymerases need primers" | All polymerase extension — including sequencing — needs a primer; transcription is the exception (RNA polymerase starts de novo) |

## Quick Review

1. What structural feature of ddNTPs makes them chain terminators?
2. Why does a Sanger reaction produce fragments of many different lengths rather than one full‑length product?
3. In a four‑lane Sanger gel, how do you know which base is at position 1 (closest to the primer)?
4. A sequencing reaction gives ddC fragments of lengths 2 and 5 and ddT fragments of lengths 1, 3, and 4. What are the first five bases of the synthesized strand?
5. Why must the ddNTP:dNTP ratio be small?
6. What are two advantages of next‑generation sequencing over Sanger sequencing?

<details>
<summary>Show answers</summary>

1. They lack the 3′‑OH (and 2′‑OH) — after incorporation there is no hydroxyl for the next nucleotide to attach to, so synthesis stops.
2. The ddNTP is present at low concentration, so termination is random: each molecule stops at a different occurrence of that base, producing every fragment length from 1 to full length.
3. The shortest fragment — the band that ran fastest — ended at the first incorporated base; the ddNTP that produced it identifies that base.
4. Position 1 = T (ddT length 1), position 2 = C (ddC length 2), position 3 = T, position 4 = T, position 5 = C → 5′–TCTTC–3′.
5. So that termination occurs only occasionally (about once per molecule). With too much ddNTP, most chains stop at the first occurrence of that base and the ladder lacks the longer fragments needed to read the rest of the sequence.
6. NGS sequences millions of fragments in parallel (massive throughput), and the cost per base is orders of magnitude lower — whole genomes in days for hundreds of dollars rather than years for billions.
</details>

## Related Topics

- Previous: [Translation of RNA: Protein Biosynthesis](05-translation-of-rna-protein-biosynthesis.md)
- Next: [DNA Synthesis](07-dna-synthesis.md)
- Related: [Replication of DNA](03-replication-of-dna.md)
- Related: [The Polymerase Chain Reaction](08-the-polymerase-chain-reaction.md)
- Related: [Biomolecules: Nucleic Acids chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: human genome ≈ 3.1 × 10⁹ bp; Sanger read length ~500–1,000 nt; NGS read lengths ~100–300 nt (standard literature values, 2026-08).
- Last updated: 2026-08-16
