---
{"dg-publish":true,"permalink":"/000-zettlekasten/sta-130-vocabulary/","tags":["sta130flashcards"],"created":"2024-04-21T16:27:23.966-04:00","updated":"2024-04-21T22:03:52.581-04:00"}
---

**Preamble**
Course: #STA130
Date: 2024-04-21

---
# Week 4

Steps for a hypothesis test
?
1. State null hypothesis and alternative hypothesis
2. Calculate test stat based on one observed random sample
3. Simulate samples under null hypothesis and calculate the statistic for the simulated sample. Repeat multiple times (constitutes estimated sampling distribution)
4. Evaluate evidence against null by calculating p-value
5. Make a conclusion based on strength of evidence against $H_{0}$

statistical inference
?
- process of drawing conclusions about a population based on info from a sample
- observe outcomes (data) from sample → determine how likely we are to have certain underlying probability (parameter)

population
?
- **entire group** of individuals about whom we hope to draw conclusions on
- e.g., all possible spins of the Wheel of Destiny

random sample
?
- subset of *population* chosen in such a way that every member has an equal chance of being selected

sampling distribution
?
- probability distribution of a statistic that is obtained through repeated sampling of a specific population
- describes a range of possible outcomes for a statistic (e.g., mean or mode of some variable) of a population

simulation
?
- computer experiments that involve creating data by pseudo-random sampling

simulation statistic
?
- derived from simulated data
- mimicking real world observations

test statistic
?
- number calculated from a statistical test of a hypothesis
- shows how closely observed data matches the *distribution* expected under the null hypothesis of that statistical test
- used to calculate p-value of results → decide whether to reject null hypothesis

p-value
?
- probability of observing a test statistic at least as extreme as the observed value if the null hypothesis is true

Type I error (false positive)
?
- rejecting the null hypothesis when it is actually true
- probability of making a Type I error is denoted by $\alpha$ (significance level of the test)

Type II error (false negative)
?
- failing to reject the null hypothesis when it is false
- probability of making a Type II error is denoted by $\beta$

# Week 9

unsupervised learning
?
- The “machine” (e.g., *k-means algorithm*) *learns* how to group data into clusters even though we did not tell it what the groups should be
- Aim: to *find patterns* or groupings in the data
- E.g., clustering and dimensionality reduction
<!--SR:!2024-04-24,3,250-->

supervised learning
?
- Give the “machine” data with *correct labels*
- It learns how to predict labels for new observations that do not have labels yet
- Goal: Train a model that can make accurate predictions for unseen data
- E.g., classification and regression
<!--SR:!2024-04-24,3,250-->

classification
?
- Type of supervised learning
- The output variable is a *category*
    - e.g., “spam” or “not spam”
- Goal: Accurately assign categories to new observations
<!--SR:!2024-04-24,3,250-->

regression
?
- Type of supervised learning
- Output is a *continuous* value
    - e.g., house prices
- Aim: Predict this value for new observations based on input data
<!--SR:!2024-04-24,3,250-->

prediction
?
- Using a trained model to *estimate the output* for new, unseen data
- e.g.,
    - predicting tomorrow’s weather based on today’s weather conditions
    - predicting which people have trouble sleeping
<!--SR:!2024-04-24,3,250-->

predictors
?
- Input variables in a model
- What we use to predict the output (*dependent* variable)
- e.g, For predicting weather, we have predictors:
    - temperature, average wind speed, humidity
- Term used interchangeably with *covariates*, *independent variables*
<!--SR:!2024-04-24,3,250-->

dependent variables
?
- Output variable that we are trying to predict
    - based on the *predictors*
- e.g., Predicting next day temperature, or next day hot or cold
<!--SR:!2024-04-24,3,250-->

category
?
- A class/label that is the outcome of a classification task
<!--SR:!2024-04-24,3,250-->

tree
?
- Model that represents decisions and decision making
- Used in algorithms (e.g., decision trees for classification and regression)
<!--SR:!2024-04-24,3,250-->

root node
?
- Topmost node in a tree
- Representing the entire dataset
<!--SR:!2024-04-24,3,250-->

terminal node
?
- Nodes at the end of a tree
- Represents a prediction or decision
<!--SR:!2024-04-24,3,250-->

child node
?
- Node that extends from another node
- Root node $\neq$ child node
<!--SR:!2024-04-24,3,250-->

stopping rule
?
- Criteria used to decide when a tree should stop splitting into further nodes
- Prevents trees from growing too complex
- Set a threshold $\beta > 0$
<!--SR:!2024-04-24,3,250-->

threshold
?
- Cutoff value that determines the decision boundary or split in a model
<!--SR:!2024-04-24,3,250-->