---
{"dg-publish":true,"dg-path":"academia/CSB195/Life as Computation.md","permalink":"/academia/csb-195/life-as-computation/","created":"2023-10-18T16:22:02.399-04:00","updated":"2023-10-18T18:23:50.099-04:00"}
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

![Rule18.png|500](/img/user/Files/Rule18.png)

So, here is an example of evolving a random sequence.

![Evolve18.png|400](/img/user/Files/Evolve18.png)

The end values wrap around to get the cellular neighbours.

![Bounds18.png|400](/img/user/Files/Bounds18.png)