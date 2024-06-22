---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w11/plotting-parallel-lines/","created":"2024-03-28T15:01:07.402-07:00","updated":"2024-03-28T17:53:31.274-07:00"}
---

**Preamble**
Week: [[_STA130 Notes|11]
Course: #STA130
Date: 2024-03-28

---

```r
library(broom)
augment(parallel_lines)
```
```
# A tibble: 141 × 9
   total_pr duration cond  .fitted .resid   .hat .sigma   .cooksd .std.resid
      <dbl>    <int> <fct>   <dbl>  <dbl>  <dbl>  <dbl>     <dbl>      <dbl>
 1     51.6        3 new      53.5 -1.93  0.0177   7.36 0.000422     -0.265 
 2     37.0        7 used     42.0 -4.93  0.0189   7.35 0.00296      -0.679 
 3     45.5        3 new      53.5 -7.98  0.0177   7.33 0.00721      -1.10  
 4     44          3 new      53.5 -9.48  0.0177   7.32 0.0102       -1.30  
 5     71          1 new      54.3 16.7   0.0193   7.22 0.0346        2.30 6     45          3 new      53.5 -8.48  0.0177   7.33 0.00814      -1.17  
 7     37.0        1 used     44.4 -7.41  0.0323   7.34 0.0117       -1.03  
 8     54.0        1 new      54.3 -0.307 0.0193   7.37 0.0000117    -0.0423
 9     47          3 used     43.6  3.39  0.0167   7.36 0.00123       0.466 
10     50          7 used     42.0  8.03  0.0189   7.33 0.00782       1.10  
# ℹ 131 more rows
```

- Our model (from our example in [[900 Archive/UofT/Y1/STA130/Week 11 Lecture\|Week 11 Lecture]]) is essentially parallel lines
- We use the `broom` package to plot this
- `augment` function
    - Returns input data and six extra variables in a tibble
    - We are only interested in `.fitted` and `.resid`
- What is `parallel_lines`?
    - Our model from `lm()`
    - `parallel_lines <- lm(total_pr ~ duration + cond, data=mariokart2)`

```r
mariokart2 %>% ggplot(aes(x=duration, y=total_pr, color=cond)) +
  geom_point(alpha=0.5) +
  geom_line(data=augment(parallel_lines), 
            aes(y=.fitted, color=cond), lwd=1.5)
```
*We add the augmentation of our data. We plot `y=.fitted`.*

![](https://i.imgur.com/Nogfq2R.png)

- The slope of our parallel lines is:
    - $\beta_{1}$
- The offset between the parallel lines is:
    - $\beta_{2}$
- The y-intercept for our baseline (red line since `condused` implies `new` is the baseline) is:
    - $\beta_{0}$

> [!important] Using multiple regression,
> - We do not have to filter our data and fit it one at a time
>     - We can fit it all at once
> - We can derive our slopes and intercept
> - **“The relationship between duration and price is the same, but we have this offset.”**
>     - Can run a hypothesis test


Back to [[900 Archive/UofT/Y1/STA130/W11/Multiple Linear Regression\|Multiple Linear Regression]].