---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Education

* M.S. in Computer Science (Machine Learning), Georgia Institute of Technology, *expected Spring 2027*
* B.S. in Computer Science (Info-Internetworks / Intelligence), Georgia Institute of Technology, *expected Spring 2026*

## Work Experience

* Aug 2025 – Nov 2025: **Software Development Engineer Intern**
  * Amazon Web Services (AWS), Elastic Block Store – VMDS Team
    * Seattle, WA

* Jan 2024 – Aug 2025: **Undergraduate Researcher**
  * Georgia Tech VIP Program (FinTech Lab)
    * Atlanta, GA

* Jul 2024 – Aug 2024: **Software Engineer Intern**
  * LG Innotek
    * Seoul, South Korea

* May 2024 – Jun 2024: **Software Engineer Intern**
  * VITAON
    * Atlanta, GA (Remote)

* Sep 2021 – Mar 2023: **Software Developer, Sergeant**
  * Republic of Korea Air Force (ROKAF), Information Systems Management Group
    * Gyeryong, South Korea

## Publications

{% for post in site.publications reversed %}

* {% include archive-single-cv.html %}

{% endfor %}
