---
title: "The Diels–Alder Cycloaddition Reaction"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "14: Conjugated Compounds and Ultraviolet Spectroscopy"
topic_number: "4"
source: "organic-chemistry.md"
tags:
  - "the-diels-alder-cycloaddition-reaction"
  - "science"
status: "complete"
---

# The Diels–Alder Cycloaddition Reaction

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 14: Conjugated Compounds and Ultraviolet Spectroscopy](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

The Diels–Alder reaction is the best-known **cycloaddition** in organic chemistry: a **conjugated diene** — a molecule with two alternating double bonds, such as 1,3-butadiene (CH₂=CH–CH=CH₂) — combines with a **dienophile** ("diene-lover," typically an alkene or alkyne) to produce a six-membered ring in a single step. Because the diene supplies four π electrons and the dienophile supplies two, chemists call it a **[4+2] cycloaddition**. Otto Diels and Kurt Alder reported it in 1928 and shared the 1950 Nobel Prize in Chemistry for the discovery.

The reaction is **concerted**: every bond that forms or breaks does so at the same instant through one transition state, with no carbocation or other intermediate. Two new carbon–carbon σ bonds form between the ends of the diene and the two ends of the dienophile, while one π bond remains in the product. The result is a cyclohexene ring — the most reliable way to assemble six-membered rings ever discovered.

This topic covers what a cycloaddition is, how to identify the two partners, and how to predict the product, including regiochemistry.

## Why This Matters

Six-membered rings are everywhere in chemistry and biology — the steroid skeleton of cholesterol, the cores of many pharmaceuticals, and countless natural products — and the Diels–Alder reaction is often the step that builds them. Three properties make it uniquely valuable:

- **Atom economy of 100%.** Every atom of both starting materials ends up in the product — no byproduct waste, a centerpiece of green chemistry.
- **Stereocontrol.** Because the reaction is concerted, the dienophile's geometry is preserved in the product, letting chemists set several stereocenters at once.
- **Reliability.** The product always contains the same six-membered framework, so retrosynthetic analysis routinely asks: "Which diene and dienophile would make this ring?"

It is also a favorite exam topic, because simple rules about electron-rich dienes and electron-poor dienophiles predict the product.

## Core Concepts

### What a [4+2] cycloaddition does

Number the diene's four carbons 1–4, with double bonds between C1–C2 and C3–C4. The dienophile contributes its two carbons, which carry a double bond between them. In the product:

- New σ bonds form between diene C1 and one dienophile carbon, and between diene C4 and the other dienophile carbon.
- The dienophile's π bond survives as the product's remaining double bond.
- The diene's two π bonds are consumed to make the two new σ bonds.

In arrow-pushing terms: the π electrons of the diene's C1–C2 bond flow toward one end of the dienophile to form the first σ bond, while the diene's C3–C4 π electrons flow toward the other end to form the second σ bond and the dienophile's π electrons shift to become the ring's new double bond. All three flows happen together — that is what "concerted" means.

### The partners: electron-rich diene, electron-poor dienophile

The reaction runs fastest when the diene is **electron-rich** and the dienophile is **electron-poor**: electron-donating groups (alkyl, alkoxy, amino) on the diene speed it up, and electron-withdrawing groups (carbonyl, cyano, ester) on the dienophile speed it up. This "push–pull" pairing is **normal electron demand**.

- **Good dienes:** 1,3-butadiene, 2,3-dimethyl-1,3-butadiene, and cyclic dienes such as cyclopentadiene and 1,3-cyclohexadiene.
- **Good dienophiles:** alkenes and alkynes bearing electron-withdrawing groups, above all maleic anhydride (SMILES O=C1C=CC(=O)O1), but also methyl acrylate, acrylonitrile, and quinones. Plain ethylene is a weak dienophile needing high temperature and pressure.

### The s-cis conformation requirement

For the two ends of the diene to reach the dienophile at the same time, the diene must adopt the **s-cis conformation**, with both double bonds on the same side of the central single bond. Butadiene prefers the s-trans shape but rotates freely, so it can react. Cyclopentadiene is locked permanently in s-cis, which is why it is extraordinarily reactive. A diene locked in s-trans (forced apart by a ring system) cannot undergo the reaction at all.

### Regiochemistry: the ortho/para rule

When both partners are unsymmetrical, two connectivity isomers (regioisomers) are possible. The observed preference follows the **ortho/para rule**: the diene's substituent and the dienophile's electron-withdrawing group end up **ortho or para** to each other in the product, with the para (1,4) isomer usually dominating. For example, 1-methoxy-1,3-butadiene plus methyl acrylate gives mainly the para product. The rationalization comes from frontier orbitals: the methoxy oxygen's lone pairs push electron density into the diene's terminal positions, and the diene HOMO and dienophile LUMO coefficients align most favorably at the atoms that connect in the para product.

### Frontier orbitals in one paragraph

In the dominant (normal) interaction, the diene's **HOMO** (highest occupied molecular orbital) mixes with the dienophile's **LUMO** (lowest unoccupied molecular orbital). Electron-donating groups raise the diene HOMO and electron-withdrawing groups lower the dienophile LUMO; both shrink the HOMO–LUMO gap, lowering the activation energy and accelerating the reaction. This picture also explains the endo preference covered next.

## ELI-10: Explain Like I'm 10

> Imagine two friends snapping two jump ropes together: both ends click at the same moment and the ropes form a loop. The Diels–Alder reaction is the same — a molecule with two double bonds and one with a single double bond snap together at both ends at once, making a ring. Nobody lets go in the middle, and every atom of both molecules ends up in the ring.

## High-Yield Points

- Diels–Alder is a **[4+2] cycloaddition**: diene (4 π electrons) + dienophile (2 π electrons) → cyclohexene ring.
- Concerted mechanism: one transition state, no intermediates, two new σ bonds formed.
- The diene must be conjugated and able to reach the **s-cis conformation**; cyclopentadiene is locked s-cis and highly reactive.
- Electron-rich dienes (donating groups) and electron-poor dienophiles (withdrawing groups) react fastest: normal electron demand.
- Maleic anhydride is the classic activated dienophile; ethylene is a poor one.
- Regiochemistry follows the ortho/para rule for unsymmetrical partners.
- The reaction is thermally allowed (no light needed) and has 100% atom economy.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| cycloaddition | A reaction in which two π systems join end-to-end to form a ring, losing no atoms | Forms rings in one step |
| diene | A molecule with two conjugated double bonds (4 π electrons) | One of the two reaction partners |
| dienophile | The alkene or alkyne partner in the reaction (2 π electrons) | Its substituents control reactivity and regiochemistry |
| concerted | All bond-making and bond-breaking occur simultaneously | Explains why the reaction is stereospecific |
| s-cis conformation | Diene shape with both double bonds on the same side of the central single bond | Required for the two ends to reach the dienophile |
| atom economy | Percentage of reactant mass retained in the product | Diels–Alder is 100% — no byproducts |
| ortho/para rule | Regiochemical rule predicting which connectivity forms with unsymmetrical partners | Lets you predict the major product |

## How It Works / Step-by-Step Process

1. **Find the diene:** two conjugated double bonds; check that it can reach s-cis (or is already locked s-cis).
2. **Find the dienophile:** the C=C or C≡C that will become part of the ring; note any electron-withdrawing substituents.
3. **Number the diene 1–4:** the new σ bonds form between C1/C4 and the two dienophile carbons.
4. **Place substituents:** the dienophile's substituents keep their relative positions; the diene's substituent and the dienophile's electron-withdrawing group sit ortho or para by the ortho/para rule.
5. **Draw the ring:** a six-membered ring with one remaining double bond.
6. **Check atom count:** the product must contain every atom of both reactants — if atoms are missing, the drawing is wrong.

## Worked Examples

### Example 1: Atom economy of butadiene + ethylene

The simplest Diels–Alder reaction: 1,3-butadiene (C₄H₆) + ethylene (C₂H₄) → cyclohexene (C₆H₁₀).

First, the molar masses: \(M(\text{C}_4\text{H}_6) = 4(12.011) + 6(1.008) = 54.09\ \text{g/mol}\), \(M(\text{C}_2\text{H}_4) = 2(12.011) + 4(1.008) = 28.05\ \text{g/mol}\), and \(M(\text{C}_6\text{H}_{10}) = 6(12.011) + 10(1.008) = 82.14\ \text{g/mol}\).

Atom economy is the mass of atoms that survive into the desired product divided by the total mass of all reactants:

\[
\text{atom economy} = \frac{M(\text{product})}{M(\text{diene}) + M(\text{dienophile})} \times 100\%
\]

Substituting:

\[
\text{atom economy} = \frac{82.14\ \text{g/mol}}{54.09\ \text{g/mol} + 28.05\ \text{g/mol}} \times 100\% = \frac{82.14}{82.14} \times 100\% = 100\%
\]

Every atom of both reactants lands in cyclohexene — no waste. Unit check: g/mol divided by g/mol cancels, leaving a unitless percentage.

### Example 2: Which partner is limiting? Theoretical yield of the cyclopentadiene–maleic anhydride adduct

A student combines 3.50 g of cyclopentadiene (C₅H₆, \(M = 66.10\ \text{g/mol}\)) with 4.00 g of maleic anhydride (C₄H₂O₃, \(M = 98.06\ \text{g/mol}\)). The adduct is C₉H₈O₃ (\(M = 164.16\ \text{g/mol}\)).

The mole equation is \(n = m/M\), where \(n\) is the amount in moles, \(m\) is mass in grams, and \(M\) is molar mass. For each reactant:

\[
n(\text{cyclopentadiene}) = \frac{3.50\ \text{g}}{66.10\ \text{g/mol}} = 0.0529\ \text{mol}
\]

\[
n(\text{maleic anhydride}) = \frac{4.00\ \text{g}}{98.06\ \text{g/mol}} = 0.0408\ \text{mol}
\]

The reaction is 1:1, so the smaller number of moles is limiting: **maleic anhydride (0.0408 mol)**. The theoretical yield follows from the limiting reagent:

\[
m_{\text{adduct}} = n \times M = (0.0408\ \text{mol})(164.16\ \text{g/mol}) = 6.70\ \text{g}
\]

The student can expect at most 6.70 g of adduct before any losses. If 5.10 g was actually isolated, the percent yield is \(5.10/6.70 \times 100\% = 76.1\%\). Note that grams alone mislead: maleic anhydride weighed more (4.00 g vs 3.50 g) yet is limiting, because moles — not grams — drive stoichiometry.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Any alkene as dienophile | Activated (electron-poor) dienophiles | Ethylene needs forcing conditions; maleic anhydride reacts readily at room temperature |
| s-trans (most stable shape) | s-cis (reacting shape) | Butadiene sits s-trans but must rotate to s-cis to react; locked-s-trans dienes never react |
| A stepwise mechanism with carbocations | A concerted cycloaddition | No intermediates exist in the Diels–Alder reaction |
| Product keeps two double bonds | Product keeps one | Two π bonds convert to σ bonds; one remains |
| Needs UV light (like [2+2] cycloadditions) | A thermal [4+2] process | The Diels–Alder reaction is thermally allowed and needs no light |
| "Ortho" means any side product | A specific regiochemical outcome | The rule predicts the major connectivity, not an arbitrary mix |

## Quick Review

1. Why is the Diels–Alder reaction called a [4+2] cycloaddition?
2. What conformation must a diene adopt before it can react, and why?
3. Explain why maleic anhydride is a far better dienophile than ethylene.
4. Which atoms of the diene form the two new σ bonds?
5. In Example 2, why is maleic anhydride the limiting reagent even though its mass (4.00 g) exceeds the diene's (3.50 g)?
6. What is the atom economy of the butadiene + ethylene reaction, and what does that mean in practice?

<details>
<summary>Show answers</summary>

1. The diene contributes four π electrons and the dienophile contributes two — hence [4+2] — and the product is a ring (a cycloaddition).
2. The s-cis conformation, because both ends of the diene must reach the two ends of the dienophile simultaneously; only in s-cis do C1 and C4 point the same way.
3. Maleic anhydride's two carbonyl groups withdraw electron density, lowering its LUMO and shrinking the HOMO(diene)–LUMO(dienophile) gap; ethylene has no withdrawing groups, so the gap (and the activation energy) stays large.
4. Diene C1 and C4 form the two new σ bonds to the dienophile's two carbons.
5. Moles decide, not grams: 3.50 g of cyclopentadiene is 0.0529 mol, while 4.00 g of maleic anhydride is only 0.0408 mol, and the reaction consumes them 1:1.
6. 100% — every atom of both reactants ends up in the product, so there are no byproducts or waste to dispose of.

</details>

## Related Topics

- Previous: [Kinetic versus Thermodynamic Control of Reactions](03-kinetic-versus-thermodynamic-control-of-reactions.md)
- Next: [Characteristics of the Diels–Alder Reaction](05-characteristics-of-the-diels-alder-reaction.md)
- Related: [Stability of Conjugated Dienes: Molecular Orbital Theory](01-stability-of-conjugated-dienes-molecular-orbital-theory.md)
- Related: [Electrophilic Additions to Conjugated Dienes: Allylic Carbocations](02-electrophilic-additions-to-conjugated-dienes-allylic-carbocations.md)
- Related: [Chapter 14 overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants: molar masses computed from standard atomic weights (C 12.011, H 1.008, O 15.999 g/mol); Diels–Alder reaction first reported by Otto Diels and Kurt Alder (1928; Nobel Prize in Chemistry 1950).
- Last updated: 2026-08-16
