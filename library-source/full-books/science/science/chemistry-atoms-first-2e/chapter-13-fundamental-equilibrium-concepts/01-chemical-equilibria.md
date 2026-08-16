---
title: "Chemical Equilibria"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "13: Fundamental Equilibrium Concepts"
topic_number: "1"
source: "chemistry-atoms-first-2e.md"
tags:
  - "chemical-equilibria"
  - "science"
status: "complete"
---

# Chemical Equilibria

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 13: Fundamental Equilibrium Concepts](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

Many chemical reactions are **reversible**: products can react to regenerate the reactants. When a reversible reaction runs in a closed system, the forward and reverse processes eventually balance, and the system reaches **chemical equilibrium** — a dynamic state in which the forward and reverse reaction rates are equal and the concentrations of all species stop changing macroscopically. Equilibrium is *dynamic*, not static: molecules keep reacting in both directions; the system only looks still because the rates match. The equilibrium state is also *path-independent*: at a given temperature, the same final composition is reached whether you start from pure reactants or pure products.

For a generic reaction \(\text{aA} + \text{bB} \rightleftharpoons \text{cC} + \text{dD}\), the equilibrium composition obeys the **law of mass action**: the ratio

\[
\frac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b}
\]

takes a characteristic constant value at a given temperature — the equilibrium constant \(K\), developed fully in the next topic. This topic establishes what equilibrium *is*: how to recognize it, why it happens, and why the same endpoint appears from either direction.

## Why This Matters

Nearly every reaction that matters in industry and biology is reversible and reaches equilibrium. The Haber–Bosch process for ammonia, \(\text{N}_2(g) + 3\text{H}_2(g) \rightleftharpoons 2\text{NH}_3(g)\), never converts all of the nitrogen and hydrogen; the plant operates around an equilibrium and recycles the unreacted gases. In the body, oxygen binding to hemoglobin, the bicarbonate buffer system \(\text{CO}_2 + \text{H}_2\text{O} \rightleftharpoons \text{H}_2\text{CO}_3 \rightleftharpoons \text{H}^+ + \text{HCO}_3^-\) that controls blood pH, and the transport of carbon dioxide from tissues to lungs are all equilibrium systems. Equilibrium as a balance of rates — not a stopped reaction — is the foundation for the rest of this chapter and for the acid-base equilibria of Chapter 14.

## Core Concepts

### Reversible reactions and the double arrow

A reaction is reversible when the products can recombine to form the reactants under the same conditions. The double arrow \(\rightleftharpoons\) signals this. In practice, some reactions (such as combustion) behave as if irreversible because their equilibrium lies so far toward products that the reverse reaction is undetectable — whether a reaction "goes to completion" is really a question of *where* its equilibrium lies.

### Dynamic equilibrium: equal rates, not zero rates

At equilibrium the forward and reverse rates are equal, so there is no net change in concentrations — but molecules are still colliding and reacting. The classic evidence is the radioactive-tracer experiment: if a tiny amount of radioactive iodine is added to a flask of \(\text{H}_2 + \text{I}_2 \rightleftharpoons 2\text{HI}\) at equilibrium, radioactive HI soon appears. The label migrates because both reactions are still running; equilibrium is a balance of opposing rates, not a stopped reaction.

### Macroscopic constancy

Because the rates are equal, every observable concentration-dependent property — color, pH, pressure of a gas mixture — holds steady at equilibrium. A sealed flask of brown \(\text{NO}_2\) and colorless \(\text{N}_2\text{O}_4\) (\(\text{N}_2\text{O}_4 \rightleftharpoons 2\text{NO}_2\)) shows a constant brown intensity at equilibrium, even though \(\text{NO}_2\) molecules keep forming and dimerizing.

### Path independence

The equilibrium composition depends on temperature and on the equilibrium constant — not on how the mixture was prepared. Starting from pure \(\text{H}_2\) and \(\text{I}_2\), or from pure HI, at the same temperature gives the same mass-action ratio at equilibrium. This is why equilibrium calculations are so powerful: the final state can be predicted from stoichiometry and \(K\) alone, without knowing the reaction history.

### Reading concentration–time graphs

On a concentration-versus-time plot, reactant concentrations fall and product concentrations rise as the reaction proceeds, and all curves flatten as equilibrium approaches. The curves flatten as the forward rate (falling) and reverse rate (rising) converge. Where they become horizontal is equilibrium — the reaction has not stopped, it has balanced.

## ELI-10: Explain Like I'm 10

Imagine two kids passing a ball back and forth across a fence. The ball is always moving, but the number of balls on each side stays the same. Chemical equilibrium is like that: molecules keep reacting in both directions, but the amounts on each side no longer change.

## High-Yield Points

- Equilibrium = forward rate equals reverse rate; it is dynamic, not static.
- Concentrations stay constant at equilibrium — but the reaction never stops.
- The equilibrium ratio at a given temperature is the same no matter which direction the system approaches from.
- The double arrow \(\rightleftharpoons\) signals a reversible reaction.
- For \(\text{aA} + \text{bB} \rightleftharpoons \text{cC} + \text{dD}\), the ratio \([\text{C}]^c[\text{D}]^d/[\text{A}]^a[\text{B}]^b\) is constant at fixed \(T\).
- Equilibrium does not mean equal concentrations; it means constant concentrations.
- A catalyst speeds the approach to equilibrium but does not change the equilibrium position.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| reversible reaction | A reaction that can proceed in both directions | The precondition for equilibrium |
| dynamic equilibrium | Forward and reverse rates equal; molecules still reacting | The correct mental model of a "balanced" system |
| equilibrium position | The particular composition at which equilibrium is reached | Determined by \(K\) and temperature |
| law of mass action | The relationship between equilibrium concentrations and \(K\) | The quantitative backbone of this chapter |
| path independence | The same final state is reached regardless of starting direction | Lets us predict equilibrium from either side |

## How It Works / Step-by-Step Process

1. Write the balanced equation with the double arrow and physical states.
2. Identify the species that belong in the equilibrium expression (gases and aqueous solutes; pure solids and pure liquids are excluded — next topic).
3. Track concentrations (or partial pressures) until they stop changing — that is equilibrium.
4. Use the law of mass action to verify equilibrium, or to measure how far the system is from it using the reaction quotient \(Q\).
5. Remember: at equilibrium the rates are equal, but the concentrations need not be.

## Example 1: The Classic Hydrogen–Iodine System

At 445 °C, \(\text{H}_2(g) + \text{I}_2(g) \rightleftharpoons 2\text{HI}(g)\). A 1.00 L flask is charged with 0.100 mol \(\text{H}_2\) and 0.100 mol \(\text{I}_2\) and allowed to equilibrate; analysis finds 0.156 mol HI.

**Verify equilibrium.** HI rose by 0.156 M. Because the coefficient of HI is 2, each reactant fell by half of that amount: \(0.156/2 = 0.078\) M. Equilibrium concentrations: \([\text{HI}] = 0.156\) M, \([\text{H}_2] = 0.100 - 0.078 = 0.022\) M, \([\text{I}_2] = 0.022\) M. Substitute into the mass-action ratio:

\[
\frac{[\text{HI}]^2}{[\text{H}_2][\text{I}_2]} = \frac{(0.156)^2}{(0.022)(0.022)}
\]

\[
\frac{0.0243}{0.000484} = 50.3
\]

This matches the accepted \(K_c = 50.2\) at 445 °C (within rounding) — the system is at equilibrium.

## Example 2: Same Endpoint from the Product Side

Start a second 1.00 L flask at 445 °C with 0.200 mol of HI only — no \(\text{H}_2\), no \(\text{I}_2\). HI decomposes: \(2\text{HI}(g) \rightleftharpoons \text{H}_2(g) + \text{I}_2(g)\). Suppose analysis at equilibrium shows \([\text{HI}] = 0.156\) M again. Then \(0.200 - 0.156 = 0.044\) M of HI decomposed, producing \(0.044/2 = 0.022\) M of each product:

\[
\frac{[\text{HI}]^2}{[\text{H}_2][\text{I}_2]} = \frac{(0.156)^2}{(0.022)(0.022)} = 50.3
\]

Same ratio, same equilibrium composition, approached from the opposite direction: what matters is temperature and the equilibrium constant, not the starting mixture — path independence in action.

## Example 3: The Tracer Experiment — Proof That Equilibrium Is Dynamic

A chemist adds a tiny amount of radioactive iodine (iodine-131 labeled \(\text{I}_2\)) to a flask of \(\text{H}_2 + \text{I}_2 \rightleftharpoons 2\text{HI}\) already at equilibrium — too little to change concentrations. If equilibrium were static, the label would stay in \(\text{I}_2\). Instead, radioactive HI appears over time: both reactions still run, and the label rides along. This is the standard demonstration that equilibrium is dynamic.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| "At equilibrium the reaction stops." | It continues in both directions at equal rates; the tracer experiment proves it. |
| "Equilibrium means equal concentrations." | It means constant concentrations; the *ratio* (not the amounts) is fixed by \(K\). |
| "Equilibrium is reached instantly." | Rates change as concentrations change; the system relaxes over time until the rates match. |
| "Starting from reactants versus products gives different equilibria." | At the same temperature the ratio \(K\) is identical; only the absolute amounts differ. |
| "A catalyst changes the equilibrium position." | Catalysts speed the approach; the equilibrium position is unchanged. |

## Quick Review

1. Define dynamic equilibrium in terms of forward and reverse rates.
2. Why do concentrations stop changing at equilibrium even though molecules keep reacting?
3. Two flasks reach equilibrium for the same reaction at the same temperature, one starting from reactants and one from products. What is identical, and what may differ?
4. In Example 1, why did each reactant concentration fall by 0.078 M while HI rose by 0.156 M?
5. What does the radioactive-iodine tracer experiment demonstrate?

<details>
<summary>Show answers</summary>

1. The forward and reverse rates are equal, so there is no net change in concentrations even though both reactions continue.
2. Equal rates mean every product molecule formed is balanced by one decomposing, so macroscopic concentrations hold steady.
3. The equilibrium constant \(K\) (and therefore the mass-action ratio) is identical; the absolute amounts of material may differ.
4. Stoichiometry: two HI form for each H₂ consumed, so HI changes at twice the rate of each reactant.
5. That equilibrium is dynamic — labeled iodine migrates into HI, showing the forward and reverse reactions still run.

</details>

## Related Topics

- Previous: Start of chapter
- Next: [Equilibrium Constants](02-equilibrium-constants.md)
- Related: [Equilibrium Constants](02-equilibrium-constants.md)
- Related: [Equilibrium Calculations](04-equilibrium-calculations.md)
- Related: [Free Energy in Chapter 12](../../chapter-12-thermodynamics/04-free-energy.md)
- Related: [Fundamental Equilibrium Concepts chapter overview](../README.md)
- Related: [Acid-Base Equilibria in Chapter 14](../../chapter-14-acid-base-equilibria/README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Equilibrium data: \(K_c = 50.2\) at 445 °C for \(\text{H}_2 + \text{I}_2 \rightleftharpoons 2\text{HI}\) is a widely used textbook value based on classic measurements; the tracer experiment uses iodine-131, a standard textbook demonstration of dynamic equilibrium.
- Last updated: 2026-08-16
