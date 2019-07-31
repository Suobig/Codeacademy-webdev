# Classes

## Introduction

Classes are a tool that developers use to quickly produce similar objects.

## Constructor

Javascript calls `constructor()` method each time it creates a new _instance_ of a class.

By convention, class names should be written in PascalCase.

## Instance

An _instance_ is an objects that contains the property names and methods of a class, but with unique property values.

## Methods

Private properties and methods start with underscore `_` to indicate that they aren't supposed to be accessed directly.

## Method Calls

We can call class instance methods the same way we can call them on objects.

## Inheritance

Classes can inherit from their parent properties and methods.

Parent class is also known as _superclass_ and child classes as _subclasses_.

To inerit in Javascript we need to `extends superclassName` to subclass declaration after its name.

Also, we need to call superclass's constructor in our subclass constructor using `super(arguments)` as a first command in constructor (at least before any usage of `this`).

## Static methods

Static methods belong to class itself. not to its instances. So we can't access static methods from class instance, only from class itself.
