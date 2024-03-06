---
{"dg-publish":true,"dg-path":"academia/STA130/W4/Coercion.md","permalink":"/academia/sta-130/w4/coercion/","created":"2024-01-30T16:41:42.949-05:00","updated":"2024-01-30T16:58:13.036-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|4]]
Course: #STA130
Date: 2024-01-30

---

- What is **coercion**?
	- the automatic or manual conversion between data types
- How does R handle coercion between data types? 
	- R will automatically switch between data types for certain operations
		- can be helpful but also dangerous
	- e.g., `sum(c(TRUE, TRUE, FALSE))` = `sum(c(1, 1, 0))`
- What are the implications of coercion in R programming?
	- Coercion rules in R include converting logical values to numbers, converting values to the simplest type required, and converting from more specific types to more general types.
- What are the types of coercion in R programming?
	- **implicit** and **explicit** coercion
		- objects can be explicitly converted using functions like `as.numeric()` and `as.character()`

![4_coercion_r.png|center|400](/img/user/Files/STA130/4_coercion_r.png)

| Command | Output |
| ---- | ---- |
| `3 + "2"` | Error |
| `c(1, "2")` | `"1" "2"` |
| `c(TRUE, "FALSE")` | `"TRUE" "FALSE"` |
| `sum(c(TRUE, TRUE, TRUE))` | `3` |
| `sum(c(FALSE, FALSE, FALSE))` | `0` |
| `sum(c(10 == 5*2, 2 != 3, 2 <= 1.5 * 2))` | `3` |
