---
{"dg-publish":true,"dg-path":"academia/STA130/W11/Interactions.md","permalink":"/academia/sta-130/w11/interactions/","created":"2024-03-28T18:23:46.699-04:00","updated":"2024-03-28T21:00:06.556-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|11]]
Course: #STA130
Date: 2024-03-28

---

- Before, in [[100 📒 Academia/STA130/W11/Multiple Linear Regression\|Multiple Linear Regression]], we assumed “parallel lines”
    - i.e., same slope, different offset

> [!important] We can add in ==**interaction terms**== to see if we want to allow for ==**modified relationships between variables**==.
> - What exactly is the interaction term doing?
> - What happens when `cond = 0` (new)?
> - What happens when `cond = 1` (used)?

$$y_{i} = \beta_{0} + \beta_{1}x_{1,i} + \beta_{2}x_{2,i} + \beta_{3}x_{1,i}x_{2,i} + \epsilon_{i}$$
- We add a third variable multiplied by the product of $x_{1}$ and $x_{2}$
- When $x_{2} = 0$,
    - We get $y = \beta_{0} + \beta_{1}x_{1}$
- When $x_{2} = 1$,
    - We get $y = \beta_{0} + \beta_{1}x_{1} + \beta_{2} + \beta_{3}x_{1} = (\beta_{0} + \beta_{2}) + (\beta_{1} + \beta_{3})x_{1}$
    - Notice that ==our slope can also change==

> [!important] Our interaction term allows us to fit for another slope.

---
# Extended Example: Mario Kart Auction
Example from [[100 📒 Academia/STA130/Week 11 Lecture\|Week 11 Lecture]].

- How do we use our **interaction model**?
    - Use `*` instead of `+` in `lm()`

```r
multiple_lines <- lm(total_pr ~ duration * cond, data=mariokart2)
summary(multiple_lines)$coefficients
```
```
                    Estimate Std. Error   t value     Pr(>|t|)
(Intercept)        58.268226  1.3664729 42.641332 5.832075e-81
duration           -1.965595  0.4487799 -4.379865 2.341705e-05
condused          -17.121924  2.1782581 -7.860374 1.013608e-12
duration:condused   2.324563  0.5483731  4.239016 4.101561e-05
```
*Notice new variable `duration:condused`.*

- The coefficients give us $\hat{\beta_{0}}, \hat{\beta_{1}}, \hat{\beta_{2}}, \hat{\beta_{3}}$ respectively
- Notice that the p-values are all small vs. in [[100 📒 Academia/STA130/W11/Multiple Linear Regression#How do we visualize this?\|Multiple Linear Regression#How do we visualize this?]]
    - We have *emergent* interaction

```r
mariokart2 %>% ggplot(aes(x=duration, y=total_pr, color=cond)) +
  geom_point(alpha=0.5) +
  geom_line(data=augment(multiple_lines), aes(y=.fitted, color=cond), lwd=1.5)
```

![](https://i.imgur.com/RlQAOEm.png)

- The duration of the auction can have opposite effects on the price depending on the condition of the game
    - Two different relationships that go in opposite directions
    - It did not make sense before to think of all games as one, but as individual games

---
Back to [[100 📒 Academia/STA130/Week 11 Lecture\|Week 11 Lecture]].