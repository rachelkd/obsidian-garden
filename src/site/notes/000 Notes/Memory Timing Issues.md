---
{"dg-publish":true,"dg-path":"notes/Memory Timing Issues.md","permalink":"/notes/memory-timing-issues/","tags":["cs","lecture","note","university"],"created":"2025-03-07T16:57:46.495-05:00","updated":"2025-03-07T19:47:51.004-05:00"}
---


# Memory Timing Issues

## Register vs. Memory Access

- Unlike registers, memory access can take ==multiple clock cycles== to complete

> [!question]+ Why does memory access require more time?
> - Consider the delays related to flip-flops:
>     - Gate delays
>     - Propagation delays
>     - Setup time
>     - Hold time
> - & Memory units are *physically* distant from the rest of the processor
>     - ! → Bigger delays!

- @ To understand this better, we look at memory read and write operations in more detail

## RAM Memory Signals

> [!summary]+ Inputs
> - **$\text{Read/}\overline{\text{Write}}$ enable**
>     - Or $R / \overline{W}$, or two separate signals
>     - Memory write:
>         - Memory is modified if this signal is *low*
>     - Memory read:
>         - Memory is read if this signal is *high*
> - **Data In**
>     - The data to write i.e., store in memory if $R / \overline{W}$ is *low*

> [!summary]+ Outputs
> - **Data Out**
>     - The data read from memory if $R / \overline{W}$ is *high*

> [!info]+ Additional signals needed for memory units
> Inputs:
> - **Address Port**
>     - Takes in $m$ bits to address $2^{m}$ memory locations
> - **Chip Enable**
>     - Activates memory for read or write
> - **Output Enable**
>     - Accompanies data read
>     - Activates tri-state buffers

### Example: Asynchronous SRAM* Interface

![](https://i.imgur.com/3hzeJjB.png)

- **\*SRAM**
    - Static random access memory
    - Do not need to worry too much about RAM vs. SRAM vs. DRAM vs. SDRAM

| $\overline{\text{Chip Enable}}$ | $\text{Read} / \overline{\text{Write}}$ | $\overline{\text{Output Enable}}$ | Access Type      |
| ------------------------------- | --------------------------------------- | --------------------------------- | ---------------- |
| $0$                             | $0$                                     | $1$                               | SRAM Write       |
| $0$                             | $1$                                     | $0$                               | SRAM Read        |
| $1$                             | $X$                                     | $X$                               | SRAM not enabled |

<!-- break -->
- SRAM takes in an address
- $n$-bit data:
    - Both sending values *in* and *out*
    - Different from how Lab 7 does it
- $\text{Read}/\overline{\text{Write}}$ signal
- $\overline{\text{OE}}$:
    - Indicates if it is actually going to be reading the data signal
- $\overline{\text{CE}}$:
    - More about all of these chips being turned on
    - Cannot turn them all on at the same time
    - Do not need to worry about this signal too much

## Asynchronous RAM: Timing Waveforms

- These signals
    - Have to be managed
    - Need to be sending various signals at various times to make these operations happen
    - & *Timing* is involved here

![](https://i.imgur.com/dXY6tyQ.png)

- & Each memory read and write is done in stages
- & Each stage requires a certain amount of time

## Memory Timing Constraints

- **Data bus** signal
    - Indicates when valid data values are available for reading or writing
