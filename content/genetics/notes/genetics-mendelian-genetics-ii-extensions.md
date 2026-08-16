---
id: genetics-mendelian-genetics-ii-extensions
title: "Mendelian Genetics Ii Extensions"
slug: mendelian-genetics-ii-extensions
subject: genetics
subjectName: "Genetics"
contentType: note
lesson: mendelian-genetics-ii-extensions
lessonNumber: 4
description: "Study notes covering Mendelian Genetics Ii Extensions." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - mendelian
  - genetics
  - extensions
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-c2f4c0fde8fab2ca"
lastReviewed:
version: 1.0.0
---

# Mendelian Genetics Ii Extensions

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

Classical Mendelism handles single genes with two alleles, but real traits routinely bend those rules. This chapter covers the standard extensions: intermediate and co-expressed alleles, more than two alleles at one locus, genes that mask other genes, and alleles that alter survival. Every stated ratio is checked by summing its parts; the sums in this chapter are almost always 16, and the lethal ratio sums to 3.

### Incomplete Dominance

In **incomplete dominance**, the heterozygote shows a phenotype intermediate between the two homozygotes. The classic example is flower color in snapdragons: a cross between a red-flowered plant and a white-flowered plant gives pink F1 offspring, and the F1 self cross produces red, pink, and white plants in the 1:2:1 ratio (sums to 4). The pink intermediate is a dosage effect: one functional allele makes about half as much pigment as two. The intermediate is not permanent, because crossing two pink plants recovers red and white plants, proving the alleles re-segregate cleanly.

#### ELI-10
Think of mixing one cup of red paint with one cup of white paint. The result is pink, a color halfway between the two. If you pour the pink paint into two jars and later use each jar alone, the two original colors come back. Incomplete dominance is like this, the two versions of a gene blend into a middle color, but the gene versions themselves are never destroyed.

### Codominance

In **codominance**, the heterozygote expresses both parental phenotypes at the same time instead of a blend. The **ABO blood type system** is the standard example: the *IA* and *IB* alleles are codominant, so a person with the *IAIB* genotype makes both the A sugar and the B sugar. Sickle cell trait shows the same logic: a person with one normal *HBB* allele and one sickle *HBB* allele (Glu6Val) makes both normal beta globin and sickle beta globin, so the alleles are codominant in expression even though the disease itself is autosomal recessive. A cross between an *IAi* and an *IBi* parent gives AB, A, B, and O offspring in the 1:1:1:1 ratio (sums to 4).

> **Common Mistake:** Codominance is not incomplete dominance. The heterozygote *IAIB* shows both parental phenotypes at once and types as AB, while an incomplete dominance heterozygote would be intermediate. In an *IAi* x *IBi* cross the classes are AB, A, B, and O in the 1:1:1:1 ratio (sums to 4); treating AB as a blend collapses the count to three and misidentifies the ratio.

#### ELI-10
Picture a cow with some red hairs and some white hairs all over its body. No color blends into a new color, both colors stay fully visible at the same time. That is codominance, both versions of the gene are doing their own jobs. The red hairs stay red and the white hairs stay white.

### Multiple Allele Systems and Blood Types

**Multiple alleles** means that a single locus can hold three or more alleles in a population, even though each diploid individual carries at most two. The *ABO* locus is the classic system: the *ABO* gene (9q34.2) encodes the ABO glycosyltransferase, which adds the A or B sugar to the H antigen. The three alleles are *IA* and *IB*, which are codominant, and *i*, which is recessive to both; the *i* allele adds neither sugar, giving type O. Six genotypes therefore collapse into four phenotypes.

| Genotype | Blood type phenotype |
| --- | --- |
| IAIA, IAi | A |
| IBIB, IBi | B |
| IAIB | AB |
| ii | O |

Two different genotypes can give the same phenotype, so a type O child (*ii*) can come from several parental combinations; the 1:1:1:1 ratio (sums to 4) of an *IAi* x *IBi* cross follows from the gamete classes. Multiple alleles are not unique to *ABO*: the *HBB* gene (11p15.4) carries several disease alleles, including the sickle allele (Glu6Val in beta globin) and Beta thalassemia alleles that reduce beta globin synthesis.

```text
CROSS: ABO blood type with three alleles at one locus
Parents: IAi x IBi
Assumptions: one locus with three alleles, IA and IB codominant, i recessive, equal viability
Gametes per parent: IA and i in 1:1, IB and i in 1:1
Genotypic outcome per locus: 1:1:1:1 (IAIB, IAi, IBi, ii)
Expected phenotypic ratio: 1:1:1:1 (sums to 4)
Probability requested: P(type O) = 1/2 x 1/2 = 1/4
```

#### ELI-10
Imagine a hat with red, blue, and yellow tickets. Each player draws only two tickets, so no player holds more than two colors at once, but the hat keeps all three colors ready. Multiple alleles work the same way. The population carries many versions of a gene, and each person gets just two copies, one from each parent.

### Epistasis Recessive Dominant and Duplicate

**Epistasis** is an interaction in which one gene masks the phenotypic effect of another gene at a different locus; the masking gene is epistatic to the masked gene. In **recessive epistasis**, a homozygous recessive genotype at one locus hides the other locus, so in a pigment pathway the *cc* class blocks all color regardless of the *A* locus, giving the 9:3:4 ratio (sums to 16). The color locus in such examples is often tyrosinase, the product of *TYR* (11q14.3) that makes melanin: when tyrosinase is lost, no pigment can form. In **dominant epistasis**, a single dominant allele at one locus masks the other locus, giving the 12:3:1 ratio (sums to 16). In **duplicate gene action**, either dominant allele alone produces the phenotype, so only the double homozygous recessive differs, giving the 15:1 ratio (sums to 16).

```text
CROSS: Recessive epistasis in a two gene pigment pathway
Parents: CcAa x CcAa
Assumptions: genes unlinked, complete dominance at both loci, cc blocks all pigment, equal viability
Gametes per parent: CA, Ca, cA, ca in 1:1:1:1
Genotypic outcome per locus: 1:2:1
Expected phenotypic ratio: 9:3:4 (sums to 16)
Probability requested: P(pigmented) = 3/4 x 3/4 = 9/16
```

#### ELI-10
A toy factory has a machine that makes wheels and a machine that paints the cars. If the wheel machine is broken, no car is ever finished, no matter how well the paint machine works. The broken machine hides the work of the whole factory. That is epistasis, one part of the system hiding the effect of another part.

### The Modified Dihybrid Ratios and Their Interaction Types

All of the interactions above reorganize the same sixteen-cell dihybrid grid, so the ratios keep the total of 16, except the lethal case at 3. The catalog below is the complete list to memorize, matching the Modified Ratio Catalog in REFERENCE.md.

| Interaction type | Phenotypic ratio | Sum of parts | One line description |
| --- | --- | --- | --- |
| Independent assortment, complete dominance | 9:3:3:1 | 16 | Two unlinked genes, no interaction |
| Recessive epistasis | 9:3:4 | 16 | Homozygous recessive at one gene hides the other gene |
| Complementary gene action | 9:7 | 16 | Both dominant alleles needed for the phenotype |
| Dominant epistasis | 12:3:1 | 16 | One dominant allele at one gene hides the other gene |
| Dominant suppression | 13:3 | 16 | One dominant allele suppresses the other gene |
| Duplicate gene action | 15:1 | 16 | Either dominant allele produces the phenotype |
| Duplicate genes with cumulative effect | 9:6:1 | 16 | Two dominant alleles together give an additive phenotype |
| Lethal allele | 2:1 | 3 | Homozygous lethal class is missing |

In **complementary gene action** (9:7, sums to 16), both genes must supply a dominant allele, so only *A_B_* stands apart. In **dominant suppression** (13:3, sums to 16), a dominant allele at the suppressor locus silences the other gene, leaving the rare phenotype to 3 of 16 offspring. In **duplicate genes with cumulative effect** (9:6:1, sums to 16), two dominant alleles give an additive phenotype, one gives an intermediate, and none gives the baseline. The recognition strategy is to ask which classes collapse: the double recessive merging with one other class signals recessive epistasis (9:3:4, sums to 16); only *A_B_* standing apart signals complementary gene action (9:7, sums to 16); a total of 3 signals a lethal allele (2:1, sums to 3).

```text
CROSS: Complementary gene action in flower color
Parents: AaBb x AaBb
Assumptions: genes unlinked, complete dominance at both loci, both dominant alleles needed for color, equal viability
Gametes per parent: AB, Ab, aB, ab in 1:1:1:1
Genotypic outcome per locus: 1:2:1
Expected phenotypic ratio: 9:7 (sums to 16)
Probability requested: P(colored) = 3/4 x 3/4 = 9/16
```

> **Common Mistake:** Do not memorize the number pattern without the mechanism. The 9:3:4 ratio (sums to 16) is recessive epistasis, not dominant epistasis, and the 12:3:1 ratio (sums to 16) is dominant epistasis, not duplicate gene action. Always verify that the parts add to 16 before naming the interaction.

#### ELI-10
A chocolate bar with 16 squares can be broken into piles of 9, 3, 3, and 1 squares. The same bar can also be broken into piles of 9 and 7, or 15 and 1. The bar never changes size, only the way the squares are grouped changes. Modified ratios are like this, the same 16 outcomes regrouped into different phenotype piles.

### Pleiotropy

**Pleiotropy** is the situation in which one gene affects multiple, seemingly unrelated traits. Sickle cell disease is the textbook case: a single Glu6Val change in beta globin (*HBB*, 11p15.4) produces sickled red cells, anemia, and pain crises. Marfan syndrome shows the same logic: a defect in fibrillin (*FBN1*, 15q21.1) leads to tall stature, aortic dilation, and lens dislocation from one altered structural protein. Huntington disease (*HTT*, 4p16.3, CAG repeat expansion) likewise pairs chorea with cognitive decline.

#### ELI-10
One wall switch can turn on the ceiling light, the fan, and the heater all at once. Flipping that switch changes three things with a single action. Pleiotropy is the same idea, one gene with one job that touches many parts of the body. That is why one small change in a gene can bring several different problems together.

### Penetrance and Expressivity

**Penetrance** is the proportion of individuals with a given genotype who show any phenotype at all, and **incomplete penetrance** means some carriers never express the trait. The index example is Hereditary breast and ovarian cancer syndrome, autosomal dominant with incomplete penetrance: some individuals with a disease allele never develop cancer. **Expressivity** is the degree to which the phenotype appears, and **variable expressivity** means affected individuals differ in severity. Neurofibromatosis type 1 (*NF1*, 17q11.2, autosomal dominant) illustrates the range: one affected individual may show a few cafe au lait spots while another shows many neurofibromas. Penetrance is the on-off switch, and expressivity is the dimmer. An autosomal recessive comparison is Hemochromatosis (*HFE*, 6p21.3, C282Y variant), whose features, iron overload and liver damage, require two disease alleles.

#### ELI-10
Some seeds planted in the same garden never sprout at all, even though they are the same kind of seed. That is incomplete penetrance, the genes are present but no plant shows. The seeds that do sprout grow to different heights, some tall and some short. That is variable expressivity, the same genes producing different strengths of the trait.

### Lethal Alleles and the 2 to 1 Ratio

A **lethal allele** kills the organism when present in a genotype, usually early in development. When a dominant allele is lethal in homozygotes, an *Aa* x *Aa* cross produces zygotes in the 1:2:1 genotypic split (sums to 4), but the *AA* class dies, so the surviving offspring show a 2:1 phenotypic ratio (sums to 3). A recessive lethal is the mirror image: the *aa* class dies, all surviving offspring show the dominant phenotype, and the surviving genotypic split is 1:2 (sums to 3). The 2:1 ratio (sums to 3) appears only when the dead class is excluded from the count.

```text
CROSS: Dominant allele that is lethal when homozygous
Parents: Aa x Aa
Assumptions: A dominant to a, AA lethal before birth, no other viability differences
Gametes per parent: A and a in 1:1
Genotypic outcome per locus: 1:2:1
Expected phenotypic ratio: 2:1 (sums to 3)
Probability requested: P(affected among live offspring) = (1/2)/(3/4) = 2/3
```

#### ELI-10
A bakery bakes twelve muffins and always throws away the four that come out burnt. A customer counting the muffins on the shelf sees only eight, not twelve. The burnt muffins are real, they are just never counted. A lethal allele is like the burnt muffins, one class of offspring is removed before anyone counts the rest.

### Gene Interaction

**Gene interaction** is the general term for any situation in which two or more genes jointly determine one phenotype, and epistasis is one special case. The catalog covers the spectrum: masking (epistasis), cooperation (complementary gene action), redundancy (duplicate gene action), and additivity (duplicate genes with cumulative effect). The corresponding ratios are the 9:7 ratio (sums to 16), the 15:1 ratio (sums to 16), and the 9:6:1 ratio (sums to 16). **Modifier genes** are a milder interaction, changing the strength or timing of another gene's effect without masking it. None of this requires linkage: the modified ratios all assume independent assortment.

#### ELI-10
Baking a cake needs flour and eggs, two different ingredients that both have to be there. If either one is missing, there is no cake at all. Some genes are like that, they must work together. Other recipes are more forgiving, sugar or honey both make the cake sweet, so either ingredient alone is enough.

### Environmental and Temperature Sensitive Effects

The same genotype can produce different phenotypes in different environments. **Temperature sensitive alleles** are the cleanest example: the mutant protein works at a permissive temperature and fails at a restrictive one. The classic illustration uses tyrosinase (*TYR*, 11q14.3), the enzyme that synthesizes melanin: a temperature sensitive tyrosinase variant makes pigment only where the body is cool enough, so animals such as Siamese cats have dark extremities on a pale body. Diet is another environmental variable: Phenylketonuria (*PAH*, 12q23.2, autosomal recessive) follows from loss of phenylalanine hydroxylase, the enzyme that converts phenylalanine to tyrosine, and the index notes intellectual disability if untreated, so dietary control decides the outcome of the same genotype. A **phenocopy** is the mirror image: an environment that mimics the phenotype of a genotype without the genotype being present.

#### ELI-10
The same cookie dough makes flat cookies in a cool oven and puffy cookies in a hot oven. The dough did not change, the oven did. Genes work this way too, the same gene can give different results in different conditions. That is why the phenotype depends on both the genes and the environment.

### Worked Example Blood Type Probability

**Problem:** A person with blood type A and genotype *IAi* has children with a person of blood type AB. What is the probability that a child has blood type A?

**Given:** Parent one genotype is *IAi*; parent two is *IAIB*; *IA* and *IB* are codominant, and *i* is recessive.

**Plan:** List the gametes of each parent, form the four zygote classes, then add the classes that express the A sugar.

**Solution:** Parent one gametes are IA and i, each with probability 1/2. Parent two gametes are IA and IB, each with probability 1/2. Zygote classes: IAIA = 1/2 x 1/2 = 1/4, IAIB = 1/2 x 1/2 = 1/4, IAi = 1/2 x 1/2 = 1/4, IBi = 1/2 x 1/2 = 1/4. Blood type A comes from IAIA or IAi, so P(A) = 1/4 + 1/4 = 1/2.

**Answer:** The probability of a type A child is 1/2.

### Worked Example Lethal Allele Survivor Ratio

**Problem:** Two *Aa* individuals mate, and the *AA* genotype is lethal before birth. What proportion of live offspring is affected?

**Given:** Zygote classes are 1/4 AA, 1/2 Aa, and 1/4 aa, and the *AA* class never survives.

**Plan:** Add the surviving classes, then express the affected class as a fraction of the survivors.

**Solution:** Survivors are Aa plus aa: 1/2 + 1/4 = 3/4 of all zygotes. P(affected given live) = (1/2)/(3/4) = 1/2 x 4/3 = 2/3. This is the 2:1 ratio (sums to 3) written as a probability.

**Answer:** 2/3 of live offspring are affected.

### Worked Example Recessive Epistasis Probability

**Problem:** In the cross *CcAa* x *CcAa*, the *cc* genotype blocks all pigment (recessive epistasis). What is the probability that an offspring is pigmented?

**Given:** Pigmented requires *C_* and *A_*; the *cc* class is unpigmented regardless of the *A* locus.

**Plan:** Use independent assortment: P(pigmented) = P(*C_*) x P(*A_*).

**Solution:** P(*C_*) = 3/4 and P(*A_*) = 3/4, so P(pigmented) = 3/4 x 3/4 = 9/16. The full partition checks: 9/16 pigmented, 3/16 for the *C_aa* class, and 4/16 for the *cc* class, and 9 + 3 + 4 = 16.

**Answer:** The probability of a pigmented offspring is 9/16.

> **High-Yield:**
> - Every modified dihybrid ratio adds to 16: the 9:3:3:1 ratio (sums to 16), the 9:3:4 ratio (sums to 16), the 9:7 ratio (sums to 16), the 12:3:1 ratio (sums to 16), the 13:3 ratio (sums to 16), the 15:1 ratio (sums to 16), and the 9:6:1 ratio (sums to 16); the lethal ratio 2:1 (sums to 3) is the exception.
> - Recessive epistasis hides with a homozygous recessive pair, giving 9:3:4 (sums to 16); dominant epistasis hides with one dominant allele, giving 12:3:1 (sums to 16).
> - *ABO* has three alleles at one locus, *IA* and *IB* codominant and *i* recessive; the *ABO* gene (9q34.2) encodes the ABO glycosyltransferase, which adds the A or B sugar to the H antigen.
> - A lethal allele removes one zygote class, so a 1:2:1 genotypic split (sums to 4) becomes the 2:1 ratio (sums to 3) among survivors.
> - Penetrance asks whether any phenotype appears at all; expressivity asks how strong the phenotype is.

### Quick Review

- In incomplete dominance the heterozygote is intermediate, giving the 1:2:1 ratio (sums to 4); in codominance both alleles are fully expressed, as in AB blood type (*IAIB*).
- *ABO* has three alleles at one locus, *IA* and *IB* codominant and *i* recessive; the *ABO* gene (9q34.2) adds the A or B sugar to the H antigen.
- Recessive epistasis gives the 9:3:4 ratio (sums to 16); dominant epistasis gives the 12:3:1 ratio (sums to 16); complementary gene action gives the 9:7 ratio (sums to 16).
- Duplicate gene action gives the 15:1 ratio (sums to 16); duplicate genes with cumulative effect give the 9:6:1 ratio (sums to 16); dominant suppression gives the 13:3 ratio (sums to 16).
- A lethal allele removes a zygote class, so a dominant lethal heterozygote cross gives the 2:1 ratio (sums to 3) among survivors.
- Pleiotropy is one gene with many effects; sickle cell disease (*HBB*, 11p15.4) and Marfan syndrome (*FBN1*, 15q21.1) are classic examples.
- Penetrance asks whether the phenotype appears at all; expressivity asks how strongly it appears.
- Phenotype depends on genes and environment, as shown by temperature sensitive tyrosinase and the diet dependent outcome of Phenylketonuria (*PAH*, 12q23.2).

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
