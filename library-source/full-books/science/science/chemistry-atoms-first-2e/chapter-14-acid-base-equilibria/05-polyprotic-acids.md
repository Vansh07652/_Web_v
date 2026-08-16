---
title: "Polyprotic Acids"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "14: Acid-Base Equilibria"
topic_number: "5"
source: "chemistry-atoms-first-2e.md"
tags:
  - "polyprotic-acids"
  - "science"
status: "complete"
---

# Polyprotic Acids

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 14: Acid-Base Equilibria](../README.md)  
> **Topic:** 5  
> **Source structure:** OpenStax public textbook outline

## Overview

An acid that can donate more than one proton is **polyprotic**. Phosphoric acid (\(\ce{H3PO4}\)) is **triprotic**: it can give up three protons, one at a time. Carbonic acid (\(\ce{H2CO3}\)) and sulfuric acid (\(\ce{H2SO4}\)) are **diprotic**. The key idea is that the protons are not all released at once. Each step has its own equilibrium constant — \(K_{a1}\), \(K_{a2}\), \(K_{a3}\) — and each successive constant is much smaller than the one before:

\[
\ce{H3PO4(aq) + H2O(l) <=> H3O+(aq) + H2PO4-(aq)} \qquad K_{a1} = 7.5 \times 10^{-3}
\]

\[
\ce{H2PO4-(aq) + H2O(l) <=> H3O+(aq) + HPO4^{2-}(aq)} \qquad K_{a2} = 6.2 \times 10^{-8}
\]

\[
\ce{HPO4^{2-}(aq) + H2O(l) <=> H3O+(aq) + PO4^{3-}(aq)} \qquad K_{a3} = 4.2 \times 10^{-13}
\]

Removing a proton from an already negatively charged species is progressively harder, which is why \(K_{a1} \gg K_{a2} \gg K_{a3}\). For most calculations this means the first step dominates: the \(\ce{H3O+}\) concentration is set almost entirely by \(K_{a1}\), and later steps contribute so little that they can be ignored. Sulfuric acid is the famous exception — its first proton is strong (complete ionization), and its second step is weak but not negligible.

## Why This Matters

Polyprotic acids sit at the center of some of the most important natural systems:

- **The body's carbon dioxide transport:** Dissolved \(\ce{CO2}\) forms carbonic acid, which ionizes in two steps to bicarbonate and carbonate. This \(\ce{H2CO3}\)/\(\ce{HCO3-}\)/\(\ce{CO3^{2-}}\) family is the blood buffer system and the reason exhaling regulates pH.
- **Phosphate in biology:** ATP, DNA, and RNA all contain phosphate groups. The phosphate buffer inside cells uses \(\ce{H2PO4-}\)/\(\ce{HPO4^{2-}}\), and the stepwise constants of phosphoric acid explain which phosphate form exists at body pH.
- **The ocean and the geosphere:** The carbonate system controls ocean pH and the dissolution/precipitation of calcium carbonate — the chemistry behind coral reefs, limestone caves, and the shells of marine organisms.
- **Industry:** Sulfuric acid, the most-produced chemical worldwide, owes its behavior to being diprotic; the second ionization matters in lead-acid batteries and acid processing.
- **Exams:** Polyprotic problems test whether you can set up multiple equilibria, use the "first step dominates" approximation, and recognize when it fails (the \(\ce{H2SO4}\) case).

## Core Concepts

### Stepwise ionization

Each proton leaves in its own step, and each step has its own species and constant. For a diprotic acid \(\ce{H2A}\):

\[
\ce{H2A + H2O <=> H3O+ + HA-} \qquad K_{a1} = \frac{[\ce{H3O+}][\ce{HA-}]}{[\ce{H2A}]}
\]

\[
\ce{HA- + H2O <=> H3O+ + A^{2-}} \qquad K_{a2} = \frac{[\ce{H3O+}][\ce{A^{2-}}]}{[\ce{HA-}]}
\]

The intermediate \(\ce{HA-}\) is amphiprotic — it can lose another proton or accept one back. Each successive \(K_a\) is smaller because removing a proton from a species with a growing negative charge requires more energy: for typical weak diprotic acids \(K_{a2}\) is \(10^4\)–\(10^5\) times smaller than \(K_{a1}\).

### The first step dominates

Because \(K_{a1} \gg K_{a2} \gg K_{a3}\), nearly all of the \(\ce{H3O+}\) in solution comes from the first ionization. Two approximations follow for a weak polyprotic acid:

1. \([\ce{H3O+}] \approx [\ce{HA-}]\) — the first step alone fixes the hydronium concentration.
2. The second and third steps contribute negligible \(\ce{H3O+}\) and can be ignored when calculating pH.

The second step still matters for one specific question: the concentration of the fully deprotonated ion (e.g., \(\ce{CO3^{2-}}\) or \(\ce{PO4^{3-}}\)) is governed by the later constants, but for pH purposes the first step is the whole story. This approximation is only valid when the successive constants differ by many orders of magnitude — which they normally do.

### Sulfuric acid: the exception

Sulfuric acid's first proton is strong, ionizing completely:

\[
\ce{H2SO4(aq) + H2O(l) -> H3O+(aq) + HSO4-(aq)}
\]

The second proton is weak, with \(K_{a2} = 1.2 \times 10^{-2}\) for \(\ce{HSO4-}\). Unlike the tiny \(K_{a2}\) values of weak diprotic acids, this one is large enough that the second ionization contributes measurably — roughly 10% extra hydronium in a 0.10 M solution. Ignoring it produces a noticeably wrong pH, so \(\ce{H2SO4}\) problems must include both steps.

### The fully deprotonated ion is a strong base

The conjugate base left after all protons are removed is the strongest base among the acid's conjugate series. Carbonate ion, \(\ce{CO3^{2-}}\), has \(K_b = K_w/K_{a2} = 1.0 \times 10^{-14}/5.6 \times 10^{-11} = 1.8 \times 10^{-4}\) — strong enough that sodium carbonate solutions are distinctly basic (this connects directly to salt hydrolysis). The see-saw of the previous topic applies at every level of a polyprotic series.

## ELI-10: Explain Like I'm 10

> A polyprotic acid is like a person carrying several heavy boxes up a staircase, setting one down at each landing. The first box comes off easily — the person was carrying it with two hands. Each next box is harder because the person is getting more and more loaded down (and more negative). So the acid gives up its first proton readily, the second reluctantly, and the third almost never. For most questions you only need to watch the first landing; sulfuric acid is the show-off that drops its first box instantly and then still manages to set down a second.

## High-Yield Points

- Polyprotic acids ionize in steps: \(K_{a1} \gg K_{a2} \gg K_{a3}\); each step is harder because the species becomes more negatively charged.
- For weak polyprotic acids, pH is controlled by the first step: \([\ce{H3O+}] \approx \sqrt{K_{a1} \times [\ce{H2A}]_0}\) when ionization is < 5%.
- The intermediate ions (\(\ce{HCO3-}\), \(\ce{H2PO4-}\), \(\ce{HSO4-}\)) are amphiprotic — they can act as acids or bases.
- \(\ce{H2SO4}\) is special: first proton strong (complete), second weak but not negligible (\(K_{a2} = 1.2 \times 10^{-2}\)); include both steps for accurate pH.
- The fully deprotonated ion is the strongest base in the series (e.g., \(\ce{CO3^{2-}}\) with \(K_b = 1.8 \times 10^{-4}\)).
- Common values at 25 °C: \(\ce{H2CO3}\): \(K_{a1} = 4.3 \times 10^{-7}\), \(K_{a2} = 5.6 \times 10^{-11}\); \(\ce{H3PO4}\): \(7.5 \times 10^{-3}\), \(6.2 \times 10^{-8}\), \(4.2 \times 10^{-13}\).
- Later steps set the concentration of the fully deprotonated anion, but rarely affect pH.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| polyprotic acid | An acid that can donate more than one proton | Includes most biologically and industrially important acids (carbonic, phosphoric, sulfuric) |
| monoprotic / diprotic / triprotic | Donates one / two / three protons | Tells you how many equilibrium steps to write |
| stepwise ionization | Protons released one at a time, each with its own \(K_a\) | The reason a single \(K_a\) cannot describe a polyprotic acid |
| \(K_{a1}, K_{a2}, K_{a3}\) | Successive ionization constants, each much smaller than the last | The first step dominates pH; later steps control deep-deprotonation species |
| amphiprotic intermediate | Ion (e.g., \(\ce{HSO4-}\), \(\ce{HCO3-}\)) that can donate or accept a proton | Determines the acid-base behavior of salts of the intermediate |
| first-step approximation | Ignoring \(K_{a2}\) and \(K_{a3}\) for pH calculations | Valid for weak polyprotic acids; fails for \(\ce{H2SO4}\)'s second step |

## How It Works / Step-by-Step Process

### Worked example 1: pH of a weak diprotic acid

**Problem.** Find the pH of 0.10 M carbonic acid, \(\ce{H2CO3}\), using \(K_{a1} = 4.3 \times 10^{-7}\) (and \(K_{a2} = 5.6 \times 10^{-11}\)).

**Solution.**

1. Write the dominant step:

\[
\ce{H2CO3(aq) + H2O(l) <=> H3O+(aq) + HCO3-(aq)} \qquad K_{a1} = \frac{[\ce{H3O+}][\ce{HCO3-}]}{[\ce{H2CO3}]}
\]

2. Let \(x = [\ce{H3O+}] = [\ce{HCO3-}]\) and \([\ce{H2CO3}] = 0.10 - x\); assume \(x \ll 0.10\):

\[
K_{a1} \approx \frac{x^2}{0.10} = 4.3 \times 10^{-7} \quad \Rightarrow \quad x = \sqrt{(4.3 \times 10^{-7})(0.10)} = 2.1 \times 10^{-4}\ \text{M}
\]

3. Check the approximation: \(2.1 \times 10^{-4}/0.10 = 0.21\% < 5\%\), so it holds.

4. Convert to pH:

\[
\mathrm{pH} = -\log(2.1 \times 10^{-4}) = 3.68
\]

5. Verify the second step is negligible: it would add roughly \(K_{a2} = 5.6 \times 10^{-11}\) M of extra \(\ce{H3O+}\) — eleven orders of magnitude below the first step's contribution. Dimensional check: all concentrations are molar (M), and \(K_{a1}\) (dimensionless) times M gives M² under the square root, which returns M.

### Worked example 2: sulfuric acid needs both steps

**Problem.** Find the pH of 0.10 M \(\ce{H2SO4}\), given \(K_{a2} = 1.2 \times 10^{-2}\).

**Solution.**

1. First step (strong, complete): 0.10 M \(\ce{H2SO4}\) produces \([\ce{H3O+}] = 0.10\) M and \([\ce{HSO4-}] = 0.10\) M.
2. Second step is an equilibrium: \(\ce{HSO4-(aq) + H2O(l) <=> H3O+(aq) + SO4^{2-}(aq)}\). Let \(x\) be the extra hydronium and sulfate formed. Then \([\ce{H3O+}] = 0.10 + x\), \([\ce{SO4^{2-}}] = x\), \([\ce{HSO4-}] = 0.10 - x\):

\[
K_{a2} = \frac{(0.10 + x)(x)}{0.10 - x} = 1.2 \times 10^{-2}
\]

3. Because \(x\) is not tiny compared with 0.10, solve the quadratic. Expanding: \(x^2 + 0.10x = 1.2 \times 10^{-3} - 1.2 \times 10^{-2}x\), so \(x^2 + 0.112x - 1.2 \times 10^{-3} = 0\), giving \(x = 9.9 \times 10^{-3}\) M.
4. Total hydronium: \([\ce{H3O+}] = 0.10 + 0.0099 = 0.11\) M. The second step added ~10% — clearly not negligible.

\[
\mathrm{pH} = -\log(0.11) = 0.96
\]

Ignoring the second step would have given pH 1.00 — an error of 0.04 units that matters in precise work.

### Worked example 3: when the 5% rule fails

**Problem.** Estimate the pH of 0.10 M \(\ce{H3PO4}\) (\(K_{a1} = 7.5 \times 10^{-3}\)). Why must the quadratic be solved?

**Solution.**

1. First-step setup with \(x = [\ce{H3O+}] = [\ce{H2PO4-}]\):

\[
K_{a1} = \frac{x^2}{0.10 - x} = 7.5 \times 10^{-3}
\]

2. Try the shortcut \(x^2/0.10 = 7.5 \times 10^{-3}\): \(x = 2.7 \times 10^{-2}\) M. But that is 27% of 0.10 — the < 5% rule fails, so the shortcut is invalid.
3. Solve the full quadratic: \(x^2 + 7.5 \times 10^{-3}x - 7.5 \times 10^{-4} = 0\), giving \(x = 2.4 \times 10^{-2}\) M.
4. Then:

\[
\mathrm{pH} = -\log(2.4 \times 10^{-2}) = 1.62
\]

The second step (\(K_{a2} = 6.2 \times 10^{-8}\)) adds only ~\(10^{-6}\) M of hydronium, so it is still negligible — but the *first* step itself needed the quadratic because phosphoric acid is a moderately strong weak acid.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| All protons released at once | Stepwise release | Protons leave one at a time; each step has its own \(K_a\), and intermediate ions exist in solution. |
| \(\ce{H2SO4}\) treated like a weak diprotic acid | Its two weak steps | The first proton is strong (complete); only the second is weak, and it still contributes ~10% hydronium. |
| Ignoring later steps always | Ignoring them only for pH | Later steps are negligible for pH but control the concentration of the fully deprotonated ion (e.g., \(\ce{PO4^{3-}}\)). |
| First-step shortcut \(x \approx \sqrt{K_{a1}C}\) | Always valid | Fails when ionization exceeds ~5% (e.g., 0.10 M \(\ce{H3PO4}\)); then solve the quadratic. |
| \(\ce{H2CO3}\) and \(\ce{H2SO4}\) behaving alike | Both being "diprotic" | Both are diprotic, but carbonic acid's first step is weak while sulfuric acid's is strong — very different pH behavior. |
| \(K_{a2}\) of the acid | \(K_b\) of the fully deprotonated ion | \(\ce{CO3^{2-}}\)'s basicity comes from \(K_b = K_w/K_{a2}\), not from \(K_{a2}\) itself. |

## Quick Review

1. Why is each successive ionization constant of a polyprotic acid smaller than the previous one?
2. Write the two ionization steps of carbonic acid, \(\ce{H2CO3}\), with their constants' symbols.
3. For a 0.10 M weak diprotic acid with \(K_{a1} = 1.0 \times 10^{-4}\), why can you ignore \(K_{a2}\) when finding pH?
4. Why must both steps be considered for 0.10 M \(\ce{H2SO4}\)?
5. Which species is the strongest base in the series \(\ce{H2CO3}\), \(\ce{HCO3-}\), \(\ce{CO3^{2-}}\)? How would you find its \(K_b\)?

<details>
<summary>Show answers</summary>

1. Removing a proton from an increasingly negative species requires more energy, so each step is less favorable — hence \(K_{a1} \gg K_{a2} \gg K_{a3}\).
2. \(\ce{H2CO3 + H2O <=> H3O+ + HCO3-}\) (\(K_{a1}\)); \(\ce{HCO3- + H2O <=> H3O+ + CO3^{2-}}\) (\(K_{a2}\)).
3. Because \(K_{a2}\) is typically \(10^4\)–\(10^5\) times smaller than \(K_{a1}\); the second step adds a negligible amount of \(\ce{H3O+}\), so pH is set by the first step alone.
4. The first proton is strong (complete ionization giving 0.10 M \(\ce{H3O+}\)), and the second step's \(K_{a2} = 1.2 \times 10^{-2}\) is large enough to add ~10% more hydronium; ignoring it misreports the pH.
5. \(\ce{CO3^{2-}}\), the fully deprotonated ion, is the strongest base; \(K_b(\ce{CO3^{2-}}) = K_w/K_{a2} = 1.0 \times 10^{-14}/5.6 \times 10^{-11} = 1.8 \times 10^{-4}\).

</details>

## Related Topics

- Previous: [Hydrolysis of Salts](04-hydrolysis-of-salts.md)
- Next: [Buffers](06-buffers.md)
- Related: [Acid-Base Equilibria chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
