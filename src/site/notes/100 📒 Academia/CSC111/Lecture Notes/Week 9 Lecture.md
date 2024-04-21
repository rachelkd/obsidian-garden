---
{"dg-publish":true,"dg-path":"academia/CSC111/Lecture Notes/Week 9 Lecture.md","permalink":"/academia/csc-111/lecture-notes/week-9-lecture/","created":"2024-03-12T15:26:00.268-04:00","updated":"2024-04-19T23:30:14.026-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|9]]
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 5 - Sorting\|Unit 5 - Sorting]]
Date: 2024-03-12

---
# Sorting

## Selection sort

- Divide input list into two parts:
    - sorted and unsorted
    - ![](https://i.imgur.com/FYxqUQ3.png)
- Algorithm:
    1. List starts entirely unsorted → empty sorted section
    2. At each loop interaction, move the smallest item in the unsorted section to just after the end of the sorted section
    3. Increase size of sorted section by 1
    4. At end of algorithm, the entire list is sorted → empty unsorted section
    - ![](https://i.imgur.com/72nyc7O.png)

### Implementation of selection sort

```python
def selection_sort(lst: list) -> None:
    """Sort the given list using the selectino sort algorithm.
    
    Note that this is a *mutating* function.
    
    >>> lst = [3, 7, 2, 5]
    >>> selection_sort(lst)
    >>> lst
    [2, 3, 5, 7]
    """
    for i in range(0, len(lst)):
        # Loop invariants:
        # - lst[:i] is sorted
        # - if i > 0, lst[i - 1] is less than or equal to all items in lst[i:len(lst)]
        
        # 1. Find the index of the smallest element in the unsorted section
        index_of_smallest = _min_index(lst, i)
        
        # 2. Swap the smallest element with the end of the sorted section
        lst[i], lst[index_of_smallest] = lst[index_of_smallest], lst[i]

def _min_index(lst: list, i: int) -> int:
    min_index_so_far = i
    for j in range(i + 1, len(lst)):
        if lst[j] < lst[min_index_so_far]:
            min_index_so_far = j
    return i

```
*Run time of `selection_sort` is $\Theta(n^{2})$.*
### Running time

For `_min_index(lst, i)`:
- Let $n$ be the length of the input list `lst`.
- The statements outside of the loop take constant time (1 step).
- Loop iterates $n - i - 1$ times (for $j = i+1, i+2, \dots, n - 1$)
- Loop body takes constant time (1 step)
- → Running time of the loop is $n - i - 1$ steps
- Total of $1 + (n-i-1)$ steps $\implies \Theta(n-i)$

For `selection_sort`:
- Let $n$ be the length of the input list `lst`
- Loop runs $n$ times (for $i = 0, 1, \dots, n - 1$)
- Each iteration $i$ takes:
    - $n - i$ steps for `_min_index(lst, i)`
    - $+ 1$ step for the constant time operations
- Thus, the total running time is $\sum\limits_{i=0}^{n-1}(n - i + 1) \in \Theta(n^{2})$

### Running time: best case scenario.

- What happens if we call **selection sort** on a list that is already sorted (e.g., `[0, 1, 2, 3, 4]`)
    - The running time is still $\Theta(n^{2})$

## Insertion sort

- Insertion sort also divides the list into a sorted part
- Two steps that constitute *one pass of insertion sort*:
    1. Obtain the leftmost value in the unsorted part, and
    2. Insert the value in its correct place in the sorted part (i.e., so that the sorted part remains sorted)
    - ![|400](https://i.imgur.com/S9Bkqcz.png)

### Implementation

```python
def insertion_sort(lst: list) -> None:
    for i in range(0, len(lst)):
        # Loop invariants:
        # - lst[:i] is sorted
        _insert(lst, i)

def _insert(lst: list, i: int) -> None:
    """Move lst[i] so that lst[:i + 1] is sorted.
    
    Preconditions:
        - 0 <= i < len(lst)
        - is_sorted(lst[:i])
    """
    for j in range(i, 0, -1):
        if lst[j] >= lst[j - 1]:
            return
        lst[j], lst[j - 1] = lst[j - 1], lst[j]
```

### Runtime analysis (`_insert`)
#### Upper bound on worst-case runtime
- Loop runs at most $i$ iterations (ignoring early return)
- Each iteration takes 1 step
- $\in \Theta(i)$
#### Lower bound on worst-case runtime
- Let $n, i \in \mathbb{N}$. Assume $i < n$
- Let `lst` be a list of length $n$ where the first $i$ elements are all 1, and the element at index $i$ is 0.
- So, the worst case running time is $\Theta(i)$

### Runtime analysis (`insertion_sort`)
#### Upper bound on worst-case runtime
- Loop runs at most $n$ times (for $i = 0,1,\dots,n-1$)
- Each iteration takes at most $i$ steps
- $\Theta(n^{2})$
#### Lower bound on worst-case runtime
- Let $n \in \mathbb{N}$.
- Let `lst` be the list `[n - 1, n - 2, ..., 1, 0]`
- In this case, for every $i \in \mathbb{N}$ with $i < n$, `lst[i]` is always less than every element in `lst[:i]`
- WC Running time is $\Theta(n^{2})$

## Selection sort vs. insertion sort

> [!info] What happens if we call `insertion_sort` on a list that is already sorted?
> - Running time would be $\Theta(n)$ vs. $\Theta(n^{2})$
> - More efficient than selection sort!


| Selection sort                                           | Insertion sort                                              |
| -------------------------------------------------------- | ----------------------------------------------------------- |
| Builds up a sorted sublist one element at a time         | Builds up a sorted sublist one element at a time            |
| *Spends time selecting* element to add to sorted sublist | Selecting next element to add is easy                       |
| Inserting into sorted sublist is easy (swap)             | *Spends time inserting* the element into the sorted sublist |
| Always $\Theta(n^{2})$                                   | Worst case $\Theta(n^{2})$<br>On a sorted list, $\Theta(n)$ |

# Generalized Sorting

> [!warning] We do not want to define a custom sorting function for every type of comparison we want to make!

- Idea:
    - Modify our sorting function to take an optional function parameter (`key`) that computes the value to sort by

```python
def insertion_sort_by_key(lst: list,
                          key: Optional[Callable] = None) -> None:
    """Sort the given list using the insertion sort algorithm.

    If key is not None, sort the items by their corresponding
    return value when passed to key.
    """

    for i in range(0, len(lst)):
        _insert_by_key(lst, i, key)

def _insert_by_key(lst: list, i: int, key: Optional[Callable] = None) -> None:
    """Move lst[i] so that lst[:i + 1] is sorted.

    If key is not None, sort the items by their corresponding
    return value when passed to key.

    Precondition:
        - key is either None or it is a single-argument function that can be
         called on every element of lst without error
    """
    if key is None:
        # Same as original insertion sort algorithm
        if lst[j - 1] <= lst[j]:
                return
        else:
            lst[j - 1], lst[j] = lst[j], lst[j - 1]

    else: # `key` is a function that we should use to compare values
        for j in range(i, 0, -1):
            if key(lst[j - 1]) <= key(lst[j]):
                return
            else:
                lst[j - 1], lst[j] = lst[j], lst[j - 1]
```

# Built-in sorting, revisited

> [!info] `sorted` and `list.sort` have this optional `key` parameter already.
> ![](https://i.imgur.com/fPjkJzd.png)
> ![|400](https://i.imgur.com/uGye2VJ.png)

# Complex keys
## Anonymous functions

- Quick and simple ==throwaway functions==
- What do anonymous functions have?
    - Parameters
    - One expression that they return the value of
### Syntax

```python
lambda <param> ... : <body>
```

Examples:
```python
lambda x: x + 1
lambda x, lst: x * len(lst)
```
*When an anonymous function is called, its body is evaluated, and the value of the body is returned.*

### Sort a list of strings by the number of times `'a'` appears in them. #example 

```python
>>> lst = ['aaa', 'b', 'a']
>>> insertion_sort_by_key(lst, lambda s: s.count('a'))
>>> lst
['b', 'a', 'aaa']
```

### Final notes on anonymous functions

> [!info] Anonymous functions are much more restricted compared to general function definitions.
> - Body of an anonymous function must be a single *expression*, not a sequence of statements

