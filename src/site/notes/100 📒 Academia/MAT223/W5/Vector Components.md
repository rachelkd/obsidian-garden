---
{"dg-publish":true,"dg-path":"academia/MAT223/W5/Vector Components.md","permalink":"/academia/mat-223/w5/vector-components/","created":"2024-02-03T21:38:17.079-05:00","updated":"2024-02-03T22:01:49.056-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/MAT223/_MAT223 Notes\|5]]
Course: #MAT223
Date: 2024-02-03
Module: 5

---

### Definition of vector componenets. #definition 

![5_vector_components.png](/img/user/Files/MAT223/5_vector_components.png)

$$\vec{u} = \text{vcomp}_{\vec{v}} \vec{u} + (\vec{u} - \text{vcomp}_{\vec{v}} \vec{u})$$
- $\text{vcomp}_{\vec{v}} \vec{u}$ is in the direction of $\vec{v}$
- $(\vec{u} - \text{vcomp}_{\vec{v}} \vec{u})$ is orthogonal to $\vec{v}$

### Find the vector component of a vector in the direction of another vector. #example 

![5_find_vec_component_example.png](/img/user/Files/MAT223/5_find_vec_component_example.png)

# Formula for vector components

By definition, $\text{vcomp}_{\vec{v}} \; \vec{u}$ is a vector in the direction of $\vec{v}$, so
$$\begin{align*}
\text{vcomp}_{\vec{v}} \; \vec{u} &= k \vec{v} \\
\vec{v} \cdot (\vec{u} - \text{vcomp}_{\vec{v}}\; \vec{u}) &= \vec{v} \cdot (\vec{u} - k \vec{v}) = \vec{v} \cdot \vec{u} - k \vec{v} \cdot \vec{v} = 0 && \text{(since } \vec{u} - \text{vcomp}_{\vec{v}} \vec{u} \text{ is orthogonal to } \vec{v})
\end{align*}$$
Since $\vec{v} \neq 0$, we know $\vec{v} \cdot \vec{v} \neq 0$, so
$$k = \frac{\vec{v} \cdot \vec{u}}{\vec{v} \cdot \vec{v}}$$
$$\text{vcomp}_{\vec{v}} \; \vec{u} = \bigg( \frac{\vec{v} \cdot \vec{u}}{\vec{v} \cdot \vec{v}} \bigg) \vec{v}$$
# The relationship between vector components and projections

![5_vec_comp_and_projections.png](/img/user/Files/MAT223/5_vec_comp_and_projections.png)

- $\text{proj}_{l} \; \vec{u}$ is in the direction of $\vec{v}$
- $\vec{u} - \text{proj}_{l} \; \vec{u}$ is a normal vector for $l$ i.e., orthogonal to its direction vector $\vec{v}$

> [!note]
> **Theorem.** For vectors $\vec{u}$ and $\vec{v} \neq 0$, 
> $$\text{proj}_{\text{span}\{\vec{v}\}} \; \vec{u} = \text{vcomp}_{\vec{v}} \; \vec{u}$$

### Find projection of a vector onto a span. #example 

![5_projection_example.png](/img/user/Files/MAT223/5_projection_example.png)

- Note: This only works for spans.
