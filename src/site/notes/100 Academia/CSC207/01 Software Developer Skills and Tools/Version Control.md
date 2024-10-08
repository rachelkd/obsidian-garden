---
{"dg-publish":true,"permalink":"/100-academia/csc-207/01-software-developer-skills-and-tools/version-control/","tags":["#lecture","#note","university"],"created":"2024-09-05T13:09:23.000-04:00","updated":"2024-10-08T00:28:26.299-04:00"}
---


# What is Version Control?

- Software dev teams need a way to *track how their software changes* over time
- Implementation: 
    - A **master repository** of files exists on a server
    - i.e., files existing on a computer somewhere
- How do you get people to work on the project, get things done?
    - People **clone** the repo to get their own local copy
    - i.e., make a local copy of the project
- How do you share what you’ve been working on?
    - Significant progress is made → **push** changes to the master repo and **pull** other people’s changes from the master repo
- Repo ==keeps track of every change==
    - People can revert to older versions

> [!important]+ We have this idea of a **Distributed Version Control System**.
> - Distributed → Repo may exist on different machines 
{ #40ec88}


# Why Version Control?

- Backup and restore
    - Accidents happen
- Synchronization
    - Multiple people can make changes
- Short term undo
    - Last change made things worse?
- Long term undo
    - e.g., Find out when a bug was introduced
- Track changes
    - e.g., All changes related to a bug fix
- Sandboxing
    - Try something out locally without messing up the main code
- Branching and merging
    - (better defined sandboxes)
    - Branching allows even locally to have several different copies of the code

→ If we are using version control properly, it is going to facilitate *communication* between our team.

# Plain Text Formats

- What is plain text?
    - Anything where you open the file in your editor and see the words
    - Interpreted formats are stored in binary format
        - Interpreted by the computer, and opens up as a Word doc, for example
        - If you change one line and compare the files in the editor, it would look completely different because of how it is encoded

<!-- break -->
- Plain text formats are well suited to version control
    - e.g., Java code, Python code, markdown, LaTeX, any other “human-readable” file formats
- Changes are tracked → can easily look at difference between two versions of the file being tracked
- Formats like `.docx` or `.xlsx` are less meaningfully stored in a version control system
    - Aren’t plaintext; in an interpreted format
    - Differences when you change them don’t have any human-interpretable meaning → Software developers introduce features like “track changes mode”

