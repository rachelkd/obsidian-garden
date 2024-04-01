---
{"dg-publish":true,"dg-path":"academia/STA130/Week 9 Flashcards.md","permalink":"/academia/sta-130/week-9-flashcards/","tags":["#flashcards","#sta130flashcards"],"created":"2024-03-15T14:24:41.853-04:00","updated":"2024-03-15T18:43:53.440-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|9]]
Course: #STA130
Date: 2024-03-15

---
# Definitions (flashcards)

unsupervised learning
?
- The “machine” (e.g., *k-means algorithm*) *learns* how to group data into clusters even though we did not tell it what the groups should be
- Aim: to *find patterns* or groupings in the data
- E.g., clustering and dimensionality reduction

supervised learning
?
- Give the “machine” data with *correct labels*
- It learns how to predict labels for new observations that do not have labels yet
- Goal: Train a model that can make accurate predictions for unseen data
- E.g., classification and regression

classification
?
- Type of supervised learning
- The output variable is a *category*
    - e.g., “spam” or “not spam”
- Goal: Accurately assign categories to new observations

regression
?
- Type of supervised learning
- Output is a *continuous* value
    - e.g., house prices
- Aim: Predict this value for new observations based on input data

prediction
?
- Using a trained model to *estimate the output* for new, unseen data
- e.g.,
    - predicting tomorrow’s weather based on today’s weather conditions
    - predicting which people have trouble sleeping

predictors
?
- Input variables in a model
- What we use to predict the output (*dependent* variable)
- e.g, For predicting weather, we have predictors:
    - temperature, average wind speed, humidity
- Term used interchangeably with *covariates*, *independent variables*

dependent variables
?
- Output variable that we are trying to predict
    - based on the *predictors*
- e.g., Predicting next day temperature, or next day hot or cold

category
?
- A class/label that is the outcome of a classification task

tree
?
- Model that represents decisions and decision making
- Used in algorithms (e.g., decision trees for classification and regression)

root node
?
- Topmost node in a tree
- Representing the entire dataset

terminal node
?
- Nodes at the end of a tree
- Represents a prediction or decision

child node
?
- Node that extends from another node
- Root node $\neq$ child node

stopping rule
?
- Criteria used to decide when a tree should stop splitting into further nodes
- Prevents trees from growing too complex
- Set a threshold $\beta > 0

threshold
?
- Cutoff value that determines the decision boundary or split in a model