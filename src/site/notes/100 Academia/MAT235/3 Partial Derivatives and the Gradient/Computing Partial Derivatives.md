---
{"dg-publish":true,"dg-path":"academia/MAT235/3 Partial Derivatives and the Gradient/Computing Partial Derivatives.md","permalink":"/academia/mat-235/3-partial-derivatives-and-the-gradient/computing-partial-derivatives/","tags":["lecture","math","note","university"],"created":"2024-10-10T17:22:42.003-04:00","updated":"2024-11-29T22:05:57.243-05:00"}
---


> [!note]+ To compute $f_{x}(x, y, z)$,
>
> - Pretend $y$ and $z$ are constant
> - Differentiate as function of 1 variable $x$
> - $f_{y}(x, y, z)$: Pretend $x,z$ are constant; differentiate as function of 1 variable $y$
> - $f_{z}(x, y, z)$: Pretend $x, y$ are constant; differentiate as function of 1 variable $z$

# Examples in Lecture

Calculate the partial derivatives of:

> [!question]- Calculate the partial derivatives of $z = x^{2}y + y^{2}x$
>
> - $\frac{ \partial z }{ \partial x } = 2xy + y^2$
> - $\frac{ \partial z }{ \partial y } = x^{2} + 2xy$

> [!question]- Calculate the partial derivatives of $f(x, y, z) = z\ln (y \cos x)$
> $$\begin{align*}
> \frac{ \partial f }{ \partial x }(x,y,z) &= z \frac{ \partial }{ \partial x } (y \cos x) \times \frac{1}{y \cos x}\\
> &= -zy \sin x \times \frac{1}{y \cos x} \\
> &= -z \tan x
> \end{align*}$$
>
> $$\begin{align*}
> f_{y}(x,y,z) &= z \frac{1}{y \cos x} \times \frac{ \partial  }{ \partial y } (y \cos x) \\
> &= \frac{z}{y}
> \end{align*}$$
>
> $$f_{z}(x,y,z) = \ln (y \cos x)$$
