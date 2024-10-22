---
{"dg-publish":true,"permalink":"/100-academia/csc-236/02-algorithm-analysis/recursive-correctness/","tags":["#lecture","#note","cs","todo","university"],"created":"2024-10-08T16:53:54.252-04:00","updated":"2024-10-22T13:28:12.601-04:00"}
---


- **Precondition**
    - *Assumed* to be true before code runs
    - Intention: Describes what is a “*valid input*”
    - Wanted: *Weak* (few constraints)
        - If we had a strong constraint e.g., input must be 20, then what’s the point?
        - Want the minimum required
- **Postcondition**
    - Must *prove* after code runs
    - Intention: “*Expected*” output/outcome
    - Wanted: *Strong*
        - Want to say as much as possible

> [!important]+ Every piece of code you write has a *contract*
> - Only have to worry about inputs that meet the precondition
> - For all of those inputs, you need to make sure the ==post-condition is true== at the end

- **Correctness**
    - For *each* input that satisfies the precondition, the ==algorithm terminates==
        - i.e., No infinite loop/recursion
    - And when it does, the ==post-condition *holds*==

# Example

Implementing the Quotient-Remainder Theorem from [[100 Academia/CSC236/02 Algorithm Analysis/Well-Ordering#Example. Quotient Remainder Theorem\|well-ordering]].

```python title:"Quotient-Remainder Theorem"
# Pre(n, d): n in naturals, d in positive naturals
# Returns (q, r) s.t. Post(n, d, q, r):
#    (1) q, r in naturals 
#    AND (2) r < d 
#    AND (3) n = qd + r
def QR(n, d):
    q, r = 0, n  # Starting point: Satisfies (1) and (3) of Post
    while r >= d:  # Make r smaller
        q = q + 1
        r = r - d
    return (q, r)
```

- Implemented this idea we had from the proof of the Quotient-Remainder Theorem
    - Can always start from remainder = $n$
    - Then $(0, n)$ satisfy $n = qd + r$ because $d \neq 0$
    - Idea in the proof was:
        - If remainder $r \geq d$, can subtract $d$ from $r$ and adding $1$ to $q$
        - Carry out this process until we hit the condition that we want
- “I have an algorithm, and I know where it came from. I’m doing this because I know it makes sense. How do I formalize what it means for this algorithm to be correct, and how do I prove that?”
    - State clear pre/post-conditions

> [!question]+ Why does this work? How do we prove?
> - Proof will overlap proof in [[100 Academia/CSC236/02 Algorithm Analysis/Well-Ordering\|quotient-remainder theorem]]
> - Difference:
>     - In QRT, we were proving that $q, r$ *exist*
>     - Here, we have to not only prove that $q, r$ exist, but $q, r$ that we found *works*
>     - ==Make sure $q, r$ are correct==

# Tool: Loop Invariants

- A loop invariant is a way to keep track of what you are doing, and so on, that helps you write a correct loop
- **Loop invariant**
    - Any statement about or predicate of the program variables that is true
        - Just before every loop iteration begins, or equivalently,
        - Just after each loop iteration ends

```python title:"Quotient-Remainder Theorem"
# Pre(n, d): n in naturals, d in positive naturals
# Returns (q, r) s.t. Post(n, d, q, r):
#    (1) q, r in naturals 
#    AND (2) r < d 
#    AND (3) n = qd + r
def QR(n, d):
    q, r = 0, n
    
    # I(n, d, q, r) - We assert is true at [*]
    while [*] r >= d:  
        q = q + 1
        r = r - d
    return (q, r)
```

- [*] `I(n, d, q, r)`
    - Something that depends on all program variables
    - Something that we assert at the beginning of the loop
- In `q = q + 1`, `r = r - d`:
    - Each variable is being used in two different ways
    - Once to *get* value of variable
    - Once to *update* value of variable
- ==When you have a loop → You have a sequence==
    - More than one value that the loop variables take on

# Loops and Sequences

- `q, r = 0, n`
- Is `r >= d`?
- If it is → Run loop body:
    - `q = q + 1`
    - `r = r - d`
- Then, go back to condition: `r >= d`?
- If it is → Run loop body:
    - `q = q + 1`
    - `r = r - d`
- `r >= d`?

> [!tip]+ Index these variables
> - Something that you make up for your own convenience
> - Not apart of the code!
> - Part of how you keep track of and refer to the value of a variable at different points of the execution
>     - Value changes → Cannot say `r = …`
>     - Which `r` are you talking about?
>     - → ==Use indexing==

![](https://i.imgur.com/IQOPuiJ.png)

- [*] $r_{k} =$ value of $r$ at the end of $k$ complete iterations
    - Special case $k = 0$ means before you start the loop
    - $r_{0}$ is before you do the loop body once, and
    - $r_{1}$ is before you do the loop body a second time, and so on

> [!obs] This gives us notation we can use to refer to the values of variables at different points during the execution

![](https://i.imgur.com/dFFhe2B.png)

> [!question]+ How do we figure out what is true at the point of the loop invariant?
> - ==Look at pre and post conditions==
> - Whole point of invariant is to prove the post conditions
> - Not going to be able to grab the whole post-condition and make it the invariant
>     - Are things that are true at end of algorithm that are not true half way through
>     - e.g., $r < d$, or else the loop would be pointless (condition would always be false)
>         - Whole point of loop is to step through various possible remainders to make them smaller and smaller until eventually we reach $r < d$
>         - But not part of the invariant

## Coming up with *Good* Invariants

1. Look to post condition
    - Invariant *supports* proof of Post
2. Trace
    - ![|400](https://i.imgur.com/w6aJMPj.png)
    - Did not include `d` and `n` because they are constant/do not change
    - Tracing expressions vs. tracing values
        - Did not instantiate values here; more abstract

- Want to say $n = qd + r \implies r = n - qd$
    - Which is what we found when we traced
- *and* $q, r \in \mathbb{N}$
    - If we didn’t include, there is no formal way to prove that this is true after some number of iterations
    - Need to talk about each iteration → Is an invariant

- [*] Define $I(n, d, q, r): q, r \in \mathbb{N} \wedge n = qd + r$:

```python title:"Quotient-Remainder Theorem"
# Pre(n, d): n in naturals, d in positive naturals
# Returns (q, r) s.t. Post(n, d, q, r):
#    (1) q, r in naturals 
#    AND (2) r < d 
#    AND (3) n = qd + r
def QR(n, d):
    q_0, r_0 = 0, n
    
    # I(n, d, q, r): q, r are in naturals AND n = qd + r
    while [*] r_k >= d:  
        q_{k+1} = q_k + 1
        r_{k+1} = r_k - d
    return (q, r)
```

> [!question]+ How do we know if this is a good loop variant?
> A good loop invariant…
> 1. Helps prove the post condition
>     - when the loop ends (==assumption==)
> 2. Is invariant → Check that it is actually *is* invariant
>     - Otherwise, proving something based on fallacy (bad!)
> - Doesn’t matter what order this is proved in, but recommended to check if it proves Post first
>     - Typically, that is where you find out you are missing something in invariant → Don’t know enough to conclude Post
>     - Want to find that out before you spend time proving it is invariant

1. Assume loop ends.
    - When the loop ends, we know:
    - $r < d$ (from negation of loop condition), <u>and</u>
    - $I: q, r \in \mathbb{N} \wedge n = qd + r$
        - (from loop invariant)
    - $\therefore Post(n, d, q, r)$
2. Check that it actually *is* invariant:
    - ![](https://i.imgur.com/XfyX9rj.png)
    - At the very beginning, $I_{0}$ is true
    - If you can prove $I_{k + 1}$, then you are done
    - Whenever $I_{k}$ is true and there is one more condition ($r_{k} \geq d$), $I$ ends still true
    - Coming back for the next iteration, $I$ is still true
    - This is [[100 Academia/CSC236/01 Induction/Simple Induction\|Simple Induction]]

35:35