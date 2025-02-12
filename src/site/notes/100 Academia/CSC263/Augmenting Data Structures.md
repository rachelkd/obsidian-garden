---
{"dg-publish":true,"dg-path":"academia/CSC263/Augmenting Data Structures.md","permalink":"/academia/csc-263/augmenting-data-structures/","tags":["cs","lecture","note","university"],"created":"2025-02-06T14:00:31.874-05:00","updated":"2025-02-06T15:00:25.600-05:00"}
---


# Augmenting Data Structures

#todo

> [!info]- Deliberate Compromise

## Implement `RANK`

> [!idea] Perform `SEARCH` on k and keep track of the current rank. Each time you go down a level by going right, add the size of the subtrees to the left that you skipped. This is the local rank of the parent p you just left in the subtree rooted at p. Keep track of accumulating ranks.

### Questions

> [!question]- How do we calculate the local rank of a node $m$ in the tree rooted at $m$?
> - $\texttt{m.left.size} + 1$

> [!question]- When we recurse on the left subtree, what do we add?
> 0

> [!question]- When we recurse on the right subtree, what do we add?
> Local rank of parent i.e., left.size + 1

> [!question]- When we find $x$, how do we determine its true rank?
> `skipped_nodes + local_rank`

```pseudocode
Rank(T, k)

Tree-Rank(root, k, skipped_nodes):
```

- ? What about updates of new information in old operations?
    - Insertion:
        - We want to make sure that you can keep the $\log n$ time
        - Be able to know something about the left/right subtree and cut that part out to achieve $\log n$ time

## Overlapping Intervals

We have a set of events each of which has a start time and an end time.
We need the following operations and would like them all in $\mathcal{O}(\log n)$ time where $n$ is the number of items in the collection:

- When we see $\log n$ time, we should think AVL trees
