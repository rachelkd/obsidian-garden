---
{"dg-publish":true,"dg-path":"academia/MAT223/W8/Range and Nullspace of a Linear Transformation.md","permalink":"/academia/mat-223/w8/range-and-nullspace-of-a-linear-transformation/","created":"2024-03-03T21:02:01.353-05:00","updated":"2024-03-09T20:43:17.828-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/MAT223/_MAT223 Notes\|8]]
Course: #MAT223
Date: 2024-03-03
Module: 11

---
# Range

```ad-def
title: Definition of **range** #definition 
The **range** (or *image*) of a linear transformation $T : V \to W$ is the set of vectors that $T$ can output. That is, $$\text{range}(T) = \{ \vec{y} = T \vec{x} \text{ for some } \vec{x} \in V \}$$
```

- Range of a linear transformation has the same definition as “range of a function”
	- Set of all outputs
- Range of a linear transformation = *image* of the entire domain with respect to that linear transformation
- Range of a linear transformation is ==always a subspace==

> [!seealso] Theorem.
> Let $T : \mathbb{R}^{n} \to \mathbb{R}^{m}$ be a linear transformation. Then $\text{range}(T) \subseteq \mathbb{R}^{m}$ is a subspace.

#### Prove that $\text{range}(T) \subseteq \mathbb{R}^{m}$ is a subspace.

![](https://i.imgur.com/8Vtvkhy.png)

## Rank

- We are often interested in how big they subspaces are
	- Recall *[[100 📒 Academia/MAT223/W5/Basis and Dimensions\|dimension]]* of a subspace
- For transformations, we have **rank**

> [!abstract] Definition of **rank of a linear transformation**. #definition 
> For a linear transformation $T : \mathbb{R}^{n} \to \mathbb{R}^{m}$, the **rank** of $T$, denoted $\text{rank}(T)$, is the *dimension of the range of $T$*

- Rank of a linear transformation can measure…
	- its complexity, or
	- compressibility
- e.g., Rank 0 transformation must send all vectors to $\vec{0}$
- Rank 1 transformation must send all vectors to a line

### Example. Finding range and rank of a transformation. #example 

Let $\mathcal{P}$ be the plane given by $x+y+z=0$, and let $T : \mathbb{R}^{3} \to \mathbb{R}^{3}$ be a projection onto $\mathcal{P}$.
Find $\text{range}(T)$ and $\text{rank}(T)$.

First we will find $\text{range}(T)$. Since $T$ is a projection onto $\mathcal{P}$, we know $\text{range}(T) \subseteq \mathcal{P}$. Because $T(\vec{p}) = \vec{p}$  for all $\vec{p} \in \mathcal{P}$, we know $\mathcal{P} \subseteq \text{range}(T)$. So, $$\text{range}(T) = \mathcal{P}$$
Since $\mathcal{P}$ is a plane, we know $\text{dim}(\mathcal{P}) = 2 = \text{dim}(\text{range}(T)) = \text{rank}(T)$.

# Null space

> [!seealso] Definition of nullspace. #definition 
> The **null space** or (**kernel**) of a linear transformation $T : V \to W$ is the set of vectors that get mapped to the zero vector under $T$. That is, $$\text{null}(T) = \{ \vec{x} \in V : T \vec{x} = \vec{0} \}$$

- We see null spaces when we ask: “Are these column vectors linearly independent?”

> [!seealso] Theorem.
> Let $T : \mathbb{R}^{n} \to \mathbb{R}^{m}$ be a linear transformation. Then $\text{null}(T) \subseteq \mathbb{R}^{n}$ is a subspace.

![](https://i.imgur.com/9jcJdLR.png)

> [!seealso] Definition of nullity. #definition 
> For a linear transformation $T : \mathbb{R}^{n} \to \mathbb{R}^{m}$, the **nullity** of $T$, denoted $\text{nullity}(T)$, is the dimension of the null space of $T$.

### Example. Finding the null space and nullity of $T$. #example 

Let $\mathcal{P}$ be the plane given by $x+y+z=0$, and let $T : \mathbb{R}^{3} \to \mathbb{R}^{3}$ be projection onto $\mathcal{P}$.
Find $\text{null}(T)$ and $\text{nullity}(T)$. 

Since $T$ is a projection onto $\mathcal{P}$ (and because $\mathcal{P}$ passes through $\mathcal{P}$), we know every normal vector $\mathcal{P}$ will get sent to $\vec{0}$ when $T$ is applied. Besides $\vec{0}$ itself, these are the only vectors that get sent to $\vec{0}$. Therefore, $$\text{null}(T) = \{ \text{normal vector } \cup \{ \vec{0} \} = \text{span} \Bigg\{  \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} \Bigg\}$$
Since $\text{null}(T)$ is a line, we know $\text{nullity}(T) = 1$.

# Fundamental Subspaces of a Matrix

- Every matrix is associated with three fundamental subspaces:
	- row space
	- column space
	- null space

> [!seealso] Definition of fundamental subspaces. #definition 
> Associated with any matrix $M$ are three fundamental subspaces:
> 1. The **row space** of $M$, denoted row($M$), is the span of the rows of $M$
> 2. The **column space** of $M$, denoted col($M$), is the span of the columns of $M$
> 3. The **null space** of $M$, denoted null($M$), is the set of solutions to $M \vec{x} = \vec{0}$

### Find the null space of a given $M$. #example 
Find the null space of $M = \begin{bmatrix} 1 & 2 & 5 \\ 2 & -2 & -2 \end{bmatrix}$.
To find the null space of $M$, we need to solve the homogeneous matrix equation $M \vec{x} = \vec{0}$. Row reducing, we see $$\text{rref}(M) = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 2 \end{bmatrix}$$$$\begin{cases} x+z = 0 \\ y + 2z = 0 \end{cases}$$and so the $z$ column is a free variable column. Therefore, the complete solution can be expressed in vector form as $$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = t \begin{bmatrix} -1 \\ -2 \\ 1 \end{bmatrix}$$and so null($M$) $= \text{span}\Bigg\{\begin{bmatrix} -1 \\ -2 \\ 1 \end{bmatrix} \Bigg \}$
### Finding row space and column space of $M$. #example 
![](https://i.imgur.com/IX71reN.png)

> [!seealso] **Definition of transpose.** #definition 
> Let $M$ be an $n \times m$ matrix defined by $$M = \begin{bmatrix} a_{11} & a_{12} & a_{13} & \dots & a_{1m} \\ a_{21} & a_{22} & a_{23} & \dots & a_{2m} \\ \vdots & \vdots  & \vdots & \ddots  & \vdots \\ a_{n1} & a_{n2} & a_{n3} & \dots & a_{nm} \end{bmatrix}$$
> The **transpose** of $M$, notated $M^{T}$, is the $m \times n$ matrix produced by swapped the rows and columns of $M$. That is 
> $$M^{T} = \begin{bmatrix} a_{11} & a_{21} & \dots & a_{n1} \\ a_{12} & a_{22} & \dots & a_{n2} \\ a_{13} & a_{23} & \dots & a_{n3} \\ \vdots & \vdots & \ddots & \vdots \\ a_{1m} & a_{2m} & \dots & a_{nm} \end{bmatrix}$$
{ #997948}


Using *transpose*, we can make statements like $$\begin{align*} \text{col}(M) = \text{row}(M^{T}) && \text{and} && \text{row}(M) = \text{col}(M^{T}) \end{align*}$$
> [!abstract] **Theorem. (Row-Col Dimension)**
> For a matrix $A$, the dimension of the row space equals the dimension of the column space.

#### Proof of theorem
![](https://i.imgur.com/EREbfpI.png)


# Equations, Null Spaces, and Geometry

p. 130-

> [!abstract] **Theorem.**
> Let $A$ be a matrix, $\vec{b}$ be a vector, and let $\vec{p}$ be a particular solution to $A \vec{x} = \vec{b}$.
> Then, the set of all solutions to $A \vec{x} = \vec{b}$ is $$\text{null}(A) + \{ \vec{p} \}$$

\*Note that this is set addition.