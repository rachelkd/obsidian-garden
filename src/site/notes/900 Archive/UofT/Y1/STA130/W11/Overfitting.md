---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w11/overfitting/","created":"2024-04-01T11:12:41.982-07:00","updated":"2024-04-01T11:53:05.425-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|11]]
Course: #STA130
Date: 2024-04-01

---

- If we add too many parameters into the model, we start to “fit” random noise
- This **overfitting** means that our predictions to new data will eventually get *worse* as we add more parameters, rather than better

> [!question] Why is overfitting a problem?
> - We want our prediction model to properly learn from patterns in our data to make predictions for *new, unseen* observations

# Solution to overfitting

- Save some data for later; for testing
- Split data into three groups:
    - **Training data** used to *fit* our model (coefficients)
    - **Validation data** used to *select* the best model
    - **Test data** used to *evaluate* the performance of our final data

![](https://i.imgur.com/KvzqVaL.png)

# Example of overfitting using training set and test set

![](https://i.imgur.com/jZrMCGA.png)

- On the testing set, the green does better → orange may be overfit
- The ratio between the training and testing results is much higher for the orange
    - Orange: $2:3.9$ → almost a factor of 2
    - Green: $3:3.6$ → overfit a little bit, but that is normal
    - Orange does so much worse on the testing data → skeptical about how good it is

# R code to create training and testing dataset

```r
library(tidyverse)
heights <- read.csv("heights.csv")

set.seed(130);

# Pick 80% of observations to go into the training dataset
train <- sample_n(heights, size = round(0.8*n))

# Take all of the observations from heights that ARE NOT in train
# and put them in test
test <- anti_join(heights, train)
```

# R code to make predictions using a fitted regression model

```r
# Build model using the training data only
model <- lm(height ~ shoePrint, data = train)
# Make predictions for test data using the training model
yhat_test <- predict(model, newdata = test)
yhat_test
```

![](https://i.imgur.com/zSTQpOZ.png)

```r
y_test <- test$height

# Calculate RMSE for predictions in the test dataset
RMSE <- sqrt( sum( (y_test - yhat_test)^2 ) / nrow(test) )
```

---
Back to [[900 Archive/UofT/Y1/STA130/Week 11 Lecture\|Week 11 Lecture]].