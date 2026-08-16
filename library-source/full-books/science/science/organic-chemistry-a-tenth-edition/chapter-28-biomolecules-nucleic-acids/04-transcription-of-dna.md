---
title: "Transcription of DNA"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "28: Biomolecules: Nucleic Acids"
topic_number: "4"
source: "organic-chemistry.md"
tags:
  - "transcription-of-dna"
  - "science"
status: "complete"
---

# Transcription of DNA

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 28: Biomolecules: Nucleic Acids](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

**Transcription** is the process by which a cell copies the information stored in a gene — a stretch of double‑stranded DNA — into a single‑stranded RNA molecule. The enzyme **RNA polymerase** unwinds a short stretch of the double helix, reads one of the two strands (the **template strand**), and builds an RNA chain complementary to it, using the ribonucleoside triphosphates ATP, GTP, CTP, and UTP as substrates. No primer is needed: RNA polymerase starts a new chain from the first nucleotide.

The RNA product differs from DNA in three systematic ways: the sugar is **ribose** rather than 2‑deoxyribose (an extra –OH at the 2′ position), the base **uracil (U)** replaces thymine (T), and the molecule is normally single‑stranded. Transcription is the first step of the central dogma (DNA → RNA → protein) and the key control point of gene expression: every cell carries the same DNA, but different cell types transcribe different subsets of genes — which is why a liver cell and a neuron look and behave so differently.

## Why This Matters

Transcription is where genetic information becomes usable chemistry, and it is a prime target for medicine. Antibiotics such as **rifampin** kill bacteria by blocking bacterial RNA polymerase, and the death‑cap mushroom toxin **α‑amanitin** inhibits eukaryotic RNA polymerase II. mRNA vaccines work because the injected mRNA is itself a transcript that the ribosome reads directly. In the clinic, measuring RNA levels (RT‑qPCR) is how doctors detect viral infections and how oncologists profile gene expression in tumors. In the lab, purified polymerase enables **in vitro transcription** of mRNA and RNA probes. And because misregulated transcription is linked to cancer and developmental disorders, the mechanism matters well beyond the classroom.

## Core Concepts

### The template strand and the coding strand

Each gene has two strands with different jobs. RNA polymerase reads the **template strand** in the 3′→5′ direction and synthesizes RNA in the 5′→3′ direction. The RNA is complementary to the template strand, which means it is identical in sequence to the **coding strand** — except that every thymine appears as uracil. The template is like a photographic negative; the mRNA is the positive print. A useful rule: to write the mRNA from a gene, copy the coding strand and change every T to U.

### The chemistry of RNA chain growth

Each step is a nucleophilic substitution at phosphorus. The 3′‑hydroxyl of the growing RNA chain attacks the α‑phosphate of the incoming nucleoside triphosphate, forming a new **phosphodiester bond** between the incoming 5′‑phosphate and the previous 3′‑OH. Pyrophosphate (PPᵢ) is expelled:

\[
\text{RNA–OH} + \text{NTP} \longrightarrow \text{RNA–NMP} + \text{PP}_{\text{i}}
\]

Hydrolysis of PPᵢ to two phosphates — about −20 kJ/mol (reported values range from roughly −19 to −33 kJ/mol depending on conditions) — pulls the reaction forward, and the stoichiometry is 1:1:1: one NTP in, one PPᵢ out, one bond made. RNA polymerase is fast (tens of nucleotides per second in bacteria) but relatively sloppy: its error rate is about \(10^{-4}\) to \(10^{-5}\) per nucleotide, roughly 10,000 times higher than a proofreading DNA polymerase, because it lacks a 3′→5′ proofreading exonuclease. This is tolerable because RNA is a working copy, not the permanent archive.

### Initiation, elongation, and termination

In bacteria, a **sigma factor** guides RNA polymerase to the **promoter**, a DNA sequence just upstream of the gene; transcription starts at the +1 position. During **elongation**, the enzyme moves down the template, maintaining a melted "transcription bubble" of about 17 base pairs while the growing RNA peels away. **Termination** uses either a rho‑independent terminator (a GC‑rich hairpin followed by a run of U's that destabilizes the RNA–DNA hybrid) or a rho‑dependent terminator employing the protein rho.

Eukaryotes are more elaborate: polymerase I makes ribosomal RNA, polymerase II makes mRNA, and polymerase III makes tRNA and other small RNAs, and initiation requires general transcription factors rather than a single sigma factor.

### Processing of eukaryotic pre‑mRNA

Bacterial mRNA is used immediately, often while transcription is still in progress. Eukaryotic primary transcripts must be processed before export: a 7‑methylguanosine **5′ cap** is added, a **poly‑A tail** is added at the 3′ end, and **splicing** removes the non‑coding **introns**, joining the coding **exons** together. The mature mRNA is the molecule the ribosome reads.

## ELI-10: Explain Like I'm 10

> DNA is like the master cookbook that stays locked in the kitchen office. Transcription is photocopying one recipe onto a single sheet of paper (RNA), so the recipe can travel to the kitchen counter where the meal (protein) gets cooked. The photocopier reads the master page backward and writes the copy forward, and it swaps the letter T for the letter U. The sheet is a working copy — it's fine if it has a few tiny smudges, because the master cookbook is still safe.

## High-Yield Points

- RNA polymerase reads the template strand 3′→5′ and synthesizes RNA 5′→3′; no primer is required.
- RNA uses ribose (2′‑OH) and uracil instead of thymine; it is usually single‑stranded.
- The mRNA sequence equals the coding‑strand sequence with every T changed to U.
- Each incorporated nucleotide releases one PPᵢ; PPᵢ hydrolysis (≈ −20 kJ/mol) drives polymerization.
- RNA polymerase error rate is \(10^{-4}\)–\(10^{-5}\) per nucleotide — far higher than DNA polymerase — because it lacks proofreading.
- Bacteria: sigma factor + promoter, no mRNA processing. Eukaryotes: three polymerases, 5′ cap, poly‑A tail, splicing.
- Rifampin (bacteria) and α‑amanitin (eukaryotes) block transcription; mRNA vaccines rely on translating injected transcripts.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| transcription | Copying a DNA gene into a single‑stranded RNA molecule | First step of gene expression; the main control point for which genes are active |
| RNA polymerase | Enzyme that reads the DNA template and builds RNA 5′→3′ | The molecular machine of transcription and a drug target (rifampin) |
| template strand | The DNA strand RNA polymerase reads (3′→5′) | Determines the RNA sequence by base pairing |
| coding strand | The other DNA strand, same sequence as the mRNA (T→U) | Used for writing mRNA sequences and reading gene maps |
| promoter | DNA sequence upstream of a gene where RNA polymerase binds | Sets where and how often transcription starts |
| phosphodiester bond | The linkage joining nucleotides in RNA and DNA | The bond built at every step of transcription |
| pyrophosphate (PPᵢ) | The two‑phosphate molecule released when an NTP is incorporated | Its hydrolysis drives chain growth energetically |
| intron / exon | Non‑coding / coding segments of a eukaryotic gene | Introns are spliced out; exons are joined into mature mRNA |
| 5′ cap / poly‑A tail | 5′ methylguanosine cap and 3′ adenine tail on eukaryotic mRNA | Protect the mRNA and help it get translated |

## How It Works / Step-by-Step Process

1. RNA polymerase (with a sigma factor in bacteria) binds the promoter and melts ~17 base pairs, exposing the template strand.
2. The first NTP base‑pairs at the +1 position; its 3′‑OH becomes the attachment point for the next nucleotide.
3. Each incoming NTP is added to the 3′ end: the 3′‑OH attacks its α‑phosphate, PPᵢ is released and hydrolyzed, and the bubble moves down the template.
4. Elongation continues until a termination signal (hairpin + U‑run, or rho) releases the completed RNA.
5. In eukaryotes, the primary transcript is capped, poly‑adenylated, and spliced to give the mature mRNA.

## Worked Examples

### Example 1: Writing the mRNA from a template strand

Given the template strand (written 3′→5′):

\[
\text{3′–T A C G C A T T A C G G–5′}
\]

Apply the pairing rules A→U, T→A, G→C, C→G, reading the template right to left as the polymerase does:

\[
\text{mRNA: 5′–AUG CGU AAU GCC–3′}
\]

The mRNA has 12 nucleotides, so the reaction consumed 12 NTP molecules and released 12 PPᵢ. Check: the mRNA is complementary to the template, and replacing every U with T gives the coding strand exactly.

### Example 2: Stoichiometry — how much NTP does a transcription reaction need?

A gene's coding region is 1,200 base pairs long. Because one RNA nucleotide is made per DNA base pair read, the unprocessed mRNA is 1,200 nucleotides long:

\[
1{,}200\ \text{bp} \times \frac{1\ \text{nt}}{\text{bp}} = 1{,}200\ \text{nt}
\]

That mRNA carries 1,200 ÷ 3 = 400 codons, so after a stop codon it directs synthesis of up to 399 amino acids — a direct bridge to translation.

Suppose a lab wants to synthesize 0.50 μmol of this mRNA by in vitro transcription. The total NTP requirement follows from the units:

\[
0.50\ \mu\text{mol mRNA} \times \frac{1{,}200\ \text{nt}}{\text{molecule}} \times \frac{1\ \text{mol NTP}}{\text{nt}} = 600\ \mu\text{mol NTP} = 0.60\ \text{mmol}
\]

(Each mRNA molecule needs 1,200 NTP molecules, so 0.50 μmol of mRNA needs 0.50 × 1,200 = 600 μmol of NTP.) Used in equal amounts, that is 150 μmol of each nucleotide — a quantity well within reach of a standard lab reagent bottle.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Replication | Transcription | Replication copies DNA→DNA and needs a primer; transcription makes RNA, needs no primer, and copies only selected genes |
| Template strand | Coding strand | The polymerase reads the template; the mRNA matches the coding strand (with U for T) |
| "RNA is made 3′→5′" | "RNA polymerase reads 3′→5′" | The enzyme reads the template 3′→5′ but always builds the RNA 5′→3′ |
| Uracil | Thymine | U pairs with A in RNA; T pairs with A in DNA — same partner, different molecule |
| mRNA is a copy of the template | mRNA is complementary to the template | It is complementary to the template and identical to the coding strand (T→U) |
| RNA polymerase proofreads | Proofreading DNA polymerase | RNA polymerase lacks a 3′→5′ exonuclease, so its error rate is ~10⁴–10⁵× higher |

## Quick Review

1. In which direction does RNA polymerase read the template strand, and in which direction does it build RNA?
2. Why does transcription not need a primer, and what does each NTP incorporation release?
3. A template strand reads 3′–GGCTAA–5′. What is the mRNA sequence?
4. List the three structural differences between RNA and DNA.
5. What is the approximate error rate of RNA polymerase, and why is it higher than DNA polymerase's?
6. Name two drugs or toxins that inhibit transcription, and which enzyme each targets.

<details>
<summary>Show answers</summary>

1. It reads the template 3′→5′ and synthesizes RNA 5′→3′ (RNA grows at its 3′ end).
2. RNA polymerase can start a chain with the first NTP — it needs no pre‑existing 3′‑OH. Each incorporation releases one pyrophosphate (PPᵢ), whose hydrolysis drives the reaction.
3. mRNA: 5′–CCG AUU–3′ (C pairs with G, G with C, A with U, T with A — written 5′→3′).
4. (1) Ribose instead of 2‑deoxyribose; (2) uracil instead of thymine; (3) normally single‑stranded.
5. About \(10^{-4}\)–\(10^{-5}\) per nucleotide, roughly 10⁴–10⁵ times higher than DNA polymerase, because RNA polymerase lacks a 3′→5′ proofreading exonuclease.
6. Rifampin inhibits bacterial RNA polymerase; α‑amanitin (death‑cap mushroom toxin) inhibits eukaryotic RNA polymerase II.
</details>

## Related Topics

- Previous: [Replication of DNA](03-replication-of-dna.md)
- Next: [Translation of RNA: Protein Biosynthesis](05-translation-of-rna-protein-biosynthesis.md)
- Related: [Nucleotides and Nucleic Acids](01-nucleotides-and-nucleic-acids.md)
- Related: [Biomolecules: Nucleic Acids chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: PPᵢ hydrolysis ≈ −20 kJ/mol (literature range roughly −19 to −33 kJ/mol); RNA polymerase error rate \(10^{-4}\)–\(10^{-5}\), DNA polymerase \(10^{-9}\)–\(10^{-10}\) with proofreading (standard textbook values, 2026-08).
- Last updated: 2026-08-16
