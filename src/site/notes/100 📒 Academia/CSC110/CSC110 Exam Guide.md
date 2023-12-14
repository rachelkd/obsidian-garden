---
{"dg-publish":true,"dg-path":"academia/CSC110/CSC110 Exam Guide.md","permalink":"/academia/csc-110/csc-110-exam-guide/","created":"2023-12-12T21:56:56.817-05:00","updated":"2023-12-13T23:43:24.926-05:00"}
---

#CSC110

---
```table-of-contents
```
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
