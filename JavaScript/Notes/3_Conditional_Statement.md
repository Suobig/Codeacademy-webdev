# Conditional Statement

## The `if` keyword

if keyword is used in _conditional statements_. It contains of:

* `if` keyword
* _condition_ in parentheses `()` that returns `true` or `false`
* _block statement_ in curly brackets `{}`

Block statement is executed only If condition returns `true`.

## If...Else statement

If statement can be directly followed by `else` with another block statement that's executed if the condition returns `false`.

## Comparison operators

`>`, `<`, `<=`, `>=`, `===`, `!==`

## Logical operators

* the _and_ operator `&&`
* the _or_ operator `||`
* the _not_ operator `!`

## Truthy and falsy

Most values when converted to a boolean, will return either `true` or `false`. If it converts to `true`, it's considered a _truthy_ value, otherwise _falsy_.

Some falsy values:

* `0`
* empty string
* null
* undefined
* NaN

## Truthy and Falsy Assignment

You can use `||` in an assignment statements, to provide the second value if the first one is falsy:

```javascript
const currentUser = user || "defaultUser";
```

## Ternary operator

Ternary operator looks like this:

`<condition> ? <true block> : <false block>`

## Else If Statement

We can add another `if` keyword and condition right after `else` but before block statement.

## The `switch` keyword

Don't use it.
