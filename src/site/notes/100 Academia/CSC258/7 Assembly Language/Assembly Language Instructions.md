---
{"dg-publish":true,"dg-path":"academia/CSC258/7 Assembly Language/Assembly Language Instructions.md","permalink":"/academia/csc-258/7-assembly-language/assembly-language-instructions/","tags":["cs","lecture","note","university"],"created":"2025-03-17T15:09:56.191-04:00","updated":"2025-03-17T18:21:07.460-04:00"}
---


# Assembly Language Instructions

> [!summary]- Last time
> - Introduced the idea of assembly language
> - Talking first about machine code
> - Machine code
>     - The thing that has all the information the datapath needs to do its operations
> - Assembly language
>     - A way to be able to express exactly what is in machine code
>     - In a way that is easier for humans
>     - More intuitive in terms of:
>         - Labels of the operations
>         - Expressing what registers or data you are working with
> - In the end:
>     - A line in assembly code translates to a 32-bit instruction machine code

- @ Introduce all assembly language instructions
    - Machine code instructions:
        - Encapsulate all information that control unit needs
            - In the form of an opcode
        - Information that ALU needs
            - R-type instructions
        - Register addresses
    - How does assembly language express these machine code instructions?

## Arithmetic Instructions

![](https://i.imgur.com/TTrOLja.png)

- $ Four versions of `add`
    - Regular `add`
        - Assumes two signed numbers
    - `addu`
        - Assumes we are doing *unsigned* operation
        - Needed because there are conditions that will cause overflow in signed arithmetic
            - Different from unsigned arithmetic
        - In unsigned arithmetic:
            - Overflows when you get a number that is all ones (biggest number) and you need to go beyond that
        - Signed arithmetic:
            - All ones is considered -1, so going one higher gets you to 0
    - `addi`
        - `i` means *immediate*
        - Constant involved
    - `addiu`
        - Unsigned immediate operation
- If operation is I-type or J-type:
    - Second column is an *opcode*
- & All R-type operations have opcode $000000$
    - Second column is the function (last 6 bits in machine code instruction)

> [!note]- Syntax
> - Expecting those arguments (separated with space) after the instruction and space
>     - e.g., `add $d $s $t`

> [!note]+
> - **hi:lo**
>     - Refer to the *high* and *low* bits referred to in the register slide
>     - Multiplication:
>         - Length of the product is the same number of bits of both operands added together
>             - e.g., If you had 2 4-bit inputs in Lab 4, result had to be 8 bits long
>     - If you have two 32-bit inputs, there is no register that can store a 64-bit value
>     - Processor has two registers called *high* and *low*
>         - & Act as the upper and lower half of multiplication result
>     - Multiplication has no destination register
>         - Puts result in these high and low registers
>     - Division:
>         - Puts quotient in low
>         - Puts remainder in high
> - **SE**
>     - Sign extend
>     - `i` is 16-bits long
>     - Need to sign extend to add `i` to a 32-bit number

### Assembly → Machine Code

> [!question] What happens when you create an assembly language instruction?

![](https://i.imgur.com/1edDBW0.png)

- Recall:
    - All 32 registers have a name
    - `t` registers indicate *temporary* registers
        - Things you use to do rough work to build up this calculation
        - When done, can put results in memory
        - Meant to trash them as you see fit
        - Most of what you do use these `t` registers
- Left operation is what you *want* to do
- Right assembly code is how you express the operation in assembly
    - `add destination, source, source`

> [!question] How do we translate this assembly code into machine code?

![](https://i.imgur.com/LDRZSDW.png)

- Know that `add` is R-type
    - Know that it is broken down like the image above
- First six digits is opcode $000000$
    - Since R-type
- Last six bits is $100000$ (function code)
- After opcode, it is broken down into 5, 5, and 5
    - For two source registers and one destination

### R-type vs. I-type Arithmetic

| R-type          | I-type  |
| --------------- | ------- |
| `add`, `addu`   | `addi`  |
| `div`, `divu`   | `addiu` |
| `mult`, `multu` |         |
| `sub`, `subu`   |         |

- In general:
    - Some instructions are **R-type**
        - Meaning all operands are *registers*
    - Some are **I-type**
        - Meaning they use an *immediate*/*constant* value in their operation
- `addi`, `addiu`:
    - Have one input from register
    - One input from instruction itself
    - Instruction would send its value around the register file and into ALU directly
        - After sign-extending from 16-bit to 32-bit

<!-- break -->
- % Cannot multiply or divide constants in a single instruction
    - Need to take `addi`; add constant 0; put it in one of the registers
    - Then call `mult` on the register
    - Not including `multi` is a design choice
        - MIPS is a part of RISC architecture
        - If you could do `multi` using two instructions, there is no need for it to be in a single one

### Assembly → Machine Code II

![](https://i.imgur.com/Iu9IMsY.png)

- If you have an operation where you want to add a constant to one register:
    - Must use `addi`
        - The instruction that takes in one destination and one source
        - And a constant value
    - Cannot use `add`
- % Constant can only be a 16-bit number
    - If need to use 32 bits for constant:
        - Need to do some fancy processing
            - Take in the first 16 bits
            - Then shift
            - Then load the next 16 bits

## Logical Instructions

![](https://i.imgur.com/nCs0Jqq.png)

- **ZE**
    - Zero extend
    - Pad upper bits with 0 value
- ? How to do NOT?
    - Use `nor` to do a NOT operation
    - `X nor 1`
- % These are all *bitwise* operations

## Shift Instructions

![](https://i.imgur.com/UB4LNvz.png)

- Each letter in instruction stands for a word
    - `s`
        - Shift
    - `l`/`r`
        - Left/right
        - Talks about direction
    - `l`/`a`
        - Logical/arithmetic
- Arithmetic shifts
    - Involve the sign
    - If shifting to the right and number is negative:
        - Need arithmetic shift to maintain negative numbers if original was negative
        - Shift it to the right, and put the sign in the empty spot (MSB)
- There is no arithmetic shift for shift left
    - Only reason you need to use arithmetic is to maintain the sign of the number
    - Only happens when shifting right
    - Shift left just adds 0s on the right

- `sra`
    - Make sure the first bit that comes in on the left is the sign bit
        - → Maintain negative numbers if original number was negative
- `sll`
    - “This is not a number; this is just a bunch of 1s and 0s”
    - Shift left and fill empty spots with 0s
- `v`
    - Denotes a *variable* number of bits
        - Specified by `$s`
    - Says: the amount to shift will not be in the instructions, but in the register
    - `a` is a *shift amount*
        - Stored in `shamt` when encoding R-type machine code instructions

- % The majority of the reasons why people shift is to do multiplication and division by 2
    - Faster, easier than using giant multiplication circuit
    - That is why default `>>` (right shift) is *arithmetic*

## Data Movement Instructions

- Recall:
    - Result of multiplication and division is stored in two registers — low and high — *external* to the 32 registers you have access to
    - Cannot refer to them as parameters to any of the other instructions
        - e.g., `add` on low, `sub` from high
- Need something like a getter method for these two registers

![](https://i.imgur.com/WyonqAA.png)

These are the **R-type** instructions for operating on the HI and LO registers described earlier.

- `mfhi`
    - Move from high
    - Put the result in `$d`
- `mflo`
    - Move from low
    - Put result in `$d`
- `mthi`
    - Move to high
- `mtlo`
    - Move to low
- % Not really a good reason for why you would need to use `mthi` and `mtlo`
    - But they exist

## ALU Instructions

> [!note]+ Most ALU instructions are *R-type* instructions.
> - Six-digit codes in the tables are therefore the function codes
>     - Opcodes are $000000$
> - *Exceptions* are the **I-type** instructions
>     - `addi`, `andi`, `ori`, etc.

> [!important]+ Not all R-type instructions have an I-type equivalent.
> - RISC architectures dictate that an operation does not need an instruction if it can be performed through multiple existing operations
> - e.g., `addi + div -> divi`
