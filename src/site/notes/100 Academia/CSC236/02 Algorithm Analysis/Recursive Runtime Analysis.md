---
{"dg-publish":true,"permalink":"/100-academia/csc-236/02-algorithm-analysis/recursive-runtime-analysis/","tags":["lecture","note","university"],"created":"2024-11-07T12:48:56.365-05:00","updated":"2024-11-07T14:00:56.512-05:00"}
---


# Review

- We have an *algorithm $A$*
    - with inputs $x \in \mathcal{I}, \mathcal{I} = \{ \text{all inputs for } A \}$
- **Runtime function**
    - $RT_{A}(x) =$ number of “steps” to run $A$
    - or $RT(x)$ if there is only one algorithm

![](https://i.imgur.com/zQSjm3E.png)

> [!warning]+ This is not a function!
> For every “size” of input, there are *many* times for different inputs of the ==same size==

- Turn into function of *input size*:
    - **Worst case**: $WC(n) = \text{max}\{ RT(x) : x \in \mathcal{I} \wedge \text{size}(x) = n \}$
    - **Best case**: $BC(n) = \text{min}\{ RT(x) : x \in \mathcal{I} \wedge \text{size}(x) = n \}$
    - **Average case**: $AC(n) = \frac{\sum RT(x) \text{ over the set}}{\text{\# inputs of size }n}$
        - Often, average case is calculated using [[100 Academia/STA237/04 Continuous Random Variables/Introduction to Continuous Random Variables\|probability distribution functions]] and its expectation

> [!tip] In practice, finding the *exact* expression for $WC(n)$ is difficult and not useful!

- **Asymptotic Notation**:
    - $\mathcal{O} :$ upper bound $\neq$ worst case
    - $\Omega :$ lower bound $\neq$ best case
    - $\theta :$ tight bounds $\neq$ average case

> [!info]+ $\mathcal{O}, \Omega, \theta$ are **properties** of a function
> - Worst/best/average case *specifies* a function
> - Can prove an upper bound and lower bound on BOTH worst case and best case

---
#todo