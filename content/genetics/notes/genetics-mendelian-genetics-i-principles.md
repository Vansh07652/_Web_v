---
id: genetics-mendelian-genetics-i-principles
title: "Mendelian Genetics I Principles"
slug: mendelian-genetics-i-principles
subject: genetics
subjectName: "Genetics"
contentType: note
lesson: mendelian-genetics-i-principles
lessonNumber: 3
description: "Study notes covering Mendelian Genetics I Principles." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - mendelian
  - genetics
  - principles
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-cd398940539c4a32"
lastReviewed:
version: 1.0.0
---

# Mendelian Genetics I Principles

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

This chapter builds the experimental and mathematical core of transmission genetics from Mendel's crosses with the garden pea. The two rules of transmission discovered by counting progeny are then turned into working tools: grids, branch diagrams, and the two probability rules that support them. The chapter closes with a statistical test for evaluating progeny counts and with family tree reasoning for connecting family patterns to a mode of inheritance.

### Mendel Experimental Design

Mendel chose the garden pea (*Pisum sativum*) because it offers **discrete traits**, clearly distinct forms such as yellow versus green seeds rather than a continuous range, and because its flower structure lets the experimenter control mating exactly. A plant can be **self fertilized** or **cross fertilized** by hand, and **reciprocal crosses**, swapping which parent supplied the pollen, showed that the cross direction did not matter.

His design had three rules: start with **true breeding** lines that produce only their own trait for generations; track one trait at a time and count every progeny individual; and use large samples so clean ratios emerge. The parents of a cross are the **P generation**, their offspring the **F1 generation**, and the offspring of an F1 self cross the **F2 generation**.

#### ELI-10
Think of a true breeding plant as a recipe that always makes the same cookie, generation after generation. Mendel baked two different true breeding recipes and then crossed them so the two recipes shared ingredients. He counted every single cookie instead of guessing whether a batch looked different. Careful counting is what turned cookie batches into numbers he could compare.

### Monohybrid Crosses and the Law of Segregation

A **monohybrid cross** follows one trait through two generations. Crossing true breeding *AA* with *aa* gives a uniformly *Aa* F1 showing only the *A* phenotype; Mendel called the visible version **dominant** and the hidden version **recessive**. Selfing the F1, each *Aa* parent makes *A* and *a* gametes in a 1:1 (sums to 2) ratio, and random fertilization gives the F2 genotypic ratio 1:2:1 (sums to 4) and the F2 phenotypic ratio 3:1 (sums to 4).

The explanation is the **law of segregation**: each diploid individual carries two copies of a gene, called **alleles**, at a given **locus**; the two alleles separate into different gametes, each gamete gets one copy, and fertilization restores the pair. Two identical alleles make an individual **homozygous** (*AA* or *aa*); two different alleles make it **heterozygous** (*Aa*). The **genotype** is the pair of alleles carried; the **phenotype** is the observable trait, and the two F2 ratios differ only because *AA* and *Aa* look the same under full dominance.

```text
CROSS: Monohybrid F2 from true breeding parents
Parents: Aa x Aa
Assumptions: one locus, complete dominance, equal gamete viability, random fertilization
Gametes per parent: A and a in 1:1
Genotypic outcome per locus: 1:2:1
Expected phenotypic ratio: 3:1 (sums to 4)
Probability requested: P(A_) = 1/2 + 1/4 = 3/4
```

#### ELI-10
Each parent carries two copies of a trait recipe and passes one copy to the child, like each parent flipping a coin to decide which copy the child gets. If one version always wins when both versions are present, that version is dominant and the quiet one is recessive. When both parents carry one of each version, three out of four children show the winning version. That is why the classic monohybrid ratio is 3:1 (sums to 4).

### Dihybrid Crosses and the Law of Independent Assortment

A **dihybrid cross** follows two traits at once. True breeding *AABB* crossed with *aabb* gives an F1 that is uniformly *AaBb* with both dominant phenotypes. Selfing the F1 produces four gamete types per parent, *AB*, *Ab*, *aB*, and *ab*, in equal numbers, and random fertilization yields the F2 phenotypic ratio 9:3:3:1 (sums to 16): 9/16 show both dominant traits, 3/16 and 3/16 show one dominant trait each, and 1/16 shows both recessive traits.

This pattern requires the **law of independent assortment**: alleles at unlinked loci transmit to gametes independently, so the dihybrid F2 is simply the two monohybrid F2s multiplied together, which is why 3:1 times 3:1 makes 9:3:3:1 (sums to 16).

| Feature | Monohybrid cross | Dihybrid cross |
| --- | --- | --- |
| Pure line parents | AA x aa | AABB x aabb |
| F1 genotype | Aa | AaBb |
| F1 gamete types | A, a | AB, Ab, aB, ab |
| F2 phenotypic ratio | 3:1 (sums to 4) | 9:3:3:1 (sums to 16) |
| F2 genotypic classes | 3 | 9 |
| Law demonstrated | Segregation | Independent assortment |

```text
CROSS: Dihybrid self cross with independent assortment
Parents: AaBb x AaBb
Assumptions: genes unlinked, complete dominance at both loci, equal viability
Gametes per parent: AB, Ab, aB, ab in 1:1:1:1
Genotypic outcome per locus: 1:2:1
Expected phenotypic ratio: 9:3:3:1 (sums to 16)
Probability requested: A_B_ = 3/4 x 3/4 = 9/16
```

#### ELI-10
Imagine each parent has two pairs of coins, one pair for seed color and one pair for seed shape. For each pair, the parent flips one coin to decide which copy the child gets, and the two pairs are flipped separately. Flipping the color pair cannot change what the shape pair does. Because the pairs act independently, the chance of a dominant result from both pairs is found by multiplying the two separate chances.

### Punnett Squares

A **Punnett square** is a grid of every male-female gamete combination: one parent's gametes across the top, the other's down the side, each cell joining row with column. A monohybrid cross needs a 2 x 2 grid, a dihybrid a 4 x 4, and a trihybrid an 8 x 8, which is why the method becomes impractical beyond two loci.

| | A | a |
| --- | --- | --- |
| A | AA | Aa |
| a | Aa | aa |

The grid above shows the F2 of a monohybrid cross: one *AA* cell, two *Aa* cells, and one *aa* cell, giving the genotypic ratio 1:2:1 (sums to 4) and the phenotypic ratio 3:1 (sums to 4). Most Punnett square errors come from a wrong gamete list, not from the grid arithmetic itself.

#### ELI-10
A Punnett square is like a multiplication table, but for baby traits instead of numbers. The father's options go along the top and the mother's options go down the side, and every box is filled by combining one from each. Each box stands for one possible child, and identical boxes can be counted together. The grid simply makes sure no combination is forgotten.

### Forked Line and Probability Methods

The **forked line method**, or branch diagram, reaches the same answers by handling one locus at a time. From the locus A outcome, 3/4 dominant to 1/4 recessive, fan out the locus B outcome, and so on, multiplying along each path. A dihybrid gives 3/4 x 3/4 = 9/16 both dominant, 3/4 x 1/4 = 3/16 dominant A with recessive b, 1/4 x 3/4 = 3/16 recessive a with dominant B, and 1/4 x 1/4 = 1/16 both recessive; the four classes sum to 16/16.

The method scales to any number of loci: a trihybrid self cross gives the phenotypic classes 27:9:9:9:3:3:3:1 (sums to 64), one class with three dominant traits, three with two, three with one, and one with none.

```text
CROSS: Trihybrid self cross solved by forked line
Parents: AaBbCc x AaBbCc
Assumptions: three unlinked loci, complete dominance at each locus, equal viability
Gametes per parent: ABC, ABc, AbC, Abc, aBC, aBc, abC, abc in 1:1:1:1:1:1:1:1
Genotypic outcome per locus: 1:2:1
Expected phenotypic ratio: 27:9:9:9:3:3:3:1 (sums to 64)
Probability requested: A_B_C_ = 3/4 x 3/4 x 3/4 = 27/64
```

#### ELI-10
A forked line is like a decision tree for a game where several choices are made in a row. At the first fork the color is chosen, at the second fork the shape, and so on. Every path through the tree is one kind of baby plant, and the chance of walking a whole path is found by multiplying the chances of its steps. The tree keeps the math organized when the grid would grow too big.

### Product and Sum Rules

The **product rule** states that the probability of two independent events both happening is the product of their probabilities: from *Aa* x *Aa*, P(*aa*) = 1/2 x 1/2 = 1/4, and two successive *aa* children give 1/4 x 1/4 = 1/16. The **sum rule** states that the probability of either of two mutually exclusive events is the sum of their probabilities: P(*AA* or *Aa*) = 1/4 + 1/2 = 3/4.

The rules combine: from *AaBb* x *AaBb*, P(*A_B_*) = 3/4 x 3/4 = 9/16, and P(*A_bb* or *aaB_*) = 3/16 + 3/16 = 6/16 = 3/8. The product rule justifies locus by locus multiplication; the sum rule assembles separate classes into ratios.

> **Common Mistake:** Students often add probabilities when they should multiply. "The chance of *Aa* from *Aa* x *Aa* plus the chance of *Bb* from *Bb* x *Bb*" is not a valid calculation: the two loci are independent events that must both happen, so the probability of *AaBb* is 1/2 x 1/2 = 1/4, never 1/2 + 1/2 = 1. A quick sanity check: any computed probability above 1 is a signal that addition was used where multiplication belongs.

#### ELI-10
Think of a peanut butter sandwich: the sandwich exists only if both the bread step and the jelly step succeed, so chances for "and" multiply. Choosing between an apple and a banana is choosing between alternatives, so chances for "either one" add. Almost every probability mistake in genetics comes from mixing up these two situations.

### Test Crosses and Back Crosses

A **test cross** reveals an unknown genotype by crossing it with a **homozygous recessive** tester. If the unknown parent is *CC*, all offspring are *Cc* with the dominant phenotype; if it is *Cc*, half are *Cc* and half are *cc*, a 1:1 (sums to 2) ratio, so one cross distinguishes the two genotypes. The same logic identifies carriers at the *CFTR* locus in cystic fibrosis (autosomal recessive, *CFTR* at 7q31.2, deltaF508 the most common loss of function allele).

A **back cross** mates an F1 offspring to one of the original P generation parents; when that parent is homozygous recessive, the back cross and the test cross are identical. The dihybrid test cross, *AaBb* x *aabb*, reveals two loci at once: with unlinked genes the four offspring classes appear in a 1:1:1:1 (sums to 4) ratio.

```text
CROSS: Test cross of a dominant phenotype individual
Parents: Cc x cc
Assumptions: one locus, complete dominance, the recessive parent contributes only c gametes
Gametes per parent: C and c in 1:1 for the heterozygote; c only for the tester
Genotypic outcome per locus: 1:1
Expected phenotypic ratio: 1:1 (sums to 2)
Probability requested: P(Cc offspring) = 1/2
```

```text
CROSS: Dihybrid test cross with two unlinked loci
Parents: AaBb x aabb
Assumptions: genes unlinked, complete dominance, the tester contributes only ab gametes
Gametes per parent: AB, Ab, aB, ab in 1:1:1:1 for the double heterozygote; ab only for the tester
Genotypic outcome per locus: 1:1
Expected phenotypic ratio: 1:1:1:1 (sums to 4)
Probability requested: P(AaBb offspring) = 1/4
```

#### ELI-10
A test cross is like an interrogation that makes hidden traits confess. The recessive tester can only contribute recessive versions, so any dominant version seen in the children must have come from the unknown parent. If the unknown parent always supplies the dominant version, every child looks dominant. If it supplies a mix, the children split into visible halves.

### Chi Square Goodness of Fit

The **chi square goodness of fit** test asks whether observed progeny counts are close enough to expected counts to be explained by chance. The **null hypothesis** is that the data follow the expected ratio; the test statistic is

$\chi^2 = \sum \frac{(O-E)^2}{E}$

with O the observed count and E the expected count for each class. The **degrees of freedom** (df) equal the number of classes minus 1, and the computed value is compared with a critical value at a chosen significance level, commonly 0.05; for df = 1 the critical chi square is 3.84. Below the critical value the deviation is not significant; above it, the deviation exceeds what chance explains. The test never proves a ratio correct; it only reports consistency.

> **Common Mistake:** Chi square compares observed counts with expected counts, never observed with observed. Substituting the observed value for E makes each class appear to fit perfectly and destroys the test, because the expected count must come from the ratio being tested. Use the expected count in the denominator and include every class that was counted.

#### ELI-10
Suppose a candy bag promises 3 yellow candies for every 1 green candy. A bag is opened, the colors are counted, and the question is whether the counts are close enough to the promise to just be luck. Chi square is the ruler for that question, measuring how far each color is from the promise and combining the distances. A small ruler reading means the bag matches the promise, and a large one means something else is going on.

### Introductory Pedigree Reasoning

A **pedigree** is a family tree using standard symbols: squares for males, circles for females, filled symbols for affected individuals, horizontal lines for matings, and vertical lines from parents to offspring, with sibs ordered left to right by birth. The task is to find the **mode of inheritance** that best explains the pattern. An affected child of two unaffected parents rules out simple dominance and points to **autosomal recessive** inheritance with both parents **obligate heterozygotes** (carriers). Affected individuals in every generation, each with an affected parent, point to **autosomal dominant** inheritance, the pattern of achondroplasia (*FGFR3*, 4p16.3, autosomal dominant, activating mutation).

Among the unaffected children of two obligate carriers, *CC* and *Cc* occur in a 1:2 (sums to 3) ratio, so each unaffected sib has a 2/3 carrier risk. The two pedigrees below show the canonical patterns.

```text
PEDIGREE: Two unaffected parents with an affected daughter
Generation I: I-1 unaffected male x I-2 unaffected female
Generation II: II-1 affected female, II-2 unaffected male, II-3 unaffected female
Key inference: an affected child from two unaffected parents rules out simple dominance
Most consistent mode: autosomal recessive
Carrier implication: both parents are obligate heterozygotes, unaffected sibs carry a 2/3 carrier risk
```

```text
PEDIGREE: Autosomal dominant disorder appearing in every generation
Generation I: I-1 unaffected male x I-2 affected female
Generation II: II-1 affected male, II-2 unaffected female
Generation III: III-1 affected female, III-2 unaffected male
Key inference: every affected individual has an affected parent and both sexes are affected
Most consistent mode: autosomal dominant
```

#### ELI-10
A pedigree is a detective's case file about a family, with squares for boys, circles for girls, and filled marks for people with the trait. The detective reads the file backward and asks what must be true about the hidden copies of the trait for the pattern to make sense. If two healthy parents produced an affected child, the trait must have been hiding in both parents all along. If every affected person has an affected parent, the trait shows itself whenever it is present.

### Worked Example 1

**Problem:** Two parents are both carriers of a recessive allele at the *CFTR* locus (*Cc* x *Cc*) and already have two unaffected children. What is the probability that their third child is affected (*cc*)?

**Given:** Each pregnancy draws new gametes independently; the probability that the child receives c from the mother is 1/2, and from the father is 1/2.

**Plan:** Apply the product rule to form *cc*, then note that previous children do not change the gamete probabilities for the next child.

**Solution:** P(*cc*) = 1/2 x 1/2 = 1/4. Earlier children were outcomes of earlier independent draws, so the probability for the third child remains 1/4.

**Answer:** P(third child affected) = 1/4.

### Worked Example 2

**Problem:** A monohybrid F2 experiment for seed color produced 6,022 yellow and 2,001 green seeds. Do these counts fit the expected 3:1 (sums to 4) ratio?

**Given:** Total progeny = 6,022 + 2,001 = 8,023. Expected yellow = 3/4 x 8,023 = 6,017.25. Expected green = 1/4 x 8,023 = 2,005.75. Degrees of freedom = 2 - 1 = 1; the critical chi square at the 0.05 level for df = 1 is 3.84.

**Plan:** Compute chi square as the sum over classes of (O - E) squared divided by E, then compare the result with the critical value 3.84.

**Solution:** Yellow class: (6,022 - 6,017.25) squared / 6,017.25 = (4.75 x 4.75) / 6,017.25 = 22.5625 / 6,017.25 = 0.00375. Green class: (2,001 - 2,005.75) squared / 2,005.75 = 22.5625 / 2,005.75 = 0.01125. Chi square = 0.00375 + 0.01125 = 0.015. Since 0.015 is far below the critical value 3.84, the deviation is not significant.

**Answer:** chi square = 0.015, so the data fit the 3:1 (sums to 4) expectation.

> **High-Yield:**
> - Every monohybrid F2 gives a 3:1 phenotypic ratio (sums to 4) and a 1:2:1 genotypic ratio (sums to 4); every dihybrid F2 gives 9:3:3:1 (sums to 16).
> - Multiply locus by locus for independent events: the probability of the double dominant class is 3/4 x 3/4 = 9/16.
> - A test cross with a homozygous recessive parent gives a 1:1 (sums to 2) ratio when the tested parent is heterozygous and all dominant offspring when it is homozygous.
> - Chi square uses expected counts in the denominator and df = number of classes minus 1; reject the null only when the computed value exceeds the critical value.
> - In pedigree reasoning, an affected child from two unaffected parents is the signature of autosomal recessive inheritance.

### Quick Review

- Mendel's experimental design: true breeding lines, discrete traits, counting all progeny, one trait at a time.
- The law of segregation explains monohybrid ratios; the F2 phenotypic ratio is 3:1 (sums to 4) and the genotypic ratio is 1:2:1 (sums to 4).
- The law of independent assortment explains dihybrid ratios; the F2 phenotypic ratio is 9:3:3:1 (sums to 16).
- Punnett squares and forked lines are equivalent, and the forked line handles three or more loci without oversized grids.
- The product rule handles independent events that must both happen; the sum rule handles mutually exclusive alternatives.
- A test cross with a homozygous recessive tester distinguishes *CC* from *Cc* through a 1:1 (sums to 2) outcome.
- Chi square compares observed counts with expected counts using df = number of classes minus 1 and a critical value.
- Pedigree reasoning: unaffected parents with an affected child indicate autosomal recessive inheritance with obligate carrier parents.

## Key terms

Key terms are emphasized and defined within the main notes.

## Important formulas or processes

See the formulas, procedures, and process blocks in the main notes where applicable.

## Common mistakes

See the labeled common-mistake callouts in the main notes where present.

## Review points

Use the quick-review or recap section in the main notes.

## Sources

Source citations from the original material are preserved in the main notes when supplied. The local-file provenance record is listed in the front matter.
