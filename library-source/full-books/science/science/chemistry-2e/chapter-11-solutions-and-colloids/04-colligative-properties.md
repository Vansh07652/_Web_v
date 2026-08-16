---
title: "Colligative Properties"
subject: "Science"
book: "Chemistry 2e"
chapter: "11: Solutions and Colloids"
topic_number: "4"
source: "chemistry-2e.md"
tags:
  - "colligative-properties"
  - "science"
status: "complete"
---

# Colligative Properties

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 11: Solutions and Colloids](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

A **colligative property** is a property of a solution that depends on the **number** of dissolved solute particles, not on the chemical identity of those particles. Four properties behave this way: vapor-pressure lowering, boiling-point elevation, freezing-point depression, and osmotic pressure. The name comes from the Latin *colligare*, "to bind together" — all four are tied to the same underlying cause: adding solute dilutes the solvent and makes it harder for solvent molecules to escape the liquid phase.

Here is the common mechanism. Solute particles occupy space in the liquid and reduce the mole fraction of solvent at the surface, so fewer solvent molecules escape into the vapor each second. A lower vapor pressure means the solution must be heated to a higher temperature before its vapor pressure matches the external pressure (boiling-point elevation). It also means the solution must be cooled further before solvent molecules can organize into a solid lattice (freezing-point depression). When a membrane that lets only solvent pass separates two solutions, the more concentrated side pulls solvent across, creating **osmotic pressure**.

Because the identity of the solute does not matter — only how many particles are present — a mole of table sugar and a mole of urea (very different molecules) affect these properties identically, as long as neither dissociates. Electrolytes are the exception that proves the rule: they split into multiple ions per formula unit, so each formula unit counts as several particles.

## Why This Matters

Colligative properties are engineered into everyday products and medical fluids:

- **Antifreeze:** Ethylene glycol added to a car radiator lowers the freezing point of the coolant (so the engine block survives winter) and raises its boiling point (so the coolant survives summer).
- **Road de-icing:** Salt (NaCl or CaCl₂) spread on ice forms a brine whose freezing point is below 0 °C, so ice melts even when the air temperature is below freezing.
- **Intravenous fluids:** Solutions given by IV — such as 0.9% NaCl ("normal saline") and 5% dextrose — are formulated to be **isotonic** with blood so their osmotic pressure roughly matches that of red blood cells, preventing cells from swelling or shrinking.
- **Food preservation:** Sugar in jam and salt in pickles create solutions with high osmotic pressure that draw water out of microbes, slowing spoilage without cooking.
- **Kidney dialysis:** Dialysis membranes rely on the same semipermeable-membrane behavior behind osmotic pressure to remove small waste molecules from blood while keeping large proteins in.

## Core Concepts

### Vapor-pressure lowering and Raoult's law

For a solution containing a **nonvolatile** solute, the vapor pressure of the solvent is lowered in proportion to the solvent's mole fraction. This is **Raoult's law**:

\[
P_A = X_A P_A^\circ
\]

where \(P_A\) is the solvent's vapor pressure above the solution, \(X_A\) is the solvent's mole fraction, and \(P_A^\circ\) is the vapor pressure of the pure solvent at the same temperature. Since \(X_A = 1 - X_B\) (where \(X_B\) is the solute's mole fraction), the vapor-pressure lowering is:

\[
\Delta P = X_B P_A^\circ
\]

Doubling the number of solute particles doubles the lowering — identity is irrelevant. This relationship holds for ideal (dilute) solutions of nonvolatile solutes.

### Boiling-point elevation

Because the solution's vapor pressure is lower, it must be heated to a higher temperature to boil. The elevation is directly proportional to the **molality** of solute particles:

\[
\Delta T_b = K_b m
\]

Here \(m\) is the molality (moles of solute particles per kilogram of solvent) and \(K_b\) is the **molal boiling-point-elevation constant**, which is a property of the solvent. For water, \(K_b = 0.512\ ^\circ\text{C kg mol}^{-1}\) (often written 0.512 °C/m). The normal boiling point of pure water is 100.00 °C; a 1 molal solution of a nonvolatile nonelectrolyte boils near 100.51 °C.

### Freezing-point depression

The same dilution that lowers vapor pressure also makes it harder for solvent molecules to form a solid lattice, so the solution freezes at a lower temperature:

\[
\Delta T_f = K_f m
\]

For water, \(K_f = 1.86\ ^\circ\text{C kg mol}^{-1}\) (1.86 °C/m). Note that \(K_f\) is much larger than \(K_b\), so freezing-point depression is usually the more dramatic effect — which is why road salt works at modest concentrations.

### Osmotic pressure

**Osmosis** is the net movement of solvent through a **semipermeable membrane** from a region of lower solute concentration to a region of higher solute concentration. The pressure that must be applied to the more concentrated side to stop this flow is the **osmotic pressure**:

\[
\Pi = MRT
\]

where \(M\) is the molarity of solute particles, \(R\) is the ideal gas constant (\(0.08206\ \text{L atm mol}^{-1}\text{K}^{-1}\)), and \(T\) is the temperature in kelvin. Because osmotic pressure depends on *particle count* (through \(M\)), it is a colligative property too — and it is by far the most sensitive one, which is why it is used to measure the molar masses of large molecules such as proteins.

### Electrolytes and the van't Hoff factor

A strong electrolyte such as NaCl dissociates completely into two ions per formula unit, so one mole of NaCl contributes two moles of particles. The **van't Hoff factor**, \(i\), is the number of particles produced per formula unit. For an ideal strong electrolyte, \(i\) equals the number of ions (NaCl → 2, CaCl₂ → 3, Na₂SO₄ → 3). The colligative formulas become:

\[
\Delta T_b = i K_b m \qquad \Delta T_f = i K_f m \qquad \Pi = iMRT
\]

In real solutions, ion pairing makes the measured \(i\) slightly smaller than the ideal value (for example, NaCl in water behaves more like \(i \approx 1.9\) at moderate concentration), but exam problems almost always use the ideal integer value unless told otherwise.

### Why molality, not molarity

Boiling- and freezing-point formulas use **molality** (moles of solute per kilogram of *solvent*) rather than molarity (moles per liter of *solution*). Molality is based on masses, which do not change with temperature; molarity is based on volume, which expands and contracts with temperature. Because colligative measurements themselves involve temperature changes, molality keeps the solute-to-solvent ratio fixed. Osmotic pressure, measured at a single temperature, is expressed with molarity.

## ELI-10: Explain Like I'm 10

> Think of water molecules as students trying to leave a classroom (escape as vapor). A solute particle is a big desk blocking the door: every desk you add blocks a little more, no matter whether the desk is red or blue. With desks in the way, the class "boils" only when it is hotter, "freezes" only when it is colder, and water on the other side of a special door rushes toward the room with more desks. Only the number of desks matters — never their color.

## High-Yield Points

- A colligative property depends on the **number** of solute particles, never their identity.
- The four colligative properties: vapor-pressure lowering, boiling-point elevation, freezing-point depression, osmotic pressure.
- Raoult's law: \(P_A = X_A P_A^\circ\), with lowering \(\Delta P = X_B P_A^\circ\).
- Boiling-point elevation: \(\Delta T_b = K_b m\); freezing-point depression: \(\Delta T_f = K_f m\).
- Osmotic pressure: \(\Pi = MRT\) — the most sensitive colligative property.
- Water constants: \(K_b = 0.512\ ^\circ\text{C/m}\), \(K_f = 1.86\ ^\circ\text{C/m}\).
- Electrolytes multiply every colligative effect by the van't Hoff factor \(i\) (NaCl → 2, CaCl₂ → 3).
- Use **molality** in boiling/freezing formulas; molality is temperature-independent because it is mass-based.
- For nonelectrolytes, 1 mole of solute ≈ 1 mole of particles; for strong electrolytes, 1 mole of solute ≈ \(i\) moles of particles.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| colligative property | A solution property that depends only on the number of solute particles, not their identity | Predicts freezing, boiling, and osmotic behavior without knowing the solute's structure |
| Raoult's law | \(P_A = X_A P_A^\circ\): solvent vapor pressure equals its mole fraction times the pure-solvent vapor pressure | Gives the quantitative basis for vapor-pressure lowering |
| molality (\(m\)) | Moles of solute per kilogram of solvent (mol kg⁻¹) | Temperature-independent concentration unit used in boiling/freezing formulas |
| van't Hoff factor (\(i\)) | Number of particles a formula unit produces on dissolving | Converts colligative formulas so they work for electrolytes |
| osmotic pressure (\(\Pi\)) | Pressure needed to stop solvent flow through a semipermeable membrane | Explains cell water balance, IV fluid design, and molar-mass measurement |
| semipermeable membrane | A barrier that lets solvent pass but blocks solute particles | The physical requirement for osmosis |
| nonelectrolyte | A solute that dissolves without forming ions (e.g., sugar) | Contributes one particle per molecule; \(i = 1\) |

## Worked Examples

### Example 1: Freezing-point depression with antifreeze

A car radiator holds 250.0 g of water mixed with 45.0 g of ethylene glycol (C₂H₆O₂, molar mass 62.07 g mol⁻¹). At what temperature does this solution freeze?

**Formula first:** \(\Delta T_f = K_f m\), then freezing point \(= 0.00\ ^\circ\text{C} - \Delta T_f\).

**Step 1 — moles of solute:**

\[
n = \frac{45.0\ \text{g}}{62.07\ \text{g mol}^{-1}} = 0.725\ \text{mol}
\]

(Unit check: g ÷ g mol⁻¹ = mol ✓)

**Step 2 — molality:**

\[
m = \frac{0.725\ \text{mol}}{0.2500\ \text{kg}} = 2.90\ \text{mol kg}^{-1} = 2.90\ m
\]

**Step 3 — temperature change:**

\[
\Delta T_f = (1.86\ ^\circ\text{C kg mol}^{-1})(2.90\ \text{mol kg}^{-1}) = 5.39\ ^\circ\text{C}
\]

(Unit check: (°C kg mol⁻¹)(mol kg⁻¹) = °C ✓)

**Step 4 — freezing point:**

\[
T_f = 0.00\ ^\circ\text{C} - 5.39\ ^\circ\text{C} = -5.39\ ^\circ\text{C}
\]

This coolant freezes near −5.4 °C instead of 0 °C — enough protection for a mild winter day.

### Example 2: Boiling-point elevation with an electrolyte

11.7 g of NaCl (molar mass 58.44 g mol⁻¹) is dissolved in 500.0 g of water. What is the boiling point of the solution?

**Formula first:** \(\Delta T_b = i K_b m\), then boiling point \(= 100.00\ ^\circ\text{C} + \Delta T_b\).

**Step 1 — moles and molality:**

\[
n_{\text{NaCl}} = \frac{11.7\ \text{g}}{58.44\ \text{g mol}^{-1}} = 0.200\ \text{mol}
\]

\[
m = \frac{0.200\ \text{mol}}{0.5000\ \text{kg}} = 0.400\ \text{mol kg}^{-1}
\]

**Step 2 — apply the van't Hoff factor.** NaCl dissociates into Na⁺ and Cl⁻, so \(i = 2\):

\[
\Delta T_b = (2)(0.512\ ^\circ\text{C kg mol}^{-1})(0.400\ \text{mol kg}^{-1}) = 0.410\ ^\circ\text{C}
\]

**Step 3 — boiling point:**

\[
T_b = 100.00\ ^\circ\text{C} + 0.410\ ^\circ\text{C} = 100.41\ ^\circ\text{C}
\]

Notice the electrolyte doubles the effect: without the factor \(i = 2\), the predicted elevation would be only 0.205 °C — a classic exam trap.

### Example 3: Finding concentration from osmotic pressure

A protein solution exerts an osmotic pressure of 0.100 atm at 25 °C. What is its molarity?

**Formula first:** \(\Pi = MRT\), so rearrange to \(M = \frac{\Pi}{RT}\).

**Substitution:**

\[
M = \frac{0.100\ \text{atm}}{(0.08206\ \text{L atm mol}^{-1}\text{K}^{-1})(298.15\ \text{K})} = 4.09 \times 10^{-3}\ \text{mol L}^{-1}
\]

(Unit check: atm ÷ (L atm mol⁻¹ K⁻¹ × K) = mol L⁻¹ ✓)

A molarity of only about \(4 \times 10^{-3}\) M produces a measurable osmotic pressure — this sensitivity is exactly why osmotic pressure is used to find molar masses of macromolecules, which are far too dilute to measure by freezing-point methods.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| "Salt makes water boil *faster*" | Boiling-point elevation | Salt *raises* the boiling point; the solution needs more heat, so it boils at a higher temperature, not sooner |
| "Colligative properties depend on the solute" | Particle *count* | They depend on the number of particles; identity (molecule type) does not matter |
| Molarity (\(M\)) | Molality (\(m\)) | Molarity = mol solute per L solution (volume-based, temperature-dependent); molality = mol solute per kg solvent (mass-based, temperature-independent) |
| "1 mole of NaCl gives 1 mole of particles" | van't Hoff factor | NaCl gives ~2 moles of particles (\(i = 2\)); always count ions for electrolytes |
| "Freezing-point depression means the solution freezes warmer" | Direction of the shift | Depression means the freezing point goes *down* (below 0 °C for water); elevation means the boiling point goes *up* |
| A volatile solute in Raoult's law | Nonvolatile solute | Raoult's law as written assumes the solute does not contribute to vapor pressure; a volatile solute (e.g., alcohol in water) complicates the calculation |

## Quick Review

1. What makes a property "colligative," and what are the four colligative properties?
2. Which is larger for a given aqueous solution: \(\Delta T_f\) or \(\Delta T_b\)? Why?
3. Which freezes at a lower temperature: a 1.0 m glucose solution or a 1.0 m NaCl solution? Explain.
4. Why is molality preferred over molarity in the boiling- and freezing-point formulas?
5. What is the van't Hoff factor for CaCl₂, and how does it enter the osmotic-pressure formula?
6. A 0.10 M nonelectrolyte solution at 25 °C — what osmotic pressure does it exert?

<details>
<summary>Show answers</summary>

1. A colligative property depends only on the number of solute particles, not their identity. The four are vapor-pressure lowering, boiling-point elevation, freezing-point depression, and osmotic pressure.
2. \(\Delta T_f\) is larger because \(K_f\) (1.86 °C/m) is about 3.6 times \(K_b\) (0.512 °C/m) for water — freezing-point depression is the more sensitive effect.
3. The NaCl solution. NaCl dissociates into two ions, so 1.0 m NaCl behaves like 2.0 m particles, and \(\Delta T_f = iK_f m\) gives about 3.7 °C versus about 1.9 °C for glucose.
4. Molality is based on solvent mass, which does not change with temperature; molarity is based on solution volume, which changes with temperature. The colligative measurement itself involves temperature change.
5. CaCl₂ dissociates into 3 ions, so \(i = 3\); the osmotic pressure becomes \(\Pi = iMRT\).
6. \(\Pi = MRT = (0.10\ \text{mol L}^{-1})(0.08206\ \text{L atm mol}^{-1}\text{K}^{-1})(298.15\ \text{K}) \approx 2.4\ \text{atm}\).

</details>

## Related Topics

- Previous: [Solubility](03-solubility.md)
- Next: [Colloids](05-colloids.md)
- Related: [Solutions and Colloids chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
