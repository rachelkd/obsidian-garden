---
{"dg-publish":true,"dg-path":"academia/STA130/W6/P-hacking.md","permalink":"/academia/sta-130/w6/p-hacking/","created":"2024-02-13T19:44:39.239-05:00","updated":"2024-02-13T21:42:02.219-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/STA130/_STA130 Notes\|6]]
Course: #STA130
Date: 2024-02-13

---
# P-hacking

- **p-hacking**
	- *any* changes to data collection, analysis procedure, etc. that violates core assumptions behind [[100 📒 Academia/STA130/W4/Hypothesis Testing and p-values\|hypothesis tests]]
- What is the main consequence of p-hacking?
	- chosen alpha level no longer strictly limits Type I error rate (false positive rates)
	- i.e., rejecting when $p < 0.05$ in this situation could give false positives *more than 5% of the time*!
	- Even well-motivated changes can lead to this issue without careful analysis
		- → “peeking” at results is dangerous
		- unavoidable when doing analysis → want to make sure changes are well-documented so people know why you made those changes and why

# P-hacking and the Replication Crisis

- Results that lead to discoveries are more likely to get published
	- → incentives for p-hacking to reject the null
- Makes it more likely the results are not actually real, making them impossible to replicate
	- Not real because it is from random chance (Type I error rate) where we incorrectly reject the null in favour of the alternative
- P-hacking is not always malicious:
	- can be done unconsciously or making small changes that researchers do not think affect results because they already believe they have the right answer
- *Nature* surveyed 1500 scientists in 2016 about the scope of this crisis:
	- ![|400](https://i.imgur.com/KY6jf6F.png)
	  *90% said that there is a crisis.*
	- ![|300](https://i.imgur.com/oplDPBM.png)
	- What is the reason for this?
		- ![|400](https://i.imgur.com/fiWaeKF.png)
		  *If you manage to successfully reproduce a result, you are almost twice as likely to have that success accepted compared to an unsuccessful replication.*
		- There is a huge bias between confirming a bias is true vs. saying an effect is probably not true
	- What is causing irreproducible research?
		- ![|400](https://i.imgur.com/xPIvIZz.png)
		- The innocuous result (Type I error) is at the bottom of this list → people do not think that failure to replicate is just because of statistical problems (it’s p-hacking)


Back to [[100 📒 Academia/STA130/Week 6 Lecture\|Week 6 Lecture]].