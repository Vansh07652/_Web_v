---
title: "Solubility"
subject: "Science"
book: "Chemistry 2e"
chapter: "11: Solutions and Colloids"
topic_number: "3"
source: "chemistry-2e.md"
tags:
  - "solubility"
  - "science"
status: "complete"
---

# Solubility

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 11: Solutions and Colloids](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

**Solubility** is the maximum amount of solute that can dissolve in a given amount of solvent at a specified temperature — it is the quantitative version of the "like dissolves like" idea from topic 1. When that maximum is reached, the solution is **saturated**, and any extra solute sits undissolved in dynamic equilibrium with the dissolved particles.

Two variables dominate solubility:

- **Temperature.** For most *solid* solutes, solubility increases with temperature (more kinetic energy and usually endothermic dissolution). For *gases*, solubility *decreases* with rising temperature — gas dissolution is exothermic, and heat drives dissolved gas out of solution.
- **Pressure.** Pressure has essentially no effect on solid/liquid solubility, but gas solubility is directly proportional to the gas's partial pressure above the solution — **Henry's law**:
  \[
  C = k P
  \]
  where \(C\) is the gas concentration in solution (mol/L), \(P\) the partial pressure (atm), and \(k\) the Henry's law constant for that gas–solvent pair at that temperature.

For ionic compounds, solubility can be predicted from a short set of **solubility rules** and quantified at equilibrium with the **solubility product**, \(K_{sp}\) — the equilibrium constant for dissolution:

\[
\ce{AgCl(s) <=> Ag+(aq) + Cl-(aq)}, \qquad K_{sp} = [\ce{Ag+}][\ce{Cl-}] = 1.8 \times 10^{-10}
\]

Small \(K_{sp}\) → low solubility; converting \(K_{sp}\) into a **molar solubility** (mol/L) is a standard calculation.

## Why This Matters

- **Environmental and biological oxygen:** Fish need dissolved \(\ce{O2}\). Henry's law explains why carbonated drinks fizz when opened (pressure drops) and why warm water holds less oxygen — a real concern in power-plant cooling discharges (thermal pollution) and summer fish kills.
- **Medical applications:** Kidney and gallstones form when salts like calcium oxalate or calcium phosphate exceed their solubility in urine — the same equilibrium chemistry as \(K_{sp}\). Gases used in anesthesia and deep-sea diving obey Henry's law (the bends is dissolved \(\ce{N2}\) coming out of solution when pressure drops).
- **Industry and pharmacy:** Recrystallization purifies chemicals by exploiting temperature-dependent solubility; drug formulation must ensure active ingredients stay dissolved (or dissolve at the right rate) in the body.
- **Exam staple:** Solubility rules, Henry's law calculations, and \(K_{sp}\) → molar solubility conversions appear in nearly every general-chemistry course.

## Core Concepts

### Saturation and the equilibrium view

- **Unsaturated** solution: below the solubility limit — more solute can dissolve.
- **Saturated** solution: at the limit — dissolved and undissolved solute are in dynamic equilibrium (rate of dissolving = rate of precipitating).
- **Supersaturated** solution: temporarily above the limit; unstable, precipitates when disturbed (e.g., a seed crystal).

Solubility is always reported *with* a temperature: "the solubility of \(\ce{KNO3}\) is about 32 g per 100 g water at 20 °C, and about 246 g at 100 °C."

### Temperature effects: solids vs gases

- **Most solids:** solubility ↑ with temperature (the dissolution is usually endothermic; heating supplies energy and speeds equilibration). Exceptions exist — \(\ce{Ce2(SO4)3}\) becomes *less* soluble as temperature rises because its dissolution is exothermic.
- **All gases:** solubility ↓ with temperature (gas dissolution is exothermic; warming shifts the equilibrium toward the gas phase). Warm soda goes flat faster; cold water holds more dissolved oxygen.

### Pressure: Henry's law for gases

\[
C = k P
\]

Doubling the partial pressure of a gas above a solution doubles its equilibrium concentration in solution. This is why:

- Soda is bottled under \(\ce{CO2}\) pressure; opening the bottle drops \(P_{\ce{CO2}}\) to ~0.0004 atm (air's tiny \(\ce{CO2}\) partial pressure), so \(C\) plummets and the gas leaves — fizz.
- Scuba divers must ascend slowly: \(\ce{N2}\) dissolved under high pressure comes out of solution if pressure drops too fast (decompression sickness).
- Henry's law constants are specific to each gas–solvent pair and temperature (e.g., \(k \approx 1.3 \times 10^{-3}\ \text{mol L}^{-1}\ \text{atm}^{-1}\) for \(\ce{O2}\) in water at 25 °C).

### Solubility rules for ionic compounds (general)

These guidelines classify most common salts (memorized by generations of students):

- **Soluble:** all nitrates (\(\ce{NO3-}\)); all salts of group 1 metals and ammonium (\(\ce{NH4+}\)); all chlorides, bromides, iodides except those of \(\ce{Ag+}\), \(\ce{Pb^{2+}}\), \(\ce{Hg2^{2+}}\); most sulfates except \(\ce{CaSO4}\), \(\ce{SrSO4}\), \(\ce{BaSO4}\), \(\ce{PbSO4}\), \(\ce{Ag2SO4}\).
- **Insoluble:** most carbonates, phosphates, sulfides, and hydroxides — except those of group 1 metals and \(\ce{NH4+}\) (and, for hydroxides, the heavier group 2 metals \(\ce{Ca^{2+}}\), \(\ce{Sr^{2+}}\), \(\ce{Ba^{2+}}\) are sparingly soluble).

These rules come from *measured* equilibria; they summarize behavior and have a few genuine exceptions, so treat them as strong guidelines.

### \(K_{sp}\) and molar solubility

For \(\ce{AgCl}\): \(K_{sp} = [\ce{Ag+}][\ce{Cl-}] = 1.8 \times 10^{-10}\). If \(s\) = molar solubility (mol/L), then \([\ce{Ag+}] = s\) and \([\ce{Cl-}] = s\), so:

\[
K_{sp} = s^2 \quad \Rightarrow \quad s = \sqrt{K_{sp}}
\]

For a 1:2 salt like \(\ce{PbCl2}\) (\(K_{sp} = 1.7 \times 10^{-5}\)):

\[
K_{sp} = [\ce{Pb^{2+}}][\ce{Cl-}]^2 = s(2s)^2 = 4s^3
\]

The general rule: always relate the ion concentrations back to \(s\) using the dissolution stoichiometry before substituting into \(K_{sp}\).

## ELI-10: Explain Like I'm 10

> Solubility is how much sugar your tea can hold before extra sugar just sits at the bottom. Hot tea holds more sugar than cold tea — most solids are like that. But bubbles (gases) are the opposite: cold soda keeps its fizz, and warm soda goes flat. And if you pressurize a bottle, you force more bubble-gas into the drink — that's why soda is fizzy until you open it.

## High-Yield Points

- Solubility = maximum solute in a given solvent at a given temperature; saturated = dynamic equilibrium.
- Most solids: solubility ↑ with temperature; all gases: solubility ↓ with temperature.
- Pressure affects only gases: **Henry's law** \(C = kP\) — gas concentration is proportional to partial pressure.
- Like dissolves like still rules the qualitative prediction: polar/ionic in water, nonpolar in nonpolar solvents.
- Solubility rules (general): nitrates and group-1/\(\ce{NH4+}\) salts always soluble; chlorides except \(\ce{Ag+}\), \(\ce{Pb^{2+}}\), \(\ce{Hg2^{2+}}\); sulfates except \(\ce{Ba^{2+}}\), \(\ce{Sr^{2+}}\), \(\ce{Ca^{2+}}\), \(\ce{Pb^{2+}}\), \(\ce{Ag+}\); carbonates/phosphates/sulfides/hydroxides mostly insoluble except group-1/\(\ce{NH4+}\).
- \(K_{sp}\) = equilibrium constant for dissolution; relate ion concentrations to molar solubility \(s\) via stoichiometry: \(\ce{AgCl}\): \(K_{sp} = s^2\); \(\ce{PbCl2}\): \(K_{sp} = 4s^3\); \(\ce{CaF2}\): \(K_{sp} = 4s^3\).
- Small \(K_{sp}\) ↔ low molar solubility; comparing \(K_{sp}\) values directly is only valid for salts with the same ion stoichiometry.
- Applications: fizz (pressure), thermal pollution (warm water → less \(\ce{O2}\)), kidney stones (supersaturated urine), decompression sickness.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| solubility | Max solute that dissolves in a given solvent at a given temperature | The quantitative limit behind saturation, crystallization, and formulation |
| saturated solution | At the solubility limit, in dynamic equilibrium with undissolved solute | The reference state for all solubility calculations |
| supersaturated solution | Temporarily holds more solute than equilibrium allows | Unstable; seeds trigger crystallization (honey, "hot ice") |
| Henry's law | \(C = kP\): gas concentration ∝ partial pressure above the solution | Explains fizz, dissolved oxygen, and decompression sickness |
| solubility rules | General guidelines predicting which ionic compounds dissolve | The fastest qualitative tool for predicting precipitation |
| solubility product (\(K_{sp}\)) | Equilibrium constant for a dissolving salt | Quantifies solubility; small \(K_{sp}\) = sparingly soluble |
| molar solubility | Solubility expressed in mol/L (\(s\)) | The bridge between \(K_{sp}\) and everyday units like g/L |

## How It Works / Step-by-Step Process

### Worked example 1: Henry's law — dissolved oxygen in water

**Problem.** The Henry's law constant for \(\ce{O2}\) in water at 25 °C is \(k = 1.3 \times 10^{-3}\ \text{mol L}^{-1}\ \text{atm}^{-1}\). (a) Find the \(\ce{O2}\) concentration when the gas above the water is pure \(\ce{O2}\) at 1.00 atm. (b) Find it when the water is open to air, where the \(\ce{O2}\) partial pressure is 0.21 atm.

**Solution (a):**

1. Write Henry's law:
   \[
   C = k P
   \]
2. Substitute:
   \[
   C = (1.3 \times 10^{-3}\ \text{mol L}^{-1}\ \text{atm}^{-1})(1.00\ \text{atm}) = 1.3 \times 10^{-3}\ \text{mol/L}
   \]
   Dimensional check: (mol L⁻¹ atm⁻¹)(atm) = mol/L ✓

**Solution (b):**

1. Same formula, new pressure:
   \[
   C = (1.3 \times 10^{-3})(0.21) = 2.7 \times 10^{-4}\ \text{mol/L}
   \]
2. Air-exposed water holds only about one-fifth as much oxygen — the partial pressure, not the total pressure, is what matters.

### Worked example 2: molar solubility from \(K_{sp}\) — \(\ce{AgCl}\)

**Problem.** \(K_{sp}(\ce{AgCl}) = 1.8 \times 10^{-10}\). Find the molar solubility of \(\ce{AgCl}\) in water.

**Solution.**

1. Write the dissolution equilibrium:
   \[
   \ce{AgCl(s) <=> Ag+(aq) + Cl-(aq)}
   \]
2. Define \(s\) = molar solubility; then \([\ce{Ag+}] = s\) and \([\ce{Cl-}] = s\).
3. Write the \(K_{sp}\) expression and substitute:
   \[
   K_{sp} = [\ce{Ag+}][\ce{Cl-}] = s \cdot s = s^2
   \]
4. Solve:
   \[
   s = \sqrt{K_{sp}} = \sqrt{1.8 \times 10^{-10}} = 1.3 \times 10^{-5}\ \text{mol/L}
   \]
5. Check the scale: ~\(1.3 \times 10^{-5}\) M ≈ 0.002 g/L — genuinely "sparingly soluble."

### Worked example 3: molar solubility from \(K_{sp}\) — \(\ce{PbCl2}\)

**Problem.** \(K_{sp}(\ce{PbCl2}) = 1.7 \times 10^{-5}\). Find the molar solubility of \(\ce{PbCl2}\).

**Solution.**

1. Dissolution: \(\ce{PbCl2(s) <=> Pb^{2+}(aq) + 2Cl-(aq)}\).
2. With \(s\) = molar solubility: \([\ce{Pb^{2+}}] = s\), \([\ce{Cl-}] = 2s\) — the stoichiometry matters (two chlorides per formula unit).
3. Substitute into the \(K_{sp}\) expression:
   \[
   K_{sp} = [\ce{Pb^{2+}}][\ce{Cl-}]^2 = (s)(2s)^2 = 4s^3
   \]
4. Solve:
   \[
   s^3 = \frac{K_{sp}}{4} = \frac{1.7 \times 10^{-5}}{4} = 4.3 \times 10^{-6} \quad \Rightarrow \quad s = (4.3 \times 10^{-6})^{1/3} = 1.6 \times 10^{-2}\ \text{mol/L}
   \]
5. Note: \(\ce{PbCl2}\) is far more soluble than \(\ce{AgCl}\) — but you can only compare \(K_{sp}\) values directly between salts with the *same* ion stoichiometry; \(\ce{AgCl}\) (\(s^2\)) and \(\ce{PbCl2}\) (\(4s^3\)) need the full conversion.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Solubility ↑ with temperature | Always true | True for most solids but ALL gases become *less* soluble when heated |
| Pressure effect on solids/liquids | Pressure effect on gases | Henry's law applies to gases; pressure barely changes solid/liquid solubility |
| \(K_{sp}\) magnitude | Molar solubility, directly | Only comparable for identical stoichiometries: \(\ce{AgCl}\) vs \(\ce{PbCl2}\) need conversion through \(s\) |
| \([\ce{Cl-}]\) | \(s\) | For \(\ce{PbCl2}\), \([\ce{Cl-}] = 2s\), not \(s\) — forgetting the factor of 2 gives wrong answers |
| "Insoluble" | "Does not dissolve at all" | "Insoluble" salts still have tiny, measurable solubility (their \(K_{sp}\) is just small) |
| Solubility rules | Absolute laws | Rules are empirical summaries with genuine exceptions (e.g., some sulfates, \(\ce{Ag2SO4}\)) — use them as guidelines |

## Quick Review

1. Define saturated solution in equilibrium terms.
2. How does temperature affect gas solubility, and what law quantifies the pressure effect?
3. Write Henry's law and state what each symbol means.
4. \(K_{sp}(\ce{CaF2}) = 3.9 \times 10^{-11}\). Write the relationship between \(K_{sp}\) and molar solubility \(s\) for this salt.
5. Give two real-world phenomena explained by Henry's law.
6. Which is more soluble: a salt with \(K_{sp} = 10^{-5}\) or one with \(K_{sp} = 10^{-12}\) (same stoichiometry)?

<details>
<summary>Show answers</summary>

1. A saturated solution holds the maximum solute at that temperature, with dissolved and undissolved solute in dynamic equilibrium (dissolving rate = precipitating rate).
2. Gas solubility decreases as temperature rises; pressure effects follow Henry's law, \(C = kP\).
3. \(C = kP\): \(C\) = gas concentration in solution (mol/L), \(P\) = partial pressure of the gas above the solution (atm), \(k\) = Henry's law constant for that gas–solvent pair at that temperature.
4. \(\ce{CaF2(s) <=> Ca^{2+} + 2F-}\), so \([\ce{Ca^{2+}}] = s\), \([\ce{F-}] = 2s\), and \(K_{sp} = (s)(2s)^2 = 4s^3\).
5. Fizzing of carbonated drinks when opened (pressure drop) and reduced dissolved oxygen in warm water (thermal pollution); also decompression sickness in diving.
6. The \(10^{-5}\) salt — larger \(K_{sp}\) (same stoichiometry) means larger molar solubility.

</details>

## Related Topics

- Previous: [Electrolytes](02-electrolytes.md)
- Next: [Colligative Properties](04-colligative-properties.md)
- Related: [Solutions and Colloids chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
