---
{"dg-publish":true,"dg-path":"notes/Assembly Language.md","permalink":"/notes/assembly-language/","tags":["cs","lecture","note","university"],"created":"2025-03-14T13:16:42.416-04:00","updated":"2025-03-14T13:36:43.625-04:00"}
---


# Assembly Language

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
