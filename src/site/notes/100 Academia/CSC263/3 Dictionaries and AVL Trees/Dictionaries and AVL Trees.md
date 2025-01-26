---
{"dg-publish":true,"dg-path":"academia/CSC263/3 Dictionaries and AVL Trees/Dictionaries and AVL Trees.md","permalink":"/academia/csc-263/3-dictionaries-and-avl-trees/dictionaries-and-avl-trees/","tags":["cs","lecture","note","university"],"created":"2025-01-21T14:18:43.095-05:00","updated":"2025-01-25T13:35:21.113-05:00"}
---


# Dictionaries and AVL Trees

## Dictionary ADT

> [!def]+ Dictionary ADT
> - `Insert(S, x)`
>     - Insert both the ==key== and ==value==
> - `Search(S, k)`
>     - Just the key
> - `Delete(S, x)`
>     - Assume that we can directly access the element in the data structure i.e., we have searched for it already
>     - Then remove that element

- Something about ==incremental costs==?

> [!summary]+ Different implementations of dictionaries
> 1. Unsorted array
> 2. Sorted array
> 3. Unsorted linked list
> 4. Sorted linked list
> 5. Direct-access table
> 6. Hash table
> 7. Binary search tree
> 8. Balance search tree

### Approach 1: An Unsorted Array

![](https://i.imgur.com/2gR2lPi.png)

- Search:
    - $\mathcal{O}$: Go through every element at most
    - $\Omega$: Case where key is not in the dictionary or is the last element
    - $\implies \Theta(n)$
- Insert:
    - Know the size of the dictionary, but
    - Need to search if key already exists in dictionary first
    - & Times for `Insert` and `Delete` are *in addition* to time to search for the element

| Data Structure | Search      | Insert                                                        | Delete                                                                  |
| -------------- | ----------- | ------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Unsorted array | $\Theta(n)$ | $\Theta(n) + \Theta(1)$<br><br>(Search if key already exists) | $\Theta(n) + \Theta(1)$<br><br>(Search for key to get pointer to value) |

### Approaches 2-4

> [!important] Times for `Insert` and `Delete` are ==in addition== to time to *search* for the element.

- % Sorted array:
    - `Search`
        - *Binary search*
    - `Insert`
        - $\Omega$: When we are inserting the smallest element
    - `Delete`
        - At most move every element to the left
        - $\Omega$: Removing the first element → Everything shifts to the left
- % Unsorted linked list:
    - `Insert`
        - Insert at the beginning of the linked list
- % Sorted linked list
    - `Search`
        - Binary search does not work with linked lists
    - `Insert`
        - If you know where predecessor is, then inserting is easy
        - Same with `Delete`

| Data Structure       | Search           | Insert        | Delete                                  |
| -------------------- | ---------------- | ------------- | --------------------------------------- |
| Sorted array         | $\Theta(\log n)$ | $+ \Theta(n)$ | $+\Theta(n)$                            |
| Unsorted linked list | $\Theta(n)$      | $+\Theta(1)$  | $+ \Theta(1)$<br><br>(If no duplicates) |
| Sorted linked list   | $\Theta(n)$      | $+ \Theta(1)$ | $+ \Theta(1)$                           |

### Approach 5: A Direct-Access Table

![](https://i.imgur.com/FiLPE0o.png)

| Data Structure      | Search      | Insert      | Delete      |
| ------------------- | ----------- | ----------- | ----------- |
| Direct-access table | $\Theta(1)$ | $\Theta(1)$ | $\Theta(1)$ |

- Approaches 1-5 take $\mathcal{O}(n)$ space
- & Direct-access tables need one location per possible key
    - Suppose keys are 32-bit integers
        - → Max integer value is $2^{32}$
    - Then, we have $\Omega(2^{32})$ space

### Approach 6: Hash Table

- & *Map* all possible keys onto a ==smaller set== of actual keys from which you do direct access

![](https://i.imgur.com/fF1bsmF.png)

| Data Structure | Search       | Insert       | Delete       |
| -------------- | ------------ | ------------ | ------------ |
| Hash table     | $\Theta(1)$? | $\Theta(1)$? | $\Theta(1)$? |

> [!attention]+ There is a chance that something may map to the same thing.
> - **Collision**
> - ? How do we handle collision?
>     - Take all values in collusion and put it in a linked list
>     - Then, search the linked list
> - Worse case could be:
>     - Search in $\Theta(n)$
>     - Insert in $+\Theta(1)$
>     - Delete in $+\Theta(1)$

### Approach 7: Binary Search Tree

## AVL Trees

### Introduction

> [!tldr] Notes on AVL Trees (Hadzilacos)

> [!warning]+ Binary search trees work well in the average case, but still have the drawback of ==linear== worst case time complexity for all three operations.
> - i.e., `Search`, `Insert`, and `Delete`

> [!def]+ Ideally height-balanced Property
> - A binary tree of height $h$ is **ideally height-balanced** if
>     - Every node of depth $< h-1$ has two children

- If we could keep BST ideally height-balanced at all times, then:
    - Tree of $n$ nodes would be guaranteed to have height $h = \lceil \lg n \rceil$
    - Searches would always take time in $\mathcal{O}(\log n)$
- But insertions and deletions might destroy the *ideally height-balanced property*
    - Reorganization to restore property in addition to BST property might take $\mathcal{O}(n)$ worst-case time
- & AVL (height-balanced) trees are a *compromise* between arbitrary BSTs and ideally height-balanced BSTs.

> [!def]+ Height-balance Property
> - A binary tree is **height-balanced** if:
>     - Heights of the left and right subtrees of every node differ by ==at most one==
> - An **AVL tree** is a height-balanced BST

- & Height of an *empty* binary tree (with no nodes) is ==$-1$==
    - Height of a tree consisting of a single node is $0$

![|300](https://i.imgur.com/VozRfr4.png)

![|400](https://i.imgur.com/FJQbT96.png)

> [!success]+ Good news
> - Worst case height of AVL tree with $n$ nodes is:
>     - & $1.44 \log_{2}(n+2)$
>     - → `Search` operation can be carried out in $\mathcal{O}(\log n)$ time in the worst case
> - Insertions and deletions can be done in $\mathcal{O}(\log n)$ time
>     - While preserving the AVL-ness of tree
> - AVL trees work very well on the average case too

- [c] Algorithms for insertion and deletion are complex

#### Balance Factor

> [!def]+ Balance factor
> - Let $h_{R}, h_{L}$ be the heights of the right and left subtrees of a node $m$ in a binary tree respectively.
> - The **balance factor** of $m$, $BF[m]$, is defined as $$BF[m] = h_{R} - h_{L}$$
>
> > [!example]
> > ![|400](https://i.imgur.com/0QRQF12.png)
>
> - For an AVL tree, the balance factor of any node is:
>     - $-1, 0,$ or $+1$
> - If $BF[m] = +1$, $m$ is *right-heavy*
> - If $BF[m] = -1$, $m$ is *left-heavy*
> - If $BF[m] = 0$, $m$ is *balanced*

> [!impl]+ In AVL trees, we will store $BF[m]$ in each node $m$
> - When we draw:
>     - Put a $+, -,$ or $0$ next to each node
>     - Indicates node balance factor is $+1, -1,$ or $0$ respectively

> [!example]+ Which tree is height-balanced?
> ![](https://i.imgur.com/jYO8rXl.png)
> - Tree on left only

### Insertion

![|300](https://i.imgur.com/PEtpDyU.png)

- Insert 8
    - ![|300](https://i.imgur.com/gMh5mmr.png)
    - New tree is still AVL-balanced
- Insert 5
