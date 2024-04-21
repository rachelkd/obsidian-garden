---
{"dg-publish":true,"permalink":"/000-zettlekasten/nifty-python-features/","tags":["CSC111"],"created":"2024-04-16T16:11:03.293-04:00","updated":"2024-04-16T16:45:42.416-04:00"}
---

2024-04-16

---

# Sequences revisited: ranges, indexing, and slicing

## `range` and the optional start

- `range`
    - special ==data type== in Python
    - represents a sequence of numbers
- `range` arguments
    - `start` and `stop`
    - `start` argument is optional
    - has a default value of `0` if not specified
    - $\implies$ `range(0, n) == range(n)`

## Indexing with negative numbers

- Access elements offset from the *end* of the sequence (rather than front)
- For a sequence `seq` and positive integer `0 < i < len(seq)`,
    - `seq[-i]` is equivalent to `seq[len(seq - i)`
- 
  ```python
>>> seq = [10, 20, 30, 40]
>>> seq[-1]  # equivalent to seq[4 - 1] == seq[3]
40
>>> 'Hello'[-2]  # equivalent to 'Hello'[5 - 2] == 'Hello'[3]
'l'
  ```
      
## Sequence slicing

- Access a *subsequence* of the sequence by specifying a start and stop index for a range of elements to retrive
- **(Sequence) slicing** operation:
    - 
      ```python
      seq[i:j]
        ```
    - Evaluates to a new sequence that:
        - Has same data type as `seq`
        - Contains elements from `seq` with indexes between `i` and `j`
        - `i` is ==inclusive==
        - `j` is ==exclusive==
- What happens when you omit the *optional start index*?
  (e.g., `'Hello'[:3]`)
    - Returns `'Hel'`
    - All elements from the start of the sequence to the stop index (exclusive)
- What happens when you omit the *optional stop index*?
  e.g., (`'Hello'[3:])
    - Returns `'lo'`
    - Returns all elements from the start index to the end of the sequence
- Possible to omit *both* start and stop indices in slicing operation → Returns a ==copy==

## Specifying a step amount

### `range(start, stop, step)`

```python
>>> [x for x in range(0, 10, 2)]
[0, 2, 4, 6, 8]
>>> [x for x in range(10, 0, -1)]
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

### `seq[start:stop:step]`

```python
>>> message = 'David is cool'
>>> message[0:10:2]
'Dvdi '
>>> message[10:0:-1]
'oc si diva'
```

```python
>>> message[4::-1]
'divaD'
>>> message[:4:-1]
'looc si '
>>> message[::-1]
'looc si divaD'
```

# String interpolation

```python
>>> family_name = 'Liu'
>>> given_name = 'David'
>>> student_number = 123456789

>>> # Now, using an f-string
>>> f'{family_name}, {given_name} ({student_number})'
'Liu, David (123456789)'
```

```python
>>> f'{family_name}, {given_name} ({student_number % 10000})'
'Liu, David (6789)'
```

# Functions with optional parameters

```python
# parameter definition with default value syntax
def ...(<parameter_name>: <parameter_type> = <default_value>, ...) -> ...:
```

> [!important] Optional parameters must be written after mandatory parameters.
> - Raises a `SyntaxError` if not the case
> ```python
> def increment(step: int = 1, n: int) -> int:
>     """Return n incremented by step.
> 
>    If the step argument is omitted, increment by 1 instead.
>    """
>    return n + step
>
>
> # Running the above definition in the Python console produces:
> def increment(step: int = 1, n: int) -> int:
>                              ^^^^^^
> SyntaxError: non-default argument follows default argument
> ```

## Example of function with optional parameter

```python
def increment(n: int, step: int = 1) -> int:
    """Return n incremented by step.

    If the step argument is omitted, increment by 1 instead.
    """
    return n + step
```

> [!warning] Do not use mutable objects as default values
> - Every default value is an object that is created when the function is defined
> - NOT when the function is called

