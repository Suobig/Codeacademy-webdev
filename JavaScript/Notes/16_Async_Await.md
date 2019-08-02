# Async Await

`async ... await` was added in ES8 in 2017. It's a _syntactic sugar_ - it doesn't introduce any new functionality into the language, just a new syntax for using promises and generators.

## The `async` keyword

The `async` keyword is used to write functions that handle async actions. We wrap async actions into a functions and then call that function:

```javascript
async function myFunc() {
  // Function body here
};

myFunc();
```

We can also use asyn for function expressions:

```javascript
const myFunc = async () => {
  // Function body here
};

myFunc();
```

Async functions always return a promise, so we can use traditional promise syntax, using `.then()` and `.catch()` with async functions.

The async function will return in one of three ways:

* If there's nothing returned from the function, it'll return a promise with a resolved value of `undefined`.
* If there's a non-promise value returned from the function, it will return a promise resolved to that value.
* If a promise is returned from the function, it will simply return that promise.

## The await Operator

By itself `async` doesn't do much. It's almost always used with `await` inside function's body.

`await` can **only** be used inside `async` functions' body. `await` is an operator that returns the resolved value of a promise. So `await` halts execution of `async` function unit resolve value is received.

Usually we don't write promises ourselves but receive them from a library.

Using `async` and `await` we can write asynchronous code in synchronous manner.

## Handling errors

For `async ... await` we use `try ... catch` construction for handling errors.

## Handling Independent Promises

If we want our promises to be executed concurrently and only then meet up for the final result, we can use this syntax:

```javascript
async function concurrent() {
 const firstPromise = firstAsyncThing();
 const secondPromise = secondAsyncThing();
console.log(await firstPromise, await secondPromise);
}
```

## `await Promise.all()`

Another way to use concurrency is to mix `Promise.all()` with `await`:

```javascript
const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
```
