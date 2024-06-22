---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/mat-223/w6/matrix-representations-of-systems-of-linear-equations/","created":"2024-02-11T11:26:16.457-08:00","updated":"2024-02-11T13:34:11.226-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/MAT223/_MAT223 Notes\|6]]
Course: #MAT223
Date: 2024-02-11
Module: 7

---

## Represent a system of linear equations as a matrix equation

Consider the system
$$\begin{cases} x + 2y - 2z = -15 \\ 2x+y-5z = -21 \\ x-4y+z = 18 \end{cases} \tag{1}$$
which is equivalent to the vector equation
$$\begin{bmatrix} x+2y-2z \\ 2x+y-5z  \\ x-4y + z \end{bmatrix} = \begin{bmatrix} -15 \\ -21 \\ 18 \end{bmatrix}$$
We can rewrite (1) using [[Matrix Arithmetic\|matrix-vector multiplication]]:
$$\underbrace{\begin{bmatrix} 1 & 2 & -2 \\ 2 & 1 & -5 \\ 1 & -4 & 1 \end{bmatrix}}_{A} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} -15 \\ -21 \\ 18 \end{bmatrix}$$
- **coefficient matrix**
	- Matrix $A$ on the left
	- made up of the coefficients from equation (1)
- By using coefficient matrices, every system of linear equations can be rewritten as…
	- a *single matrix equation* of the form $A \vec{x} = \vec{b}$, where $A$ is a coefficient matrix, $\vec{x}$ is a column vector of variables, and $\vec{b}$ is a column vector of constants

---
### Rewriting equation as a single matrix equation. #example 

Consider the one-equation system
$$\begin{cases} x - 4y + z = 5 \end{cases} \tag{2}$$
and the two-equation system
$$\begin{cases} x - 4y + z = 5 \\ y -z = 9\end{cases} \tag{3}$$We can rewrite (2) as
$$\begin{bmatrix} 1 & -4 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 5 \end{bmatrix}$$
Similarly, we can rewrite (3) as
$$\begin{bmatrix} 1 & -4 & 1 \\ 0 & 1 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 5 \\ 9 \end{bmatrix}$$

---
# Interpretations of Matrix Equations

- The solution set to a system of linear equations like $$\begin{cases} x + 2y - 2z = -15 \\ 2x + y - 5z = -21 \\ x - 4y + z = 18 \end{cases} \tag{4}$$ can be interpreted as:
	- The intersection of three planes (or hyperplanes if there were more variables)
	- Each equation/row specifies a plane, and the solution set is the intersection of all these planes

> [!note]
> Rewriting a system of equations in matrix form gives two additional ways to interpret the solution set

### The column picture

$$\begin{bmatrix} 1 & 2 & -2 \\ 2 & 1 & -5 \\ 1 & -4 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = x \begin{bmatrix} 1 \\ 2 \\ 1 \end{bmatrix} + y \begin{bmatrix} 2 \\ 1 \\ -4 \end{bmatrix} + z \begin{bmatrix} -2 \\ -5 \\ 1 \end{bmatrix} = \begin{bmatrix} -15 \\ -21 \\ 18 \end{bmatrix}$$

*What coefficients allow $\begin{bmatrix} 1 \\ 2 \\ 1 \end{bmatrix}, \begin{bmatrix} 2 \\ 1 \\ -4 \end{bmatrix}, \begin{bmatrix} -2 \\ -5 \\ 1 \end{bmatrix}$ to form $\begin{bmatrix} -15 \\ -21 \\ 18 \end{bmatrix}$ as a linear combination?*

- The above is equivalent to asking:
	- *What are the solutions to system (4)?*

### The row picture

Let $\vec{r}_{1}, \vec{r}_{2}, \vec{r}_{3}$ be the rows of the coefficient matrix for system (9). Then, system (9) is equivalent to
$$\begin{bmatrix} 1 & 2 & -2 \\ 2 & 1 & -5 \\ 1 & -4 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} \underline{\vec{r}_{1}} \\ \underline{\vec{r}_{2}} \\ \vec{r}_{3} \end{bmatrix} \vec{x} = \begin{bmatrix} \vec{r}_{1} \cdot \vec{x} \\ \vec{r}_{2} \cdot \vec{x} \\ \vec{r}_{3} \cdot \vec{x} \end{bmatrix} = \begin{bmatrix} -15 \\ -21 \\ 18 \end{bmatrix}$$
- We can interpret solutions to system (4) as…
	- vectors whose dot product with $\vec{r}_{1}$ is $-15$, whose dot product with $\vec{r}_{2}$ is $-21$, and whose dot product with $\vec{r}_{3}$ is $18$
		- given geometric interpretation → powerful perspective

### Interpreting homogeneous systems

Consider the homogeneous system/matrix equation
$$\begin{align*} \begin{cases} x + 2y - 2z &= 0 \\ 2x + y - 5z &= 0 \\ x - 4y + z &= 0 \end{cases} && \implies && \begin{bmatrix} 1 & 2 & -2 \\
2 & 1 & -5 \\ 1 & -4 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} &= \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix} \tag{5}\end{align*}$$
- Column interpretation of equation (5):
	- What linear combinations of the column vectors of $A$ give $\vec{0}$?
		- i.e., whether column vectors of A are linearly independent
- Row interpretation of equation (5):
	- What vectors are simultaneously *orthogonal* to $\vec{r}_{1} \vec{r}_{2}, \vec{r}_{3}$?

> [!note]
> **Takeaway.**
> - There are three ways to interpret solutions to a matrix equation $Ax = \vec{b}$:
> 	1. the intersection of hyperplanes specified by the rows
> 	2. what linear combinations of the columns of $A$ give $\vec{b}$
> 	3. what vectors yield the entries of $\vec{b}$ when dot product-ed with the rows of $A$

# Examples

### Find all vectors orthogonal to $\vec{a}$ and $\vec{b}$. #example 

![|center|800](https://i.imgur.com/ciCeqJS.png)

The row picture is particularly applicable when trying to find normal vectors.

### Find a normal vector for a hyperplane, and write the hyperplane in normal form. #example 

![|center|800](https://i.imgur.com/2B9wY6S.png)

![|center|800](https://i.imgur.com/2PsanxM.png)

