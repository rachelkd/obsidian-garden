---
{"dg-publish":true,"dg-path":"academia/MAT235/7 Surface Integrals and The Divergence Theorem/Coordinates and Parametrized Surfaces.md","permalink":"/academia/mat-235/7-surface-integrals-and-the-divergence-theorem/coordinates-and-parametrized-surfaces/","tags":["lecture","math","note","university"],"created":"2025-03-14T00:16:44.523-04:00","updated":"2025-03-14T16:40:23.603-04:00"}
---


# Coordinates and Parametrized Surfaces

> [!abstract]+ Parameterization and coordinate systems are the same thing as polar, cylindrical, and spherical coordinates in different disguises.
> - Functions from one space to another

- Have already seen this with parameterized curves
    - A function from an interval $a \leq t \leq b$ to a curve in $xyz$-space

![](https://i.imgur.com/wqsUYmx.png)

*Figure 21.1: The parameterization is a function from the interval, $a ≤ t ≤ b$, to 3-space, whose image is the curve, $C$*

## Polar, Cylindrical, and Spherical Coordinates Revisited

- Equations for [[100 Academia/MAT235/5 Double and Triple Integrals/Double Integrals in Polar Coordinates\|polar coordinates]] can also be viewed as defining a function from the $r\theta$-plane into the $xy$-plane
    - $x = r \cos \theta, \quad y = r \sin \theta$
    - Function transforms rectangle on the left into the quarter disk on the right
        - Figure 21.2
    - Need *two* parameters to describe this disk
        - Because disk is two-dimensional object

![](https://i.imgur.com/AbGoiGe.png)

*Figure 21.2: A grid in the rθ-plane and the corresponding curved grid in the xy-plane*

### Polar Coordinates as Families of Parameterized Curves

- Polar coordinates
    - Give *two* families of parameterized curves
    - → Form the polar coordinate grid
- Lines $r = \text{constant}$ in $r\theta$-plane
    - Correspond to *circles* in the $xy$-plane
    - Each circle parameterized by $\theta$
- Lines $\theta = \text{constant}$
    - Correspond to *rays* in the $xy$-plane
    - Each ray parameterized by $r$

### Cylindrical and Spherical Coordinates

- Cylindrical and spherical coordinates may be viewed as *functions* from 3-space to 3-space
- Cylindrical coordinates take rectangular boxes in $r\theta z$-space
    - Map them to *cylindrical* regions in $xyz$-space
- Spherical coordinates take rectangular boxes in $\rho \phi\theta$-space
    - Map to *spherical* regions in $xyz$-space

### General Parameterizations

> [!info]+ A parameterization or coordinate system provides a way of representing a curved object
> - By means of a simple *region* in the *parameter space*
>     - e.g., an interval, rectangle, or rectangular box
> - Along with a *function* mapping that region into the curved object

- We use this idea to parameterize curved surfaces in 3-space

## How Do We Parameterize a Surface?

In [[100 Academia/MAT235/5 Double and Triple Integrals/Double Integrals in Polar Coordinates\|Section 17.1]]:

- Parameterized a circle in 2-space using the equations $$x=\cos t, \quad y = \sin t$$
- 3-space:
    - Same circle in the $xy$-plane has parametric equations $$x = \cos t, \quad y = \sin t, \quad z = 0$$
    - Add $z = 0$ equation to specify that circle is in the $xy$-plane
    - ? What if we want circle in the plane $z = 3$?
        - Use equations $$x = \cos t,\;y = \sin t,\;z = 3$$
    - ? What if we let $z$ vary freely, as well as $t$?
        - & Circles in every horizontal plane
        - Forms a cylinder
            - Left of Figure 21.3
- & Need two parameters $t, z$ to parameterize the cylinder

![](https://i.imgur.com/SYMEe1N.png)

*Figure 21.3: The cylinder $x = \cos t, y = \sin t, z = z$*

> [!info]+ Curves versus surfaces
> - Curve
>     - & One-dimensional
>         - Though it may live in two or three dimensions
>     - If we move along it, we can only move backward and forward in one direction
>     - & Only requires one parameter to trace out a curve
> - Surface
>     - & Two-dimensional
>     - At any given point, there are two *independent* directions we can move
>     - e.g., Cylinder:
>         - Can move vertically, or circle around the $z$-axis horizontally
>             - Need *two* parameters to describe it

- Can think of parameters as map coordinates
    - Like longitude and latitude on the surface of the earth
- Parameters for a surface give a *grid* on the surface
    - Figure 21.3; right image
    - Just as polar coordinates give a polar grid on a circular region
- Cylinder case:
    - ? What are the parameters?
        - $t, z$
        - $x = \cos t,\quad y = \sin t,\quad z = z$
        - $0 \leq t \leq 2\pi$
        - $-\infty < z < \infty$
    - Last equation $z = z$
        - Reminds us that we are in three dimensions
        - $z$-coordinate on surface is allowed to vary freely

> [!thm]+ In general
> - Express the coordinates $(x, y, z)$ of a point on a surface $S$ in terms of *two* parameters
>     - $s, t$
>
> $$x = f_{1}(s, t),\quad y = f_{2}(s, t), \quad z = f_{3}(s, t)$$

- As values of $s, t$ vary:
    - Corresponding point $(x, y, z)$ sweeps out the surface $S$
        - Figure 21.4
- **Parameterization of the surface**
    - Function which sends the point $(s, t)$ to the point $(x, y, z)$

![](https://i.imgur.com/4VWKaG1.png)

*Figure 21.4: The parameterization sends each point $(s, t)$ in the parameter region, $R$, to a point $(x, y, z) = (f_{1}(s, t), f_{2}(s, t), f_{3}(s, t))$ in the surface, $S$*

## Using Position Vectors

> [!tip] We can use the position vector $\vec{r} = x \vec{i} + y \vec{j} + z \vec{k}$ to combine the three parametric equations for a surface into a single vector equation.

> [!example]+ The parameterization of the cylinder $x = \cos t, y = \sin t, z = z$
> $$\vec{r}(t, z) = \cos t \vec{i} + \sin t \vec{j} + z \vec{k} \quad 0 \leq t \leq 2\pi, -\infty < z < \infty$$

> [!thm]+ General parameterized surface $S$
> $$\vec{r} (s, t) = f_{1}(s, t) \vec{i} + f_{2}(s, t) \vec{j} + f_{3}(s, t) \vec{k}$$

## Parameterizing a Surface of the Form $z = f(x, y)$

> [!thm]+ Surface of the form $z = f(x, y)$
> Can be parameterized by
> $$x = s, \quad y = t, \quad z = f(s, t)$$

- Think of $x, y$ as *parameters*
    - Rather than introduce new parameters $s, t$
    - & → May write $x = x, y = y, z = f(x, y)$

> [!example]+ Give a parametric description of the lower hemisphere of the sphere $x^{2} + y^{2} + z^{2} = 1$
> - Surface is the graph of the function $z = -\sqrt{ 1 - x^{2} - y^{2} }$
>     - Over the region $x^{2} + y^{2} \leq 1$ in the plane
> - Then, parametric equations are:
>     - $x = s$,
>     - $y = t$,
>     - $z = - \sqrt{ 1 - s^{2} - t^{2} }$
>     - Parameters $s, t$ vary inside and on the *unit circle*

## Parameterizing *Planes*

Consider a plane containing two non-parallel vectors $\vec{v_{1}}$, $\vec{v_{2}}$ and a point $P_{0}$ with position vector $\vec{r_{0}}$.

- Can get to any point on the plane by starting at $P_{0}$ and moving parallel to $\vec{v_{1}}$ or $\vec{v_{2}}$
    - Adding multiples of them to $\vec{r_{0}}$

![](https://i.imgur.com/xvJvmRs.png)

*Figure 21.5: The plane $\vec{r}(s, t) = \vec{r}_{0} + s\vec{v}_{1} + t\vec{v}_{2}$ and some points corresponding to various choices of $s$ and $t$*

- $s\vec{v}_{1}$ is parallel to $\vec{v}_{1}$
- $t\vec{v}_{2}$ is parallel to $\vec{v}_{2}$

This gives us the following result:

> [!thm]+ Parameterizing a Plane
> The plane through the point with position vector $\vec{r}_{0}$ and containing the two nonparallel vectors $\vec{v}_{1}$ and $\vec{v}_{2}$ has parameterization
> $$\vec{r}(s, t) = \vec{r}_{0} + s\vec{v}_{1} + t\vec{v}_{2}$$

> [!thm]+ Parametric equations of a plane
> If:
> - $\vec{r}_{0} = x_{0} \vec{i} + y_{0} \vec{j} + z_{0} \vec{k}$
> - $\vec{v}_{1} = a_{1} \vec{i} + a_{2} \vec{j} + a_{3} \vec{k}$
> - $\vec{v}_{2} = b_{1} \vec{i} + b_{2} \vec{j} + b_{3} \vec{k}$
>
> Then the parameterization of the plane can be expressed with the *parametric equations*
> $$\begin{align} x & = x_{0} + sa_{1} + tb_{1},  \\
> y & = y_{0} + sa_{2} + tb_{2}, \\
> z & = z_{0} + sa_{3} + tb_{3}
> \end{align}$$

- $ Parameterization of the plane expresses coordinates $x, y, z$ as *linear functions* of the parameters $s, t$

> [!example]+ Write a parameterization for the plane through the point $(2, -1, 3)$ and containing the vectors $\vec{v}_{1} = 2 \vec{i} + 3 \vec{j} - \vec{k}$ and $\vec{v}_{2} = \vec{i} - 4 \vec{j} + 5 \vec{k}$.
> $$
> \begin{align}
> \vec{r} (s, t) & = \vec{r}_{0} + s\vec{v}_{1} + t\vec{v}_{2} \\
>  & = 2\vec{i} -\vec{j} + 3\vec{k} + s(2\vec{i} + 3\vec{j} - \vec{k}) + t(\vec{i} - 4 \vec{j} + 5\vec{k}) \\
>  & = (2 + 2s + t) \vec{i} + (-1 + 3s - 4t) \vec{j} + (3 - s + 5t) \vec{k}
> \end{align}
> $$
> Equivalently,
> $$x = 2 + 2s + t, \quad y = -1 + 3s - 4t, \quad z = 3 - s + 5t$$

## Parameterizations Using Spherical Coordinates

Recall the [[100 Academia/MAT235/5 Double and Triple Integrals/Integrals in Cylindrical and Spherical Coordinates\|spherical coordinates]] $\rho, \phi, \theta$ introduced in Chapter 16.

- Sphere of radius $\rho$:
    - Can use $\phi, \theta$ as coordinates
    - Similar to latitude and longitude on the surface of the earth
    - Figure 21.6
    - $\phi$ is measured from the north pole
        - Whereas latitude is measured from the equator
- If positive $x$-axis passes through the Greenwich meridian:
    - Longitude and $\theta$ are equal for $0 \leq \theta \leq \pi$

![](https://i.imgur.com/qzsLyB9.png)

*Figure 21.6: Parameterizing the sphere by $\phi$ and $θ$*
