---
title: "DNA Replication in Eukaryotes"
subject: "Science"
book: "Biology for AP® Courses"
chapter: "14: DNA Structure and Function"
topic_number: "5"
source: "biology-ap-courses.md"
tags:
  - "dna-replication-in-eukaryotes"
  - "science"
status: "complete"
---

# DNA Replication in Eukaryotes

> **Book:** [Biology for AP® Courses](../../README.md)  
> **Chapter:** [Chapter 14: DNA Structure and Function](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

Eukaryotic cells copy their DNA with the same core chemistry as bacteria — semiconservative synthesis, 5′→3′ polymerization, leading/lagging strands — but face three problems prokaryotes never deal with. The genome is enormous: a human cell duplicates roughly 3 billion base pairs per haploid set (commonly taught as ~3.0–3.3 billion), far too much for one origin. The DNA is packed into chromatin around histones, so the machinery must work through — and rebuild — nucleosomes. And chromosomes are linear, so every round of copying threatens to shorten the ends.

Eukaryotes answer with three hallmark solutions: **many origins of replication** firing in a regulated wave during S phase, **chromatin disassembly and reassembly** coordinated with the fork, and **telomeres plus telomerase** to solve the end-replication problem. This topic explains each and compares them with the bacterial replisome.

## Why This Matters

Replication is the most error-sensitive step in a cell's life: a mistake here becomes a permanent mutation in both daughter cells. Understanding it explains how cancer arises from a single uncorrected error, why chemotherapy drugs that jam replication machinery (e.g., topoisomerase inhibitors) kill dividing cells, and why most body cells divide a limited number of times while stem cells keep going. Telomere biology connects to aging research and to cancer cells, which often reactivate telomerase to become effectively immortal. Side-by-side prokaryote/eukaryote comparisons are a recurring AP exam style — the differences are high-yield.

## Core Concepts

### Many origins: the replicon model

A **replicon** is the DNA copied from a single origin of replication. Prokaryotes typically have one origin per chromosome; eukaryotes have thousands. In yeast, origins are defined by ~100 bp **ARS elements** (autonomously replicating sequences); in humans, origin choice is less sequence-driven, but the result is the same: replication bubbles form at hundreds to thousands of points along each chromosome, forks move **bidirectionally**, and neighboring bubbles fuse — thousands of parallel forks duplicate the genome in hours. Origins fire on a schedule through S phase — open, gene-rich chromatin early; heterochromatin late.

### Licensing: each origin fires exactly once

If an origin fired twice in one cell cycle, parts of the genome would be over-replicated. Eukaryotes prevent this with **replication licensing**: in G1, the **origin recognition complex (ORC)** binds each origin and recruits Cdc6, Cdt1, and the **MCM helicase** to form a **pre-replicative complex (pre-RC)** — the origin is licensed. In S phase, kinases (cyclin-CDK and DDK) trigger licensed origins to fire: MCM unwinds the DNA and the replisome assembles. The same kinases also inactivate the licensing machinery until the next G1 — each origin fires exactly once.

### The eukaryotic replisome

The protein players mirror the bacterial machine, with new names. **Pol α** carries primase activity, laying down the RNA primer plus a few DNA nucleotides at every Okazaki-fragment start. **Pol δ** extends the lagging strand; **Pol ε** is commonly taught as the leading-strand polymerase (recent work has refined the exact division of labor, so treat the assignment as a useful model). **PCNA** is the sliding clamp that tethers polymerase to the template (the bacterial β-clamp equivalent). **RPA** coats single-stranded DNA (the SSB counterpart). **Topoisomerases** relieve supercoiling ahead of the fork, as gyrase does in bacteria. The lagging strand is still made as Okazaki fragments (commonly taught ~100–200 nt in eukaryotes vs. ~1000 in bacteria), each needing its primer replaced and the nick sealed by ligase.

### Chromatin at the fork

Before the fork, nucleosomes are disassembled so helicases and polymerases can move; behind it, nucleosomes are rebuilt on **both** daughter duplexes. Parental histones are recycled and split between the strands, while new histones are deposited by chaperones such as CAF-1 and ASF1. This is how epigenetic information survives replication: marks on parental histones guide matching marks on new ones, so gene-expression patterns are inherited by daughters. If this fails, cells lose chromatin integrity and the "memory" of which genes should be on.

### The end-replication problem and telomerase

The very end of a linear chromosome cannot be fully copied: on the lagging strand, the last RNA primer is removed but there is no upstream 3′ end to fill the gap, so each round shortens the chromosome. Cells protect the ends with **telomeres** — G-rich tandem repeats (TTAGGG in vertebrates) bound by shelterin proteins, which also keep the ends from looking like broken DNA. **Telomerase** is a ribonucleoprotein whose RNA template directs addition of new repeats to the 3′ overhang. It is active in germ cells, embryonic cells, and many stem cells, but most somatic cells shut it off, so telomeres shorten with each division — a major contributor to the division limit (the commonly taught "Hayflick limit"). Many cancer cells reactivate telomerase, one reason they divide indefinitely.

## ELI-10: Explain Like I'm 10

Imagine copying a giant encyclopedia by hand — many people each copy a different chapter at the same time. That's multiple origins of replication. The pages are folded, so someone unfolds each page before copying and refolds it after — that's chromatin assembly. And the cover has plastic tips so it doesn't fray; a special machine replaces those tips each time — that's telomerase.

## High-Yield Points

- **Many origins, bidirectional forks, fusing bubbles** — bacteria use a single origin.
- **Licensing (ORC + pre-RC with MCM) in G1** guarantees each origin fires **once per S phase**; S-phase kinases fire origins and block re-licensing.
- Primer: **Pol α/primase**; extension: **Pol δ** (lagging), **Pol ε** (leading); **PCNA** = clamp; **RPA** = ssDNA binder; **topoisomerase** relieves supercoiling.
- Synthesis is always **5′→3′**; Okazaki fragments are lagging-strand only; ligase seals nicks.
- **Nucleosomes disassemble ahead of the fork and reassemble behind it**; parental histones recycle to both daughters (epigenetic memory).
- **Telomeres (TTAGGG repeats) + telomerase** solve the end-replication problem; most somatic cells lack telomerase, while many cancers reactivate it.
- Prokaryote/eukaryote compare-contrast is a favorite exam format: single vs. many origins, β-clamp vs. PCNA, circular vs. linear chromosomes.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| replicon | DNA copied from one origin of replication | Explains how thousands of origins split the genome into manageable pieces |
| origin of replication | DNA site where unwinding and synthesis begin | Multiple origins let huge genomes replicate quickly |
| licensing | G1 process (ORC, Cdc6, Cdt1, MCM) marking origins ready | Prevents re-replication — one firing per origin per cycle |
| MCM helicase | Enzyme that unwinds DNA at eukaryotic forks | Unwinding is the first step at every origin |
| PCNA | Sliding clamp holding polymerase on the template | Keeps polymerases processive (adds many nucleotides without falling off) |
| RPA | Protein coating single-stranded DNA | Protects exposed template strands |
| Okazaki fragment | Short lagging-strand DNA piece made away from the fork | Explains discontinuous lagging-strand synthesis |
| telomere | G-rich repeat (TTAGGG) capping chromosome ends | Protects ends from fraying and false damage alarms |
| telomerase | Enzyme with an internal RNA template that lengthens telomeres | Active in germ/stem cells and many cancers; its absence limits division |
| CAF-1 / ASF1 | Histone chaperones depositing new histones behind the fork | Rebuild chromatin; help copy epigenetic marks |

## Example: One S Phase in a Human Cell

Follow a single origin on chromosome 3 through S phase. During G1, the ORC bound the origin and, with Cdc6 and Cdt1, loaded a double ring of MCM helicases — the origin is licensed. When S-phase kinases fire, MCM unwinds the DNA, creating a bubble with two forks moving in opposite directions; RPA coats the single strands. At each fork, Pol α/primase lays an RNA primer, then hands off to Pol ε on the leading strand, which glides along with PCNA, synthesizing continuously toward the fork. On the lagging strand, Pol δ repeatedly starts new Okazaki fragments as the fork exposes more template, each primed anew by Pol α. Ahead of the fork, topoisomerases release the accumulating twist; behind it, RNA primers are removed, gaps are filled, and ligase seals the nicks. Meanwhile histones stripped from parental DNA pass to both new duplexes and CAF-1 adds fresh ones, so each daughter chromatid is properly packaged. Now make that cell a skin stem cell: active telomerase extends the telomeres so descendants keep dividing — a somatic cell lacking telomerase loses a bit of telomere each division until its lineage stops.

## Common Confusions

| Do Not Confuse | With | The Difference |
|---|---|---|
| Leading strand | Lagging strand | Leading is synthesized continuously toward the fork; lagging is made in Okazaki fragments away from the fork |
| Pol α, Pol δ, Pol ε | One universal polymerase | Pol α primes (with primase), Pol δ extends lagging, Pol ε extends leading — distinct jobs |
| PCNA | β-clamp (bacteria) | Same sliding-clamp job, different organism; exams test the functional equivalence |
| Licensing | Firing | Licensing (G1) makes an origin *able* to fire; firing (S phase) is the initiation. S-phase kinases do both, so origins can't fire twice |
| Telomere | Telomerase | Telomere is the DNA structure at the chromosome end; telomerase is the enzyme that builds it |
| One origin per chromosome | Many origins per chromosome | True for most bacterial chromosomes; false for eukaryotes — a classic prokaryote/eukaryote trap |

## Quick Review

1. Why can't a single origin of replication serve a eukaryotic chromosome?
2. What exactly does "licensing" prevent, and when does it happen?
3. Which strand is made in Okazaki fragments, and why is that strand discontinuous?
4. What roles do PCNA and RPA play in the eukaryotic replisome?
5. Explain the end-replication problem and how telomerase solves it.
6. Why do most somatic cells eventually stop dividing, and how do many cancer cells bypass that limit?

<details>
<summary>Show answers</summary>

1. Eukaryotic genomes are far too large for a single bidirectional fork to copy in time. Many origins firing simultaneously create bubbles that fuse, completing replication in hours.
2. Licensing prevents re-replication (an origin firing twice per cycle). It happens in G1, when ORC and partners load MCM to form the pre-RC; S-phase kinases then fire the origin and block new licensing until the next G1.
3. The lagging strand: because synthesis is always 5′→3′ but the template is exposed away from the fork, the polymerase repeatedly restarts, producing short Okazaki fragments that are later joined.
4. PCNA is the sliding clamp that keeps polymerase attached (processivity); RPA coats the single-stranded template so it can't fold back or be degraded.
5. The last RNA primer on the lagging strand cannot be replaced — there is no upstream 3′ end to extend from — so chromosomes shorten each round. Telomerase adds repeats to the 3′ overhang, giving the lagging strand a place to finish.
6. Most somatic cells stop making telomerase, so telomeres shorten until the ends are compromised and division stops. Many cancer cells reactivate telomerase, maintaining telomere length and dividing indefinitely.

</details>

## Related Topics

- Previous: [DNA Replication in Prokaryotes](04-dna-replication-in-prokaryotes.md)
- Next: [DNA Repair](06-dna-repair.md)
- Related: [Basics of DNA Replication](03-basics-of-dna-replication.md)
- Related: [DNA Structure and Function chapter overview](../README.md)

## Source Notes

- Book: Biology for AP® Courses
- Local outline source: `biology-ap-courses.md`
- Official source URL: https://openstax.org/details/books/biology-ap-courses/
- Content type: Original educational study guide based on OpenStax outline structure.
- Biological values and constants (base-pair counts, Okazaki fragment sizes, enzyme assignments) are commonly taught textbook reference concepts; verify against current primary texts before high-stakes use.
- Last updated: 2026-08-16
