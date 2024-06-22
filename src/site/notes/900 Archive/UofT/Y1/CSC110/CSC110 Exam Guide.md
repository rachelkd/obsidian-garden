---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/csc-110/csc-110-exam-guide/","created":"2023-12-12T18:56:56.817-08:00","updated":"2023-12-14T17:01:28.624-08:00"}
---

#CSC110

---
# 1. Working with Data

## Comprehensions
Comprehensions are Python expressions

### Set comprehension
```python
{ <expression> for <variable> in <collection> }
```
### List comprehension
```python
[ <expression> for <variable> in <collection> ]
```
### Dictionary comprehension
```python
{ <key_expr>: <value_expr> for <variable> in <collection> }
```

---
# 3. Formal Logic

## Implications

| $p$   | $q$     | $p \implies q$ |
| ----- | ----- | -------------- |
| `False` | `False` | `True`           |
| `False` | `True`  | `True`           |
| `True`  | `False` | `False`          |
| `True`  | `True`  | `True`           |

- **vacuous truth**
	- implication statement does not say anything about $q$ if $p$ is False
	- If $p$ is False, then $p \implies q$ is always True
- Two logically equivalent formulas:
	- $\neg p \vee q$
		- makes use of the *vacuous truth* cases
			- If $p$ is false, then the statement must always be true
	- **contrapositive**: $\neg q \implies \neg p$
		- If $q$ doesn’t occur, then $p$ couldn’t have occurred either 
- **converse**
	- $q \implies p$
	- <u>NOT</u> logically equivalent to original implication

## Biconditionals (if and only if)

| $p$   | $q$   | $p \iff q$      |
| ----- | ----- | ----- |
| `False` | `False` | `True`  |
| `False` | `True`  | `False` |
| `True`  | `False` | `False` |
| `True`  | `True`  | `True`  |

## Summary

| operator|notation	|English|Python operation | 
| -------|-------|-----|----------------------- |
|NOT|	$\neg p$|	$p$ is not true|`not p`|
|AND|	$p \wedge q$	|$p$ and $q$|`p and q`|
|OR	|$p \vee q$|	$p$ or $q$ (or both)|`p or q`|
|implication|	$p \implies q$|	if $p$, then $q$|`not p or q`|
|biconditional|	$p \iff q$|	$p$ if and only if $q$|`p == q`|

## Predicates

$\exists s \in S, s[0] = ``D"$

```python
>>> strings = ['Hello', 'Goodbye', 'David']
>>> any([s[0] == 'D' for s in strings])
True
```

$\forall s \in S, s[0] = ``D"$

```python
>>> strings = ['Hello', 'Goodbye', 'David']
>>> all([s[0] == 'D' for s in strings])
False
```

## Negation rules

| Statement                         | Negation                                     | Negation in English            |
| --------------------------------- | -------------------------------------------- | ------------------------------ |
| $\neg (\neg p)$                   | $p$                                          |                                |  
| $\neg (p \vee q)$                 | $(\neg p) \land (\neg q)$                    | not p and not q                | 
| $\neg (p \land q)$                | $(\neg p) \vee (\neg q)$                     | not p or not q                 |  
| $\neg (p \implies q)$             | $p \land (\neg q)$                           | p and not q                    | 
| $\neg (p \iff q)$                 | $(p \land (\neg q)) \vee ((\neg p) \land q)$ | (p and not q) OR (q and not p) | 
| $\neg  (\exists x \in S,\; P(x))$ | $\forall x \in S, \; \neg P(x)$              |                                | 
| $\neg (\forall x \in S,\; P(x))$                                  |           $\exists x \in S,\; \neg P(x)$                                   |                                | 

## Filtering comprehensions

```python
# Filtering set comprehension
{<expression> for <variable> in <collection> if <condition>}

# Filtering list comprehension
[<expression> for <variable> in <collection> if <condition>]

# Filtering dictionary comprehension
{<key_expr> : <value_expr> for <variable> in <collection> if <condition>}
```

**Sum of only the even numbers**

```python
>>> numbers = {1, 2, 3, 4, 5} 
>>> sum({n for n in numbers if n % 2 == 0})
6
```

$\forall n \in S,~ n > 3 \Rightarrow n^2 + n \geq 20$

```python
>>> numbers = {1, 2, 3, 4, 5, 6, 7, 8}
>>> all({n ** 2 + n >= 20 for n in numbers if n > 3})
True
```

---
# 6. Modifying Values and Variables

- Augmented assignment operator  `+=` *mutates* a list
	- 
    ```python
    >>> x = [1, 2]
    >>> y = x
    >>> x is y  # x and y are aliases
    True
    >>> y += [3]
    >>> x is y
    True
    >>> x
    [1, 2, 3]
    ```


---
# 7. Number Theory: Theorems, Proofs, and Algorithms

- Definition of **coprime**
	- Let $m, n \in \mathbb{Z}$. We say that $m$ and $n$ are **coprime** when $\text{gcd}(m,n) = 1$.
- Quotient-remainder theorem
	- For all $n \in \mathbb{Z}$ and $d \in \mathbb{Z}^{+}$, there exists $q \in \mathbb{Z}$ and $r \in \mathbb{N}$ such that $n = qd + r$ and $0 \leq r < d$.
		- $q$ and $r$ are *unique* for a given $n$ and $d$
		- $q$ is the **quotient**, $r$ is the **remainder** when $n$ is divided by $d$

- Definition of modular equivalence
	- Let $a, b, n \in \mathbb{Z}$ and assume $n \neq 0$.  We say that $a$ is **equivalent to $b$ modulo $n$** when $n \mid a - b$.
	- We write: $a \equiv b \pmod{n}$
		- e.g., $10 \equiv 2 \pmod{4}$ and $9 \equiv -111 \pmod{5}$
	- $$\forall a, b, n, \in \mathbb{Z}, n \neq 0 \implies (a \equiv b \pmod{n}) \iff (a \; \% \; n = b \; \% \; n)$$

> [!note] 
> **Theorem.** Let $a,b,c,n \in \mathbb{Z}$ with $n \neq 0$. Then:
> 1. $a \equiv a \pmod{n}$
> 2. $a \equiv b \pmod{n} \implies b \equiv a \pmod{n}$
> 3. $a \equiv b \pmod{n} \text{ and } b \equiv c \pmod{n} \implies a \equiv c \pmod{n}$

> [!note]
> **Theorem.** Let $a,b,c,d,n \in \mathbb{Z}$ with $n \neq 0$.
> If $a \equiv c \pmod{n} \text{ and } b \equiv d \pmod{n}$, then:
> 1. $a + b \equiv c + d \pmod{n}$
> 2. $a - b \equiv c - d \pmod{n}$
> 3. $a \times b \equiv c \times d \pmod{n}$

## Linear Combinations and GCD Characterization

> [!note]
> *Definition*. Let $m,n,a \in \mathbb{Z}$. We say that $a$ is a **linear combination of $m$ and $n$** when there exists $p, q \in \mathbb{Z}$ such that $a = pm + qn$. 

> [!note]
> **Theorem.** (*Divisibility of Linear Combinations*)
> Let $m,n,d \in \mathbb{Z}$. If $d$ divides $m$ and $d$ divides $n$, then $d$ divides every linear combination of $m$ and $n$.

> [!note]
> **Theorem.** (*GCD Characterization*)
> Let $m,n \in \mathbb{Z}$, and assume at least one of them is non-zero. Then, $\text{gcd}(m,n)$ is the smallest positive integer that is a linear combination of $m$ and $n$.

## Euclidean Algorithm

> [!note]
> For all $a,b \in \mathbb{Z}$ where $b \neq 0$, $\text{gcd}(a,b) = \text{gcd}(b, a \;\%\; b)$.

```python
def euclidean_gcd(a: int, b: int) -> int:  
    """Returns the GCD of a and b using Euclidean Algorithm  
    """    
    x, y = a, b  
  
    while y != 0:  
        assert math.gcd(x, y) == math.gcd(a, b)  
        r = x % y  
        x, y = y, r  
    
    return x
```

```python
def extended_euclidean_gcd(a: int, b: int) -> tuple[int, int, int]:
    """Returns GCD of a and b, and integers p and q such that

    gcd(a, b) == p * a + q * b

    Preconditions:
    - a >= 0
    - b >= 0

    >>> extended_euclidean_gcd(13, 10)
    (1, 7, -9)
    """
    x, y = a, b
    px, qx = 1, 0
    py, qy = 0, 1

    while y != 0:
        assert math.gcd(x, y) == math.gcd(a, b)
        assert x == px * a + qx * b
        assert y == py * a + qy * b

        q, r = divmod(x, y)

        x, y = y, r

        px, qx, py, qy = py, qy, px - (q * py), qx - (q * qy)

    return x, px, qx
```

**Explanation of the Extended Euclidean Algorithm.**
By the Quotient-Remainder Theorem, we know that $x$ divided by $y$ means
$$
x = y \cdot q + r
$$
Then, we know $x$ and $y$ are linear combinations of $a$ and $b$:
$$
\begin{align*}
x &= p_{x} \cdot a + q_{x} \cdot b \\
y &= p_{y} \cdot a + q_{y} \cdot b
\end{align*}$$
Then, substituting these in the quotient-remainder theorem, we get:
$$
\begin{align*}
(p_{x} \cdot a + q_{x} \cdot b) &= (p_{y} \cdot a + q_{y} \cdot b) \cdot q + r \\
(p_{x} \cdot a + q_{x} \cdot b) - (p_{y} \cdot a + q_{y} \cdot b) \cdot q &= r \\
(p_{x} - (q \cdot p_{y})) \cdot a + (q_{y} - (q \cdot q_{y})) \cdot b &= r
\end{align*}$$

## Modular inverse

> [!note]
> **Theorem.** (*Modular inverse*)
> Let $n \in \mathbb{Z}^{+}$ and $a \in \mathbb{Z}$. If $\text{gcd}(a,n) = 1$, then there exists $p \in \mathbb{Z}$ such that $ap \equiv 1 \pmod{n}$
> - We say that $p$ is a **modular inverse of $a$ modulo $n$

*Proof.*
Let $n \in \mathbb{Z}^{+}$ and $a \in \mathbb{Z}$. Assume $\text{gcd}(a,n) = 1$.
We want to show that $n \mid ap - 1$, so there exists an integer $k$ such that $ap - 1 = nk$.
Since $\text{gcd}(a,n) = 1$, by the *GCD Characterization Theorem*, we know that there exists integers $p$ and $q$ such that $1 = pa + qn$.
Take $k = -q$.
$$\begin{align*}
1 &= pa + qn\\
1 - pa &= qn\\
pa - 1 &= (-q)n\\
ap - 1 &= kn\\
n &\mid ap - 1 && \text{(by definition of divisibility)}\\
ap &\equiv 1 \pmod{n} && \text{(by definition of modular equivalence)}
\end{align*}$$
<div class="right-align"> 
<span class="math display">\blacksquare</span>
</div>

> [!note] 
> **Theorem.** *(Modular division)*
> Let $a \in \mathbb{Z}$ and $n \in \mathbb{Z}^{+}$.
> If $\text{gcd}(a,n)=1$, then for all $b \in \mathbb{Z}$, there exists $k \in \mathbb{Z}$ such that $ak \equiv b \pmod{n}$.

```python
"""Sadia Lecture 17 examples"""  


def extended_euclidean_gcd(a: int, b: int) -> tuple[int, int, int]:  
	"""Return the gcd of a and b, and integers p and q such that  
	gcd(a, b) == p * a + b * q.  
	Preconditions:  
	- a >= 0  
	- b >= 0  
    >>> extended_euclidean_gcd(10, 3)  
	(1, 1, -3)  
	"""  
	x, y = a, b  
	px, qx = 1, 0  
	py, qy = 0, 1  
	
	while y != 0:  
		# assert math.gcd(x, y) == math.gcd(a, b) # L.I. 1  
		assert x == px * a + qx * b # L.I. 2  
		assert y == py * a + qy * b # L.I. 3  
		q, r = divmod(x, y) # equivalent to q, r = (x // y, x % y)  
		x, y = y, r  
		px, qx, py, qy = py, qy, px - q * py, qx - q * qy  
	
	return x, px, qx  


def modular_inverse(a: int, n: int) -> int:  
		"""Return the inverse of a modulo n, in the range 0 to n - 1 inclusive.  
		Preconditions: (TODO: fill this in!)  
		- math.gcd(a, n) == 1 # (in English: the gcd of a and n is 1)  
		- n >= 1  
        >>> modular_inverse(10, 3) # 10 * 1 is equivalent to 1 modulo 3  
		1  
        >>> modular_inverse(3, 10) # 3 * 7 is equivalent to 1 modulo 10  
		7  
		"""  
		result = extended_euclidean_gcd(a, n)  
		gcd, p, q = result[0], result[1], result[2]  
		
		# This isn't necessary, just a useful reminder!  
		assert gcd == a * p + q * n  
		return p % n  
		
		# This has the right idea, but p isn't guaranteed to be in {0, 1, ..., n - 1}  
		# return p
```

**Explanation of modular inverse algorithm.**
By the GCD Characterization Theorem, we know $gcd(a,n) = 1$ is a linear combination of $a$ and $n$.
$$
\begin{align*}
1 &= p \cdot a + q \cdot n \\
1 - p \cdot a &= q \cdot n \\
p \cdot a - 1 &= -q \cdot n \\
\end{align*}
$$
Then, by the definition of divisibility, we know that $n \mid p \cdot a - 1 \implies a \cdot p \equiv 1 \pmod{n}$. Then, $p$ is the modular inverse of 1.

## Modular Exponentiation and Order

> [!note] 
> **Theorem.** (*Fermat's Little Theorem*)
> Let $p, a \in \mathbb{Z}$ and assume $p$ is prime and that $p \nmid a$. Then $a^{p-1} \equiv 1 \pmod{p}$.

- Since it is a number $k$ such that $a^{k} \equiv 1 \pmod{n}$,
	- *any* multiple $n$ of $k$ also satisfies $a^{n} \equiv 1 \pmod{n}$

> [!note]
> We define the function $\varphi : \mathbb{Z}^{+} \rightarrow \mathbb{N}$, called the **Euler totient function** (or **Euler phi function**), as:
> $$\varphi(n) = \mid \{a \mid a \in \{1, ..., n-1 \}, \text{and gcd} (a, n) = 1 \} \mid$$

- For any prime number $p$, $\varphi(p) = p - 1$, since all the numbers $\{1,2,...,p-1\}$ are *coprime* to $p$
- For any two distinct primes $p$ and $q$, $\varphi(pq) = (p-1)(q-1)$

> [!note] 
> **Theorem.** *(Euler's Theorem)*
> For all $a \in \mathbb{Z}$ and $n \in \mathbb{Z}^{+}$, if gcd$(a,n) = 1$, then $a^{\varphi(n)} \equiv 1 \pmod{n}$

# 9. Analyzing Algorithm Running Time

**Big-O.** *(Upper bound)*

> [!note]
> Let $f, g : \mathbb{N} \rightarrow \mathbb{R}^{\geq 0}$.
> We say $g$ is ***Big-O*** of $f$ and write $g \in \mathcal{O}(f)$ when:
> $$\exists c, n_{0} \in \mathbb{R}^{+}, \forall n \in \mathbb{N}, 
> n \geq n_{0} \implies g \leq c \cdot f(n)$$
> i.e., "$g$ is eventually dominated by some multiple of $f$"

**Omega.** *(Lower bound)*

> [!note] 
> Let $f, g : \mathbb{N} \rightarrow \mathbb{R}^{\geq 0}$.
> We say that **$g$ is Omega of $f$** and write $g \in \Omega (f)$ when:
> $$\exists c, n_{0} \in \mathbb{R}^{+}, \forall n \in \mathbb{N},
> n \geq n_{0} \implies g(n) \geq c \cdot f(n)$$

**Theta.** *(Upper and lower bound)*
> [!note]
> Let $f, g : \mathbb{N} \rightarrow \mathbb{R}^{\geq 0}$.
> We say **$g$ is Theta of $f$** and write $g \in \Theta (f)$ when:
> $$\exists c_{1}, c_{2}, n_{0} \in \mathbb{R}^{+}, 
> \forall n \in \mathbb{N},
> n \geq n_{0} \implies
> c_{1} \cdot f(n) \leq g(n) \leq c_{2} \cdot f(n)$$

## Growth Hierarchy

![progression_of_functions.png|center|400](/img/user/900%20Archive/UofT/Y1/Files/CSC110/progression_of_functions.png)

**Theorem. (Elementary function growth hierarchy theorem.)**
For all $a, b, \in \mathbb{R}^{+}$, the following statements are true:
	1. If $a > 1$ and $b > 1$, then $\log_{a}{n} \in \Theta(\log_{b}{n})$
	2. If $a < b$, then $n^{a} \in \mathcal{O}(n^{b})$ and $n^{a} \notin \Omega ( n^{b} )$
	3. If $a < b$, then $a^{n} \in \mathcal{O}(b^{n})$ and $a^{n} \notin \Omega (b^{n})$
	4. If $a > 1$, then $1 \in \mathcal{O}(\log_{a}{n})$ and $1 \notin \Omega (\log_{a}{n})$
	5. If $a > 1$, $\log_{a}{n} \in \mathcal{O}(n^{b})$ and $\log_{a}{n} \notin \Omega (n^{b})$
	6. If $b > 1$, then $n^{a} \in \mathcal{O} (b^{n})$ and $n^{a} \notin \Omega (b^{n})$
{ #9d9a95}


> [!note]
> **Theorem.** For all $f : \mathbb{N} \rightarrow \mathbb{R}^{\geq 0}$, $f \in \Theta(f)$.
> - This also implies that $f \in \mathcal{O}(f)$ and $f \in \Omega (f)$

> [!note] 
> **Theorem.** For all $f, g : \mathbb{N} \rightarrow \mathbb{R}^{\geq 0}, g \in \mathcal{O}(f) \iff f \in \Omega (g)$.
> - $g \in \Theta (f) \iff f \in \Theta (g)$

> [!note] 
> **Theorem.** For all $f, g, h : \mathbb{N} \rightarrow \mathbb{R}^{\geq 0}$:
> - If $f \in \mathcal{O}(g)$ and $g \in \mathcal{O}(h)$, $f \in \mathcal{O}(h)$
> - If $f \in \Omega (g)$ and $g \in \Omega(h)$, then $f \in \Omega (h)$
> - If $f \in \Theta (g)$ and $g \in \Theta (h)$, then $f \in \Theta (h)$

**Definition of sum of functions.**
$$\forall n \in \mathbb{N}, (f + g)(n) = f(n) + g(n)$$
> [!note] 
> **Theorem.** For all $f, g , h : \mathbb{N} \rightarrow \mathbb{R}^{\geq 0}$, the following hold:
> 1. If $f \in \mathcal{O}(h)$ and $g \in \mathcal{O}(h)$, then $f + g \in \mathcal{O}(h)$
> 2. If $f \in \Omega (h)$, then $f + g \in \Omega (h)$
> 3. If $f \in \Theta (h)$ and $g \in \mathcal{O}(h)$, then $f + g \in \Theta (h)$

# Run time of built-in data operations

| Operation                                        | Running time ($n =$ `len(lst)`) |
| ------------------------------------------------ | ------------------------------- |
| List indexing (`lst[i]`)                         | $\Theta (1)$                    |
| List index assignment (`lst[i] = ...`)           | $\Theta (1)$                    |
| List insertion at end (`lst.append(...)`)        | $\Theta (1)$                    |
| List deletion at end (`lst.pop()`)               | $\Theta (1)$                    |
| List insertion at index $i$ (`lst.insert(i, ...)`) | $\Theta (n-i)$                  |
| List deletion at index $i$ (`lst.pop(i)`)             | $\Theta (n-i)$                  |

**The following methods are all $\Theta (1)$.**
- Sets
	- `x in my_set`
	- `set.add`
	- `set.remove`
- Dictionaries
	- `k in my_dict`
	- `dct[k]`
	- `dct[k] = ...`
- Data classes
	- Attribute lookup (`david.age`)
	- Attribute assignment (`david.age = ...`)

**Built-in aggregation functions.**
- `sum`, `max`, `min`
	- $\Theta (n)$
- `len`
	- $\Theta (1)$
- `any`/`all`
	- Special cases: use worst-case analysis

# 10. Abstraction, Classes, and Software Design

**Defining a custom data type for a person.**

```python
class Person:
    """A custom data type that represents data for a person."""
    given_name: str
    family_name: str
    age: int
    address: str

    def __init__(self, given_name: str, family_name: str, age: int, address: str) -> None:
        """Initialize a new Person object."""
        self.given_name = given_name
        self.family_name = family_name
        self.age = age
        self.address = address

    def increase_age(self, years: int) -> None:
        """Add the given number of years to this person's age.

        >>> david = Person('David', 'Liu', 100, '40 St. George Street')
        >>> Person.increase_age(david, 10)
        >>> david.age
        110
        """
        self.age = self.age + years
```

- Remember to make the first parameter of method functions is an **instance of the class** `self`
- Docstring refers to “this $x$” instead of “the given $x$”
- Doctest example uses explicit class dot notation style

## Stack

**Implementation of Stack ADT where the end of the list `_items` is the top of the Stack.**

```python
class Stack1:
    """A last-in-first-out (LIFO) stack of items.

    Stores data in first-in, last-out order. When removing an item from the
    stack, the most recently-added item is the one that is removed.

    >>> s = Stack1()
    >>> s.is_empty()
    True
    >>> s.push('hello')
    >>> s.is_empty()
    False
    >>> s.push('goodbye')
    >>> s.pop()
    'goodbye'
    """
    # Private Instance Attributes:
    #   - _items: The items stored in the stack. The end of the list represents
    #     the top of the stack.
    _items: list

    def __init__(self) -> None:
        """Initialize a new empty stack.
        """
        self._items = []

    def is_empty(self) -> bool:
        """Return whether this stack contains no items.
        """
        return self._items == []

    def push(self, item: Any) -> None:
        """Add a new element to the top of this stack.
        """
        self._items.append(item)

    def pop(self) -> Any:
        """Remove and return the element at the top of this stack.

        Preconditions:
            - not self.is_empty()
        """
        return self._items.pop()
```

## Custom Exceptions

```python
class EmptyStackError(Exception):
	"""Exception raised when calling pop on an empty stack."""


class Stack1:
	"""Omitted repeated code of implementation
	"""
	def pop(self) -> Any:
		"""Remove and return the element at the top of this stack.
		
		Raise an EmptyStackError if this stack is empty.
		"""
		if self.is_empty():
			raise EmptyStackError
		else:
			return self._items.pop()
```

- `EmptyStackError` becomes apart of the *public interface* of `Stack.pop` method

### Testing exceptions

```python
# Assuming our stack implementation is contained in a file stack.py.
from stack import Stack, EmptyStackError
import pytest


def test_empty_stack_error() -> None:
    """Test that popping from an empty stack raises an exception."""
    s = Stack()

    with pytest.raises(EmptyStackError):
        s.pop()
```

- `with` acts as an assertion
	- expects `EmptyStackError` to be raised by the body of the `with` block

### Handling exceptions

**Try-except statement.**
```python
try:
	<statement> 
	...
except <ExceptionClass>:
	<statement>
	...
```

- Body of `try` is executed
- If exception is raised and has type `<ExceptionClass>`, the `except` both is executed and continues with the rest

## Queues

```python
class Queue:
    """A first-in-first-out (FIFO) queue of items.

    Stores data in a first-in, first-out order. When removing an item from the
    queue, the most recently-added item is the one that is removed.

    >>> q = Queue()
    >>> q.is_empty()
    True
    >>> q.enqueue('hello')
    >>> q.is_empty()
    False
    >>> q.enqueue('goodbye')
    >>> q.dequeue()
    'hello'
    >>> q.dequeue()
    'goodbye'
    >>> q.is_empty()
    True
    """
    # Private Instance Attributes:
    #   - _items: The items stored in this queue. The front of the list represents
    #             the front of the queue.
    _items: list

    def __init__(self) -> None:
        """Initialize a new empty queue."""
        self._items = []

    def is_empty(self) -> bool:
        """Return whether this queue contains no items.
        """
        return self._items == []

    def enqueue(self, item: Any) -> None:
        """Add <item> to the back of this queue.
        """
        self._items.append(item)

    def dequeue(self) -> Any:
        """Remove and return the item at the front of this queue.

        Raise an EmptyQueueError if this queue is empty.
        """
        if self.is_empty():
            raise EmptyQueueError
        else:
            return self._items.pop(0)
    
    
class EmptyQueueError(Exception): 
	"""Exception raised when calling dequeue on an empty queue.""" 
	
	def __str__(self) -> str: 
		"""Return a string representation of this error.""" 
		return 'dequeue may not be called on an empty queue'
```

- Can also be implemented such that the beginning of the list is the front of the queue
	- Changes run time for `enqueue` and `dequeue`

## Priority queues

**Implementation of Priority Queue ADT.**

```python
class PriorityQueue:
    """A queue of items that can be dequeued in priority order.

    When removing an item from the queue, the highest-priority item is the one
    that is removed.
    """
    # Private Instance Attributes:
    #   - _items: a list of the items in this priority queue
    _items: list[tuple[int, Any]]

    def __init__(self) -> None:
        """Initialize a new and empty priority queue."""
        self._items = []

    def is_empty(self) -> bool:
        """Return whether this priority queue contains no items.
        """
        return self._items == []

	def enqueue(self, priority: int, item: Any) -> None: 
		"""Add the given item with the given priority to this priority queue.
		 """ 
		 i = 0 
		 while i < len(self._items) and self._items[i][0] < priority: 
			 # Loop invariant: all items in self._items[0:i] 
			 # have a lower priority than <priority>. 
			 i = i + 1 
		 
		 self._items.insert(i, (priority, item))
	
    def dequeue(self) -> Any:
        """Remove and return the item with the highest priority.

        Raise an EmptyPriorityQueueError when the priority queue is empty.
        """
        if self.is_empty():
            raise EmptyPriorityQueueError
        else:
            _priority, item = self._items.pop()
            return item
```

## Inheritance

**Implementing an abstract class of Stack ADT. Consists only of the *public interface*.**

```python
from typing import Any


class Stack:
    """A last-in-first-out (LIFO) stack of items.

    This is an abstract class. Only subclasses should be instantiated.
    """

    def is_empty(self) -> bool:
        """Return whether this stack contains no items.
        """
        raise NotImplementedError

    def push(self, item: Any) -> None:
        """Add a new element to the top of this stack.
        """
        raise NotImplementedError

    def pop(self) -> Any:
        """Remove and return the element at the top of this stack.

        Raise an EmptyStackError if this stack is empty.
        """
        raise NotImplementedError


class EmptyStackError(Exception):
    """Exception raised when calling pop on an empty stack."""
```

- **Abstract** methods are not implemented and raise a `NotImplementedError`

**Inheritance of the Stack ADT.**

```python
class Stack1(Stack):
    def __init__(self) -> None:
        """Initialize a new empty stack.
        """
        self._items = []

    def is_empty(self) -> bool:
        """..."""
        return self._items == []

    def push(self, item: Any) -> None:
        """..."""
        self._items.append(item)

    def pop(self) -> Any:
        """..."""
        return self._items.pop()


class Stack2(Stack):
    def __init__(self) -> None:
        """Initialize a new empty stack.
        """
        self._items = []

    def is_empty(self) -> bool:
        """..."""
        return self._items == []

    def push(self, item: Any) -> None:
        """..."""
        self._items.insert(0, item)

    def pop(self) -> Any:
        """..."""
        return self._items.pop(0)
```

**`isinstance()` of Stack**

Every instance of the subclass is an instance of the superclass.

```python
>>> stack1 = Stack1()
>>> isinstance(stack1, Stack1)
True
>>> isinstance(stack1, Stack)
True
>>> isinstance(stack1, Stack2)
False
```
### Terminology
- superclass or parent class
- subclass or child class

### Inheritance contract
- Subclass must implement all abstract methods from superclass

## Polymorphism

- **polymorphic** function
	- Can take as inputs values of different concrete data types and select a specific method based on the type of input
		- e.g., function type is `Stack` and `Iterable` versus `Stack1` and `list` respectively