---
{"dg-publish":true,"dg-path":"academia/STA130/Logical Operators.md","permalink":"/academia/sta-130/logical-operators/","created":"2024-01-22T14:18:22.147-05:00","updated":"2024-01-23T18:42:58.871-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|3]]
Course: #STA130
Date: 2024-01-22

---

- What do logical operators return?
	- Returns (a vector of) TRUE/FALSE values from logical statement

![3_logical_operators.png|400](/img/user/Files/sta130/3_logical_operators.png)

## Combining logical statements

- Can be combined with “and” (`&`) and “or” (`|`)

### Filter `baby_names` dataset by rank and sex

```r
# Returns only female names with ranks 1 or 2
baby_names %>%
	filter((rank == 1 | rank == 2) &
		sex == "female")
```