---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/week-11-lecture/","created":"2024-03-25T10:14:53.377-07:00","updated":"2024-04-01T15:19:52.561-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|11]]
Course: #STA130
Date: 2024-03-25

---
# Analyzing our results

- Full output of our linear model via `summary()` contains a bunch of information
    - ![](https://i.imgur.com/3e4X11T.png)
    - Residuals → $y - \hat{y} = \hat{\epsilon}$
        - Tells us IQR (i.e., boxplot)

# eBay auctions of Mario Kart games

The `mariokart` dataset in the `openintro` package includes eBay sales of the Mario Kart game
for Nintendo Wii in October 2009.

> [!question] Are longer auctions associated with higher prices?

## Association between duration and price

```
Rows: 143
Columns: 12
$ id          <dbl> 150377422259, 260483376854, 320432342985, 280405224677, …
$ duration    <int> 3, 7, 3, 3, 1, 3, 1, 1, 3, 7, 1, 1, 1, 1, 7, 7, 3, 3, 1,…
$ n_bids      <int> 20, 13, 16, 18, 20, 19, 13, 15, 29, 8, 15, 15, 13, 16, 6…
$ cond        <fct> new, used, new, new, new, new, used, new, used, used, ne…
$ start_pr    <dbl> 0.99, 0.99, 0.99, 0.99, 0.01, 0.99, 0.01, 1.00, 0.99, 19…
$ ship_pr     <dbl> 4.00, 3.99, 3.50, 0.00, 0.00, 4.00, 0.00, 2.99, 4.00, 4.…
$ total_pr    <dbl> 51.55, 37.04, 45.50, 44.00, 71.00, 45.00, 37.02, 53.99, …
$ ship_sp     <fct> standard, firstClass, firstClass, standard, media, stand…
$ seller_rate <int> 1580, 365, 998, 7, 820, 270144, 7284, 4858, 27, 201, 485…
$ stock_photo <fct> yes, yes, no, yes, yes, yes, yes, yes, yes, no, yes, yes…
$ wheels      <int> 1, 1, 1, 1, 2, 0, 0, 2, 1, 1, 2, 2, 2, 2, 1, 0, 1, 1, 2,…
$ title       <fct> "~~ Wii MARIO KART &amp; WHEEL ~ NINTENDO Wii ~ BRAND NE…
```

```r
mariokart %>% ggplot(aes(x=duration, y=total_pr)) +
  geom_point() +
  labs(x="Duration (in days)", y="Total price ($)")
```

![](https://i.imgur.com/WByh8OB.png)
*There are two major outliers in the scatterplot.*
- It turns out that in two auctions (and only these two) a game was sold with other items → Need to ==clean our data==

```r
mariokart2 <- mariokart %>% filter(total_pr < 100)
mariokart2 %>% ggplot(aes(x=duration, y=total_pr)) +
  geom_point() +
  labs(x="Duration (in days)", y="Total price ($)")
```
*Use `filter` to set an upper bound on price.*

![](https://i.imgur.com/jfB24id.png)

- There appears to be a **negative association** between auction duration and total price of Mario Kart games sold on eBay
    - Relatively linear relationship; weak to moderate in strength
- Does this make sense?
    - Yes:
        - *survivorship bias*/urgency, or buy-out price
    - No:
        - …

### Are these data consistent with 0?

We will assume that all assumptions for linear regression are satisfied, so we can use p-values from `lm()`
$$\text{total price}_{i} = \beta_{0} + \beta_{1} \times \text{duration}_{i} + \epsilon_{i}$$
$$\begin{align*} H_{0} : \beta_{1} = 0 && H_{1} : \beta_{1} \ne 0 \end{align*}$$
![](https://i.imgur.com/0G4vAuC.png)

- Since the p-value for the slope is much less than 0.001, we have strong evidence against the null hypothesis

> [!info] There must be something else affecting the duration and price.

---
# Multiple Linear Regression

→ [[900 Archive/UofT/Y1/STA130/W11/Multiple Linear Regression\|Multiple Linear Regression]]

---
# Interactions

→ [[900 Archive/UofT/Y1/STA130/W11/Interactions\|Interactions]]

---
# Multiple Coefficient Testing (t-tests vs F-tests)

→ [[900 Archive/UofT/Y1/STA130/W11/Multiple Coefficient Testing\|Multiple Coefficient Testing]]

---
# Measuring and assessing prediction accuracy

→ [[900 Archive/UofT/Y1/STA130/W11/Measuring and assessing prediction accuracy\|Measuring and assessing prediction accuracy]]

---
# Overfitting

→ [[900 Archive/UofT/Y1/STA130/W11/Overfitting\|Overfitting]]

---
# Model Comparison and Selection

→ [[900 Archive/UofT/Y1/STA130/W11/Model Comparison and Selection\|Model Comparison and Selection]]

---
# What is (and isn’t) a “linear” regression model

### What makes a model “linear”?

- “Linear” in linear regression means that the equation is linear in the parameters $\beta_{j}$
- Examples of *linear regression models*:
    - $y_{i} = \beta_{0} + \beta_{1}x_{1i} + \beta_{2} x_{2i} + \epsilon_{i}$
    - $y_{i} = \beta_{0} + \beta_{1}x_{1i}^{2} + \beta_{2} \log x_{2i} + \epsilon_{i}$
    - $y_{i} = \beta_{0} + \beta_{1}x_{2i} + \beta_{2}x_{2i} + \beta_{3}x_{3i} + \dots + \beta_{9}x_{99i} + \epsilon_{i}$
    - We can raise $x$ to weird powers, ==as long as the coefficients are still linear==
- Examples of *non-linear* models:
    - $y_{i} = \beta_{0} + x_{1i}^{\beta_{1}} + x_{2i}^{\beta_{2}} + \epsilon_{i}$
    - $y_{i} = e^{\beta_{0} + \beta_{1}x_{1i}} + \epsilon_{i}$
    - $y_{i} = \frac{\beta_{0} + \beta_{1}x_{1i}}{1 + \beta_{2}x_{2i}} + \epsilon_{i}$

