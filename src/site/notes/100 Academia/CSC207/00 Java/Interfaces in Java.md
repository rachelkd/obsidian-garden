---
{"dg-publish":true,"permalink":"/100-academia/csc-207/00-java/interfaces-in-java/","tags":["#cs","#java","#lecture","#note","university"],"created":"2024-10-05T23:25:12.420-04:00","updated":"2024-10-05T23:41:30.229-04:00"}
---


- In Java, you can only *extend* a single class ([[100 Academia/CSC207/00 Java/Inheritance\|Inheritance]])
    - Have one parent class and that’s it
- Sometimes want to describe more behaviours for a class in a way that just one parent will not suffice

Consider writing a program to simulate plants.

- Could have a class called `Plant`
    - All `Plant`s are able to `breatge` and `grow`
- Could have subclasses `Wheat` and `Flower` in their own subclasses
- However, suppose we want to indicate that some plants are edible for humans
    - e.g., `Corn` and `Basil` would have an `eat` method
- Not all plants are edible → Cannot add method to `Plant`
- Could *define* an `EdiblePlant` class, but would also need `EdibleWheat`, `EdibleFlower`, etc.
    - → Not clean solution!

<!-- break -->
- If we want to *define a property* of a class → Use **interfaces**
    - Similar to classes, except
    - ==No implementation details==; only *method signatures*
    - Can also have variables, but must be `static` and `final`

```java
interface Edible {
    void eat();
}
```

```java
class Corn extends Plant implements Edible {
    void eat(){
        ...    // Our implementation here!
    }
}
```

*Use the `implements` keyword.*

- Some food can be steamed, so we might want a `Steamable` interface
- `Steamable` foods $\implies$ is `Edible`

```java
interface Steamable extends Edible {
    void steam();
}
```

*Any class that `implements Steamable` must then have a `steam` and `eat` method.*

