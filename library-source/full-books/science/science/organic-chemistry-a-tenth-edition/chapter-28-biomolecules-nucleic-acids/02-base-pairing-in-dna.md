---
title: "Base Pairing in DNA"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "28: Biomolecules: Nucleic Acids"
topic_number: "2"
source: "organic-chemistry.md"
tags:
  - "base-pairing-in-dna"
  - "science"
status: "complete"
---

# Base Pairing in DNA

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 28: Biomolecules: Nucleic Acids](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

**Base pairing** is the hydrogen-bonding pattern that holds the two strands of DNA together and makes the molecule's information *redundant*: given one strand, the other is fully determined. In the Watson–Crick model (1953), adenine pairs specifically with thymine and guanine pairs specifically with cytosine. The pairs fit the double helix because a purine (two rings) always pairs with a pyrimidine (one ring), keeping the base-pair width constant, and the hydrogen-bond donor/acceptor patterns are complementary: A–T forms two hydrogen bonds, G–C forms three.

Two consequences define the biology of DNA. First, **complementarity**: the sequence of one strand dictates the sequence of the other, which is exactly what makes replication (Topic 28.3) and transcription possible. Second, **Chargaff's rules**: in any double-stranded DNA, the amount of adenine equals thymine and guanine equals cytosine — a direct, measurable consequence of the pairing rules. This topic explains the structural basis of the pairing, why G–C pairs are stronger than A–T pairs, and how pairing controls DNA stability, melting, and mutation.

## Why This Matters

- **Replication and heredity:** Base pairing is the copying mechanism. Each strand serves as the template for its complement, which is how genetic information is passed to daughter cells with high fidelity.
- **DNA stability and melting:** The \\(T_m\\) (melting temperature) of a DNA duplex depends on its G–C content because G–C pairs have three hydrogen bonds versus two for A–T. PCR primers, probes, and hybridization assays are all designed with this relationship in mind.
- **Mutations and disease:** Rare tautomeric forms of the bases can form nonstandard pairs, and these mispairs, if unrepaired, become mutations. Understanding pairing explains why certain base changes (transitions) are more common than others.
- **Forensics and diagnostics:** DNA fingerprinting, paternity testing, and COVID-style PCR all exploit specific base pairing between a primer/probe and its target.
- **Exams:** Writing complementary strands, applying Chargaff's rules, predicting \\(T_m\\) trends from G–C content, and counting hydrogen bonds between paired strands are classic problems.

## Core Concepts

### The hydrogen-bonding rules

In DNA, each base presents a specific pattern of hydrogen-bond donors (N–H) and acceptors (C=O, ring N). The patterns are complementary:

- **A pairs with T:** two hydrogen bonds. Adenine's N-1 and N-6 amino group pair with thymine's O-4 and N-3.
- **G pairs with C:** three hydrogen bonds. Guanine's N-1, N-2 amino group, and O-6 pair with cytosine's N-3, O-2, and N-4 amino group.

The two strands run **antiparallel**: one runs 5' → 3' and the other 3' → 5', so the base pairs are read in opposite directions along the two strands. The pairing rules are the same in RNA, except uracil replaces thymine: **A pairs with U** (two hydrogen bonds), while **G pairs with C** (three) as in DNA.

### Why A–T and G–C and not other combinations

Two geometric facts enforce the pairing rules. First, **purine–pyrimidine width**: a purine–pyrimidine pair spans the same distance as the other base pairs, keeping the two sugar–phosphate backbones a constant distance apart along the helix. Two purines would bulge the helix; two pyrimidines would pinch it. Second, **donor–acceptor complementarity**: A–C, G–T, and A–G combinations place donor against donor or acceptor against acceptor, which costs energy and destabilizes the pair. The "correct" pairs are the ones that both fit the geometry and maximize hydrogen bonds.

### Chargaff's rules: pairing made visible

Erwin Chargaff's analyses of DNA from many organisms showed that in double-stranded DNA, \\([A] = [T]\\) and \\([G] = [C]\\), while the total purine content equals the total pyrimidine content. These rules follow directly from base pairing and are used to find unknown base percentages: if a genome is 30% A, it must be 30% T, leaving 40% for G + C, so 20% each.

### Melting temperature and G–C content

Heating DNA breaks the hydrogen bonds and separates the strands — **denaturation**. The temperature at which half the duplex is denatured is the melting temperature, \\(T_m\\). Because G–C pairs contribute three hydrogen bonds and A–T pairs two, a higher G–C fraction raises \\(T_m\\). A common empirical estimate for short duplexes is:

\[
T_m \approx 4(G + C) + 2(A + T)\ \text{°C}
\]

(the "Wallace rule", for oligonucleotides roughly 14–20 bases long). This relationship is why PCR primers are chosen with balanced G–C content and similar \\(T_m\\) values.

### Tautomerism and mispairing

Each base can adopt rare **tautomeric forms** (e.g., enol instead of keto for G and T). A rare enol tautomer of guanine pairs with thymine instead of cytosine — a mispair with the same geometry as a correct pair. If replication fixes the mispair into both daughter strands, a mutation results. This is the chemical origin of spontaneous base-substitution mutations and explains why tautomerization matters beyond organic chemistry class.

## ELI-10: Explain Like I'm 10

DNA is like a zipper with two rows of teeth that always match: a big tooth (A) only clicks with its special small tooth (T), and another big tooth (G) only clicks with its small tooth (C). The two rows face opposite directions, like two people shaking hands. If you know one row of teeth, you can always predict the other row — that's how a cell copies its DNA to make a new cell.

## High-Yield Points

- Watson–Crick pairs: A–T (2 H-bonds), G–C (3 H-bonds); in RNA, A–U (2 H-bonds).
- Purine always pairs with pyrimidine — constant helix width.
- Strands are antiparallel (5' ↔ 3' and 3' ↔ 5'); sequences are written 5' → 3' by convention.
- Chargaff: \\([A] = [T]\\), \\([G] = [C]\\); total purines = total pyrimidines.
- Higher G–C content → higher \\(T_m\\) (more hydrogen bonds); Wallace rule: \\(T_m \approx 4(G{+}C) + 2(A{+}T)\ \text{°C}\\) for short oligos.
- Keto tautomers dominate; rare enol/imine tautomers cause mispairing and mutations.
- Complementarity makes replication and transcription possible: each strand is a template for the other.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Base pair | Two bases held together by hydrogen bonds (A–T, G–C) | The unit of information storage; one strand predicts the other |
| Complementary strand | The strand whose sequence is dictated by base pairing | Templates for replication and transcription |
| Antiparallel | Two strands running in opposite 5' → 3' directions | Required geometry of the double helix |
| Hydrogen bond | Weak electrostatic interaction between N–H and N/O acceptors | The force holding the two strands together |
| Chargaff's rules | \\([A] = [T]\\) and \\([G] = [C]\\) in duplex DNA | A measurable consequence of base pairing |
| Melting temperature (\\(T_m\\)) | Temperature at which half the duplex denatures | Governs PCR and hybridization experimental design |
| Tautomer | Isomer differing by proton position (keto vs enol) | Rare tautomers cause mispairing and mutations |
| Denaturation | Separation of the two strands by heat or pH | Reversible; the basis of PCR cycling |

## Worked Examples

### Example 1: Applying Chargaff's rules

A double-stranded DNA sample is 28% adenine. What are the percentages of T, G, and C?

**Write the rules first:** \\([A] = [T]\\), \\([G] = [C]\\), and \\([A] + [T] + [G] + [C] = 100\\%\\).

**Substitute** \\([A] = 28\\%\\):

\[
[T] = 28\%,\quad [G] + [C] = 100\% - 56\% = 44\%
\]

**Since** \\([G] = [C]\\):

\[
[G] = [C] = \frac{44\%}{2} = 22\%
\]

**Answer:** T = 28%, G = 22%, C = 22%. Notice that only A's percentage is needed — pairing rules determine everything else.

### Example 2: Hydrogen bonds in a genome segment

A double-stranded DNA region is 1000 base pairs long with 40% G–C pairs. Calculate the total number of hydrogen bonds holding the two strands together.

**Write the relationship first:**

\[
H = 3N_{GC} + 2N_{AT}
\]

where \\(N_{GC}\ = 0.40 \times 1000 = 400\\) and \\(N_{AT} = 1000 - 400 = 600\\).

**Substitute:**

\[
H = 3(400) + 2(600) = 1200 + 1200 = 2400
\]

**Answer:** 2400 hydrogen bonds. The same reasoning explains why G–C-rich regions are harder to denature and melt at higher temperature.

### Example 3: Writing the complementary strand

Write the complementary strand for 5'-A T G C C G T A-3', labeling its direction.

**Apply pairing rules base by base, then reverse direction** because the complement runs antiparallel:

\[
5'\text{-A T G C C G T A-3'} \quad \rightarrow \quad 3'\text{-T A C G G C A T-5'}
\]

**Answer:** The complement is 3'-TACGGCAT-5', conventionally rewritten as 5'-TACGGCA T-3' when read in the standard direction. The classic exam trap is forgetting to reverse the direction when writing the answer 5' → 3'.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| A–T vs A–U | Same pairing in DNA and RNA | DNA uses T; RNA uses U; both pair with A via two hydrogen bonds |
| Hydrogen bonds (between strands) | Phosphodiester bonds (within a strand) | H-bonds are weak, noncovalent, and hold strands together; phosphodiester bonds are covalent and build the backbone |
| Complementary strand | Identical strand | The complement has swapped bases and reversed direction; it is not the same sequence |
| G–C content and \\(T_m\\) | G–C content and helix width | G–C content changes melting temperature, not helix geometry; width is fixed by purine–pyrimidine pairing |
| Chargaff's rules | Any single-stranded DNA | Chargaff's equalities hold only for double-stranded DNA; single-stranded DNA can have any composition |
| Tautomer | Resonance form | Tautomers differ in atom positions (proton moves, bond shifts); resonance forms differ only in electron placement |
| Mutation from mispairing | Mutation from chemical damage | Mispairing arises from tautomers or replication errors; damage (UV, oxidation) chemically alters bases — different mechanisms, same outcome |

## Quick Review

1. Which base pairs form two hydrogen bonds, and which form three?
2. A DNA duplex is 35% cytosine. What are the percentages of G, A, and T?
3. Write the complementary strand (with direction) of 5'-G G A T C C-3'.
4. Why must a purine pair with a pyrimidine?
5. Two 20-base DNA duplexes have the same length but different sequences. One is 70% G–C, the other 30%. Which has the higher \\(T_m\\), and why?

<details>
<summary>Show answers</summary>

1. A–T (and A–U in RNA) form two hydrogen bonds; G–C forms three.
2. G = 35% (pairs with C); remaining 30% is A + T, so A = 15% and T = 15%.
3. 3'-C C T A G G-5' (equivalently 5'-G G A T C C-3' read antiparallel; written 5' → 3' the complement is 5'-G G A T C C-3' reversed: 5'-C C T A G G-3'). The key: A pairs with T, G pairs with C, and the direction reverses.
4. Purine–pyrimidine pairs keep the sugar–phosphate backbones a constant distance apart; two purines would bulge the helix and two pyrimidines would pinch it.
5. The 70% G–C duplex: G–C pairs contribute three hydrogen bonds each versus two for A–T, so more hydrogen bonds must be broken and the duplex melts at a higher temperature.

</details>

## Related Topics

- Previous: [Nucleotides and Nucleic Acids](01-nucleotides-and-nucleic-acids.md)
- Next: [Replication of DNA](03-replication-of-dna.md)
- Related: [Biomolecules: Nucleic Acids chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Hydrogen-bond counts per pair are standard textbook facts; the Wallace rule is an empirical estimate for short oligonucleotides, and \\(T_m\\) depends on salt and buffer conditions — verify against current sources before relying on exact values in assessments.
- Last updated: 2026-08-16
