---
{"dg-publish":true,"permalink":"/000-zettlekasten/invertibility-and-linear-transformations/","created":"2024-03-13T17:38:08.042-04:00","updated":"2024-03-13T17:48:08.169-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/MAT223/_MAT223 Notes\|9]]
Course: #MAT223
Date: 2024-03-13
Module: 12

---

Recall from [[000 Zettlekasten/Invertible Functions\|Invertible Functions]]:

<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/000-zettlekasten/invertible-functions/#34e6f3" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



```ad-def
title: One-to-one.
Let $f : X \to Y$ be a function.
- We say $f$ is **one-to-one** (or **injective**) if distinct inputs to $f$ produce distinct outputs
- That is, $f(x) = f(y) \implies x = y$

```

</div></div>


- i.e., the ==solution to $\mathcal{T}(\vec{x}) = \vec{b}$ is always unique.==
- Remember the [[100 📒 Academia/MAT223/W8/Range and Nullspace of a Linear Transformation#Equations, Null Spaces, and Geometry\|set of all solutions]] to $\text{T}(\vec{x}) = \vec{b}$ can be expressed as $$null(\mathcal{T}) = \{\vec{p}\}$$
Then, we know
> [!important] $\mathcal{T}$ is **one-to–one** $\iff$ nullity($\mathcal{T}$) $= 0$

> [!important] If $\mathcal{T}$ is **onto**, then range($\mathcal{T}$) $= \mathbb{R}^{m}$, and so rank($\mathcal{T}$) $= m$

