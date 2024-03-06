---
{"dg-publish":true,"dg-path":"academia/STA130/W7/Bootstrapping.md","permalink":"/academia/sta-130/w7/bootstrapping/","created":"2024-02-26T14:08:37.921-05:00","updated":"2024-03-01T13:14:26.010-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|7]]
Course: #STA130
Date: 2024-02-26

---
# The core idea

- In the *permutation test*, we assume…
	- the groupings do not matter (under the null)
	- → groups are interchangeable
	- This can be seen as a ==weaker assumption== than many of our previous approaches, since we are not assuming anything about the population or population parameter(s)
- For *parameter estimation*, we only assume…
	- our sample is ==representative== of the full population
		- might seem like a strong assumption, but if our sample is *not* representative, we are in trouble; going to struggle to make valid conclusions about the population parameters
	- How can we be confident our sample is representative?
		- Look at how data was collected
		- **Random sample** is the best approach to ensure representativeness

> [!note] Under this assumption,
> We can generate random samples from the “true population” by randomly sampling *with replacement* from our observed sample
> - This is known as **bootstrapping**

# Population sampling

![|400](https://i.imgur.com/lqx42e8.png)

- Imagine the population as a bag with one ball for each individual
- You get a sample of $n = 10$ by drawing 10 balls from the population/bag and putting them on a table
- If you want to get a second sample from the population, you put all the balls back and repeat.


# Bootstrapping (Bootstrap resampling)

![|400](https://i.imgur.com/LKlfghH.png)


- We do not have access to the full *population*
- Imagine our one sample as a bag with one ball for each individual ($n = 10$)
- To get one bootstrap sample (of size 10):
	- draw one ball from the sample/bag
	- write the colour
	- put it back in the bag
	- repeat until 10 balls have been drawn
	- This is a ==bootstrap sample== of size 10
- If you want to get a second bootstrap sample, repeat procedure

# The Bootstrap Method

- Start with a sample size $n$ with observed test statistic $\hat{\mu}$
- Sample with replacement to draw a **bootstrap sample** of the same size $n$
- Calculate the test statistic for the bootstrap sample, $\hat{\mu}_{\rm{boot}}$
- Repeat last two steps to get an estimate of the **bootstrap sampling distribution**
