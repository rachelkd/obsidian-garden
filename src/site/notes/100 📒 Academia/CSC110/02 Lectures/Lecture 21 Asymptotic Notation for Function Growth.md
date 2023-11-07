---
{"dg-publish":true,"dg-path":"academia/CSC110/02 Lectures/Lecture 21 Asymptotic Notation for Function Growth.md","permalink":"/academia/csc-110/02-lectures/lecture-21-asymptotic-notation-for-function-growth/","created":"2023-10-31T12:16:52.747-07:00","updated":"2023-11-06T12:55:25.549-08:00"}
---

**Covers:**
- [[100 📒 Academia/CSC110/01 Course Notes/9.1 Introduction to Running Time Analysis\|9.1 Introduction to Running Time Analysis]]
- [[100 📒 Academia/CSC110/01 Course Notes/9.2 Comparing Asymptotic Function Growth - Big-O Notation\|9.2 Comparing Asymptotic Function Growth - Big-O Notation]]
- [[100 📒 Academia/CSC110/01 Course Notes/9.3-4 Big-O, Omega, Theta; Asymptotic Growth and Limits\|9.3-4 Big-O, Omega, Theta; Asymptotic Growth and Limits]]

> [!note]
> How well does my program run when the input size gets really, really large?

- Algorithm efficiency
	- focusses on how much the amount of time increases as input size increases (how fast or slow does our runtime grow).
	- **We care about the growth rate.**
- A slower growth rate (as input size grows, the runtime grows slowly) means a ‘faster’ (more efficient) algorithm.

# Big-O

$$\mathcal{O}(n^{2})$$
- Quadratic growth rather than linear growth
	- e.g., Selection sort'

- Big-O Notation $\rightarrow$ worst-case scenario

> [!note] Definition of Big-O
> Let $f, g : \mathbb{N} \rightarrow \mathbb{R}^{\geq 0}$.
> We say $g$ is ***Big-O*** of $f$ and write $g \in \mathcal{O}(f)$ when:
> $$\exists c, n_{0} \in \mathbb{R}^{+}, \forall n \in \mathbb{N}, 
> n \geq n_{0} \implies g \leq c \cdot f(n)$$
> i.e., "$g$ is eventually dominated by some multiple of $f$"

## Example Proof

Prove that for all $a, b, \in \mathbb{R}^{+}, a + bn \in \mathcal{O}(n^{2})$.
(Example: $1 + 10^{10^{10}}n \in \mathcal{O}(n^{2})$

**Translation:**
$$\forall a, b \in \mathbb{R}^{+}, \exists c, n_{0} \in \mathbb{R}^{+},
\forall n \in \mathbb{N}, n \geq n_{0} \implies
a + bn \leq cn^{2}$$

*Proof.*
Let $a, b \in \mathbb{R}^{+}$.
Let $c = (a+b)$ and let $n_{0} = 1$.
Let $n \in \mathbb{N}$ and assume $n \geq n_{0}$.
$\implies n \geq 1$
Then,
$$\begin{align*}
a + bn &\leq an + bn && (\text{for all } n \geq 1) \\
&= (a + b)n \\
&\leq (a + b) n^{2} \\
&= c \cdot n^{2}
\end{align*}$$
<div class="right-align"> <span class="math display">\blacksquare</span> </div>




# Theta and Omega

> [!note]
> Big-O expresses an ***upper bound*** on function growth
> - Upper bounds might be very inaccurate

## Omega

- Lower bound

> [!note]
> Let $f, g : \mathbb{N} \rightarrow \mathbb{R}^{\geq 0}$.
> We say that **$g$ is Omega of $f$** and write $g \in \Omega (f)$ when:
> $$\exists c, n_{0} \in \mathbb{R}^{+}, \forall n \in \mathbb{N},
> n \geq n_{0} \implies g(n) \geq c \cdot f(n)$$

![[Omega.png \| center ]]

## Theta

- Both an upper bound and lower bound

> [!note] Definition of Theta
> Let $f, g : \mathbb{N} \rightarrow \mathbb{R}^{\geq 0}$.
> We say **$g$ is Theta of $f$** and write $g \in \Theta (f)$ when:
> $$\exists c_{1}, c_{2}, n_{0} \in \mathbb{R}^{+}, 
> \forall n \in \mathbb{N},
> n \geq n_{0} \implies
> c_{1} \cdot f(n) \leq g(n) \leq c_{2} \cdot f(n)$$

- This is equivalent to:
	- $g \in \mathcal{O}(f)$ and $g \in \Omega (f)$
- When $g \in \Theta (f)$, we say:
	- $f$ is a ***tight bound*** on $g$
		- i.e., $f$ is both a lower and upper bound on $g$