---
{"dg-publish":true,"dg-path":"academia/CSC209/3 Advanced Features of C/Files (PCRS).md","permalink":"/academia/csc-209/3-advanced-features-of-c/files-pcrs/","tags":["cs","lecture","note","university"],"created":"2025-01-21T03:00:24.622-05:00","updated":"2025-01-24T21:15:40.000-05:00"}
---


# Files

## Introduction

- Variables in memory are ==temporary== and lost when the program stops
- Files allow data to persist between program executions
- Common uses:
    - Storing program results
    - Reading input data

### Opening Files

- Use `fopen` to open a file and create a ==stream==
- Syntax:

    ```c
    FILE *file_pointer = fopen(const char *filename, const char *mode);
    ```

- Modes:
    - `"r"`: Read from file
        - File must exist
    - `"w"`: Write to file
    - `"a"`: Append to file

### File Pointer

- `fopen` returns a ==file pointer== (`FILE *`)
- Used to:
    - Read/write to the file
    - Close the file
- Always check if `fopen` returns `NULL` (indicates failure):

    ```c
    if (file_pointer == NULL) {
        fprintf(stderr, "Error opening file\n");
        return 1;
    }
    ```

### Closing Files

- Use `fclose` to close a file
- Syntax:

    ```c
    int error = fclose(file_pointer);
    ```

- Returns `0` on success, nonzero on failure
- Always check for errors:

    ```c
    if (error != 0) {
        fprintf(stderr, "fclose failed\n");
        return 1;
    }
    ```

### Example. Opening and Closing a File

```c title:fopen.c
#include <stdio.h>

int main() {
    int error;
    FILE *scores_file;

    scores_file = fopen("top10.txt", "r");
    if (scores_file == NULL) {
        fprintf(stderr, "Error opening file\n");
        return 1;
    }

    printf("File opened: we can use it here\n");

    error = fclose(scores_file);
    if (error != 0) {
        fprintf(stderr, "fclose failed\n");
        return 1;
    }

    return 0;
}
```

```plaintext title:top10.txt
Dan 12000
Michelle 11400
Diane 10700
Anya 9900
Arnold 9200
Jen 8000
Paul 7000
Danny 4500
Karen 4400
Andrew 1337
```

- Files provide ==persistent storage== for data
- Always check for errors when opening/closing files
- Use `fprintf(stderr, …)` for error messages
- Clean up resources by closing files after use

## Reading From Files

### `fgets` Function

- Used to read ==text== or complete lines from a stream

    ```c
    char *fgets(char *s, int n, FILE *stream);
    ```

- Parameters:
    - `s`: Pointer to memory where the read data is stored
        - e.g., `char array`)
    - `n`: Maximum number of characters to read
        - Including `\0`
    - `stream`: Source of data (e.g., file pointer or `stdin`)
- Returns:
    - On success: `s`
    - On failure: `NULL`
- Reads at most `n - 1` characters
- Stops reading at the ==end of a line== or end of file
- Adds a **null terminator** `\0` to the end of the string

### Example. Reading from a File

```c
#include <stdio.h>
#define LINE_LENGTH 80

int main() {
    FILE *scores_file;
    int error;
    char line[LINE_LENGTH + 1];  // +1 for null-terminator

    scores_file = fopen("top10.txt", "r");
    if (scores_file == NULL) {
        fprintf(stderr, "Error opening file\n");
        return 1;
    }

    // Read each line until end of file
    while (fgets(line, LINE_LENGTH + 1, scores_file) != NULL) {
        printf("%s", line);
    }

    error = fclose(scores_file);
    if (error != 0) {
        fprintf(stderr, "fclose failed\n");
        return 1;
    }

    return 0;
}
```

### File Cursor

- A ==cursor== keeps track of the current position in the file
- Starts at the beginning of the file
- Moves forward after each successful `fgets` call
- Reaches the end of the file after reading all lines

```c
#include <stdio.h>
#define LINE_LENGTH 80

int main() {
    char line[LINE_LENGTH + 1];

    while (fgets(line, LINE_LENGTH + 1, stdin) != NULL) {
        printf("You typed: %s", line);
    }

    return 0;
}
```

- `fgets` can also read from `stdin` (keyboard by default)
- `fgets` is ideal for reading ==text files== line by line
- Always account for the ==null terminator== when defining buffer size
- Use `stdin` for reading input from the keyboard
- Check for `NULL` to detect end of file or errors

## `fscanf` Function

- Similar to `scanf`, but reads from any ==stream== (not just `stdin`)

    ```c
    int fscanf(FILE *stream, const char *format, ...);
    ```

- Returns:
    - Number of items successfully read
    - `EOF` if end of file is reached or an error occurs
- First argument is a ==file pointer== (`FILE *`)
- Can read from files, not just standard input
- Same format specifiers as `scanf` (e.g., `%d`, `%s`, `%f`)

### Example. Reading Structured Data

```c
#include <stdio.h>

int main() {
    FILE *scores_file;
    int error, total;
    char name[81];  // 80 characters + null terminator

    scores_file = fopen("top10.txt", "r");
    if (scores_file == NULL) {
        fprintf(stderr, "Error opening file\n");
        return 1;
    }

    // Read name and score from each line
    while (fscanf(scores_file, "%80s %d", name, &total) == 2) {
        printf("Name: %s. Score: %d.\n", name, total);
    }

    error = fclose(scores_file);
    if (error != 0) {
        fprintf(stderr, "fclose failed\n");
        return 1;
    }

    return 0;
}
```
