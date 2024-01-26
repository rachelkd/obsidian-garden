---
{"dg-publish":true,"dg-path":"academia/STA130/Week 2 Lecture Notes.md","permalink":"/academia/sta-130/week-2-lecture-notes/","created":"2024-01-15T22:38:37.596-05:00","updated":"2024-01-17T12:41:04.623-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|2]]
Course: #STA130
Date: 2024-01-15

---
# Week 1 recap

- Opening packages ([[100 📒 Academia/STA130/Introduction to R\|notes]]):
	- `library(tidyverse)`
- Loading data:
	- `read_csv("filename.csv")`
- Looking at data:
	- `glimpse()`
	- `head()`
- Types of variables ([[100 📒 Academia/STA130/Variable Types and Distributions\|notes]]):
	- quantitative/numerical; continuous vs. discrete
	- categorical: nominal vs. ordered vs. binary

# Coffee data

[RStudio](https://r.datatools.utoronto.ca/user/rach.deng@mail.utoronto.ca/rstudio/)

## Key variables in the dataset

| Variable | Description |
| ---- | ---- |
| `total_cup_points` | Total rating points (from 0 to 100) |
| `species` | Species of coffee bean (arabica or robusta) |
| `country_of_origin` | Where the bean came from |
| `processing_method` | Method by which raw coffee beans were processed before being packaged |
| … ||

### Calling `glimpse(coffee_ratings)`

```r
> glimpse(coffee_ratings)
Rows: 1,338
Columns: 36
$ total_cup_points     <dbl> 90.58, 89.92, 89.75, 89.00, 88.83, 88.83, 88.75…
$ species              <chr> "Arabica", "Arabica", "Arabica", "Arabica", "Ar…
$ owner                <chr> "metad plc", "metad plc", "grounds for health a…
$ country_of_origin    <chr> "Ethiopia", "Ethiopia", "Guatemala", "Ethiopia"…
$ farm_name            <chr> "metad plc", "metad plc", "san marcos barrancas…
$ mill                 <chr> "metad plc", "metad plc", NA, "wolensu", "metad…
$ company              <chr> "metad agricultural developmet plc", "metad agr…
$ altitude             <chr> "1950-2200", "1950-2200", "1600 - 1800 m", "180…
$ region               <chr> "guji-hambela", "guji-hambela", NA, "oromia", "…
$ producer             <chr> "METAD PLC", "METAD PLC", NA, "Yidnekachew Dabe…
$ in_country_partner   <chr> "METAD Agricultural Development plc", "METAD Ag…
$ harvest_year         <chr> "2014", "2014", NA, "2014", "2014", "2013", "20…
$ grading_date         <chr> "April 4th, 2015", "April 4th, 2015", "May 31st…
$ variety              <chr> NA, "Other", "Bourbon", NA, "Other", NA, "Other…
$ processing_method    <chr> "Washed / Wet", "Washed / Wet", NA, "Natural / …
$ aroma                <dbl> 8.67, 8.75, 8.42, 8.17, 8.25, 8.58, 8.42, 8.25,…
$ flavor               <dbl> 8.83, 8.67, 8.50, 8.58, 8.50, 8.42, 8.50, 8.33,…
$ aftertaste           <dbl> 8.67, 8.50, 8.42, 8.42, 8.25, 8.42, 8.33, 8.50,…
$ acidity              <dbl> 8.75, 8.58, 8.42, 8.42, 8.50, 8.50, 8.50, 8.42,…
$ body                 <dbl> 8.50, 8.42, 8.33, 8.50, 8.42, 8.25, 8.25, 8.33,…
$ balance              <dbl> 8.42, 8.42, 8.42, 8.25, 8.33, 8.33, 8.25, 8.50,…
$ uniformity           <dbl> 10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 10.00…
$ clean_cup            <dbl> 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,…
$ sweetness            <dbl> 10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 10.00…
$ cupper_points        <dbl> 8.75, 8.58, 9.25, 8.67, 8.58, 8.33, 8.50, 9.00,…
$ moisture             <dbl> 0.12, 0.12, 0.00, 0.11, 0.12, 0.11, 0.11, 0.03,…
$ category_one_defects <dbl> 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,…
$ quakers              <dbl> 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,…
$ color                <chr> "Green", "Green", NA, "Green", "Green", "Bluish…
$ category_two_defects <dbl> 0, 1, 0, 2, 2, 1, 0, 0, 0, 4, 1, 0, 0, 2, 2, 0,…
$ expiration           <chr> "April 3rd, 2016", "April 3rd, 2016", "May 31st…
$ certification_body   <chr> "METAD Agricultural Development plc", "METAD Ag…
$ unit_of_measurement  <chr> "m", "m", "m", "m", "m", "m", "m", "m", "m", "m…
$ altitude_low_meters  <dbl> 1950.0, 1950.0, 1600.0, 1800.0, 1950.0, NA, NA,…
$ altitude_high_meters <dbl> 2200.0, 2200.0, 1800.0, 2200.0, 2200.0, NA, NA,…
$ altitude_mean_meters <dbl> 2075.0, 2075.0, 1700.0, 2000.0, 2075.0, NA, NA,…
```

### Calling `head(coffee_ratings)`

```r
> head(coffee_ratings)
# A tibble: 6 × 36
total_cup_points species owner   country_of_origin farm_name mill  company altitude
		 <dbl> <chr>   <chr>   <chr>             <chr>     <chr> <chr>   <chr>   
1             90.6 Arabica metad … Ethiopia          "metad p… meta… metad … 1950-22…
2             89.9 Arabica metad … Ethiopia          "metad p… meta… metad … 1950-22…
3             89.8 Arabica ground… Guatemala         "san mar… NA    NA      1600 - …
4             89   Arabica yidnek… Ethiopia          "yidneka… wole… yidnek… 1800-22…
5             88.8 Arabica metad … Ethiopia          "metad p… meta… metad … 1950-22…
6             88.8 Arabica ji-ae … Brazil             NA       NA    NA      NA      
# ℹ 28 more variables: region <chr>, producer <chr>, in_country_partner <chr>,
#   harvest_year <chr>, grading_date <chr>, variety <chr>, processing_method <chr>,
#   aroma <dbl>, flavor <dbl>, aftertaste <dbl>, acidity <dbl>, body <dbl>,
#   balance <dbl>, uniformity <dbl>, clean_cup <dbl>, sweetness <dbl>,
#   cupper_points <dbl>, moisture <dbl>, category_one_defects <dbl>, quakers <dbl>,
#   color <chr>, category_two_defects <dbl>, expiration <chr>,
#   certification_body <chr>, unit_of_measurement <chr>, …
```

- How many variables?
	- 36 (columns)
- How many observations?
	- 1338 (rows)
- What are `<dbl>` and `<chr>`?
	- double (*numeric*)
	- character (*categorical*)
- What are potential biases in these data?
	1. Personal preference
		- Who rated these coffees?
	2. Bias towards certain owners
		- → responses
			- Who paid for these data to be collected?
				- e.g., if a coffee manufacturer commissions a study that conveniently determines that their coffee is the best
		- → inclusion in the sample
			- Some owners could be more represented in the data
			- Data might not include certain coffees from certain countries or producers
	3. Where raters came from
	4. [[100 📒 Academia/STA130/Survivorship Bias\|Survivorship bias]]
		- If not popular → off the market → not in these data

# What makes a visualization effective?

[[100 📒 Academia/STA130/Visualizations\|Visualizations]]

# Ethics considerations

[[100 📒 Academia/STA130/Ethics Considerations\|Ethics Considerations]]
