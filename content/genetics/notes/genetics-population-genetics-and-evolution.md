---
id: genetics-population-genetics-and-evolution
title: "Population Genetics And Evolution"
slug: population-genetics-and-evolution
subject: genetics
subjectName: "Genetics"
contentType: note
lesson: population-genetics-and-evolution
lessonNumber: 15
description: "Study notes covering Population Genetics And Evolution." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - population
  - genetics
  - evolution
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-de3f03a41442c3cf"
lastReviewed:
version: 1.0.0
---

# Population Genetics And Evolution

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

Population genetics is the study of **allele frequency** and **genotype frequency** and the forces that change them over generations. The **Hardy Weinberg equilibrium** is the null model of the field: a population whose genotype frequencies are stable because no evolutionary force acts. Mutation, migration, genetic drift, and natural selection move real populations away from equilibrium.

### Allele and Genotype Frequency Calculation

An allele frequency is the proportion of all gene copies at a locus that are a particular allele, and a genotype frequency is the proportion of individuals with a particular genotype. With two alleles A and a there are three genotypes, *AA*, *Aa*, and *aa*; the genotype frequencies sum to 1 and p + q = 1. Given counts in a sample of N diploid individuals, the frequency of A is $p = \frac{2N_{AA} + N_{Aa}}{2N}$. For example, 49 *AA*, 42 *Aa*, and 9 *aa* among 100 individuals gives p = (2 x 49 + 42)/200 = 0.7 and q = (2 x 9 + 42)/200 = 0.3.

#### ELI-10

Think of a big bag of colored marbles, with red and blue only. Red marbles stand for one allele and blue marbles for the other allele. The allele frequency is simply the share of the bag that is red.

### Hardy Weinberg Equilibrium Assumptions Equation and Applications

The Hardy Weinberg equilibrium describes the genotype frequencies produced when allele frequencies are constant: $p + q = 1$ and $p^2 + 2pq + q^2 = 1$, where p squared is the frequency of *AA*, 2pq the frequency of *Aa*, and q squared the frequency of *aa*. One generation of random mating produces these frequencies, because gametes carrying A and a form at frequencies p and q and combine at random. Five assumptions must hold, each being the absence of an evolutionary force:

| Hardy Weinberg assumption | What it means | Force that violates it |
| --- | --- | --- |
| No mutation | Alleles do not change into new forms | Mutation introduces new alleles |
| Random mating | All pairs mate with equal probability | Nonrandom mating and inbreeding |
| No natural selection | All genotypes survive and reproduce equally | Selection favors some genotypes |
| Very large population | Allele frequencies change only deterministically | Genetic drift in small populations |
| No migration | No individuals or gametes enter or leave | Gene flow between populations |

The equilibrium is a null model, so deviations from it reveal evolutionary forces. Its best known application is **carrier frequency** estimation: for an autosomal recessive disorder, affected individuals are *aa*, so the recessive phenotype frequency equals q squared and the carrier frequency is 2pq. The classic textbook example is cystic fibrosis, an autosomal recessive disorder of the *CFTR* gene on 7q31.2.

```text
CROSS: Hardy Weinberg genotype frequencies from allele frequencies
Parents: allele pool with p = 0.7 for A and q = 0.3 for a
Assumptions: random mating, very large population, no mutation migration or selection, discrete generations
Gametes per parent: A gametes at frequency 0.7, a gametes at frequency 0.3
Genotypic outcome per locus: 0.49:0.42:0.09 (AA, Aa, aa; sums to 1.00)
Expected phenotypic ratio: 49:42:9 (sums to 100)
Probability requested: P(AA) = 0.7 x 0.7 = 0.49
```

> **Common Mistake:** The recessive phenotype frequency is q squared, not q, and the carrier frequency is 2pq, not q squared. Plugging the phenotype frequency in as q, or reporting q squared as the carrier frequency, is wrong by orders of magnitude. Take the square root to get q, then compute 2pq.

#### ELI-10

Imagine a huge pool with two kinds of letters floating in it, A and a. If nothing favors one letter over the other, the mix of letters stays the same forever. A formula predicts how many AA pairs, Aa pairs, and aa pairs you should find. It works only when the pool is so big that chance barely matters.

### Worked Example Carrier Frequency from Recessive Phenotype Frequency

**Problem:** In a population in Hardy Weinberg equilibrium, the frequency of the recessive phenotype is 1/2500. What is the carrier frequency?

**Given:** q squared = 1/2500 = 0.0004.

**Plan:** Take the square root to get q, then compute 2pq with p = 1 - q.

**Solution:** q = sqrt(0.0004) = 0.02. p = 1 - 0.02 = 0.98. Carrier frequency = 2pq = 2 x 0.98 x 0.02 = 0.0392, which is about 1/25.

**Answer:** 2pq = 0.0392, about 1 in 25 carriers.

### Chi Square Testing of Equilibrium

The **chi square** goodness of fit test asks whether observed genotype counts fit Hardy Weinberg expectations. The statistic is $\chi^2 = \sum \frac{(O-E)^2}{E}$, where O is each observed count and E each expected count, summed over all genotype classes. Expected counts are N times the equilibrium genotype frequencies, and degrees of freedom equal the number of classes minus 1, so df = 2 for a two allele locus. If the computed value exceeds the critical value at the chosen significance level, the population deviates from equilibrium. The test uses counts, never proportions.

#### ELI-10

Suppose you guess that a candy jar holds equal red and blue candies. When you pour it out, the counts are a little different from your guess. Chi square is a score that tells you whether that difference is small enough to be luck or big enough to mean your guess was wrong. A small score means the counts fit your prediction.

### Worked Example Chi Square Test of Equilibrium

**Problem:** In a sample of 200 individuals, the genotype counts are 120 *AA*, 60 *Aa*, and 20 *aa*. Use the chi square goodness of fit test with alpha = 0.05 to test whether the population is in Hardy Weinberg equilibrium.

**Given:** N = 200; observed counts 120, 60, and 20.

**Plan:** Estimate p and q from the counts, compute expected counts as N times the equilibrium genotype frequencies, then chi square with df = 3 - 1 = 2, compared with the critical value 5.99.

**Solution:** p = (2 x 120 + 60)/(2 x 200) = 300/400 = 0.75, so q = 0.25. Expected AA = 200 x 0.75 x 0.75 = 112.5; expected Aa = 200 x 2 x 0.75 x 0.25 = 75; expected aa = 200 x 0.25 x 0.25 = 12.5. Chi square = (120 - 112.5) squared / 112.5 + (60 - 75) squared / 75 + (20 - 12.5) squared / 12.5 = 56.25/112.5 + 225/75 + 56.25/12.5 = 0.5 + 3 + 4.5 = 8.0. The critical value at df = 2 and alpha = 0.05 is 5.99, and 8.0 exceeds it.

**Answer:** chi square = 8.0, which exceeds 5.99, so Hardy Weinberg equilibrium is rejected.

### Mutation as an Evolutionary Force

**Mutation** is the only force that creates new alleles; every other force only changes the frequency of existing alleles. Mutation rates are very low, on the order of one in a million or less per base pair per generation, so mutation alone changes allele frequencies extremely slowly and is the weakest of the four forces. Most new mutations are neutral or harmful. When a harmful recessive allele is removed from homozygotes and replenished by mutation at the same rate, the population reaches **mutation selection balance**.

#### ELI-10

Copying a long sentence by hand, you sometimes make a typo. Most typos change nothing important, but every typo is a brand new version of the sentence. Mutation is the typo step that happens when DNA is copied. New alleles appear this way, slowly and one at a time.

### Migration and Gene Flow

**Migration**, the movement of individuals or gametes between populations, produces **gene flow**, the transfer of alleles between populations. If a fraction m of a population is replaced each generation by immigrants, its allele frequency moves toward theirs. Gene flow can introduce new alleles, counter drift in small populations, and oppose the divergence that leads to speciation. Most modern human genomes are products of **admixture**, the mixing of alleles from previously separated populations.

#### ELI-10

Two soccer teams with different jerseys sometimes trade players. After the trade, both teams have players in both jersey colors. Migration between populations does the same thing with alleles. It makes the two populations more alike over time.

### Genetic Drift and Effective Population Size

**Genetic drift** is the random change in allele frequency that occurs because the alleles reaching the next generation are a random sample of the parental alleles. The smaller the population, the larger the sampling error, so drift is strong in small populations and negligible in very large ones. Drift makes allele frequencies wander until one allele fixes at random, and **heterozygosity** declines generation by generation. The **effective population size** N_e is the size of an idealized population that loses variation at the same rate as the real population; it is usually smaller than the census size.

> **Common Mistake:** Applying Hardy Weinberg to a small or inbred population. Drift changes allele frequencies by chance and inbreeding reduces heterozygote counts, so observed genotype frequencies will not match p squared, 2pq, and q squared. Check population size and mating pattern before using the equation.

#### ELI-10

Flip a coin ten times and you might get seven heads, which is far from half. Flip it one thousand times and you will land very close to half heads. Genetic drift is the same coin flip luck in which alleles get passed on to the next generation. Fewer flips means bigger luck, and smaller populations mean bigger drift.

### Founder Effect and Bottleneck

A **founder effect** occurs when a new population is established by a small number of individuals that carry only a subset of the source population's alleles. The new population's allele frequencies are set by that small sample, so rare alleles can become common or vanish regardless of fitness. A **bottleneck** is the same phenomenon when a population is drastically reduced and then recovers; the survivors' alleles determine the genetic makeup of the recovery. Both reduce variation and strengthen subsequent drift.

#### ELI-10

A few seeds blown into a new field grow into the entire garden there. The garden starts with only the versions those few seeds carried. The founder effect is that small starting set shaping everything that comes after. A bottleneck is like a bad winter that kills most plants and leaves the same few survivors to regrow the field.

### Natural Selection Fitness and Selection Coefficients

**Natural selection** changes allele frequencies through differential survival and reproduction. **Fitness** (w) is the relative contribution of a genotype to the next generation, scaled so the most fit genotype has w = 1; the **selection coefficient** s measures the fitness reduction relative to the best genotype, s = 1 - w. The table shows a hypothetical locus where *AA* is best, *Aa* nearly as good, and *aa* strongly selected against:

| Genotype | Fitness w | Selection coefficient s = 1 - w |
| --- | --- | --- |
| AA | 1.00 | 0.00 |
| Aa | 0.90 | 0.10 |
| aa | 0.60 | 0.40 |

In sickle cell disease, an autosomal recessive disorder of *HBB* on 11p15.4 with the Glu6Val change in beta globin, selection removes homozygotes while the allele survives mostly in unaffected heterozygotes. A dominant allele such as the activating *FGFR3* mutation of achondroplasia on 4p16.3 is removed far more efficiently, because heterozygotes are affected directly. **Heterozygote advantage**, in which the heterozygote has the highest fitness of all three genotypes, can maintain a harmful allele at a stable high frequency, a situation known as **balancing selection**.

#### ELI-10

Imagine a race in which runners wearing one kind of shoe finish faster. Faster runners leave more children, so over many generations their shoe style spreads through the group. Fitness is the running speed of an allele. Selection is the race itself.

### Nonrandom Mating and Inbreeding Coefficient

**Nonrandom mating** occurs when individuals choose mates based on genotype, phenotype, or relatedness rather than at random. **Inbreeding**, mating between relatives, does not change allele frequencies but does change genotype frequencies: it increases homozygosity and decreases heterozygosity relative to Hardy Weinberg expectations. The **inbreeding coefficient** F quantifies the deficit, $F = 1 - \frac{H_{obs}}{H_{exp}}$, where H_obs is the observed heterozygote frequency and H_exp = 2pq is expected under random mating. F is 0 under random mating and approaches 1 as heterozygotes disappear.

```text
CROSS: Expected genotype frequencies under random mating as the inbreeding baseline
Parents: allele pool with p = 0.9 for A and q = 0.1 for a
Assumptions: random mating baseline for expected frequencies; observed heterozygosity reduced by inbreeding
Gametes per parent: A gametes at frequency 0.9, a gametes at frequency 0.1
Genotypic outcome per locus: 0.81:0.18:0.01 (AA, Aa, aa; sums to 1.00)
Expected phenotypic ratio: 81:18:1 (sums to 100)
Probability requested: P(Aa expected) = 2 x 0.9 x 0.1 = 0.18
```

#### ELI-10

If you always grab two socks from the same drawer, you end up with matching pairs. Mating between relatives is similar, because the two partners often carry the same alleles. Inbreeding makes more matching pairs of alleles and fewer mixed pairs. The inbreeding coefficient measures how many matching pairs you see compared with random pairing.

### Measuring Variation with Heterozygosity and SNPs

Heterozygosity is the fraction of individuals heterozygous at a locus, usually averaged over many loci to summarize the variation a population carries. Under random mating the expected heterozygosity at a two allele locus is 2pq. **Single nucleotide polymorphisms** (SNPs) are base pair positions where two alleles exist at appreciable frequency; they are abundant and cheap to genotype. Populations that expanded from a small founding group typically show lower average heterozygosity than their source, so SNP surveys measure both individual variation and historical population size.

```text
CROSS: Expected heterozygosity at a SNP with two alleles
Parents: allele pool with p = 0.8 for A and q = 0.2 for a
Assumptions: random mating, very large population, two alleles at one SNP locus
Gametes per parent: A gametes at frequency 0.8, a gametes at frequency 0.2
Genotypic outcome per locus: 0.64:0.32:0.04 (AA, Aa, aa; sums to 1.00)
Expected phenotypic ratio: 64:32:4 (sums to 100)
Probability requested: P(Aa) = 2 x 0.8 x 0.2 = 0.32
```

#### ELI-10

Your two copies of DNA can hold different letters at the same spot, like an A on one copy and a G on the other. A spot like that is called heterozygous. Heterozygosity is how common such mixed spots are across the whole genome. More mixed spots mean a more varied population.

### Neutral Theory and the Molecular Clock

The **neutral theory of molecular evolution** holds that most DNA sequence differences within and between species are selectively neutral, meaning they do not affect fitness, and their fate is set by drift rather than selection. It follows that most new mutations are neutral or harmful, so differences accumulate at essentially the mutation rate; if that rate is roughly constant, differences accumulate at a constant pace, a property called the **molecular clock**. The clock runs faster where changes are more often neutral, so positions that do not alter the encoded amino acid diverge faster than those that do. Sequence differences between two lineages thus estimate how long ago they shared a common ancestor.

#### ELI-10

Some changes to a machine do not matter to how it works, like a different color of paint. Neutral changes are the paint colors of DNA. They pile up at a steady pace, like sand falling through an hourglass. That steady pace is the molecular clock.

### Speciation Genetics

**Speciation** is the splitting of one lineage into two species: two populations accumulate allele frequency differences until they can no longer exchange genes. **Reproductive isolation** is the set of genetic, ecological, and behavioral barriers that stops gene flow, including differences in mating behavior or timing, geographic separation, and hybrid incompatibility. Speciation does not require divergence across the whole genome: only the loci that contribute to isolation must differ.

#### ELI-10

Two groups of birds live on separate islands and never meet. Over a long time their songs change in different ways, until they no longer recognize each other. When groups can no longer swap alleles, they become separate species. Speciation is the story of how that split happens.

### Human Population History

Human population history is written in allele frequencies. Modern humans expanded out of Africa in waves of migration, and each founding population carried a subset of ancestral variation, which is why populations outside Africa show lower average heterozygosity. Founder effects left detectable signatures in the distribution of disease alleles: the deltaF508 mutation of *CFTR*, the most common cause of cystic fibrosis, is unusually frequent in European populations, a pattern consistent with a founder effect.

#### ELI-10

A family photo album shows where your grandparents and great grandparents lived and moved. Human populations keep a similar record inside their DNA. By comparing alleles around the world, scientists can trace old migrations and meetings between groups.

> **High-Yield:**
> - The recessive phenotype frequency is q squared; take the square root to get q, then compute 2pq.
> - Hardy Weinberg requires no mutation, random mating, no selection, a very large population, and no migration.
> - Chi square expected counts are N times the equilibrium genotype frequencies, and df equals the number of classes minus 1.
> - Drift, founder effects, and bottlenecks reduce variation and matter most when populations are small.
> - The inbreeding coefficient F = 1 - H_obs/H_exp measures the heterozygote deficit from nonrandom mating.

### Quick Review

- Allele frequency is counted in allele copies: p = (2N_AA + N_Aa)/(2N), with p + q = 1.
- Under Hardy Weinberg equilibrium, genotype frequencies are p squared, 2pq, and q squared, and 2pq is the carrier frequency for a recessive disorder.
- The five assumptions are no mutation, random mating, no selection, a very large population, and no migration.
- Chi square compares observed and expected counts, with df = number of classes minus 1.
- Mutation creates variation, migration mixes it, drift removes it randomly, and selection changes frequencies by fitness differences.
- The inbreeding coefficient F = 1 - H_obs/H_exp; founder effects and bottlenecks lower heterozygosity.
- The molecular clock dates divergences from sequence differences.

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
