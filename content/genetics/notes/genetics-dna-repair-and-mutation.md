---
id: genetics-dna-repair-and-mutation
title: "Dna Repair And Mutation"
slug: dna-repair-and-mutation
subject: genetics
subjectName: "Genetics"
contentType: note
lesson: dna-repair-and-mutation
lessonNumber: 8
description: "Study notes covering Dna Repair And Mutation." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - dna
  - repair
  - mutation
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-e85f6294a0c821e0"
lastReviewed:
version: 1.0.0
---

# Dna Repair And Mutation

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

Mutations are heritable changes in the DNA sequence that arise when the machinery that copies and maintains DNA makes mistakes or when mutagens damage the genetic material. Cells defend the genome with layered repair pathways, each specialized for a particular class of damage, and when repair fails, the consequences can include cancer. This chapter classifies mutations, surveys the sources of DNA damage, and works through each repair pathway and its disease connections.

### Mutation Classification

A **mutation** is a heritable change in the nucleotide sequence of DNA. The simplest class is the **point mutation**, a change of a single base pair. A **silent mutation** changes a base but not the encoded amino acid, because the genetic code is degenerate: the mRNA codons GAA and GAG both encode glutamic acid. A **missense mutation** swaps one amino acid for another; in sickle cell disease a single base change turns the beta globin mRNA codon GAG (glutamic acid) into GUG (valine), the Glu6Val change. A **nonsense mutation** converts an amino acid codon into a stop codon and truncates the protein, as when UGG (tryptophan) becomes UGA (stop). A **frameshift mutation** is an **insertion** or a **deletion** of a number of bases not divisible by three, shifting the reading frame from the point of change onward. Beyond single base events, **duplication** copies a segment of DNA, **inversion** flips a segment end to end, and **translocation** moves a segment to a different chromosome.

| Mutation type | Base change | Consequence | Example |
| --- | --- | --- | --- |
| Silent | Base changes, amino acid unchanged | No effect on the protein | GAA to GAG, both glutamic acid |
| Missense | Amino acid swapped for another | Altered protein | GAG to GUG in beta globin (Glu6Val) |
| Nonsense | Amino acid codon becomes a stop | Truncated protein | UGG to UGA, tryptophan to stop |
| Frameshift | Insertion or deletion not a multiple of 3 | All downstream amino acids change | One base inserted near the start |

#### ELI-10
Think of a recipe written in a code where every three letters name one ingredient. Changing one letter can make the same ingredient, a different ingredient, or a sign to stop cooking. Adding or removing one letter makes every ingredient after that point read differently. These are the kinds of changes a cell calls mutations.

### Effect of Reading Frame

The **reading frame** is the grouping of nucleotides into consecutive triplets, set by the start codon AUG (methionine) and read in multiples of three. Consider the coding strand 5' ATG GAA TGC TAA 3', which encodes Met Glu Cys Stop. Inserting three nucleotides, such as GGA, gives 5' ATG GGA GAA TGC TAA 3' and adds one amino acid while preserving every other codon; inserting a single T gives the 13-base strand 5' ATG TGA ATG CTA A 3', shifting the frame so the second codon becomes the stop UGA and the protein collapses to a single methionine. Frameshift mutations therefore almost always destroy protein function, usually by premature truncation.

> **Common Mistake:** Calling every insertion or deletion a frameshift. Only insertions or deletions whose length is not a multiple of three shift the reading frame. An insertion of three nucleotides adds exactly one amino acid and leaves every other codon untouched, so it is not a frameshift.

#### ELI-10
A message is read in groups of three letters, like the sentence the cat ate the rat. If one letter is removed, every group after the missing letter turns into different words. If three extra letters are added, all the original groups survive and one new word appears. A gene works the same way, which is why one extra base can scramble a protein completely.

### Spontaneous versus Induced Mutation

**Spontaneous mutations** arise without any external influence, from errors during DNA copying and from the natural chemistry of DNA, including tautomeric shifts, depurination, and deamination. **Induced mutations** are caused by environmental agents called **mutagens**, including certain chemicals and radiation. The baseline mutation rate is low because repair systems correct most mistakes, but any cell that loses a repair pathway accumulates mutations at a much higher rate.

#### ELI-10
Some mistakes happen by themselves, like a tired writer typing the wrong letter. Other mistakes happen because something outside caused them, like a spilled drink smudging a page. Both kinds can change the meaning of a book, and the cell has repairers who fix most of them.

### Tautomeric Shifts and Depurination

A **tautomeric shift** is a temporary rearrangement of a base into a rare form with different hydrogen bonding partners. A shifted base pairs with the wrong partner during copying, so an A:T pair can become a G:C pair and the new sequence is fixed into the genome. **Depurination** is the loss of a purine (adenine or guanine) from the sugar phosphate backbone, leaving an empty site that repair usually fills with the correct base but sometimes with the wrong one. **Deamination** converts cytosine into uracil, a base foreign to DNA that is recognized and removed as damage.

#### ELI-10
DNA letters can occasionally change shape, like a sock turned inside out. A letter in its changed shape holds hands with the wrong partner letter. When that happens during copying, the new copy carries a different letter forever.

### Chemical and Radiation Mutagens

**Base analogs** resemble normal bases and are incorporated into DNA during copying and then pair incorrectly; 5-bromouracil usually behaves like thymine but sometimes pairs like cytosine, converting an A:T pair into a G:C pair. **Alkylating agents** donate methyl or ethyl groups to bases and change their pairing, while **intercalating agents** such as ethidium bromide slide between stacked bases and force extra bases in or out, creating frameshift mutations. **UV radiation** bonds adjacent pyrimidines into **pyrimidine dimers**, such as the thymine dimer, which kink the helix and block copying. **Ionizing radiation** can sever the DNA backbone directly; a **double strand break** cutting both strands is the most dangerous lesion.

#### ELI-10
Some chemicals are tricksters that look like DNA letters and sneak into the code. Once inside they pair with the wrong partner and the code changes. Sunlight glues nearby letters together, and strong radiation can snap the code in half. The cell has separate repair crews for each of these problems.

### The Ames Test

The **Ames test** is a bacterial screen that asks whether a chemical can cause mutations. A histidine-requiring Salmonella strain is plated on medium lacking histidine, with and without the test chemical, and only bacteria that acquire a **reversion** mutation restoring histidine synthesis can form colonies. Rat liver extract is added so that chemicals needing metabolic activation are detected. Many more revertant colonies with the chemical means it is a mutagen, and because most mutagens are carcinogens, the test is a fast first screen for cancer-causing potential.

#### ELI-10
Bacteria that cannot make their own histidine die when it is missing from their food. A chemical is dropped onto the plate, and bacteria that repair their DNA and make histidine again grow into visible spots. Many spots mean the chemical changed the bacterial DNA. This warns scientists that the chemical may also be dangerous to humans.

### Direct Repair

**Direct repair** reverses damage without cutting out any nucleotides. **Photolyase**, an enzyme that uses visible light, splits pyrimidine dimers back into individual bases, a process called **photoreactivation** that is present in bacteria and many other organisms. Alkylation of guanine is reversed by a methyltransferase that transfers the methyl group from the damaged base onto itself, restoring the guanine and sacrificing the enzyme. Direct repair handles only a few damage types, so cells rely on the excision pathways for everything else.

#### ELI-10
Some damage is fixed by erasing, not cutting. An enzyme called photolyase uses sunlight like an eraser and unglues letters that sunlight glued together. Another enzyme removes a chemical sticker from a letter by taking the sticker onto itself.

### Base Excision Repair

**Base excision repair (BER)** handles single damaged bases, such as uracil, oxidized bases, and the empty sites left by depurination. A **glycosylase** recognizes the damaged base and snips it out, leaving an **AP site** (apurinic or apyrimidinic site). An **AP endonuclease** cuts the sugar phosphate backbone at that site, a repair polymerase inserts the correct base, and DNA ligase seals the nick, replacing only one or a few nucleotides.

#### ELI-10
Imagine a brick wall with one bad brick. A worker pulls out just the bad brick and another worker puts a fresh one in its place. The wall is never taken apart, and one changed brick restores the whole wall. Base excision repair works exactly this way on a single damaged DNA letter.

### Nucleotide Excision Repair

**Nucleotide excision repair (NER)** removes bulky, helix-distorting lesions, especially pyrimidine dimers and large chemical adducts. The XPC and XPA proteins recognize the damage, the XPD helicase encoded by *ERCC2* unwinds the DNA around the lesion, and the ERCC1 endonuclease encoded by *ERCC1* helps cut the damaged strand on both sides, removing and replacing a stretch of roughly 25 to 30 nucleotides. Loss of NER causes **xeroderma pigmentosum**, an autosomal recessive disorder of extreme sensitivity to ultraviolet light with a very high risk of skin cancers, caused by defects in the *XPA*, *XPC*, *ERCC1*, and *ERCC2* genes.

#### ELI-10
Sometimes damage is a big sticky lump that bends the whole DNA ribbon. The cell cuts out the damaged section, like cutting a stain out of a page. Then it writes the correct letters fresh and glues the page back together. People whose cells cannot do this repair are badly harmed by sunlight.

### Mismatch Repair

**Mismatch repair (MMR)** corrects base mismatches and small loops created by copying errors. In Escherichia coli, the MutS protein encoded by *mutS* recognizes the mismatch, the MutL protein encoded by *mutL* connects it to the MutH endonuclease encoded by *mutH*, and MutH cuts the newly synthesized strand, which is unmethylated, so the wrong base is removed from the new strand and replaced using the parental strand as the template. Human cells use homologs of the same system, encoded by *MSH2*, *MSH6*, *MLH1*, and *PMS2*. Loss of MMR lets replication errors persist and drives the cancer risk of Lynch syndrome.

> **Common Mistake:** Thinking mismatch repair removes chemically damaged bases. MMR fixes mispaired bases and small loops left by copying errors; damaged bases such as uracil and thymine dimers are handled by base excision repair and nucleotide excision repair instead.

#### ELI-10
After a page is copied, a checker compares the copy with the original and finds the letters that were copied wrong. The checker also knows which page is old, so it fixes the new page instead of the old one. Mismatch repair is that checker, and it works right after copying.

### Homologous Recombination and Nonhomologous End Joining

A double strand break severs both strands of the helix and is the most dangerous DNA lesion. **Homologous recombination (HR)** repairs the break using an intact template, the sister chromatid present after replication, and is error free; the *BRCA1* and *BRCA2* gene products carry out homologous recombination repair of DNA. **Nonhomologous end joining (NHEJ)** ligates the broken ends directly, works in any phase of the cell cycle, and is error prone, often gaining or losing small insertions or deletions at the junction.

#### ELI-10
If a page is torn, one way to fix it is to copy the same text from a photocopy of the page and paste it in perfectly. That is homologous recombination, and it needs the photocopy to exist. The other way is to tape the torn edges together, which works anytime but may smudge a letter at the seam. That is nonhomologous end joining.

### DNA Damage Response

The **DNA damage response (DDR)** is the signaling network that detects damage, arrests the cell cycle, and organizes repair. The ATM protein encoded by *ATM* signals double strand breaks, the checkpoint kinase encoded by *CHEK2* activates the DNA damage checkpoint, and the p53 tumor suppressor encoded by *TP53* triggers cell cycle arrest and, when damage is overwhelming, apoptosis. When p53 function is lost, damaged cells keep dividing instead of arresting; *TP53* defects cause Li Fraumeni syndrome, an autosomal dominant condition with multiple cancers at young ages.

#### ELI-10
A cell has a fire alarm that rings when its DNA is hurt. The alarm stops the cell from copying itself until the repairs are done. If the damage is too big, the cell destroys itself so the damage is not passed on. A broken alarm is a big reason why cancer starts.

### Oncogenes Tumor Suppressors and Repair Gene Mutations in Cancer

An **oncogene** is a gene that drives growth when overactive; its normal version is a **proto-oncogene**, and gain-of-function mutations convert the two. Examples include *MYC*, a transcription factor for cell growth and proliferation, and the RAS GTPases *HRAS*, *KRAS*, and *NRAS*, which signal cell growth. A **tumor suppressor** restrains growth, and loss of function removes the brake; the **two-hit model** of retinoblastoma shows that both copies of a tumor suppressor such as *RB1* must be inactivated. **Repair gene mutations** act indirectly by raising the mutation rate: loss of mismatch repair in *MLH1* or *MSH2* underlies Lynch syndrome, with colorectal and endometrial cancers; loss of homologous recombination repair in *BRCA1* or *BRCA2* underlies hereditary breast and ovarian cancer syndrome; and loss of the p53 damage response in *TP53* underlies Li Fraumeni syndrome. Cells missing a repair pathway show a **mutator phenotype**, a greatly elevated mutation rate across the genome.

| Gene class | Normal role | Mutant effect | Examples |
| --- | --- | --- | --- |
| Oncogene | Promotes growth | Gain of function, growth unchecked | KRAS, NRAS, MYC |
| Tumor suppressor | Restrains growth | Loss of function, brake removed | RB1, TP53 |
| Repair gene | Fixes DNA damage | Mutation rate rises, cancer risk rises | MLH1, MSH2, BRCA1, BRCA2 |

#### ELI-10
A car has a gas pedal and a brake pedal. An oncogene change is a gas pedal stuck to the floor, so the cell speeds up all the time. A tumor suppressor change is a brake pedal that does not work. Cancer can start when either pedal is broken, and broken repair genes make both problems more likely.

### Worked Example

**Problem:** The coding strand of a small gene is 5' ATG GAA TGC TAA 3'. (a) A mutation inserts one T between the first and second codons. Write the mutant coding strand, translate its mRNA, and classify the mutation. (b) A separate mutation inserts GGA between the first and second codons. Write that mutant coding strand, translate it, and classify the mutation.

**Given:** The original coding strand has 4 codons in 12 nucleotides. Reference codons: AUG is methionine and the start codon, GAA is glutamic acid, UGC is cysteine, and UAA is a stop codon.

**Plan:** Write each mutant strand, replace T with U to get the mRNA, translate in groups of three, and classify each mutation by comparing with the original Met Glu Cys.

**Solution:** (a) Inserting one T gives the 13-base coding strand 5' ATG TGA ATG CTA A 3'. The mRNA is 5' AUG UGA AUG CUA 3', and the second codon, UGA, is a stop codon. The arithmetic: 12 plus 1 inserted equals 13 nucleotides, and the frame shifts at the insertion point, destroying the original codons. The protein is reduced from 3 amino acids to a single methionine, so this one-base insertion is a frameshift mutation. (b) Inserting GGA gives the 15-base coding strand 5' ATG GGA GAA TGC TAA 3', whose mRNA is 5' AUG GGA GAA UGC UAA 3'; 12 plus 3 equals 15 nucleotides, or 15 divided by 3 equals 5 codons, so the frame is preserved. Translation gives Met Gly Glu Cys, adding one glycine, so this is an in-frame insertion, not a frameshift.

**Answer:** Part (a): frameshift mutation, protein shrinks from 3 amino acids to 1 (Met). Part (b): in-frame insertion, protein becomes Met Gly Glu Cys with 4 amino acids.

> **High-Yield:**
> - A silent mutation leaves the amino acid unchanged, a nonsense mutation creates a stop codon, and only a non-multiple-of-three indel is a frameshift.
> - BER fixes single damaged bases, NER fixes bulky lesions such as thymine dimers, and MMR fixes replication mismatches, using the methylation mark to find the new strand.
> - Xeroderma pigmentosum is an autosomal recessive NER defect with extreme ultraviolet sensitivity and a high risk of skin cancers.
> - Double strand breaks are repaired error free by homologous recombination (*BRCA1*, *BRCA2*) or with errors by nonhomologous end joining.
> - Loss of p53, mismatch repair, or homologous recombination repair gives cells a mutator phenotype that fuels cancer.

### Quick Review

- Point mutations are silent, missense, or nonsense, depending on whether the amino acid is unchanged, swapped, or replaced by a stop codon.
- Only insertions or deletions not divisible by three are frameshifts; a three-nucleotide insertion is in frame.
- Spontaneous damage includes tautomeric shifts, depurination, and deamination; mutagens include base analogs, alkylating and intercalating agents, UV light, and ionizing radiation.
- The Ames test detects mutagens by reversion of a histidine-requiring Salmonella strain.
- Direct repair reverses damage in place, BER removes single damaged bases, NER excises bulky lesions such as pyrimidine dimers, and MMR fixes replication mismatches using the parental strand as the template.
- Double strand breaks are repaired by error-free homologous recombination (*BRCA1*, *BRCA2*) or error-prone nonhomologous end joining.
- Loss of repair genes such as *MLH1*, *MSH2*, *BRCA1*, *BRCA2*, and *TP53* raises the mutation rate and drives cancer.

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
