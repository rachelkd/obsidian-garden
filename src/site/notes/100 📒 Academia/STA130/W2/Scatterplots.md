---
{"dg-publish":true,"dg-path":"academia/STA130/W2/Scatterplots.md","permalink":"/academia/sta-130/w2/scatterplots/","created":"2024-01-16T20:40:08.180-05:00","updated":"2024-03-18T13:24:29.578-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|2]]
Course: #STA130
Date: 2024-01-16

---

![2_scatterplot.png](/img/user/Files/STA130/2_scatterplot.png)

- What does the **position** determine on a **scatterplot**?
	- Determined by the values of two numerical variables
		- one on the x-axis
		- other one on the y-axis
	- → One point for each observation
		- Missing values do not appear in the scatterplot

## Features of the association between two numerical variables

- **Form**
	- describes the *pattern* that the two variables follow together
	- e.g., linear, non-linear, quadratic, etc.
- **Direction**
	- **Positive association**
		- values of one variable tend to increase as the other increase
	- **Negative association**
		- values of one variable tends to decrease as the other increases
- **Strength**
	- describes how concentrated the values of the variable are around the *pattern*

# Scatterplots in R

```r
heights %>% ggplot(aes(x=shoePrint, y=height)) + 
	geom_point() +
	labs(x = "Length of shoeprint (in cm)", y = "Height (in cm)")
```

- `heights %>%` is a different way to indicate the data to be plotted
	- equivalent to using `data = ...`

# Visualizing the relationship between two numerical variables plus one categorical variable

```r
heights %>% ggplot(aes(x=shoePrint, y=height, color=sex)) + 
	geom_point() +
	labs(x = "Length of shoeprint (in cm)", 
		 y = "Height (in cm)")
```

![2_scatterplot_comp_colour.png](/img/user/Files/STA130/2_scatterplot_comp_colour.png)

- Adding `color = sex` colours each point in the scatterplot based on the value of this variable

```r
heights %>% ggplot(aes(x=shoePrint, y=height)) + 
	geom_point() +
	labs(x = "Length of shoeprint (in cm)", 
		 y = "Height (in cm)") +
	facet_wrap(~sex)
```

![2_scatterplot_comp_facetwrap.png](/img/user/Files/STA130/2_scatterplot_comp_facetwrap.png)

## Which one is better? `color` vs. `facet_wrap`

- It depends.
- In the above example, it is simpler to use colour
- In some cases, there are so many points on top of each other that looking at a separate plot for each level may be more useful