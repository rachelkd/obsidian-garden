---
{"dg-publish":true,"permalink":"/000-zettlekasten/week-8-lecture/","created":"2024-03-05T15:21:50.628-05:00","updated":"2024-03-05T15:47:41.180-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/CSC111/_CSC111 Notes\|8]]
Course: #CSC111
Covered in: [[100 📒 Academia/CSC111/Unit 4 - Graphs\|Unit 4 - Graphs]]
Date: 2024-03-05

---
# Cycles [[100 📒 Academia/CSC111/Course Notes/Cycles and Trees\|Cycles and Trees]]

Recall definition of cycle.


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/academia/csc-111/course-notes/cycles-and-trees/#992153" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



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
> If $G$ is connected and $e$ is in a cycle of $G$, then the graph obtained by removed $e$ from $G$ is still connected.
> $$\forall G = (V, E), \forall e \in E, (G \text{ is connected} \; \land \; e \text{ is in a cycle of } G) \implies G - e \text{ is connected}$$

Proof in [[100 📒 Academia/CSC111/Course Notes/Cycles and Trees#Prove that this property holds when this cycle is part of a larger graph\|17.6]].

- If $w_1$ and $w_2$ are connected in $G$, what does that mean exists in $G$ (in terms of paths)?
    - There is a path containing 2 or more vertices

## Another property

> [!info] Lemma 2. (Converse of Lemma 1.)
> Let $G = (V, E)$ be a graph. If there exists an edge $e \in E$ such that $G-e$ is connected, then that edge $e$ is in a cycle in $G$, the original graph.
> - Note: In this case, $G$ is also connected.

