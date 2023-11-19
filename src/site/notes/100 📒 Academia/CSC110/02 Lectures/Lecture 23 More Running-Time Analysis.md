---
{"dg-publish":true,"dg-path":"academia/CSC110/02 Lectures/Lecture 23 More Running-Time Analysis.md","permalink":"/academia/csc-110/02-lectures/lecture-23-more-running-time-analysis/","created":"2023-11-13T11:32:37.497-05:00","updated":"2023-11-15T00:47:35.795-05:00"}
---

#CSC110  

**Covers:**
- [[100 📒 Academia/CSC110/01 Course Notes/9.6 Analyzing Comprehensions and While Loops\|9.6 Analyzing Comprehensions and While Loops]]
---
```table-of-contents
```
---

# Nested for loops

```python
def f4(numbers: list[int]) -> None:
	for i in range(0, len(numbers) ** 2 + 5):
		for j in range(0, i):
			print(i + j)
```

For the inner loop:
- takes $i$ iterations
- Each iteration takes 1 step
- total of $i \cdot 1$ steps *for a fixed iteration of the outer loop*

For the outer loop:
- $n^{2} + 5$ iterations
- Each iteration takes $i$ steps

The total steps of all iterations of the outer loop is:
  $$0 + 1 + 2 + ... + (n^{2} + 4) = \sum\limits_{i=0}^{n^{2}+4} i = \frac{(n^{2} + 4)(n^{2} + 5)}{2}$$
which is $\Theta(n^{4})$

# Running time of comprehensions

# Running time of while loops

```python
def sum_powers_of_two(n: int) -> int:
	"""Return the sum of the powers of 2 that are
	less than n.
	Precondition: n > 1
	"""
	sum_so_far = 0
	i = 1
	
	while i < n:
		sum_so_far = sum_so_far + i
		i = i * 2
	
	return sum_so_far
```

## Analyzing a while loop

1. Identify pattern for how loop variable `i` changes

| Iteration | `i` |
| --------- | --- |
| 0         | 1   |
| 1         | 2   |
| 2         | 4   |
| 3         | 8   |
| 4         | 16  |
| $k$       | $2^{k}$    |

2. Find the smallest value of $k$ such that $i_{k}$ makes the loop condition
False.
$$\begin{align*}
i_{k} &= 2^{k} \\
i_{k} &\ge n && \text{(what we want)} \\
2^{k} &\ge n \\
k &\ge \log_{2}n \\
k &= \lceil\log_{2}n \rceil && \text{(smallest value)}
\end{align*}$$

*Analysis.*
- First two statements count as 1 step.
- While loop takes $\lceil \log_{2}n \rceil$ iterations, with 1 step per iteration.
- Last statement counts as 1 step.
- Total number of steps is $1 + \lceil \log_{2}n \rceil + 1 = \lceil \log_{2}n \rceil + 2$

We can conclude $RT_{sums\_powers\_of\_{two} (n)}\in \Theta (\log_{2} n)$.

# A Twisted Example

```python
def twisty(n: int) -> int:
	"""Return the number of iterations it takes for this
	special loop to stop for the given n.
	"""
	iterations_so_far = 0
	x = n
	while x > 1:
		if x % 2 == 0: # x is even
			x = x // 2
		else: # x is odd
			x = 2 * x - 2
	iterations_so_far = iterations_so_far + 1
	return iterations_so_far
```

See [[100 📒 Academia/CSC110/01 Course Notes/9.6 Analyzing Comprehensions and While Loops#Example 3 — A trickier example\|9.6 Analyzing Comprehensions and While Loops]].