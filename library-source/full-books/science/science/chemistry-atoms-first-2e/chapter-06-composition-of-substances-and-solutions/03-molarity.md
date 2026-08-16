---
title: "Molarity"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "6: Composition of Substances and Solutions"
topic_number: "3"
source: "chemistry-atoms-first-2e.md"
tags:
  - "molarity"
  - "science"
status: "complete"
---

# Molarity

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 6: Composition of Substances and Solutions](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

A **solution** is a homogeneous mixture of a **solute** (the substance dissolved) and a **solvent** (the substance doing the dissolving). To describe a solution quantitatively you need a concentration — how much solute per how much solution. The most widely used concentration unit in chemistry is **molarity** (\(M\)), the number of moles of solute per liter of solution:

\[
M = \frac{\text{moles of solute}}{\text{liters of solution}}
\]

The unit is mol/L, read "molar." A 1.0 M solution contains one mole of solute dissolved in enough solvent to make exactly one liter of *solution* (not one liter of solvent plus solute — the final volume is what matters). Molarity is the conversion factor that links solution volume to moles of solute, which makes it the workhorse unit for solution stoichiometry, titrations, dilutions, and virtually every lab preparation.

## Why This Matters

Molarity is how real chemistry is done. A hospital IV bag of 0.9% saline is a solution whose osmolarity must be tightly controlled; a pharmaceutical tablet's active ingredient is often assayed by dissolving it and titrating with a standard solution of known molarity. In the lab, "make 500 mL of 0.100 M NaCl" is a daily instruction — and getting the volume-to-solution distinction wrong (adding solute to 500 mL of water instead of diluting to 500 mL total) changes the concentration. Molarity also underlies the dilution math used everywhere from preparing buffers to diluting concentrated acid safely, and it is the bridge between the solution world and the reaction stoichiometry of the next chapter.

## Core Concepts

### Molarity is moles per liter of solution

\[
M = \frac{n}{V}
\]

where \(n\) is moles of solute and \(V\) is liters of **solution** (final volume), not solvent. Rearranged, the same equation answers the two other questions that arise constantly:

\[
n = M \times V \quad \text{and} \quad V = \frac{n}{M}
\]

Note the lowercase convention: molarity is \(M\) (italic, the quantity); the unit is written mol/L or just "M" (e.g., 0.500 M NaCl). Molarity changes with temperature because volume changes with temperature, whereas molality (moles per kilogram of solvent, next topic) does not.

### Preparing a solution from solid solute

To make a solution of known molarity from a solid: (1) calculate moles needed with \(n = M \times V\); (2) convert to mass with \(m = n \times M_{\text{molar}}\); (3) dissolve the solid in a portion of solvent (less than the final volume) in a volumetric flask; (4) add solvent up to the calibration mark and mix. The final volume, not the volume of solvent added, defines the molarity.

### Dilution: \(M_1V_1 = M_2V_2\)

**Dilution** adds solvent to a more concentrated solution. The moles of solute are unchanged, so the product of molarity and volume is constant:

\[
M_1 V_1 = M_2 V_2
\]

where subscript 1 is the concentrated stock solution and subscript 2 the diluted solution. This single equation handles the classic "how much stock do I need" calculation. (Note: diluting by adding water *to a final volume* is exact; adding a fixed amount of water is only approximate, because volumes are not strictly additive.)

### Solution stoichiometry

Molarity converts volume → moles, which then feed the mole ratios of a balanced equation. The general path for any solution reaction:

\[
\text{volume} \xrightarrow{\times M} \text{moles of A} \xrightarrow{\text{mole ratio}} \text{moles of B} \xrightarrow{\div M \text{ or } \times M_{\text{molar}}} \text{volume or mass of B}
\]

Titrations — measuring the volume of a standard solution needed to react completely with an unknown — are the classic application: at the equivalence point, the moles of titrant consumed match the unknown's moles according to the balanced equation.

## ELI-10: Explain Like I’m 10

> Molarity is like the "sugariness" of lemonade: how many spoonfuls of sugar (solute) are in each big glass (liter) of the whole pitcher (solution). If you want sweeter lemonade, add more sugar to the pitcher, not more water. And if the pitcher is too sweet, you don't take sugar out — you add more water to make the whole pitcher bigger, spreading the same sugar through more glasses.

## High-Yield Points

- \(M = n/V\) with \(V\) = liters of *solution*; rearrange to \(n = M \times V\) and \(V = n/M\).
- Preparing a solution: dissolve solute in less than the final volume, then dilute to the mark — never add solute to the full solvent volume and call it done.
- Dilution: \(M_1V_1 = M_2V_2\) because moles of solute are conserved.
- Dimensional analysis: L × (mol/L) = mol; mol ÷ (mol/L) = L.
- In solution stoichiometry, molarity is the volume→moles conversion factor; mole ratios come from the balanced equation.
- Molarity is temperature-dependent (volume-dependent); molality (next topic) is not.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| solution | Homogeneous mixture of solute dissolved in solvent. | The medium for most chemistry — reactions, biology, and industry. |
| solute | The substance being dissolved (usually the smaller amount). | Its amount defines concentration. |
| solvent | The substance doing the dissolving (usually the larger amount). | Sets the final volume for molarity. |
| molarity, \(M\) | Moles of solute per liter of solution, mol/L. | The standard concentration unit; converts volume ↔ moles. |
| dilution | Adding solvent to lower concentration while keeping solute moles constant. | Described exactly by \(M_1V_1 = M_2V_2\). |
| volumetric flask | Glassware calibrated to hold one exact volume at the mark. | Ensures the "liter of solution" is exact in preparations. |
| titration | Adding standard solution until reaction with the unknown is complete. | The practical use of molarity to find unknown concentrations. |

## Worked Examples

### Example 1: Calculating molarity from mass and volume

4.00 g of NaOH (molar mass 40.00 g/mol) is dissolved and diluted to 0.500 L of solution. What is the molarity?

First convert grams to moles:

\[
n = \frac{m}{M_{\text{molar}}} = \frac{4.00 \text{ g}}{40.00 \text{ g/mol}} = 0.100 \text{ mol}
\]

Then apply the definition:

\[
M = \frac{n}{V} = \frac{0.100 \text{ mol}}{0.500 \text{ L}} = 0.200 \text{ mol/L} = 0.200 \text{ M}
\]

Dimensional analysis: g × (mol/g) = mol; mol ÷ L = mol/L ✓.

### Example 2: Preparing a solution from solid solute

How many grams of NaCl (58.44 g/mol) are needed to prepare 250.0 mL of 0.100 M NaCl?

Convert mL to L, then moles, then mass:

\[
n = M \times V = 0.100 \text{ mol/L} \times 0.2500 \text{ L} = 0.02500 \text{ mol}
\]

\[
m = n \times M_{\text{molar}} = 0.02500 \text{ mol} \times 58.44 \text{ g/mol} = 1.461 \text{ g}
\]

Procedure: weigh 1.461 g NaCl, dissolve in ~150 mL water in a 250-mL volumetric flask, then add water to the mark and mix. Dissolving in 250 mL of water directly would give a *lower* concentration than 0.100 M, because the salt adds volume to the solution.

### Example 3: Dilution — \(M_1V_1 = M_2V_2\)

What volume of 6.00 M HCl is needed to prepare 250.0 mL of 0.500 M HCl?

\[
M_1 V_1 = M_2 V_2
\]

\[
V_1 = \frac{M_2 V_2}{M_1} = \frac{0.500 \text{ M} \times 0.2500 \text{ L}}{6.00 \text{ M}} = 0.02083 \text{ L} = 20.8 \text{ mL}
\]

Take 20.8 mL of the 6.00 M stock, add it to a 250-mL flask containing some water, then dilute to the mark. Safety note: always add acid to water, slowly and with stirring, to control the heat released — never the reverse.

### Example 4: Solution stoichiometry (titration)

How many milliliters of 0.200 M NaOH are needed to neutralize 25.00 mL of 0.100 M HCl?

Balanced equation:

\[
\text{HCl}(aq) + \text{NaOH}(aq) \rightarrow \text{NaCl}(aq) + \text{H}_2\text{O}(l)
\]

Moles of HCl:

\[
n_{\text{HCl}} = M \times V = 0.100 \text{ mol/L} \times 0.02500 \text{ L} = 0.002500 \text{ mol}
\]

Mole ratio 1:1, so \(n_{\text{NaOH}} = 0.002500\) mol. Volume of NaOH needed:

\[
V = \frac{n}{M} = \frac{0.002500 \text{ mol}}{0.200 \text{ mol/L}} = 0.0125 \text{ L} = 12.5 \text{ mL}
\]

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| "1 L of solvent + solute" | 1 L of solution | Molarity is defined on final solution volume; dissolving solute in 1 L of water gives less than 1 L of solution and a different (lower) molarity. |
| Molarity \(M\) | Molality \(m\) | Molarity = mol solute/L solution (volume-based, temperature-dependent); molality = mol solute/kg solvent (mass-based, temperature-independent). |
| \(M_1V_1 = M_2V_2\) | Using it when solute moles change | The dilution equation requires the same amount of solute before and after; it cannot be applied to a reaction where solute is consumed or produced. |
| "Dilution = adding a fixed volume of water" | Diluting to a final volume | Exact dilution means bringing the total volume to the target; adding a measured splash of water is approximate because volumes aren't additive. |
| Moles vs molarity | "Moles per liter" vs "moles" | 0.1 M is a concentration; 0.1 mol is an amount. Mixing them produces factor-of-volume errors. |

## Quick Review

1. What is the molarity of a solution made by dissolving 0.250 mol of solute to a final volume of 0.500 L?
2. How many grams of glucose (180.16 g/mol) are needed for 500.0 mL of 0.150 M solution?
3. To what final volume must you dilute 10.0 mL of 5.00 M stock to get a 0.250 M solution?
4. Why must you dilute "to the mark" in a volumetric flask instead of adding the full solvent volume first?
5. In the titration HCl + NaOH → NaCl + H₂O, what volume of 0.100 M NaOH neutralizes 20.0 mL of 0.150 M HCl?

<details>
<summary>Show answers</summary>

1. \(M = 0.250/0.500 = 0.500\) M.
2. \(n = 0.150 \times 0.5000 = 0.0750\) mol; \(m = 0.0750 \times 180.16 = 13.5\) g.
3. \(V_2 = M_1V_1/M_2 = (5.00 \times 0.0100)/0.250 = 0.200\) L = 200 mL.
4. The solute adds volume; molarity is defined on final solution volume, so you dissolve first and then bring the total to the exact mark — otherwise the concentration is lower than intended.
5. \(n_{\text{HCl}} = 0.150 \times 0.0200 = 0.00300\) mol = \(n_{\text{NaOH}}\) (1:1); \(V = 0.00300/0.100 = 0.0300\) L = 30.0 mL.

</details>

## Related Topics

- Previous: [Determining Empirical and Molecular Formulas](02-determining-empirical-and-molecular-formulas.md)
- Next: [Other Units for Solution Concentrations](04-other-units-for-solution-concentrations.md)
- Related: [Composition of Substances and Solutions chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
