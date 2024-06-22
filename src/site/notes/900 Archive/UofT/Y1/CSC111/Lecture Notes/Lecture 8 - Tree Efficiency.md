---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/csc-111/lecture-notes/lecture-8-tree-efficiency/","created":"2024-02-04T10:25:18.812-08:00","updated":"2024-02-04T11:18:57.695-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/CSC111/_CSC111 Notes\|4]]
Course: #CSC111
Covered in: [[900 Archive/UofT/Y1/CSC111/Unit 3 - Trees\|Unit 3 - Trees]]
Date: 2024-02-04

---
# Runtime analysis

### Analyze `RecursiveList.sum`. #example 

```python
class RecursiveList:
	def sum(self) -> int:
		if self,_first is None:
			return 0
		else:
			return self._first + self._rest.sum()
```

- Intuition:
	- For a list of length $n$, there are $\approx n$ recursive calls made. So the running time is $\Theta(n)$?

Formalizing this, we get:
### Step 1: Identify recursive calls

Suppose `lst` is a `RecursiveList` with elements `[10, 20, 30]`. When we call `lst.sum()`:
1. The initial call to `RecursiveList.sum` makes one recursive call on the rest, `[20, 30]`.
2. The recursive call on `[20, 30]` makes one recursive call on the rest, `[30]`.
3. The recursive call on `[30]` makes one recursive call on the rest, `[]`
4. The recursive call on `[]` doesn’t make any more recursive calls (base case).

![4_tree_running_time.png|500](/img/user/900%20Archive/UofT/Y1/Files/CSC111/4_tree_running_time.png)

In general, calling this method on a list of size $n$ takes $n + 1$ calls in total
### Step 2: Analyze non-recursive running time

- What is the **non-recursive running time**?
	- Analyze exact running time of the code, ignoring the recursive calls (treat as constant)

In `RecursiveList.sum`, if we ignore the recursive call, all other code is constant. So its non-recursive running time is 1 step.
### Step 3: Putting it together

![4_tree_run_time_analysis_2.png|center|500](/img/user/900%20Archive/UofT/Y1/Files/CSC111/4_tree_run_time_analysis_2.png)

- The total running time is the sum of all the numbers in the nodes. The running time is 4.

- In general, calling sum on a list of length $n$:
	- makes $n + 1$ recursive calls
	- each call has a non-recursive running time of 1 step
	- This gives us a total of $(n+1) \cdot 1$ steps, which is $\Theta (n)$





### Example with `Tree` method. #example

```python
class Tree:
	def __len__(self) -> int:
		"""Return the number of items contained in this tree.
		"""
		if self.is_empty():
			return 0
		else:
			size_so_far = 1
			for subtree in self._subtrees:
				size_so_far += subtree.__len__()
			return size_so_far
```

- What is the **non-recursive running time**?
	- Let $n$ be the size of the tree and $k$ be the number of subtrees this tree has.
	- Questions to consider:
		- If the tree is empty, how many steps does this method take?
		- If the tree is not empty, we are in the `else` block above, which includes a for loop that visits each subtree. If $k$ is the number of subtrees this tree has, how many total steps does this `else` block take?
	- If the tree is empty, it takes 1 step
	- If the tree is not empty, it takes $k + 2$ steps
	- *Problem:* $k+2$ changes:
		- ![5_tree_k_cost.png|300](/img/user/900%20Archive/UofT/Y1/Files/CSC111/5_tree_k_cost.png)
		- We know that our running time will have “$+2n$”
		- In this tree of size 10, we have 9 children → $n$ nodes → $n -1$ are children
		- Every subtree gets dealt with ONE time
	- So, we get a total run time of $(n-1) + 2n \in \Theta (n)$
### Example with `Tree.__contains__`

```python
class Tree:
	def __contains__(self, item: Any) -> bool:
		if self.is_empty():
			return False
		elif self._root == item:
			return True
		else:
			for subtree in self._subtrees:
				if subtree.__contains__(item):
					return True
			return False
```

The worst-case running time of `Tree.__contains__` is $\Theta(n)$, but it could be much faster due to the early return.

