---
title: "On statistical learning theory for distributional inputs"
author: "C. Fiedler, P.-F. Massiani, F. Solowjow, and S. Trimpe"
date: "2024-07-08"
journal: "Proceedings of the 41st International Conference on Machine Learning (ICML), PMLR 235:35013-35038"
external_url: "https://proceedings.mlr.press/v235/fiedler24a.html"
description: "This paper extends the theory of learning with distributional inputs. This scenario appears in many practical learning problems, especially medical ones."
tags:
  - "Kernel methods"
  - "Distributional learning"
  - "Support vector machines"
---

## Abstract

Some learning problems are naturally **distributional**, meaning that the input is a probability distribution.
Naturally, the distribution is not directly observed; one only has access to i.i.d. samples of it, and a label.
For instance, in medical studies, one may perform repeated measurements of a health indicator, and decide based on their distribution on whether a patient is healthy or sick.
This is summarized on the figure below: given a collection of distributions, one accesses samples.
The goal is to learn a map from samples to labels, with the hope that it approximates the true map from distributions to labels.
<img src="/images/distribution_learning.png" alt="Distribution learning" width="500"/>

Kernel-based statistical learning on distributional inputs thus appears in many relevant applications, from medical diagnostics to causal inference, and poses intriguing theoretical questions. 
While this learning scenario received considerable attention from the machine learning community recently, many gaps in the theory remain. 
In particular, most works consider only the distributional regression setting, and focus on the regularized least-squares algorithm for this problem. 

This works begins filling these gaps. 
It shows two oracle inequalities for kernel machines in general distributional learning scenarios, as well as a generalization result based on algorithmic stability. 
The results are formulated in great generality, utilizing general Hilbertian embeddings, which makes them applicable to a wide array of approaches to distributional learning. 
Additionally, the results are specialized to the cases of kernel mean embeddings and of the recently introduced Hilbertian embeddings based on sliced Wasserstein distances, providing concrete instances of the general setup. 
This paper considerably enlarges the scope of theoretically grounded distributional learning.

## Key Contributions

1. Formalization of distributional learning with general loss functions
2. Two oracle inequalities, which are the central tool in the classical theory of statistical learning
3. A stability result establishing the quality of predictions

## Impact and follow-ups

This work is a first towards a general theory of distribution learning.
My interest for this topic came from the fact that <a href="/publications/screening-atrial-fibrillation">I implemented an algorithm for distribution classification in an empirical project</a>, and was interested in the soundness of the approach.
My colleague Christian Fiedler <a href='https://ojs.aaai.org/index.php/AAAI/article/view/39255'>continued the theoretical investigations in follow up work</a>.


---

*Greed is good.*