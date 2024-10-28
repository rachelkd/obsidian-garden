---
{"dg-publish":true,"permalink":"/100-academia/sta-237/02-conditional-probability-and-independence/week-3-conditional-probability-and-independence/","tags":["#lecture","#note","stats","university"],"created":"2024-09-17T13:54:30.000-07:00","updated":"2024-10-11T21:17:47.656-07:00"}
---


> [!goal]- Learning Objectives
> 
> 1. Define conditional probability and describe the difference between P(A|B) and P(B|A).
> 2. Distinguish between mutually exclusive (disjoint) and independent events.
> 3. Assess whether or not events are independent.
> 4. Represent an event as several disjoint subsets to compute its probability using the law of total probability.
> 5. Recognize the difference between conditional and unconditional events and use appropriate rules (e.g., multiplication rule, Bayes’ theorem) to solve problems.

---

# Review and Some Notes

- [[100 Academia/STA237/01 Events and Probabilities/Counting Techniques\|Counting Techniques]]
- ==Draw sample space== when drawing Venn diagrams to represent events

# Conditional Probability

- [[100 Academia/STA237/02 Conditional Probability and Independence/Conditional Probability\|Conditional Probability]]

# Bayes’ Rule and Inverting a Conditional Probability

- [[100 Academia/STA237/02 Conditional Probability and Independence/Bayes’ Rule and Inverting a Conditional Probability\|Bayes’ Rule and Inverting a Conditional Probability]]

# Independence and Dependence

- [[100 Academia/STA237/02 Conditional Probability and Independence/Independence and Dependence\|Independence and Dependence]]

# Summary

- Conditional probability formula
    - $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
- General multiplication rule
    - $$P(A \cap B) = P(A \mid B)P(B) = P(B \mid A)P(A)$$
- Law of total probability
    - $$P(A) = P(A \mid B)P(B) + P(A \mid B^{C})P(B^{C})$$
- Bayes’ Formula
    - $$P(B \mid A) = \frac{P(A \mid B)P(B)}{P(A \mid B)P(B) + P(A \mid B^{C})P(B^{C})}$$
- Independent events:
    - Events $A, B$ are independent $\iff P(A \mid B) = P(A)$
    - $\iff P(A \cap B) = P(A)P(B)$
- Mutual independence
    - $P(A_{1}, \cdots , A_{k}) = P(A_{1}) \times \cdots \times P(A_{k})$ for every finite subcollection $A_{i}, \cdots, A_{k}$
- Pairwise independence
    - $P(A_{i} \cap A_{j}) = P(A_{i})P(A_{j})$ for all pairs of events
