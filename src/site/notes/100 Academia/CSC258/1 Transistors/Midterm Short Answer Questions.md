---
{"dg-publish":true,"dg-path":"academia/CSC258/1 Transistors/Midterm Short Answer Questions.md","permalink":"/academia/csc-258/1-transistors/midterm-short-answer-questions/","tags":["lecture","note","university"],"created":"2025-01-13T13:17:36.138-05:00","updated":"2025-01-20T13:39:25.036-05:00"}
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

| A   | B   | Y   |
| --- | --- | --- |
| 0   | 0   | 0   |
| 0   | 1   | 1   |
| 1   | 0   | 1   |
| 1   | 1   | 0   |

Two NOT gates, two AND ands connecting $\overline{A} B$ and $A \overline{B}$, then take two terms in OR gate to output $Y$

$\overline{A}B + A \overline{B}$

De Morgan’s
$(\overline{W} + \overline{Z}) = (\overline{WZ})$

> [!question]+ How can you implement a NOT gate from a 2-input AND gate?

- Write $Y$ in SOM form

> [!question]+ Given the minterms below, can you fill in the truth table on the right?

ABCD Y

> [!question]+ What is the most reduced form. in SOP form, of the function from the truth table on the right?

| A   | B   | C   | D   | Y   |
| --- | --- | --- | --- | --- |
| 0   | 0   | 0   | 0   | 1   |
| 0   | 0   | 0   | 1   | 1   |

|                              | $\overline{C} \, \overline{D}$ | $\overline{C}D$ | $CD$           | $C \overline{D}$ |
| ---------------------------- | ------------------------------ | --------------- | -------------- | ---------------- |
| $\overline{A}\,\overline{B}$ | 1 @                            | 1*              | 0              | 1 @              |
| $\overline{A}B$              | 0                              | 1* $\heartsuit$ | 1 $\heartsuit$ | 0                |
| $AB$                         | 0                              | 1* $\heartsuit$ | 1 $\heartsuit$ | 0                |
| $A\overline{B}$              | 1 @                            | 1*              | 0              | 1 @              |
|                              |                                |                 |                |                  |

- $Y = \underbrace{ \overline{C} D }_{ \text{Vertical column} } + \underbrace{ BD }_{ \text{Middle box} } + \underbrace{ \overline{B} \, \overline{D} }_{ \text{Corners} }$

#todo
