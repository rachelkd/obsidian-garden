---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w4/populations-samples-and-hypotheses/","created":"2024-01-29T10:55:03.356-08:00","updated":"2024-02-05T23:02:44.931-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|4]]
Course: #STA130
Date: 2024-01-29

---
# Probability vs. Inference

- **probability**
	- know how often something happens (parameters)
	- want to determine how likely I am to get certain outcomes (data)
- **inference**
	- observe outcomes (data)
	- want to determine how likely I am to have certain underlying probability (parameters)
	- the process of drawing conclusions about a population based on information from a sample

# Populations and Sampling

In statistics,
- often try to make conclusions about a **population** using data from a **random sample**
	- population is very large or infinitely large → cannot observe the whole population → we observe a sample to make conclusions about the whole population instead
- conclusions will be uncertain
	- b/c of **limited size of the random sample**, AND
	- how we choose our sample affects certainty
		- Best practice: **random sample**, representative of the population
	- can try to *estimate this uncertainty*

<br>

- All of statistics is based on the fundamental assumption that the sample you are working with is representative of the population

![4_populations_inference.png|center|400](/img/user/900%20Archive/UofT/Y1/Files/STA130/4_populations_inference.png)

# Sample and Test Statistics

- **sample**
	- set of observed spins
- **sample size**
	- number of spins ($n$)
- **test statistic**
	- number calculated from a statistical test of a hypothesis
		- shows how closely your observed data matches the *distribution* expected under null hyp.
		- used to calculate the p-value of your results
	- e.g., observed proportion of reds
		- $\hat{f} = \frac{k}{n}$
- **population**
	- the entire group of individuals about whom we hope to draw conclusions on
		- e.g., all possible spins (infinite size)
- **parameter**
	- a fixed, usually unknown number that describes a characteristic of the population
		- e.g., probability of getting red ($f$), average height of all adults in a country
- **random sample**
	- a subset of the population chosen in such a way that every member has an equal chance of being selected
- **sampling distribution**
	- a probability distribution of a statistic that is obtained through repeated sampling of a specific population
		- describes a range of possible outcomes for a statistic (e.g., mean, mode of some variable of a population)
		- tells us how the statistic would vary from one sample to another
	- crucial because it ==forms the basis for estimating the variability of statistics and conducting hypothesis testing==
- **simulation**
	- computer experiments that involve creating data by pseudo-random sampling
	- models complex systems or processes when analytical solutions are difficult or impossible
- **simulation statistic**
	- derived from simulated data, mimicking real-world observations (expected characteristics/parameters)
	- used to understand the behaviour of a statistic without the need for actual data collection

# Forming Hypotheses

- **null** ($H_{0}$)
	- wheel is fair ($f =  0.5$)
	- Think of the null as the thing that is easier to describe: it can be one thing ($f = 0.5$)
- **alternative** ($H_{1}$)
	- wheel is not fair ($f \neq 0.5$)
- Note: Hypotheses are almost always based on the population parameter, not the test statistic!
	- i.e., in terms of $f$, NOT $\hat{f}$

Back to [[900 Archive/UofT/Y1/STA130/Week 4 Lecture\|Week 4 Lecture]].