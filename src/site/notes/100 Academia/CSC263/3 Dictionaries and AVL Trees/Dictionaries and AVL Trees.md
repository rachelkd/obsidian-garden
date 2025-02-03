---
{"dg-publish":true,"dg-path":"academia/CSC263/3 Dictionaries and AVL Trees/Dictionaries and AVL Trees.md","permalink":"/academia/csc-263/3-dictionaries-and-avl-trees/dictionaries-and-avl-trees/","tags":["cs","lecture","note","university"],"created":"2025-01-21T14:18:43.095-05:00","updated":"2025-01-30T17:39:39.416-05:00"}
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

> [!def]+ Ideally Height-Balanced Property
> - A binary tree of height $h$ is **ideally height-balanced** if
>     - Every node of depth $< h-1$ has two children

- If we could keep BST ideally height-balanced at all times, then:
    - Tree of $n$ nodes would be guaranteed to have height $h = \lceil \lg n \rceil$
    - Searches would always take time in $\mathcal{O}(\log n)$
- But insertions and deletions might destroy the *ideally height-balanced property*
    - Reorganization to restore property in addition to BST property might take $\mathcal{O}(n)$ worst-case time
- & AVL (height-balanced) trees are a *compromise* between arbitrary BSTs and ideally height-balanced BSTs.

> [!def]+ Height-Balance Property
> - A binary tree is **height-balanced** if:
>     - Heights of the left and right subtrees of every node differ by ==at most one==

> [!def]+ AVL Tree
> - An **AVL tree** is a height-balanced ==binary search tree==

- & Height of an *empty* binary tree (with no nodes) is ==$-1$==
    - Height of a tree consisting of a single node is $0$

![|300](https://i.imgur.com/VozRfr4.png)

![|400](https://i.imgur.com/FJQbT96.png)

> [!success]+ Good news
> - Worst case height of AVL tree with $n$ nodes is:
>     - & $1.44 \log_{2}(n+2)$
>         - i.e., $h \leq 1.44 \ln (n + 2)$
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

### Search

- Treat $T$ as an ordinary binary search tree


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



```
Tree-Search(x, k)
    if x == NIL or k == x.key
        return x
    if k < x.key
        return Tree-Search(x.left, k)
    else
        return Tree-Search(x.right, k)
```

</div></div>


### Insertion

> [!impl]+ Insertion
> - Insert $x$ in $T$ as in ordinary BSTs

#### Three (Easier) Cases

![|300](https://i.imgur.com/PEtpDyU.png)

##### Insert 8: Insertion without Imbalance Increases Height

![|300](https://i.imgur.com/gMh5mmr.png)

- New tree is still AVL-balanced

##### Insert 5: Insertion without Imbalance Keeps Height Same

![|600](https://i.imgur.com/cO4DqKK.png)

- New tree is still AVL-balanced

##### Insert 10: Insertion with Imbalance Keeps Height Same

![|600](https://i.imgur.com/gDFxK85.png)

- Consider the *minimum height* ancestor of new leaf which is no longer height balanced which is no longer height balanced as a result of insertion
    - Node 7
- Need to do a *single left rotation* on node 7

![|500](https://i.imgur.com/SaI5l2z.png)

- Red BFs are unchanged
- $h = 3$
    - Managed to insert new element without adding much to the height

<!-- break -->
- Three cases:
    1. & Insertion without imbalance ==increases== tree height
    2. & Insertion without imbalance keeps tree height ==same==
    3. & Insertion with imbalance keeps the height ==same==
        - Always true!

#### Single Rotations

- Case 3 used a single left rotation on node 7

![](https://i.imgur.com/VKM2ll1.png)

> [!thm]+ Single Rotation Properties
> 1. Insertion only affects the balance factors of its *ancestors*
> 2. Root balance factor depends on $h(A), h(C), h(E)$
> 3. Overall height of rotated tree remains the same (as before insertion)
>     - Nothing beyond it is affected in terms of height or balance factors
{ #3c89d0}


##### Insert 11

![|400](https://i.imgur.com/gLaTfXC.png)

- BF of node with 3 is unbalanced after insertion
    - → Need to rebalance subtree rooted at 3

![|400](https://i.imgur.com/s43uV2q.png)

- → Do a single left rotation on node 3

![|400](https://i.imgur.com/wOk6VDG.png)

- $ Height of subtree (rooted in the same position that node 3 was at before rotation) is still the same after rotation

#### Double Rotations

##### Insert 6

###### Attempt to Use a Single Rotation

![|400](https://i.imgur.com/gK22JLi.png)

- Node 3 is right-heavy → Do a single left rotation on node 3

![|400](https://i.imgur.com/T97R1KY.png)

- Node 7 is left-heavy → Do a single right rotation on node 7
    - Notice that the height of subtree also did not stay the same

![|400](https://i.imgur.com/fHTqThQ.png)

- Same tree that we started with after inserting 6

###### Use a Double Rotation

> [!warning] The root is ==left-heavy==, and the left ==child is right heavy==.

Consider this tree after the first single left rotation (on node 3).

![|400](https://i.imgur.com/wrGX8FX.png)

- Notice the *different signs* for the minimum height unbalanced ancestor of new node 6 and left child of such node
- Do a single left rotation on subtree rooted at left child (node 3)

![|400](https://i.imgur.com/0wtHXvy.png)

- Now the signs are the same
- → Do a single right rotation on node 7
    - i.e., Minimum height ancestor of new node 6 which is unbalanced

![|400](https://i.imgur.com/CFSYOuL.png)

#### Left Right Rotation

![](https://i.imgur.com/qCJmemN.png)

#### Rebalancing an AVL after Insertion

> [!info]+ The height-balance property of a node may have been destroyed as a result of the insertion of the new leaf in two ways:
> 1. New leaf increased height of right subtree of a node that was already right heavy
> 2. New leaf increased height of left subtree of a node that was already left heavy

Such cases are illustrated in Figure 1.

![|686](https://i.imgur.com/CaTXUMF.png)

> [!note]+
> - Insertion of new leaf can only affect balance factors of its ancestors.
> - Node $m$ in Figure 1 is assumed to be the *minimum height* ancestor of the new leaf which is no longer height balanced
>     - As a result of insertion

- & Since both cases are symmetric, we shall only consider case (1) in detail
    - Obtain other by changing every reference of “right” to “left”
    - Change “+” to “-”

- Both cases split into ==two== more cases:
    - One where a single rotation is sufficient
    - One where a double rotation is needed

![|626](https://i.imgur.com/uT6z44u.png)

##### Single Rotations

> [!question]+ What transformation can we do to rebalance subtree in Figure 2(a)?
> - **Single left rotation** on node $m$
>
> ![|800](https://i.imgur.com/DNWA0Gt.png)

> [!question]+ Transformation to rebalance Figure 1(b)
> - **Single right rotation**
>
> ![|700](https://i.imgur.com/RGxpV8H.png)

- $ Notice that the signs are the same for the unbalanced node and its left child for $--$ and right child for $++$

Recall:


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/academia/csc-263/3-dictionaries-and-avl-trees/dictionaries-and-avl-trees/#3c89d0" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



> [!thm]+ Single Rotation Properties
> 1. Insertion only affects the balance factors of its *ancestors*
> 2. Root balance factor depends on $h(A), h(C), h(E)$
> 3. Overall height of rotated tree remains the same (as before insertion)
>     - Nothing beyond it is affected in terms of height or balance factors

</div></div>


> [!thm]+ More Single Rotation Properties
> 1. Transformation rebalances the subtree rooted at node $m$ (S.1)
>     - Subtree becomes height-balanced again
> 2. Maintains the binary search tree property (S.2)
> 3. Can be done in constant time (S.3)
>     - Only few pointers have to be switched around
> 4. Keeps the height $m$ equal to its height *before* the insertion of the new node (S.4)
>     - Height $h + 2$

##### Double Rotations

![|626](https://i.imgur.com/uT6z44u.png)

> [!danger]+ Subtree in Figure 2(b) cannot be rebalanced by a single left rotation on node $m$
> - Node $m$ is right-heavy
> - Right child of node $m$ is left-heavy

- Assume that subtrees of node $B$ in Figure 2(b) are nonempty
    - i.e., $h \neq -1$

> [!question]+ What transformation do we use to rebalance Figure 2(b)?
> - **Double right left rotation** on node $m$
>
> Figure 4(a) shows these subtrees in more detail.
>
> ![|800](https://i.imgur.com/dnrko7L.png)

- ? How do we obtain the double right left rotation transformation?
    - Rotate $B$ to the right
    - Then rotate $C$ left in resulting subtree
- Balance factors labeled as “$*/*$” depend on whether new node $x$ was inserted under $T_{21}$ or $T_{22}$
    - $T_{22}$ is the first entry of the label
    - $T_{21}$ is the second entry of the label

###### If Subtrees of Node $B$ Are Empty

If subtrees of node $B$ in Figure 2(b) are empty i.e., $h = -1$,

- → $A$ only has a right child $B$
    - $B$ only has a *left* child new node $x$
- After double right-left rotation:
    - $x$ is the root of the subtree
    - $A, B$ are its left and right children, respectively

> [!idea]+ Can be thought of a degenerate instance of Figure 4
> - $C = x$
> - Subtrees $T_{1}, T_{21}, T_{22}$ all empty

###### Double Rotation for Figure 1(b)

- Do a **double left-right rotation**

![|700](https://i.imgur.com/bTn1HUF.png)

###### Double Rotation Properties

> [!thm]+ Double Rotation Properties
> 1. It rebalances the subtree rooted at $m$ (D.1)
>     - Subtree becomes height-balanced again
> 2. Maintains the binary search tree property (D.2)
> 3. Can be done in constant time (D.3)
>     - Only have to change a few pointers
> 4. Keeps the height of $m$ equal to that node’s height *before* insertion of new node (D.4)
>     - Height $h + 2$
