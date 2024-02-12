---
{"dg-publish":true,"dg-path":"academia/CSC111/Lecture Notes/Lecture 7 - Trees.md","permalink":"/academia/csc-111/lecture-notes/lecture-7-trees/","created":"2024-02-03T22:38:32.483-05:00","updated":"2024-02-04T00:10:06.481-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|5]]
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 3 - Trees\|Unit 3 - Trees]]
Date: 2024-02-03

---

- Definition of tree
	- A tree is either empty, or
	- has a **root value** connected to zero or more other trees called the tree’s **subtrees**

<br>

- Empty tree:
	- ![4_empty_tree.png|400](/img/user/Files/CSC111/4_empty_tree.png)
	- `None` cannot be a value of our `Tree`
	- Root value can only be `None` if `subtrees` is `None`
- Single value:
	- ![4_single_value_tree.png|400](/img/user/Files/CSC111/4_single_value_tree.png)
- Multiple values:
	- ![4_multiple_value_tree.png|400](/img/user/Files/CSC111/4_multiple_value_tree.png)

<br>
- When can `_root` be `None`?
	- Only if we are representing an empty `Tree`
	- If `_root` is `None`, then `_subtrees` attribute must be `[]`

### Empty tree representation

- Why do we not say that `t = None` is an empty tree instead of `t._root = None and t._subtrees = []`?
	- Cleans up code for tree methods/functions later on

e.g.,
```python
def ex_1(t: Tree):
	t.tree_method()
	# Can safely do this without checking if t is None

def ex_2(forest: list[Tree]):
	for t in forest:
		t.tree_method()  # Will never crash due to t being None
```


# Implementation

- From course notes [[100 📒 Academia/CSC111/Course Notes/Introduction to Trees\|Introduction to Trees]]:
	- 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/academia/csc-111/course-notes/introduction-to-trees/#a-tree-implementation" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



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

</div></div>

- An empty Tree:
	- `empty = Tree(None, [])`
- A single-element Tree:
	- `single = Tree(17, [])`
- A multiple-element Tree:
	- `multiple = Tree(1, [Tree(2, []), Tree(3, []), Tree(4, [])]`

# Recursion on Trees

See [[100 📒 Academia/CSC111/Course Notes/Recursion on Trees\|Recursion on Trees]].

- Code templates:
	- 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/academia/csc-111/course-notes/recursion-on-trees/#807d88" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



```python
class Tree:
    def method(self) -> ...:
        if self.is_empty():
            ...
        else:
            ...
            for subtree in self._subtrees:
                ... subtree.method() ...
            ...
```

</div></div>

	- 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/academia/csc-111/course-notes/recursion-on-trees/#390467" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



```python
class Tree:
    def method(self) -> ...:
        if self.is_empty():         # tree is empty
            ...
        elif self._subtrees == []:  # tree is a single value
            ...
        else:                       # tree has at least one subtree
            ...
            for subtree in self._subtrees:
                ... subtree.method() ...
            ...
```

</div></div>

- General strategy:
	1. Make a concrete example of each case that may be relevant
	2. For each of the recursive case(s):
		-  Write down the recursive calls and what they should return and/or mutate
		- Assume each will do what it should
		- Determine how to combine their results for the overall result
	3. See if any cases can collapse down
	4. Write the code

### Find all the leaves in a tree. #example 

```python
if self.is_empty():
	return []
elif not self._subtrees:
	return [self._root]
else:
	result = []
	for subtree in self._subtrees:
		result.extend(subtree.leaves())
	return result
```

# Tree deletion algorithms

See [[100 📒 Academia/CSC111/Lecture Notes/Tree Deletion Algorithms\|Tree Deletion Algorithms]].