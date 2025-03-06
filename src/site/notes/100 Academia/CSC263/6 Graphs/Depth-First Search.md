---
{"dg-publish":true,"dg-path":"academia/CSC263/6 Graphs/Depth-First Search.md","permalink":"/academia/csc-263/6-graphs/depth-first-search/","tags":["cs","lecture","note","university"],"created":"2025-03-04T13:22:20.482-05:00","updated":"2025-03-06T17:41:54.230-05:00"}
---


# Depth-First Search

## BFS vs. DFS

Consider performing the BFS and DFS algorithms on the *root* of a tree.

![](https://i.imgur.com/NFqMGlP.png)

- Breadth-first search in a tree (starting from root):
    - **Level-by-level** traversal
    - Use a queue
- Depth-first search
    - Visits the **child vertices** before visiting the sibling vertices
    - Use a *stack*
        - Store things yet to be explored, but keep adding children that you want to be explored first

## An Initial Implementation

Recall [[100 Academia/CSC263/6 Graphs/Breadth-First Search#^cfb9e1\|BFS]] initial implementation:

![](https://i.imgur.com/y8cGSLo.png)

- DFS:
    - Instead of using a queue (BFS)
    - & Use a *stack*

```
NotYetDFSIte(T, root):
    S = ∅
    Push(S, root)
    
    while S not empty:
        u = Pop(S)
        print u
        for each child c of u:
            Push(S, c)
```

### Example

![|200](https://i.imgur.com/Fsw1KNi.png)

![](https://i.imgur.com/othR9ic.png)

- Want to print from left to right
    - % Add children in right-to-left order (reverse alphabetical)
- At each iteration:
    - Pop, print, add all children to stack

> [!obs]+ `NotYetDFSIte` is a stack simulation of a *recursive* algorithm.
>
> ```
> NotYetDFSRec(T, root):
>     print root
>     for each child c of root:
>         NotYetDFSRec(T, c)
> ```
>
> - € Rather than pushing and popping, can recursively call

## Depth-First Search Implementation

> [!impl]+ How do we avoid visiting a vertex twice?
> - & Remember the visited vertices by labelling them using colours
>     - Similar to [[100 Academia/CSC263/6 Graphs/Breadth-First Search\|BFS]]
> - **White**
>     - *Unvisited* (undiscovered) vertices
> - **Grey**
>     - *Encountered* (discovered) vertices
> - **Black**
>     - *Explored* vertices
>     - Have been visited, and all of their neighbours are explored

- Initially:
    - All vertices are *white*
- & Change a vertex to *grey* the first time *visiting* it
    - i.e., Calling `DFSVisit` for the vertex
- & Change a vertex’s colour to *black* when all its *neighbours* have been *explored*
- & Avoid visiting — i.e., calling `DFSVisit` — for *grey* or *black* vertices
- In the end:
    - All vertices are *black*

### Timestamps

> [!info]+ Useful values to remember during the traversal
> - Vertex form which $v$ is encountered
>     - Stored in $v.p$
> - Keep track of two *timestamps* for each vertex $v$:
>     - There is a *timer* incremented whenever a vertex’s colour is changed
>     - **Discovery time**
>     - **Finishing time**

> [!def]- Discovery time
> - *Time* when $v$ is first *encountered*
>     - Stored in $v.d$
> - % This is different from BFS, where $v.d$ was the distance from $v$ to the source vertex

> [!def]- Finishing time
> - *Time* when all the neighbours of $v$ have been *completely visited*
>     - Stored in $v.f$

### Pseudocode

```python
DFS(G):
    for each t ∈ G.V:  # Initializing; set all vertices to white
        t.colour = White
        t.p = NIL
    
    time = 0
    
    for each s ∈ G.V:
        if s.colour == White  # Make sure NO vertex is left unvisited
            DFSVisit(G, s)
```

```python
DFSVisit(G, s):
    time = time + 1  # Time is a global variable
    s.d = time
    s.colour = Grey
    
    for each t ∈ G.adj[s]:
        if t.colour == White  # Only visit unvisited vertices
            t.p = s
            DFSVisit(G, t)
    
    s.colour = Black  # s is explored as all its neighbours have been encountered
    time = time + 1
    s.f = time  # Save finishing time after exploring all neighbours
```

- ? What lines are the same as `NotYetDFSRec`?
    - Lines 6, 9

#todo

## Edge Classification in the DFS Forest

![](https://thealgoristsblob.blob.core.windows.net/thealgoristsimages/dfs_edges.png)

> [!note]+ Depth-first search creates DFS *forests*
> - Unlike BFS, which creates BFS trees
> - DFS searches *all* vertices
>     - While BFS only explores vertices that are reachable

- **Tree edges**
    - An edge $(u, v)$ in the DFS forest such that $v$ is *white* when edge $(u, v)$ is examined
- **Back edge**
    - An edge $(u, v)$ such that $v$ is an ancestor of $u$ in the DFS forest, and
    - $v$ is *grey* when edge $(u, v)$ is examined
- **Forward edge**
    - An edge $(u, v)$ such that $v$ is a descendant of $u$ in the DFS forest, and
    - $v$ is *black*  when edge $(u, v)$ is examined
- **Cross edge**
    - An edge $(u, v)$ that connects two nodes such that $v$ is neither an ancestor nor descendant of $u$
    - $v$ is *black* when edge $(u, v)$ is examined
    - & No overlap in discovery and finish times
    - e.g., An edge across trees in a DFS forest (right blue arrow)
    - Can think of as doing a BFS search on the source node, and $u,v$ are on the same level

![](https://i.imgur.com/PKqsxDl.png)
