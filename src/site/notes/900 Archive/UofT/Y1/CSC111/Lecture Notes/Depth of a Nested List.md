---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/csc-111/lecture-notes/depth-of-a-nested-list/","created":"2024-01-27T16:11:16.442-08:00","updated":"2024-01-27T17:58:11.086-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/CSC111/_CSC111 Notes\|3]]
Course: #CSC111
Covered in: [[900 Archive/UofT/Y1/CSC111/Unit 2 - Proof by Induction\|Unit 2 - Proof by Induction]]
Date: 2024-01-27

---

- Definition of **depth**:
	- Let $x$ be a nested list. The depth of $x$ is defined as the maximum number of times a list is nested within another list in $x$.
	- e.g.,
		- 5 has depth 0
		- \[1, 2, 3\] has depth 1
		- \[1, 2, \[3, 4\], 5] has depth 2
		- \[\[\[1]], \[2], \[\[3, 4]]] has depth 3

### Example. Design a recursive function that computes the depth of a nested list.

#### 1. Base case example and implementation.
- Let $x \in \mathbb{Z}$. What is the depth of $x$?
	- 0
- $$depth(x) = \begin{cases} 0, && \text{if } x \in \mathbb{Z}  \\ \dots, && \text{if } x = [a_{0}, a_{1}, \dots, a_{k-1}] \end{cases}$$
#### Base case translation to code.
```python
def depth(nested_list: int | list) -> int:
	if isinstance(nested_list, int):
		return 0
	else:
		...
```

#### 2. Create an example for the recursive step
- Consider `[[1], 2, [[3, 4]]]`. What is its depth?
	- 3

```python
>>> nested_list = [[1], 2, [[3, 4]], []]
>>> depth(nested_list)
3
```

| `sublist` | `depth(sublist)` |
| ---- | ---- |
| `[1]` | 1 |
| `2` | 0 |
| `[[3, 4]]` | 2 |
| `[]` | 1 |
- How are the depths of the sublists related to the depth of the full list?
	- `max` of sublists + 1 (for the full list)

#### 3. Generalize and implement
Suppose we have sublists: $a_{0}, a_{1}, \dots, a_{k-1}$ and depths: $d_{0}, d_{1}, \dots, d_{k-1}$.
- How do we compute the depth of $[a_{0}, a_{1}, \dots, a_{k-1}]$ from $d_{i}$?
	- $1 + \text{max}\{d_{0}, d_{1}, \dots, d_{k-1}\}$
- **Special case:** What if the list was empty?

$$depth(x) = \begin{cases} 0 && \text{if } x \in \mathbb{Z} \\ 1 && \text{if } x = [] \\ 1 + \text{max}\{ depth(a_{i}) \mid a_{i} \in x \} && \text{if } x = [a_{0}, \dots, a_{k-1}], k > 0 \}\end{cases}$$

```python
def depth(nested_list: Union[int, list]) -> int:
	if isinstance(nested_list, int):  # Our normal base case
		return 0
	elif nested_list == []  # An additional base case
		return 1
	else:
		return 1 + max(depth(sublist) for sublist in nested_list)
```

# Another definition of depth of an object in a list

Let $x$ be a nested list and $n$ be an integer contained in $x$.
The **depth of $n$ in $x$** is the number of nested lists enclosing $n$.

![3_depth_of_object_in_list.png](/img/user/900%20Archive/UofT/Y1/Files/CSC111/3_depth_of_object_in_list.png)