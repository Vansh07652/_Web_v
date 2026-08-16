---
id: genetics-genomics-and-bioinformatics
title: "Genomics And Bioinformatics"
slug: genomics-and-bioinformatics
subject: genetics
subjectName: "Genetics"
contentType: note
lesson: genomics-and-bioinformatics
lessonNumber: 14
description: "Study notes covering Genomics And Bioinformatics." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - genomics
  - bioinformatics
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-2b0a36e8d3619d55"
lastReviewed:
version: 1.0.0
---

# Genomics And Bioinformatics

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

Genomics is the study of whole genomes, and bioinformatics is the computational discipline that makes genome scale questions answerable. The chapter moves from single gene views to genome wide organization and evolution, then to the medical and social uses of genome data, including pharmacogenomics and its ethical debates.

### Genome Size and the C Value Paradox

Genome size is the total amount of DNA in a genome, in **megabases** (Mb) or **gigabases** (Gb). The **C value** is the DNA content of a haploid genome, and the **C value paradox** is that genome size does not track organismal complexity. Humans carry roughly 3.2 Gb, an onion about 16 Gb, the marbled lungfish approaches 130 Gb, and the single celled yeast *Saccharomyces cerevisiae* fits in 12 Mb. The paradox resolves through **noncoding DNA**: only about 1.5 percent of the human genome codes for protein, and polyploidy, transposable element content, and weak selection against extra DNA in small populations also contribute. Gene number is even less predictable: humans carry about 20,000 protein coding genes.

| Organism | Approximate genome size | Notable contribution |
| --- | --- | --- |
| Escherichia coli | 4.6 Mb | Lac operon, DNA replication machinery, restriction enzymes |
| Saccharomyces cerevisiae | 12 Mb | Cell cycle control, homologous recombination |
| Caenorhabditis elegans | 100 Mb | Programmed cell death, RNA interference |
| Drosophila melanogaster | 180 Mb | Linkage mapping, developmental genetics |
| Arabidopsis thaliana | 135 Mb | Plant development, flowering regulation |
| Danio rerio | 1.4 Gb | Vertebrate development, disease modeling |
| Xenopus laevis | 3.1 Gb | Cell cycle biochemistry, axis specification |
| Mus musculus | 2.7 Gb | Cancer models, immunology, imprinting |
| Homo sapiens | 3.2 Gb | Reference genome and human disease studies |

#### ELI-10

Think of a genome as the recipe book for a living thing. A giant salamander can have a book with forty times more pages than a human's, even though humans seem far more complicated. A bigger book does not mean a more complicated organism, so scientists cannot judge complexity by page count.

### Repetitive DNA Classes

Most of the human genome consists of **repetitive DNA**, sequences that appear many times. The two broad classes are **tandem repeats**, copies side by side, and **interspersed repeats**, copies scattered across the genome. Tandem repeats include **satellite DNA** (long arrays, often at centromeres), **minisatellites** (10 to 100 base pair units), and **microsatellites** (1 to 6 base pair units, widely used in forensics and linkage mapping). Interspersed repeats are mostly transposable element remnants: **LINEs**, **SINEs**, LTR retrotransposons, and DNA transposons. Repeat derived sequence accounts for roughly half of the human genome: LINEs about 21 percent, SINEs about 13 percent (Alu alone contributes over one million copies), LTR retrotransposons about 8 percent, and DNA transposons about 3 percent. Microsatellites mutate rapidly, making them useful genetic markers.

| Repeat class | Arrangement | Typical unit or length | Mechanism |
| --- | --- | --- | --- |
| Satellite DNA | Tandem arrays | Long arrays, often centromeric | Unequal crossing over |
| Minisatellites | Tandem | 10 to 100 base pair units | Unequal crossing over |
| Microsatellites | Tandem | 1 to 6 base pair units | Slipped strand mispairing |
| LINEs | Interspersed | About 6 kb full length | Retrotransposition |
| SINEs | Interspersed | About 100 to 300 base pairs | Retrotransposition |
| LTR retrotransposons | Interspersed | Several kb | Retrotransposition |
| DNA transposons | Interspersed | 1 to 3 kb | Cut and paste transposition |

#### ELI-10

Most pages of a genome recipe book are copies of the same few sentences. Some repeats sit in a row like beads on a string; others scatter across the book like stickers. These repeated sentences usually do not code for proteins, but they fill much of the book, so knowing them helps scientists read the genome correctly.

### Transposable Elements

**Transposable elements** are DNA sequences that can move within a genome, first discovered by Barbara McClintock in maize. **Class I transposable elements**, the **retrotransposons**, move by copy and paste: transcribed to RNA, reverse transcribed into DNA, and inserted elsewhere, so the element count grows. **Class II transposable elements**, the **DNA transposons**, move by cut and paste: a **transposase** enzyme excises the element and reinserts it, so the copy number stays roughly constant. Retrotransposon activity has expanded the human genome over evolutionary time, though most copies are now inactive. Insertions can disrupt genes, alter nearby gene expression, and create new regulatory sequences, making transposable elements a source of mutation and a raw material for evolution.

#### ELI-10

Transposable elements are like sticky notes that copy themselves and jump to a new page in the genome book. If a sticky note lands in the middle of an important sentence, it stops working. Most jumps are harmless, but some cause disease; think of them as traveling text that occasionally moves and makes a mess.

### Gene Families and Pseudogenes

A **gene family** is a set of homologous genes descended from a single ancestral gene by duplication; duplication then divergence lets copies acquire new functions. The globin family is the classic example: *HBA1* and *HBA2* at 16p13.3 encode alpha globin, while *HBB* at 11p15.4 encodes beta globin. A **pseudogene** is a nonfunctional copy of a gene: **nonprocessed pseudogenes** arise by duplication and accumulate inactivating mutations, while **processed pseudogenes** are messenger RNA molecules reverse transcribed and reinserted, so they lack introns and promoters. Pseudogenes behave as molecular fossils, revealing how quickly mutations accumulate.

#### ELI-10

A gene family is like a set of kitchen knives: the same design repeated in many sizes, each with a slightly different job. Over time, a working gene can be duplicated, and the copy can change to take on a new task. Some copies lose the ability to work and become broken leftovers called pseudogenes.

### Transcriptomics Proteomics and Metabolomics

**Transcriptomics** studies the complete set of RNA transcripts in a cell or tissue. **RNA sequencing** quantifies transcript levels genome wide and reveals the alternative isoforms produced by splicing. **Proteomics** studies the complete protein complement: because of **post translational modification** and protein turnover, protein levels do not perfectly mirror messenger RNA levels, so mass spectrometry adds information transcript counts miss. **Metabolomics** catalogs the small molecule metabolites of a cell, the downstream products of enzyme activity.

#### ELI-10

Transcriptomics reads the parts of the genome recipe book that the cell is using right now. A recipe book lists every possible dish, but a cook only opens the pages needed today. Counting which pages are open tells scientists what the cell is doing; two cell types can open different pages even with the same book.

### Comparative Genomics and Synteny

**Comparative genomics** compares genomes across species to find conserved and diverged regions. **Synteny** is the conservation of gene order between genomes: when two species keep the same block of genes in the same order, that block usually descends from a common ancestor, and inversions and translocations mark the breakpoints of that history. Comparisons also distinguish **orthologs** from **paralogs**: orthologs descend from an ancestral gene through speciation; paralogs arise by duplication within a genome. Highly conserved noncoding regions are often functional, pointing to enhancers.

#### ELI-10

Comparative genomics is like comparing the same recipe book printed in two editions. Some sentences appear in the same order in both books, and that shared order is called synteny. When two species keep the same order for millions of years, those sentences matter, while differences tell what changed during evolution.

### Molecular Phylogenetics

**Molecular phylogenetics** reconstructs evolutionary relationships from DNA or protein sequences. The **molecular clock** is the observation that neutral substitutions accumulate at a roughly constant rate, allowing divergence times to be estimated from sequence differences. Trees are built by **maximum parsimony** (fewest changes), distance methods, or **maximum likelihood** and Bayesian approaches using explicit models of sequence evolution. A **clade**, or monophyletic group, contains an ancestor and all its descendants, and **bootstrap** values measure how strongly the data support each branch.

> **Common Mistake:** Reading the order of taxa along the tips of a phylogenetic tree as an evolutionary ranking. Branches can be rotated at any node without changing the relationships, so a taxon listed on the left is not older or more primitive than one on the right. Read the tree by nodes: taxa sharing the most recent node are the closest relatives.

#### ELI-10

Molecular phylogenetics builds a family tree of species by comparing letters in their DNA. Small differences show how long ago two species shared a common ancestor. The tree is drawn like a branching family chart, so reading it tells who is related to whom and when their lines split.

### Sequence Alignment and BLAST Logic

**Sequence alignment** arranges two or more sequences so that homologous positions line up. **Global alignment** aligns whole sequences end to end; **local alignment** finds the best matching internal region, suiting divergent sequences that share only a domain. Alignments introduce **gaps** for insertions and deletions (indels), scoring matches, mismatches, and gap penalties. **Percent identity** is the fraction of aligned positions that match. **BLAST** (Basic Local Alignment Search Tool) searches a query against a database with a heuristic that seeds and extends short exact matches, trading sensitivity for speed. Hits are ranked by score and by the **E value**, the expected number of chance matches in a database of that size; a smaller E value means a more significant hit.

#### ELI-10

Sequence alignment is like lining up two strings of beads to find where the beads match. You can slide the strings and leave gaps so that matching beads line up. BLAST is a fast tool that searches a huge library of bead strings for the most similar ones, and the score tells how alike they are.

### Genome Browsers and Annotation

A **genome browser** is a web application that displays a genomic region as aligned layers, called **tracks**, covering sequence, genes, repeats, regulatory marks, and variation. **Annotation** assigns biological meaning to sequence: predicting genes with ab initio algorithms plus evidence from RNA and protein data, mapping exons and introns, and labeling regulatory regions. Repeat masking keeps repetitive sequence from confusing alignments and gene prediction.

#### ELI-10

A genome browser is like a map app for the genome. You can zoom from a whole chromosome down to a single letter of DNA, and different layers, called tracks, show genes, repeats, and regulatory signals on the same map. Scientists can examine one small region with all the information stacked together.

### The ENCODE Project

The **ENCODE project** (Encyclopedia of DNA Elements) catalogs the functional elements of the human genome. ENCODE assayed biochemical activity across many cell types: transcription by RNA sequencing, transcription factor binding and histone modification by ChIP seq, open chromatin by DNase and ATAC methods, and DNA methylation. A central finding announced in 2012 was that a large fraction of the genome shows biochemical activity in at least one cell type, supporting the debated claim that most of the genome is functional, since biochemical activity is not biological function. ENCODE also showed that variants associated with common diseases in **genome wide association studies** are enriched in regulatory regions rather than protein coding exons.

#### ELI-10

The ENCODE project is like a team that covered the human genome book with sticky notes. Before the project, most of the book was blank pages, and the team found that a large share of the genome shows some biochemical activity, even outside the genes. Their notes gave scientists many new places to look when studying disease.

### Microbiome Sequencing

The **microbiome** is the community of microorganisms living in a habitat such as the human gut or skin. **Microbiome sequencing** studies these communities at the DNA level. In **16S rRNA amplicon sequencing**, the conserved 16S ribosomal RNA gene is amplified and sequenced; its variable regions distinguish taxa, giving a census without culturing. **Shotgun metagenomics** sequences all the DNA in a sample, providing both taxonomy and the functional gene content of the community. The Human Microbiome Project found that each body site has a characteristic community that differs between individuals. Associations between microbiome composition and disease are abundant, but causation is hard to demonstrate because the microbiome changes with health.

#### ELI-10

The microbiome is the community of tiny organisms living on and inside us; microbiome sequencing reads the DNA of the whole community at once instead of one germ at a time. It is like counting every species in a forest by listening to all the birds at once rather than following one bird. The results show that the community is usually far more diverse than anyone expected.

### Personalized Medicine and Pharmacogenomics

**Personalized medicine**, also called precision medicine, tailors prevention and treatment to an individual's genetic makeup. **Pharmacogenomics** studies how genetic variation alters drug metabolism and response. The drug metabolizing enzyme **CYP2D6** (cytochrome P450 2D6, chromosome 22q13.2) metabolizes many drugs: slow metabolizers build up higher drug levels and more side effects at standard doses, while ultrarapid metabolizers clear drugs so quickly that standard doses may not work. **TPMT** (thiopurine methyltransferase, chromosome 6p22.3) metabolizes thiopurine drugs; low TPMT activity allows toxic metabolites to accumulate and cause severe bone marrow suppression, so genotype informed dosing is used in clinical practice. The field describes population level patterns, not a substitute for medical evaluation of an individual.

#### ELI-10

Pharmacogenomics studies how a person's genes affect the way the body handles medicine. Some people have enzymes that break down a drug quickly, others slowly, so the same dose can be too weak for one person and too strong for another. Matching the dose to the body's enzymes can make treatments safer and work better.

### Ethical Legal and Social Implications

Genome information is sensitive in ways most medical data are not: it is shared with biological relatives, stable across a lifetime, and readable without the person's knowledge. **Privacy** debates pit open data sharing, which makes research faster and more reliable, against strict control, because de-identified data can sometimes be re-identified and **incidental findings** raise questions about disclosure. **Discrimination** concerns focus on insurance and employment: the United States Genetic Information Nondiscrimination Act bars health insurance and employment discrimination based on genetic information, but not life or disability insurance. Some argue insurers need genetic risk information to price policies fairly; others argue people should not be penalized for inherited traits. **Enhancement** debates ask whether genetic knowledge should also be used to select or improve traits; supporters argue for reducing suffering and expanding choice, while critics warn of equity, consent, and slippery slope problems. Both sides rest on defensible values, so exam answers should present the competing positions rather than champion one.

#### ELI-10

Genome information is private information, like a diary written in DNA. Reading the genome can reveal things about a person's health, family, and ancestors. Because it is so personal, rules must balance research against privacy, and it should not be used to treat people unfairly.

### Worked Example 1

**Problem:** Two 120 nucleotide sequences are aligned with 6 mismatches and one 3 nucleotide insertion in the second sequence. What is the percent identity?

**Given:** Query length 120 nucleotides; 6 mismatches; a gap of 3 aligned positions.

**Plan:** Percent identity is matching aligned positions divided by total aligned length, times 100. Compute the aligned length, then subtract mismatches and gap positions.

**Solution:** Aligned length = 120 + 3 = 123 positions. Matching positions = 123 - 6 - 3 = 114. Percent identity = 114 / 123 x 100 = 92.7 percent.

**Answer:** 92.7 percent identity.

### Worked Example 2

**Problem:** A haploid genome contains 3.2 x 10^9 base pairs, each weighing 660 daltons (1 dalton = 1.66 x 10^-24 grams). Estimate the mass of one haploid genome in picograms (1 picogram = 10^-12 grams).

**Given:** 3.2 x 10^9 base pairs; 660 daltons per base pair.

**Plan:** Multiply the base pair count by the mass per base pair, convert daltons to grams, then grams to picograms.

**Solution:** Mass in daltons = 3.2 x 10^9 x 660 = 2.112 x 10^12 daltons. Mass in grams = 2.112 x 10^12 x 1.66 x 10^-24 = 3.5 x 10^-12 grams. Mass in picograms = 3.5 x 10^-12 / 10^-12 = 3.5 picograms.

**Answer:** About 3.5 picograms per haploid genome.

> **High-Yield:**
> - Retrotransposons copy and paste through an RNA intermediate, while DNA transposons cut and paste with transposase.
> - *HBA1*, *HBA2*, and *HBB* form the globin gene family; pseudogenes are nonfunctional copies of genes.
> - Percent identity is matches divided by aligned positions; small BLAST E values mean few chance matches.
> - *CYP2D6* and *TPMT* are drug metabolizing enzymes whose low activity raises drug exposure: the pharmacogenomics facts to know.

### Quick Review

- The C value paradox: genome size does not predict complexity or gene number, because noncoding and repeat derived DNA dominates large genomes.
- Repeat classes to distinguish: tandem (satellite, minisatellite, microsatellite) versus interspersed (LINE, SINE, LTR retrotransposon, DNA transposon).
- Retrotransposons copy and paste via an RNA intermediate; DNA transposons cut and paste with transposase.
- Globin gene family: *HBA1* and *HBA2* at 16p13.3, *HBB* at 11p15.4; pseudogenes are nonfunctional copies, processed or nonprocessed.
- Orthologs diverge by speciation, paralogs by duplication; synteny is conserved gene order across species.

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
