---
title: "Intramolecular Olefin Metathesis"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "31: Synthetic Polymers"
topic_number: "6"
source: "organic-chemistry.md"
tags:
  - "intramolecular-olefin-metathesis"
  - "science"
status: "complete"
---

# Intramolecular Olefin Metathesis

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 31: Synthetic Polymers](../README.md)  
> **Topic:** 6  
> **Source structure:** OpenStax public textbook outline

## Overview

When a molecule contains **two double bonds in the same chain** — an α,ω-diene — olefin metathesis can occur *within* that one molecule instead of between two molecules. The two alkenes trade alkylidene fragments with the metal catalyst, and the chain curls around so its two ends couple, closing a ring and releasing one molecule of ethylene. This is **ring-closing metathesis (RCM)**, the intramolecular partner of the polymerization reactions in Topic 5:

\[
\text{CH}_2{=}\text{CH}{-}(\text{CH}_2)_n{-}\text{CH}{=}\text{CH}_2 \xrightarrow{\text{Ru catalyst}} \text{cycloalkene} + \text{CH}_2{=}\text{CH}_2
\]

RCM is one of the most important reactions in modern organic synthesis. Because Grubbs-type ruthenium catalysts tolerate alcohols, esters, amides, and many other functional groups, RCM closes five-, six-, seven-, and even large-membered rings in complex, heavily functionalized molecules — exactly the rings that dominate natural products and pharmaceuticals. It was used, for example, in syntheses of macrocyclic antibiotics and in the industrial preparation of fine chemicals. The ring size formed is a competition between **entropy** (closing a ring costs freedom of motion) and **enthalpy** (forming a new C=C and losing ethylene); medium rings (8–11 atoms) are the hardest to close because their closure is entropically costly and their rings are strained, while 5-, 6-, and large rings (>12) close readily.

## Why This Matters

- **Ring construction is the heart of synthesis.** Most natural products and drugs contain rings, and RCM builds them from simple open-chain dienes in one step under mild conditions — a feat that classical methods achieve only with many steps.
- **Macrocycle synthesis.** Large rings (12+ atoms) are notoriously hard to make by classical cyclization, but RCM closes them efficiently at moderate dilution; this made routes to macrocyclic drugs (e.g., certain antibiotics and antiviral agents) practical.
- **The ROMP/RCM competition is a real design problem.** The same catalyst that polymerizes a diene (ADMET, Topic 5) can close it into a ring instead. Understanding which outcome dominates — and how to steer it (concentration, ring size, substitution) — is a genuine skill tested in exams and used in process chemistry.
- **Exam value.** Expect problems that (a) draw the ring-closed product of a given diene, (b) choose ring size or concentration to favor RCM over polymerization, and (c) identify which bonds the new alkene contains.

## Core Concepts

### The RCM reaction and its byproduct

RCM is intramolecular metathesis: the catalyst's metal alkylidene reacts with one C=C, the resulting metal species travels along the chain, and the second C=C closes the loop. The byproduct is **ethylene**, which is volatile and removed (or simply escapes) to drive the equilibrium. The reaction is formally the reverse of ADMET polymerization — the same chemistry, different regiochemical outcome. The key rule of thumb: **high dilution favors intramolecular (ring) reaction; high concentration favors intermolecular (polymer) reaction.**

### The entropy–enthalpy balance of ring closure

Closing a ring costs entropy (the open chain has more conformational freedom) and is only favorable when the product ring is stable and the byproduct is lost. Small rings (3–4 atoms) are too strained to form by metathesis. Five- and six-membered rings close easily and are the workhorses of RCM. Seven-membered rings close well. **Medium rings (8–11 atoms)** are the hardest: their closure is entropically unfavorable and the rings carry transannular strain, so RCM of medium rings typically needs higher dilution and more forcing conditions. **Macrocycles (12+ atoms)** close surprisingly well because the ring strain is low and the two alkene ends can find each other; macrocyclization is a celebrated strength of RCM.

### Functional-group tolerance: why RCM is so useful

The Grubbs ruthenium catalysts (Topic 5) tolerate alcohols, esters, amides, ethers, and many heterocycles — precisely the functionality found in natural products. This means RCM can be performed late in a synthesis, on a fully decorated intermediate, without protecting-group gymnastics. Early Schrock catalysts were far more sensitive, which limited early applications; the ruthenium catalysts opened the field.

### Stereochemistry of the ring alkene

The new C=C inside the ring is formed by metathesis and can be (E) or (Z). For medium and macrocyclic rings, the geometry is often dictated by ring strain: (Z)-cycloalkenes are favored for 8–11-membered rings (the (E) isomer is too strained), while both geometries are accessible for large rings. Catalyst choice can also bias geometry (Z-selective metathesis catalysts are an active research area). In rings of 5–7 atoms, the double bond's position is set by where the two alkene carbons were in the diene.

### RCM in action: from dienes to drugs

A typical RCM substrate is a diene built by standard coupling chemistry; RCM then closes the ring. The reaction is used across synthesis: from simple cyclic ethers and amines (tetrahydrofuran, pyrrolidine, piperidine motifs) to complex macrocyclic natural products. The 2015 medicine **simeprevir** (hepatitis C) and the macrocyclic antifungal/antibiotic families are among the products whose syntheses have relied on RCM. The scale-up of RCM for industrial manufacture required solving catalyst loading and dilution economics — a good illustration of how a laboratory reaction becomes a process.

## ELI-10: Explain Like I'm 10

Ring-closing metathesis is like a snake that bites its own tail: a long molecule with a double bond at each end bends around, and the metal catalyst helps the two ends join, letting out a little puff of ethylene gas. It is the same trick as chain-making (Topic 5), but this time the molecule chooses to make a loop instead of a line.

## High-Yield Points

- **RCM** = intramolecular olefin metathesis of an α,ω-diene → cyclic alkene + **ethylene**; favored at **high dilution** (intermolecular ADMET polymerization wins at high concentration).
- Thermodynamics: 5- and 6-membered rings close easily; **medium rings (8–11) are hardest** (entropy + transannular strain); **macrocycles (12+) close well** (low strain) — a famous strength of RCM.
- Catalysts: Grubbs ruthenium complexes are the practical choice; functional-group tolerance (esters, amides, alcohols) enables late-stage ring closures in complex molecules.
- RCM is the intramolecular counterpart of ADMET (Topic 5): same chemistry, opposite regiochemical outcome; ethylene loss drives both.
- Ring alkene geometry can be (E) or (Z); ring strain and catalyst design control it (Z-selective catalysts exist).
- Applications: synthesis of cyclic ethers/amines, macrocyclic natural products, and drugs such as simeprevir.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Ring-closing metathesis (RCM) | Intramolecular metathesis that closes a diene into a cyclic alkene | One of the most powerful ring-forming reactions in modern synthesis |
| α,ω-Diene | Molecule with a C=C at each end of a chain | The standard RCM substrate |
| Ethylene byproduct | CH₂=CH₂ released when the two alkene ends couple | Its loss drives the equilibrium; removed to push RCM to completion |
| High dilution | Low reactant concentration favoring intramolecular over intermolecular reaction | The practical switch that selects RCM over ADMET polymerization |
| Medium ring | Ring of 8–11 atoms | Hardest to form by RCM (entropy + strain) |
| Macrocycle | Ring of 12 or more atoms | Closed readily by RCM; key to many natural-product and drug syntheses |
| Grubbs catalyst | Ru alkylidene complex tolerant of air, moisture, and functional groups | Made RCM a routine, broadly applicable synthetic tool |

## Worked Examples

### Example 1: Predicting the RCM product of a simple diene

**Problem.** 1,7-Octadiene (CH₂=CH–(CH₂)₄–CH=CH₂) is treated with a Grubbs catalyst at high dilution. Predict the ring product and the byproduct.

**Step 1 — Count the atoms between the alkenes.** The chain between the two terminal alkene carbons is –(CH₂)₄– plus the two alkene carbons themselves: the ring that closes contains 6 carbon atoms.

**Step 2 — Write the product.** The two terminal carbons couple through a new C=C: the product is **cyclohexene** (six-membered ring with one double bond).

**Step 3 — State the byproduct.** The two terminal CH₂= groups leave as one ethylene molecule.

**Answer.** Cyclohexene plus ethylene. (Note: 1,7-octadiene's numbering means the ring is C6; a common trap is mis-counting and writing cycloheptene.)

### Example 2: Choosing conditions for ring vs chain

**Problem.** A 1,9-decadiene (CH₂=CH–(CH₂)₆–CH=CH₂) can either close to a ring (RCM) or polymerize (ADMET). What condition favors the ring, and what ring would form?

**Step 1 — Apply the concentration rule.** Intramolecular reaction is first-order in the diene; intermolecular is second-order. Lower concentration (high dilution, slow addition) favors RCM.

**Step 2 — Count the ring.** Chain between alkene carbons = –(CH₂)₆– plus the two alkene carbons = 8-membered ring: **cyclooctene**.

**Step 3 — Note the caveat.** Cyclooctene is a medium ring; it closes but may need higher dilution or more forcing conditions than a six-membered ring would.

**Answer.** High dilution favors RCM over ADMET, giving cyclooctene (plus ethylene); the 8-membered ring is more demanding than a 6-membered one.

### Example 3: RCM in a functionalized molecule

**Problem.** A synthesis intermediate is a diene bearing an ester group: CH₂=CH–CH₂–O–C(=O)–CH₂–CH₂–CH=CH₂. Can RCM close this to a ring without destroying the ester? What ring forms?

**Step 1 — Assess compatibility.** Grubbs ruthenium catalysts tolerate esters, so the ester survives.

**Step 2 — Trace the ring.** The two alkene carbons are connected through –CH₂–O–C(=O)–CH₂–CH₂–; counting the atoms in the closed loop (alkene carbons + 5 intervening atoms) gives a 7-membered ring containing the ester oxygen and carbonyl: a **caprolactone-like** unsaturated lactone ring.

**Step 3 — State the product class.** The product is an unsaturated 7-membered lactone (a cyclic ester with one C=C), formed with loss of ethylene.

**Answer.** RCM closes the diene to an unsaturated 7-membered lactone without touching the ester; ethylene is the byproduct. This is the kind of functional-group-laden ring closure that makes RCM indispensable in natural-product synthesis.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| RCM | ADMET | RCM is intramolecular (diene → ring + ethylene); ADMET is intermolecular (dienes → polymer + ethylene). Concentration selects between them |
| Ring size from diene numbering | Ring size by atom count | Count *all* atoms in the closed loop, including the two alkene carbons; the chain between them plus 2 = ring size |
| RCM byproduct | Metathesis catalyst | Ethylene is the byproduct and leaves; the ruthenium catalyst is regenerated each turnover and is not consumed |
| Medium rings | Small rings | 5–7 rings close easily; 8–11 (medium) are hardest; 12+ (macrocycles) close well. Small 3–4 rings are too strained to form by metathesis |
| Z-alkene in ring | E-alkene in ring | For medium rings, (Z) is strongly favored (the (E) isomer is too strained); for large rings both are possible, and catalysts can be Z-selective |

## Quick Review

1. Write the general RCM equation for an α,ω-diene and name the byproduct.
2. Why does high dilution favor ring closure over polymerization?
3. Which ring sizes are easiest and hardest to form by RCM, and why?
4. Why are Grubbs ruthenium catalysts preferred over early Schrock catalysts for RCM in complex molecules?
5. A 1,8-nonadiene (CH₂=CH–(CH₂)₅–CH=CH₂) undergoes RCM. What ring forms?
6. Name one class of molecule whose synthesis is a celebrated application of RCM.

<details>
<summary>Show answers</summary>

1. CH₂=CH–(CH₂)ₙ–CH=CH₂ → cycloalkene + CH₂=CH₂ (ethylene), catalyzed by a metal alkylidene (e.g., Grubbs catalyst).
2. Ring closure is intramolecular (first-order in the diene); polymerization is intermolecular (second-order). Dilution lowers the bimolecular rate far more than the unimolecular one, so the ring wins.
3. Five- and six-membered rings close easily; medium rings (8–11) are hardest (entropy cost plus transannular strain); macrocycles (12+) close well because ring strain is low — RCM's celebrated strength.
4. Grubbs ruthenium catalysts tolerate air, moisture, alcohols, esters, amides, and other functional groups, so they can close rings on fully decorated, complex intermediates without destroying them; Schrock catalysts are far more sensitive.
5. A 7-membered ring (cycloheptene): the chain between the alkene carbons is 5 atoms, plus the two alkene carbons = 7.
6. Macrocyclic natural products and macrocyclic drugs (e.g., macrocyclic antibiotics/antivirals such as those made in simeprevir-type syntheses) — macrocyclization by RCM is a flagship application.

</details>

## Related Topics

- Previous: [Olefin Metathesis Polymerization](05-olefin-metathesis-polymerization.md)
- Related: [Step-Growth Polymers](04-step-growth-polymers.md) and [Chain-Growth Polymers](01-chain-growth-polymers.md) (polymerization contexts for the same metathesis chemistry), [Polymer Structure and Physical Properties](07-polymer-structure-and-physical-properties.md)
- Chapter overview: [Chapter 31: Synthetic Polymers](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure. The RCM reaction, its ethylene byproduct, the dilution rule, the entropy/enthalpy ring-size trends, and the functional-group tolerance of Grubbs catalysts are standard textbook organometallic/polymer chemistry. The simeprevir example is cited as an illustration of RCM in drug synthesis; no clinical claims are made.
- Lab safety note: RCM reactions use air-sensitive catalysts and often flammable solvents; run under inert atmosphere with proper ventilation and PPE per institutional rules (general principles only, not procedures).
- Last updated: 2026-08-16
