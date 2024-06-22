---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/csc-111/course-notes/introduction-to-graphs/","created":"2024-02-25T14:49:38.654-08:00","updated":"2024-03-24T11:57:37.125-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/CSC111/_CSC111 Notes\|7]]
Course: #CSC111
Covered in: [[900 Archive/UofT/Y1/CSC111/Unit 4 - Graphs\|Unit 4 - Graphs]]
Date: 2024-02-25

---

- Why do we need graphs?
	- Representing data in the form of a *network*, consisting of entities and the relationships between them

# Graphs

- Definition of a **graph** #definition 
{ #aea77e}

	- a pair of sets $(V, E)$, which are defined as follows:
		- $V$ is a set of objects
			- Each element of $V$ is called a **vertex** of the graph
			- $V$ itself is called the set of **vertices** of the graph
		- $E$ is a set of pairs of objects from $V$
			- Each pair $\{ v_{1}, v_{2} \}$ is a set consisting of two distinct vertices (i.e., $v_{1}, v_{2} \in V$ and $v_{1} \neq v_{2}$) and is called an **edge** of the graph
			- *Order does not matter* i.e., $\{v_{1}, v_{2}\}$ and $\{v_{2}, v_{1}\}$ represent the same edge
- Conventional notation
	- $G = (V, E)$, where $G$ is the graph itself, $V$ is its vertex set, and $E$ is its edge set

---

- Intuitively, the set of vertices of a graph represents…
	- a collection of objects
- Set of edges of a graph represents…
	- relationships between those objects
- e.g., Facebook:
	- Each Facebook user is a *vertex*
	- Each friendship between two Facebook users is an *edge* between the corresponding vertices

---
## Adjacent, neighbours, and degrees #definition 

Let $G = (V, E)$. Let $v_{1}, v_{2} \in V$.
{ #3c2dbf}


- We say that $v_{1}$ and $v_{2}$ are **adjacent** if and only if there exists an edge between them
	- i.e., $\{v_{1}, v_{2}\} \in E$
- We can also say that $v_{1}$ and $v_2$ are **neighbours** <br><br>

- All the edges are ==bidirectional==
	- Order does not matter
	- Being neighbours is a symmetric relationship<br><br>

Let $G = (V, E)$. Let $v \in V$.
- We say that the **degree** of $v$, denoted $d(v)$, is its number of neighbours i.e., how many edges $v$ is a part of

---
# Paths and connectedness

### Definition of path. #definition 
Let $G = (V, E)$. Let $u, u' \in V$.

- A **path** between $u$ and $u'$ is a sequence of *distinct* vertices $v_{0}, v_{1}, \dots, v_{k} \in V$, which satisfy the following properties:
	1. $v_{0} = u$ and $v_{k} = u'$
		- Endpoints of the path are $u$ and $u'$
	2. Each consecutive pair of vertices are adjacent
		- i.e., $v_{0}$ and $v_{1}$ are adjacent, and so are $v_{1}$ and $v_{2}$, and so on
- We allow $k$ to be 0
	- Path would be single vertex $v_{0}$

#### Key things to remember

1. Distinct vertices means we cannot repeat the same vertex within a path
	- $A \to C \to A$ would *not* be a valid path
2. A single vertex (e.g., $A$) is a valid path of length 0

### Definition of length. #definition 
- The **length** of a path is one less than the number of vertices in the sequence
- Above sequence would have length $k$
- Length of the path is the number of *edges* which are used by this sequence

### Definition of connected. #definition 
- We say that $u$ and $u'$ are **connected** when there exists a path between $u$ and $u'$
	- ==A vertex is always connected to itself==
		- zero-length path
- We say that the graph $G$ is **connected** when for all pairs of vertices $u, v \in V$, $u$ and $v$ are connected.

# Proof that a  graph is not connected. #example 
Consider the graph, 
![|400](https://i.imgur.com/EodF4ef.png).

*Translation.* 
First, translate the statement “this graph is not connected.”
Let $G = (V, E)$ refer to this graph and corresponding vertex and edge sets.
$$\begin{align*} & &&G \text{ is not connected} \\
&\iff &&\neg (G \text{ is connected}) \\
&\iff &&\neg (\forall u, v \in V, u \text{ and } v \text{ are connected}) \\
&\iff && \exists u, v \in V, u \text{ and } v \text{ are not connected} \\
&\iff && \exists u, v \in V, \text{ there is no path between } u \text{ and } v \end{align*}$$
*Proof.*
Let $G = (V, E)$ be the above graph.
Let $u$ and $v$ be the vertices labelled $E$ and $B$, respectively.
We will show that there does not exist a path between $u$ and $v$.

Suppose a contradiction that there exists a path $v_{0}, v_{1}, \dots, v_{k}$ between $u$ and $v$, where $v_{0} = E$. Since $v_{0}$ and $v_1$ must be adjacent, and $C$ is the only vertex adjacent to $E$, we know that $v_1 = C$. Since we know that $v_k = B$, the path cannot be over yet i.e., $k \geq 2$.

By the definition of *path*, we know that $v_{2}$ must be adjacent to $C$, and must be distinct from $E$ and $C$. However, the only vertex that is adjacent to $C$ is $E$, and so $v_{2}$ cannot exist, which gives us our contradiction.
<div class="right-align"> <span class="math display">\blacksquare</span> </div>