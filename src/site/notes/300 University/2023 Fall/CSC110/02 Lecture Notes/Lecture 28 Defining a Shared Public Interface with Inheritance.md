---
{"dg-publish":true,"permalink":"/300-university/2023-fall/csc-110/02-lecture-notes/lecture-28-defining-a-shared-public-interface-with-inheritance/","created":"2023-12-01T17:11:01.482-05:00","updated":"2023-12-01T20:58:56.256-05:00"}
---

#CSC110

**Covers:**
- [[300 University/2023 Fall/CSC110/01 Course Notes/10 Abstraction, Classes, Software Design/10.9 Defining a Shared Public Interface with Inheritance\|10.9 Defining a Shared Public Interface with Inheritance]]
- [[300 University/2023 Fall/CSC110/01 Course Notes/10 Abstraction, Classes, Software Design/10.10 The object Superclass\|10.10 The object Superclass]]
---
```table-of-contents
```
---
# Defining a shared public interface

**Recall:** Two difference stack implementations
- `Stack1` and `Stack2`
	- The top of `Stack1` is at the largest index ($n-1$, where $n$ is the length of the stack)
	- The top of `Stack2` is at index $0$
		- The difference between the two is efficiency.
- See [[10.5 Stacks]]:
	- [[10.5 Stacks#^081fdd|Stack1]]
	- [[10.5 Stacks#^915340|Stack2]]

Consider the following function.

```python
def push_and_pop(stack: ..., item: Any) -> None:
	stack.push(item)
	stack.pop()
```

## What should the type annotation of `stack` be?

#### Too specific

```python
def push_and_pop(stack: Stack1, item: Any) -> None:
	stack.push(item)
	stack.pop()
```

```python
def push_and_pop(stack: Stack2, item: Any) -> None:
	stack.push(item)
	stack.pop()
```

- `push_and_pop` would only work for one implementation of `Stack`
	- Is there a way to say this should work for any type of `Stack`?
#### Too general

```python
def push_and_pop(stack: Any, item: Any) -> None:
	stack.push(item)
	stack.pop()
```

- You can pass a type with no such `push` or `pop` method

## Idea: Define a Python data type that represents an “arbitrary stack class”

- Stack ADT
	- Data: A collection of items
	- Operations:
		- determine whether the stack is empty
		- add an item (`push`)
		- remove the most recently-added item (`pop`)

Consider the *public interface* of the Stack ADT, written as Python Code:

```python
class Stack:
	def is_empty(self) -> bool:
		"""Return whether this stack contains no items."""
		raise NotImplementedError
	
	def push(self, item: Any) -> None:
		"""Add a new element to the top of this stack."""
		raise NotImplementedError
	
	def pop(self) -> Any:
		"""Remove and return the element at the top of this stack
		Precondition: not self.is_empty()
		"""
		raise NotImplementedError
```
<div class="caption" style="color: grey"><i>Notice that the Stack implementation is missing the initializer.</i></div>

- abstract method
	- method whose body is `raise NotImplementedError`
	- e.g., `Stack.is_empty`, `Stack.push`, `Stack.pop`
- abstract class
	- a class with *at least* one abstract method

> [!note] 
> Abstract classes aren’t meant to be instantiated directly
> - But abstract classes can be used as **type annotations**

# Inheritance and Polymorphism

We specify that one class *implements* an abstract interface through **inheritance**

```python
class Stack1(Stack):
	...


class Stack2(Stack):
	...
```

**Terminology:**
- `Stack` is the *superclass* or *parent class*
- `Stack1`, `Stack2` are *subclasses* or *child classes*
- `Stack1` and `Stack2` *inherit* from `Stack`
- `Stack` defines a *shared public interface* that is *implemented* by both `Stack1` and `Stack2`

## Inheritance as a contract

- Given an abstract class A and concrete class B that inherits from A:
	- The implementor of the subclass B is required to implement all abstract methods from the abstract superclass A
	- Any user of the subclass B may assume that they can call the superclass methods on instances of the subclass

### Calling `push_and_pop` (1)

```python
def push_and_pop(stack: Stack, item: Any) -> None:
	stack.push(item)
	stack.pop()


>>> s1 = Stack1()
>>> push_and_pop(s1, 10)
```

- When `push_and_pop(s1, 10)` gets called, the parameter variable `stack` and the variable `s1` are aliases, so:
	- `s1.push(10)` gets called
		- `Stack1.push` method
	- `s1.pop()` gets called
		- `Stack1.pop` method

### Calling `push_and_pop` (2)

```python
def push_and_pop(stack: Stack, item: Any) -> None:
	stack.push(item)
	stack.pop()


>>> s2 = Stack2()
>>> push_and_pop(s2, 10)
```

- When `push_and_pop(s2, 10)` gets called, the parameter variable `stack` and the variable `s2` are aliases, so:
	- `s2.push(10)` gets called
		- `Stack2.push` method
	- `s2.pop()` gets called
		- `Stack2.pop` method

# Polymorphism

```python
def push_and_pop(stack: Stack, item: Any) -> None:
	stack.push(item)
	stack.pop()

>>> s1 = Stack1()
>>> push_and_pop(s1, 10)

>>> s2 = Stack2()
>>> push_and_pop(s2, 10)
```

We say function `push_and_pop` is **polymorphic**, because it can be given argument values that have different concrete data types.

- polymorphic
	- many forms
- A function is polymorphic when:
	- it can take in input values of different concrete data types
	- e.g., `len`, `sum`, `abs` are polymorphic

# Two technical Python notes

## Object dot notation vs. class dot notation

This version is correct:

```python
def push_and_pop(stack: Stack, item: Any) -> None:
	stack.push(item)
	stack.pop()
```

This version is **incorrect**:

```python
def push_and_pop(stack: Stack, item: Any) -> None:
	Stack.push(stack, item)
	Stack.pop(stack)
```
<div class="caption" style="color: grey"><i>This would call the abstract class Stack method</i></div>

## `type` vs. `isinstance`

```python
>>> my_stack = Stack1()

>>> type(my_stack) is Stack1
True
>>> isinstance(my_stack, Stack1)
True
```

But,

```python
>>> type(my_stack) is Stack
False
>>> isinstance(my_stack, Stack)
True
```

- `type(x) is t`
	- Returns whether `x` is an object of type `t`
- `isinstance(x, t)`
	- Returns whether `x` is an object of type `t` **or any subclass of `t`**

# The `object` superclass and method inheritance

- `object`
	- A special built-in Python class that is the **default superclass** for all classes (even abstract ones)

```python
class MyClass:
	...

# The above definition contains an implicit "(object)":
class MyClass(object):
	...
```

## `object` special methods

- `object` defines a few special methods:
	- `__init__`
		- Way for initializing a new object
	- `__str__`
		- Way for converting an object into a string
	- `__eq__`
		- Checking for equality between objects of a certain type
- All of these methods are defined
- These methods are not abstract
	- They have an implementation that acts as a *default* for all classes

## Method inheritance

- Let `A` and `B` be Python classes
- Assume `B` is a subclass of `A`
- If `A` has a method `m` and `B` does not implement the same method, then `B` *inherits* the method `m` from `A`

```python
class A:
	def m(self) -> int:
		return 1


class B(A):
	# No method m defined
```

- All instances of `B` can call `A.m`

```python
>>> my_b = B()
>>> my_b.m()
1
```

## Method overriding

- Let `A` and `B` be Python classes
- Assume `B` is a subclass of `A`
- If `A` has a method `m` and `B` implements the same method, then `B` *overrides* the method `m` from `A`
- All instances of `B` call the `B.m` method

```python
class A:
	def m(self) -> int:
		return 1


class B(A):
	def m(self) -> int:
		return 100
```

```python
>>> my_b = B()
>>> my_b.m()
100
```

# Parting thoughts: abstraction and interfaces

- As computer scientists and software developers, identifying and communicating *public interfaces* and separating interfaces from implementation are critical skills
- An **Application Programming Interface (API)** is a public interface that an application provides to allow other programs to interact with it
	- e.g., the Instagram Basic Display API allows users of your app to get basic profile information, photos, and videos in their Instagram accounts

- Abstract data types are a *common language of interfaces* that transcend any one particular programming language
- Separating interface from implementation lets implementers modify and improve implementations without disrupting their users

| Operation | `PriorityQueueUnsorted` runtime | `PriorityQueueSorted` runtime | Heap runtime      |
| --------- | ------------------------------- | ----------------------------- | ----------------- |
| `enqueue` | $\Theta (1)$                    | $\Theta (n \log n)$           | $\Theta (\log n)$ |
| `dequeue` | $\Theta (n)$                    | $\Theta (1)$                  | $\Theta (\log n)$ |

- Inheritance in Python allows us to *explicitly specify public interfaces* separate from their implementation (and allow multiple implementations of the same interface)
