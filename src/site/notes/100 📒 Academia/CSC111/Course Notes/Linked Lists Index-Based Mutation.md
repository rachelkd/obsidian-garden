---
{"dg-publish":true,"dg-path":"academia/CSC111/Course Notes/Linked Lists Index-Based Mutation.md","permalink":"/academia/csc-111/course-notes/linked-lists-index-based-mutation/","created":"2024-01-18T20:29:24.992-05:00","updated":"2024-02-12T13:44:11.131-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|2]]
Course: #CSC111 
Covered in: [[100 📒 Academia/CSC111/Unit 1 - Linked Lists\|Unit 1 - Linked Lists]], 13.4
Date: 2024-01-18

---

# Insertion operations

### prepend (insert at the front)

- simply adjust the `_first` reference

![2_prepend.png|center|300](/img/user/Files/CSC111/2_prepend.png)
- Catch:
	- When you create a new node, `next` will refer to `None`
	- If you assign `_first` to the new node, make sure to *keep the old `first`* in a temp variable or use parallel assignment statements
### append (insert at the back)

See [[100 📒 Academia/CSC111/Course Notes/Linked Lists Mutation\|Linked Lists Mutation]].

- When might we change `_first`?
	- appending to an empty `LinkedList`

![2_append_empty.png|center|300](/img/user/Files/CSC111/2_append_empty.png)
- Append to many item list
	- ![2_append_many.png|center|400](/img/user/Files/CSC111/2_append_many.png)
### insertion at an index

# Implementing `LinkedList.insert`

- What position node do we have to access if we want to insert into position `i`?
	- `i - 1`
	- Use the sample approach in `LinkedList.__getitem__` ([[100 📒 Academia/CSC111/Course Notes/Linked Lists Traversals#Looping with an index\|here]])

### First (mostly correct) implementation of `LinkedList.insert`

```python
class LinkedList:
    def insert(self, i: int, item: Any) -> None:
        """..."""
        new_node = _Node(item)

        curr = self._first
        curr_index = 0

        while not (curr is None or curr_index == i - 1):
            curr = curr.next
            curr_index = curr_index + 1

        # After the loop is over, either we've reached the end of the list
        # or curr is the (i - 1)-th node in the list.
        assert curr is None or curr_index == i - 1

        if curr is None:
            # i - 1 is out of bounds. The item cannot be inserted.
            raise IndexError
        else: # curr_index == i - 1
            # i - 1 is in bounds. Insert the new item.
            new_node.next = curr.next
            curr.next = new_node
            
            # Alternatively, use parallel assignment:
			# curr.next, new_node.next = new_node, curr.next
```

### Warning: swapping assignment statement order

```python
curr.next = new_node
new_node.next = curr.next
```

- What would happen if we switched the order of assignment statements in the `else` branch?
	- Lose the link to the rest of the linked list before linking `new_node` to the end
	- Equivalent to writing `new_node.next = new_node`
	- Use parallel assignment!

### Corner cases

- What if `i == 0`?
	- Does not make sense to iterate to (`i-1`)-th node
	- Special case (`LinkedList.append`)
		- See [[100 📒 Academia/CSC111/Course Notes/Linked Lists Mutation\|Linked Lists Mutation]]
### Correct implementation of `LinkedList.insert`

```python
class LinkedList:
    def insert(self, i: int, item: Any) -> None:
        """..."""
        new_node = _Node(item)

        if i == 0:
            # Insert the new node at the start of the linked list.
            self._first, new_node.next = new_node, self._first
        else:
            curr = self._first
            curr_index = 0

            while not (curr is None or curr_index == i - 1):
                curr = curr.next
                curr_index = curr_index + 1

            # After the loop is over, either we've reached the end of the list
            # or curr is the (i - 1)-th node in the list.
            assert curr is None or curr_index == i - 1

            if curr is None:
                # i - 1 is out of bounds. The item cannot be inserted.
                raise IndexError
            else: # curr_index == i - 1
                # i - 1 is in bounds. Insert the new item.
                curr.next, new_node.next = new_node, curr.next
```

# Index-based deletion

```python
class LinkedList:
	def pop(self, i: int) -> Any:
	"""Remove and return item at index i.
	
	Preconditions:
		- i >= 0
	
	Raise IndexError if i >= the length of self.
	
    >>> linky = LinkedList([1, 2, 10, 200])
    >>> linky.pop(2)
	10
    >>> linky.pop(0)
	1
    >>> linky.to_list()
	[2, 200]
	"""
	# 1. If the list is empty, you know for sure that index is out of bounds...
	if not self._first:
		raise IndexError
	# 2. Else if i is 0, remove the first node and return its item.
	elif i == 0:
		item = self._first.item
		self._first = self._first.next
		return item
	# 3. Else iterate to the (i-1)-th node and update links to remove
	#    the node at position index. But don't forget to return the item!
	else:
		curr = self._first
		curr_index = 0
		
		while not (curr is None or curr_index == i - 1):
			curr = curr.next
			curr_index += 1
			
		# After the loop is over, either we've reached the end of the list
		# or curr is the (i - 1)-th node in the list.
		assert curr is None or curr_index == i - 1

		if curr is None:
			raise IndexError
		else:
			item = curr.next.item
			curr.next = curr.next.next
			return item
```