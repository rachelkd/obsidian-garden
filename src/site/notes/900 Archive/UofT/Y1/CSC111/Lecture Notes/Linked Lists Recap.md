---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/csc-111/lecture-notes/linked-lists-recap/","created":"2024-01-27T11:20:25.981-08:00","updated":"2024-01-27T11:42:37.005-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/CSC111/_CSC111 Notes\|3]]
Course: #CSC111
Covered in: [[900 Archive/UofT/Y1/CSC111/Unit 1 - Linked Lists\|Unit 1 - Linked Lists]], Lecture 5
Date: 2024-01-27

---
# Linked Lists Deletion

1. Figure out when we need to modify `self._first` vs. a `_Node` in the list
2. When `index` > 0, iterate to the (`index` - 1)-th node and update links
	- similar to [[900 Archive/UofT/Y1/CSC111/Course Notes/Linked Lists Mutation\|13.3 Mutation]] and [[900 Archive/UofT/Y1/CSC111/Course Notes/Linked Lists Index-Based Mutation\|13.4 Index-Based Mutation]]

# Insertion/Deletion

### Strategy #1: iterate to the node *before* the desired position

```python
i = 0
curr = self._first
while not (curr is None or i == index - 1):
	curr = curr.next
	i += 1
```

### Strategy #2: track the previous node explicitly

```python
i = 0
prev = None
curr = self._first
while not (curr is None or i == index):
	prev, curr = curr, curr.next
```

# Efficiency

See [[900 Archive/UofT/Y1/CSC111/Course Notes/Linked Lists Running Time Analysis\|Linked Lists Running Time Analysis]].

# Things to think about

- Consider storing more info:
	- `_first`
	- `_last`
	- `_size`
	- How would these affect the implementation?
	- Why would we want to do this? Efficiency?
- How else can we organize nodes?
	- Doubly-linked lists (`next` and `prev` links for each node)
	- Circular linked lists (`last` points back to `first`)
	- Hierarchical structure of nodes