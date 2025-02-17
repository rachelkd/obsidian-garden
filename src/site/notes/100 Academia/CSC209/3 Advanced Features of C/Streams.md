---
{"dg-publish":true,"dg-path":"academia/CSC209/3 Advanced Features of C/Streams.md","permalink":"/academia/csc-209/3-advanced-features-of-c/streams/","tags":["cs","lecture","note","university"],"created":"2025-01-20T23:50:45.436-08:00","updated":"2025-02-06T14:24:06.618-08:00"}
---


# Streams

> [!summary]+
> - **Streams**
>     - Abstraction for sequentially accessed data
>     - Sources (input) or destinations (output) for data
> - Three default streams are automatically available:
>     - **Standard Input (`stdin`)**
>         - Defaults to the keyboard
>     - **Standard Output (`stdout`)**
>         - Defaults to the screen
>     - **Standard Error (`stderr`)**
>         - Defaults to the screen, used for error messages

- Streams can refer to files, network connections, or devices
- In C:
    - Streams are `FILE *`
        - See [[100 Academia/CSC209/3 Advanced Features of C/Files\|Files]]
    - *Files* are also streams
        - In addition to default streams available
- Use `fprintf` to write to a specific stream
    - e.g., `stderr`
- Streaks keep track of *file position*
    - i.e., *Cursor*

## Default Streams in C

![](https://i.imgur.com/fKRwKPq.png)

> [!def]+ Standard Input (`stdin`)
> - Source of input data
> - Defaults to the keyboard
> - Used by functions like `scanf`

> [!def]+ Standard Output (`stdout`)
> - Destination for normal program output
> - Defaults to the screen
> - Used by functions like `printf`

> [!def]+ Standard Error (`stderr`)
> - Destination for error messages
> - Defaults to the screen
> - Used by functions like `fprintf(stderr, …)`

### Example: Using `fprintf` for Error Messages

- Use `fprintf` to write error messages to `stderr`
- Normal output is written to `stdout` using `printf`

```c
#include <stdio.h>

int main() {
    // Normal output to stdout
    printf(“This is normal output.\n”);
    
    // Error message to stderr
    fprintf(stderr, "This is an error message.\n");
    
    return 0;
}
```

> [!important]+ Why Use `stderr`?
> - Separates normal output from error messages
> - Allows redirecting normal output to a file while keeping errors on the screen
> ```c
> ./program > output.txt  # Redirects stdout to output.txt, stderr remains on screen
> ```

> [!important]+ Stream Flexibility
> - Streams can refer to:
>     - Files (e.g., reading/writing to a file)
>     - Network connections (e.g., sending/receiving data over the internet)
>     - Devices (e.g., printers, sensors)

## Redirection

### Input Redirection

- Standard input refers to the ==keyboard== by default
- Input redirection allows reading from a ==file== instead of the keyboard
- Use the `<` symbol followed by the filename to redirect input

    ```bash
    ./readint < number.txt
    ```

- Example: `readint.c` reads an integer using `scanf`

    ```c
    #include <stdio.h>
    int main() {
        int number;
        scanf("%d", &number);
        printf("The number is %d\n", number);
        return 0;
    }
    ```

- When input is redirected:
    - Program no longer waits for ==keyboard input==
    - Reads directly from the specified file

### Output Redirection

- Standard output refers to the ==screen== by default
- Output redirection allows writing to a ==file== instead of the screen
- Use the `>` symbol followed by the filename to redirect output

    ```bash
    ./outputprog > output.txt
    ```

- Example: `outputprog.c` prints a message using `printf`

    ```c
    #include <stdio.h>
    int main() {
        printf("Where's my text?\n");
        fprintf(stderr, "Printing some stuff on standard error\n");
        return 0;
    }
    ```

- When output is redirected:
    - Output is not displayed on the ==screen==
    - Saved to the specified file instead
- **Warning**: If the file already exists, it will be ==overwritten==

### Summary

- Input/output redirection is a feature of the ==operating system==, not C
- Useful for:
    - Handling large amounts of output
    - Automating input from files
- Limitations:
    - Only ==one file== can be used for input or output redirection
    - Cannot read from or write to multiple files simultaneously

> [!tip]+ Tips
> - Use `>>` instead of `>` to ==append== to a file instead of overwriting it
> - Combine input and output redirection:
>     ```bash
>     ./program < input.txt > output.txt
>     ```
