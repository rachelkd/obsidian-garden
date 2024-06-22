---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/csc-111/lecture-notes/lecture-9-binary-search-trees/","created":"2024-02-10T16:43:02.860-08:00","updated":"2024-02-14T15:01:26.215-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/CSC111/_CSC111 Notes\|5]]
Course: #CSC111
Covered in: [[900 Archive/UofT/Y1/CSC111/Unit 3 - Trees\|Unit 3 - Trees]]
Date: 2024-02-10

---
### Review from [[900 Archive/UofT/Y1/CSC111/Course Notes/Introduction to Binary Search Trees\|Introduction to Binary Search Trees]]. 

#### Definitions #definition 

- **Binary tree**
	- each item has at most two subtrees
- **Binary search trees**
	- Add ordering conditions to a binary tree:
		- values are comparable
		- values in left subtree are less than the root’s value
		- values in right subtree are more than the root’s value
	- A “sorted” tree
		- Every item is $\geq$ all items in its left subtree, and
		- $\leq$ all items in its right subtree
	- ![|center|300](https://i.imgur.com/sbGaJpz.png)

---
#### Searching in BST 

Recall that with normal trees, the worst case for searching is $n$ nodes vs. binary search trees…

![|center|500](https://i.imgur.com/mRwGJUU.png)


- Which nodes would we visit to find out the following:
	- If value 5 is present:
		- *Disregard the right subtree*
		- Go to the left subtree
		- Then, 5 > 4, so go to right subtree
		- 5 < 7 so go the left subtree and then you’ve found 5
		- Looked at 4 TreeNodes
	- If value 13 is present:
		- 13 > 9 → go to right
		- 13 < 15 → go to left subtree
	- If value 12 is present:
		- 12 > 9 → go to right subtree
		- 12 < 13 → go to left subtree
		- item is not 12, and no more subtrees, so 12 is not present

---
#### More structure $\implies$ more efficiency

##### BST `__contains__` #example 

```python
	def __contains__(self, item: Any) -> bool:
		if self.is_empty():
			return False
		elif item == self._root:
			return True
		elif item < self._root:
			return self._left.__contains__(item)
		else:
			return self._right.__contains__(item)
```

#### But, not always more efficient!

##### Return all of the items in the BST in sorted order. #example 

From Prep 5:

```python

	def items(self) -> list:
		"""Return all of the items in the BST in sorted order.
		
		Do not remove duplicates.
		"""
		if self.is_empty():
			return []
		else:
			return self._left.items() + [self._root] + self._right.items()
```

---
#### Our implementation

Instead of having a general list of subtrees like we did for our [[900 Archive/UofT/Y1/CSC111/Course Notes/Introduction to Trees#A tree implementation\|Tree implementation]], we now have explicit attributes for left subtree and right subtree:

```python
	# === Private Attributes ===
	# The item stored at the root of the tree, or None if the tree is empty
	_root: Optional[Any]
	# The left subtree, or None if the tree is empty.
	_left: Optional[BinarySearchTree]
	# The right subtree, or None if the tree is empty.
	_right: Optional[BinarySearchTree]
```

Like our Tree implementation, we ==do not allow the value `None` to be in the BinarySearchTree== unless it is part of a valid empty tree representation.

- We represent an empty BST with the following:
	- `self._root = None`
	- `self._left = None`
	- `self._right = None`

<br>


- Note the representation invariants:
	- 
	  ```python
	  # === Representation Invariants ===
	  # - If self._root is None, then so are self._left and self._right
	  # This represents an empty BST
	  # - If self._root is not None, then self._left and self._right are
	  #   BinarySearchTrees.
		```
	- The only time `self._left` and `self._right` are None is when `self._root` is None (representing an empty tree)
	- → If `self.is_empty()` is False, we know that `self._left` and `self._right` are `BinarySearchTree`s and are NOT None.
```python
class BinarySearchTree:
	"""Binary Search Tree class.
	
	Representation Invariants:
		- (self._root is None) == (self._left is None)
		- (self._root is None) == (self._right is None)
		- (BST Property) if self._root is not None, then
		  all items in self._left are <= self._root, and
		  all items in self._right are >= self._root
	Note that duplicates of the root can appear in *either* the left or right subtrees.
	"""
```

---
##### How do we represent a leaf?
- `self._root` will have its value, and
- `self._left` and `self._right` will each be an empty `BinarySearchTree`
- Even if a root has no children, we represent those children as empty BinarySearchTrees
---
##### Representation invariants are key!
- If you know that a BST is not empty, you *never* need to check if `self._left` or `self._right` are None
- You can call methods on them without an if-statement “guard”

# Insertion in BST

```python
class BinarySearchTree:
	def insert(self, item: Any) -> None:
		"""Insert <item> into this tree.

        Do not change positions of any other values.

        >>> bst = BinarySearchTree(10)
        >>> bst.insert(3)
        >>> bst.insert(20)
        >>> bst._root
        10
        >>> bst._left._root
        3
        >>> bst._right._root
        20
        """
		if self.is_empty():
			self._root = item
			self._left = BinarySearchTree(None)
			self._right = BinarySearchTree(None)
		elif item <= self._root:
			self._left.insert(item)
		else:
			self._right.insert(item)
```

# Deletion from BST

### Delete operation
- Check out the Tree deletion worksheet from Lecture 7/8
- Input: 
	- an item that we wish to delete from the BST (if it exists!)
- Output:
	- If item found → remove the first occurrence of this item from the BST
		- This node gets “disconnected”/“extracted”/“removed” from the BST
	- If item not found → do nothing

### Deletion algorithm
- Locate the item to delete by traversing the tree
- Say that `self` is the current subtree being inspected
	- What to do if the BST is empty (`self._root` is None)?
	- What if item to delete is *less* than the value `self._root`?
	- What if item to delete is *more* than the value `self._root`?
	- What if item to delete *equals* the value `self._root`?

### Deletion implementation #example 

```python
class BinarySearchTree:
    def remove(self, item: Any) -> None:
        """Remove *one* occurrence of <item> from this BST.

        Do nothing if <item> is not in the BST.
        """
        if self.is_empty():
            pass
        elif item == self._root:
            self._delete_root()
        elif item < self._root:
            self._left.remove(item)
        else:
            self._right.remove(item)


    def _delete_root(self) -> None:
        """Remove the root of this BST.

        Preconditions:
            - not self.is_empty()
        """
        # Case 1: This BST is a leaf.
        if self._left.is_empty() and self._right.is_empty():
	        self._root = None
	        self._left = None
	        self._right = None
	        # Question to consider:
	        # Will the following line work?
	        # self = BinarySearchTree(None)
	        # No, because this reassigns self and does not mutate
	        # To mutate, you need to access its instance attributes
        
        # Case 2a: empty left subtree, non-empty right subtree
        elif self._left.is_empty(): # and not self._right.is_empty() -- not needed, since that would have been case 1
            # "Promote" the right subtree
            self._root, self._left, self._right = self._right._root, self._right._left, self._right._right

            # Version 2
            # to_promote = self._right
            # self._root, self._left, self._right = to_promote._root, to_promote._left, to_promote._right

            # Version 3 (INCORRECT! This does NOT mutate the tree, self is just a local variable!)
            # self = self._right

        # Case 2b: non-empty left subtree, empty right subtree
        elif not self._left.is_empty() and self._right.is_empty():
            self._root, self._left, self._right = self._left._root, self._left._left, self._left._right

        # Homework - Think about this: can we combine the code for case 1 and either case 2a or 2b?

        # Case 3: non-empty left and right subtrees
        else:
            # Replace self._root with the maximum of the left subtree
            self._root = self._left._extract_max()
	
	def _extract_max(self) -> Any:
        """Remove and return the largest value in this BST.

        Precondition: this BST is not empty.
        """
        if self._right.is_empty():
            # Remember the root value before we remove it.
            max_value = self._root
            # Remove that root value.
            # This code works properly even if the left subtree is empty!
            # But only because we represent that with an instance of an empty
            # BST.  If self._left was merely None, do you see what would go
            # wrong?

            # if self._left.is_empty(): -- this is not needed, it's already handled since for empty self._left,
            #                               the values of self._left._root, self._left._left, self._left._right would
            #                               all be None anyway!
            #     self._root, self._left, self._right = None, None, None

            self._root, self._left, self._right = \
                self._left._root, self._left._left, self._left._right

            return max_value
        else:
            # Know: right child is not empty.
            # The max in me is somewhere in the right!
            return self._right._extract_max()
```

