---
{"dg-publish":true,"permalink":"/900-archive/y2-fall-24/sta-237/03-discrete-random-variables/hypergeometric-distribution/","tags":["lecture","note","stats","university"],"created":"2024-10-09T20:59:37.321-07:00","updated":"2025-02-06T14:51:39.841-08:00"}
---


# Hypergeometric Distribution

> Counting the number of successes when sampling without replacement from a finite population

### Example. Capture Recapture

- We are trying to study an extremely endangered species
- 10 living members of this species left
- 5 animals (50%) are sampled, marked, then released back into the wild
- A secondary sample is performed
    - Assume no animals left the study
- 4 animals were sampled in this secondary sample, some who are marked and some who are not

We want to model the number of marked animals (out of 4) in the second sample

- ? What is the probability that 3 out of these 4 are marked?
    - Let $X$ be the number of marked animals in our sample
    - $$P(X = 3) = \frac{{\binom{5}{3} \binom{5}{1}}}{\binom{10}{4}}$$
        - “Choose 3 marked animals out of 5 in total”
        - “Choose 1 unmarked animal out of the 5 in total”
        - “Choose any 4 animals out of the 10 in total”
    - `choose(5, 3) * choose(5, 1) / choose(10, 4)` returns `0.2380952`

## Definitions

> [!def]- Hypergeometric Experiment
>
> - Samples $n$ individuals/objects from a set/population of $N$ individuals/objects where:
>     - $N$ is **finite**
>     - Each individual/object can be categorized as “success = 1” or “failure = 0”
>     - Total of $r$ successes in the population and $N - r$ failures in the population
>     - Sample is done **[[900 Archive/Y2 Fall 24/STA237/03 Discrete Random Variables/Sampling With Vs Without Replacement\|without replacement]]**
>     - Each subset of size $n$ *[[900 Archive/Y2 Fall 24/STA237/01 Events and Probabilities/Equally Likely Outcomes\|equally likely]]* to be chosen

> [!def]- Hypergeometric Distribution
>
> - Random variable $X$ has the geometric distribution with parameters $r, N, n$ if $$P(X = k) = \frac{{\binom{r}{k} \binom{N-r}{n-k}}}{\binom{N}{n}}$$
> - for $\text{max}\big(0, n - (N - r)\big) \leq k \leq \text{min}(n, r)$,
>     - $k$ can’t be negative (hence the 0)
>     - Can’t be less than $n - (N - r)$, which represents the case where all remaining successes must be in the sample
>     - $k$ can’t exceed $n$ (the sample size)
>     - $k$ also can’t exceed $r$ (the total number of successes in the population)
> - or, alternatively, $0 \leq k \leq r$ and $0 \leq n - k \leq N - r$
>     - i.e., You can’t have more successes in your sample than how many are in the population, and same with failures

> [!note]+ Notation: $X \sim \text{HyperGeo}(r, N, n)$
>
> - $r$: # successes in the *population*
> - $N$: population size
> - $n$: # units picked without replacement

# Formulas If $X \sim \text{HyperGeo}(r, N, n)$

## Expected Value and Variance

- $$E[X] = \frac{nr}{N}$$
- $$\text{Var}[X] = n \left(\frac{N-n}{N-1}\right) \left(\frac{r}{N}\right)\left(1 - \frac{r}{N}\right)$$

- MGF, CDF formulas are complicated

## R Functions for Hypergeometric Distribution

1. Probability Mass Function (PMF):
    - $P(X = x) =$ `dhyper(x, r, N-r, n)`
    - Example: `dhyper(3, 5, 5, 4)` returns `0.2380952`
2. Cumulative Distribution Function (CDF):
    - $P(X \leq x) = \text{phyper}(x, r, N-r, n)$
3. Generate $k$ independent observations of $X$:
    - `rhyper(k, r, N-r, n)`
4. Inverse CDF/Quantile Function:
    - To find the quantile $x$ such that $F(x) = p$:
    - `qhyper(p, r, N-r, n)`

> [!note]+ R Function Parameter Order
> The R functions use the parameter order $(r, N-r, n)$ where:
>
> - $r$: number of successes in the population
> - $N-r$: number of failures in the population
> - $n$: sample size

# Hypergeometric vs. Binomial

- Expectation of Binomial distribution and Hypergeometric distribution are very similar:
    - $\frac{r}{N}$ is the proportion of individuals in the finite population that are “success”
    - $p$ is the probability of picking a “success” from an infinite population or with replacement
    - $\implies \frac{nr}{N}$ is similar to $np = E[X]$ if $X$ is binomial
- Similarly, for the variance:
    - $n \left(\frac{N-n}{N-1}\right) \underbrace{\left(\frac{r}{N}\right)}_{p}\left(1 - \underbrace{\frac{r}{N}}_{p}\right)$
    - Similar to $np(1-p) = V[X]$ if $X \sim \text{Binom}(n, p)$, but with additional $\left( \frac{{N-n}}{N-1} \right)$ term
        - Additional term is called the *finite population correction*
- As $N \to \infty$ and $\frac{r}{N} \to p$, the limiting distribution of the hypergeometric distribution is the binomial distribution with parameters $n$ and $p$

# Example: Emergency Room Visits

![|600](https://i.imgur.com/jeNOe8k.png)

Calculate the exact probability that 16 of the 30 individuals at the shelter have been to the ER in the past year.

- $N = 11000$
- $r = 11000 \cdot 0.55 = 6050$
    - Success = Someone who has been to the ER in the past year
- $n = 30$

<!-- break -->
- If $X$ is the number of people out of the 30 that have been to the ER in the past year:
    - $X \sim \text{HyperGeo}(6050, 11000, 30)$
    - $$P(X = 16) = \frac{\binom{6050}{16}\binom{4950}{14}}{\binom{11000}{30}}$$
    - $P(X = 16) =$ `dhyper(16, 6050, 4950, 30)` returns `0.1425566`
    - `choose(6050, 16) * choose(4950, 14) / choose(11000, 30)` returns `0.1425566`

## Using the Binomial Distribution to Approximate $P(X = 16)$

- & If $N$ is large (esp. relative to $n$), we can use the binomial distribution to approximate the hypergeometric distribution

<!-- break -->
- $n = 30$
    - The # people sampled
- $p = \frac{r}{N} = 0.55$
    - Proportion of successes
- If $X$ is the number of people out of 30 that have been to the ER in the past year, then we can approximately say $X \sim \text{Binom}(30, 0.55)$
    - $P(X=16) =$
        - `dbinom(16, 30, 0.55)` → `0.1423673`
        - `choose(30, 16) * (0.55^16) * (0.45^14)`
