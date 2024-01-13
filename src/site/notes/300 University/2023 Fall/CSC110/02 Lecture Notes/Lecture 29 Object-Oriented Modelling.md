---
{"dg-publish":true,"permalink":"/300-university/2023-fall/csc-110/02-lecture-notes/lecture-29-object-oriented-modelling/","created":"2023-12-02T15:43:00.164-05:00","updated":"2024-01-13T16:56:06.154-05:00"}
---

#CSC110

**Covers:**
- [[300 University/2023 Fall/CSC110/01 Course Notes/11 Case Study/11.1 The Problem Domain Food Delivery Networks\|11.1 The Problem Domain Food Delivery Networks]]
- [[300 University/2023 Fall/CSC110/01 Course Notes/11 Case Study/11.2 Object-Oriented Modelling\|11.2 Object-Oriented Modelling]]
- [[300 University/2023 Fall/CSC110/01 Course Notes/11 Case Study/11.3 A “Manager” Class\|11.3 A “Manager” Class]]
---
```table-of-contents
```
---
# Story so far

| Representing data              | Operating on data |
| ------------------------------ | ----------------- |
| Built-in data types            | Operators         |
| Data classes (bundles of data) | Functions                  |

- Python’s **general** classes (class that we have defined that is not a data class) give us the ability to organize code into entities that specify:
	1. How data is represented (**attributes**)
	2. How to operate on that data (**methods**)

# Object-Oriented Modelling

- Object-Oriented Programming (OOP)
	- Common programming paradigm that revolves around representing various client entities as “objects”
	- Each object can:
		- contain data (as attributes)
		- have the ability to do some tasks (using methods)

## Four pillars of OOP

- OOP involves objects interacting with each other based on four core principles:
	1. abstraction (focus on essential elements, reveal only what is needed)
	2. encapsulation (keeping implementation details private)
	3. inheritance
	4. polymorphism (write general code that can handle different types of objects)

## Analyzing specifications in OOP

### Designing classes based on client specifications
- When creating a model of a large system, it is easiest to first **design classes to represent individual entities in that system**
	- How do we identify “individual entities”?
#### Identifying entities: collections of data
- What are the characteristics/properties of that bundle of data that we should keep track of?
	- Things it *has*
- e.g., Twitter → Tweets are entities
	- Includes message content
	- User who wrote the tweet
	- When the tweet was created
	- How many likes the tweet has

- What are the actions related to the bundle of data?
	- The things it can *do*, things that can be *done* to it
- e.g., Tweets
	- It may be liked by other users
	- Tweet may be edited by its owner (with restrictions)

- Identify different roles that people/groups play in the domain
	- Users

#### Translating our specification analysis to code
- For each entity, we create a class and focus on identifying **attributes** for each class

```python
class Tweet:
	"""A tweet, like in Twitter."""
	content: str
	userid: str
	created_at: date
	likes: int
```

```python
class User:
	"""A twitter user."""
	userid: str
	bio: str
	tweets: list[Tweet]
```
<div class="caption" style="color: grey"><i>This is an example of <b>composition</b>.</i></div>
`User` has an attribute whose type depends on another class that we’ve created.
## Class composition
- class inheritance
	- indicates an “is-a” relationship
	- e.g., “`Stack1` is a `Stack`”
- class composition
	- indicates a “has-a” relationship
	- e.g., “A `User` has `Tweets`”

## Note: Attribute choice is a design decision
- It is *our* responsibility to choose appropriate attributes for our classes.
- Considerations:
	1. What information is necessary for our application’s functions?
	2. What information will our users be willing to share?
	3. What information may be useful for future extensions?
	4. Does keeping track of certain information make our code more complex or slower?
- It is possible to change these decisions over time (but must be careful when doing so)

## Managing several entities

> [!note] 
> When there are many relevant classes involved, one common OOP design practice is to have a “manager” class whose purpose is to keep track of all entities in the system

### The Manager Class

```python
class SuperDuperManager:
	"""A class responsible for keeping track of all
	vehicles in the system.
	
	=== Sample usage ===
    >>> sdm = SuperDuperManager()
    >>> sdm.add_vehicle('Car', 'car1', 25)
    >>> sdm.get_vehicle_position('car1')
    (0, 0)
    >>> sdm.get_vehicle_fuel('car1')
    25
    >>> sdm.move_vehicle('car1', 5, 10)
    >>> sdm.get_vehicle_position('car1')
	(5, 10)
	"""
	_vehicles: dict[str, Vehicle]
```

- `_vehicles` map unique name to object
#### Why private attributes
- Communicating intent:
	- `SuperDuperManager` should be responsible for keeping track of the entities directly
	- External code does not need to know about how this is done
	- External code should call methods to update the state of the system

#### Handling mutation
- `SuperDuperManager` is responsible for handling all *mutating changes* in the system, e.g.:
	- Add a new vehicle
	- Move an existing vehicle to a new position, if possible
		- e.g., if it has enough fuel