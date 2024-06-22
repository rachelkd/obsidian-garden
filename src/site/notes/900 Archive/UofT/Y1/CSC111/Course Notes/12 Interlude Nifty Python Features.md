---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/csc-111/course-notes/12-interlude-nifty-python-features/","created":"2024-01-08T21:28:54.997-08:00","updated":"2024-01-26T10:31:20.507-08:00"}
---

#CSC111

**Covered in:**
- Lectures: 1
---

- [[900 Archive/UofT/Y1/CSC111/Course Notes/Files\|Files]]

---
# 12.1 Sequences Revisited Ranges, Indexing, and Slicing

## `range` and the optional start
- Recall: `range` is a special data type
	- represents a sequence of numbers
	- `range(start, stop)`
- `start` argument is *optional*
	- has a default value of `0` if not specified
	- `range(0, n) == range(n)`

## Indexing with negative numbers
- indexing with negative numbers
	- access elements offset from the *end* of the sequence rather than the front
- For a sequence `seq` and positive integer `0 < i < len(seq)`, `seq[i]` is equivalent to `seq[len(seq - i)]`

``` python
>>> seq = [10, 20, 30, 40]
>>> seq[-1]  # equivalent to seq[4 - 1] == seq[3]
40
>>> 'Hello'[-2]  # equivalent to 'Hello'[5 - 2] == 'Hello'[3]
'l'
```

> [!warning] 
> Negative indexing is subject to index errors like non-negative indexing

## Sequence slicing
- Given a sequence `seq`, we call `seq[i]` a **(sequence) indexing** operation
- Access a *subsequence* of the sequence:
	- Specify a start and stop index for a range of elements to retrieve
	- **(sequence) slicing** operation
     ```python
     seq[i:j]
    ```

- `i` and `j` are integers interpreted as indexes into `seq`
- expression above evaluates to a new sequence that:
     1. has the same data type as `seq`
     2. contains the elements from `seq` with indexes between `i` and `j`
          - `i` is *inclusive*
          - `j` is *exclusive*
          - Same as `start`/`stop` of `range`

```python
>>> [10, 20, 30, 40][1:3]
[20, 30]
>>> 'Hello'[0:3]
'Hel'
```

**Sequence slicing allows for an optional “start” index.**
```python
# All elements from the start of the sequence
# to the stop index (exclusive) are returned

>>> 'Hello'[:3]
'Hel'
```

**Slicing allows for an optional “stop” index.**
```python
# All elements from the start index
# to the end of the sequence are returned

>>> 'Hello'[3:]
'lo'
```

## Specifying a step amount

## `range(start, stop, step)`
- `range` has an implicit “+1” when describing the range of numbers/indices to include

```python
>>> [x for x in range(0, 10, 2)]
[0, 2, 4, 6, 8]
>>> [x for x in range(10, 0, -1)]
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

## `seq[start:stop:step]`

```python
>>> message = 'David is cool'
>>> message[0:10:2]
'Dvdi '
>>> message[10:0:-1]
'oc si diva'
```

- Can still omit the “start” and “stop” indices in a slicing operation:
	- Omitted “start” = “start at the end of the sequence”
	- Omitted “stop” = “stop at the beginning of the sequence”

```python
>>> message[4::-1]
'divaD'
>>> message[:4:-1]
'looc si '
>>> message[::-1]
'looc si divaD'  # Common Python idiom for reversing a string and other types of sequences
```

# 12.2 String Interpolation with f-strings

## The f-string

- Recall: **string literal**
	- text surrounded by either single or double quotes
		- e.g., `‘David’` or `“Hello World!”`
	- evaluates to a string
	- represent text that should be interpreted as a string, rather than Python code
- **f-string**
	- short for **formatted string literal**
	- Python expression
	- looks like a regular string literal with a preceding `f`
		- e.g., `f'David'` or `f"Hello World!"`
	- evaluate to the same strings as the corresponding string literals

> [!note] 
> In an f-string, any text surrounded by curly braces (`{...}`) is interpreted as a Python expression
> - is evaluated → converted into a string → inserted back into the literal
> - f-strings give us the ability to add Python code ‘inside a string literal’

```python
>>> family_name = 'Liu'
>>> given_name = 'David'
>>> student_number = 123456789

>>> # Now, using an f-string
>>> f'{family_name}, {given_name} ({student_number})'
'Liu, David (123456789)'
```

## Computing expressions in f-strings
**Calling `str.upper` method directly in f-string.**
```python
>>> f'{family_name.upper()}, {given_name} ({student_number})'
'LIU, David (123456789)'
```

**Using modulo operator in f-string.**
```python
>>> f'{family_name}, {given_name} ({student_number % 10000})'
'Liu, David (6789)'
```

# 12.3 Functions with Optional Parameters

We’ve seen a few different examples of built-in Python functions that seem to take in a varying number of arguments:
- `round`
	- 
		```python
		>>> round(3.46, 1)  # round to 1 decimal place
		3.5
		>>> round(3.46)     # round to the nearest integer
		3
	    ```
- `list.pop`
	- 
		 ```python
		 >>> numbers = [10, 20, 30, 40]
		 >>> numbers.pop(1)
		20
		>>> numbers.pop()
		40
		```

- There is a third property that can be specified in the function header:
	- a *default value* for the parameter
	  
	```python
	# parameter definition with default value syntax
	def ...(<parameter_name>: <parameter_type> = <default_value>, ...) -> ...:
	```

**Example. Defining a function that takes a number `n` and by default returns `n + 1`, but allows the caller to specify an optional `step` amount to increase by.**
```python
def increment(n: int, step: int = 1) -> int:
    """Return n incremented by step.

    If the step argument is omitted, increment by 1 instead.
    """
    return n + step
```
```python
>>> increment(10, 2)  # n = 10, step = 2
12
>>> increment(10)     # n = 10
11
```

> [!warning] Optional parameters must be written after mandatory parameters
>   ```python
>   def increment(step: int = 1, n: int) -> int:
>    """Return n incremented by step.
>    
>    If the step argument is omitted, increment by 1 instead
>    """
>    return n + step
>    
> # Running the above definition in Python console
> def increment(step: int = 1, n: int) -> int:
>                             ^^^^^^
> SyntaxError: non-default argument follows default argument
>    ```

> [!warning] Do not use mutable objects as default values
> ```python
>   def add_num(num: int, numbers: list[int] = []) -> list[int]:
 >   """Append num to the given numbers, and return the list.
>
 >   If no numbers are given, return a new list containing just num.
>
 >   >>> my_numbers = [1, 2, 3]
>    >>> add_num(10, my_numbers)
>    [1, 2, 3, 10]
>    >>> add_num(10)
>    [10]
 >   """
 >   numbers.append(num)
 >   return numbers
 >   ```
 
 ```python
>>> add_num(10)
[10]                # Looks okay...
>>> add_num(20)
[10, 20]            # Wait, what? Should be [20]...
>>> add_num(30)
[10, 20, 30]        # ??? Should be [30]...
>>> add_num(40)
[10, 20, 30, 40]    # I see the pattern, but why?!
```

- **Every default value is an object that is created when the function is defined, not when the function is called**
	- The default value `[]` is a single list object that is created when the Python interpreter executes the function definition
		- Object is shared across all calls to `add_num`
		- If one call mutates this object, then all subsequent calls will use that mutated object as their default value.
	- This is why each call to `add_num` above seems to “remember” the previous calls: the default value was mutated by each of the previous calls and is not “reset” to `[]`

A common alternate approach is to use `None` as the default value and then explicitly check for a `None` value in the code.

```python
from typing import Optional


def add_num(num: int, numbers: Optional[list[int]] = None) -> list[int]:
    """Append num to the given numbers, and return the list.

    If no numbers are given, return a new list containing just num.

    >>> my_numbers = [1, 2, 3]
    >>> add_num(10, my_numbers)
    [1, 2, 3, 10]
    >>> add_num(10)
    [10]
    """
    if numbers is None:
        return [num]
    else:
        numbers.append(num)
        return numbers
```
