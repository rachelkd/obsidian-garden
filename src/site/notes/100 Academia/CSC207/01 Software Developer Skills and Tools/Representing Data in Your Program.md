---
{"dg-publish":true,"permalink":"/100-academia/csc-207/01-software-developer-skills-and-tools/representing-data-in-your-program/","tags":["#lecture","#note","cs","java","university"],"created":"2024-09-10T19:23:03.000-07:00","updated":"2024-10-08T22:36:29.681-07:00"}
---


> [!goal]- Learning Objectives
>
> 1. Be able to analyze a written problem specification and identify a set of classes that describe the data
> 2. Understand how nouns and verbs relate to objects and methods

# Specification Analysis

How do you specify what you want built? How do you do that in a systematic way?

-   Part of the Object-Oriented development paradigm
-   Highly interactive and human-intensive

-   Take what someone wants → turn to result
-   How do we come up with the **entities** for our system?
    -   Initial set of ==classes== that can ==represent the data== from the problem domain
    -   Design custom classes that serve as types of all our data in our problem
    -   _What_ are the initial classes, rather than _how_ do I implement this?

## Unified Modelling Language (UML) Class Diagrams

-   We do a noun-verb analysis and create UML class diagrams
-   Also link them up using arrows → represent **dependencies**
-   We write:
    -   name of the class,
    -   document attributes of the class, and
    -   methods it has

![](https://i.imgur.com/GO1pxhc.png)

> [!important] This is the _what_ we’re doing, not the _how_.

## The Process

-   Typically given a _specification_
    -   Written description of the requirements
    -   Obviously written in terms of the language of the domain
        -   Not in objects, classes, attributes
        -   Dev’s job to convert to OOP
-   Work in a team
    -   Ideally, gather around a table
    -   Might use index cards (one per class) to move around

## Discovering Classes

-   Read the specification repeatedly
-   Figure out how to ==represent the data== in the program:
    -   Identify core **classes**
        -   Look for important nouns and noun phrases
    -   Identify **methods**
        -   Look for verbs
    -   Identify **attributes**
        -   Look for adjectives and nouns that describe the core classes
    -   Identify other classes that this class needs to talk to in order to fulfil its responsibilities → **collaborators**
    -   Refine; identifying abstract classes, inheritance, generalizations, etc.
        -   Might be more useful for the future; adding features
    -   Keep refining/adding until everyone on team is sufficiently satisfied

# Example: University Personnel

Consider this description of a software system that you are developing to keep track of employees and students at a university.

A university wants an application to manage ID cards for people who work for or who attend the university. When a ==_person_== is hired, they are assigned a unique identifier that we’ll call a ==utor ID==. A person may have an arbitrary number of ==names== — first and last, maybe a middle name, maybe just first, maybe seven names. People should be able to change any of their names.

Some people at university are ==_students_==. Students also have another unique identifier called a ==student ID==.

When a person’s information is displayed, the university wants the full name plus any identifiers, all on one line.

![|200](https://i.imgur.com/6pOiJhw.png)
_A potential starting point for design._
