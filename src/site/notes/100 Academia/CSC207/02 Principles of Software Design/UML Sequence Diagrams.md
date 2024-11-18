---
{"dg-publish":true,"permalink":"/100-academia/csc-207/02-principles-of-software-design/uml-sequence-diagrams/","tags":["cs","lecture","note","university"],"created":"2024-10-20T16:58:41.891-04:00","updated":"2024-11-14T13:38:37.607-05:00"}
---


# How Data Flows in the Clean Architecture

![](https://i.imgur.com/HeOnhes.png)

Recall [[100 Academia/CSC207/02 Principles of Software Design/Clean Architecture\|Clean Architecture]]:
- Data flows from the user → action method → through the Controller → the Use Case Interactor
- Interactor will *create*, *read*, *update*, and *delete* any appropriate Entities for that interaction using DAOs to create, read, update, and delete the corresponding data in a database or a set of files
- When Interactor is done, resulting data needs to flow from the Interactor → through the Presenter → back to the View
- Each View may contain several user actions, each of which has 1 action method
- Each action method has 1 Controller
- Each Controller has 1 Interactor
- Each Interactor has 1 to several Data Access Objects and 1 Presenter
- Presenter has 1 to several View models
- Various Views are observing the appropriate View Models so that each knows when to update itself

# A First Sequence Diagram

![](https://i.imgur.com/gGf2xA9.png)

## PlantUML for the Bank Example

![](https://i.imgur.com/oP2Gkcj.png)

# What Sequence Diagrams Show

- UML Sequence Diagram tells the story of how and when methods are called during code execution
- Can read the code to figure out the sequence of calls and draw one of these
    - Using as much or as little detail about parameters and return values as you like
    - Can indicate variable names, or not
- SequenceDiagram plugin in IntelliJ can do this too
- Can also make Sequence Diagram as part of your design process *before* writing any code

# Example from the Login Codebase

See [[100 Academia/CSC207/02 Principles of Software Design/Clean Architecture\|Clean Architecture]] for User Login specification.

![](https://i.imgur.com/cS57XfN.png)

- <u>Limitation</u>: When you generate sequence diagrams in IntelliJ, it does not know what which interface you are using
    - Green box: Never get to see what happens inside of it
    - Immediately returns (because we do not know which concrete implementation we have)
        - Dotted arrow
- → Go to concrete implementation and generate another sequence diagram

# Other Side of the Boundary

![](https://i.imgur.com/GfhnISI.png)

- Sequence of steps that our `SignupInteractor` takes
