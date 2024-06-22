---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/week-4-lecture/","created":"2024-01-29T10:20:59.753-08:00","updated":"2024-02-01T11:34:25.031-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|4]]
Course: #STA130
Date: 2024-01-29

---
# Testing the Fairness of Wheel of Destiny

- What can Stella do to test her new spinner?
	- Spin it 1000 times → proportion of reds/whites should be close to 50%
	- Spin 1000 times → get proportion of reds
		- Repeat this 5 times → if all between 48% - 52% $\implies$ okay
		- Note: we could get values < 48% or > 52% by chance alone if you run the trial enough times

# Populations, Samples, and Hypotheses

See [[900 Archive/UofT/Y1/STA130/W4/Populations, Samples, and Hypotheses\|Populations, Samples, and Hypotheses]].

## Forming Hypothesis: WoD example

- Which one makes more sense to test if the WoD is fair?
  $$\begin{align*} H_{0}: f = 0.5 && H_{1} : f > 0.5 \tag 1 \\ H_{0} : f = 0.5 && H_{1} : f \neq 0.5 \tag 2 \end{align*}$$
	- The second
	- Recall that f-hats are observed values ([[900 Archive/UofT/Y1/STA130/W4/Populations, Samples, and Hypotheses#Forming Hypotheses\|from here]]):
		- Does not make sense to test hypotheses around them; we know what the values are — we just calculated them
		- We are interested in making conclusions about the population parameters $f$ that are unknown

# Technical Recap of Proposed Procedure

1. Define **sample** and calculate our **test statistic**
	- sample
		- $n$ total spins of the WoD ($n = 10$ here)
	- test statistic
		- proportion of reds in our sample (e.g., $\hat{f}_{red} = 0.3 = \frac{3}{10}$)
2. Define **population** and **parameter** we are interested in studying and the **claim** we want to test against (i.e., the **null hypothesis** and the **alternative hypothesis**)
	- population
		- all possible spins of the WoD
	- parameter
		- true probability of getting red (unknown in the real world)
	- null hypothesis
		- wheel is fair ($f = 0.5$)
	- alternative hypothesis
		- wheel is not fair ($f \neq  0.5$)
3. Simulate the **sampling distribution** of our statistic *under the null hypothesis*
	- i.e., assuming the probability of getting heads/tails is 0.5
	- When we spun the WoD 10 times and got 3 reds and 7 whites, we knew we would not always get that answer. Is $\frac{3}{10}$ normal or unexpected?
	- Strategy: figure out what the range of normal for a fair spinner is
		- Then, we can compare our $\frac{3}{10}$ value to the distribution of values we could get from a fair spinner to determine if it is strange or not.

…then later, we will talk about

4. Evaluate the **strength of the evidence** against the null hypothesis
5. Draw a **conclusion** and interpret in the context of the problem
# Sampling Distributions and Simulations

See [[900 Archive/UofT/Y1/STA130/W4/Sampling Distributions and Simulations\|Sampling Distributions and Simulations]].

# Hypothesis Testing and p-values

[[900 Archive/UofT/Y1/STA130/W4/Hypothesis Testing and p-values\|Hypothesis Testing and p-values]] 

