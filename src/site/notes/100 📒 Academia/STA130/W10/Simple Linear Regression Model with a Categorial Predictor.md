---
{"dg-publish":true,"dg-path":"academia/STA130/W10/Simple Linear Regression Model with a Categorial Predictor.md","permalink":"/academia/sta-130/w10/simple-linear-regression-model-with-a-categorial-predictor/","created":"2024-03-21T20:40:07.155-04:00","updated":"2024-04-01T18:20:35.213-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|10]]
Course: #STA130
Date: 2024-03-21

---

In [[100 📒 Academia/STA130/W10/Simple Linear Regression Model\|Simple Linear Regression Model]], we looked at a simple linear regression model to describe the association between *shoeprint length* and *height*.

> [!question] What about if we wanted to use another variable, like *sex*, to predict height?

---
Earlier, we introduced this for a numerical predictor: $$Y_{i} = \beta_{0} + \beta_{1}x_{i} + \epsilon_i$$
- $Y_{i}$ → response variable for observation $i$
- $x_{i}$ → independent variable (or predictor, covariate, feature, input) for observation $i$
- $\epsilon_{i}$ → random error term for observation $i$

> [!question] What is $x_{i}$ when our predictor is categorical?

---
# Indicator variables

- The sex variable takes values `M` and `F`
- We need an **indicator value** to encode the categorical predictor:
    - $$x_{i} = I(\text{individual } i \text{ is male}) = \begin{cases} 1 && \text{if individual } i \text{ is male} \\ 0 && \text{if individual } i \text{is female} \end{cases}$$
- We need to set a **baseline value** (i.e., level corresponding to $x = 0$)
    - Here, `F` is the baseline value

---
# Fitting a linear regression model with a categorical predictor in R

```r
model2 <- lm(height ~ sex, data = heights)
summary(model2)$coefficients
```
```
             Estimate Std. Error    t value     Pr(>|t|)
(Intercept) 166.82381   1.357760 122.866909 5.085412e-51
sexM         15.79198   1.970046   8.016048 1.085391e-09
```

- `(Intercept)` gives the estimate of $\beta_{0}$
    - $\hat{\beta_{0}} = 166.82$
- `sexM` gives the estimate of $\beta_{1}$
    - $\hat{\beta_{1}} = -15.79$

> [!info] The row name in the table of coefficients is a concatenation of our predictor variable (`sex`) and the **non-baseline** value of this predictor (`M`)
> - $implies$ `M` is not the baseline, `F` is the baseline

---
# Interpreting $\hat{\beta_{0}}$ and $\hat{\beta_{1}}$

Recall the general equation of the fitted regression line: $$\hat{y} = \hat{\beta_{0}} + \hat{\beta_{1}}x$$
Since our definition of the indicator variable takes values $0$ and $1$, we only have *two possible predictions we can make*.
- When $x = 0$, 
    - $\hat{y} = \hat{\beta_{0}}$
- When $x = 1$,
    - $\hat{y} = \hat{\beta_{0}} + \hat{\beta_{1}}$

> [!important] Implications
> - $\hat{\beta_{0}}$ is the *predicted value of $y$* for individuals with $x = 0$
>     - i.e., the ==sample mean== of $y$ for observations with $x = 0$
> - $\hat{\beta_{0}} + \hat{\beta_{1}}$ is the *predicted value of $y$* for individuals with $x = 1$
>     - i.e, the ==sample mean== of $y$ for observations with $x = 1$
> - $\hat{\beta_{1}}$ is the *average difference* in the response variable $y$ between the two categories

```
             Estimate Std. Error    t value     Pr(>|t|)
(Intercept) 166.82381   1.357760 122.866909 5.085412e-51
sexM         15.79198   1.970046   8.016048 1.085391e-09
```

![|300](https://i.imgur.com/ZtsaE5d.png)

Back to [[100 📒 Academia/STA130/Week 10 Lecture\|100 📒 Academia/STA130/Week 10 Lecture]].