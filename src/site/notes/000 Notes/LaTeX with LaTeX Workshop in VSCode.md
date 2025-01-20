---
{"dg-publish":true,"dg-path":"notes/LaTeX with LaTeX Workshop in VSCode.md","permalink":"/notes/la-te-x-with-la-te-x-workshop-in-vs-code/","created":"2025-01-19T22:11:49.013-05:00","updated":"2025-01-19T22:32:40.780-05:00"}
---


# LaTeX with LaTeX Workshop in VSCode

## 1. Download TeX Live

- On MacOS: <https://www.tug.org/mactex/mactex-download.html>

## 2. Install and Configure LaTeX Workshop in VS Code

![](https://mathjiajia.github.io/install-extension_12622002672664639120_hu172541225290862529.webp)

- After installing extension:
    - Press `Shift` + `Ctrl` + `P` (Windows) or `Shift` + `Cmd` + `P` (macOS) to show all commands.
    - Type `Open User Settings JSON` and open the first item (as shown below).

![](https://mathjiajia.github.io/open-json_15324324291772514197_hu17019227927957955802.webp)

```json title:"Latex Tools Configuration""latex-workshop.latex.tools": [
 {
  "name": "latexmk",
  "command": "latexmk",
  "args": [
   "-synctex=1",
   "-interaction=nonstopmode",
   "-file-line-error",
   "-pdf",
   "-outdir=%OUTDIR%",
   "%DOC%"
  ],
  "env": {}
 },
 {
  "name": "xelatex",
  "command": "xelatex",
  "args": [
   "-synctex=1",
   "-interaction=nonstopmode",
   "-file-line-error",
   "%DOC%"
  ],
  "env": {}
 },
 {
  "name": "pdflatex",
  "command": "pdflatex",
  "args": [
   "-synctex=1",
   "-interaction=nonstopmode",
   "-file-line-error",
   "%DOC%"
  ],
  "env": {}
 },
 {
  "name": "bibtex",
  "command": "bibtex",
  "args": [
   "%DOCFILE%"
  ],
  "env": {}
 }
],
```

```json title:"Latex Recipes"
"latex-workshop.latex.recipes": [
 {
  "name": "pdfLaTeX",
  "tools": [
   "pdflatex"
  ]
 },
 {
  "name": "latexmk 🔃",
  "tools": [
   "latexmk"
  ]
 },
 {
  "name": "xelatex",
  "tools": [
   "xelatex"
  ]
 },
 {
  "name": "pdflatex ➞ bibtex ➞ pdflatex`×2",
  "tools": [
   "pdflatex",
   "bibtex",
   "pdflatex",
   "pdflatex"
  ]
 },
 {
 "name": "xelatex ➞ bibtex ➞ xelatex`×2",
 "tools": [
   "xelatex",
   "bibtex",
   "xelatex",
   "xelatex"
  ]
 }
]
```

## Step 3. Write and Compile

- Open a `.tex` file, or
    - Create a new one
- It should compile on save by default
    - If not, press `option` + `Cmd` + `B` (MacOS), or
    - Choose a recipe from the sidebar
    - ![](https://mathjiajia.github.io/tex-recipes_10309184516684059221_hu3613837266828645116.webp)
- Preview PDF by clicking button in image
    - % I use vscode-pdf extension to view PDFs. It says that it is incompatible with LaTeX Workshop, but just ignore it. The built-in PDF previewer in the extension is buggy for me.

## Step 4. LatexIndent Error on Save

> [!attention]+ LaTeX Workshop formatting failed when compiling
> - The `latexindent` executable is not in system’s `PATH`
> - MacTex installs TeX live in `/usr/local/texlive/2024`
> - You must add the relevant binaries to your `PATH` environment variable

In LaTeX Workshop’s [documentation](https://github.com/James-Yu/latex-workshop/wiki/Install):

> After installing TeX Live, you must add the directory of TeX Live binaries to your PATH environment variable except on Windows. See the [official document](https://www.tug.org/texlive/quickinstall.html). LaTeX Workshop never touches the variable. If VS Code cannot find executables of TeX, it means that **the setting of your system is broken**. For the ways of setting environment variables on Windows, see [link](https://docs.telerik.com/teststudio/features/test-runners/add-path-environment-variables) or [link](https://www.computerhope.com/issues/ch000549.htm). On macOS and Linux, see the [documentation](https://github.com/rbenv/rbenv/wiki/unix-shell-initialization) by the rbenv dev team. Very detailed information is also available on [stackoverflow](https://stackoverflow.com/questions/135688/setting-environment-variables-on-os-x) for macOS.

### Step 4.1

I recommend doing this in Warp for AI help.

1. Open terminal
2. Edit shell configuration file (e.g., `.bash_profile`, `.zshrc`, or `.profile`, depending on your shell). For most macOS users, `.zshrc` is the correct file (if you’re using the default Zsh shell).
   Run the following command to open the file in a text editor:

   ```bash
   nano ~/.zshrc
   ```

3. Add the following line to the file:

   ```bash
   # The next line updates PATH for TeX Live 2024 to enable latexindent and other tools
   export PATH="/usr/local/texlive/2024/bin/universal-darwin:$PATH"
   ```

4. Save the file and exit editor
    - In `nano`, run the Write Out command (`Ctrl` + `O` on MacOS)
5. Install the `File::HomeDir` module using `cpan` (Comprehensive Perl Archive Network):

```bash
cpan File::HomeDir
```

If `cpan` is not installed, you can install it via Homebrew:

```bash
brew install cpanminus
```

## Step 5. Reload VSCode

- Go to the command palette again and reload developer window
    - `Command` + `Shift` + `P`