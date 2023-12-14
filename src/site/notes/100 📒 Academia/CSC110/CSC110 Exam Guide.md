---
{"dg-publish":true,"dg-path":"academia/CSC110/CSC110 Exam Guide.md","permalink":"/academia/csc-110/csc-110-exam-guide/","created":"2023-12-12T21:56:56.817-05:00","updated":"2023-12-13T19:21:58.332-05:00"}
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

