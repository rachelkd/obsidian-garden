---
{"dg-publish":true,"permalink":"/100-academia/csc-207/01-software-developer-skills-and-tools/week-2-intro-to-java-and-oop-in-java/","tags":["university","#lecture","#note","cs"],"created":"2024-09-10T16:53:07.154-04:00","updated":"2024-09-27T18:53:39.872-04:00"}
---

> [!info]- Learning Objectives
> 1. Running Java programs
> 2. OOP in Java
>     - Parts of a class
>     - Inheritance
>     - Constructors

> [!info]- Week Info
> ##### Slides
> <p><span><ul>
<li dir="auto"><a data-tooltip-position="top" aria-label="100 Academia/CSC207/Files/03-Java.pdf" data-href="100 Academia/CSC207/Files/03-Java.pdf" href="100 Academia/CSC207/Files/03-Java.pdf" class="internal-link" target="_blank" rel="noopener">03-Java.pdf</a></li>
</ul></span></p><p><span><ul>
<li dir="auto"><a data-tooltip-position="top" aria-label="100 Academia/CSC207/Files/03-entity-discovery.pdf" data-href="100 Academia/CSC207/Files/03-entity-discovery.pdf" href="100 Academia/CSC207/Files/03-entity-discovery.pdf" class="internal-link" target="_blank" rel="noopener">03-entity-discovery.pdf</a></li>
</ul></span></p><p><span><ul>
<li dir="auto"><a data-tooltip-position="top" aria-label="100 Academia/CSC207/Files/04-Java-OOP.pdf" data-href="100 Academia/CSC207/Files/04-Java-OOP.pdf" href="100 Academia/CSC207/Files/04-Java-OOP.pdf" class="internal-link" target="_blank" rel="noopener">04-Java-OOP.pdf</a></li>
</ul></span></p>


---
# Lecture Notes

## From [[100 Academia/CSC207/01 Software Developer Skills and Tools/Week 1 - A Tour of Software Design, Version Control\|Week 1 - A Tour of Software Design, Version Control]]:

> [!question]+ Questions to be answered this week:
> 1. What is the structure of a Java class? (declaration, variables, …)
> 2. What are the possible accessibility modifiers and primitive types in Java?
> 3. What is the difference between the equals method and the `==` operator?
> 4. What will `var1 == var2` evaluate to if `var1` and `var2` have reference types? have primitive types? Why?
> 5. All Java classes are subclasses of “Object”. We call Java classes “reference types” as opposed to “primitive types”. What is the difference between the two?

## More Java

> [!question] Questions to be answered this week:
> 1. How do we compile and run Java programs? What is the JVM?
> 2. What is the structure of a Java class? (declaration, variables, …)
> 3. Since the constructor of a parent class is not inherited by a subclass, how does the parent part of a subclass instance get constructed?
> 4. What is the difference between overriding, overloading, and inheriting a method? Write a definition for each. 
> 5. What are the different ways that a subclass instance can access private information in the parent class?
> 6. What is casting? When do we use it? Why should we avoid using it too much?

> [!question]+ Questions to be answered this week:
> 1. How is a constructor different from a method? Include information about what each does as well as the difference in syntax.
> 2. What does it tell other programmers if you include a getter but not a setter for a variable?
> 3. Where do the `toString` and equals methods come from if we didn’t write them ourselves?
> 4. Can you have more than one constructor?
> 5. What is a getter method? When do we need one?
> 6. What is a setter method? When do we need one?
> 7. What is the benefit of making everything as close to private as possible?
> 8. Question 3 describes “encapsulation”. Why do we consider private variables with public methods to be better encapsulated than public variables and private methods?
> 9. Consider the variables `x` and `y`, where
> ```
> Person x = new Person(…);
> Student y = new Student(…);
>     ```
>     Why can we use `y` in the place of a `Person` object, but not use x `in` the place of a `Student`?
> 
> 15. What does “override” and “shadow” mean?
> 10. What is “the compiler”? What sorts of issues prevent IntelliJ from compiling?
> 11. “The compiler does not keep track of object types, only variable types.” What does that mean?
> 12. Give one of the reasons why it is useful to have all classes inherit from the Object class.
> 13. How does the memory model diagram show two aliases for the same object?
> 14. Consider variable `z` where 
>     ```
>     Person z = new Student(...);
>     ```
> If we call `z.moogah()` but `moogah` is not a `Person` method, where will the compiler check for the `moogah` method? (In the Object class? In the Student class? etc.)
> 15.  Why do we bother to write Javadoc instead of relying completely on inline comments?
> 16. How does inheritance work in Java?
> 17. Consider the variable `stu1`, where 
>     ```
>     Person stu1 = new Student();
>     ```
> If we call `stu1.getStudentNumber`, do we expect the compiler to be able to find the “`getStudentNumber`” method? Why or why not?

- [[100 Academia/CSC207/01 Software Developer Skills and Tools/How Java is Run\|How Java is Run]]
- [[100 Academia/CSC207/01 Software Developer Skills and Tools/Representing Data in Your Program\|Representing Data in Your Program]]
- [[100 Academia/CSC207/01 Software Developer Skills and Tools/OOP in Java\|OOP in Java]]
