---
id: genetics-gene-regulation-eukaryotes-and-epigenetics
title: "Gene Regulation Eukaryotes And Epigenetics"
slug: gene-regulation-eukaryotes-and-epigenetics
subject: genetics
subjectName: "Genetics"
contentType: note
lesson: gene-regulation-eukaryotes-and-epigenetics
lessonNumber: 12
description: "Study notes covering Gene Regulation Eukaryotes And Epigenetics." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - gene
  - regulation
  - eukaryotes
  - epigenetics
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-292e7c16d15a10cd"
lastReviewed:
version: 1.0.0
---

# Gene Regulation Eukaryotes And Epigenetics

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

Eukaryotes regulate gene expression at many steps, much of it built into how DNA is packaged in the nucleus. **Epigenetics** is the study of heritable changes in gene expression that are not caused by changes in the DNA sequence. This chapter covers chromatin structure, histone modification, DNA methylation, long range regulatory elements, RNA silencing, and the parent of origin phenomena of imprinting and X inactivation.

### Chromatin Structure and Accessibility

Eukaryotic DNA is wrapped around **histone** proteins to form **nucleosomes**, the repeating unit of **chromatin**. Each nucleosome contains two copies each of the core histones H2A, H2B, H3, and H4, with about 147 base pairs of DNA coiled around the core. The first decision in gene regulation is accessibility: RNA polymerase cannot bind a promoter buried inside a nucleosome.

Chromatin has two broad states. **Euchromatin** is lightly packed, gene rich, and transcribed where it is needed, while **heterochromatin** is densely packed and silent. Constitutive heterochromatin is silent in every cell, whereas facultative heterochromatin is silent only in some cell types; an inactivated X chromosome is a classic example.

#### ELI-10
Imagine a long telephone cord crammed into a small box, wound around many spools that are nucleosomes, the protein cores DNA wraps around. When the cord is packed tightly, the words on it cannot be read, so the cell unwinds it only where it wants to read. Chromatin is the packaging that decides which parts of the DNA can be read.

### Histone Acetylation Methylation and the Histone Code

Histones carry chemical modifications on the tails that stick out of the nucleosome. **Histone acetylation** adds an acetyl group to lysine side chains, neutralizing their positive charge and loosening the histone DNA contact, which activates transcription. Histone acetyltransferases write the marks and **histone deacetylases** erase them; *HDAC1* at 1p35.3 encodes histone deacetylase 1, which removes acetyl groups from histones.

**Histone methylation** adds methyl groups to lysine or arginine residues, and its effect depends on the residue: H3K4 methylation marks active promoters, while H3K9 and H3K27 methylation marks repression. The **histone code** hypothesis proposes that combinations of modifications are read by effector proteins that direct transcription or silencing.

| Modification | Typical site | Effect on transcription |
| --- | --- | --- |
| Acetylation | H3 and H4 lysines | Activates |
| Methylation | H3K4 | Activates |
| Methylation | H3K9 | Represses |
| Methylation | H3K27 | Represses |
| Phosphorylation | H3 serine 10 | Activates |

> **Common Mistake:** Many students conclude that histone methylation always silences transcription. Methylation of H3K9 and H3K27 is repressive, but H3K4 methylation marks active promoters, so the residue determines the outcome.

#### ELI-10
Think of a notebook whose chapters each carry a sticky note. A note that says "read me" is like acetylation, which loosens the pages so the words are easy to see, and a note that says "keep shut" is like methylation that packs the pages closed. The histone code is the whole collection of sticky notes on the proteins that DNA wraps around.

### Chromatin Remodeling Complexes

**Chromatin remodeling complexes** are ATP powered machines that reposition nucleosomes so transcription factors and RNA polymerase can reach the DNA. A remodeler can slide a nucleosome along the DNA, eject it, or swap in a histone variant. Remodeling is targeted: sequence specific transcription factors recruit remodelers to particular promoters, so only intended genes are opened. Because one nucleosome blocks about 147 base pairs, moving it often decides whether a gene is silent or active.

#### ELI-10
A closet with clothes shoved in every direction is hard to search. Chromatin remodeling complexes are like helpers who rearrange the clothes so a particular shirt is easy to grab by sliding the spools of protein along the DNA or pushing them out of the way. This makes a specific gene easy to read. Without the helpers, the gene stays buried and silent.

### DNA Methylation and CpG Islands

**DNA methylation** in mammals modifies the cytosine of the doublet CpG. **CpG islands** are GC rich stretches at many gene promoters; in normal cells the islands at active genes are unmethylated, and promoter island methylation is strongly associated with silencing. **DNA methyltransferases** write the marks, and *DNMT1* at 19p13.2 encodes DNA methyltransferase 1, which maintains CpG methylation through cell division by copying the pattern from the parent strand onto the new strand, keeping a silenced promoter silent in every descendant cell.

Methylation acts directly, by blocking transcription factor binding, and indirectly, by recruiting proteins that compact chromatin. Context matters: promoter methylation represses, while methylation inside an active gene body is common and is not a silencing signal.

#### ELI-10
A crayon mark on a page can say "do not read this page". DNA methylation is a small chemical tag that a cell sticks onto the DNA itself, and a special enzyme copies these tags when a cell divides so both daughters remember which pages to skip. Tags placed in the right spots can switch a gene off for good.

### Enhancers Silencers Insulators and Looping

An **enhancer** is a DNA element that increases transcription of a target gene from a distance, sometimes over tens of thousands of base pairs. Activator proteins bound there contact the promoter through **looping** of the intervening DNA, delivering coactivators to the transcription machinery. A **silencer** works in reverse: repressors bound there reduce transcription, often by recruiting corepressors and chromatin closing enzymes. An **insulator** blocks an enhancer from acting on a promoter on the far side and can separate active from silent chromatin. Because loops form across large distances, elements far apart in the linear sequence can meet in three dimensional space.

#### ELI-10
A teacher speaks quietly, so the students in the back of the hall cannot hear. The school installs speakers that carry the voice to every seat, and an enhancer is like a distant speaker that boosts a gene far away. Looping is the wiring that connects them, and insulators are the walls that stop sound from leaking into the wrong room.

### Transcription Factor Domains Coactivators and Corepressors

Sequence specific **transcription factors** are modular proteins with a **DNA binding domain** that recognizes a short sequence motif and an activation or repression domain that recruits the machinery. Common DNA binding motifs include the helix turn helix, zinc finger, and basic leucine zipper, and a factor can activate one gene and repress another depending on the partners it recruits.

Many activators work through **coactivators**, complexes that include histone acetyltransferases and chromatin remodelers, which open the promoter. Repressors recruit **corepressors**, which often bring in histone deacetylases that close the chromatin; the product of *HDAC1* is one such enzyme. The factor binds the DNA sequence, while the cofactor binds the factor and modifies chromatin.

#### ELI-10
A scientist needs both a key card and a manager to open a locked laboratory. The transcription factor is the key card for a particular door, coactivators are the manager who holds it open, and corepressors are the guard who blocks it. Together they decide whether the laboratory opens for business.

### miRNA and siRNA and RNA Interference

**RNA interference** is a silencing pathway in which short RNA guides destroy or repress messenger RNAs. It was first characterized in the nematode *Caenorhabditis elegans*, a model organism with a transparent body and fixed cell lineage.

**miRNA** molecules are encoded in the genome, transcribed as long primary RNAs, processed into guides about 22 nucleotides long, and loaded into the RISC complex. A miRNA usually pairs imperfectly with the 3 prime untranslated region of a target mRNA, blocking translation or destabilizing the message, and one miRNA can regulate dozens of genes. **siRNA** arises from long double stranded RNA, usually viral or experimental in origin, pairs perfectly with its target, and directs mRNA cleavage.

| Feature | miRNA | siRNA |
| --- | --- | --- |
| Origin | Encoded in the genome | Long double stranded RNA |
| Pairing with target | Usually imperfect | Usually perfect |
| Main effect | Block translation, destabilize mRNA | Cleave the mRNA |

#### ELI-10
A delivery truck carries a message to a warehouse. If a scout arrives with a warning that matches the message, the workers throw the message away. A microRNA is a warning the cell makes itself, and a small interfering RNA is a similar warning from outside, and both make the workers destroy the message before it is used.

### Genomic Imprinting and Parent of Origin Effects

**Genomic imprinting** is an epigenetic phenomenon in which a gene is expressed from only one of the two parental chromosomes. The decision is set by an **imprint**, a methylation mark placed in the gamete of one parent and maintained in the offspring. The *H19* and *IGF2* genes at 11p15.5 are the classic pair: *H19* encodes an imprinted long noncoding RNA that regulates *IGF2*, and *IGF2* encodes insulin like growth factor 2, an imprinted growth factor. On the paternal chromosome the imprinting control region is methylated, silencing *H19* and allowing *IGF2* expression; on the maternal chromosome it is unmethylated, so the pattern is reversed.

Two imprinted genes at 15q11.2 underlie a famous pair of disorders. *SNRPN* encodes small nuclear ribonucleoprotein N, an RNA splicing factor expressed from the paternal chromosome; loss of paternal *SNRPN* function produces Prader Willi syndrome. *UBE3A* encodes ubiquitin protein ligase E3A, expressed from the maternal chromosome in brain neurons; loss of maternal *UBE3A* function produces Angelman syndrome. The same deletion therefore causes Angelman syndrome when maternal and Prader Willi syndrome when paternal.

Imprint marks are written in the germline, maintained through cell division, and erased and reset in the next generation, with *DNMT1* keeping the established marks in place.

| Gene | Location | Expressed copy | Protein product |
| --- | --- | --- | --- |
| H19 | 11p15.5 | Maternal | H19 long noncoding RNA |
| IGF2 | 11p15.5 | Paternal | insulin like growth factor 2 |
| SNRPN | 15q11.2 | Paternal | small nuclear ribonucleoprotein N |
| UBE3A | 15q11.2 | Maternal in brain neurons | ubiquitin protein ligase E3A |

> **Common Mistake:** Students frequently attribute Angelman syndrome to a deletion on the paternal chromosome because both disorders map to 15q11.2. Angelman syndrome is loss of maternal *UBE3A* function, expressed from the maternal chromosome in the brain, while Prader Willi syndrome is loss of paternal *SNRPN* function. The parent of origin decides which disorder a 15q11.2 deletion produces.

#### ELI-10
Imagine two recipe books, one from your mother and one from your father. For a few special pages the body keeps only one book's version, and imprinting is the rule that says which one. If the only remaining page is damaged, the recipe cannot be made at all.

### X Inactivation as an Epigenetic Phenomenon

**X inactivation** silences most genes on one X chromosome in female cells, providing **dosage compensation** that equalizes X linked gene output between females and males. The choice of which X to silence is random in each early embryo cell and is then locked in, so every female is a **mosaic** of two cell populations. The *XIST* gene at Xq13.2 encodes the XIST long noncoding RNA, which coats the chromosome to be silenced and initiates X inactivation. The silenced chromosome is facultative heterochromatin, visible in most interphase cells as the **Barr body**.

The mosaic can be observed directly: a female heterozygous at an X linked locus expresses one allele in some cells and the other in others, usually in roughly equal proportions. X inactivation is cis limited: the coat spreads along one chromosome only.

#### ELI-10
A stereo system needs only one volume knob even though it comes with two. A female cell has two X chromosomes but needs only one, so each cell turns off one at random, sometimes the mother's copy and sometimes the father's. X inactivation is the cell's way of making sure only one X speaks.

### Transgenerational Epigenetic Inheritance

**Transgenerational epigenetic inheritance** is the passage of an epigenetic mark, and the expression state it creates, from parent to offspring through the gametes. Most somatic methylation marks are erased around fertilization, so marks acquired during a parent's lifetime rarely survive into the next generation. Imprints are the clearest example of a gametic mark that does survive and shapes parent of origin expression. Persistence of other marks across many generations is rare in mammals but is documented in model organisms, including RNA interference in *Caenorhabditis elegans*. Parent of origin effects in a pedigree are evidence for imprinting, not for a mark drifting across generations.

#### ELI-10
A note written in pencil can be copied and passed to a friend, who can copy it and pass it on. Epigenetic marks are like notes written on the DNA that survive when a new baby is made, although most are erased and rewritten. Transgenerational epigenetic inheritance means a trait can arrive with the note and not with a change in the letters of the DNA.

### Epigenetics in Cancer and Imprinting Disorders

Cancer cells carry two opposite epigenetic changes. **Global hypomethylation** destabilizes repetitive sequences and reactivates silent elements, while **promoter hypermethylation** at CpG islands silences tumor suppressor genes, reproducing a loss of function mutation. *TP53* at 17p13.1 encodes p53, a tumor suppressor in DNA damage response, cell cycle arrest, and apoptosis; *RB1* at 13q14.2 encodes the retinoblastoma protein, a cell cycle checkpoint; and *MLH1* at 3p22.2 encodes a DNA mismatch repair protein that promoter methylation can switch off in tumor cells.

Imprinting disorders add a parent of origin dimension. **Uniparental disomy** occurs when both copies of a chromosome come from one parent: two paternal copies of chromosome 15 leave no maternal *UBE3A*, producing Angelman syndrome, and two maternal copies leave no paternal *SNRPN*, producing Prader Willi syndrome. **Loss of imprinting** is also oncogenic: reactivating the silent copy of an imprinted growth factor such as *IGF2* doubles its dosage.

#### ELI-10
A city has guards who stop runaway cars, just as tumor suppressors are proteins that stop runaway cell growth. In cancer, some guards are fired, like a tumor suppressor switched off by a chemical tag, and the city can also lose its traffic signs, like the genome losing its usual tags. Epigenetic changes are a second way a cell can lose its safety rules without changing the letters of the DNA.

### Worked Example

**Problem:** A child has Angelman syndrome. Testing shows a deletion of 15q11.2 on one chromosome 15; the father carries no deletion. Which parent's chromosome 15 carries the deletion, and if the mother is a carrier with one deleted chromosome 15, what is the probability that the next child has Angelman syndrome?

**Given:** Angelman syndrome is a chromosomal disorder at 15q11.2 caused by loss of maternal *UBE3A* function. *UBE3A* is expressed only from the maternal chromosome in brain neurons.

**Plan:** Identify the parent who must supply the only functional copy of *UBE3A* in the brain. Then multiply the probability the mother transmits the deleted chromosome by the probability that such a child lacks all *UBE3A* activity.

**Solution:** In the brain the paternal copy of *UBE3A* is silent, so the only working copy is maternal. A child with the deletion on the maternal chromosome 15 has zero functional *UBE3A* and has Angelman syndrome, while a paternal deletion would leave the maternal copy working, so the deletion is maternal. The mother transmits each of her two chromosome 15 homologs with equal probability: 1/2 deleted and 1/2 intact. If the deleted homolog is transmitted, the paternal copy cannot compensate, so the probability is 1. Next child risk = 1/2 x 1 = 1/2 = 0.5 = 50 percent.

**Answer:** The deletion is on the maternal chromosome 15, and the probability that the next child has Angelman syndrome is 1/2, which is 0.5, or 50 percent.

> **High-Yield:**
> - Histone acetylation always loosens chromatin, while histone methylation activates or represses depending on the residue.
> - Promoter CpG hypermethylation silences genes, yet cancer cells also show global hypomethylation.
> - A 15q11.2 deletion causes Angelman syndrome when maternal and Prader Willi syndrome when paternal, because *UBE3A* is maternal and *SNRPN* paternal in expression.
> - *XIST* coats the X chromosome to be silenced, and random inactivation makes every female a mosaic.
> - *DNMT1* maintains CpG methylation through cell division, which is why silenced states persist in cell lineages.

### Quick Review

- Chromatin packaging controls access: euchromatin is open and transcribed, heterochromatin is compact and silent.
- Histone acetylation activates transcription; histone methylation is activating at H3K4 and repressive at H3K9 and H3K27.
- ATP driven remodeling complexes slide and eject nucleosomes to expose promoters.
- CpG islands at promoters are usually unmethylated; promoter hypermethylation silences genes, and *DNMT1* maintains the marks.
- Enhancers, silencers, and insulators act over long distances and are brought to the promoter by looping.
- miRNAs and siRNAs silence mRNAs through the RNA interference pathway characterized in *Caenorhabditis elegans*.
- Imprinting makes expression depend on parent of origin: Angelman syndrome is loss of maternal *UBE3A* function and Prader Willi syndrome is loss of paternal *SNRPN* function, both at 15q11.2.
- *XIST* initiates X inactivation, and cancer combines global hypomethylation with promoter hypermethylation of tumor suppressor genes.

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
