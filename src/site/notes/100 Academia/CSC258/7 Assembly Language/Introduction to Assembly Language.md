---
{"dg-publish":true,"dg-path":"academia/CSC258/7 Assembly Language/Introduction to Assembly Language.md","permalink":"/academia/csc-258/7-assembly-language/introduction-to-assembly-language/","tags":["cs","lecture","note","university"],"created":"2025-03-14T13:16:42.416-04:00","updated":"2025-03-16T00:14:37.844-04:00"}
---


# Introduction to Assembly Language

## Programming the Processor

Before we dive into assembly, we do have to remind ourselves how [[100 Academia/CSC258/6 Processors/Instruction Architecture\|instructions]] work.

- ? How do you put information into a 32-bit instruction, so that the processor knows how to do it?
    - Datapath can get whatever information it needs to do the operation it is supposed to do
- Have to understand how machine code instructions are encoded first
- From there:
    - Understand how assembly and language instructions work

> [!info]+ Things you will need to know
> 1. Control unit signals to the datapath
> 2. Machine code instructions
> 3. Assembly language instructions
> 4. Programming in assembly language

## How Things Fit together

![](https://i.imgur.com/MsdkIWa.png)

- Ultimate goal:
    - @ Need datapath signals to go to the processor
        - Tell what things to fetch from, what operations to do, and where to store it
- Datapath signals come from **[[100 Academia/CSC258/6 Processors/The Control Unit\|control unit]]**
- In order for control unit to know which operations it is performing at any time:
    - Needs to have **[[100 Academia/CSC258/6 Processors/The Control Unit#Control Unit Input Opcode\|opcode]]**
        - 6-bit number that tells control unit which branch to take
- Opcode comes from the *instruction*
    - Which is encoded in **machine code**
- Machine code instruction comes from **assembly language**

[[100 Academia/CSC258/7 Assembly Language/Machine Code Instructions\|Machine Code Instructions]]

## Machine Code Instructions

### Intro to Machine Code

### R-type Instructions

> [!question]+ How do we encode the earlier instruction that adds registers `$t1` and `$t2`, and stores the result into register `$t3`?

![](https://i.imgur.com/5QOkSbF.png)

- Opcode $000000$ signals a R-type instructions
    - All involve taking two registers and storing a value from ALU into a third register
    - What happens inside ALU is not known to control unit
- When we *assemble*:
    - → Gets converted into 32-bit instruction
- We have names for each register
    - Based on roles
    - Refer to as `$t1`, `$t2`, `$t3`
        - Instead of the number
- Just because we have 32 registers, it does not mean that we can use all 32 registers
    - Some need to be set aside for special purposes

#### Machine Code and Registers

> [!info]+ MIPS is **register-to-register**.
> - Almost all operations rely on register data

MIPS provides 32 registers (with *numerical* and *label* names).

- Registers with special values:
    - Register `$0`
- `$sp`
    - Stack pointer
    - We are going to manipulate the stack

#### Filling in the Blanks

![](https://i.imgur.com/pWHOvTn.png)

### I-type Instructions

- **I-type instructions**
    - Also operate on *registers*
    - But involve a *constant* value as well
        - Constant is ended in the last 16 bits of the instruction

![](https://i.imgur.com/nbgIkGe.png)

### J-type Instructions

- **J-type instructions**
    - Jump to a location in memory encoded by the last 26 bits of the instruction
        - Everything but the opcode
    - Location is stored as a *label*
        - Resolved when assembly program is *compiled*
        - At *compile-time*

![](https://i.imgur.com/tW3L95f.png)

## Assembly Language Overview

### Assembly Language

### A Little about MIPS

### MIPS Instructions

### Frequency of Instructions
