---
title: "DNA Replication in Prokaryotes"
subject: "Science"
book: "Biology for AP® Courses"
chapter: "14: DNA Structure and Function"
topic_number: "4"
source: "biology-ap-courses.md"
tags:
  - "dna-replication-in-prokaryotes"
  - "science"
status: "complete"
---

# DNA Replication in Prokaryotes

> **Book:** [Biology for AP® Courses](../../README.md)  
> **Chapter:** [Chapter 14: DNA Structure and Function](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

Prokaryotes such as *Escherichia coli* carry their genetic information on a single, circular double-stranded DNA chromosome. The *E. coli* genome contains about **4.6 million base pairs** (a commonly taught figure) — and under good conditions the cell can divide roughly every 20 minutes, so its replication machinery must copy that entire chromosome quickly and almost flawlessly. Bacteria solved the speed problem with a **single origin of replication** and **bidirectional synthesis**: two replication forks start at one point and travel in opposite directions around the circle, meeting on the far side. During replication the partially copied circle looks like the Greek letter theta (θ), which is why this is called **theta replication**.

This topic zooms in on the details the previous topic introduced in general: the *oriC* origin, the replisome (the multi-protein machine at each fork), Okazaki fragment processing, and termination. Prokaryotic replication is the classic model taught in introductory biology — it is simpler than eukaryotic replication, it was worked out first, and it is the system in which enzymes like DNA polymerases I and III, gyrase, and ligase were discovered. It is also medically important: several classes of antibiotics target bacterial replication enzymes, so understanding this machinery explains how those drugs work and why they spare human cells.

## Why This Matters

- **Model system for everything:** Nearly every replication concept — origins, forks, primers, Okazaki fragments, proofreading — was discovered in bacteria and is still taught through them. Master the prokaryotic machine and eukaryotic replication becomes a list of upgrades.
- **Antibiotic mechanism:** Drugs like fluoroquinolones target bacterial gyrase; selectivity comes from differences between bacterial and human enzymes (educational context only — no treatment advice).
- **Biotechnology:** Plasmids and bacterial replication origins are the workhorses of cloning and protein production; understanding *oriC* explains how recombinant DNA is maintained in cells.
- **Speed and accuracy in one system:** Bacteria copy ~1,000 nucleotides per second per fork (commonly taught) with an error rate near 1 in 10⁹ — a striking demonstration of how fast and faithful molecular machines can be.
- **Exams:** Expect questions on why replication is bidirectional, the role of each replisome component, the fate of RNA primers, and why a circular chromosome needs no telomeres.

## Core Concepts

### The bacterial chromosome and oriC

The *E. coli* chromosome is a circular double-stranded DNA molecule of about 4.6 million base pairs, packed into the nucleoid region. Replication begins at a single sequence called **oriC** (the origin of chromosomal replication). oriC is rich in A–T base pairs — convenient, because A–T pairs have only two hydrogen bonds and are easier to pry apart than G–C pairs. Initiator proteins bind oriC and recruit helicase, which unwinds the DNA and establishes the two replication forks. Because there is only one origin, a bacterial replication cycle produces exactly two forks; in contrast, a human cell uses thousands of origins on its linear chromosomes.

### Bidirectional theta replication

From oriC, the two forks travel in opposite directions around the circle simultaneously, each carrying out the leading/lagging-strand synthesis described in the previous topic. As replication proceeds, the unreplicated and replicated portions give the chromosome its theta (θ) appearance in electron micrographs — the classic Cairns autoradiography images from the 1960s showed this directly. The two forks eventually meet roughly opposite the origin, where replication terminates.

### The replisome at the fork

The **replisome** is the whole complex of proteins working at each fork:

- **DnaB helicase** unwinds the duplex ahead of the fork (DnaA is the initiator, DnaB the helicase).
- **Single-strand binding proteins** keep the exposed templates from re-pairing.
- **DNA gyrase** (a topoisomerase) relieves the supercoiling that builds ahead of the unwinding helicase.
- **Primase (DnaG)** synthesizes the RNA primers — one for the leading strand, many for the lagging strand.
- **DNA polymerase III holoenzyme** is the main synthetic machine: a sliding **β-clamp** holds the polymerase onto the template, and the catalytic core adds nucleotides 5′ → 3′ while proofreading with its 3′ → 5′ exonuclease. Lagging-strand synthesis is discontinuous, producing Okazaki fragments roughly 1,000–2,000 nucleotides long in *E. coli* (commonly taught range).

### Finishing and termination

Polymerase III cannot remove the RNA primers it started from, so **DNA polymerase I** steps in: it removes each RNA primer (5′ → 3′ exonuclease activity) and replaces it with DNA. **DNA ligase** then seals the nick between the replacement DNA and the next fragment, producing a continuous strand. Termination is controlled: **Ter sequences** on the chromosome, bound by the **Tus protein**, act as stop signs that allow a fork to pass in one direction but block it from the other, so the two forks meet in a defined zone. Finally, the two interlinked daughter circles (catenanes) are separated by **topoisomerase IV**, which cuts and rejoins the DNA to decatenate them.

### Speed, accuracy, and the telomere question

*E. coli* replisomes move at roughly **1,000 nucleotides per second** per fork (a commonly taught figure), and proofreading plus mismatch repair keep the error rate near **1 in 10⁹** nucleotides. Circularity solves a problem that linear chromosomes face: at the very end of a linear molecule, the lagging strand cannot be fully replicated because the final RNA primer cannot be replaced (there is no upstream 3′ end for polymerase to extend). Bacteria avoid this **end-replication problem** entirely because their chromosome has no ends — which is why bacteria need no telomeres, while eukaryotes do (next topic).

## ELI-10: Explain Like I'm 10

> A bacterium's DNA is one big circle, like a circular racetrack. Copying starts at one spot on the track, and two copying crews head off in opposite directions, working around the circle until they meet on the other side. Each crew unzips the track and builds two new rails — one continuous rail and one built in short pieces that get glued together. Because the track is a circle, there are no loose ends left over, so the bacterium doesn't need the special "end caps" that human DNA needs.

## High-Yield Points

- *E. coli*: **circular dsDNA**, ~4.6 million bp, **one origin (oriC)**; replication is **bidirectional** → theta structure.
- oriC is **A–T rich** (easier to unwind: 2 H-bonds vs. 3).
- Replisome cast: **DnaA** (initiator), **DnaB helicase**, SSB proteins, **gyrase**, **DnaG primase**, **Pol III holoenzyme** (β-clamp sliding clamp), **Pol I** (replace RNA primers), **ligase** (seal), **Tus/Ter** (termination), **topoisomerase IV** (decatenation).
- Leading strand: continuous; lagging strand: Okazaki fragments (~1,000–2,000 nt in *E. coli*, commonly taught).
- Speed ~1,000 nt/s per fork; error rate ~1 in 10⁹ (commonly taught values).
- **Circular chromosome → no end-replication problem → no telomeres needed.**
- Antibiotics that target bacterial replication enzymes exploit differences from human enzymes (educational context only).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| oriC | The single origin of replication on the *E. coli* chromosome | Sets up the two bidirectional forks that copy the circle. |
| Theta replication | Circular-chromosome replication producing a θ-shaped intermediate | The standard mode of bacterial chromosome replication. |
| Replisome | The full protein complex that replicates DNA at a fork | The "machine" whose parts you must know by name and job. |
| Sliding clamp (β-clamp) | Ring-shaped protein that keeps polymerase attached to the template | Lets polymerase III synthesize thousands of bases without falling off. |
| Okazaki fragments | Short lagging-strand pieces (~1,000–2,000 nt in *E. coli*) | Made because lagging synthesis runs away from the fork. |
| DNA polymerase I | Enzyme that removes RNA primers and fills gaps with DNA | Converts primed fragments into continuous DNA. |
| Tus/Ter | Termination protein/sequences that stop the forks | Ensure forks meet in the correct region, not past each other. |
| Decatenation | Separating the two interlinked daughter circles | Topoisomerase IV performs it so each daughter cell gets one chromosome. |
| End-replication problem | Inability to copy the very end of a linear lagging strand | Circular chromosomes avoid it; eukaryotes solve it with telomeres. |

## Example: One full replication cycle of the *E. coli* chromosome

Follow a single cycle from start to finish:

1. **Initiation.** DnaA proteins bind oriC, melt the A–T-rich region, and load DnaB helicase onto each strand. The helicase unwinds the duplex, and SSB proteins coat the single strands.
2. **Fork establishment.** Primase (DnaG) lays down RNA primers; polymerase III holoenzyme — clamped on by the β-clamp — begins 5′ → 3′ synthesis on both strands. The leading strand extends continuously toward the fork; the lagging strand is made in Okazaki fragments, each with its own primer.
3. **Elongation.** Both forks travel around the circle at ~1,000 nucleotides per second. Gyrase keeps the DNA ahead of each fork from tangling; proofreading keeps errors near 1 in 10⁹.
4. **Primer replacement and sealing.** Pol I removes each RNA primer and fills the gap; ligase seals the nicks between fragments.
5. **Termination.** The two forks encounter Tus-bound Ter sequences and stop. The two completed daughter circles remain interlinked (catenanes) until topoisomerase IV decatenates them.
6. **Outcome.** Each daughter cell receives one intact circular chromosome, ready to divide.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| DnaA | DnaB | DnaA is the initiator that opens oriC; DnaB is the helicase that unwinds the duplex. |
| DNA gyrase | Helicase | Gyrase (topoisomerase) relieves supercoiling ahead of the fork; helicase breaks hydrogen bonds to separate strands. |
| Polymerase I | Polymerase III | Pol III is the fast main replicase; Pol I is a "cleanup" enzyme that replaces RNA primers. |
| Theta replication | Rolling-circle replication | Theta = circular chromosome copied bidirectionally from one origin; rolling circle = unidirectional copying of one strand, used by some plasmids and viruses. |
| Prokaryotic replication | Eukaryotic replication | Bacteria: circular, one origin, no telomeres; eukaryotes: linear, many origins, telomeres, nucleosome assembly. |
| Antibiotics targeting replication | Antibiotics being safe for all cells | Selectivity depends on structural differences between bacterial and human enzymes; educational mechanism, not medical advice. |

## Quick Review

1. Why does *E. coli* need only one origin of replication, and why is oriC A–T rich?
2. What shape does a partially replicated bacterial chromosome have, and why?
3. List the jobs of helicase, gyrase, primase, polymerase III, polymerase I, and ligase in bacterial replication.
4. Why does a circular chromosome avoid the end-replication problem?
5. How do the two new circular chromosomes get separated at the end of replication?

<details>
<summary>Show answers</summary>

1. The chromosome is circular and only about 4.6 million base pairs, so two forks from a single origin can copy it quickly enough for a ~20-minute division cycle. oriC is A–T rich because A–T pairs have two hydrogen bonds and separate more easily than G–C pairs.
2. A theta (θ) shape. Two forks start at oriC and travel in opposite directions, so the replicated portion looks like a loop growing out of the unreplicated circle.
3. Helicase unwinds the duplex; gyrase relieves supercoiling; primase makes RNA primers; polymerase III does the main 5′ → 3′ synthesis with proofreading; polymerase I removes RNA primers and fills gaps with DNA; ligase seals the nicks between fragments.
4. The end-replication problem is that the final RNA primer on a linear lagging strand cannot be replaced because there is no upstream 3′ end to extend. A circle has no ends, so the problem never arises — no telomeres are needed.
5. Topoisomerase IV cuts and rejoins the DNA to decatenate the interlinked daughter circles (catenanes), leaving each chromosome free for segregation into a daughter cell.

</details>

## Related Topics

- Previous: [Basics of DNA Replication](03-basics-of-dna-replication.md)
- Next: [DNA Replication in Eukaryotes](05-dna-replication-in-eukaryotes.md)
- Related: [DNA Structure and Function chapter overview](../README.md)

## Source Notes

- Book: Biology for AP® Courses
- Local outline source: `biology-ap-courses.md`
- Official source URL: https://openstax.org/details/books/biology-ap-courses/
- Content type: Original educational study guide based on OpenStax outline structure.
- Genome size, replication speed, Okazaki fragment length, and error-rate figures for *E. coli* are commonly taught reference values from introductory microbiology; verify against current primary sources (e.g., NCBI, EcoCyc) before formal citation. Antibiotic mechanism is discussed as educational context only — no treatment or dosing recommendations are implied.
- Last updated: 2026-08-16
