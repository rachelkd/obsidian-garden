---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w11/model-comparison-and-selection/","created":"2024-04-01T11:53:24.419-07:00","updated":"2024-04-01T14:52:15.271-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|11]]
Course: #STA130
Date: 2024-04-01

---

- When choosing between various prediction models, we want to satisfy a few criteria:
    - A model with **good prediction accuracy on average** (i.e., RMSE for test data is small compared to other models)
    - A model which is **as simple as possible** (i.e., not too many predictors)
        - while still capturing the association between the predictors and the response
        - Less at risk for overfitting

> [!info] Goal
> - Identify a model which balances these factors
> - Possible that different models appear “best” based on different criteria
>     - ==Occam’s Razor==
> - Ultimately, need to choose one and justify our choice
>     - May sometimes be more than one reasonable choice

# Comparing models: Mario Kart

> [!question] Which model makes the best prediction?
> 1. A: Duration only
> 2. B: Condition only
> 3. C: Duration + condition (no interactions)
> 4. D: Duration * condition (with interactions)


![11_compare models.png](/img/user/900%20Archive/UofT/Y1/Files/STA130/11_compare%20models.png)

- Only model D achieves a substantial decrease in RMSE
- Ratio of RMSEs is close to 1 too
- If we need a back up model, model A is good too since it has a lower ratio

---
Back to [[900 Archive/UofT/Y1/STA130/Week 11 Lecture\|Week 11 Lecture]].