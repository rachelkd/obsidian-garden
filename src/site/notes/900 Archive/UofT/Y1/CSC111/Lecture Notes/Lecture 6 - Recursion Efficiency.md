---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/csc-111/lecture-notes/lecture-6-recursion-efficiency/","created":"2024-01-27T20:12:23.186-08:00","updated":"2024-01-27T20:26:22.762-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/CSC111/_CSC111 Notes\|3]]
Course: #CSC111
Covered in: [[900 Archive/UofT/Y1/CSC111/Unit 2 - Proof by Induction\|Unit 2 - Proof by Induction]]
Date: 2024-01-27

---
# Recursion and redundancy

### Example. Calculating Fibonacci numbers

- If $n < 2$, fib($n$) = 1
- fib($n$) = fib($n - 1$) + fib($n - 2$)

```python
def fib(n: int) -> int:
	"""Return the n-th fibonacci number.
	"""
	if n < 2:
		return 1
	else:
		return fib(n - 1) + fib(n - 2)
```

Unnecessary repeated calculations $\implies$ inefficient!
#### Expanding the recursion: fib(n) = fib(n - 1) + fib(n - 2)

![3_redundancy.png](/img/user/900%20Archive/UofT/Y1/Files/CSC111/3_redundancy.png)
*How could we avoid calculating items we already calculated?*
#### Solution: memorize
Keep track of already calculated values

```python
def fib_memo(n: int, seen: dict[int, int]) -> int:
	"""
	Return the n-th fibonacci number, reasonably quickly, without redudancy.
	Parameter <seen> is a dictionary of already-seen results
	"""
	if n not in seen:
		if n < 2:
			seen[n] = n
		else:
			seen[n] = fib_memo(n - 2, seen) + fib_memo(n - 1, seen)
	return seen[n]
```

# Running out of stack space

Some programming languages have better support for recursion than others; Python may run out of space on its stack for recursive function calls…
- e.g., recursively traversing a *very* long list

# Recursive vs. iterative

- Any recursive function can be written iteratively
	- May need to use a stack (ADT), too, potentially
- Recursive functions are not always more efficient than the iterative equivalent
	- Can depend on the *language* and *compiler support*
- Why ever use recursion then?
	- If the nature of the problem is recursive, writing it iteratively can be:
		- more time consuming, and/or
		- less readable

> [!note] 
> Recursive functions are not always more efficient than their iterative equivalent,
> *but* recursion is a powerful technique for naturally recursive problems

