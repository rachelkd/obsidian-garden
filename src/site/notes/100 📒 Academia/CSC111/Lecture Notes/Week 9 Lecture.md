---
{"dg-publish":true,"dg-path":"academia/CSC111/Lecture Notes/Week 9 Lecture.md","permalink":"/academia/csc-111/lecture-notes/week-9-lecture/","created":"2024-03-12T15:26:00.268-04:00","updated":"2024-03-12T16:32:54.207-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|9]]
Course: #CSC111
Covered in: [[Unit 5 - Sorting\|Unit 5 - Sorting]]
Date: 2024-03-12

---
# Sorting

## Selection sort

- Divide input list into two parts:
    - sorted and unsorted
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

## Insertion sort

- Insertion sort also divides the list into a sorted part
- Two steps that constitute *one pass of insertion sort*
    1. Obtain the leftmost value in the unsorted part, and
    2. Insert the value in its correct place in the sorted part (i.e., so that the sorted part remains sorted)

### Implementation

```python
def insertion_sort(lst: list) -> None:
    for i in range(0, len(lst)):
        # Loop invariants:
        # - lst[:i] is sorted
        
```