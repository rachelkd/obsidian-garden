---
{"dg-publish":true,"dg-path":"academia/CSC258/7 Assembly Language/Designing Assembly Code.md","permalink":"/academia/csc-258/7-assembly-language/designing-assembly-code/","tags":["cs","lecture","note","university"],"created":"2025-04-12T20:09:42.230-04:00","updated":"2025-04-12T22:28:43.670-04:00"}
---


# Designing Assembly Code

## Making Sense of Assembly Code

- [[100 Academia/CSC258/7 Assembly Language/Arrays and Structs\|Last time]]:
    - Had two arrays called `A` and `B`
    - How do we declare them? How do we iterate through the elements of `B` and put them into `A`
    - $ Used a lot of registers for this code
- Assembly language look sintimidating
    - Programs involve a lot of code

> [!tip]+ Key to reading and designing in assembly code
> - *Recognizing* portions of code that represent *higher-level operations* that you are familiar with

## Array Code Example

![](https://i.imgur.com/jWAPQOS.png)

- ? How did we create our solutions?

> [!tip]+ First stage
> - **Initialization**
>     - Store locations of `A[0]` and `B[0]`
>         - In `$t8`, `$t9`, for example
>     - Create a value of `i($t0)` and set it to zero
>     - Create a value to store the max value for `i`, as a stopping condition
>         - In `$t1`, in this case

- Think about all the variables that you need to have
    - All the registers you need in order to make this simple program happen
    - Need to think in advance
        - To anticipate how many you will need
- & Best to initialize all the registers that you will need at once
    - Even ones that do not have variable names in the original code

> [!tip]+ Second stage
> - **Main processing operation**

- Fetch source `B[i]`
    - Get address of `B[i]` by adding `i * 4` to the address of `B[0]`
        - Which is stored in `$t8`
    - Load value of `B[i]` from that memory address
        - In `$s4`
- Ready destination `A[i]`
    - Same steps as for `B[i]`, but address is stored in `$t4`
- Add 1 to `B[i]`
    - Storing result in `$t6`
- Store this new value into `A[i]`
    - Same as fetching a value from memory, but in reverse
- Increment `i` to the next offset value
- Loop to the beginning if `i` has not reached its max value

## Loop Exercise

![](https://i.imgur.com/rz7fTdR.png)

![](https://i.imgur.com/4aPJvKk.png)
