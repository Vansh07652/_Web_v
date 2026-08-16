---
id: biology-2-population-and-community-ecology
title: "Population And Community Ecology"
slug: population-and-community-ecology
subject: biology-2
subjectName: "Biology 2"
contentType: note
lesson: population-and-community-ecology
lessonNumber: 13
description: "Study notes covering Population And Community Ecology." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - population
  - community
  - ecology
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-ea88cfa11bf1b5f5"
lastReviewed:
version: 1.0.0
---

# Population And Community Ecology

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

Population and community ecology asks why some species explode in number while others vanish, and how species manage to share the same patch of land. The models here give conservation biologists the numbers to judge whether a whale population is recovering, and they give fisheries managers the limits to set on annual harvests. The topic builds on inheritance, behavior, and natural selection from earlier chapters, and it supplies the species-level machinery that the ecosystem flows of the next topic depend on. Populations are the currency of evolution, and communities are its stage.

### Life Tables and Survivorship

A **population** is a group of individuals of the same species living in the same area at the same time. Ecologists track populations by recording births, deaths, and movement, and they organize those records into a **life table**, an age-by-age account of how many members of a cohort survive and how many offspring each surviving female produces. A **cohort** is a group of individuals born in the same time interval, followed from birth until the last member dies. From a life table, ecologists read the **survivorship**, the fraction of the cohort still alive at each age, along with life expectancy and age-specific reproduction.

Survivorship patterns in nature cluster into three idealized curves. **Type I survivorship** shows low mortality throughout most of life and a steep die-off in old age; large mammals that invest heavily in few young, including humans and elephants, follow this pattern. **Type II survivorship** shows a constant death rate at every age, so its curve is a straight diagonal line; many birds and small rodents fit it. **Type III survivorship** shows enormous mortality in the youngest stages, after which the few survivors live long; fish that release thousands of eggs, insects, and oaks that drop millions of acorns show it. Real populations usually fall between the types.

| Survivorship curve | Deaths concentrated when | Typical species |
| --- | --- | --- |
| Type I | Old age | Humans, elephants, whales |
| Type II | Steady at every age | Many birds, squirrels |
| Type III | Very early life | Fish, insects, oysters, oaks |

> **Common Mistake:** Confusing Type II with Type III is common. Type II has the same death rate at every age, so its curve is a straight diagonal. Type III plunges steeply in youth because most young die, then flattens for the survivors. Look at where the curve falls fastest.

#### ELI-10

Think of a classroom of thirty students born the same year. In a Type I class, almost everyone stays until the last day of the year. In a Type II class, one student leaves each month at a steady rate. In a Type III class, twenty-five kids vanish in the first week, and the remaining five finish the year together. Each curve is just a different list of who is still present at each grade.

### Exponential and Logistic Growth

The simplest growth model assumes unlimited resources. Let N stand for the population size and r for the **intrinsic rate of increase**, the per-capita growth rate when nothing limits growth. The **exponential growth model** is dN/dt = rN, meaning the change in numbers per unit time equals the current size times the rate. Because each individual adds more individuals, growth feeds on itself and the curve is **J-shaped**, rising faster and faster with no ceiling. Exponential growth fits real situations only briefly: bacteria in a fresh flask, algae in a fertilized pond, or deer introduced to an island without predators.

No environment is infinite, so the **carrying capacity K**, the largest population the environment can support, is central to the **logistic growth model**, dN/dt = rN(1 - N/K). When N is small, the factor (1 - N/K) is close to 1 and growth is nearly exponential. As N approaches K, that factor shrinks toward zero, growth slows, and the population levels into an **S-shaped curve** that plateaus at K. If N overshoots K, the factor turns negative and the population shrinks back toward it. The value of K is not fixed; drought, disease, and human activity all move it.

The two models also describe two life-history strategies. **r-selected species** live fast: small body, many small offspring, little parental care, and boom-and-bust numbers that ride far below K, as in insects and annual weeds. **K-selected species** live slow: large body, few well-cared-for offspring, and stable populations that sit near K, as in elephants and whales.

| Feature | r-selected species | K-selected species |
| --- | --- | --- |
| Population size | Variable, usually below K | Stable, near K |
| Offspring | Many and small | Few and large |
| Parental care | Little or none | Extensive |
| Examples | Insects, annual weeds | Elephants, whales |

```text
1. Exponential growth: dN/dt = rN, the size N times the rate r.
2. Logistic growth: dN/dt = rN(1 - N/K), slowed as N approaches K.
3. Add the change dN/dt to the current N to get the new size.
4. Repeat for each time interval to draw the curve.
```

> **Common Mistake:** A population sitting at K is not frozen; individuals still die and new ones are born. The common error is thinking that growth stops completely. At K the birth rate and death rate balance, so the size holds steady.

#### ELI-10

A penny that doubles every day grows one, two, four, eight, sixteen. Exponential growth is that doubling, and it explodes quickly. Now imagine a fish tank that holds only ten fish. The doubling continues at first, but as the tank fills, the fish crowd each other. Growth slows near ten fish, the tank's capacity, and the tank stays full without overflowing.

### Density Dependence

**Density dependence** describes factors whose effect on per-capita growth changes with population density. **Density-dependent factors** hit harder as crowding increases: competition for food, water, nesting sites, and mates; disease and parasites, which spread faster where contact is frequent; and predation, which often removes a larger share of crowded prey. Because these factors strengthen as N rises, they slow growth and can hold a population near K, the mechanism of **population regulation**.

**Density-independent factors** remove roughly the same fraction regardless of crowding: severe winters, floods, drought, fire, and other physical events. A hard freeze takes scattered grasshoppers and crowded ones alike, and a landslide wipes out plants whether the patch is large or small. Such events can crash a population far below K, but because their strength does not depend on N they cannot regulate a population around a stable level.

| Feature | Density-dependent | Density-independent |
| --- | --- | --- |
| Strength changes with crowding | Yes | No |
| Examples | Competition, disease, predation | Weather, floods, fire |
| Effect as N rises | Slows per-capita growth | No change |
| Can regulate population | Yes | No |

> **Common Mistake:** Calling a winter storm density-dependent because it killed many deer is wrong. What matters is whether the death rate changed with crowding. A storm hits crowded and sparse herds alike, so it is density-independent.

#### ELI-10

A playground with three swings and thirty children has a shortage, and every child gets less play. That shortage depends on how many children show up. A surprise thunderstorm sends everyone inside, crowded or not. The storm does not care how many children are present, so it hits everyone the same.

### Competition Predation and Symbiosis

Species interact constantly, and those interactions shape communities. **Interspecific competition** occurs when two species use the same limited resource, and it harms both users. The **competitive exclusion principle** states that two species cannot coexist indefinitely on the same limiting resource; the superior competitor eventually eliminates the other, as Gause showed when two Paramecium species sharing one food source collapsed to one. Coexistence persists only when the species differ in resource use, through **resource partitioning**, the division of a resource by space, time, or prey size. Five warbler species feed in the same spruce tree yet coexist because each forages in a different zone of the tree, and this same pressure drives **character displacement**, the evolution of different physical traits where competitors overlap.

**Predation** is an interaction in which one organism, the **predator**, kills and eats another, the **prey**. Predator and prey numbers commonly cycle out of phase, best documented in the snowshoe hare and Canada lynx records from fur-trade ledgers, where hare peaks are followed a year or two later by lynx peaks. Prey evolve defenses against this pressure, including camouflage, warning coloration, mimicry, spines, and toxins, and predators in turn evolve sharper detection.

**Symbiosis** is a long-term, close association between species, and it takes three forms. In **mutualism** both species benefit, for example, bees that gather nectar while pollinating flowers, or nitrogen-fixing bacteria that feed legumes while receiving sugars. In **commensalism** one species benefits and the other is unaffected, for example, barnacles attached to a whale, or remoras hitching rides on sharks. In **parasitism** the parasite benefits while the host is harmed, for example, a tapeworm absorbing nutrients from a dog's intestine.

| Interaction | Species A | Species B |
| --- | --- | --- |
| Competition | Harmed | Harmed |
| Predation | Benefits, the predator | Harmed, the prey |
| Mutualism | Benefits | Benefits |
| Commensalism | Benefits | Unaffected |
| Parasitism | Benefits, the parasite | Harmed, the host |

#### ELI-10

Two kids divide one cookie pile, and both end up with less. In another pair, one kid shares a bite and the other shares juice, so both win. In a third pair, one kid eats beside the other and nothing is taken, so only the eater benefits. In the last pair, one kid steals the whole lunch, so one wins and one loses. These four endings are competition, mutualism, commensalism, and parasitism.

### Niche Concepts

An **ecological niche** is the full set of conditions and resources under which a species can survive and reproduce, its entire role in the community: what it eats, when it is active, where it shelters, and how it tolerates temperature and moisture. The **habitat** is the physical place where a species lives, and the niche is the job the species holds within that place. The **fundamental niche** is the complete range of conditions a species could use with no interference from other species. The **realized niche** is the narrower range actually used once competition, predation, and other interactions are included. When a competitor is removed experimentally, species often expand back toward the fundamental niche, evidence that interactions shrink the realized niche.

> **Common Mistake:** Equating habitat with niche is the classic error. Habitat is the address, and the niche is the occupation, what the species does at that address.

#### ELI-10

Think of an actor with many talents. The full set of roles the actor could play is the fundamental niche. The roles actually offered after other actors take the lead parts is the realized niche. Habitat is just the theater where the actor performs. Competition with other actors shrinks the list of parts, and the realized niche is what remains.

### Succession

**Succession** is the predictable sequence of species replacing one another in a community after a disturbance. **Primary succession** begins where no soil exists at all, on bare rock, fresh lava, or newly exposed glacial till. The first colonists are **pioneer species**, such as lichens and mosses, that tolerate harsh conditions and slowly weather rock into the first thin soil. Grasses and shrubs follow as the soil deepens, then fast-growing trees, and finally a relatively stable **climax community** of long-lived species that reproduce and persist in place. Primary succession is slow because the soil must be built from nothing, and it can take centuries.

**Secondary succession** begins where soil and often a seed bank and surviving roots remain, after fire, flood, or farmland abandonment. It runs faster because the foundation is already present; abandoned farm fields in the eastern United States reach young forest within decades. Some communities are maintained by disturbance itself, such as longleaf pine woodlands that depend on frequent fire and lose their habitat when fire is suppressed.

```text
1. Bare rock or fresh lava, no soil at all.
2. Lichens and mosses break down rock.
3. Thin soil supports grasses and shrubs.
4. Fast-growing trees shade the pioneers.
5. A climax community becomes established.
```

#### ELI-10

Imagine a sidewalk that got covered with sand. A few tough weeds grow first because the sand gives their roots a grip. Later, grass spreads and the weeds thin out. Eventually bushes and then trees arrive, and each new group changes the spot for the next. Primary succession is the same story but starting on bare rock with no sand at all, so it takes much longer.

> **High-Yield:**
> - Exponential growth is dN/dt = rN; logistic growth is dN/dt = rN(1 - N/K) and levels off at the carrying capacity K.
> - Survivorship curves: Type I late mortality, Type II steady mortality, Type III early mortality.
> - The competitive exclusion principle says two species cannot share one limiting resource forever, and resource partitioning allows coexistence.
> - Symbiosis comes in three types: mutualism helps both, commensalism helps one, and parasitism helps the parasite while harming the host.
> - Primary succession starts without soil, and secondary succession starts with soil already present.

### Quick Review

- A life table tracks a cohort's survival and reproduction, and survivorship curves summarize the pattern.
- Exponential growth, dN/dt = rN, is J-shaped, while logistic growth, dN/dt = rN(1 - N/K), is S-shaped and plateaus at K.
- Density-dependent factors, including competition, disease, and predation, regulate populations near K, while density-independent factors such as weather do not.
- The competitive exclusion principle limits coexistence, and resource partitioning and character displacement let competitors divide resources.
- Predator and prey numbers cycle out of phase, as in the snowshoe hare and lynx record.
- Symbiosis has three forms: mutualism, commensalism, and parasitism.
- A realized niche is the fundamental niche reduced by competition and other interactions.
- Primary succession begins on bare rock without soil, while secondary succession begins where soil remains.

## Key terms

Key terms are emphasized and defined within the main notes.

## Important formulas or processes

See the formulas, procedures, and process blocks in the main notes where applicable.

## Common mistakes

See the labeled common-mistake callouts in the main notes where present.

## Review points

Use the quick-review or recap section in the main notes.

## Sources

Source citations from the original material are preserved in the main notes when supplied. The local-file provenance record is listed in the front matter.
