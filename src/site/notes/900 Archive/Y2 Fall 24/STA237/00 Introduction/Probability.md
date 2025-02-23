---
{"dg-publish":true,"permalink":"/900-archive/y2-fall-24/sta-237/00-introduction/probability/","tags":["#lecture","#note","university"],"created":"2024-09-05T10:46:11.000-04:00","updated":"2024-12-31T07:40:55.399-05:00"}
---


> Probability begins with some activity, process, or experiment whose outcome is uncertain. (Wagaman, 2021)

See [[900 Archive/Y2 Fall 24/STA237/00 Introduction/Randomness\|Randomness]].

> [!question] What is **probability**?
> - What we use to talk about the chances of some outcome of an experiment happening
>     - i.e., the likelihood or “chance” that an event occurs
>
> $$P(A) = \text{Probability of event A occuring}$$
> - A number between 0 and 1 that satisfies certain properties

Let $A$ be an event associated with some random experiment.
Imagine conducting the experiment over and over, infinitely often, keeping track how much $A$ occurs.
- **Trial:**
    - Each experiment
- **Success:**
    - If $A$ occurs when experiment is performed
- **Relative frequency** interpretation of probability:
    - the *proportion of successes*, $P(A)$
    - $\implies$ the probability of an event is equal to its relative frequency in a large number of trials

> [!important] To define probability carefully, we need to take a formal, axiomatic, mathematical approach.

# Relative Frequency

> [!def] Relative frequency interpretatin of probability
> - The probability of an event is equal to its relative frequency in a large (infinite) number of trials

Ex.: $P(\text{Getting a tails})$
$$= \lim_{n \to \infty} \frac{\text{\# tails}}{n}$$, where $n$ is the total number of coin flips

- Expect proportion of tails to be approx. 50%
