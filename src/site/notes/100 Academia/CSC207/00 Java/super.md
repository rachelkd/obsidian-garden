---
{"dg-publish":true,"permalink":"/100-academia/csc-207/00-java/super/","tags":["#cs","#java","#lecture","#note","university"],"created":"2024-10-05T20:41:16.300-07:00","updated":"2024-10-05T21:30:16.030-07:00"}
---


- `super` keyword
    - Can use to call parent’s constructor
        - `super()`, `super(a, b, c)`
    - Can use to call a parent’s method
        - `super.method()`

# Constructors with `super`

- If extending another class $\implies$ Java *requires* a call to a superclass’ constructor to be made in the subclass’ constructor
- Call *must* be the very ==first thing== done
    - If no constructor call is explicitly made in subclass’ constructor $\implies$ implicit call to `super()` will be made

```java
class Child extends Parent {
    int attribute1;
    int attribute2;

    public Child(int a, int b) {
        // There's no super() call here, but it's implicit!
        this.attribute1 = a;
        this.attribute2 = b;
    }
}
```

The above code is equivalent to:

```java
class Child extends Parent {
    int attribute1;
    int attribute2;

    public Child(int a, int b) {
        super();  // What happens if Parent has no empty constructor?
        this.attribute1 = a;
        this.attribute2 = b;
    }
}
```

- If `Parent` did not have a constructor that takes no args $\implies$ error would be raised during compilation
- ==Best to explicitly include our `super(…)` calls in our constructors==
