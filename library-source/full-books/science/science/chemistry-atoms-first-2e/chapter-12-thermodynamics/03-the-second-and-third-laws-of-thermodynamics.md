---
title: "The Second and Third Laws of Thermodynamics"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "12: Thermodynamics"
topic_number: "3"
source: "chemistry-atoms-first-2e.md"
tags:
  - "the-second-and-third-laws-of-thermodynamics"
  - "science"
status: "complete"
---

# The Second and Third Laws of Thermodynamics

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 12: Thermodynamics](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

The first law of thermodynamics conserves energy, and the previous topics added entropy as the measure of dispersal. But a complete theory of *direction* needs two more laws. The **second law of thermodynamics** states the master criterion for spontaneity: the entropy of the universe increases in every spontaneous process:

\[
\Delta S_{\text{univ}} = \Delta S_{\text{sys}} + \Delta S_{\text{surr}} \ge 0
\]

A process is spontaneous only if the total entropy change of the universe is positive; at equilibrium the total is zero; a negative total means the reverse direction is spontaneous.

The **third law of thermodynamics** completes the picture by giving entropy an absolute zero: the entropy of a perfect crystal at absolute zero is zero. This makes absolute (standard) molar entropies possible — the tabulated \(S^\circ\) values used to calculate reaction entropies. This topic shows how to combine system and surroundings entropy changes to decide spontaneity quantitatively, and how the third law grounds entropy in a real zero point.

## Why This Matters

- **The universal spontaneity test:** \(\Delta S_{\text{univ}} > 0\) is the criterion that works for every process — no exceptions, no special cases. Free energy (Topic 4) is just this test repackaged for constant T and P.
- **Understanding "the arrow of time":** The second law explains why heat flows hot → cold, why gases mix, and why time has a direction — the universe's entropy is always increasing.
- **Predicting reactions without experiments:** Combining \(\Delta S^\circ_{\text{rxn}}\) with \(\Delta H^\circ_{\text{rxn}}\) lets chemists predict whether a reaction can run at a given temperature.
- **Energy limits:** The second law sets the maximum efficiency of heat engines and why perpetual motion machines are impossible.
- **Absolute entropies:** The third law's zero point is why \(S^\circ\) values are real, measurable quantities used in every \(\Delta S^\circ_{\text{rxn}}\) calculation.
- **Exam value:** Computing \(\Delta S_{\text{univ}}\) to judge spontaneity and applying the third law's trends are classic assessment items.

## Core Concepts

### The second law: entropy of the universe never decreases

The second law is usually stated as: *the entropy of the universe increases in a spontaneous process and remains constant for a reversible (equilibrium) process.* Equivalently:

\[
\Delta S_{\text{univ}} = \Delta S_{\text{sys}} + \Delta S_{\text{surr}} \ge 0
\]

The sign of \(\Delta S_{\text{univ}}\) decides everything:

- \(\Delta S_{\text{univ}} > 0\): process is **spontaneous** in the forward direction.
- \(\Delta S_{\text{univ}} = 0\): process is at **equilibrium** (reversible; no net direction favored).
- \(\Delta S_{\text{univ}} < 0\): process is **nonspontaneous** forward; the *reverse* is spontaneous.

Notice what the second law does *not* say: a system's entropy can decrease (water freezes, gas compresses) — the law only demands that the *surroundings* gain at least as much entropy as the system loses. Local order is always paid for by greater disorder elsewhere.

### The surroundings' entropy change

At constant temperature and pressure, when the system exchanges heat with its surroundings, the surroundings' entropy changes by:

\[
\Delta S_{\text{surr}} = -\frac{\Delta H_{\text{sys}}}{T}
\]

- **Exothermic** reaction (\(\Delta H_{\text{sys}} < 0\)): surroundings gain heat → \(\Delta S_{\text{surr}} > 0\).
- **Endothermic** reaction (\(\Delta H_{\text{sys}} > 0\)): surroundings lose heat → \(\Delta S_{\text{surr}} < 0\).

The minus sign is the crux: heat leaving the system *is* heat entering the surroundings, so the two entropy changes always oppose each other. Spontaneity is decided by which tendency wins, with temperature weighting the surroundings' term (dividing by \(T\) makes the surroundings' entropy gain smaller at high temperature).

### The combined calculation

Putting the pieces together, the spontaneity test for a process at constant T and P becomes:

\[
\Delta S_{\text{univ}} = \Delta S_{\text{sys}} - \frac{\Delta H_{\text{sys}}}{T}
\]

where \(\Delta S_{\text{sys}}\) comes from standard molar entropies (\(\Delta S^\circ_{\text{rxn}} = \sum n S^\circ(\text{products}) - \sum m S^\circ(\text{reactants})\)) and \(\Delta H_{\text{sys}}\) from heats of formation or calorimetry. Multiplying through by \(T\) gives \(T\Delta S_{\text{univ}} = T\Delta S_{\text{sys}} - \Delta H_{\text{sys}}\), which is exactly the negative of the Gibbs free energy change (\(\Delta G = \Delta H - T\Delta S\)) that Topic 4 develops — the same criterion in a more convenient form.

### The third law: absolute zero of entropy

The **third law of thermodynamics** states that the entropy of a *perfect crystal* at absolute zero (0 K) is zero. At 0 K a perfect crystal has exactly one arrangement — every particle locked in its lattice site, all energy in its lowest state — so \(S = k_B \ln 1 = 0\).

Two consequences matter for calculations:

1. **Absolute entropies exist.** Because entropy has a real zero, the entropy of any substance at any temperature can be measured (by heating it stepwise and integrating \(q_{\text{rev}}/T\)). These are the **standard molar entropies** \(S^\circ\) in tables — real absolute values, unlike enthalpies which are relative to an arbitrary zero.
2. **Entropy trends.** \(S^\circ\) increases with temperature, with molecular size and complexity, and with freedom of motion: \(S^\circ(\text{solid}) < S^\circ(\text{liquid}) \ll S^\circ(\text{gas})\); larger molecules have more internal motions (vibrations, rotations) and higher entropy; allotropes differ (diamond vs. graphite).

### Why entropy is "absolute" but enthalpy is not

Enthalpy is measured relative to a chosen reference (elements in their standard states = 0). Entropy is not: the third law provides a genuine zero at 0 K for perfect crystals. This is why \(S^\circ\) values are all positive and why they can be tabulated for individual substances and combined by stoichiometry — no formation-reference bookkeeping needed.

## ELI-10: Explain Like I'm 10

> If you drop a whole box of puzzle pieces, the pieces scatter across the floor — that's the universe getting more "spread out" (higher entropy), and it happens all by itself. But if you build the puzzle, you're making things more ordered in one spot — that's fine, as long as you (or something else) use up even more energy and create even more mess somewhere else. The second law says the total mess in the universe can never get smaller; the third law says if you cooled a perfect crystal to absolute zero, it would have exactly zero mess — the cleanest thing possible.

## High-Yield Points

- **Second law:** \(\Delta S_{\text{univ}} = \Delta S_{\text{sys}} + \Delta S_{\text{surr}} \ge 0\). Spontaneous: \(> 0\); equilibrium: \(= 0\); nonspontaneous forward: \(< 0\).
- **Surroundings term:** \(\Delta S_{\text{surr}} = -\Delta H_{\text{sys}}/T\) — exothermic reactions boost surroundings entropy; endothermic ones lower it.
- The system's entropy *may* decrease; only the **universe's total** must not.
- Combined test at constant T, P: \(\Delta S_{\text{univ}} = \Delta S_{\text{sys}} - \Delta H_{\text{sys}}/T\) — the seed of the free-energy equation.
- **Third law:** entropy of a perfect crystal at 0 K is zero (\(S = k_B \ln 1 = 0\)).
- \(S^\circ\) values are **absolute** (real zero), all positive, and increase with T, molecular size/complexity, and phase freedom.
- Entropy trends: solid < liquid ≪ gas; larger/complex molecules > small ones; diamond vs. graphite differ.
- A process that is endothermic *and* entropy-decreasing (like ammonia synthesis) is nonspontaneous at low T — pressure and catalysts can't change thermodynamics, only kinetics and equilibrium position.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Second law of thermodynamics | The entropy of the universe increases in every spontaneous process. | The universal criterion for which direction a process takes. |
| \(\Delta S_{\text{univ}}\) | Total entropy change of system plus surroundings. | Sign decides spontaneity: + spontaneous, 0 equilibrium, − nonspontaneous. |
| \(\Delta S_{\text{surr}}\) | Entropy change of everything outside the system. | Equals \(-\Delta H_{\text{sys}}/T\); links enthalpy to the entropy budget. |
| Third law of thermodynamics | Entropy of a perfect crystal at 0 K is zero. | Provides the absolute zero that makes standard molar entropies possible. |
| Perfect crystal | A crystal with every particle in its ideal lattice position, no defects. | The idealized state with exactly one microstate (\(S = 0\)) at 0 K. |
| Absolute entropy | Entropy measured from the true zero at 0 K. | Why \(S^\circ\) values are positive and directly usable in calculations. |
| Standard molar entropy (\(S^\circ\)) | Entropy of one mole in standard state at 298 K (J/(mol·K)). | Tabulated input for \(\Delta S^\circ_{\text{rxn}}\). |
| Equilibrium (thermodynamic) | State where \(\Delta S_{\text{univ}} = 0\); forward and reverse balance. | The boundary condition separating spontaneous directions. |

## Example: Applying the second law quantitatively

**Worked example 1 — is ammonia synthesis spontaneous at 298 K?** For \(\text{N}_2(g) + 3\text{H}_2(g) \rightarrow 2\text{NH}_3(g)\):

- \(\Delta S^\circ_{\text{rxn}} = -197.7\ \text{J/K}\) (from Topic 2, using \(S^\circ\) values).
- \(\Delta H^\circ_{\text{rxn}} = -92.2\ \text{kJ/mol}\) (standard heat of formation of NH₃ is \(-45.9\ \text{kJ/mol}\), doubled for 2 mol).

**Step 1 — surroundings entropy at 298 K:**

\[
\Delta S_{\text{surr}} = -\frac{\Delta H_{\text{sys}}}{T}
\]

\[
\Delta S_{\text{surr}} = -\frac{(-92.2 \times 10^3\ \text{J/mol})}{298\ \text{K}} = +309\ \text{J/(mol·K)}
\]

(Convert kJ → J with \(\times 10^3\), a dimensional-analysis step students often skip.)

**Step 2 — total entropy change:**

\[
\Delta S_{\text{univ}} = \Delta S_{\text{sys}} + \Delta S_{\text{surr}}
\]

\[
\Delta S_{\text{univ}} = (-197.7) + (+309) = +111\ \text{J/(mol·K)}
\]

**Step 3 — verdict:** \(\Delta S_{\text{univ}} > 0\), so the reaction is **spontaneous at 298 K** despite the system's entropy drop: the exothermic release of heat spreads enough energy into the surroundings to pay for the loss of gas-phase disorder. This is why the "system entropy decreased" fact alone never settles a question — the surroundings always get a vote.

**Worked example 2 — same reaction at very high temperature.** Suppose the reaction ran at 1500 K (ignoring that \(\Delta H\) and \(\Delta S\) change somewhat with T — a stated assumption). Recompute the surroundings term:

\[
\Delta S_{\text{surr}} = -\frac{(-92.2 \times 10^3\ \text{J/mol})}{1500\ \text{K}} = +61.5\ \text{J/(mol·K)}
\]

\[
\Delta S_{\text{univ}} = (-197.7) + (61.5) = -136\ \text{J/(mol·K)}
\]

Now \(\Delta S_{\text{univ}} < 0\): the reaction is **nonspontaneous** at high temperature. The exothermic advantage shrinks (dividing by larger \(T\)), while the system's entropy deficit stays roughly constant — so high temperature flips the direction. This is the general rule: exothermic reactions become *less* favored at high T, and endothermic ones become *more* favored — the temperature dependence previewed in Topic 1, now computed exactly.

**Worked example 3 — third law reasoning.** Two solids at 298 K: ice (crystalline H₂O) and a 1.0 g sample of glassy (amorphous) silica. Which has higher entropy, and why?

- Crystalline ice has regular, ordered packing — fewer microstates, lower entropy per gram.
- Amorphous (glassy) silica has no long-range order — many more arrangements of the same atoms — so higher entropy.

The third law sharpens the contrast: cool a *perfect* crystal to 0 K and \(S \to 0\), but a glass frozen at 0 K would retain residual disorder (a "frozen-in" entropy) because it never reaches the perfect-crystal limit. Real materials always have some defects, which is why measured entropies approach but never quite hit zero — the law describes the ideal limit, and deviations are informative.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| System entropy decrease | Violation of the second law | The second law constrains the *universe* (\(\Delta S_{\text{univ}} \ge 0\)); the system can lose entropy if the surroundings gain more. |
| \(\Delta S_{\text{surr}}\) sign | \(\Delta H_{\text{sys}}\) sign | They are opposite: \(\Delta S_{\text{surr}} = -\Delta H_{\text{sys}}/T\). Exothermic (negative \(\Delta H\)) gives positive surroundings entropy. |
| Spontaneous at one T | Spontaneous at all T | Spontaneity is temperature-dependent; exothermic reactions can become nonspontaneous at high T (NH₃ example). |
| \(\Delta S_{\text{univ}} = 0\) | "No process occurs" | Equilibrium is dynamic — forward and reverse proceed at equal rates; the *net* change is zero. |
| Absolute entropy | Enthalpy of formation | \(S^\circ\) has a real zero (third law); \(\Delta H^\circ_f\) is relative to elements = 0. Both are tabulated, but only entropies are absolute. |
| Third law (0 K, perfect crystal) | "Entropy is zero at absolute zero" in general | Only for a *perfect crystal*; glasses, solutions, and defective crystals retain residual entropy even at 0 K. |
| Perfect crystal | Any solid | Real solids have defects; the perfect crystal is the idealization that makes \(S(0\ \text{K}) = 0\) exact. |

## Quick Review

1. State the second law in terms of \(\Delta S_{\text{univ}}\), and give the three possible outcomes and their meanings.
2. A reaction has \(\Delta H^\circ = -57.2\ \text{kJ/mol}\) at 298 K. Calculate \(\Delta S_{\text{surr}}\).
3. For \(\text{N}_2(g) + 3\text{H}_2(g) \rightarrow 2\text{NH}_3(g)\), \(\Delta S^\circ_{\text{rxn}} = -197.7\ \text{J/K}\) and \(\Delta H^\circ_{\text{rxn}} = -92.2\ \text{kJ/mol}\). Is it spontaneous at 298 K? Show the calculation.
4. Why does an exothermic reaction become *less* favorable as temperature increases?
5. State the third law and explain why it makes standard molar entropies "absolute" while enthalpies of formation are relative.
6. True or false: "The second law forbids any local decrease in entropy." Explain.

<details>
<summary>Show answers</summary>

1. \(\Delta S_{\text{univ}} = \Delta S_{\text{sys}} + \Delta S_{\text{surr}} \ge 0\). Positive → spontaneous forward; zero → equilibrium (reversible); negative → nonspontaneous forward (reverse is spontaneous).
2. \(\Delta S_{\text{surr}} = -\Delta H/T = -(-57.2 \times 10^3\ \text{J/mol})/298\ \text{K} = +192\ \text{J/(mol·K)}\).
3. \(\Delta S_{\text{surr}} = +309\ \text{J/(mol·K)}\); \(\Delta S_{\text{univ}} = -197.7 + 309 = +111\ \text{J/(mol·K)} > 0\) → spontaneous at 298 K.
4. The surroundings' entropy gain is \(-\Delta H/T\); as \(T\) rises, the same heat release buys less surroundings entropy, so an exothermic reaction's advantage shrinks and it can flip to nonspontaneous.
5. The third law sets \(S = 0\) for a perfect crystal at 0 K — a genuine zero — so entropies are measured from absolute zero. Enthalpies have no such natural zero; they are referenced to elements in standard states.
6. False. The second law constrains the universe's total entropy; a system can decrease its entropy (freezing, compressing) as long as the surroundings' entropy increases by at least as much.

</details>

## Related Topics

- Previous: [Entropy](02-entropy.md)
- Next: [Free Energy](04-free-energy.md)
- Related: [Thermodynamics chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure. Thermodynamic values cited (\(\Delta H^\circ_f\) NH₃ = −45.9 kJ/mol; \(\Delta S^\circ_{\text{rxn}}\) = −197.7 J/K; standard molar entropies) are standard reference values; calculations and reasoning are original worked examples.
- Last updated: 2026-08-16
