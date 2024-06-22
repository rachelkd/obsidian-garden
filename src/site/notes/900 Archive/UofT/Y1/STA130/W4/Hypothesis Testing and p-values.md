---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w4/hypothesis-testing-and-p-values/","created":"2024-01-29T11:44:39.842-08:00","updated":"2024-04-21T13:57:45.302-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|4]]
Course: #STA130
Date: 2024-01-29

---

- What is **p-value**?
	- probability of observing a test statistic **at least as extreme as the observed value** if the *null hypothesis is true*

![4_p_values_in_distribution.png](/img/user/900%20Archive/UofT/Y1/Files/STA130/4_p_values_in_distribution.png)

- **Two-sided test**:
	- $$\text{p-value} = \frac{\text{\# simulations where } |{TS}_{sim} - f_{0}| \geq |{TS}_{obs} - f_{0}|}{\text{\# of simulations}}$$
	- In our example from [[900 Archive/UofT/Y1/STA130/Week 4 Lecture\|W4 lecture]],
		- $TS_{obs} = 0.3 = \frac{3}{10}$ is the blue line on left
			- Blue line on right ($0.7$) is the same distance as $TS_{obs}$ to $H_{0} = 0.5$
		- Center black line = $f_{0}$ : value under $H_{0} = 0.5$
		- All the shaded blue region incl. line are the $TS_{sim}$ values as or more extreme than $TS_{obs}$
	- For the p-value, we count how many simulated test statistics fall into the shaded area relative to the total number of simulated test statistics
		- shaded area is large $\implies$ observed test statistic is not that unusual
		- shaded area is small $\implies$ observed test statistic was far into the tails; suggests our value is unlikely to come up if null hypothesis was true
- **One-sided test** (right):
	- $$\text{p-value} = \frac{\text{\# simulations where } {TS}_{sim} \geq {TS}_{obs}}{\text{\# of simulations}}$$
- **One-sided test** (left)
	- $$\text{p-value} = \frac{\text{\# simulations where } TS_{sim} \leq TS_{obs}}{\text{\# of simulations}}$$

## Digression

- Does the p-value tell you the probability that $H_{0}$ is true or false?
	- No.
	- Extremely common misunderstanding
	- p-value is only a statement on observed outcomes:
		- either $H_{0}$ is true and we got unlucky, or
		- $H_{0}$ is not true
	- We do not know which one is true in any particular case

<br>

- If you make a statement about “random chance,” this is called **frequentist statistics** (what we explore in STA130)
- If you instead are making a statement about “belief,” (i.e., “5% sure that $H_{0}$ is true”), this is called **Bayesian statistics**

## p-value of WoD data in R

From of WoD example in [[900 Archive/UofT/Y1/STA130/Week 4 Lecture\|Week 4 Lecture]], 

```r
prop_red_wheel_of_destiny <- 0.3
num_trials <- nrow(classdata_clean)
sum(
	abs(classdata_clean$prop_heads - 0.5) >=
	abs(prop_red_wheel_of_destiny - 0.5)
	) / num_trials
```

$$\text{p-value} = \frac{\text{\# simulations where } |{TS}_{sim} - f_{0}| \geq |{TS}_{obs} - f_{0}|}{\text{\# of simulations}}$$

## From p-value to Hypothesis Test

- What **decision** should we make based on our observed p-value?

We need to specify a **rejection (decision) rule** that tells us when we should reject the null hypothesis in favour of the alternative,

- Most common rule is to reject if…
	- $p \leq \alpha = 0.05$ (often called an “alpha-level”)
	- This “controls” the max. possible **false positive rate** assuming the null hypothesis is true
	- i.e., if shaded region is equal to or smaller than 0.05, then our test statistic would be very unusual if the null hypothesis was true → reject the null hypothesis

### Contextualizing p-value of WoD data

We computed a p-value of 0.7 → 70% of sim. values are more extreme than what we observed if the null hypothesis was true

| P-value | Strength of the evidence |
| ---- | ---- |
| p-value > 0.10 | No evidence against $H_0$ |
| 0.05 < p-value < 0.10 | Weak evidence against $H_0$ |
| 0.01 < p-value < 0.05 | Moderate evidence against $H_0$ |
| 0.001 < p-value < 0.01 | Strong evidence against $H_0$ |
| p-value < 0.001 | Very strong evidence against $H_0$ |

- What can we say about the strength of the evidence against the null hypothesis?
	- No evidence against $H_{0}$
	- This does not mean the null hypothesis is true or not true
		- but we don’t have any proof that it is not fair
- Would we reject the null hypothesis at the $\alpha = 0.05$ level?
	- No, b/c $0.05 < 0.7$

# Type I and Type II Errors

|  | $H_0$ is True | $H_{0}$ is False |
| ---- | ---- | ---- |
| Reject $H_0$ | Type I Error<br>(False positive) | Correct outcome<br>(True positive) |
| Fail to reject $H_0$ | Correct outcome<br>(True negative) | Type II Error<br>(False negative) |

---

Back to [[900 Archive/UofT/Y1/STA130/Week 4 Lecture\|Week 4 Lecture]].