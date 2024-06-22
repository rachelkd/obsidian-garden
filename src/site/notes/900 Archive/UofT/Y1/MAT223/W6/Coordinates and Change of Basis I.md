---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/mat-223/w6/coordinates-and-change-of-basis-i/","created":"2024-02-11T13:33:42.778-08:00","updated":"2024-02-11T14:26:24.945-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/MAT223/_MAT223 Notes\|6]]
Course: #MAT223
Date: 2024-02-11
Module: 8

---

Recall that when we write $\vec{x} = \begin{bmatrix} 2 \\ 3 \end{bmatrix}$, we mean $\vec{x} = 2 \vec{e_{1}} + 3 \vec{e_{2}}$.
The numbers 2 and 3 are the coordinates of the vector $\vec{x}$ *with respect to the standard basis*.

- Subspaces have many bases → 
	- possible to represent a single vector in *many different ways* as coordinates with respect to different bases

### Representing vectors with respect to different bases. #example 

Let $\vec{x} = \begin{bmatrix} 2 \\ 3 \end{bmatrix}$, let $\mathcal{E} = \{ \vec{e_{1}}, \vec{e_{2}} \}$ be the standard basis for $\mathbb{R}^{2}$, and let $\mathcal{B} = \{ \vec{b}_{1}, \vec{b}_{2} \}$, where $\vec{b}_{1} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$ and $\vec{b}_{2} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$ be another basis for $\mathbb{R}^{2}$.

The coordinates of $\vec{x}$ with respect to $\mathcal{E}$ are (2, 3), but the coordinates of $\vec{x}$ with respect to $\mathcal{B}$ are (1, 2).

![](https://i.imgur.com/otJQnRu.png)

### Representation in a Basis. #definition 

> [!note]
> Let $\mathcal{B} = \{ \vec{b}_{1}, \dots, \vec{b}_{n} \}$ be a basis for a subspace $V$ and let $\vec{v} \in V$.
> The **representation of $\vec{v}$ in the $\mathcal{B}$ basis**, denoted $[\vec{v}]_{\mathcal{B}}$ is the column matrix
> $$[\vec{v}]_{\mathcal{B}} = \begin{bmatrix} \alpha_{1} \\ \vdots \\ \alpha_{n} \end{bmatrix}$$
> where $\alpha_{1}, \dots, \alpha_{n}$ uniquely satisfy $\vec{v} = \alpha_{1} \vec{b}_{1} + \dots + \alpha_{n} \vec{b}_{n}$.
> Conversely,
> $$\begin{bmatrix} \alpha_{1} \\ \vdots \\ \alpha_{n} \end{bmatrix}_{\mathcal{B}} = \alpha_{1} \vec{b}_{1} + \dots + \alpha_{n} \vec{b}_{n}$$
> is the notation for the linear combination of $\vec{b}_{1}, \dots, \vec{b}_{n}$ with coefficients $\alpha_{1}, \dots, \alpha_{n}$

### Find the representation in a basis given an equation. #example 

Let $\mathcal{E} = \{\vec{e}_{1}, \vec{e}_{2}\}$ be the standard basis of $\mathbb{R}^{2}$ and let $\mathcal{C} = \{\vec{c}_{1}, \vec{c}_{2}\}$ where $\vec{c}_{1} = \vec{e}_{1} + \vec{e}_{2}$ and $\vec{c}_{2} = 3 \vec{e}_{2}$ be another basis for $\mathbb{R}^{2}$. Given that $\vec{v} = 2\vec{e}_{1} - \vec{e}_{2}$, find $[\vec{v}]_{\mathcal{E}}$ and $[\vec{v}]_{\mathcal{C}}$.

Since $\vec{v} = 2 \vec{e}_{1} - \vec{e}_{2}$, we know $$[\vec{v}]_{\mathcal{E}} = \begin{bmatrix} 2 \\ -1 \end{bmatrix}$$
To find $[\vec{v}]_{\mathcal{C}}$, we need to write $\vec{v}$ as a linear combination of $\vec{c}_{1}$ and $\vec{c}_{2}$.
Suppose $$\vec{v} = x \vec{c}_{1} + y\vec{c}_{2}$$for some unknown scalars $x$ and $y$. We know $$\vec{v} = 2 \vec{e}_{1} - \vec{e}_{2}$$
and $$\vec{v} = x \vec{c}_{1} + y \vec{c}_{2} = x(\vec{e}_{1} + \vec{e}_{2}) + 3y \vec{e}_{2} = x \vec{e}_{1} + (x + 3y) \vec{e}_{2}$$
Combining these two equations, we have $$\begin{align*} 2 \vec{e}_{1} - \vec{e}_{2} = x \vec{e}_{1} + (x + 3y) \vec{e}_{2} \\ (x-2) \vec{e}_{1} + (x + 3y + 1) \vec{e}_{2} = \vec{0} \end{align*}$$
Since $\vec{e}_{1}$ and $\vec{e}_{2}$ are linearly independent, we know that $(x - 2) = 0$ and $(x + 3y + 1) = 0$.
$$\begin{cases} &x & & &= 2 \\ &x &+ &3y &= -1 \end{cases}$$
$$\vec{v} = 2 \vec{c}_{1} - \vec{c}_{2}$$
$$[\vec{v}]_{\mathcal{C}} = \begin{bmatrix} 2 \\ -1 \end{bmatrix}$$
---
### Notation convention
- We have been writing $\vec{x} = \begin{bmatrix} 2 \\ 3 \end{bmatrix}$ to mean $\vec{x} = 2 \vec{e}_{1} + 3 \vec{e}_{2}$
- Given the representation-in-a-basis notation, we should be writing:
	- $$\vec{x} = \begin{bmatrix} 2 \\ 3 \end{bmatrix}_{\mathcal{E}}$$ where $\mathcal{E}$ is the standard basis for $\mathbb{R}^{2}$
- If a problem involves only one basis, we may write $\begin{bmatrix} x \\ y \end{bmatrix}$ to mean $\begin{bmatrix} x \\ y \end{bmatrix}_{\mathcal{E}}$, where $\mathcal{E}$ is the standard basis
- If there are multiple bases in a problem, we will write $\begin{bmatrix} x \\ y \end{bmatrix}_\mathcal{X}$ to specify a vector in coordinates relative to a particular basis $\mathcal{X}$
