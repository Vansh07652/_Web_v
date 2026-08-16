---
id: genetics-linkage-and-genetic-mapping
title: "Linkage And Genetic Mapping"
slug: linkage-and-genetic-mapping
subject: genetics
subjectName: "Genetics"
contentType: note
lesson: linkage-and-genetic-mapping
lessonNumber: 6
description: "Study notes covering Linkage And Genetic Mapping." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - linkage
  - genetic
  - mapping
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-def8b1a9304be308"
lastReviewed:
version: 1.0.0
---

# Linkage And Genetic Mapping

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

When two genes share a chromosome, they travel into gametes together more often than chance allows, and the gamete classes deviate from the ratios predicted by independent assortment. This chapter converts that deviation into a map: recombination frequency, coupling and repulsion, two point and three point testcrosses, and the statistics that detect linkage in human families. It closes with genetic versus physical maps and the genome wide association study.

### Linkage vs Independent Assortment

**Independent assortment** applies to genes on different chromosomes: homologs line up independently at the metaphase plate, so alleles at unlinked loci combine freely into gametes and a dihybrid cross gives the 9:3:3:1 ratio (sums to 16). **Linkage** is the physical consequence of sharing a chromosome: alleles on the same homolog move as a block unless **crossing over** in prophase I exchanges segments between homologs, producing an excess of parental classes and a deficit of recombinant classes. Morgan's group found the first deviations from independent assortment in *Drosophila melanogaster*, whose short generation time and giant chromosomes made it the founding organism of **linkage mapping**. Any two loci on one chromosome are linked; how strongly the classes deviate depends on how far apart the loci are.

#### ELI-10

Picture each chromosome as a necklace and each gene as a bead on it. Beads on the same necklace usually travel together, so they are linked. Beads on different necklaces shuffle freely, like marbles poured from two separate jars. Crossing over swaps beads between two necklaces, moving some onto the other string.

### Recombination Frequency and Its 50 Percent Ceiling

A **recombination frequency (RF)** is the fraction of all progeny carrying a recombinant combination of alleles: $RF = \frac{recombinants}{total\ progeny}$. Multiplying by 100 converts the fraction into **map units (mu)**, also called **centimorgans (cM)**; an RF of 0.05 means 5 map units, or 5 cM. RF is capped at 50 percent: a crossover exchanges only two of the four chromatids of a bivalent, so even with a crossover in every meiosis, at most half of the gametes are recombinant for the two loci. Unlinked loci also show 50 percent recombination, so an RF near 50 percent is ambiguous: the genes could be unlinked, or linked but very far apart.

#### ELI-10

Imagine four strands of rope side by side with one swap between the middle two. The swap turns two strands into mixed colors, so exactly half of the bundle changes. Even with a swap every round, the changed half never grows beyond half, because each swap touches only two of the four strands. That is why the recombination number stops at 50 percent.

> **Common Mistake:** Expecting the recombination frequency to climb above 50 percent as crossovers become more frequent. Each crossover involves only two of the four chromatids, so the recombinant fraction can approach but never exceed 50 percent. A value above 50 percent signals an arithmetic error, and a value near 50 percent cannot distinguish unlinked genes from very distant linked genes.

### Coupling and Repulsion

For a pair of linked loci, the arrangement of alleles on the homologs is the **linkage phase**. In the **coupling (cis)** configuration the two wild type alleles share a homolog, written *AB/ab*; in the **repulsion (trans)** configuration each homolog carries one wild type and one mutant allele, written *Ab/aB*. In a testcross of *AB/ab* the parentals are *AB* and *ab* and the recombinants are *Ab* and *aB*; in repulsion the labels swap. Either way the recombination frequency is the same, because crossover probability does not depend on which alleles share a homolog.

#### ELI-10

A queen has two red gems and two blue gems to arrange into two pairs. Coupling puts both red gems in one pair and both blue gems in the other; repulsion pairs each red gem with a blue gem. Swapping partners once reshuffles the pairs the same way in either arrangement, so both give the same mixing.

### Two Point Crosses

A **two point cross** measures recombination between two loci, usually with a **testcross**: a double heterozygote is crossed to a double recessive and the progeny are counted. With unlinked genes the four classes appear in a 1:1:1:1 ratio (sums to 4); with linked genes the parental classes outnumber the recombinant classes, and the deficit from 50 percent measures the distance. For example, 1000 testcross progeny with 190 recombinants give RF = 190/1000 = 0.19, or 19 map units. Two point crosses cannot order three or more loci, and they underestimate long distances, because a double crossover between the markers is scored as parental.

#### ELI-10

A two point cross is like timing a runner on a single lap between two checkpoints. The stopwatch tells how much the runner shuffled between those two points, but nothing about other checkpoints on the track. A runner who laps the circuit twice looks like a slow runner who never moved, so the double lap hides real distance.

### Three Point Testcross Gene Order Determination and Map Distance

A **three point testcross** uses a triply heterozygous individual, for example *abc/+++* in coupling, crossed to the triple recessive *abc/abc*. The eight progeny classes fall into four pairs: two parental, two single crossover in each region, and two **double crossover** classes; the largest pair is the parentals and the smallest the double crossovers. **Gene order** is read by comparing the parental class with the double crossover class: the gene whose position relative to its neighbors switches between the two arrangements is the middle gene. Each region's recombination frequency includes its single crossovers plus the double crossovers, because a double crossover is a crossover in both regions.

```text
MAPPING: Three point testcross
Total progeny: 1000
Parental classes: 460 + 450 = 910
Single crossover region 1: 20 + 18 = 38
Single crossover region 2: 26 + 22 = 48
Double crossover classes: 2 + 2 = 4
Gene order: compare parental to double crossover, the gene that switches is in the middle
RF region 1 = (38 + 4) / 1000 = 0.042 = 4.2 map units
RF region 2 = (48 + 4) / 1000 = 0.052 = 5.2 map units
Observed double crossovers = 4, Expected = 0.042 x 0.052 x 1000 = 2.18
Coefficient of coincidence = 4 / 2.18 = 1.83
Interference = 1 - 1.83 = -0.83
Class total check: 910 + 38 + 48 + 4 = 1000
```

A two point cross between the flanking genes would score the double crossovers as parental, giving RF = (38 + 48)/1000 = 0.086, or 8.6 percent, versus the summed distance of 9.4 map units.

> **Common Mistake:** Reading gene order from the largest class instead of comparing the parental class to the double crossover class. The parental class only shows the starting arrangement; the gene that switches position between the parental and double crossover classes is the middle gene. When computing the two region distances, add the double crossover classes into both regions, because a double crossover is one crossover in region 1 and one in region 2.

#### ELI-10

Think of three houses on a street and the lists that record who lives where. The two most common lists show the usual arrangement; the rarest lists, which appear only when two separate trades happen, show the middle house swapping places with one end. The house whose position flips in those rare lists is the one in the middle.

### Double Crossovers

A **double crossover (DCO)** is a pair of crossover events in one meiosis, one in each interval flanking the middle gene. Only the middle gene changes partners, so the two DCO classes are the smallest pair in a three point cross; their rarity is predictable, since the chance of two independent crossovers is the product of the two single crossover probabilities. Because a double crossover swaps the flanking loci twice, the flanking genes return to the parental arrangement, which is why two point crosses cannot see them. The observed DCO count feeds the next section.

#### ELI-10

Double crossover is like cutting and reconnecting a ribbon twice in the same round. The second cut can undo the first, leaving the ribbon looking untouched. These double cuts are the rarest events, but they hide distance, like a road with a loop that makes the straight line look short.

### Interference and Coefficient of Coincidence

The **coefficient of coincidence (CoC)** compares observed double crossovers with the number expected if the two regions crossed over independently: $CoC = \frac{observed\ DCO}{expected\ DCO}$, where the expectation is the product of the two region recombination fractions times the total progeny. **Interference** is the derived measure $I = 1 - CoC$. When a crossover in one region discourages a second nearby, observed DCO falls below expectation, CoC is less than 1, and interference is positive; classic *Drosophila* crosses typically show this pattern. When crossovers encourage one another, CoC exceeds 1 and interference is negative, as in the canonical example above, where CoC = 4/2.18 = 1.83 and I = 1 - 1.83 = -0.83. Complete interference, CoC = 0 and I = 1, means no double crossovers at all.

#### ELI-10

A gardener prunes two hedges along one row in a single afternoon. After pruning the first hedge, the gardener is often less energetic about the second one, so two prunes on the same day happen less often than chance predicts. The coefficient of coincidence measures how often the pair actually happens compared with chance. Interference is the flip side of that number, showing whether one prune discouraged or encouraged the other.

### Genetic vs Physical Maps

A **genetic map** orders loci by recombination frequency and measures distance in map units; a **physical map** orders loci by position in the DNA sequence and measures distance in base pairs. The scales are related but not identical: recombination is not uniform along a chromosome, so a centimorgan spans very different numbers of base pairs in different regions, on average roughly one million in humans. Cold spots such as the centromere region stretch the genetic map; hot spots compress it, and recombination rates can differ between the sexes. Because the conversion is unstable, the maps are complementary: sequence gives absolute scale, and recombination gives the history of crossing over.

| Feature | Genetic map | Physical map |
| --- | --- | --- |
| Basis | Recombination frequency | DNA sequence |
| Unit | map unit, centimorgan | base pair |
| How it is built | Counting progeny classes in crosses | Sequencing and aligning DNA |
| Resolution | Limited by crossover distribution | Single base pair |
| Uniformity | Hot spots and cold spots | Uniform along the molecule |

#### ELI-10

A genetic map is like a road trip measured in hours, while a physical map is the same trip measured in kilometers. The two usually track each other, but a traffic jam packs many hours into a short road, and an empty freeway covers many kilometers in few hours. Recombination hot spots and cold spots do exactly that to the genetic map.

### LOD Score Reasoning

Human families are small and matings cannot be designed, so human linkage detection relies on statistics. The **LOD score** (log of the odds) compares two hypotheses for a pedigree: that two loci recombine at a fraction theta, or that they assort independently (theta = 0.5). The score is $LOD = \log_{10}\left(\frac{L_{linkage}}{L_{independent}}\right)$, and its reasoning rests on three properties. LOD scores from different families add, because logarithms turn multiplied likelihoods into sums, so weak evidence from many families accumulates. A LOD of 3, meaning the data are 1000 times more likely under linkage, is the conventional threshold for declaring linkage; a LOD of -2 excludes it. The theta at the peak of a LOD curve estimates the recombination fraction. An early landmark was the demonstration that hemophilia A and red green color blindness recombine less than 50 percent of the time; the reference tables explain why, since *F8* (Xq28, factor VIII deficiency) and *OPN1LW* and *OPN1MW* (Xq28, opsin defects) share a chromosome band.

#### ELI-10

A LOD score is like a courtroom scale that weighs two stories about the same evidence. One story says the two genes travel together, and the other says they shuffle freely. Every family tips the scale a little, and the scale reads the logarithm of the odds. A reading of 3 means the traveling story is one thousand times more likely.

### Human Linkage Analysis and GWAS Basics

**Human linkage analysis** maps disease genes by following recombination between a trait and polymorphic markers in pedigrees, and it works best for rare disorders with large effects: it classically assigned hemophilia A to *F8* and the C282Y variant of *HFE* to hemochromatosis (autosomal recessive, iron overload, liver damage). The modern counterpart, the **genome wide association study (GWAS)**, scans millions of single nucleotide polymorphism (SNP) markers in unrelated cases and controls and asks whether any allele is more common in one group. Results appear on a **Manhattan plot**, and a variant passes **genome wide significance** when its p value falls below about 10 to the minus 8, far below 0.05, because millions of markers are tested at once. Two cautions apply: **population stratification** can create false associations when cases and controls differ in ancestry, and **linkage disequilibrium** means the associated SNP is often a neighbor of the causal variant rather than the causal variant itself. Replicable associations include *TPMT* variation and thiopurine drug metabolism, where thiopurine methyltransferase clears thiopurine drugs from the body.

| Feature | Linkage analysis | GWAS |
| --- | --- | --- |
| Subjects | Families and pedigrees | Unrelated cases and controls |
| Signal | Recombination events | Allele frequency differences |
| Markers | Microsatellites, SNPs | Millions of SNP markers |
| Best for | Rare variants with large effect | Common variants with modest effect |
| Test statistic | LOD score | p value per marker |

#### ELI-10

Linkage analysis is like finding a lost library book by watching which shelf it stays near inside one family. A GWAS is like surveying thousands of readers to find a clue that appears more often in the people who checked out the book. One follows families one at a time, and the other compares big groups at once. When both methods point to the same shelf, the neighborhood is probably right.

### Worked Example Three Point Testcross Gene Order

**Problem:** A triply heterozygous fly of genotype *abc/+++* is testcrossed to *abc/abc*, and 1000 progeny are classified into eight classes. Determine the gene order, the two region distances, and the total map distance.

**Given:** Progeny classes: *a b c* 420, *+ + +* 420, *a + +* 68, *+ b c* 60, *a b +* 16, *+ + c* 14, *a + c* 1, *+ b +* 1. Total 1000.

**Plan:** Identify the parentals as the largest pair and the double crossovers as the smallest. Compare the two arrangements to find which gene changes position, then compute each region's recombination frequency with the double crossovers added to both regions.

**Solution:** The parental classes are *a b c* and *+ + +* and the double crossover classes are *a + c* and *+ b +*. In the parentals a sits next to b and b next to c; in the double crossovers a sits next to c, so b is the middle gene and the order is a - b - c. Region 1 (a to b): RF = (68 + 60 + 1 + 1)/1000 = 130/1000 = 0.130 = 13.0 map units. Region 2 (b to c): RF = (16 + 14 + 1 + 1)/1000 = 32/1000 = 0.032 = 3.2 map units. Total map distance = 13.0 + 3.2 = 16.2 map units.

```text
MAPPING: Three point testcross with the middle gene identified
Total progeny: 1000
Parental classes: 420 + 420 = 840
Single crossover region 1: 68 + 60 = 128
Single crossover region 2: 16 + 14 = 30
Double crossover classes: 1 + 1 = 2
Gene order: compare parental to double crossover, the gene that switches is in the middle
RF region 1 = (128 + 2) / 1000 = 0.130 = 13.0 map units
RF region 2 = (30 + 2) / 1000 = 0.032 = 3.2 map units
Observed double crossovers = 2, Expected = 0.130 x 0.032 x 1000 = 4.16
Coefficient of coincidence = 2 / 4.16 = 0.48
Interference = 1 - 0.48 = 0.52
Class total check: 840 + 128 + 30 + 2 = 1000
```

**Answer:** Gene order a - b - c, with 13.0 map units between a and b, 3.2 map units between b and c, and 16.2 map units total.

### Worked Example Recombination Frequency and Map Distance

**Problem:** A double heterozygote in repulsion is testcrossed to a double recessive, and 960 progeny are scored. Exactly 192 carry a recombinant combination of the two traits. What are the recombination frequency and the map distance?

**Given:** Total progeny = 960; recombinant progeny = 192.

**Plan:** Apply the recombination frequency formula $RF = \frac{recombinants}{total\ progeny}$, then multiply the fraction by 100.

**Solution:** RF = 192/960 = 0.20. Map distance = 0.20 x 100 = 20 map units, or 20 cM. At 20 percent, far below the 50 percent ceiling, the genes are linked.

**Answer:** RF = 0.20, a distance of 20 map units (20 cM).

> **High-Yield:**
> - Find the middle gene by comparing the parental class with the double crossover class, never by the largest class alone.
> - Add the double crossover classes to both region distances before computing each RF.
> - Map units equal recombination frequency times 100, and the frequency itself cannot exceed 50 percent.
> - CoC is observed double crossovers divided by expected double crossovers; interference is 1 minus CoC.
> - Two point crosses underestimate long distances; a three point cross corrects the estimate.

### Quick Review

- Linkage is shared chromosome; an RF below 50 percent is its evidence.
- RF equals recombinants divided by total progeny, and map units are RF times 100.
- Coupling (*AB/ab*) and repulsion (*Ab/aB*) swap the parental classes but not the RF.
- In a three point testcross the middle gene switches position between the parental and double crossover classes.
- Double crossovers count in both region distances, and two point crosses cannot see them.
- CoC is observed divided by expected double crossovers; interference is 1 minus CoC.
- Genetic maps and physical maps agree on order but not on scale, because recombination is not uniform.
- A LOD of 3 declares linkage, and a GWAS compares SNP frequencies between cases and controls.

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
