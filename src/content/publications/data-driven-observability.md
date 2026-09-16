---
title: "Data-driven observability analysis for nonlinear stochastic systems"
author: "P.-F. Massiani, M. Buisson-Fenet, F. Solowjow, F. Di Meglio, and S. Trimpe"
date: "2023-12-25"
journal: "IEEE Transactions on Automatic Control, Vol. 69, Issue: 6, pp. 4042-4049"
external_url: "https://ieeexplore.ieee.org/abstract/document/10373099"
description: "This paper proposes a statistical test to decide, based on data, whether a dynamical system is observable."
tags:
  - "Kernel methods"
  - "Hypothesis testing"
  - "Observability"
---

## Abstract
Distinguishability and, by extension, observability are key properties of dynamical systems. 
Establishing these properties is challenging, especially when no analytical model is available and they are to be inferred directly from measurement data. 
The presence of noise further complicates this analysis, as standard notions of distinguishability are tailored to deterministic systems. 
This article introduces distributional distinguishability, which extends the deterministic notion by comparing distributions of outputs of stochastic systems. 
It shows that both concepts are equivalent for a class of systems that includes linear systems. 
The main contribution is a method to assess and quantify distributional distinguishability from output data. 
It results in a statistical test deciding whether two states can be considered distinguishable with high confidence.
The results are leveraged for analyzing the failure modes of observers, and to compare sensor configurations on hardware.

## Key Contributions

1. Define **distributional distinguishability** for general stochastic systems, and relate it to observability of the noise-free system
2. Quantify distributional distinguishability on a continuous spectrum using the **maximum mean discrepancy**
3. Implement a **statistical test** of the hypothesis that two states are indistinguishable

## Impact and follow-ups
This work blends together two separate concepts: dynamical systems, and statistical tests.
By assuming the existence of an inaccessible underlying dynamical system, we find statistical properties that are meaningful to test for.

This line of thought is predominant in the evolution of my doctoral research: how can we find meaningful distributions to test in dynamical systems, and how to test them in practice?
My later works explore these questions, <a href='/pages/consistency-kernel-methods'>addressing the issues of data correlation</a>, and the <a href='kernel-conditional-tests'>lack of extrapolation to unseen initial states of the present test</a>.

---

*Observability of stochastic system is an inherent system property, independent of the observer.*