---
title: "Mass Spectrometry of Small Molecules: Magnetic-Sector Instruments"
subject: "Science"
book: "Organic Chemistry: A Tenth Edition"
chapter: "12: Structure Determination: Mass Spectrometry and Infrared Spectroscopy"
topic_number: "1"
source: "organic-chemistry.md"
tags:
  - "mass-spectrometry-of-small-molecules-magnetic-sector-instruments"
  - "science"
status: "complete"
---

# Mass Spectrometry of Small Molecules: Magnetic-Sector Instruments

> **Book:** [Organic Chemistry: A Tenth Edition](../../README.md)  
> **Chapter:** [Chapter 12: Structure Determination: Mass Spectrometry and Infrared Spectroscopy](../README.md)  
> **Topic:** 1  
> **Source structure:** OpenStax public textbook outline

## Overview

Mass spectrometry answers one question about an unknown molecule: **what is its mass, and what pieces does it break into?** The instrument vaporizes the sample, blasts the molecules with high-energy electrons to create ions, accelerates them to a known kinetic energy, and sorts them by their **mass-to-charge ratio**, written \(m/z\). A magnetic-sector instrument does the sorting by bending the ion beam through a magnetic field: heavier ions curve less, lighter ions curve more, and the detector records how many ions of each \(m/z\) arrive.

The output — a mass spectrum — is a bar graph of relative abundance versus \(m/z\). The peak at the highest \(m/z\) is usually the **molecular ion** \(M^{+\bullet}\), whose mass gives the molecular weight of the compound. The other peaks are fragments, and their masses are fingerprints of the structure. Mass spectrometry is the first tool in the structure-determination arsenal because it gives the molecular formula information that spectroscopy alone cannot.

## Why This Matters

Before infrared or NMR spectroscopy can be interpreted, you need to know what molecule you are holding — and mass spectrometry provides that answer. A single spectrum gives the molecular mass to several decimal places, reveals chlorine or bromine from their isotope patterns, and hints at functional groups from characteristic fragment losses. In pharmaceutical analysis, forensic toxicology, and environmental monitoring, mass spectrometers identify trace compounds. For this course, the magnetic-sector design matters because its physics — kinetic energy from an accelerating voltage and circular motion in a magnetic field — explains *why* the spectrum is plotted against \(m/z\) rather than plain mass, and why doubly charged ions appear at half their formula mass.

## Core Concepts

### From molecule to ion: the electron-impact ion source

The sample is vaporized and admitted as a dilute gas into a low-pressure chamber. A beam of electrons (typically 70 eV kinetic energy) strikes the neutral molecules, knocking an electron out and producing a **radical cation**:

\[ \text{M} + e^- \longrightarrow \text{M}^{+\bullet} + 2e^- \]

The molecular ion \(M^{+\bullet}\) has essentially the same mass as the neutral molecule (the lost electron weighs about \(9.109 \times 10^{-31}\) kg, far below measurement precision) and carries one positive charge. It is the source of the peak at the highest \(m/z\).

Because 70 eV far exceeds a typical bond energy (about 3–4 eV), the molecular ion usually fragments before measurement, producing additional peaks. The most abundant ion in the spectrum is the **base peak**, set to 100% relative abundance; all other peaks are scaled to it.

### Acceleration: giving every ion the same kinetic energy

Once formed, the ions are pulled out of the source by an electric field. An ion of charge \(q = ze\) (where \(z\) is the number of charges and \(e = 1.602 \times 10^{-19}\) C is the elementary charge) accelerated through a potential \(V\) gains kinetic energy:

\[ \frac{1}{2}mv^2 = zeV \]

Two consequences follow. First, *all* singly charged ions passing through the same voltage emerge with the same kinetic energy — so a light ion moves faster than a heavy one. Second, kinetic energy in electronvolts equals the product \(zV\): an ion accelerated through 4000 V carries 4000 eV per charge.

### The magnetic analyzer: sorting ions by m/z

The fast ion beam enters a magnetic field \(B\) perpendicular to its travel. The field exerts a force \(F = qvB\) that bends the ion into a circular arc of radius \(r\); for the ion to stay on that arc, the magnetic force must equal the centripetal force:

\[ qvB = \frac{mv^2}{r} \]

Combining this with the kinetic-energy equation gives the central result of the magnetic sector:

\[ \frac{m}{z} = \frac{eB^2r^2}{2V} \]

In words: for fixed accelerating voltage \(V\) and analyzer radius \(r\), the \(m/z\) reaching the detector depends only on the field strength \(B\). The instrument scans \(B\) upward; as the field grows, heavier ions come into focus on the detector slit. Each current spike, plotted against the \(m/z\) that produced it, is the mass spectrum.

### Exact masses and isotopes

The \(m/z\) scale records **exact (monoisotopic) masses**, not rounded atomic weights: \(^{12}\text{C} = 12.0000\), \(^{1}\text{H} = 1.00783\), \(^{16}\text{O} = 15.9949\), \(^{14}\text{N} = 14.0031\), \(^{35}\text{Cl} = 34.9689\), \(^{37}\text{Cl} = 36.9659\), \(^{79}\text{Br} = 78.9183\), \(^{81}\text{Br} = 80.9163\) (daltons, Da). Because chlorine and bromine have two abundant isotopes (Cl ≈ 3:1, Br ≈ 1:1), their compounds show tell-tale peak pairs two mass units apart — an instant fingerprint for those halogens.

## ELI-10: Explain Like I'm 10

A magnetic-sector mass spectrometer is like a marble race with a twist: you roll all the marbles down the same ramp so they all have the same "push," then send them through a sideways wind (the magnet). Light marbles get blown way off course; heavy marbles barely curve. By making the wind stronger and stronger, you can catch each weight one at a time at the finish line. Every marble that arrives makes a line on a chart, and the chart tells you how heavy the molecule is and what pieces it broke into.

## High-Yield Points

- The **molecular ion** \(M^{+\bullet}\) is a radical cation; its \(m/z\) equals the molecular mass (for \(z = 1\)).
- **Sector sorting rule:** \(m/z = eB^2r^2/(2V)\) — scan \(B\) with \(V\) and \(r\) fixed; ions arrive in order of increasing mass.
- All ions with the same charge share the same kinetic energy \(zeV\) after acceleration, so \(v\) is larger for lighter ions.
- The **base peak** is the most abundant ion (100%); it is *not* necessarily the molecular ion.
- 70 eV electron impact gives the molecular ion *and* fragments; the molecular ion is often weak or absent for fragile molecules.
- Exact masses (not rounded atomic weights) are what appear on the \(m/z\) axis; this lets you distinguish formulas that have the same nominal mass.
- Chlorine (3:1) and bromine (1:1) isotope patterns produce M and M+2 peaks — two mass units apart.
- Doubly charged ions (\(z = 2\)) appear at half the mass of the singly charged ion of the same molecule.

## Key Terms

| Term | Plain-language definition | Why it matters |
|---|---|---|
| Mass-to-charge ratio (\(m/z\)) | Mass of an ion divided by its number of charges | The x-axis of a mass spectrum; what the instrument actually measures |
| Molecular ion (\(M^{+\bullet}\)) | The ion formed by removing one electron from the neutral molecule | Its \(m/z\) gives the molecular mass — the starting point for a formula |
| Radical cation | A positive ion with an unpaired electron | Every molecular ion is one; odd-electron ions are the signature of M⁺• |
| Electron impact (EI) | Ionization by a beam of ~70 eV electrons | Standard hard-ionization method for volatile small molecules |
| Base peak | The most abundant ion in the spectrum, normalized to 100% | Reference intensity; often a stable fragment, not the molecular ion |
| Accelerating voltage (\(V\)) | Potential that gives ions kinetic energy \(zeV\) | Sets the kinetic energy and, with B, the m/z that reaches the detector |
| Magnetic field (\(B\)) | Field that bends the ion beam into a circular arc | The scanning variable that selects m/z in a sector instrument |
| Exact (monoisotopic) mass | Mass calculated from the most abundant isotope of each element | Needed to distinguish formulas with equal nominal masses |
| Nominal mass | Mass rounded to whole numbers | Quick first estimate of a molecular formula |
| Resolution | Ability to separate peaks of similar m/z (\(m/\Delta m\)) | High resolution distinguishes close formulas |

## Worked Examples

### Example 1: Which m/z reaches the detector for given instrument settings?

A magnetic-sector instrument has an analyzer radius \(r = 0.15\) m and accelerating voltage \(V = 4000\) V. What singly charged ion mass (in daltons) is focused when the field is \(B = 0.50\) T?

**Formula first:** combine the centripetal and kinetic-energy relations to get the ion mass in kilograms:

\[ m = \frac{zeB^2r^2}{2V} \]

**Substitute** (\(z = 1\), \(e = 1.602 \times 10^{-19}\) C, \(B = 0.50\) T, \(r = 0.15\) m, \(V = 4000\) V):

\[ m = \frac{(1)(1.602 \times 10^{-19}\ \text{C})(0.50\ \text{T})^2(0.15\ \text{m})^2}{2(4000\ \text{V})} \]

\[ m = \frac{(1.602 \times 10^{-19})(0.25)(0.0225)}{8000}\ \text{kg} = \frac{9.011 \times 10^{-22}}{8000}\ \text{kg} = 1.126 \times 10^{-25}\ \text{kg} \]

**Convert to daltons** (1 Da \(= 1.6605 \times 10^{-27}\) kg):

\[ m = \frac{1.126 \times 10^{-25}\ \text{kg}}{1.6605 \times 10^{-27}\ \text{kg}/\text{Da}} = 67.8\ \text{Da} \]

**Answer:** an ion with \(m/z \approx 68\) (e.g., \(C_5H_8^+\) or \(C_4H_4O^+\)) is focused at this field. Raising \(B\) would focus heavier ions.

### Example 2: How fast is a molecular ion moving?

The molecular ion of benzene, \(C_6H_6^{+\bullet}\) (\(m/z = 78\)), is accelerated through 4000 V. Find its speed.

**Formula first:**

\[ \frac{1}{2}mv^2 = zeV \quad \Rightarrow \quad v = \sqrt{\frac{2zeV}{m}} \]

**Substitute:** \(m = 78\ \text{Da} \times 1.6605 \times 10^{-27}\ \text{kg}/\text{Da} = 1.295 \times 10^{-25}\) kg; \(z = 1\); \(V = 4000\) V; \(e = 1.602 \times 10^{-19}\) C.

\[ v = \sqrt{\frac{2(1)(1.602 \times 10^{-19}\ \text{C})(4000\ \text{V})}{1.295 \times 10^{-25}\ \text{kg}}} = \sqrt{\frac{1.282 \times 10^{-15}\ \text{J}}{1.295 \times 10^{-25}\ \text{kg}}} \]

\[ v = \sqrt{9.90 \times 10^9\ \text{m}^2/\text{s}^2} = 9.95 \times 10^4\ \text{m/s} \]

**Answer:** ≈ \(1.0 \times 10^5\) m/s — about 100 km/s. A lighter ion (smaller \(m\)) at the same voltage would be moving even faster, which is exactly why the magnetic field separates them.

### Example 3: Distinguishing formulas with exact mass

A compound's molecular ion appears at \(m/z = 44.0262\). Is it \(C_2H_4O\) or \(CO_2\)?

**Formula first:** exact mass \(= \sum(\text{exact mass of isotope} \times \text{count})\).

**Substitute:**

\[ C_2H_4O:\ 2(12.0000) + 4(1.00783) + 15.9949 = 24.0000 + 4.0313 + 15.9949 = 44.0262 \]

\[ CO_2:\ 12.0000 + 2(15.9949) = 12.0000 + 31.9898 = 43.9898 \]

**Answer:** \(m/z = 44.0262\) matches \(C_2H_4O\) exactly. The two formulas share a nominal mass of 44 but differ by 0.0364 Da — a difference a high-resolution sector instrument detects easily. This is why exact masses matter.

## Common Confusions

| Do not confuse | With | Difference |
|---|---|---|
| Molecular ion peak | Base peak | Molecular ion = intact molecule minus one electron (highest m/z); base peak = most abundant ion (often a fragment) |
| \(m/z\) | Plain mass | \(m/z\) divides by charge; a doubly charged ion of mass 100 appears at \(m/z = 50\) |
| Exact mass | Nominal/rounded mass | Exact uses isotope masses (e.g., \(^{12}\text{C} = 12.0000\)); nominal rounds to integers |
| Mass of the molecule | Mass of the ion | The lost electron's mass is negligible, so \(M^{+\bullet}\)'s m/z ≈ molecular mass |
| Heavier ions curve more | Lighter ions curve more | In a magnetic field, lighter ions are deflected more; heavier ions need a stronger field to reach the detector |
| Electron impact always gives M⁺• | A visible M⁺• | Fragmentation can make the molecular ion peak weak or invisible — a common exam trap |
| Isotope peaks (M+1, M+2) | Impurities | \(^{13}\text{C}\), \(^{37}\text{Cl}\), \(^{81}\text{Br}\) naturally produce small peaks above M; not contamination |

## Quick Review

1. What particle is the molecular ion, and what is its charge?
<details>
<summary>Answer</summary>
\(M^{+\bullet}\) is a radical cation: the neutral molecule minus one electron, carrying one positive charge and one unpaired electron.
</details>

2. Why do all singly charged ions have the same kinetic energy after acceleration through the same voltage?
<details>
<summary>Answer</summary>
Kinetic energy is \(zeV\), which depends only on charge \(z\) and voltage \(V\) — not on mass. Lighter ions therefore move faster, heavier ions slower.
</details>

3. In a magnetic sector, what happens to the focused \(m/z\) as the magnetic field is increased?
<details>
<summary>Answer</summary>
From \(m/z = eB^2r^2/(2V)\), increasing \(B\) focuses heavier ions — the spectrum is scanned from low mass to high mass.
</details>

4. What is the base peak, and is it always the molecular ion?
<details>
<summary>Answer</summary>
The most abundant ion in the spectrum, normalized to 100%. It is often a fragment ion, not the molecular ion.
</details>

5. A molecule contains one bromine atom. Describe its molecular ion pattern.
<details>
<summary>Answer</summary>
Two peaks of roughly equal height two mass units apart (M and M+2) because \(^{79}\text{Br}\) and \(^{81}\text{Br}\) occur in nearly 1:1 natural abundance.
</details>

6. Why can high-resolution mass spectrometry distinguish \(C_2H_4O\) from \(CO_2\)?
<details>
<summary>Answer</summary>
Their exact masses differ (44.0262 vs 43.9898 Da) even though both round to 44; a high-resolution instrument resolves the 0.0364 Da difference.
</details>

## Related Topics

- [Interpreting Mass Spectra](02-interpreting-mass-spectra.md)
- [Mass Spectrometry of Some Common Functional Groups](03-mass-spectrometry-of-some-common-functional-groups.md)
- [Mass Spectrometry in Biological Chemistry: Time-of-Flight (TOF) Instruments](04-mass-spectrometry-in-biological-chemistry-time-of-flight-tof-instruments.md)
- [Spectroscopy and the Electromagnetic Spectrum](05-spectroscopy-and-the-electromagnetic-spectrum.md)
- [Infrared Spectroscopy](06-infrared-spectroscopy.md)
- [Chapter 12 README](../README.md)
