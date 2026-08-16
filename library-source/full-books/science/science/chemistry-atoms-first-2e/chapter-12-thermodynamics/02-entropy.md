---
title: "Entropy"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "12: Thermodynamics"
topic_number: "2"
source: "chemistry-atoms-first-2e.md"
tags:
  - "entropy"
  - "science"
status: "complete"
---

# Entropy

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 12: Thermodynamics](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

The previous topic established that spontaneity cannot be explained by energy alone — a second tendency, the dispersal of energy and matter, also drives change. **Entropy** (\(S\)) is the thermodynamic quantity that measures this dispersal: the number of ways the energy and particles of a system can be arranged while keeping the same macroscopic state. The more microstates available, the higher the entropy.

Entropy is a **state function**: its change depends only on the initial and final states, not the path between them. For a reversible process at constant temperature, the entropy change is

\[
\Delta S = \frac{q_{\text{rev}}}{T}
\]

where \(q_{\text{rev}}\) is the heat absorbed reversibly and \(T\) is the absolute temperature in kelvins. This topic covers what entropy means at the molecular level, how to predict whether a process increases or decreases entropy, and how to calculate entropy changes for phase changes and chemical reactions using standard molar entropies.

## Why This Matters

- **The arrow of time:** Entropy is the only thermodynamic quantity that has a built-in direction — it is why time seems to flow one way and why broken cups never reassemble.
- **Predicting spontaneity:** The total entropy change of the universe (system + surroundings) decides whether any process can occur; the second law (Topic 3) makes this the master criterion.
- **Calculating reaction feasibility:** Standard molar entropy values let chemists compute \(\Delta S^\circ_{\text{rxn}}\) for any balanced reaction and combine it with enthalpy to judge feasibility.
- **Energy technology:** Heat engines, refrigerators, and power plants are limited by entropy; "efficiency" is really an entropy argument.
- **Exam value:** Predicting entropy sign and calculating \(\Delta S^\circ_{\text{rxn}}\) are guaranteed exam skills.

## Core Concepts

### Entropy as the number of arrangements

Imagine distributing a fixed amount of energy among a set of particles. Each distinct way of doing so is a **microstate**; entropy is proportional to the logarithm of the number of microstates \(W\):

\[
S = k_B \ln W
\]

where \(k_B = 1.38 \times 10^{-23}\ \text{J/K}\) is Boltzmann's constant. More microstates → higher entropy. A gas in one corner of a room has few microstates (low entropy); the same gas spread evenly has vastly more (high entropy). Systems naturally drift toward the most probable arrangement — the one with the most microstates — which is why gases expand and heat flows from hot to cold. This statistical view makes entropy concrete: it is not "disorder" as a vague idea but a countable multiplicity of arrangements.

### Entropy is a state function

Entropy depends only on the current state of the system — its temperature, pressure, phase, and composition — not on how it got there. This is what allows the definition \(\Delta S = q_{\text{rev}}/T\): we compute the heat that *would* be exchanged along a reversible path, even if the real process is irreversible. A cup of hot water cooling to room temperature has the same \(\Delta S\) whether it cools in 5 minutes or 5 hours.

### Predicting the sign of \(\Delta S\)

Without calculating, you can usually predict whether entropy increases (\(+\)) or decreases (\(-\)) from the change in dispersal:

- **Phase changes:** gas > liquid > solid. Melting and vaporizing increase entropy; freezing and condensing decrease it.
- **Gas moles in reactions:** reactions that produce more gas molecules than they consume increase entropy (more particles, more arrangements). Watch *moles of gas*, not total moles: \(\text{N}_2(g) + 3\text{H}_2(g) \rightarrow 2\text{NH}_3(g)\) decreases entropy (4 mol gas → 2 mol gas).
- **Dissolving:** solids dissolving in liquids usually increase entropy (ions/molecules spread through the solvent), though some hydration effects can make it a small net change.
- **Temperature:** heating a substance increases entropy (more energy to distribute); cooling decreases it.
- **Volume:** allowing a gas to expand into a larger volume increases entropy.

### Entropy change for phase changes

At a phase-change temperature, the process is reversible and isothermal, so the entropy change is simply the heat of transition divided by the transition temperature (in kelvins):

\[
\Delta S_{\text{transition}} = \frac{\Delta H_{\text{transition}}}{T_{\text{transition}}}
\]

For example, water vaporizes at its normal boiling point:

\[
\Delta S_{\text{vap}} = \frac{\Delta H_{\text{vap}}}{T_b}
\]

Melting, vaporizing, and sublimation all give positive \(\Delta S\); the reverse processes give the negative of the same value.

### Standard molar entropies and \(\Delta S^\circ_{\text{rxn}}\)

The **standard molar entropy** \(S^\circ\) is the entropy of one mole of a substance in its standard state at 298 K (and 1 bar), typically in J/(mol·K). Unlike standard enthalpies of formation, standard molar entropies are **absolute** — they are not referenced to an arbitrary zero because the third law (Topic 3) sets \(S = 0\) at 0 K for a perfect crystal.

For a reaction, the standard entropy change is:

\[
\Delta S^\circ_{\text{rxn}} = \sum n\, S^\circ(\text{products}) - \sum m\, S^\circ(\text{reactants})
\]

where \(n\) and \(m\) are the stoichiometric coefficients. Units matter: entropies are in J/(mol·K), so \(\Delta S^\circ_{\text{rxn}}\) comes out in J/K — usually a small number of kJ scale only after division by 1000, so watch the units when combining with \(\Delta H\) (kJ).

### Entropy of the surroundings

A system's entropy change is only half the story; the surroundings also gain or lose entropy. When a process releases heat (\(\Delta H < 0\)), the surroundings absorb it and their entropy increases:

\[
\Delta S_{\text{surr}} = -\frac{\Delta H_{\text{sys}}}{T}
\]

at constant temperature and pressure. This relationship is the bridge to the second law in Topic 3, where the sum \(\Delta S_{\text{sys}} + \Delta S_{\text{surr}}\) decides spontaneity.

## ELI-10: Explain Like I'm 10

> Imagine your LEGO bricks. You can build one tall tower (that's ONE arrangement — low entropy), or you can scatter the bricks all over the floor in millions of different ways (high entropy). Nature always drifts toward the way with the most arrangements — the scattered floor. A solid ice cube has few arrangements for its molecules; liquid water has many more; steam has the most. Entropy counts how many different ways the pieces can be arranged.

## High-Yield Points

- **Entropy** \(S\) measures the number of microstates: \(S = k_B \ln W\); more arrangements → higher entropy.
- \(\Delta S = q_{\text{rev}}/T\) for a reversible isothermal process — entropy is a **state function**.
- **Phase order:** \(S_{\text{gas}} \gg S_{\text{liquid}} > S_{\text{solid}}\); melting/vaporizing increase \(S\).
- **Gas moles rule:** more moles of *gas* in products than reactants → \(\Delta S_{\text{rxn}} > 0\). Count gas moles only.
- **Heating** increases entropy; cooling decreases it; gas expansion increases it.
- **Phase-change entropy:** \(\Delta S = \Delta H_{\text{transition}}/T_{\text{transition}}\) (T in kelvins).
- **Standard molar entropy** \(S^\circ\) (J/(mol·K)) is absolute (third law zero), unlike \(\Delta H^\circ_f\).
- **Reaction entropy:** \(\Delta S^\circ_{\text{rxn}} = \sum n S^\circ(\text{products}) - \sum m S^\circ(\text{reactants})\).
- Surroundings entropy: \(\Delta S_{\text{surr}} = -\Delta H_{\text{sys}}/T\) — exothermic reactions boost surroundings entropy.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Entropy (\(S\)) | Measure of the number of ways energy/matter can be arranged (microstates). | The directional quantity that decides which processes can occur. |
| Microstate | One specific arrangement of energy among particles. | More microstates = higher entropy; systems seek the most probable (most numerous) arrangements. |
| State function | Property depending only on current state, not the path taken. | Lets us compute \(\Delta S = q_{\text{rev}}/T\) for any process. |
| Reversible process | An idealized path through equilibrium states; the system and surroundings can be restored exactly. | Required for the \(\Delta S = q/T\) definition; real processes are irreversible. |
| Standard molar entropy (\(S^\circ\)) | Entropy of one mole of a substance in its standard state at 298 K, J/(mol·K). | Tabulated values used to calculate \(\Delta S^\circ_{\text{rxn}}\). |
| Boltzmann's constant (\(k_B\)) | \(1.38 \times 10^{-23}\ \text{J/K}\); connects microstates to entropy. | The bridge between the microscopic (arrangements) and macroscopic (entropy). |
| Heat of transition (\(\Delta H_{\text{trans}}\)) | Enthalpy absorbed/released at a phase change (fusion, vaporization). | Divided by transition temperature gives \(\Delta S\) of the phase change. |
| Surroundings | Everything outside the system that can exchange energy with it. | Their entropy change, \(- \Delta H_{\text{sys}}/T\), completes the spontaneity calculation. |

## Example: Calculating entropy changes

**Worked example 1 — entropy of vaporization of water.** The enthalpy of vaporization of water is \(\Delta H_{\text{vap}} = 40.7\ \text{kJ/mol}\) at its normal boiling point \(T_b = 373.15\ \text{K}\). Find \(\Delta S_{\text{vap}}\).

Use the phase-change relation:

\[
\Delta S_{\text{vap}} = \frac{\Delta H_{\text{vap}}}{T_b}
\]

Convert the enthalpy to J/mol first (dimensional analysis):

\[
40.7\ \frac{\text{kJ}}{\text{mol}} \times \frac{1000\ \text{J}}{1\ \text{kJ}} = 4.07 \times 10^4\ \text{J/mol}
\]

\[
\Delta S_{\text{vap}} = \frac{4.07 \times 10^4\ \text{J/mol}}{373.15\ \text{K}} = 109\ \text{J/(mol·K)}
\]

Liquid → gas increases entropy by about 109 J/(mol·K) per mole — a large gain, consistent with the huge increase in molecular freedom. The reverse (condensation) has \(\Delta S = -109\ \text{J/(mol·K)}\).

**Worked example 2 — sign of \(\Delta S\) by inspection.** Predict the sign of \(\Delta S\) for each process:

- \(2\text{H}_2(g) + \text{O}_2(g) \rightarrow 2\text{H}_2\text{O}(l)\): 3 mol gas → 0 mol gas; fewer particles and a gas→liquid change → \(\Delta S < 0\).
- \(\text{CaCO}_3(s) \rightarrow \text{CaO}(s) + \text{CO}_2(g)\): gas is produced → \(\Delta S > 0\).
- \(\text{NaCl}(s) \rightarrow \text{Na}^+(aq) + \text{Cl}^-(aq)\): solid disperses into ions → \(\Delta S > 0\).
- Freezing water at −5 °C: liquid → solid → \(\Delta S < 0\).

The gas-moles rule handles the first two instantly; phase and dissolution reasoning cover the rest.

**Worked example 3 — \(\Delta S^\circ_{\text{rxn}}\) from standard molar entropies.** Calculate \(\Delta S^\circ_{\text{rxn}}\) for the synthesis of ammonia at 298 K:

\[
\text{N}_2(g) + 3\text{H}_2(g) \rightarrow 2\text{NH}_3(g)
\]

Standard molar entropies (J/(mol·K)): \(S^\circ(\text{N}_2) = 191.5\), \(S^\circ(\text{H}_2) = 130.6\), \(S^\circ(\text{NH}_3) = 192.8\).

\[
\Delta S^\circ_{\text{rxn}} = \sum n S^\circ(\text{products}) - \sum m S^\circ(\text{reactants})
\]

\[
\Delta S^\circ_{\text{rxn}} = 2(192.8) - [1(191.5) + 3(130.6)]
\]

\[
\Delta S^\circ_{\text{rxn}} = 385.6 - [191.5 + 391.8] = 385.6 - 583.3 = -197.7\ \text{J/K}
\]

The reaction has \(\Delta S^\circ_{\text{rxn}} = -197.7\ \text{J/K}\), a substantial *decrease* — consistent with 4 mol of gas collapsing into 2 mol. This negative entropy change is why ammonia synthesis needs high pressure and a catalyst: thermodynamics favors the reverse (decomposition) unless the surroundings' entropy gain from the exothermic reaction compensates (Topic 3).

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Entropy | Enthalpy | Enthalpy is heat at constant pressure (kJ); entropy is dispersal/arrangements (J/K). Exothermic ≠ high entropy. |
| More disorder | More microstates | "Disorder" is a loose metaphor; entropy is precisely \(k_B \ln W\) — a count of arrangements. |
| \(\Delta S_{\text{rxn}}\) sign | \(\Delta H_{\text{rxn}}\) sign | A reaction can be exothermic yet have \(\Delta S < 0\) (NH₃ synthesis); the two are independent properties. |
| Moles of gas | Total moles | Only *gas* moles matter for the entropy rule: 4 mol gas → 2 mol gas decreases entropy even though 4 → 2 overall. |
| Standard molar entropy \(S^\circ\) | Standard enthalpy of formation \(\Delta H^\circ_f\) | \(S^\circ\) is absolute (zero at 0 K per the third law); \(\Delta H^\circ_f\) is relative to an arbitrary zero (elements = 0). |
| J vs kJ | — | \(S^\circ\) values are J/(mol·K); \(\Delta H\) values are usually kJ/mol. Convert (÷1000) before combining — a classic unit trap. |
| Reversible | Irreversible | Reversible is an idealized equilibrium path used for calculation; real processes are irreversible and produce net entropy. |

## Quick Review

1. State the Boltzmann relation between entropy and microstates, and explain what "more microstates" means physically.
2. Predict the sign of \(\Delta S\) for: (a) \(\text{CO}_2(s) \rightarrow \text{CO}_2(g)\); (b) \(2\text{NO}(g) + \text{O}_2(g) \rightarrow 2\text{NO}_2(g)\); (c) sugar dissolving in water.
3. The enthalpy of fusion of ice is 6.01 kJ/mol at 273.15 K. Calculate \(\Delta S_{\text{fus}}\) of water.
4. Why are standard molar entropies absolute values while standard enthalpies of formation are relative?
5. In \(\text{N}_2(g) + 3\text{H}_2(g) \rightarrow 2\text{NH}_3(g)\), \(\Delta S^\circ_{\text{rxn}}\) is negative even though the reaction is famously used industrially. Explain this apparent contradiction.
6. A reaction is exothermic. What happens to the entropy of the *surroundings*, and what equation describes it?

<details>
<summary>Show answers</summary>

1. \(S = k_B \ln W\) with \(k_B = 1.38 \times 10^{-23}\ \text{J/K}\). More microstates means more distinct ways to arrange energy/particles consistent with the same macroscopic state — and a more probable state.
2. (a) Positive (sublimation: solid → gas). (b) Negative (3 mol gas → 2 mol gas). (c) Positive (solute disperses into solution).
3. \(\Delta S_{\text{fus}} = \Delta H_{\text{fus}}/T = (6.01 \times 10^3\ \text{J/mol})/(273.15\ \text{K}) = 22.0\ \text{J/(mol·K)}\).
4. The third law gives a real zero of entropy (perfect crystal at 0 K), so \(S^\circ\) values are absolute; enthalpies are measured relative to elements in their standard states, an arbitrary zero.
5. The *system* entropy decreases (4 mol gas → 2 mol gas), but the reaction is exothermic, so the *surroundings* gain entropy (\(-\Delta H/T\)); under the right conditions the surroundings' gain exceeds the system's loss, and the total can still favor the forward reaction.
6. The surroundings gain entropy: \(\Delta S_{\text{surr}} = -\Delta H_{\text{sys}}/T\) — heat released by the system becomes dispersed thermal energy in the surroundings.

</details>

## Related Topics

- Previous: [Spontaneity](01-spontaneity.md)
- Next: [The Second and Third Laws of Thermodynamics](03-the-second-and-third-laws-of-thermodynamics.md)
- Related: [Thermodynamics chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure. Constants cited (\(k_B = 1.38 \times 10^{-23}\ \text{J/K}\); \(\Delta H_{\text{vap}}\) water 40.7 kJ/mol at 373.15 K; \(\Delta H_{\text{fus}}\) ice 6.01 kJ/mol at 273.15 K; standard molar entropies of N₂, H₂, NH₃) are standard reference values; calculations are original worked examples.
- Last updated: 2026-08-16
