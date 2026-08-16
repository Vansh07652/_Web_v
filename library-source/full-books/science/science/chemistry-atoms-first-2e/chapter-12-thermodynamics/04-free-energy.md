---
title: "Free Energy"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "12: Thermodynamics"
topic_number: "4"
source: "chemistry-atoms-first-2e.md"
tags:
  - "free-energy"
  - "science"
status: "complete"
---

# Free Energy

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 12: Thermodynamics](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

Free energy is the thermodynamic quantity that decides the direction of change at constant temperature and pressure — the conditions of most laboratory, industrial, and biological chemistry. For any process, the **Gibbs free energy change** is

\[
\Delta G = \Delta H - T\Delta S
\]

where \(\Delta H\) is the enthalpy change, \(T\) is the absolute temperature in kelvin, and \(\Delta S\) is the entropy change. The verdict is simple: \(\Delta G < 0\) means the process is spontaneous (product-favored) as written, \(\Delta G > 0\) means it is not, and \(\Delta G = 0\) marks equilibrium. Free energy also links thermodynamics to equilibrium chemistry: \(\Delta G^\circ = -RT\ln K\) connects the standard free-energy change to the equilibrium constant of Chapter 13.

## Why This Matters

Before an engineer builds a plant or a chemist designs a synthesis, the first question is thermodynamic: can this reaction ever go? A negative \(\Delta G\) answers yes. Batteries and fuel cells convert a spontaneous reaction's free energy into electrical work — the maximum useful work equals \(-\Delta G\). In biochemistry, thermodynamically uphill reactions such as protein synthesis are driven by **coupling** to ATP hydrolysis, whose \(\Delta G\) is large and negative. On exams, free energy unifies entropy, enthalpy, and equilibrium constants: compute \(\Delta G\) and you can predict reaction direction at any temperature.

## Core Concepts

### The Gibbs free energy as a direction meter

At constant \(T, P\), a process is spontaneous only if the total entropy of the universe increases (second law). \(\Delta G\) is the bookkeeping that applies that law to the system alone: a negative \(\Delta G\) means the universe's entropy increases if the process runs. It packages enthalpy and entropy effects into one number, with temperature weighting the entropy term.

### The four sign combinations of \(\Delta H\) and \(\Delta S\)

Because \(\Delta G = \Delta H - T\Delta S\), the signs of \(\Delta H\) and \(\Delta S\) control how temperature changes the verdict:

| \(\Delta H\) | \(\Delta S\) | Behavior of \(\Delta G\) |
|---|---|---|
| negative | positive | negative at every \(T\) — spontaneous at all temperatures |
| positive | negative | positive at every \(T\) — never spontaneous |
| negative | negative | spontaneous only below \(T = \Delta H/\Delta S\) |
| positive | positive | spontaneous only above \(T = \Delta H/\Delta S\) |

The two "mixed" rows give a crossover temperature \(T = \Delta H/\Delta S\) where \(\Delta G = 0\) — for a phase change, that is the melting or boiling point.

### Standard free energies of formation

Tabulated \(\Delta G^\circ_\text{f}\) values — the free energy of forming a compound from its elements in standard states, with \(\Delta G^\circ_\text{f} = 0\) for elements — give standard reaction free energies without experiments:

\[
\Delta G^\circ_\text{rxn} = \sum n\,\Delta G^\circ_\text{f}(\text{products}) - \sum n\,\Delta G^\circ_\text{f}(\text{reactants})
\]

Equivalently, \(\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ\) uses enthalpy and entropy tables. Standard state: 1 bar pressure (often approximated as 1 atm), 1 M solutes, pure phases, usually 298.15 K.

### Free energy, equilibrium, and coupling

\(\Delta G^\circ = -RT\ln K\) means a strongly negative \(\Delta G^\circ\) corresponds to a large equilibrium constant, and \(\Delta G^\circ = 0\) corresponds to \(K = 1\). Under non-standard conditions,

\[
\Delta G = \Delta G^\circ + RT\ln Q
\]

where \(Q\) is the reaction quotient. Cells exploit \(Q\) by keeping concentrations far from equilibrium values. Coupling an unfavorable reaction (positive \(\Delta G\)) to a strongly favorable one (negative \(\Delta G\)) makes the pair net-spontaneous — how ATP hydrolysis drives biosynthesis.

## ELI-10: Explain Like I'm 10

A ball rolls downhill by itself and uphill only with a push. Gibbs free energy is the reaction's "hill height": if the bottom is lower than the top (\(\Delta G < 0\)), the reaction rolls forward by itself. Temperature changes the hill's height — why water freezes when cold and melts when warm.

## High-Yield Points

- \(\Delta G = \Delta H - T\Delta S\); \(\Delta G < 0\) spontaneous, \(\Delta G > 0\) non-spontaneous, \(\Delta G = 0\) equilibrium (constant \(T, P\)).
- Spontaneous ≠ fast. Activation energy controls speed; \(\Delta G\) controls direction.
- Memorize the four sign cases and the crossover temperature \(T = \Delta H/\Delta S\).
- \(\Delta G^\circ_\text{rxn} = \sum n\Delta G^\circ_\text{f}(\text{products}) - \sum n\Delta G^\circ_\text{f}(\text{reactants})\); elements have \(\Delta G^\circ_\text{f} = 0\).
- \(\Delta G^\circ = -RT\ln K\): negative \(\Delta G^\circ\) → \(K > 1\); \(\Delta G^\circ = 0\) → \(K = 1\).

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Gibbs free energy (\(G\)) | Energy available to do useful work at constant \(T, P\) | Its change, \(\Delta G\), is the spontaneity verdict |
| spontaneous process | A process that proceeds without outside intervention once started | Sets the direction nature favors; not a speed claim |
| \(\Delta G^\circ_\text{f}\) | Free energy of forming a compound from its elements in standard states | The tabulated building block for \(\Delta G^\circ_\text{rxn}\) |
| coupling | Running an unfavorable reaction alongside a favorable one | How cells drive biosynthesis using ATP |

## How It Works / Step-by-Step Process

1. Write the balanced reaction with physical states.
2. Look up \(\Delta H^\circ_\text{f}\) and \(S^\circ\) (or \(\Delta G^\circ_\text{f}\)) for every species; elements are 0.
3. Compute \(\Delta H^\circ = \sum n\Delta H^\circ_\text{f}(\text{products}) - \sum n\Delta H^\circ_\text{f}(\text{reactants})\), and \(\Delta S^\circ\) the same way.
4. Convert \(\Delta S^\circ\) from J to kJ, evaluate \(\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ\), and apply the verdict; for mixed signs, solve \(T = \Delta H/\Delta S\).

## Example 1: Water Formation from Its Elements

Consider \(\text{H}_2(g) + \frac{1}{2}\text{O}_2(g) \rightarrow \text{H}_2\text{O}(l)\) at 298.15 K.

**Step 1 — entropy change.** With \(S^\circ(\text{H}_2) = 130.7\), \(S^\circ(\text{O}_2) = 205.2\), \(S^\circ(\text{H}_2\text{O}, l) = 69.9\) J mol⁻¹ K⁻¹:

\[
\Delta S^\circ = 69.9 - \left(130.7 + \frac{1}{2}(205.2)\right)\ \text{J mol}^{-1}\text{K}^{-1} = 69.9 - 233.3 = -163.4\ \text{J mol}^{-1}\text{K}^{-1}
\]

**Step 2 — combine with enthalpy.** \(\Delta H^\circ_\text{f}(\text{H}_2\text{O}, l) = -285.8\) kJ mol⁻¹. Convert the entropy term to kJ: \(-163.4\ \text{J mol}^{-1}\text{K}^{-1} = -0.1634\ \text{kJ mol}^{-1}\text{K}^{-1}\), then substitute:

\[
\Delta G^\circ = -285.8\ \text{kJ mol}^{-1} - (298.15\ \text{K})(-0.1634\ \text{kJ mol}^{-1}\text{K}^{-1}) = -285.8 + 48.7 = -237.1\ \text{kJ mol}^{-1}
\]

Dimensional analysis: K × kJ mol⁻¹ K⁻¹ = kJ mol⁻¹, so the subtraction is valid, and the result matches the tabulated \(\Delta G^\circ_\text{f}(\text{H}_2\text{O}, l) = -237.1\) kJ mol⁻¹ — a built-in self-check. Water formation is strongly spontaneous, though H₂–O₂ mixtures wait for a spark (activation energy).

## Example 2: Why Freezing Depends on Temperature

Freezing, \(\text{H}_2\text{O}(l) \rightarrow \text{H}_2\text{O}(s)\), has \(\Delta H = -6.01\) kJ mol⁻¹ and \(\Delta S = -22.0\) J mol⁻¹ K⁻¹ — both signs negative, so spontaneous only below \(T = \Delta H/\Delta S\).

At 263 K (below the freezing point):

\[
\Delta G = -6.01\ \text{kJ mol}^{-1} - (263\ \text{K})(-0.0220\ \text{kJ mol}^{-1}\text{K}^{-1}) = -6.01 + 5.79 = -0.22\ \text{kJ mol}^{-1}
\]

At 263 K freezing is spontaneous. At 298 K:

\[
\Delta G = -6.01\ \text{kJ mol}^{-1} - (298\ \text{K})(-0.0220\ \text{kJ mol}^{-1}\text{K}^{-1}) = -6.01 + 6.56 = +0.55\ \text{kJ mol}^{-1}
\]

Now melting is spontaneous — the same substances flip direction purely because \(T\) changed, exactly as the sign table predicts for \(\Delta H < 0\), \(\Delta S < 0\).

## Example 3: Methane Combustion from Formation Values

For \(\text{CH}_4(g) + 2\text{O}_2(g) \rightarrow \text{CO}_2(g) + 2\text{H}_2\text{O}(g)\), with \(\Delta G^\circ_\text{f}\) = −50.8 (CH₄), −394.4 (CO₂), −228.6 (H₂O, g) kJ mol⁻¹:

\[
\Delta G^\circ_\text{rxn} = [(-394.4) + 2(-228.6)] - [(-50.8) + 2(0)] = -851.6 + 50.8 = -800.8\ \text{kJ mol}^{-1}
\]

One mole of methane releases about 801 kJ of free energy.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| "Spontaneous means fast." | It means self-driven once started; diamond → graphite is spontaneous yet glacially slow. |
| "A reaction needs \(\Delta H < 0\) to be spontaneous." | Endothermic processes (melting, dissolving cold packs) are spontaneous when \(T\Delta S\) dominates. |
| "\(\Delta H\) and \(\Delta S\) can just be added directly." | Units must match: convert J to kJ (or vice versa) before computing \(\Delta H - T\Delta S\). |
| "\(\Delta G^\circ < 0\) guarantees the reaction runs as written." | \(\Delta G^\circ\) is standard-state only; real concentrations require \(\Delta G = \Delta G^\circ + RT\ln Q\). |
| "\(\Delta G = 0\) means nothing happens." | It means equilibrium: forward and reverse rates are equal and concentrations hold steady. |

## Quick Review

1. State the spontaneity criterion in terms of \(\Delta G\), and name the conditions under which it applies.
2. A reaction has \(\Delta H^\circ = +40.0\) kJ and \(\Delta S^\circ = +0.200\) kJ K⁻¹. Above what temperature does it become spontaneous?
3. Why must you convert \(\Delta S\) from J/K to kJ/K before using \(\Delta G = \Delta H - T\Delta S\)?
4. Ice melts spontaneously at 10 °C but not at −10 °C. Which quantity in \(\Delta G = \Delta H - T\Delta S\) changes with temperature, and how does it flip the sign?

<details>
<summary>Show answers</summary>

1. \(\Delta G < 0\): spontaneous; \(\Delta G > 0\): non-spontaneous; \(\Delta G = 0\): equilibrium — all at constant temperature and pressure.
2. \(T > \Delta H/\Delta S = 40.0\ \text{kJ} / 0.200\ \text{kJ K}^{-1} = 200\ \text{K}\).
3. Because \(\Delta H\) is in kJ while \(T\Delta S\) would otherwise be in J; both terms must share units before subtracting (163.4 J = 0.1634 kJ).
4. The temperature in the \(-T\Delta S\) term changes. With \(\Delta H < 0\) and \(\Delta S < 0\), raising \(T\) makes \(-T\Delta S\) more positive until \(\Delta G\) flips from negative (spontaneous freezing) to positive (spontaneous melting).

</details>

## Related Topics

- Previous: [The Second and Third Laws of Thermodynamics](03-the-second-and-third-laws-of-thermodynamics.md)
- Next: End of chapter
- Related: [Spontaneity](01-spontaneity.md)
- Related: [Entropy](02-entropy.md)
- Related: [Thermodynamics chapter overview](../README.md)
- Related: [Chemical Equilibria in Chapter 13](../../chapter-13-fundamental-equilibrium-concepts/01-chemical-equilibria.md)
- Related: [Equilibrium Constants in Chapter 13](../../chapter-13-fundamental-equilibrium-concepts/02-equilibrium-constants.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Thermodynamic data are standard reference values at 25 °C: H₂O(l) \(\Delta H^\circ_\text{f} = -285.8\), \(\Delta G^\circ_\text{f} = -237.1\) kJ mol⁻¹, \(S^\circ = 69.9\) J mol⁻¹ K⁻¹; \(S^\circ(\text{H}_2) = 130.7\), \(S^\circ(\text{O}_2) = 205.2\) J mol⁻¹ K⁻¹; water fusion \(\Delta H = 6.01\) kJ mol⁻¹, \(\Delta S = 22.0\) J mol⁻¹ K⁻¹; \(\Delta G^\circ_\text{f}\): CH₄ = −50.8, CO₂(g) = −394.4, H₂O(g) = −228.6 kJ mol⁻¹. Small variations exist among reference tables.
- Last updated: 2026-08-16
