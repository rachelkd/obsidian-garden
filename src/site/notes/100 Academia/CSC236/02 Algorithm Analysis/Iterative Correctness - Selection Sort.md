---
{"dg-publish":true,"dg-path":"academia/CSC236/02 Algorithm Analysis/Iterative Correctness - Selection Sort.md","permalink":"/academia/csc-236/02-algorithm-analysis/iterative-correctness-selection-sort/","tags":["cs","lecture","note","university"],"created":"2024-10-26T16:09:33.890-04:00","updated":"2024-11-05T02:06:47.470-05:00"}
---


```python
# Pre(A, b): A is a non-empty list of comparable elements ∧ b in naturals ∧ b < len(A)
# Return m s.t. Post(A, b, m):
#    m in naturals ∧ b <= m < len(A) ∧ A[m] <= A[b:len(A)]
def find_min(A, b): ...
```

*Implementation can be found in [[100 Academia/CSC236/02 Algorithm Analysis/Iterative Correctness#Turn For Loops into While Loops\|Iterative Correctness]].*

# Selection Sort

```python title:"Selection Sort Contract"
# Pre(A): A is a non-empty list of comparable elements
# Post(A): Elements of A have been *rearranged* in sorted (non-decreasing) order.
```

- “Rearranged”
    - By the time that I finish running the algorithm, $A$ should still contain all the elements it did before
    - ==No new element==
    - ==No element removed==

> [!note]+ Postconditions are not always *outputs*, but they are always *outcomes*
> - This algorithm does not return anything, but mutates

```python title:"Selection Sort (Inplace)"
# Pre(A): A is a non-empty list of comparable elements
# Post(A): Elements of A have been *rearranged* in sorted (non-decreasing) order.
def sort(A):
    l = len(A)
    for i in range(0, l - 1):
        m = find_min(A, i)
        A[i], A[m] = A[m], A[i]
```

> [!goal] Let’s prove that this works

# For-Loops and While Loop Equivalents

```python
for i in range(0, l - 1):
    body(i)
```

**IS EQUIVALENT TO**

```python
i = 0

while i < l - 1:
    body(i)
    i = i + 1
```

# Properties of For-Loops

- $i \in \mathbb{N} \wedge 0 \leq i \leq l - 1$ is **invariant**
- At the end, $i =  l - 1$
- Variant $l - 1 - i$ proves **termination**

# Invariants and Variants

> [!note]+ Convention
> - $v$ = value of variable $v$ at *start* of iteration
> - $v'$ = value at the *end* of iteration

- $I_{0}$
    - & $A[0:0] = []$ is sorted
        - Sorted because there are no elements
        - Nothing in the list that you can use to prove that it is *not* sorted (i.e., counterexample)
    - & $A[0:0] = [] \leq A[0:l]$
        - True, because there is no element in $A[0:0]$ to make this false
    - Both cases are examples of **vacuous truths**

```python title:"Proof of Correctness"
# Pre(A): A is a non-empty list of comparable elements
# Post(A): Elements of A have been *rearranged* in sorted (non-decreasing) order.
def sort(A):
    l = len(A)
    # I_0:
    # A[0:0] = [] is sorted
    # A[0:0] = [] <= A[0:l]    (vacuously true)
    for i in range(0, l - 1):
        # Assume I:
        # A[0:i] is sorted ∧ A[0:i] <= A[i:l]
        
        # find_min Pre: 
        # A is a non-empty list of comparable elements from Pre(A)
        # ∧ i is some natural number in range(0, l-1) 
        # ∧ i < l = len(A)
        m = find_min(A, i)
        # find_min Post:
        # A[m] <= A[i:l] ∧ m ∈ ℕ ∧ i <= m < l
```

- Calling helper `find_min(A, i)`: ==Make sure you meet the pre-conditions!==
    - $Pre(A) : A$ is a non-empty list of comparable elements
    - $i$ is some natural number in $\text{range}(0, l - 1)$
    - $\implies Pre_{\text{find\_{min}}}(A,b)$

```python        
        A[i], A[m] = A[m], A[i]
        # WTP I':
        # A'[0:i'] = A'[0:i + 1] = A'[0:i]A'[i] = A'[0:i]A'[m] is sorted
        #    since A[0:i] is sorted and A[0:i] <= A[m] (from I)
        # Also, A[m] <= A[i:l]
        #    therefore A'[0:i'] <= A'[i':l]
        #    since A'[0:i] <= A'[i':l] by I
        #    and A'[i] = A[m] <= A'[i':l]
```

- $I'$
    - ![](https://i.imgur.com/y0NiH65.png)
        - Intuition: We know that $A[0:i]$ is sorted by IH
        - Then, $A[i]$ can never be out of order with respect to everything before it, since $A[0:i] \leq A[i:l]$ by IH
        - However, need to make sure you put an element in $A[i]$ that is sorted with respect to everything that follows in $A$ → Move smallest element in $A[i:l]$ to $A[i]$
    - ![](https://i.imgur.com/eOS0NiD.png)

- $\text{Post}(A)$:
    - When loop ends,
        - $i = l - 1$
        - $A[0:i] = A[0:l-1]$ is sorted
        - and $A[0:i] = A[0:l-1] \leq A[l-1:l] = A[i:l]$
        - ![|400](https://i.imgur.com/IWUEpZy.png)
        - $\therefore A$ is sorted