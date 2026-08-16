---
title: "The E2 Reaction and the Deuterium Isotope Effect"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "11: Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations"
topic_number: "8"
source: "organic-chemistry.md"
tags:
  - "the-e2-reaction-and-the-deuterium-isotope-effect"
  - "science"
status: "complete"
---

# The E2 Reaction and the Deuterium Isotope Effect

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 11: Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations](../README.md)  
> **Topic:** 8  
> **Source structure:** OpenStax public textbook outline

## Overview

The **E2 reaction** is a *bimolecular elimination*: in one concerted step, a base removes a β-hydrogen while the leaving group departs from the α-carbon — no intermediate forms. The rate depends on the concentrations of both the alkyl halide and the base:

\[
\text{rate} = k[\text{RX}][\text{base}]
\]

The reaction is second order overall; the "2" in E2 records that bimolecularity, just as it does in S\(_N\)2. Two structural requirements control E2: the β-hydrogen and the leaving group must be **anti-periplanar** (roughly opposite each other across the C–C bond), and the base must be able to reach that β-hydrogen.

The **deuterium isotope effect** is the experimental tool that reveals how the β C–H bond participates. Because deuterium (²H, D) is twice as heavy as protium (¹H), C–D bonds vibrate more slowly and sit in a lower zero-point energy level; they are harder to break. If replacing a β-H with D slows the reaction substantially, the C–H bond is breaking in the rate-determining step — exactly what E2 predicts.

## Why This Matters

E2 is the most common elimination mechanism for alkyl halides, the standard laboratory route to alkenes, and a direct competitor of S\(_N\)2 for the same substrates and bases. The isotope effect is a mechanistic probe: a large primary kinetic isotope effect (KIE) means a C–H bond breaks in the slow step, distinguishing E2 from E1 and E1cB; it is used throughout physical organic chemistry and enzymology to assign mechanisms. E2's geometry also predicts alkene stereochemistry, relevant to drug synthesis and to enzyme-catalyzed dehydrations that form *trans* alkenes.

## Core Concepts

### One step, two events: the concerted transition state

In E2 there is no carbocation and no carbanion. In the single transition state, four events happen together: the base begins pulling the β-hydrogen, the C–H bond starts to break, the C–C bond takes on double-bond character, and the C–X bond begins to break as the leaving group departs. In arrow-pushing language: the base's electron pair forms the new H–base bond; the C–H bonding pair shifts to become the C=C π bond; and the C–X pair moves onto the departing leaving group. Because everything happens in one step, E2 is favored by strong bases and by good leaving groups.

### Rate law and the meaning of bimolecular

Doubling either the base or the alkyl halide concentration doubles the rate. The units of the second-order rate constant follow from the rate law; rate has units of concentration per time, \(\text{M s}^{-1}\):

\[
[\text{rate}] = \text{M s}^{-1} = [k] \cdot \text{M} \cdot \text{M}
\]

Solving for the units of \(k\):

\[
[k] = \frac{\text{M s}^{-1}}{\text{M} \cdot \text{M}} = \text{M}^{-1}\text{s}^{-1}
\]

A first-order (E1) rate constant, by contrast, has units of \(\text{s}^{-1}\) — a useful check when comparing mechanisms.

### The anti-periplanar geometry requirement

For the π bond to form, the β-H and the leaving group must be anti-periplanar: the C–H and C–X bonds should lie in the same plane, pointing in opposite directions (roughly 180° apart). In acyclic molecules this is achieved in a staggered conformation. This requirement makes E2 **stereospecific**: the substrate's stereochemistry determines the alkene's, and simple acyclic substrates generally give the more stable *trans* (E) alkene.

### The deuterium isotope effect: how heavy hydrogen reports on mechanism

Deuterium and protium have identical electronic structures, so C–D and C–H bonds have the same intrinsic strength — but not the same zero-point energy. A vibrating bond has a lowest energy level \(E_0 = \tfrac{1}{2}h\nu\), and the vibrational frequency depends on the reduced mass \(\mu\) of the two atoms:

\[
\nu = \frac{1}{2\pi}\sqrt{\frac{k_{\text{force}}}{\mu}}
\]

The C–D pair has a larger reduced mass than C–H, so C–D vibrates at roughly 1/1.36 the frequency and sits about 1.2 kcal/mol lower in zero-point energy. Breaking the bond therefore costs more energy for C–D, which slows the reaction when that bond breaks in the rate-determining step. The measured ratio

\[
\frac{k_{\text{H}}}{k_{\text{D}}} \approx 5\text{--}10
\]

is a **primary kinetic isotope effect**. A ratio near 1–2 (a *secondary* effect) means the C–H bond was *not* broken in the slow step. E2 shows a primary KIE on the β-hydrogen because β C–H cleavage is part of the rate-determining step — strong evidence against E1, whose slow step is only loss of the leaving group.

## ELI-10: Explain Like I’m 10

> E2 is like two kids letting go of a rope at the same time so a flag snaps up between them — the base pulls one end while the leaving group drops the other, in one motion. Swap a normal hydrogen for a heavy one and the rope is harder to pull, so the trick slows down a lot. That slowdown tells you the hydrogen really was being pulled in the slow step.

## High-Yield Points

- E2 is one step, bimolecular: \(\text{rate} = k[\text{RX}][\text{base}]\); \(k\) has units \(\text{M}^{-1}\text{s}^{-1}\).
- The base removes the β-H as the leaving group departs — no intermediate forms.
- β-H and leaving group must be anti-periplanar (coplanar, ~180° apart); acyclic E2 usually gives the more stable *trans* alkene.
- Strong bases (OH⁻, RO⁻) favor E2; the leaving group must accept the electron pair.
- Primary KIE: \(k_{\text{H}}/k_{\text{D}} \approx 5\text{--}10\) when the β C–H bond breaks in the rate-determining step — observed for E2.
- A small KIE (near 1) means the C–H bond breaks after the slow step, as in E1.
- Deuterium is a stable isotope; isotope effects come from zero-point energy differences, not radioactivity.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| E2 reaction | A one-step elimination whose rate depends on both base and substrate | The standard mechanism for dehydrohalogenation of alkyl halides |
| concerted mechanism | A reaction with a single transition state and no intermediate | Distinguishes E2 from stepwise E1 and E1cB |
| anti-periplanar | Geometry in which the β-H and leaving group lie in one plane, pointing opposite ways | Required for the π bond to form; drives E2 stereospecificity |
| rate-determining step | The slowest step, which sets the overall rate | Determines which bonds show a primary isotope effect |
| primary kinetic isotope effect | A large \(k_{\text{H}}/k_{\text{D}}\) (≈5–10) when the labeled bond breaks in the slow step | Mechanistic fingerprint for C–H cleavage in the rate-determining step |
| zero-point energy | The lowest vibrational energy of a bond, \(E_0 = \tfrac{1}{2}h\nu\) | Explains why heavier isotopes form stronger bonds and react more slowly |

## How It Works / Step-by-Step Process

1. Identify the substrate and base; confirm that a β-H exists.
2. Verify the E2 rate law: second order, one in each reactant.
3. Place the β-H and LG anti-periplanar; expect the *trans* alkene in acyclic cases.
4. Interpret kinetics: a primary KIE on the β-H supports E2; a near-1 ratio points to a stepwise mechanism.

## Worked Example: Second-Order Rate Constant and Units

Suppose a student measures the E2 reaction of 2-bromopropane with ethoxide at 25 °C: with \([2\text{-bromopropane}] = [\text{EtO}^-] = 0.10\ \text{M}\), the initial rate is \(1.2 \times 10^{-3}\ \text{M s}^{-1}\).

**Step 1 — write the rate law.** E2 is second order:

\[
\text{rate} = k[\text{CH}_3\text{CHBrCH}_3][\text{EtO}^-]
\]

**Step 2 — substitute and solve for \(k\):**

\[
1.2 \times 10^{-3}\ \text{M s}^{-1} = k (0.10\ \text{M})(0.10\ \text{M})
\]

\[
k = \frac{1.2 \times 10^{-3}\ \text{M s}^{-1}}{1.0 \times 10^{-2}\ \text{M}^2} = 1.2 \times 10^{-1}\ \text{M}^{-1}\text{s}^{-1}
\]

**Step 3 — check units.** The M in the numerator cancels one M in the denominator, leaving \(\text{M}^{-1}\text{s}^{-1}\), exactly what a second-order constant requires.

## Worked Example: What the Deuterium Isotope Effect Tells You

Now suppose the same reaction is run with the deuterated substrate \(\text{CD}_3\text{CHBrCD}_3\), and the student measures \(k_{\text{H}}/k_{\text{D}} = 6.0\) under identical conditions.

**Interpret the number.** A ratio of 6.0 sits in the primary-isotope-effect range (5–10): replacing the β-H with D slowed the reaction sixfold, so the β C–H(D) bond breaks in the rate-determining step — consistent with the concerted E2 transition state and inconsistent with E1, whose slow step (C–Br ionization) does not touch the β-hydrogens.

**Quantify the slowdown.** Using \(k_{\text{H}} = 1.2 \times 10^{-1}\ \text{M}^{-1}\text{s}^{-1}\) from the example above:

\[
k_{\text{D}} = \frac{k_{\text{H}}}{k_{\text{H}}/k_{\text{D}}} = \frac{1.2 \times 10^{-1}\ \text{M}^{-1}\text{s}^{-1}}{6.0} = 2.0 \times 10^{-2}\ \text{M}^{-1}\text{s}^{-1}
\]

The deuterated substrate reacts six times more slowly — the kinetic consequence of the ~1.2 kcal/mol higher barrier for breaking the C–D bond. (These are practice-exercise numbers illustrating the method, not a report of a specific published experiment.)

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| E2 (one step) | E1 (two steps) | E2 is concerted, second order, needs a strong base; E1 goes through a carbocation and is first order |
| E2 | S\(_N\)2 | Both are bimolecular, but S\(_N\)2 attacks the carbon and substitutes; E2 removes a β-H and forms a π bond |
| Primary KIE (≈5–10) | Secondary KIE (≈1–2) | Primary: the labeled C–H bond breaks in the slow step; secondary: it does not |
| “Deuterium is radioactive” | Deuterium | It is a stable isotope; effects arise from vibration and zero-point energy |
| “E2 needs only a weak base” | E2 conditions | E2 needs a *strong* base; weak bases under polar protic conditions favor E1/SN1 |
| Anti-periplanar means “same direction” | Anti geometry | Anti means opposite directions (~180°); syn (same side) is the forbidden geometry |

## Quick Review

1. What does the “2” in E2 mean, and what is the E2 rate law?
2. What geometric relationship must hold between the β-H and the leaving group?
3. What are the units of a second-order rate constant, and why?
4. What is a primary kinetic isotope effect, and what range does it occupy?
5. Why does replacing a β-H with deuterium slow an E2 reaction?
6. If you measured \(k_{\text{H}}/k_{\text{D}} \approx 1.1\) for an elimination, what would that suggest?

<details>
<summary>Show answers</summary>

1. The reaction is bimolecular: base and substrate meet in the rate-determining step. Rate = \(k[\text{RX}][\text{base}]\).
2. They must be anti-periplanar — coplanar and pointing in opposite directions (~180° apart).
3. \(\text{M}^{-1}\text{s}^{-1}\), from \(\text{M s}^{-1} = [k]\cdot\text{M}\cdot\text{M}\).
4. A large slowdown (typically \(k_{\text{H}}/k_{\text{D}} \approx 5\text{--}10\)) caused by substituting D for H at a bond that breaks in the rate-determining step.
5. The C–D bond has a lower zero-point energy (higher effective barrier, ~1.2 kcal/mol more), so bond breaking is slower.
6. The C–H bond is not broken in the slow step — consistent with a stepwise mechanism such as E1 (slow ionization first) rather than E2.

</details>

## Related Topics

- Previous: [Elimination Reactions: Zaitsev’s Rule](07-elimination-reactions-zaitsev-s-rule.md)
- Next: [The E2 Reaction and Cyclohexane Conformation](09-the-e2-reaction-and-cyclohexane-conformation.md)
- Related: [Reactions of Alkyl Halides: Nucleophilic Substitutions and Eliminations chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Last updated: 2026-08-16
