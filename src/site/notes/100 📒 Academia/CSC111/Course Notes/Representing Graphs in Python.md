---
{"dg-publish":true,"dg-path":"academia/CSC111/Course Notes/Representing Graphs in Python.md","permalink":"/academia/csc-111/course-notes/representing-graphs-in-python/","created":"2024-02-25T21:56:07.863-05:00","updated":"2024-02-28T21:20:02.448-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|7]]
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 4 - Graphs\|Unit 4 - Graphs]]
Date: 2024-02-25

---
# The `_Vertex` class

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
{ #222fb1}


- `item` instance attribute ==stores the “data”== in each vertex
	- e.g., integer, string, or a custom data type that we define
- `neighbours` attribute is how we ==encode the graph edges==
	- stores a set of other `_Vertex` objects
	- similar to the `Tree` `_subtrees` attribute
		- but now we treat the class as representing a single element of the graph, rather than the whole graph itself
		- This collection is *unordered*
			- No left-to-right ordering like trees

## Representing a “triangle”

```
>>> v1 = _Vertex('a', set())
>>> v2 = _Vertex('b', set())
>>> v3 = _Vertex('c', set())
>>> v1.neighbours = {v2, v3}
>>> v2.neighbours = {v1, v3}
>>> v3.neighbours = {v1, v2}
```

## Enforcing edge restrictions

Note the representation invariants:
```
Representation Invariants:
        - self not in self.neighbours
        - all(self in u.neighbours for u in self.neighbours)
```

Recall that graph edges:
1. cannot have a vertex with an edge to itself
2. all edges are symmetric
	- the edge $\{u, v\}$ is equivalent to the edge $\{v, u\}$

# The `Graph` class

We can define a `Graph` class that simply consists of a collection of `_Vertex` objects:

```python
class Graph:
    """A graph.

    Representation Invariants:
    - all(item == self._vertices[item].item for item in self._vertices)
    """
    # Private Instance Attributes:
    #     - _vertices: A collection of the vertices contained in this graph.
    #                  Maps item to _Vertex instance.
    _vertices: dict[Any, _Vertex]

    def __init__(self) -> None:
        """Initialize an empty graph (no vertices or edges)."""
        self._vertices = {}
    
    def add_vertex(self, item: Any) -> None:
        """Add a vertex with the given item to this graph.

        The new vertex is not adjacent to any other vertices.

        Preconditions:
            - item not in self._vertices
        """
        self._vertices[item] = _Vertex(item, set())

    def add_edge(self, item1: Any, item2: Any) -> None:
        """Add an edge between the two vertices with the given items in this graph.

        Raise a ValueError if item1 or item2 do not appear as vertices in this graph.

        Preconditions:
            - item1 != item2
        """
        if item1 in self._vertices and item2 in self._vertices:
            v1 = self._vertices[item1]
            v2 = self._vertices[item2]

            # Add the new edge
            v1.neighbours.add(v2)
            v2.neighbours.add(v1)
        else:
            # We didn't find an existing vertex for both items.
            raise ValueError
```

```
>>> g = Graph()
>>> g.add_vertex('a')
>>> g.add_vertex('b')
>>> g.add_vertex('c')
>>> g.add_edge('a', 'b')
>>> g.add_edge('a', 'c')
>>> g.add_edge('b', 'c')
```

## Where are the edges?
- Stored implicitly through each `_Vertex`’s `neighbours` attribute

## Checking adjacency

```python
class Graph:
    def adjacent(self, item1: Any, item2: Any) -> bool:
        """Return whether item1 and item2 are adjacent vertices in this graph.

        Return False if item1 or item2 do not appear as vertices in this graph.
        """
        if item1 in self._vertices and item2 in self._vertices:
            v1 = self._vertices[item1]
            return any(v2.item == item2 for v2 in v1.neighbours)
        else:
            # We didn't find an existing vertex for both items.
            return False

    def get_neighbours(self, item: Any) -> set:
        """Return a set of the neighbours of the given item.

        Note that the *items* are returned, not the _Vertex objects themselves.

        Raise a ValueError if item does not appear as a vertex in this graph.
        """
        if item in self._vertices:
            v = self._vertices[item]
            return {neighbour.item for neighbour in v.neighbours}
        else:
            raise ValueError
```

