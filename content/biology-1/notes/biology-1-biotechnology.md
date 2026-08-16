---
id: biology-1-biotechnology
title: "Biotechnology"
slug: biotechnology
subject: biology-1
subjectName: "Biology 1"
contentType: note
lesson: biotechnology
lessonNumber: 13
description: "Study notes covering Biotechnology." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - biotechnology
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-45de58f15aa52e1a"
lastReviewed:
version: 1.0.0
---

# Biotechnology

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

Biotechnology turns the molecular machinery of cells into practical tools for medicine, agriculture, and forensics. It builds directly on the DNA structure and the replication, transcription, and translation processes from the previous chapter, repurposing enzymes such as polymerases, restriction enzymes, and ligases into working instruments. These tools put the drugs in pharmacies, the modified crops in fields, and the DNA evidence in courtrooms, and they raise ethical questions that every informed citizen should be able to weigh.

### PCR

The **polymerase chain reaction (PCR)** is a lab technique that makes millions of copies of a specific segment of DNA in a few hours. Developed by Kary Mullis in 1983, PCR earned the Nobel Prize and transformed molecular biology. The reaction needs four ingredients: the **template DNA**, two short **primers** that bracket the region to copy, the four nucleotide building blocks, and a heat-stable DNA polymerase called **Taq polymerase**, originally isolated from the hot-spring bacterium Thermus aquaticus. Because Taq polymerase survives near-boiling temperatures, the reaction can run in a machine called a **thermocycler** that repeats the same temperature cycle automatically. Each cycle doubles the number of copies, so after n cycles one molecule becomes 2 to the n copies, and thirty cycles turn a single molecule into more than one billion copies. PCR is so sensitive that it can detect a virus in a patient sample, amplify DNA from a single hair at a crime scene, or prepare DNA for sequencing, and a variant called quantitative PCR measures how much starting DNA was present.

```text
1. Denaturation at about 95 degrees Celsius separates the two DNA strands.
2. Annealing at about 60 degrees Celsius lets the primers bind to their target sites.
3. Extension at about 72 degrees Celsius lets Taq polymerase build new strands.
4. The cycle repeats, doubling the number of copies each time.
```

> **Common Mistake:** PCR amplifies DNA exponentially, so 30 cycles give about 2 to the 30th, more than one billion copies, not 60 copies. Do not confuse doubling each cycle with adding the cycle count.

#### ELI-10

Think of a photocopier that copies only one page of a book. Each copy can itself be copied again, so the page count grows by doubling. After ten rounds of copying you have over a thousand pages. PCR is the cell version of that photocopier working on DNA.

### Gel Electrophoresis

**Gel electrophoresis** separates DNA fragments by size using an electric field. DNA carries a negative charge because of its phosphate backbone, so fragments placed in a porous **agarose gel** move toward the positive electrode. The gel acts as a sieve: small fragments slip through the pores quickly and travel the farthest, while large fragments lag near the start. A **DNA ladder**, a mixture of fragments of known sizes, runs in its own lane so unknown bands can be measured against it. After the run, a fluorescent dye binds the DNA and the bands glow under ultraviolet light, giving a photograph that shows how many fragments of each size are present. Researchers use gels to confirm that a PCR reaction worked, to compare DNA between individuals in forensics, and to check that a cloning experiment produced the expected fragments.

> **Common Mistake:** The fragments that travel farthest are the smallest, because they pass through the gel pores most easily. Large fragments stay near the starting well, so band position and fragment size run in opposite directions.

#### ELI-10

Imagine a race through a maze of doors. A small child squeezes through every door quickly and finishes far ahead. A large adult keeps getting stuck and ends up near the start. A gel is a maze that sorts DNA by how well it fits through.

### Recombinant DNA and Plasmids

**Recombinant DNA** is DNA assembled from two or more different sources. The cutting tools are **restriction enzymes**, bacterial proteins that recognize short specific sequences and snip the double helix, usually leaving short single-stranded overhangs called **sticky ends**. **DNA ligase** then seals the pieces back together, joining the inserted gene to its carrier. The most common carrier is a **plasmid**, a small circular DNA molecule that bacteria carry alongside their main chromosome. Cloning plasmids carry an origin of replication, a site where the insert fits, and a **selectable marker** such as an **antibiotic resistance gene**, so only bacteria that actually received the plasmid survive on antibiotic plates. To build a clone, a scientist cuts the plasmid and the donor DNA with the same restriction enzyme, mixes them so the sticky ends pair, seals the joints with ligase, and transforms the mixture into bacteria. The bacteria replicate the plasmid as they divide, producing many copies of the inserted gene, and with the right regulatory signals they can even express a human gene such as the insulin gene.

> **Common Mistake:** Restriction enzymes cut DNA and ligase seals it, so do not swap their roles. The plasmid and the insert must be cut with the same restriction enzyme so their sticky ends are complementary and pair up correctly.

#### ELI-10

Think of two puzzle pieces with matching tabs and holes. Scissors cut a piece out of one picture, and the same scissors shape the frame of another. Glue holds the piece inside the frame. That is how scientists build a new DNA circle from parts of different organisms.

### Sequencing

**DNA sequencing** determines the exact order of nucleotides in a DNA molecule. The classic method, **Sanger sequencing**, uses modified building blocks called dideoxy nucleotides: whenever one is added, DNA synthesis stops. The reaction therefore produces fragments ending at every possible position, and a machine separates those fragments by size to read the sequence one base at a time. A single Sanger read is accurate for roughly 1,000 bases, which is why the Human Genome Project needed millions of overlapping reads to assemble the three billion base pairs of the human genome. **Next-generation sequencing** runs millions of tiny reactions in parallel and uses computers to stitch overlapping short reads into whole genomes. That shift collapsed the price of a whole human genome from about three billion dollars for the first one to under one thousand dollars today, putting sequencing to work in cancer diagnosis, pathogen tracking, and consumer ancestry tests.

> **Common Mistake:** A single Sanger read covers only about 1,000 bases, not a whole chromosome. Whole-genome sequencing relies on millions of overlapping short reads that software assembles into one continuous sequence.

#### ELI-10

Imagine spelling a very long word by writing every letter you see onto its own sticky note, then lining the notes up in order. Each note shows only one letter, but together they spell the whole word. Sequencing works the same way on a much larger scale.

### CRISPR

**CRISPR-Cas9** is a gene-editing system adapted from the immune defenses of bacteria, which store short pieces of viral DNA in their own chromosomes and use them to recognize returning viruses. Scientists redesigned the system so that a **guide RNA** can match any DNA sequence they choose, and the **Cas9** protein cuts the DNA at exactly that spot. To edit a gene, researchers deliver the guide RNA and Cas9 into cells, the complex finds its target, and Cas9 cuts both strands of the DNA. The cell then repairs the break, either by joining the cut ends, which often disables the gene, or by copying from a repair template supplied by the scientist, which inserts a new sequence. Because guide RNAs are easy to design, CRISPR is faster, cheaper, and more precise than earlier editing tools, and it now powers clinical trials for sickle cell disease, crop improvements, and thousands of basic research projects.

```text
1. Design a guide RNA that matches the target DNA sequence.
2. Load the guide RNA onto the Cas9 protein.
3. Deliver the complex into the cell, where the guide finds its target.
4. Cas9 cuts both strands of the DNA at the target site.
5. The cell repairs the cut, either disabling the gene or inserting new DNA.
```

#### ELI-10

Think of Cas9 as scissors and the guide RNA as the hand aiming them. A teacher finds a sentence in a giant book and the scissors cut exactly that sentence. If you tape in a new sentence before the book seals the gap, you have edited the story. CRISPR lets scientists edit the DNA text itself.

### Cloning

**Cloning** creates genetically identical copies of DNA molecules, cells, or whole organisms. **Reproductive cloning** produces a new organism through **somatic cell nuclear transfer**: the nucleus of an adult body cell is placed into an egg cell whose own nucleus has been removed, and the egg is coaxed to develop into an embryo. Because nearly all of the DNA in the resulting animal comes from the transplanted nucleus, the clone is genetically identical to the nucleus donor. Dolly the sheep, born in 1996, was the first mammal cloned from an adult cell by this method, and clones of cattle, pigs, and pets have followed. **Therapeutic cloning** creates embryos to harvest stem cells for research rather than to produce offspring. Cloning remains inefficient, with many embryos failing to develop, so it is used mainly for research, for preserving endangered species, and for improving farm animals rather than for routine reproduction of pets or people.

> **Common Mistake:** A clone is genetically identical to the nucleus donor, not to the surrogate mother that carried it. Because environment and chance also shape traits, a clone can differ in appearance from the animal it copies.

#### ELI-10

Think of a factory that can rebuild a car from just the engine blueprint. The new car is identical in design, but different roads and weather wear it differently. Cloning copies the DNA blueprint, not the history of the original. That is why a clone is not a perfect twin in every detail.

### Applications and Ethics

Biotechnology now reaches medicine, agriculture, forensics, and conservation. **Recombinant insulin**, approved for humans in 1982, was the first biotech drug, and engineered cells now make growth hormone, blood-clotting factors, and vaccine components. In agriculture, **genetically modified organisms** include pest-resistant crops and **golden rice**, which was engineered to make beta-carotene, a source of vitamin A for people whose diets are heavy in rice. In forensics, **DNA fingerprinting** compares short tandem repeats across many locations in the genome, powerful enough to identify a suspect from a drop of blood or to reunite separated families. **Gene therapy** delivers working copies of genes to patients whose own copies carry disease-causing mutations. Every application raises ethical questions, including who may own and profit from a gene sequence, whether embryos may be edited, how genetic privacy is protected, and whether expensive technologies reach everyone or only the wealthy.

| Application | Benefit | Ethical concern |
| --- | --- | --- |
| Recombinant insulin | Steady supply of human protein for diabetics | Cost and access in low-income countries |
| Golden rice | Vitamin A for malnourished communities | Long-term effects on ecosystems and seed markets |
| DNA fingerprinting | Identifies suspects and reunites families | Genetic privacy and the risk of wrongful conviction |
| Gene therapy | Can correct disease-causing mutations | Deciding which genes may be edited and who decides |

> **High-Yield:**
> - PCR amplifies DNA exponentially, so 30 cycles make about one billion copies from one starting molecule.
> - On a gel, smaller fragments migrate farthest because they pass through the pores fastest.
> - Recombinant DNA needs restriction enzymes to cut and ligase to seal, and both cut pieces must share sticky ends.
> - Sanger reads span about 1,000 bases, so genomes are assembled from many overlapping reads.
> - CRISPR uses a guide RNA to aim Cas9, and a clone copies the nucleus donor's genome, not the surrogate's.

#### ELI-10

Owning a powerful tool is like owning a sharp kitchen knife. The knife can prepare a healthy meal or hurt someone, depending on how it is used. Biotechnology is the same: the same knowledge can cure disease or be misused. That is why society writes rules around these tools.

### Quick Review

- PCR doubles the target DNA each cycle, so n cycles give 2 to the n copies from one molecule.
- Gel electrophoresis separates DNA by size, and the smallest fragments migrate the farthest.
- Restriction enzymes cut and ligase seals recombinant DNA into plasmids, which bacteria carry and replicate.
- Sanger sequencing reads about 1,000 bases per reaction, so genomes are assembled from overlapping reads.
- CRISPR-Cas9 uses a guide RNA and the Cas9 enzyme to cut and edit a chosen DNA sequence.
- Reproductive cloning by somatic cell nuclear transfer produced Dolly and copies the nucleus donor's genome.
- Biotechnology makes insulin, modified crops, and forensic DNA fingerprints, and it raises questions about privacy, ownership, and access.
- The same tools can treat disease, feed people, or be misused, so regulation and informed judgment matter.

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
