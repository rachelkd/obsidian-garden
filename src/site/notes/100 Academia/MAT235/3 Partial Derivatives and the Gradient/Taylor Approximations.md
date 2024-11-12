---
{"dg-publish":true,"permalink":"/100-academia/mat-235/3-partial-derivatives-and-the-gradient/taylor-approximations/","tags":["lecture","math","note","university"],"created":"2024-11-11T22:38:24.027-05:00","updated":"2024-11-11T23:09:58.386-05:00"}
---


# Taylor Approximations

- **Taylor approximations** use derivatives to construct polynomial approximations of functions
- We can improve the accuracy of [[100 Academia/MAT235/3 Partial Derivatives and the Gradient/Local Linearity and the Differential\|local linearization]] by including higher-order terms

## Single Variable Case

> [!info]+ Linear Approximation (Degree-1)
> For a function of one variable, the best linear approximation near $x=a$ is:
> $$f(x) \approx f(a) + f'(a)(x-a)$$
> This is also known as the ==local linearization==.

> [!info]+ Quadratic Approximation (Degree-2)
> A better approximation is given by the degree-2 Taylor polynomial:
> $$f(x) \approx f(a) + f'(a)(x-a) + \frac{f''(a)}{2}(x-a)^2$$

## Two Variable Case

> [!def]+ Local linearization for $(x, y)$ near $(a, b)$
> $$f(x,y) \approx L(x,y) = f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b)$$

- In the case $(a, b) = (0, 0)$, we have:

> [!def]+ Taylor Polynomial of Degree 1 Approximating $f(x, y)$ for $(x, y)$ Near $(0, 0)$
> If $f$ has ==continuous first-order derivatives==, then
> $$f(x,y) \approx L(x,y) = f(0,0) + f_x(0,0)x + f_y(0,0)y$$

> [!info]+ Quadratic Approximation (Taylor Polynomial of Degree-2) Near $(0, 0)$
> If $f$ has ==continuous second-order partial derivatives==:
> $$\begin{align*} f(x,y) &\approx Q(x,y) \\ &= f(0,0) + f_x(0,0)x + f_y(0,0)y + \frac{f_{xx}(0,0)}{2}x^{2 + f_{xy}(0,0)xy + \frac{f_{yy}(0,0)}{2}y^{2}} \end{align*}$$

Related Topics:
- [[100 Academia/MAT235/3 Partial Derivatives and the Gradient/Partial Derivatives\|Partial Derivatives]]
- [[100 Academia/MAT235/3 Partial Derivatives and the Gradient/Local Linearity and the Differential\|Local Linearity and the Differential]]
- [[100 Academia/MAT235/3 Partial Derivatives and the Gradient/Second-Order Partial Derivatives\|Second-Order Partial Derivatives]]
