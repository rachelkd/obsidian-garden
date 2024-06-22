---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/mat-223/w1/compute-linear-combinations-of-vectors/","created":"2024-01-10T21:48:11.047-08:00","updated":"2024-01-28T11:58:49.298-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/MAT223/_MAT223 Notes\|1]]
Course: #MAT223
Module: [[900 Archive/UofT/Y1/MAT223/Modules/Module 1 - Sets, Vectors, and Notation\|Module 1 - Sets, Vectors, and Notation]]

---
# Solving problems with coordinates

##### Example. 
Suppose $\vec{u} = \begin{bmatrix} a \\ b \end{bmatrix}$ and $\vec{v} = \begin{bmatrix} x \\ y \end{bmatrix}$.
Then,
$$\vec{u} = \vec{v} 
\iff \begin{bmatrix} a \\ b \end{bmatrix} = \begin{bmatrix} x \\ y \end{bmatrix}
\iff a = x \text{ and } b = y$$
$$\vec{u} + \vec{v} = \begin{bmatrix} a \\ b \end{bmatrix} + \begin{bmatrix} x \\ y \end{bmatrix}
= \begin{bmatrix} a+x \\ b + y \end{bmatrix}$$
For any scalar $t$, $$t \vec{u} = t \cdot \begin{bmatrix} a \\ b \end{bmatrix} = \begin{bmatrix} ta \\ tb \end{bmatrix}$$
##### Example. Is $\vec{r}$ a linear combination of $\vec{x}$ and $\vec{y}$?
Let $\vec{x} = \vec{e_{1}} - \vec{e_{2}}$, $y = 3 \vec{e_{1}} - \vec{e_{2}}$, and $\vec{r} = 2 \vec{e_{1}} + 2 \vec{e_{2}}$.

> [!note]
> **Definition.** $\vec{r}$ is a linear combination of $\vec{x}$ and $\vec{y}$ if there exists scalars $a$ and $b$ such that
> $$\vec{r} = a \vec{x} + b \vec{y}$$

Using coordinates,
$$\begin{bmatrix} 2 \\ 2 \end{bmatrix} 
= a \begin{bmatrix} 1 \\ -1 \end{bmatrix} + b \begin{bmatrix} 3 \\ -1 \end{bmatrix}
= \begin{bmatrix} a+3b \\ -a-b \end{bmatrix}$$
Then, we determine if the systems of equations
$$\bigg\{
\begin{align*}
a + 3b &= 2 \\
-a-b &= 2
\end{align*}$$
has a solution.
$$\implies a = -4 \text{ and } b = 2$$
Thus, $\vec{r}$ is a linear combination of $\vec{x}$ and $\vec{y}$.

##### Example. Computing vectors in higher dimensions

> [!note]
> **Takeaway.** We use $\mathbb{R}^{n}$ to notate the $n$-th dimensional Euclidean space. The standard basis for $\mathbb{R}^{n}$ is $\vec{e_{1}}, \vec{e_{2}}, \cdots, \vec{e_{n}}$.
> - Every vector in $\mathbb{R}^n$ can be written uniquely as a linear combination of the standard basis ([[900 Archive/UofT/Y1/MAT223/W1/Vector Arithmetic#^cccba2\|Vector Arithmetic]])

Let $\vec{x}, \vec{y} \in \mathbb{R}^{3}$ be given by $\vec{x} = 2 \vec{e_{1}} - \vec{e_{3}}$ and $\vec{y} = 6 \vec{e_{2}} + 3 \vec{e_{3}}$. Compute $\vec{z} = \vec{x} + 2 \vec{y}$.
$$\vec{z} = \vec{x} + 2\vec{y} = 
\begin{bmatrix} 2 \\ 0 \\ -1 \\  \end{bmatrix} + 2 \begin{bmatrix} 0 \\ 6 \\ 3 \end{bmatrix}
= \begin{bmatrix} 2 \\ 0 \\ -1 \\  \end{bmatrix} + \begin{bmatrix} 0 \\ 12 \\ 6 \end{bmatrix}
= \begin{bmatrix} 2 \\ 12 \\ 5 \end{bmatrix}
= 2 \vec{e_{1}} + 12 \vec{e_{2}} + 5 \vec{e_{3}}$$




