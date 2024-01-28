---
{"dg-publish":true,"dg-path":"academia/CSC111/Lecture Notes/Introduction to Recursion.md","permalink":"/academia/csc-111/lecture-notes/introduction-to-recursion/","created":"2024-01-27T14:43:17.587-05:00","updated":"2024-01-27T19:11:06.009-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|3]]
Course: #CSC111
Covered in: [[Unit 2 - Induction and Recursion\|Unit 2 - Induction and Recursion]]
Date: 2024-01-27

---
# Recursive Problem Solving

- Solve a problem by using an algorithm that calls itself on a smaller problem
- With each call → problem becomes smaller
- At some point, the problem becomes trivial

# Recursion types

- Depends on how we split the problem:
	- “N-1” approach:
		- handle one entity, then call the recursion for N-1 entities
	- Divide in 2 or more subproblems:
		- apply recursion for each half, quarter, etc. of the problem
	- Other ways

# Programmer perspective

- What is recursion?
	- when a function calls itself directly
- What is the goal?
	- calls itself to solve a smaller part of the problem
	- using same function/algorithm

- What are the two phases/steps of recursion?
	1. Base case
		- simplest problem
		- cannot break it down further
		- This is where we stop recursing
	2. Recursive decomposition step
		- breaks down the problem into smaller, “similarly-solvable” subproblems
		- must guarantee to eventually get to the base case
	- See [[100 📒 Academia/CSC111/Course Notes/Recursively-Defined Functions\|Section 14.2]].

## Base case(s) in the code

- There must be at least one base case
- There may be more than one
- Any call to a recursive method must ultimately reach a base case
	- Otherwise, we have “infinite” recursion
	- Cannot actually continue indefinitely:
		- Each recursive call needs a stack frame → eventually stop, run out of memory
- In order to reach a base case:
	- Problem size must decrease on every recursive call
	- Recursive calls must ultimately “connect” with a base case

# Recursive Patterns

- Note: we have seen before how data structure informs code structure.
	- e.g. linked lists, lists

### Example. Arbitrarily Nested List

- A **nested list of integers** is a list in which every element is either:
	- an integer
	- yet another **nested list of integers**
	- e.g., `[1, [2, [3, 4], 5], 6, 7, 8]`
- This data structure is *recursive*
	- Included in its own definition

# Recursive Structure

**Recursive structures** lend themselves well to **recursive problem-solving**

### Continued example. Code for a function which sums up all the elements in a nested list.

Implementation for a nested list with two levels, e.g., `[1, 2, [3, 4]]`
```python
def sum_numbers(numlist: list[Union[int, list[int]]]) -> int:
	total = 0
	for element in numlist:
		if isinstance(element, int):
			total += element
		else:  # the element is a list of ints
			for num in element:
				total += num
	return total
```

Since we know that the sublist could itself be another similarly structured nested list, we use this function itself as a helper.

```python
def sum_numbers(numlists: list[Union[list, int]]) -> int:
	total = 0
	for element in numlist:
		if isinstance(element, int):
			total += element
		else:  # the element is a list
			total += sum_numbers(element)
	return total
```

### Alternate solution
- Another way we can define a “nested list” formally is:
	- For all $n \in \mathbb{Z}$, the single integer $n$ is a nested list of integers
	- For all $k \in \mathbb{N}$ and nested lists of integers $a_{0}, a_{1}, \dots, a_{k-1}$, the list $[a_{0}, a_{1}, \dots, a_{k-1}]$ is also a nested list of integers
	- Each of the $a_{i}$ is called a *sublist* of the outer list
- The sum of such a nested list can be defined as follows: $$nested\_{sum(x)}= \begin{cases} x && \text{if }x \in \mathbb{Z} \\ \sum\limits^{k-1}_{i=0} nested\_sum(a_{i}) && \text{if } x = [a_{0}, a_{1}, \dots, a_{k-1}] \end{cases}$$
- The sum of a nested list that’s an integer is simply the value of that integer itself.
- The sum of a nested list of the form $[a_{0}, a_{1}, \dots, a_{k-1}]$ is equal to the sum of each of the $a_{i}$’s added together.

Translated to code:
```python
def sum_nested_v1(nested_list: Union[int, list]) -> int:
    """Return the sum of the given nested list.

    This version uses a loop to accumulate the sum of the sublists.
    """
    if isinstance(nested_list, int):
        return nested_list
    else:
        sum_so_far = 0
        for sublist in nested_list:
            sum_so_far += sum_nested_v1(sublist)
        return sum_so_far


def sum_nested_v2(nested_list: Union[int, list]) -> int:
    """Return the sum of the given nested list.

    This version uses a comprehension and the built-in sum aggregation function.
    """
    if isinstance(nested_list, int):
        return nested_list
    else:
        return sum(sum_nested_v2(sublist) for sublist in nested_list)
```
*Note the type annotation `Union[int, list]` means `int` or `list`.*

# Tracing recursive code

- Attempting to fully trace recursive code is time-consuming and error-prone
	- When tracing recursive code, do not trace into recursive calls
- Assume each call is correct, and make sure the rest of the code uses those calls correctly.

### Example. Tracing `sum_nested_v1`.

- Call `sum_nested_v1(1, [2, [3, 4], 5], [6, 7], 8]`.
- Since `isinstance(nested_list, int)` is False, the else branch is run.

| Iteration | `sublist`        | `sum_nested_v1(sublist)`<br>**based on assumption** | Accumulator `sum_so_far`<br>**based on tracing** |
| --------- | ---------------- | --------------------------------------------------- | ------------------------ |
| 0         | NA               | NA                                                  | `0`                        |
| 1         | `1`              | `1`                                                 | `1`                      |
| 2         | `[2, [3, 4], 5]` | `14`                                                    | `15`                         |
| 3         | `[6, 7]`         | `13`                                                    | `28`                         |
| 4         | `8`              | `8`                                                    | `36`                         |
- Then, `sum_so_far = 36` is returned

## Reasoning more formally

See [[100 📒 Academia/CSC111/Course Notes/Proof by Induction\|Section 14.1]].

- If we show these two things:
	- $P(0)$ is True
	- $\forall k \geq 0, P(k + 1)$ is true as long as $P(0), \dots, P(k)$ are all True
- We can conclude that:
	- $\forall n \geq 0, P(n)$

## Tracing from the smallest case up

For `sum_nested_v1`, we traced the function and concluded that:
- $P(0)$ is true
- $P(1)$ is true *as long as* $P(0)$ is true
- $P(2)$ is true *as long as* $P(0)$ and $P(1)$ are true
- and so on…

**We did not trace the “as long as” parts.**

## Reasoning about recursive functions

- **Principle 1.**
	- Check the base case and recursive step separately.
- **Principle 2.**
	- When checking the recursive step, assume that each recursive call is correct. We call this inductive reasoning.
- **Principle 3.**
	- If there is a bug in the recursive case, the problem is not the recursive calls. It's what the code is doing with the results of the calls!

# Code template

For recursively dealing with nested lists of arbitrary depths:
```python
def f(nested_list: int | list) -> ...:
	if isinstance(nested_list, int):
		...
	else:
		# With a loop
		...
		for sublist in nested_list
		... f(sublist) ...
		
		# Or with a comprehension
		... [f(sublist) for sublist in nested_list] ...
```

# Recursive function design recipe

1. Write a doctest example to illustrate the **base case**
2. Write a doctest example to illustrate the **recursive step**
3. Use the **nested list recursion code template**
4. Implement the base case using your first doctest example
5. Implement the recursive case by:
	- using your second doctest example
	- analyze the output of the recursive calls and determine how to combine them
