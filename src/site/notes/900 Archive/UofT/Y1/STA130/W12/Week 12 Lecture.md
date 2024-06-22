---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w12/week-12-lecture/","created":"2024-04-22T12:23:13.987-07:00","updated":"2024-04-22T15:13:55.857-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|12]]
Course: #STA130
Date: 2024-04-22

---
# Interpreting Complex Models

> [!tldr] Motivation.
> - Adding parameters → can become difficult to *interpret* our model
>     - What do the coefficients/splits mean?
>     - What variables affect my data/predictions *the most* in general?
>     - What matters the most for a specific individual prediction?
> - Often called **feature importances** (in machine learning)
>     - explanatory variables = features
>     - response variables = labels
>     - coefficients/slopes (in regression) = weights

# Example: Bike Rentals

- Context:
    - Daily counts of rented bicycles from the bicycle rental company Capital-Bikeshare in Washington D.C., along with weather and seasonal information from Fanaee-T and Gama (2013)

![](https://i.imgur.com/W8h2VgH.png)

![|500](https://i.imgur.com/CDwTxHP.png)

# Global vs. Local Feature Importances

| Global                                           | Local                                                   |
| ------------------------------------------------ | ------------------------------------------------------- |
| Measure of impact of input across entire dataset | Measure of impact of input for a particular observation |
| ![](https://i.imgur.com/rppXWlA.png)<br>         | ![](https://i.imgur.com/FPgG8lW.png)<br>                |
- Decision tree models
    - This is not *classification*, this is *regression*
    - A classification tree can actually work with regression
    - Can construct splits that try to reduce the regression error (mean square error)
    - At terminal nodes, there is a boxplot → predicting average value, showing dispersion around that value (outliers and scatter)
- Each of these terminal nodes is prediction a value of around 2000, 4000, 4500, 7000 respectively
- We are looking at the scatter around that prediction
- When we are talking about **global importance**, we are looking at ==where exactly are the trees making splits==
    - Based on global, the day is more important than the temperature based on the splits
        - One variable is more important than another
        - Uses `days_since_2011` twice to go to the left
- *Locally*, for one particular object that starts at the root node and goes down to a particular terminal node, the path it takes only uses some of the variables
    - e.g., for the third node at the bottom: it looks at `days_since_2011` and `temp`
    - Both equally important because it uses ==each variable once==


## Global feature (Variable) importance in trees

- Each time a variable is split, we get a decrease in the **total Gini impurity/entropy** (for classification) or change in MSE (for regression)
    - ![](https://i.imgur.com/aBaE2tG.png)
- At the end, we can compute the feature importance:
    - ![](https://i.imgur.com/vpPl3EV.png)
### Example. Bike rentals

![](https://i.imgur.com/mINEo8u.png)
*Importance in percentage.*

![](https://i.imgur.com/IGJnkX5.png)

- Can access (unnormalized) via `tree$variable.importance`

## Local feature (variable) importance in trees

- We do the same calculation, but only over the splits traversed by the particular observation
    - e.g., the path in red:
      ![](https://i.imgur.com/1Jg7OB8.png)
- Difference between local vs. global:
    - We only take the average for that one path rather the whole tree in global
- `rpart` does not compute this directly → would have to implement lots of your own calculations to compute these

> [!question] How should we interpret our global vs. local feature importances for this object?
> - ![](https://i.imgur.com/JPJOtcy.png)
> - The global importance is averaging over all the objects
> - In general, `days_since_2011` gives about 68% prediction power, `temp` ~ 20%
> - In later data, maybe it is more like 50/50 vs. 70/20

# Weights vs. Effects in Linear Models

### Global (weights)
$$y_{i} = \beta_{0} + \sum\limits_{j=1}^{k-1} \beta_{j} x_{i,j} + \epsilon_{i}$$
- We look at the $\beta$’s
- Think of the coefficients as global indicators for what is going on
- How should we interpret our weights?
    - Tells us our one-unit change effect on $y$/output ($\beta$ = slope)
### Local (effects)
$$y_{i} = \beta_{0} + \sum\limits_{j=1}^{k-1} \beta_{j} x_{i,j} + \epsilon_{i} = \beta_{0} + \sum\limits_{j=1}^{k-1} e_{i,j} + \epsilon_{i}$$
- The effect is the product of our coefficient AND our input observation
- How should we interpret our effects?
    - Unitless
    - e.g., The number of bikes that are directly predicted from our observation, The actual number of bikes that the particular variable contributes to our prediction
    - e.g., If there a 1500 bikes, we can say 500 of the bikes are from our model of the temperature, and 1000 bikes are from our model of the overall time dependencei 