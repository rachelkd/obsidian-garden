---
{"dg-publish":true,"permalink":"/000-zettlekasten/version-control/","tags":["university","#lecture","#note"],"created":"2024-09-05T13:09:23.496-04:00","updated":"2024-09-05T15:47:26.721-04:00"}
---

# What is version control?

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

> [!important] We have this idea of a **Distributed Version Control System**.
> - Distributed → Repo may exist on different machines 

# Why version control?

- Backup and restore
    - Accidents happen
- Synchronization
    - Multiple people can make changes
- Short term undo
    - Last change made things worse?
- Long term undo
    - Find out when a bug was introduced
- Track changes
    - All changes related to a bug fix
- Sandboxing
    - Try something out without messing up the main code
- Branching and merging
    - (better defined sandboxes)

# Plain text formats

- Plain text formats are well suited to version control
    - e.g., Java code, Python code, markdown, LaTeX, any other “human-readable” file formats
- Changes are tracked → can easily look at difference between two versions of the file being tracked
- Formats like `.docx` or `.xlsx` are less meaningfully stored in a version control system
    - Differences when you change them don't have any human-interpretable meaning → Software developers introduce features like "track changes mode"

