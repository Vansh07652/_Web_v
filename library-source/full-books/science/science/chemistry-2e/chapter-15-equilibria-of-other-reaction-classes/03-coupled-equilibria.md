---
title: "Coupled Equilibria"
subject: "Science"
book: "Chemistry 2e"
chapter: "15: Equilibria of Other Reaction Classes"
topic_number: "3"
source: "chemistry-2e.md"
tags:
  - "coupled-equilibria"
  - "science"
status: "complete"
---

# Coupled Equilibria

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 15: Equilibria of Other Reaction Classes](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Rarely does a single equilibrium operate alone. A sparingly soluble solid sits in water containing acids, complexing agents, or other ions, and each of those species sets up its own equilibrium with the ions from the solid. When two or more equilibria share a species, they are **coupled**: changing one shifts the others. The key tools for handling coupled equilibria are simple rules: *add the individual reactions to get the net reaction, and multiply their equilibrium constants to get the net constant*.

These rules explain remarkable chemistry. Silver chloride, nearly insoluble in pure water (\(K_\text{sp} = 1.8 \times 10^{-10}\)), dissolves readily in ammonia because complexation removes Ag⁺ from solution. Magnesium hydroxide, the antacid in milk of magnesia, dissolves in stomach acid because H⁺ removes OH⁻. Amphoteric hydroxides such as Al(OH)₃ dissolve in *both* acid and excess base. In every case, one equilibrium "pulls" another along.

## Why This Matters

Coupled equilibria control natural waters, biology, and industry. Limestone caves and sinkholes form because CO₂-laden rainwater acidifies groundwater, which dissolves CaCO₃ — a coupled dissolution/acid reaction. Ocean acidification weakens coral and shell formation through the same chemistry. In the body, the carbonate buffer, calcium phosphate in bone, and kidney-stone formation all involve coupled equilibria among solubility, acid–base, and complexation reactions. Industrially, gold is leached from ore with cyanide because Au⁺ forms an extremely stable complex ion, and water-treatment plants rely on coupled equilibria to precipitate and remove metals. Understanding how to combine reactions and constants lets you predict when a "insoluble" substance will, in fact, dissolve.

## Core Concepts

### Adding reactions multiplies their constants

Suppose reaction 1 has constant \(K_1\) and reaction 2 has constant \(K_2\). If the net reaction is reaction 1 plus reaction 2, then

\[
K_\text{net} = K_1 \times K_2
\]

This follows directly from the mass-action expressions: when you multiply two equilibrium expressions, species that appear as products in one and reactants in the other cancel. If a reaction must be *reversed* before adding, use its reciprocal constant, \(1/K\). If it must be doubled, square the constant.

### Complexation dissolves precipitates

Silver chloride in ammonia involves the dissolution equilibrium

\[
\text{AgCl}(s) \rightleftharpoons \text{Ag}^+(aq) + \text{Cl}^-(aq) \qquad K_\text{sp} = 1.8 \times 10^{-10}
\]

coupled to the complexation equilibrium

\[
\text{Ag}^+(aq) + 2\text{NH}_3(aq) \rightleftharpoons [\text{Ag}(\text{NH}_3)_2]^+(aq) \qquad K_\text{f} = 1.7 \times 10^7
\]

Adding the two equations cancels Ag⁺ and gives the net reaction

\[
\text{AgCl}(s) + 2\text{NH}_3(aq) \rightleftharpoons [\text{Ag}(\text{NH}_3)_2]^+(aq) + \text{Cl}^-(aq)
\]

with

\[
K_\text{net} = K_\text{sp} \times K_\text{f} = (1.8 \times 10^{-10})(1.7 \times 10^7) = 3.1 \times 10^{-3}
\]

The net constant is small, but it is not zero: ammonia dissolves a *little* AgCl, and in concentrated ammonia enough dissolves to matter — the basis of the classic lab test that distinguishes AgCl from AgI.

### Acids dissolve insoluble hydroxides and carbonates

Acid removes OH⁻ or CO₃²⁻ as fast as the solid releases them, dragging the dissolution equilibrium forward. For magnesium hydroxide,

\[
\text{Mg(OH)}_2(s) \rightleftharpoons \text{Mg}^{2+}(aq) + 2\text{OH}^-(aq) \qquad K_\text{sp}
\]

\[
2\text{H}^+(aq) + 2\text{OH}^-(aq) \rightleftharpoons 2\text{H}_2\text{O}(l) \qquad K = \frac{1}{K_\text{w}^2}
\]

so the net reaction \(\text{Mg(OH)}_2(s) + 2\text{H}^+(aq) \rightleftharpoons \text{Mg}^{2+}(aq) + 2\text{H}_2\text{O}(l)\) has

\[
K_\text{net} = \frac{K_\text{sp}}{K_\text{w}^2}
\]

Because \(K_\text{w} = 1.0 \times 10^{-14}\) is tiny, dividing by \(K_\text{w}^2\) produces an enormous net constant: essentially any hydroxide dissolves in strong acid. Sulfides dissolve in acid by the same logic, except that the S²⁻ released is consumed by two protonation steps, so \(K_\text{net} = K_\text{sp}/(K_{\text{a}1}K_{\text{a}2})\) of H₂S.

### Amphoteric hydroxides dissolve in both acid and base

Al(OH)₃ and Zn(OH)₂ react with H⁺ (base dissolves them) *and* with excess OH⁻ (forming aluminate or zincate ions):

\[
\text{Al(OH)}_3(s) + \text{OH}^-(aq) \rightleftharpoons [\text{Al}(\text{OH})_4]^-(aq)
\]

\[
\text{Zn(OH)}_2(s) + 2\text{OH}^-(aq) \rightleftharpoons [\text{Zn}(\text{OH})_4]^{2-}(aq)
\]

The result is a U-shaped solubility curve: solubility is high in acid, drops to a minimum near neutral pH, and rises again in concentrated base. This behavior is used to separate Al³⁺ from other metal ions in qualitative analysis.

### Coupled equilibria in the environment

Dissolved CO₂ sets up a chain of coupled equilibria:

\[
\text{CO}_2(g) \rightleftharpoons \text{CO}_2(aq) \rightleftharpoons \text{H}_2\text{CO}_3(aq) \rightleftharpoons \text{H}^+ + \text{HCO}_3^- \rightleftharpoons 2\text{H}^+ + \text{CO}_3^{2-}
\]

Adding H⁺ (from more CO₂, as in ocean acidification) drives the last step left, lowering CO₃²⁻ concentration and forcing CaCO₃ to dissolve — the same net reaction that erodes limestone and threatens coral reefs.

## ELI-10: Explain Like I'm 10

Imagine two people holding opposite ends of the same rope, both pulling. One person (the solid dissolving) pulls weakly; the other (acid or ammonia grabbing the ions) pulls hard. The rope moves toward the strong puller, so the solid ends up dissolved. Coupled equilibria are just two pulls on the same rope, and you can predict who wins by multiplying the two pulling strengths.

## High-Yield Points

- Net reaction = sum of individual reactions; net constant = product of individual constants.
- Reverse a reaction → use \(1/K\). Double it → square \(K\). Triple → cube, and so on.
- Solubility + complexation: \(K_\text{net} = K_\text{sp} \times K_\text{f}\).
- Solubility + acid neutralization of OH⁻: \(K_\text{net} = K_\text{sp}/K_\text{w}^2\) (hydroxides).
- Solubility + acid protonation of S²⁻: \(K_\text{net} = K_\text{sp}/(K_{\text{a}1}K_{\text{a}2})\) (sulfides).
- Amphoteric hydroxides (Al³⁺, Zn²⁺) dissolve in acid *and* excess base; solubility is minimum at intermediate pH.
- A small \(K_\text{sp}\) does not mean "never dissolves" — coupling can make it dissolve completely.
- Intermediates that appear and cancel (like Ag⁺ above) are never given concentrations by the net constant; each step still obeys its own equilibrium.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| coupled equilibria | Two or more equilibria sharing a species, so that shifting one shifts the others | The real situation in water, biology, and industry |
| net reaction | Sum of the individual reactions after cancelling shared species | The single equation describing what actually happens |
| \(K_\text{net}\) | Product (or quotient) of the individual constants | The quantitative way to predict whether coupling works |
| complexation | Lewis acid–base reaction forming a complex ion | Removes free metal ions and drags dissolution forward |
| amphoteric | Able to react as acid *and* base; dissolves in both acid and base | Explains Al(OH)₃/Zn(OH)₂ solubility curves and separations |
| formation constant (\(K_\text{f}\)) | Equilibrium constant for complex-ion formation | Measures how strongly a ligand "grabs" a metal ion |

## How It Works / Step-by-Step Process

1. Write every equilibrium that involves the species of interest (dissolution, complexation, acid–base).
2. Decide which direction each reaction must run so that the unwanted ion (e.g., Ag⁺, OH⁻) cancels.
3. Reverse or multiply reactions as needed, adjusting constants (\(1/K\) for reversal, powers for multiples).
4. Add the reactions and multiply the adjusted constants to get \(K_\text{net}\).
5. Interpret \(K_\text{net}\): if it is comfortably larger than about \(10^{-3}\), the coupled process is significant at typical concentrations.

## Example 1: How Much AgCl Dissolves in Ammonia?

For \(\text{AgCl}(s) + 2\text{NH}_3(aq) \rightleftharpoons [\text{Ag}(\text{NH}_3)_2]^+ + \text{Cl}^-\), we already found \(K_\text{net} = K_\text{sp} \times K_\text{f} = (1.8 \times 10^{-10})(1.7 \times 10^7) = 3.1 \times 10^{-3}\).

In 1.0 M NH₃, let \(x\) be the molar solubility of AgCl. Then \([\text{Ag}(\text{NH}_3)_2^+] = [\text{Cl}^-] = x\), and the equilibrium expression is

\[
K_\text{net} = \frac{[\text{Ag}(\text{NH}_3)_2^+][\text{Cl}^-]}{[\text{NH}_3]^2} = \frac{x^2}{(1.0 - 2x)^2}
\]

Take the square root of both sides and solve:

\[
\sqrt{K_\text{net}} = \frac{x}{1.0 - 2x} \qquad \Rightarrow \qquad 0.0557 = \frac{x}{1.0 - 2x}
\]

\[
x = 0.0557(1.0 - 2x) \qquad \Rightarrow \qquad x = 0.0557 - 0.1114x
\]

\[
x(1.1114) = 0.0557 \qquad \Rightarrow \qquad x = 0.050\ \text{mol/L}
\]

That is roughly 4000 times more silver dissolved than the \(1.3 \times 10^{-5}\) mol/L that pure water dissolves. The chemistry of photographic fixing baths and silver recovery exploits exactly this coupling.

## Example 2: Why Milk of Magnesia Works in the Stomach

Mg(OH)₂ has \(K_\text{sp} = 5.6 \times 10^{-12}\) (values near \(10^{-12}\) appear across reference tables). In acid, the net reaction is

\[
\text{Mg(OH)}_2(s) + 2\text{H}^+(aq) \rightleftharpoons \text{Mg}^{2+}(aq) + 2\text{H}_2\text{O}(l)
\]

with

\[
K_\text{net} = \frac{K_\text{sp}}{K_\text{w}^2} = \frac{5.6 \times 10^{-12}}{(1.0 \times 10^{-14})^2} = \frac{5.6 \times 10^{-12}}{1.0 \times 10^{-28}} = 5.6 \times 10^{16}
\]

An equilibrium constant of \(10^{16}\) means the solid is consumed essentially completely as long as acid is available. The hydroxide is "insoluble" in pure water yet fully reactive in stomach acid — which is precisely why it can neutralize excess acid without being absorbed.

## Example 3: Limestone in Acid Rain

Calcite, CaCO₃ (\(K_\text{sp} = 4.5 \times 10^{-9}\)), dissolves in acidic water. The carbonate released is protonated: \(\text{CO}_3^{2-} + \text{H}^+ \rightleftharpoons \text{HCO}_3^-\), whose constant is the reciprocal of the second acid dissociation constant of carbonic acid, \(1/K_{\text{a}2} = 1/(4.7 \times 10^{-11})\).

Combining dissolution with protonation:

\[
K_\text{net} = \frac{K_\text{sp}}{K_{\text{a}2}} = \frac{4.5 \times 10^{-9}}{4.7 \times 10^{-11}} \approx 96
\]

A net constant near \(10^2\) means acid water dissolves calcite readily — enough to carve caves over time and to erode marble statues and building stone exposed to acid rain.

## Common Confusions

| Common Confusion | Correct Understanding |
|---|---|
| "A tiny \(K_\text{sp}\) means the solid can never dissolve." | Coupling with complexation or acid can produce large \(K_\text{net}\); AgCl and Mg(OH)₂ are everyday counterexamples. |
| "To combine equilibria, add the constants." | Constants *multiply* when reactions are added; only the *reactions* add. |
| "When I reverse a reaction, the constant stays the same." | Reversing inverts the constant: \(K \rightarrow 1/K\). |
| "\(K_\text{net}\) tells me the concentration of the cancelled intermediate." | The intermediate's concentration is controlled by the *individual* equilibria, not the net constant. |
| "Amphoteric means a substance dissolves only in acid." | Amphoteric species dissolve in acid *and* in excess base; that is why Al(OH)₃ is soluble at both ends of the pH scale. |
| "The product rule only works for equilibria in gases." | It works for any reactions that can be added, including solubility, complexation, and acid–base steps. |

## Quick Review

1. If reaction A has \(K = 10^{-5}\) and reaction B has \(K = 10^8\), and the net reaction is A + B, what is \(K_\text{net}\)?
2. Why does adding H⁺ dissolve Mg(OH)₂ even though \(K_\text{sp}\) is tiny?
3. What is the net constant for dissolving AgI (\(K_\text{sp} = 8.5 \times 10^{-17}\)) in ammonia, given \(K_\text{f} = 1.7 \times 10^7\) for \([\text{Ag}(\text{NH}_3)_2]^+\)?
4. Why does Al(OH)₃ dissolve in concentrated NaOH?
5. What happens to CaCO₃ solubility as ocean water absorbs more CO₂?

<details>
<summary>Show answers</summary>

1. \(K_\text{net} = 10^{-5} \times 10^8 = 10^3\) — the coupled process is strongly favorable.
2. H⁺ consumes OH⁻ as it is released (\(K = 1/K_\text{w}^2 = 10^{28}\)), so \(K_\text{net} = K_\text{sp}/K_\text{w}^2 \approx 10^{16}\), overwhelming the small \(K_\text{sp}\).
3. \(K_\text{net} = (8.5 \times 10^{-17})(1.7 \times 10^7) = 1.4 \times 10^{-9}\) — far too small to dissolve AgI appreciably, which is why ammonia distinguishes AgCl from AgI.
4. Excess OH⁻ forms the soluble aluminate complex \([\text{Al}(\text{OH})_4]^-\): dissolution coupled to complexation (\(K_\text{net} = K_\text{sp} \times K_\text{f}\)).
5. More CO₂ lowers pH and drives \(\text{CO}_3^{2-} + \text{H}^+ \rightarrow \text{HCO}_3^-\), reducing carbonate concentration and increasing CaCO₃ dissolution — ocean acidification.

</details>

## Related Topics

- Previous: [Lewis Acids and Bases](02-lewis-acids-and-bases.md)
- Next: End of chapter
- Related: [Precipitation and Dissolution](01-precipitation-and-dissolution.md)
- Related: [Equilibria of Other Reaction Classes chapter overview](../README.md)
- Related: [Shifting Equilibria in Chapter 13: Fundamental Equilibrium Concepts](../../chapter-13-fundamental-equilibrium-concepts/03-shifting-equilibria-le-cha-telier-s-principle.md)
- Related: [Acid-Base Equilibria chapter overview](../../chapter-14-acid-base-equilibria/README.md)
- Related: [Free Energy in Chapter 16: Thermodynamics](../../chapter-16-thermodynamics/04-free-energy.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Constants are standard textbook values at 25 °C (AgCl \(K_\text{sp} = 1.8 \times 10^{-10}\); \([ \text{Ag}(\text{NH}_3)_2]^+\) \(K_\text{f} = 1.7 \times 10^7\); \(K_\text{w} = 1.0 \times 10^{-14}\); \(K_{\text{a}2}(\text{H}_2\text{CO}_3) = 4.7 \times 10^{-11}\); Mg(OH)₂ \(K_\text{sp} \approx 5.6 \times 10^{-12}\); CaCO₃ \(K_\text{sp} \approx 4.5 \times 10^{-9}\)). Tabulated values vary slightly among references.
- Last updated: 2026-08-15
