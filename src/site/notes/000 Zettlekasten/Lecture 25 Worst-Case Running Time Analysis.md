---
{"dg-publish":true,"permalink":"/000-zettlekasten/lecture-25-worst-case-running-time-analysis/","created":"2023-11-17T18:05:55.144-05:00","updated":"2023-11-18T20:56:31.565-05:00"}
---

#CSC110 

**Covers:**
- [[000 Zettlekasten/9.8 Worst-Case Running Time Analysis\|9.8 Worst-Case Running Time Analysis]]
---
```table-of-contents
```
---
# Summation

$$\sum\limits_{j = a}^{j = b} x = (b - a + 1) \cdot x$$
<div class="caption" style="color: grey"><i>Term being summed does not depend on summation index. Repeated addition of a fixed quantity</i></div>

$$
\sum\limits_{j = a}^{j = b} j
$$
<div class="caption" style="color: grey"><i>Term being summed does depend on summation index.</i></div>

For all $m \in \mathbb{N}$ and $r \in \mathbb{R}$ where $r \neq 1$,

$$\begin{align*}
\sum\limits_{j = 0}^{m} j &= \frac{{m(m+1)}}{2}
&& \sum\limits_{j =0}^{m} j^{2} = \frac{{m(m+1)(2m+1)}}{6} \\
\sum\limits_{j = 0}^{m} j^{3} &= \big{(} \frac{{m(m+1)}}{2} \big{)} ^ {2}
&& \sum\limits_{j = 0}^{m} r^{j} = \frac{r^{m+1} - {1}}{{r-1}}
\end{align*}$$
```python
>>> from timeit import timeit
>>> lst = list(range(0, 10000000))
>>> timeit('42 in lst', number=100, globals=globals())
???
>>> timeit('-1 in lst', number=100, globals=globals())
???
```

The running time of `in` with a list can vary significantly.

### List length vs. time taken
`item in lst` for different `item`s
![list_length_vs_time_in_operator.png|undefined](/img/user/Files/list_length_vs_time_in_operator.png)

**How are we going to talk about the running time of finding an element in a list?**

# Evaluating `item in lst` requires searching

```python
def search(lst: list[int], item: int) -> bool:
	"""Return whether item is in lst."""
	for x in lst:
		if x == item:
			return True
	return False
```
{ #81b51b}


<div class="caption" style="color: grey"><i>This is how the “in” operation is implemented.</i></div>

> [!note] 
> - Running time of `search` does not just depend on the length of `lst`, but also the elements in `lst` and the value of `item`.
> - Running time is not simply a *function* of input size: multiple inputs of the same size can have vastly different running times.
> 
> **We describe the worst-case running time.**


# Worst-case running time

> [!note] 
> Let `func` be an algorithm, and $\mathcal{I}_{n}$ be the set of inputs to `func` of size $n$ (where $n \in \mathbb{N}$).
> - We define the **worse-case running time** of `func` as:
> $$WC_{\texttt{func}} (n) = \text{max} \{ \text{running time of } \texttt{func} (x) \mid x \in \mathcal{I}_{n} \}$$

## Worst-case running-time analysis

- Goal of a **worst-case running-time analysis** of `func`:
	- Find an *elementary* function $f$ such that $WC_{\texttt{func}} \in \Theta (f)$
	- This means $WC_{\texttt{func}} \in \mathcal{O} (f)$ and $WC_{\texttt{func}} \in \Omega (f)$

### Analyze the worst-case running time of `search`

- Intuition:
	- Maximum runtime occurs when `item` is not in `lst`
	- Roughly $n$ steps happen, where $n =$ `len(lst)` 
- We do not try to compute $WC_{ \texttt{func} }$ exactly:
	- We find *matching upper and lower bounds* on running time:
		1. Find an elementary function $f$ such that $WC_{ \texttt{func} } \in \mathcal{O} (f)$
		2. Show that $WC_{ \texttt{func}} \in \Omega (f)$
		3. Conclude that $WC_{ \texttt{func} } \in \Theta (f)$

#### Finding an upper bound on the worst-case running time
Let $S$ be a set of numbers and $M \in \mathbb{R}$.
$M$ is an *upper bound on $\texttt{max} (S)$* provided $\forall x \in S, x \le M$.
(That is, if **every** element of $S$ is $\le M$, then $\texttt{max} (S) \le M$.)

> [!note]
> $f$ is an **upper bound** on $WC_{\texttt{func}}$ when:
> $$\forall n \in \mathbb{N}, WC_{ \texttt{func} (n)} (n) \le f(n)$$
> - i.e., (after unpacking $WC_{\texttt{func}} (n)$)
>   $$\forall n \in \mathbb{N}, \text{max\{running time of } \texttt{func} (x) \mid x \in \mathcal{I}_{n} \} \le f (n)$$
> - i.e., (after thinking about *upper bounds* on sets)
> $$\forall n \in \mathbb{N}, \forall x \in \mathcal{I}_{n}, \text{ running time of } \texttt{func} (x) \le f(n)$$

To find an **upper bound on the worst-case running time of `func`**, we:
- Let $n$ be an **arbitrary** natural number.
- Let $x$ be an **arbitrary** input to `func` of size $n$


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/000-zettlekasten/lecture-25-worst-case-running-time-analysis/#81b51b" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



```python
def search(lst: list[int], item: int) -> bool:
	"""Return whether item is in lst."""
	for x in lst:
		if x == item:
			return True
	return False
```

</div></div>


*Worst-case analysis (upper bound) of `search`.*
Let $n \in \mathbb{N}$, and let `lst` be an **arbitrary** list of $n$ `int`s, and let `item` be an arbitrary `int`.
- The for loop takes *at most* $n$ iterations, and each iteration takes 1 step (constant time), for a total of *at most* $n$ steps.
- The `return False` either happens or does not; it takes *at most* 1 step.
The total running time is *at most* $n + 1$ steps, which is $\mathcal{O} (n)$.
Hence, $WC_{\texttt{search}} (n) \in \mathcal{O} (n)$.

> [!note] 
> “At most” describes an upper bound.

#### Finding a lower bound on the worst-case running time
- First, a thought experiment:
	- Let $S$ be a set of numbers.
	- If $42 \in S$, what can you conclude about $\text{max} (S)$?
		- $\text{max} (S) \ge 42$
		- $42$ is a **lower bound** on $\text{max} (S)$
		- Since $42 \ge 14$, you can also conclude that $14$ is a lower bound on $\text{max} (S)$.
	- $m$ is a **lower bound on $\text{max} (S)$** when $\exists x \in S, x \ge m$.
		- If *some* element of $S$ is $\ge m$, then $\text{max} (S) \ge m$

> [!note] 
> $f$ is a lower bound on $WC_{ \texttt{func} }$ when
> $$\forall n \in \mathbb{N}, WC_{\texttt{func}} (n) \ge f(n)$$
> - i.e., (after unpacking $WC_{\texttt{func}} (n)$)
>   $$\forall n \in \mathbb{N}, \text{max\{running time of } \texttt{func} (x) \mid x \in \mathcal{I}_{n} \} \ge f(n)$$
> - i.e., (after thinking about *lower bounds* on sets)
>    $$\forall n \in \mathbb{N}, \exists x \in \mathcal{I}_{n}, \text{running time of } \texttt{func} (x) \ge f(n)$$

To find a *lower bound on the worst-case running time of `func`*, we:
- Let $n$ be an arbitrary natural number
- Pick a specific input $x$ to `func` of size $n$
- Find a lower bound on the running time of `func(x)`
	- Usually can find an *exact* running time of `func(x)`


<div class="transclusion internal-embed is-loaded"><a class="markdown-embed-link" href="/000-zettlekasten/lecture-25-worst-case-running-time-analysis/#81b51b" aria-label="Open link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a><div class="markdown-embed">



```python
def search(lst: list[int], item: int) -> bool:
	"""Return whether item is in lst."""
	for x in lst:
		if x == item:
			return True
	return False
```

</div></div>


*Worst case analysis (lower bound).*
Let $n \in \mathbb{N}$. Let `lst = [1, 2, ..., n]` and `item = 0`.
The for loop takes $n$ iterations (the if condition is never `True`). Each iteration takes 1 step, for a total of $n$ steps.
The `return False` executes and takes 1 step.
The total running time is $n + 1$ steps, which is $\Theta (n)$.
Hence, $WC_{ \texttt{search} } \in \Omega (n)$.

#### Putting it together
1. We proved that $WC_{ \texttt{search} } \in \mathcal{O}(n)$
2. We found an **input family** (set of inputs, one for each $n \in \mathbb{N}$) whose running time is $\Theta (n)$
	- This told us that $WC_{ \texttt{search} } \in \Omega (n)$
3. Putting these two parts together, we can conclude that $WC_{ \texttt{search} } \in \Theta (n)$

# `any` and `all` revisited

- `any` and `all` are implemented using early returns
	- `any` can stop as soon as it encounters a `True`
	- `all` can stop as soon as it encounters a `False`
- Their worst-case running time is $\Theta (n)$, where $n$ is the size of the input collection.