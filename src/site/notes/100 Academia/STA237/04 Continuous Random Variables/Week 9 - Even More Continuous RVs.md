---
{"dg-publish":true,"permalink":"/100-academia/sta-237/04-continuous-random-variables/week-9-even-more-continuous-r-vs/","tags":["lecture","note","stats","university"],"created":"2024-11-09T18:21:55.940-05:00","updated":"2024-11-18T00:51:12.144-05:00"}
---


> [!goal]- Learning Objectives
> - Learn about **exponential** and **gamma** distributions
>     - Determine probabilities, quantiles, and expected values (incl. variances) using pdfs, cdfs, mgfs, and R
> - Apply cdf method (or, if appropriate, the method of transformations) to determine the pdf of a function of a continuous random variable

---

- [[100 Academia/STA237/04 Continuous Random Variables/Exponential Distribution\|Exponential Distribution]]
- [[100 Academia/STA237/04 Continuous Random Variables/Gamma Distribution\|Gamma Distribution]]
- [[100 Academia/STA237/04 Continuous Random Variables/Summary of Continuous Distributions\|Summary of Continuous Distributions]]
- [[100 Academia/STA237/04 Continuous Random Variables/Functions of a Random Variable\|Functions of a Random Variable]]
- [[100 Academia/STA237/04 Continuous Random Variables/Pareto Distribution\|Pareto Distribution]] (from Tutorial)

# Summary of Continuous Distributions

### Uniform Distribution

If $X \sim \text{Unif}(a,b)$:
- Support: $[a,b]$
- PDF: $f(x) = \begin{cases} \frac{1}{b-a}, & a \leq x \leq b \\ 0, & \text{otherwise} \end{cases}$
- CDF: $F(x) = \begin{cases} 0, & x < a \\ \frac{x-a}{b-a}, & a \leq x \leq b \\ 1, & x > b \end{cases}$
- $E[X] = \frac{a+b}{2}$
- $\text{Var}[X] = \frac{(b-a)^2}{12}$
- MGF: $M_X(t) = \begin{cases} \frac{e^{tb}-e^{ta}}{t(b-a)} & \text{if } t \neq 0 \\ 1 & \text{if } t = 0 \end{cases}$

### Normal Distribution

If $X \sim N(\mu,\sigma^2)$:
- Support: $(-\infty,\infty)$
- PDF: $f(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$
- CDF: No closed form (use R or tables)
- $E[X] = \mu$
- $\text{Var}[X] = \sigma^2$
- MGF: $M_X(t) = e^{\mu t + (\sigma^2t^2)/2}$

### Exponential Distribution

- Models the time *until* the first event or between events

If $X \sim \text{Exp}(\lambda)$:
- Support: $[0,\infty)$
- PDF: $f(x) = \lambda e^{-\lambda x}$ for $x \geq 0$
- CDF: $F(x) = 1-e^{-\lambda x}$ for $x \geq 0$
- $E[X] = \frac{1}{\lambda}$
- $\text{Var}[X] = \frac{1}{\lambda^2}$
- MGF: $M_X(t) = \frac{\lambda}{\lambda-t}$ for $t < \lambda$

### Gamma Distribution

- Models the time until $\alpha$ events happen

If $X \sim \text{Gamma}(\alpha,\lambda)$:
- Support: $[0,\infty)$
- PDF: $f(x) = \frac{\lambda^\alpha x^{\alpha-1}e^{-\lambda x}}{\Gamma(\alpha)}$ for $x \geq 0$
- $E[X] = \frac{\alpha}{\lambda}$
- $\text{Var}[X] = \frac{\alpha}{\lambda^2}$
- MGF: $M_X(t) = \left(\frac{\lambda}{\lambda-t}\right)^\alpha$ for $t < \lambda$
- Note: When $\alpha = 1$, reduces to $\text{Exp}(\lambda)$

> [!info]+ Exponential and Gamma distributions
> - Number of events that occur follow a [[100 Academia/STA237/03 Discrete Random Variables/Poisson Distribution\|Poisson Distribution]] with rate $\lambda$
>
> > [!summary]+ Assumptions
> > - Same as Poisson distribution
> > - ==Independent non-overlapping intervals==
> > - ==Individuality of events== (no two events at the same time)
> > - ==Uniformity== (events occur at a uniform rate)
>
> - Time to first event (or time in between events) follows $\text{Exp}(\lambda)$
> - Time to $\alpha$-th event follows $\text{Gamma}(\alpha, \lambda)$
> - Can also be used to model distances, etc.
>     - Can be used in *any* setup where the number of events follow the Poisson distribution
>     - e.g., Time you wait for a bus, distance on the road until a pothole, length of fabric until a defect
> - Exponential distribution can also be thought of as the *limiting distribution* of the Geometric
>     - Similar to how Poisson is the *limiting distribution* of the Binomial