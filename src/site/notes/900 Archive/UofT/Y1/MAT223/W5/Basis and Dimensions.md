---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/mat-223/w5/basis-and-dimensions/","created":"2024-02-03T16:01:24.925-08:00","updated":"2024-02-03T17:03:52.900-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/MAT223/_MAT223 Notes\|5]]
Course: #MAT223
Date: 2024-02-03
Module: 5

---
From [Video](https://youtu.be/ejVv43lileM).

- **basis**
	- A *basis* for a subspace $\mathcal{V}$ is a **linearly independent spanning set**
- **dimension**
	- A *dimension* of a subspace $\mathcal{V}$ is the **size of a basis for $\mathcal{V}$**

### Basis and Dimension for $\mathbb{R}^2$ #example 

Basis $\Bigg \{ \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \begin{bmatrix} 0 \\ 1 \end{bmatrix} \Bigg \}$ or $\Bigg \{  \begin{bmatrix} 1 \\ 1 \end{bmatrix} , \begin{bmatrix} 1 \\ -1 \end{bmatrix} \Bigg \}$ or …

Dimension = 2

### Find a basis and the dimension of … #example 

$\mathcal{W} = \text{span} \Bigg \{ \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}, \begin{bmatrix} 1 \\ -2 \\ -1 \end{bmatrix}, \begin{bmatrix} 2 \\ -4 \\ -2 \end{bmatrix} , \begin{bmatrix} -2 \\ 5 \\ 3 \end{bmatrix} , \begin{bmatrix} 3 \\ -6 \\ -2 \end{bmatrix} \Bigg\}$

Find a maximal linearly independent subset (i.e., we need to find a linearly independent set of vectors that spans $\mathcal{W}$).

$$\begin{bmatrix} 0 & 1 & 2 & -2 & 3 & | & 0 \\ 0 & -2 & -3 & 5 & -6 & | & 0 \\ 0 & -1 & -2 & 3 & -2 & | & 0 \end{bmatrix}$$
$$~ \begin{bmatrix} 0 & 1 & 2 & 0 & 0 & | & 0 \\ 0 & 0 & 0 & 1 & 0 & | & 0 \\ 0 & 0 & 0 & 0 & 1 & | & 0 \end{bmatrix}$$
So, $$\mathcal{B} = \Bigg \{ \begin{bmatrix} 1 \\ -2 \\ -1 \end{bmatrix}, \begin{bmatrix} -2 \\ 5 \\ 3 \end{bmatrix}, \begin{bmatrix} 3 \\ -6 \\ -2 \end{bmatrix} \Bigg \}$$
$$\text{dim}(\mathcal{W}) = 3$$
$$\mathcal{W} \text{ is a subspace of } \mathbb{R}^{3} \implies \mathcal{W} = \mathbb{R}^3$$
