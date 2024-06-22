---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/csc-111/course-notes/some-properties-of-graphs/","created":"2024-02-25T16:32:33.287-08:00","updated":"2024-02-26T08:33:48.992-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/CSC111/_CSC111 Notes\|7]]
Course: #CSC111
Covered in: [[900 Archive/UofT/Y1/CSC111/Unit 4 - Graphs\|Unit 4 - Graphs]]
Date: 2024-02-25

---
# The maximum number of edges in a graph

### Proof of the maximum possible number of edges a graph can have. #example

Prove that for all graphs $G = (V, E)$, $|E| \leq \frac{|V|(|V| - 1)}{2}$.

*Translation.*
- Statement universally quantifies $G$
	- How we declare a graph variable look syntactically different (“$G = (V, E)$“) than declaring a numeric variable
- Adopt an ==assumed domain for “set of all graphs”== for the rest of this chapter rather than introducing a “set of all graphs” explicitly

$$\forall G = (V, E), |E| \leq \frac{|V|(|V| - 1)}{2}$$
Note that $G$ is not an arbitrary number, but an arbitrary *graph*.

*Discussion.*
- We can use *induction* to prove statements about graphs
	- Need to introduce a new variable that is a natural number
	- Statement we are proving has the form $\forall n \in \mathbb{N}, P(n)$
	- Typical strategy:
		- Introduce a variable representing the ==number of vertices==
			- i.e., $n = |V|$

WTS $$\forall n \in \mathbb{N}, \forall G = (V, E), |V| = n \implies |E| \leq \frac{n(n-1)}{2}$$
*Proof.*
We will prove this statement by induction on $n$.
$$P(n) : \forall G = (V, E), |V| = n \implies |E| \leq \frac{n(n-1)}{2}$$
$P(n)$ means “For all graphs $G$, if $G$ has $n$ vertices, then it has at most $\frac{n(n-1)}{2}$ edges.”

**Base case.** Let $n$ = 0. We need to prove $P(0)$.
Let $G = (V, E)$ be an arbitrary graph.
Assume that $|V| = 0$.
- In this case, the graph has no vertices, and so cannot have any edges.
- Therefore, $|E| = 0$,
	- and satisfies the inequality $|E| \leq \frac{0(0-1)}{2}$

**Induction step.** Let $k \in \mathbb{N}$ and assume $P(k)$ holds: every graph with $k$ vertices has at most $\frac{k(k-1)}{2}$ edges. We need to prove $P(k+1)$.

Let $G = (V, E)$ be an arbitrary graph.
Assume that $|V| = k + 1$. We want to prove that $|E| \leq \frac{(k+1)k}{2}$.

Let $v$ be a vertex in $V$. We can divide the edges of $G$ into two groups:
- $E_{1}$, the set of edges that contain $v$
	- Since there are $k$ other vertices in $V$ that $v$ could be adjacent to, $|E_{1}| \leq k$
- $E_{2}$, the set of edges that do not contain $v$.
	- To count these edges, suppose we remove $v$ from the graph $G$ to obtain a new graph $G'$.
	- Then $E_{2}$ is exactly the set of edges of $G'$.
	- Since $G'$ has one fewer vertex than $G$, we know $G'$ has $k$ vertices
	- By the *induction hypothesis*, we know that $G'$ has at most $\frac{k(k-1)}{2}$ edges, so $|E_{2}| \leq \frac{k(k-1)}{2}$.

Putting this together, we have: 
$$\begin{align*} |E| &= |E_{1}| + |E_{2}| \\ &\leq k + \frac{k(k-1)}{2} \\ &= \frac{2k + k(k-1)}{2} \\ &= \frac{k(2+k-1)}{2} \\ &= \frac{(k + 1) k}{2} \end{align*}$$
<div class="right-align"> <span class="math display">\blacksquare</span> </div>

# The transitivity of connectedness
### Proof of the transitivity of connectedness. #example 
Recall that we say two vertices in a graph are *connected* when there exists a path between them. One extremely useful property of connectedness is the fact that ==if two vertices in a graph are both connected to a third vertex, then they are also connected to each other==.

**Example.** Let $G = (V, E)$ be a graph. Let $u, v, w \in V$. If $v$ is connected to both $u$ and $w$, then $u$ and $w$ are connected.
- Note: Vertex-connectedness is a transitive property.

*Translation.*
We will use the predicate $Conn(G, u, v)$ to mean that “$u$ and $v$ are connected vertices in $G$”.
$$\forall G = (V, E), \forall u, v, w \in V, (Conn(G, u, v) \; \land \; Conn(G, v, w)) \implies Conn (G, u, w)$$
*Discussion.*
- We can assume that there is a path between $u$ and $v$, and between $v$ and $w$.
- Need to prove that there is a path between $u$ and $w$
- Create a path between $u$ and $w$ by joining the path between $u$ and $v$ and the one between $v$ and $w$
- One problem:
	- $v$ and $w$ might contain some vertices in common
	- Paths are not allowed to have duplicate vertices
- Fix:
	- Find the first point of intersection between the paths, and join them at that vertex instead

*Proof.*
Let $G = (V, E)$ be a graph, and $u, v, w \in V$.
Assume that $u$ and $v$ are connected, and $v$ and $w$ are connected.
We want to prove that $u$ and $w$ are connected.

Let $P_{1}$ be a path between $u$ and $v$. Let $P_{2}$ be a path between $v$ and $w$. (By definition of connectedness, both these paths must exist.)

*Handling multiple shared vertices:*
Let $S \subseteq V$ be the set of all vertices which appear on both $P_{1}$ and $P_{2}$.
- Note that this set is not empty because $v \in S$.

Let $v'$ be the vertex in $S$ which is *closest* to $u$ in $P_{1}$. This means that *no* vertex in $P_{1}$ between $u$ and $v'$ is in $S$, i.e., is also in $P_{2}$.

Let $P_{3}$ be the path formed by taking the vertices in $P_{1}$ from $u$ to $v'$, then the vertices from $v'$ to $w$. Then $P_{3}$ has no duplicate vertices, and is indeed a path between $u$ and $w$. By the definition of connectedness, this means that $u$ and $w$ are connected.
<div class="right-align"> <span class="math display">\blacksquare</span> </div>

# Two vertices in $V$ that have the same degree

### Proof that for all graphs $G = (V, E)$, if $|V| \geq 2$, then there exists two vertices in $V$ that have the same degree #example 

$$\forall G = (V, E), |V| \geq 2 \implies \big(\exists v_{1}, v_{2} \in V, d(v_{1}) = d(v_{2}) \big)$$
*Proof.*
Assume for a contradiction that this statement is False, i.e., there exists a graph $G = (V, E)$ such that $|V| \geq 2$ and all of the vertices in $V$ have a different degree.

Let $n = |V|$.
Let $v$ be an arbitrary vertex in $V$.
We know that $d(v) \geq 0$, and because there are $n - 1$ other vertices not equal to $v$ that could be potential neighbours of $v$, $d(v) \leq n - 1$. So every vertex in $V$ has degree between $0$ and $n - 1$, inclusive.

Since there are $n$ different vertices in $V$ and each has a different degree, this means that *every* number in $\{0, 1, \dots, n - 1\}$ must be the degree of some vertex.
- Note that this set has size $n$

In particular, there exists a vertex $v_{1} \in V$ such that $d(v_{1}) = 0$, and another vertex $v_{2} \in V$ such that $d(v_{2}) = n - 1$.

Since $d(v_{1}) = 0$, it is not adjacent to any other vertex, so $\{v_{1}, v_{2}\} \notin E$.
On the other hand, since $d(v_{2}) = n - 1$, it is adjacent to every other vertex, so $\{v_{1}, v_{2}\} \in E$.
So both $\{v_{1}, v_{2}\} \notin E$ and $\{v_{1}, v_{2}\} \in E$ are True, which gives us our contradiction.
<div class="right-align"> <span class="math display">\blacksquare</span> </div>
