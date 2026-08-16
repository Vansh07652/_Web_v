---
title: "Basics of DNA Replication"
subject: "Science"
book: "Biology for AP® Courses"
chapter: "14: DNA Structure and Function"
topic_number: "3"
source: "biology-ap-courses.md"
tags:
  - "basics-of-dna-replication"
  - "science"
status: "complete"
---

# Basics of DNA Replication

> **Book:** [Biology for AP® Courses](../../README.md)  
> **Chapter:** [Chapter 14: DNA Structure and Function](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Before a cell divides, it must produce an exact copy of its genome so each daughter cell receives the full set of instructions. **DNA replication** is that copying process, and it exploits the molecule's most elegant property: because the two strands are complementary, each strand can act as a **template** for rebuilding its partner. Replication is therefore **semiconservative** — each new double helix contains one original (parental) strand and one newly synthesized strand. This was proven by Matthew Meselson and Franklin Stahl in 1958 in one of the most beautiful experiments in biology.

Replication is carried out by a team of enzymes working at a **replication fork**, where the double helix is unwound and two new strands are built in the 5′ → 3′ direction. The chemistry of DNA polymerases — they can only add nucleotides to an existing 3′ end — creates an asymmetry students find challenging: one new strand (the **leading strand**) is made continuously, while the other (the **lagging strand**) is made in short pieces called **Okazaki fragments** that are later joined. The process is fast and remarkably accurate, with proofreading keeping the error rate near one mistake per billion nucleotides copied (a commonly taught figure). This topic covers the general machinery; the next two topics detail prokaryotic and eukaryotic replication.

## Why This Matters

- **Cell division depends on it:** Every mitotic or meiotic division begins with replication. Errors here are mutations — the raw material of evolution, inherited disease, and cancer.
- **Biotechnology relies on it:** PCR, DNA sequencing, cloning, and genetic engineering all use the same template-copying chemistry with purified polymerases.
- **Medicine:** Drugs that treat infections and cancer often target replication enzymes (for example, antibiotics that inhibit bacterial DNA gyrase). Understanding the machinery explains how these drugs work and why side effects occur.
- **Exams:** Expect enzyme-function questions (helicase vs. polymerase vs. ligase), leading vs. lagging strand logic, and the Meselson–Stahl experiment as a data-interpretation question.

## Core Concepts

### Semiconservative replication and the Meselson–Stahl experiment

Three mechanisms were plausible in 1953: **conservative** (the original double helix stays intact and a brand-new one is made), **semiconservative** (each new helix has one old and one new strand), and **dispersive** (old and new DNA interspersed in fragments). Meselson and Stahl distinguished them by growing *E. coli* for many generations in medium containing the heavy nitrogen isotope ¹⁵N, so all DNA became heavy, then switching the bacteria to normal ¹⁴N medium and centrifuging DNA samples in a cesium chloride gradient, which separates molecules by density:

- **Generation 0** (all heavy): one heavy band.
- **After one round in ¹⁴N:** a single band at intermediate ("hybrid") density — immediately ruling out conservative replication, which would have produced heavy and light bands.
- **After two rounds:** two bands — intermediate and light — in equal amounts. Dispersive replication would have produced one band that gradually shifted lighter; the distinct light band matches semiconservative prediction exactly.

### Origins of replication and the replication fork

Replication begins at specific DNA sequences called **origins of replication**, where the helix is opened. Unwinding proceeds **bidirectionally** — two forks move away from each origin. Prokaryotes typically have a single origin on their circular chromosome; eukaryotes have many origins along each linear chromosome (thousands in a human cell), which is necessary because their genomes are so large.

### The enzyme team

| Enzyme | Job |
|---|---|
| Helicase | Unwinds the double helix by breaking hydrogen bonds between base pairs. |
| Single-strand binding proteins (SSBs) | Coat the separated strands to keep them from re-annealing. |
| Topoisomerase | Relieves supercoiling tension ahead of the fork (in bacteria, DNA gyrase). |
| Primase | Synthesizes short RNA primers that provide the free 3′ end DNA polymerase needs. |
| DNA polymerase III | Main replicative polymerase; adds nucleotides 5′ → 3′ and proofreads with 3′ → 5′ exonuclease activity. |
| DNA polymerase I | Removes RNA primers and replaces them with DNA (in prokaryotes). |
| DNA ligase | Seals the nick between the last replaced nucleotide and the rest of the strand. |

A critical rule drives the whole design: **DNA polymerases can only add nucleotides to an existing 3′ hydroxyl** — they cannot start a chain from scratch and can only extend in the 5′ → 3′ direction. That is why primers exist and why the two strands are built differently.

### Leading and lagging strands

Because the two template strands are antiparallel, the fork copies them in opposite geometric directions while both new strands are built 5′ → 3′:

- **Leading strand:** the template runs 3′ → 5′ toward the fork, so the new strand is synthesized **continuously** in the same direction the fork moves. One RNA primer is needed, then polymerase III zips along.
- **Lagging strand:** the template runs 5′ → 3′ toward the fork, so the new strand is synthesized **discontinuously**, away from the fork, in short segments called **Okazaki fragments**. Each fragment needs its own RNA primer; as the fork advances, more fragments are started and later joined.

### Accuracy and proofreading

Replication is astonishingly accurate, with a commonly taught error rate of about **1 mistake per 10⁹ nucleotides** — roughly one error per bacterial genome copy. Three layers provide this fidelity: (1) correct base pairing is favored by hydrogen-bonding geometry; (2) **DNA polymerase III proofreads**, detecting a mismatched base and removing it with its 3′ → 5′ exonuclease activity before continuing; and (3) **mismatch repair** systems scan newly synthesized DNA and correct errors the polymerase missed. Without these layers, the error rate would be roughly a million-fold higher.

## ELI-10: Explain Like I'm 10

> When a cell wants to make a copy of itself, it first copies its DNA — like photocopying a book one page at a time, but smarter: it unzips the book and uses each half as a pattern to rebuild the missing half, so you end up with two complete books that each keep one old page and one new page. A team of tiny machines (enzymes) does the unzipping, the copying, and the checking, and a proofreader fixes almost every typo.

## High-Yield Points

- Replication is **semiconservative**: each daughter helix = 1 parental strand + 1 new strand (Meselson–Stahl, 1958).
- Replication starts at **origins**, unwinds **bidirectionally**, and proceeds at **replication forks**.
- DNA polymerase **adds only to a 3′ end and moves 5′ → 3′**; it cannot start a chain — hence **RNA primers**.
- **Leading strand:** continuous; **lagging strand:** discontinuous (**Okazaki fragments**) joined by ligase.
- Enzyme roles: helicase (unwind), SSB (stabilize), topoisomerase/gyrase (relieve supercoiling), primase (RNA primers), Pol III (synthesis + proofreading), Pol I (replace primers), ligase (seal).
- Fidelity: base-pair geometry + **3′ → 5′ proofreading** + mismatch repair → ~1 error per 10⁹ bases (commonly taught).
- Eukaryotes differ mainly in scale: multiple origins, linear chromosomes, and **telomeres** (next topics).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Semiconservative replication | Each new DNA molecule keeps one old strand and one new strand | The mechanism proven by Meselson–Stahl; basis of all copying. |
| Template | A parental strand used to specify the new strand's sequence | Complementarity makes exact copying possible. |
| Origin of replication | DNA sequence where unwinding and synthesis begin | Controls where and how many replication forks form. |
| Replication fork | The Y-shaped region where the helix is actively unwound | The site of all synthesis and enzyme action. |
| Helicase | Enzyme that unwinds the double helix | Opens the template for copying. |
| Primase | Enzyme that makes RNA primers | Provides the 3′ end polymerases require. |
| Okazaki fragments | Short DNA pieces synthesized on the lagging strand | The consequence of 5′ → 3′ synthesis on an antiparallel template. |
| DNA ligase | Enzyme that seals nicks between DNA fragments | Joins Okazaki fragments and finishes replication. |
| Proofreading | Polymerase's 3′ → 5′ exonuclease removal of a mismatched base | Major source of replication accuracy. |

## Example: Following one replication fork, step by step

Picture a replication fork moving to the right along a DNA molecule:

1. **Unwind.** Helicase breaks the hydrogen bonds ahead of the fork; single-strand binding proteins hold the templates apart, and topoisomerase relieves the twisting tension building upstream.
2. **Prime.** Primase lays down a short RNA primer on each template strand — the leading template gets one primer; the lagging template will need many.
3. **Extend the leading strand.** DNA polymerase III binds the primer's 3′ end and slides continuously in the 5′ → 3′ direction, right behind the fork.
4. **Extend the lagging strand.** Because its template runs the "wrong way," the polymerase works away from the fork in short bursts, producing Okazaki fragments; as the fork advances, primase lays down another primer and the cycle repeats.
5. **Proofread.** As each nucleotide is added, the polymerase checks the just-made base pair; mismatches are excised and replaced before synthesis continues.
6. **Finish.** DNA polymerase I removes each RNA primer and fills the gap with DNA; ligase seals the final nick.

The result: two complete double helices, each with one parental and one new strand, ready for the cell to divide.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Leading strand | Lagging strand | Leading is continuous, toward the fork; lagging is discontinuous, away from the fork, in Okazaki fragments. |
| Direction of new-strand synthesis | Direction the fork moves | New strands are always built 5′ → 3′; only the leading strand's synthesis direction matches fork movement. |
| Helicase | Topoisomerase | Helicase breaks hydrogen bonds to unwind; topoisomerase relieves supercoiling ahead of the fork. |
| Primase | DNA polymerase | Primase makes RNA primers (can start chains); polymerase extends chains (cannot start them). |
| DNA polymerase I | DNA polymerase III | Pol III is the main replicative enzyme; Pol I replaces RNA primers with DNA. |
| Conservative replication | Semiconservative replication | Conservative keeps the old helix intact and makes a new one; semiconservative splits old strands between the two daughters — as Meselson–Stahl showed. |
| Proofreading (3′ → 5′) | Synthesis (5′ → 3′) | The polymerase builds 5′ → 3′ but removes mistakes by chewing backward 3′ → 5′. |

## Quick Review

1. What does "semiconservative" mean, and how did the Meselson–Stahl experiment demonstrate it?
2. Why can't DNA polymerase start a new strand from scratch?
3. Why is the lagging strand made in fragments, and what joins them?
4. Name the enzymes that unwind DNA, relieve supercoiling, lay down primers, and seal nicks.
5. List three mechanisms that keep replication accurate.

<details>
<summary>Show answers</summary>

1. Semiconservative means each daughter molecule contains one parental and one newly synthesized strand. Meselson–Stahl grew bacteria in ¹⁵N, switched to ¹⁴N, and showed that after one round all DNA was hybrid-density (ruling out conservative) and after two rounds hybrid and light bands appeared (matching semiconservative, ruling out dispersive).
2. DNA polymerase can only add nucleotides to an existing 3′ hydroxyl; it cannot join the first two nucleotides. Primase solves this by synthesizing short RNA primers that supply the required 3′ end.
3. The lagging strand's template runs 5′ → 3′ toward the fork, opposite to the 5′ → 3′ direction of synthesis. The polymerase must work away from the fork in short Okazaki fragments, each primed separately; DNA ligase seals them into one continuous strand.
4. Helicase unwinds; topoisomerase (gyrase in bacteria) relieves supercoiling; primase lays down RNA primers; DNA ligase seals nicks.
5. Correct base-pair geometry, 3′ → 5′ exonuclease proofreading by DNA polymerase, and post-replication mismatch repair. Together they bring the error rate to about 1 in 10⁹ bases (commonly taught).

</details>

## Related Topics

- Previous: [DNA Structure and Sequencing](02-dna-structure-and-sequencing.md)
- Next: [DNA Replication in Prokaryotes](04-dna-replication-in-prokaryotes.md)
- Related: [DNA Structure and Function chapter overview](../README.md)

## Source Notes

- Book: Biology for AP® Courses
- Local outline source: `biology-ap-courses.md`
- Official source URL: https://openstax.org/details/books/biology-ap-courses/
- Content type: Original educational study guide based on OpenStax outline structure.
- Enzyme names follow the classic prokaryotic model (Pol I/III, primase, ligase) as commonly taught in introductory biology; error-rate and genome-copy figures are commonly taught reference values — verify against current primary sources (e.g., NCBI) before formal citation.
- Last updated: 2026-08-16
