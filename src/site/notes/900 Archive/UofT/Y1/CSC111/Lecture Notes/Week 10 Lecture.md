---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/csc-111/lecture-notes/week-10-lecture/","created":"2024-03-22T16:03:31.594-07:00","updated":"2024-03-24T15:21:28.429-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/CSC111/_CSC111 Notes\|10]]
Course: #CSC111
Covered in: [[900 Archive/UofT/Y1/CSC111/Unit 5 - Sorting\|Unit 5 - Sorting]]
Date: 2024-03-22

[[900 Archive/UofT/Y1/CSC111/Course Notes/Mergesort\|Mergesort]]
[[Quicksort\|Quicksort]]

---
# Recursive Sorting Algorithms

# Mergesort algorithm

1. Split a list in two halves repeatedly
2. Halves with 0 or 1 elements are guaranteed sorted
3. Merge the two halves “on the way back”

![|500](https://i.imgur.com/KbIQFi4.png)

**Merge step: `_merge(l, r)`**

![](https://i.imgur.com/016W15b.png)

- We know that the smallest item is at the first index of each sublist
- Find the smaller item → add to new sorted list
- Increase index of the sublist that had an item removed

# Quicksort

- Algorithm:
    - Split a list (partitioning it) into the part smaller than some value (called *pivot*) and the part not smaller than that value
    - Sort these two parts
    - Recombine the list
- Differences between mergesort and quicksort:
    - Mergesort always splits the list in half
    - Quicksort chooses one element (*pivot*)
        - When you partition the list, you compare every element to the chosen pivot
        - All elements smaller than the pivot get put in a sublist (“`smaller`”)
        - All elements bigger than the pivot get put in a sublist (“`bigger`”)

### Partition step
- Begin with the unsorted list and select a pivot P at random
    - ![](https://i.imgur.com/tYmZOHk.png)
- Split list such that all elements to the left are lower than P and all to the right are higher
    - ![](https://i.imgur.com/ETkwCIf.png)
    - We know the ==pivot has found its spot== (i.e., pivot does not have to move again)

### Recursive step
- Repeat the same idea for the two partitions
- Pick *pivot*
- Process such that all lower than it are on the left; all higher on the right

![|500](https://i.imgur.com/kOiBXMy.png)
*You can pick the pivot randomly, or always at the beginning/end.*

## Implementation (inefficient, returns new list)

```python
def quicksort(lst: list) -> list:
    """Return a sorted list with the same elements as lst.
    
    This is a *non-mutating* version of quicksort; it does not mutate the input list.
    
    >>> quicksort([10, 2, 5, -6, 17, 10])
    [-6, 2, 5, 10, 10, 17]
    """
    if len(lst) < 2:
        return lst.copy()
    else:
        # 1. Divide the list into two parts
        pivot = lst[0]
        smaller, bigger = _partition(lst[1:], pivot)
        
        # 2. Sort each part recursively
        smaller_sorted = quicksort(smaller)
        bigger_sorted = quicksort(bigger)
        
        # 3. Combine the sorted parts
        return smaller_sorted + [pivot] + bigger_sorted
```

```python
def _partition(lst: list, pivot: Any) -> tuple[list, list]:
    """Return a partition of lst with the chosen pivot.
    
    Return two lists, where the first contains the items in lst
    that are <= pivot, and the second contains the items in list that are > pivot.
    """
    smaller = []
    bigger = []
    
    for item in list:
        if item <= pivot:
            smaller.append(item)
        else:
            bigger.append(item)
    
    return smaller, bigger
```

> [!question] Our quicksort algorithm returns the new sorted list (does not mutate the original one)
> - But, how many *new* lists are we creating each time?
> - Is this space-efficient?
>     - A call to `_partition` takes `n - 1` steps
>         - For every sublist, you are making a copy of almost exactly that list
>     - In `_partition`, we have `smaller` and `bigger`
>     - Creating a lot of new lists! → Must be better way

> [!important] Key idea.
> - For mutating the input list in a space-efficient way, use **in-place partition**
>     - Does not create a new list
> - i.e., write a version of `_partition` that mutates the list directly

# In-place quicksort

> [!important] Key idea.
> - Mutate the list rather than returning tow new ones
> - Mutated list will be organized so that ==all elements less than the pivot occur before some index==

→ [[Quicksort\|Quicksort]]

```python
def _in_place_partition(lst: list) -> None:  
    """Mutate lst so that it is partitioned with pivot lst[0].  
    Let pivot = lst[0]. The elements of lst are moved around so that lst looks like  
    [x1, x2, ... x_m, pivot, y1, y2, ... y_n],  
    where each of the x's is <= pivot, and each of the y's is > pivot.  
    >>> example_list = [10, 3, 20, 5, 16, 30, 7, 100]  
    >>> _in_place_partition(example_list) # pivot is 10  
    >>> example_list[3] # the 10 is now at index 3  
    10  
    >>> set(example_list[:3]) == {3, 5, 7}  
    True  
    >>> set(example_list[4:]) == {16, 20, 30, 100}  
    True  
    """  
    
    pivot = lst[0]  
    small_i = 1  
    big_i = len(lst)  
    
    while small_i < big_i: # while not (small_i == big_i):  
        # Loop invariants  
        assert all(lst[j] <= pivot for j in range(1, small_i))  
        assert all(lst[j] > pivot for j in range(big_i, len(lst)))  
        
        if lst[small_i] <= pivot:  
            # Increase the "smaller" partition  
            small_i += 1  
        else: # lst[small_i] > pivot  
            lst[small_i], lst[big_i - 1] = lst[big_i - 1], lst[small_i]  
            big_i -= 1  
    
    # Move the pivot to between the "smaller" and "bigger" parts  
    lst[0], lst[small_i - 1] = lst[small_i - 1], lst[0]
```

## Simulating slicing with indices

- We often want to operate on a part of a list, e.g., `f(lst, start, end)`
- Rather than creating a new list, we pass in the indices `start` and `end`

> [!important] Changes:
> - `_in_place_partition(lst)`→ `_in_place_partition(lst, start, end)`
> - `quicksort(lst)` → `_in_place_quicksort(lst, start, end)`

```python
def _in_place_quicksort(lst: list, b: int, e: int) -> None:
    """Sort the sublist lst[b:e] using the quicksort algorithm.

    Preconditions:
        - 0 <= b <= e <= len(lst)
    """
    if e - b < 2:
        # Do nothing; lst[b:e] is already sorted
        pass
    else:
        # Partition lst[b:e]
        pivot_index = _in_place_partition_indexed(lst, b, e)

        # Recursively sort each partition
        _in_place_quicksort(lst, b, pivot_index)  # smaller partition
        _in_place_quicksort(lst, pivot_index + 1, e)  # bigger partition
```
```python
def _in_place_partition_indexed(lst: list, b: int, e: int) -> int:
    """Mutate lst[b:e] so that it is partitioned with pivot lst[b].

    Return the new index of the pivot.

    Notes:

    - Only elements in lst[b:e] are rearranged.
    - _in_place_partition_indexed(lst, 0, len(lst)) is equivalent to _in_place_partition(lst),
      with an additional return value

    Preconditions:
        - 0 <= b < e <= len(lst)

    >>> my_lst = [10, 13, 20, 5, 16, 30, 7, 100]
    >>> my_pivot_index = _in_place_partition_indexed(my_lst, 1, 6)  # pivot is 13
    >>> my_pivot_index  # pivot is now at index 2
    2
    >>> my_lst[my_pivot_index]
    13
    >>> set(my_lst[1:my_pivot_index]) == {5}
    True
    >>> set(my_lst[my_pivot_index + 1:6]) == {16, 20, 30}
    True
    >>> my_lst[:1]
    [10]
    >>> my_lst[6:]
    [7, 100]
    """
    pivot = lst[b]
    small_i = b + 1
    big_i = e

    while small_i < big_i:  # while not (small_i == big_i):
        # Loop invariants (homework: update loop invariants to use b and e)
        # assert all(lst[j] <= pivot for j in range(1, small_i))
        # assert all(lst[j] > pivot for j in range(big_i, len(lst)))

        if lst[small_i] <= pivot:
            # Increase the "smaller" partition
            small_i += 1
        else:  # lst[small_i] > pivot
            # Swap lst[small_i] to back and increase the "bigger" partition
            lst[small_i], lst[big_i - 1] = lst[big_i - 1], lst[small_i]
            big_i -= 1

    # Move the pivot to between the "smaller" and "bigger" parts
    lst[b], lst[small_i - 1] = lst[small_i - 1], lst[b]

    # Return the new index of the pivot
    return small_i - 1
```
# Efficiency

![](https://i.imgur.com/qIkTwmp.png)

> [!question] How do we analyze the running time of recursive algorithms in general?
> - How long do the non-recursive parts take?
> - What is the structure of the recursive calls?

## Recursive Runtime Analysis

1. Find the recursive call structure (recursive tree diagram)
2. Analyze the non-recursive running time
3. Fill in the tree with the non-recursive running time of each call; calculate the sum of all of the non-recursive running times

## Mergesort

- The idea:
    - Break a list up (partition) into two halves
    - Mergesort each half
    - Recombine (merge) the halves

![|600](https://i.imgur.com/MIXwXiz.png)

![|600](https://i.imgur.com/VrfLsAl.png)

- What is the running time of `_merge` if $n$ = `len(lst1) + len(lst2)`?
    - Always $\Theta (n)$
    - `_merge` compares all the values in the list
    - If it does not compare all elements, the rest of the `left` or `right` list is copied in the `return` statement, so that completes the “comparisons not made” → $\Theta (n)$
### How many calls does `mergesort` make?

```python
def mergesort(lst: list) -> list:
    """Return a new sorted list with the same elements as lst.
    
    This is a *non-mutating* version of mergesort; it does not
    mutate the input list.
    """
    if len(lst) < 2:
        return lst.copy()
    else:
        mid = len(lst) // 2
        left_sorted = mergesort(lst[:mid])
        right_sorted = mergesort(lst[mid:])
        
        return _merge(left_sorted, right_sorted)
```

- Given a list of length $n \ge 2$, `mergesort` makes two recursive calls on lists of length $\approx \frac{n}{2}$
- **Simplifying assumption**: we will assume for our analysis of `mergesort` that the input list has length $n$ being a power of two (i.e., always divides evenly)

![](https://i.imgur.com/jl60UlF.png)


- The recursion tree for mergesort is a *binary tree*
- What is the height of this tree (in terms of $n$, the length of the input list)?
    - Recall, $n$ is a power of $2$ i.e., $n = 2^{k}$
    - You can divide $n$ by 2, $k$ times → $k = \log_{2}(n)$
    - Height is ==$\log_{2}(n) + 1$==
        - $+1$ for the root of the tree

> [!important] Running time of `mergesort`
> - Notice that we have a height of $\log_{2}n + 1$
> - At every level, the sum of that level is $n$
> - Thus, `mergesort` is $\Theta(n \log n)$
> 
> ![|500](https://i.imgur.com/PnTuS8A.png)
> ![](https://i.imgur.com/9SgzMmP.png)


## Quicksort (not in-place)

- Quicksort, in theory, is a mixed bag
- If we always choose a pivot that is an approximate median, then the two partitions are roughly equal → $O(n \log n)$
- If we always choose a pivot that is an approximate min./max., then the two partitions are very unequal → $O(n^{2})$

### Best case.
![](https://i.imgur.com/Jud1fgu.png)
*Same applies to in-place quicksort.*

### Worst case.
![|500](https://i.imgur.com/u8YoO1B.png)


