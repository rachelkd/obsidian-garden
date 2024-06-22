---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w11/measuring-and-assessing-prediction-accuracy/","created":"2024-04-01T10:56:52.163-07:00","updated":"2024-04-22T12:14:18.896-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|11]]
Course: #STA130
Date: 2024-04-01

---
#  What model gives the best predictions?

- **correlation ($r$) vs. coefficient of determination ($R^{2})$**
    - both tell us about the overall variation and proportion of variation explained by the model
    - but, does not tell us how *accurate* the predictions are
    - ![](https://i.imgur.com/dMCSecS.png)

- What does **T-test** (one coefficient) and **F-test** (ANOVA; all coefficients) tell us?
    - Tells us about ==coefficients being zero vs. non-zero==
    - NOT about accuracy of overall predictions

> [!important] We use **root mean squared error (RMSE)**
> - Based on our MSE loss function
> - Directly measures prediction error
> $$RMSE = \sqrt{\frac{1}{n} \sum\limits_{i=1}^{n} (y_{i} - (\hat{\beta_{0}} + \hat{\beta_{1}}x_{i}))^{2} }$$
> $$= \sqrt{\frac{1}{n} \sum\limits_{i=1}^{n} \hat{\epsilon_{i}}^{2}}$$

- RMSE can roughly be interpreted as the “typical” error in a prediction
- As with standard deviation, we can think of this as a typical “distance” of a point from a reference
- Different choices of metrics (MSE/Euclidean vs. MAE/Manhattan) will give different results

# $R^{2}$ vs. RMSE

![11_r_squared_vs_rmse.png](/img/user/900%20Archive/UofT/Y1/Files/STA130/11_r_squared_vs_rmse.png)

---
Back to [[900 Archive/UofT/Y1/STA130/Week 11 Lecture\|Week 11 Lecture]].