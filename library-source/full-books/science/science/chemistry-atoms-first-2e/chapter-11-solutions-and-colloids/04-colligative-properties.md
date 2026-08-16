---
title: "Colligative Properties"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "11: Solutions and Colloids"
topic_number: "4"
source: "chemistry-atoms-first-2e.md"
tags:
  - "colligative-properties"
  - "science"
status: "complete"
---

# Colligative Properties

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 11: Solutions and Colloids](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

Dissolving a solute in a solvent changes more than composition — it changes four measurable properties of the solvent: **vapor pressure**, **boiling point**, **freezing point**, and **osmotic pressure**. These are called **colligative properties** because they depend only on the *number* of dissolved solute particles, not on their identity: one mole of glucose and one mole of urea lower water's freezing point by the same amount.

The key quantity is the **concentration of particles** — total solute units (molecules or ions) per unit of solvent — which is why 1 m NaCl (two ions per formula unit) has roughly twice the freezing-point effect of 1 m glucose. This topic covers the four colligative properties, their equations, and the **van't Hoff factor** that corrects for ionic dissociation.

## Why This Matters

- **Antifreeze and de-icing:** ethylene glycol lowers engine coolant's freezing point; road salt melts ice by depressing water's freezing point.
- **Cooking and food science:** salt raises water's boiling point and lowers the freezing point of ice cream mix — why ice cream recipes call for salt.
- **Medicine:** IV fluids must be **isotonic** (matched osmotic pressure) with blood; a mismatch can rupture red blood cells (hemolysis) or shrivel them (crenation).
- **Exam value:** colligative-property calculations are a guaranteed problem type, and the van't Hoff factor is the classic trap.

## Core Concepts

### What "number of particles" means

A colligative property counts **solute particles in solution**, not moles of solute added. A nonelectrolyte (glucose, urea) contributes 1 particle per formula unit; a strong electrolyte contributes its full ion count. The **van't Hoff factor** \(i\) is the number of particles each formula unit produces:

- Nonelectrolytes: \(i = 1\)
- NaCl, KBr, NaOH: \(i = 2\)
- CaCl₂, Ba(NO₃)₂, Na₂SO₄: \(i = 3\)

Real solutions fall slightly short of these ideal values because ions associate, but ideal values are standard for introductory work.

### Vapor-pressure lowering (Raoult's law)

A pure solvent has a characteristic vapor pressure. Adding a nonvolatile solute lowers it: solute particles crowd the surface and block solvent molecules from escaping. **Raoult's law** states that the vapor pressure of the solvent in solution equals its mole fraction times the pure solvent's vapor pressure:

\[
P_{\text{solution}} = \chi_{\text{solvent}} \, P^{\circ}_{\text{solvent}}
\]

where \(P^{\circ}_{\text{solvent}}\) is the pure solvent's vapor pressure and \(\chi_{\text{solvent}}\) is its mole fraction in solution. Since the mole fraction is always less than 1, vapor pressure always drops when solute is added.

### Boiling-point elevation

A liquid boils when its vapor pressure equals the external pressure; since solute lowers that pressure, the solution must be heated hotter before it boils. The boiling-point elevation is proportional to the molal particle concentration:

\[
\Delta T_b = i \, K_b \, m
\]

where \(\Delta T_b\) is the elevation, \(K_b\) is the solvent's **molal boiling-point-elevation constant** (water: \(K_b = 0.512\ \degree\text{C/m}\)), and \(m\) is the **molality** (moles of solute per kilogram of solvent).

### Freezing-point depression

Solute particles interfere with solvent molecules packing into a crystal lattice, so the solution must be cooled below the pure solvent's freezing point. The depression is also proportional to particle molality:

\[
\Delta T_f = i \, K_f \, m
\]

where \(K_f\) is the molal freezing-point-depression constant (water: \(K_f = 1.86\ \degree\text{C/m}\)). Since \(K_f > K_b\) for water, freezing-point depression is the more sensitive effect — why salt melts ice so effectively.

### Osmotic pressure

If two solutions of different concentration are separated by a **semipermeable membrane** (permeable to solvent, not solute), solvent flows from the dilute side to the concentrated side — **osmosis**. The pressure needed to stop this flow is the **osmotic pressure**:

\[
\Pi = i \, M \, R \, T
\]

where \(M\) is the **molarity**, \(R\) is the gas constant (\(0.08206\ \text{L·atm·mol}^{-1}\text{K}^{-1}\)), and \(T\) is the absolute temperature. Osmotic pressure is the largest of the four effects — a 0.1 M solution at 25 °C exerts roughly 2.4 atm — which is why it is the method of choice for measuring molar masses of large molecules like proteins.

### Why molality, not molarity?

**Molality** \(m\) = moles of solute per kilogram of solvent — independent of temperature and volume. **Molarity** \(M\) = moles per liter of solution, which changes with temperature as liquids expand. Freezing- and boiling-point data use molality because solvent mass is fixed and colligative effects depend on the solute-to-solvent particle ratio.

## ELI-10: Explain Like I'm 10

> A crowded swimming pool: each swimmer (solute particle) makes it a little harder for water to escape into the air, keeps it liquid longer when cold, and makes it boil later when hot. It doesn't matter if the swimmer is big or small — only how many there are. That's a colligative property: the effect depends on the *number* of particles, not their identity.

## High-Yield Points

- Colligative properties depend on the **number of particles**, not particle identity: vapor-pressure lowering, boiling-point elevation, freezing-point depression, osmotic pressure.
- **Raoult's law:** \(P_{\text{solution}} = \chi_{\text{solvent}} P^{\circ}_{\text{solvent}}\) — adding nonvolatile solute lowers vapor pressure.
- **Boiling-point elevation:** \(\Delta T_b = i K_b m\); water \(K_b = 0.512\ \degree\text{C/m}\).
- **Freezing-point depression:** \(\Delta T_f = i K_f m\); water \(K_f = 1.86\ \degree\text{C/m}\).
- **Osmotic pressure:** \(\Pi = i M R T\) — the largest colligative effect.
- **van't Hoff factor** \(i\): nonelectrolyte 1; NaCl 2; CaCl₂ 3. Multiply the colligative effect by \(i\).
- Colligative equations use **molality** \(m\) (mol solute/kg solvent), except osmotic pressure which uses **molarity** \(M\).
- Adding solute always *lowers* vapor pressure and freezing point and *raises* boiling point.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Colligative property | A solution property depending only on the number of solute particles. | Vapor pressure, boiling/freezing point, and osmotic pressure all follow this rule. |
| van't Hoff factor (\(i\)) | Number of particles each solute formula unit produces in solution. | Corrects colligative calculations for ionic dissociation (NaCl → 2). |
| Molality (\(m\)) | Moles of solute per kilogram of solvent. | Temperature-independent concentration used in \(\Delta T_b\) and \(\Delta T_f\). |
| Molarity (\(M\)) | Moles of solute per liter of solution. | Used in osmotic pressure; temperature-dependent. |
| Raoult's law | Vapor pressure of solvent in solution = mole fraction × pure vapor pressure. | Quantifies vapor-pressure lowering. |
| Osmosis | Solvent flow through a semipermeable membrane toward higher solute concentration. | Drives water balance in cells and IV therapy. |
| Osmotic pressure (\(\Pi\)) | Pressure required to stop osmosis. | Measured to find molar masses of large molecules; governs cell volume. |
| Semipermeable membrane | Barrier that lets solvent pass but blocks solute. | The physical setup that makes osmosis observable. |

## Example: Colligative calculations, step by step

**Worked example 1 — freezing point of a NaCl solution.** What is the freezing point of a solution made by dissolving 11.7 g of NaCl in 500.0 g of water? (\(K_f(\text{water}) = 1.86\ \degree\text{C/m}\), molar mass NaCl = 58.44 g/mol)

**Step 1 — moles of solute (dimensional analysis):**

\[
11.7\ \text{g NaCl} \times \frac{1\ \text{mol NaCl}}{58.44\ \text{g NaCl}} = 0.200\ \text{mol NaCl}
\]

**Step 2 — molality:**

\[
m = \frac{0.200\ \text{mol}}{0.5000\ \text{kg water}} = 0.400\ \text{m}
\]

**Step 3 — freezing-point depression with \(i = 2\) (NaCl → Na⁺ + Cl⁻):**

\[
\Delta T_f = i K_f m
\]

\[
\Delta T_f = (2)(1.86\ \degree\text{C/m})(0.400\ \text{m}) = 1.49\ \degree\text{C}
\]

**Step 4 — new freezing point:**

\[
T_f = 0.000\ \degree\text{C} - 1.49\ \degree\text{C} = -1.49\ \degree\text{C}
\]

The solution freezes at \(-1.49\ \degree\text{C}\); forgetting the van't Hoff factor would give \(-0.744\ \degree\text{C}\), a factor-of-2 error.

**Worked example 2 — boiling point of a glucose solution.** A solution contains 18.0 g of glucose (C₆H₁₂O₆, molar mass 180.16 g/mol) in 250.0 g of water. At what temperature does it boil? (\(K_b(\text{water}) = 0.512\ \degree\text{C/m}\), glucose is a nonelectrolyte, \(i = 1\))

**Step 1 — moles and molality:**

\[
18.0\ \text{g glucose} \times \frac{1\ \text{mol}}{180.16\ \text{g}} = 0.0999\ \text{mol}
\]

\[
m = \frac{0.0999\ \text{mol}}{0.2500\ \text{kg}} = 0.400\ \text{m}
\]

**Step 2 — boiling-point elevation:**

\[
\Delta T_b = i K_b m
\]

\[
\Delta T_b = (1)(0.512\ \degree\text{C/m})(0.400\ \text{m}) = 0.205\ \degree\text{C}
\]

**Step 3 — new boiling point:**

\[
T_b = 100.000\ \degree\text{C} + 0.205\ \degree\text{C} = 100.205\ \degree\text{C}
\]

The solution boils at 100.205 °C; the same molality of NaCl would give \(2 \times 0.205 = 0.410\ \degree\text{C}\) — particle count, not mass, drives the effect.

**Worked example 3 — osmotic pressure of an IV saline solution.** Normal saline is 0.154 M NaCl at body temperature (37 °C). What is its osmotic pressure? (\(R = 0.08206\ \text{L·atm·mol}^{-1}\text{K}^{-1}\), \(i = 2\))

\[
\Pi = i M R T
\]

\[
\Pi = (2)(0.154\ \text{mol/L})\left(0.08206\ \frac{\text{L·atm}}{\text{mol·K}}\right)(310\ \text{K})
\]

\[
\Pi = 7.8\ \text{atm}
\]

This is why normal saline is safe to infuse: its osmotic pressure matches blood plasma, so red blood cells neither swell nor shrink.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Molality (\(m\)) | Molarity (\(M\)) | Molality = mol solute per kg *solvent* (used in \(\Delta T_b\), \(\Delta T_f\)); molarity = mol solute per L *solution* (used in \(\Pi\)). |
| Colligative effect | Solute identity | The *number* of particles matters; identity (size, color, charge) does not — only dissociation changes the count. |
| Boiling-point elevation | Freezing-point depression | Both follow \(\Delta T = i K m\), but \(K_f\) (1.86) > \(K_b\) (0.512), so freezing is more sensitive. |
| van't Hoff factor | Stoichiometric coefficient | \(i\) counts particles *in solution*: NaCl → 2, CaCl₂ → 3; it is not the coefficient in a balanced equation. |
| Mole fraction | Molality | Mole fraction \(\chi\) is used in Raoult's law for vapor pressure; molality is used in \(\Delta T_b\) and \(\Delta T_f\). |
| Osmosis direction | "Water goes where it's wetter" | Water flows from the *dilute* side (higher solvent concentration) to the *concentrated* side — toward more solute. |
| Freezing-point *depression* | Negative \(\Delta T_f\) | \(\Delta T_f\) is a positive magnitude; the new freezing point is \(T_f = 0 - \Delta T_f\). Don't double-subtract. |

## Quick Review

1. Name the four colligative properties and state what they all depend on.
2. What is the van't Hoff factor for CaCl₂, and why is it not 3.0 in a real solution?
3. A solution freezes at \(-2.79\ \degree\text{C}\). What is its particle molality? (\(K_f = 1.86\ \degree\text{C/m}\))
4. Which has the higher osmotic pressure at the same molarity: 0.10 M glucose or 0.10 M NaCl? Why?
5. Why is molality preferred over molarity in freezing-point calculations?
6. Road crews salt icy roads in winter. Explain in one or two sentences why the salt makes ice melt at temperatures below 0 °C.

<details>
<summary>Show answers</summary>

1. Vapor-pressure lowering, boiling-point elevation, freezing-point depression, and osmotic pressure — all depend on the number of solute particles (not their identity).
2. \(i = 3\) (Ca²⁺ + 2 Cl⁻). Real solutions fall slightly below ideal because ion pairing reduces the effective particle count at moderate concentrations.
3. \(\Delta T_f = i K_f m \Rightarrow m = \frac{\Delta T_f}{i K_f}\). For a nonelectrolyte, \(m = \frac{2.79}{1.86} = 1.50\ \text{m}\).
4. 0.10 M NaCl, because it dissociates into two particles: \(\Pi = iMRT\) gives roughly double the osmotic pressure of glucose (\(i = 1\)).
5. Molality uses mass of solvent, which does not change with temperature or volume; molarity changes as the solution expands or contracts.
6. The salt dissolves into particles that lower the freezing point of water below the road temperature, so ice that would be stable melts.

</details>

## Related Topics

- Previous: [Solubility](03-solubility.md)
- Next: [Colloids](05-colloids.md)
- Related: [Solutions and Colloids chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure. Colligative constants for water (\(K_b = 0.512\ \degree\text{C/m}\), \(K_f = 1.86\ \degree\text{C/m}\)) and \(R = 0.08206\ \text{L·atm·mol}^{-1}\text{K}^{-1}\) are standard values from current reference sources; calculations are original worked examples.
- Last updated: 2026-08-16
