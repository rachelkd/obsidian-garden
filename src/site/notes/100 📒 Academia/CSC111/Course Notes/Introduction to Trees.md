---
{"dg-publish":true,"dg-path":"academia/CSC111/Course Notes/Introduction to Trees.md","permalink":"/academia/csc-111/course-notes/introduction-to-trees/","created":"2024-01-28T20:43:58.339-05:00","updated":"2024-02-04T12:45:20.891-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|4]]
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 3 - Trees\|Unit 3 - Trees]]
Date: 2024-01-28

---

- What do we use a **tree** data structure to represent?
	- hierarchical data
- What are **trees**?
	- a *recursive* data structure
- A tree is either:
	- empty, or
	- has a **root value** connected to any number of other trees, called **subtrees** of the tree
	- Note: subtrees are allowed to be empty in this definition

	- Root is drawn at the top of the tree
	- Rest of the tree consists of subtrees that are attached to the root
- Note: Tree can contain a root value but not have any subtrees
	- i.e., tree that contains just a single item

- Subtrees themselves are trees
	- → Subtrees have their own subtrees
- “Subtree” is always relative to an outer tree, where each subtree is connected to the *root* of that outer tree

![4_tree.png|center|400](/img/user/Files/csc111/4_tree.png)

- **size**
	- number of values in the tree
		- e.g., 10
- **leaf**
{ #6275d3}

	- value with no subtrees
		- e.g., E, F, G, J, I
- **internal value**
	- opposite of leaf
	- value that has at least one subtree
		- e.g., A, B, C, D, H
- **height**
	- length of the *longest* path from its root to one of its leaves, counting the number of values on the path
		- e.g., 4
- **children**
	- values directly connected underneath that value
		- e.g., children of A are B, C, D
- **descendants**
	- the descendants of a value are its children and the descendants of its children
- **parent**
	- value immediately above and connected to a value
	- each value in a tree has exactly one parent, except the root (has no parent)
- **ancestors** of a value
	- its parent and the ancestors of its parent

Note: sometimes, it will be convenient to say that descendants/ancestors of a value include the value itself. However, a value is ***never*** a child or parent of itself.

# A tree implementation

```python
from __future__ import annotations
from typing import Any, Optional


class Tree:
    """A recursive tree data structure.

    Representation Invariants:
        - self._root is not None or self._subtrees == []
    """
    # Private Instance Attributes:
    #   - _root:
    #       The item stored at this tree's root, or None if the tree is empty.
    #   - _subtrees:
    #       The list of subtrees of this tree. This attribute is empty when
    #       self._root is None (representing an empty tree). However, this attribute
    #       may be empty when self._root is not None, which represents a tree consisting
    #       of just one item.
    _root: Optional[Any]
    _subtrees: list[Tree]

    def __init__(self, root: Optional[Any], subtrees: list[Tree]) -> None:
        """Initialize a new Tree with the given root value and subtrees.

        If root is None, the tree is empty.

        Preconditions:
            - root is not none or subtrees == []
        """
        self._root = root
        self._subtrees = subtrees

    def is_empty(self) -> bool:
        """Return whether this tree is empty.
        """
        return self._root is None
```