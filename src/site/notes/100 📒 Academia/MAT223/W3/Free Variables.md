---
{"dg-publish":true,"dg-path":"academia/MAT223/W3/Free Variables.md","permalink":"/academia/mat-223/w3/free-variables/","created":"2024-01-26T16:59:01.291-05:00","updated":"2024-01-28T14:42:39.343-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/MAT223/_MAT223 Notes\|3]]
Course: #MAT223
Date: 2024-01-26
Module: A2

---

- **free variable** of a system of linear equations
	- the variables (or the columns) of the augmented matrix, which *do not contain a leading one* when the matrix is put into RREF.

## Complete systems

### Example. Solving systems with infinite solutions.

Consider the system
$$\begin{cases} x &+& 3y &= 2 \\ 2x &+& 6y &= 4 \end{cases}$$
$$\begin{bmatrix} 1 & 2 & | & 2 \\ 2 & 6 & | & 4 \end{bmatrix} \to \begin{bmatrix} 1 & 3 & | & 2 \\ 0 & 0 & | & 0 \end{bmatrix}$$
- From the RREF, we are left with $x + 3y = 2$.
- Cannot solve for both $x$ and $y$ based on the original system → use a notational trick: introduce arbitrary equation $y = t$

$$\begin{cases} x + 3y &= 2 \\ 2x + 6y &= 4 \\ y &= t \end{cases} \to \begin{cases} x + 3y &= 2 \\ y &=t \end{cases}$$
$$\vec{x} = \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 2 - 3t \\ t \end{bmatrix} = t \begin{bmatrix} -3 \\ 1 \end{bmatrix} + \begin{bmatrix} 2  \\ 0 \end{bmatrix}$$
- $y$ is a free variable, $t$ is a parameter

## Inconsistent systems

Consider the augmented matrices $A$ and $B$.
$$
\begin{align*}
A = \begin{bmatrix} 
1 & 2 & | & -1 \\ 
0 & 0 & | & 0
\end{bmatrix}
&&
B &= \begin{bmatrix} 
1 & 2 & | & 0 \\
0 & 0 & | & 1
\end{bmatrix}
\end{align*}
$$
Both matrices lack a pivot in the second column.
Note that $A$ is consistent, whereas $B$ is inconsistent (empty solution set).

| Consistent | Pivots | Number of solutions |
| ---- | ---- | ---- |
| False | At least one column doesn’t have a pivot | 0 |
| True | Every column has a pivot | 1 |
| True | At least one column doesn’t have a pivot | Infinite |

> [!note] 
> **Theorem.**
> A system of linear equations has either 0 solutions, 1 solution, or infinitely many solutions.

