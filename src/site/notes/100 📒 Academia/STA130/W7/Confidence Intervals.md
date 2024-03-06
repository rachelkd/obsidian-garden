---
{"dg-publish":true,"dg-path":"academia/STA130/W7/Confidence Intervals.md","permalink":"/academia/sta-130/w7/confidence-intervals/","created":"2024-02-26T14:36:06.679-05:00","updated":"2024-02-26T22:46:59.211-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|7]]
Course: #STA130
Date: 2024-02-26

---
# Using our bootstrap sampling distribution

- Bootstrapping relies on our random sample
	- → still do not know true population mean!
- However, we can use it to *estimate* a potential *range of values* for the population mean
- **confidence interval**
	- the range of values for the population mean

# Confidence interval

- The procedure for computing a **X% confidence interval (CI)** for an unknown population parameter:
	1. Estimate the **bootstrap sampling distribution** using bootstrapping
	2. Compute its **$(0.5 - X / 100 / 2, 0.5 + X / 100 / 2)$ quantiles**

## Percentiles/quantiles

- We have seen **percentiles** in [[100 📒 Academia/STA130/W2/Boxplots\|boxplots]]
	- Boxplots show the interquartile range (IQR) that uses the 25th/75th percentiles
	- Median is the 50th percentile
- What is a **quantile**?
	- percentile, divided by 100

![|400](https://i.imgur.com/UvkUCrX.png) ![|300](https://i.imgur.com/XQHkK2h.png)



```r
# Calculate Q1, median, and Q3
quantile(boot_means$mean_delay, c(0.25, 0.5, 0.75))
```
```
  25%   50%   75% 
2.205 4.395 6.695
```
```r
# Can also calculate any other percentiles
quantile(boot_means$mean_delay, c(0.025, 0.4, 0.57))
```
```
     2.5%       40%       57% 
-1.880125  3.520000  4.970000
```

## Confidence Interval Procedure

- The procedure for computing a **$X$% confidence interval (CI)** for an unknown population parameter is:
	1. Estimate the **bootstrap sampling distribution** using bootstrapping
	2. Compute its **$(0.5 - \frac{X}{100}\cdot\frac{1}{2}, 0.5 + \frac{X}{100}\cdot\frac{1}{2})$ quantiles**

```r
quantile(boot_means$mean_delay, c(0.024, 0.975))
```
```
     2.5%       97.5%
-1.880125   11.445625
```

# How to interpret a $X\%$ confidence interval

- $X\%$ of the time, a $X\%$ confidence interval will contain the true (unknown) population parameter
	- “We are *95% confident* that the *mean arrival delay* for *all* flights from NYC to SFO in 2013 is between -1.88 (i.e., 1.88 minutes early) and 11.45 (i.e., 11.45 minutes late).”
- ==We **cannot** say for sure if a specific interval contains the true value==
	- but we can say that we are confident that it does because our method guarantees specific error rates
		- i.e., we only “miss” $100-X\%$ of the time
		- Similar to [[100 📒 Academia/STA130/W4/Hypothesis Testing and p-values#Type I and Type II Errors\|Type I and Type II errors]], but for parameter estimation, we just “miss” in one way (not two)

# Final Notes

- What if the sample is bad to start with?
	- might happen through random chance
	- is included in the $X\%$ CI
- Can the bootstrap give us a “better” estimate of the population parameter?
	- No
	- Bootstrap cannot get new info. from the sample
- Why does this work?
	- Bootstrap → CI → estimate parameter value
	- Alternative approach to hypothesis testing we have covered so far