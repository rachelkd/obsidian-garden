---
{"dg-publish":true,"dg-path":"academia/CSC263/6 Graphs/Strongly Connected Graphs.md","permalink":"/academia/csc-263/6-graphs/strongly-connected-graphs/","tags":["cs","lecture","note","university"],"created":"2025-03-11T13:10:21.541-04:00","updated":"2025-03-13T15:07:01.956-04:00"}
---


# Strongly Connected Graphs

## Strongly Connected Directed Graph

- **Connected**
    - An *undirected* graph is **connected** if:
        - Every vertex $v$ is reachable from every other vertex
        - For every pair of vertices $\{ u, v \}$, there is a path that goes from $u \leadsto v$ and $v \leadsto u$

> [!def]+ Strongly connected
> A **strongly connected component** in a *directed* graph means that:
> For every vertex pair $\{ u, v \}$ in $G$,
> - $v$ is reachable from $u$, and
>     - $u \leadsto v$
> - $u$ is reachable from $v$
>     - $v \leadsto u$

> [!goal]+ How do you write an efficient algorithm given a graph to decide if its strongly connected?
> - Obvious answers seem to be to do a [[100 Academia/CSC263/6 Graphs/Breadth-First Search\|BFS]] or [[100 Academia/CSC263/6 Graphs/Depth-First Search\|DFS]]

Steps

1. Pick a vertex $s$
2. BFS or DFS
    - Finish time will be double the number of nodes
    - If $f[s] = 2|V|$, then every vertex is reachable from $s$
    - @ Need to show that from anywhere, we can get to $s$
3. Create $G'$: take every edge in $G$ and turn it around
4. Run $DFS(G')$ on $s$
    - If $f[s] == 2|V|$ in $G'$, then every vertex is reachable from $s$ in $G'$
    - $\implies$ $s$ is reachable from every vertex in $G$

## Minimum Spanning Trees

- **Minimum spanning tree**
    - Minimum: edges are minimized
    - Spanning: includes every vertex in $G$
    - Tree: no cycles

> [!question] How do we find an algorithm that gives us a minimum spanning tree?

- Two options:
    - Take a graph and remove expensive edges until we have a MST
    - & Start with nothing but the vertices, and add edges from graph, making a forest or tree as we go, until we have a MST
        - This algorithm is more efficient

### Greedy MST

```pseudocode
Greedy-MST(G = (V, E), w: E -> R):
    T <- {}  # Invariant: T is a subset of G
    while T is not a spanning tree:
        find e "safe for T"
        T <- T ∪ {e}
```

- **Greedy algorithm**
    - A problem-solving approach that chooses the best option at each step
        - Without considering the future
    - Often used to solve optimization problems
- % **Greedy** algorithms do not always work, but it does for MST
    - Do not always work because they make local, immediate decisions without considering the global optimal solution
    - Fails when locally optimal $\neq$ globally optimal
    - Algorithm does not backtrack or reconsider past choices, which can be a problem in cases where an earlier suboptimal decision affects the final outcome
    - ? Why does greedy work for MST? #office-hours

### Theorem: “Safe for $T$”

> [!thm]+ Theorem
> If:
> 1. $G$ is a connected, undirected, weighted graph, and
> 2. $e$ is an edge of minimum weight whose end points are in different connected components of $T$
>
> Then:
> - $e$ is *safe* for $T$

#todo
