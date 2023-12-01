---
{"dg-publish":true,"dg-path":"academia/HPS120/01 Lecture Notes/10 Meta-Analysis.md","permalink":"/academia/hps-120/01-lecture-notes/10-meta-analysis/","created":"2023-11-26T17:43:21.077-05:00","updated":"2023-11-27T21:05:54.301-05:00"}
---

#HPS120

---
```table-of-contents
```
---
# Last time: scientific misconduct

[[100 📒 Academia/HPS120/01 Lecture Notes/09 Fraud\|09 Fraud]]
- If peer review is ill-suited to catching fraud, does that mean that scientific literature is permanently poisoned by scientific misconduct?
	- Hopefully, not.
	- Hopefully, misconduct is found out by people who try to replicate labs
- No, scientific misconduct does not permanently poison scientific literature:
	- Other people working on it will publish their results
	- The truth comes out slowly, but surely

> [!note] 
> It is possible that results that are not representative of the truth get into the scientific literature.
> - A study can be conducted by honest and serious researchers, and yet come up with results that looks like a real result but is not.

# Fisher (1935) The Design of Experiments

- Fisher (1935) is an important text in the history of science
	- One of the seminal texts where the modern understanding of statistics gets codified
- Fisher proposes many of the standard statistical methods that we use to this day
	- (with some modifications)
- An anecdote from Fisher’s life gives us some grasp on his idea of p-values:
	- In the 1920s, Fisher was working at a lab doing agricultural research
	- Offered a tea to his colleague Muriel Bristol
	- She refused it: Fisher poured the milk into the cup, then the tea
	- Fisher could not believe she could possibly tell the difference → devised a test
- Fisher’s experimental design:
	- Fisher set up 8 cups of tea:
		- 4 of which had milk poured in first
		- 4 with tea poured in first
	- ½ chance of simply guessing correctly for one cup
	- Muriel Bristol’s chances of identifying 4/4 cups prepared in her preferred way was 1/70 (1.4%)
	- Chances of identifying 3/4 was 24.3%
	- Muriel could tell the 4/4 cups in her preferred way
- Origin of **p-value**:
	- How likely is the given outcome given the null hypothesis is true
		- (Muriel cannot tell the difference between the teas)

> [!note] 
> - Many disciplines take $p < 0.05$ as the threshold for statistical significance
> - That is, there must be less than a 1 in 20 chance that the signal is a coincidence
> 	- This is very different from the effect size
> 		- If Muriel had 800 cups, and could distinguish 420 cups, that might reach statistical significance, but the effect size is much smaller than the other one
> 		- The more data points you have, the smaller the effect size can be while still reaching statistical significance

- If you run 20 scientific studies, one of them probably got a statistically significant result by pure chance ($p \le 0.05$)

# P-Hacking

- Norman et al. found a suspiciously high number of studies that is *just under* the threshold 0.05
![p_hacking.png|center|400](/img/user/Files/HPS120/p_hacking.png)
Belas, Norman, Paul Bengart, and Bodo Vogt. "P-hacking in Clinical Trials." _Working Paper Series_ (2017).

- It is probably not scientific fraud/making up data → it is probably p-hacking

# The significance of a single study

- A single study in fields like psychology has at least a 1 in 20 chance of being just a coincidental result
	- People who are not p-hacking: if they run 20 studies in their life, the odds are that one of them coincidentally comes up looking like a signal
- What do we do about that?
	- Meta-studies

# Meta-Studies

- A single study is not considered definitive proof of anything
- Current gold-standard for scientific evidence:
	- **Meta-study**
		- looks at the results of some collection of individual studies, and does a statistical analysis of those results
- Deeper breakdown of meta-study:
	- Take a whole bunch of studies, see the trend across them
	- Little triangles are data points
	- Data points go into the blue Level 1 studies (journal articles that are published)
	- Journal articles get correlated and brought together into *larger studies*
	- Larger studies about the studies → meta-studies
	- If one of those triangles are wrong, it probably will not ruin the meta-study
		- Fraud is also not going to ruin the meta-study
- We look for overall trends in literatures, rather than trusting an individual level study

![meta-study.png|undefined](/img/user/Files/HPS120/meta-study.png)
- Meta-studies does not simply lump all of the data together, rather:
	- Treats the findings of studies as individual data points and looks for trends
		- e.g., did this study find a positive result?
	- You can “lump” if two studies are very, very similar in terms of methodology and object of study, etc. → very rare to find two studies conducted in the same way, looking for the same thing, etc.

## Literature Review vs. Meta-Studies

- Literature review:
	- Reading everything you can find on a subject and making an informal assessment of the holistic picture
		- eg., “Seems to me that this literature supports my favourite hypothesis” → hazards of bias in this qualitative analysis
	- Has been around for a really long time
		- vs. doing this quantitatively/statistically
- Meta-analysis tries to eliminate that kind of subjective bias in literature review by making it quantitative
	- Using rigorous statistical methodologies about the outcomes of various studies 
		- Hopefully, remove user bias

## Adding data from different studies together

### Pearson (1904)

![inoculation_against_typhoid.png|undefined](/img/user/Files/HPS120/inoculation_against_typhoid.png)
<div class="caption" style="color: grey"><i>Paper from 1904 looking at the effects of inoculation against typhoid</i></div>

- Pearson took data from a number of sources, and grouped some of them together
	- Would be considered an invalid process in the current age
	- But, example of a forerunner of the meta-analysis
- Pearson did not just lump all data together; did try to keep some structure:
	- Merits further studies to see if sub-populations had differences between them
	- Different groups showed different effect sizes → wondered why?
	- e.g., maybe people at lower risk of the disease were more likely to volunteer to be vaccinated?
		- Thought randomized trials were the best way to solve it

### Extra-Sensory Perception After Sixty Years

- Book is often considered the first meta-analysis proper
- Did a fairly exhaustive overview of the whole field of ESP at the time
- Stegenga (reading this week) points out the nice symmetry between placebo controls first being used to test things like this, and the first meta-analysis being about it as well

# Medical Nihilism, Jacob Stegenga — the reading

- Stegenga argues:
	- our confidence in most medical interventions should be low
	- argues that meta-studies are *malleable*
		- There’s a lot of choices that researchers make on about how to analyze and collect data
		- Choices do not have one principle answer — no rule
		- Choices affect the outcome of the study
			- Might be influenced by who is paying for the study…

> “Surely my view does not warrant distrust in all of medicine? There is no place I would rather be after a serious accident than in an intensive care unit. For a headache, aspirin; for many infections, antibiotics; for some diabetics, insulin – there are a handful of truly amazing medical interventions, many discovered between seventy and ninety years ago.” (p.5)

- Not saying if you have a broken bone, don’t get a cast
- That has been the basic medical methodology for thousands of years:
	- If you have a bullet wound, staunch the bleeding, get it stitched, take antibiotics
	- Stegenga is in favour of all of this
- Arguing that statins (blood pressure, cholesterol medications) where effect sizes can be tiny
	- But, the studies are massive
	- Can have a small effect size but achieve statistical significance
- Many or most of the “fancy” medications developed in the past 30 years do not have enough evidence to support the use of them
- Believes in *silver bullet intervention*:
	- Intervention when there is one cause of the problem (e.g., diabetes: insulin dysregulation; treat using insulin)

## Malleable Meta-Analysis

> [!note]
> - Stegenga’s critique of meta-studies is primarily that they are <u>malleable</u>

- Meta-studies do not *constrain* researchers sufficiently to come up with just one conclusion
	- Does this tie back to [[100 📒 Academia/HPS120/01 Lecture Notes/04 Realism and anti-realism#Underdetermination\|underdeterminism]]?
	- In meta-studies, there is a choice of what data you *include*, choices of how you analyze that data (like in individual level studies)
		- Both simply do not have single-principled answers
		- Can radically change the outcome of the meta-study → opens window to **researcher bias**
- **Researcher bias** can be reflected in a number of choices that must be made about how to conduct the meta-study
	- If you’ve got an agenda, you can run a meta-study that gets you the answer you want

> “Contradictory conclusions have been reached from meta-analyses on the benefits of acupuncture and homeopathy, mammography for women under fifty, and the use of antibiotics to treat otitis, to name a few other examples”

- Two different groups run meta-studies and come up with opposite results

> “Barnes and Bero (1998) performed a quantitative second-order assessment of multiple reviews that reached contradictory conclusions regarding the same hypothesis, and found a very strong correlation between the outcomes of the meta-analyses and the analysts’ relationships to industry.”

- This is a meta-meta-study, looking at meta-studies that contradict each other
- The following quotes are an example of the above argument:
    > “analysts who had received funding from the tobacco industry were eighty-eight times more likely to conclude that passive smoking has no adverse health effects compared with analysts who had not received tobacco funding.”

    > “Meta-analyses of [antihypertensive] drugs were five times more likely to reach positive conclusions regarding the drugs if the reviewer had financial ties to a drug company.”

> [!summary] Summary
> - Stegenga argues that meta-studies are *malleable*
> - Enough *unconstrained choices* in them to leave the door open to *bias*
> 	- When someone has a product to sell/keep from being banned, you can see the biases across meta-studies
> 		- e.g., if you’re taking money from Big Tobacco, you will likely say that smoking (or, at least, second-hand smoking) is fine

## Choices for Meta-Analysis

- Researchers doing a meta-analysis have important choices to make about:
	1. Which studies to include
	2. How to measure outcomes of those studies
	3. How to weight various studies
- All these can open the gate to biases

### Which studies?

> “The dominant view in evidence-based medicine is to include *only evidence from randomized trials in a meta-analysis*” (p.89, my emphasis)

- Evidence based medicine is medicine that doesn’t really look at causes, just outcomes
- Randomized double-blind placebo-controlled are the gold-standard
- In a meta-analysis, you put garbage data in, you get garbage data out
	- We want to only include the best studies in our meta-analysis

Is anything important left out if we only use evidence from RCTs?

#### Case-Control Studies
- Case-control study
	- Not a randomized placebo-controlled study
	- Find a bunch of cases and controls in the wild

- Doung-Ngern et al. (2020) did a case-control study of the effectiveness of wearing masks etc. in protecting against Covid.
	- Case-control study of this means → look at a bunch of examples of people who either did or didn’t get Covid over a certain period
		- Cases: people who did get Covid
		- Controls: people who did not get Covid
	- Collected a bunch of data about those people:
		- Did they wear masks all the time when out of the house? What kind of mask? Did they wash their hands a lot? Did they share cigarettes?
- Did not tell these people to not wear a mask all day, share cigarettes like in a RCT
- The way to study in epistemology is case-control studies

- Why is this less good in terms of identifying causes than a RCT?
	- There are confounding variables (e.g., income level)
- In a case-control study, you can do things about confounding variables, but you <u>have to had thought of that</u>
	- How do you know about the whole set of things you have to control?
	- Then, your data set exponentially increases the size of the data set you need
		- How do you know that people that wear masks are more cautious in general?
			- e.g., they shower every day, shower before they get home
- RCT splits people up and forces them into that control
	- You do not need to think of all those confounding variables
- Case-control is much harder to get at the causes of things

##### Case-control studies vs. RCTs
- Sir Austin Bradford Hill
	- epidemiologist
	- central in making the case that smoking causes lung cancer
- How would you do an RCT on this?
	- Force a bunch of people to either smoke or not smoke?
- Ronald Fisher
	- argued that without an RCT, you could not conclude anything
	- What if there was a gene that forced people to smoke and get lung cancer?
- Debate: do you need a RCT to get evidence of causal connections, or are case-control/cohort studies enough to see important connections between variables
	- Hill won this debate

#### Choices of Starting Data
How similar do studies need to be to count as evidence about the same thing?
- Pagdee et al. (2006) looked at 69 studies of community forest management:
	- Some studies were qualitative, some quantitative
	- Studies from Asian, Africa, South America, North America
	- Some interventions were supported by governments, some were completely autonomous
	- Some had economic incentives, some just wanted to look after the forests
- Are these studies the same thing, or are they too different?
	- Is government-sanctioned support from South America the same as a community doing it on their own in Africa?
	- Can we group together qualitative and quantitative?
- <mark style="background: #FEFAD0A6;">There just is not a principle answer to the question: which studies?</mark>
	- There is expertise, but it remains a judgement call

### How to Measure Study Outcomes?

- Suppose you have a drug that you think prevents a bad medical outcome
- One way to measure: its “risk difference”
	- Difference between how likely that bad outcome is for people taking the drug, vs. how likely it is for people not taking it
![risk_difference.png|center|400](/img/user/Files/HPS120/risk_difference.png)
- Another way to measure is: “relative risk”
	- A study was done on encouraging breastfeeding for infants:
		- Babies of moms who were encouraged to breastfeed had a 3% chance of getting rashes
		- Those not encouraged had a 6% chance
		- Or, babies had a 50% reduction in their risk of rashes
	- Saying a 50% reduction in rashes is very different from a 3% increase in rashes
	- 3% vs. 6% of babies having rashes is a **risk difference**
	- 50% reduction in risk of rash is a **relative risk**
- Stegenga says:

    > “The choice of outcome measure can influence the degree to which the primary evidence appears concordant or discordant, and so ultimately the choice of outcome measure influences the results of meta-analysis.” (p.93)

- Difference in reporting makes a difference on the way the outcomes are measured overall
	- If you are doing a meta-study, you want the outcomes to not be radically different from each other
		- You would have to treat one of the studies as an outlier
- What looks like similar or different results depends on how those results are reported

### Study Weight

- It makes no sense to count a study with 10 participants and loose methodology as equal in evidential weight to a study with 10,000 participants and very rigorous methodology
- <u>Meta-analyses do not just weight every study equally</u>
- One part of this weight is Quality Assessment Tools:
	- The Jadad Scale:
		1. Was the study described as randomized?
		2. Was the study described as double blind?
		3. Was there a description of withdrawals and dropouts?
		- Award 1 point for each “yes”
	- The Chalmers Scale
		- Radically more complex than Jadad Scale
		- More questions
- Which is the objectively best quality assessment tool?
	- No principle answer
- Quality assessment tool you use → affects the weighting of studies → affects meta-study outcome

#### Variability in Reviewers of Quality

> “A quality assessment tool known as the ‘risk of bias tool’ was devised by the Cochrane group. To test this tool, Hartling et al. (2009) distributed 163 manuscripts of randomized trials among five reviewers, who assessed the quality of the trials with this tool. They found the inter-rater agreement of quality assessments to be very low. In other words, even *when given a single quality assessment tool, and a narrow range of methodological diversity, there was a wide variability in assessments of trial quality*.” (p.95, my emphasis)

- No clear answer to which quality assessment tool to use

# So, what should we do?

- Stegenga’s suggestion:
	- The “Hill strategy”
	- Go back to the way Sir Austin Hill did things
- Quantitative assessments of large literatures should be informed and structured by more qualitative stuff

## The Hill Strategy

- When arguing for the link between smoking and lung cancer, Hill drew on a wide variety of types of evidence:
{ #7f9d0e}

	- strength of the association between the measured parameters
	- consistency of results between studies
	- specificity of causes
	- temporality (causes precede effects)
		- e.g., you smoke and then you get lung cancer
	- dose-response gradient of associations between parameters
	- plausible biological mechanism that can explain a correlation
		- e.g., bad stuff in lungs is bad
	- coherence with other relevant knowledge

> “The evidence that Hill cited as supporting this causal inference was: strength of association between measured parameters; consistency of results between studies; specificity of causes (a specific cause has a specific effect); temporality (causes precede effects); a dose-response gradient of associations between parameters; a plausible biological mechanism that can explain a correlation; coherence with other relevant knowledge, including evidence from laboratory experiments; evidence from controlled experiments; and analogies with other well-established causal relations.” (p.96)

- We take a much wider variety of evidence into account when we do our overall assessment of the literature
- Suppose you are doing a meta-analysis on SSRIs:
	- Would be nice if we had a mechanism to decide if they worked
	- Not good: “Depression goes down when these drugs are taken”
	- Having some good causal story about how those drugs reduce depression
		- Not taken into account in the way people currently do meta-analysis
	- Part of the vision of evidence-based medicine:
		- We should not worry about causal stories, just outcomes
	- What if for 30% for population, it makes a positive difference; for 40%, it is okay; for 30%, it is a bad time
		- That averages out to no effect, but for 30%, it is life-changing
		- The Hill strategy is what we want
		- Meta-study would not turn that up; understanding the causes would turn that up
	- You want some way of telling the person ahead of time what group they are in
		- Right now, it is just guessing and checking what group and doses
		- Causal stories would get rid of guessing and checking

- Hill’s specific ideas only really make sense in medicine
- Overall suggestion here is to cast a very wide net for evidence
	- May include our standard meta-analyses, but it should include some features of the good old literature review as well

# Key Terms

1. P-hacking
2. Case-Control Studies
	- Case-control studies can show causal effects if a causal story is given ([[100 📒 Academia/HPS120/01 Lecture Notes/10 Meta-Analysis#^7f9d0e\|Hill strategy]])
3. Meta-Analysis