---
{"dg-publish":true,"dg-path":"academia/CSC263/6 Graphs/Strongly Connected Graphs.md","permalink":"/academia/csc-263/6-graphs/strongly-connected-graphs/","tags":["cs","lecture","note","university"],"created":"2025-03-08T15:48:03.263-05:00","updated":"2025-03-08T16:06:13.339-05:00"}
---


# Strongly Connected Graphs

We previously defined **[[100 Academia/CSC263/6 Graphs/Discover Graphs\|connected]]** for *undirected* graphs.

> [!def]+ Connected
> An undirected graph is **connected** if:
> - Every vertex $v$ is reachable from every other vertex $u$
> - For every pair of vertices $u, v$, there exists a path from $u$ to $v$ and $v$ to $u$

We did not define “connected” for a *directed* graph.

> [!def]+ Strongly connected component
> A **strongly connected component**, $C$, in a directed graph, $G$, means that:
> - For every vertex pair $(u, v)$ in $C$:
>     - $v$ is reachable from $u$, and
>         - i.e., $\exists$ path $u \to v$
>     - $u$ is reachable from $v$
>         - i.e., $\exists$ path $v \to u$

## Algorithm

- Pick $s \in V$
- Call `DFSVisit(G, s)`
    - If $s.f = 2 \cdot |V|$, then we have a path $s \to v$ for all $v \in V$

We need to check if we can get to $s$ from any value.

- & Reverse order of all edges in $G$ to make $G'$
- Then, call `DFSVisit(G', s)`

## After Lecture

- Chapter 6 of course notes
- Worksheet from Week 8
- Optional readings:
    - CLRS 22.1 - 22.4
- Problems (CLRS):
    - 22.1-1
    - 22.1-2
    - 22.2-1
    - 22.3-2
