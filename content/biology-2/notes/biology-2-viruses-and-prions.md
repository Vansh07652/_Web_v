---
id: biology-2-viruses-and-prions
title: "Viruses And Prions"
slug: viruses-and-prions
subject: biology-2
subjectName: "Biology 2"
contentType: note
lesson: viruses-and-prions
lessonNumber: 3
description: "Study notes covering Viruses And Prions." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - viruses
  - prions
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-e680f54bdc6cbc5c"
lastReviewed:
version: 1.0.0
---

# Viruses And Prions

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

Viruses cause diseases from the common cold to AIDS and are also engineered into tools for medicine, from vaccines to gene therapy. Because a virus can do almost nothing on its own, every stage of its story depends on the molecular machinery of the host cell it infects. Prions complete the picture by showing that an infectious agent can be made of protein alone, with no genetic material at all.

### Viral Structure

A **virus** is an obligate intracellular parasite, an acellular infectious agent that can multiply only inside a living cell. Most viruses are far smaller than any cell, ranging from about 20 to 300 nanometers across. A complete virus particle, or **virion**, is built from just a few parts. The genetic material, called the viral **nucleic acid**, is either DNA or RNA, and it may be single-stranded or double-stranded, linear or circular. Around this genome sits the **capsid**, a protein shell assembled from repeated subunits called **capsomeres**, which protects the genome and helps the virus attach to host cells. Some viruses are naked, with only a capsid, while others are wrapped in an **envelope**, a lipid membrane stolen from the host cell and studded with viral **spikes**, glycoproteins that recognize receptors on the surface of a target cell.

Viruses take a few characteristic shapes. Icosahedral viruses are roughly spherical, helical viruses are rod-shaped, and complex viruses add extra structures. A **bacteriophage**, or phage for short, is a virus that infects bacteria, and the T4 phage has a complex shape with a head, a tail, and tail fibers for landing on a host. The set of cells a virus can infect is its **host range**; the rabies virus infects many mammals, the tobacco mosaic virus infects only plants, and HIV binds almost exclusively to human helper T cells. Targeting is narrow because viral spikes and capsids must match host surface molecules, a lock and key relationship that shapes how a virus spreads and how vaccines are designed.

> **Common Mistake:** A virus is not a cell. It has no metabolism, no ribosomes, and no way to reproduce on its own, so it is not alive in the usual sense even though it can cause severe disease.

#### ELI-10

A virus is like a letter that carries a recipe card but cannot cook anything on its own. The envelope is the shell that protects the recipe, and the capsid is the box that holds the genetic instructions. Different viruses come in different shapes, from round balls to tiny rockets with legs. The virus only works when a host cell opens the letter and follows the recipe to make more viruses.

### Lytic and Lysogenic Cycles

Bacteriophages, and many other viruses, follow one of two life strategies inside a host. In the **lytic cycle**, a **virulent phage** such as T4 replicates quickly and destroys the cell it infects. The cycle runs through five stages in a fixed order, and in T4 infections of Escherichia coli it is complete in about 30 minutes, releasing roughly one hundred to two hundred new phages per cell.

In the **lysogenic cycle**, a **temperate phage** such as lambda does not destroy its host immediately. Instead, the viral DNA is inserted into the host chromosome, where it is called a **prophage**. The prophage is copied together with the host DNA every time the cell divides, so the viral genome is silently passed on to every daughter cell, a state called a lysogen. Under stress, such as exposure to ultraviolet light, **induction** occurs: the prophage excises itself from the chromosome and switches to the lytic cycle, producing new virions and lysing the host.

| Feature | Lytic cycle | Lysogenic cycle |
| --- | --- | --- |
| Viral genome | Free in the host cytoplasm | Integrated into the host chromosome as a prophage |
| New virions | Produced immediately | Produced only after induction |
| Host cell fate | Dies when it bursts open | Survives and keeps dividing |
| Phage type | Virulent phage | Temperate phage |
| Example | T4 phage | Lambda phage |

```text
1. Attachment: the phage tail fibers bind to receptors on the host cell surface.
2. Entry: the viral DNA is injected through the tail into the host cell.
3. Replication and synthesis: the host machinery copies the viral genome and builds new capsid proteins.
4. Assembly: new capsids are packed around the copied genomes to form complete virions.
5. Release: the host cell bursts open by lysis, freeing the new phages.
```

> **Common Mistake:** A lysogenic phage is not harmless, and it is not dormant forever. The prophage can be induced by stress such as ultraviolet light to switch into the lytic cycle, destroy the host cell, and release new phages.

#### ELI-10

Think of a copier that can only make copies of itself inside someone's office. In the smash-and-grab style, the virus breaks in, uses the machine to print many copies, and wrecks the office as it leaves. In the hide-and-wait style, the virus tucks its instructions inside the office's big instruction book, so every time the office copies the book, the virus is copied too. If the office gets stressed, the hidden virus may wake up and switch to the destructive style.

### Retroviruses

A **retrovirus** carries an RNA genome but replicates through a DNA intermediate, the opposite of the usual direction of genetic information flow. The key enzyme is **reverse transcriptase**, which copies RNA into DNA and is carried inside the virion. **HIV**, the virus that causes AIDS, is the best-known retrovirus. Its RNA genome is roughly 9,700 nucleotides long, and it infects human helper T cells, gradually destroying the immune system's ability to fight infection. The DNA copy produced by reverse transcriptase is called a **provirus**, and the viral enzyme **integrase** inserts it into a host chromosome. The provirus can remain silent there for years, transcribing new viral genomes and proteins only when the cell is activated, which is why HIV infection is so hard to cure.

Reverse transcriptase lacks proofreading, so HIV mutates rapidly and evades immune responses and drugs, and the integrated provirus is passed to all daughter cells when an infected cell divides. Retroviruses are also used in research and medicine as vectors that deliver therapeutic genes, and traces of ancient retroviruses remain in the genomes of all mammals.

```text
1. The retrovirus binds to a host cell, and the capsid enters the cytoplasm.
2. Reverse transcriptase copies the RNA genome into double-stranded DNA.
3. The DNA copy moves into the nucleus and integrates into a host chromosome as a provirus.
4. The provirus is transcribed into viral messenger RNA and new genomic RNA.
5. The messenger RNA is translated into viral proteins.
6. New virions assemble and bud from the cell membrane, taking an envelope with them.
```

> **Common Mistake:** Reverse transcriptase does not read RNA from DNA the way the cell's RNA polymerase does. It works backward, copying viral RNA into DNA, which is how HIV hides its genome inside a host chromosome.

#### ELI-10

Most cells keep a master recipe book called DNA and hand out working copies called RNA. A retrovirus arrives carrying only working copies, so it must first build a new master book using a special copying machine called reverse transcriptase. Then it hides the new master book among the cell's own books, so every time the cell copies its library, the virus is copied as well. From there it works like any other virus, printing working copies and building more viruses.

### Baltimore Classification Concepts

The **Baltimore classification**, proposed by David Baltimore in 1971, sorts all viruses into seven classes based on how their genomes produce **messenger RNA (mRNA)**, the molecule that ribosomes translate into protein. Class I viruses have double-stranded DNA that is transcribed directly into mRNA. Class II viruses have single-stranded DNA that is first converted to double-stranded DNA. Class III viruses have double-stranded RNA that is copied into mRNA by an **RNA-dependent RNA polymerase** carried inside the virion. Class IV viruses have **positive-sense** single-stranded RNA, meaning the genome itself can serve as mRNA and be translated immediately. Class V viruses have **negative-sense** single-stranded RNA, meaning the genome is complementary to mRNA and must first be copied into a positive strand by the viral RNA-dependent RNA polymerase. Class VI viruses are the retroviruses, whose RNA is reverse transcribed into DNA and then transcribed into mRNA, and Class VII viruses, such as hepatitis B, carry a partial double-stranded DNA genome that is repaired through an RNA intermediate.

Positive-sense RNA is the same strand that ribosomes read, while negative-sense RNA must be copied first, which is why influenza viruses must carry their own polymerase into the cell. The classes explain why drugs must target each virus's own enzymes: the class VI enzyme reverse transcriptase is the main target of anti-HIV drugs, while RNA viruses need inhibitors of viral RNA polymerases.

| Class | Genome | How mRNA is made | Example |
| --- | --- | --- | --- |
| I | Double-stranded DNA | Transcribed directly | Herpesvirus, smallpox virus |
| II | Single-stranded DNA | Converted to double-stranded DNA first | Parvovirus |
| III | Double-stranded RNA | Copied by a viral RNA polymerase | Rotavirus |
| IV | Positive-sense single-stranded RNA | Used directly as mRNA | Poliovirus, SARS-CoV-2 |
| V | Negative-sense single-stranded RNA | Copied into a positive strand first | Influenza virus, rabies virus |
| VI | Single-stranded RNA with DNA intermediate | Reverse transcribed to DNA, then transcribed | HIV |
| VII | Double-stranded DNA with RNA intermediate | Repaired through an RNA copy, then transcribed | Hepatitis B virus |

> **Common Mistake:** The flow from DNA to RNA to protein is the normal direction inside cells, but it is not a law for viruses. Several Baltimore classes run the flow backward at one step, and class VI runs it backward at two steps.

#### ELI-10

Imagine a kitchen that can cook any meal, but each chef hands over the recipe in a different form. Some recipes arrive as typed cards, some as voice recordings, and some as photos of a half-finished dish. The Baltimore sorting system groups viruses by the form their recipe takes and by how they turn it into the one standard cooking card called messenger RNA. There are seven groups, and knowing the group tells scientists which machine the virus needs and which drugs might stop it.

### Prions and Prion Disease

A **prion** is an infectious agent made entirely of protein, with no nucleic acid at all. Every mammal carries a gene for a normal cellular **prion protein** that is folded into a harmless shape, but when the same protein misfolds, it becomes infectious. The misfolded form acts as a template: when it contacts a normal copy, it forces that copy to refold into the same wrong shape, starting a chain reaction. The misfolded proteins accumulate in the brain, destroying neurons and leaving holes that make the tissue look like a sponge, a condition called a **transmissible spongiform encephalopathy** (TSE). Prion diseases are always fatal, and there is no cure. They include **scrapie** in sheep, **mad cow disease** (bovine spongiform encephalopathy, BSE) in cattle, **kuru** in humans, which spread through ritual cannibalism among the Fore people of Papua New Guinea, and **Creutzfeldt-Jakob disease** (CJD), whose variant form in people is linked to eating meat from cattle with BSE.

Prions are almost indestructible. Because they are pure protein, they resist boiling, ultraviolet and ionizing radiation, and many disinfectants, and standard autoclaving does not reliably destroy them, so surgical instruments exposed to prions are treated with concentrated bleach or sodium hydroxide instead. The name prion, short for proteinaceous infectious particle, was coined by Stanley Prusiner in 1982, and he won the Nobel Prize in 1997 for that discovery. Prion diseases arise sporadically, when a normal protein misfolds on its own; by inheritance, when a mutation in the prion gene makes the protein prone to misfolding; and by infection, when prions are acquired from another animal.

> **Common Mistake:** Prions are not viruses, bacteria, or any kind of living microbe, and they carry no genetic material. Because they are misfolded proteins, ordinary cooking, boiling, and radiation do not destroy them, which is why contaminated meat and surgical instruments remain dangerous.

#### ELI-10

Imagine a paper crane that can somehow make other cranes fold themselves into the same crumpled shape. A prion is a protein folded the wrong way, and when it meets a normal protein of the same kind, it makes that one fold wrongly too. The wrong-shaped proteins pile up in the brain and damage it over time. Ordinary cooking heat cannot smooth them back out, which is why prions are famously hard to destroy.

> **High-Yield:**
> - A virus is an obligate intracellular parasite: without a host cell, it cannot reproduce.
> - The lytic cycle destroys the host cell, while the lysogenic cycle hides the viral genome as a prophage until induction.
> - Retroviruses such as HIV copy RNA into DNA with reverse transcriptase and integrate the copy as a provirus.
> - The Baltimore classification sorts every virus into seven classes by how its genome produces messenger RNA.
> - Prions are misfolded proteins that resist heat and radiation and cause fatal diseases such as mad cow disease and kuru.

### Quick Review

- Viruses are obligate intracellular parasites, about 20 to 300 nanometers in size, built from nucleic acid, a capsid, and sometimes an envelope with spikes, and a virus's host range is set by how those parts match host cell receptors.
- The lytic cycle produces new virions and bursts the host cell, while the lysogenic cycle hides the viral genome as a prophage until induction.
- Retroviruses such as HIV carry RNA and use reverse transcriptase to build a DNA provirus that integrates into a host chromosome.
- The Baltimore classification places all viruses into seven classes according to how their genome produces messenger RNA.
- Prions are misfolded proteins that convert normal copies of themselves and resist heat, radiation, and standard autoclaving.
- Prion diseases are fatal brain diseases and include mad cow disease, kuru, and Creutzfeldt-Jakob disease.

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
