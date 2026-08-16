---
title: "Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "8: Gases"
topic_number: "2"
source: "chemistry-atoms-first-2e.md"
tags:
  - "relating-pressure-volume-amount-and-temperature-the-ideal-gas-law"
  - "science"
status: "complete"
---

# Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 8: Gases](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

Four properties describe a gas sample: **pressure \(P\)**, **volume \(V\)**, **temperature \(T\)**, and **amount \(n\)** (in moles). Centuries of experiments showed that these four are not independent — changing one forces changes in the others. The empirical gas laws each hold two of them fixed and describe how the other two respond. Combined, they collapse into a single powerful equation, the **ideal gas law**:

\[
PV = nRT
\]

where \(R\) is the **ideal gas constant**. This topic builds each empirical law (Boyle's, Charles's, Avogadro's, and Gay-Lussac's), shows how they merge into the combined gas law, and then introduces the ideal gas law with its constant and its standard reference conditions. The ideal gas law is the workhorse of this chapter: nearly every gas calculation — from weather balloons to scuba tanks to gas stoichiometry — flows from it.

## Why This Matters

- **Predicting behavior:** the ideal gas law lets you compute any one of \(P\), \(V\), \(n\), or \(T\) if you know the other three — no experiment required.
- **Real-world systems:** aerosol cans, car airbags, weather balloons, scuba tanks, and anesthesia gas mixtures are all designed using these relationships.
- **Medical and safety context:** knowing how pressure rises with temperature (Gay-Lussac's law) explains why aerosol cans warn "do not incinerate," and why tires can over-pressure on hot roads.
- **Foundation for later topics:** gas stoichiometry, effusion/diffusion, and kinetic-molecular theory all build on \(PV = nRT\).
- **Exams:** ideal-gas-law rearrangements and combined-gas-law problems are among the most frequently tested calculations in general chemistry.

## Core Concepts

### Boyle's law: pressure and volume (constant \(n\), \(T\))

Robert Boyle found that at fixed temperature and amount of gas, pressure and volume are **inversely proportional**: squeeze a gas into half its volume and its pressure doubles.

\[
P_1V_1 = P_2V_2
\]

This is why a sealed syringe is hard to push once the plunger is nearly home, and why a rising weather balloon expands as outside pressure falls.

### Charles's law: volume and temperature (constant \(n\), \(P\))

At fixed pressure and amount, gas volume is **directly proportional** to its **absolute temperature** (kelvin):

\[
\frac{V_1}{T_1} = \frac{V_2}{T_2}
\]

Doubling the kelvin temperature doubles the volume. **Temperature must always be in kelvin** (\(K = {}^\circ C + 273.15\)) because the law describes proportionality to absolute temperature — dividing by a Celsius number gives nonsense.

### Gay-Lussac's (Amontons's) law: pressure and temperature (constant \(n\), \(V\))

At fixed volume and amount, gas pressure is directly proportional to absolute temperature:

\[
\frac{P_1}{T_1} = \frac{P_2}{T_2}
\]

Heating a sealed rigid container raises the pressure — the mechanism behind the aerosol-can warning and the pressure buildup in a closed pressure cooker.

### Avogadro's law: volume and amount (constant \(P\), \(T\))

At fixed pressure and temperature, gas volume is directly proportional to the number of moles:

\[
\frac{V_1}{n_1} = \frac{V_2}{n_2}
\]

Equal volumes of gases at the same temperature and pressure contain equal numbers of molecules — the idea that lets chemists use gas volumes as mole counts in reactions.

### The combined gas law

If \(n\) is constant but \(P\), \(V\), and \(T\) all change, the first three laws combine into:

\[
\frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2}
\]

You can "derive" any of the individual laws by holding one quantity constant and canceling it.

### The ideal gas law and the gas constant

Merging all four proportionalities (with \(n\) included) gives:

\[
PV = nRT
\]

The constant \(R\) has different numerical values depending on the pressure and volume units:

\[
R = 0.08206\ \text{L atm mol}^{-1}\text{K}^{-1}
= 8.314\ \text{J mol}^{-1}\text{K}^{-1}
= 62.36\ \text{L torr mol}^{-1}\text{K}^{-1}
\]

Choose the \(R\) whose units match your problem's pressure unit, and always use kelvin for temperature. **Standard temperature and pressure (STP)** is defined as exactly 273.15 K (0 °C) and 1 atm; at STP, one mole of an ideal gas occupies 22.4 L (the **molar volume**).

### The "ideal" assumption

The ideal gas law treats gas molecules as point particles with no attractions and no volume. Real gases deviate at high pressure and low temperature; the law remains an excellent approximation for most gases near room temperature and 1 atm. (Non-ideal behavior is covered later in this chapter.)

## ELI-10: Explain Like I'm 10

> Think of a bouncy castle full of kids. Squeeze the castle smaller and the kids bounce harder against the walls — that's Boyle's law. Warm the kids up so they run faster and they push harder — that's Gay-Lussac's law. Put more kids in and the castle stretches bigger — that's Avogadro's law. The ideal gas law is one big recipe that puts all three ideas together: more kids, faster kids, or a smaller castle all mean harder pushing.

## High-Yield Points

- **Ideal gas law:** \(PV = nRT\); \(R = 0.08206\ \text{L atm mol}^{-1}\text{K}^{-1}\) when \(P\) is in atm.
- **Temperature must be in kelvin** in every gas-law equation: \(K = {}^\circ C + 273.15\).
- Boyle's law (\(PV = \text{const}\)), Charles's law (\(V/T = \text{const}\)), Gay-Lussac's law (\(P/T = \text{const}\)), Avogadro's law (\(V/n = \text{const}\)).
- Combined gas law: \(P_1V_1/T_1 = P_2V_2/T_2\) — use it when \(n\) is fixed and two or more variables change.
- **STP** = 273.15 K and 1 atm; molar volume of an ideal gas at STP = 22.4 L/mol.
- To solve, rearrange \(PV = nRT\) for the unknown, substitute values with units, and check that units cancel.
- Pick the \(R\) value matching the problem's pressure unit (0.08206 for atm, 62.36 for torr/mmHg).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Ideal gas law | \(PV = nRT\), linking pressure, volume, moles, and kelvin temperature | The single equation used for most gas calculations |
| Ideal gas constant \(R\) | The proportionality constant whose value depends on pressure/volume units | Must match the units in your problem or your answer will be off by orders of magnitude |
| Boyle's law | At constant \(n\) and \(T\), \(P\) and \(V\) are inversely proportional | Explains compression and expansion of gases |
| Charles's law | At constant \(n\) and \(P\), \(V\) is proportional to kelvin \(T\) | Explains thermal expansion of gases (hot-air balloons) |
| Gay-Lussac's law | At constant \(n\) and \(V\), \(P\) is proportional to kelvin \(T\) | Explains pressure buildup in sealed heated containers |
| Avogadro's law | At constant \(P\) and \(T\), \(V\) is proportional to \(n\) | Lets gas volumes count molecules — the basis of gas stoichiometry |
| Combined gas law | \(P_1V_1/T_1 = P_2V_2/T_2\) for fixed \(n\) | One equation for problems where several variables change at once |
| STP | Standard temperature and pressure: 273.15 K and 1 atm | Reference conditions; 1 mol ideal gas = 22.4 L at STP |
| Molar volume | Volume occupied by one mole of gas (22.4 L at STP) | Quick mole↔volume conversion for gases at STP |
| Kelvin | Absolute temperature scale starting at \(-273.15\ ^\circ C\) | Required in all gas-law equations; proportional relationships break in °C |

## Worked Examples

### Example 1: Boyle's law — compressing a syringe

A syringe contains 40.0 mL of air at 1.00 atm. The plunger is pushed to compress the air to 25.0 mL while the temperature stays constant. What is the new pressure?

**Step 1 — Write Boyle's law:**

\[
P_1V_1 = P_2V_2
\]

**Step 2 — Solve for \(P_2\) and substitute:**

\[
P_2 = \frac{P_1V_1}{V_2} = \frac{(1.00\ \text{atm})(40.0\ \text{mL})}{25.0\ \text{mL}} = 1.60\ \text{atm}
\]

Dimensional check: mL cancels, leaving atm. Sense check: volume decreased, so pressure increased — 1.60 atm > 1.00 atm. ✓

### Example 2: Combined gas law — a rising weather balloon

A balloon holds 5.00 L of helium at ground level, where \(P = 1.00\ \text{atm}\) and \(T = 27.0\ ^\circ C\). It rises to an altitude where \(P = 0.500\ \text{atm}\) and \(T = -23.0\ ^\circ C\). What is its new volume? (Assume no gas escapes.)

**Step 1 — Convert temperatures to kelvin:**

\[
T_1 = 27.0 + 273.15 = 300.2\ \text{K}, \qquad T_2 = -23.0 + 273.15 = 250.2\ \text{K}
\]

**Step 2 — Write the combined gas law and solve for \(V_2\):**

\[
\frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2}
\quad\Rightarrow\quad
V_2 = V_1 \times \frac{P_1}{P_2} \times \frac{T_2}{T_1}
\]

**Step 3 — Substitute:**

\[
V_2 = 5.00\ \text{L} \times \frac{1.00\ \text{atm}}{0.500\ \text{atm}} \times \frac{250.2\ \text{K}}{300.2\ \text{K}} = 8.34\ \text{L}
\]

Sense check: lower pressure expands the balloon (factor of 2), but colder temperature contracts it (factor ~0.83); net result is growth to 8.34 L, consistent with balloons swelling at altitude.

### Example 3: Ideal gas law — moles in a scuba tank

A scuba tank has a volume of 11.0 L and is filled to a pressure of 204 atm at 25.0 °C. How many moles of air does it contain?

**Step 1 — Convert temperature to kelvin:**

\[
T = 25.0 + 273.15 = 298.2\ \text{K}
\]

**Step 2 — Write the ideal gas law and solve for \(n\):**

\[
PV = nRT \quad\Rightarrow\quad n = \frac{PV}{RT}
\]

**Step 3 — Substitute with \(R = 0.08206\ \text{L atm mol}^{-1}\text{K}^{-1}\) (P in atm):**

\[
n = \frac{(204\ \text{atm})(11.0\ \text{L})}{(0.08206\ \text{L atm mol}^{-1}\text{K}^{-1})(298.2\ \text{K})} = 91.8\ \text{mol}
\]

Dimensional check: atm and L cancel, K cancels, leaving mol. A tank of ~92 mol of air at 204 atm is consistent with the ~3,000 psi fill pressure of scuba tanks.

### Example 4: Molar volume at STP

Confirm that one mole of an ideal gas occupies 22.4 L at STP.

**Step 1 — Write the ideal gas law solved for \(V\):**

\[
V = \frac{nRT}{P}
\]

**Step 2 — Substitute STP values (\(T = 273.15\ \text{K}\), \(P = 1.00\ \text{atm}\), \(n = 1.00\ \text{mol}\)):**

\[
V = \frac{(1.00\ \text{mol})(0.08206\ \text{L atm mol}^{-1}\text{K}^{-1})(273.15\ \text{K})}{1.00\ \text{atm}} = 22.4\ \text{L}
\]

This is the origin of the 22.4 L/mol molar volume used throughout gas stoichiometry.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Celsius temperature | Kelvin temperature | Gas laws require kelvin; \(K = {}^\circ C + 273.15\). Using °C directly in Charles's or Gay-Lussac's law gives wrong answers |
| Boyle's law | Charles's law | Boyle: \(P\) vs \(V\) at constant \(T\) (inverse); Charles: \(V\) vs \(T\) at constant \(P\) (direct) |
| Gay-Lussac's law | Charles's law | Gay-Lussac: \(P\) vs \(T\) at constant \(V\); Charles: \(V\) vs \(T\) at constant \(P\) — both need kelvin |
| 0 °C in kelvin | 273 K | 0 °C = 273.15 K, not 273; use 273.15 for calculations requiring three or more significant figures |
| \(R = 0.08206\) | \(R = 8.314\) | Same constant, different units: 0.08206 L atm mol⁻¹ K⁻¹ vs 8.314 J mol⁻¹ K⁻¹; pick the one matching your units |
| Volume at STP (22.4 L/mol) | Volume at any conditions | 22.4 L/mol applies only at 273.15 K and 1 atm; otherwise compute with the ideal gas law |
| Combined gas law | Ideal gas law | Combined law fixes \(n\) and compares two states; ideal gas law relates all four variables in a single state |

## Quick Review

1. Write the ideal gas law and give the value of \(R\) when pressure is in atm and volume in liters.
2. A gas occupies 3.00 L at 1.00 atm. If the temperature and moles are constant, what volume does it occupy at 3.00 atm?
3. Convert 25.0 °C to kelvin. Why is this conversion mandatory in gas-law problems?
4. A rigid 2.00 L canister of gas at 300 K is heated to 450 K. If volume and moles are constant, by what factor does the pressure increase?
5. How many moles of gas are in a 22.4 L container at STP? What gas law relationship makes this a quick answer?
6. Which value of \(R\) should you use if a problem gives pressure in torr, and what is it?

<details>
<summary>Show answers</summary>

1. \(PV = nRT\); \(R = 0.08206\ \text{L atm mol}^{-1}\text{K}^{-1}\).
2. Boyle's law: \(V_2 = (1.00 \times 3.00)/3.00 = 1.00\ \text{L}\). Pressure tripled, so volume fell to one third.
3. \(25.0 + 273.15 = 298.2\ \text{K}\). Gas laws are proportional to absolute temperature; °C values are relative to an arbitrary zero and give incorrect ratios.
4. Gay-Lussac's law: \(P_2/P_1 = T_2/T_1 = 450/300 = 1.50\) — pressure increases by 50%.
5. 1.00 mol. At STP the molar volume is 22.4 L/mol, so 22.4 L holds exactly 1 mol (Avogadro's law / ideal gas law).
6. \(R = 62.36\ \text{L torr mol}^{-1}\text{K}^{-1}\), so torr cancels when pressure is in torr.

</details>

## Related Topics

- Previous: [Gas Pressure](01-gas-pressure.md)
- Next: [Stoichiometry of Gaseous Substances, Mixtures, and Reactions](03-stoichiometry-of-gaseous-substances-mixtures-and-reactions.md)
- Related: [Gases chapter overview](../README.md)
- Related: [The Kinetic-Molecular Theory](05-the-kinetic-molecular-theory.md) — explains *why* these relationships hold at the molecular level

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
