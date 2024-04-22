---
{"dg-publish":true,"dg-path":"academia/STA130/W10/Correlation.md","permalink":"/academia/sta-130/w10/correlation/","created":"2024-03-18T13:27:13.106-04:00","updated":"2024-04-22T03:03:02.307-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|10]]
Course: #STA130
Date: 2024-03-18

---
# Quantifying linear association

- The **correlation** summarizes:
    - the **[[100 📒 Academia/STA130/W2/Scatterplots\|strength]]** and **direction** of the *linear* relationship between two numerical variables
- **Sample correlation** between variables $x$ and $y$ for $n$ observations $(x_{1}, y_{1}), \dots, (x_{n}, y_{n})$:
    - $$r = \frac{\sum\limits_{i=1}^{n}(x_{i} - \overline{x})(y_{i} - \overline{y})}{\sqrt{\sum\limits_{i=1}^{n}(x_{i} - \overline{x})^{2} \sum\limits_{i=1}^{n}(y_{i} - \overline{y})^{2}}} = \frac{\text{cov}(x, y)}{\sigma_{x} \sigma_{y}}$$
- Properties of $r$
    - The sign of $r$ gives the ==direction==
        - $r > 0 \implies$ positive linear association
        - $r < 0 \implies$  negative linear association
    - Magnitude (abs. value) measures the ==strength of association
        - $-1 \leq r \leq 1$
        - $r = \pm 1 \implies$ *perfect* linear relationship between $x$ and $y$

---
# Calculating $r$ in R

![](https://i.imgur.com/k16t37q.png)


```r
cor(x = heights$shoePrint, 
    y = heights$height)
```
```
## [1] 0.812948
```

The correlation between the shoeprint length and height in our sample of 40 individuals is approximately 0.81.

---
# Limitation of correlation

> [!important] Correlation $r$ only describes the *linear* association between two numerical variables.

![](https://i.imgur.com/dAtSuLq.png)

Back to [[100 📒 Academia/STA130/Week 10 Lecture\|Week 10 Lecture]].