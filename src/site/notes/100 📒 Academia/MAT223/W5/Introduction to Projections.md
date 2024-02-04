---
{"dg-publish":true,"dg-path":"academia/MAT223/W5/Introduction to Projections.md","permalink":"/academia/mat-223/w5/introduction-to-projections/","created":"2024-02-03T18:19:31.117-05:00","updated":"2024-02-03T20:10:23.685-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/MAT223/_MAT223 Notes\|5]]
Course: #MAT223
Date: 2024-02-03
Module: 5

---
From [Video](https://www.youtube.com/watch?v=27vT-NWuw0M).

Recall that a line $\mathcal{l} = \{ c \vec{v} \;|\; c \in \mathbb{R} \}$, where $\vec{v}$ is a direction vector.

- What is $\text{proj}_{l}(\vec{x})$ (abstraction)?
	- “shadow” of $\vec{x}$ on $l$
		- How much of $l$ is in $\vec{x}$? <br><br> ![[5_projection_abstract.png|center|400]] <br>
	- ![5_projection_abstraction_2.png|400](/img/user/Files/mat223/5_projection_abstraction_2.png)
	- $\text{proj}_{l} :=$ some vector in $l$ where $\vec{x} - {proj}_{l}(\vec{x})$ is orthogonal to $l$
- Rewrite our projection:
	- $\text{proj}_{l}(\vec{v})= c \vec{v}$
	- Then, $\vec{x} - c \vec{v}$ is orthogonal to $l$
	- $$\begin{align*} 
	  \implies (\vec{x} - c \vec{v}) \cdot \vec{v} &= 0 \\
	  \vec{x} \cdot \vec{v} - c \vec{v} \cdot \vec{v} &= 0 \\
	  \vec{x} \cdot \vec{v} &= c \vec{v} \cdot \vec{v} \\
	  \implies c &= \frac{\vec{x} \cdot \vec{v}}{\vec{v} \cdot \vec{v}}
	  \end{align*} $$
