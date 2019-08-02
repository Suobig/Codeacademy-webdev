# Promises

## What is Promise

`Promise` is an object that represents the eventual outcome of an asynchronous opeartion. It can have one of 3 states:

* **Pending**: The initial state - the operation has not completed yet.
* **Fulfilled**: The operation has completed successfully and the promise nowahs a _resolved value_.
* **Rejected**: The operation has failed and the promise has a reason forfailure. Usually an Error of some kind.

We refer to promise as _settled_ if it's no longer pending.

## Constructing a Promise Object

To create a `Promise` object we need `new` keyword and an _executor function_ we pass into a Promise contructor:

```javascript
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);
```

_executor function_ takes 2 parameters - `resolve()` and `reject()` functions. Those functions are not defined by a programmer - they're passed by a Promise object.

Under the hood `resolve()` function takes 1 argument and changes promise's status from `pending` to `fulfilled`, and sets its resolve value to the argument passed into `resolve()`

`reject()` function takes a reason or an Error as an argument. It sets promise's status to `rejected` and its rejections reason to an agument passed into `reject()`.

## The Node setTimeout() Function

It's important to know how to use or _consume_ promises. Most of the time we'll be dealing with already constructed promises, returning to us as a result of different asynchronous operations.

We'll be simulating those asynch processes by `setTimeout()` function. It's part of Node API that is supported by modern browsers. It takes a callback function and a delay in milliseconds.

This delay is performed asynchronously. JavaScript uses something called _the event-loop_ to deal with asynchronous functions. There's no promise that the code we delayed for 2 seconds will execute _exactly_ after 2 seconds - there may be some other code in the line of the event loop that will be executed beforehand. The promise is that it will be executed _no less than_ 2 seconds.

## Consuming Promises

Promise objects have `.then()` method. `.then()` is a higher order function - it takes 2 callback functions as arguments. First is called `onFulfilled` and it's a success handler.

Second is called `onRejected` and it's a failure handler.

We can invoke `.then()` with 1, 2 or 0 handlers. If the  reject handler is not provided, `.then()` will return a promise with the same settled value as the promise it was called on.

`.then()` always returns a promise.

## Using `catch()` with promises

`.catch()` is another Promise method, that can help use separate success handling logic from failure hadling logic. The `.catch()` function takes only one argument: `onRejected`.

## Chaining multiple promises

Since `.then()` returns a promise, we can chain them to one another.

Process of chaining promises together is called _composition_.

One commong error is forgetting to return a promise in the `then()` chain.

## Using `Promise.all()`

`Promise.all()` is used when we need _concurrency_ - multiple async tasks executing at the same time. It takes an array of promises and exectues all of them.

If each promise is resolved, `Promise.all()` resolves with an array of resolve value from each promise in the argument array.

If any promise is rejected, `Promise.all()` immediately rejects with the reason that promise rejected. This behaviour is sometimes called _failing fast_.
