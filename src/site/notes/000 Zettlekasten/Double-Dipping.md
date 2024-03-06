---
{"dg-publish":true,"permalink":"/000-zettlekasten/double-dipping/","created":"2024-03-05T21:47:57.501-05:00","updated":"2024-03-05T21:57:11.437-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|8]]
Course: #STA130
Date: 2024-03-05

---
> [!abstract] Recall from [[100 📒 Academia/STA130/W8/How Many Clusters Is Enough\|How Many Clusters Is Enough]].
> - We cannot create clusters, then run hypothesis tests to see if our clusters are real.

# Double-dipping in statistics

- Now that we are actively exploring our data to find things and form hypotheses, we need to be careful about **”double-dipping”**
    - If we use the data in one context, we want to be careful about reusing it in a different context
    - This can result in **overfitting**
- i.e., When we explore data, we do not know what the hypotheses are
    - Sometimes, we form hypotheses, ideas, or trends by looking at the data
    - We do not know if these are real trends
    - We use the data to find the trend → We cannot check if the trend is real since we made an assumption that the trend is already real (by looking at the data)
        - Circular!

> [!question] How does this affect us?
> - We use the data to get the cluster centers to set up our 2-sample hypothesis test, so we have engaged in *double-dipping*
> - In fact, we used the data to determine the ==best== cluster centers
>     - That is why the p-value is so small
> - Analogy:
>     - Separating short and tall people, and then looking for a difference between them

> [!important] **Double-dipping can be seen as a generalization of [[100 📒 Academia/STA130/W6/P-hacking\|p-hacking]].**



