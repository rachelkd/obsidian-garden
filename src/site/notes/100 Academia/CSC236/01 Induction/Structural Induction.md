---
{"dg-publish":true,"permalink":"/100-academia/csc-236/01-induction/structural-induction/","tags":["#lecture","#note","cs","todo","university"],"created":"2024-09-24T17:04:40.000-04:00","updated":"2024-09-28T19:15:14.000-04:00"}
---


- So far, induction has always been over $\mathbb{N}$
    - Other sets? $\mathbb{Z}$, trees, strings?

> [!important] There is a way to set up an induction structure for any set, as long as you can give a correct recursive definition of that set.

# Ex. 1. WTP $\forall$ even $n \in \mathbb{N}, P(n)$

1. Prove: $\forall n, (\exists k, n = 2k) \implies P(n)$
2. Prove: $\forall n, P(2n)$
3. Prove: $P(0) \wedge [\forall n, P(n) \implies P(n + 2)]$

## Justification for 3

Adjust the structure of induction:
- Define set $\mathbb{E}$ for all even natural numbers in a *self-contained*, *recursive* way, 
    - i.e., not using any other sets or referring to anything outside of the definition
    1. ==$0 \in \mathbb{E}$==
    2. ==$\forall n \in \mathbb{E}, n + 2 \in \mathbb{E}$==
        - Then, $\mathbb{E} = \{ 0, 2, \pi, \pi + 2, 6, \pi + 4, 8, \cdots \}$ satisfies conditions 1, 2.
            - ⇒ infinitely many sets that satisfy these two conditions
            - Need to add a third condition!
    3. ==$\mathbb{E}$ contains nothing else==
        - or, “$E$ is the smallest set such that …”
        - “Don’t include anything else, like $\pi$”

- **Intuition:** Prove $P(0) \wedge \forall n, P(n) \implies P(n + 2)$
    - $P(0)$ matches 1. of $\mathbb{E}$ definition
    - Inductive step matches 2. of $\mathbb{E}$ definition

> [!important]+ Structure of the proof (structural induction) matches the structure of your definition
> - Allowed to conclude: $\forall n \in S, P(n)$

![](https://i.imgur.com/Uqddi6b.png)

- Take the Simple Ind. structure → Structural Induction
    - Simple Induction depends on the structure of the natural numbers itself

> [!info] You can understand any form of structural induction as long as you understand the recursive structure of the set you are working with.

# Ex. A Set of “expressions”

Define the set of “expressions” $E$ as the *smallest set* that satisfies:
1. `'1', '2', '3'` $\in E$
    - Strings
    - Note: Would often see $[1,2,3] \in E$
        - Not clear that elements are strings
        - Would have to say outside the definition that $E$ is a set of strings
2. $\forall e_{1}, e_{2} \in E,$
    1. $e_{1} \oplus e_{2} \in E$, and
    2. $e_{1} \otimes e_{2} \in E$
3. $E$ contains nothing else (already covered by “smallest set” above)

$$E = \{ 1, 2, 3, 1 \oplus 2, \bbox[pink]{3 \otimes 3}, \cdots \}$$

> [!question]- Do we rule out $3 \oplus 3$ because $e_{1} \neq e_{2}$?
> - No
> - Allowed because $e_{1,}e_{2}$ are *dummy variables*; not restricted

## As Code

```python
# Post: returns a random elem. of E *
#                                   * with probability 1
def rand_E():
    if randrange(3) == 0:
        return ['1','2','3'][randrange(3)]
    else:
        e1 = rand_E()
        e2 = rand_E()
        return e1 + ['⨁', '⊗'][randrange(2)] + e2
```

## Define, for Each $e \in E$

- `num(e) = number of 1's and 2's and 3's in e`
    - e.g., `num(1 ⨁ 2 ⊗ 2) = 3`
- `op(e) = number of ⨁'s and ⊗'s in e`
    - e.g., `op(1 ⨁ 2 ⊗ 3) = 2`
- `num(u•v) = num(u) + num(v)`
    - i.e., `u•v` is string concatenation

<!-- break -->
- Notes:
    - Definitions rely on our understanding of strings → *not* self-contained!
    - Advantage: From our understanding, we can say a lot of things about how these functions behave

> [!info]+ Conjecture.
> $$\forall e \in E, \texttt{num(e)} = 1 + \texttt{op(e)}$$

## Proof by Structural Induction on $E$

- Notes:
    - Look at the definition of $E$
    - ⇒ We get base cases
    - Assume $e_{1}, e_{2}$ satisfy this property. Does it still satisfy for the “operations”?

**Base case.**
$$\texttt{num(} \underbrace{1}_{2, 3} \texttt{)} = 1 = 1 + 0 = 1 + \texttt{op(} \underbrace{1}_{2,3} \texttt{)}$$
**Inductive step.**
Let $e_{1}, e_{2} \in E$.
Assume \[IH]:
- $\texttt{num(} e_{1} \texttt{)} = 1 + \texttt{op(} e_{1} \texttt{)}$, and
- $\texttt{num(} e_{2} \texttt{)} = 1 + \texttt{op(} e_{2} \texttt{)}$

Then,
$$\begin{align*}
num(e_{1} \oplus e_{2}) &= num(e_{1}) + num(\oplus) + num(e_{2}) \\
&= \bigg(1 + op(e_{1}) \bigg) + 0 + \bigg(1 + op(e_{2}) \bigg)\\
&= 1 + \bigg(op(e_{1}) + op(\oplus) + op(e_{2}) \bigg) \\
&= 1 + op(e_{1} \oplus e_{2})
\end{align*}$$
