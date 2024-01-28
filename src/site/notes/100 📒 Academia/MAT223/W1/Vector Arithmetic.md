---
{"dg-publish":true,"dg-path":"academia/MAT223/W1/Vector Arithmetic.md","permalink":"/academia/mat-223/w1/vector-arithmetic/","created":"2024-01-10T14:02:50.338-05:00","updated":"2024-01-28T14:42:39.355-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/MAT223/_MAT223 Notes\|1]]
Course: #MAT223
Module: [[100 📒 Academia/MAT223/Modules/Module 1 - Sets, Vectors, and Notation\|Module 1 - Sets, Vectors, and Notation]]

---
# Adding vectors
Vectors provide a natural way to give directions.
- Suppose $\vec{e_{1}}$ points one kilometre eastwards and $\vec{e_{2}}$ points one kilometre northwards
- Express “3 kilometres east and 2 kilometres north” mathematically:
	- $$3 \vec{e_{1}} + 2 \vec{e_{2}}$$
	- This describes a new vector: Let $P$ be the point at 3-east and 2-north. Then, $$\overrightarrow{OP} = 3 \vec{e_{1}} + 2 \vec{e_{2}}$$
	- Let $\vec{r}$ point north with a length of 10 kilometres. Then, 
	  $$\begin{align*} \overrightarrow{OP} &= 3 \vec{e_{1}} + \frac{1}{5} \vec{r} \\
	  \implies \vec{r} &= 10 \vec{e_{2}}
	  \end{align*}$$
- How to add $\vec{w} = \vec{u} + \vec{v}$?
	- the sum represents the displacement vector created by:
		1. first displacing along $\vec{u}$
		2. then displacing along $\vec{v}$
	- ![vector_addition.png|300](/img/user/Files/MAT223/vector_addition.png)
- What is $\vec{v} + (-\vec{v})$?
	- displacement with zero magnitude: $\vec{0}$
- What is the **zero vector**?
	- vector with no magnitude
	- noted by $\vec{0}$
	- What is the direction of the zero vector?
		- points in every direction/no direction
- Laws of vector arithmetic:
	- 
		$$\begin{align*}
		(\vec{u} + \vec{v}) + \vec{w} &= \vec{u} + (\vec{v} + \vec{w}) && \text{(Associativity)} \\
		\vec{u} + \vec{v} &= \vec{v} + \vec{u} && \text{(Communtativity)} \\
		\alpha (\vec{u} + \vec{v}) &= \alpha \vec{u} +  \alpha \vec{v} && \text{(Distributivity)} \\
		(\alpha \beta)\vec{v} &= \alpha(\beta \vec{v}) && \text{(Associativity II)} \\
		(\alpha + \beta) \vec{v} &= \alpha \vec{v} + \beta \vec{v} && \text{(Distributivity II)}
		\end{align*}$$

# Scalar multiplication
- For a vector $\vec{v}$ and a scalar $\alpha > 0$, the vector $\vec{w} = \alpha \vec{v}$ is the vector…
	- pointing in the same direction as $\vec{v}$ 
	- with length scaled by $\alpha$
	- $\implies || \vec{w} || = \alpha || \vec{v} ||$
- What is $-\vec{v}$?
	- vector of the same length as $\vec{v}$
	- but pointing in the exact opposite direction
- Visual representation of scalar multiplication:
	- ![scalar_multiplication.png|400](/img/user/Files/MAT223/scalar_multiplication.png)

> [!note]
> **Takeaway.** You add vectors tip to tail and scale vectors by changing their length.
# Linear combinations
Scalar multiplication and vector addition are grouped under **linear combinations**.
- What is a **linear combination**?
	- A linear combination of the vectors $\vec{v}, \vec{2}, ..., \vec{v_{n}}$ is a vector
		$$\vec{w} = \alpha_{1} \vec{v_{1}} + \alpha_{2} \vec{v_{2}} + ... + \alpha \vec{v_{n}}$$
	- The **coefficients** of the linear combination are:
		- scalars $\alpha_{1}, \alpha_{2}, ..., \alpha_{n}$

## Coordinates and the standard basis
- What is the notation for the standard, flat, Euclidean plane?
	- $\mathbb{R}^{2}$
- What are the **standard basis vectors** for $\mathbb{R}^{2}$?
	- $\vec{e_{1}}$ points one unit in the direction of the positive $x$-axis
	- $\vec{e_{2}}$ points one unit in the direction of the positive $y$-axis

> [!note]
> **Takeaway.** Every vector in $\mathbb{R}^{2}$ can be written uniquely as a linear combination of the standard basis vectors.
{ #cccba2}


- What are the **standard coordinates** of the vector $\vec{w} = \alpha \vec{e_{1}} + \beta \vec{e_{2}}$?
	- $(\alpha, \beta)$
	- $\langle \alpha, \beta \rangle$
	- $\begin{bmatrix} \alpha & \beta \end{bmatrix}$
	- $\begin{bmatrix} \alpha \\ \beta \end{bmatrix} \iff \vec{v} = \alpha \vec{e_{1}} + \beta \vec{e_{2}}$

