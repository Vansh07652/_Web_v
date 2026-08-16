---
title: "The Kinetic-Molecular Theory"
subject: "Science"
book: "Chemistry 2e"
chapter: "9: Gases"
topic_number: "5"
source: "chemistry-2e.md"
tags:
  - "the-kinetic-molecular-theory"
  - "science"
status: "complete"
---

# The Kinetic-Molecular Theory

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 9: Gases](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

The gas laws of the previous topics tell you *what* gases do — double the temperature and volume doubles; halve the volume and pressure doubles. The **kinetic-molecular theory (KMT)** explains *why*. Built by Rudolf Clausius, James Clerk Maxwell, and Ludwig Boltzmann in the mid-1800s, the theory models a gas as a huge collection of tiny, rapidly moving particles whose collisions with container walls produce the measured pressure. From a handful of simple assumptions, the theory derives the ideal gas law, explains Boyle's, Charles's, Avogadro's, and Dalton's laws, and predicts molecular speeds. It also explains why real gases deviate from ideal behavior at high pressure and low temperature — and gives chemists a way to calculate how fast molecules actually move, a number that matters in effusion, diffusion, and reaction rates.

## Why This Matters

- **Macro to micro:** KMT bridges observable quantities (pressure, volume, temperature) and the invisible particle world, turning "gases expand when heated" from a memorized fact into a consequence of faster-moving molecules.
- **Predicting molecular speeds:** The root-mean-square (rms) speed formula tells you how fast molecules around you move — about 500 m/s for O₂ at room temperature, faster than the speed of sound. This directly governs effusion and diffusion rates from the previous topic.
- **Explaining real-world phenomena:** Why does a balloon expand in a hot car? Why does a basketball feel firmer when the air is warm? Why do gases cool as they expand? KMT answers all of these.
- **Knowing a model's limits:** Real gases condense to liquids; ideal gases never do. Understanding KMT's assumptions (no particle volume, no attractions) tells you when the model fails — high pressure, low temperature — which matters for anyone designing aerosol cans or industrial reactors.
- **Exams:** KMT postulates, rms speed calculations, and explaining gas laws with the theory are classic short-answer and calculation items.

## Core Concepts

### The five postulates

The kinetic-molecular theory rests on five assumptions about an ideal gas:

1. **Gases consist of a very large number of tiny particles** (atoms or molecules) separated by distances much larger than their own sizes; the particles' own volume is negligible compared with the container volume.
2. **Gas particles are in constant, random, straight-line motion**, colliding with the container walls and each other.
3. **Collisions are perfectly elastic** — kinetic energy is transferred between particles but none is lost on average.
4. **There are no attractive or repulsive forces** between particles except during collisions.
5. **The average kinetic energy of the particles is directly proportional to the absolute (kelvin) temperature.** At the same temperature, every gas — regardless of identity — has the same average kinetic energy.

These assumptions define the *ideal* gas: point particles, no interactions. Real gases approximate this when molecules are far apart (low pressure) and moving fast (high temperature).

### Pressure from collisions

Gas pressure arises from countless particle–wall collisions. Each collision transfers a tiny impulse to the wall; pressure is the total force from all collisions divided by wall area. The theory predicts pressure depends on three factors: more particles (more collisions per second), faster particles (harder, more frequent collisions), and a smaller container (particles hit walls more often). This molecular picture generates the ideal gas law \(PV = nRT\) from mechanics — the observable law of gases is derivable from the statistics of moving particles.

### Temperature is average kinetic energy

Postulate 5 is the deepest idea: temperature measures the average translational kinetic energy of the particles. The average kinetic energy per mole of gas is:

\[ \overline{\text{KE}} = \frac{3}{2}RT \]

Because \(\overline{\text{KE}} = \frac{1}{2}m\overline{v^2}\), and temperature–energy is the same for all gases at a given temperature, a light gas and a heavy gas at the same temperature have the same average kinetic energy but very different speeds — He molecules race around ~2.8× faster than O₂ molecules, as Graham's law showed in the previous topic.

### Molecular speeds: the rms speed

The most useful quantitative result of KMT is the **root-mean-square speed**, the speed of a molecule with the average kinetic energy:

\[ u_{\text{rms}} = \sqrt{\frac{3RT}{M}} \]

where \(R = 8.314\ \text{J/(mol·K)}\), \(T\) is kelvin temperature, and \(M\) is the molar mass **in kg/mol** (because J = kg·m²/s²). The rms speed is not the average speed, but it is close and much easier to derive. It is the speed that matters for effusion rates: Graham's law follows directly because effusion rate ∝ \(u_{\text{rms}} \propto 1/\sqrt{M}\).

### The Maxwell–Boltzmann distribution

Not all molecules move at the same speed — they follow a spread of speeds called the **Maxwell–Boltzmann distribution**. Key features: (1) the curve is skewed, with most probable speed < average speed < rms speed; (2) at higher temperature the curve flattens and shifts right — molecules move faster on average, and a larger fraction travel at very high speeds; (3) at the same temperature, lighter molecules have a broader, faster distribution. This distribution explains why evaporation can happen below the boiling point (fast molecules escape the liquid surface) and why reactions speed up with temperature (more collisions carry enough energy).

### Explaining the gas laws

KMT accounts for every empirical law in this chapter:

- **Boyle's law:** smaller container → particles travel shorter distances between wall collisions → more collisions per second → higher pressure at constant \(T\).
- **Charles's law:** higher \(T\) → faster particles → harder, more frequent collisions → volume must expand to keep pressure constant.
- **Avogadro's law:** more particles → more collisions → volume must grow to keep pressure constant.
- **Dalton's law:** each gas's particles collide with the walls independently; total pressure is the sum of each gas's independent contribution.
- **Graham's law:** effusion rate ∝ average speed ∝ \(1/\sqrt{M}\).

### Limits of the model

KMT assumes no particle volume and no intermolecular forces. Both break down at high pressure (particles packed close, their own volume becomes significant) and low temperature (slow molecules spend more time near each other, attractions matter). Real gases then deviate from \(PV = nRT\) — the subject of the next topic. KMT is a model, not reality: wonderfully accurate under the right conditions and knowingly wrong outside them.

## ELI-10: Explain Like I'm 10

Imagine a room full of bouncy balls flying everywhere, never slowing down, never sticking together. Every time a ball hits a wall, it gives the wall a tiny push — that push is the gas pressure. Turn up the heat: the balls bounce faster and push harder, so the walls get pushed out — the gas expands. The rules of this bouncy-ball world are the kinetic-molecular theory, and they explain almost everything gases do, as long as the balls are small enough and never stick to each other.

## High-Yield Points

- Five postulates: tiny particles, constant random motion, elastic collisions, no intermolecular forces, KE ∝ T (kelvin).
- Temperature measures average kinetic energy: \(\overline{\text{KE}} = \frac{3}{2}RT\) per mole — same for all gases at the same T.
- rms speed: \(u_{\text{rms}} = \sqrt{3RT/M}\), with M in **kg/mol** — the most common calculation error is using g/mol.
- Maxwell–Boltzmann distribution: spread of speeds; higher T shifts the curve to higher speeds; lighter molecules are faster at the same T.
- KMT derives Boyle's, Charles's, Avogadro's, Dalton's, and Graham's laws.
- Ideal gas assumptions fail at high pressure and low temperature → real gases deviate (next topic).
- For O₂ at 298 K: \(u_{\text{rms}} = \sqrt{3(8.314)(298)/0.0320} \approx 482\ \text{m/s}\) — faster than the speed of sound in air.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Kinetic-molecular theory | Model of gases as many tiny, fast, non-interacting particles in random motion | Explains the gas laws from particle mechanics |
| Postulate | A basic assumption of a theory | KMT's five postulates define the ideal gas and its limits |
| Elastic collision | Collision in which total kinetic energy is conserved | Lets gas particles bounce forever without losing energy |
| Average kinetic energy | \(\frac{3}{2}RT\) per mole; proportional to kelvin temperature | The physical meaning of temperature |
| rms speed (\(u_{\text{rms}}\)) | Speed of a particle with the average kinetic energy; \(\sqrt{3RT/M}\) | Quantitative prediction of molecular speeds; basis of Graham's law |
| Maxwell–Boltzmann distribution | The spread of molecular speeds in a gas at a given temperature | Explains evaporation, reaction rates, and how temperature changes speed distributions |
| Absolute zero | 0 K (−273.15 °C), where particle motion is minimal | The zero point of the kelvin scale used in all gas equations |

## Worked Examples

### Example 1: rms speed of oxygen at room temperature

Calculate the rms speed of O₂ molecules at 298 K. Molar mass of O₂ = 32.00 g/mol.

**Step 1 — write the formula:**

\[ u_{\text{rms}} = \sqrt{\frac{3RT}{M}} \]

**Step 2 — convert molar mass to kg/mol** (required for units to work):

\[ M = 32.00\ \text{g/mol} \times \frac{1\ \text{kg}}{1000\ \text{g}} = 0.03200\ \text{kg/mol} \]

**Step 3 — substitute** (\(R = 8.314\ \text{J/(mol·K)}\), and \(1\ \text{J} = 1\ \text{kg·m}^2/\text{s}^2\)):

\[ u_{\text{rms}} = \sqrt{\frac{3(8.314\ \text{J/(mol·K)})(298\ \text{K})}{0.03200\ \text{kg/mol}}} = \sqrt{2.32 \times 10^5\ \text{m}^2/\text{s}^2} = 482\ \text{m/s} \]

O₂ at room temperature averages ~482 m/s ≈ 1700 km/h — faster than a commercial jet. Using g/mol instead would give ~15,200 m/s, an absurd result that signals the unit error.

### Example 2: rms speed comparison — hydrogen versus oxygen

By what factor is the rms speed of H₂ (M = 2.016 g/mol) greater than that of O₂ at the same temperature?

**Step 1 — write the ratio** (same \(T\), so \(3RT\) cancels):

\[ \frac{u_{\text{H}_2}}{u_{\text{O}_2}} = \sqrt{\frac{M_{\text{O}_2}}{M_{\text{H}_2}}} \]

**Step 2 — substitute molar masses** (both in g/mol — the ratio is unitless):

\[ \frac{u_{\text{H}_2}}{u_{\text{O}_2}} = \sqrt{\frac{32.00}{2.016}} = \sqrt{15.87} = 3.98 \]

H₂ molecules move almost exactly 4× faster than O₂ at the same temperature — the same \(1/\sqrt{M}\) relationship as Graham's law.

### Example 3: How hot for helium to reach a given speed

At what temperature do He atoms (M = 4.003 g/mol) have an rms speed of 1000 m/s?

**Step 1 — write the formula and solve for \(T\):**

\[ u_{\text{rms}} = \sqrt{\frac{3RT}{M}} \quad\rightarrow\quad T = \frac{M u_{\text{rms}}^2}{3R} \]

**Step 2 — convert M to kg/mol:** \(4.003\ \text{g/mol} = 0.004003\ \text{kg/mol}\).

**Step 3 — substitute:**

\[ T = \frac{(0.004003\ \text{kg/mol})(1000\ \text{m/s})^2}{3(8.314\ \text{J/(mol·K)})} = \frac{4003}{24.94} = 160.5\ \text{K} \]

Helium reaches 1000 m/s at about −113 °C (160.5 − 273.15 = −112.7 °C). This is why helium balloons lose gas so fast even in cold weather — helium molecules are already speedy at low temperatures.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Temperature | Heat/energy | Temperature is proportional to *average* kinetic energy per particle; heat is transferred energy. Two gases can share the same T (same avg KE) with different total energies (different amounts) |
| rms speed | Average or most probable speed | The distribution has three "average-like" speeds; rms > average > most probable. Exams usually ask for rms |
| g/mol | kg/mol in the rms formula | M must be kg/mol with R = 8.314 J/(mol·K); using g/mol gives answers ~32× too large |
| Elastic collisions | Inelastic collisions | In KMT, collisions conserve kinetic energy on average; inelastic collisions (macro scale) lose energy |
| Ideal gas model | Real gas | The model assumes zero particle volume and zero attractions; real gases deviate at high P and low T |
| One speed for all molecules | A distribution of speeds | Molecules have a spread of speeds (Maxwell–Boltzmann); "the speed" is an average description |
| Pressure from static weight | Pressure from collisions | Gas pressure comes from moving-particle collisions, not from the gas "sitting" on the wall (unlike a liquid column) |

## Quick Review

1. List the five postulates of the kinetic-molecular theory.
2. What is the average kinetic energy per mole of any gas at 300 K?
3. Calculate the rms speed of N₂ (M = 28.02 g/mol) at 298 K.
4. Explain Boyle's law using KMT.
5. Why does a gas cool when it expands rapidly (e.g., aerosol spray)?
6. Under what conditions does the ideal gas model fail, and why?

<details>
<summary>Show answers</summary>

1. (1) Gases are many tiny particles with negligible volume; (2) constant random straight-line motion; (3) collisions are perfectly elastic; (4) no attractive/repulsive forces between particles; (5) average kinetic energy ∝ kelvin temperature.
2. \(\overline{\text{KE}} = \frac{3}{2}RT = \frac{3}{2}(8.314)(300) = 3.74 \times 10^3\ \text{J/mol} = 3.74\ \text{kJ/mol}\) — identical for every gas at 300 K.
3. \(u_{\text{rms}} = \sqrt{3(8.314)(298)/(0.02802)} = \sqrt{2.65 \times 10^5} = 515\ \text{m/s}\).
4. At constant temperature molecules keep the same average speed, so compressing the gas into a smaller volume shortens the distance between wall collisions — particles hit walls more often, so pressure rises.
5. Rapid expansion does work on the surroundings, drawing energy from the gas's kinetic energy; slower molecules mean lower temperature — the principle behind refrigeration.
6. At high pressure (particles crowded; their own volume and attractions matter) and low temperature (slow particles linger near each other; attractions dominate); real gases then deviate from \(PV = nRT\).

</details>

## Related Topics

- Previous: [Effusion and Diffusion of Gases](04-effusion-and-diffusion-of-gases.md)
- Next: [Non-Ideal Gas Behavior](06-non-ideal-gas-behavior.md)
- Related: [Gases chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants used (R = 8.314 J·mol⁻¹·K⁻¹, 0 K = −273.15 °C, molar masses) are standard published values (NIST, IUPAC); verify against current primary sources before formal citation.
- Last updated: 2026-08-16
