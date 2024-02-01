---
{"dg-publish":true,"dg-path":"academia/STA130/Randomness in Programming.md","permalink":"/academia/sta-130/randomness-in-programming/","created":"2024-01-30T16:50:03.849-05:00","updated":"2024-01-30T16:53:33.696-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|4]]
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