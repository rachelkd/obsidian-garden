---
{"dg-publish":true,"permalink":"/300-university/2023-fall/csc-110/02-lecture-notes/lecture-27-queues-and-priority-queues/","created":"2023-11-21T16:08:20.273-05:00","updated":"2023-11-21T19:09:08.435-05:00"}
---

#CSC110

**Covers:**
- [[300 University/2023 Fall/CSC110/01 Course Notes/10 Abstraction, Classes, Software Design/10.6 Exceptions as a Part of the Public Interface\|10.6 Exceptions as a Part of the Public Interface]]
- [[300 University/2023 Fall/CSC110/01 Course Notes/10 Abstraction, Classes, Software Design/10.7 Queues\|10.7 Queues]]
- [[300 University/2023 Fall/CSC110/01 Course Notes/10 Abstraction, Classes, Software Design/10.8 Priority Queues\|10.8 Priority Queues]]
---
```table-of-contents
```
---
# Exceptions as part of the public interface

```python
class Stack
	...
	def pop(self) -> Any:
		"""Remove and return the element at the top of this stack
		Preconditions:
		- not self.is_empty()
		"""
```

- Preconditions
	- a restriction on the person using the class
	- person must *verify* that the precondition is satisfied before calling the method

Consider the following user code:
```python
my_stack = Stack()
...
if not my_stack.is_empty():
	top_item = my_stack.pop()
```

## Letting the precondition fail

Popping an empty Stack:
```python
>>> s.pop()
Traceback (most recent call last):
...
    return self._items.pop()
           ^^^^^^^^^^^^^^^^^
IndexError: pop from empty list
```
<div class="caption" style="color: grey"><i>This reveals information about our implementation that we do not want the class users to see.</i></div>

## Defining a custom exception

```python
class EmptyStackError(Exception):  
    """Exception raised when calling pop on an empty stack."""  
  
    def __str__(self) -> str:  
        """Return a string representation of this error."""  
        return 'pop may not be called on an empty stack'

class Stack:
	...
	def pop(self) -> Any:
		"""Remove and return the element at the top of this stack
		Raise an EmptyStackError if this stack is empty.
		"""
	if self.is_empty():
		raise EmptyStackError
	else:
		return self._items.pop()
```

```python
>>> s = Stack()
>>> s.pop()
Traceback (most recent call last):
...
EmptyStackError: pop may not be called on an empty stack
```

- `EmptyStackError` is part of the *public interface* of the `Stack` class
- Implementors can *customize the error message* that a user sees
- Users can *handle* this exception when calling `pop`
	- See course notes?
	- Don’t know what section

# The Queue ADT

- **Queue**
	- Data: A collection of items
	- Operations:
		- Determine whether the queue is empty
		- Add an item (`enqueue`)
		- Remove the *least recently-added* item (`dequeue`)
	- Items are removed from a queue the same order as how they are added
		- *First-in, first-out (FIFO)* order

## Implementing a Queue

Consider the following implementation of `Queue`:
```python
class Queue:
    """A first-in-first-out (FIFO) queue of items.

    Stores data in a first-in, first-out order. When removing an item from the
    queue, the most recently-added item is the one that is removed.

    >>> q = Queue()
    >>> q.is_empty()
    True
    >>> q.enqueue('hello')
    >>> q.is_empty()
    False
    >>> q.enqueue('goodbye')
    >>> q.dequeue()
    'hello'
    >>> q.dequeue()
    'goodbye'
    >>> q.is_empty()
    True
    """
    # Private Instance Attributes:
    #   - _items: The items stored in this queue.
    #   The front of the list represents the front of the queue.
    _items: list

    def __init__(self) -> None:
        """Initialize a new empty queue."""
        self._items = []

    def is_empty(self) -> bool:
        """Return whether this queue contains no items.
        """
        return self._items == []

    def enqueue(self, item: Any) -> None:
        """Add item to the back of this queue.
        """
        self._items.append(item)

    def dequeue(self) -> Any:
        """Remove and return the item at the front of this queue.

        Preconditions:
            - not self.is_empty()
        """
        return self._items.pop(0)


# could also add and use an EmptyQueueError exception
```

Consider the following use of `Queue`:
```python
>>> q = Queue()
>>> q.is_empty()
True
>>> q.enqueue('hello')
>>> q.enqueue('goodbye')
>>> q.enqueue('!')
```

## Runtimes of Queue

| Queue Operation | “Front of the list” runtime | “Back of the list” runtime |
| --------------- | --------------------------- | -------------------------- |
| `enqueue`       | $\Theta (1)$                | $\Theta (n)$               |
| `dequeue`       | $\Theta (n)$                | $\Theta (1)$               |

<div class="caption" style="color: grey"><i>”Front of the list” and “back of the list” refer to the location of the least recently-entered item.</i></div>

# The Priority Queues ADT

- **Priority Queue**
	- Data: A collection of items and *their priorities*
	- Operations:
		- Determine whether the priority queue is empty
		- Add an item with a given priority (`enqueue`)
		- Remove the item with the *highest priority* (`dequeue`)

```python
>>> pq = PriorityQueue()
>>> pq.is_empty()
True
>>> pq.enqueue(1, 'hello')
>>> pq.enqueue(5, 'goodbye')
>>> pq.enqueue(2, 'hi')
>>> pq.dequeue()
'goodbye'
```

<div class="caption" style="color: grey"><i>Dequeue returns the highest priority first. If there is more than one item with the same priority, the least recently-added item is removed first.</i></div>

- There are many ways of representing “highest priotity”
	- Example above uses integers, where the larger the integer, the higher the priority

```python
class PriorityQueueUnsorted:
    """A queue of items that can be dequeued in priority order.

    When removing an item from the queue, the highest-priority item is the one
    that is removed.

    >>> pq = PriorityQueueUnsorted()
    >>> pq.is_empty()
    True
    >>> pq.enqueue(1, 'hello')
    >>> pq.is_empty()
    False
    >>> pq.enqueue(5, 'goodbye')
    >>> pq.enqueue(2, 'hi')
    >>> pq.dequeue()
    'goodbye'
    """
    # Private Instance Attributes:
    #   - _items: A list of the items in this priority queue.
    #   Each element is a 2-element tuple where the first element is
    #             the priority and the second is the item.

    _items: list[tuple[int, Any]]

    def __init__(self) -> None:
        """Initialize a new and empty priority queue."""

    def is_empty(self) -> bool:
        """Return whether this priority queue contains no items.
        """

    def enqueue(self, priority: int, item: Any) -> None:
        """Add the given item with the given priority 
        to this priority queue.
        """

    def dequeue(self) -> Any:
        """Remove and return the element of this priority queue 
        with the highest priority.

        Preconditions:
            - not self.is_empty()
        """
```

## Alternate implementation: sorted priority queues

```python
class PriorityQueueSorted:
	# Private Instance Attributes:
	#  - _items: A list of the priorities and items
	#            in this priority queue, SORTED BY PRIORITY
	...
	
	def enqueue(self, priority: int, item: Any) -> None:
		self._items.append((priority, item))
		# Sort the tuples by priority
		# (This version works if there are no ties in priorities.
		self._items.sort()
	
	def dequeue(self) -> Any:
		last_pair = self._items.pop()
		return last_pair[1]
```

- `PriorityQueueSorted.dequeue` takes $\Theta (1)$ time.
- `list.sort` has a worst-case running time of $\Theta (n \log (n))$
	- `PriorityQueueSorted.enqueue` takes $\Theta (n \log n)$ time.

| Operation | `PriorityQueueUnsorted` runtime | `PriorityQueueSorted` runtime |
| --------- | ------------------------------- | ----------------------------- |
| `enqueue` | $\Theta (1)$                    | $\Theta (n \log n)$           |
| `dequeue` | $\Theta (n)$                    | $\Theta (1)$                  |


