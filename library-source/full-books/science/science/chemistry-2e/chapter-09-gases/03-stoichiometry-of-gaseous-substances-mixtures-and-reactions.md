---
title: "Stoichiometry of Gaseous Substances, Mixtures, and Reactions"
subject: "Science"
book: "Chemistry 2e"
chapter: "9: Gases"
topic_number: "3"
source: "chemistry-2e.md"
tags:
  - "stoichiometry-of-gaseous-substances-mixtures-and-reactions"
  - "science"
status: "complete"
---

# Stoichiometry of Gaseous Substances, Mixtures, and Reactions

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 9: Gases](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

This topic combines the ideal gas law with the mole relationships from earlier chapters. Three big ideas come together. First, **gas stoichiometry**: because the ideal gas law links volume directly to moles, gas volumes can be used in balanced-reaction calculations just like masses — often without ever weighing the gas. Second, **gas density**: the ideal gas law rearranges to find the density or molar mass of a gas, a classic way to identify an unknown gas. Third, **gas mixtures**: real samples are almost always mixtures (air is ~78% N₂ and ~21% O₂), and **Dalton's law of partial pressures** lets you treat each gas independently. Together these tools answer practical questions: How much oxygen will this reaction produce? What is the molar mass of this unknown gas? How much of a scuba tank's pressure is actually oxygen?

## Why This Matters

- **Laboratory gas collection:** Reactions that produce gases (hydrogen from metal + acid, oxygen from decomposing hydrogen peroxide) are routinely analyzed by collecting the gas over water. Correcting for water vapor is essential for accurate results.
- **Air quality and respiration:** Atmospheric pressure is the sum of partial pressures of N₂, O₂, Ar, CO₂, and water vapor. Oxygen's *partial pressure* drives its diffusion into blood — a core physiological fact.
- **Scuba diving:** Divers breathe compressed air; nitrogen's partial pressure increases with depth, which is directly related to nitrogen narcosis and decompression sickness risk.
- **Combustion and industry:** Gas stoichiometry sizes air supplies for furnaces, engines, and rocket motors, and computes CO₂ emissions.
- **Exams:** Gas density/molar mass problems, Dalton's law, water-displacement corrections, and gas-volume stoichiometry are high-frequency test items.

## Core Concepts

### Molar volume: volume as a mole shortcut

At STP (273.15 K, 1 atm), one mole of any ideal gas occupies 22.4 L:

\[ V = \frac{nRT}{P} = \frac{(1.00\ \text{mol})(0.08206\ \text{L·atm/(mol·K)})(273.15\ \text{K})}{1.00\ \text{atm}} = 22.4\ \text{L} \]

Because all gases share this molar volume at the same conditions (Avogadro's law), a balanced equation's mole ratios apply directly to volume ratios — but only when all gases are at the same temperature and pressure. In \(2\text{H}_2 + \text{O}_2 \rightarrow 2\text{H}_2\text{O}\), 2 L of H₂ react with 1 L of O₂ at the same T and P.

### Gas stoichiometry workflow

Gas stoichiometry follows the same mole map as mass stoichiometry:

1. Convert what you are given (mass, volume, or moles) to moles.
2. Apply the balanced equation's mole ratio.
3. Convert moles of the target substance to what is asked (mass, volume, or moles).

Given a gas volume at non-STP conditions, convert volume → moles with the ideal gas law \(n = PV/RT\); at STP, use 22.4 L/mol. If you need a volume of gas produced at known \(P\) and \(T\), compute moles first, then \(V = nRT/P\).

### Density and molar mass of a gas

Rearranging the ideal gas law gives gas density directly:

\[ d = \frac{PM}{RT} \]

where \(d\) is density (g/L), \(M\) is molar mass (g/mol), \(P\) in atm, \(T\) in kelvin. Equivalently, an unknown gas's molar mass can be measured by weighing a known volume of it:

\[ M = \frac{dRT}{P} \]

Because gases have low densities (air ≈ 1.2 g/L at room conditions vs water ≈ 1000 g/L), these measurements use evacuated flasks weighed before and after filling. Gases denser than air (CO₂, propane) sink and can pool in low areas; less dense gases (H₂, He) rise.

### Dalton's law of partial pressures

Each gas in a mixture behaves as if it alone occupied the container. The total pressure is the sum of the individual **partial pressures**:

\[ P_{\text{total}} = P_1 + P_2 + P_3 + \cdots \]

Each partial pressure is the pressure that gas would exert alone, and equals its **mole fraction** times the total pressure:

\[ P_i = X_i P_{\text{total}} \quad\text{where}\quad X_i = \frac{n_i}{n_{\text{total}}} \]

For air at 1 atm: \(P_{\text{N}_2} \approx 0.78\ \text{atm}\), \(P_{\text{O}_2} \approx 0.21\ \text{atm}\), remainder mostly argon and CO₂. Partial pressures are what matter physiologically — the partial pressure of O₂ in the alveoli drives oxygen into the blood, not the total pressure.

### Collecting gas over water

When a gas is collected by bubbling it into an inverted water-filled bottle (water displacement), the gas is saturated with water vapor. The measured total pressure is the sum of the collected gas's pressure plus the vapor pressure of water at that temperature:

\[ P_{\text{total}} = P_{\text{gas}} + P_{\text{H}_2\text{O}} \]

Water's vapor pressure rises steeply with temperature (about 23.8 mmHg at 25 °C, 31.8 mmHg at 30 °C). The correction \(P_{\text{gas}} = P_{\text{total}} - P_{\text{H}_2\text{O}}\) must be applied before using the ideal gas law, or moles of dry gas are overestimated.

## ELI-10: Explain Like I'm 10

Imagine a jar of mixed gumballs: red, blue, and green. The red ones push on the jar's lid with part of the total push, the blue ones with another part, and the green ones with the rest — add up all the pushes and you get the total push on the lid. That's Dalton's law: every color (every gas in a mixture) pushes on its own, and the total push is just all the pushes added together. If you know how many gumballs of each color are in the jar, you can predict exactly how much each contributes to the push.

## High-Yield Points

- 1 mol of any ideal gas = 22.4 L at STP (273.15 K, 1 atm) — the standard molar volume.
- Gas volume ratios in a reaction equal mole ratios only when all gases are at the same T and P.
- Gas density: \(d = PM/RT\); molar mass: \(M = dRT/P\). Gas density is in g/L.
- Dalton's law: \(P_{\text{total}} = P_1 + P_2 + \cdots\); partial pressure \(P_i = X_i P_{\text{total}}\).
- Mole fraction \(X_i = n_i/n_{\text{total}}\) is unitless, between 0 and 1; all mole fractions sum to 1.
- Gas collected over water: \(P_{\text{gas}} = P_{\text{total}} - P_{\text{H}_2\text{O}}\).
- Show the balanced equation, compute moles, apply the mole ratio, then convert to the requested quantity — with units canceling at every step.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Molar volume | Volume occupied by one mole of gas at a given T and P; 22.4 L at STP | Converts gas volume to moles without weighing |
| Partial pressure | The pressure a single gas in a mixture would exert alone | Total pressure is the sum of partial pressures; physiology and gas collection depend on it |
| Dalton's law | Total pressure of a mixture equals the sum of each gas's partial pressures | The rule that makes gas mixtures mathematically manageable |
| Mole fraction (X) | Fraction of total moles belonging to one component, \(n_i/n_{\text{total}}\) | Converts mole fraction to partial pressure: \(P_i = X_i P_{\text{total}}\) |
| Vapor pressure of water | Pressure exerted by water vapor in equilibrium with liquid water at a given T | Must be subtracted when gas is collected over water |
| Gas density | Mass per volume of a gas (g/L) | Found via \(d = PM/RT\); identifies gases and explains sinking/rising |
| Water displacement | Collecting a gas by bubbling it into an inverted water-filled container | Standard lab method; introduces water vapor that must be corrected for |

## Worked Examples

### Example 1: Gas-volume stoichiometry — hydrogen from a metal–acid reaction

Zinc reacts with hydrochloric acid: \(\text{Zn}(s) + 2\text{HCl}(aq) \rightarrow \text{ZnCl}_2(aq) + \text{H}_2(g)\). What volume of H₂ at STP is produced when 6.54 g of Zn reacts completely?

**Step 1 — convert mass to moles:**

\[ n_{\text{Zn}} = 6.54\ \text{g} \times \frac{1\ \text{mol}}{65.38\ \text{g}} = 0.100\ \text{mol} \]

**Step 2 — apply the mole ratio** (1 mol Zn : 1 mol H₂):

\[ n_{\text{H}_2} = 0.100\ \text{mol Zn} \times \frac{1\ \text{mol H}_2}{1\ \text{mol Zn}} = 0.100\ \text{mol H}_2 \]

**Step 3 — convert moles to volume at STP** using 22.4 L/mol:

\[ V = 0.100\ \text{mol} \times \frac{22.4\ \text{L}}{1\ \text{mol}} = 2.24\ \text{L} \]

### Example 2: Gas collected over water

Oxygen is produced by decomposing hydrogen peroxide and collected over water at 25.0 °C. Total pressure is 758 mmHg; water's vapor pressure at 25.0 °C is 23.8 mmHg. What is the partial pressure of the dry O₂?

**Step 1 — write the correction formula:**

\[ P_{\text{O}_2} = P_{\text{total}} - P_{\text{H}_2\text{O}} \]

**Step 2 — substitute and subtract:**

\[ P_{\text{O}_2} = 758\ \text{mmHg} - 23.8\ \text{mmHg} = 734\ \text{mmHg} \]

Forgetting the correction would overestimate the oxygen pressure by 23.8 mmHg (~3%), which propagates into any moles or mass calculated from it.

### Example 3: Density and molar mass of an unknown gas

A 1.00 L flask contains 1.79 g of an unknown gas at 25.0 °C and 1.00 atm. Identify the gas.

**Step 1 — write the molar mass formula:**

\[ M = \frac{dRT}{P} \]

**Step 2 — compute the density** (density = mass/volume):

\[ d = \frac{1.79\ \text{g}}{1.00\ \text{L}} = 1.79\ \text{g/L} \]

**Step 3 — substitute** (\(T = 25.0 + 273.15 = 298.15\ \text{K}\)):

\[ M = \frac{(1.79\ \text{g/L})(0.08206\ \text{L·atm/(mol·K)})(298.15\ \text{K})}{1.00\ \text{atm}} = 43.8\ \text{g/mol} \]

The molar mass is about 44 g/mol, which matches CO₂ (44.01 g/mol) — the gas is likely carbon dioxide.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Molar volume 22.4 L | Any gas at any conditions | 22.4 L/mol is valid only at STP; at other conditions use \(V = nRT/P\) |
| Partial pressure | Total pressure | Partial pressure is one component's share; total is the sum of all shares |
| Mole fraction \(X_i\) | Mass fraction | \(X_i = n_i/n_{\text{total}}\) (moles), not masses; mole fractions sum to 1 |
| Volume ratios in reactions | Mass ratios | Gas volume ratios equal mole ratios (same T and P) — but only for gases, not liquids/solids |
| \(P_{\text{gas}}\) after correction | \(P_{\text{total}}\) measured | The measured pressure includes water vapor; always subtract \(P_{\text{H}_2\text{O}}\) |
| Gas density | Liquid/solid density | Gas density is ~1000× smaller and reported in g/L; \(d = PM/RT\) applies only to gases |
| STP | SATP | STP = 273.15 K, 1 atm (22.4 L/mol); SATP = 298.15 K, 1 bar (~24.8 L/mol) |

## Quick Review

1. What volume does 2.00 mol of an ideal gas occupy at STP?
2. Write Dalton's law and the formula for a component's partial pressure in terms of mole fraction.
3. A gas is collected over water at 30.0 °C (water vapor pressure 31.8 mmHg). Total pressure is 790 mmHg. What is the dry gas pressure?
4. What is the density of CO₂ (M = 44.01 g/mol) at STP?
5. In the reaction \(\text{N}_2 + 3\text{H}_2 \rightarrow 2\text{NH}_3\), how many liters of NH₃ form from 3.0 L of N₂ (all gases at same T and P)?
6. Why must you use moles — not grams — when applying gas volume ratios to a balanced equation?

<details>
<summary>Show answers</summary>

1. \(2.00\ \text{mol} \times 22.4\ \text{L/mol} = 44.8\ \text{L}\).
2. \(P_{\text{total}} = P_1 + P_2 + P_3 + \cdots\) and \(P_i = X_i P_{\text{total}}\), where \(X_i = n_i/n_{\text{total}}\).
3. \(P_{\text{gas}} = 790\ \text{mmHg} - 31.8\ \text{mmHg} = 758\ \text{mmHg}\).
4. \(d = PM/RT = (1.00 \times 44.01)/(0.08206 \times 273.15) = 1.96\ \text{g/L}\). CO₂ is denser than air (~1.2 g/L), which is why it can pool in low areas.
5. Mole ratio N₂:NH₃ = 1:2, so \(3.0\ \text{L} \times 2 = 6.0\ \text{L}\) of NH₃ (same T and P).
6. Volume ratios mirror mole ratios (Avogadro's law), and grams do not scale with moles the same way — different gases have different molar masses, so equal masses do not mean equal moles or volumes.

</details>

## Related Topics

- Previous: [Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law](02-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law.md)
- Next: [Effusion and Diffusion of Gases](04-effusion-and-diffusion-of-gases.md)
- Related: [Gases chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Standard constants and reference values used (22.4 L/mol at STP; water vapor pressures 23.8 mmHg at 25 °C, 31.8 mmHg at 30 °C; molar masses from the periodic table) are widely published reference values; verify against current primary sources (NIST, IUPAC) before formal citation. Water vapor pressure values are temperature-dependent and should be read from a current table for exact work.
- Last updated: 2026-08-16
