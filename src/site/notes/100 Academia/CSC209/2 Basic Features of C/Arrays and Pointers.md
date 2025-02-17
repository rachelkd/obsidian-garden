---
{"dg-publish":true,"dg-path":"academia/CSC209/2 Basic Features of C/Arrays and Pointers.md","permalink":"/academia/csc-209/2-basic-features-of-c/arrays-and-pointers/","tags":["cs","lecture","note","university"],"created":"2025-01-14T12:19:33.282-08:00","updated":"2025-01-24T23:46:34.683-08:00"}
---


# Arrays and Pointers

## Stack Memory

- What is stored in the **stack**?
    - Local variables
    - Whatever is defined inside the function

> [!def]+ Variable
> - A label for a ==location in memory==

- `*pt = 30;`
    - **Dereferencing** the pointer
    - Follow the pointer i.e., follow the address value stored at `pt`
    - Assign that value to 30 at the followed address
- & Pointers are ==8 bytes==
    - 64 bits
- & An array  `a` is *not* a pointer!
    - It is technically an array
    - The name of the array can be used as a pointer to the 0$^{th}$ element of the array
        - (In expression context)
    - We cannot change the value of `a` because it is an array!
        - i.e., You cannot change the value of an array
        - i.e., You can’t do `a = 1;` after `int a[4];`
    - `&a[0] == a`
- ? When we declare an array, are we declaring a pointer to the array?
    - No. You’re declaring an array
    - But you can also use the name of the array as a pointer to the 0$^{th}$ element of the array
- `*(a + 1) = 3`
    - Add 1 to the address of array `a`
    - `*` Dereferences to the value at that address
        - Another way to access `a[1]`
    - Whenever you do pointer arithmetic, it takes into context the type of the pointer
