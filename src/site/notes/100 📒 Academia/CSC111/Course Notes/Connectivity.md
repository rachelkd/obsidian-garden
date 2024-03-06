---
{"dg-publish":true,"dg-path":"academia/CSC111/Course Notes/Connectivity.md","permalink":"/academia/csc-111/course-notes/connectivity/","created":"2024-02-29T01:28:24.971-05:00","updated":"2024-02-29T01:41:47.202-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|7]]
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 4 - Graphs\|Unit 4 - Graphs]]
Date: 2024-02-29

---
## We can try…

```python
class Graph:
	def connected(self, item1: Any, item2: Any) -> bool:
		"""Return whether item1 and item2 are connected vertices in this graph.
		
		Return False if item1 or item2 do not appear as vertices in this graph.
		"""
		if item1 in self._vertices and item2 in self._vertices:
			v1 = self._vertices[item1]
			
			return v1.check_connected(item2)  # New helper method
		else:
			return False
```
*We can “offload” to the `_Vertex` class (since it is the class that keeps track of all the edges).*
<br>

```python
class _Vertex:
	...
	def check_connected(self, target_item: Any) -> bool:
		"""Return whether this vertex is connected to a vertex 
		corresponding to the target_item.
		"""
```

## Problem

- Given the vertex $v$ for `item1`, **how do we check neighbours** of $v$, neighbours of neighbours of $v$, neighbours of neighbours of neighbours of $v$, etc.?
	- We need to be able to search every vertex that is connected to $v$, no matter how far away they are

![|400](https://i.imgur.com/eD1K1PR.png)
*Example. Checking if $v_{1}$ and $v_{2}$ are connected.*

## Connectivity, recursively

- Given two vertices $v_1$ and $v_2$, they are connected when:
	1. $v_{1} = v_{2}$
	2. There exists a neighbour of $u$ of $v_{1}$ such that $u$ and $v_{2}$ are connected

```python
class _Vertex:
	...
	def check_connected(self, target_item: Any) -> bool:
		"""Return whether this vertex is connected to a vertex 
		corresponding to the target_item.
		"""
		if self.item == target_item:
			return True
		else:
			# Does there exist a neighbour u of self such that
			# u and target_item are connected?
```
