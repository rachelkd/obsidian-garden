---
{"dg-publish":true,"dg-path":"academia/CSC263/8 Disjoint Sets/Disjoint Sets.md","permalink":"/academia/csc-263/8-disjoint-sets/disjoint-sets/","tags":["cs","lecture","note","university"],"created":"2025-03-25T14:07:31.142-04:00","updated":"2025-03-25T15:12:06.664-04:00"}
---


# Disjoint Sets

## Disjoint Set ADT

> [!def]+ Disjoint Sets
>
> > [!summary]+ Objects
> > - A collection of non-empty **disjoint sets** $DS = \{ S_{1}, S_{2}, \dots, S_{k} \}$
> > - Each set is identified by a *unique* element called its **representative**
> >
> > > [!note]+ Disjoint
> > > - Two sets are **disjoint** iff $S_{i} \cap S_{j} = \emptyset$
> > > - That is, for each pair $S_{i}, S_{ij} \in DS (1 \leq i, j \leq k)$, we have $S_{i} \cap S_{j} = \emptyset$
>
> > [!summary]+ Operations
> > - `Make-Set(DS, v)`
> > - `Find-Set(DS, x)`
> > - `Union(DS, x, y)`
