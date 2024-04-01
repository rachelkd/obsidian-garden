---
{"dg-publish":true,"dg-path":"academia/STA130/W10/Inference – Simple Linear Regression Model.md","permalink":"/academia/sta-130/w10/inference-simple-linear-regression-model/","created":"2024-03-21T21:06:33.358-04:00","updated":"2024-03-21T21:17:08.009-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|10]]
Course: #STA130
Date: 2024-03-21

---
# Inference for regression parameters

| Linear model                                                 | Fitted regression line                                           |
| ------------------------------------------------------------ | ---------------------------------------------------------------- |
| <br>$$Y_{i} = \beta_{0} + \beta_{1} x_i + \epsilon_{i}$$<br> | <br>$$\hat{Y_{i}} = \hat{\beta_{0}} + \hat{\beta_{1}}x_{i}$$<br> |
- We do not expect that our estimates are exactly equal to the true parameter values
    - Estimates are estimated based on the sample data we observed
        - Subject to sampling variability
    - If we obtained a different sample from the population and fit the same linear regression model, we would get a slightly different fitted regression line

# Example

We have our model: $$Y_{i} = \beta_{0} + \beta_{1} x_i + \epsilon_{i}$$where $y_{i}$ and $x_{i}$ are the height and shoe print length of individual $i$, respectively, and $\epsilon_{i}$ is the random error term corresponding to this individual

> [!question] How can we write a pair of hypotheses to test if the slope parameter in this regression model is different from 0?

$$\begin{align*} H_{0} : \beta_{1} = 0 && H_{1} : \beta_{1} \ne 0 \end{align*}$$
> [!question] Why might we care about testing whether the slope parameter is different from 0?
> - Under this linear model, if the slope parameter is 0 then it means that knowing the value of $x$ does not help us predict the value of $y$: we do just as well by predicting the sample mean of $y$ for all observations! If the slope is different from 0, then knowing x helps us make better predictions for $y$.

# Assumptions for statistical inference involving regression coefficients


