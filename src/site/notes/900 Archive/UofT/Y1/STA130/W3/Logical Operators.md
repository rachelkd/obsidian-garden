---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w3/logical-operators/","created":"2024-01-22T11:18:22.147-08:00","updated":"2024-01-23T15:42:58.871-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|3]]
Course: #STA130
Date: 2024-01-22

---

- What do logical operators return?
	- Returns (a vector of) TRUE/FALSE values from logical statement

![3_logical_operators.png|400](/img/user/900%20Archive/UofT/Y1/Files/STA130/3_logical_operators.png)

## Combining logical statements

- Can be combined with “and” (`&`) and “or” (`|`)

### Filter `baby_names` dataset by rank and sex

```r
# Returns only female names with ranks 1 or 2
baby_names %>%
	filter((rank == 1 | rank == 2) &
		sex == "female")
```