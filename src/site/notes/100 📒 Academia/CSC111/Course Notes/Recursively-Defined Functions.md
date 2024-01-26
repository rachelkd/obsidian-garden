---
{"dg-publish":true,"dg-path":"academia/CSC111/Course Notes/Recursively-Defined Functions.md","permalink":"/academia/csc-111/course-notes/recursively-defined-functions/","created":"2024-01-21T12:22:34.637-05:00","updated":"2024-01-21T12:52:20.157-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|3]]
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 3 - Proof by Induction\|Unit 3 - Proof by Induction]]
Date: 2024-01-21

---
# From [[100 📒 Academia/CSC111/Course Notes/Proof by Induction\|14.1 Proof by Induction]] 

The **key insight** in the inductive step was that we could *break down* the summation into one of the same form but of a slightly smaller size:
$$
\sum\limits_{i=0}^{k+1} i = \big( \sum\limits_{i=0}^{k} i \big) + (k + 1)
$$
$$\forall k \in \mathbb{N}, f(k+1) = f(k) + (k + 1)$$
We can *define $f$* without using either a summation or the formula ($\frac{n(n+1)}{2}$ from [[100 📒 Academia/CSC111/Course Notes/Proof by Induction\|14.1]]).

- **Definition of $f$**:
	- $$ f(n) = 
	  \begin{cases} 0 & \text{if } n = 0 \\ f(n - 1) + n & \text{if } n > 0 \end{cases} $$
- We say that this is a **recursive** definition
	- $f$ is defined in terms of itself

# Recursively-defined functions in Python

```python
def f(n: int) -> int:
    """Return the sum of the numbers between 0 and n, inclusive.

    Preconditions:
        - n >= 0

    >>> f(4)
    10
    """
    if n == 0:
        return 0
    else:
        return f(n - 1) + n
```

- Note that this is not the most efficient way of representing this function
	- e.g., `return n * (n + 1) // 2`

### More formally

Let `f` be a Python function. We say that `f` is a **recursively-defined function**
 (or **recursive function** for short) when it contains a call to itself in its body.
- **Recursive call**
	- Describes the inner `f(n - 1)` call
- **Recursion**
	- Describes the programming technique of defining recursive functions to perform computations and solve problems

#### Labels for the different parts of the if statement

- What is the **base case** of the function?
	- The if branch
- What is the **recursive step** of the function?
	- The else branch
	- Contains a recursive call

# How does recursion work?

- Two ways of reasoning about recursive functions
	- Domino-style chain of reasoning for induction
		- When we call `f(0)`, the base case executes, and `0` is returned.
		- When we call `f(1)`, the recursive call `f(1 - 1) == f(0)` is made, which returns `0` (see previous point). Then `0 + 1 == 1` is returned.
		- When we call `f(2)`, the recursive call `f(2 - 1) == f(1)` is made, which returns `1` (see previous point). Then `1 + 2 == 3` is returned.
	- **Inductive approach**/**partial tracing**
		- Example. Reason inductively about the call `f(100)`.
			- When we call `f(100)`, the the recursive call `f(100 - 1) == f(99)` is made. _Assuming_ this call is correct, it returns `4950` (the sum of the numbers between 0 and 99, inclusive).
			- Then `4950 + 100 == 5050` is returned.
		- Partial indicates that we do not trace into any recursive calls, but *assume* that thtey work correctly

# The Euclidean Algorithm revisted

Recall [[300 University/2023 Fall/CSC110/01 Course Notes/7 Number Theory/7.3 Proofs and Algorithms III Computing the Greatest Common Divisor\|Section 7.3]]: the Euclidean algorithm for calculating the GCD of two numbers.
- Relied on the mathematical fact that $\forall a, b \in \mathbb{Z}, b \neq 0, \text{ gcd}(a, b) = \text{gcd}(b, a \; \% \; b)$.

Previous implementation using while loop:
```python
def euclidean_gcd(a: int, b: int) -> int:
    """Return the gcd of a and b.

    Preconditions:
        - a >= 0 and b >= 0
    """
    x = a
    y = b
    while y != 0:
        r = x % y
        x = y
        y = r
    return x
```

### Recursive implementation

We know $\text{gcd}(a, b) = \text{gcd}(b, a \; \% \; b)$ and $\text{gcd}(a, 0) = a$ for all $a \in \mathbb{N}$.
- Recursive definition of the $\text{gcd}$ function over the natural numbers:
	- $$\gcd(a, b) = \begin{cases} 
	  a, & \text{if $b = 0$} \\ \gcd(b, a ~\%~ b), & \text{if $b > 0$} \end{cases}$$
	- Recursive part does not just decrease a number by 1
	- Second argument decreases from $b$ to $a \; \% \; b$
	- Value of the latter could be anything between $0$ and $b - 1$
	- A recursive definition is valid as long as it always uses “smaller” argument values to the function in the recursive call

```python
def euclidean_gcd_rec(a: int, b: int) -> int:
    """Return the gcd of a and b (using recursion!).

    Preconditions:
        - a >= 0 and b >= 0
    """
    if b == 0:
        return a
    else:
        return euclidean_gcd_rec(b, a % b)
```
