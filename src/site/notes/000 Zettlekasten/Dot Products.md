---
{"dg-publish":true,"permalink":"/000-zettlekasten/dot-products/","created":"2024-01-28T02:43:31.751-05:00","updated":"2024-01-28T14:42:39.329-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/MAT223/_MAT223 Notes\|4]]
Course: #MAT223
Date: 2024-01-28
Module: 4

---

- **Geometric definition of the dot product** #definition
	- Let $\vec{a}$ and $\vec{b}$ be vectors rooted at the same point.
	- Let $\theta$ denote the *smaller* of the two angles between them
		- i.e., $0 \leq \theta \leq \pi$
	- The dot product of $\vec{a}$ and $\vec{b}$ is defined to be $$\vec{a} \cdot \vec{b} = ||\vec{a}|| \;  ||\vec{b}|| \cos \theta$$
	- ![4_geometric_dot_product.png|300](/img/user/Files/mat223/4_geometric_dot_product.png)
- The dot product is sometimes called the *scalar product* because the result is a *scalar*
- **Algebraic definition of the dot product** #definition 
	- $$\begin{bmatrix} a_{1} \\ a_{2} \\ \vdots \\ a_{n} \end{bmatrix} \cdot \begin{bmatrix} b_{1} \\ b_{2} \\ \vdots \\ b_{n} \end{bmatrix} = a_{1}b_{1} + a_{2}b_{2} + \dots + a_{n}b_{n}$$

### Find the angle between vectors #example

Find the angle between the vectors $\vec{v} = (1,2,3)$ and $\vec{w} = (1,1,-2)$.

- From the algebraic definition of the dot product, we know
	- $$\vec{v} \cdot \vec{w} = 1(1) + 2(1) + 3(-2) = -3$$
- From the geometric definition, we know
	- $$\vec{v} \cdot \vec{w} = || \vec{v} || \; || \vec{w} || \cos \theta = \sqrt{14} \sqrt{6} \cos \theta = 2 \sqrt{21} \cos \theta$$
- Equating the two definitions of $\vec{v} \cdot \vec{w}$, we see
	- $$\cos \theta = \frac{-3}{2 \sqrt{21}}$$ $$\theta = \arccos \big( \frac{-3}{2\sqrt{21}} \big)$$


# Properties of Dot Products

### Dot product between vector and itself

- Since the angle between $\vec{a}$ and itself is 0, the geometric definition of the dot product tells us:
	- $$\vec{a} \cdot \vec{a} = || \vec{a}|| ||\vec{a}|| \cos 0 = || \vec{a} || ^ {2}$$
	- $$|| \vec{a} || = \sqrt{{\vec{a} \cdot \vec{a}}}$$
> [!note] 
> Dot products can be used to compute the length of vectors

### Distributive laws
From the algebraic definition of the dot product, we can deduce several distributive laws.

- For vectors $\vec{a}, \vec{b}, \vec{c}$ and any scalar $k$, we have:
	- $$ (\vec{a} + \vec{b})\cdot \vec{c} = \vec{a} \cdot \vec{c} + \vec{b} \cdot \vec{c}$$
	- $$\vec{a} \cdot (\vec{b} + \vec{c}) = \vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{c}$$
	- $$(k \vec{a}) \cdot \vec{b} = k(\vec{a} \cdot \vec{b}) = \vec{a} \cdot (k \vec{b})$$
	- $$\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}$$
