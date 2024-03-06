---
{"dg-publish":true,"dg-path":"academia/STA130/W2/Barplots.md","permalink":"/academia/sta-130/w2/barplots/","created":"2024-01-16T20:18:58.350-05:00","updated":"2024-01-19T13:29:29.973-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|2]]
Course: #STA130
Date:

---

- When is a **barplot** used?
	- Visualize the distribution of a *categorical variable* with two or more categories
- There is one **bar** for each **category**/value
- The order of the bars is arbitrary
- The height of the bar counts the *number of observations* for each category
- Bars have arbitrary widths (but should all be the same)
- There is a gap between each bar (gaps should be the same width)
	- indicates that this is not a continuous axis
	- These are different values that can be in any order

![2_horizontal_barplot.png](/img/user/Files/STA130/2_horizontal_barplot.png)
<div class="caption" style="color: grey"><i>Flip the axes to show category names.</i></div>

# Describing the distribution of a categorical variable

- Which category is the **most common**?
	- Washed
- **Least common**?
	- Pulped natural
- **How many times more common** is one category than another?
	- Washed is ~3 times as common as natural
- Does it make sense to talk about the shape or centre of this barplot?
	- No, because these are arbitrary labels

# Creating a barplot in R

```r
ggplot(data = coffee_ratings, aes(x = processing_method)) +
  geom_bar(color = "black",
                 fill = "gray") +
  labs(x = "Processing method")
  # + coord_flip()  # to flip plot
```

- Same as for `geom_histogram()` but with a categorical variable

# Looking at the association between two categorical variables

### Stacked barplot
![2_stacked_barplot.png](/img/user/Files/STA130/2_stacked_barplot.png)

### Barplot with two variables
![2_barplot_two_var.png](/img/user/Files/STA130/2_barplot_two_var.png)