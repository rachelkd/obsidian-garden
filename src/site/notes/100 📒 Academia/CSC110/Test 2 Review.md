---
{"dg-publish":true,"dg-path":"academia/CSC110/Test 2 Review.md","permalink":"/academia/csc-110/test-2-review/","created":"2023-10-28T16:34:27.881-04:00","updated":"2023-10-28T18:02:38.675-04:00"}
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
- `class Person:
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