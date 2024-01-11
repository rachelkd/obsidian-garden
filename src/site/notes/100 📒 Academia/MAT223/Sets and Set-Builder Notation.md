---
{"dg-publish":true,"dg-path":"academia/MAT223/Sets and Set-Builder Notation.md","permalink":"/academia/mat-223/sets-and-set-builder-notation/","created":"2024-01-10T00:48:24.433-05:00","updated":"2024-01-10T01:21:14.590-05:00"}
---

**Preamble**
Week: 1
Course: #MAT223
Module: [[100 📒 Academia/MAT223/Module Notes/Module 1 - Sets, Vectors, and Notation\|Module 1 - Sets, Vectors, and Notation]]

---
# Sets
- What is a **set**?
	- an unordered collection of distinct objects
- Example of a set
	- $\{1,2,3\}$
- What are **elements**?
	- things in a set
	- can also be called **points**
- How to specify that something is an element of a set
	- $\in$ symbol
		- e.g., $3 \in \{1,2,3\}$
	- Use $\notin$ to specify that something is *not* in a set
		- e.g., $4 \notin \{1,2,3\}$
- What can sets contain?
	- a mixture of objects, including other sets
		- e.g., $\{1,2,a,\{-70, \infty \}, x \}$

# Operations on sets
- What is a **subset**/superset?
	- If the set $A$ contains all the elements that set $B$ does, we call $B$ a subset of $A$
	- We call $A$ a superset of $B$
	- Example of subset/superset:
			$$\begin{align*}
			\{1,2,3\} \subseteq \{1,2,3,4\}\\
			\{1,2,3\} \subseteq \{1,2,3\}
			\end{align*}$$
- What is **set equality**?
	- $A = B \iff (A \subseteq B \text{ and } B \subseteq A)$
- Example of using the definition of set equality for proofs:
	- Let $A$ be the set of numbers that can be expressed as $2n$ for some whole number $n$. Let $B$ be the set of numbers that can be expressed as $m + 1$ where $m$ is an odd whole number.
	- We will show $A = B$.
	- First, let us show $A \subseteq B$.
		- If $x \in A$, then $x = 2n$ for some whole number $n$. Therefore,
		  $$x = 2n = 2(n-1) + 1 + 1 = m + 1$$
		  where $m = 2(n-1) + 1$ is, by definition, an odd number. Thus, $x \in B$, which proves $A \subset B$.
	- Now, we will show $B \subseteq A$.
		- Let $x \in B$.
		- By definition, $x = m+1$ for some odd $m$. By the definition of oddness, $m = 2k+1$ for some whole number $k$. Thus,
			  $$\begin{align*}
			  x = m + 1 &= (2k+1) + 1 = 2k+2 \\
			  &= 2(k+1) = 2n \end{align*}$$

# Set-builder notation

- What is “$Y$ is the set of $a$ in $X$ such that some rule involving $a$ is true” in set-builder notation?
         $$Y = \{a \in X : \text{some rule involving } a \}$$
	- “$\mid$” is equivalent to “$:$”

# Operations on two sets
Let $X$ and $Y$ be sets.
- What is a **set union**?
	- $X \cup Y = \{ a : a \in X \text{ or } a \in Y \}$
- What is a **set intersection**?
	- $X \cap Y = \{ a : a \in X \text{ and } a \in Y \}$
