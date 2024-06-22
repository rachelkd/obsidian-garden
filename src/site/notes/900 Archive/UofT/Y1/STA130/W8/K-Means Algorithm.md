---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w8/k-means-algorithm/","created":"2024-03-04T11:21:05.966-08:00","updated":"2024-04-26T00:16:17.077-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|8]]
Course: #STA130
Date: 2024-03-04

---
# K-Means Algorithm

 - **Step 0:** Decide on the number of clusters you want, $k$
 - **Step 1:** Randomly pick centres
	 - ![|center|300](https://i.imgur.com/fpXaXUp.png)

 - **Step 2:** Assign points to the cluster with the closest cluster center
	 - ![|center|300](https://i.imgur.com/jIWxrY9.png)
- **Step 3:** Recompute the cluster center based on the mean of all the points in the cluster
	- ![|center|300](https://i.imgur.com/RlgzaqA.png)
- **Step 4:** Repeat steps 2-3 until cluster centres stop changing (they converge)
	- ![|center|300](https://i.imgur.com/Fma6dgb.png)

# K-Means Clustering in R
Use the `kmeans` package with the following syntax:

```r
kmeans(data, k)
```

```r
# run k-means on the data
k <- 5  # our guess for the number of clusters
clustering <- kmeans(SF$dep_time_min, k)
clustering
```

```
K-means clustering with 5 clusters of sizes 2990, 2232, 3482, 3139, 1330

Cluster means:
       [,1]
1  651.0411
2  906.2500
3  448.4414
4 1073.8194
5 1226.5586

Clustering vector:
   [1] 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 2 2 2 2 2 4 4 4 4 4 4 4 5 5 5 3 3 3 3 3
  [37] 3 3 3 3 3 1 1 1 1 1 1 1 2 2 2 2 2 2 4 4 4 4 4 4 4 5 5 5 3 3 3 3 3 3 3 3
  [73] 3 1 1 1 1 1 1 1 2 2 2 2 4 4 4 4 4 4 4 5 5 5 5 3 3 3 3 3 3 3 3 3 1 1 1 1
 [109] 1 1 1 1 2 2 2 2 4 4 4 4 4 4 4 5 5 5 3 3 3 3 3 3 3 3 1 1 1 1 2 2 2 2 2 2
 [145] 4 4 4 4 4 5 5 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 2 2 2 2 2 4 4 4 4 4 4 4 5
 [181] 5 3 3 3 3 3 3 3 3 3 1 1 1 1 1 1 1 1 2 2 2 2 4 4 4 4 4 4 4 4 5 5 3 3 3 3
 ...
```

```r
# add clustering values to our original dataset
SF <- 
  SF %>%
  mutate(cluster = clustering$cluster)

# Plot distribution of departure times (facet_wrap)
SF %>% ggplot(aes(x=dep_time_min)) +
  geom_histogram(binwidth=20) + 
  labs(x="Departure Times (in minutes)", 
       y="Number of Flights",
       title="Distribution of Departure Times (NYC->SFO)") +
  theme(text=element_text(size=18)) + 
  facet_wrap(~cluster)

# Plot distribution of departure times (color)
SF %>% ggplot(aes(x=dep_time_min, group=cluster, fill=cluster)) +
  geom_histogram(binwidth=20) + 
  labs(x="Departure Times (in minutes)", 
       y="Number of Flights",
       title="Distribution of Departure Times (NYC->SFO)") +
  theme(text=element_text(size=18))

# Plot number of observations in each cluster
SF %>%
  ggplot() +
  geom_bar(aes(x=cluster, group=cluster, fill=cluster)) + 
  labs(x="Cluster", 
       y="Number of Flights",
       title="Distribution of Cluster Sizes") +
  theme(text=element_text(size=18))
```
*Visualizing clusters.*

![|500](https://i.imgur.com/3N6pCKV.png)

![|500](https://i.imgur.com/cYE8bgv.png)

![|500](https://i.imgur.com/guPsFuY.png)

Back to [[900 Archive/UofT/Y1/STA130/Week 8 Lecture\|Week 8 Lecture]].
