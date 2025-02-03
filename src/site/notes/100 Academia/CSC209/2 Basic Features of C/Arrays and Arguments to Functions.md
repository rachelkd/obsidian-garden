---
{"dg-publish":true,"dg-path":"academia/CSC209/2 Basic Features of C/Arrays and Arguments to Functions.md","permalink":"/academia/csc-209/2-basic-features-of-c/arrays-and-arguments-to-functions/","tags":["cs","lecture","note","university"],"created":"2025-01-16T15:17:43.766-05:00","updated":"2025-02-03T16:56:23.441-05:00"}
---


# Arrays and Arguments to Functions

## Function Calls and Pointers

Consider the following (incorrect) implementation for a function that increases age by one:

```c
#include <stdio.h>

void lie(int age) {
    printf("You are %d years old\n", age);
    age += 1;
    printf("You are %d years old\n", age);
}

int main() {
    int age = 18;
    lie(age);
    printf("But your age is still %d\n", age);
    return 0;
}
```
