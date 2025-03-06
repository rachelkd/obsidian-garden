---
{"dg-publish":true,"dg-path":"academia/CSC263/6 Graphs/Graph Traversal.md","permalink":"/academia/csc-263/6-graphs/graph-traversal/","tags":["cs","lecture","note","university"],"created":"2025-02-26T02:41:18.499-05:00","updated":"2025-03-06T03:03:14.136-05:00"}
---


# Graph Traversal

- **Graph traversal**
    - Visit *all* the vertices in a graph to perform some task
        - Task depends on the application
    - Visits can follow different *orders*

## Breadth-First Search


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/academia/csc-263/6-graphs/breadth-first-search/#introduction" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



## Introduction

> [!def]+ Breadth First Search
> - Starting from source $s$ in $V$:
>     - BFS visits every vertex $v$ reachable from $s$
> - In the process, we find paths from $s$ to each reachable vertex $v$
> - Paths make BFS tree rooted at $s$
> - Works on directed and undirected graphs
> - Get **level-by-level** traversal

> [!idea]+ Intuition
> Starting from $s$,
> - First visit *all* (unvisited) neighbours of $s$
> - Then visit *all* (unvisited) neighbours of all neighbours of $s$
> - Then visit *all* (unvisited) neighbours of all neighbours of all neighbours of $s$
> - And so on
> - Until all reachable vertices are visited

> [!question]+ Consider performing the BFS traversal on the root of a tree. What ADT should we use to store vertices in level-by-level tree traversal?
> - A tree ADT, called a **BFS tree**
>
> ![|300](https://i.imgur.com/KKyVXQt.png)


</div></div>


- [[100 Academia/CSC263/6 Graphs/Breadth-First Search\|Breadth-First Search]]

## Depth-First Search

- [[100 Academia/CSC263/6 Graphs/Depth-First Search\|Depth-First Search]]
