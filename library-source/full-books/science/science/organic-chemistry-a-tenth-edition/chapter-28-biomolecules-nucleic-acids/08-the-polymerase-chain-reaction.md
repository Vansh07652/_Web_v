---
title: "The Polymerase Chain Reaction"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "28: Biomolecules: Nucleic Acids"
topic_number: "8"
source: "organic-chemistry.md"
tags:
  - "the-polymerase-chain-reaction"
  - "science"
status: "complete"
---

# The Polymerase Chain Reaction

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 28: Biomolecules: Nucleic Acids](../README.md)  
> **Topic:** 8  
> **Source structure:** OpenStax public textbook outline

## Overview

The **polymerase chain reaction (PCR)** is a method for making millions of copies of a specific DNA segment in a test tube. Invented by Kary Mullis in 1983, it exploits the same chemistry cells use for replication — a DNA polymerase extending a primer — but drives it in cycles with temperature instead of enzymes. Each cycle has three phases: **denaturation** (heat melts the double helix apart), **annealing** (two short synthetic primers base‑pair to the single strands, bracketing the target region), and **extension** (a heat‑stable polymerase copies each strand, starting from the primers). Because every cycle doubles the amount of target DNA, amplification is exponential: after \(n\) cycles, one starting molecule yields roughly \(2^n\) copies.

The polymerase used is **Taq polymerase**, isolated from the hot‑spring bacterium *Thermus aquaticus*, because it survives the ~95 °C denaturation step that would destroy most enzymes. PCR requires only a template, two primers, the four dNTPs, Taq, and a magnesium‑containing buffer — a handful of reagents that can amplify a single molecule of DNA into a usable quantity.

## Why This Matters

PCR is the most widely used technique in molecular biology. It is the basis of forensic DNA profiling — a few cells from a crime scene can identify a suspect or exonerate the innocent. It detects infectious agents directly: the standard test for SARS‑CoV‑2 was RT‑PCR, which first converts viral RNA to DNA with reverse transcriptase and then amplifies it. PCR prepares DNA for sequencing, cloning, and genotyping; it recovers DNA from ancient bones; and quantitative PCR (qPCR) measures how much of a gene is present, which is how labs monitor gene expression and viral load. For a chemist, PCR is also a perfect case study in reaction optimization — specificity, temperature, and reagent ratios all matter.

## Core Concepts

### The components and their jobs

Every PCR has five ingredients. The **template** is the DNA containing the target sequence. The **two primers** are synthetic oligonucleotides (typically 18–24 nucleotides, made by chemical DNA synthesis) complementary to the two ends of the target region — one for each strand — and they provide the 3′‑OH groups where polymerase starts. The **four dNTPs** are the monomers. **Taq polymerase** extends the primers, and **Mg²⁺** (in the buffer) is the essential cofactor. The primers define the specificity: only the region between them is amplified, no matter how large the genome it came from.

### The thermal cycle: denature, anneal, extend

One cycle has three temperature steps. **Denaturation** at ~94–96 °C breaks the hydrogen bonds between strands. **Annealing** at ~50–65 °C lets the primers base‑pair with their complementary sequences (the temperature is chosen near the primers' melting temperature, \(T_m\), for specificity). **Extension** at ~72 °C — Taq's optimum — lets the polymerase add nucleotides to each primer, copying the template strand 5′→3′. The cycle repeats 25–40 times; each cycle's products become templates for the next, which is what makes the amplification exponential.

### Exponential amplification and its limits

Each cycle ideally doubles the target, so after \(n\) cycles the copy number is

\[
N = N_0 \times 2^n
\]

where \(N_0\) is the starting number of target molecules. This exponential phase cannot last forever: as primers and dNTPs run out and polymerase activity decays, the reaction reaches a **plateau**. The equation also assumes perfect efficiency; real reactions run 80–100% efficient. Because amplification is exponential, contamination is a constant enemy — a single stray DNA molecule can be amplified alongside the sample, which is why PCR labs use dedicated pipettes, separate rooms, and negative controls.

### Variations: RT‑PCR and qPCR

**RT‑PCR** (reverse transcription PCR) adds a first step in which reverse transcriptase converts RNA into complementary DNA (cDNA), allowing RNA viruses and gene expression to be detected. **Quantitative PCR (qPCR)**, also called real‑time PCR, monitors the reaction while it runs by measuring a fluorescent signal that grows each cycle (from a dye such as SYBR Green or from sequence‑specific probes). The cycle number at which fluorescence crosses a threshold — the **Ct value** — is inversely related to the starting amount of template, so qPCR measures how much DNA or RNA was originally present, not just that it was present.

## ELI-10: Explain Like I'm 10

> PCR is like a photocopier for DNA. You put in one page (the DNA), and the machine heats it so the page splits into two halves, sticks two bookmarks (primers) onto the halves, and copies each half into a full page again. Now you have two pages. Do it again and you get four, then eight — each time you run the cycle, the number doubles, and after thirty rounds one page has become over a billion.

## High-Yield Points

- PCR = denature (~95 °C) → anneal (~50–65 °C) → extend (~72 °C), repeated 25–40 times; Taq polymerase survives the heat.
- Copy number grows as \(N = N_0 \times 2^n\) during the exponential phase; amplification is exponential, not linear.
- Primers define specificity: only the region between the two primers is amplified, regardless of genome size.
- Taq polymerase comes from the hot‑spring bacterium *Thermus aquaticus*; it needs Mg²⁺ and works 5′→3′ with no proofreading.
- RT‑PCR adds reverse transcriptase to detect RNA (viruses, gene expression); qPCR measures starting amounts via fluorescence and Ct values.
- Contamination is the classic failure mode: one stray molecule can be amplified; controls (no‑template, positive) are mandatory.
- Applications: forensics, infectious‑disease diagnosis, cloning, sequencing prep, ancient DNA, genotyping.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| polymerase chain reaction | Cycled enzymatic amplification of a chosen DNA region | The workhorse of molecular biology and diagnostics |
| primer | Short synthetic DNA that anneals and provides the 3′‑OH for extension | Defines what gets amplified; two primers bracket the target |
| Taq polymerase | Heat‑stable DNA polymerase from *Thermus aquaticus* | Survives denaturation temperatures, enabling automated cycling |
| denaturation | Heating to ~95 °C to separate DNA strands | Makes the strands available for primer binding |
| annealing | Cooling so primers base‑pair with the template | Sets specificity; temperature tuned near primer \(T_m\) |
| extension | Polymerase copying the template from each primer at ~72 °C | The copying step; doubles the target each cycle |
| amplicon | The DNA region between the two primers | The only sequence amplified — its length is set by primer positions |
| RT‑PCR / qPCR | Reverse‑transcription PCR / quantitative (real‑time) PCR | Detect RNA; measure starting amounts via fluorescence |
| Ct value | Cycle threshold — cycle number where fluorescence crosses threshold | Lower Ct = more starting template; basis of viral‑load tests |

## How It Works / Step-by-Step Process

1. Assemble: template DNA, two primers flanking the target, four dNTPs, Taq polymerase, Mg²⁺ buffer — in a small tube.
2. Denature: heat to ~94–96 °C for ~30 s; the double helix separates into single strands.
3. Anneal: cool to ~50–65 °C for ~30 s; each primer base‑pairs to its complementary sequence, defining the amplicon ends.
4. Extend: warm to ~72 °C for ~30–60 s per kilobase; Taq copies each strand 5′→3′ from each primer.
5. Repeat steps 2–4 for 25–40 cycles; the copy number doubles each cycle (\(N = N_0 2^n\)) until reagents are exhausted.
6. Analyze the product by gel electrophoresis (a band of the expected amplicon size), sequencing, or qPCR fluorescence.

## Worked Examples

### Example 1: How many copies after 30 cycles?

A forensic sample contains 10 copies of a target sequence. After 30 ideal cycles, the copy number is

\[
N = N_0 \times 2^n = 10 \times 2^{30}
\]

Since \(2^{30} = 1.0737 \times 10^9\):

\[
N = 10 \times 1.0737 \times 10^9 \approx 1.07 \times 10^{10}\ \text{copies}
\]

That is enough DNA to see by eye on a gel. How much mass is that? For a 200‑bp amplicon, the molar mass of the double‑stranded product is about

\[
200\ \text{bp} \times 660\ \frac{\text{g/mol}}{\text{bp}} = 1.32 \times 10^5\ \text{g/mol}
\]

The number of moles is \(1.07 \times 10^{10} / 6.022 \times 10^{23} = 1.78 \times 10^{-14}\ \text{mol}\), so the mass is

\[
1.78 \times 10^{-14}\ \text{mol} \times 1.32 \times 10^5\ \frac{\text{g}}{\text{mol}} = 2.35 \times 10^{-9}\ \text{g} \approx 2.4\ \text{ng}
\]

Starting from ten molecules, 30 cycles yield about 2.4 ng of product — the sensitivity that makes PCR revolutionary.

### Example 2: How many cycles to reach detection?

A viral test needs \(10^{12}\) copies to be detected reliably, and the sample starts with 100 copies. The required fold‑amplification is

\[
\frac{10^{12}}{100} = 10^{10}
\]

Solving \(2^n = 10^{10}\) for \(n\):

\[
n = \log_2(10^{10}) = 10 \times \log_2(10) \approx 10 \times 3.32 = 33.2
\]

So about 34 cycles are needed. This is why standard PCR protocols run 30–40 cycles: enough to amplify even trace amounts, but not so many that the plateau and accumulated errors dominate.

### Example 3: Estimating primer annealing temperature

The simplest estimate of a primer's melting temperature (the Wallace rule) is

\[
T_m \approx 2 \times (\#\text{A}+\#\text{T}) + 4 \times (\#\text{G}+\#\text{C})
\]

For the 12‑mer primer 5′–GCATCGTAAGCT–3′: it has 6 A/T pairs and 6 G/C pairs, so

\[
T_m \approx 2(6) + 4(6) = 12 + 24 = 36\ \text{°C}
\]

Annealing is typically run 3–5 °C below \(T_m\), around 31–33 °C for this primer — a quick check that helps design compatible primer pairs.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| PCR | Cloning or sequencing | PCR only copies DNA in a tube; cloning inserts DNA into cells, sequencing reads it |
| PCR amplifies the whole genome | PCR amplifies only the amplicon | Only the region between the two primers is amplified, whatever the genome size |
| "PCR makes DNA from RNA directly" | RT‑PCR | Plain PCR needs a DNA template; detecting RNA requires reverse transcriptase first (RT‑PCR) |
| Annealing temperature | Extension temperature | Annealing (~50–65 °C) is for primer binding; extension (~72 °C) is Taq's copying optimum |
| Exponential growth forever | Exponential growth limited | Reagents and enzyme activity run out; the reaction plateaus |
| Primer | Probe | A primer is extended by polymerase; a probe only binds (and reports fluorescence) without being extended |
| Taq polymerase proofreads | Taq has no proofreading | Taq lacks a 3′→5′ exonuclease, so errors accumulate — fine for diagnostics, a concern for cloning |

## Quick Review

1. List the three temperature steps of a PCR cycle and what happens in each.
2. Why is Taq polymerase used instead of a typical cellular DNA polymerase?
3. A reaction starts with 1,000 copies and runs 25 ideal cycles. How many copies result?
4. What determines the length of the amplified product (amplicon)?
5. What is the difference between RT‑PCR and qPCR?
6. Why are negative (no‑template) controls essential in PCR?

<details>
<summary>Show answers</summary>

1. Denaturation (~94–96 °C) separates the strands; annealing (~50–65 °C) lets the primers bind; extension (~72 °C) lets Taq copy each strand.
2. Taq comes from *Thermus aquaticus* and survives the ~95 °C denaturation step; ordinary polymerases would be denatured each cycle.
3. \(1000 \times 2^{25} = 1000 \times 3.36 \times 10^7 \approx 3.4 \times 10^{10}\) copies.
4. The positions of the two primers: the amplicon is exactly the region between them (plus their own lengths).
5. RT‑PCR first converts RNA to cDNA with reverse transcriptase so RNA can be amplified; qPCR (real‑time PCR) measures fluorescence during the run, giving the starting amount via Ct values. (They are often combined: RT‑qPCR.)
6. Because PCR amplifies exponentially, even one contaminating DNA molecule can produce a false positive; a no‑template control that stays negative proves the reagents and workspace are clean.
</details>

## Related Topics

- Previous: [DNA Synthesis](07-dna-synthesis.md)
- Next: End of chapter
- Related: [DNA Sequencing](06-dna-sequencing.md)
- Related: [Replication of DNA](03-replication-of-dna.md)
- Related: [Base Pairing in DNA](02-base-pairing-in-dna.md)
- Related: [Biomolecules: Nucleic Acids chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: 660 g/mol per base pair of double‑stranded DNA (≈ 330 g/mol per nucleotide); \(2^{30} = 1.07 \times 10^9\); \(\log_2(10) \approx 3.32\); Wallace rule \(T_m \approx 2(\text{A+T}) + 4(\text{G+C})\); standard textbook values (2026-08).
- Last updated: 2026-08-16
