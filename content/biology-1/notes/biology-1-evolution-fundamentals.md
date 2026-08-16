---
id: biology-1-evolution-fundamentals
title: "Evolution Fundamentals"
slug: evolution-fundamentals
subject: biology-1
subjectName: "Biology 1"
contentType: note
lesson: evolution-fundamentals
lessonNumber: 14
description: "Study notes covering Evolution Fundamentals." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - evolution
  - fundamentals
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-9039493d9388bb1c"
lastReviewed:
version: 1.0.0
---

# Evolution Fundamentals

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

Evolution is the process by which life changes across generations, and natural selection is its best-known engine. Everything in the earlier chapters, from DNA to cell division to Mendelian inheritance, feeds into this one, because evolution is change in allele frequencies across generations. The mechanisms developed here also drive the history of life that Biology 2 covers, so this chapter is the foundation for everything that follows.

### Natural Selection Mechanisms

**Natural selection** is the differential survival and reproduction of individuals whose **heritable variation** gives them higher **fitness** in a particular environment. Three conditions must hold for it to operate: the trait varies among individuals, the variation is passed to offspring, and the variation affects how many descendants an individual leaves. Because more offspring are produced than the environment can support, individuals with favorable traits reproduce more, and the alleles behind those traits spread through the population over generations. Selection acts on individual phenotypes, but its measurable outcome is a change in the population's allele frequencies across generations.

Selection comes in three modes, depending on which phenotypes are favored:

| Mode | Phenotype favored | Effect on the population | Example |
| --- | --- | --- | --- |
| Directional selection | One extreme | Mean shifts toward that extreme | Longer giraffe necks when food grows high |
| Stabilizing selection | The intermediate | Variation narrows, mean unchanged | Human birth weight near the optimum |
| Disruptive selection | Both extremes | A bimodal split that can lead to speciation | Birds eating only very small or very large seeds |

> **Common Mistake:** Natural selection does not act for the good of the species, and it does not reward a long life. It only rewards reproduction: an animal that lives long but leaves no offspring has zero fitness. The population changes over generations; the individual's traits never change within its lifetime.

#### ELI-10

Think of a gardener who saves seeds only from the sweetest tomatoes. Each year the tomatoes taste a little sweeter, because the gardener keeps choosing the best parents. Nature does the same thing when food is scarce and only some animals can find enough to eat. The survivors pass their helpful traits to their babies. That is natural selection running without anyone planning it.

### Genetic Drift and Gene Flow

**Genetic drift** is a random change in allele frequencies that results from chance, not from fitness. Small populations are hit hardest, because a chance event, a storm, a disease, or simply who happens to reproduce, can remove alleles outright. The **bottleneck effect** follows a sharp crash in population size: the few survivors carry only a fraction of the original genetic variety, so the new frequencies are set by luck. The **founder effect** occurs when a handful of individuals colonize a new area and carry only a sample of the source population's alleles. **Gene flow** pushes in the opposite direction: the movement of alleles between populations through migration, which mixes **gene pools** and makes neighboring populations more similar to each other.

> **Common Mistake:** Genetic drift is not adaptation. Drift changes allele frequencies for no fitness reason at all, so it can fix a harmful allele or lose a helpful one. Selection improves the fit between organism and environment; drift is simply a coin flip.

#### ELI-10

Imagine a jar with one hundred marbles, half red and half blue. If you scoop out just ten marbles by chance, you might grab seven red ones and three blue ones. The scoop changed the mix even though nothing preferred red. A small scoop wobbles far more than the whole jar does. Drift is that wobble, and it wobbles hardest when the population is tiny.

### Hardy Weinberg Equilibrium

The **Hardy Weinberg equilibrium** describes a population in which allele and genotype frequencies stay constant from generation to generation. It holds only when five conditions are all met: **no mutation**, **random mating**, **no natural selection**, a **very large population**, and **no gene flow**. No real population satisfies all five, which makes the equilibrium a null model: a population that departs from Hardy Weinberg expectations is, by definition, evolving. The model also lets you compute predicted genotype frequencies from allele frequencies.

If p is the frequency of allele A and q is the frequency of allele a, then p + q = 1 and the genotype frequencies follow p^2 + 2pq + q^2 = 1, where p^2 is the homozygous AA class, 2pq is the heterozygous Aa class, and q^2 is the homozygous aa class. Suppose a population of 200 individuals has 32 recessive aa offspring. Then q^2 = 32 divided by 200 = 0.16, so q = 0.4 and p = 0.6, and heterozygotes are predicted at 2pq = 0.48, or 96 of the 200 individuals. Computing frequencies from observed data follows a fixed sequence:

```text
1. Count every allele in the population, including both copies carried by each diploid individual.
2. Divide the count of allele A by the total to get p, and the count of allele a by the total to get q.
3. Verify that p + q = 1.
4. Plug p and q into p^2 + 2pq + q^2 = 1 to predict the genotype frequencies.
5. Compare the predicted frequencies with the observed ones to test whether the population is evolving.
```

> **Common Mistake:** The frequency of the recessive phenotype is q squared, not q. You must count the recessive individuals, divide by the population size, and then take the square root to obtain q. Confusing q squared with q makes every downstream prediction wrong.

#### ELI-10

Picture a giant bag of beads with red and white beads mixed exactly half and half. If the bag is so enormous that a handful barely changes the mix, every handful looks just like the last one. Hardy Weinberg imagines that perfect, enormous bag. Real populations are smaller, so their mix wobbles a little each generation. The formula describes the mix that would never wobble at all.

### Population Genetics

**Population genetics** is the branch of biology that studies allele frequencies in populations and the forces that change them. It merges Mendelian inheritance with evolution: meiosis shuffles alleles into new combinations every generation, but the frequencies themselves shift only through four evolutionary forces. **Mutation** introduces new alleles and is the ultimate source of all genetic variation. Natural selection, genetic drift, and gene flow then redistribute those alleles within and between populations. Together these forces produce **microevolution**, defined as a change in allele frequencies within a population across generations. Of the four forces, only natural selection consistently improves the match between organisms and their environments; the others act without regard to fitness. Measuring genotype frequencies at a locus and comparing them with Hardy Weinberg predictions is how population geneticists detect microevolution in real populations.

#### ELI-10

Think of a library with many copies of two different book covers. Counting how many copies of each cover sit on the shelves is like measuring allele frequencies. If the library gains more copies of one cover every year, the mix has changed. Population genetics is the science of counting those copies and explaining why the mix shifts. It turns the big idea of evolution into numbers you can measure.

### Speciation

**Speciation** is the process by which one species splits into two or more new species. A **species**, under the **biological species concept**, is a group of populations that can interbreed and produce fertile offspring. Speciation therefore begins when **reproductive isolation** blocks gene flow between populations, letting the two groups accumulate independent mutations and genetic changes. **Reproductive isolating mechanisms** come in two classes: **prezygotic barriers** prevent mating or fertilization entirely, through habitat differences, breeding at different times, incompatible behaviors, physical mismatch, or gametes that fail to fuse; **postzygotic barriers** act after fertilization, when hybrids are inviable or sterile, like the mule, the sterile hybrid of a horse and a donkey.

The geographic setting of isolation defines the two major modes of speciation:

| Feature | Allopatric speciation | Sympatric speciation |
| --- | --- | --- |
| Separation mechanism | Physical barrier such as a mountain or river | No physical barrier |
| How gene flow is blocked | By geography | By genetics or behavior |
| Typical example | Squirrel populations split by the Grand Canyon | Polyploid plants from doubled chromosomes |

**Allopatric speciation** means different homeland: a physical barrier splits a population's range, and the separated groups diverge over time. **Sympatric speciation** means same homeland: new species arise within a single area, often in plants through **polyploidy**, in which an error in cell division doubles the chromosome set and instantly isolates the new lineage from its parents.

> **Common Mistake:** Looking different does not make two organisms different species, and looking alike does not make them the same species. The test of the biological species concept is whether gene flow is possible, not appearance. A dog breed and its wild ancestor can look very different and still interbreed.

#### ELI-10

Imagine two groups of friends who live on opposite sides of a tall mountain and never visit each other. Over many years, each group picks up its own slang and inside jokes. If they finally meet again, they may not understand each other at all. When two populations stop swapping genes for long enough, they become separate species. The mountain was the accident that started the split.

### Evidence for Evolution

Evolution is supported by several independent lines of evidence that all point the same way. The **fossil record** shows a sequence of organisms through time, including transitional forms such as Tiktaalik, a fish with limb-like fins that lived between fish and land animals. **Homologous structures**, such as the forelimb bones of humans, bats, and whales, are built from the same underlying parts because they were inherited from a common ancestor, while **analogous structures**, like insect and bird wings, look similar because of **convergent evolution**, not shared ancestry. **Vestigial structures**, such as the human appendix and the pelvic bones of whales, are leftover parts that had clear functions in ancestors. **Biogeography** finds that island species resemble species on the nearby mainland more than they resemble species on distant islands with similar climates, exactly as **descent with modification** predicts. **Molecular evidence** is the most direct: humans and chimpanzees share roughly 99 percent of their DNA, nearly all organisms use the same genetic code, and DNA comparisons place humans closest to chimpanzees among living species. Evolution has also been observed directly, as when bacteria evolve resistance to antibiotics within months or Galapagos finch beak sizes shift measurably after drought years.

#### ELI-10

Imagine finding two houses in different towns built from the exact same blueprint. Nobody thinks the houses copied each other; they must share one architect. Biology works the same way when we find the same genes in very different animals. A shared blueprint across many species points back to one common ancestor. That shared blueprint is the evidence for evolution.

> **High-Yield:**
> - Natural selection favors phenotypes, but evolution is measured as a change in allele frequencies.
> - The five Hardy Weinberg conditions are no mutation, random mating, no natural selection, a large population, and no gene flow.
> - Genetic drift is random and strongest in small populations; gene flow mixes populations and shrinks their differences.
> - Speciation requires reproductive isolation, and allopatric speciation starts with a physical barrier.
> - Memorize p + q = 1 and p^2 + 2pq + q^2 = 1, and remember that q squared is the recessive genotype, not the recessive allele.

### Quick Review

- Natural selection needs heritable variation and differential reproduction, and it runs in directional, stabilizing, and disruptive modes.
- Genetic drift is random, hits small populations hardest, and appears as the bottleneck effect and the founder effect.
- Gene flow moves alleles between populations and makes neighboring populations more similar.
- Hardy Weinberg equilibrium assumes no mutation, random mating, no natural selection, a very large population, and no gene flow.
- With allele frequencies p and q, p + q = 1 and the genotype frequencies follow p^2 + 2pq + q^2 = 1.
- Speciation requires reproductive isolation: allopatric speciation uses a physical barrier, and sympatric speciation does not.
- Evidence for evolution comes from fossils, homologous and vestigial structures, biogeography, DNA comparisons, and direct observation.

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
