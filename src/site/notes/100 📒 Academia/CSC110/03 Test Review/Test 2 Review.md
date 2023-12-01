---
{"dg-publish":true,"dg-path":"academia/CSC110/03 Test Review/Test 2 Review.md","permalink":"/academia/csc-110/03-test-review/test-2-review/","created":"2023-10-28T16:34:27.881-04:00","updated":"2023-11-06T00:18:55.004-05:00"}
---

#CSC110 

# 5. Working with Complex Data

## Tabular Data

```Python
>>> import datetime
>>> marriage_data = [
...     [1657, 'ET', 80, datetime.date(2011, 1, 1)],
...     [1658, 'NY', 136, datetime.date(2011, 1, 1)],
...     [1659, 'SC', 159, datetime.date(2011, 1, 1)],
...     [1660, 'TO', 367, datetime.date(2011, 1, 1)],
...     [1661, 'ET', 109, datetime.date(2011, 2, 1)],
...     [1662, 'NY', 150, datetime.date(2011, 2, 1)],
...     [1663, 'SC', 154, datetime.date(2011, 2, 1)],
...     [1664, 'TO', 383, datetime.date(2011, 2, 1)]
... ]
```

1. **Accessing elements inside of each row**
	- 
	    ```Python
	    >>> marriage_data[0][0]
		1657
        >>> marriage_data[0][1]
		'ET'
        >>> marriage_data[0][2]
		80
        >>> marriage_data[0][3]
		datetime.date(2011, 1, 1)
		```

2. **Filter rows corresponding to a specific civic centre**
	- 
		```Python
		>>> [row for row in marriage_data if row[1] == 'TO']
        [[1660, 'TO', 367, datetime.date(2011, 1, 1)], [1664, 'TO', 383, datetime.date(2011, 2, 1)]]
		```
1. **Filter rows based on a threshold for number of marriage licenses**
	- 
	    ```Python
	    >>> [row for row in marriage_data if row[2] > 380]
        [[1664, 'TO', 383, datetime.date(2011, 2, 1)]]
        ```

## Data classes

- data class
	- class that bundles individual pieces of data into a single Python object

### Representing a person in a data class.
{ #882c54}


```Python
from dataclasses import dataclass

@dataclass
class Person:
	"""A custom data type that represents data for a person
	"""
	given_name: str
	family_name: str
	age: int
	address: str
```
{ #12e705}


- `@dataclass`
	- Tells Python that the data type we're defining is a data class
- `class Person`:
	- Syntax for the start of a *class definition*
	- Name of data class is `Person`
- `given_name: str ...`
	- Defines a piece of data associated with the data class
	- Each piece of data is called an **instance attribute** of the data class
		- Attribute has name and type annotation

### Data class definition syntax
```Python
@dataclass
class <ClassName>:
	"""Description of the data class.
	"""
	<attribute1>: <type1>
	<attribute2>: <type2>
	...
```

- Creating a `Person` object
	- 

    ```Python
    >>> david = Person('David', 'Liu', 100, '40 St. George Street')
    >>> type(david)
    <class Person>
    ```
    
	- `david` refers to an ***instance*** of the `Person` data class

### Accessing instance attributes

```Python
>>> david
Person(given_name='David', family_name='Liu', age=100, address='40 St. George Street')
```

- Use **dot notation** to access attributes
	- 
	    ```Python
	    >>> david.given_name
		'David'
        >>> david.family_name
		'Liu'
        >>> david.age
		100
        >>> david.address
		'40 St. George Street'
	    ```
	
### Create data class instances using *keyword arguments*

```Python
>>> david = Person(given_name='David', family_name='Liu', age=100, address='40 St. George Street')

>>> david = Person(family_name='Liu', given_name='David', address='40 St. George Street', age=100)

>>> david = Person(
...    family_name='Liu',
...    given_name='David',
...    address='40 St. George Street',
...    age=100
... )
```

### Variable memory model
![value_memory_model.png|400](/img/user/Files/CSC110/value_memory_model.png)


### Representation Invariants

- Representation invariant
	- Predicate describing how we *represent* values of a data class
	- Constraints must always be true

Consider `Person` data class from [[100 📒 Academia/CSC110/03 Test Review/Test 2 Review#^12e705\|here]].
- How do we add a constraint that the `age` must be positive?
	- `self.age >= 0`
	- 
		```Python
		from dataclasses import dataclass
		from python_ta.contracts import check_contracts
		
		
		@check_contracts
		@dataclass
		class Person:
		    """A person with some basic demographic information.
		
		    Representation Invariants:
		      - self.age >= 0
		    """
		    given_name: str
		    family_name: str
		    age: int
		    address: str
		```

## For Loops

- ***For loop***
	- compound statement that repeats a block of code once for element in a collection
	- 
	    ```Python
		for <loop_variable> in <collection>:
		    <body>
		```
- There are three parts:
	- `<collection>`
		- expression for Python collection (e.g., `list`, `set`)
	- `<loop_variable>`
		- name for the *loop variable* that will refer to an element in the collection
	- `<body>`
		- sequence of one or more statements
- ***Loop iteration***
	- Each individual execution of the loop body

Consider the following function:
```Python
def my_sum(numbers: list[int]) -> int:
    """Return the sum of the given numbers.

    >>> my_sum([10, 20, 30])
    60
    """
    sum_so_far = 0

    for number in numbers:
        sum_so_far = sum_so_far + number

    return sum_so_far
```

- What is the accumulator variable?
	- `sum_so_far`

### Existential search

**Early Returns**

```Python
def starts_with_v4(strings: Iterable[str], char: str) -> bool:
    """Return whether one of the given strings starts with the character char.

    Precondition:
        - all({s != '' for s in strings})
        - len(char) == 1
	
	>>> starts_with(['Hello', 'Goodbye', 'David', 'Dario'], 'D')
    True
    >>> starts_with(['Hello', 'Goodbye', 'David', 'Dario'], 'A')
    False
	"""
    for s in strings:
        if s[0] == char:
            return True  # Returns True when one exists and 
				         # no more code is executed after this point

    return False
```

> [!note]
> The type annotation `Iterable` means that `strings` can be any iterable object.

### Universal search

```Python
def all_starts_with_v3(strings: Iterable[str], char: str) -> bool:
    """Return whether all of the given strings starts with the character char.

    Precondition:
        - all({s != '' for s in strings})
        - len(char) == 1

    >>> all_starts_with(['Hello', 'Goodbye', 'David', 'Dario'], 'D')
    False
    >>> all_starts_with(['Drip', 'Drop', 'Dangle'], 'D')
    True
    """
    for s in words:
        if s[0] != char:
            return False  # Return False when ONE element does not
					      # fit condition

    return True
```

## Index-Based For Loops

```Python
def count_adjacent_repeats(string: str) -> int:
	"""Return the number of repeated adjacent characters in string.
	
    >>> count_adjacent_repeats('look')
	1
    >>> count_adjacent_repeats('David')
	0
    >>> count_adjacent_repeats('canal')
	0
	"""
	# ACCUMULATOR repeats_so_far: keep track of the number of adjacent
	# characters that are identical
	repeats_so_far = 0

	for i in range(0, len(string) - 1):
		if string[i] == string[i + 1]:
			repeats_so_far = repeats_so_far + 1

	return repeats_so_far
```

- Notice how the range goes to `len(string) - 1` exclusive
	- Next line checks index `i + 1`

```Python
def count_money(counts: list[int], values: list[float]) -> float:
    """Return the total amount of money for the given coin counts and 
    denominations.

    counts stores the number of coins of each type, 
    and denominations stores the value of each coin type.
    Each element in counts corresponds to the element at
    the same index in denoms.

    Preconditions:
      - len(counts) == len(denoms)

    >>> count_money([2, 4, 3], [0.05, 0.10, 0.25])
    1.25
    """
    # ACCUMULATOR money_so_far: keep track of the total money so far.
    money_so_far = 0.0

    for i in range(0, len(counts)):
        money_so_far = money_so_far + counts[i] * values[i]

    return money_so_far
```

### When to use Index-Based Loops

1. When *location* of elements in the collection matters
	1. `count_adjacent_repeats`
2. When looping through *more than one list* at a time
	1. `count_money`

## Nested For Loops

```Python
def sum_all(lists_of_numbers: list[list[int]]) -> int:
    """Return the sum of all the numbers in the given lists_of_numbers.

    >>> sum_all([[1, 2, 3], [10, -5], [100]])
    111
    """
    sum_so_far = 0

    for numbers in lists_of_numbers:  # numbers is a list of numbers,
								      # not a single number!
        for number in numbers:        # number is a single number
            sum_so_far = sum_so_far + number

    return sum_so_far

print(sum_all([[1, 2, 3], [10, -5], [100]]))
```

```Python
def cartesian_product(set1: set, set2: set) -> set[tuple]:
    """Return the Cartesian product of set1 and set2.

    >>> result = cartesian_product({10, 11}, {5, 6, 7})
    >>> result == {(10, 5), (10, 6), (10, 7), (11, 5), (11, 6), (11, 7)}
    True
    """
    # ACCUMULATOR product_so_far: keep track of the tuples from the pairs
    # of elements visited so far.
    product_so_far = set()

    for x in set1:
        for y in set2:
            product_so_far = set.union(product_so_far, {(x, y)})

    return product_so_far

result = cartesian_product({10, 11}, {5, 6, 7})
print(result == {(10, 5), (10, 6), (10, 7), (11, 5), (11, 6), (11, 7)})
```

# 6. Modifying Values and Variables

**Variable reassignment never affects other variables**

```Python
x = 1
y = x + 2
x = 7

print((x, y))
```

- Variable reassignment only changes the immediate variable being reassigned
	- Does not change any other variables or values
		- Even ones that were defined using variable being reassigned
<br>
- ***augmented assignment statement***
	- `<variable> += <expression>`
	- also works with `-=`, `*=`, `//=`, `%=`, `/=`, `**=`
	- <mark style="background: #FEFAD0A6;">Augmented assignment operators behave differently for different data types</mark>

## Objects and Object Mutation

- Every piece of data is stored in an entity called an **object**
	- Three fundamental components:
		- id
		- data type
		- value
- What is the id of an object?
	- Unique `int` representation of the memory address of the object
- Once an object is created...
	- id and type can **never change**
	- Depending on the data type, its **value may change**

### Object Mutation

- object mutation
	- form of "value change" in a Python program
	- operation that changes the value of an existing object
	- e.g., `list` data type contains several *methods* that *mutate* the given `list` object

**Implementing `squares` function by using `list.append`**
```Python
def squares(nums: list[int]) -> list[int]:
    """Return a list of the squares of the given numbers.

    >>> squares([1, 2, 3])
    [1, 4, 9]
    """
    squares_so_far = []

    for num in nums:
        list.append(squares_so_far, num * num)  # MUTATES list
    return squares_so_far
    
print(squares([1, 2, 3]))
```

- `squares_so_far` is *not* reassigned
	- The object it refers to gets *mutated*.

## Variable reassignment vs. object mutation

**Suppose we have `squares_so_far = [1, 4, 9]`**
How do we add `16` to the end of it?

- Variable reassignment
	- 
	    ```Python
	    # Create the variable
	    >>> squares_so_far = [1, 4, 9]
	    >>> squares_so_far
		[1, 4, 9]
		
		>>> id(squares_so_far)
		1920480441344
		
		# Reassign the variable
		>>> squares_so_far = squares_so_far + [16]
		>>> squares_so_far
		[1, 4, 9, 16]
		
		>>> id(squares_so_far)
		1920484788736
		```
	- id changes
		- Reassignment creates a *new list object* and assigns that to `squares_so_far`

- Object mutation
	- 
		```Python
		# Create the variable
		>>> squares_so_far = [1, 4, 9]
		>>> squares_so_far
		[1, 4, 9]
		
		>>> id(squares_so_far)
		1920480441344
		
		# Reassign the variable
		>>> list.append(squares_so_far, 16)
		>>> squares_so_far
		[1, 4, 9, 16]
		
		>>> id(squares_so_far)
		1920480441344
		```
	- id is the same
		- value of the object that `squares_so_far` refers to the same list object


| |Object id|Object type|Object value|
|---|---|---|---|
|Description|A unique identifier for the object.|The data type of the object.|The value of the object.|
|How to see it|Built-in `id` function|Built-in `type` function|Evaluate it|
|Example|```python | ```python | ```python \
|| >>> id([1, 4, 9]) | >>> type([1, 4, 9]) | >>> [1, 4, 9 \
|| 1920480441344 | <class 'list'> | [1, 4, 9] \
|| ``` | ``` | ```|
|Can change?|No|No|Yes, for some data types|
|Unique among all objects|Yes|No|No|

## Mutable Data Types

> [!note]
> An object's data type determines whether any mutating operations can be performed on the object
> - determines whether it can be mutated or not

- A Python data type is **mutable** when...
	- it supports one kind of mutating operation
	-  `set`, `list`, `dict`
	- Data classes are *mutable* by default
- **immutable** when
	- does not support any mutating operations
	- `int`, `float`, `bool`, `str`
- Instances of an immutable data type cannot change their value
	- But a variable that refers to this object might be reassigned to a different object
<br>
- tuples
	- Similar to lists, but tuples are *immutable*
		- No `tuple.append` method

### Mutating `list`s

- `list.append`
- `list.insert`
	- Takes a list, an index, and an object
	- Inserts object at given object into the list
	- 
	    ```python
	    >>> strings = ['a', 'b', 'c', 'd']
        >>> list.insert(strings, 2, 'hello')  # Insert 'hello'
										      # into strings at index 2
        >>> strings
		['a', 'b', 'hello', 'c', 'd']
		```
- `list.extend`
	- Takes two lists and adds all elements from the second list at the end of the first list
	- As if `append` were called once per element of the second list
	- 
		```python
		>>> strings = ['a', 'b', 'c', 'd']
		>>> list.extend(strings, ['CSC110', 'CSC111'])
		>>> strings
		['a', 'b', 'c', 'd', 'CSC110', 'CSC111']
		```
- List index assignment
	- 
	    ```python
	    >>> strings = ['a', 'b', 'c', 'd']
	    >>> strings[2] = 'Hello'
	    >>> strings
		['a', 'b', 'Hello', 'd']
		```
- List augmented assignment
	- 
	    ```python
		>>> strings = ['a', 'b', 'c', 'd']

		>>> id(strings)
		1920488009536
		
		>>> strings += ['Hello', 'Goodbye']
		>>> strings
		['a', 'b', 'c', 'd', 'Hello', 'Goodbye']
		
		>>> id(strings)
		1920488009536  # SAME ID
		```
	- The id of the object that `strings` refers to has not changed
	- Behaves like `list.extend`

### Mutating `set`s

- `set.add`
- `set.remove`

### Mutating dictionaries

```python
>>> items = {'a': 1, 'b': 2}
>>> items['c'] = 3  # Adds new key-value pair to items
>>> items
{'a': 1, 'b': 2, 'c': 3}

>>> items['a'] = 100  # Replaces existing key-value pair value
>>> items
{'a': 100, 'b': 2, 'c': 3}
```

### Mutating data classes

Consider `Person` class:
```python
@dataclass
class Person:
    """A person with some basic demographic information.

    Representation Invariants:
      - self.age >= 0
    """
    given_name: str
    family_name: str
    age: int
    address: str
```

- Mutate instances of data classes by *modifying their attributes*
	- 
	    ```python
	    >>> p = Person('David', 'Liu', 100, '40 St. George Street')
	    >>> p.age = 200
	    >>> p
		Person(given_name='David', family_name='Liu', age=200, 
				address='40 St. George Street')
		```

## Memory models

```python
>>> x = 3
>>> word = 'bonjour'
```

`__main__`

|Variable|Value|
|---|---|
|`x`|`3`|
|`word`|`'bonjour'`|

![memory_model_simple.png|500](/img/user/Files/CSC110/memory_model_simple.png)

**Representing a list**

```python
>>> lst = [1, 2, 3]
```

![memory_model_list.png|600](/img/user/Files/CSC110/memory_model_list.png)

**Representing a set**

```python
>>> my_set = {1, 2, 3}
```

![memory_model_set.png|500](/img/user/Files/CSC110/memory_model_set.png)

**Representing a dictionary**

```python
>>> my_dict = {'a': 1, 'b': 2}
```

![memory_model_dict.png|500](/img/user/Files/CSC110/memory_model_dict.png)

**Representing a data class**

![memory_model_dataclass.png|500](/img/user/Files/CSC110/memory_model_dataclass.png)

