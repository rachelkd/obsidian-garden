---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w8/clustering/","created":"2024-03-04T10:20:24.103-08:00","updated":"2024-04-26T00:16:17.060-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|8]]
Course: #STA130
Date: 2024-03-04

---
# Clustering and Parameter Estimation
## Plausible vs. best
- Up until now, we have tried to answer what answer is the **most plausible**, or choose between two pre-specified options
	- hypothesis testing
		- p-value: probability of being as or more extreme under $H_{0}$, $\alpha$ = probability of Type I error
	- parameter estimation
		- $X$% CI: probability of containing the true value
- Now, we need to decide **what answer is best out of (infinitely?) many possible options**

## Loss functions
- We want to *quantify* how well a given cluster center fits the data
	- → We can *rank* possible solutions and figure out which one is the *best*
- Define a **loss function** to compare our model to the observations
	- i.e., how much info. we are “losing”
	- Info about the **data-generating process** (the **”likelihood”**) → provides insight into how we might define this function
- Solution that minimizes this function can be considered the best fit of the data
	- i.e., best guess for our cluster center

## MSE

![|400](https://i.imgur.com/VvlIEIB.png)


One common loss function is:
- **mean squared error** (MSE)
	- $$MSE = \frac{1}{nm} \sum\limits_{i=1}^{n}\bigg(\sum\limits_{j=1}^{m} (x_{i,j} - x_{j}^{ctr})^{2} \bigg)$$
	-  where $n$ is the number of observations, and $m$ is the number of variables
	- also called the **Euclidean distance**

## MAE
Common *alternative* loss function is:
- **mean absolute error** (MAE)
	- $$MAE = \frac{1}{nm} \sum\limits_{i=1}^{n} \Bigg( \sum\limits_{j=1}^{m} | x_{i,j} - x_{j}^{ctr}| \Bigg)$$
	- where $n$ is the number of observations, and $m$ is the number of variables
	- also called the **Manhattan distance**

## Euclidean vs. Manhatten
- Because of the distance squared in Euclidean distance, it is very sensitive to big distances
	- vs. Manhattan
- Absolute error (Manhattan) is often used when data is dispersed, big spread, has outliers
	- Outliers can really bias your loss because of the squared in Euclidean

1. ![|center|500](https://i.imgur.com/ZaMeQYE.png)
2. ![|center|500](https://i.imgur.com/Sn0Rv3c.png)
3. ![|center|200](https://i.imgur.com/cLxYGZJ.png)

- What loss function would we use for the above images?
	1. MSE
	2. MSE
	3. MAE
		- Anomalies

Back to [[900 Archive/UofT/Y1/STA130/Week 8 Lecture\|Week 8 Lecture]].