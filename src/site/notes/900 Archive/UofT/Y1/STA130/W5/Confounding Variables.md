---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/sta-130/w5/confounding-variables/","created":"2024-02-05T20:05:51.688-08:00","updated":"2024-02-13T17:26:31.030-08:00"}
---

**Preamble**
Week: [[900 Archive/UofT/Y1/STA130/_STA130 Notes\|5]]
Course: #STA130
Date: 2024-02-05

---
# What conclusions can we draw when we compare two groups?

### Example: Green Tea; Kuriyama et al. (2016)

![6_green_tea_study.png](/img/user/900%20Archive/UofT/Y1/Files/STA130/6_green_tea_study.png)
*Study conclusions.*

As statisticians, we always want to be asking, “Where did the data come from,” and “How was it collected?”

- **Study design**:
	- **Prospective cohort study**
		- i.e., Participants followed up over time (***longitudinal*** study)
- **Sample**:
	- People covered by Osaki National Health Insurance
	- Invited everyone to participate (i.e., attempted a ***census***)
	- Achieve a 95% response rate (with 40,530 participants)
		- $\implies$ collection of initial cohort was not a problem
	- Restricted to “healthy” adults aged 40-79
		- Included those who were healthy and *did* drink green tea, and people who were healthy and did not drink green tea
		- Potentially, people who met that healthy cut-off but did not drink green tea could have started in worse health than the other group → input differences/biases could have grown over time for a wide variety of reasons → not a perfect sample

#### Confounding Variables

- In an **observational study** (e.g., Kuriyama et al. 2016), variables are…
	- observed with no active manipulation of variables/conditions
	- → May lead to **confounding**
- Variables are **confounded** if…
	- their effect on the response variable is mixed up (i.e., confused) and there is no easy way to separate them out
	- ==→ We don’t know which variable(s) are **causal** vs. correlated with other secondary effects==
		- i.e., Something you see at the end could be due to a variety of different input factors
			- no real easy way to separate them out
			- e.g., maybe people who drink green tea also exercise more/see their doctor more often
		- $\implies$ We can say that people who drink green tea maybe on average live longer, but that might not be because they drink green tea, but because of something else, but those people also tend to drink green tea
- Another example of confounding: pet ownership
	- People found lots of benefits to owning pets
	- One huge *confounding* variable is the level of exercise participants engage with
		- e.g., You have to take a dog out on a regular basis that essentially guarantees a baseline level of exercise that most pet owns engage with on a regular basis compared to those who might not own pets
	- Owning a pet does not cause your health to improve; it might be that exercising causes your health to improve, and owning a pet helps you exercise

---

![|500](https://i.imgur.com/4hdJwGo.png)
*More ice cream sales and shark attacks happen in the summer. One does not cause the other. Both are driven by the weather.*

Back to [[900 Archive/UofT/Y1/STA130/Week 5 Lecture\|Week 5 Lecture]].
