---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w4/randomness-in-programming/","created":"2024-01-30T13:50:03.849-08:00","updated":"2024-01-30T13:53:33.696-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|4]]
Course: #STA130
Date: 2024-01-30

---

- Very difficult to generate true random numbers for simulations
- Most languages use **pseudo-random number generators**
	- generate a deterministic sequence of numbers based on a given **seed**
		- properties are **statistically random**
		- if not specified: based on current internal computer clock
	- can be useful in debugging code/sharing results
		- final answer will not change (removes “random” variation from run to run)
	- can also be dangerous based on where/when you initialize a seed