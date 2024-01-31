---
{"dg-publish":true,"dg-path":"academia/STA130/Histograms.md","permalink":"/academia/sta-130/histograms/","created":"2024-01-16T18:21:44.838-05:00","updated":"2024-01-16T23:55:14.066-05:00"}
---


**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|2]]
Course: #STA130
Date: 2024-01-16

---

- The plot that is most often used to visualize the distribution of a numeric variable
- What is the **height** of each bar?
	- Counts the number of values of the variable which fall within the corresponding **bin**
	- Endpoints of each *bin* lies on the x-axis
- What is the horizontal axis?
	- numerical (no gaps between bins)
	- axis is continuous
- What is the vertical axis?
	- counts the observations in each bin

# Features of the distribution of a numerical variable

![2_histogram.png](/img/user/Files/STA130/2_histogram.png)

- **Shape**
	- describes the overall pattern of the values of the variable
- **Centre**
	- describes a “typical” value of the variable
- **Spread**
	- describes how concentrated the values of the variable are
	- variation in the values
	- think of the range of data

## How to describe the *shape* of a numerical variable
- **Skewness**
	- Skew is to the direction of the *longer tail*
	- Symmetric (i.e., not skewed)
	- Left-skewed
	- Right-skewed
	  <br>
	![2_skewness.png](/img/user/Files/STA130/2_skewness.png)

- The **number of modes** (**modality**)
	- i.e., how many bumps there are in a distribution
	- unimodal
		- e.g., first two histograms in above image
	- bimodal
		- e.g., third histogram in above image
	- multimodal
		- can also include bimodal
	- uniform
	- It doesn’t really make sense to talk about skewness when multimodal

# Creating a histogram in R with `geom_histogram()`

```r
ggplot(data = coffee_ratings, aes(x = total_cup_points)) +
  geom_histogram(color = "black",
                 fill = "gray",
                 bins = 30) +
  labs(x = "Overall coffee ratings")
```

- What to specify in `ggplot`?
	- Name of the data you’re working with
		- Replace `coffee_ratings` with the name of the dataset you want to use
	- Aesthetic (`aes`)
		- Name of the numerical variable you want to visualize in your histogram (x-axis)
		- Replace `total_cup_points` with the name of the numerical variable
	- Number of bins
		- Replace `30` with the number of bins you want to create along the X-axis
	- Labels
		- Replace `"Overall coffee ratings"` with the label you want for the X-axis
	- Colours (optional)
		- http://www.stat.columbia.edu/~tzheng/files/Rcolor.pdf


- **Oversmoothing**
	- Bandwidth is too big (not enough bins)
	- True shape of distribution is hidden
- **Undersmoothing**
	- Bandwidth is too small (too many bins)
	- Histogram looks like a series of separated spikes

> [!note]
> Typically, the default values for `ylim` are good
> - Can modify them using the `ylim()` argument if you wish (sometimes useful to compare across groups)

# Comparing across groups with histograms

```r
coffee_ratings %>% ggplot(aes(x = total_cup_points)) +
	geom_histogram(color = "black",
					fill = "gray") +
	labs(x = "Overall coffee ratings") + 
	facet_wrap(~species)
```

![2_comparing_histograms.png](/img/user/Files/STA130/2_comparing_histograms.png)
