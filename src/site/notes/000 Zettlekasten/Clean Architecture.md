---
{"dg-publish":true,"permalink":"/000-zettlekasten/clean-architecture/","tags":["cs","lecture","note","university"],"created":"2024-10-10T19:58:31.603-04:00","updated":"2024-10-10T20:50:19.541-04:00"}
---


> [!question]+ Questions to be answered this week
> - What is a **use case**?
> - What is **Clean Architecture** (CA)?
> - What is the CA **dependency rule**?
> - What is a **sequence diagram**?

> [!goal]- Learning Objectives
> - Become more familiar with terminology related to architecture and design
> - Understand clean architecture and its dependency rule
> - Understand how sequence diagrams can help us convey flow of execution in our program

- [[100 Academia/CSC207/02 Principles of Software Design/Solid Design Principles\|SOLID Principles]] are design principles
    - Allow us to reason: Is our design good or not?
    - Can use these principles to *derive* **clean architecture**
    - Principles for OOP in general

# Architecture

Brief summary of Ch. 15 from Clean Architecture textbook.

- What do we mean by **architecture**?
    - ==Design== of the system
    - ==Dividing it into logical pieces== and ==specifying how those pieces communicate== with each other
        - Logical pieces e.g., classes, modules
    - Communication → Thinking about input and output between **layers**

> [!goal]+ “Goal is to facilitate the **development**, **deployment**, **operation**, and **maintenance**, of the software system”
> - What are we actually going to be doing with this program in the future? Are we designing it so that we can do all these things easily?

> “The strategy behind this facilitating is to leave as many options open as possible, for as long as possible.”

- We want to ==avoid making decisions==!
    - Want architecture to be designed so that we don’t lock ourselves into a specific decision
    - Should be designed so we can make those decisions later
- Sign of bad decision:
    - Have to lock in very specific details early on that do not feel fundamental to what you’re trying to do
    - e.g., Locking into a specific database early on (Maybe you want to use a different database later)
- & Good architecture strives to *maximize* programmer productivity
    - Always keep programmer in mind when we design our software

# Policy and Level

Brief summary of Ch. 19 from Clean Architecture textbook.

> [!def]- Policy
> - Describing transformations in our program
> - Given an input, what is the *policy* (i.e., ==logic of the program==) that gives us our output

> “A computer program is a detailed description of the **policy** by which inputs are transformed into outputs.”

- Software design seeks to *separate* policies and *group* them as appropriate
    - Ideally form a directed acyclic dependency graph between components
- A policy has an associated **level**
    - The distance from the inputs and outputs
- Some policies are *low-level*
    - i.e., close to the input or output
    - A ==detail== of how we are moving data around
    - Lowest level are those managing inputs and outputs
- Some policies are *high-level*
    - Higher-level policies are farther from the inputs and outputs
    - Policies that describe what matters in our program
    - ==What actually matters==; what we’re actually trying to do

# Use Cases for a Program

> [!def]- Use Case
> - A single interaction between the user and computer

Imagine you were asked to write a program that allows users to:
- ==Register a new user account== (with username and password)
- ==Log in to a user account==
- ==Log out of a user account==

<!-- break -->
- Planning to have a few different kinds of accounts, but start with one for now
- Highlighted words are **use cases**
    - ==What will the user want to do?==

1. What data needs to be represented?
2. What data structure might you use while the program is running?
    - As our program is running, we have multiple interactions from our user
    - May register new account, and want to go back and log in
3. What should happen if the user quits and restarts the program?
    - How do we make sure that when the user comes back after quitting, their account is still there?
    - → Persistence of data

## Use Case: User Registers New Account

- & We want to think of our use case as a description of a policy in our program
    - Some parts of policy will be low-level or high-level
    - Core logic of what we are trying to achieve = high-level policy we have

<!-- break -->
- Input:
    - User chooses a username
    - User chooses a password and *enters it twice* (to help them remember)
- Higher-level policy (of when we try to register a new user):
    - **If username already exists** → ==system alerts the user==
    - **If two passwords do not match** → ==system alerts the user==
    - **If username doesn’t exist in system and the passwords match** → ==system creates the use but does not log them in==
    - % These are all things that describe what the program does
    - Highlight: Output
    - Bold, red: Our high level policy

## Use Case: User Logs In

- User enters a username and password
- If username exists in system and passwords match → System shows that user is logged in
- If no such username → System alerts the user
- If password does not match the one in the system → System alerts the user

## Use Case: User Logs Out

- System logs the user out and informs the user

## Use Case: When Logged Out, Choose Use Case

> [!note]+ As we introduce what a use case is, we want to think of it as a specific interaction a user has with the program
> - Typically corresponds to some input from user
> - Response from program
> - User being displayed new information

- User chooses between the user *registers* a new account use case and the *user logs in* use case
    - Can think of this as another use case in our program
    - Almost trivial: The user presumably clicks some button → Changes the view for user

# Burning Questions

> [!abstract] If you start to think about how this looks, you almost automatically have to think of the following details

- ==What is the *user interface*?==
    - How are we ==getting the input==, and what does the user see (==display==)?
        - & <u>Emphasis:</u> We should not have to choose UI at this point.
            - If our goal is to design a system that allows user to register → Don’t want to restrict ourselves to one of the four following choices right off the get-go
            - Client may have different ideas about what UI they should have
            - Shouldn’t matter to you as the designed
    - Webpage
    - Java application on computer
    - Python command line program
    - Mobile app
- ==How to do *data persistence*?==
    - How do we store the accounts somewhere?
        - Another detail in the program that we do not have to think about designing right now
    - Text file? JSON?
    - Database?
    - Google Drive/OneDrive/etc.?

> [!goal] We want to design our system so that it is easy to implement these details after the fact.

