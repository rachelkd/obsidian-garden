---
{"dg-publish":true,"permalink":"/100-academia/mat-235/3-partial-derivatives-and-the-gradient/partial-differential-equation/","tags":["lecture","math","note","university"],"created":"2024-11-13T22:59:54.131-05:00","updated":"2024-11-13T23:07:38.031-05:00"}
---


> [!def]+ Partial Differential Equation
> An equation that relates some partials of a multivariable function

- e.g., For $u(x, t)$, we have $u_{t} = u_{xx}$
    - Solution is a function $u(x, t)$

> [!thm]+ The Heat Equation
> $$u(x, t) = e^{-t}\sin x$$
> Finding some partial derivatives, we get
> $$\begin{align*}
> u_{t} &= -e^{-t}\sin x \tag{1} \\
> u_{x} &= e^{-t}\cos x \tag {2} \\
> u_{xx} &= -e^{-t} \sin x \tag {3}
> \end{align*}$$
> Then, $u_{t} = u_{x x}$ is a solution for the equation