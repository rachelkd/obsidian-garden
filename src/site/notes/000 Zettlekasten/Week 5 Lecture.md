---
{"dg-publish":true,"permalink":"/000-zettlekasten/week-5-lecture/","created":"2024-02-05T13:30:37.722-05:00","updated":"2024-02-05T23:15:09.793-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|5]]
Course: #STA130
Date: 2024-02-05

---
# Midterm information

- First page presents background and context for a dataset, variables, variable definitions
	- Many questions will be related to the questions
	- Background will be shared before midterm to get familiar
- Answers will involve interpreting code and output related to these data.
	- Will NOT be expected to write large chunks of code.
- 5 questions for 50 points

[Midterm Study Materials](https://q.utoronto.ca/courses/341136/pages/midterm)
- Format similar to ones from 2018/2019

# Review: Hypothesis testing

Recall [[100 📒 Academia/STA130/Hypothesis Testing and p-values\|Hypothesis Testing and p-values]].

- Stella did not know if the Wheel of Destiny is fair
	- Decided to spin the spinner 50 times, got red 32 times (64%)
		- “Is this normal for a fair spinner, or is this evidence that my spinner is unfair?”
- Stella simulated 50 outcomes of a fair spinner and calculated the proportion of “red”
- Repeated this many times to get the **estimated sampling distribution** of the proportion of red outcomes in 50 spins of a fair spinner
	- → knows what kind of outcomes are typical of a *fair* spinner
- Among all simulated proportions of red calculated from 50 spins of the fair spinner (all values in estimated distribution), only 6.5% were farther from $p_{red} = 0.5$ than Stella’s observed value
	- p-value is 0.065 → if the spinner was fair, there is a 6.5% chance getting a test statistic of 64%
	- → This provides weak evidence against the null hypothesis (WoD is fair)

#### From p-value to Hypothesis Test
- What *decision* should we make based on our observed p-value?
	- We need to *specify* a **rejection (decision) rule**
		- tells us when to reject null in favour of the alternative
	- Most common rule is to reject if $p \leq a$ (alpha level)
		- controls the max. positive rate ($a$) assuming the null hypothesis is true

#### Type I and Type II Errors

![|500](https://i.imgur.com/ES1mvJ0.png)

#### Hypothesis Testing Procedure

1. Define our **sample** and calculate our **test statistic** (based on the sample)
	- Test statistic is a best guess of the population parameter
2. Define **population** and **parameter** we are interested in studying and the **claims** we want to test against
	- i.e., the null hypothesis and the alternative hypothesis (in terms of the population parameter (unknown))
3.  *Simulate* the **sampling distribution** of our statistic under the null hypothesis
4. *Evaluate* the **strength of the evidence** against the null hypothesis
5. *Draw* a **conclusion** and interpret it in the context of the problem

In general, it is more conservative to do a two sided test. One sided test implies “I know it’s impossible to get a value in the other direction.”
- e.g., testing if a drug is better than the control: if it is worse, then you do not care – only care about one direction


# Working with Numeric (Continuous) Simulations

[[000 Zettlekasten/Working with Numeric (Continuous) Simulations\|Working with Numeric (Continuous) Simulations]]

# Confounding variables

[[000 Zettlekasten/Confounding Variables\|Confounding Variables]]

# Correlation vs. Causation

[[000 Zettlekasten/Correlation vs. Causation\|Correlation vs. Causation]]
