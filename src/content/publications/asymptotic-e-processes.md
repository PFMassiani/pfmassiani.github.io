---
title: "Asymptotic e-processes"
author: "P.-F. Massiani, S. Schulze, M. Mollenhauer"
date: "2026-05-25"
journal: "ArXiv preprint"
external_url: "https://arxiv.org/abs/2604.19353"
description: "E-processes are the standard tool for sequential testing without type I error inflation, but are almost-exclusively limited to finite-sample regimes. This paper makes them amenable to the asymptotic regime."
tags:
  - "E-process"
  - "Hypothesis testing"
  - "Sequential testing"
  - "Martingales"
---

## Background
Sequential testing addresses the problem of statistical decision-making in settings where observations are collected continuously over time, requiring repeated assessment of whether accumulated evidence warrants rejection of the null hypothesis. 
A recurring source of difficulty, however, is that of **type I error inflation**.
For instance, one may not use a non-sequential test repeatedly as more data gets collected; sequential testing requires dedicated tests.
Even when such tests are available, however, breaking their assumptions and, hereby, their guarantees, is surprisingly easy.
Indeed, even
well-meaning practitioners can fall into this trap (see <a href='https://sas.uwaterloo.ca/~wang/files/e-bookv3.pdf'>Ramdas and Wang, 2025, Section 7.10</a>). 
This phenomenon is arguably a central cause of irregularities in the reporting of statistical evidence (Shafer, 2019).

The recent framework of **safe anytime-valid inference (SAVI)** addresses this issue by introducing sequential statistical objects (such as measures of evidence and corresponding confidence sequences) that provide appropriate guarantees at any point in time, regardless of the stopping rule applied. 
A central class of such objects is that of **e-processes**. Intuitively, they accumulate evidence against the null
hypothesis; they should remain small uniformly across time if the null holds, and grow if it does
not. 
Formally, an e-process $(E_n)_{n\in\mathbb{N}}$ is a nonnegative stochastic process satisfying a technical condition, and the central instrument for translating them into practical
tests is Ville's inequality: for every distribution $P$ in the null hypothesis and all $\alpha\in(0,1)$,

$$P[\exists n\in\mathbb{N},~ E_n\geq\frac1\alpha]\leq\alpha.$$

In practice, however, the construction of e-processes often requires precise knowledge of quantities that are unavailable and have to be estimated from data instead.
This mirrors classical hypothesis testing, where finite-sample tests, particularly under large composite nulls or in nonparametric settings, are often intractable, and one often resorts instead to asymptotic tests. Intuitively, such tests are obtained by substituting consistent estimators for unknown quantities and recover validity in the limit of infinite data. Yet, while asymptotic testing has a rich and well-developed theory in the classical setting, the corresponding framework for SAVI is less mature and has only been partially investigated.

## Abstract

This paper investigates the concept of an **asymptotic e-process**, which is a doubly-indexed stochastic process $(E_{m,n})_{m,n\in\mathbb{N}}$ that possesses, asymptotically for an approximation index $m\to\infty$, the properties of an e-process along a monitoring time index $n$. 
This constitutes the first in-depth study of this recently introduced concept, which is relevant in asymptotic sequential anytime-valid inference. 

The notion is motivated by practical applications in sequential hypothesis testing, in which e-variables and e-processes can only be constructed approximately from observations due to model misspecification or estimation errors. 
Technically, asymptotic e-processes satisfy an **asymptotic version of Ville’s inequality** of the following form: for all $\alpha\in(0,1)$,

$$\lim\sup_{m\to\infty} \sup_{P\in\mathcal P}P[\exists n\leq r_m,~E_{m,n}\geq \frac1\alpha]\leq\alpha,$$

where $\mathcal P$ is the null hypothesis.
Here, $(r_m)_{m\in\N}$ is an integer sequence that parametrizes the notion, and is generally assumed to go to infinity, recovering truly anytime-valid guarantees asymptotically. 

We derive various properties of asymptotic e-processes, and study their connections to asymptotic supermartingales. 
We also investigate **general methods for their construction** such as calibration, the cumulative product of asymptotic e-variables, and the monitoring an of an e-process that depends on an estimated parameter. The latter construction constitutes a generalization of a recent approach within the context of asymptotic post-hoc inference

## Key Contributions

1. Definition of ($r$-)asymptotic e-processes, with two variants of the notion
2. Various characterizations mirroring those in the nonasymptotic case
3. Meaningfulness of the definition: if $E_{m,n}\to F_n$ in $L_1$ as $m\to\infty$ for all $n$, then $E$ is an asymptotic e-process if, and only if, $F$ is an e-process.
4. Calibrated nonnegative asymptotic supermartingales are asymptotic e-processes
5. Various constructions

## Impact and follow-ups

This work stemmed from the idea of designing e-processes for conditional hypotheses, such as in conditional independence testing.
Building on previous results showing that <a href='/publications/kernel-conditional-tests'>learning models enable local tests</a>, and thus also conditional tests, the idea was to define e-processes leveraging learning models.
The immediate issue is that the error stemming from the fact that the learning model only approximate breaks the defining property of e-processes.
Asymptotic e-processes then arose as the resulting relevant object: processes that only become true e-processes as the learning model converges to the ground truth, in the infinite-sample limit.

Potential follow ups thus involve constructing asymptotic e-processes and their corresponding $r$ sequences, especially involving learning models, continuing the line of thought that learning enables testing.

---

*Asymptotic anytime-valid inference: monitoring for infinitely long, starting from after having collected infinitely many samples.*