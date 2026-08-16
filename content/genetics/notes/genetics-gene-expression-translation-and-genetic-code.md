---
id: genetics-gene-expression-translation-and-genetic-code
title: "Gene Expression Translation And Genetic Code"
slug: gene-expression-translation-and-genetic-code
subject: genetics
subjectName: "Genetics"
contentType: note
lesson: gene-expression-translation-and-genetic-code
lessonNumber: 10
description: "Study notes covering Gene Expression Translation And Genetic Code." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - gene
  - expression
  - translation
  - genetic
  - code
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-853c578537fbeb4b"
lastReviewed:
version: 1.0.0
---

# Gene Expression Translation And Genetic Code

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

Translation converts the nucleotide sequence of a messenger RNA into the amino acid sequence of a protein, and the **genetic code** is the dictionary that connects the two. This chapter covers the properties of the code, the reading frames, the transfer RNAs and ribosomes that decode it, and the three phases of translation. It closes with post translational modification, chaperone assisted folding, and antibiotics that exploit differences between bacterial and human ribosomes.

### Properties of the Genetic Code Triplet Degenerate Nonoverlapping and Nearly Universal

A **codon** is a group of three nucleotides on messenger RNA that specifies one amino acid or a stop signal. With four bases, 4 x 4 x 4 = 64 codons exist, but proteins use only 20 amino acids: 61 sense codons and 3 **stop codons** (UAA, UAG, UGA). The code is **degenerate**: leucine has six codons (UUA, UUG, CUU, CUC, CUA, CUG), while methionine has only AUG and tryptophan has only UGG. The code is **nonoverlapping** and **nearly universal**, so a human gene such as *HBB* can be translated in bacteria. AUG is the **start codon** and encodes methionine, so translation begins at AUG and ends at a stop codon.

| Property | Statement | Consequence |
| --- | --- | --- |
| Triplet | Each codon is three nucleotides long | 4 x 4 x 4 = 64 codons for 20 amino acids |
| Degenerate | Most amino acids have more than one codon | 61 sense codons encode 20 amino acids |
| Nonoverlapping | Each nucleotide belongs to one codon | Insertions or deletions shift the reading frame |
| Nearly universal | Assignments are shared by nearly all organisms | Genes from one organism can be translated in another |
| Punctuated | Start and stop codons frame the message | AUG starts, UAA UAG or UGA stop |

#### ELI-10

Think of the genetic code as a recipe book written in three letter words. Each word is a codon that names one ingredient, an amino acid. Several words can name the same ingredient, which is why the code is called degenerate. Almost every living thing reads the same recipe book, so the code is nearly universal.

### Reading Frames

Because codons are read in consecutive groups of three, the same messenger RNA can be read in three different **reading frames**, each beginning one nucleotide later; the ribosome selects the productive frame by initiating at the AUG start codon. Consider mRNA 5' AUG GCA UUU GGG UGA 3'. From the first nucleotide it gives Met Ala Phe Gly followed by a stop; from the second, mRNA 5' UGG CAU UUG GGU 3' gives Trp His Leu Gly; from the third, mRNA 5' GGC AUU UGG GUG 3' gives Gly Ile Trp Val, leaving two bases and one base at the 3' end. A single nucleotide insertion or deletion shifts every downstream codon into a new frame, a **frameshift** that usually creates a premature stop codon and a truncated protein.

#### ELI-10

A sentence written with no spaces between its letters can be read three ways if you start one letter later each time. Each starting point is one reading frame, and only one starting point usually makes a working protein. The ribosome finds the right frame by starting at AUG.

### Codon Anticodon Pairing

The bridge between the code and the amino acid is the **transfer RNA**. Each transfer RNA carries an **anticodon**, three nucleotides that pair antiparallel with the codon, so the codon 5' AUG 3' is matched by the anticodon 3' UAC 5' with standard pairing: A pairs with U and G pairs with C. Every transfer RNA is linked at its 3' end to the amino acid its codons specify: the transfer RNA with the anticodon 3' AAA 5' reads the codon 5' UUU 3' and carries phenylalanine. Because the code is degenerate, one transfer RNA can serve several codons, the basis of the wobble hypothesis below.

> **Common Mistake:** A tRNA with the anticodon 3' UAC 5' is often translated directly as if UAC were a codon, giving tyrosine. The anticodon pairs antiparallel with the codon, so 3' UAC 5' pairs with 5' AUG 3', which encodes methionine. Always convert the anticodon to the complementary codon before consulting the codon table.

#### ELI-10

A codon is like one half of a zipper. The other half, called the anticodon, sits on a small carrier called transfer RNA, which brings an amino acid. The two halves snap together only when their letters match, and each carrier brings the amino acid its letters call for.

### The Wobble Hypothesis

The **wobble hypothesis** explains how one transfer RNA can read more than one codon. The first two nucleotides of the codon pair strictly with the anticodon, but the third nucleotide of the codon, the **wobble position**, pairs loosely with the first nucleotide of the anticodon. In wobble, G in the anticodon can pair with U as well as C in the codon, U can pair with A or G, and inosine can pair with A, C, or U. Roughly 32 transfer RNA species can therefore decode all 61 sense codons; valine, for example, is encoded by GUU, GUC, GUA, and GUG, readable by a single transfer RNA. Wobble is why many third position mutations are silent.

> **Common Mistake:** Wobble is frequently placed at the first position of the codon. Wobble is restricted to the third nucleotide of the codon, which pairs with the first nucleotide of the anticodon; the first two positions are read strictly. Applying wobble to the first codon position gives wrong predictions.

#### ELI-10

Think of the third letter of a codon as a slightly loose buttonhole. A button that fits one loose buttonhole can sometimes fit a neighboring one as well, so one transfer RNA can match more than one codon. Cells use this trick to get by with fewer transfer RNAs than there are codons.

### Ribosome Structure and Subunits

The **ribosome** is the machine that carries out translation, built from **ribosomal RNA** and proteins arranged into a small and a large subunit. In bacteria the complete 70S ribosome is made of the 30S small subunit and the 50S large subunit; in eukaryotic cytoplasm the 80S ribosome is made of the 40S and 60S subunits. The small subunit decodes the messenger RNA; the large subunit carries the **peptidyl transferase center**, which forms peptide bonds, and the **exit tunnel** through which the growing polypeptide leaves. Three sites span the subunits: the **A site** where an aminoacyl transfer RNA enters, the **P site** where the growing chain is held, and the **E site** where the emptied transfer RNA exits.

#### ELI-10

A ribosome is a small factory machine with two big parts. In bacteria, one part is small and one is large, and they clamp around the messenger RNA and snap amino acids together into a chain. When the chain is finished, the two parts open up and let it go.

### Aminoacyl tRNA Synthetases and tRNA Charging

An **aminoacyl tRNA synthetase** attaches the correct amino acid to its cognate transfer RNA, a process called **tRNA charging**. The amino acid is activated by ATP to form aminoacyl AMP and then transferred to the 3' end of the transfer RNA; one synthetase exists for each of the 20 amino acids. Each synthetase recognizes its substrates through the anticodon and other identity elements, and several proofread mischarges, holding the error rate near 1 in 10,000. Because the synthetase sets this match, the transfer RNA with anticodon 3' UAC 5' always carries methionine for the codon 5' AUG 3'. Mitochondria run their own system: *MT-TL1* encodes the mitochondrial tRNA for leucine, and variants in it cause MELAS, with stroke like episodes and lactic acidosis.

#### ELI-10

An aminoacyl tRNA synthetase is like a careful mail clerk. Each transfer RNA is an envelope with an address, and the clerk attaches exactly the right amino acid to each envelope, making about one mistake in ten thousand tries. If the clerk made mistakes often, letters would reach the wrong houses and proteins would be built wrong.

### Initiation Elongation and Termination

Translation proceeds in three phases. In **initiation**, the small subunit binds the messenger RNA near the start codon, the initiator transfer RNA carrying methionine pairs with AUG in the P site, and the large subunit joins; bacteria use the Shine Dalgarno sequence, eukaryotes scan from the 5' end. In **elongation**, aminoacyl transfer RNAs enter the A site matched to each codon, the peptidyl transferase center forms the peptide bond, and **translocation** moves the ribosome three nucleotides down the message while the empty transfer RNA leaves through the E site. In **termination**, a stop codon (UAA, UAG, or UGA) reaches the A site and the finished polypeptide is released. Initiation is a control point: the protein product of *FMR1*, FMRP, regulates translation in neurons, and CGG repeat expansion silencing *FMR1* causes fragile X syndrome.

#### ELI-10

Making a protein is like a train ride along the messenger RNA track. The ribosome engine climbs aboard at the start codon, moves three letters at a time, and adds one amino acid at each stop. When it reaches a stop codon, the engine leaves the track and the finished chain is released.

### Release Factors

**Release factors** are the proteins that read the stop codons. In bacteria, release factor 1 recognizes UAA and UAG, release factor 2 recognizes UAA and UGA, and release factor 3 is a GTPase that helps the factor leave; the class 1 factors enter the A site by mimicking a transfer RNA and cause the growing chain to be transferred to water, releasing the polypeptide. Eukaryotes use a single release factor for all three stop codons. Because stops are read by proteins rather than transfer RNAs, a premature stop codon truncates the protein; premature stops in *HBB* reduce beta globin synthesis in beta thalassemia.

#### ELI-10

When the ribosome reaches a stop codon, no transfer RNA can match those three letters. Instead, a release factor protein arrives, like a worker at the finish line of an assembly line, and makes the new protein let go of the ribosome. The protein is then free to do its job in the cell.

### Polysomes

As the first ribosome moves down the message, the 5' end frees, so more ribosomes can initiate and follow. A messenger RNA bound by many ribosomes is a **polysome**, or polyribosome; every ribosome reads the same message in the same frame, each producing a complete copy of the protein. Polysomes let a cell make many copies of a protein quickly from a single transcript.

#### ELI-10

A polyribosome is like several buses driving along the same highway at the same time. Each bus is a ribosome reading the same message, so many copies of the protein are made from one message. The buses start at the same place and follow one another, so a cell makes many copies of one protein very quickly.

### Post Translational Modification

Many proteins are inactive the moment the ribosome releases them. **Post translational modification** is the sum of changes made after synthesis; these changes can activate a protein, localize it, or mark it for destruction. Newly made proteins often lose the initiator methionine, signal sequences are clipped during transport, and precursors such as insulin are cleaved into their mature form. Covalent additions are widespread: **phosphorylation** adds a phosphate group, **glycosylation** attaches sugars that direct proteins to secretion or the cell surface, and **ubiquitination** tags proteins for degradation.

#### ELI-10

Making a protein is like baking a plain cake. Before the cake is served, the cook adds frosting, a cherry, and a candle, and cells make similar finishing touches by cutting proteins and adding chemical groups. These finishing touches decide where the protein goes and what it can do.

### Chaperones and Folding

A protein works only if it folds into its native shape, and folding begins while the chain is still being made. **Chaperones** bind unfolded or misfolded intermediates and help them reach the native structure without becoming part of it; many are **heat shock proteins** whose levels rise after stress. The Hsp70 and Hsp60 families use cycles of ATP binding and hydrolysis. When folding fails, the misfolded protein is tagged with ubiquitin and degraded. In cystic fibrosis, the *CFTR* gene encodes the CFTR chloride channel, and the variant deltaF508 deletes one phenylalanine so the channel misfolds and is degraded before reaching the cell surface. Even a single amino acid change can matter, as in sickle cell disease, where the Glu6Val substitution in beta globin makes hemoglobin polymerize when oxygen is low.

#### ELI-10

A long protein chain is like a pile of string that could easily tangle. Chaperone proteins act like careful hands that guide the string into a neat, useful ball, and without them many proteins would fold wrong and stop working. Cells destroy misfolded proteins that cannot be fixed.

### Antibiotics That Target Translation and Where They Act

Many **antibiotics** kill bacteria by blocking translation, and their selectivity comes from the difference between the bacterial 70S ribosome and the eukaryotic 80S ribosome. **Streptomycin** binds the 30S subunit and causes misreading of codons. **Tetracycline** binds the 30S subunit and blocks aminoacyl transfer RNA from entering the A site. **Chloramphenicol** inhibits the peptidyl transferase center on the 50S subunit. **Erythromycin** binds the exit tunnel of the 50S subunit and blocks translocation. **Puromycin** mimics the 3' end of an aminoacyl transfer RNA, enters the A site, and prematurely releases the incomplete polypeptide. Because mitochondrial ribosomes resemble bacterial ones, some of these drugs inhibit mitochondrial translation.

| Antibiotic | Ribosomal target | Step blocked |
| --- | --- | --- |
| Streptomycin | 30S small subunit | Causes misreading of codons |
| Tetracycline | 30S small subunit | Blocks aminoacyl tRNA entry to the A site |
| Chloramphenicol | 50S large subunit | Inhibits the peptidyl transferase center |
| Erythromycin | 50S large subunit | Blocks the exit tunnel and translocation |
| Puromycin | A site | Mimics aminoacyl tRNA, causes premature release |

#### ELI-10

Some medicines work by sneaking into bacteria and jamming their protein making machines. Each of these medicines, called antibiotics, jams a different part of the machine, and a jammed machine stops the bacteria from making the proteins they need to survive. Human cells have slightly different machines, which is why these medicines are mostly safe for us.

### Worked Example Translating an mRNA

**Problem:** Translate the messenger RNA and report the amino acid sequence and peptide length: mRNA 5' AUG GCA UUC CUG GAA CCA GGG AAA UGA 3'.

**Given:** The message is read 5' to 3' in nonoverlapping triplets from the AUG start codon; AUG encodes methionine and UGA is a stop codon.

**Plan:** Split the message into codons from the 5' end, look up each codon in the codon table, and stop at the first stop codon.

**Solution:** The codons are AUG, GCA, UUC, CUG, GAA, CCA, GGG, AAA, and UGA. From the codon table, AUG is methionine, GCA is alanine, UUC is phenylalanine, CUG is leucine, GAA is glutamic acid, CCA is proline, GGG is glycine, AAA is lysine, and UGA is stop. The message is 27 nucleotides long, and 27 / 3 = 9 codons; 8 encode amino acids and 1 is the stop codon, so the peptide is Met Ala Phe Leu Glu Pro Gly Lys.

**Answer:** The peptide is Met Ala Phe Leu Glu Pro Gly Lys, which is 8 amino acids long.

### Worked Example Counting Synonymous Codons

**Problem:** How many codons encode leucine, and what fraction of the 64 codons do they represent?

**Given:** The codon table lists six leucine codons: UUA, UUG, CUU, CUC, CUA, and CUG.

**Plan:** Count the leucine codons in each position family and add them, then divide the total by 64.

**Solution:** The U family contributes 2 codons (UUA, UUG) and the C family contributes 4 (CUU, CUC, CUA, CUG), so 2 + 4 = 6 codons encode leucine. As a fraction of all codons, 6 / 64 = 3 / 32, about 9.4 percent.

**Answer:** Leucine is encoded by 6 codons, which is 3/32 of the 64 codons, about 9.4 percent.

> **High-Yield:**
> - The code is read as nonoverlapping triplets from the AUG start codon, which encodes methionine, until the first stop codon in the same frame.
> - Wobble is confined to the third position of the codon, so the first two positions determine the amino acid in most codon families.
> - Antibiotic selectivity rests on the 70S versus 80S difference: streptomycin and tetracycline target the 30S subunit, while chloramphenicol and erythromycin target the 50S subunit.
> - Aminoacyl tRNA synthetases set the specificity of the code at an error rate near 1 in 10,000.
> - A single nucleotide insertion or deletion shifts the reading frame and changes every downstream codon.

### Quick Review

- The genetic code is read as nonoverlapping triplets; 4 x 4 x 4 = 64 codons give 61 sense codons and 3 stop codons (UAA, UAG, UGA).
- The code is degenerate and nearly universal; AUG is the start codon and encodes methionine.
- Anticodons pair antiparallel with codons, and wobble at the third codon position lets one transfer RNA read several codons.
- Aminoacyl tRNA synthetases charge transfer RNAs with the correct amino acid at an error rate near 1 in 10,000.
- Translation runs through initiation, elongation, and termination; release factors, not transfer RNAs, read the stop codons.
- A polysome is one messenger RNA with many ribosomes, each making a complete protein.
- Chaperones assist folding, and post translational modifications activate and localize the finished proteins.
- Streptomycin, tetracycline, chloramphenicol, and erythromycin block bacterial 70S ribosomes at distinct steps.

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
