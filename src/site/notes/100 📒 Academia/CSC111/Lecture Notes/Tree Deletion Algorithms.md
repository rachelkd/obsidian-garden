---
{"dg-publish":true,"dg-path":"academia/CSC111/Lecture Notes/Tree Deletion Algorithms.md","permalink":"/academia/csc-111/lecture-notes/tree-deletion-algorithms/","created":"2024-02-04T00:10:14.882-05:00","updated":"2024-04-17T22:37:50.276-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|4]]
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 3 - Trees\|Unit 3 - Trees]]
Date: 2024-02-04

---
# Alternative implementation

```python
class TreeNode:
	"""A node in a recursive tree data structure.

	Representation Invariants:
		- self._item is not none or self._children == []
	"""
	# Private Instance Attributes:
	#    - _item:
	#        The item stored in this node, or None if the tree that
	#        has this node as its root is empty.
	#    - _children: 
	#        The list of children of this tree. This attribute is empty
	#        when self._item is None (representing an empty tree with this node
	#        as its root).
	#        However, this attribute may be empty when self._item is not None,
	#        represents a node consisting of no children (a leaf node).
	_item: Optional[Any]
	_children: list[TreeNode]
```
*Exact same implementation as [[100 📒 Academia/CSC111/Course Notes/Introduction to Trees\|Introduction to Trees]]*.

# Value-based deletion

### A template

```python
	def remove(self, item: Any) -> bool:
		"""Delete *one* occurrence of the given item from this tree.
		
		Do nothing if the item is not in this tree.
		
		Return whether the given item was deleted.
		"""
		
```

### A start of an implementation

###### Recall `Tree.__contains__` from Prep 4:
```python
	def __contains__(self, item: Any) -> bool:
		"""Return whether the given item is in this tree."""
		if self.is_empty():
			return False
		elif self._item == item:
			return True
		else:
			for subtree in self._children:
				if subtree.__contains__(item):
					return True
			
			return False
```
*Other than the method name, only one part of this code needs to change to implement `Tree.remove`.*


###### Adjusting existing method to `TreeNode.remove`:
```python
	def remove(self, item: Any) -> bool:
		"""Delete *one* occurrence of the given item from this tree.
		
		Do nothing if the item is not in this tree.
		
		Return whether the given item was deleted.
		"""
		if self.is_empty():
			return False
		elif self._item == item:
			self._delete_item()
			return True
		else:
			for subtree in self._children:
				if subtree.remove(item):
					return True
			
			return False
```

###### Our goal is to complete this function by implementing the helper `TreeNode_delete_item`:

```python
class TreeNode:
	def _delete_item(self) -> None:
		"""Remove the root item from this tree.

		Preconditions:
			- not self.is_empty()
		"""
```

- When can we and can we not set `self._item` attribute to `None`?
	- When tree is a leaf → set `self._item` to `None`
	- When tree is not leaf (i.e., has subtrees/children) → cannot set to `None`

## Two strategies for replacing `self._item` with a new value from somewhere else

### Strategy 1: Promote a subtree

**Idea:** To delete root, take rightmost subtree $t_{1}$ → Make root of $t_{1}$ the new root of the full tree. Make subtrees of $t_{1}$ become subtrees of the full tree.

1. Remove last subtree from `self._children`
2. Update `self._item`
3. Add old subtree’s children to `self._children`

###### Implementation of `TreeNode._delete_item1`

```python
class TreeNode:
	def _delete_item1(self) -> None:
		"""Remove the root item of this tree using Strategy 1.
		
		Preconditions:
			- not self.is_empty()
		"""
		if not self._children:  # Check if it is a single-value TreeNode
			self._item = None
		else:
			last = self._children.pop()
			self._item = last._item
			self._children.extend(last._children)
```

### Strategy 2: Replace the root with a leaf

**Idea:** Find the leftmost *[[100 📒 Academia/CSC111/Course Notes/Introduction to Trees#^6275d3\|leaf]]* of the tree. Move leaf so that it becomes new root value. No other values in tree should move.

###### Implementation of `TreeNode._delete_item2`.

```python
def TreeNode:
	def _delete_item2(self) -> None:
		"""Remove the root item of this tree using Strategy 2.
		
		Preconditions:
			- not self.is_empty()
		"""
		if not self.is_empty():
			self._item = None
		else:
			self._item = self._leftmost_leaf()
	
	def _extract_leaf(self) -> Any:
		"""Remove and return the leftmost leaf in this tree.
		
		Note: This is a helper method for _delete_item2
		
		Preconditions:
			- not self.is_empty()
		"""
		if not self._children: ## This is a leaf!
			item = self._item
			self._item = None
			return item
		else:
			left = self._children[0]
			return left._extract_leaf()
```

# The problem of empty trees

Suppose we call:
```python
>>> t = Tree(10, [Tree(1, []), Tree(2, []), Tree(3, [])])
>>> t.remove(1)
True
>>> t.remove(2)
True
>>> t.remove(3)
True
```

- Problem: 
	- We are left with three empty subtrees in `t`.
- Hidden assumption:
	- `self._subtrees` does not contain any empty trees


## Design decision

- Should a tree’s `_subtrees` attribute be allowed to contain empty subtrees?
	- If no, we need to:
		1. Document this property as a representation invariant
		2. Modify `Tree.remove` to forbid this

```python
class Tree:
	"""...
	
	Representation Invariants:
		- self._item is not None or self._children == []
		- a;;(not subtree.is_empty() for subtree in self._children)
	"""
```

```python
	def remove(self, item: Any) -> bool:
		"""Delete *one* occurrence of the given item from this tree.
		
		Do nothing if the item is not in this tree.
		
		Return whether the given item was deleted.
		"""
		if self.is_empty():
			return False
		elif self._item == item:
			self._delete_item()
			return True
		else:
			for subtree in self._children:
				if subtree.remove(item):
					if subtree.is_empty():
						# Don't want empty tree in self._children
						self._children.remove(subtree)  # List method
					return True
			
			return False
```

```python
def TreeNode:
	def _delete_item2(self) -> None:
		"""Remove the root item of this tree using Strategy 2.
		
		Preconditions:
			- not self.is_empty()
		"""
		if not self.is_empty():
			self._item = None
		else:
			self._item = self._leftmost_leaf()
	
	def _extract_leaf(self) -> Any:
		"""Remove and return the leftmost leaf in this tree.
		
		Note: This is a helper method for _delete_item2
		
		Preconditions:
			- not self.is_empty()
		"""
		if not self._children: ## This is a leaf!
			item = self._item
			self._item = None
			return item
		else:
			left = self._children[0]
			leftmost_value = left._extract_leaf()
			# Remove empty TreeNode from this TreeNode's children
			if left.is_empty():
				self._children.remove(left)
			return leftmost_value
```