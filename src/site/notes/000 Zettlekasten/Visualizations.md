---
{"dg-publish":true,"permalink":"/000-zettlekasten/visualizations/","created":"2024-01-16T15:57:55.048-05:00","updated":"2024-01-16T23:55:09.754-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|2]]
Course: #STA130
Date: 2024-01-16

---
# What makes a visualization effective?

- Simplicity
- Good labels
- Not misleading
- Colour
- Type of plot

# Visualizing and describing the distribution of a numerical (quantitative) variable

- What is the **distribution** of a variable?
	- Tells what values the variable takes
	- Tells how often the variable takes each value (or range of values)
- Example. Height of a student in STA130.
	- What would the distribution tell us about?
		- the range of possible values: positive
		- How likely each value is
			- Is it equally likely for a STA130 student to be 5’4” vs. 7”
			- Most likely, small number of very short, most people in middle range of heights, small number of very tall people
- Example. Sum of two dice in a dice game.
	- What would the distribution tell us about?
		- the range of possible values: 2-12
		- How likely each value is

- [[000 Zettlekasten/Histograms\|Histograms]]
- [[000 Zettlekasten/Boxplots\|Boxplots]]

## Histograms vs. boxplots

![2_histogram_vs_boxplot.png](/img/user/Files/sta130/2_histogram_vs_boxplot.png)

| Histograms | Boxplots |
| ---- | ---- |
| shape | easier to see the *median* |
| sample size | highlights outliers |
|  | more compact/simple |
|  | IQR |
|  | easier to compare groups |

[[000 Zettlekasten/Histograms#Comparing across groups with histograms\|Comparing histograms]]
[[000 Zettlekasten/Boxplots#Visually comparing numerical distributions across different categories\|Comparing boxplots]]

- What is one advantage of the side-by-side *boxplots*?
	- Easier to compare
		- range
		- median
		- IQR
- What is one advantage of the side-by-side *histograms*?
	- Need histograms if we care about shape
	- Relative frequency

# Visualizing and describing the distribution of a categorical variable

- [[000 Zettlekasten/Barplots\|Barplots]]
- [[000 Zettlekasten/Pie charts\|Pie charts]]

# Visualizing the association between two or more variables

## Types of visualizations

- [[000 Zettlekasten/Scatterplots\|Scatterplots]]
