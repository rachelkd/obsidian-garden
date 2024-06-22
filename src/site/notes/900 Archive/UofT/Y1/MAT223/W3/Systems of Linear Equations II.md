---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/mat-223/w3/systems-of-linear-equations-ii/","created":"2024-01-26T10:43:56.596-08:00","updated":"2024-03-09T13:51:48.863-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/MAT223/_MAT223 Notes\|3]]
Course: #MAT223
Date: 2024-01-26
Module: A2

---

Consider the system
$$\begin{cases}
x - 2y &= 0 \\
2x - 4y &= 0
\end{cases}
\tag 1$$
Notice that every solution to the first equation is a solution to the second equation.
$$\begin{bmatrix} 
1 & 2 & | & 0  \\
2 & -4 & | & 0
\end{bmatrix}
\to 
\begin{bmatrix} 
1 & 2 & | & 0  \\
0 & 0 & | & 0
\end{bmatrix}
$$

$$
\begin{cases}
x - 2y &= 0  \\
0x + 0y &= 0
\end{cases}
$$
- One equation is **redundant**.
- (1) is an example of an **underdetermined** system of equations
	- not enough info to uniquely determine the value of each variable
- Solution set is a line, found by graphing

$$
\begin{align*}
x - 2y &= 0\\
\vec{d} &= \begin{bmatrix} 2 \\ 1 \end{bmatrix} \\
\vec{x} &= t \begin{bmatrix} 2 \\ 1 \end{bmatrix} && \text{(vector form of line)}
\end{align*}
$$
