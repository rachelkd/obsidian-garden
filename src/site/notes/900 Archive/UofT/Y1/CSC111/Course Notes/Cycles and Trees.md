---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/csc-111/course-notes/cycles-and-trees/","created":"2024-03-04T09:28:08.298-08:00","updated":"2024-03-05T12:22:26.868-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/CSC111/_CSC111 Notes\|8]]
Course: #CSC111
Covered in: [[900 Archive/UofT/Y1/CSC111/Unit 4 - Graphs\|Unit 4 - Graphs]]
Date: 2024-03-04

---
> [!info] In this section, we will use Graph properties to develop new algorithms for solving problems

# A “lower bound” for connectivity

**How many *edges* (in terms of $n$) must this graph have in order to be connected?**
- i.e., What is the *minimum* number of edges required in a connected graph?, or
- How many edges are *necessary* for a graph to be connected?

![](https://i.imgur.com/ZH42wML.png)

Suppose we have a graph with $n$ vertices which is just a path (shown above).
- This has $n - 1$ edges
- If you remove any edge, the resulting graph will be disconnected
	- Prove that a graph with $|E| < n-1$ must be disconnected

![|400](https://i.imgur.com/gUoYOo8.png)

The above graph is not a path, but removing any edge from this graph disconnects it as well.
- Note that $|E| = |V| - 1$

> [!seealso] Any connected graph $G = (V, E)$ must have $|E| \ge |V| - 1$
> - Contrapositive:
> 	- If a graph has fewer than $|V| - 1$ edges, it cannot be connected.


# Cycles

> [!important] Definition of cycle. #definition 
> Let $G = (V, E)$ be a graph.
> - A **cycle** in $G$ is a sequence of vertices $v_{0}, \dots, v_{k}$ satisfying the following conditions:
> 	1. $k \ge 3$
> 	2. $v_{0} = v_{k}$, and all other vertices are distinct from each other and $v_{0}$
> 	3. Each consecutive pair of vertices is adjacent
{ #992153}


- i.e., a cycle is ==like a path==, except it starts and ends at the same vertex
	- Length of a cycle is the # of edges used by the sequence
	- Also the number of distinct vertices in the sequence
	- Sequence in definition has length $k$

## Motivation (cycles).
- Cycles are a form of *connected redundancy* in a graph
- If one edge is removed, the result is a path
- Cycle’s vertices are still connected to each other

## Prove that this property holds when this cycle is part of a larger graph

Let $G = (V, E)$ be a graph and $e \in E$. If $G$ is connected and $e$ is in a cycle of $G$, then the graph obtained by removing $e$ from $G$ is still connected.

We will use the notation $G - e$ to represent the graph obtained by removing edge $e$ from $G$.
$$\forall G = (V, E), \forall e \in E, (G \text{ is connected} \; \land \; e \text{ is in a cycle of } G) \implies G - e \text{ is connected}$$
- It seems like we should be able to make an argument based on the transitivity of connectedness
	- If we remove edge $\{u, v\}$ from the cycle, then we already know that $u$ and $v$ are still connected, so all the other vertices should still be connected

*Proof.*
Let $G = (V, E)$ be a graph, and $e \in E$ be an edge in the graph.
Assume $G$ is connected and that $e$ is in a cycle. Let $G' = (V, E \setminus \{e\})$ be the graph formed from $G$ by removing edge $e$.

We want to prove that $G'$ is also connected (i.e., any two vertices in $V$ are connected in $G'$).

Let $w_{1}, w_{2} \in V$. By our assumption, we know that $w_{1}$ and $w_{2}$ are connected in $G$.
Let $P$ be a path between $w_{1}$ and $w_{2}$ in $G$. Such a path exists by the [[900 Archive/UofT/Y1/CSC111/Course Notes/Introduction to Graphs\|definition of connectedness]].

- We divide our proof into two cases:
	- One where $P$ uses the edge $e$, and
	- Another where it does not

**Case 1:** $P$ does not contain the edge $e$.
- Then, $P$ is a path in $G'$ as well

![|300](https://i.imgur.com/PATNNDL.png)


**Case 2:** $P$ contains the edge $e$.

![|300](https://i.imgur.com/NR5VMrc.png)


- Let $u$ be the endpoint of $e$ which is closer to $w_{1}$ on the path $P$
- Let $v$ be the other endpoint of $e$
- Then, we can divide the path $P$ into three parts
	- Let $P_{1}$ be the part from $w_{1}$ to $u$
	- Let $P_{2}$ be the part from $v$ to $w_{2}$
- Since $P_{1}$ and $P_2$ cannot use the edge $e = \{u, v\}$ (because paths are not allowed to have duplicates), they must be paths in $G'$ as well
- So, $w_1$ is connected to $u$ in $G'$, and $w_2$ is connected to $v$ in $G'$.
- We also know that $u$ and $v$ are connected in $G'$ (since they were apart of the cycle)
- By the transitivity of connectedness, $w_{1}$ and $w_2$ are connected in $G'$

<div class="right-align"> <span class="math display">\blacksquare</span> </div>

