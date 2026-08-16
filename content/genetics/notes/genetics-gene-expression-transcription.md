---
id: genetics-gene-expression-transcription
title: "Gene Expression Transcription"
slug: gene-expression-transcription
subject: genetics
subjectName: "Genetics"
contentType: note
lesson: gene-expression-transcription
lessonNumber: 9
description: "Study notes covering Gene Expression Transcription." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - gene
  - expression
  - transcription
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-7ddab36bc22e08a3"
lastReviewed:
version: 1.0.0
---

# Gene Expression Transcription

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

**Transcription** copies the information in a gene from DNA into RNA, the first committed step of gene expression. This chapter covers the bacterial transcription machinery, the eukaryotic RNA polymerases and their factors, and the processing that converts a primary transcript into a finished messenger RNA.

### Central Dogma

RNA polymerase makes an RNA copy of a DNA gene; the **central dogma** states that DNA is transcribed into RNA, which is translated into protein. Only one of the two DNA strands is copied. The **template strand** is read 3' to 5', and the RNA grows 5' to 3'. The **coding strand** is not copied; its sequence matches the RNA with thymine (T) replaced by uracil (U), so the mRNA can be written from the coding strand directly. Exceptions exist: retroviruses use reverse transcriptase to copy RNA back into DNA.

#### ELI-10
Think of DNA as the master recipe book kept in a locked vault. Transcription copies one recipe onto a special piece of paper, and that copy is RNA. The copy can leave the vault. It is read later to build a meal, the protein.

### Prokaryotic RNA Polymerase and Sigma Factors

In Escherichia coli, RNA polymerase is multisubunit. The **core enzyme**, with two alpha, one beta, and one beta prime subunit, synthesizes RNA but cannot find promoters. A **sigma factor** joins the core to form the **holoenzyme**, which recognizes promoters and initiates transcription. The housekeeping sigma 70 reads most promoters; alternative sigma factors swap in under stress to redirect the enzyme to new gene sets. After initiation, sigma dissociates and the core elongates processively for thousands of nucleotides.

#### ELI-10
A delivery truck needs a driver and a key. The core enzyme is the engine, and the sigma factor is the key that tells the engine which address, a promoter, to go to. The company can swap keys to send the same truck to different jobs. Once rolling, the key falls out and the engine drives on.

### Promoter Consensus Sequences

A **promoter** is the DNA sequence at which RNA polymerase binds to start transcription. Bacterial promoters carry two conserved hexamers upstream of the +1 start site, the **-35 box** and the **-10 box** (Pribnow box), separated by about 17 base pairs. A **consensus sequence** records the most common nucleotide at each position; the E. coli elements on the coding strand are:

Coding strand 5' TTGACA 3' (-35 box consensus)
Coding strand 5' TATAAT 3' (-10 box consensus)

Closer matches bind tighter and transcribe more often. Transcription starts at +1, about 7 nucleotides downstream of the -10 box; the promoter itself is never transcribed. Some strong promoters add an **UP element** upstream of the -35 box. Eukaryotic RNA polymerase II promoters often contain a **TATA box**:

Coding strand 5' TATAAAA 3' (TATA box consensus)

recognized by the TATA binding protein; other genes use an initiator sequence instead.

#### ELI-10
A parking sign tells a driver where to stop. A promoter is a parking sign for RNA polymerase, a short pattern of letters in the DNA. The closer the sign matches the standard, the more often the polymerase stops to start working. The sign itself is not part of the road being copied.

> **Common Mistake:** The mRNA is not a copy of the template strand. The template strand is read 3' to 5' and supplies the complement; the mRNA matches the coding strand with U in place of T. Transcribing the template strand directly yields an RNA complementary to the correct message. The -35 box and the -10 box are never transcribed.

### Initiation Elongation and Rho Dependent and Independent Termination

Transcription proceeds in three phases. During **initiation**, the holoenzyme binds the promoter as a closed complex, melts about a dozen base pairs around the start site, and releases short abortive transcripts before escaping. During **elongation**, the polymerase moves along the template 3' to 5', maintaining a transcription bubble and adding ribonucleotides to the 3' end of the RNA, which is built 5' to 3'. **Rho independent termination** (intrinsic) occurs when the transcript folds into a GC-rich hairpin followed by a run of uracil residues; the weak hybrid at the U-rich region fails, and the transcript dissociates. **Rho dependent termination** needs the rho protein, a helicase that binds a rut site on the nascent RNA, translocates along it, and unwinds the hybrid to release the transcript.

#### ELI-10
Writing a long letter is like transcription. The writer checks the address, opens the paper, and writes in one direction only. At the end there are two ways to stop. The writing can form a sticky loop that pulls the page away, or a helper protein can grab the page and yank it free.

### Eukaryotic RNA Polymerases I II and III

Eukaryotes have three RNA polymerases. **RNA polymerase I** transcribes the large ribosomal RNA genes in the nucleolus. **RNA polymerase II** transcribes messenger RNAs and most small nuclear RNAs and microRNAs, and is therefore the focus of gene regulation. **RNA polymerase III** transcribes transfer RNAs, 5S ribosomal RNA, and U6 small nuclear RNA. The enzymes share core subunits but differ in gene targets and in sensitivity to the mushroom toxin alpha amanitin. Pol II has a carboxy-terminal domain (CTD) of heptad repeats whose phosphorylation coordinates the processing steps below.

| Polymerase | Genes transcribed | Cellular location | alpha amanitin sensitivity |
| --- | --- | --- | --- |
| RNA polymerase I | large ribosomal RNAs (28S, 18S, 5.8S) | nucleolus | resistant |
| RNA polymerase II | messenger RNA, small nuclear RNA, microRNA | nucleoplasm | highly sensitive |
| RNA polymerase III | transfer RNA, 5S rRNA, U6 snRNA | nucleoplasm | moderately sensitive |

#### ELI-10
A big factory has three machines. Machine I stamps out the parts of the ribosome, the cell's protein factory. Machine II stamps out the messenger tickets that carry instructions to the ribosomes. Machine III stamps out the adapter cards that bring building blocks to the ribosomes.

### General Transcription Factors and the Preinitiation Complex

RNA polymerase II cannot find a promoter alone. The **general transcription factors** assemble it on the DNA, and together they form the **preinitiation complex** (PIC). TFIID binds first; it contains the **TATA binding protein** (TBP). TFIIA and TFIIB join, then the Pol II-TFIIF complex, and TFIIE and TFIIH close the complex. **TFIIH** melts the DNA at the start site and phosphorylates the Pol II CTD, triggering promoter escape. The general factors are required for every Pol II transcript, so they set the baseline; gene specific regulation comes from the activators in the next section.

#### ELI-10
Setting up a complicated machine takes a team of workers. The general transcription factors are the team that sets the RNA polymerase machine up at the right spot. They check the sign, bolt the machine in place, and flip the switch that opens the DNA. Only after the machine starts running does the team leave.

### Enhancers Silencers and Mediator

**Enhancers** are DNA elements, often thousands of base pairs from the promoter, that bind **activator** proteins and sharply increase transcription. They work in either orientation and at any distance because the DNA loops, bringing activators to the promoter. The **mediator complex**, a large multisubunit assembly, sits between activators and polymerase and passes the signal to the preinitiation complex. **Silencers** are the mirror image: elements that bind **repressor** proteins and decrease transcription by the same looping. **Insulators** are boundary elements that block an enhancer from acting across the boundary, dividing the chromosome into independent domains.

#### ELI-10
A lamp is not switched on by a button bolted to its base. An enhancer is a remote control button that can sit far from the gene it controls. Pressing it sends a signal that loops the wiring to the lamp and switches it on; the mediator is the receiver that passes the signal along. A silencer is a button that switches the lamp off.

### Five Prime Capping

While the polymerase is still transcribing, the 5' end of the new RNA is modified. **Capping** attaches 7-methylguanosine to the first transcribed nucleotide through a 5' to 5' triphosphate linkage. The **5' cap** protects the RNA from 5' exonucleases, helps the first intron splice, is recognized by export escort proteins, and marks the message for the ribosome. Capping is cotranscriptional and restricted to RNA polymerase II transcripts.

#### ELI-10
The front page of a newspaper gets a plastic cover so it cannot be torn at the top. The 5' cap is a headpiece glued onto the front of the messenger RNA. It protects the message from being chewed up and tells the cell the message is complete and can be shipped out. A message without a cap is destroyed quickly.

### Three Prime Polyadenylation

At the 3' end of the pre-mRNA, cleavage and **polyadenylation** add a tail. The polyadenylation signal, pre-mRNA 5' AAUAAA 3', sits 10 to 30 nucleotides upstream of the cleavage site; a downstream GU-rich element positions the cleavage factors CPSF and CstF. The RNA is cut, and **poly(A) polymerase** adds 150 to 250 adenines with no template. The **poly(A) tail**, bound by poly(A) binding proteins, protects the 3' end and controls message lifetime; progressive shortening destabilizes the message. Histone mRNAs are the exception, ending in a stem loop instead.

#### ELI-10
A letter needs a signature at the end so the post office knows it is finished. The cell cuts the message at a marker near the end and glues a long string of A letters, the tail, onto the cut end. The tail is like a wax seal that keeps the back of the letter from unraveling. It also tells the cell how long the message should stay alive.

### Splicing and the Spliceosome

Most eukaryotic genes are interrupted by **introns**, noncoding segments transcribed but removed from the RNA, so **splicing** removes them and joins the **exons**. The signals are short: the 5' splice site begins with GU, the 3' splice site ends with AG, and a **branch point** adenine lies 20 to 50 nucleotides upstream of the 3' splice site, all in the pre-mRNA 5' to 3' orientation. The **spliceosome**, built from five small nuclear ribonucleoproteins (U1, U2, U4, U5, U6) and accessory proteins, performs two transesterification reactions: the branch point attacks the 5' splice site, forming a **lariat**, and the freed 5' exon attacks the 3' splice site, joining exons and releasing the intron. The gene *SNRPN* (15q11.2) encodes small nuclear ribonucleoprotein N, a splicing protein. Self-splicing group II introns are thought to be the spliceosome's ancestors.

#### ELI-10
A movie is shot with extra scenes that will not appear in the final cut. Splicing is the editing room that cuts out the extra scenes and glues the kept scenes together. The spliceosome is the editing machine, built from RNA clips and protein parts. The cut-out scenes form a loop like a lasso and are thrown away.

### Alternative Splicing

**Alternative splicing** produces multiple mRNAs from one gene by joining different exon combinations: cassette exon skipping, mutually exclusive exons, alternative 5' and 3' splice sites, and intron retention. The pattern depends on tissue and stage; splicing factors act as switches, so one gene can make a muscle version of a protein and a different version in the brain. Most human multi-exon genes are alternatively spliced, the largest source of protein diversity in humans. Mutations that destroy a splice site often cause disease, because the aberrant message fails to make functional protein.

#### ELI-10
One recipe book can make two different meals from the same pages. Alternative splicing is the editor choosing which pages to keep, so one gene can make a protein for muscle and a different version for the brain. The editor changes the cut depending on the tissue. One gene can hold instructions for several related proteins.

### RNA Editing

**RNA editing** changes the nucleotide sequence of an RNA after transcription, so the final message can differ from the DNA that encoded it. A cytidine deaminase converts cytidine to uridine, which can change a codon; in one well-known liver transcript, editing creates a stop codon, so the liver protein is shorter than the version made elsewhere. An adenosine deaminase converts adenosine to inosine, read as guanosine, changing the amino acid specified. In trypanosome mitochondria, guide RNAs direct insertion and deletion of uridines, sometimes altering more than half of a message.

#### ELI-10
A typed letter can be corrected with white-out after it leaves the computer. RNA editing is the cell fixing or changing letters after the RNA copy is made. The final message does not always match the original document exactly. Changing letters can make a different protein from the same gene.

### Noncoding RNA Classes

Only about 1 to 2 percent of the human genome codes for proteins, yet much more is transcribed into **noncoding RNA**, RNA that works as RNA rather than as a message. **Ribosomal RNA** and **transfer RNA** are the structural and adapter components of the protein-synthesizing machinery. **Small nuclear RNA** are spliceosome components; **small nucleolar RNA** guide ribosomal RNA modification. **MicroRNA** (about 22 nucleotides) and **small interfering RNA** silence target messages by base pairing; RNA interference was first dissected in Caenorhabditis elegans. **Long noncoding RNA** (over 200 nucleotides) include *XIST* (Xq13.2), which initiates X chromosome inactivation; *H19* (11p15.5), an imprinted RNA regulating *IGF2*; and *TERC* (3q26.2), the RNA component of telomerase that templates telomere repeats.

| Class | Length | Main job |
| --- | --- | --- |
| microRNA and siRNA | about 22 nucleotides | silence target messages |
| small nuclear RNA | short | spliceosome components |
| long noncoding RNA | over 200 nucleotides | regulate genes and chromosomes |

#### ELI-10
Most workers in a company never appear on the cover of the annual report. Noncoding RNAs are the many RNA molecules that do real jobs without ever becoming a protein. Some are parts of machines, some switch other messages off, and some mark a stretch of DNA like rulers. They are RNA that works, not RNA that is read.

### Worked Example Transcribing a Coding Strand

**Problem:** The coding strand of a short gene is 5' ATG GCA TAA 3'. Write the template strand and the messenger RNA, and determine how many amino acids the peptide contains.

**Given:** Coding strand 5' ATG GCA TAA 3'. Base pairing is A with T and G with C, and RNA uses uracil in place of thymine. From the codon table, AUG is the start codon for methionine and UAA is a stop codon.

**Plan:** Complement the coding strand antiparallel to get the template strand. Replace T with U to write the mRNA, group it into codons, and count the amino acids before the stop.

**Solution:** The complement of ATG GCA TAA is TAC CGT ATT, written antiparallel, so the template strand is 3' TAC CGT ATT 5'. The polymerase reads the template 3' to 5' and adds complementary ribonucleotides, giving mRNA 5' AUG GCA UAA 3'. Length check: 9 nucleotides = 3 codons. Reading the codons, AUG is methionine, GCA is alanine, and UAA is stop.

**Answer:** Template strand 3' TAC CGT ATT 5' and mRNA 5' AUG GCA UAA 3'; the peptide has 2 amino acids, methionine and alanine, followed by the stop codon.

### Worked Example Mature mRNA Length

**Problem:** A pre-mRNA is 2,000 nucleotides long and contains three introns of 400, 450, and 350 nucleotides. How long is the spliced message before capping and polyadenylation?

**Given:** Pre-mRNA length 2,000 nucleotides; intron lengths 400, 450, and 350 nucleotides.

**Plan:** Add the three intron lengths and subtract the total from the pre-mRNA length.

**Solution:** Total intron length = 400 + 450 + 350 = 1,200 nucleotides. Spliced mRNA = 2,000 - 1,200 = 800 nucleotides.

**Answer:** The spliced mRNA is 800 nucleotides long before the cap and the poly(A) tail are added.

> **High-Yield:**
> - Transcription always proceeds 5' to 3'; the polymerase reads the template strand 3' to 5', and the mRNA matches the coding strand with U for T.
> - The promoter is upstream of the start site and is never itself transcribed; transcription begins at +1.
> - Pol II makes mRNA, Pol I makes large ribosomal RNA, and Pol III makes transfer RNA and 5S rRNA; only Pol II transcripts receive the 5' cap.
> - Capping, splicing, and polyadenylation happen on the pre-mRNA as it is made; the poly(A) tail is added by an enzyme after cleavage, not copied from the DNA.

### Quick Review

- The central dogma: DNA is transcribed into RNA, which is translated into protein; the mRNA matches the coding strand with U in place of T.
- The bacterial holoenzyme is the core enzyme plus a sigma factor; sigma factors choose which promoters are read, and prokaryotic promoters have a -35 box (TTGACA) and a -10 box (TATAAT) on the coding strand.
- Termination is rho independent (a GC-rich hairpin plus a U run) or rho dependent (rho pulls the transcript off).
- Pol I makes large ribosomal RNA, Pol II makes mRNA, and Pol III makes transfer RNA and 5S rRNA; pre-mRNA receives a 5' cap, splicing, and a poly(A) tail.
- Alternative splicing, RNA editing, and noncoding RNAs such as *XIST*, *H19*, and *TERC* multiply what one gene can do.

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
