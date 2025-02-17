---
{"dg-publish":true,"dg-path":"academia/CSC209/3 Advanced Features of C/System Calls.md","permalink":"/academia/csc-209/3-advanced-features-of-c/system-calls/","tags":["cs","lecture","note","university"],"created":"2025-02-11T00:41:37.363-08:00","updated":"2025-02-11T00:48:02.757-08:00"}
---


# System Calls

> [!def]+ System call
> - A function that requests a service from the operating system

- % `void exit(int status)`
    - Request to OS to terminate program
    - When called:
        - OS executes instructions to clean up data structures that represent the running process
        - Terminate the process
- % Low-level calls `read` and `write` are system calls
    - `scanf` and `printf` use `read` and `write` in their implementation
        - Higher-level

```c
#include <stdio.h>
#include <strings.h>

int main() {
    char *str = "Hello World";

    // This should print "The length of Hello World is 11":
    printf("The length of %s is %lu\n", str, strlen(str));
    
    return 0;
}
```

- `printf`
    - Library function that executes several helper functions before calling the right system call
    - ![|490x299](https://i.imgur.com/RIBnM1o.png)
