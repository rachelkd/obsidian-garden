---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/mat-223/w9/range-vs-column-space-and-null-space-vs-null-space/","created":"2024-03-09T13:57:56.487-08:00","updated":"2024-03-09T17:46:30.104-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/MAT223/_MAT223 Notes\|8]]
Course: #MAT223
Date: 2024-03-09
Module: 11

---
# Introduction

Review [[900 Archive/UofT/Y1/MAT223/W6/Coordinates and Change of Basis I\|Coordinates and Change of Basis I]].


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/900-archive/uof-t/y1/mat-223/w9/transformations-and-matrices/#80bf1a" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



> [!abstract] **Induced transformation.** #definition 
> Let $M$ be an $n \times m$ matrix. We say $M$ *induces* a linear transformation $\mathcal{T}_{M} : \mathbb{R}^{m} \to \mathbb{R}^{n}$ defined by $[\mathcal{T}_{M} \vec{v}]_{\mathcal{E}'} = M[\vec{v}]_\mathcal{E}$ where $\mathcal{E}$ is the standard basis for $\mathbb{R}^{m}$ and $\mathcal{E}'$ is the standard basis for $\mathbb{R}^{n}$

</div></div>


Let $M = \begin{bmatrix} C_1 & C_2 & \dots & C_m \end{bmatrix}$ be a $m \times m$ matrix with columns $C_{1}, \dots, C_{m}$.
Let $\mathcal{T}$ be the transformation induced by $M$.
- The [[900 Archive/UofT/Y1/MAT223/W8/Range and Nullspace of a Linear Transformation#Fundamental Subspaces of a Matrix\|column space]] of $M$ is the set of all linear combinations of the columns of $M$
- Note that the columns of $M$ are lists of numbers → need to turn them into vectors

$$\text{col}(M) = \text{span}\{[C_1]_{\mathcal{E}}, [C_2]_{\mathcal{E}}, \dots, [C_m]_{\mathcal{E}} \}$$
By definition of matrix multiplication we know that $$M \begin{bmatrix} 1 \\ 0 \\ \vdots \\ 0 \end{bmatrix} = M[\vec{e}_1]_{\mathcal{E}} = C_{1}$$and in general, $M[\vec{e}_{i}] = C_{i}$. By the definition of induced transformation, we know $$[\mathcal{T}(\vec{e}_{i})]_{\mathcal{E}} = M[\vec{e}_{1}]_{\mathcal{E}} = C_{i}$$and so $$\mathcal{T}(\vec{e}_{i}) = [C_{i}]_{\mathcal{E}}.$$
Every input to $\mathcal{T}$ can be written as a linear combination of $\vec{e}_{i}$’s → every output of $\mathcal{T}$ can be written as a linear combination of $[C_{i}]_{\mathcal{E}}$’s (since $\mathcal{T}$ is linear). $${\text{range}(\mathcal{T}) = \text{col}(M)}$$
```ad-thm
title: Theorem.
$${\text{range}(\mathcal{T}) = \text{col}(M)}$$
```

### Range and rank of a matrix transformation. #example

![](https://i.imgur.com/iRDWv22.png)

# Theorems
Proofs are on p. 134.

```ad-thm
title: Theorem.
Let $M$ be a matrix. The *[[Range and Nullspace of a Linear Transformation#Rank|rank]]* of $M$ is equal to the number of pivots in rref$(M)$.

```

##### Proof.
- We know that: rank($M$) = dim(range($\mathcal{T}_{M}$)) = dim(col($M$)) where $\mathcal{T}_{M}$ is the transformation induced by $M$.
- A basis for col($M$) consists of a maximal linearly independent subset of the columns of $M$
    - To find such a subset, we row reduce $M$ and look at the columns of $M$ that correspond to pivot columns of rref($M$)

> [!abstract] Takeaway.
> If $\mathcal{T}$ is a linear transformation and $M$ is a corresponding matrix, $${\text{range}(\mathcal{T}) = \text{col}(M)},$$and answering questions about $M$ answers questions about $\mathcal{T}$.

```ad-thm
title: Theorem. (Null-space-null-space relationship)
If $\mathcal{T}$ is a linear transformation with matrix $M$, then $$\text{null}(\mathcal{T}) = \text{null}(M)$$

```

```ad-thm
title: Theorem.
Let $\mathcal{T}$ be a linear transformation and let $M$ be a matrix for $\mathcal{T}$.
Then, $\text{nullity}(\mathcal{T})$ is equal to the number of free variable columns in $\text{rref}(M)$.

```

```ad-thm
title: Theorem.
For a matrix $A$, we have $\text{rank}(A) = \text{rank}(A^{T})$

```
See [[900 Archive/UofT/Y1/MAT223/W8/Range and Nullspace of a Linear Transformation#^997948\|transpose definition]].

# Rank-Nullity Theorem

```ad-thm
title: Theorem (Rank-nullity Theorem for Matrices).
For a matrix $A$, $$\text{rank}(A) + \text{nullity}(A) = \text{\# of columns in } A$$

```

```ad-thm
title: Theorem (Rank-nullity Theorem for Linear Transformations).
Let $\mathcal{T}$ be a linear transformation. Then $$\text{rank}(\mathcal{T}) + \text{nullity}(\mathcal{T}) = \text{dim}(\text{domain of } \mathcal{T})$$

```
