---
{"dg-publish":true,"permalink":"/100-academia/csc-236/01-induction/principle-of-complete-induction/","tags":["university","#lecture","#note","cs","todo"],"created":"2024-09-17T13:25:15.675-04:00","updated":"2024-09-20T01:06:14.194-04:00"}
---

> [!note]+ Observation.
> - Have stated many different induction principles
>     - e.g., Simple induction:
>         - $P(0) \; \land \; (\forall n, P(n) \implies P(n + 1)) \implies \forall n, P(n)$
>     - Induction for coin problem ([[Principle of Simple Induction.pdf]]):
>         - $P(12) \; \land \; P(13) \; \land \; P(14) \; \land \; (\forall n \geq 15, P(n-3) \implies P(n))$
>         - or, we could use $\forall n \geq 12, P(n) \implies P(n + 3)$
>     - Practice problems 1:
>         - $\lfloor \sqrt{n} \rfloor \to n$
>         - $((n - 2) \; \land \; (n - 1)) \to n$
> - With recursion, there is really just *one* kind of recursion (in terms of structure)
>     - For each recursive call,
>         - Input is smaller
>         - Input ==satisfies the precondition==
>         - This is the **Principle of Complete Induction**
>     - Therefore, it is a valid recursive structure $\implies$ valid inductive structure indirectly

# Principle of Complete Induction

- Also known as “strong” induction
    - Strong, because you assume a lot

> [!def]- What is the **principle of complete induction**?
> For any predicate $P : \mathbb{N} \to \{T, F\}$, $$\underbrace{\bigg[ \forall n, \bigg(\forall k < n, P(k) \bigg) \implies P(n) \bigg] }_{\text{prove this}}  \implies \underbrace{\forall n, P(n)}_{\text{conclude this}}$$
> - Can’t write $k \leq n$ because $P(n)$ would be one of our assumptions → thus, $P(n)$ true trivially

## Where is the base case?

- Typically think of base case as something you prove directly — without relying on induction
- Analogy:
    - 
  ```python
    # Pre(n): n in naturals
    def s(n):
        r = n
        for k in range(n):
            # Valid recursive structure:
            # k take values 0 to n - 1, inclusive,
            # so k is natural because n is natural
            # and each call is smaller than n
            r += s(k)  
        return r
    ```
- There has to be a base case if recursive structure is correct
- From analogy, there is a smallest value $n$ such that the for loop doesn’t run
    - i.e., at least one input where no recursive call happens
    - When $n = 0$, `range(n) = range(0)`, which is empty → loop doesn’t run → no recursive call
    - So, $n = 0$ is a base case
- Base case is implicit

> [!important]+ For complete induction, WTP: $(\forall k < 0, P(k) \implies P(0))$
> $$\begin{align*} 
> &\equiv \bigg( \forall k \in \mathbb{N}, 
> \underbrace{k < 0}_{\text{always False}} \underbrace{\implies}_{
> \substack{\text{always} \\ \text{True (vacuously)}}} P(k) \bigg) \implies P(0) \\
> &\equiv True \implies P(0) \\
> &\equiv P(0)
> \end{align*}$$

- So, you just need to prove $P(0)$ in the example, which is the *base case* (implicit)

# Prove that every integer ≥ 2 can be written as a product of primes (incl. edge case of a single prime)
#example

![](https://i.imgur.com/zGcILeE.png)

**Fact.** $$\overbrace{\forall n \geq 2, n \text{ is not prime}}^{\text{Pre(n)}} \implies \underbrace{\exists a,b \in \mathbb{N}, 2 \leq a < n \; \land \; 2 \leq b < n \; \land \;n = ab}_{\substack{\text{Post(n,a,b)} \\ \text{i.e., There exists two factors of } n \text{ that are both greater or equal to 2}}}$$
Conclusion i.e., there exists two factors of $n$ that are both greater or equal to 2.

### Formalize, as code

```python
# Pre(n): n in natural, and n >= 2, and n is NOT prime
# Return (a, b) s.t. Post(n, a, b): a, b in naturals,
# and 2 <= a < n and 2 <= b < n and n = a * b
def two_factor(n):
    # ...omitted...

# Pre(n): n in naturals and n >= 2
# Return (a1, ..., am) s.t. Post(n, a1, ..., am):
#    m >= 1 and a1, ..., am in naturals, and
#    a1, ..., am are each prime, and
#    n = a1 * ... * am
def factor(n):
    if prime(n):  return (n)
    else:  # n is NOT prime
        # Pre of two_factor holds, so:
        (a, b) = two_factor(n)
        # From Post of two_factor:
        # a, b in naturals and 2 <= a < n and 2 <= b < n
        # and n = ab
        # a, b satisfy Pre(n) of factor
        # Smaller problem from Post of two_fact:
        # a < n and b < n
        all_as = factor(a)
        all_bs = factor(b)
        # Now we know a = product of all_as
        #    b = product of all_bs
        # from Post of factor
        # So, n = ab = product of all_as * product of all_bs
        return all_as + all_bs
```

### As proof
