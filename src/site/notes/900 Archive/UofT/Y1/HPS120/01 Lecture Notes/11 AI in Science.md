---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/hps-120/01-lecture-notes/11-ai-in-science/","created":"2023-12-05T21:01:58.179-08:00","updated":"2024-06-22T13:53:59.202-07:00"}
---

#HPS120 

---
```table-of-contents
```
---
# Last time:

- There is some degree — that is hard to quantify — of [[900 Archive/UofT/Y1/HPS120/01 Lecture Notes/09 Fraud\|scientific fraud]] occurring
- Worrying; one main feature of science is that you do not start fresh; what if you are building on fraud?
	- Solution: [[900 Archive/UofT/Y1/HPS120/01 Lecture Notes/10 Meta-Analysis\|meta-analyses]]
	- Collect a bunch of studies, average out the stuff that was done honestly
- But, meta-analyses has opportunity for bias due to choices with no principled answer
	- Choices left to subject matters; subject matters may or may not be paid by industries that want some result
	- Meta-studies maybe are not as objective as we thought…

Maybe AI can sort this out for us:
- If the problem is human failures (e.g., greed, bias), perhaps the pure objectivity of machine logic can fix it

We will discuss:
1. Some nice things about AI
2. Reading; the issues that come up when you try to apply AI to social science data
	- Suggests these problems with meta-analysis are not going to be solved anytime soon
3. Moral of the story: you still need smart, sensitive people who have an understanding of what they are doing

# Some good things about AI

## Semi-automatic processes in labs

- [Lab](https://magazine.utoronto.ca/campus/the-lab-that-almost-runs-itself/) directed by Alan Aspuru-Guzik
	- uses AI and machine automation to greatly increase its productivity
	- Test various compounds as candidates for organic lasers
		- Carbon-based molecules
	- Hope is to develop new materials to develop new lasers to do a bunch of things at lower energies; green tech
- Have to synthesize a lot of compounds and test them
	- Huge hassle, enormous amount of work
	- AI makes predictions about which compounds are likely important/interesting to test
	- Semi-automatic process (human still has steps to do)
- You know what success and failure looks like → tell the machine the steps → machine can work all day and night

## Drug Discovery

- We can synthesize a lot of molecules, but what should we synthesize to solve our human problems?
	- One estimate of the number of possible molecules containing carbon, nitrogen, oxygen, or sulfur at each position, and having no more than 50 atoms in total, suggests that it will be at least $10^{63}$ different types
		- In comparison: estimates suggest $10^{50}$ atoms in the entire earth
- “Guess and check” is not going to work for drug discovery
- AI tools like **DeepChem** allow researchers to search for possible molecules that look like they will perform specific biological functions, screen them for probability of toxicity, and so on
	- Helps look for specific molecules in a space of possible molecules that might serve a certain biological function
	- e.g., suppose you want an antibiotic:
		- Tell it what binding profile it should have
		- Based on a bunch of data, it can make predictions about what molecules are likely to have those properties
		- → much shorter list of candidates → look more carefully at each of those candidates
- You tell it what to look for (what binding properties a molecule should have)

# Deep Learning

- “Deep learning can be used to solve many sorts of problems, but the basic workflow is usually the same.”
	- Select the data set you will train your model on
		- or create a new data set if there is not an existing suitable one
	- Create the model
	- Train the model on the data
	- Evaluate the model on an independent test set to see how well it works
	- Use the model to make predictions about new data
- Deep learning simply means:
	- having several layers of hidden nodes
		- between input and output
	- Multiple layers has been the standard architecture for neural networks nearly since they were invented
## Perceptrons
What is deep learning anyway? Contrast it with its opposite:
![perceptrons.png|center|400](/img/user/900%20Archive/UofT/Y1/Files/HPS120/perceptrons.png)
- Perceptron
	- Ancient ancestor of modern neural networks
	- Takes inputs → gives them weights (e.g., +1x, -2x) → sums those up
	- → performs a function on that sum (e.g., “if greater than 50, then yes, if less than no”)
- Invented in 1943
- First models took their inputs information from a 20x20 pixel camera
- Used for simple binary classification tasks
	- Is this a blank, or is this not a blank?

## Select the data set you will train your model on

- All neural networks are trained on some dataset
	- **Data embodies the correlations** you want the network to learn
- Suppose you want to train a neural network to distinguish between pictures of tanks and trucks
	- Dataset would be a bunch of pictures of tanks and trucks
	- For most deep learning, you also **need the data set to be tagged with the correct answers**
		- Need a human to sit down and distinguish which is a tank or truck

## Build the model

![deep_learning.png|center|400](/img/user/900%20Archive/UofT/Y1/Files/HPS120/deep_learning.png)

- Many different architectures for neural networks
- Suppose we are working with the simplest deep learning architecture (pictured)
	- Consists of input nodes, weighted connections between those and the hidden layers, weighted connections to output nodes

## Train the model on the data

- **Back-propagation** of error:
	1. You set the weights on the connections randomly
	2. Give the model a bit of training data
	3. Spits out some incredibly wrong answer
	4. You have the right answer; quantify how wrong it was
		- Calculate the minimum change that produces the maximum reduction in error
	- i.e., feed it some data that you know the answer for → neural network spits out wrong answer → “here’s how wrong you were, and here’s how I can change you the least amount to get you the best performance” → repeat

Largely, this is how neural networks are trained right now

## Tagging datasets

- Back-propagation requires a dataset with the **correct answers attached**
- Captchas collect data from users attempting to access a website
	- Being used by some company to tag their image for them

### Amazon Mechanical Turk
- Huge datasets used by modern AI are usually manually tagged by some intelligent, sensitive human for a small fraction of minimum wage
- Amazon’s Mechanical Turk is one large portal for this kind of service
- Minor piece of commentary:
	- This type of job exploits those who do not have other options and need a little money
### The original Mechanical Turk
- Original mechanical turk
	- 18th century machine that was supposed to know how to play chess
	- Complex levers and wheels moved in the front
	- Mannequin would move chess pieces around and play at a fairly high level
- The machine itself does not know how to play chess; an intelligent human through the machine knows how to play chess through you
	- Trick was that someone was jammed into the table who was good at playing chess

> [!note] 
> Metaphor for modern AI’s abilities:
> - Takes the inputs of smart humans, and presents them as though they are the outputs of a very clever machine

## Evaluate the model on an independent test set to see how well it works

- The model has been trained
- Give it some data that was not in the training set to evaluate how well it does
- Sometimes, neural networks latch onto features you did not mean for them to in order to get the right answers
	- → Testing is important!

### Select the data (carefully)
- Early perceptron was trained to distinguish tanks and trucks
	- Got the right answers
- However, someone had taken the tank pictures at dusk and truck pictures during the day
- Was evaluating the total luminosity of the images, and nothing else

> [!note]
> It is crucial to carefully and systematically curate the dataset you are training on.

## Use the model to make novel predictions

- Neural network does a good job on data it has never seen before ⇒ start using it

# Recidivism Prediction

- Greene (2023) looks at the use of this sort of model in **recidivism prediction**
	- For someone who has been convicted of a crime, how likely are they to be convicted again?
	- Important factor in parole hearings
- Wouldn’t it be nice to have a *powerful*, *objective* model to predict how likely you are to commit a crime again?
	- Eliminate bias:
		- e.g., racism, or what if you get in front of the parole board and your face happens to look like one of a person who bullied them in elementary school?
		- Life could be made substantially worse by arbitrary factors

## Concerns
- Greene: concerned about the use of AI in recidivism prediction
	- Worried about the information they use about people
	- The data going into these neural networks has a lot of **[[900 Archive/UofT/Y1/HPS120/01 Lecture Notes/11 AI in Science#Umbrella Terms\|umbrella terms]]**

### Umbrella Terms
- Greene contrasts a few different kinds of concepts that can exist in the sciences
	- Some terms are nice and crisp
	- e.g., “Gold” is a crisp term — has a very clear definition (certain number of protons, properties)
		- Can classify anything as either gold, or not gold
	- Not all concepts in science are like that
- Greene talks about **umbrella terms**
	- Refers to multiple overlapping but not perfectly overlapping things
	- Hard to come up with very crisp and clear definitions of umbrella terms

### Family Resemblances
- Philosophers use the term **family resemblances** to talk about umbrella terms
	- a bunch of shared properties
		- but, no one property that all members of the category share
	- e.g., what are the necessary conditions for something to be a chair?

## Training on Ambiguous Data
- We navigate our world with umbrella terms fine (most of the time)
- What happens when you have to train a neural network on data collected using umbrella terms?

### “Criminal Companions”
- Greene explains that predictions of recidivism are often made on the basis of questionnaire answers
	- e.g., “Have your friends been in trouble”
	- One questionnaire offers four answers:
		1. Mixed
		2. Gang member/associate
		3. Essentially not in legal trouble
		4. Mostly in legal trouble
- A graffiti artist could very honestly say: yes, I associate with people who value and participate in criminal activity
	- *Extremely* different scenario than someone involved in violent crime
### “Gang member/associate”
What does it mean to associate with gangs?
- Green lays out a range of possibilities:
	- Close friends with gang members, in a gang yourself
	- or a priest who ministers to gang members → a kind of association
		- priest probably has substantially different recidivism probability vs. someone in a criminal gang
	- Have very different consequences for changes of re-offending, but the <u>answers are the same</u>

## Making concepts more precise
- Remedy for umbrella terms:
	- Simply making the concepts we use in such data collections more precise
	- Should probably be two separate answers for “gang member” and “associate”
	- How many divisions are necessary, though?
		- “Associate” is also ambiguous
	- Problem: You would need a lot of questions to capture the kinds of scenarios people are in

## Concern: Algorithmic fairness
- The question of algorithmic fairness
	- Has become a large and complex conversation across multiple disciplines
	- If you train a neural network on data produced in a biased and unfair world, it is very likely to reproduce those biases

## Select the Data (carefully), again
- Rich Caruana (PhD student in the 1990s)
	- Working on training a neural network to do *triage* sorting on patients with pneumonia
		- Triage: you go to a hospital, they ask you questions, and decide how long you are going to wait
		- Most urgent people get the quickest care
		- Time-consuming process; wouldn’t it be nice if robots could do it?
	- He gets the data and then the patient outcomes
		- e.g., blood pressure, oxygen levels
		- The worse the patient outcomes, the higher they are on the triage
- Produced an algorithm; made some worrying suggestions:
	- People with asthma and pneumonia had better outcomes than people with just pneumonia
		- If you go to ER with pneumonia and you tell them you also have asthma, they will take that more seriously and rush you
		- They had better outcomes because they got rigorous care really urgently
	- This slight overcompensation (with good reason) is *in the data*
- The **complexity of real life created correlations that do not reflect the underlying causes**
	- Neural networks do not detect causes; they find correlations

# Back to Recidivism Prediction
Suppose a population is over-policed and treated unfairly by the courts
- Treated unfairly by the currently system → reflected in the recidivism data
	- Correlation between having a certain postal code and high recidivism rates
	- Note that **recidivism** is *re-conviction* of a crime, not when you *commit* a second crime
- It will be harder to get parole in the future because your demographic was treated unfairly in the past

- Do AI models for predicting recidivism somehow screen these things out?
	- Any neural network needs a dataset
	- Need to curate it with your intelligence, sensitivity, and understanding of causal relationships relevant to the system
		- [[900 Archive/UofT/Y1/HPS120/01 Lecture Notes/11 AI in Science#The original Mechanical Turk\|Mechanical Turk]]
	- Are people doing this?
		- No idea.
- Neural networks are *proprietary*
	- Owned by private companies who do not disclose how they work
	- We have no idea how the models are structured internally, what data they use, how it is curated, how its weighted
		- All private property

# Current limits of AI in science

- It is a human who has to check if neural networks are looking at the right stuff in the right ways
	- Intelligence does not spontaneously tumble out of the system, becoming more smarter and objective than us
	- You have to feed all that in at the start
- Does not mean that it is impossible for **algorithmic fairness**
	- It is *fully* possible, but you have to try and put in the effort
- These systems are optimizers
	- Optimize exactly and only for what we tell it to optimize it for
	- e.g., why AI is so good at playing chess:
		- You optimize for something unambiguous and formally defined: checkmate.
		- A crisp concept

> [!note] 
> - Could sum this up by nothing that current AI is capable only of pursuing the goals we give it
> - Does not understand those goals in any deep way, if we specify them poorly, it has no way of knowing that
> - Certainly cannot make the conceptual leaps we associate with deep scientific breakthorughs

- AI can play the rules of the game
	- A paradigm shift is when the rules of the game change
		- The basic standards of evidence, reasoning, relevant experiments
	- You are not going to get a new paradigm out of this structure of neural networks

- The more data and the more precise the data, the more the umbrella term problem can be solved
- Algorithmic fairness:
	- solvable, not if you think AI is objective in ways that humans aren’t; not if you think objectivity tumbles out of the fact that a machine is objective
	- Machines are not objective unless if we tell them what objectivity looks like

- This is not to say that AI has no place in modern science
	- When goals are well specified, and the routes to those goals are well understood, it can be enormously helpful

# Bringing this back to meta-analysis
Consider the problems in [[900 Archive/UofT/Y1/HPS120/01 Lecture Notes/10 Meta-Analysis\|meta-analysis]]:
1. Which data do we include?
2. How should it be weighted?

- Precisely the kind of questions that an AI needs answers to before it can even begin its task
- Until a radically new form of AI is developed, humans remain an essential part of science

# Key Terms
1. Deep Learning
2. Umbrella terms
3. Recidivism Prediction