---
{"dg-publish":true,"dg-path":"academia/CSC258/1 Transistors/Midterm Short Answer Questions.md","permalink":"/academia/csc-258/1-transistors/midterm-short-answer-questions/","tags":["lecture","note","university"],"created":"2025-01-13T13:17:36.138-05:00","updated":"2025-01-27T13:37:52.502-05:00"}
---


# Midterm Short Answer Questions

## Transistors

From Week 2

> [!question]- True or False? If you increase the resistance of a circuit, the current increases.
> - False

> [!question]- Which transistor connects the source and drain when the gate input is high?
> - nMOS

> [!question]- Materials are either conductors, insulators, or…
> - Semiconductor

## Combinational Circuit Design

From Week 3

> [!question]+ How can you express a two-input XOR gate as a combination of NAND and NOT gates?
>
> | A   | B   | Y   |
> | --- | --- | --- |
> | 0   | 0   | 0   |
> | 0   | 1   | 1   |
> | 1   | 0   | 1   |
> | 1   | 1   | 0   |
>
> - Two NOT gates, two AND ands connecting $\overline{A} B$ and $A \overline{B}$, then take two terms in OR gate to output $Y$
>     $$
>     \begin{align}
>     Y & = \overline{A}B + A \overline{B} \\
>      & = \overline{\overline{\overline{A}B}} + \overline{\overline{A\overline{B}}} \\
>      & = \overline{\left( \overline{\overline{A}B} \right) \cdot \left( \overline{A\overline{B}} \right) } && (\text{De Morgan's})
>     \end{align}
>     $$
> - De Morgan’s: $(\overline{W} + \overline{Z}) = (\overline{WZ})$

> [!question]+ How can you implement a NOT gate from a 2-input AND gate?
> - Write $Y$ in SOM form

> [!question]+ Given the minterms below, can you fill in the truth table on the right?

> [!question]+ What is the most reduced boolean expression, in SOP form, of the function from the truth table?
> ![|300](https://i.imgur.com/Xq3rbLo.jpeg)

|                              | $\overline{C} \, \overline{D}$ | $\overline{C}D$ | $CD$           | $C \overline{D}$ |
| ---------------------------- | ------------------------------ | --------------- | -------------- | ---------------- |
| $\overline{A}\,\overline{B}$ | 1 @                            | 1*              | 0              | 1 @              |
| $\overline{A}B$              | 0                              | 1* $\heartsuit$ | 1 $\heartsuit$ | 0                |
| $AB$                         | 0                              | 1* $\heartsuit$ | 1 $\heartsuit$ | 0                |
| $A\overline{B}$              | 1 @                            | 1*              | 0              | 1 @              |

- $Y = \underbrace{ \overline{C} D }_{ \text{Vertical column} } + \underbrace{ BD }_{ \text{Middle box} } + \underbrace{ \overline{B} \, \overline{D} }_{ \text{Corners} }$

## Logical Devices

From Week 4.

**Question 1.**

> [!question]+ How do you write the unsigned number 78 as an 8-bit binary number?
>
> - Divide 78 by 2 repeatedly
> - Remainder will fill in digits from right to left
> - $0100\,1110$

> [!question]+ What is the two’s complement of $0110\,1101$?
>
> - One’s complement + 1:
>     - $1001\,0010 + 1 = 10010011$

> [!question]+ What is the sum of $0110\,1101$ and $0110\,1101$?
> - Multiply by 2, shift it over to the left?
> - $1101\,1010$

**Question 2.**

> [!question]+ What groupings are in the K-map?
>
> |                                   | $\overline{C} \cdot \overline{D}$ | $C \cdot \overline{D}$ | $C \cdot D$    | $\overline{C} \cdot D$ |
> | --------------------------------- | --------------------------------- | ---------------------- | -------------- | ---------------------- |
> | $\overline{A} \cdot \overline{B}$ | ==1 $\heartsuit$==                | 1 $\heartsuit$         | X $\heartsuit$ | ==1 $\heartsuit$==     |
> | $A \cdot \overline{B}$            | ==X==                             | 0                      | X              | ==1==                  |
> | $A \cdot B$                       | ==1==                             | X                      | X              | ==1==                  |
> | $\overline{A} \cdot B$            | ==1==                             | X                      | 0              | ==X==                  |

**Question 3.**

![|150](https://i.imgur.com/nuoVtlQ.png) ![|150](https://i.imgur.com/NdRHc4B.png)

> [!question]+ How would you implement the $A > B$ output of the 2-bit comparator above out of 1-bit comparators and a minimal number of gates?
> ![|300](https://i.imgur.com/lkcfGiW.jpeg)
>
> ![|300](https://i.imgur.com/DCfO0H7.jpeg)
