---
{"dg-publish":true,"dg-path":"academia/CSC111/Course Notes/Recursive Lists.md","permalink":"/academia/csc-111/course-notes/recursive-lists/","created":"2024-01-28T20:26:01.703-05:00","updated":"2024-02-12T17:37:02.858-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|3]]
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 2 - Proof by Induction\|Unit 2 - Proof by Induction]]
Date: 2024-01-28

---
# A recursive definition of lists

- The empty list `[]` is a list
- If `x` is a value and `r` is a list, then we can construct a new list `lst` whose first element is `x` and whose other elements are the elements of `r`
	- In this case, we call `x` the **first** element of `lst`, and `r` the **rest** of the list

```python
[1, 2, 3, 4] == 
([1] + 
	([2] + 
		([3] + 
			([4] + []))))
```
*Visualization of this representation in Python.*

# A recursive Python class from the definition

```python
from __future__ import annotations
from typing import Any


class RecursiveList:
	"""A recursive implementation of the List ADT.
	"""
	# Private Instance Attributes:
	#  - _first: The first item in this list, or None if this list is empty
	#  - _rest: A list containing the items in this list that come after
	#           the first one, or None if this list is empty
	_first: Optional[Any]
	_rest: Optional[RecursiveList]

	def __init__(self, first: Optional[Any], rest: Optional[RecursiveList]) -> None:
		"""Initialize a new recursive list."""
		self._first = first
		self._rest = rest
```

- This `RecursiveList` data type is recursive because `_rest` attribute refers to another instance of `RecursiveList`
- Empty list has no “first” or “rest” values

### `RecursiveList` representing the sequence `[1, 2, 3, 4]`

```python
RecursiveList(
	1, RecursiveList(
		2, RecursiveList(
			3, RecursiveList(
				4, RecursiveList(
					None, None)))))
```

# Recursive definitions to recursive functions

### Calculating the sum of a list of integers 

- Let $lst$ be an empty list. In this case, its sum is 0
- Let $lst$ be a non-empty list of integers. In this case, we can decompose it into its first element, $x$, and the rest of its elements, $r$. The sum of $lst$ is equal to $x$ plus the sum of the rest of the elements
	- e.g., if $lst = [1,2,3,4]$, then $sum(lst) = 1 + sum([2, 3, 4])$

$$sum(lst) = \begin{cases} 0 && \text{if }lst \text{ is empty} \\ (\text{first of } lst) + sum(\text{rest of } lst) && \text{if } lst \text{ is non-empty} \end{cases}$$
```python
class RecursiveList:
	...
	def sum(self) -> int:
		"""Return the sum of the elements in this list.
		
		Preconditions:
			- every element in this list is an int
		"""
		if self._first is None:
			return 0
		else:
			return self._first + self._rest.sum()
```

# Node-based view vs. recursive view of lists

- `_Node`
	- Representing a *single* list element
	- Recursive attribute `next` is a link to another `_Node`
	- Traverse these links in a loop to access each node one at a time
- `RecursiveList`
	- Representing an *entire* sequence of elements
		- NOT just one element
	- Recursive attribute `_rest` is NOT a link; it is the rest of the list itself
	- We do not try to access each item individually
	- We make a recursive function call on the `_rest` attribute