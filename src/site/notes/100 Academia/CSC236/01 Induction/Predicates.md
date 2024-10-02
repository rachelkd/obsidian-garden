---
{"dg-publish":true,"permalink":"/100-academia/csc-236/01-induction/predicates/","tags":["university","#lecture","#cs"],"created":"2024-08-04T19:29:44.000-04:00","updated":"2024-09-27T19:08:23.000-04:00"}
---

# Predicates

> [!def] Predicate #definition 
> - A *parametrized* logical statement
> - Can be viewed as: a function that takes in one or more arguments → only outputs `True` or `False`

### Examples of predicates

$$\begin{align} 
& EV(n) \; : \; n \text{ is even} \\
& GR(x, y) \; : \; x > y \\
& FROSH(a) \; : \; a \text{ is a first-year university student}
\end{align}$$



## Domains

- Every predicate has a **domain**
    - set of its possible input values
    - e.g., For the above examples, the domain can be $\mathbb{N}$, $\mathbb{R}$, “the set of all UofT students”, respectively