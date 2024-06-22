---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/csc-111/course-notes/introduction-to-binary-search-trees/","created":"2024-02-04T15:05:53.841-08:00","updated":"2024-02-10T16:38:11.316-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/CSC111/_CSC111 Notes\|5]]
Course: #CSC111
Covered in: [[900 Archive/UofT/Y1/CSC111/Unit 3 - Trees\|Unit 3 - Trees]]
Date: 2024-02-04

---
### Multiset abstract data type

- **Multiset**
	- Data:
		- an unordered collection of values, allowing duplicates
	- Operations:
		- get size, insert a value, remove one occurrence of a specified value, check membership in the multiset

### Binary search trees: definitions

- **binary tree**
	- tree in which every item has two (possibly empty) subtrees
		- labelled *left* and *right*
- **binary search tree property**
	- when an item’s value is greater than or equal to all items in its left subtree, and less than or equal to all items in its right subtree
	- duplicates of the root are allowed in *either* subtree in this BST definition
- **binary search tree**
	- a binary tree is a BST when *every* item satisfies the BST property

<br>

- We can think of a BST as a “sorted tree”
	- searching is efficient
		- $\Theta (\log n)$
	- → insertion and deletion more efficient than Python `list`s

### BinarySearchTree implementation

```python
class BinarySearchTree:
	"""Binary Search Tree class. 
	
	Representation Invariants:
	    - (self._root is None) == (self._left is None)
	    - (self._root is None) == (self._right is None)
	    - (BST Property) if self._root is None, then
	      all items in self._left are <= self._root, and
	      all items in self._right are >= self._root
	"""
	# Private Instance Attributes:
	#    - _root:
	#        The item stored at the root of this tree, or None if this tree is empty.
	#    - _left:
	#        The left subtree, or None if this tree is empty.
	#    - _right:
	#        The right subtree, or None if this tree is empty.
	_root: Optional[Any]
	_left: Optional[BinarySearchTree]
	_right: Optional[BinarySearchTree]
	
	def __init__(self, root: Optional[Any]) -> None:
		"""Initialize a new BST containing only the given root value.
		
		If <root> is None, initialize an empty BST.
		"""
		if root is None:
			self._root = None
			self._left = None
			self._right = None
		else:
			self._root = root
			self._left = BinarySearchTree(None)  # self._left is an empty BST
			self._right = BinarySearchTree(None)  # self._right is an empty BST
	
	def is_empty(self) -> bool:
	    """Return whether this BST is empty.
	    """
	    return self._root is None
```

### Searching a binary search tree

- Trees vs. BSTs
	- *Trees*: Compare `item` against the root, then recursive search in each of the subtrees until either the item is found, or all the subtrees have been searched.
		- `item` not in tree → every item is searched
	- *BSTs*: Initial comparision to the root tells which subtree to check.
		- e.g., if we search for `111` in a BST, we check the root of BST, which is 50. Since `111 > 50`, we know that if it does appear in BST, it must appear in the *right* subtree → only recurse on right subtree
	- **In the recursive step for `BinarySearchTree.__contains__`, only one recursive call needs to be made, rather than two**

###### First implementation.

```python
class BinarySearchTree:
	...
	
	def __contains__(self, item: Any) -> bool:
		"""Return whether <item> is in this BST.
		"""
		if self.is_empty():
			return False
		else:
			if item == self._root:
				return True
			elif item < self._root:
				return self._left.__contains__(item)
			else:
				return self._right.__contains__(item)
```

###### A more concise implementation.

```python
class BinarySearchTree:
    def __contains__(self, item: Any) -> bool:
        """Return whether <item> is in this BST.
        """
        if self.is_empty():
            return False
        elif item == self._root:
            return True
        elif item < self._root:
            return self._left.__contains__(item)
        else:
            return self._right.__contains__(item)
```