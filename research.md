---
layout: page
title: Research
subtitle: >-
  The longer version — what my lab actually does, and why the definitions we use
  for critical illness are the thing standing in the way.
permalink: /research/
---

Intensive care runs on syndromes rather than diseases. ARDS and sepsis are
defined by clinical criteria — a threshold oxygen level, an infiltrate on a
chest X-ray, organ dysfunction in the setting of infection. Those definitions
are deliberately broad, because they have to be applied fast, by anyone,
anywhere.

Everything downstream inherits that breadth. A trial that enrolls a syndrome is
enrolling several different diseases at once and averaging over them, so a drug
that helps one subgroup and harms another reports nothing at all. Decades of
neutral ARDS and sepsis trials are, at least in part, a measurement problem
rather than a pharmacology one.

<div class="aside" markdown="1">
**If you think in systems.** A chest X-ray is a screenshot. What we want is the
log stream — what the cells were actually doing, hour to hour, while the patient
got better or worse.
</div>

## Reading the lung directly

Most of what we know about the biology of critical illness comes from blood,
because blood is easy to draw. But ARDS is a disease of the lung, and blood is a
lossy proxy for it.

So we use tracheal aspirate — fluid suctioned out of the breathing tube several
times a day as part of routine care, and otherwise thrown away — and sequence
the RNA in it. That gives a direct readout of which immune programs are running
in the airway of a living patient. Run the same sample through metagenomic
sequencing and it also tells you which microbes are present, without having to
decide in advance what to culture for.

This is where the COVID-19 result came from. In 2020, "cytokine storm" was the
prevailing account of what the virus did to lungs. Sequencing airway samples
from 52 critically ill patients showed *less* inflammatory gene expression than
in ARDS from other causes, along with a blunted interferon response. The
metaphor was pointing treatment in the wrong direction.

## Are the subtypes real?

Blood biomarkers separate ARDS and sepsis patients into hyperinflammatory and
hypoinflammatory groups. Those groups differ in mortality and — the part that
matters — respond differently to treatment when you go back through completed
trials. If they are real biological entities rather than clustering artifacts,
they are the closest thing critical care has to a precision medicine target.

Much of my work is stress-testing that. Do the groups correspond to different
biology in the lung itself, not just in blood? (They do: the hyperinflammatory
group shows far more interferon signaling and T-cell activation in airway
samples.) Are they stable, or does a patient move between them over a week? Do
they hold up in immunocompromised patients, in sepsis, in cohorts enrolled a
decade apart?

## Algorithms already at the bedside

Not all of the problem is molecular. Some of it is arithmetic nobody has
re-examined.

Every ventilated patient's breath size is set from predicted body weight — a
formula that takes height and sex and stands in for how large the lungs were
before they were injured. Checked against modern spirometry reference equations
across 21,000 patients in two ICU databases, that formula systematically
overestimates lung size in patients who are older, shorter, female, or not
White. The greater the mismatch, the higher the odds of dying.

That is algorithmic bias, and it predates machine learning by thirty years. A
formula embedded deeply enough in routine care stops looking like a modeling
choice at all.

## Infrastructure

These questions need data from many hospitals, and patient data mostly cannot
leave the hospital that holds it. So a growing share of my work is plumbing:
federated pipelines built on the CLIF common data model, where every site runs
identical code locally and shares only summary statistics. That, along with
tooling for reproducible Bayesian re-analysis and tidy RNA-seq workflows, is
[open source]({{ '/software/' | relative_url }}).

This is where I'd most like help from people outside medicine. The hard parts
are schema design, reproducibility, and getting one analysis to run correctly
against a dozen differently shaped datasets — not biology.

## Elsewhere

The same instinct — that an average can hide more than it shows — occasionally
leads somewhere unexpected. With two economists, I looked at the sharp rise in
US traffic deaths after 2020 and found the increase fell disproportionately on
Black Americans. Different data, same question.

## Support and collaboration

Funded by a K23 career development award from the National Heart, Lung, and
Blood Institute, and carried out with the
[Calfee lab](https://calfeelab.ucsf.edu/), the
[Langelier lab](https://langelierlab.ucsf.edu/), the UCSF
[Center for Precision Research in Critical Care](https://cprcc.ucsf.edu/), and
collaborators across the ARDS and sepsis research community.

If you have a cohort, a question, or a trainee looking for a project, I'd like
to hear from you — [{{ site.author.email }}](mailto:{{ site.author.email }}).
