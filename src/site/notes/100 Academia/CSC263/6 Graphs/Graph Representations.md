---
{"dg-publish":true,"dg-path":"academia/CSC263/6 Graphs/Graph Representations.md","permalink":"/academia/csc-263/6-graphs/graph-representations/","tags":["cs","lecture","note","university"],"created":"2025-02-26T02:37:27.180-05:00","updated":"2025-02-26T02:41:19.372-05:00"}
---


# Graph Representations

## Graph Definition

> [!def]+ Graph
> A **graph** is a tuple of two sets $G = \langle V, E \rangle$, where $V$ is a set of **vertices**, and $E$ is a set of **edges** between those vertices.
> $E$ itself is a set of tuples $(v_{i}, v_{j})$, where $v_{i}, v_{j} \in V$.

![](https://i.imgur.com/ItxHzhR.png)
![[ee367-016.png\|ee367-016.png]]

## Basic Definitions

- Vertices
- Edges
- Weighted/unweighted graphs
- Connected/disconnected graphs
- Adjacent/non-adjacent vertices
    - Neighbours
- Paths and cycles; path lengths
- Distance between two nodes
- In-degree/out-degree of vertices
    - Only defined if graph is ==directed==
    - Same goes for “in-neighbourhood” and “out-neighborhood” and “in-adjacent” and “out-adjacent”
- Degree of a vertex
    - Undirected: Number of edges that vertex is also in

## Examples

> [!note] If neither type of graph is specified, our default will be an **undirected** graph

- Facebook friendship can be represented by undirected graphs
    - Each person (account) is represented by a vertex
    - $u$ and $v$ are friends $\iff$ there exists an edge between $u$ and $v$
- Instagram followers can be represented by directed graphs
    - Each person (account) is represented by a vertex
    - $u$ follows $v$ $\iff$ there exists an edge from $u$ to $v$

> [!info]+ Minimum number of edges in an undirected **connected** graph with $n$ vertices
> $$n - 1$$
> ![|350](https://i.imgur.com/qXZ70gk.png)
> - Simplest graph is a line

> [!info]+ What about the maximum number of edges in an undirected connected graph with $n$ vertices?
> ![|350](https://i.imgur.com/aqe8atx.png)
> - Connect
