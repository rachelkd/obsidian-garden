---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w9/classification-trees/","created":"2024-03-11T10:33:33.490-07:00","updated":"2024-04-26T00:16:17.082-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|9]]
Course: #STA130
Date: 2024-03-11

---

```ad-def
title: Classification tree.
- Upside down tree that “grows” from the **root node** towards the **terminal (leaf) nodes**

```

![](https://i.imgur.com/qIZN9M2.png)

- All observations start in the root node
- You ask questions to split into different branches
    - e.g., “How many hours of sleep do you get per night?”
        - If yes, then we ask, “How many days of each month do you have physical mental health?”
        - We will predict “yes” to our original question if days ≥ 8.5
- Each non-terminal node splits to create exactly two **child** nodes
    - In R, **terminal nodes** are indicated by boxes
---
# Classification Trees in R

```r
library(rpart)  # Package which includes the rpart() function, used to build trees
library(partykit)  # Packages which includes as.party(), used to visualize trees

tree <- rpart(SleepTrouble ~ SleepHrsNight + DaysPhysHlthBad, data = NHANES)
plot(as.party(tree), gp=gpar(cex=1), type='simple')
```

`rpart()` arguments:
- What is the **response**?
    - `SleepTrouble`
- What are the **predictors**?
    - `SleepHrsNight`
    - `DaysPhysHlthBad`
    - Separated by `+`

`plot()` arguments:
- What does `gpar` do?
    - Controls font size
- What does `type` do?
    - Changes what the tree looks like
    - Could also use `extended`

### Which nodes are…

- Root node(s):
    - 1
- Terminal node(s):
    - 4, 5, 2
- Parent node(s):
    - Where there is a question being asked
    - 1, 3
- Child nodes
    - Where you end up after a question
    - 2, 3, 4, 5
    - Note: 3 is a child and parent node

## Use the tree to make predictions

Suppose someone who typically gets 5.2 hours of sleep on weeknights and reports having 4 days of poor physical health over the past month, has trouble sleeping.

- $5.2 < 5.892$ → Go to node #3
- $4 < 8.5$ → Go to node #4
    - We predict no, this person does not have trouble sleeping

> [!question] How do we evaluate the prediction accuracy of a tree?
> → [[900 Archive/UofT/Y1/STA130/W9/Evaluating the Prediction Accuracy of a Tree\|Evaluating the Prediction Accuracy of a Tree]]

Back to [[900 Archive/UofT/Y1/STA130/Week 9 Lecture#Classification Trees\|Week 9 Lecture]].