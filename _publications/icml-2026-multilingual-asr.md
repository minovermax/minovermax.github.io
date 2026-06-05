---
title: "Towards Truly Multilingual ASR: Generalizing Code-Switching ASR to Unseen Language Pairs"
collection: publications
category: conferences
permalink: /publication/2026-multilingual-asr
excerpt: "Investigates whether code-switching ASR capabilities learned from limited seen language pairs can generalize to unseen language pairs using model merging and domain generalization methods."
date: 2026-06-04
venue: "ICML Workshop on Machine Learning for Audio"
paperurl: "https://arxiv.org/pdf/2606.05846"
website: "https://huggingface.co/papers/2606.05846"
citation: 'Gio Paik, Hyunseo Shin, Soungmin Lee. (2026). "Towards Truly Multilingual ASR: Generalizing Code-Switching ASR to Unseen Language Pairs." <i>ICML 2026 Workshop on Machine Learning for Audio</i>. arXiv:2606.05846.'
---

This work studies whether code-switching automatic speech recognition (CS-ASR) can move beyond pair-specific systems and generalize to language pairs that were not seen during training.

The paper addresses a scalability challenge in multilingual ASR: as the number of supported languages grows, building separate CS-ASR support for every bilingual pair becomes increasingly impractical. It evaluates whether bilingual CS-ASR capabilities can transfer across language pairs through model merging and domain generalization methods.

Key highlights:

- Frames unseen language-pair generalization as a central challenge for truly multilingual CS-ASR.
- Studies whether capabilities learned from limited seen language pairs transfer to unseen language pairs.
- Evaluates model merging and domain generalization approaches for improving scalability.
- Finds that merged bilingual CS-ASR models modestly generalize to unseen pairs, indicating limited but meaningful transfer.
