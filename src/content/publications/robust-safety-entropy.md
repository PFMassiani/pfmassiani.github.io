---
title: "Viability of future actions: robust safety in reinforcement learning via entropy regularization"
author: "P.-F. Massiani, A. von Rohr, L. Haverbeck, S. Trimpe"
date: "2025-10-03"
journal: "Proceedings of the Joint European Conference on Machine Learning and Knowledge Discovery in Databases (ECML-PKDD), pp. 129–145"
external_url: "https://link.springer.com/chapter/10.1007/978-3-032-06106-5_8"
description: "This paper shows that the combination of entropy regularization and of sufficient failure penalties leads to robust constraints satisfaction in reinforcement learning. The temperature controls the degree of robustness."
tags:
  - "Reinforcement learning"
  - "Safety"
  - "Viability"
  - "Failure penalty"
  - "Robustness"
  - "Entropy regularization"
---

## Abstract

Despite the many recent advances in reinforcement learning (RL), the question of learning policies that robustly satisfy state constraints under unknown disturbances remains open. 
This paper offers a new perspective on achieving robust safety by analyzing the interplay between two well-established techniques in model-free RL: entropy regularization, and constraints penalization. 
It reveals empirically that entropy regularization in constrained RL inherently biases learning toward maximizing the number of future viable actions, thereby promoting constraints satisfaction robust to
action noise. 
On the following example, which is an adaptation of <a href='https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf'>"The Cliff" by Sutton & Barto</a>, increasing the temperature pushes the optimal policy away from the constraint.

<img src="/images/constrained_cliff.png" alt="Increasing the temperature pushes the optimal policy away from the cliff" width="650"/>

Furthermore, we show that by relaxing strict safety constraints through penalties, the
constrained RL problem can be approximated arbitrarily closely by an unconstrained one and thus
solved using standard model-free RL. 
This reformulation preserves both safety and optimality while
empirically improving resilience to disturbances.
On the example of the cliff again, relaxing the constraint and penalizing instead the agent for entering the states labeled as "C" recovers the constrained policy, if the penalty is sufficiently high.

<img src="/images/penalized_cliff.png" alt="Penalizing failure is effectively identical to constraining, if the penalty is sufficient" width="500"/>

Another example is that of an inverted pendulum incentivized to lean sideways as much as possible, but receiving a large penalty for failing.
If the penalty is sufficient, the optimal policy stabilizes at an angle that it can hold without falling.
The value of that angle is a function of the temperature, not of the penalty.

<img src="/images/pendulum.png" alt="The pendulum stabilizes at an angle controlled by the temperature, not by the penalty." width="500"/>

Summarizing, the main finding is that **conservatism is tuned by adjusting the temperature, provided that the penalty is sufficiently high**.
This extends the result that <a href='/publications/safe-value-functions'>sufficient failure penalties provably achieve safety in reinforcement learning</a> by showing that, in this regime, entropy regularization enables controlling robustness.

Our results indicate that the connection between
entropy regularization and robustness is a promising avenue for further empirical and theoretical
investigation, as it enables robust safety in RL through simple reward shaping

## Key Contributions

1. Entropy regularization in constrained RL leads to **staying away from the constraints**, a phenomenon we observe empirically and interpret as a the agent maximizing the long-term number of viable actions it has available
2. Failure penalties **approximate this constraint arbitrarily closely**, similarly as in the case without entropy regularization

## Impact and follow-ups

This paper provides clear guidelines on how to perform reward shaping when robust failure avoidance is a concern.
In particular, this is achieved by sufficient failure penalties (for safety) coupled with entropy regularization (for robustness).

A central avenue for future work is the theoretical characterization of the type of robustness identified empirically; namely, against which type of noise does it help to maximize the long-term number of viable actions available.

---

*Penalties make failing prohibitively expensive. Action entropy makes failing inevitable without a robustness margin.*