---
title: "Whole-Genome Sequencing"
subject: "Science"
book: "Biology for AP® Courses"
chapter: "17: Biotechnology and Genomics"
topic_number: "3"
source: "biology-ap-courses.md"
tags:
  - "whole-genome-sequencing"
  - "science"
status: "complete"
---

# Whole-Genome Sequencing

> **Book:** [Biology for AP® Courses](../../README.md)  
> **Chapter:** [Chapter 17: Biotechnology and Genomics](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

**Whole-genome sequencing** determines the complete order of nucleotide bases in an organism's DNA — the full blueprint, not just a few genes. The Human Genome Project, the landmark international effort to read the ~3 billion base pairs of human DNA, began in 1990, produced a draft sequence in 2000–2001, and declared completion in 2003 (commonly taught timeline).

The technology behind such projects has changed radically. **Sanger sequencing**, which reads one DNA fragment at a time, gave way in the 2000s to **next-generation sequencing (NGS)**, which reads millions of fragments in parallel. The result is a dramatic cost collapse: a human genome cost billions of dollars during the Human Genome Project but can now be sequenced for roughly a thousand dollars — a commonly cited figure that continues to fall, so always check current sources.

## Why This Matters

- **A complete genome is a complete parts list** — every gene and every regulatory region, in order.
- **Disease discovery:** comparing genomes of affected and unaffected people reveals disease-associated variants.
- **Personalized medicine:** tumor genomes guide treatment choices (see Applying Genomics).
- **Public health:** sequencing pathogen genomes tracks outbreaks and detects resistance genes.
- **Evolutionary biology:** whole-genome comparisons among species reveal how life is related.
- **AP® exam:** knowing how Sanger and NGS work — and why assembly is hard — is regularly tested.

## Core Concepts

### Sanger (dideoxy) sequencing: reading one fragment at a time

Sanger sequencing, developed by Frederick Sanger in the 1970s, exploits a chemical trick (commonly taught). A DNA polymerase copies a template strand, and the reaction mixture includes normal nucleotides plus a small amount of **dideoxynucleotides (ddNTPs)**. A ddNTP lacks the 3′ hydroxyl group needed for the next nucleotide to attach, so when one is incorporated, chain synthesis stops right there. Because incorporation is random, the reaction produces fragments of *every possible length*, each ending at a known base.

Labeled ddNTPs (one fluorescent color per base) allow a machine to separate the fragments by size through a gel or capillary and read the color sequence — and therefore the DNA sequence — from shortest to longest. Sanger reads are typically a few hundred to about 1,000 base pairs (commonly taught range). The method is accurate and is still used to confirm important results, but it is far too slow for a whole genome.

### Shotgun sequencing: shred, read, and reassemble

Genomes are far longer than any single read, so sequencing requires breaking the DNA into pieces and putting the information back together.

- **Whole-genome shotgun:** cut the entire genome into random, overlapping fragments, sequence the ends of millions of fragments, and let a computer assemble the reads by matching overlapping ends.
- **Hierarchical (clone-by-clone) shotgun:** first build a physical map of large cloned pieces — commonly **BACs** carrying roughly 150,000 base-pair inserts (commonly taught figure) — then shotgun-sequence each clone separately and use the map to order the assembled clones along the chromosome.

The Human Genome Project used the hierarchical approach; the competing private effort led by Craig Venter's company used whole-genome shotgun (commonly taught history). Shotgun sequencing is faster, but assembling repetitive DNA is its greatest challenge.

### Next-generation sequencing: millions of fragments in parallel

**NGS** platforms (Illumina sequencing-by-synthesis is the commonly taught example) attach millions of DNA fragments to a glass surface, amplify each fragment into a local cluster of identical copies, and read all the clusters at once by detecting the fluorescent nucleotides incorporated in each cycle. A single run produces an enormous flood of **short reads** — commonly ~100–300 base pairs each. Reading **paired ends** (both ends of the same fragment) preserves information about how far apart the two reads sit in the original DNA, which helps the assembler bridge repeated sequences. This parallelization is what collapsed sequencing costs.

### Coverage, assembly, and the problem of repeats

**Coverage (depth)** is the average number of reads that cover each base — 30× coverage means every base was read about 30 times on average. Higher coverage makes base calls more trustworthy and fills in more of the genome. Assembly proceeds in stages: overlapping reads merge into **contigs**, and contigs are ordered and oriented into larger **scaffolds** using paired-end information. Repetitive sequences are the assembler's nightmare: identical repeats make it impossible to know which copy a read came from, so assemblies frequently contain gaps. Even genomes described as "complete" often have unassembled regions (commonly acknowledged in the field).

### Annotation: from letters to genes

A raw sequence is just letters. **Annotation** is the computational step that finds the features: genes (open reading frames, splice sites, promoters), regulatory elements, and repeats. **BLAST** (Basic Local Alignment Search Tool) compares a new sequence against databases of known genes to infer function from similarity — a gene that matches a known human gene across species probably does something similar. Much of the human genome is noncoding, and interpreting those regions is still an active research frontier.

## ELI-10: Explain Like I'm 10

Sequencing a genome is like rebuilding a library book after every page was shredded into confetti: read each scrap (a read), find scraps that share the same words (overlaps), and glue them back into pages (contigs) and chapters (scaffolds). The old machine read one scrap at a time; new machines read millions at once — that is why a whole human genome went from costing billions of dollars to costing about as much as a phone.

## High-Yield Points

- Sanger sequencing uses **dideoxynucleotides** to stop chain synthesis — the "chain-termination" method.
- Sanger reads one fragment at a time; NGS reads millions in parallel — the source of the cost collapse.
- Shotgun sequencing shreds DNA into random fragments and reassembles by overlap; the hierarchical version uses mapped clones first.
- **Coverage/depth** = average reads per base; higher coverage → more reliable sequence.
- **Repeats are the main assembly problem**; most genomes end up with some gaps.
- Human Genome Project timeline: started 1990, draft 2000–2001, completed 2003 (commonly taught).
- Human genome ≈ 3 billion base pairs; ~20,000–25,000 protein-coding genes (commonly taught reference values).
- Cost: billions of dollars (HGP era) to roughly $1,000 per genome (commonly cited — verify current figures).
- Annotation is computational: finding genes and comparing sequences with tools like BLAST.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Whole-genome sequencing | Determining the complete base sequence of an organism's DNA | Produces the full genetic blueprint |
| Sanger sequencing | Chain-termination method that reads one DNA fragment at a time | The original, still-used method for accurate single-gene sequencing |
| Dideoxynucleotide (ddNTP) | A nucleotide missing the 3′ OH group, which stops DNA synthesis | The chemical that creates length-1, length-2, … fragments in Sanger reads |
| Read | The sequence produced from one DNA fragment | The raw data unit of all sequencing |
| Shotgun sequencing | Fragmenting DNA randomly and assembling reads by overlap | How genomes too long for one read are sequenced |
| BAC (bacterial artificial chromosome) | Cloning vector carrying ~150 kb inserts (commonly taught) | Holds chromosome-sized chunks for clone-by-clone sequencing |
| Contig / scaffold | Contiguous assembled sequence; ordered contigs with gaps | The intermediate and near-final products of assembly |
| Coverage (depth) | Average number of reads covering each base | High coverage = trustworthy base calls |
| Next-generation sequencing (NGS) | Massively parallel sequencing of millions of short fragments | The technology behind cheap, fast whole genomes |
| Paired-end reads | Sequences from both ends of the same fragment | Helps assemble across repeats and orient contigs |
| Annotation | Computational identification of genes and other features in a sequence | Turns raw letters into a usable genome |
| BLAST | Software that compares sequences against databases | Infers function from similarity to known genes |

## Example / Scenario

**From confetti to genome in four steps.** Suppose researchers want the complete genome of a disease-causing bacterium. Step 1: purify its DNA and fragment it into millions of random, overlapping pieces. Step 2: sequence both ends of every piece with NGS, generating millions of short reads — the "confetti." Step 3: assemble — a computer finds reads that overlap and merges them into contigs; paired-end information orders the contigs into scaffolds. Step 4: annotate — software finds the genes and BLAST comparisons identify what the bacterium can do, including antibiotic-resistance genes.

**Why this matters in a hospital.** When several patients develop infections with the same rare bacterium, the lab sequences the isolates' whole genomes. Nearly identical sequences mean the patients share a common source — the same strain spreading through a ward — whereas different sequences suggest unrelated infections. This is genomics applied to real-time public health (educational illustration).

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Sequencing | Mapping | Sequencing reads the letters in order; mapping locates landmarks (maps still guide assembly) |
| Sanger sequencing | Next-generation sequencing | Single-fragment chain termination vs massively parallel short reads |
| Contig | Chromosome | A contig is assembled read-overlap covering part of a chromosome, not the whole chromosome |
| Coverage | Genome size | Coverage = reads per base; genome size = total bases |
| "Complete" genome | Truly gapless genome | Most assemblies have gaps, especially in repetitive regions |
| Sequencing | Annotation | Reading the letters vs interpreting where the genes are |
| Genome size | Gene count | ~3 billion bp ≠ ~20,000–25,000 genes; most human DNA is noncoding |

## Quick Review

1. Why do dideoxynucleotides stop DNA synthesis?
2. What is the difference between clone-by-clone (hierarchical) and whole-genome shotgun sequencing?
3. What does "30× coverage" mean, and why does higher coverage improve accuracy?
4. Why are repetitive sequences a problem during genome assembly?
5. What is the difference between sequencing a genome and annotating it?
6. Why did next-generation sequencing dramatically lower the cost of whole genomes?

<details>
<summary>Show answers</summary>

1. A dideoxynucleotide lacks the 3′ hydroxyl group, so after it is incorporated the next nucleotide cannot attach — chain synthesis terminates at that base.
2. Hierarchical (clone-by-clone) sequencing first builds a physical map and sequences mapped BAC clones one by one; whole-genome shotgun skips the map, shreds the entire genome into random fragments, and assembles everything computationally.
3. It means each base was covered by about 30 reads on average; more reads let sequencing errors be outvoted by correct bases, so base calls are more reliable.
4. Identical repeat sequences make it impossible to tell which copy of the genome a read came from, so reads from different copies can be misjoined and gaps remain.
5. Sequencing produces the raw letter sequence; annotation is the computational step that finds genes, regulatory elements, and functions (e.g., via BLAST comparisons).
6. NGS sequences millions of fragments simultaneously on one machine instead of one fragment at a time, multiplying throughput and dividing cost per base.
</details>

## Related Topics

- Previous: [Mapping Genomes](02-mapping-genomes.md)
- Next: [Applying Genomics](04-applying-genomics.md)
- Related: [Genomics and Proteomics](05-genomics-and-proteomics.md) · [Biotechnology and Genomics chapter overview](../README.md)

## Source Notes

- Book: Biology for AP® Courses
- Local outline source: `biology-ap-courses.md`
- Official source URL: https://openstax.org/details/books/biology-ap-courses/
- Content type: Original educational study guide based on OpenStax outline structure.
- Safety note: educational content only — timeline figures, read lengths, insert sizes, and cost estimates are commonly taught approximations to verify against current sources.
- Last updated: 2026-08-16
