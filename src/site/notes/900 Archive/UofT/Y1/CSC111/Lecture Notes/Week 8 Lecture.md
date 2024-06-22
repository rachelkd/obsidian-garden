---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/csc-111/lecture-notes/week-8-lecture/","created":"2024-03-05T12:21:50.628-08:00","updated":"2024-03-10T18:48:43.938-07:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/CSC111/_CSC111 Notes\|8]]
Course: #CSC111
Covered in: [[900 Archive/UofT/Y1/CSC111/Unit 4 - Graphs\|Unit 4 - Graphs]]
Date: 2024-03-05

[[900 Archive/UofT/Y1/CSC111/Course Notes/Cycles and Trees\|Cycles and Trees]]

---
# Cycles

Recall definition of cycle.


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/900-archive/uof-t/y1/csc-111/course-notes/cycles-and-trees/#992153" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



> [!important] Definition of cycle. #definition 
> Let $G = (V, E)$ be a graph.
> - A **cycle** in $G$ is a sequence of vertices $v_{0}, \dots, v_{k}$ satisfying the following conditions:
> 	1. $k \ge 3$
> 	2. $v_{0} = v_{k}$, and all other vertices are distinct from each other and $v_{0}$
> 	3. Each consecutive pair of vertices is adjacent

</div></div>


## Connectedness redundancy

- Are all vertices in any cycle connected to each other?
    - Yes
- If we remove one edge, will all the vertices that were in the cycle still be connected?
    - Yes

> [!info] Lemma 1.
> Let $G = (V, E)$ be a graph and $e \in E$.
> If $G$ is connected and $e$ is in a cycle of $G$, then the graph obtained by removing $e$ from $G$ is still connected.
> $$\forall G = (V, E), \forall e \in E, (G \text{ is connected} \; \land \; e \text{ is in a cycle of } G) \implies G - e \text{ is connected}$$

Proof in [[900 Archive/UofT/Y1/CSC111/Course Notes/Cycles and Trees#Prove that this property holds when this cycle is part of a larger graph\|17.6]].

- If $w_1$ and $w_2$ are connected in $G$, what does that mean exists in $G$ (in terms of paths)?
    - There is a path containing 2 or more vertices

## Another property

> [!info] Lemma 2. (Converse of Lemma 1.)
> Let $G = (V, E)$ be a graph. If there exists an edge $e \in E$ such that $G-e$ is connected, then that edge $e$ is in a cycle in $G$, the original graph.
> - Note: In this case, $G$ is also connected.

## Adding Lemma 1 and Lemma 2

```ad-thm
title: Theorem 1.
Let $G = (V, E)$ be a *connected* graph. Then $G$ has a cycle if and only if there exists an edge $e \in E$ such that $G - e$ is still connected.

```

## Minimally-connected graph

- From Theorem 1, we know that:
    - ==minimally-connected graphs are connected graphs that have no cycles==.
- What are **minimally-connected** graphs called?
    - Trees

# Trees

- Let $G = (V, E)$ be a graph.
- We say that $G$ is a *tree* when it is ==connected and has no cycles==.
---
- Difference between trees we studied earlier vs. now
    - Trees studied earlier had a *root*, representing the start or top of a tree
    - In graph theory, we do not have a designated root element
        - Won’t necessarily draw trees top-down
    - All trees are graphs, but not all graphs are trees
---
- By definition, a tree does not have any cycles, and so (by Thm. 1) there does not exist an edge that can removed from a tree without disconnecting it
    - i.e., removing *any* edge from a tree results in a graph that is not connected

## Important properties of trees

- The number of edges in a tree is directly related to…
    - the total number of vertices

```ad-thm
title: Theorem. (Number of edges in a tree)
Let $G = (V, E)$ be a (non-empty) tree. Then $|E| = |V| - 1$.

```

*Translation.*
$$\forall G = (V, E), G \text{ is a tree} \implies |E| = |V| - 1$$
> [!important] **We can say that a tree is the “backbone” of a connected graph.**

![](https://i.imgur.com/MVCnME6.png)
*There can be more than one underlying tree structure.*

# Spanning Trees

```ad-def
title: Spanning trees. #defintion
Let $G = (V, E)$ be a connected graph.
Let $G' = (V, E')$ where $E' \subseteq E$ ($G'$ has the same vertices as $G$).
- We say that $G'$ is a **spanning tree** of $G$ when $G'$ is a tree.

```

### Given a graph, find a spanning tree (code implementation)

```python
class Graph:
    def spanning_tree(self) -> list[set]:
        """Return a subset of the edges of this graph
        that form a spanning tree.
        
        The edges are returned as a list of sets,
        where each set contains the two ITEMS corresponding to an edge.
        Each returned edge is in this graph
        (i.e., this function does not create new edges!).
        
        Preconditions:
            - this graph is connected
        """
```

#### From proof to (pseudo)code
“Repeatedly remove edges until there are no more cycles”
```python
class Graph:
    def spanning_tree(self) -> list[set]:
        edges_so_far = all edges in self
        
        while edges_so_far contains a cycle:
            remove an edge in the cycle from edges_so_far
        
        return edges_so_far
```
- Direct translation to code is not always the best solution
- Repeatedly searching for cycles could be inefficient
- We can use the same recursive graph traversal approach from `_Vertex.check_connected` ([[900 Archive/UofT/Y1/CSC111/Course Notes/Connectivity and Recursive Graph Traversal#Implementation\|here]]) to construct a spanning tree
#### From proof to code

In Prep 8, a similar method which kept track of *all* items connected to a vertex and returned them was implemented.

```python
class Graph:
    def get_connected_component(self, visited: set[_Vertex]) -> set:
        """Return a set of all ITEMS connected to self by a path
        that does not use any vertices in visited.
        
        The items of the vertices in visited CANNOT appear in the returned
        set.
        """
```
*We can modify our code from `get_connected_compoenent` to keep track of edges along a path instead.*

Solution in 17.7.

# Connectivity

## Putting everything together

1. Every tree has $|E| = |V| - 1$.
2. Every connected graph is either a tree, or can be made into a tree by removing edges from cycles.

```ad-thm
title: Theorem.
Let $G = (V, E)$ be a graph. If $G$ is connected, then $|E| \ge |V| - 1$.
```

```ad-thm
title: Corollary (contrapositive).
Let $G = (V, E)$ be a graph. If $|E| < |V| - 1$, then $G$ is not connected.

```

From [[900 Archive/UofT/Y1/CSC111/Course Notes/A Limit for Connectedness\|A Limit for Connectedness]],
```ad-thm
title: Theorem.
Let $G = (V, E)$ be a non-empty graph. If $|E| \ge \frac{(|V| - 2)(|V| - 1)}{2} + 1$, then $G$ is connected

```

```python
class Graph:
    def is_connected_graph(self) -> bool:
    """Return whether this graph is connected."""
    n = len(self._vertices)
    e = self.num_edges()
    
    if e >= (n - 1) * (n - 2) // 2 + 1:
        return True
    elif e < n - 1:  # NEW
        return False
    else:
        # Check whether every pair of vertices is connected
        return ...
```