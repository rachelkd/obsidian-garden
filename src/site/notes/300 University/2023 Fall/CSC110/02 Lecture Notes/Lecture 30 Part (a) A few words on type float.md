---
{"dg-publish":true,"permalink":"/300-university/2023-fall/csc-110/02-lecture-notes/lecture-30-part-a-a-few-words-on-type-float/","created":"2023-12-04T23:48:07.823-05:00","updated":"2023-12-05T17:19:59.023-05:00"}
---

#CSC110

**Covers:**
- n/a
---
```table-of-contents
```
---
# Arithmetic with type `float`

```python
>>> # Example 1
>>> w = 0.3
>>> x = 0.2
>>> y = 0.1
>>> w + x + y
0.6
```

Suppose we reverse the order of addition:

```python
>>> y + x + w  # reverse the summation order
0.6000000000000001
```

## Why did this happen?

- Computers use **binary** arithmetic to represent numbers
- Decimal number ⅒ in binary is represented as:
	- `0.00011001100110011...`
	- *infinite* expansion → requires infinite amount of memory
- Computers have *finite* memory
- How many bits of a number does each type `float` object store?
	- Stores leading 53 significant bits
	- May be an approximation error when we round to 53 bits
	- In addition to keeping track of significant bits, 
		- `float` object takes 11 bits for scaling
		- 1 bit for the sign
	- How do you get 65 bits of information in 64 bits?
		- The first significant bit has to be `1` → makes representation unique
- Every time we perform a type float operation, there is a potential for an approximation error that may accumulate:
	- In the first computation, the errors accumulated nicely, leaving us with 0.6.
	- In the second computation, we were not so fortunate and the errors accumulated to leave `0.6000000000000001`.
	- The result is relatively accurate, just not exact!

> [!note] 
> Arithmetic with type `float` is not necessarily communicative.

## Other examples

### Ex. 1. Counting from `0.1` to `0.5` by `0.1`

```python
>>> # Example 2
>>> a_so_far = 0.1
>>> iterations_so_far = 0
>>> while a_so_far <= 0.5:
... 	print(' a_so_far : ', a_so_far)
... 	iterations_so_far = iterations_so_far + 1
... 	a_so_far = a_so_far + 0.1
>>> print('loop finished')
```

We get:

```python
 a_so_far :  0.1
 a_so_far :  0.2
 a_so_far :  0.30000000000000004
 a_so_far :  0.4
 a_so_far :  0.5
loop finished
```

After the loop completes:

```python
>>> iterations_so_far
5  # As expected
>>> a_so_far
0.6  # As expected
```

### Ex. 2. Counting from `1.1` to `1.5` by `0.1`

```python
>>> # again but shift start by 1.0
>>> b_so_far = 1.1
>>> iterations_so_far = 0
>>> while b_so_far <= 1.5:
...     print(' b_so_far : ', b_so_far)
...     iterations_so_far = iterations_so_far + 1
...     b_so_far = b_so_far + 0.1
>>> print('loop finished')
```

We get:

```python
 b_so_far : 1.1
 b_so_far : 1.2000000000000002
 b_so_far : 1.3000000000000003
 b_so_far : 1.4000000000000004
loop finished
```

After loop completes:

```python
>>> iterations_so_far
4  # Was expecting 5 !
>>> b_so_far
1.5000000000000004  # Was expecting 1.6 !
```

### What happened?

1. Counting from `0.1` to `0.5` by `0.1` needed 5 iterations:
	- `a_so_far` changed to `0.2`, `0.30000000000000004`, `0.4`, `0.5`, then `0.6` to exit
2. Counting from `1.1` to `1.5` by `0.1` needed 4 iterations:
	- `b_so_far` changed to `1.2000000000000002`, `1.3000000000000003`, `1.4000000000000004`, then `1.5000000000000004` to exit
- ==The accumulation of small rounding errors pushed `b_so_far` to be bigger than `1.5` sooner than expected==

> [!note] 
> Avoid using type `float` variables as loop variables

## Reducing number of type `float` operations

If you *need* to have a loop depend on a type `float` variable, best to reduce the number of type `float` operations involved to compute the variable.

Compute the $k$-th new value using (e.g.,):
        `b_so_far = 1.1 + k * 0.1`
as there are only *two* float operations in the computation

## Ex. 3. Reduce operations for implementation

Consider this re-implementation of [[#Ex. 2. Counting from `1.1` to `1.5` by `0.1`|example 2]].
```python
>>> b_knot = 1.1
>>> b_increment = 1.1
>>> b_so_far = b_knot
>>> iterations_so_far = 0
>>> while b_so_far <= 1.5:
...     print(' b_so_far : ', b_so_far)
...     iterations_so_far = iterations_so_far + 1
...     b_so_far = b_knot + iterations_so_far * b_increment
>>> print('loop finished')
```

We get:
```python
 b_so_far : 1.1
 b_so_far : 1.2000000000000002
 b_so_far : 1.3
 b_so_far : 1.4000000000000001
 b_so_far : 1.5
loop finished
```

After loop completes:
```python
>>> iterations_so_far
5  # 😀
>>> b_so_far
1.6  # 😀😀
```

> [!note]
> Reducing the number of type float operations in a critical computation can produce a more accurate result.

# Computing limits

Consider the definition of the derivative:

$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$$
How do you compute until $h \to 0$?
1. Compute $\frac{f(x + h) - f(x)}{h}$ for decreasing values of $h$ until convergence

### Try this for $f(x) = \sin (x)$

We already know that $f'(x) = \cos (x)$.
Computed observations for random $x \in [0, \pi)$:

![relative_error_sinx.png](/img/user/Files/HPS120/relative_error_sinx.png)

$$\text{Relative error}(h) = \frac{ \mid \cos (x) - \frac{f(x + h) - f(x)}{h} \mid} {\mid \cos (x) \mid}$$
- As $h$ decreases from $10^{-1}$ to $10^{-8}$, the error decreases.
- As $h$ decreases from $10^{-8}$ to $10^{-15}$, the error increases to approx. $1$ → not accurate at all
- Why does this approximation scheme work for bigger $h$ values, then stop working?
	- Approximation involves computing $f(x + h) - f(x)$ using `float`s
	- Since $f(x) = \sin x$, we only get approximations to the exact values
	- We have an accurate (but inexact) approximation to both $f(x + h)$ and $f(x)$
	- As $h \to 0$, $f(x + h) \to f(x)$, and $(f(x + h) \to f(x)) \to 0$
	- Subtraction eventually starts to cancel out the accurate parts in the computer terms, leaving the floating-point error
		- Eventually, it is the error that is the most significant part of the computation (not the correct values) → error dominates
- This phenomenon is called **catastrophic cancellation**
	- Two numbers that are accurate but inexact
	- If they are close to each other, subtraction will cancel out all the accurate parts of the number, leaving the inaccurate parts → result becomes more inaccurate

### What can we do?

- Use a value of $h \approx 10^{-8}$ that gives good enough accuracy
- Use a different approximation formula for $f'(x)$
	- Beyond the scope of CSC110
 
# Computing roots of the quadratic equation

Consider the quadratic formula:
$$\text{root}_{1}, \text{root}_{2} = \frac {-b \pm \sqrt{b^{2}-4ac}}{2a}$$
for computing roots of the quadratic equation:
$$ax^{2} + bx + c = 0$$
## Implementing the quadratic formula

```python
def quadratic_formula(a: float, b: float, c: float) \
									-> tuple[float, float]:
	"""Return a tuple containing the two roots of the quadratic
	equation
	a * x ** 2 + b * x + c = 0
	computed using the quadratic formula.
	Preconditions:
	- a != 0
	"""
	discriminant = b * b - 4 * a * c
	root_1 = ( - b + math.sqrt(discriminant) ) / (2 * a)
	root_2 = ( - b - math.sqrt(discriminant) ) / (2 * a)
	
	return (root_1, root_2)
```

### Concerns with applying this algorithm using `float`s

- When $b^{2} >> 4ac$, `math.sqrt(b * b - $ * a * c)` will be $\approx |b|$
- One of the roots will be computed using an addition of two nearly equal accurate terms
	- $-b$ and $|b|$
	- → produces accurate approximation to a root
- One of the roots will be computed using a *subtraction* of two nearly equal accurate terms
	- $-b$ and $|b|$
	- $b^{2} >> 4ac \implies$ one of the roots will result from a potential **catastrophic cancellation**

## What do we do?

Observe: If $\text{root}_{1}$, $\text{root}_{2}$ are roots of $ax^{2} + bx + c = 0$, then
$$a(x - \text{root}_{1})(x - \text{root}_{2}) = ax^{2} + bx + c$$
In particular, $a * \text{root}_{1} * \text{root}_{2} = c$.

1. Use quadratic formula to compute an accurate $\text{root}_{a}$
2. Compute $\text{root}_{b} = c \; / \; (a * \text{root}_{a})$ to get an accurate approximation to the other root

## The new implementation

```python
def quadratic_formula_v2(a: float, b: float, c: float) \
												-> tuple[float, float]:
	"""Return a tuple containing the two roots of the quadratic
	equation
	a * x ** 2 + b * x + c = 0
	computed using a modified version of the quadratic formula.
	Preconditions:
	- a != 0
	"""
	discriminant = b * b - 4 * a * c
	root_1 = (- b - math.copysign(1, b) * math.sqrt(discriminant)
	/ (2 * a)
	root_2 = c / (a * root_1)
	
	return (root_1, root_2)
```

- Note that `math.copysign` returns the value of the first argument with the sign of the second argument → ensures addition of $-b$ and $|b|$
