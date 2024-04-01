---
{"dg-publish":true,"dg-path":"academia/STA130/W10/Simple Linear Regression Model.md","permalink":"/academia/sta-130/w10/simple-linear-regression-model/","created":"2024-03-20T19:54:52.832-04:00","updated":"2024-04-01T18:20:35.215-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|10]]
Course: #STA130
Date: 2024-03-20

---
# Simple Linear Regression Model

$$Y_{i} = \beta_{0} + \beta_{1}x_{i} + \epsilon_i$$
- $Y_{i}$
    - response variable
    - random, and observed in our sample data
- $x_{i}$
    - independent variable
    - fixed (constant) and observed in our sample data
- $\beta_{0}$
    - intercept parameter
    - fixed constant (unknown)
- $\beta_{1}$
    - slope parameter
    - fixed constant (unknown)
- $\epsilon_{i}$
    - random error for observation $i$
    - random, but can’t be calculated directly

---
# Regression vs. Classification

![](https://i.imgur.com/lldiE2D.png)

---
# The population regression line is unknown

- We need to **estimate** a line which is as close as possible to as many points as possible in our sample
    - e.g., look at the sum of squared differences between each observation and the fitted (estimated) line
---
- **least squares regression line**
    - straight line that minimizes the sum of squared distances between each point and the line
    - Recall: MSE is also used in [[100 📒 Academia/STA130/W8/Clustering#MSE\|clustering]]
        - Rather than moving the “cluster centre,” we take a calculus approach to minimize the line
    - $$SE = \sum\limits_{i=1}^{n} (y_{i} - f(x_{i}))^{2}$$
    - Closed-form mathematical expressions for the estimated regression coefficients:
        - ![](https://i.imgur.com/KYHfkcf.png)
        - *$\hat{\beta}$ is an estimated value of the true value, $\beta$.*


![](https://i.imgur.com/jPVwMq8.png)

---
# Fitting a regression line in R

```r
lm(<response_variable> ~ <predictor_variable>, data=<data>)
```

```r
model1 <- lm(height ~ shoePrint, data = heights)
summary(model1)$coefficients
```
```
             Estimate Std. Error  t value     Pr(>|t|)
(Intercept) 80.930409 10.8933945 7.429310 6.504368e-09
shoePrint    3.218561  0.3740081 8.605591 1.863474e-10
```

- What is `(Intercept)`?
    - estimate of $\beta_{0}$ (i.e., $\hat{\beta}_{0}$)
    - e.g., `80.93`
- What is `shoePrint`?
    - estimate of $\beta_1$ (i.e., $\hat{\beta_{1}}$, the slope)
    - e.g., `3.219`

---
# Adding the fitted regression line to a plot

```r
heights %>% ggplot(aes(x=shoePrint, y=height)) + 
    geom_point() + 
    labs(x = "Length of shoeprint (in cm)",
         y = "Height (in cm)") + 
    geom_smooth(method="lm", se=FALSE) +   # Gives us the filled line
    theme_minimal()
```
*Recall from [[100 📒 Academia/STA130/W2/Scatterplots\|Scatterplots]]*.

- `method='lm'` → least squares regression line (i.e., linear model)
- `se=FALSE` → no confidence bands

![|500](https://i.imgur.com/dBmaWOx.png)
*Blue line is the fitted regression line, with intercept $\hat{\beta_{0}}$ and slope $\hat{\beta_{1}}$.*

---
# Interpretation of regression coefficients

The estimated simple regression of $y$ on $x$ is $$\hat{y} = \hat{\beta_{0}} + \hat{\beta_{1}}x$$
- $\hat{y}$ – **fitted value** or **predicted value**
    - estimated average value of $y$ when the prediction is equal to $x$
- $\hat{\beta_{1}}$ – **slope**
    - average change in $y$ for a 1-unit change in $x$
- $\hat{\beta_{0}}$ – **intercept**
    - average of $y$ when $x = 0$
    - Note: often, this does not make sense, but it tells us the height of the line
        - e.g., length of shoe print $\neq 0$
- $e_{1} = y_{i} - \hat{y_{i}}$ – **residual**
    - the difference between the observed and predicted value of $y$ for the $i$-th observation

> [!important] We **cannot** say that a change in the predictor $x$ *causes* a change in $y$.
> - We can only talk about the association we observe
>     - e.g., “On average, people with a foot that is 1 cm longer are on average 2 cm taller.”
> - ==not causal!==

## Extrapolation

![|500](https://i.imgur.com/dBmaWOx.png)

- Suppose your nephew’s shoeprint is 10 cm long. Is it reasonable to use this model to predict his height?
    - No
    - Data only has people with shoe prints sizes of 25 cm - 35 cm


- **extrapolation**
    - trying to predict the response variable for values of explanatory variable beyond those contained in the data
    - A model is only as good as the data it was trained on


## How much of the variation in y is explained by our linear regression model?

![](https://i.imgur.com/SYS7d9Q.png)

- **coefficient of determination** ($R^{2}$)
    - proportion of the variability in $y$ which is explained by our fitted regression model
    - $0 \leq R^{2} \le 1$
- $R^{2}$ is close to 1:
    - indicates that most of the variability in $y$ is explained by the regression model
- $R^{2}$ is close to 0:
    - indicates that very little of the variability in $y$ is explained by the regression model

> [!info] $R^{2}$ is also equal to the square of the correlation.

### Graphical interpretation of $R^{2}$

![](https://i.imgur.com/fnfOSUM.png)

---
# Coefficient of determination in R

```r
summary(model1)$r.squared
cor(x = heights$shoePrint, y = heights$height)^2
```
```
[1] 0.6608845
[1] 0.6608845
```
*Both of the functions above work.*

---

Back to [[100 📒 Academia/STA130/Week 10 Lecture\|Week 10 Lecture]].

