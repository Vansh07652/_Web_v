---
title: "Properties of Liquids"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "10: Liquids and Solids"
topic_number: "2"
source: "chemistry-atoms-first-2e.md"
tags:
  - "properties-of-liquids"
  - "science"
status: "complete"
---

# Properties of Liquids

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 10: Liquids and Solids](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

A liquid is a compromise state: molecules stay close together (like a solid) but slide past one another (like a gas). Five measurable properties capture that compromise, all tracing back to intermolecular forces (IMFs): **surface tension** (skin-like resistance of the surface), **capillary action** (climbing a narrow tube), **viscosity** (resistance to flow), **vapor pressure** (pressure of vapor above the liquid), and **boiling point** (temperature at which vapor pressure matches external pressure).

The unifying theme is a tug-of-war: IMFs pull molecules into the liquid while thermal energy pushes them to escape. Stronger IMFs mean higher surface tension and viscosity, lower vapor pressure, and higher boiling point. This topic defines each property, explains its molecular origin, and shows how to calculate capillary rise and vapor-pressure changes.

## Why This Matters

These properties are engineered everywhere: surface tension lets water striders walk on ponds and makes detergents necessary; capillary action moves water from roots to leaves and blood into pipettes; viscosity dictates how engine oil flows cold yet protects hot; vapor pressure explains why puddles dry and gasoline evaporates (a fire hazard); boiling-point reasoning explains pressure cooking, high-altitude cooking, and petroleum distillation.

## Core Concepts

### Surface tension

Surface molecules have no neighbors above, so they feel a net pull inward — the surface behaves like a stretched elastic film. **Surface tension** \(\gamma\) is the energy per unit area (or force per unit length) needed to increase the surface; units are N/m (equivalently J/m²). Water's value is about 0.0728 N/m at 20 °C — unusually high due to hydrogen bonding — and mercury's is even higher (0.486 N/m) from metallic cohesion. A **surfactant** (soap) disrupts surface hydrogen bonding and drops it dramatically.

### Capillary action

When a liquid wets a tube's walls (strong adhesion), it climbs the tube, dragging the rest along by cohesion. The equilibrium **capillary rise** \(h\) for a tube of radius \(r\) is:

\[
h = \frac{2\gamma \cos\theta}{\rho g r}
\]

where \(\gamma\) is surface tension, \(\theta\) the contact angle (\(\approx 0\) for water on clean glass), \(\rho\) the density, and \(g\) gravity. Narrower tube → higher rise; denser liquid → lower rise. Plants use this in xylem vessels; lab capillaries use it to collect blood.

### Viscosity

**Viscosity** is a liquid's resistance to flow — internal friction as layers slide past each other. It increases with stronger IMFs and larger, more entangled molecules, and decreases *sharply with temperature* because thermal motion overcomes the attractions locking layers together. Honey is viscous mainly because its large sugar molecules tangle; warm honey flows because heating weakens those interactions.

### Vapor pressure and dynamic equilibrium

In a closed container, surface molecules with enough kinetic energy escape (evaporation) while gas molecules re-enter (condensation). At **dynamic equilibrium** the rates are equal, and the vapor pressure above the liquid is a property of the substance at that temperature: it rises steeply with temperature and is *lower* for liquids with stronger IMFs. A liquid with high vapor pressure is **volatile**.

### Boiling point

**Boiling** occurs when vapor pressure equals external pressure, forming bubbles throughout the liquid. The **normal boiling point** is the boiling temperature at exactly 1 atm — which explains altitude cooking (lower pressure → lower boiling point) and pressure cookers (higher pressure → higher boiling point). The quantitative link is the Clausius–Clapeyron equation:

\[
\ln\left(\frac{P_2}{P_1}\right) = -\frac{\Delta H_{\text{vap}}}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)
\]

where \(\Delta H_{\text{vap}}\) is the enthalpy of vaporization, \(R = 8.314\ \text{J/(mol·K)}\), and temperatures are in kelvin.

## ELI-10: Explain Like I'm 10

> A liquid's molecules hold hands. Surface tension is the skin they make on top; capillary action is how they climb a skinny straw together; viscosity is how hard they resist being pushed apart; vapor pressure is how many molecules sneak off into the air; boiling is when that sneaking pressure grows big enough to make bubbles everywhere.

## High-Yield Points

- All five properties scale with IMF strength: stronger IMFs → higher surface tension, higher viscosity, lower vapor pressure, higher boiling point.
- Surface tension units: N/m (or J/m²). Water ≈ 0.0728 N/m at 20 °C; surfactants lower it.
- Capillary rise: \(h = 2\gamma\cos\theta/(\rho g r)\) — narrower tube rises higher.
- Viscosity decreases strongly as temperature rises.
- Vapor pressure exists below the boiling point — evaporation happens at all temperatures; boiling requires vapor pressure = external pressure.
- Normal boiling point = boiling point at exactly 1 atm.
- Volatile liquids (high vapor pressure) evaporate quickly — gasoline, acetone, perfumes.
- Clausius–Clapeyron links \(P\) and \(T\) through \(\Delta H_{\text{vap}}\); use kelvin temperatures.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| surface tension | Energy per unit area to stretch a liquid surface | Explains wetting, water striders, soap's action |
| cohesion / adhesion | Attraction between like molecules / between a liquid and a surface | Drive surface tension and capillary action |
| capillary action | Rise or fall of liquid in a narrow tube from adhesion + cohesion | Moves water in plants; fills pipettes |
| viscosity | Resistance to flow (internal friction) | Governs oil formulation, blood flow, pouring behavior |
| vapor pressure | Pressure of vapor in equilibrium with its liquid | Predicts evaporation rate and flammability |
| dynamic equilibrium | Equal rates of evaporation and condensation in a closed system | Defines the steady vapor pressure |
| volatile | Evaporates readily (high vapor pressure) | Safety: vapors of volatile fuels are fire hazards |
| normal boiling point | Boiling temperature at exactly 1 atm | The familiar "100 °C for water" reference |

## How It Works / Step-by-Step Process

**Using the Clausius–Clapeyron equation:**

1. Identify a known vapor-pressure point (\(P_1\), \(T_1\), e.g., 1 atm at the normal boiling point), the target \(T_2\) or \(P_2\), and \(\Delta H_{\text{vap}}\).
2. Convert temperatures to kelvin: \(T(\text{K}) = T(^\circ\text{C}) + 273.15\).
3. Substitute into the equation and solve for the unknown.
4. Check units: \(\Delta H_{\text{vap}}\) in J/mol must match \(R\) in J/(mol·K).
5. Sanity-check: raising temperature must raise vapor pressure.

## Worked Examples

### Example 1: How high does water climb a capillary tube?

Water climbs a clean glass capillary of radius \(r = 2.0 \times 10^{-4}\ \text{m}\) (0.20 mm), with \(\gamma = 0.0728\ \text{N/m}\), \(\cos\theta \approx 1\), \(\rho = 1000\ \text{kg/m}^3\), \(g = 9.81\ \text{m/s}^2\).

Write the capillary-rise formula:

\[
h = \frac{2\gamma \cos\theta}{\rho g r}
\]

Substitute:

\[
h = \frac{2(0.0728\ \text{N/m})(1)}{(1000\ \text{kg/m}^3)(9.81\ \text{m/s}^2)(2.0 \times 10^{-4}\ \text{m})}
\]

\[
h = \frac{0.1456}{1.962}\ \text{m} = 0.0742\ \text{m} \approx 7.4\ \text{cm}
\]

Unit check: N/m = kg·s⁻² and the denominator is (kg/m³)(m/s²)(m) = kg·s⁻²/m, so the result is meters. Water rises about 7.4 cm — twice as high in a tube half as wide, as the formula predicts.

### Example 2: Vapor pressure of water at 85 °C

Estimate water's vapor pressure at 85 °C. Known: \(P_1 = 1.00\ \text{atm}\) at \(T_1 = 373\ \text{K}\) (normal boiling point); \(T_2 = 358\ \text{K}\); \(\Delta H_{\text{vap}} = 40{,}650\ \text{J/mol}\) (from 40.65 kJ/mol, so units match \(R\)).

Write the Clausius–Clapeyron equation:

\[
\ln\left(\frac{P_2}{P_1}\right) = -\frac{\Delta H_{\text{vap}}}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)
\]

Substitute:

\[
\ln\left(\frac{P_2}{1.00}\right) = -\frac{40{,}650}{8.314}\left(\frac{1}{358} - \frac{1}{373}\right)
\]

\[
\ln P_2 = -(4889\ \text{K})(0.002793 - 0.002681)\ \text{K}^{-1} = -(4889)(1.12 \times 10^{-4}) = -0.548
\]

\[
P_2 = e^{-0.548} = 0.578\ \text{atm}
\]

Convert: \(0.578\ \text{atm} \times 101.325\ \text{kPa/atm} = 58.6\ \text{kPa}\) (literature ≈57.8 kPa). Since 0.578 atm is below the ~0.70 atm at 3000 m, water at 85 °C would *boil* there: vapor pressure need only match external pressure.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| Boiling and evaporation are the same. | Evaporation is surface-only, at any temperature; boiling needs vapor pressure = external pressure, bubbling throughout. |
| Higher temperature means higher viscosity. | No — viscosity *decreases* as temperature rises; heat helps molecules slide past each other. |
| Surface tension and viscosity always move together. | Both usually rise with IMF strength, but shape matters: tangled molecules (honey) raise viscosity far more than surface tension. |
| High vapor pressure means a high boiling point. | The opposite: molecules escape easily, so the liquid boils at a *lower* temperature (volatile liquids like acetone). |
| Water boils at 100 °C everywhere. | Only at exactly 1 atm: below at altitude, above in a pressure cooker. |
| Capillary rise is caused only by adhesion. | Both adhesion (wall pulls liquid up) and cohesion (molecules pull each other along) are required. |

## Quick Review

1. List the five liquid properties and how each changes as IMFs strengthen.
2. A liquid rises 3.7 cm in a capillary of radius 0.40 mm. What would the rise be in a tube of radius 0.10 mm, all else equal?
3. Why does warm honey flow more easily than cold honey?
4. At 85 °C the vapor pressure of water is about 0.58 atm. Would water boil at 85 °C on a mountain where the pressure is 0.50 atm? Why?
5. Why does adding soap to water make it easier to wash grease off a pan?
6. What is the difference between vapor pressure and boiling point?

<details>
<summary>Show answers</summary>

1. Surface tension ↑, viscosity ↑, capillary rise ↑ (if it wets), vapor pressure ↓, boiling point ↑.
2. 14.8 cm. Capillary rise is inversely proportional to radius, so a 4× narrower tube gives a 4× higher rise.
3. Viscosity decreases sharply with temperature: thermal motion overcomes attractions locking sugar molecules into tangled layers.
4. Yes — boiling occurs when vapor pressure equals external pressure; 0.58 ≥ 0.50 atm, so bubbles form.
5. Soap is a surfactant: it lowers surface tension so water spreads into thin films that wet and lift grease instead of beading up.
6. Vapor pressure is the equilibrium pressure of vapor at a given temperature; the boiling point is where that pressure equals the external pressure.
</details>

## Related Topics

- Previous: [Intermolecular Forces](01-intermolecular-forces.md)
- Next: [Phase Transitions](03-phase-transitions.md)
- Related: [Phase Diagrams](04-phase-diagrams.md)
- Related: [Enthalpy](../chapter-09-thermochemistry/03-enthalpy.md)
- Related: [Liquids and Solids chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants cross-checked against standard references: water surface tension 0.0728 N/m at 20 °C, mercury 0.486 N/m; \(\Delta H_{\text{vap}}\)(water) 40.65 kJ/mol; water vapor pressure at 85 °C ≈ 57.8 kPa (2026-08).
- Last updated: 2026-08-16
