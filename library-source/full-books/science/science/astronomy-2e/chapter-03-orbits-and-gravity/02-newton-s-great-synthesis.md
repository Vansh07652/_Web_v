---
title: "Newton's Great Synthesis"
subject: "Science"
book: "Astronomy 2e"
chapter: "3: Orbits and Gravity"
topic_number: "2"
source: "astronomy-2e.md"
tags:
  - "newton-s-great-synthesis"
  - "science"
status: "complete"
---

# Newton's Great Synthesis

> **Book:** [Astronomy 2e](../../README.md)  
> **Chapter:** [Chapter 3: Orbits and Gravity](../README.md)  
> **Topic:** 2  
> **Source structure:** OpenStax public textbook outline

## Overview

Kepler had described *how* planets move; Isaac Newton (1642–1727) showed *why*. In his *Principia* (1687), Newton performed one of the great unifications in the history of science: he showed that the same force that pulls an apple to the ground also keeps the Moon in its orbit and the planets circling the Sun. This is the "great synthesis" — terrestrial and celestial physics are one and the same. Newton's three laws of motion plus his law of universal gravitation explained Kepler's empirical laws, predicted the motions of comets and moons, and gave humanity its first physical understanding of the solar system. The synthesis still governs everyday engineering: spacecraft trajectories, GPS orbital calculations, and satellite launches all use Newtonian gravity.

## Why This Matters

- **It unifies the heavens and the Earth:** the "physics up there" and the "physics down here" turned out to be identical — the founding insight of modern physical science.
- **It turns Kepler's description into an explanation:** the three laws of planetary motion fall out of gravity plus inertia as mathematical consequences.
- **It is the working physics of spaceflight:** every rocket launch, orbit, and interplanetary mission is planned with Newton's laws (with small corrections from relativity).
- **It defines a scientific method:** a single law with a few constants accounts for the Moon's orbit, falling objects, tides, and planetary motion — the power of a quantitative, testable theory.
- **It sets up later themes:** where the model eventually fails (extreme speeds, strong gravity), Einstein's relativity replaces it — but Newtonian gravity remains the everyday approximation.

## Core Concepts

### Newton's three laws of motion

1. **Law of inertia:** an object at rest stays at rest, and an object in motion stays in motion at constant speed in a straight line, unless acted on by a net external force. Motion needs no explanation; *change* in motion does.
2. **F = ma:** the net force on an object equals its mass times its acceleration, and they point the same direction. Double the force, double the acceleration; double the mass, halve it.
3. **Action–reaction:** for every force, there is an equal and opposite force. The Sun pulls on a planet; the planet pulls on the Sun with equal strength.

### The law of universal gravitation

Newton proposed that **every** mass attracts every other mass with a force given by:

**F = G · m₁ · m₂ / r²**

- **F** = gravitational force (newtons)
- **m₁, m₂** = the two masses (kg)
- **r** = distance between their centers (m)
- **G** = gravitational constant ≈ 6.67 × 10⁻¹¹ N·m²/kg² (a commonly taught reference value; verify against current sources)

Two features matter for orbits. First, the force is **proportional to the masses** — the Sun dominates the solar system because it holds about 99.8% of the mass. Second, the force **falls off as the square of the distance**: double the separation and the force drops to one-quarter. This inverse-square character is exactly what produces Kepler's laws.

### Why planets don't fall into the Sun

The common question "why doesn't gravity pull planets into the Sun?" is answered by combining gravity with inertia. A planet has sideways (tangential) motion; gravity continuously bends that straight-line path into a curve. If the planet were too slow it would spiral inward; too fast, it would escape. At just the right speed, it keeps "falling" around the Sun forever — an orbit is perpetual free-fall. The Moon does the same around Earth: it is falling *around* Earth, not *toward* it.

### The Moon test: one law for both worlds

Newton's famous check (the apple story is a popular teaching anecdote rather than a documented event) compared the Moon's acceleration with gravity at Earth's surface:

- The Moon orbits Earth at about 60 Earth-radii. Because gravity is inverse-square, gravity at the Moon's distance should be 1/60² = 1/3600 of gravity at the surface.
- Surface gravity g ≈ 9.8 m/s², so the predicted lunar acceleration ≈ 9.8/3600 ≈ 0.0027 m/s².
- The Moon's actual centripetal acceleration (v²/r, from its observed speed and distance) matches this value.

The match confirmed that the same gravity governs both — the synthesis in one calculation.

### From gravity back to Kepler

Newton showed mathematically that an inverse-square central force produces exactly the motions Kepler had measured:

- **First law:** bound orbits under an inverse-square force are conic sections — ellipses (or circles), with the attracting body at a focus.
- **Second law:** a central force exerts no torque, so angular momentum is conserved — equal areas in equal times follow directly.
- **Third law:** Newton derived a generalized form including the masses:

**P² = [4π² / G(M₁ + M₂)] · a³**

where M₁ and M₂ are the two masses. For planets around the Sun, M₁ + M₂ is nearly the Sun's mass alone, so P² = a³ (in years and AU) emerges as the solar-system special case. This generalized form is the tool astronomers use to weigh stars, measure exoplanets, and analyze binary systems.

### Applications and limits

Newtonian gravity predicts the tides (the Moon's and Sun's pull on Earth's oceans), explains why the Moon's orbit is slowly expanding, and allowed the discovery of Neptune (1846) from perturbations in Uranus's orbit. Its limits define modern physics: near massive objects (black holes), at speeds approaching light, or over cosmic distances, general relativity is required. For the solar system and for spacecraft, Newtonian gravity remains an outstandingly accurate approximation.

## ELI-10: Explain Like I'm 10

> Newton realized that the same force that makes an apple fall from a tree also keeps the Moon circling Earth and the planets circling the Sun — it's all gravity. The pull gets weaker with distance: twice as far away means only one-quarter of the pull. Planets don't crash into the Sun because they're moving sideways too; gravity just bends their path into an oval, so they keep "falling around" the Sun forever, like the Moon falls around Earth.

## High-Yield Points

- Newton's synthesis: one force — gravity — explains falling objects, the Moon's orbit, and planetary motion (F = G·m₁·m₂/r²).
- Three laws of motion: inertia; F = ma; equal and opposite action–reaction.
- Gravity is proportional to mass and inversely proportional to the square of distance (inverse-square law).
- An orbit is perpetual free-fall: sideways motion + inward gravity = closed path.
- The Moon test: lunar acceleration ≈ g/3600 ≈ 0.0027 m/s², matching the inverse-square prediction at ~60 Earth-radii (commonly taught values).
- Newton derived all three of Kepler's laws from gravity; the generalized third law (P² = 4π²a³/[G(M₁+M₂)]) lets astronomers measure masses.
- G ≈ 6.67 × 10⁻¹¹ N·m²/kg² is a commonly taught reference value — verify against current sources.
- Newtonian gravity is superb for the solar system but fails near strong gravity/high speeds → general relativity.

## Key Terms

| Term | Plain-Language Definition | Why It Matters |
|---|---|---|
| inertia | An object's resistance to changes in motion; bodies keep moving uniformly unless forced | First law; explains why planets don't stop or fall straight in |
| acceleration | The rate of change of velocity (speed or direction) | F = ma ties force to how motion actually changes |
| universal gravitation | The claim that every mass attracts every other mass | The single law unifying Earth-bound and celestial motion |
| inverse-square law | A force that drops as 1/r² (double distance → quarter force) | The mathematical heart of gravity and of Kepler's laws |
| gravitational constant (G) | The proportionality constant in Newton's gravity law | Fixes the strength of gravity; ~6.67 × 10⁻¹¹ N·m²/kg² (reference value) |
| centripetal acceleration | The inward acceleration of anything moving along a curved path | Explains the Moon's "fall" and orbital stability |
| free-fall | Motion under gravity alone, with no other forces | An orbit is continuous free-fall around the central body |
| perturbation | A small gravitational tug from an additional body | How Neptune was discovered from Uranus's odd motion |

## How It Works / Step-by-Step Process

**Why the Moon stays up (the Newtonian argument):**

1. **Start with inertia:** without gravity, the Moon would fly off in a straight line tangent to its orbit.
2. **Add gravity:** Earth's pull accelerates the Moon toward Earth's center — it "falls" continuously.
3. **Combine the two:** the sideways motion and the inward fall combine into a curved path that closes on itself — an orbit.
4. **Check the numbers:** the Moon's inward acceleration (v²/r, from its observed speed and distance) is ≈ 0.0027 m/s² — surface gravity (9.8 m/s²) divided by 3600, exactly what the inverse-square law predicts at ~60 Earth-radii.
5. **Generalize:** the same three-step argument — inertia + gravity + matching numbers — applies to planets around the Sun, and that is why Newton's synthesis holds for the whole solar system.

## Example

**A satellite that keeps missing the ground.** Imagine firing a cannonball horizontally from a very tall mountain (a thought experiment Newton himself used). With a gentle push, it falls to Earth nearby. Push harder, and it lands farther away. Now push so hard that the Earth's curvature falls away beneath the ball at the same rate the ball falls — the ball "misses" the ground forever, circling the planet. That is an orbit: not a balance of two opposing forces, but one inward force (gravity) continuously bending a sideways motion. Every satellite in orbit today — the ISS, GPS satellites, weather satellites — is a cannonball that keeps missing the ground. Each one's speed is set by the same F = G·m₁·m₂/r² that Newton wrote down in 1687, which is why your GPS can compute positions to meters using Newtonian orbits.

## Common Confusions

| Do Not Confuse | With | Difference |
|---|---|---|
| Gravity pulling planets in needing a "balance" | Orbits needing an outward force | No balancing force exists; inertia supplies sideways motion and gravity bends it |
| The apple story | Documented history | The falling-apple anecdote is a popular account of Newton's reasoning, not a verified event |
| Kepler's laws being the explanation | Kepler's laws being the description | Kepler described; Newton explained by deriving the laws from gravity |
| The Moon "not falling" | The Moon constantly falling | The Moon is always falling — around Earth, not into it; that's what an orbit is |
| Weightlessness in orbit | Absence of gravity | Astronauts feel weightless because they're in free-fall, not because gravity vanished (at ISS altitude it's still ~90% of surface strength) |
| G being the same as g | G being surface gravity | G is universal (~6.67 × 10⁻¹¹ N·m²/kg²); g ≈ 9.8 m/s² is Earth's surface acceleration, a special case |
| Newtonian gravity being exact | Newtonian gravity being an approximation | It fails at high speeds/strong gravity; general relativity corrects it, but Newton works for the solar system |

## Quick Review

1. What exactly did Newton "synthesize"?
2. Write Newton's law of universal gravitation and identify each symbol.
3. Why doesn't the Moon fall into Earth?
4. How does Newton's gravity explain Kepler's second law (equal areas)?
5. What is the difference between G and g?
6. When does Newtonian gravity need to be replaced by general relativity?

<details>
<summary>Show answers</summary>

1. He unified terrestrial and celestial physics: the same gravity that pulls objects to the ground also governs the Moon's orbit and planetary motion, and it mathematically produces Kepler's three laws.
2. F = G·m₁·m₂/r², where F is the gravitational force, m₁ and m₂ the two masses, r the center-to-center distance, and G ≈ 6.67 × 10⁻¹¹ N·m²/kg² the gravitational constant (commonly taught reference value).
3. Because the Moon has sideways motion; gravity continuously bends that path into a closed curve, so it is perpetually "falling around" Earth rather than into it.
4. Gravity is a central force (always directed toward the Sun), so it exerts no torque; angular momentum is conserved, and equal areas in equal times is the geometric expression of that conservation.
5. G is the universal gravitational constant in Newton's law; g ≈ 9.8 m/s² is the specific acceleration of gravity at Earth's surface, which depends on Earth's mass and radius.
6. Near extremely strong gravity (black holes, neutron stars), at speeds approaching light, and in cosmology; Newtonian gravity remains an excellent approximation for the solar system and spacecraft.

</details>

## Related Topics

- Previous: [The Laws of Planetary Motion](01-the-laws-of-planetary-motion.md)
- Next: [Newton's Universal Law of Gravitation](03-newton-s-universal-law-of-gravitation.md)
- Related: [Orbits and Gravity chapter overview](../README.md)

## Source Notes

- Book: Astronomy 2e
- Local outline source: `astronomy-2e.md`
- Official source URL: https://openstax.org/details/books/astronomy-2e/
- Content type: Original educational study guide based on OpenStax outline structure. Values of G (~6.67 × 10⁻¹¹ N·m²/kg²), g (9.8 m/s²), the Moon's distance (~60 Earth-radii), and lunar acceleration (~0.0027 m/s²) are commonly taught reference values; verify against current sources before formal citation.
- Last updated: 2026-08-15
