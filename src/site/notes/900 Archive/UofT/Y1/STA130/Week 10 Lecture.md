---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/week-10-lecture/","created":"2024-03-18T10:16:41.338-07:00","updated":"2024-03-21T18:06:31.304-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|10]]
Course: #STA130
Date: 2024-03-18

---
# Why might the confusion matrix not sum up to the total number of observations?

- Values of NA cannot be classified into the confusion matrix
- What happens if there is a value of NA for one of the variables used to make a decision?
    - Cannot use that classification tree for that observation

![](https://i.imgur.com/eANySAk.png)
*Values in the confusion matrix does not add up to 1000 total observations in `new_NHANES`.*

---
# Review: Visualizing the association between two or more variables

```r
heights <- read_csv("heights.csv")
glimpse(heights)
```
```
Rows: 40
Columns: 6
$ sex        <chr> "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M", "M"…
$ age        <dbl> 67, 47, 41, 42, 48, 34, 26, 29, 60, 48, 30, 43, 54, 31, 42…
$ footLength <dbl> 27.8, 25.7, 26.7, 25.9, 26.4, 29.2, 26.8, 28.1, 25.4, 27.9…
$ shoePrint  <dbl> 31.3, 29.7, 31.3, 31.8, 31.4, 31.9, 31.8, 31.0, 29.7, 31.4…
$ shoeSize   <dbl> 11.0, 9.0, 11.0, 10.0, 10.0, 13.0, 11.0, 10.5, 9.5, 11.0, …
$ height     <dbl> 180.3, 175.3, 184.8, 177.8, 182.3, 185.4, 180.3, 175.3, 17…
```

Recall [[900 Archive/UofT/Y1/STA130/W2/Scatterplots\|Scatterplots]].


---
# Quantifying association: Correlation

→ [[900 Archive/UofT/Y1/STA130/W10/Correlation\|Correlation]]

---
# Simple Linear Regression Models with a Numerical predictor

> [!info] Goal.
> Use shoeprint length to:
> 1. Understand the variable in people’s heights, or
> 2. Predict an individual’s height
> 
> $\implies$ We need to build a **model**.

- One option is a **simple linear regression model**
    - Assumes there is a “best” straight line that explains the real relationship between $x$ and $y$
    - Values we observed randomly deviate from this line

→ [[900 Archive/UofT/Y1/STA130/W10/Simple Linear Regression Model\|Simple Linear Regression Model]]

---
# Simple Linear Regression Model with a Categorical Predictor

→ [[900 Archive/UofT/Y1/STA130/W10/Simple Linear Regression Model with a Categorial Predictor\|Simple Linear Regression Model with a Categorial Predictor]]

---
# Inference

→ [[900 Archive/UofT/Y1/STA130/W10/Inference – Simple Linear Regression Model\|Inference – Simple Linear Regression Model]]