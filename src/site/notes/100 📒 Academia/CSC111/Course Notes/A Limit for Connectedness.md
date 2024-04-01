---
{"dg-publish":true,"dg-path":"academia/CSC111/Course Notes/A Limit for Connectedness.md","permalink":"/academia/csc-111/course-notes/a-limit-for-connectedness/","created":"2024-03-01T20:41:31.712-05:00","updated":"2024-03-24T19:59:23.561-04:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|7]]
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 4 - Graphs\|Unit 4 - Graphs]]
Date: 2024-03-01

---
# Connectedness

- In [[100 📒 Academia/CSC111/Course Notes/Connectivity and Recursive Graph Traversal\|17.4 Connectivity and Recursive Graph Traversal]], we studied an *algorithm* for checking whether two vertices in a graph are *connected*.
	- That is, whether *every* pair of vertices in the graph is connected
	- However, running such an algorithm might not be necessary for every graph
- Connectivity is based on paths between vertices → built from edges
	- We can “force” a graph to be connected by adding more edges to it
	- A complete graph of $n$ vertices with $\frac{n(n-1)}{2}$ edges is guaranteed to be connected
		- All vertices are adjacent to each other
	- A graph with $n \ge 2$ vertices and 0 edges is guaranteed to *not* be connected

> [!question] How many edges does it take to ensure that a graph is connected?

# Formulating the problem

- Translation into predicate logic:
	- $$\forall n \in \mathbb{Z}^{+}, \forall G = (V, E), |V| = n \; \land \;|E| \ge \_\_\_\_ \implies G \text{ is connected}$$
	- We could fill the blank with $\frac{n(n-1)}{2}$ since that would force the graph $G$ to be complete, but
	- We want to find the ==smallest expression== in terms of $n$ that makes the statement True

## A graph with many edges, but has one vertex with no edges at all

Let $n \in \mathbb{Z}^{+}$. Assume $n > 1$.
Then there exists a graph $G = (V, E)$, such that $|V| = n$ and $|E| = \frac{(n-1)(n-2)}{2}$, and $G$ is not connected.


##### Translation and discussion.
$$\forall n \in \mathbb{Z}^{+}, n > 1 \implies \Bigg(\exists G = (V, E), |V| = n \; \land \; |E| = \frac{(n-1)(n-2)}{2} \; \land \; G \text { is not connected} \Bigg)$$

The expression $\frac{(n-1)(n-2)}{2}$ looks suspiciously like the maximum number of edges on $n-1$ vertices.

##### Proof.
Let $n \in \mathbb{Z}^{+}$. Assume $n > 1$.
Let $G = (V, E)$ be the graph defined as follows:
- $V = \{v_{1}, v_{2}, \dots, v_{n}\}$
- $E = \{ \{v_{i}, v_{j}\} \; | \; i, j \in \{1, \dots, n - 1\} \text{ and } i < j\}$
	- That is, $E$ consists of all edges between the first $n - 1$ vertices, and has no edges connected to $v_{n}$

WTS:
1. $|V| = n$
2. $|E| = \frac{(n-1)(n-2)}{2}$
3. $G$ is not connected

For (1), we have explicitly labelled the $n$ vertices in $V$, and so it is clear that $|V| = n$.
For (2)., we have chosen all possible pairs of vertices from $\{v_{1}, v_{2}, \dots, v_{n-1}\}$ for the edges. There are exactly $\frac{(n-1)(n-2)}{2}$ edges.
For (3), because $v_{n}$ is not adjacent to any other vertex, it cannot be connected to any other vertex. So $G$ is not connected.
<div class="right-align"> <span class="math display">\blacksquare</span> </div>

- We have shown that a graph with a fairly large number of edges can still not be connected
- Note that $\frac{(n-1)(n-2)}{2} = \frac{n(n-1)}{2} - (n-1)$.
	- That is, there is a graph that is missing only $n - 1$ edges from the set of all possible edges
	- Still not connected, though

> [!question] Can we go higher still? Is it possible for a graph on $n$ vertices to have more than $\frac{(n-1)(n-2)}{2}$ edges and still not be connected?
> - Or is the best possible expression from our original question indeed $\frac{(n-1)(n-2)}{2} + 1$?
> 	- The smallest expression that ensures that a graph is connected

# Filling in the blank

Let $n \in \mathbb{Z}^{+}$. For all graphs $G = (V, E)$, if $|V| = n$ and $|E| \ge \frac{(n-1)(n-2)}{2} + 1$, then $G$ is connected.

$$\forall n \in \mathbb{Z}^{+}, \forall G = (V, E), \Bigg(|V| = n \; \land \;|E| \ge \frac{(n-1)(n-2)}{2} + 1 \Bigg)\implies G \text { is connected}$$
*Discussion.*
- We cannot base our proof on the previous example:
	- If we start with a graph that has $n - 1$ of its vertices all adjacent to each other, then add one more edge to the remaining vertex, the new graph is certainly connected
	- However, this line of thinking relies on a particular starting point for the structure of $G$
		- Cannot assume anything about the structure (other than the number of vertices and edges)
- More promising: Trying to take a graph which satisfies the constraints on its number of edges and vertices, then remove a vertex to make the graph smaller and argue two things:
	1. The smaller graph is connected
	2. The vertex we removed is adjacent to at least one vertex in the smaller graph
- Idea of “removing a vertex” from a graph to make the problem smaller and simpler is reminiscent of one of our proofs in [[100 📒 Academia/CSC111/Course Notes/Some Properties of Graphs\|Some Properties of Graphs]]
	- *Proof by induction*

*Proof.*
We will proceed by induction on $n$.
$$P(n) : \forall G = (V, E), \Bigg( |V| = n \; \land \; |E| \ge \frac{(n-1)(n-2)}{2} + 1 \Bigg) \implies G \text{ is connected}$$
$P(n)$ says that every graph $G$ with $n$ vertices at least $\frac{(n-1)(n-2)}{2} + 1$ edges must be connected. We want to prove that $\forall n \in \mathbb{Z}^{+}, P(n)$ using induction.

**Base case.** Let $n = 1$.
$$P(1) : \forall G = (V, E), (|V| = 1 \; \land \; |E| \ge 1) \implies G \text{ is connected}$$
This statement is vacuously true: no graph exists that has only one vertex and at least one edge, since an edge requires two vertices.

**Inductive step.** Let $k \in \mathbb{Z}^{+}$, and assume that $P(k)$ holds. We need to prove that $P(k+1)$ also holds:
$$P(k + 1) : \forall G = (V, E), \bigg( |V| = k + 1 \; \land \; |E| \ge \frac{k(k-1)}{2} + 1 \bigg) \implies G \text{ is connected}$$
Let $G = (V, E)$, and assume that $|V| = k + 1$ and $|E| \ge \frac{k(k-1)}{2} + 1$. We now need to prove that $G$ is connected. We will split up this proof into two cases.

*Case 1.*
Assume $|E| = \frac{(k+1)k}{2}$.
- i.e., $G$ has all possible edges

In this case, $G$ is certainly connected.

*Case 2.*
Assume $|E| < \frac{(k+1)k}{2}$.

- WTS: $G$ has a vertex in $G$ with between one and $k - 1$ neighbours, inclusive.
	- i.e., There exists a vertex that has at least one neighbour, but not the maximum number of neighbours (since there are $k + 1$ vertices total)

- Since $G$ has fewer than the max. number of possible edges, there exists a vertex pair $(u, v)$ which is *not* an edge
	- Both $u$ and $v$ have at most $k - 1$ neighbours, since there are $k - 1$ vertices in $G$ other than these two
	- Show that both $u$ and $v$ have at least one neighbour as an exercise!
- Let $v$ be a vertex which has at most $k - 1$ neighbours. Let $G' = (V', E')$ be the graph which is formed by taking $G$ and removing $v$ from $V$ and all edges in $E$ which use $v$.
	- Then, $|V'| = |V| - 1 = k$,
		- i.e., we’ve decreased the number of vertices by one
	- We want to do induction on the number of vertices
- We need to verify that $|E| \ge \frac{(k-1)(k-2)}{2} + 1$ to use $P(k)$ since $P(k)$ has an implication
	- $$\begin{align*} |E'| &= |E| - \text{ number of removed edges} \\ &\ge |E| - (k - 1) && \text{(at most } k - 1 \text{ edges removed)} \\ &\ge \frac{k(k-1)}{2} + 1 - (k-1) && \text{(assumption on } |E| \text{)} \\ &= \frac{(k-2)(k-1)}{2} + 1 \end{align*}$$
- Now, since $|V'| = k$ and $|E'| \ge \frac{(k-2)(k-1)}{2} + 1$, we conclude that $G'$ is connected
- Now, let us use the fact that $G'$ is connected to show that $G$ is also connected
	- First, any two vertices not equal to $v$ (the vertex we removed in $G'$) are connected in $G$ because they are connected in $G'$.
	- Recall our claim: $v$ has at least one neighbour, so call it $w \in G'$.
	- Since $G'$ is connected, $w$ is connected to every other vertex in $G$
	- By the *transitivity of connectedness* (proven in [[100 📒 Academia/CSC111/Course Notes/Some Properties of Graphs\|17.2]]), we know that $v$ must be connected to all these other vertices

<div class="right-align"> <span class="math display">\blacksquare</span> </div>
