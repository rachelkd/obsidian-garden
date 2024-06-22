---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/mat-223/w7/matrix-transformations/","created":"2024-02-25T11:29:41.564-08:00","updated":"2024-02-25T12:00:52.904-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/MAT223/_MAT223 Notes\|7]]
Course: #MAT223
Date: 2024-02-25
Module: 9

---

- Already know two ways to interpret matrix multiplication:
	1. Linear combinations of the columns
	2. Dot products with the rows
	3. …

# The third interpretation

Let $M = \begin{bmatrix} 1 & 2 \\ -1 & 1 \end{bmatrix}$.
For a vector $\vec{v} \in \mathbb{R}^{2}$, $M \vec{v}$ is another vector in $\mathbb{R}^{2}$.
We can think of multiplication by $M$ as a ==transformation on $\mathbb{R}^{2}$==.

Define $$\begin{align} T : \mathbb{R}^{2} \to \mathbb{R}^{2} && \text{defined by} && T(\vec{x}) = M \vec{x} \end{align}$$
- What do we call $T$?
	- A **matrix transformation**
		- since defined by $T$, a matrix

> [!note]
> **Takeaway.**
> - All matrix transformations are linear transformations.
> - Most linear transformations are matrix transformations.

---
- What is the matrix transformation given by “The linear combination $T : \mathbb{R}^{2} \to \mathbb{R}^{2}$”
	- The matrix transformation given by $\begin{bmatrix} 2 & 0 \\ 0 & 3 \end{bmatrix}$

> [!note] 
> Matrices and linear transformations are closely related, but they are *not* the same thing.

## Correct ways to specify a linear transformation using a matrix

- For a matrix $M$, the following are correct:
	- The transformation $T$ defined by $T(\vec{x}) = M \vec{x}$
	- The transformation given by multiplication by $M$
	- The transformation induced by $M$
	- The matrix transformation given by $M$
	- The linear transformation whose matrix is $M$

# Finding a matrix for a linear transformation

Every linear transformation from $\mathbb{R}^{n}$ to $\mathbb{R}^{m}$ has a matrix.

Let $T : \mathbb{R}^{n} \to \mathbb{R}^{m}$ be a linear transformation. Since $T$ inputs vectors with $n$ coordinates and outputs vectors with $m$ coordinates, we know any matrix for $T$ must be $m \times n$.

1. Create an $m \times n$ matrix of variables
2. Use known input-output pairs for $T$ to set up a system of equations involving the unknown variables
3. Solve for the variables

### Example. Finding a matrix for a linear transformation. #example 

Let $\mathcal{T} : \mathbb{R}^{2} \to \mathbb{R}^{2}$ be defined by $\mathcal{T} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 2x+y \\ x \end{bmatrix}$. Find a matrix, $M$, for $\mathcal{T}$.

Since $\mathcal{T}$ is a transformation for $\mathbb{R}^{2} \to \mathbb{R}^{2}$, $M$ will be a $2 \times 2$ matrix.
Let $$M = \begin{bmatrix} a & b \\ c & d \end{bmatrix}.$$
We know $$\begin{align} \mathcal{T} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 1 \end{bmatrix} && \text{and} && \mathcal{T} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix} \end{align}.$$
Since $M$ is a matrix for $\mathcal{T}$, we know $\mathcal{T}\vec{x} = M \vec{x}$ for all $\vec{x}$, so $$M \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} a + b \\ c + d \end{bmatrix} = \begin{bmatrix} 3 \\ 1 \end{bmatrix}$$
and
$$M \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} b \\ d \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}.$$
This gives us the system of equations $$\begin{cases} a + b = 3 \\ c + d = 1 \\ b = 1 \\ d = 0 \end{cases}$$
and solving this system tells us $$M = \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} 2 & 1 \\ 1 & 0 \end{bmatrix}$$
