---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/csc-111/course-notes/mergesort/","created":"2024-03-17T10:29:42.273-07:00","updated":"2024-03-22T16:12:22.559-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/CSC111/_CSC111 Notes\|10]]
Course: #CSC111
Covered in: [[900 Archive/UofT/Y1/CSC111/Unit 5 - Sorting\|Unit 5 - Sorting]]
Date: 2024-03-17

---
# Mergesort

 > [!important] A divide-and-conquer algorithm.
 
- Algorithm:
{ #f89319}

    - Divide the input into the left half and right half
    - Recursively sort each half
    - Merge each sorted half together

# Implementation
#### 1. Function header

```python
def mergesort(lst: list) -> list:
    """Return a new sorted list with the same elements as lst.
    
    This is a *non-mutating* version of mergesort; it does not
    mutate the input list.
    """
```

#### 2. Base case
- Implementation is recursive → need a base case
- Base case:
    - List has fewer than two elements

```python
def mergesort(lst: list) -> list:
    """...""""
    
    if len(lst) < 2:
        return lst.copy()  # Return new list object
    else:
        ...
```

#### 3. Recursive step

```python
def mergesort(lst: list) -> list:
    """...""""
    
    if len(lst) < 2:
        return lst.copy()
    else:
        # Divide list into two parts, and sort them recursively
        mid = len(lst) // 2
        left_sorted = mergesort(lst[:mid])
        right_sorted = mergesort(lst[mid:])
```

#### 4. The merge operation

```python
def _merge(lst1: list, lst2: list) -> list:
    """Return a sorted list with the elements in lst1 and lst2.
    
    Preconditions:
        - is_sorted(lst1)
        - is_sorted(lst2)
    """
```
*Separate out the main work into a helper function.*

- Build up a sorted list one element at a time, by repeatedly removing the next smallest element from `lst1` or `lst2`
    - Since both lists are sorted, we know the smallest element is at `lst1[0]` and `lst2[0]`

Suppose we have the lists `lst1 = [-1, 3, 7, 10]` and `lst2 = [-3, 0, 2, 6]`.
- We can directly compare `lst1[0]` $= -1$ and `lst2[0]` $= -3$

| Unmerged items in `lst1` | Unmerged items in `lst2` | Comparison    | Sorted list            |
| ------------------------ | ------------------------ | ------------- | ---------------------- |
| `[-1, 3, 7, 10]`         | `[-3, 0, 2, 6]`          | `-1` vs. `-3` | `[-3]`                 |
| `[-1, 3, 7, 10]`         | `[0, 2, 6]`              | `-1` vs. `0`  | `[-3, -1]`             |
| `[3, 7, 10]`             | `[0, 2, 6]`              | `3` vs. `0`   | `[-3, -1, 0]`          |
| `[3, 7, 10]`             | `[2, 6]`                 | `3` vs. `2`   | `[-3, -1, 0, 2]`       |
| `[3, 7, 10]`             | `[6]`                    | `3` vs. `6`   | `[-3, -1, 0, 2, 3]`    |
| `[7, 10]`                | `[6]`                    | `7` vs. `6`   | `[-3, -1, 0, 2, 3, 6]` |
| `[7, 10]`                | `[]`                     | N/A           | `[-3, -1, 0, 2, 3, 6]` |
- Our final result is `[-3, -1, 0, 2, 3, 6] + [7, 10]`

```python
def _merge(lst1: list, lst2: list) -> list:
    """Return a sorted list with the elements in lst1 and lst2.
    
    Preconditions:
        - is_sorted(lst1)
        - is_sorted(lst2)
    """
    i1, i2 = 0, 0
    sorted_so_far = []
    
    while i1 < len(lst1) and i2 < len(lst2):
        # Loop invariant:
        # sorted_so_far is a merged version of lst1[:i1] and lst2[:i2]
        assert sorted_so_far == sorted(lst[:i1] + lst[:i2])
        
        if lst1[i1] <= lst2[i2]:
            sorted_so_far.append(lst1[i1])
            i1 += 1
        else:
            sorted_so_far.append(lst2[i2])
            i2 += 1
            
    assert i1 == len(lst1) or i2 == len(lst2)
    
    # In either case, the remaining unmerged elements can be concatenated to sorted_so_far
    if i1 == len(lst1):
        return sorted_so_far + lst2[i2:]
    else:
        return sorted_so_far + lst1[i1:]
```

#### Full implementation

```python
def mergesort(lst: list) -> list:
    """Return a new sorted list with the same elements as lst.
    
    This is a *non-mutating* version of mergesort; it does not
    mutate the input list.
    """
    if len(lst) < 2:
        return lst.copy()
    else:
        # Divide the list into two parts and sort them recursively
        mid = len(lst) // 2
        left_sorted = mergesort(lst[:mid])
        right_sorted = mergesort(lst[mid:])
        
        # Merge the two sorted halves
        return _merge(left_sorted, right_sorted)
```

```python
def _merge(lst1: list, lst2: list) -> list:
    """Return a sorted list with the elements in lst1 and lst2.
    
    Preconditions:
        - is_sorted(lst1)
        - is_sorted(lst2)
    """
    i1, i2 = 0, 0
    sorted_so_far = []
    
    while i1 < len(lst1) and i2 < len(lst2):
        # Loop invariant:
        # sorted_so_far is a merged version of lst1[:i1] and lst2[:i2]
        assert sorted_so_far == sorted(lst[:i1] + lst[:i2])
        
        if lst1[i1] <= lst2[i2]:
            sorted_so_far.append(lst1[i1])
            i1 += 1
        else:
            sorted_so_far.append(lst2[i2])
            i2 += 1
            
    assert i1 == len(lst1) or i2 == len(lst2)
    
    # In either case, the remaining unmerged elements can be concatenated to sorted_so_far
    if i1 == len(lst1):
        return sorted_so_far + lst2[i2:]
    else:
        return sorted_so_far + lst1[i1:]
```

