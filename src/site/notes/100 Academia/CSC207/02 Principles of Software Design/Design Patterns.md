---
{"dg-publish":true,"permalink":"/100-academia/csc-207/02-principles-of-software-design/design-patterns/","tags":["cs","java","lecture","note","todo","university"],"created":"2024-10-24T16:28:27.986-07:00","updated":"2024-10-24T22:10:13.578-07:00"}
---


> [!question]+ Questions to be answered this week
> 1. What is a design pattern?
> 2. What are the three categories of design patterns we will cover?
> 3. For each of the following design patterns: Dependency Injection, Builder, Strategy, Observer, Adapter, Façade
>    1. Name the pattern
>    2. Describe the problem that it fixes
>    3. How the solution (the pattern) works including the roles of each class that is involved
> 4. In the ethics portion of this weeks lectures, we discussed why designing for the majority of users can cause “tangible harms” and “harm to relational equality”. Give an example of each.

# Design Patterns

> [!def]+ Design Pattern
> - A general description of the solution to a well-established problem
> - Every design pattern is aimed at solving a design problem
>     - e.g., Maybe code is too dependent; how do you break this?

- Patterns describe the shape of the code rather than the details
- Means of communicating design ideas
- Not specific to any single programming language

More about patterns in CSC301 (Intro to Software Engineering) and CSC302 (Engineering Large Software Systems)

## Loose Coupling, High Cohesion

> [!goal]+ Two goals of object-oriented design
>
> > [!def]- Coupling
> > - The interdependencies between objects
> > - Fewer couplings → Better $\implies$ Can test and modify each piece independently
> > - If you have a complex object graph where there are many dependencies → *Highly coupled* → Changing code in one part causes ripple effect across rest of program
> > - ! Want to avoid this
>
> > [!def]- Cohesion
> > - How strongly related the parts are inside a class
> > - About a class
> > - A class is *cohesive* if the data and behaviour of these objects makes sense
> > - **High cohesion**:
> >     - A class does one job, and does it well
> > - **Low cohesion**:
> >     - Class has parts that do not relate to each other
> > - e.g., `Customer` class might have `getName`, `getAddress`, but also `sendEmail` that sends an email to the customer → Weird; not a major responsibility of the customer → ==not cohesive==

> [!important] Design patterns are often applied to <mark style="background: #D2B3FFA6;">decrease coupling</mark> and <mark style="background: #D2B3FFA6;">increase cohesion</mark>

- Notice that you can increase cohesion by removing an irrelevant method
    - Not always about *adding*!
- & Keep [[100 Academia/CSC207/02 Principles of Software Design/Solid Design Principles\|SOLID]] principles in mind when discussing each design pattern
    - SRP, OCP, LSP, ISP, DIP

# Gang of Four

- First codified by the Gang of Four in 1995
- Original book described 23 patterns
    - More have been added

> [!summary]+ Book provides an overview of
> - **Design Pattern Name**
> - **Problem**
>     - When to use the pattern
>     - Motivation:
>         - Sample application scenario
>     - Applicability:
>         - Guidelines for when your code needs this pattern
> - **Solution**
>     - Structure:
>         - **UML Class Diagram of generic solution**
>     - Participants:
>         - Description of the basic classes involved in the generic solution
>     - Collaborations:
>         - Describes relationships and collaborations among the generic solution participants
>         - e.g., Does your Observer have an instance variable that is your Observable, does the Observable have a list of Observers that are observing it? Or does an object manage all of that communication
>     - Sample code
> - **Consequences, Known Users, Related Patterns, Anti-patterns**

# Design Pattern Categories

> [!def]+ Creational
> - Patterns related to how we *create* instances of our classes

> [!def]+ Behavioural
> - Patterns related to how instances of our classes *communicate*

> [!def]+ Structural
> - Patterns related to how classes can naturally *fit* together
>     - While obeying SOLID principles

- Design patterns covered in [[100 Academia/CSC207/CSC207\|CSC207]]
    - **Creational**:
        - Dependency Injection, Simple Factory, Builder
    - **Behavioural**:
        - Strategy, Observer
    - **Structural**:
        - Adapter, Façade

# Creational Patterns

## Dependency Injection

> [!def]+ ==Dependency== relationship between two classes
> - i.e., “using” relationship
> - ==One class has an instance variable or uses a parameter of another class==
>     - One class depends on another
> - If the second class changes, the thing that depends on it is likely to change as well
>     - e.g., A class `Course` may depend on a class `Student` because a `Course` contains instances of class `Student`

> [!def]+ Dependency Injection Design Pattern
> - A design pattern where dependencies are provided to a class from the outside rather than created inside the class
> - Reduces coupling by removing hard dependencies
> - Allows for greater flexibility and easier testing by enabling different implementations to be “injected”
>
> > [!warning]+ Problem
> > - We are writing a class, and we need to assign values to the instance variables, but we do not want to introduce a **hard dependency**

### Dependency Injection Example

> [!def]+ Hard Dependency
> - Using operator `new` inside first class can create an instance of a second class that cannot be used nor tested independently

#### Before

```java title:"Example. Hard Dependency"
public class Course {
    private List<Student> students = new ArrayList<>();
    
    public Course(List<String> studentsNames) {
        for (String name: studentNames) {
            Student student = new Student(name);
            students.add(student)
        }
    }
}
```

- If you change the `Student` constructor, you would have to change how `Course` creates new `Student`s
- Violates SRP: `Course` is also responsible for *creating* `Student`s
- If you want multiple types of `Student`s (i.e., subclasses), you can’t
- ! Hard dependency prevents you from writing subclasses of `Student` and injecting it

> [!warning]+ Problem
> - We are writing a class, and we need to assign values to the instance variables, but we do not want to introduce a **hard dependency**

#### After

> [!success]+ Solution
> - Create the `Student` objects *outside* and *inject* them into `Course`
> - $\implies$ Allows subclasses of `Student` to be injected into `Course`

> [!def]+ Inject
> - Pass in as a parameter to a constructor or a setter or adder

```java title:"Example. Dependency Injection"
public class Course {
    private List<Student> students = new ArrayList<>();
    
    // Student objects are created outside the Course class and injected here.
    public add(Student s) {
        this.students.add(s);
    }
    
    // We might also inject all of them at once.
    public addAll(List<Student> studentsToAdd) {
        this.students.addAll(studentsToAdd);
    }
}
```

- Purpose of the `Course` is to *organize* students, not create them
    - Up to the Main program to decide what kind of Student object to instantiate
    - No longer responsibility of `Course`
- ? Is there another hard dependency in the code?
    - `ArrayList`

> [!important] Hard dependencies are not necessarily bad, except in the context of data that needs to be *flexible*

### Dependency Injection: In Practice

- Where have we seen **Dependency Injection** before in [[100 Academia/CSC207/02 Principles of Software Design/Clean Architecture\|CA]]?
    - Anytime you use a reference type as a parameter
    - Anytime you have a method that takes any class type
    - Not injecting if it is primitive
- How does the [[100 Academia/CSC207/02 Principles of Software Design/Solid Design Principles\|Dependency Inversion Principle]] relate to the **Dependency Injection Design Pattern**?
    - Kind of all of them except for perhaps ISP
    - SRP: Should `Course` create Students? Probably not.
        - Another example of why old way was bad: You can’t share Students in two different courses
    - LSP: Can pass in subclasses of Students and use them
    - DIP: Dependency injection allows you to invert a dependency → Directly related

## Simple Factory

> [!def]+ ==Simple Factory== Design Pattern
>
> > [!warning]+ Problem
> > - One class wants to interact with many possible related objects
>
> > [!check]+ Solution
> > - We want to obscure the creation process for these related objects
> > - Later, we might want to change the types of the objects we are creating → Avoid hard dependencies

> [!summary]+ Paul’s Analogy
> - Let’s say you are building a car in a factory. You also want to build the car manual.
> - Volkswagen does this all in one piece of software; Don’t want to rewrite software every time they make a car
> - Want to repurpose the Factory:
>     - Factory needs to be able to build only some of the things
>     - e.g., No heated seats in this model
>     - Also need to build the car manual that has exactly the same features as the car you bought
> - May want a Factory for building car and another Factory for building the manual
>     - Make sure they take the same steps
>     - Define those steps in the abstract Factory that your two subclasses inherit from
>     - One’s building a car, one’s building a book that can follow the same abstract Factory steps
> - ==Want to obscure the creation process for these related objects==
>     - Might want to change the types of objects to avoid hard dependencies

### Example. Shape Factory

![](https://i.imgur.com/Px1luCf.png)

- & Whole point is to *decouple* the Shape factory and allow it to create all of these different kinds of things
    - Returning an interface type
    - “Could you build me a Square/Rectangle/Circle?”
    - Method that you called is going to be creating all of these shapes
    - Pass in a String e.g., `"circle"` in `getShape` if you want a circle

### Factory: In Practice

> [!question]+ What do we gain by having the factory be responsible for creating instances of objects for us?
> - Factory’s sole responsibility is to build these objects
> - Taking away responsibility of construction from these objects themselves

> [!question]+ Is it still a “Factory” if the method only returns instances of one class (e.g., `Rectangle`) and not instances of a subclass?
> - i.e., Is it still a Factory if we replace a `ShapeFactory` with a `RectangleFactory`, where the `Rectangle` class has no subclasses?
> - Is it still useful to replace `ShapeFactory` with `RectangleFactory` if all we need are `Rectangle` objects

- In our CA example, we have a `CommonUserFactory` that always builds a `CommonUser`
    - ? Is that bad?
    - Allows you to give anyone who wants it a factory for building these things
        - e.g., Things on the use case might need a factory for making users, Data Access Layer might need a factory for making users
- & By moving the responsibility of creation from the object in some class itself to a factory, you can pass this factory object all around
    - Might help us in the way we think about designing the rest of the program
- Helps with OCP:
    - Allows you to create other kinds of shapes if you decide to in the future

## Builder

> [!def]+ ==Builder== Design Pattern
>
> > [!warning]+ Problem
> > - Need to create a complex structure of objects in a step-by-step fashion
>
> > [!check]+ Solution
> > - Create a `Builder` object that creates the complex structure

![](https://i.imgur.com/8iFvy4H.png)

*`Builder` is an interface or abstract class (italicized).*

- Which of these boxes is `AppBuilder` in Homework 5?
    - `ConcreteBuilder`
- `Director`?
    - `Main` program
    - Does not always exist

<!-- break -->
- Back to Paul’s Analogy of a Car Factory:
    - If you define an abstract builder class, you can use that abstract builder and have a concrete car builder and a concrete car manual builder
    - Director will be handed — one at a time — the car builder (will go build the car) and car manual builder (will use the exact same sequence of method calls, but build the manual instead)

### Without App Builder Version

Note: Only Signup Shown.

```java title:Director
final JFrame application = new JFrame("Login Example");
final CardLayout cardLayout = new CardLayout();
final JPanel views = new JPanel(cardLayout);
application.add(views);

final ViewManagerModel viewManagerModel = new ViewManagerModel();
new ViewManager(views, cardLayout, viewManagerModel);

final SignupViewModel signupViewModel = new SignupViewModel();
final DBUserDataAccessObject userDataAccessObject = new DBUserDataAccessObject(
    new CommonUserFactory()
);

final SignupView signupView = SignupUseCaseFactory.create(
    viewManagerModel,
    loginViewModel,
    signupViewModel,
    userDataAccessObject
);

views.add(signupView, signupView.getViewName());
```

### App Builder Version

```java title:AppBuilder.java
final AppBuilder appBuilder = new AppBuilder();
final JFrame application = appBuilder
                .addLoginView()
                .addSignupView()
                .addLoggedInView()
                .addSignupUseCase()
                .addLoginUseCase()
                .addChangePasswordUseCase()
                .build();
```

### Sequence Diagram: Before

![](https://i.imgur.com/hp61Phy.png)

- Sequence for `Main.main` from Homework 5, Phase 1
- A ==subset of the diagram== for setting up the Signup part of the CA engine
- Note: Factory helps hide some of the details for us

### Sequence Diagram: After

![](https://i.imgur.com/iRJ3zTJ.png)

- Sequence diagram for when we create the lab-5 application in `Main.main`
    - Only shows part related to the Signup Use Case
- A ==subset of the digram== for setting up the Signup part of the CA engine
- Note: The final `JFrame` is created by the `Builder` for us when we build the app

![|center|400](https://i.imgur.com/XxrI8Jc.png)

- Sequence diagram for when we create the lab-5 application in `Main.main` like before
- Hides calls to constructors
- Details are hidden in `AppBuilder`!

### More Builder Examples

- [Repo](https://github.com/spotify-web-api-java/spotify-web-api-java) that extensively uses builder (See [SpotifyApi.java](https://github.com/spotify-web-api-java/spotify-web-api-java/blob/master/src/main/java/se/michaelthelin/spotify/SpotifyApi.java))
- [IntelliJ refactoring to replace a constructor with a builder](https://www.jetbrains.com/help/idea/replace-constructor-with-builder.html)
- Comparison of Factory and Builder [article](https://medium.com/javarevisited/design-patterns-101-factory-vs-builder-vs-fluent-builder-da2babf42113)

### Builder Design Pattern: In Practice

> [!question]+ Where have we seen builders before?
> - StringBuilders

> [!question]+ How complicated does an object have to be to require a builder?
> - If all you have is the `build` method where you only call the constructor and return that thing, then you probably don’t need a builder
> - Hard to distinguish from a Factory at that point, anyway
> - ==If there’s a sequence of steps, and you’re allowed to choose which steps you want to include → Use `Builder`==

> [!question]+ Which SOLID principles does the Builder design pattern follow?
> - SRP:
>     - ==Responsibility of the Director to choose which features to build==
>     - ==Responsibility of the Builder to maintain the currently built application and return it at the end==
> - OCP:
>     - Can add new steps pretty easily