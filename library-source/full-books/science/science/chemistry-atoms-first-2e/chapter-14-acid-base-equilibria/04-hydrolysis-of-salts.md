---
title: "Hydrolysis of Salts"
subject: "Science"
book: "Chemistry: Atoms First 2e"
chapter: "14: Acid-Base Equilibria"
topic_number: "4"
source: "chemistry-atoms-first-2e.md"
tags:
  - "hydrolysis-of-salts"
  - "science"
status: "complete"
---

# Hydrolysis of Salts

> **Book:** [Chemistry: Atoms First 2e](../../README.md)  
> **Chapter:** [Chapter 14: Acid-Base Equilibria](../README.md)  
> **Topic:** 4  
> **Source structure:** OpenStax public textbook outline

## Overview

A salt such as sodium chloride dissolves in water to give a neutral solution, but many salts do not. When a salt contains an ion that is the conjugate of a *weak* acid or base, that ion reacts with water — a process called **hydrolysis** — and the solution turns acidic or basic. The general rule: an anion that is the conjugate base of a weak acid makes the solution basic; a cation that is the conjugate acid of a weak base makes it acidic; ions that are conjugates of strong acids or bases are spectators and leave pH alone.

Because the reacting ion's strength is set by the \(K_a \times K_b = K_w\) relationship, the same calculation skills from the previous topic apply directly. This topic is where the acid-base framework becomes predictive: given only a salt's formula, you can classify its solution as acidic, basic, or neutral, and quantify the pH with a \(K_a\) or \(K_b\) calculation.

## Why This Matters

Predicting the pH of salt solutions is a practical skill in many settings:

- **Medicine and nursing:** Intravenous saline is neutral, but many drug salts are chosen *because* of their hydrolysis behavior — for example, sodium bicarbonate is given intravenously to raise blood pH in metabolic acidosis. Understanding which ion reacts explains why.
- **Biology and food:** Sodium dihydrogen phosphate and disodium hydrogen phosphate are the components of the phosphate buffer that holds intracellular pH steady. Baking soda (sodium bicarbonate) makes batters rise partly by shifting pH; pickling relies on acetic acid and its salts.
- **Aquariums, pools, and agriculture:** The salts dissolved in water determine its pH and hardness; fish and plants are sensitive to both. Adding the wrong salt can shift pH enough to harm organisms.
- **Exams:** Salt-hydrolysis classification ("acidic, basic, or neutral?") is one of the most frequently tested acid-base skills, and the pH calculation is a standard equilibrium problem.

## Core Concepts

### What "hydrolysis" means here

Hydrolysis literally means "splitting with water." In acid-base chemistry it refers to a dissolved ion reacting with water to produce \(\ce{H3O+}\) or \(\ce{OH-}\):

- An ion acting as a weak *acid* toward water (e.g., \(\ce{NH4+}\)): \(\ce{NH4+(aq) + H2O(l) <=> NH3(aq) + H3O+(aq)}\), making the solution **acidic**.
- An ion acting as a weak *base* toward water (e.g., \(\ce{CH3COO-}\)): \(\ce{CH3COO-(aq) + H2O(l) <=> CH3COOH(aq) + OH-(aq)}\), making the solution **basic**.

The key insight: **an ion reacts with water only if it is the conjugate of a weak acid or base.** Conjugates of strong acids (\(\ce{Cl-}\), \(\ce{NO3-}\), \(\ce{Br-}\)) and strong bases (\(\ce{Na+}\), \(\ce{K+}\)) are such feeble proton donors/acceptors that they do not hydrolyze; they are spectators.

### The four cases of salt classification

1. **Salt of a strong acid + strong base** (e.g., \(\ce{NaCl}\), \(\ce{KNO3}\)): neither ion hydrolyzes → **neutral**, pH ≈ 7.
2. **Salt of a weak acid + strong base** (e.g., \(\ce{NaCH3COO}\), \(\ce{NaCN}\), \(\ce{NaF}\)): the anion is a conjugate base of a weak acid and hydrolyzes → **basic**, pH > 7.
3. **Salt of a strong acid + weak base** (e.g., \(\ce{NH4Cl}\), \(\ce{NH4NO3}\)): the cation is a conjugate acid of a weak base and hydrolyzes → **acidic**, pH < 7.
4. **Salt of a weak acid + weak base** (e.g., \(\ce{NH4CH3COO}\)): both ions hydrolyze; the pH depends on the relative strengths of \(K_a\) and \(K_b\). For ammonium acetate, \(K_a(\ce{NH4+}) = K_b(\ce{CH3COO-}) = 5.6 \times 10^{-10}\), so the solution is nearly neutral; unequal values tip the balance one way or the other.

### Finding \(K_a\) or \(K_b\) for the reacting ion

The strength of the hydrolyzing ion is never a new constant — it comes from its conjugate's constant:

\[
K_b(\ce{A-}) = \frac{K_w}{K_a(\ce{HA})} \qquad \text{and} \qquad K_a(\ce{BH+}) = \frac{K_w}{K_b(\ce{B})}
\]

For example, acetate ion is the conjugate base of acetic acid (\(K_a = 1.8 \times 10^{-5}\)), so \(K_b(\ce{CH3COO-}) = 1.0 \times 10^{-14}/1.8 \times 10^{-5} = 5.6 \times 10^{-10}\). Cyanide, conjugate base of the much weaker HCN (\(K_a = 4.9 \times 10^{-10}\)), gets a much larger \(K_b = 2.0 \times 10^{-5}\), which is why sodium cyanide solutions are strongly basic while sodium acetate solutions are only mildly basic.

### Amphiprotic anions: a special case

Anions like \(\ce{HCO3-}\) and \(\ce{H2PO4-}\) can act as either an acid or a base in water — they are amphiprotic. Which behavior wins is decided by comparing two numbers: their ability to donate a proton (measured by their own \(K_a\), the second ionization of the parent acid) against their ability to accept one (measured by \(K_b = K_w/K_{a1}\) of the parent acid). For bicarbonate, \(K_b = 2.3 \times 10^{-8}\) is larger than \(K_a = 5.6 \times 10^{-11}\), so bicarbonate solutions (like baking soda) are mildly basic.

## ELI-10: Explain Like I'm 10

> When a salt dissolves, it splits into two ions, like a dance couple separating. Most of the time the ions just swim around and the water stays neutral. But if one partner is a "proton grabber" or a "proton giver," it starts trading hydrogens with the water and changes how acidic the water is. A grabber makes the water more soapy (basic); a giver makes it more sour (acidic). Ions that come from strong acids or strong bases are too shy to trade at all — they just float along.

## High-Yield Points

- Hydrolysis: a dissolved ion reacts with water to produce \(\ce{H3O+}\) or \(\ce{OH-}\); only conjugates of weak acids/bases hydrolyze.
- Classification: strong + strong → neutral; weak acid + strong base → basic; strong acid + weak base → acidic; weak + weak → depends on relative \(K_a\) vs \(K_b\).
- Spectator ions: \(\ce{Na+}\), \(\ce{K+}\), \(\ce{Cl-}\), \(\ce{NO3-}\), \(\ce{Br-}\) do not affect pH.
- \(K_b(\ce{A-}) = K_w / K_a(\ce{HA})\) and \(K_a(\ce{BH+}) = K_w / K_b(\ce{B})\) — never look up the ion's constant, derive it.
- The weaker the parent acid, the stronger the hydrolyzing anion (e.g., \(\ce{CN-} > \ce{CH3COO-}\) in basicity).
- Amphiprotic anions: compare the anion's own \(K_a\) with its \(K_b = K_w/K_{a1}\) to decide acidic vs basic.
- To calculate pH: set up the hydrolysis equilibrium, write \(K_a\) or \(K_b\), approximate when ionization < 5%, then convert to pH.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| hydrolysis (of salts) | Reaction of a dissolved salt ion with water that changes pH | Explains why salt solutions are often not neutral |
| spectator ion | An ion that does not react with water | Conjugates of strong acids/bases; ignored in pH calculations |
| salt of weak acid + strong base | Salt whose anion is a conjugate base of a weak acid | Produces basic solutions (e.g., sodium acetate, sodium cyanide) |
| salt of strong acid + weak base | Salt whose cation is a conjugate acid of a weak base | Produces acidic solutions (e.g., ammonium chloride) |
| amphiprotic anion | Anion that can donate or accept a proton (\(\ce{HCO3-}\), \(\ce{H2PO4-}\)) | Its solution pH depends on the competition between \(K_a\) and \(K_b\) |
| \(K_a \times K_b = K_w\) | Master relationship linking conjugate strengths | The tool for deriving the hydrolyzing ion's constant |

## How It Works / Step-by-Step Process

### Worked example 1: pH of a basic salt solution

**Problem.** Calculate the pH of 0.50 M sodium acetate, \(\ce{NaCH3COO}\). Acetic acid has \(K_a = 1.8 \times 10^{-5}\); assume 25 °C.

**Solution.**

1. Dissolve and classify: \(\ce{NaCH3COO -> Na+ + CH3COO-}\). Sodium is a spectator; acetate hydrolyzes as a base:

\[
\ce{CH3COO-(aq) + H2O(l) <=> CH3COOH(aq) + OH-(aq)}
\]

2. Get the base constant from the conjugate relationship:

\[
K_b = \frac{K_w}{K_a} = \frac{1.0 \times 10^{-14}}{1.8 \times 10^{-5}} = 5.6 \times 10^{-10}
\]

3. Let \(x = [\ce{OH-}] = [\ce{CH3COOH}]\) at equilibrium; \([\ce{CH3COO-}] = 0.50 - x\). Write and solve:

\[
K_b = \frac{x^2}{0.50 - x} \approx \frac{x^2}{0.50} = 5.6 \times 10^{-10} \quad \Rightarrow \quad x = \sqrt{(5.6 \times 10^{-10})(0.50)} = 1.7 \times 10^{-5}\ \text{M}
\]

Check: \(1.7 \times 10^{-5}/0.50 = 0.0034\% < 5\%\), so the approximation is fine.
4. Convert: \(\mathrm{pOH} = -\log(1.7 \times 10^{-5}) = 4.78\), so

\[
\mathrm{pH} = 14.00 - 4.78 = 9.22
\]

The 0.50 M solution of a salt of a weak acid and strong base is clearly basic.

### Worked example 2: pH of an acidic salt solution

**Problem.** Calculate the pH of 0.20 M ammonium chloride, \(\ce{NH4Cl}\). Ammonia has \(K_b = 1.8 \times 10^{-5}\).

**Solution.**

1. Dissolve and classify: \(\ce{NH4Cl -> NH4+ + Cl-}\). Chloride is a spectator; ammonium hydrolyzes as an acid:

\[
\ce{NH4+(aq) + H2O(l) <=> NH3(aq) + H3O+(aq)}
\]

2. Derive the acid constant:

\[
K_a(\ce{NH4+}) = \frac{K_w}{K_b(\ce{NH3})} = \frac{1.0 \times 10^{-14}}{1.8 \times 10^{-5}} = 5.6 \times 10^{-10}
\]

3. Let \(x = [\ce{H3O+}] = [\ce{NH3}]\); \([\ce{NH4+}] = 0.20 - x\). Write and solve:

\[
K_a = \frac{x^2}{0.20 - x} \approx \frac{x^2}{0.20} = 5.6 \times 10^{-10} \quad \Rightarrow \quad x = \sqrt{(5.6 \times 10^{-10})(0.20)} = 1.1 \times 10^{-5}\ \text{M}
\]

4. Convert:

\[
\mathrm{pH} = -\log(1.1 \times 10^{-5}) = 4.98
\]

Ammonium chloride solutions are acidic — the mirror image of sodium acetate.

### Worked example 3: classifying salts without calculation

**Problem.** Predict whether 0.10 M solutions of \(\ce{KNO3}\), \(\ce{NaCN}\), and \(\ce{NH4NO3}\) are acidic, basic, or neutral, and rank the two reactive ones by pH.

**Solution.**

1. \(\ce{KNO3}\): \(\ce{K+}\) and \(\ce{NO3-}\) are both conjugates of strong base/strong acid → spectators → **neutral**, pH ≈ 7.
2. \(\ce{NaCN}\): sodium is a spectator; cyanide is the conjugate base of weak HCN → hydrolyzes → **basic**. Its \(K_b = K_w/K_a = 1.0 \times 10^{-14}/4.9 \times 10^{-10} = 2.0 \times 10^{-5}\).
3. \(\ce{NH4NO3}\): nitrate is a spectator; ammonium is the conjugate acid of weak ammonia → hydrolyzes → **acidic**, with \(K_a = 5.6 \times 10^{-10}\).
4. Ranking: because \(K_b(\ce{CN-}) = 2.0 \times 10^{-5}\) is far larger than \(K_a(\ce{NH4+}) = 5.6 \times 10^{-10}\), a 0.10 M cyanide solution is more strongly basic (pH well above 11) than the ammonium solution is acidic (pH near 5). The magnitudes of the constants, not the salt's formula alone, set how far the pH moves.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| "Salts are neutral" | Reality for most salts | Only salts of strong acid + strong base (e.g., \(\ce{NaCl}\)) are neutral; most salts hydrolyze. |
| \(\ce{NH4Cl}\) being basic | Its ammonia origin | Ammonium is an acid, not a base; \(\ce{NH4Cl}\) solutions are acidic. |
| \(\ce{NaCH3COO}\) being acidic | Its acetic-acid origin | Acetate is the *base* here; sodium acetate solutions are basic. |
| Both ions hydrolyzing (weak + weak) | One ion controlling pH | Both react, but the larger of \(K_a\) vs \(K_b\) (of the two ions) decides the pH direction. |
| Using \(K_a\) of the salt | Deriving \(K_b\) from the parent acid | The hydrolyzing ion's constant must be derived via \(K_w\); the parent acid's \(K_a\) alone is not the ion's constant. |
| Dissolving | Hydrolysis | Dissolving just separates ions; hydrolysis is the subsequent reaction of those ions with water. |

## Quick Review

1. Why is a solution of \(\ce{NaCl}\) neutral while \(\ce{NaCN}\) is basic? Identify the reacting ion in each.
2. Write the hydrolysis reaction that makes \(\ce{NH4Cl}\) solutions acidic.
3. Sodium fluoride (\(K_a\) of HF ≈ \(6.3 \times 10^{-4}\)) — acidic, basic, or neutral? Why?
4. Derive \(K_b\) for fluoride ion from the data in question 3.
5. A salt contains \(\ce{HCO3-}\). How do you decide whether its solution is acidic or basic?

<details>
<summary>Show answers</summary>

1. \(\ce{NaCl}\)'s ions (\(\ce{Na+}\), \(\ce{Cl-}\)) are conjugates of a strong base and strong acid, so neither hydrolyzes. In \(\ce{NaCN}\), cyanide is the conjugate base of weak HCN and hydrolyzes to produce \(\ce{OH-}\).
2. \(\ce{NH4+(aq) + H2O(l) <=> NH3(aq) + H3O+(aq)}\).
3. Basic: fluoride is the conjugate base of a weak acid (HF) and hydrolyzes to produce \(\ce{OH-}\); sodium is a spectator.
4. \(K_b(\ce{F-}) = K_w/K_a(\ce{HF}) = 1.0 \times 10^{-14}/6.3 \times 10^{-4} = 1.6 \times 10^{-11}\).
5. Compare the anion's ability to act as an acid (its own \(K_a\), the parent's second ionization) with its ability to act as a base (\(K_b = K_w/K_{a1}\) of the parent). If \(K_b > K_a\), basic; if \(K_a > K_b\), acidic.

</details>

## Related Topics

- Previous: [Relative Strengths of Acids and Bases](03-relative-strengths-of-acids-and-bases.md)
- Next: [Polyprotic Acids](05-polyprotic-acids.md)
- Related: [Acid-Base Equilibria chapter overview](../README.md)

## Source Notes

- Book: Chemistry: Atoms First 2e
- Local outline source: `chemistry-atoms-first-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-atoms-first-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
