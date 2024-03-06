---
{"dg-publish":true,"dg-path":"academia/CSC111/Lecture Notes/Lecture 12 - Graphs.md","permalink":"/academia/csc-111/lecture-notes/lecture-12-graphs/","created":"2024-02-28T19:24:43.171-05:00","updated":"2024-02-29T01:28:25.047-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|7]]
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 4 - Graphs\|Unit 4 - Graphs]]
Date: 2024-02-28

---
# Definitions

From [[100 📒 Academia/CSC111/Course Notes/Introduction to Graphs\|Introduction to Graphs]].

# Representing graphs in Python

- We can represent graphs as a *node-based* data structure

## `_Vertex` class


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/academia/csc-111/course-notes/representing-graphs-in-python/#222fb1" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



```python
from __future__ import annotations
from typing import Any


class _Vertex:
    """A vertex in a graph.

    Instance Attributes:
        - item: The data stored in this vertex.
        - neighbours: The vertices that are adjacent to this vertex.

    Representation Invariants:
        - self not in self.neighbours
        - all(self in u.neighbours for u in self.neighbours)
    """
    item: Any
    neighbours: set[_Vertex]
```

</div></div>


### Node-based

```python
class _Vertex:
	item: Any
	neighbours: set[_Vertex]
```

```python
class _Node:
	item: Any
	next: _Node
```
*Whereas `_Node`s has a `next` attribute that referred to a single other `_Node`, now our `_Vertex` neighbours attribute can refer (or link) to **multiple** other `_Vertex` objects.*

```python
class TreeNode:
	_item: Optional[Any]
	_children: list[TreeNode]
```
*Notice how we use a `list` instead of `set` in a `TreeNode` because we care about (left-to-right) order in `TreeNode`.*

- We can view graphs as a generalization of trees
	- Rather than enforcing a strict parent-child hierarchy on the data, ==graphs support any vertex being joined by an edge to any other vertex==

# Properties of graphs

From [[100 📒 Academia/CSC111/Course Notes/Some Properties of Graphs\|Some Properties of Graphs]].

> [!note] 
> *Mathematical analysis* is a powerful tool for developing algorithms in a given problem domain.

##### Theorem (Maximum number of edges).

For all graphs $G = (V, E)$, $|E| \le \frac{|V| \cdot (|V| - 1)}{2}$.

##### Theorem (Transitivity of connectedness).

For all graphs $G = (V, E)$ and vertices $u, v, w \in V$, if $v$ is connected to both $u$ and $w$, then $u$ and $w$ are connected.

# Connectivity

See [[100 📒 Academia/CSC111/Course Notes/Connectivity\|Connectivity]].