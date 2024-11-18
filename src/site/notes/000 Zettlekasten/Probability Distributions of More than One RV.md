---
{"dg-publish":true,"permalink":"/000-zettlekasten/probability-distributions-of-more-than-one-rv/","tags":["lecture","note","stats","university"],"created":"2024-11-17T19:15:10.867-05:00","updated":"2024-11-17T20:23:43.455-05:00"}
---


# Review: Joint vs. Marginal Probabilities

See [[100 Academia/STA237/02 Conditional Probability and Independence/Conditional Probability\|Conditional Probability]]


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



# Contingency Tables

Consider a survey that asks:
- Do you drink coffee? Yes/No
- Do you drink tea? Yes/No

<!-- break -->
- Relationship between two of the outcomes of two experiments with a finite sample sample can be shown using a **contingency table**

![|500](https://i.imgur.com/crFyylk.jpeg)

- **Joint distribution**
    - Where we consider both coffee and tea variables together (i.e., jointly)
- **Marginal distribution**
    - Consider only one variable
        - As if other variable was not even there
    - Working only with outside/margins of table

![|400](https://i.imgur.com/87231fo.jpeg)


</div></div>



<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">



# Conditional Distributions

> [!def] **Conditional distribution**
> - Condition on one value of one variable and consider what happens with other variable for only these people
> - (e.g., non-coffee drinkers)

- Out of non-coffee drinkers, how many drink tea?
    - ![|400](https://i.imgur.com/7FiJha8.jpeg)
    - $P(T|C^{C})= \frac{40}{84}$
    - “$T|C^{C}$” Tea drinkers *given* non-coffee drinkers

<!-- break -->
- When we find a *conditional probability*, we are actually dealing with two events:
    - $A$ = Event that we are interested in (e.g., Tea drinkers)
    - $B$ = Event that we already know has happened and want to condition on (e.g., non-coffee drinkers)
- Since we already know that event B happened, we can ignore anything that is not B
- Venn diagram: If we know we are in the circle that represents B, what is the probability of being in A?
- We do this by **conditioning on B**
    - ==Remove== anything in our collection of outcomes of our experiment that is not included in B
    - ==Think of B as our new sample space==


</div></div>


> [!example]+ Contingency Table Example - Ice Cream Survey
> Given data from survey of middle and high school students about ice cream preferences:
>
> |              | Vanilla | Chocolate | Strawberry |
> |--------------|---------|-----------|------------|
> |Middle School | 78      | 36        | 12         |
> |High School   | 53      | 47        | 29         |
> >
> > [!question]- Different Types of Probability Calculations
> > 1. **Marginal Probability**
> >    - P(middle school) = $\frac{78 + 36 + 12}{255} = \frac{126}{255}$
> >    - Total students = 255 (sum of all cells)
> >
> > 2. **Joint Probability**
> >    - P(high school AND strawberry) = $\frac{29}{255}$
> >
> > 3. **Conditional Probability**
> >    - P(chocolate | high school) = $\frac{47}{129}$
> >    - Denominator = total high school students (53 + 47 + 29)
> >
> >    - P(middle school | vanilla) = $\frac{78}{131}$
> >    - Denominator = total vanilla preferences (78 + 53)
>
> > [!question]- Testing for Independence
> > Two events A and B are independent if $P(A|B) = P(A)$ for all values
> >
> > Testing if school level and ice cream preference are independent:
> > - P(vanilla | middle school) = $\frac{78}{126}$
> > - P(vanilla | high school) = $\frac{53}{129}$
> >
> > Since these conditional probabilities are not equal, school level and ice cream preference are **not** independent.
>
> > [!important]+ Key Formulas
> > - Marginal: $P(A) = \frac{\text{row or column total}}{\text{grand total}}$
> > - Joint: $P(A \text{ and } B) = \frac{\text{cell count}}{\text{grand total}}$
> > - Conditional: $P(A|B) = \frac{P(A \text{ and } B)}{P(B)} = \frac{\text{cell count}}{\text{row or column total}}$
> > - Independence: $P(A|B) = P(A)$ or equivalently $P(A \text{ and } B) = P(A)P(B)$

# Random Variables

> [!example]+ Two Dice Roll
> Consider rolling two fair dice:
> - $X$ = Number on dice 1, $X \sim \text{Unif}\{1,2,\ldots,6\}$
> - $Y$ = Number on dice 2, $Y \sim \text{Unif}\{1,2,\ldots,6\}$
> - $X$ and $Y$ are independent
>
> Joint PMF table (each cell = 1/36):
> ![|center|400](https://i.imgur.com/81dHM2K.png)
>
> > [!question]+ Probability Calculations
> > 1. <mark style="background: #FFB86CA6;">P(Dice 1 = 2 and Dice 2 = 3)</mark>
> >    - Direct from joint PMF table: $\frac{1}{36}$
> >    - Since independent: $P(X=2)P(Y=3) = \frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}$
> >
> > 2. <mark style="background: #D2B3FFA6;">P(Dice 1 ≤ 2 and Dice 2 ≤ 3)</mark>
> >    - Count favourable outcomes: 6 cells (2 × 3 grid)
> >    - $P(X \leq 2, Y \leq 3) = \frac{6}{36} = \frac{1}{6}$
> >    - Since independent: $P(X \leq 2)P(Y \leq 3) = \frac{2}{6} \cdot \frac{3}{6} = \frac{1}{6}$
>
> > [!important]+ Key Points
> > - For independent RVs:
> >   - $P(X=a, Y=b) = P(X=a)P(Y=b)$
> >   - Joint PMF has equal probabilities when uniform
> >   - Can multiply marginal probabilities for any event

# Joint PMFs and CDFs

> [!def]+ Joint PMF
> **Joint Probability Mass Function (PMF)** of $X$ and $Y$:
> $$p_{X,Y}(x,y) = P(X = x \cap Y = y)$$
> - Gives probability of specific $(x,y)$ pairs

> [!def]+ Joint CDF
> **Joint Cumulative Distribution Function (CDF)**:
> $$F_{X,Y}(a,b) = P(X \leq a \cap Y \leq b)$$ for $-\infty < a,b < \infty$
> - Gives probability of $X \leq a$ AND $Y \leq b$

## Visualization

![](https://i.imgur.com/V0IMBen.png)

- Joint PMFs can be represented as $3$D plots:
    - $X$-axis: values of first random variable
    - $Y$-axis: values of second random variable
    - $Z$-axis (height): probability of each $(x,y)$ pair

## Properties

 1. Probability over a region $A$:
    - For discrete pairs $(x,y)$ in sample space $\Omega$:
    - $$P((X,Y) \in A) = \sum_{(x,y)\in A} p_{X,Y}(x,y)$$
    - Sums joint PMF values over all points in region $A$
2. Probability over intervals:
    - $$P(a \leq X \leq b, c \leq Y \leq d) = \sum_{x=a}^b \sum_{y=c}^d p_{X,Y}(x,y)$$
    - Used for rectangular regions in $xy$-plane
3. Total Probability:
    - All probabilities must sum to $1$
    - If support of $X$ is $S$ and $Y$ is $T$:
    - $$\sum_{x\in S} \sum_{y\in T} p_{X,Y}(x,y) = 1$$

# From Joint to Marginal PMFs

> [!def]+ Marginal Distributions
> If $X$ takes values in a set $S$, and $Y$ takes values in a set $T$, then:
>
> **Marginal distribution of $X$**:
> $$P(X = x) = \sum_{y\in T} P(X = x, Y = y)$$
>
> **Marginal distribution of $Y$**:
> $$P(Y = y) = \sum_{x\in S} P(X = x, Y = y)$$
>
> Wagaman and Dobrow (2021), pp 136

## Example: Marginal PMFs for Two Dice

Consider rolling two fair dice:
- $X$ = Number on dice 1
- $Y$ = Number on dice 2
- Joint PMF: $p_{X,Y}(x,y) = \frac{1}{36}$ for $x,y \in \{1,2,3,4,5,6\}$, and $0$ otherwise

> [!example]+ Finding Marginal PMFs
> **For $X$ (Dice 1)**:
> - $P(X = x) = \sum_{y=1}^6 p_{X,Y}(x,y) = \sum_{y=1}^6 \frac{1}{36} = \frac{6}{36} = \frac{1}{6}$
> - Sum over all possible values of $Y$ (6 values)
>
> **For $Y$ (Dice 2)**:
> - $P(Y = y) = \sum_{x=1}^6 p_{X,Y}(x,y) = \sum_{x=1}^6 \frac{1}{36} = \frac{6}{36} = \frac{1}{6}$
> - Sum over all possible values of $X$ (6 values)

## Conditional PMFs

For the two dice example:
- $X$ = Number on dice 1
- $Y$ = Number on dice 2
- Joint PMF: $p_{X,Y}(x,y) = \frac{1}{36}$ for $x,y \in \{1,2,3,4,5,6\}$

> [!info]+ Conditional PMF
> To find conditional PMF:
> 1. Focus only on row/column being conditioned on
> 2. Rescale probabilities to sum to 1
> 3. $$P(Y|X=x) = \frac{P(Y \text{ and } X=x)}{P(X=x)}$$

> [!example]+ Finding $P(Y|X=5)$
> Looking at column where $X=5$:
> - Each cell in column has probability $\frac{1}{36}$
> - $P(X=5) = \frac{6}{36} = \frac{1}{6}$ (marginal probability)
> - Therefore, $P(Y|X=5) = \frac{\frac{1}{36}}{\frac{1}{6}} = \frac{1}{6}$ for all $y$
>
> This shows $Y$ is still uniform when conditioned on $X=5$, which makes sense since dice rolls are independent!

> [!def]+ Conditional PMFs for Discrete Random Variables
> For discrete random variables $X$ and $Y$:
>
> **Conditional PMF of $Y$ given $X$**:
> $$p_{Y|X}(y|X = x) = \frac{p_{X,Y}(x,y)}{p_X(x)}$$
>
> **Conditional PMF of $X$ given $Y$**:
> $$p_{X|Y}(x|Y = y) = \frac{p_{X,Y}(x,y)}{p_Y(y)}$$

# Summary: Two Discrete Random Variables

- Probabilities represented as heights in 3D plot
- Each point $(x,y)$ has associated probability height

> [!important]+ Joint PMF
> $$p_{X,Y}(x,y) = P(X = x, Y = y)$$
> - Properties:
>   - Must be non-negative: $p_{X,Y}(x,y) \geq 0$
>   - Must sum to 1 over all pairs
> - For region $A$: $$P((X,Y) \in A) = \sum_{(x,y)\in A} p_{X,Y}(x,y)$$

> [!important]+ Joint CDF
> $$F_{X,Y}(a,b) = P(X \leq a, Y \leq b)$$ for $-\infty < a,b < \infty$
> - Properties:
>   - Bounded between 0 and 1
>   - Non-decreasing in both variables

> [!important]+ Marginal PMFs
> Sum over other variable:
> - For $X$: $P(X = x) = \sum_{all\,y} p_{X,Y}(x,y)$
> - For $Y$: $P(Y = y) = \sum_{all\,x} p_{X,Y}(x,y)$

> [!important]+ Conditional PMFs
> Ratio of joint to marginal:
> - $p_{Y|X}(y|X = x) = \frac{p_{X,Y}(x,y)}{p_X(x)}$
> - $p_{X|Y}(x|Y = y) = \frac{p_{X,Y}(x,y)}{p_Y(y)}$

# Continuous Random Variables

## Joint PDF

> [!def]+ Joint Density Function
> For continuous random variables $X$ and $Y$ defined on a common sample space, the **joint density function** $f(x,y)$ has the following properties:
> 
> 1. Non-negative: $f(x,y) \geq 0$ for all real numbers $x$ and $y$
> 
> 2. Total probability equals 1:
>    $$\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x,y) \, dx \, dy = 1$$
>    - Represents ==total volume== under the PDF surface
> 
> 3. Probability over region $S \subseteq \mathbb{R}^2$:
>    $$P((X,Y) \in S) = \iint_S f(x,y) \, dx \, dy$$
>
> Source: Wagaman and Dobrow (2021), pp 247

> [!note]- Key Differences from Discrete Case
> - Sums become double integrals
> - PMF becomes PDF (density function)
> - Probabilities found by integrating over regions
> - Height of PDF not directly interpretable as probability

> [!example]+ Finding Normalizing Constant for Joint PDF
> Given joint PDF: $f(x,y) = cxy$ for $1 < x < 4$ and $0 < y < 1$
> 
> To find $c$, use the fact that total probability must equal 1:
> 
> $$\begin{align*}
> 1 &= \int_0^1 \int_1^4 cxy \, dx \, dy \\
> &= c\int_0^1 y \left(\int_1^4 x \, dx\right) dy \\
> &= c\int_0^1 y \left(\frac{15}{2}\right) dy \\
> &= c\left(\frac{15}{2}\right)\left(\frac{1}{2}\right) \\
> &= \frac{15c}{4}
> \end{align*}$$
> 
> Therefore:
> - $c = \frac{4}{15}$
> - Final joint PDF: $$f_{X,Y}(x,y) = \frac{4}{15}xy$$ for $1 < x < 4$ and $0 < y < 1$

### Visualization

- Joint PDFs can be visualized with a ==3D figure==
- Probabilities are *volumes* now
    - Instead of areas when we only had 1 RV

![](https://i.imgur.com/WdlB4n9.jpeg)

> [!example]+ Finding Probability from Joint PDF
> Given: $f(x,y) = \frac{4xy}{15}$ for $1 < x < 4$ and $0 < y < 1$
> 
> Find: $P(2 < X < 3, Y > \frac{1}{4})$
> 
> Solution:
> $$\begin{align*}
> P(2 < X < 3, Y > \frac{1}{4}) &= \int_{\frac{1}{4}}^1 \int_2^3 \frac{4xy}{15} \, dx \, dy \\[1em]
> &= \frac{4}{15} \int_{\frac{1}{4}}^1 y \left[\frac{x^2}{2}\right]_2^3 \, dy \\[1em]
> &= \frac{4}{15} \int_{\frac{1}{4}}^1 y \left(\frac{9}{2} - 2\right) \, dy \\[1em]
> &= \frac{4}{15} \int_{\frac{1}{4}}^1 y \left(\frac{5}{2}\right) \, dy \\[1em]
> &= \frac{4}{15} \cdot \frac{5}{2} \left[\frac{y^2}{2}\right]_{\frac{1}{4}}^1 \\[1em]
> &= \frac{4}{15} \cdot \frac{5}{2} \left(\frac{1}{2} - \frac{1}{32}\right) \\[1em]
> &= \frac{5}{16}
> \end{align*}$$
>
> > [!note]- Steps Explained
> > 1. Set up double integral with correct bounds
> > 2. Integrate with respect to $x$ first
> > 3. Simplify the inner integral result
> > 4. Integrate with respect to $y$
> > 5. Evaluate at the bounds

## Joint CDF

- Same as the “regular” CDF we already know, but
    - Integration region ==is a double integral==

