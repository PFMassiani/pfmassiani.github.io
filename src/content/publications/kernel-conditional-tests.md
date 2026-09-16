---
title: "Kernel conditional tests from learning-theoretic bounds"
author: "P.-F. Massiani, C. Fiedler, L. Haverbeck, F. Solowjow, and S. Trimpe"
date: "2025-06-04"
journal: "Advances in Neural Information Processing Systems (NeurIPS), pp. 49983-50035"
external_url: "https://proceedings.neurips.cc/paper_files/paper/2025/hash/478ba3e3615d52b715359849a9bb6dea-Abstract-Conference.html"
description: "This paper founds the discipline local testing, which deals with hypotheses involving conditional distributions evaluated at specific points. It shows that ''learning enables testing'', and proposes a concrete test based on kernels."
tags:
  - "Kernel methods"
  - "Hypothesis testing"
  - "Local testing"
---

## Abstract

This paper introduces the new framework of **local hypothesis testing**, which deals with hypotheses involving conditional distributions.
An example is the hypothesis of *goodness of fit of conditional expectations*, which reads as 

$$H_0(x): \mathbb{E}_{Y\sim p(\cdot\mid x)}[Y] = f(x),$$

where $p(\cdot\mid x)$ is a conditional distribution and $f$ is a parameter defining the hypothesis.
The goal of local testing is to identify from data the values of $x$ (called the **covariate**) where $H_0(x)$ does not hold.

The central idea in the paper is to leverage a **learning algorithm** to estimate the function $x\mapsto \mathbb{E}_{Y\sim p(\cdot\mid x)}[Y]$, and to conclude on $H_0(x)$ by comparing the model evaluated at $x$ to $f(x)$.
This requires access to **confidence regions**, regions around the model where the true conditional expectation lies with high confidence.
If $f$ lies in such regions, $H_0(x)$ is accepted, and is rejected otherwise.
This idea is formalized and generalized into a general method for local tests.

The challenge is thus to find such confidence regions.
The main technical result is such a region for kernel ridge regression.
This enables tests comparing conditional expectations.

<img src="/images/local_test.png" alt="Local test of comparison of conditional expectations" width="500"/>

A crucial feature is that the derived confidence regions allow infinite-dimensional outputs, which is essnetial to go from hypothesis involving conditional expectations such as $H_0$ above, to ones involving full distributions, such as the following one:

$$H_0^\prime(x): p(\cdot\mid x) = g(x).$$

Here, $p(\cdot\mid x)$ is again a conditional distribution and $g$ is a parameter defining the hypothesis.
This step involves the *kernel trick* to reformulate $H_0^\prime$ as a hypothesis involving conditional expectations in an infinite-dimensional space.

Overall, these contributions introduce and provide methods for local testing, and enable a wide range of applications where tests are indexed by a conditioning parameter.

## Key Contributions

1. The framework of local testing
2. A general method for local testing given confidence bounds around conditional expectations
3. Confidence bounds for kernel ridge regression with uniformly block-diagonal kernels
4. Generalization from hypotheses on conditional expectations to general functionals of conditional distributions
5. Illustration of various applications, including the monitoring of dynamical systems

## Impact and follow-ups

This paper constitutes the main result of my doctoral work.
It founds the discipline of **local** testing, contrasting it from conditional and multiple testing.
It also shows how to obtain nontrivial local tests, by extrapolating through a learning method.

I see two main avenues for follow up investigations.
The first one is to leverage the new tool in a variety of applications.
Indeed, it is relevant in any testing problem that depends on a parameter that is observed, but not necessarily controlled, and across which one seeks to extrapolate test results.
For instance, they can be immediately applied to improve the results of <a href='/publications/data-driven-observability'>this previous study</a>, significantly lowering data requirements.

The second possible avenue is theoretical.
I suspect that the connection between learning and testing uncovered in this work can be used to overcome some <a href='https://projecteuclid.org/journals/annals-of-statistics/volume-48/issue-3/The-hardness-of-conditional-independence-testing-and-the-generalised-covariance/10.1214/19-AOS1857.full'>recently identified impossibility results in conditional independence testing</a>.
Indeed, obtaining confidence bounds requires well-behaved ground truths, effectively restricting the null hypothesis in a way that is potentially sufficient to enable testability.

## Remark

The original paper does not make the difference between **local** testing and **conditional** testing. 
This distinction is introduced in <a href='/publications/phd-thesis'>my Ph.D. thesis</a>.

---

*Learning enables testing.*