---
id: genetics-human-genetics-and-medical-applications
title: "Human Genetics And Medical Applications"
slug: human-genetics-and-medical-applications
subject: genetics
subjectName: "Genetics"
contentType: note
lesson: human-genetics-and-medical-applications
lessonNumber: 16
description: "Study notes covering Human Genetics And Medical Applications." 
status: approved
reviewStatus: audited
humanVerificationRequired: false
difficulty: introductory
tags:
  - human
  - genetics
  - medical
  - applications
source: Original local study collection
sourceUrl:
originalFile: "data/source-provenance.json#source-cf246403fe1bfcb9"
lastReviewed:
version: 1.0.0
---

# Human Genetics And Medical Applications

## Learning objectives

- Review and explain the concepts presented in this lesson.

## Main notes

This chapter applies the transmission rules of the course to families and clinics: how disorders are recognized in pedigrees, how modes of inheritance are deduced, and how those deductions drive testing, counseling, and treatment. It also covers chromosome abnormalities, gene therapy, cancer genetics, and pharmacogenomics, then closes with the ethical debates around privacy, discrimination, and enhancement.

### Pedigree Analysis and Mode of Inheritance Determination

A **pedigree** is a standardized family diagram: squares are males, circles are females, filled symbols are affected, and each person is numbered by generation and position so that "II-3" identifies a unique individual. The **proband** is the affected person who first brings the family to attention, and the **mode of inheritance** is the pattern by which the trait passes through generations.

Autosomal dominant patterns show **vertical transmission**: each affected person usually has an affected parent, both sexes are affected, and male to male transmission occurs. Autosomal recessive patterns show **horizontal transmission**: affected siblings are born to unaffected parents, and consanguinity raises the chance that both parents carry the same mutant allele. X linked recessive patterns show affected males connected through carrier females, and mitochondrial patterns show transmission only through females.

| Mode | Affected genotype | Classic family signature | Sex distribution | Example |
| --- | --- | --- | --- | --- |
| Autosomal dominant | Heterozygous Aa | Affected parent with affected child | Both sexes, male to male seen | Huntington disease |
| Autosomal recessive | Homozygous aa | Affected sibs of unaffected parents | Both sexes, consanguinity common | Cystic fibrosis |
| X linked recessive | Males X^h Y, females X^h X^h | Affected males through carrier females | Males mostly affected | Hemophilia A |
| X linked dominant | Heterozygous females, hemizygous males | Affected male transmits to all daughters | Both sexes, more females | Fragile X syndrome |
| Mitochondrial | Heteroplasmic mutant mtDNA | Transmission through females only | Both sexes | MELAS |

```text
PEDIGREE: Three generation family with Huntington disease
Generation I: I-1 affected male x I-2 unaffected female
Generation II: II-1 affected female, II-2 unaffected male, II-3 affected male
Generation III: III-1 affected male and III-2 unaffected female, children of II-1; III-3 unaffected male, child of II-3
Key inference: affected individuals appear in every generation and an affected father has an affected son
Sex distribution: both sexes affected
Most consistent mode: autosomal dominant
```

> **Common Mistake:** Do not call a pedigree autosomal recessive because affected individuals appear in a single generation you drew. If every affected person has an affected parent and both sexes are affected, the pattern is autosomal dominant. Judge the mode from the parent child relationship, not from the affected count.

#### ELI-10

A pedigree is like a family tree drawn for a doctor. Squares are boys and men, circles are girls and women, and dark shapes are people with the disorder. Reading which shapes are dark across the rows shows the pattern of the disorder, like a code. Reading the code is the first step to knowing how the disorder passes down.

### Autosomal Dominant and Recessive Disorders

**Autosomal dominant** disorders need only one mutant allele, so heterozygotes are affected. Huntington disease is autosomal dominant. Achondroplasia is autosomal dominant. Marfan syndrome is autosomal dominant. Neurofibromatosis type 1 is autosomal dominant. Familial hypercholesterolemia is autosomal dominant. Retinoblastoma is autosomal dominant. The genes are *HTT*, *FGFR3*, *FBN1*, *NF1*, *LDLR*, and *RB1*. When one parent is affected, each child has a 1 in 2 chance of inheriting the mutant allele. Dominant disorders often show **incomplete penetrance** (a heterozygote without the phenotype, as in *BRCA1*) and **variable expressivity** (varying severity with the same genotype).

**Autosomal recessive** disorders need two mutant alleles. Cystic fibrosis is autosomal recessive. Sickle cell disease is autosomal recessive. Tay Sachs disease is autosomal recessive. Phenylketonuria is autosomal recessive. Hemochromatosis is autosomal recessive. Wilson disease is autosomal recessive. Alpha thalassemia is autosomal recessive. Beta thalassemia is autosomal recessive. The genes include *CFTR* (7q31.2, deltaF508 most common), *HBB* (11p15.4, Glu6Val), *HEXA* (15q23), *PAH* (12q23.2), *HFE* (6p21.3, C282Y), and *ATP7B* (13q14.3). **Carriers** with one mutant allele are unaffected, and two carriers have a 1 in 4 chance of an affected child per pregnancy and a 3:1 ratio (sums to 4) of unaffected to affected among children.

```text
PEDIGREE: Two unaffected parents with an affected daughter with cystic fibrosis
Generation I: I-1 unaffected male x I-2 unaffected female
Generation II: II-1 affected female, II-2 unaffected male, II-3 unaffected female
Generation III: III-1 unaffected male, child of II-2 and an unaffected partner
Key inference: an affected child from two unaffected parents rules out simple dominance
Sex distribution: both sexes can be affected, with unaffected parents
Most consistent mode: autosomal recessive
Carrier implication: both parents are obligate heterozygotes and unaffected sibs carry a 2/3 carrier risk
```

> **Common Mistake:** When two unaffected parents have an affected child, students often assign an unaffected sibling a carrier probability of 1/2. This ignores the unaffected sibling correction: because the sibling is known not to be aa, the remaining classes AA and Aa stand in a 1:2 ratio (sums to 3), so the carrier probability is 2/3, not 1/2.

#### ELI-10

Think of a disorder as a recipe that can go wrong. Autosomal dominant means one bad copy of the recipe is enough to ruin the dish. Autosomal recessive means both copies must be bad, so a person with one bad copy looks fine. Two people with one bad copy each can have a child with two bad copies.

### X Linked Disorders

For **X linked recessive** disorders, males are **hemizygous**, so a single mutant allele produces the phenotype. Hemophilia A is X linked recessive. Hemophilia B is X linked recessive. Duchenne muscular dystrophy is X linked recessive. *G6PD* deficiency is X linked recessive. Red green color blindness is X linked recessive. The genes are *F8* (Xq28), *F9* (Xq27.1), *DMD* (Xp21.2), *G6PD* (Xq28), and *OPN1LW* and *OPN1MW* (Xq28). A carrier female *X^H X^h* is usually unaffected; her sons are affected in a 1:1 ratio (sums to 2), and half of her daughters are carriers. An affected male *X^h Y* never transmits the allele to sons, so male to male transmission never occurs, and all of his daughters are **obligate carriers**.

**X linked dominant** disorders affect heterozygous females as well as hemizygous males. Fragile X syndrome is X linked dominant, caused by *FMR1* (Xq27.3, CGG repeat expansion silencing *FMR1*, intellectual disability, long face, large ears). An affected male transmits the allele to all of his daughters and to none of his sons.

```text
PEDIGREE: Three generation hemophilia A family
Generation I: I-1 affected male x I-2 unaffected female
Generation II: II-1 carrier female x II-2 unaffected male
Generation III: III-1 affected male, III-2 unaffected male, III-3 carrier female
Key inference: affected males appear in every generation but no affected male has an affected son
Sex distribution: only males affected, transmission through carrier females
Most consistent mode: X linked recessive
Carrier implication: all daughters of an affected male are obligate carriers
```

#### ELI-10

Boys have one X chromosome and girls have two, and a boy gets his X from his mother. If a disorder hides on the X, a boy with the bad copy shows it while a girl with one bad copy usually stays fine. That is why these disorders mostly appear in boys and travel through mothers. It is like dealing a card from the mother's deck, and a father can never deal it to his sons.

### Mitochondrial Inheritance

**Mitochondrial inheritance** follows the organelles, not the chromosomes. Mitochondria travel in the cytoplasm of the egg, and sperm contribute essentially none, so an affected mother can pass the disorder to all her children while an affected male passes it to none; both sexes can be affected. MELAS is mitochondrial. Leber hereditary optic neuropathy is mitochondrial. NARP is mitochondrial. The genes are *MT-TL1* (tRNA Leu defect, stroke like episodes and lactic acidosis), *MT-ND4* (complex I defect, acute vision loss), and *MT-ATP6* (ATP synthase defect, neuropathy and ataxia). **Heteroplasmy**, the coexistence of mutant and wild type mitochondrial DNA in one cell, varies between tissues and explains the wide variation in severity within a family.

```text
PEDIGREE: Two generation family with MELAS
Generation I: I-1 affected female x I-2 unaffected male
Generation II: II-1 affected female, II-2 affected male, II-3 unaffected female, all children of I-1
Generation III: III-1 affected female, child of II-1; children of II-2 and II-3 unaffected
Key inference: transmission only through the affected mother, never through the affected male
Sex distribution: both sexes affected, transmission only through females
Most consistent mode: mitochondrial
```

#### ELI-10

Mitochondria are tiny power plants inside our cells, and they carry their own small DNA. A child gets all of that DNA from the egg of the mother. A father cannot pass his mitochondrial DNA to anyone, even though he may have the disorder. So a mitochondrial disorder is like a family heirloom that only the mothers pass on.

### Anticipation and Trinucleotide Repeat Expansion

**Trinucleotide repeat expansion** is a mutation in which a three base unit repeats many times and the repeat count grows when the allele is transmitted. **Anticipation** is the clinical signature: each generation carries more repeats, earlier onset, and greater severity. Huntington disease (autosomal dominant, CAG expansion in *HTT*, gain of function, chorea and cognitive decline) shows anticipation. Myotonic dystrophy type 1 (autosomal dominant, CTG expansion in *DMPK* on 19q13.32, myotonia and cataracts) shows anticipation. Spinocerebellar ataxia type 1 (autosomal dominant, CAG expansion in *ATXN1* on 6p22.3, ataxia) shows anticipation. Fragile X syndrome (X linked dominant, CGG expansion silencing *FMR1*) grows from a moderate premutation to a full mutation in the next generation. Repeats are stable during mitosis but expand during germline transmission, so onset correlates with repeat number.

#### ELI-10

Some genes carry a sentence that gets copied over and over. Most people have a few copies and stay fine, but sometimes the copy count grows when the gene is passed to the next generation. When the copy count is bigger, the disorder starts earlier and hits harder. This is like a copying game where the message gets longer every time it is passed on.

### Structural Chromosome Abnormalities and Their Consequences

Chromosome abnormalities are numerical or structural, and the reference records their pattern as chromosomal. **Numerical** abnormalities change chromosome number. Down syndrome is chromosomal. Edwards syndrome is chromosomal. Patau syndrome is chromosomal. Klinefelter syndrome is chromosomal. Turner syndrome is chromosomal. **Trisomy**, three copies, causes Down syndrome (trisomy 21), Edwards syndrome (trisomy 18), and Patau syndrome (trisomy 13), and Klinefelter syndrome (47,XXY). **Monosomy** is one copy: Turner syndrome (45,X) is the only viable human monosomy, and autosomal monosomy is lethal. Most trisomies arise de novo, the risk rises with maternal age, and recurrence risk is low.

**Structural** abnormalities rearrange segments. **Deletion** removes one: cri du chat syndrome (5p deletion at 5p15.2, cat like cry and intellectual disability) and DiGeorge syndrome (22q11.2 microdeletion, heart defects, immune deficiency, palatal anomalies) are both chromosomal. **Duplication**, **inversion**, and **translocation** do not change chromosome number; a balanced translocation carrier is phenotypically normal but makes unbalanced gametes, causing recurrent pregnancy loss. **Mosaicism**, two karyotypically different cell lines in one person, can let a clinically normal parent transmit an abnormal chromosome.

#### ELI-10

Chromosomes are like big books of instructions in every cell, and usually there are exactly two copies of each book. A trisomy is a third copy of one book, and a deletion is a missing chapter. Extra books or missing chapters confuse the body as it builds itself. Some mistakes happen fresh in the egg or sperm, so the parents are fine even when the child is not.

### Prenatal Newborn Carrier and Predictive Testing Modalities

Testing happens at every life stage: prenatal options include **noninvasive prenatal testing (NIPT)**, which analyzes cell free fetal DNA in maternal blood and is a screening test, and the diagnostic procedures **amniocentesis** (second trimester fetal karyotype from amniotic fluid) and **chorionic villus sampling (CVS)** (first trimester fetal karyotype from placental villi), both with a small procedure related risk. **Newborn screening** uses a dried blood spot to detect treatable conditions such as phenylketonuria, cystic fibrosis, and sickle cell disease before symptoms appear. **Carrier screening** identifies unaffected heterozygotes for autosomal recessive conditions such as cystic fibrosis (*CFTR*, deltaF508 most common). **Predictive testing** includes **presymptomatic testing** for adult onset disorders such as Huntington disease and predisposition testing for **hereditary breast and ovarian cancer syndrome**.

The case for broad testing: early detection changes outcomes for treatable conditions, results support informed decisions, and surveillance can begin where it prevents disease. The case against: screening generates false positives and variants of uncertain significance, diagnostic prenatal results confront families with decisions they may not wish to face, and predictive results cannot be unlearned. The decision belongs to the individual with the clinician, and this chapter takes neither side.

#### ELI-10

There are tests at many different times in life, from the baby before birth to grown ups who feel fine. Screening tests are like metal detectors that beep often, and diagnostic tests are like looking directly at the treasure. A screening result says maybe, and only a diagnostic test can say yes or no. Each kind of test has its place and its limits.

### The Role and Limits of Genetic Counseling

**Genetic counseling** is a health profession that helps people understand and adapt to the medical, psychological, and familial implications of genetic contributions to disease. Counselors construct pedigrees, explain modes of inheritance, translate results into plain probability, and support families through decisions; they do not make the decisions. The profession is **nondirective** in principle: the counselor presents options and consequences and supports whatever choice the client makes. The case for the profession: accurate comprehension changes decisions for the better, and a dedicated expert communicates probability better than a busy clinician. The case against overreliance: practice can drift toward directive advice, probabilities are often misunderstood however carefully explained, and mandatory pretest counseling can delay access. The limits are real: risks are probabilities, not predictions, and counseling cannot remove the uncertainty that motivated the consultation.

#### ELI-10

A genetic counselor is like a tour guide for family health information. The guide shows the family the map, explains the signs, and talks through the different roads, but does not choose the road. The family makes the decision, and the guide helps them walk it. Even the best guide cannot promise what lies around every corner.

### Gene Therapy Approaches Including Viral Vectors and Base Editing

**Gene therapy** corrects disease by adding, editing, or silencing genes, and delivery nearly always uses a **viral vector**: a virus engineered to be harmless and repurposed as a delivery capsule. Adeno associated virus vectors deliver a functional gene to non dividing cells and underlie approved treatment for inherited retinal dystrophy caused by *RPE65* loss. Lentivirus vectors integrate into the genome of dividing cells and support **ex vivo** strategies in which blood stem cells are corrected outside the body and returned, as for adenosine deaminase deficiency (*ADA*). **Base editing** fuses a catalytically disabled Cas9 variant with a base conversion enzyme, changing a single base pair without cutting both DNA strands; point mutation disorders such as sickle cell disease (*HBB*, Glu6Val) are the natural targets. Hurdles include immune responses, vector insertion at the wrong position (**insertional mutagenesis**), delivery, durability, and cost. Somatic gene therapy alters only the treated person; germline alteration is debated in the last section.

#### ELI-10

Imagine a library where every copy of one book has a wrong word on the same page. Gene therapy is like sending a repair person with the correct page. Some repair people paste in a whole new page, and others change just one wrong letter. The hard part is getting the repair person to the exact shelf without breaking other books.

### Cancer Genetics Including Hereditary Breast Ovarian and Lynch Syndrome

Cancer genes fall into two classes. **Tumor suppressors** restrain growth, and both copies must be inactivated, the **two hit model** defined with retinoblastoma (*RB1*). Inheriting one inactive copy predisposes every cell, so one somatic hit can start a tumor; hereditary cancer syndromes therefore look autosomal dominant at the family level, with early, often multiple, tumors. **Oncogenes** such as *KRAS*, *NRAS*, and *MYC* promote growth, and activating variants are dominant with a single hit sufficient.

Hereditary breast and ovarian cancer syndrome is autosomal dominant. It is caused by loss of homologous recombination repair variants in *BRCA1* (17q21.31) or *BRCA2* (13q13.1), shows incomplete penetrance, and carries elevated breast and ovarian cancer risk. Lynch syndrome is autosomal dominant. It is caused by loss of DNA mismatch repair in *MLH1* (3p22.2) or *MSH2* (2p21), with colorectal, endometrial, and other cancers. Hereditary cases arise earlier and cluster in families relative to sporadic cancer.

#### ELI-10

A cell is like a car, and cancer happens when the brakes fail or the gas pedal sticks. Tumor suppressor genes are the brakes, and oncogenes are the gas pedal. Most people are born with two working brakes, and both must break for the car to run away. People who inherit one broken brake need only one more break, which is why inherited cancers show up earlier and in families.

### Pharmacogenomics

**Pharmacogenomics** studies how genetic variation changes drug response, with the goal of choosing the drug and dose from the genotype. *CYP2D6* (22q13.2, cytochrome P450 2D6) metabolizes many drugs: poor metabolizer variants raise drug levels and toxicity risk, while duplicated alleles create ultrarapid metabolizers who clear drugs too quickly for effect. *TPMT* (6p22.3, thiopurine methyltransferase) metabolizes thiopurine drugs, and low enzyme activity allows toxic metabolites to accumulate unless the dose is reduced. *G6PD* deficiency is X linked recessive and matters pharmacologically because oxidant drugs trigger hemolytic anemia in deficient males. The same dose of the same drug can be ineffective, adequate, or toxic across genotypes, so genotype guided dosing is increasingly standard.

#### ELI-10

A medicine is like a juice that the body must clean after drinking. Some bodies clean it fast, some slowly, and some almost not at all, and the cleaning speed is written in the genes. If two people take the same medicine, one may get too little and another too much. Checking the cleaning genes before dosing is the idea of pharmacogenomics.

### Direct to Consumer Testing and Its Limitations

**Direct to consumer (DTC) testing** sells genetic tests straight to the consumer, without a clinician in the loop, from ancestry and wellness reports to carrier status and cancer risk variants. The case for DTC testing: convenience, lower cost, personal control of data, and privacy at home. The case against: results arrive without clinical context, companies test different variant sets so a negative result on one panel is not a negative elsewhere, many variants are of uncertain significance, and a consequential result such as a *BRCA1* finding can arrive with no counselor in the room. In the United States, tests claiming to diagnose or predict disease fall under FDA oversight, while many wellness reports do not. DTC testing increases access while transferring the burden of interpretation to the people least equipped to carry it.

#### ELI-10

A home genetic test is like a magic guessing book that claims to tell the future. Some pages are fun to read, like pages about favorite foods, but other pages talk about serious things and can be wrong. The book cannot see inside a doctor's office, and it does not know the family story. Knowing its limits matters as much as reading the pages.

### Privacy Discrimination and Enhancement Debates

**Genetic privacy** is control over who may see genomic data, including health records, research biobanks, and testing company databases. **Genetic discrimination** is the use of genetic information to disadvantage someone in insurance or employment. In the United States, the Genetic Information Nondiscrimination Act (GINA) bars health insurers and employers from using genetic information, but does not cover life insurance or long term care insurance. The case for strong privacy protection: genetic information is predictive, permanent, and shared with relatives, so misuse harms a whole family, and strong protection encourages research participation. The case for sharing with limits: medical progress depends on large datasets, genomes are nearly unique so anonymity is imperfect, and extending discrimination bans may protect people better than hiding data.

**Genetic enhancement** is the use of gene therapy or editing for traits beyond disease, such as strength or memory. The case for enhancement: it often repairs the same pathways that disease variants damage, so the therapy enhancement boundary is arbitrary. The case against: access would be unequal, identity and fairness questions are unresolved, and germline changes are irreversible decisions made for people who cannot consent. The debates are open, and this chapter presents both sides without endorsing either.

#### ELI-10

DNA is like a diary that describes the body's plan. A diary should be private, but doctors and researchers would like to read it to help people. Some people worry that insurance or jobs could be decided from the diary, and laws now stop the worst of that. Other people worry about making babies to a new design, like choosing upgrades.

### Worked Example Carrier Risk With the Unaffected Sibling Correction

**Problem:** Two unaffected parents have a daughter with cystic fibrosis, which is autosomal recessive. What is the probability that their unaffected son is a carrier? If the population carrier frequency is 1/25, what is the probability that the son and an unrelated partner have a child with cystic fibrosis?

**Given:** Both parents are obligate heterozygotes, so each child has genotype 1/4 *AA*, 1/2 *Aa*, and 1/4 *aa* before conditioning. The son is unaffected, which excludes *aa*.

**Plan:** Condition on the son being unaffected, then multiply the resulting carrier probability by the partner carrier frequency and by the 1/4 chance that two carriers have an affected child.

**Solution:** P(carrier and unaffected) = 1/2. P(unaffected) = 3/4. P(carrier given unaffected) = (1/2) / (3/4) = 2/3; the naive 1/2 read off the 1:2:1 genotype ratio (sums to 4) overstates the chance because the affected class is excluded. Child affected: 2/3 x 1/25 x 1/4 = 2/300 = 1/150.

**Answer:** The unaffected son is a carrier with probability 2/3, and his child with an unrelated partner has cystic fibrosis with probability 1/150.

### Worked Example Trinucleotide Repeat Anticipation

**Problem:** In a family with Huntington disease, a man carries 45 CAG repeats in the expanded *HTT* allele and began having symptoms at age 50. His daughter carries 56 repeats and began at age 39. His grandson carries 67 repeats. Assuming onset age declines by a constant number of years per added repeat, predict the grandson's onset age.

**Given:** Grandfather, 45 repeats and onset 50. Daughter, 56 repeats and onset 39. Grandson, 67 repeats.

**Plan:** Compute the onset change per added repeat between grandfather and daughter, then apply that rate to the grandson's repeat count measured from the grandfather.

**Solution:** Repeat gain from grandfather to daughter: 56 - 45 = 11. Onset change: 50 - 39 = 11 years earlier. Rate: 11 years / 11 repeats = 1 year per repeat. Grandson repeat gain over grandfather: 67 - 45 = 22. Predicted onset: 50 - (22 x 1) = 50 - 22 = 28.

**Answer:** The grandson's predicted onset age is 28 years.

> **High-Yield:**
> - Deduce the mode from the parent child relationship first, then check the sex distribution.
> - The unaffected sibling correction raises the carrier probability from 1/2 to 2/3 in autosomal recessive families.
> - X linked recessive traits never pass from father to son, and mitochondrial traits never pass from a male at all.
> - Anticipation tracks trinucleotide repeat expansion, so repeat count, not just family history, predicts onset.

### Quick Review

- Judge a pedigree from the parent child relationship: an affected parent with an affected child signals dominance.
- The unaffected sibling correction raises carrier probability from 1/2 to 2/3 in autosomal recessive families.
- X linked recessive traits never pass from father to son, and all daughters of an affected male are obligate carriers.
- Mitochondrial disorders pass only through females, and both sexes can be affected.
- Anticipation means repeat expansion grows across generations with earlier onset and greater severity.
- Trisomies, deletions, and translocations are chromosomal abnormalities, and most arise de novo.
- NIPT and newborn screening are screening tests, while amniocentesis and chorionic villus sampling are diagnostic.
- Hereditary breast and ovarian cancer syndrome and Lynch syndrome are autosomal dominant; pharmacogenomics tailors dosing to genotype.

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
