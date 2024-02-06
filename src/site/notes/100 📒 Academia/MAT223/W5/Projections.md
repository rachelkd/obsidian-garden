---
{"dg-publish":true,"dg-path":"academia/MAT223/W5/Projections.md","permalink":"/academia/mat-223/w5/projections/","created":"2024-02-03T20:10:27.623-05:00","updated":"2024-02-03T21:32:24.519-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/MAT223/_MAT223 Notes\|5]]
Course: #MAT223
Date: 2024-02-03
Module: 5

---

### Definition of projection. #definition 

> [!note]
> Let $X \subseteq  \mathbb{R}^{n}$ be a set. The *projection* of the vector $\vec{v} \in \mathbb{R}^{n}$ onto $X$, written $\text{proj}_{X}\vec{v}$, is the closest point in $X$ to $\vec{v}$.

## Intuition of projections

Let $\mathcal{P}_{xy} \subseteq \mathbb{R}^{3}$ be the $xy$-plane in $\mathbb{R}^{3}$ and let $\vec{v} = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}$.
$\text{proj}_{\mathcal{P}_{xy}} \vec{v}$ is the “shadow” that $\vec{v}$ would cast on $\mathcal{P}_{xy}$ if the sun were directly overhead.

![5_projections.png|center|500](/img/user/Files/MAT223/5_projections.png)

From the drawing, we can conclude that $\text{proj}_{\mathcal{P}_{xy}} \vec{v} = \begin{bmatrix} 1 \\ 2 \\ 0 \end{bmatrix}$.

---

Let $l_{y} \subseteq \mathbb{R}^{3}$ be the $y$-axis in $\mathbb{R}^{3}$. What is $\text{proj}_{l_{y}} \vec{v}$?

- Every vector in $l_{y}$, by definition, takes the form…
	- $$\vec{u}_{t} = \begin{bmatrix} 0 \\ t \\ 0 \end{bmatrix} \text{ for some } t \in \mathbb{R}$$
- The distance between $\vec{u}_{t}$ and $\vec{v}$ is:
	- $$||\vec{u}_{t} - \vec{v} || = \Bigg| \Bigg| \begin{bmatrix} 0 \\ t \\ 0 \end{bmatrix} - \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} \Bigg| \Bigg| = \sqrt{1^{2} _{}(t-2)^{2} + 3^{2}}$$
- When is $\sqrt{1^{2} + (t-2)^{2} + 3^{2}}$ minimized?
	- $(t-2)^{2} = 0$
	- $t = 2$
	- Thus, $\vec{u}_{2}$ is the closest vector in $l_{y}$ to $\vec{v}$
	- $$\text{proj}_{l_{y}} \vec{v} = \vec{u}_{2} = \begin{bmatrix} 0 \\ 2 \\ 0 \end{bmatrix}$$

### Find a projection of a line. #example 

![5_projection_ex_1.png](/img/user/Files/MAT223/5_projection_ex_1.png)

# The vector from the projection to the original point is a normal vector for the line or plane.

![5_projection_norm.png|center|500](/img/user/Files/MAT223/5_projection_norm.png)

If $X$ is a line or plane and $\vec{v} \notin X$ is a vector, the $\vec{v} - \text{proj}_{X} \vec{v}$ is a normal vector for $X$.

### Finding projections without computing distance. #example 

Let $l \subseteq \mathbb{R}^{2}$ be the line given in vector form by $\vec{x} = t \begin{bmatrix} 1 \\ 1 \end{bmatrix} + \begin{bmatrix} 3 \\ -2 \end{bmatrix}$.
Let $\vec{v} + \begin{bmatrix} -1 \\ -1 \end{bmatrix}$.
Since $\vec{v} - \text{proj}_{l} \vec{v}$ is a normal vector to $l$, we know $\vec{v} - \text{proj}_{l}\vec{v}$ is orthogonal to $\vec{d} = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.
Let $\begin{bmatrix} x \\ y \end{bmatrix} = \text{proj}_{l}\vec{v}$ for some unknown $x, y \in \mathbb{R}$. Then,

$$(\vec{v} - \text{proj}_{l}\vec{v}) \cdot \vec{d} = \Bigg( \begin{bmatrix} -1 \\ -1 \end{bmatrix} - \begin{bmatrix} x \\ y \end{bmatrix} \Bigg) \cdot \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} -1 - x \\ -1-y \end{bmatrix} \cdot \begin{bmatrix} 1 \\ 1 \end{bmatrix} = -2-x-y = 0$$
$$x + y = 2$$
Since $\text{proj}_{l}\vec{v} \in l$, we know
$$\text{proj}_{l}\vec{v} = \begin{bmatrix} x \\ y \end{bmatrix} = t \begin{bmatrix} 1 \\ 1 \end{bmatrix} + \begin{bmatrix} 3 \\ -2 \end{bmatrix} = \begin{bmatrix} t + 3 \\ t-2 \end{bmatrix}$$
We get the system
$$\begin{cases} x + y = -2 \\ -t + x = 3 \\ -t + y = -2
\end{cases}$$
Solving this, we conclude $x = \frac{3}{2}$ and y = $-\frac{7}{2}$. So, $\text{proj}_{l}\vec{v} = \begin{bmatrix} \frac{3}{2} \\ - \frac{7}{2} \end{bmatrix}$.

> [!note]
> **Takeaway.** When projecting onto lines and planes, right angles appear in key places.

# Projections onto other sets

![5_projections_other_sets.png](/img/user/Files/MAT223/5_projections_other_sets.png)

# Subtleties of projections

- When is $\text{proj}_{X}\;\vec{v}$ *undefined*?
	- when $\vec{v}$ is equidistant from *two* closest points in $X$
	- if $X$ is an open set