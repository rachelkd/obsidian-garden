---
{"dg-publish":true,"dg-path":"academia/CSC258/6 Processors/The Storage Unit.md","permalink":"/academia/csc-258/6-processors/the-storage-unit/","tags":["cs","lecture","note","university"],"created":"2025-03-03T13:14:18.693-05:00","updated":"2025-03-03T19:15:26.246-05:00"}
---


# The Storage Unit

From [[100 Academia/CSC258/6 Processors/Multiplication#Expanding Our View to ALUs\|last lecture]]:


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/academia/csc-258/6-processors/multiplication/#3c093e" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



> [!question]+ Where are these inputs coming from? Where are the outputs going to?
> - [[100 Academia/CSC258/6 Processors/The Storage Unit\|The Storage Unit]]

</div></div>


- Also known as:
    - The **register file**, and
    - **Main memory**

## Memory and Registers

- *Processor* has *registers* that ==store a single value==
    - Program counters, instruction registers, etc.
    - (See [[100 Academia/CSC258/6 Processors/Microprocessors\|Microprocessors]])

![](https://i.imgur.com/NWBK629.png)

- There are also units in the CPU that store *large* amounts of data for use by the CPU:
    - **Register file**
        - Small number of fast memory units that allow multiple values to be read and written simultaneously
        - Short-term storage
        - e.g., Load whatever values you need into register file for a calculation done by ALU
            - When done: Store in long-term storage (main memory)
    - **Main memory**
        - Long-term storage
        - Larger grid of memory cells that are used to store the main information to be processed by the CPU
- Registers are embedded inside of the processor
    - i.e., inside the CPU
    - Would not be able to access the registers directly
    - Only microprocessor can control and access these registers
- As a programmer, you only have access to main memory
    - The memory stick
- The processor fetches values from memory

### Analogy

> [!idea]+ If registers are books:
> - *Register file* is the pile of books on your desk
>     - Small in number, but available for quick access
> - *Main memory* is like a book on campus
>     - If you want information, you have to go to the library, find it, then bring it back home, so you can do everything you need to
>     - Larger capacity, but takes time to access
> - *Hard drive*/*cache* is a book in a library in Ottawa
>     - Need to transport to Ottawa, and bring it back
> - Information from the *Internet* is like getting a book from China

## Register File

> [!def]+ Register file
> - Stores the data that the processes uses for quick calculations

![](https://i.imgur.com/Pbh8lm7.png)


- For the example we use in this course:
    - Typical register file contains **32 registers**
- All registers share a single set of input and output wires
    - Like an apartment building with a single shared entrance

### Writing to Registers

- To write a register:
    - Need to activate the Write signal for the desired register
    - Assume we have the number of the register in this file
        - (From $0$ to $31$ in binary)
    - Number is called the **address** of the register

> [!question]+ Given the register’s address, how do we turn on the write signal for that register?
> - Use a **demux** to specify a single register
>     - Based on that register’s address
> - Also known as a **one-hot decoder**
>
> ![|366x335](https://i.imgur.com/mD6teoZ.png)

- See [[100 Academia/CSC258/3 Logic Devices/Multiplexers#Demultiplexers\|demultiplexers]], [[100 Academia/CSC258/3 Logic Devices/Decoders#^88700d\|one-hot decoder]]

#### One-hot Decoders (for Writing)

![](https://i.imgur.com/1neI6CV.png)


- **One-hot decoder**
    - Takes in a $m$-bit binary address to ==activate one of the $2^{m}$ registers== in the register file
- Registers are individual boxes in a mailroom
    - Look at the number to figure out where mail needs to go

### Reading from Registers

> [!impl]+ Consider the same approach that was used in writing
> - **Multiplexer** with address as select bits
>
> ![|327x343](https://i.imgur.com/uq6Dg62.png)

## Register File Functionality

![](https://i.imgur.com/SwbEYfY.png)

## Electronic Memory (RAM)

- Main difference:
    - While registers are like books on your desk
    - Main memory is like one long street with nothing developed
    - Can be divided into sections
    - Fill up the street with houses, buildings
    - This is **`malloc`**
- `malloc`
    - Says: “I need a section of memory”
    - Looks to find where this is space for a specified number of *bytes*
        - 8 bits
        - A byte is the smallest amount of memory that you can address
            - Smallest parcel of land that you can take on this street
            - Like buying land, there is a minimum size lot that you can buy

## Controlling the Flow

> [!info]+ When reading or writing a memory location, we use the **tri-state buffer** gate
> ![](https://i.imgur.com/t0ZGy3r.png)

| WE  | A   | Y   |
| --- | --- | --- |
| 0   | X   | Z   |
| 1   | 0   | 0   |
| 1   | 1   | 1   |

- **Tri-state buffer**
    - Sets the output to the input, but only when a *third* signal — **write enable** — is high
    - Will physically cut out the output from the input
    - When `WE` write enable signal is low:
        - Buffer output is a **high impedance** signal
            - Output is ==neither connected to high== voltage or to the ==ground==
            - Output $Z$
- Cannot have a lot of values writing to the same place at the same time
    - Need to physically disconnect all values except the one that we want to read/write
#todo
