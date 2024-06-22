---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/mat-223/w4/normal-form-of-lines-and-planes/","created":"2024-01-28T11:50:32.442-08:00","updated":"2024-01-28T15:16:32.696-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/MAT223/_MAT223 Notes\|4]]
Course: #MAT223
Date: 2024-01-28
Module: 4

---
# Normal vector
### Find normal vector for a line $l$. #example 

Let $n = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$.
- If a vector $\vec{v} = \begin{bmatrix} v_{1} \\ v_{2} \end{bmatrix}$ is **[[900 Archive/UofT/Y1/MAT223/W4/Orthogonality\|orthogonal]]** to $\vec{n}$, then:
	- $$\vec{n} \cdot \vec{v} = v_{1} + 2 v_{2} = 0$$
	- $$v_{1} = -2v_{2}$$
	- Is $v_{2}$ a free variable, then? #question
	- i.e., $\vec{v}$ is orthogonal to $\vec{n}$ exactly when $\vec{v} \in \text{span} \bigg\{ \begin{bmatrix} -2 \\ 1 \end{bmatrix} \bigg\}$
- The set of all vectors orthogonal to $\vec{n}$ forms a line $l = \text{span} \bigg\{ \begin{bmatrix} -2 \\ 1 \end{bmatrix} \bigg\}$
- We call $\vec{n}$ a **normal vector** for $l$

![4_normal_vector.png|center|400](/img/user/900%20Archive/UofT/Y1/Files/MAT223/4_normal_vector.png)
### Definition of normal vector. #definition 

> [!note] 
> **Normal Vector.** A *normal vector* to a line (or plane or hyperplane) is a non-zero vector that is orthogonal to all direction vectors for the line (or plane or hyperplane).

# Normal form

- In $\mathbb{R}^{2}$, normal vectors provide another way to describe lines
	- incl. lines which do not pass through the origin

### Find normal form of a line not rooted at origin. #example 

Let $n = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$. Fix $\vec{p} = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.

Draw the set of all vectors orthogonal to $\vec{n}$ but *root all the vectors at $\vec{p}$*.

![4_normal_form.png|center|300](/img/user/900%20Archive/UofT/Y1/Files/MAT223/4_normal_form.png)

We get $l_{2} = \text{span} \bigg\{ \begin{bmatrix} -2 \\ 1 \end{bmatrix} \bigg\} + \bigg\{ \begin{bmatrix} 1 \\ 1 \end{bmatrix} \bigg\} = l + \{ \vec{p} \}$.
- i.e., parallel line through the origin translated by $\vec{p}$

### Relating back to dot products and normal vectors.
By definition, for every $\vec{v} \in l$, we have $\vec{n} \cdot \vec{v} = 0$. Since $l_{2}$ is a translate of $l$ by $\vec{p}$, we can say:
- For every $\vec{v} \in l_{2}$,
	- $$\vec{n} \cdot (\vec{v} - \vec{p}) = 0$$
	- We say that the line is expressed in **normal form**.

### Definition of normal form of a line. #definition 

> [!note] 
> **Normal Form of a Line.**
> A line $l \subseteq \mathbb{R}^{2}$ is expressed in **normal form** if there exist vectors $\vec{n} \neq 0$ and $\vec{p}$ so that $l$ is the solution set to the equation
> $$\vec{n} \cdot (\vec{x} - \vec{p}) = 0$$
> The equation $\vec{n} \cdot (\vec{x} - \vec{p}) = 0$ is called the **normal form of $l$**.

### Find vector form and normal form of a plane passing through three points. #example 

Find vector form and normal form of the plane $\mathcal{P}$ passing through the points $A = (1, 0, 0), B = (0, 1, 0), C = (0, 0, 1)$.

- Vector form requires a point on the plane and two direction vectors:
	- $$\begin{align*} \vec{d_{1}}  = \overrightarrow{AB} = \begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix} && \vec{d_{2}} = \overrightarrow{AC} = \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix} \end{align*}$$
	- Using point $A$, $$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = t \begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix} + s \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix} + \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$$
- Normal form requires a normal vector for $\mathcal{P}$
	- By inspection, we see that $\vec{n} = (1,1,1)$ is a normal vector to $\mathcal{P}$
		- Could also solve the system $\vec{n} \cdot \vec{d_{1}} = 0$ and $\vec{n} \cdot \vec{d_{2}} = 0$ to find a normal vector
	- $$\begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} \cdot \Bigg( \begin{bmatrix} x \\ y \\ z \end{bmatrix} - \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} \Bigg) = 0$$

# Hyperplanes

- In $\mathbb{R}^{2}$, only *lines* have a normal form
- In $\mathbb{R}^{3}$, only *planes* have a normal form
- We call objects in $\mathbb{R}^{n}$ which have a normal form **hyperplanes**

### Definition of hyperplane. #definition 

> [!note]
> **Hyperplane.** The set $X \subseteq \mathbb{R}^{n}$ is called a **hyperplane** if there exists $\vec{n} \neq 0$ and $\vec{p}$ so that $X$ is the set of solutions to the equation
> $$\vec{n} \cdot (\vec{x} - \vec{p}) = 0$$

- Hyperplanes always have dimension one less than the space they’re contained in
	- Hyperplanes in $\mathbb{R}^{2}$ are (1D) lines
	- … in $\mathbb{R}^{3}$ are (2D) planes
	- … in $\mathbb{R}^{4}$ are (3D) volumes

# Hyperplanes and Linear Equations

Suppose $\vec{n}, \vec{p} \in \mathbb{R}^{3}$ and $n \neq 0$. Then, solutions to
$$\vec{n} \cdot (\vec{x} - \vec{p}) = 0$$
define a plane $\mathcal{P}$. But, $$\vec{n} \cdot (\vec{x} - \vec{p}) = 0 \iff \vec{n} \cdot \vec{x} = \vec{n} \cdot \vec{p} = \alpha$$
where $\alpha$ is a constant. Expanding using coordinates,
$$\vec{n} \cdot (\vec{x} - \vec{p}) = \vec{n} \cdot \vec{x} - \alpha = n_{x}x + n_{y}y + n_{z}z - \alpha = 0$$
→ $\mathcal{P}$ is the set of solutions to
$$n_{x}x + n_{y}y + n_{z}z - \alpha = 0 \tag 1$$
Equation (1) is called the **scalar form** of a plane.

### Find the complete solution given a point on plane and normal vector. #example 

Let $\mathcal{Q} \subseteq \mathbb{R}^{3}$ be the plane passing through $\vec{p}$ and with normal vector $\vec{n}$ where
$$\begin{align*}
\vec{p} &= \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix} && \vec{n} = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}
\end{align*}$$
Write $\mathcal{Q}$ in vector form.
- We know $\mathcal{Q}$ is the set of solutions to $\vec{n} \cdot (\vec{x} - \vec{p}) = 0$. In scalar form, this equation becomes
	- $$\vec{n} \cdot (\vec{x} - \vec{p}) = \vec{n} \cdot \vec{x} - \vec{n} \cdot \vec{p} = x + y + z - 2 = 0$$
- We see $\mathcal{Q}$ is the set of all solutions to
	- $$x + y + z = 2$$
	- By row reduction, $$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = t \begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix} + s \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix} + \begin{bmatrix} 2 \\ 0 \\ 0 \end{bmatrix}$$
