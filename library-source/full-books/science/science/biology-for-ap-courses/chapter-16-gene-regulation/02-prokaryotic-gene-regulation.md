---
title: "Prokaryotic Gene Regulation"
subject: "Science"
book: "Biology for AP® Courses"
chapter: "16: Gene Regulation"
topic_number: "2"
source: "biology-ap-courses.md"
tags:
  - "prokaryotic-gene-regulation"
  - "science"
status: "complete"
---

# Prokaryotic Gene Regulation

> **Book:** [Biology for AP® Courses](../../README.md)  
> **Chapter:** [Chapter 16: Gene Regulation](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

Bacteria live in fast-changing environments — nutrients appear and vanish, and survival depends on responding within minutes. Their solution is **transcriptional control built around operons**: groups of related genes transcribed together from a single promoter and regulated as one unit.

Two textbook examples capture nearly all the logic:

- The **lac operon** is *inducible*: off by default, turned on when lactose is present and glucose is scarce.
- The **trp operon** is *repressible*: on by default, turned off when tryptophan is plentiful.

In both cases, small molecules carry environmental information, regulatory proteins translate it into decisions, and RNA polymerase obeys. This topic covers operon parts, negative and positive control, and attenuation — a post-initiation layer in the trp operon.

## Why This Matters

The operon is the clearest demonstration of Topic 1's central idea: cells express genes only when the product is needed. The lac and trp systems show how biology does "logic" — an ON/OFF switch (the repressor) combined with a priority override (the CAP/glucose system) — using only molecules that bind to DNA. This logic is the foundation for eukaryotic regulation: the same protein–DNA interactions, activator/repressor concepts, and signal molecules reappear in Topics 3–7 with more layers added.

Operon logic has practical reach: antibiotic-resistance genes are often regulated operons, metabolic engineering exploits operon design, and the lac promoter drives recombinant protein production. On the AP exam, operon questions are predictable: know the parts and the two switches, and predict phenotypes when components are mutated or small molecules are present or absent.

## Core Concepts

### Anatomy of an operon

An operon is a stretch of DNA containing:

- **Promoter** — where RNA polymerase binds to begin transcription.
- **Operator** — a short sequence, often overlapping the promoter, where a **repressor protein** binds to block transcription.
- **Structural genes** — the protein-coding genes transcribed as one polycistronic mRNA.

A separate **regulatory gene** (not part of the operon) encodes the repressor, made constitutively so it is always available.

### The lac operon: an inducible system

*E. coli* prefers glucose but can use lactose. The lac operon has three structural genes: *lacZ* (β-galactosidase, which cleaves lactose), *lacY* (permease, which imports lactose), and *lacA* (transacetylase). The regulatory gene *lacI* encodes the lac repressor.

- **Default state (no lactose):** the repressor is active and bound to the operator, blocking RNA polymerase.
- **Lactose present:** some lactose is converted into **allolactose**, which binds the repressor, changing its shape so it falls off the operator; RNA polymerase can now transcribe. Because the inducer inactivates the repressor, this is **negative control of an inducible operon** — default OFF, inducer turns ON.

### Positive control: CAP and the glucose override

There is a second switch. If both lactose and glucose are present, *E. coli* still prefers glucose. This is **catabolite repression**, and it works through positive control: when glucose is scarce, the cell accumulates **cAMP**, which binds the **CAP** protein (catabolite activator protein). The CAP–cAMP complex binds upstream of the lac promoter and helps RNA polymerase bind — strongly activating transcription. When glucose is plentiful, cAMP falls, CAP does not bind, and transcription stays weak even with lactose.

So the lac operon is fully ON only when **lactose is present (inducer removes the repressor) AND glucose is absent (CAP–cAMP activates the promoter)** — a molecular AND gate.

### The trp operon: a repressible system

*E. coli* can synthesize tryptophan when it is absent from the environment, but making it costs energy. The trp operon has five structural genes (*trpE–trpA* in the commonly taught arrangement) encoding the tryptophan pathway's enzymes, controlled by a separate *trpR* gene.

- **Default state (no tryptophan):** the trp repressor is inactive, so RNA polymerase transcribes the operon and tryptophan is synthesized.
- **Tryptophan present:** tryptophan itself acts as a **co-repressor**, activating the repressor so it binds the operator and blocks transcription — feedback inhibition at the level of gene expression.

### Attenuation: a second layer in the trp operon

On top of the repressor switch, **attenuation** acts after transcription begins. The mRNA's 5′ end has a **leader sequence** with a short reading frame including two tryptophan codons in a row (commonly taught detail), followed by four regions forming alternative hairpins:

- **High tryptophan:** the ribosome quickly translates through the tryptophan codons, letting regions 3–4 form a **terminator hairpin** that makes RNA polymerase stall and dissociate — transcription stops early.
- **Low tryptophan:** the ribosome stalls at the tryptophan codons, so regions 2–3 form an **anti-terminator hairpin** instead, and transcription continues.

Attenuation fine-tunes expression and couples translation to transcription — possible only because prokaryotes do both simultaneously.

## ELI-10: Explain Like I’m 10

Think of the lac operon as a "lactose kitchen" that is locked by default. When lactose arrives, it acts like a key that unlocks the kitchen so the cooks (enzymes) can work. But if a better meal (glucose) is on the table, the boss (CAP) tells the cooks to take it easy. The trp operon is the opposite: the tryptophan factory runs all the time unless tryptophan piles up — then tryptophan turns it off.

## High-Yield Points

- Operon = promoter + operator + structural genes, transcribed as one polycistronic mRNA; the repressor comes from a separate regulatory gene.
- **lac = inducible, negatively controlled:** repressor active by default; allolactose (inducer) inactivates it → ON.
- **lac positive control:** CAP + cAMP activate transcription when glucose is low; high glucose → low cAMP → weak transcription. Fully ON only with lactose AND low glucose.
- **trp = repressible, negatively controlled:** repressor inactive by default; tryptophan (co-repressor) activates it → OFF.
- **Attenuation (trp leader):** high tryptophan → fast ribosome → 3–4 terminator hairpin → early termination; low tryptophan → stalled ribosome → 2–3 anti-terminator → full transcription.
- Mutations: operator the repressor cannot bind → constitutive ON; nonfunctional *lacI* → constitutive ON; repressor that cannot bind allolactose → permanently OFF.
- Prokaryotic regulation is fast and mostly transcriptional because transcription and translation are coupled (no nucleus).

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| operon | Cluster of genes transcribed as one unit | The unit of prokaryotic gene control |
| promoter | DNA sequence where RNA polymerase binds | Sets where transcription starts |
| operator | DNA sequence where the repressor binds | The switch that blocks transcription |
| repressor | Protein that blocks transcription at the operator | Implements negative control |
| inducer | Small molecule that inactivates a repressor (allolactose) | Turns an inducible operon ON |
| co-repressor | Small molecule that activates a repressor (tryptophan) | Turns a repressible operon OFF |
| CAP | Catabolite activator protein; with cAMP boosts transcription | Implements positive control, glucose preference |
| cAMP | Signal molecule rising when glucose is low | Reports glucose scarcity |
| polycistronic mRNA | One mRNA encoding several proteins | One operon delivers multiple enzymes |
| attenuation | Early transcription termination via leader hairpins | Fine-tunes trp expression |
| catabolite repression | Preference for glucose over other sugars | Keeps alternate-sugar operons off |
| regulatory gene | Gene encoding a regulatory protein (*lacI*, *trpR*) | Supplies the repressor |

## Example: Predicting the lac operon — the "what if" table

What does the lac operon do in each situation (normal repressor, CAP, operator)?

| Environment | Repressor? | CAP–cAMP? | Lac transcription |
|---|---|---|---|
| No lactose, glucose present | Active (bound) | No | **OFF** — no inducer; glucose preferred |
| Lactose present, glucose present | Inactive (allolactose) | No (low cAMP) | **Weak** — induced but not activated |
| Lactose present, no glucose | Inactive | Yes | **FULLY ON** — both switches favor expression |
| No lactose, no glucose | Active | Yes | **OFF** — CAP binds, but repressor blocks |

Now mutate the operator so the repressor cannot bind: the operon is transcribed whether or not lactose is present — **constitutive**. Mutate *lacI* so no functional repressor is made: same result, constitutive expression. This reasoning — change one component, predict the phenotype — is exactly how AP questions test operons.

**Trp analog:** if tryptophan floods the medium, the repressor is activated (OFF), and even the few transcripts that start are cut short by attenuation.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Inducible vs. repressible | Inducer vs. repressor wording | Inducible (lac): OFF by default, inducer turns ON. Repressible (trp): ON by default, co-repressor turns OFF |
| Positive vs. negative control | Both change transcription | Negative = repressor blocks; positive = activator (CAP–cAMP) boosts. lac uses both |
| Inducer (allolactose) | Substrate (lactose) | Lactose is the sugar; allolactose binds the repressor |
| Operator vs. promoter | Two parts of an operon | Promoter recruits RNA polymerase; operator blocks it via repressor. Mutations give different phenotypes |
| Attenuation vs. repression | Two trp layers | Repression stops initiation; attenuation stops elongation after a short leader |
| Constitutive via operator vs. repressor mutation | Same result, different cause | Operator: repressor can't bind. *lacI⁻*: no repressor exists |
| CAP as a repressor | CAP's role in lac | CAP is an *activator*; its absence lowers transcription, it does not block it |

## Quick Review

1. List the parts of an operon and the role of each.
2. Why is the lac operon called "inducible," and what molecule induces it?
3. Under what two conditions is lac transcription fully activated, and which proteins sense each condition?
4. How does tryptophan shut down the trp operon — and what role does attenuation play on top of that?
5. A strain's lac repressor can never bind the operator. What is the expression phenotype, and why?
6. Why can bacteria regulate almost entirely at the transcriptional level, while eukaryotes cannot?

<details>
<summary>Show answers</summary>

1. Promoter (RNA polymerase binds), operator (repressor binds to block transcription), and structural genes (pathway enzymes, one polycistronic mRNA). A separate regulatory gene encodes the repressor.
2. Because it is OFF by default and must be switched ON. The inducer is allolactose, which binds and inactivates the lac repressor.
3. Lactose present (allolactose inactivates the repressor) AND glucose low (cAMP rises, CAP–cAMP activates the promoter). Repressor senses lactose; CAP senses glucose via cAMP.
4. Tryptophan activates the repressor (co-repressor), blocking initiation. Attenuation adds a second layer: high tryptophan → ribosome clears the leader's Trp codons → a terminator hairpin ends transcription early.
5. Constitutive expression — the operon is transcribed even without lactose, because RNA polymerase is never blocked at the operator.
6. Because transcription and translation are coupled in bacteria (no nucleus), transcriptional control acts almost instantly, and bacterial mRNAs are short-lived. Eukaryotes have a nuclear membrane, long-lived mRNAs, and complex chromatin, so they need multiple regulatory layers.
</details>

## Related Topics

- Previous: [Regulation of Gene Expression](01-regulation-of-gene-expression.md)
- Next: [Eukaryotic Epigenetic Gene Regulation](03-eukaryotic-epigenetic-gene-regulation.md)
- Related: [Eukaryotic Transcriptional Gene Regulation](04-eukaryotic-transcriptional-gene-regulation.md) · [Eukaryotic Post-Transcriptional Gene Regulation](05-eukaryotic-post-transcriptional-gene-regulation.md)
- Chapter: [Gene Regulation chapter overview](../README.md)
- Back: [Genes and Proteins chapter overview](../chapter-15-genes-and-proteins/README.md)

## Source Notes

- Book: Biology for AP® Courses
- Local outline source: `biology-ap-courses.md`
- Official source URL: https://openstax.org/details/books/biology-ap-courses/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
