---
title: "Mapping Genomes"
subject: "Science"
book: "Biology for AP® Courses"
chapter: "17: Biotechnology and Genomics"
topic_number: "2"
source: "biology-ap-courses.md"
tags:
  - "mapping-genomes"
  - "science"
status: "complete"
---

# Mapping Genomes

> **Book:** [Biology for AP® Courses](../../README.md)  
> **Chapter:** [Chapter 17: Biotechnology and Genomics](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

**Genome mapping** is the process of locating genes and other landmarks along chromosomes — building the "address system" for an organism's DNA. A genome map answers two basic questions: which chromosome is a gene on, and roughly where on that chromosome? Scientists build maps in two complementary ways. **Genetic (linkage) maps** infer positions from how often genes are inherited together; they are relative maps built from the recombination events of meiosis. **Physical maps** place landmarks at real distances measured in nucleotide base pairs, using restriction-enzyme cuts, cloned DNA fragments, and unique sequence markers.

Maps were the scaffolding of the Human Genome Project: before the complete human sequence could be assembled, researchers needed to know where each piece belonged. Mapping remains a routine first step in finding disease genes, comparing genomes across species, and guiding breeding programs in agriculture.

## Why This Matters

- **Finding disease genes:** maps let scientists track a disease through families and narrow its location to a small chromosome region without knowing anything about the protein product.
- **Understanding inheritance:** linkage and recombination explain why some traits are inherited together — a direct application of Mendelian genetics and meiosis.
- **Agriculture:** breeders use mapped molecular markers to select plants and animals carrying desirable alleles (marker-assisted selection).
- **Genome projects:** every sequencing project — from bacteria to humans — begins with some form of mapping to organize the work.
- **AP® exam:** recombination-frequency calculations and the genetic-map-versus-physical-map distinction are favorite test items.

## Core Concepts

### Genetic (linkage) maps: distance from recombination

During meiosis, homologous chromosomes pair up and swap segments in a process called **crossing over**. When two genes lie close together on the same chromosome, a crossover rarely occurs between them, so their alleles are usually inherited as a unit — the genes are **linked**. When two genes are far apart, crossovers between them are frequent, and their alleles sort nearly independently.

This relationship turns recombination into a measuring tool: the farther apart two loci are, the higher the **recombination frequency** between them. By convention, 1% recombination = **1 map unit** = **1 centimorgan (cM)**, named in honor of Thomas Hunt Morgan, whose fruit-fly studies established linkage mapping (commonly taught history). The calculation is:

> recombination frequency = (number of recombinant offspring ÷ total offspring) × 100%

Recombination frequencies are then used to order genes and estimate the distances between them, just as surveyors triangulate positions from measured angles.

Two caveats matter for exams. First, map units are *relative* distances based on crossover probability — they are not physical distances, and the number of base pairs per map unit varies across a genome (in humans, a commonly cited rough average is about 1 million bp per cM, but the true value varies by chromosome region). Second, crossing over is suppressed near centromeres (commonly taught), so maps built from recombination are compressed in those regions.

### Physical maps: distance in base pairs

Genetic maps give order and approximate spacing, but not true distances. **Physical maps** measure the DNA itself:

- **Restriction maps** use **restriction enzymes** — bacterial proteins that cut DNA at specific recognition sequences — to produce a set of fragments whose sizes reveal the spacing of cut sites.
- **Sequence-tagged site (STS) mapping** uses short, unique DNA sequences that occur exactly once in the genome as landmarks; their positions can be detected by PCR.
- **Clone-based maps** assemble overlapping cloned fragments — commonly large inserts carried in **bacterial artificial chromosomes (BACs)** — into long continuous stretches called **contigs** that tile across a chromosome.

Only a physical map can ultimately be converted into the letter-by-letter sequence of A, T, G, and C.

### From maps to genomes: the combined approach

The Human Genome Project used maps at every stage (commonly taught strategy): build a low-resolution genetic map, refine it into a physical map of ordered clones, then sequence each clone and use the clone order to assemble the whole chromosome. This **hierarchical** approach made assembly tractable because every sequenced piece already had a known home. (The alternative — **whole-genome shotgun** sequencing without a prior map — is covered in the next topic.)

### Positional cloning: finding genes by location

Once a region is mapped, a disease gene can be found without knowing what it does. In **positional cloning**, researchers track the inheritance of mapped markers through affected families. A marker that always travels with the disease must sit near the responsible gene. Each round of testing narrows the interval, until the region is small enough to examine gene by gene and identify the culprit — the strategy behind the discovery of many single-gene disease genes (commonly taught examples include cystic fibrosis and Huntington's disease).

## ELI-10: Explain Like I'm 10

Imagine genes are houses on a chromosome street. A **genetic map** tells you which houses are neighbors by watching "moving trucks" (crossovers) that swap belongings between houses during special cell divisions: close houses almost never get mixed up, far-apart houses often do. A **physical map** is like holding a real ruler: house 12 sits exactly 3,000 meters from house 15. Both maps help you find which street a lost pet (a disease gene) lives on.

## High-Yield Points

- 1 map unit = 1 centimorgan = 1% recombination frequency (commonly taught equivalence).
- Recombination frequency = (recombinant offspring ÷ total offspring) × 100%.
- Genetic maps give **relative** order and spacing; physical maps give **real** distances in base pairs.
- Genes on the same chromosome can appear unlinked if they are far enough apart.
- Recombination frequency *underestimates* true distance for widely separated genes, because multiple crossovers can cancel out.
- Crossing over is suppressed near centromeres, compressing genetic maps there (commonly taught).
- Restriction enzymes cut DNA at specific sequences — the raw material of restriction maps.
- The Human Genome Project combined genetic maps, physical maps, and clone-by-clone sequencing.
- Positional cloning locates a disease gene by its mapped position, not by its function.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Genome map | A diagram showing the positions of genes and landmarks along a chromosome | The "address system" that organizes all genetic research |
| Genetic (linkage) map | A map built from how often genes are inherited together, measured in recombination frequencies | Orders genes and reveals linkage relationships |
| Recombination frequency | The percentage of offspring with new combinations of alleles | The raw data from which genetic maps are drawn |
| Map unit / centimorgan (cM) | A genetic distance equal to 1% recombination | Standard unit of genetic-map distance |
| Physical map | A map showing real distances in nucleotide base pairs | Provides actual spacing and connects maps to sequence |
| Restriction enzyme | A protein that cuts DNA at a specific recognition sequence | Produces the fragments used in restriction mapping |
| Sequence-tagged site (STS) | A short DNA sequence found only once in the genome | Unique landmark detectable by PCR for mapping |
| Contig | A continuous stretch of DNA assembled from overlapping clones | The building blocks of clone-based physical maps |
| BAC (bacterial artificial chromosome) | A cloning vector that carries large DNA inserts (~150 kb, commonly taught) | Holds chromosome-sized chunks for physical mapping and sequencing |
| Positional cloning | Finding a gene by mapping its location and narrowing the region | Identifies disease genes without knowing the protein product |

## Example / Scenario

**Ordering three genes from testcross data.** Suppose a geneticist testcrosses a plant heterozygous at three linked loci (A, B, and C) and counts recombinant offspring. The recombination frequencies are: A–B = 9%, B–C = 3.5%, and A–C = 12.5%.

Because 9% + 3.5% = 12.5%, the data are consistent with the order **A – B – C**, with B between A and C. The genetic map reads: A ——9 cM—— B ——3.5 cM—— C. If the A–C value had been much *less* than 12.5%, the discrepancy would be a warning that multiple crossovers were hiding true distance — a reminder that map units are estimates, not ruler marks.

**From map to clinic.** Now imagine a marker locus, M, that shows 5% recombination with a disease allele in a large family study. The disease gene lies about 5 cM from M — close enough to justify cloning and examining the DNA between them. That is positional cloning in miniature: the map said where to look before anyone knew what the gene did.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Genetic map | Physical map | Genetic maps give relative recombination distances; physical maps give real base-pair distances |
| Map unit (cM) | Base pair | 1 cM ≈ 1% recombination, not a fixed number of bp; bp per cM varies across the genome |
| Linkage | Independent assortment | Linked genes share a chromosome and are inherited together; very distant genes appear unlinked |
| Recombination frequency | True physical distance | Multiple crossovers are undetectable, so recombination frequency underestimates long distances |
| Gene mapping | Gene sequencing | Mapping locates a gene's position; sequencing reads its letter-by-letter order |
| Contig | Chromosome | A contig is an assembled stretch of cloned DNA that covers *part* of a chromosome |
| Recombination in maps | Mutation | Recombination shuffles existing alleles during meiosis; mutation creates new alleles |

## Quick Review

1. What is the difference between a genetic map and a physical map?
2. Two genes show 12% recombination in a testcross. How far apart are they in map units?
3. Why can recombination frequency *underestimate* the true distance between two far-apart genes?
4. What role did mapping play in the Human Genome Project?
5. How would you use positional cloning to locate a disease gene?
6. Why might two genes on the same chromosome appear to assort independently?

<details>
<summary>Show answers</summary>

1. A genetic (linkage) map orders genes using recombination frequencies, giving relative distances in map units/cM; a physical map gives real distances in base pairs using restriction sites, STSs, and cloned contigs.
2. 12 map units (12 cM), because 1% recombination = 1 map unit.
3. If two crossovers occur between the genes, the original allele combination is restored, and the recombination event is not detected — so recombination frequency levels off below the true distance.
4. Maps ordered the work: a genetic map gave the big picture, a physical map ordered cloned fragments into contigs, and clone order guided assembly of the final sequence.
5. Track mapped markers through affected families; find a marker that always co-inherits with the disease; narrow the interval step by step; then examine candidate genes in that region.
6. If they are far enough apart, crossing over occurs between them in nearly every meiosis, so their alleles assort nearly independently despite sharing a chromosome.
</details>

## Related Topics

- Previous: [Biotechnology](01-biotechnology.md)
- Next: [Whole-Genome Sequencing](03-whole-genome-sequencing.md)
- Related: [Applying Genomics](04-applying-genomics.md) · [Biotechnology and Genomics chapter overview](../README.md)

## Source Notes

- Book: Biology for AP® Courses
- Local outline source: `biology-ap-courses.md`
- Official source URL: https://openstax.org/details/books/biology-ap-courses/
- Content type: Original educational study guide based on OpenStax outline structure.
- Safety note: educational content only — reference values (bp per cM, BAC insert size) are commonly taught approximations to verify against current texts.
- Last updated: 2026-08-16
