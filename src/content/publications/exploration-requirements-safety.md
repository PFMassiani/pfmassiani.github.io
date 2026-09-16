---
title: "On exploration requirements for learning safety constraints"
author: "P.-F. Massiani, S. Heim, and S. Trimpe"
date: "2021-05-29"
journal: "Proceedings of the 3rd Conference on Learning for Dynamics and Control, PMLR 144:905-916"
external_url: "https://proceedings.mlr.press/v144/massiani21a.html"
description: "This paper identifies the classes of policies that provably avoid failure in safety-critical reinforcement learning, and makes reinforcement learning amenable to the tools of viability theory."
tags:
  - "Reinforcement learning"
  - "Safety"
  - "Viability"
---

## Abstract

This paper identifies the class of actions a policy is allowed to choose from in order to indefinitely avoid failure in safety-critical reinforcement learning.
It introduces the concept of **control constaints**, and how they can be used as a backup to overrule a policy about to take unsafe actions.
It identifies the **viable set** as the largest control constraint.
The main conclusion is that on-policy algorithms for reinforcement learning successully explore the viable set in regions that matter for the policy at hand.
This insight proves useful in later works to connect failure penalties to safety guarantees.

## Key Contributions

1. **Mathematical definition of control constraints**
2. **Identify the role of viability theory in safety-critical reinforcement learning**

## Impact and follow-ups

This paper, which stemmed from my master's thesis, is the first in a series of three that rigorously establish the soudness of failure penalties to learn safety in reinforcement learning, <a href='/publications/safe-value-functions'>first here</a>, and <a href='/publications/robust-safety-entropy'>then there</a>.
Its main contribution towards that is identifying the critical role of **viability theory**.

---

*Greed is good.*