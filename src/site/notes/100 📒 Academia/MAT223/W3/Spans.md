---
{"dg-publish":true,"dg-path":"academia/MAT223/W3/Spans.md","permalink":"/academia/mat-223/w3/spans/","created":"2024-01-24T13:05:59.177-05:00","updated":"2024-01-28T14:58:49.328-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/MAT223/_MAT223 Notes\|3]]
Course: #MAT223
Date: 2024-01-24
Module: 3

---

Let $\vec{u} \begin{bmatrix} 1 \\ 1 \end{bmatrix}$ and $\vec{v} = \begin{bmatrix} 1 \\ -2 \end{bmatrix}$.

Can the vectors $\vec{w} = \begin{bmatrix} 2 \\ 5 \end{bmatrix}$ be obtained as a linear combination of $\vec{u}$ and $\vec{v}$?

![3_spans.png|400](/img/user/Files/mat223/3_spans.png)

*Graphically, the answer appears to be yes.*

### Example. Algebraically evaluating if a vector is a linear combination of $\vec{u}, \vec{v}$

- Use the definition of a *linear combination* to set up a system of equations:
	- $\vec{w}$ can be expressed as a linear combination of $\vec{u}$ and $\vec{v}$ if and only if the vector equation
	  $$\vec{w} = \begin{bmatrix} 2 \\ 5 \end{bmatrix} = \alpha \begin{bmatrix} 1 \\ 1 \end{bmatrix} + \beta \begin{bmatrix} 1 \\ -2 \end{bmatrix} 
	  = \alpha \vec{u} + \beta \vec{v}$$
	  has a solution.
	$$\begin{array} {cc|c}
	  1 & 1 & 2 \\
	  1 & -2 & 5
	   \end{array}
	   $$
	$$\begin{array} {cc|c}
	  1 & 1 & 2 \\
	  0 & -3 & 3
	   \end{array}$$
	$$\implies \alpha = 3, \beta = -1$$
### Example. All the locations in $\mathbb{R}^{2}$ that can be obtained as a linear combination

$$\vec{x} = 
\begin{bmatrix} x \\ y \end{bmatrix} =
\alpha \begin{bmatrix} 1 \\ 1 \end{bmatrix} + \beta \begin{bmatrix} 1 \\ -2 \end{bmatrix} =
\alpha \vec{u} + \beta \vec{v} \tag 1
$$
If (1) always has a solution (i.e., *always consistent*), any vector in $\mathbb{R}^{2}$ can be obtained as a linear combination of $\vec{u}$ and $\vec{v}$.
$$ \begin{align*}
x &= \alpha+ \beta \\
y &= \alpha - 2 \beta \\
\implies x-y &= 3 \beta && \text{(subtracting the second equation from the first)} \\
\implies \beta &= \frac{1}{3} (x-y) \\
\implies \alpha &= \frac{1}{3} (2x + y) && \text{(plugging } \beta \text{ into 1)}
\end{align*}$$
Thus, equation (1) always has a solution.

# Definition of **span**

> [!note] 
> The **span** of a set of vectors $V$ is the set of all linear combinations of vectors in $V$.
> $$ \text{span} V = \{ \vec{v} : \alpha_{1} \vec{1} + \alpha_{2} \vec{v}_{2} + \dots + \alpha_{n} \vec{v}_{n} \text{ for some } \vec{v}_{1}, \vec{v}_{2}, \dots, \vec{v}_{n} \in V \text{ and scalars } \alpha_{1}, \alpha_{2}, \dots, \alpha_{n} \}$$

We define $\text{span}\{\} = \{ \vec{0} \}$.

From [[100 📒 Academia/MAT223/W3/Spans#What are all the locations in $ mathbb{R} {2}$ that can be obtained as a linear combination?\|example above]], we know $\text{span} \big\{ \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \begin{bmatrix} 1 \\ -2 \end{bmatrix} \big\} = \mathbb{R}^{2}$ or the *set* $\big\{ \begin{bmatrix} 1 \\ 1 \end{bmatrix}, \begin{bmatrix} 1 \\ -2 \end{bmatrix} \big\}$ spans $\mathbb{R}^{2}$.

### Example. Finding a span given two vectors

Let $\vec{u} = \begin{bmatrix} 1 \\ -2 \end{bmatrix}$ and $\vec{v} = \begin{bmatrix} 1 \\ -2 \end{bmatrix}$. Find $\text{span} \{ \vec{u}, \vec{v} \}$.

By definition of span,
$$\text{span}\{\vec{u}, \vec{v}\} = \{\vec{x} : \vec{x} = \alpha \vec{u} + \beta \vec{v} \text{ for some } \alpha, \beta \in \mathbb{R} \}$$


1. We need to determine for which $x$ and $y$ the vector equation $\begin{bmatrix} x \\ y \end{bmatrix} = \alpha \begin{bmatrix} -1 \\ 2 \end{bmatrix} + \beta \begin{bmatrix} 1 \\ -2 \end{bmatrix}$ is **consistent**.
	- We get the system
	  $$ \begin{align*}
	  x &= - \alpha + \beta \tag 1 \\
	  y &= 2a - 2 \beta \tag 2
	  \end{align*}
	 $$
	- Adding 2 times (1) to (2), we get
	  $$ \begin{align*}
	  2x + y &= 0 \\
	  \implies y &= -2x
	  \end{align*}$$
	- If $\begin{bmatrix} x \\ y \end{bmatrix}$ makes the above system consistent, we must have:
	  $$
	  \begin{bmatrix} x \\ y \end{bmatrix} 
	  = \begin{bmatrix} t \\ -2t \end{bmatrix}
	  = t \begin{bmatrix} 1 \\ -2 \end{bmatrix}
	  = t \vec{v}$$
	- Thus,
	  $$\text{span} \{ \vec{u}, \vec{v}\} = \{ \vec{x} : \vec{x} = t \vec{v} \text{ for some } t \}
	  = \text{span}\{\vec{v}\}$$
	  which is a line through the origin with direction $\vec{v}$.

### Example. Finding a span given three vectors

Let $\vec{a} = \begin{bmatrix} 1 \\ 2 \\ 1 \end{bmatrix}, \vec{b} = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}, c = \begin{bmatrix} 1 \\ 1 \\ 2 \end{bmatrix}$. Show that $\mathbb{R}^{3} = \text{span} \{ \vec{a}, \vec{b}, \vec{c} \}$.

If the equation
$$
\vec{x} = \begin{bmatrix} x \\ y \\ z \end{bmatrix}
= \alpha_{1} \begin{bmatrix} 1 \\ 2 \\ 1 \end{bmatrix}
+ \alpha_{2} \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}
+ \alpha_{3} \begin{bmatrix} 1 \\ 1 \\ 2 \end{bmatrix}
= \alpha_{1} \vec{a} + \alpha_{2} \vec{b} + \alpha_{3} \vec{c}
$$
is always consistent, then any vector in $\mathbb{R}^{3}$ can be obtained as a linear combination of $\vec{a}, \vec{b}, \vec{c}$.

$$\begin{align*}
x &= \alpha_{1} + \alpha_{3} \\
y &= 2 \alpha_{1} + \alpha_{2} + \alpha_{3} \\
z &= \alpha_{1} + 2 \alpha_{3}
\end{align*}$$
$$\begin{align*}
\alpha_{1} &= x - \alpha_{3} \\
2\alpha_{3} &= z - x + \alpha_{3} \\
\implies \alpha_{3} &= z-x \\
\implies \alpha_{1} &= 2x - z \\
\alpha_{2} &= y - 2\alpha_{1} - \alpha_{3} \\
&= y - 2(2x - z) - (z-x) \\
\implies a_{2} &= y + z - 3x
\end{align*}$$
which is always a solution (no matter $x, y, z$). Therefore, $\text{span}\{\vec{a}, \vec{b}, \vec{c}\}$.

#todo