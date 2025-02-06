---
{"dg-publish":true,"dg-path":"academia/CSC258/4 Sequential Circuits/Sequential Circuit Design.md","permalink":"/academia/csc-258/4-sequential-circuits/sequential-circuit-design/","tags":["cs","lecture","note","university"],"created":"2025-02-01T19:56:05.719-05:00","updated":"2025-02-03T04:56:10.775-05:00"}
---


# Sequential Circuit Design

![](https://i.imgur.com/tqEIJvq.png)

Now that we know about flip-flops and what they do:

- ? How do we use them in circuit design?
- ? What is the benefit in using flip-flops in a circuit at all?

## Aside: Timing Considerations

### Flip-Flop Timing

> [!info] The assumption is that whoever is using a flip-flop is using it properly.
> - Input *should not* be changing at the same time as the active edge of the clock
> - Otherwise, you create a **race condition**
>     - Whichever gets there first has an effect on the output value

- **Setup time**
    - Input should be stable for some time before active clock edge
- **Hold time**
    - Input should be stable for some time immediately after the active clock edge

### Maximum Clock Frequency

![](https://i.imgur.com/y3lkuno.png)

- Time period between two active clock edges:
    - Cannot be shorter than **longest propagation delay** between any two flip-flops and **setup time** of the flip-flop
    - & Make sure that your circuit has updated itself fully before putting the next clock cycle in
- If you over-clock your PC:
    - i.e., Tune clock to be faster
    - → Buffer time reduces

## Resetting Inputs

- Flip-flops have unknown state when they are first powered up
    - @ Need a convenient way to initialize them
- **Reset signal**
    - Resets flip flop output to be 0
    - Unrelated to $R$ input of SR latch
- **Synchronous reset**
    - Output is reset to 0 only on the ==active edge of the clock==
- **Asynchronous reset**
    - Output is reset to 0 ==immediately== (as soon as asynchronous reset signal becomes active), ==independent of the clock signal==

## Example 1: Registers

- Recall [[100 Academia/CSC258/3 Logic Devices/Adder Circuits\|adders]]:
    - Takes multi-bit binary numbers
    - Adds them together
    - Result comes out

> [!goal] When you do a calculation, you probably want to store your output somewhere.

### Shift Registers

![](https://i.imgur.com/ORkXTWE.png)

- **Shift register**
    - A series of D flip-flops
    - Can store a multi-bit value
        - e.g., 16-bit integer
- Data can be *shifted* into this register one bit at a time
    - Over 16 clock cycles
    - e.g., If you are trying to send in a 16-bit number, you are going to have to wait 16 clock cycles to get each bit of the number in

![](https://lastminuteengineers.com/wp-content/uploads/arduino/74HC595-Shift-Register-Working.gif)

<u>Example</u>. Shifting in $0101\,0101\,0101\,0101$

![](https://i.imgur.com/4fdTPqP.png)

### Load Registers

- **Load register**
    - Load a register’s values all at once by feeding signals into each flip-flop

![](https://i.imgur.com/fhFb6lr.png)

*A 4-bit load register.*

> [!obs]+ You have all these registers; you want to be able to tell which registers to load, and which not to load.
> - Introduce the **D flip-flop with enable**

![](https://i.imgur.com/CK90iSp.png)

- **D flip-flop with enable**
    - Control when this register is allowed to load its values

![](https://i.imgur.com/ZZQxpsJ.png)

- Implement the register with these special D flip-flops:
    - → Maintain values in register until overwritten by setting EN high
