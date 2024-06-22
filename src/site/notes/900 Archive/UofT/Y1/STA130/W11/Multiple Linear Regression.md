---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w11/multiple-linear-regression/","created":"2024-03-25T10:57:17.209-07:00","updated":"2024-03-28T18:01:42.357-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|11]]
Course: #STA130
Date: 2024-03-25

---
# Why not just add multiple parameters?

$$y_{i} = \beta_{0} + \beta_{1}x_{1, i} + \beta_{2}x_{2, i} + \dots + \epsilon_{i}$$
$$y_{i} = \beta_{0} + \Bigg[\sum\limits_{j=1}^{k - 1}\beta_{j}x_{j, i} \Bigg] + \epsilon_{1}$$
# Example: Mario Kart 


```r
mariokart2 %>% ggplot(aes(x=duration, y=total_pr, color=cond)) +
  geom_point() +
  theme_bw()

mariokart2 %>% ggplot(aes(x=cond, y=total_pr)) +
  geom_boxplot() +
  theme_bw()
```

![|500](https://i.imgur.com/k6pq37T.png)

![|500](https://i.imgur.com/vRrCG7S.png)
*Distribution of prices sorted by Mario Kart game condition.*

## Adding more variables to our model

Let’s add `cond` as a predictor variable.
$$y_{i} = \beta_{0} + \beta_{1}x_{1, i} + \beta_{2}x_{2, i} + \epsilon_{i}$$
- $x_{1,i}$ is the duration
- $x_{2,i}$ is the condition
    - can only be 0 (the baseline) or 1

```r
library(broom)  # Import broom package
parallel_lines <- lm(total_pr ~ duration + cond, data=mariokart2)
summary(parallel_lines)$coefficients
```
```
              Estimate Std. Error   t value     Pr(>|t|)
(Intercept) 54.7058693  1.1418347 47.910500 7.021551e-88
duration    -0.4087132  0.2732979 -1.495486 1.370710e-01
condused    -9.8709545  1.4291789 -6.906731 1.663239e-10
```
*We have three coefficients.*

- `condused` tells us that if the value is `1`, then `cond` is `used`
- `condused` coefficient tells us:
    - If we go from `new` to `used`, then the price reduces \$9.87 on average
- `duration` coefficient tells us:
    - For each day, the price decreases by \$0.41 on average
## How do we visualize this?

→ [[900 Archive/UofT/Y1/STA130/W11/Plotting Parallel Lines\|Plotting Parallel Lines]]

From [[900 Archive/UofT/Y1/STA130/W11/Plotting Parallel Lines\|Plotting Parallel Lines]], we have this visualization:
![](https://i.imgur.com/Nogfq2R.png)

```r
              Estimate Std. Error   t value     Pr(>|t|)
(Intercept) 54.7058693  1.1418347 47.910500 7.021551e-88
duration    -0.4087132  0.2732979 -1.495486 1.370710e-01
condused    -9.8709545  1.4291789 -6.906731 1.663239e-10
```
*Notice from our summary of `parallel_lines`, that duration is not that significant according to our p-value (`0.14`).*

---
# What about multiple continuous variables?

- We can use the same “parallel lines” analogy
- But, we should ==think of the coefficient as *controlling* the “spacing”== of the lines
    - i.e., how quickly it moves up and down in response to the new variable
    - ![](https://i.imgur.com/TJOOiqi.png)
    - We have multiple parallel lines for each value of $x_{2}$
    - The slope does not change because we are still looking at `duration` vs. `totalPr`

