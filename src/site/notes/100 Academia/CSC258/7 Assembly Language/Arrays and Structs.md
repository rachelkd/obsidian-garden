---
{"dg-publish":true,"dg-path":"academia/CSC258/7 Assembly Language/Arrays and Structs.md","permalink":"/academia/csc-258/7-assembly-language/arrays-and-structs/","tags":["cs","lecture","note","university"],"created":"2025-04-12T19:36:08.486-04:00","updated":"2025-04-12T20:09:25.631-04:00"}
---


# Array and Structs

## Arrays

- **Arrays** in assembly:
    - Stored in *consecutive locations* in memory
    - *Address* of array is the address of the array’s *first element*
- To access *element `i`* of an array:
    - Use `i` to calculate an *offset distance*
    - Add offset to address of first element to get address of `i`-th element
    - `offset = i * size of a single element`
- To operate on array elements:
    - *Load* array values into registers
    - Operate on them
    - Store them back into memory

### Translating Arrays

![](https://i.imgur.com/VO9ji1l.png)

## Example: a Struct Program

![](https://i.imgur.com/AyFE0f4.png)

- Struct
    - Something like an object in Java or Python without all the functions
    - Just a contiguous block of data
    - Useful for storing things like a date
        - Year, month, day
        - Instead of having three variables, use struct for a single date object
        - This is where the offset tends to come in
- `sw` lines:
    - Indicate that values in `$t1` are being stored at `$t0`, `$t0 + 4`, `$t0 + 8`
    - Each previous line sets the value of `$t1` to store
- $ Code stores the values `5`, `13`, `-7` into struct at location `a1`
