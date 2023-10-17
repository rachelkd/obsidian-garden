---
{"dg-publish":true,"permalink":"/100-academia/csc-110/lecture-16-greatest-common-divisor-revisited/"}
---

# Story So Far
- **Data**
	- data types, literals, basic operators, comprehensions, tabular data, data classes
- **Functions**
	- built-in functions, methods; defining functions, function correctness, (pre-/postconditions), testing
- **Control flow statements**
	- if statements, for loops

We've seen how *mathematical properties* can be turned into *algorithms*.
$$\exists p \in Z, Prime(p) \iff (p > 1 \wedge (\forall d \in \mathbb{N}, 2 \leq d \leq \sqrt{p} \implies d \nmid n))$$
# Computing the Greatest Common Divisor
- **Definition recap**
	- Let $x, y ,d \in \mathbb{Z}$. We say that $d$ is the *greatest common divisor* of $x$ and $y$ when it is the largest number that is a common divisor of $x$ and $y$, or 0 when $x$ and $y$ are both 0. $$\text{gcd} : \mathbb{Z} \times \mathbb{Z} \rightarrow \mathbb{N}$$
	- e.g., `gcd(100, 72) = 4` and `gcd(0, 0) = 0` 

# Naive Algorithm
Check every possible divisor of `m` and `n` and return the largest common one.
```Python
def naive_gcd(m: int, n: int) -> int:
	"""Return the gcd of m and n."""
	if m == 0:
		return abs(n)
	elif n == 0:
		return abs(m)
	else:
		possible_divisors = range(1, min(abs(m), abs(n)) + 1)
		return max({d for d in possible_divisors
					if divides(d, m) and divides(d, n)})
```
We can do one better...
# The Euclidean Algorithm
# Euclidean Algorithm
*Given* non-negative integers `a` and `b` 
*Returns* `gcd(a, b)`

1. Initialize two variables `x`, `y` to the given numbers `a`, `b`.
2. Let `r` be the remainder when `x` is divided by `y`.
	- i.e., `r = x % y`
1. Reassign `x` and `y` to `y` and `r`, respectively.
2. Repeat steps 2 and 3 until `y` is 0.
3. At this point, `x` refers to the gcd of `a` and `b`.

# Implementing the Euclidean Algorithm
*Given* non-negative integers `a` and `b`. *Returns* `gcd(a,b)`.
1. Initialize two variables `x`, `y` to the given numbers `a` and `b`.
2. Let `r` be the remainder when `x` is divided by `y`.
	- i.e., `r = x % y`
1. Reassign `x` and `y` to `y` and `r`, respectively.
2. Repeat steps 2 and 3 until `y` is 0.
3. At this point, `x` refers to the gcd of `a` and `b`.
How do we “repeat until” a condition is met?

```Python
def euclidean_gcd(a: int, b: int) -> int:
	"""Return the gcd of a and b.
	
	Preconditions:
	- a >= 0
	- b >= 0
	"""
	# 1. Initialize two variables x, y to the given numbers a and b.
	x, y = a, b
	
	while y != 0:
		# 2. Let r be the remainder when x is divided by y.
		r = x % y
		# 3. Reassign x and y to y and r, respectively.
		x, y = y, r
		# x = y
		# y = r
	
	# 4. Repeat steps 2 and 3 until y is 0

	# 5. At this point, x refers to the gcd of a and b.
```

# Documenting Loops (When There's No Accumulator)
The *Euclidean Algorithm* does not have a traditional "accumulator": it uses variable reassignment.

- **Loop invariant**
	- property about loop variables
		- must be true at the start and end of each loop iteration
	- act as documentation and "mini tests" in loop bodies