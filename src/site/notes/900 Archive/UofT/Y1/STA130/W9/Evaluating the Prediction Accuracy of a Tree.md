---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w9/evaluating-the-prediction-accuracy-of-a-tree/","created":"2024-03-12T17:53:48.115-07:00","updated":"2024-04-26T00:16:17.085-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|9]]
Course: #STA130
Date: 2024-03-12

---
# Measuring prediction accuracy for categorical predictions

- When we make predictions for *numerical responses*, we evaluate accuracy by looking at how ==close the predictions are== to the true values, on average
- When we have a *categorical response*, we can instead look at the **accuracy rate**, defined as:
    - $$\text{accuracy} = \frac{\text{\# of correct predictions}}{\text{total \# of predictions}}$$

## Different types of error

|                      | **Actually positive** | **Actually negative** |
| -------------------- | --------------------- | --------------------- |
| **Predict positive** | True positive         | False positive        |
| **Predict negative** | False negative        | True negative         |
*Confusion matrix.*

### Confusion matrix

- A table with one row for each predicted class and one column for each true class
---
- Number of correct predictions is obtained by:
    - summing the counts along the diagonal
- Total number of predictions made is obtained by:
    - summing all of the counts in the confusion matrix
- Another way of defining accuracy rate is:
    - $$\text{accuracy} = \frac{\text{\# true positives + \# true negatives}}{\text{total \# of predictions}}$$
- How to calculate the **sensitivity**?
    - $$\text{sensitivity} = \frac{\text{\# true positive predictions (TP)}}{\text{total \# actually positive (TP + FN, true positive rate)}}$$
- How to calculate the **specificity**?
    - $$\text{specificity} = \frac{\text{\# true negative predictions (TN)}}{\text{total \# actually negative (TN + FP, true negative rate)}}$$

---
# How do we make predictions in R?

```r
# Get additional rows of data to run through our tree
new_NHANES <- NHANES::NHANES[9001:10000,] %>%
    select(Age, Race3, Work, DaysMentHlthBad, DaysPhysHlthBad,
            Depressed, SleepHrsNight, SleepTrouble)
glimpse(new_NHANES)
```

```
Rows: 1,000
Columns: 8
$ Age             <int> 12, 12, 12, 51, 56, 56, 69, 20, 75, 3, 8, 8, 8, 8, 16…
$ Race3           <fct> White, White, White, Hispanic, White, White, Mexican,…
$ Work            <fct> NA, NA, NA, NotWorking, NotWorking, NotWorking, Worki…
$ DaysMentHlthBad <int> 0, 0, 0, 8, NA, NA, 14, 18, 0, NA, NA, NA, NA, NA, 0,…
$ DaysPhysHlthBad <int> 1, 1, 1, 20, NA, NA, 16, 0, 6, NA, NA, NA, NA, NA, 0,…
$ Depressed       <fct> NA, NA, NA, Several, NA, NA, None, Most, None, NA, NA…
$ SleepHrsNight   <int> NA, NA, NA, 8, 8, 8, 7, 7, 11, NA, NA, NA, NA, NA, 8,…
$ SleepTrouble    <fct> NA, NA, NA, No, No, No, Yes, No, No, NA, NA, NA, NA, …
```

```r
predictions <- predict(tree, newdata=new_NHANES, type="class")
predictions %>% head(n=20)
```
```
 1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 
No No No No No No No No No No No No No No No No No No No No 
Levels: No Yes
```

- `predict()` lets us use a tree we have built to make predictions for new observations
    - First argument:
        - Tree to use
    - `newdata`
        - Data we want to make predictions on
    - `type`
        - Predict labels

```r
confusion_matrix <- table(predictions, new_NHANES$SleepTrouble)
confusion_matrix
```
```
predictions  No Yes
        No  552 202
        Yes   3  10
```

- First argument gives the rows
- Second argument gives the columns (true values)

Back to [[900 Archive/UofT/Y1/STA130/Week 9 Lecture\|Week 9 Lecture]].