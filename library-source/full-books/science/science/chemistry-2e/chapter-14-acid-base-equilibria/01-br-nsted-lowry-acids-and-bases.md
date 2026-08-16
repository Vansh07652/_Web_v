---
title: "Brønsted-Lowry Acids and Bases"
subject: "Science"
book: "Chemistry 2e"
chapter: "14: Acid-Base Equilibria"
topic_number: "1"
source: "chemistry-2e.md"
tags:
  - "br-nsted-lowry-acids-and-bases"
  - "science"
status: "complete"
---

# Brønsted-Lowry Acids and Bases

> **Book:** [Chemistry 2e](../../README.md)  
> **Chapter:** [Chapter 14: Acid-Base Equilibria](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

The Brønsted-Lowry theory defines acids and bases by what they do with a proton (a hydrogen ion, \(\ce{H+}\)). An **acid** is a proton **donor**; a **base** is a proton **acceptor**. This definition expands on the older Arrhenius idea (limited to water and \(\ce{OH-}\) production) so acid-base behavior can be recognized in any solvent — even the gas phase.

The key structural idea is the **conjugate pair**. When an acid donates a proton, what remains is its **conjugate base**; when a base accepts one, the result is its **conjugate acid**. Every acid-base reaction therefore involves two pairs:

\[
\underbrace{\ce{HCl}}_{\text{acid}} + \underbrace{\ce{H2O}}_{\text{base}} \rightleftharpoons \underbrace{\ce{H3O+}}_{\text{conj. acid}} + \underbrace{\ce{Cl-}}_{\text{conj. base}}
\]

Water is special: it can act as either an acid or a base depending on its partner. Species that can do both are **amphiprotic**. This chapter uses the Brønsted-Lowry framework to build the pH scale, compare acid strengths, and understand buffers and titrations.

## Why This Matters

Acid-base chemistry is everywhere in the body and the environment, and the Brønsted-Lowry view is its language:

- **Human physiology:** Exhaled carbon dioxide exists in blood mainly as carbonic acid and bicarbonate, \(\ce{H2CO3}\) / \(\ce{HCO3-}\), a conjugate pair that keeps blood pH near 7.4. Kidney and lung function are, in essence, acid-base management.
- **Drug behavior:** Many medications are weak acids or bases. Their ability to cross membranes depends on which protonated form dominates at body pH — a direct consequence of these equilibria (developed further in later topics).
- **Environmental chemistry:** Acid rain, ocean acidification from dissolved CO₂, and soil chemistry are all proton-transfer problems. Understanding who donates and who accepts a proton lets you reason about these systems without memorizing reactions.

The definitions also clear up a common confusion: a substance need not contain \(\ce{OH-}\) to be a base. Ammonia, \(\ce{NH3}\), is a classic base because it *accepts* a proton.

## Core Concepts

### Acids donate protons; bases accept them

An acid is anything that can give up \(\ce{H+}\); a base is anything that can take it. The proton is a bare hydrogen nucleus — tiny and strongly attracted to electron pairs — so in water it never exists alone; it is always attached to a water molecule as the **hydronium ion**, \(\ce{H3O+}\). Writing \(\ce{H+}(aq)\) is shorthand for \(\ce{H3O+}(aq)\).

Consider ammonia in water:

\[
\ce{NH3(aq) + H2O(l) \rightleftharpoons NH4+(aq) + OH-(aq)}
\]

Here \(\ce{NH3}\) accepts a proton (it is the base) and \(\ce{H2O}\) donates one (it is the acid). Note that \(\ce{NH3}\) contains no oxygen and no \(\ce{OH-}\) — yet it is unmistakably a base under this definition.

### Conjugate acid-base pairs

A **conjugate pair** differs by exactly one proton. Remove a proton from an acid and you get its conjugate base; add a proton to a base and you get its conjugate acid.

- \(\ce{HCl}\) / \(\ce{Cl-}\): chloride is the conjugate base of hydrochloric acid.
- \(\ce{NH4+}\) / \(\ce{NH3}\): ammonium is the conjugate acid of ammonia.
- \(\ce{H2O}\) / \(\ce{OH-}\): hydroxide is the conjugate base of water.

In any acid-base reaction, the acid and base on the left are converted into their conjugates on the right. Identifying the two pairs is the fundamental skill: find the species that differ by one \(\ce{H+}\), and they form a pair.

### Amphiprotic species

Water, bicarbonate (\(\ce{HCO3-}\)), dihydrogen phosphate (\(\ce{H2PO4-}\)), and hydrogen sulfate (\(\ce{HSO4-}\)) can donate or accept a proton:

- With a strong base like \(\ce{OH-}\), bicarbonate acts as an acid: \(\ce{HCO3- + OH- \rightleftharpoons CO3^{2-} + H2O}\).
- With a strong acid, bicarbonate acts as a base: \(\ce{HCO3- + H3O+ \rightleftharpoons H2CO3 + H2O}\).

This dual behavior makes bicarbonate the central buffer species in blood.

### Strong versus weak: complete versus partial proton transfer

Strong acids and bases transfer protons essentially completely in water; weak ones transfer only partially, establishing an equilibrium. Common strong acids include \(\ce{HCl}\), \(\ce{HBr}\), \(\ce{HI}\), \(\ce{HNO3}\), \(\ce{H2SO4}\) (first proton), and \(\ce{HClO4}\). Common strong bases are the hydroxides of group 1 metals (like \(\ce{NaOH}\), \(\ce{KOH}\)) and of the heavier group 2 metals (like \(\ce{Ba(OH)2}\)). Everything else commonly encountered — acetic acid, carbonic acid, ammonia — is weak and described by an equilibrium constant (next topics). Strong means "goes to completion"; weak means "use \(K_a\) or \(K_b\)."

### Water's self-ionization: the connection to pH

Water autoionizes:

\[
\ce{2H2O(l) <=> H3O+(aq) + OH-(aq)}
\]

At 25 °C the ion product is

\[
K_w = [\ce{H3O+}][\ce{OH-}] = 1.0 \times 10^{-14}
\]

This single equation links every acid-base calculation: knowing one of \([\ce{H3O+}]\) or \([\ce{OH-}]\) gives the other, and it is the foundation of the pH and pOH scale in the next topic.

## ELI-10: Explain Like I’m 10

> Think of a proton as a ball that molecules pass to each other. An acid is a molecule that passes the ball away; a base is one that catches it. Whenever the ball moves, the passer turns into its "empty-handed" partner and the catcher turns into its "holding-the-ball" partner — those partners are the conjugate pair. Some molecules, like water, can do both jobs depending on who they meet.

## High-Yield Points

- Brønsted-Lowry: acid = proton donor; base = proton acceptor. No \(\ce{OH-}\) required for basicity.
- \(\ce{H+}(aq)\) is shorthand for hydronium, \(\ce{H3O+}(aq)\).
- A conjugate pair differs by exactly one proton: acid ⇌ conjugate base + \(\ce{H+}\).
- Every acid-base reaction contains two conjugate pairs; label all four species.
- Amphiprotic species (e.g., \(\ce{H2O}\), \(\ce{HCO3-}\), \(\ce{H2PO4-}\), \(\ce{HSO4-}\)) can donate or accept a proton.
- Strong acids/bases ionize completely; weak ones establish equilibria (quantified by \(K_a\)/\(K_b\) in later topics).
- Water autoionizes with \(K_w = [\ce{H3O+}][\ce{OH-}] = 1.0 \times 10^{-14}\) at 25 °C.
- The stronger an acid, the weaker its conjugate base (and vice versa) — a preview of the relative-strengths topic.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Brønsted-Lowry acid | Any species that donates a proton (\(\ce{H+}\)) | Broadens acid-base chemistry beyond Arrhenius's water-only \(\ce{OH-}\) definition |
| Brønsted-Lowry base | Any species that accepts a proton | Explains bases like ammonia that contain no hydroxide |
| conjugate acid-base pair | Two species differing by one proton | The organizing structure for identifying every acid-base reaction |
| hydronium ion (\(\ce{H3O+}\)) | The form a proton takes in water | The species actually present whenever "\(\ce{H+}\)" is written in aqueous solution |
| amphiprotic | Able to act as either an acid or a base | Makes water and bicarbonate the flexible buffers of biological systems |
| \(K_w\) | Ion product of water, \(1.0 \times 10^{-14}\) at 25 °C | The master link between \([\ce{H3O+}]\) and \([\ce{OH-}]\); basis of the pH scale |

## How It Works / Step-by-Step Process

### Worked example 1: labeling the species in an acid-base reaction

**Problem.** For \(\ce{HF(aq) + H2O(l) <=> H3O+(aq) + F-(aq)}\), label the acid, base, conjugate acid, and conjugate base.

**Solution.**

1. Find species that differ by one proton: \(\ce{HF}\)/\(\ce{F-}\) form a conjugate pair; \(\ce{H2O}\)/\(\ce{H3O+}\) form the other.
2. Track the proton: \(\ce{HF}\) gives one up, so it is the **acid** and \(\ce{F-}\) its **conjugate base**; \(\ce{H2O}\) gains it, so it is the **base** and \(\ce{H3O+}\) its **conjugate acid**.
3. Summary: acid \(\ce{HF}\), base \(\ce{H2O}\), conjugate acid \(\ce{H3O+}\), conjugate base \(\ce{F-}\).

### Worked example 2: predicting products from a conjugate-pair analysis

**Problem.** Predict the products when ammonia accepts a proton from water, and identify the pairs.

**Solution.**

1. Ammonia accepts a proton: \(\ce{NH3}\) is the base; it becomes \(\ce{NH4+}\) (its conjugate acid).
2. Water donates the proton: \(\ce{H2O}\) is the acid; it becomes \(\ce{OH-}\) (its conjugate base).
3. Balanced reaction:

\[
\ce{NH3(aq) + H2O(l) <=> NH4+(aq) + OH-(aq)}
\]

Pairs: \(\ce{NH4+/NH3}\) and \(\ce{H2O/OH-}\). The product side contains hydroxide even though no starting base "contained" \(\ce{OH-}\) — proton transfer created it.

### Worked example 3: using \(K_w\) to find a missing concentration

**Problem.** In a solution at 25 °C, \([\ce{H3O+}] = 2.5 \times 10^{-4}\ \text{M}\). Find \([\ce{OH-}]\).

**Solution.**

1. Write the ion-product expression: \(K_w = [\ce{H3O+}][\ce{OH-}] = 1.0 \times 10^{-14}\).
2. Solve for the unknown by dividing both sides:

\[
[\ce{OH-}] = \frac{K_w}{[\ce{H3O+}]} = \frac{1.0 \times 10^{-14}}{2.5 \times 10^{-4}} = 4.0 \times 10^{-11}\ \text{M}
\]

Dimensional analysis: \((\text{M}^2)/(\text{M}) = \text{M}\), so the answer is in molarity. The solution is acidic (more \(\ce{H3O+}\) than \(\ce{OH-}\)) — quantified by the pH scale next.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Base containing \(\ce{OH-}\) | Base accepting a proton | \(\ce{NH3}\) and \(\ce{CO3^{2-}}\) are bases with no hydroxide; basicity is about accepting \(\ce{H+}\), not containing \(\ce{OH-}\). |
| Conjugate pair members | Any acid and base in the equation | Pair members differ by exactly one proton; \(\ce{HCl}\) and \(\ce{H2O}\) in the intro reaction are NOT a pair. |
| \(\ce{H+}\) alone in water | \(\ce{H3O+}\) | A bare proton cannot exist in water; writing \(\ce{H+}(aq)\) is shorthand for hydronium. |
| Strong acid | Concentrated acid | Strength is about how completely a substance ionizes, not how much is present; a dilute strong acid is still "strong." |
| Amphiprotic | Amphoteric (neutral in all senses) | Amphiprotic specifically means able to donate or accept a proton; the term applies to species, not to reactions. |

## Quick Review

1. Define acid and base in the Brønsted-Lowry sense.
2. In \(\ce{HNO2(aq) + H2O(l) <=> H3O+(aq) + NO2-(aq)}\), identify all four species by role.
3. Why can water act as both acid and base? What is the term?
4. Write the two conjugate pairs in the reaction of \(\ce{HCO3-}\) with \(\ce{OH-}\).
5. At 25 °C, if \([\ce{OH-}] = 1.0 \times 10^{-3}\ \text{M}\), what is \([\ce{H3O+}]\)? Acidic or basic?

<details>
<summary>Show answers</summary>

1. An acid donates a proton; a base accepts a proton.
2. Acid \(\ce{HNO2}\), base \(\ce{H2O}\), conjugate acid \(\ce{H3O+}\), conjugate base \(\ce{NO2-}\).
3. Water can lose a proton (acid → \(\ce{OH-}\)) or gain one (base → \(\ce{H3O+}\)); dual behavior is called amphiprotic.
4. \(\ce{HCO3- + OH- <=> CO3^{2-} + H2O}\): pairs are \(\ce{HCO3-/CO3^{2-}}\) and \(\ce{H2O/OH-}\).
5. \([\ce{H3O+}] = K_w/[\ce{OH-}] = 1.0 \times 10^{-14}/1.0 \times 10^{-3} = 1.0 \times 10^{-11}\ \text{M}\). Since \([\ce{OH-}] > [\ce{H3O+}]\), it is basic.

</details>

## Related Topics

- Previous: Start of chapter
- Next: [pH and pOH](02-ph-and-poh.md)
- Related: [Acid-Base Equilibria chapter overview](../README.md)

## Source Notes

- Book: Chemistry 2e
- Local outline source: `chemistry-2e.md`
- Official source URL: https://openstax.org/details/books/chemistry-2e/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
