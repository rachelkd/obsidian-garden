---
{"dg-publish":true,"dg-path":"academia/CSC258/7 Assembly Language/The Stack.md","permalink":"/academia/csc-258/7-assembly-language/the-stack/","tags":["cs","lecture","note","university"],"created":"2025-04-12T23:07:14.219-04:00","updated":"2025-04-12T23:44:51.084-04:00"}
---


# The Stack

- **Stack**
    - A spot in *memory* used to store values independent of the registers
        - Which can get overwritten easily
- & A special register stores the **stack pointer**
    - Which points to the *last element pushed onto the top of the stack*
        - MIPS:
            - Stack pointer is `$29` (`$sp`)
            - & Holds the address of the *last element* pushed to the top of the stack
        - % In other systems: `$sp` could point to the *first empty location on top of the stack*
- We can *==push==* data (like `$ra`) onto the stack
    - Which makes it *grow*, and
    - *==Pop==* data from the stack
        - Which makes it *shrink*
- & Stack is allocated a **maximum space** in memory
    - If it grows too large:
        - ! Risk of it exceeding this predefined size and/or ==overlapping with the *heap*==

## Programmer’s View of Memory

![](https://i.imgur.com/EULFs69.png)

- Stack is part of memory used for function calls, etc.
- & Stack grows toward smaller (lower) addresses
    - See arrow
- Stack uses **LIFO** (last-in-first-out) order
    - Like a physical pile that you add and removes items from
- **Stack overflow**
    - If you reach the end of stack memory
    - e.g., infinite recursion

## Stack to the Rescue

- ? When do you store values onto the stack?
    - Whenever you call a function and want to *preserver values* from getting overwritten
        - Like `$ra` (see the problem in [[100 Academia/CSC258/7 Assembly Language/Functions in Assembly#Nested Function Call Issue\|functions in assembly]])
- ? What happens when you have nested function calls, each of which stores `$ra` on the stack?
    - Different `$ra` values will exist *in layers* on the stack over time
- Can also use stack to store:
    - & Function arguments
    - & Function return values
    - (more on this later)

## The Stack, Illustrated

![](https://i.imgur.com/pKwB91N.png)

- Stack pointer points to top element of the stack

### Popping Values off the Stack – Before

![](https://i.imgur.com/7ErqRA0.png)

- If you want to remove element from stack i.e., *pop* from stack:
    - Stack pointer is pointing to top element; single word in memory
        - Want to remove top element
    - & Load element that `$sp` is pointing to → store in `$ra` (if word is a return address)
    - & Update the stack pointer
        - Taken off a full word from stack
        - Update by ‘moving it back down’ four bytes i.e., add 4 to `$sp`
            - Since ‘down’ corresponds to
