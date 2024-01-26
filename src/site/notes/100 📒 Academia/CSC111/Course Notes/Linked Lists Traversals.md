---
{"dg-publish":true,"dg-path":"academia/CSC111/Course Notes/Linked Lists Traversals.md","permalink":"/academia/csc-111/course-notes/linked-lists-traversals/","created":"2024-01-13T17:46:24.384-05:00","updated":"2024-01-18T21:01:53.418-05:00"}
---

**Preamble**
Week: 2
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 1 - Linked Lists\|Unit 1 - Linked Lists]]

---

# Traversing Linked Lists

- What does “traversing a linked list” mean?
	- visiting each element of a linked list one at a time
- Code:
	- 
		```python
		curr = my_linked_list._first   # 1. Initialize curr to the start of the list.
		while curr is not None:        # 2. curr is None if we've reached the end of the list.
		    ... curr.item ...          # 3. Do something with the current *element*, curr.item.
		    curr = curr.next           # 4. "Increment" curr, assigning it to the next node.
		```
- Example of a `LinkedList` method that prints out every item in a linked list:
	- 
		```python
		class LinkedList:
		    def print_items(self) -> None:
		        """Print out each item in this linked list."""
		        curr = self._first
		        while curr is not None:
		            print(curr.item)      # Note: this is the only line we needed to fill in!
		            curr = curr.next
		```
	- Suppose we call `linky.print_items()`. What happens? Refer to the memory model.
		- ![1_linked_list_example.png](/img/user/Files/CSC111/1_linked_list_example.png)
		1. Loop variable `curr` is assigned to the first `_Node` in the linked list, with `id3`.
		2. Since `curr` is not `None`, the loop body executes.
		    1. `curr.item`, which is `111`, is printed.
		    2. Then `curr` is reassigned to `curr.next`, which is the `_Node` with `id20`.
		3. Again, since `curr` is not `None`, the loop body executes.
		    1. `curr.item`, which is `-5`, is printed.
		    2. Then `curr` is reassigned to `curr.next`, which is the `_Node` with `id30`.
		4. Again, since `curr` is not `None`, the loop body executes.
		    1. `curr.item`, which is `9000`, is printed.
		    2. Then `curr` is reassigned to `curr.next`, which is `None` (at `id99`).
		5. Since `curr` is `None` now, the while loop stops, and the method ends.

# Linked list traversal and loop accumulators

Recall: Loop accumulation (5.4 For Loops)
- Example. A `LinkedList` method that combines the linked list traversal pattern ([[100 📒 Academia/CSC111/Course Notes/Linked Lists Mutation\|Linked Lists Mutation]]) with the loop accumulation pattern.
	-  
		```python
		class LinkedList:
		    def to_list(self) -> list:
		        """Return a built-in Python list containing the items of this linked list.
		
		        The items in this linked list appear in the same order in the returned list.
		        """
		        items_so_far = []
		
		        curr = self._first
		        while curr is not None:
		            items_so_far.append(curr.item)
		            curr = curr.next
		
		        return items_so_far
		```
	- A call to `linky.to_list()` with the linked list example [[100 📒 Academia/CSC111/Course Notes/Linked Lists#Example building links manually\|here]] returns `[111, -5, 9000]`

# Looping with an index

- Example. A method for indexing into a linked list, equivalent to `my_list[3]`.
	1. Approach using the “early return” loop pattern:
		```python
		class LinkedList:
		    def __getitem__(self, i: int) -> Any:
		        """..."""
		        # Version 1
		        curr = self._first
		        curr_index = 0
		
		        while curr is not None:
		            if curr_index == i:
		                return curr.item
		
		            curr = curr.next
		            curr_index = curr_index + 1
		
		        # If we've reached the end of the list and no item has been returned,
		        # the given index is out of bounds.
		        raise IndexError
		```
	2. Approach _modifying the while loop condition_ so that the loop stops when it either reaches the end of the list or the correct index:
		```python
		class LinkedList:
		    def __getitem__(self, i: int) -> Any:
		        """... """
		        # Version 2
		        curr = self._first
		        curr_index = 0
		
		        while not (curr is None or curr_index == i):
		            curr = curr.next
		            curr_index = curr_index + 1
		
		        assert curr is None or curr_index == i
		        if curr is None:
		            # index is out of bounds
		            raise IndexError
		        else:
		            # curr_index == i, so curr is the node at index i
		            return curr.item
		```
- **compound loop condition**
	- loops with more than one logical expression

# `__getitem__` and list indexing expressions

Suppose we create a `LinkedList` object `linky` with the elements `111`, `-5`, `9000`.
- How can we call the `__getitem__` special method?
	- Dot notation, as normal
		```python
		>>> linky.__getitem__(0)
		111
		>>> linky.__getitem__(1)
		-5
		>>> linky.__getitem__(2)
		9000
		```
	- **Square bracket notation** for sequence indexing/dictionary key lookup
		```python
		>>> linky[0]  # Calls linky.__getitem__(0)
		111
		>>> linky[1]  # Calls linky.__getitem__(1)
		-5
		>>> linky[2]  # Calls linky.__getitem__(2)
		9000
		```