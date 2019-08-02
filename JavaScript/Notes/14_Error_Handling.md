# Error Handling

## Runtime Errors

When an error is thrown, the program stops running and the console displays red text of the error message. If error happens when the program is running, it's considered _runtime error_.

## Constructing an Error

If we want to create a custom error, we need to use `Error()` function to create error object. If we just log an error object, it won't stop our program from running. We need to _throw_ the error.

## The `throw` keyword

When we use `throw` keyword, the program stops and code after `throw` statement doesn't execute.

## The `try ... catch` Statement

We can catch thrown errors.
