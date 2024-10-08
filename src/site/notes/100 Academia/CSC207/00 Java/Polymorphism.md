---
{"dg-publish":true,"permalink":"/100-academia/csc-207/00-java/polymorphism/","tags":["#cs","#java","#lecture","#note","university"],"created":"2024-10-06T00:30:15.825-04:00","updated":"2024-10-06T00:34:55.353-04:00"}
---


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

