---
{"dg-publish":true,"dg-path":"academia/CSC263/6 Graphs/Depth-First Search.md","permalink":"/academia/csc-263/6-graphs/depth-first-search/","tags":["cs","lecture","note","university"],"created":"2025-03-04T13:22:20.482-05:00","updated":"2025-03-06T01:17:50.371-05:00"}
---


# Depth-First Search

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
    - & The start and finish times of $u$ and $v$ overlap
        - $v$‘s discovery and finish time is contained inside $u$’s time
- **Cross edge**
    - An edge $(u, v)$ that connects two nodes such that $v$ is neither an ancestor nor descendant of $u$
    - $v$ is *black* when edge $(u, v)$ is examined
    - & No overlap in discovery and finish times
        - i.e., $u$ was discovered completely after $v$ was explored
    - e.g., An edge across trees in a DFS forest (right blue arrow)

![](https://i.imgur.com/PKqsxDl.png)
