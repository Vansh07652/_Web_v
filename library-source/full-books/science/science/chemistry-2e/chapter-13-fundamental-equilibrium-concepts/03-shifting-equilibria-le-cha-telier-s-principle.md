---
title: "Shifting Equilibria: Le Châtelier’s Principle"
subject: "Science"
book: "Chemistry 2e"
chapter: "13: Fundamental Equilibrium Concepts"
topic_number: "3"
source: "chemistry-2e.md"
tags:
  - "shifting-equilibria-le-cha-telier-s-principle"
  - "science"
status: "complete"
---

# Shifting Equilibria: Le Châtelier’s Principle

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 13: Fundamental Equilibrium Concepts](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

A system at equilibrium stays there until something disturbs it. **Le Châtelier’s principle** predicts the response: if a stress is applied to a system at equilibrium, the system shifts in the direction that partially relieves the stress. The shift follows from the reaction quotient \(Q\) versus the equilibrium constant \(K\): when a stress makes \(Q < K\), the forward reaction is favored until \(Q\) climbs back to \(K\); when \(Q > K\), the reverse reaction is favored.

The common stresses are:

- **Changes in concentration** (adding or removing reactants or products),
- **Changes in pressure or volume** (for gas reactions),
- **Changes in temperature** (the only stress that changes the value of \(K\)),
- **Adding a catalyst or an inert gas** (which cause no shift, for reasons below).

## Why This Matters

Real chemistry rarely runs in a sealed flask left alone. Industrial reactors feed reactants and remove products continuously; the body constantly adds and removes the chemicals in its equilibria; environmental systems are pushed by pollution and climate change. Le Châtelier’s principle is the tool for reasoning about all of these:

- **Industry:** The Haber process makes ammonia from nitrogen and hydrogen. Because the reaction is exothermic and reduces gas moles, high pressure and continuous product removal push equilibrium toward ammonia.
- **Medicine:** Hemoglobin binds oxygen reversibly: high oxygen partial pressure in the lungs favors the oxygen-bound form; low partial pressure in the tissues releases it. This is also why carbon monoxide is dangerous — it binds hemoglobin tightly and does not easily leave.
- **Environment:** Dissolving CO₂ in seawater shifts carbonate equilibria that affect shell-forming organisms; adding CO₂ to the atmosphere is a concentration stress on these equilibria.

## Core Concepts

### Concentration changes: the \(Q\) vs \(K\) logic

Consider \(\ce{aA + bB <=> cC + dD}\) with \(K\) fixed (temperature constant).

- **Adding a reactant** (or removing a product) makes \(Q < K\); the reaction proceeds forward until \(Q = K\).
- **Adding a product** (or removing a reactant) makes \(Q > K\). The reaction proceeds in reverse.
- **Removing a product** — for example, distilling off a gas or precipitating a solid product — pulls the reaction forward. This is the "removal of product drives completion" trick used in synthesis.

Note the shift **partially** offsets the stress: if you add reactant, some is consumed, but not all. The system moves to a new equilibrium position, not the old one.

### Pressure and volume changes: gas reactions only

For gases, changing the container volume changes all partial pressures. Whether the equilibrium shifts depends on \(\Delta n\), the change in moles of gas:

- **Decreasing volume (increasing pressure):** the system shifts toward the side with **fewer moles of gas**, because that direction reduces the total pressure.
- **Increasing volume (decreasing pressure):** the system shifts toward the side with **more moles of gas**.
- **If \(\Delta n = 0\)** (equal gas moles on both sides), pressure changes cause no shift.

For \(\ce{N2(g) + 3H2(g) <=> 2NH3(g)}\), \(\Delta n = -2\), so compression favors ammonia. The constant \(K_p\) is unchanged — the *position* shifts, the constant does not.

An **inert gas** (like helium) added at constant volume changes total pressure but not the partial pressures of the reacting gases — no shift. At constant total pressure it forces a volume increase, diluting reactants — effectively a volume stress.

### Temperature changes: the stress that changes \(K\)

Temperature differs from the other stresses: it changes the value of \(K\) itself, because it changes the balance of forward and reverse rate constants. Think of heat as a product (exothermic) or reactant (endothermic), then apply the concentration logic:

- **Increasing temperature** favors the endothermic direction (absorbs the added heat).
- **Decreasing temperature** favors the exothermic direction.

For the exothermic synthesis of ammonia, raising the temperature shifts equilibrium toward reactants, *decreasing* yield. Industry therefore compromises: moderate temperature for speed (kinetics), high pressure for yield (equilibrium).

### Catalysts and the rate of reaching equilibrium

A catalyst lowers the activation energy for both the forward and reverse reactions equally. It does **not** change \(Q\) or \(K\), and it does not change the equilibrium position — it only makes the system reach equilibrium faster. "Faster" is not "farther" — a classic exam trap.

## ELI-10: Explain Like I’m 10

> Imagine a seesaw with kids on both sides, balanced in the middle. If you drop a heavy book on one side, the seesaw tips — but the kids shift around to make it as balanced as it can be again. Chemistry does the same thing: if you add more of one chemical, the reaction shifts to use some of it up and get back to balance. Heating an ice-water bath melts ice; cooling it refreezes water — the system pushes back against what you did.

## High-Yield Points

- Le Châtelier’s principle: a stress on an equilibrium shifts the reaction to partially relieve the stress.
- Adding reactant or removing product shifts the reaction forward; adding product or removing reactant shifts it in reverse.
- For gases: decreasing volume favors the side with fewer gas moles; \(\Delta n = 0\) means no shift from pressure changes.
- Temperature is the only stress that changes \(K\); heating favors the endothermic direction.
- Catalysts change the rate of approach to equilibrium, never the equilibrium position.
- Inert gas at constant volume: no shift; at constant pressure: behaves like a dilution.
- The shift is partial — the system moves to a new equilibrium, not back to the original one.
- \(Q\) vs \(K\): \(Q < K\) → forward; \(Q > K\) → reverse; \(Q = K\) → at equilibrium.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Le Châtelier’s principle | A system at equilibrium shifts to partially counteract an applied stress | The central predictive rule for how equilibria respond to change |
| stress | A change in concentration, pressure, volume, or temperature applied to an equilibrium | The input that determines the direction of shift |
| reaction quotient (\(Q\)) | The equilibrium-constant ratio computed with current concentrations | Comparing \(Q\) to \(K\) tells you the direction of shift |
| \(\Delta n\) | Change in moles of gas: products minus reactants | Determines whether pressure/volume changes cause a shift |
| exothermic / endothermic | Releases heat / absorbs heat | Determines which direction is favored when temperature changes |
| catalyst | Substance that speeds both directions equally without being consumed | Speeds attainment of equilibrium; never moves the position |

## How It Works / Step-by-Step Process

### Worked example 1: predicting the direction of shift

**Problem.** For \(\ce{N2O4(g) <=> 2NO2(g)}\) (colorless dinitrogen tetroxide ⇌ brown nitrogen dioxide), predict the effect of (a) adding \(\ce{NO2}\), (b) compressing the mixture, (c) heating, given that the forward reaction is endothermic.

**Solution.** Apply the stress logic step by step.

1. **(a) Adding \(\ce{NO2}\)** increases the numerator of \(Q = \frac{[\ce{NO2}]^2}{[\ce{N2O4}]}\), so \(Q > K\). The reaction shifts **in reverse**, consuming some added brown gas until \(Q = K\); the color partially fades.
2. **(b) Compressing** raises all pressures. Count gas moles: 1 \(\ce{N2O4}\) on the left, 2 \(\ce{NO2}\) on the right; \(\Delta n = +1\). The system shifts toward fewer gas moles — the **left**, forming colorless \(\ce{N2O4}\) and reducing pressure.
3. **(c) Heating** an endothermic reaction adds "reactant heat": \(\ce{N2O4} + \text{heat} \rightleftharpoons \ce{2NO2}\). The equilibrium shifts **forward**, producing more brown \(\ce{NO2}\) — a sealed tube turns browner when warmed, paler when cooled.

### Worked example 2: the quantitative \(Q\) vs \(K\) test

**Problem.** For \(\ce{H2(g) + I2(g) <=> 2HI(g)}\), \(K_c = 50.2\) at 445 °C. A mixture contains \([\ce{H2}] = 0.20\ \text{M}\), \([\ce{I2}] = 0.20\ \text{M}\), \([\ce{HI}] = 1.0\ \text{M}\). Which direction will it proceed?

**Solution.**

1. Compute the reaction quotient \(Q\) with current concentrations:

\[
Q = \frac{[\ce{HI}]^2}{[\ce{H2}][\ce{I2}]} = \frac{(1.0)^2}{(0.20)(0.20)} = \frac{1.0}{0.040} = 25
\]

2. Compare to \(K\): \(Q = 25 < K = 50.2\), so the reaction has too little product. It proceeds **forward**, converting \(\ce{H2}\) and \(\ce{I2}\) into \(\ce{HI}\) until \(Q\) rises to 50.2.

This test works for any concentration stress and reappears in the next topic.

### Worked example 3: Haber process reasoning

For \(\ce{N2(g) + 3H2(g) <=> 2NH3(g)}\), \(\Delta H < 0\) (exothermic), \(\Delta n = -2\). Maximum-yield reasoning: (1) raise pressure — favors the 2-mole product side; (2) remove ammonia as it forms — pulls the reaction forward; (3) do not overheat — high temperature favors reactants. Temperature is kept moderate as a kinetic compromise.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Catalyst shifting equilibrium | Catalyst speeding equilibrium | A catalyst lowers activation energy for both directions; position and \(K\) are unchanged, only the time to get there. |
| Temperature changing position only | Temperature changing \(K\) | Temperature changes \(K\) itself; concentration and pressure stresses change position only, leaving \(K\) fixed. |
| Pressure changes for all reactions | Pressure changes only mattering for gases | Pressure/volume stresses matter only when gases are present and \(\Delta n \neq 0\); condensed phases are nearly incompressible. |
| Inert gas always shifting equilibrium | Inert gas at constant volume | At constant volume an inert gas changes total pressure but not partial pressures of reactants — no shift. |
| Adding more reactant consuming all of it | Adding more reactant consuming only part | The shift is partial; the system reaches a new equilibrium position, not the original one. |

## Quick Review

1. State Le Châtelier’s principle in one sentence.
2. For \(\ce{2SO2(g) + O2(g) <=> 2SO3(g)}\), does increasing the pressure favor products or reactants?
3. Why does raising the temperature lower the yield of an exothermic reaction?
4. Does adding a catalyst change the equilibrium constant? What does it change?
5. If \(Q > K\) for a reaction at some instant, which direction does the reaction proceed?
6. For \(\ce{N2O4(g) <=> 2NO2(g)}\), what happens to the color when the container volume is increased?

<details>
<summary>Show answers</summary>

1. A system at equilibrium, when subjected to a stress, shifts in the direction that partially relieves that stress.
2. Products: 3 moles of gas on the left versus 2 on the right (\(\Delta n = -1\)), so compression favors the fewer-mole side.
3. Heat is a product of an exothermic reaction; adding heat shifts the equilibrium toward reactants, so less product is present at the new equilibrium.
4. No — \(K\) is unchanged. A catalyst only speeds the approach to equilibrium by lowering the activation energy for both directions.
5. Reverse: the reaction proceeds toward reactants until \(Q\) decreases to \(K\).
6. Increasing volume lowers pressure; the system shifts toward more gas moles (2 \(\ce{NO2}\)), so more brown \(\ce{NO2}\) forms and the color deepens.

</details>

## Related Topics

- Previous: [Equilibrium Constants](02-equilibrium-constants.md)
- Next: [Equilibrium Calculations](04-equilibrium-calculations.md)
- Related: [Fundamental Equilibrium Concepts chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
