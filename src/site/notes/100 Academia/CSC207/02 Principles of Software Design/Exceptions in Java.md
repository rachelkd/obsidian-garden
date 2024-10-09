---
{"dg-publish":true,"permalink":"/100-academia/csc-207/02-principles-of-software-design/exceptions-in-java/","tags":["#lecture","#note","cs","java","todo","university"],"created":"2024-10-09T01:01:19.136-04:00","updated":"2024-10-09T12:53:22.482-04:00"}
---


> [!goal]- Learning Outcomes
> - Understand how `Exception`s work in Java
> - Be familiar with the `Throwable` hierarchy
> - Know the difference between checked and unchecked exceptions
>     - And when to use each of them

# Throwable Hierarchy

![](https://i.imgur.com/lq7y0Yu.png)

- `RuntimeException`
    - Are predictable
    - If you program correctly and check value of variables → Never get a runtime exception

> [!question]+ A question to think about:
> You’re writing code to read from a file. That file might not exist for whatever reason.
> - Is there a way for you to predict whether the file exists right before you open it, and make sure it still exists when you try to open it?
> - Or, in that millisecond in between, could the user accidentally have deleted the file?
