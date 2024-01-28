---
{"dg-publish":true,"dg-path":"academia/MAT223/W3/Reduced Row Echelon.md","permalink":"/academia/mat-223/w3/reduced-row-echelon/","created":"2024-01-24T15:12:46.865-05:00","updated":"2024-01-26T16:55:54.640-05:00"}
---

**Preamble**
Week: [[100 📒 Academia/MAT223/_MAT223 Notes\|3]]
Course: #MAT223
Date: 2024-01-24
Module: Appendix 3

---

[Video](https://www.youtube.com/watch?v=7bxGuzUMYsY)

- A matrix is in **row echelon form (REF)** if it has the following three properties:
	- All nonzero rows are above any rows of all zeros
	- The leading entry of each row is in a column to the right of the leading entry of the row above it
	- The leading entry in each row is equal to 1


- A matrix in **reduced row echelon form** (RREF) if:
	- The first non-zero entry in every row is 1
		- i.e., leading ones
	- Above and below each leading one are zeros
	- The leading ones are arranged in an *echelon* (staircase pattern)
		- Every leading one is to the right of the leading one above it
		- All leading ones are as far up in the matrix as possible
	- ![3_rref.png|400](/img/user/Files/mat223/3_rref.png)

### Example. Matrix in RREF

$$\begin{bmatrix} 
1  & 0 & 5 & 6 \\ 
0 & 1 & 5 & 2  \\ 
0 & 0 & 0 & 0
 \end{bmatrix}$$
### Example. Matrix not in RREF

$$\begin{bmatrix} 
0 & 1 & 5 & 2  \\ 
1 & 0 & 5 & 6  \\ 
0 & 0 & 0 & 0
 \end{bmatrix}$$
 - Leading ones are NOT arranged in an echelon

$$\begin{bmatrix} 
1 & 0 & 2 & 3  \\ 
0 & 4 & 5 & 6  \\
0 & 0 & 0 & 0
 \end{bmatrix}$$
 - First non-zero entry in $R_{2}$ is 4

$$\begin{bmatrix} 
0 & 0 & 0 & 0 \\
1 & 2 & 5 & 6  \\ 
0 & 1 & 5 & 2
 \end{bmatrix}$$
 - Leading ones are not as far up as possible
 - Above the 1 in $R_{3}$ is a non-zero number (2)

# RREF Vocabulary

Consider 
$$\begin{bmatrix} 0 & 1 & 2 & 0 & 1 \\ 0 & 0 & 0 & 1 & -3 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix}$$

When a matrix is in RREF:

- **pivots**
	- leading ones
- **pivot columns**
	- columns with leading ones
		- e.g., $C_{2}, C_{4}$
- **free variable columns**
	- columns without leading ones
		- e.g., $C_{1}, C_{3}, C_{5}$
			- an **augmented** column is *not* called a pivot column or free variable column

