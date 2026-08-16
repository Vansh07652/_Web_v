---
title: "The Kinetic-Molecular Theory"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "8: Gases"
topic_number: "5"
source: "chemistry-atoms-first-2e.md"
tags:
  - "the-kinetic-molecular-theory"
  - "science"
status: "complete"
---

# The Kinetic-Molecular Theory

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 8: Gases](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

The gas laws of Topic 2 describe *what* gases do — pressure rises when you compress a gas, volume grows when you heat it — but not *why*. The **kinetic-molecular theory (KMT)** supplies the explanation: a gas is a huge collection of tiny particles in constant, random motion. It is a **model**, a simplified picture that treats particles as hard spheres with negligible volume and no attractions between them.

That model explains every empirical gas law with one idea: gas pressure is the summed force of countless molecular collisions with container walls, and temperature measures the average kinetic energy of the molecules. This topic states the five postulates, quantifies the temperature–energy link, introduces molecular speed distributions, and shows how the model explains Boyle's, Charles's, Avogadro's, and Dalton's laws. It also previews where the model breaks down — the subject of Topic 6.

## Why This Matters

- **The KMT is the "why" behind every gas law.** If you understand the model, you never have to memorize whether pressure and volume are directly or inversely related — you reason it out from collisions.
- **It explains diffusion and effusion.** Light molecules move faster than heavy ones at the same temperature, which is why helium leaks from a balloon faster than air.
- **It explains everyday phenomena.** Tires heat up on a long drive because faster molecules hit the walls harder; weather balloons expand at altitude because fewer collisions mean lower outside pressure.
- **It sets up non-ideal behavior.** Real gases have volume and attract each other, so the KMT's assumptions mark exactly where the ideal gas law fails (Topic 6).
- **Exams:** KMT postulates, average kinetic energy, and root-mean-square speed calculations are standard items.

## Core Concepts

### The five postulates

1. **Gases are composed of tiny particles** (molecules or single atoms) separated by distances far larger than their diameters.
2. **The particles are in constant, random, straight-line motion**, colliding with each other and with container walls.
3. **Collisions are perfectly elastic** — kinetic energy is transferred between particles but none is lost overall.
4. **There are no attractive or repulsive forces between particles.** Each moves independently.
5. **The average kinetic energy is directly proportional to the absolute (kelvin) temperature**, and the particles' own volume is negligible compared with the container.

Postulates 4 and 5 are the *ideal* assumptions. Real gases violate both — the more they violate them, the less ideal they behave.

### Temperature measures average kinetic energy

Postulate 5 has a quantitative form. For one mole of any gas:

\[
\overline{KE} = \frac{3}{2}RT
\]

where \(\overline{KE}\) is the average translational kinetic energy per mole (joules), \(R = 8.314\ \text{J mol}^{-1}\text{K}^{-1}\), and \(T\) is absolute temperature (kelvin). Two consequences: **at the same temperature, every gas has the same average kinetic energy per mole** — heavy molecules simply move more slowly — and **at 0 K, molecular motion would stop**, which is why gas calculations require kelvin, not Celsius.

### Molecular speeds: the Maxwell–Boltzmann distribution

Molecules do not all move at one speed. Speeds spread out in the **Maxwell–Boltzmann distribution**: a few very slow, a few very fast, most near the middle. Heating shifts the whole distribution to higher speeds and flattens it.

The speed used in calculations is the **root-mean-square speed**:

\[
u_{rms} = \sqrt{\frac{3RT}{M}}
\]

with \(M\) in **kilograms per mole** — a critical detail, because grams per mole will not cancel to \(\text{m s}^{-1}\).

### Explaining the gas laws with the model

- **Boyle's law (inverse \(P\)–\(V\) at constant \(T\)):** squeezing gas into a smaller volume means molecules hit a smaller wall area more often — pressure rises.
- **Charles's law (direct \(V\)–\(T\) at constant \(P\)):** heating speeds molecules up; the container must expand to keep collision frequency per area constant.
- **Avogadro's law (direct \(V\)–\(n\)):** more molecules mean more collisions; volume must grow to hold pressure constant.
- **Dalton's law:** with no interparticle forces, each gas collides with the walls as if alone, so total pressure is the sum of partial pressures.

### Where the model stops working

At **high pressure**, particles are crowded and their volume is no longer negligible; at **low temperature**, molecules move slowly enough that attractions matter. Both make real gases deviate from ideal predictions — the next topic.

## ELI-10: Explain Like I'm 10

> Imagine a room full of bouncy balls flying around and smacking the walls. The balls are gas molecules and the walls are the container. The harder and more often they hit, the more "pressure" they make. Heat the room and the balls bounce faster and hit harder — that's why hot gases push harder. Make the room smaller and they hit the walls more often — that's why squeezing gas raises pressure. At the same bounciness, a heavy ball moves slower than a light one, but both carry the same bounce-energy.

## High-Yield Points

- Five postulates: tiny particles, constant random motion, elastic collisions, no interparticle forces, average kinetic energy \(\propto T\) (kelvin).
- **Average kinetic energy per mole:** \(\overline{KE} = \frac{3}{2}RT\) — depends only on temperature, not on the gas's identity.
- **Root-mean-square speed:** \(u_{rms} = \sqrt{3RT/M}\) with \(M\) in **kg/mol**.
- Lighter molecules move faster: \(u_{rms} \propto 1/\sqrt{M}\).
- Pressure comes from collisions; temperature measures average kinetic energy — these two ideas explain all four gas laws.
- Ideal gas law fails at high pressure (particle volume) and low temperature (attractions) → Topic 6.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Kinetic-molecular theory | Model of gas particles as tiny, fast, non-interacting hard spheres in random motion | Provides the molecular explanation for all gas laws |
| Postulate | A basic assumption at the start of a model | The five postulates define when a gas is "ideal" |
| Elastic collision | Collision in which kinetic energy is conserved overall | Guarantees no energy is lost to friction or deformation |
| Average kinetic energy | Mean translational energy per mole, \(\frac{3}{2}RT\) | Proportional to absolute temperature; identical for all gases at a given \(T\) |
| Maxwell–Boltzmann distribution | Spread of molecular speeds at a given temperature | Explains why some molecules escape a liquid (evaporation) |
| Root-mean-square speed (\(u_{rms}\)) | Representative average molecular speed, \(\sqrt{3RT/M}\) | Powers effusion/diffusion calculations (Graham's law) |
| Absolute temperature | Temperature in kelvin, \(K = {}^\circ C + 273.15\) | Kinetic energy is proportional to kelvin, not Celsius |

## Worked Examples

### Example 1: Root-mean-square speed of oxygen

Calculate \(u_{rms}\) for \(\text{O}_2\) at 298 K (molar mass 32.00 g/mol).

**Step 1 — Write the formula before substituting:**

\[
u_{rms} = \sqrt{\frac{3RT}{M}}
\]

**Step 2 — Convert molar mass to kg/mol:**

\[
M = 32.00\ \frac{\text{g}}{\text{mol}} \times \frac{1\ \text{kg}}{1000\ \text{g}} = 0.03200\ \text{kg mol}^{-1}
\]

**Step 3 — Substitute \(R = 8.314\ \text{J mol}^{-1}\text{K}^{-1}\), \(T = 298\ \text{K}\):**

\[
u_{rms} = \sqrt{\frac{3(8.314)(298)}{0.03200}} = \sqrt{232,\!200} \approx 482\ \text{m s}^{-1}
\]

Dimensional check: \(\frac{\text{J mol}^{-1}\text{K}^{-1} \cdot \text{K}}{\text{kg mol}^{-1}} = \frac{\text{kg m}^2\text{s}^{-2}}{\text{kg}} = \text{m}^2\text{s}^{-2}\), whose square root is \(\text{m s}^{-1}\). ~482 m/s (~1700 km/h) is reasonable for oxygen at room temperature.

### Example 2: Average kinetic energy per mole

What is the average translational kinetic energy of one mole of any gas at 298 K?

**Step 1 — Write the formula:**

\[
\overline{KE} = \frac{3}{2}RT
\]

**Step 2 — Substitute:**

\[
\overline{KE} = \frac{3}{2}(8.314\ \text{J mol}^{-1}\text{K}^{-1})(298\ \text{K}) = 3.72 \times 10^3\ \text{J mol}^{-1} = 3.72\ \text{kJ mol}^{-1}
\]

No molar-mass term appears, so helium and xenon have identical average kinetic energy per mole at the same temperature — the central prediction of postulate 5.

### Example 3: Comparing speeds of hydrogen and oxygen

How many times faster do \(\text{H}_2\) molecules (2.016 g/mol) move than \(\text{O}_2\) molecules (32.00 g/mol) at the same temperature?

**Step 1 — Write the ratio formula (the \(3RT\) cancels):**

\[
\frac{u_{rms}(\text{H}_2)}{u_{rms}(\text{O}_2)} = \sqrt{\frac{M(\text{O}_2)}{M(\text{H}_2)}}
\]

**Step 2 — Substitute (units cancel):**

\[
\frac{u_{rms}(\text{H}_2)}{u_{rms}(\text{O}_2)} = \sqrt{\frac{32.00}{2.016}} = \sqrt{15.87} \approx 3.98 \approx 4
\]

Hydrogen travels about four times faster than oxygen at the same temperature — the molecular explanation for Graham's law (Topic 4).

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Temperature | Heat | Temperature measures average kinetic energy; heat is energy transferred between objects at different temperatures |
| Average KE per mole | Total KE of the sample | Per mole is \(\frac{3}{2}RT\) for any gas; total scales with moles |
| \(u_{rms}\) | Average or most probable speed | Three different measures of the speed distribution; \(u_{rms}\) is the largest |
| Molar mass in g/mol | Molar mass in kg/mol | \(u_{rms}\) requires kg/mol; g/mol gives wrong units |
| Kelvin | Celsius | Doubling kelvin doubles average kinetic energy; doubling Celsius does not |

## Quick Review

1. State the five postulates of the kinetic-molecular theory.
2. Why must temperature be in kelvin for \(\overline{KE} = \frac{3}{2}RT\) and \(u_{rms} = \sqrt{3RT/M}\)?
3. Calculate \(u_{rms}\) for helium atoms (\(M = 4.003\ \text{g/mol}\)) at 300 K.
4. Two gases at the same temperature: which has greater average kinetic energy per mole — the heavier, the lighter, or neither?
5. Use the KMT to explain why compressing a gas at constant temperature raises its pressure.
6. At what conditions does the KMT fail, and which postulate breaks down?

<details>
<summary>Show answers</summary>

1. (1) Gases are tiny particles far apart; (2) particles in constant random motion; (3) elastic collisions; (4) no interparticle forces; (5) average kinetic energy ∝ absolute temperature, particle volume negligible.
2. The formulas express proportionality to *absolute* temperature, which starts at absolute zero; Celsius values are offset (0 °C = 273 K), so ratios and products come out wrong.
3. \(M = 0.004003\ \text{kg/mol}\); \(u_{rms} = \sqrt{3(8.314)(300)/0.004003} = \sqrt{1.869 \times 10^6} \approx 1370\ \text{m s}^{-1}\).
4. Neither — average kinetic energy per mole depends only on temperature.
5. A smaller volume means molecules travel a shorter distance between wall hits, so collision frequency per unit wall area rises — pressure increases.
6. High pressure (postulate 5's negligible-volume assumption fails) and low temperature (postulate 4's no-forces assumption fails because attractions matter at slow speeds).

</details>

## Related Topics

- Previous: [Effusion and Diffusion of Gases](04-effusion-and-diffusion-of-gases.md)
- Next: [Non-Ideal Gas Behavior](06-non-ideal-gas-behavior.md)
- Related: [Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law](02-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law.md) — the laws this theory explains
- Related: [Gases chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
