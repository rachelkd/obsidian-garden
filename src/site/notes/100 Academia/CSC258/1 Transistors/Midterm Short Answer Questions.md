---
{"dg-publish":true,"dg-path":"academia/CSC258/1 Transistors/Midterm Short Answer Questions.md","permalink":"/academia/csc-258/1-transistors/midterm-short-answer-questions/","tags":["lecture","note","university"],"created":"2025-01-13T13:17:36.138-05:00","updated":"2025-02-22T22:23:07.207-05:00"}
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

> [!question]+ What gate is created by the following?
> ![|195x264](https://i.imgur.com/P0SWmBZ.png)
>
> > [!check]- Solution
> > - NAND Gate
> >     - AND gate with a NOT gate at the end

> [!question]+ Which gate is this one?
> ![|266x320](https://i.imgur.com/Dw2r0N6.png)
>
> > [!success]- Solution
> >
> > | A     | B     | W   | Y   |
> > | ----- | ----- | --- | --- |
> > | **0** | **0** | 1   | 0   |
> > | **0** | **1** | 0   | 1   |
> > | **1** | **0** | 0   | 1   |
> > | **1** | **1** | 0   | 1   |
> >
> > $W = \overline{A} \cdot \overline{B} = \overline{(A + B)}$
> >
> > - $ The circuit on the right that has input $W$ and output $Y$ is a NOT gate
> >
> > $Y = A + B$

## Combinational Circuit Design

From Week 3

> [!question]+ How can you express a two-input XOR gate as a combination of NAND and NOT gates?
>
> > [!check]- Solution
> >
> > | A   | B   | Y   |
> > | --- | --- | --- |
> > | 0   | 0   | 0   |
> > | 0   | 1   | 1   |
> > | 1   | 0   | 1   |
> > | 1   | 1   | 0   |
> >
> > ![|367x174](https://i.imgur.com/CX99jiL.png)
> > - Two NOT gates, two AND ands connecting $\overline{A} B$ and $A \overline{B}$, then take two terms in OR gate to output $Y$
> >
> > - Recall:
> >     - De Morgan’s: $(\overline{W} + \overline{Z}) = (\overline{WZ})$
> >
> > $$
> > \begin{align}
> > Y & = \overline{A}B + A \overline{B} \\
> > & = \overline{\overline{\overline{A}B}} + \overline{\overline{A\overline{B}}} \\
> > & = \overline{\left( \overline{\overline{A}B} \right) \cdot \left( \overline{A\overline{B}} \right) } && (\text{De Morgan's})
> > \end{align}
> > $$
> >
> > ![|307x147](https://i.imgur.com/Zzapc05.png)

> [!question]+ How can you implement a NOT gate from a 2-input NAND gate?
> ![|337x149](https://i.imgur.com/pWNN17Z.png)
>
> > [!success]- Solution
> > ![|340](https://i.imgur.com/ICS0Lwo.png) ![|340](https://i.imgur.com/fT3VRTr.png)

> [!question]+ Write $Y$ is SOM form.
> ![|216x230](https://i.imgur.com/4AJKKz7.png)
>
> > [!success]- Solution
> > - Have to have four minterms
> >     - One for each output where $Y = 1$
> > - Minterm is an AND expression of all the inputs
> >
> > $$
> > Y = \overline{A} \cdot \overline{B} \cdot C + \overline{A} \cdot B \cdot \overline{C} + A \cdot \overline{B} \cdot \overline{C} + A\cdot B\cdot C
> > $$
> > $$Y = m_{1} + m_{2} + m_{4} + m_{7}$$

> [!question]+ Given the minterms below, can you fill in the truth table?
> ![|388x130](https://i.imgur.com/5lEkbyu.png)
>
> > [!success]- Solution
> > - $Y$ goes high in six cases
> > - Just go down the table and match the minterms to the expression
> >
> > ![|239x353](https://i.imgur.com/JOkBVmY.png)

> [!question]+ What is the most reduced boolean expression, in SOP form, of the function from the truth table?
> ![|232x347](https://i.imgur.com/17OHKT9.png)
>
> > [!success]- Solution
> > - Start off with SOM approach
> >     - $$Y = m_{0} + m_{1} + m_{2} + m_{5} + m_{7} + m_{8} + m_{9} + m_{10} + m_{13} + m_{15}$$
> > - Create Karnaugh map
> >
> > ![|327x201](https://i.imgur.com/UQ9le7Q.png)
> > ![|330](https://i.imgur.com/SvQok0g.png)
> >
> > $Y = \underbrace{ \overline{C} D }_{ \text{Vertical column} } + \underbrace{ BD }_{ \text{Middle box} } + \underbrace{ \overline{B} \, \overline{D} }_{ \text{Corners} }$
> >
> > - An alternative grouping:
> >     - ![|300](https://i.imgur.com/Casqnus.png)
> >     - $Y = \overline{B} \cdot \overline{C} + B \cdot D + \overline{B} \cdot \overline{D}$

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

> [!question]+ What groupings are in the K-map? What logic equations do these groupings represent?
> ![|500](https://i.imgur.com/vN2RCHa.png)
>
> > [!success]- Solution
> > ![|500](https://i.imgur.com/NgqZORO.png)
> >
> > $$\overline{A} \cdot \overline{B} + \overline{C}$$

**Question 3.**

> [!question]+ How would you implement the $A > B$ output of the 2-bit comparator above out of 1-bit comparators and a minimal number of gates?
> ![|150](https://i.imgur.com/nuoVtlQ.png) ![|150](https://i.imgur.com/NdRHc4B.png)
>
> > [!success]- Solution
> > - Consider the implementation of the $A == B$ signal
> >     - ![|300](https://i.imgur.com/FCPsUts.png)
> > - $A > B$ signal follows the same idea
> >     - As soon as you see that the first digit of $A$ is greater than first digit of $B$, then you know $A > B$
> >     - Second case:
> >         - First digits are the same
> >         - Second digit of $A$ is greater than the second digit of $B$
> >     - ![|500](https://i.imgur.com/koi9pny.png)
