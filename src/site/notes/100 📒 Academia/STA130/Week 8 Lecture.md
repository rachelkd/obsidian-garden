---
{"dg-publish":true,"dg-path":"academia/STA130/Week 8 Lecture.md","permalink":"/academia/sta-130/week-8-lecture/","created":"2024-03-04T13:20:35.534-05:00","updated":"2024-03-05T20:43:04.832-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|8]]
Course: #STA130
Date: 2024-03-04

---
# Clustering
##### Motivation.
- So far, we have assumed that we can collect info. on multiple groups and compare things between them
	- These *labels* are not always present in real life
- Many situations where we do not always go into an analysis knowing ahead of time what particular “groups” we want to compare

> [!important] We want to discover these groups
> - e.g., Marketing: companies want to identify various consumer “archetypes” based on general behaviour to sell these groups ads

###### Recall: UNICEF & Data
- How can we identify **groups** of countries with similar:
	- Contexts (“terrain”)
	- SDG progress (“distance”)
	- Rate of progress (“velocity”)
- Can we compare countries within these groups to see how similar/different they might be in other conditions?
	- e.g, Maybe countries with similar contexts but different SDG progress can learn something from each other, or
	- If multiple countries have similar contexts, does that mean they also have made similar amounts of progress towards their SDGs?

##### Example. NYC → SFO 2013 Flight Data
Data from [[100 📒 Academia/STA130/W7/Bootstrapping\|Bootstrapping]].

![|400](https://i.imgur.com/xXEnHeM.png)
*How many clusters are there?*

## Clustering and parameter estimation, loss functions

→ [[100 📒 Academia/STA130/W8/Clustering\|Clustering]]

# K-Means Algorithm

> [!question] How to we determine our clusters?

→ [[100 📒 Academia/STA130/W8/K-Means Algorithm\|K-Means Algorithm]]

# How many clusters is enough?

→ [[100 📒 Academia/STA130/W8/How Many Clusters Is Enough\|How Many Clusters Is Enough]]