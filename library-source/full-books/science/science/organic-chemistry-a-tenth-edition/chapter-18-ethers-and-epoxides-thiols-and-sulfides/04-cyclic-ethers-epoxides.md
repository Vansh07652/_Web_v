---
title: "Cyclic Ethers: Epoxides"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "18: Ethers and Epoxides; Thiols and Sulfides"
topic_number: "4"
source: "organic-chemistry.md"
tags:
  - "cyclic-ethers-epoxides"
  - "science"
status: "complete"
---

# Cyclic Ethers: Epoxides

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 18: Ethers and Epoxides; Thiols and Sulfides](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

Most cyclic ethers are just ethers whose two carbon groups are joined into a ring — tetrahydrofuran (THF, five-membered) and tetrahydropyran (THP, six-membered) are everyday solvents and protecting-group motifs. **Epoxides** are the exception that changes everything: a three-membered ring containing one oxygen. The ring forces the C–O–C angle to roughly 60°, far from the ideal ~110°, so the molecule carries ~25 kcal/mol (about 105 kJ/mol) of ring strain. That strain makes epoxides dramatically more reactive than open-chain ethers: they react with nucleophiles under conditions where diethyl ether would sit unchanged, and their ring-opening reactions (topic 5) are among the most important transformations in the chapter.

This topic is about the epoxide itself: its structure, its strain, how it is named, and the two standard ways to make it — **peracid epoxidation of alkenes** and **cyclization of halohydrins**. Understanding the geometry (the strained ring, the polar C–O bonds) and the stereochemistry of formation (peracid epoxidation is syn and stereospecific; halohydrin cyclization is intramolecular S_N2 with anti stereochemistry) prepares you to predict everything that follows.

## Why This Matters

Epoxides are everywhere in chemistry and biology because strain makes them reactive, and reactivity is useful. Industrially, ethylene oxide (the simplest epoxide) is produced on a massive scale — roughly 20 million tons per year — as the feedstock for ethylene glycol (antifreeze, polyester fiber), surfactants, and sterilizing gas for medical equipment. Propylene oxide feeds polyurethane production. In the body, epoxides are generated as intermediates when enzymes oxidize alkenes and arenes (for example, in drug metabolism); some of these epoxide intermediates are the reactive species that damage DNA — a key step in chemical carcinogenesis — while **epoxide hydrolase** enzymes exist precisely to open them to less reactive diols. Epoxide ring-opening is also the core chemistry of epoxy adhesives and resins (the "epoxy" in epoxy glue). For exams, epoxides are the gift that keeps giving: predict the product, predict the stereochemistry, and choose the synthesis — all three question types appear constantly.

## Core Concepts

### Structure and strain of the oxirane ring

An epoxide is a three-membered cyclic ether; the parent compound is **oxirane** (ethylene oxide), \(\text{C}_2\text{H}_4\text{O}\). Key structural facts:

- **Bond angles:** the C–O–C and C–C–O angles are forced to ~60°, far from the tetrahedral ideal of ~109.5°. 
- **Ring strain:** approximately 25 kcal/mol (105 kJ/mol) — comparable to cyclopropane's ~27 kcal/mol — arising from angle strain plus some torsional strain. Releasing this strain is the thermodynamic driving force for ring-opening reactions.
- **Polarity:** the C–O bonds are strongly polarized, and the oxygen's lone pairs are available, so epoxides can be activated both by nucleophiles (attacking carbon directly) and by acids (protonating oxygen first).

### Naming epoxides

Three naming systems are in common use, and you must recognize all of them:

1. **Oxirane system (IUPAC):** the ring is oxirane; substituents get locants: 2-methyloxirane for propylene oxide.
2. **Epoxyalkane system:** the ring is named as an "epoxy" substituent on the alkane: 1,2-epoxypropane; for cycloalkenes, cyclohexene oxide (1,2-epoxycyclohexane).
3. **Common names:** ethylene oxide (oxirane), propylene oxide (methyloxirane), styrene oxide (phenylethylene oxide), epichlorohydrin (chloromethyl oxirane, industrially important for epoxy resins).

### Peracid epoxidation of alkenes

The cleanest synthesis: treat an alkene with a **peroxyacid** (peracid), most commonly mCPBA (meta-chloroperoxybenzoic acid):

\[
\text{R}_2\text{C}=\text{CR}_2 + \text{R}'\text{CO}_3\text{H} \longrightarrow \text{R}_2\text{C}\text{–}\text{CR}_2\!-\!\text{O} + \text{R}'\text{CO}_2\text{H}
\]

Mechanistically, the peracid transfers its terminal oxygen to the alkene in a **concerted, syn addition**: both new C–O bonds form on the same face of the double bond, and the C=C stereochemistry is fully preserved. A cis alkene gives a cis epoxide; a trans alkene gives a trans epoxide. This stereospecificity makes peracid epoxidation a reliable, predictable reaction — no carbocations, no rearrangements, and the double bond's geometry is stamped onto the product.

### Epoxidation via halohydrins (cyclization)

The other classical route uses the **halohydrin** intermediate: an alkene reacts with a halogen in water to give a β-halo alcohol (anti addition), and treatment with base cyclizes it by intramolecular S_N2 — the alkoxide displaces the halide from the adjacent carbon with **anti stereochemistry**:

\[
\text{R}_2\text{C}=\text{CR}_2 \xrightarrow{\text{Br}_2,\ \text{H}_2\text{O}} \text{R}_2\text{C(OH)–C(Br)R}_2 \xrightarrow{\text{NaOH}} \text{R}_2\text{C}\text{–}\text{CR}_2\!-\!\text{O}
\]

Because both steps are anti, the overall transformation converts a trans alkene into a trans epoxide and a cis alkene into a cis epoxide — same stereochemical outcome as peracid epoxidation, reached by a different mechanism.

### Other routes and biological generation

- **From diols:** treating a 1,2-diol with certain reagents (e.g., \(\text{PPh}_3\)/DEAD, or via cyclic sulfates) closes the ring, but this is less common than the two routes above.
- **Biologically:** cytochrome P450 enzymes epoxidize alkenes and arenes using O₂; the resulting arene oxides are often the reactive intermediates in toxicity and carcinogenesis (they are opened by epoxide hydrolase to trans-diols, which can in turn be re-epoxidized — the famous "bay region" pathway for polycyclic aromatic hydrocarbons).

### Handling epoxides safely

Ethylene oxide is a colorless gas at room temperature (bp ~10.7 °C), highly flammable, and a known carcinogen; propylene oxide is a volatile liquid with similar hazards. General laboratory and industrial principles: work with volatile epoxides in well-ventilated fume hoods with no ignition sources, use sealed systems for the gas, and treat epoxides as alkylating agents — they react with nucleophiles in tissue (including DNA), so avoid skin contact. These are general safety principles, not recipe instructions.

## ELI-10: Explain Like I'm 10

> An epoxide is a triangle made of two carbons and one oxygen. Triangles are rigid, and this one is stretched tight like a rubber band — that stored "tightness" is ring strain. Because it's so tight, the epoxide desperately wants to open up into a floppy chain, so it reacts with things that ordinary ethers ignore. Making one is like taking a double-bonded pair (an alkene) and clipping an oxygen across it with a special scissors (a peracid) — the oxygen lands on the same side of the double bond every time.

## High-Yield Points

- Epoxide = 3-membered cyclic ether (oxirane); ring strain ~25 kcal/mol (105 kJ/mol) drives reactivity.
- Bond angles ~60°; the strain is mostly angle strain.
- Peracid epoxidation (mCPBA) is **syn and stereospecific**: cis alkene → cis epoxide; trans alkene → trans epoxide.
- Halohydrin route: anti addition of \(\text{X}_2/\text{H}_2\text{O}\), then base → epoxide by intramolecular S_N2 (also overall anti/stereospecific).
- Naming: oxirane / epoxyalkane / common names (ethylene oxide, propylene oxide, styrene oxide).
- Epoxides react with both nucleophiles (basic conditions) and acids — unlike dialkyl ethers (topic 5).
- Ethylene oxide is the industrial giant (glycols, polyurethanes, sterilization); biologically, epoxides from P450 oxidation are key to drug metabolism and carcinogenesis.
- Handle volatile epoxides in hoods, away from ignition sources; they are alkylating agents.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Epoxide / oxirane | Three-membered cyclic ether | The strained, reactive cyclic ether of this topic |
| Ring strain | Destabilization from angle/torsional strain in small rings | ~25 kcal/mol in oxirane; the engine of epoxide reactivity |
| mCPBA | meta-Chloroperoxybenzoic acid, a peroxyacid | The standard reagent for stereospecific alkene epoxidation |
| Syn addition | Both new bonds form on the same face | Why cis alkenes give cis epoxides |
| Halohydrin | β-Halo alcohol, \(\text{X–C–C–OH}\) | Key intermediate for the base-catalyzed cyclization route to epoxides |
| Anti stereochemistry | New bonds form on opposite faces | Halohydrin formation and its cyclization are both anti |
| Ethylene oxide | Oxirane, \(\text{C}_2\text{H}_4\text{O}\) | Industrial cornerstone: glycols, sterilization, surfactants |
| Arene oxide | Epoxide formed on an aromatic ring by P450 oxidation | Reactive metabolite central to toxicity/carcinogenesis pathways |
| Epoxide hydrolase | Enzyme that opens epoxides to trans-diols | The body's defense against reactive epoxide intermediates |

## Worked Examples

### Example 1: Predict the epoxidation product of cis-2-butene

**Problem.** cis-2-Butene reacts with mCPBA. Draw/describe the product and its stereochemistry.

**Step 1 — identify the alkene geometry.** cis-2-Butene has both methyl groups on the same side of the C=C.

**Step 2 — apply syn, stereospecific addition.** The peracid delivers oxygen to one face of the double bond; both C–O bonds form on that same face, locking the methyl groups' relative positions.

**Step 3 — product.** **cis-2,3-Dimethyloxirane** (the methyl groups remain on the same side of the new ring):

\[
\text{cis-CH}_3\text{CH}=\text{CHCH}_3 \xrightarrow{\text{mCPBA}} \text{cis-2,3-dimethyloxirane}
\]

**Answer.** cis-2,3-Dimethyloxirane forms with complete retention of the alkene's stereochemistry. (Trans-2-butene would give the trans epoxide — the two products are diastereomers, not the same compound.)

### Example 2: Epoxide from a halohydrin — cyclohexene → cyclohexene oxide

**Problem.** Convert cyclohexene to 1,2-epoxycyclohexane using the halohydrin route.

**Step 1 — halohydrin formation.** Cyclohexene + \(\text{Br}_2\) in water gives **trans-2-bromocyclohexanol** (anti addition: Br from one face, OH from the other).

**Step 2 — cyclization.** Aqueous base deprotonates the OH; the alkoxide does an intramolecular S_N2, displacing Br from the adjacent carbon. Since the alkoxide and the bromide are on opposite faces (anti), the ring closes with the oxygen on the face opposite the departing Br.

**Step 3 — product.** 1,2-Epoxycyclohexane (cyclohexene oxide):

\[
\text{cyclohexene} \xrightarrow{1.\ \text{Br}_2,\ \text{H}_2\text{O}\ \ 2.\ \text{NaOH}} \text{cyclohexene oxide}
\]

**Answer.** Cyclohexene oxide forms via trans-2-bromocyclohexanol; the two anti steps guarantee the stereochemical outcome.

### Example 3: Naming practice with dimensional reasoning about the reagent

**Problem.** A student needs to epoxidize 5.0 g of styrene (molar mass 104.15 g/mol) to styrene oxide using mCPBA (molar mass 172.57 g/mol). The reaction is 1:1 in moles. What mass of mCPBA is required (assuming pure reagent)?

**Step 1 — moles of alkene.**

\[
5.0\ \text{g} \times \frac{1\ \text{mol}}{104.15\ \text{g}} = 0.0480\ \text{mol styrene}
\]

**Step 2 — moles of peracid (1:1).**

\[
0.0480\ \text{mol styrene} \times \frac{1\ \text{mol mCPBA}}{1\ \text{mol styrene}} = 0.0480\ \text{mol mCPBA}
\]

**Step 3 — mass of peracid.**

\[
0.0480\ \text{mol} \times 172.57\ \frac{\text{g}}{\text{mol}} = 8.3\ \text{g mCPBA}
\]

**Answer.** 8.3 g of pure mCPBA; in practice a modest excess (1.1–1.5 equiv) is used because commercial mCPBA is ~77% pure by weight.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Epoxide vs ordinary ether | THF/diethyl ether vs oxirane | Epoxide ring strain (~25 kcal/mol) makes it react with nucleophiles/acid; acyclic ethers need harsh HX (topic 3) |
| Peracid epoxidation vs H₂O₂ epoxidation | mCPBA vs plain hydrogen peroxide | mCPBA works on simple alkenes at rt; H₂O₂ usually needs a catalyst (e.g., tungstate) — reagent matters |
| Syn epoxidation vs anti halohydrin | Stereochemistry of the two routes | Both give the same net geometry (cis→cis, trans→trans), but peracid is a single syn step; halohydrin route is two anti steps |
| Oxirane vs oxetane/oxolane | Ring sizes | Oxirane = 3-membered (epoxide); oxetane = 4; oxolane = 5 (THF); names encode ring size |
| Epoxide hydrolase vs P450 | Enzyme that opens epoxides vs enzyme that makes them | P450 forms epoxides; epoxide hydrolase opens them to trans-diols — opposing halves of the same metabolic cycle |

## Quick Review

1. What is the approximate ring strain of oxirane, and what causes it?
2. cis-3-Hexene is treated with mCPBA. What is the stereochemistry of the epoxide?
3. Write the two steps of the halohydrin route from an alkene to an epoxide, naming each mechanism.
4. Name the epoxide of propene (propylene oxide) in all three naming systems.
5. How many grams of mCPBA (172.57 g/mol) are required to epoxidize 2.00 g of cyclohexene (82.14 g/mol) if a 1.20 molar excess is used?
6. Why is ethylene oxide both industrially valuable and biologically hazardous?

<details>
<summary>Show answers</summary>

1. About 25 kcal/mol (105 kJ/mol), caused mainly by angle strain: the 60° ring angles are far from the ~109.5° tetrahedral ideal.
2. cis-3-Hexene gives the cis epoxide (cis-3,4-dimethyl... i.e., cis-3,4-epoxyhexane, with the ethyl groups on the same side). Peracid epoxidation is syn and stereospecific.
3. Step 1: alkene + X₂/H₂O → halohydrin (anti addition of X and OH). Step 2: base → intramolecular S_N2 ring closure (anti), giving the epoxide.
4. Oxirane system: 2-methyloxirane. Epoxyalkane: 1,2-epoxypropane. Common name: propylene oxide.
5. Stoichiometric mCPBA = 2.00 g × (1 mol/82.14 g) × (1 mol mCPBA/1 mol alkene) × 172.57 g/mol = 4.20 g; with 1.20× excess: 5.04 g.
6. Industrially valuable: ~20 million tons/yr feedstock for ethylene glycol, surfactants, polyols, and medical-device sterilization. Biologically hazardous: it is a volatile, flammable alkylating agent (carcinogen) that reacts with nucleophiles in tissue, including DNA.
</details>

## Related Topics

- Previous: [Reactions of Ethers: Acidic Cleavage](03-reactions-of-ethers-acidic-cleavage.md)
- Next: [Reactions of Epoxides: Ring-Opening](05-reactions-of-epoxides-ring-opening.md)
- Related: [Preparing Ethers](02-preparing-ethers.md)
- Related: [Alkenes: Reactions and Synthesis](../chapter-08-alkenes-reactions-and-synthesis/README.md)
- Related: [Ethers and Epoxides; Thiols and Sulfides chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants cross-checked against current references (PubChem, 2026-08): oxirane ring strain ≈ 25 kcal/mol (~105 kJ/mol); ethylene oxide bp 10.7 °C; mCPBA molar mass 172.57 g/mol, commercial purity ~77%; styrene molar mass 104.15 g/mol; cyclohexene molar mass 82.14 g/mol (standard references).
- Last updated: 2026-08-16
