---
{"dg-publish":true,"dg-path":"academia/CSC258/2 Combinational Circuit Creation/Transistor Circuits.md","permalink":"/academia/csc-258/2-combinational-circuit-creation/transistor-circuits/","tags":["cs","lecture","note","university"],"created":"2025-01-17T11:27:13.486-05:00","updated":"2025-02-22T05:06:51.188-05:00"}
---


# Transistor Circuits

> [!info] Gates are built by constructing a circuit from nMOS and pMOS transistors

Recall from [[100 Academia/CSC258/1 Transistors/Transistors#Using Transistors\|Transistors#Using Transistors]]:

- **nMOS transistor**
    - Source and drain are connected when gate input is high i.e., 1
- **pMOS transistor**
    - Source and drain are connected when gate input is low i.e., 0

![](https://i.imgur.com/g6GeMNj.png)


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/academia/csc-258/1-transistors/transistors/#76115c" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



> [!important]+ Making a gate from transistors is easy. Remember:
>
> - Every gate has ==one output== and ==one or more inputs==
> - Every combination of input values ==must connect the output to either high voltage ($V_{CC} = 5V$)== or ==low voltage ($\text{Ground} = 0V$)==
>     - ! Not connecting the output to high voltage *is not* the same as connecting the output to low voltage!

</div></div>


## Boolean Expressions

`Y = (A or B) and (not A or not B) or C`

1. First start with `A or B`
2. Make `not A or not B`
3. Connect these two terms with an AND gate
4. Connect output and `C` with OR gate

![](https://i.imgur.com/x0yf7Eg.png)

## Creating Complex Circuits

### Circuit Example

![|373](https://i.imgur.com/n64PQAF.png)

- Circuit has three inputs: A, B, C
    - Has two outputs: X, Y
- ? What logic is needed to set `X` high when all three inputs are high?
    - AND all inputs
    - ![](https://i.imgur.com/GDC8stl.png)
- ? What logic is needed to set `Y` high when the number of high inputs is odd?
    - XOR gates
    - ![](https://i.imgur.com/Q0sSfNA.png)

### Combinational Circuits

- Larger problems require a more systematic approach

> [!example] Given three inputs A, B, and C, make output Y high in the case where all of the inputs are low, or when A and B are low and C is high, or when A and C are low but B is high, or when A is low and B and C are high

> [!tip]+ How do we approach circuit problems in general?
> 1. Create truth tables
> 2. Express truth table behaviour as a boolean expression
> 3. Convert expression into gates
>
> - & Key to an efficient design is to spend extra time on step 2.

## Circuits as Truth Tables

Given three inputs A, B, and C:

- Make output Y high wherever any of the inputs are low
- Except when all three are low, or
- Except when A and C are high.

![](https://i.imgur.com/16DaNTR.png)

> [!question] Is there a better way to describe the cases when the circuit’s output is high?

### A Simpler Truth Table

![](https://i.imgur.com/MLZd1YL.png)

- Output only goes high in one case:
    - When `A = 0`, `B = 1`, and `C = 0`
- → Translates easily into gates
    - ![](https://i.imgur.com/1oM9qXK.png)
    - $Y = \overline{A} \cdot B \cdot \overline{C}$

## A Less Simple Truth Table

![](https://i.imgur.com/oPlWVWL.png)

- Output is high in two cases:
    - When `A = 0`, `B = 1`, and `C = 0`
    - When `A = 1`, `B = 0`, and `C = 1`

![](https://i.imgur.com/9WfPilA.png)

> [!obs]+ Each case/row can be expressed as a single AND gate.
> - Overall circuit is implemented by combining these AND gates

## Minterms

- This method of expressing circuit behaviour
    - Assumes the ==standard truth table format==, then
    - Specifies which input rows cause high output
- **Minterms**
    - The logical expression of these truth table rows (e.g., $A \cdot \overline{B} \cdot C$)
    - Shorthand form of referring to these rows

![](https://i.imgur.com/1uRlDFQ.png)
