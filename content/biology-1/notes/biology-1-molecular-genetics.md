---
id: biology-1-molecular-genetics
title: "Molecular Genetics"
slug: molecular-genetics
subject: biology-1
subjectName: "Biology 1"
contentType: note
lesson: molecular-genetics
lessonNumber: 12
description: "Study notes covering Molecular Genetics." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - molecular
  - genetics
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-11a0fc397c5971ef"
lastReviewed:
version: 1.0.0
---

# Molecular Genetics

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

Molecular genetics is the study of how the information stored in **DNA** becomes the **proteins** that do the work of every cell. This chapter follows that flow of information, from copying DNA to reading its message, building on the nucleic acids and proteins of the previous chapter. It also explains how mutations arise, how bacteria regulate their genes, and how cells switch genes on and off without changing the sequence. This machinery is the foundation for heredity, disease, and modern medicine.

### DNA replication

**DNA replication** is the process by which a cell copies its entire genome so that each daughter cell receives a complete set of instructions before division. The process is **semiconservative**: each new double helix contains one original strand and one newly synthesized strand. Replication begins at an **origin of replication**, where DNA unwinds and **replication forks** move outward in both directions. The enzyme **helicase** unzips the double helix, and **single-strand binding proteins** keep the separated strands stable.

New DNA always grows in the **5 prime to 3 prime** direction, so the two old strands must be copied differently. **DNA polymerase** adds nucleotides continuously along the **leading strand**, but on the **lagging strand** it works in short stretches called **Okazaki fragments**, each started by an RNA primer from **primase**. **DNA ligase** later seals the gaps between fragments. Prokaryotic replisomes add about one thousand nucleotides per second per fork, while human polymerases add roughly fifty nucleotides per second. Replication is remarkably accurate: **proofreading** by DNA polymerase leaves about one mistake per billion nucleotides copied.

> **Common Mistake:** The lagging strand is not built backward. Both new strands grow in the 5 prime to 3 prime direction; the lagging strand simply grows in short patches that are joined later by ligase.

```text
1. Helicase unwinds the double helix at the origin of replication.
2. Single-strand binding proteins hold the two template strands apart.
3. Primase lays a short RNA primer on each strand.
4. DNA polymerase adds nucleotides onto the primers, building new DNA in the 5 prime to 3 prime direction.
5. DNA ligase seals the gaps between the patches on the lagging strand.
```

#### ELI-10

Imagine a zipper that gets copied while it unzips. A machine unzips the two sides and builds a new matching side for each old side. The other new side has to be built in small patches that are zipped together afterward. When the job is done, there are two complete zippers, and each one keeps one old half.

### Transcription

**Transcription** copies a gene from DNA into **messenger RNA** (mRNA), a portable message that carries the genetic instructions to the ribosome. The enzyme **RNA polymerase** binds a **promoter**, a sequence at the start of the gene that marks where transcription begins. The polymerase unwinds a short stretch of the double helix and reads one strand, the **template strand**, building a complementary RNA in the 5 prime to 3 prime direction. The other strand, the **coding strand**, is not copied; its sequence simply matches the RNA, with uracil in place of thymine. Transcription ends at a **terminator** sequence, and the finished RNA molecule is released.

The three great classes of informational molecules differ in their chemistry and their jobs:

| Feature | DNA | RNA | Protein |
| --- | --- | --- | --- |
| Sugar | Deoxyribose | Ribose | None |
| Bases | A, T, G, C | A, U, G, C | None; built from amino acids |
| Shape | Double helix | Usually a single strand | Folds into a 3D shape |
| Main job | Stores genetic information | Carries the message | Does cellular work |

Prokaryotes can translate an mRNA while transcription is still under way. Eukaryotes cannot, because the message must be processed and leave the nucleus first.

#### ELI-10

Think of a photocopier that copies only one page of a book instead of the whole book. The page it copies is the template strand, and the copy it makes is a portable message in RNA. The copy uses a slightly different alphabet, swapping the letter T for the letter U. That portable message then leaves the shelf and travels to where proteins are made.

### RNA processing

In eukaryotic cells, the raw RNA made by RNA polymerase is called **pre-mRNA** and must be processed before it leaves the nucleus. A modified guanine **5 prime cap** is added to the front end, and a long string of adenine nucleotides called the **poly-A tail** is added to the back end; both protect the message and help the ribosome attach later. The gene's **introns**, noncoding stretches that interrupt the message, are removed by **splicing**, and the **exons**, the coding stretches, are joined by a large machine called the **spliceosome**. A single gene can often be spliced in more than one way, called **alternative splicing**, which lets one gene produce several different proteins. The finished mRNA then leaves the nucleus through a pore.

#### ELI-10

Think of a long message on a scroll where many sections are written in invisible ink. Before the scroll is delivered, the invisible sections are cut out and the remaining visible sections are glued together. A cap and a tail are added at the ends, like a stamped envelope, so the message arrives safely and is not chewed up on the way. Now the finished letter is ready to be read.

### Translation

**Translation** is the process by which the ribosome builds a **polypeptide**, a chain of amino acids that folds into a protein, using the mRNA as a blueprint. The ribosome, a large complex of RNA and protein, reads the mRNA in groups of three nucleotides. Each three-letter group, a **codon**, is decoded by a **transfer RNA** (tRNA) whose **anticodon** pairs with the codon and carries the matching amino acid. The ribosome has three working sites, A, P, and E, where tRNAs arrive, the chain is held, and spent tRNAs exit. A **peptide bond** joins each new amino acid to the chain, and translation begins at the **start codon** AUG and ends when a **stop codon** brings a **release factor** that separates the finished protein. The message is read 5 prime to 3 prime, so the protein grows from amino to carboxyl terminus, and several ribosomes can read one mRNA at once as a **polyribosome**.

```text
1. The ribosome binds the mRNA at the start codon AUG.
2. A tRNA carrying methionine pairs its anticodon with the start codon.
3. Each next codon attracts a tRNA with the matching anticodon, and a peptide bond joins the new amino acid to the chain.
4. The ribosome moves one codon at a time until it reaches a stop codon.
5. A release factor finishes the job, and the completed protein is released.
```

#### ELI-10

Picture a factory where a moving belt carries a punched tape with instructions written in three-letter words. Tiny cranes, each holding one building block, read the three-letter words and place their blocks in line. The blocks link together into a chain, and the chain folds into a working tool. When the belt reaches a word that says stop, the tool is released and the belt is ready for the next tape.

### Genetic code

The **genetic code** is the rulebook that links the language of nucleic acids to the language of proteins. The code is a **triplet code**: three nucleotides form one codon that names one amino acid. Four bases arranged in groups of three make 64 codons in total, but only 61 of them, the **sense codons**, specify amino acids. The remaining three codons, **UAA**, **UAG**, and **UGA**, are the stop codons that signal the end of the message, and AUG serves as the start codon while also coding for methionine. The code is **degenerate**, or redundant, because most amino acids are named by more than one codon, and it is nearly universal, which is why bacteria can be engineered to make human proteins.

#### ELI-10

Think of the code as a dictionary written in a language with only four letters. Words are always exactly three letters long, so there are sixty-four possible words, but three of them say stop instead of naming a building block. More than one word can name the same building block, like synonyms in English. A reader cannot skip a letter or shift the words, because that changes every word that follows.

### Mutations

A **mutation** is any permanent change in the DNA sequence, a common cause of disease and the raw material of evolution. **Substitutions** swap one nucleotide for another and come in three flavors: a **silent mutation** changes a codon but still specifies the same amino acid; a **missense mutation** changes the amino acid, as in sickle cell anemia, where one base change swaps the sixth amino acid of beta globin from glutamate to valine; and a **nonsense mutation** turns a sense codon into an early stop codon, truncating the protein. **Insertions** and **deletions** add or remove nucleotides, and when the number added or removed is not a multiple of three, the change is a **frameshift mutation** that shifts the reading frame and scrambles every codon downstream. Somatic mutations affect only the individual, while **germ line** mutations pass to offspring. Most mutations are neutral or harmful, but a rare beneficial one can spread through a population by natural selection.

> **Common Mistake:** Inserting or deleting a single nucleotide is not a small change. It shifts the reading frame for every codon downstream, which is why frameshift mutations are usually far more damaging than a single letter swap.

#### ELI-10

Think of the genetic message as a long sentence typed on a typewriter. A single letter can be swapped for another letter, which may change one word or leave the meaning unchanged. Deleting a single letter is far worse, because every word after it shifts over and the whole sentence becomes nonsense. Most of these changes are neutral or harmful, and very rarely one turns out helpful.

### Operons

**Operons** are clusters of related genes plus the switches that control them, the main way bacteria regulate gene expression. A typical operon contains a promoter, an **operator** where a regulatory protein can bind, and **structural genes** transcribed together as one message. The **lac operon** of the bacterium Escherichia coli is inducible and usually switched off: a **repressor** protein sits on the operator and blocks transcription. When **lactose** is available, a molecule derived from it acts as an **inducer**, binding the repressor so the genes for digesting lactose can be transcribed. The **trp operon** is the mirror image: it is repressible and normally switched on to build the amino acid **tryptophan**, but when tryptophan is plentiful it acts as a **corepressor**, binding the repressor and switching the operon off.

#### ELI-10

Think of a kitchen appliance with a switch, like an oven. The switch controls a whole set of tools at once, so the cook does not have to turn on each tool separately. In bacteria, one switch can control a whole set of genes that work together, and the switch flips on or off depending on what the cell needs. When a certain food is present, the genes that digest it turn on, and when it is gone, they turn off.

### Epigenetics

**Epigenetics** is the study of heritable changes in gene activity that do not change the DNA sequence itself. **DNA methylation** attaches methyl groups to cytosine bases, usually in promoters, and heavily methylated genes are typically switched off, so methylation is a common way to silence genes. **Histone modification** changes the proteins that DNA wraps around: **histone acetylation** loosens the packing and tends to activate genes, while other marks tighten the packing and tend to silence them. The marks are maintained when cells divide, which is how a liver cell stays a liver cell and how **X chromosome inactivation** silences one X chromosome copy in female mammals. Epigenetic marks also respond to diet and stress, which is one reason identical twins diverge in health as they age.

#### ELI-10

Think of a book where some pages are permanently taped shut, even though the words on them are still printed. The tape is not part of the words; it is an extra mark on top of them. That mark can be added or removed by the cell, and sometimes it gets passed to the next copy of the book. So two books with identical words can read very differently.

> **High-Yield:**
> - Replication is semiconservative, and new strands always grow in the 5 prime to 3 prime direction.
> - Transcription copies the template strand into RNA, and processing adds a cap and tail and splices out introns.
> - Translation reads codons three bases at a time, starting at AUG and stopping at UAA, UAG, or UGA.
> - Operons and epigenetic marks tune gene expression without rewriting the DNA sequence.

### Quick Review

- DNA replication is semiconservative; helicase unwinds, primase primes, DNA polymerase builds new strands in the 5 prime to 3 prime direction, and ligase seals the lagging strand.
- Transcription copies the template strand into mRNA, and processing adds a 5 prime cap and poly-A tail and splices out introns.
- Translation reads codons three bases at a time on the ribosome, with tRNAs delivering amino acids until a stop codon triggers release.
- The genetic code is a triplet code with 64 codons, 61 sense codons, the start codon AUG, and the stop codons UAA, UAG, and UGA.
- Mutations include silent, missense, and nonsense substitutions plus frameshift insertions and deletions.
- The lac operon is inducible and the trp operon is repressible, and both rely on a repressor protein at the operator.
- Epigenetic marks such as DNA methylation and histone modification change gene activity without changing the DNA sequence.

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
