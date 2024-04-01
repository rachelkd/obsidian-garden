---
{"dg-publish":true,"dg-path":"academia/STA130/W9/How a Tree is Fit.md","permalink":"/academia/sta-130/w9/how-a-tree-is-fit/","created":"2024-03-12T21:43:42.280-04:00","updated":"2024-03-12T22:10:35.684-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|9]]
Course: #STA130
Date: 2024-03-12

---
# What do we need to build a tree?

1. A **response** variable ($y$, what we want to predict)
    - categorical
2. A set of candidate **predictors** ($x_{i}, i = 1, \dots, M$)
3. A set of **binary* questions** (e.g.,, is $x_{i} \ge 25$?)
4. A method to evaluate **if a split is “good”**
5. A rule to decide when to **stop splitting**
6. A **way to make a prediction** for each terminal node

# What kind of questions can we use for splits?

- We need a **categorical response** and **binary splits** (i.e., splits based on TRUE/FALSE questions)

e.g., We could use:

- **numerical predictors**
    - `SleepHrsNight` (self-reported average # of hours of sleep on weekdays)
    - e.g., `SleepHrsNight > 6`
- **categorical predictors**
    - `MaritalStatus`
    - e.g., `MaritalStatus %in% c("Married", "LivePartner")`
    - 
      ```r
      unique(NHANES$MaritalStatus)
      ```
    - 
      ```
      [1] "Married"      "NeverMarried" "Divorced"     "LivePartner"  "Widowed"     
      [6] "Separated"
      ```

> [!important] When we create binary branches, we only involve *one* variable.

# What is a “good” split?

> [!info] A “good” split is one that…
> -  makes its *child* node as pure as possible
>     - i.e., homogeneous with respect to the response

- A node is **pure** if:
    - it contains only observations from one class
    - i.e., mostly uniform with respect to the response variable
- A node is **impure** if:
    - it contains an equal mix of all the classes (e.g., 50% “no sleep trouble” and 50% “sleep trouble”)
- We want all the yeses on one side, and the nos on another
- Each time we make a split, we want to take a mixed-up group of data of yeses and nos
    - Want to split into two groups that are less mixed-up
    - i.e., mostly yes in one group, mostly no in another group

### There are several measures of impurity
1. Gini index
    - $$Gini(t) = 1 - (w_{1} (t))^{2} + (w_{2} (t))^{2}$$
    - where $w_{1}$ is the fraction of records belonging to class $i$ in node $t$
2. Entropy
    - $$Entropy(t) = -w_{1} (t) \log_{2} (w_{1}(t)) + w_{2}(t) \log_{2}(w_{2}(t))$$
    - where $w_{1}$ is the fraction of records belonging to class $i$ in node $t$

---
# Geometric interpretation of classification tree: A useful way to visualize purity/impurity

```r
plot(as.party(tree), type="extended")
```

![](https://i.imgur.com/4XpFh9v.png)

- Our first branch splits at `SleepHrsNight = 5.892`
    - Everything to the right of `5.892` on the $x$-axis goes to Node 2
- Node 3 splits at `DaysPhysHlthBad = 8.5`
    - If less, then we go to Node 4
    - If equal to or greater than, we go to Node 5

![|400](https://i.imgur.com/NJrl22q.png)

---
# What is the “best” split

For each candidate split, we can calculate the decrease in impurity $\Delta I$
- $\Delta I$ measures how much more pure the two child nodes would be, compared to the parent node
    - Usually *Gini* (default in R) or *Entropy*
---
- When we split a node, we look at:
    - Each potential predictor variable
    - Each possible split for each variable, and calculate $\Delta I$ for each one

> [!important] The “best” split is the one with the biggest decrease in $\Delta I$

---
# When to stop splitting?

- There are two competing goals when building a classification tree:
    - We want each terminal node to be as pure as possible
    - We do not want a tree that is too complex (generalize)
        - If we add more nodes and decisions, we risk **over-fitting**
            - We are not capturing the general gist of what is happening in the population
            - We are modelling the randomness as well
- A simple **”stop-splitting”** rule is to set a **threshold $\beta > 0$**
    - If none of these possible splits for a node makes the tree at least $\beta$-units more pure (i.e., if $\Delta I > \beta$), we do not split further

Back to [[100 📒 Academia/STA130/Week 9 Lecture\|Week 9 Lecture]].