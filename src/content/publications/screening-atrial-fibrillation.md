---
title: "Robust screening of atrial fibrillation with distribution classification"
author: "P.-F. Massiani, L. Haverbeck, C. Thesing, F. Solowjow, M. Verket, M. D. Zink, K. Schütt, D. Müller-Wieland, N. Marx, and S. Trimpe"
date: "2025-07-22"
journal: "Scientific reports, Vol. 15, Article number 26582"
external_url: "https://www.nature.com/articles/s41598-025-10090-2"
description: "The first implementation of distributional classification on a real use case, used for the screening of atrial fibrillation. It achieves competitive performance and high robustness  thanks to robust features exploited distributionally."
tags:
  - "Atrial fibrillation"
  - "Screening"
  - "Support vector machine"
  - "Distribution classification"
---

## Abstract
Atrial fibrillation (AF) correlates with an increased risk of all-cause mortality or stroke, mainly due to undiagnosed patients and undertreatment. 
It is characterized by an irregular spacing of QRS complexes, as well as a fibrillation of the P-wave:
<figcaption>A P-QRS-T complex. <a href='https://www.nature.com/articles/s41598-021-97118-5'>Source</a>.</figcaption>
<img src="/images/qrs_complex.png" alt="A P-QRS-T complex" width="300"/>
<figcaption>Segment of an ECG exhibiting AF.</figcaption>
<img src="/images/af_ecg.png" alt="Example of AF" width="500"/>

The **screening** of AF is thus a key challenge, for which machine learning methods hold the promise of cheaper and faster campaigns.
The robustness of such methods to varying artifacts, noise, and conditions is then crucial. 
This paper introduces the **first distributional support vector machine (SVM)** for robust detection of AF from short, noisy electrocardiograms. 

<img src="/images/distributional_svm.png" alt="Overview of the distributional SVM." width="500"/>

It achieves state-of-the-art performance and unprecedented robustness on the screening problem while only leveraging one interpretable feature and little training data. 
We illustrate these advantages by evaluating on other data sources (cross-data-set) and through sensitivity studies. 
These strengths result from two main components: (i) preliminary peak detection enabling robust computation of medically relevant features; and (ii) a mathematically principled way of aggregating those features to compare their full distributions. 
This establishes our algorithm as a relevant candidate for screening campaigns.

## Key Contributions

1. Implementation of a distributional SVM for AF detection
2. Cross-data-set evaluation to evaluate robustness
3. Identifying the role of robust feature extraction for robust classification

## Impact and follow-ups

This work establishes distributional learning as a meaningful alternative to handcrafting distributional features (such as variance, entropy, ...) or sequential neural networks such as RNNs or transformers.
It highlights the benefits of feature engineering for data efficiency and interpretability, as opposed to end-to-end methods that require large data sets and lack interpretability.
The advantage of SVMs is particularly noticeable here since screening is typically done at a large scale, and the method's low computational cost is an asset compared to alternatives that accept sequential data.

Interesting follow-ups are further theoretical investigations of distributional learning, as well as applying such distributional SVMs to other conditions and data sets.

---

*Perhaps a part of the effort on end-to-end learning could be redirected to extracting features reliably when existing algorithms fail.*