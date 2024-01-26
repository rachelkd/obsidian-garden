---
{"dg-publish":true,"permalink":"/000-zettlekasten/class-5-spans-and-linear-independence/","created":"2024-01-24T11:22:33.112-05:00","updated":"2024-01-24T11:53:15.722-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/MAT223/_MAT223 Notes\|3]]
Course: #MAT223
Date: 2024-01-24
Module: 3

---

Consider vectors $\vec{u} = \begin{bmatrix} 2 \\ -2 \end{bmatrix}$ and $\vec{v} = \begin{bmatrix} -1 \\ 1 \end{bmatrix}$.
### Example. Vector in a span?

#### Is $\begin{bmatrix} 1 \\ 0  \end{bmatrix} \in span \{ \vec{u}, \vec{v} \}$?

If $\begin{bmatrix} 1 \\ 0 \end{bmatrix} \in span \{ \vec{u}, \vec{v} \}$, then $\exists a,b \in \mathbb{R}$ such that
$$
\begin{bmatrix} 1 \\ 0 \end{bmatrix} = a \begin{bmatrix} 2 \\ -1 \end{bmatrix} + b \begin{bmatrix} -1 \\ 1 \end{bmatrix} \\
$$
$$\begin{align*}

&\begin{cases} 
2a - b = 1\\
-2a + b = 0
\end{cases} \\

&\implies 0 = 1
\end{align*}$$
Thus, this system of equations is **inconsistent**.



