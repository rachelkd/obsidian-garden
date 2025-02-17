---
{"dg-publish":true,"permalink":"/900-archive/y2-fall-24/csc-207/00-java/polymorphism/","tags":["cs","java","lecture","note","university"],"created":"2024-10-05T21:30:15.825-07:00","updated":"2025-02-10T15:01:32.674-08:00"}
---


# Polymorphism

- **Polymorphism**
    - Ability of an object to take many forms
    - Consider an object to be *polymorphic* if it passes multiple `instanceof` tests

```java
class Dog extends Canine implements Domesticatable {...}
```

- `Dog` is also a `Canine` (which might have further superclasses like `Animal`)
- Also `Domesticatable`
- $\implies$ Pass `instanceof` tests for all these types

<!-- break -->
- Example of polymorphism in use:
    - When we have a variable whose value may be of a type other than the variable’s type itself
    - e.g., being a subclass of that type, or if type in question is an interface, a class implements it

```java
Animal[] animals = {new Cat(), new Dog(), new Axolotl()};

for (Animal a : animals) {
    a.eat();    // 'a' in this line of code can have various types!
}
```

*This example exhibits polymorphism.*
