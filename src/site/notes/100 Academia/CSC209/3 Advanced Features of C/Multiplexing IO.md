---
{"dg-publish":true,"dg-path":"academia/CSC209/3 Advanced Features of C/Multiplexing IO.md","permalink":"/academia/csc-209/3-advanced-features-of-c/multiplexing-io/","tags":["cs","lecture","note","university"],"created":"2025-03-17T23:19:39.703-04:00","updated":"2025-03-18T01:39:04.750-04:00"}
---


# Multiplexing I/O

## The Problem with Blocking Reads

Recall:
- Some calls (like `read` or `accept` or `write`) can *block* and *wait* for something else to happen before they can complete their task

> [!danger]+ Problem
> - Blocking calls to read from multiple sources
> - Need another system call that can let us know which of those sources are ready for our attention

Suppose we have a parent process that has forked a child.

![](https://i.imgur.com/7jmnEI3.png)

- Before forking:
    - Parent correctly set up a pipe from the child to the parent
- Now:
    - Parent would like to read from the child
- If parent calls read on child’s pipe, and child has not written anything to pipe yet:
    - Read system call *blocks*
        - Parent process does not go on to execute the next instruction
        - Sits and waits for child to write something

![](https://i.imgur.com/A1zBbao.png)

- When child writes some bytes to pipe:
    - Read call returns
    - Parent checks return value to determine that read call succeeded
    - Parent goes on to execute next instruction

![](https://i.imgur.com/XdshclH.png)

- Next instruction:
    - Parent reads from pipe
        - *Blocks* to wait for child
    - Child closes its end of the pipe
    - Read returns
        - Indicates the fact that pipe is *closed* with *return value of 0*

> [!important]+ Read on a pipe blocks until there is something to *read* or until the other end of the pipe is *closed*.
> - When there is action on the pipe:
>     - Either something to read, or pipe gets closed
>     - Read returns
>     - Program returns

Consider the scenario to have two children with a *shared* parent where each child has a pipe to the parent.

![](https://i.imgur.com/DAsU8gs.png)

- @ Parent process would like to read from both children — or really from *with* child — whichever is ready
    - Need to have two different calls to read
- In fact:
    - Probably want to have multiple read calls to each child
        - Since children usually have a lot to say

<!-- break -->
- Suppose we put them in this order:
    - First read from child 1
    - Then read from child 2
    - Then put the whole thing into a loop so we can read lots
    - Works fine if child 1 is ready first, and every time child 1 writes, child 2 also writes

![](https://i.imgur.com/c7Fecbf.png)

> [!question]+ What if child 2 has lots to say and child 1 has nothing to say?
> - Parent will block on the read from child 1
>     - And wait, and wait, and wait…

- Fine if child 2 did not have anything to say either
    - But child 2 has lots to say
    - Perhaps that the pipe to parent might get full
    - → Child 2‘s writes will block
    - ! → *Both* child 2 and the parent are blocked
- ? What if we reorganize to read first from child 2?
    - Parent reads first from child 2 and then child 1
    - As soon as one read to child 2 is complete: Need to read from child 1 again
        - ! Back to the same problem

![](https://i.imgur.com/BSCWijD.png)

> [!obs]+ No matter how we order the read calls, we can always get into a situation where the parent is blocked waiting to read from one child, while the *other* child has data ready to be read.

```c title:read_from_2.c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys/wait.h>

#define MAXSIZE 4096
void handle_child1(int *fd);
void handle_child2(int *fd);

/* A program to illustrate the need for select.
 *
 * The parent forks two children with a pipe to read from each of them and then
 * reads first from child 1 followed by a read from child 2.
*/
int main() {
    char line[MAXSIZE];
    int pipe_child1[2], pipe_child2[2];

    // Before we fork, create a pipe for child 1 
    if (pipe(pipe_child1) == -1) {
        perror("pipe");
    }

    int r = fork();
    if (r < 0) {
        perror("fork");
        exit(1);
    } else if (r == 0) {
        handle_child1(pipe_child1);
        exit(0);
    } else {
        // This is the parent. Fork another child, 
        // but first close the write file descriptor to child 1
        close(pipe_child1[1]);
        // and make a pipe for the second child
        if (pipe(pipe_child2) == -1) {
            perror("pipe");
        }
        // Now fork the second child
        r = fork();
        if (r < 0) {
            perror("fork");
            exit(1);
        } else if (r == 0) {
            close(pipe_child1[0]);  // still open in parent and inherited
            handle_child2(pipe_child2);
            exit(0);
        } else {
            close(pipe_child2[1]);
    
            // This is now the parent with 2 children -- each with a pipe
            //  from which the parent can read.

            // Read first from child 1
            if ((r = read(pipe_child1[0], line, MAXSIZE)) < 0) {
                perror("read");
            } else if (r == 0) {
                printf("pipe from child 1 is closed\n");
            } else {
                printf("Read %s from child 1\n", line);
            }

            // Now read from child 2
            if ((r = read(pipe_child2[0], line, MAXSIZE)) < 0) {
                perror("read");
            } else if (r == 0) {
                printf("pipe from child 2 is closed\n");
            } else {
                printf("Read %s from child 2\n", line);
            } 
        }
        // We could close all the pipes but since program is ending, we will just let
        // them be closed automatically.
    }
    return 0;
}

void handle_child1(int *fd) {
        close(fd[0]);  // we are only writing from child to parent
        printf("[%d] child\n", getpid());
        // Child will write to parent

        // Uncommenting the following while loop will show how child2's written
        // message can be *blocked* by child1:
        
        // while (1) {
        //     // do something
        // } 
        

        char message[10] = "HELLO DAD";
        write(fd[1], message, 10); 
        close(fd[1]);
}
void handle_child2(int *fd) {
        close(fd[0]);  // we are only writing from child to parent
        printf("[%d] child\n", getpid());
        // Child will write to parent
        char message[10] = "Hi mom";

        // This written message will never be processed (read by the parent) 
        // if child1 blocks:
        write(fd[1], message, 10);

        printf("[%d] child is finished writing\n", getpid());
        close(fd[1]);
}
```

- Fork two children
    - Each time: check for errors and respond accordingly
- Before fork:
    - Create a pipe
    - Check for errors
- Declare pipe file descriptors that we need for the pipe calls

![](https://i.imgur.com/NKlF6rd.jpeg)

- Close the ends of the various pipes that we are not using
- Read one time from child 1
    - Print what we read
- Do the same for child 2
- Make one read call then print out what we read

> [!obs]+ When we compile and run the code…
> - Always read message to DAD first
> - Do not know in which order children actually ran
> - But we always make child2 wait and read first from child 1

Add some code to child 1 to keep it busy forever.

- Child 1 does not write anything to pipe
- Also never closes the pipe

![](https://i.imgur.com/VcO9zf4.jpeg)

- $ Both children are executing but the parent is waiting
    - Waiting on child1 to write something to the pipe
    - Child2 has long since written the “hi mom” message
        - But the parent isn’t reading from child 2

> [!danger]+ No matter how we order the read calls, we cannot be guaranteed to not be waiting for one child while the other child has data ready for us to read.
> - `select`
>     - System call
>     - Lets us specify a set of file descriptors
>     - Then blocks until at least one of them is ready for attention
>     - `select` tells us which file descriptors are ready
>         - → Avoid blocking on the non-ready ones

In the next video we will introduce the select system call. Select lets us specify a set of file descriptors and then blocks until at least one of them is ready for attention. Then select tells us which file descriptors are ready so we can avoid blocking on the non-ready ones.
