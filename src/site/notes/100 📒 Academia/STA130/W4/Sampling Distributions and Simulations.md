---
{"dg-publish":true,"dg-path":"academia/STA130/W4/Sampling Distributions and Simulations.md","permalink":"/academia/sta-130/w4/sampling-distributions-and-simulations/","created":"2024-01-29T14:22:32.646-05:00","updated":"2024-02-01T14:34:30.876-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|4]]
Course: #STA130
Date: 2024-01-29

---
# Sampling Distributions

- Assuming that:
	- null hypothesis is true, and
	- we obtain a given **sample** of data
- Want to know:
	- How likely are we to observe a test statistic *as or more extreme* than the one we see in real data
	- i.e., How unusual would it be to observe our own test statistic ($\hat{f} = \frac{3}{10}$) or something even more extreme if $H_{0} : f = 0.5$ was true
	- → Need to estimate the sampling distribution to answer this question

### Sampling Distribution for 10 Fair Spins
![4_distribution_10_fair.png](/img/user/Files/STA130/4_distribution_10_fair.png)
*This is under the assumption that the probability is 0.5.*

### Sampling Distrbution for 10 Unfair Spins
![4_distribution_10_unfair.png](/img/user/Files/STA130/4_distribution_10_unfair.png)
*Under a different null, we would get different sampling distributions.*

# Exploring Sampling Distributions via Simulations

We can use **numerical simulations** to estimate sampling distributions:
1. *Assume* a particular value for the underlying probability and/or population
	- i.e., null hypothesis
2. *Simulate* a hypothetical sample of data
	- real data $D$ vs. simulated data $D_{sim}$
3. Compute the **test statistic** from this hypothetical simulated dataset ($\hat{p}_{sim}$)
4. Repeat many times to build up an estimate of the **sampling distribution of $\hat{p}$**


### Simulating Coin Flips in R #example

```r
coin <- c("heads", "tails")  # Define a vector of length 2 with the 2 options
flips <- sample(coin,  # Choices to sample from
				size = 50,  # Want 50 flips
				prob = c(0.5, 0.5),  # Want probability to be 50/50
				replace = TRUE)
flips
```

```
 [1] "heads" "heads" "heads" "heads" "tails" "tails" "heads" "tails" "heads" "heads"
[11] "heads" "heads" "heads" "tails" "tails" "tails" "heads" "tails" "tails" "heads"
[21] "tails" "heads" "tails" "tails" "heads" "heads" "heads" "tails" "heads" "heads"
[31] "tails" "tails" "heads" "tails" "heads" "tails" "heads" "heads" "tails" "heads"
[41] "heads" "tails" "tails" "heads" "tails" "heads" "heads" "heads" "tails" "heads"
```

- `coin` is a vector of length 2
- `coin` argument in `sample` are choices to sample from
- `size` indicates how many flips
- `replace` must be true when simulating data to ensure accurate results
	- have to put the “drawn” value back into the “bag” to ensure that 50 samples can be executed

```r
num_trials <- 1000  # Number of sim. values (i.e., num. students flipping 10 coins each)
n <- 10  # Sample size (i.e., 10 flips for each trial)
simulated_proportion_heads <- rep(NA, times=num_trials)  # NA to store the sim. values

set.seed(130)  # Random seem for reproducibility (outside for loop)

for(i in 1:num_trials) {
	one_sample <- sample(c("Heads", "Tails"),
						size = n,
						p = c(0.5, 0.5),  # (f, 1 - f)
						replace = TRUE)
	simulated_proportion_heads[i] <- sum(one_sample == "Heads") / n  # calculate proportion of heads in 10 flips
}
```

## Review: Variable Types in R

[[100 📒 Academia/STA130/W4/Variable Types in R\|Variable Types in R]]

## R Concept: Vectors

[[100 📒 Academia/STA130/W4/R Vectors\|R Vectors]]

## Coercion

[[100 📒 Academia/STA130/W4/Coercion\|Coercion]]

## Randomness in Programming

[[100 📒 Academia/STA130/W4/Randomness in Programming\|Randomness in Programming]]


Back to [[100 📒 Academia/STA130/Week 4 Lecture\|Week 4 Lecture]].
