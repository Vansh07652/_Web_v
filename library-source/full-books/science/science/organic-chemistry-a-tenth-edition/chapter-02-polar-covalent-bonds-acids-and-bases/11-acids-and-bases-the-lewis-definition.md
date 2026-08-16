---
title: "Acids and Bases: The Lewis Definition"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "2: Polar Covalent Bonds; Acids and Bases"
topic_number: "11"
source: "organic-chemistry.md"
tags:
  - "acids-and-bases-the-lewis-definition"
  - "science"
status: "complete"
---

# Acids and Bases: The Lewis Definition

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 2: Polar Covalent Bonds; Acids and Bases](../README.md)  
> **Topic:** 11  
> **Source structure:** OpenStax public textbook outline

## Overview

The Brønsted–Lowry definition of acids and bases is built around proton transfer, but many chemical reactions — especially in organic chemistry — involve electron-pair donation without any proton moving. G. N. Lewis proposed a broader definition in 1923: **a Lewis acid is an electron-pair acceptor, and a Lewis base is an electron-pair donor.** The product of a Lewis acid–base reaction is called an **adduct** (or complex), and the new bond formed is a **coordinate covalent bond**, in which both electrons come from the Lewis base. This definition includes all Brønsted acids and bases (a proton \( \text{H}^+ \) is an electron-pair acceptor; hydroxide and amines are electron-pair donors) but also covers species with no protons at all: boron trifluoride (\( \text{BF}_3 \), electron-deficient), aluminum chloride (\( \text{AlCl}_3 \)), carbocations, and essentially every metal cation. In organic chemistry the Lewis framework is the language of **nucleophiles and electrophiles** — the electron-rich and electron-poor partners that drive most reactions — making this topic the conceptual bridge between acid–base theory and the reaction mechanisms that follow.

## Why This Matters

- **Reaction mechanism vocabulary:** every nucleophile–electrophile reaction is a Lewis acid–base reaction. Recognizing which atom is electron-rich and which is electron-poor tells you where bonds will form before you learn any specific mechanism.
- **Catalysis:** \( \text{BF}_3 \), \( \text{AlCl}_3 \), \( \text{FeBr}_3 \), and \( \text{TiCl}_4 \) are Lewis acid catalysts in industrial and laboratory chemistry — for example, \( \text{AlCl}_3 \) catalyzes Friedel–Crafts acylation by accepting a chloride ion to generate the reactive acylium ion.
- **Biochemistry:** metal ions (\( \text{Mg}^{2+} \), \( \text{Zn}^{2+} \), \( \text{Fe}^{3+} \)) act as Lewis acids in enzymes; ATP binding to \( \text{Mg}^{2+} \) and zinc in carbonic anhydrase are classic examples.
- **Bonding insight:** the coordinate covalent bond explains why \( \text{NH}_4^+ \), \( \text{H}_3\text{O}^+ \), and \( \text{BF}_3\cdot\text{NH}_3 \) exist and why they are stable.

## Core Concepts

### The Lewis definitions

\[ \text{Lewis acid: electron-pair acceptor (electrophile)} \qquad \text{Lewis base: electron-pair donor (nucleophile)} \]

A reaction between a Lewis acid A and a Lewis base B: forms an adduct with a coordinate covalent bond:

\[ \text{A} + \text{B} \rightarrow \text{A}{:}\text{B} \quad \text{(adduct)} \]

The double-headed arrow (curved arrow) in mechanism drawings shows the electron pair moving from the base's lone pair (or π bond) to the acid's empty orbital. For example, \( \text{BF}_3 + \text{NH}_3 \rightarrow \text{F}_3\text{B}{-}\text{NH}_3 \): the nitrogen lone pair of ammonia fills the empty p orbital of boron, and the adduct \( \text{F}_3\text{B}{-}\text{NH}_3 \) forms. In the adduct, boron is tetrahedral and both B–N electrons came from nitrogen — a coordinate covalent bond.

### Relationship to the Brønsted–Lowry definition

Every Brønsted acid–base reaction is also a Lewis reaction, but not vice versa. The proton \( \text{H}^+ \) is the ultimate Lewis acid — an empty 1s orbital — so \( \text{H}^+ + \text{OH}^- \rightarrow \text{H}_2\text{O} \) is a Lewis reaction (OH⁻ donates a lone pair to H⁺). But \( \text{BF}_3 + \text{NH}_3 \) involves no proton transfer at all, so only the Lewis definition covers it. The Lewis definition is therefore the most general; the Brønsted definition is a special case limited to proton transfer.

### Common Lewis acids and bases in organic chemistry

**Lewis acids (electron-pair acceptors):**
- Molecules with an incomplete octet: \( \text{BF}_3 \), \( \text{AlCl}_3 \), \( \text{FeBr}_3 \), \( \text{BBr}_3 \), carbocations \( \text{R}_3\text{C}^+ \), and \( \text{H}^+ \).
- Metal cations: \( \text{Mg}^{2+} \), \( \text{Zn}^{2+} \), \( \text{Fe}^{3+} \), \( \text{Cu}^{2+} \).
- Polarized π systems: the carbonyl carbon of aldehydes/ketones/esters acts as a Lewis acid toward nucleophiles.

**Lewis bases (electron-pair donors):**
- Species with lone pairs: amines (\( \text{R}_3\text{N} \)), ethers (\( \text{R}_2\text{O} \)), alcohols, water, halide ions (\( \text{Cl}^- \), \( \text{Br}^- \), \( \text{I}^- \)), hydroxide, thiols (\( \text{RSH} \)).
- π-bond electrons: alkenes and aromatic rings donate their π electrons to Lewis acids such as \( \text{Br}_2 \) or \( \text{H}^+ \) — the first step of addition and substitution reactions.

### Why some species are stronger Lewis acids: the boron trihalide puzzle

Among the boron trihalides, the Lewis acidity toward a fixed base follows the order \( \text{BF}_3 < \text{BCl}_3 < \text{BBr}_3 \). Fluorine is the most electronegative halogen, so you might expect \( \text{BF}_3 \) to be the strongest acid — but it is the weakest. The reason is **π back-donation**: fluorine's lone pairs overlap with boron's empty p orbital, partially filling the octet that the incoming base must fill. The better the halogen's lone-pair overlap with boron (F > Cl > Br), the less the boron "needs" the base, and the weaker the Lewis acidity. This effect (called π donation or back-bonding) is an exam favorite.

### Lewis acids and bases in catalysis

In Friedel–Crafts acylation, aluminum chloride catalyzes the reaction by accepting a chloride ion from acetyl chloride:

\[ \text{AlCl}_3 + \text{CH}_3\text{COCl} \rightarrow \text{AlCl}_4^- + \text{CH}_3\text{CO}^+ \quad \text{(acylium ion)} \]

The acylium ion, a powerful electrophile (Lewis acid), then accepts electron density from the aromatic ring (a Lewis base). The mechanism is: aluminum chloride pulls a chloride off the acyl chloride (AlCl₃ is the Lewis acid, chloride the Lewis base), generating the reactive acylium cation, which is then attacked by the π electrons of the benzene ring. This single concept — electron-pair acceptance — explains the entire catalytic cycle.

## ELI-10: Explain Like I'm 10

> Think of a Lewis base as someone with spare LEGO bricks (electrons) and a Lewis acid as someone with an empty LEGO board (an empty spot for electrons). The base shares its bricks with the acid, and they click together into one piece. Some acids don't even have protons to give — like boron trifluoride, which just has an empty spot and wants bricks. The Brønsted idea was only about giving away a hydrogen atom; the Lewis idea is about sharing building blocks, which covers many more situations.

## High-Yield Points

- **Lewis acid = electron-pair acceptor (electrophile); Lewis base = electron-pair donor (nucleophile).** No proton needed.
- Product of a Lewis acid–base reaction = **adduct**, held by a **coordinate covalent bond** (both electrons from the base).
- Every Brønsted reaction is a Lewis reaction (H⁺ is a Lewis acid); the reverse is false — \( \text{BF}_3 + \text{NH}_3 \) involves no proton transfer.
- Incomplete-octet molecules (\( \text{BF}_3 \), \( \text{AlCl}_3 \), carbocations) and metal cations are Lewis acids; lone-pair species (amines, ethers, halides) and π bonds are Lewis bases.
- Boron trihalide acidity: \( \text{BF}_3 < \text{BCl}_3 < \text{BBr}_3 \) because F's lone pairs best fill boron's empty p orbital (π back-donation).
- \( \text{AlCl}_3 \) catalyzes Friedel–Crafts acylation by abstracting Cl⁻ to form the acylium ion \( \text{CH}_3\text{CO}^+ \), the actual electrophile.
- Nucleophile/electrophile terminology in later chapters is Lewis base/Lewis acid in disguise.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Lewis acid | Electron-pair acceptor (electrophile) | The broadest definition of "acid"; covers H⁺, BF₃, AlCl₃, carbocations, metal ions |
| Lewis base | Electron-pair donor (nucleophile) | Covers lone-pair species and π bonds; the reactive partner in most organic mechanisms |
| Adduct | The product of a Lewis acid–base reaction | \( \text{F}_3\text{B}{-}\text{NH}_3 \) is an adduct; adduct formation explains coordination chemistry |
| Coordinate covalent bond | A bond whose two electrons come from one partner | Explains \( \text{NH}_4^+ \), \( \text{H}_3\text{O}^+ \), and metal–ligand bonds |
| Electrophile | Electron-loving species; another name for Lewis acid | Electrophiles are attacked by nucleophiles in reaction mechanisms |
| Nucleophile | Nucleus-loving species; another name for Lewis base | Nucleophiles donate electron pairs to electrophiles |
| π back-donation | Halogen lone pairs filling boron's empty p orbital | Explains why \( \text{BF}_3 \) is the weakest boron trihalide Lewis acid |
| Acylium ion | \( \text{RCO}^+ \), a resonance-stabilized carbocation | The actual electrophile in Friedel–Crafts acylation, generated by AlCl₃ |

## Worked Examples

### Example 1: Classifying a reaction — BF₃ + NH₃

**Problem:** Identify the Lewis acid and Lewis base in \( \text{BF}_3 + \text{NH}_3 \rightarrow \text{F}_3\text{B}{-}\text{NH}_3 \), and describe the bonding change.

**Plan and formula:** boron in \( \text{BF}_3 \) has 3 valence electrons and forms 3 B–F bonds with 6 shared electrons — an incomplete octet (6 electrons, not 8). It needs two more electrons, so it is the electron-pair acceptor: the **Lewis acid**. Nitrogen in \( \text{NH}_3 \) has a lone pair not involved in bonding; it can donate it: the **Lewis base**.

**Answer:** \( \text{BF}_3 \) is the Lewis acid; \( \text{NH}_3 \) is the Lewis base. The nitrogen lone pair forms a coordinate covalent bond to boron, and boron becomes tetrahedral (4 bonds, complete octet). The adduct \( \text{F}_3\text{B}{-}\text{NH}_3 \) is stable and isolable. This reaction pattern — empty orbital fills with lone pair — is the template for countless organic reactions, including amine–borane reducing agents.

### Example 2: Ranking Lewis acidity of the boron trihalides

**Problem:** Rank \( \text{BF}_3 \), \( \text{BCl}_3 \), and \( \text{BBr}_3 \) by Lewis acidity toward ammonia, and explain the trend.

**Plan and formula:** Lewis acidity depends on how much the boron "wants" the incoming base, which depends on how well its empty p orbital is already filled by halogen lone pairs (π back-donation). Overlap of halogen lone pairs with boron's empty p orbital: F (2p–2p, best overlap) > Cl (3p–2p) > Br (4p–2p, worst overlap).

\[ \text{π back-donation: } \text{BF}_3 > \text{BCl}_3 > \text{BBr}_3 \qquad \Rightarrow \qquad \text{Lewis acidity: } \text{BF}_3 < \text{BCl}_3 < \text{BBr}_3 \]

**Answer:** \( \text{BBr}_3 \) is the strongest Lewis acid toward ammonia, \( \text{BF}_3 \) the weakest — the opposite of what electronegativity alone predicts. Fluorine's lone pairs fill boron's empty orbital most effectively, so \( \text{BF}_3 \) has the least need for ammonia's electrons. This counterintuitive trend is a standard exam question.

### Example 3: The carbonyl carbon as a Lewis acid

**Problem:** The carbonyl group of an aldehyde, \( \text{R}_2\text{C}{=}\text{O} \), reacts with a hydride ion \( \text{H}^- \) (as in \( \text{NaBH}_4 \) reduction). Identify the Lewis acid and base, and describe the product.

**Plan and formula:** in the carbonyl, the oxygen is more electronegative than carbon, so the π bond is polarized: carbon carries a partial positive charge and has an empty p orbital that can accept electron density. The hydride ion carries a lone pair. Therefore:

\[ \text{Lewis acid: carbonyl carbon (δ+)} \qquad \text{Lewis base: hydride, } \text{H}^- \]

**Answer:** the hydride lone pair forms a new C–H bond at the carbonyl carbon; the π electrons shift onto oxygen, giving an alkoxide \( \text{R}_2\text{CH}{-}\text{O}^- \), which is protonated to the alcohol \( \text{R}_2\text{CH}{-}\text{OH} \) on workup. This one Lewis acid–base step — nucleophilic addition to a polarized π bond — is the foundation of carbonyl chemistry in later chapters.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Lewis acid | Brønsted acid | A Brønsted acid must donate a proton; a Lewis acid only needs to accept an electron pair (BF₃, AlCl₃, carbocations have no proton to donate). |
| Lewis base | Brønsted base | Brønsted bases accept protons; Lewis bases donate electron pairs — π bonds and halide ions count even when no proton is involved. |
| Coordinate covalent bond | Ordinary covalent bond | Both have a shared pair; only the *origin* differs (coordinate: both electrons from one partner). The resulting bond is indistinguishable once formed. |
| Electrophile/nucleophile | Lewis acid/base | Same concept, different vocabulary: mechanisms use electrophile/nucleophile; acid–base theory uses Lewis acid/base. |
| BF₃ strength by electronegativity | BF₃ strength by π back-donation | Electronegativity alone predicts BF₃ strongest; π back-donation makes it weakest. The π effect wins. |
| Adduct | Reaction intermediate | An adduct is an isolable product of Lewis acid + base; intermediates are transient species along a reaction path. |

## Quick Review

1. Define Lewis acid and Lewis base in your own words, without mentioning protons.
2. Why is every Brønsted acid–base reaction also a Lewis acid–base reaction, but not the reverse?
3. In \( \text{AlCl}_3 + \text{Cl}^- \rightarrow \text{AlCl}_4^- \), which species is the Lewis acid and which is the Lewis base? What is the product called?
4. Why is \( \text{BF}_3 \) a weaker Lewis acid than \( \text{BBr}_3 \) toward ammonia, even though fluorine is more electronegative than bromine?
5. Identify the Lewis acid and Lewis base in the reaction of an alkene with \( \text{H}^+ \) to form a carbocation.

<details>
<summary>Show answers</summary>

1. A Lewis acid is an electron-pair acceptor (it has an empty orbital); a Lewis base is an electron-pair donor (it has a lone pair or π electrons it can share). No proton transfer required.
2. Because H⁺ is itself an electron-pair acceptor (empty 1s orbital), every proton transfer is a special case of electron-pair donation. But Lewis reactions like BF₃ + NH₃ involve no proton at all, so they fall outside the Brønsted definition.
3. \( \text{AlCl}_3 \) is the Lewis acid (incomplete octet on Al), \( \text{Cl}^- \) is the Lewis base; the product \( \text{AlCl}_4^- \) is an adduct (complex) with a coordinate covalent Al–Cl bond.
4. Fluorine's lone pairs overlap strongly with boron's empty p orbital (π back-donation), partially filling the octet the base would otherwise fill. Bromine's 4p orbitals overlap poorly with boron's 2p orbital, so BBr₃ remains more electron-hungry and is the stronger Lewis acid.
5. The alkene's π electrons act as the Lewis base (electron-pair donor); \( \text{H}^+ \) is the Lewis acid (electron-pair acceptor). The π bond donates to H⁺, forming a C–H bond and leaving a carbocation.

</details>

## Related Topics

- Previous: [Organic Acids and Organic Bases](10-organic-acids-and-organic-bases.md)
- Next: [Noncovalent Interactions between Molecules](12-noncovalent-interactions-between-molecules.md)
- Related: [Acids and Bases: The Brønsted–Lowry Definition](07-acids-and-bases-the-br-nsted-lowry-definition.md), [Polar Covalent Bonds; Acids and Bases chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Lewis acid–base definitions, the boron trihalide acidity trend, and the Friedel–Crafts mechanism are standard textbook material; verify quantitative claims (e.g., specific acidity rankings in solution) against current primary sources before formal citation.
- Last updated: 2026-08-16
