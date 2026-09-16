---
title: "Safe value functions"
author: "P.-F. Massiani, S. Heim, F. Solowjow, and S. Trimpe"
date: "2022-08-23"
journal: "IEEE Transactions on Automatic Control, Vol. 68, Issue 5, pp. 2743-2757" 
external_url: "https://ieeexplore.ieee.org/abstract/document/9865237"
description: "This paper proves that failure penalties achieve safety in reinforcement learning and do not induce conservatism."
tags:
  - "Reinforcement learning"
  - "Safety"
  - "Viability"
  - "Failure penalty"
---


## Abstract

This paper shows that simple reward shaping finds the **optimal safe  policy** in safety-critical reinforcement learning.
Specifically, this is achieved by giving a sufficiently low reward (the penalty) to failing.
The paper provides an explicit formula for a minimum penalty achieving safety.
The relevance of this result comes from the fact that failure penalties are widely used in practice.

A key takeaway is that **failure penalties do not lead to conservatism**. 
This implies that conservatism is due to incomplete learning or numerical issues.
This contrasts with previous beliefs that failure penalties would be sufficient for safety, but also introduce suboptimality.
A second outcome consists of practical guidelines for reward shaping and finding sufficient penalties.

## Key Results

For a reinforcement learning problem with reward $r$, discount factor $\gamma$, and state space $\mathcal X$, assume access to a **failure set** $\mathcal X_\mathrm F$.
It follows that there exists a **viability kernel** $\mathcal X_\mathrm{V}$; the maximal set of states such that failure can be avoided at all future times.
We assume that $\mathcal X_\mathrm F$ is known, but $\mathcal X_\mathrm V$ is unknown.

### Safe value function

Then, the optimal policy obtained by replacing $r$ by the penalized reward $r - p\cdot\mathbf{1}_{\mathcal{X}_\mathrm{F}}$ is identical to the one obtained by assuming that $\mathcal X_\mathrm{V}$ is known and constraining the agent to remain in it, provided that the penalty factor $p$ is sufficiently high.
Furthermore, increasing $p$ beyond the minimum value does not change the solution of the penalized problem inside of the viability kernel.


### Zero-th order condition for safety
The **zeroth-order condition for safety** is a sufficient condition to check whether the penalty is high enough. 
If $V_p$ is the value function of the penalized problem, the condition reads as 

$$
\sup_{\mathcal X\setminus \mathcal X_\mathrm V} V_p < \inf_{\mathcal X_\mathrm V} V_p + C,
$$
where $C$ is a constant that depends on $r$ and $\gamma$.
There always exists a value $p^\star$ such that this condition holds for all $p>p^\star$.
The paper identifes a suitable minumum value for $p^\star$, with a closed-form formula.
The following image illustrates the condition by plotting the value function for various values of the penalty on an example: condition holds for $p>4.4$.
<img src="/images/svf.png" alt="Safe value function" width="500"/>

## Impact and follow-ups

This paper settled an open debate in the community on whether failure penalties are suited to encoding safety constraints.
It reveals that failure penalties are theoretically sound.
The remaining concerns with failure penalties are thus due to numerical issues and finite-sample approximations.

The <a href='/publications/robust-safety-entropy'>next paper</a> in this line of work establishes a method to achieve not only safety, but also robustness with reward shaping.

---

*If failing is suboptimal, and optimal agent does not fail.*

*Nevertheless, bees can land.*