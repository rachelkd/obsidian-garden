---
{"dg-publish":true,"dg-path":"academia/STA130/Week 9 Lecture.md","permalink":"/academia/sta-130/week-9-lecture/","created":"2024-03-11T13:23:56.512-04:00","updated":"2024-03-15T14:24:34.368-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|9]]
Course: #STA130
Date: 2024-03-11

---
# Supervised vs. unsupervised learning

Last week, we discussed [[100 📒 Academia/STA130/W8/Clustering\|clustering]] (divide data into groups; we do not know how many groups and we do not know what the *real* groups are).
- In clustering, we are trying to organize the groups as best as we can…
    - to groups that are as similar to each other as possible
    - and across groups that are most different to each other as possible
    - We do not know if we are right or wrong: we are just grouping data as best as possible
- This is **unsupervised learning**

→ [[100 📒 Academia/STA130/W9/Supervised vs Unsupervised Learning\|Supervised vs Unsupervised Learning]] 

---
# Anatomy of a classification tree

### Predicting which people have trouble sleeping #example 

> [!info] Goal.
> Build a classification tree to predict which individuals have trouble sleeping based on a sample of 2,500 individuals survey in the US between 2009 and 2012.

```r
NHANES <- read_csv("NHANES_data.csv")
NHANES %>% 
  select(Age, Race3, Work, DaysMentHlthBad, DaysPhysHlthBad,
         Depressed, SleepHrsNight, SleepTrouble) %>%
  glimpse()
```
*Random sample of 2,500 observations from the US National Health and Nutrition Examination Study (NHANES), documentation at https://cran.r-project.org/web/packages/NHANES/NHANES.pdf.*

```
Rows: 2,500
Columns: 8
$ Age             <dbl> 64, 32, 67, 43, 75, 21, 30, 79, 37, 60, 27, 45, 26, 4…
$ Race3           <chr> "Hispanic", NA, NA, NA, "White", "Hispanic", "White",…
$ Work            <chr> "NotWorking", "Working", "Working", "NotWorking", "No…
$ DaysMentHlthBad <dbl> 0, 0, 0, 30, 0, 0, 2, 0, 30, 3, 4, 26, 3, 0, 30, 2, 3…
$ DaysPhysHlthBad <dbl> 0, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 10, …
$ Depressed       <chr> "None", "None", "None", "Most", "None", "None", "None…
$ SleepHrsNight   <dbl> 5.477751, 6.819995, 5.852940, 5.721259, 8.071489, 6.3…
$ SleepTrouble    <chr> "Yes", "No", "No", "Yes", "Yes", "No", "Yes", "No", "…
```

- Response:
    - Whether people have trouble sleeping
- Based on the data, we will try to predict which people have trouble sleeping

---
# Classification Trees

→ [[100 📒 Academia/STA130/W9/Classification Trees\|Classification Trees]]
→ [[100 📒 Academia/STA130/W9/Evaluating the Prediction Accuracy of a Tree\|Evaluating the Prediction Accuracy of a Tree]]
→ [[100 📒 Academia/STA130/W9/How a Tree is Fit\|How a Tree is Fit]]

---
# Final notes on classification trees

## What if the response has more than 2 levels?

We can still fit a classification tree to predict a categorical response with more than 2 levels:


|          | **Low** | **Med.** | **High** |
| -------- | ------- | -------- | -------- |
| **Low**  | True    |          |          |
| **Med**  |         | True     |          |
| **High** |         |          | True     |
- We can use the `table()` function for this
- The types of error would be important to consider, but the labels would be different
    - We would not take about sensitivity and specificity
