---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/mat-223/w7/linear-transformations/","created":"2024-02-24T20:38:06.162-08:00","updated":"2024-02-25T12:13:13.238-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/MAT223/_MAT223 Notes\|7]]
Course: #MAT223
Date: 2024-02-24
Module: 9

---
# Introduction

- **transformations**/map
	- another word for a function
	- describes vectors changing

- e.g., $$\begin{align*} S : \mathbb{R}^{2} \to \mathbb{R}^{2} && \text{defined by} && \begin{bmatrix} x \\ y \end{bmatrix} \mapsto \begin{bmatrix} 2x \\ y \end{bmatrix}\end{align*}$$
	- stretches all vectors in the $\vec{e}_{1}$ direction by a factor of 2
	- ![7_stretch.png|400](/img/user/900%20Archive/UofT/Y1/Files/MAT223/7_stretch.png)
- e.g., $$\begin{align*} T : \mathbb{R}^{2} \to \mathbb{R}^{2} && \text{defined by} && \begin{bmatrix} x \\ y \end{bmatrix} \mapsto \begin{bmatrix} x + 3 \\ y \end{bmatrix}\end{align*}$$
	- translates all vectors 3 units in the $\vec{e}_{1}$ direction
	- ![7_translation.png|300](/img/user/900%20Archive/UofT/Y1/Files/MAT223/7_translation.png)

# Images of Sets

Recall $S : \mathbb{R}^{2} \to \mathbb{R}^{2} \text{ defined by } \begin{bmatrix} x \\ y \end{bmatrix} \mapsto \begin{bmatrix} 2x \\ y \end{bmatrix}$.
Let $\mathcal{C}$ be the circle of radius 1 centred at $\vec{0}$. Applying $S$ to all the vectors that make up $\mathcal{C}$ produces an ellipse.

![|center|500](https://i.imgur.com/G9Fyw23.png)
*Applying a transformation to a specific set of vectors is called taking the image of a set.*

### Definition of image of a set. #definition 
Let $L : \mathbb{R}^{n} \to \mathbb{R}^{m}$ be a transformation and let $X \subseteq \mathbb{R}^{n}$ be a set. The **image of the set $X$ under $l$**, denoted $L(X)$, is the set
$$L(X) = \{ \vec{y} \in \mathbb{R}^{m} : \vec{y} = L(\vec{x}) \text{ for some } \vec{x} \in X \}$$
- In plain language:
	- the image of set $X$ under a transformation $L$ is the set of all outputs of $L$ when the inputs come from $X$

### Describing geometric figures using transformations
Images allow one to describe complication geometric figures in terms of an original figure and a transformation, e.g.,
Let $\mathcal{R} : \mathbb{R}^{2} \to \mathbb{R}^{2}$ be the rotation counter clockwise by 30º.
Let $X = \{ x \vec{e}_{1} + y \vec{e}_{2} : x, y \in [0, 1] \}$ be the filled-in unit square.
Then $R(X)$ is the filled-in unit square that meets the x-axis at an angle of 30º.

![|center|400](https://i.imgur.com/LDfPpmV.png)

# Linear Transformations

- Main focus of linear algebra
	- *linear* transformations
		- special category of transformations
	- includes rotations, dilations (stretches), shears, etc.

![7_linear_transformations.png](/img/user/900%20Archive/UofT/Y1/Files/MAT223/7_linear_transformations.png)

### Definition of linear transformation. #definition 
Let $V$ and $W$ be subspaces.
A function $T : V \to W$ is called a *linear transformation* if
$$\begin{align*} T(\vec{u} + \vec{v}) = T(\vec{u}) + T(\vec{v}) && \text{and} && T(\alpha \vec{v}) = \alpha T(\vec{v}) \end{align*}$$

## Theorems about linear transformations

![|center|500](https://i.imgur.com/l1QWVN8.png)
*The look of a linear transformation.*

> [!note]
> **Theorem.**
> If $T : \mathbb{R}^{n} \to \mathbb{R}^{m}$ is a linear transforamtion, then $T(\vec{0}) = \vec{0}$

> [!note]
> **Theorem.**
> If $T : \mathbb{R}^{n} \to \mathbb{R}^{m}$ is a linear transformation, then $T$ takes lines to lines (or points).

> [!note]
> **Theorem.**
> If $T : \mathbb{R}^{n} \to \mathbb{R}^{m}$ is a linear transformation, then $T$ takes parallel lines to parallel lines (or points).

> [!note]
> **Theorem.**
> If $T : \mathbb{R}^{n} \to \mathbb{R}^{m}$ is a linear transformation, then $T$ takes subspaces to subspaces.

# Linear Transformations and Proofs

Let $T : \mathbb{R}^{n} \to \mathbb{R}^{n}$ be defined by $T(\vec{v}) = 2 \vec{v}$. To show that $T$ is linear, we need to show that for all inputs $\vec{x}$ and $\vec{y}$ and for *all* scalars $\alpha$ we have $$\begin{align} T(\vec{x} + \vec{y}) = T(\vec{x}) + T(\vec{y}) && \text{and} && T(\alpha \vec{x}) = \alpha T(\vec{x}) \end{align}$$
**Proof.**
Let $\vec{x}, \vec{y} \in \mathbb{R}^{n}$. Let $\alpha$ be a scalar. By applying the definition of $T$, we see $$T(\vec{x} + \vec{y}) = 2(\vec{x} + \vec{y}) = 2 \vec{x} + 2 \vec{y} = T(\vec{x}) + T(\vec{y})$$
Similarly, $$T(\alpha \vec{x}) = 2(\alpha \vec{x}) = \alpha (2\vec{x}) = \alpha T(\vec{x})$$

Since $T$ satisfies the two properties of a linear transformation, $T$ is a linear transformation.
<div class="right-align"> <span class="math display">\blacksquare</span> </div>
