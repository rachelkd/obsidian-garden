---
{"dg-publish":true,"dg-path":"academia/STA130/W8/How Many Clusters Is Enough.md","permalink":"/academia/sta-130/w8/how-many-clusters-is-enough/","created":"2024-03-04T14:33:42.410-05:00","updated":"2024-03-04T14:46:06.877-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|8]]
Course: #STA130
Date: 2024-03-04

---
##### Example. NYC → SFO 2013 Flights

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

# “Elbow” approach

- We look for the *elbow* in the curve where adding in additional clusters does not improve the results over what we would expect from random splits

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


