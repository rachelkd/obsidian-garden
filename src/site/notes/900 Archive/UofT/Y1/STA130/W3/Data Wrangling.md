---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w3/data-wrangling/","created":"2024-01-22T10:55:20.997-08:00","updated":"2024-01-23T16:02:10.915-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|3]]
Course: #STA130
Date: 2024-01-22

---
# What is data wrangling?

- **Data cleaning**
	- Correcting errors (if possible)
	- Handling missing data
	- Standardizing the format of values
- **Data reduction** (reorganization)
	- Extract subsets of variables we are interested / not interested in
	- Remove variables we don’t need
	- Create new interesting / useful variables
	- Sort data by the values of one or more variables
- **Data integration**
	- Merging data from different sources

### Example. Job applicants.
Suppose you are a hiring manager and want to share information about job applicants with the hiring committee.

![3_data.png](/img/user/900%20Archive/UofT/Y1/Files/STA130/3_data.png)

- What should we do with this dataset before sharing it?
	- Mei’s age is not realistic → replace w/ **N/A** (special value)
	- Remove SIN due to privacy
	- Make city names consistent
	- Current salary: currency and standardizing the format of values
	- Wei’s experience and age do not make sense → go back and look at where the data came from (e.g., transcription error from paper to electronic)

# Data wrangling in C

### Preview of `baby_names` dataset

[Data](https://www.openintro.org/data/index.php?data=baby_names)
```r
> glimpse(baby_names)
Rows: 5,640
Columns: 4
$ year <dbl> 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 188…
$ name <chr> "John", "William", "James", "Charles", "George", "Frank", "Jose…
$ rank <dbl> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, …
$ sex  <chr> "male", "male", "male", "male", "male", "male", "male", "male",…
```

## Keeping only a subset of rows using `filter()`

### Example. Extract only the names that were most popular each year.

```r
# Keep all the rows in baby_names with values of 1 for the rank variable
most_popular <- baby_names %>% filter(rank == 1)
head(most_popular)
```

**Console.**

```r
# A tibble: 6 × 4
   year name   rank sex  
  <dbl> <chr> <dbl> <chr>
1  1880 John      1 male 
2  1881 John      1 male 
3  1882 John      1 male 
4  1883 John      1 male 
5  1884 John      1 male 
6  1885 John      1 male 
```

*Notice how it is rows with `rank == 1` only.*

See [[900 Archive/UofT/Y1/STA130/W3/Pipe Operators\|pipe operators]] and [[900 Archive/UofT/Y1/STA130/W3/Logical Operators\|logical operators]].

### Suppose we want to further restrict attention to only boys names

```r
most_popular_boy_names <- baby_names %>%
							filter(rank == 1 & sex = "male")
```

```r
most_popular_boy_names <- baby_names %>%
							filter(rank == 1) %>%
							filter(sex == "male")
```
*Second approach takes the `baby_names` data, then keeps only rows with `rank == 1`, then keeps only roles that `sex == male`*.
## Select variables/columns using `select()`

### Example. Exclude the `sex` column from `most_popular_boy_names`

```r
# Give a name to our new tibble
boys_names_rank_one <- baby_names %>% filter(rank == 1 & sex == "male")
glimpse(boys_names_rank_one)

# Remove the 'sex' and 'rank' columns since we don't need them
boys_names_rank_one <- boys_names_rank_one %>% select(-sex, -rank)
glimpse(boys_names_rank_one)
```

**Output.**

```r
Rows: 141
Columns: 2
$ year <dbl> 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1…
$ name <chr> "John", "John", "John", "John", "John", "John", "John", "John…
```

### Example. Select only the `year` and `name` instead.

- Returns the same tibble as above, but different implementation

```r
boys_names_rank_one <- boys_names_rank_one %>% select(year, name)
```

Note that reversing `year` and `name` would change the order of the rows.

## Combining `filter()` and `select()`

### Example. Girls names, top 5.

```r
girls_names_top_5 <- baby_names %>%  # Start with data
		filter(sex == "female") %>%  # Keep only female names
		filter(rank <= 5) %>%  # Keep only names rank <= 5
		select(~sex)  # Remove sex variable since we kept only female names
glimpse(girls_names_top_5)
```

**Output.**

```r
Rows: 705
Columns: 3
$ year <dbl> 1880, 1880, 1880, 1880, 1880, 1881, 1881, 1881, 1881, 1881, 1…
$ name <chr> "Mary", "Anna", "Emma", "Elizabeth", "Minnie", "Mary", "Anna"…
$ rank <dbl> 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1…
```

## Sorting with `arrange()`

- How to sort the rows in a tibble based on the values of a variable?
	- `arrange()`
	- specify the name of the sorting variable
- How to sort in descending order?
	- `arrange(desc())`
	- specify the name of the sorting variable

> [!note] 
> - Numerical variables sort numerically
> - Character variables sort alphabetically

### Example. Sort `girls_names_top_5` in descending year.

```r
girls_names_top_5 %>%
		arrange(desc(year))
```

**Output.**

| year | name | rank |
| ---: | :--- | ---: |
| 2020 | Olivia | 1 |
| 2020 | Emma | 2 |
| 2020 | Ava | 3 |
| 2020 | Charlotte | 4 |
| 2020 | Sophia | 5 |
| 2019 | Olivia | 1 |
| 2019 | Emma | 2 |
| 2019 | Ava | 3 |
| 2019 | Sophia | 4 |
| 2019 | Isabella | 5 |
