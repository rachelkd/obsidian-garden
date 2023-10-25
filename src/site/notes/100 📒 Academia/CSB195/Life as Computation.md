---
{"dg-publish":true,"dg-path":"academia/CSB195/Life as Computation.md","permalink":"/academia/csb-195/life-as-computation/","created":"2023-10-18T16:22:02.399-04:00","updated":"2023-10-23T14:45:59.650-04:00"}
---

# What is life
> [!note]
> Comparing life to a candle flame: it’s not quite easy to capture what life is at its core.
- All life as we know it is indeed produced by chemical systems
    - Nature of life is somewhat different

## Changing our perspective:

- The one defining thing about living things is that they can evolve
    - There is one entity stored inside them that can change over time
- Evolution is molecular learning

How does the *conus* shell make its pattern?

- Shell patterns are on the outside of the shell
- So, how does the shell grow? How does the shell in principle get larger?
    - Shell deposits new material (e.g., calcium) to the edge
        - Edge wraps around more and more
        - Spiral structure, volume, size increases
- If that’s the case, how does it make a pattern like that
    - Scale of the pattern is 3-4x the size of the shell itself?

## So, what is life?

>[!note]
>Life resists dissipation.

- In order for anything to resist dissipation, it needs an *internal model*
	- A description of a state to get to
		- If there is no internal model, any kind of variation, you do not know what to get back to.
	- **Metabolism** is a model
- Evolution is necessary to understand existence
---
- You could argue that all living organisms are autonomic
- There is no authority that tells cells what to do
	- They do it because of their "inner voice"

# Modelling local knowledge
- Cell has a choice:
	- stay how you are or change

- **Cellular automata**
	1. No change
	2. Birth
	3. Death
- What level of complexity can you get simply from these probabilities

### cellularAutomata.R
#### Rule 18.

```R
  > showRule(18)
  Rule: 18
  111 110 101 100 011 010 001 000
   0   0   0   1   0   0   1   0  
```
The numbers on the bottom are replacement values for the middle.

```R
> print( 2^(7:0) )
[1] 128  64  32  16   8   4   2   1
```
Naming of rule comes from `16 + 2 = 18` based on binary output.

![Rule18.png|500](/img/user/Files/02%20CSB195/Rule18.png)

So, here is an example of evolving a random sequence.

![Evolve18.png|400](/img/user/Files/02%20CSB195/Evolve18.png)

The end values wrap around to get the cellular neighbours.

![Bounds18.png|400](/img/user/Files/02%20CSB195/Bounds18.png)

# 10-23-23

Perspectives on what life is:
1. Scientific
2.  Philosophical
3. Religious
4. Existential
5. Cultural and societal

## Scientific perspective

Is a virus alive?
- **Life resists dissipation.**
- **Life enables adaptation**


- Balance between stability and change
	- "The edge of chaos"
		- Too resistant to change, and/or too adaptive

## Computability

- Branch of theoretical CS and Math that deals with whether a problem can be algorithmically solved
	- whether there exists a series of well-defined steps (algorithm) that can be followed to determine a solution to the problem in a finite amount of time

**Central concepts in computability:**
1. Turing machines
	- Mathematical model of computation that describes an abstract machine that manipulates symbols on a strip of tape
	- Fundamental model for what it means for a function to be computable
2. Decidibility
3. Halting Problem

### Edge of Chaos and Computability

1. Cellular Automata:
	- CA are mathematical models composed of a grid of cells that can be in a finite number of states
	- State of each cell in the grid evolves according to a set of rules based on the states of its neighbouring cells
	- Some CA (e.g., Conway's Game of Life) exhibit behaviours at the edge of chaos and are *Turing complete*
		- can compute anything that a universal Turing machine can, given right initial configuration
2. Computation at the Edge of Chaos
	- Systems operating at edge of chaos:
		- believes to have max. computational power
	- Neither too ordered #todo

# Why is "Universal Computation" Important?

- Turing completeness
	- Being capable of universal computation
	- Find a universal computer
	- Map the system to that universal computer
		- Finding out the equivalent of an unsolved problem with a solved problem
			- One way of finding a mathematical proof
		- Perhaps via intermediate steps

- Turing machine consists of
	- an infinite *tape* of cells that each contain a symbol from an alphabet
	- a *head* that can read and write symbols on the tape
		- move right or left, one step at a time
	- a *state register* that stores the current state of the machine
	- a *table* of instructions that specify:
		- given the current symbol on the tape and the current state of the machine, write a symbol on the tape or not, move left or right or stay, and change the state or not

# Cellular Automata Classes

1. They don't really do anything
	- Rule 4: Repeats the same cell over and over from starting sequence
2. wasn't listening oops
3. 
4. 

## `gameOfLife.R`

- Rules of living cells are in `rL`
	- In a 3x3 environment, you have 9 cells
	- `1` states are the persisting states (stay alive)
	- `0` states are the dead states
		- Die of overcrowding if too many neighbours
- Rules of dead cells are in `rD`
	- Nothing happens if they do not have 3 neighbours

Does this ever freeze? Does it ever stop? Does it ever exhaust its states?
- `Glider-gun` eventually stops