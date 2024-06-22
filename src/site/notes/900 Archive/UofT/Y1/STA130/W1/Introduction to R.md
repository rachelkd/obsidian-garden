---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w1/introduction-to-r/","created":"2024-01-15T13:30:59.791-08:00","updated":"2024-02-06T12:10:51.000-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|1]]
Course: #STA130

---
# R components

- R
	- the “engine”
- RStudio
	- the dashboard/environment
- R packages
	- “apps” you can download
- Three options for coding in R
	- Console; line by line
	- Script (.R); many lines
	- Notebook (.Rmd); hybrid text, code, and output

# Installing and loading packages

- How to install a package?
	- `install.packages()` function
- How to load an (installed) package?
	- `library()`
- Example of installing `tidyverse`:
	-  
		```r
		install.packages("tidyverse")
		library(tidyverse)
		```

# Working with data in R

- How to get data into R from a file?
	- 
		```r
		grades <- read_csv("sta130grades.csv")
		```
	- Reads a file called `“sta130grades.csv”` and saves these data in a *tibble* called grades
- How to look at data?
	1. `glimpse()`
		- tells us how many rows and columns there are
		- lists out the column names, their data types
		- peak at first few values
		- summary of data, not the data itself
	2. `head()`
		- shows us the top couple rows of the data (our *tibble*)
		- by default, the first 6