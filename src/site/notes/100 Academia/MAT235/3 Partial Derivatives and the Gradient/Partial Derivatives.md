---
{"dg-publish":true,"dg-path":"academia/MAT235/3 Partial Derivatives and the Gradient/Partial Derivatives.md","permalink":"/academia/mat-235/3-partial-derivatives-and-the-gradient/partial-derivatives/","tags":["#lecture","#note","math","university"],"created":"2024-10-09T17:11:22.520-04:00","updated":"2024-11-29T22:05:57.235-05:00"}
---


# Partial Derivatives

Suppose $z = f(x, y)$.

> [!def] Partial derivatives of $f$ with respect to $x$ and $y$
> For all points at which the limits exist, we define the **partial derivatives at the point $(a, b)$** by
> $$f_{x}(a, b) = \text{Rate of change of } f \text{ with respect to } x \text{ at the point } (a, b) = \lim_{ h \to 0 } \frac{{f(a + h, b) - f(a, b)}}{h}$$
> $$f_{y}(a, b) = \text{Rate of change of } f \text{ with respect to } y \text{ at the point }(a, b) = \lim_{ h \to 0 } \frac{{f(a, b+h)- f(a, b)}}{h}$$
>
> If we let $a$ and $b$ vary, we have the **partial derivative functions** $f_{x}(x,y), f_{y}(x, y)$.
{ #c9139c}


## Graphically

![|center|500](https://i.imgur.com/E0YwoRV.png)

![|center|500](https://i.imgur.com/lcVWvHc.png)

## Alternative Notation

Suppose $z = f(x, y)$.

$$\begin{align}
f_{x}(x, y) &= \frac{\partial z}{\partial x}, && f_{y}(x, y) = \frac{\partial z}{\partial y}, \\ f_{x}(a, b) &= \frac{\partial z}{\partial x} \Bigg|_{(a, b)}, && f_{y}(a, b) = \frac{\partial z}{\partial y} \Bigg|_{(a, b)}
\end{align}$$
## Signs of Partial Derivatives

> [!question]- What do the signs of the partial derivatives indicate?
> - Increase or decrease of the function in the $x$ or $y$ direction

## Units of Partial Derivatives

> [!question]- What are the units of a partial derivative?
> - The units of the output divided by the units of the direction variable
> - e.g., If $z = f(x, y)$, the units of $f_{x} = \frac{{\partial z}}{\partial x}$ are the units of $z$ over the units of $x$
