---
{"dg-publish":true,"permalink":"/900-archive/uof-t/y1/csc-111/course-notes/files/","created":"2024-01-11T13:27:46.051-08:00","updated":"2024-01-31T17:18:59.384-08:00"}
---

**Preamble**
Week: 1
Course: #CSC111
Covered in: Lecture 1, [[900 Archive/UofT/Y1/CSC111/Course Notes/12 Interlude Nifty Python Features\|12 Interlude Nifty Python Features]]

---
# Opening a file
- How to open a file named `"hello.txt"` for reading, do either of these:
	- 
		```python
		file = open("hello.txt", "r")
		file = open("hello.txt")  # mode is 'r' by default
		```
	
	- File must exist on your computer
	- File must be located in the same folder as the current program running

# Reading files
- How to get an open file object?
	- `open` returns an open file object
	- Store that in a variable, `f = open("hello.txt")`
- How to read the contents of the file?
	- Use file methods:
		- `read`
			- reads the entire file into one string
		- `readline`
			- reads and returns next line
			- returns empty string at EOF
		- `reads`
		- `readlines`
			- reads the entire file into a list of strings
- What are the more memory-intensive methods?
	- `read`, `readlines`
	- read the entire file into memory
- What trailing character do these methods all leave at the end of each line?
	- `'\n'`

### Reading a file `games.txt` using a for loop and while loop

```python
f = open('games.txt')
for line in f:
	print(line.strip())

# Or, using a while loop:
line = f.readline()
while line:
	print(line.strip())
	line = f.readline()
```

- Python remembers where it read up to
- Need to re-open file to reset file pointer to the beginning

- How to decide which method to use to read a file?
	- for loop:
		- reads entire file, one line at a time
		- Use when file contains data that needs to be processed one line at a time
	- readline:
		- reads one line
		- Use in a while loop when file contains data that might need to be processed multiple lines at a time
	- readlines
		- reads entire file at once
		- Use when you know you want the entire while and where having a list of all the lines is useful
	- read
		- reads entire file at once
		- Use when you want the raw file data as a string

# Closing files

- Why close files?
	- Open files use up resources on computer
		- may affect performance
	- Changes to an open file won’t ve visible until after the filter is closed
	- Open files could be treated as locked, so no other program would be able to use it
- How to close files?
	- Call `f.close()`, where `f` is the variable name that is a reference to the file

# Using `with`

```python
with open(filename) as f:
	f.read()
	...
```

- `with` statement closes the file for you without you telling it to