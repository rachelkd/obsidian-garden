---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/mat-223/w7/composition-of-linear-transformations/","created":"2024-02-25T12:16:51.625-08:00","updated":"2024-02-25T13:59:54.081-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/MAT223/_MAT223 Notes\|7]]
Course: #MAT223
Date: 2024-02-25
Module: 10

---

### Definition of Composition of functions #definition 
Let $f : A \to B$ and $g : B \to C$. 
The *composition* of $g$ and $f$, notated $g \circ f$, is the function $h : A \to C$ defined by $$h(x) = g \circ f(x) = g(f(x)).$$
# Breaking transformations into simple transformations

Define $$\begin{align} \mathcal{T} : \mathbb{R}^{2} \to \mathbb{R}^{2} && \text{by} && \mathcal{T}(\vec{x}) = \begin{bmatrix} \sqrt{2}  &  - \sqrt{2} \\ \sqrt{2} / 2 & \sqrt{2} / 2 \end{bmatrix} \vec{x} \end{align}$$
Notice that $\mathcal{T} = \mathcal{S} \circ \mathcal{R}$, where $\mathcal{R}$ was rotation counter-clockwise by 45º, and $S$ was a stretch in the $\vec{e}_{1}$ direction by a factor of 2.

### Example. Breaking down a transformation. #example 
![](https://i.imgur.com/wEAX6cb.png)
![](https://i.imgur.com/DBw7sen.png)

# Compositions and Matrix Products

### Example. Finding the matrix for a composition. #example 

Let $\mathcal{A} : \mathbb{R}^{2} \to \mathbb{R}^{2}$ and $\mathcal{B} : \mathbb{R}^{2} \to \mathbb{R}^{2}$ be matrix transformations with matrices $$\begin{align} M_{A}= \begin{bmatrix} 1 & 2 \\ 0 & 2 \end{bmatrix} && \text{and} && M_{B} = \begin{bmatrix} -1 & -1 \\ -2 & 0 \end{bmatrix} \end{align}.$$
Note that $\mathcal{A} \neq M_{A}$!
Define $\mathcal{T} = \mathcal{A} \circ \mathcal{B}$. 

#### Method 1. Using traditional methods.
From [[900 Archive/UofT/Y1/MAT223/W7/Matrix Transformations#Example. Finding a matrix for a linear transformation. example\|Matrix Transformations]].

Since $\mathcal{T} : \mathbb{R}^{2} \to \mathbb{R}^{2}$ is a linear transformation, we know $\mathcal{T}$ has a  matrix $M_{T}$ which is $2 \times 2$.
First, compute some input-output pairs for $\mathcal{T}$.
$$\begin{align*} \mathcal{T} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \mathcal{A} \bigg( \mathcal{B} \begin{bmatrix} 1 \\ 0 \end{bmatrix} \bigg) = \mathcal{A} \begin{bmatrix} -1 \\ -2 \end{bmatrix} = \begin{bmatrix} -5 \\ -4 \end{bmatrix} && \text{and} && \mathcal{T} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \mathcal{A} \bigg(\mathcal{B} \begin{bmatrix} 0 \\ 1 \end{bmatrix} \bigg) = \mathcal{A} \begin{bmatrix} -1 \\ 0 \end{bmatrix} &= \begin{bmatrix} -1 \\ 0 \end{bmatrix} \end{align*}$$
Let $M_{T} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$. Then,
$$\begin{align} \begin{bmatrix} a \\ c \end{bmatrix} = M_{T} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} -5 \\ -4 \end{bmatrix} && \text{and} && \begin{bmatrix} b \\ d \end{bmatrix} = M_{T} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} -1 \\ 0 \end{bmatrix} \end{align}$$
So, $$M_{T} = \begin{bmatrix} -5 & -1 \\ -4 & 0 \end{bmatrix}.$$
#### Method 2. Using $M_{A}$ and $M_B$ to find $M_T$.
By definition, $$\begin{align} \mathcal{A} \vec{x} = M_{A} \vec{x} && \text{and} && \mathcal{B} \vec{x} = M_{B} \vec{x} \end{align},$$
since $\mathcal{A}$ and $\mathcal{B}$ are matrix transformations. Then, $$\mathcal{A}(\mathcal{B} \vec{x}) = M_{A}(M_{B} \vec{x}).$$
Since matrix multiplication is *associative*, we get $$M_{A}(M_{B} \vec{x}) = (M_{A} M_{B}) \vec{x}.$$
Thus, $M_{A}M_{B}$ must be a matrix for $\mathcal{A} \circ \mathcal{B} = \mathcal{T}$.
$$M_{A}M_{B} = \begin{bmatrix} 1 & 2 \\ 0 & 2 \end{bmatrix}\begin{bmatrix} -1 & -1 \\ -2 & 0 \end{bmatrix} = \begin{bmatrix} -5 & -1 \\ -4 & 0 \end{bmatrix} = M_{T}$$

## A theorem.

> [!note]
> **Theorem.**
> If $\mathcal{P} : \mathbb{R}^{a} \to \mathbb{R}^{b}$ and $\mathcal{Q} : \mathbb{R}^{c} \to \mathbb{R}^{a}$ are matrix transformations with matrices $M_{P}$ and $M_{Q}$, then $\mathcal{P} \circ \mathcal{Q}$ is a matrix transformation whose matrix is given by the matrix product $M_{P}M_{Q}$.

