---
{"dg-publish":true,"dg-path":"academia/CSC110/Test 2 Review.md","permalink":"/academia/csc-110/test-2-review/","created":"2023-10-28T16:34:27.881-04:00","updated":"2023-10-28T18:48:40.692-04:00"}
---



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
	1. 
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
	1. 
		```Python
		>>> [row for row in marriage_data if row[1] == 'TO']
        [[1660, 'TO', 367, datetime.date(2011, 1, 1)], [1664, 'TO', 383, datetime.date(2011, 2, 1)]]
		```
1. **Filter rows based on a threshold for number of marriage licenses**
	1. 
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
![PythonMemoryModel1.png|400](/img/user/Files/PythonMemoryModel1.png)


### Representation Invariants

- Representation invariant
	- Predicate describing how we *represent* values of a data class
	- Constraints must always be true

Consider `Person` data class from [[100 📒 Academia/CSC110/Test 2 Review#^12e705\|here]].
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
