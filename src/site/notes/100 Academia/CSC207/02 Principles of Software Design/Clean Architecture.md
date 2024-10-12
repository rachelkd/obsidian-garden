---
{"dg-publish":true,"permalink":"/100-academia/csc-207/02-principles-of-software-design/clean-architecture/","tags":["cs","lecture","note","todo","university"],"created":"2024-10-10T19:58:31.603-04:00","updated":"2024-10-11T01:08:07.944-04:00"}
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
>     - What does it do with that input?
>     - Think of it like a description of a function

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

## Burning Questions

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

## Design Conundrums

- How can we design the use cases so that they ==do not directly depend== on the UI and persistence choices?
    - → Then can test all the use cases thoroughly without dealing with input/output
- What are the use case APIs?
    - What is the interface to each use case?
    - What public methods do we want to provide to call the use cases from the UI?
- What persistence methods will we need in any storage?
    - Saving
    - Finding a user by username
    - etc.

# Clean Architecture

## Business Rules

Brief summary of Ch. 20 from Clean Architecture textbook.

- Terminology all centred around **use cases** in our program

> [!def]+ Entity
> - An ==object within our computer system== that embodies a small set of Critical Business Rules operating Critical Business Data
> - Objects that represent critical business data (variables) and critical business rules (methods)

- Previously, given a written specification → do noun-verb analysis → come up with *classes* that represent core data in program ([[100 Academia/CSC207/01 Software Developer Skills and Tools/OOP in Java\|OOP in Java]], [[100 Academia/CSC207/01 Software Developer Skills and Tools/Representing Data in Your Program\|Representing Data in Your Program]])
    - We really have been creating a set of **entities** for our system
- Think of entities as our ==domain-specific knowledge==
    - Set of classes that represents all the information we need
    - e.g., User account example: Might have the entity `User` in our program
- These are the very **high-level policies** that we might have in our program
    - What actually matters
    - Represents what we can do in our program

> [!def]+ Use Case
> - A *description* of the way that an automated system is used
> - ==Specifies input== to be provided by user, ==output== to be returned to user
>     - Does not actually say anything about *how*, just what
> - Specifies ==processing steps== involved in producing that output
> - Use case describes *application-specific* business rules ==as opposed to the Critical Business Rules within the Entities==

- Application-specific:
    - The interactions that a user can have within the application
- Processing steps:
    - Have sequence of steps → Allows us to leave a lot of details out still
    - May have a list of steps → Does not mean use case is going to do all the work itself
    - → Delegates work to other parts of the program

## Entities

> [!def]- Entities
> - Objects that represent critical business data (variables) and critical business rules (methods)

- In CA, **entities** are the:
    - **Highest-level** policies
        - Can think of it like a set of policies
    - ==Core== of the program
- Examples:
    - a `Loan` in a bank
    - a `Player` in a game
    - a set of high scores
    - an item in an inventory system
    - a part in an assembly line

## Use Case

> [!def] Use Case
> - Description of the way that an automated system affects **entities**
> - Use cases *manipulate* entities
>     - Making use of our entities (objects in our systems)
>     - Use case make use of these objects, decides which methods to use that are in the entities
>     - → Introduces the idea of **layers** in our system
>         - Use case built on top of our entities
> - Specifies ==input== to be provided by the user, ==output== to be returned to the user, ==processing steps== involved in producing that output

- Think of use case as a *function*/method in our program
    - Inputs, outputs, and implementation logic
- Use cases know *nothing* about the details of the UI or data storage mechanism; just that they exist
    - Need this idea that we *can* get info from outside world; don’t need to worry about how

## Clean Architecture Layers

![](https://i.imgur.com/joXqKc6.png)

- Can think of this as a UML diagram
    - Use cases are going to depend on our entities
    - ![|300](https://i.imgur.com/Sx1wcdI.png)
    - If we stop at these two layers, these two are fully *describing* what our program does (high-level policy)
    - System is a set of use cases → Manipulates entities

> [!important] In order for people to actually use and interface with our system, we need to build some layers on top of that: **interface adapters**, **frameworks and drivers**

- We get input from the UI → Plug it into our interface adapters → Change it into input for our use cases
- Top two part of our program describes how we transform inputs and outputs to what is expected for our program
    - We define what the inputs/outputs are in our use case
    - Rest of the program needs to be designed for this (hence, *adapters*)
- **Interface adapters** connects us with our actual program
    - **Controllers**:
        - Responsible for getting input from outside world
        - Takes input from frameworks and drivers
        - Converts it to inputs that our use case needs
    - **Presenters**:
        - Get the output from use case/program
        - Turn it into whatever format our framework and drivers need
- $\implies$ Our lowest-level policies are at the top, highest-level at bottom
- ==Dependencies flow from top to bottom==
    - Everything low-level at top *depends* on high-level policies at the bottom

![|500](https://i.imgur.com/4roBsL8.png)

- Often visualize layers as concentric circles
- Reminds us that entities are at the core
- Input and output are both in outer layers
- Bottom right picture:
    - Flow of control in our program: Represents **dependency inversion**
    - Go from input from user → Producing an output (while not violating this dependency rule we introduced in CA)
- We go from outer layer to inner layer, then coming back out (if you look at flow of control)

## Dependency Rule

- All our ==dependencies point inwards==
- Dependence within same layer is allowed
    - But try to minimize coupling
- On occasion, might find it unnecessary to explicitly have all four layers
    - Most certainly want at least three layers and sometimes even more than four
- & Name of something (functions, classes, variables) declared in an outer layer must not be mentioned by code in an inner layer
    - Look at `import` statements to see if you’re violating this
    - e.g., Importing a Controller class from inside an Entity class → <u>Violation of CA</u>
        - And Controller referencing an Entity also likely a violation
    - We do not want any high level policies to depend on low level policies
    - Can use IntelliJ generate a dependency graph for project
- Use **dependency inversion** to go from inside to outside
    - Inner layer can depend on an interface, which outer layer implements

![](https://i.imgur.com/WbzCyLO.png)
*Dependency inversion.*

