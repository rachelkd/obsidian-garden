---
{"dg-publish":true,"dg-path":"academia/CSC111/Course Notes/Proof by Induction.md","permalink":"/academia/csc-111/course-notes/proof-by-induction/","created":"2024-01-21T12:01:35.677-05:00","updated":"2024-02-12T15:17:21.877-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|3]]
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 2 - Proof by Induction\|Unit 2 - Proof by Induction]]
Date: 2024-01-21

---

## The principle of induction

- Applies to all *universal* statements over the natural numbers
- Statements of the form $\forall n \in \mathbb{N}, P(n)$
- Cannot be used to prove statements of any other form

We will study *simple* induction in this course.
- **Base case**
	- Proof that the statement is True for the first natural number $n = 0$
		- Proof that $P(0)$ holds
- **Inductive step**
	- Proof that for all $k \in \mathbb{N}$, if $P(k)$ is true, then $P(k+1)$ is also true. That is:
	  $$\forall k \in \mathbb{N}, P(k) \implies P(k + 1)$$
- One base case and inductive step are proven, by the principle of induction, one can conclude $\forall n \in \mathbb{N}, P(n)$.

## Example.

Let $f \; : \; \mathbb{N} \to \mathbb{N}$ be defined as $f(n) = \sum\limits_{i=0}^{n} i$. Prove that for all $n \in \mathbb{N}, f(n) = \frac{{n(n+1)}}{2}$.

*Proof.* We prove this statement by induction on $n$.

**Base case.** Let $n = 0$.

In this case, $f(0) = \sum\limits_{i=0}^{0} i = 0$ and $\frac{0(0+1)}{2} = 0$. So the two sides of the equation are equal.

**Inductive step.** Let $k \in \mathbb{N}$ and assume that $f(k) = \frac{k(k+1)}{2}$. We want to prove that $f(k + 1) = \frac{(k+1)(k+2)}{2}$.

$$\begin{align*}
f(k+1) &= \sum\limits_{i=0}^{k+1} i 
&& ( \text{definition of } f ) \\
&= \big( \sum\limits_{i = 0} ^ {k} i \big) + (k + 1)
&& (\text{taking out last term}) \\
&= f(k) + (k + 1)
&& (\text{definition of } f ) \\
&= \frac{k(k + 1)}{2} + (k + 1) 
&& (\text{by the I.H.}) \\
&= \frac{(k + 1)(k + 2)}{2}
\end{align*}$$
<div class="right-align"> <span class="math display">\blacksquare</span> </div>

# How does induction “work”?

- Base case tells us that $P(0)$ is True, unconditionally
- From our induction step, we know that $P(0) \implies P(1)$, so $P(1)$ must be True. Then, $P(1) \implies P(2)$, so $P(2)$ is True.
- Chain of implications extends infinitely far out, covering all natural numbers