---
{"dg-publish":true,"dg-path":"academia/STA130/Week 6 Lecture.md","permalink":"/academia/sta-130/week-6-lecture/","created":"2024-02-13T19:48:06.506-05:00","updated":"2024-03-04T14:55:29.616-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|6]]
Course: #STA130
Date: 2024-02-13

---
# Correlation, Causation, and Confounding

See [[100 📒 Academia/STA130/W5/Confounding Variables\|Confounding Variables]] and [[100 📒 Academia/STA130/W5/Correlation vs. Causation\|Correlation vs. Causation]].

# P-hacking

### Example: Green Tea & Exams

- You conduct a **randomized controlled trial** to test whether drinking green tea before taking an exam improves your overall score

- Study design:
	- Assigned 50 students in STA130 to drink green tea before an exam and 50 students to drink only water
	- Decide on an alpha-level of 0.05, since you want to be reasonably confident in your findings
		- i.e., at most 5% Type I error rate
	- After analyzing the mean test scores of both groups, you find a **p-value** of 0.051 that the students who drank green tea had a high mean score than those who only drank water
- $p > \alpha \implies$ you fail to reject the null
	- However, it’s close enough that maybe adding one person or removing a person from the sample will get that effect…

#### Scenarios
1. You find that one student who drank green tea did really poorly, and removing their score gives a $p = 0.043$
	- *Can you remove this student and then reject the null?*
2. Upon further inspection, restricting to just female students gives $p = 0.035$, whereas male students have $p = 0.072$.
	- *Can you limit your analysis to just female students and then reject the null?*
	- Maybe you change your hypothesis to not all students, but just female students
3. With $p = 0.051$, you fail to reject the null at $\alpha = 0.05$. But at $a = 0.1$, you would reject the null/
	- *Can you change your alpha level and then reject the null?*

##### Debrief
1. Outliers:
	- If we did not think about doing this beforehand (i.e., not part of our analysis procedure for how we were analyzing the two groups), and we did not do a similar thing to the other group → could be a problem
	- Whatever procedure that you come up with **needs to be defined beforehand and needs to be consistent across both groups**
	- If you look at the data, then come up with a procedure that gives the impact you want, you have kind of cheated
	- This is called **peeking**/**fudging the data** → not okay
2. Subgroups
	- Another example of “**peeking**” → not really allowed
	- If you had planned in the beginning to analyze male and female students separately, then it would be okay
	- If you had planned to analyze them in a combined way, then notice an effect when you split it → you have done two additional tests
		- one test combined, one test for male, one test for female $\implies$ ran three separate experiments using the same data to try and get a low p-value
		- → cheating
3. Rejection Rule
	- If you first looked at the p-value then changed the p-value, that is problematic
	- You had to look at the data first to compute the p-value → **peeking** → not acceptable

<br>

- Outliers and subgroups are the most common form of p-hacking
	- Fudging the data slightly by removing outliers or making it look “pretty,” or
	- Peeking at the data and trying to come up with a test that gives you a low p-value
- If you have used the data, then you cannot modify anything
	- unless if you can show that it was done independently of the conclusion that you are trying to reach
	- e.g., rejecting outliers for different reasons before you knew the answer

<br>

See [[100 📒 Academia/STA130/W6/P-hacking\|P-hacking]].
