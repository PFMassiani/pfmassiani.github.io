---
title: "On the consistency of kernel methods with dependent observations"
author: "P.-F. Massiani, S. Trimpe, and F. Solowjow"
date: "2024-06-10"
journal: "Proceedings of the 41st International Conference on Machine Learning (ICML), PMLR 235:35013-35038"
external_url: "https://proceedings.mlr.press/v235/massiani24a.html"
description: "A theoretical contribution defining ''learning successfully'', without the classical assumption that data comes from a fixed distribution. Intuitively, the question answered here is: ''Where can we reasonably expect a model to be good?''"
tags:
  - "Kernel methods"
  - "Consistency"
  - "Support vector machines"
---

## Abstract

The property that a learning algorithm learns the best possible predictor in the limit of infinitely-many samples is referred to as **consistency**.
A consistent algorithm eventually forgets any bias it may start with, however long this may take.
Theoreticians consider it a reasonable minimum requirement for learning algorithms.

The notion of ``best predictor'' is tightly connected to **where** we care for the model to be good, which is formalized via a **probability measure defining a quantification of performance**; namely, the risk, which we seek to minimize.
In the case where data is generated independently and with identical distributions (i.i.d.), the data-generating measure is a good candidate for this probability measure: the model should be good where data is likely to arrive.

This paper explores what happens in the **absence** of i.i.d. data; that is, when no such natural measure exists and there is no clear notion of risk being minimized.
In this case, one can define successful learning as "minimizing the risk w.r.t. the eventual distribution described by the data, whatever this may be".
The main result of the paper is that, under mild technical assumptions, support vector machines learn successfully, even without independence.

## Key Contributions
1. Definition of **empirical weak convergence (EWC)**, a new sampling assumption allowing strong, non-decaying correlations between data points
2. Proof that many empirical averages involving EWC processes converge
3. Proof that support vector machines with smooth losses are consistent with EWC data 

A video explanation of the paper is available here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/sIn_gYSPJig?si=jFtr4fwIRM6u8xV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Impact and follow-ups
This paper answers a first question arising when applying learning algorithms to dynamical systems: do correlations harm learning?
The answer is that they don't, at least for kernel methods and asymptotically.

This is essential in order to devise statistical tests comparing aspects of dynamics functions.
An idea is indeed to use trajectory data to learn such dynamics functions.
This result shows that the true functions are recovered eventually; in other words, conclusions on the estimators carry to conclusions on the ground truths, given sufficient data.
My follow up work on the topic is concerned with obtaining **finite-sample error bounds** for such estimators, instead of establishing their consistency.

---

*A learned model can be expected to be good asymptotically where it has never stopped sampling.*