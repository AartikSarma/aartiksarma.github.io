---
layout: page
title: Research
subtitle: >-
  Why do patients with the same diagnosis respond so differently to the same
  treatment — and why do so many promising treatments fail in large trials?
permalink: /research/
---

Two questions drive everything in my lab. They turn out to be the same question.

Critical illness syndromes — the acute respiratory distress syndrome (ARDS),
sepsis — are defined by what a clinician can observe at the bedside: an oxygen
level, an infiltrate on a chest X-ray, a blood pressure that won't hold. Those
definitions were built to be usable at 3 a.m. anywhere in the world, and they
succeed at that. But they group together patients whose underlying biology has
very little in common.

That heterogeneity is not a nuisance. It is, I think, the central obstacle in
critical care research. When a trial enrolls a syndrome rather than a disease,
a treatment that helps one subgroup and harms another comes out looking like it
does nothing at all. Decades of neutral ARDS and sepsis trials are at least
partly a measurement problem.

<div class="aside" markdown="1">
**In plain terms.** If you took every person with a cough and gave them all the
same antibiotic, the trial would fail — not because the drug doesn't work, but
because "cough" isn't one disease. My work is an attempt to find, in critical
illness, the distinctions that "cough" is missing.
</div>

## Reading the lung directly

Most of what we know about the biology of critical illness comes from blood,
because blood is easy to get. But ARDS is a disease of the lung, and the blood
is a lossy proxy for it.

We use fluid suctioned from the breathing tubes of ventilated patients —
tracheal aspirate, a sample that is collected as part of routine care and
usually discarded — and sequence the RNA in it. That gives a direct read of
which immune programs are running in the airway, in real patients, in real
time. Combined with metagenomic sequencing, the same sample also tells us what
microbes are present, without having to guess in advance what to culture for.

This approach produced the finding I'm proudest of: at the height of the
pandemic, when "cytokine storm" was the prevailing explanation for COVID-19
lung injury, airway sequencing showed *less* inflammatory gene expression in
COVID-19 ARDS than in ARDS from other causes, along with a blunted interferon
response. The metaphor pointed treatment in the wrong direction.

## Molecular phenotypes, and whether they are real

Plasma biomarkers separate ARDS and sepsis patients into hyperinflammatory and
hypoinflammatory phenotypes that differ in mortality and — critically — in how
they respond to treatments in retrospective analyses of clinical trials. If
those phenotypes are real biological entities rather than statistical artifacts,
they are the closest thing critical care has to a precision medicine target.

Much of my work tests exactly that. Do the phenotypes correspond to distinct
biology in the lung itself, not just in the blood? (They do: hyperinflammatory
ARDS shows markedly greater interferon signaling and T-cell activation in
airway samples.) Are they stable over time, or does a patient move between them?
Do they hold up in immunocompromised patients, in sepsis, in trial cohorts
enrolled a decade apart?

## Algorithms already at the bedside

Not all of the heterogeneity problem is molecular. Some of it is arithmetic
that nobody has re-examined.

Every mechanically ventilated patient's breath size is set from predicted body
weight — a formula derived from height and sex in the 1990s, used as a stand-in
for how big the lungs were before they were injured. Across 21,000 patients in
two ICU databases, we found that this formula systematically overestimates lung
size in patients who are older, shorter, female, or not White, when compared
against modern spirometric reference equations. The greater the mismatch, the
higher the odds of dying.

This is algorithmic bias, but it predates machine learning by thirty years. It
is a reminder that a formula embedded deeply enough in routine care stops
looking like a modeling choice at all.

## Building the infrastructure

These questions need data from many hospitals, and patient data mostly cannot
leave the hospital that holds it. So a growing share of my work is
infrastructure: federated analysis pipelines built on the CLIF common data
model, where each site runs identical code locally and shares only summary
statistics. Along with tooling for reproducible Bayesian re-analysis and tidy
RNA-seq workflows, all of it is [open source]({{ '/software/' | relative_url }}).

## Beyond the ICU

The same instinct — that an average can conceal more than it reveals — occasionally
leads somewhere unexpected. With two economists, I looked at the sharp rise in
US traffic deaths after 2020 and found that the increase fell disproportionately
on Black Americans. Different data, same question: who does the average hide?

## Support and collaboration

This work is supported by a K23 career development award from the National
Heart, Lung, and Blood Institute, and is carried out with the
[Calfee lab](https://calfeelab.ucsf.edu/), the
[Langelier lab](https://langelierlab.ucsf.edu/), the UCSF
[Center for Precision Research in Critical Care](https://cprcc.ucsf.edu/), and
collaborators across the ARDS and sepsis research community.

If you have a cohort, a question, or a trainee looking for a project, I'd like
to hear from you — [{{ site.author.email }}](mailto:{{ site.author.email }}).
