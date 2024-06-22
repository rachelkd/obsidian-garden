---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/csc-111/course-notes/linked-lists-mutation/","created":"2024-01-13T15:30:48.589-08:00","updated":"2024-01-14T12:07:23.965-08:00"}
---

**Preamble**
Week: 2
Course: #CSC111
Covered in: [[900 Archive/UofT/Y1/CSC111/Unit 1 - Linked Lists\|Unit 1 - Linked Lists]]

---

```python
class LinkedList:
    def append(self, item: Any) -> None:
        """..."""
        new_node = _Node(item)

        if self._first is None:
            self._first = new_node
        else:
            curr = self._first
            while curr.next is not None:
                curr = curr.next

            # After the loop, curr is the last node in the LinkedList.
            assert curr is not None and curr.next is None
            curr.next = new_node
```

- What would happen if we did not have the `if` branch and only the `else` branch body?
	- `new_node` would have `None`
	- The code would raise an `AttributeError` because `curr` would be initialized to `None`.
- Why is the while loop condition checking for `curr.next` instead of `curr`?
	- We want to stop the loop before `curr = None`
		- Recall: _A `_Node` object’s `next` attribute refers to the next `_Node` in the linked list, or `None` if there are no more nodes_

# A more general initializer

With our `append` method in place, we can now stop creating linked lists by manually assigning attributes, and instead modify our linked list initializer to take in an iterable collection of values, which we’ll then append one at a time to the linked list.

```python
from typing import Iterable


class LinkedList:
    def __init__(self, items: Iterable) -> None:
        """Initialize a new linked list containing the given items.
        """
        self._first = None
        for item in items:
            self.append(item)
```