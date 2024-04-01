---
{"dg-publish":true,"dg-path":"academia/CSC111/Course Notes/Connectivity and Recursive Graph Traversal.md","permalink":"/academia/csc-111/course-notes/connectivity-and-recursive-graph-traversal/","created":"2024-03-01T16:28:58.476-05:00","updated":"2024-03-24T17:20:30.002-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|7]]
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 4 - Graphs\|Unit 4 - Graphs]]
Date: 2024-03-01

---
Recall `Graph.adjacent` method from [[100 📒 Academia/CSC111/Course Notes/Representing Graphs in Python\|17.4]].

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
```

# Check if two vertices are connected

i.e, checking whether two vertices are adjacent to whether two vertices are connected

## Working our way to a correct implementation

### Starting off with the same fashion as `Graph.adjacent`

```python
class Graph:
    def connected(self, item1: Any, item2: Any) -> bool:
        """Return whether item1 and item2 are connected vertices in this graph.

        Return False if item1 or item2 do not appear as vertices in this graph.

        >>> g = Graph()
        >>> g.add_vertex(1)
        >>> g.add_vertex(2)
        >>> g.add_vertex(3)
        >>> g.add_vertex(4)
        >>> g.add_edge(1, 2)
        >>> g.add_edge(2, 3)
        >>> g.connected(1, 3)
        True
        >>> g.connected(1, 4)
        False
        """
        if item1 in self._vertices and item2 in self._vertices:
            v1 = self._vertices[item1]
            ...
        else:
            return False
```
*However, we cannot just `return False` in the final else branch. `item2` could equal `item1`, or it could be a neighbour, or the neighbour of a neighbour, or the neighbour of a neighbour of a neighbour, etc.*

### Recursively determining connectivity

```python
class Graph:
    def connected(self, item1: Any, item2: Any) -> bool:
        """..."""
        if item1 in self._vertices and item2 in self._vertices:
            v1 = self._vertices[item1]
            return v1.check_connected(item2)  # NEW
        else:
            return False
```
*Move the trickiest part (filling in that else branch) into a helper method.*

```python
class _Vertex:
    def check_connected(self, target_item: Any) -> bool:
        """Return whether this vertex is connected to a vertex
        corresponding to the target_item.
        """
```

### Definition of connectivity (recursive)
Let $G = (V, E)$ be a graph, and let $v_{1}, v_{2} \in V$.
- We say that $v_{1}$ and $v_{2}$ are **connected** when:
	- $v_{1} = v_{2}$, or
	- there exists a neighbour $u$ of $v_{1}$ such that $u$ and $v_2$ are connected

### A wrong implementation of `_Vertex.check_connected`

```python
class _Vertex:
    def check_connected(self, target_item: Any) -> bool:
        """Return whether this vertex is connected to a vertex corresponding to the target_item.
        """
        if self.item == target_item:
            # Our base case: the target_item is the current vertex
            return True
        else:
            for u in self.neighbours:
                if u.check_connected(target_item):
                    return True

            return False
```

```
>>> g = Graph()
>>> g.add_vertex(1)
>>> g.add_vertex(2)
>>> g.add_vertex(3)
>>> g.add_edge(1, 2)
>>> g.connected(1, 3)  # Should return False!
Traceback (most recent call last):
  File "<input>", line 1, in <module>
  File "path/to/graph.py", line 163, in connected
    return vertex.check_connected(item2)
  File "path/to/graph.py", line 41, in check_connected
    if u.check_connected(target_item):
  File "path/to/graph.py", line 41, in check_connected
    if u.check_connected(target_item):
  File "path/to/graph.py", line 41, in check_connected
    if u.check_connected(target_item):
  [Previous line repeated 985 more times]
  File "path/to/graph.py", line 36, in check_connected
    if self.item == target_item:
RecursionError: maximum recursion depth exceeded in comparison
```

#### `RecursionError` and the danger of infinite recursion

- Implementation for `_Vertex.check_connected` is simple, and exactly follows the recursive definition of connectedness we gave above $\implies$
	- problem is not an error in our logic, but a limitation of how we have expressed that logic in our code

##### Manual tracing

- We have a graph`g` with three vertices containing the items `1`, `2`, and `3`
- In our initial call to `g.connected(1, 3)`,
	- We first find the vertex corresponding to `1`, which we will name $v_{1}$
	- Then, our code calls `_Vertex.check_connected` on $v_{1}$ and `3`.
		1. For $v_{1}$, `self.item == 1` which is not `3`.
			- We enter the else branch
			- For loop (`for u in self.neighbours`) executes
			- The only neighbour is the vertex containing `2`, which we will name $v_{2}$
			- We make a recursive call to `_Vertex.check_connected` on $v_{2}$ and `3`
		2. For $v_{2}$, `self.item == 2`, which is not `3`.
			- We enter the else branch
			- For loop (`for u in self.neighbours`) executes
			- The only neighbour is $v_{1}$
			- We make a recursive call to `_Vertex.check_connected` on $v_{1}$ and `3`
		3. For $v_{1}$, `self.item == 1`, which is not `3`
			- We enter the else branch
			- ==We have repeated (1)!== Not good!


> [!danger] 
> This is an instance of **infinite recursion**. We’ve expressed a recursive computation that does not stop by reaching a *base case*.
> - Python interpreter alternates between calling `_Vertex.check_connected` with $v_{1}$ and `3` and with $v_{2}$ and `3` and never stops
> - ==Our problem never gets smaller==
> 
> From a technical POV,
> - Each of these function calls adds a new *stack frame* onto the function call stack → uses more and more computer memory
> - Python interpreter enforces a limit on the total number of stack frames that can be on the call stack at any one point in time
> - When limit is reached, Python interpreter raises a `RecursionError`

### Fixing `_Vertex.check_connected`

> [!abstract] Revisiting our recursive definition of connectedness.
> 
<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/academia/csc-111/course-notes/connectivity-and-recursive-graph-traversal/#definition-of-connectivity-recursive" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



### Definition of connectivity (recursive)
Let $G = (V, E)$ be a graph, and let $v_{1}, v_{2} \in V$.
- We say that $v_{1}$ and $v_{2}$ are **connected** when:
	- $v_{1} = v_{2}$, or
	- there exists a neighbour $u$ of $v_{1}$ such that $u$ and $v_2$ are connected


</div></div>


- Our problem is in the recursive step:
	- When we say that “$u$ and $v_{2}$ are connected,” we are allowing for the possibility that these two vertices are connected by a path going through $v_{1}$
		- → Not necessary
	- If $v_{1}$ and $v_{2}$ are connected, then we should be able to find a path between a neighbour $u$ and $v_{2}$ that does not use $v_{1}$, then add $v_{1}$ to the start of that path

### Modified definition of connectivity (recursive) #definition 
Let $G = (V, E)$ be a graph, and let $v_{1}, v_{2} \in V$.
- We say that $v_{1}$ and $v_2$ are **connected** when:
	- $v_{1} = v_{2}$, or
	- there exists a neighbour $u$ of $v_{1}$ such that $u$ and $v_{2}$ are connected by a path *that does not use $v_{1}$*

### Adding a `visited` parameter

- Might be tempting to mutate our `Graph` object to remove the “$v_{1}$” vertex at each recursive call, but
- We do not actually want to mutate the original graph when we call `Graph.connected`.
- Instead, we will
	- ==keep track== of the items that have been already visited by our algorithm, so that we do not visit the same vertex more than once.

#### New `_Vertex.check_connected` method header
```python
class _Vertex:
    def check_connected(self, target_item: Any, visited: set[_Vertex]) -> bool:
        """Return whether this vertex is connected to a vertex
        corresponding to the target_item,
        WITHOUT using any of the vertices in visited.

        Preconditions:
            - self not in visited
        """
```

#### Fixing our implementation

When we make the initial call to `_Vertex.check_connected`, we have not yet visited any vertices, so
```python
class Graph:
    def connected(self, item1: Any, item2: Any) -> bool:
        """..."""
        if item1 in self._vertices and item2 in self._vertices:
            v1 = self._vertices[item1]
            return v1.check_connected(item2, set())  # Pass in an empty "visited" set
        else:
            return False
```
{ #42ee9e}


```python
class _Vertex:
    def check_connected(self, target_item: Any, visited: set[_Vertex]) -> bool:
        """Return whether this vertex is connected to a vertex corresponding to the target_item,
        WITHOUT using any of the vertices in visited.

        Preconditions:
            - self not in visited
        """
        if self.item == target_item:
            # Our base case: the target_item is the current vertex
            return True
        else:
            new_visited = visited.union({self})  # Add self to the set of visited vertices
            for u in self.neighbours:
                if u not in new_visited:  # Only recurse on vertices that haven't been visited
                    if u.check_connected(target_item, new_visited):
                        return True

            return False
```

```
>>> g = Graph()
>>> g.add_vertex(1)
>>> g.add_vertex(2)
>>> g.add_edge(1, 2)
>>> g.connected(1, 3)  # Should return False!
False
```
*We have eliminated our infinite recursion error.*

#### Bonus optimization
We created a new set of visited vertices (`new_visited`) rather than mutating `visited`

```python
class _Vertex:
    def check_connected(self, target_item: Any, visited: set[_Vertex]) -> bool:
        """Return whether this vertex is connected to a vertex corresponding to the target_item,
        WITHOUT using any of the vertices in visited.

        Preconditions:
            - self not in visited
        """
        if self.item == target_item:
            # Our base case: the target_item is the current vertex
            return True
        else:
            visited.add(self)         # Add self to the set of visited vertices
            for u in self.neighbours:
                if u not in visited:  # Only recurse on vertices that haven't been visited
                    if u.check_connected(target_item, visited):
                        return True

            return False
```
{ #bc6ec9}


- This call uses `set.add` method
	- Constant time
- However, there is only one `visited` set object that gets shared and mutated across all recursive calls, including ones that return `False`
	- e.g., Suppose `self` has two neighbours `u0` and `u1`
		- We first recurse on `u0`
		- If `u0` is not connected to the target vertex, then `check_connected` call will return `False`, as expected
		- `u0` would still be in `visited` after that recursive call ends
			- Subsequent `check_connected` call with `u1` will never visit `u0`
			- Technically still correct:
				- Once we have established that `u0` is not connected to the target item, we should not recurse on it ever again

> [!important] 
> - Whenever you use recursion with a mutable argument, be very careful when choosing whether to mutate that argument or create a modified copy.
> - If you choose to mutate the argument, ==all recursive calls will mutate it== as well!

# Implementation


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/academia/csc-111/course-notes/connectivity-and-recursive-graph-traversal/#42ee9e" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



```python
class Graph:
    def connected(self, item1: Any, item2: Any) -> bool:
        """..."""
        if item1 in self._vertices and item2 in self._vertices:
            v1 = self._vertices[item1]
            return v1.check_connected(item2, set())  # Pass in an empty "visited" set
        else:
            return False
```

</div></div>


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/academia/csc-111/course-notes/connectivity-and-recursive-graph-traversal/#bc6ec9" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



```python
class _Vertex:
    def check_connected(self, target_item: Any, visited: set[_Vertex]) -> bool:
        """Return whether this vertex is connected to a vertex corresponding to the target_item,
        WITHOUT using any of the vertices in visited.

        Preconditions:
            - self not in visited
        """
        if self.item == target_item:
            # Our base case: the target_item is the current vertex
            return True
        else:
            visited.add(self)         # Add self to the set of visited vertices
            for u in self.neighbours:
                if u not in visited:  # Only recurse on vertices that haven't been visited
                    if u.check_connected(target_item, visited):
                        return True

            return False
```

</div></div>


