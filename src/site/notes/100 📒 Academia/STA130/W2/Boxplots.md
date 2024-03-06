---
{"dg-publish":true,"dg-path":"academia/STA130/W2/Boxplots.md","permalink":"/academia/sta-130/w2/boxplots/","created":"2024-01-16T18:22:40.126-05:00","updated":"2024-02-15T18:41:06.269-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|2]]
Course: #STA130
Date: 2024-01-16

---

![Files/STA130/2_barplot.png](/img/user/Files/STA130/2_barplot.png)

- **Median**
	- Line in the middle of the box
	- the middle point in a dataset
	- half of the data points are smaller than the median and half of the data points are larger
- **First quartile ($Q_{1}$)**
	- the number such that one quarter (25%) of the data values are smaller than it
	- lower edge of the box
- **Third quartile ($Q_{3}$)**
	- the number such that three quarters (75%) of the data values are smaller than it
	- upper edge of the box
- **Inter-quartile range (IQR)**
	- measure of spread: $Q_{3} - Q_{1}$
	- range in which 50% of the values lie
- What are the **whiskers**?
	- extend to the most extreme value that is outside the box, but within 1.5x IQR of the box
- What are **outliers**?
	- unusual values which are worth investigating
		- i.e., Are they really that unusual, or could they be typos?
	- points beyond the whiskers

# Creating boxplots in R

```r
ggplot(data = coffee_ratings, aes(y = total_cup_points)) +
  geom_boxplot(color = "black",
                 fill = "gray") +
  labs(y = "Overall coffee ratings")
```
<div class="caption" style="color: grey"><i>Almost the same as with histograms.</i></div>

# Visually comparing numerical distributions across different categories

```r
ggplot(data = coffee_ratings, aes(x = species, y = total_cup_points)) +
  geom_boxplot(color = "black",
                 fill = "gray") +
  labs(y = "Overall coffee ratings",
	   x = "Species of coffee bean")
```
<div class="caption" style="color: grey"><i>species is a categorical variable. total_cup_points is a numerical variable.</i></div>

![2_comparing_boxplots.png](/img/user/Files/STA130/2_comparing_boxplots.png)

> [!note]
> This is useful to compare the distribution among categorical variables
