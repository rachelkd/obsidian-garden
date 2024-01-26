---
{"dg-publish":true,"dg-path":"academia/CSC111/Course Notes/Linked Lists.md","permalink":"/academia/csc-111/course-notes/linked-lists/","created":"2024-01-12T18:32:55.469-05:00","updated":"2024-01-18T17:49:12.397-05:00"}
---

**Preamble**
Week: 2
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 1 - Linked Lists\|Unit 1 - Linked Lists]]

---
# Introduction
- Recall: Python `list`s are an array-based implementation of the List ADT ([[300 University/2023 Fall/CSC110/01 Course Notes/9 Analyzing Algorithm Running Time/9.7 Analyzing Built-In Data Type Operations\|9.7 Analyzing Built-In Data Type Operations]])
- Implications:
	- Inserting and deleting items in a Python `list` can require shifting many elements in computer memory
	- Extreme case: inserting and deleting at the *front* of a `list` takes $\Theta (n)$ time, where $n$ is the length of the `list`
		- Every item in list needs to be shifted in computer memory
- **Linked list**
	- data structure
	- different implementation of the List ADT
	- attempts to address this efficiency shortcoming

> [!note] 
> **Goal:** Create a new Python class that behaves exactly the same as `list`, changing only the private implementation of the class
> <br>
> $\implies$ Following code will work whether `nums` is a `list` or an instance of the **linked list** class:
> ```python
> for i in range(0, n):
> 	nums.append(i)
> print(nums)
> ```

---
# Node Implementation

```python
from __future__ import annotations
from dataclasses import dataclass
from typing import Optional


@dataclass
class _Node:
	"""A node in a linked list.

	Instance Attributes:
	  - item: The data stored in this node.
	  - next: The next node in the list, if any.
	"""
	item: Any
	next: Optional[_Node] = None  # By default, this node does not link to any other node
```

- **node**
	- data type
	- stores each element with a reference to the *next* element in the list

- Why do we use a preceding underscore for the class name `_Node`
	- indicate that the entire class is *private*
	- should not be accessed by client code directly
	- only used by the “main” class described later #todo 
- An instance of `_Node` represents…
	- a *single element* of a list
	- To represent a list of $n$ elements, we need $n$ `_Node` instances
- How do we link the nodes together in a sequence?
	- Using the references in all of the nodes’ `next` attributes
- Example of three `_Node` objects that could represent the sequence of numbers, `111, -5, 9000:
	- ![1_node_example.png](/img/user/Files/CSC111/1_node_example.png)

## `__future__`
- What is `__future__`?
	- technical import for Python that allows us to refer to a class in a type annotation within the body of that class
	- e.g., `_Node.next` attribute has a type annotation that includes `_Node`

# The `LinkedList` class

- What does the `LinkedList` class represent?
	- the list itself
- A primitive `LinkedList` implementation:
	- 
		```python
		class LinkedList:
		    """A linked list implementation of the List ADT.
		    """
		    # Private Instance Attributes:
		    #   - _first: The first node in this linked list, or None if this list is empty.
		    _first: Optional[_Node]
		
		    def __init__(self) -> None:
		        """Initialize an empty linked list.
		        """
		        self._first = None
		```
	- Private attribute `_first` refers to the first node in the list → know where the list starts
	- Initializer that always creates an empty list

## Example: building links manually
The following example violates privacy concerns and manipulates the private attributes directly
- Example:
	- 
		```python
		>>> linky = LinkedList()  # linky is an empty linked list
		>>> linky._first is None
		True
		>>> node1 = _Node(111)   # New node with item 111
		>>> node2 = _Node(-5)    # New node with item -5
		>>> node3 = _Node(9000)  # New node with item 900
		>>> node1.item
		111
		>>> node1.next is None   # By default, new nodes do not link to another node
		True
		>>> node1.next = node2   # Let's set some links
		>>> node2.next = node3
		>>> node1.next is node2  # Now node1 links to node2!
		True
		>>> node1.next.item
		-5
		>>> node1.next.next is node3
		True
		>>> node1.next.next.item
		9000
		>>> linky._first = node1   # Finally, set linky's first node to node1
		>>> linky._first.item      # linky now represents the list [111, -5, 9000]
		111
		>>> linky._first.next.item
		-5
		>>> linky._first.next.next.item
		9000
		```

> [!note] 
> There is a big difference between `node3` and `node3.item`:
> - Former is a `_Node` object containing the value `111`
> - Latter is the `int` value `111` itself

## Linked list diagrams
- Example of the above code (omitted variables `node1`, `node2`, `node3`)
	- ![1_linked_list_example.png](/img/user/Files/CSC111/1_linked_list_example.png)
	- ![1_linked_list_stripped_down_model_example.png](/img/user/Files/CSC111/1_linked_list_stripped_down_model_example.png)