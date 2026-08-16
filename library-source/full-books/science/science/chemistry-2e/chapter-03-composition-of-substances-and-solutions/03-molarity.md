---
title: "Molarity"
subject: "Science"
book: "Chemistry 2e"
chapter: "3: Composition of Substances and Solutions"
topic_number: "3"
source: "chemistry-2e.md"
tags:
  - "molarity"
  - "science"
status: "complete"
---

# Molarity

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 3: Composition of Substances and Solutions](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

**Molarity** (symbol \(M\)) is the most widely used concentration unit in chemistry. It answers a practical question: *how much solute is packed into a given volume of solution?* Molarity is the number of moles of solute dissolved in **one liter of solution** — not one liter of solvent, a distinction that matters, as we will see:

\[
M = \frac{\text{moles of solute}}{\text{liters of solution}} \qquad \text{or} \qquad M = \frac{n}{V}
\]

where \(n\) is the amount of solute in moles and \(V\) is the volume of the solution in liters. Molarity ties the mole concept (this chapter's first topic) to solution behavior and appears throughout the book wherever reactions happen in water — titrations, equilibria, kinetics, and electrochemistry all lean on it. Because liquids expand when heated, molarity is temperature-sensitive; mass-based units such as molality (next topic) are not.

## Why This Matters

Nearly all laboratory chemistry happens in solution, and molarity is the language of solution chemistry. When a chemist writes "0.100 M NaCl," they mean 0.100 mol of sodium chloride per liter of total solution. Knowing how to prepare such a solution — and how to dilute a concentrated stock to a target concentration — is a core lab skill used in hospital pharmacies (IV solutions are prepared by dilution of sterile concentrates), environmental testing, and every quantitative experiment. Molarity also converts directly between the *particle* scale (moles) and the *practical* scale (measurable volumes). Concentration errors are not just exam mistakes: in real settings they produce failed reactions, wasted reagents, or unsafe dosing. Knowing what molarity measures — and what it does *not* — prevents the most common solution-chemistry traps.

## Core Concepts

### Solute, solvent, solution

A **solution** is a homogeneous mixture of two or more substances. The **solute** is the substance present in smaller amount (the one being dissolved); the **solvent** is present in larger amount (the one doing the dissolving). In an aqueous solution, water is the solvent. Molarity always refers to the *total solution volume*: after the solute dissolves, solvent is added until the mixture reaches a specific final volume — hence the standard recipe "dissolve the solute in a little solvent, then dilute to the mark," not "mix solute with exactly one liter of solvent."

### Molarity as a conversion factor

The real power of molarity is that it is a **conversion factor** between volume and moles:

\[
\text{moles of solute} = M \times V \qquad V = \frac{n}{M}
\]

For example, 0.500 L of 0.250 M glucose contains \(0.250 \times 0.500 = 0.125\) mol of glucose. This conversion is the backbone of reaction stoichiometry (Chapter 4): molarity and volume give the moles of each reactant, which the balanced equation turns into moles of products.

### Preparing a solution of known molarity

The correct procedure: (1) weigh out the required moles of solute using its molar mass; (2) transfer it to a **volumetric flask** and dissolve in less than the final volume of solvent; (3) add solvent until the meniscus sits on the calibration mark, then mix. The key idea: the final *volume*, not the solvent volume, defines the concentration. Volumetric flasks are calibrated at a stated temperature, which is why molarity changes if the solution warms or cools. (General safety principle: follow your institution's PPE and waste-disposal rules when handling concentrated reagents.)

### Dilution: conserving moles

**Dilution** adds solvent to a more concentrated solution, lowering its molarity while keeping the moles of solute unchanged. Because moles are conserved,

\[
M_1 V_1 = M_2 V_2
\]

where \(M_1, V_1\) describe the stock (concentrated) solution and \(M_2, V_2\) the diluted one. This single relationship powers every serial dilution in biology, pharmacy, and analytical chemistry, because \(n = M_1V_1\) before dilution equals \(n = M_2V_2\) after.

### Molarity versus molality

**Molality** (symbol \(m\)) is moles of solute per *kilogram of solvent* (next topic). Because masses do not change with temperature, molality is temperature-independent; molarity is not. The two numbers are nearly equal for dilute aqueous solutions (1 kg of water ≈ 1 L), which tempts students to treat them as interchangeable — but for concentrated solutions and for colligative-property calculations (Chapter 11), the difference is real.

## ELI-10: Explain Like I'm 10

Imagine making lemonade: molarity tells you how much sugar powder (solute) is in each full pitcher of lemonade (solution). A pitcher with lots of sugar is "high-molarity"; one that is mostly water is low. To make a weaker pitcher you don't throw sugar away — you add more water, spreading the same sugar through more drink. That "same sugar, more water" trick is exactly what the dilution formula \(M_1V_1 = M_2V_2\) describes.

## High-Yield Points

- Molarity = moles of solute ÷ **liters of solution** (total volume, not solvent volume); unit is mol/L, written \(M\).
- Molarity is a conversion factor: moles = \(M \times V\).
- Preparing a solution: weigh solute → dissolve in less than final volume → dilute to the mark in a volumetric flask.
- Dilution conserves moles: \(M_1 V_1 = M_2 V_2\).
- Molarity is temperature-dependent (volume changes); molality is not.
- To find molarity from a weighed mass: mass → moles via molar mass, then divide by solution volume in liters.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Molarity (\(M\)) | Moles of solute per liter of solution | The standard concentration unit for solution chemistry and stoichiometry |
| Solution | A homogeneous mixture of two or more substances | The medium in which most chemistry reactions occur |
| Solute | The substance dissolved (present in smaller amount) | The component whose amount molarity reports |
| Solvent | The substance doing the dissolving (larger amount) | Usually water in aqueous chemistry; defines the mixture |
| Volumetric flask | Glassware calibrated to hold an exact volume at a given temperature | The tool for preparing solutions of precisely known molarity |
| Dilution | Adding solvent to lower concentration without changing moles of solute | Lets you prepare many concentrations from one stock solution |
| Molar mass | Mass in grams of one mole of a substance (g/mol) | Converts between weighed mass and moles for solution prep |

## How It Works / Step-by-Step Process

1. Decide the target molarity \(M\) and final volume \(V\) (in liters).
2. Compute moles needed: \(n = M \times V\).
3. Convert moles to mass: \(\text{mass (g)} = n \times \text{molar mass (g/mol)}\).
4. Weigh the solute, dissolve in less than the final volume of solvent, dilute to the mark, and mix.
5. For a dilution: identify stock (\(M_1, V_1\)) and target (\(M_2, V_2\)), then solve \(M_1V_1 = M_2V_2\) for the unknown.

## Worked Examples

### Example 1: Preparing a solution from solid

**Problem:** How many grams of NaCl (molar mass 58.44 g/mol) are needed to prepare 250.0 mL of 0.500 M NaCl solution?

**Step 1 — Convert volume to liters:**

\[
V = 250.0 \text{ mL} \times \frac{1 \text{ L}}{1000 \text{ mL}} = 0.2500 \text{ L}
\]

**Step 2 — Apply the molarity formula:**

\[
n = M \times V = \frac{0.500 \text{ mol}}{\text{L}} \times 0.2500 \text{ L} = 0.125 \text{ mol NaCl}
\]

**Step 3 — Convert moles to grams:**

\[
\text{mass} = 0.125 \text{ mol} \times \frac{58.44 \text{ g}}{\text{mol}} = 7.31 \text{ g NaCl}
\]

**Answer:** Dissolve 7.31 g of NaCl in water and dilute to a final volume of 250.0 mL.

### Example 2: Diluting a stock solution

**Problem:** You have 6.00 M HCl. How many milliliters are needed to make 200.0 mL of 0.360 M HCl?

Use the dilution relationship (moles conserved):

\[
M_1 V_1 = M_2 V_2
\]

Solve for the stock volume \(V_1\):

\[
V_1 = \frac{M_2 V_2}{M_1} = \frac{0.360 \text{ M} \times 0.2000 \text{ L}}{6.00 \text{ M}} = 0.0120 \text{ L} = 12.0 \text{ mL}
\]

**Answer:** Measure 12.0 mL of 6.00 M HCl, transfer to a 200.0 mL volumetric flask, and dilute with water to the mark. (General principle: add acid to water slowly with mixing, per your lab's rules.)

### Example 3: Finding molarity from a weighed mass

**Problem:** 5.85 g of NaCl is dissolved in water and diluted to 250.0 mL. What is the molarity?

**Step 1 — Convert mass to moles:**

\[
n = 5.85 \text{ g} \times \frac{1 \text{ mol}}{58.44 \text{ g}} = 0.100 \text{ mol}
\]

**Step 2 — Divide by volume in liters (0.2500 L):**

\[
M = \frac{n}{V} = \frac{0.100 \text{ mol}}{0.2500 \text{ L}} = 0.400 \text{ M}
\]

**Answer:** The solution is 0.400 M NaCl. Unit check: mol ÷ L = mol/L = M.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Liters of solution | Liters of solvent | Molarity uses total solution volume — solvent is added *to* the mark |
| Molarity (\(M\)) | Molality (\(m\)) | \(M\) = mol solute / L solution (volume-based); \(m\) = mol solute / kg solvent (mass-based) |
| Moles of solute | Grams of solute | Convert via molar mass; molarity counts moles, not mass |
| Dilution (\(M_1V_1 = M_2V_2\)) | Evaporation | Dilution adds solvent (moles constant, volume up); evaporation removes solvent (moles constant, \(M\) up) |
| 1 M solution | 1 mol solute + 1 L water | A 1 M solution has total volume 1 L — add solute first, then water to the mark |
| Concentration | Amount of solute | Same amount of solute can give many concentrations depending on final volume |

## Quick Review

1. Write the definition of molarity in words and in symbols.
2. How many moles of solute are in 0.500 L of 0.250 M glucose solution?
3. A student mixes 1 mol of NaCl with 1 L of water and calls it "1 M." What is wrong?
4. You dilute 25.0 mL of 2.00 M KMnO₄ to 100.0 mL. What is the new molarity?
5. Why is molarity temperature-dependent while molality is not?
6. What mass of glucose (molar mass 180.16 g/mol) is needed for 500.0 mL of 0.200 M glucose?

<details>
<summary>Show answers</summary>

1. Molarity is the number of moles of solute per liter of solution: \(M = n/V\).
2. \(n = M \times V = 0.250 \text{ mol/L} \times 0.500 \text{ L} = 0.125\) mol.
3. The final volume would exceed 1 L once the salt dissolves and water is added to the mark, so the concentration would be slightly less than 1 M. Molarity needs total solution volume, not solvent volume.
4. \(M_2 = M_1 V_1 / V_2 = (2.00 \text{ M})(0.0250 \text{ L})/(0.1000 \text{ L}) = 0.500\) M.
5. Volume changes with temperature, so moles-per-liter changes; molality is based on masses, which do not change with temperature.
6. \(n = 0.200 \times 0.5000 = 0.100\) mol; mass = \(0.100 \times 180.16 = 18.0\) g.

</details>

## Related Topics

- Previous: [Determining Empirical and Molecular Formulas](02-determining-empirical-and-molecular-formulas.md)
- Next: [Other Units for Solution Concentrations](04-other-units-for-solution-concentrations.md)
- Related: [Composition of Substances and Solutions chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Numerical values (molar masses, concentrations) are commonly taught reference values; verify against current sources before relying on them in assessments.
- Last updated: 2026-08-16
