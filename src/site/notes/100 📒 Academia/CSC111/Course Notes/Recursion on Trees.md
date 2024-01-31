---
{"dg-publish":true,"dg-path":"academia/CSC111/Course Notes/Recursion on Trees.md","permalink":"/academia/csc-111/course-notes/recursion-on-trees/","created":"2024-01-28T20:58:57.496-05:00","updated":"2024-01-28T21:07:25.521-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|4]]
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 3 - Trees\|Unit 3 - Trees]]
Date: 2024-01-28

---
# Tree size

Suppose we want to calculate the size of a tree.
- Can approach this problem by following the recursive definition of a tree
	- being either empty or a root connected to a list of subtrees

Let $T$ be a tree, and let $size$ be a function mapping a tree to its size.
- If $T$ is empty, the its size is 0: $size(T) = 0$
- If $T$ is non-empty, then it consists of a root value and collection of subtrees $T_{0}, T_{1}, \dots, T_{k-1}$ for some $k \in \mathbb{N}$.
	- In this case:
		- the size of $T$ is the *sum* of the sizes of its subtrees, plus 1 for the root:
		- $$size(T) = 1 + \sum\limits_{i=0}^{k-1} size(T_{i})$$

$$size(T) = \begin{cases} 0 && \text{if } T \text{ is empty} \\ 1 + \sum\limits_{i=0}^{k-1} size(T_{i}) && \text{if } T \text{ has subtrees } T_{0}, T_{1}, \dots, T_{k-1} \end{cases}$$

```python
class Tree:
    def __len__(self) -> int:
        """Return the number of items contained in this tree.

        >>> t1 = Tree(None, [])
        >>> len(t1)
        0
        >>> t2 = Tree(3, [Tree(4, []), Tree(1, [])])
        >>> len(t2)
        3
        """
        if self.is_empty():
            return 0
        else:
            return 1 + sum(subtree.__len__() for subtree in self._subtrees)
```

```python
        else:
            size_so_far = 1
            for subtree in self._subtrees:
                size_so_far += subtree.__len__()
            return size_so_far
```
*Without the use of `sum` aggregation function.*

# Tree recursion code template

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

## Template with size one case

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

