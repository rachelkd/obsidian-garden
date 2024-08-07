---
{"dg-publish":true,"permalink":"/100-academia/csc-236/1-induction/how-to-do-induction-proofs/","tags":["university","#lecture","#cs"],"created":"2024-08-04T16:15:56.390-07:00","updated":"2024-08-06T18:12:26.282-07:00"}
---

# The Principle of Simple Induction

$$\big(  P(0) \; \land \; \forall k \in \mathbb{N}, P(k) \implies P(k + 1) \big) \implies \forall n \in \mathbb{N}, P(n)$$

# Examples. 

### 1. Prove that for every natural number $n$, $\sum\limits_{i=0}^{n} i = \frac{n(n+1)}{2}$.

1. Define the predicate
    - $P(n) \; : \; \sum\limits_{i=0}^{n} i = \frac{n(n+1)}{2}$
2. Base case
    - Prove that $P(0)$ is true
    - $$P(0) \; : \; \sum\limits_{i=0}^{0} i = \frac{0(0 + 1)}{2} = 0$$
3. Induction step
    - We want to prove $\forall k \in \mathbb{N}, P(k) \implies P(k+1)$
    - Let $k \ in \mathbb{N}$ be some arbitrary natural number
    - Assume $P(k)$ is true (**induction hypothesis**)
        - Explicitly, we assume that $$\sum\limits_{i=0}^{k} i = \frac{k(k+1)}{2}$$is true.
    - WTS that $P(k+1)$ is true
        - i.e., $\sum\limits_{i=0}^{k+1} i = \frac{(k+1)(k+2)}{2}$
    - $$\begin{align*} \sum\limits_{i=0}^{k+1} i &= \bigg( \sum\limits_{i=0}^{k} i \bigg) + (k + 1) \\ &= \frac{k(k+1)}{2} + (k + 1) && \text{(By Induction Hypothesis)} \\ &= (k + 1) \bigg( \frac{k}{2} + 1 \bigg) \\ &= \frac{(k+1)(k+2)}{2} \end{align*}$$<div class="right-align"> <span class="math display">\blacksquare</span> </div>
    - Thus, $P(k+1)$ holds.
4. By the Principle of Simple Induction, we can conclude that $\forall n \in \mathbb{N}, P(n)$
