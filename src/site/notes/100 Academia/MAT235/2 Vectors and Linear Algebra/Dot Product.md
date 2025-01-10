---
{"dg-publish":true,"dg-path":"academia/MAT235/2 Vectors and Linear Algebra/Dot Product.md","permalink":"/academia/mat-235/2-vectors-and-linear-algebra/dot-product/","tags":["lecture","note","math","university"],"created":"2024-09-30T17:11:21.700-04:00","updated":"2025-01-09T19:06:03.865-05:00"}
---


# Quick Summary of 13.1-2

- **Vectors:**
    - Algebraically:
        - $\vec{v} = \begin{pmatrix} v_{1} \\ v_{2} \\ v_{3}\end{pmatrix} = v_{1} \vec{i} + v_{2} \vec{j} + v_{3} \vec{k}$
        - $\vec{i} = \begin{pmatrix}1 \\ 0 \\ 0\end{pmatrix}, \hat{j} = \begin{pmatrix} 0 \\ 1 \\ 0\end{pmatrix}, \vec{k} = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$
    - Graphically:
        - The arrow from the origin to the point $\left( v_{1}, v_{2}, v_{3} \right)$
        - ![|300](https://i.imgur.com/LNZQX54.png)
- **Magnitude/length:**
    - $\sqrt{ {v_{1}}^{2} + {v_{2}}^{2} + {v_{3}}^{2}} = ||\vec{v}||$
- **Unit vectors**:
    - Are vectors of length 1

# Dot Product of Vectors

Let $\vec{v} = \begin{pmatrix} v_{1} \\ v_{2} \\ v_{3} \\ \end{pmatrix}, \vec{w} = \begin{pmatrix} w_{1} \\ w_{2} \\ w_{3} \end{pmatrix}$ be vectors.

> [!def]+ Algebraic definition.
> $$\begin{align} \vec{v} \cdot \vec{w} = v_{1}w_{1} + v_{2}w_{2} + v_{3}w_{3} && \text{(a number!)} \end{align}$$

> [!def]+ Geometric definition.
> $$\vec{v} \cdot \vec{w} = ||\vec{v}|| ||\vec{w}|| \cos \theta,$$with $\theta$ the angle between $\vec{v}$ and $\vec{w}$ such that $0 \leq \theta \leq \pi$

- **Proposition.** The algebraic and geometric definitions of the dot product are equivalent.

## Properties of the Dot Product

1. $\vec{v} \cdot \vec{w} = \vec{w} \cdot \vec{v}$
2. $\vec{v} \cdot (\lambda \vec{w}) = \lambda \vec{v} \cdot \vec{w} = (\lambda \vec{v}) \cdot \vec{w}$
3. $(\vec{v} + \vec{w}) \cdot \vec{u} = \vec{v} \cdot \vec{u} + \vec{w} \cdot \vec{u}$
4. $\vec{v} \cdot \vec{v} = ||\vec{v}||^{2}$

# Orthogonality

> [!def]+ $\vec{v}$ and $\vec{w}$ are orthogonal/perpendicular if $\theta = 90^{\circ} = \frac{\pi}{2}$
>
> - Note: $\vec{v}$ and $\vec{w}$ are orthogonal exactly when $\vec{v} \cdot \vec{w} = 0$

# Normal Vectors

> [!def]+ Normal vector.
>
> - A normal vector to a plane is a vector that is perpendicular to the plane
> - i.e., It is perpendicular to every displacement vector between any two points in the plane

# Work

> [!def]+ Work.
> $$W = Fd,$$where $F$ is the magnitude of a force, and $d$ is the distance the force acts on an object
