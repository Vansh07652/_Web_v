---
title: "Population Genetics"
subject: "Science"
book: "Biology for AP® Courses"
chapter: "19: The Evolution of Populations"
topic_number: "2"
source: "biology-ap-courses.md"
tags:
  - "population-genetics"
  - "science"
status: "complete"
---

# Population Genetics

> **Book:** [Biology for AP® Courses](../../README.md)  
> **Chapter:** [Chapter 19: The Evolution of Populations](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

**Population genetics** is the study of how allele and genotype frequencies change — or stay the same — in populations. Its cornerstone is the **Hardy-Weinberg principle**, developed independently around 1908 by mathematician G. H. Hardy and physician Wilhelm Weinberg. The principle states that allele and genotype frequencies in a population remain constant from generation to generation *if* five conditions are met: no mutations, random mating, no natural selection, an extremely large population size (so chance, or **genetic drift**, is negligible), and no gene flow. When those conditions hold, the population is in **Hardy-Weinberg equilibrium** — and, by definition, it is not evolving. Two equations describe the equilibrium. For a locus with two alleles, A (frequency p) and a (frequency q): **p + q = 1**, and the genotype frequencies are **p² + 2pq + q² = 1**, where p² = AA, 2pq = Aa, and q² = aa. The power of the principle is that it provides a *null hypothesis*: if observed frequencies deviate from these predictions, one or more of the five conditions is being violated — and that violation tells you which evolutionary force is at work.

## Why This Matters

The Hardy-Weinberg principle is the mathematical baseline for all of population genetics. In practice, real populations almost never satisfy all five conditions, which is exactly the point: the equations are a yardstick against which evolution is measured. Clinically, the same math is used to estimate **carrier frequencies** for recessive genetic conditions — the classic example is cystic fibrosis, where the frequency of affected individuals in some populations is commonly taught as roughly 1 in 2500, giving a carrier frequency (2pq) of about 1 in 25 (reference figures to verify against current texts). Conservation geneticists use Hardy-Weinberg logic to detect inbreeding or population bottlenecks, and forensic scientists use allele-frequency statistics to evaluate the significance of DNA-profile matches. On the AP® exam, Hardy-Weinberg calculation problems are among the most predictable free-response items.

## Core Concepts

### The two equations and what they mean

At a locus with two alleles, A and a:

- **p = frequency of allele A; q = frequency of allele a; p + q = 1.** Because every gene copy in the population is either A or a, the two allele frequencies must add to 1.
- **p² + 2pq + q² = 1** gives the genotype frequencies *predicted* at equilibrium: p² = AA, 2pq = Aa, q² = aa. This follows from the allele frequencies behaving like probabilities: the chance that two A gametes meet is p × p = p², and so on (the Hardy-Weinberg assumption of random mating).

Check with numbers: if p = 0.7 and q = 0.3, then AA = 0.49, Aa = 2(0.7)(0.3) = 0.42, and aa = 0.09 — and 0.49 + 0.42 + 0.09 = 1.

### The five conditions: a checklist for "no evolution"

Each condition is the absence of an evolutionary mechanism:

1. **No mutations** — mutation would introduce new alleles (change p and q).
2. **Random mating** — mate choice or inbreeding changes genotype frequencies.
3. **No natural selection** — differential survival or reproduction shifts allele frequencies.
4. **Extremely large population size** — in small populations, random sampling effects (**genetic drift**) move allele frequencies by chance.
5. **No gene flow** — migrants add or remove alleles.

If *all* five hold, allele frequencies stay constant and the population does not evolve. Note a subtle point about condition 2: nonrandom mating (like inbreeding) changes genotype frequencies but *not* allele frequencies — so by itself it does not cause evolution, though it alters the population's genotype distribution.

### Using the equations: the standard problem-solving path

The classic exam setup gives you the frequency of a recessive *phenotype* and asks for allele and carrier frequencies. Because heterozygotes (Aa) and homozygous dominants (AA) often look identical, you cannot read p² or 2pq directly from phenotypes — but you *can* read q², because only aa individuals show the recessive trait. The route:

1. **q² = frequency of affected (aa) individuals.**
2. Take the square root: **q = √q²**.
3. **p = 1 − q.**
4. Then p² = homozygous dominant frequency, and **2pq = carrier (heterozygous) frequency**.

Worked example (commonly taught reference figures): if q² = 1/2500 = 0.0004, then q = 0.02, p = 0.98, and carrier frequency 2pq = 2 × 0.98 × 0.02 ≈ 0.039 — about 1 in 25 people. The same method works for any recessive trait with known affected frequency.

### Deviations from equilibrium = evolution in progress

Compare observed genotype frequencies to Hardy-Weinberg predictions. If they match, the population appears to be at equilibrium for that locus. If they differ, one of the conditions is violated — and the pattern of the deviation points to the cause: a deficit of heterozygotes may suggest inbreeding or population subdivision; an excess may suggest heterozygote advantage or nonrandom mating; allele-frequency shifts over time implicate selection, drift, mutation, or gene flow. This "diagnostic" use of the principle is what makes it a working tool rather than a curiosity.

## ELI-10: Explain Like I'm 10

Imagine a huge bowl of red and white jelly beans, and every year you mix them and count. If the bowl never changes — no one adds jelly beans, no one eats the red ones, and the bowl is so big that luck doesn't matter — the red-to-white ratio stays the same forever. That's Hardy-Weinberg equilibrium: a recipe for "nothing changes." If the ratio *does* change, something broke the recipe, and that something is evolution.

## High-Yield Points

- **p + q = 1** (allele frequencies) and **p² + 2pq + q² = 1** (genotype frequencies).
- p = dominant allele frequency, q = recessive allele frequency, as commonly labeled.
- **Five conditions:** no mutation, random mating, no selection, huge population (no drift), no gene flow.
- Equilibrium = **no evolution**; any violation signals an evolutionary mechanism at work.
- Solve problems starting from **q² = affected (recessive homozygous) frequency**, then q = √q², p = 1 − q, carriers = 2pq.
- Dominance and frequency are unrelated: a dominant allele can be rare.
- Nonrandom mating changes genotype frequencies but not allele frequencies.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Population genetics | The study of allele and genotype frequencies in populations | The mathematical core of evolution |
| Hardy-Weinberg principle | Allele and genotype frequencies stay constant if five conditions hold | The null hypothesis for detecting evolution |
| Hardy-Weinberg equilibrium | A population whose frequencies match predictions and are not changing | The "no evolution" baseline |
| Genetic drift | Random changes in allele frequencies due to chance in small populations | One of the five conditions violated in small populations |
| Null hypothesis | The default expectation (no change) that data are tested against | Deviations from it are evidence of evolution |
| Carrier | A heterozygote (Aa) carrying a recessive allele without showing the trait | Its frequency (2pq) is what clinical and exam problems ask for |
| Random mating | Mating that is independent of genotype | One of the five equilibrium conditions |

## Example / Scenario

**Is this population evolving?** Researchers count genotypes at a flower-color locus in 100 plants: 60 AA, 30 Aa, 10 aa. First compute observed allele frequencies: A = 60 × 2 + 30 = 150 of 200 → p = 0.75; a = 30 + 20 = 50 of 200 → q = 0.25. Now predict equilibrium genotype frequencies: AA = 0.75² = 0.5625 → 56.25 plants; Aa = 2(0.75)(0.25) = 0.375 → 37.5 plants; aa = 0.25² = 0.0625 → 6.25 plants. Observed (60, 30, 10) versus predicted (56.25, 37.5, 6.25): there is a deficit of heterozygotes and an excess of both homozygotes. That pattern is the classic signature of inbreeding or population subdivision — nonrandom mating — rather than selection. The population is not in Hardy-Weinberg equilibrium, and the deviation tells the researchers which condition to investigate.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| p² | p | p² is the homozygous dominant *genotype* frequency; p is the *allele* frequency — never substitute one for the other |
| Dominant allele | Most common allele | Dominance is about phenotype expression, not abundance (e.g., a dominant trait can be rare) |
| Hardy-Weinberg equilibrium | A description of real populations | Real populations rarely meet all five conditions; equilibrium is a baseline, not an observation |
| Nonrandom mating | Evolution | Inbreeding changes genotype frequencies but leaves allele frequencies (p, q) unchanged |
| q² | Frequency of the disease/trait | q² is the homozygous recessive genotype frequency; affected individuals are aa, but carriers (2pq) are far more numerous for rare recessives |
| Genetic drift | Natural selection | Drift is random chance in small populations; selection is nonrandom differential reproduction |
| "In equilibrium" | "All conditions met" | Equilibrium means frequencies are constant *given* the conditions — if conditions change, frequencies change |

## Quick Review

1. State the Hardy-Weinberg equations and define every symbol.
2. List the five conditions required for Hardy-Weinberg equilibrium.
3. In a population where q² = 0.0004, what are q, p, and the carrier frequency 2pq?
4. Why can't you read p² directly from the number of dominant-phenotype individuals?
5. What does a heterozygote deficit relative to Hardy-Weinberg predictions suggest?
6. Does nonrandom mating alone cause evolution? Explain.

<details>
<summary>Show answers</summary>

1. p + q = 1, where p and q are the frequencies of alleles A and a; p² + 2pq + q² = 1, where p² = AA, 2pq = Aa, and q² = aa genotype frequencies.
2. No mutations; random mating; no natural selection; an extremely large population (negligible genetic drift); no gene flow.
3. q = √0.0004 = 0.02; p = 1 − 0.02 = 0.98; carrier frequency 2pq = 2 × 0.98 × 0.02 ≈ 0.039 (roughly 1 in 25).
4. Because AA and Aa individuals usually have the same phenotype under complete dominance, you cannot distinguish p² from 2pq by counting dominant-phenotype individuals — only q² (the recessive homozygotes) is directly observable.
5. A heterozygote deficit relative to predictions suggests nonrandom mating (e.g., inbreeding) or population subdivision — mating is not random with respect to genotype.
6. No — nonrandom mating changes genotype frequencies but leaves allele frequencies (p and q) unchanged, and evolution is defined as a change in allele frequencies.

</details>

## Related Topics

- Previous: [Population Evolution](01-population-evolution.md)
- Next: [Adaptive Evolution](03-adaptive-evolution.md)
- Related: [The Evolution of Populations chapter overview](../README.md)

## Source Notes

- Book: Biology for AP® Courses
- Local outline source: `biology-ap-courses.md`
- Official source URL: https://openstax.org/details/books/biology-ap-courses/
- Content type: Original educational study guide based on OpenStax outline structure.
- Safety note: educational content only — the cystic fibrosis carrier figures are commonly taught reference values to verify against current texts; the worked example is a constructed teaching scenario. No clinical guidance or fabricated data are given.
- Last updated: 2026-08-16
