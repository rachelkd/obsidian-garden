---
{"dg-publish":true,"dg-path":"academia/STA130/Survivorship Bias.md","permalink":"/academia/sta-130/survivorship-bias/","created":"2024-01-15T16:08:09.606-05:00","updated":"2024-01-15T16:30:44.101-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|1]]
Course: #MAT223

---
# An interesting problem the SRG worked on…

- Suppose you’re an officer in the army. You don't want planes to get shot down by enemy fighters, so you armour them.
- Armour makes planes heavier, less maneuverable, and use more fuel.
	→ Too much armour is a problem.
	→ Too little armour is a problem
- Planes returning from combat were covered in bullet holes, but the holes were not **uniformly distributed** across the aircraft
- Analyzed those planes:
	- Were only looking at the planes that had survived and returned
	- Neglected the planes that didn't make it back, as those were the ones with critical damage in areas that needed reinforcement
- The planes that did return were able to do so despite the damage they sustained, suggesting that those specific areas weren't as critical for survival.
- This is an example of **survivorship bias**

# Thinking like a statistician

- Should always be asking yourself which *assumptions* you are making
	- Are they justified?
- Think about where the data came from
	- Officers were making the assumption that the planes that came back were a **random sample** of all the planes (i.e., representative of all planes in combat)
		- Not true!
	- The rate of survival and location of bullet holes are **correlated**
- What is **survivorship bias**?
	- Tendency to focus on individuals or things that have "survived" or succeeded, overlooking those that have failed or not survived
	- → leads to a skewed perspective and inaccurate conclusions, as the analysis is based only on the visible successes rather than *considering the entire dataset*, including failures or non-survivors


