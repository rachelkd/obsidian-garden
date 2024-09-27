---
{"dg-publish":true,"permalink":"/100-academia/csc-236/01-induction/principle-of-simple-induction/","tags":["university","#lecture","#note","#cs","#math"],"created":"2024-09-09T13:14:14.210-04:00","updated":"2024-09-27T19:08:28.656-04:00"}
---

- What is the **Principle of Simple Induction**?
    - $$P(0) \land \bigg(\forall n, P(n) \implies P(n+1)\bigg) \implies \forall n, P(n)$$
#### Syntactic details

- What is $P$?
    - $P$ is a predicate
    - $P : \mathbb{N} \rightarrow \{ T, F \}$
- Default domain $\mathbb{N}$
    - → “$\forall n$” = $\forall n \in \mathbb{N}$
- Variable names ==can be reused when no overlap== in scope
- What do we *prove*?
    - $P(0) \; \land \; \bigg( \forall n, P(n) \implies P(n + 1) \bigg)$
- What do we *conclude*?
    - $\forall n, P(n)$

# Example: What amounts of money $n$ that can be made up using only 3 cent and 7 cent coins?

![|center|600](https://i.imgur.com/rCRtinT.png)

### Intuition:

- From 0 cents - 11 cents:
    - case varies
- From 12 cents onwards:
    - always yes

![|center|500](https://i.imgur.com/KOtz0PE.png)


> [!info] Every time you have the urge to write “$…$”, that is **induction**.

# Formalizing our example

> [!question]- What is our **predicate**?
> For each $n \in \mathbb{N}$, let $P(n)$ be:
> $$\exists t, s \in \mathbb{N}, n = 3t + 7s$$
> > [!warning]+ You cannot quantify $n$ after “let $P(n)$”!
> > - i.e., $\forall n \in \mathbb{N}, \exists t,s \in \mathbb{N} …$ is *incorrect*!

---

![[Principle of Simple Induction.pdf]]