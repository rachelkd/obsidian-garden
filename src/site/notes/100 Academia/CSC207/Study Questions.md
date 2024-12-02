---
{"dg-publish":true,"permalink":"/100-academia/csc-207/study-questions/","tags":["cs","lecture","note","university"],"created":"2024-12-02T02:36:40.775-05:00","updated":"2024-12-02T03:36:19.727-05:00"}
---


# Study Questions

## Clean Architecture

We spent a lot of time referring back to the “typical scenario” of Clean Architecture. Roughly draw the diagram and briefly explains how it works — starting from the input entering the system from the UI and ending with something being displayed to the user. You can omit the part relating to the database. (4 marks)

- You have an **Interactor**
    - Where the real work happens
- Gets its input from the **Input Data**
    - Input Data is passed into the **Input Boundary** interface
- ? What implements the Input Boundary in CA?
    - Interactor
- Input Boundary specifies what method to call in order to run the use case (in the Interactor)
- On the way out, Interactor creates Output Data and hands it to the **Presenter**
- ? What does the Presenter implement?
    - The **Output Boundary**
- Output Boundary specifies the method that the use case is going to call once it is done processing and wants to show something to the user

<!-- break -->
- We start at the **View**
    - View gathers information from the input fields
    - Tells the **Controller**: “Here’s the data from the user. Could you please package it nicely for the Interactor”
- Controller packages the data from the View → Puts it in an **Input Data** object → Passes it to the Interactor *through* the **Input Boundary**
- **Interactor** has a task → Will do that task, but before it can do the task, it needs **Entities**
    - Needs to get data from the Data Layer (DAO) through the **Data Access Interface**
- **Data Access Object** returns the Entity → Use Case Interactor *manipulates* those Entities
- When Interactor is done, needs to present stuff to the user → Wraps data in an **Output Data** object → Passes to the **Presenter** through the **Output Boundary**
- Presenter is going to update the **View Model** with this new information
    - Because the ==View is observing the View Model==, the **View** is going to be updated as well

<!-- break -->
- Interactor is expecting data
- Data is going to come from the View, but the Interactor cannot look at that directly
    - Violation of **Dependency Rule**
    - Always have to go inwards
- Controller is packaging up the data into an Input Data object, and passing it into the Interactor
    - Interactor has said: “This is the important method to call to execute me”
    - Specifies that in the **Input Boundary**
- & Input Boundary exists to tell the Controller how to start the use case
- Whenever you make an Interactor, you have to say:
    - “Here’s how to call me”
        - Input Boundary
    - “Here’s the data that I expect”
        - Input Data
    - “Here’s the Presenter method that I am going to call when I am done”
        - Output Boundary
    - “Here’s the Output Data that I am going to send to the Presenter”
        - Output Data
    - In between, it needs access to Entities
        - → Talk *through* the Data Access Interface to the Data Access Object to get these Entities

> [!question]- What does the **Dependency Inversion Principle** say?
> - High level classes should *not* depend on low-level classes
> - In fact, both should depend on abstractions
>     - These abstractions are the Input Boundary and Output Boundary
>     - Use Case Interactor knows nothing about the outside
>         - Only knows: “Here’s how to call me,” “Here’s what I am going to call when I am done,” “I need to get Entities — here are the ones that I want”
>             - Says that in the Data Access Interface

## Java

> [!question]- What does a constructor do?
> - Initialize the instance variables

> [!question]- Do you have to include a constructor in every class? What happens if you *don’t* write a constructor for a class
> - & Default constructor
>     - No parameters
> - ? What’s in the method body
>     - `super`
> - Default constructor does not initialize any variables locally
>     - *Does* call the inherited constructor

> [!question]- If you write a constructor, do you get the default constructor?
> - No
>     - Java only makes a default constructor if you do not provide one
>     - Simply because you need to construct an object
>     - Need to make sure you’ve got your inherited part constructed

> [!question]- Does the constructor have to call `super`?
> - Constructor’s relationship with `super`:
>     - If the class extends another class (has a parent/superclass):
>         - `super` must be called if:
>             - Parent class does not have a no-argument constructor
>             - You want to call a specific parent constructor
>         - `super` can be omitted if:
>             - Parent class has a no-argument constructor
>             - Java will implicitly add `super` call
>     - If the class does not extend any class (besides Object):
>         - No need to call `super`
>         - Java implicitly extends Object which has a no-arg constructor
>     - Key rules:
>         - If called, `super` must be first statement in constructor
>         - Cannot access instance variables/methods before `super`
>         - Cannot use `this` before `super`
>     - Common mistakes:
>         - Forgetting `super` when parent has parameterized constructor
>         - Calling `super` after other statements

> [!question]- What are the “Java lookup rules”?
> - Process of finding methods/fields when using dot notation (e.g., `obj.method`)
>     - Start at declared type of reference variable
>     - Search process:
>         1. Look in current class for exact match
>         2. Look for compatible matches in current class
>         3. Look in superclass for exact match
>         4. Continue up inheritance chain
>         5. If nothing found, compilation error
>     - For method calls:
>         - Must match method name
>         - Parameters must be compatible
>         - Return type must be compatible
>     - For fields:
>         - Direct name match
>         - Type must be compatible
>     - Important notes:
>         - Compile-time: Uses declared type
>         - Runtime: Uses actual object type
>         - Private members not visible to subclasses
>         - Protected/package members visible within package
>     - Dynamic Dispatch (Runtime Polymorphism):
>         - For overridden methods, Java uses actual object type
>         - Example: `Shape shape = new Rectangle()`
>             - Compile-time: Checks if method exists in Shape
>             - Runtime: Calls Rectangle’s version if overridden
>         - Only applies to methods, not fields
>         - Static methods use declared type (no dynamic dispatch)
>             - Example: `Shape shape = new Rectangle()`
>             - Static method call `shape.staticMethod` uses Shape’s version
>             - Better style: Use class name `Shape.staticMethod`
