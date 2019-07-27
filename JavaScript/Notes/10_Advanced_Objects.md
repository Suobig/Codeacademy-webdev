# Advanced Objects

## The `this` Keyword

The `this` keyword references the _calling object_ which provides access to it's properties.

## Arrow Functions and `this`

Arrow functions inherintly _bind_ `this` to itself, not the calling object. So we should avoid using arrow functions if we're going to use `this` in a method.

## Privacy

JS doesn't have built-in privacy features. So developers use naming conventions to indicate, that a property is private. For example, `_`.

## Getters

We can create a getter method by putting `get` keyword before method declaration.

In general, getter methods don't need parenthesis to be called.

## Setters

Seter methods reassign values of existing properties within an object.

As with getters, we don't need to use `()` when using setters. If we try to assign value to a property that has a getter, but doesn't have a setter - it won't set.

## Factory Functions

A factory function is a function that returns an object and can be reused to make multiple object instances.

## Property Value Shorthand

ES6 has new feature called _destucturing_. Now if we want to create an object from function's parameters, we can replace this:

```javascript
const objectFactory = (arg1, arg2) => {
    return {
        arg1: arg1,
        arg2: arg2,
    }
}
```

we can use this:

```javascript
const objectFactory = (arg1, arg2) => {
    return {
        arg1,
        arg2,
    }
}
```

This technique is called _property value shorthand_.

## Destructured Assignment

When we want to assign object's property to a variable, we can use desctuctive assignment. Instead of doing this:

```javascript
const property = myObject.property;
```

we can do this:

```javascript
const { property } = myObject;
```

## Built-in Object Methods

There're quite a few useful object instance methods, such as:

* `.hasOwnProperty()`
* `.valueOf()`

and useful object class methods such as:

* `Object.assign()`
* `Object.entries()`
* `Object.keys()`
