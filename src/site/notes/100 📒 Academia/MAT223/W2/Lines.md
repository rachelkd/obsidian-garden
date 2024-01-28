---
{"dg-publish":true,"dg-path":"academia/MAT223/W2/Lines.md","permalink":"/academia/mat-223/w2/lines/","created":"2024-01-14T18:02:05.509-05:00","updated":"2024-01-15T16:21:02.230-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/MAT223/_MAT223 Notes\|2]]
Course: #MAT223
Module: [[100 📒 Academia/MAT223/Modules/Module 2 - Sets of Vectors, Lines, and Planes\|Module 2 - Sets of Vectors, Lines, and Planes]]

---

Consider the line $l$ through the points $P$ and $Q$. Let $\vec{d} = \overrightarrow{PQ}$. Consider the set of points (or vectors) $\vec{x}$ that can be expressed as $$\vec{x} = t \vec{d} + P$$ for $t \in \mathbb{R}$.

---
- What is this geometrically?
	- The set of all points we get starting at $P$ and displacing by some multiple of $\vec{d}$
	- A line
	- ![2_line1.png](/img/user/Files/MAT223/2_line1.png)
- How do we interpret this line?
	1. a set of points (that make up the line)
	2. a set of vectors rooted at the origin (the vectors pointing from the origin to the line)
	- ![2_drawing_sets_of_vectors.png](/img/user/Files/MAT223/2_drawing_sets_of_vectors.png)
- Two ways of drawing vectors:
	1. Directed line segments
	2. Marking its ending point (see above image; which is clearer)

---
# Vector Form

- Express line $l$ described above in set-builder notation:
	- $$l = \{ \vec{x} : \vec{x} = t \vec{d} + P \text{ for some } t \in \mathbb{R} \}$$
- What is the **vector form** of a line?
	- A shorthand for the set $l$
	  
> [!note]
> **Vector Form of a Line.** Let $l$ be a line and let $\vec{d}$ and $\vec{p}$ be vectors. If $l = \{ \vec{x} : \vec{x} = t \vec{d} + \vec{p} \text{ for some } t \in \mathbb{R} \}$, we say the vector equation
> $$\vec{x} = t\vec{d} + \vec{p}$$
> is $l$ expressed in **vector form**.
> - The vector $\vec{d}$ is called a **direction vector** for $l$.

- Using coordinates when writing a line in vector form:
	- $$\begin{bmatrix} x \\  y \end{bmatrix} = t \begin{bmatrix} d_{1} \\ d_{2}  \end{bmatrix} + \begin{bmatrix} p_{1} \\ p_2 \end{bmatrix}$$
	  corresponds to the line passing through $\begin{bmatrix} p_{1} \\ p_{2} \end{bmatrix}$ with $\begin{bmatrix} d_{1} \\ d_{2} \end{bmatrix}$ as a direction vector
- **Example.** Find vector form of the line $l \subseteq \mathbb{R}^{2}$ with $y = 2x + 3$.
	-  
