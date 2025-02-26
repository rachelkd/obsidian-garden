---
{"dg-publish":true,"dg-path":"academia/CSC263/6 Graphs/Discover Graphs.md","permalink":"/academia/csc-263/6-graphs/discover-graphs/","tags":["cs","lecture","note","university"],"created":"2025-02-25T03:37:40.030-05:00","updated":"2025-02-26T02:43:32.215-05:00"}
---


# Discover Graphs

- **Graphs**
    - Generalization of trees that can represent arbitrary (binary) ==relationships== between various objects
    - e.g., Modelling geographic and spatial relationships
- Examples of graphs:
    - Activity between members of a social network
    - Requirements and dependencies in a complex system like the development of a space shuttle

- & A graph is an abstraction of the concept of a **set of objects** and the **relationships** between them

## Definitions

- Define a **vertex** $v$ to be a single object
    - i.e., node
- Define an **edge** to be a tuple $e = (v_{1}, v_{2})$ or a set $e = \{ v_{1}, v_{2} \}$

> [!def]+ Graph
> A **graph** is a *tuple* of two sets $G = (V, E)$, where $V$ is the *set of vertices*, and $E$ is the *set of edges* on those vertices

- **Undirected graph**
    - Graph where order does not matter in edge tuples
    - i.e., $(v_{1}, v_{2})$ is equal to $(v_{2}, v_{1})$
    - % Sometimes see edge in an undirected graph expressed as a *set* $\{ v_{1}, v_{2} \}$
        - Since order does not matter
- **Directed graph**
    - Graph where the tuple order does matter
    - i.e., $(v_{1}, v_{2})$ and $(v_{2}, v_{1})$ represent different edges in a directed graph
- **Self-loop** in a directed graph
    - An edge going from a vertex to itself
    - ! Self-loops are not allowed in undirected graphs

![|300](https://i.imgur.com/srVbevN.png)

*Graph 1: An undirected graph with 5 vertices*

![|300](https://i.imgur.com/elUAKPP.png)

*Graph 2: A directed graph with 3 vertices*

- **Adjacent**
    - If $(u, v)$ is an edge in an *undirected* graph, then vertex $v$ is said to be **adjacent** to vertex $u$
        - This relationship is *symmetric* i.e., vertex $u$ is also adjacent to vertex $v$
    - In a *directed* graph, $v$ is **adjacent** to $u$ if there is an edge $(u, v)$
    - Graph 1:
        - $a$ is adjacent to $e$ and $c$
    - Graph 2:
        - $A$ is adjacent to $C$
        - $C$ is *==not==* adjacent to $A$

- **Incident on**
    - *Undirected* graph
    - An edge $(u, v)$ is **incident on** vertices $u$ and $v$
- **Incident from** and **incident to** (leaves and enters)
    - *Directed* graph
        - Terminology differentiates between the beginning and ending vertex of an edge
    - An edge $(u, v)$ which **leaves** vertex $u$ is said to be **incident from** vertex $u$ and is **incident to** (or **enters**) vertex $v$
    - Graph 2:
        - Edge $(C, A)$ is incident from $C$ and incident to $A$

- **Degree**
    - Undirected graph:
        - **Degree** of a vertex $v$ is the number of edges incident on $v$
    - Directed graph:
        - **In-degree** of vertex $v$ is the number of edges incident to $v$
        - **Out-degree** of vertex $v$ is the number of edges incident from $v$

- **Neighbourhood**
    - A **neighbourhood** of a particular vertex $v$ is the *set of vertices* that share an edge with $v$
    - Undirected graph:
        - Neighbourhood of vertex $v$ is the set of vertices $u$ such that $(u, v)$ is an edge
    - Directed graph:
        - **In-neighbourhood** of vertex $v$ is the set of vertices $u$ such that $(u, v)$ is an edge
        - **Out-neighbourhood** of vertex $v$ is the set of vertices $u$ such that $(v, u)$ is an edge
    - Graph 2:
        - Out-degree of $C$ is 2
        - In-neighbourhood of $C$ is $\{ C \}$

- **Weighted graph**
    - We associate an additional real number with each edge
    - Call this value the edge **weight** or the edge **cost**
    - Can be either directed or undirected

![|400](https://i.imgur.com/98ij3Tu.png)

*Graph 3: Weighted undirected graph*

- **Path**
    - *Sequence* of edges connected to each other
    - $(v, u_{1}), (u_{1}, u_{2}), \dots, (u_{k - 1}, x)$
- **Length** of a path
    - Number of **edges** on the path
- **Simple path**
    - Has no repeated edge or vertex
- Examples:
    - $(p, s), (s, t), (t, q)$ is a path in Graph 3 with length 3
    - $(p,s), (s,t), (t,r), (r,p), (p,s)$ is ==not== a simple path, but has length 5
    - Path $(p, s), (s, p)$ has length 2 and is also not simple

- **Cycle**
    - A path with the same starting and ending vertex
    - Undirected graph:
        - Path forming a cycle must have no repeated edges
        - Therefore must contain at least 3 vertices
    - Directed graph:
        - Cycle must have at least 1 edge
        - Self-loop is a cycle of length 1
- **Simple cycle**
    - Cycle that has no repeated edge or vertex (other than the same first and last vertex)
    - Examples:
        - Graph 3 $(r,t), (t,q), (q,r)$ is a simple cycle
        - Graph 2 $(A,B), (B,A)$ is a simple cycle
        - Graph 2 $(C, C)$ is a simple cycle of length 1
- **Acyclic**
    - A graph is **acyclic** if it contains no cycles

- **Connected**
    - An *undirected* graph is **connected** if it contains a path between any two vertices
    - Graph 4 has 8 vertices and 5 edges
        - It is not connected
        - Has three components, each of which is connected
        - Would say that the graph has three *connected components*

![|400](https://i.imgur.com/vYT4Sk8.png)

*Graph 4: Graph with three connected components*

- **Tree**
    - A **tree** is an *undirected connected* graph that is *acyclic*
    - % Definition of tree is different from what we have seen before, which have all been **rooted** trees
- **Rooted tree**
    - One vertex is designated as the root
- **Free tree**
    - An undirected connected acyclic graph without a specific vertex designated as the root

- **Forest**
    - A collection of (zero or more) disjoint trees
    - e.g., Graph 4 is a forest that comprises 3 trees
