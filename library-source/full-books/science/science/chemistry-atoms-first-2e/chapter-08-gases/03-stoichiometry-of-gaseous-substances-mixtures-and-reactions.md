---
title: "Stoichiometry of Gaseous Substances, Mixtures, and Reactions"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "8: Gases"
topic_number: "3"
source: "chemistry-atoms-first-2e.md"
tags:
  - "stoichiometry-of-gaseous-substances-mixtures-and-reactions"
  - "science"
status: "complete"
---

# Stoichiometry of Gaseous Substances, Mixtures, and Reactions

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 8: Gases](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Stoichiometry is the same whether the substances are solids, solutions, or gases: start from a measured quantity, convert to moles, use the balanced equation's mole ratios, and convert to the desired quantity. What changes for gases is the **measurement** — you often measure a gas by its volume or pressure rather than its mass. Two tools make that possible:

- The **molar volume** of an ideal gas: at STP (273.15 K, 1 atm), one mole occupies 22.4 L.
- The **ideal gas law**, \(PV = nRT\), which converts pressure–volume–temperature readings into moles at any conditions.

This topic also covers **gas density**, **Dalton's law of partial pressures** (each gas in a mixture behaves independently), and the **mole fraction**, which links a gas's share of the total pressure to its share of the total moles. Together these let you calculate how much gas a reaction produces, how dense a gas is, and how mixtures of gases — like air — behave.

## Why This Matters

- **Predicting reaction products:** industries that make gases (ammonia, hydrogen, CO₂) need to know exactly how much gas a given mass of reactant will produce — volume at operating conditions is the practical unit.
- **Airbags:** the sodium azide decomposition that inflates an airbag is a classic gas-stoichiometry calculation: solid reactant → liters of nitrogen gas in milliseconds.
- **Breathing and diving:** Dalton's law explains oxygen partial pressure at altitude and decompression concerns in scuba diving; medical gas mixtures are described by partial pressures.
- **Environmental chemistry:** air-pollution measurements report gas concentrations, and combustion products (CO₂, SO₂) are quantified as gas volumes or densities.
- **Exams:** expect (a) molar-volume conversions at STP, (b) ideal-gas-law mole conversions at non-STP conditions, (c) gas density/molar-mass problems, and (d) partial-pressure calculations — all with dimensional analysis.

## Core Concepts

### The molar volume shortcut at STP

At standard temperature and pressure (273.15 K, 1 atm), the ideal gas law gives:

\[
V = \frac{nRT}{P} = \frac{(1.00\ \text{mol})(0.08206\ \text{L atm mol}^{-1}\text{K}^{-1})(273.15\ \text{K})}{1.00\ \text{atm}} = 22.4\ \text{L}
\]

So at STP, moles and liters convert with the factor **22.4 L/mol**. This is a genuine conversion factor, valid only at STP; at any other conditions you must use the ideal gas law.

### Gas density and molar mass

The density of a gas is mass per volume. Substituting \(n = m/M\) into the ideal gas law gives a direct formula:

\[
PV = nRT \quad\Rightarrow\quad P = \frac{m}{M}\frac{RT}{V} \quad\Rightarrow\quad d = \frac{m}{V} = \frac{PM}{RT}
\]

where \(d\) is density (g/L), \(M\) is molar mass (g/mol), \(P\) is pressure, and \(T\) is kelvin temperature. Rearranged, the same equation identifies an unknown gas from its density:

\[
M = \frac{dRT}{P}
\]

Because gases have small densities (about 1–2 g/L at STP for common gases), these problems demand careful unit tracking: pressure in atm, temperature in kelvin, and \(R = 0.08206\ \text{L atm mol}^{-1}\text{K}^{-1}\).

### Dalton's law of partial pressures

In a mixture of non-reacting gases, each gas exerts its own pressure — its **partial pressure** — exactly as if it alone occupied the container. The total pressure is the sum of the partial pressures:

\[
P_{\text{total}} = P_A + P_B + P_C + \cdots
\]

The partial pressure of each gas equals its **mole fraction** times the total pressure:

\[
P_A = X_A P_{\text{total}}, \qquad X_A = \frac{n_A}{n_{\text{total}}}
\]

This is why the atmosphere's total pressure is the sum of nitrogen's, oxygen's, and other gases' contributions, and why a gas collected "over water" must have the water-vapor pressure subtracted.

### Gas volumes and reaction stoichiometry

Avogadro's law means that, at the same temperature and pressure, gas volumes are directly proportional to moles. So for gases at the same \(T\) and \(P\), the **volume ratios equal the mole ratios** from the balanced equation:

\[
\frac{V_A}{V_B} = \frac{n_A}{n_B}
\]

This allows elegant "volume-to-volume" stoichiometry, plus the general mass → moles → volume pathway when one substance is a solid or solution.

## ELI-10: Explain Like I'm 10

> Think of gas moles like identical balloons: one mole of any gas at STP fills one 22.4-liter balloon, no matter what gas it is. If a recipe (balanced equation) says 1 unit of baking soda makes 3 units of gas, you can count the balloons the gas fills. And when several gases share a container, each one pushes with its own share of the pressure — like kids on a seesaw, each contributing their own weight to the total.

## High-Yield Points

- **At STP, 1 mol of any ideal gas = 22.4 L.** Use this only at STP; otherwise use \(PV = nRT\).
- **Gas density:** \(d = PM/RT\) (units g/L); **molar mass from density:** \(M = dRT/P\).
- **Dalton's law:** \(P_{\text{total}} = \sum P_i\); each partial pressure \(P_i = X_i P_{\text{total}}\).
- **Mole fraction:** \(X_i = n_i / n_{\text{total}}\), always between 0 and 1; the sum of all mole fractions is 1.
- Gases collected over water are saturated with water vapor: \(P_{\text{gas}} = P_{\text{total}} - P_{\text{H}_2\text{O}}\) (vapor pressure of water at the collection temperature).
- Same \(T\) and \(P\) ⇒ gas volumes are proportional to moles, so balanced-equation volume ratios apply directly.
- Always convert °C → K and choose \(R\) to match the pressure unit (0.08206 L atm mol⁻¹ K⁻¹ for atm).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Molar volume | Volume of one mole of gas: 22.4 L at STP | Instant mole↔liter conversion for gases at STP |
| Gas density | Mass of gas per unit volume, \(d = PM/RT\) | Used to identify gases and compare them; units g/L |
| Partial pressure | The pressure one gas in a mixture would exert alone | Lets you treat each component of a mixture independently |
| Dalton's law of partial pressures | Total pressure = sum of all partial pressures | Basis for gas-mixture calculations (air, collected gases) |
| Mole fraction \(X\) | \(n_i / n_{\text{total}}\), the fraction of moles belonging to one gas | Connects a gas's share of moles to its share of pressure |
| Vapor pressure of water | Pressure exerted by water vapor in equilibrium with liquid water | Must be subtracted when gas is collected over water |
| STP | 273.15 K and 1 atm | The reference state where the 22.4 L/mol shortcut applies |
| Volume ratio = mole ratio | At equal \(T\) and \(P\), gas volumes follow the balanced equation's coefficients | Enables volume-only gas stoichiometry |

## Worked Examples

### Example 1: Gas volume from a solid reactant at STP

The airbag reaction: sodium azide decomposes to sodium metal and nitrogen gas.

\[
2\text{NaN}_3(s) \rightarrow 2\text{Na}(s) + 3\text{N}_2(g)
\]

What volume of N₂ gas (at STP) is produced by the decomposition of 65.0 g of NaN₃? (Molar mass of NaN₃ = 65.01 g/mol.)

**Step 1 — Convert grams to moles:**

\[
n_{\text{NaN}_3} = \frac{65.0\ \text{g}}{65.01\ \text{g mol}^{-1}} = 1.00\ \text{mol}
\]

**Step 2 — Mole ratio from the balanced equation (3 mol N₂ : 2 mol NaN₃):**

\[
n_{\text{N}_2} = 1.00\ \text{mol NaN}_3 \times \frac{3\ \text{mol N}_2}{2\ \text{mol NaN}_3} = 1.50\ \text{mol N}_2
\]

**Step 3 — Convert moles to volume at STP using the molar volume:**

\[
V_{\text{N}_2} = 1.50\ \text{mol} \times \frac{22.4\ \text{L}}{1\ \text{mol}} = 33.6\ \text{L}
\]

Dimensional check: g → mol → mol N₂ → L. A 65 g airbag charge produces ~34 L of nitrogen, which is why the reaction can fill a bag so quickly.

### Example 2: Gas volume at non-STP conditions

Using the ideal gas law, find the volume of the 1.50 mol of N₂ from Example 1 if the airbag inflates at 25.0 °C and 1.20 atm instead of STP.

**Step 1 — Convert temperature to kelvin:**

\[
T = 25.0 + 273.15 = 298.2\ \text{K}
\]

**Step 2 — Write the ideal gas law solved for \(V\):**

\[
V = \frac{nRT}{P}
\]

**Step 3 — Substitute:**

\[
V = \frac{(1.50\ \text{mol})(0.08206\ \text{L atm mol}^{-1}\text{K}^{-1})(298.2\ \text{K})}{1.20\ \text{atm}} = 30.6\ \text{L}
\]

The warmer, higher-pressure conditions give 30.6 L rather than 33.6 L — showing why you must use \(PV = nRT\) when conditions differ from STP.

### Example 3: Density and molar mass of a gas

A sample of an unknown gas has a density of 1.96 g/L at STP. Identify the gas by calculating its molar mass.

**Step 1 — Write the molar-mass formula:**

\[
M = \frac{dRT}{P}
\]

**Step 2 — Substitute STP values (\(d = 1.96\ \text{g/L}\), \(T = 273.15\ \text{K}\), \(P = 1.00\ \text{atm}\)):**

\[
M = \frac{(1.96\ \text{g L}^{-1})(0.08206\ \text{L atm mol}^{-1}\text{K}^{-1})(273.15\ \text{K})}{1.00\ \text{atm}} = 43.9\ \text{g mol}^{-1}
\]

A molar mass of ~44 g/mol identifies the gas as CO₂ (44.01 g/mol). Dimensional check: L and atm and K all cancel, leaving g/mol. Alternatively, at STP the molar volume shortcut gives \(M = d \times 22.4\ \text{L/mol} = 1.96 \times 22.4 = 43.9\ \text{g/mol}\) — the same answer faster.

### Example 4: Partial pressures in a mixture

A 10.0 L container at 300 K holds 2.00 mol of N₂ and 1.00 mol of O₂. What is the total pressure, and what is the partial pressure of each gas?

**Step 1 — Find total moles and mole fractions:**

\[
n_{\text{total}} = 2.00 + 1.00 = 3.00\ \text{mol}, \qquad X_{\text{N}_2} = \frac{2.00}{3.00} = 0.667, \qquad X_{\text{O}_2} = \frac{1.00}{3.00} = 0.333
\]

**Step 2 — Total pressure from the ideal gas law:**

\[
P_{\text{total}} = \frac{nRT}{V} = \frac{(3.00\ \text{mol})(0.08206\ \text{L atm mol}^{-1}\text{K}^{-1})(300\ \text{K})}{10.0\ \text{L}} = 7.39\ \text{atm}
\]

**Step 3 — Partial pressures from mole fractions:**

\[
P_{\text{N}_2} = X_{\text{N}_2}P_{\text{total}} = 0.667 \times 7.39\ \text{atm} = 4.93\ \text{atm}
\]

\[
P_{\text{O}_2} = X_{\text{O}_2}P_{\text{total}} = 0.333 \times 7.39\ \text{atm} = 2.46\ \text{atm}
\]

Check: 4.93 + 2.46 = 7.39 atm = \(P_{\text{total}}\). ✓ Each gas contributes pressure in proportion to its mole fraction.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| 22.4 L/mol at STP | 22.4 L/mol at any conditions | The molar volume shortcut is valid only at 273.15 K and 1 atm; otherwise use \(PV = nRT\) |
| Density of a gas (g/L) | Density of a liquid (g/mL) | Gas densities are ~1–2 g/L at STP; liquid densities are ~1000× larger. Units always matter |
| Partial pressure | Total pressure | Partial pressure is one component's share; total is the sum of all partial pressures |
| Mole fraction \(X\) | Mole percent | Mole fraction is a fraction (0 to 1); multiply by 100 for percent. Never plug percent into \(P_i = X_i P_{\text{total}}\) without dividing by 100 |
| Volume ratio in gas reactions | Mole ratio in solution reactions | For gases at equal \(T\) and \(P\), volume ratios equal mole ratios; for solutions, use molarity × volume |
| Vapor pressure of water | Total collected-gas pressure | Gas collected over water is a mixture; subtract \(P_{\text{H}_2\text{O}}\) to get the dry gas pressure |
| Molar mass from density | Density from molar mass | Same equation, different unknown: \(M = dRT/P\) vs \(d = PM/RT\) |

## Quick Review

1. What volume does 2.50 mol of an ideal gas occupy at STP?
2. Write the equation for gas density and the rearranged equation for molar mass. What units must pressure and temperature be in?
3. A gas collected over water at 25.0 °C has a total pressure of 750 torr. If the vapor pressure of water at 25.0 °C is 23.8 torr, what is the pressure of the dry gas?
4. Air is about 21% oxygen by mole. If total pressure is 1.00 atm, what is the partial pressure of O₂?
5. In the reaction \(2\text{H}_2(g) + \text{O}_2(g) \rightarrow 2\text{H}_2\text{O}(g)\), what volume of O₂ reacts with 10.0 L of H₂ at the same temperature and pressure?
6. A gas has density 1.25 g/L at STP. Estimate its molar mass, and suggest a likely identity.

<details>
<summary>Show answers</summary>

1. \(2.50\ \text{mol} \times 22.4\ \text{L/mol} = 56.0\ \text{L}\) (at STP).
2. \(d = PM/RT\) and \(M = dRT/P\); pressure in atm, temperature in kelvin, \(R = 0.08206\ \text{L atm mol}^{-1}\text{K}^{-1}\).
3. \(P_{\text{dry gas}} = 750 - 23.8 = 726\ \text{torr}\).
4. \(P_{\text{O}_2} = X_{\text{O}_2}P_{\text{total}} = 0.21 \times 1.00\ \text{atm} = 0.21\ \text{atm}\).
5. Volume ratio = mole ratio: 1 mol O₂ : 2 mol H₂, so \(V_{\text{O}_2} = 10.0/2 = 5.00\ \text{L}\).
6. \(M = d \times 22.4 = 1.25 \times 22.4 = 28.0\ \text{g/mol}\) — consistent with N₂ (28.02 g/mol).

</details>

## Related Topics

- Previous: [Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law](02-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law.md)
- Next: [Effusion and Diffusion of Gases](04-effusion-and-diffusion-of-gases.md)
- Related: [Gases chapter overview](../README.md)
- Related: [Reaction Stoichiometry](../chapter-07-stoichiometry-of-chemical-reactions/03-reaction-stoichiometry.md) — the mole-ratio method applied here to gases

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
