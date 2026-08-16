---
title: "Olefin Metathesis Polymerization"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "31: Synthetic Polymers"
topic_number: "5"
source: "organic-chemistry.md"
tags:
  - "olefin-metathesis-polymerization"
  - "science"
status: "complete"
---

# Olefin Metathesis Polymerization

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 31: Synthetic Polymers](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

**Olefin metathesis** is a metal-catalyzed reaction in which the carbon–carbon double bonds of alkenes are broken and re-formed to give new alkenes: the two carbons of a C=C "trade partners," so the alkylidene fragments (–CHR=) swap between alkenes. The word *metathesis* comes from Greek, meaning "to change places," which is exactly what happens. In the polymerization version, a cyclic alkene such as norbornene is opened and reconnected into a long-chain polymer — **ring-opening metathesis polymerization (ROMP)** — while acyclic dienes can be coupled with loss of ethylene in **acyclic diene metathesis (ADMET)**.

The reaction is catalyzed by transition-metal alkylidene complexes: **Schrock catalysts** (early metals such as molybdenum and tungsten) and **Grubbs catalysts** (ruthenium). The mechanism, established by Yves Chauvin, proceeds through a **metallacyclobutane intermediate**: the metal–carbon double bond (M=CHR) reacts with the alkene's C=C in a [2+2]-like cycloaddition, forming a four-membered ring, which then cycloreverts to give a new metal alkylidene and a new alkene. Chauvin, Schrock, and Grubbs shared the **2005 Nobel Prize in Chemistry** for metathesis. Because the reaction tolerates many functional groups and is remarkably mild, ROMP is a powerful route to specialty polymers — from the dicyclopentadiene thermoset of automotive body panels to precisely structured materials for biomedical and electronic applications.

## Why This Matters

- **A Nobel-winning, functional-group-tolerant reaction.** Metathesis works in the presence of esters, amides, and even water — Grubbs catalysts made it practical outside rigorous glovebox conditions, transforming how chemists build C=C bonds.
- **Industrial materials.** ROMP of dicyclopentadiene (DCPD) gives a tough, impact-resistant thermoset used for automotive parts and wind-turbine blades; metathesis is also used to make specialty elastomers and fine chemicals.
- **The mechanism is the story.** The metallacyclobutane mechanism explains why metathesis is *not* a simple swap of substituents through a four-center transition state — and it is a favorite exam topic.
- **Synthetic power.** Olefin metathesis builds C=C bonds under mild conditions and is a standard tool in natural-product and pharmaceutical synthesis (see Topic 6 for the intramolecular version).

## Core Concepts

### The metathesis reaction in one line

Two alkenes exchange alkylidene fragments:

\[
R_1CH{=}CHR_2 + R_3CH{=}CHR_4 \xrightarrow{\text{catalyst}} R_1CH{=}CHR_3 + R_2CH{=}CHR_4
\]

For polymerization, the useful forms are: (a) **ROMP** — a cyclic alkene's ring is opened and the pieces link into a linear polymer that retains the C=C in the backbone; (b) **ADMET** — an α,ω-diene (CH₂=CH–R–CH=CH₂) couples head-to-tail with release of ethylene gas, which is removed to drive the equilibrium. The thermodynamic engine of ADMET is the loss of volatile ethylene; ROMP is driven by relief of ring strain in small-ring monomers such as norbornene and cyclooctene.

### The Chauvin mechanism: metallacyclobutane

1. **Coordination.** The alkene's C=C approaches the metal–carbon double bond of the catalyst (M=CHR).
2. **Cycloaddition.** A [2+2] cycloaddition forms a four-membered **metallacyclobutane** ring (M–C–C–C).
3. **Cycloreversion.** The ring breaks in the opposite sense, giving a *new* alkene and a *new* metal alkylidene — the chain's active end.

Each turnover regenerates the metal alkylidene, so one catalyst molecule processes many alkenes. The two possible cleavage modes of the metallacycle (which C–C bond breaks) determine whether the original alkene is reformed or a new one is produced — the reaction is reversible, and product selectivity comes from thermodynamics (strain relief in ROMP, ethylene loss in ADMET).

### ROMP: ring strain drives chain growth

Norbornene (bicyclo[2.2.1]hept-2-ene) is a highly strained cyclic alkene; ROMP opens its double bond and links the rings through their former alkene carbons:

\[
n\,(\text{norbornene}) \rightarrow [{-}\text{CH}{=}\text{CH}{-}(\text{cyclopentylene bridge}){-}]_n
\]

The product, **polynorbornene**, retains one C=C per repeat unit in the backbone. Because the ring-opening relieves strain, the reaction is exergonic and proceeds under mild conditions with high catalyst turnover. Monomers with multiple rings (DCPD) cross-link during polymerization, giving thermoset networks.

### Catalyst generations: Schrock vs Grubbs

- **Schrock catalysts:** early-transition-metal (Mo, W) alkylidenes with bulky alkoxide/amide ligands; very active and stereoselective but air- and moisture-sensitive, requiring careful handling.
- **Grubbs catalysts:** ruthenium alkylidene complexes (first generation: Ru with tricyclohexylphosphine ligands; second generation: with an N-heterocyclic carbene ligand); far more tolerant of air, moisture, and functional groups, at some cost in activity and stereocontrol. The second-generation catalysts expanded metathesis into routine organic synthesis.

### Stereochemistry of the product double bond

The new C=C formed in each turnover can be (E) or (Z), and catalyst design can favor one geometry. ROMP polymers with high (E) content are more rigid and crystalline; (Z)-rich polymers are more flexible. Stereocontrol in metathesis is an active research field (e.g., stereoretentive catalysts that preserve the alkene geometry of the monomer).

## ELI-10: Explain Like I'm 10

Olefin metathesis is like a dance where couples swap partners: two alkene "couples" (C=C bonds) meet on a metal dance floor, break apart, and re-pair so each dancer ends up with a new partner. In ROMP, a ring-shaped molecule is a circle of dancers that the metal breaks open and joins into a long conga line.

## High-Yield Points

- **Metathesis** = C=C bonds break and re-form; alkylidene fragments swap. Catalyzed by metal alkylidenes (M=CHR).
- **Chauvin mechanism:** alkene + M=CHR → [2+2] → **metallacyclobutane** → cycloreversion → new alkene + new M=CHR. Reversible; product selection is thermodynamic.
- **ROMP:** ring-opening metathesis polymerization of strained cyclic alkenes (norbornene, cyclooctene, DCPD) → polymers with C=C in the backbone; driven by ring-strain relief.
- **ADMET:** acyclic dienes couple with loss of **ethylene gas**; driven by removing the volatile byproduct.
- Catalysts: **Schrock** (Mo/W; powerful, air-sensitive) vs **Grubbs** (Ru; air- and functional-group-tolerant). Chauvin, Schrock, Grubbs — **2005 Nobel Prize in Chemistry**.
- Product C=C can be (E) or (Z); geometry affects polymer crystallinity and flexibility.
- Applications: polynorbornene elastomers, DCPD thermosets (automotive), metathesis in fine-chemical synthesis.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Olefin metathesis | Metal-catalyzed exchange of alkylidene fragments between alkenes | Nobel-winning reaction; builds C=C bonds under mild conditions |
| Alkylidene | Metal–carbon double bond fragment M=CHR | The catalyst's active group that trades partners with alkenes |
| Metallacyclobutane | Four-membered M–C–C–C ring intermediate | The key intermediate in the Chauvin mechanism |
| ROMP | Ring-opening metathesis polymerization of cyclic alkenes | Converts strained rings into linear polymers with backbone C=C bonds |
| ADMET | Acyclic diene metathesis; dienes couple with ethylene loss | Polymerizes α,ω-dienes; driven by removing ethylene |
| Schrock catalyst | Mo/W alkylidene complex | Very active, stereoselective; air- and moisture-sensitive |
| Grubbs catalyst | Ru alkylidene complex | Functional-group-tolerant; made metathesis practical in synthesis |
| Norbornene | Bicyclo[2.2.1]hept-2-ene, a strained cyclic alkene | Classic ROMP monomer (polynorbornene) |

## Worked Examples

### Example 1: Writing the ROMP repeat unit

**Problem.** Cyclooctene (an eight-membered ring, C₈H₁₄, one C=C) undergoes ROMP. Write the repeat unit of the polymer and state what drives the reaction.

**Step 1 — Identify the monomer's alkene.** Cyclooctene's C=C is opened by the catalyst; the ring is cut at that double bond.

**Step 2 — Write the repeat unit.** The ring opens into a chain segment –CH=CH–(CH₂)₆–, so the polymer repeat unit is [–CH=CH–(CH₂)₆–].

**Step 3 — State the driving force.** Ring strain in the eight-membered ring is relieved on ring opening; the backbone retains one C=C per repeat unit.

**Answer.** Poly(cyclooctene) with repeat unit [–CH=CH–(CH₂)₆–], formed because ring opening relieves strain; the backbone double bonds remain available for further chemistry (e.g., cross-linking).

### Example 2: Balancing the ADMET equation

**Problem.** 1,9-Decadiene (CH₂=CH–(CH₂)₆–CH=CH₂) is polymerized by ADMET. What is the repeat unit, what is the byproduct, and why is the byproduct removed?

**Step 1 — Write the coupling.** The terminal C=C of one molecule reacts with the terminal C=C of another; the two CH₂= groups combine and are expelled as ethylene (CH₂=CH₂).

**Step 2 — Write the repeat unit.** The remaining chain is –CH=CH–(CH₂)₆–, so the repeat unit is [–CH=CH–(CH₂)₆–] — the same connectivity as ROMP of cyclooctene.

**Step 3 — Explain removal.** Metathesis is reversible; removing volatile ethylene by vacuum or gas flow (Le Chatelier) drives the equilibrium toward polymer.

**Answer.** Repeat unit [–CH=CH–(CH₂)₆–] with ethylene as the byproduct; the ethylene is removed continuously to push the equilibrium to high conversion.

### Example 3: Choosing a catalyst for a functional-group-rich monomer

**Problem.** A chemist plans to polymerize a norbornene derivative bearing an ester group by ROMP and will run the reaction in air with ordinary solvents. Which catalyst class is the practical choice, and why?

**Step 1 — Compare tolerance.** Schrock (Mo/W) catalysts are very active but air- and moisture-sensitive; Grubbs (Ru) catalysts tolerate air, moisture, and functional groups such as esters.

**Step 2 — Match to conditions.** The planned conditions (air, ordinary solvents, ester monomer) favor the more robust catalyst.

**Step 3 — Note the trade-off.** Ru may give lower stereocontrol or activity than Mo for demanding cases, but the practical robustness wins here.

**Answer.** A Grubbs-type ruthenium catalyst — its functional-group tolerance and air stability make it the practical choice for an ester-bearing monomer under bench conditions.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Metathesis | Simple [2+2] dimerization | Metathesis goes through a metallacyclobutane and *exchanges fragments*, giving new alkenes; a plain [2+2] would just form a cyclobutane |
| ROMP | ADMET | ROMP opens a cyclic alkene (ring strain drives it); ADMET couples acyclic dienes with ethylene loss (equilibrium-driven) |
| Schrock catalyst | Grubbs catalyst | Mo/W (very active, air-sensitive) vs Ru (robust, functional-group-tolerant) |
| ROMP polymer backbone C=C | Side-chain C=C | In ROMP the double bond is *in* the backbone (from the opened ring); side-chain double bonds would come from substituted monomers |
| Metathesis catalyst | Ziegler–Natta catalyst | Both are metal-catalyzed alkene polymerizations, but Ziegler–Natta inserts monomer into a M–C bond (Topic 2); metathesis swaps alkylidene fragments through a metallacycle |

## Quick Review

1. Write the three steps of the Chauvin mechanism for olefin metathesis.
2. What drives ROMP thermodynamically, and what drives ADMET?
3. Why can ADMET be pushed to completion by removing a byproduct, and what is it?
4. What are the two main catalyst families, and what practical difference separates them?
5. What is the repeat unit formed by ROMP of norbornene?
6. Who shared the 2005 Nobel Prize in Chemistry for metathesis, and for what contribution?

<details>
<summary>Show answers</summary>

1. Coordination of the alkene to the metal alkylidene (M=CHR); [2+2] cycloaddition to form the metallacyclobutane; cycloreversion to give a new alkene and a new metal alkylidene.
2. ROMP is driven by relief of ring strain in cyclic monomers (norbornene, cyclooctene); ADMET is driven by the loss of volatile ethylene, which is removed to shift the equilibrium.
3. Ethylene (CH₂=CH₂); removing it continuously (vacuum or gas sweep) drives the reversible metathesis toward polymer by Le Chatelier's principle.
4. Schrock catalysts (molybdenum/tungsten — very active and stereoselective but air- and moisture-sensitive) and Grubbs catalysts (ruthenium — robust, air-stable, functional-group-tolerant).
5. [–CH=CH–(cyclopentylene bridge)–], i.e., the opened norbornene ring linked through its former alkene carbons, retaining one C=C per repeat unit.
6. Yves Chauvin (mechanism), Robert H. Grubbs and Richard R. Schrock (catalysts) — Chauvin proposed the metallacyclobutane mechanism, and Grubbs/Schrock developed practical catalysts.

</details>

## Related Topics

- Previous: [Step-Growth Polymers](04-step-growth-polymers.md)
- Next: [Intramolecular Olefin Metathesis](06-intramolecular-olefin-metathesis.md)
- Related: [Chain-Growth Polymers](01-chain-growth-polymers.md) (another metal-catalyzed chain-growth route: Ziegler–Natta, Topic 2), [Polymer Structure and Physical Properties](07-polymer-structure-and-physical-properties.md)
- Chapter overview: [Chapter 31: Synthetic Polymers](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure. The Chauvin metallacyclobutane mechanism, the Schrock/Grubbs catalyst families, the ROMP/ADMET distinction, and the 2005 Nobel Prize (Chauvin, Grubbs, Schrock) are standard, well-documented chemistry facts. Repeat units and monomer structures are drawn as textual/SMILES-style descriptions per repository convention.
- Lab safety note: metathesis catalysts are sensitive reagents; ruthenium and molybdenum compounds require proper handling, ventilation, and PPE, and reactions may involve flammable solvents and gases (ethylene) — general principles only, follow institutional safety rules.
- Last updated: 2026-08-16
