---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w1/survivorship-bias/","created":"2024-01-15T13:08:09.606-08:00","updated":"2024-01-18T14:45:07.582-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|1]]
Course: #STA130

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


