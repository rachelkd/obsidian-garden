---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w10/invertible-functions/","created":"2024-03-09T17:47:48.164-08:00","updated":"2024-06-22T13:52:07.978-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/MAT223/_MAT223 Notes\|9]]
Course: #MAT223
Date: 2024-03-09
Module: 12

---

```ad-def
title: Identity Function.
Let $X$ be a set. The **identity function** with domain and codomain $X$, notated $\text{id} : X \to X$, is the function satisfying $\text{id}(x) = x$for all $x \in X$.

```

- Identity function is the function that does *nothing* to its input
- Often used to prove a function or composition of functions does nothing to its input by showing it is *equal* to the identity function

> [!abstract] A function is *invertible* if…
> - it can be undone
> - There exists an inverse function that when composed with the original function produces the identity function and vice versa.

```ad-def
title: Inverse Function.
Let $f : X \to Y$ be a function.
- We say $f$ is **invertible** if there exists a function $g : Y \to X$ so that $f \circ g = \text{id}$ and $g \circ f = \text{id}$.
- in this case, we call $g$ an *inverse* of $f$ and write $f^{-1} = g.$

```

- For a function to be *invertible*, it must be ==one-to-one==

```ad-def
title: One-to-one.
Let $f : X \to Y$ be a function.
- We say $f$ is **one-to-one** (or **injective**) if distinct inputs to $f$ produce distinct outputs
- That is, $f(x) = f(y) \implies x = y$

```
{ #34e6f3}


- When a function $f$ is *one-to-one*, there exists a function $g$ so that $g \circ f = \text{id}$
    - But, we also need $f \circ g = \text{id}$ → $f$ needs to be *onto*

```ad-def
title: Onto.
Let $f : X \to Y$ be a function.
- We say $f$ is **onto** (or **surjective**) if every point in the codomain of $f$ gets mapped to
- That is, $\text{range}(f) = Y$

```

- Every invertible function is one-to-one and onto
- Every one-to-one and onto function is invertible

This has implications for the rank and nullity of linear transformations.