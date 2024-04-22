---
{"dg-publish":true,"dg-path":"academia/STA130/W8/How Many Clusters Is Enough.md","permalink":"/academia/sta-130/w8/how-many-clusters-is-enough/","created":"2024-03-04T14:33:42.410-05:00","updated":"2024-04-21T21:24:18.980-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|8]]
Course: #STA130
Date: 2024-03-04

---
##### Back to our example: NYC → SFO 2013 Flights

```r
# run k-means on the data
k <- 5  # our guess for the number of clusters
clustering <- kmeans(SF$dep_time_min, k)
clustering
```

```
...
Within cluster sum of squares by cluster:
[1]  9925182  6548974 11250491  6966745  4195304
 (between_SS / total_SS =  96.3 %)
```
*Another output of `kmeans`.*

- This metric `(between_SS / total_SS =  96.3 %)` tells us how “good” of a job our clusters are doing at capturing the variability in the data

###### What does this mean?
![|500](https://i.imgur.com/PKscpTR.png)
*Red **X** marks the center of the cluster.*

1. We find the sum of squares total.
    - **”One cluster” baseline**
    - $$SS_{Total} = \sum\limits_{i=1}^{n} \Bigg( \sum\limits_{j=1}^{m} (x_{i, j} - x_{j}^{\text{mean}})^{2} \Bigg)$$
    - i.e., [[100 📒 Academia/STA130/W8/Clustering#Loss functions\|MSE]] without the mean
2. We find the sum of squares for each cluster.
    - **Performance of each cluster $C$**
    - $$SS_{C} = \sum\limits_{x \in C} \Bigg( \sum\limits_{j=1}^{m} (x_{i,j} - x_{j}^{\text{ctr}})^{2} \Bigg)$$
Then, the remaining **room for improvement** is
$$SS_\text{Between} = SS_\text{Total} - \sum\limits_{C=1}^{k} SS_C$$

> [!important] If our clusters are perfect, then $SS_\text{between}$ should be similar to $SS_\text{total}$.


---
# “Elbow” approach

As we add more clusters, we expect to do better: 
- We are breaking the data into smaller parts, so we are going to get a smaller cluster sum of squares ($SS_C$)
- BUT, the rate at which $SS_C$ gets smaller should change

<br>

> [!important] Intuition.
> As you get more clusters that are not associated with some real structure, they will become disjointed. If they are disjointed, then the improvement will be smaller than if they are *real* clusters.



- We look for the *elbow* in the curve, where
    - Adding in additional clusters does not improve the results over what we would expect from random splits

```r
explained_ss <- rep(NA, 20)
for(k in 1:20){
  # run k-means on the data
  clustering <- kmeans(SF$dep_time_min, k)
  explained_ss[k] <- clustering$betweenss / clustering$totss
}

# Plot evolution of metric as a function of k
ggplot() + 
  aes(x=1:20, y=1-explained_ss) +
  geom_line() + 
  geom_point() +
  labs(x="Number of Clusters", 
       y="Remaining Variation",
       title="K-Means Clustering Performance") +
  theme(text=element_text(size=18))
```

![|400](https://i.imgur.com/yNqWqGd.png)
*The optimal number of clusters is around 3-4 according to the elbow.*

# Other approaches

Other more rigorous approaches rely on computing estimates of how “*compact*” clusters are as well as how much *improvement* we would expect to see if we added in clusters at random.
- Examples include:
    - The Gap Statistic
    - The Silhouette Score
    - Calinski-Harabasz Index
-  <u>Note:</u> Not required to know how to do these

<br>

- Another method:
    - Direct simulation by repeatedly computing K clusters based on random cluster centers
    - i.e., Running `kmeans` over random datasets with no clusters and comparing its behaviour with your results
        - If the cluster is doing better than random, then it is probably real
        - If the cluster is doing the same as random, then it is probably not real

![|500](https://i.imgur.com/rF6NnnN.png)
*This approach suggests that 2 clusters is optimal, since with 3+, you are no better than random.*

---
# Interpretation

- These methods are just a rule of thumb
    - Not perfect
- As a statistician, you will need to consult with *domain experts* in order to assess what might or might not make sense
- Experts can bring more outside knowledge to better understand why certain clusters might or might not exist, and the properties they might have
    - e.g., An aviation transportation expert could likely use their knowledge of how airports work and the specific NYC → SFO route to understand why flights might have been be scheduled to leave at certain times back in 2013

## Recall: Initial motivation

![|500](https://i.imgur.com/q8FUNPa.png)
*Three clusters.*


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/academia/sta-130/week-8-lecture/#42bec5" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">

<div class="markdown-embed-title">

# Week 8 Lecture

</div>


> [!important] We want to discover these groups
> - e.g., Marketing: companies want to identify various consumer “archetypes” based on general behaviour to sell these groups ads

</div></div>


- For each cluster, someone had to go in and interpret this data
    - e.g., The green cluster are people who are really sensitive to prices, etc.

# Clustering and Hypothesis Testing

> [!question] Can we run hypothesis tests on our clusters to see if they are “real?”

We have two clusters and want to check that they are “real.”

We have decided to perform the following 2-sample [[100 📒 Academia/STA130/W4/Hypothesis Testing and p-values\|hypothesis test]]: $$\begin{align} H_{0} : x_{1}^{ctr} = x_{2}^{ctr}, && H_{1} : x_{1}^{ctr} \neq x_{2}^{ctr} \end{align}$$
- We choose an alpha-level of 0.01, and find the p-value is 0.003. Based on this, we conclude our clusters are real

> [!question] Is the above test valid? If so, can we guarantee a 1% Type I error rate?
> - **No.**
> - This is called [[100 📒 Academia/STA130/W8/Double-Dipping\|Double-Dipping]]

Back to [[100 📒 Academia/STA130/Week 8 Lecture\|Week 8 Lecture]].