---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w9/supervised-vs-unsupervised-learning/","created":"2024-03-12T17:22:39.264-07:00","updated":"2024-04-26T00:16:17.099-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|9]]
Course: #STA130
Date: 2024-03-12

---
- **unsupervised learning**
    - The “machine” (e.g., k-means algorithm) “learns” how to group the data into clusters, enough though we did not tell it what the groups should be
    - ![|500](https://i.imgur.com/qioqEX1.png)
- **supervised learning**
    - We give the “machine” data with the *correct labels*
    - It *learns* how to predict labels for new observations that we do not have labels for yet
    - ![|500](https://i.imgur.com/3NbOCMs.png)

---
# Branches of supervised learning

Suppose that you are interested in predicting tomorrow’s weather based on today’s weather conditions.
- We will build a **model** using historical data, with:
    - predictors
        - e.g., the date, wind speed, temperature, humidity, and whether the next day was hot or cold
        - ![](https://i.imgur.com/w1kBRdK.png)
    - response (*numerical* value or *label*)
---
- Two types of supervised learning:
    - **classification**
        - response is a *categorical* value
        - e.g., “Will it be hot or cold tomorrow?”
    - **regression**
        - response is a *numerical* value
        - e.g., “What will be the temperature tomorrow?”

# Classification vs. clustering

![](https://i.imgur.com/936HyC0.png)

- Classification looks similar to [[900 Archive/UofT/Y1/STA130/W8/Clustering\|clustering]]: trying to form groups, but
    - they are ==fundamentally different!==
- With **unsupervised learning**, 
    - There are no labels to start with
    - We have data → trying to group them into similar observations (different ways to define similar)
- With **supervised learning**,
    - We have labels
    - We are trying to build a model that tells us whether a point should be blue or red if we did not know the truth for that *new* observation
    - i.e., We know the truth → Build a model using true data → Make predictions for when we do not know the truth

Back to [[900 Archive/UofT/Y1/STA130/Week 9 Lecture#Anatomy of a classification tree\|Week 9 Lecture]].