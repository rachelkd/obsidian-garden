---
{"dg-publish":true,"permalink":"/100-academia/sta-237/05-bivariate-probability-distributions/week-10-more-transformations-and-bivariate-probability-distributions/","tags":["lecture","note","stats","university"],"created":"2024-11-17T18:21:38.429-05:00","updated":"2024-11-23T19:52:12.836-05:00"}
---


> [!goal]- Learning Objectives
> 10.1 Use the cdf method, method of transformations and mgfs to determine the probability distribution of a function of one random variable.
> 10.2 Interpret and describe joint discrete and continuous probability distributions.
> 10.3 Obtain cdfs from pmfs/pdfs and pmfs/pdfs from cdfs for bivariate discrete and continuous probability distributions.
> 10.4 Derive marginal and conditional probability distributions from joint probability distributions.
> 10.5 Distinguish between and use joint, marginal and conditional probability distributions to compute probabilities.
> 10.6 Use appropriate expected values to compute means, variances, covariances and correlations for random variables that follow bivariate probability distributions.
> 10.7 Define independent and uncorrelated random variables.
> 10.8 Determine the joint pmf/pdf/cdf for independent random variables.

---

# Lecture Notes

## Review from [[100 Academia/STA237/04 Continuous Random Variables/Functions of a Random Variable\|Functions of a Random Variable]]

> [!question]+ $X \sim \text{Unif}[-2, 2]$. Find the PDF of $Y = X^{2}$
> - $Y = g(x)$ is *not invertible* over the support of $X$
>     - Use CDF method
>
> > [!success]- Solution
> > $$\begin{align*}
> > P(Y \leq y) = P(X^{2} \leq y) &= P(-\sqrt{ y } \leq X \leq \sqrt{ y }) \\
> > &= F_{X}(\sqrt{ y }) - F_{X}(\sqrt{ y }) \\
> > &= \frac{{\sqrt{ y } - (-2)}}{4} - \frac{{-\sqrt{ y } - (-2)}}{4} \\
> > &= \frac{2\sqrt{ y }}{4} \\
> > &= \frac{\sqrt{ y }}{2}
> > \end{align*}$$
> > Then,
> > $$f_{Y}(y) = \frac{d}{dy}F_{y}(y) = \frac{{\frac{1}{2}y^{-\frac{1}{2}}}}{2} = \frac{1}{4\sqrt{ y }}$$
> > for $0 \leq y \leq 4$ and 0 otherwise

> [!question]+ $X \sim \text{Unif}[-1, 3]$. Find the PDF of $Y = X^2$
> - $Y = g(X)$ is *not invertible* over the support of $X$
> - Support of $Y$ is $[0, 9]$
> - Note: $[-1, 1)$ is two-to-one, and $[1,3]$ is one-to-one
>
> ```desmos-graph
> left=-2; right=4;
> top=10; bottom=-1;
> ---
> y=x^2
> (1,1)|point|red
> (-1,1)|point|red
> (3,9)|point|red
> ```
>
> > [!success]- Solution
> > Using CDF method:
> > For $0 < y < 1$:
> > $$\begin{align*}
> > P(Y \leq y) &= P(-\sqrt{y} \leq X \leq \sqrt{y}) \\
> > &= F_X(\sqrt{y}) - F_X(-\sqrt{y}) \\
> > &= \frac{\sqrt{y} - (-1)}{4} - \frac{-\sqrt{y} - (-1)}{4} \\
> > &= \frac{2\sqrt{y}}{4} = \frac{\sqrt{y}}{2}
> > \end{align*}$$
> > Taking the derivative:
> > $$f_Y(y) = \frac{d}{dy}\left(\frac{\sqrt{y}}{2}\right) = \frac{1}{4\sqrt{y}}$$
> > 
> > For $1 < y < 9$:
> > $$\begin{align*}
> > P(Y \leq y) &= P(X^2 \leq y) \\
> > &= P(-\sqrt{y} \leq X \leq \sqrt{y}) \cap P(-1 \leq X \leq 3) \\
> > &= P(\sqrt{y} \leq X \leq 3) \text{ (since } -\sqrt{y} < -1 \text{ when } y > 1\text{)} \\
> > &= \frac{3 - \sqrt{y}}{4}
> > \end{align*}$$
> > Taking the derivative:
> > $$f_Y(y) = \frac{d}{dy}\left(\frac{3 - \sqrt{y}}{4}\right) = \frac{-1}{4} \cdot \frac{1}{2\sqrt{y}} = \frac{-1}{8\sqrt{y}}$$
> > Since PDF must be non-negative, we take the absolute value:
> > $$f_Y(y) = \left|\frac{-1}{8\sqrt{y}}\right| = \frac{1}{8\sqrt{y}}$$
> > 
> > Therefore, the complete PDF is:
> > $$f_Y(y) = \begin{cases}
> > \frac{1}{4\sqrt{y}}, & 0 < y < 1 \\
> > \frac{1}{8\sqrt{y}}, & 1 < y < 9
> > \end{cases}$$

- [[100 Academia/STA237/05 Bivariate Probability Distributions/Probability Distributions of More than One RV\|Probability Distributions of More than One RV]]
- [[100 Academia/STA237/05 Bivariate Probability Distributions/Finding Probabilities with the PDF\|Finding Probabilities with the PDF]]
