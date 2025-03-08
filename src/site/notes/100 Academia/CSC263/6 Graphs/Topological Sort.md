---
{"dg-publish":true,"dg-path":"academia/CSC263/6 Graphs/Topological Sort.md","permalink":"/academia/csc-263/6-graphs/topological-sort/","tags":["cs","lecture","note","university"],"created":"2025-03-06T17:41:09.613-05:00","updated":"2025-03-08T15:48:03.982-05:00"}
---


# Topological Sort

## Definition

> [!def]+ Topological sort
> A **topological sort** of a *directed* graph $G = \langle V, E \rangle$ is a *linear* ordering of all its vertices such that:
> - & If $G$ contains an edge $(u, v)$, then **$u$ appears before $v$** in the ordering
>
> If the graph contains a *cycle*, then *no* linear ordering is possible.

- Intuition:
    - A topological sort of a graph is an ordering of its *vertices* along a *horizontal line* so that all directed edges go from *left to right*

## Example: Dressing Order

We must wear certain garments before others (e.g., socks before shoes).

- A directed edge $(u, v)$ indicates that garment $u$ must be donned before garment $v$.
- Whenever a node goes black, add it to the beginning of the ordering

![|400](https://i.imgur.com/LLqA0v5.png)

![](https://i.imgur.com/2s9xZOQ.png)

- $ Watch is independent of order

If we started our DFS at undershorts, we would get a different ordering.

![](https://i.imgur.com/DHCKW3C.png)

## High-Level Description

> [!thm]+ Theorem 22.12 (in CLRS)
> For any pair of distinct vertices $u, v \in V$, if $G$ contains an edge from $u$ to $v$, then
> $$v.f < u.f$$

*Proof (by contradition).*
Left as an exercise.
Check answer with Theorem 22.12 in CLRS.

- `TopologicalSort(G)`:
    - Call `DFS(G)`
    - During `DFS`, make sure that $G$ does not contain any cycles
        - i.e., An edge that points to a grey node
        - At any points, if a cycle is detected, return an empty list
            - If there is a cycle, we are done
    - As each vertex is finished, insert it onto the front of a linked list
    - Return the linked list of vertices

> [!note]+ Topological sorting is *different* from the usually kind of sorting (like quick sort or heap sort).
