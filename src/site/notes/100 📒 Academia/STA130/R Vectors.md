---
{"dg-publish":true,"dg-path":"academia/STA130/R Vectors.md","permalink":"/academia/sta-130/r-vectors/","created":"2024-01-29T14:29:35.879-05:00","updated":"2024-01-30T16:28:54.069-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|4]]
Course: #STA130
Date: 2024-01-29

---

Variables with the same type can be combined together into **vectors**.

- What is a **vector**?
	- basic data structure that represents a one-dimensional array
	- contains elements of the same type

```r
die <- c(1, 2, 3, 4, 5, 6)
die
```

```
## [1] 1 2 3 4 5 6
```

```r
is.vector(die)
```

```
## [1] TRUE
```

```r
length(die)
```

```
## [1] 6
```
