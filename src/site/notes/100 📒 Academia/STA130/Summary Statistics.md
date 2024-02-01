---
{"dg-publish":true,"dg-path":"academia/STA130/Summary Statistics.md","permalink":"/academia/sta-130/summary-statistics/","created":"2024-01-23T19:02:38.754-05:00","updated":"2024-02-01T02:53:19.000-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|3]]
Course: #STA130
Date: 2024-01-22

---
# Features of the distribution of a numerical variable

- Recall [[100 📒 Academia/STA130/Histograms#Features of the distribution of a numerical variable\|histograms]].
- You should comment on the **shape**, **centre**, and **spread** when describing the distribution of a numerical variable

# Measuring the **centre** of a numerical distribution

- **mean**
	- common way to measure the centre of a distribution of numerical data
	- If $x_{1}, x_{2}, \dots, x_{n}$ are $n$ observed values, then the mean is
	  $$\overline{x} = \frac{x_{1} + x_{2} + \dots + x_{n}}{n}
	  = \frac{1}{n} \sum\limits_{i=1}^{n} x_{i}$$
- **median**
	- another way to measure the centre of distribution of numerical data
	- median is a number where *50%* of the values are smaller and *50%* are bigger
		- if there’s a split, take the middle/mean of the two points
	- e.g., for numerical data $1,1,2,3,5$, 2 is the median.
	- The median is a specific type of **percentile** (50th percentile)
		- Recall [[100 📒 Academia/STA130/Boxplots\|boxplots]] use 25th, 50th, and 75th percentile

### Example. Use median or mean?

Suppose the following are the current salaries for five students who graduated with Statistics Majors 5 years ago:
1. $50,000
2. $67,000
3. $83,000
4. $100,000
5. $800,000

- Is the **mean** or **median** of these salaries a better indication of the center of the distribution of salaries?
	- median → extremely large values (800k) really distorts the mean

# Measuring the **spread** of a numerical distribution

- **variance**
	- measures the spread of a distribution of numerical data
	- If $x_{1}, x_{2}, \dots, x_{n}$ are $n$ observed values and $\overline{x}$ is the mean of these values, then the variance is
	  $$s^{2} = \frac{(x_{1} - \overline{x})^{2} + \dots + (x_{n} - \overline{x})^2}{n-1}$$
	- roughly measures the **average squared distance between the values and their mean**
- **standard deviation**
	- square root of the variance
	- $$s = \sqrt{s^2}$$
	- standard deviation $s$ is a popular measure → same units as the data → easier to interpret

## Boxplots: Visualizing a summary of the centre/spread for a numerical distribution

> [!note]
> IQR can serve as an alternate definition of the spread.

- Boxplots summarize the distribution of a quantitative variable using *five statistics*
	- **median** – line in the middle of the box
	- **first quartile** ($Q_{1}$) – lower edge
		- number such that one quarter (25%) of the data values are smaller than it
	- **third quartile** ($Q_{3}$) – upper edge
		- number such that three quarters (75%) of the data are smaller than it
	- **inter-quartile range** (IQR) ($Q_{3} - Q_{1}$)
		- another measure of spread
		- range of which 50% of the values lie
	- **whiskers**
		- extend to the most extreme value that is outside the box but within 1.5x IQR of the box
	- **outliers** – points beyond the whiskers

# Creating a summary table using `summarise()`

### Example. Create a summary table reporting the number of observations in 2010 US Census data and the mean hours worked per week.

```r
survey <- read_csv("us_general_social_survey_2010.csv")
glimpse(survey)
```

```
Rows: 690
Columns: 5
$ hours_relax_per_day   <dbl> 4, 0, 2, 5, 2, 3, 4, 6, 5, 3, 3, 3, 2, 5, 0,…
$ mental_health         <dbl> 6, 0, 5, 0, 15, 30, 0, 0, 0, 5, 5, 0, 10, 0,…
$ hours_worked_per_week <dbl> 45, 40, 50, 40, 89, 25, 20, 20, 40, 40, 35, …
$ degree                <chr> "BACHELOR", "HIGH SCHOOL", "BACHELOR", "HIGH…
$ marijuana             <chr> "LEGAL", "NOT LEGAL", "NOT LEGAL", "NOT LEGA…
```

```r
survey %>%
	summarise(
		n = n(),
		mean_work_hrs = mean(hours_worked_per_week))
```
`n` and `mean_work_hrs` are summary stats, which will be columns in the table. `n()` counts the number of observations, and `mean()` counts the mean of the particular variable.

| `n`  | `mean_work_hrs`  |
|---|---|
|690|41.04348|

## `summarise()` functions

![3_summarise_functions.png](/img/user/Files/STA130/3_summarise_functions.png)

# More complex summary tables using `group_by()` and `summarise()`

### Example. Calculate the same summary statistics for each level of education separately.

```r
survey %>%
	group_by(degree) %>%  # degree is the variable we want to split on
	summarise(
		n = n(),
		mean_work_hrs = mean(hours_worked_per_week))
```

```
# A tibble: 5 × 3
  degree                    n mean_hours_worked_per_week
  <chr>                 <int>                      <dbl>
1 BACHELOR                155                       3.68
2 GRADUATE                 90                       3.54
3 HIGH SCHOOL             316                       3.79
4 JUNIOR COLLEGE           57                       3.74
5 LESS THAN HIGH SCHOOL    72                       3.57
```

# Creating new variables using `mutate()`

### Example. Add a new variable called `ratio_relax_to_work` that is the ratio of hours spent relaxing and hours spent working each week.

```r
survey %>%
	mutate(ratio_relax_to_work =  # Name of the new variable
				hours_relax_per_day * 7 / hours_worked_per_week)  # Formula based on existing variables
glimpse(survey)
```

```
Rows: 690
Columns: 6
$ hours_relax_per_day   <dbl> 4, 0, 2, 5, 2, 3, 4, 6, 5, 3, 3, 3, 2, 5, 0, 2, 2, 4, …
$ mental_health         <dbl> 6, 0, 5, 0, 15, 30, 0, 0, 0, 5, 5, 0, 10, 0, 0, 15, 0,…
$ hours_worked_per_week <dbl> 45, 40, 50, 40, 89, 25, 20, 20, 40, 40, 35, 60, 40, 50…
$ degree                <chr> "BACHELOR", "HIGH SCHOOL", "BACHELOR", "HIGH SCHOOL", …
$ marijuana             <chr> "LEGAL", "NOT LEGAL", "NOT LEGAL", "NOT LEGAL", "NOT L…
$ ratio_relax_to_work   <dbl> 0.6222222, 0.0000000, 0.2800000, 0.8750000, 0.1573034,…
```

# Combining `mutate()` and `case_when()`

### Example. Create a new binary variable to indicate whether each person works more or less than 40h per week, and then look at the proportion who approve of marijuana legalization in each of these new groups.

```r
survey %>%
	mutate(workload = case_when(
			hours_worked_per_week <= 40 ~ "40h or less",
			hours_worked_per_week > 40 ~ "more than 40h")) %>%
	group_by(workload) %>%
	summarise(n = n(),
	prop_approve = sum(marijuana == "LEGAL") / n)
```

```
# A tibble: 2 × 3
  workload          n prop_approve
  <chr>         <int>        <dbl>
1 40h or less     409        0.477
2 more than 40h   281        0.548
```