---
{"dg-publish":true,"dg-path":"academia/CSC258/6 Processors/Instruction Architecture.md","permalink":"/academia/csc-258/6-processors/instruction-architecture/","tags":["cs","lecture","note","university"],"created":"2025-03-12T01:00:58.945-04:00","updated":"2025-03-12T13:56:43.436-04:00"}
---


# Instruction Architecture

## Understanding Instructions

- **Instructions**
    - 32-bit binary strings that encode:
        - The operation to perform i.e., **opcode**
            - First 6 bits
        - Other details needed to perform it
            - Remaining 26 bits

> [!note]+ For 64-bit architectures:
> - Instructions are **64** bits long

- Recall:
    - 32-bit processor dictates how big register is
        - Each data value is 32-bits long
    - 64-bit processor says each data value is 64-bits long
- Instructions have this same
    - How big your processor is dictates how wide your registers are
- % We will stick to the 32-bit architecture (to make things for managable)

Other details:

- ? Where are instructions and data values stored?
    - **Main memory**
        - Part of the reason why Big-O analysis counts every time you access a variable or call a function
            - Accessing a variable → accessing something from memory and how expensive it is
            - Executing a function → going into the instruction part of memory → pulling one of these instructions and executing that
    - **Stack** is also stored in memory too
        - More on stack later
- & Instructions are stored *separately* from data values
    - Often identified as the **==`.text`==** segment of memory
- Data values occupy the rest of memory
    - **==`.data`==** segment
- & First instruction to be executed in a program is usually identified with a label **==`main:`==**

> [!important]+ We are using *memory* to store *instructions*.
> - Need to consider instruction execution

## Instruction Execution

In addition to doing whatever operation we are meant to do, we need to do **instruction execution** every time we want to go back to the start state in our [[100 Academia/CSC258/6 Processors/The Control Unit\|control unit]] FSM.

- Responsible for loading up our opcode
- Need to make sure that this is part of the steps of every operation
    - No matter what that operation may be

> [!important] All programs are translated into a sequence of instructions.

To execute these instructions, the control unit continually does the following steps:

1. **Instruction fetch**
    - Bring the next instruction from memory and place it into the *instruction register*
        - i.e., Load the next instruction from memory and store it somewhere that will feed in the opcode to our control unit
        - i.e., Fetch this instruction from memory → put it into our instruction register
            - Will immediately send opcode value to control unit
            - So opcode is ready when we go back to start state (step 2)
2. **Decode instruction**
    - Based on the instruction’s type, determine what operation to perform
    - i.e., Once it is in the instruction register, it will feed an opcode value into control unit and go back up to start state
        - New opcode will tell us what to do (step 3)
3. **Execute instruction**
    - Read the values (contents) of any registers needed from the register file
    - Perform any computations needed in the ALU
    - Access memory if we need to read or write data
    - Write back any data that needs to be stored in memory or registers
    - i.e., With this new opcode → Will know which branch to go down
        - → Go down this branch
        - → Does all the operations
        - Last thing it needs to do is fetch the next instruction
        - Needs to update control unit’s concept of what its current instruction is
            - Have something that is looking at instructions and move to the next one (step 4)
4. **Move** (or jump) to the next instruction in memory
    - If there is a location in memory that control unit is looking at, it needs to update the address of its instruction to look at the next one in the sequence
    - Then back to step 1

These steps lead us to this diagram:

![](https://i.imgur.com/yPH1Qpm.png)

- Recognize some parts of this diagram:
    - Registers in the center
    - Memory is the whole thing on the left
    - ALU is on the right
    - Registers feed into ALU
        - Value can come back into the registers, or
        - Send value to memory (in data memory)
- Now, we are just saying:
    - & Memory can store *instructions* we want to execute as well
        - In addition to data
- Need to be able to fetch an instruction (from instruction memory)
    - → Put it into our instruction register (in the middle)
    - As soon as it is loaded into instruction register:
        - Opcode (first 6 bits) will go into control unit
    - → Control unit will send more signals to tell it to what to do
- $ The instruction register also provides valuable information to the rest of the processor
    - Recall: Have a 5-bit address to tell us source A, B of ALU
        - Who provides this 5-bit address?
            - If writing: where is the address coming from?
        - Data is coming to and from ALU
            - i.e., Register contents are fed into ALU
            - That is fed back to registers
        - ? But what supplies the 5-bit address?
    - & **Instruction registers** tell the registers which registers they are operating on
        - i.e., what ALU source A, B and destination register is going to be
    - & Remaining 26 bits tell registers which registers ALU is operating on, or supply values to ALU directly

## The Program Counter (PC)

> [!info]+ Steps 1 and 4 of instruction execution assume that control unit knows where to find current instruction in memory.
> - Instruction fetch, move (or jump) to next instruction in memory
> - We refer to the address of the instruction in memory
>     - Every time we are done with one instruction, we need to get the next one
>     - → Whatever address of the current instruction was, we need to move to the next instruction address and fetch that
> - Need something that stores address of what instruction we are currently looking at
> - If they are all in sequence in memory, need an address variable that can always be incremented to go from first instruction to next and so on
> - The thing that stores the address is a special register: **program counter**
>     - Just like how instruction register stores instructions

> [!def]+ Program counter
> - Stores the location (memory address) of the current instruction
> - Special register

- When done executing one instruction → Update program counter to increase address stored in there → PC now points to next instruction

![](https://i.imgur.com/520m1il.png)

- Program counter has an address
    - Keeps incrementing every time an instruction is completed
- Instruction register (in middle) stores the instruction
    - But needs something that says *where* the instruction it is going to store is located
- → Address is fetched into instruction register
- → Instruction is fed into control unit

These are just a logical extension of one idea:

- Main idea:
    - Control unit needs to execute more than one instruction
        - More than just what lab 6 does
        - (Which is only step 3 of [[100 Academia/CSC258/6 Processors/Instruction Architecture#Instruction Execution\|#Instruction Execution]])
- Every thing just follows from this idea:
    - Need to have input coming into control unit
        - i.e., Opcode
    - Opcode has to come from somewhere
        - i.e., Instruction register
    - Instruction register stores the current instruction
    - Sequence of instructions is in instruction memory
    - Program counter tells processor where it is in the sequence

## Updating the Program Counter

> [!question]+ How does the program counter get updated? (Step 4 of instruction execution)
> - Usually instructions are executed in *sequential* order
>     - i.e., one after the other

- Need to update the address that PC stores
- ! Does not mean that PC is incremented by one each time
    - We have to say what every address in memory refers to
        - When talking about memory:
            - Has certain amount of address bits and data bits
            - Address bits refer to location in memory
        - ? How big should one location be?
            - A single bit? A full register (32 bits)?
    - & Memory locations are **byte-addressable**
        - Each **byte** has its own unique address
        - One byte = 8 bits
        - A byte is a unit of space that a single memory address refers to
        - A byte is the smallest amount of memory that you want to draw at one time
            - A single bit is silly; too small
            - 8 bits is the smallest
                - % One byte = 8 bits is the length of a single character (ASCII characters)
                    - If reading a character, just pull down one byte — one location in memory
                - % Integers are 32 bits long (Can store up to $2^{32} - 1$)
- If you are trying to pull down a string (a series of characters in a row):
    - Would get memory location 0, 1, 2, 3, …
- If you are trying to pull down an integer:
    - Would pull down 4 bytes at a time
    - Integer is 32 bits long
    - If every location stores 8 bits, to pull down an integer, you need to store *four* successive locations in memory
        - Since one location is one byte = 8 bits, so four memory locations can store one integer
- Since instructions are 32 bits long (4 bytes):
    - & Instructions addresses would be at $0, 4, 8, 12, 16$, etc.

> [!info]+ The program counter needs to be **incremented by 4** each time it needs to fetch the next instruction.
> - Every instruction ends with the PC update and next instruction fetch

- ! Exception to the $+4$ rule:
    - We do not always execute instructions in *sequential* order
        - Think about if-else statements, loops, function calls
    - Two chunks of instructions; do one or the other
        - PC needs to do the next bit, or jump over to do the next chunk after that
- & Some instructions change the PC differently by jumping to locations in memory
- ? How does it jump?
    - & **ALU** needs to calculate the new PC value
    - Branches, jumps, function calls are executed this way
- Recall:
    - One of the signals that the control unit sends is ALU source A, B
    - Source A can say: “I want the first input of ALU to be one of two things: register or program counter”
        - Processor datapath shows a wire from PC to ALU for times you need to update PC to point to next location in memory

![](https://i.imgur.com/PVj6jWh.png)

## Program Counter Integration

![](https://i.imgur.com/Pfar8Wu.png)

- PC feeds into memory unit
    - Tells memory where current instruction is
- Instruction is fetched and put into instruction register
- Instruction register provides 6-bit output which is the control unit opcode input
    - Also provides registers information about what operations are happening
- Final stage:
    - & ALU will take PC and update it to the next location of the next instruction in memory
