---
{"dg-publish":true,"dg-path":"academia/CSC258/7 Assembly Language/Passing Function Parameters.md","permalink":"/academia/csc-258/7-assembly-language/passing-function-parameters/","tags":["cs","lecture","note","university"],"created":"2025-04-12T23:53:25.495-04:00","updated":"2025-04-12T23:56:19.733-04:00"}
---


# Passing Function Parameters

## Functions vs. Code

- Since functions have *entry* and *exit* points:
    - Also need *input* and *output* parameters
- In other languages:
    - Parameters are assumed to be available at the start of function
- In assembly:
    - % Have to fetch those values from memory first before you can operate on them
- ? Where do you look for these parameters?

## Common Calling Conventions

- While most programs pass parameters through the stack:
    - & Also possible to use *registers* to pass values to and from programs
        - Registers 2-3: `$v0`, `$v1`
            - Return values