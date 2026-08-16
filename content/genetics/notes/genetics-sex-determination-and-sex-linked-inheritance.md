---
id: genetics-sex-determination-and-sex-linked-inheritance
title: "Sex Determination And Sex Linked Inheritance"
slug: sex-determination-and-sex-linked-inheritance
subject: genetics
subjectName: "Genetics"
contentType: note
lesson: sex-determination-and-sex-linked-inheritance
lessonNumber: 5
description: "Study notes covering Sex Determination And Sex Linked Inheritance." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - sex
  - determination
  - linked
  - inheritance
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-e653453d1516fe84"
lastReviewed:
version: 1.0.0
---

# Sex Determination And Sex Linked Inheritance

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

This chapter covers how sex is determined, how genes on the sex chromosomes are inherited, and how those patterns are read from pedigrees. Mammals add a molecular switch on the Y and a gene silencing mechanism on the X that make X linked inheritance subtle. The emphasis is probability: computing risks from crosses and interpreting pedigrees.

### Chromosomal Sex Determination Systems

**Sex determination** is the set of mechanisms by which an individual becomes male or female. In humans and other mammals the sex chromosomes form an *XX*/*XY* pair: the **heterogametic sex** (male) makes X-bearing and Y-bearing gametes, while the **homogametic sex** (female) makes only X-bearing gametes, so an *XX* by *XY* cross gives the familiar 1:1 sex ratio (sums to 2), set by the father's gamete.

Other systems differ. In birds and some reptiles the ZW/ZZ system makes the female heterogametic (ZW) and the male homogametic (ZZ). Some insects use an XO system in which males carry a single X. **Haplodiploidy** occurs in bees, ants, and wasps, where fertilized eggs become diploid females and unfertilized eggs become haploid males. Many reptiles use **environmental sex determination**, in which incubation temperature sets the sex. Fruit flies are an exception: their Y is not sex determining.

| System | Heterogametic sex | Examples | How sex is set |
| --- | --- | --- | --- |
| XX/XY | Male | Humans, other mammals | Father passes X or Y |
| ZW/ZZ | Female | Birds, some reptiles | Mother passes Z or W |
| XO | Male | Grasshoppers | Male passes X or no sex chromosome |
| Haplodiploidy | None; males are haploid | Bees, ants, wasps | Fertilized egg is female, unfertilized egg is male |
| Environmental | None | Many reptiles | Incubation temperature |

```text
CROSS: XX female x XY male sex ratio
Parents: XX x XY
Assumptions: equal viability of all gametes, no nondisjunction, equal viability of both sexes
Gametes per parent: female X only; male X, Y in 1:1 (sums to 2)
Genotypic outcome per locus: 1:1 (XX, XY; sums to 2)
Expected phenotypic ratio: 1:1 female to male (sums to 2)
Probability requested: P(male child) = 1/2
```

#### ELI-10
A chromosome is a big instruction book made of DNA, and the sex chromosomes are the two books that decide the team a person plays on. In mammals the mother always passes an X book, and the father passes either an X book, which makes a girl, or a Y book, which makes a boy. The father's choice is a coin flip, which is why about half of babies are girls and half are boys. The father flips the coin, and the mother always plays the same card.

### SRY and the Sex Determination Pathway

All human embryos begin with a **bipotential gonad** that can become a testis or an ovary. In *XY* embryos the *SRY* gene at Yp11.2 encodes the **testis determining factor**, which initiates testis development. *SRY* switches on *SOX9* at 17q24.3, a transcription factor required for testis determination, and the testis then secretes hormones that direct the body along the male pathway. When *SRY* is absent or nonfunctional, the gonad develops as an ovary by default.

Because *SRY* sits on the Y, a translocation can carry it onto an X and produce an *XX* individual with testes, while loss of *SRY* from the Y can produce an *XY* individual with ovaries. These exceptions explain why karyotype and phenotype sometimes disagree.

#### ELI-10
Early in development, a baby has one neutral starting part that can become either a testis or an ovary. The Y chromosome carries a switch called *SRY*, and when that switch is on, it starts a chain of instructions that builds testes. When the switch is missing, the body follows the ovary pathway by default. It works like the master light switch in a house, where one switch turns on a whole row of lights.

### X Linked Recessive and Dominant Inheritance Patterns

Genes on the X follow **X linked inheritance**, and all the transmission rules fall out of one fact: a father passes his X to all daughters and his Y to all sons, so a son never inherits an X linked allele from his father. Because males have a single X, they are **hemizygous** at every X linked locus, and one recessive allele is fully expressed.

In **X linked recessive** inheritance, heterozygous females are **carriers** and usually unaffected. The reference conditions are hemophilia A (*F8*, Xq28), hemophilia B (*F9*, Xq27.1), red green color blindness (*OPN1LW* and *OPN1MW*, both Xq28), G6PD deficiency (*G6PD*, Xq28), and Duchenne muscular dystrophy (*DMD*, Xp21.2). An affected male passes his affected X to every daughter, making each an **obligate carrier**, and to no son. A carrier mother passes the affected allele to half of her children: half of her sons affected, half of her daughters carriers.

In **X linked dominant** inheritance, one affected allele is expressed in both sexes, so heterozygous females are affected; the reference condition is Fragile X syndrome (*FMR1*, Xq27.3). An affected father transmits the trait to all daughters and no sons, and an affected heterozygous mother transmits it to half of her children of each sex. An affected male with an unaffected mother rules the pattern out.

Notation: *X^H* is normal and *X^h* affected for hemophilia, *X^w+* and *X^w* for color vision, and *X^D* and *X^d* for X linked dominant problems; wild type is written *w+*.

| Feature | X linked recessive | X linked dominant |
| --- | --- | --- |
| Affected females | Rare; need two affected alleles | Common; heterozygotes are affected |
| Affected father, daughters | All daughters are carriers | All daughters are affected |
| Affected father, sons | No sons affected; son gets Y | No sons affected; son gets Y |
| Affected mother | Half of sons affected, half of daughters carriers | Half of children of each sex affected |
| Male to male transmission | Never | Never |
| Representative conditions | Hemophilia A (F8), hemophilia B (F9), red green color blindness (OPN1LW, OPN1MW), G6PD deficiency (G6PD), Duchenne muscular dystrophy (DMD) | Fragile X (FMR1) |

```text
CROSS: Carrier female x unaffected male, X linked recessive hemophilia A
Parents: X^H X^h x X^H Y
Assumptions: X linked recessive at F8, complete dominance, equal viability, no new mutation
Gametes per parent: female X^H, X^h in 1:1 (sums to 2); male X^H, Y in 1:1 (sums to 2)
Genotypic outcome per locus: 1:1:1:1 (X^H X^H, X^H X^h, X^H Y, X^h Y; sums to 4)
Expected phenotypic ratio: 1:1:1:1 (unaffected female, carrier female, unaffected male, affected male; sums to 4)
Probability requested: P(affected child) = 1/4; P(affected son) = 1/2
```

```text
CROSS: Affected male x unaffected homozygous female, X linked recessive hemophilia A
Parents: X^h Y x X^H X^H
Assumptions: X linked recessive at F8, complete dominance, equal viability, no new mutation
Gametes per parent: male X^h, Y in 1:1 (sums to 2); female X^H only
Genotypic outcome per locus: 1:1 (X^H X^h, X^H Y; sums to 2)
Expected phenotypic ratio: 1:1 (carrier female, unaffected male; sums to 2)
Probability requested: P(affected child) = 0; every daughter is a carrier
```

#### ELI-10
Boys have one X chromosome, while girls have two. If the single X copy in a boy carries a problem, he shows the problem, because he has no backup copy. A girl with one good and one bad copy usually shows the healthy version, but she can pass the bad copy to her children. It is like a recipe where boys get one page and girls get two pages, and one good page is enough.

### Y Linked Inheritance

Traits on the Y show **Y linked (holandric) inheritance**: only males are affected, an affected father transmits the trait to all of his sons and none of his daughters, and no carrier state exists because females never receive the Y. The best established Y linked gene in this course is *SRY* at Yp11.2; true Y linked single gene disorders are rare.

#### ELI-10
The Y chromosome is a book that only fathers pass down, and only to sons. A trait written only in that book can never appear in girls, because girls do not receive the book at all. It is like a club badge given only from father to son, so every son of a badge holder gets the badge, and no daughter ever does.

### Sex Influenced and Sex Limited Traits

Autosomal traits can look sex linked when hormones intervene. **Sex influenced traits** are autosomal but expressed differently in the two sexes; in the textbook model of male pattern baldness, the baldness allele acts as dominant in males and recessive in females. **Sex limited traits** are autosomal but expressed in only one sex, because the required anatomy or hormones exist in only one sex; milk production and egg laying are standard examples. Either pattern can masquerade as sex linked, but the locus is autosomal, so an affected father can pass the allele to a daughter who can pass it to her sons.

#### ELI-10
Some traits hide on regular chromosomes, not on the sex chromosomes, yet they show up in only one sex. The reason is hormones, the chemical weather of the body, which differ between males and females. Think of a raincoat both teams own, worn only by the team in the rainy city.

### X Inactivation and Lyonization

Female mammals express most X linked genes from only one X per cell, a process called **X inactivation** or **Lyonization**, named for Mary Lyon. Inactivation is random and early: each cell of the embryo silences either the maternal or the paternal X, and all descendants keep the same inactive X. The mechanism is driven by *XIST* at Xq13.2, which encodes an XIST long noncoding RNA that coats the chromosome destined for silencing. Every female is a patchwork of lineages expressing different X chromosomes.

#### ELI-10
In a female cell, the cell randomly turns off one of its two X chromosomes very early in development. Once a cell line chooses which X to silence, all of its descendant cells keep the same choice. This is like two radios playing the same song in one room, where the cell turns one radio off so it does not hear the song twice.

### Dosage Compensation and Barr Bodies

**Dosage compensation** equalizes X linked gene product between the sexes. Mammals silence one X in females, fruit flies double transcription of the male X, and the roundworm *Caenorhabditis elegans* reduces transcription of both X chromosomes in hermaphrodites. In mammals the silenced X condenses into a **Barr body** in female somatic cells. The count is the number of X chromosomes minus 1: a 46,XX cell shows 1, a Klinefelter syndrome cell (47,XXY) shows 1, and a Turner syndrome cell (45,X) shows 0. Klinefelter and Turner are chromosomal conditions, not single gene disorders.

#### ELI-10
The silenced X chromosome is rolled up into a tight little ball called a Barr body that can be seen under a microscope. Cells count their X chromosomes and silence all but one, so a cell with three X chromosomes makes two little balls. The balls are like library books shelved too high to read, still present but never opened.

### Mosaicism

**Mosaicism** is the presence of two or more genetically distinct cell populations in one individual. It can arise from a mutation in a single cell early in development, from chromosome loss in one cell line, or as a built in result of X inactivation. A heterozygous female for an X linked recessive condition is a functional mosaic with patches expressing each allele; the tortoiseshell cat is the classic illustration, and a heterozygous female for G6PD deficiency carries two red cell populations differing in enzyme activity. Mosaicism also complicates pedigrees, because a mosaic individual may be affected with unaffected parents and may not transmit the trait if the germline is spared.

#### ELI-10
Mosaicism means that one person carries different cell populations with different versions of a gene. In females this happens naturally, because each cell randomly silences one X, so some patches of the body use one version and other patches use the other. A tortoiseshell cat is the famous example, with patches of orange and patches of black. It is like a pizza made with two batches of dough, one plain and one whole wheat, baked into separate slices.

### Color Blindness and Hemophilia Pedigree Reasoning

Red green color blindness is X linked recessive, caused by defects in the red and green cone photopigments encoded by *OPN1LW* and *OPN1MW* (both Xq28), whose key feature is difficulty distinguishing red and green. Hemophilia A is X linked recessive with deficiency of coagulation factor VIII encoded by *F8* at Xq28, and hemophilia B with deficiency of coagulation factor IX encoded by *F9* at Xq27.1. All three share one pedigree logic: affected males through carrier mothers, rare affected females, no father to son transmission.

The reasoning rules are short: an affected son with two unaffected parents means the mother is a carrier; an affected female with an unaffected father rules out the pattern, since her paternal X comes from him.

```text
PEDIGREE: Unaffected carrier mother with an affected son
Generation I: I-1 unaffected male x I-2 unaffected female
Generation II: II-1 affected male, II-2 unaffected male, II-3 unaffected female
Key inference: affected son from two unaffected parents means the mother transmitted the affected X
Sex distribution: only a male affected, with unaffected parents, is the classic X linked recessive pattern
Most consistent mode: X linked recessive
Carrier implication: the mother is an obligate carrier and each additional son has a 1/2 risk
```

```text
PEDIGREE: Affected father with all daughters affected and all sons unaffected
Generation I: I-1 affected male x I-2 unaffected female
Generation II: II-1 affected female, II-2 affected female, II-3 unaffected male
Key inference: the affected father passes the trait to every daughter and to no son
Sex distribution: daughters affected, sons unaffected, with no male to male transmission
Most consistent mode: X linked dominant
Carrier implication: the term carrier does not apply, because heterozygotes are affected
```

```text
PEDIGREE: Two unaffected parents with an affected daughter
Generation I: I-1 unaffected male x I-2 unaffected female
Generation II: II-1 affected female, II-2 unaffected male
Key inference: an affected female with an unaffected father rules out X linked recessive
Sex distribution: the daughter's paternal X comes from her unaffected father
Most consistent mode: autosomal recessive
Carrier implication: both parents are obligate heterozygotes
```

The one cross that produces color blind daughters is a color blind male with a carrier female, because the father always passes *X^w* to his daughters.

```text
CROSS: Color blind male x carrier female, X linked recessive color blindness
Parents: X^w Y x X^w+ X^w
Assumptions: X linked recessive at OPN1LW and OPN1MW, complete dominance, equal viability
Gametes per parent: male X^w, Y in 1:1 (sums to 2); female X^w+, X^w in 1:1 (sums to 2)
Genotypic outcome per locus: 1:1:1:1 (X^w+ X^w, X^w X^w, X^w+ Y, X^w Y; sums to 4)
Expected phenotypic ratio: 1:1:1:1 (carrier female, color blind female, unaffected male, color blind male; sums to 4)
Probability requested: P(color blind child) = 2/4 = 1/2; P(color blind daughter) = 1/4
```

> **Common Mistake:** Do not read an X linked recessive pedigree as autosomal recessive just because affected children have unaffected parents, and do not carry the mistake into the probabilities. The tell is sex: sons of a carrier mother are affected with probability 1/2 per son, male to male transmission never happens, and affected females are essentially absent, so a 2/3 carrier risk for the unaffected brother of an affected male means autosomal reasoning has leaked in. Keep the notation strict: the allele is *X^h*, never Xh and never a Unicode superscript.

#### ELI-10
A pedigree is a family tree drawn with symbols that shows who has a trait. For X linked recessive traits such as color blindness, the trick is watching who passes what to whom, because a father gives his X only to daughters and a mother gives an X to every child. If only boys in the tree are affected, the mother is usually the carrier. Reading a pedigree is like following a coin through a board game where the coin can only move along certain paths.

### Worked Example Obligate Carrier with an Affected Father

**Problem:** A woman's father has hemophilia A, and she has two unaffected sons. What is the probability that her next child is an affected male?

**Given:** Hemophilia A is X linked recessive at *F8*; her father is *X^h Y*.

**Plan:** Her father fixes her genotype, making her an obligate carrier *X^H X^h*; the unaffected sons change nothing. Multiply P(son) by P(inherits *X^h*).

**Solution:** P(carrier) = 1. P(son) = 1/2 and P(son inherits *X^h*) = 1/2, so P(affected male child) = 1/2 x 1/2 = 1/4.

**Answer:** 1/4, a 25 percent chance.

### Worked Example Color Blind Daughter from a Color Blind Father

**Problem:** A woman with normal vision has a color blind father, and her partner is color blind. What is the probability that their first child is a color blind female?

**Given:** Color blindness is X linked recessive; she is an obligate carrier *X^w+ X^w*, and her partner is *X^w Y*.

**Plan:** A daughter receives *X^w* from the father with probability 1, so a color blind daughter also needs *X^w* from the mother. Multiply P(daughter) by P(mother passes *X^w*).

**Solution:** P(daughter) = 1/2. P(mother passes *X^w*) = 1/2. P(father passes *X^w*) = 1. P(color blind daughter) = 1/2 x 1/2 x 1 = 1/4.

**Answer:** 1/4.

### Worked Example X Linked Dominant Heterozygote

**Problem:** A woman affected with Fragile X syndrome and heterozygous *X^D X^d* has children with an unaffected man *X^d Y*. What is the probability that a randomly selected child is affected?

**Given:** Fragile X is X linked dominant at *FMR1*.

**Plan:** Write the four equally likely zygotes from the gametes in 1:1:1:1 (sums to 4) and count those carrying *X^D*.

**Solution:** Maternal gametes *X^D*, *X^d* in 1:1 (sums to 2); paternal gametes *X^d*, *Y* in 1:1 (sums to 2). Zygotes: *X^D X^d* affected female, *X^d X^d* unaffected female, *X^D Y* affected male, *X^d Y* unaffected male. Affected zygotes are 2 of 4, so P(affected child) = 2/4 = 1/2.

**Answer:** 1/2.

> **High-Yield:**
> - A son gets his Y from his father, so an affected father never passes an X linked allele to a son; father to son transmission rules out X linked inheritance.
> - An affected female with an unaffected father rules out X linked recessive, because her paternal X comes from him.
> - For a carrier mother and an unaffected father, P(affected son) = 1/2 and P(affected child) = 1/4.
> - Hemophilia A (*F8*), hemophilia B (*F9*), red green color blindness (*OPN1LW* and *OPN1MW*), and G6PD deficiency (*G6PD*) are all X linked recessive and share one pedigree logic: affected males, carrier females, no father to son passage.
> - In X linked dominant pedigrees an affected father makes every daughter affected, and a heterozygous mother gives a 1:1 ratio (sums to 2) of affected to unaffected children.

### Quick Review

- Mammalian sex is set by the father's gamete: an X gives an *XX* female and a Y gives an *XY* male, in a 1:1 ratio (sums to 2).
- *SRY* at Yp11.2 encodes the testis determining factor and acts through *SOX9* to direct the bipotential gonad toward testis development.
- X linked recessive conditions, including hemophilia A, hemophilia B, red green color blindness, and G6PD deficiency, affect mostly males; carriers are unaffected females.
- X linked dominant conditions such as Fragile X syndrome affect both sexes, and an affected father passes the trait to all daughters and no sons.
- Y linked traits pass from father to all sons and never to daughters, and *SRY* is the best established example.
- X inactivation silences one X per female cell through *XIST*, producing a Barr body and functional mosaicism.
- Barr body count equals X chromosome number minus 1, so 45,X Turner cells show 0 and 47,XXY Klinefelter cells show 1.
- In pedigree reasoning, affected males through carrier mothers with no father to son transmission point to X linked recessive, while an affected female with an unaffected father rules it out.

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
