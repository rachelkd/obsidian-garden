---
{"dg-publish":true,"permalink":"/100-academia/csc-207/01-software-developer-skills-and-tools/week-2-intro-to-java-and-oop-in-java/","tags":["#lecture","#note","cs","university"],"created":"2024-09-10T13:53:07.000-07:00","updated":"2024-10-09T14:39:03.770-07:00"}
---


> [!goal]- Learning Objectives
>
> 1. Running Java programs
> 2. OOP in Java
>     - Parts of a class
>     - Inheritance
>     - Constructors

---

# Lecture Notes

## From [[100 Academia/CSC207/01 Software Developer Skills and Tools/Week 1 - A Tour of Software Design, Version Control\|Week 1 - A Tour of Software Design, Version Control]]

> [!question]+ Questions to be answered this week:
>
> 1. What is the structure of a Java class? (declaration, variables, …)
> 2. What are the possible accessibility modifiers and primitive types in Java?
> 3. What is the difference between the equals method and the `==` operator?
> 4. What will `var1 == var2` evaluate to if `var1` and `var2` have reference types? have primitive types? Why?
> 5. All Java classes are subclasses of “Object”. We call Java classes “reference types” as opposed to “primitive types”. What is the difference between the two?

## More Java

> [!question]- Questions to be answered this week:
>
> 1. How do we compile and run Java programs? What is the JVM?
> 2. What is the structure of a Java class? (declaration, variables, …)
> 3. Since the constructor of a parent class is not inherited by a subclass, how does the parent part of a subclass instance get constructed?
> 4. What is the difference between overriding, overloading, and inheriting a method? Write a definition for each.
> 5. What are the different ways that a subclass instance can access private information in the parent class?
> 6. What is casting? When do we use it? Why should we avoid using it too much?

> [!question]+ Questions to be answered this week:
>
> 1. How is a constructor different from a method? Include information about what each does as well as the difference in syntax.
> 2. What does it tell other programmers if you include a getter but not a setter for a variable?
> 3. Where do the `toString` and equals methods come from if we didn’t write them ourselves?
> 4. Can you have more than one constructor?
> 5. What is a getter method? When do we need one?
> 6. What is a setter method? When do we need one?
> 7. What is the benefit of making everything as close to private as possible?
> 8. Question 3 describes “encapsulation”. Why do we consider private variables with public methods to be better encapsulated than public variables and private methods?
> 9. Consider the variables `x` and `y`, where
>    `    Person x = new Person(…);
    Student y = new Student(…);
   `
>    Why can we use `y` in the place of a `Person` object, but not use x `in` the place of a `Student`?
>
> 10. What does “override” and “shadow” mean?
> 11. What is “the compiler”? What sorts of issues prevent IntelliJ from compiling?
> 12. “The compiler does not keep track of object types, only variable types.” What does that mean?
> 13. Give one of the reasons why it is useful to have all classes inherit from the Object class.
> 14. How does the memory model diagram show two aliases for the same object?
> 15. Consider variable `z` where
>     `    Person z = new Student(...);
   `
>     If we call `z.moogah()` but `moogah` is not a `Person` method, where will the compiler check for the `moogah` method? (In the Object class? In the Student class? etc.)
> 16. Why do we bother to write Javadoc instead of relying completely on inline comments?
> 17. How does inheritance work in Java?
> 18. Consider the variable `stu1`, where
>
> ```
> Person stu1 = new Student();
> ```
>
> If we call `stu1.getStudentNumber`, do we expect the compiler to be able to find the “`getStudentNumber`” method? Why or why not?

-   [[100 Academia/CSC207/01 Software Developer Skills and Tools/How Java is Run\|How Java is Run]]
-   [[100 Academia/CSC207/01 Software Developer Skills and Tools/Representing Data in Your Program\|Representing Data in Your Program]]
-   [[100 Academia/CSC207/01 Software Developer Skills and Tools/OOP in Java\|OOP in Java]]
