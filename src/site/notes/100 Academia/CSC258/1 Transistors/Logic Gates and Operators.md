---
{"dg-publish":true,"dg-path":"academia/CSC258/1 Transistors/Logic Gates and Operators.md","permalink":"/academia/csc-258/1-transistors/logic-gates-and-operators/","tags":["cs","lecture","note","university"],"created":"2025-02-19T16:44:45.218-05:00","updated":"2025-02-22T20:57:31.963-05:00"}
---


# Logic Gates and Operators

> [!def]+ Logic gates
> - Hardware equivalent of propositional operators in CSC110
> - Gates determine whether the ==output of a circuit will be on or off== as an expression of the input signals
>     - Like Boolean expressions

> [!info]+ Lab 1
> - Create simple circuits based on logical (Boolean) expressions
> - Display truth tables that show the logical behaviour of these circuits

## AND Gates

![](https://graphicmaths.com/img/computer-science/logic/logic-gates/and-gate.png)

*Truth table for an AND gate, with inputs **A** and **B**, and output **C**.*

- Implemented by components called **transistors**
    - Think of them like switches that connect the left and right when `A` is turned on
- **AND Gate**
    - Accepts two digital signals as input and creates a ==single output==
    - Expects its two inputs to each be *digital signals*
        - i.e., low and high voltages representing values 0 and 1
- Have the property that the output will be 1 if both inputs are 1
    - In all other cases, output will be 0

![|327](https://www.electroniclinic.com/wp-content/uploads/2022/08/logic-symbol-of-AND-gate-scaled.jpg)

## OR Gates

![](https://graphicmaths.com/img/computer-science/logic/logic-gates/or-gate.png)

## NOT Gates

- Has ==one input== A and one output B
    - B is the opposite of A
- Called an *inverting gate*
    - Output is the inverse of the input

![](https://graphicmaths.com/img/computer-science/logic/logic-gates/not-gate.png)

- Small circle on the output of the gate
    - Indicates that it is an *inverting gate*

## XOR Gates

- An *exclusive* **OR gate**
    - Output C will be 1 if A or B, but ==not both==
    - 0 if both A and B are 0
    - 0 if both A and B are 1

![](https://graphicmaths.com/img/computer-science/logic/logic-gates/xor-gate.png)

## NAND Gates

- *Inverting gate* based on the AND function
- Short for “NOT AND”
    - Functions like an AND gate followed by a NOT gate

![](https://graphicmaths.com/img/computer-science/logic/logic-gates/nand-gate.png)

- Output is 0 if both inputs are 1
- Output is 1 for all other values
- → Exact inverse of an AND gate

## NOR Gates

![](https://graphicmaths.com/img/computer-science/logic/logic-gates/nor-gate.png)

## XNOR Gates

![](https://graphicmaths.com/img/computer-science/logic/logic-gates/xnor-gate.png)

## Buffer

![](https://i.imgur.com/bs6idCl.png)

![](https://i.imgur.com/HtZ1JRI.png)

- Week 9 discusses what makes this gate useful
