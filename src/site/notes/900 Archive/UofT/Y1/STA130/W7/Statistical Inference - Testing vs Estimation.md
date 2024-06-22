---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w7/statistical-inference-testing-vs-estimation/","created":"2024-02-26T10:13:12.962-08:00","updated":"2024-04-21T16:59:31.788-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|7]]
Course: #STA130
Date: 2024-02-26

---
# Populations, Sample, Statistics

- We want to make *inferences* about a *population* using a *random sample*

# Two branches of Statistical Inference

1. Hypothesis test
	- evaluate evidence against a particular value for parameter
2. **Confidence interval**
	- estimate of a parameter
	- gives range of plausible values of parameter

## Hypothesis Testing using numerical simulations

- What can we use to perform a **hypothesis test**
	- **numerical simulations**

## Parameter Estimation

- We want to find out something about a population, like an average height or median salary.
- What is the **true value** of the **parameter**?
	- population value (unknown)
- We cannot actually get the data for everyone/everything in the population → take a **random (representative) sample** from the population → calculate the test statistic for our sample
	- i.e., an **estimate** of the true value

→ However, ==an estimate is just an estimate==
- We will do our best to be in a good position to make a sensible guess, but there is still ***uncertainty***.
	- To try to account for the fact that we are probably wrong but hopefully close to the true value with our estimate, we will put a ***confidence interval*** around our estimate.

# Example. Wheel of Destiny, revisited

## Alternate strategy: parameter estimation

- Use *estimation* (and a *confidence interval*) to determine if it is plausible that the WoD is fair
	- vs. hypothesis test
---
- Population:
	- all possible spins of WoD
- Sample:
	- $n$ spins of the wheel

> [!note]
> → One spin gives us one *estimate* (i.e., test statistic)
> → Many samples (and the estimate from each one) gives us the sampling distribution of this estimator

# Properties of the sampling distribution

![](https://i.imgur.com/NyyRHr2.png)
*$p = 4/8.4 = 0.476$*

As $n$ increases, what happens to the:
- mean of the sampling distribution?
	- → gets closer to the true population value
- spread of the sampling distribution?
	- → gets smaller: more concentrated around mean value
	- All estimates are closer to the true population value, so the spread must be more concentrated around mean value
- shape of the sampling distribution?
	- → more symmetrical
	- When the sample size is small, it is possible that the sampling distribution is skewed
	- As sample size increases, that goes away

> [!note]
> - In the previous example, we *knew* the correct value so we can simulate new random samples.
> - In hypothesis testing, we assume a particular value so we can simulate new random samples *under the null hypothesis*.
> - **In parameter estimation, how can we simulate estimates without assuming something about the population?**

# Example. NYC → SFO 2013 Flight Data

- We want to estimate the mean arrival delay ($\text{actual arrival time} - \text{scheduled arrival time}$) in minutes.

## Population

```r
# Calculate mean delay, median delay, and maximum delay for the population
SF %>% summarise(
	mean_delay = mean(arr_delay),
	median_delay = median(arr_delay),
	max_delay = max(arr_delay))
```

```
# A tibble: 1 × 3
  mean_delay median_delay max_delay
       <dbl>        <dbl>     <dbl>
1       2.67           -8      1007
```

- What is `2.67`?
	- *parameter*
## Random sample

How do we get a random sample of $n = 25$ flights?

```r
# Get one sample of 25 flights from our population
set.seed(987)
sample25 <- SF %>% sample_n(size=25, replace = FALSE)

# Get summary statistics for this sample
sample25 %>% summarise(mean_delay = mean(arr_delay),
                 median_delay = median(arr_delay),
                 max_delay = max(arr_delay))
```

```
# A tibble: 1 × 3
  mean_delay median_delay max_delay
       <dbl>        <dbl>     <dbl>
1        1.8          -10       208
```

![|500](https://i.imgur.com/IZRqu4q.png)

![|500](https://i.imgur.com/aOGccR1.png)

## Sampling distribution

- What is the **sampling distribution**?
	- the set of all possible values that the sample mean $\hat{\mu}$ can take for a random sample of size $n = 25$
- What is the **sampling distribution** of?
	- the **observed test statistic/estimate**

### What does the sample distribution tell us?

- helps us understand the variability/uncertainty in our estimate based on samples of size $n = 25$

> [!danger] Problem:
> - Need to get many samples from the population to estimate this
> - Usually only have one!
> 
> **How do we estimate possible values for the *population mean* with only <u>one</u> random sample?**

Back to [[900 Archive/UofT/Y1/STA130/Week 7 Lecture\|Week 7 Lecture]].