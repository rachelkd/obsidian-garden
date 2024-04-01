---
{"dg-publish":true,"dg-path":"academia/STA130/W11/Multiple Coefficient Testing.md","permalink":"/academia/sta-130/w11/multiple-coefficient-testing/","created":"2024-03-28T21:02:34.651-04:00","updated":"2024-04-01T13:56:30.814-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|11]]
Course: #STA130
Date: 2024-03-28

---

$$y_{i} = \beta_{0} + \beta_{1}x_{1,i} + \beta_{1}x_{1,i} + \beta_{1}x_{1,i} + \cdots + \epsilon_{i}$$
> [!question] What happens when we have multiple variables for testing? ($\beta_{i}$)

- What is a **t-test**?
    - Is coefficient $\beta_{1}$ consistent with a slope of 0?
        - $H_{0} : \beta_{1} = 0$
        - $H_{A} : \beta_{1} \ne 0$
- What is a **F-test**?
    - Is there *any* linear relationship present in the data?
        - More general
        - $H_{0} : \beta_{0} = \mu, \beta_{1} = \beta_{2} = \dots = 0$
        - $H_{A} : \text{ anything else}$
- At a given alpha-level, can we reject the null based on the F-test, but fail to reject the null for all t-test?
    - Yes

# F-tests from `lm()` in R

![](https://i.imgur.com/71I7H4t.png)

- If we find evidence for the `(Intercept)`, `duration`, `condition` and interaction variable being significant, then the F-test is likely significant 
---
Back to [[100 📒 Academia/STA130/Week 11 Lecture\|Week 11 Lecture]].