---
{"dg-publish":true,"dg-path":"academia/CSC111/Course Notes/Linked Lists Running Time Analysis.md","permalink":"/academia/csc-111/course-notes/linked-lists-running-time-analysis/","created":"2024-01-21T00:43:26.095-05:00","updated":"2024-01-27T14:39:25.010-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|2]]
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 1 - Linked Lists\|Unit 1 - Linked Lists]]
Date: 2024-01-18

---
# Efficiency

Recall that:
- Python `list`s are array-based.
	- Each list stores the ids of its elements in a contiguous block of memory
	- → Every insertion and deletion causes every element after the changed index to move

# Running time analysis of `LinkedList.insert`

```python
class LinkedList:
    def insert(self, i: int, item: Any) -> None:
        """..."""
        new_node = _Node(item)

        if i == 0:
            self._first, new_node.next = new_node, self._first
        else:
            curr = self._first
            curr_index = 0

            while not (curr is None or curr_index == i - 1):
                curr = curr.next
                curr_index = curr_index + 1

            if curr is None:
                raise IndexError
            else:
                curr.next, new_node.next = new_node, curr.next
```

- Running-time analysis. Let $n$ be the length (i.e., number of items) of `self`.
	- **Case 1. Assume `i == 0`.**
		- In this case, the if branch executes, which takes constant time
		- 1 step
	- **Case 2. Assume `i > 0`.** 
		- In this case:
		- The first two statements in the else branch take constant time
			- 1 step
		- The statements after the while loop all take constant time
			- 1 step
		- The while loop iterates until either it reaches the end of the list (`curr is None`) or until it reaches the correct index (`curr_index == i - 1`)
			- First case happens after $n$ iterations, since `curr` advances by one `_Node` each iteration
			- Second case happens after $i-1$ iterations
				- `curr_index` goes from 0 and increases by 1 each iteration
		- The number of iterations taken is $\min (n, i-1)$.
		- Each iteration takes 1 step for a total of $\min (n, i-1)$.
		- This gives us a total running time of $1 + \min (n, i-1) + 1 = \min (n, i-1) + 2$ steps.
	- In the first case (when `i == 0`), we have a running time of $\Theta (1)$. In the second case, we have a running time of $\Theta (\min(n, i-1))$. The second expression also becomes $\Theta (1)$ when $i = 0$. The overall running time of `LinkedList.insert` is $\Theta (\min(n, i))$
		- Note that $\min (n, i-1) \in \Theta (\min (n, i))$ since $i-1 \in \Theta (i)$.

# Comparing `LinkedList` and `list` running times

- If we want to compare this analysis against `list.insert` method, we can assume that $0 \leq i < n \implies \min (n, i) = i$.
- So, running time of `LinkedList.insert` is $\Theta (i)$.
	- Simplification *under an additional assumption* that $i < n$
	- i.e., *if* we treat $i$ as small with respect to the size of the list, then the running time of the algorithm does not depend on the size of the list
		- most extreme case: `i == 0` → inserting at front of linked list → constant time

| Operation (assuming $0 \leq i < n$) | Running time (`list`) | Running time (`LinkedList`) |
| ----------------------------------- | --------------------- | --------------------------- |
| Indexing (`lst[i]`)                 | $\Theta (1)$          | $\Theta (i)$                |
| Insert into index $i$               | $\Theta (n-i)$        | $\Theta (i)$                |
| Remove item at index $i$            | $\Theta (n-i)$                      | $\Theta (i)$                            |

- For list indexing, linked lists have a worse performance:
	- Running time is proportional to the index being accessed, rather than being constant time
- For insertion and deletion, linked lists have the exact opposite running times as array-based lists.

# Lecture 5 – Recap

### Linked Lists Efficiency

- Remove an element from the beginning → much faster
- Insert an element near the beginning → no need to shift subsequent elements
- Making changes to the beginning of a linked list:
	- just adjust a couple of references
	- no moving memory
- Cannot index in constant time, though