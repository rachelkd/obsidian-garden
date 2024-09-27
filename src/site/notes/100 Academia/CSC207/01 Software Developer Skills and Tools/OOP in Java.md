---
{"dg-publish":true,"permalink":"/100-academia/csc-207/01-software-developer-skills-and-tools/oop-in-java/","tags":["university","#lecture","#note","cs"],"created":"2024-09-13T16:14:45.653-04:00","updated":"2024-09-27T18:53:08.925-04:00"}
---

# Example of a University software system

```java file:"Main.java"
public class Main {  
    // psvm shorthand  
    public static void main(String[] args) {  
        // No classes need a main method; entry-point to program  
        // In Python, this happened normally        
        // Could have a main method in every class if you wanted 
        // => bunch of different programs
        Person p = new Person("Paul", "Gries", "griespau");  
        Student s = new Student("Jonathan", "Calver", "calv", "1234567890");  
        Person p2 = s;  
  
        // Can get student ID, but can't run same method on Person instances  
        // e.g., p.getStudentID() and p2.getStudentID() will not work       
        s.getStudentID();  
        // Cast to Student, i.e., Whisper a hint to Java:  
        ((Student) p2).getStudentID();  
        ((Student) p).getStudentID();  // Will throw a ClassCastException
        // because p is not an instance of Student
    }  
}
```

```java file:Person.java
public class Person {  
    // Make your list of instance variables  
    // final means that you can assign to it once    
    private String first;  
    private final String last;  
    private final String utorid;  
  
    public Person(String first, String last, String utorid) {  
        // To save these parameters:  
        // Use this keyword. Similar to self in Python. Refers to the current object
        // i.e., one the constructor is part of.        
        this.first = first;  
        this.last = last;  
        this.utorid = utorid;  
    }  
  
    // Getter method for this.utorid  
    // Only code inside the curly braces of the method can look at private information   
    // e.g., only code inside class Person can use private variables    
    // vs. Python: Instead of "I hope you can't use these variables," 
    // you can't use these variables    
    public String getUtorid() {  
        return utorid;  
        // No confusion about which utorid because constructor parameter is out of scope.  
    }  
  
    public String getFirst() {  
        return first;  
    }  
  
    public void setFirst(String newFirst) {  
        this.first = newFirst;  
    }  
}
```

```java file:Student.java
public class Student extends Person {  
    private final String studentID;  
  
    public Student(String first, String last, String utorid, String sid) {  
        // The first thing that happens in any constructor call is that
        // it calls the inheritance constructor.
        // There always is a constructor call        
        // Person inherits from Object class (like Python)
        super(first, last, utorid);  
        this.studentID = sid;  
    }  
  
    public String getStudentID() {  
        return studentID;  
    }  
}
```

# Encapsulation

- “To encapsulate”:
    - Put all the info together (instance attributes, methods) into one class
- Think of your class as providing a service:
    - ==Provide access to information through a well-defined interface==
    - i,.e., **public methods** of the class
    - ==Hide the implementation details==
- What is the advantage of this “encapsulation”?
    - Can change implementation (e.g., to improve speed, reliability, readability)
    - No other code must change!
    - e.g., we can refer to Person in Main without even implementing Person methods!
- Class may not be perfect, but it is *encapsulated*
    - Can later change implementation

# Class Design Tips

- Everything should be as private as possible
    - ==Always make instance variables private!==
- Create public methods only when necessary → public methods provide an API
    - For each instance variable, decide whether to provide a public **getter**, **setter**, or both
- Setter method $\implies$ object is *mutable*
    - Otherwise, object is *immutable* → safer, often faster
- Look at how class will be used: are there additional methods that would make that easier

# Programming interface

- User for almost all code is a programmer
- User wants to know:
    - What data your class manages
    - What actions it can take (methods)
    - What properties your object has (getter methods)
    - What guarantees your methods and objects require and offer
        - How they fail and react to failure
        - What is returned and what errors are raised

# Inheritance in Java
![](https://i.imgur.com/toPGoJu.png)

- UML class diagram
- Arrows indicate **inheritance**, i.e., UML shows inheritance hierarchy
- Dotted arrow means create or uses
- Shows class relationships
- NOT a memory model

# Java Memory Model

## Multi-part objects in the Java Memory Model

Suppose class `Child` extends class `Parent`.

- An instance of class `Child` has a:
    - `Child` part
    - `Parent` part
    - `Grandparent` part, …etc., all the way up to `Object`
- An instance of `Child` can be used anywhere that a `Parent` is legal
    - i.e., A variable of any type can refer to `Child`
        - e.g., `Person p = new Student(…)`, `Object p = new Student(…)`
- But not the other way around
    - `Child` may have additional methods not in the `Parent` class

## Shadowing and Overriding

Suppose class `A` and its subclass `AChild` each have an instance variable `x` and an instance method `m`.

![|200](https://i.imgur.com/Rbkw1TD.png)

- `A`’s `m` is **overridden** by `AChild`’s `m`:
    - Often want to *specialize* behaviour in a subclass
    - Java calls the ==lowest== method in the object
    - Not *overloaded*: two methods with the same name of the same class
        - Here, we have two methods with the same name *and* same ==parameter types==
- `A`’s `x` is **shadowed** by `AChild`’s `x`:
    - Java uses the type of the reference to choose
        - e.g., If compiler does not find `x` in `AChild`, it *goes up* in the hierarchy and looks there
            - Never down except for overridden methods!
    - ==Avoid public instance variables with the same name== in a parent and child class
- If a method must not be *overridden* in a descendant,
    - Declare it `final`

### An example.

```java file:Main.java
public class Main {

    public static void main(String[] args) {
        String[] name = {"First", "Middle", "Last"};
        Person p1 = new Person(name, "moogah");
        System.out.println(p1);
        Student s1 = new Student(name, "frooble", "1234567890");
        System.out.println(s1);
    }
}
```

- What do lines 6 and 8 print to console?
    - `Person.toString()` and `Student.toString()`
- What if we changed line 5 to `Object p1 = new Person(…)`?
    - Would still print `Person.toString()`
    - NOT `Object.toString()`; output is the same
- Which method does an object take when it *extends* another object?
    - The ==lowest-level== method(s) in the hierarchy

# Casting for the compiler

- Java compiler uses the type of the reference to determine whether a statement is valid

```java
Object o = new String("Hello");
char c = o.chatAt(1);
```

- Does the above code compile?
    - No
    - Problem in second call
- ==Compiler does not keep track of object types==
    - Only keeps track of variable types
    - Compiler does not run the code; can only look at type of `o` to determine whether it is legal
- → Need to **cast** `o` as a `String`
    - `char c = ( (String) o).charAt(1);`
    - Make sure that `o` can be casted as a `String` object! Dangerous, if not

# Checking object type

- At runtime, we can use operator `instanceof` to determine whether an object is an instance of the specified type

```java
Object o = "Yo";
if (o instanceof String) {
    char c = ((String) o).charAt(1);
}
```