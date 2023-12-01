---
{"dg-publish":true,"dg-path":"academia/CSC110/02 Lecture Notes/Lecture 26 OOP, Abstract Data Types, and Stacks.md","permalink":"/academia/csc-110/02-lecture-notes/lecture-26-oop-abstract-data-types-and-stacks/","created":"2023-11-18T21:37:46.570-05:00","updated":"2023-11-21T16:21:33.708-05:00"}
---

#CSC110

**Covers:**
- [[100 📒 Academia/CSC110/01 Course Notes/10 Abstraction, Classes, Software Design/10.1 An Introduction to Abstraction\|10.1 An Introduction to Abstraction]]
- [[100 📒 Academia/CSC110/01 Course Notes/10 Abstraction, Classes, Software Design/10.2 Defining Our Own Data Types, Part 3\|10.2 Defining Our Own Data Types, Part 3]]
- [[100 📒 Academia/CSC110/01 Course Notes/10 Abstraction, Classes, Software Design/10.3 Defining Our Own Methods\|10.3 Defining Our Own Methods]]
- [[100 📒 Academia/CSC110/01 Course Notes/10 Abstraction, Classes, Software Design/10.4 Data Types, Abstract and Concrete\|10.4 Data Types, Abstract and Concrete]]
- [[100 📒 Academia/CSC110/01 Course Notes/10 Abstraction, Classes, Software Design/10.5 Stacks\|10.5 Stacks]]
---
```table-of-contents
```
---
# Privacy

- private instance attribute
	- an instance attribute that is not meant to be accessed by users of the class, only the class’ methods
	- **private instance attributes are named with a leading underscore `_`**
- public instance attribute
	- an instance attribute that can be accessed by users of the class

## Why make things private?

- A private attribute/method could be:
	- very complicated
	- subject to several representation invariants
	- changed (in name, type, or meaning) at any time

> [!warning]
> Python private instance attributes can still be accessed by external code.

- What is the point of marking an attribute as private?
	- Marking attributes as private **communicates intent**
	- Reduces cognitive load on the user of the class
	- Gives freedom to implementer of the class to modify or remove this attribute at a later point

# Interface vs Implementation

## Abstraction

- Abstraction
	- Hiding complex details and showing only some core, necessary parts
	- Think of a watch
- Advantages of abstraction
	- User does not need to understand the mechanism in order to use the watch
	- Creator can change the mechanism and everyone still knows how to use the watch

### In programming
- Interface
	- What the “client” using your code needs to see
- Implementation
	- The actual code you write and maintain
- e.g., When using a programming language like Python to write our own code, we are **clients** of the Python language
	- We don’t have to know the implementation details in order to use the language

### For functions
- Interface
	- All the documentation
		- function header, type contract, docstrings, preconditions
- Implementation
	- Actual function body
- Advantages of separating these:
	- Client does not need to understand the body in order to use the function
	- Implementer can change the implementation and all client code still works

### For classes
- Interface
	- Defined by the public attributes and methods
- Implementation
	- The private attributes, private methods, and bodies of all methods
- Advantages of separating these = same as before

> [!note] Summary: Abstraction is critical
> - An interface presents us with an abstraction
> - Client code can be written without knowing anything about the implementation
> - Reduces cognitive load for the programmer of client code
> - Implementation can change with no effect on client code
> - We call this **plug-out, plug-in compatibility**

# Data Types

> [!note] 
> ADTs take abstraction a step further
> - An Abstract Data Type is:
> 	- beyond any particular implementation
> 	- beyond even any particular programming language
> - Part of a **common language** used by programmers everywhere

- concrete data types
	- data types with a concrete implementation in Python code
	- also called *classes*
		- e.g., built-in Python data types (`int`, `list`, `set`), our own Python data types using data classes
- abstract data type (ADT)
	- an abstract (no code) definition of a data type:
		- what data is stored
		- what operations can be performed on the data
	- Abstract data types are **independent** of programming language
	- Form a **common vocabulary** that computer scientists and software engineers can use to communicate across programming languages/libraries/etc.
- Set ADT
{ #117a22}

	- **Data:** a collection of unique elements
	- **Operations:** get size, insert a value, remove a specified value, check membership in the set
- List ADT
{ #67cd5e}

	- **Data:** an ordered sequence of elements (possibly with duplicates)
	- **Operations:** get size, access element by index, insert a value at a given index, remove a value at a given index
- Mapping ADT
{ #8555f6}

	- **Data:** a collection of key-value pairs, where each key is unique and associated with a single value
	- **Operations:** get size, lookup a value for a given key, insert a new key-value pair, remove a key-value pair, update the value associated with a given key

## The Stack Abstract Data Type

- Stack ADT
{ #2c9c5c}

	- **Data:** a collection of items
	- **Operations:**
		- determine whether the stack is empty
		- add an item (`push`)
		- remove the **most recently added** item (`pop`)
	- <mark style="background: #FEFAD0A6;">last in, first out (LIFO) order</mark>
		- items are removed in reverse order from how they are added
	- 
	  ```python
	  >>> s = Stack()
	  >>> s.is_empty()
	  True
	  >>> s.push(1)
	  >>> s.push(4)
	  >>> s.push(10)
	  
	  >>> s.pop()
	  10
	  >>> s.pop()
	  4
	  >>> s.pop()
	  1
	  ```

### Applications of Stacks

- Function calls form a stack
	- Last function you called has to finish running before going back to the one before it
	- Hence, **“call stack”**
- Undo/redo uses a stack of commands
	- Most recent command is undone first (LIFO order)

```python
from typing import Any

class Stack:
	
	# Private instance attributes:
	#   - _items: The items stored in the stack. The end
	#     of the list represents the top of the stack
	_items: list
	
	def __init__(self) -> None:
		"""Initialize a new empty stack."""
		self._items = []
	
	def is_empty(self) -> bool:
		"""Return whether this stack contains no items."""
		return self._items == []
	
	def push(self, item: Any) -> None:
		"""Add a new element to the top of this stack."""
		self._items.append(item)
	
	def pop(self) -> Any:
		"""Remove and return the element at the top of this stack.
		
		Precondition: not self.is_empty()
		"""
		self._items.pop()
```

#### Balanced Brackets

Consider the following function that implements a Stack:

```python
def is_balanced(line: str) -> bool:
	"""Return whether <line> contains balanced parenthesis
	
	Ignore square and curly brackets.
	
	>>> is_balanced('(a * (3 + b))')
	True
	>>> is_balanced('(a * (3 + b]]')
	False
	>>> is_balanced('1 + 2(x - y)}')
	True
	>>> is_balanced('3 - (x')
	False
	"""
	
	unmatched = Stack()
	for c in line:
		if c == '(':
			unmatched.push(c)
		elif c == ')':
			if unmatched.is_empty():
				return False
			else:
				unmatched.pop()
	
	return unmatched.is_empty()
```

