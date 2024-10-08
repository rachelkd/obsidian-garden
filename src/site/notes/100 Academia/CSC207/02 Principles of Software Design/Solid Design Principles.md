---
{"dg-publish":true,"permalink":"/100-academia/csc-207/02-principles-of-software-design/solid-design-principles/","tags":["#lecture","#note","cs","todo","university"],"created":"2024-10-01T19:37:05.915-04:00","updated":"2024-10-06T15:40:49.701-04:00"}
---


> [!info]- Learning Outcomes
> - Know what the five SOLID design principles are

- What are the five **SOLID** design principles?
    - **S**ingle responsibility principle (SRP)
    - **O**pen/closed principle (OCP)
    - **L**iskov substitution principle (LSP)
    - **I**nterface segregation principle (ISP)
    - **D**ependency inversion principle

# SOLID (Principles of Class Design)

## Summary

- SRP
    - Single Responsibility Principle
    - A class should have one, and only one, reason to change
- OCP
    - Open Closed Principle
    - You should be able to extend the behaviour of a class without modifying the class
- LSP
    - Liskov Substitution Principle
    - Derived classes must be substitutable for their base classes
    - i.e., Subclass better work everywhere the superclass works; shouldn’t remove ability
- ISP
    - Interface Segregation Principle
    - Make fine grained interfaces that are client specific
    - i.e., Want to have interfaces that are quite small
- DIP
    - Dependency Inversion principle
    - Depend on abstractions, not on concretions
    - i.e., Take this and do some magic, and all of a sudden, this dependency is removed

## Single Responsibility Principle

- Every class should have a single responsibility
- Another way to view: **a class should only have one reason to change**
- Who causes the change?
    - An actor
        - User of the program, or stakeholder, or a group of such people, or an automated process

> “This principle is about people. … When you write a software module, you want to make sure that when changes are requested, ==those changes can only originate from a single person, or rather, a single tightly coupled group of people representing a single narrowly defined business function==. You want to ==isolate your modules from the complexities of the organization as a whole==, and design your systems such that ==each module is responsible (responds to) the needs of just that one business function.==”

### A Story of Three Actors

- Domain: an `Employee` class from a payroll application
    - ![|100](https://i.imgur.com/GWVcqvD.png)

- Who is responsible for `calculatePay`?
    - HR, Accounting; Chief Financial Officer
- Who is responsible for `reportHours`?
    - HR; Chief Operations Officer
- Who is responsible for how information is `save`d?
    - IT, Databased administrators; Chief Technical Officer

Suppose methods `calculatePay` and `reportHours` share a helper method to calculate `regularHours` and avoid duplicate code.
- CFO decides to change how non-overtime hours are calculated → dev makes the change
- COO does not know about this: what happens?
    - Breaking how hours are reported

### Cause of Problem and Solution

- Cause of problem:
    - Code is “owned” by more than one actor
- Solution:
    - Adhere to Single Responsibility Principle
        - Factor out the data storage into an `EmployeeData` class
        - Create three separate classes, one for each actor
        - ![|300](https://i.imgur.com/ydmgztz.png)

### Façade Design Pattern

- Downside of solution: 
    - Need to keep track of three objects
    - NOT one!
- Solution:
    - Create a **façade**
    - Create an Employee Facade that has three instance variables
        - One for `PayCalculator`, `HourReporter`, and `EmployeeSaver`
    - ![|400](https://i.imgur.com/Vsu5qjd.png)

Every method in the facade will look like:

```java
public double calculatePay(...) {
    payCalculator.calculatePay(...)
}
```

- All three methods are one line long
- Facade delegates to the appropriate object
- Responsibilities are still covered by the three objects in the middle
- Can pass an instance of the facade around, and it is going to carry the other things with it in its instance variables
    - i.e., it *delegates* to the appropriate class

> [!important]+ We want each of these responsibilities to be in its own class
> - The proposed `regularHours` helper method is going to cause problems!

## The Open/Closed Principle

- Software entities (e.g., classes, modules, functions, etc.) should be **open for extension, but closed for modification**
- Add new features — *not* by modifying original class — but rather by:
    - Extending it and adding new behaviours, or by adding plugin capabilities
    - i.e., We’re adding behaviour, not breaking behaviour

### Example, Using Inheritance

![|300](https://i.imgur.com/n9Bxi87.png) ![|300](https://i.imgur.com/nWDrSkW.png)

- `area` method calculates the area of *all* `Rectangle`s in the given array
    - ? What if we need to add more shapes?
    - → Might want to make it work for circles too
- Could implement a `Circle` class and *rewrite* the area method to take in an *array of `Object`s*
    - use `isinstance` to determine if each `Object` is a `Rectangle` or a `Circle` so it can be cast appropriately
    - ![|300](https://i.imgur.com/LXhMJJt.png)
    - ![|300](https://i.imgur.com/1Q3esAz.png)
    - ? What if we need to add more shapes?

![|600](https://i.imgur.com/jGhX1SP.png)

- `Shape` is an **[[100 Academia/CSC207/01 Software Developer Skills and Tools/Interfaces\|interface]]** (Class name is in italics)
- `AreaCalculator` is providing a service:
    - Calculate the total area of all the shapes in the `shapes` array
- & With this design, we can add any number of shapes (open for ext.)
    - Don’t need to re-write the `AreaCalculator` class (closed for modification)

<!-- break -->
- ? Where does a class `Square` fit into this hierarchy?
    - Can it extend `Rectangle`?
        - No.
        - `Square` has an extra representation invariant that `width == height`
        - `Rectangle`’s `setWidth` and `setHeight` methods can break that
    - $\implies$ `Square` = own class that only implements `Shape` interface