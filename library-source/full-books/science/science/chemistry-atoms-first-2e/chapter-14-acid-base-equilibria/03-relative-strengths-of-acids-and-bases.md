---
title: "Relative Strengths of Acids and Bases"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "14: Acid-Base Equilibria"
topic_number: "3"
source: "chemistry-atoms-first-2e.md"
tags:
  - "relative-strengths-of-acids-and-bases"
  - "science"
status: "complete"
---

# Relative Strengths of Acids and Bases

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 14: Acid-Base Equilibria](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

Not all acids are created equal. A **strong acid** such as \(\ce{HCl}\) transfers essentially 100% of its protons to water, while a **weak acid** such as acetic acid transfers only a small fraction, leaving a mixture of acid and its conjugate base at equilibrium. The degree of proton transfer is quantified by the **acid ionization constant**, \(K_a\):

\[
K_a = \frac{[\ce{H3O+}][\ce{A-}]}{[\ce{HA}]}
\]

for a weak acid \(\ce{HA}\) reacting with water: \(\ce{HA(aq) + H2O(l) <=> H3O+(aq) + A-(aq)}\). The larger the \(K_a\), the stronger the acid. Weak bases are described the same way with the **base ionization constant**, \(K_b\). Because a conjugate pair shares the water equilibrium, the strengths of an acid and its conjugate base are locked together by

\[
K_a \times K_b = K_w = 1.0 \times 10^{-14}
\]

at 25 °C. This one relationship lets you rank acids and bases, predict reaction direction, and convert any \(K_a\) into the corresponding \(K_b\) — the workhorse skill of this topic.

## Why This Matters

Relative strength is the practical question behind most acid-base chemistry:

- **Choosing an acid or base for a job:** Cleaning products use strong bases (lye), food preservation uses weak acids (citric, acetic), and laboratories pick the weakest acid strong enough for a task so it doesn't attack equipment or materials.
- **Drug absorption:** A drug that is a weak acid exists as a mixture of neutral \(\ce{HA}\) and charged \(\ce{A-}\) at body pH. Only the neutral form crosses membranes easily; the ratio of forms is set by the drug's \(K_a\) (via the Henderson–Hasselbalch idea developed in the buffers topic).
- **Environmental and biological systems:** The carbonate system in blood and the oceans, soil chemistry, and the acidity of rain are all governed by which protonated species dominates — a direct function of relative \(K_a\) values.
- **Exams:** Nearly every acid-base problem — percent ionization, salt pH, buffer pH — begins with \(K_a\) or \(K_b\) and the \(K_a \times K_b = K_w\) relationship.

## Core Concepts

### \(K_a\) measures acid strength; \(K_b\) measures base strength

For the weak acid \(\ce{HA}\), the equilibrium constant is

\[
K_a = \frac{[\ce{H3O+}][\ce{A-}]}{[\ce{HA}]}
\]

and for the weak base \(\ce{B}\), with \(\ce{B(aq) + H2O(l) <=> BH+(aq) + OH-(aq)}\),

\[
K_b = \frac{[\ce{BH+}][\ce{OH-}]}{[\ce{B}]}
\]

Water's concentration is omitted because it is a pure liquid (its activity is effectively constant). Larger \(K_a\) means more proton transfer, hence a stronger acid. Values span many orders of magnitude — from about \(10^{-10}\) for hydrogen cyanide to \(10^{-2}\) or higher for moderately strong acids — so chemists often convert to the compressed scale \(\mathrm{p}K_a = -\log K_a\), where *smaller* \(\mathrm{p}K_a\) means a *stronger* acid.

### The conjugate strength ladder: \(K_a \times K_b = K_w\)

Multiplying the expressions for \(\ce{HA}\) and its conjugate base \(\ce{A-}\) gives a striking simplification:

\[
K_a(\ce{HA}) \times K_b(\ce{A-}) = \frac{[\ce{H3O+}][\ce{A-}]}{[\ce{HA}]} \times \frac{[\ce{HA}][\ce{OH-}]}{[\ce{A-}]} = [\ce{H3O+}][\ce{OH-}] = K_w
\]

At 25 °C this becomes \(K_a \times K_b = 1.0 \times 10^{-14}\). The consequence is a strict see-saw: **the stronger the acid, the weaker its conjugate base.** Hydrogen cyanide is a very weak acid (\(K_a = 4.9 \times 10^{-10}\)), so its conjugate base cyanide is a fairly strong base (\(K_b = 2.0 \times 10^{-5}\)). Conversely, \(\ce{Cl-}\), the conjugate base of the strong acid \(\ce{HCl}\), is such a feeble base that it does not react with water at all.

### Ranking common acids

Common weak acids, with typical \(K_a\) values at 25 °C, rank as follows (largest \(K_a\) = strongest):

| Acid | \(K_a\) (approx.) |
|---|---|
| \(\ce{H3PO4}\) (first proton) | \(7.5 \times 10^{-3}\) |
| \(\ce{HF}\) | \(6.3 \times 10^{-4}\) |
| acetic acid, \(\ce{CH3COOH}\) | \(1.8 \times 10^{-5}\) |
| \(\ce{H2CO3}\) (first proton) | \(4.3 \times 10^{-7}\) |
| \(\ce{HCN}\) | \(4.9 \times 10^{-10}\) |

Strong acids (\(\ce{HCl}\), \(\ce{HNO3}\), \(\ce{H2SO4}\) first proton) sit far above this table with \(K_a\) so large that ionization is treated as complete. The corresponding conjugate bases rank in exactly the reverse order: \(\ce{CN-}\) is the strongest base in the list, \(\ce{H2PO4-}\) the weakest.

### Percent ionization

The fraction of acid molecules that actually transfer a proton is the **percent ionization**:

\[
\%\ \text{ionization} = \frac{[\ce{H3O+}]_{\text{eq}}}{[\ce{HA}]_0} \times 100\%
\]

For weak acids it is always less than 100% and, importantly, it *increases* as the acid is diluted. A 0.10 M acetic acid solution is about 1.3% ionized, but a 0.010 M solution is about 4.2% ionized — the equilibrium shifts toward more dissociation as concentration falls (Le Chatelier's principle at work). Dilution makes a weak acid ionize more, but never to completion.

### Structure and strength

Two structural patterns explain most trends. For binary acids down a group (e.g., \(\ce{HCl}\), \(\ce{HBr}\), \(\ce{HI}\)), acidity increases as the H–X bond weakens, so \(\ce{HI}\) is the strongest. For oxoacids, acidity increases with the number of oxygen atoms attached to the central atom and with the electronegativity of that atom: \(\ce{HClO}\) is a weak acid, while \(\ce{HClO4}\) (four oxygens) is among the strongest. More electronegative atoms and more oxygen atoms pull electron density away from the O–H bond, making the proton easier to release.

## ELI-10: Explain Like I'm 10

> Imagine acids are players who hold a hydrogen "ball" they can pass to water. Strong acids are eager passers — nearly every player throws the ball right away. Weak acids are shy — only a few players pass the ball, and the rest hold onto it. The number \(K_a\) tells you how eager the players are: a big number means lots of passing, a tiny number means almost none. And if a player is really good at holding onto the ball (weak acid), the empty-handed partner left behind (the conjugate base) is really good at catching it.

## High-Yield Points

- \(K_a\) and \(K_b\) quantify proton-transfer tendency for weak acids and bases; larger value = stronger.
- \(K_a \times K_b = K_w = 1.0 \times 10^{-14}\) at 25 °C — the master relationship for conjugate pairs.
- Stronger acid ⇔ weaker conjugate base; strong acids have conjugate bases too weak to react with water.
- \(\mathrm{p}K_a = -\log K_a\); smaller \(\mathrm{p}K_a\) = stronger acid (watch the sign on exams).
- Percent ionization \(= \frac{[\ce{H3O+}]_{\text{eq}}}{[\ce{HA}]_0} \times 100\%\); it rises with dilution for weak acids.
- For weak-acid pH problems, use the approximation \([\ce{H3O+}] \approx \sqrt{K_a [\ce{HA}]_0}\) only when ionization is < 5%; otherwise solve the quadratic.
- Structural trends: weaker H–X bond (down a group) and more oxygens/electronegative atoms in oxoacids both strengthen the acid.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| acid ionization constant (\(K_a\)) | Equilibrium constant for \(\ce{HA + H2O <=> H3O+ + A-}\) | The numeric measure of acid strength |
| base ionization constant (\(K_b\)) | Equilibrium constant for \(\ce{B + H2O <=> BH+ + OH-}\) | The numeric measure of base strength |
| strong acid/base | Donates/accepts protons essentially completely in water | Ionization treated as 100%; no equilibrium calculation needed |
| weak acid/base | Transfers only a fraction of protons, reaching equilibrium | Must be analyzed with \(K_a\) or \(K_b\) |
| percent ionization | Fraction of acid molecules that ionize, times 100 | Reveals how "weak" a weak acid really is; rises with dilution |
| \(\mathrm{p}K_a\) | \(-\log K_a\) | Compresses strength rankings; smaller value = stronger acid |

## How It Works / Step-by-Step Process

### Worked example 1: converting \(K_a\) to \(K_b\) for a conjugate pair

**Problem.** Hydrogen cyanide has \(K_a = 4.9 \times 10^{-10}\). Find \(K_b\) for its conjugate base, cyanide ion, at 25 °C.

**Solution.**

1. Write the conjugate relationship: \(K_a \times K_b = K_w = 1.0 \times 10^{-14}\).
2. Rearrange and substitute:

\[
K_b = \frac{K_w}{K_a} = \frac{1.0 \times 10^{-14}}{4.9 \times 10^{-10}} = 2.0 \times 10^{-5}
\]

Dimensional analysis: both \(K\) values are dimensionless equilibrium constants, so no units appear — but the *magnitude* comparison is meaningful: cyanide's \(K_b\) is \(4 \times 10^4\) times larger than HCN's \(K_a\), so cyanide is a noticeably stronger base than HCN is an acid. This is why sodium cyanide solutions are strongly basic.

### Worked example 2: pH and percent ionization of a weak acid

**Problem.** Acetic acid has \(K_a = 1.8 \times 10^{-5}\). Find the pH and percent ionization of a 0.10 M solution.

**Solution.**

1. Set up the equilibrium: \(\ce{CH3COOH(aq) + H2O(l) <=> H3O+(aq) + CH3COO-(aq)}\), with \(x = [\ce{H3O+}] = [\ce{CH3COO-}]\) at equilibrium and \([\ce{CH3COOH}] = 0.10 - x\).
2. Write the \(K_a\) expression:

\[
K_a = \frac{x \cdot x}{0.10 - x} = 1.8 \times 10^{-5}
\]

3. Try the approximation \(0.10 - x \approx 0.10\) (valid if \(x\) is < 5% of 0.10):

\[
x^2 \approx (1.8 \times 10^{-5})(0.10) = 1.8 \times 10^{-6} \quad \Rightarrow \quad x = 1.3 \times 10^{-3}\ \text{M}
\]

4. Check the 5% rule: \(1.3 \times 10^{-3} / 0.10 = 1.3\% < 5\%\), so the approximation holds. Then

\[
\mathrm{pH} = -\log(1.3 \times 10^{-3}) = 2.87
\]

5. Percent ionization:

\[
\%\ \text{ionization} = \frac{1.3 \times 10^{-3}}{0.10} \times 100\% = 1.3\%
\]

Only about one molecule in 75 actually transfers its proton.

### Worked example 3: dilution increases percent ionization

**Problem.** The same acetic acid (\(K_a = 1.8 \times 10^{-5}\)) is diluted to 0.010 M. Find the percent ionization and compare with the 0.10 M case.

**Solution.**

1. Same setup, new initial concentration:

\[
K_a = \frac{x^2}{0.010 - x} \approx \frac{x^2}{0.010} = 1.8 \times 10^{-5}
\]

2. Solve:

\[
x^2 = 1.8 \times 10^{-7} \quad \Rightarrow \quad x = 4.2 \times 10^{-4}\ \text{M}
\]

3. Percent ionization:

\[
\%\ \text{ionization} = \frac{4.2 \times 10^{-4}}{0.010} \times 100\% = 4.2\%
\]

The check: \(4.2 \times 10^{-4} / 0.010 = 4.2\% < 5\%\), so the approximation still holds. Diluting the acid tenfold roughly tripled its percent ionization (1.3% → 4.2%) — even though the solution is *less* acidic overall, a *larger fraction* of the acid molecules have ionized.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Strong acid | Concentrated acid | Strength = completeness of ionization; concentration = amount present. A dilute strong acid is still strong. |
| Large \(K_a\) | Large \(\mathrm{p}K_a\) | \(K_a\) up = stronger acid, but \(\mathrm{p}K_a\) up = *weaker* acid; the log flips the direction. |
| Strong acid's conjugate base | Neutral spectator | The conjugate base of a strong acid is so weak it doesn't react with water (e.g., \(\ce{Cl-}\)); it is not "basic" in solution. |
| \(K_a\) | \(K_b\) | \(K_a\) describes acid-to-water proton transfer; \(K_b\) describes base-to-water proton acceptance; they multiply to \(K_w\). |
| Percent ionization | \(K_a\) | Percent ionization depends on concentration (rises on dilution); \(K_a\) is a constant at fixed temperature. |
| Approximate \(x \approx \sqrt{K_a C}\) | Exact answer | The square-root shortcut fails when ionization exceeds ~5%; then solve the full quadratic. |

## Quick Review

1. Write the \(K_a\) expression for \(\ce{HF(aq) + H2O(l) <=> H3O+(aq) + F-(aq)}\).
2. Acetic acid has \(K_a = 1.8 \times 10^{-5}\). What is \(K_b\) for acetate ion at 25 °C?
3. Which is the stronger acid: one with \(K_a = 1.0 \times 10^{-4}\) or one with \(\mathrm{p}K_a = 7\)? Explain.
4. A 0.10 M weak acid is 2.0% ionized. What is \([\ce{H3O+}]\) and what is \(K_a\)?
5. Why does percent ionization increase when a weak acid is diluted?

<details>
<summary>Show answers</summary>

1. \(K_a = \frac{[\ce{H3O+}][\ce{F-}]}{[\ce{HF}]}\).
2. \(K_b = K_w/K_a = 1.0 \times 10^{-14} / 1.8 \times 10^{-5} = 5.6 \times 10^{-10}\).
3. The first, because \(K_a = 1.0 \times 10^{-4}\) corresponds to \(\mathrm{p}K_a = 4\), which is smaller than 7 — smaller \(\mathrm{p}K_a\) means stronger acid.
4. \([\ce{H3O+}] = 0.020 \times 0.10 = 2.0 \times 10^{-3}\) M; \(K_a \approx (2.0 \times 10^{-3})^2 / 0.10 = 4.0 \times 10^{-5}\).
5. Dilution shifts the equilibrium \(\ce{HA <=> H+ + A-}\) toward more products (more particles), so a larger fraction of the acid ionizes even though the absolute concentration of \(\ce{H3O+}\) falls.

</details>

## Related Topics

- Previous: [pH and pOH](02-ph-and-poh.md)
- Next: [Hydrolysis of Salts](04-hydrolysis-of-salts.md)
- Related: [Acid-Base Equilibria chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
