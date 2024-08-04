---
{"dg-publish":true,"permalink":"/100-academia/csc-236/1-recursion/how-to-do-induction-proofs/","tags":["university","#lecture","#cs"],"created":"2024-08-04T16:15:56.390-07:00","updated":"2024-08-04T16:49:18.970-07:00"}
---

# The Principle of Simple Induction

$$\big(  P(0) \; \land \; \forall k \in \mathbb{N}, P(k) \implies P(k + 1) \big) \implies \forall n \in \mathbb{N}, P(n)$$

# Example. 

### Prove that for every natural number $n$, $\sum\limits_{i=0}^{n} i = \frac{n(n+1)}{2}$.

1. Define the predicate
    - $P(n) \; : \; \sum\limits_{i=0}^{n} i = \frac{n(n+1)}{2}$
2. Base case
    - Prove that $P(0)$ is true
    - $$P(0) \; : \; \sum\limits_{i=0}^{0} i = \frac{0(0 + 1)}{2} = 0$$
3. Induction step
    - 

