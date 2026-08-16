---
title: "Replication of DNA"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "28: Biomolecules: Nucleic Acids"
topic_number: "3"
source: "organic-chemistry.md"
tags:
  - "replication-of-dna"
  - "science"
status: "complete"
---

# Replication of DNA

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 28: Biomolecules: Nucleic Acids](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

DNA replication is the process by which a cell makes an exact copy of its genome before division — the molecular equivalent of photocopying the blueprint of life. The chemistry is elegantly simple at its core: the two strands of the double helix are **antiparallel** (one runs 5′→3′, the other 3′→5′) and held together by **complementary base pairing** (A pairs with T; G pairs with C). Replication **unzips** the helix and uses each old strand as a **template** to build a new complementary strand, so each daughter molecule contains one old and one new strand. This is the **semiconservative** model, confirmed by Meselson and Stahl's famous 1958 experiment with nitrogen isotopes.

The enzyme that does the chemical work — **DNA polymerase** — can only extend a strand in the **5′→3′ direction** and can only add nucleotides to an existing 3′-OH (it cannot start from scratch). That one mechanistic constraint explains the entire choreography of the replication fork: RNA primers, continuous synthesis on the leading strand, discontinuous **Okazaki fragments** on the lagging strand, and the enzymatic cleanup that joins everything into two complete duplexes.

## Why This Matters

Replication is the fundamental event that makes life heritable — every cell division, every growth spurt, every healing wound depends on it, and errors in it are the raw material of mutation, evolution, and cancer. Understanding the mechanism matters for medicine on several fronts: **antiviral drugs** (acyclovir, AZT, and other nucleoside analogs) work by being incorporated into growing DNA chains and terminating them — they are replication inhibitors. **Cancer chemotherapy** exploits the same logic: rapidly dividing tumor cells are killed by drugs that poison DNA synthesis. **Forensic DNA profiling** and **polymerase chain reaction (PCR)** are applied replication: PCR is essentially a laboratory replication machine that copies a chosen DNA segment billions of times (topic 8 of this chapter). For organic chemistry students, replication is also the ultimate example of **phosphodiester bond formation** — an \(S_N2\)-like attack of a 3′-OH on the α-phosphate of a nucleoside triphosphate — and of how thermodynamics (pyrophosphate hydrolysis) drives a biosynthetic reaction.

## Core Concepts

### Semiconservative replication: the Meselson–Stahl experiment

Meselson and Stahl grew E. coli in medium containing heavy nitrogen (¹⁵N) until all DNA was "heavy," then switched the cells to light nitrogen (¹⁴N) and centrifuged DNA in a CsCl density gradient at successive generations.

- **Generation 0:** all DNA is heavy (¹⁵N/¹⁵N) — one band.
- **After one round in ¹⁴N:** one band of intermediate density (¹⁵N/¹⁴N) — each duplex is one old heavy strand + one new light strand. This **ruled out conservative replication** (which would have shown heavy and light bands) and **ruled out dispersive replication** (which would have shown a single band that slowly shifted).
- **After two rounds:** two bands — half intermediate, half light — exactly as semiconservative replication predicts.

**Result:** each daughter duplex conserves one parental strand; the strands themselves are not conserved as pairs.

### The replication fork: unzipping and stabilizing

Replication begins at specific sequences called **origins of replication** and proceeds **bidirectionally**. At each fork:

- **Helicase** unwinds the double helix, using ATP hydrolysis to break the hydrogen bonds between base pairs.
- **Single-strand binding proteins (SSBs)** coat the separated strands, keeping them apart and preventing re-annealing.
- **Topoisomerases** (including DNA gyrase in bacteria) relieve the supercoiling stress that builds up ahead of the fork by transiently cutting and rejoining the DNA backbone.

### DNA polymerase: the 5′→3′ rule

DNA polymerase reads the template strand and adds deoxyribonucleoside triphosphates (dNTPs) one at a time. The chemistry per nucleotide:

1. The template base (e.g., a T) selects the complementary incoming dNTP (dATP) by hydrogen bonding.
2. The 3′-OH of the growing chain attacks the **α-phosphate** of the incoming dNTP, forming a new **phosphodiester bond** and releasing **pyrophosphate** (\(\text{PP}_\text{i}\)).
3. Pyrophosphate hydrolysis (pyrophosphatase) pulls the equilibrium forward — the thermodynamic driving force.

The polymerase always adds to the 3′ end, so the new strand **grows 5′→3′**, and it requires an existing 3′-OH: it cannot initiate synthesis de novo. It also **proofreads**: a 3′→5′ exonuclease activity removes a mispaired nucleotide immediately after incorporation, cutting the error rate from roughly \(10^{-4}\)–\(10^{-5}\) down to about \(10^{-7}\) per base; additional mismatch-repair systems bring the final rate to roughly \(10^{-9}\)–\(10^{-10}\) per base pair per replication.

### Leading and lagging strands: the consequence of antiparallel geometry

Because the two template strands are antiparallel and polymerase only works 5′→3′, the fork cannot copy both strands the same way:

- **Leading strand:** the template runs 3′→5′ (relative to fork movement), so the new strand is synthesized **continuously** in the same direction the fork moves. One RNA primer is needed to start.
- **Lagging strand:** the template runs 5′→3′ (relative to fork movement), so the polymerase must work **away from the fork**, synthesizing short **Okazaki fragments** (about 1000–2000 nucleotides in bacteria, 100–200 in eukaryotes). Each fragment begins with a short **RNA primer** made by primase.

### Finishing: primer removal and ligation

- **DNA polymerase I** (in bacteria) removes the RNA primers and fills the gaps with DNA.
- **DNA ligase** seals the remaining nick between adjacent fragments, forming a continuous phosphodiester backbone — using ATP (or NAD⁺ in bacteria) to activate the 5′-phosphate.

The result: two complete duplexes, each identical in sequence to the parent and each containing one parental strand (semiconservative).

### Replication in context: telomeres and disease

Linear eukaryotic chromosomes end in **telomeres** (repetitive TTAGGG sequences) because the lagging strand cannot be copied all the way to its end — the terminal RNA primer cannot be replaced. The enzyme **telomerase** extends telomeres using an internal RNA template, and its activity is high in germ cells and most cancer cells but low in most somatic cells — a connection between replication chemistry, cellular aging, and cancer that frequently appears in exam and clinical contexts.

## ELI-10: Explain Like I'm 10

> Imagine a zipper: each tooth on one side matches exactly one tooth on the other side (A matches T, G matches C). To copy the zipper, you unzip it down the middle, then use each half as a mold to build the matching half — the left half builds a new right half, and the right half builds a new left half. When you're done, you have two zippers, each with one old half and one new half. The machine that does the building (DNA polymerase) can only work in one direction and needs a little starting tag (RNA primer) — which is why one side gets built in one long piece and the other in short pieces that are later glued together.

## High-Yield Points

- Replication is **semiconservative**: each daughter duplex has one old + one new strand (Meselson–Stahl, ¹⁵N/¹⁴N density-shift experiment).
- **DNA polymerase extends 5′→3′ only** and cannot start a chain without a primer — hence RNA primers and Okazaki fragments.
- Base-pairing rules drive template-directed synthesis: A–T (2 H-bonds), G–C (3 H-bonds).
- New phosphodiester bond: 3′-OH attacks the α-phosphate of dNTP; **pyrophosphate release + hydrolysis drives the reaction**.
- Leading strand: continuous. Lagging strand: Okazaki fragments + RNA primers, joined by DNA ligase after primer removal.
- Error rates: polymerase ~10⁻⁴–10⁻⁵, + proofreading ~10⁻⁷, + mismatch repair ~10⁻⁹–10⁻¹⁰ per base pair.
- Nucleoside-analog antiviral/anticancer drugs (acyclovir, AZT) terminate chain growth — replication chemistry in the clinic.
- Helicase unwinds (ATP), SSBs stabilize, topoisomerase/gyrase relieves supercoiling.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Semiconservative replication | Each daughter duplex keeps one parental strand | The central model; distinguishes replication from conservative/dispersive alternatives |
| DNA polymerase | Enzyme that adds dNTPs to a 3′-OH, 5′→3′ | The core machine; its directionality shapes the whole fork |
| Template strand | Parent strand that specifies the new sequence by base pairing | The information source for the copy |
| Leading strand | New strand synthesized continuously toward the fork | Requires only one primer |
| Lagging strand | New strand made in Okazaki fragments away from the fork | Consequence of 5′→3′ synthesis on an antiparallel template |
| Okazaki fragment | Short discontinuous DNA piece on the lagging strand | Joined later by ligase; named for its discoverer |
| RNA primer | Short RNA start made by primase | Provides the 3′-OH polymerase needs to begin |
| Helicase / SSB / topoisomerase | Unwinding, stabilizing, and supercoil-relieving proteins | The support crew that makes the fork functional |
| DNA ligase | Enzyme that seals nicks between fragments | Completes the phosphodiester backbone |
| Pyrophosphate | \(\text{PP}_\text{i}\), released when a nucleotide joins | Its hydrolysis makes polymerization thermodynamically favorable |
| Telomere / telomerase | Chromosome end structure / extending enzyme | Links replication chemistry to aging and cancer |

## Worked Examples

### Example 1: Write the complement of a template strand

**Problem.** A template strand reads 3′–TACGGAATC–5′. Write the sequence and direction of the newly synthesized strand.

**Step 1 — apply base pairing.** A→T, T→A, C→G, G→C along the template.

Template: 3′–T A C G G A A T C–5′  
Product:   5′–A T G C C T T A G–3′

**Step 2 — direction.** Polymerase copies 5′→3′, so the new strand is written 5′ to 3′, antiparallel to the template.

**Answer.** The new strand is **5′–ATG CCT TAG–3′** (antiparallel complement).

### Example 2: Error-rate arithmetic with dimensional analysis

**Problem.** DNA polymerase makes an error in ~1 in 10⁴ incorporations; proofreading removes ~99% of errors; mismatch repair then removes ~99% of the remaining errors. Estimate the final error rate per base pair.

**Step 1 — after polymerization.**

\[
10^{-4}\ \text{errors/base}
\]

**Step 2 — after proofreading (1% of errors survive).**

\[
10^{-4} \times 0.01 = 10^{-6}\ \text{errors/base}
\]

**Step 3 — after mismatch repair (1% survive).**

\[
10^{-6} \times 0.01 = 10^{-8}\ \text{errors/base}
\]

**Answer.** About \(10^{-8}\) errors per base pair — in the range of the measured ~\(10^{-9}\)–\(10^{-10}\) for E. coli when all repair systems are included. The three-stage cascade reduces errors by a factor of ~10⁴–10⁶.

### Example 3: How many Okazaki fragments for the human lagging strand?

**Problem.** The human genome is about \(3.2 \times 10^9\) base pairs. If lagging-strand Okazaki fragments average ~200 nucleotides, estimate how many fragments are made per full genome replication (one replication of the whole diploid set's single strands — treat the genome as one 3.2 × 10⁹ bp duplex for simplicity).

**Step 1 — nucleotides copied on the lagging strand.** For one copy of the genome, half the newly synthesized DNA (one strand of each duplex) is made discontinuously: \(3.2 \times 10^9\) nucleotides.

**Step 2 — fragments.**

\[
\frac{3.2 \times 10^9\ \text{nucleotides}}{200\ \text{nucleotides/fragment}} = 1.6 \times 10^7\ \text{fragments}
\]

**Answer.** Roughly \(1.6 \times 10^7\) Okazaki fragments per genome replication (order of magnitude \(10^7\); the real number is similar since ~half of all new DNA is lagging-strand). Each needs its own RNA primer and ligation event — a good illustration of why replication is energetically expensive.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| 5′→3′ vs 3′→5′ synthesis | Direction polymerase reads vs writes | Polymerase reads the template 3′→5′ but WRITES the new strand 5′→3′ — the new strand grows at its 3′ end |
| Leading vs lagging strand | Continuous vs discontinuous synthesis | Both are synthesized 5′→3′; they differ in whether synthesis follows or opposes fork movement |
| Conservative vs semiconservative | Two old strands together vs split between daughters | Meselson–Stahl's generation-1 intermediate band rules out conservative replication |
| Replication vs transcription | DNA → DNA vs DNA → RNA | Replication copies the whole genome with primers and high fidelity; transcription copies a gene into RNA, no primer needed for the enzyme (RNA polymerase initiates de novo) |
| DNA polymerase vs ligase | Builds vs seals | Polymerase adds nucleotides to a 3′-OH; ligase joins two pre-existing ends (seals nicks) |
| Pyrophosphate vs phosphate | \(\text{PP}_\text{i}\) vs \(\text{P}_\text{i}\) | \(\text{PP}_\text{i}\) is the two-phosphate leaving group; its hydrolysis (not the bond-forming step itself) drives polymerization |

## Quick Review

1. State the semiconservative model in one sentence, and name the experiment that confirmed it.
2. Why can't DNA polymerase synthesize the lagging strand continuously?
3. What provides the 3′-OH needed to start each Okazaki fragment, and what enzyme makes it?
4. Describe the chemical step that forms a new phosphodiester bond, including the leaving group and the thermodynamic driver.
5. A replication error slips past the polymerase but is caught by proofreading 99% of the time and by mismatch repair 99% of the remaining time. If the polymerase error rate is \(10^{-4}\), what is the final rate?
6. Why do nucleoside analogs like acyclovir and AZT stop viral DNA synthesis?

<details>
<summary>Show answers</summary>

1. Each daughter DNA molecule contains one parental strand and one newly synthesized strand. Confirmed by Meselson and Stahl (1958) using ¹⁵N/¹⁴N density labeling and CsCl gradient centrifugation.
2. Because the two template strands are antiparallel and polymerase only extends chains 5′→3′. On the lagging strand, synthesis must proceed away from the fork, so it happens in short pieces that are each started fresh, then joined.
3. A short RNA primer, synthesized by the enzyme primase, provides the 3′-OH. DNA polymerase then extends from it; the primer is later removed and replaced with DNA.
4. The 3′-OH of the growing chain attacks the α-phosphate of the incoming dNTP, displacing pyrophosphate (PPi) and forming the phosphodiester bond. The subsequent hydrolysis of pyrophosphate by pyrophosphatase makes the overall reaction thermodynamically favorable.
5. 10⁻⁴ × 0.01 × 0.01 = 10⁻⁸ errors per base pair.
6. They are nucleotide analogs that get incorporated into the growing viral DNA chain, but they lack the 3′-OH needed for the next phosphodiester bond — so chain elongation terminates, and viral replication is blocked.
</details>

## Related Topics

- Previous: [Base Pairing in DNA](02-base-pairing-in-dna.md)
- Next: [Transcription of DNA](04-transcription-of-dna.md)
- Related: [Nucleotides and Nucleic Acids](01-nucleotides-and-nucleic-acids.md)
- Related: [DNA Synthesis](07-dna-synthesis.md)
- Related: [The Polymerase Chain Reaction](08-the-polymerase-chain-reaction.md)
- Related: [Nucleic Acids chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants cross-checked against current references (2026-08): human genome size ~3.2 × 10⁹ bp (GRCh38); E. coli polymerase error rate ~10⁻⁴–10⁻⁵ per base, proofreading improves to ~10⁻⁷, total fidelity with mismatch repair ~10⁻⁹–10⁻¹⁰ (standard molecular biology references). Okazaki fragment lengths ~1000–2000 nt (prokaryotes), ~100–200 nt (eukaryotes) per standard references.
- Last updated: 2026-08-16
