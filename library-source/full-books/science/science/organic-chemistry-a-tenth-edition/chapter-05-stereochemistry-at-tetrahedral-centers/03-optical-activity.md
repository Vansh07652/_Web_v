---
title: "Optical Activity"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "5: Stereochemistry at Tetrahedral Centers"
topic_number: "3"
source: "organic-chemistry.md"
tags:
  - "optical-activity"
  - "science"
status: "complete"
---

# Optical Activity

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 5: Stereochemistry at Tetrahedral Centers](../README.md)  
> **Topic:** 3  
> **Source structure:** OpenStax public textbook outline

## Overview

**Optical activity** is the ability of a chiral compound to rotate the plane of polarized light. When ordinary light passes through a polarizer, the waves that emerge vibrate in a single plane; if that **plane-polarized light** then travels through a solution of a chiral compound, the plane of vibration rotates by some angle. A compound that rotates the plane clockwise (as seen looking toward the light source) is **dextrorotatory** and labeled \((+)\); one that rotates it counterclockwise is **levorotatory** and labeled \((-)\). The two enantiomers of a chiral compound rotate light by equal angles in opposite directions, so this measurement is the classical way to distinguish them. The quantitative quantity used for comparisons is the **specific rotation**, which normalizes the observed rotation to a standard concentration and path length.

## Why This Matters

- **Identity and purity:** Specific rotation is a physical constant of a pure enantiomer, like its boiling point. Measuring it identifies which enantiomer you have and reveals how pure a sample is (optical purity / enantiomeric excess).
- **Pharmaceutical QC:** Regulatory agencies require that a chiral drug's rotation be controlled; the "wrong" enantiomer may be inactive or toxic. Optical activity is the fastest routine check.
- **Sweetener/natural-products history:** The classic example is (+)-limonene (orange scent) vs. (–)-limonene (lemon scent) — same formula, opposite rotations, different smells. Sucrose is famously dextrorotatory, which is why invert sugar (hydrolyzed to glucose + fructose) becomes levorotatory.
- **Exams:** Expect calculations using the specific rotation formula, interpretation of \((+)/(-)\) labels, and the fact that a racemic mixture (1:1 enantiomer mix) shows zero net rotation.

## Core Concepts

### Polarized light and the polarimeter

A **polarimeter** has a light source, a polarizer (which passes only light vibrating in one plane), a sample tube, and an analyzer (a second polarizer whose angle you rotate to find where light passes maximally). With an achiral sample (or an empty tube), the analyzer angle that maximizes transmission matches the polarizer — no rotation. With a chiral sample, you must rotate the analyzer by the **observed rotation** \(\alpha\) (in degrees) to restore maximum transmission.

### Specific rotation: the normalized value

The observed rotation \(\alpha\) depends on how much material the light passes through: more molecules in the path → bigger angle. To compare compounds, chemists define the **specific rotation**:

\[
[\alpha]^T_\lambda = \frac{\alpha}{l \cdot c}
\]

where:

- \(\alpha\) = observed rotation (degrees),
- \(l\) = path length of the sample tube (decimeters, dm),
- \(c\) = concentration (g/mL),
- \(T\) = temperature and \(\lambda\) = wavelength of light, conventionally \(25^\circ\text{C}\) and the sodium D line (589 nm), written \([\alpha]^{25}_D\).

Units: \(\text{deg} \cdot \text{mL} \cdot \text{g}^{-1} \cdot \text{dm}^{-1}\). Because \(l\) and \(c\) are in the denominator, doubling the path length or concentration doubles the *observed* angle but leaves \([\alpha]\) unchanged — the specific rotation is a property of the compound, not of the sample.

### (+) and (–): the sign of rotation

- **Dextrorotatory** \((+)\): plane rotates clockwise (to the right) as viewed facing the light source.
- **Levorotatory** \((-)\): plane rotates counterclockwise.
- The **enantiomer** of a \((+)\) compound is its \((-)\) compound, with the same magnitude of \([\alpha]\) but opposite sign.
- **Racemic mixture** (1:1 mixture of enantiomers): equal and opposite rotations cancel, so observed rotation = 0. A racemic sample is optically inactive even though the molecules are chiral.

### Optical purity and enantiomeric excess

If a sample contains unequal amounts of two enantiomers, its rotation is proportional to the excess of one enantiomer:

\[
\text{enantiomeric excess (ee)} = \frac{[\alpha]_{\text{sample}}}{[\alpha]_{\text{pure}}} \times 100\%
\]

where \([\alpha]_{\text{pure}}\) is the specific rotation of the pure enantiomer. An ee of 100% means a single enantiomer; 0% means racemic. This is also called **optical purity**, though it is strictly equal to ee only when no other chiral species is present.

## ELI-10: Explain Like I’m 10

Imagine shining light through a picket fence so the light waves all line up in one direction — like a crowd squeezing through a gate in single file. A chiral molecule is like a tilted turnstile: as the line of light waves walks through the solution, each turnstile gives the line a little twist. One handed molecule twists the line clockwise; its mirror twin twists it counterclockwise by exactly the same amount. If you mix equal numbers of both, half the crowd twists one way and half the other — the twists cancel and the light comes out straight. Scientists measure that twist to tell the two mirror twins apart.

## High-Yield Points

- **Specific rotation formula:** \([\alpha] = \alpha / (l \cdot c)\), with \(l\) in dm and \(c\) in g/mL — memorize the units.
- Observed rotation \(\alpha\) depends on concentration and path length; specific rotation \([\alpha]\) does not.
- \((+)\) = dextrorotatory (clockwise); \((-)\) = levorotatory (counterclockwise); enantiomers have equal-magnitude, opposite-sign rotations.
- **Racemic mixture** = 1:1 enantiomers = zero net rotation, even though each molecule is chiral.
- ee (enantiomeric excess) = \(([\alpha]_{\text{sample}} / [\alpha]_{\text{pure}}) \times 100\%\); 100% = pure single enantiomer.
- The sign \((+)/(-)\) is unrelated to R/S configuration — it must be measured, not predicted from structure.
- Standard conditions: \(25^\circ\text{C}\), sodium D line (589 nm) — always write \([\alpha]^{25}_D\) with data.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| Plane-polarized light | Light whose waves vibrate in a single plane | The "probe" that chiral molecules rotate |
| Polarimeter | Instrument that measures rotation of polarized light | The tool for measuring optical activity |
| Observed rotation (\(\alpha\)) | The angle (degrees) the plane rotates in a specific sample | The raw measurement; depends on \(l\) and \(c\) |
| Specific rotation \([\alpha]\) | \(\alpha\) normalized to 1 dm path and 1 g/mL concentration | A physical constant for identifying/purifying enantiomers |
| Dextrorotatory (+) | Rotates plane clockwise (facing the source) | One of the two possible signs of rotation |
| Levorotatory (–) | Rotates plane counterclockwise | The opposite sign; enantiomer of the (+) form |
| Racemic mixture | 1:1 mixture of enantiomers | Optically inactive; zero net rotation |
| Enantiomeric excess (ee) | \((+\) excess − \(–\) excess) as %; sample rotation ÷ pure rotation × 100% | Quantifies how enantiopure a sample is |

## How It Works / Step-by-Step Process

1. Dissolve the sample in a suitable solvent at known concentration \(c\) (g/mL); record the temperature and wavelength.
2. Fill a tube of known path length \(l\) (dm) and measure the observed rotation \(\alpha\) in the polarimeter.
3. Compute specific rotation: write the formula, substitute the numbers, cancel units:
   \[
   [\alpha] = \frac{\alpha}{l \cdot c}
   \]
4. Compare the sign and magnitude with literature values or the pure enantiomer to identify the compound and estimate ee.
5. If \(\alpha = 0\), check whether the sample is racemic — it does *not* mean the molecules are achiral.

## Worked Examples

### Example 1: Computing specific rotation

**Problem:** 2.50 g of a chiral compound is dissolved in enough ethanol to make 25.0 mL of solution. In a 2.00 dm tube at \(25^\circ\text{C}\) (sodium D line), the observed rotation is \(+3.00^\circ\). Find the specific rotation.

**Step 1 — Find the concentration (g/mL):**
\[
c = \frac{2.50 \text{ g}}{25.0 \text{ mL}} = 0.100 \text{ g/mL}
\]

**Step 2 — Write the formula, then substitute:**
\[
[\alpha]^{25}_D = \frac{\alpha}{l \cdot c} = \frac{+3.00^\circ}{2.00 \text{ dm} \times 0.100 \text{ g/mL}}
\]

**Step 3 — Cancel units and compute:**
\[
[\alpha]^{25}_D = \frac{+3.00^\circ}{0.200 \text{ dm} \cdot \text{g/mL}} = +15.0^\circ \cdot \text{mL} \cdot \text{g}^{-1} \cdot \text{dm}^{-1}
\]

**Answer:** \([\alpha]^{25}_D = +15.0\) (deg·mL·g⁻¹·dm⁻¹). A positive value → dextrorotatory.

### Example 2: Observed rotation from known specific rotation

**Problem:** The pure enantiomer of a compound has \([\alpha]^{25}_D = -40.0\). A 0.500 g/mL solution is measured in a 1.00 dm tube. What observed rotation is expected? Is the compound (+) or (–)?

**Step 1 — Rearrange the formula to solve for \(\alpha\):**
\[
[\alpha] = \frac{\alpha}{l \cdot c} \quad\Rightarrow\quad \alpha = [\alpha] \cdot l \cdot c
\]

**Step 2 — Substitute:**
\[
\alpha = (-40.0 \text{ deg·mL·g}^{-1}\text{·dm}^{-1}) \times 1.00 \text{ dm} \times 0.500 \text{ g/mL}
\]

**Step 3 — Cancel units (dm cancels dm, g/mL cancels g/mL):**
\[
\alpha = -40.0 \times 1.00 \times 0.500 \text{ deg} = -20.0^\circ
\]

**Answer:** Observed rotation \(-20.0^\circ\); the compound is levorotatory (–). Doubling the concentration would give \(-40.0^\circ\), but \([\alpha]\) would stay \(-40.0\).

### Example 3: Enantiomeric excess from rotation

**Problem:** A sample of the compound from Example 2 shows \([\alpha]^{25}_D = -10.0\) instead of the pure value \(-40.0\). What is its enantiomeric excess?

**Step 1 — Write the ee formula:**
\[
\text{ee} = \frac{[\alpha]_{\text{sample}}}{[\alpha]_{\text{pure}}} \times 100\%
\]

**Step 2 — Substitute:**
\[
\text{ee} = \frac{-10.0}{-40.0} \times 100\% = 25\%
\]

**Step 3 — Interpret:** 25% ee means 62.5% of the (–) enantiomer and 37.5% of the (+) enantiomer (since ee = %major − %minor and the two sum to 100%). The sample is 75% racemic + 25% excess (–).

**Answer:** 25% ee — the sample is mostly racemic with a small excess of the levorotatory enantiomer.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Observed rotation \(\alpha\) | Specific rotation \([\alpha]\) | \(\alpha\) depends on \(l\) and \(c\); \([\alpha]\) is normalized and is a compound constant |
| \((+)\)/\((-)\) sign | R/S configuration | Sign is measured experimentally; R/S is assigned by structure rules (Topic 5). No fixed relationship |
| Racemic mixture | Achiral compound | A racemate contains chiral molecules but shows zero net rotation because enantiomers cancel |
| Optical purity | Enantiomeric excess | Equal only when no other chiral species is present; otherwise they can differ slightly |
| Path length in cm | Path length in dm | The formula needs dm: 10 cm = 1.00 dm. Forgetting this changes the answer by 10× |
| Dextrorotatory | Clockwise on the page | "Clockwise as viewed facing the light source" — a viewing-direction convention, not a 2D arrow |

## Quick Review

1. Write the specific rotation formula and state the units of \(l\) and \(c\).
2. A 0.200 g/mL solution in a 1.00 dm tube gives \(\alpha = +2.00^\circ\). What is \([\alpha]\)?
3. If pure enantiomer A has \([\alpha] = +50.0\) and a sample shows +12.5, what is the ee and what is the composition?
4. Why does a racemic mixture show zero rotation even though its molecules are chiral?
5. True or false: (S)-enantiomers are always levorotatory. Explain.
6. What does it mean that \([\alpha]\) is written \([\alpha]^{25}_D\)?

<details>
<summary>Show answers</summary>

1. \([\alpha] = \alpha / (l \cdot c)\); \(l\) in decimeters (dm), \(c\) in g/mL.
2. \([\alpha] = +2.00^\circ / (1.00 \text{ dm} \times 0.200 \text{ g/mL}) = +10.0\) deg·mL·g⁻¹·dm⁻¹.
3. ee = (12.5 / 50.0) × 100% = 25%; composition = 62.5% (+) and 37.5% (–).
4. The (+) and (–) enantiomers rotate by equal and opposite angles; in a 1:1 mixture the rotations cancel exactly, so the net observed rotation is zero.
5. False. The (+) vs (–) sign is a measured property; R/S is a structural label. Many (S) compounds are dextrorotatory (e.g., (S)-lactic acid is (+)).
6. \([\alpha]^{25}_D\) means measured at 25 °C using the sodium D line (589 nm) — the standard conditions that make values comparable.

</details>

## Related Topics

- Previous: [The Reason for Handedness in Molecules: Chirality](02-the-reason-for-handedness-in-molecules-chirality.md)
- Next: [Pasteur’s Discovery of Enantiomers](04-pasteur-s-discovery-of-enantiomers.md)
- Related: [Racemic Mixtures and the Resolution of Enantiomers](08-racemic-mixtures-and-the-resolution-of-enantiomers.md) · [Sequence Rules for Specifying Configuration](05-sequence-rules-for-specifying-configuration.md)
- Related: [Stereochemistry at Tetrahedral Centers chapter overview](../README.md)

## Source Notes

- Book: Organic Chemistry: A Tenth Edition
- Local outline source: `organic-chemistry.md`
- Official source URL: https://openstax.org/details/books/organic-chemistry/
- Content type: Original educational study guide based on OpenStax outline structure.
- Worked-example numbers are constructed practice data, not literature values; the definition of specific rotation and its standard conditions are textbook-standard. Verify any specific \([\alpha]\) values against current literature (e.g., CRC Handbook) before using them in assessments.
- Last updated: 2026-08-16
