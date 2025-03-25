---
{"dg-publish":true,"dg-path":"notes/Discover Disjoint Sets.md","permalink":"/notes/discover-disjoint-sets/","tags":["cs","lecture","note","university"],"created":"2025-03-25T02:27:41.066-04:00","updated":"2025-03-25T02:59:16.212-04:00"}
---


# Discover Disjoint Sets

Recall [[100 Academia/CSC263/6 Graphs/Connected Components and Spanning Trees\|Kruskal's algorithm]].


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/academia/csc-263/6-graphs/connected-components-and-spanning-trees/#da815c" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">

<div class="markdown-embed-title">

# Kruskal's algorithm

</div>


```pseudocode
MST-Kruskal(G = (V, E), w: E -> R):
    T <- {}
    sort edges so w(e_1) <= w(e_2) <= ... <= w(e_m)
    
    for i <- 1 to m:
        let (u_i, v_i) = (e_i)
        if ui, vi in different connected components of T:
            T <- T ∪ {e_i}
```

</div></div>


- Needed a new data type where we could organize objects e.g., vertices into *non-overlapping sets*
    - Needed to be able to test if two objects were in the same set, and to
        - *Merge* sets together
        - “If $u_{i}, v_{i}$ in different connected components of $T$”

## Definition of Disjoint Set

> [!def]+ Disjoint Set ADT
>
> > [!summary]+ Data
> > - A *collection* of non-empty disjoint sets $S = \{ S_{1}, S_{2}, \dots, S_{k} \}$
> >     - Where each set is identified by a unique element called its *representative*
>
> > [!summary]+ Operations
> > - `Make-Set(x)`
> >     - Given element $x$ that does not already belong to one of the sets in the collection, create a new set $\{ x \}$ that contains only $x$
> >     - Assign $x$ as the representative of that new set
> > - `Find-Set(x)`
> >     - Given element $x$, return the *representative* of the set that contains $x$
> >         - or `NIL` if $x$ does not belong to any set
> > - `Union(x, y)`
> >     - Given two distinct elements $x, y$, let $S_{x}$ be the set that contains $x$ and $S_{y}$ be the set that contains $y$
> >     - Form a new set consisting of $S_{x} \cup S_{y}$, and
> >         - Remove $S_{x}$ and $S_{y}$ from the collection
> >     - Pick a representative for the new set
> >     - Pre-condition:
> >         - Required that $x, y$ each be an element of some set in the collection

## Important Things to Realize about Disjoint Set ADT

- & The sets are **disjoint**
    - They do not have *any* common elements
    - i.e., No element can occur in more than one of the sets
    - → Every element in the collection $S$ appears in exactly one of the sets
    - % This is why we remove $S_{x}$ and $S_{y}$ from the collection during the *Union* operation after we add new set
- & The sets are **non-empty**
    - Each set must have at least one element
- When a new representative is selected for the resulting set from a `Union(x, y)` operation:
    - & Representative can be *any* element from the new set
    - Might be that the representative is the old representative from one of the sets
    - Might be $x$ or $y$, or
    - Could be a completely different element of the new set
    - % Sometimes might see implementations that promise that new representative will be one of the original representatives
        - ! But this is not required by the ADT!

> [!question]+ What happens when you call `Union(x, y)`, and $x, y$ are already in the same set?
> - Some implementations:
>     - Insist that this cannot happen
>     - Make `Find-Set(x) != Find-Set(y)` a precondition to calling `Union(x, y)`
> - Other implementations:
>     - Say that this operation has no effect on the data in the collection

> [!tip]+ We can check if two elements are in the same set by comparing the *representatives* of their sets

> [!danger]+ We cannot ask for all the elements of a given set or even determine its size
> - Functionality is not part of the ADT definition
> - [[100 Academia/CSC263/6 Graphs/Connected Components and Spanning Trees\|Kruskal's algorithm]]:
>     - We do not even need this functionality
> - % This has important consequences on the designs of the various implementations that we will consider for the Disjoint Set ADT
