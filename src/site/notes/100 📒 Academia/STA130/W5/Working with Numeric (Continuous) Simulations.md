---
{"dg-publish":true,"dg-path":"academia/STA130/W5/Working with Numeric (Continuous) Simulations.md","permalink":"/academia/sta-130/w5/working-with-numeric-continuous-simulations/","created":"2024-02-05T14:17:29.204-05:00","updated":"2024-02-05T23:04:40.059-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|5]]
Course: #STA130
Date: 2024-02-05

---

In the past, we simulated categorical variables:
- coin flips, spinner results, regular Instagram usage, etc.

###### What if we want a number? 
- `rnorm()`

```r
# simulate 1000 SAT scores
simulated_scores <-
	rnorm(n=1000, mean=1150, sd=150)

# compute test statistic (sample mean)
sample_mean <- mean(simulated_scores)
```

![](https://i.imgur.com/EQfOOBd.png)

# One vs Two-Sample Hypothesis Test

- **one-sample test** (WoD is fair)
	- $H_{0} : f = 0.5$ vs. $H_{1} : f \neq 0.5$
- **two-sample test** (new wheel is the same as the old wheel)
	- $H_{0} : f_{new} = f_{old}$ vs $H_{1} = f_{new} \neq f_{old}$
	- $H_{0} : f_{new} - f_{old} = 0$ vs. $H_{1}: f_{new} - f_{old} \neq 0$

# Two-Sample Hypothesis Test Procedure

Very similar to a one-sample hypothesis test:
1. Define our **sample** and calculate our test statistic
2. Define population and parameter we are interested in studying and the claims we want to test against (i.e. the null hypothesis and the alternative hypothesis)
3. ==Simulate the sampling distribution of our statistic under the null hypothesis==
4. Evaluate the strength of the evidence against the null hypothesis
5. Draw a conclusion and interpret it in the context of the problem

### Example: Treating Depression with Dolphins

![](https://i.imgur.com/MTV7gKI.jpg)

![|340](https://i.imgur.com/9owUCjb.png) ![|340](https://i.imgur.com/sp3tux6.png)

### 1. Define sample and compute test statistic

- **sample**:
	- 15 control vs. 15 with dolphins
- **test statistic**:
	- difference in mean scores:
	- $$\begin{align*} TS &= \hat{\mu}_{dolphin} - \hat{\mu}_{control}\\ &= 4.18 - (-1.78)\\ &= 5.96 \end{align*}$$
#### How to calculate test statistic in R? 

```r
mean_obs <- 
  dolphins %>%
  group_by(group) %>%
  summarise(means = mean(score))

mean_obs
```

```
# A tibble: 2 × 2
  group    means
  <chr>    <dbl>
1 control  -1.78
2 dolphins  4.18
```

```r
delta_mean_obs <- 
  dolphins %>%
  group_by(group) %>%
  summarise(means = mean(score), .groups="drop") %>%
  summarise(value = diff(means)) %>%
  as.numeric()

delta_mean_obs
```

```
[1] 5.96
```

### 2. Define populations and hypotheses

- **populations**:
	- all adults 18-65 with mid/moderate depression who either swim or do not swim with dolphins
- **parameters**:
	- mean scores within each group
- **hypotheses**:
	- $$\begin{align*} H_{0} : \mu_{dolphin} - \mu_{control} &= 0 \\ H_{1} : \mu_{dolphin} - \mu_{control} &\neq 0 \end{align*}$$

### 3. Simulate the Sampling Distribution

- What is our null hypothesis?
	- $H_{0} : \mu_{dolphin} - \mu_{control} = 0$

###### Reframing our initial question:

- If the null hypothesis is true, what is the relationship between the groupings (i.e., dolphin vs. control) and the outcome (i.e., mean improvement score)
	- All should behave the same (no difference)
	- ==Under the null, the groups are arbitrary and do not affect our result in any way==

#### Permutation Test

- If two populations are the same, we can mix and match:
	- Pretend to shuffle the assignment of participants to groups

<br>

- e.g., Take 5 orange cards (control group) and 3 blue cards (dolphin group)
	1. Shuffle the cards
	2. Put one card with each number
	3. Calculate mean for each new “group” and get the difference. This is our simulated test statistic under the null hypothesis
	- ![5_permutation_test.png](/img/user/Files/STA130/5_permutation_test.png)

#### Simulating “Shuffling” in R

- `sample()` function can also be used to shuffle/reorder labels
	- equiv. to reassigning groups

```r
a_vector <- c(1,1,1,2,2)
a_vector
```

```
## [1] 1 1 1 2 2
```

```r
sample(a_vector,  # Choices to sample from
	replace = FALSE)
```

```
## [1] 2 1 2 1 1
```

#### Example. Simulating “shuffling” in R. #example 

```r
data_n7 %>% select(group, score)
```
*A subset of 7 observations.*

```r
data_n7 %>% select(group, score) %>%
	mutate(group=sample(group))
```
*One possible grouping under $H_{0}$.*

```r
# simulation info
num_trials <- 1000  # number of simulated values

# random seed
set.seed(130)

# simulate!
delta_mean_simulations <- rep(NA, num_trials)
for(i in 1:num_trials) {
  # perform a random permutation
  simdata <- 
    dolphins %>% 
    mutate(group = sample(group, replace=FALSE))
  # compute the simulated test statistic
  delta_mean_sim <- 
    simdata %>% 
    group_by(group) %>%
    summarise(means = mean(score), .groups="drop") %>%
    summarise(value = diff(means)) %>%
    as.numeric()
  # store the simulated value
  delta_mean_simulations[i] <- delta_mean_sim
}
```

- `delta_mean_simulations`
	- $\hat\mu_{dolphin} - \hat\mu_{control}$
- 
  ```r
  simdata <-
      dolphins %>%
      mutate(group = sample(group, replace=FALSE))
  ```
	- shuffles group labels

##### Plotting our vector, `delta_mean_simulations`

```r
# save output to a new tibble
simulation_results <- tibble(mean_diff = delta_mean_simulations)

# plot results
simulation_results %>%
  ggplot(aes(x = mean_diff)) +
  geom_histogram(bins=30, color="black", fill="gray") +
  labs(x = "Differences in Dolphin vs Control from Random Permutations")
```

![5_sim_histogram.png|center|500](/img/user/Files/STA130/5_sim_histogram.png)

### 4. Compute the p-value

![5_sim_pval.png|center|500](/img/user/Files/STA130/5_sim_pval.png)

```r
# calculate 2-sided p-value
delta_mean_null <- 0  # null hypothesis value

pvalue_2side <- 
  sum(abs(delta_mean_simulations - delta_mean_null) >= 
      abs(delta_mean_obs - delta_mean_null)) / num_trials

print(pvalue_2side)
```

- We get $p = 0.02$
	- ![|center|500](https://i.imgur.com/6Ql5T1l.png)

### 5. Make a decision and interpret

- Given an alpha-level $a = 0.05$ decided upon in advance, would we reject the null in favour of the alternative?
	- Yes, we would reject the null in favour of the alt.
	- $p = 0.02 \leq 0.05 = a$

- What can we conclude?
	- There is a “significant difference” in the improvement in depression scores after two weeks for people who swim with dolphins compared to those who do not.

- What can’t we conclude?
	- We don’t know direction because test was 2-sided
	- We don’t know potential magnitude of effect (yet)

# Could we use other test statistics?

- Yes; what else could we have compared?
	- Medians of the two groups
	- Proportion of people who improved in the two groups
- → Hypothesis testing procedure is the same
- What are the differences?
	- How we state null and alternative hyp.
	- Test statistic we calculate from our real observed data
	- Simulated test statistic we calculate for each shuffled grouping we get under the null hyp.

# How should we interpret our decision

![|center|400](https://i.imgur.com/qKch1lO.png)


- If we reject, the fraction of times we have a Type I error is **at worst $a$** (known)
- If we do not reject, the fraction of times we have a Type II error is **at worst $\beta$** (unknown)

> [!note] 
> **Do not know if we are “right” or “wrong” at any time** — just how often we should be correct



Back to [[100 📒 Academia/STA130/Week 5 Lecture\|Week 5 Lecture]].