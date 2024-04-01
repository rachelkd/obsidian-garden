---
{"dg-publish":true,"dg-path":"academia/CSC111/Course Notes/Sorted Lists and Binary Search.md","permalink":"/academia/csc-111/course-notes/sorted-lists-and-binary-search/","created":"2024-03-14T15:09:42.589-04:00","updated":"2024-03-14T15:24:37.612-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|9]]
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 5 - Sorting\|Unit 5 - Sorting]]
Date: 2024-03-141

---
# Motivation.

Recall the standard way of search for an item in a list:

```python
def search(lst: list, item: Any) -> int:
    """Return whether item appears in this list."""
    for element in lst:
        if element == item:
            return True

    return False
```
*Worst-case running time of $\Theta (n)$.*

> [!tip] If we have a *sorted* list, then we do not need to check all of its elements: **binary search**

e.g., Suppose we have a sorted list `lst` containing one million numbers. We want to search for the number 111.
- If we check the middle element ($i = 500 000$), there are three possibilities:
    - If `111` is equal to `lst[500000]`, then
        - we have found the item and can return `True`
    - If `111` is less than `lst[500000]`, then
        - we know it must appear in the left half of the list
        - *ignore* all elements with index `>= 500000`
    - If `111` is greater than `lst[500000]`, then
        - we know it must appear in the right half of the list
        - *ignore* all elements with index `< 500000`

