---
{"dg-publish":true,"permalink":"/000-zettlekasten/orthogonality/","created":"2024-01-28T13:41:31.016-05:00","updated":"2024-01-28T14:42:39.363-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/MAT223/_MAT223 Notes\|4]]
Course: #MAT223
Date: 2024-01-28
Module: 4

---

From [[000 Zettlekasten/Dot Products\|Dot Products]],
- Recall that for vectors $\vec{a}$ and $\vec{b}$, the relationship $\vec{a} \cdot \vec{b} = 0$ can hold for two reasons:
	- either $\vec{a} = 0$ or $\vec{b} = 0$, or both, or
	- $\vec{a}$ and $\vec{b}$ meet at $90 \degree$.
- The dot product can be used to tell if…
	- two vectors are perpendicular

### Definition of orthogonal. #definition

> [!note]
> **Orthogonal.** Two vectors $\vec{u}$ and $\vec{v}$ are ***orthogonal*** to each other if $\vec{u} \cdot \vec{v} = 0$. The word orthogonal is synonymous with the word *perpendicular*

- Definition of orthogonal encapsulates both the idea of:
	1. Two vectors forming a right angle, and
	2. One vector being $\vec{0}$

### Definition of direction of a vector #definition 

> [!note] 
> **Direction.** The vector $\vec{u}$ points in the ***direction*** of the vector $\vec{v}$ if $\vec{u} = k \vec{v}$ for some scalar $k$. The vector $\vec{u}$ points in the *positive direction* of $\vec{v}$ if $\vec{u} - k \vec{v}$ for some positive scalar $k$.

- e.g., $2 \vec{e_{1}}$ points in the same direction of $\vec{e}_{1}$ since $\frac{1}{2}(2 \vec{e_{1}} = \vec{e_{1}})$
	- Since $\frac{1}{2}> 0$, $2 \vec{e_{1}}$ also points in the *positive direction* of $\vec{e_{1}}$
	- Contrarily, $- \vec{e_{1}}$ points in the direction $\vec{e_{1}}$, but NOT the positive direction of $\vec{e_{1}}$

# Two extremes of the relationships between two vectors

1. Point in the same direction
2. They are **orthogonal**

- Dot product can tell which case and to what extent one vector points in the direction of another

### Find vector with closest direction to other vector #example 

Let $a = \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \vec{b} = \begin{bmatrix}  3 \\ 3 \end{bmatrix}, \vec{c} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}, \vec{v} = \begin{bmatrix} 3 \\ 4 \end{bmatrix}$.

Which vector out of $\vec{a}, \vec{b}, \vec{c}$ has a direction closest to the direction of $\vec{v}$?

- What do we want to know?
	- when $\theta$ is smallest → $\cos \theta$ is closest to 1 (since $\cos 0 = 1$)

- By equating the [[000 Zettlekasten/Dot Products\|geometric and algebraic definitions]] of the dot product, we know
	- $$\cos \theta = \frac{\vec{p} \cdot \vec{q}}{||\vec{p}|| ||\vec{q}||}$$
- Let $\alpha, \beta, \gamma$ be the angles between the vector $\vec{v}$ and vectors $\vec{a}, \vec{b}, \vec{c}$, respectively. Computing, we find:
	- $$\cos \alpha = \frac{{3+8}}{{5\sqrt{5}}} = \frac{11\sqrt{5}}{{25}} \approx 0.984$$
	- $$\cos \beta = \frac{9 + 12}{5 \sqrt{18}} = \frac{7 \sqrt{2}}{10} \approx 0.98995$$
	- $$\cos \gamma = \frac{6+4}{5 \sqrt{5}} = \frac{2 \sqrt{5}}{5} \approx 0.894$$
- Since $\cos \beta$ is closest to 1, we know $\vec{b}$ has a direction closest to that of $\vec{v}$.






