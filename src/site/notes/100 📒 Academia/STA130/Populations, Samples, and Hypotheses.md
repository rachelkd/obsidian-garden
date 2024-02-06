---
{"dg-publish":true,"dg-path":"academia/STA130/Populations, Samples, and Hypotheses.md","permalink":"/academia/sta-130/populations-samples-and-hypotheses/","created":"2024-01-29T13:55:03.356-05:00","updated":"2024-02-01T14:34:30.873-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|4]]
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

![4_populations_inference.png|center|400](/img/user/Files/STA130/4_populations_inference.png)

# Sample and Test Statistics

- **sample**
	- set of observed spins
- **sample size**
	- number of spins ($n$)
- **test statistic**
	- Observed proportion of reds
	- $\hat{f} = \frac{k}{n}$
- **population**
	- all possible spins (infinite size)
- **parameter**
	- probability of getting red ($f$)

# Forming Hypotheses

- **null** ($H_{0}$)
	- wheel is fair ($f =  0.5$)
	- Think of the null as the thing that is easier to describe: it can be one thing ($f = 0.5$)
- **alternative** ($H_{1}$)
	- wheel is not fair ($f \neq 0.5$)
- Note: Hypotheses are almost always based on the population parameter, not the test statistic!
	- i.e., in terms of $f$, NOT $\hat{f}$

Back to [[100 📒 Academia/STA130/Week 4 Lecture\|Week 4 Lecture]].